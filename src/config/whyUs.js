/**
 * „Dlaczego my" — treść sekcji `CTASection` dobierana PER USŁUGA (klucz = slug).
 *
 * Każdy wpis: { title, intro, benefits[] } (6 atutów). `ServicePageTemplate`
 * woła `getWhyUs(slug, heroSubtitle)` i rozkłada wynik na propsy `CTASection`.
 * Brak wpisu per-slug → fallback kategorii (po `heroSubtitle`, jak w
 * `getTestimonials`) → {} (CTASection używa własnych „ogólnych" treści, np. na
 * stronie głównej).
 *
 * ⚠️ Treść marketingowa: atuty są OPERACYJNE/DOŚWIADCZENIOWE (jak działa
 * klinika) — BEZ obietnic skuteczności, gwarancji efektu i twierdzeń
 * diagnostycznych. Zweryfikuj przed publikacją.
 */

export const WHY_US = {
  // ————————————————————————— Stomatologia —————————————————————————
  'stomatologia/licowki': {
    title: 'Dlaczego licówki w Bas Clinic?',
    intro: 'Projektujemy uśmiech indywidualnie i pokazujemy jego podgląd, zanim wykonamy licówki — aby efekt był naturalny i trwały.',
    benefits: [
      'Cyfrowy projekt uśmiechu',
      'Licówki porcelanowe i kompozytowe',
      'Skan cyfrowy zamiast wycisków',
      'Naturalny dobór kształtu i koloru',
      'Minimalne, precyzyjne szlifowanie',
      'Doświadczenie w pracach estetycznych',
    ],
    image: '/uploads/services/dlaczego-my-licowki-pacjentka-bas-clinic-wroclaw.webp',
    imageAlt: 'Zadowolona pacjentka po założeniu licówek w Bas Clinic we Wrocławiu',
    image2: '/uploads/services/dlaczego-my-licowki-model-bas-clinic-wroclaw.webp',
    image2Alt: 'Model do planowania licówek w Bas Clinic we Wrocławiu',
  },
  'stomatologia': {
    title: 'Dlaczego stomatologia w Bas Clinic?',
    intro: 'Pod jednym dachem prowadzimy leczenie, profilaktykę i estetykę zębów, dbając o spokojną atmosferę i przejrzysty plan dla całej rodziny.',
    benefits: [
      'Pełen zakres leczenia',
      'Wiedza medyczna w trzecim pokoleniu',
      'Spokojna, komfortowa atmosfera',
      'Plan leczenia dopasowany indywidualnie',
      'Opieka dla całej rodziny',
      'Przejrzyste etapy i wycena',
    ],
  },
  'stomatologia/estetyczna': {
    title: 'Dlaczego stomatologia estetyczna u nas?',
    intro: 'Estetykę uśmiechu projektujemy z dbałością o proporcje twarzy, dobierając metodę do oczekiwań i naturalnego wyglądu zębów.',
    benefits: [
      'Indywidualny projekt uśmiechu',
      'Dobór metody do potrzeb',
      'Naturalny efekt estetyczny',
      'Precyzyjny dobór koloru',
      'Łączenie zabiegów estetycznych',
      'Konsultacja przed leczeniem',
    ],
  },
  'stomatologia/wybielanie-zebow': {
    title: 'Dlaczego wybielanie zębów w Bas Clinic?',
    intro: 'Wybielanie prowadzimy w gabinecie pod kontrolą lekarza, po wcześniejszej ocenie stanu zębów i dziąseł, z dbałością o komfort.',
    benefits: [
      'Wybielanie pod kontrolą lekarza',
      'Ocena zębów przed zabiegiem',
      'Ochrona dziąseł podczas zabiegu',
      'Łagodzenie nadwrażliwości',
      'Dobór odcienia do twarzy',
      'Wskazówki na utrzymanie efektu',
    ],
  },
  'stomatologia/odbudowa-zebow': {
    title: 'Dlaczego odbudowa zębów u nas?',
    intro: 'Ubytki i ułamane zęby odbudowujemy z dbałością o anatomię i kolor, tak aby uzupełnienie wtopiło się w naturalny uśmiech.',
    benefits: [
      'Nowoczesne materiały kompozytowe',
      'Wierne odwzorowanie anatomii',
      'Dopasowanie koloru do zębów',
      'Zachowanie zdrowych tkanek',
      'Odbudowa w jednej wizycie',
      'Doświadczenie w pracach estetycznych',
    ],
    image: '/uploads/services/dlaczego-my-odbudowa-zebow-pacjentka-bas-clinic-wroclaw.webp',
    imageAlt: 'Zadowolona pacjentka po odbudowie zębów w Bas Clinic we Wrocławiu',
    image2: '/uploads/services/dlaczego-my-odbudowa-zebow-opieka-bas-clinic-wroclaw.webp',
    image2Alt: 'Konsultacja i opieka przy odbudowie zębów w Bas Clinic we Wrocławiu',
  },
  'stomatologia/implanty-zebowe': {
    title: 'Dlaczego implanty zębowe w Bas Clinic?',
    intro: 'Leczenie implantologiczne planujemy w oparciu o diagnostykę obrazową i indywidualne warunki kości, prowadząc Pacjenta przez wszystkie etapy.',
    benefits: [
      'Planowanie na podstawie diagnostyki',
      'Renomowane systemy implantologiczne',
      'Implant z koroną w jednym miejscu',
      'Zabieg w warunkach sterylnych',
      'Opieka na każdym etapie',
      'Kontrola gojenia po zabiegu',
    ],
    image: '/uploads/services/dlaczego-my-implanty-zebowe-efekt-bas-clinic-wroclaw.webp',
    imageAlt: 'Efekt leczenia implantologicznego w Bas Clinic we Wrocławiu',
    // Główne zdjęcie to kolaż przed/po — nakładka zasłaniałaby „po" w rogu, więc ją wyłączamy.
    image2: null,
  },
  'stomatologia/leczenie-bezzebia': {
    title: 'Dlaczego leczenie bezzębia u nas?',
    intro: 'Pacjentom z bezzębiem proponujemy rozwiązania na implantach i protezy, dobierane do warunków jamy ustnej, oczekiwań i komfortu codziennego.',
    benefits: [
      'Rozwiązania stałe i ruchome',
      'Odbudowa na implantach',
      'Dopasowanie do warunków kości',
      'Komfort żucia i mowy',
      'Przejrzysty plan postępowania',
      'Stała opieka protetyczna',
    ],
    image: '/uploads/services/dlaczego-my-leczenie-bezzebia-efekt-bas-clinic-wroclaw.webp',
    imageAlt: 'Efekt leczenia bezzębia w Bas Clinic we Wrocławiu',
    // Główne zdjęcie to kolaż przed/po — nakładka zasłaniałaby „po" w rogu, więc ją wyłączamy.
    image2: null,
  },
  'stomatologia/bonding': {
    title: 'Dlaczego bonding w Bas Clinic?',
    intro: 'Bonding wykonujemy bez szlifowania zębów, modelując kształt materiałem kompozytowym podczas jednej wizyty, z dbałością o naturalny wygląd.',
    benefits: [
      'Zabieg bez szlifowania',
      'Efekt w jednej wizycie',
      'Korekta kształtu i szpar',
      'Dobór koloru kompozytu',
      'Modelowanie ręką lekarza',
      'Możliwa późniejsza korekta',
    ],
    image: '/uploads/services/dlaczego-my-bonding-pacjent-bas-clinic-wroclaw.webp',
    imageAlt: 'Zadowolony pacjent po bondingu zębów w Bas Clinic we Wrocławiu',
    image2: '/uploads/services/dlaczego-my-bonding-gabinet-bas-clinic-wroclaw.webp',
    image2Alt: 'Nowoczesny gabinet stomatologiczny Bas Clinic we Wrocławiu',
  },
  'stomatologia/protetyka-korony': {
    title: 'Dlaczego korony protetyczne u nas?',
    intro: 'Korony projektujemy cyfrowo i dobieramy materiał do funkcji oraz estetyki zęba, dbając o precyzyjne dopasowanie i naturalny wygląd.',
    benefits: [
      'Skan cyfrowy zamiast wycisków',
      'Korony pełnoceramiczne i cyrkonowe',
      'Precyzyjne dopasowanie brzegu',
      'Dobór koloru do uzębienia',
      'Współpraca z pracownią techniczną',
      'Ochrona osłabionego zęba',
    ],
    image: '/uploads/services/dlaczego-my-protetyka-korony-lekarka-bas-clinic-wroclaw.webp',
    imageAlt: 'Lekarka protetyk w gabinecie Bas Clinic we Wrocławiu',
    image2: '/uploads/services/dlaczego-my-protetyka-korony-gabinet-bas-clinic-wroclaw.webp',
    image2Alt: 'Nowoczesny gabinet protetyczny Bas Clinic we Wrocławiu',
  },
  'stomatologia/higienizacja': {
    title: 'Dlaczego higienizacja w Bas Clinic?',
    intro: 'Higienizację prowadzimy etapami — skaling, piaskowanie i polerowanie — z dbałością o komfort dziąseł i indywidualne wskazówki domowe.',
    benefits: [
      'Skaling, piaskowanie i polerowanie',
      'Delikatne usuwanie osadu',
      'Komfort wrażliwych dziąseł',
      'Instruktaż higieny domowej',
      'Dobór szczotek i past',
      'Przypomnienia o kolejnej wizycie',
    ],
    image: '/uploads/services/dlaczego-my-higienizacja-higienistka-bas-clinic-wroclaw.webp',
    imageAlt: 'Higienistka stomatologiczna w gabinecie Bas Clinic we Wrocławiu',
    image2: '/uploads/services/dlaczego-my-higienizacja-gabinet-bas-clinic-wroclaw.webp',
    image2Alt: 'Nowoczesny gabinet higienizacji Bas Clinic we Wrocławiu',
  },
  'stomatologia/dziecieca': {
    title: 'Dlaczego stomatologia dziecięca u nas?',
    intro: 'Najmłodszych Pacjentów oswajamy z gabinetem bez pośpiechu, tłumaczymy każdy krok i budujemy pozytywne skojarzenia z wizytą u dentysty.',
    benefits: [
      'Przyjazna atmosfera dla dziecka',
      'Oswajanie z gabinetem bez pośpiechu',
      'Tłumaczenie każdego kroku',
      'Profilaktyka zębów mlecznych',
      'Lakowanie i fluoryzacja',
      'Wsparcie i obecność rodzica',
    ],
    image: '/uploads/services/dlaczego-my-dziecieca-lekarka-bas-clinic-wroclaw.webp',
    imageAlt: 'Lekarka stomatolog dziecięcy w gabinecie Bas Clinic we Wrocławiu',
    image2: '/uploads/services/dlaczego-my-dziecieca-gabinet-bas-clinic-wroclaw.webp',
    image2Alt: 'Przyjazny dzieciom gabinet stomatologiczny Bas Clinic we Wrocławiu',
  },
  'stomatologia/leczenie-zebow': {
    title: 'Dlaczego leczenie zębów w Bas Clinic?',
    intro: 'Próchnicę i kanały leczymy pod powiększeniem, w komfortowym znieczuleniu, dbając o zachowanie jak największej ilości zdrowej tkanki zęba.',
    benefits: [
      'Leczenie pod powiększeniem',
      'Komfortowe, skuteczne znieczulenie',
      'Estetyczne wypełnienia kompozytowe',
      'Oszczędzanie zdrowych tkanek',
      'Diagnostyka obrazowa na miejscu',
      'Spokojny przebieg wizyty',
    ],
    image: '/uploads/services/dlaczego-my-leczenie-zebow-lekarka-bas-clinic-wroclaw.webp',
    imageAlt: 'Lekarka stomatolog w gabinecie Bas Clinic we Wrocławiu',
  },
  'stomatologia/ortodoncja': {
    title: 'Dlaczego ortodoncja u nas?',
    intro: 'Metodę prostowania zębów dobieramy po diagnostyce zgryzu, tłumacząc różnice między aparatami stałymi, ruchomymi i alignerami.',
    benefits: [
      'Diagnostyka zgryzu przed leczeniem',
      'Aparaty stałe, ruchome i alignery',
      'Dobór metody do trybu życia',
      'Plan leczenia krok po kroku',
      'Regularne wizyty kontrolne',
      'Leczenie dzieci i dorosłych',
    ],
  },
  'stomatologia/aparaty-stale': {
    title: 'Dlaczego aparaty stałe w Bas Clinic?',
    intro: 'Aparat stały dobieramy do potrzeb estetycznych i zgryzu, prowadząc leczenie systematycznie i objaśniając pielęgnację zamków podczas terapii.',
    benefits: [
      'Wersje metalowe i estetyczne',
      'Dobór do oczekiwań Pacjenta',
      'Systematyczne wizyty kontrolne',
      'Instruktaż higieny aparatu',
      'Leczenie złożonych wad zgryzu',
      'Opieka do końca terapii',
    ],
  },
  'stomatologia/alignery': {
    title: 'Dlaczego alignery u nas?',
    intro: 'Leczenie nakładkami planujemy cyfrowo i pokazujemy kolejne etapy przesuwania zębów, stawiając na dyskrecję i wygodę w codziennym noszeniu.',
    benefits: [
      'Cyfrowy plan leczenia',
      'Niemal niewidoczne nakładki',
      'Możliwość zdejmowania do posiłków',
      'Komfortowe, gładkie wykończenie',
      'Podgląd kolejnych etapów',
      'Łatwa higiena jamy ustnej',
    ],
  },
  'stomatologia/aparaty-ruchome': {
    title: 'Dlaczego aparaty ruchome w Bas Clinic?',
    intro: 'Aparaty ruchome stosujemy zwłaszcza u dzieci we wczesnej fazie leczenia, dobierając rozwiązanie wygodne w noszeniu i łatwe w utrzymaniu.',
    benefits: [
      'Rozwiązanie dla dzieci',
      'Aparat zdejmowany na czyszczenie',
      'Wczesna korekta rozwoju zgryzu',
      'Łatwa pielęgnacja aparatu',
      'Wygoda w codziennym noszeniu',
      'Wskazówki dla rodzica',
    ],
  },
  'stomatologia/chirurgia': {
    title: 'Dlaczego chirurgia stomatologiczna u nas?',
    intro: 'Zabiegi chirurgiczne przeprowadzamy w warunkach sterylnych i komfortowym znieczuleniu, omawiając wcześniej przebieg oraz zalecenia po zabiegu.',
    benefits: [
      'Warunki sterylne na sali',
      'Komfortowe, skuteczne znieczulenie',
      'Diagnostyka obrazowa przed zabiegiem',
      'Spokojne omówienie przebiegu',
      'Jasne zalecenia pozabiegowe',
      'Kontrola gojenia rany',
    ],
  },
  'stomatologia/usuwanie-zebow': {
    title: 'Dlaczego usuwanie zębów w Bas Clinic?',
    intro: 'Ekstrakcje, także zębów mądrości, wykonujemy w komfortowym znieczuleniu i możliwie oszczędnie, przekazując czytelne zalecenia na czas gojenia.',
    benefits: [
      'Komfortowe, skuteczne znieczulenie',
      'Usuwanie zębów mądrości',
      'Możliwie oszczędny zabieg',
      'Diagnostyka obrazowa przed ekstrakcją',
      'Czytelne zalecenia po zabiegu',
      'Kontrola gojenia zębodołu',
    ],
  },

  // ———————————————————————— Medycyna estetyczna ————————————————————————
  'medycyna-estetyczna': {
    title: 'Dlaczego medycyna estetyczna w Bas Clinic?',
    intro: 'Zabiegi estetyczne wykonuje lekarz, po szczerej konsultacji i analizie potrzeb — stawiamy na naturalny efekt i bezpieczeństwo.',
    benefits: [
      'Zabiegi wykonuje lekarz',
      'Szczera konsultacja i dobór zabiegu',
      'Naturalny, subtelny efekt',
      'Bezpieczne, sprawdzone preparaty',
      'Sterylne, bezpieczne warunki',
      'Dyskrecja i komfort',
    ],
  },
  'medycyna-estetyczna/btl-exion': {
    title: 'Dlaczego BTL Exion w Bas Clinic?',
    intro: 'Łączymy nieinwazyjną technologię z konsultacją lekarską, aby dobrać parametry zabiegu do kondycji i potrzeb Twojej skóry.',
    benefits: [
      'Zabieg bez igieł i nacięć',
      'Konsultacja i ocena skóry',
      'Brak okresu rekonwalescencji',
      'Komfortowy przebieg zabiegu',
      'Dobór obszaru do potrzeb',
      'Opieka lekarska podczas serii',
    ],
  },
  'medycyna-estetyczna/redukcja-zmarszczek-botox': {
    title: 'Dlaczego botoks w Bas Clinic?',
    intro: 'Zabieg planujemy po ocenie mimiki twarzy, aby wygładzić zmarszczki przy zachowaniu naturalnego wyrazu i swobody mimicznej.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Analiza mimiki przed zabiegiem',
      'Precyzyjne dawkowanie preparatu',
      'Naturalny, niewymuszony wyraz',
      'Krótki, mało odczuwalny zabieg',
      'Wizyta kontrolna po zabiegu',
    ],
  },
  'medycyna-estetyczna/wypelniacze-ha': {
    title: 'Dlaczego wypełniacze HA w Bas Clinic?',
    intro: 'Modelujemy rysy po wcześniejszej analizie proporcji twarzy, aby wypełnienie podkreślało Twoją urodę w sposób harmonijny.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Analiza proporcji twarzy',
      'Dobór gęstości preparatu',
      'Modelowanie igłą lub kaniulą',
      'Harmonijny, subtelny efekt',
      'Znieczulenie dla komfortu',
    ],
  },
  'medycyna-estetyczna/redukcja-zmarszczek-ha': {
    title: 'Dlaczego redukcja zmarszczek HA u nas?',
    intro: 'Dobieramy technikę podania kwasu hialuronowego do rodzaju zmarszczek, aby wygładzić skórę bez efektu przeciążenia.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Ocena rodzaju zmarszczek',
      'Technika dobrana do okolicy',
      'Subtelne, stopniowe wygładzenie',
      'Płynne przejścia bez grudek',
      'Plan podtrzymania efektu',
    ],
  },
  'medycyna-estetyczna/stymulatory-tkankowe': {
    title: 'Dlaczego stymulatory tkankowe w Bas Clinic?',
    intro: 'Biostymulację planujemy jako przemyślaną serię po ocenie kondycji skóry, aby pobudzać jej naturalną odnowę stopniowo.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Ocena kondycji skóry',
      'Indywidualny plan serii',
      'Stopniowy, naturalny efekt',
      'Praca nad jakością skóry',
      'Monitorowanie kolejnych wizyt',
    ],
  },
  'medycyna-estetyczna/mezoterapia-iglowa': {
    title: 'Dlaczego mezoterapia igłowa w Bas Clinic?',
    intro: 'Koktajl odżywczy dobieramy do potrzeb skóry, podając go precyzyjnie iniekcyjnie w sterylnych warunkach gabinetu lekarskiego.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Skład koktajlu do potrzeb',
      'Precyzyjne podanie w skórę',
      'Sterylne warunki zabiegu',
      'Odżywienie i nawilżenie skóry',
      'Zalecenia pielęgnacyjne po zabiegu',
    ],
  },
  'medycyna-estetyczna/mezoterapia-mikroiglowa': {
    title: 'Dlaczego mezoterapia mikroigłowa u nas?',
    intro: 'Głębokość mikronakłuć dobieramy do obszaru i kondycji skóry, aby pobudzić produkcję kolagenu w komfortowych warunkach.',
    benefits: [
      'Zabieg pod nadzorem lekarza',
      'Regulowana głębokość nakłuć',
      'Krem znieczulający przed zabiegiem',
      'Jednorazowe, sterylne końcówki',
      'Poprawa struktury i napięcia',
      'Wskazówki na okres gojenia',
    ],
  },
  'medycyna-estetyczna/pilingi-medyczne': {
    title: 'Dlaczego pilingi medyczne w Bas Clinic?',
    intro: 'Rodzaj i moc pilingu dobieramy po ocenie skóry i jej problemów, aby odnowa była skuteczna i bezpieczna.',
    benefits: [
      'Piling dobiera lekarz',
      'Ocena typu i potrzeb skóry',
      'Stopniowanie mocy kwasów',
      'Praca nad kolorytem i kondycją',
      'Bezpieczny protokół zabiegu',
      'Zalecenia i ochrona po pilingu',
    ],
  },
  'medycyna-estetyczna/programy-zabiegowe': {
    title: 'Dlaczego programy zabiegowe w Bas Clinic?',
    intro: 'Łączymy wybrane zabiegi w spójny program po konsultacji, aby kompleksowo zadbać o owal twarzy i jakość skóry.',
    benefits: [
      'Plan układa lekarz',
      'Konsultacja i analiza potrzeb',
      'Łączenie uzupełniających się zabiegów',
      'Ustalony harmonogram wizyt',
      'Kompleksowe podejście do twarzy',
      'Bieżąca kontrola postępów',
    ],
  },
  'medycyna-estetyczna/regeneratory-komorkowe': {
    title: 'Dlaczego regeneratory komórkowe u nas?',
    intro: 'Zaawansowaną regenerację prowadzimy po ocenie potrzeb skóry, aby wspierać jej naturalne procesy odnowy w bezpieczny sposób.',
    benefits: [
      'Zabieg wykonuje lekarz',
      'Ocena potrzeb regeneracyjnych',
      'Dobór preparatu do skóry',
      'Wsparcie naturalnej odnowy',
      'Sterylne warunki podania',
      'Indywidualny plan zabiegów',
    ],
  },
  'medycyna-estetyczna/terapia-egzosomami': {
    title: 'Dlaczego terapia egzosomami w Bas Clinic?',
    intro: 'Tę zaawansowaną terapię prowadzimy w komfortowych, dyskretnych warunkach po lekarskiej kwalifikacji do zabiegu.',
    benefits: [
      'Kwalifikacja i nadzór lekarza',
      'Indywidualna ocena wskazań',
      'Nowoczesny protokół zabiegu',
      'Sterylne, bezpieczne warunki',
      'Komfortowa, dyskretna atmosfera',
      'Opieka po zabiegu',
    ],
  },
  'medycyna-estetyczna/redukcja-glebokich-zmarszczek': {
    title: 'Dlaczego redukcja głębokich zmarszczek u nas?',
    intro: 'W delikatnej okolicy oczu pracujemy szczególnie ostrożnie, dobierając preparat i technikę do wymagającej, cienkiej skóry.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Doświadczenie w okolicy oczu',
      'Preparat do cienkiej skóry',
      'Precyzyjna, ostrożna technika',
      'Wygładzenie głębszych bruzd',
      'Kontrola efektu po zabiegu',
    ],
  },
  'medycyna-estetyczna/mezoterapia-okolicy-oka': {
    title: 'Dlaczego mezoterapia okolicy oka w Bas Clinic?',
    intro: 'Wokół oczu działamy delikatnie i precyzyjnie, dobierając koktajl nawilżający do wyjątkowo cienkiej i wrażliwej skóry.',
    benefits: [
      'Zabieg wykonuje lekarz',
      'Ostrożna praca przy oku',
      'Koktajl do skóry powiek',
      'Płytkie, precyzyjne iniekcje',
      'Nawilżenie wrażliwej okolicy',
      'Zalecenia pielęgnacyjne po zabiegu',
    ],
  },
  'medycyna-estetyczna/regeneracja-konturu-oka': {
    title: 'Dlaczego regeneracja konturu oka u nas?',
    intro: 'Kontur oka regenerujemy całościowo po ocenie okolicy, aby odświeżyć spojrzenie w sposób naturalny i wyważony.',
    benefits: [
      'Zabieg wykonuje lekarz',
      'Ocena całej okolicy oka',
      'Dobór metody do problemu',
      'Delikatna praca w okolicy powiek',
      'Odświeżenie i ujędrnienie konturu',
      'Komfortowy przebieg wizyty',
    ],
  },
  'medycyna-estetyczna/redukcja-cieni': {
    title: 'Dlaczego redukcja cieni pod oczami u nas?',
    intro: 'Przyczynę cieni oceniamy podczas konsultacji, aby dobrać postępowanie do Twojej dolinki łzowej i charakteru zmian.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Ocena przyczyny cieni',
      'Bezpieczna praca w dolince łzowej',
      'Technika dobrana do okolicy',
      'Rozjaśnienie i wyrównanie konturu',
      'Wizyta kontrolna po zabiegu',
    ],
  },
  'medycyna-estetyczna/modelowanie-ust': {
    title: 'Dlaczego modelowanie ust w Bas Clinic?',
    intro: 'Usta modelujemy do proporcji Twojej twarzy, dbając o naturalny kształt, symetrię i komfort podczas zabiegu.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Dobór kształtu do twarzy',
      'Nacisk na symetrię ust',
      'Znieczulenie dla komfortu',
      'Naturalny, miękki efekt',
      'Kontrola wyniku po zabiegu',
    ],
  },
  'medycyna-estetyczna/korekta-usmiechu-dziaslowego': {
    title: 'Dlaczego korekta uśmiechu dziąsłowego u nas?',
    intro: 'Korektę uśmiechu dziąsłowego planujemy po analizie mimiki i proporcji uśmiechu, aby odsłonięcie dziąseł było mniej widoczne.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Analiza uśmiechu i mimiki',
      'Precyzyjne, punktowe podanie',
      'Mało odczuwalny zabieg',
      'Subtelna zmiana linii uśmiechu',
      'Wiedza stomatologiczna i estetyczna',
    ],
  },
  'medycyna-estetyczna/redukcja-drobnych-zmarszczek-ha': {
    title: 'Dlaczego redukcja drobnych zmarszczek u nas?',
    intro: 'Szyję i dekolt traktujemy jako wymagający obszar, podając lekki kwas hialuronowy techniką dopasowaną do cienkiej skóry.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Dedykowany protokół na dekolt',
      'Lekki preparat do cienkiej skóry',
      'Technika mikrobolusów lub nappage',
      'Wygładzenie i nawilżenie skóry',
      'Plan serii zabiegów',
    ],
  },
  'medycyna-estetyczna/konturowanie-zuchwy': {
    title: 'Dlaczego konturowanie żuchwy w Bas Clinic?',
    intro: 'Linię żuchwy i brody modelujemy po analizie proporcji profilu, aby podkreślić kontur dolnej części twarzy harmonijnie.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Analiza profilu i proporcji',
      'Modelowanie linii żuchwy i brody',
      'Dobór gęstego preparatu',
      'Wyraźniejszy, naturalny kontur',
      'Ocena efektu po zabiegu',
    ],
  },
  'medycyna-estetyczna/skin-booster': {
    title: 'Dlaczego skin booster w Bas Clinic?',
    intro: 'Głębokie nawilżenie planujemy po ocenie poziomu odwodnienia skóry, aby przywrócić jej gładkość i świeży wygląd.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Ocena nawilżenia skóry',
      'Preparat nawilżający w głębi skóry',
      'Równomierne rozprowadzenie',
      'Poprawa gładkości i blasku',
      'Plan podtrzymania nawilżenia',
    ],
  },
  'medycyna-estetyczna/mezoterapia-skory-glowy': {
    title: 'Dlaczego mezoterapia skóry głowy u nas?',
    intro: 'Skórę głowy oceniamy przed zabiegiem, aby dobrać koktajl wspierający kondycję włosów i prawidłowo podać go w okolicę cebulek.',
    benefits: [
      'Zabieg wykonuje lekarz',
      'Ocena skóry głowy i włosów',
      'Koktajl dla kondycji włosów',
      'Podanie w okolicę cebulek',
      'Sterylne, jednorazowe igły',
      'Plan regularnych wizyt',
    ],
  },
  'medycyna-estetyczna/osocze-bogatoplytkowe': {
    title: 'Dlaczego osocze bogatopłytkowe w Bas Clinic?',
    intro: 'Pracujemy na Twoim własnym osoczu przygotowanym na miejscu, podając je w sterylnych warunkach po lekarskiej kwalifikacji.',
    benefits: [
      'Zabieg wykonuje lekarz',
      'Praca na własnym osoczu',
      'Przygotowanie materiału na miejscu',
      'Sterylna, jednorazowa procedura',
      'Zastosowanie na twarz i włosy',
      'Indywidualny plan serii',
    ],
  },
  'medycyna-estetyczna/przeszczep-wlosow': {
    title: 'Dlaczego przeszczep włosów w Bas Clinic?',
    intro: 'Plan przeszczepu ustalamy po ocenie skóry głowy i obszaru dawczego, omawiając przebieg zabiegu oraz okres gojenia podczas konsultacji.',
    benefits: [
      'Konsultacja i ocena skóry głowy',
      'Indywidualny plan zabiegu',
      'Odtworzenie linii włosów',
      'Sterylne warunki zabiegu',
      'Komfortowy przebieg w znieczuleniu',
      'Opieka i zalecenia po zabiegu',
    ],
  },
  'medycyna-estetyczna/laserowe-usuwanie-blizn': {
    title: 'Dlaczego laserowe usuwanie blizn u nas?',
    intro: 'Parametry lasera dobieramy po ocenie rodzaju blizn i rozstępów, aby pracować nad ich wyglądem bezpiecznie i etapowo.',
    benefits: [
      'Zabieg pod nadzorem lekarza',
      'Ocena rodzaju blizn i rozstępów',
      'Parametry lasera do problemu',
      'Praca nad blizną etapowo',
      'Ochrona skóry podczas zabiegu',
      'Zalecenia na okres gojenia',
    ],
  },
  'medycyna-estetyczna/leczenie-nadpotliwosci': {
    title: 'Dlaczego leczenie nadpotliwości w Bas Clinic?',
    intro: 'Po kwalifikacji lekarskiej podajemy toksynę botulinową precyzyjnie w obszar objęty nadpotliwością, dbając o komfort zabiegu.',
    benefits: [
      'Iniekcje wykonuje lekarz',
      'Kwalifikacja do zabiegu',
      'Leczenie dłoni, stóp lub pach',
      'Siatka precyzyjnych wstrzyknięć',
      'Znieczulenie wrażliwych okolic',
      'Dyskretna, komfortowa atmosfera',
    ],
  },

  // ————————————————————————————— USG —————————————————————————————
  'usg': {
    title: 'Dlaczego USG w Bas Clinic?',
    intro: 'Prowadzimy pracownię USG, w której badanie wykonuje i opisuje lekarz na miejscu, a opis wyniku otrzymujesz od razu po badaniu.',
    benefits: [
      'Badanie wykonuje i opisuje lekarz',
      'Pełen zakres badań USG',
      'Opis wyniku od razu',
      'Bezbolesne, bez promieniowania',
      'Prywatnie, bez skierowania',
      'Krótkie terminy badań',
    ],
  },
  'usg/jama-brzuszna': {
    title: 'Dlaczego USG brzucha w Bas Clinic?',
    intro: 'Przeglądowe badanie wątroby, trzustki, nerek, śledziony i pęcherzyka żółciowego wykonuje i opisuje lekarz, który od razu omawia z Tobą obraz.',
    benefits: [
      'Ocena kilku narządów naraz',
      'Badanie wykonuje i opisuje lekarz',
      'Przygotowanie wyjaśnione przy zapisie',
      'Opis wyniku od razu',
      'Bezbolesne, bez promieniowania',
      'Możliwość rozszerzenia o nerki',
    ],
  },
  'usg/watroba': {
    title: 'Dlaczego USG wątroby w Bas Clinic?',
    intro: 'Skupiamy badanie na ocenie miąższu wątroby i dróg żółciowych, a obraz na bieżąco omawia z Tobą lekarz wykonujący badanie.',
    benefits: [
      'Celowana ocena miąższu wątroby',
      'Ocena dróg żółciowych',
      'Badanie wykonuje i opisuje lekarz',
      'Opis wyniku od razu',
      'Bezbolesne, bez promieniowania',
      'Wygodna kontrola znanych zmian',
    ],
  },
  'usg/nerki': {
    title: 'Dlaczego USG nerek w Bas Clinic?',
    intro: 'Oceniamy strukturę nerek i dróg moczowych w jednym badaniu, które wykonuje i opisuje lekarz, omawiając obraz na bieżąco.',
    benefits: [
      'Celowana ocena nerek',
      'Ocena dróg moczowych',
      'Badanie wykonuje i opisuje lekarz',
      'Opis wyniku od razu',
      'Bezbolesne, bez promieniowania',
      'Wygodna kontrola po badaniu',
    ],
  },
  'usg/prostata': {
    title: 'Dlaczego USG prostaty w Bas Clinic?',
    intro: 'Wykonujemy przezbrzuszne USG gruczołu krokowego z oceną zalegania moczu, a obraz i opis przekazuje lekarz prowadzący badanie.',
    benefits: [
      'Badanie przezbrzuszne, bez dyskomfortu',
      'Ocena objętości stercza',
      'Ocena zalegania po mikcji',
      'Badanie wykonuje i opisuje lekarz',
      'Opis wyniku od razu',
      'Komfort i dyskrecja',
    ],
  },
  'usg/tarczyca': {
    title: 'Dlaczego USG tarczycy w Bas Clinic?',
    intro: 'Oceniamy strukturę, objętość i ewentualne guzki tarczycy, a obraz oraz opis wyniku przekazuje lekarz wykonujący badanie.',
    benefits: [
      'Ocena guzków i struktury',
      'Pomiar objętości tarczycy',
      'Badanie wykonuje i opisuje lekarz',
      'Opis wyniku od razu',
      'Bez przygotowania, bezbolesne',
      'Możliwość oceny węzłów szyi',
    ],
  },
  'usg/szyja': {
    title: 'Dlaczego USG szyi w Bas Clinic?',
    intro: 'W jednym badaniu oceniamy tkanki miękkie szyi, węzły chłonne i ślinianki, a obraz na bieżąco omawia lekarz wykonujący badanie.',
    benefits: [
      'Ocena tkanek miękkich szyi',
      'Ocena węzłów chłonnych',
      'Ocena ślinianek',
      'Badanie wykonuje i opisuje lekarz',
      'Bez przygotowania, bezbolesne',
      'Opis wyniku od razu',
    ],
  },
  'usg/slinianki': {
    title: 'Dlaczego USG ślinianek w Bas Clinic?',
    intro: 'Oceniamy ślinianki przyuszne i podżuchwowe w badaniu celowanym, które wykonuje i opisuje lekarz, omawiając obraz na bieżąco.',
    benefits: [
      'Ocena ślinianek przyusznych',
      'Ocena ślinianek podżuchwowych',
      'Badanie wykonuje i opisuje lekarz',
      'Bez przygotowania, bezbolesne',
      'Opis wyniku od razu',
      'Możliwość oceny węzłów szyi',
    ],
  },
  'usg/wezly-chlonne': {
    title: 'Dlaczego USG węzłów chłonnych u nas?',
    intro: 'Oceniamy węzły chłonne szyi, pach i pachwin w jednym badaniu, a obraz oraz opis wyniku przekazuje lekarz wykonujący badanie.',
    benefits: [
      'Ocena węzłów szyi, pach i pachwin',
      'Pomiar wielkości węzłów',
      'Badanie wykonuje i opisuje lekarz',
      'Bez przygotowania, bezbolesne',
      'Opis wyniku od razu',
      'Wygodna kontrola po badaniu',
    ],
  },
  'usg/piersi': {
    title: 'Dlaczego USG piersi w Bas Clinic?',
    intro: 'Oceniamy gruczoły piersiowe i węzły pachowe bez promieniowania, w spokojnej atmosferze, a obraz na bieżąco omawia lekarz wykonujący badanie.',
    benefits: [
      'Ocena gruczołów piersiowych',
      'Ocena węzłów pachowych',
      'Bez promieniowania, bezbolesne',
      'Badanie wykonuje i opisuje lekarz',
      'Opis wyniku od razu',
      'Komfort i dyskrecja',
    ],
  },
  'usg/tkanki-miekkie': {
    title: 'Dlaczego USG tkanek miękkich u nas?',
    intro: 'Oceniamy guzki podskórne, mięśnie i ścięgna w celowanym badaniu, które wykonuje i opisuje lekarz, omawiając obraz na bieżąco.',
    benefits: [
      'Ocena guzków podskórnych',
      'Ocena mięśni i ścięgien',
      'Wskazanie miejsca dolegliwości',
      'Badanie wykonuje i opisuje lekarz',
      'Bez przygotowania, bezbolesne',
      'Opis wyniku od razu',
    ],
  },
  'usg/jadra': {
    title: 'Dlaczego USG jąder w Bas Clinic?',
    intro: 'Oceniamy jądra i mosznę z opcją Dopplera, w spokojnej i dyskretnej atmosferze, a obraz oraz opis przekazuje lekarz wykonujący badanie.',
    benefits: [
      'Ocena jąder i moszny',
      'Opcja oceny Dopplerem',
      'Badanie wykonuje i opisuje lekarz',
      'Bez przygotowania, bezbolesne',
      'Opis wyniku od razu',
      'Komfort i dyskrecja',
    ],
  },
  'usg/ginekologiczne': {
    title: 'Dlaczego USG ginekologiczne u nas?',
    intro: 'Oceniamy macicę i jajniki transwaginalnie lub przezbrzusznie, w spokojnej atmosferze, a obraz oraz opis przekazuje lekarz wykonujący badanie.',
    benefits: [
      'Ocena macicy i jajników',
      'Dostęp transwaginalny lub przezbrzuszny',
      'Badanie wykonuje i opisuje lekarz',
      'Przygotowanie wyjaśnione przy zapisie',
      'Opis wyniku od razu',
      'Komfort i dyskrecja',
    ],
  },
  'usg/doppler': {
    title: 'Dlaczego USG Doppler w Bas Clinic?',
    intro: 'Oceniamy przepływ krwi w tętnicach i żyłach metodą Dopplera, a obraz i opis wyniku przekazuje lekarz wykonujący badanie.',
    benefits: [
      'Ocena przepływu krwi',
      'Obrazowanie tętnic i żył',
      'Aparat z funkcją Dopplera',
      'Badanie wykonuje i opisuje lekarz',
      'Opis wyniku od razu',
      'Bezbolesne, bez promieniowania',
    ],
  },
  'usg/doppler-zyly-konczyn-dolnych': {
    title: 'Dlaczego Doppler żył nóg w Bas Clinic?',
    intro: 'Oceniamy przepływ w żyłach kończyn dolnych metodą Dopplera w kierunku żylaków i zakrzepicy, a obraz omawia lekarz wykonujący badanie.',
    benefits: [
      'Ocena żył kończyn dolnych',
      'Obrazowanie w kierunku żylaków',
      'Aparat z funkcją Dopplera',
      'Badanie wykonuje i opisuje lekarz',
      'Opis wyniku od razu',
      'Bezbolesne, bez promieniowania',
    ],
  },
  'usg/doppler-tetnice-szyjne': {
    title: 'Dlaczego Doppler tętnic szyjnych u nas?',
    intro: 'Oceniamy przepływ i blaszki w tętnicach dogłowowych metodą Dopplera, a obraz oraz opis wyniku przekazuje lekarz wykonujący badanie.',
    benefits: [
      'Ocena tętnic dogłowowych',
      'Obrazowanie blaszek miażdżycowych',
      'Pomiar przepływu Dopplerem',
      'Badanie wykonuje i opisuje lekarz',
      'Bez przygotowania, bezbolesne',
      'Opis wyniku od razu',
    ],
  },
  'usg/serce': {
    title: 'Dlaczego echo serca w Bas Clinic?',
    intro: 'Wykonujemy echokardiografię z oceną kurczliwości i zastawek, a obraz na bieżąco omawia i opisuje lekarz wykonujący badanie.',
    benefits: [
      'Ocena kurczliwości serca',
      'Ocena pracy zastawek',
      'Obrazowanie przepływów Dopplerem',
      'Badanie wykonuje i opisuje lekarz',
      'Bez przygotowania, bezbolesne',
      'Opis wyniku od razu',
    ],
  },
  'usg/pluca': {
    title: 'Dlaczego USG płuc w Bas Clinic?',
    intro: 'Oceniamy obwodowe partie płuc i obecność płynu w jamie opłucnej, a obraz oraz opis wyniku przekazuje lekarz wykonujący badanie.',
    benefits: [
      'Ocena płynu w opłucnej',
      'Obrazowanie obwodowych partii płuc',
      'Badanie w pozycji siedzącej',
      'Badanie wykonuje i opisuje lekarz',
      'Bez promieniowania, bezbolesne',
      'Opis wyniku od razu',
    ],
  },
  'usg/stawy': {
    title: 'Dlaczego USG stawów w Bas Clinic?',
    intro: 'Oceniamy stawy, ścięgna i więzadła, także w ruchu, a obraz na bieżąco omawia i opisuje lekarz wykonujący badanie.',
    benefits: [
      'Ocena kolana, barku i nadgarstka',
      'Ocena ścięgien i więzadeł',
      'Możliwość badania w ruchu',
      'Badanie wykonuje i opisuje lekarz',
      'Bez przygotowania, bezbolesne',
      'Opis wyniku od razu',
    ],
  },
  'usg/staw-skokowy': {
    title: 'Dlaczego USG kostki w Bas Clinic?',
    intro: 'Oceniamy więzadła i ścięgna stawu skokowego, także po skręceniu kostki, a obraz na bieżąco omawia lekarz wykonujący badanie.',
    benefits: [
      'Ocena więzadeł stawu skokowego',
      'Ocena ścięgien okolicy kostki',
      'Pomocne po skręceniu kostki',
      'Badanie wykonuje i opisuje lekarz',
      'Bez przygotowania, bezbolesne',
      'Opis wyniku od razu',
    ],
  },
  'usg/stopa': {
    title: 'Dlaczego USG stopy w Bas Clinic?',
    intro: 'Oceniamy rozcięgno podeszwowe, ścięgna i okolicę nerwiaka Mortona, a obraz na bieżąco omawia i opisuje lekarz wykonujący badanie.',
    benefits: [
      'Ocena rozcięgna podeszwowego',
      'Obrazowanie okolicy nerwiaka Mortona',
      'Ocena ścięgien stopy',
      'Badanie wykonuje i opisuje lekarz',
      'Bez przygotowania, bezbolesne',
      'Opis wyniku od razu',
    ],
  },

  // ————————————————————————————— Wlewy —————————————————————————————
  'wlewy-witaminowe': {
    title: 'Dlaczego wlewy witaminowe w Bas Clinic?',
    intro: 'Skład wlewu dobieramy indywidualnie po konsultacji lekarskiej i podajemy go w komfortowych, sterylnych warunkach.',
    benefits: [
      'Kwalifikacja lekarska przed wlewem',
      'Skład dobierany indywidualnie',
      'Podanie w sterylnych warunkach',
      'Komfortowa, spokojna atmosfera',
      'Opieka podczas wlewu',
      'Dyskretne, wygodne stanowiska',
    ],
  },

  // ———————————————————————— Leczenie uzależnień ————————————————————————
  'leczenie-uzaleznien': {
    title: 'Dlaczego leczenie uzależnień w Bas Clinic?',
    intro: 'Łączymy opiekę lekarską z psychoterapią i prowadzimy Pacjenta przez kolejne etapy — od pierwszej rozmowy po wsparcie dla bliskich, dyskretnie i bez oceniania.',
    benefits: [
      'Opieka lekarza medycyny',
      'Detoksykacja pod nadzorem',
      'Indywidualny plan leczenia',
      'Farmakoterapia i psychoterapia',
      'Wsparcie dla rodzin',
      'Dyskrecja i tajemnica lekarska',
    ],
  },
};

/**
 * Fallback kategorii — używany, gdy dany slug nie ma wpisu w `WHY_US`.
 * Dobór po `heroSubtitle` (ta sama logika co `getTestimonials`).
 */
const CATEGORY_WHY_US = {
  stomatologia: {
    title: 'Dlaczego leczenie zębów w Bas Clinic?',
    intro: 'Każdy plan leczenia tworzymy indywidualnie, dbając o komfort, bezbolesność i przejrzystość kolejnych etapów.',
    benefits: [
      'Indywidualny plan leczenia',
      'Komfortowe, bezbolesne zabiegi',
      'Nowoczesna diagnostyka na miejscu',
      'Przejrzyste etapy i wycena',
      'Wiedza medyczna w trzecim pokoleniu',
      'Spokojna, przyjazna atmosfera',
    ],
  },
  estetyka: {
    title: 'Dlaczego medycyna estetyczna w Bas Clinic?',
    intro: 'Zabiegi wykonuje lekarz, po konsultacji i analizie potrzeb — stawiamy na naturalny efekt i bezpieczeństwo.',
    benefits: [
      'Zabiegi wykonuje lekarz',
      'Konsultacja i dobór zabiegu',
      'Naturalny, subtelny efekt',
      'Sterylne, bezpieczne warunki',
      'Bezpieczne, sprawdzone preparaty',
      'Dyskrecja i komfort',
    ],
  },
  usg: {
    title: 'Dlaczego USG w Bas Clinic?',
    intro: 'Badanie wykonuje i opisuje lekarz na miejscu, a opis wyniku otrzymujesz od razu po badaniu.',
    benefits: [
      'Badanie wykonuje i opisuje lekarz',
      'Opis wyniku od razu',
      'Bezbolesne, bez promieniowania',
      'Prywatnie, bez skierowania',
      'Krótkie terminy badań',
      'Spokojne omówienie obrazu',
    ],
  },
  wlewy: {
    title: 'Dlaczego wlewy witaminowe w Bas Clinic?',
    intro: 'Skład wlewu dobieramy indywidualnie po konsultacji lekarskiej i podajemy go w komfortowych, sterylnych warunkach.',
    benefits: [
      'Kwalifikacja lekarska przed wlewem',
      'Skład dobierany indywidualnie',
      'Podanie w sterylnych warunkach',
      'Komfortowa atmosfera',
      'Opieka podczas wlewu',
      'Dyskretne stanowiska',
    ],
  },
};

/**
 * Zwraca treść „Dlaczego my" dla danej usługi.
 * 1) dokładny wpis per-slug, 2) fallback kategorii po `category` (zwykle
 * `heroSubtitle`), 3) {} → CTASection użyje własnych domyślnych treści.
 */
export function getWhyUs(slug, category = '') {
  if (slug && WHY_US[slug]) return WHY_US[slug];

  const c = (category || '').toLowerCase();
  if (c.includes('ultrasonograf') || c.includes('usg')) return CATEGORY_WHY_US.usg;
  if (c.includes('infuz') || c.includes('wlew')) return CATEGORY_WHY_US.wlewy;
  if (
    c.includes('stomatolog') ||
    c.includes('ortodonc') ||
    c.includes('chirurg') ||
    c.includes('protetyk')
  )
    return CATEGORY_WHY_US.stomatologia;
  if (c.includes('estetyczn') || c.includes('estetyk')) return CATEGORY_WHY_US.estetyka;

  return {};
}
