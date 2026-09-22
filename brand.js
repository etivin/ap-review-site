/* brand.js — brand every page with the Tivin Teaches lockup:
   a circular globe+shield emblem (cropped out of the logo art, which has
   arced text baked in) + "Tivin Teaches" / "Education is life itself".
   Header patterns: classic sidebar (.sb-brand), top bar (.bar .brand), and
   the Mission-Control injected strip (#mc-bar .mcb-brand). */
(function () {
  // The globe (incl. shield) sits at x149..1029, y341..1221 in the 1179x1468 art.
  // Size is driven by the --em custom property so the header can shrink on scroll
  // (see .bar.tivin-shrink in brand.css) — width/bg all scale off --em.
  function emblemStyle(S) {
    return '--em:' + S + 'px;flex-shrink:0;width:var(--em);height:var(--em);border-radius:50%;' +
      'background:#69b2e7 url(tivin-logo.jpg) no-repeat;' +
      'background-size:calc(var(--em)*1.3398) calc(var(--em)*1.6682);' +
      'background-position:calc(var(--em)*-0.1693) calc(var(--em)*-0.3875);' +
      'box-shadow:0 3px 12px rgba(0,0,0,.28)';
  }
  function makeLockup(S, compact) {
    var wrap = document.createElement('span');
    wrap.className = 'tivin-lockup';
    wrap.style.cssText = 'display:inline-flex;align-items:center;gap:' + (compact ? 11 : 14) + 'px;text-decoration:none';
    var em = document.createElement('span');
    em.className = 'tivin-emblem';
    em.style.cssText = emblemStyle(S);
    var tx = document.createElement('span');
    tx.className = 'tivin-wordmark' + (compact ? ' compact' : '');
    tx.innerHTML = '<b>Tivin Teaches</b>' + (compact ? '' : '<i>Education is life itself</i>');
    wrap.appendChild(em);
    wrap.appendChild(tx);
    return wrap;
  }
  // clear a brand element and drop the lockup in (used for link-style brands)
  function fillBrand(el, S, compact) {
    if (!el || el.dataset.tivinLockup) return;
    el.dataset.tivinLockup = '1';
    el.innerHTML = '';
    el.style.display = 'inline-flex';
    el.style.alignItems = 'center';
    el.style.textDecoration = 'none';
    el.appendChild(makeLockup(S, compact));
  }

  function add() {
    // classic sidebar (unit hubs) — prepend the lockup above the unit title
    var sb = document.querySelector('.sb-brand');
    if (sb && !sb.dataset.tivinLockup) {
      sb.dataset.tivinLockup = '1';
      var old = sb.querySelector('.tivin-logo-sb');
      if (old) old.remove();
      var lk = makeLockup(60, false);
      lk.classList.add('sb');
      sb.insertBefore(lk, sb.firstChild);
    }

    // main top bar (dashboard, maps, games) — full lockup
    fillBrand(document.querySelector('.bar .brand'), 104, false);

    // Mission-Control injected top strip (unit pages) — compact lockup.
    // mc-mode.js injects it after load, so retry briefly.
    var tries = 0;
    (function fixMcBar() {
      var m = document.querySelector('#mc-bar .mcb-brand');
      if (m) { fillBrand(m, 40, true); return; }
      if (tries++ < 8) setTimeout(fixMcBar, 80);
    })();

    // Shrink the sticky top bar on scroll; restore it at the very top.
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    syncBars();
  }

  // Two thresholds (hysteresis): shrink only past SHRINK_AT, grow back only below
  // GROW_AT. The dead zone between them stops the header from flapping when the
  // shrink itself nudges the scroll position back across a single threshold.
  // A rAF guard coalesces rapid scroll events into one update per frame.
  var SHRINK_AT = 110, GROW_AT = 24, ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { syncBars(); ticking = false; });
  }
  function syncBars() {
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    Array.prototype.forEach.call(document.querySelectorAll('.bar'), function (b) {
      var on = b.classList.contains('tivin-shrink');
      if (!on && y > SHRINK_AT) b.classList.add('tivin-shrink');
      else if (on && y < GROW_AT) b.classList.remove('tivin-shrink');
    });
  }
  if (document.readyState !== 'loading') add();
  else document.addEventListener('DOMContentLoaded', add);
})();
