import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG tarczycy Wrocław - cena i wskazania',
  description:
    'USG tarczycy we Wrocławiu: bezbolesne, nieinwazyjne badanie guzków, struktury i objętości gruczołu tarczowego. Ocena ryzyka w skali EU-TIRADS. Sprawdź cenę.',
  path: '/usg/tarczyca/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG tarczycy' },
];

const RELATED = ['usg/szyja', 'usg/wezly-chlonne', 'usg/slinianki'].map(
  getServiceBySlug,
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG tarczycy?',
    tocLabel: 'Co to jest',
    content:
      (
      <>
        <p>USG tarczycy to nieinwazyjne badanie obrazowe gruczołu tarczowego falami ultradźwiękowymi, bez promieniowania jonizującego. Ultrasonografia tarczycy ocenia oba płaty oraz cieśń, czyli środkową część łączącą płaty, mierzy objętość gruczołu i uwidacznia guzki oraz zmiany ogniskowe.</p>
        <p>Badanie obrazuje strukturę i echogeniczność miąższu, czyli jego jasność w obrazie ultrasonograficznym. W opcji Doppler ocenia dodatkowo unaczynienie tarczycy i przepływ krwi w obrębie zmian. Objętość gruczołu odnosi się do wartości referencyjnych: według danych Światowej Organizacji Zdrowia górna granica normy wynosi orientacyjnie około 18 ml u kobiet i 25 ml u mężczyzn, a wynik zawsze interpretuje się dla konkretnego pacjenta.</p>
        <p>Ultrasonograficzne badanie tarczycy bywa nazywane USG gruczołu tarczowego. Jest to badanie celowane, skupione wyłącznie na tym narządzie, dlatego jest podstawowym narzędziem obrazowym w diagnostyce chorób tarczycy.</p>
      </>
    ),
  },
  {
    title: 'Co wykrywa USG tarczycy?',
    tocLabel: 'Co wykrywa',
    content:
      (
      <>
        <p>USG tarczycy uwidacznia guzki (lite, torbielowate oraz mieszane), wole, zmiany ogniskowe oraz rozlane zmiany struktury gruczołu. Badanie opisuje wielkość, lokalizację i liczbę zmian, ocenia echogeniczność miąższu oraz objętość tarczycy.</p>
        <p>Obniżona lub niejednorodna echogeniczność oraz wzmożone unaczynienie mogą towarzyszyć zapaleniom tarczycy, na przykład chorobie Hashimoto lub chorobie Gravesa-Basedowa, natomiast wole guzkowe objawia się obecnością licznych guzków. Żadna pojedyncza cecha nie rozstrzyga jednak sama o charakterze zmiany. Metaanaliza dokładności USG (Shi i wsp., 2022) wskazuje łączną czułość około 0,88 i swoistość około 0,86, przy czym wartość pojedynczych cech jest zmienna, dlatego ocenia się je razem.</p>
        <p><strong>USG tarczycy nie rozpoznaje raka tarczycy.</strong> Badanie pozwala ocenić ryzyko złośliwości guzka według klasyfikacji EU-TIRADS i może wskazać potrzebę dalszej diagnostyki. Charakter zmiany potwierdza dopiero biopsja aspiracyjna cienkoigłowa (BACC), a całość wyników interpretuje lekarz w zestawieniu z badaniami hormonalnymi.</p>
      </>
    ),
  },
  {
    title: 'EU-TIRADS, czyli ocena ryzyka guzków tarczycy',
    tocLabel: 'EU-TIRADS',
    content:
      (
      <>
        <p>EU-TIRADS to europejska klasyfikacja oceniająca ryzyko złośliwości guzka tarczycy na podstawie jego obrazu w USG. Według wytycznych Europejskiego Towarzystwa Tarczycowego (Russ i wsp., 2017) system przypisuje guzkowi kategorię ryzyka i pomaga zdecydować, czy potrzebna jest biopsja cienkoigłowa.</p>
        <p>Do cech wysokiego ryzyka zalicza się nieowalny kształt (w tym guzek wyższy niż szerszy), nieregularne granice, mikrozwapnienia oraz znaczną hipoechogeniczność. Im więcej takich cech, tym wyższa kategoria i większe szacowane ryzyko. Próg wielkości, od którego rozważa się biopsję, zależy od kategorii.</p>
        <table>
          <tbody>
            <tr>
              <th>Kategoria EU-TIRADS</th>
              <th>Typowy obraz w USG</th>
              <th>Szacowane ryzyko złośliwości</th>
              <th>Próg biopsji (BACC)</th>
            </tr>
            <tr>
              <td>2, łagodna</td>
              <td>czysta torbiel lub zmiana gąbczasta</td>
              <td>bliskie 0%</td>
              <td>zwykle bez biopsji</td>
            </tr>
            <tr>
              <td>3, niskie ryzyko</td>
              <td>owalna, gładkie granice, izo- lub hiperechogeniczna</td>
              <td>2-4%</td>
              <td>od 20 mm</td>
            </tr>
            <tr>
              <td>4, pośrednie ryzyko</td>
              <td>owalna, gładkie granice, lekko hipoechogeniczna</td>
              <td>6-17%</td>
              <td>od 15 mm</td>
            </tr>
            <tr>
              <td>5, wysokie ryzyko</td>
              <td>co najmniej jedna cecha wysokiego ryzyka</td>
              <td>26-87%</td>
              <td>od 10 mm</td>
            </tr>
          </tbody>
        </table>
        <p>Klasyfikacja porządkuje opis i ułatwia porównanie wyników między ośrodkami, ale sama nie jest rozpoznaniem. Ostateczną decyzję o biopsji i dalszym postępowaniu podejmuje lekarz, który bierze pod uwagę wielkość guzka, objawy, wyniki hormonalne i obciążenia indywidualne.</p>
      </>
    ),
  },
  {
    title: 'Wskazania do USG tarczycy',
    tocLabel: 'Wskazania',
    content:
      (
      <>
        <p>Wskazaniem do USG tarczycy jest wyczuwalny guzek na szyi, powiększenie tarczycy lub wole, a także nieprawidłowe wyniki badań hormonalnych (TSH, FT3, FT4). Badanie wykonuje się również w diagnostyce objawów nadczynności oraz niedoczynności tarczycy.</p>
        <ul>
          <li>wyczuwalny guzek lub niesymetryczne powiększenie szyi,</li>
          <li>nieprawidłowe stężenia hormonów tarczycy i TSH,</li>
          <li>objawy nadczynności (kołatanie serca, chudnięcie, drżenie rąk),</li>
          <li>objawy niedoczynności (osłabienie, senność, przyrost masy ciała),</li>
          <li>monitorowanie znanych guzków oraz wola guzkowego,</li>
          <li>kontrola po leczeniu chorób tarczycy lub po zabiegach operacyjnych.</li>
        </ul>
        <p>Ultrasonograficzne badanie tarczycy bywa też zlecane u osób obciążonych rodzinnie chorobami tarczycy. O zasadności badania w konkretnym przypadku decyduje lekarz.</p>
      </>
    ),
  },
  {
    title: 'Jak przygotować się do USG tarczycy i jak przebiega badanie?',
    tocLabel: 'Przygotowanie i przebieg',
    content:
      (
      <>
        <p>USG tarczycy nie wymaga specjalnego przygotowania: nie trzeba być na czczo ani odstawiać leków, a badanie można wykonać o dowolnej porze dnia. Warto zdjąć biżuterię z okolicy szyi i ubrać się tak, aby łatwo odsłonić tę okolicę.</p>
        <p>Przydatne jest przyniesienie poprzednich wyników: opisów wcześniejszych USG, wyników badań hormonalnych oraz dokumentacji leczenia tarczycy, co ułatwia ocenę dynamiki zmian. Badanie przebiega w pozycji leżącej, z lekko odchyloną do tyłu głową. Na skórę szyi nakłada się żel sprzęgający, a obrazowanie wykonuje głowicą liniową o wysokiej rozdzielczości.</p>
        <p>Całość trwa zwykle kilkanaście minut i jest bezbolesna. Wynik w formie opisu sporządza lekarz wykonujący badanie. Opis ultrasonograficzny nie zastępuje konsultacji: zestawia się go z wywiadem, badaniem palpacyjnym i wynikami hormonalnymi.</p>
      </>
    ),
  },
  {
    title: 'USG tarczycy a USG szyi',
    tocLabel: 'USG tarczycy a szyi',
    content:
      (
      <>
        <p>USG tarczycy to badanie celowane wyłącznie na gruczoł tarczowy, natomiast <Link href="/usg/szyja/">USG szyi</Link> jest badaniem parasolowym obejmującym szerszy obszar tej okolicy. Ocena szyi obejmuje poza tarczycą także węzły chłonne, ślinianki oraz tkanki miękkie szyi.</p>
        <p>Wybór zakresu zależy od celu diagnostycznego. Jeśli ocena dotyczy samego gruczołu tarczowego oraz guzków tarczycy, wystarcza ultrasonografia tarczycy. Gdy konieczna jest szersza ocena okolicy szyi, wskazane jest badanie parasolowe.</p>
        <p>W razie stwierdzenia nieprawidłowych lub podejrzanych węzłów chłonnych podczas oceny szyi pomocne bywa <Link href="/usg/wezly-chlonne/">USG węzłów chłonnych</Link>, które szczegółowo charakteryzuje węzły szyjne. O właściwym zakresie badania decyduje lekarz na podstawie objawów i dotychczasowych wyników.</p>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo, ograniczenia i powtarzanie badania',
    tocLabel: 'Bezpieczeństwo i ograniczenia',
    content:
      (
      <>
        <p>USG tarczycy jest bezpieczne: nie wykorzystuje promieniowania jonizującego, jest nieinwazyjne i można je powtarzać wielokrotnie. Nie ma typowych przeciwwskazań, a badanie wykonuje się także u kobiet w ciąży, gdy istnieją wskazania kliniczne.</p>
        <p>Badanie ma jednak ograniczenia. Wynik zależy od jakości aparatu i doświadczenia osoby wykonującej (jest zależne od operatora), a sam obraz nie rozpoznaje raka ani nie zastępuje oznaczeń hormonalnych. Jak wynika z przeglądów dokładności (Shi i wsp., 2022), żadna pojedyncza cecha nie przesądza o złośliwości, dlatego ocenę prowadzi się łącznie, a w razie potrzeby kieruje na biopsję cienkoigłową.</p>
        <p>Częstość powtarzania zależy od rozpoznania i kategorii ryzyka guzka. Zmiany łagodne zwykle obserwuje się kontrolnie w odstępach ustalanych przez lekarza, a guzki o wyższym ryzyku monitoruje się ściślej lub kwalifikuje do biopsji. Indywidualny plan kontroli ustala lekarz prowadzący.</p>
      </>
    ),
  },
  {
    title: 'Cena USG tarczycy we Wrocławiu',
    tocLabel: 'Cena we Wrocławiu',
    content:
      (
      <>
        <p>Cena USG tarczycy we Wrocławiu zależy od zakresu badania, między innymi od tego, czy obejmuje ocenę przepływu w opcji Doppler. Badanie wykonujemy prywatnie, dlatego nie jest potrzebne skierowanie, a termin można zaplanować szybko.</p>
        <p>Aktualne stawki podajemy w zakładce <Link href="/cennik/">cennik</Link>, a pełną ofertę diagnostyki obrazowej znajdziesz na stronie <Link href="/usg/">pracowni USG we Wrocławiu</Link>. Dogodny termin badania tarczycy potwierdzisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie.</p>
        <p><strong>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej.</strong> Zakres badania, interpretację wyniku oraz dalsze postępowanie ustala lekarz na podstawie pełnego obrazu klinicznego.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content:
      (
      <ol>
        <li>Russ G. i wsp. European Thyroid Association Guidelines for Ultrasound Malignancy Risk Stratification of Thyroid Nodules in Adults: The EU-TIRADS. Eur Thyroid J 2017; 6(5): 225-237 (PMID 29167761; DOI 10.1159/000478927).</li>
        <li>Shi Y. i wsp. Accuracy of Ultrasound Diagnosis of Benign and Malignant Thyroid Nodules: A Systematic Review and Meta-Analysis. Int J Clin Pract 2022 (PMC9489364).</li>
        <li>Wartości referencyjne objętości tarczycy w USG. Przegląd, wraz z górną granicą normy wg WHO (Gutekunst i wsp.); PMID 37813348.</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Czy do USG tarczycy trzeba być na czczo?',
    answer:
      'Do USG tarczycy nie trzeba być na czczo. Badanie nie wymaga specjalnego przygotowania, można je wykonać o dowolnej porze dnia, bez odstawiania leków. Zaleca się jedynie zdjąć biżuterię z okolicy szyi i przynieść poprzednie wyniki badań tarczycy.',
  },
  {
    question: 'Czy USG tarczycy wykrywa raka tarczycy?',
    answer:
      'USG tarczycy nie rozpoznaje raka tarczycy. Badanie ocenia cechy ryzyka guzków i klasyfikuje je według skali EU-TIRADS, co może wskazać potrzebę dalszej diagnostyki. Charakter zmiany potwierdza dopiero biopsja aspiracyjna cienkoigłowa (BACC) interpretowana przez lekarza.',
  },
  {
    question: 'Co oznacza wynik EU-TIRADS w opisie USG tarczycy?',
    answer:
      'EU-TIRADS to klasyfikacja ryzyka złośliwości guzka tarczycy na podstawie obrazu USG. Kategorie od 2 do 5 odpowiadają rosnącemu ryzyku i pomagają lekarzowi zdecydować, czy guzek wymaga biopsji cienkoigłowej. Sama klasyfikacja nie jest rozpoznaniem ani potwierdzeniem nowotworu.',
  },
  {
    question: 'Czy USG tarczycy boli?',
    answer:
      'USG tarczycy nie boli. Badanie jest nieinwazyjne, polega na przesuwaniu głowicy po skórze szyi pokrytej żelem i nie wykorzystuje promieniowania. Trwa zwykle kilkanaście minut i można je bezpiecznie powtarzać, także u kobiet w ciąży przy wskazaniach klinicznych.',
  },
  {
    question: 'Czy na USG tarczycy potrzebne jest skierowanie?',
    answer:
      'Na USG tarczycy nie jest potrzebne skierowanie. Badanie tarczycy wykonujemy prywatnie, dlatego można je zaplanować bez skierowania od lekarza i umówić w dogodnym, często szybkim terminie.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG tarczycy?',
    answer:
      `USG tarczycy we Wrocławiu wykonasz w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online, a przychodnia pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function UsgTarczycyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG tarczycy we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG tarczycy to bezbolesne badanie oceniające strukturę, objętość i echogeniczność gruczołu tarczowego oraz ewentualne guzki. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/tarczyca"
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
