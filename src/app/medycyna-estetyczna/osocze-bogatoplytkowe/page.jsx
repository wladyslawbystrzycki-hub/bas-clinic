import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Osocze bogatopłytkowe (PRP) Wrocław',
  description: 'Osocze bogatopłytkowe (PRP) we Wrocławiu: terapia z własnej krwi na włosy i skórę. O wskazaniach, efektach i przeciwwskazaniach decyduje konsultacja lekarska.',
  path: '/medycyna-estetyczna/osocze-bogatoplytkowe/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Osocze bogatopłytkowe' },
];

const FAQ = [
  {
    question: 'Czy osocze bogatopłytkowe pomaga na wypadanie włosów?',
    answer: 'Osocze bogatopłytkowe w łysieniu androgenowym najczęściej zwiększa gęstość włosów, choć dowody pozostają umiarkowane i niejednorodne. Działa jako terapia wspomagająca, zwykle obok minoksydylu lub finasterydu. Nie odtworzy włosów tam, gdzie mieszki już zanikły. O kwalifikacji decyduje lekarz.',
  },
  {
    question: 'Jak przebiega zabieg osoczem bogatopłytkowym i czy boli?',
    answer: 'Najpierw pobiera się krew z żyły do probówek z antykoagulantem, następnie wiruje ją, by oddzielić frakcję bogatopłytkową. Osocze podaje się techniką mezoterapii igłowej w skórę lub skórę głowy. Stosuje się znieczulenie powierzchniowe, a odczuwany dyskomfort jest zwykle umiarkowany.',
  },
  {
    question: 'Ile zabiegów trzeba wykonać i jak długo utrzymują się efekty?',
    answer: 'Osocze bogatopłytkowe daje efekt regeneracyjny i stopniowy, dlatego zwykle planuje się serię kilku zabiegów w odstępach kilkutygodniowych, a potem podtrzymanie. Efekt jest czasowy i wymaga powtarzania. Protokoły nie są ujednolicone, więc szczegóły ustala lekarz indywidualnie po ocenie.',
  },
  {
    question: 'Jakie są przeciwwskazania do osocza bogatopłytkowego?',
    answer: 'Do przeciwwskazań bezwzględnych należą krytycznie niska liczba płytek, zaburzenia ich czynności, czynne zakażenie w miejscu wkłucia i sepsa. Względne to między innymi leczenie przeciwkrzepliwe, czynny nowotwór, ciąża i karmienie. Każdy przypadek ocenia lekarz na konsultacji.',
  },
  {
    question: 'Czym różni się osocze bogatopłytkowe (PRP) od fibryny bogatopłytkowej (PRF)?',
    answer: 'PRP i PRF pochodzą z tej samej krwi pacjenta, lecz różnią się przygotowaniem. PRP powstaje z dodatkiem antykoagulantu i ma postać płynną. PRF przygotowuje się bez antykoagulantu, dzięki czemu tworzy rusztowanie fibrynowe i wolniej uwalnia czynniki wzrostu.',
  },
  {
    question: 'Gdzie wykonać osocze bogatopłytkowe we Wrocławiu?',
    answer: `Osocze bogatopłytkowe wykonujemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Zabieg poprzedza konsultacja lekarska, która ustala wskazanie i okolicę podania. Termin umówisz telefonicznie pod ${CLINIC.phone} lub przez formularz rejestracji. Pracujemy w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest osocze bogatopłytkowe (PRP) i czym różni się od „wampirzego liftingu”',
    tocLabel: 'Co to jest',
    content: `<p><strong>Osocze bogatopłytkowe (PRP</strong>, z angielskiego platelet-rich plasma) to frakcja osocza pozyskana z własnej krwi pacjenta, w której liczba płytek krwi jest podwyższona ponad poziom krwi pełnej. Płytki są nośnikiem <strong>czynników wzrostu</strong>, a celem zabiegu jest pobudzenie naturalnej regeneracji tkanek.</p>
<p>Ponieważ materiał pochodzi z krwi pacjenta, PRP jest preparatem <strong>autologicznym</strong>. To ważna cecha pod kątem tolerancji, ale nie znaczy, że osocze jest produktem ujednoliconym. Robocza definicja przyjmuje, że stężenie płytek powinno przekraczać poziom krwi pełnej, jednak realna zawartość płytek, leukocytów i czynników wzrostu zależy od protokołu wirowania i użytego sprzętu. Dlatego dwa zabiegi PRP nie muszą być sobie równe.</p>
<p>Potoczna nazwa „wampirzy lifting” opisuje po prostu podanie PRP w skórę twarzy. To termin marketingowy, a nie osobny rodzaj zabiegu. Pod tą etykietą kryje się ta sama autologiczna procedura, którą wykorzystuje się także na skórę głowy przy wypadaniu włosów.</p>`,
  },
  {
    title: 'Jak działa PRP: czynniki wzrostu i regeneracja, a nie wypełnienie',
    tocLabel: 'Jak działa',
    content: `<p>PRP działa jak biostymulator. Dostarcza skoncentrowane czynniki wzrostu, które pobudzają komórki do regeneracji, zamiast wypełniać tkankę objętościowo, jak robią to <a href="/medycyna-estetyczna/wypelniacze-ha/">wypełniacze z kwasu hialuronowego</a>.</p>
<p>Płytki uwalniają między innymi PDGF, TGF-beta, VEGF, EGF oraz IGF-1. W mieszku włosowym czynniki te pobudzają komórki brodawki włosa, poprawiają ukrwienie okolicy mieszka i sprzyjają przejściu włosa w fazę wzrostu. Mechanizm ten opisano przede wszystkim w badaniach przedklinicznych, dlatego traktujemy go jako wiarygodne wyjaśnienie działania, a nie udowodniony efekt u każdego pacjenta.</p>
<p>W skórze osocze pobudza fibroblasty i syntezę kolagenu, co z czasem wpływa na jakość i napięcie skóry. PRP nie dodaje jednak objętości i nie modeluje rysów. Jeśli celem jest wypełnienie zmarszczki czy powiększenie ust, właściwym narzędziem pozostaje wypełniacz, a nie osocze.</p>`,
  },
  {
    title: 'Osocze bogatopłytkowe na włosy: łysienie androgenowe',
    tocLabel: 'PRP na włosy',
    content: `<p>W <strong>łysieniu androgenowym</strong> osocze bogatopłytkowe najczęściej zwiększa gęstość włosów, choć jakość dowodów jest umiarkowana i niejednorodna. To terapia wspomagająca, a nie sposób na odtworzenie włosów tam, gdzie mieszki już zanikły.</p>
<p>Przegląd systematyczny z metaanalizą (Kieling i wsp., 2024) wykazał wzrost gęstości włosów po PRP względem grupy kontrolnej, ale autorzy sami opisali dowody jako niskiej jakości, skrajnie niejednorodne i obarczone ryzykiem błędu publikacyjnego. Z badań wyłania się kilka spójnych wniosków:</p>
<ul>
<li><strong>Gęstość</strong> włosów reaguje najbardziej powtarzalnie i to ona poprawia się w większości analiz.</li>
<li>Wpływ na <strong>liczbę i grubość</strong> włosa jest słabszy i mniej spójny. Często jest istotny względem stanu wyjściowego, ale nie względem placebo.</li>
<li>Efekt bywa wyraźniejszy u mężczyzn. U kobiet wyniki są mniej jednoznaczne, a różnice statystycznie nieistotne.</li>
</ul>
<p>Z tych powodów PRP opisujemy uczciwie: u wielu osób spowalnia wypadanie i zagęszcza włosy, choć efekt nie jest pewny u każdego i wymaga podtrzymania. Przy zaawansowanym łysieniu lub bliznowaceniu skóry głowy, gdy mieszków już nie ma, osocze nie zadziała i rozważa się wtedy <a href="/medycyna-estetyczna/przeszczep-wlosow/">przeszczep włosów</a>. Alternatywą lub uzupełnieniem na skórę głowy bywa też <a href="/medycyna-estetyczna/mezoterapia-skory-glowy/">mezoterapia skóry głowy</a> oparta na gotowych koktajlach.</p>`,
  },
  {
    title: 'PRP jako terapia wspomagająca: łączenie z minoksydylem i finasterydem',
    tocLabel: 'Terapia wspomagająca',
    content: `<p>Najmocniejsze dowody dotyczą osocza stosowanego razem z leczeniem pierwszego rzutu, czyli z minoksydylem lub finasterydem. Osocze uzupełnia farmakoterapię, a nie ją zastępuje.</p>
<p>Metaanalizy porównujące minoksydyl z minoksydylem wspartym PRP wskazują na większą poprawę gęstości i grubości włosa oraz wyższą satysfakcję pacjentów przy terapii łączonej. Pewność tych dowodów jest jednak niska, a część badań ma duże ryzyko błędu. W praktyce PRP najlepiej traktować jako element planu leczenia łysienia, dobranego przez lekarza po ocenie typu i zaawansowania utraty włosów, a nie jako samodzielny zamiennik leków o udokumentowanym działaniu.</p>`,
  },
  {
    title: 'PRP dla skóry i blizn potrądzikowych: zawsze w terapii łączonej',
    tocLabel: 'Skóra i blizny',
    content: `<p>W medycynie estetycznej osocze bogatopłytkowe najlepiej udokumentowano jako dodatek do innych zabiegów. Przy <strong>bliznach potrądzikowych</strong> łączy się je z laserem frakcyjnym lub z mikronakłuwaniem, a nie stosuje samodzielnie.</p>
<p>Przegląd systematyczny z metaanalizą (Aljefri i wsp., 2022) wykazał, że dodanie PRP do ablacyjnego lasera frakcyjnego CO2 przy bliznach atroficznych daje większą poprawę wyglądu blizn i wyższą satysfakcję niż sam laser, a także skraca gojenie. Podobny kierunek korzyści opisano dla połączenia PRP z mikronakłuwaniem. Trzeba jednak pamiętać, że całość dowodów dla blizn oceniono w przeglądzie nadrzędnym jako niskiej lub bardzo niskiej pewności.</p>
<p>Dowody dla samego odmłodzenia skóry i okolicy podoczodołowej są wyraźnie słabsze. Badania są małe i często obserwacyjne, a w jednej z prac z zaślepioną oceną pacjenci zgłaszali poprawę, której niezależni lekarze obiektywnie nie potwierdzili. Dlatego efekt na jakość skóry przedstawiamy ostrożnie, jako możliwą poprawę, a nie pewny rezultat.</p>
<table>
<tr><th>Wariant zabiegu</th><th>Siła dowodów</th><th>Pozycja PRP</th></tr>
<tr><td>PRP + laser frakcyjny CO2 (blizny)</td><td>Najlepiej udokumentowane połączenie, krótszy czas gojenia</td><td>Dodatek do lasera</td></tr>
<tr><td>PRP + mikronakłuwanie (blizny)</td><td>Korzyść opisana, dowody słabsze</td><td>Dodatek do mikronakłuwania</td></tr>
<tr><td>PRP samodzielnie na odmłodzenie skóry</td><td>Dowody ograniczone i niejednorodne</td><td>Wsparcie regeneracji, nie wypełnienie</td></tr>
</table>
<p>Szczegóły metod, z którymi łączy się osocze, opisujemy osobno: <a href="/medycyna-estetyczna/laserowe-usuwanie-blizn/">laserowe usuwanie blizn</a> oraz <a href="/medycyna-estetyczna/mezoterapia-mikroiglowa/">mezoterapia mikroigłowa</a>.</p>`,
  },
  {
    title: 'Osocze bogatopłytkowe (PRP) a fibryna bogatopłytkowa (PRF)',
    tocLabel: 'PRP a PRF',
    content: `<p>PRP i <strong>fibryna bogatopłytkowa (PRF)</strong> pochodzą z tej samej krwi pacjenta, ale różnią się sposobem przygotowania, a przez to także działaniem w czasie.</p>
<p>Koncentraty płytkowe porządkują uznane klasyfikacje, między innymi system Dohan Ehrenfest oraz systemy PAW i DEPA. Dzielą one preparaty według zawartości leukocytów oraz według postaci: płynnej (PRP) lub fibrynowej (PRF). Z punktu widzenia pacjenta najważniejsza jest praktyczna różnica między tymi dwiema formami.</p>
<table>
<tr><th>Cecha</th><th>PRP (osocze bogatopłytkowe)</th><th>PRF (fibryna bogatopłytkowa)</th></tr>
<tr><td>Antykoagulant</td><td>Dodawany do probówki</td><td>Niestosowany</td></tr>
<tr><td>Postać</td><td>Płynna, gotowa do iniekcji</td><td>Skrzep fibrynowy, rusztowanie</td></tr>
<tr><td>Aktywacja</td><td>Często wymagana</td><td>Zachodzi naturalnie podczas krzepnięcia</td></tr>
<tr><td>Uwalnianie czynników wzrostu</td><td>Szybkie</td><td>Wolniejsze i rozłożone w czasie</td></tr>
</table>
<p>Uproszczając: PRP łatwiej podać w głąb skóry, a PRF dłużej oddaje czynniki wzrostu dzięki siatce fibryny. Wybór formy zależy od wskazania i oceny lekarza.</p>`,
  },
  {
    title: 'Bezpieczeństwo i przeciwwskazania: dlaczego „własna krew” nie znaczy „zero ryzyka”',
    tocLabel: 'Bezpieczeństwo i przeciwwskazania',
    content: `<p>Ponieważ PRP pochodzi z własnej krwi pacjenta, ryzyko reakcji alergicznej na samo osocze jest niskie. Nie jest to jednak zabieg pozbawiony działań niepożądanych.</p>
<p>Najczęstsze i przemijające odczyny to ból w miejscu wkłucia, obrzęk, zaczerwienienie i zasinienie, a przy skórze głowy także ból głowy. Każde wkłucie niesie ryzyko zakażenia, dlatego zabieg wykonuje się w warunkach zachowania zasad aseptyki. Opisano też rzadkie, ale poważne powikłania naczyniowe po podaniu PRP w okolicę twarzy, zależne od techniki iniekcji. To jeden z powodów, dla których osocze podaje lekarz, a nie gabinet kosmetyczny.</p>
<h3>Przeciwwskazania do PRP: bezwzględne i względne</h3>
<p>Kwalifikację zawsze prowadzi lekarz. Konsensus ekspertów (Eymard i wsp., 2025) porządkuje sytuacje, w których z PRP należy zrezygnować lub zachować ostrożność.</p>
<table>
<tr><th>Przeciwwskazania bezwzględne</th><th>Przeciwwskazania względne</th></tr>
<tr><td>Krytycznie niska liczba płytek krwi</td><td>Leczenie przeciwkrzepliwe lub przeciwpłytkowe</td></tr>
<tr><td>Zaburzenia czynności płytek</td><td>Czynny nowotwór, zwłaszcza krwi i układu chłonnego</td></tr>
<tr><td>Niestabilność hemodynamiczna, sepsa</td><td>Ciąża i karmienie piersią (ostrożnościowo)</td></tr>
<tr><td>Czynne zakażenie w miejscu wkłucia</td><td>Choroba wątroby, gorączka, niedokrwistość</td></tr>
</table>
<p>Profil bezpieczeństwa osocza jest więc korzystny, ale nie zerowy. To właśnie dlatego sensowna kwalifikacja i wywiad lekarski są częścią zabiegu, a nie formalnością.</p>`,
  },
  {
    title: 'Przebieg zabiegu, liczba sesji i realne efekty',
    tocLabel: 'Przebieg i efekty',
    content: `<p>Zabieg składa się z pobrania krwi, jej odwirowania i podania osocza w skórę lub skórę głowy. Efekt jest regeneracyjny i stopniowy, dlatego zwykle potrzeba serii zabiegów i podtrzymania.</p>
<ol>
<li>Pobranie krwi z żyły do probówek z antykoagulantem.</li>
<li>Wirowanie krwi, które oddziela frakcję bogatopłytkową od pozostałych składników.</li>
<li>Przygotowanie osocza i, w razie potrzeby, jego aktywacja.</li>
<li>Podanie techniką mezoterapii igłowej, po znieczuleniu powierzchniowym.</li>
</ol>
<p>Schematy leczenia nie są ujednolicone. Przegląd systematyczny obejmujący 75 badań z randomizacją (Rahman i wsp., 2024) potwierdził dużą zmienność protokołów wirowania i stężenia płytek, co utrudnia porównywanie wyników i przenoszenie ich między gabinetami. W praktyce planuje się serię kilku zabiegów w odstępach kilkutygodniowych, a następnie podtrzymanie co kilka miesięcy. Pierwsze zmiany bywają widoczne po kilku tygodniach, a pełniejsza ocena jest możliwa po kilku miesiącach.</p>
<h3>Czego osocze nie zrobi</h3>
<p>Warto z góry ustawić oczekiwania. PRP nie działa u każdego, bo odpowiedź zależy między innymi od jakości płytek, wieku i palenia. Nie odbuduje włosa bez żywego mieszka, nie zastąpi wypełniacza i nie utrwala efektu raz na stałe. To narzędzie regeneracyjne, którego rolą jest wspieranie i podtrzymywanie poprawy, a nie jednorazowa metamorfoza.</p>`,
  },
  {
    title: 'Kwalifikacja, cena i osocze bogatopłytkowe we Wrocławiu',
    tocLabel: 'Konsultacja i cena',
    content: `<p>O tym, czy osocze bogatopłytkowe jest odpowiednie i w której okolicy je zastosować, decyduje konsultacja lekarska. W Bas Clinic we Wrocławiu osocze podają lekarze łączący doświadczenie w <a href="/medycyna-estetyczna/">medycynie estetycznej</a> i stomatologii, gdzie koncentraty płytkowe wykorzystuje się od lat.</p>
<p>Podczas kwalifikacji lekarz zbiera wywiad, ocenia wskazania i przeciwwskazania oraz ustala plan leczenia: okolicę podania, liczbę zabiegów i odstępy. Dopiero wtedy ma sens rozmowa o kosztach, bo cena zależy od okolicy i liczby sesji w serii. Aktualne stawki znajdziesz w <a href="/cennik/">cenniku</a>, a termin konsultacji umówisz przez <a href="/rejestracja/">rejestrację</a>. Osocze stosowane w celach estetycznych nie jest refundowane przez NFZ.</p>
<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. Decyzję o zabiegu oraz dobór metody zawsze podejmuje lekarz po indywidualnej ocenie.</p>`,
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: `<ol>
<li>Kieling i wsp. Czy autologiczne PRP zwiększa gęstość włosów w łysieniu androgenowym. Przegląd systematyczny z metaanalizą RCT. Journal of Cosmetic Dermatology 2024 (PMID 39013743).</li>
<li>Zhang i wsp. Osocze bogatopłytkowe w łysieniu androgenowym. Przegląd systematyczny z metaanalizą RCT 2023 (PMID 37533146).</li>
<li>Dervishi i wsp. Autologiczne PRP w łysieniu typu androgenowego. Przegląd systematyczny 2020 (PMID 31452328).</li>
<li>Gupta i wsp. Różnice działania PRP między mężczyznami a kobietami w łysieniu androgenowym 2020 (PMID 32761771).</li>
<li>Gentile i wsp. Odrost włosów po PRP. Randomizowane badanie z grupą kontrolną 2015 (PMID 26400925).</li>
<li>Cervelli i wsp. Ocena kliniczno-histomorfometryczna aktywowanego PRP w łysieniu typu męskiego 2014 (PMID 24883322).</li>
<li>Li i wsp. PRP jako narzędzie stymulujące wzrost włosa. Badania przedkliniczne 2012 (PMID 22455565).</li>
<li>Gupta i wsp. Model mechanistyczny działania PRP w łysieniu androgenowym 2016 (PMID 27631460).</li>
<li>Stevens i Khetarpal. Przegląd literatury i proponowany protokół PRP w łysieniu androgenowym. International Journal of Women's Dermatology 2019 (PMID 30809579).</li>
<li>Yao i wsp. Wartość dodana PRP do miejscowego minoksydylu. Przegląd systematyczny z metaanalizą 2024 (PMID 39197003).</li>
<li>Xiao i wsp. Metaanaliza skojarzenia PRP z minoksydylem w łysieniu androgenowym 2024 (PMID 38789807).</li>
<li>Gentile. PRP w porównaniu z minoksydylem, finasterydem i terapią komórkami macierzystymi. Przegląd systematyczny 2020 (PMID 32295047).</li>
<li>Chang i wsp. PRP z ablacyjnym laserem frakcyjnym CO2 w bliznach trądzikowych. Przegląd systematyczny z metaanalizą 2019 (PMID 30809666).</li>
<li>Aljefri i wsp. Ablacyjny laser frakcyjny CO2 z PRP w bliznach atroficznych. Przegląd systematyczny z metaanalizą. Dermatologic Therapy 2022 (PMID 36183145).</li>
<li>Kang i wsp. Połączenie mikronakłuwania i PRP w bliznach trądzikowych. Metaanaliza 2021 (PMID 35237616).</li>
<li>Hesseler i Shyam. PRP w leczeniu blizn potrądzikowych. Przegląd systematyczny 2019 (PMID 30742878).</li>
<li>Cruciani i wsp. PRP w leczeniu blizn trądzikowych. Przegląd nadrzędny przeglądów systematycznych 2024 (PMID 37677095).</li>
<li>Xiao i wsp. PRP w odmładzaniu twarzy. Systematyczna ocena dostępnych dowodów. Clinical, Cosmetic and Investigational Dermatology 2021 (PMID 34819739).</li>
<li>Phoebe. Zastosowanie PRP w odmładzaniu skóry. Przegląd 2024 (PMID 38650371).</li>
<li>Hassan i wsp. PRP z mikronakłuwaniem w okolicy podoczodołowej. Randomizowane badanie z zaślepioną oceną 2025 (PMID 39645648).</li>
<li>Manole i wsp. PRP w dermatologii. Komórkowy mechanizm naprawy i regeneracji skóry 2023 (PMID 38255655).</li>
<li>Marx. Osocze bogatopłytkowe. Dowody na zastosowanie. Journal of Oral and Maxillofacial Surgery 2004 (PMID 15085519).</li>
<li>Dohan Ehrenfest i wsp. Klasyfikacja koncentratów płytkowych, od P-PRP do L-PRF 2009 (PMID 19187989).</li>
<li>DeLong i wsp. Klasyfikacja PRP w systemie PAW 2012 (PMID 22738751).</li>
<li>Magalon i wsp. Klasyfikacja DEPA dla standaryzacji stosowania PRP 2016 (PMID 27900152).</li>
<li>Lana i wsp. Klasyfikacja koncentratów płytkowych MARSPILL 2017 (PMID 28758836).</li>
<li>Dohan Ehrenfest i wsp. Konsensus w sprawie klasyfikacji PRP i PRF 2014 (PMID 24932440).</li>
<li>Dhurat i Sukesh. Zasady i metody przygotowania PRP 2014 (PMID 25722595).</li>
<li>Kobayashi i wsp. Porównanie uwalniania czynników wzrostu z PRP i PRF 2016 (PMID 26809431).</li>
<li>Chahla i wsp. Apel o standaryzację protokołów PRP. Przegląd systematyczny 2017 (PMID 29040132).</li>
<li>Everts i wsp. PRP, nowe rozumienie i rozważania terapeutyczne 2020 (PMID 33096812).</li>
<li>Hesseler i Shyam. PRP w dermatologii medycznej i bezpieczeństwo stosowania. Przegląd systematyczny 2019 (PMID 31009668).</li>
<li>Arita i Tobita. Przegląd zdarzeń niepożądanych po PRP. Regenerative Therapy 2024 (PMID 39100535).</li>
<li>Eymard i wsp. Konsensus GRIIP dotyczący wskazań i przeciwwskazań do PRP 2025 (PMID 40260684).</li>
<li>Li i wsp. PRP w łysieniu androgenowym. Przegląd nadrzędny. Journal of Cosmetic Dermatology 2023 (PMID 36718799).</li>
<li>Rahman i wsp. PRP w specjalnościach medyczno-chirurgicznych. Jakość, ocena i dowody. Journal of Clinical Medicine 2024 (PMID 39124838).</li>
<li>Hausauer i Humphrey. Przewodnik lekarza po PRP, część druga, dowody kliniczne. Dermatologic Surgery 2020 (PMID 31770154).</li>
</ol>`,
  },
];

export default function OsoczeBogatoplytkowePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Osocze bogatopłytkowe (PRP) Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Osocze bogatopłytkowe z własnej krwi pacjenta na włosy i skórę. O wskazaniach, przebiegu i realnych efektach decyduje konsultacja lekarska."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/osocze-bogatoplytkowe"
    />
  );
}
