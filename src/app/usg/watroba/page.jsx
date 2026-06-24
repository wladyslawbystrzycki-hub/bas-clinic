import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'USG wątroby Wrocław - stłuszczenie i ogniska',
  description:
    'USG wątroby we Wrocławiu (Bas Clinic) - ultrasonografia oceniająca stłuszczenie, zmiany ogniskowe i drogi żółciowe. Na czczo, bez skierowania. Umów termin.',
  path: '/usg/watroba/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG wątroby' },
];

const RELATED = ['usg/jama-brzuszna', 'usg/nerki', 'usg/doppler'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG wątroby?',
    content:
      '<p>USG wątroby to celowane badanie ultrasonograficzne, które ocenia miąższ wątroby oraz sąsiadujące z nią drogi żółciowe i pęcherzyk żółciowy. Ultrasonografia wątroby wykorzystuje fale ultradźwiękowe i nie naraża pacjenta na promieniowanie jonizujące, dzięki czemu badanie można w razie potrzeby powtarzać.</p>' +
      '<p>Badanie pozwala określić wielkość narządu, jego <strong>echogeniczność</strong> (sposób odbijania fal przez tkankę), strukturę miąższu oraz ewentualne zmiany ogniskowe. Ultrasonografia obrazuje też żyłę wrotną i drogi żółciowe, co bywa istotne przy ocenie krążenia wątrobowego i odpływu żółci.</p>' +
      '<p>Ocena wątroby jest stałym elementem szerszego badania, jakim jest <a href="/usg/jama-brzuszna/">USG jamy brzusznej</a>. Osobną stronę poświęcono samej wątrobie z myślą o osobach kierowanych na celowaną kontrolę tego narządu, na przykład przy nieprawidłowych wynikach prób wątrobowych.</p>',
  },
  {
    title: 'Co wykrywa USG wątroby? Stłuszczenie, zmiany ogniskowe i drogi żółciowe',
    content:
      '<p>USG wątroby uwidacznia zarówno zmiany rozlane obejmujące cały miąższ, jak i pojedyncze zmiany ogniskowe, a także stan dróg żółciowych i pęcherzyka żółciowego. Najczęstszym powodem badania jest ocena stłuszczenia oraz różnicowanie wykrytego wcześniej ogniska.</p>' +
      '<h3>Stłuszczenie i inne zmiany rozlane</h3>' +
      '<p><strong>Stłuszczenie wątroby</strong> odpowiada w obrazie USG zwiększonej, jednorodnej echogeniczności miąższu (tak zwana jasna wątroba). W ocenie umiarkowanego i nasilonego stłuszczenia ultrasonografia jest dokładna: w metaanalizie Ballestriego i wsp. (2021) czułość oraz swoistość dla stłuszczenia obejmującego co najmniej 30% hepatocytów wyniosły około 85%, przy polu pod krzywą ROC 0,92. Badanie pomaga też dostrzec cechy mogące towarzyszyć przebudowie marskiej i nadciśnieniu wrotnemu, na przykład nierówny zarys wątroby i poszerzenie żyły wrotnej.</p>' +
      '<h3>Zmiany ogniskowe i drogi żółciowe</h3>' +
      '<ul>' +
      '<li>zmiany ogniskowe: torbiele, naczyniaki oraz ogniska lite wymagające różnicowania;</li>' +
      '<li>poszerzenie wewnątrz- i zewnątrzwątrobowych dróg żółciowych, które może wskazywać na utrudniony odpływ żółci;</li>' +
      '<li>zmiany w pęcherzyku żółciowym, w tym kamicę i pogrubienie ściany.</li>' +
      '</ul>' +
      '<p>Typowy naczyniak o średnicy poniżej 3 cm bywa rozpoznawalny już w badaniu podstawowym (wytyczne SIUMB, Vidili i wsp., 2018). USG nie rozpoznaje jednak samodzielnie nowotworu ani nie określa ostatecznie charakteru zmiany ogniskowej: obraz stłuszczenia czy włóknienia opisuje się jako wynik ultrasonograficzny, a nie rozpoznanie choroby. Wykryte nieprawidłowości często wymagają poszerzenia diagnostyki o badania laboratoryjne, elastografię, tomografię komputerową lub rezonans magnetyczny, a interpretacji w kontekście klinicznym dokonuje lekarz.</p>',
  },
  {
    title: 'Wskazania - kiedy wykonać USG wątroby?',
    content:
      '<p>Wskazaniem do USG wątroby są najczęściej nieprawidłowe wyniki prób wątrobowych oraz potrzeba kontroli wcześniej rozpoznanych zmian. Ultrasonografię wątroby zaleca się także przy dolegliwościach sugerujących chorobę tego narządu.</p>' +
      '<ul>' +
      '<li>podwyższona aktywność enzymów wątrobowych w badaniach krwi;</li>' +
      '<li>podejrzenie lub monitorowanie stłuszczenia wątroby;</li>' +
      '<li>ból lub uczucie pełności w prawym podżebrzu;</li>' +
      '<li>kontrola wcześniej opisanych zmian ogniskowych, na przykład torbieli lub naczyniaka;</li>' +
      '<li>obserwacja przewlekłych chorób wątroby i ocena w trakcie ich leczenia;</li>' +
      '<li>żółtaczka lub podejrzenie utrudnionego odpływu żółci.</li>' +
      '</ul>' +
      '<p>O wskazaniach i zakresie badania decyduje lekarz na podstawie wywiadu oraz dotychczasowych wyników. USG wątroby uzupełnia diagnostykę, ale jej nie zastępuje.</p>',
  },
  {
    title: 'USG wątroby a inne metody obrazowania',
    content:
      '<p>USG wątroby jest badaniem pierwszego rzutu, a pozostałe metody obrazowania pełnią rolę uzupełniającą. Ultrasonografia dobrze ocenia stłuszczenie i wykrywa zmiany ogniskowe, natomiast dokładną charakterystykę ogniska lub ilościowy pomiar włóknienia zapewniają inne techniki.</p>' +
      '<table>' +
      '<tr><th>Metoda</th><th>Promieniowanie</th><th>Główne zastosowanie w wątrobie</th><th>Ograniczenie</th></tr>' +
      '<tr><td>USG (B-mode)</td><td>brak</td><td>przesiew stłuszczenia, wykrycie zmian ogniskowych, ocena dróg żółciowych</td><td>nie charakteryzuje samodzielnie ogniska, zależne od warunków badania</td></tr>' +
      '<tr><td>Elastografia</td><td>brak</td><td>ilościowa ocena sztywności i włóknienia miąższu</td><td>nie zastępuje oceny morfologii narządu</td></tr>' +
      '<tr><td>Tomografia komputerowa</td><td>jonizujące</td><td>charakterystyka zmian ogniskowych, ocena rozległości</td><td>promieniowanie, kontrast jodowy</td></tr>' +
      '<tr><td>Rezonans magnetyczny</td><td>brak</td><td>najdokładniejsza charakterystyka ogniska i pomiar tłuszczu</td><td>dostępność, czas badania, koszt</td></tr>' +
      '</table>' +
      '<h3>USG wątroby a USG jamy brzusznej</h3>' +
      '<p>Określenie USG wątroby odnosi się do diagnostyki ukierunkowanej na ten jeden narząd, na przykład przy kontroli zmiany ogniskowej lub monitorowaniu stłuszczenia. Szersza ocena, obejmująca trzustkę, śledzionę, nerki i pozostałe struktury, to <a href="/usg/jama-brzuszna/">ultrasonografia jamy brzusznej</a>. W praktyce wątrobę ocenia się zwykle wraz z sąsiednimi narządami, dlatego o ostatecznym zakresie decyduje lekarz.</p>' +
      '<p>Ocenę unaczynienia wątroby i przepływu w żyle wrotnej umożliwia dodatkowo <a href="/usg/doppler/">badanie dopplerowskie</a>, a kontrolę nerek przy nieprawidłowych parametrach krwi - <a href="/usg/nerki/">USG nerek</a>.</p>',
  },
  {
    title: 'Jak przebiega USG wątroby i jak się przygotować?',
    content:
      '<p>Do USG wątroby należy przygotować się tak jak do USG jamy brzusznej, czyli zgłosić się na czczo. Powstrzymanie się od jedzenia przez około 6-8 godzin ogranicza ilość gazów w jelitach i poprawia widoczność wątroby oraz pęcherzyka żółciowego.</p>' +
      '<h3>Przygotowanie do badania</h3>' +
      '<ol>' +
      '<li>w dniu badania pozostań na czczo; dozwolona jest niewielka ilość niegazowanej wody;</li>' +
      '<li>leki przyjmowane na stałe zażyj zgodnie z zaleceniem lekarza prowadzącego, popijając wodą;</li>' +
      '<li>dzień wcześniej unikaj potraw wzdymających i napojów gazowanych;</li>' +
      '<li>zabierz wyniki wcześniejszych badań obrazowych oraz prób wątrobowych, jeśli były wykonywane.</li>' +
      '</ol>' +
      '<h3>Jak wygląda badanie</h3>' +
      '<p>Badanie jest bezbolesne i trwa zwykle kilkanaście minut. Pacjent leży na plecach, a na skórę brzucha nakładany jest żel ułatwiający przewodzenie fal. Lekarz przesuwa głowicę po prawej okolicy podżebrowej i może poprosić o głęboki wdech oraz jego zatrzymanie, co poprawia widoczność wątroby. Opis wyniku sporządza lekarz wykonujący ultrasonografię, zwykle bezpośrednio po badaniu.</p>',
  },
  {
    title: 'Bezpieczeństwo i ograniczenia USG wątroby',
    content:
      '<p>USG wątroby jest badaniem bezpiecznym i nieinwazyjnym - nie wykorzystuje promieniowania jonizującego, nie wymaga kontrastu dożylnego i nie ma typowych przeciwwskazań. Jego ograniczenia dotyczą nie bezpieczeństwa, lecz zakresu informacji, jakich dostarcza.</p>' +
      '<p>Ultrasonografia jest dokładna w wykrywaniu umiarkowanego i nasilonego stłuszczenia, ale jej czułość spada w stłuszczeniu łagodnym, obejmującym mniej niż 30% hepatocytów (Ballestri i wsp., 2021). Jakość obrazu zależy też od warunków badania, w tym od ilości gazów jelitowych i budowy ciała pacjenta. Z tego powodu prawidłowy wynik USG nie wyklucza całkowicie wczesnej choroby wątroby.</p>' +
      '<p>Druga istotna granica dotyczy zmian ogniskowych. Badanie podstawowe pozwala je wykryć i wstępnie ocenić, lecz pełna charakterystyka ogniska, zwłaszcza różnicowanie zmian łagodnych i złośliwych, wymaga zwykle obrazowania z kontrastem. Zgodnie z wytycznymi SIUMB (Vidili i wsp., 2018) zmiana o cechach atypowych, większa niż 3 cm albo wykryta u pacjenta onkologicznego lub z przewlekłą chorobą wątroby powinna być oceniona w USG z kontrastem (CEUS), tomografii komputerowej lub rezonansie magnetycznym.</p>' +
      '<p>W praktyce USG wątroby dobrze sprawdza się jako badanie przesiewowe i kontrolne, które wskazuje kierunek dalszego postępowania, ale nie stawia samodzielnie rozpoznania choroby. Decyzję o ewentualnej pogłębionej diagnostyce podejmuje lekarz, który zestawia obraz USG z wywiadem i wynikami badań krwi.</p>' +
      '<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O wskazaniach do badania, jego interpretacji i dalszym postępowaniu decyduje lekarz podczas indywidualnej wizyty.</p>',
  },
  {
    title: 'Ile kosztuje USG wątroby we Wrocławiu?',
    content:
      '<p>Cena USG wątroby we Wrocławiu zależy od zakresu badania oraz tego, czy ocena dotyczy samej wątroby, czy całej jamy brzusznej. Aktualne stawki podajemy w <a href="/cennik/">cenniku</a>, a badanie umówisz bez skierowania podczas <a href="/rejestracja/">rejestracji</a>.</p>' +
      '<p>USG wątroby wykonujemy w <a href="/usg/">pracowni USG we Wrocławiu</a> przy ulicy Opatowickiej 132. Badanie jest realizowane prywatnie, a na wizytę warto zabrać wyniki wcześniejszych badań obrazowych oraz prób wątrobowych, aby lekarz mógł porównać obraz z poprzednimi opisami.</p>',
  },
  {
    title: 'Źródła',
    content:
      '<ol>' +
      '<li>Ballestri S. i wsp. Diagnostic accuracy of ultrasonography for the detection of hepatic steatosis: an updated meta-analysis of observational studies. Metabolism and Target Organ Damage 2021; 1: 7 (DOI 10.20517/mtod.2021.05).</li>' +
      '<li>Hernaez R., Lazo M., Bonekamp S. i wsp. Diagnostic accuracy and reliability of ultrasonography for the detection of fatty liver: a meta-analysis. Hepatology 2011; 54(3): 1082-1090 (PMID 21618575).</li>' +
      '<li>Vidili G. i wsp. SIUMB guidelines and recommendations for the correct use of ultrasound in the management of patients with focal liver disease. Journal of Ultrasound 2018; 22(1): 41-51 (PMID 30580390).</li>' +
      '</ol>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG wątroby?',
    answer:
      'USG wątroby wykrywa zmiany rozlane i ogniskowe w obrębie narządu. Uwidacznia stłuszczenie wątroby, torbiele, naczyniaki oraz ogniska lite wymagające różnicowania, a także cechy przebudowy marskiej, poszerzenie dróg żółciowych i zmiany w pęcherzyku żółciowym. Wykryte nieprawidłowości często wymagają dalszej diagnostyki, którą zleca lekarz.',
  },
  {
    question: 'Czy do USG wątroby trzeba być na czczo?',
    answer:
      'Do USG wątroby należy przyjść na czczo. Zaleca się powstrzymanie od jedzenia przez około 6-8 godzin przed badaniem, co ogranicza ilość gazów w jelitach i poprawia widoczność wątroby oraz pęcherzyka żółciowego. Można wypić niewielką ilość niegazowanej wody, a stałe leki przyjąć zgodnie z zaleceniami lekarza.',
  },
  {
    question: 'Czy USG wykryje stłuszczenie wątroby?',
    answer:
      'USG jest podstawowym badaniem obrazowym w ocenie stłuszczenia wątroby i jest dokładne zwłaszcza w stłuszczeniu umiarkowanym oraz nasilonym. Stłuszczenie odpowiada zwiększonej echogeniczności miąższu. W stłuszczeniu łagodnym czułość jest niższa, dlatego do oceny włóknienia stosuje się dodatkowo elastografię, a wynik interpretuje lekarz.',
  },
  {
    question: 'USG wątroby a USG jamy brzusznej - czym się różnią?',
    answer:
      'USG jamy brzusznej to badanie wielonarządowe, które obejmuje wątrobę razem z trzustką, śledzioną, nerkami i pęcherzykiem żółciowym. Określenie USG wątroby odnosi się do diagnostyki ukierunkowanej na ten jeden narząd, na przykład przy kontroli zmiany ogniskowej lub stłuszczenia. W praktyce wątrobę ocenia się zwykle wraz z sąsiednimi strukturami, a o zakresie badania decyduje lekarz.',
  },
  {
    question: 'Ile kosztuje USG wątroby we Wrocławiu?',
    answer:
      `Cena USG wątroby we Wrocławiu zależy od zakresu badania i tego, czy ocena dotyczy samej wątroby, czy całej jamy brzusznej. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem ${CLINIC.phone}, gdzie umówisz też dogodny termin badania bez skierowania.`,
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG wątroby?',
    answer:
      `USG wątroby we Wrocławiu wykonasz w pracowni USG Bas Clinic przy ${CLINIC.address.street}. Badanie jest prywatne i nie wymaga skierowania, a termin umówisz telefonicznie pod numerem ${CLINIC.phone}. Pracownia przyjmuje od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, a koszt potwierdzisz w cenniku lub podczas rejestracji.`,
  },
];

export default function UsgWatrobyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG wątroby we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG wątroby to celowane badanie ultrasonograficzne oceniające miąższ wątroby, drogi żółciowe i pęcherzyk żółciowy. Wykonujemy je w Bas Clinic we Wrocławiu, na czczo i bez skierowania."
      slug="usg/watroba"
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
