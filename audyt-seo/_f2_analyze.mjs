// Faza 2 (On-Page: Title/Goldmine + meta + H1-H6) — analiza datasetu. Read-only wobec src/.
import { readFileSync } from 'node:fs';
const d = JSON.parse(readFileSync(new URL('./crawl-dataset.json', import.meta.url)));
const pages = d.pages;
const out = (l, v) => console.log(l + ': ' + (typeof v === 'object' ? JSON.stringify(v) : v));
const SEP = '\n========== ';

// --- proxy szerokości pikselowej title (isTruncated / widthFraction ~600px desktop) ---
// przybliżenie: średnia szerokość znaku w foncie SERP (Arial ~18px). Wartości wg badań pixelwidth.
const WIDTHS = { default: 8.5, ' ': 4, 'i': 3.5, 'l': 3.5, 'I': 4, 'j': 3.5, 't': 4.5, 'f': 4.5, 'r': 5.5,
  'm': 13, 'w': 11, 'W': 13, 'M': 13, '|': 4, '-': 5 };
const pxWidth = (s) => [...s].reduce((a, c) => a + (WIDTHS[c] ?? WIDTHS.default), 0);
const LIMIT_PX = 600;

console.log(SEP + 'TITLES — długość, px-proxy, isTruncated');
const titleRows = pages.map(p => ({ url: p.url, len: p.titleLength, px: Math.round(pxWidth(p.title)), t: p.title }));
out('count', pages.length);
out('len <30 (za krótkie)', titleRows.filter(r => r.len < 30).map(r => r.url + '=' + r.len));
out('len 50-60 (optimum)', titleRows.filter(r => r.len >= 50 && r.len <= 60).length);
out('len >60', titleRows.filter(r => r.len > 60).length);
out('len >65', titleRows.filter(r => r.len > 65).length);
out('px >600 (isTruncated=true proxy)', titleRows.filter(r => r.px > LIMIT_PX).map(r => r.url + ' px=' + r.px + ' len=' + r.len));
out('px 560-600 (ryzyko)', titleRows.filter(r => r.px > 560 && r.px <= LIMIT_PX).map(r => r.url + ' px=' + r.px));

console.log(SEP + 'TITLES — unikalność / duplikaty');
const byTitle = {};
for (const p of pages) (byTitle[p.title] ??= []).push(p.url);
out('duplikaty title', Object.entries(byTitle).filter(([, u]) => u.length > 1));

console.log(SEP + 'TITLES — brand / geo / boilerplate');
out('bez "Klinika BAS"/"Klinice BAS"/"BAS"', pages.filter(p => !/BAS/i.test(p.title)).map(p => p.url));
out('z geo "Wrocław"', pages.filter(p => /Wroc/i.test(p.title)).map(p => p.url));
out('z geo — liczba', pages.filter(p => /Wroc/i.test(p.title)).length + '/' + pages.length);
// boilerplate: powtarzalny sufiks
const suffix = ' | Klinika BAS';
out('title z sufiksem "| Klinika BAS"', pages.filter(p => p.title.endsWith(suffix)).length);
// powtarzalny śródtytuł "- Medycyna estetyczna"
out('title z "- Medycyna estetyczna |"', pages.filter(p => /- Medycyna estetyczna \|/.test(p.title)).map(p => p.url));
out('title z "- Medycyna estetyczna |" — liczba', pages.filter(p => /- Medycyna estetyczna \|/.test(p.title)).length);
// udział boilerplate (sufiks) w długości tytułu
const boilFrac = pages.map(p => ({ url: p.url, frac: +(suffix.length / p.title.length).toFixed(2) }))
  .sort((a, b) => b.frac - a.frac);
out('najwyższy udział boilerplate sufiksu (top5)', boilFrac.slice(0, 5).map(r => r.url + '=' + r.frac));

console.log(SEP + 'TITLES — dupTokens (keyword stuffing)');
const STOP = new Set(['i', 'w', 'z', 'na', 'do', 'o', 'oraz', 'dla', 'the', '-', '|', 'a', 'po']);
const dupRows = [];
for (const p of pages) {
  const toks = p.title.toLowerCase().replace(/[|(),.:]/g, ' ').split(/\s+/).filter(t => t && !STOP.has(t));
  const seen = {}; let dup = 0; const dupWords = [];
  for (const t of toks) { seen[t] = (seen[t] || 0) + 1; if (seen[t] === 2) { dup++; dupWords.push(t); } }
  if (dup > 0) dupRows.push({ url: p.url, dup, dupWords, t: p.title });
}
out('title z dupTokens>0', dupRows.map(r => r.url + ' [' + r.dupWords.join(',') + '] :: ' + r.t));

console.log(SEP + 'META DESCRIPTION — długość / unikalność');
const md = pages.map(p => ({ url: p.url, len: p.metaDescriptionLength, m: p.metaDescription }));
out('NULL/brak', pages.filter(p => !p.metaDescription).map(p => p.url));
out('len <70 (za krótkie)', md.filter(r => r.len > 0 && r.len < 70).map(r => r.url + '=' + r.len));
out('len 120-160 (optimum)', md.filter(r => r.len >= 120 && r.len <= 160).length);
out('len >160 (ryzyko ucięcia)', md.filter(r => r.len > 160).map(r => r.url + '=' + r.len + ' :: ' + r.m));
out('len min/median/max', (() => { const a = md.map(r => r.len).sort((x, y) => x - y); return [a[0], a[a.length >> 1], a[a.length - 1]]; })());
const byMd = {};
for (const p of pages) (byMd[p.metaDescription] ??= []).push(p.url);
out('duplikaty meta', Object.entries(byMd).filter(([, u]) => u.length > 1).map(([m, u]) => u.join(',') + ' :: ' + (m || '').slice(0, 50)));

console.log(SEP + 'H1 — liczba na stronę');
out('h1Count != 1', pages.filter(p => p.h1Count !== 1).map(p => p.url + '=' + p.h1Count));
out('h1 puste', pages.filter(p => !p.h1 || !p.h1[0]).map(p => p.url));

console.log(SEP + 'KOHERENCJA title <-> H1 (Goldmine)');
const norm = (s) => (s || '').toLowerCase().replace(/[|–\-(),.:]/g, ' ').split(/\s+/).filter(t => t && !STOP.has(t));
const coh = [];
for (const p of pages) {
  const tt = new Set(norm(p.title)); const hh = norm(p.h1?.[0] || '');
  const overlap = hh.filter(t => tt.has(t)).length;
  const ratio = hh.length ? +(overlap / hh.length).toFixed(2) : 0;
  coh.push({ url: p.url, ratio, h1: p.h1?.[0], title: p.title });
}
out('koherencja <0.5 (rozjazd title/H1)', coh.filter(c => c.ratio < 0.5).map(c => c.url + ' r=' + c.ratio + ' || H1="' + c.h1 + '" vs T="' + c.title + '"'));
out('koherencja 0.5-0.8', coh.filter(c => c.ratio >= 0.5 && c.ratio < 0.8).length);
out('koherencja >=0.8 (mocna)', coh.filter(c => c.ratio >= 0.8).length);

console.log(SEP + 'HIERARCHIA NAGŁÓWKÓW — przeskoki poziomów');
const jumps = [];
for (const p of pages) {
  const lv = (p.hTree || []).map(h => h.level);
  let prev = 0; const bad = [];
  for (let i = 0; i < lv.length; i++) {
    if (i === 0) { if (lv[i] !== 1) bad.push('start@h' + lv[i]); }
    else if (lv[i] > prev + 1) bad.push('h' + prev + '->h' + lv[i] + '@idx' + i);
    prev = lv[i];
  }
  if (bad.length) jumps.push({ url: p.url, bad, tree: lv.join('>') });
}
out('strony z przeskokami', jumps.length);
for (const j of jumps.slice(0, 25)) console.log('  ' + j.url + ' :: ' + j.bad.join(' ; ') + '  [' + j.tree + ']');

console.log(SEP + 'NAGŁÓWKI — liczność / chunking');
out('headingCounts sample (home)', pages[0].headingCounts);
out('strony bez H2 (brak chunkingu)', pages.filter(p => !(p.headingCounts?.h2 > 0)).map(p => p.url));
const hc = pages.map(p => ({ url: p.url, h2: p.headingCounts?.h2 || 0, h3: p.headingCounts?.h3 || 0, total: (p.hTree || []).length }));
out('mediana liczby nagłówków/stronę', (() => { const a = hc.map(r => r.total).sort((x, y) => x - y); return a[a.length >> 1]; })());
out('strony z <4 nagłówkami (uboga struktura)', hc.filter(r => r.total < 4).map(r => r.url + '=' + r.total));
out('h4+ głębokość — strony z h4/h5/h6', pages.filter(p => (p.headingCounts?.h4 || 0) + (p.headingCounts?.h5 || 0) + (p.headingCounts?.h6 || 0) > 0).map(p => p.url).length);

console.log(SEP + 'TITLE = H1 identyczne? (zbyt mały wariant / lub dobry)');
out('title (bez sufiksu) == H1', pages.filter(p => p.title.replace(suffix, '').trim() === (p.h1?.[0] || '').trim()).map(p => p.url).length);
