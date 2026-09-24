/* search.js — site-wide "find a resource" search.
   Adds a Search button to the top bar (#mc-bar on unit/tool pages, .bar on the
   dashboard/maps/games) and opens a quick-find panel. Shortcuts: "/" or Ctrl+K.
   The index is hand-built below: add a line to PAGES (or a tab to TABS) when a
   new resource ships. Unit tabs deep-link via unitN.html#pg-xxx. */
(function () {
  var UNITS = [
    null,
    { name: 'The Global Tapestry', dates: 'c. 1200–1450', tabs: 'guide tips mcq writing flash brain spice games',
      kw: 'song china neo-confucianism dar al-islam abbasid delhi sultanate mali great zimbabwe aztec inca mexica feudalism europe japan vijayanagara khmer' },
    { name: 'Networks of Exchange', dates: 'c. 1200–1450', tabs: 'guide tips mcq walk writing source visual maps flash brain spice games',
      kw: 'silk road indian ocean trans-saharan mongols genghis khan ibn battuta marco polo zheng he monsoon caravan swahili malacca black death' },
    { name: 'Land-Based Empires', dates: 'c. 1450–1750', tabs: 'guide tips mcq walk writing source visual maps flash brain spice games',
      kw: 'gunpowder empires ottoman safavid mughal qing tokugawa russia devshirme janissaries akbar legitimize consolidate' },
    { name: 'Transoceanic Interconnections', dates: 'c. 1450–1750', tabs: 'guide tips mcq walk writing source visual maps flash brain spice games',
      kw: 'columbian exchange exploration portugal spain encomienda hacienda mita atlantic slave trade joint-stock companies caravel mercantilism' },
    { name: 'Revolutions', dates: 'c. 1750–1900', tabs: 'guide tips mcq walk writing source visual flash brain spice games',
      kw: 'enlightenment american french haitian latin american revolution nationalism industrial revolution steam capitalism socialism marx' },
    { name: 'Consequences of Industrialization', dates: 'c. 1750–1900', tabs: 'guide tips mcq walk writing source visual flash brain spice games',
      kw: 'imperialism scramble for africa berlin conference opium wars meiji japan migration indentured labor social darwinism sepoy' },
    { name: 'Global Conflict', dates: 'c. 1900–present', tabs: 'guide tips mcq walk write source visual flash brain spice games slides progress',
      kw: 'world war i world war ii ww1 ww2 great depression fascism holocaust genocide total war russian revolution mexican revolution' },
    { name: 'Cold War & Decolonization', dates: 'c. 1900–present', tabs: 'guide tips mcq walk writing source visual maps flash brain spice games',
      kw: 'cold war decolonization containment nato warsaw pact non-aligned movement india gandhi mao proxy wars korea vietnam apartheid' },
    { name: 'Globalization', dates: 'c. 1900–present', tabs: 'guide tips web writing brain spice games',
      kw: 'globalization technology green revolution climate change free market un human rights feminism wto nafta pop culture' }
  ];

  var TABS = {
    guide:    ['Study Guide', 'The whole unit, organized by topic.', 'study guide notes review read summary outline'],
    tips:     ['Exam Tips', 'Rubric tips, HIPP sourcing, and complexity reminders.', 'exam tips hipp sourcing complexity rubric test'],
    mcq:      ['MCQ Practice', 'Stimulus-based multiple choice questions.', 'mcq multiple choice questions practice quiz test'],
    walk:     ['MCQ Walkthrough', 'How to attack a stimulus MCQ, step by step.', 'mcq walkthrough how to multiple choice strategy'],
    web:      ['Web Review', 'Connect the big ideas of the unit.', 'web review practice connections'],
    writing:  ['Writing Drills', 'SAQ, LEQ, and DBQ practice prompts.', 'writing drills saq leq dbq essay thesis practice prompts'],
    write:    ['Writing Practice', 'SAQ, LEQ, and DBQ practice prompts.', 'writing saq leq dbq essay thesis practice prompts'],
    source:   ['Documents', 'Primary sources to read and source.', 'documents primary sources hipp dbq reading'],
    visual:   ['Visual Sources', 'Images, cartoons, and charts to analyze.', 'visual sources images cartoons charts art'],
    maps:     ['Maps', 'Interactive maps for this unit.', 'maps geography map'],
    flash:    ['Flashcards', 'Key terms with spaced review.', 'flashcards terms vocab vocabulary cards spaced review memorize'],
    brain:    ['Brain Dump', 'Write everything you remember, then check it.', 'brain dump recall retrieval review'],
    spice:    ['SPICE-T', 'Sort the unit by Social, Political, Interactions, Culture, Economic, Tech.', 'spice spice-t themes social political economic culture'],
    games:    ['Games', 'Review games for this unit.', 'games review fun play interrogate minesweeper'],
    slides:   ['Slides', 'Class slides for this unit.', 'slides powerpoint notes lecture'],
    progress: ['Progress', 'Track what you have mastered.', 'progress tracker mastery']
  };

  // [title, url, description, keywords, type]
  var PAGES = [
    ['Mission Control', 'mission-control.html', 'The dashboard: news, your streak, and every unit.', 'home dashboard main start', 'Page'],
    ['All Units', 'mission-control.html#units', 'Jump to any of the nine units.', 'units list roadmap', 'Page'],
    ['How to Write the Essays', 'writing-guide.html', 'Every rubric point for the SAQ, LEQ, and DBQ.', 'writing guide essay saq leq dbq rubric how to write', 'Writing'],
    ['HIPP Sourcing', 'writing-guide.html#hipp', 'Historical situation, Intended audience, Point of view, Purpose.', 'hipp sourcing sourcing documents historical situation intended audience point of view purpose pov dbq', 'Writing'],
    ['Writing a Thesis', 'writing-guide.html#thesis', 'How to build a defensible claim with a line of reasoning.', 'thesis claim argument line of reasoning', 'Writing'],
    ['SAQ: Short Answer', 'writing-guide.html#saq', 'The ACE method for short answer questions.', 'saq short answer ace', 'Writing'],
    ['LEQ: Long Essay', 'writing-guide.html#leq', 'How to write the long essay question.', 'leq long essay', 'Writing'],
    ['DBQ: Document-Based Question', 'writing-guide.html#dbq', 'How to write the DBQ, point by point.', 'dbq document based question essay', 'Writing'],
    ['Using the Documents (DBQ)', 'writing-guide.html#using-docs', 'Turning documents into evidence for your argument.', 'dbq documents evidence using docs', 'Writing'],
    ['Outside Evidence (DBQ)', 'writing-guide.html#outside', 'Earning the evidence-beyond-the-documents point.', 'outside evidence dbq beyond the documents', 'Writing'],
    ['Grouping Documents', 'writing-guide.html#grouping', 'Group documents to build body paragraphs.', 'grouping documents dbq', 'Writing'],
    ['Task Verbs', 'writing-guide.html#verbs', 'Identify, describe, explain, and what each one wants.', 'task verbs identify describe explain compare', 'Writing'],
    ['Essay Timing', 'writing-guide.html#timing', 'How to spend your time on exam day.', 'timing time exam pacing', 'Writing'],
    ['How to Attack a Stimulus MCQ', 'sbmcq.html', 'A step-by-step method for stimulus multiple choice.', 'mcq multiple choice stimulus strategy how to', 'How to'],
    ['How to Study (Brain Sculptor)', 'brain-sculptor.html', 'Study smarter: retrieval, spacing, and owning your learning.', 'how to study study skills learning brain sculptor retrieval spacing', 'How to'],
    ['Study Timer', 'timer.html', 'A pomodoro countdown for focused study.', 'timer pomodoro focus countdown clock', 'Tool'],
    ['AP Review Resources', 'resources.html', 'Outside review videos, sites, and practice.', 'resources review videos links heimler outside', 'Review'],
    ['Cumulative Review', 'cumulative.html', 'Mixed MCQ practice from every unit.', 'cumulative review all units mixed mcq final exam ap exam', 'Review'],
    ['Full Course Narrative', 'fullcourse.html', 'The whole course as one story, with fill-in-the-blank review.', 'narrative full course story review overview whole course', 'Review'],
    ['Trade Route Map', 'unit2-map.html', 'Silk Road, Indian Ocean, and Trans-Saharan routes.', 'map trade routes silk road indian ocean trans-saharan unit 2', 'Map'],
    ['Land Empires Map', 'unit3-map.html', 'Ottoman, Safavid, Mughal, Qing, and more.', 'map land empires gunpowder ottoman safavid mughal unit 3', 'Map'],
    ['Exploration & Trade Map', 'unit4-map.html', 'Voyages of exploration and Atlantic trade.', 'map exploration voyages atlantic columbian exchange unit 4', 'Map'],
    ['Hex Web (Unit 2)', 'unit2-hexweb.html', 'Connect Unit 2 terms with hexagonal thinking.', 'hex web hexagonal thinking game connections unit 2', 'Game']
  ];

  var INDEX = [];
  PAGES.forEach(function (p) {
    INDEX.push({ t: p[0], u: p[1], d: p[2], k: p[3], type: p[4] });
  });
  for (var n = 1; n <= 9; n++) {
    var U = UNITS[n], tag = 'unit ' + n + ' u' + n + ' unit' + n;
    INDEX.push({ t: 'Unit ' + n + ': ' + U.name, u: 'unit' + n + '.html', d: U.dates + ' · unit home', k: tag + ' ' + U.name + ' ' + U.kw, type: 'Unit', unit: n });
    U.tabs.split(' ').forEach(function (id) {
      var T = TABS[id];
      INDEX.push({ t: 'Unit ' + n + ' ' + T[0], u: 'unit' + n + '.html#pg-' + id, d: T[1], k: tag + ' ' + T[2], type: 'Unit ' + n, unit: n, sub: 1 });
    });
    INDEX.push({ t: 'Unit ' + n + ' Interrogate', u: 'unit' + n + '-interrogate.html', d: 'Fact / Myth Minesweeper review game.', k: tag + ' interrogate minesweeper fact myth game games', type: 'Game', unit: n, sub: 1 });
  }
  INDEX.forEach(function (e) { e.hay = [e.t, e.k, e.d].join(' ').toLowerCase(); e.tl = e.t.toLowerCase(); });

  var SUGGEST = ['HIPP Sourcing', 'DBQ: Document-Based Question', 'Cumulative Review', 'Study Timer', 'How to Study (Brain Sculptor)', 'All Units'];

  function tokens(q) {
    q = q.toLowerCase().replace(/\bunit\s*(\d)\b/g, 'u$1').replace(/[^a-z0-9\s-]/g, ' ');
    return q.split(/\s+/).filter(Boolean);
  }
  function search(q) {
    var toks = tokens(q);
    if (!toks.length) return SUGGEST.map(function (t) { return INDEX.filter(function (e) { return e.t === t; })[0]; }).filter(Boolean);
    var unitTok = null;
    toks = toks.filter(function (t) { var m = /^u(\d)$/.exec(t); if (m) { unitTok = +m[1]; return false; } return true; });
    var out = [];
    INDEX.forEach(function (e) {
      if (unitTok && e.unit !== unitTok) return;
      var s = 0;
      for (var i = 0; i < toks.length; i++) {
        var t = toks[i], wordRe = new RegExp('(^|[^a-z0-9])' + t.replace(/-/g, '\\-'));
        if (e.tl.indexOf(t) === 0) s += 12;
        else if (wordRe.test(e.tl)) s += 9;
        else if (wordRe.test(e.hay)) s += 4;
        else if (t.length > 2 && e.hay.indexOf(t) > -1) s += 1;
        else return; // every word must match somewhere
      }
      if (!toks.length) s = 5;
      if (!e.sub) s += 2;           // prefer whole pages over unit sub-tabs
      if (e.unit && !unitTok) s -= 0.5;
      out.push({ e: e, s: s });
    });
    out.sort(function (a, b) { return b.s - a.s || (a.e.unit || 0) - (b.e.unit || 0); });
    return out.slice(0, 12).map(function (r) { return r.e; });
  }

  var CSS =
    '.ss-btn{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.45);' +
      'font:700 .72rem/1 "Lato",system-ui,sans-serif!important;letter-spacing:.07em;text-transform:uppercase;padding:7px 10px;cursor:pointer;white-space:nowrap;border-radius:3px}' +
    '.ss-btn:hover,.ss-btn:focus-visible{border-color:#f4cd4f;color:#f4cd4f;outline:none}' +
    '.ss-btn svg{width:14px;height:14px;flex-shrink:0}' +
    '.ss-btn kbd{font:700 .64rem/1 "Lato",system-ui,sans-serif!important;border:1px solid rgba(255,255,255,.4);border-radius:3px;padding:2px 5px;opacity:.8}' +
    '#ss-ov{position:fixed;inset:0;z-index:3000;background:rgba(10,16,40,.62);display:none;align-items:flex-start;justify-content:center;padding:12vh 16px 16px}' +
    '#ss-ov.open{display:flex}' +
    '#ss-card{width:100%;max-width:620px;background:#fff;color:#16244d;border:2px solid #16244d;box-shadow:8px 8px 0 #f4cd4f;display:flex;flex-direction:column;max-height:76vh}' +
    '#ss-top{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:2px solid #16244d}' +
    '#ss-top svg{width:20px;height:20px;flex-shrink:0;color:#345fbf}' +
    '#ss-in{flex:1;min-width:0;border:none;outline:none;background:transparent;color:#16244d;font:600 1.08rem "Lato",system-ui,sans-serif!important}' +
    '#ss-in::placeholder{color:#7b86a6}' +
    '#ss-x{border:none;background:none;color:#7b86a6;font:700 .68rem "Lato",sans-serif!important;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;padding:4px}' +
    '#ss-lbl{padding:10px 16px 4px;font:800 .6rem "Lato",sans-serif!important;letter-spacing:.14em;text-transform:uppercase;color:#7b86a6}' +
    '#ss-list{list-style:none;margin:0;padding:4px 8px 10px;overflow-y:auto;overflow-x:hidden}' +
    '#ss-list a{display:flex;align-items:center;gap:12px;padding:10px 10px;text-decoration:none;color:inherit;border-radius:4px}' +
    '#ss-list a.on{background:#16244d;color:#fff}' +
    '#ss-list .ss-t{font:800 .95rem/1.2 "Lato",sans-serif!important;display:block}' +
    '#ss-list .ss-d{font:400 .8rem/1.3 "Lato",sans-serif!important;opacity:.72;display:block;margin-top:2px}' +
    '#ss-list .ss-type{margin-left:auto;flex-shrink:0;font:800 .58rem "Lato",sans-serif!important;letter-spacing:.1em;text-transform:uppercase;background:#f4cd4f;color:#16244d;padding:4px 7px;border-radius:3px}' +
    '#ss-list mark{background:#f4cd4f55;color:inherit;padding:0 1px}' +
    '#ss-list a.on mark{background:#f4cd4f;color:#16244d}' +
    '#ss-empty{padding:18px 16px 22px;font:400 .9rem "Lato",sans-serif!important;color:#55607f}' +
    '#ss-foot{border-top:1px solid #d6dbe8;padding:8px 16px;font:400 .72rem "Lato",sans-serif!important;color:#7b86a6;display:flex;gap:14px}' +
    // phones: the top bars overflow, so float the button bottom-right instead
    '@media(max-width:620px){.ss-btn .ss-lbl,.ss-btn kbd{display:none}' +
      '.ss-btn{position:fixed;right:16px;bottom:16px;z-index:2500;width:54px;height:54px;padding:0;justify-content:center;border-radius:50%;' +
      'background:#16244d;color:#f4cd4f;border:2px solid #f4cd4f;box-shadow:0 6px 18px rgba(0,0,0,.35)}' +
      '.ss-btn svg{width:22px;height:22px}#ss-ov{padding-top:8vh}#ss-foot{display:none}}' +
    '@media(prefers-color-scheme:dark){#ss-card{background:#0f1834;color:#fff;border-color:#f4cd4f}#ss-in{color:#fff}#ss-top{border-color:#f4cd4f}' +
      '#ss-list a.on{background:#345fbf}#ss-foot{border-color:#26335e}#ss-empty{color:#b8c0d8}}';

  var ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>';
  var ov, inp, list, lbl, results = [], sel = 0;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function hl(text, q) {
    var h = esc(text), toks = tokens(q).filter(function (t) { return !/^u\d$/.test(t) && t.length > 1; });
    toks.forEach(function (t) { h = h.replace(new RegExp('(' + t.replace(/[-]/g, '\\-') + ')', 'ig'), '<mark>$1</mark>'); });
    return h;
  }
  function render() {
    var q = inp.value.trim();
    results = search(q);
    sel = 0;
    lbl.textContent = q ? (results.length ? 'Results' : '') : 'Popular';
    if (!results.length) {
      list.innerHTML = '<li id="ss-empty">No matches for “' + esc(q) + '”. Try a unit number, a skill (DBQ, HIPP, thesis), or a tool (flashcards, MCQ, timer).</li>';
      return;
    }
    list.innerHTML = results.map(function (e, i) {
      return '<li><a href="' + esc(e.u) + '" data-i="' + i + '"' + (i === 0 ? ' class="on"' : '') + '>' +
        '<span><span class="ss-t">' + hl(e.t, q) + '</span><span class="ss-d">' + esc(e.d) + '</span></span>' +
        '<span class="ss-type">' + esc(e.type) + '</span></a></li>';
    }).join('');
  }
  function move(d) {
    var as = list.querySelectorAll('a'); if (!as.length) return;
    as[sel].classList.remove('on');
    sel = (sel + d + as.length) % as.length;
    as[sel].classList.add('on');
    as[sel].scrollIntoView({ block: 'nearest' });
  }
  function go(e) {
    close();
    var here = location.pathname.split('/').pop() || 'index.html', parts = e.u.split('#');
    // same page + hash: hashchange handlers (unit tabs) take it from here
    if (parts[0] === here && parts[1]) { if (location.hash === '#' + parts[1]) location.hash = ''; location.hash = parts[1]; }
    else location.href = e.u;
  }
  function open() {
    build();
    ov.classList.add('open');
    inp.value = '';
    render();
    inp.focus();
  }
  function close() { if (ov) ov.classList.remove('open'); }

  function build() {
    if (ov) return;
    ov = document.createElement('div'); ov.id = 'ss-ov';
    ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Search the site');
    ov.innerHTML =
      '<div id="ss-card">' +
        '<div id="ss-top">' + ICON + '<input id="ss-in" type="search" autocomplete="off" spellcheck="false" placeholder="Search: HIPP, DBQ, flashcards, Unit 3…" aria-label="Search the site"/>' +
        '<button id="ss-x" type="button">Esc</button></div>' +
        '<div id="ss-lbl"></div><ul id="ss-list" role="listbox"></ul>' +
        '<div id="ss-foot"><span>↑ ↓ to move</span><span>Enter to open</span><span>Esc to close</span></div>' +
      '</div>';
    document.body.appendChild(ov);
    inp = ov.querySelector('#ss-in'); list = ov.querySelector('#ss-list'); lbl = ov.querySelector('#ss-lbl');
    inp.addEventListener('input', render);
    inp.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowDown') { ev.preventDefault(); move(1); }
      else if (ev.key === 'ArrowUp') { ev.preventDefault(); move(-1); }
      else if (ev.key === 'Enter') { ev.preventDefault(); if (results[sel]) go(results[sel]); }
    });
    list.addEventListener('click', function (ev) {
      var a = ev.target.closest('a'); if (!a) return;
      ev.preventDefault(); go(results[+a.dataset.i]);
    });
    list.addEventListener('mousemove', function (ev) {
      var a = ev.target.closest('a'); if (!a || +a.dataset.i === sel) return;
      move(+a.dataset.i - sel);
    });
    ov.addEventListener('click', function (ev) { if (ev.target === ov) close(); });
    ov.querySelector('#ss-x').addEventListener('click', close);
  }

  function makeBtn() {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'ss-btn'; b.setAttribute('aria-label', 'Search the site');
    b.innerHTML = ICON + '<span class="ss-lbl">Search</span><kbd>/</kbd>';
    b.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); open(); });
    return b;
  }
  function mount() {
    var st = document.createElement('style'); st.id = 'ss-css'; st.textContent = CSS;
    document.head.appendChild(st);
    // the #mc-bar strip is injected by mc-mode.js after load, so retry briefly
    var tries = 0;
    (function place() {
      if (document.querySelector('.ss-btn')) return;
      var nav = document.querySelector('#mc-bar nav') || document.querySelector('.bar nav') || document.querySelector('.bar');
      if (nav) { nav.appendChild(makeBtn()); return; }
      if (tries++ < 12) setTimeout(place, 80);
    })();
    document.addEventListener('keydown', function (ev) {
      var t = ev.target, typing = t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
      if ((ev.ctrlKey || ev.metaKey) && (ev.key === 'k' || ev.key === 'K')) { ev.preventDefault(); open(); }
      else if (ev.key === '/' && !typing) { ev.preventDefault(); open(); }
      else if (ev.key === 'Escape' && ov && ov.classList.contains('open')) close();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
