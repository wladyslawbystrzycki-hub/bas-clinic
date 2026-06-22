// „Powiązane zabiegi" — relewantne linkowanie wewnętrzne między usługami.
//
// `getRelatedServices(slug)` zwraca gotowy pakiet dla komponentu <RelatedServices/>
// (subtitle/title/intro + CTA do hubu + lista usług). Relewancję WYWODZIMY z modelu
// danych w services.js, więc działa automatycznie dla każdej strony usługi:
//   • USG          → kuratorskie pole `related` (fallback: ten sam `cluster`)
//   • Stomatologia → `children` (strony-kategorie) lub „rodzeństwo" spod tego samego `parent`
//   • Estetyka     → usługi dzielące `bodyAreas` (sortowane wg liczby wspólnych obszarów)
// `RELATED_OVERRIDES` pozwala ręcznie dobrać najbardziej trafne linki tam, gdzie
// automatyczne wyprowadzenie jest zbyt szerokie lub zbyt ubogie (głównie liście stomatologii).

import {
  STOMATOLOGIA_SERVICES,
  AESTHETIC_SERVICES,
  USG_SERVICES,
  getServiceBySlug,
} from './services';

// Ręcznie dobrane, najbardziej trafne powiązania (slug → [slug]).
// Nadpisują automatyczne wyprowadzenie. Używaj tylko slugów istniejących usług.
const RELATED_OVERRIDES = {
  // --- Stomatologia: estetyka uśmiechu (naturalne cross-selle) ---
  licowki: ['bonding', 'stomatologia-estetyczna/wybielanie-zebow', 'protetyka-korony', 'stomatologia-estetyczna'],
  bonding: ['licowki', 'stomatologia-estetyczna/wybielanie-zebow', 'stomatologia-estetyczna'],
  'stomatologia-estetyczna/wybielanie-zebow': ['licowki', 'bonding', 'stomatologia-estetyczna/odbudowa-zebow', 'stomatologia-estetyczna'],
  'stomatologia-estetyczna/odbudowa-zebow': ['licowki', 'bonding', 'stomatologia-estetyczna/wybielanie-zebow', 'protetyka-korony'],
  // --- Stomatologia: odbudowa / braki zębowe ---
  'implanty-zebowe': ['leczenie-bezzebia', 'protetyka-korony', 'chirurgia'],
  'leczenie-bezzebia': ['implanty-zebowe', 'protetyka-korony'],
  'protetyka-korony': ['implanty-zebowe', 'licowki', 'leczenie-bezzebia'],
  // --- Stomatologia: zachowawcza / profilaktyka ---
  higienizacja: ['leczenie-zebow', 'stomatologia-estetyczna/wybielanie-zebow', 'stomatologia-dziecieca'],
  'leczenie-zebow': ['higienizacja', 'chirurgia', 'stomatologia-dziecieca'],
  'stomatologia-dziecieca': ['leczenie-zebow', 'higienizacja', 'ortodoncja'],
  'chirurgia/usuwanie-zebow': ['implanty-zebowe', 'chirurgia', 'leczenie-zebow'],
  // --- Estetyka: usta / harmonizacja twarzy ---
  'modelowanie-ust': ['wypelniacze-ha', 'korekta-usmiechu-dziaslowego', 'redukcja-zmarszczek-botox'],
  'korekta-usmiechu-dziaslowego': ['modelowanie-ust', 'redukcja-zmarszczek-botox', 'wypelniacze-ha'],
  // --- Estetyka: pojedyncze obszary (mało „sąsiadów" wg bodyArea) ---
  'leczenie-nadpotliwosci': ['redukcja-zmarszczek-botox', 'mezoterapia-iglowa'],
  'laserowe-usuwanie-blizn': ['mezoterapia-mikroiglowa', 'mezoterapia-iglowa', 'osocze-bogatoplytkowe'],
  'mezoterapia-skory-glowy': ['osocze-bogatoplytkowe', 'mezoterapia-iglowa'],
  'osocze-bogatoplytkowe': ['mezoterapia-skory-glowy', 'mezoterapia-iglowa'],
};

// Hub + etykieta CTA per kategoria.
const HUBS = {
  stomatologia: { href: '/stomatologia/', label: 'Zobacz wszystkie zabiegi' },
  estetyka: { href: '/medycyna-estetyczna/', label: 'Zobacz wszystkie zabiegi' },
  usg: { href: '/usg/', label: 'Zobacz wszystkie badania USG' },
};

const COPY = {
  stomatologia: {
    subtitle: 'Stomatologia',
    title: 'Powiązane zabiegi',
    intro: 'Sprawdź pokrewne zabiegi stomatologiczne — często planujemy je wspólnie w jednym, spójnym planie leczenia.',
  },
  estetyka: {
    subtitle: 'Medycyna estetyczna',
    title: 'Powiązane zabiegi',
    intro: 'Zobacz pokrewne zabiegi medycyny estetycznej, które dobrze uzupełniają się w ramach jednego planu.',
  },
  usg: {
    subtitle: 'Diagnostyka USG',
    title: 'Powiązane badania USG',
    intro: 'Zobacz powiązane badania USG, które wykonujemy w naszej pracowni we Wrocławiu.',
  },
};

const DEFAULT_HUB = { href: '/cennik/', label: 'Zobacz wszystkie usługi' };

function categoryOf(svc) {
  if (USG_SERVICES.includes(svc)) return 'usg';
  if (AESTHETIC_SERVICES.includes(svc)) return 'estetyka';
  if (STOMATOLOGIA_SERVICES.includes(svc)) return 'stomatologia';
  return null;
}

// Mapuje listę slugów na obiekty usług, pomija duplikaty, bieżącą usługę i nieistniejące.
function resolveSlugs(slugs, excludeSlug) {
  const seen = new Set([excludeSlug]);
  const out = [];
  for (const s of slugs || []) {
    if (seen.has(s)) continue;
    seen.add(s);
    const svc = getServiceBySlug(s);
    if (svc) out.push(svc);
  }
  return out;
}

// Hub + etykieta CTA dla danego sluga (używane też przez ścieżkę z jawnym childServices).
export function getHubForSlug(slug) {
  const cat = categoryOf(getServiceBySlug(slug));
  return HUBS[cat] || DEFAULT_HUB;
}

export function getRelatedServices(slug, max = 6) {
  const svc = getServiceBySlug(slug);
  if (!svc || svc.isLanding) return null;
  const cat = categoryOf(svc);
  if (!cat) return null;

  let candidates;

  if (RELATED_OVERRIDES[slug]) {
    candidates = resolveSlugs(RELATED_OVERRIDES[slug], slug);
  } else if (cat === 'usg') {
    candidates = resolveSlugs(svc.related, slug);
    if (candidates.length === 0 && svc.cluster) {
      candidates = USG_SERVICES.filter(
        (s) => s.cluster === svc.cluster && s.slug !== slug && !s.isLanding,
      );
    }
  } else if (cat === 'stomatologia') {
    if (svc.children?.length) {
      // Strona-kategoria → jej pod-usługi.
      candidates = svc.children
        .map((id) => STOMATOLOGIA_SERVICES.find((s) => s.id === id))
        .filter(Boolean);
    } else {
      // Liść → rodzeństwo spod tego samego rodzica (+ strona rodzica dla zagnieżdżonych).
      candidates = STOMATOLOGIA_SERVICES.filter(
        (s) => s.parent === svc.parent && s.slug !== slug && !s.isLanding,
      );
      if (svc.parent && svc.parent !== 'stomatologia') {
        const parentSvc = STOMATOLOGIA_SERVICES.find((s) => s.id === svc.parent);
        if (parentSvc) candidates = [...candidates, parentSvc];
      }
    }
  } else {
    // estetyka → usługi dzielące obszar ciała, najwięcej wspólnych obszarów pierwsze.
    const areas = svc.bodyAreas || [];
    candidates = AESTHETIC_SERVICES.filter(
      (s) => s.slug !== slug && s.bodyAreas?.some((a) => areas.includes(a)),
    )
      .map((s) => ({ s, overlap: s.bodyAreas.filter((a) => areas.includes(a)).length }))
      .sort((a, b) => b.overlap - a.overlap)
      .map((x) => x.s);
  }

  const services = (candidates || []).slice(0, max);
  if (services.length === 0) return null;

  const hub = HUBS[cat] || DEFAULT_HUB;
  return {
    subtitle: COPY[cat].subtitle,
    title: COPY[cat].title,
    intro: COPY[cat].intro,
    ctaHref: hub.href,
    ctaLabel: hub.label,
    services,
  };
}
