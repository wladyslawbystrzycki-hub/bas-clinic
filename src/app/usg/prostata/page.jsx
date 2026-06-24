import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG prostaty Wrocław - gruczoł krokowy',
  description:
    'USG prostaty we Wrocławiu - przezbrzuszna ocena gruczołu krokowego, objętości stercza i zalegania moczu po mikcji. Badanie prywatne, bez skierowania.',
  path: '/usg/prostata/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG prostaty' },
];

const RELATED = ['usg/jama-brzuszna', 'usg/nerki', 'usg/jadra'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG prostaty?',
    content:
      '<p><strong>USG prostaty</strong> to nieinwazyjne badanie ultrasonograficzne gruczołu krokowego, czyli stercza. W Bas Clinic wykonujemy je metodą <strong>przezbrzuszną</strong>, przez powłoki brzuszne, przy wypełnionym pęcherzu moczowym. Ta technika pozwala ocenić objętość stercza oraz ilość moczu zalegającego w pęcherzu po jego opróżnieniu.</p>' +
      '<p>Badanie bywa nazywane wymiennie USG gruczołu krokowego, USG stercza lub ultrasonografią prostaty. Wszystkie te określenia odnoszą się do tej samej oceny ultrasonograficznej. Wypełniony pęcherz tworzy tak zwane <strong>okno akustyczne</strong>, dzięki któremu fala dźwiękowa dociera do gruczołu leżącego tuż za pęcherzem i obraz staje się czytelny.</p>' +
      '<p>Odrębną, dokładniejszą techniką jest badanie przezodbytnicze (<strong>TRUS</strong>), w którym głowicę wprowadza się do odbytnicy. TRUS ocenia wewnętrzną strukturę gruczołu znacznie szczegółowiej i prowadzi biopsję, ale jest osobną procedurą i nie wchodzi w skład badania przezbrzusznego opisanego na tej stronie. O wyborze metody decyduje lekarz prowadzący.</p>',
  },
  {
    title: 'Co ocenia USG prostaty?',
    content:
      '<p>USG prostaty wykonywane przezbrzusznie ocenia przede wszystkim objętość i zarys gruczołu krokowego oraz <strong>zaleganie moczu po mikcji</strong>, czyli ilość moczu pozostającą w pęcherzu po jego opróżnieniu. Te dwa parametry najczęściej interesują lekarza u mężczyzn z objawami ze strony dolnych dróg moczowych.</p>' +
      '<p>Objętość stercza szacuje się na podstawie trzech wymiarów gruczołu. Pomiar pomaga monitorować <strong>łagodny rozrost stercza</strong> (BPH) i dobierać postępowanie. Według wytycznych Europejskiego Towarzystwa Urologicznego (EAU) objętość przekraczająca orientacyjnie 40 ml wiąże się z większym ryzykiem progresji i wpływa na wybór leczenia farmakologicznego.</p>' +
      '<p>Badanie umożliwia też pośrednią ocenę pęcherza moczowego. Powiększony stercz potrafi utrudniać odpływ moczu, co bywa widoczne jako pogrubienie ściany pęcherza lub niepełne opróżnianie. Znaczne zaleganie moczu po mikcji jest sygnałem do pogłębionej oceny urologicznej. Interpretacja całości obrazu zawsze należy do lekarza.</p>',
  },
  {
    title: 'USG prostaty przezbrzuszne a TRUS',
    content:
      '<p>Prostatę można badać ultrasonograficznie na dwa sposoby: przez powłoki brzuszne (przezbrzusznie) oraz przez odbytnicę (TRUS). Obie metody odpowiadają na inne pytania kliniczne, dlatego nie zastępują się nawzajem, lecz uzupełniają. Poniższe zestawienie porządkuje najważniejsze różnice.</p>' +
      '<table>' +
      '<tr><th>Cecha</th><th>USG przezbrzuszne (TAUS)</th><th>USG przezodbytnicze (TRUS)</th></tr>' +
      '<tr><td>Dostęp</td><td>głowica na skórze brzucha</td><td>głowica wprowadzana do odbytnicy</td></tr>' +
      '<tr><td>Przygotowanie</td><td>wypełniony pęcherz moczowy</td><td>zwykle wlewka doodbytnicza</td></tr>' +
      '<tr><td>Główny cel</td><td>objętość stercza, zaleganie moczu</td><td>szczegółowa struktura, biopsja celowana</td></tr>' +
      '<tr><td>Ocena wnętrza gruczołu</td><td>orientacyjna</td><td>dokładna</td></tr>' +
      '<tr><td>Komfort</td><td>bezbolesne, nieinwazyjne</td><td>mniej komfortowe, bardziej inwazyjne</td></tr>' +
      '<tr><td>Rola w biopsji</td><td>nie prowadzi biopsji</td><td>prowadzi biopsję, także z fuzją mpMRI</td></tr>' +
      '</table>' +
      '<p>Badanie przezbrzuszne jest prostsze i przyjaźniejsze dla pacjenta, dlatego dobrze sprawdza się w ocenie objętości stercza i zalegania moczu. Gdy potrzebna jest szczegółowa ocena wnętrza gruczołu lub pobranie wycinków, lekarz kieruje na TRUS, najczęściej w warunkach urologicznych.</p>',
  },
  {
    title: 'Wskazania: kiedy zrobić USG prostaty?',
    content:
      '<p>Najczęstszym wskazaniem do USG prostaty są dolegliwości ze strony <strong>dolnych dróg moczowych</strong> (LUTS). Należą do nich częstomocz, oddawanie moczu w nocy (nykturia), słaby lub przerywany strumień oraz uczucie niepełnego opróżniania pęcherza.</p>' +
      '<ul>' +
      '<li>monitorowanie łagodnego rozrostu stercza (BPH) i ocena jego objętości,</li>' +
      '<li>ocena zalegania moczu po mikcji,</li>' +
      '<li>trudności w oddawaniu moczu i osłabienie strumienia,</li>' +
      '<li>częste lub naglące parcie na mocz, w tym w nocy,</li>' +
      '<li>kontrola u mężczyzn z wcześniej rozpoznanym powiększeniem gruczołu krokowego.</li>' +
      '</ul>' +
      '<p>Wytyczne EAU zalecają pomiar zalegania moczu po mikcji jako element oceny mężczyzn z objawami ze strony dróg moczowych, a obrazowanie stercza wykonuje się, gdy pomaga dobrać leczenie. O zasadności i zakresie badania decyduje lekarz na podstawie zgłaszanych objawów i wywiadu.</p>',
  },
  {
    title: 'Jak przebiega badanie i jak się przygotować?',
    content:
      '<p>Do USG prostaty wykonywanego przezbrzusznie trzeba przyjść z wypełnionym pęcherzem moczowym. Zaleca się wypicie około 0,5-1 litra niegazowanej wody na mniej więcej godzinę przed badaniem i powstrzymanie się od oddawania moczu, aby pęcherz pozostał odpowiednio wypełniony.</p>' +
      '<p>Bez właściwego wypełnienia pęcherza ocena bywa utrudniona, a pomiary mniej dokładne, ponieważ to pełny pęcherz tworzy okno akustyczne dla gruczołu. Badanie jest często <strong>dwuetapowe</strong>: w pierwszej części, przy pełnym pęcherzu, lekarz ocenia stercz i pęcherz, a następnie pacjent oddaje mocz i badanie powtarza się, aby zmierzyć zaleganie po mikcji.</p>' +
      '<p>Samo badanie odbywa się w pozycji leżącej. Lekarz przykłada do skóry brzucha głowicę pokrytą żelem, a procedura jest bezbolesna, nie wymaga znieczulenia ani nakłuć i zwykle trwa kilkanaście minut. Po zakończeniu lekarz przygotowuje opis z pomiarami i wnioskami.</p>',
  },
  {
    title: 'USG prostaty a diagnostyka raka stercza',
    content:
      '<p>USG prostaty wykonywane przezbrzusznie nie jest badaniem przesiewowym w kierunku <strong>raka gruczołu krokowego</strong>. W wykrywaniu raka stercza podstawę stanowią oznaczenie stężenia PSA we krwi oraz badanie palpacyjne przez odbytnicę (per rectum), wykonywane przez lekarza.</p>' +
      '<p>Gdy te wyniki budzą wątpliwości, dalszą diagnostykę prowadzi się na podstawie rezonansu magnetycznego prostaty (mpMRI) i celowanej biopsji, często z fuzją obrazu MRI z ultrasonografią przezodbytniczą. To te metody, a nie badanie przezbrzuszne, pozwalają potwierdzić lub wykluczyć nowotwór. USG przezbrzuszne dostarcza informacji o objętości stercza i zaleganiu moczu, lecz ich nie zastępuje.</p>' +
      '<p>W ocenie układu moczowego USG prostaty bywa łączone z badaniami uzupełniającymi. Zależnie od objawów lekarz może zalecić <a href="/usg/nerki/">USG nerek</a> lub szersze <a href="/usg/jama-brzuszna/">USG jamy brzusznej</a> dla pełniejszej oceny dróg moczowych, a w diagnostyce andrologicznej pomocne bywa <a href="/usg/jadra/">USG jąder</a>.</p>',
  },
  {
    title: 'Ograniczenia i bezpieczeństwo USG prostaty',
    content:
      '<p>USG prostaty jest badaniem bezpiecznym, które można powtarzać, ponieważ nie wykorzystuje promieniowania jonizującego. Metoda przezbrzuszna nie wiąże się ze szczególnymi przeciwwskazaniami, jest bezbolesna i nie obciąża organizmu.</p>' +
      '<p>Najważniejsze ograniczenie dotyczy zakresu oceny. <strong>Badanie przezbrzuszne nie służy do szczegółowej oceny wewnętrznej struktury gruczołu i nie rozpoznaje raka prostaty.</strong> Może jedynie uwidocznić cechy wymagające dalszej, ukierunkowanej diagnostyki. Dokładność pomiarów zależy też od wypełnienia pęcherza i warunków anatomicznych pacjenta.</p>' +
      '<p>Wynik USG to opis sporządzony przez lekarza wykonującego badanie, a nie rozpoznanie choroby. Obraz nabiera znaczenia dopiero w zestawieniu z objawami, wynikiem PSA i całością dokumentacji. Badanie ultrasonograficzne nie zastępuje konsultacji, a o dalszym postępowaniu zawsze decyduje lekarz.</p>',
  },
  {
    title: 'Cena i wizyta we Wrocławiu',
    content:
      '<p>USG prostaty w Bas Clinic wykonujemy prywatnie, bez skierowania, w pracowni ultrasonografii we Wrocławiu. Termin badania umówisz telefonicznie lub przez formularz rejestracji online.</p>' +
      `<p>Cena zależy od zakresu badania, na przykład od tego, czy obejmuje ono pomiar zalegania moczu po mikcji. Aktualne stawki znajdziesz w zakładce <a href="/cennik/">cennik</a>, a szczegóły badania doprecyzujesz pod numerem ${CLINIC.phone}. Pracownia działa przy ${CLINIC.address.street} we Wrocławiu, a wizytę zarezerwujesz przez <a href="/rejestracja/">rejestrację online</a>. Badanie prowadzi <a href="/usg/">pracownia USG</a> Bas Clinic.</p>` +
      '<p>Treść ma charakter informacyjny i nie zastępuje konsultacji lekarskiej ani indywidualnej oceny. O zakresie badania, interpretacji wyniku i dalszym postępowaniu decyduje lekarz po zapoznaniu się z sytuacją pacjenta.</p>',
  },
  {
    title: 'Źródła',
    content:
      '<ol>' +
      '<li>EAU Guidelines on the Management of Non-neurogenic Male Lower Urinary Tract Symptoms (incl. Benign Prostatic Obstruction). European Association of Urology, 2024 (rozdz. Diagnostic evaluation, Treatment).</li>' +
      '<li>EAU Guidelines on Prostate Cancer. European Association of Urology, 2024 (rozdz. Diagnostic evaluation: PSA, badanie per rectum, mpMRI, biopsja).</li>' +
      '<li>AIUM Practice Parameter for the Performance of an Ultrasound Examination of the Prostate and Surrounding Structures. American Institute of Ultrasound in Medicine.</li>' +
      '<li>Bladder Post-Void Residual Volume. StatPearls, NCBI Bookshelf (NBK539839).</li>' +
      '</ol>',
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
      'USG prostaty wykonywane przezbrzusznie nie jest badaniem przesiewowym w kierunku raka prostaty i nie służy do jego rozpoznania. W diagnostyce raka stercza podstawę stanowią oznaczenie PSA oraz badanie per rectum, a USG pełni rolę uzupełniającą. Może ono jedynie uwidocznić cechy wymagające dalszej diagnostyki, którą prowadzi lekarz.',
  },
  {
    question: 'Czym różni się USG prostaty przezbrzuszne od TRUS?',
    answer:
      'USG prostaty przezbrzuszne wykonuje się przez powłoki brzuszne, przy wypełnionym pęcherzu, i pozwala orientacyjnie ocenić objętość stercza oraz zaleganie moczu. TRUS, czyli badanie przezodbytnicze, polega na wprowadzeniu głowicy do odbytnicy i jest dokładniejszą, odrębną techniką oceny wewnętrznej struktury gruczołu krokowego. O wyborze metody decyduje lekarz.',
  },
  {
    question: 'Ile kosztuje USG prostaty we Wrocławiu?',
    answer:
      `Cena USG prostaty we Wrocławiu zależy od zakresu badania, na przykład od tego, czy obejmuje ono ocenę zalegania moczu po mikcji. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem ${CLINIC.phone}, gdzie można też potwierdzić zakres badania.`,
  },
  {
    question: 'Czy na USG prostaty potrzebne jest skierowanie?',
    answer:
      'Na USG prostaty w Bas Clinic skierowanie nie jest wymagane, ponieważ badanie wykonujemy prywatnie. Wizytę można umówić bezpośrednio, a wynik z opisem otrzymuje się po badaniu. W razie wątpliwości dotyczących zakresu badania warto skonsultować się z lekarzem.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG prostaty?',
    answer:
      `USG prostaty we Wrocławiu wykonasz w pracowni ultrasonografii Bas Clinic przy ${CLINIC.address.street}. Badanie ocenia objętość gruczołu krokowego i zaleganie moczu po mikcji metodą przezbrzuszną. Termin umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez formularz rejestracji online, w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function UsgProstatyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG prostaty we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG prostaty (gruczołu krokowego) wykonywane przezbrzusznie pozwala orientacyjnie ocenić objętość stercza i zaleganie moczu po mikcji. Badanie wykonujemy w Bas Clinic we Wrocławiu."
      slug="usg/prostata"
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
