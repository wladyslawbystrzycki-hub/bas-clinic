import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';

export const metadata = generatePageMetadata({
  title: 'USG płuc Wrocław - badanie | Bas Clinic',
  description:
    'USG płuc we Wrocławiu (ul. Opatowicka 132). Ocena płynu w jamie opłucnej i zmian zapalnych w płucach. Badanie bezpieczne, bez promieniowania. Umów termin.',
  path: '/usg/pluc/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG płuc' },
];

const RELATED = ['usg/serca', 'usg/jamy-brzusznej'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG płuc?',
    content:
      '<p>USG płuc to badanie ultrasonograficzne klatki piersiowej, które ocenia opłucną oraz obwodowe, przylegające do ściany klatki piersiowej partie płuc. Ultrasonografia płuc wykorzystuje fale ultradźwiękowe i nie naraża pacjenta na promieniowanie jonizujące.</p><p>Powietrze obecne w prawidłowym płucu silnie rozprasza fale ultradźwiękowe, dlatego USG nie obrazuje całego miąższu płucnego w taki sposób jak tomografia komputerowa. Badanie opiera się w dużej mierze na ocenie charakterystycznych artefaktów oraz zmian w obrębie opłucnej, co dostarcza cennych informacji w wielu sytuacjach klinicznych.</p><p>Ze względu na bezpieczeństwo i możliwość wykonania badania przy łóżku pacjenta, USG płuc bywa szczególnie przydatne u kobiet w ciąży oraz u dzieci, a także w szybkiej ocenie przyłóżkowej. Badanie wykonuje i opisuje lekarz.</p>',
  },
  {
    title: 'Co można ocenić w USG płuc?',
    content:
      '<p>USG płuc pozwala wykryć i ocenić przede wszystkim zmiany położone obwodowo oraz nieprawidłowości w obrębie jamy opłucnej. Badanie jest pomocne tam, gdzie potrzebna jest szybka i bezpieczna ocena bez promieniowania.</p><ul><li>obecność płynu w jamie opłucnej oraz jego orientacyjną ilość, co bywa pomocne przy planowaniu nakłucia (punkcji opłucnej);</li><li>cechy zagęszczeń zapalnych w obwodowych partiach płuc, na przykład w przebiegu zapalenia płuc;</li><li>nasilenie tak zwanych linii B, które towarzyszą zastojowi w krążeniu płucnym i zmianom śródmiąższowym;</li><li>cechy mogące wskazywać na odmę opłucnową, ocenianą między innymi na podstawie obecności lub braku ślizgania opłucnej.</li></ul><p>Należy podkreślić, że USG płuc ocenia głównie struktury powierzchowne i nie obrazuje zmian położonych głęboko, otoczonych powietrzem. Badanie nie rozpoznaje samodzielnie nowotworu płuca. Wynik USG płuc interpretuje lekarz w odniesieniu do obrazu klinicznego oraz pozostałych badań.</p>',
  },
  {
    title: 'Wskazania do USG płuc',
    content:
      '<p>Wskazaniem do USG płuc są najczęściej objawy ze strony układu oddechowego oraz potrzeba szybkiej oceny jamy opłucnej. O wykonaniu badania decyduje lekarz na podstawie obrazu klinicznego.</p><ul><li>duszność oraz ból w klatce piersiowej nasilający się przy oddychaniu;</li><li>podejrzenie obecności płynu w jamie opłucnej oraz monitorowanie jego ilości;</li><li>ocena i kontrola przebiegu zapalenia płuc;</li><li>kontrola po nakłuciu opłucnej oraz przy planowaniu takiego zabiegu;</li><li>sytuacje, w których wskazane jest ograniczenie ekspozycji na promieniowanie, na przykład w ciąży lub u dzieci.</li></ul><p>USG płuc bywa elementem szerszej diagnostyki układu oddechowego i krążenia. W razie potrzeby uzupełnia je ocena serca, którą umożliwia <a href="/usg/serca/">USG serca (echokardiografia)</a>.</p>',
  },
  {
    title: 'USG płuc a RTG i tomografia klatki piersiowej',
    content:
      '<p>USG płuc, RTG oraz tomografia komputerowa klatki piersiowej to metody, które wzajemnie się uzupełniają. Ultrasonografia płuc jest bezpieczna i dostępna od razu przy pacjencie, a przy ocenie płynu w jamie opłucnej bywa nawet bardziej czuła niż klasyczne zdjęcie RTG.</p><p>USG płuc nie zastępuje jednak zdjęcia rentgenowskiego ani tomografii komputerowej. Zmiany położone głęboko w miąższu płucnym, otoczone powietrzem, oraz pełna ocena struktur klatki piersiowej wymagają badań rentgenowskich. O wyborze metody diagnostycznej każdorazowo decyduje lekarz, uwzględniając objawy oraz cel badania.</p><p>Z tego powodu USG płuc warto traktować jako badanie celowane i uzupełniające, a nie jako zamiennik diagnostyki rentgenowskiej. Ostateczne rozpoznanie ustala lekarz na podstawie całości obrazu klinicznego.</p>',
  },
  {
    title: 'Jak przygotować się i jak przebiega USG płuc?',
    content:
      '<p>USG płuc nie wymaga żadnego specjalnego przygotowania. Nie trzeba być na czczo, a przyjmowane na stałe leki należy zażywać zgodnie z zaleceniami lekarza. Wystarczy strój umożliwiający odsłonięcie klatki piersiowej oraz pleców.</p><p>Badanie wykonuje się zwykle w pozycji siedzącej lub leżącej, w zależności od ocenianej okolicy. Na skórę nakładany jest żel, a lekarz przesuwa głowicę wzdłuż przestrzeni międzyżebrowych po przedniej, bocznej i tylnej powierzchni klatki piersiowej. W trakcie badania lekarz może poprosić o spokojny oddech lub jego chwilowe wstrzymanie. Badanie jest bezbolesne i trwa zwykle kilkanaście minut.</p><p>USG płuc jest badaniem obrazowym i nie zastępuje konsultacji lekarskiej ani pełnej diagnostyki układu oddechowego. Ultrasonografię płuc wykonujemy w <a href="/usg/">pracowni USG we Wrocławiu</a> przy ulicy Opatowickiej 132, a termin można ustalić telefonicznie pod numerem +48 690 511 511.</p>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG płuc?',
    answer:
      'USG płuc wykrywa przede wszystkim nieprawidłowości w obrębie jamy opłucnej oraz obwodowych partii płuc. Pozwala uwidocznić płyn w jamie opłucnej i ocenić jego ilość, cechy zagęszczeń zapalnych, nasilenie tak zwanych linii B towarzyszących zastojowi i zmianom śródmiąższowym oraz cechy mogące wskazywać na odmę opłucnową. USG ocenia głównie struktury powierzchowne i nie rozpoznaje samodzielnie nowotworu płuca.',
  },
  {
    question: 'Czy USG płuc wykryje zapalenie płuc?',
    answer:
      'USG płuc może uwidocznić cechy zagęszczeń zapalnych w obwodowych partiach płuc i bywa pomocne w ocenie oraz monitorowaniu zapalenia płuc. Badanie ocenia jednak głównie zmiany położone przy ścianie klatki piersiowej i nie obrazuje ognisk otoczonych powietrzem w głębi miąższu. Z tego względu rozpoznanie stawia lekarz, uwzględniając objawy oraz pozostałe badania.',
  },
  {
    question: 'USG płuc czy RTG klatki piersiowej - co wybrać?',
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
    question: 'Ile kosztuje USG płuc we Wrocławiu?',
    answer:
      'Cena USG płuc we Wrocławiu zależy od zakresu badania. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511, gdzie można też ustalić dogodny termin badania.',
  },
];

export default function UsgPlucPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG płuc we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG płuc to bezpieczne badanie ultrasonograficzne klatki piersiowej, oceniające opłucną oraz obwodowe partie płuc, w tym płyn w jamie opłucnej. Wykonujemy je w Bas Clinic we Wrocławiu, bez promieniowania."
      slug="usg/pluc"
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
