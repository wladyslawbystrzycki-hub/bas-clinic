import { CLINIC } from './clinic';

/**
 * EEAT — podpis autora/specjalistki pod treścią stron usług (komponent
 * `AuthorBio`, wpinany automatycznie przez `ServicePageTemplate`).
 *
 * Zakres: stomatologia, medycyna estetyczna i leczenie uzależnień (USG / wlewy → brak podpisu).
 * Autorzy dobrani tematycznie: Ivanna Bas (lek. dent.) podpisuje stomatologię i
 * medycynę estetyczną (jest dentystką i lekarką medycyny estetycznej), a Bogdan Bas
 * (lek. med.) — leczenie uzależnień (jego specjalność). Bogdan celowo NIE jest
 * autorem stron stomatologicznych. Mapowanie kategoria → osoba w `AUTHOR_FOR`.
 *
 * Zdjęcie i tytuł pochodzą z `CLINIC.founders` (single source of truth) — gdy
 * Ivanna dostanie wycinankę (`image` w clinic.js), podpis pokaże ją automatycznie;
 * do tego czasu `AuthorBio` renderuje elegancki monogram (jak FoundersSlider).
 *
 * ⚠️ `blurb` to opis KOMPETENCJI — bez obietnic skuteczności/leczenia ani
 * wymyślonych liczb (UOKiK/Omnibus + reklama usług medycznych).
 */

// Krótki, kompetencyjny opis. Klucz = pełne imię i nazwisko z clinic.js. Blurb
// Ivanny jest OGÓLNY (pasuje do stomatologii i medycyny estetycznej); blurb
// Bogdana dotyczy jego specjalności — leczenia uzależnień.
const AUTHOR_BLURB = {
  'lek. dent. Ivanna Bas':
    'Lekarka i współzałożycielka Bas Clinic. Łączy wiedzę medyczną z uważnym, indywidualnym podejściem do każdego Pacjenta — od konsultacji, przez dobór rozwiązania, po opiekę po zabiegu.',
  'lek. med. Bogdan Bas':
    'Lekarz medycyny i założyciel Bas Clinic. Od ponad 15 lat pomaga osobom uzależnionym, łącząc leczenie medyczne z psychoterapią — z indywidualnym planem, empatią i bez oceniania.',
};

function founderByName(needle) {
  return CLINIC.founders.find((f) => f.name.includes(needle)) || null;
}

// Autor per kategoria — dobór tematyczny (patrz nagłówek pliku).
const AUTHOR_FOR = {
  stomatologia: 'Ivanna',
  estetyka: 'Ivanna',
  uzaleznienia: 'Bogdan',
};

// Kategoria z `heroSubtitle` — TA SAMA logika co getKnowledge/getWhyUs.
// Zwraca null dla USG / wlewów (i nierozpoznanych) → brak podpisu EEAT.
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
  if (c.includes('uzależ')) return 'uzaleznienia';
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
