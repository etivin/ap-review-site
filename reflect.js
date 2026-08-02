/* reflect.js — site-wide "pause and reflect" exit-intent prompt.
   When a student goes to leave a page (after a short dwell), a dismissible
   modal asks the three reflection questions. Reflection is itself a form of
   retrieval practice (Make It Stick, Ch. 2). Shows at most once per session. */
(function () {
  var KEY = 'bsReflectShownV1';
  var DWELL_MS = 30000; // don't interrupt quick bounces

  // Already shown this session? Do nothing at all.
  try { if (sessionStorage.getItem(KEY)) return; } catch (e) {}

  var armed = false;
  var shown = false;

  function init() {
    var style = document.createElement('style');
    style.textContent = [
      ".bsr-overlay{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(26,26,18,.62)}",
      ".bsr-overlay.bsr-show{display:flex}",
      ".bsr-card{position:relative;background:#f9f6ef;border:1px solid #ddd0b8;border-top:5px solid #b0001c;box-shadow:0 20px 60px rgba(0,0,0,.35);max-width:460px;width:100%;padding:30px 30px 26px;font-family:'Source Serif 4','Inter',Georgia,serif;color:#1a1a12;line-height:1.6}",
      ".bsr-overlay.bsr-show .bsr-card{animation:bsrIn .2s ease}",
      "@keyframes bsrIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}",
      ".bsr-x{position:absolute;top:10px;right:14px;background:none;border:none;font-size:1.6rem;line-height:1;color:#7a7860;cursor:pointer;padding:4px}",
      ".bsr-x:hover{color:#b0001c}",
      ".bsr-kicker{font-family:'IBM Plex Mono',monospace;font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:#b0001c;margin-bottom:10px}",
      ".bsr-title{font-family:'Playfair Display',Georgia,serif;font-size:1.4rem;font-weight:900;line-height:1.15;margin:0 0 12px}",
      ".bsr-lede{font-size:.92rem;color:#48483a;margin:0 0 16px}",
      ".bsr-qs{margin:0 0 22px;padding:0;list-style:none;counter-reset:bsr}",
      ".bsr-qs li{counter-increment:bsr;position:relative;padding:10px 0 10px 40px;border-top:1px solid #e7ddc8;font-size:1rem;color:#1a1a12}",
      ".bsr-qs li:first-child{border-top:none}",
      ".bsr-qs li::before{content:counter(bsr);position:absolute;left:0;top:9px;width:26px;height:26px;display:flex;align-items:center;justify-content:center;background:#1a1a12;color:#fff;font-family:'IBM Plex Mono',monospace;font-size:.8rem}",
      ".bsr-done{width:100%;background:#b0001c;color:#fff;border:none;padding:13px;font-family:'IBM Plex Mono',monospace;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;transition:background .15s}",
      ".bsr-done:hover{background:#850015}",
      "@media(max-width:520px){.bsr-card{padding:24px 20px 22px}.bsr-title{font-size:1.2rem}}"
    ].join('');
    document.head.appendChild(style);

    var overlay = document.createElement('div');
    overlay.className = 'bsr-overlay';
    overlay.id = 'bsReflect';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'bsrTitle');
    overlay.innerHTML =
      '<div class="bsr-card">' +
        '<button class="bsr-x" type="button" aria-label="Close">&times;</button>' +
        '<div class="bsr-kicker">Make It Stick &middot; Reflection</div>' +
        '<h2 class="bsr-title" id="bsrTitle">Before you go: 30 seconds of reflection</h2>' +
        '<p class="bsr-lede">Pulling ideas back out of your head is one of the most powerful ways to learn. Answer these in your head or out loud before you close the page.</p>' +
        '<ol class="bsr-qs">' +
          '<li>What did I just learn or practice?</li>' +
          '<li>How does it connect to something I already know?</li>' +
          '<li>What will I try differently next time?</li>' +
        '</ol>' +
        '<button class="bsr-done" type="button">I have reflected</button>' +
      '</div>';
    document.body.appendChild(overlay);

    function onKey(e) { if (e.key === 'Escape' || e.keyCode === 27) close(); }

    function open() {
      if (shown) return;
      shown = true;
      try { sessionStorage.setItem(KEY, '1'); } catch (e) {}
      overlay.classList.add('bsr-show'); // display:none -> flex, gates visibility reliably
      document.addEventListener('keydown', onKey);
    }

    function close() {
      overlay.classList.remove('bsr-show');
      document.removeEventListener('keydown', onKey);
    }

    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('.bsr-x').addEventListener('click', close);
    overlay.querySelector('.bsr-done').addEventListener('click', close);

    // Arm only after the student has spent some time on the page.
    setTimeout(function () { armed = true; }, DWELL_MS);

    // Desktop: cursor leaves the top edge toward the tab bar / close button.
    document.addEventListener('mouseout', function (e) {
      if (!armed || shown) return;
      if (e.relatedTarget || e.toElement) return; // still inside the page
      if (e.clientY <= 0) open();
    });

    // Mobile / tab-switch: the page is being hidden.
    document.addEventListener('visibilitychange', function () {
      if (armed && !shown && document.visibilityState === 'hidden') open();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
