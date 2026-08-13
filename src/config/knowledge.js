/**
 * „Kompendium wiedzy" — treść sekcji `KnowledgeSection` (edytorialny blok pod hero
 * na podstronach usług + sekcja niżej na stronie głównej).
 *
 * Wzorowane na `whyUs.js`/`testimonials.js`: `getKnowledge(slug, category)`
 * nakłada wpis per-slug (KNOWLEDGE_BY_SLUG — wypełniony dla każdej usługi:
 * proste STRESZCZENIE „Informacji od specjalisty"/EXPERT_INFO tej strony) na
 * bazę kategorii (po `heroSubtitle`, ta sama logika co `getTestimonials`/
 * `getWhyUs`; fallback `KNOWLEDGE.default`). Strona główna używa osobnego
 * `KNOWLEDGE_HOME`.
 *
 * Wpis kategorii: { eyebrow, title, description, points: [{title, text}], image,
 * image2, imageAlt }. Wpis per-slug niesie zwykle tylko title/description/points
 * (eyebrow + zdjęcia dziedziczy po kategorii przez merge). `points` to KRÓTKIE
 * fakty o usłudze (czym jest, jak przebiega, bezpieczeństwo/trwałość, praktyka) —
 * streszczenie EXPERT_INFO, nie ogólny opis kliniki. ⚠️ BEZ obietnic
 * skuteczności, gwarancji efektu i twierdzeń diagnostycznych; BEZ zmyślonych
 * liczb/marek (ryzyko UOKiK/Omnibus + reklama usług medycznych). Zdjęcia to
 * placeholdery (Unsplash, te same kadry co w galerii/CTA) — podmień na realne.
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
    'W Bas Clinic zapewniamy kompleksową opiekę medyczną, łącząc stomatologię, medycynę estetyczną, diagnostykę USG oraz terapie wspierające zdrowie w jednym miejscu. Naszym priorytetem jest indywidualne podejście, precyzyjna diagnostyka i leczenie oparte na aktualnej wiedzy medycznej.',
  points: [
    {
      title: 'Konsultacja',
      text: 'Rozmowa, diagnostyka i dobór najlepszego planu leczenia.',
    },
    {
      title: 'Indywidualny plan',
      text: 'Spersonalizowana terapia z jasno określonym przebiegiem i kosztami.',
    },
    {
      title: 'Bezpieczeństwo',
      text: 'Nowoczesne technologie, sterylne warunki i sprawdzone preparaty.',
    },
    {
      title: 'Opieka po zabiegu',
      text: 'Zalecenia pozabiegowe i wsparcie na każdym etapie terapii.',
    },
  ],
  image: '/uploads/services/kompendium-konsultacja-bas-clinic-wroclaw.webp',
  image2: '/uploads/services/kompendium-wnetrze-bas-clinic-wroclaw.webp',
  imageAlt: 'Konsultacja w Bas Clinic we Wrocławiu — świadoma opieka oparta na wiedzy',
};

// Wpisy per-slug „Kompendium wiedzy” — proste streszczenie sekcji
// „Informacje od specjalisty” (EXPERT_INFO) tej samej strony. Niosą tylko
// tekst (title/description/points); eyebrow + zdjęcia dziedziczą po kategorii
// przez merge w getKnowledge (DRY). Wyjątek: leczenie-uzaleznien ma własny,
// dyskretny kadr. ⚠️ Treść streszcza wyłącznie to, co jest w EXPERT_INFO — bez
// nowych obietnic skuteczności, liczb i twierdzeń diagnostycznych
// (UOKiK/Omnibus + reklama usług medycznych).
const KNOWLEDGE_BY_SLUG = {
  "stomatologia/bonding": {
    title: "Co warto wiedzieć o bondingu zębów",
    description:
      "Bonding to estetyczna odbudowa zęba żywicą kompozytową, którą lekarz modeluje, utwardza światłem i poleruje w jednej wizycie. Wybierany przy drobnych korektach: zamknięciu szpary, odbudowie odprysku czy poprawie kształtu zęba.",
    points: [
      { title: "Wskazania do bondingu zębów", text: "Sprawdza się przy zamykaniu szpary, odbudowie ukruszeń, korekcie kształtu i długości oraz maskowaniu drobnych przebarwień." },
      { title: "Ile trwa i czy boli?", text: "Bonding jednego zęba trwa zwykle od 30 do 60 minut w jednej wizycie, najczęściej bez znieczulenia, bo nie narusza wnętrza zęba." },
      { title: "Czy bonding niszczy zęby?", text: "W klasycznej odmianie nie wymaga szlifowania zdrowego szkliwa, a kompozyt zwykle można później usunąć bez uszkodzenia zęba." },
      { title: "Trwałość i pielęgnacja", text: "Dobrze wykonany bonding służy od kilku do kilkunastu lat; sprzyjają temu higiena, kontrole i ograniczenie barwników w pierwszych dobach." },
    ],
    image: "/uploads/services/bonding-wroclaw-bas-clinic.webp",
    image2: "/uploads/services/bonding-efekt-przed-po-bas-clinic-wroclaw.webp",
    imageAlt: "Zabieg bondingu zębów w gabinecie Bas Clinic we Wrocławiu",
  },
  "medycyna-estetyczna/btl-exion": {
    title: "Co warto wiedzieć o BTL Exion",
    description:
      "BTL Exion to nieinwazyjny zabieg odmładzania i ujędrniania skóry twarzy oraz szyi, który łączy monopolarną radiofrekwencję ze stymulacją ultradźwiękową, docierając do fibroblastów w skórze właściwej.",
    points: [
      { title: "Jak działa BTL Exion?", text: "Urządzenie łączy monopolarną radiofrekwencję ze stymulacją ultradźwiękową, pobudzając fibroblasty w skórze właściwej, a system AI dobiera parametry." },
      { title: "Jak przebiega zabieg Exion", text: "Po oczyszczeniu skóry i nałożeniu żelu lekarz prowadzi głowicę po twarzy lub szyi; zabieg trwa około 30-45 minut." },
      { title: "Rekonwalescencja i zaczerwienienie", text: "Skóra bywa lekko zaczerwieniona, co zwykle ustępuje w ciągu kilku godzin, bez potrzeby długiej rekonwalescencji." },
      { title: "Liczba zabiegów i efekty", text: "Najlepsze rezultaty daje seria 4 zabiegów; ujędrnienie skóry i poprawa owalu twarzy narastają przez kilka miesięcy." },
    ],
  },
  "stomatologia/chirurgia": {
    title: "Co warto wiedzieć o chirurgii stomatologicznej",
    description:
      "Chirurgia stomatologiczna to zabiegi operacyjne w jamie ustnej, wykonywane gdy leczenie zachowawcze nie wystarcza: usuwanie zębów i ósemek, zabiegi okołokorzeniowe, leczenie torbieli oraz przygotowanie kości pod implanty.",
    points: [
      { title: "Zakres chirurgii stomatologicznej", text: "Usuwanie zębów i zatrzymanych ósemek, resekcję wierzchołka korzenia, wyłuszczanie torbieli, plastykę wędzidełka oraz przygotowanie kości pod implanty." },
      { title: "Jak przebiega zabieg chirurgiczny", text: "Zabieg wykonuje się w znieczuleniu miejscowym, a poprzedza go badanie i zdjęcie pantomograficzne, w trudniejszych przypadkach tomografia CBCT." },
      { title: "Przeciwwskazania i możliwe powikłania", text: "Poinformuj chirurga o lekach przeciwzakrzepowych, lekach na osteoporozę i przebytej radioterapii; możliwe są obrzęk, suchy zębodół lub drętwienie." },
      { title: "Gojenie i zalecenia po zabiegu", text: "Pierwszego dnia stosuj zimne okłady, jedz miękkie potrawy i nie pal; szwy zdejmujemy zwykle po 7-10 dniach." },
    ],
  },
  "stomatologia/usuwanie-zebow": {
    title: "Co warto wiedzieć o usuwaniu zębów",
    description:
      "Usuwanie zęba (ekstrakcja) to zabieg chirurgiczny polegający na wyjęciu zęba z zębodołu kostnego. Traktujemy je jako ostateczność, gdy zęba nie da się uratować leczeniem, przy zaawansowanej chorobie przyzębia, problematycznych ósemkach lub ze wskazań ortodontycznych.",
    points: [
      { title: "Ekstrakcja prosta a chirurgiczna", text: "Ekstrakcja prosta dotyczy zęba widocznego w jamie ustnej, a chirurgiczna zębów zatrzymanych lub złamanych i wymaga nacięcia dziąsła oraz szwów." },
      { title: "Czy usuwanie zęba boli?", text: "Zabieg wykonujemy w znieczuleniu miejscowym, więc nie czujesz bólu, a po nim dolegliwości łagodzą leki przeciwbólowe i zimne okłady." },
      { title: "Gojenie zębodołu i suchy zębodół", text: "Skrzep w zębodole chroni ranę, dlatego pierwszego dnia nie płucz energicznie ust ani nie pal, bo grozi to bolesnym suchym zębodołem." },
      { title: "Odbudowa braku po usunięciu zęba", text: "Pusty zębodół z czasem prowadzi do zaniku kości, więc warto zaplanować odbudowę braku, najczęściej implantem albo koroną i mostem protetycznym." },
    ],
  },
  "stomatologia/higienizacja": {
    title: "Co warto wiedzieć o higienizacji zębów",
    description:
      "Higienizacja zębów to profesjonalne oczyszczenie jamy ustnej z osadu, kamienia nazębnego i przebarwień, których nie usuniesz samą szczoteczką w domu. To podstawowy zabieg profilaktyczny dla zdrowia zębów i dziąseł.",
    points: [
      { title: "Cztery etapy higienizacji zębów", text: "Pełna higienizacja łączy skaling, piaskowanie, polerowanie i fluoryzację, a trwa najczęściej około 40-60 minut." },
      { title: "Czy higienizacja zębów boli?", text: "Zabieg jest zwykle niebolesny; przy nadwrażliwości lub stanie zapalnym dziąseł bywa przejściowy dyskomfort, a w razie potrzeby stosuje się znieczulenie." },
      { title: "Jak często powtarzać zabieg?", text: "Standardowo zaleca się wizytę co około pół roku, a co 3-4 miesiące przy chorobie przyzębia, paleniu, cukrzycy, aparacie czy implantach." },
      { title: "Zalecenia, refundacja NFZ i cena", text: "Przez pierwszą dobę warto ograniczyć barwiące pokarmy i palenie; na NFZ refundowany jest tylko sam skaling raz w roku." },
    ],
    image: "/uploads/services/higienizacja-wroclaw-bas-clinic.webp",
    image2: "/uploads/services/higienizacja-gabinet-bas-clinic-wroclaw.webp",
    imageAlt: "Higienizacja zębów w gabinecie Bas Clinic we Wrocławiu",
  },
  "stomatologia/implanty-zebowe": {
    title: "Co warto wiedzieć o implantach zębowych",
    description:
      "Implant zębowy to niewielki wszczep, najczęściej z tytanu, który zastępuje korzeń utraconego zęba. Po wgojeniu w kość staje się stabilnym filarem pod koronę, most lub protezę. Stosuje się go przy braku jednego zęba, kilku zębów lub przy bezzębiu.",
    points: [
      { title: "Wskazania do implantów zębowych", text: "Implant odtwarza brakujący ząb bez szlifowania sąsiednich zębów, a kilka wszczepów może podtrzymać most lub protezę przy większych brakach." },
      { title: "Ile trwa wszczepienie implantu?", text: "Leczenie trwa zwykle kilka miesięcy: po konsultacji i tomografii wszczepia się implant, a jego zrastanie z kością zajmuje od 3 do 6 miesięcy." },
      { title: "Przeciwwskazania do implantacji", text: "Przed zabiegiem trzeba wyleczyć stan zapalny dziąseł i ustabilizować choroby ogólne, a niedobór kości bywa wskazaniem do jej odbudowy." },
      { title: "Pielęgnacja i trwałość implantu", text: "Implant czyści się jak własny ząb, dbając o okolicę dziąsła, a regularne kontrole i higienizacja zmniejszają ryzyko zapalenia wokół wszczepu." },
    ],
    image: "/uploads/services/implanty-zebowe-wroclaw-bas-clinic.webp",
    image2: "/uploads/services/implanty-zebowe-efekt-przed-po-bas-clinic-wroclaw.webp",
    imageAlt: "Zabieg wszczepienia implantów zębowych w Bas Clinic we Wrocławiu",
  },
  "medycyna-estetyczna/konturowanie-zuchwy": {
    title: "Co warto wiedzieć o konturowaniu linii żuchwy i brody",
    description:
      "To zabieg medycyny estetycznej, w którym lekarz podaje twardy, podporowy kwas hialuronowy wzdłuż linii żuchwy i w okolicę brody, by modelować dolną część twarzy. Rozważa się go przy niewyraźnej żuchwie lub cofniętej, zbyt małej brodzie.",
    points: [
      { title: "Wskazania do konturowania żuchwy", text: "Dla osób z niewyraźną linią żuchwy, cofniętą lub zbyt małą brodą oraz asymetrią dolnej części twarzy." },
      { title: "Jak przebiega zabieg krok po kroku", text: "Po konsultacji i znieczuleniu kremem lekarz podaje preparat igłą lub kaniulą i modeluje go ręcznie; trwa to zwykle kilkadziesiąt minut." },
      { title: "Kwas hialuronowy czy botoks na żwacze?", text: "Kwas hialuronowy dodaje objętość przy słabej żuchwie, a toksyna na żwacze zwęża masywną twarz; o wyborze decyduje przyczyna problemu." },
      { title: "Trwałość efektu i ograniczenia", text: "Efekt utrzymuje się kierunkowo do około roku, jest odwracalny hialuronidazą i nie pomaga na podwójny podbródek z nadmiaru tłuszczu." },
    ],
  },
  "medycyna-estetyczna/korekta-usmiechu-dziaslowego": {
    title: "Co warto wiedzieć o korekcie uśmiechu dziąsłowego",
    description:
      "Uśmiech dziąsłowy (gummy smile) to nadmierne odsłonięcie dziąseł nad górnymi zębami podczas uśmiechu. To kwestia estetyczna, a nie choroba; metodę korekty dobiera się do przyczyny.",
    points: [
      { title: "Diagnoza przyczyny uśmiechu dziąsłowego", text: "Najpierw ustala się, dlaczego dziąsła są odsłonięte (warga, dziąsło czy kość), bo od tego zależy, która metoda zadziała." },
      { title: "Kiedy pomaga botoks?", text: "Toksyna botulinowa pomaga, gdy przyczyną jest zbyt mocno unosząca się górna warga; nie zmienia ilości dziąsła ani kości." },
      { title: "Jak przebiega zabieg i jak długo trwa efekt", text: "Zabieg toksyną trwa kilka minut, efekt narasta przez około dwa tygodnie i utrzymuje się kilka miesięcy, więc trzeba go powtarzać." },
      { title: "Bezpieczeństwo i kwalifikacja do zabiegu", text: "To zabieg małoinwazyjny, bez nacięć; toksyna jest lekiem na receptę, a o kwalifikacji i przeciwwskazaniach decyduje lekarz." },
    ],
  },
  "medycyna-estetyczna/laserowe-usuwanie-blizn": {
    title: "Co warto wiedzieć o laserowym usuwaniu blizn i rozstępów",
    description:
      "Laserowe usuwanie blizn i rozstępów to zabiegi, w których wiązka światła pobudza skórę do przebudowy kolagenu i wyrównania zmiany. Celem jest poprawa wyglądu skóry, a nie całkowite usunięcie blizny.",
    points: [
      { title: "Które blizny reagują najlepiej?", text: "Blizny faliste i kraterowe oraz świeże, czerwone rozstępy reagują lepiej, a wąskie blizny szpilkowe i białe rozstępy słabiej." },
      { title: "Ile sesji i kiedy efekt?", text: "To zwykle seria sesji co kilka tygodni, a wygładzenie blizny narasta stopniowo przez wiele tygodni po zabiegu." },
      { title: "Przeciwwskazania do laserowego usuwania blizn", text: "Przeciwwskazania to m.in. ciąża i karmienie, czynne zakażenie lub opryszczka, świeża opalenizna i skłonność do bliznowców, a ocenia je lekarz." },
      { title: "Konsultacja i cena zabiegu", text: "Lekarz ocenia typ i wiek blizny oraz fototyp skóry i ustala cenę po konsultacji, a zabiegi nie są refundowane przez NFZ." },
    ],
  },
  "stomatologia/leczenie-bezzebia": {
    title: "Co warto wiedzieć o leczeniu bezzębia we Wrocławiu",
    description:
      "Leczenie bezzębia to odbudowa brakujących zębów u osób z całkowitym lub częściowym brakiem zębów własnych. Pomaga przywrócić komfort jedzenia i mówienia oraz ograniczyć dalszy zanik kości.",
    points: [
      { title: "Metody odbudowy bezzębia", text: "Brak zębów uzupełnia się protezą całkowitą, protezą na implantach (overdenture) albo stałym mostem na implantach, najczęściej w schemacie All-on-4." },
      { title: "Jak przebiega leczenie bezzębia", text: "Zaczynamy od konsultacji i tomografii oceniającej ilość kości, dobieramy metodę, wszczepiamy implanty i zakładamy docelowe uzupełnienie." },
      { title: "Kiedy potrzebne przygotowanie kości?", text: "Przy małej ilości kości, niewyrównanych chorobach ogólnych czy aktywnej chorobie przyzębia konieczne jest wcześniejsze leczenie lub rozwiązanie bez operacji." },
      { title: "Koszt i refundacja NFZ", text: "Proteza akrylowa jest częściowo refundowana przez NFZ, a rozwiązania na implantach są prywatne; cenę ustalamy po diagnostyce." },
    ],
    image: "/uploads/services/leczenie-bezzebia-wroclaw-bas-clinic.webp",
    image2: "/uploads/services/leczenie-bezzebia-praca-implanty-bas-clinic-wroclaw.webp",
    imageAlt: "Zabieg odbudowy bezzębia na implantach w Bas Clinic we Wrocławiu",
  },
  "medycyna-estetyczna/leczenie-nadpotliwosci": {
    title: "Co warto wiedzieć o leczeniu nadpotliwości toksyną botulinową",
    description:
      "Leczenie nadpotliwości to podanie toksyny botulinowej w skórę pach, dłoni, stóp lub czoła, które na wiele miesięcy wycisza nadmierne pocenie w leczonej okolicy. Wykonuje je lekarz po konsultacji i kwalifikacji.",
    points: [
      { title: "Jak botoks hamuje pocenie", text: "Toksyna botulinowa blokuje w skórze sygnał pobudzający gruczoły potowe, więc w leczonym miejscu pocenie ustaje na wiele miesięcy." },
      { title: "Jak przebiega zabieg na nadpotliwość", text: "Najpierw próba jodowo-skrobiowa mapuje obszar pocenia, potem lekarz wykonuje serię płytkich wkłuć cienką igłą, w kilkanaście minut." },
      { title: "Efekty i czas działania", text: "Pierwsze zmniejszenie pocenia widać po kilku dniach, a działanie na pachy utrzymuje się średnio około 7 miesięcy." },
      { title: "Przeciwwskazania i kwalifikacja", text: "Zabieg jest dobrze tolerowany; podczas konsultacji lekarz wyklucza przeciwwskazania, m.in. ciążę, karmienie i choroby nerwowo-mięśniowe." },
    ],
  },
  "leczenie-uzaleznien": {
    title: "Co warto wiedzieć o leczeniu uzależnień",
    description:
      "Leczenie uzależnień traktuje uzależnienie jako chorobę, a nie wybór. Łączymy opiekę lekarską, farmakoterapię i terapię indywidualną, a bliskim Pacjenta oferujemy psychoedukację i wsparcie — dyskretnie i bez oceniania.",
    points: [
      { title: "Jak wygląda pierwsza wizyta?", text: "Pierwsza wizyta trwa około 60 minut: zbieramy wywiad medyczny, oceniamy stan zdrowia i wspólnie ustalamy indywidualny plan leczenia." },
      { title: "Detoksykacja alkoholowa", text: "Detoks prowadzimy pod nadzorem personelu medycznego, aby bezpiecznie ustabilizować organizm przed dalszym procesem terapeutycznym." },
      { title: "Esperal, leki i terapia", text: "Leki łagodzą objawy odstawienne i głód alkoholowy (m.in. wszywka Esperal), a uzupełnia je terapia indywidualna nad przyczynami choroby." },
      { title: "Dyskrecja i pomoc rodzinie", text: "Na wizytę można przyjść samemu lub z osobą bliską, a rodzinom oferujemy psychoedukację i naukę zdrowej komunikacji." },
    ],
    // Sensytywny temat — własny, dyskretny kadr zamiast domyślnego (estetyka).
    image: IMG.sala,
    image2: IMG.unit,
    imageAlt: 'Komfortowe, dyskretne wnętrze Bas Clinic',
  },
  "stomatologia/leczenie-zebow": {
    title: "Co warto wiedzieć o leczeniu zębów",
    description:
      "Leczenie zachowawcze rozpoznaje i leczy próchnicę oraz odbudowuje uszkodzone zęby bez ich usuwania; jego częścią jest leczenie kanałowe chorej miazgi. Celem jest jak najdłuższe zachowanie własnego zęba.",
    points: [
      { title: "Leczenie próchnicy i wypełnienia", text: "Lekarz usuwa zmienione tkanki, oszczędzając zdrowe, i odbudowuje ząb wypełnieniem kompozytowym, które dobrze imituje naturalny ząb." },
      { title: "Kiedy leczenie kanałowe?", text: "Wykonuje się je przy nieodwracalnym zapaleniu lub martwicy miazgi; w znieczuleniu, w izolacji koferdamem, pozwala zachować ząb zamiast go usuwać." },
      { title: "Wkład i korona po endodoncji", text: "Ząb po leczeniu kanałowym jest bardziej kruchy, dlatego przy dużej utracie tkanek zaleca się wkład i koronę, które chronią go przed złamaniem." },
      { title: "Co wpływa na cenę leczenia?", text: "Koszt zależy od rodzaju zabiegu, liczby kanałów oraz sposobu odbudowy; plan i kosztorys ustala się na konsultacji." },
    ],
    image: "/uploads/services/leczenie-zebow-wroclaw-bas-clinic.webp",
    image2: "/uploads/services/leczenie-zebow-gabinet-bas-clinic-wroclaw.webp",
    imageAlt: "Leczenie zębów w gabinecie Bas Clinic we Wrocławiu",
  },
  "stomatologia/licowki": {
    title: "Co warto wiedzieć o licówkach",
    description:
      "Licówki to cienkie nakładki mocowane na przedniej powierzchni przednich zębów. Pozwalają zmienić jednocześnie kolor, kształt i ustawienie, gdy samo wybielanie nie wystarcza.",
    points: [
      { title: "Wskazania do licówek", text: "Rozważa się je przy trwałych przebarwieniach, szparach między zębami, drobnych złamaniach oraz nieregularnym kształcie pojedynczych zębów." },
      { title: "Porcelana czy kompozyt?", text: "Porcelanowe powstają w laboratorium i służą długo, kompozytowe lekarz modeluje od razu w gabinecie, są tańsze, ale trzymają się krócej." },
      { title: "Czy trzeba szlifować zęby?", text: "Klasyczne licówki wymagają usunięcia cienkiej warstwy szkliwa, a przy zdrowym szkliwie można zastosować licówki bez szlifowania." },
      { title: "Trwałość i pielęgnacja licówek", text: "Licówki porcelanowe służą zwykle od kilku do kilkunastu lat, a ich trwałość wspiera codzienna higiena, kontrole i szyna przy zaciskaniu zębów." },
    ],
    image: "/uploads/services/licowki-wroclaw-bas-clinic.webp",
    image2: "/uploads/services/licowki-dobor-koloru-bas-clinic-wroclaw.webp",
    imageAlt: "Uśmiech pacjentki po założeniu licówek w Bas Clinic we Wrocławiu",
  },
  "medycyna-estetyczna/mezoterapia-iglowa": {
    title: "Co warto wiedzieć o mezoterapii igłowej",
    description:
      "Mezoterapia igłowa to zabieg medycyny estetycznej, w którym lekarz wykonuje serię płytkich mikroiniekcji odżywczo-nawilżającego koktajlu w skórę twarzy, szyi i dekoltu. Celem jest rewitalizacja skóry, a nie dodanie objętości.",
    points: [
      { title: "Na czym polega mezoterapia igłowa", text: "Lekarz płytko wstrzykuje w skórę odżywczo-nawilżający koktajl, najczęściej z kwasem hialuronowym, witaminami i aminokwasami." },
      { title: "Jak przebiega zabieg i ile sesji", text: "Sesja trwa kilkadziesiąt minut po znieczuleniu kremem, a zwykle planuje się serię około trzech zabiegów i sesje podtrzymujące." },
      { title: "Efekty i trwałość mezoterapii igłowej", text: "Efekt buduje się stopniowo i jest przemijający, dlatego potrzebne są zabiegi podtrzymujące; mezoterapia nie zastąpi wypełniaczy." },
      { title: "Przeciwwskazania i kwalifikacja", text: "Zabieg wykonuje lekarz po konsultacji, w warunkach jałowych; przeciwwskazania to m.in. ciąża, zaburzenia krzepnięcia i zakażenie skóry." },
    ],
  },
  "medycyna-estetyczna/mezoterapia-mikroiglowa": {
    title: "Co warto wiedzieć o mezoterapii mikroigłowej",
    description:
      "Mezoterapia mikroigłowa (mikronakłuwanie) to zabieg, w którym sterylne igły wykonują w skórze drobne nakłucia pobudzające naturalną odbudowę kolagenu i elastyny. Poprawia jakość i teksturę skóry oraz zmniejsza widoczność blizn i rozstępów.",
    points: [
      { title: "Na co pomaga mezoterapia mikroigłowa?", text: "Poprawia teksturę, jędrność i koloryt skóry, spłyca drobne zmarszczki oraz zmniejsza widoczność blizn potrądzikowych i rozstępów." },
      { title: "Jak przebiega zabieg i ile sesji?", text: "Zabieg trwa kilkadziesiąt minut na skórze ze znieczuleniem; zwykle planuje się serię około 4-6 sesji co 2-4 tygodnie." },
      { title: "Efekty i trwałość mikroigłowej", text: "Efekty pojawiają się stopniowo i kumulują w trakcie serii; skóra wciąż się starzeje, dlatego zaleca się zabiegi podtrzymujące." },
      { title: "Kwalifikacja i przeciwwskazania", text: "Kwalifikację zawsze przeprowadza lekarz; przeciwwskazania to m.in. czynna infekcja skóry, skłonność do bliznowców, ciąża i karmienie." },
    ],
  },
  "medycyna-estetyczna/mezoterapia-okolicy-oka": {
    title: "Co warto wiedzieć o mezoterapii okolicy oka",
    description:
      "Mezoterapia okolicy oka to seria mikrowstrzyknięć koktajli aktywnych składników w skórę wokół oczu, najcieńszą na całym ciele. Zabieg dla osób, które chcą zadbać o tę wrażliwą okolicę.",
    points: [
      { title: "Skład koktajlu pod oczy", text: "To wstrzyknięcia koktajli ze skoncentrowanym kwasem hialuronowym, peptydami, witaminami C i E oraz czynnikami wzmacniającymi naczynia włosowate." },
      { title: "Jak przebiega mezoterapia oka", text: "Po oczyszczeniu i nałożeniu kremu znieczulającego lekarz wykonuje serię mikrowstrzyknięć wokół oczodołu, zwykle przez około 15-20 minut." },
      { title: "Czy są zaczerwienienia po zabiegu?", text: "Okolica oczu może być lekko zaczerwieniona, co zazwyczaj ustępuje w ciągu kilku godzin." },
      { title: "Skóra wokół oczu — cienkie igły", text: "Skóra wokół oczu jest najcieńsza na całym ciele, dlatego stosuje się ultracienkie igły i preparaty dobrane do tej okolicy." },
    ],
  },
  "medycyna-estetyczna/mezoterapia-skory-glowy": {
    title: "Co warto wiedzieć o mezoterapii skóry głowy",
    description:
      "Mezoterapia skóry głowy to wstrzykiwanie koktajli witaminowych i peptydowych w okolice mieszków włosowych. Niechirurgiczna metoda wspierająca kondycję skóry głowy i włosów u kobiet i mężczyzn.",
    points: [
      { title: "Wskazania: wypadanie włosów", text: "Dla osób z wypadaniem lub przerzedzeniem włosów oraz chcących wzmocnić włosy; stosowana u kobiet i mężczyzn." },
      { title: "Jak przebiega mezoterapia włosów", text: "Lekarz wykonuje serię drobnych wstrzyknięć cienką igłą lub pistoletem; zabieg trwa kilkadziesiąt minut i daje lekki dyskomfort." },
      { title: "Skład koktajli na włosy", text: "Preparaty zawierają peptydy, witaminy z grupy B, cynk, biotynę i aminokwasy, a skład lekarz dobiera indywidualnie." },
      { title: "Liczba zabiegów i efekty", text: "Zalecana jest seria 6-10 zabiegów co 1-2 tygodnie; pierwsze efekty zwykle pojawiają się po kilku tygodniach terapii." },
    ],
  },
  "medycyna-estetyczna/modelowanie-ust": {
    title: "Co warto wiedzieć o modelowaniu ust",
    description:
      "Modelowanie ust to zabieg medycyny estetycznej, w którym lekarz podaje w wargi usieciowany kwas hialuronowy, by zmienić ich objętość, kształt lub obrys. Cel (powiększenie, odbudowa zarysu lub korekta konturu) ustala się na konsultacji.",
    points: [
      { title: "Na czym polega modelowanie ust?", text: "Lekarz wstrzykuje w wargi usieciowany kwas hialuronowy, a ilość i technikę dobiera do anatomii oraz celu: objętości, zarysu lub konturu." },
      { title: "Jak przebiega zabieg (czas, znieczulenie)", text: "Zabieg trwa zwykle od 20 do 40 minut, w znieczuleniu miejscowym, a preparat podaje się igłą lub kaniulą w zaplanowane punkty." },
      { title: "Odwracalność efektu i hialuronidaza", text: "Kwas hialuronowy lekarz może rozpuścić enzymem (hialuronidazą) przy nadkorekcie, guzkach, asymetrii, migracji lub powikłaniu naczyniowym." },
      { title: "Trwałość i przeciwwskazania", text: "Efekt utrzymuje się zwykle od kilku do kilkunastu miesięcy; są przeciwwskazania (m.in. ciąża, opryszczka), a zabieg wykonuje lekarz." },
    ],
  },
  "stomatologia/ortodoncja": {
    title: "Co warto wiedzieć o ortodoncji",
    description:
      "Ortodoncja to dział stomatologii korygujący wady zgryzu i nieprawidłowe ustawienie zębów u dzieci i dorosłych. Prawidłowy zgryz ułatwia gryzienie, mowę oraz utrzymanie higieny jamy ustnej.",
    points: [
      { title: "Co leczy ortodoncja", text: "Koryguje stłoczenia zębów, szpary, tyłozgryz, przodozgryz oraz zgryz otwarty, głęboki i krzyżowy." },
      { title: "Rodzaje aparatów ortodontycznych", text: "Do wyboru są aparaty stałe, przezroczyste alignery i aparaty ruchome; metodę dobiera ortodonta po diagnostyce." },
      { title: "Jak długo trwa leczenie ortodontyczne?", text: "Po diagnostyce zakłada się aparat, prowadzi kontrole i kończy retencją; leczenie trwa zwykle od 1,5 do 3 lat." },
      { title: "Przygotowanie i cena leczenia", text: "Najpierw zaleczamy próchnicę i dbamy o higienę, a koszt zależy od wady i aparatu, więc wycenę podajemy po konsultacji." },
    ],
  },
  "stomatologia/alignery": {
    title: "Co warto wiedzieć o alignerach",
    description:
      "Alignery to seria przezroczystych, zdejmowanych nakładek, które stopniowo przesuwają zęby w zaplanowane położenie. Sprawdzają się przy lekkim i umiarkowanym stłoczeniu, szparach między zębami oraz wybranych wadach zgryzu u dorosłych i młodzieży.",
    points: [
      { title: "Jak działają alignery?", text: "Kolejne nakładki, noszone zwykle 1-2 tygodnie każda, delikatnym naciskiem przesuwają zęby do zaplanowanego ustawienia." },
      { title: "Skan 3D i cyfrowy plan leczenia", text: "Leczenie zaczyna się od skanu wewnątrzustnego i symulacji 3D, a wizyty kontrolne sprawdzają, czy zęby podążają za planem." },
      { title: "Ile godzin nosić nakładki?", text: "Nakładki nosi się 20-22 godziny na dobę, zdejmując je tylko do jedzenia i mycia zębów, bo każda godzina przerwy wydłuża leczenie." },
      { title: "Kwalifikacja i cena leczenia", text: "O wyborze nakładek lub aparatu stałego decyduje diagnostyka u ortodonty, a leczenie jest w pełni prywatne, bez refundacji NFZ." },
    ],
  },
  "stomatologia/aparaty-ruchome": {
    title: "Co warto wiedzieć o aparatach ruchomych",
    description:
      "Aparat ruchomy to zdejmowany aparat ortodontyczny, który pacjent sam wkłada i wyjmuje. Stosuje się go głównie u dzieci w uzębieniu mieszanym (około 6-12 lat) do wczesnego leczenia wad zgryzu oraz do retencji po leczeniu.",
    points: [
      { title: "Aparat ruchomy dla kogo?", text: "Najczęściej dla dzieci w uzębieniu mieszanym; pierwszą wizytę u ortodonty zaleca się już około 7. roku życia." },
      { title: "Możliwości aparatu ruchomego", text: "Poszerza łuk i przechyla pojedyncze zęby; precyzyjne ustawienie i obroty zębów wymagają aparatu stałego." },
      { title: "Ile godzin nosić aparat?", text: "Aparat nosi się zwykle 12-16 godzin na dobę, bo działa tylko w ustach, więc regularne noszenie jest kluczowe." },
      { title: "Aparat ruchomy z NFZ i cena", text: "Dziecku przysługuje bezpłatny aparat ruchomy z NFZ do ukończenia 12. roku życia; aparaty stałe i alignery są prywatne." },
    ],
  },
  "stomatologia/aparaty-stale": {
    title: "Co warto wiedzieć o aparatach stałych",
    description:
      "Aparat stały to zamki przyklejone do zębów i łuk, który delikatnym, stałym naciskiem przesuwa zęby w zaplanowane położenie. Koryguje większość wad zgryzu i nieprawidłowo ustawione zęby u dzieci i dorosłych.",
    points: [
      { title: "Wady zgryzu korygowane aparatem", text: "Pomaga przy stłoczeniach, szparach między zębami oraz zgryzie głębokim, otwartym i krzyżowym, u dzieci i u dorosłych." },
      { title: "Jak długo trwa leczenie?", text: "Leczenie zaczyna się od konsultacji i diagnostyki, trwa średnio około dwóch lat, a wizyty kontrolne odbywają się co 4-6 tygodni." },
      { title: "Czy aparat stały boli?", text: "Samo założenie jest niebolesne, a dyskomfort z nacisku pojawia się po kilku godzinach i ustępuje w ciągu kilku dni." },
      { title: "Higiena i refundacja NFZ", text: "Dokładna higiena ogranicza ryzyko białych plam wokół zamków, a aparat stały nie jest refundowany przez NFZ w żadnym wieku." },
    ],
  },
  "medycyna-estetyczna/osocze-bogatoplytkowe": {
    title: "Co warto wiedzieć o osoczu bogatopłytkowym (PRP)",
    description:
      "Osocze bogatopłytkowe (PRP) to preparat z własnej krwi pacjenta, bogaty w płytki i czynniki wzrostu. Stosuje się je, by wspierać regenerację skóry oraz przy wypadaniu włosów.",
    points: [
      { title: "Osocze a wypełniacze – różnica", text: "PRP pobudza tkanki do regeneracji, ale nie dodaje objętości ani nie modeluje rysów twarzy tak, jak wypełniacze." },
      { title: "Zastosowania osocza PRP", text: "Stosuje się je głównie przy łysieniu androgenowym oraz jako dodatek do zabiegów na blizny, łącznie z laserem lub mikronakłuwaniem." },
      { title: "Jak przebiega zabieg PRP?", text: "Pobiera się krew, odwirowuje ją i podaje osocze techniką mezoterapii igłowej; efekt jest stopniowy i wymaga serii zabiegów." },
      { title: "Przeciwwskazania i konsultacja", text: "Choć to własna krew, zabieg ma przeciwwskazania, dlatego o jego zasadności decyduje konsultacja lekarska." },
    ],
  },
  "medycyna-estetyczna/pilingi-medyczne": {
    title: "Co warto wiedzieć o pilingach medycznych",
    description:
      "Peeling medyczny to kontrolowane złuszczanie skóry kwasami, które wykonuje lekarz po ocenie skóry i fototypu. Stosuje się go przy trądziku, przebarwieniach, fotostarzeniu, drobnych zmarszczkach i nierównej teksturze skóry.",
    points: [
      { title: "Peeling medyczny tylko u lekarza", text: "Peeling medyczny używa kwasów o wyższym stężeniu niż preparaty kosmetyczne i wymaga oceny skóry oraz fototypu przed zabiegiem." },
      { title: "Ile zabiegów w serii?", text: "Poprawa narasta stopniowo w serii kilku zabiegów w odstępach kilkutygodniowych, a schemat lekarz ustala indywidualnie." },
      { title: "Pielęgnacja i ochrona SPF po zabiegu", text: "Po zabiegu skóra jest wrażliwa na słońce, dlatego konieczny jest wysoki filtr SPF, a mocniejsze peelingi planuje się jesienią i zimą." },
      { title: "Przeciwwskazania i cena pilingu", text: "Wśród przeciwwskazań są m.in. opryszczka, stany zapalne skóry, świeża opalenizna, ciąża i karmienie; cenę ustala się po konsultacji." },
    ],
  },
  "medycyna-estetyczna/programy-zabiegowe": {
    title: "Co warto wiedzieć o programach zabiegowych",
    description:
      "Programy zabiegowe to zaawansowane protokoły medycyny estetycznej łączące różne metody dla synergicznego efektu odmłodzenia. Każdy program lekarz projektuje indywidualnie na podstawie analizy stanu skóry pacjenta.",
    points: [
      { title: "Czym są programy zabiegowe?", text: "To zaawansowane protokoły łączące różne metody medycyny estetycznej dla synergicznego efektu odmłodzenia." },
      { title: "Jakie zabiegi obejmuje program?", text: "Program może łączyć mezoterapię, stymulatory tkankowe, toksynę botulinową, wypełniacze i zabiegi aparatowe." },
      { title: "Indywidualny plan leczenia", text: "Każdy program lekarz projektuje na podstawie dokładnej analizy stanu skóry i potrzeb pacjenta." },
      { title: "Jak przebiega program zabiegowy", text: "Zaczyna się od konsultacji i oceny skóry, potem lekarz układa plan zabiegów i monitoruje postępy." },
    ],
  },
  "stomatologia/protetyka-korony": {
    title: "Co warto wiedzieć o koronie protetycznej",
    description:
      "Korona protetyczna to stałe uzupełnienie pokrywające zniszczony lub osłabiony ząb o zdrowym korzeniu, które przywraca mu kształt, funkcję żucia oraz wygląd.",
    points: [
      { title: "Wskazania do korony protetycznej", text: "Gdy zęba nie da się trwale odbudować wypełnieniem: przy dużym ubytku, złamaniu, silnym starciu lub po leczeniu kanałowym." },
      { title: "Cyrkon, pełna ceramika czy metaloceramika?", text: "W strefie uśmiechu sprawdza się pełna ceramika, na zęby boczne, mosty i przy bruksizmie cyrkon, a metaloceramika jest uniwersalna." },
      { title: "Jak przebiega zakładanie korony", text: "Zwykle dwie wizyty: ząb szlifujemy w znieczuleniu miejscowym i zabezpieczamy koroną tymczasową, a docelową cementujemy po wykonaniu." },
      { title: "Trwałość i pielęgnacja korony", text: "Korona służy wiele lat przy dbałości jak o własny ząb: szczotkowanie, czyszczenie przy brzegu oraz kontrole i higienizacja." },
    ],
    image: "/uploads/services/protetyka-korony-wroclaw-bas-clinic.webp",
    image2: "/uploads/services/protetyka-korony-gabinet-bas-clinic-wroclaw.webp",
    imageAlt: "Planowanie korony protetycznej na modelu w Bas Clinic we Wrocławiu",
  },
  "medycyna-estetyczna/przeszczep-wlosow": {
    title: "Co warto wiedzieć o przeszczepie włosów",
    description:
      "Przeszczep włosów to zabieg chirurgiczny, w którym własne mieszki z odpornej na łysienie potylicy i boków głowy przenosi się w miejsce przerzedzenia. Dla osób z ustabilizowanym łysieniem i wystarczającą rezerwą dawczą.",
    points: [
      { title: "FUE, DHI czy FUT?", text: "Stosuje się FUE, DHI i FUT (paskową) - przy doświadczonym lekarzu dają podobny efekt, a metodę dobiera się indywidualnie." },
      { title: "Jak przebiega przeszczep i czy boli?", text: "Zabieg trwa jeden dzień w znieczuleniu miejscowym i jest zwykle mało bolesny, a dolegliwości po nim ustępują w ciągu kilku dni." },
      { title: "Kiedy widać efekt przeszczepu?", text: "Przeszczepione włosy najpierw wypadają, nowy wzrost zaczyna się około 3-4 miesiąca, a pełny efekt ocenia się po roku do półtora roku." },
      { title: "Kwalifikacja i cena", text: "O kwalifikacji, doborze metody i przeciwwskazaniach decyduje lekarz po konsultacji z trichoskopią; cenę ustala się po ocenie liczby graftów." },
    ],
  },
  "medycyna-estetyczna/redukcja-cieni": {
    title: "Co warto wiedzieć o redukcji cieni pod oczami",
    description:
      "Redukcja cieni pod oczami to zestaw zabiegów medycyny estetycznej zmniejszających ciemne zabarwienie, zapadnięcia i woreczki pod oczami. Metodę dobiera lekarz w zależności od przyczyny problemu.",
    points: [
      { title: "Na czym polega redukcja cieni", text: "To wypełnienie doliny łez kwasem hialuronowym, mezoterapia wzmacniająca naczynia, biostymulatory lub połączenie tych metod." },
      { title: "Jak przebiega zabieg krok po kroku", text: "Po konsultacji lekarz znieczula okolicę i kaniulą podaje kwas hialuronowy w dolinę łez; zabieg trwa 15-20 minut." },
      { title: "Jak dobiera się metodę?", text: "Lekarz najpierw ustala przyczynę cieni, bo od niej zależy, czy lepsze będzie wypełnienie, mezoterapia czy ich połączenie." },
      { title: "Mezoterapia okolicy pod oczami", text: "Mezoterapię wykonuje się jako serię mikrowstrzyknięć preparatu nawilżająco-wzmacniającego w okolicę pod oczami." },
    ],
  },
  "medycyna-estetyczna/redukcja-drobnych-zmarszczek-ha": {
    title: "Co warto wiedzieć o redukcji drobnych zmarszczek szyi i dekoltu kwasem hialuronowym",
    description:
      "Zabieg iniekcyjny: lekki kwas hialuronowy podaje się płytko, śródskórnie w cienką skórę szyi i dekoltu. Nie buduje objętości, lecz nawilża skórę, poprawia jej napięcie i wygładza drobne linie, które starzeją się tu wcześniej niż twarz.",
    points: [
      { title: "Zmarszczki szyi i dekoltu", text: "Sprawdza się przy poziomych zmarszczkach szyi (pierścienie Wenus), pionowych zmarszczkach dekoltu oraz suchej, mało napiętej skórze tej okolicy." },
      { title: "Jak przebiega zabieg HA", text: "Po konsultacji lekarz znieczula skórę kremem i wykonuje serię płytkich mikrowstrzyknięć; samo podanie trwa zwykle około 30 minut." },
      { title: "Efekty i ograniczenia kwasu hialuronowego", text: "Pełny efekt daje seria zabiegów i jest czasowy; nie usuwa znacznej wiotkości ani głębokich bruzd, które wymagają innych metod." },
      { title: "Przeciwwskazania i cena", text: "Przeciwwskazania (m.in. ciążę, czynne zakażenie w miejscu wkłucia) ocenia lekarz; zabieg nie jest refundowany przez NFZ, ceny są w cenniku." },
    ],
  },
  "medycyna-estetyczna/redukcja-glebokich-zmarszczek": {
    title: "Co warto wiedzieć o redukcji głębokich zmarszczek wokół oczu kwasem hialuronowym",
    description:
      "Zabieg polega na precyzyjnym wstrzyknięciu kwasu hialuronowego w głębokie zmarszczki wokół oczu, gdzie skóra jest bardzo cienka. Preparat wypełnia zagłębienia, nawilża skórę od wewnątrz i wygładza nawet głębokie zmarszczki.",
    points: [
      { title: "Zmarszczki i kurze łapki wokół oczu", text: "Skierowany jest na głębokie kurze łapki, zmarszczki pod oczami i bruzdy wokół oczu, które kwas hialuronowy wypełnia i wygładza." },
      { title: "Jak przebiega redukcja zmarszczek", text: "Lekarz nakłada krem znieczulający, a po około 20 minutach wykonuje precyzyjne iniekcje cienką igłą lub kaniulą; całość trwa 20-30 minut." },
      { title: "Bezpieczeństwo i dobór preparatu", text: "Delikatną okolicę oczu powinien prowadzić doświadczony lekarz, używając preparatu dedykowanego do tego obszaru o odpowiedniej gęstości." },
      { title: "Po zabiegu i trwałość efektu", text: "Mogą pojawić się niewielkie obrzęki ustępujące w 1-2 dni, a efekt utrzymuje się zwykle od 6 do 12 miesięcy i zabieg można powtarzać." },
    ],
  },
  "medycyna-estetyczna/redukcja-zmarszczek-botox": {
    title: "Co warto wiedzieć o redukcji zmarszczek toksyną botulinową (botoksie)",
    description:
      "Botoks to potoczna nazwa zabiegu z toksyną botulinową typu A, która czasowo rozluźnia mięśnie mimiczne, dzięki czemu skóra nad nimi się wygładza. Stosuje się go do zmarszczek powstających przy ruchu twarzy.",
    points: [
      { title: "Jakie zmarszczki redukuje botoks?", text: "Działa na zmarszczki mimiczne: lwią zmarszczkę między brwiami, poziome zmarszczki czoła i kurze łapki przy oczach." },
      { title: "Jak przebiega zabieg", text: "Po konsultacji i ocenie mimiki lekarz podaje preparat cienką igłą w kilku punktach; samo podanie trwa krótko." },
      { title: "Po jakim czasie efekty botoksu?", text: "Pierwsze efekty pojawiają się w ciągu kilku dni, pełny do około miesiąca, a utrzymuje się zwykle do około czterech miesięcy." },
      { title: "Przeciwwskazania i bezpieczeństwo", text: "Najczęściej ból głowy i drobne zasinienia; nie wykonuje się w ciąży, podczas karmienia ani przy chorobach nerwowo-mięśniowych, a kwalifikuje lekarz." },
    ],
  },
  "medycyna-estetyczna/redukcja-zmarszczek-ha": {
    title: "Co warto wiedzieć o redukcji zmarszczek kwasem hialuronowym",
    description:
      "Kwas hialuronowy wygładza zmarszczki statyczne i bruzdy widoczne w spoczynku, które powstały z utraty objętości twarzy. Nie rozluźnia mięśni, więc nie usuwa zmarszczek mimicznych. Zabieg planuje i wykonuje lekarz po konsultacji.",
    points: [
      { title: "Zmarszczki statyczne czy mimiczne?", text: "Kwas hialuronowy uzupełnia objętość i wygładza bruzdy widoczne w spoczynku, ale nie rozluźnia mięśni, więc zmarszczek mimicznych nie usunie." },
      { title: "Okolice korekcji kwasem hialuronowym", text: "Najlepiej udokumentowanym wskazaniem jest bruzda nosowo-wargowa; koryguje się też linie marionetki i przywraca objętość policzków." },
      { title: "Jak przebiega redukcja zmarszczek", text: "Po konsultacji skórę oczyszcza się i znieczula, a lekarz podaje preparat igłą lub kaniulą; możliwe są przemijające obrzęki i zasinienia." },
      { title: "Jak długo utrzymuje się efekt?", text: "Korekcja nie jest trwała: utrzymuje się od kilku do kilkunastu miesięcy, wymaga ponawiania i nie jest refundowana przez NFZ." },
    ],
  },
  "medycyna-estetyczna/regeneracja-konturu-oka": {
    title: "Co warto wiedzieć o regeneracji konturu oka",
    description:
      "Regeneracja konturu oka to zabieg medycyny estetycznej skupiony na odnowie delikatnych tkanek wokół oczu. Łączy biostymulatory, peptydy naprawcze i kwas hialuronowy, aby zadbać o strukturę i elastyczność skóry okolicy oczodołu.",
    points: [
      { title: "Na czym polega regeneracja konturu oka", text: "To zabieg na okolicę oczu łączący biostymulatory, peptydy naprawcze i kwas hialuronowy w celu odnowy tkanek wokół oczodołu." },
      { title: "Jak preparaty odnawiają skórę wokół oczu", text: "Preparaty wspierają odbudowę struktury kolagenowej, elastyczność skóry i wzmocnienie ścian naczyń w okolicy oczu." },
      { title: "Jak przebiega zabieg krok po kroku", text: "Po konsultacji i znieczuleniu miejscowym lekarz wprowadza preparaty iniekcyjnie wokół oka; zabieg trwa 20-30 minut." },
      { title: "Kiedy widać efekty regeneracji?", text: "Efekty narastają stopniowo w ciągu kilku tygodni po zabiegu, a nie od razu." },
    ],
  },
  "medycyna-estetyczna/regeneratory-komorkowe": {
    title: "Co warto wiedzieć o regeneratorach komórkowych",
    description:
      "Regeneratory komórkowe to grupa zabiegów medycyny estetycznej, które mają pobudzić skórę do uruchomienia własnych procesów naprawczych. Rozważa się je głównie przy skórze dojrzałej, zmęczonej, z drobnymi zmarszczkami i gorszym nawilżeniem.",
    points: [
      { title: "Regeneratory komórkowe — rodzaje", text: "Pod tą nazwą mieści się kilka metod: polinukleotydy, egzosomy, osocze bogatopłytkowe (PRP) i czynniki wzrostu, a metodę dobiera lekarz." },
      { title: "Czym różnią się od wypełniaczy?", text: "Nie dodają objętości jak kwas hialuronowy, tylko dają skórze bodziec do własnej przebudowy, dlatego efekt rozwija się stopniowo." },
      { title: "Jak przebiega zabieg i ile sesji", text: "Zwykle to seria mikrowstrzyknięć ze znieczuleniem; po wkłuciu może pojawić się przemijające zaczerwienienie lub zasinienie." },
      { title: "Przeciwwskazania i cena zabiegu", text: "To procedura lekarska bez refundacji NFZ; o przeciwwskazaniach i cenie decyduje lekarz na konsultacji kwalifikacyjnej." },
    ],
  },
  "medycyna-estetyczna/skin-booster": {
    title: "Co warto wiedzieć o skin boosterze (mezoterapii głębokiej)",
    description:
      "Skin booster to seria śródskórnych iniekcji kwasu hialuronowego, najczęściej niesieciowanego lub słabo usieciowanego. Poprawia nawilżenie i jakość skóry, a nie modeluje rysów jak wypełniacz.",
    points: [
      { title: "Czym jest skin booster?", text: "Kwas hialuronowy podany w skórę właściwą wiąże wodę i wspiera jej strukturę; to zabieg na jakość skóry, a nie wypełniacz dodający objętość." },
      { title: "Efekty skin boostera", text: "Najlepiej udokumentowana jest poprawa nawilżenia i rozświetlenia skóry; poprawy elastyczności badania nie potwierdziły jako istotnej. Efekt jest przejściowy." },
      { title: "Jak przebiega zabieg i seria", text: "Lekarz podaje preparat techniką drobnych mikrodepozytów, zwykle w serii do trzech zabiegów co 3-4 tygodnie; zabieg trwa 30-40 minut." },
      { title: "Skutki uboczne i przeciwwskazania", text: "Po zabiegu możliwe są przemijające grudki, zaczerwienienie i siniaki. O kwalifikacji i przeciwwskazaniach decyduje lekarz podczas konsultacji." },
    ],
  },
  "stomatologia/dziecieca": {
    title: "Co warto wiedzieć o stomatologii dziecięcej",
    description:
      "Stomatologia dziecięca (pedodoncja) to profilaktyka i leczenie zębów u dzieci i młodzieży, od pierwszego ząbka mlecznego po uzębienie stałe. Metody dobiera się do wieku i poziomu współpracy dziecka.",
    points: [
      { title: "Pierwsza wizyta dziecka u dentysty", text: "Warto przyjść po pojawieniu się pierwszego ząbka, najpóźniej około pierwszych urodzin; bywa to wizyta adaptacyjna, bez wiercenia." },
      { title: "Profilaktyka próchnicy u dzieci", text: "Podstawą jest szczotkowanie pastą z fluorem dopasowaną do wieku, lakierowanie i lakowanie bruzd oraz ograniczenie cukrów w diecie." },
      { title: "Czy leczy się zęby mleczne?", text: "Mleczaki się leczy, bo służą dziecku wiele lat i trzymają miejsce dla zębów stałych, a nieleczona próchnica boli i grozi infekcją." },
      { title: "Sedacja podtlenkiem azotu u dzieci", text: "Zwykle wystarcza znieczulenie miejscowe; sedację wziewną podtlenkiem azotu stosuje się po kwalifikacji, głównie od około 4. roku życia." },
    ],
    image: "/uploads/services/dziecieca-wroclaw-bas-clinic.webp",
    image2: "/uploads/services/dziecieca-gabinet-bas-clinic-wroclaw.webp",
    imageAlt: "Dziecko podczas wizyty w gabinecie stomatologii dziecięcej Bas Clinic we Wrocławiu",
  },
  "stomatologia/estetyczna": {
    title: "Co warto wiedzieć o stomatologii estetycznej",
    description:
      "Stomatologia estetyczna poprawia wygląd uśmiechu: kolor, kształt, proporcje i ustawienie zębów. Dotyczy przebarwień, szczerb, szpar, startych zębów i drobnych nierówności.",
    points: [
      { title: "Rodzaje zabiegów estetycznych", text: "Najczęściej stosuje się wybielanie, bonding kompozytowy, licówki oraz odbudowę zębów i korony pełnoceramiczne." },
      { title: "Jak dobrać metodę leczenia?", text: "Metoda zależy od problemu, oczekiwanej trwałości i akceptowanej inwazyjności, zwykle zaczynając od najmniej inwazyjnej." },
      { title: "Zdrowe zęby i dziąsła jako podstawa", text: "Zabiegi planuje się po wyleczeniu próchnicy i opanowaniu stanu dziąseł, a przy bruksizmie zaleca się szynę ochronną." },
      { title: "Cena i trwałość efektu", text: "Koszt ustala się indywidualnie po konsultacji, a efekt nie jest dożywotni i wymaga higieny oraz regularnych kontroli." },
    ],
  },
  "stomatologia/odbudowa-zebow": {
    title: "Co warto wiedzieć o odbudowie zębów",
    description:
      "Odbudowa zębów to odtworzenie kształtu, funkcji i wyglądu zęba, który stracił znaczną część twardych tkanek wskutek próchnicy, urazu, złamania lub starcia. Dotyczy rozległych uszkodzeń, także zębów po leczeniu kanałowym, gdy zwykła plomba już nie wystarcza.",
    points: [
      { title: "Wskazania do odbudowy zęba", text: "Stosujemy ją przy rozległej próchnicy, złamaniu, startych zębach oraz zębach po leczeniu kanałowym, gdy zwykła plomba nie wystarcza." },
      { title: "Metoda bezpośrednia i pośrednia", text: "Ząb odbudowujemy bezpośrednio kompozytem na jednej wizycie albo pośrednio wkładem, nakładem lub endokoroną na dwóch wizytach." },
      { title: "Jak przebiega odbudowa zęba", text: "Zabieg wykonujemy w znieczuleniu miejscowym; po nim może wystąpić przejściowa nadwrażliwość na ciepło i zimno." },
      { title: "Trwałość i pielęgnacja odbudowy", text: "Dobrze wykonana odbudowa służy wiele lat, a jej trwałość wydłuża higiena, kontrole oraz szyna ochronna przy bruksizmie." },
    ],
    image: "/uploads/services/odbudowa-zebow-wroclaw-bas-clinic.webp",
    image2: "/uploads/services/odbudowa-zebow-gabinet-bas-clinic-wroclaw.webp",
    imageAlt: "Odbudowa zęba podczas zabiegu w gabinecie Bas Clinic we Wrocławiu",
  },
  "stomatologia/wybielanie-zebow": {
    title: "Co warto wiedzieć o wybielaniu zębów",
    description:
      "Profesjonalne wybielanie zębów to kontrolowany zabieg, w którym nadtlenek rozjaśnia naturalny odcień zębów o kilka stopni. W odróżnieniu od higienizacji zmienia barwę samej twardej tkanki zęba, a nie tylko usuwa osad z powierzchni.",
    points: [
      { title: "Wybielanie gabinetowe czy nakładkowe?", text: "Zęby wybiela się w gabinecie (szybki efekt po jednej wizycie) albo nakładkami w domu pod nadzorem stomatologa (efekt wolniejszy, ale zwykle trwalszy)." },
      { title: "Jak przebiega wybielanie zębów", text: "Najpierw badanie i higienizacja, potem ochrona dziąseł i nałożenie żelu z nadtlenkiem; sesja gabinetowa trwa zwykle od około 45 do 90 minut." },
      { title: "Bezpieczeństwo i nadwrażliwość zębów", text: "Pod nadzorem stomatologa zabieg nie uszkadza szkliwa; najczęściej pojawia się przejściowa nadwrażliwość zębów ustępująca w ciągu kilku dni." },
      { title: "Trwałość efektu i ograniczenia", text: "Wybielają się tylko zęby naturalne, nie korony ani licówki; efekt trwa od kilkunastu miesięcy do kilku lat, a biała dieta i higienizacja go przedłużają." },
    ],
    image: "/uploads/services/wybielanie-zebow-wroclaw-bas-clinic.webp",
    image2: "/uploads/services/wybielanie-zebow-lampa-led-bas-clinic-wroclaw.webp",
    imageAlt: "Wybielanie zębów lampą LED w gabinecie Bas Clinic we Wrocławiu",
  },
  "medycyna-estetyczna/stymulatory-tkankowe": {
    title: "Co warto wiedzieć o stymulatorach tkankowych",
    description:
      "Stymulatory tkankowe, czyli biostymulatory kolagenu, to preparaty podawane w iniekcji, które pobudzają skórę do wytwarzania własnego kolagenu. Poprawiają jej jakość, gęstość i napięcie, a nie punktowy kontur. Zabieg wykonuje lekarz po konsultacji.",
    points: [
      { title: "Stymulator a wypełniacz HA", text: "Nie wypełniają tkanki od razu jak wypełniacz HA, lecz pobudzają skórę do odbudowy własnego kolagenu, poprawiając jej jakość, a nie objętość." },
      { title: "Kiedy widać efekt i ile zabiegów?", text: "Efekt narasta stopniowo przez tygodnie do kilku miesięcy i najpełniej widać go po serii kilku zabiegów, dlatego potrzeba cierpliwości." },
      { title: "Powikłania: guzki i odczyny", text: "Najczęstsze odczyny jak zaczerwienienie czy obrzęk są łagodne i przemijające; rzadszym powikłaniem są guzki, zwłaszcza po PLLA i hydroksyapatycie wapnia." },
      { title: "Kwalifikacja, NFZ i cena", text: "Zabieg wykonuje lekarz po konsultacji kwalifikacyjnej; nie jest refundowany przez NFZ, a jego cenę ustala się indywidualnie i podaje w cenniku." },
    ],
  },
  "medycyna-estetyczna/terapia-egzosomami": {
    title: "Co warto wiedzieć o terapii egzosomami",
    description:
      "Egzosomy to gotowy preparat z maleńkich pęcherzyków, którymi komórki przekazują sobie sygnały. W medycynie estetycznej mają wspierać odnowę skóry, zwykle jako uzupełnienie zabiegu, a nie samodzielna terapia.",
    points: [
      { title: "Jak przebiega zabieg z egzosomami", text: "Najpierw wykonujemy mikronakłuwanie lub laser, a potem na przygotowaną skórę nakładamy preparat z egzosomami, by łatwiej w nią wniknął." },
      { title: "Tylko miejscowo, bez wstrzykiwania", text: "W Bas Clinic stosujemy egzosomy wyłącznie na skórę, bo nie ma preparatu dopuszczonego do wstrzykiwania, a po iniekcjach opisywano poważne powikłania." },
      { title: "Skuteczność egzosomów w badaniach", text: "Badania u ludzi opisują niewielką poprawę jakości skóry, ale są małe i krótkie, dlatego egzosomy traktujemy jako metodę obiecującą i wspomagającą." },
      { title: "Kwalifikacja, cena i przeciwwskazania", text: "Zabieg poprzedza konsultacja lekarska, nie obejmuje go NFZ, a cenę ustalamy indywidualnie; wykluczają go m.in. ciąża, czynne zakażenie i alergia na składniki." },
    ],
  },
  "usg/doppler": {
    title: "Co warto wiedzieć o USG Doppler naczyń",
    description:
      "USG Doppler naczyń to nieinwazyjne badanie ultrasonograficzne, które obrazuje przepływ krwi w tętnicach i żyłach. Wykonuje się je przy objawach zaburzeń krążenia oraz w profilaktyce naczyniowej.",
    points: [
      { title: "Co wykrywa USG Doppler?", text: "Pokazuje kierunek i prędkość przepływu krwi, zwężenia naczyń, blaszki miażdżycowe oraz cechy zakrzepicy żył głębokich." },
      { title: "Jak przebiega badanie dopplerowskie", text: "Lekarz przesuwa głowicę po skórze pokrytej żelem, a na ekranie widać kolorowy obraz przepływu; badanie jest bezbolesne i bez promieniowania." },
      { title: "Przygotowanie do USG Doppler", text: "Zwykle nie trzeba się przygotowywać, ale przy naczyniach jamy brzusznej czasem zaleca się badanie na czczo." },
      { title: "Wynik i konsultacja lekarska", text: "Wynik interpretuje lekarz w kontekście objawów, a przy podejrzeniu zakrzepicy potrzebna jest pilna konsultacja." },
    ],
  },
  "usg/doppler-tetnice-szyjne": {
    title: "Co warto wiedzieć o USG Doppler tętnic szyjnych",
    description:
      "To badanie ultrasonograficzne oceniające przepływ krwi w tętnicach szyjnych i kręgowych, czyli naczyniach dogłowowych doprowadzających krew do mózgu. Łączy obraz naczynia z oceną prędkości i kierunku przepływu.",
    points: [
      { title: "Co wykrywa USG Doppler tętnic szyjnych", text: "Uwidacznia blaszki miażdżycowe, zwężenia i zmiany przepływu w naczyniach dogłowowych oraz grubość ściany tętnicy." },
      { title: "Wskazania do badania szyjnego Dopplera", text: "Głównie dla osób z czynnikami ryzyka miażdżycy: nadciśnieniem, cukrzycą, wysokim cholesterolem, paleniem lub zawrotami głowy." },
      { title: "Jak przebiega badanie głowicą", text: "Wykonuje się je głowicą po obu stronach szyi w pozycji leżącej, z żelem na skórze; jest bezbolesne i bez promieniowania." },
      { title: "Przygotowanie i odbiór wyniku", text: "Nie trzeba być na czczo ani mieć skierowania; warto odsłonić szyję, zdjąć biżuterię i zabrać wcześniejszą dokumentację, a wynik opisuje lekarz." },
    ],
  },
  "usg/doppler-zyly-konczyn-dolnych": {
    title: "Co warto wiedzieć o USG Doppler żył kończyn dolnych",
    description:
      "To bezbolesne, nieinwazyjne badanie przepływu krwi w żyłach nóg metodą dopplerowską, bez promieniowania jonizującego. Ocenia drożność żył i pracę zastawek przy objawach chorób żylnych lub podejrzeniu zakrzepicy.",
    points: [
      { title: "Co wykrywa USG Doppler żył nóg", text: "Pomaga uwidocznić niewydolność żylną i refluks, żylaki oraz cechy zakrzepicy żył głębokich i zmiany pozakrzepowe." },
      { title: "Objawy, które są wskazaniem", text: "Przy obrzękach i ciężkości nóg, bólu łydek, widocznych żylakach, zmianach skórnych podudzi lub nagłym obrzęku jednej kończyny." },
      { title: "Jak przebiega badanie Dopplera", text: "Wykonuje się je w pozycji leżącej i stojącej, z żelem na skórze i głowicą przesuwaną wzdłuż żył nóg." },
      { title: "Przygotowanie i odbiór wyniku", text: "Nie wymaga postu ani odstawiania leków; warto mieć wygodny strój, a wynik zawsze interpretuje lekarz." },
    ],
  },
  "usg/ginekologiczne": {
    title: "Co warto wiedzieć o USG ginekologicznym",
    description:
      "USG ginekologiczne to nieinwazyjne badanie narządu rodnego - macicy, jajników i przydatków - z użyciem fal ultradźwiękowych, bez promieniowania. Obrazuje narządy miednicy mniejszej i opisuje widoczne zmiany, ale samo nie stawia rozpoznania.",
    points: [
      { title: "Trzy metody dostępu USG ginekologicznego", text: "Badanie wykonuje się dopochwowo (najdokładniejszy obraz), przezbrzusznie lub przezodbytniczo - metodę dobiera lekarz do wskazań i komfortu pacjentki." },
      { title: "Jak przygotować pęcherz do badania", text: "Do badania przezbrzusznego trzeba mieć pełny pęcherz (wypić ok. 1-1,5 litra wody), a do transwaginalnego pęcherz opróżniony." },
      { title: "Wskazania do USG ginekologicznego", text: "Wskazaniem są m.in. nieregularne lub bolesne miesiączki, krwawienia po menopauzie, ból podbrzusza, kontrola mięśniaków i torbieli oraz starania o dziecko." },
      { title: "Czy badanie jest bezpieczne?", text: "Badanie jest bezpieczne i powtarzalne, także w ciąży; nie rozpoznaje samo nowotworu, a wynik zawsze interpretuje lekarz." },
    ],
  },
  "usg/jadra": {
    title: "Co warto wiedzieć o USG jąder we Wrocławiu",
    description:
      "USG jąder to nieinwazyjne badanie moszny, w którym ocenia się oba jądra, najądrza i powrózki nasienne. Zwykle uzupełnia się je oceną przepływu krwi (Doppler), a wykonuje przy dolegliwościach lub nieprawidłowościach w obrębie moszny.",
    points: [
      { title: "Co wykrywa USG jąder", text: "Uwidacznia guzki i zmiany ogniskowe, torbiele, wodniak jądra, żylaki powrózka oraz cechy stanów zapalnych i skutki urazu moszny." },
      { title: "Jak przebiega badanie moszny", text: "Lekarz przykłada do skóry moszny głowicę z żelem; badanie jest bezbolesne, bez znieczulenia i nakłuć, i trwa zwykle kilkanaście minut." },
      { title: "Ograniczenia USG jąder", text: "Badanie ocenia cechy zmiany, ale nie rozpoznaje nowotworu ani nie ocenia płodności; charakter zmiany ustala lekarz w dalszej diagnostyce." },
      { title: "Przygotowanie i cena", text: "Nie trzeba być na czczo; zadbaj o higienę i uprzedź o podejrzeniu żylaków. Badanie jest prywatne, bez skierowania; cenę potwierdzisz w cenniku." },
    ],
  },
  "usg/jama-brzuszna": {
    title: "Co warto wiedzieć o USG jamy brzusznej",
    description:
      "USG jamy brzusznej to nieinwazyjne badanie, które za pomocą fal ultradźwiękowych pokazuje narządy wnętrza brzucha na żywo. Ma charakter przeglądowy, więc często jest pierwszym badaniem przy niejasnych dolegliwościach brzucha.",
    points: [
      { title: "Jakie narządy ocenia USG brzucha", text: "Lekarz ogląda jednocześnie wątrobę, pęcherzyk żółciowy, trzustkę, śledzionę, nerki, aortę brzuszną i pęcherz moczowy." },
      { title: "Jak przebiega badanie i ile trwa", text: "Leżysz, lekarz nanosi żel i przesuwa głowicę po brzuchu; badanie jest bezbolesne i trwa zwykle około 15 do 20 minut." },
      { title: "Bezpieczeństwo USG jamy brzusznej", text: "Nie używa promieniowania, więc można je powtarzać, także u dzieci i w ciąży; obraz mogą utrudniać gazy jelitowe i tkanka tłuszczowa." },
      { title: "Przygotowanie: czy trzeba być na czczo?", text: "Najlepiej zgłosić się na czczo, zwykle około 6 godzin bez jedzenia; we Wrocławiu wykonujemy badanie prywatnie, bez skierowania." },
    ],
  },
  "usg/nerki": {
    title: "Co warto wiedzieć o USG nerek",
    description:
      "USG nerek to bezbolesne, nieinwazyjne badanie ultradźwiękami, które ocenia budowę nerek i górnych dróg moczowych. Działa bez promieniowania i jest zwykle pierwszym krokiem przy dolegliwościach układu moczowego.",
    points: [
      { title: "Co wykrywa USG nerek", text: "Uwidacznia kamicę, poszerzenie układu kielichowo-miedniczkowego, torbiele oraz zmiany ogniskowe w nerkach." },
      { title: "Jak przebiega badanie", text: "Lekarz przesuwa głowicę z żelem po skórze brzucha i okolicy lędźwiowej; badanie jest bezbolesne, bez nakłuć i trwa kilkanaście minut." },
      { title: "Bezpieczeństwo i ograniczenia metody", text: "Nie używa promieniowania ani kontrastu i można je powtarzać, także u dzieci i kobiet w ciąży, ale prawidłowy wynik nie wyklucza patologii." },
      { title: "Przygotowanie i skierowanie na USG nerek", text: "Skierowanie nie jest wymagane; gdy oceniany jest pęcherz, wypij około 0,5-1 l wody godzinę wcześniej i nie oddawaj moczu." },
    ],
  },
  "usg/piersi": {
    title: "Co warto wiedzieć o USG piersi",
    description:
      "USG piersi to bezbolesne, nieinwazyjne badanie gruczołów piersiowych falami ultradźwiękowymi, bez promieniowania jonizującego. Obejmuje oba gruczoły oraz węzły chłonne pachowe i jest bezpieczne także w ciąży i w okresie laktacji.",
    points: [
      { title: "Co ocenia USG piersi", text: "USG ocenia oba gruczoły piersiowe i węzły chłonne pachowe, opisuje cechy zmian i odróżnia torbiele od guzków litych." },
      { title: "Wynik w skali BI-RADS", text: "Badanie kończy się kategorią BI-RADS, która wskazuje dalsze postępowanie; to nie rozpoznanie, a interpretacja należy do lekarza." },
      { title: "USG piersi a mammografia", text: "USG i mammografia uzupełniają się: USG nie zastępuje mammografii ani biopsji i słabo uwidacznia mikrozwapnienia." },
      { title: "Przygotowanie i przebieg badania", text: "Badanie nie wymaga przygotowania i trwa kilkanaście minut; u miesiączkujących wygodniej jest między 1. a 10. dniem cyklu." },
    ],
  },
  "usg/pluca": {
    title: "Co warto wiedzieć o USG płuc",
    description:
      "USG płuc to bezpieczne badanie ultrasonograficzne klatki piersiowej, które ocenia opłucną oraz obwodowe, przylegające do ściany klatki piersiowej partie płuc. Nie naraża pacjenta na promieniowanie.",
    points: [
      { title: "Co wykrywa USG płuc?", text: "Ocenia płyn w jamie opłucnej i jego ilość, cechy zagęszczeń zapalnych w obwodowych partiach płuc oraz cechy mogące wskazywać na odmę opłucnową." },
      { title: "Jak przebiega badanie", text: "Lekarz nakłada żel i przesuwa głowicę po klatce piersiowej; badanie jest bezbolesne, w pozycji siedzącej lub leżącej, trwa kilkanaście minut." },
      { title: "Bezpieczne, bez promieniowania", text: "Wykorzystuje fale ultradźwiękowe, nie promieniowanie, dlatego można je powtarzać i wykonywać u kobiet w ciąży oraz u dzieci." },
      { title: "Przygotowanie i ograniczenia USG płuc", text: "Nie trzeba być na czczo; badanie ocenia głównie struktury powierzchowne, nie zastępuje RTG ani tomografii klatki piersiowej." },
    ],
  },
  "usg/prostata": {
    title: "Co warto wiedzieć o USG prostaty",
    description:
      "USG prostaty to nieinwazyjne badanie ultrasonograficzne gruczołu krokowego, w Bas Clinic wykonywane metodą przezbrzuszną. Pomaga ocenić objętość stercza u mężczyzn z dolegliwościami przy oddawaniu moczu.",
    points: [
      { title: "Co ocenia USG prostaty?", text: "Ocenia przede wszystkim objętość gruczołu krokowego oraz ilość moczu zalegającego w pęcherzu po jego opróżnieniu." },
      { title: "Przygotowanie: pełny pęcherz", text: "Przyjdź z pełnym pęcherzem: wypij około 0,5-1 litra wody godzinę przed badaniem i nie oddawaj moczu." },
      { title: "Jak przebiega badanie przezbrzuszne", text: "Lekarz przykłada do skóry brzucha głowicę z żelem; badanie jest bezbolesne, bez znieczulenia i trwa kilkanaście minut." },
      { title: "Czy USG wykryje raka prostaty?", text: "Badanie przezbrzuszne nie służy do rozpoznawania raka prostaty; podstawą są tu oznaczenie PSA i badanie per rectum u lekarza." },
    ],
  },
  "usg/serce": {
    title: "Co warto wiedzieć o USG serca (echokardiografii)",
    description:
      "USG serca, czyli echokardiografia, to bezbolesne badanie ultrasonograficzne obrazujące budowę i pracę serca w czasie rzeczywistym. Wykonuje i opisuje je lekarz, zwykle kardiolog.",
    points: [
      { title: "Co ocenia echo serca?", text: "Echokardiografia pokazuje pracę i budowę serca: czynność lewej komory z frakcją wyrzutową, kurczliwość ścian, zastawki oraz wymiary jam." },
      { title: "Jak przebiega USG serca", text: "Pacjent leży zwykle na lewym boku, a lekarz przykłada do klatki piersiowej głowicę z żelem; badanie trwa od kilkunastu do około trzydziestu minut." },
      { title: "Czy echo serca jest bezpieczne?", text: "Echo serca jest bezbolesne i korzysta z ultradźwięków, a nie promieniowania, dlatego można je powtarzać oraz wykonywać u dzieci i kobiet w ciąży." },
      { title: "Przygotowanie i umówienie terminu", text: "Nie trzeba być na czczo, stałe leki przyjmuje się normalnie; echo serca to badanie planowe, a termin ustala się telefonicznie." },
    ],
  },
  "usg/slinianki": {
    title: "Co warto wiedzieć o USG ślinianek we Wrocławiu",
    description:
      "USG ślinianek to bezbolesne badanie ultradźwiękowe gruczołów ślinowych, bez promieniowania jonizującego. Ocenia ślinianki przyuszne i podżuchwowe, gdy pojawia się ból, obrzęk lub wyczuwalny guzek w tej okolicy.",
    points: [
      { title: "Co wykrywa USG ślinianek", text: "Uwidacznia najczęstsze nieprawidłowości ślinianek: kamicę, stany zapalne, ropnie, torbiele oraz zmiany ogniskowe." },
      { title: "Wskazania do badania", text: "Gdy okolica ślinianki jest obrzęknięta lub bolesna, zwłaszcza podczas jedzenia, albo gdy wyczuwasz guzek czy zgrubienie." },
      { title: "Jak przebiega USG ślinianek", text: "Leżysz, a lekarz przesuwa głowicę po skórze pokrytej żelem; badanie jest bezbolesne i trwa zwykle kilkanaście minut." },
      { title: "Bez skierowania i przygotowania", text: "Badanie nie wymaga przygotowania ani skierowania; wykonujemy je prywatnie we Wrocławiu, a wynik interpretuje lekarz." },
    ],
  },
  "usg/staw-skokowy": {
    title: "Co warto wiedzieć o USG stawu skokowego",
    description:
      "USG stawu skokowego to bezbolesne badanie ultrasonograficzne okolicy kostki, które ocenia więzadła, ścięgna, wysięk w stawie oraz tkanki okołostawowe, między innymi po skręceniu kostki.",
    points: [
      { title: "Co ocenia USG stawu skokowego", text: "Pokazuje tkanki miękkie kostki: więzadła i ścięgna (np. Achillesa), wysięk w stawie oraz zmiany pourazowe i obrzęk." },
      { title: "USG kostki po skręceniu", text: "Najczęściej wykonuje się je po skręceniu kostki oraz przy bólu, obrzęku, niestabilności stawu i nawracających urazach." },
      { title: "USG a RTG i rezonans", text: "USG ocenia głównie tkanki miękkie i nie zastępuje RTG ani rezonansu; podejrzenie złamania potwierdza zdjęcie RTG." },
      { title: "Przygotowanie i termin badania", text: "Prywatnie nie wymaga przygotowania ani skierowania; wystarczy wygodny strój, a termin ustala się telefonicznie." },
    ],
  },
  "usg/stawy": {
    title: "Co warto wiedzieć o USG stawów (narządu ruchu)",
    description:
      "USG stawów to bezbolesne badanie ultrasonograficzne narządu ruchu. Pozwala ocenić sam staw oraz tkanki wokół niego: ścięgna, więzadła, mięśnie i kaletki maziowe, bez użycia promieniowania.",
    points: [
      { title: "Które stawy bada USG?", text: "Najczęściej ocenia się kolano, bark i nadgarstek, a także staw skokowy, łokieć, biodro oraz drobne stawy ręki i stopy." },
      { title: "Wskazania do USG stawów", text: "Powodem badania bywa ból stawu, jego obrzęk lub ograniczona ruchomość, a także ocena po urazie i przy podejrzeniu stanu zapalnego." },
      { title: "Jak przebiega badanie", text: "Na skórę nakłada się żel, a lekarz przesuwa głowicę nad badaną okolicą, oceniając staw w spoczynku i podczas ruchu." },
      { title: "Przygotowanie i termin badania", text: "Badanie prywatne nie wymaga przygotowania ani skierowania; wystarczy wygodny strój, a termin ustala się telefonicznie." },
    ],
  },
  "usg/stopa": {
    title: "Co warto wiedzieć o USG stopy",
    description:
      "USG stopy to bezbolesne badanie ultrasonograficzne narządu ruchu, które ocenia tkanki miękkie stopy: rozcięgno podeszwowe, ścięgna, drobne stawy i przestrzenie międzypalcowe. Pomaga w diagnostyce bólu pięty i przodostopia, a wynik interpretuje lekarz.",
    points: [
      { title: "Co ocenia USG stopy?", text: "USG stopy obrazuje tkanki miękkie i pomaga ocenić rozcięgno podeszwowe, ścięgna oraz przestrzenie międzypalcowe przodostopia." },
      { title: "Wskazania do badania", text: "Wskazaniem jest przewlekły lub nawracający ból stopy, zwłaszcza pięty i przodostopia, a także obrzęk lub wyczuwalny guzek." },
      { title: "Bezpieczeństwo i ograniczenia USG", text: "Badanie jest nieinwazyjne i nie wykorzystuje promieniowania, ale nie zastępuje RTG ani rezonansu, a wynik interpretuje lekarz." },
      { title: "Jak przebiega badanie stopy", text: "Nie wymaga przygotowania; lekarz przesuwa głowicę po skórze z żelem, oceniając stopę w spoczynku i podczas ruchu." },
    ],
  },
  "usg/szyja": {
    title: "Co warto wiedzieć o USG szyi",
    description:
      "USG szyi to bezbolesne, nieinwazyjne badanie ultradźwiękowe tkanek miękkich szyi, bez promieniowania jonizującego. W jednym podejściu lekarz przeglądowo ocenia węzły chłonne, ślinianki, tarczycę i pozostałe struktury tej okolicy.",
    points: [
      { title: "Co obejmuje USG szyi?", text: "To badanie przeglądowe - w jednym podejściu lekarz ocenia węzły chłonne, ślinianki, tarczycę i tkanki miękkie szyi." },
      { title: "Wskazania do badania", text: "Warto je wykonać przy wyczuwalnym guzku, powiększonych węzłach, obrzęku ślinianek czy kontroli wcześniej opisanych zmian." },
      { title: "Jak przebiega USG szyi", text: "Leżysz z lekko odchyloną głową, lekarz nanosi żel i przesuwa głowicę po szyi; badanie trwa zwykle kilkanaście minut." },
      { title: "Bezpieczeństwo i ograniczenia", text: "Jest bezpieczne i powtarzalne, bez typowych przeciwwskazań; opisuje cechy zmian i nie zastępuje konsultacji lekarskiej." },
    ],
  },
  "usg/tarczyca": {
    title: "Co warto wiedzieć o USG tarczycy",
    description:
      "USG tarczycy to bezbolesne, nieinwazyjne badanie gruczołu tarczowego falami ultradźwiękowymi, bez promieniowania jonizującego. Ocenia oba płaty i cieśń, mierzy objętość gruczołu oraz uwidacznia guzki i zmiany struktury.",
    points: [
      { title: "Co wykrywa USG tarczycy", text: "Uwidacznia guzki, wole i zmiany struktury, mierzy objętość i echogeniczność tarczycy, a w opcji Doppler ocenia jej unaczynienie." },
      { title: "Jak przebiega badanie", text: "Nie wymaga bycia na czczo; leży się z lekko odchyloną głową, na szyję nakłada się żel, a całość trwa zwykle kilkanaście minut i nie boli." },
      { title: "Bezpieczeństwo i skala EU-TIRADS", text: "Jest bezpieczne i można je powtarzać, także w ciąży przy wskazaniach; nie rozpoznaje raka, a porządkuje ryzyko guzka w skali EU-TIRADS." },
      { title: "Wskazania do USG tarczycy", text: "Wskazaniem jest wyczuwalny guzek, powiększenie szyi lub nieprawidłowe wyniki hormonów, a badanie jest prywatne, więc skierowanie nie jest potrzebne." },
    ],
  },
  "usg/tkanki-miekkie": {
    title: "Co warto wiedzieć o USG tkanek miękkich",
    description:
      "USG tkanek miękkich to bezbolesne badanie ultrasonografem skóry, tkanki podskórnej oraz płycej położonych mięśni, powięzi i ścięgien. Pozwala opisać guzki i inne zmiany powierzchowne bez naruszania ciągłości skóry.",
    points: [
      { title: "Co wykrywa USG tkanek miękkich", text: "Uwidacznia zmiany pod skórą, takie jak guzki, tłuszczaki, kaszaki, torbiele, krwiaki, ropnie czy ciała obce, oraz opisuje ich położenie i wielkość." },
      { title: "Jak przebiega badanie", text: "Na skórę nakłada się żel, a lekarz przesuwa głowicę nad badaną okolicą; badanie jest bezbolesne, bez promieniowania i trwa zwykle kilkanaście minut." },
      { title: "Czy USG rozpoznaje nowotwór?", text: "USG ocenia jedynie cechy zmiany i może wskazać potrzebę dalszej diagnostyki, np. biopsji; nie zastępuje konsultacji lekarskiej." },
      { title: "Przygotowanie i skierowanie", text: "Nie trzeba być na czczo ani odstawiać leków, badanie wykonuje się prywatnie bez skierowania; warto wskazać lekarzowi dokładne miejsce zmiany." },
    ],
  },
  "usg/watroba": {
    title: "Co warto wiedzieć o USG wątroby",
    description:
      "USG wątroby to celowane badanie ultrasonograficzne, które ocenia miąższ wątroby oraz sąsiadujące drogi żółciowe i pęcherzyk żółciowy. Najczęściej kieruje się na nie osoby z nieprawidłowymi próbami wątrobowymi lub do kontroli wcześniej wykrytych zmian.",
    points: [
      { title: "Co wykrywa USG wątroby?", text: "Uwidacznia stłuszczenie i zmiany ogniskowe, takie jak torbiele czy naczyniaki, a także drogi żółciowe i pęcherzyk żółciowy." },
      { title: "Wskazania do badania", text: "Najczęstszym powodem są podwyższone enzymy wątrobowe, ból w prawym podżebrzu lub kontrola opisanych wcześniej zmian; o wskazaniach decyduje lekarz." },
      { title: "Przygotowanie i przebieg USG wątroby", text: "Na badanie zgłasza się na czczo (około 6-8 godzin bez jedzenia); jest bezbolesne, trwa kilkanaście minut, a opis lekarz sporządza zwykle od razu." },
      { title: "Bezpieczeństwo i ograniczenia metody", text: "USG nie używa promieniowania i nie ma typowych przeciwwskazań, ale nie stawia samo rozpoznania, więc wykryte zmiany czasem wymagają dalszej diagnostyki." },
    ],
  },
  "usg/wezly-chlonne": {
    title: "Co warto wiedzieć o USG węzłów chłonnych",
    description:
      "USG węzłów chłonnych to bezbolesne badanie ultrasonografem, które ocenia węzły na szyi, w pachach i pachwinach - ich wielkość, kształt, budowę i unaczynienie. Wykonuje się je najczęściej, gdy wyczuwasz powiększony węzeł.",
    points: [
      { title: "Co ocenia USG węzłów chłonnych", text: "Lekarz sprawdza wielkość, kształt, granice i wnętrze węzła oraz jego unaczynienie w opcji Dopplera, oceniając wszystkie cechy łącznie." },
      { title: "Jak przebiega badanie", text: "Lekarz nakłada żel i przesuwa głowicę po skórze szyi, pachy lub pachwiny; badanie jednej okolicy trwa zwykle kilkanaście minut i nie wymaga przygotowań." },
      { title: "Wskazania do badania", text: "Warto wykonać badanie przy wyczuwalnym powiększonym węźle lub gdy powiększenie utrzymuje się orientacyjnie ponad 3-4 tygodnie." },
      { title: "Czego USG nie rozstrzyga", text: "Badanie jest bezpieczne i można je powtarzać, ale nie rozpoznaje nowotworu - wskazuje jedynie, czy potrzebna jest dalsza diagnostyka, którą ocenia lekarz." },
    ],
  },
  "wlewy-witaminowe": {
    title: "Co warto wiedzieć o wlewach witaminowych",
    description:
      "Wlewy witaminowe to terapia infuzyjna, w której witaminy, minerały i aminokwasy podaje się dożylnie. Metoda dla osób zmęczonych, w okresie rekonwalescencji oraz dbających o samopoczucie i odporność.",
    points: [
      { title: "Jak działa wlew dożylny", text: "Składniki trafiają wprost do krwioobiegu, z pominięciem układu pokarmowego, dzięki czemu wchłaniają się niemal w całości." },
      { title: "Skład kroplówki witaminowej", text: "Kompozycja jest dobierana indywidualnie i może obejmować witaminę C, witaminy z grupy B, magnez, cynk, selen, glutation oraz aminokwasy." },
      { title: "Wskazania do wlewów witaminowych", text: "Wlewy bywają polecane przy chronicznym zmęczeniu, obniżonej odporności, w rekonwalescencji oraz przy intensywnym wysiłku fizycznym." },
      { title: "Ile trwa pojedynczy wlew?", text: "Pojedynczy wlew trwa zwykle od 30 do 60 minut, a czas zależy od rodzaju i objętości podawanych składników." },
    ],
  },
  "medycyna-estetyczna/wypelniacze-ha": {
    title: "Co warto wiedzieć o wypełniaczach na bazie kwasu hialuronowego",
    description:
      "Wypełniacz na bazie kwasu hialuronowego to żel, który lekarz podaje w skórę, aby przywrócić utraconą objętość i wygładzić zagłębienia. Efekt jest widoczny od razu, ale czasowy. To zabieg modelujący rysy twarzy.",
    points: [
      { title: "Co poprawiają wypełniacze HA?", text: "Przywraca objętość i wygładza bruzdy oraz dolinę łez, ale nie napnie wiotkiej skóry i nie zastąpi zabiegu chirurgicznego." },
      { title: "Jak przebiega podanie wypełniacza", text: "Zaczyna się od konsultacji i kwalifikacji, a żel lekarz podaje cienką igłą lub kaniulą; większość preparatów zawiera lidokainę ograniczającą ból." },
      { title: "Trwałość efektu i odwracalność", text: "Efekt utrzymuje się zwykle od kilku do kilkunastu miesięcy, a w razie potrzeby żel można rozpuścić enzymem hialuronidazą." },
      { title: "Bezpieczeństwo zabiegu i cena", text: "Zabieg powinien wykonywać lekarz znający anatomię twarzy; jest w całości prywatny, bez refundacji NFZ, a cenę ustala się po konsultacji." },
    ],
  },
};

// Baza kategorii po `category` (zwykle `heroSubtitle`) — TA SAMA logika co
// getWhyUs/getTestimonials. Dostarcza eyebrow + zdjęcia, na które nakładamy
// wpis per-slug.
function resolveCategory(category = '') {
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

/**
 * Zwraca treść „Kompendium wiedzy" dla danej usługi. Bazą jest treść kategorii
 * (eyebrow + zdjęcia), na którą NAKŁADAMY wpis per-slug z KNOWLEDGE_BY_SLUG —
 * `title`/`description`/`points` streszczające „Informacje od specjalisty" tej
 * konkretnej strony. Dzięki temu wpisy per-slug niosą sam tekst, a zdjęcia
 * dziedziczą po kategorii (DRY); wpis może nadpisać też zdjęcia (np. własny kadr).
 */
export function getKnowledge(slug, category = '') {
  const base = resolveCategory(category);
  const override = slug && KNOWLEDGE_BY_SLUG[slug];
  return override ? { ...base, ...override } : base;
}
