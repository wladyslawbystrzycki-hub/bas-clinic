import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG szyi Wrocław - tkanki miękkie',
  description:
    'USG szyi we Wrocławiu - bezbolesne badanie tkanek miękkich szyi, węzłów chłonnych, ślinianek i naczyń. Bas Clinic, ul. Opatowicka 132. Sprawdź terminy i cenę.',
  path: '/usg/szyja/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG szyi' },
];

const RELATED = [
  'usg/tarczyca',
  'usg/wezly-chlonne',
  'usg/slinianki',
  'usg/doppler-tetnice-szyjne',
].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG szyi?',
    tocLabel: 'Czym jest',
    content:
      (
      <>
        <p>USG szyi to nieinwazyjne, bezbolesne badanie ultrasonograficzne, które za pomocą fal ultradźwiękowych ocenia tkanki miękkie całej okolicy szyjnej, bez promieniowania jonizującego. Określa się je także mianem USG tkanek miękkich szyi, ultrasonografii szyi albo badania USG struktur szyi.</p>
        <p>Jest to badanie parasolowe, czyli przeglądowe - w jednym podejściu lekarz ocenia szeroki zakres struktur leżących pod skórą. Obrazowanie prowadzi się głowicą liniową wysokiej częstotliwości, która zapewnia dużą rozdzielczość przy strukturach powierzchownych. Zgodnie z rekomendacjami EFSUMB (Todsen i wsp., 2022) ocena głowy i szyi obejmuje tarczycę, duże gruczoły ślinowe, węzły chłonne szyjne oraz główne naczynia tej okolicy.</p>
        <p>W jednym badaniu USG szyi można uwidocznić tarczycę, węzły chłonne szyjne, ślinianki przyuszne i podżuchwowe, a także tkanki miękkie wraz z ewentualnymi zmianami ogniskowymi. Okolicę przytarczyc ocenia się orientacyjnie - prawidłowe przytarczyce zwykle nie są widoczne, uwagę zwracają dopiero powiększone. Duże naczynia szyi uwidacznia się poglądowo, natomiast szczegółowa ocena przepływu krwi wymaga osobnego badania dopplerowskiego.</p>
      </>
    ),
  },
  {
    title: 'Co można ocenić w USG szyi?',
    tocLabel: 'Co ocenia',
    content:
      (
      <>
        <p>W USG szyi ocenia się wielkość, kształt, echogeniczność i unaczynienie struktur szyjnych oraz wykrywa zmiany, które nie zawsze są wyczuwalne podczas badania palpacyjnego. Pozwala to opisać nieprawidłowości wymagające ewentualnej dalszej diagnostyki.</p>
        <ul>
          <li><strong>Węzły chłonne szyjne</strong> - ocena ich wielkości, kształtu, echogenicznej wnęki i unaczynienia. Węzły odczynowe są zwykle owalne z zachowaną wnęką tłuszczową, a cechy takie jak kształt okrągły, zanik wnęki, mikrozwapnienia czy nieprawidłowe unaczynienie uznaje się za podejrzane (Ahuja i wsp., 2008). Są to jednak cechy sugestywne, nie rozstrzygające.</li>
          <li><strong>Ślinianki</strong> - ślinianki przyuszne i podżuchwowe pod kątem kamicy ślinianek (sialolithiasis), stanów zapalnych, torbieli oraz zmian ogniskowych. W wykrywaniu kamicy USG jest metodą obrazową pierwszego wyboru o wysokiej dokładności (Kim i wsp., 2022).</li>
          <li><strong>Tarczyca</strong> - guzki, echogeniczność miąższu i objętość gruczołu. Cechy ryzyka guzka opisuje się według europejskiego systemu EU-TIRADS (Russ i wsp., 2017); pogłębioną ocenę zapewnia celowane <Link href="/usg/tarczyca/">USG tarczycy</Link>.</li>
          <li><strong>Tkanki miękkie</strong> - torbiele, tłuszczaki i zmiany wrodzone okolicy szyjnej, na przykład torbiel przewodu tarczowo-językowego czy torbiel skrzelopochodna.</li>
          <li><strong>Naczynia i okolica krtani</strong> - duże naczynia szyi ocenia się orientacyjnie, a w wybranym zakresie obrazuje się również powierzchowne struktury okolicy krtani.</li>
        </ul>
        <p>Obraz ultrasonograficzny pozwala opisać cechy zmian, lecz sam w sobie nie rozpoznaje konkretnej choroby. Charakter zmian podejrzanych potwierdza dopiero biopsja aspiracyjna cienkoigłowa (BAC) i badanie histopatologiczne, a całość interpretuje lekarz.</p>
      </>
    ),
  },
  {
    title: 'Wskazania do USG szyi',
    tocLabel: 'Wskazania',
    content:
      (
      <>
        <p>Wskazaniem do USG szyi są dolegliwości i objawy zlokalizowane w okolicy szyjnej oraz kontrola wcześniej opisanych zmian. Badanie bywa zalecane zarówno w diagnostyce wstępnej, jak i w obserwacji znanych już nieprawidłowości.</p>
        <ul>
          <li>Wyczuwalny guzek, zgrubienie lub opór w obrębie szyi.</li>
          <li>Powiększone węzły chłonne lub ich utrzymujące się powiększenie.</li>
          <li>Obrzęk, asymetria lub niepokojąca zmiana zarysu szyi.</li>
          <li>Ból lub obrzęk w okolicy ślinianek, zwłaszcza nasilający się podczas posiłków.</li>
          <li>Trudności w przełykaniu (dysfagia) lub przewlekła chrypka wymagające diagnostyki obrazowej.</li>
          <li>Kontrola wcześniej opisanych zmian ogniskowych i monitorowanie ich wielkości.</li>
          <li>Objawy mogące sugerować zaburzenia ze strony tarczycy.</li>
        </ul>
        <h3>Kiedy warto zgłosić się szybciej?</h3>
        <p>Część objawów warto skonsultować z lekarzem bez zwłoki. Należą do nich szybko powiększający się guzek, gorączka, nocne poty lub niezamierzona utrata masy ciała towarzyszące zmianie na szyi. Nie przesądzają one o poważnej chorobie, ale wskazują, że ocenę najlepiej przyspieszyć.</p>
        <p>O zasadności i zakresie badania decyduje lekarz na podstawie wywiadu i badania przedmiotowego. USG szyi można jednak wykonać prywatnie również z własnej inicjatywy, bez skierowania.</p>
      </>
    ),
  },
  {
    title: 'USG szyi a badania celowane',
    tocLabel: 'Porównanie badań',
    content:
      (
      <>
        <p>USG szyi jest badaniem parasolowym, które przeglądowo ocenia całą okolicę szyjną, natomiast szczegółowa analiza pojedynczej struktury należy do badań celowanych. Taki podział pozwala dobrać zakres badania do konkretnego problemu klinicznego.</p>
        <p>Gdy uwagę skupia jeden narząd, sięga się po badanie ukierunkowane. Dokładniejszą ocenę gruczołu tarczowego, jego guzków i objętości umożliwia <Link href="/usg/tarczyca/">USG tarczycy</Link>. Pogłębioną analizę powiększonych lub zmienionych węzłów zapewnia <Link href="/usg/wezly-chlonne/">USG węzłów chłonnych</Link>, a ukierunkowaną ocenę gruczołów ślinowych pod kątem kamicy i stanów zapalnych - <Link href="/usg/slinianki/">USG ślinianek</Link>. Ocena przepływu w naczyniach i blaszek miażdżycowych to z kolei <Link href="/usg/doppler-tetnice-szyjne/">USG Doppler tętnic szyjnych</Link>.</p>
        <table>
          <tbody>
            <tr>
              <th>Badanie</th>
              <th>Zakres oceny</th>
              <th>Kiedy wybrać</th>
            </tr>
            <tr>
              <td>USG szyi</td>
              <td>przeglądowo: węzły chłonne, ślinianki, tarczyca, tkanki miękkie</td>
              <td>szeroka ocena okolicy lub niezlokalizowany objaw</td>
            </tr>
            <tr>
              <td>USG tarczycy</td>
              <td>gruczoł tarczowy, guzki, objętość, echogeniczność</td>
              <td>problem dotyczący wyłącznie tarczycy</td>
            </tr>
            <tr>
              <td>USG węzłów chłonnych</td>
              <td>szczegółowa ocena węzłów (szyja, pachy, pachwiny)</td>
              <td>powiększone lub podejrzane węzły</td>
            </tr>
            <tr>
              <td>USG ślinianek</td>
              <td>ślinianki przyuszne i podżuchwowe</td>
              <td>kamica, zapalenie, guz ślinianki</td>
            </tr>
            <tr>
              <td>USG Doppler tętnic szyjnych</td>
              <td>przepływ krwi, blaszki miażdżycowe</td>
              <td>ocena naczyń i ryzyka naczyniowego</td>
            </tr>
          </tbody>
        </table>
        <p>W ramach USG szyi duże naczynia uwidacznia się jedynie orientacyjnie, dlatego pełna ocena układu naczyniowego wykracza poza zakres tego badania i należy do diagnostyki dopplerowskiej.</p>
      </>
    ),
  },
  {
    title: 'Jak przygotować się do USG szyi?',
    tocLabel: 'Przygotowanie',
    content:
      (
      <>
        <p>USG szyi nie wymaga żadnego specjalnego przygotowania, a samo badanie można wykonać o dowolnej porze dnia. Nie trzeba być na czczo ani modyfikować przyjmowanych leków, co ułatwia umówienie wizyty.</p>
        <p>Przed badaniem zaleca się zdjęcie biżuterii z szyi (łańcuszków, naszyjników) oraz odsłonięcie okolicy szyjnej, dlatego warto założyć ubranie z luźnym dekoltem. Pomocne jest odpięcie kołnierza i zsunięcie odzieży zasłaniającej obojczyki, a panów z gęstym zarostem lekarz może poprosić o ogolenie okolicy podżuchwowej dla wyraźniejszego obrazu.</p>
        <p>Aby USG szyi miało wartość porównawczą, warto zabrać ze sobą poprzednie wyniki badań obrazowych oraz dokumentację dotyczącą wcześniej opisanych zmian. Dotyczy to także wyników badań laboratoryjnych, na przykład hormonów tarczycy, jeśli były wykonywane.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega USG szyi i kiedy wynik?',
    tocLabel: 'Przebieg i wynik',
    content:
      (
      <>
        <p>USG szyi przebiega w pozycji leżącej z lekko odchyloną do tyłu głową, co eksponuje przednią powierzchnię szyi i ułatwia dostęp do ocenianych struktur. Badanie jest bezbolesne i nie wiąże się z promieniowaniem jonizującym.</p>
        <p>Na skórę nanosi się żel sprzęgający, który umożliwia przenikanie fali ultradźwiękowej do tkanek, a następnie przesuwa głowicę liniową po okolicy szyi i obrazuje struktury w płaszczyźnie poprzecznej i podłużnej. Wykonanie USG szyi trwa zwykle kilkanaście minut, w zależności od liczby ocenianych struktur i zakresu badania.</p>
        <p>Bezpośrednio po badaniu pacjent otrzymuje pisemny opis sporządzony przez lekarza wykonującego ultrasonografię. USG szyi nie zastępuje konsultacji lekarskiej - wynik interpretuje się w kontekście całości obrazu klinicznego, a w razie potrzeby lekarz zleca dalszą diagnostykę. Pełną ofertę badań prezentuje <Link href="/usg/">pracownia USG we Wrocławiu</Link>.</p>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo i ograniczenia USG szyi',
    tocLabel: 'Bezpieczeństwo i ograniczenia',
    content:
      (
      <>
        <p>USG szyi jest badaniem bezpiecznym i nieinwazyjnym - nie wykorzystuje promieniowania jonizującego, dlatego nie ma typowych przeciwwskazań i w razie potrzeby można je powtarzać. Diagnostyczne USG uznaje się za bezpieczne także w ciąży, gdy badanie jest medycznie wskazane. Mimo to każda metoda obrazowa ma swoje granice.</p>
        <h3>Ograniczenia metody</h3>
        <p>USG szyi dobrze obrazuje struktury powierzchowne, ale nie odpowiada na każde pytanie kliniczne. Jego wynik zależy od doświadczenia osoby badającej i użytego sprzętu, a niektóre obszary pozostają poza zasięgiem oceny.</p>
        <ul>
          <li>Struktury zamostkowe i zaprzełykowe, na przykład wole zamostkowe, są słabo dostępne - ich rozległość ocenia tomografia komputerowa lub rezonans magnetyczny.</li>
          <li>Duże naczynia szyi uwidacznia się tylko orientacyjnie; pełna ocena przepływu należy do badania dopplerowskiego.</li>
          <li>USG opisuje cechy zmian i pozwala oszacować ryzyko, ale nie ustala rozpoznania - dokładność różnicowania bywa umiarkowana (na przykład dla węzłów chłonnych), a charakter zmiany podejrzanej potwierdza biopsja aspiracyjna cienkoigłowa i badanie histopatologiczne.</li>
          <li>Powiększony węzeł chłonny czy wyczuwalny guzek nie oznacza automatycznie choroby nowotworowej - wiele takich zmian ma charakter odczynowy lub łagodny.</li>
        </ul>
        <p>Z tego względu USG szyi traktuje się jako badanie pierwszego rzutu, którego wynik zawsze zestawia się z obrazem klinicznym. O dalszym postępowaniu i ewentualnej pogłębionej diagnostyce decyduje lekarz.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O zasadności badania, interpretacji wyniku oraz ewentualnej dalszej diagnostyce decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje USG szyi we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content:
      (
      <>
        <p>Cena USG szyi we Wrocławiu zależy od zakresu badania i liczby ocenianych struktur, dlatego ustala się ją indywidualnie. Aktualny koszt znajdziesz w zakładce <Link href="/cennik/">cennik</Link>, a dokładną kwotę potwierdzisz podczas rejestracji.</p>
        <p>Badanie wykonujemy prywatnie, bez skierowania, w pracowni USG Bas Clinic we Wrocławiu. Dogodny termin <Link href="/rejestracja/">umówisz online</Link> lub telefonicznie, a pełną ofertę diagnostyki obrazowej przedstawia <Link href="/usg/">pracownia USG</Link>.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content:
      (
      <ol>
        <li>Todsen T, Ewertsen C, Jenssen C, Evans R, Kuenzel J. Head and Neck Ultrasound - EFSUMB Training Recommendations for the Practice of Medical Ultrasound in Europe. Ultrasound International Open 2022; 8(1): E29-E34 (PMID 36212171; DOI 10.1055/a-1922-6778).</li>
        <li>Russ G, Bonnema SJ, Erdogan MF, Durante C, Ngu R, Leenhardt L. European Thyroid Association Guidelines for Ultrasound Malignancy Risk Stratification of Thyroid Nodules in Adults: The EU-TIRADS. European Thyroid Journal 2017; 6(5): 225-237 (PMID 29167761; DOI 10.1159/000478927).</li>
        <li>Tessler FN, Middleton WD, Grant EG i wsp. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper of the ACR TI-RADS Committee. Journal of the American College of Radiology 2017; 14(5): 587-595 (PMID 28372962; DOI 10.1016/j.jacr.2017.01.046).</li>
        <li>Ahuja AT, Ying M, Ho SY i wsp. Ultrasound of malignant cervical lymph nodes. Cancer Imaging 2008; 8(1): 48-56 (PMID 18390388; DOI 10.1102/1470-7330.2008.0006).</li>
        <li>Bialek EJ, Jakubowski W, Zajkowski P, Szopinski KT, Osmolski A. US of the Major Salivary Glands: Anatomy and Spatial Relationships, Pathologic Conditions, and Pitfalls. RadioGraphics 2006; 26(3): 745-763 (DOI 10.1148/rg.263055024).</li>
        <li>Kim DH, Kang JM, Kim SW i wsp. Utility of Ultrasonography for Diagnosis of Salivary Gland Sialolithiasis: A Meta-Analysis. The Laryngoscope 2022; 132(9): 1785-1791 (PMID 35043982; DOI 10.1002/lary.30020).</li>
        <li>Spiesecke P, Neumann K, Wakonig K, Lerchbaumer MH. Contrast-enhanced ultrasound (CEUS) in characterization of inconclusive cervical lymph nodes: a meta-analysis and systematic review. Scientific Reports 2022; 12: 7804 (PMID 35551228; DOI 10.1038/s41598-022-11542-9).</li>
        <li>Trzebińska A, Dobruch-Sobczak K, Jakubowski W, Jędrzejowski M. Standardy badań ultrasonograficznych Polskiego Towarzystwa Ultrasonograficznego - aktualizacja. Badanie ultrasonograficzne tarczycy oraz biopsja tarczycy pod kontrolą ultrasonografii. Journal of Ultrasonography 2014; 14(56): 49-60.</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Co obejmuje USG szyi?',
    answer:
      'USG szyi obejmuje przeglądową ocenę tkanek miękkich całej okolicy szyjnej. W badaniu uwidacznia się tarczycę, węzły chłonne szyjne, ślinianki przyuszne i podżuchwowe oraz tkanki miękkie wraz z ewentualnymi zmianami ogniskowymi. Orientacyjnie ocenia się także okolicę przytarczyc i duże naczynia, jednak szczegółowa analiza pojedynczej struktury wymaga badania celowanego.',
  },
  {
    question: 'Czy USG szyi jest bezpieczne i bolesne?',
    answer:
      'USG szyi jest bezpieczne i bezbolesne. Badanie nie wykorzystuje promieniowania jonizującego, jest nieinwazyjne i powtarzalne, a jedynym odczuciem bywa chłód żelu na skórze. Diagnostyczne USG uznaje się za bezpieczne także w ciąży, gdy jest medycznie wskazane, dlatego nie ma typowych przeciwwskazań do tego badania.',
  },
  {
    question: 'Czym różni się USG szyi od USG tarczycy?',
    answer:
      'USG szyi różni się od USG tarczycy zakresem badania. USG szyi to badanie parasolowe, które przeglądowo ocenia całą okolicę szyjną, w tym węzły chłonne, ślinianki i tkanki miękkie. USG tarczycy jest natomiast badaniem celowanym, skupionym na szczegółowej ocenie gruczołu tarczowego, jego guzków i objętości. Jeśli problem dotyczy wyłącznie tarczycy, zwykle wybiera się badanie ukierunkowane.',
  },
  {
    question: 'Czy na USG szyi potrzebne jest skierowanie?',
    answer:
      'Na USG szyi skierowanie nie jest wymagane. Badanie wykonywane jest prywatnie, więc można je zarezerwować bez skierowania, również z własnej inicjatywy. Warto jednak zabrać wcześniejszą dokumentację medyczną oraz poprzednie wyniki badań obrazowych, jeśli badanie ma charakter kontrolny.',
  },
  {
    question: 'Ile kosztuje USG szyi we Wrocławiu?',
    answer:
      'Cena USG szyi we Wrocławiu zależy od zakresu badania i liczby ocenianych struktur, dlatego ustala się ją indywidualnie. Aktualny cennik dostępny jest w zakładce Cennik na stronie Bas Clinic oraz pod numerem 690 511 511, gdzie można też potwierdzić koszt i umówić termin.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG szyi?',
    answer:
      `USG szyi we Wrocławiu wykonasz w pracowni USG Bas Clinic przy ${CLINIC.address.street}. Badanie jest prywatne i nie wymaga skierowania, a termin umówisz telefonicznie pod numerem ${CLINIC.phone}. Pracownia przyjmuje od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, a koszt potwierdzisz w cenniku lub podczas rejestracji.`,
  },
];

export default function UsgSzyiPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG szyi we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG szyi to przeglądowe badanie tkanek miękkich szyi, w którym ocenia się węzły chłonne, ślinianki, tarczycę oraz inne struktury tej okolicy. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/szyja"
      schemaType={['MedicalTest', 'ImagingTest']}
      usesDevice="Ultrasonograf"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      childServices={RELATED}
      childServicesTitle="Powiązane badania USG"
      childServicesSubtitle="Diagnostyka USG"
    />
  );
}
