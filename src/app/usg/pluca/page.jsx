import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'USG płuc Wrocław – cena i przebieg',
  description:
    'USG płuc we Wrocławiu (ul. Opatowicka 132). Ultrasonografia płuc ocenia płyn w jamie opłucnej i zmiany zapalne, bezpiecznie i bez promieniowania. Umów termin.',
  path: '/usg/pluca/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG płuc' },
];

const RELATED = ['usg/serce', 'usg/jama-brzuszna'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG płuc?',
    content:
      (
      <>
        <p>USG płuc to badanie ultrasonograficzne klatki piersiowej, które ocenia opłucną oraz obwodowe, przylegające do ściany klatki piersiowej partie płuc. <strong>Ultrasonografia płuc</strong> wykorzystuje fale ultradźwiękowe i nie naraża pacjenta na promieniowanie jonizujące.</p>
        <p>Powietrze w prawidłowym płucu silnie rozprasza fale ultradźwiękowe, dlatego USG nie obrazuje całego miąższu płucnego tak jak tomografia komputerowa. Badanie opiera się głównie na ocenie charakterystycznych artefaktów (między innymi <strong>linii A</strong> i <strong>linii B</strong>) oraz zmian w obrębie opłucnej, co w wielu sytuacjach klinicznych dostarcza przydatnych informacji.</p>
        <p>Bezpieczeństwo i możliwość wykonania przy łóżku pacjenta sprawiają, że ultrasonografia płuc bywa przydatna u kobiet w ciąży oraz u dzieci, a także w szybkiej ocenie przyłóżkowej (na przykład w protokole BLUE). Badanie w naszej <Link href="/usg/">pracowni USG we Wrocławiu</Link> wykonuje i opisuje lekarz, zgodnie ze standardami Polskiego Towarzystwa Ultrasonograficznego.</p>
      </>
    ),
  },
  {
    title: 'Co wykrywa USG płuc? Płyn w opłucnej, linie B i odma',
    tocLabel: 'Co wykrywa USG płuc',
    content:
      (
      <>
        <p>USG płuc wykrywa przede wszystkim nieprawidłowości w obrębie jamy opłucnej oraz zmiany położone obwodowo, przy ścianie klatki piersiowej. Badanie sprawdza się tam, gdzie potrzebna jest szybka i bezpieczna ocena bez promieniowania.</p>
        <ul>
          <li><strong>płyn w jamie opłucnej</strong> oraz jego orientacyjną ilość, co bywa pomocne przy planowaniu nakłucia (punkcji opłucnej);</li>
          <li>cechy <strong>zagęszczeń (konsolidacji) zapalnych</strong> w obwodowych partiach płuc, na przykład w przebiegu zapalenia płuc;</li>
          <li>nasilenie <strong>linii B</strong>, które towarzyszą zastojowi w krążeniu płucnym oraz zmianom śródmiąższowym (zespół śródmiąższowy);</li>
          <li>cechy mogące wskazywać na <strong>odmę opłucnową</strong>, ocenianą między innymi na podstawie obecności lub braku ślizgania opłucnej.</li>
        </ul>
        <p>Zakres zastosowań ultrasonografii płuc opisują międzynarodowe rekomendacje point-of-care lung ultrasound (Volpicelli i wsp., 2012). USG płuc ocenia jednak głównie struktury powierzchowne i nie rozpoznaje samodzielnie nowotworu płuca. Wynik interpretuje lekarz w odniesieniu do obrazu klinicznego oraz pozostałych badań.</p>
      </>
    ),
  },
  {
    title: 'Wskazania do USG płuc – kiedy wykonać badanie?',
    tocLabel: 'Wskazania',
    content:
      (
      <>
        <p>Wskazaniem do USG płuc są najczęściej objawy ze strony układu oddechowego oraz potrzeba szybkiej oceny jamy opłucnej. O wykonaniu badania decyduje lekarz na podstawie obrazu klinicznego.</p>
        <ul>
          <li>duszność oraz ból w klatce piersiowej nasilający się przy oddychaniu;</li>
          <li>podejrzenie obecności płynu w jamie opłucnej oraz monitorowanie jego ilości;</li>
          <li>ocena i kontrola przebiegu zapalenia płuc;</li>
          <li>kontrola po nakłuciu opłucnej oraz przy planowaniu takiego zabiegu;</li>
          <li>sytuacje, w których wskazane jest ograniczenie ekspozycji na promieniowanie, na przykład u kobiet w ciąży lub u dzieci.</li>
        </ul>
        <p>USG płuc bywa elementem szerszej diagnostyki układu oddechowego i krążenia. W razie potrzeby uzupełnia je ocena serca, którą umożliwia <Link href="/usg/serce/">USG serca (echokardiografia)</Link>.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i ograniczenia USG płuc',
    tocLabel: 'Przeciwwskazania i ograniczenia',
    content:
      (
      <>
        <p>USG płuc nie ma typowych przeciwwskazań. Jest badaniem nieinwazyjnym i nie wykorzystuje promieniowania jonizującego, dlatego w razie potrzeby można je powtarzać. Warto natomiast znać ograniczenia diagnostyczne oraz sytuacje, które utrudniają ocenę.</p>
        <h3>Ograniczenia diagnostyczne</h3>
        <p>Ultrasonografia płuc ocenia przede wszystkim opłucną i powierzchowne partie płuc. Zmiany położone głęboko w miąższu, otoczone powietrzem, pozostają poza zasięgiem badania, a wynik zależy też od doświadczenia osoby wykonującej. USG płuc nie zastępuje pełnej diagnostyki obrazowej i nie rozpoznaje samodzielnie nowotworu płuca.</p>
        <h3>Sytuacje utrudniające badanie</h3>
        <ul>
          <li>rozległa rozedma podskórna albo opatrunki i rany w ocenianej okolicy;</li>
          <li>znaczna otyłość, która osłabia obraz struktur położonych głębiej;</li>
          <li>brak współpracy przy zmianie pozycji lub spokojnym oddychaniu.</li>
        </ul>
        <p>O kwalifikacji do badania i interpretacji wyniku decyduje lekarz, biorąc pod uwagę objawy oraz pozostałe wyniki.</p>
      </>
    ),
  },
  {
    title: 'USG płuc a RTG i tomografia komputerowa klatki piersiowej',
    tocLabel: 'USG płuc a RTG i TK',
    content:
      (
      <>
        <p>USG płuc, RTG oraz tomografia komputerowa (TK) klatki piersiowej to metody, które wzajemnie się uzupełniają. Ultrasonografia płuc jest dostępna od razu przy pacjencie, a przy ocenie płynu w jamie opłucnej bywa bardziej czuła niż klasyczne zdjęcie rentgenowskie.</p>
        <p>Przewaga USG dotyczy zwłaszcza niewielkich wysięków: badanie ultrasonograficzne uwidacznia już kilkanaście do kilkudziesięciu mililitrów płynu, podczas gdy zdjęcie RTG w pozycji leżącej często wykrywa go dopiero przy znacznie większej objętości. W diagnostyce zapalenia płuc metaanaliza (Ye i wsp., 2015) wykazała wyższą czułość USG niż zdjęcia RTG, a przewagę ultrasonografii w wykrywaniu płynu w opłucnej potwierdza nowszy przegląd systematyczny (Zaki i wsp., 2024).</p>
        <p>USG płuc nie zastępuje jednak RTG ani TK. Zmiany położone głęboko w miąższu otoczonym powietrzem oraz pełna ocena struktur klatki piersiowej wymagają badań rentgenowskich. Dlatego ultrasonografię płuc warto traktować jako badanie celowane i uzupełniające, a o wyborze metody każdorazowo decyduje lekarz.</p>
        <table>
          <tbody>
            <tr>
              <th>Cecha</th>
              <th>USG płuc</th>
              <th>RTG klatki</th>
              <th>TK klatki</th>
            </tr>
            <tr>
              <td>Promieniowanie jonizujące</td>
              <td>nie</td>
              <td>tak</td>
              <td>tak (wyższa dawka)</td>
            </tr>
            <tr>
              <td>Czułość na mały płyn w opłucnej</td>
              <td>wysoka</td>
              <td>ograniczona</td>
              <td>wysoka</td>
            </tr>
            <tr>
              <td>Ocena zmian głębokich w miąższu</td>
              <td>ograniczona</td>
              <td>częściowa</td>
              <td>pełna</td>
            </tr>
            <tr>
              <td>Badanie przy łóżku pacjenta</td>
              <td>tak</td>
              <td>częściowo</td>
              <td>nie</td>
            </tr>
            <tr>
              <td>Powtarzalność w monitorowaniu</td>
              <td>wysoka</td>
              <td>ograniczona</td>
              <td>ograniczona</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo badania – USG płuc w ciąży i u dzieci',
    tocLabel: 'Bezpieczeństwo',
    content:
      (
      <>
        <p>USG płuc jest badaniem bezpiecznym i bezbolesnym. Wykorzystuje fale ultradźwiękowe, a nie promieniowanie jonizujące, dlatego można je powtarzać oraz wykonywać u kobiet w ciąży i u dzieci.</p>
        <p>Brak promieniowania sprawia, że ultrasonografia płuc dobrze nadaje się do monitorowania, na przykład do śledzenia ilości płynu w jamie opłucnej czy przebiegu zmian zapalnych w kolejnych dniach. Badanie można wtedy powtarzać bez kumulowania dawki, co bywa ważne u pacjentów wymagających częstej kontroli.</p>
        <p>Bezpieczeństwo oraz dostępność przy łóżku pacjenta to powody, dla których USG płuc bywa wybierane tam, gdzie wskazane jest ograniczenie ekspozycji na promieniowanie.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega USG płuc we Wrocławiu i ile kosztuje?',
    tocLabel: 'Przebieg i cena',
    content:
      (
      <>
        <p>USG płuc nie wymaga specjalnego przygotowania. Nie trzeba być na czczo, a stałe leki należy przyjmować zgodnie z zaleceniami lekarza. Wystarczy strój umożliwiający odsłonięcie klatki piersiowej oraz pleców.</p>
        <h3>Jak przebiega badanie?</h3>
        <p>Badanie wykonuje się zwykle w pozycji siedzącej lub leżącej, w zależności od ocenianej okolicy. Na skórę nakładany jest żel, a lekarz przesuwa głowicę wzdłuż przestrzeni międzyżebrowych po przedniej, bocznej i tylnej powierzchni klatki piersiowej. W trakcie badania można zostać poproszonym o spokojny oddech lub jego chwilowe wstrzymanie. USG płuc jest bezbolesne i trwa zwykle kilkanaście minut.</p>
        <h3>Ile kosztuje USG płuc?</h3>
        <p>Cena USG płuc zależy od zakresu badania. Aktualne stawki podajemy w <Link href="/cennik/">cenniku</Link>, a dogodny termin ustalisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie. Badanie bywa łączone z oceną innych narządów, na przykład z <Link href="/usg/jama-brzuszna/">USG jamy brzusznej</Link>, gdy wymaga tego sytuacja kliniczna.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O kwalifikacji do badania, jego przebiegu i interpretacji wyniku decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content:
      (
      <ol>
        <li>Volpicelli G. i wsp. International evidence-based recommendations for point-of-care lung ultrasound. Intensive Care Med 2012; 38(4): 577–591 (PMID 22392031).</li>
        <li>Ye X., Xiao H., Chen B., Zhang S.Y. Accuracy of Lung Ultrasonography versus Chest Radiography for the Diagnosis of Adult Community-Acquired Pneumonia: Review of the Literature and Meta-Analysis. PLoS One 2015; 10(6): e0130066 (PMID 26107512).</li>
        <li>Zaki H.A. i wsp. Advancement in pleura effusion diagnosis: a systematic review and meta-analysis of point-of-care ultrasound versus radiographic thoracic imaging. The Ultrasound Journal 2024.</li>
        <li>Standardy badań ultrasonograficznych Polskiego Towarzystwa Ultrasonograficznego oraz zalecenia dotyczące zastosowania ultrasonografii płuc w chorobach wewnętrznych (Buda N. i wsp., 2020).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG płuc?',
    answer:
      'USG płuc wykrywa przede wszystkim nieprawidłowości w obrębie jamy opłucnej oraz obwodowych partii płuc. Uwidacznia płyn w jamie opłucnej i pozwala ocenić jego ilość, cechy zagęszczeń zapalnych, nasilenie linii B towarzyszących zastojowi oraz cechy mogące wskazywać na odmę opłucnową. Badanie ocenia głównie struktury powierzchowne i nie rozpoznaje samodzielnie nowotworu płuca.',
  },
  {
    question: 'Czy USG płuc wykryje zapalenie płuc?',
    answer:
      'USG płuc uwidacznia cechy zagęszczeń zapalnych w obwodowych partiach płuc i bywa pomocne w ocenie oraz monitorowaniu zapalenia płuc; metaanalizy wskazują jego wysoką czułość. Badanie ocenia jednak głównie zmiany przy ścianie klatki piersiowej i nie obrazuje ognisk otoczonych powietrzem w głębi miąższu. Rozpoznanie stawia lekarz, uwzględniając objawy i pozostałe badania.',
  },
  {
    question: 'USG płuc czy RTG klatki piersiowej – co wybrać?',
    answer:
      'USG płuc i RTG klatki piersiowej uzupełniają się. USG jest bezpieczne, dostępne przy pacjencie i przy ocenie płynu w jamie opłucnej bywa bardziej czułe niż zdjęcie RTG, jednak nie obrazuje zmian położonych głęboko w miąższu otoczonym powietrzem. USG płuc nie zastępuje RTG ani tomografii komputerowej. O wyborze metody decyduje lekarz na podstawie objawów i celu badania.',
  },
  {
    question: 'Jak przygotować się do USG płuc?',
    answer:
      'USG płuc nie wymaga specjalnego przygotowania. Nie trzeba być na czczo, a stałe leki należy przyjmować zgodnie z zaleceniami lekarza. Wystarczy strój umożliwiający odsłonięcie klatki piersiowej i pleców. Badanie wykonuje się w pozycji siedzącej lub leżącej, a lekarz przesuwa głowicę pokrytą żelem wzdłuż przestrzeni międzyżebrowych.',
  },
  {
    question: 'Czy USG płuc jest bezpieczne?',
    answer:
      'USG płuc jest bezpieczne i bezbolesne. Wykorzystuje fale ultradźwiękowe, a nie promieniowanie jonizujące, dlatego można je powtarzać oraz wykonywać u kobiet w ciąży i u dzieci. Z tego powodu badanie bywa szczególnie przydatne tam, gdzie wskazane jest ograniczenie ekspozycji na promieniowanie.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG płuc?',
    answer:
      `USG płuc we Wrocławiu wykonujemy w ${CLINIC.name} przy ${CLINIC.address.street} (${CLINIC.address.city}). Termin badania ustalisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online, a aktualny cennik znajdziesz w zakładce Cennik. Pracownia USG czynna jest od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function UsgPlucPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG płuc we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG płuc to bezpieczne badanie ultrasonograficzne klatki piersiowej, oceniające opłucną oraz obwodowe partie płuc, w tym płyn w jamie opłucnej. Wykonujemy je w Bas Clinic we Wrocławiu, bez promieniowania."
      slug="usg/pluca"
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
