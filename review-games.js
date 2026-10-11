/* ============================================================
   review-games.js: the shared in-page review games for a unit's Games tab.
   Exposes: APWH_GAMES.mount(rootEl, cfg)
     cfg = {
       unit: 9,
       matching:  { pairs: [{left, right}], success: 'line under the win heading' },   (optional)
       jeopardy:  [ {name, questions: [{clue, answer, explanation}] x5} ] x6,
       sortit:    [ {text, earns: bool, explain} ],
       warmup:    [ {type, sourceLine, excerpt, models: {pov, purpose, audience, hist}} ]   (optional),
       speedquiz: [ {q, o: [4], c, e} ],
       timeline:  [ {title, year} ]        (listed earliest first, distinct years),
       asteroid:  [ {q, o: [4 short], c} ]
     }
   Any game left out of cfg is simply not offered.
   Element ids (#jeop-winner, #match-success, #sortit-score, #sq-final,
   #tl-result, #ast-end) are the ones activity.js watches to credit a finished
   game toward the unit's progress ring, so mount at most one set per page,
   inside #pg-games. Used by every unit (1-9).
   Site convention: plain global, no build step, no imports.
   ============================================================ */
(function () {
  'use strict';

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function $(id) { return document.getElementById(id); }

  var BACK = 'background:none;border:none;font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--red);cursor:pointer';
  var H3 = 'font-family:Lato,system-ui,sans-serif;letter-spacing:-.02em;font-size:1.3rem;margin-bottom:6px';
  var BTN = 'font-family:Lato,system-ui,sans-serif;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer';

  var PICKS = {
    jeopardy:  ['&#128218;', 'Jeopardy', 'Team-based review game. Add teams, pick categories, and compete for points. Perfect for classroom play.'],
    matching:  ['&#129513;', 'Narrative Matching', 'Match causes to their effects and reconstruct the Unit {u} story.'],
    sortit:    ['&#9878;', 'Sort It', 'Separate sourcing sentences that earn the HAPP point from ones that don&rsquo;t.'],
    warmup:    ['&#9200;', 'Source Line Warm-up', 'One document, 60 seconds. Pick a lens, complete the sentence frame, earn the point.'],
    speedquiz: ['&#9889;', 'Speed Quiz', '{n} questions, 20 seconds each. Answer faster to earn more points. Final score and breakdown show what to review.'],
    timeline:  ['&#128337;', 'Timeline Builder', 'Click Unit {u} events from earliest to latest. Wrong picks don&rsquo;t advance.'],
    asteroid:  ['&#9654;', 'Asteroid Blaster', 'Destroy incoming asteroids by clicking the correct answer before they reach your ship. 3 lives.']
  };
  var ORDER = ['jeopardy', 'matching', 'sortit', 'warmup', 'speedquiz', 'timeline', 'asteroid'];

  function back(id) { return '<button type="button" id="' + id + '" style="' + BACK + ';margin-bottom:20px">&larr; Back to Games</button>'; }

  function shell(cfg) {
    var u = cfg.unit, h = '<div id="game-picker" class="game-picker">';
    ORDER.forEach(function (k) {
      if (!cfg[k]) return;
      var p = PICKS[k], n = k === 'speedquiz' ? cfg.speedquiz.length : '';
      h += '<div class="game-pick-card" id="pick-' + k + '" role="button" tabindex="0"><div class="game-pick-icon">' + p[0] + '</div>' +
        '<div class="game-pick-name">' + p[1] + '</div><div class="game-pick-desc">' + p[2].replace('{u}', u).replace('{n}', n) + '</div></div>';
    });
    h += '</div>';

    if (cfg.jeopardy) h +=
      '<div id="jeopardy-game" style="display:none">' + back('jeop-back') +
        '<div id="jeop-setup"><h3 style="' + H3 + ';margin-bottom:14px">Set Up Teams</h3><div id="jeop-teams" class="jeop-teams-bar"></div>' +
          '<div style="display:flex;gap:10px;margin-top:14px">' +
            '<button type="button" id="jeop-add-team" style="padding:8px 16px;background:none;border:1.5px solid var(--border2);font-size:.62rem;' + BTN + '">+ Add Team</button>' +
            '<button type="button" id="jeop-start" style="padding:8px 20px;background:var(--red);color:#fff;border:none;font-size:.62rem;' + BTN + '">Start Game</button>' +
          '</div></div>' +
        '<div id="jeop-board-wrap" style="display:none"><div id="jeop-scoreboard" class="jeop-teams-bar" style="margin-bottom:16px"></div><div id="jeop-board" class="jeop-board"></div>' +
          '<div class="jeop-end-bar">' +
            '<button type="button" id="jeop-end-game" style="padding:10px 24px;background:none;border:1.5px solid var(--red);color:var(--red);font-size:.62rem;' + BTN + '">End Game</button>' +
            '<button type="button" id="jeop-new-game" style="padding:10px 24px;background:var(--ink);color:#fff;border:none;font-size:.62rem;' + BTN + '">New Game</button>' +
          '</div></div>' +
        '<div id="jeop-winner" class="jeop-winner" style="display:none"></div>' +
      '</div>' +
      '<div id="jeop-modal" class="jeop-modal" style="display:none"><div class="jeop-modal-inner">' +
        '<div class="jeop-modal-pts" id="jeop-modal-pts"></div><div class="jeop-modal-q" id="jeop-modal-q"></div><div class="jeop-modal-answer" id="jeop-modal-answer"></div>' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center"><button type="button" class="jeop-reveal-btn" id="jeop-reveal">Reveal Answer</button></div>' +
        '<div class="jeop-award-bar" id="jeop-award-bar" style="display:none"></div>' +
      '</div></div>';

    if (cfg.matching) h +=
      '<div id="matching-game" style="display:none">' + back('match-back') +
        '<h3 style="' + H3 + '">Reconstruct the Unit ' + u + ' Narrative</h3>' +
        '<p style="font-size:.86rem;color:var(--mid);margin-bottom:20px;line-height:1.5">Match each event or cause on the left with its effect or significance on the right.</p>' +
        '<div class="match-counter" id="match-counter"></div>' +
        '<div class="match-board" id="match-board"><div class="match-col" id="match-left"></div><div class="match-col" id="match-right"></div></div>' +
        '<div class="match-success" id="match-success" style="display:none"><h3>You reconstructed the Unit ' + u + ' narrative!</h3>' +
          '<p style="font-size:.88rem;color:var(--mid);margin-bottom:20px">' + (cfg.matching.success || 'You connected all the pieces.') + '</p>' +
          '<button type="button" id="match-replay" style="padding:12px 24px;background:var(--red);color:#fff;border:none;font-size:.68rem;' + BTN + '">Play Again</button></div>' +
      '</div>';

    if (cfg.sortit) h +=
      '<div id="sortit-game" style="display:none">' + back('sortit-back') +
        '<h3 style="' + H3 + '">Does It Earn the Point?</h3>' +
        '<p style="font-size:.86rem;color:var(--mid);margin-bottom:20px;line-height:1.55">Read each sourcing sentence about a Unit ' + u + ' source. Click <strong>Earns it</strong> or <strong>Doesn&rsquo;t earn it</strong>, then submit to see answers and explanations.</p>' +
        '<div id="sortit-cards"></div>' +
        '<div style="text-align:center;margin-top:20px"><button type="button" id="sortit-submit" style="padding:12px 28px;background:var(--ink);color:#fff;border:none;font-size:.65rem;' + BTN + '">Check My Sort</button></div>' +
        '<div id="sortit-score" style="display:none;text-align:center;margin-top:20px;font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.85rem;letter-spacing:.06em"></div>' +
        '<div style="text-align:center;margin-top:16px;display:none" id="sortit-replay-bar"><button type="button" id="sortit-replay" style="padding:10px 24px;background:none;border:1.5px solid var(--ink);font-size:.62rem;' + BTN + '">Try Again</button></div>' +
      '</div>';

    if (cfg.warmup) h +=
      '<div id="warmup-game" style="display:none">' + back('warmup-back') +
        '<h3 style="' + H3 + ';margin-bottom:4px">Source Line Warm-up</h3>' +
        '<p style="font-size:.86rem;color:var(--mid);margin-bottom:14px;line-height:1.55">Read the source line. Pick a lens. Complete the sentence frame. You have 60 seconds, but keep writing even after time is up.</p>' +
        '<div id="warmup-doc-num" style="font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);text-align:center;margin-bottom:4px"></div>' +
        '<div class="warmup-timer" id="warmup-timer">1:00</div>' +
        '<div class="warmup-source-card"><div class="warmup-doc-type" id="warmup-doc-type"></div><div class="warmup-source-line" id="warmup-source-line"></div><div class="warmup-excerpt" id="warmup-excerpt"></div></div>' +
        '<div style="font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.54rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:7px">Pick a lens:</div>' +
        '<div class="warmup-lens-row" id="warmup-lens-row"></div>' +
        '<div class="warmup-frame" id="warmup-frame"><div style="font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.5rem;letter-spacing:.14em;text-transform:uppercase;color:var(--red);margin-bottom:5px">Sentence frame: fill in the blanks</div>' +
          '<div id="warmup-frame-text"></div><div style="font-size:.78rem;color:var(--mid);font-style:italic;margin-top:6px" id="warmup-frame-tip"></div></div>' +
        '<textarea id="warmup-text" class="warmup-textarea" placeholder="Write your sourcing sentence here..." aria-label="Your sourcing sentence"></textarea>' +
        '<button type="button" id="warmup-check" style="padding:10px 24px;background:var(--ink);color:#fff;border:none;font-size:.65rem;margin-top:8px;' + BTN + '">Check My Sentence</button>' +
        '<div class="warmup-result" id="warmup-result"></div>' +
        '<div class="warmup-model" id="warmup-model" style="display:none"><div class="warmup-model-lbl">Model answer:</div><div id="warmup-model-text"></div></div>' +
        '<div style="text-align:right;margin-top:18px"><button type="button" id="warmup-next" style="display:none;padding:10px 24px;background:var(--red);color:#fff;border:none;font-size:.65rem;' + BTN + '">Next Document &rarr;</button></div>' +
      '</div>';

    if (cfg.speedquiz) h +=
      '<div id="speedquiz-game" style="display:none">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px"><button type="button" id="sq-back" style="' + BACK + '">&larr; Back to Games</button><div class="sq-score-chip" id="sq-score-chip">Score: 0</div></div>' +
        '<div id="sq-question-area"><div style="display:flex;justify-content:space-between;margin-bottom:8px"><div class="sq-qnum" id="sq-qnum"></div></div>' +
          '<div class="sq-timer-bar-wrap"><div class="sq-timer-bar" id="sq-timer-bar" style="width:100%"></div></div>' +
          '<div class="sq-q-text" id="sq-q-text"></div><div class="sq-choices" id="sq-choices"></div><div class="sq-pts-flash" id="sq-pts-flash"></div><div class="sq-expl" id="sq-expl" style="display:none"></div></div>' +
        '<div id="sq-final" style="display:none;text-align:center;padding:24px 0">' +
          '<div style="font-family:Lato,system-ui,sans-serif;letter-spacing:-.02em;font-size:1.6rem;margin-bottom:6px">Quiz Complete!</div>' +
          '<div class="sq-final-score" id="sq-final-score"></div>' +
          '<div id="sq-final-correct" style="font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.72rem;letter-spacing:.08em;color:var(--muted);margin-bottom:20px"></div>' +
          '<button type="button" id="sq-replay" style="padding:12px 28px;background:var(--red);color:#fff;border:none;font-size:.65rem;' + BTN + '">Play Again</button>' +
          '<div style="max-width:640px;margin:24px auto 0" id="sq-breakdown"></div>' +
        '</div>' +
      '</div>';

    if (cfg.timeline) h +=
      '<div id="timeline-game" style="display:none">' + back('tl-back') +
        '<h3 style="' + H3 + '">Timeline Builder</h3>' +
        '<p style="font-size:.86rem;color:var(--mid);margin-bottom:16px;line-height:1.55">Click the events in order from <strong>earliest</strong> to <strong>latest</strong>. Wrong picks don&rsquo;t advance.</p>' +
        '<div style="font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);text-align:center;margin-bottom:14px" id="tl-progress"></div>' +
        '<div id="tl-wrong-msg" style="text-align:center;font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.68rem;letter-spacing:.08em;color:var(--red);min-height:20px;margin-bottom:10px"></div>' +
        '<div class="tl-pool" id="tl-pool"></div>' +
        '<div class="tl-sequence"><div class="tl-seq-lbl">Placed correctly: earliest to latest:</div><div id="tl-seq-list"></div></div>' +
        '<div id="tl-result" style="display:none"></div>' +
      '</div>';

    if (cfg.asteroid) h +=
      '<div id="asteroid-game" style="display:none">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px"><button type="button" id="ast-back" style="' + BACK + '">&larr; Back to Games</button>' +
          '<div style="font-size:.8rem;color:var(--mid)">Click the <strong>correct answer</strong> asteroid before it reaches your ship, 3 lives</div></div>' +
        '<div class="ast-hud"><div class="ast-lives" id="ast-lives"></div><div class="ast-score-hud">Score: <span id="ast-score">0</span></div></div>' +
        '<div class="ast-qbar"><div class="ast-qnum-lbl" id="ast-qnum-lbl"></div><div id="ast-question"></div></div>' +
        '<div id="asteroid-arena"><div class="ast-stars"></div><div class="ast-ship"></div><div class="ast-flash-overlay" id="ast-flash"></div>' +
          '<div class="ast-end" id="ast-end">' +
            '<div style="font-family:Lato,system-ui,sans-serif;letter-spacing:-.02em;font-size:1.5rem;margin-bottom:8px" id="ast-end-title">Game Over!</div>' +
            '<div class="ast-end-score" id="ast-end-score">0 pts</div>' +
            '<div style="font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.68rem;letter-spacing:.08em;color:#8888cc;margin-bottom:22px" id="ast-end-detail"></div>' +
            '<button type="button" id="ast-replay" style="padding:12px 28px;background:#44aaff;color:#06061a;border:none;font-size:.65rem;' + BTN + '">Play Again</button>' +
          '</div></div>' +
      '</div>';
    return h;
  }

  function mount(root, cfg) {
    if (!root || !cfg) return;
    root.innerHTML = shell(cfg);
    function showPicker(hideId) { $(hideId).style.display = 'none'; $('game-picker').style.display = 'grid'; }
    function openGame(id) { $('game-picker').style.display = 'none'; $(id).style.display = 'block'; }
    function onPick(key, fn) {
      var el = $('pick-' + key); if (!el) return;
      el.addEventListener('click', fn);
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } });
    }

    /* ── JEOPARDY ── */
    if (cfg.jeopardy) (function () {
      var DATA = cfg.jeopardy, POINTS = [200, 400, 600, 800, 1000];
      var TEAM_COLORS = ['#b0001c', '#1a237e', '#1a6825', '#e65100', '#6a1b9a', '#00695c'];
      var teams = [], used = {}, cur = null;
      function color(i) { return TEAM_COLORS[i % TEAM_COLORS.length]; }
      function renderTeamSetup() {
        var el = $('jeop-teams'); el.innerHTML = '';
        teams.forEach(function (t, i) {
          var div = document.createElement('div'); div.className = 'jeop-team';
          div.style.borderTopColor = color(i); div.style.borderTopWidth = '4px';
          div.innerHTML = '<input class="jeop-team-name" value="' + t.name.replace(/"/g, '&quot;') + '" data-ti="' + i + '" aria-label="Team name"/><div class="jeop-team-score">' + t.score + '</div>' +
            (teams.length > 1 ? '<button type="button" class="jeop-team-rm" data-ti="' + i + '" aria-label="Remove team">&times;</button>' : '');
          el.appendChild(div);
        });
        el.querySelectorAll('.jeop-team-name').forEach(function (inp) { inp.addEventListener('change', function () { teams[+this.dataset.ti].name = this.value || 'Team'; }); });
        el.querySelectorAll('.jeop-team-rm').forEach(function (b) { b.addEventListener('click', function () { teams.splice(+this.dataset.ti, 1); renderTeamSetup(); }); });
      }
      function renderScoreboard() {
        var el = $('jeop-scoreboard'); el.innerHTML = '';
        teams.forEach(function (t, i) {
          var div = document.createElement('div'); div.className = 'jeop-team';
          div.style.borderTopColor = color(i); div.style.borderTopWidth = '4px';
          div.innerHTML = '<div style="font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;color:' + color(i) + '">' + (t.name || 'Team') + '</div><div class="jeop-team-score">' + t.score + '</div>';
          el.appendChild(div);
        });
      }
      function renderBoard() {
        var el = $('jeop-board'); el.innerHTML = ''; el.style.setProperty('--jcols', DATA.length);
        DATA.forEach(function (cat) { var hdr = document.createElement('div'); hdr.className = 'jeop-cat'; hdr.textContent = cat.name; el.appendChild(hdr); });
        POINTS.forEach(function (pts, row) {
          DATA.forEach(function (cat, col) {
            var b = document.createElement('button'); b.type = 'button'; b.className = 'jeop-cell'; b.textContent = pts;
            if (used[col + '_' + row]) b.classList.add('used');
            else b.addEventListener('click', function () { openQ(col, row, pts); });
            el.appendChild(b);
          });
        });
      }
      function openQ(col, row, pts) {
        var q = DATA[col].questions[row]; cur = { col: col, row: row, pts: pts };
        $('jeop-modal-pts').textContent = DATA[col].name + ': ' + pts + ' pts';
        $('jeop-modal-q').textContent = q.clue;
        var a = $('jeop-modal-answer');
        a.innerHTML = '<strong>Answer:</strong> ' + q.answer + (q.explanation ? '<br><span style="font-size:.88rem;color:#555">' + q.explanation + '</span>' : '');
        a.classList.remove('show');
        $('jeop-reveal').style.display = '';
        $('jeop-award-bar').style.display = 'none';
        $('jeop-modal').style.display = 'flex';
      }
      $('jeop-reveal').addEventListener('click', function () {
        $('jeop-modal-answer').classList.add('show'); this.style.display = 'none';
        var bar = $('jeop-award-bar'); bar.style.display = 'flex'; bar.innerHTML = '';
        teams.forEach(function (t, i) {
          var b = document.createElement('button'); b.type = 'button'; b.className = 'jeop-award-btn';
          b.style.background = color(i); b.textContent = t.name || 'Team ' + (i + 1);
          b.addEventListener('click', function () { award(i); }); bar.appendChild(b);
        });
        var no = document.createElement('button'); no.type = 'button'; no.className = 'jeop-award-btn no-pts'; no.textContent = 'No Points';
        no.addEventListener('click', function () { award(-1); }); bar.appendChild(no);
      });
      function award(ti) {
        if (!cur) return;
        if (ti >= 0) teams[ti].score += cur.pts;
        used[cur.col + '_' + cur.row] = true; cur = null;
        $('jeop-modal').style.display = 'none';
        renderBoard(); renderScoreboard();
        if (Object.keys(used).length >= DATA.length * POINTS.length) winner();
      }
      function winner() {
        var s = teams.slice().sort(function (a, b) { return b.score - a.score; });
        $('jeop-winner').innerHTML = '<h3>&#127942; ' + (s[0].name || 'Team') + ' Wins!</h3><p style="font-size:1.2rem;color:var(--mid);margin-bottom:20px">' + s[0].score + ' points</p><div style="font-size:.9rem;color:var(--mid)">' +
          s.map(function (t, i) { return '<div style="margin-bottom:4px">' + (i + 1) + '. ' + t.name + ': ' + t.score + ' pts</div>'; }).join('') + '</div>';
        $('jeop-board-wrap').style.display = 'none'; $('jeop-winner').style.display = 'block';
      }
      $('jeop-add-team').addEventListener('click', function () { if (teams.length >= 6) return; teams.push({ name: 'Team ' + (teams.length + 1), score: 0 }); renderTeamSetup(); });
      $('jeop-start').addEventListener('click', function () {
        used = {};
        $('jeop-setup').style.display = 'none'; $('jeop-board-wrap').style.display = 'block'; $('jeop-winner').style.display = 'none';
        renderBoard(); renderScoreboard();
      });
      $('jeop-end-game').addEventListener('click', winner);
      $('jeop-new-game').addEventListener('click', function () {
        teams.forEach(function (t) { t.score = 0; }); used = {};
        $('jeop-board-wrap').style.display = 'none'; $('jeop-winner').style.display = 'none'; $('jeop-setup').style.display = 'block';
        renderTeamSetup();
      });
      onPick('jeopardy', function () {
        openGame('jeopardy-game');
        if (!teams.length) teams = [{ name: 'Team 1', score: 0 }, { name: 'Team 2', score: 0 }];
        renderTeamSetup();
      });
      $('jeop-back').addEventListener('click', function () {
        teams = []; used = {}; cur = null;
        $('jeop-setup').style.display = 'block'; $('jeop-board-wrap').style.display = 'none'; $('jeop-winner').style.display = 'none';
        showPicker('jeopardy-game');
      });
    })();

    /* ── NARRATIVE MATCHING ── */
    if (cfg.matching) (function () {
      var PAIRS = cfg.matching.pairs, sel = { left: null, right: null }, matched = {};
      function count() { $('match-counter').textContent = Object.keys(matched).length + ' of ' + PAIRS.length + ' matched'; }
      function render() {
        sel = { left: null, right: null }; matched = {};
        var L = $('match-left'), R = $('match-right');
        L.innerHTML = '<div class="match-col-hdr">Cause / Event</div>';
        R.innerHTML = '<div class="match-col-hdr">Effect / Significance</div>';
        $('match-success').style.display = 'none'; $('match-board').style.display = 'flex';
        [['left', L], ['right', R]].forEach(function (s) {
          shuffle(PAIRS.map(function (_, i) { return i; })).forEach(function (idx) {
            var c = document.createElement('div'); c.className = 'match-card'; c.textContent = PAIRS[idx][s[0]];
            c.dataset.idx = idx; c.dataset.side = s[0]; s[1].appendChild(c);
          });
        });
        count();
      }
      $('match-board').addEventListener('click', function (e) {
        var card = e.target.closest('.match-card'); if (!card || card.classList.contains('matched')) return;
        var side = card.dataset.side;
        document.querySelectorAll('#match-' + side + ' .match-card.selected').forEach(function (x) { x.classList.remove('selected'); });
        card.classList.add('selected'); sel[side] = card;
        if (sel.left && sel.right) {
          var l = sel.left, r = sel.right;
          if (l.dataset.idx === r.dataset.idx) {
            l.classList.remove('selected'); r.classList.remove('selected'); l.classList.add('matched'); r.classList.add('matched');
            matched[l.dataset.idx] = true; count();
            if (Object.keys(matched).length >= PAIRS.length) { $('match-board').style.display = 'none'; $('match-success').style.display = 'block'; }
          } else {
            l.classList.add('wrong'); r.classList.add('wrong');
            setTimeout(function () { l.classList.remove('wrong', 'selected'); r.classList.remove('wrong', 'selected'); }, 420);
          }
          sel = { left: null, right: null };
        }
      });
      onPick('matching', function () { openGame('matching-game'); render(); });
      $('match-back').addEventListener('click', function () { showPicker('matching-game'); });
      $('match-replay').addEventListener('click', render);
    })();

    /* ── SORT IT ── */
    if (cfg.sortit) (function () {
      var DATA = cfg.sortit;
      function render() {
        var box = $('sortit-cards'); box.innerHTML = '';
        $('sortit-score').style.display = 'none'; $('sortit-replay-bar').style.display = 'none';
        DATA.forEach(function (item, i) {
          var card = document.createElement('div'); card.className = 'sortit-card'; card.dataset.choice = '';
          card.innerHTML = '<div class="sortit-card-text">' + (i + 1) + '. ' + item.text + '</div>' +
            '<div class="sortit-btn-row"><button type="button" class="sortit-btn" data-choice="earns">Earns it</button><button type="button" class="sortit-btn" data-choice="nope">Doesn&rsquo;t earn it</button></div>' +
            '<div class="sortit-explain">' + item.explain + '</div>';
          card.querySelectorAll('.sortit-btn').forEach(function (b) {
            b.addEventListener('click', function () {
              card.querySelectorAll('.sortit-btn').forEach(function (x) { x.classList.remove('earns', 'nope'); });
              this.classList.add(this.dataset.choice); card.dataset.choice = this.dataset.choice;
            });
          });
          box.appendChild(card);
        });
      }
      $('sortit-submit').addEventListener('click', function () {
        var correct = 0;
        document.querySelectorAll('#sortit-cards .sortit-card').forEach(function (card, i) {
          var ch = card.dataset.choice, ok = (ch === 'earns' && DATA[i].earns) || (ch === 'nope' && !DATA[i].earns);
          if (ok) correct++;
          card.classList.add(ok ? 'revealed-correct' : 'revealed-wrong');
          card.querySelectorAll('.sortit-btn').forEach(function (b) { b.disabled = true; });
        });
        $('sortit-score').style.display = 'block';
        $('sortit-score').textContent = correct + ' / ' + DATA.length + ' correct';
        $('sortit-replay-bar').style.display = 'block';
      });
      onPick('sortit', function () { openGame('sortit-game'); render(); });
      $('sortit-back').addEventListener('click', function () { showPicker('sortit-game'); });
      $('sortit-replay').addEventListener('click', render);
    })();

    /* ── SOURCE LINE WARM-UP ── */
    if (cfg.warmup) (function () {
      var DOCS = cfg.warmup, idx = 0, timer = null, secs = 60, lens = 'pov';
      var LENSES = [['pov', 'Point of View'], ['purpose', 'Purpose'], ['audience', 'Audience'], ['hist', 'Historical Situation']];
      var FRAMES = {
        pov: ['&ldquo;The <strong>point of view</strong> of this document is [<em>author&rsquo;s background, role, or identity</em>], <strong>which means</strong> the source likely [<em>emphasizes or omits X: connect to your argument</em>].&rdquo;',
              'Ask: what does this author&rsquo;s identity or position make them likely to include, avoid, or argue?'],
        purpose: ['&ldquo;The <strong>purpose</strong> of this document was to [<em>specific goal</em>] [<em>specific audience</em>], <strong>which means</strong> the source [<em>overstates / downplays / frames X, connect to your argument</em>].&rdquo;',
              'Ask: why was this created, and how does that goal shape what it says or omits?'],
        audience: ['&ldquo;Because this document was written for [<em>specific audience</em>], the source [<em>emphasizes / avoids X</em>], <strong>which means</strong> it [<em>consequence for your argument</em>].&rdquo;',
              'Ask: who was this meant to reach, and what did that audience need, or not need, to hear?'],
        hist: ['&ldquo;This document was produced during [<em>specific historical moment</em>], <strong>which means</strong> [<em>that context shaped the source because, connect to your argument</em>].&rdquo;',
              'Ask: what was happening when this was created, and how does that context explain what the source says?']
      };
      function tick() {
        var s = Math.max(0, secs), el = $('warmup-timer');
        el.textContent = Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60);
        el.classList.toggle('urgent', s <= 10);
      }
      function startTimer() {
        clearInterval(timer); secs = 60; tick();
        timer = setInterval(function () { secs--; tick(); if (secs <= 0) clearInterval(timer); }, 1000);
      }
      function frame() { $('warmup-frame-text').innerHTML = FRAMES[lens][0]; $('warmup-frame-tip').innerHTML = FRAMES[lens][1]; }
      function load(i) {
        var d = DOCS[i];
        $('warmup-doc-num').textContent = 'Document ' + (i + 1) + ' of ' + DOCS.length;
        $('warmup-doc-type').textContent = d.type;
        $('warmup-source-line').textContent = d.sourceLine;
        $('warmup-excerpt').textContent = '“' + d.excerpt + '”';
        $('warmup-text').value = '';
        $('warmup-result').innerHTML = ''; $('warmup-result').className = 'warmup-result';
        $('warmup-model').style.display = 'none'; $('warmup-next').style.display = 'none';
        lens = 'pov';
        $('warmup-lens-row').innerHTML = LENSES.map(function (l) {
          return '<button type="button" class="warmup-lens-btn' + (l[0] === lens ? ' active' : '') + '" data-wlens="' + l[0] + '">' + l[1] + '</button>';
        }).join('');
        frame(); startTimer();
      }
      $('warmup-lens-row').addEventListener('click', function (e) {
        var b = e.target.closest('.warmup-lens-btn'); if (!b) return;
        this.querySelectorAll('.warmup-lens-btn').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active'); lens = b.dataset.wlens; frame();
      });
      $('warmup-check').addEventListener('click', function () {
        clearInterval(timer);
        var t = $('warmup-text').value.toLowerCase().trim(), words = t.split(/\s+/).filter(Boolean).length;
        var feature = /point of view|purpose|audience|historical situation|which means|because|since|as a|written by|produced by|official|government|military|newspaper|photographer|advertisement/.test(t);
        var consequence = /which means|therefore|so that|in order to|making it|making this|supports the|supporting|evidence that|suggests that|means that|this means/.test(t);
        var r = $('warmup-result'), kind, msg;
        if (words < 8) { kind = 'fail'; msg = '<span class="dr-icon">&#10007;</span><div><strong>Too short.</strong> Write a complete sentence: name the source feature, then explain the consequence with &ldquo;which means.&rdquo;</div>'; }
        else if (feature && consequence) { kind = 'pass'; msg = '<span class="dr-icon">&#10003;</span><div><strong>Likely earns the point.</strong> You named a source feature and used consequence language. Check the model answer to see if your explanation connects clearly to an argument.</div>'; }
        else if (feature) { kind = 'partial'; msg = '<span class="dr-icon">&#126;</span><div><strong>Identifies, but needs a consequence.</strong> You named a source feature. Now add the &ldquo;which means&rdquo; move: what does the source likely emphasize, omit, or argue <em>because</em> of that feature?</div>'; }
        else { kind = 'fail'; msg = '<span class="dr-icon">&#10007;</span><div><strong>No HAPP feature identified.</strong> Start by naming something specific about the source: its author&rsquo;s role, its purpose, who it was written for, or the historical moment it came from. Then use &ldquo;which means&rdquo; to connect it to your argument.</div>'; }
        r.innerHTML = msg; r.className = 'warmup-result ' + kind;
        var m = DOCS[idx].models || {};
        $('warmup-model-text').textContent = m[lens] || m.pov || '';
        $('warmup-model').style.display = 'block';
        if (idx < DOCS.length - 1) $('warmup-next').style.display = 'inline-block';
      });
      $('warmup-next').addEventListener('click', function () { idx++; load(idx); });
      onPick('warmup', function () {
        openGame('warmup-game');
        // Reopen at the first document not yet answered (saved by activity.js); start over once all are done.
        var doneLines = (window.APWH_ACTIVITY && APWH_ACTIVITY.saved) ? APWH_ACTIVITY.saved('warmup') : [];
        idx = 0;
        while (idx < DOCS.length && doneLines.indexOf(DOCS[idx].sourceLine.trim().slice(0, 120)) >= 0) idx++;
        if (idx >= DOCS.length) idx = 0;
        load(idx);
      });
      $('warmup-back').addEventListener('click', function () { clearInterval(timer); showPicker('warmup-game'); });
    })();

    /* ── SPEED QUIZ ── */
    if (cfg.speedquiz) (function () {
      var DATA = cfg.speedquiz, idx = 0, score = 0, right = 0, timer = null, nextT = null, left = 0, answered = false, results = [];
      function start() {
        clearInterval(timer); clearTimeout(nextT);
        idx = 0; score = 0; right = 0; results = [];
        $('sq-final').style.display = 'none'; $('sq-question-area').style.display = 'block';
        $('sq-score-chip').textContent = 'Score: 0';
        render();
      }
      function render() {
        if (idx >= DATA.length) { end(); return; }
        answered = false; left = 20;
        var q = DATA[idx];
        $('sq-qnum').textContent = 'Question ' + (idx + 1) + ' of ' + DATA.length;
        $('sq-q-text').textContent = q.q;
        $('sq-pts-flash').textContent = '';
        $('sq-expl').style.display = 'none';
        var box = $('sq-choices'); box.innerHTML = '';
        q.o.forEach(function (opt, j) {
          var b = document.createElement('button'); b.type = 'button'; b.className = 'sq-choice'; b.textContent = opt;
          b.addEventListener('click', function () { answer(j); }); box.appendChild(b);
        });
        clearInterval(timer);
        $('sq-timer-bar').style.width = '100%';
        timer = setInterval(function () {
          left--;
          $('sq-timer-bar').style.width = (left / 20 * 100) + '%';
          if (left <= 0) { clearInterval(timer); answer(-1); }
        }, 1000);
      }
      function answer(j) {
        if (answered) return; answered = true; clearInterval(timer);
        var q = DATA[idx], ok = (j === q.c);
        if (ok) { var pts = Math.max(50, Math.round(left / 20 * 500)); score += pts; right++; $('sq-pts-flash').textContent = '+' + pts + ' pts'; }
        else $('sq-pts-flash').textContent = j === -1 ? 'Time’s up!' : 'Wrong';
        $('sq-score-chip').textContent = 'Score: ' + score;
        document.querySelectorAll('#sq-choices .sq-choice').forEach(function (b, i) {
          b.disabled = true;
          if (i === q.c) b.classList.add('sq-correct');
          if (i === j && j !== q.c) b.classList.add('sq-wrong');
        });
        $('sq-expl').textContent = q.e; $('sq-expl').style.display = 'block';
        results.push({ q: q.q, correct: ok, answer: q.o[q.c] });
        idx++;
        nextT = setTimeout(render, 2200);
      }
      function end() {
        $('sq-question-area').style.display = 'none'; $('sq-final').style.display = 'block';
        $('sq-final-score').textContent = score + ' pts';
        $('sq-final-correct').textContent = right + ' / ' + DATA.length + ' correct';
        var bd = $('sq-breakdown'); bd.innerHTML = '';
        results.forEach(function (r) {
          var row = document.createElement('div'); row.className = 'sq-bk-row';
          row.innerHTML = '<div class="sq-bk-icon">' + (r.correct ? '&#10003;' : '&#10007;') + '</div><div><strong>' + r.q + '</strong><div style="color:var(--muted);margin-top:2px">' + r.answer + '</div></div>';
          bd.appendChild(row);
        });
      }
      onPick('speedquiz', function () { openGame('speedquiz-game'); start(); });
      $('sq-back').addEventListener('click', function () { clearInterval(timer); clearTimeout(nextT); showPicker('speedquiz-game'); });
      $('sq-replay').addEventListener('click', start);
    })();

    /* ── TIMELINE BUILDER ── */
    if (cfg.timeline) (function () {
      var DATA = cfg.timeline.slice().sort(function (a, b) { return a.year - b.year; }), placed = 0;
      function render() {
        placed = 0;
        $('tl-pool').innerHTML = ''; $('tl-seq-list').innerHTML = '';
        $('tl-result').style.display = 'none'; $('tl-wrong-msg').textContent = '';
        $('tl-progress').textContent = '0 of ' + DATA.length + ' placed correctly';
        shuffle(DATA).forEach(function (ev) {
          var c = document.createElement('div'); c.className = 'tl-card'; c.dataset.year = ev.year; c.dataset.title = ev.title;
          c.innerHTML = '<div class="tl-card-title">' + ev.title + '</div>';
          c.addEventListener('click', function () { pick(this); }); $('tl-pool').appendChild(c);
        });
      }
      function pick(card) {
        if (card.classList.contains('tl-placed') || placed >= DATA.length) return;
        var year = +card.dataset.year;
        if (year === DATA[placed].year) {
          card.classList.add('tl-placed');
          var item = document.createElement('div'); item.className = 'tl-seq-item';
          item.innerHTML = '<span class="tl-seq-num">' + (placed + 1) + '.</span><span>' + card.dataset.title + ' (' + (DATA[placed].label || year) + ')</span>';
          $('tl-seq-list').appendChild(item);
          placed++;
          $('tl-progress').textContent = placed + ' of ' + DATA.length + ' placed correctly';
          $('tl-wrong-msg').textContent = '';
          if (placed >= DATA.length) {
            $('tl-result').innerHTML = '<div style="text-align:center;padding:20px;background:#e8f5e9;border:1px solid #1a6825"><strong style="font-family:Lato,system-ui,sans-serif;letter-spacing:-.02em;font-size:1.2rem">Perfect timeline!</strong><br><span style="font-size:.84rem;color:var(--mid)">You placed all ' + DATA.length + ' events in order.</span><br>' +
              '<button type="button" id="tl-replay-btn" style="margin-top:14px;padding:10px 24px;background:var(--red);color:#fff;border:none;font-size:.62rem;' + BTN + '">Play Again</button></div>';
            $('tl-result').style.display = 'block';
            $('tl-replay-btn').addEventListener('click', render);
          }
        } else {
          card.classList.add('tl-wrong-anim');
          $('tl-wrong-msg').textContent = 'Not quite: find the next earliest event.';
          setTimeout(function () { card.classList.remove('tl-wrong-anim'); }, 420);
        }
      }
      onPick('timeline', function () { openGame('timeline-game'); render(); });
      $('tl-back').addEventListener('click', function () { showPicker('timeline-game'); });
    })();

    /* ── ASTEROID BLASTER ── */
    if (cfg.asteroid) (function () {
      var QS = cfg.asteroid, order = QS, score = 0, lives = 3, qi = 0, answered = false, rocks = [], raf = null, SHIP_Y = 0.82;
      function start() {
        score = 0; lives = 3; qi = 0; answered = false; order = shuffle(QS);
        $('ast-end').classList.remove('show'); hud(); next();
      }
      function hud() {
        var h = ''; for (var i = 0; i < 3; i++) h += (i < lives ? '♥' : '♡') + ' ';
        $('ast-lives').textContent = h.trim(); $('ast-score').textContent = score;
      }
      function clear() { cancelAnimationFrame(raf); rocks.forEach(function (a) { if (a.el.parentNode) a.el.parentNode.removeChild(a.el); }); rocks = []; }
      function next() {
        clear();
        if (qi >= order.length) { end('You cleared all questions!'); return; }
        answered = false;
        var item = order[qi], arena = $('asteroid-arena'), W = arena.clientWidth, H = arena.clientHeight;
        $('ast-qnum-lbl').textContent = 'Question ' + (qi + 1) + ' of ' + order.length;
        $('ast-question').textContent = item.q;
        var spawn = [{ x: W * 0.15, y: -60 }, { x: W * 0.85, y: -60 }, { x: -70, y: H * 0.35 }, { x: W + 70, y: H * 0.35 }];
        item.o.forEach(function (opt, i) {
          var sp = spawn[i], el = document.createElement('div'); el.className = 'asteroid'; el.textContent = opt;
          var rot = Math.random() * 360;
          el.style.cssText = 'left:' + sp.x + 'px;top:' + sp.y + 'px;transform:translate(-50%,-50%) rotate(' + rot + 'deg)';
          var ok = i === item.c;
          el.addEventListener('click', function () { hit(ok, el); });
          arena.appendChild(el);
          rocks.push({ el: el, x: sp.x, y: sp.y, rot: rot, spin: (Math.random() - 0.5) * 1.2, correct: ok, speed: 0.55 + Math.random() * 0.25 });
        });
        raf = requestAnimationFrame(loop);
      }
      function loop() {
        if (answered) return;
        var arena = $('asteroid-arena'), cx = arena.clientWidth / 2, cy = arena.clientHeight * SHIP_Y, reached = false;
        rocks.forEach(function (a) {
          var dx = cx - a.x, dy = cy - a.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 55) { reached = true; return; }
          a.x += dx / d * a.speed; a.y += dy / d * a.speed; a.rot += a.spin;
          a.el.style.left = a.x + 'px'; a.el.style.top = a.y + 'px';
          a.el.style.transform = 'translate(-50%,-50%) rotate(' + a.rot + 'deg)';
        });
        if (reached) hit(false, null); else raf = requestAnimationFrame(loop);
      }
      function hit(ok, el) {
        if (answered) return; answered = true; cancelAnimationFrame(raf);
        if (ok) {
          score += 100; hud();
          if (el) el.classList.add('ast-correct');
          setTimeout(function () { qi++; next(); }, 600);
        } else {
          lives--; hud();
          rocks.forEach(function (a) { if (!a.correct) a.el.classList.add('ast-wrong'); });
          var f = $('ast-flash'); f.style.background = 'rgba(255,80,80,.35)'; f.style.opacity = '1';
          setTimeout(function () { f.style.opacity = '0'; }, 300);
          if (lives <= 0) setTimeout(function () { end('Game Over!'); }, 800);
          else setTimeout(function () { qi++; next(); }, 900);
        }
      }
      function end(title) {
        clear();
        $('ast-end-title').textContent = title;
        $('ast-end-score').textContent = score + ' pts';
        $('ast-end-detail').textContent = qi + ' of ' + order.length + ' questions answered';
        $('ast-end').classList.add('show');
      }
      onPick('asteroid', function () { openGame('asteroid-game'); start(); });
      $('ast-back').addEventListener('click', function () { answered = true; clear(); showPicker('asteroid-game'); });
      $('ast-replay').addEventListener('click', start);
    })();
  }

  window.APWH_GAMES = { mount: mount };
})();
