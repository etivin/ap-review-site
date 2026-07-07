/* ============================================================
   Portable Writing Skill-Drills module  (writing-drills.js)
   ------------------------------------------------------------
   Drops into any unit page. Renders a full set of AP writing
   skill drills into every element with class "wd-mount".

   The three rows the group loses the most points on —
   Complexity, LEQ Analysis & Reasoning (Row D), and SAQ Part C —
   use honest SELF-CHECK coaching (a self-scored checklist + model
   comparison + sentence frames), because a keyword scanner cannot
   judge real reasoning. Thesis / Contextualization / Evidence /
   Sourcing keep lightweight keyword feedback, where structural
   signals are valid.

   Prompts here are generic and topic-agnostic so they are valid
   for ANY unit as-is. To tailor a unit, set window.WRITING_DRILLS
   _CONFIG before this script loads (see swapPrompt notes) — the
   framework and the transferable skill coaching stay identical.
   ============================================================ */
(function () {
  'use strict';

  function contains(t, arr) {
    for (var i = 0; i < arr.length; i++) { if (t.indexOf(arr[i]) !== -1) return true; }
    return false;
  }
  function wc(t) { return t.split(/\s+/).filter(Boolean).length; }

  /* ---- Self-check specs for the analytical rows ---- */
  var SELF_CHECK = {
    complexity: {
      subtitle: 'This point rewards genuine complex reasoning &mdash; a keyword scanner can’t judge that. Score it yourself against the checklist, then compare to the models.',
      checklist: [
        'I did more than name a second side &mdash; I <em>developed</em> it with specific evidence.',
        'The nuance runs through my argument; it is not a lone &ldquo;it was complicated&rdquo; sentence.',
        'I made ONE clear move: qualified my claim, OR corroborated across regions/periods, OR explained how multiple factors interacted.',
        'A reader could point to the exact sentences where the complexity happens.'
      ],
      frames: [
        'Although [main cause] drove [outcome], [specific evidence] shows that [other factor] also shaped it&hellip;',
        'This mirrors [other region/period], where [specific parallel] &mdash; revealing a broader pattern of&hellip;',
        'Yet [main development] ultimately undermined [its own goal], because&hellip;'
      ],
      hint: { min: 30, short: 'Complexity needs room to develop &mdash; weave a few sentences into the argument, not a tacked-on phrase.',
        moves: [
          { name: 'a qualifying word', kw: ['however', 'although', 'even though', 'nevertheless', 'on the other hand', 'despite', 'nonetheless', 'while some', 'while others', 'not solely'] },
          { name: 'a cross-region/period connection', kw: ['compare', 'comparison', 'similarly', 'in contrast', 'unlike', 'elsewhere', 'other regions', 'meanwhile', 'across'] },
          { name: 'multi-causal language', kw: ['multiple', 'also political', 'also economic', 'also religious', 'not only', 'several factors', 'various'] }
        ],
        some: 'Good raw material &mdash; but only you can tell whether it does real analytical work. Use the checklist.',
        noneName: 'obvious complexity moves (qualify / compare / multi-cause)',
        none: 'Not necessarily a miss &mdash; but a sign you may need one clear move. Try a frame below.' }
    },
    'leq-reasoning': {
      subtitle: 'Row D has two halves that both require judgment a scanner lacks: using a reasoning skill to STRUCTURE the argument, and demonstrating COMPLEXITY. Score each half yourself, then compare to the models.',
      checklist: [
        '<strong>Reasoning (1 pt):</strong> one skill &mdash; comparison, causation, or continuity &amp; change &mdash; actually <em>structures</em> my argument (not a stray transition word).',
        '<strong>Reasoning (1 pt):</strong> my body paragraphs are organized around that skill, not a random list of facts.',
        '<strong>Complexity (1 pt):</strong> I qualified, corroborated, or modified my argument with specific evidence.',
        '<strong>Complexity (1 pt):</strong> that nuance is developed and sustained, not a single closing sentence.'
      ],
      frames: [
        'Causation: [development] happened BECAUSE [cause], which led to&hellip;',
        'CCOT: Early in the period [X]; by [later date] this had shifted to [Y], showing&hellip;',
        'Comparison: Whereas [A] [approach], [B] [contrasting approach], revealing&hellip;',
        'Complexity: Although [main claim], [counter-evidence] shows the picture was more complex because&hellip;'
      ],
      hint: { min: 60, short: 'Row D is judged across the whole essay &mdash; a short paragraph can’t show a reasoning skill structuring the argument.',
        moves: [
          { name: 'causation', kw: ['because', 'caused', 'led to', 'resulted in', 'as a result', 'triggered', 'consequence'] },
          { name: 'continuity &amp; change', kw: ['changed', 'continued', 'remained', 'over time', 'by the end', 'shifted', 'persisted', 'evolved'] },
          { name: 'comparison', kw: ['similarly', 'in contrast', 'unlike', 'compared to', 'whereas', 'both', 'on the other hand'] },
          { name: 'a complexity move', kw: ['however', 'although', 'qualify', 'nuance', 'exception', 'yet'] }
        ],
        some: 'You use reasoning language &mdash; but only you can tell whether it <em>structures</em> the argument and whether the complexity is developed. Use the checklist.',
        noneName: 'a reasoning skill or complexity move',
        none: 'Row D needs a reasoning skill framing the essay plus developed nuance. Build your paragraphs around a frame below.' }
    },
    'saq-c': {
      subtitle: 'Part C asks you to EXPLAIN, not identify. A scanner sees the right nouns but can’t tell whether you explained a real mechanism. Check yourself, then compare to the models.',
      checklist: [
        'I named a specific development, action, or event &mdash; not just a vague trend or feeling.',
        'I explained the MECHANISM &mdash; <em>how</em> it produced the outcome &mdash; with causal language.',
        'My answer would make sense to someone who never saw the source.',
        'I answered the exact task the prompt asked, not a nearby fact.'
      ],
      frames: [
        '[Specific development] led to [outcome] because&hellip;',
        'This directly caused [result] when&hellip;',
        'As a result of [action], [consequence], which&hellip;'
      ],
      hint: { min: 20, short: 'Part C is usually 2&ndash;3 sentences &mdash; you need room to explain a mechanism, not just name one.',
        moves: [
          { name: 'causal language', kw: ['because', 'as a result', 'therefore', 'this led', 'which caused', 'resulted in', 'led to', 'contributed to', 'triggered'] }
        ],
        some: 'You use causal language &mdash; but a scanner can’t confirm the explanation actually connects a specific cause to the outcome. Use the checklist.',
        noneName: 'causal language linking a cause to an effect',
        none: 'Part C rewards an explained mechanism. Name a specific development and connect it to the outcome with a frame below.' }
    }
  };

  /* ---- Topic-agnostic model examples ---- */
  var MODELS = {
    complexity: {
      good: [
        'Qualify: &ldquo;Although long-distance trade spread religions, it also spread technologies and disease &mdash; so its impact cannot be reduced to a single sphere of life.&rdquo; The nuance is developed with specific effects, not just asserted.',
        'Corroborate across regions: &ldquo;Just as the Mongols reopened Silk Road exchange, maritime states like the Swahili coast intensified Indian Ocean trade &mdash; revealing a shared, connected pattern rather than isolated cases.&rdquo;'
      ],
      bad: [
        'Does NOT earn: &ldquo;Overall, this was a complicated topic with many sides.&rdquo; &mdash; asserts complexity without developing it.',
        'Does NOT earn: naming a second factor in the final sentence and never using it in the argument.'
      ]
    },
    'leq-reasoning': {
      good: [
        'Reasoning (CCOT): building the whole essay around how a development rose in one era and receded in the next, using that arc to organize every body paragraph &mdash; not just one transition word.',
        'Complexity (qualify): &ldquo;Even the strongest cases had limits &mdash; [specific counter-example] &mdash; qualifying the claim that the change was total.&rdquo; developed with evidence.'
      ],
      bad: [
        'Does NOT earn reasoning: one paragraph on A, one on B, with nothing tying them together &mdash; a list, not a comparison/causation/CCOT argument.',
        'Does NOT earn complexity: &ldquo;It was complex and varied.&rdquo; with no specific evidence behind it.'
      ]
    },
    'saq-c': {
      good: [
        '&ldquo;[Specific development] led to [outcome] because it [mechanism] &mdash; e.g. it redirected trade, displaced a group, or forced a new policy.&rdquo; A clear cause connected to a clear effect.',
        'Explains a mechanism a reader could follow without the source: names the action, then the consequence, then why it followed.'
      ],
      bad: [
        'Does NOT earn: &ldquo;People were unhappy about it.&rdquo; &mdash; a feeling, not an explained mechanism.',
        'Does NOT earn: restating the source or identifying a fact without explaining how it caused the outcome the prompt asks about.'
      ]
    }
  };

  /* ---- Drill definitions ---- */
  var DRILLS = [
    { key: 'thesis', label: 'Thesis', mode: 'keyword',
      rubric: ['Makes a <strong>historically defensible claim</strong> &mdash; does not merely restate the prompt', 'Establishes a <strong>line of reasoning</strong> (a reason, or analytic categories)', 'Use an evaluative adverb: <em>significantly, primarily, largely, to a great/limited extent</em>', 'May appear in the intro OR conclusion'],
      prompt: 'Evaluate the extent to which a development in this unit changed the societies it touched.',
      placeholder: 'Write your thesis here (1–3 sentences)…' },
    { key: 'context', label: 'Contextualization', mode: 'keyword',
      rubric: ['<strong>Describes</strong> a broader context &mdash; more than a phrase or one sentence', 'Relates to developments <strong>before, during, or after</strong> the prompt’s time frame', 'Must be <strong>relevant</strong> and <strong>elaborated</strong>, connecting the context to the topic'],
      prompt: 'Set up the broader historical situation before the development your essay analyzes.',
      placeholder: 'Write 2–4 sentences of relevant context…' },
    { key: 'evidence', label: 'Evidence', mode: 'keyword',
      rubric: ['<strong>1 pt:</strong> at least <strong>two specific</strong> examples relevant to the prompt', '<strong>2 pts:</strong> use those examples to <strong>support an argument</strong> &mdash; each connects to a claim', 'Evidence must be specific (names, dates, events) and <strong>described AND explained</strong>'],
      prompt: 'Write an evidence paragraph using two specific examples to support a claim.',
      placeholder: 'Write an evidence paragraph with 2+ specific examples…' },
    { key: 'happ', label: 'Sourcing / HAPP', mode: 'keyword',
      rubric: ['For <strong>2+ documents</strong>, explain how <strong>H</strong>istorical situation, <strong>A</strong>udience, <strong>P</strong>urpose, or <strong>P</strong>oint of View is relevant to an argument', 'Must <strong>explain HOW/WHY</strong> using a &ldquo;which means&hellip;&rdquo; move &mdash; not just identify', 'The sourcing must connect to your <strong>argument</strong>, not just exist'],
      prompt: 'Take any two sources you know and source them: identify a HAPP feature and explain why it matters.',
      placeholder: 'Doc 1: … which means … / Doc 2: … which means …' },
    { key: 'complexity', label: 'Complexity', mode: 'self',
      rubric: ['<strong>Qualify or modify</strong> your argument &mdash; nuance, exceptions, counterevidence', 'Analyze <strong>multiple causes/effects</strong> or diverse perspectives', 'Make <strong>insightful connections across time or geography</strong>, tied to your argument', 'Must be part of the <strong>argument</strong>, not a closing phrase'],
      prompt: 'Evaluate the extent to which a development in this unit changed the societies it touched.',
      placeholder: 'Write your complexity statement here (3–6 sentences)…' },
    { key: 'leq-reasoning', label: 'LEQ Reasoning', mode: 'self',
      rubric: ['<strong>1 pt &mdash; Reasoning:</strong> use comparison, causation, or continuity &amp; change to <strong>frame/structure</strong> the argument', '<strong>1 pt &mdash; Complexity:</strong> demonstrate a <strong>complex understanding</strong>, sustained with evidence', 'This is the lowest-scoring LEQ row on the exam &mdash; worth deliberate practice', 'Neither half can be honestly auto-graded, so this drill coaches you to <strong>self-assess</strong>'],
      prompt: 'Evaluate the extent to which a development in this unit changed the societies it touched.',
      placeholder: 'Write a body paragraph or two that uses a reasoning skill to structure the argument and pushes toward complexity…' },
    { key: 'saq-c', label: 'SAQ Part C', mode: 'self',
      rubric: ['<strong>Part C explains</strong> &mdash; usually 2–3 sentences', 'Name a <strong>specific</strong> development and explain the <strong>mechanism</strong> that produced the outcome', 'Use causal language and make the explanation stand on its own'],
      prompt: 'Explain how one development in this unit led to a specific later outcome.',
      placeholder: 'Explain a specific cause-and-effect mechanism (2–3 sentences)…' }
  ];

  /* ---- Keyword checkers for the non-analytical rows ---- */
  function checkKeyword(key, t, words) {
    if (key === 'thesis') {
      var ev = contains(t, ['significant', 'primarily', 'largely', 'fundamentally', 'to a great extent', 'to a limited extent', 'while', 'although', 'however', 'more than', 'greater', 'not solely']);
      var reason = contains(t, ['because', 'as seen', 'such as', 'through', 'in order to', 'by', 'demonstrated by', 'evidenced by']);
      if (words < 8) return res('fail', 'Too short', 'Write at least one full sentence making a claim about the prompt.');
      if (ev && reason) return res('pass', 'Thesis — likely earns the point', 'You have evaluative language and a line of reasoning. On the exam, make sure the claim is defensible and not a restatement of the prompt.');
      if (ev) return res('partial', 'Add a line of reasoning', 'You have evaluative language, but add a reason or analytic categories — a “because…” clause or the grounds for your claim.');
      return res('fail', 'Needs evaluative language', 'Add an evaluative adverb (significantly, primarily, largely, to a great/limited extent) and a reason, so the thesis argues rather than restates.');
    }
    if (key === 'context') {
      if (words < 15) return res('fail', 'Too brief', 'Contextualization must be more than a phrase — write 2–4 sentences describing a broader development and connect it to the prompt.');
      if (words >= 35) return res('pass', 'Enough to earn — check relevance', 'You have real elaboration. Make sure the context is specifically relevant to the prompt topic and explicitly connected to it, not generic background.');
      return res('partial', 'Elaborate further', 'Extend to 2–4 sentences and connect the broader development directly to the prompt topic.');
    }
    if (key === 'evidence') {
      var link = contains(t, ['because', 'this shows', 'this demonstrates', 'this illustrates', 'which shows', 'this means', 'as a result', 'therefore', 'this supports']);
      if (words < 30) return res('fail', 'Needs specific evidence', 'Use proper names, dates, policies, and events — at least two — not vague generalizations.');
      if (link && words >= 60) return res('pass', 'Evidence — likely earns 2 pts', 'You use specific evidence and connect it to an argument. Make sure you have at least two distinct pieces, each tied to a claim.');
      if (link) return res('partial', 'Add a second specific example', 'You explain evidence but may need a second distinct example tied to your argument to reach 2 points.');
      return res('partial', 'Explain your evidence', 'You mention examples but aren’t clearly explaining HOW each supports an argument. Add “This shows that…” after each.');
    }
    return res('partial', 'Checked', 'Compare your response to the rubric above.');
  }

  // HAPP handled separately for clarity
  function checkHAPP(t, words) {
    var identify = contains(t, ['point of view', 'purpose', 'historical situation', 'audience', 'intended audience', 'written by', 'published in', 'the author', 'this source', 'this document', 'because the author']);
    var explain = contains(t, ['which means', 'significant because', 'relevant because', 'this affects', 'this means', 'therefore', 'this suggests', 'this reveals', 'this makes the source']);
    var two = (t.match(/doc\s*\d|document\s*\d/g) || []).length >= 2 || (t.match(/source/g) || []).length >= 2;
    if (identify && explain && two) return res('pass', 'HAPP — likely earns the point', 'You identify a HAPP feature for 2+ sources AND explain its significance. Make sure each explanation connects to your argument.');
    if (identify && explain) return res('partial', 'Source a second document', 'Strong single sourcing — the point needs HAPP analysis on at least TWO different sources.');
    if (identify) return res('partial', 'Explain the significance', 'You identify a feature but need the second move: “…which means the source likely emphasizes/omits…,” connected to your argument.');
    return res('fail', 'No HAPP analysis found', 'Pick two sources; for each, name Historical situation, Audience, Purpose, or Point of View, then explain WHY it matters using “which means….”');
  }

  function res(label, head, note) { return { label: label, head: head, note: note }; }

  /* ---- Self-check rendering ---- */
  function selfHint(key, t, words) {
    var h = SELF_CHECK[key].hint;
    if (words < h.min) return '<strong>Heads up:</strong> that’s short (' + words + ' words). ' + h.short;
    var found = [];
    h.moves.forEach(function (m) { if (contains(t, m.kw)) found.push(m.name); });
    if (found.length) return '<strong>We spotted ' + found.join(', ') + '.</strong> ' + h.some;
    return '<strong>We didn’t spot ' + h.noneName + '.</strong> ' + h.none;
  }

  function selfHTML(key, hint) {
    var c = SELF_CHECK[key], m = MODELS[key];
    var html = '<div class="wd-selfcheck">';
    html += '<div class="wd-sc-banner"><span class="wd-sc-tag">Self-assess</span>' + c.subtitle + '</div>';
    if (hint) html += '<div class="wd-sc-hint">' + hint + '</div>';
    html += '<div class="wd-sc-block"><div class="wd-sc-h">Score yourself &mdash; tick only what is TRUE of your writing</div><ul class="wd-sc-list">';
    c.checklist.forEach(function (i) { html += '<li><label><input type="checkbox"> <span>' + i + '</span></label></li>'; });
    html += '</ul></div><div class="wd-sc-block"><div class="wd-sc-h">Sentence frames to push your reasoning</div>';
    c.frames.forEach(function (f) { html += '<div class="wd-sc-frame">' + f + '</div>'; });
    html += '</div>';
    if (m) {
      html += '<div class="wd-samples"><div class="wd-samples-title">&#128218; Model vs. yours</div>';
      m.good.forEach(function (g) { html += '<div class="wd-eg pass"><span class="wd-eg-pass">&#10003; Earns the point</span> ' + g + '</div>'; });
      m.bad.forEach(function (b) { html += '<div class="wd-eg fail"><span class="wd-eg-fail">&#10007; Does not earn</span> ' + b + '</div>'; });
      html += '</div>';
    }
    return html + '</div>';
  }

  function keywordHTML(r) {
    var icon = r.label === 'pass' ? '&#10003;' : r.label === 'partial' ? '&#126;' : '&#10007;';
    return '<div class="wd-res-row"><div class="wd-res-icon">' + icon + '</div><div><div class="wd-res-head ' + r.label + '">' + r.head + '</div><div class="wd-res-note">' + r.note + '</div></div></div>';
  }

  /* ---- Build the UI into each mount ---- */
  function build(mount) {
    var cfg = window.WRITING_DRILLS_CONFIG || {};
    var unitLabel = mount.getAttribute('data-unit-label') || cfg.unitLabel || '';
    var html = '<div class="wd-suite">';
    html += '<div class="wd-intro"><div class="wd-placeholder">Skills practice</div>' +
      '<div class="wd-intro-title">Writing Skill Drills' + (unitLabel ? ' &mdash; ' + unitLabel : '') + '</div>' +
      '<p>Isolate each rubric point and practice it. <strong>Complexity, LEQ Reasoning, and SAQ Part C</strong> &mdash; the rows students lose the most points on &mdash; are coached with an honest self-check (checklist + models + sentence frames) instead of a fake score, because no tool can grade real reasoning from keywords. The prompts below are generic so the <em>skills</em> transfer to any topic; unit-specific prompts can be swapped in later.</p></div>';

    html += '<div class="wd-tabs">';
    DRILLS.forEach(function (d, i) { html += '<button type="button" class="wd-tab' + (i === 0 ? ' active' : '') + '" data-k="' + d.key + '">' + d.label + '</button>'; });
    html += '</div>';

    DRILLS.forEach(function (d, i) {
      html += '<div class="wd-panel' + (i === 0 ? ' active' : '') + '" data-panel="' + d.key + '">';
      html += '<div class="wd-rubric"><div class="wd-rubric-title">What earns the point</div><ul>';
      d.rubric.forEach(function (li) { html += '<li>' + li + '</li>'; });
      html += '</ul></div>';
      html += '<div class="wd-ctx">' + d.prompt + '</div>';
      html += '<textarea class="wd-textarea" data-text="' + d.key + '" placeholder="' + d.placeholder + '"></textarea>';
      html += '<button type="button" class="wd-check" data-check="' + d.key + '">Check ' + d.label + '</button>';
      html += '<div class="wd-result" data-result="' + d.key + '"></div>';
      html += '</div>';
    });
    html += '</div>';
    mount.innerHTML = html;

    // Tab switching
    mount.querySelectorAll('.wd-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        mount.querySelectorAll('.wd-tab').forEach(function (b) { b.classList.remove('active'); });
        tab.classList.add('active');
        mount.querySelectorAll('.wd-panel').forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-panel') === tab.getAttribute('data-k')); });
      });
    });

    // Check buttons
    mount.querySelectorAll('.wd-check').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-check');
        var ta = mount.querySelector('[data-text="' + key + '"]');
        var out = mount.querySelector('[data-result="' + key + '"]');
        var t = ta.value.toLowerCase().trim();
        var words = wc(t);
        if (words < 3) { out.style.display = 'block'; out.innerHTML = keywordHTML(res('fail', 'Write something first', 'Type a response above, then check it.')); return; }
        var drill = DRILLS.filter(function (d) { return d.key === key; })[0];
        out.style.display = 'block';
        if (drill.mode === 'self') {
          out.innerHTML = selfHTML(key, selfHint(key, t, words));
        } else if (key === 'happ') {
          out.innerHTML = keywordHTML(checkHAPP(t, words));
        } else {
          out.innerHTML = keywordHTML(checkKeyword(key, t, words));
        }
        out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  }

  function ensureCSS() {
    if (document.querySelector('link[data-wd-css]')) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = 'writing-drills.css'; l.setAttribute('data-wd-css', '1');
    document.head.appendChild(l);
  }

  function goWriting() {
    if (window.showTab) { window.showTab('pg-writing'); return; }
    document.querySelectorAll('.page').forEach(function (p) { p.classList.remove('active'); });
    var t = document.getElementById('pg-writing'); if (t) t.classList.add('active');
    window.scrollTo(0, 0);
  }

  // Add a "Writing Drills" button to the unit hero if one isn't already
  // present in the page source (unit 1 has a hand-authored one).
  function ensureNavTrigger() {
    if (!document.getElementById('pg-writing')) return;
    if (document.querySelector('[data-tab="pg-writing"]')) return;
    var heroBtn = document.querySelector('.hero-btn');
    if (!heroBtn || !heroBtn.parentNode) return;
    var b = document.createElement('button');
    b.className = 'hero-btn hero-btn-outline';
    b.setAttribute('data-tab', 'pg-writing');
    b.innerHTML = '&#9998; Writing Drills';
    b.addEventListener('click', goWriting);
    heroBtn.parentNode.appendChild(b);
  }

  function init() {
    var mounts = document.querySelectorAll('.wd-mount');
    if (!mounts.length) return;
    ensureCSS();
    mounts.forEach(function (m) { build(m); });
    ensureNavTrigger();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
