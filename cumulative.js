/* ============================================================
   cumulative.js  —  Cross-unit "Cumulative Review" hub logic.
   Builds a recency-weighted pool of questions from the selected units'
   banks (mcq-bank.js) and mounts the shared engine (mcq-engine.js) in
   Test Mode. Weighting biases toward units the student hasn't retrieved
   recently (or ever) — the "let a little forgetting happen, then
   retrieve" mechanic from Make It Stick — using the per-unit lastSeen
   timestamps the engine records in apReview_v1. The unit toggles let the
   student restrict the mix to whichever units they want to drill.
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
  function allUnitIds() { var U = units(); return Object.keys(U).filter(function (id) { return countQ(U[id]) > 0; }); }

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

  // ids = the unit ids to draw from (already filtered to selected + non-empty)
  function buildPool(n, ids) {
    var U = units();
    if (!ids || !ids.length) return [];
    var seen = (window.APWH.store.load().lastSeen) || {};
    var now = Date.now();
    var weights = {};
    ids.forEach(function (id) { weights[id] = unitWeight(id, seen, now); });

    // Cap the requested size at the number of distinct questions available.
    var totalAvail = 0;
    ids.forEach(function (id) { totalAvail += countQ(U[id]); });
    n = Math.min(n, totalAvail);

    var chosen = [], used = {}, guard = 0, cap = n * 60 + 50;
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

  function stalenessSummary(ids) {
    var U = units();
    var seen = (window.APWH.store.load().lastSeen) || {};
    var now = Date.now();
    var rows = ids.map(function (id) {
      var t = seen[id];
      return { id: id, title: U[id].title, never: !t, days: t ? Math.floor((now - t) / DAY) : null };
    });
    rows.sort(function (a, b) {
      if (a.never && !b.never) return -1;
      if (b.never && !a.never) return 1;
      if (a.never && b.never) return 0;
      return b.days - a.days;
    });
    return rows;
  }

  function renderStaleness(el, ids) {
    if (!el) return;
    if (!ids.length) { el.innerHTML = '<span class="cum-chip">No units selected</span>'; return; }
    el.innerHTML = stalenessSummary(ids).map(function (r) {
      var tag = r.never ? 'not yet reviewed' : (r.days === 0 ? 'reviewed today' : r.days + ' day' + (r.days === 1 ? '' : 's') + ' ago');
      var hot = r.never || r.days >= 3;
      return '<span class="cum-chip' + (hot ? ' cum-hot' : '') + '">U' + r.id + ' &middot; ' + tag + '</span>';
    }).join('');
  }

  /* ---- selected-units persistence ---- */
  function loadSelected() {
    var s = window.APWH.store.load();
    var saved = s.cumUnits;
    var all = allUnitIds();
    if (!saved || !saved.length) return all.slice();
    var set = saved.filter(function (id) { return all.indexOf(id) > -1; });
    return set.length ? set : all.slice();
  }
  function saveSelected(ids) {
    var s = window.APWH.store.load();
    s.cumUnits = ids.slice();
    window.APWH.store.save(s);
  }

  window.CUMULATIVE = {
    _buildPool: buildPool,
    start: function (opts) {
      var root = document.getElementById(opts.rootId);
      var sizeSel = document.getElementById(opts.sizeSelId);
      var staleEl = document.getElementById(opts.stalenessId);
      var unitsEl = document.getElementById(opts.unitsId);
      var allBtn = opts.allBtnId ? document.getElementById(opts.allBtnId) : null;
      var noneBtn = opts.noneBtnId ? document.getElementById(opts.noneBtnId) : null;

      var selected = loadSelected();
      var all = allUnitIds();
      var U = units();

      function size() { return sizeSel ? parseInt(sizeSel.value, 10) || SET_SIZE : SET_SIZE; }
      function selectedIds() { return all.filter(function (id) { return selected.indexOf(id) > -1; }); }
      function gen() { return buildPool(size(), selectedIds()); }

      // Build the unit toggle chips from the bank.
      if (unitsEl) {
        unitsEl.innerHTML = all.map(function (id) {
          var on = selected.indexOf(id) > -1;
          return '<button type="button" class="cum-unit' + (on ? ' on' : '') + '" data-unit="' + id + '" aria-pressed="' + on + '">' +
                 '<span class="cum-unit-n">U' + id + '</span> ' + U[id].title + '</button>';
        }).join('');
      }

      function syncUnitButtons() {
        if (!unitsEl) return;
        unitsEl.querySelectorAll('.cum-unit').forEach(function (b) {
          var on = selected.indexOf(b.dataset.unit) > -1;
          b.classList.toggle('on', on);
          b.setAttribute('aria-pressed', on);
        });
      }

      function remount() {
        saveSelected(selected);
        var ids = selectedIds();
        renderStaleness(staleEl, ids);
        if (!ids.length) {
          root.innerHTML = '<div class="cum-empty">Pick at least one unit above to build a question set.</div>';
          return;
        }
        window.APWH.mountMCQ(root, {
          pool: gen(),
          regenerate: function () { var p = gen(); renderStaleness(staleEl, selectedIds()); return p; },
          defaultMode: 'test',
          calibration: true,
          title: 'Cumulative Review',
          newSetLabel: 'New mixed set'
        });
      }

      if (unitsEl) {
        unitsEl.addEventListener('click', function (e) {
          var b = e.target.closest('.cum-unit');
          if (!b) return;
          var id = b.dataset.unit;
          var i = selected.indexOf(id);
          if (i > -1) selected.splice(i, 1); else selected.push(id);
          syncUnitButtons();
          remount();
        });
      }
      if (allBtn) allBtn.addEventListener('click', function () { selected = all.slice(); syncUnitButtons(); remount(); });
      if (noneBtn) noneBtn.addEventListener('click', function () { selected = []; syncUnitButtons(); remount(); });
      if (sizeSel) sizeSel.addEventListener('change', remount);

      remount();
    }
  };
})();
