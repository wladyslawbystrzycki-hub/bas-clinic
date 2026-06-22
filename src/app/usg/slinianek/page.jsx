import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG ślinianek Wrocław - badanie | Bas Clinic',
  description:
    'USG ślinianek we Wrocławiu w Bas Clinic. Bezbolesne badanie ślinianek przyusznych i podżuchwowych - kamica, stany zapalne, guzy. Bez skierowania, umów termin.',
  path: '/usg/slinianek/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG ślinianek' },
];

const RELATED = ['usg/szyi', 'usg/tarczycy', 'usg/wezlow-chlonnych'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG ślinianek?',
    content:
      '<p>USG ślinianek to ultrasonograficzne badanie gruczołów ślinowych, które pozwala ocenić ich budowę za pomocą fal ultradźwiękowych, bez promieniowania jonizującego. Ultrasonografia ślinianek wykorzystuje głowicę liniową o wysokiej rozdzielczości, dzięki czemu obrazowanie ślinianek uwidacznia nawet drobne zmiany w obrębie tych narządów.</p><p>Badanie USG ślinianek obejmuje przede wszystkim parzyste <strong>ślinianki przyuszne</strong> oraz <strong>ślinianki podżuchwowe</strong>, które ze względu na powierzchowne położenie są dobrze dostępne ocenie ultrasonograficznej. <strong>Ślinianki podjęzykowe oceniane są w ograniczonym zakresie</strong>, ponieważ leżą głęboko pod żuchwą, co utrudnia ich uwidocznienie głowicą ultrasonograficzną.</p><p>W trakcie badania ocenie podlegają również przewody wyprowadzające ślinę oraz okoliczne węzły chłonne. Taki zakres sprawia, że ultrasonografia gruczołów ślinowych stanowi podstawowe narzędzie obrazowe w diagnostyce ślinianek.</p>',
  },
  {
    title: 'Co wykrywa USG ślinianek?',
    content:
      '<p>USG ślinianek pozwala uwidocznić najczęstsze nieprawidłowości w obrębie gruczołów ślinowych, w tym kamicę, stany zapalne, torbiele oraz zmiany ogniskowe. Badanie ultrasonograficzne ocenia strukturę narządu i charakter widocznych zmian, jednak ostateczna interpretacja zawsze należy do lekarza.</p><ul><li><strong>Kamica ślinianek</strong> - złogi w przewodach wyprowadzających, które mogą utrudniać odpływ śliny i wywoływać dolegliwości.</li><li><strong>Stany zapalne i ropnie</strong> - badanie pomaga ocenić zasięg zapalenia oraz obecność ewentualnego zbiornika ropnego.</li><li><strong>Torbiele</strong> - dobrze odgraniczone zmiany płynowe w obrębie ślinianki.</li><li><strong>Zmiany ogniskowe i guzy</strong> - USG ocenia cechy zmiany (wielkość, granice, unaczynienie), ale <strong>nie rozpoznaje nowotworu ślinianki</strong>; charakter zmiany potwierdza dalsza diagnostyka.</li></ul><p>W przebiegu chorób autoimmunologicznych, takich jak zespół Sjögrena, badanie może uwidocznić typowe zmiany struktury ślinianek. Obraz ultrasonograficzny dostarcza wówczas informacji wspierających, lecz nie stanowi samodzielnego rozpoznania.</p>',
  },
  {
    title: 'Wskazania do USG ślinianek',
    content:
      '<p>Wskazaniem do USG ślinianek są przede wszystkim dolegliwości w okolicy gruczołów ślinowych oraz wyczuwalne zmiany wymagające oceny. Ultrasonograficzne badanie ślinianek bywa zlecane także w ramach kontroli wcześniej rozpoznanych nieprawidłowości.</p><ul><li>Obrzęk i ból okolicy ślinianki, zwłaszcza nasilający się podczas jedzenia, co może sugerować kamicę ślinianek.</li><li>Wyczuwalny guzek lub zgrubienie w okolicy przyusznej albo podżuchwowej.</li><li>Nawracające stany zapalne ślinianki.</li><li>Suchość w ustach w toku diagnostyki, w tym chorób autoimmunologicznych.</li><li>Kontrola znanych zmian ogniskowych lub monitorowanie po wcześniejszym leczeniu.</li></ul><p>O zasadności badania oraz interpretacji jego wyniku decyduje lekarz, uwzględniając całość obrazu klinicznego.</p>',
  },
  {
    title: 'Jak przygotować się do USG ślinianek?',
    content:
      '<p>USG ślinianek nie wymaga specjalnego przygotowania - nie trzeba być na czczo ani przyjmować żadnych leków przed badaniem. Diagnostyka ślinianek jest nieinwazyjna, dzięki czemu pacjent może zgłosić się o dowolnej porze dnia.</p><p>Warto zabrać ze sobą poprzednie wyniki badań obrazowych oraz dokumentację dotyczącą ślinianek, jeśli takie istnieją - ułatwia to porównanie obrazu i ocenę dynamiki zmian. Pomocne bywa również odpowiednie nawodnienie organizmu w dniu badania.</p>',
  },
  {
    title: 'USG ślinianek a USG szyi',
    content:
      '<p>USG ślinianek to badanie celowane, skupione wyłącznie na gruczołach ślinowych, podczas gdy <a href="/usg/szyi/">USG szyi</a> ma charakter parasolowy i obejmuje szerszy obszar tej okolicy. Wybór zakresu badania zależy od objawów oraz pytania klinicznego postawionego przez lekarza.</p><p>Jeżeli dolegliwości są zlokalizowane w obrębie ślinianki przyusznej lub podżuchwowej, zwykle wystarcza ukierunkowane USG gruczołów ślinowych. Gdy konieczna jest ocena szerszego rejonu szyi, w tym okolicznych struktur, lekarz może zalecić badanie obejmujące także <a href="/usg/wezlow-chlonnych/">USG węzłów chłonnych</a>.</p><p>Niekiedy ocena ślinianek prowadzona jest łącznie z badaniem sąsiednich narządów okolicy szyi, na przykład w ramach diagnostyki obejmującej <a href="/usg/tarczycy/">USG tarczycy</a>. O ostatecznym zakresie obrazowania decyduje lekarz na podstawie zgłaszanych objawów.</p>',
  },
  {
    title: 'Jak przebiega USG ślinianek i kiedy wynik?',
    content:
      '<p>USG ślinianek przebiega w pozycji leżącej, a badanie wykonuje się głowicą liniową przesuwaną po skórze pokrytej żelem. Procedura jest całkowicie bezbolesna, nie wiąże się z promieniowaniem jonizującym i zwykle trwa kilkanaście minut.</p><p>Po badaniu lekarz przygotowuje opis obrazu ultrasonograficznego ślinianek, który pacjent najczęściej otrzymuje bezpośrednio po wizycie. Wynik USG należy zawsze interpretować w kontekście obrazu klinicznego.</p><p>Ultrasonografia ślinianek nie zastępuje konsultacji lekarskiej, a wynik badania interpretuje lekarz. W razie potrzeby może on zalecić dalszą diagnostykę. Pełną ofertę dostępnych badań przedstawia <a href="/usg/">pracownia USG Bas Clinic we Wrocławiu</a>. Badanie wykonujemy przy ul. Opatowickiej 132 we Wrocławiu, a termin można ustalić pod numerem +48 690 511 511 lub sprawdzić aktualny <a href="/cennik/">cennik</a>.</p>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG ślinianek?',
    answer:
      'USG ślinianek wykrywa najczęstsze nieprawidłowości gruczołów ślinowych, takie jak kamica, stany zapalne, ropnie, torbiele oraz zmiany ogniskowe. Badanie ocenia strukturę ślinianek przyusznych i podżuchwowych oraz cechy widocznych zmian, jednak charakter zmiany ogniskowej potwierdza dalsza diagnostyka, a wynik interpretuje lekarz.',
  },
  {
    question: 'Czy USG ślinianek wykrywa kamicę ślinianek?',
    answer:
      'USG ślinianek pozwala uwidocznić kamicę ślinianek, czyli złogi w przewodach wyprowadzających ślinę, które mogą utrudniać jej odpływ. Badanie ultrasonograficzne jest pomocne zwłaszcza wtedy, gdy ból w okolicy ślinianki nasila się podczas jedzenia. Ostateczną ocenę i decyzję o postępowaniu podejmuje lekarz.',
  },
  {
    question: 'Czy do USG ślinianek trzeba się przygotować?',
    answer:
      'Do USG ślinianek nie trzeba się specjalnie przygotowywać - badanie nie wymaga bycia na czczo ani odstawiania leków. Warto zabrać ze sobą poprzednie wyniki badań obrazowych ślinianek, jeśli pacjent je posiada, oraz zadbać o odpowiednie nawodnienie w dniu wizyty.',
  },
  {
    question: 'Ile kosztuje USG ślinianek we Wrocławiu?',
    answer:
      'Cena USG ślinianek we Wrocławiu zależy od zakresu badania i ewentualnego objęcia oceną sąsiednich struktur. Aktualny cennik dostępny jest w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511, gdzie można też potwierdzić koszt i umówić termin.',
  },
  {
    question: 'Czy na USG ślinianek potrzebne jest skierowanie?',
    answer:
      'Na USG ślinianek nie jest potrzebne skierowanie - badanie wykonywane jest prywatnie, więc pacjent może umówić je samodzielnie. Wystarczy ustalić dogodny termin w Bas Clinic we Wrocławiu, telefonicznie pod numerem +48 690 511 511.',
  },
  {
    question: 'Czy USG ślinianek rozpoznaje zespół Sjögrena?',
    answer:
      'USG ślinianek nie rozpoznaje zespołu Sjögrena - to schorzenie rozpoznawane jest klinicznie oraz na podstawie badań serologicznych. Ultrasonografia może natomiast uwidocznić typowe dla tej choroby zmiany struktury ślinianek i dostarczyć obrazu wspierającego diagnostykę, a interpretacją wyniku zajmuje się lekarz.',
  },
];

export default function UsgSlinianekPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG ślinianek we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG ślinianek to bezbolesne badanie ślinianek przyusznych i podżuchwowych, pomocne w ocenie kamicy, stanów zapalnych i zmian ogniskowych. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/slinianek"
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
