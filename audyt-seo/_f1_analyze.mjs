// Faza 1 (Trust & Technical) — analiza datasetu. Read-only wobec src/.
import { readFileSync } from 'node:fs';
const d = JSON.parse(readFileSync(new URL('./crawl-dataset.json', import.meta.url)));
const ORIGIN = 'https://bas.clinic';
const pages = d.pages;

const out = (label, v) => console.log(label + ': ' + (typeof v === 'object' ? JSON.stringify(v, null, 0) : v));

// 1. Statusy / redirecty
const nonOk = pages.filter(p => p.status !== 200);
const redirected = pages.filter(p => p.redirected);
out('pages', pages.length);
out('non-200', nonOk.map(p => p.url + '=' + p.status));
out('redirected', redirected.map(p => p.url + ' -> ' + p.finalUrl));

// 2. Canonical: brak / niezgodny z self
const expected = (u) => ORIGIN + u; // crawler trzyma url z trailing slash
const canonNull = pages.filter(p => !p.canonical);
const canonMismatch = pages.filter(p => p.canonical && p.canonical !== expected(p.url));
out('canonical NULL', canonNull.map(p => p.url));
out('canonical MISMATCH (self)', canonMismatch.map(p => p.url + ' => ' + p.canonical));

// 3. robots meta (noindex/nofollow)
const robotsSet = pages.filter(p => p.robotsMeta);
out('robotsMeta present', robotsSet.map(p => p.url + '=' + p.robotsMeta));

// 4. OG / Twitter / lang
out('og.image null count', pages.filter(p => !p.og?.image).length);
out('og.url null', pages.filter(p => !p.og?.url).map(p => p.url));
out('og.type values', [...new Set(pages.map(p => p.og?.type))]);
out('og.locale values', [...new Set(pages.map(p => p.og?.locale))]);
out('og.siteName values', [...new Set(pages.map(p => p.og?.siteName))]);
out('og.title null', pages.filter(p => !p.og?.title).map(p => p.url));
out('twitterCard values', [...new Set(pages.map(p => p.twitterCard))]);
out('htmlLang values', [...new Set(pages.map(p => p.htmlLang))]);
out('viewport null', pages.filter(p => !p.viewport).map(p => p.url));

// 5. Outbound (spamrank) — domeny zewnętrzne
const domains = {};
for (const p of pages) for (const l of (p.outboundLinks || [])) {
  try { const h = new URL(l.href).host; domains[h] = (domains[h]||0)+1; } catch {}
}
out('outbound domains', domains);

// 6. /undefined/ — zrodla zepsutych linkow
const undef = [];
for (const p of pages) for (const l of (p.internalLinks||[])) {
  if (l.href.includes('/undefined')) undef.push(p.url + ' -> ' + l.href + ' [' + (l.anchor||'').slice(0,40) + ']');
}
out('UNDEFINED links', undef);

// 7. Title length
const tl = pages.map(p => p.titleLength).sort((a,b)=>a-b);
out('title len min/median/max', [tl[0], tl[Math.floor(tl.length/2)], tl[tl.length-1]]);
out('title >60', pages.filter(p=>p.titleLength>60).length);
out('title >65', pages.filter(p=>p.titleLength>65).length);

// 8. Meta description length
out('meta desc >160', pages.filter(p=>p.metaDescriptionLength>160).map(p=>p.url+'='+p.metaDescriptionLength));
out('meta desc <70', pages.filter(p=>p.metaDescriptionLength>0 && p.metaDescriptionLength<70).map(p=>p.url+'='+p.metaDescriptionLength));
out('meta desc NULL', pages.filter(p=>!p.metaDescription).map(p=>p.url));

// 9. Word count (thin)
const wc = pages.map(p=>({u:p.url,w:p.wordCount})).sort((a,b)=>a.w-b.w);
out('thinnest 8', wc.slice(0,8).map(x=>x.u+'='+x.w));
out('wc <500 count', pages.filter(p=>p.wordCount<500).length);

// 10. Sitemap consistency
out('sitemap locCount', d.sitemap.locCount);
const sm = d.sitemap.locs;
out('sitemap non-https', sm.filter(l=>!l.startsWith('https://')).length);
out('sitemap no-trailing-slash', sm.filter(l=>!l.endsWith('/')).length);
// strony w crawl nieobecne w sitemap i odwrotnie
const crawlUrls = new Set(pages.map(p=>ORIGIN+p.url));
const smSet = new Set(sm);
out('in crawl NOT in sitemap', [...crawlUrls].filter(u=>!smSet.has(u)));
out('in sitemap NOT in crawl', [...smSet].filter(u=>!crawlUrls.has(u)));

// 11. robots.txt body
out('robots.txt', JSON.stringify(d.robotsTxt));
