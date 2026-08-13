import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Usuwanie zębów i ósemek Wrocław',
  description: 'Usuwanie zębów we Wrocławiu: ekstrakcja prosta i chirurgiczna, usuwanie ósemek i zębów zatrzymanych. Poznaj przebieg, gojenie, suchy zębodół i co po ekstrakcji.',
  path: '/stomatologia/usuwanie-zebow/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Chirurgia', href: '/stomatologia/chirurgia/' },
  { label: 'Usuwanie zębów' },
];

const FAQ = [
  { question: 'Czy usuwanie zęba boli?', answer: 'Samo usunięcie zęba wykonujemy w znieczuleniu miejscowym, więc w trakcie zabiegu nie czujesz bólu, a jedynie dotyk i ucisk. Po ustąpieniu znieczulenia może pojawić się ból i obrzęk, które łagodzą leki przeciwbólowe, najczęściej ibuprofen lub paracetamol, oraz zimne okłady na policzek.' },
  { question: 'Ile kosztuje usunięcie zęba lub ósemki we Wrocławiu?', answer: 'Cena zależy od rodzaju zabiegu: ekstrakcja prosta, chirurgiczna i usunięcie zatrzymanej ósemki różnią się nakładem pracy, a na koszt wpływa też diagnostyka. Część zabiegów jest dostępna w ramach NFZ, bardziej złożone wykonuje się prywatnie. Orientacyjne stawki podajemy w cenniku, a indywidualną wycenę po badaniu.' },
  { question: 'Co to jest suchy zębodół i jak go rozpoznać?', answer: 'Suchy zębodół to bolesne powikłanie, w którym skrzep chroniący ranę zostaje przedwcześnie utracony. Charakterystycznym objawem jest ból, który zamiast słabnąć, nasila się 2-3 dni po usunięciu zęba i bywa promieniujący. Ryzyko obniża powstrzymanie się od palenia oraz unikanie energicznego płukania ust i picia przez słomkę.' },
  { question: 'Czy po usunięciu zęba trzeba brać antybiotyk?', answer: 'Nie rutynowo. U zdrowych pacjentów antybiotyk po usunięciu zęba zwykle nie jest potrzebny, a jego nadużywanie sprzyja antybiotykooporności. Lekarz przepisuje go indywidualnie, gdy istnieją konkretne wskazania, na przykład nasilony stan zapalny, gorączka lub obciążenia ogólne.' },
  { question: 'Czy przed usunięciem zęba trzeba odstawić leki przeciwzakrzepowe?', answer: 'Zwykle nie należy odstawiać ich samodzielnie, bo grozi to poważniejszymi powikłaniami niż samo krwawienie. Przy wartościach krzepnięcia w normie ekstrakcję często wykonuje się bez przerywania leczenia, stosując miejscowe metody tamowania krwawienia. O wszystkich przyjmowanych lekach poinformuj chirurga przed zabiegiem.' },
  { question: 'Gdzie we Wrocławiu usuwacie zęby i ósemki?', answer: `Zęby usuwamy, łącznie z zębami mądrości i zębami zatrzymanymi, w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Na konsultację, podczas której oceniamy ząb i planujemy zabieg, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest ekstrakcja zęba - prosta i chirurgiczna?',
    tocLabel: 'Czym jest',
    content: (
      <>
        <p>Ekstrakcja zęba to zabieg chirurgiczny polegający na usunięciu zęba z zębodołu kostnego. W zależności od położenia zęba i dostępu do niego wyróżniamy dwa rodzaje zabiegu, które różnią się techniką i przebiegiem gojenia.</p>
        <ul>
          <li><strong>Ekstrakcja prosta</strong>: dotyczy zęba widocznego w jamie ustnej. Chirurg poszerza zębodół i zwalnia ząb z więzadeł dźwignią (luksacja), a następnie usuwa go kleszczami, bez nacinania dziąsła.</li>
          <li><strong>Ekstrakcja chirurgiczna</strong>: konieczna przy zębach zatrzymanych, złamanych na poziomie dziąsła lub o utrudnionym dostępie. Wymaga nacięcia i odsunięcia płata dziąsła, czasem usunięcia fragmentu kości (dłutowanie) oraz podzielenia zęba na części (separacja korzeni), a na końcu założenia szwów.</li>
        </ul>
        <p>Najczęstszym powodem usunięcia zęba u dorosłych jest próchnica i jej powikłania oraz zaawansowana choroba przyzębia; rzadziej są to złamania, wskazania ortodontyczne czy zęby zatrzymane. Przed każdym zabiegiem oceniamy ząb i otaczające tkanki na zdjęciu RTG lub pantomogramie, a w trudniejszych sytuacjach (zęby zatrzymane, bliskość nerwu lub zatoki) na tomografii stożkowej CBCT. Planowy zabieg poprzedza też opanowanie stanu zapalnego dziąseł, między innymi podczas <Link href="/stomatologia/higienizacja/">profesjonalnej higienizacji</Link>.</p>
      </>
    ),
  },
  {
    title: 'Kiedy trzeba usunąć ząb, a kiedy można go uratować?',
    tocLabel: 'Kiedy usunąć ząb',
    content: (
      <>
        <p>Usunięcie zęba traktujemy jako ostateczność. Ekstrakcja jest nieodwracalna, dlatego ząb, który da się jeszcze odbudować i utrzymać, w pierwszej kolejności staramy się uratować.</p>
        <p>Za ratowaniem własnego zęba przemawiają dane kliniczne: u pacjentów z chorobą przyzębia zarówno prawidłowo leczone i zachowane zęby, jak i implanty osiągają wysoką, zbliżoną przeżywalność, więc usunięcie nie jest automatycznie lepszym wyborem. Również samo rozchwianie zęba nie przesądza o jego usunięciu; zwiększa ono ryzyko utraty w czasie, ale wiele rozchwianych zębów udaje się utrzymać po leczeniu przyzębia. Z drugiej strony przeciąganie decyzji o usunięciu zęba bez rokowania naraża pacjenta na ból, infekcje i utratę kości.</p>
        <p>Usunięcie zęba jest wskazane przede wszystkim, gdy:</p>
        <ul>
          <li>zęba nie da się uratować <Link href="/stomatologia/leczenie-zebow/">leczeniem zachowawczym ani kanałowym</Link> (rozległa próchnica, podłużne złamanie korzenia);</li>
          <li>występuje zaawansowana choroba przyzębia z dużym rozchwianiem i zanikiem kości;</li>
          <li>ząb jest zatrzymany i powoduje dolegliwości lub uszkadza sąsiednie zęby;</li>
          <li>usunięcie wynika z planu leczenia ortodontycznego (brak miejsca w łuku).</li>
        </ul>
        <p>Ostateczną decyzję podejmuje chirurg po badaniu i ocenie zdjęcia, biorąc pod uwagę rokowanie zęba oraz plan dalszej odbudowy braku.</p>
      </>
    ),
  },
  {
    title: 'Usuwanie zębów mądrości i zębów zatrzymanych',
    tocLabel: 'Ósemki i zęby zatrzymane',
    content: (
      <>
        <p>Zatrzymane zęby mądrości, czyli ósemki, to najczęstszy powód wizyty u chirurga stomatologa. Nie każdą ósemkę trzeba jednak usuwać.</p>
        <p>Przegląd Cochrane (Ghaeminia i wsp., 2020) nie znalazł wystarczających dowodów, by profilaktycznie usuwać zdrowe, bezobjawowe ósemki zatrzymane; takie zęby zwykle obejmuje się obserwacją i kontrolą. Usunięcie staje się wskazane, gdy pojawia się problem: nawracające zapalenie kapturka dziąsłowego (pericoronitis), próchnica ósemki lub sąsiedniego zęba, torbiel albo gdy ząb przeszkadza w leczeniu ortodontycznym.</p>
        <p>Sposób usunięcia zależy od ułożenia zęba w kości. Chirurdzy opisują je w klasyfikacjach (Pell-Gregory, Winter), oceniając między innymi kierunek nachylenia zęba (zatrzymanie mezjoangularne, dystoangularne, pionowe lub poziome) oraz głębokość w kości. Im głębiej i bardziej poziomo leży ząb, tym bardziej złożony bywa zabieg.</p>
        <h3>Ryzyko uszkodzenia nerwu i koronektomia</h3>
        <p>Korzenie dolnych ósemek bywają położone blisko nerwu zębodołowego dolnego, który odpowiada za czucie wargi i brody. W dużym badaniu obejmującym ponad 4000 zabiegów przejściowe zaburzenia czucia tego nerwu wystąpiły u około 0,35% pacjentów, a nerwu językowego u 0,69%, przy czym u większości czucie wracało w ciągu kilku miesięcy (Cheung i wsp., 2010). Trwałe drętwienie jest rzadkie, ale jako realne powikłanie zawsze omawiamy je przed zabiegiem.</p>
        <p>Gdy ryzyko kontaktu z nerwem jest wysokie, alternatywą bywa koronektomia, czyli zaplanowane usunięcie tylko korony zęba z pozostawieniem korzeni. Zmniejsza ona ryzyko uszkodzenia nerwu, ale wiąże się z większą szansą na ponowny zabieg w przyszłości, dlatego stosuje się ją w wybranych przypadkach, a nie rutynowo.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega usuwanie zęba i jak się przygotować?',
    tocLabel: 'Przebieg i przygotowanie',
    content: (
      <>
        <p>Usuwanie zęba wykonujemy w znieczuleniu miejscowym, dzięki czemu w trakcie zabiegu nie odczuwasz bólu, a jedynie dotyk i ucisk. Sam zabieg przebiega w kilku powtarzalnych krokach.</p>
        <ol>
          <li><strong>Konsultacja i diagnostyka</strong>: wywiad o stanie zdrowia i przyjmowanych lekach oraz ocena zęba na zdjęciu RTG, pantomogramie, a w razie potrzeby na tomografii CBCT.</li>
          <li><strong>Znieczulenie</strong>: znieczulenie miejscowe znosi czucie bólu w okolicy zęba.</li>
          <li><strong>Usunięcie zęba</strong>: zwolnienie zęba z więzadeł i jego usunięcie; przy ekstrakcji chirurgicznej nacięcie dziąsła, w razie potrzeby podzielenie zęba i opracowanie kości.</li>
          <li><strong>Zaopatrzenie rany</strong>: oczyszczenie zębodołu, w razie potrzeby założenie szwów oraz jałowego gazika do zagryzienia.</li>
        </ol>
        <p>Przed planowym zabiegiem zjedz lekki posiłek i poinformuj lekarza o wszystkich przyjmowanych lekach oraz chorobach ogólnych (więcej w sekcji o przeciwwskazaniach). W dniu zabiegu zrezygnuj z alkoholu i palenia. Antybiotyku u zdrowych pacjentów nie stosuje się rutynowo przed usunięciem zęba ani po nim; sięga się po niego wyłącznie przy konkretnych wskazaniach, ponieważ nadużywanie antybiotyków sprzyja antybiotykooporności.</p>
      </>
    ),
  },
  {
    title: 'Gojenie, suchy zębodół i zalecenia po usunięciu zęba',
    tocLabel: 'Gojenie i suchy zębodół',
    content: (
      <>
        <p>Po usunięciu zęba w zębodole tworzy się skrzep krwi, który chroni ranę i jest podstawą gojenia. Tkanki miękkie zasklepiają się w ciągu około 1-2 tygodni, szwy zdejmujemy zwykle po 7-10 dniach, a pełna przebudowa kości w miejscu po zębie trwa kilka miesięcy.</p>
        <p>Pierwsze 24 godziny decydują o trwałości skrzepu, dlatego:</p>
        <ul>
          <li><strong>Pierwszy dzień</strong>: zagryzaj jałowy gazik przez około 30 minut, stosuj zimne okłady na policzek i nie płucz energicznie ust, by nie wypłukać skrzepu.</li>
          <li><strong>Dieta</strong>: jedz miękkie, letnie potrawy; unikaj gorących i twardych pokarmów oraz picia przez słomkę.</li>
          <li><strong>Używki</strong>: nie pal papierosów. Palenie zwiększa ryzyko suchego zębodołu ponad trzykrotnie (Kuśnierek i wsp., 2022).</li>
          <li><strong>Ból</strong>: dolegliwości po zabiegu łagodzą leki przeciwbólowe, najczęściej ibuprofen lub jego połączenie z paracetamolem, zgodnie z zaleceniem lekarza.</li>
        </ul>
        <h3>Suchy zębodół - objawy i jak go uniknąć</h3>
        <p>Suchy zębodół (alveolitis sicca) to bolesne powikłanie, w którym skrzep zostaje przedwcześnie utracony i odsłania kość. Typowym objawem jest ból, który zamiast słabnąć, nasila się 2-3 dni po zabiegu i może promieniować do ucha. Po rutynowych, prostych ekstrakcjach jest stosunkowo rzadki, rzędu kilku procent, natomiast po chirurgicznym usunięciu dolnych ósemek występuje częściej, średnio u około 6-7% pacjentów. Ryzyko obniża powstrzymanie się od palenia oraz delikatne obchodzenie się z raną; w wybranych przypadkach chirurg stosuje płukankę lub żel z chlorheksydyną.</p>
        <p>Zgłoś się wcześniej, jeśli ból gwałtownie narasta po 2-3 dniach, pojawia się gorączka i narastający obrzęk albo krwawienie, którego nie udaje się opanować uciskiem gazika.</p>
      </>
    ),
  },
  {
    title: 'Co po usunięciu zęba - odbudowa braku i preserwacja zębodołu',
    tocLabel: 'Co po usunięciu zęba',
    content: (
      <>
        <p>Po usunięciu zęba, zwłaszcza w odcinku widocznym i bocznym, warto zaplanować odbudowę braku. Pusty zębodół z czasem prowadzi do zaniku kości wyrostka oraz przesuwania się sąsiednich i przeciwstawnych zębów.</p>
        <p>Zanik kości jest największy w pierwszych miesiącach po ekstrakcji: w przeglądach badań szerokość wyrostka zmniejsza się w ciągu pierwszego półrocza średnio o około 3-4 mm, a jego wysokość w mniejszym stopniu. Aby ograniczyć ten zanik, już w trakcie usuwania zęba można wykonać preserwację zębodołu, czyli wypełnienie go materiałem kościozastępczym. Zabieg ten może zmniejszać późniejszy ubytek kości i ułatwiać wszczepienie implantu, choć przegląd Cochrane (Atieh i wsp., 2021) zwraca uwagę, że pewność dowodów pozostaje niska. Decyzję podejmuje się więc indywidualnie, najczęściej gdy planowany jest implant.</p>
        <p>Brak zęba można uzupełnić na kilka sposobów. Poniższe zestawienie pomaga zorientować się w różnicach.</p>
        <table>
          <tbody>
            <tr>
              <th>Sposób odbudowy</th>
              <th>Na czym polega</th>
              <th>Dla kogo</th>
            </tr>
            <tr>
              <td>Implant</td>
              <td>Tytanowy wszczep w kości z koroną; nie obciąża sąsiednich zębów</td>
              <td>Pojedyncze i mnogie braki przy wystarczającej ilości kości</td>
            </tr>
            <tr>
              <td>Most protetyczny</td>
              <td>Korony oparte na oszlifowanych zębach sąsiednich</td>
              <td>Brak 1-2 zębów, gdy sąsiednie zęby i tak wymagają koron</td>
            </tr>
            <tr>
              <td>Proteza ruchoma</td>
              <td>Zdejmowane uzupełnienie wsparte na dziąśle i zębach</td>
              <td>Rozległe braki lub rozwiązanie tymczasowe</td>
            </tr>
          </tbody>
        </table>
        <p>Najczęściej brak zęba odbudowujemy <Link href="/stomatologia/implanty-zebowe/">implantem</Link> albo <Link href="/stomatologia/protetyka-korony/">koroną i mostem protetycznym</Link>; sposób dobieramy po ocenie kości i sąsiednich zębów. Plan odbudowy warto omówić jeszcze przed usunięciem zęba.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania, ryzyka i powikłania',
    tocLabel: 'Przeciwwskazania i ryzyka',
    content: (
      <>
        <p>Usuwanie zębów jest przewidywalnym zabiegiem, ale jak każda procedura medyczna wiąże się z ryzykiem i wymaga uwzględnienia chorób ogólnych oraz przyjmowanych leków.</p>
        <ul>
          <li><strong>Leki przeciwzakrzepowe</strong>: zwykle nie odstawia się ich samodzielnie, bo grozi to groźniejszymi powikłaniami niż samo krwawienie. Przy wartościach krzepnięcia w normie ekstrakcję często wykonuje się bez przerywania leczenia, stosując miejscowe metody tamowania krwawienia. Decyzję podejmuje lekarz.</li>
          <li><strong>Bisfosfoniany i leki antyresorpcyjne</strong>: leki stosowane w osteoporozie i chorobach nowotworowych zwiększają ryzyko martwicy kości szczęk (MRONJ). Stan jamy ustnej i zęby o złym rokowaniu warto uporządkować przed rozpoczęciem takiej terapii, a o jej przyjmowaniu trzeba poinformować chirurga.</li>
          <li><strong>Radioterapia głowy i szyi</strong>: napromienianie zwiększa ryzyko martwicy popromiennej kości, dlatego ekstrakcje planuje się we współpracy z onkologiem, najlepiej przed rozpoczęciem leczenia.</li>
          <li><strong>Niewyrównana cukrzyca i obniżona odporność</strong>: mogą spowalniać gojenie i sprzyjać zakażeniu.</li>
          <li><strong>Ciąża</strong>: planowe zabiegi zwykle odkłada się, a pilne wykonuje w bezpieczniejszym okresie, najczęściej w drugim trymestrze.</li>
        </ul>
        <p>Do możliwych powikłań należą przejściowy ból, obrzęk i szczękościsk, krwawienie, suchy zębodół oraz rzadziej zakażenie. Przy usuwaniu górnych zębów trzonowych istnieje ryzyko połączenia ustno-zatokowego z zatoką szczękową, a przy dolnych ósemkach przejściowego drętwienia wargi lub języka. Ryzyko to ogranicza staranna diagnostyka i, w wybranych przypadkach, koronektomia. Część bardziej złożonych zabiegów prowadzimy w ramach szerszego planu <Link href="/stomatologia/chirurgia/">chirurgii stomatologicznej</Link>.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje usuwanie zębów we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content: (
      <>
        <p>Koszt usunięcia zęba zależy przede wszystkim od rodzaju zabiegu i stopnia trudności, dlatego ustala się go po konsultacji i ocenie zdjęcia. Na wycenę wpływają:</p>
        <ul>
          <li><strong>Rodzaj ekstrakcji</strong>: prosta, chirurgiczna czy usunięcie zatrzymanej ósemki różnią się nakładem pracy.</li>
          <li><strong>Stopień trudności</strong>: ułożenie zęba, bliskość nerwu lub zatoki, potrzeba nacięcia kości.</li>
          <li><strong>Diagnostyka</strong>: zdjęcie RTG, pantomogram lub tomografia CBCT.</li>
          <li><strong>Dodatkowe procedury</strong>: na przykład preserwacja zębodołu materiałem kościozastępczym.</li>
        </ul>
        <p>Usuwanie zębów jest dostępne także w ramach NFZ, choć zakres i dostępność bywają ograniczone; zabiegi bardziej złożone wykonuje się prywatnie. Orientacyjne stawki znajdziesz w <Link href="/cennik/">cenniku</Link>, a indywidualną wycenę podajemy po badaniu. Termin zabiegu zarezerwujesz przez <Link href="/rejestracja/">rejestrację online</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji stomatologicznej. O wskazaniach do usunięcia zęba i sposobie leczenia decyduje lekarz po badaniu i diagnostyce.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Broers DLM i wsp. Reasons for Tooth Removal in Adults: A Systematic Review. International Dental Journal 2022. PMID 33648772.</li>
        <li>Sarafidou K i wsp. Tooth preservation versus extraction and implant placement in periodontally compromised patients: A systematic review. Journal of Prosthodontics 2022. PMID 35794083.</li>
        <li>Ghaeminia H i wsp. Surgical removal versus retention for the management of asymptomatic disease-free impacted wisdom teeth. Cochrane Database of Systematic Reviews 2020. PMID 32368796.</li>
        <li>Peixoto AO i wsp. Benefits of Coronectomy in Lower Third Molar Surgery: A Systematic Review and Meta-analysis. Journal of Oral and Maxillofacial Surgery 2024. PMID 37925166.</li>
        <li>Cheung LK, Leung YY i wsp. Incidence of neurosensory deficits and recovery after lower third molar surgery: a prospective clinical study of 4338 cases. International Journal of Oral and Maxillofacial Surgery 2010. PMID 20061121.</li>
        <li>Kostares E i wsp. Prevalence of fibrinolytic alveolitis following extraction of impacted mandibular third molars: A systematic review and meta-analysis. Journal of Stomatology, Oral and Maxillofacial Surgery 2024. PMID 38432484.</li>
        <li>Daly BJ i wsp. Local interventions for the management of alveolar osteitis (dry socket). Cochrane Database of Systematic Reviews 2022. PMID 36156769.</li>
        <li>Kuśnierek W i wsp. Smoking as a Risk Factor for Dry Socket: A Systematic Review. Dentistry Journal 2022. PMID 35877395.</li>
        <li>Carrasco-Labra A i wsp. Evidence-based clinical practice guideline for the pharmacologic management of acute dental pain. Journal of the American Dental Association 2024. PMID 38325969.</li>
        <li>Lodi G i wsp. Antibiotics to prevent complications following tooth extractions. Cochrane Database of Systematic Reviews 2021. PMID 33624847.</li>
        <li>Tan WL i wsp. A systematic review of post-extractional alveolar hard and soft tissue dimensional changes in humans. Clinical Oral Implants Research 2012. PMID 22211303.</li>
        <li>Atieh MA i wsp. Interventions for replacing missing teeth: alveolar ridge preservation techniques for dental implant site development. Cochrane Database of Systematic Reviews 2021. PMID 33899930.</li>
        <li>Yang S i wsp. Should oral anticoagulant therapy be continued during dental extraction? A meta-analysis. BMC Oral Health 2016. PMID 27566540.</li>
        <li>Ruggiero SL i wsp. AAOMS Position Paper on Medication-Related Osteonecrosis of the Jaws, 2022 Update. Journal of Oral and Maxillofacial Surgery 2022. PMID 35300956.</li>
        <li>Lajolo C i wsp. Tooth extraction before radiotherapy is a risk factor for developing osteoradionecrosis of the jaws: A systematic review. Oral Diseases 2021. PMID 32531873.</li>
      </ol>
    ),
  },
];

export default function UsuwanieZebowPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Usuwanie zębów Wrocław"
      heroSubtitle="Chirurgia"
      heroDescription="Usuwanie zębów w Bas Clinic we Wrocławiu. Ekstrakcje proste i chirurgiczne, usuwanie ósemek i zębów zatrzymanych oraz odbudowa braku zęba po ekstrakcji."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="stomatologia/usuwanie-zebow"
    />
  );
}
