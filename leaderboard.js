/* ─────────────────────────────────────────────────────────────
   leaderboard.js  "Class Top 5" box on the racing games (Empire Road, Sea Lanes and the
   Unit 5–9 lane-runners). Numbers only: no names, no accounts.

   Each browser's best score per game is kept by the class-stats Worker
   (cloudflare/class-stats-worker.js: POST /score, GET /scores?game=). The browser id is the
   same random id class-stats.js uses (localStorage "classStatsId").

   A game page loads this script and calls
     LEADERBOARD.init(game, bestKey)   draws the box at the top of the Checkpoint Log
     LEADERBOARD.submit(game, score)   at game over; sends the score, redraws the box
   game is one of racer voyage minecart rails tank sputnik freight; bestKey is the page's
   localStorage best-score key, used to mark "yours" in the list.
   If the server is missing (or on localhost) the box stays hidden and nothing breaks.
   Eli can remove a score on class-stats.html > Leaderboards.
   ───────────────────────────────────────────────────────────── */
(function () {
  var box = null, game = null, bestKey = null, lastTop = null;

  function base() {
    if (window.CLASS_STATS_URL) return window.CLASS_STATS_URL;
    var h = location.hostname;
    if (/(^|\.)tivinteaches\.com$/.test(h)) return '/api/class-stats';
    if (/ap-review-site\.(pages\.dev|elitivin\.workers\.dev)$/.test(h)) return 'https://tivinteaches.com/api/class-stats';
    return null;
  }
  function who() {
    var id = null;
    try { id = localStorage.getItem('classStatsId'); } catch (e) {}
    if (id && /^[a-z0-9-]{16,40}$/.test(id)) return id;
    if (window.crypto && crypto.randomUUID) id = crypto.randomUUID();
    else id = 'x' + Date.now().toString(36) + Math.random().toString(36).slice(2, 14);
    try { localStorage.setItem('classStatsId', id); } catch (e) {}
    return id;
  }
  function myBest() { try { return +localStorage.getItem(bestKey) || 0; } catch (e) { return 0; } }

  function css() {
    if (document.getElementById('lb-style')) return;
    var s = document.createElement('style');
    s.id = 'lb-style';
    s.textContent =
      '.lb{border-bottom:2px solid var(--navy,#0f2557);flex:none}' +
      '.lb h3{display:flex;justify-content:space-between;align-items:baseline}' +
      '.lb h3 small{font-weight:700;font-size:.62rem;letter-spacing:.06em;opacity:.75;text-transform:none}' +
      '.lb ol{list-style:none;margin:0;padding:6px 10px 8px}' +
      '.lb li{display:flex;gap:10px;align-items:center;padding:4px 6px;font:700 .86rem Lato,system-ui,sans-serif;color:#1d2433;font-variant-numeric:tabular-nums}' +
      '.lb li+li{border-top:1px solid #e6e9ef}' +
      '.lb .r{width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:.72rem;background:#e9edf5;color:#3b4660;flex:none}' +
      '.lb li:nth-child(1) .r{background:#f5c542;color:#4a3700}' +
      '.lb li:nth-child(2) .r{background:#cfd6e1;color:#2b3445}' +
      '.lb li:nth-child(3) .r{background:#e0a979;color:#46280e}' +
      '.lb .v{flex:1}' +
      '.lb .you{font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:#2d5deb;padding:2px 7px}' +
      '.lb li.mine{background:#eef3ff}' +
      '.lb .empty{padding:8px 6px;font:400 .8rem Lato,system-ui,sans-serif;color:#5b6475}' +
      '.lb .msg{margin:0 10px 8px;padding:6px 8px;font:700 .78rem Lato,system-ui,sans-serif;background:#fff6d6;color:#5a4300;text-align:center}' +
      '.lb .msg:empty{display:none}';
    document.head.appendChild(s);
  }

  function draw(top, note) {
    if (!box) return;
    lastTop = top;
    var mine = myBest(), marked = false, h = '';
    if (!top.length) h = '<li class="empty">No scores yet. Finish a run to set the first one.</li>';
    top.forEach(function (v, i) {
      var me = !marked && mine && v === mine;
      if (me) marked = true;
      h += '<li' + (me ? ' class="mine"' : '') + '><span class="r">' + (i + 1) + '</span><span class="v">' +
        v.toLocaleString() + '</span>' + (me ? '<span class="you">Yours</span>' : '') + '</li>';
    });
    box.querySelector('ol').innerHTML = h;
    box.querySelector('.msg').textContent = note || '';
    box.hidden = false;
  }

  function init(g, key) {
    game = g; bestKey = key;
    var url = base(); if (!url) return;
    var notes = document.querySelector('.notes'); if (!notes) return;
    css();
    box = document.createElement('div');
    box.className = 'lb'; box.hidden = true;
    box.innerHTML = '<h3>Class Top 5 <small>best score from each player</small></h3><ol></ol><div class="msg" aria-live="polite"></div>';
    notes.insertBefore(box, notes.firstChild);
    fetch(url + '/scores?game=' + encodeURIComponent(g))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { if (d && d.top) draw(d.top); })
      .catch(function () {});
  }

  function submit(g, score) {
    var url = base(); score = Math.floor(score);
    if (!url || !(score > 0)) return;
    fetch(url + '/score', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ game: g, score: score, who: who() })
    }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || !d.top) return;
        var low = d.top.length < 5 ? 0 : d.top[d.top.length - 1];
        var made = score === myBest() && d.top.indexOf(score) >= 0 && (!lastTop || lastTop.indexOf(score) < 0);
        draw(d.top, made ? 'You made the class top 5!' : (score < low ? 'Top 5 starts at ' + low.toLocaleString() + '. Keep going!' : ''));
      })
      .catch(function () {});
  }

  window.LEADERBOARD = { init: init, submit: submit };
})();
