import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Chirurgia stomatologiczna Wrocław',
  description: 'Chirurgia stomatologiczna we Wrocławiu: usuwanie zębów i ósemek, resekcja wierzchołka, zabiegi przedimplantacyjne. Poznaj przebieg, gojenie i przeciwwskazania.',
  path: '/stomatologia/chirurgia/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Chirurgia' },
];

const FAQ = [
  { question: 'Czy zabiegi chirurgii stomatologicznej bolą?', answer: 'Sam zabieg wykonujemy w znieczuleniu miejscowym, więc w jego trakcie nie czujesz bólu, a jedynie dotyk i ucisk. Po ustąpieniu znieczulenia może pojawić się ból i obrzęk, które łagodzą leki przeciwbólowe, jak ibuprofen lub paracetamol, oraz zimne okłady na policzek.' },
  { question: 'Jak długo trwa gojenie po zabiegu chirurgicznym?', answer: 'Po prostej ekstrakcji zębodół zasklepia się w ciągu kilku dni, a tkanki miękkie goją się około 1-2 tygodni; szwy zdejmujemy zwykle po 7-10 dniach. Po rozległych zabiegach, takich jak augmentacja kości, przebudowa kości trwa kilka miesięcy.' },
  { question: 'Czy po usunięciu zęba trzeba brać antybiotyk?', answer: 'Nie rutynowo. U zdrowych pacjentów antybiotyk po ekstrakcji zwykle nie jest potrzebny, a jego nadużywanie sprzyja antybiotykooporności. Lekarz przepisuje go indywidualnie, gdy istnieją konkretne wskazania, na przykład stan zapalny lub obciążenia ogólne.' },
  { question: 'Co to jest suchy zębodół i jak zmniejszyć jego ryzyko?', answer: 'Suchy zębodół to bolesne powikłanie, w którym skrzep chroniący ranę zostaje przedwcześnie utracony. Typowym objawem jest ból nasilający się 2-3 dni po zabiegu. Ryzyko zmniejsza powstrzymanie się od palenia, unikanie energicznego płukania ust pierwszego dnia oraz picia przez słomkę.' },
  { question: 'Czy przed usunięciem zęba muszę odstawić leki przeciwzakrzepowe?', answer: 'Zwykle nie należy odstawiać ich samodzielnie, bo grozi to poważniejszymi powikłaniami niż samo krwawienie. Przy wartościach krzepnięcia w normie ekstrakcję często wykonuje się bez przerywania leczenia, stosując miejscowe metody tamowania krwawienia. O wszystkich lekach poinformuj chirurga przed zabiegiem.' },
  { question: 'Gdzie we Wrocławiu wykonujecie zabiegi chirurgii stomatologicznej?', answer: `Zabiegi chirurgii stomatologicznej wykonujemy w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Na konsultację chirurgiczną, podczas której oceniamy ząb i planujemy zabieg, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest chirurgia stomatologiczna i jakie problemy rozwiązuje?',
    tocLabel: 'Czym jest',
    content: (
      <>
        <p>Chirurgia stomatologiczna to dział stomatologii zajmujący się zabiegami operacyjnymi w obrębie jamy ustnej, wykonywanymi wtedy, gdy leczenie zachowawcze nie wystarcza. Obejmuje usuwanie zębów, zabiegi okołokorzeniowe, leczenie torbieli oraz przygotowanie podłoża pod implanty.</p>
        <p>Każdy zabieg poprzedza badanie i diagnostyka obrazowa. Chirurg ocenia ząb oraz okoliczne tkanki na zdjęciu pantomograficznym, a w trudniejszych sytuacjach (zęby zatrzymane, bliskość nerwu lub zatoki) na tomografii stożkowej CBCT, która pokazuje obraz w trzech wymiarach. Najczęściej wykonujemy następujące grupy zabiegów:</p>
        <ul>
          <li><strong>Usuwanie zębów</strong>: od prostych ekstrakcji po chirurgiczne usuwanie zębów mądrości i <Link href="/stomatologia/usuwanie-zebow/">zębów zatrzymanych</Link>.</li>
          <li><strong>Zabiegi okołokorzeniowe</strong>: resekcja wierzchołka korzenia, gdy nie udało się zachować zęba w ramach <Link href="/stomatologia/leczenie-zebow/">leczenia kanałowego</Link>.</li>
          <li><strong>Leczenie zmian</strong>: wyłuszczenie torbieli i innych zmian okołowierzchołkowych.</li>
          <li><strong>Tkanki miękkie</strong>: podcięcie lub plastyka wędzidełka oraz korekta dziąseł.</li>
          <li><strong>Przygotowanie pod implanty</strong>: augmentacja kości i podniesienie dna zatoki (sinus lift) przed <Link href="/stomatologia/implanty-zebowe/">wszczepieniem implantów</Link>.</li>
        </ul>
        <p>Warunkiem planowego zabiegu jest zdrowe podłoże, dlatego najpierw opanowujemy próchnicę i stan zapalny dziąseł, między innymi podczas <Link href="/stomatologia/higienizacja/">profesjonalnej higienizacji</Link>.</p>
      </>
    ),
  },
  {
    title: 'Zakres zabiegów chirurgicznych - przegląd',
    tocLabel: 'Zakres zabiegów',
    content: (
      <>
        <p>Pod pojęciem chirurgii stomatologicznej kryje się kilka różnych zabiegów. Poniższe zestawienie pokazuje, kiedy stosuje się każdy z nich i jak wygląda powrót do zdrowia.</p>
        <table>
          <tbody>
            <tr>
              <th>Zabieg</th>
              <th>Kiedy jest wskazany</th>
              <th>Powrót do zdrowia</th>
            </tr>
            <tr>
              <td>Ekstrakcja prosta</td>
              <td>Ząb zniszczony lub rozchwiany, którego nie da się odbudować</td>
              <td>Zębodół zasklepia się w pierwszych dniach, kość goi się tygodniami</td>
            </tr>
            <tr>
              <td>Chirurgiczne usunięcie zęba lub ósemki</td>
              <td>Ząb zatrzymany, ułożony poziomo albo pozostający w kości</td>
              <td>Szwy zwykle na 7-10 dni, obrzęk przez kilka dni</td>
            </tr>
            <tr>
              <td>Resekcja wierzchołka korzenia</td>
              <td>Przewlekła zmiana zapalna po nieskutecznym leczeniu kanałowym</td>
              <td>Ząb zostaje zachowany, gojenie kości trwa miesiącami</td>
            </tr>
            <tr>
              <td>Wyłuszczenie torbieli</td>
              <td>Torbiel lub inna zmiana w kości szczęki</td>
              <td>Ubytek kości odbudowuje się stopniowo</td>
            </tr>
            <tr>
              <td>Plastyka wędzidełka</td>
              <td>Zbyt napięte wędzidełko wargi lub języka</td>
              <td>Krótkie gojenie tkanek miękkich</td>
            </tr>
            <tr>
              <td>Augmentacja kości lub sinus lift</td>
              <td>Za mało kości pod implant</td>
              <td>Przebudowa kości trwa kilka miesięcy przed implantacją</td>
            </tr>
          </tbody>
        </table>
        <p>Niektóre z tych zabiegów wykonujemy samodzielnie, inne jako etap większego planu, na przykład przed <Link href="/stomatologia/implanty-zebowe/">leczeniem implantologicznym</Link> lub uzupełnieniem braku <Link href="/stomatologia/protetyka-korony/">koroną protetyczną</Link>.</p>
      </>
    ),
  },
  {
    title: 'Usuwanie zębów mądrości i zębów zatrzymanych',
    tocLabel: 'Ósemki i zęby zatrzymane',
    content: (
      <>
        <p>Zatrzymane zęby mądrości (ósemki) to najczęstszy powód wizyty u chirurga stomatologa. Nie każdą ósemkę trzeba jednak usuwać.</p>
        <p>Przez lata ósemki usuwano często profilaktycznie. Dziś podejście jest ostrożniejsze. Przegląd Cochrane (Ghaeminia i wsp., 2020) nie znalazł wystarczających dowodów, by usuwać zdrowe, bezobjawowe i niezagrażające sąsiednim zębom ósemki zatrzymane. Takie zęby zwykle obejmuje się obserwacją.</p>
        <p>Usunięcie staje się wskazane, gdy pojawia się problem: nawracające stany zapalne kaptura dziąsłowego (pericoronitis), próchnica ósemki lub sąsiedniego drugiego trzonowca, torbiel albo gdy ząb przeszkadza w leczeniu ortodontycznym. Decyzję podejmuje się indywidualnie, po ocenie zdjęcia.</p>
        <p>Gdy korzenie ósemki leżą blisko nerwu zębodołowego dolnego, alternatywą dla pełnego usunięcia bywa koronektomia, czyli zaplanowane pozostawienie fragmentu korzeni. Zmniejsza ona ryzyko uszkodzenia nerwu i przejściowego drętwienia wargi. Poszczególne rodzaje ekstrakcji opisujemy szerzej na stronie <Link href="/stomatologia/usuwanie-zebow/">usuwania zębów</Link>.</p>
      </>
    ),
  },
  {
    title: 'Resekcja wierzchołka korzenia i usuwanie torbieli',
    tocLabel: 'Resekcja i torbiele',
    content: (
      <>
        <p>Resekcja wierzchołka korzenia pozwala zachować ząb, którego nie udało się wyleczyć kanałowo, zamiast go usuwać.</p>
        <p>Zabieg polega na usunięciu wierzchołka korzenia wraz z otaczającą go przewlekłą zmianą zapalną i szczelnym, wstecznym zamknięciu kanału. Nowoczesna mikrochirurgia endodontyczna, z użyciem powiększenia i biozgodnych materiałów (np. MTA), jest znacznie skuteczniejsza od dawnej techniki resekcji. W metaanalizie (Setzer i wsp., 2010) skuteczność nowoczesnego protokołu sięgała około 94%, wobec około 59% dla metody tradycyjnej.</p>
        <p>Resekcję rozważa się zwykle wtedy, gdy ponowne <Link href="/stomatologia/leczenie-zebow/">leczenie kanałowe</Link> nie jest możliwe lub nie przyniosło efektu, a ząb warto zachować. Wyłuszczoną torbiel lub inną zmianę przekazujemy do badania histopatologicznego, ponieważ jej charakteru nie da się pewnie określić na podstawie samego zdjęcia.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega zabieg i jak się do niego przygotować?',
    tocLabel: 'Przebieg i przygotowanie',
    content: (
      <>
        <p>Zabieg chirurgiczny wykonujemy w znieczuleniu miejscowym, więc w jego trakcie nie czujesz bólu. Przebiega w kilku powtarzalnych krokach.</p>
        <ol>
          <li><strong>Konsultacja i diagnostyka</strong>: wywiad o stanie zdrowia i przyjmowanych lekach oraz ocena zęba na zdjęciu pantomograficznym lub tomografii CBCT.</li>
          <li><strong>Znieczulenie</strong>: znieczulenie miejscowe znosi czucie bólu w okolicy zabiegu.</li>
          <li><strong>Zabieg</strong>: usunięcie zęba, zmiany lub korekta tkanek; w razie potrzeby nacięcie dziąsła i założenie szwów.</li>
          <li><strong>Zabezpieczenie rany</strong>: założenie jałowego gazika i omówienie zaleceń na kolejne dni.</li>
        </ol>
        <p>Przed planowym zabiegiem zjedz lekki posiłek i poinformuj lekarza o przyjmowanych lekach oraz chorobach ogólnych. Szczególnie ważne są leki przeciwzakrzepowe, bisfosfoniany i inne leki na osteoporozę oraz przebyta radioterapia okolicy głowy i szyi (więcej w sekcji o przeciwwskazaniach). W dniu zabiegu zrezygnuj z alkoholu i papierosów. Antybiotyk u zdrowych pacjentów nie jest potrzebny rutynowo; stosuje się go tylko przy konkretnych wskazaniach.</p>
      </>
    ),
  },
  {
    title: 'Gojenie i zalecenia po zabiegu',
    tocLabel: 'Gojenie i zalecenia',
    content: (
      <>
        <p>Po zabiegu w zębodole tworzy się skrzep, który chroni ranę i jest podstawą gojenia. Pierwsze 24 godziny decydują o jego trwałości.</p>
        <ul>
          <li><strong>Pierwszy dzień</strong>: zagryzaj jałowy gazik przez około 30 minut, stosuj zimne okłady na policzek i nie płucz energicznie ust, by nie wypłukać skrzepu.</li>
          <li><strong>Dieta</strong>: jedz miękkie, letnie potrawy; unikaj gorących i twardych pokarmów oraz picia przez słomkę.</li>
          <li><strong>Używki</strong>: nie pal papierosów. Palenie ponad trzykrotnie zwiększa ryzyko suchego zębodołu (Kuśnierek i wsp., 2022).</li>
          <li><strong>Ból</strong>: dolegliwości po zabiegu łagodzą leki przeciwbólowe, jak ibuprofen lub paracetamol, zgodnie z zaleceniem lekarza.</li>
          <li><strong>Higiena i szwy</strong>: okolicę rany utrzymuj w czystości; szwy zdejmujemy zwykle po 7-10 dniach.</li>
        </ul>
        <p>Zgłoś się wcześniej, jeśli ból zamiast słabnąć nasila się po 2-3 dniach (to typowy objaw suchego zębodołu), pojawia się gorączka i narastający obrzęk albo krwawienie, którego nie udaje się opanować uciskiem gazika.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania, ryzyka i powikłania',
    tocLabel: 'Przeciwwskazania i ryzyka',
    content: (
      <>
        <p>Zabiegi chirurgii stomatologicznej są przewidywalne, ale jak każda procedura medyczna wiążą się z ryzykiem i wymagają uwzględnienia chorób ogólnych.</p>
        <ul>
          <li><strong>Leki przeciwzakrzepowe</strong>: zwykle nie odstawia się ich samodzielnie. Przy wartościach krzepnięcia w normie ekstrakcję często wykonuje się bez przerywania leczenia, stosując miejscowe metody tamowania krwawienia. Decyzję podejmuje lekarz.</li>
          <li><strong>Bisfosfoniany i leki antyresorpcyjne</strong>: leki stosowane w osteoporozie i chorobach nowotworowych zwiększają ryzyko martwicy kości szczęk (MRONJ). Zgodnie ze stanowiskiem AAOMS (Ruggiero i wsp., 2022) stan jamy ustnej warto uporządkować przed rozpoczęciem takiej terapii, a o jej przyjmowaniu trzeba poinformować chirurga.</li>
          <li><strong>Radioterapia głowy i szyi</strong>: napromienianie zwiększa ryzyko martwicy popromiennej kości, dlatego zabiegi planuje się we współpracy z onkologiem.</li>
          <li><strong>Niewyrównana cukrzyca i obniżona odporność</strong>: mogą pogarszać gojenie i sprzyjać zakażeniu.</li>
          <li><strong>Ciąża</strong>: planowe zabiegi zwykle odkłada się, a pilne wykonuje w bezpieczniejszym okresie, po konsultacji.</li>
        </ul>
        <p>Do możliwych powikłań należą przejściowy ból, obrzęk i szczękościsk, suchy zębodół, krwawienie oraz zakażenie. Rzadko, przy zabiegach w pobliżu nerwu, może dojść do przejściowego drętwienia wargi lub języka. Ryzyko to ogranicza staranna diagnostyka, a w wybranych przypadkach koronektomia.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje chirurgia stomatologiczna we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content: (
      <>
        <p>Koszt zabiegu chirurgicznego zależy przede wszystkim od jego rodzaju i stopnia trudności, dlatego ustala się go po konsultacji i diagnostyce. Na wycenę wpływają:</p>
        <ul>
          <li><strong>Rodzaj zabiegu</strong>: prosta ekstrakcja, chirurgiczne usunięcie zatrzymanej ósemki czy resekcja różnią się nakładem pracy.</li>
          <li><strong>Stopień trudności</strong>: ułożenie zęba, bliskość nerwu lub zatoki oraz potrzeba nacięcia kości.</li>
          <li><strong>Diagnostyka</strong>: zdjęcie pantomograficzne lub tomografia CBCT.</li>
          <li><strong>Materiały dodatkowe</strong>: na przykład materiał kościozastępczy przy augmentacji.</li>
        </ul>
        <p>Część zabiegów, jak usuwanie zębów, jest dostępna w ramach NFZ; zabiegi zaawansowane i przedimplantacyjne wykonuje się prywatnie. Orientacyjne stawki znajdziesz w <Link href="/cennik/">cenniku</Link>, a indywidualną wycenę podajemy po badaniu. Termin konsultacji chirurgicznej zarezerwujesz przez <Link href="/rejestracja/">rejestrację online</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji stomatologicznej. O zakresie i sposobie leczenia decyduje lekarz po badaniu i diagnostyce.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Ghaeminia H i wsp. Surgical removal versus retention for the management of asymptomatic disease-free impacted wisdom teeth. Cochrane Database of Systematic Reviews 2020. PMID 32368796.</li>
        <li>Setzer FC i wsp. Outcome of endodontic surgery: a meta-analysis of the literature, Part 1. Journal of Endodontics 2010. PMID 20951283.</li>
        <li>Daly BJ i wsp. Local interventions for the management of alveolar osteitis (dry socket). Cochrane Database of Systematic Reviews 2022. PMID 36156769.</li>
        <li>Kuśnierek W i wsp. Smoking as a Risk Factor for Dry Socket: A Systematic Review. Dentistry Journal 2022. PMID 35877395.</li>
        <li>Lodi G i wsp. Antibiotics to prevent complications following tooth extractions. Cochrane Database of Systematic Reviews 2021. PMID 33624847.</li>
        <li>Carrasco-Labra A i wsp. Evidence-based clinical practice guideline for the pharmacologic management of acute dental pain. Journal of the American Dental Association 2024. PMID 38325969.</li>
        <li>Ruggiero SL i wsp. AAOMS Position Paper on Medication-Related Osteonecrosis of the Jaws, 2022 Update. Journal of Oral and Maxillofacial Surgery 2022. PMID 35300956.</li>
        <li>Lajolo C i wsp. Tooth extraction before radiotherapy is a risk factor for developing osteoradionecrosis of the jaws: A systematic review. Oral Diseases 2021. PMID 32531873.</li>
        <li>Yang S i wsp. Should oral anticoagulant therapy be continued during dental extraction? A meta-analysis. BMC Oral Health 2016. PMID 27566540.</li>
      </ol>
    ),
  },
];

const CHILD_SERVICES = [
  { name: 'Usuwanie zębów', description: 'Ekstrakcja zębów, w tym zębów mądrości i zębów zatrzymanych.', href: '/stomatologia/usuwanie-zebow/' },
];

export default function ChirurgiaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Chirurgia stomatologiczna Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Chirurgia stomatologiczna w Bas Clinic. Usuwanie zębów i ósemek, resekcja wierzchołka korzenia oraz zabiegi przygotowujące do leczenia implantologicznego."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      childServices={CHILD_SERVICES}
      slug="stomatologia/chirurgia"
    />
  );
}
