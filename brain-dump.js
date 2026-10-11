/* brain-dump.js: the Brain Dump tab for every unit, drawn from brain-dump-data.js.
   Mount: <div class="bd-mount" data-unit="N"></div> inside #pg-brain.
   Flow: pick a topic, write everything you remember for 5 minutes (a sentence
   starter helps), then the key points for that topic are revealed to compare.
   Units marked fromFlashcards reveal that topic's flashcards (flashcard-data.js).
   bd-confidence.js adds its predict-before-reveal step to the ids used here
   (#bd-reveal, .bd-reveal-hdr, .bd-card-list), so keep them.
   Site convention: plain global, no build step, no imports. */
(function () {
  'use strict';
  var SECONDS = 5 * 60;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function $(id) { return document.getElementById(id); }

  function mount(el) {
    var unit = el.getAttribute('data-unit'), cfg = (window.BRAIN_DUMP || {})[unit];
    if (!cfg) return;
    el.innerHTML =
      '<div class="bd-setup" id="bd-setup">' +
        '<div class="bd-topic-grid" id="bd-topic-grid">' +
          cfg.topics.map(function (t) { return '<button type="button" class="bd-topic-btn" data-topic="' + esc(t.id) + '">' + esc(t.name) + '</button>'; }).join('') +
        '</div>' +
        '<button type="button" class="bd-start-btn" id="bd-start-btn" disabled>&#9654; Start Brain Dump</button>' +
      '</div>' +
      '<div class="bd-session" id="bd-session">' +
        '<div class="bd-timer-bar"><div class="bd-topic-label">Topic<strong id="bd-active-topic">-</strong></div><div class="bd-countdown" id="bd-countdown">5:00</div></div>' +
        '<div class="bd-stem" id="bd-stem"><div class="bd-stem-lbl">&#9997; Sentence starter: begin here if you need a push</div><div class="bd-stem-txt" id="bd-stem-txt"></div></div>' +
        '<textarea class="bd-textarea" id="bd-textarea" aria-label="Your brain dump" placeholder="Write everything you know about this topic: key terms, events, causes, effects, people&hellip; don&rsquo;t stop writing!"></textarea>' +
        '<div class="bd-word-count" id="bd-word-count">0 words</div>' +
        '<div class="bd-reveal" id="bd-reveal">' +
          '<div class="bd-reveal-hdr">&#9989; Time&rsquo;s up! Here are the key points for this topic. Compare them to what you wrote.</div>' +
          '<div class="bd-card-list" id="bd-card-list"></div>' +
          '<button type="button" class="bd-reset-btn" id="bd-reset-btn">&#8635; Try Another Topic</button>' +
        '</div>' +
      '</div>';

    var topic = null, timer = null;
    function find(id) { for (var i = 0; i < cfg.topics.length; i++) if (cfg.topics[i].id === id) return cfg.topics[i]; return null; }
    function points(t) {
      if (t.points) return t.points;
      return ((window.FC_DATA || {})[unit] || []).filter(function (r) { return r[0] === t.id; }).map(function (r) { return { t: r[1], d: r[2] }; });
    }
    function reveal() {
      $('bd-textarea').disabled = true;
      var p = points(find(topic));
      $('bd-card-list').innerHTML = p.map(function (c) {
        return '<div class="bd-card"><div class="bd-card-term">' + c.t + '</div><div class="bd-card-def">' + c.d + '</div></div>';
      }).join('') || '<p style="color:var(--muted);font-size:.88rem">No key points saved for this topic yet.</p>';
      $('bd-reveal').classList.add('active');
    }
    function startTimer() {
      clearInterval(timer);
      var left = SECONDS;
      function tick() {
        var c = $('bd-countdown'), m = Math.floor(left / 60), s = left % 60;
        c.textContent = m + ':' + (s < 10 ? '0' : '') + s;
        if (left <= 60 && left > 0) c.className = 'bd-countdown warning';
        if (left <= 0) { clearInterval(timer); c.className = 'bd-countdown expired'; c.textContent = '0:00'; reveal(); return; }
        left--;
      }
      tick(); timer = setInterval(tick, 1000);
    }

    $('bd-topic-grid').addEventListener('click', function (e) {
      var b = e.target.closest('.bd-topic-btn'); if (!b) return;
      Array.prototype.forEach.call(this.querySelectorAll('.bd-topic-btn'), function (x) { x.classList.remove('selected'); });
      b.classList.add('selected'); topic = b.getAttribute('data-topic'); $('bd-start-btn').disabled = false;
    });
    $('bd-start-btn').addEventListener('click', function () {
      var t = find(topic); if (!t) return;
      $('bd-setup').style.display = 'none';
      $('bd-session').classList.add('active');
      $('bd-active-topic').textContent = t.name;
      $('bd-stem-txt').textContent = t.stem || 'Write everything you remember about this topic…';
      $('bd-textarea').value = ''; $('bd-textarea').disabled = false;
      $('bd-word-count').textContent = '0 words';
      $('bd-reveal').classList.remove('active');
      $('bd-countdown').className = 'bd-countdown';
      startTimer();
      $('bd-textarea').focus();
    });
    $('bd-textarea').addEventListener('input', function () {
      var w = this.value.trim() ? this.value.trim().split(/\s+/).length : 0;
      $('bd-word-count').textContent = w + ' word' + (w !== 1 ? 's' : '');
    });
    $('bd-reset-btn').addEventListener('click', function () {
      clearInterval(timer); topic = null;
      Array.prototype.forEach.call(document.querySelectorAll('#bd-topic-grid .bd-topic-btn'), function (x) { x.classList.remove('selected'); });
      $('bd-start-btn').disabled = true;
      $('bd-session').classList.remove('active');
      $('bd-setup').style.display = '';
    });
  }
  function init() { Array.prototype.forEach.call(document.querySelectorAll('.bd-mount'), mount); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
