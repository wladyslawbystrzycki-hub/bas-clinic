/**
 * Galeria wnętrz i sprzętu Bas Clinic — dane dla `ClinicGallery`.
 *
 * Galeria jest RELEWANTNA Z KATEGORIĄ usługi (tak jak `getKnowledge`/`getWhyUs`/
 * `getTestimonials`): strona implantów pokazuje stomatologię, strona USG —
 * pracownię USG, a nie ten sam zestaw wszędzie. `getGallery(category)` rozpoznaje
 * kategorię z `heroSubtitle` TĄ SAMĄ logiką co pozostałe resolwery; strona główna
 * używa przekroju przez wszystkie działy (`GALLERY_HOME`).
 *
 * `PHOTO` to jedno źródło prawdy dla pojedynczego kadru (src + kicker + caption +
 * alt), dzięki czemu zestawy składamy z kluczy, a zdjęcie użyte w dwóch zestawach
 * (np. recepcja) nie ma zdublowanego opisu.
 *
 * Zdjęcia to licencjonowany stock (nie AI), kadr 4:5 / 1200×1500, hostowany
 * lokalnie w /public/uploads/galeria — podmień na realne foto Bas Clinic i
 * dopasuj `kicker`/`caption`/`alt` do tego, co faktycznie pokazuje kadr.
 */

const PHOTO = {
  // — stomatologia
  gabinetStomatologiczny: {
    src: '/uploads/galeria/galeria-gabinet-stomatologiczny-bas-clinic-wroclaw.webp',
    kicker: 'Wnętrze',
    caption: 'Gabinet stomatologiczny',
    alt: 'Gabinet stomatologiczny z unitem i fotelem w Bas Clinic we Wrocławiu',
  },
  unit: {
    src: '/uploads/galeria/galeria-unit-stomatologiczny-bas-clinic-wroclaw.webp',
    kicker: 'Sprzęt',
    caption: 'Nowoczesny unit i fotel',
    alt: 'Nowoczesny fotel stomatologiczny w gabinecie Bas Clinic we Wrocławiu',
  },
  skaner: {
    src: '/uploads/galeria/galeria-skaner-wewnatrzustny-bas-clinic-wroclaw.webp',
    kicker: 'Diagnostyka',
    caption: 'Skaner wewnątrzustny',
    alt: 'Skanowanie wewnątrzustne pacjentki w Bas Clinic we Wrocławiu',
  },
  mikroskop: {
    src: '/uploads/galeria/galeria-mikroskop-stomatologiczny-bas-clinic-wroclaw.webp',
    kicker: 'Sprzęt',
    caption: 'Mikroskop zabiegowy',
    alt: 'Mikroskop stomatologiczny nad fotelem w Bas Clinic we Wrocławiu',
  },
  diagnostykaCyfrowa: {
    src: '/uploads/galeria/galeria-diagnostyka-cyfrowa-bas-clinic-wroclaw.webp',
    kicker: 'Diagnostyka',
    caption: 'Cyfrowy model uzębienia',
    alt: 'Cyfrowy skan uzębienia na monitorze w Bas Clinic we Wrocławiu',
  },
  konsultacjaProtetyczna: {
    src: '/uploads/galeria/galeria-konsultacja-protetyczna-bas-clinic-wroclaw.webp',
    kicker: 'Leczenie',
    caption: 'Omówienie planu leczenia',
    alt: 'Lekarz omawia plan leczenia protetycznego na modelu w Bas Clinic we Wrocławiu',
  },

  // — medycyna estetyczna
  strefaEstetyczna: {
    src: '/uploads/galeria/galeria-strefa-medycyny-estetycznej-bas-clinic-wroclaw.webp',
    kicker: 'Wnętrze',
    caption: 'Strefa medycyny estetycznej',
    alt: 'Strefa medycyny estetycznej w Bas Clinic we Wrocławiu',
  },
  salaZabiegowa: {
    src: '/uploads/galeria/galeria-sala-zabiegowa-bas-clinic-wroclaw.webp',
    kicker: 'Wnętrze',
    caption: 'Sala zabiegowa',
    alt: 'Sala zabiegowa z leżanką i sprzętem w Bas Clinic we Wrocławiu',
  },
  estetykaGabinet: {
    src: '/uploads/galeria/galeria-estetyka-gabinet-zabiegowy-bas-clinic-wroclaw.webp',
    kicker: 'Zabiegi',
    caption: 'Gabinet zabiegowy',
    alt: 'Przygotowanie do zabiegu medycyny estetycznej w Bas Clinic we Wrocławiu',
  },
  estetykaLifting: {
    src: '/uploads/galeria/galeria-estetyka-lifting-rf-bas-clinic-wroclaw.webp',
    kicker: 'Zabiegi',
    caption: 'Zabieg na twarz',
    alt: 'Zabieg liftingujący na twarz w Bas Clinic we Wrocławiu',
  },
  estetykaAparatura: {
    src: '/uploads/galeria/galeria-estetyka-aparatura-bas-clinic-wroclaw.webp',
    kicker: 'Sprzęt',
    caption: 'Aparatura zabiegowa',
    alt: 'Ustawianie aparatury do zabiegu estetycznego w Bas Clinic we Wrocławiu',
  },
  estetykaUsta: {
    src: '/uploads/galeria/galeria-estetyka-modelowanie-ust-bas-clinic-wroclaw.webp',
    kicker: 'Zabiegi',
    caption: 'Zabieg iniekcyjny',
    alt: 'Zabieg iniekcyjny w okolicy ust w Bas Clinic we Wrocławiu',
  },

  // — USG
  usgPracownia: {
    src: '/uploads/galeria/galeria-usg-pracownia-bas-clinic-wroclaw.webp',
    kicker: 'Wnętrze',
    caption: 'Pracownia USG',
    alt: 'Pracownia USG z aparatem ultrasonograficznym w Bas Clinic we Wrocławiu',
  },
  usgAparat: {
    src: '/uploads/galeria/galeria-usg-aparat-bas-clinic-wroclaw.webp',
    kicker: 'Sprzęt',
    caption: 'Aparat ultrasonograficzny',
    alt: 'Konsola aparatu USG w Bas Clinic we Wrocławiu',
  },
  usgGlowica: {
    src: '/uploads/galeria/galeria-usg-glowica-bas-clinic-wroclaw.webp',
    kicker: 'Sprzęt',
    caption: 'Głowica USG',
    alt: 'Głowica ultrasonograficzna w dłoni lekarza w Bas Clinic we Wrocławiu',
  },
  usgBadanie: {
    src: '/uploads/galeria/galeria-usg-badanie-jamy-brzusznej-bas-clinic-wroclaw.webp',
    kicker: 'Badanie',
    caption: 'USG jamy brzusznej',
    alt: 'Lekarka wykonuje USG jamy brzusznej w Bas Clinic we Wrocławiu',
  },
  usgAnaliza: {
    src: '/uploads/galeria/galeria-usg-analiza-obrazu-bas-clinic-wroclaw.webp',
    kicker: 'Diagnostyka',
    caption: 'Omówienie obrazu',
    alt: 'Omówienie obrazu USG na monitorze podczas badania w Bas Clinic we Wrocławiu',
  },
  usgObraz: {
    src: '/uploads/galeria/galeria-usg-obraz-tarczycy-bas-clinic-wroclaw.webp',
    kicker: 'Diagnostyka',
    caption: 'Obraz z badania',
    alt: 'Obraz USG tarczycy na monitorze w pracowni Bas Clinic we Wrocławiu',
  },

  // — wlewy witaminowe
  wlewKroplowka: {
    src: '/uploads/galeria/galeria-wlewy-kroplowka-bas-clinic-wroclaw.webp',
    kicker: 'Wlewy',
    caption: 'Wlew dożylny',
    alt: 'Przygotowany wlew dożylny na stojaku w Bas Clinic we Wrocławiu',
  },
  wlewPrzygotowanie: {
    src: '/uploads/galeria/galeria-wlewy-przygotowanie-bas-clinic-wroclaw.webp',
    kicker: 'Przygotowanie',
    caption: 'Przygotowanie wlewu',
    alt: 'Lekarka przygotowuje zestaw do wlewu dożylnego w Bas Clinic we Wrocławiu',
  },
  wlewRegulacja: {
    src: '/uploads/galeria/galeria-wlewy-regulacja-bas-clinic-wroclaw.webp',
    kicker: 'Opieka',
    caption: 'Nadzór podczas wlewu',
    alt: 'Personel medyczny kontroluje przebieg wlewu w Bas Clinic we Wrocławiu',
  },
  wlewPreparat: {
    src: '/uploads/galeria/galeria-wlewy-preparat-bas-clinic-wroclaw.webp',
    kicker: 'Skład',
    caption: 'Dobór składu wlewu',
    alt: 'Dodawanie preparatu do worka z wlewem w Bas Clinic we Wrocławiu',
  },
  wlewWenflon: {
    src: '/uploads/galeria/galeria-wlewy-wenflon-bas-clinic-wroclaw.webp',
    kicker: 'Komfort',
    caption: 'Delikatne wkłucie',
    alt: 'Założony wenflon przed wlewem dożylnym w Bas Clinic we Wrocławiu',
  },
  wlewDobor: {
    src: '/uploads/galeria/galeria-wlewy-dobor-skladnikow-bas-clinic-wroclaw.webp',
    kicker: 'Przygotowanie',
    caption: 'Przygotowanie preparatu',
    alt: 'Lekarka nabiera preparat do wlewu witaminowego w Bas Clinic we Wrocławiu',
  },

  // — wspólne / ogólne
  recepcja: {
    src: '/uploads/galeria/galeria-recepcja-bas-clinic-wroclaw.webp',
    kicker: 'Komfort',
    caption: 'Recepcja',
    alt: 'Recepcja Bas Clinic we Wrocławiu',
  },
  poczekalnia: {
    src: '/uploads/galeria/galeria-poczekalnia-bas-clinic-wroclaw.webp',
    kicker: 'Komfort',
    caption: 'Poczekalnia',
    alt: 'Poczekalnia dla pacjentów w Bas Clinic we Wrocławiu',
  },
  strefaOczekiwania: {
    src: '/uploads/galeria/galeria-strefa-oczekiwania-bas-clinic-wroclaw.webp',
    kicker: 'Wnętrze',
    caption: 'Strefa dla pacjentów',
    alt: 'Jasna strefa wypoczynkowa dla pacjentów w Bas Clinic we Wrocławiu',
  },
  strefaRelaksu: {
    src: '/uploads/galeria/galeria-strefa-relaksu-bas-clinic-wroclaw.webp',
    kicker: 'Komfort',
    caption: 'Strefa relaksu',
    alt: 'Przytulna strefa relaksu przy recepcji Bas Clinic we Wrocławiu',
  },
  konsultacja: {
    src: '/uploads/galeria/galeria-konsultacja-bas-clinic-wroclaw.webp',
    kicker: 'Wizyta',
    caption: 'Konsultacja',
    alt: 'Konsultacja pacjentki z lekarzem w Bas Clinic we Wrocławiu',
  },
  zespol: {
    src: '/uploads/galeria/galeria-zespol-bas-clinic-wroclaw.webp',
    kicker: 'Zespół',
    caption: 'Nasz zespół',
    alt: 'Zespół medyczny Bas Clinic we Wrocławiu podczas omawiania planu leczenia',
  },
};

export const GALLERIES = {
  stomatologia: [
    PHOTO.gabinetStomatologiczny,
    PHOTO.unit,
    PHOTO.skaner,
    PHOTO.mikroskop,
    PHOTO.diagnostykaCyfrowa,
    PHOTO.konsultacjaProtetyczna,
  ],
  estetyka: [
    PHOTO.strefaEstetyczna,
    PHOTO.salaZabiegowa,
    PHOTO.estetykaGabinet,
    PHOTO.estetykaLifting,
    PHOTO.estetykaAparatura,
    PHOTO.estetykaUsta,
  ],
  usg: [
    PHOTO.usgPracownia,
    PHOTO.usgAparat,
    PHOTO.usgBadanie,
    PHOTO.usgGlowica,
    PHOTO.usgAnaliza,
    PHOTO.usgObraz,
  ],
  wlewy: [
    PHOTO.wlewKroplowka,
    PHOTO.wlewPrzygotowanie,
    PHOTO.wlewDobor,
    PHOTO.wlewPreparat,
    PHOTO.wlewWenflon,
    PHOTO.wlewRegulacja,
  ],
  // Fallback dla usług spoza czterech kategorii (m.in. leczenie uzależnień) —
  // neutralne kadry kliniki, bez sprzętu przypisanego do konkretnej dziedziny.
  default: [
    PHOTO.recepcja,
    PHOTO.poczekalnia,
    PHOTO.strefaOczekiwania,
    PHOTO.konsultacja,
    PHOTO.strefaRelaksu,
    PHOTO.zespol,
  ],
};

// Strona główna: przekrój przez wszystkie działy kliniki (stomatologia,
// estetyka, USG, wlewy) plus wnętrza — jedna galeria pokazuje całą ofertę.
export const GALLERY_HOME = [
  PHOTO.recepcja,
  PHOTO.gabinetStomatologiczny,
  PHOTO.strefaEstetyczna,
  PHOTO.usgPracownia,
  PHOTO.wlewKroplowka,
  PHOTO.poczekalnia,
];

/**
 * Zestaw zdjęć relewantny z kategorią usługi. `category` to `heroSubtitle`
 * strony — rozpoznanie identyczne jak w `getKnowledge`/`getWhyUs`/`getTestimonials`.
 */
export function getGallery(category = '') {
  const c = (category || '').toLowerCase();
  if (c.includes('ultrasonograf') || c.includes('usg')) return GALLERIES.usg;
  if (c.includes('infuz') || c.includes('wlew')) return GALLERIES.wlewy;
  if (
    c.includes('stomatolog') ||
    c.includes('ortodonc') ||
    c.includes('chirurg') ||
    c.includes('protetyk')
  )
    return GALLERIES.stomatologia;
  if (c.includes('estetyczn') || c.includes('estetyk')) return GALLERIES.estetyka;
  return GALLERIES.default;
}
