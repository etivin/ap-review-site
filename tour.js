/* tour.js: "How to Work This Unit": a phase-based Game Plan checklist plus a
   spotlight tour of the unit page. Shared across units; reads the page's own
   sidebar (renderNav's data-subs) and showTab(), so it adapts to whichever
   tools a unit actually has, steps for missing pages are skipped.
   Adds:  • a "How to Work This Unit" button at the top of the sidebar
          • the Game Plan panel (5 phases, tick-off checklist, printable)
          • the spotlight tour (Back / Next / Try it, Esc to exit)
          • a one-time "new here?" prompt on a student's first unit visit */
(function(){
  var m = location.pathname.match(/unit(\d+)/i);
  var UNIT = m ? m[1] : '';
  var KEY_PLAN = 'unitPlan_u' + UNIT, KEY_SEEN = 'unitTourSeen';

  function store(k, v){ try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch(e){ return null; } }

  /* ── The plan. Each item is a checklist line; items without tour:false are also
        tour steps. The order follows "struggle, then check": try it yourself or pull
        it from memory first, then look at the answer. `extras` add a sentence to a
        tour step only when this unit has that tab. ── */
  var PHASES = [
    { n:1, name:'Preview and Pretest', when:'First day or two of the unit, before the lessons',
      goal:'Struggle a little first. Guessing before you are taught makes the real answer stick.',
      items:[
        { id:'p1-overview', page:'pg-home', label:'Watch the Overview video and scroll the timeline once, no notes',
          title:'Overview: the big picture', body:'<b>How:</b> watch the review video and scroll the timeline once. Don’t take notes yet. Just notice the 3–4 big stories of the unit.',
          why:'A rough map of the unit gives every new fact somewhere to stick.' },
        { id:'p1-pretest', page:'pg-mcq', label:'Pretest: try 5–10 Quick Check MCQs before the lessons, and tap “Guessing” honestly',
          title:'Pretest yourself (yes, already)', body:'<b>How:</b> open Quick Check and try 5–10 questions before we cover the topic. You will miss some. Tap your confidence honestly, read the explanation, and move on.',
          why:'Getting it wrong first and then seeing the answer helps you remember it better than reading it first. The struggle is the point.' }
      ]},
    { n:2, name:'During Lessons', when:'After each topic we cover in class',
      goal:'Try it yourself before you look at any answer.',
      items:[
        { id:'p2-docs', page:'pg-source', label:'Documents: write your own HIPP before you open the model answer',
          title:'Documents and Visual Sources', body:'<b>How:</b> read the source and write your own HIPP (Historical Situation, Intended Audience, Purpose, Point of View) before you reveal the model. Then compare and fix what you missed. Visual Sources works the same way for images: answer the question first, then read the analysis.',
          why:'Writing it yourself first is harder than reading the model, and that’s exactly why it works.' },
        { id:'p2-visual', tour:false, page:'pg-visual', label:'Visual Sources: answer the question before you read the HIPP analysis' },
        { id:'p2-maps', page:'pg-maps', label:'Maps: guess where it happened and who was next door, then check the map',
          title:'Maps and SPICE-T', body:'<b>How:</b> before you open the map, guess where the topic happened and who the neighbors were, then check. Afterward, fill out a SPICE-T chart for the topic from memory and compare it with the SPICE-T tab under Review &amp; Recall.',
          why:'Predicting and then checking beats just looking. Sorting by SPICE-T is how essays get organized.' },
        { id:'p2-spice', tour:false, page:'pg-spice', label:'SPICE-T: fill out your own chart from memory, then compare with the SPICE-T tab' }
      ]},
    { n:3, name:'Retrieve It', when:'2–3 times a week, about 15 minutes, spread out',
      goal:'Pull it out of your memory, then check. Never just reread.',
      items:[
        { id:'p3-brain', page:'pg-brain', label:'Brain Dump: 5 minutes, notes closed, predict your score, then reveal',
          title:'Brain Dump', body:'<b>How:</b> pick a topic, close your notes, and write everything you remember for 5 minutes. Predict how much you got, then reveal the key points. Use the Study Guide as your answer key: read only the parts you missed.',
          why:'Pulling it out of memory builds it far more than rereading. Your misses tell you exactly what to study.' },
        { id:'p3-guide', tour:false, page:'pg-guide', label:'Study Guide: read only the sections your Brain Dump missed' },
        { id:'p3-flash', page:'pg-flash', label:'Flashcards: say the answer before you flip, and rate every card honestly',
          title:'Flashcards, Glossary, and Games', body:'<b>How:</b> say the answer out loud before you flip, then rate yourself honestly. Shaky and Guessing cards come back sooner, and the streak bar up top shows how many are ready today. The Glossary has every term if you need to look one up. Games unlock once you’ve rated 20 flashcards in the last 7 days.',
          why:'Short sessions spread over days beat one long session the night before. A game after studying is one more round of retrieval; a game instead of studying is just a game.' },
        { id:'p3-gloss', tour:false, page:'pg-glossary', label:'Glossary: look up words from class, then cover the definition and say it back' },
        { id:'p3-games', tour:false, page:'pg-games', label:'Games: play after flashcards to check what stuck' }
      ]},
    { n:4, name:'Practice Like the Exam', when:'Once most of the topics are covered',
      goal:'Use what you know the way the AP exam asks for it.',
      items:[
        { id:'p4-walk', page:'pg-walk', label:'Learn the 4-step habit for stimulus MCQs',
          title:'MCQ Walkthrough, then Quick Check', body:'<b>How:</b> learn the 4-step habit for stimulus questions in the Walkthrough, then drill Quick Check by topic with a confidence tap every time. A right answer you guessed on still counts as one to review.',
          extras:[{ page:'pg-web', text:'The Web Review under Practice connects the unit’s big ideas.' }],
          why:'Most misses come from misreading what the question asks, not from not knowing the history.' },
        { id:'p4-mcq', tour:false, page:'pg-mcq', label:'Quick Check MCQs by topic, with an honest confidence tap on each' },
        { id:'p4-write', page:'pg-writing', label:'Writing Drill: plan from memory first, then write and check', link:{href:'writing-guide.html', text:'Open the Writing Guide'},
          title:'Writing Drills', body:'<b>How:</b> pick an SAQ, LEQ, or DBQ. Plan your argument and evidence from memory before you look anything up, then write, then compare with the exemplar or the checker.',
          extras:[{ page:'pg-write', text:'The FRQ Grader under Writing scores a full response.' }],
          why:'Planning from memory shows you what you really know. One drill a week adds up.' }
      ]},
    { n:5, name:'Test Week', when:'The 3–4 days before the test',
      goal:'Find your gaps and fix them. Don’t reread everything.',
      items:[
        { id:'p5-test', page:'pg-mcq', label:'Take MCQs in Test Mode, then fix every “Confident but wrong”',
          title:'Test Mode', body:'<b>How:</b> switch to Test Mode for exam conditions. On the results card, fix every “Confident but wrong” first. Then redo Brain Dumps for your weakest topics, clear the flashcards that are due, and mix in a Cumulative Review of earlier units.',
          why:'A practice test is the strongest retrieval there is, and “Confident but wrong” answers are the most dangerous ones.' },
        { id:'p5-brain', tour:false, page:'pg-brain', label:'Redo Brain Dumps for your weakest topics' },
        { id:'p5-due', tour:false, page:'pg-flash', target:'.spx-banner', label:'Clear the flashcards the streak bar says are ready for review' },
        { id:'p5-cume', tour:false, page:'', label:'Optional: Cumulative Review of earlier units', link:{href:'cumulative.html', text:'Open Cumulative Review'} }
      ]}
  ];

  var ALL = [];
  PHASES.forEach(function(p){ p.items.forEach(function(it){ it.phase = p; ALL.push(it); }); });

  /* ── styles ── */
  var css = [
    '.gp-launch{display:flex;align-items:center;gap:10px;width:calc(100% - 28px);margin:6px 14px 14px;padding:11px 14px;border-radius:10px;border:1.5px solid rgba(244,205,79,.7);background:rgba(244,205,79,.1);color:#fff;font:800 .82rem Lato,system-ui,sans-serif;letter-spacing:.02em;text-align:left;cursor:pointer;transition:background .15s,transform .15s}',
    '.gp-launch:hover{background:rgba(244,205,79,.22);transform:translateY(-1px)}',
    '.gp-launch small{display:block;font-weight:400;font-size:.68rem;color:rgba(255,255,255,.6);letter-spacing:0}',
    /* modal */
    '.gp-modal{position:fixed;inset:0;z-index:10050;display:none;align-items:flex-start;justify-content:center;padding:4vh 16px;background:rgba(10,16,35,.62);overflow-y:auto}',
    '.gp-modal.open{display:flex}',
    '.gp-panel{position:relative;width:100%;max-width:760px;background:var(--white,#fff);color:var(--ink,#16244d);border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.35);overflow:hidden;font-family:Lato,system-ui,sans-serif}',
    '.gp-head{background:var(--navy,#16244d);color:#fff;padding:26px 28px 22px}',
    '.gp-eyebrow{font-size:.62rem;font-weight:800;letter-spacing:.24em;text-transform:uppercase;color:#f4cd4f;margin-bottom:6px}',
    '.gp-head h2{font-size:clamp(1.4rem,4vw,1.9rem);font-weight:900;line-height:1.1;margin:0 0 8px;color:#fff}',
    '.gp-head p{font-size:.9rem;color:rgba(255,255,255,.75);margin:0 0 16px;max-width:560px;line-height:1.55}',
    '.gp-actions{display:flex;flex-wrap:wrap;gap:10px}',
    '.gp-btn{appearance:none;border:none;border-radius:8px;padding:10px 16px;font:800 .78rem Lato,system-ui,sans-serif;letter-spacing:.04em;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:6px}',
    '.gp-btn-gold{background:#f4cd4f;color:#16244d}.gp-btn-gold:hover{background:#ffd95e}',
    '.gp-btn-ghost{background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.25)}.gp-btn-ghost:hover{background:rgba(255,255,255,.2)}',
    '.gp-x{position:absolute;top:14px;right:14px;width:34px;height:34px;border-radius:50%;border:none;background:rgba(255,255,255,.12);color:#fff;font-size:1.2rem;line-height:1;cursor:pointer}',
    '.gp-x:hover{background:rgba(255,255,255,.25)}',
    '.gp-prog{display:flex;align-items:center;gap:12px;margin-top:18px;font-size:.74rem;font-weight:700;color:rgba(255,255,255,.75)}',
    '.gp-bar{flex:1;height:8px;border-radius:99px;background:rgba(255,255,255,.15);overflow:hidden}',
    '.gp-bar i{display:block;height:100%;width:0;background:#f4cd4f;border-radius:99px;transition:width .3s}',
    '.gp-body{padding:10px 28px 26px}',
    '.gp-phase{display:grid;grid-template-columns:44px 1fr;gap:0 16px;padding:20px 0;border-bottom:1px solid var(--border,#cfdcec)}',
    '.gp-phase:last-child{border-bottom:none}',
    '.gp-num{width:44px;height:44px;border-radius:50%;background:var(--red,#345fbf);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.1rem}',
    '.gp-phase.done .gp-num{background:var(--green,#1a6825)}',
    '.gp-ph-name{font-size:1.12rem;font-weight:900;line-height:1.2;margin:2px 0 3px}',
    '.gp-when{font-size:.7rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--gold,#b8860b);margin-bottom:2px}',
    '.gp-goal{font-size:.86rem;color:var(--mid,#39476a);margin-bottom:10px}',
    '.gp-item{display:flex;align-items:flex-start;gap:10px;padding:7px 0}',
    '.gp-item input{width:19px;height:19px;margin-top:2px;flex-shrink:0;accent-color:var(--green,#1a6825);cursor:pointer}',
    '.gp-item label{flex:1;font-size:.9rem;line-height:1.45;cursor:pointer}',
    '.gp-item input:checked + label{color:var(--muted,#66748f);text-decoration:line-through}',
    '.gp-show{flex-shrink:0;appearance:none;border:1px solid var(--border2,#a9c1de);background:none;border-radius:6px;padding:4px 10px;font:800 .66rem Lato,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:var(--red,#345fbf);cursor:pointer;white-space:nowrap}',
    '.gp-show:hover{background:var(--red,#345fbf);color:#fff;border-color:var(--red,#345fbf)}',
    '.gp-foot{padding:14px 28px;background:var(--paper,#e8eff8);font-size:.78rem;color:var(--mid,#39476a);display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}',
    '.gp-foot button{appearance:none;background:none;border:none;color:var(--muted,#66748f);font:700 .74rem Lato,system-ui,sans-serif;text-decoration:underline;cursor:pointer}',
    '.gp-print-only{display:none}',
    /* tour */
    '.tr-block{position:fixed;inset:0;z-index:10060}',
    '.tr-hole{position:fixed;z-index:10061;border-radius:10px;box-shadow:0 0 0 4px #f4cd4f,0 0 0 9999px rgba(10,16,35,.66);pointer-events:none;transition:top .3s ease,left .3s ease,width .3s ease,height .3s ease}',
    '.tr-hole.center{top:50%!important;left:50%!important;width:0!important;height:0!important;box-shadow:0 0 0 9999px rgba(10,16,35,.66)}',
    '.tr-card{position:fixed;z-index:10062;width:min(420px,calc(100vw - 32px));background:var(--white,#fff);color:var(--ink,#16244d);border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.4);padding:24px 24px 18px;max-height:calc(100vh - 32px);overflow-y:auto;font-family:Lato,system-ui,sans-serif}',
    '.tr-phase{display:inline-block;font-size:.68rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#16244d;background:#f4cd4f;border-radius:99px;padding:3px 10px;margin-bottom:10px}',
    '.tr-card h3{font-size:1.38rem;font-weight:900;line-height:1.2;margin:0 0 8px;color:var(--ink,#16244d)}',
    '.tr-card p{font-size:1rem;line-height:1.55;margin:0 0 10px;color:var(--mid,#39476a)}',
    '.tr-why{font-size:.93rem;line-height:1.5;background:var(--gold-bg,#fdf7e3);border-left:3px solid #f4cd4f;padding:8px 11px;border-radius:0 8px 8px 0;margin-bottom:12px;color:var(--ink,#16244d)}',
    '.tr-why b{font-weight:800}',
    '.tr-link{display:inline-block;font-size:.9rem;font-weight:800;color:var(--red,#345fbf);margin-bottom:12px}',
    '.tr-nav{display:flex;align-items:center;gap:8px}',
    '.tr-count{font-size:.82rem;font-weight:700;color:var(--muted,#66748f);margin-right:auto}',
    '.tr-btn{appearance:none;border:1px solid var(--border2,#a9c1de);background:none;border-radius:8px;padding:9px 15px;font:800 .84rem Lato,system-ui,sans-serif;color:var(--ink,#16244d);cursor:pointer}',
    '.tr-btn:hover{background:var(--paper,#e8eff8)}',
    '.tr-btn.pri{background:var(--red,#345fbf);border-color:var(--red,#345fbf);color:#fff}.tr-btn.pri:hover{background:var(--red-d,#26489c)}',
    '.tr-try{appearance:none;border:none;background:none;padding:0;margin:0 0 12px;font:800 .88rem Lato,system-ui,sans-serif;color:var(--red,#345fbf);cursor:pointer;text-decoration:underline}',
    '.tr-close{position:absolute;top:10px;right:10px;width:28px;height:28px;border:none;background:none;border-radius:50%;font-size:1.1rem;color:var(--muted,#66748f);cursor:pointer}',
    '.tr-close:hover{background:var(--paper,#e8eff8)}',
    '.tr-dots{display:flex;gap:4px;margin:0 0 14px}',
    '.tr-dots i{flex:1;height:4px;border-radius:99px;background:var(--border,#cfdcec)}',
    '.tr-dots i.on{background:var(--red,#345fbf)}',
    /* resume pill + first-visit prompt */
    '.tr-pill,.tr-hello{position:fixed;z-index:10040;right:20px;bottom:20px;font-family:Lato,system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.3)}',
    '.tr-pill{appearance:none;border:none;border-radius:99px;background:#16244d;color:#fff;padding:12px 18px;font:800 .8rem Lato,system-ui,sans-serif;cursor:pointer}',
    '.tr-pill:hover{background:#26489c}',
    '.tr-hello{width:min(330px,calc(100vw - 32px));background:#16244d;color:#fff;border-radius:14px;padding:18px 18px 16px;animation:trUp .35s ease}',
    '@keyframes trUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}',
    '.tr-hello b{display:block;font-size:1rem;font-weight:900;margin-bottom:4px}',
    '.tr-hello p{font-size:.84rem;line-height:1.5;color:rgba(255,255,255,.78);margin:0 0 12px}',
    '.tr-hello .gp-actions{gap:8px}',
    '@media(max-width:600px){.tr-card{width:min(330px,calc(100vw - 24px));padding:16px 16px 12px;border-radius:12px;max-height:calc(100vh - 24px)}.tr-phase{font-size:.6rem;padding:2px 8px;margin-bottom:6px}.tr-card h3{font-size:1.08rem;margin-bottom:5px;padding-right:22px}.tr-card p{font-size:.86rem;line-height:1.45;margin-bottom:7px}.tr-why{font-size:.8rem;line-height:1.4;padding:6px 9px;margin-bottom:9px}.tr-link,.tr-try{font-size:.8rem;margin-bottom:8px}.tr-dots{margin-bottom:10px}.tr-count{font-size:.74rem}.tr-btn{padding:7px 11px;font-size:.76rem}.tr-hello{width:min(280px,calc(100vw - 32px));padding:14px 14px 12px}.tr-hello b{font-size:.9rem}.tr-hello p{font-size:.78rem;margin-bottom:9px}.tr-pill{padding:9px 14px;font-size:.72rem}.gp-head,.gp-body{padding-left:18px;padding-right:18px}.gp-phase{grid-template-columns:34px 1fr;gap:0 12px}.gp-num{width:34px;height:34px;font-size:.95rem}.gp-item{flex-wrap:wrap}.gp-show{margin-left:29px}.tr-pill,.tr-hello{right:16px;bottom:16px}}',
    /* dark mode */
    ':root[data-theme="dark"] .gp-panel,:root[data-theme="dark"] .tr-card{background:#1b1f2a;color:#e8ecf5}',
    ':root[data-theme="dark"] .tr-card h3,:root[data-theme="dark"] .tr-why,:root[data-theme="dark"] .tr-btn{color:#e8ecf5}',
    ':root[data-theme="dark"] .tr-card p,:root[data-theme="dark"] .gp-goal,:root[data-theme="dark"] .gp-foot{color:#b8c0d4}',
    ':root[data-theme="dark"] .tr-why{background:rgba(244,205,79,.1)}',
    ':root[data-theme="dark"] .gp-foot,:root[data-theme="dark"] .tr-btn:hover,:root[data-theme="dark"] .tr-close:hover{background:#232838}',
    ':root[data-theme="dark"] .gp-phase{border-color:#2c3345}',
    ':root[data-theme="dark"] .gp-when{color:#f4cd4f}',
    ':root[data-theme="dark"] .gp-show,:root[data-theme="dark"] .tr-try,:root[data-theme="dark"] .tr-link{color:#8fb0ff;border-color:#3a4562}',
    /* print: only the checklist */
    '@media print{html.gp-printing body>*:not(.gp-modal){display:none!important}html.gp-printing .gp-modal{position:static;display:block;background:none;padding:0;overflow:visible}html.gp-printing .gp-panel{box-shadow:none;max-width:none;border-radius:0}html.gp-printing .gp-head{background:none;color:#000;padding:0 0 10px;border-bottom:2px solid #000}html.gp-printing .gp-head h2,html.gp-printing .gp-head p{color:#000}html.gp-printing .gp-eyebrow{color:#000}html.gp-printing .gp-actions,html.gp-printing .gp-x,html.gp-printing .gp-show,html.gp-printing .gp-prog,html.gp-printing .gp-foot{display:none!important}html.gp-printing .gp-body{padding:0}html.gp-printing .gp-phase{padding:10px 0;break-inside:avoid}html.gp-printing .gp-num{background:none!important;color:#000;border:2px solid #000}html.gp-printing .gp-print-only{display:block;font-size:.8rem;margin-top:6px}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'tour-css'; st.textContent = css;
  document.head.appendChild(st);

  /* ── helpers ── */
  function el(tag, cls, html){ var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function pageExists(id){ return !id || !!document.getElementById(id); }
  function navItemFor(page){
    var items = document.querySelectorAll('#sb-nav-items .nav-item');
    for (var i = 0; i < items.length; i++){
      try { var subs = JSON.parse(items[i].getAttribute('data-subs') || '[]'); } catch(e){ subs = []; }
      for (var j = 0; j < subs.length; j++) if (subs[j][0] === page) return { item: items[i], first: j === 0 };
    }
    return null;
  }
  function liveItems(){ return ALL.filter(function(it){ return pageExists(it.page); }); }

  /* ── checklist state ── */
  function loadDone(){ try { return JSON.parse(store(KEY_PLAN) || '{}') || {}; } catch(e){ return {}; } }
  function saveDone(d){ store(KEY_PLAN, JSON.stringify(d)); }

  /* ── Game Plan panel ── */
  var modal = null;
  function buildPanel(){
    if (modal) return modal;
    modal = el('div', 'gp-modal'); modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-label', 'Unit Game Plan');
    var done = loadDone();
    var h = '<div class="gp-panel"><div class="gp-head">' +
      '<button class="gp-x" type="button" aria-label="Close">&times;</button>' +
      '<div class="gp-eyebrow">How to Work This Unit</div>' +
      '<h2>Unit ' + UNIT + ' Game Plan</h2>' +
      '<p>Five phases, in order, spread across the whole unit. Not everything the night before the test. Check things off as you go; “Show me” points to where each tool is.</p>' +
      '<div class="gp-actions"><button class="gp-btn gp-btn-gold" data-act="tour" type="button">Take the tour</button>' +
      '<button class="gp-btn gp-btn-ghost" data-act="print" type="button">Print checklist</button></div>' +
      '<div class="gp-prog"><span class="gp-prog-txt"></span><div class="gp-bar"><i></i></div></div>' +
      '<div class="gp-print-only">Name: ______________________ &nbsp;&nbsp; Unit ' + UNIT + ' test date: ____________</div>' +
      '</div><div class="gp-body">';
    PHASES.forEach(function(p){
      var items = p.items.filter(function(it){ return pageExists(it.page); });
      if (!items.length) return;
      h += '<div class="gp-phase" data-phase="' + p.n + '"><div class="gp-num">' + p.n + '</div><div>' +
        '<div class="gp-when">' + p.when + '</div><div class="gp-ph-name">' + p.name + '</div><div class="gp-goal">' + p.goal + '</div>';
      items.forEach(function(it){
        var cid = 'gp-' + it.id;
        h += '<div class="gp-item"><input type="checkbox" id="' + cid + '" data-id="' + it.id + '"' + (done[it.id] ? ' checked' : '') + '>' +
          '<label for="' + cid + '">' + it.label + '</label>' +
          (it.page || it.target ? '<button class="gp-show" type="button" data-show="' + it.id + '">Show me &rarr;</button>'
                                : (it.link ? '<a class="gp-show" href="' + it.link.href + '">Open &rarr;</a>' : '')) +
          '</div>';
      });
      h += '</div></div>';
    });
    h += '</div><div class="gp-foot"><span>Your checkmarks save on this device.</span><button type="button" data-act="reset">Clear my checkmarks</button></div></div>';
    modal.innerHTML = h;
    document.body.appendChild(modal);

    modal.addEventListener('click', function(e){
      var t = e.target;
      if (t === modal || t.closest('.gp-x')) return closePanel();
      var act = t.closest('[data-act]'); act = act && act.getAttribute('data-act');
      if (act === 'tour'){ closePanel(); startTour(0); }
      else if (act === 'print') printPanel();
      else if (act === 'reset'){ saveDone({}); modal.querySelectorAll('input[type=checkbox]').forEach(function(c){ c.checked = false; }); refreshProg(); }
      var sh = t.closest('[data-show]');
      if (sh){
        var sid = sh.getAttribute('data-show'), idx = tourIndexOf(sid);
        closePanel();
        if (idx >= 0) startTour(idx);
        else {   // checklist item without its own tour step: just open its tab
          var it = ALL.filter(function(x){ return x.id === sid; })[0];
          if (it && it.page && typeof window.showTab === 'function') window.showTab(it.page);
        }
      }
    });
    modal.addEventListener('change', function(e){
      if (!e.target.matches('input[type=checkbox]')) return;
      var d = loadDone(); d[e.target.getAttribute('data-id')] = e.target.checked; saveDone(d); refreshProg();
    });
    refreshProg();
    return modal;
  }
  function refreshProg(){
    if (!modal) return;
    var boxes = modal.querySelectorAll('input[type=checkbox]'), n = 0;
    boxes.forEach(function(b){ if (b.checked) n++; });
    modal.querySelector('.gp-prog-txt').textContent = n + ' of ' + boxes.length + ' done';
    modal.querySelector('.gp-bar i').style.width = (boxes.length ? (100 * n / boxes.length) : 0) + '%';
    modal.querySelectorAll('.gp-phase').forEach(function(ph){
      var bs = ph.querySelectorAll('input[type=checkbox]'), all = bs.length > 0;
      bs.forEach(function(b){ if (!b.checked) all = false; });
      ph.classList.toggle('done', all);
    });
  }
  function openPanel(){ buildPanel(); refreshProg(); modal.classList.add('open'); var b = modal.querySelector('[data-act=tour]'); if (b) b.focus(); }
  function closePanel(){ if (modal) modal.classList.remove('open'); }
  function printPanel(){
    var root = document.documentElement; root.classList.add('gp-printing');
    var done = function(){ root.classList.remove('gp-printing'); window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    window.print();
    setTimeout(done, 1500);
  }

  /* ── Tour ── */
  var STEPS = null, cur = 0, ui = null, resumeAt = 0, pill = null;
  function buildSteps(){
    var s = [{ intro:true, title:'How to work through Unit ' + UNIT,
      body:'This page has a lot of tools, and the order matters. Every step works the same way: try it yourself or pull it from memory first, then check the answer. This tour shows when to use each tool and how.',
      why:'Struggling to remember feels slower than rereading, but that struggle is what makes it stick. Small pieces over time beat one big cram.' }];
    liveItems().forEach(function(it){ if (it.tour !== false) s.push(it); });
    s.push({ outro:true, title:'That’s the plan.',
      body:'Your Game Plan checklist has every step of all 5 phases. Check things off as you go, or print it and keep it in your binder. Lost? Press / or Ctrl+K to search the whole site.',
      why:'You can reopen this anytime from “How to Work This Unit” at the top of the sidebar.' });
    return s;
  }
  function tourIndexOf(id){ if (!STEPS) STEPS = buildSteps(); for (var i = 0; i < STEPS.length; i++) if (STEPS[i].id === id) return i; return -1; }

  function startTour(i){
    STEPS = STEPS || buildSteps();
    store(KEY_SEEN, '1');
    removeHello(); removePill();
    if (!ui){
      ui = { block: el('div','tr-block'), hole: el('div','tr-hole center'), card: el('div','tr-card') };
      ui.card.setAttribute('role','dialog'); ui.card.setAttribute('aria-live','polite');
      document.body.appendChild(ui.block); document.body.appendChild(ui.hole); document.body.appendChild(ui.card);
      ui.block.addEventListener('click', function(){ go(cur + 1); });
      ui.card.addEventListener('click', function(e){
        var a = e.target.closest('[data-t]'); if (!a) return;
        var k = a.getAttribute('data-t');
        if (k === 'next') go(cur + 1); else if (k === 'back') go(cur - 1);
        else if (k === 'close') endTour(false);
        else if (k === 'try') endTour(true);
        else if (k === 'plan'){ endTour(false); openPanel(); }
      });
      document.addEventListener('keydown', onKey);
      window.addEventListener('resize', place); window.addEventListener('scroll', place, true);
    }
    go(i || 0);
  }
  function onKey(e){
    if (!ui) return;
    if (e.key === 'Escape') endTour(false);
    else if (e.key === 'ArrowRight') go(cur + 1);
    else if (e.key === 'ArrowLeft') go(cur - 1);
  }
  function endTour(tryIt){
    if (!ui) return;
    document.removeEventListener('keydown', onKey);
    window.removeEventListener('resize', place); window.removeEventListener('scroll', place, true);
    [ui.block, ui.hole, ui.card].forEach(function(n){ n.remove(); });
    ui = null;
    if (tryIt){ resumeAt = cur + 1; showPill(); }
  }
  function targetFor(step){
    if (step.target) return document.querySelector(step.target);
    if (!step.page) return null;
    var nav = navItemFor(step.page);
    if (!nav) return null;
    if (nav.first) return nav.item;
    return document.querySelector('#subtab-bar .subtab.active') || nav.item;
  }
  function go(i){
    if (!STEPS) return;
    if (i >= STEPS.length) return endTour(false);
    if (i < 0) i = 0;
    cur = i;
    var s = STEPS[i];
    if (s.page && typeof window.showTab === 'function') window.showTab(s.page);
    var tgt = targetFor(s);
    if (tgt && tgt.scrollIntoView) tgt.scrollIntoView({ block:'nearest' });

    var total = STEPS.length, dots = '';
    var phaseN = s.phase ? s.phase.n : 0;
    PHASES.forEach(function(p){ dots += '<i class="' + (phaseN >= p.n || s.outro ? 'on' : '') + '"></i>'; });
    var chip = s.phase ? 'Phase ' + s.phase.n + ' of 5 · ' + s.phase.name : (s.intro ? 'Welcome' : (s.outro ? 'Done' : 'Tip'));
    var h = '<button class="tr-close" data-t="close" type="button" aria-label="Exit tour">&times;</button>' +
      '<div class="tr-dots">' + dots + '</div>' +
      '<div class="tr-phase">' + chip + '</div>' +
      '<h3>' + s.title + '</h3>' +
      (s.phase && (!STEPS[i - 1] || STEPS[i - 1].phase !== s.phase) ?'<p><b>When:</b> ' + s.phase.when + '. ' + s.phase.goal + '</p>' : '') +
      '<p>' + s.body + (s.extras || []).filter(function(x){ return pageExists(x.page); }).map(function(x){ return ' ' + x.text; }).join('') + '</p>' +
      '<div class="tr-why"><b>Why it works:</b> ' + s.why + '</div>' +
      (s.link ? '<a class="tr-link" href="' + s.link.href + '">' + s.link.text + ' &rarr;</a><br>' : '') +
      (s.page ? '<button class="tr-try" data-t="try" type="button">Try it now (you can resume the tour)</button>' : '') +
      '<div class="tr-nav"><span class="tr-count">' + (i + 1) + ' / ' + total + '</span>' +
      (i > 0 ? '<button class="tr-btn" data-t="back" type="button">Back</button>' : '') +
      (s.outro ? '<button class="tr-btn pri" data-t="plan" type="button">Open my Game Plan</button>'
               : '<button class="tr-btn pri" data-t="next" type="button">' + (s.intro ? 'Start' : 'Next') + ' &rarr;</button>') +
      '</div>';
    ui.card.innerHTML = h;
    ui.tgt = tgt;
    place(); requestAnimationFrame(place);
    var nb = ui.card.querySelector('.tr-btn.pri'); if (nb) nb.focus({ preventScroll:true });
  }
  function place(){
    if (!ui) return;
    var card = ui.card, hole = ui.hole, tgt = ui.tgt;
    var vw = window.innerWidth, vh = window.innerHeight, cw = card.offsetWidth, ch = card.offsetHeight, pad = 8, gap = 16;
    if (!tgt || !tgt.getClientRects().length){
      hole.classList.add('center');
      card.style.left = Math.max(16, (vw - cw) / 2) + 'px';
      card.style.top = Math.max(16, (vh - ch) / 2) + 'px';
      return;
    }
    hole.classList.remove('center');
    var r = tgt.getBoundingClientRect();
    hole.style.top = (r.top - pad) + 'px'; hole.style.left = (r.left - pad) + 'px';
    hole.style.width = (r.width + pad * 2) + 'px'; hole.style.height = (r.height + pad * 2) + 'px';
    // The card stays parked in the bottom-right corner while the highlight moves.
    // It only jumps to another corner if it would cover the highlighted item.
    var m = vw < 600 ? 16 : 24;
    var spots = [
      { left: vw - cw - m, top: vh - ch - m },   // bottom right
      { left: m,           top: vh - ch - m },   // bottom left
      { left: vw - cw - m, top: m }              // top right
    ];
    function covers(p){
      return p.left < r.right + pad && p.left + cw > r.left - pad &&
             p.top < r.bottom + pad && p.top + ch > r.top - pad;
    }
    var spot = spots[0];
    for (var k = 0; k < spots.length; k++){ if (!covers(spots[k])){ spot = spots[k]; break; } }
    card.style.left = Math.max(16, spot.left) + 'px';
    card.style.top = Math.max(16, spot.top) + 'px';
  }

  function showPill(){
    removePill();
    if (!STEPS || resumeAt >= STEPS.length) return;
    pill = el('button', 'tr-pill', 'Resume tour (' + (resumeAt + 1) + ' / ' + STEPS.length + ')');
    pill.type = 'button';
    pill.addEventListener('click', function(){ startTour(resumeAt); });
    document.body.appendChild(pill);
  }
  function removePill(){ if (pill){ pill.remove(); pill = null; } }

  /* ── first-visit prompt ── */
  var hello = null;
  function showHello(){
    hello = el('div', 'tr-hello',
      '<b>New to the unit pages?</b><p>See how to work through a unit, phase by phase, and where every tool is. About 3 minutes.</p>' +
      '<div class="gp-actions"><button class="gp-btn gp-btn-gold" type="button" data-h="go">Show me</button>' +
      '<button class="gp-btn gp-btn-ghost" type="button" data-h="no">Not now</button></div>');
    hello.setAttribute('role', 'dialog'); hello.setAttribute('aria-label', 'Tour offer');
    hello.addEventListener('click', function(e){
      var b = e.target.closest('[data-h]'); if (!b) return;
      store(KEY_SEEN, '1'); removeHello();
      if (b.getAttribute('data-h') === 'go') startTour(0);
    });
    document.body.appendChild(hello);
  }
  function removeHello(){ if (hello){ hello.remove(); hello = null; } }

  /* ── mount ── */
  function mount(){
    var nav = document.querySelector('.sidebar .sb-nav');
    if (nav && !document.querySelector('.gp-launch')){
      var b = el('button', 'gp-launch', '<span>How to Work This Unit<small>Game Plan + guided tour</small></span>');
      b.type = 'button';
      b.addEventListener('click', openPanel);
      nav.insertBefore(b, nav.firstChild);
    }
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && modal && modal.classList.contains('open')) closePanel(); });
    if (!store(KEY_SEEN)) setTimeout(function(){ if (!ui && !store(KEY_SEEN)) showHello(); }, 1200);
  }
  window.UnitTour = { start: startTour, plan: openPanel };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
