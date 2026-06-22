import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG prostaty Wrocław | Bas Clinic',
  description:
    'USG prostaty we Wrocławiu (ul. Opatowicka 132). Ocena gruczołu krokowego, objętości stercza i zalegania moczu. Badanie prywatnie, bez skierowania. Umów termin.',
  path: '/usg/prostaty/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG prostaty' },
];

const RELATED = ['usg/jamy-brzusznej', 'usg/nerek', 'usg/jader'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG prostaty?',
    content:
      '<p>USG prostaty to nieinwazyjne badanie ultrasonograficzne gruczołu krokowego, czyli stercza. W Bas Clinic standardowo wykonuje się je metodą przezbrzuszną, przez powłoki brzuszne, przy wypełnionym pęcherzu moczowym. Ta technika pozwala na <strong>orientacyjną ocenę objętości stercza oraz zalegania moczu po mikcji</strong>.</p>' +
      '<p>Badanie bywa określane wymiennie jako USG gruczołu krokowego, USG stercza lub ultrasonografia prostaty. Wszystkie te nazwy odnoszą się do tej samej oceny ultrasonograficznej.</p>' +
      '<p>Inną, dokładniejszą techniką jest badanie przezodbytnicze (TRUS), w którym głowicę wprowadza się do odbytnicy. TRUS to odrębna metoda, oceniana osobno, i nie jest ona wykonywana w ramach badania przezbrzusznego opisanego na tej stronie. Wybór techniki należy do lekarza prowadzącego.</p>',
  },
  {
    title: 'Co ocenia USG prostaty?',
    content:
      '<p>USG prostaty pozwala ocenić przede wszystkim objętość i zarys gruczołu krokowego oraz ilość moczu zalegającego w pęcherzu po jego opróżnieniu. Pomiar objętości stercza jest pomocny w monitorowaniu jego powiększenia, a ocena zalegania moczu po mikcji obrazuje, jak skutecznie pęcherz się opróżnia.</p>' +
      '<p>Badanie umożliwia także pośrednią ocenę pęcherza moczowego. Powiększony stercz może utrudniać odpływ moczu, co bywa widoczne między innymi jako pogrubienie ściany pęcherza lub jego nieprawidłowe opróżnianie.</p>' +
      '<p>Ocena prostaty w USG ma swoje ograniczenia. Badanie przezbrzuszne nie służy do szczegółowej oceny wewnętrznej struktury gruczołu i nie pozwala rozpoznać nowotworu. Może jedynie uwidocznić cechy, które wymagają dalszej, ukierunkowanej diagnostyki, a interpretacja obrazu zawsze należy do lekarza.</p>',
  },
  {
    title: 'Wskazania do USG prostaty',
    content:
      '<p>Wskazaniem do USG prostaty są najczęściej dolegliwości ze strony dolnych dróg moczowych. Należą do nich częstomocz, oddawanie moczu w nocy (nykturia), słaby lub przerywany strumień moczu oraz uczucie niepełnego opróżniania pęcherza.</p>' +
      '<ul>' +
      '<li>monitorowanie łagodnego rozrostu stercza (BPH) i ocena jego objętości,</li>' +
      '<li>ocena zalegania moczu po mikcji,</li>' +
      '<li>trudności w oddawaniu moczu i osłabienie strumienia,</li>' +
      '<li>częste lub naglące parcie na mocz, w tym w godzinach nocnych,</li>' +
      '<li>kontrola u mężczyzn z rozpoznanym wcześniej powiększeniem gruczołu krokowego.</li>' +
      '</ul>' +
      '<p>O zasadności badania oraz jego zakresie decyduje lekarz na podstawie zgłaszanych objawów i wywiadu.</p>',
  },
  {
    title: 'Jak przygotować się do USG prostaty?',
    content:
      '<p>Do USG prostaty wykonywanego przezbrzusznie należy przygotować się poprzez wypełnienie pęcherza moczowego. Zaleca się wypicie około 0,5-1 litra niegazowanej wody na mniej więcej godzinę przed badaniem i powstrzymanie się od oddawania moczu, aby pęcherz pozostał odpowiednio wypełniony.</p>' +
      '<p>Wypełniony pęcherz tworzy tak zwane okno akustyczne, dzięki któremu gruczoł krokowy jest lepiej widoczny przez powłoki brzuszne. Bez właściwego wypełnienia ocena bywa utrudniona, a pomiary mniej dokładne.</p>' +
      '<p>Badanie jest często dwuetapowe. W pierwszej części, przy pełnym pęcherzu, ocenia się stercz i pęcherz, a następnie pacjent oddaje mocz i badanie powtarza się, aby zmierzyć ilość moczu zalegającego po mikcji.</p>',
  },
  {
    title: 'USG prostaty a diagnostyka chorób stercza',
    content:
      '<p>USG prostaty pełni w diagnostyce chorób stercza rolę uzupełniającą i nie jest badaniem przesiewowym w kierunku raka prostaty. W wykrywaniu raka gruczołu krokowego kluczowe znaczenie mają oznaczenie stężenia PSA we krwi oraz badanie palpacyjne przez odbytnicę (per rectum), wykonywane przez lekarza.</p>' +
      '<p>Badanie ultrasonograficzne uzupełnia tę ocenę, dostarczając informacji o objętości stercza i zaleganiu moczu, lecz nie zastępuje wymienionych metod. Nieprawidłowy wynik PSA lub badania per rectum może wskazywać na konieczność dalszej diagnostyki, w tym dokładniejszego badania przezodbytniczego lub konsultacji urologicznej.</p>' +
      '<p>W ocenie układu moczowego USG prostaty bywa łączone z badaniami uzupełniającymi. W zależności od objawów lekarz może zalecić <a href="/usg/nerek/">USG nerek</a> lub szersze <a href="/usg/jamy-brzusznej/">USG jamy brzusznej</a> w celu pełniejszej oceny dróg moczowych. W diagnostyce andrologicznej u mężczyzn pomocne bywa również <a href="/usg/jader/">USG jąder</a>.</p>',
  },
  {
    title: 'Jak przebiega USG prostaty?',
    content:
      '<p>USG prostaty przebiega w pozycji leżącej, a lekarz przykłada do skóry brzucha głowicę ultrasonograficzną pokrytą żelem. Badanie przezbrzuszne jest bezbolesne, nie wymaga znieczulenia ani nakłuć i zwykle trwa kilkanaście minut, łącznie z pomiarem zalegania moczu po mikcji.</p>' +
      '<p>Po zakończeniu badania lekarz przygotowuje opis z pomiarami i wnioskami. Wynik USG nie jest rozpoznaniem choroby i wymaga interpretacji w kontekście objawów oraz pozostałych badań. Badanie ultrasonograficzne nie zastępuje konsultacji lekarskiej, a o dalszym postępowaniu decyduje lekarz.</p>' +
      '<p>Badanie wykonywane jest w Bas Clinic przy ul. Opatowicka 132 we Wrocławiu. Z USG prostaty można zapoznać się w kontekście całej <a href="/usg/">pełnej oferty USG w Bas Clinic</a>, a termin badania ustala się telefonicznie pod numerem +48 690 511 511.</p>',
  },
];

const FAQ = [
  {
    question: 'Czy do USG prostaty trzeba mieć pełny pęcherz?',
    answer:
      'Do USG prostaty wykonywanego przezbrzusznie pęcherz powinien być pełny. Zaleca się wypicie około 0,5-1 litra wody na około godzinę przed badaniem i powstrzymanie się od oddawania moczu. Wypełniony pęcherz poprawia widoczność gruczołu krokowego i umożliwia pomiar zalegania moczu po mikcji.',
  },
  {
    question: 'Czy USG prostaty wykrywa raka prostaty?',
    answer:
      'USG prostaty wykonywane przezbrzusznie nie jest badaniem przesiewowym w kierunku raka prostaty i nie służy do jego rozpoznania. W diagnostyce raka stercza kluczowe są oznaczenie PSA oraz badanie per rectum, a USG pełni rolę uzupełniającą. Może ono jedynie uwidocznić cechy wymagające dalszej diagnostyki, którą prowadzi lekarz.',
  },
  {
    question: 'Czym różni się USG prostaty przezbrzuszne od TRUS?',
    answer:
      'USG prostaty przezbrzuszne wykonuje się przez powłoki brzuszne, przy wypełnionym pęcherzu, i pozwala orientacyjnie ocenić objętość stercza oraz zaleganie moczu. TRUS, czyli badanie przezodbytnicze, polega na wprowadzeniu głowicy do odbytnicy i jest dokładniejszą, odrębną techniką oceny wewnętrznej struktury gruczołu krokowego. O wyborze metody decyduje lekarz.',
  },
  {
    question: 'Ile kosztuje USG prostaty we Wrocławiu?',
    answer:
      'Cena USG prostaty we Wrocławiu zależy od zakresu badania, na przykład od tego, czy obejmuje ono ocenę zalegania moczu po mikcji. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511, gdzie można też potwierdzić zakres badania.',
  },
  {
    question: 'Czy na USG prostaty potrzebne jest skierowanie?',
    answer:
      'Na USG prostaty skierowanie nie jest wymagane. Badanie wykonywane jest prywatnie, dlatego można je zrealizować bez skierowania od lekarza. Termin ustala się telefonicznie, a wynik z opisem otrzymuje się po badaniu.',
  },
  {
    question: 'Jak przygotować się do USG prostaty?',
    answer:
      'Aby przygotować się do USG prostaty, należy wypełnić pęcherz moczowy, wypijając około 0,5-1 litra wody na około godzinę przed badaniem i nie oddając wcześniej moczu. Badanie bywa dwuetapowe: najpierw ocenia się stercz i pęcherz przy pełnym pęcherzu, a następnie po oddaniu moczu mierzy się jego zaleganie.',
  },
];

export default function UsgProstatyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG prostaty we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG prostaty (gruczołu krokowego) wykonywane przezbrzusznie pozwala orientacyjnie ocenić objętość stercza i zaleganie moczu po mikcji. Badanie wykonujemy w Bas Clinic we Wrocławiu."
      slug="usg/prostaty"
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
