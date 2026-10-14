
// ══════════════════════════════════════════════════════════════
// SHAQAALE MAP ENGINE — Leaflet + OSM + OSRM
// Free, no API key. Works offline-ish with tile cache.
// ══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// SHAQAALE MAP ENGINE — Google Maps Platform
// Replace SHAQAALE_GMAPS_KEY with your Google Cloud API key
// APIs needed: Maps JS · Places · Directions · Geocoding
// ═══════════════════════════════════════════════════════════════
var GMAPS_KEY = (window.SHAQAALE_CONFIG && window.SHAQAALE_CONFIG.gmapsKey) || '';
var SQMap = (function() {

  var _maps        = {};   // id → google.maps.Map
  var _markers     = {};   // id → {pickup, dropoff, drivers:[]}
  var _routes      = {};   // id → DirectionsRenderer
  var _autocomplete= {};   // id → google.maps.places.Autocomplete
  var _loaded      = false;
  var _queue       = [];   // fns to run after API loads
  var MOG          = {lat: 2.0469, lng: 45.3182};
  var MOG_BOUNDS   = {north:2.5, south:1.6, east:45.8, west:44.8};

  // Dark map style — Google Maps dark theme
  var DARK_STYLE = [
    {elementType:'geometry',          stylers:[{color:'#0d1b2a'}]},
    {elementType:'labels.text.fill',  stylers:[{color:'#8899AA'}]},
    {elementType:'labels.text.stroke',stylers:[{color:'#0d1b2a'}]},
    {featureType:'administrative',    elementType:'geometry.stroke',stylers:[{color:'#1e3a5f'}]},
    {featureType:'administrative.land_parcel',elementType:'labels',stylers:[{visibility:'off'}]},
    {featureType:'poi',               elementType:'geometry',       stylers:[{color:'#0f2338'}]},
    {featureType:'poi',               elementType:'labels.text',    stylers:[{visibility:'off'}]},
    {featureType:'poi.park',          elementType:'geometry',       stylers:[{color:'#0f2338'}]},
    {featureType:'road',              elementType:'geometry',       stylers:[{color:'#1a3050'}]},
    {featureType:'road',              elementType:'geometry.stroke',stylers:[{color:'#0d1b2a'}]},
    {featureType:'road.highway',      elementType:'geometry',       stylers:[{color:'#1e3a5f'}]},
    {featureType:'road.highway',      elementType:'geometry.stroke',stylers:[{color:'#0d1b2a'}]},
    {featureType:'transit',           elementType:'geometry',       stylers:[{color:'#1a3050'}]},
    {featureType:'water',             elementType:'geometry',       stylers:[{color:'#071520'}]},
    {featureType:'water',             elementType:'labels.text',    stylers:[{visibility:'off'}]},
  ];

  // ── LOAD GOOGLE MAPS API ───────────────────────────────────
  function _load(cb) {
    if (typeof google !== 'undefined' && google.maps) { _loaded=true; if(cb)cb(); return; }
    if (cb) _queue.push(cb);
    if (document.getElementById('gmaps-script')) return;
    window._gmapsCallback = function() {
      _loaded = true;
      _queue.forEach(function(fn){ try{fn();}catch(e){} });
      _queue = [];
    };
    var s = document.createElement('script');
    s.id  = 'gmaps-script';
    s.src = 'https://maps.googleapis.com/maps/api/js?key='+GMAPS_KEY
           +'&libraries=places,geometry&callback=_gmapsCallback&loading=async';
    s.async = true;
    document.head.appendChild(s);
  }

  // ── INIT MAP ────────────────────────────────────────────────
  function init(containerId, opts, cb) {
    opts = opts || {};
    _load(function() {
      var el = document.getElementById(containerId);
      if (!el) return;

      // Destroy existing
      if (_maps[containerId]) {
        google.maps.event.clearInstanceListeners(_maps[containerId]);
        delete _maps[containerId];
      }
      _markers[containerId] = {};
      if (_routes[containerId]) _routes[containerId].setMap(null);

      var map = new google.maps.Map(el, {
        center:            opts.center || MOG,
        zoom:              opts.zoom   || 14,
        styles:            DARK_STYLE,
        disableDefaultUI:  true,
        zoomControl:       true,
        zoomControlOptions:{position: google.maps.ControlPosition.RIGHT_TOP},
        gestureHandling:   'cooperative',
        restriction:       {latLngBounds: MOG_BOUNDS, strictBounds: false},
      });

      _maps[containerId] = map;

      // Click to pin
      if (opts.onPickup) {
        map.addListener('click', function(e) {
          opts.onPickup(e.latLng.lat(), e.latLng.lng());
        });
      }
      if (opts.onDropoff) {
        map.addListener('click', function(e) {
          opts.onDropoff(e.latLng.lat(), e.latLng.lng());
        });
      }

      if (cb) cb(map);
    });
  }

  // ── PLACES AUTOCOMPLETE on input ────────────────────────────
  function attachAutocomplete(inputId, onPlace) {
    _load(function() {
      var input = document.getElementById(inputId);
      if (!input) return;
      if (_autocomplete[inputId]) return;

      var ac = new google.maps.places.Autocomplete(input, {
        componentRestrictions: {country: ['so','ke','et','dj','tz','ug']},
        fields: ['geometry','formatted_address','name'],
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(1.6, 44.8),
          new google.maps.LatLng(2.5, 45.8)
        ),
        strictBounds: false,
      });

      ac.addListener('place_changed', function() {
        var place = ac.getPlace();
        if (!place.geometry) return;
        var lat = place.geometry.location.lat();
        var lng = place.geometry.location.lng();
        var addr= place.formatted_address || place.name || '';
        onPlace(lat, lng, addr);
      });

      _autocomplete[inputId] = ac;
    });
  }

  // ── SET MARKER ──────────────────────────────────────────────
  function setMarker(mapId, type, lat, lng, label) {
    _load(function() {
      var map = _maps[mapId];
      if (!map) return;
      if (!_markers[mapId]) _markers[mapId] = {};

      // Remove existing marker of this type
      if (_markers[mapId][type]) _markers[mapId][type].setMap(null);

      var configs = {
        pickup:  {color:'#10B981', glyph:'📍', scale:1.2},
        dropoff: {color:'#EF4444', glyph:'🏁', scale:1.2},
        driver:  {color:'#F5A623', glyph:'🚗', scale:1.0},
      };
      var cfg = configs[type] || configs.pickup;

      // Advanced marker (pin style)
      var pin = new google.maps.marker.PinElement({
        background:  cfg.color,
        borderColor: '#ffffff',
        glyphColor:  '#ffffff',
        scale:       cfg.scale,
      });

      var marker = new google.maps.marker.AdvancedMarkerElement({
        map:      map,
        position: {lat: lat, lng: lng},
        title:    label,
        content:  pin.element,
      });

      // Info window
      var iw = new google.maps.InfoWindow({
        content: '<div style="color:#F8F9FC;font-size:13px;font-weight:600;padding:4px 0">'+label+'</div>',
      });
      marker.addListener('click', function(){ iw.open(map, marker); });

      _markers[mapId][type] = marker;
      map.panTo({lat: lat, lng: lng});
    });
  }

  // ── DRIVER MARKERS ──────────────────────────────────────────
  function setDrivers(mapId, drivers) {
    _load(function() {
      var map = _maps[mapId];
      if (!map) return;
      if (!_markers[mapId]) _markers[mapId] = {};

      // Remove old driver markers
      (_markers[mapId].drivers || []).forEach(function(m){ m.setMap(null); });
      _markers[mapId].drivers = [];

      drivers.forEach(function(d) {
        var el = document.createElement('div');
        el.innerHTML = '<div style="background:#F5A623;width:36px;height:36px;border-radius:50%;border:2.5px solid #fff;display:flex;align-items:center;justify-content:center;font-size:17px;box-shadow:0 2px 8px rgba(0,0,0,.4);cursor:pointer">🚗</div>';

        var marker = new google.maps.marker.AdvancedMarkerElement({
          map:      map,
          position: {lat: d.lat, lng: d.lng},
          title:    d.name,
          content:  el.firstChild,
        });

        var iw = new google.maps.InfoWindow({
          content: '<div style="color:#F8F9FC;font-size:13px"><b>'+d.name+'</b><br><span style="color:#8899AA">'+d.vehicle+' · '+d.eta+'</span></div>',
        });
        marker.addListener('click', function(){ iw.open(map, marker); });
        _markers[mapId].drivers.push(marker);
      });
    });
  }

  // ── DIRECTIONS + DISTANCE ───────────────────────────────────
  function drawRoute(mapId, fromLat, fromLng, toLat, toLng, cb) {
    _load(function() {
      var map = _maps[mapId];
      if (!map) return;

      if (_routes[mapId]) _routes[mapId].setMap(null);

      var ds = new google.maps.DirectionsService();
      var dr = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true,
        polylineOptions: {
          strokeColor:   '#F5A623',
          strokeWeight:  5,
          strokeOpacity: 0.9,
        },
      });

      ds.route({
        origin:      new google.maps.LatLng(fromLat, fromLng),
        destination: new google.maps.LatLng(toLat,   toLng),
        travelMode:  google.maps.TravelMode.DRIVING,
      }, function(result, status) {
        if (status === 'OK') {
          dr.setDirections(result);
          _routes[mapId] = dr;

          var leg  = result.routes[0].legs[0];
          var dist = (leg.distance.value / 1000).toFixed(1);
          var dur  = Math.round(leg.duration.value / 60);

          // Fit bounds to route
          map.fitBounds(result.routes[0].bounds);

          if (cb) cb({distance: dist, duration: dur, distText: leg.distance.text, durText: leg.duration.text});
        } else {
          if (cb) cb(null);
        }
      });
    });
  }

  // ── GEOCODE ─────────────────────────────────────────────────
  function geocode(query, cb) {
    _load(function() {
      var gc = new google.maps.Geocoder();
      gc.geocode({
        address:              query + ' Mogadishu Somalia',
        componentRestrictions:{country: 'SO'},
      }, function(results, status) {
        if (status === 'OK' && results.length > 0) {
          var out = results.slice(0,5).map(function(r) {
            return {
              display_name: r.formatted_address,
              lat:          r.geometry.location.lat(),
              lon:          r.geometry.location.lng(),
            };
          });
          cb(out);
        } else {
          cb([]);
        }
      });
    });
  }

  // ── REVERSE GEOCODE ─────────────────────────────────────────
  function reverseGeocode(lat, lng, cb) {
    _load(function() {
      var gc = new google.maps.Geocoder();
      gc.geocode({location: {lat: lat, lng: lng}}, function(results, status) {
        if (status === 'OK' && results[0]) {
          cb(results[0].formatted_address);
        } else {
          cb(lat.toFixed(5) + ', ' + lng.toFixed(5));
        }
      });
    });
  }

  // ── FIT MARKERS ─────────────────────────────────────────────
  function fitMarkers(mapId) {
    var map     = _maps[mapId];
    var markers = _markers[mapId] || {};
    if (!map) return;
    var bounds = new google.maps.LatLngBounds();
    var count  = 0;
    ['pickup','dropoff'].forEach(function(t) {
      if (markers[t]) { bounds.extend(markers[t].position); count++; }
    });
    if (count > 1) map.fitBounds(bounds, {top:50,right:50,bottom:50,left:50});
    else if (count===1) map.panTo(markers.pickup ? markers.pickup.position : markers.dropoff.position);
  }

  // ── DESTROY ─────────────────────────────────────────────────
  function destroy(mapId) {
    if (_maps[mapId]) {
      google.maps.event.clearInstanceListeners(_maps[mapId]);
      delete _maps[mapId];
    }
    (_markers[mapId] && _markers[mapId].drivers || []).forEach(function(m){m.setMap(null);});
    delete _markers[mapId];
    if (_routes[mapId]) { _routes[mapId].setMap(null); delete _routes[mapId]; }
    if (_autocomplete[mapId]) delete _autocomplete[mapId];
  }

  return {
    init:            init,
    attachAutocomplete: attachAutocomplete,
    setMarker:       setMarker,
    setDrivers:      setDrivers,
    drawRoute:       drawRoute,
    geocode:         geocode,
    reverseGeocode:  reverseGeocode,
    fitMarkers:      fitMarkers,
    destroy:         destroy,
    load:            _load,
  };
})();

