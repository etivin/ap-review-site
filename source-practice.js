/* source-practice.js: the Documents tab (sourcing practice) for every unit, drawn from
   source-practice-data.js.
   Mount: <div class="sp-mount" data-unit="N"></div> inside #pg-source.
   Sourcing Practice (every unit): read a document, pick a lens, write a sourcing
   sentence ("since ... therefore ..."), then compare with the model. Optional
   2-minute timer. Units whose data also has `redgreen` / `paraup` get a picker
   with the Red / Green Sort and Paragraph Upgrade drills.
   Element ids (#sa-model, #sa-text, #sa-doc, #rg-cards, #pu-model, #pu-text,
   #pu-para) are watched by activity.js to credit finished drills: keep them.
   Draws as soon as the script runs (the mount is already parsed) so activity.js
   finds those ids when it starts. Site convention: plain global, no imports. */
(function () {
  'use strict';
  var BLANK = 'Since this document was written by <strong>[who / what role]</strong>, it may <strong>[lean a certain way]</strong>, therefore <strong>[what that means for the argument]</strong>.';
  var HINTS = {
    pov: BLANK,
    purpose: 'Because this document was created in order to <strong>[goal]</strong>, its purpose was <strong>[X]</strong>, therefore it <strong>[emphasizes or leaves out]</strong>.',
    situation: 'Since this was written in <strong>[when / amid what events]</strong>, the historical situation is significant because <strong>[how that context shapes it]</strong>.',
    audience: 'Because this was created for <strong>[who]</strong>, the audience is significant because <strong>[how that shapes the content or tone]</strong>.'
  };
  var LENSES = [['pov', 'Point of View'], ['purpose', 'Purpose'], ['situation', 'Historical Situation'], ['audience', 'Intended Audience']];
  var BTN_ROW = 'display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;align-items:center';
  var COUNT = 'font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.7rem;color:var(--muted)';
  function $(id) { return document.getElementById(id); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function back(id) { return '<button type="button" class="src-back-btn" id="' + id + '">&larr; Back to Drills</button>'; }

  function mount(el) {
    var unit = el.getAttribute('data-unit'), cfg = (window.SOURCE_PRACTICE || {})[unit];
    if (!cfg || el.getAttribute('data-mounted')) return;
    el.setAttribute('data-mounted', '1');
    var extras = !!(cfg.redgreen || cfg.paraup);

    var drill =
      '<div id="src-sourcing">' + (extras ? back('sa-back') : '') +
        '<div class="src-doc" id="sa-doc"></div>' +
        '<div class="src-frame">' +
          '<div class="src-frame-lbl">Choose a sourcing lens</div>' +
          '<div class="src-lens-bar" id="sa-lens">' + LENSES.map(function (l) { return '<button type="button" class="src-lens-btn" data-lens="' + l[0] + '">' + l[1] + '</button>'; }).join('') + '</div>' +
          '<div class="src-frame-hint" id="sa-hint">' + BLANK + '</div>' +
          '<div class="src-timer-row"><button type="button" class="src-btn src-btn-outline" id="sa-timer-btn">Start 2-Minute Timer</button><span class="src-timer" id="sa-timer"></span></div>' +
          '<textarea class="src-textarea" id="sa-text" aria-label="Your sourcing sentence" placeholder="Write your sourcing sentence here&hellip;"></textarea>' +
        '</div>' +
        '<div style="' + BTN_ROW + '">' +
          '<button type="button" class="src-btn src-btn-red" id="sa-reveal">Show Model Answer</button>' +
          '<button type="button" class="src-btn src-btn-outline" id="sa-next">Next Document &rarr;</button>' +
          '<span id="sa-count" style="' + COUNT + '"></span>' +
        '</div>' +
        '<div class="src-model" id="sa-model"><div class="src-model-lbl">Model Sourcing Sentence</div><div class="src-model-txt" id="sa-model-txt"></div></div>' +
      '</div>';

    if (!extras) { el.innerHTML = drill; wireSourcing(cfg.docs); return; }

    var cards = [['sourcing', '&#9201;', 'Sourcing Practice', 'One document, one sentence frame. Practice the &ldquo;which means&rdquo; move, with an optional two-minute timer.']];
    if (cfg.redgreen) cards.push(['redgreen', '&#9989;', 'Red / Green Sort', 'Read sourcing sentences and decide: does this earn the point or not? Build your internal standard.']);
    if (cfg.paraup) cards.push(['paraup', '&#128196;', 'Paragraph Upgrade', 'Read a body paragraph missing sourcing. Add one sentence that connects the source to the argument.']);
    var html = '<div id="src-picker" class="src-picker">' + cards.map(function (c) {
      return '<div class="src-pick-card" id="pick-' + c[0] + '" role="button" tabindex="0"><div class="src-pick-icon">' + c[1] + '</div><div class="src-pick-name">' + c[2] + '</div><div class="src-pick-desc">' + c[3] + '</div></div>';
    }).join('') + '</div>';
    html += drill.replace('<div id="src-sourcing">', '<div id="src-sourcing" style="display:none">');
    if (cfg.redgreen) html +=
      '<div id="src-redgreen" style="display:none">' + back('rg-back') +
        '<div class="rg-score" id="rg-score"></div><div id="rg-cards"></div>' +
        '<div style="text-align:center;margin-top:16px"><button type="button" class="src-btn src-btn-outline" id="rg-new-set">New Set &#8635;</button></div>' +
      '</div>';
    if (cfg.paraup) html +=
      '<div id="src-paraup" style="display:none">' + back('pu-back') +
        '<div class="src-doc" id="pu-doc"></div><div class="pu-para" id="pu-para"></div>' +
        '<div class="src-frame"><div class="src-frame-lbl">Add one sourcing sentence to this paragraph</div>' +
          '<textarea class="src-textarea" id="pu-text" aria-label="Your sourcing sentence" placeholder="Write the sentence you would add&hellip;"></textarea></div>' +
        '<div style="' + BTN_ROW + '"><button type="button" class="src-btn src-btn-red" id="pu-reveal">Show Model Upgrade</button>' +
          '<button type="button" class="src-btn src-btn-outline" id="pu-next">Next Paragraph &rarr;</button></div>' +
        '<div class="src-model" id="pu-model"><div class="src-model-lbl">Model Upgrade</div><div class="src-model-txt" id="pu-model-txt"></div></div>' +
      '</div>';
    el.innerHTML = html;

    function open(id) { $('src-picker').style.display = 'none'; $(id).style.display = 'block'; }
    function close(id) { $(id).style.display = 'none'; $('src-picker').style.display = 'grid'; }
    var stopTimer = wireSourcing(cfg.docs);
    cards.forEach(function (c) {
      var card = $('pick-' + c[0]);
      function go() { open('src-' + c[0]); if (c[0] === 'redgreen') renderRG(); if (c[0] === 'paraup') renderPU(); }
      card.addEventListener('click', go);
      card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
    $('sa-back').addEventListener('click', function () { stopTimer(); close('src-sourcing'); });

    /* Red / Green Sort */
    function renderRG() {
      var data = cfg.redgreen, right = 0, done = 0, box = $('rg-cards');
      $('rg-score').textContent = '0 of ' + data.length + ' sorted';
      box.innerHTML = shuffle(data.map(function (_, i) { return i; })).map(function (i) {
        var it = data[i];
        return '<div class="rg-card" data-i="' + i + '"><div class="rg-card-doc">Document: ' + it.doc + '</div>' +
          '<div class="rg-card-txt">&ldquo;' + it.text + '&rdquo;</div>' +
          '<div class="rg-verdict"><button type="button" class="rg-v-btn earns" data-v="1">Earns the Point</button><button type="button" class="rg-v-btn no" data-v="0">Does Not Earn</button></div>' +
          '<div class="rg-explain">' + it.why + '</div></div>';
      }).join('');
      box.onclick = function (e) {
        var b = e.target.closest('.rg-v-btn'); if (!b) return;
        var card = b.closest('.rg-card');
        if (card.classList.contains('correct') || card.classList.contains('wrong')) return;
        var ok = (b.dataset.v === '1') === !!data[+card.dataset.i].earns;
        if (ok) right++;
        done++;
        b.classList.add('picked');
        card.classList.add(ok ? 'correct' : 'wrong');
        card.querySelector('.rg-explain').classList.add('show');
        $('rg-score').textContent = right + ' of ' + done + ' correct' + (done === data.length ? ': all sorted' : '');
      };
    }
    if (cfg.redgreen) {
      $('rg-new-set').addEventListener('click', renderRG);
      $('rg-back').addEventListener('click', function () { close('src-redgreen'); });
    }

    /* Paragraph Upgrade */
    var puOrder = cfg.paraup ? shuffle(cfg.paraup.map(function (_, i) { return i; })) : [], pu = 0;
    function renderPU() {
      var it = cfg.paraup[puOrder[pu % puOrder.length]];
      $('pu-doc').innerHTML = '<div class="src-doc-lbl">Source Document</div><div class="src-doc-src">' + it.doc.sl + '</div><div class="src-doc-txt">' + it.doc.excerpt + '</div>';
      $('pu-para').innerHTML = '<div class="pu-para-lbl">Body Paragraph (no sourcing)</div><div class="pu-para-txt">' + it.paragraph + '</div>';
      $('pu-text').value = '';
      $('pu-model').classList.remove('show');
    }
    if (cfg.paraup) {
      $('pu-reveal').addEventListener('click', function () { $('pu-model-txt').textContent = cfg.paraup[puOrder[pu % puOrder.length]].model; $('pu-model').classList.add('show'); });
      $('pu-next').addEventListener('click', function () { pu++; renderPU(); });
      $('pu-back').addEventListener('click', function () { close('src-paraup'); });
    }
  }

  /* Sourcing Practice: returns a function that stops the timer */
  function wireSourcing(DOCS) {
    var idx = 0, lens = null, timer = null, secs = 120;
    function showTime() { var m = Math.floor(secs / 60), s = secs % 60; $('sa-timer').textContent = secs <= 0 ? 'Time!' : m + ':' + (s < 10 ? '0' : '') + s; }
    function stop() { clearInterval(timer); timer = null; $('sa-timer-btn').textContent = 'Start 2-Minute Timer'; }
    function render() {
      var d = DOCS[idx];
      $('sa-doc').innerHTML = '<div class="src-doc-lbl">' + d.type + '</div><div class="src-doc-src">' + d.sl + '</div>' +
        (d.img ? '<img src="' + d.img + '" alt="' + String(d.type).replace(/"/g, '&quot;') + '" class="src-doc-img" onerror="this.style.display=\'none\'">' : '') +
        (d.excerpt ? '<div class="src-doc-txt">' + String(d.excerpt).replace(/\n/g, '<br>') + '</div>' : '');
      $('sa-text').value = '';
      $('sa-model').classList.remove('show');
      $('sa-model-txt').textContent = '';
      Array.prototype.forEach.call(document.querySelectorAll('#sa-lens .src-lens-btn'), function (b) { b.classList.remove('active'); });
      lens = null;
      $('sa-hint').innerHTML = BLANK;
      $('sa-count').textContent = 'Document ' + (idx + 1) + ' of ' + DOCS.length;
      stop(); secs = 120; $('sa-timer').textContent = '';
    }
    $('sa-lens').addEventListener('click', function (e) {
      var b = e.target.closest('.src-lens-btn'); if (!b) return;
      Array.prototype.forEach.call(this.querySelectorAll('.src-lens-btn'), function (x) { x.classList.toggle('active', x === b); });
      lens = b.dataset.lens; $('sa-hint').innerHTML = HINTS[lens];
    });
    $('sa-reveal').addEventListener('click', function () {
      if (!lens) {
        lens = 'pov';
        Array.prototype.forEach.call(document.querySelectorAll('#sa-lens .src-lens-btn'), function (x) { x.classList.toggle('active', x.dataset.lens === 'pov'); });
        $('sa-hint').innerHTML = HINTS.pov;
      }
      stop();
      $('sa-model-txt').textContent = DOCS[idx].models[lens] || DOCS[idx].models.pov;
      $('sa-model').classList.add('show');
    });
    $('sa-next').addEventListener('click', function () { idx = (idx + 1) % DOCS.length; render(); });
    $('sa-timer-btn').addEventListener('click', function () {
      if (timer) { stop(); return; }
      if (secs <= 0) secs = 120;
      this.textContent = 'Pause Timer'; showTime();
      timer = setInterval(function () { secs--; showTime(); if (secs <= 0) stop(); }, 1000);
    });
    render();
    return stop;
  }

  function init() { Array.prototype.forEach.call(document.querySelectorAll('.sp-mount'), mount); }
  init();   // mounts are parsed before this script (end of body)
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
})();
