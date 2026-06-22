// Faza 3 (Treść + contentEffort + Experience + media) — analiza rendered-text korpusu. Read-only wobec src/.
// Pobiera wyrenderowany HTML z serwera prod (localhost:3000), izoluje <main>, liczy:
//  - shingle (k=8) duplikację między stronami (proxy ContentChecksum96/shingleInfo/OriginalContentScore)
//  - markery Experience (1-os. doświadczenie, liczby z praktyki)
//  - tabele / listy / media oryginalne
import { readFileSync, writeFileSync } from 'node:fs';

const BASE = 'http://localhost:3000';
const d = JSON.parse(readFileSync(new URL('./crawl-dataset.json', import.meta.url)));
const urls = d.pages.map(p => p.url);

// --- pobierz HTML, izoluj główną treść ---
const stripTags = (h) => h
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<header[\s\S]*?<\/header>/gi, ' ')
  .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
  .replace(/<nav[\s\S]*?<\/nav>/gi, ' ');

const mainOf = (h) => {
  const m = h.match(/<main[\s\S]*?<\/main>/i);
  return m ? m[0] : h;
};
const textOf = (h) => stripTags(mainOf(h))
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z]+;/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const tablesOf = (h) => (mainOf(h).match(/<table[\s>]/gi) || []).length;
const olOf = (h) => (mainOf(h).match(/<ol[\s>]/gi) || []).length;
const ulContentOf = (h) => (mainOf(h).match(/<ul[\s>]/gi) || []).length;

const corpus = {};
const html = {};
for (const u of urls) {
  const r = await fetch(BASE + u);
  const h = await r.text();
  html[u] = h;
  corpus[u] = textOf(h);
}

// --- normalizacja + shingle k=8 ---
const norm = (s) => s.toLowerCase().replace(/[^a-ząćęłńóśźż0-9 ]/gi, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
const K = 8;
const shinglesOf = (toks) => {
  const set = new Set();
  for (let i = 0; i + K <= toks.length; i++) set.add(toks.slice(i, i + K).join(' '));
  return set;
};
const toks = {}; const shg = {};
for (const u of urls) { toks[u] = norm(corpus[u]); shg[u] = shinglesOf(toks[u]); }

// --- globalne shingle boilerplate: ile stron dzieli dany shingle ---
const shingleDF = new Map();
for (const u of urls) for (const s of shg[u]) shingleDF.set(s, (shingleDF.get(s) || 0) + 1);
const boiler = [...shingleDF.entries()].filter(([, n]) => n >= 5).sort((a, b) => b[1] - a[1]);

// --- udział "współdzielonych" shingli na stronę (proxy: jaka część treści to nie-unikat) ---
const sharedFrac = urls.map(u => {
  const ss = [...shg[u]];
  if (!ss.length) return { url: u, frac: 0, n: 0 };
  const shared = ss.filter(s => shingleDF.get(s) > 1).length;
  return { url: u, frac: +(shared / ss.length).toFixed(2), n: ss.length };
}).sort((a, b) => b.frac - a.frac);

// --- pairwise near-duplicate (Jaccard na shingle) wewnątrz klastrów ---
const jac = (a, b) => { const A = shg[a], B = shg[b]; if (!A.size || !B.size) return 0; let inter = 0; for (const s of A) if (B.has(s)) inter++; return +(inter / (A.size + B.size - inter)).toFixed(2); };
// kandydaci: strony usług (płaskie + zagnieżdżone), pomijamy usg/hub/info
const svc = urls.filter(u => {
  const seg = u.replace(/^\/|\/$/g, '').split('/');
  if (u === '/' || seg[0] === 'usg') return false;
  if (['stomatologia', 'medycyna-estetyczna', 'kontakt', 'cennik', 'o-nas'].includes(seg[0]) && seg.length === 1) return false;
  return true;
});
const pairs = [];
for (let i = 0; i < svc.length; i++) for (let j = i + 1; j < svc.length; j++) {
  const v = jac(svc[i], svc[j]); if (v >= 0.12) pairs.push([svc[i], svc[j], v]);
}
pairs.sort((a, b) => b[2] - a[2]);

// --- markery Experience ---
const EXP = /(z (naszego|mojego|wieloletniego) doświadcz|w naszej (klinice|praktyce)|w naszym gabinecie|testowali[śs]my|przebadali[śs]my|w naszej ocenie|nasi pacjenci|na podstawie .{0,20}(przypadków|zabiegów|pacjentów)|w klinice bas wykonujemy|nasze doświadczenie|z doświadczenia)/i;
const NUMPRACT = /(\d{2,}\s*(zabieg|pacjent|przypadk|lat doświadcz))/i;
const expRows = urls.map(u => ({ url: u, exp: EXP.test(corpus[u]), num: NUMPRACT.test(corpus[u]) }));

// --- struktura/media w treści ---
const struct = urls.map(u => ({ url: u, tables: tablesOf(html[u]), ol: olOf(html[u]), ul: ulContentOf(html[u]) }));

// --- raport ---
const L = [];
const pr = (s) => L.push(s);
pr('# F3 — analiza rendered-text (k=8 shingle, ' + urls.length + ' stron)\n');

pr('## Duplikacja treści (shingleInfo / OriginalContentScore proxy)');
pr('Top boilerplate shingle (≥5 stron):');
for (const [s, n] of boiler.slice(0, 25)) pr('  ' + n + 'x  "' + s + '"');
pr('liczba shingli współdzielonych ≥5 stron: ' + boiler.length);

pr('\n## Udział nie-unikalnej treści na stronę (top 20 najwyższy frac)');
for (const r of sharedFrac.slice(0, 20)) pr('  frac=' + r.frac + ' (shingli=' + r.n + ')  ' + r.url);
pr('mediana frac (usługi): ' + (() => { const a = sharedFrac.filter(r => svc.includes(r.url)).map(r => r.frac).sort((x, y) => x - y); return a[a.length >> 1]; })());

pr('\n## Near-duplicate pary stron usług (Jaccard shingle ≥0.12)');
pr('liczba par ≥0.12: ' + pairs.length + ' | ≥0.20: ' + pairs.filter(p => p[2] >= 0.20).length + ' | ≥0.30: ' + pairs.filter(p => p[2] >= 0.30).length);
for (const [a, b, v] of pairs.slice(0, 30)) pr('  J=' + v + '  ' + a + '  <>  ' + b);

pr('\n## Markery Experience (1-os. doświadczenie / liczby z praktyki)');
pr('strony z markerem Experience: ' + expRows.filter(r => r.exp).length + '/' + urls.length);
for (const r of expRows.filter(r => r.exp)) pr('  EXP  ' + r.url);
pr('strony z liczbami z praktyki: ' + expRows.filter(r => r.num).length + '/' + urls.length);

pr('\n## Struktura treści (tabele / listy ol / listy ul w <main>)');
pr('strony z ≥1 <table>: ' + struct.filter(s => s.tables > 0).length + '/' + urls.length);
pr('strony z ≥1 <ol>: ' + struct.filter(s => s.ol > 0).length + '/' + urls.length);
pr('strony z ≥1 <ul> (w main): ' + struct.filter(s => s.ul > 0).length + '/' + urls.length);
for (const s of struct.filter(s => s.tables > 0)) pr('  TABLE ' + s.url + ' x' + s.tables);

const report = L.join('\n');
writeFileSync(new URL('./_f3_shingle.txt', import.meta.url), report);
console.log(report);
