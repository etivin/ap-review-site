/* ============================================================
   mc-mode.js — secret "Mission Control" preview toggle.

   Loaded (synchronously, in <head>) on every page. The published site
   looks completely normal by default. A teacher enables the Mission
   Control preview by clicking the "AP World History" box in the top bar
   and entering the access code; a second time turns it back off. The
   choice is remembered per-device in localStorage.

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

  function isOn()  { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
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
    var H = 46;
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
      '#mc-bar nav{display:flex;flex-wrap:nowrap;overflow-x:auto;gap:15px;justify-content:flex-end;scrollbar-width:none}' +
      '#mc-bar nav::-webkit-scrollbar{display:none}' +
      '#mc-bar nav a{color:#fff;text-decoration:none;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;border-bottom:2px solid transparent;padding:4px 1px}' +
      '#mc-bar nav a:hover{color:#d8f13a;border-bottom-color:#d8f13a}' +
      '#mc-bar nav a.here{color:#111a3f;background:#d8f13a;padding:4px 8px}' +
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
      '@media(max-width:760px){#mc-bar .mcb-brand{display:none}}';
    document.head.appendChild(st);

    var here = location.pathname.replace(/^.*\//, '');
    function lnk(href, label) { return '<a href="' + href + '"' + (href === here ? ' class="here"' : '') + '>' + label + '</a>'; }
    var bar = document.createElement('header'); bar.id = 'mc-bar';
    bar.innerHTML =
      '<div class="mcb-left">' +
        '<a class="mcb-back" href="mission-control.html">&larr; Back to Dashboard</a>' +
        '<a class="mcb-brand" href="mission-control.html">APWH <b>/</b> MISSION CONTROL</a>' +
      '</div>' +
      '<nav>' +
        '<a href="mission-control.html#units">Units</a>' +
        lnk('brain-sculptor.html', 'How to Study') +
        lnk('resources.html', 'Resources') +
        lnk('sbmcq.html', 'Stimulus MCQ') +
        lnk('cumulative.html', 'Cumulative') +
        lnk('fullcourse.html', 'Narrative') +
      '</nav>';
    document.body.insertBefore(bar, document.body.firstChild);
  }
  function onReady() { wire(); injectTopBar(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady);
  else onReady();
})();
