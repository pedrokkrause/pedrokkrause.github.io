// Polygon index -> DDD code, in the exact order polygons appear in map.svg.
// Derived from main.py (regions_code).
const DDD_CODES = [
  43, 69, 68, 97, 92, 95, 91, 93, 94, 96, 63, 99, 98, 86, 89, 85, 88, 84, 83,
  87, 81, 82, 79, 71, 75, 77, 73, 74, 37, 38, 34, 31, 33, 35, 28, 27, 32, 21,
  22, 24, 13, 12, 11, 16, 15, 17, 18, 14, 19, 45, 41, 46, 44, 42, 47, 49, 48,
  53, 54, 55, 51, 67, 65, 66, 64, 62, 61,
];

const DDD_INFO = {
  11: { city: "São Paulo",                     state: "SP", region: "Sudeste" },
  12: { city: "São José dos Campos",           state: "SP", region: "Sudeste" },
  13: { city: "Santos",                        state: "SP", region: "Sudeste" },
  14: { city: "Bauru",                         state: "SP", region: "Sudeste" },
  15: { city: "Sorocaba",                      state: "SP", region: "Sudeste" },
  16: { city: "Ribeirão Preto",                state: "SP", region: "Sudeste" },
  17: { city: "São José do Rio Preto",         state: "SP", region: "Sudeste" },
  18: { city: "Presidente Prudente",           state: "SP", region: "Sudeste" },
  19: { city: "Campinas",                      state: "SP", region: "Sudeste" },
  21: { city: "Rio de Janeiro",                state: "RJ", region: "Sudeste" },
  22: { city: "Campos dos Goytacazes",         state: "RJ", region: "Sudeste" },
  24: { city: "Petrópolis / Volta Redonda",    state: "RJ", region: "Sudeste" },
  27: { city: "Vitória",                       state: "ES", region: "Sudeste" },
  28: { city: "Cachoeiro de Itapemirim",       state: "ES", region: "Sudeste" },
  31: { city: "Belo Horizonte",                state: "MG", region: "Sudeste" },
  32: { city: "Juiz de Fora",                  state: "MG", region: "Sudeste" },
  33: { city: "Governador Valadares",          state: "MG", region: "Sudeste" },
  34: { city: "Uberlândia",                    state: "MG", region: "Sudeste" },
  35: { city: "Poços de Caldas / Varginha",    state: "MG", region: "Sudeste" },
  37: { city: "Divinópolis",                   state: "MG", region: "Sudeste" },
  38: { city: "Montes Claros",                 state: "MG", region: "Sudeste" },
  41: { city: "Curitiba",                      state: "PR", region: "Sul" },
  42: { city: "Ponta Grossa",                  state: "PR", region: "Sul" },
  43: { city: "Londrina",                      state: "PR", region: "Sul" },
  44: { city: "Maringá",                       state: "PR", region: "Sul" },
  45: { city: "Cascavel / Foz do Iguaçu",      state: "PR", region: "Sul" },
  46: { city: "Francisco Beltrão / Pato Branco", state: "PR", region: "Sul" },
  47: { city: "Joinville / Blumenau",          state: "SC", region: "Sul" },
  48: { city: "Florianópolis",                 state: "SC", region: "Sul" },
  49: { city: "Chapecó",                       state: "SC", region: "Sul" },
  51: { city: "Porto Alegre",                  state: "RS", region: "Sul" },
  53: { city: "Pelotas / Rio Grande",          state: "RS", region: "Sul" },
  54: { city: "Caxias do Sul",                 state: "RS", region: "Sul" },
  55: { city: "Santa Maria",                   state: "RS", region: "Sul" },
  61: { city: "Brasília",                      state: "DF", region: "Centro-Oeste" },
  62: { city: "Goiânia",                       state: "GO", region: "Centro-Oeste" },
  63: { city: "Palmas",                        state: "TO", region: "Norte" },
  64: { city: "Rio Verde",                     state: "GO", region: "Centro-Oeste" },
  65: { city: "Cuiabá",                        state: "MT", region: "Centro-Oeste" },
  66: { city: "Rondonópolis",                  state: "MT", region: "Centro-Oeste" },
  67: { city: "Campo Grande",                  state: "MS", region: "Centro-Oeste" },
  68: { city: "Rio Branco",                    state: "AC", region: "Norte" },
  69: { city: "Porto Velho",                   state: "RO", region: "Norte" },
  71: { city: "Salvador",                      state: "BA", region: "Nordeste" },
  73: { city: "Ilhéus / Porto Seguro",         state: "BA", region: "Nordeste" },
  74: { city: "Juazeiro",                      state: "BA", region: "Nordeste" },
  75: { city: "Feira de Santana",              state: "BA", region: "Nordeste" },
  77: { city: "Vitória da Conquista",          state: "BA", region: "Nordeste" },
  79: { city: "Aracaju",                       state: "SE", region: "Nordeste" },
  81: { city: "Recife",                        state: "PE", region: "Nordeste" },
  82: { city: "Maceió",                        state: "AL", region: "Nordeste" },
  83: { city: "João Pessoa",                   state: "PB", region: "Nordeste" },
  84: { city: "Natal",                         state: "RN", region: "Nordeste" },
  85: { city: "Fortaleza",                     state: "CE", region: "Nordeste" },
  86: { city: "Teresina",                      state: "PI", region: "Nordeste" },
  87: { city: "Petrolina / Caruaru",           state: "PE", region: "Nordeste" },
  88: { city: "Juazeiro do Norte / Sobral",    state: "CE", region: "Nordeste" },
  89: { city: "Picos",                         state: "PI", region: "Nordeste" },
  91: { city: "Belém",                         state: "PA", region: "Norte" },
  92: { city: "Manaus",                        state: "AM", region: "Norte" },
  93: { city: "Santarém",                      state: "PA", region: "Norte" },
  94: { city: "Marabá",                        state: "PA", region: "Norte" },
  95: { city: "Boa Vista",                     state: "RR", region: "Norte" },
  96: { city: "Macapá",                        state: "AP", region: "Norte" },
  97: { city: "Tefé / Tabatinga",              state: "AM", region: "Norte" },
  98: { city: "São Luís",                      state: "MA", region: "Nordeste" },
  99: { city: "Imperatriz",                    state: "MA", region: "Nordeste" },
};

const viewport = document.getElementById("map-viewport");
const quizPanel = document.getElementById("quiz-panel");
const learnPanel = document.getElementById("learn-panel");
const scoreEl = document.getElementById("score");
const promptEl = document.getElementById("prompt");
const statusEl = document.getElementById("status");
const restartBtn = document.getElementById("restart");
const learnHint = document.getElementById("learn-hint");
const learnDddEl = document.getElementById("learn-ddd");
const learnCityEl = document.getElementById("learn-city");
const learnStateEl = document.getElementById("learn-state");
const modeSelect = document.getElementById("mode");
const regionSelect = document.getElementById("region-filter");
const uniformToggle = document.getElementById("uniform-color");
const sfxCorrect = document.getElementById("sfx-correct");
const sfxWrong = document.getElementById("sfx-wrong");
const sfxEnd = document.getElementById("sfx-end");

let polygons = [];
let polygonByCode = new Map();
let activeCodes = new Set(DDD_CODES);
let notGuessed = [];
let currentCode = null;
let score = 0;
let mode = "quiz";

function playSound(audio) {
  try {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch (_) {}
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function setStatus(text, kind) {
  statusEl.textContent = text;
  statusEl.className = kind || "";
}

function updateScore() {
  const total = activeCodes.size;
  const pad = String(total).length;
  scoreEl.textContent = `${String(score).padStart(pad, "0")}/${total}`;
}

function nextPrompt() {
  if (notGuessed.length === 0) {
    currentCode = null;
    promptEl.textContent = "✓";
    setStatus("Você completou todos os DDDs!", "correct");
    playSound(sfxEnd);
    restartBtn.hidden = false;
    return;
  }
  currentCode = pickRandom(notGuessed);
  promptEl.textContent = currentCode;
}

function flashPolygon(poly, className) {
  poly.classList.remove("flash-correct", "flash-wrong");
  void poly.getBoundingClientRect();
  poly.classList.add(className);
  poly.addEventListener(
    "animationend",
    () => poly.classList.remove(className),
    { once: true }
  );
}

function showLearnInfo(code) {
  const info = DDD_INFO[code];
  if (!info) return;
  learnHint.hidden = true;
  learnDddEl.textContent = code;
  learnCityEl.textContent = info.city;
  learnStateEl.textContent = `${info.state} — ${info.region}`;
}

function handleRegionClick(poly) {
  const code = Number(poly.dataset.code);
  if (mode === "learn") {
    showLearnInfo(code);
    return;
  }
  if (currentCode === null) return;
  if (code === currentCode) {
    playSound(sfxCorrect);
    score++;
    notGuessed = notGuessed.filter((c) => c !== currentCode);
    poly.classList.add("solved");
    poly.style.pointerEvents = "none";
    flashPolygon(poly, "flash-correct");
    setStatus("Correto!", "correct");
    updateScore();
    nextPrompt();
  } else {
    playSound(sfxWrong);
    flashPolygon(poly, "flash-wrong");
    setStatus(`Errado — esse é o ${code}`, "wrong");
  }
}

function applyActiveFilter() {
  for (const poly of polygons) {
    const code = Number(poly.dataset.code);
    const active = activeCodes.has(code);
    poly.classList.toggle("inactive", !active);
    if (!active) {
      poly.style.pointerEvents = "none";
    } else {
      poly.style.pointerEvents = "";
    }
  }
}

function computeActiveCodes() {
  const v = regionSelect.value;
  if (v === "all") return new Set(DDD_CODES);
  const [kind, val] = v.split(":");
  if (kind === "digit") {
    const d = Number(val);
    return new Set(DDD_CODES.filter((c) => Math.floor(c / 10) === d));
  }
  if (kind === "region") {
    return new Set(
      DDD_CODES.filter((c) => DDD_INFO[c] && DDD_INFO[c].region === val)
    );
  }
  return new Set(DDD_CODES);
}

function fitViewBoxToActive() {
  if (!polygons.length) return;
  const actives = polygons.filter((p) => activeCodes.has(Number(p.dataset.code)));
  if (!actives.length) {
    setViewBox(baseViewBox);
    return;
  }
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of actives) {
    const bb = p.getBBox();
    if (bb.x < minX) minX = bb.x;
    if (bb.y < minY) minY = bb.y;
    if (bb.x + bb.width > maxX) maxX = bb.x + bb.width;
    if (bb.y + bb.height > maxY) maxY = bb.y + bb.height;
  }
  const w = maxX - minX, h = maxY - minY;
  const pad = 0.08;
  setViewBox({
    x: minX - w * pad,
    y: minY - h * pad,
    w: w * (1 + 2 * pad),
    h: h * (1 + 2 * pad),
  });
}

function resetLearnPanel() {
  learnHint.hidden = false;
  learnDddEl.textContent = "--";
  learnCityEl.textContent = "—";
  learnStateEl.textContent = "—";
}

function resetGame() {
  score = 0;
  notGuessed = [...activeCodes];
  restartBtn.hidden = true;
  setStatus("", "");
  for (const poly of polygons) {
    poly.classList.remove("solved", "flash-correct", "flash-wrong");
  }
  applyActiveFilter();
  updateScore();
  if (mode === "quiz") {
    nextPrompt();
  } else {
    currentCode = null;
    resetLearnPanel();
  }
}

function applyMode() {
  mode = modeSelect.value;
  quizPanel.hidden = mode !== "quiz";
  learnPanel.hidden = mode !== "learn";
  resetGame();
}

restartBtn.addEventListener("click", resetGame);
modeSelect.addEventListener("change", applyMode);
regionSelect.addEventListener("change", () => {
  activeCodes = computeActiveCodes();
  fitViewBoxToActive();
  resetGame();
});
uniformToggle.addEventListener("change", () => {
  viewport.classList.toggle("uniform", uniformToggle.checked);
});

// Pan + zoom via SVG viewBox.
let svgEl = null;
let baseViewBox = null;
let currentViewBox = null;
let didPan = false;

function setViewBox(vb) {
  currentViewBox = vb;
  svgEl.setAttribute("viewBox", `${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
}

function screenToSvg(clientX, clientY) {
  const rect = svgEl.getBoundingClientRect();
  const x = currentViewBox.x + ((clientX - rect.left) / rect.width) * currentViewBox.w;
  const y = currentViewBox.y + ((clientY - rect.top) / rect.height) * currentViewBox.h;
  return { x, y };
}

function attachPanZoom() {
  let panning = false;
  let startClient = null;
  let startVB = null;

  viewport.addEventListener("mousedown", (e) => {
    if (e.button !== 2) return;
    panning = true;
    didPan = false;
    startClient = { x: e.clientX, y: e.clientY };
    startVB = { ...currentViewBox };
    viewport.classList.add("panning");
    e.preventDefault();
  });
  window.addEventListener("mousemove", (e) => {
    if (!panning) return;
    const rect = svgEl.getBoundingClientRect();
    const dx = ((e.clientX - startClient.x) / rect.width) * startVB.w;
    const dy = ((e.clientY - startClient.y) / rect.height) * startVB.h;
    if (Math.hypot(e.clientX - startClient.x, e.clientY - startClient.y) > 3) didPan = true;
    setViewBox({ x: startVB.x - dx, y: startVB.y - dy, w: startVB.w, h: startVB.h });
  });
  window.addEventListener("mouseup", () => {
    if (!panning) return;
    panning = false;
    viewport.classList.remove("panning");
  });
  viewport.addEventListener("contextmenu", (e) => e.preventDefault());

  viewport.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const factor = e.deltaY > 0 ? 1.15 : 1 / 1.15;
      const newW = currentViewBox.w * factor;
      const newH = currentViewBox.h * factor;
      const maxW = baseViewBox.w * 2;
      const minW = baseViewBox.w * 0.1;
      if (newW > maxW || newW < minW) return;
      const svgPt = screenToSvg(e.clientX, e.clientY);
      const fx = (svgPt.x - currentViewBox.x) / currentViewBox.w;
      const fy = (svgPt.y - currentViewBox.y) / currentViewBox.h;
      setViewBox({ x: svgPt.x - fx * newW, y: svgPt.y - fy * newH, w: newW, h: newH });
    },
    { passive: false }
  );

  // Touch: one-finger drag pans, two-finger pinch zooms.
  const touches = new Map();
  let touchStart = null;

  viewport.addEventListener(
    "touchstart",
    (e) => {
      for (const t of e.changedTouches) {
        touches.set(t.identifier, { x: t.clientX, y: t.clientY });
      }
      const list = [...touches.values()];
      const mid =
        list.length === 2
          ? { x: (list[0].x + list[1].x) / 2, y: (list[0].y + list[1].y) / 2 }
          : { x: list[0].x, y: list[0].y };
      const dist =
        list.length === 2
          ? Math.hypot(list[0].x - list[1].x, list[0].y - list[1].y)
          : 0;
      touchStart = { vb: { ...currentViewBox }, mid, dist, moved: false };
      if (touches.size >= 2) e.preventDefault();
    },
    { passive: false }
  );

  viewport.addEventListener(
    "touchmove",
    (e) => {
      for (const t of e.changedTouches) {
        if (touches.has(t.identifier)) {
          touches.set(t.identifier, { x: t.clientX, y: t.clientY });
        }
      }
      if (!touchStart) return;
      const list = [...touches.values()];
      if (list.length === 1) {
        const dx = list[0].x - touchStart.mid.x;
        const dy = list[0].y - touchStart.mid.y;
        if (Math.hypot(dx, dy) < 6) return;
        touchStart.moved = true;
        didPan = true;
        const rect = svgEl.getBoundingClientRect();
        const vbDx = (dx / rect.width) * touchStart.vb.w;
        const vbDy = (dy / rect.height) * touchStart.vb.h;
        setViewBox({
          x: touchStart.vb.x - vbDx,
          y: touchStart.vb.y - vbDy,
          w: touchStart.vb.w,
          h: touchStart.vb.h,
        });
        e.preventDefault();
      } else if (list.length === 2) {
        touchStart.moved = true;
        didPan = true;
        const dist = Math.hypot(list[0].x - list[1].x, list[0].y - list[1].y);
        if (touchStart.dist < 10) return;
        const scale = touchStart.dist / dist;
        const newW = touchStart.vb.w * scale;
        const newH = touchStart.vb.h * scale;
        const svgPt = screenToSvg(touchStart.mid.x, touchStart.mid.y);
        const fx = (svgPt.x - touchStart.vb.x) / touchStart.vb.w;
        const fy = (svgPt.y - touchStart.vb.y) / touchStart.vb.h;
        setViewBox({
          x: svgPt.x - fx * newW,
          y: svgPt.y - fy * newH,
          w: newW,
          h: newH,
        });
        e.preventDefault();
      }
    },
    { passive: false }
  );

  const endTouch = (e) => {
    for (const t of e.changedTouches) touches.delete(t.identifier);
    if (touches.size === 0) touchStart = null;
  };
  viewport.addEventListener("touchend", endTouch);
  viewport.addEventListener("touchcancel", endTouch);
}

async function loadMap() {
  const res = await fetch("map.svg");
  const text = await res.text();
  viewport.innerHTML = text;
  svgEl = viewport.querySelector("svg");
  svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
  const vb = svgEl.viewBox.baseVal;
  baseViewBox = { x: vb.x, y: vb.y, w: vb.width, h: vb.height };
  currentViewBox = { ...baseViewBox };

  polygons = [...svgEl.querySelectorAll("polygon")];
  if (polygons.length !== DDD_CODES.length) {
    console.warn(
      `Polygon count (${polygons.length}) does not match DDD list (${DDD_CODES.length}).`
    );
  }
  polygons.forEach((p, i) => {
    const code = DDD_CODES[i];
    p.dataset.code = code;
    polygonByCode.set(code, p);
    p.addEventListener("mouseenter", () => {
      if (mode === "learn" && activeCodes.has(code)) showLearnInfo(code);
    });
    p.addEventListener("click", (e) => {
      if (didPan) { didPan = false; return; }
      if (!activeCodes.has(code)) return;
      handleRegionClick(p);
      e.stopPropagation();
    });
  });

  attachPanZoom();
  applyMode();
}

loadMap().catch((err) => {
  console.error(err);
  setStatus("Falha ao carregar o mapa.", "wrong");
});
