/* ============================================================
   spaced.js  —  Shared spaced-review data layer + streak banner.
   Phase 1 of the Delayed-Feedback / Confidence-Calibration build.

   Exposes window.SPACED. The single write path for spaced-review data
   is SPACED.recordReview(itemId, correct, confidence); the MCQ engine
   (and, in Phase 2, the flashcard flow) call it. All state lives INSIDE
   the existing apReview_v1 blob — the same object that stores the
   student's name and MCQ scores — so there is ONE identity system, not
   a second one. New sub-objects:

     apReview_v1.spaced   = { <itemId>: { boxLevel, stability,
                              lastReviewed, nextDue, reviewHistory[] } }
     apReview_v1.studyLog = { "YYYY-MM-DD": { sessionsCompleted,
                              itemsReviewed } }

   itemId scheme (globally unique across all units, feeds the cross-unit
   pool):  u{unit}_{topic}_{idx}   e.g.  u5_5.1_3

   Loaded on every page: it self-injects the streak banner under the top
   nav. It has its own apReview_v1 load/save so it works on pages that do
   not load the MCQ engine (e.g. index.html).
   Site convention: plain global, no build step, no imports.
   ============================================================ */
(function () {
  'use strict';
  var SPACED = (window.SPACED = window.SPACED || {});
  var PKEY = 'apReview_v1';
  var DAY = 86400000;
  var BOX_INTERVALS = { 1: 1, 2: 3, 3: 7, 4: 14 };  // days
  var STUDY_MIN_SEC = 60;   // a day counts as "studied" once this much time on-site is logged

  // A day counts toward the streak / memory curve if the student put in real
  // time on the site, ran a timed session, or reviewed anything that day.
  function didStudy(e) {
    return !!e && (((e.activeSeconds || 0) >= STUDY_MIN_SEC) || (e.sessionsCompleted || 0) > 0 || (e.itemsReviewed || 0) > 0);
  }

  /* ---- storage (same blob APWH.store / unit7 use) ---- */
  function load() {
    // Prefer the engine's store when present so we share one code path.
    if (window.APWH && window.APWH.store && window.APWH.store.load) {
      try { return window.APWH.store.load(); } catch (e) {}
    }
    try { return JSON.parse(localStorage.getItem(PKEY) || '{}'); } catch (e) { return {}; }
  }
  function save(o) {
    if (window.APWH && window.APWH.store && window.APWH.store.save) {
      try { return window.APWH.store.save(o); } catch (e) {}
    }
    try { localStorage.setItem(PKEY, JSON.stringify(o)); } catch (e) {}
  }

  /* ---- date helpers (local time) ---- */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function ymd(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function todayKey() { return ymd(new Date()); }
  function weekDates() {
    // Monday-based week containing today.
    var now = new Date(); now.setHours(0, 0, 0, 0);
    var offset = (now.getDay() + 6) % 7; // 0 = Mon … 6 = Sun
    var mon = new Date(now); mon.setDate(now.getDate() - offset);
    var out = [];
    for (var i = 0; i < 7; i++) { var d = new Date(mon); d.setDate(mon.getDate() + i); out.push(d); }
    return out;
  }

  /* ---- pure spaced-repetition math (exactly per spec) ---- */
  function nextBox(boxLevel, correct, confidence) {
    var b = boxLevel || 0;
    if (!correct) return 1;
    if (confidence === 'confident') return Math.min(4, b + 2);
    if (confidence === 'shaky') return Math.min(4, b + 1);
    return b; // guessing + correct: unchanged
  }
  function nextStability(stability, correct) {
    var s = stability || 1;
    return correct ? s * 1.8 : Math.max(1, s * 0.5);
  }
  // Live Ebbinghaus estimate — recomputed on demand, never stored.
  function retention(item, nowMs) {
    if (!item || !item.lastReviewed) return 0;
    var days = ((nowMs || Date.now()) - new Date(item.lastReviewed).getTime()) / DAY;
    if (days < 0) days = 0;
    return 100 * Math.exp(-days / (item.stability || 1));
  }
  SPACED.retention = retention;
  SPACED.boxIntervals = BOX_INTERVALS;
  SPACED.itemId = function (unit, topic, idx) { return 'u' + unit + '_' + topic + '_' + idx; };

  // Per-item retention sparkline (inline SVG). Replays reviewHistory into a
  // sawtooth: each review spikes to ~100% then decays at that moment's
  // stability. Because stability grows x1.8 on every correct review, each
  // successive tooth is visibly FLATTER — storage strength made visible.
  // Crimson opacity scales with the item's current live retention.
  SPACED.sparklineSVG = function (itemId, opts) {
    opts = opts || {};
    var W = opts.w || 200, H = opts.h || 70, pad = 6;
    var innerW = W - pad * 2, innerH = H - pad * 2;
    var item = (load().spaced || {})[itemId];
    function yFor(r) { return pad + (1 - Math.max(0, Math.min(100, r)) / 100) * innerH; }
    var axis = '<line x1="' + pad + '" y1="' + (H - pad) + '" x2="' + (W - pad) + '" y2="' + (H - pad) +
      '" stroke="var(--border,#ddd0b8)" stroke-width="1"/>';
    var open = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H +
      '" xmlns="http://www.w3.org/2000/svg" role="img" ';
    if (!item || !item.reviewHistory || !item.reviewHistory.length) {
      var yMid = pad + innerH * 0.5;
      return open + 'aria-label="Not yet reviewed">' + axis +
        '<line x1="' + pad + '" y1="' + yMid + '" x2="' + (W - pad) + '" y2="' + yMid +
        '" stroke="var(--muted,#7a7860)" stroke-width="1.5" stroke-dasharray="3 4" opacity=".5"/>' +
        '<text x="' + (W / 2) + '" y="' + (yMid - 6) + '" text-anchor="middle" font-family="Lato,sans-serif" font-size="8" fill="var(--muted,#7a7860)">not yet reviewed</text></svg>';
    }
    var now = Date.now(), stab = 1, ev = [];
    item.reviewHistory.forEach(function (h) {
      stab = h.correct ? stab * 1.8 : Math.max(1, stab * 0.5);
      ev.push({ t: new Date(h.date).getTime(), stab: stab });
    });
    var t0 = ev[0].t, lastStab = ev[ev.length - 1].stab;
    var tEnd = now + Math.max(0.5, lastStab * 0.5) * DAY;
    if (tEnd <= t0) tEnd = t0 + DAY;
    var N = 64, pts = [];
    for (var i = 0; i <= N; i++) {
      var t = t0 + (i / N) * (tEnd - t0);
      var seg = ev[0];
      for (var k = 0; k < ev.length; k++) { if (ev[k].t <= t) seg = ev[k]; else break; }
      var r = 100 * Math.exp(-((t - seg.t) / DAY) / seg.stab);
      pts.push((pad + (i / N) * innerW).toFixed(1) + ',' + yFor(r).toFixed(1));
    }
    var curRet = retention(item, now);
    var op = Math.max(0.14, Math.min(1, curRet / 100));
    var nx = pad + ((now - t0) / (tEnd - t0)) * innerW;
    return open + 'aria-label="Retention curve, currently ' + Math.round(curRet) + ' percent">' + axis +
      '<polyline class="fcx-line" fill="none" stroke="var(--red,#b0001c)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="' + op.toFixed(2) + '" points="' + pts.join(' ') + '"/>' +
      '<circle cx="' + nx.toFixed(1) + '" cy="' + yFor(curRet).toFixed(1) + '" r="3" fill="var(--red,#b0001c)" opacity="' + op.toFixed(2) + '"/>' +
      '<text x="' + (W - pad) + '" y="' + (pad + 8) + '" text-anchor="end" font-family="Lato,sans-serif" font-size="8.5" fill="var(--red,#b0001c)" opacity="' + Math.max(0.5, op).toFixed(2) + '">' + Math.round(curRet) + '%</text></svg>';
  };

  // Replay a single item's review history into [{t, stab}] events (stability
  // after each review). Shared by the aggregate dashboard curve.
  function eventsOf(item) {
    var stab = 1, ev = [];
    (item.reviewHistory || []).forEach(function (h) {
      stab = h.correct ? stab * 1.8 : Math.max(1, stab * 0.5);
      ev.push({ t: new Date(h.date).getTime(), stab: stab });
    });
    return ev;
  }
  function retentionAt(ev, t) {
    if (!ev.length || ev[0].t > t) return null;   // item didn't exist yet at t
    var seg = ev[0];
    for (var k = 0; k < ev.length; k++) { if (ev[k].t <= t) seg = ev[k]; else break; }
    return 100 * Math.exp(-((t - seg.t) / DAY) / seg.stab);
  }

  // Turn the study log into memory-strength events — one per day the student
  // put in real time on the site (or a session/review). Each study day lifts
  // memory back toward 100%; the more time that day, the more storage strength
  // (stability) it builds, so future decay is flatter. Days off = no event =
  // the curve just keeps decaying. This is what makes the curve fall when they
  // stop showing up, and climb when they do.
  function studyEvents() {
    var log = load().studyLog || {}, now = Date.now(), days = [];
    for (var d in log) { if (didStudy(log[d])) days.push(d); }
    days.sort();
    var stab = 1, ev = [];
    days.forEach(function (d) {
      var secs = (log[d].activeSeconds || 0) + (log[d].sessionsCompleted || 0) * 600; // a timed session ~= 10 min
      var factor = 1.35 + Math.min(0.55, (secs / 1800) * 0.55); // 1.35 (brief) … 1.9 (30+ min)
      stab = stab * factor;
      var t = new Date(d + 'T12:00:00').getTime();
      if (isNaN(t)) return;
      if (t > now) t = now;                 // today's spike shouldn't sit in the future
      ev.push({ t: t, stab: stab });
    });
    return ev;
  }

  // Dashboard memory curve: overall retention driven by TIME SPENT REVIEWING,
  // trailingDays back + projectDays forward (projection = "if you stop now",
  // drawn dashed). Climbs on study days, decays on days off.
  SPACED.aggregateCurveSVG = function (opts) {
    opts = opts || {};
    var W = opts.w || 640, H = opts.h || 190, pad = 26, padT = 14, padB = 24;
    var trailing = opts.trailingDays || 14, project = opts.projectDays || 10;
    var innerW = W - pad * 2, innerH = H - padT - padB;
    function xFor(frac) { return pad + frac * innerW; }
    function yFor(r) { return padT + (1 - Math.max(0, Math.min(100, r)) / 100) * innerH; }
    var grid = '';
    [0, 25, 50, 75, 100].forEach(function (v) {
      var y = yFor(v);
      grid += '<line x1="' + pad + '" y1="' + y + '" x2="' + (W - pad) + '" y2="' + y +
        '" stroke="var(--border,#ddd0b8)" stroke-width="1" opacity="' + (v === 0 ? '1' : '.45') + '"/>' +
        '<text x="' + (pad - 6) + '" y="' + (y + 3) + '" text-anchor="end" font-family="Lato,sans-serif" font-size="9" fill="var(--muted,#7a7860)">' + v + '</text>';
    });
    var open = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H +
      '" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" role="img" ';
    var ev = studyEvents();
    if (!ev.length) {
      return open + 'aria-label="No memory curve yet">' + grid +
        '<text x="' + (W / 2) + '" y="' + (padT + innerH / 2) + '" text-anchor="middle" font-family="Lato,sans-serif" font-size="11" fill="var(--muted,#7a7860)">Spend time reviewing on the site to start your memory curve</text></svg>';
    }
    var now = Date.now(), t0 = now - trailing * DAY, tEnd = now + project * DAY, N = 96;
    var past = [], future = [];
    for (var i = 0; i <= N; i++) {
      var frac = i / N, t = t0 + frac * (tEnd - t0);
      var r = retentionAt(ev, t);           // null only before the very first study day
      if (r == null) continue;
      var pt = xFor(frac).toFixed(1) + ',' + yFor(r).toFixed(1);
      if (t <= now) past.push(pt); else future.push(pt);
    }
    if (past.length && future.length) future.unshift(past[past.length - 1]); // continuity at "now"
    var nowX = xFor((now - t0) / (tEnd - t0)), curNow = retentionAt(ev, now) || 0;
    return open + 'aria-label="Memory strength from time reviewing, currently ' + Math.round(curNow) + ' percent">' + grid +
      '<line x1="' + nowX.toFixed(1) + '" y1="' + padT + '" x2="' + nowX.toFixed(1) + '" y2="' + (H - padB) +
        '" stroke="var(--muted,#7a7860)" stroke-width="1" stroke-dasharray="2 3"/>' +
      '<text x="' + nowX.toFixed(1) + '" y="' + (H - padB + 15) + '" text-anchor="middle" font-family="Lato,sans-serif" font-size="9" fill="var(--muted,#7a7860)">now</text>' +
      (past.length ? '<polyline fill="none" stroke="var(--red,#b0001c)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" points="' + past.join(' ') + '"/>' : '') +
      (future.length ? '<polyline fill="none" stroke="var(--red,#b0001c)" stroke-width="2" stroke-dasharray="4 4" opacity=".55" points="' + future.join(' ') + '"/>' : '') +
      '<circle cx="' + nowX.toFixed(1) + '" cy="' + yFor(curNow).toFixed(1) + '" r="3.5" fill="var(--red,#b0001c)"/>' +
      '<text x="' + (W - pad) + '" y="' + (padT + 11) + '" text-anchor="end" font-family="Lato,sans-serif" font-size="10" fill="var(--red,#b0001c)">' + Math.round(curNow) + '%</text></svg>';
  };

  // What moved during a study block: distinct items reviewed since sinceMs,
  // split by whether their box went up (pushed further out) or reset (sooner).
  SPACED.sessionSummary = function (sinceMs) {
    var sp = load().spaced || {}, reviewed = 0, resurface = 0, pushed = 0;
    for (var id in sp) {
      var h = sp[id].reviewHistory || [], last = null;
      for (var i = h.length - 1; i >= 0; i--) { if (new Date(h[i].date).getTime() >= sinceMs) { last = h[i]; break; } }
      if (!last) continue;
      reviewed++;
      if (!last.correct) resurface++;                       // box reset to 1 -> sooner
      else if (last.confidence !== 'guessing') pushed++;    // box up -> further out
    }
    return { reviewed: reviewed, resurface: resurface, pushed: pushed };
  };

  /* ---- study-log bump ---- */
  function bumpLog(s, field, by) {
    s.studyLog = s.studyLog || {};
    var k = todayKey();
    var e = s.studyLog[k] || { sessionsCompleted: 0, itemsReviewed: 0 };
    e[field] = (e[field] || 0) + by;
    s.studyLog[k] = e;
  }

  /* ---- single write path ---- */
  SPACED.recordReview = function (itemId, correct, confidence) {
    if (!itemId) return null;
    var s = load(); s.spaced = s.spaced || {};
    var it = s.spaced[itemId] || { boxLevel: 0, stability: 1, lastReviewed: null, nextDue: null, reviewHistory: [] };

    it.boxLevel = nextBox(it.boxLevel, correct, confidence);
    if (it.boxLevel < 1) it.boxLevel = 1;               // clamp into the interval table
    it.stability = nextStability(it.stability, correct);

    var now = new Date();
    it.lastReviewed = now.toISOString();
    var iv = BOX_INTERVALS[it.boxLevel] || 1;
    it.nextDue = new Date(now.getTime() + iv * DAY).toISOString();
    it.reviewHistory = it.reviewHistory || [];
    it.reviewHistory.push({ date: now.toISOString(), correct: !!correct, confidence: confidence || null });

    s.spaced[itemId] = it;
    bumpLog(s, 'itemsReviewed', 1);
    save(s);
    refreshBanner();
    return it;
  };

  // Called by the laptop study timer when a focus block completes.
  SPACED.recordSession = function () {
    var s = load();
    bumpLog(s, 'sessionsCompleted', 1);
    save(s);
    refreshBanner();
  };

  /* ---- derived numbers for the UI ---- */
  SPACED.getItem = function (itemId) { return (load().spaced || {})[itemId] || null; };
  SPACED.dueCount = function () {
    var sp = load().spaced || {}, now = Date.now(), n = 0;
    for (var k in sp) { if (sp[k].nextDue && new Date(sp[k].nextDue).getTime() <= now) n++; }
    return n;
  };
  // Bank-dependent; returns null where the MCQ bank is not loaded (e.g. plain pages).
  SPACED.newCount = function () {
    if (!window.APWH_MCQ || !window.APWH_MCQ.units) return null;
    var sp = load().spaced || {}, U = window.APWH_MCQ.units, n = 0;
    for (var u in U) {
      var q = (U[u] && U[u].questions) || {};
      for (var t in q) { for (var i = 0; i < q[t].length; i++) { if (!sp['u' + u + '_' + t + '_' + i]) n++; } }
    }
    return n;
  };
  SPACED.streakLength = function () {
    var log = load().studyLog || {};
    var d = new Date(); d.setHours(0, 0, 0, 0);
    var done = function (dt) { return didStudy(log[ymd(dt)]); };
    // Grace: if today isn't done yet, count the run ending yesterday so the
    // streak still shows until midnight.
    if (!done(d)) d.setDate(d.getDate() - 1);
    var n = 0;
    while (done(d)) { n++; d.setDate(d.getDate() - 1); }
    return n;
  };

  /* ---- session-start line (rendered near the laptop timer) ---- */
  SPACED.sessionStartText = function () {
    var due = SPACED.dueCount(), nw = SPACED.newCount();
    var s = 'Today’s session pulls from: ' + due + ' due';
    if (nw != null) s += ' · ' + nw + ' new';
    return s;
  };

  /* ---- streak banner ---- */
  function injectCSS() {
    if (document.getElementById('spx-css')) return;
    var css =
      '.spx-banner{display:flex;flex-wrap:wrap;align-items:center;gap:8px 22px;' +
        'background:var(--paper,#f3ece0);border:1px solid var(--border,#ddd0b8);' +
        'border-left:4px solid var(--red,#b0001c);padding:12px 22px;margin:0}' +
      '.spx-lead{display:flex;align-items:center;gap:8px;font-family:Lato,system-ui,sans-serif;font-weight:700;' +
        'font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--red,#b0001c);font-weight:500}' +
      '.spx-lead::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--red,#b0001c)}' +
      '.spx-week{display:flex;align-items:flex-end;gap:11px}' +
      '.spx-day{display:flex;flex-direction:column;align-items:center;gap:5px}' +
      '.spx-dl{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.54rem;letter-spacing:.08em;' +
        'text-transform:uppercase;color:var(--muted,#7a7860)}' +
      '.spx-dot{width:14px;height:14px;border-radius:50%;box-sizing:border-box;' +
        'border:1.5px solid var(--border2,#b8a478);background:var(--white,#fff)}' +
      '.spx-dot.on{background:var(--red,#b0001c);border-color:var(--red,#b0001c)}' +
      '.spx-dot.today{border-color:var(--red,#b0001c);border-width:2px}' +
      '.spx-dot.today.pulse{animation:spxPulse 1.6s ease-in-out infinite}' +
      '@keyframes spxPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.3);opacity:.6}}' +
      '.spx-sub{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.72rem;letter-spacing:.03em;' +
        'color:var(--mid,#48483a)}' +
      '.spx-sub b{color:var(--red,#b0001c);font-weight:600}' +
      '.spx-dash{background:var(--white,#fff);border:1px solid var(--border,#ddd0b8);border-top:4px solid var(--red,#b0001c);padding:18px 22px;margin:0 0 26px}' +
      '.spx-dash-eyebrow{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.56rem;letter-spacing:.22em;text-transform:uppercase;color:var(--red,#b0001c);margin-bottom:5px}' +
      '.spx-dash-h{font-family:Lato,system-ui,sans-serif;letter-spacing:-.02em;font-size:1.25rem;font-weight:900;line-height:1.15;margin-bottom:12px}' +
      '.spx-dash-svg svg{display:block;width:100%;height:auto}' +
      '.spx-dash-cap{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.62rem;letter-spacing:.03em;color:var(--muted,#7a7860);margin-top:10px;line-height:1.5}' +
      '.spx-dash-legend{display:flex;gap:20px;flex-wrap:wrap;margin-top:12px}' +
      '.spx-leg{display:flex;align-items:center;gap:7px;font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;color:var(--mid,#48483a)}' +
      '.spx-leg-line{width:24px;height:0;border-top:2.5px solid var(--red,#b0001c)}' +
      '.spx-leg-dash{border-top-style:dashed;opacity:.7}' +
      '@media(max-width:520px){.spx-banner{padding:10px 16px}.spx-sub{font-size:.62rem}.spx-dash{padding:14px 16px}}';
    var st = document.createElement('style'); st.id = 'spx-css'; st.textContent = css;
    document.head.appendChild(st);
  }

  var DOW = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  function bannerInner() {
    var log = load().studyLog || {};
    var week = weekDates(), tKey = todayKey();
    var dots = '';
    for (var i = 0; i < 7; i++) {
      var key = ymd(week[i]);
      var on = didStudy(log[key]);
      var isToday = key === tKey;
      var cls = 'spx-dot' + (on ? ' on' : '') + (isToday ? ' today' : '') + (isToday && !on ? ' pulse' : '');
      dots += '<div class="spx-day"><span class="spx-dl">' + DOW[i] + '</span>' +
              '<span class="' + cls + '" title="' + key + (on ? ' — studied' : '') + '"></span></div>';
    }
    var due = SPACED.dueCount(), streak = SPACED.streakLength();
    var sub = '<b>' + due + '</b> term' + (due === 1 ? '' : 's') + ' ready for review · ' +
              '<b>' + streak + '</b>-day streak';
    return '<div class="spx-lead">Study Streak</div><div class="spx-week">' + dots + '</div><div class="spx-sub">' + sub + '</div>';
  }

  function buildBanner() {
    var b = document.createElement('div');
    b.className = 'spx-banner';
    b.id = 'spx-banner';
    b.setAttribute('aria-label', 'Study streak and review queue');
    b.innerHTML = bannerInner();
    return b;
  }
  // Dashboard aggregate curve — rendered into #spx-dashboard where present
  // (index.html landing area). No-op elsewhere.
  function renderDashboard() {
    var el = document.getElementById('spx-dashboard');
    if (!el) return;
    el.className = 'spx-dash';
    el.innerHTML =
      '<div class="spx-dash-eyebrow">Your Memory</div>' +
      '<h3 class="spx-dash-h">Memory curve</h3>' +
      '<div class="spx-dash-svg">' + SPACED.aggregateCurveSVG({}) + '</div>' +
      '<div class="spx-dash-legend">' +
        '<span class="spx-leg"><span class="spx-leg-line"></span>Studied so far</span>' +
        '<span class="spx-leg"><span class="spx-leg-line spx-leg-dash"></span>If you stop now</span>' +
      '</div>' +
      '<div class="spx-dash-cap">Built from your time on the site — 14 days back (solid), projected forward ' +
        '(dashed) if you stop. It climbs on the days you review and slips on the days you don’t; ' +
        'study consistently and it decays more slowly.</div>';
  }
  SPACED.renderDashboard = renderDashboard;

  function refreshBanner() {
    var b = document.getElementById('spx-banner');
    if (b) b.innerHTML = bannerInner();
    renderDashboard();
  }
  SPACED.refreshBanner = refreshBanner;

  function mountBanner() {
    injectCSS();
    renderDashboard();
    if (document.getElementById('spx-banner')) return;
    var banner = buildBanner();
    var topbar = document.querySelector('.top-bar');
    if (topbar && topbar.parentNode) {
      topbar.parentNode.insertBefore(banner, topbar.nextSibling);
    } else {
      var host = document.querySelector('.page-content') || document.querySelector('.main-wrap') || document.body;
      host.insertBefore(banner, host.firstChild);
    }
  }

  /* ---- time-on-site tracker ----
     Accumulates active seconds while a page is visible and folds them into
     today's studyLog.activeSeconds. This is what feeds the memory curve:
     time spent reviewing lifts it, days away let it decay. Writes are batched
     (every ~20s and on hide/unload) to keep localStorage churn low. */
  function bumpTime(sec) {
    if (sec < 1) return;
    var s = load(); s.studyLog = s.studyLog || {};
    var k = todayKey(), e = s.studyLog[k] || { sessionsCompleted: 0, itemsReviewed: 0 };
    e.activeSeconds = (e.activeSeconds || 0) + Math.round(sec);
    s.studyLog[k] = e; save(s);
  }
  SPACED.recordTime = bumpTime;

  (function trackTime() {
    var last = Date.now(), unflushed = 0, everCrossed = false;
    function visible() { return document.visibilityState !== 'hidden'; }
    function flush(refresh) {
      if (unflushed >= 1) { bumpTime(unflushed); unflushed = 0; }
      // Refresh the banner/curve the first time we cross the "studied today"
      // threshold, so the streak dot + curve react without a reload.
      if (refresh) refreshBanner();
    }
    function tick() {
      var now = Date.now(), dt = (now - last) / 1000; last = now;
      if (visible() && dt > 0 && dt < 120) unflushed += dt;   // guard sleep/background gaps
      var todayE = (load().studyLog || {})[todayKey()];
      var crossedNow = didStudy(todayE) || (((todayE && todayE.activeSeconds) || 0) + unflushed) >= STUDY_MIN_SEC;
      if (unflushed >= 20) flush(crossedNow && !everCrossed);
      if (crossedNow) everCrossed = true;
    }
    setInterval(tick, 5000);
    document.addEventListener('visibilitychange', function () { last = Date.now(); if (!visible()) flush(false); });
    window.addEventListener('pagehide', function () { flush(false); });
    window.addEventListener('beforeunload', function () { flush(false); });
  })();

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountBanner);
  else mountBanner();
})();
