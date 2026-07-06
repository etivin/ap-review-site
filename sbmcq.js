/* ============================================================
   sbmcq.js  "Attack the Stimulus MCQ" walkthrough engine + data
   Exposes: renderCheatsheet(el), renderWalk(el, {unit})
   Self-contained (site convention: no build step, no imports).
   Worked examples are pulled verbatim from the real unit tests.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- the 5 question types (from mcq_question_types.docx) ---------- */
  var WT = {
    bestillustrates: { name: 'Best Illustrates', cls: 'wt-bestillustrates',
      cue: '"best illustrates / best represents / supports the claim that..."',
      strat: 'Summarize the source in one plain sentence, then find the choice that matches it. Stay inside the source.',
      trap: 'A choice that is true about the topic but that the source never actually shows.' },
    context: { name: 'In the Context Of', cls: 'wt-context',
      cue: '"best understood in the context of... / best explained in the context of..."',
      strat: 'Ask what had to be happening in the world for this source to exist. You want the backdrop, not the content.',
      trap: 'A choice that just describes what the source is about instead of the larger situation around it.' },
    causation: { name: 'Causation', cls: 'wt-causation',
      cue: '"contributed to / led to / resulted from / best explains why / most directly caused"',
      strat: 'Check the direction first (is the source the cause or the effect?). Then run the remove it test and the time period test.',
      trap: 'A true but adjacent answer: right era, but not actually the cause or the effect.' },
    purpose: { name: 'Purpose / Point of View', cls: 'wt-purpose',
      cue: '"purpose / in order to / point of view / intended audience / an attempt to / reliability"',
      strat: 'Ask who made this and what benefits them. The answer must line up with that person’s interest.',
      trap: 'A choice that is true about the topic but is not tied to who made the source and why.' },
    similar: { name: 'Most Similar', cls: 'wt-similar',
      cue: '"most similar to / methods most similar to"',
      strat: 'Strip away the topic and name the method or process. Match the how, not the what.',
      trap: 'Matching by topic (both about empires, both about workers) instead of by method or process.' }
  };

  var UNIT_TITLES = {
    2: 'Unit 2: Networks of Exchange',
    3: 'Unit 3: Land-Based Empires',
    4: 'Unit 4: Transoceanic Connections',
    5: 'Unit 5: Revolutions',
    6: 'Unit 6: Consequences of Industrialization',
    7: 'Unit 7: Global Conflict',
    8: 'Unit 8: Cold War and Decolonization'
  };

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---------- WORKED EXAMPLES (one per unit for 4-8; verbatim from the tests) ----------
     stim / q may contain <mark class="hs"> (key phrase in the stimulus, revealed at step 3)
     and <mark class="hq"> (trigger words in the stem, revealed at step 2). These are trusted. */
  var WORKED = [
    /* ============ UNIT 4 ============ */
    {
      unit: 4, topic: '4.1', type: 'causation', test: 'Unit 4 Test A, Question 1',
      stim: '"We agreed to leave the coast of Peru and <mark class="hs">sail for Japan</mark>, since we knew that cloth was valuable merchandise there. So we sailed directly for Japan. The shogun, hearing of us, sent five boats to bring me to his court. He demanded to know <mark class="hs">why we had come so far</mark>. I answered: ‘We the English are a people who seek friendship with all nations and trade with all countries, bringing the merchandise that our country produces.’ He demanded also to know about the conflicts between Spain and Portugal and England and the reasons for them."',
      srcline: 'William Adams, English navigator and merchant, description of his voyage to Japan, 1611',
      src: [
        { tag: 'WHEN', since: 'it was written in 1611, the height of European overseas trade', therefore: 'it fits the age when Europeans were pushing sea routes all the way to Asia' },
        { tag: 'WHO', since: 'it was written by an English navigator and merchant', therefore: 'it may show English trade as friendly and welcome, because a merchant is promoting himself' },
        { tag: 'WHAT', since: 'it is a firsthand description of his own voyage', therefore: 'it is probably how the author wants to be seen, so it is one-sided and self-flattering' }
      ],
      q: 'Which of the following <mark class="hq">most directly facilitated the voyage</mark> mentioned in the passage?',
      options: [
        'European access to Arabian and Indian shipping vessels',
        'European access to Chinese mapmaking knowledge',
        'European innovations in ship design and navigation',
        'European contact with Polynesian mariners'
      ],
      answer: 2, trapIdx: 0,
      meaning: 'Strip away the story: an English ship has crossed the ocean all the way from Peru to Japan. The passage never says how. So the question is really asking: what technology made that ocean crossing possible?',
      why: 'C. Long transoceanic voyages like this were made possible by European innovations in ship design (the caravel, the lateen sail) and navigation (the astrolabe and magnetic compass).',
      trap: 'A and B credit borrowed Arab, Indian, or Chinese vessels and maps. Europeans did borrow ideas, but the direct engine of this voyage is European ship and navigation technology. Do not pick a distractor just because it sounds connected to trade.'
    },

    /* ============ UNIT 5 ============ */
    {
      unit: 5, topic: '5.1', type: 'context', test: 'Unit 5 Test, Question 1',
      stim: '"The essence of education, our traditional national aim, is to promote benevolence, justice, loyalty, filial piety, and knowledge and skill. But recently, people have been going to extremes by embracing a foreign civilization whose only values are <mark class="hs">fact-gathering and technical-skill</mark>. These values bring harm to our customary ways. We try to incorporate the best features of foreigners in order to achieve the lofty goals that the Meiji emperor desires. We have tried to abandon the undesirable practices of the past and learn from the outside world. But these policies have had a serious defect. They have reduced benevolence, justice, loyalty, and filial piety to secondary goals. If we indiscriminately imitate foreign ways, our people will forget the great principles governing the relations between ruler and subject and the relations between father and son."',
      srcline: 'Motoda Nagazane, adviser to the Meiji emperor, treatise written following a tour of Japanese schools with the emperor, 1879',
      src: [
        { tag: 'WHEN', since: 'it was written in 1879, early in the Meiji era of rapid Westernization', therefore: 'the whole background is the clash between Japanese tradition and Western learning' },
        { tag: 'WHO', since: 'it was written by an adviser to the Meiji emperor, a court official', therefore: 'it may defend traditional Confucian values and distrust foreign influence' },
        { tag: 'WHAT', since: 'it is a treatise arguing a position about schools', therefore: 'it is persuasive and one-sided, not neutral reporting' }
      ],
      q: 'The values of "foreign civilization" that Nagazane criticized in the passage were <mark class="hq">most directly a product of</mark> the',
      options: [
        'Renaissance',
        'Protestant and Catholic Reformations',
        'Enlightenment',
        'Scientific and Industrial Revolutions'
      ],
      answer: 3, trapIdx: 2,
      meaning: 'The question is asking you to name where those "foreign values" came from. So decode the values first: "fact-gathering" is empirical science, and "technical-skill" is technology. Which big development produced those?',
      why: 'D. Fact-gathering (empiricism) grew out of the Scientific Revolution, and technical skill (machines and applied technology) grew out of the Industrial Revolution.',
      trap: 'C, the Enlightenment, is tempting because it is also a Western import. But the Enlightenment produced political ideas (rights, reason in government), not "fact-gathering and technical-skill." Match the exact values named in the passage.'
    },

    /* ============ UNIT 6 ============ */
    {
      unit: 6, topic: '6.1', type: 'purpose', test: 'Unit 6 Test, Question 4',
      stim: '"Let us take North America, for instance, and the richest portion of it, the Mississippi basin, to compare with the Congo River basin in Africa. When early explorers such as de Soto first navigated the Mississippi and the Indians were the undisputed masters of that enormous river basin, the European spirit of enterprise would have found only a few valuable products there, mainly some furs and timber.\n\nThe Congo River basin is, however, <mark class="hs">much more promising</mark> at the stage of underdevelopment. The forests on the banks of the Congo are filled with precious hardwoods; among the climbing vines in the forest is the one from which rubber is produced (the best of which sells for two shillings per pound), and among its palms are some whose oil is a staple article of commerce and others whose fibers make the best cordage.\n\nBut what is of far more value, the Congo River basin has over 40 million moderately industrious and workable people. It is among them that the European trader may fix his residence for years and develop commerce to his profit with very little risks involved. In dwelling over the advantages possessed by the Congo here, it has been my goal to rouse this spirit of trade. Merchants are the missionaries of commerce adapted for nowhere so well as for the Congo River basin where there are so many idle hands and such abundant opportunities."',
      srcline: 'Henry Morton Stanley, Welsh-American journalist, explorer, and agent for King Leopold of Belgium’s Congo Free State, The Congo and the Founding of Its Free State, book published in 1885',
      src: [
        { tag: 'WHEN', since: 'it was written in 1885, during the Scramble for Africa', therefore: 'it fits the rush of European powers to claim and exploit African land' },
        { tag: 'WHO', since: 'it was written by a paid agent for King Leopold’s Congo Free State', therefore: 'it may talk up the Congo’s riches to attract investors, the way a report for a king glorifies the project' },
        { tag: 'WHAT', since: 'it is a book published to promote the colony', therefore: 'it may exaggerate the profits and hide the harm, because its purpose is to sell the venture' }
      ],
      q: 'Stanley’s description of the riches of the Congo in the first two paragraphs can best be seen as an <mark class="hq">attempt to</mark>',
      options: [
        'place European expansion in the Congo in the context of earlier imperial ventures that had ended in disaster for the native population',
        'place European expansion in the Congo in the context of instances in which inter-European rivalries had prevented economic exploitation of colonies',
        'place European expansion in the Congo in the context of other imperial ventures that seemed difficult at first but turned out to be highly valuable',
        'place European expansion in the Congo in the context of instances in which British imperial policies proved more successful than other Europeans’'
      ],
      answer: 2, trapIdx: 0,
      meaning: 'This is a purpose question: why did Stanley write it this way? He compares the Congo to the Mississippi, which also looked unpromising at first but became hugely valuable. He is arguing that the Congo is a great investment.',
      why: 'C. Stanley points out that the Mississippi basin looked unrewarding to early explorers but became very valuable, then says the Congo is "much more promising." The comparison is meant to make the Congo look like a can’t-miss opportunity.',
      trap: 'A says the earlier ventures ended in disaster. That is the opposite of Stanley’s optimistic sales pitch. When a source is clearly promoting something, the answer should match that promotional purpose.'
    },

    /* ============ UNIT 7 ============ */
    {
      unit: 7, topic: '7.2', type: 'context', test: 'Unit 7 Test A1',
      stim: '"Are we prepared for so stubborn a fight as a future war involving the great powers of Europe will undoubtedly become? The answer, we must say without evasion, is no. It should not be forgotten that Russia and Germany are representatives of the conservative principle in the civilized world, as opposed to the democratic principle represented by England and France. A <mark class="hs">general European war is mortally dangerous to both Russia and Germany</mark>, no matter who wins.\n\nIt is my firm conviction that there must inevitably break out in the defeated country a <mark class="hs">social revolution</mark> that, by the very nature of these things, will inevitably spread to the country of the victor. In our country today, there are countless agitators telling the peasant that he should demand a gratuitous share of somebody else’s land, or the worker that he should be getting hold of the entire capital and profits of the manufacturer. War with Germany will create exceptionally favorable conditions for such agitations."',
      srcline: 'Pyotr Durnovo, Russian Minister of the Interior, memorandum to Tsar Nicholas II, February 1914',
      src: [
        { tag: 'WHEN', since: 'it was written in February 1914, just months before the First World War', therefore: 'the context is an empire bracing for a war that has not started yet' },
        { tag: 'WHO', since: 'it was written by the Russian Minister of the Interior, an officer in charge of internal security', therefore: 'he is focused on threats to the tsar’s state, especially unrest at home' },
        { tag: 'WHAT', since: 'it is a private memorandum to the tsar, not a public speech', therefore: 'it is probably candid and analytical, closer to what the author really thinks, not propaganda' }
      ],
      q: 'The memorandum is <mark class="hq">best explained in the context of</mark> which of the following developments in the early twentieth century?',
      options: [
        'The decline of the Western-dominated global order',
        'The emergence of external and internal challenges that threatened the stability of imperial states',
        'The emergence of new nation-states based on the principle of ethnic self-determination',
        'The use of government propaganda to mobilize national populations for conflict'
      ],
      answer: 1, trapIdx: 2,
      meaning: 'Context question: what bigger situation makes a minister write this? He warns that a war (an external threat) plus revolution and agitators at home (internal threats) could destroy the Russian empire.',
      why: 'B. Durnovo describes exactly the pressures facing imperial states before 1914: dangerous external rivalries and rising internal unrest that together threatened the stability of empires like Russia.',
      trap: 'C, new nation-states from self-determination, is a result of the war (after 1918), not the pre-war context of a 1914 memo. Watch the time period: the backdrop must already exist when the source was written.'
    },

    /* ============ UNIT 8 ============ */
    {
      unit: 8, topic: '8.4', type: 'causation', test: 'Unit 8 Test - a, Question 8',
      stim: '"As a sixteen-year-old schoolgirl, I did not know much about being a freedom fighter, although I read nationalist newspapers and knew about the pronouncements of Jomo Kenyatta. By the time the British declared a state of emergency in Kenya, I had already taken my first oath to the Mau Mau cause. Repeating carefully after the instructor, I swore to:\n\n1. <mark class="hs">Fight for the soil of Kenya, which had been stolen by the Whites.</mark>\n\n2. If possible, get a gun and any other valuables or money to help strengthen the movement.\n\n3. Kill anyone who was against the movement, even if that person was my brother.\n\nDespite the pressure, I felt as determined as ever. In my mind, I had no doubt that I was fighting for a just cause."',
      srcline: 'Wambui Otieno, Kenyan activist, description of her participation in the Mau Mau uprising against British rule in Kenya in the early 1950s, included in an autobiography published in 1998',
      src: [
        { tag: 'WHEN', since: 'it describes the early 1950s, the peak of post-war decolonization', therefore: 'it fits the wave of colonies pushing hard for independence' },
        { tag: 'WHO', since: 'it was written by a Kenyan activist who joined the Mau Mau', therefore: 'she is a participant, so she presents the uprising sympathetically as a just fight for freedom' },
        { tag: 'WHAT', since: 'it is a memoir published in 1998, decades after the events', therefore: 'it is shaped by hindsight and pride in the independence struggle' }
      ],
      q: 'Which of the following <mark class="hq">best explains why</mark> the movement described in the passage began after the Second World War?',
      options: [
        'The settlement of the conflict divided former German and Japanese colonies among the victorious Allied powers.',
        'The racist ideology of the German Nazi regime spread in influence as a result of its early military success.',
        'The defeat of the Axis powers required the Allies to grant political concessions in order to mobilize colonial populations.',
        'The Allied Western European states began to intervene in the economy through the creation of extensive welfare states.'
      ],
      answer: 2, trapIdx: 0,
      meaning: 'The passage is an anti-colonial independence uprising (fighting for "the soil of Kenya... stolen by the Whites"). The question asks the cause: why did movements like this surge right after the Second World War?',
      why: 'C. To win the war, Britain and France leaned heavily on their colonies and promised political concessions in return. When those promises went unmet, resentment fueled independence movements like the Mau Mau.',
      trap: 'A (dividing former German and Japanese colonies) is a true fact about the post-war settlement, but Kenya was a British colony, not a former Axis one, so it does not explain this uprising. Beware true-but-unconnected answers.'
    }
  ];

  window.SBMCQ_WORKED = WORKED;

  /* ---------------------- rendering ---------------------- */
  function letters(i) { return String.fromCharCode(65 + i); }

  function optionsHTML(ex) {
    var h = '<ol class="wk-opts">';
    for (var i = 0; i < ex.options.length; i++) {
      var cls = i === ex.answer ? ' class="is-correct"' : (i === ex.trapIdx ? ' class="is-trap"' : '');
      h += '<li' + cls + '><span class="wk-ol">' + letters(i) + '</span><span class="wk-otext">' + esc(ex.options[i]) + '</span><span class="wk-mark"></span></li>';
    }
    return h + '</ol>';
  }

  function stimHTML(ex) {
    // split into paragraphs on blank lines; marks are trusted HTML already inside
    var paras = ex.stim.split('\n\n');
    return paras.map(function (p) { return '<p>' + p + '</p>'; }).join('');
  }

  function coachSteps(ex) {
    var T = WT[ex.type];
    // step 1: source-line reasoning
    var s1 = '<div class="wk-coach-h">Step 1 &middot; Read the source line first</div>' +
      '<p class="wk-coach-lead">Before the passage, read the small line that names who wrote it, when, and what kind of source it is. Then reason it out: since it was written at this time, by this person, as this kind of source, therefore...</p>';
    ex.src.forEach(function (r) {
      s1 += '<div class="wk-since"><span class="wk-since-k">' + esc(r.tag) + '</span> Since ' + esc(r.since) +
        ', <span class="wk-therefore">therefore</span> ' + esc(r.therefore) + '.</div>';
    });

    // step 2: question + type
    var s2 = '<div class="wk-coach-h">Step 2 &middot; Read the question and the choices</div>' +
      '<p class="wk-coach-lead">Look at the underlined trigger words in the question. They tell you the type:</p>' +
      '<div class="wk-typecard"><span class="walk-badge ' + T.cls + '">' + T.name + '</span>' +
      '<p class="wk-cue">' + esc(T.cue) + '</p>' +
      '<p><b>How to handle it:</b> ' + esc(T.strat) + '</p></div>';

    // step 3: plain english
    var s3 = '<div class="wk-coach-h">Step 3 &middot; Say what it is really asking</div>' +
      '<p class="wk-coach-lead">Go back to the highlighted part of the passage and put the question in plain words:</p>' +
      '<div class="wk-plain">' + esc(ex.meaning) + '</div>';

    // step 4: answer + trap
    var s4 = '<div class="wk-coach-h">Step 4 &middot; Answer, and name the trap</div>' +
      '<div class="wk-why"><b>Correct: ' + letters(ex.answer) + '.</b> ' + esc(ex.why) + '</div>' +
      '<div class="wk-trap"><b>What NOT to do</b>' + esc(ex.trap) + '</div>';

    return '<div class="wk-coach-step" data-for="1">' + s1 + '</div>' +
      '<div class="wk-coach-step" data-for="2">' + s2 + '</div>' +
      '<div class="wk-coach-step" data-for="3">' + s3 + '</div>' +
      '<div class="wk-coach-step" data-for="4">' + s4 + '</div>';
  }

  function cardHTML(ex) {
    var T = WT[ex.type];
    return '<div class="wk" data-step="1">' +
      '<div class="wk-head"><span class="walk-badge ' + T.cls + '">' + T.name + '</span>' +
      '<span class="wk-topic">Unit ' + ex.unit + ' &middot; ' + esc(ex.test) + '</span></div>' +

      '<div class="wk-body">' +
        '<div class="wk-doc">' +
          '<div class="wk-stim">' + stimHTML(ex) + '</div>' +
          '<div class="wk-srcbar"><span class="wk-srclabel">Source line</span><span class="wk-srctext">' + esc(ex.srcline) + '</span></div>' +
          '<div class="wk-q">' + ex.q + '</div>' +
          optionsHTML(ex) +
        '</div>' +
        '<aside class="wk-coach">' + coachSteps(ex) +
          '<div class="wk-nav"><button type="button" class="wk-prev" disabled>← Back</button>' +
          '<span class="wk-count">Step <b>1</b> of 4</span>' +
          '<button type="button" class="wk-next">Next →</button></div>' +
        '</aside>' +
      '</div>' +

      '<div class="wk-dots">' +
        '<button type="button" class="wk-dot active" data-s="1">1. Source line</button>' +
        '<button type="button" class="wk-dot" data-s="2">2. The question</button>' +
        '<button type="button" class="wk-dot" data-s="3">3. What it asks</button>' +
        '<button type="button" class="wk-dot" data-s="4">4. Answer &amp; trap</button>' +
      '</div>' +
    '</div>';
  }

  function setStep(card, n) {
    n = Math.max(1, Math.min(4, n));
    card.setAttribute('data-step', n);
    card.querySelectorAll('.wk-dot').forEach(function (d) {
      d.classList.toggle('active', parseInt(d.getAttribute('data-s'), 10) === n);
    });
    var cnt = card.querySelector('.wk-count b'); if (cnt) cnt.textContent = n;
    var prev = card.querySelector('.wk-prev'); if (prev) prev.disabled = (n === 1);
    var next = card.querySelector('.wk-next'); if (next) { next.disabled = (n === 4); next.textContent = n === 3 ? 'See answer →' : 'Next →'; }
  }

  function wire(el) {
    if (el._sbmcqWired) return;
    el._sbmcqWired = true;
    el.addEventListener('click', function (e) {
      var card = e.target.closest('.wk');
      if (!card) return;
      var cur = parseInt(card.getAttribute('data-step'), 10) || 1;
      if (e.target.closest('.wk-next')) { setStep(card, cur + 1); return; }
      if (e.target.closest('.wk-prev')) { setStep(card, cur - 1); return; }
      var dot = e.target.closest('.wk-dot');
      if (dot) { setStep(card, parseInt(dot.getAttribute('data-s'), 10)); return; }
    });
  }

  /* public: method strip + 5-type cheat sheet */
  function renderCheatsheet(el) {
    if (!el) return;
    var method = '<div class="walk-method">' +
      '<div class="walk-method-step"><div class="walk-method-num">Step 1</div><h4>Read the source line first</h4><p>The small line naming who wrote it, when, and what it is. Ask: since it was written by this person, at this time, therefore what?</p></div>' +
      '<div class="walk-method-step"><div class="walk-method-num">Step 2</div><h4>Read the question and choices</h4><p>Find the trigger words and name which of the 5 types you are dealing with.</p></div>' +
      '<div class="walk-method-step"><div class="walk-method-num">Step 3</div><h4>Say it in plain English</h4><p>Go back to the passage and translate the question: what is it actually asking?</p></div>' +
      '<div class="walk-method-step"><div class="walk-method-num">Step 4</div><h4>Answer, and name the trap</h4><p>Pick the answer, and know the classic wrong choice for that type.</p></div>' +
      '</div>';

    var cheat = '<p class="walk-cheat-label">The 5 stimulus-question types. Most are not really about history, they are about decoding what is asked.</p><div class="walk-cheat">';
    ['bestillustrates', 'context', 'causation', 'purpose', 'similar'].forEach(function (k) {
      var T = WT[k];
      cheat += '<div class="walk-cheat-card"><div class="walk-cheat-hd ' + T.cls + '">' + T.name + '</div>' +
        '<div class="walk-cheat-bd"><p class="walk-cheat-cue">' + esc(T.cue) + '</p>' +
        '<span class="lbl">Strategy</span><p>' + esc(T.strat) + '</p>' +
        '<span class="lbl">Trap</span><p class="trap">' + esc(T.trap) + '</p></div></div>';
    });
    cheat += '</div>';
    el.innerHTML = method + cheat;
  }

  /* public: render worked example(s). opts.unit filters to one unit. */
  function renderWalk(el, opts) {
    if (!el) return;
    opts = opts || {};
    var units = opts.unit ? [opts.unit] : [2, 3, 4, 5, 6, 7, 8];
    var html = '';
    units.forEach(function (u) {
      html += '<section class="walk-group" id="walk-u' + u + '" data-unit="' + u + '">';
      if (!opts.unit) html += '<h2 class="walk-groupttl">' + UNIT_TITLES[u] + '</h2>';
      var items = WORKED.filter(function (w) { return w.unit === u; });
      if (!items.length) {
        html += '<div class="walk-empty">Worked example for this unit is coming soon. Drop the unit test PDF into the repo and it will be added here.</div>';
      } else {
        items.forEach(function (ex) { html += cardHTML(ex); });
      }
      html += '</section>';
    });
    el.innerHTML = html;
    wire(el);
  }

  window.renderCheatsheet = renderCheatsheet;
  window.renderWalk = renderWalk;
})();
