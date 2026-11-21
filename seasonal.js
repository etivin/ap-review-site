/* ─────────────────────────────────────────────────────────────
   Seasonal themes. Loaded in <head> right after bedtime.js on every page
   that loads bedtime.js (not inside map iframes).

   Thanksgiving break 2026 (Nov 21 to Nov 29, Eastern dates):
     1. Harvest colors: remaps the shared page tokens (pumpkin, cranberry,
        harvest gold, roast brown, pie-crust paper). Dark mode turns to deep
        roast browns (no pie crust) with the same harvest accents.
     2. Gratitude gate: once a day the whole site is covered until the student
        types 5 things they are thankful for. The entries stay in this browser
        only (localStorage thanks_v1); nothing is sent anywhere. The games lock
        is unchanged.
     3. Falling leaves when the list is saved (off under reduced motion).

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
  var TKEY = 'thanks_v1';
  var NEED = 5;
  var NO_GATE = /class-stats(\.html)?$/; // teacher page: theme only

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
  function lget(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function lset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

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
    /* the gate card in dark mode */
    + 'html[data-theme="dark"] #tg-gate{background:#120b06}'
    + 'html[data-theme="dark"] .tg-card{background:#24180f;border-color:#b4501a}'
    + 'html[data-theme="dark"] .tg-card h1{color:#f3e2c7}'
    + 'html[data-theme="dark"] .tg-sub,html[data-theme="dark"] .tg-hist{color:#d9c3a8}'
    + 'html[data-theme="dark"] .tg-top{color:#e0806b}'
    + 'html[data-theme="dark"] .tg-row input{background:#1a120c;border-color:#47331f;color:#f3e2c7}'
    + 'html[data-theme="dark"] .tg-row input::placeholder{color:#8a6f55}'
    + 'html[data-theme="dark"] .tg-err{color:#ff9b85}'
    + 'html[data-theme="dark"] .tg-note,html[data-theme="dark"] .tg-hist h3{color:#a88d70}'
    + 'html[data-theme="dark"] .tg-hist summary{color:#e8a83a}'
    + 'html[data-theme="dark"] .tg-hist{border-top-color:#47331f}'
    + 'html[data-season="thanksgiving"] .nav-item.active{background:rgba(232,168,58,.16)!important}'
    + 'html[data-season="thanksgiving"] #mc-bar nav a.here,html[data-season="thanksgiving"] #mc-bar .dd.has-here .dd-t{color:#3b2416!important}'
    /* gate: hide the page until today's list is in, so nothing flashes */
    + 'html[data-tg-gate] body>*:not(#tg-gate){visibility:hidden!important}'
    + '#tg-gate{position:fixed;inset:0;z-index:2147482000;overflow-y:auto;box-sizing:border-box;padding:28px 16px 40px;'
    + 'background:#3b2416;color:#3b2416;font-family:Lato,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;'
    + 'display:flex;align-items:flex-start;justify-content:center;animation:tgFade .35s ease both}'
    + '#tg-gate *{box-sizing:border-box}'
    + '@keyframes tgFade{from{opacity:0}to{opacity:1}}'
    + '@keyframes tgRise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}'
    + '@keyframes tgOut{to{opacity:0;transform:scale(.98)}}'
    + '@keyframes tgShake{0%,100%{transform:none}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}'
    + '.tg-card{position:relative;width:100%;max-width:560px;margin:auto 0;background:#fbf3e4;border-radius:18px;'
    + 'border:3px solid #e8a83a;box-shadow:0 18px 50px rgba(0,0,0,.35);padding:26px 24px 22px;animation:tgRise .45s ease both}'
    + '.tg-top{display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:12px;font-weight:700;'
    + 'letter-spacing:.08em;text-transform:uppercase;color:#8e2c2c}'
    + '.tg-streak{color:#56692b}'
    + '.tg-art{display:block;margin:10px auto 4px;width:120px;height:auto}'
    + '.tg-card h1{font:900 26px/1.15 Lato,system-ui,sans-serif;margin:6px 0 6px;text-align:center;color:#3b2416}'
    + '.tg-sub{font-size:15px;line-height:1.55;margin:0 0 16px;text-align:center;color:#5e4330}'
    + '.tg-row{display:flex;align-items:center;gap:10px;margin-bottom:8px}'
    + '.tg-num{flex:none;width:28px;height:28px;border-radius:50%;background:#e8a83a;color:#3b2416;font-weight:900;'
    + 'display:flex;align-items:center;justify-content:center;font-size:14px;transition:background .2s}'
    + '.tg-row.ok .tg-num{background:#56692b;color:#fff}'
    + '.tg-row input{flex:1;min-width:0;height:44px;border-radius:10px;border:2px solid #e3cba3;background:#fffdf8;'
    + 'padding:0 12px;font:inherit;font-size:16px;color:#3b2416;outline:none}'
    + '.tg-row input:focus{border-color:#c2571a;box-shadow:0 0 0 3px rgba(194,87,26,.18)}'
    + '.tg-row input::placeholder{color:#a88f76}'
    + '.tg-err{min-height:20px;font-size:14px;color:#8e2c2c;margin:4px 0 8px;font-weight:700}'
    + '.tg-btn{width:100%;border:0;border-radius:12px;padding:15px 18px;font:900 16px Lato,system-ui,sans-serif;cursor:pointer;'
    + 'background:#c2571a;color:#fff;box-shadow:0 6px 0 #8e3c12;transition:transform .1s,box-shadow .1s}'
    + '.tg-btn:hover{background:#b4501a}'
    + '.tg-btn:active{transform:translateY(4px);box-shadow:0 2px 0 #8e3c12}'
    + '.tg-note{font-size:12.5px;color:#86684f;text-align:center;margin:12px 0 0;line-height:1.5}'
    + '.tg-hist{margin-top:16px;border-top:2px dashed #e3cba3;padding-top:12px;font-size:14px;color:#5e4330}'
    + '.tg-hist summary{cursor:pointer;font-weight:700;color:#8e2c2c}'
    + '.tg-hist h3{font-size:13px;margin:12px 0 4px;color:#86684f;text-transform:uppercase;letter-spacing:.06em}'
    + '.tg-hist ol{margin:0;padding-left:22px;line-height:1.55}'
    + '.tg-shake{animation:tgShake .3s ease}'
    + '#tg-gate.tg-leaving{animation:tgOut .5s ease forwards}'
    + '.tg-leaf{position:fixed;top:-40px;z-index:2147482001;pointer-events:none;will-change:transform}'
    + '@media(max-width:480px){.tg-card{padding:20px 16px 18px}.tg-card h1{font-size:22px}}'
    + '@media(prefers-reduced-motion:reduce){#tg-gate,.tg-card,#tg-gate.tg-leaving{animation:none}}';
  var st = document.createElement('style');
  st.id = 'season-styles';
  st.textContent = css;
  (document.head || root).appendChild(st);

  if (inFrame || NO_GATE.test(location.pathname)) return;

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

  /* ---------- 2. Gratitude gate ---------- */
  function store() { var s = lget(TKEY); return s && s.days ? s : { days: {} }; }
  function doneToday() { var d = store().days[today]; return !!(d && d.length >= NEED); }

  if (doneToday()) return;
  root.setAttribute('data-tg-gate', '');

  function dayNum() {
    var a = new Date(active.from + 'T12:00:00'), b = new Date(today + 'T12:00:00');
    var n = Math.round((b - a) / 864e5) + 1, tot = Math.round((new Date(active.to + 'T12:00:00') - a) / 864e5) + 1;
    return n >= 1 && n <= tot ? 'Thanksgiving break: day ' + n + ' of ' + tot : 'Thanksgiving preview';
  }
  function streak() {
    var days = store().days, n = 0, d = new Date(today + 'T12:00:00');
    d.setDate(d.getDate() - 1);
    while (true) {
      var k = d.toISOString().slice(0, 10);
      if (days[k] && days[k].length >= NEED) { n++; d.setDate(d.getDate() - 1); } else break;
    }
    return n;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function prettyDate(k) {
    try { return new Date(k + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }); } catch (e) { return k; }
  }

  // Pixel turkey (fan of tail feathers), drawn with rects so it stays crisp.
  var TURKEY = '<svg class="tg-art" viewBox="0 0 40 30" shape-rendering="crispEdges" aria-hidden="true">'
    + '<g fill="#8e2c2c"><rect x="8" y="6" width="4" height="12"/><rect x="28" y="6" width="4" height="12"/><rect x="18" y="0" width="4" height="10"/></g>'
    + '<g fill="#c2571a"><rect x="12" y="2" width="4" height="12"/><rect x="24" y="2" width="4" height="12"/><rect x="4" y="12" width="4" height="8"/><rect x="32" y="12" width="4" height="8"/></g>'
    + '<g fill="#e8a83a"><rect x="14" y="0" width="4" height="12"/><rect x="22" y="0" width="4" height="12"/><rect x="6" y="9" width="3" height="8"/><rect x="31" y="9" width="3" height="8"/></g>'
    + '<rect x="12" y="12" width="16" height="12" fill="#6b4a2e"/><rect x="14" y="14" width="12" height="9" fill="#7d5838"/>'
    + '<rect x="17" y="8" width="6" height="7" fill="#7d5838"/><rect x="18" y="9" width="2" height="2" fill="#fff"/><rect x="19" y="10" width="1" height="1" fill="#1b1b1b"/>'
    + '<rect x="21" y="11" width="3" height="2" fill="#e8a83a"/><rect x="21" y="13" width="2" height="3" fill="#c0392b"/>'
    + '<g fill="#e8a83a"><rect x="15" y="24" width="2" height="4"/><rect x="23" y="24" width="2" height="4"/><rect x="13" y="28" width="5" height="1"/><rect x="22" y="28" width="5" height="1"/></g>'
    + '</svg>';

  var EXAMPLES = ['My family', 'A friend who always has my back', 'Mashed potatoes', 'A teacher who helped me this year', 'Sleeping in this week',
    'My dog', 'Our team this season', 'Pumpkin pie', 'My grandparents', 'A warm house', 'Music', 'Being healthy'];

  var gate, keyGuard;
  function build() {
    if (document.getElementById('tg-gate')) return;
    var s = store(), prev = Object.keys(s.days).filter(function (k) { return k !== today && s.days[k].length; }).sort().reverse();
    var startEx = Math.abs(today.split('-').join('') | 0) % EXAMPLES.length;
    var rows = '';
    for (var i = 0; i < NEED; i++) {
      rows += '<label class="tg-row"><span class="tg-num">' + (i + 1) + '</span>'
        + '<input type="text" maxlength="120" autocomplete="off" aria-label="Thing ' + (i + 1) + ' I am thankful for" placeholder="'
        + esc(EXAMPLES[(startEx + i) % EXAMPLES.length]) + '"></label>';
    }
    var hist = '';
    if (prev.length) {
      hist = '<details class="tg-hist"><summary>Your thankful lists so far (' + prev.length + ' day' + (prev.length > 1 ? 's' : '') + ')</summary>'
        + prev.map(function (k) { return '<h3>' + esc(prettyDate(k)) + '</h3><ol>' + s.days[k].map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ol>'; }).join('')
        + '</details>';
    }
    var sk = streak();
    gate = document.createElement('div');
    gate.id = 'tg-gate';
    gate.setAttribute('role', 'dialog');
    gate.setAttribute('aria-modal', 'true');
    gate.setAttribute('aria-labelledby', 'tg-title');
    gate.innerHTML = '<div class="tg-card">'
      + '<div class="tg-top"><span>' + dayNum() + '</span>' + (sk ? '<span class="tg-streak">' + sk + ' day' + (sk > 1 ? 's' : '') + ' in a row</span>' : '') + '</div>'
      + TURKEY
      + '<h1 id="tg-title">Happy Thanksgiving!</h1>'
      + '<p class="tg-sub">Before you open Tivin Teaches today, write down <b>5 things you are thankful for</b>. Once a day, every day of break.</p>'
      + '<form novalidate>' + rows
      + '<div class="tg-err" role="alert"></div>'
      + '<button type="submit" class="tg-btn">Open Tivin Teaches</button></form>'
      + '<p class="tg-note">Only you can see this list. It stays on this device and is never sent to Mr. Tivin or anyone else.</p>'
      + hist + '</div>';
    document.body.appendChild(gate);

    var form = gate.querySelector('form'), err = gate.querySelector('.tg-err'), inputs = [].slice.call(gate.querySelectorAll('input'));
    inputs.forEach(function (inp, i) {
      inp.addEventListener('input', function () {
        err.textContent = '';
        inp.parentNode.classList.toggle('ok', /[a-z]{3}/i.test(inp.value));
      });
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && i < inputs.length - 1) { e.preventDefault(); inputs[i + 1].focus(); }
      });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var vals = inputs.map(function (x) { return x.value.trim().replace(/\s+/g, ' '); });
      var bad = -1, seen = {};
      for (var i = 0; i < vals.length; i++) {
        if (!/[a-z].*[a-z].*[a-z]/i.test(vals[i])) { bad = i; err.textContent = 'Fill in all 5 (a few letters each).'; break; }
        var k = vals[i].toLowerCase();
        if (seen[k]) { bad = i; err.textContent = 'Number ' + (i + 1) + ' is the same as another one. Think of something new.'; break; }
        seen[k] = 1;
      }
      if (bad >= 0) {
        inputs[bad].focus();
        var card = gate.querySelector('.tg-card');
        card.classList.remove('tg-shake'); void card.offsetWidth; card.classList.add('tg-shake');
        return;
      }
      var cur = store(); // read-modify-write
      cur.days[today] = vals;
      lset(TKEY, cur);
      openSite(true);
    });
    setTimeout(function () { try { inputs[0].focus(); } catch (e) {} }, 80);

    // Keys outside the gate are swallowed while it is up.
    keyGuard = function (ev) { if (!gate.contains(ev.target)) { ev.stopPropagation(); ev.preventDefault(); } };
    ['keydown', 'keypress', 'keyup'].forEach(function (t) { window.addEventListener(t, keyGuard, true); });
    setInert(true);
    root.style.overflow = 'hidden';
  }

  function setInert(on) {
    [].forEach.call(document.body.children, function (n) {
      if (n.id === 'tg-gate' || n.id === 'bedtime-lock' || n.tagName === 'SCRIPT') return;
      if (on) n.setAttribute('inert', ''); else n.removeAttribute('inert');
    });
  }

  function openSite(celebrate) {
    if (keyGuard) ['keydown', 'keypress', 'keyup'].forEach(function (t) { window.removeEventListener(t, keyGuard, true); });
    setInert(false);
    root.style.overflow = '';
    root.removeAttribute('data-tg-gate');
    if (!gate) return;
    var g = gate; gate = null;
    if (celebrate) leaves();
    g.classList.add('tg-leaving');
    setTimeout(function () { if (g.parentNode) g.parentNode.removeChild(g); }, 520);
  }

  /* ---------- 3. Falling leaves ---------- */
  function leaves() {
    try { if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; } catch (e) {}
    var COLS = ['#c2571a', '#e8a83a', '#8e2c2c', '#b4501a', '#56692b'];
    for (var i = 0; i < 28; i++) (function (i) {
      var d = document.createElement('div');
      d.className = 'tg-leaf';
      var sz = 14 + Math.random() * 16, col = COLS[i % COLS.length];
      d.innerHTML = '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 24 24" aria-hidden="true"><path fill="' + col + '" d="M12 2c1 2 2 3 4 3-1 1-1 2 0 3 2 0 3-1 4-1-1 2-1 3 0 5-2 0-3 1-3 2 1 1 2 2 2 3-2 0-4-1-5-1v6h-2v-6c-1 0-3 1-5 1 0-1 1-2 2-3 0-1-1-2-3-2 1-2 1-3 0-5 1 0 2 1 4 1 1-1 1-2 0-3 2 0 3-1 4-3z"/></svg>';
      d.style.left = (Math.random() * 100) + 'vw';
      document.body.appendChild(d);
      var drift = (Math.random() - 0.5) * 240, spin = (Math.random() - 0.5) * 720, dur = 2600 + Math.random() * 2200;
      var an = d.animate([
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: 'translate(' + drift * 0.5 + 'px,50vh) rotate(' + spin * 0.5 + 'deg)', opacity: 1, offset: 0.5 },
        { transform: 'translate(' + drift + 'px,108vh) rotate(' + spin + 'deg)', opacity: 0.85 }
      ], { duration: dur, delay: i * 70, easing: 'ease-in', fill: 'both' });
      an.onfinish = function () { if (d.parentNode) d.parentNode.removeChild(d); };
    })(i);
  }

  function boot() {
    if (doneToday()) { openSite(false); return; }
    build();
    // A list saved in another tab opens this one too.
    window.addEventListener('storage', function (e) { if (e.key === TKEY && doneToday()) openSite(false); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
