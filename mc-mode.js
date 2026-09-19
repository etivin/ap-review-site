/* ============================================================
   mc-mode.js — secret "Mission Control" preview toggle.

   Loaded (synchronously, in <head>) on every page. Mission Control is now
   the DEFAULT experience: every visitor gets it unless it has been explicitly
   turned off on that device. A teacher can toggle it off (and back on) by
   clicking the "AP World History" box in the top bar and entering the access
   code. The choice is remembered per-device in localStorage.

   When ON:
     • the home (index.html) routes to the dashboard (mission-control.html)
     • standard pages get <html data-mc="on">, which activates the dormant
       rules in mission-theme.css (navy/lime Mission Control theme)
   When OFF:
     • the dashboard routes back to the original hub
     • nothing is themed — the site is exactly as published

   Change the code below to change the password.
   ============================================================ */
(function () {
  'use strict';
  var PW  = 'missioncontrol';
  var KEY = 'apMissionControl';

  // Mission Control is the ONLY view: always on, for everyone. The opt-out
  // toggle is disabled below so students cannot switch to the old layout.
  function isOn()  { return true; }
  function setOn(v){ try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) {} }

  var p = location.pathname;
  var isDash = /mission-control\.html$/i.test(p);
  var isHome = !isDash && (p === '' || p === '/' || /\/$/.test(p) || /\/index\.html$/i.test(p));
  var on = isOn();

  // Route "home" to the right place for the current mode — before the body paints.
  if (on && isHome)  { location.replace('mission-control.html'); return; }
  if (!on && isDash) { location.replace('index.html'); return; }

  // Activate the dormant theme on standard pages when the preview is on
  // (the dashboard is self-styled, so it is skipped).
  if (on && !isDash && document.documentElement) {
    document.documentElement.setAttribute('data-mc', 'on');
  }

  // Secret gesture: click the "AP World History" box (.top-bar-tag) — or any
  // element marked [data-mc-toggle] (the dashboard's exit chip) — then type the code.
  function wire() {
    var els = document.querySelectorAll('.top-bar-tag, [data-mc-toggle]');
    Array.prototype.forEach.call(els, function (el) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', function (ev) {
        ev.preventDefault();
        var ans = window.prompt('Enter access code:');
        if (ans === null) return;                       // cancelled — do nothing
        if (ans.trim().toLowerCase() === PW) {
          var next = !isOn();
          setOn(next);
          location.replace(next ? 'mission-control.html' : 'index.html');
        } else {
          window.alert('Incorrect code.');
        }
      });
    });
  }
  // In preview mode, give every page (units, cumulative, tools) the same top
  // bar as the dashboard — brand + nav — so the chrome matches and the way back
  // (Dashboard link + brand) is always in the same place. The page's fixed
  // sidebar and sticky bars are pushed down so nothing overlaps.
  function injectTopBar() {
    if (!(on && !isDash) || document.getElementById('mc-bar')) return;
    var H = 54;
    var st = document.createElement('style'); st.id = 'mc-bar-css';
    st.textContent =
      '#mc-bar{position:fixed;top:0;left:0;right:0;height:' + H + 'px;z-index:1000;background:#111a3f;' +
        'display:flex;align-items:center;justify-content:space-between;gap:16px;padding:0 max(16px,3vw);box-shadow:0 2px 0 #2d5deb}' +
      '#mc-bar .mcb-brand{font-family:"Lato",sans-serif!important;font-weight:900!important;font-size:1rem;letter-spacing:-.04em;color:#fff;text-decoration:none;white-space:nowrap}' +
      '#mc-bar .mcb-brand b{color:#d8f13a}' +
      '#mc-bar .mcb-left{display:flex;align-items:center;gap:14px;flex-shrink:0}' +
      '#mc-bar .mcb-back{display:inline-flex;align-items:center;gap:6px;background:#d8f13a;color:#111a3f;' +
        'font-weight:700;font-size:.66rem;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;' +
        'padding:9px 14px;border:2px solid #d8f13a;white-space:nowrap}' +
      '#mc-bar .mcb-back:hover{background:#fff;border-color:#fff}' +
      '#mc-bar nav{display:flex;flex-wrap:nowrap;gap:15px;justify-content:flex-end}' +
      '#mc-bar nav a{color:#fff;text-decoration:none;font-size:.74rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;white-space:nowrap;border-bottom:2px solid transparent;padding:8px 4px}' +
      '#mc-bar nav a:hover{color:#d8f13a;border-bottom-color:#d8f13a}' +
      '#mc-bar nav a.here{color:#111a3f;background:#d8f13a;padding:8px 9px}' +
      '#mc-bar .dd{position:relative}' +
      '#mc-bar .dd-t{font:inherit;color:#fff;background:none;border:none;cursor:pointer;font-size:.74rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;white-space:nowrap;border-bottom:2px solid transparent;padding:8px 4px;display:inline-flex;align-items:center;gap:5px}' +
      '#mc-bar .dd-t .cv{font-size:.72em;line-height:1;transition:transform .15s}' +
      '#mc-bar .dd:hover .dd-t,#mc-bar .dd.open .dd-t{color:#d8f13a;border-bottom-color:#d8f13a}' +
      '#mc-bar .dd.open .dd-t .cv{transform:rotate(180deg)}' +
      '#mc-bar .dd.has-here .dd-t{color:#111a3f;background:#d8f13a;padding:8px 9px}' +
      '#mc-bar .dd-m{position:absolute;top:100%;right:0;min-width:190px;background:#111a3f;border:1px solid #2d5deb;box-shadow:0 10px 22px rgba(0,0,0,.45);display:none;flex-direction:column;padding:6px 0;z-index:1001}' +
      '#mc-bar .dd.open .dd-m{display:flex}' +
      '#mc-bar .dd-m a{display:block;padding:11px 17px;border-bottom:none}' +
      '#mc-bar .dd-m a:hover{background:#2d5deb;color:#fff;border-bottom:none}' +
      '#mc-bar .dd-m a.here{color:#111a3f;background:#d8f13a}' +
      'body{padding-top:' + H + 'px}' +
      // Only offset the fixed desktop sidebar; on mobile it flows normally.
      '@media(min-width:901px){.sidebar{top:' + H + 'px!important}}' +
      // Trim redundancy: the top bar already carries the brand and the way back.
      '.sidebar .sb-footer{display:none!important}' +
      '.sidebar .sb-badge{display:none!important}' +
      '.top-bar{top:' + H + 'px!important;height:44px!important;min-height:0!important}' +
      '.top-bar .top-bar-title{font-size:1rem!important}' +
      '.top-bar .top-bar-sub{display:none!important}' +
      '.subtab-bar{top:' + (H + 44) + 'px!important}' +
      '@media(max-width:760px){#mc-bar .mcb-brand{display:none}}' +
      '@media(max-width:620px){#mc-bar{gap:6px;padding:0 12px}#mc-bar nav{gap:12px}' +
        '#mc-bar .mcb-back{font-size:.56rem;padding:8px 10px;gap:4px}' +
        '#mc-bar nav a,#mc-bar .dd-t{font-size:.64rem;padding:7px 3px}' +
        '#mc-bar nav a.here,#mc-bar .dd.has-here .dd-t{padding:7px 7px}}';
    document.head.appendChild(st);

    var here = location.pathname.replace(/^.*\//, '');
    function subLnk(href, label) { return '<a href="' + href + '"' + (href === here ? ' class="here"' : '') + '>' + label + '</a>'; }
    function group(label, items) {
      var has = items.some(function (i) { return i[0] === here; });
      var menu = items.map(function (i) { return subLnk(i[0], i[1]); }).join('');
      return '<div class="dd' + (has ? ' has-here' : '') + '">' +
        '<button type="button" class="dd-t">' + label + ' <span class="cv">&#9662;</span></button>' +
        '<div class="dd-m">' + menu + '</div></div>';
    }
    var bar = document.createElement('header'); bar.id = 'mc-bar';
    bar.innerHTML =
      '<div class="mcb-left">' +
        '<a class="mcb-back" href="mission-control.html">&larr; Dashboard</a>' +
        '<a class="mcb-brand" href="mission-control.html">APWH <b>/</b> MISSION CONTROL</a>' +
      '</div>' +
      '<nav>' +
        '<a href="mission-control.html#units">Units</a>' +
        group('How to', [['sbmcq.html', 'How to Stimulus MCQ'], ['brain-sculptor.html', 'How to Study'], ['writing-guide.html', 'How to Write']]) +
        group('Review', [['resources.html', 'Resources'], ['cumulative.html', 'Cumulative'], ['fullcourse.html', 'Narrative']]) +
      '</nav>';
    document.body.insertBefore(bar, document.body.firstChild);

    // Dropdowns: click to toggle, click away (or Esc) to close.
    var dds = Array.prototype.slice.call(bar.querySelectorAll('.dd'));
    function closeAll(except) {
      dds.forEach(function (d) {
        if (d === except) return;
        d.classList.remove('open');
        var t = d.querySelector('.dd-t'); if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
    dds.forEach(function (dd) {
      var trig = dd.querySelector('.dd-t'); if (!trig) return;
      trig.setAttribute('aria-haspopup', 'true');
      trig.setAttribute('aria-expanded', 'false');
      trig.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        var open = !dd.classList.contains('open');
        closeAll(dd);
        dd.classList.toggle('open', open);
        trig.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('.dd')) closeAll(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });
  }
  // Mission Control is the only view — the opt-out toggle (wire) is intentionally
  // not called, so clicking the brand/tag no longer prompts for the exit code.
  function onReady() { injectTopBar(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady);
  else onReady();
})();
