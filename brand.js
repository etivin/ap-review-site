/* brand.js: brand every page with the Tivin Teaches lockup:
   a circular globe+shield emblem (cropped out of the logo art, which has
   arced text baked in) + "Tivin Teaches" / "Education is life itself".
   Header patterns: classic sidebar (.sb-brand), top bar (.bar .brand), and
   the Mission-Control injected strip (#mc-bar .mcb-brand). */
(function () {
  // tivin-emblem.png is the globe (incl. shield) pre-cropped from the logo art,
  // circle-masked so none of the arced text shows.
  // Size is driven by the --em custom property so the header can shrink on scroll
  // (see .bar.tivin-shrink in brand.css): width/bg all scale off --em.
  function emblemStyle(S) {
    return '--em:' + S + 'px;flex-shrink:0;width:var(--em);height:var(--em);border-radius:50%;' +
      'background:#69b3e7 url(tivin-emblem.png) no-repeat center/cover;' +
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
    // classic sidebar (unit hubs): prepend the lockup above the unit title
    var sb = document.querySelector('.sb-brand');
    if (sb && !sb.dataset.tivinLockup) {
      sb.dataset.tivinLockup = '1';
      var old = sb.querySelector('.tivin-logo-sb');
      if (old) old.remove();
      var lk = makeLockup(60, false);
      lk.classList.add('sb');
      sb.insertBefore(lk, sb.firstChild);
    }

    // main top bar (dashboard, maps, games), full lockup
    fillBrand(document.querySelector('.bar .brand'), 104, false);

    // Mission-Control injected top strip (unit pages): compact lockup.
    // mc-mode.js injects it after load, so retry briefly.
    var tries = 0;
    (function fixMcBar() {
      var m = document.querySelector('#mc-bar .mcb-brand');
      if (m) { fillBrand(m, 40, true); return; }
      if (tries++ < 8) setTimeout(fixMcBar, 80);
    })();

    // Shrink the sticky top bar on scroll; restore it at the very top.
    pinBars();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    syncBars();
  }

  // A sticky bar that changes height drags everything below it along mid-scroll:
  // content lurched ~46px faster than the scroll right at the shrink point.
  // Instead, pin the bar (position:fixed, see .tivin-pinned in brand.css) over a
  // spacer that keeps the bar's FULL height, so shrinking only changes the bar
  // and never moves the page. The spacer is re-measured only while the bar is
  // full size and not mid-transition, so it never animates itself.
  function pinBars() {
    Array.prototype.forEach.call(document.querySelectorAll('.bar'), function (b) {
      if (b.dataset.tivinPinned || getComputedStyle(b).position !== 'sticky') return;
      b.dataset.tivinPinned = '1';
      var sp = document.createElement('div');
      sp.className = 'tivin-bar-spacer';
      sp.setAttribute('aria-hidden', 'true');
      b.parentNode.insertBefore(sp, b);
      var animating = false;
      function fit() {
        if (animating || b.classList.contains('tivin-shrink')) return;
        sp.style.height = b.offsetHeight + 'px';
      }
      b.addEventListener('transitionrun', function (e) { if (e.target === b) animating = true; });
      b.addEventListener('transitionend', function (e) { if (e.target === b) { animating = false; fit(); } });
      b.addEventListener('transitioncancel', function (e) { if (e.target === b) { animating = false; fit(); } });
      fit();
      b.classList.add('tivin-pinned');
      if ('ResizeObserver' in window) new ResizeObserver(fit).observe(b);
      else window.addEventListener('resize', fit);
    });
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
