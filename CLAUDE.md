# Tivin Teaches: AP World History review site

**Read this file first.** It describes how the whole site is built, so you can work on any
unit without reading all nine unit pages. If you change how something is built (add a shared
module, move a feature out of the unit pages, rename an id), update this file in the same commit.

Owner: Eli Tivin (AP World History teacher, Archbishop Moeller High School). Students use the
site; Eli edits content.

---

## 1. Ground rules (always)

1. **No em dashes anywhere on the site** (the long dash U+2014, written `&mdash;` in HTML). Use a colon, a comma, or an en dash.
2. **Use text Eli supplies verbatim** (syllabus lines, quotes, test questions). Don't paraphrase.
3. **Progress is earned only by doing.** Opening a tab never awards progress. Anything new that a
   student completes must report it: flashcards and MCQs through `SPACED.recordReview(...)`, games
   through an end-screen element watched by `activity.js` (or `APWH_ACTIVITY.done('game', id)`).
4. **Multiple-choice questions you write:** the correct option must **not** be the longest. Write
   distractors as long and specific as the key, and vary the answer position (A–D). The MCQ engine
   does **not** shuffle options. Check: key length ÷ mean distractor length ≈ 1.0.
5. **No hidden controls.** No secret click targets, password gates, or `display:none` buttons that
   never appear. Everything a student can trigger should be visible. One approved exception: the
   Games lock (`games-lock.js`) has a visible "Teacher unlock" button that takes Eli's code (stored
   only as a SHA-256 hash; never put the plain code in the repo).
6. **No build step.** Plain HTML/CSS/JS, plain globals (`window.X`), no imports, no frameworks,
   no npm at runtime. Scripts are loaded with `<script src>`.
7. **Content belongs in data files, not in pages.** If a feature exists on more than one unit, it
   lives in a shared `*.js` engine + a data file keyed by unit number. Don't paste a new copy of an
   engine into a unit page.
8. **Theme tokens, not hard-coded colors.** Use the page tokens (`--ink --mid --muted --red --white
   --paper --border --border2 --cream`). Dark mode (`theme.css`) redefines them. Each unit sets its
   own `--red` accent, so shared modules automatically take the unit's color.
9. **Canonical unit names** (exact spelling, used in sidebars, headings, cards):

   | Unit | Name | | Unit | Name |
   |---|---|---|---|---|
   | 1 | The Global Tapestry | | 6 | Consequences of Industrialization |
   | 2 | Networks of Exchange | | 7 | Global Conflict |
   | 3 | Land-Based Empires | | 8 | Cold War & Decolonization (`&amp;` in HTML) |
   | 4 | Transoceanic Interconnections | | 9 | Globalization |
   | 5 | Revolutions | | | |

   Label format: `Unit N: Name`. Never rename official AP topic titles (e.g. "4.4: Maritime Empires Established").
10. **Sourcing vocabulary is HIPP:** Historical Situation, **Intended Audience** (never just "Audience"),
    Purpose, Point of View. Never write "HAPP".

## 2. Deploy, preview, verify

- `main` **is production.** Every push to `main` deploys to **https://tivinteaches.com** via
  `.github/workflows/pages.yml` (GitHub Actions → Pages). Commit straight to `main` only when the
  change is verified.
- **Local preview:** `.claude/launch.json` config `class-site` (PowerShell `serve.ps1`, port 5173).
  No Node or Python is installed on Eli's machine.
- **Verify in the browser** before committing: load the page, open the tab you changed with
  `showTab('pg-xxx')`, check the console for errors, and exercise the feature. Known noise you can
  ignore: `Invalid LatLng` errors from the map iframe when it's hidden, and a 404 from the
  YouTube embeds. The page sets `scroll-behavior:smooth`, and smooth scrolls stall while the
  preview pane is hidden, so read scroll positions with an instant scroll.
- **Browser caching:** Cloudflare serves `.js`/`.css` with `Cache-Control: max-age=14400`, so browsers
  keep an old script for up to 4 hours after a deploy (HTML pages are `no-cache`). When a script change
  must show up right away, bump a version query on its tag in the pages that load it, e.g.
  `tour.js?v=20261015` in `unit1.html` … `unit9.html`.
- Commit trailer used in this repo: `Co-Authored-By: Claude <model> <noreply@anthropic.com>`.
- **Cloudflare night lock (server side):** tivinteaches.com DNS is on Cloudflare with the records
  **Proxied**, and the Worker `night-lock` (route `*tivinteaches.com/*`, fail open) serves the
  closed-for-the-night page from 11:00 PM to 5:00 AM Eastern by Cloudflare's clock. Source:
  `cloudflare/night-lock-worker.js`; it is pasted into the Cloudflare dashboard, not deployed from
  this repo, so edit both. Secrets `TEACHER_CODE` and `UNLOCK_SECRET` live only in Cloudflare.
  A correct code sets an HttpOnly signed cookie for that night and the `bedtimeUnlock` key that
  `bedtime.js` reads. To turn the lock off, delete the route or set the DNS records to DNS only.
  Known gap, kept on purpose: Cloudflare also builds full copies of the site from this repo at
  `ap-review-site.pages.dev` and `ap-review-site.elitivin.workers.dev`, which the lock does not cover.

## 3. Site map

| Page | What it is |
|---|---|
| `index.html` | Home dashboard ("Mission Control"): unit cards with progress rings (`unitPct`: each MCQ and flashcard counts by its forgetting-curve recall, games and videos fade on a 7-day stability, so rings drop without review), search, news carousel, study timer. |
| `unit1.html` … `unit9.html` | The nine unit hubs (anatomy in §4). |
| `unitN-map.html` | Interactive Leaflet map, embedded in each unit's Maps tab. All nine units use `unit-map-engine.js` + a `window.UNIT_MAP` object (the page holds only data). |
| `unitN-interrogate.html` | "Myth Sweeper" fact/myth game, one per unit, linked from the Games tab. |
| `unit2-hexweb.html`, `unit3-racer.html`, `unit4-voyage.html` | One-off games (Hex Web, Empire Road, Sea Lanes). Sea Lanes is a copy of Empire Road with ships, reefs and Unit 4 questions (`QUESTIONS` array in the page). |
| `unit3-empire.html` | Build the Perfect Empire: draft game (spin a region, fill 12 slots, chemistry bonuses and clashes, ten-century simulation). Content spans Units 1–3; data (`DB`, `SYNERGIES`, `CLASHES`) lives in the page. Credits `APWH_ACTIVITY.done('game','empire')` on the grade screen. Grading is a rival ladder (`RIVALS`, `CHEM_WEIGHT`, `CHEM_CAP` near the top of the script). Each finished empire gets a name from its grade, ruler and main region (`empireName`) and is saved to `empireRecords_u3`, listed on the title screen. |
| `unit5-minecart.html`, `unit6-rails.html`, `unit7-tank.html`, `unit8-sputnik.html`, `unit9-freight.html` | Lane-runner games on the shared `lane-runner.js` engine: Coal Cart (minecart through a mine, ironworks, cotton mill), Iron Rails (steam train across India, the savanna, Siberia), Front Line (tank on the Western Front, North Africa, Eastern Front), Space Race (Sputnik past Earth, the Moon, deep space), Global Freight (container ship: Pacific, Malacca, Suez, Rotterdam). Each page holds only its look and its questions. |
| `cumulative.html` + `cumulative.js` | Cumulative Review: cross-unit MCQ mix. |
| `flashcards.html` | Flashcard Hub (Anki-style decks, custom study, browse) for every unit. |
| `sbmcq.html` | "Attack the Stimulus MCQ" strategy page and worked examples. |
| `writing-guide.html` | How to write the SAQ, LEQ, and DBQ. |
| `brain-sculptor.html` | How to study. |
| `resources.html` | Review videos and outside resources. |
| `fullcourse.html` | Course narrative. |
| `timer.html` | Study timer. |
| `faq.html` | Student FAQ (progress, saving, games lock, night lock, breaks, studying, writing). Answers are Eli's text, verbatim; each question has an id so `faq.html#games-locked` opens it. Linked from the home page "How to" menu and Skills column, and in `search.js`. |
| `classic-hub.html` | Old home page (kept for reference); `mission-control.html` redirects to `index.html`. |
| `source-docs/released-frqs/` | Catalog of every released College Board FRQ (README) + prompt PDFs. Use only to fill gaps. |

## 4. Anatomy of a unit page (`unitN.html`)

One HTML file per unit. Fixed sidebar + top bar + a set of tab "pages" that `showTab(id)` switches.

### 4.1 Tabs (`<div class="page" id="pg-…">`)

| id | Tab | Built by |
|---|---|---|
| `pg-home` | Overview (hero, videos, unit timeline) | per-unit hero and videos; timeline shared: `timeline.js` + `timeline-data.js` |
| `pg-mcq` | MCQ Practice | shared: `mcq-engine.js` + `mcq-bank.js` |
| `pg-walk` | MCQ Walkthrough | shared: `sbmcq.js` (`renderWalk(el,{unit})`) + `walkthrough-data.js` |
| `pg-writing` | Writing Drills | shared: `writing-drills.js` + `writing-prompts.js` |
| `pg-guide` | Study Guide | shared: `study-guide.js` + `study-guide-data.js` |
| `pg-source` | Documents (sourcing practice) | shared: `source-practice.js` + `source-practice-data.js` |
| `pg-visual` | Visual Sources | shared: `visual-sources.js` + `visual-sources-data.js` |
| `pg-maps` | Maps | iframe of `unitN-map.html` |
| `pg-flash` | Flashcards | shared: `unit-flashcards.js` + `flashcard-data.js` |
| `pg-glossary` | Glossary | shared: `glossary.js` + `glossary-data.js` |
| `pg-brain` | Brain Dump | shared: `brain-dump.js` + `brain-dump-data.js` (+ `bd-confidence.js` layer) |
| `pg-spice` | SPICE-T Analysis | shared: `spice.js` + `spice-data.js` |
| `pg-games` | Games | shared: `review-games.js` + `review-games-data.js`, plus links to `unitN-interrogate.html` etc. |

Unit-only tabs: `pg-write` (Unit 7 FRQ Grader), `pg-slides` (Unit 7 class slides), `pg-web` (Unit 9 Globalization Web).
Reuse these ids; don't invent per-unit variants.

### 4.2 Navigation (shared: `unit-shell.js`)

`unit-shell.js` (loaded last, just before `</body>`) builds the sidebar groups into
`#sb-nav-items`, adds the sub-tab bar under the top bar, and defines `window.showTab(id)`.
The six groups are fixed for every unit:
Overview · Practice (`pg-mcq pg-walk pg-web`) · Writing (`pg-write pg-writing`) · Study Guide (`pg-guide pg-slides`) ·
Sources (`pg-source pg-visual pg-maps`) · Review & Recall (`pg-flash pg-glossary pg-brain pg-spice pg-games`).
Tabs missing from a page are skipped. Labels live in `unit-shell.js`; a unit can override them
with `window.UNIT_SHELL = {titles:{...}, sublabels:{...}}` set before the script loads (no unit
needs to today). Any element with `data-tab="pg-xxx"` opens that tab; `unitN.html#pg-xxx` deep-links;
`#g-<slug>` opens a glossary term. On every switch the shell fires a `unit:tab` event
(`e.detail.id`), writes the tab into the URL hash (`pushState`, so Back returns to the previous
tab and a refresh stays put; not on first load, so `glossary.js` can still read `#g-<slug>`), and
on phones (sidebar not `position:fixed`) scrolls to the content instead of the top, since the
stacked sidebar is about 600px tall. Unit 7's `pg-slides` embeds `source-docs/unit7/unit 7 slides.pdf`.
`nav-flyout.js` and `tour.js` read each sidebar item's `data-subs`.

### 4.3 Shared includes every unit loads

`<head>`: the four browser-tab icon links first (`favicon.ico`, `favicon-32.png`, `favicon-192.png`,
`apple-touch-icon.png`, all made from `tivin-emblem.png`; every page on the site has them, so copy
them into any new page), then `mission-theme.css`, `mc-mode.js`, `theme.css`, `theme.js`, `bedtime.js`, `pomodoro.js`, `brand.css`,
`brand.js`, `search.js`, `nav-flyout.js`, `tour.js`, `glossary-data.js`, `glossary.js`,
`flashcard-data.js`, `sbmcq.css/js`, `walkthrough-data.js`, `review-games.css`, `unit-flashcards.css`, `study-guide.css`, `brain-dump.css`, `visual-sources.css`, `source-practice.css`, `spice.css`.
End of `<body>`: `spaced.js`, `activity.js`, `flashcard-tags.js`, `unit-flashcards.js`,
`mcq-bank.js`, `mcq-engine.js`, `brain-dump-data.js`, `brain-dump.js`, `bd-confidence.js`, `writing-prompts.js`, `writing-drills.js`, `source-practice-data.js`, `source-practice.js`, `spice-data.js`, `spice.js`, `timeline-data.js`, `timeline.js`, `visual-sources-data.js`, `visual-sources.js`, `study-guide-data.js`, `study-guide.js`, `games-lock.js`, and last `unit-shell.js`.
Inside `#pg-games`: `review-games-data.js`, `review-games.js`, then the mount call.

### 4.4 Mount points (copy exactly; N = unit number)

```html
<div id="mcq-root"></div>  <script>APWH.mountMCQ(document.getElementById('mcq-root'), {unit:'N'});</script>
<div class="wd-mount" data-unit="N" data-unit-label="Unit N"></div>
<div class="ufc-mount" data-unit="N"></div>
<div class="sg-mount" data-unit="N"></div>
<div class="bd-mount" data-unit="N"></div>
<div class="vs-mount" data-unit="N"></div>
<div class="sp-mount" data-unit="N"></div>
<div class="spice-mount" data-unit="N"></div>
<div class="gl-mount" data-unit="N"></div>
<div id="review-games"></div>  <script>APWH_GAMES.mount(document.getElementById('review-games'), GAME_DATA[N]);</script>
```
Flashcards tab heading: eyebrow `Unit N Flashcards` + `<h2>Key Terms &amp; Concepts</h2>`.

## 5. Shared modules: what they do and where their data lives

| File | Role | Data / API |
|---|---|---|
| `mcq-bank.js` | All MCQs | `APWH_MCQ.units[n] = {title, topics:[{id,name}], questions:{'n.x':[{s, sl, simg?, simgCap?, simgs?, simgCaps?, q, o:[4], c, e, src?}]}}` (`simgs`/`simgCaps` show several captioned images). New topics: `addTopic(u,id,name,qs)` block before `/* @@APPEND_UNITS_HERE@@ */`. Practice Sets 1–4 are appended to existing topics with `Q(u, topic, {...})` in their own block (`src:'Set N, Qk'`; sources are page crops in `images/stimuli/psN-*.png`). Always append new questions to the end of a topic, never insert, so spaced-review ids don't shift. |
| `mcq-engine.js` | MCQ UI (Quick Check / Test Mode, confidence tap). One question per screen with its source (Previous / Next); each question's choices stay greyed out behind a visible countdown until it has been on screen 10 s (`GATE_MS`, counted only while it shows and the tab is visible). Test Mode's review after Reveal All shows every question at once (`.mcqx-all`). A wrong answer on a question with a walkthrough gets "Walk me through it" (`SBMCQ.open`); in Quick Check opening it adds "Try again", a practice-only retry with a fresh 10 s read that is not recorded (no `SPACED`, score keeps the first answer, never counts toward games) | `APWH.mountMCQ(el, {unit} or {pool})` |
| `sbmcq.js` + `walkthrough-data.js` | Stimulus-MCQ strategy + 4-step walkthroughs. Every card has **Work it** (the student picks at each step: best reading of the source line, question type, plain-English version, answer; one try, then the reasoning opens; the answer pick on a bank question goes to `SPACED.recordReview`) and **Watch it** (the full reasoning). Cards come from the inline `SBMCQ_WORKED` list (test questions, no step 1/3 choices) and from `WALKTHROUGH` | `WALKTHROUGH[mcqId] = {type, hq, hs?, look?, src:[{tag,since,therefore}], read:[right,wrong,wrong], plain:[right,wrong,wrong], meaning, trapIdx, trap}` (field notes in the file header); stimulus, stem, options, answer and explanation are read from `mcq-bank.js`, so the page needs the bank. `renderWalk(el,{unit})`, `renderCheatsheet(el)`, `SBMCQ.has(id)` / `SBMCQ.open(id, onClose)` (pop-up; MCQ Practice shows a "Walk me through it" button on a wrong answer that has one, so `cumulative.html` loads these too). Every unit has 10 (90 in all, October 2026), 2 of each type where the bank allows (Purpose and Most Similar are scarce, so Units 1, 2, 4 and 6 have one Most Similar) |
| `flashcard-data.js` | **Single source of truth for flashcards** | `FC_DATA[n] = [[topic, term, def], ...]`, `FC_UNITS`; also feeds Brain Dump for Units 6, 7, 9 |
| `flashcard-tags.js` | AP theme + region tags per term | `FC_TAGS[term] = "GESCTN EA,SA"` (themes, then regions) |
| `unit-flashcards.js/.css` | Unit Flashcards tab (Flashcard Hub layout) | mounts `.ufc-mount` |
| `flashcards.html` | Flashcard Hub | same card ids as the unit tabs |
| `glossary-data.js` / `glossary.js` | Glossary tab + search terms | `GLOSSARY[n] = [[topic, term, def], ...]` |
| `review-games.js/.css` + `review-games-data.js` | Games tab: Jeopardy, Narrative Matching, Sort It, Source Line Warm-up, Speed Quiz, Timeline Builder, Asteroid Blaster | `GAME_DATA[n] = {jeopardy, matching?, sortit, warmup?, speedquiz, timeline, asteroid}`; shapes in the header of `review-games.js`. Leave a game out to hide it. Units 2–4 omit `matching` (they still have their own inline `ng-*` matching game). |
| `writing-drills.js/.css` + `writing-prompts.js` | Writing Drills tab | `WRITING_PROMPTS[n] = {saq:[{source, excerpt, parts, partExemplars}], leq:[{intro, prompt, rubric}], dbq:{documents:[{n, source, text?, image?, imageAlt?, imageCredit?}], rubric?}, dbqs?:[more DBQs]}`; add prompts as a merge IIFE at the end of the file. A unit has one `dbq`; extra DBQs go in `dbqs` (Practice Sets 1–4 use this). SAQs may carry `image`. Prompts without `partExemplars`/`rubric` render as a plain textarea with the automatic checker. LEQ and DBQ rubric rows keep the College Board sample; a block near the end of the file appends a "Class formula version" (`.wd-formula`) written with the `writing-guide.html` formulas, keyed `unit|year`; the final block gives Practice Set LEQs/DBQs (no scoring guide) a full rubric of model answers. Unit 7's FRQ Grader (`pg-write`) has inline `.wp-model` model answers; its keyword checks show a "looks present / seems missing" checklist and students self-score each rubric point (no automatic point score) |
| `spaced.js` | Spaced-review store + streak banner | `SPACED.recordReview(itemId, correct, confidence)`; ids: MCQ `u{n}_{topic}_{idx}`, flashcards `u{n}_fc_{slug(term)}`, reverse side `rv_u{n}_fc_{slug}` |
| `activity.js` | Records finished games and watched videos | `INPAGE` table watches end-screen ids: `#jeop-winner #match-success/#ng-success #sortit-score #sq-final #tl-result #ast-end #warmup-result` + Documents tab `#sa-model #rg-cards #pu-model`. Keep these ids. |
| `games-lock.js` | Locks everything in the Games tab (every `.inner` block, so Units 2–4's shared games under the inline matching game too; blurred, inert, animated lock panel with progress bar) and the standalone game pages `unitN-interrogate.html`, `unit2-hexweb.html`, `unit3-racer.html`, `unit3-empire.html`, `unit4-voyage.html`, the Unit 5–9 lane-runners (full-screen lock that swallows keys; those pages load `flashcard-data.js` + `games-lock.js` before `</body>`; add both to any new game page; `flashcard-data.js` is only the unit check now) until the student has gotten `MCQ_NEEDED` (20) of that unit's MCQs right (`u{n}_{topic}_{idx}` ids, a correct entry in `reviewHistory`, each question once, MCQ tab or Cumulative Review) in the last 7 days (`FRESH_DAYS`), so games relock as answers go stale. `MCQ_NEEDED` is a number (`20`) or a share of the unit's bank (`'25%'`; bank size from `APWH_MCQ`, or `components.uN.mcqTotal` on game pages). Unlocking gives 20 minutes of game time per unit (`PLAY_MIN`), shown in a visible "game time left" box (fixed corner box on game pages); every 10 more right answers (`MORE_RIGHT`) add 20 minutes; time counts only while the games show, the page is visible and the student used the mouse or keys in the last minute (`gamesPlay_uN`), and the tab or game page relocks when it runs out. Script tags carry `?v=`; bump it when the rule changes. Visible "Teacher unlock" button checks a code against a SHA-256 hash and unlocks all units on that browser; while that is on, a visible "Lock games again" bar on the Games tab turns it off | reads `apReview_v1.spaced`; keys `gamesLock_teacher`, `gamesLock_seen_uN` (opening animation shown once). |
| `bd-confidence.js` | Predict-before-reveal layer on Brain Dump | hooks `#bd-reveal.active`, `.bd-card-list` |
| `timeline.js` + `timeline-data.js` | Overview tab illustrated timeline | `TIMELINE_DATA[n] = [{year, title, topic?, desc, img, alt, pos?}]`; renders into `<div id="tl-list" data-unit="N">`, wires `#scroll-timeline-btn` |
| `spice.js/.css` + `spice-data.js` | SPICE-T cards | `SPICE[n] = [{key:"s"|"p"|"i"|"c"|"e"|"t", desc, items:[html]}]`; category names fixed in `spice.js`; mount `<div class="spice-mount" data-unit="N">` |
| `source-practice.js/.css` + `source-practice-data.js` | Documents tab: Sourcing Practice drill (+ optional Red / Green Sort, Paragraph Upgrade) | `SOURCE_PRACTICE[n] = {docs:[{type, sl, excerpt?, img?, models:{pov, purpose, situation, audience}}], redgreen?, paraup?}`; mount `<div class="sp-mount" data-unit="N">`; ids `#sa-* #rg-* #pu-*` are watched by `activity.js` |
| `visual-sources.js/.css` + `visual-sources-data.js` | Visual Sources (AP question + HIPP analysis per image) | `VISUAL_SOURCES[n] = {items:[{num, title, source, desc, img or imgs/imgTitles/imgSources, q, o, c, e, model:{h,a,p,pov}}]}`; mount `<div class="vs-mount" data-unit="N">` |
| `brain-dump.js/.css` + `brain-dump-data.js` | Brain Dump (5-minute write, then reveal) | `BRAIN_DUMP[n] = {topics:[{id, name, stem, points:[{t,d}]}], fromFlashcards?}`; mount `<div class="bd-mount" data-unit="N">`. Load before `bd-confidence.js`. |
| `study-guide.js/.css` + `study-guide-data.js` | Study Guide accordion | `STUDY_GUIDE[n] = [{num, title, body}]`; mount `<div class="sg-mount" data-unit="N">` |
| `unit-shell.js` | Unit sidebar, sub-tab bar, `showTab`, deep links, `data-tab` buttons | optional `window.UNIT_SHELL` overrides; `unit:tab` event |
| `tour.js` | "How to Work This Unit" game plan + spotlight tour | reads `data-subs` and `showTab` |
| `nav-flyout.js` | Sidebar hover menus | reads `data-subs` |
| `search.js` | Site search (`/` or Ctrl+K) | hand-built `UNITS`/`PAGES` index; add new resources there |
| `mc-mode.js` + `mission-theme.css` | Mission Control theme + shared top bar (`#mc-bar`) on every page | sets `<html data-mc="on">` |
| `theme.js/.css` | Dark mode | `localStorage.mcTheme`, `[data-theme="dark"]` |
| `brand.js/.css` | Tivin Teaches logo lockup | |
| `bedtime.js` | 9:00–11:00 PM a small non-blocking countdown pill (`#bedtime-countdown`, bottom center, amber in the last 15 minutes) to the lock; 11:00 PM–5:00 AM full-page night lock (sleep statistics, page inert, keys swallowed) with a visible "Teacher unlock" box (same SHA-256 hash as `games-lock.js`) that unlocks that browser for the rest of the night | key `bedtimeUnlock` (night id, YYYY-MM-DD of the evening) |
| `pomodoro.js` | Break reminder on every page that loads `bedtime.js` (not `timer.html`, not map iframes): counts visible time on the site across pages and tabs; after 25 minutes asks for a 5-minute break ("Start my 5-minute break" shows a countdown on every open tab with a visible "End break early"; "5 more minutes" snoozes). Being away 5+ minutes counts as a break. Self-contained styles, takes the page `--red` | key `pomoBreak_v1` `{work, last, breakEnd}` |
| `unit-map-engine.js` + `world-basemap.js` + `unit-map.css` | Unit maps (all nine units). Collapsible side panel, foldable map key, label declutter (permanent labels carry a priority class `lp0`…`lp4`; a label overlapping a more important one hides until you zoom in), routes fade while a layer is on. Theme kinds: `labels cities years spread arrows chain lines zones flows`. `flows` = big arrows in groups with short tags and a key card: `{kind:"flows", frame?, groups:[{title, color, badge, desc, size?:"small", arrows:[{from,to,curv,tag?,tagAt?,wrap?,n,note?}], hubs?:[{n,c,dir,note}]}]}`. A `years` item with `wrap:true` is also drawn one world over (east or west, for places near the map edge); a flows arrow with `wrap:-360` (or `360`) is drawn twice so a Pacific crossing shows at both map edges. A polity can set `labelPoly:N` to put its name label on its Nth shape. A route shape can be `{pts, name, dash}` for its own hover name and a dashed outline (Unit 9 uses this for Britain in the EU). `zones` items can be shapes (`poly`, optional `labelAt`, `big`, `solid`, `fill`), lines (`pts`, `label`, `dash`) or named points (`c`). Any theme can set `frame` to zoom there when turned on; a unit can raise `maxZoom` (Unit 8 uses 10 for Berlin). Polities can carry `extra` shapes and `posts` (outpost dots; `M.postLegend` names them in the key), and `M.polityGroups` [[heading,[keys]]] splits the chips under sub-headings (Unit 4: maritime vs. land empires). A flows group can set `size:"large"` (Unit 4 Columbian Exchange); `chain` path items accept `dir`. Route segment points past ±180° (Manila galleon copy) are left out of the zoom-to bounds. Polities can also set `fill`, `dash`, `labelAt` and `legacy:[{t,d}]`; a `labels` theme can carry short `arrows`; a `lines` item can set its own `color` | `window.UNIT_MAP = {routes, polities, themes}` |
| `cumulative.js` | Cumulative Review logic | reads `mcq-bank.js` |
| `lane-runner.js` + `lane-runner.css` | Shared engine for the Unit 5–9 checkpoint lane-runners, ported from Sea Lanes with the same rules (lane hopping, auto-drive, 2 bumps, 3 strikes, power-ups, Checkpoint Log). Credits `APWH_ACTIVITY.done('game', activity)` after 10 correct gates. Helpers a page can call: `skyBase`, `groundFill`, `drawRange`, `railTracks`, `biomeBlend`. Units 3 and 4 still carry their own inline copies | page sets `window.RUNNER = {key, activity, title, questions:[[topic, prompt, correct, wrong, wrong, why]], biomes, sprites, hazards, player, decorate, drawVehicle, drawSprite, ...}` (full list in the file header), then loads the script |

### Browser storage keys
`apReview_v1` (everything about progress: `spaced`, `studyLog`, `components['uN']` games/videos,
`lastSeen`, legacy `mcq`/`drafts`). **Always read-modify-write the current value; never write back
a copy loaded earlier** (that erases progress saved since). Others: `mcTheme`, `fcHub_v1` (Hub
settings), `ufc_v1` (unit flashcard settings), `unitPlan_uN`, `unitTourSeen`, `u3RacerBest`, `u4VoyageBest`, `u5MinecartBest`, `u6RailsBest`, `u7TankBest`, `u8SputnikBest`, `u9FreightBest`, `empireRecords_u3` (last 25 Build the Perfect Empire results), `unitMapPanel` (unit map side panel open/closed), `gamesLock_teacher`, `gamesLock_seen_uN`, `gamesPlay_uN` (game minutes used per day), `bedtimeUnlock`, `pomoBreak_v1`,
`apwh-timer-*`, `wd-draft:<id>` (writing drafts: Writing Drills boxes by point id such as
`u3-saq0-a`, Unit 7 FRQ Grader drill boxes as `u7-<textarea id>`), `wd-check:<id>` (Writing
Drills "I earned this point" ticks; older ticks under `wd-check:<path>:<id>` are migrated on load).
`spaced.js` also saves every unit's `mcqTotal`/`fcTotal` (the ring denominators) on any page that
loads `mcq-bank.js` or `flashcard-data.js` (`SPACED.recordTotals`).

## 6. Not shared yet (each unit has its own inline copy)

These still live inside the unit pages, in slightly different formats per unit. To change one,
you currently have to edit each unit. **The plan is to move each into a shared engine + data file
(like the games and flashcards were)**; update this table as each one moves.

| Feature | Current state | Target |
|---|---|---|
| ~~Sidebar nav / `showTab`~~ | **Done:** `unit-shell.js` | |
| ~~Study Guide (`pg-guide`)~~ | **Done:** `study-guide.js` + `study-guide-data.js` | |
| ~~Brain Dump (`pg-brain`)~~ | **Done:** `brain-dump.js` + `brain-dump-data.js` | |
| ~~Visual Sources (`pg-visual`)~~ | **Done:** `visual-sources.js` + `visual-sources-data.js` | |
| ~~Documents (`pg-source`)~~ | **Done:** `source-practice.js` + `source-practice-data.js` (Unit 7 adds Red / Green Sort and Paragraph Upgrade) | |
| ~~SPICE-T (`pg-spice`)~~ | **Done:** `spice.js` + `spice-data.js` | |
| ~~Overview timeline (`pg-home`)~~ | **Done:** `timeline.js` + `timeline-data.js`. Its CSS (`.tl-item` etc.) is still in each page and differs slightly per unit | move to a shared `timeline.css` |
| Narrative Matching (Units 2–4) | Extra inline `ng-*` game next to the shared games | move pairs into `GAME_DATA[n].matching`, delete the inline copy |

## 7. Recipes

- **Fix or add a flashcard:** edit `flashcard-data.js` only (and its tag in `flashcard-tags.js`).
  Renaming a term resets that card's review history.
- **Add a glossary term:** `glossary-data.js` (shows in Glossary and search).
- **Add MCQs:** `mcq-bank.js` (see rule 4). At least 5 questions per topic.
- **Edit a study guide section:** `study-guide-data.js` → `STUDY_GUIDE[n]`.
- **Edit Brain Dump topics, starters or key points:** `brain-dump-data.js` → `BRAIN_DUMP[n]`.
- **Edit an Overview timeline event:** `timeline-data.js` → `TIMELINE_DATA[n]`.
- **Edit SPICE-T bullets:** `spice-data.js` → `SPICE[n]`.
- **Edit a Documents-tab source:** `source-practice-data.js` → `SOURCE_PRACTICE[n]`.
- **Edit a visual source:** `visual-sources-data.js` → `VISUAL_SOURCES[n]` (MCQ rule 4 applies to its question).
- **Edit game content:** `review-games-data.js` → `GAME_DATA[n]`.
- **Add a writing prompt:** append a merge IIFE to `writing-prompts.js`.
- **New shared feature:** write `feature.js` (+ `.css`) exposing one global with a `mount(el, data)`
  function; put content in `feature-data.js` keyed by unit; add a mount point to each unit; make
  completion report through `SPACED`/`activity.js`; add the tab to `search.js`; document it here.
- **New unit tab:** add `<div class="page" id="pg-xxx">` with the standard `.pg-nav-row` and
  `.pg-hero`, then add it to `PAGE_TITLES`, `GROUPS`, `SUBLABELS` (and `search.js` tabs).

## 8. Content provenance

Units 1–8 content mostly comes from Eli's materials and tests. Unit 9's MCQs, documents, visuals,
SPICE-T, all of the shared game content for Units 1–4 and 9, and the gap-filling study-guide
sections, the Unit 9 Brain Dump sentence starters, and the coaching in `walkthrough-data.js` (source-line reads, plain-English choices, traps; the questions themselves are Eli's bank, verbatim) were written by Claude (October 2026).
The 220 Practice Set 1–4 MCQs (added 2026-10-14) are Eli's practice exams, used with permission and kept verbatim;
they came without an answer key, so the correct answers (`c`), explanations (`e`) and unit/topic placement were set by Claude.
About 54 of them have the key as the longest option (the source's wording, not changed).
On 2026-10-19 the options of 68 questions in Units 1, 2, 4, 6, 7 and 8 were reordered (wording
unchanged, ids unchanged) to even out answer positions; questions whose explanation names a letter,
and Practice Set questions, were left in their original order. The key is still the longest option
in roughly a third to half of Units 1, 6, 7 and 8 (Eli's wording, not changed). Released College Board FRQs are cataloged in
`source-docs/released-frqs/README.md`. See also `SECURITY-NOTES.md`.
