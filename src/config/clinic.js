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
        'Lekarz medycyny, absolwent Akademii Medycznej we Wrocławiu. Lekarz w trzecim pokoleniu. Od ponad 15 lat pomaga Pacjentom, łącząc wiedzę medyczną z empatią, szacunkiem i uważnym wsłuchiwaniem się w ich potrzeby.',
      experience: '15+',
      patients: '2000+',
      since: '2012',
      bio: [
        'Jestem lekarzem medycyny oraz absolwentem Akademii Medycznej we Wrocławiu. Pochodzę z rodziny o wielopokoleniowych tradycjach lekarskich — jestem lekarzem w trzecim pokoleniu. To właśnie rodzinne doświadczenia ukształtowały moje podejście do Pacjentów, oparte na empatii, szacunku i uważnym wsłuchiwaniu się w ich potrzeby.',
        'W swojej praktyce klinicznej spotkałem się z tysiącami historii Pacjentów. Każdej z nich poświęcałem pełną uwagę, ponieważ wiem, że za każdą diagnozą stoi człowiek ze swoimi lękami, nadzieją i pragnieniem zmiany.',
        'Wierzę, że skuteczne leczenie wymaga indywidualnego i kompleksowego planu terapeutycznego. Każdy z naszych Pacjentów otrzymuje indywidualnie dopasowany plan leczenia, uwzględniający jego sytuację zdrowotną, życiową i emocjonalną.',
        'W swojej praktyce lekarskiej łączę wiedzę medyczną z empatią, tworząc bezpieczną przestrzeń opartą na zaufaniu, zrozumieniu i braku oceniania.',
      ],
      quote: 'Każdy Pacjent zasługuje na pełną uwagę, empatię i indywidualne podejście — bo za każdą diagnozą stoi człowiek.',
      initials: 'BB',
      image: '/people/bogdan-bas.webp',
      focusAreas: [
        'Implanty i protetyka',
        'Leczenie kanałowe',
        'Diagnostyka USG',
        'Stomatologia dziecięca',
      ],
    },
    {
      name: 'lek. med. Iwanna Bas',
      role: 'Współzałożycielka · Medycyna estetyczna',
      description:
        'Specjalistka medycyny estetycznej, ekspertka w zakresie zabiegów odmładzających, mezoterapii i modelowania twarzy.',
      initials: 'IB',
      // Brak wycinanki — komponent pokaże elegancki monogram. Wstaw ścieżkę
      // (np. '/people/iwanna-bas.webp'), gdy zdjęcie z przezroczystym tłem będzie gotowe.
      image: '',
      focusAreas: [
        'Modelowanie ust i twarzy',
        'Mezoterapia',
        'Wypełniacze HA',
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
