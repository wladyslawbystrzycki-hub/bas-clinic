import { readFileSync, writeFileSync } from 'node:fs';
const d = JSON.parse(readFileSync('crawl-dataset.json','utf8'));
const pages = Array.isArray(d) ? d : d.pages;

const norm = (h) => {
  if (!h) return null;
  if (h.startsWith('tel:')||h.startsWith('mailto:')||h.startsWith('http')||h.startsWith('#')) return null;
  let u = h.split('#')[0].split('?')[0];
  if (!u.startsWith('/')) return null;
  if (!u.endsWith('/')) u += '/';
  return u;
};
const routes = new Set(pages.map(p=>norm(p.url)));
const N = pages.length;

// Per-page deduped internal link set + anchors
const linkSet = {};       // url -> Set(target)
const anchors = {};       // url -> [{href,anchor}]
for (const p of pages){
  const src = norm(p.url);
  const s = new Set(); const a=[];
  for (const l of (p.internalLinks||[])){
    const t = norm(l.href);
    if(!t) continue;
    a.push({t, anchor:(l.anchor||'').trim()});
    if(t!==src) s.add(t);
  }
  linkSet[src]=s; anchors[src]=a;
}

// Frequency of each target across pages (how many distinct pages link to it)
const freq = {};
for (const src of Object.keys(linkSet))
  for (const t of linkSet[src]) freq[t]=(freq[t]||0)+1;

// Chrome = appears on >= 58 of 64 pages (footer+topnav are on every page)
const CHROME_THRESH = 58;
const chrome = new Set(Object.keys(freq).filter(t=>freq[t]>=CHROME_THRESH));

// Contextual graph (links minus chrome). Keep breadcrumb up-links (they're contextual/in-body)
// We cannot distinguish breadcrumb from body by href alone; treat all non-chrome as contextual.
const ctxOut = {}; const ctxIn = {};
for (const r of routes){ ctxOut[r]=new Set(); ctxIn[r]=new Set(); }
for (const src of Object.keys(linkSet))
  for (const t of linkSet[src]){
    if (chrome.has(t)) continue;
    if (!routes.has(t)) continue;
    ctxOut[src].add(t); ctxIn[t].add(src);
  }

// Full graph degrees
const fullOut={}, fullIn={};
for (const r of routes){fullOut[r]=0;fullIn[r]=0;}
for (const src of Object.keys(linkSet)) {
  fullOut[src]=[...linkSet[src]].filter(t=>routes.has(t)).length;
  for (const t of linkSet[src]) if(routes.has(t)) fullIn[t]=(fullIn[t]||0)+1;
}

// PageRank on FULL internal graph (what Google's rendered DOM sees)
function pagerank(adjOut, dl=0.85, iters=100){
  const nodes=[...routes]; const n=nodes.length;
  let pr={}; nodes.forEach(x=>pr[x]=1/n);
  const outArr={}; nodes.forEach(x=>outArr[x]=[...adjOut[x]].filter(t=>routes.has(t)));
  for(let i=0;i<iters;i++){
    const np={}; let dangling=0;
    nodes.forEach(x=>{np[x]=(1-dl)/n; if(outArr[x].length===0) dangling+=pr[x];});
    nodes.forEach(x=>{ np[x]+=dl*dangling/n; });
    nodes.forEach(x=>{ const o=outArr[x]; if(o.length){ const share=dl*pr[x]/o.length; o.forEach(t=>np[t]+=share);} });
    pr=np;
  }
  return pr;
}
const fullAdj={}; for(const r of routes) fullAdj[r]=new Set([...linkSet[r]].filter(t=>routes.has(t)));
const prFull = pagerank(fullAdj);
const prCtx = pagerank(ctxOut);

// Wertyka classification
const cls = (u)=>{
  if(u==='/') return 'home';
  if(u.startsWith('/usg/')||u==='/usg/') return 'usg';
  if(u.startsWith('/stomatologia')||['/bonding/','/licowki/','/implanty-zebowe/','/protetyka-korony/','/leczenie-bezzebia/','/leczenie-zebow/','/higienizacja/','/ortodoncja/','/chirurgia/'].some(x=>u.startsWith(x))) return 'stoma';
  if(['/medycyna-estetyczna/','/btl-exion/','/wlewy-witaminowe/'].includes(u)) return u==='/wlewy-witaminowe/'?'wlewy':'estet-hub';
  if(['/o-nas/','/kontakt/','/cennik/'].includes(u)) return 'info';
  return 'estet'; // remaining flat slugs = aesthetic services
};

// Orphans (contextual): 0 contextual inbound
const ctxOrphans = [...routes].filter(r=> ctxIn[r].size===0 && r!=='/');
// Near-orphans: only 1 contextual inbound
const nearOrphans = [...routes].filter(r=> ctxIn[r].size===1 && r!=='/');

// Anchor analysis: generic anchors + exact-match repetition
const genericAnchors = new Set(['tutaj','czytaj więcej','więcej','zobacz','kliknij','tu','czytaj artykuł','sprawdź','zobacz więcej','dowiedz się więcej']);
let genericCount=0, totalAnchors=0;
const anchorByTarget={};
for(const src of Object.keys(anchors))
  for(const {t,anchor} of anchors[src]){
    if(!routes.has(t)||chrome.has(t)) continue; // contextual only
    totalAnchors++;
    if(genericAnchors.has(anchor.toLowerCase())) genericCount++;
    (anchorByTarget[t] ||= []).push(anchor);
  }

// Cross-cluster contextual link matrix
const clusters=['home','stoma','estet','estet-hub','usg','wlewy','info'];
const matrix={}; clusters.forEach(a=>{matrix[a]={}; clusters.forEach(b=>matrix[a][b]=0);});
for(const src of Object.keys(ctxOut))
  for(const t of ctxOut[src]) matrix[cls(src)][cls(t)]++;

// Summary per page
const rows = [...routes].map(r=>({
  url:r, cls:cls(r),
  fullIn:fullIn[r]||0, fullOut:fullOut[r]||0,
  ctxIn:ctxIn[r].size, ctxOut:ctxOut[r].size,
  prFull:+(prFull[r]*1000).toFixed(3), prCtx:+(prCtx[r]*1000).toFixed(3),
  ctxInSources:[...ctxIn[r]].sort(),
})).sort((a,b)=>a.prFull-b.prFull);

const out={
  meta:{N, chromeThreshold:CHROME_THRESH, chromeCount:chrome.size},
  chrome:[...chrome].sort(),
  freqTop:Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,40),
  ctxOrphans, nearOrphans,
  anchorStats:{totalContextualAnchors:totalAnchors, generic:genericCount},
  matrix,
  rows,
};
writeFileSync('_f5_graph.json', JSON.stringify(out,null,2));

// Console report
console.log('=== CHROME (>=58 pages) count:', chrome.size,'===');
console.log([...chrome].sort().join('\n'));
console.log('\n=== CONTEXTUAL ORPHANS (0 in-body inbound), n=',ctxOrphans.length,'===');
console.log(ctxOrphans.sort().join('\n'));
console.log('\n=== NEAR-ORPHANS (exactly 1 in-body inbound), n=',nearOrphans.length,'===');
nearOrphans.sort().forEach(r=>console.log(r,'<--',[...ctxIn[r]][0]));
console.log('\n=== Contextual anchors:', totalAnchors,' generic:',genericCount);
console.log('\n=== CROSS-CLUSTER contextual matrix (row links to col) ===');
console.log('from\\to\t'+clusters.join('\t'));
clusters.forEach(a=>console.log(a+'\t'+clusters.map(b=>matrix[a][b]).join('\t')));
