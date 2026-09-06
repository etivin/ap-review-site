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
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
  else wire();
})();
