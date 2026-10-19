/* visual-sources.js: the Visual Sources tab for every unit, drawn from visual-sources-data.js.
   Mount: <div class="vs-mount" data-unit="N"></div> inside #pg-visual.
   Each image gets a tab. Step 1: answer the AP-style question (instant feedback).
   Step 2: write a HIPP sourcing analysis with
   guiding questions, then reveal the exemplar for each part.
   Site convention: plain global, no build step, no imports. */
(function () {
  'use strict';
  var F = { name: 'HIPP', labels: { h: 'Historical Situation', a: 'Intended Audience', p: 'Purpose', pov: 'Point of View' } };
  var GUIDES = {
    h: ['When and where was this source created?',
        'What major events, conflicts, or tensions were happening at this time?',
        'How does the historical moment explain why this source exists?'],
    a: ['Who was this source originally created for, a mass public, a specific group, or a limited audience?',
        'What details in the source (language, imagery, style) hint at who it was aimed at?',
        'Would the intended audience have agreed with the source’s message?'],
    p: ['Why did the creator make this, to persuade, inform, document, commemorate, or advertise?',
        'What reaction or action did the creator want from the audience?',
        'Who benefits if the source’s message is believed or accepted?'],
    pov: ['Who created this source? What is their background, nationality, class, or position?',
          'How does the creator’s identity shape what they emphasize, downplay, or leave out?',
          'Why should a historian consider this creator’s perspective when evaluating this source?']
  };
  var KEYS = ['h', 'a', 'p', 'pov'];
  function attr(s) { return String(s).replace(/"/g, '&quot;').replace(/<[^>]+>/g, ''); }

  function mount(el) {
    var unit = el.getAttribute('data-unit'), cfg = (window.VISUAL_SOURCES || {})[unit];
    if (!cfg) return;
    var items = cfg.items, P = 'vs' + unit + '-';
    var tabs = '', cards = '';
    items.forEach(function (it, i) {
      tabs += '<button type="button" class="vs-tab' + (i ? '' : ' active') + '" data-vsi="' + i + '">Image ' + it.num + '</button>';
      var img;
      if (it.imgs) {
        img = '<div class="vs-multi-img">' + it.imgs.map(function (src, j) {
          var t = (it.imgTitles && it.imgTitles[j]) || it.title;
          return '<div class="vs-img-wrap"><img src="' + src + '" alt="' + attr(t) + '" class="vs-source-img vs-source-img-multi" loading="lazy" onerror="this.style.display=\'none\'">' +
            (it.imgTitles && it.imgTitles[j] ? '<div class="vs-img-cap">' + it.imgTitles[j] + '</div>' : '') +
            (it.imgSources && it.imgSources[j] ? '<div class="vs-img-src">' + it.imgSources[j] + '</div>' : '') + '</div>';
        }).join('') + '</div>';
      } else {
        img = '<img src="' + it.img + '" alt="' + attr(it.title) + '" class="vs-source-img" loading="lazy" onerror="this.style.display=\'none\'">';
      }
      var opts = it.o.map(function (o, j) {
        return '<button type="button" class="vs-mc-option" data-oi="' + j + '">' + String.fromCharCode(65 + j) + '. ' + o + '</button>';
      }).join('');
      var parts = KEYS.map(function (k) {
        return '<div class="vs-hipp-section"><div class="vs-hipp-lbl">' + F.labels[k] + '</div>' +
          '<ul class="vs-guide">' + GUIDES[k].map(function (g) { return '<li>' + g + '</li>'; }).join('') + '</ul>' +
          '<textarea class="vs-hipp-input" rows="3" aria-label="Your ' + F.labels[k] + ' analysis" placeholder="Write your analysis here…"></textarea>' +
          '<div class="vs-hipp-model"><div class="vs-hipp-model-lbl">Exemplar: ' + F.labels[k] + '</div>' + (it.model[k] || '') + '</div></div>';
      }).join('');
      cards += '<div class="vs-card' + (i ? '' : ' active') + '" id="' + P + i + '">' +
        '<div class="vs-card-src">' + it.source + '</div>' +
        '<div class="vs-card-title">' + it.title + '</div>' + img +
        '<div class="vs-card-desc">' + it.desc + '</div>' +
        '<div class="vs-step-hdr">Step 1: Answer the AP Question</div>' +
        '<div class="vs-mc-q">' + it.q + '</div>' + opts +
        '<div class="vs-mc-explain">' + it.e + '</div>' +
        '<div class="vs-btn-row"><button type="button" class="vs-btn" data-act="analyze">Step 2: ' + F.name + ' Analysis &rarr;</button></div>' +
        '<div class="vs-hipp-area"><div class="vs-step-hdr" style="margin-bottom:12px">Step 2: ' + F.name + ' Analysis</div>' +
          '<p style="font-size:.8rem;color:var(--mid);margin-bottom:16px;line-height:1.6">Write your own ' + F.name +
          ' analysis using the guiding questions, then compare it to the exemplar.</p>' + parts +
          '<div class="vs-btn-row"><button type="button" class="vs-btn vs-btn-red" data-act="compare">Compare to Exemplar &rarr;</button></div></div>' +
      '</div>';
    });
    el.innerHTML = '<div class="vs-panel"><div class="vs-tab-row" id="vs-tabs">' + tabs + '</div><div id="vs-cards">' + cards + '</div></div>';

    el.addEventListener('click', function (e) {
      var tab = e.target.closest('.vs-tab');
      if (tab) {
        Array.prototype.forEach.call(el.querySelectorAll('.vs-tab'), function (t) { t.classList.toggle('active', t === tab); });
        Array.prototype.forEach.call(el.querySelectorAll('.vs-card'), function (c) { c.classList.toggle('active', c.id === P + tab.dataset.vsi); });
        return;
      }
      var card = e.target.closest('.vs-card');
      if (!card) return;
      var it = items[+card.id.slice(P.length)];
      var act = e.target.closest('[data-act]');
      if (act && act.dataset.act === 'analyze') { card.querySelector('.vs-hipp-area').classList.add('show'); act.style.display = 'none'; return; }
      if (act && act.dataset.act === 'compare') {
        Array.prototype.forEach.call(card.querySelectorAll('.vs-hipp-model'), function (m) { m.classList.add('show'); });
        act.style.display = 'none';
        return;
      }
      var opt = e.target.closest('.vs-mc-option');
      if (opt && !opt.disabled) {
        var pick = +opt.dataset.oi;
        Array.prototype.forEach.call(card.querySelectorAll('.vs-mc-option'), function (b, j) {
          b.disabled = true;
          if (j === it.c) b.classList.add('vs-mc-correct'); else if (j === pick) b.classList.add('vs-mc-wrong');
        });
        card.querySelector('.vs-mc-explain').classList.add('show');
      }
    });
  }
  function init() { Array.prototype.forEach.call(document.querySelectorAll('.vs-mount'), mount); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
