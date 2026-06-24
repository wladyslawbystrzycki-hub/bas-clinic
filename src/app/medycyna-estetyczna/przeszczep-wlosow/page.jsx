import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Przeszczep włosów Wrocław - FUE, DHI, cena',
  description:
    'Przeszczep włosów we Wrocławiu: metody FUE, DHI i FUT, przebieg, gojenie i efekty. O kwalifikacji i doborze metody decyduje konsultacja z trichoskopią.',
  path: '/medycyna-estetyczna/przeszczep-wlosow/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Przeszczep włosów' },
];

const FAQ = [
  {
    question: 'Ile procent przeszczepionych włosów odrasta?',
    answer:
      'Po przeszczepie włosów odrasta zwykle ponad 90% przeniesionych mieszków, gdy zabieg wykonuje doświadczony zespół (badanie FUE w łysieniu androgenowym, Zhang i wsp., 2024). O wyniku decyduje przeżywalność graftów: niska transekcja, krótki czas poza ciałem i ochrona przed wysuszeniem, a nie sama nazwa metody. Pełny efekt ocenia się po 12-18 miesiącach.',
  },
  {
    question: 'Czym różni się metoda FUE od FUT i DHI?',
    answer:
      'FUE pobiera pojedyncze grafty punchem i pozostawia rozproszone, punktowe blizenki. FUT to pasek skóry z potylicy dzielony pod mikroskopem, z jedną blizną liniową i większą liczbą graftów na sesję. DHI wszczepia grafty implanterem Choi jednym ruchem. Przy doświadczonym lekarzu przeżywalność jest porównywalna (Queen i Avram, 2025), więc metodę dobiera się indywidualnie.',
  },
  {
    question: 'Czy przeszczep włosów zatrzymuje dalsze łysienie?',
    answer:
      'Nie. Przeszczep włosów przenosi mieszki odporne na DHT, ale nie leczy łysienia androgenowego, więc włosy rodzime wokół przeszczepu mogą dalej się przerzedzać. Dlatego po zabiegu zwykle zaleca się terapię podtrzymującą (finasteryd, minoksydyl), która chroni włosy własne. Bez niej z czasem może powstać efekt nierównej gęstości.',
  },
  {
    question: 'Jakie są przeciwwskazania do przeszczepu włosów?',
    answer:
      'Bezwzględne przeciwwskazania to rozlane łysienie z wyczerpaną strefą dawczą (DUPA), czynne łysienie bliznowaciejące i plackowate oraz dysmorfofobia (BDD). Względne to niestabilne, szybko postępujące łysienie, bardzo młody wiek i niewielka utrata gęstości. Kwalifikację ustala lekarz po trichoskopii i ocenie obszaru dawczego (True, 2021).',
  },
  {
    question: 'Kiedy widać pełny efekt po przeszczepie włosów?',
    answer:
      'Po przeszczepie włosów przeszczepione słupki zwykle wypadają w 2-8 tygodniu (shock loss), a nowy wzrost zaczyna się około 3-4 miesiąca. Około 60-70% docelowej gęstości widać w 6-8 miesiącu, a pełny efekt ocenia się po 12-18 miesiącach. Linia czołowa dojrzewa szybciej, a szczyt głowy wolniej.',
  },
  {
    question: 'Gdzie we Wrocławiu skonsultować przeszczep włosów?',
    answer: `Przeszczep włosów we Wrocławiu zaczyna się od konsultacji lekarskiej z oceną skóry głowy i obszaru dawczego. W Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}, ustalamy kwalifikację, dobór metody i plan zabiegu indywidualnie. Rejestracja telefoniczna: ${CLINIC.phone}, w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest przeszczep włosów i dla kogo jest przeznaczony',
    tocLabel: 'Co to jest',
    content: `<p>Przeszczep włosów to zabieg chirurgiczny, w którym mieszki włosowe pobiera się z odpornej na łysienie strefy dawczej na potylicy i bokach głowy, a następnie umieszcza w okolicy przerzedzenia. Przeniesione mieszki zachowują swoje pierwotne właściwości i rosną w nowym miejscu trwale.</p>
<p>Działa to dzięki <strong>zasadzie dominacji obszaru dawczego</strong> (donor dominance), opisanej przez Orentreicha w 1959 roku: mieszki z potylicy mają niższą wrażliwość na dihydrotestosteron (DHT) i pozostają oporne na proces łysienia także po relokacji. To dlatego pas włosów na potylicy zwykle przetrwa, nawet gdy szczyt głowy łysieje.</p>
<p>Z tej samej zasady wynika najważniejsze ograniczenie zabiegu. Przeszczep <strong>koryguje deficyt kosmetyczny</strong>, ale nie zatrzymuje choroby, która doprowadziła do łysienia, więc rodzime włosy wokół przeszczepu mogą dalej się przerzedzać. Dobrym kandydatem jest osoba z ustabilizowaną utratą włosów, wystarczającą rezerwą dawczą, zdrową skórą głowy i realistycznymi oczekiwaniami (True, 2021). Metodę dobiera lekarz po konsultacji i trichoskopii, w ramach <a href="/medycyna-estetyczna/">medycyny estetycznej</a>.</p>`,
  },
  {
    title: 'Łysienie androgenowe: przyczyny, skale zaawansowania i kwalifikacja',
    tocLabel: 'Łysienie i kwalifikacja',
    content: `<p>Łysienie androgenowe (AGA) to najczęstsza przyczyna utraty włosów. Według wytycznej S3 EDF/EADV dotyczy ono nawet 80% mężczyzn rasy kaukaskiej i do 42% kobiet w ciągu życia (Kanti i wsp., 2018).</p>
<p>Mechanizm jest hormonalno-genetyczny. Enzym 5-alfa-reduktaza typu 2 przekształca testosteron w DHT, który skraca fazę wzrostu włosa (anagen) i napędza <strong>miniaturyzację mieszka</strong>: włosy stają się coraz cieńsze i krótsze, aż zanikają. Stosunek włosów w fazie wzrostu do spoczynku spada z około 12:1 do 5:1. Predyspozycja jest w dużej mierze dziedziczna (szacunkowo około 80%), a wariant genu receptora androgenowego na chromosomie X tłumaczy znaczną jej część (Ntshingila i wsp., 2023).</p>
<h3>Skale zaawansowania łysienia</h3>
<p>Stopień łysienia opisuje się zwalidowanymi skalami, co pozwala oszacować potrzebną liczbę graftów i ocenić kwalifikację. U mężczyzn stosuje się 7-stopniową skalę Norwooda-Hamiltona, a u kobiet skalę Ludwig (3 stopnie) lub Sinclair (5 stopni). Skala Norwooda nie nadaje się do oceny łysienia u kobiet (Gupta i Mysore, 2016).</p>
<h3>Kto jest dobrym kandydatem</h3>
<ul>
<li>osoby z <strong>ustabilizowanym</strong> łysieniem i wyraźnym, dobrze odżywionym obszarem dawczym</li>
<li>realistyczne oczekiwania co do gęstości i liczby możliwych do przeszczepienia graftów</li>
<li>ostrożność u osób bardzo młodych (18-24 lata), u których kierunek dalszej utraty włosów jest trudny do przewidzenia</li>
<li>u kobiet wymagana jest staranna diagnostyka, ponieważ rozlane przerzedzenie częściej oznacza inną przyczynę niż klasyczne AGA</li>
</ul>`,
  },
  {
    title: 'Metody przeszczepu włosów: FUE, DHI i FUT (strip)',
    tocLabel: 'Metody FUE, DHI, FUT',
    content: `<p>Stosuje się trzy główne metody pobierania i wszczepiania mieszków: FUE, DHI i FUT. Różnią się sposobem pobrania graftów i rodzajem blizny, ale przy doświadczonym operatorze dają porównywalną przeżywalność, więc o wyniku decyduje technika i kwalifikacja, a nie sama nazwa metody (Queen i Avram, 2025).</p>
<p><strong>FUE</strong> (follicular unit excision) polega na pobieraniu pojedynczych jednostek mieszkowych cienkim punchem o średnicy 0,8-1,0 mm. Nie pozostawia blizny liniowej, a jedynie rozproszone, drobne blizenki punktowe. <strong>DHI</strong> (direct hair implantation) to odmiana, w której graft osadza się implanterem typu Choi: urządzenie tworzy mikrokanał i umieszcza mieszek jednym ruchem, co daje kontrolę nad kątem i głębokością wszczepienia (Choi i Kim, 1992). <strong>FUT</strong> (follicular unit transplantation, metoda paskowa) polega na pobraniu paska skóry z potylicy i podzieleniu go na grafty pod mikroskopem; pozostawia jedną bliznę liniową, ale pozwala uzyskać dużą liczbę graftów w jednej sesji (Khanna, 2021).</p>
<h3>Porównanie metod</h3>
<table>
<tr><th>Cecha</th><th>FUE</th><th>DHI</th><th>FUT (strip)</th></tr>
<tr><td>Sposób pobrania</td><td>pojedyncze grafty punchem 0,8-1,0 mm</td><td>pojedyncze grafty jak w FUE</td><td>pasek skóry dzielony pod mikroskopem</td></tr>
<tr><td>Wszczepianie</td><td>w uprzednio nacięte miejsca biorcze</td><td>implanterem Choi, nacięcie i osadzenie jednym ruchem</td><td>w uprzednio nacięte miejsca biorcze</td></tr>
<tr><td>Blizna</td><td>rozproszone, drobne blizenki punktowe</td><td>punktowe, jak w FUE</td><td>jedna blizna liniowa na potylicy</td></tr>
<tr><td>Golenie obszaru dawczego</td><td>zwykle konieczne</td><td>zwykle konieczne</td><td>nie jest konieczne, pasek przykrywają włosy</td></tr>
<tr><td>Grafty na sesję</td><td>duża liczba, możliwe megasesje</td><td>zwykle mniejsze obszary, dłuższy czas pracy</td><td>największa liczba w jednej sesji</td></tr>
<tr><td>Gojenie dawcy</td><td>krótsze, bez szwów</td><td>krótsze, bez szwów</td><td>dłuższe, wymaga zszycia</td></tr>
</table>
<p>Częsty marketingowy przekaz o bezwzględnej wyższości jednej z metod jest uproszczeniem. W rękach doświadczonego zespołu zarówno FUE, jak i FUT są uznawane za metody na poziomie aktualnej wiedzy medycznej, a o wyniku w największym stopniu decyduje odsetek uszkodzonych mieszków (transekcja), czas przechowywania graftów poza organizmem oraz doświadczenie operatora (Queen i Avram, 2025).</p>`,
  },
  {
    title: 'Jak przebiega zabieg przeszczepu włosów krok po kroku',
    tocLabel: 'Przebieg zabiegu',
    content: `<p>Przeszczep włosów wykonuje się w znieczuleniu miejscowym, w ciągu jednego dnia. Zabieg ma kilka następujących po sobie etapów, a jego czas zależy od liczby przeszczepianych graftów.</p>
<ol>
<li>konsultacja i trichoskopia: ocena obszaru dawczego, stabilności łysienia i oczekiwań</li>
<li>zaprojektowanie linii włosów i obszaru biorczego</li>
<li>znieczulenie miejscowe okolicy dawczej i biorczej</li>
<li>pobranie graftów (metodą FUE, DHI lub FUT)</li>
<li>obróbka i sortowanie graftów pod mikroskopem</li>
<li>utworzenie miejsc biorczych i wszczepienie mieszków zgodnie z naturalnym kątem wzrostu</li>
</ol>
<p>Sam zabieg jest zwykle mało bolesny: największy dyskomfort wynika z podania środka znieczulającego, a po znieczuleniu pacjent odczuwa głównie dotyk (Nusbaum, 2004). Po zabiegu dolegliwości bólowe są niewielkie i ustępują w ciągu kilku dni.</p>
<h3>Dlaczego liczy się czas i precyzja</h3>
<p>Pobrane mieszki są wrażliwe poza organizmem. Przeżywalność graftów obniża się wraz z czasem przechowywania o około 1% na godzinę: szacuje się ją na 95% po 2 godzinach, 90% po 4 i 86% po 6 godzinach (dane Limmera przytaczane przez Parsleya i Perez-Mezę, 2010). Najszybszym, nieodwracalnym zagrożeniem jest wysuszenie graftów (desykacja), które w suchym środowisku może uszkodzić mieszki już po 3-16 minutach. Dlatego najważniejsze etapy chirurgiczne powinien wykonywać lekarz, a nie nielicencjonowany technik (zalecenia ISHRS, Puig i wsp., 2009).</p>
<h3>Ile graftów potrzeba</h3>
<p>Liczbę graftów dobiera się do obszaru i stopnia łysienia. Orientacyjnie: zakola wymagają około 800-1500 graftów, zakola ze szczytem głowy 1500-2500, a zaawansowane łysienie 3000-6000 (Jimenez i wsp., 2021). Rezerwa dawcza jest jednak ograniczona na całe życie, dlatego planuje się ją z myślą o możliwej dalszej utracie rodzimych włosów.</p>`,
  },
  {
    title: 'Gojenie, shock loss i oś czasu efektów',
    tocLabel: 'Gojenie i efekty',
    content: `<p>Efekt przeszczepu włosów narasta miesiącami, a pierwsze tygodnie po zabiegu często rozczarowują pacjentów, którzy nie wiedzą, czego się spodziewać. Zrozumienie osi czasu jest tu równie ważne jak sam zabieg.</p>
<p>Strupki w okolicy biorczej tworzą się w ciągu 48-72 godzin, delikatne mycie głowy zwykle rozpoczyna się od 3-4 doby, a strupki odpadają w 7-10 dniu. Same grafty zakotwiczają się stopniowo: od około 9-10 doby są już trwale osadzone (Bernstein i Rassman, 2006).</p>
<h3>Shock loss i wypadanie przeszczepionych włosów</h3>
<p>W pierwszych tygodniach słupki przeszczepionych włosów zwykle wypadają, a mieszek przechodzi w fazę spoczynku (telogen). To <strong>oczekiwany etap</strong>, a nie utrata efektu: mieszek pozostaje żywy i odrasta. Czasem dochodzi też do przejściowego wypadania włosów rodzimych wokół przeszczepu (shock loss), które rozpoczyna się 2-8 tygodni po zabiegu i zwykle odrasta po kilku miesiącach; ryzyko to jest wyższe u kobiet (przegląd powikłań, 2026).</p>
<h3>Kiedy widać efekt</h3>
<p>Nowy wzrost zaczyna się zwykle około 3-4 miesiąca. Około 60-70% docelowej gęstości jest widoczne w 6-8 miesiącu, a pełny efekt ocenia się po 12-18 miesiącach. Linia czołowa dojrzewa szybciej, a szczyt głowy zwykle wolniej (StatPearls, 2025).</p>`,
  },
  {
    title: 'Przeciwwskazania, powikłania i bezpieczeństwo zabiegu',
    tocLabel: 'Przeciwwskazania i bezpieczeństwo',
    content: `<p>Przeszczep włosów jest zabiegiem chirurgicznym o dobrym profilu bezpieczeństwa, ale nie dla każdego i nie bez ograniczeń. Część przeciwwskazań decyduje o tym, że zabiegu w ogóle nie należy wykonywać.</p>
<h3>Przeciwwskazania</h3>
<ul>
<li><strong>bezwzględne:</strong> rozlane łysienie z wyczerpaną strefą dawczą (DUPA), czynne łysienie bliznowaciejące, czynne łysienie plackowate oraz dysmorfofobia (zaburzenie obrazu ciała, BDD)</li>
<li><strong>względne:</strong> niestabilne, szybko postępujące łysienie, bardzo młody wiek oraz niewielka dotychczasowa utrata gęstości (True, 2021)</li>
</ul>
<h3>Możliwe powikłania</h3>
<p>Łączny odsetek powikłań po FUE jest niski i w dużych seriach wynosi około 1,2-4,7%, a poważne zdarzenia są rzadkie (przegląd powikłań, 2026). Do przemijających następstw należą obrzęk czoła (u około 40-50% pacjentów, ustępuje w 5-7 dni), zapalenie mieszków włosowych, przejściowe drętwienie skóry oraz rzadziej zakażenie. Zbyt agresywne pobranie graftów z obszaru dawczego (overharvesting) może trwale przerzedzić okolicę dawczą i pozostawić w niej widoczne prześwity, dlatego doświadczony lekarz nie wykorzystuje całego dostępnego zasobu naraz.</p>
<p>Według stanowiska ISHRS nie istnieje „zabieg całkowicie bezbliznowy", a urządzenia (w tym roboty) jedynie wspomagają lekarza, nie zastępując jego decyzji i kwalifikacji. Powierzanie najważniejszych etapów osobom bez uprawnień medycznych grozi przeoczeniem przeciwwskazań i chorób skóry głowy. To ważny argument przeciwko wyborowi zabiegu wyłącznie według najniższej ceny.</p>`,
  },
  {
    title: 'Terapia łączona: finasteryd, minoksydyl, PRP i mezoterapia',
    tocLabel: 'Terapia podtrzymująca',
    content: `<p>Sam przeszczep nie zatrzymuje łysienia androgenowego, dlatego lepsze i trwalsze efekty daje połączenie zabiegu z leczeniem podtrzymującym, które chroni rodzime, nieprzeszczepione włosy.</p>
<p>Lekami pierwszego rzutu w AGA są finasteryd (doustnie, obniża stężenie DHT) i minoksydyl miejscowy (2-5%), a ich połączenie jest skuteczniejsze niż każdy z osobna (Kanti i wsp., 2018). W kontrolowanym badaniu finasteryd stosowany w okresie okołozabiegowym poprawił gęstość po przeszczepie: widoczny przyrost odnotowano u 94% pacjentów wobec 67% w grupie placebo (Leavitt i wsp., 2005). U kobiet finasteryd nie jest zarejestrowany w tym wskazaniu i jest przeciwwskazany w ciąży, dlatego podstawą bywa minoksydyl.</p>
<h3>Zabiegi wspomagające</h3>
<p>Jako uzupełnienie stosuje się także zabiegi regeneracyjne. <a href="/medycyna-estetyczna/osocze-bogatoplytkowe/">Osocze bogatopłytkowe (PRP)</a> jako terapia dodatkowa może poprawiać przeżywalność graftów (w jednym badaniu 82% wobec 74%; Xue i wsp., 2025) oraz gęstość włosów w AGA, choć jakość dowodów jest wciąż ograniczona (metaanaliza, 2024). Pomocniczo wykorzystuje się również <a href="/medycyna-estetyczna/mezoterapia-skory-glowy/">mezoterapię skóry głowy</a> oraz laseroterapię niskoenergetyczną (LLLT). Żaden z tych zabiegów nie zastępuje jednak leków pierwszego rzutu, a dobór całego planu należy do lekarza.</p>`,
  },
  {
    title: 'Kwalifikacja, koszt i przeszczep włosów we Wrocławiu',
    tocLabel: 'Kwalifikacja i cena',
    content: `<p>Decyzja o przeszczepie włosów zaczyna się od konsultacji lekarskiej z trichoskopią, podczas której ocenia się obszar dawczy (gęstość i jakość włosa), stabilność łysienia oraz realność oczekiwań pacjenta. Dopiero ta ocena pozwala dobrać metodę i oszacować liczbę graftów.</p>
<p>Koszt zabiegu zależy przede wszystkim od liczby przeszczepianych graftów oraz wybranej metody, a rozliczenie często prowadzi się za pojedynczy graft. Z tego powodu ceny nie podaje się z góry, lecz po kwalifikacji. Warto pamiętać, że do kosztu samego zabiegu dochodzi wydatek na <strong>terapię podtrzymującą</strong> w kolejnych latach, którego cenniki zwykle nie uwzględniają. Aktualne stawki znajdziesz w <a href="/cennik/">cenniku</a>, a wizytę umówisz przez <a href="/rejestracja/">rejestrację</a>.</p>
<p>Przeszczep włosów w łysieniu androgenowym jest zabiegiem estetycznym i nie jest refundowany przez NFZ. Refundacja obejmuje wyłącznie odtwórczy przeszczep w obrębie blizn, na przykład po urazach lub oparzeniach.</p>
<p>Bas Clinic we Wrocławiu łączy stomatologię i <a href="/medycyna-estetyczna/">medycynę estetyczną</a>, a plan każdego zabiegu ustala lekarz indywidualnie, po ocenie skóry głowy i obszaru dawczego.</p>
<p><strong>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej.</strong> O kwalifikacji do zabiegu, doborze metody i przeciwwskazaniach decyduje lekarz podczas wizyty.</p>`,
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: `<ol>
<li>Kanti V, Messenger A, Dobos G i wsp. Evidence-based (S3) guideline for the treatment of androgenetic alopecia in women and in men. J Eur Acad Dermatol Venereol (EDF/EADV) 2018 (PMID 29178529).</li>
<li>Queen D, Avram MR. Hair Transplantation: State of the Art. Dermatol Surg 2025 (PMID 40354670).</li>
<li>Romera de Blas C i wsp. Complications in follicular unit excision hair transplantation: current evidence and practical approaches. Front Med (Lausanne) 2026 (PMID 41709896).</li>
<li>Zhang i wsp. Using the follicular unit extraction technique in treatment of male androgenetic alopecia. BMC Surg 2024 (PMID 39543552).</li>
<li>True RH. Is Every Patient of Hair Loss a Candidate for Hair Transplant? Indian J Plast Surg 2021 (PMID 34984081).</li>
<li>Khanna M. Hair Transplant with Strip Harvest: Indications, Contraindications, and Technique. Indian J Plast Surg 2021 (PMID 34984084).</li>
<li>Choi YC, Kim JC. Single hair transplantation using the Choi hair transplanter. J Dermatol Surg Oncol 1992 (PMID 1430550).</li>
<li>Bernstein RM, Rassman WR. Graft Anchoring in Hair Transplantation. Dermatol Surg 2006 (PMID 16442039).</li>
<li>Parsley WM, Perez-Meza D. Review of Factors Affecting the Growth and Survival of Follicular Grafts. J Cutan Aesthet Surg 2010 (PMC2956960).</li>
<li>Leavitt M i wsp. Effects of finasteride (1 mg) on hair transplant. Dermatol Surg 2005 (PMID 16188178).</li>
<li>Ntshingila S i wsp. Androgenetic alopecia: An update. JAAD Int 2023 (PMID 37823040).</li>
<li>Ho CH, Sood T, Zito PM. Androgenetic Alopecia. StatPearls 2024 (Bookshelf NBK430924).</li>
<li>Goldin J, Zito PM, Raggio BS. Hair Transplantation. StatPearls 2025 (Bookshelf NBK547740).</li>
<li>Gupta M, Mysore V. Classifications of Patterned Hair Loss: A Review. J Cutan Aesthet Surg 2016 (PMID 27081243).</li>
<li>Xue Y i wsp. Effects of Platelet-Rich Plasma in Hair Transplantation for Patients With Androgenetic Alopecia. J Cosmet Dermatol 2025 (PMID 39555738).</li>
<li>Kieling L i wsp. Is autologous platelet-rich plasma capable of increasing hair density in patients with androgenic alopecia? A systematic review and meta-analysis of RCTs. An Bras Dermatol 2024 (PMID 39013743).</li>
<li>Puig CJ i wsp. Core competencies for hair restoration surgeons recommended by the ISHRS. Dermatol Surg 2009 (PMID 19292834).</li>
<li>Nusbaum BP. Techniques to reduce pain associated with hair transplantation. Am J Clin Dermatol 2004 (PMID 14979739).</li>
<li>Jimenez F, Alam M, Vogel JE, Avram M. Hair transplantation: Basic overview. J Am Acad Dermatol 2021 (PMID 33905785).</li>
</ol>`,
  },
];

export default function PrzeszczepWlosowPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Przeszczep włosów Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Odtworzenie linii włosów i zagęszczenie owłosienia z wykorzystaniem własnych mieszków włosowych. Plan zabiegu po konsultacji i ocenie skóry głowy."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/przeszczep-wlosow"
    />
  );
}
