import { CLINIC } from './clinic';

/**
 * EEAT — podpis autora/specjalistki pod treścią stron usług (komponent
 * `AuthorBio`, wpinany automatycznie przez `ServicePageTemplate`).
 *
 * Zakres: TYLKO stomatologia i medycyna estetyczna (USG / wlewy → brak podpisu).
 * Osoba: Iwanna Bas na OBU kategoriach — świadoma decyzja właściciela
 * (potwierdzona), mimo że dla samego EEAT silniejszy byłby autor zgodny z
 * tematem (Bogdan Bas ma kompetencje stomatologiczne). Aby przełączyć na model
 * „per kategoria", podmień wartość w `AUTHOR_FOR` (np. stomatologia → 'Bogdan').
 *
 * Zdjęcie i tytuł pochodzą z `CLINIC.founders` (single source of truth) — gdy
 * Iwanna dostanie wycinankę (`image` w clinic.js), podpis pokaże ją automatycznie;
 * do tego czasu `AuthorBio` renderuje elegancki monogram (jak FoundersSlider).
 *
 * ⚠️ `blurb` to opis KOMPETENCJI — bez obietnic skuteczności/leczenia ani
 * wymyślonych liczb (UOKiK/Omnibus + reklama usług medycznych).
 */

// Krótki, kompetencyjny opis. Celowo OGÓLNY (lekarka + współzałożycielka), by
// pasował także do stron stomatologii — NIE przypisuje Iwannie zabiegów
// dentystycznych. Klucz = pełne imię i nazwisko z clinic.js.
const AUTHOR_BLURB = {
  'lek. med. Iwanna Bas':
    'Lekarka i współzałożycielka Bas Clinic. Łączy wiedzę medyczną z uważnym, indywidualnym podejściem do każdego Pacjenta — od konsultacji, przez dobór rozwiązania, po opiekę po zabiegu.',
};

function founderByName(needle) {
  return CLINIC.founders.find((f) => f.name.includes(needle)) || null;
}

// Autor per kategoria. Decyzja: Iwanna Bas na obu (patrz nagłówek pliku).
const AUTHOR_FOR = {
  stomatologia: 'Iwanna',
  estetyka: 'Iwanna',
};

// Kategoria z `heroSubtitle` — TA SAMA logika co getKnowledge/getWhyUs.
// Zwraca null dla USG / wlewów (i wszystkiego innego) → brak podpisu EEAT.
function categoryOf(subtitle = '') {
  const c = (subtitle || '').toLowerCase();
  if (
    c.includes('stomatolog') ||
    c.includes('ortodonc') ||
    c.includes('chirurg') ||
    c.includes('protetyk')
  ) {
    return 'stomatologia';
  }
  if (c.includes('estetyczn') || c.includes('estetyk')) return 'estetyka';
  return null;
}

/**
 * Zwraca dane autora dla `AuthorBio` albo `null` (gdy strona nie jest
 * stomatologią/estetyką). `category` = `heroSubtitle` strony usługi.
 */
export function getPageAuthor(category = '') {
  const cat = categoryOf(category);
  if (!cat) return null;
  const founder = founderByName(AUTHOR_FOR[cat]);
  if (!founder) return null;
  return {
    name: founder.name,
    role: founder.role,
    image: founder.image,
    initials: founder.initials,
    blurb: AUTHOR_BLURB[founder.name] || founder.description,
    profileHref: '/o-nas/',
  };
}
