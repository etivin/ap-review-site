/* ============================================================
   cumulative.js  —  Cross-unit "Cumulative Review" hub logic.
   Builds a recency-weighted pool of questions from every unit's bank
   (mcq-bank.js) and mounts the shared engine (mcq-engine.js) in Test
   Mode. Weighting biases toward units the student hasn't retrieved
   recently (or ever) — the "let a little forgetting happen, then
   retrieve" mechanic from Make It Stick — using the per-unit lastSeen
   timestamps the engine records in apReview_v1.
   Site convention: plain global, no build step, no imports.
   ============================================================ */
(function () {
  'use strict';
  var DAY = 86400000;
  var NEVER_WEIGHT = 30;   // treat never-seen units as ~30 days stale (max bias)
  var MAX_DAYS = 45;       // cap so one ancient unit doesn't crowd out everything
  var SET_SIZE = 15;

  function units() { return (window.APWH_MCQ && window.APWH_MCQ.units) || {}; }
  function countQ(u) { var n = 0; for (var k in u.questions) n += u.questions[k].length; return n; }

  function unitWeight(id, seen, now) {
    var t = seen[id];
    if (!t) return NEVER_WEIGHT;
    var days = (now - t) / DAY;
    return Math.max(0.5, Math.min(MAX_DAYS, days));
  }

  function weightedPickUnit(ids, weights) {
    var total = 0, i;
    for (i = 0; i < ids.length; i++) total += weights[ids[i]];
    var r = Math.random() * total;
    for (i = 0; i < ids.length; i++) {
      r -= weights[ids[i]];
      if (r <= 0) return ids[i];
    }
    return ids[ids.length - 1];
  }

  function buildPool(n) {
    var U = units();
    var seen = (window.APWH.store.load().lastSeen) || {};
    var now = Date.now();
    var ids = Object.keys(U).filter(function (id) { return countQ(U[id]) > 0; });
    var weights = {};
    ids.forEach(function (id) { weights[id] = unitWeight(id, seen, now); });

    var chosen = [], used = {}, guard = 0, cap = n * 60;
    while (chosen.length < n && guard < cap) {
      guard++;
      var u = weightedPickUnit(ids, weights);
      var topics = U[u].topics.filter(function (t) { return (U[u].questions[t.id] || []).length; });
      if (!topics.length) continue;
      var t = topics[Math.floor(Math.random() * topics.length)].id;
      var arr = U[u].questions[t];
      var idx = Math.floor(Math.random() * arr.length);
      var key = u + ':' + t + ':' + idx;
      if (used[key]) continue;
      used[key] = true;
      chosen.push({ unit: u, topic: t, idx: idx });
    }
    return chosen;
  }

  // Describe which units the current staleness weighting favors (for the UI).
  function stalenessSummary() {
    var U = units();
    var seen = (window.APWH.store.load().lastSeen) || {};
    var now = Date.now();
    var rows = Object.keys(U).filter(function (id) { return countQ(U[id]) > 0; }).map(function (id) {
      var t = seen[id];
      return { id: id, title: U[id].title, never: !t, days: t ? Math.floor((now - t) / DAY) : null };
    });
    // most-stale first: never-seen, then largest days
    rows.sort(function (a, b) {
      if (a.never && !b.never) return -1;
      if (b.never && !a.never) return 1;
      if (a.never && b.never) return 0;
      return b.days - a.days;
    });
    return rows;
  }

  function renderStaleness(el) {
    if (!el) return;
    var rows = stalenessSummary();
    el.innerHTML = rows.map(function (r) {
      var tag = r.never ? 'not yet reviewed' : (r.days === 0 ? 'reviewed today' : r.days + ' day' + (r.days === 1 ? '' : 's') + ' ago');
      var hot = r.never || r.days >= 3;
      return '<span class="cum-chip' + (hot ? ' cum-hot' : '') + '">U' + r.id + ' &middot; ' + tag + '</span>';
    }).join('');
  }

  window.CUMULATIVE = {
    _buildPool: buildPool,
    start: function (rootId, sizeSelId, stalenessId) {
      var root = document.getElementById(rootId);
      var sizeSel = sizeSelId ? document.getElementById(sizeSelId) : null;
      var staleEl = stalenessId ? document.getElementById(stalenessId) : null;
      function size() { return sizeSel ? parseInt(sizeSel.value, 10) || SET_SIZE : SET_SIZE; }
      function gen() { return buildPool(size()); }
      renderStaleness(staleEl);
      window.APWH.mountMCQ(root, {
        pool: gen(),
        regenerate: function () { var p = gen(); renderStaleness(staleEl); return p; },
        defaultMode: 'test',
        calibration: true,
        title: 'Cumulative Review',
        newSetLabel: 'New mixed set'
      });
      if (sizeSel) sizeSel.addEventListener('change', function () {
        var p = gen(); renderStaleness(staleEl);
        window.APWH.mountMCQ(root, {
          pool: p, regenerate: function () { var q = gen(); renderStaleness(staleEl); return q; },
          defaultMode: 'test', calibration: true, title: 'Cumulative Review', newSetLabel: 'New mixed set'
        });
      });
    }
  };
})();
