/* ─────────────────────────────────────────────────────────────
   Seasonal themes. Loaded in <head> right after bedtime.js on every page
   that loads bedtime.js (not inside map iframes).

   Thanksgiving break 2026 (Nov 21 to Nov 29, Eastern dates):
     1. Harvest colors: remaps the shared page tokens (pumpkin, cranberry,
        harvest gold, roast brown, pie-crust paper). Dark mode turns to deep
        roast browns (no pie crust) with the same harvest accents.
     2. Pie-crust maple leaves drifting behind the page content (off under
        reduced motion). The daily gratitude gate was removed 2026-11-23 (Eli).

   window.SEASON = {id, on(id), today}; daily-tivin.js reads it for the turkey
   dive. Preview before the dates: add ?season=thanksgiving to any page URL
   (kept for this tab only; ?season=off ends the preview). The real dates
   cannot be turned off from the URL.
   ───────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var SEASONS = [
    { id: 'thanksgiving', from: '2026-11-21', to: '2026-11-29' }
  ];
  var NO_LEAVES = /class-stats(\.html)?$/; // teacher page: colors only

  function easternYmd() {
    try {
      var p = {};
      new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' })
        .formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
      return p.year + '-' + p.month + '-' + p.day;
    } catch (e) {
      var d = new Date();
      return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
    }
  }
  function sget(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function sset(k, v) { try { if (v == null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v); } catch (e) {} }

  var today = easternYmd();
  var active = null, preview = false;
  SEASONS.forEach(function (s) { if (today >= s.from && today <= s.to) active = s; });

  // Preview switch (this tab only). Only turns a season ON outside its dates.
  try {
    var q = new URLSearchParams(location.search).get('season');
    if (q === 'off') sset('seasonPreview', null);
    else if (q) sset('seasonPreview', q);
  } catch (e) {}
  if (!active) {
    var pv = sget('seasonPreview');
    SEASONS.forEach(function (s) { if (s.id === pv) { active = s; preview = true; } });
  }

  window.SEASON = {
    id: active ? active.id : null,
    preview: preview,
    today: today,
    on: function (id) { return !!active && active.id === id; }
  };
  if (!active) return;

  var root = document.documentElement;
  root.setAttribute('data-season', active.id);
  var inFrame = window.self !== window.top;

  /* ---------- 1. Harvest colors ---------- */
  var L = 'html[data-season="thanksgiving"]:not([data-theme="dark"])';
  var LM = 'html[data-season="thanksgiving"][data-mc="on"]:not([data-theme="dark"])';
  var A = 'html[data-season="thanksgiving"][data-mc]';
  var css = ''
    + L + ',' + LM + '{'
    + '--cream:#fbf3e4;--bg:#fbf3e4;--white:#fffdf8;--paper:#f6e9d2;'
    + '--border:#ead7b5;--border2:#d9b98a;--line:#e6d2ae;'
    + '--ink:#3b2416;--mid:#5e4330;--muted:#86684f;--sky:#fbf0dd;'
    + '--red:#b4501a;--red-d:#8e3c12;--red-bg:#fcefe2;'
    + '--gold:#a8730f;--gold-bg:#fdf4dc;--gold-b:#e8c679;'
    + '--blue:#8e2c2c;--blue-bg:#fbecea;'
    + '--navy:#3b2416;--coral:#c2571a;--lime:#e8a83a;}'
    + 'html[data-season="thanksgiving"]:not([data-theme="dark"]) body{background-color:var(--cream)}'
    /* dark mode: deep roast browns instead of the gray-navy darks, no pie crust */
    + A + '[data-theme="dark"],html[data-season="thanksgiving"][data-theme="dark"]{'
    + '--cream:#1a120c;--bg:#1a120c;--white:#24180f;--paper:#2c1e13;'
    + '--border:#47331f;--border2:#5c4329;--line:#3d2b1a;'
    + '--ink:#140d08;--mid:#d9c3a8;--muted:#a88d70;--sky:#2a1c11;'
    + '--red:#d9692a;--red-d:#b4501a;--red-bg:rgba(217,105,42,.12);'
    + '--gold-bg:rgba(232,168,58,.10);--blue-bg:rgba(224,128,107,.10);--green-bg:rgba(120,160,70,.10);'
    + '--coral:#d9692a;--lime:#e8a83a;--navy:#21150c;--gold:#e0a526;--blue:#e0806b;}'
    + 'html[data-season="thanksgiving"][data-theme="dark"] body{background:#1a120c}'
    + 'html[data-season="thanksgiving"][data-theme="dark"] .sidebar{background:#140d08}'
    + 'html[data-season="thanksgiving"][data-theme="dark"] .hero::before{background:linear-gradient(rgba(26,18,12,.8),rgba(20,13,8,.93))!important}'
    /* home page (index.html) and Daily Tivin hard-code navy panels in dark mode */
    + 'html[data-season="thanksgiving"][data-theme="dark"]{--dt-ink:#f3e2c7;--dt-mut:#c4ab8e;--dt-bg:#1a120c;--dt-panel:#24180f;--dt-line:#47331f;--dt-sky:#2c1e13;--dt-miss:#5c4632}'
    + (function () {
      var D = 'html[data-season="thanksgiving"][data-theme="dark"] ';
      var panel = ['.hs-box', '.path', '.about', '.syl', '.unit-picker select', '.wm-custom input', '.dt-card', '.unit-card'];
      return panel.map(function (s) { return D + s; }).join(',') + '{background:#24180f!important;border-color:#47331f!important}'
        + D + '.about-quotes,' + D + '.p-skill .path-h{background:#1a120c!important;border-color:#47331f!important}';
    })()
    + 'html[data-season="thanksgiving"] #mc-bar,html[data-season="thanksgiving"] .tr-hello{background:var(--navy)!important}'
    + 'html[data-season="thanksgiving"] .nav-item.active{background:rgba(232,168,58,.16)!important}'
    + 'html[data-season="thanksgiving"] #mc-bar nav a.here,html[data-season="thanksgiving"] #mc-bar .dd.has-here .dd-t{color:#3b2416!important}';
  var st = document.createElement('style');
  st.id = 'season-styles';
  st.textContent = css;
  (document.head || root).appendChild(st);

  if (inFrame || NO_LEAVES.test(location.pathname)) return;

  /* ---------- Background leaves ----------
     A few pie-crust colored maple leaves drift down behind the page content
     (a fixed canvas at z-index -1, so cards and text cover it). Not on the
     full-window game pages, not under reduced motion; pauses in hidden tabs. */
  var GAME_PAGE = /unit\d-(minecart|rails|tank|sputnik|freight|racer|voyage|fleet|crown|urban|empire|hexweb)(\.html)?$/;
  function bgLeaves() {
    if (GAME_PAGE.test(location.pathname)) return;
    try { if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; } catch (e) {}
    if (!window.Path2D || document.getElementById('tg-bgleaves')) return;
    var cv = document.createElement('canvas');
    cv.id = 'tg-bgleaves';
    cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;z-index:-1;pointer-events:none';
    document.body.insertBefore(cv, document.body.firstChild);
    var c = cv.getContext('2d'), dpr = Math.min(2, window.devicePixelRatio || 1), Wd = 0, Hd = 0;
    var LEAF = new Path2D('M12 2c1 2 2 3 4 3-1 1-1 2 0 3 2 0 3-1 4-1-1 2-1 3 0 5-2 0-3 1-3 2 1 1 2 2 2 3-2 0-4-1-5-1v6h-2v-6c-1 0-3 1-5 1 0-1 1-2 2-3 0-1-1-2-3-2 1-2 1-3 0-5 1 0 2 1 4 1 1-1 1-2 0-3 2 0 3-1 4-3z');
    var LIGHT = ['#e6c99a', '#dcb980', '#ecd5ac', '#d9b077'], DARK = ['#f6e7c8', '#ead2a4', '#e3c28c'];
    function size() { Wd = innerWidth; Hd = innerHeight; cv.width = Wd * dpr; cv.height = Hd * dpr; }
    size(); addEventListener('resize', size);
    var N = Math.max(10, Math.min(22, Math.round(innerWidth / 70))), leaves = [];
    function make(top) {
      return { x: Math.random() * Wd, y: top ? -40 - Math.random() * Hd * 0.3 : Math.random() * Hd, s: 0.7 + Math.random() * 1.1,
        vy: 0.25 + Math.random() * 0.45, sway: 0.6 + Math.random() * 1.2, ph: Math.random() * 6.28, rot: Math.random() * 6.28,
        vr: (Math.random() - 0.5) * 0.02, k: Math.floor(Math.random() * 4) };
    }
    for (var i = 0; i < N; i++) leaves.push(make(false));
    var raf = 0, last = 0;
    function frame(t) {
      raf = requestAnimationFrame(frame);
      if (t - last < 30) return; // about 30 fps is plenty for drifting leaves
      var dt = last ? Math.min(3, (t - last) / 33) : 1; last = t;
      var dark = root.getAttribute('data-theme') === 'dark', pal = dark ? DARK : LIGHT;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, Wd, Hd);
      c.globalAlpha = dark ? 0.2 : 0.6;
      leaves.forEach(function (l, n) {
        l.y += l.vy * dt; l.ph += 0.012 * dt; l.rot += l.vr * dt;
        var x = l.x + Math.sin(l.ph) * 30 * l.sway;
        if (l.y > Hd + 40) leaves[n] = make(true);
        c.save();
        c.translate(x, l.y); c.rotate(l.rot + Math.sin(l.ph * 1.3) * 0.4); c.scale(l.s, l.s); c.translate(-12, -12);
        c.fillStyle = pal[l.k % pal.length];
        c.fill(LEAF);
        c.restore();
      });
    }
    raf = requestAnimationFrame(frame);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
      else if (!raf) { last = 0; raf = requestAnimationFrame(frame); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bgLeaves);
  else bgLeaves();

})();
