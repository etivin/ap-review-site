/* lane-runner.js: shared engine for the checkpoint lane-runner games (Units 5–9).
   Ported from Sea Lanes (unit4-voyage.html), which was itself a copy of Empire Road (unit3-racer.html).

   A game page loads lane-runner.css, puts the standard markup in the page (#game canvas, #feed,
   #notesFoot, #pauseBtn, #fsBtn, #stage), then sets window.RUNNER and loads this file:

   RUNNER = {
     key, activity,                    // localStorage best-score key; id for APWH_ACTIVITY.done('game', id)
     title, unitLine,                  // title-screen words, e.g. 'COAL CART', 'Unit 5 · Revolutions'
     overStrikes, overCrash, again,    // game-over titles and "Press Space to <again>"
     speedUnit, speedTop,              // speedometer label, and the reading at full speed (gauge goes to 1.5x)
     questions: [[topic, prompt, correct, wrong, wrong, why], ...],
     biomes: [{name, open:[c,c], lane:[c,c], edge?, sprites:[types]}], biomeLen?,
     sprites: {type: {w, h}},          // scenery sizes in world units
     hazards: [{kind, w, h, speed:[lo,hi], colors:[...], still?:true}],   // still = never moves (rocks, wire)
     breakable: [kinds],               // hazards that shatter when hit instead of being knocked aside
     player: {kind, w, h, color, ...},
     fly: {label, hud, land, menu},    // the uncommon lift power-up: HUD label, HUD banner text, landing popup, title-screen label
     text: {hit, next, ram, repaired}, // popups
     coin: {rim, face, shine, light},  // coin colors ('#hex') and glow ('r,g,b')
     kf?: [palettes], flyAlt?, flyPx?, gatePost?, tilt?,
     decorate(seg),                    // push scenery sprites onto a segment while the track is built
     drawBackground?(pal), drawSegment?(seg, pal), segExtra?(seg, p1, p2, pal),
     drawVehicle(x, y, k, v, isPlayer, lightA), drawSprite(s, x, y, k, seg),
     drawFly?(x, y, f), wake?(), bounce?(),
   }
   Hooks are plain functions; they can use this file's globals (ctx, W, H, time, speed, flyLift,
   PW, PH, PK, ROAD_W, helpers such as ellipse/quad/rrect/pushLight/burst) because classic scripts
   share one global scope. Tuning knobs are the constants below, same names as Empire Road. */
(function () { if (!window.RUNNER) throw new Error('lane-runner.js: set window.RUNNER first'); })();
const R = window.RUNNER;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
// Older browsers (e.g. Chrome < 99, Safari < 16) don't have roundRect
if (!ctx.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    r = Math.min(Math.abs(+r || 0), Math.abs(w) / 2, Math.abs(h) / 2);
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r); this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r); this.arcTo(x, y, x + w, y, r);
    this.closePath();
  };
}
const W = canvas.width, H = canvas.height;

// ---------- World / camera constants ----------
const SEG = 200, RUMBLE = 3, ROAD_W = 2000, LANES = 3;
const CAM_H = 1000, CAM_D = 1 / Math.tan(50 * Math.PI / 180); // 100° field of view
const DRAW_DIST = 300, PLAYER_Z = CAM_H * CAM_D;
const HORIZON = H / 2 + 4;
const MAX_SPEED = SEG * 60, ACCEL = MAX_SPEED / 5, DECEL = MAX_SPEED / 5;
const LANE_X = [-2 / 3, 0, 2 / 3];
const CYCLE = 1800000; // distance for a full day -> sunset -> night -> dawn cycle
const POW_TIME = { shield: 6, double: 10, magnet: 10, fly: 10, dent: 10 };
// pickup odds when a power-up (not a coin trail) spawns; the lift power-up is the uncommon one
const POW_ODDS = [['shield', 34], ['double', 34], ['magnet', 22], ['fly', 10]]; // fly ≈ once every ~1–1.5 min
const FLY_ALT = R.flyAlt || 1800;  // lift altitude in world units, above traffic, markers and banners
const FLY_PX = R.flyPx || 25;      // extra on-screen lift of the player while airborne (the camera climbs with it)
const MAGNET_RANGE = 6000;   // how far ahead the magnet pulls coins from
const DENT_TIME = POW_TIME.dent; // after a bump the player is damaged this long; a second hit while damaged ends the run

// ---------- Helpers ----------
const rand = (a, b) => a + Math.random() * (b - a);
const pick = a => a[Math.floor(Math.random() * a.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const hex = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const mix = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const rgb = (c, a = 1) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
const shade = (h, f) => rgb(f < 0 ? mix(hex(h), [0, 0, 0], -f) : mix(hex(h), [255, 255, 255], f));

function circle(x, y, r) { ctx.beginPath(); ctx.arc(x, y, Math.max(0.1, r), 0, Math.PI * 2); ctx.fill(); }
function ellipse(x, y, rx, ry) { ctx.beginPath(); ctx.ellipse(x, y, Math.max(0.1, rx), Math.max(0.1, ry), 0, 0, Math.PI * 2); ctx.fill(); }
function rrect(x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, Math.max(0, r)); ctx.fill(); }
function quad(x1, y1, x2, y2, x3, y3, x4, y4, color) {
  ctx.fillStyle = color;
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineTo(x3, y3); ctx.lineTo(x4, y4);
  ctx.closePath(); ctx.fill();
}

// ---------- Scenery definitions (from the page) ----------
const BIOMES = R.biomes, BIOME_LEN = R.biomeLen || 900;
const SPRITES = Object.assign({ billboard: { w: 1500, h: 1150 } }, R.sprites);
const BOARD_COLORS = R.boardColors || ['#b71c1c', '#1565c0', '#6a1b9a', '#e65100', '#00695c'];
const QUESTIONS = R.questions;
const GATE_AHEAD = 95000;     // minimum distance ahead a gate appears
const READ_TIME = 9;          // ...stretched at higher speeds so there are always ~9s to read the question
const GATE_GAP = [12000, 22000]; // distance after the feedback clears before the next question
const GATE_CLEAR = 9000;     // keep traffic and pickups this far from a gate
const LANE_SPRING = 220;       // lane-change spring stiffness: higher = quicker hop (critically damped, so no overshoot)
const CRUISE_START = 0.5, CRUISE_RAMP = 1e7; // auto speed starts at 50% and creeps up slowly, reaching full after a very long run
const OBSTACLE_GAP = 6000;  // min spacing between traffic in different lanes, so there's always time to switch
const PARKED = 0.75;          // share of traffic that is stopped in its lane

const CAR_TYPES = R.hazards;
const STILL = CAR_TYPES.filter(t => t.still), MOVERS = CAR_TYPES.filter(t => !t.still);
const PLAYER = Object.assign({ dark: shade(R.player.color, -0.4), light: shade(R.player.color, 0.3) }, R.player);
const PK = (CAM_D / PLAYER_Z) * W / 2; // pixels per world unit at the player's depth
const PW = PLAYER.w * PK, PH = PLAYER.h * PK;
const TXT = Object.assign({ hit: 'HIT! SLOW DOWN', next: 'Next hit = game over', ram: 'RAMMED', repaired: 'REPAIRED' }, R.text);

const POWER = {
  shield: { col: '#39c0ff', deep: '#0b5f94', glow: '80,200,255', label: 'SHIELD' },
  double: { col: '#bb66ff', deep: '#5a1e99', glow: '190,110,255', label: '2X SCORE' },
  magnet: { col: '#ff4f7b', deep: '#9c1636', glow: '255,90,130', label: 'MAGNET' },
  fly: { col: '#22c7a9', deep: '#0b6b5c', glow: '40,220,190', label: R.fly.label },
  dent: { col: '#ff5a3c', deep: '#8f1d0c', glow: '255,90,60', label: 'DAMAGED' },
};

// Sky palettes for the time-of-day cycle (a page can pass its own, or a single one for no cycle)
const KF = (R.kf || [
  { top: '#2e7fd9', bottom: '#bfe2ff', fog: '#cfe8fb', far: '#7d9fc4', near: '#5a8a6a', cloud: '#ffffff', sun: '#fff4c2', sunY: 0.75, dark: 0, stars: 0 },
  { top: '#2c2466', bottom: '#ff9166', fog: '#f0a582', far: '#6d4a78', near: '#3f3050', cloud: '#ffb199', sun: '#ffd27a', sunY: 0.1, dark: 0.15, stars: 0.15 },
  { top: '#04071a', bottom: '#1d2a5c', fog: '#1a2450', far: '#1d2447', near: '#111831', cloud: '#39406b', sun: '#ffd27a', sunY: -0.4, dark: 0.5, stars: 1 },
  { top: '#4b6cb7', bottom: '#ffd1b3', fog: '#f3d6c4', far: '#8c90b8', near: '#5d7563', cloud: '#ffe0d0', sun: '#ffe1a8', sunY: 0.15, dark: 0.08, stars: 0.25 },
]).map(k => { const o = {}; for (const key in k) o[key] = typeof k[key] === 'string' ? hex(k[key]) : k[key]; return o; });

// ---------- Track ----------
let segments = [], trackLength = 0;
const ease = {
  in: (a, b, p) => a + (b - a) * p * p,
  out: (a, b, p) => a + (b - a) * (1 - (1 - p) * (1 - p)),
  inOut: (a, b, p) => a + (b - a) * (-Math.cos(p * Math.PI) / 2 + 0.5),
};
const lastY = () => segments.length ? segments[segments.length - 1].p2.world.y : 0;

function addSegment(curve, y) {
  const n = segments.length;
  segments.push({
    index: n, curve, sprites: [], clip: H, fog: 0,
    biome: BIOMES[Math.floor(n / BIOME_LEN) % BIOMES.length],
    dark: Math.floor(n / RUMBLE) % 2 === 1,
    p1: { world: { y: lastY(), z: n * SEG }, camera: {}, screen: {} },
    p2: { world: { y, z: (n + 1) * SEG }, camera: {}, screen: {} },
  });
}

function addRoad(enter, hold, leave, curve, height) {
  const startY = lastY(), endY = startY + height * SEG, total = enter + hold + leave;
  for (let n = 0; n < enter; n++) addSegment(ease.in(0, curve, n / enter), ease.inOut(startY, endY, n / total));
  for (let n = 0; n < hold; n++) addSegment(curve, ease.inOut(startY, endY, (enter + n) / total));
  for (let n = 0; n < leave; n++) addSegment(ease.out(curve, 0, n / leave), ease.inOut(startY, endY, (enter + hold + n) / total));
}

function buildTrack() {
  segments = [];
  addRoad(30, 30, 30, 0, 0);
  for (let i = 0; i < 30; i++) {
    const len = pick([20, 35, 50]);
    const curve = pick([-3, -2, -1, 0, 0, 1, 2, 3]); // gentle bends so the way ahead stays in view
    let hill = Math.min(pick([0, 0, 0, 4, 8]), Math.round(len * 0.2)) * (Math.random() < 0.5 ? -1 : 1); // gentle rolls, so crests never hide traffic
    if (R.flat) hill = 0;
    if (Math.abs(lastY() + hill * SEG) > 3000) hill = -hill; // keep elevation in check
    if (Math.random() < 0.2) { // S-bend
      addRoad(len, len, len, -curve || -2, hill / 2);
      addRoad(len, len, len, curve || 2, hill / 2);
    } else addRoad(len, len, len, curve, hill);
  }
  addRoad(60, 60, 60, 0, -lastY() / SEG); // come back down so the loop joins up
  addRoad(30, 30, 30, 0, 0);
  segments[segments.length - 1].p2.world.y = 0;
  trackLength = segments.length * SEG;

  for (const seg of segments) {
    if (seg.index < 15) continue;
    if (seg.index % 140 === 70 && R.billboards) seg.sprites.push({ type: 'billboard', offset: pick([-1.6, 1.6]),
      text: pick(R.billboards), color: pick(BOARD_COLORS) });
    R.decorate(seg);
  }
}

const findSeg = z => segments[Math.floor(z / SEG) % segments.length];
function rel(z, from) { // signed distance along the looping track
  let d = (z - from) % trackLength;
  if (d < 0) d += trackLength;
  return d > trackLength / 2 ? d - trackLength : d;
}

// ---------- Background layers ----------
function makeRange(P, parts) {
  const phase = parts.map(() => Math.random() * Math.PI * 2);
  const h = new Float32Array(P);
  let min = Infinity;
  for (let i = 0; i < P; i++) {
    let v = 0;
    parts.forEach(([a, f], j) => { v += a * Math.sin(2 * Math.PI * f * i / P + phase[j]); });
    h[i] = v; min = Math.min(min, v);
  }
  for (let i = 0; i < P; i++) h[i] -= min;
  return h;
}
const RANGE_P = 1600;
const FAR = makeRange(RANGE_P, [[40, 2], [25, 5], [12, 11], [6, 23], [3, 47]]);
const NEAR = makeRange(RANGE_P, [[22, 3], [14, 7], [8, 13], [4, 29]]);

const STARS = Array.from({ length: 140 }, () => ({ x: rand(0, W), y: rand(0, HORIZON * 0.85),
  r: Math.random() < 0.15 ? 2 : 1, tw: rand(1, 4), ph: rand(0, 6) }));
const CLOUDS = Array.from({ length: 7 }, (_, i) => ({ x: i * 170 + rand(0, 80), y: rand(40, HORIZON - 110), s: rand(0.6, 1.3) }));
const VIGNETTE = (() => {
  const g = ctx.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, W * 0.7);
  g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.45)');
  return g;
})();

// ---------- Game state ----------
let lane = 1, laneVel = 0; // lane: 0 left, 1 middle, 2 right; laneVel: sideways speed of the player
let state = 'start', position = 0, playerX = 0, playerY = 0, speed = 0, traveled = 0, score = 0, best = 0;
let cars = [], items = [], particles = [], popups = [], lights = [];
let carTimer = 0, itemTimer = 0, shake = 0, time = 0, tilt = 0, crashTime = 0, newBest = false;
let shield = 0, double = 0, magnet = 0, fly = 0, flyLift = 0, dent = 0, bgFar = 0, bgNear = 0, bgCloud = 0;
let gate = null, gateTimer = 0, feedback = null, deck = [], strikes = 3, streak = 0, asked = 0, right = 0, overReason = '';
try { best = +localStorage.getItem(R.key) || 0; } catch (e) {}
let paused = false; // Space or the Pause button freezes a run

function reset() {
  paused = false;
  position = 0; playerX = 0; lane = 1; laneVel = 0; tilt = 0; speed = MAX_SPEED * 0.25; traveled = 0; score = 0;
  cars = []; items = []; particles = []; popups = []; scorePops = [];
  carTimer = 6000; itemTimer = 3000; shield = double = magnet = fly = flyLift = dent = 0; shake = 0; newBest = false;
  gate = null; gateTimer = 4000; feedback = null; strikes = 3; streak = 0; asked = 0; right = 0; overReason = '';
  logReset();
}

// ---------- Checkpoint log (HTML panel beside the canvas) ----------
const feedEl = document.getElementById('feed'), footEl = document.getElementById('notesFoot');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
function logReset() {
  feedEl.innerHTML = '<div class="empty">Every gate you pass logs here, <b>green</b> if you nailed it, <b>red</b> with the correct answer and why if you missed. Review the red ones before your next run.</div>';
  footEl.textContent = 'Checkpoints: 0 / 0 correct';
}
function logGate(g, ok, picked) {
  const [topic, prompt, answer, , , why] = g.q;
  const empty = feedEl.querySelector('.empty');
  if (empty) empty.remove();
  const li = document.createElement('div');
  li.className = 'li' + (ok ? '' : ' miss');
  li.innerHTML = `<span class="tag">${ok ? '✓ Correct' : '✕ Missed'} · Topic ${topic}</span>${esc(prompt)}` +
    (ok ? `<span class="ans">${esc(answer)}</span>` :
      `<span class="ans">You picked: ${esc(picked)} → Answer: ${esc(answer)}</span><span class="why">${esc(why)}</span>`);
  feedEl.prepend(li);
  footEl.textContent = `Checkpoints: ${right} / ${asked} correct`;
}

function start() {
  if (state === 'over' && time - crashTime < 0.8) return;
  reset();
  state = 'playing';
}

// ---------- Spawning ----------
const nearGate = z => gate && Math.abs(rel(z, gate.z)) < GATE_CLEAR;

function spawnGate(pz) {
  if (!deck.length) deck = QUESTIONS.slice().sort(() => Math.random() - 0.5);
  const q = deck.pop();
  const opts = [q[2], q[3], q[4]].sort(() => Math.random() - 0.5);
  const ahead = Math.max(GATE_AHEAD, speed * READ_TIME);
  gate = { type: 'gate', q, opts, answer: opts.indexOf(q[2]), z: (pz + ahead) % trackLength, d0: ahead, offset: 0,
    result: null, picked: -1 };
  // clear traffic already sitting where the gate will be
  cars = cars.filter(c => !nearGate(c.z));
  items = items.filter(it => !nearGate(it.z));
}

function passGate(g) {
  const lane = playerX < -1 / 3 ? 0 : playerX > 1 / 3 ? 2 : 1;
  const ok = lane === g.answer;
  g.picked = lane; g.result = ok ? 'right' : 'wrong';
  asked++;
  if (ok) {
    right++; streak++;
    if (right === 10) { try { APWH_ACTIVITY.done('game', R.activity); } catch (e) {} }
    addScore(500, 'gate');
    let reward = pick(['shield', 'double', 'magnet']);
    if (streak % 3 === 0) reward = 'shield'; // a 3-in-a-row streak always earns a shield
    if (reward === 'shield') shield = POW_TIME.shield;
    if (reward === 'double') double = POW_TIME.double;
    if (reward === 'magnet') magnet = POW_TIME.magnet;
    popup('CORRECT! +' + 500 * (double > 0 ? 2 : 1), '#9ef07a', 34);
    popup(POWER[reward].label + '!', POWER[reward].col, 26);
    popups[popups.length - 1].y += 44;
    burst(W / 2, H - 90, 40, { speed: 340, life: 0.8, size: 5, colors: ['#9ef07a', '#ffffff', POWER[reward].col], add: true });
  } else {
    streak = 0; strikes--;
    speed *= 0.45; shake = 16;
    popup('WRONG GATE', '#ff6b6b', 34);
    burst(W / 2, H - 90, 30, { speed: 280, life: 0.7, size: 6, colors: ['#ff5252', '#ffab91'], g: 500 });
  }
  feedback = { ok, g, t: ok ? 3.5 : 6 };
  logGate(g, ok, g.opts[lane]);
  if (!ok && strikes <= 0) { crash('strikes'); popups = []; }
}

function spawnCar(pz) {
  let z = (pz + rand(52000, 57000)) % trackLength;
  if (nearGate(z)) return;
  const lane = Math.floor(Math.random() * LANES);
  // Traffic comes in rows: a hazard either lines up beside a lone one (never walling off all 3 lanes)
  // or sits a full OBSTACLE_GAP from everything, so there's always time to switch lanes.
  const near = cars.filter(c => !c.dead && Math.abs(rel(c.z, z)) < OBSTACLE_GAP);
  if (near.length > 1 || (near.length && near[0].lane === lane)) return;
  if (near.length) { z = near[0].z; if (near[0].exit || nearGate(z)) return; }
  if (items.some(it => it.type === 'coin' && Math.abs(it.offset - LANE_X[lane]) < 0.1 && Math.abs(rel(it.z, z)) < 1500)) return;
  // stopped hazards are fixed obstacles (rocks, wire...) or stopped vehicles; moving ones are vehicles
  const moving = near.length ? near[0].base > 0 : Math.random() >= PARKED;
  const T = !moving && STILL.length && (!MOVERS.length || Math.random() < 0.55) ? pick(STILL) : pick(MOVERS);
  const color = pick(T.colors);
  const base = near.length ? near[0].base : moving ? MAX_SPEED * rand(T.speed[0], T.speed[1]) : 0;
  cars.push({ kind: T.kind, w: T.w, h: T.h, lane, offset: LANE_X[lane] + rand(-0.05, 0.05), z, base: T.still ? 0 : base,
    speed: T.still ? 0 : base, color, dark: shade(color, -0.35), light: shade(color, 0.25),
    flag: pick(R.flags || ['#c62828']), seed: Math.random(), passed: false, dead: false });
}

function spawnItems(pz) {
  const z = pz + rand(50000, 56000);
  if (nearGate(z % trackLength) || nearGate((z + 3000) % trackLength)) return;
  const lane = Math.floor(Math.random() * LANES);
  const blocked = (l, cz) => cars.some(c => !c.dead && c.lane === l && Math.abs(rel(c.z, cz)) < 1500);
  // right answers are the main source of power-ups, so pickups are mostly coins
  if (Math.random() < 0.9) {
    // a trail of coins that may hop to a neighbouring lane halfway, so you switch lanes to follow it
    const hop = Math.random() < 0.6 ? clamp(lane + pick([-1, 1]), 0, LANES - 1) : lane;
    for (let i = 0; i < 8; i++) {
      const l = i < 4 ? lane : hop, cz = (z + i * 600) % trackLength;
      if (!blocked(l, cz)) items.push({ type: 'coin', z: cz, offset: LANE_X[l] });
    }
  } else {
    const odds = POW_ODDS.filter(([t]) => !(t === 'fly' && fly > 0));
    let roll = Math.random() * odds.reduce((s, [, w]) => s + w, 0), type = odds[0][0];
    for (const [t, w] of odds) { if ((roll -= w) < 0) { type = t; break; } }
    items.push({ type, z: z % trackLength, offset: LANE_X[lane] });
  }
}

function burst(x, y, n, o) {
  for (let i = 0; i < n; i++) {
    const a = rand(0, Math.PI * 2), s = rand(o.speed * 0.3, o.speed);
    const life = rand(o.life * 0.6, o.life);
    particles.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s + (o.up || 0), life, max: life,
      size: rand(o.size * 0.5, o.size), color: pick(o.colors), g: o.g || 0, grow: o.grow || 0, add: !!o.add });
  }
}

function popup(text, color, size = 26) {
  popups.push({ text, color, size, x: W / 2 + rand(-40, 40), y: H - 150, life: 1.2 });
}

// ---------- Update ----------
function update(dt) {
  time += dt;
  const playing = state === 'playing';
  const pSeg = findSeg(position + PLAYER_Z);
  const speedPct = speed / MAX_SPEED;
  const move = speed * dt;
  position = (position + move) % trackLength;
  traveled += move;

  if (playing) {
    score += move / 200 * (double > 0 ? 2 : 1);
    // lane runner: the player snaps between the three lanes and can't leave them
    const target = LANE_X[lane];
    // critically damped spring: eases out of the old lane and into the new one, and a second
    // press mid-hop just retargets without a jolt (stepped in small slices so it stays stable)
    for (let t = dt; t > 0; t -= 1 / 120) {
      const h = Math.min(t, 1 / 120);
      laneVel += ((target - playerX) * LANE_SPRING - laneVel * 2 * Math.sqrt(LANE_SPRING)) * h;
      playerX += laneVel * h;
    }
    if (Math.abs(playerX - target) < 0.002 && Math.abs(laneVel) < 0.02) { playerX = target; laneVel = 0; }
    tilt = lerp(tilt, clamp(laneVel * 0.4, -1, 1), Math.min(1, dt * 12)); // lean with the sideways motion

    // auto-drive: cruise speed creeps up the longer you survive
    const top = MAX_SPEED * Math.min(1, CRUISE_START + traveled / CRUISE_RAMP);
    if (speed < top) speed = Math.min(top, speed + ACCEL * dt);
    else speed = Math.max(top, speed - DECEL * 2 * dt);

    shield = Math.max(0, shield - dt);
    double = Math.max(0, double - dt);
    magnet = Math.max(0, magnet - dt);
    if (dent > 0) {
      dent = Math.max(0, dent - dt);
      if (dent === 0) popup(TXT.repaired, '#9ef07a', 24);
      else if (Math.random() < 0.35) burst(W / 2 + rand(-PW * 0.2, PW * 0.2), H - 14 - flyLift * FLY_PX - PH * 0.35, 1,
        { speed: 20, life: 0.9, size: 7, colors: ['#444', '#666', '#555'], up: -60, grow: 2 }); // damage smoke
    }
    if (fly > 0) {
      fly = Math.max(0, fly - dt);
      if (fly === 0) { shield = Math.max(shield, 1.5); popup(R.fly.land, POWER.fly.col, 26); } // safe landing
    }
    // rise over 0.8s, cruise, then descend over the last 1.2s
    const f = fly > 0 ? clamp(Math.min((POW_TIME.fly - fly) / 1.0, fly / 1.2), 0, 1) : 0;
    flyLift = f * f * (3 - 2 * f);
    if (R.wake) R.wake();
  } else if (state === 'over') {
    speed = Math.max(0, speed - MAX_SPEED * 1.2 * dt);
    tilt = lerp(tilt, 0, Math.min(1, dt * 4));
    if (Math.random() < 0.4) burst(W / 2 + rand(-30, 30), H - 50, 1, { speed: 25, life: 1.4, size: 10, colors: ['#555', '#777', '#444'], up: -70, grow: 2.5 });
  } else {
    speed = MAX_SPEED * 0.45; // attract mode behind the title screen
  }

  bgFar += pSeg.curve * speedPct * dt * 25;
  bgNear += pSeg.curve * speedPct * dt * 50;
  bgCloud += pSeg.curve * speedPct * dt * 12 + dt * 6;

  updateTraffic(dt, playing);
  updateItems(dt, playing);
  updateGate(dt, playing);

  for (const p of particles) {
    p.x += p.vx * dt; p.y += p.vy * dt; p.vy += p.g * dt; p.life -= dt;
  }
  particles = particles.filter(p => p.life > 0);
  for (const p of popups) { p.y -= 50 * dt; p.life -= dt; }
  for (const p of scorePops) p.life -= dt;
  scorePops = scorePops.filter(p => p.life > 0);
  popups = popups.filter(p => p.life > 0);
  shake = Math.max(0, shake - dt * 30);
}

function updateTraffic(dt, playing) {
  const pz = (position + PLAYER_Z) % trackLength;
  for (const c of cars) {
    if (c.dead) {
      c.offset += c.vx * dt; c.vy -= 5000 * dt; c.lift = Math.max(0, c.lift + c.vy * dt);
      c.rot += c.vx * dt * 1.5; c.fly += dt; c.z = (c.z + speed * 1.02 * dt) % trackLength;
      continue;
    }
    c.speed = c.base;
    for (const o of cars) {
      if (o === c || o.dead) continue;
      const d = rel(o.z, c.z);
      // don't drive through the hazard ahead in your lane
      if (o.lane === c.lane && d > 0 && d < 900) c.speed = Math.min(c.speed, o.speed);
      // a moving vehicle never catches up to traffic in other lanes (it would break the row spacing);
      // behind a stopped row it stops for good
      if (c.base > 0 && o.lane !== c.lane && d > 0 && d < OBSTACLE_GAP * 1.2 && o.base < c.base) {
        c.speed = Math.min(c.speed, o.speed);
        if (o.base === 0) c.base = c.speed = 0;
      }
    }
    if (rel(c.z, pz) < 0 && playing) c.speed = Math.min(c.speed, speed * 0.9); // don't rear-end the player
    // moving traffic turns off rather than drive into a checkpoint gate's clear zone
    if (c.base > 0 && !c.exit && gate && !gate.result && nearGate(c.z)) c.exit = c.lane === 0 ? -1 : c.lane === 2 ? 1 : pick([-1, 1]);
    if (c.exit) c.offset += c.exit * dt * 1.2;
    c.z = (c.z + c.speed * dt) % trackLength;
  }
  cars = cars.filter(c => rel(c.z, pz) > -2500 && !(c.dead && c.fly > 1.2) && Math.abs(c.offset) < 2.4);
  if (!playing) return;

  carTimer -= speed * dt;
  if (carTimer <= 0) {
    spawnCar(pz);
    carTimer = Math.max(1800, 5500 - traveled / 800) * rand(0.7, 1.3); // traffic thickens as slowly as the speed rises
  }

  for (const c of cars) {
    if (c.dead || fly > 0) continue; // the lift power-up carries the player over every hazard
    const d = rel(c.z, pz), gap = Math.abs(c.offset - playerX), hitW = (c.w + PLAYER.w) / 2 / ROAD_W * 0.85;
    if (d > -120 && d < 260 && gap < hitW) {
      if (shield > 0) smash(c);
      else if (dent > 0) { crash('traffic'); return; } // second hit while damaged
      else bump(c);                                     // first hit: slow down, keep going
    } else if (!c.passed && d <= -120) {
      c.passed = true;
      if (gap < hitW + 0.18) { addScore(25, 'close'); popup('CLOSE CALL +' + 25 * (double > 0 ? 2 : 1), '#fff176', 20); }
    }
  }
}

function updateItems(dt, playing) {
  const pz = (position + PLAYER_Z) % trackLength;
  if (playing) {
    itemTimer -= speed * dt;
    if (itemTimer <= 0) { spawnItems(pz); itemTimer = rand(5000, 9000); }
    for (const it of items) {
      const d = rel(it.z, pz);
      if (it.taken) continue;
      // sky coins can only be reached in the air, ground pickups only on the ground
      if (it.sky ? flyLift < 0.6 : flyLift > 0.3) continue;
      // magnet: pull coins from every lane toward the player
      if (magnet > 0 && it.type === 'coin' && d > -150 && d < MAGNET_RANGE) it.offset = lerp(it.offset, playerX, Math.min(1, dt * 7));
      if (d > -150 && d < 200 && Math.abs(it.offset - playerX) < 0.28) collect(it);
    }
  }
  items = items.filter(it => !it.taken && rel(it.z, pz) > -1000);
}

function updateGate(dt, playing) {
  if (feedback) { feedback.t -= dt; if (feedback.t <= 0) feedback = null; }
  if (!playing) return;
  const pz = (position + PLAYER_Z) % trackLength;
  if (!gate) {
    if (!feedback && fly <= 0) gateTimer -= speed * dt; // let the answer be read first; none while lifted
    if (gateTimer <= 0) spawnGate(pz);
    return;
  }
  const d = rel(gate.z, pz);
  if (!gate.result && d <= 0) passGate(gate);
  else if (gate.result && d < -3000) { gate = null; gateTimer = rand(GATE_GAP[0], GATE_GAP[1]); }
}

// kind groups quick runs of the same pickup (a coin trail) into one growing "+N" beside the score
const SCORE_POP_LIFE = 1.1, POP_COLORS = { coin: '#ffd54f', gate: '#9ef07a', close: '#fff176', ram: '#80d8ff' };
let scorePops = [];
function addScore(n, kind = 'coin') {
  n *= double > 0 ? 2 : 1;
  score += n;
  const last = scorePops[scorePops.length - 1];
  if (last && last.kind === kind && last.life > SCORE_POP_LIFE - 0.5) { last.n += n; last.life = SCORE_POP_LIFE; return; }
  scorePops.push({ n, kind, color: POP_COLORS[kind] || '#fff', life: SCORE_POP_LIFE });
  if (scorePops.length > 3) scorePops.shift();
}

function collect(it) {
  it.taken = true;
  if (it.type === 'coin') {
    addScore(50, 'coin');
    burst(W / 2, H - 90, 10, { speed: 180, life: 0.5, size: 4, colors: [R.coin.face, '#ffffff'], add: true });
    return;
  }
  if (it.type === 'shield') shield = POW_TIME.shield;
  if (it.type === 'double') double = POW_TIME.double;
  if (it.type === 'magnet') magnet = POW_TIME.magnet;
  if (it.type === 'fly') takeOff();
  popup(POWER[it.type].label + '!', POWER[it.type].col, 34);
  burst(W / 2, H - 90, 30, { speed: 300, life: 0.7, size: 5, colors: [POWER[it.type].col, '#ffffff'], add: true });
}

function takeOff() {
  fly = POW_TIME.fly;
  // no checkpoint while lifted: drop an unanswered gate (no strike) and pause new ones
  if (gate && !gate.result) { gate = null; gateTimer = rand(GATE_GAP[0], GATE_GAP[1]); }
  // lay a weaving trail of sky coins across the flight
  const pz = (position + PLAYER_Z) % trackLength, len = Math.max(speed, MAX_SPEED * 0.6) * (POW_TIME.fly - 1.6);
  let l = lane;
  for (let d = 5000, i = 0; d < len; d += 700, i++) {
    if (i % 6 === 5) l = clamp(l + pick([-1, 1]), 0, LANES - 1);
    items.push({ type: 'coin', sky: true, z: (pz + d) % trackLength, offset: LANE_X[l] });
  }
}

// a breakable hazard you hit shatters in a burst of debris instead of being knocked aside
function breakHazard(c) {
  if (!(R.breakable || []).includes(c.kind)) return;
  c.fly = 2; // removed on the next traffic pass
  burst(W / 2, H - 40, 30, { speed: 300, life: 0.8, size: 7, colors: R.debris || ['#857d74', '#6b645d', '#ffffff'], g: 700 });
}

function bump(c) {
  // knock the hazard aside so you don't hit it twice, and lose most of your speed
  c.dead = true; c.fly = 0; c.lift = 0; c.vy = 900; c.rot = 0;
  c.vx = (c.offset >= playerX ? 1 : -1) * rand(1.5, 2.2);
  breakHazard(c);
  dent = DENT_TIME; speed *= 0.35; shake = 18; streak = 0;
  popup(TXT.hit, '#ff8a65', 30);
  popup(TXT.next, '#ffccbc', 20); popups[popups.length - 1].y += 38;
  burst(W / 2, H - 60, 28, { speed: 320, life: 0.7, size: 6, colors: ['#8d6e63', '#ffffff', '#bdbdbd', c.color], g: 600 });
}

function smash(c) {
  c.dead = true; c.fly = 0; c.lift = 0; c.vy = 1800; c.rot = 0;
  c.vx = (c.offset >= playerX ? 1 : -1) * rand(2, 3);
  breakHazard(c);
  addScore(150, 'ram');
  popup(TXT.ram + ' +' + 150 * (double > 0 ? 2 : 1), '#80d8ff', 28);
  shake = 12; speed *= 0.9;
  burst(W / 2, H - 100, 30, { speed: 420, life: 0.6, size: 5, colors: ['#fff59d', '#ffb74d', '#80d8ff', c.color], g: 600, add: true });
}

function crash(reason) {
  state = 'over'; crashTime = time; shake = 24; overReason = reason;
  burst(W / 2, H - 70, 45, { speed: 480, life: 0.8, size: 6, colors: ['#fff59d', '#ffb74d', '#ff7043'], g: 700, add: true });
  burst(W / 2, H - 70, 25, { speed: 120, life: 1.6, size: 14, colors: ['#444', '#666', '#333'], up: -60, grow: 2 });
  const s = Math.floor(score);
  if (s > best) {
    best = s; newBest = true;
    try { localStorage.setItem(R.key, best); } catch (e) {}
  }
}

// ---------- Palette ----------
function palette() {
  const c = (traveled / CYCLE) % 1 * KF.length, i = Math.floor(c);
  let f = c - i;
  f = f < 0.55 ? 0 : (f - 0.55) / 0.45; // hold each time of day, then blend
  f = f * f * (3 - 2 * f);
  const a = KF[i], b = KF[(i + 1) % KF.length], p = {};
  for (const key in a) p[key] = Array.isArray(a[key]) ? mix(a[key], b[key], f) : lerp(a[key], b[key], f);
  return p;
}

// ---------- Rendering ----------
function project(p, camX, camY, camZ) {
  p.camera.x = -camX;
  p.camera.y = p.world.y - camY;
  p.camera.z = p.world.z - camZ;
  const s = p.screen.scale = CAM_D / p.camera.z;
  p.screen.x = Math.round(W / 2 + s * p.camera.x * W / 2);
  p.screen.y = Math.round(H / 2 - s * p.camera.y * H / 2);
  p.screen.w = Math.round(s * ROAD_W * W / 2);
}

function pushLight(x, y, r, c, a, night = false) {
  a *= ctx.globalAlpha;
  r = Math.min(r, 160);
  if (a <= 0.01 || r < 1.5 || x < -r || x > W + r || y < -r || y > H + r) return;
  lights.push({ x, y, r, c, a, night });
}

function withClip(clipY, fn) {
  if (clipY >= H) return fn();
  ctx.save();
  ctx.beginPath(); ctx.rect(-50, -50, W + 100, clipY + 50); ctx.clip();
  fn();
  ctx.restore();
}

// The default sky: gradient, stars and moon at night, sun, clouds, a far hill line, ground to the horizon
function skyBase(pal, opts = {}) {
  const g = ctx.createLinearGradient(0, 0, 0, HORIZON);
  g.addColorStop(0, rgb(pal.top)); g.addColorStop(1, rgb(pal.bottom));
  ctx.fillStyle = g; ctx.fillRect(-30, -30, W + 60, H + 60);

  if (pal.stars > 0.02) {
    ctx.fillStyle = '#fff';
    for (const s of STARS) {
      ctx.globalAlpha = pal.stars * (0.55 + 0.45 * Math.sin(time * s.tw + s.ph));
      ctx.fillRect(s.x, s.y, s.r, s.r);
    }
    ctx.globalAlpha = pal.stars;
    if (opts.moon !== false) {
      ctx.fillStyle = '#f4f1de'; circle(W * 0.38, H * 0.13, 20);
      ctx.fillStyle = rgb(pal.top); circle(W * 0.38 + 9, H * 0.13 - 5, 17);
    }
    ctx.globalAlpha = 1;
  }

  const sy = HORIZON - pal.sunY * (HORIZON - 30), sx = W * 0.7;
  if (opts.sun !== false && sy < HORIZON + 40) {
    const sg = ctx.createRadialGradient(sx, sy, 10, sx, sy, 150);
    sg.addColorStop(0, rgb(pal.sun, 0.55)); sg.addColorStop(1, rgb(pal.sun, 0));
    ctx.fillStyle = sg; ctx.fillRect(sx - 150, sy - 150, 300, 300);
    ctx.fillStyle = rgb(pal.sun); circle(sx, sy, 32);
  }

  if (opts.clouds !== false) {
    ctx.fillStyle = rgb(pal.cloud, opts.cloudA || 0.85);
    for (const c of CLOUDS) {
      const span = W + 300, x = ((c.x - bgCloud) % span + span) % span - 150, s = c.s;
      ellipse(x, c.y, 42 * s, 14 * s); ellipse(x - 28 * s, c.y + 4 * s, 26 * s, 10 * s);
      ellipse(x + 30 * s, c.y + 4 * s, 30 * s, 11 * s); ellipse(x + 6 * s, c.y - 9 * s, 24 * s, 12 * s);
    }
  }
}
function groundFill(color, pal) { // ground (or water) from the horizon down, hazed toward the fog color
  const g = ctx.createLinearGradient(0, HORIZON + 4, 0, H);
  g.addColorStop(0, rgb(mix(hex(color), pal.fog, 0.55))); g.addColorStop(1, rgb(mix(hex(color), [0, 0, 0], pal.dark)));
  ctx.fillStyle = g; ctx.fillRect(-30, HORIZON + 5, W + 60, H);
}

// scale shrinks the range; cut drops everything below that height, so it breaks into separate hills
function drawRange(hts, off, baseY, color, topColor, scale = 1, cut = 0) {
  let peak = 0;
  for (let i = 0; i < hts.length; i += 16) peak = Math.max(peak, hts[i]);
  peak = Math.max(1, peak * scale - cut);
  const g = ctx.createLinearGradient(0, baseY - peak, 0, baseY);
  g.addColorStop(0, rgb(topColor)); g.addColorStop(1, rgb(color));
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.moveTo(-30, H + 30);
  for (let x = -30; x <= W + 30; x += 4) {
    const i = Math.floor(((x + off) % RANGE_P + RANGE_P) % RANGE_P);
    ctx.lineTo(x, baseY - Math.max(0, hts[i] * scale - cut));
  }
  ctx.lineTo(W + 30, H + 30); ctx.fill();
}

// which biome the player is in, the next one, and how far (t, 0–1) the background has blended toward it
// over the last `span` of the current biome, so backdrops change smoothly instead of popping
function biomeBlend(span = 0.1) {
  const n = Math.floor((position + PLAYER_Z) / SEG) % segments.length;
  const i = Math.floor(n / BIOME_LEN), f = (n % BIOME_LEN) / BIOME_LEN;
  return { a: BIOMES[i % BIOMES.length], b: BIOMES[(i + 1) % BIOMES.length], t: f < 1 - span ? 0 : (f - 1 + span) / span };
}

function drawBackground(pal) {
  if (R.drawBackground) return R.drawBackground(pal);
  skyBase(pal);
  drawRange(FAR, bgFar, HORIZON + 6, pal.far, mix(pal.far, pal.fog, 0.35), 0.8);
  groundFill(BIOMES[0].open[0], pal);
}

// default ground: the open ground fills the strip, the three lanes are a band edged by `edge`
function drawSegment(seg, pal) {
  const p1 = seg.p1.screen, p2 = seg.p2.screen, b = seg.biome, alt = seg.dark ? 1 : 0;
  if (R.drawSegment) R.drawSegment(seg, pal, p1, p2);
  else {
    ctx.fillStyle = b.open[alt];
    ctx.fillRect(-30, p2.y, W + 60, p1.y - p2.y);
    if (b.edge) {
      const e1 = p1.w * 1.06, e2 = p2.w * 1.06;
      quad(p1.x - e1, p1.y, p1.x + e1, p1.y, p2.x + e2, p2.y, p2.x - e2, p2.y, b.edge[alt] || b.edge);
    }
    quad(p1.x - p1.w, p1.y, p1.x + p1.w, p1.y, p2.x + p2.w, p2.y, p2.x - p2.w, p2.y, b.lane[alt]);
  }
  if (R.segExtra) R.segExtra(seg, p1, p2, pal);
  if (seg.fog > 0.01) {
    ctx.globalAlpha = seg.fog; ctx.fillStyle = rgb(pal.fog);
    ctx.fillRect(-30, p2.y, W + 60, p1.y - p2.y);
    ctx.globalAlpha = 1;
  }
}

// two rails on every lane, with sleepers every other segment (rail games call this from segExtra)
function railTracks(p1, p2, seg, tie = '#4e3a2a', rail = '#9aa3ad') {
  if (p1.y - p2.y < 0.25) return;
  for (let l = 0; l < LANES; l++) {
    const c1 = p1.x + LANE_X[l] * p1.w, c2 = p2.x + LANE_X[l] * p2.w;
    if (seg.index % 2 === 0) {
      const t1 = p1.w * 0.15, t2 = p2.w * 0.15, dy = (p1.y - p2.y) * 0.45;
      quad(c1 - t1, p1.y, c1 + t1, p1.y, c2 + t2, p1.y - dy, c2 - t2, p1.y - dy, tie);
    }
    for (const s of [-1, 1]) {
      const r1 = c1 + s * p1.w * 0.095, r2 = c2 + s * p2.w * 0.095, w1 = Math.max(0.6, p1.w * 0.012), w2 = Math.max(0.5, p2.w * 0.012);
      quad(r1 - w1, p1.y, r1 + w1, p1.y, r2 + w2, p2.y, r2 - w2, p2.y, rail);
    }
  }
}

function drawWorld(pal) {
  const base = findSeg(position), basePct = (position % SEG) / SEG;
  const pSeg = findSeg(position + PLAYER_Z), pPct = ((position + PLAYER_Z) % SEG) / SEG;
  playerY = lerp(pSeg.p1.world.y, pSeg.p2.world.y, pPct);
  const camY = playerY + CAM_H + flyLift * FLY_ALT, N = segments.length; // the camera climbs with the lifted player
  let maxy = H, x = 0, dx = -(base.curve * basePct);

  for (let n = 0; n < DRAW_DIST; n++) {
    const seg = segments[(base.index + n) % N];
    const camZ = position - (seg.index < base.index ? trackLength : 0);
    const d = n / DRAW_DIST;
    seg.fog = 1 - Math.exp(-d * d * d * 5);
    seg.clip = maxy;
    project(seg.p1, playerX * ROAD_W - x, camY, camZ);
    project(seg.p2, playerX * ROAD_W - x - dx, camY, camZ);
    x += dx; dx += seg.curve;
    if (seg.p1.camera.z <= CAM_D || seg.p2.screen.y >= seg.p1.screen.y || seg.p2.screen.y >= maxy) continue;
    drawSegment(seg, pal);
    maxy = seg.p2.screen.y;
  }

  const bucket = new Map();
  const add = e => {
    const i = Math.floor(e.z / SEG) % N;
    if (!bucket.has(i)) bucket.set(i, []);
    bucket.get(i).push(e);
  };
  cars.forEach(add); items.forEach(add);
  if (gate) add(gate);

  // back to front: scenery, traffic, pickups, then the player at its own depth
  for (let n = DRAW_DIST - 1; n > 0; n--) {
    const seg = segments[(base.index + n) % N];
    const alpha = 1 - seg.fog;
    if (alpha > 0.02) {
      ctx.globalAlpha = alpha;
      withClip(seg.clip, () => {
        const p = seg.p1.screen;
        if (seg.p1.camera.z > 250) {
          for (const s of seg.sprites) {
            drawSprite(s, p.x + p.scale * s.offset * ROAD_W * W / 2, p.y, p.scale * W / 2, seg);
          }
        }
        const ents = bucket.get(seg.index);
        if (ents) {
          ents.sort((a, b) => b.z - a.z);
          for (const e of ents) {
            const pct = (e.z % SEG) / SEG, a = seg.p1.screen, b = seg.p2.screen;
            const scale = lerp(a.scale, b.scale, pct), k = scale * W / 2;
            if (!(k > 0) || k > 2.5) continue;
            const ex = lerp(a.x, b.x, pct) + scale * e.offset * ROAD_W * W / 2, ey = lerp(a.y, b.y, pct);
            if (e.type === 'gate') drawGate(ex, ey, k, e);
            else if (e.type) drawItem(ex, ey, k, e);
            else if (e.dead) {
              if ((R.breakable || []).includes(e.kind)) continue; // a shattered hazard is already gone
              ctx.save();
              ctx.translate(ex, ey - e.lift * k); ctx.rotate(e.rot);
              R.drawVehicle(0, 0, k, e, false, 0);
              ctx.restore();
            } else drawHazard(ex, ey, k, e);
          }
        }
      });
      ctx.globalAlpha = 1;
    }
    if (seg === pSeg) drawPlayer();
  }
}

// Live hazards get a thin dark edge so their outline reads crisply against the lanes; the pages pick
// hazard colors that contrast with their own lanes (keep it that way when adding a hazard)
function drawHazard(x, y, k, c) {
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,.7)';
  ctx.shadowBlur = clamp(c.w * k * 0.04, 1.5, 6);
  R.drawVehicle(x, y, k, c, false, 1);
  ctx.restore();
}

// Swirls and a cloud cushion under the player while the lift power-up carries it (pages can draw their own)
function drawFly(x, y, f) {
  if (R.drawFly) return R.drawFly(x, y, f);
  ctx.globalAlpha = 0.75 * f;
  ctx.fillStyle = '#ffffff';
  for (const s of [-0.3, 0, 0.3]) ellipse(x + s * PW, y + 4, PW * 0.28, 12 * f);
  ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = 3; ctx.lineCap = 'round';
  for (let i = 0; i < 4; i++) {
    const side = i % 2 ? 1 : -1, t = (time * 1.6 + i * 0.25) % 1;
    const sx = x + side * PW * (0.55 + 0.1 * i % 2), sy = y - PH * (0.2 + 0.6 * t);
    ctx.beginPath(); ctx.arc(sx, sy, 14 + 6 * (i % 2), side > 0 ? Math.PI : 0, side > 0 ? Math.PI * 1.8 : Math.PI * 0.8, side < 0); ctx.stroke();
  }
  ctx.lineCap = 'butt'; ctx.globalAlpha = 1;
}

function drawPlayer() {
  const bounce = R.bounce ? R.bounce() : Math.sin(time * 2.4) * 2 + Math.sin(time * 5.3) * (speed / MAX_SPEED) * 1.2;
  const lift = flyLift * FLY_PX, hover = flyLift * Math.sin(time * 3) * 4;
  const x = W / 2, y = H - 14 + (flyLift > 0 ? 0 : bounce) - lift + hover;
  if (magnet > 0) { // pulsing pink aura
    const a = 0.45 + 0.15 * Math.sin(time * 10);
    const g = ctx.createRadialGradient(x, y - PH * 0.5, PW * 0.2, x, y - PH * 0.5, PW * 0.9);
    g.addColorStop(0, `rgba(255,79,123,${a})`); g.addColorStop(1, 'rgba(255,79,123,0)');
    ctx.fillStyle = g; ctx.fillRect(x - PW, y - PH * 1.5, PW * 2, PH * 2);
    ctx.strokeStyle = `rgba(255,120,160,${a})`; ctx.lineWidth = 2; ctx.setLineDash([6, 8]);
    ctx.lineDashOffset = -time * 40;
    ctx.beginPath(); ctx.ellipse(x, y - PH * 0.4, PW * 0.8, PH * 0.7, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.setLineDash([]);
  }
  ctx.save();
  ctx.translate(x, y); ctx.rotate(tilt * (R.tilt == null ? 0.08 : R.tilt)); ctx.translate(-x, -y);
  if (flyLift > 0.02) drawFly(x, y, flyLift);
  R.drawVehicle(x, y, PK, PLAYER, true, 1);
  if (shield > 0 && (shield > 1.5 || Math.sin(time * 30) > 0)) {
    const pulse = 1 + Math.sin(time * 8) * 0.03;
    ctx.fillStyle = 'rgba(80,200,255,.14)'; ctx.strokeStyle = 'rgba(120,220,255,.85)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(x, y - PH * 0.5, PW * 0.72 * pulse, PH * 0.62 * pulse, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  }
  ctx.restore();
}

// ---------- Scenery sprites ----------
function drawSprite(s, x, y, k, seg) {
  const def = SPRITES[s.type] || { w: 1000, h: 1000 }, w = def.w * k, h = def.h * k;
  if (h < 1.5 || x + w < -50 || x - w > W + 50) return;
  if (s.type === 'billboard') return drawBillboard(s, x, y, w, h);
  R.drawSprite(s, x, y, k, seg, w, h);
}

function drawBillboard(s, x, y, w, h) { // a banner on two posts
  ctx.fillStyle = R.postColor || '#5d4037';
  ctx.fillRect(x - w * 0.32, y - h * 0.55, w * 0.05, h * 0.55);
  ctx.fillRect(x + w * 0.27, y - h * 0.55, w * 0.05, h * 0.55);
  ctx.fillStyle = s.color; rrect(x - w / 2, y - h, w, h * 0.5, w * 0.03);
  ctx.strokeStyle = '#fff'; ctx.lineWidth = Math.max(1, w * 0.015); ctx.stroke();
  if (w > 40) {
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = `bold italic ${Math.round(h * 0.17)}px system-ui, sans-serif`;
    ctx.fillText(s.text, x, y - h * 0.75, w * 0.9);
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  }
}

// ---------- Pickups ----------
function drawCoin(x, y, r, spin) {
  const sx = Math.max(0.12, Math.abs(Math.cos(spin)));
  ctx.fillStyle = R.coin.rim; ellipse(x, y, r * sx, r);
  ctx.fillStyle = R.coin.face; ellipse(x, y, r * sx * 0.78, r * 0.78);
  ctx.fillStyle = R.coin.shine || '#ffffff'; ellipse(x - r * sx * 0.25, y - r * 0.3, r * sx * 0.18, r * 0.22);
}

function drawBadge(type, x, y, r) {
  const P = POWER[type];
  const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
  g.addColorStop(0, '#ffffff'); g.addColorStop(0.3, P.col); g.addColorStop(1, P.deep);
  ctx.fillStyle = g; circle(x, y, r);
  ctx.lineWidth = Math.max(1, r * 0.12); ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  if (type === 'shield') {
    ctx.moveTo(x, y - r * 0.6); ctx.lineTo(x + r * 0.48, y - r * 0.4); ctx.lineTo(x + r * 0.44, y + r * 0.08);
    ctx.quadraticCurveTo(x + r * 0.3, y + r * 0.48, x, y + r * 0.62);
    ctx.quadraticCurveTo(x - r * 0.3, y + r * 0.48, x - r * 0.44, y + r * 0.08);
    ctx.lineTo(x - r * 0.48, y - r * 0.4); ctx.closePath(); ctx.fill();
  } else if (type === 'magnet') { // horseshoe magnet
    ctx.lineWidth = r * 0.26; ctx.strokeStyle = '#fff'; ctx.lineCap = 'butt';
    ctx.beginPath(); ctx.arc(x, y - r * 0.02, r * 0.34, Math.PI, 0, true);
    ctx.lineTo(x + r * 0.34, y - r * 0.42); ctx.moveTo(x - r * 0.34, y - r * 0.02); ctx.lineTo(x - r * 0.34, y - r * 0.42);
    ctx.stroke();
    ctx.fillStyle = P.deep;
    ctx.fillRect(x - r * 0.47, y - r * 0.56, r * 0.26, r * 0.16); ctx.fillRect(x + r * 0.21, y - r * 0.56, r * 0.26, r * 0.16);
  } else if (type === 'dent') { // warning "!"
    ctx.fillRect(x - r * 0.1, y - r * 0.55, r * 0.2, r * 0.66); circle(x, y + r * 0.38, r * 0.12);
  } else if (type === 'fly') { // winged up-arrow
    ctx.moveTo(x, y - r * 0.62); ctx.lineTo(x + r * 0.26, y - r * 0.2); ctx.lineTo(x + r * 0.1, y - r * 0.2);
    ctx.lineTo(x + r * 0.1, y + r * 0.5); ctx.lineTo(x - r * 0.1, y + r * 0.5); ctx.lineTo(x - r * 0.1, y - r * 0.2);
    ctx.lineTo(x - r * 0.26, y - r * 0.2); ctx.closePath(); ctx.fill();
    for (const s of [-1, 1]) {
      ctx.beginPath(); ctx.moveTo(x + s * r * 0.14, y + r * 0.02);
      ctx.quadraticCurveTo(x + s * r * 0.7, y - r * 0.35, x + s * r * 0.66, y + r * 0.1);
      ctx.quadraticCurveTo(x + s * r * 0.4, y + r * 0.06, x + s * r * 0.14, y + r * 0.26); ctx.closePath(); ctx.fill();
    }
  } else {
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = `bold ${Math.round(r * 0.95)}px system-ui, sans-serif`;
    ctx.fillText('×2', x, y + r * 0.04);
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  }
}

function drawItem(x, y, k, it) {
  const bob = Math.sin(time * 4 + it.z * 0.01) * 40;
  const r = (it.type === 'coin' ? 110 : 150) * k;
  if (r < 1) return;
  // sky coins float at lift altitude (vertical world units project by H/W relative to sprite size)
  const cy = y - (280 + (it.sky ? FLY_ALT * H / W + FLY_PX / PK : 0) + bob) * k;
  ctx.fillStyle = it.sky ? 'rgba(0,0,0,.2)' : 'rgba(0,0,0,.25)'; ellipse(x, y, r * 0.9, r * 0.25); // sky coins' shadows show how high they float
  if (it.type === 'coin') {
    drawCoin(x, cy, r, time * 4 + it.z * 0.002);
    pushLight(x, cy, r * 2.2, R.coin.light, 0.35);
    return;
  }
  const P = POWER[it.type];
  const bh = 1100 * k, bg = ctx.createLinearGradient(0, cy - bh, 0, cy);
  bg.addColorStop(0, `rgba(${P.glow},0)`); bg.addColorStop(1, `rgba(${P.glow},.4)`);
  ctx.fillStyle = bg; ctx.fillRect(x - r * 0.6, cy - bh, r * 1.2, bh);
  drawBadge(it.type, x, cy, r);
  pushLight(x, cy, r * 3, P.glow, 0.6);
}

// ---------- Checkpoint gates ----------
const LANE_COL = ['#2d5deb', '#f2b705', '#8a3fd6'], LETTERS = ['A', 'B', 'C'];
const LANE_TXT = ['#fff', '#111a3f', '#fff']; // dark text on the gold lane, white on gold is hard to read
function drawGate(x, y, k, g) {
  const lw = k * ROAD_W * 2 / 3, top = y - k * 1600, bh = k * 560;
  if (lw < 3) return;
  // posts and crossbeam
  ctx.fillStyle = R.gatePost || '#4e342e';
  for (const s of [-1, 1]) ctx.fillRect(x + s * k * ROAD_W * 1.04 - k * 45, top, k * 90, y - top);
  ctx.fillRect(x - k * ROAD_W * 1.08, top - k * 60, k * ROAD_W * 2.16, k * 70);
  for (let i = 0; i < 3; i++) {
    const lx = x + k * LANE_X[i] * ROAD_W, bw = lw * 0.94;
    let col = LANE_COL[i];
    if (g.result) col = i === g.answer ? '#2e9d4f' : i === g.picked ? '#d83a2e' : '#555b66';
    ctx.fillStyle = col; rrect(lx - bw / 2, top, bw, bh, k * 30);
    ctx.lineWidth = Math.max(1, k * 18); ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.stroke();
    pushLight(lx, top + bh / 2, bw * 0.7, '255,255,255', 0.25);
    if (bh > 9) {
      // outlined text so the sign stays legible against any banner or sky colour
      const txt = g.result ? '#fff' : LANE_TXT[i];
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
      ctx.strokeStyle = txt === '#fff' ? 'rgba(0,0,0,.55)' : 'rgba(255,255,255,.6)';
      ctx.font = `900 ${Math.round(bh * 0.34)}px Lato, system-ui, sans-serif`;
      ctx.lineWidth = Math.max(1, bh * 0.05); ctx.strokeText(LETTERS[i], lx, top + bh * 0.3, bw * 0.9);
      ctx.fillStyle = txt; ctx.fillText(LETTERS[i], lx, top + bh * 0.3, bw * 0.9);
      ctx.font = `800 ${Math.round(bh * 0.27)}px Lato, system-ui, sans-serif`;
      ctx.lineWidth = Math.max(1, bh * 0.04); ctx.strokeText(g.opts[i], lx, top + bh * 0.7, bw * 0.92);
      ctx.fillStyle = txt; ctx.fillText(g.opts[i], lx, top + bh * 0.7, bw * 0.92);
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    }
  }
}

function wrap(text, maxW) {
  const words = text.split(' '), lines = [];
  let line = '';
  for (const w of words) {
    const t = line ? line + ' ' + w : w;
    if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t;
  }
  if (line) lines.push(line);
  return lines;
}

function drawQuestion() {
  const x = 208, w = W - 220, pad = 14;
  const solid = (h) => { ctx.fillStyle = 'rgba(8,12,26,.93)'; rrect(x, 12, w, h, 10); }; // near-opaque so the sky can't bleed through
  if (gate && !gate.result) {
    const [topic, prompt] = gate.q;
    ctx.font = '900 22px Lato, system-ui, sans-serif';
    const lines = wrap(prompt, w - pad * 2);
    const qTop = 58, chipY = qTop + lines.length * 27 - 8, chipH = 36, h = chipY + chipH + 18 - 12;
    solid(h);
    ctx.fillStyle = '#d8f13a'; ctx.fillRect(x, 12, 5, h);
    const left = Math.max(0, rel(gate.z, (position + PLAYER_Z) % trackLength));
    ctx.fillStyle = '#b8c6dc'; ctx.font = '800 11px Lato, system-ui, sans-serif';
    ctx.fillText(`CHECKPOINT ${asked + 1} · TOPIC ${topic}`, x + pad, 31);
    ctx.textAlign = 'right'; ctx.fillText(`GATE IN ${Math.round(left / 100)} m`, x + w - pad, 31); ctx.textAlign = 'left';
    ctx.fillStyle = '#fff'; ctx.font = '900 22px Lato, system-ui, sans-serif';
    lines.forEach((l, i) => ctx.fillText(l, x + pad, qTop + i * 27));
    const cw = (w - pad * 2 - 16) / 3;
    for (let i = 0; i < 3; i++) {
      const cx = x + pad + i * (cw + 8);
      ctx.fillStyle = LANE_COL[i]; rrect(cx, chipY, cw, chipH, 6);
      // lane letter in a white disc, then the answer at the largest size that fits (never squashed)
      ctx.fillStyle = '#fff'; circle(cx + 17, chipY + chipH / 2, 11);
      ctx.fillStyle = LANE_COL[i] === '#f2b705' ? '#111a3f' : LANE_COL[i];
      ctx.font = '900 13px Lato, system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(LETTERS[i], cx + 17, chipY + chipH / 2 + 1);
      const room = cw - 40;
      let size = 16;
      do { ctx.font = `800 ${size}px Lato, system-ui, sans-serif`; } while (ctx.measureText(gate.opts[i]).width > room && --size > 11);
      ctx.fillStyle = LANE_TXT[i];
      ctx.fillText(gate.opts[i], cx + 34 + room / 2, chipY + chipH / 2 + 1, room);
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    }
    // countdown bar: shrinks as the gate gets closer
    const by = chipY + chipH + 8, frac = clamp(left / (gate.d0 || GATE_AHEAD), 0, 1);
    ctx.fillStyle = 'rgba(255,255,255,.15)'; rrect(x + pad, by, w - pad * 2, 4, 2);
    ctx.fillStyle = frac < 0.25 ? '#ff8a65' : '#d8f13a'; rrect(x + pad, by, (w - pad * 2) * frac, 4, 2);
  } else if (feedback) {
    const { ok, g } = feedback;
    ctx.font = '15px Lato, system-ui, sans-serif';
    const lines = wrap(g.q[5], w - pad * 2);
    const h = 50 + lines.length * 20;
    ctx.globalAlpha = Math.min(1, feedback.t * 2);
    solid(h);
    ctx.fillStyle = ok ? '#2e9d4f' : '#d83a2e'; ctx.fillRect(x, 12, 5, h);
    ctx.fillStyle = ok ? '#9ef07a' : '#ff8a80'; ctx.font = '900 18px Lato, system-ui, sans-serif';
    ctx.fillText((ok ? '✓ CORRECT: ' : '✕ ANSWER: ') + g.q[2], x + pad, 38, w - pad * 2);
    ctx.fillStyle = '#e8eef8'; ctx.font = '15px Lato, system-ui, sans-serif';
    lines.forEach((l, i) => ctx.fillText(l, x + pad, 62 + i * 20));
    ctx.globalAlpha = 1;
  } else if (fly > 0) {
    panel(x, 12, w, 44);
    ctx.fillStyle = POWER.fly.col; ctx.fillRect(x, 12, 5, 44);
    ctx.fillStyle = '#8ff5e0'; ctx.font = '900 15px Lato, system-ui, sans-serif';
    ctx.fillText(`${R.fly.hud} · ${Math.ceil(fly)}s: checkpoints paused, grab the coins up high!`, x + pad, 39, w - pad * 2);
  }
}

// ---------- Lights, effects, HUD ----------
function drawLights(pal) {
  ctx.globalCompositeOperation = 'lighter';
  for (const l of lights) {
    const a = Math.min(1, l.night ? l.a * pal.dark * 1.6 : l.a * (0.25 + pal.dark));
    if (a < 0.01) continue;
    const g = ctx.createRadialGradient(l.x, l.y, 0, l.x, l.y, l.r);
    g.addColorStop(0, `rgba(${l.c},${a})`); g.addColorStop(1, `rgba(${l.c},0)`);
    ctx.fillStyle = g; ctx.fillRect(l.x - l.r, l.y - l.r, l.r * 2, l.r * 2);
  }
  ctx.globalCompositeOperation = 'source-over';
}

function drawParticles() {
  for (const p of particles) {
    const t = p.life / p.max;
    ctx.globalAlpha = Math.max(0, t);
    ctx.globalCompositeOperation = p.add ? 'lighter' : 'source-over';
    ctx.fillStyle = p.color;
    circle(p.x, p.y, p.size * (1 + (1 - t) * p.grow));
  }
  ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
}

function panel(x, y, w, h) { ctx.fillStyle = 'rgba(10,14,22,.62)'; rrect(x, y, w, h, 10); }

function drawHUD() {
  ctx.textBaseline = 'alphabetic';
  panel(12, 12, 184, 76);
  ctx.textAlign = 'left'; ctx.fillStyle = '#9fb0c8'; ctx.font = '600 11px system-ui, sans-serif';
  ctx.fillText('SCORE', 24, 30);
  ctx.fillText('BEST ' + best.toLocaleString(), 24, 78);
  ctx.textAlign = 'right'; ctx.font = '15px system-ui, sans-serif';
  ctx.fillStyle = '#ff5a5a'; ctx.fillText('♥'.repeat(strikes), 184, 31);
  ctx.fillStyle = 'rgba(255,255,255,.2)'; ctx.fillText('♥'.repeat(3 - strikes), 184 - ctx.measureText('♥'.repeat(strikes)).width, 31);
  ctx.textAlign = 'left'; ctx.font = 'bold 24px system-ui, sans-serif';
  ctx.fillStyle = double > 0 ? '#d7a6ff' : '#fff';
  const s = Math.floor(score).toLocaleString();
  ctx.fillText(s, 24, 58);
  // "+50", "+500"... rising and fading just right of the score as points come in
  let px = 24 + ctx.measureText(s).width + 8;
  ctx.font = 'bold 16px system-ui, sans-serif';
  for (const p of scorePops) {
    const t = 1 - p.life / SCORE_POP_LIFE;
    ctx.globalAlpha = Math.min(1, p.life * 2.5);
    ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(0,0,0,.6)'; ctx.strokeText('+' + p.n, px, 57 - t * 12);
    ctx.fillStyle = p.color; ctx.fillText('+' + p.n, px, 57 - t * 12);
    px += ctx.measureText('+' + p.n).width + 6;
  }
  ctx.globalAlpha = 1;
  drawQuestion();

  let y = 96;
  for (const [type, t] of [['dent', dent], ['fly', fly], ['shield', shield], ['double', double], ['magnet', magnet]]) {
    if (t <= 0) continue;
    panel(12, y, 184, 28);
    drawBadge(type, 28, y + 14, 9);
    ctx.fillStyle = '#fff'; ctx.font = 'bold 11px system-ui, sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(POWER[type].label, 44, y + 18, 66);
    ctx.fillStyle = 'rgba(255,255,255,.18)'; rrect(112, y + 11, 74, 6, 3);
    ctx.fillStyle = POWER[type].col; rrect(112, y + 11, 74 * t / POW_TIME[type], 6, 3);
    y += 34;
  }

  // speedometer
  const cx = W - 78, cy = H - 70, Rr = 48, a0 = Math.PI * 0.75, a1 = Math.PI * 2.25;
  const top = R.speedTop || 24, kn = speed / MAX_SPEED * top, frac = clamp(kn / (top * 1.5), 0, 1);
  ctx.fillStyle = 'rgba(10,14,22,.62)'; circle(cx, cy, Rr + 12);
  ctx.lineCap = 'round'; ctx.lineWidth = 7;
  ctx.strokeStyle = 'rgba(255,255,255,.15)'; ctx.beginPath(); ctx.arc(cx, cy, Rr, a0, a1); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,82,82,.55)'; ctx.beginPath(); ctx.arc(cx, cy, Rr, a0 + (a1 - a0) * (2 / 3), a1); ctx.stroke();
  ctx.strokeStyle = '#4fc3f7';
  ctx.beginPath(); ctx.arc(cx, cy, Rr, a0, a0 + (a1 - a0) * Math.max(0.001, frac)); ctx.stroke();
  const na = a0 + (a1 - a0) * frac;
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(na) * (Rr - 12), cy + Math.sin(na) * (Rr - 12)); ctx.stroke();
  ctx.lineCap = 'butt';
  ctx.fillStyle = '#fff'; circle(cx, cy, 4);
  ctx.textAlign = 'center'; ctx.font = 'bold 20px system-ui, sans-serif';
  ctx.fillText(Math.round(kn).toLocaleString(), cx, cy + 30);
  ctx.fillStyle = '#9fb0c8'; ctx.font = '600 10px system-ui, sans-serif'; ctx.fillText(R.speedUnit || 'MPH', cx, cy + 42);
  ctx.textAlign = 'left';
}

function drawPopups() {
  ctx.textAlign = 'center';
  for (const p of popups) {
    ctx.globalAlpha = Math.min(1, p.life * 2);
    ctx.font = `bold italic ${p.size}px system-ui, sans-serif`;
    ctx.lineWidth = 4; ctx.strokeStyle = 'rgba(0,0,0,.6)'; ctx.strokeText(p.text, p.x, p.y);
    ctx.fillStyle = p.color; ctx.fillText(p.text, p.x, p.y);
  }
  ctx.globalAlpha = 1; ctx.textAlign = 'left';
}

function drawOverlay() {
  ctx.fillStyle = 'rgba(5,8,15,.55)'; ctx.fillRect(0, 0, W, H);
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  const title = state === 'over' ? (overReason === 'strikes' ? R.overStrikes : R.overCrash) : R.title;
  ctx.font = 'bold italic 60px system-ui, sans-serif';
  const g = ctx.createLinearGradient(0, H / 2 - 150, 0, H / 2 - 90);
  if (state === 'over') { g.addColorStop(0, '#ffab91'); g.addColorStop(1, '#e53935'); }
  else { g.addColorStop(0, '#ffe082'); g.addColorStop(1, '#ff5722'); }
  ctx.lineWidth = 6; ctx.strokeStyle = 'rgba(0,0,0,.5)'; ctx.strokeText(title, W / 2, H / 2 - 95, W - 40);
  ctx.fillStyle = g; ctx.fillText(title, W / 2, H / 2 - 95, W - 40);
  ctx.fillStyle = '#fff'; ctx.font = '18px system-ui, sans-serif';
  if (state === 'over') {
    ctx.font = 'bold 26px system-ui, sans-serif';
    ctx.fillText('Score: ' + Math.floor(score).toLocaleString(), W / 2, H / 2 - 40);
    ctx.font = '18px system-ui, sans-serif';
    ctx.fillStyle = newBest ? '#ffd54f' : '#cfd8e3';
    ctx.fillText(newBest ? '★ NEW BEST! ★' : 'Best: ' + best.toLocaleString(), W / 2, H / 2 - 10);
    ctx.fillStyle = '#fff'; ctx.font = '600 16px system-ui, sans-serif';
    ctx.fillText(`Checkpoints: ${right} / ${asked} correct` + (asked > right ? ': review the red ones in the Checkpoint Log' : ''), W / 2, H / 2 + 30);
  } else {
    ctx.fillText(R.unitLine, W / 2, H / 2 - 62);
    ctx.font = '15px system-ui, sans-serif'; ctx.fillStyle = '#cfd8e3';
    ctx.fillText('Switch lanes (← →) into the gate with the right answer. Right answers earn power-ups:', W / 2, H / 2 - 36);
    const items = [['shield', 'Ramming shield'], ['double', 'Double points'], ['magnet', 'Coin magnet'], ['fly', R.fly.menu]];
    items.forEach(([t, label], i) => {
      const x = W / 2 - 270 + i * 180;
      drawBadge(t, x, H / 2 + 5, 18);
      ctx.fillStyle = '#fff'; ctx.font = '600 14px system-ui, sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(label, x, H / 2 + 45);
    });
  }
  if (Math.sin(time * 5) > -0.3) {
    ctx.fillStyle = '#fff'; ctx.font = 'bold 20px system-ui, sans-serif';
    ctx.fillText('Press Space to ' + (state === 'over' ? R.again : 'start'), W / 2, H / 2 + 100);
  }
  ctx.textAlign = 'left';
}

function render() {
  const pal = palette();
  lights.length = 0;
  ctx.save();
  if (shake > 0) ctx.translate(rand(-shake, shake), rand(-shake, shake));
  drawBackground(pal);
  drawWorld(pal);
  if (pal.dark > 0.01) { ctx.fillStyle = `rgba(8,12,35,${pal.dark})`; ctx.fillRect(-30, -30, W + 60, H + 60); }
  drawLights(pal);
  drawParticles();
  ctx.restore();
  ctx.fillStyle = VIGNETTE; ctx.fillRect(0, 0, W, H);
  drawPopups();
  if (state === 'playing') { drawHUD(); if (paused) drawPaused(); }
  else drawOverlay();
}

// ---------- Input ----------
const KEYMAP = { arrowleft: 'left', a: 'left', arrowright: 'right', d: 'right',
  arrowup: 'up', w: 'up', arrowdown: 'down', s: 'down' };
const typing = e => e.target.closest && e.target.closest('input, textarea, select, [contenteditable]');
addEventListener('keydown', e => {
  if (typing(e)) return;
  const k = e.key.toLowerCase(), dir = KEYMAP[k];
  if (dir || k === ' ') e.preventDefault();
  if (k === ' ' && !e.repeat) { if (state === 'playing') togglePause(); else start(); }
  if (!e.repeat) shiftLane(dir === 'left' ? -1 : dir === 'right' ? 1 : 0);
});
// one lane per press, like a lane runner
function shiftLane(d) {
  if (state === 'playing' && !paused && d) lane = clamp(lane + d, 0, LANES - 1);
}
// Touch / mouse: swipe left/right, or tap the left/right half of the screen
let swipeX = null;
canvas.addEventListener('pointerdown', e => {
  if (state !== 'playing') { start(); return; }
  if (paused) { paused = false; return; }
  swipeX = e.clientX;
});
canvas.addEventListener('pointerup', e => {
  if (swipeX === null) return;
  const r = canvas.getBoundingClientRect(), dx = e.clientX - swipeX;
  if (Math.abs(dx) > 30) shiftLane(Math.sign(dx));
  else shiftLane((e.clientX - r.left) / r.width < 0.5 ? -1 : 1);
  swipeX = null;
});
canvas.addEventListener('pointercancel', () => { swipeX = null; });

// ---------- Pause and full screen (visible buttons; Space also pauses during a run) ----------
const pauseBtn = document.getElementById('pauseBtn'), fsBtn = document.getElementById('fsBtn'), stage = document.getElementById('stage');
const fsElement = () => document.fullscreenElement || document.webkitFullscreenElement;
function togglePause() { if (state === 'playing') paused = !paused; }
pauseBtn.addEventListener('click', () => { togglePause(); pauseBtn.blur(); });
if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled)) {
  fsBtn.disabled = true; fsBtn.title = "Full screen isn't available in this browser";
}
fsBtn.addEventListener('click', () => {
  if (fsElement()) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  else (stage.requestFullscreen || stage.webkitRequestFullscreen).call(stage);
  fsBtn.blur();
});
let btnKey = '';
function syncButtons() {
  const fs = !!fsElement(), key = state + paused + fs;
  if (key === btnKey) return;
  btnKey = key;
  pauseBtn.disabled = state !== 'playing';
  pauseBtn.textContent = paused ? '▶ Resume (Space)' : '❚❚ Pause (Space)';
  fsBtn.textContent = fs ? 'Exit full screen' : '⛶ Full screen';
}
function drawPaused() {
  ctx.fillStyle = 'rgba(5,8,15,.7)'; ctx.fillRect(0, 0, W, H);
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.font = 'bold italic 56px system-ui, sans-serif';
  ctx.lineWidth = 6; ctx.strokeStyle = 'rgba(0,0,0,.5)'; ctx.strokeText('PAUSED', W / 2, H / 2 + 6);
  ctx.fillStyle = '#fff'; ctx.fillText('PAUSED', W / 2, H / 2 + 6);
  ctx.font = '18px system-ui, sans-serif'; ctx.fillStyle = '#cfd8e3';
  ctx.fillText('Press Space or tap the game to keep going', W / 2, H / 2 + 44);
  ctx.textAlign = 'left';
}

// ---------- Main loop ----------
buildTrack();
reset();
let last = performance.now();
// Sharp at any size: the game is always drawn in 800×500 units, but the canvas's real pixel size follows
// how big it shows on screen (and the screen's pixel density), so full screen isn't a blurry stretch.
// Capped at 1920 px wide so school laptops stay smooth in full screen.
let VIEW_S = 1;
function fitCanvas() {
  const cssW = canvas.clientWidth || W;
  const s = clamp(cssW * (window.devicePixelRatio || 1) / W, 1, 1920 / W);
  const bw = Math.round(W * s), bh = Math.round(H * s);
  if (canvas.width !== bw || canvas.height !== bh) { canvas.width = bw; canvas.height = bh; }
  VIEW_S = canvas.width / W;
}
function showError(err) {
  ctx.setTransform(VIEW_S, 0, 0, VIEW_S, 0, 0);
  ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#300'; ctx.fillRect(0, H - 60, W, 60);
  ctx.fillStyle = '#fff'; ctx.font = '14px system-ui, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('Error: ' + (err && err.message || err), 12, H - 26, W - 24);
}
function frame(now) {
  const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
  last = now;
  try {
    fitCanvas();
    ctx.setTransform(VIEW_S, 0, 0, VIEW_S, 0, 0);
    if (!paused) update(dt);
    render();
    syncButtons();
  } catch (err) {
    console.error(err);
    showError(err);
  }
  requestAnimationFrame(frame);
}
// Draw the first frame right away so the screen is never left blank
frame(performance.now());
