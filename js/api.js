/* Shaqaale Pro — API client + glue between the UI state and the backend. */
(function () {
  'use strict';
  var S = window._fw;
  var KEY = 'shaqaale_token';
  var cfg = window.SHAQAALE_CONFIG || {};
  var base = cfg.apiBase || '/api';

  function getToken() { try { return localStorage.getItem(KEY) || ''; } catch (e) { return ''; } }
  function setToken(t) { try { if (t) localStorage.setItem(KEY, t); else localStorage.removeItem(KEY); } catch (e) {} }

  function request(method, path, body) {
    var headers = { 'Content-Type': 'application/json' };
    var t = getToken();
    if (t) headers.Authorization = 'Bearer ' + t;
    return fetch(base + path, { method: method, headers: headers, body: body === undefined ? undefined : JSON.stringify(body) })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (!r.ok) {
            if (r.status === 401 && t) { setToken(''); Shaq.resetSession(); }
            var e = new Error(j.error || 'Request failed (' + r.status + ')');
            e.status = r.status;
            throw e;
          }
          return j;
        });
      }, function () { throw new Error('Cannot reach the server. Check your connection.'); });
  }

  var api = {
    get: function (p) { return request('GET', p); },
    post: function (p, b) { return request('POST', p, b || {}); },
    put: function (p, b) { return request('PUT', p, b || {}); },
    patch: function (p, b) { return request('PATCH', p, b || {}); },
  };

  function digits(s) { return String(s || '').replace(/[^0-9]/g, ''); }
  function fullPhone(cc, local) { return '+' + digits(cc) + digits(local).replace(/^0+/, ''); }

  function toast(msg) { S.setState({ authError: msg, authInfo: '' }); }

  var Shaq = {
    api: api,
    fullPhone: fullPhone,
    hasToken: function () { return !!getToken(); },

    // ── session / data ─────────────────────────────────────────
    resetSession: function () {
      setToken('');
      S.setState({ user: null, bookings: undefined, wTxns: undefined, cForm: {}, wForm: {}, chatMsgs: [],
        screen: 'welcome', cTab: 'home', wdTab: 'home', chatWorker: null, bookWorker: null, viewWorker: null });
    },

    syncWorkers: function () {
      return api.get('/workers').then(function (r) {
        if (!r.workers || !r.workers.length) return;
        WORKERS.length = 0;
        r.workers.forEach(function (w) { WORKERS.push(w); });
        S.setState({ workersLoaded: Date.now() });
      }).catch(function () { /* keep bundled fallback list when offline */ });
    },

    loadData: function (user) {
      var jobs = [api.get('/bookings').then(function (r) { return r.bookings.slice().reverse(); })];
      if (user.role === 'worker') jobs.push(api.get('/wallet'));
      return Promise.all(jobs).then(function (res) {
        var upd = { bookings: res[0] };
        if (res[1]) upd.wTxns = res[1].txns;
        S.setState(upd);
      });
    },

    enterApp: function (user, screenOverride) {
      var p = user.profile || {};
      var isW = user.role === 'worker';
      var form = Object.assign({}, p);
      if (isW) form.name = user.name; else { form.name = user.name; }
      var upd = {
        user: user, authError: '', authInfo: '', devOtp: '', otpVal: '', loginStep: 0, loginPhone: '',
        screen: screenOverride || (isW ? 'wHome' : 'cHome'),
        epAvatar: user.avatar || '',
      };
      if (isW) upd.wForm = form; else upd.cForm = form;
      S.setState(upd);
      if (isW && user.verification && user.verification !== 'approved') Shaq.loadDocs();
      return Shaq.loadData(user);
    },

    boot: function () {
      Shaq.syncWorkers();
      if (!getToken()) return;
      api.get('/me').then(function (r) { return Shaq.enterApp(r.user); }).catch(function () {});
    },

    // ── auth ───────────────────────────────────────────────────
    requestOtp: function (role, cc, local) {
      S.setState({ authError: '', authBusy: true });
      return api.post('/auth/request-otp', { role: role, phone: fullPhone(cc, local) }).then(function (r) {
        S.setState({ loginStep: 1, authBusy: false, devOtp: r.devOtp || '', otpVal: '', authError: '' });
      }).catch(function (e) { S.setState({ authBusy: false, authError: e.message }); });
    },

    verifyOtp: function () {
      var st = S.getState();
      var role = st.loginRole || 'customer';
      if (st.authBusy) return;
      S.setState({ authError: '', authBusy: true });
      return api.post('/auth/verify-otp', { role: role, phone: fullPhone(st.loginCc || '+252', st.loginPhone), code: st.otpVal })
        .then(function (r) { setToken(r.token); S.setState({ authBusy: false }); return Shaq.enterApp(r.user); })
        .catch(function (e) { S.setState({ authBusy: false, authError: e.message }); });
    },

    register: function (role) {
      var st = S.getState();
      var form = role === 'worker' ? (st.wForm || {}) : (st.cForm || {});
      var cc = role === 'worker' ? (form.wcc || '+252') : (form.ccc || '+252');
      var profile = Object.assign({}, form);
      delete profile.avatar;
      delete profile.docs;
      S.setState({ authError: '', authBusy: true });
      return api.post('/auth/register', { role: role, phone: fullPhone(cc, form.phone), profile: profile, avatar: form.avatar || undefined, documents: role === 'worker' ? form.docs : undefined })
        .then(function () {
          S.setState({
            screen: 'login', loginRole: role, loginCc: cc, loginPhone: digits(form.phone), loginStep: 0, authBusy: false,
            authInfo: 'Account created! Tap "Send OTP" to verify your phone and sign in.', authError: '',
            cStep: 0, wStep: 0,
          });
        }).catch(function (e) { S.setState({ authBusy: false, authError: e.message }); });
    },

    loadDocs: function () {
      return api.get('/documents').then(function (r) { S.setState({ wDocs: r.documents }); }).catch(function () {});
    },

    uploadDoc: function (kind, data) {
      return api.post('/documents', { kind: kind, data: data }).then(function (r) {
        S.setState({ wDocs: r.documents });
        return api.get('/me').then(function (m) { S.setState({ user: m.user }); });
      }).catch(function (e) { alert(e.message); });
    },

    logout: function () {
      api.post('/auth/logout').catch(function () {}).then(function () { Shaq.resetSession(); });
    },

    saveProfile: function (role, form, avatar) {
      var profile = Object.assign({}, form);
      delete profile.avatar;
      return api.put('/me', { profile: profile, avatar: avatar || '' }).then(function (r) {
        S.setState({ user: r.user });
        return Shaq.syncWorkers();
      }).catch(function (e) { toast(e.message); });
    },

    setOnline: function (online) { return api.post('/workers/online', { online: online }).catch(function () {}); },

    // ── bookings ───────────────────────────────────────────────
    createBooking: function (payload, localId) {
      return api.post('/bookings', payload).then(function (r) {
        var list = (S.getState().bookings || []).filter(function (b) { return b.id !== localId; });
        S.setState({ bookings: list.concat([r.booking]) });
        return r.booking;
      }).catch(function (e) {
        S.setState({ bookings: (S.getState().bookings || []).filter(function (b) { return b.id !== localId; }) });
        alert(e.message);
      });
    },

    completeBooking: function (id) {
      return api.post('/bookings/' + id + '/complete').then(function (r) {
        S.setState({ bookings: (S.getState().bookings || []).map(function (b) { return b.id === id ? r.booking : b; }) });
        return r.booking;
      }).catch(function (e) { alert(e.message); });
    },

    rateBooking: function (id, stars) {
      return api.post('/bookings/' + id + '/rate', { stars: stars }).then(function () { return Shaq.syncWorkers(); })
        .catch(function (e) { if (e.status !== 409) alert(e.message); });
    },

    rateApp: function (stars) { return api.post('/app-rating', { stars: stars }).catch(function () {}); },

    // ── chat ───────────────────────────────────────────────────
    openChat: function (worker) {
      if (!getToken() || !worker || !worker.id) return;
      api.get('/messages?workerId=' + worker.id).then(function (r) {
        var cur = S.getState();
        if (!cur.chatWorker || cur.chatWorker.id !== worker.id) return;
        if (r.messages.length) S.setState({ chatMsgs: r.messages });
      }).catch(function () {});
    },

    sendMessage: function (worker, text) {
      return api.post('/messages', { workerId: worker.id, text: text }).then(function (r) {
        if (r.reply) {
          var t = new Date().toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' });
          var cur = S.getState();
          if (cur.chatWorker && cur.chatWorker.id === worker.id)
            S.setState({ chatMsgs: (cur.chatMsgs || []).concat([{ id: Date.now(), from: 'worker', text: r.reply, time: t }]) });
          setTimeout(function () { var el = document.getElementById('chat-msgs'); if (el) el.scrollTop = el.scrollHeight; }, 50);
        }
      }).catch(function (e) { toast(e.message); });
    },

    // ── worker wallet ──────────────────────────────────────────
    refreshWallet: function () {
      return api.get('/wallet').then(function (r) { S.setState({ wTxns: r.txns }); });
    },
    payout: function (kind, body) {
      return api.post('/wallet/' + kind, body).then(function () { return Shaq.refreshWallet(); });
    },

    // ── deliveries ─────────────────────────────────────────────
    createDelivery: function (order) {
      return api.post('/deliveries', { order: order }).catch(function () {});
    },
    deliveryStatus: function (trackId, update) {
      if (!update || !update.status) return;
      var body = { status: update.status };
      if (update.driver && typeof update.driver === 'object') {
        body.driver = {};
        ['name', 'phone', 'plate', 'vehicle'].forEach(function (k) { if (update.driver[k]) body.driver[k] = String(update.driver[k]); });
      }
      api.patch('/deliveries/' + encodeURIComponent(trackId), body).catch(function () {});
    },
  };

  window.Shaq = Shaq;

  // Workers waiting for approval pick up the admin's decision without re-login.
  setInterval(function () {
    var u = S.getState().user;
    if (!getToken() || !u || u.role !== 'worker' || u.verification === 'approved') return;
    api.get('/me').then(function (r) {
      if (r.user.verification !== u.verification || r.user.verifyNote !== u.verifyNote) S.setState({ user: r.user });
      Shaq.loadDocs();
    }).catch(function () {});
  }, 20000);
  // Payment methods disabled by the admin are hidden from the app's pickers.
  var payOff = {}, payCfg = null;
  var PAY_COLS = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444', '#06B6D4', '#EC4899', '#6366F1'];
  // The country that decides which payment methods are offered: the signed-in user's, else the one being entered on a form.
  Shaq.payCountry = function () {
    var st = S.getState();
    var u = st.user;
    if (u && u.profile && u.profile.country) return u.profile.country;
    var f = (st.epForm && st.epForm.country) || (st.cForm && st.cForm.country) || (st.wForm && st.wForm.country);
    return f || '';
  };
  function payAllowed(m) {
    var c = Shaq.payCountry();
    return !m.countries || !m.countries.length || !c || m.countries.indexOf(c) >= 0;
  }
  Shaq.payOn = function (p) {
    if (payOff[p.id]) return false;
    var m = payCfg && payCfg[p.id];
    return !m || payAllowed(m);
  };
  // Builds the picker list from the admin-managed methods for the user's country; `fallback` styles known ones.
  Shaq.payList = function (fallback, payoutOnly) {
    if (!payCfg) return fallback.filter(Shaq.payOn);
    var styled = {};
    fallback.forEach(function (p) { styled[p.id] = p; });
    var out = [], i = 0;
    Object.keys(payCfg).forEach(function (id) {
      var m = payCfg[id];
      if (!m.enabled || !payAllowed(m) || (payoutOnly && !m.payouts)) return;
      var base = styled[id] || {};
      i++;
      out.push(Object.assign({ icon: '&#128242;', col: PAY_COLS[i % PAY_COLS.length], abbr: payoutOnly ? m.label.toUpperCase() : m.label.replace(/[^A-Za-z]/g, '').slice(0, 3) }, base, { id: id, label: m.label, sub: m.sub || base.sub || '' }));
    });
    return out;
  };
  Shaq.payLabels = function (base) {
    var o = Object.assign({}, base);
    Object.keys(payCfg || {}).forEach(function (id) { o[id] = payCfg[id].label; });
    return o;
  };
  api.get('/public-config').then(function (c) {
    payOff = {}; payCfg = {};
    (c.methods || []).forEach(function (m) { payCfg[m.id] = m; if (!m.enabled) payOff[m.id] = true; });
    if (c.appName) document.title = c.appName;
    S.setState({ cfgLoaded: Date.now(), announcement: c.announcement || '' });
  }).catch(function () {});  // Desktop usability: mouse-wheel and click-drag scroll for horizontal swipe rows.
  function hRow(el) {
    while (el && el !== document.body) {
      if (el.scrollWidth > el.clientWidth + 2 && /(auto|scroll)/.test(getComputedStyle(el).overflowX)) return el;
      el = el.parentElement;
    }
    return null;
  }
  document.addEventListener('wheel', function (e) {
    var row = hRow(e.target);
    if (!row || Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (row.scrollHeight > row.clientHeight + 2 && /(auto|scroll)/.test(getComputedStyle(row).overflowY))) return;
    row.scrollLeft += e.deltaY;
    e.preventDefault();
  }, { passive: false });
  var drag = null, moved = false;
  document.addEventListener('mousedown', function (e) {
    var row = e.button === 0 ? hRow(e.target) : null;
    drag = row ? { row: row, x: e.clientX, left: row.scrollLeft } : null;
    moved = false;
  });
  document.addEventListener('mousemove', function (e) {
    if (!drag) return;
    var dx = e.clientX - drag.x;
    if (Math.abs(dx) > 5) moved = true;
    if (moved) drag.row.scrollLeft = drag.left - dx;
  });
  document.addEventListener('mouseup', function () { drag = null; });
  document.addEventListener('click', function (e) { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
})();
