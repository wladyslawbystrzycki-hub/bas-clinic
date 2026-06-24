// Metamorfozy (efekty „przed / po") — single source of truth dla strony /metamorfozy/.
//
// ⚠️ ZGODNOŚĆ / BEZ FABRYKACJI: zdjęcia metamorfoz to materiały medyczne — w Polsce
// publikujemy je WYŁĄCZNIE jako autentyczne, udokumentowane realizacje i tylko za
// pisemną zgodą Pacjenta (RODO + reklama usług medycznych). Dlatego `before`/`after`
// są tu PUSTE — komponent `BeforeAfter` pokazuje wtedy elegancką ramkę-placeholder
// („Zdjęcie w przygotowaniu"), a po wstawieniu realnych ścieżek (np. '/people/…')
// galeria podmieni je automatycznie. NIE wstawiaj zdjęć stockowych jako „efektów".
//
// `summary` to neutralna charakterystyka zabiegu — NIGDY obietnice skuteczności,
// gwarancje efektu ani wymyślone liczby (UOKiK/Omnibus + reklama medyczna).
// Pole `serviceHref` linkuje do kanonicznej strony zabiegu (linkowanie wewnętrzne).

export const METAMORFOZY_CASES = [
  {
    id: 'licowki',
    area: 'Stomatologia estetyczna',
    service: 'Licówki',
    serviceHref: '/stomatologia/licowki/',
    title: 'Korekta kształtu i koloru uśmiechu',
    summary:
      'Licówki ceramiczne wykorzystywane do korekty proporcji, koloru i ustawienia zębów przednich. Plan dobierany indywidualnie.',
    before: '',
    after: '',
    alt: 'Metamorfoza uśmiechu — licówki',
  },
  {
    id: 'wybielanie-zebow',
    area: 'Stomatologia estetyczna',
    service: 'Wybielanie zębów',
    serviceHref: '/stomatologia/wybielanie-zebow/',
    title: 'Rozjaśnienie odcienia zębów',
    summary:
      'Profesjonalne wybielanie gabinetowe jako element planu estetycznego. Odcień wyjściowy i końcowy oceniamy podczas konsultacji.',
    before: '',
    after: '',
    alt: 'Metamorfoza uśmiechu — wybielanie zębów',
  },
  {
    id: 'bonding',
    area: 'Stomatologia estetyczna',
    service: 'Bonding',
    serviceHref: '/stomatologia/bonding/',
    title: 'Domknięcie szpar i korekta krawędzi',
    summary:
      'Bonding kompozytowy stosowany m.in. do korekty drobnych ubytków, szpar i kształtu zębów bez szlifowania.',
    before: '',
    after: '',
    alt: 'Metamorfoza uśmiechu — bonding',
  },
  {
    id: 'modelowanie-ust',
    area: 'Medycyna estetyczna',
    service: 'Modelowanie ust',
    serviceHref: '/medycyna-estetyczna/modelowanie-ust/',
    title: 'Modelowanie i nawilżenie ust',
    summary:
      'Modelowanie ust kwasem hialuronowym z naciskiem na naturalne proporcje i symetrię. Zakres ustalany z Pacjentem.',
    before: '',
    after: '',
    alt: 'Metamorfoza — modelowanie ust',
  },
  {
    id: 'redukcja-zmarszczek-botox',
    area: 'Medycyna estetyczna',
    service: 'Redukcja zmarszczek toksyną botulinową',
    serviceHref: '/medycyna-estetyczna/redukcja-zmarszczek-botox/',
    title: 'Wygładzenie zmarszczek mimicznych',
    summary:
      'Zabieg toksyną botulinową w obrębie górnej części twarzy. Dawkowanie dobierane do mimiki i oczekiwań Pacjenta.',
    before: '',
    after: '',
    alt: 'Metamorfoza — redukcja zmarszczek mimicznych',
  },
  {
    id: 'wypelniacze-ha',
    area: 'Medycyna estetyczna',
    service: 'Wypełniacze HA',
    serviceHref: '/medycyna-estetyczna/wypelniacze-ha/',
    title: 'Przywrócenie objętości i konturu twarzy',
    summary:
      'Wypełniacze na bazie kwasu hialuronowego stosowane do modelowania konturu i uzupełnienia objętości w wybranych okolicach.',
    before: '',
    after: '',
    alt: 'Metamorfoza — wypełniacze kwasem hialuronowym',
  },
];

// Realna sekwencja procesu → numeracja 01–04 jest „zasłużona" (nie scaffolding).
export const METAMORFOZY_STEPS = [
  {
    title: 'Konsultacja i diagnoza',
    text: 'Poznajemy Twoje oczekiwania, oceniamy stan wyjściowy i wspólnie ustalamy realny cel.',
  },
  {
    title: 'Indywidualny plan',
    text: 'Dobieramy zabiegi i kolejność etapów do Twoich uwarunkowań, tempa i budżetu.',
  },
  {
    title: 'Zabieg i opieka',
    text: 'Przeprowadzamy leczenie z dbałością o komfort i bezpieczeństwo na każdym etapie.',
  },
  {
    title: 'Efekt i utrzymanie',
    text: 'Dokumentujemy zmianę i podpowiadamy, jak zadbać o trwałość rezultatu.',
  },
];

export const METAMORFOZY_FAQ = [
  {
    question: 'Czy zdjęcia metamorfoz są prawdziwe?',
    answer:
      'Tak. Publikujemy wyłącznie autentyczne zdjęcia naszych Pacjentów i tylko za ich pisemną zgodą. Galerię uzupełniamy na bieżąco o kolejne udokumentowane realizacje.',
  },
  {
    question: 'Czy uzyskam dokładnie taki sam efekt?',
    answer:
      'Każda metamorfoza jest indywidualna. Efekt zależy od stanu wyjściowego, uwarunkowań biologicznych i przyjętego planu leczenia — dlatego zawsze zaczynamy od konsultacji i rzetelnej oceny.',
  },
  {
    question: 'Od czego zacząć?',
    answer:
      'Od konsultacji. Podczas wizyty ocenimy sytuację, omówimy oczekiwania i zaproponujemy możliwe rozwiązania wraz z orientacyjnym przebiegiem leczenia.',
  },
  {
    question: 'Jakich obszarów dotyczą metamorfozy?',
    answer:
      'Stomatologii estetycznej (m.in. licówki, bonding, wybielanie zębów, protetyka) oraz medycyny estetycznej (m.in. modelowanie ust, wypełniacze, redukcja zmarszczek).',
  },
];
