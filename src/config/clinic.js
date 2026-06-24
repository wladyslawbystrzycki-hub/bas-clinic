export const CLINIC = {
  name: 'Bas Clinic',
  legalName: 'Smile.Expert Sp. z o.o.',
  url: 'https://bas.clinic',
  phone: '+48 690 511 511',
  phoneRaw: '+48690511511',
  email: 'rejestracja@smile.expert',
  address: {
    street: 'ul. Opatowicka 132',
    city: 'Wrocław',
    cityDisplay: 'Wrocław',
    postalCode: '',
    country: 'PL',
  },
  hours: {
    weekdays: '9:00 - 17:00',
    saturday: 'Zamknięte',
    sunday: 'Zamknięte',
  },
  openingHoursSpecification: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  founders: [
    {
      name: 'lek. med. Bogdan Bas',
      role: 'Założyciel',
      description:
        'Od ponad 15 lat pomaga osobom uzależnionym, łącząc medycynę i psychoterapię w nowoczesną metodę leczenia.',
      experience: '15+',
      patients: '2000+',
      since: '2012',
      bio: [
        'Jestem lekarzem medycyny oraz lekarzem medycyny estetycznej, absolwentem Akademii Medycznej we Wrocławiu. Reprezentuję trzecie pokolenie lekarzy i od ponad 15 lat łączę doświadczenie kliniczne z indywidualnym podejściem do każdego Pacjenta.',
        'W swojej praktyce klinicznej spotkałem się z tysiącami historii osób uzależnionych. Każdej z nich poświęcam pełną uwagę, ponieważ wiem, że za każdą diagnozą stoi człowiek ze swoimi lękami, nadzieją i pragnieniem zmiany. Uzależnienie to choroba, a nie wybór, dlatego każdego Pacjenta traktuję z należnym zrozumieniem, godnością i szacunkiem.',
      ],
      quote: 'Jeśli Ty albo ktoś z Twoich bliskich ma problem z uzależnieniem, to pamiętaj — jesteśmy zawsze blisko Ciebie. Ale to Ty musisz wykonać ten pierwszy krok.',
      initials: 'BB',
      image: '/people/bogdan-bas.webp',
      focusAreas: [
        'Detoksykacja alkoholowa',
        'Farmakoterapia uzależnień',
        'Terapia indywidualna',
        'Wsparcie rodzin osób uzależnionych',
      ],
    },
    {
      name: 'lek. dent. Ivanna Bas',
      role: 'Współzałożycielka · Medycyna estetyczna',
      description:
        'Specjalistka medycyny estetycznej, ekspertka w zakresie zabiegów odmładzających, mezoterapii i modelowania twarzy.',
      bio: [
        'Nazywam się Ivanna Bas i jestem współwłaścicielką oraz lekarzem prowadzącym w klinice Bas Clinic.',
        'Tworząc to miejsce, zależało mi na czymś więcej niż nowoczesnej klinice. Chciałam stworzyć przestrzeń, w której Pacjent od pierwszych chwil czuje się bezpiecznie, spokojnie i komfortowo. Wierzę, że opieka medyczna nie musi kojarzyć się ze stresem — może być doświadczeniem opartym na zaufaniu, empatii i wzajemnym szacunku.',
        'W Bas Clinic patrzymy na zdrowie i estetykę w sposób kompleksowy. Łączymy medycynę estetyczną, stomatologię, diagnostykę oraz terapie wspierające organizm, aby każdemu Pacjentowi zaproponować rozwiązania dopasowane do jego indywidualnych potrzeb. Naszym celem nie jest zmienianie ludzi, lecz podkreślenie ich naturalnego piękna i przywracanie pewności siebie.',
        'Wierzymy, że współczesna medycyna to nie tylko skuteczność, ale również jakość doświadczenia Pacjenta. Dlatego dbamy o każdy detal — od atmosfery w klinice po naturalne efekty leczenia, dzięki którym nasi Pacjenci po prostu czują się dobrze we własnej skórze.',
      ],
      initials: 'IB',
      // Brak wycinanki — komponent pokaże elegancki monogram. Wstaw ścieżkę
      // (np. '/people/ivanna-bas.webp'), gdy zdjęcie z przezroczystym tłem będzie gotowe.
      image: '',
      focusAreas: [
        'Modelowanie ust',
        'Wypełniacze HA',
        'Stomatologia',
        'Stomatologia estetyczna',
        'Mezoterapia',
        'Wlewy witaminowe',
      ],
    },
  ],
  social: {
    facebook: 'https://facebook.com/smile.expert/',
    instagram: 'https://instagram.com/smile.expert/',
  },
  // Osadzona mapa na stronie kontaktu. Domyślnie budowana z adresu powyżej
  // (działa bez klucza API). Aby uzyskać dokładną pinezkę wizytówki Google:
  // Mapy Google → „Udostępnij" → „Umieść mapę" → skopiuj `src` z <iframe> tutaj.
  maps: {
    embedSrc: '',
  },
  // PLACEHOLDER — wstaw realne dane z profilu Google! „12k+" pochodzi ze zrzutu
  // referencyjnego (inna marka) i jest nieprawdziwe dla kliniki. Zostaw `count: ''`,
  // jeśli nie chcesz podawać liczby. `url` = link do profilu Google (opcjonalny).
  reviews: {
    rating: '4,8',
    count: '12k+',
    label: 'opinii w Google',
    url: '',
  },
  krs: '0000763394',
  nip: '8971862168',
};
