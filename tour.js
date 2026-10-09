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

  /* ── The plan. Each item is a checklist line AND a tour step. ── */
  var PHASES = [
    { n:1, name:'Start the Unit', when:'First day or two of the unit',
      goal:'Get the big picture before the details.',
      items:[
        { id:'p1-overview', page:'pg-home', label:'Read the Overview: unit summary, timeline, and the video',
          title:'Overview', body:'Start here. Read the unit summary, scroll the timeline, and watch the review video.',
          why:'If you know the 3–4 big stories first, every new fact has somewhere to stick.' },
        { id:'p1-guide', page:'pg-guide', label:'Skim the Study Guide so you know every topic coming',
          title:'Study Guide', body:'Every topic in the unit, in order. Skim it now so nothing surprises you later.',
          why:'Knowing the whole list up front lets you notice when class is covering a big one.' },
        { id:'p1-gloss', page:'pg-glossary', label:'Find the Glossary: look terms up here when they come up in class',
          title:'Glossary', body:'Every key term with its definition. Use it when a word comes up in class you don’t know.',
          why:'Look up and move on. Don’t spend an hour copying definitions; that comes later as flashcards.' }
      ]},
    { n:2, name:'During Lessons', when:'After each topic we cover in class',
      goal:'Work with the evidence while the topic is fresh.',
      items:[
        { id:'p2-docs', page:'pg-source', label:'Read and analyze that topic’s documents',
          title:'Documents', body:'Primary sources for each topic, with questions that go beyond “what is this?”',
          why:'The AP exam is built on sources. Practicing on them weekly beats cramming them at the end.' },
        { id:'p2-visual', page:'pg-visual', label:'Analyze one visual source with HIPP',
          title:'Visual Sources', body:'Paintings, maps, and images with guided HIPP analysis (Historical context, Intended audience, Purpose, Point of view).',
          why:'Images show up on the exam too, and they’re easy points once you have a routine.' },
        { id:'p2-maps', page:'pg-maps', label:'Check the map: where, how big, and who was next door',
          title:'Maps', body:'Interactive maps for the unit. Find where each topic happened and what was nearby.',
          why:'Geography explains a lot of “why”: trade, conflict, and how ideas spread.' },
        { id:'p2-spice', page:'pg-spice', label:'Fill out a SPICE-T chart for the topic',
          title:'SPICE-T', body:'Sort what you learned into Social, Political, Interactions, Cultural, Economic, Technology.',
          why:'This is how essays get organized. Sorting now makes comparing and writing much faster later.' }
      ]},
    { n:3, name:'Lock It In', when:'2–3 times a week, about 15 minutes',
      goal:'Pull it out of your memory, not just read it again.',
      items:[
        { id:'p3-flash', page:'pg-flash', label:'Flashcards: rate every card Confident, Shaky, or Guessing',
          title:'Flashcards', body:'Try to answer before you flip, then rate yourself honestly. The site brings Shaky and Guessing cards back sooner.',
          why:'Spaced review: short sessions spread over days beat one long session the night before.' },
        { id:'p3-brain', page:'pg-brain', label:'Do a 5-minute Brain Dump on one topic',
          title:'Brain Dump', body:'Pick a topic and write everything you remember for 5 minutes. Then compare with what you missed.',
          why:'Pulling information out of your memory (retrieval) works far better than rereading notes.' },
        { id:'p3-games', page:'pg-games', label:'Play a game as a reward after you study',
          title:'Games', body:'Review games for the unit: Myth Sweeper, the unit challenge, and putting the story in order.',
          why:'Games are for after real studying, not instead of it. Use them to check what stuck.' }
      ]},
    { n:4, name:'Practice Like the Exam', when:'Once most of the topics are covered',
      goal:'Use what you know the way the AP exam asks for it.',
      items:[
        { id:'p4-walk', page:'pg-walk', label:'Learn the 4-step habit for stimulus MCQs',
          title:'How to Attack an MCQ', body:'A step-by-step walkthrough of a real stimulus question. Learn the habit before you drill.',
          why:'Most misses come from misreading what the question asks, not from not knowing the history.' },
        { id:'p4-mcq', page:'pg-mcq', label:'Do MCQs in Quick Check, with an honest confidence tap on each',
          title:'MCQ Questions', body:'Stimulus-based questions by topic. After each answer, tap how sure you were.',
          why:'Your confidence taps show whether you really know it or just got lucky.' },
        { id:'p4-write', page:'pg-writing', label:'Do one Writing Drill (SAQ, LEQ, or DBQ)', link:{href:'writing-guide.html', text:'Open the Writing Guide'},
          title:'Writing Drills', body:'Practice prompts for this unit. Stuck on the format? The Writing Guide breaks down the SAQ, LEQ, and DBQ.',
          why:'Writing is where you show real understanding. One drill a week adds up.' }
      ]},
    { n:5, name:'Test Week', when:'The 3–4 days before the test',
      goal:'Find your gaps and fix them. Don’t reread everything.',
      items:[
        { id:'p5-test', page:'pg-mcq', label:'Take MCQs in Test Mode, then fix every “Confident but wrong”',
          title:'MCQ Test Mode', body:'Switch to Test Mode for exam conditions. When it’s done, check the results card.',
          why:'“Confident but wrong” answers are the most dangerous ones. Fix those first.' },
        { id:'p5-brain', page:'pg-brain', label:'Redo Brain Dumps for your weakest topics',
          title:'Brain Dump, again', body:'Go back to the topics you’re least sure of and write them out again.',
          why:'Compare it to your first try. The gaps that are left are what to study tonight.' },
        { id:'p5-due', page:'pg-flash', target:'.spx-banner', label:'Clear the flashcards the streak bar says are ready for review',
          title:'Study Streak', body:'This bar tracks your study days and how many terms are due for review today.',
          why:'Clearing what’s due each day keeps everything fresh without cramming.' },
        { id:'p5-cume', page:'', label:'Optional: Cumulative Review of earlier units', link:{href:'cumulative.html', text:'Open Cumulative Review'},
          title:'Cumulative Review', body:'The AP exam covers every unit. Mixed review of earlier units keeps them from fading.',
          why:'A little old material mixed in now saves a lot of relearning in May.' }
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
    '.tr-card{position:fixed;z-index:10062;width:min(360px,calc(100vw - 32px));background:var(--white,#fff);color:var(--ink,#16244d);border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.4);padding:20px 20px 16px;font-family:Lato,system-ui,sans-serif;transition:top .3s ease,left .3s ease}',
    '.tr-phase{display:inline-block;font-size:.6rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#16244d;background:#f4cd4f;border-radius:99px;padding:3px 10px;margin-bottom:10px}',
    '.tr-card h3{font-size:1.2rem;font-weight:900;line-height:1.2;margin:0 0 8px;color:var(--ink,#16244d)}',
    '.tr-card p{font-size:.88rem;line-height:1.55;margin:0 0 10px;color:var(--mid,#39476a)}',
    '.tr-why{font-size:.82rem;line-height:1.5;background:var(--gold-bg,#fdf7e3);border-left:3px solid #f4cd4f;padding:8px 11px;border-radius:0 8px 8px 0;margin-bottom:12px;color:var(--ink,#16244d)}',
    '.tr-why b{font-weight:800}',
    '.tr-link{display:inline-block;font-size:.8rem;font-weight:800;color:var(--red,#345fbf);margin-bottom:12px}',
    '.tr-nav{display:flex;align-items:center;gap:8px}',
    '.tr-count{font-size:.72rem;font-weight:700;color:var(--muted,#66748f);margin-right:auto}',
    '.tr-btn{appearance:none;border:1px solid var(--border2,#a9c1de);background:none;border-radius:8px;padding:8px 13px;font:800 .74rem Lato,system-ui,sans-serif;color:var(--ink,#16244d);cursor:pointer}',
    '.tr-btn:hover{background:var(--paper,#e8eff8)}',
    '.tr-btn.pri{background:var(--red,#345fbf);border-color:var(--red,#345fbf);color:#fff}.tr-btn.pri:hover{background:var(--red-d,#26489c)}',
    '.tr-try{appearance:none;border:none;background:none;padding:0;margin:0 0 12px;font:800 .78rem Lato,system-ui,sans-serif;color:var(--red,#345fbf);cursor:pointer;text-decoration:underline}',
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
    '@media(max-width:600px){.gp-head,.gp-body{padding-left:18px;padding-right:18px}.gp-phase{grid-template-columns:34px 1fr;gap:0 12px}.gp-num{width:34px;height:34px;font-size:.95rem}.gp-item{flex-wrap:wrap}.gp-show{margin-left:29px}.tr-pill,.tr-hello{right:16px;bottom:16px}}',
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
      if (sh){ var idx = tourIndexOf(sh.getAttribute('data-show')); closePanel(); startTour(idx); }
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
      body:'This page has a lot of tools. The trick is using the right one at the right time. This tour goes through the unit in 5 phases and shows where everything is.',
      why:'Follow the phases in order across the unit. Studying in small pieces over time beats one big cram.' }];
    liveItems().forEach(function(it){ s.push(it); });
    if (document.querySelector('.ss-btn')) s.push({ title:'Lost? Search.', target:'.ss-btn',
      body:'Search finds any term, tool, or page on the site. Press / or Ctrl+K from anywhere.', why:'Faster than clicking around when you know what you need.' });
    s.push({ outro:true, title:'That’s the plan.',
      body:'Your Game Plan checklist has all 5 phases. Check things off as you go, or print it and keep it in your binder.',
      why:'You can reopen this anytime from “How to Work This Unit” at the top of the sidebar.' });
    return s;
  }
  function tourIndexOf(id){ if (!STEPS) STEPS = buildSteps(); for (var i = 0; i < STEPS.length; i++) if (STEPS[i].id === id) return i; return 0; }

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
      '<p>' + s.body + '</p>' +
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
    var left, top;
    if (r.right + pad + gap + cw <= vw - 12){            // right of target
      left = r.right + pad + gap; top = r.top + r.height / 2 - ch / 2;
    } else if (r.bottom + pad + gap + ch <= vh - 12){    // below
      left = r.left + r.width / 2 - cw / 2; top = r.bottom + pad + gap;
    } else if (r.top - pad - gap - ch >= 12){            // above
      left = r.left + r.width / 2 - cw / 2; top = r.top - pad - gap - ch;
    } else {                                             // fallback: bottom of screen
      left = (vw - cw) / 2; top = vh - ch - 16;
    }
    card.style.left = Math.min(Math.max(16, left), vw - cw - 16) + 'px';
    card.style.top = Math.min(Math.max(16, top), vh - ch - 16) + 'px';
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
