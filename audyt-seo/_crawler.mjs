// Jednorazowy crawler audytowy. Pobiera wyrenderowany HTML z lokalnego serwera prod
// i ekstrahuje sygnaly SEO per URL do crawl-dataset.json. Read-only wobec src/.
import { writeFileSync } from 'node:fs';

const BASE = 'http://localhost:3000';
const ORIGIN_HOST = 'bas.clinic';

// Lista tras = filesystem ground truth (64 strony) + sitemap/robots osobno.
const ROUTES = [
  '/', '/bonding/', '/btl-exion/', '/cennik/', '/chirurgia/', '/chirurgia/usuwanie-zebow/',
  '/higienizacja/', '/implanty-zebowe/', '/kontakt/', '/konturowanie-zuchwy/',
  '/korekta-usmiechu-dziaslowego/', '/laserowe-usuwanie-blizn/', '/leczenie-bezzebia/',
  '/leczenie-nadpotliwosci/', '/leczenie-zebow/', '/licowki/', '/medycyna-estetyczna/',
  '/mezoterapia-iglowa/', '/mezoterapia-mikroiglowa/', '/mezoterapia-okolicy-oka/',
  '/mezoterapia-skory-glowy/', '/modelowanie-ust/', '/o-nas/', '/ortodoncja/',
  '/ortodoncja/alignery/', '/ortodoncja/aparaty-ruchome/', '/ortodoncja/aparaty-stale/',
  '/osocze-bogatoplytkowe/', '/pilingi-medyczne/', '/programy-zabiegowe/', '/protetyka-korony/',
  '/redukcja-cieni/', '/redukcja-drobnych-zmarszczek-ha/', '/redukcja-glebokich-zmarszczek/',
  '/redukcja-zmarszczek-botox/', '/redukcja-zmarszczek-ha/', '/regeneracja-konturu-oka/',
  '/regeneratory-komorkowe/', '/skin-booster/', '/stomatologia/', '/stomatologia-dziecieca/',
  '/stomatologia-estetyczna/', '/stomatologia-estetyczna/odbudowa-zebow/',
  '/stomatologia-estetyczna/wybielanie-zebow/', '/stymulatory-tkankowe/', '/terapia-egzosomami/',
  '/usg/', '/usg/doppler/', '/usg/doppler-tetnic-szyjnych/', '/usg/doppler-zyl-konczyn-dolnych/',
  '/usg/ginekologiczne/', '/usg/jader/', '/usg/jamy-brzusznej/', '/usg/nerek/', '/usg/piersi/',
  '/usg/prostaty/', '/usg/slinianek/', '/usg/stawow/', '/usg/szyi/', '/usg/tarczycy/',
  '/usg/tkanek-miekkich/', '/usg/wezlow-chlonnych/', '/wlewy-witaminowe/', '/wypelniacze-ha/',
];

const dec = (s) => s
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&oacute;/g, 'ó')
  .replace(/&nbsp;/g, ' ').replace(/&#x27;/g, "'").trim();

function attr(tag, name) {
  const m = tag.match(new RegExp(name + '\\s*=\\s*"([^"]*)"', 'i')) ||
            tag.match(new RegExp(name + "\\s*=\\s*'([^']*)'", 'i'));
  return m ? dec(m[1]) : null;
}

function collectTypes(node, out) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) { node.forEach((n) => collectTypes(n, out)); return; }
  if (node['@type']) {
    const t = node['@type'];
    (Array.isArray(t) ? t : [t]).forEach((x) => out.push(x));
  }
  for (const k of Object.keys(node)) {
    if (k !== '@type') collectTypes(node[k], out);
  }
}

function analyze(url, status, finalUrl, html) {
  const head = (html.match(/<head[\s\S]*?<\/head>/i) || [''])[0];

  // meta tags
  const metaTags = head.match(/<meta\b[^>]*>/gi) || [];
  const getMeta = (key, valAttr = 'content', keyAttr = 'name') => {
    for (const t of metaTags) {
      const k = attr(t, keyAttr);
      if (k && k.toLowerCase() === key.toLowerCase()) return attr(t, valAttr);
    }
    return null;
  };

  const titleRaw = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1];
  const title = titleRaw ? dec(titleRaw.replace(/\s+/g, ' ')) : null;

  // canonical
  const linkTags = head.match(/<link\b[^>]*>/gi) || [];
  let canonical = null;
  for (const t of linkTags) {
    if ((attr(t, 'rel') || '').toLowerCase() === 'canonical') canonical = attr(t, 'href');
  }

  // headings
  const hTree = [];
  const hRe = /<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let hm;
  while ((hm = hRe.exec(html))) {
    const level = parseInt(hm[1][1], 10);
    const text = dec(hm[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
    if (text) hTree.push({ level, text });
  }
  const h1 = hTree.filter((h) => h.level === 1).map((h) => h.text);
  const headingCounts = {};
  for (let i = 1; i <= 6; i++) headingCounts['h' + i] = hTree.filter((h) => h.level === i).length;

  // JSON-LD
  const jsonLdTypes = [];
  const jsonLdErrors = [];
  const ldRe = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let lm;
  while ((lm = ldRe.exec(html))) {
    try { collectTypes(JSON.parse(lm[1]), jsonLdTypes); }
    catch (e) { jsonLdErrors.push(e.message); }
  }

  // links
  const aTags = html.match(/<a\b[^>]*href=["'][^"']*["'][^>]*>[\s\S]*?<\/a>/gi) || [];
  const internalLinks = [];
  const outboundLinks = [];
  for (const t of aTags) {
    const href = attr(t, 'href');
    if (!href) continue;
    const anchor = dec(t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
    if (href.startsWith('/') || href.includes(ORIGIN_HOST)) {
      let path = href.includes(ORIGIN_HOST) ? href.replace(/^https?:\/\/[^/]+/, '') : href;
      path = path.split('#')[0].split('?')[0];
      if (path) internalLinks.push({ href: path, anchor });
    } else if (/^https?:\/\//i.test(href)) {
      outboundLinks.push({ href, anchor });
    }
  }

  // images
  const imgTags = html.match(/<img\b[^>]*>/gi) || [];
  let imgWithoutAlt = 0;
  const images = imgTags.map((t) => {
    const alt = attr(t, 'alt');
    const src = attr(t, 'src');
    if (alt === null || alt === '') imgWithoutAlt++;
    return { src: src ? src.slice(0, 120) : null, alt };
  });

  // word count z widocznej tresci (usun head, script, style, tagi)
  let body = (html.match(/<body[\s\S]*?<\/body>/i) || [''])[0] || html;
  body = body.replace(/<script[\s\S]*?<\/script>/gi, ' ')
             .replace(/<style[\s\S]*?<\/style>/gi, ' ')
             .replace(/<[^>]+>/g, ' ');
  const text = dec(body).replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ');
  const wordCount = text ? text.split(/\s+/).filter(Boolean).length : 0;

  return {
    url, status, finalUrl,
    redirected: finalUrl !== BASE + url,
    title, titleLength: title ? title.length : 0,
    metaDescription: getMeta('description'),
    metaDescriptionLength: (getMeta('description') || '').length,
    canonical,
    robotsMeta: getMeta('robots'),
    viewport: getMeta('viewport'),
    og: {
      title: getMeta('og:title', 'content', 'property') || getMeta('og:title'),
      description: getMeta('og:description', 'content', 'property') || getMeta('og:description'),
      image: getMeta('og:image', 'content', 'property') || getMeta('og:image'),
      url: getMeta('og:url', 'content', 'property') || getMeta('og:url'),
      type: getMeta('og:type', 'content', 'property') || getMeta('og:type'),
      locale: getMeta('og:locale', 'content', 'property'),
      siteName: getMeta('og:site_name', 'content', 'property'),
    },
    twitterCard: getMeta('twitter:card'),
    htmlLang: (html.match(/<html[^>]*\blang=["']([^"']+)["']/i) || [])[1] || null,
    h1, h1Count: h1.length, headingCounts, hTree,
    jsonLdTypes, jsonLdErrors,
    wordCount,
    internalLinksCount: internalLinks.length,
    outboundLinksCount: outboundLinks.length,
    internalLinks, outboundLinks,
    imgCount: imgTags.length, imgWithoutAlt, images,
    htmlBytes: html.length,
  };
}

const results = [];
for (const route of ROUTES) {
  const full = BASE + route;
  try {
    const res = await fetch(full, { redirect: 'follow' });
    const html = await res.text();
    results.push(analyze(route, res.status, res.url, html));
    process.stdout.write('.');
  } catch (e) {
    results.push({ url: route, status: 0, error: e.message });
    process.stdout.write('x');
  }
}
process.stdout.write('\n');

// sitemap + robots osobno
const extras = {};
for (const p of ['/sitemap.xml', '/robots.txt']) {
  try {
    const res = await fetch(BASE + p);
    extras[p] = { status: res.status, body: await res.text() };
  } catch (e) { extras[p] = { status: 0, error: e.message }; }
}

// sitemap loc-i (do porownania pokrycia)
const sitemapLocs = (extras['/sitemap.xml']?.body || '')
  .match(/<loc>([^<]+)<\/loc>/g)?.map((m) => m.replace(/<\/?loc>/g, '')) || [];

const dataset = {
  generatedNote: 'Audyt SEO bas-clinic - crawl wyrenderowanego HTML (next start, prod).',
  base: BASE,
  routeCount: ROUTES.length,
  pages: results,
  sitemap: { locCount: sitemapLocs.length, locs: sitemapLocs, raw: extras['/sitemap.xml']?.status },
  robotsTxt: extras['/robots.txt']?.body || null,
};

writeFileSync(new URL('./crawl-dataset.json', import.meta.url), JSON.stringify(dataset, null, 2));
console.log(`Zapisano crawl-dataset.json: ${results.length} stron, sitemap loc=${sitemapLocs.length}`);
