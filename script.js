/* ---------- Generated artwork (seeded, so it looks the same every load) ---------- */
function rng(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const W = 1200, H = 800;
const vgrad = (id, a, b) =>
  `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;

function artNature(r, p) {
  let s = `<defs>${vgrad("s", p.sky[0], p.sky[1])}</defs><rect width="${W}" height="${H}" fill="url(#s)"/>`;
  s += `<circle cx="${200 + r() * 800}" cy="${170 + r() * 130}" r="${50 + r() * 40}" fill="${p.sun}" opacity=".92"/>`;
  p.hills.forEach((c, i) => {
    const base = 360 + i * 120, amp = 130 - i * 20;
    let d = `M0 ${H} L0 ${base}`;
    for (let x = 0; x <= W; x += 100) d += ` L${x} ${(base + (r() - 0.5) * 2 * amp).toFixed(0)}`;
    s += `<path d="${d} L${W} ${H} Z" fill="${c}" stroke="${c}" stroke-linejoin="round"/>`;
  });
  return s;
}

function artSpace(r, p) {
  let s = `<defs>${vgrad("b", p.bg[0], p.bg[1])}
    <filter id="f" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="55"/></filter>
    <linearGradient id="pl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.planet[0]}"/><stop offset="1" stop-color="${p.planet[1]}"/></linearGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#b)"/>`;
  p.neb.forEach(c => {
    s += `<circle cx="${r() * W}" cy="${r() * H}" r="${140 + r() * 160}" fill="${c}" opacity=".42" filter="url(#f)"/>`;
  });
  for (let i = 0; i < 160; i++) {
    s += `<circle cx="${(r() * W).toFixed(0)}" cy="${(r() * H).toFixed(0)}" r="${(0.5 + r() * 1.8).toFixed(1)}" fill="#fff" opacity="${(0.3 + r() * 0.7).toFixed(2)}"/>`;
  }
  const cx = 250 + r() * 700, cy = 250 + r() * 300, pr = 70 + r() * 60;
  s += `<ellipse cx="${cx}" cy="${cy}" rx="${pr * 2}" ry="${pr * 0.45}" fill="none" stroke="${p.planet[0]}" stroke-width="5" opacity=".5" transform="rotate(-18 ${cx} ${cy})"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="${pr}" fill="url(#pl)"/>`;
  s += `<path d="M${cx - pr * 2} ${cy + pr * 0.4} Q${cx} ${cy + pr * 0.9} ${cx + pr * 2} ${cy - pr * 0.3}" fill="none" stroke="${p.planet[0]}" stroke-width="5" opacity=".7" transform="rotate(-18 ${cx} ${cy})" clip-path="inset(50% 0 0 0)"/>`;
  return s;
}

function artCity(r, p) {
  let s = `<defs>${vgrad("s", p.sky[0], p.sky[1])}</defs><rect width="${W}" height="${H}" fill="url(#s)"/>`;
  s += `<circle cx="${150 + r() * 900}" cy="${130 + r() * 90}" r="46" fill="${p.moon}" opacity=".9"/>`;
  [[p.bldg[0], 0.75, 520, 260], [p.bldg[1], 1, 420, 330]].forEach(([fill, op, baseTop, spread], layer) => {
    let x = layer ? -20 : -60;
    while (x < W) {
      const w = 60 + r() * 80, h = 140 + r() * spread, top = H - h - (layer ? 0 : 40);
      s += `<rect x="${x.toFixed(0)}" y="${top.toFixed(0)}" width="${w.toFixed(0)}" height="${(h + 60).toFixed(0)}" fill="${fill}" opacity="${op}"/>`;
      if (layer) {
        for (let wy = top + 18; wy < H - 24; wy += 26) {
          for (let wx = x + 12; wx < x + w - 14; wx += 20) {
            if (r() > 0.55) s += `<rect x="${wx.toFixed(0)}" y="${wy.toFixed(0)}" width="8" height="12" fill="${p.win}" opacity="${(0.5 + r() * 0.5).toFixed(2)}"/>`;
          }
        }
      }
      x += w + 4 + r() * 10;
    }
  });
  return s;
}

function artOcean(r, p) {
  let s = `<defs>${vgrad("s", p.sky[0], p.sky[1])}</defs><rect width="${W}" height="${H}" fill="url(#s)"/>`;
  s += `<circle cx="${300 + r() * 600}" cy="300" r="${70 + r() * 30}" fill="${p.sun}" opacity=".9"/>`;
  p.waves.forEach((c, i) => {
    const y = 380 + i * 95, amp = 14 + i * 6, f = 70 + r() * 60, ph = r() * 6;
    let d = `M0 ${H} L0 ${y}`;
    for (let x = 0; x <= W; x += 20) d += ` L${x} ${(y + Math.sin(x / f + ph) * amp).toFixed(1)}`;
    s += `<path d="${d} L${W} ${H} Z" fill="${c}"/>`;
  });
  return s;
}

function artAbstract(r, p) {
  let s = `<defs>${vgrad("s", p.bg[0], p.bg[1])}</defs><rect width="${W}" height="${H}" fill="url(#s)"/>`;
  for (let i = 0; i < 7; i++) {
    const c = p.colors[i % p.colors.length];
    s += `<circle cx="${(r() * W).toFixed(0)}" cy="${(r() * H).toFixed(0)}" r="${(90 + r() * 200).toFixed(0)}" fill="${c}" opacity="${(0.5 + r() * 0.4).toFixed(2)}"/>`;
  }
  for (let i = 0; i < 4; i++) {
    s += `<path d="M${(r() * W).toFixed(0)} 0 Q${(r() * W).toFixed(0)} ${(r() * H).toFixed(0)} ${(r() * W).toFixed(0)} ${H}" fill="none" stroke="#fff" stroke-width="3" opacity=".35"/>`;
  }
  return s;
}

const ART = { Nature: artNature, Space: artSpace, City: artCity, Ocean: artOcean, Abstract: artAbstract };
const makeArt = (cat, seed, p) =>
  "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">${ART[cat](rng(seed), p)}</svg>`);

/* ---------- Image list. ph = Unsplash photo path. Add src: "your-photo.jpg" to use your own image instead. p = colors for the generated fallback art. ---------- */
const U = (ph, w) => `https://images.unsplash.com/${ph}?auto=format&fit=crop&w=${w}&q=75`;
const IMAGES = [
  { title: "Lake and Mountain", cat: "Nature", ph: "photo-1465056836041-7f43ac27dcb5", by: "Tobias Keller", link: "https://unsplash.com/photos/73F4pKoUkM0?utm_source=image_gallery&utm_medium=referral",  p: { sky: ["#ff9a76", "#ffd6a5"], sun: "#fff3c4", hills: ["#8e6c88", "#5b4b7a", "#34345f", "#1c1f3a"] } },
  { title: "Pink Ridge", cat: "Nature", ph: "photo-1500964757637-c85e8a162699", by: "simon", link: "https://unsplash.com/photos/twukN12EN7c?utm_source=image_gallery&utm_medium=referral",  p: { sky: ["#9fd8c9", "#e8f5d0"], sun: "#fffbe0", hills: ["#6aa380", "#3f7d62", "#25574a", "#123a35"] } },
  { title: "Valley Road", cat: "Nature", ph: "photo-1768409234914-96f61529b7e2", by: "Intricate Explorer", link: "https://unsplash.com/photos/L6-l45Y_om0?utm_source=image_gallery&utm_medium=referral",  p: { sky: ["#2b2d6e", "#e07a8f"], sun: "#ffd1a0", hills: ["#7a4a7d", "#4d3068", "#2d2050", "#150f33"] } },
  { title: "Austrian Summer", cat: "Nature", ph: "photo-1612441804231-77a36b284856", by: "Simon Lohmann", link: "https://unsplash.com/photos/I_n_b44cqhk?utm_source=image_gallery&utm_medium=referral",  p: { sky: ["#aab7c4", "#e3e8ec"], sun: "#ffffff", hills: ["#8a9aab", "#64768a", "#445468", "#2a3647"] } },
  { title: "Purple Night", cat: "Space", ph: "photo-1444080748397-f442aa95c3e5", by: "Ryan Hutton", link: "https://unsplash.com/photos/Jztmx9yqjBw?utm_source=image_gallery&utm_medium=referral",   p: { bg: ["#0a0b24", "#1a0f3a"], neb: ["#7a4dff", "#ff5da2", "#2fd6ff"], planet: ["#ffb86b", "#c9483a"] } },
  { title: "Rocky Mountain Stars", cat: "Space", ph: "photo-1465101162946-4377e57745c3", by: "Jeremy Thomas", link: "https://unsplash.com/photos/4dpAqfTbvKA?utm_source=image_gallery&utm_medium=referral",   p: { bg: ["#05101f", "#0b2a45"], neb: ["#2fd6ff", "#4d7cff", "#8affd1"], planet: ["#9ad0ff", "#3a5fa8"] } },
  { title: "Silhouette Sky", cat: "Space", ph: "photo-1444703686981-a3abbc4d4fe3", by: "Greg Rakozy", link: "https://unsplash.com/photos/oMpAz-DN-9I?utm_source=image_gallery&utm_medium=referral",   p: { bg: ["#140506", "#2a0c14"], neb: ["#ff6a3d", "#ff2e63", "#ffb86b"], planet: ["#ff8a5b", "#7a1f1f"] } },
  { title: "Milky Way", cat: "Space", ph: "photo-1528722828814-77b9b83aafb2", by: "Andy Holmes", link: "https://unsplash.com/photos/rCbdp8VCYhQ?utm_source=image_gallery&utm_medium=referral",   p: { bg: ["#02030a", "#0a0d24"], neb: ["#8a7aff", "#3d6bff", "#d96bff"], planet: ["#c8c4ff", "#5a4fb0"] } },
  { title: "Waterfront Towers", cat: "City", ph: "photo-1477959858617-67f85cf4f1df", by: "Pedro Lastra", link: "https://unsplash.com/photos/Nyvq2juw4_o?utm_source=image_gallery&utm_medium=referral",    p: { sky: ["#1b1245", "#ff6a88"], bldg: ["#2a1f55", "#140d33"], win: "#ffd36b", moon: "#ffe9b8" } },
  { title: "Night Harbor", cat: "City", ph: "photo-1514565131-fce0801e5785", by: "Jonathan Roger", link: "https://unsplash.com/photos/LY1eyQMFeyo?utm_source=image_gallery&utm_medium=referral",    p: { sky: ["#0f2a4d", "#6aa0d8"], bldg: ["#27476e", "#0e2038"], win: "#fff0b0", moon: "#f2f6ff" } },
  { title: "Manhattan View", cat: "City", ph: "photo-1783456381564-d5eed699cffe", by: "Emma Gasseau-Dryer", link: "https://unsplash.com/photos/BLQlPYBnaPA?utm_source=image_gallery&utm_medium=referral",    p: { sky: ["#0b0f1a", "#2b3a55"], bldg: ["#1f2a40", "#0a0f1c"], win: "#7fe3ff", moon: "#dfe8ff" } },
  { title: "Ocean Ripple", cat: "Ocean", ph: "photo-1518837695005-2083093ee35b", by: "Matt Hardy", link: "https://unsplash.com/photos/6ArTTluciuA?utm_source=image_gallery&utm_medium=referral",   p: { sky: ["#ffb36b", "#ffe6b0"], sun: "#fff6d0", waves: ["#2d7fa8", "#1f5f8b", "#164a73", "#0d3558"] } },
  { title: "Blue Waves", cat: "Ocean", ph: "photo-1616141893496-fbc65370493e", by: "Matt Paul Catalano", link: "https://unsplash.com/photos/0QEG_xOoY7Y?utm_source=image_gallery&utm_medium=referral",   p: { sky: ["#8fd3f4", "#d8f1ff"], sun: "#ffffff", waves: ["#4aa8d8", "#2f84be", "#20639b", "#143f6b"] } },
  { title: "Breaking Wave", cat: "Ocean", ph: "photo-1785062811959-404fd5a36c5b", by: "William Veitch", link: "https://unsplash.com/photos/bFXSxCJhzY0?utm_source=image_gallery&utm_medium=referral",   p: { sky: ["#0d1b3d", "#3a4d8f"], sun: "#dfe8ff", waves: ["#2c4a8a", "#213a74", "#162a5a", "#0c1b3d"] } },
  { title: "Teal Gradient", cat: "Abstract", ph: "photo-1579546929662-711aa81148cf", by: "Codioful", link: "https://unsplash.com/photos/ix_kUDzCczo?utm_source=image_gallery&utm_medium=referral", p: { bg: ["#ffd6e0", "#c9d6ff"], colors: ["#ff7aa2", "#7a8bff", "#ffd36b", "#3dd6c6"] } },
  { title: "Bright Rain", cat: "Abstract", ph: "photo-1579546929518-9e396f3cc809", by: "Codioful", link: "https://unsplash.com/photos/LeG68PrXA6Y?utm_source=image_gallery&utm_medium=referral", p: { bg: ["#1a1a2e", "#16213e"], colors: ["#ff6a3d", "#e94560", "#ffd36b", "#0f3460"] } },
];
IMAGES.forEach((it, i) => {
  it.art = makeArt(it.cat, i * 7919 + 13, it.p);
  it.thumb = it.src || (it.ph ? U(it.ph, 700) : it.art);
  it.full = it.src || (it.ph ? U(it.ph, 1800) : it.art);
});
const withFallback = (img, it) => { img.onerror = () => { img.onerror = null; img.src = it.art; }; };

/* ---------- State and elements ---------- */
let activeCat = "All";
let visible = [];
let current = 0;
let lastFocus = null;

const $ = id => document.getElementById(id);
const grid = $("grid"), filtersEl = $("filters"), box = $("lightbox");
const lbImg = $("lbImg"), lbTitle = $("lbTitle"), lbCount = $("lbCount");

/* ---------- Filters ---------- */
function buildFilters() {
  const cats = ["All", ...new Set(IMAGES.map(i => i.cat))];
  filtersEl.innerHTML = "";
  cats.forEach(cat => {
    const n = cat === "All" ? IMAGES.length : IMAGES.filter(i => i.cat === cat).length;
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.setAttribute("aria-pressed", String(cat === activeCat));
    b.innerHTML = `${cat}<small>${n}</small>`;
    b.addEventListener("click", () => { activeCat = cat; buildFilters(); renderGrid(); });
    filtersEl.appendChild(b);
  });
}

/* ---------- Grid ---------- */
function renderGrid() {
  visible = activeCat === "All" ? IMAGES : IMAGES.filter(i => i.cat === activeCat);
  grid.innerHTML = "";
  visible.forEach((it, idx) => {
    const card = document.createElement("article");
    card.className = "card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open ${it.title}`);
    card.style.animationDelay = `${idx * 50}ms`;
    const img = document.createElement("img");
    withFallback(img, it);
    img.src = it.thumb;
    img.alt = it.title;
    img.loading = "lazy";
    const cap = document.createElement("div");
    cap.className = "cap";
    cap.innerHTML = `<b>${it.title}</b><span>${it.cat}</span>`;
    card.append(img, cap);
    card.addEventListener("click", () => openBox(idx));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openBox(idx); }
    });
    grid.appendChild(card);
  });
}

/* ---------- Lightbox ---------- */
function paint() {
  const it = visible[current];
  withFallback(lbImg, it);
  lbImg.src = it.full;
  lbImg.alt = it.title;
  lbTitle.innerHTML = `<b>${it.title}</b> &middot; ${it.cat}` +
    (it.by ? ` <a class="credit" href="${it.link}" target="_blank" rel="noopener">Photo by ${it.by} on Unsplash</a>` : "");
  lbCount.textContent = `${current + 1} / ${visible.length}`;
}
function go(step) {
  lbImg.style.setProperty("--dx", step > 0 ? "-24px" : "24px");
  lbImg.classList.add("swap");
  setTimeout(() => {
    current = (current + step + visible.length) % visible.length;
    paint();
    lbImg.style.setProperty("--dx", step > 0 ? "24px" : "-24px");
    requestAnimationFrame(() => lbImg.classList.remove("swap"));
  }, 180);
}
function openBox(idx) {
  lastFocus = document.activeElement;
  current = idx;
  paint();
  box.classList.add("open");
  box.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("lbClose").focus();
}
function closeBox() {
  box.classList.remove("open");
  box.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

$("lbClose").addEventListener("click", closeBox);
$("lbNext").addEventListener("click", () => go(1));
$("lbPrev").addEventListener("click", () => go(-1));
box.addEventListener("click", e => { if (e.target === box) closeBox(); });

document.addEventListener("keydown", e => {
  if (!box.classList.contains("open")) return;
  if (e.key === "Escape") closeBox();
  else if (e.key === "ArrowRight") go(1);
  else if (e.key === "ArrowLeft") go(-1);
  else if (e.key === "Tab") {
    const btns = [$("lbClose"), $("lbPrev"), $("lbNext")];
    const i = btns.indexOf(document.activeElement);
    e.preventDefault();
    btns[(i + (e.shiftKey ? -1 : 1) + btns.length) % btns.length].focus();
  }
});

let touchX = null;
box.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
box.addEventListener("touchend", e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  touchX = null;
});

buildFilters();
renderGrid();
