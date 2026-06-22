/**
 * „Kompendium wiedzy" — treść sekcji `KnowledgeSection` (edytorialny blok pod hero
 * na podstronach usług + sekcja niżej na stronie głównej).
 *
 * Wzorowane na `whyUs.js`/`testimonials.js`: `getKnowledge(slug, category)`
 * rozwiązuje treść 1) per-slug (KNOWLEDGE_BY_SLUG — obecnie puste, miejsce na
 * przyszłe wyjątki), 2) per-kategoria (po `heroSubtitle`, ta sama logika co
 * `getTestimonials`/`getWhyUs`), 3) `KNOWLEDGE.default`. Strona główna używa
 * osobnego `KNOWLEDGE_HOME`.
 *
 * Każdy wpis: { eyebrow, title, description, points: [{title, text}], image,
 * image2, imageAlt }. `points` to PARAGRAFY WIEDZY/ORGANIZACYJNE — jak pracujemy,
 * czego się spodziewać. ⚠️ Treść edukacyjno-operacyjna: BEZ obietnic skuteczności,
 * gwarancji efektu i twierdzeń diagnostycznych; BEZ zmyślonych liczb/marek
 * (ryzyko UOKiK/Omnibus + reklama usług medycznych). Zdjęcia to placeholdery
 * (Unsplash, te same kadry co w galerii/CTA) — podmień na realne foto Bas Clinic.
 */

// Zdjęcia (placeholdery — znane, sprawdzone kadry z galerii/CTA).
const IMG = {
  gabinet: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=1100&fit=crop',
  unit: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=560&h=560&fit=crop',
  sprzet: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&h=1100&fit=crop',
  sala: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=900&h=1100&fit=crop',
  salaSq: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=560&h=560&fit=crop',
  estetyka: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&h=1100&fit=crop',
  sprzetSq: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=560&h=560&fit=crop',
  gabinetSq: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=560&h=560&fit=crop',
};

export const KNOWLEDGE = {
  stomatologia: {
    eyebrow: 'Kompendium wiedzy',
    title: 'Co warto wiedzieć o leczeniu w Bas Clinic',
    description:
      'Stomatologię prowadzimy kompleksowo — od profilaktyki po zaawansowane leczenie. Diagnostykę i plan ustalamy na miejscu, spokojnie tłumacząc każdy etap, abyś dokładnie wiedział, co Cię czeka.',
    points: [
      {
        title: 'Diagnostyka na miejscu',
        text: 'Zanim zaproponujemy leczenie, oceniamy sytuację na podstawie badania i diagnostyki obrazowej dostępnej w klinice.',
      },
      {
        title: 'Plan dopasowany do Ciebie',
        text: 'Zakres i kolejność leczenia ustalamy indywidualnie, tłumacząc każdy etap oraz orientacyjny koszt.',
      },
      {
        title: 'Komfort i znieczulenie',
        text: 'Dbamy o spokojny przebieg wizyty i komfortowe znieczulenie tam, gdzie jest potrzebne.',
      },
      {
        title: 'Kontrola po leczeniu',
        text: 'Po zakończonym leczeniu przekazujemy zalecenia i zapraszamy na wizyty kontrolne.',
      },
    ],
    image: IMG.gabinet,
    image2: IMG.unit,
    imageAlt: 'Gabinet stomatologiczny w Bas Clinic',
  },

  estetyka: {
    eyebrow: 'Kompendium wiedzy',
    title: 'Co warto wiedzieć przed zabiegiem estetycznym',
    description:
      'Medycyna estetyczna to przemyślane, subtelne zmiany — nie metamorfoza. Każdy zabieg poprzedzamy konsultacją, aby dobrać postępowanie do Twoich rysów, oczekiwań i ewentualnych przeciwwskazań.',
    points: [
      {
        title: 'Zabieg wykonuje lekarz',
        text: 'Zabiegi prowadzi lekarz, po konsultacji i analizie Twoich potrzeb oraz przeciwwskazań.',
      },
      {
        title: 'Naturalny, subtelny efekt',
        text: 'Stawiamy na harmonię z rysami twarzy — zmiana ma być odczuwalna dla Ciebie, a nie rzucać się w oczy innym.',
      },
      {
        title: 'Sprawdzone preparaty',
        text: 'Pracujemy na bezpiecznych, certyfikowanych preparatach, w sterylnych warunkach gabinetu.',
      },
      {
        title: 'Zalecenia po zabiegu',
        text: 'Wyjaśniamy, jak zadbać o skórę po zabiegu i czego spodziewać się w kolejnych dniach.',
      },
    ],
    image: IMG.estetyka,
    image2: IMG.sprzetSq,
    imageAlt: 'Strefa medycyny estetycznej w Bas Clinic',
  },

  usg: {
    eyebrow: 'Kompendium wiedzy',
    title: 'Co warto wiedzieć o badaniu USG',
    description:
      'USG to bezpieczna, nieinwazyjna metoda obrazowania. W Bas Clinic badanie wykonuje i opisuje lekarz, który na bieżąco omawia z Tobą obraz, a opis wyniku otrzymujesz od razu po wizycie.',
    points: [
      {
        title: 'Bezbolesne i bezpieczne',
        text: 'USG jest nieinwazyjne i nie wykorzystuje promieniowania — można je powtarzać bez obaw.',
      },
      {
        title: 'Lekarz wykonuje i opisuje',
        text: 'Badanie przeprowadza lekarz, który na bieżąco komentuje obraz i odpowiada na Twoje pytania.',
      },
      {
        title: 'Wynik od razu',
        text: 'Opis badania otrzymujesz bezpośrednio po wizycie, bez dni oczekiwania.',
      },
      {
        title: 'Prywatnie, bez skierowania',
        text: 'Na badanie umówisz się prywatnie, w krótkim terminie i bez skierowania.',
      },
    ],
    image: IMG.sprzet,
    image2: IMG.salaSq,
    imageAlt: 'Nowoczesny sprzęt diagnostyczny w Bas Clinic',
  },

  wlewy: {
    eyebrow: 'Kompendium wiedzy',
    title: 'Co warto wiedzieć o wlewach witaminowych',
    description:
      'Wlewy poprzedzamy kwalifikacją lekarską, a ich skład dobieramy indywidualnie. Podajemy je w komfortowych, sterylnych warunkach, pod opieką personelu.',
    points: [
      {
        title: 'Kwalifikacja lekarska',
        text: 'Przed wlewem lekarz ocenia wskazania i dobiera postępowanie do Twoich potrzeb.',
      },
      {
        title: 'Skład dobierany indywidualnie',
        text: 'Zestaw składników ustalamy indywidualnie, po rozmowie o Twoim samopoczuciu i celu wlewu.',
      },
      {
        title: 'Sterylne warunki',
        text: 'Wlew podajemy w sterylnych, komfortowych warunkach, pod stałą opieką personelu.',
      },
      {
        title: 'Spokój i komfort',
        text: 'Zadbamy o wygodne, dyskretne stanowisko, abyś mógł odpocząć podczas wlewu.',
      },
    ],
    image: IMG.sala,
    image2: IMG.unit,
    imageAlt: 'Komfortowa sala zabiegowa w Bas Clinic',
  },

  // Fallback dla podstron, których kategorii nie rozpoznano po heroSubtitle.
  default: {
    eyebrow: 'Kompendium wiedzy',
    title: 'Co warto wiedzieć, zanim zaczniemy',
    description:
      'Niezależnie od zabiegu zaczynamy od rozmowy i analizy potrzeb. Tłumaczymy możliwości, przebieg i ograniczenia, abyś podejmował decyzje świadomie i bez presji.',
    points: [
      {
        title: 'Konsultacja na początek',
        text: 'Zaczynamy od rozmowy i analizy potrzeb — wspólnie ustalamy, co ma sens w Twojej sytuacji.',
      },
      {
        title: 'Indywidualny plan i jasne etapy',
        text: 'Plan tworzymy pod konkretną osobę, pokazując kolejne kroki oraz orientacyjny koszt.',
      },
      {
        title: 'Bezpieczeństwo i sterylność',
        text: 'Pracujemy w sterylnych warunkach, na sprawdzonych preparatach i materiałach.',
      },
      {
        title: 'Opieka także po zabiegu',
        text: 'Przekazujemy czytelne zalecenia i pozostajemy w kontakcie po wizycie.',
      },
    ],
    image: IMG.estetyka,
    image2: IMG.gabinetSq,
    imageAlt: 'Wnętrze Bas Clinic',
  },
};

/**
 * Wersja na stronę główną — ogólnoklinicza (łączy wszystkie filary opieki).
 * Renderowana NIŻEJ na stronie (nie pod hero).
 */
export const KNOWLEDGE_HOME = {
  eyebrow: 'Kompendium wiedzy',
  title: 'Świadoma opieka zaczyna się od wiedzy',
  description:
    'W Bas Clinic łączymy stomatologię, medycynę estetyczną i diagnostykę USG pod jednym dachem. Zanim cokolwiek zaproponujemy, tłumaczymy możliwości, przebieg i ograniczenia — bo najlepsze decyzje podejmujesz wtedy, gdy rozumiesz, co i dlaczego robimy.',
  points: [
    {
      title: 'Konsultacja przed każdym zabiegiem',
      text: 'Zaczynamy od rozmowy i analizy potrzeb — wspólnie ustalamy, czy i jaki zabieg ma sens w Twojej sytuacji.',
    },
    {
      title: 'Indywidualny plan i jasne etapy',
      text: 'Plan tworzymy pod konkretną osobę, pokazując kolejne kroki oraz orientacyjny koszt — bez niespodzianek.',
    },
    {
      title: 'Bezpieczeństwo i sterylność',
      text: 'Pracujemy w sterylnych warunkach, na sprawdzonych preparatach i materiałach, zgodnie ze standardami medycznymi.',
    },
    {
      title: 'Opieka także po zabiegu',
      text: 'Przekazujemy czytelne zalecenia i pozostajemy w kontakcie — gojenie i utrzymanie efektu traktujemy jako część leczenia.',
    },
  ],
  image: IMG.estetyka,
  image2: IMG.gabinetSq,
  imageAlt: 'Wnętrze Bas Clinic',
};

// Miejsce na wyjątki per-slug (gdyby któraś usługa wymagała własnej treści).
const KNOWLEDGE_BY_SLUG = {};

/**
 * Zwraca treść „Kompendium wiedzy" dla danej usługi.
 * 1) wpis per-slug, 2) fallback kategorii po `category` (zwykle `heroSubtitle`,
 * ta sama logika co `getWhyUs`), 3) `KNOWLEDGE.default`.
 */
export function getKnowledge(slug, category = '') {
  if (slug && KNOWLEDGE_BY_SLUG[slug]) return KNOWLEDGE_BY_SLUG[slug];

  const c = (category || '').toLowerCase();
  if (c.includes('ultrasonograf') || c.includes('usg')) return KNOWLEDGE.usg;
  if (c.includes('infuz') || c.includes('wlew')) return KNOWLEDGE.wlewy;
  if (
    c.includes('stomatolog') ||
    c.includes('ortodonc') ||
    c.includes('chirurg') ||
    c.includes('protetyk')
  )
    return KNOWLEDGE.stomatologia;
  if (c.includes('estetyczn') || c.includes('estetyk')) return KNOWLEDGE.estetyka;

  return KNOWLEDGE.default;
}
