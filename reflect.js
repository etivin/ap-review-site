/* reflect.js — "type what you recall before you go" exit reflection.
   Reflection / free recall is itself a powerful form of retrieval practice
   (Make It Stick, Ch. 2). Flow:
     1. After a dwell, if the student heads for the tab bar / switches away,
        a popup asks them to TYPE what they remember. "Done" unlocks only
        once they've written a real sentence.
     2. A beforeunload backstop makes the browser throw its native
        "Leave site?" prompt if they go straight for the X without reflecting.
        (Browsers do not allow a custom message or form at that moment — this
        is only a nag, and the student can always choose to leave.)
   Runs at most once per browser session (until they complete a reflection).
   Internal same-site link clicks are never nagged. */
(function () {
  var DONE_KEY = 'bsReflectDoneV2';
  var DWELL_MS = 20000;  // give them time on the page before arming
  var MIN_CHARS = 15;    // require at least a short sentence

  // Already reflected this session? Do nothing at all.
  try { if (sessionStorage.getItem(DONE_KEY)) return; } catch (e) {}

  var armed = false;        // dwell elapsed
  var completed = false;    // typed + submitted a reflection
  var leavingInternally = false; // clicked a link within the site
  var overlay, textarea, doneBtn;

  function init() {
    var style = document.createElement('style');
    style.textContent = [
      ".bsr-overlay{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(26,26,18,.62)}",
      ".bsr-overlay.bsr-show{display:flex}",
      ".bsr-card{position:relative;background:#f9f6ef;border:1px solid #ddd0b8;border-top:5px solid #b0001c;box-shadow:0 20px 60px rgba(0,0,0,.35);max-width:470px;width:100%;padding:30px 30px 24px;font-family:'Source Serif 4','Inter',Georgia,serif;color:#1a1a12;line-height:1.6}",
      ".bsr-overlay.bsr-show .bsr-card{animation:bsrIn .2s ease}",
      "@keyframes bsrIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}",
      ".bsr-kicker{font-family:'IBM Plex Mono',monospace;font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:#b0001c;margin-bottom:10px}",
      ".bsr-title{font-family:'Playfair Display',Georgia,serif;font-size:1.4rem;font-weight:900;line-height:1.15;margin:0 0 10px}",
      ".bsr-lede{font-size:.9rem;color:#48483a;margin:0 0 14px}",
      ".bsr-input{display:block;width:100%;min-height:100px;resize:vertical;border:1px solid #ddd0b8;background:#fff;padding:11px 12px;font-family:inherit;font-size:.98rem;color:#1a1a12;line-height:1.5;margin:0 0 8px}",
      ".bsr-input:focus{outline:none;border-color:#b0001c;box-shadow:0 0 0 2px rgba(176,0,28,.12)}",
      ".bsr-hint{font-family:'IBM Plex Mono',monospace;font-size:.56rem;letter-spacing:.06em;text-transform:uppercase;color:#7a7860;margin:0 0 16px}",
      ".bsr-done{width:100%;background:#b0001c;color:#fff;border:none;padding:13px;font-family:'IBM Plex Mono',monospace;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;transition:background .15s}",
      ".bsr-done:hover{background:#850015}",
      ".bsr-done:disabled{background:#c9bfa6;color:#f3ece0;cursor:not-allowed}",
      ".bsr-keep{display:block;width:100%;text-align:center;margin-top:12px;background:none;border:none;color:#7a7860;font-family:'IBM Plex Mono',monospace;font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;text-decoration:underline}",
      ".bsr-keep:hover{color:#b0001c}",
      "@media(max-width:520px){.bsr-card{padding:24px 20px 20px}.bsr-title{font-size:1.2rem}}"
    ].join('');
    document.head.appendChild(style);

    overlay = document.createElement('div');
    overlay.className = 'bsr-overlay';
    overlay.id = 'bsReflect';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'bsrTitle');
    overlay.innerHTML =
      '<div class="bsr-card">' +
        '<div class="bsr-kicker">Make It Stick &middot; Reflection</div>' +
        '<h2 class="bsr-title" id="bsrTitle">Before you go: what do you remember?</h2>' +
        '<p class="bsr-lede">Pulling ideas back out of your head is one of the most powerful ways to make them stick. Type a few things you recall: what you learned, how it connects, or what you will try next time.</p>' +
        '<textarea class="bsr-input" id="bsrInput" aria-label="What do you remember?" placeholder="Write what you remember from this page..."></textarea>' +
        '<div class="bsr-hint" id="bsrHint">Write at least a sentence to continue</div>' +
        '<button class="bsr-done" type="button" disabled>Done, I have reflected</button>' +
        '<button class="bsr-keep" type="button">I am staying on the page</button>' +
      '</div>';
    document.body.appendChild(overlay);

    textarea = overlay.querySelector('.bsr-input');
    doneBtn = overlay.querySelector('.bsr-done');
    var keepBtn = overlay.querySelector('.bsr-keep');
    var hint = overlay.querySelector('#bsrHint');

    function refreshBtn() {
      var ok = textarea.value.trim().length >= MIN_CHARS;
      doneBtn.disabled = !ok;
      hint.textContent = ok ? 'Nice recall. You can close this now.' : 'Write at least a sentence to continue';
    }
    textarea.addEventListener('input', refreshBtn);

    // Complete: they typed a real reflection. Stop nagging for the session.
    doneBtn.addEventListener('click', function () {
      if (textarea.value.trim().length < MIN_CHARS) return;
      completed = true;
      try { sessionStorage.setItem(DONE_KEY, '1'); } catch (e) {}
      hideModal();
    });

    // Gentle escape so a stray mouse move never traps a student. Hides the
    // popup but keeps the backstop armed, so a real close still nags them.
    keepBtn.addEventListener('click', hideModal);

    // Backstop: native "Leave site?" prompt if they try to actually close/leave
    // (not via an internal link) before reflecting.
    window.addEventListener('beforeunload', function (e) {
      if (completed || leavingInternally || !armed) return;
      showModal();          // visible if they hit Cancel and stay
      e.preventDefault();
      e.returnValue = '';   // required for the native prompt in most browsers
      return '';
    });

    // Internal same-site navigation should never be nagged.
    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#') return;
      if (a.target && a.target !== '_self') return; // new tab/window: current page stays
      try {
        if (new URL(a.href, location.href).origin === location.origin) leavingInternally = true;
      } catch (err) {}
    }, true);

    setTimeout(function () { armed = true; }, DWELL_MS);

    // Desktop: cursor leaves the top edge toward the tab bar / close button.
    document.addEventListener('mouseout', function (e) {
      if (!armed || completed) return;
      if (e.relatedTarget || e.toElement) return;
      if (e.clientY <= 0) showModal();
    });

    // Mobile / tab-switch: the page is being hidden.
    document.addEventListener('visibilitychange', function () {
      if (armed && !completed && document.visibilityState === 'hidden') showModal();
    });
  }

  function showModal() {
    if (completed || !overlay) return;
    overlay.classList.add('bsr-show');
    try { textarea.focus(); } catch (e) {}
  }

  function hideModal() {
    overlay.classList.remove('bsr-show');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
