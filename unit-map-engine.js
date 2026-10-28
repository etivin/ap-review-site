/* ══════════════════════════════════════════════════════════════
   Unit map engine: builds an interactive Leaflet reference map from
   one data object, window.UNIT_MAP, defined by the page (unitN-map.html).
   Same model as the hand-built Unit 2–4 maps:
     routes   = single-select base layer (lines and/or filled regions); drives the side panel
     polities = independent on/off region overlays (popup detail)
     themes   = independent on/off annotations (labels, cities, swooping "spread" arrows, …)
     journeys = optional "Follow an Explorer" voyages walked stop by stop with a ticker card
                (M.journeys {key:{name, sub, color, colorDark?, icon?, blurb, stops:[{n, yr, c,
                via?, land?, z?, topic?, what, impact}]}}, M.journeyOrder, M.journeyHead; via = the
                points between the previous stop and this one, land = a march drawn dashed,
                z = zoom for this stop; a leg may cross the date line, it is drawn on both edges)
   Coordinates are [lat, lng]. Basemap = bundled world-basemap.js (no tile service).
   ══════════════════════════════════════════════════════════════ */
(function () {
  var M = window.UNIT_MAP, ROUTES = M.routes, POLITIES = M.polities || {}, THEMES = M.themes || {};
  var ROUTE_ORDER = M.routeOrder || Object.keys(ROUTES);
  var POLITY_ORDER = M.polityOrder || Object.keys(POLITIES);
  var THEME_ORDER = M.themeOrder || Object.keys(THEMES);
  var SEC = M.sections || {};
  function sec(k, ico, lbl) { var s = SEC[k] || []; return '<span class="ico">' + (s[0] || ico) + '</span>' + (s[1] || lbl); }

  /* unit accent (matches the hub's --red) */
  var st = document.createElement('style');
  st.textContent = ':root{--red:' + M.accent + ';--red-d:' + M.accentD + ';--red-bg:color-mix(in srgb,' + M.accent + ' 8%,#fff)}' +
    ':root[data-theme="dark"]{--red:' + M.accentDark + ';--red-bg:rgba(255,255,255,.06)}';
  document.head.appendChild(st);

  /* ══ PAGE SHELL ══ */
  var hub = 'unit' + M.unit + '.html';
  document.body.insertAdjacentHTML('afterbegin',
    '<header class="bar"><div class="brand"><span class="badge">Unit ' + M.unit + '</span><div style="min-width:0">' +
      '<div class="btitle">' + M.title + '</div><div class="bsub">Interactive Map &middot; ' + M.years + '</div></div></div>' +
      '<nav class="links"><a href="' + hub + '">&#8592; Unit ' + M.unit + ' Hub</a><a href="./">All Units</a></nav></header>' +
    '<div class="wrap"><aside class="panel">' +
      '<button type="button" class="p-collapse" id="p-collapse">&laquo; Hide panel</button>' +
      '<div class="p-intro"><div class="p-eyebrow">Reference Map</div><h1>' + M.h1 + '</h1><p>' + M.intro + '</p></div>' +
      '<div class="route-btns"><div class="route-head">' + M.routeHead + '</div><div class="rb-list" id="rb-list"></div>' +
        '<div class="rb-all"><button type="button" id="btn-all">' + (M.allBtn || 'Show all') + '</button><button type="button" id="btn-reset">Reset view</button></div></div>' +
      (M.journeys ? '<div class="route-btns jr-wrap"><div class="route-head">' + (M.journeyHead || 'Follow an Explorer') + ' <span class="rh-hint">stop by stop</span></div><div class="rb-list" id="jr-list"></div></div>' : '') +
      (POLITY_ORDER.length ? '<div class="region-wrap"><div class="region-head">' + M.polityHead + ' <span class="rh-hint">layer any on</span></div><div class="pol-grid" id="pol-grid"></div><button type="button" class="thm-clear" id="pol-clear">Clear layers</button></div>' : '') +
      '<div class="region-wrap"><div class="region-head">' + (M.themeHead || 'Annotations') + ' <span class="rh-hint">layer any on</span></div><div class="thm-grid" id="thm-grid"></div><button type="button" class="thm-clear" id="thm-clear">Clear annotations</button></div>' +
      '<div class="p-body" id="p-body"></div>' +
      '<div class="approx">Borders and regions are approximate, drawn to show the big picture for AP review, not exact boundaries. The base map shows modern coastlines and countries.</div>' +
    '</aside><div class="mapcol"><div id="map"></div><div class="legend" id="legend"></div>' +
      '<button type="button" class="panel-open" id="panel-open">&raquo; Show panel</button><div class="ov-key" id="ov-key"></div>' +
      '<div class="jr-tick" id="jr-tick" role="region" aria-label="Explorer journey" aria-live="polite"></div>' +
      '<div class="map-hint">' + (M.hint || 'Click anything on the map to read more. Drag to pan, scroll to zoom.') + '</div></div></div>');

  /* ══ MAP SETUP ══ */
  var BASE_COLORS = { light: { land: '#f4f3ef', border: '#bcb8ae' }, dark: { land: '#3a3e46', border: '#5d6472' } };
  var map = L.map('map', { center: M.center, zoom: M.zoom, minZoom: 2, maxZoom: M.maxZoom || 8, attributionControl: true });
  map.setMaxBounds([[-72, -200], [82, 200]]);
  function isDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }
  map.createPane('basemap');
  map.getPane('basemap').style.zIndex = 200;
  map.getPane('basemap').style.pointerEvents = 'none';
  var baseRenderer = L.canvas({ pane: 'basemap', padding: 0.5 });
  function baseColors() { return isDark() ? BASE_COLORS.dark : BASE_COLORS.light; }
  var baseLand = L.geoJSON(WORLD_BASEMAP.land, { renderer: baseRenderer, interactive: false,
    style: function () { return { stroke: false, fillColor: baseColors().land, fillOpacity: 1 }; } }).addTo(map);
  var baseBorders = L.geoJSON(WORLD_BASEMAP.borders, { renderer: baseRenderer, interactive: false,
    style: function () { return { color: baseColors().border, weight: 0.8, opacity: 1 }; } }).addTo(map);
  map.attributionControl.addAttribution('Map data &copy; <a href="https://www.naturalearthdata.com/">Natural Earth</a>');
  function refreshTiles() { var c = baseColors(); baseLand.setStyle({ fillColor: c.land }); baseBorders.setStyle({ color: c.border }); }
  function rcol(r) { return isDark() && r.colorDark ? r.colorDark : r.color; }

  /* ══ ROUTES / BASE REGIONS ══ */
  var layers = {};
  function popup(name, note, tagColor, tag) {
    return '<div class="pop-name">' + name + '</div>' +
      (tag ? '<div class="pop-tag" style="color:' + tagColor + '">' + tag + '</div>' : '') +
      (note ? '<div class="pop-note">' + note + '</div>' : '');
  }
  function buildRoute(key) {
    var r = ROUTES[key], color = rcol(r), group = L.layerGroup(), lines = [], areas = [], markers = [], allPts = [];
    // a shape is a list of points, or {pts, name, dash} for one with its own hover name and a
    // dashed outline (e.g. a former member)
    (r.polys || []).forEach(function (pg, i) {
      var pts = pg.pts || pg;
      var a = L.polygon(pts, { color: color, weight: 2.5, opacity: .9, fillColor: color, fillOpacity: .3, lineJoin: 'round', dashArray: pg.dash ? '7 6' : null }).addTo(group);
      a.on('click', function () { selectRoute(key, true); });
      // M.routeLabels: the first shape carries the name as a permanent label (Unit 3 empires)
      if (M.routeLabels && i === 0) {
        if (r.labelAt) L.tooltip({ permanent: true, direction: 'center', className: 'pol-label lp1' }).setLatLng(r.labelAt).setContent(r.name).addTo(group);
        else a.bindTooltip(r.name, { permanent: true, direction: 'center', className: 'pol-label lp1' });
      } else a.bindTooltip(pg.name || r.name, { sticky: true, className: 'city-tip' });
      areas.push(a); pts.forEach(function (p) { allPts.push(p); });
    });
    (r.segments || []).forEach(function (seg) {
      L.polyline(seg, { color: '#000', opacity: .10, weight: 9, interactive: false }).addTo(group);
      var pl = L.polyline(seg, { color: color, weight: 4, opacity: .9, dashArray: r.dash ? '2 9' : null, lineCap: 'round', lineJoin: 'round' }).addTo(group);
      pl.on('click', function () { selectRoute(key); });
      // a copy shifted past ±180° (e.g. the Manila galleon) stays out of the zoom-to bounds
      lines.push(pl); seg.forEach(function (p) { if (Math.abs(p[1]) <= 180) allPts.push(p); });
    });
    (r.places || []).forEach(function (p) {
      var m = L.circleMarker(p.c, { radius: 6, color: '#fff', weight: 2, fillColor: color, fillOpacity: 1 });
      m.bindPopup(popup(p.n, p.note, color, r.name));
      m.on('click', function () { selectRoute(key, true); });
      m.addTo(group); markers.push(m); allPts.push(p.c);
    });
    layers[key] = { group: group, lines: lines, areas: areas, markers: markers, bounds: L.latLngBounds(allPts) };
  }
  ROUTE_ORDER.forEach(buildRoute);

  // mode: 'full' | 'faint' (everything showing, under an overlay) | 'dim' (not the selected one)
  function setRouteVisual(key, mode) {
    var L1 = layers[key], full = mode === 'full', faint = mode === 'faint';
    L1.lines.forEach(function (pl) { pl.setStyle({ opacity: full ? .92 : (faint ? .3 : .18), weight: full ? 4 : 3 }); });
    L1.areas.forEach(function (a) { a.setStyle({ opacity: full ? .9 : (faint ? .4 : .25), fillOpacity: full ? (current === key ? .4 : .3) : (faint ? .1 : .06) }); });
    L1.markers.forEach(function (m) { m.setStyle({ opacity: full ? 1 : (faint ? .5 : .35), fillOpacity: full ? 1 : (faint ? .45 : .3), radius: full ? 6 : 5 }); });
  }
  function anyOverlay() {
    return THEME_ORDER.some(function (k) { return themeOn[k]; }) || POLITY_ORDER.some(function (k) { return polOn[k]; });
  }
  function updateRouteDim() {
    if (current !== null) return;
    var mode = anyOverlay() ? 'faint' : 'full';
    ROUTE_ORDER.forEach(function (k) { setRouteVisual(k, mode); });
  }

  /* ══ POLITY OVERLAYS ══ */
  var polLayers = {}, polOn = {};
  function polityPopupHTML(p) {
    var h = '<div class="pop-name">' + p.name + '</div><div class="pop-tag" style="color:' + p.color + '">' + p.sub + '</div>';
    h += '<div class="pop-note">' + p.blurb + '</div>';
    if (p.facts) { h += '<div class="pop-facts">'; p.facts.forEach(function (f) { h += '<div><b>' + f[0] + ':</b> ' + f[1] + '</div>'; }); h += '</div>'; }
    if (p.role) h += '<div class="pop-sub"><b>' + (M.polityRoleLabel || 'Why it matters') + ':</b> ' + p.role + '</div>';
    if (p.legacy) h += '<div class="pop-sub"><b>Legacy:</b> ' + p.legacy.map(function (c) { return '<b>' + c.t + '</b>' + (c.d ? ': ' + c.d : ''); }).join('<br>') + '</div>';
    return h;
  }
  POLITY_ORDER.forEach(function (key) {
    var p = POLITIES[key], g = L.featureGroup();
    (p.polys || [p.poly].concat(p.extra || [])).forEach(function (pg, i) {
      var poly = L.polygon(pg, { color: p.color, weight: 2.5, opacity: .95, fillColor: p.color, fillOpacity: p.fill != null ? p.fill : .28, dashArray: p.dash ? '7 6' : null, lineJoin: 'round' });
      if (i === (p.labelPoly || 0)) {
        // labelAt pins the name to a chosen point (e.g. the edge of a huge outline)
        if (p.labelAt) L.tooltip({ permanent: true, direction: 'center', className: 'pol-label lp1' }).setLatLng(p.labelAt).setContent(p.label || p.name).addTo(g);
        else poly.bindTooltip(p.label || p.name, { permanent: true, direction: 'center', className: 'pol-label lp1' });
      }
      poly.bindPopup(polityPopupHTML(p), { className: 'polity-pop', maxWidth: 290 });
      poly.addTo(g);
    });
    // outposts: small fixed-size dots (forts, islands, trading posts), named on hover
    (p.posts || []).forEach(function (o) {
      L.circleMarker(o.c, { radius: 8, color: p.color, weight: 2.5, opacity: .95, fillColor: p.color, fillOpacity: .35 })
        .bindTooltip(o.n + ' (' + p.name + ')', { direction: 'top', className: 'city-tip' })
        .bindPopup(polityPopupHTML(p), { className: 'polity-pop', maxWidth: 290 }).addTo(g);
    });
    polLayers[key] = g;
  });
  function togglePolity(key, on) {
    polOn[key] = on;
    if (on) polLayers[key].addTo(map); else if (map.hasLayer(polLayers[key])) map.removeLayer(polLayers[key]);
    document.querySelectorAll('.pol-chip[data-p="' + key + '"]').forEach(function (c) { c.classList.toggle('on', on); });
    if (on) hideHint();
    updateRouteDim(); declutterSoon();
  }
  function clearPolities() { POLITY_ORDER.forEach(function (k) { togglePolity(k, false); }); }

  /* ══ ANNOTATION THEMES ══ */
  var themeLayers = {}, themeOn = {};
  function bezierPts(from, to, curv) {
    var la1 = from[0], ln1 = from[1], la2 = to[0], ln2 = to[1];
    var mx = (la1 + la2) / 2, my = (ln1 + ln2) / 2, dx = la2 - la1, dy = ln2 - ln1;
    var len = Math.sqrt(dx * dx + dy * dy) || 1, px = -dy / len, py = dx / len, off = (curv == null ? 0.2 : curv) * len;
    var cx = mx + px * off, cy = my + py * off, pts = [];
    for (var t = 0; t <= 1.0001; t += 0.04) { var a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, c = t * t; pts.push([a * la1 + b * cx + c * la2, a * ln1 + b * cy + c * ln2]); }
    return pts;
  }
  function addSwoop(group, from, to, color, curv, weight) {
    var pts = bezierPts(from, to, curv);
    var line = L.polyline(pts, { color: color, weight: weight || 3, opacity: .9, lineCap: 'round' }).addTo(group);
    var iH = Math.max(1, Math.round((pts.length - 1) * 0.85)), pA = pts[iH - 1], pB = pts[iH];
    var ang = Math.atan2(-(pB[0] - pA[0]), (pB[1] - pA[1])) * 180 / Math.PI;
    L.marker(pB, { interactive: false, icon: L.divIcon({ className: 'swoop-head',
      html: '<span style="transform:rotate(' + ang + 'deg);color:' + color + '">➤</span>', iconSize: [18, 18], iconAnchor: [9, 9] }) }).addTo(group);
    return line;
  }
  function buildTheme(key) {
    var t = THEMES[key], g = L.layerGroup();
    if (t.kind === 'labels') {
      t.items.forEach(function (it) {
        L.circleMarker(it.c, { radius: 4, color: '#fff', weight: 1.5, fillColor: t.color, fillOpacity: 1 })
          .bindTooltip(it.n, { permanent: true, direction: 'right', offset: [7, 0], className: 'goods-tip lp3' })
          .bindPopup(popup(it.n, it.note, t.color, t.name)).addTo(g);
      });
      // optional short arrows on a labels layer (e.g. Champa rice → China)
      (t.arrows || []).forEach(function (a) {
        addSwoop(g, a.from, a.to, t.color, 0.25, 3).bindTooltip(a.label, { direction: 'top', className: 'city-tip' });
      });
    } else if (t.kind === 'cities') {
      t.items.forEach(function (it) {
        L.circleMarker(it.c, { radius: 5, color: '#fff', weight: 2, fillColor: t.color, fillOpacity: 1 })
          .bindTooltip(it.n, { permanent: true, direction: 'right', offset: [7, 0], className: 'city-tip lp4' })
          .bindPopup(popup(it.n, it.note, t.color, t.name)).addTo(g);
      });
    } else if (t.kind === 'years') {
      // dated events: a colored pill with the year, popup with the story
      t.items.forEach(function (it) {
        // wrap:true also draws a copy one world over (east of the date line goes west, and the
        // reverse), for places near the map edge such as New Zealand or Pearl Harbor
        (it.wrap ? [it.c, [it.c[0], it.c[1] + (it.c[1] < 0 ? 360 : -360)]] : [it.c]).forEach(function (c, j) {
          L.circleMarker(c, { radius: 5, color: '#fff', weight: 2, fillColor: t.color, fillOpacity: 1 })
            .bindTooltip(it.n, { permanent: true, direction: j ? (c[1] > 180 ? 'left' : 'right') : (it.dir || 'right'), offset: [7, 0], className: 'yr-tip lp2 yr-' + key })
            .bindPopup(popup(it.n, it.note, t.color, t.name)).addTo(g);
        });
      });
      var ys = document.createElement('style'); ys.textContent = '.yr-' + key + '{--tipbg:' + t.color + '}'; document.head.appendChild(ys);
    } else if (t.kind === 'spread') {
      (t.origins || [t.origin]).forEach(function (o) {
        L.circleMarker(o.c, { radius: 7, color: '#fff', weight: 2, fillColor: t.color, fillOpacity: 1 })
          .bindTooltip(o.n + ' (origin)', { permanent: true, direction: 'top', className: 'city-tip lp2' })
          .bindPopup(popup(t.name + ': ' + o.n, t.note, t.color, 'Origin')).addTo(g);
      });
      t.items.forEach(function (it, i) {
        var from = it.from || t.origin.c;
        addSwoop(g, from, it.c, t.color, it.curv != null ? it.curv : (i % 2 === 0 ? 0.22 : 0.14), 3);
        L.circleMarker(it.c, { radius: 4, color: '#fff', weight: 1.5, fillColor: t.color, fillOpacity: .95 })
          .bindTooltip(it.n, { direction: 'right', offset: [6, 0], className: 'city-tip' })
          .bindPopup(popup(it.n, it.note || t.note, t.color, t.name)).addTo(g);
      });
    } else if (t.kind === 'arrows') {
      t.items.forEach(function (it) {
        L.marker(it.c, { icon: L.divIcon({ className: 'monsoon-arrow', html: '<span style="transform:rotate(' + it.rot + 'deg);color:' + t.color + '">➤</span>', iconSize: [34, 34], iconAnchor: [17, 17] }) })
          .bindTooltip(it.label, { direction: 'top', className: 'city-tip' })
          .bindPopup(popup(t.name, it.note || t.note)).addTo(g);
      });
    } else if (t.kind === 'chain') {
      var pth = t.path;
      pth.forEach(function (p, i) {
        if (i > 0) addSwoop(g, pth[i - 1].c, p.c, t.color, 0.16, 3.5);
        L.circleMarker(p.c, { radius: i === 0 ? 7 : 5, color: '#fff', weight: 2, fillColor: t.color, fillOpacity: 1 })
          .bindTooltip((i + 1) + '. ' + p.n, { permanent: true, direction: p.dir || 'top', offset: { top: [0, -6], bottom: [0, 6], left: [-7, 0], right: [7, 0] }[p.dir || 'top'], className: 'city-tip lp2' })
          .bindPopup(popup(p.n, p.note || t.note, t.color, t.name)).addTo(g);
      });
    } else if (t.kind === 'lines') {
      // drawn lines: a front, a wall, a canal, a border
      t.items.forEach(function (it) {
        L.polyline(it.pts, { color: it.color || t.color, weight: it.weight || 4, opacity: .9, dashArray: it.dash ? '8 7' : null, lineCap: 'round' })
          .bindTooltip(it.n, { permanent: !!it.label, sticky: !it.label, direction: 'center', className: 'city-tip' + (it.label ? ' lp3' : '') })
          .bindPopup(popup(it.n, it.note, t.color, t.name)).addTo(g);
      });
    } else if (t.kind === 'zones') {
      // shaded areas (mandates, spheres of influence, partitions)
      // an item can also be a line (pts: a wall or border) or a point (c: a named place)
      t.items.forEach(function (it) {
        var c = it.color || t.color;
        if (it.pts) {
          L.polyline(it.pts, { color: c, weight: it.weight || 4, opacity: .95, dashArray: it.dash ? '8 6' : null, lineCap: 'round' })
            .bindTooltip(it.n, it.label ? { permanent: true, direction: 'center', className: 'city-tip lp2' } : { sticky: true, className: 'city-tip' })
            .bindPopup(popup(it.n, it.note, c, t.name)).addTo(g);
        } else if (it.c) {
          L.circleMarker(it.c, { radius: 5, color: '#fff', weight: 2, fillColor: c, fillOpacity: 1 })
            .bindTooltip(it.n, { permanent: true, direction: it.dir || 'right', offset: [7, 0], className: 'city-tip lp2' })
            .bindPopup(popup(it.n, it.note, c, t.name)).addTo(g);
        } else {
          var zp = L.polygon(it.poly, { color: c, weight: 2, opacity: .9, fillColor: c, fillOpacity: it.fill != null ? it.fill : .22, dashArray: it.solid ? null : '5 5' })
            .bindPopup(popup(it.n, it.note, c, t.name)).addTo(g);
          var zcls = it.big ? 'pol-label lp1' : 'city-tip lp3';
          // labelAt puts the name at a chosen point instead of the shape's center
          if (it.labelAt) L.tooltip({ permanent: true, direction: 'center', className: zcls }).setLatLng(it.labelAt).setContent(it.n).addTo(g);
          else zp.bindTooltip(it.n, { permanent: true, direction: 'center', className: zcls });
        }
      });
    } else if (t.kind === 'flows') {
      // big geographic arrows in groups (e.g. 1st vs 2nd Industrial Revolution); each arrow
      // carries a short tag, and the full explanation sits in the key card on the map
      // the arrow shapes are redrawn after each zoom so they keep the same on-screen thickness
      var arrowG = L.layerGroup().addTo(g);
      flowDraw[key] = function () {
        arrowG.clearLayers();
        t.groups.forEach(function (gr) {
          var size = gr.size === 'small' ? { halfW: 2.2, headLen: 10, headHalfW: 7 } : gr.size === 'large' ? { halfW: 8, headLen: 26, headHalfW: 19 } : { halfW: 4.5, headLen: 16, headHalfW: 11 };
          (gr.arrows || []).forEach(function (a) {
            flowCopies(a).forEach(function (c) {
              addBigArrow(arrowG, c.from, c.to, a.curv || 0, gr.color, size)
                .bindPopup(popup(a.n || gr.title, a.note || gr.desc, gr.color, t.name));
            });
          });
        });
      };
      flowDraw[key]();
      t.groups.forEach(function (gr) {
        (gr.arrows || []).forEach(function (a) {
          if (a.tag) flowCopies(a).forEach(function (c) { addTag(g, c.tagAt || midPt(c.from, c.to, a.curv || 0), a.tag, gr.color); });
        });
        (gr.hubs || []).forEach(function (h) {
          L.circleMarker(h.c, { radius: 7, color: '#fff', weight: 2, fillColor: gr.color, fillOpacity: 1 })
            .bindTooltip(h.n, { permanent: true, direction: h.dir || 'top', className: 'city-tip lp2' })
            .bindPopup(popup(h.n, h.note || gr.desc, gr.color, gr.title)).addTo(g);
        });
      });
    }
    themeLayers[key] = g; themeOn[key] = false;
  }
  /* A big arrow: a thick ribbon along a swoop with a wide head, built as one polygon in
     projected space at the current zoom. Sizes are screen pixels. */
  var flowDraw = {};
  map.on('zoomend', function () { Object.keys(flowDraw).forEach(function (k) { flowDraw[k](); }); });
  function addBigArrow(group, from, to, curv, color, s) {
    var Z = map.getZoom(), crs = map.options.crs;
    var pts = bezierPts(from, to, curv).map(function (p) { return crs.latLngToPoint(L.latLng(p[0], p[1]), Z); });
    var total = 0, d = [0];
    for (var i = 1; i < pts.length; i++) { total += pts[i].distanceTo(pts[i - 1]); d.push(total); }
    var stop = total - s.headLen, shaft = [];
    for (var j = 0; j < pts.length && d[j] <= stop; j++) shaft.push(pts[j]);
    if (shaft.length < 2) shaft = [pts[0], pts[0].add(pts[pts.length - 1].subtract(pts[0]).multiplyBy(.4))];
    var tip = pts[pts.length - 1], base = shaft[shaft.length - 1];
    function unit(v) { var l = Math.sqrt(v.x * v.x + v.y * v.y) || 1; return L.point(v.x / l, v.y / l); }
    var dir = unit(tip.subtract(base)), nb = L.point(-dir.y, dir.x), left = [], right = [];
    shaft.forEach(function (p, k) {
      var n = k < shaft.length - 1 ? (function (v) { return L.point(-v.y, v.x); })(unit(shaft[k + 1].subtract(p))) : nb;
      left.push(p.add(n.multiplyBy(s.halfW))); right.push(p.subtract(n.multiplyBy(s.halfW)));
    });
    var ring = left.concat([base.add(nb.multiplyBy(s.headHalfW)), tip, base.subtract(nb.multiplyBy(s.headHalfW))]).concat(right.reverse());
    return L.polygon(ring.map(function (p) { return crs.pointToLatLng(p, Z); }),
      { color: '#fff', weight: 1.5, opacity: .9, fillColor: color, fillOpacity: .88, lineJoin: 'round' }).addTo(group);
  }
  /* An arrow with wrap:N (e.g. -360) is drawn a second time shifted N degrees of longitude,
     so a Pacific crossing reads as one unbroken arrow from whichever edge you look at. */
  function shiftLng(p, d) { return [p[0], p[1] + d]; }
  function flowCopies(a) {
    var out = [{ from: a.from, to: a.to, tagAt: a.tagAt }];
    if (a.wrap) out.push({ from: shiftLng(a.from, a.wrap), to: shiftLng(a.to, a.wrap), tagAt: a.tagAt && shiftLng(a.tagAt, a.wrap) });
    return out;
  }
  function midPt(from, to, curv) { var p = bezierPts(from, to, curv); return p[Math.floor(p.length / 2)]; }
  function addTag(group, latlng, text, color) {
    return L.tooltip({ permanent: true, direction: 'center', className: 'flow-tag lp0' })
      .setLatLng(latlng).setContent('<span style="background:' + color + '">' + text + '</span>').addTo(group);
  }
  THEME_ORDER.forEach(buildTheme);
  function toggleTheme(key, on) {
    themeOn[key] = on;
    if (on) themeLayers[key].addTo(map); else if (map.hasLayer(themeLayers[key])) map.removeLayer(themeLayers[key]);
    document.querySelectorAll('.thm-chip[data-t="' + key + '"]').forEach(function (c) { c.classList.toggle('on', on); });
    if (on) hideHint();
    updateRouteDim(); renderOvKey(); declutterSoon();
    // big-arrow layers can name the area to frame so the arrows are large enough to read
    // on a small map, fold the map key so it doesn't cover the arrows
    if (on && THEMES[key].kind === 'flows' && !legendMin && document.querySelector('.mapcol').clientWidth < 760) { legendMin = true; renderLegend(); }
    if (on && THEMES[key].frame) { try { map.flyToBounds(THEMES[key].frame, { padding: [20, 20], duration: .7 }); } catch (e) {} }
  }

  /* Key card: the explanation for every big-arrow layer that is on */
  var ovMin = null;
  function renderOvKey() {
    var box = document.getElementById('ov-key'), h = '';
    THEME_ORDER.forEach(function (k) {
      var t = THEMES[k]; if (t.kind !== 'flows' || !themeOn[k]) return;
      h += '<div class="ov-card"><div class="ov-t">' + t.name + '</div>';
      t.groups.forEach(function (gr) {
        h += '<div class="ov-row"><span class="ov-sw" style="background:' + gr.color + '">' + (gr.badge || '') + '</span><span><b>' + gr.title + '</b>' + gr.desc + '</span></div>';
      });
      h += '</div>';
    });
    if (h) {
      var mc = document.querySelector('.mapcol');
      if (ovMin === null) ovMin = mc.clientWidth < 640 || mc.clientHeight < 560; // small map: start folded
      h = '<button type="button" class="ov-min" id="ov-min">' + (ovMin ? 'Show key &#9650;' : 'Hide key &#9660;') + '</button>' + (ovMin ? '' : h);
    }
    box.innerHTML = h;
    box.classList.toggle('show', !!h);
    box.parentNode.classList.toggle('has-key', !!h);
    var mb = document.getElementById('ov-min');
    if (mb) mb.addEventListener('click', function () { ovMin = !ovMin; renderOvKey(); });
  }

  /* Label declutter: permanent labels carry a priority class (lp0 = most important … lp4).
     A label that would overlap a more important one is hidden until you zoom in far enough
     for both to fit. lp0 labels (arrow tags) always show. */
  var dq = 0;
  // runs on the next frame, and again a moment later once removed labels and zoom animations are gone
  var dq2 = 0;
  function declutterSoon() {
    cancelAnimationFrame(dq); dq = requestAnimationFrame(declutter);
    clearTimeout(dq2); dq2 = setTimeout(declutter, 300);
  }
  function declutter() {
    var items = [];
    document.querySelectorAll('.leaflet-tooltip-pane .leaflet-tooltip').forEach(function (el) {
      var m = el.className.match(/\blp(\d)\b/); if (m) { el.classList.remove('lbl-hide'); items.push({ el: el, p: +m[1] }); }
    });
    items.sort(function (a, b) { return a.p - b.p; });
    var kept = [], pad = 3;
    items.forEach(function (it) {
      var r = it.el.getBoundingClientRect(); if (!r.width) return;
      var hit = kept.some(function (k) { return !(r.right + pad < k.left || r.left - pad > k.right || r.bottom + pad < k.top || r.top - pad > k.bottom); });
      if (hit && it.p > 0) it.el.classList.add('lbl-hide'); else kept.push(r);
    });
  }
  map.on('zoomend moveend layeradd layerremove resize', declutterSoon);

  /* The tip box goes away once the student starts using the map */
  function hideHint() { var hEl = document.querySelector('.map-hint'); if (hEl) hEl.style.display = 'none'; }
  map.on('dragstart zoomstart', function () { if (started) hideHint(); });
  function clearThemes() { THEME_ORDER.forEach(function (k) { toggleTheme(k, false); }); }

  /* ══ SELECTION ══ */
  var current = null, body = document.getElementById('p-body');
  function showAllOnMap() { ROUTE_ORDER.forEach(function (k) { layers[k].group.addTo(map); }); }
  function selectRoute(key, keepView) {
    endJourney();
    current = key;
    showAllOnMap();
    ROUTE_ORDER.forEach(function (k) { setRouteVisual(k, k === key ? 'full' : 'dim'); });
    document.querySelectorAll('.rb').forEach(function (b) { b.classList.toggle('active', b.dataset.r === key); });
    renderPanel(key);
    if (!keepView) { try { map.flyToBounds(layers[key].bounds, { padding: [50, 50], duration: .7, maxZoom: 5 }); } catch (e) {} }
  }
  function showAll() {
    endJourney();
    current = null;
    showAllOnMap();
    ROUTE_ORDER.forEach(function (k) { setRouteVisual(k, 'full'); });
    updateRouteDim();
    document.querySelectorAll('.rb').forEach(function (b) { b.classList.remove('active'); });
    renderAllPanel();
    try { map.flyTo(M.center, M.zoom, { duration: .7 }); } catch (e) {}
  }

  /* ══ PANEL ══ */
  function renderPanel(key) {
    var r = ROUTES[key], color = rcol(r), h = '';
    h += '<div class="rt-head"><div class="rt-title">' + r.name + '</div><div class="rt-sub">' + r.sub + '</div><div class="rt-blurb">' + r.blurb + '</div></div>';
    // optional comparison layout (Unit 3): facts, then text sections named in M.textSections
    if (r.facts && r.facts.length) {
      h += '<div class="sec"><div class="sec-lbl">' + sec('facts', '📋', 'At a Glance') + '</div><div class="facts">';
      r.facts.forEach(function (f) { h += '<div class="fact"><span class="fk">' + f[0] + '</span><span class="fv">' + f[1] + '</span></div>'; });
      h += '</div></div>';
    }
    (M.textSections || []).forEach(function (s) {
      if (r[s[2]]) h += '<div class="sec"><div class="sec-lbl"><span class="ico">' + s[0] + '</span>' + s[1] + '</div><p class="role-txt">' + r[s[2]] + '</p></div>';
    });
    if (r.tech && r.tech.length) {
      h += '<div class="sec"><div class="sec-lbl">' + sec('tech', '⚙️', 'Key Developments') + '</div>';
      r.tech.forEach(function (t) {
        h += '<div class="tech-card" style="border-left-color:' + color + '"><div class="tech-name">' + t.name + '</div>' +
          '<div class="tech-what">' + t.what + '</div>' +
          '<div class="tech-impact"><b style="color:' + color + '">' + (SEC.impactWord || 'Impact') + '</b>' + t.impact + '</div></div>';
      });
      h += '</div>';
    }
    if (r.goods && r.goods.length) {
      h += '<div class="sec"><div class="sec-lbl">' + sec('goods', '📦', 'Key Terms') + '</div><div class="chips">';
      r.goods.forEach(function (g) { h += '<span class="chip">' + g + '</span>'; });
      h += '</div></div>';
    }
    if (r.places && r.places.length) {
      h += '<div class="sec"><div class="sec-lbl">' + sec('places', '📍', 'Notable Places') + '</div><div class="place-list">';
      r.places.forEach(function (p, i) {
        h += '<button class="place" data-key="' + key + '" data-i="' + i + '"><span class="pin" style="background:' + color + '"></span>' +
          '<span><span class="p-name">' + p.n + '</span><span class="p-note">' + p.note + '</span></span><span class="p-go">Fly →</span></button>';
      });
      h += '</div></div>';
    }
    if (r.cultural && r.cultural.length) {
      h += '<div class="sec"><div class="sec-lbl">' + sec('cultural', '🔗', 'Causes &amp; Effects') + '</div><ul class="cul-list">';
      r.cultural.forEach(function (c) { h += '<li style="--dot:' + color + '"><b>' + c.t + '</b>: ' + c.d + '</li>'; });
      h += '</ul></div>';
    }
    if (r.legacy && r.legacy.length) {
      h += '<div class="sec"><div class="sec-lbl">' + sec('legacy', '🏛️', 'Legacy') + '</div><ul class="cul-list">';
      r.legacy.forEach(function (c) { h += '<li style="--dot:' + color + '"><b>' + c.t + '</b>: ' + c.d + '</li>'; });
      h += '</ul></div>';
    }
    body.innerHTML = h;
    body.querySelectorAll('.place').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var k = this.dataset.key, i = +this.dataset.i, p = ROUTES[k].places[i];
        map.flyTo(p.c, 5, { duration: .6 });
        layers[k].markers[i].openPopup();
      });
    });
  }
  function renderAllPanel() {
    var h = '<div class="rt-head"><div class="rt-title">' + M.allTitle + '</div><div class="rt-sub">' + M.allSub + '</div><div class="rt-blurb">' + M.allBlurb + '</div></div>';
    ROUTE_ORDER.forEach(function (k) {
      var r = ROUTES[k];
      h += '<button class="place" data-r="' + k + '" style="padding:12px 6px"><span class="pin" style="background:' + rcol(r) + ';width:13px;height:13px"></span>' +
        '<span><span class="p-name" style="font-size:.9rem">' + r.name + '</span><span class="p-note">' + r.short + '</span></span>' +
        '<span class="p-go" style="opacity:1">Open →</span></button>';
    });
    body.innerHTML = h;
    body.querySelectorAll('.place[data-r]').forEach(function (b) { b.addEventListener('click', function () { selectRoute(this.dataset.r); }); });
  }

  /* ══ EXPLORER JOURNEYS ══
     One explorer at a time: the whole voyage faint, the legs sailed so far solid, numbered stops,
     and a ticker card on the map (Back / Next, the dots, Auto-play, arrow keys) telling what
     happened at each stop and what came of it. The routes are hidden while a journey is on. */
  var JOURNEYS = M.journeys || {}, JOURNEY_ORDER = M.journeyOrder || Object.keys(JOURNEYS);
  var jCur = null, jIdx = 0, jLayer = null, jLegs = [], jMarkers = [], jShip = null, jLabel = null, jAnim = 0, jPlay = 0, jMin = false;
  var tick = document.getElementById('jr-tick');
  var reduceMotion = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  function jcol(j) { return isDark() && j.colorDark ? j.colorDark : j.color; }
  function plain(s) { return String(s).replace(/<[^>]+>/g, ''); }
  // Leg k runs from stop k-1 to stop k through stop k's via points. Longitudes are unwrapped
  // backward from the stop (so the stop keeps its own coordinates); a Catmull-Rom curve through
  // the points turns the corners into bends, and the curve is resampled at an even spacing so
  // the ship moves at a steady pace and the line can be drawn out to any length.
  var STEP = 0.25;   // degrees between resampled points
  function legPts(j, k) {
    var s = j.stops[k], raw = [j.stops[k - 1].c].concat(s.via || []).concat([s.c]), out = [raw[raw.length - 1].slice()];
    for (var i = raw.length - 2; i >= 0; i--) {
      var nx = out[0], p = [raw[i][0], raw[i][1]];
      while (p[1] - nx[1] > 180) p[1] -= 360;
      while (nx[1] - p[1] > 180) p[1] += 360;
      out.unshift(p);
    }
    var curve = [out[0]];
    for (var a = 0; a < out.length - 1; a++) {
      var p0 = out[a - 1] || out[a], p1 = out[a], p2 = out[a + 1], p3 = out[a + 2] || out[a + 1];
      var steps = Math.max(6, Math.ceil(dist(p1, p2) / 0.5));
      for (var t = 1; t <= steps; t++) {
        var u = t / steps, u2 = u * u, u3 = u2 * u;
        curve.push([0, 1].map(function (d) {
          return .5 * (2 * p1[d] + (p2[d] - p0[d]) * u + (2 * p0[d] - 5 * p1[d] + 4 * p2[d] - p3[d]) * u2 + (3 * p1[d] - p0[d] - 3 * p2[d] + p3[d]) * u3);
        }));
      }
    }
    var cum = [0];
    for (var c = 1; c < curve.length; c++) cum.push(cum[c - 1] + dist(curve[c - 1], curve[c]));
    var len = cum[cum.length - 1], n = Math.max(2, Math.ceil(len / STEP)), pts = [], at = 0;
    for (var q = 0; q <= n; q++) {
      var want = len * q / n;
      while (at < curve.length - 2 && cum[at + 1] < want) at++;
      pts.push(lerp(curve[at], curve[at + 1], (want - cum[at]) / ((cum[at + 1] - cum[at]) || 1)));
    }
    return { pts: pts, len: len || 1e-9 };
  }
  function dist(A, B) { return Math.sqrt((B[0] - A[0]) * (B[0] - A[0]) + (B[1] - A[1]) * (B[1] - A[1])); }
  function lerp(A, B, f) { f = Math.max(0, Math.min(1, f)); return [A[0] + (B[0] - A[0]) * f, A[1] + (B[1] - A[1]) * f]; }
  function offWorld(pts) { return pts.some(function (p) { return p[1] < -180 || p[1] > 180; }); }
  // the copy one world over, so a date-line crossing reads from either edge of the map
  function shiftOf(pts) { return !offWorld(pts) ? 0 : pts.some(function (p) { return p[1] < -180; }) ? 360 : -360; }
  function buildJourney(key) {
    var j = JOURNEYS[key], color = jcol(j);
    jLayer = L.layerGroup().addTo(map); jLegs = []; jMarkers = [];
    for (var k = 1; k < j.stops.length; k++) {
      var lp = legPts(j, k), land = j.stops[k].land, sh = shiftOf(lp.pts);
      var leg = { pts: lp.pts, len: lp.len, shifts: sh ? [0, sh] : [0], solid: [] };
      leg.shifts.forEach(function (d) {
        var c = lp.pts.map(function (p) { return [p[0], p[1] + d]; });
        L.polyline(c, { color: color, weight: 3, opacity: .35, dashArray: land ? '2 8' : '6 8', interactive: false }).addTo(jLayer);
        leg.solid.push(L.polyline([], { color: color, weight: 4.5, opacity: .95, dashArray: land ? '1 9' : null, lineCap: 'round', lineJoin: 'round', smoothFactor: 0, interactive: false }).addTo(jLayer));
      });
      jLegs[k] = leg;
    }
    j.stops.forEach(function (s, i) {
      var m = L.marker(s.c, { keyboard: false, riseOnHover: true, icon: L.divIcon({ className: 'jr-pin', html: '<span style="--jc:' + color + '">' + (i + 1) + '</span>', iconSize: [24, 24], iconAnchor: [12, 12] }) })
        .bindTooltip(s.n, { direction: 'top', offset: [0, -12], className: 'city-tip' })
        .on('click', function () { stopPlay(); goStop(i); });
      m.addTo(jLayer); jMarkers.push(m);
    });
    jLabel = L.tooltip({ permanent: true, direction: 'right', offset: [14, 0], className: 'city-tip jr-lbl' }).setLatLng(j.stops[0].c).setContent(j.stops[0].n).addTo(jLayer);
    jShip = L.marker(j.stops[0].c, { interactive: false, keyboard: false, zIndexOffset: 1000, icon: L.divIcon({ className: 'jr-ship', html: '<span>' + (j.icon || '⛵') + '</span>', iconSize: [30, 30], iconAnchor: [15, 44] }) }).addTo(jLayer);
    measure(); jPos = 0;
  }
  // Draw a leg out to distance d along it (0 = nothing, len = all of it).
  function pointAt(leg, d) {
    var n = leg.pts.length - 1, f = Math.max(0, Math.min(1, d / leg.len)) * n, i = Math.min(n - 1, Math.floor(f));
    return { i: i, p: lerp(leg.pts[i], leg.pts[i + 1], f - i) };
  }
  // Only a leg whose drawn length changed is redrawn, so a frame costs one leg, not the whole voyage.
  function drawLeg(leg, d, force) {
    var st = d <= 0 ? 'e' : d >= leg.len ? 'f' : 'p';
    if (st !== 'p' && st === leg.st && !force) return;
    leg.st = st;
    var part = st === 'e' ? [] : st === 'f' ? leg.pts : (function (at) { return leg.pts.slice(0, at.i + 1).concat([at.p]); })(pointAt(leg, d));
    leg.solid.forEach(function (pl, n) {
      var sh = leg.shifts[n];
      pl.setLatLngs(sh ? part.map(function (p) { return [p[0], p[1] + sh]; }) : part);
    });
  }
  // The voyage is one line measured from stop 0: jOff[k] is how far along stop k is, jPos is where
  // the ship is now. Drawing at a position fills every leg up to it and puts the ship there.
  var jOff = [0], jPos = 0;
  function measure() { jOff = [0]; for (var k = 1; k < jLegs.length; k++) jOff[k] = jOff[k - 1] + jLegs[k].len; }
  // Of the copies of a point one world apart, keep the one next to where the ship was, so it
  // never flips across the map; only when that copy leaves the view (a date-line crossing on a
  // zoomed-out map) does it switch to a copy in view, sailing off one edge and in at the other.
  var jShipLng = null;
  function shipAt(p) {
    var cands = [p[1], p[1] - 360, p[1] + 360], vb = map.getBounds(), w = vb.getWest(), e = vb.getEast();
    var ref = jShipLng == null ? map.getCenter().lng : jShipLng;
    cands.sort(function (x, y) { return Math.abs(x - ref) - Math.abs(y - ref); });
    var best = cands[0];
    if (best < w || best > e) cands.forEach(function (x) { if ((best < w || best > e) && x >= w && x <= e) best = x; });
    jShipLng = best;
    jShip.setLatLng([p[0], best]);
  }
  // While the map is zooming or panning, Leaflet has the layers mid-transform: a line redrawn then
  // lands in the wrong place. So the voyage keeps its position but waits, and is redrawn at the end.
  var jMoving = false;
  map.on('zoomstart movestart', function () { jMoving = true; });
  map.on('zoomend moveend', function () { jMoving = false; if (jCur && jLayer) drawAt(jPos, true); });
  function drawAt(d, force) {
    jPos = d;
    if (jMoving && !force) return;
    var n = jLegs.length - 1, k = 1;
    for (var m = 1; m <= n; m++) drawLeg(jLegs[m], d - jOff[m - 1], force);
    if (!n) return shipAt(JOURNEYS[jCur].stops[0].c);
    while (k < n && jOff[k] < d) k++;
    shipAt(pointAt(jLegs[k], d - jOff[k - 1]).p);
  }
  function stopBefore(d) { var k = 0; while (k < jOff.length - 1 && jOff[k + 1] <= d + 1e-9) k++; return k; }
  // Snap everything to stop i: legs up to it drawn, the ship and the label on it.
  function settle(i) {
    var j = JOURNEYS[jCur];
    drawAt(jOff[i], true);
    jShip.setLatLng(j.stops[i].c); jShipLng = j.stops[i].c[1];
    var el = jShip.getElement(); if (el) el.classList.remove('sailing');
    jMarkers.forEach(function (m, n) {
      var e = m.getElement(); if (e) { e.classList.toggle('past', n < i); e.classList.toggle('cur', n === i); }
      m.setZIndexOffset(n === i ? 500 : 0);
    });
    jLabel.setLatLng(j.stops[i].c).setContent(j.stops[i].n);
    var le = jLabel.getElement(); if (le) le.style.opacity = '';
  }
  // View options that keep the ticker card clear: on phones it sits under the map; elsewhere it
  // covers the left side, so keep the action to its right.
  function viewOpt(maxZoom) {
    var over = getComputedStyle(tick).position === 'absolute';
    return { paddingTopLeft: [over ? tick.offsetWidth + 40 : 30, 50], paddingBottomRight: [170, 40], duration: .8, maxZoom: maxZoom };   // room on the right for the stop's name
  }
  // The whole voyage, framed once when the explorer is picked. The map then holds still: stop
  // changes only move the ship and the line (zooming the map on every click looked jumpy).
  function voyageView(j) {
    var pts = j.stops.map(function (x) { return x.c; });
    for (var k = 1; k < jLegs.length; k++) if (!offWorld(jLegs[k].pts)) pts = pts.concat(jLegs[k].pts);
    return L.latLngBounds(pts);
  }
  function frameVoyage(animate, then) {
    var j = JOURNEYS[jCur], o = viewOpt(6), done = false, tm = 0;
    function go() { if (done) return; done = true; clearTimeout(tm); map.off('moveend', go); if (then) then(); }
    try { if (animate) map.flyToBounds(voyageView(j), o); else map.fitBounds(voyageView(j), { paddingTopLeft: o.paddingTopLeft, paddingBottomRight: o.paddingBottomRight, maxZoom: 6, animate: false }); } catch (e) {}
    if (!then) return;
    if (!animate) return go();
    map.on('moveend', go);
    tm = setTimeout(go, 1100);
  }
  function ease(f) { return f < .5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2; }
  // Sail from wherever the ship is to stop b along the route, forward (drawing the line) or back
  // (retracting it). One leg takes 1.7 s; a jump over several legs plays faster, 2.2 s at most.
  function sail(b, then) {
    var from = jPos, to = jOff[b], lo = Math.min(from, to), hi = Math.max(from, to), legs = 0;
    for (var k = 1; k < jOff.length; k++) if (jOff[k] > lo + 1e-9 && jOff[k - 1] < hi - 1e-9) legs++;
    var dur = legs <= 1 ? 1700 : Math.min(2200, 1300 + 300 * legs), t0 = null;
    var el = jShip.getElement(); if (el) el.classList.add('sailing');
    function step(ts) {
      if (t0 === null) t0 = ts;
      var f = Math.min(1, (ts - t0) / dur);
      drawAt(from + (to - from) * ease(f));
      if (f < 1) jAnim = requestAnimationFrame(step); else then();
    }
    jAnim = requestAnimationFrame(step);
  }
  // Go to stop i: the card changes at once and the ship sails there along the route. The map only
  // moves if the student zoomed or panned away so the stop is out of sight: it frames the voyage
  // again first, then the ship sails. Clicking again mid-voyage turns the ship around where it is.
  var jTok = 0;
  function goStop(i) {
    var j = JOURNEYS[jCur]; if (!j) return;
    i = Math.max(0, Math.min(j.stops.length - 1, i));
    var tok = ++jTok;
    cancelAnimationFrame(jAnim);
    jIdx = i;
    renderTick(); markItin();
    if (reduceMotion || Math.abs(jPos - jOff[i]) < 1e-9) { settle(i); return; }
    var le = jLabel.getElement(); if (le) le.style.opacity = 0;   // the name shows again on arrival
    jMarkers.forEach(function (m) { var e = m.getElement(); if (e) e.classList.remove('cur'); });
    function go() { if (tok === jTok) sail(i, function () { if (tok === jTok) settle(i); }); }
    if (map.getBounds().contains(j.stops[i].c)) go(); else frameVoyage(true, go);
  }
  function next() {
    var j = JOURNEYS[jCur];
    goStop(jIdx >= j.stops.length - 1 ? 0 : jIdx + 1);
  }
  // Auto-play: each stop stays up long enough to read it (about 220 words a minute, 8 s at least).
  function readMs(s) { return Math.max(8000, (plain(s.what) + ' ' + plain(s.impact)).split(/\s+/).length * 60000 / 220); }
  function schedule() {
    var j = JOURNEYS[jCur];
    jPlay = setTimeout(function () {
      if (jIdx >= j.stops.length - 1) { jPlay = 0; renderTick(); return; }
      goStop(jIdx + 1); schedule(); renderTick();
    }, readMs(j.stops[jIdx]));
  }
  function stopPlay() { if (jPlay) { clearTimeout(jPlay); jPlay = 0; } }
  function togglePlay() {
    if (jPlay) { stopPlay(); renderTick(); return; }
    if (jIdx >= JOURNEYS[jCur].stops.length - 1) goStop(0);
    schedule(); renderTick();
  }
  function renderTick() {
    var j = JOURNEYS[jCur]; if (!j) return;
    var s = j.stops[jIdx], n = j.stops.length, last = jIdx === n - 1, color = jcol(j);
    var h = '<div class="jr-top"><span class="jr-ic" aria-hidden="true">' + (j.icon || '⛵') + '</span><span class="jr-who"><b>' + j.name + '</b><span>' + j.sub + '</span></span>' +
      '<button type="button" class="jr-min" aria-expanded="' + !jMin + '">' + (jMin ? 'Show &#9650;' : 'Hide &#9660;') + '</button>' +
      '<button type="button" class="jr-x" aria-label="Close this journey">&#10005;</button></div>';
    if (!jMin) {
      h += '<div class="jr-body"><div class="jr-meta"><span class="jr-step">Stop ' + (jIdx + 1) + ' of ' + n + '</span><span class="jr-yr">' + s.yr + '</span>' +
        (s.topic ? '<span class="jr-topic">Topic ' + s.topic + '</span>' : '') + '</div>' +
        '<h3 class="jr-place">' + s.n + '</h3><p class="jr-what">' + s.what + '</p>' +
        '<div class="jr-imp"><span class="jr-lab">Ramifications</span>' + s.impact + '</div></div>';
    }
    h += '<div class="jr-nav"><button type="button" class="jr-prev"' + (jIdx === 0 ? ' disabled' : '') + '>&#8592; Back</button><div class="jr-dots">';
    for (var i = 0; i < n; i++) h += '<button type="button" class="jr-dot' + (i === jIdx ? ' on' : i < jIdx ? ' past' : '') + '" data-i="' + i + '" aria-label="Stop ' + (i + 1) + ': ' + plain(j.stops[i].n) + '"></button>';
    h += '</div><button type="button" class="jr-next">' + (last ? 'Start over &#8635;' : 'Next &#8594;') + '</button></div>' +
      '<div class="jr-foot"><button type="button" class="jr-play" aria-pressed="' + !!jPlay + '">' + (jPlay ? '&#10073;&#10073; Pause' : '&#9654; Auto-play') + '</button><span class="jr-keys">or use the &#8592; &#8594; keys</span></div>';
    tick.innerHTML = h;
    tick.style.setProperty('--jc', color);
    tick.classList.add('show');
    tick.classList.toggle('min', jMin);
  }
  tick.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.classList.contains('jr-x')) { showAll(); return; }
    if (b.classList.contains('jr-min')) { jMin = !jMin; renderTick(); return; }
    if (b.classList.contains('jr-play')) { togglePlay(); return; }
    stopPlay();
    if (b.classList.contains('jr-prev')) goStop(jIdx - 1);
    else if (b.classList.contains('jr-next')) next();
    else if (b.classList.contains('jr-dot')) goStop(+b.dataset.i);
  });
  document.addEventListener('keydown', function (e) {
    if (!jCur || e.altKey || e.ctrlKey || e.metaKey || /^(INPUT|TEXTAREA|SELECT)$/.test((e.target || {}).tagName || '')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); stopPlay(); next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); stopPlay(); goStop(jIdx - 1); }
  });
  function renderJourneyPanel() {
    var j = JOURNEYS[jCur], color = jcol(j);
    var h = '<div class="rt-head"><div class="rt-title">' + j.name + '</div><div class="rt-sub">' + j.sub + '</div><div class="rt-blurb">' + j.blurb + '</div></div>' +
      '<div class="sec"><div class="sec-lbl"><span class="ico">🧭</span>The Journey, Stop by Stop</div><div class="place-list">';
    j.stops.forEach(function (s, i) {
      h += '<button class="place jr-it" data-i="' + i + '"><span class="pin jr-num" style="background:' + color + '">' + (i + 1) + '</span>' +
        '<span><span class="p-name">' + s.n + '</span><span class="p-note">' + s.yr + '</span></span><span class="p-go">Go →</span></button>';
    });
    body.innerHTML = h + '</div></div>';
    body.querySelectorAll('.jr-it').forEach(function (b) { b.addEventListener('click', function () { stopPlay(); goStop(+this.dataset.i); }); });
  }
  function markItin() { body.querySelectorAll('.jr-it').forEach(function (b) { b.classList.toggle('on', +b.dataset.i === jIdx); }); }
  function startJourney(key, idx, keepView) {
    endJourney();
    jCur = key; jIdx = idx || 0; current = null;
    ROUTE_ORDER.forEach(function (k) { if (map.hasLayer(layers[k].group)) map.removeLayer(layers[k].group); });
    document.querySelectorAll('.rb').forEach(function (b) { b.classList.toggle('active', b.dataset.j === key); });
    map.closePopup(); hideHint(); map.keyboard.disable();
    // a small map: fold the map key so it doesn't cover the voyage
    if (!legendMin && document.querySelector('.mapcol').clientWidth < 760) { legendMin = true; renderLegend(); }
    buildJourney(key);
    renderJourneyPanel();
    renderTick(); map.invalidateSize();   // on phones the card under the map changes its height
    settle(jIdx);
    renderTick(); markItin();
    frameVoyage(!keepView);
  }
  function endJourney() {
    if (!jCur) return;
    jTok++; cancelAnimationFrame(jAnim); stopPlay();
    if (jLayer) map.removeLayer(jLayer);
    jLayer = null; jCur = null; jLegs = []; jMarkers = [];
    tick.classList.remove('show'); tick.innerHTML = '';
    map.invalidateSize(); map.keyboard.enable();
    document.querySelectorAll('.rb[data-j]').forEach(function (b) { b.classList.remove('active'); });
  }
  function renderJourneyButtons() {
    var list = document.getElementById('jr-list'); if (!list) return;
    list.innerHTML = '';
    JOURNEY_ORDER.forEach(function (k) {
      var j = JOURNEYS[k], b = document.createElement('button');
      b.type = 'button'; b.className = 'rb' + (jCur === k ? ' active' : ''); b.dataset.j = k; b.style.setProperty('--rc', jcol(j));
      b.innerHTML = '<span class="rb-dot"></span><span><span class="rb-name">' + j.name + '</span><span class="rb-yrs" style="display:block">' + j.sub + '</span></span>';
      b.addEventListener('click', function () { startJourney(k); });
      list.appendChild(b);
    });
  }

  /* ══ CONTROLS ══ */
  function renderRouteButtons() {
    var list = document.getElementById('rb-list'); list.innerHTML = '';
    ROUTE_ORDER.forEach(function (k) {
      var r = ROUTES[k], b = document.createElement('button');
      b.type = 'button'; b.className = 'rb' + (current === k ? ' active' : ''); b.dataset.r = k; b.style.setProperty('--rc', rcol(r));
      b.innerHTML = '<span class="rb-dot"></span><span><span class="rb-name">' + r.name + '</span><span class="rb-yrs" style="display:block">' + r.btn + '</span></span>';
      b.addEventListener('click', function () { selectRoute(k); });
      list.appendChild(b);
    });
  }
  function renderLegend() {
    var h = '<button type="button" class="lg-t lg-tog" id="lg-tog">Map Key <span>' + (legendMin ? '&#9660; show' : '&#9650; hide') + '</span></button>';
    ROUTE_ORDER.forEach(function (k) {
      var r = ROUTES[k], c = rcol(r);
      h += '<div class="lg-row">' + (r.polys && !r.segments ? '<span class="lg-fill" style="background:' + c + '55;border-color:' + c + '"></span>'
        : '<span class="lg-line' + (r.dash ? ' dash' : '') + '" style="border-color:' + c + '"></span>') + (r.legend || r.name) + '</div>';
    });
    if (POLITY_ORDER.length) h += '<div class="lg-div"></div><div class="lg-row"><span class="lg-fill"></span>' + (M.polityLegend || 'Optional layer') + '</div>';
    if (POLITY_ORDER.some(function (k) { return POLITIES[k].posts; })) h += '<div class="lg-row"><span class="lg-fill" style="border-radius:50%;width:12px"></span>' + (M.postLegend || 'Outpost') + '</div>';
    var lg = document.getElementById('legend');
    lg.innerHTML = h; lg.classList.toggle('min', legendMin);
    document.getElementById('lg-tog').addEventListener('click', function () { legendMin = !legendMin; renderLegend(); });
  }
  var legendMin = false;
  renderRouteButtons(); renderLegend(); renderJourneyButtons();

  (function () {
    var grid = document.getElementById('pol-grid'); if (!grid) return;
    // M.polityGroups = [[heading, [keys]], ...] splits the chips under sub-headings
    var groups = M.polityGroups || [[null, POLITY_ORDER]];
    groups.forEach(function (gp, gi) {
      var target = grid;
      if (gp[0]) {
        var hd = document.createElement('div'); hd.className = 'pol-sub'; hd.textContent = gp[0];
        target = document.createElement('div'); target.className = 'pol-grid';
        if (gi === 0) { grid.className = ''; }
        grid.appendChild(hd); grid.appendChild(target);
      }
      gp[1].forEach(function (key) {
        var p = POLITIES[key], b = document.createElement('button');
        b.type = 'button'; b.className = 'pol-chip'; b.dataset.p = key; b.title = p.name + ': ' + p.sub;
        b.innerHTML = '<span class="pc-dot" style="background:' + p.color + '"></span><span class="pc-name">' + p.name + '</span><span class="tc-check"></span>';
        b.addEventListener('click', function () { togglePolity(key, !polOn[key]); });
        target.appendChild(b);
      });
    });
    document.getElementById('pol-clear').addEventListener('click', clearPolities);
  })();
  (function () {
    var grid = document.getElementById('thm-grid');
    THEME_ORDER.forEach(function (key) {
      var t = THEMES[key], b = document.createElement('button');
      b.type = 'button'; b.className = 'thm-chip'; b.dataset.t = key; b.title = t.name;
      b.innerHTML = '<span class="tc-ic" style="color:' + t.color + '">' + t.icon + '</span><span class="tc-name">' + t.name + '</span><span class="tc-check"></span>';
      b.addEventListener('click', function () { toggleTheme(key, !themeOn[key]); });
      grid.appendChild(b);
    });
    document.getElementById('thm-clear').addEventListener('click', clearThemes);
  })();
  document.getElementById('btn-all').addEventListener('click', showAll);

  /* Collapsible side panel (remembered on this browser, shared by all the engine maps) */
  var wrapEl = document.querySelector('.wrap');
  function setPanel(open) {
    wrapEl.classList.toggle('collapsed', !open);
    try { localStorage.setItem('unitMapPanel', open ? 'open' : 'closed'); } catch (e) {}
    setTimeout(function () { map.invalidateSize(); declutterSoon(); }, 30);
  }
  document.getElementById('p-collapse').addEventListener('click', function () { setPanel(false); });
  document.getElementById('panel-open').addEventListener('click', function () { setPanel(true); });
  try { if (localStorage.getItem('unitMapPanel') === 'closed') wrapEl.classList.add('collapsed'); } catch (e) {}
  document.getElementById('btn-reset').addEventListener('click', function () { clearThemes(); clearPolities(); map.closePopup(); showAll(); });

  /* ══ THEME SYNC ══ */
  function recolorRoutes() {
    ROUTE_ORDER.forEach(function (k) {
      var c = rcol(ROUTES[k]), L1 = layers[k];
      L1.lines.concat(L1.areas).forEach(function (l) { l.setStyle({ color: c, fillColor: c }); });
      L1.markers.forEach(function (m) { m.setStyle({ fillColor: c }); });
    });
    renderRouteButtons(); renderLegend(); renderJourneyButtons();
    if (jCur) startJourney(jCur, jIdx, true); else if (current) renderPanel(current); else renderAllPanel();
  }
  window.addEventListener('storage', function (e) { if (e.key === 'mcTheme') document.documentElement.setAttribute('data-theme', e.newValue === 'dark' ? 'dark' : 'light'); });
  new MutationObserver(function () { refreshTiles(); recolorRoutes(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // Start once the container has a real size (an iframe that just mounted can be 0×0).
  var started = false;
  function initView() {
    if (started) return;
    var s = map.getSize();
    if (!s.x || !s.y) return setTimeout(initView, 120);
    started = true; map.invalidateSize(); showAll();
  }
  if (document.readyState === 'complete') requestAnimationFrame(initView);
  else window.addEventListener('load', function () { requestAnimationFrame(initView); });
  window.addEventListener('resize', function () { map.invalidateSize(); });
})();
