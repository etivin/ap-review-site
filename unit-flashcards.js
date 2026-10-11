/* unit-flashcards.js: every unit's Flashcards tab, in the Flashcard Hub's
   layout (flashcards.html). Mounts into <div class="ufc-mount" data-unit="N">.
   Cards come from flashcard-data.js (FC_DATA); tags from flashcard-tags.js
   when it is loaded. Ratings go through SPACED.recordReview with the same
   ids the hub uses (u{unit}_fc_{slug}, rv_ for the reverse side), so a card
   rated here is scheduled in the hub too and counts toward unit progress. */
(function () {
  'use strict';
  var THINK_SEC = 10;
  var BOX_DAYS = (window.SPACED && SPACED.boxIntervals) || { 1: 1, 2: 3, 3: 7, 4: 14 };
  var THEMES = { G: 'Governance', E: 'Economic', S: 'Social', C: 'Cultural', T: 'Technology', N: 'Environment' };
  var REGIONS = { EA: 'East Asia', SA: 'South Asia', SEA: 'Southeast Asia', ME: 'Middle East', AF: 'Africa', EU: 'Europe', AM: 'Americas', CA: 'Central Asia', GL: 'Global' };
  var TOPIC_NAMES = {
    '1.1': 'Song China', '1.2': 'Dar al-Islam', '1.3': 'South & SE Asia', '1.4': 'The Americas', '1.5': 'Africa', '1.6': 'Medieval Europe',
    '2.1': 'Silk Roads', '2.2': 'The Mongols', '2.3': 'Indian Ocean', '2.4': 'Trans-Saharan', '2.5': 'Cultural Effects', '2.6': 'Environmental Effects',
    '3.1': 'Empires Expand', '3.2': 'Administration', '3.3': 'Belief Systems', '3.4': 'Comparison',
    '4.1': 'Technological Innovations', '4.2': 'Exploration', '4.3': 'Columbian Exchange', '4.4': 'Maritime Empires Established', '4.5': 'Maritime Empires Maintained', '4.6': 'Challenges to State Power', '4.7': 'Social Hierarchies', '4.8': 'Continuity & Change',
    '5.1': 'The Enlightenment', '5.2': 'Nationalism & Revolutions', '5.3': 'Industrial Revolution Begins', '5.4': 'Industrialization Spreads', '5.5': 'Technology of the Industrial Age', '5.6': "Government's Role", '5.7': 'Economic Developments', '5.8': 'Reactions to Industrialization', '5.9': 'Society & the Industrial Age', '5.10': 'Continuity & Change',
    '6.1': 'Rationales', '6.2': 'Expansion', '6.3': 'Responses', '6.4': 'Economy', '6.5': 'Economic Imperialism', '6.6': 'Migration Causes', '6.7': 'Migration Effects', '6.8': 'Causation',
    '7.1': 'Shifting Power', '7.2': 'Causes of WWI', '7.3': 'Conducting WWI', '7.4': 'Interwar Economy', '7.5': 'Resistance & Nationalism', '7.6': 'Causes of WWII', '7.7': 'Mass Atrocities', '7.8': 'Propaganda',
    '8.1': 'Origins of the Cold War', '8.2': 'The Cold War', '8.3': 'Effects of the Cold War', '8.4': 'Spread of Communism', '8.5': 'Decolonization', '8.6': 'Newly Independent States', '8.7': 'Global Resistance', '8.8': 'End of the Cold War',
    '9.1': 'Technology & Exchange', '9.2': 'Disease & Medicine', '9.3': 'The Environment', '9.4': 'Economics in the Global Age', '9.5': 'Calls for Reform', '9.6': 'Globalized Culture', '9.7': 'Resistance to Globalization', '9.8': 'Global Institutions'
  };
  var MODES = [['all', 'Whole deck'], ['daily', 'Due + new'], ['weak', 'Weak cards']];
  var SKEY = 'ufc_v1';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function slug(s) { return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 48); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function plural(n, w) { return n + ' ' + w + (n === 1 ? '' : 's'); }
  function daysLabel(d) { return d <= 1 ? 'tomorrow' : 'in ' + d + ' days'; }
  function topicSort(a, b) { var x = a.split('.'), y = b.split('.'); return (x[0] - y[0]) || (x[1] - y[1]); }

  function mount(root) {
    var unit = +root.getAttribute('data-unit');
    var rows = (window.FC_DATA || {})[unit] || [];
    var tags = window.FC_TAGS || {};
    var CARDS = rows.map(function (r) {
      var tg = (tags[r[1]] || '').split(' ');
      return { topic: r[0], term: r[1], def: r[2], key: 'u' + unit + '_fc_' + slug(r[1]),
        themes: (tg[0] || '').split('').filter(function (t) { return THEMES[t]; }), regions: tg[1] ? tg[1].split(',') : [] };
    });
    var deckName = 'Unit ' + unit + ((window.FC_UNITS || {})[unit] ? ': ' + FC_UNITS[unit] : '');

    var prefs = { mode: 'all', dir: 'fwd', order: 'shuffle', topic: 'all' };
    try { var sv = JSON.parse(localStorage.getItem(SKEY) || 'null'); if (sv) ['mode', 'dir', 'order'].forEach(function (k) { if (sv[k]) prefs[k] = sv[k]; }); } catch (e) {}
    function savePrefs() { try { localStorage.setItem(SKEY, JSON.stringify({ mode: prefs.mode, dir: prefs.dir, order: prefs.order })); } catch (e) {} }

    var SP = {};
    function refreshStore() { try { SP = (JSON.parse(localStorage.getItem('apReview_v1') || '{}').spaced) || {}; } catch (e) { SP = {}; } }
    function cardId(c) { return prefs.dir === 'rev' ? 'rv_' + c.key : c.key; }
    function itemOf(c) { return SP[cardId(c)] || null; }
    function isDue(c) { var it = itemOf(c); return !!(it && it.nextDue && new Date(it.nextDue).getTime() <= Date.now()); }
    function isWeak(c) {
      var it = itemOf(c), h = it && it.reviewHistory;
      if (!h || !h.length) return false;
      var last = h[h.length - 1];
      return !last.correct || last.confidence === 'shaky';
    }

    /* ---------- layout ---------- */
    var topics = [], tcount = {};
    CARDS.forEach(function (c) { if (!tcount[c.topic]) { tcount[c.topic] = 0; topics.push(c.topic); } tcount[c.topic]++; });
    topics.sort(topicSort);
    function seg(id, opts) {
      return '<div class="ufc-seg" data-set="' + id + '">' + opts.map(function (o) { return '<button type="button" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>';
    }
    root.innerHTML =
      '<div class="ufc">' +
        '<div class="ufc-settings">' +
          '<div class="ufc-set"><span class="ufc-set-label">Cards</span>' + seg('mode', MODES) + '</div>' +
          '<div class="ufc-set"><span class="ufc-set-label">Card side</span>' + seg('dir', [['fwd', 'Term &rarr; Definition'], ['rev', 'Definition &rarr; Term']]) + '</div>' +
          '<div class="ufc-set"><span class="ufc-set-label">Order</span>' + seg('order', [['shuffle', 'Shuffled'], ['course', 'In order']]) + '</div>' +
          '<a class="ufc-hublink" href="flashcards.html#u' + unit + '">Flashcard Hub &rarr;</a>' +
          '<div class="ufc-topics" data-role="topics"></div>' +
        '</div>' +
        '<div class="ufc-empty" data-role="empty" style="display:none"></div>' +
        '<div class="ufc-live">' +
          '<div class="ufc-top">' +
            '<div class="ufc-deck" data-role="deck"></div>' +
            '<div class="ufc-counts">' +
              '<span class="c-new" data-role="c-new">0<small>New</small></span>' +
              '<span class="c-again" data-role="c-again">0<small>Again</small></span>' +
              '<span class="c-due" data-role="c-due">0<small>Review</small></span>' +
            '</div>' +
            '<button type="button" class="ufc-btn ghost" data-act="restart">&#8635; Restart</button>' +
          '</div>' +
          '<div class="ufc-prog"><i data-role="prog"></i></div>' +
          '<div class="ufc-card" data-role="card">' +
            '<div class="ufc-meta"><span class="ufc-where" data-role="where"></span><span class="ufc-kind" data-role="kind"></span></div>' +
            '<div class="ufc-q" data-role="q"></div>' +
            '<div class="ufc-a" data-role="a"></div>' +
          '</div>' +
          '<div class="ufc-actions">' +
            '<button type="button" class="ufc-btn big ufc-show" data-act="show">Show answer</button>' +
            '<div class="ufc-rate">' +
              '<button type="button" class="ufc-rbtn r-g" data-r="guessing"><b>Guessing<kbd>1</kbd></b><small data-role="iv-g"></small></button>' +
              '<button type="button" class="ufc-rbtn r-s" data-r="shaky"><b>Shaky<kbd>2</kbd></b><small data-role="iv-s"></small></button>' +
              '<button type="button" class="ufc-rbtn r-c" data-r="confident"><b>Confident<kbd>3</kbd></b><small data-role="iv-c"></small></button>' +
            '</div>' +
          '</div>' +
          '<div class="ufc-keys"><kbd>Space</kbd> show answer &middot; <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> rate</div>' +
        '</div>' +
        '<div class="ufc-done" data-role="done"></div>' +
      '</div>';
    var box = root.querySelector('.ufc');
    function $(role) { return root.querySelector('[data-role="' + role + '"]'); }

    function renderSettings() {
      Array.prototype.forEach.call(root.querySelectorAll('.ufc-seg'), function (s) {
        var k = s.getAttribute('data-set');
        Array.prototype.forEach.call(s.children, function (b) { b.classList.toggle('on', b.getAttribute('data-v') === prefs[k]); });
      });
      var h = '<button type="button" class="ufc-chip' + (prefs.topic === 'all' ? ' on' : '') + '" data-topic="all">All topics<small>' + CARDS.length + '</small></button>';
      topics.forEach(function (t) {
        h += '<button type="button" class="ufc-chip' + (prefs.topic === t ? ' on' : '') + '" data-topic="' + t + '">' + t + (TOPIC_NAMES[t] ? ': ' + esc(TOPIC_NAMES[t]) : '') + '<small>' + tcount[t] + '</small></button>';
      });
      $('topics').innerHTML = h;
    }

    /* ---------- session ---------- */
    var S = null, thinkTimer = null;
    function pool() { return CARDS.filter(function (c) { return prefs.topic === 'all' || c.topic === prefs.topic; }); }
    function buildQueue() {
      refreshStore();
      var p = pool(), q;
      if (prefs.mode === 'weak') q = p.filter(isWeak);
      else if (prefs.mode === 'daily') {
        var due = p.filter(isDue), fresh = p.filter(function (c) { return !itemOf(c); });
        q = shuffle(due).concat(prefs.order === 'shuffle' ? shuffle(fresh).slice(0, 10) : fresh.slice(0, 10));
      } else q = p.slice();
      if (prefs.order === 'shuffle' && prefs.mode !== 'daily') shuffle(q);
      return q;
    }
    function emptyMsg() {
      if (prefs.mode === 'weak') return 'No weak cards here yet. A card lands on this list when you rate it Shaky or Guessing.';
      if (prefs.mode === 'daily') return 'Nothing is due and no new cards are left in this set. Switch to Whole deck to keep practicing.';
      return 'No cards in this set.';
    }
    function start() {
      clearInterval(thinkTimer);
      var q = buildQueue();
      box.classList.remove('finished');
      var empty = $('empty');
      if (!q.length) {
        S = null;
        empty.textContent = emptyMsg(); empty.style.display = 'block';
        root.querySelector('.ufc-live').style.display = 'none';
        return;
      }
      empty.style.display = 'none';
      root.querySelector('.ufc-live').style.display = '';
      var tName = prefs.topic === 'all' ? deckName : 'Topic ' + prefs.topic + (TOPIC_NAMES[prefs.topic] ? ': ' + TOPIC_NAMES[prefs.topic] : '');
      S = { name: tName, queue: q, done: 0, rated: {}, tally: { confident: 0, shaky: 0, guessing: 0 }, startMs: Date.now(), cur: null, revealed: false, locked: true };
      nextCard();
    }
    function counts() {
      var n = 0, d = 0, a = 0;
      S.queue.forEach(function (c) { if (c._again) a++; else if (!itemOf(c)) n++; else d++; });
      if (S.cur) { if (S.cur._again) a++; else if (!itemOf(S.cur)) n++; else d++; }
      $('c-new').innerHTML = n + '<small>New</small>';
      $('c-again').innerHTML = a + '<small>Again</small>';
      $('c-due').innerHTML = d + '<small>Review</small>';
      $('prog').style.width = Math.round(100 * S.done / Math.max(1, S.done + S.queue.length + 1)) + '%';
    }
    function tagsHTML(c) {
      return '<div class="ufc-tags"><span class="ufc-tag">Topic ' + esc(c.topic) + '</span>' +
        c.themes.map(function (t) { return '<span class="ufc-tag th">' + THEMES[t] + '</span>'; }).join('') +
        c.regions.map(function (r) { return REGIONS[r] ? '<span class="ufc-tag">' + REGIONS[r] + '</span>' : ''; }).join('') + '</div>';
    }
    function nextCard() {
      refreshStore();
      if (!S.queue.length) return finish();
      var c = S.cur = S.queue.shift(), rev = prefs.dir === 'rev';
      S.revealed = false;
      $('deck').innerHTML = esc(S.name) + '<small>' + (rev ? 'Definition &rarr; Term' : 'Term &rarr; Definition') + '</small>';
      $('where').textContent = 'Unit ' + unit + ' · ' + c.topic;
      var k = $('kind');
      if (c._again) { k.className = 'ufc-kind k-again'; k.textContent = 'Again'; }
      else if (!itemOf(c)) { k.className = 'ufc-kind k-new'; k.textContent = 'New card'; }
      else { k.className = 'ufc-kind k-due'; k.textContent = isDue(c) ? 'Review' : 'Practice'; }
      if (rev) {
        $('q').innerHTML = '<div class="ufc-qlabel">Which term matches?</div><div class="ufc-defn">' + esc(c.def) + '</div>';
        $('a').innerHTML = '<div class="ufc-qlabel">Term</div><div class="ufc-term">' + esc(c.term) + '</div>' + tagsHTML(c);
      } else {
        $('q').innerHTML = '<div class="ufc-qlabel">Do you know this term?</div><div class="ufc-term">' + esc(c.term) + '</div>';
        $('a').innerHTML = '<div class="ufc-qlabel">Definition</div><div class="ufc-defn">' + esc(c.def) + '</div>' + tagsHTML(c);
      }
      $('card').classList.remove('revealed');
      setIntervals(c);
      counts();
      startThinkTimer();
    }
    // What each rating does next (mirrors spaced.js nextBox, like the hub).
    function setIntervals(c) {
      var it = itemOf(c), b = it ? (it.boxLevel || 0) : 0;
      if (S.rated[c.key + prefs.dir]) { $('iv-g').textContent = 'see it again soon'; $('iv-s').textContent = 'practice only'; $('iv-c').textContent = 'practice only'; return; }
      $('iv-g').textContent = 'again this session';
      $('iv-s').textContent = daysLabel(BOX_DAYS[Math.max(1, Math.min(4, b + 1))]);
      $('iv-c').textContent = daysLabel(BOX_DAYS[Math.max(1, Math.min(4, b + 2))]);
    }
    // Think first: the answer stays locked for THINK_SEC so students try to recall.
    function startThinkTimer() {
      var btn = root.querySelector('.ufc-show'), left = THINK_SEC;
      clearInterval(thinkTimer);
      S.locked = true;
      btn.classList.remove('waiting'); void btn.offsetWidth;
      btn.style.setProperty('--wait', THINK_SEC + 's');
      btn.classList.add('waiting');
      btn.innerHTML = '<span>Think first&hellip; ' + left + '</span>';
      thinkTimer = setInterval(function () {
        left--;
        if (left > 0) { btn.innerHTML = '<span>Think first&hellip; ' + left + '</span>'; return; }
        clearInterval(thinkTimer);
        if (!S) return;
        S.locked = false;
        btn.classList.remove('waiting');
        btn.innerHTML = '<span>Show answer</span>';
      }, 1000);
    }
    function reveal() {
      if (!S || S.revealed || S.locked) return;
      S.revealed = true;
      $('card').classList.add('revealed');
    }
    var RATE = { confident: [true, 'confident'], shaky: [true, 'shaky'], guessing: [false, 'guessing'] };
    function rate(r) {
      if (!S || !S.revealed) return;
      var c = S.cur, firstKey = c.key + prefs.dir;
      // Only the first rating in a session moves the schedule; repeats are practice.
      if (!S.rated[firstKey]) {
        S.rated[firstKey] = r;
        S.tally[r]++;
        if (window.SPACED && SPACED.recordReview) SPACED.recordReview(cardId(c), RATE[r][0], RATE[r][1]);
      }
      if (r === 'guessing') {
        var again = Object.create(c); again._again = true;
        S.queue.splice(Math.min(S.queue.length, 4), 0, again);
      } else S.done++;
      S.cur = null;
      nextCard();
    }
    function finish() {
      clearInterval(thinkTimer);
      box.classList.add('finished');
      var reviewed = S.tally.confident + S.tally.shaky + S.tally.guessing, mins = Math.max(1, Math.round((Date.now() - S.startMs) / 60000));
      var weak = S.tally.shaky + S.tally.guessing;
      $('done').innerHTML =
        '<div class="ufc-done-label">Session complete</div><h3>' + esc(S.name) + ': done for now.</h3>' +
        '<p>' + plural(reviewed, 'card') + ' rated in about ' + plural(mins, 'minute') + '. Each one is scheduled to come back right before you would forget it.</p>' +
        '<div class="ufc-stats">' +
          '<div class="ufc-stat"><b style="color:var(--ufc-green)">' + S.tally.confident + '</b><small>Confident</small></div>' +
          '<div class="ufc-stat"><b style="color:var(--ufc-gold-b)">' + S.tally.shaky + '</b><small>Shaky</small></div>' +
          '<div class="ufc-stat"><b style="color:var(--ufc-crim)">' + S.tally.guessing + '</b><small>Guessing</small></div>' +
        '</div>' +
        '<div class="ufc-btns"><button type="button" class="ufc-btn" data-act="restart">Study again</button>' +
        (weak ? '<button type="button" class="ufc-btn ghost" data-act="weak">Drill the weak ones</button>' : '') +
        '<a class="ufc-btn ghost" href="flashcards.html#u' + unit + '">Open the Flashcard Hub</a></div>';
      S.missed = Object.keys(S.rated).filter(function (k) { return S.rated[k] !== 'confident'; }).map(function (k) { return k.slice(0, -3); });
    }
    function drillMissed() {
      if (!S || !S.missed) return;
      var keys = {}; S.missed.forEach(function (k) { keys[k] = 1; });
      var q = shuffle(CARDS.filter(function (c) { return keys[c.key]; }));
      box.classList.remove('finished');
      S = { name: 'Weak cards from this session', queue: q, done: 0, rated: {}, tally: { confident: 0, shaky: 0, guessing: 0 }, startMs: Date.now(), cur: null, revealed: false, locked: true };
      nextCard();
    }

    root.addEventListener('click', function (e) {
      var t = e.target.closest('button');
      if (!t || !root.contains(t)) return;
      t.blur();   // so Space/Enter go to the card, not the last button clicked
      var sg = t.closest('.ufc-seg');
      if (sg) { prefs[sg.getAttribute('data-set')] = t.getAttribute('data-v'); savePrefs(); renderSettings(); return start(); }
      if (t.hasAttribute('data-topic')) { prefs.topic = t.getAttribute('data-topic'); renderSettings(); return start(); }
      var act = t.getAttribute('data-act');
      if (act === 'show') return reveal();
      if (act === 'restart') return start();
      if (act === 'weak') return drillMissed();
      if (t.hasAttribute('data-r')) return rate(t.getAttribute('data-r'));
    });
    // Clicking the card itself also shows the answer once the timer is done.
    $('card').addEventListener('click', function () { reveal(); });
    document.addEventListener('keydown', function (e) {
      if (!S || box.classList.contains('finished') || !root.offsetParent) return;   // tab not visible
      var tg = e.target && e.target.tagName;
      if (tg === 'INPUT' || tg === 'TEXTAREA' || tg === 'SELECT' || (e.target && e.target.isContentEditable)) return;
      if (!S.revealed && (e.key === ' ' || e.key === 'Enter') && !(tg === 'BUTTON' && e.key === 'Enter')) { e.preventDefault(); return reveal(); }
      if (S.revealed) {
        var r = { '1': 'guessing', '2': 'shaky', '3': 'confident' }[e.key];
        if (r) { e.preventDefault(); rate(r); }
      }
    });

    renderSettings();
    start();
    // The tab is usually hidden at page load: restart the think-first
    // timer each time it comes into view so the first card isn't pre-unlocked.
    if ('IntersectionObserver' in window) {
      var seen = false;
      new IntersectionObserver(function (en) {
        var vis = en[0] && en[0].isIntersecting;
        if (vis && !seen && S && !S.revealed && !box.classList.contains('finished')) startThinkTimer();
        if (vis) seen = true;
        else if (!root.offsetParent) seen = false;   // tab switched away, not just scrolled
      }).observe(root);
    }
  }

  function init() { Array.prototype.forEach.call(document.querySelectorAll('.ufc-mount'), mount); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
