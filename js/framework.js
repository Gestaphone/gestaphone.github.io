/*
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SHAQAALE PRO — Google Maps Setup                           ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  1. Go to: console.cloud.google.com                         ║
 * ║  2. Create Project → Enable these APIs:                     ║
 * ║     • Maps JavaScript API                                   ║
 * ║     • Places API                                            ║
 * ║     • Directions API                                        ║
 * ║     • Geocoding API                                         ║
 * ║  3. Create API Key → Restrict to your domain                ║
 * ║  4. Replace SHAQAALE_GMAPS_KEY below with your key          ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ─────────────────────────────────────────────────────────────
// MINI FRAMEWORK — no external dependencies
// ─────────────────────────────────────────────────────────────
(function(){
'use strict';

// ── State management ──────────────────────────────────────────
var _state = {};
var _listeners = [];
var _root = null;
var _renderFn = null;

function setState(updates) {
  Object.assign(_state, typeof updates === 'function' ? updates(_state) : updates);
  _render();
}

function getState() { return _state; }

function _render() {
  if (!_renderFn || !_root) return;
  var html = _renderFn(_state);
  if (typeof html !== 'string') return;

  // Save scroll positions
  var _sc = {};
  document.querySelectorAll('[id$="Scroll"]').forEach(function(el){
    if (el.scrollTop > 0) _sc[el.id] = el.scrollTop;
  });

  // Save focused input state
  var _sv = {}, _focId = null;
  var _foc = document.activeElement;
  document.querySelectorAll('[data-id]').forEach(function(el){
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      _sv[el.dataset.id] = {v:el.value, s:el.selectionStart, e:el.selectionEnd};
      if (el === _foc) _focId = el.dataset.id;
    }
  });

  // Safely blur active element before replacing DOM
  try { if (_foc && _foc.blur) _foc.blur(); } catch(e) {}

  // Replace DOM
  _root.innerHTML = html;
  // Init maps after DOM update
  if (typeof initMapsAfterRender === 'function') {
    try { setTimeout(function(){ initMapsAfterRender(_state); }, 50); } catch(e){}
  }

  // Restore scroll positions
  Object.keys(_sc).forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.scrollTop = _sc[id];
  });

  // Restore input values and focus
  Object.keys(_sv).forEach(function(id){
    var el = document.querySelector('[data-id="' + id + '"]');
    if (el) {
      el.value = _sv[id].v;
      if (id === _focId) {
        try { el.focus(); el.setSelectionRange(_sv[id].s, _sv[id].e); } catch(e) {}
      }
    }
  });
}


window._fw = { setState: setState, getState: getState, render: function(root, fn, initState) {
  _root = root; _renderFn = fn; Object.assign(_state, initState || {});
  _render();
}};
})();
