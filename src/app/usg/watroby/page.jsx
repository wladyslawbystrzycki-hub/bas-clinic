import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';

export const metadata = generatePageMetadata({
  title: 'USG wątroby Wrocław - badanie | Bas Clinic',
  description:
    'USG wątroby we Wrocławiu (ul. Opatowicka 132). Ocena stłuszczenia, zmian ogniskowych i dróg żółciowych. Badanie na czczo, bez skierowania. Umów termin.',
  path: '/usg/watroby/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG wątroby' },
];

const RELATED = ['usg/jamy-brzusznej', 'usg/nerek', 'usg/doppler'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG wątroby?',
    content:
      '<p>USG wątroby to ultrasonografia ukierunkowana na ocenę miąższu wątroby oraz sąsiadujących z nią dróg żółciowych i pęcherzyka żółciowego. Badanie ultrasonograficzne wątroby wykorzystuje fale ultradźwiękowe i nie naraża pacjenta na promieniowanie jonizujące, dzięki czemu w razie potrzeby można je wielokrotnie powtarzać.</p><p>Ultrasonografia wątroby pozwala określić wielkość narządu, jego echogeniczność (czyli sposób odbijania fal), strukturę oraz ewentualne zmiany ogniskowe. Badanie obrazuje również żyłę wrotną i drogi żółciowe, co bywa istotne w ocenie krążenia wątrobowego oraz odpływu żółci.</p><p>Ocena wątroby jest stałym elementem szerszego badania, jakim jest <a href="/usg/jamy-brzusznej/">USG jamy brzusznej</a>. Stronę poświęconą samej wątrobie przygotowano dla osób, które kierowane są na celowaną kontrolę tego narządu, na przykład przy nieprawidłowych wynikach prób wątrobowych.</p>',
  },
  {
    title: 'Co wykrywa USG wątroby?',
    content:
      '<p>USG wątroby pozwala uwidocznić zarówno zmiany rozlane w obrębie całego miąższu, jak i pojedyncze ogniska. Badanie pomaga ocenić charakter nieprawidłowości i wskazać, czy konieczna jest dalsza diagnostyka.</p><ul><li>stłuszczenie wątroby, które w obrazie USG odpowiada zwiększonej, jednorodnej echogeniczności miąższu;</li><li>zmiany ogniskowe, takie jak torbiele, naczyniaki oraz ogniska lite wymagające różnicowania;</li><li>cechy mogące towarzyszyć przebudowie marskiej oraz nadciśnieniu wrotnemu, na przykład nierówny zarys i poszerzenie żyły wrotnej;</li><li>poszerzenie wewnątrz- i zewnątrzwątrobowych dróg żółciowych, które może wskazywać na utrudniony odpływ żółci;</li><li>zmiany w pęcherzyku żółciowym, w tym kamicę i pogrubienie ściany.</li></ul><p>Należy podkreślić, że USG wątroby nie rozpoznaje samodzielnie nowotworu ani nie pozwala jednoznacznie określić charakteru zmiany ogniskowej. Stłuszczenie czy cechy włóknienia opisuje się jako obraz ultrasonograficzny, a nie ostateczne rozpoznanie choroby. Wykryte zmiany często wymagają poszerzenia diagnostyki, na przykład o badania laboratoryjne, elastografię, tomografię komputerową lub rezonans magnetyczny. Interpretacji wyniku w odniesieniu do obrazu klinicznego dokonuje lekarz.</p>',
  },
  {
    title: 'Wskazania do USG wątroby',
    content:
      '<p>Wskazaniem do USG wątroby są najczęściej nieprawidłowe wyniki prób wątrobowych oraz potrzeba kontroli wcześniej rozpoznanych zmian. Ultrasonografię wątroby zaleca się także przy dolegliwościach sugerujących chorobę tego narządu.</p><ul><li>podwyższona aktywność enzymów wątrobowych w badaniach krwi;</li><li>podejrzenie lub monitorowanie stłuszczenia wątroby;</li><li>ból lub uczucie pełności w prawym podżebrzu;</li><li>kontrola wcześniej opisanych zmian ogniskowych, na przykład torbieli lub naczyniaka;</li><li>obserwacja przewlekłych chorób wątroby oraz ocena w trakcie ich leczenia;</li><li>żółtaczka lub podejrzenie utrudnionego odpływu żółci.</li></ul><p>O wskazaniach oraz zakresie badania decyduje lekarz na podstawie wywiadu i dotychczasowych wyników. USG wątroby uzupełnia diagnostykę, jednak jej nie zastępuje.</p>',
  },
  {
    title: 'USG wątroby a USG jamy brzusznej - czym się różnią?',
    content:
      '<p>USG wątroby i USG jamy brzusznej to badania pokrewne, które różnią się zakresem. USG jamy brzusznej to badanie wielonarządowe, podczas którego ocenia się wątrobę razem z trzustką, śledzioną, nerkami, pęcherzykiem żółciowym oraz innymi strukturami jamy brzusznej.</p><p>Określenie USG wątroby stosuje się natomiast wtedy, gdy diagnostyka koncentruje się na tym jednym narządzie, na przykład w ramach kontroli zmiany ogniskowej lub monitorowania stłuszczenia. W praktyce ocena wątroby niemal zawsze wykonywana jest w kontekście sąsiednich struktur, dlatego o ostatecznym zakresie badania decyduje lekarz.</p><p>Gdy potrzebna jest szersza ocena narządów jamy brzusznej, właściwym badaniem pozostaje <a href="/usg/jamy-brzusznej/">USG jamy brzusznej</a>. Ocenę unaczynienia wątroby oraz przepływu w żyle wrotnej umożliwia dodatkowo <a href="/usg/doppler/">USG Doppler naczyń</a>.</p>',
  },
  {
    title: 'Jak przygotować się do USG wątroby?',
    content:
      '<p>Do USG wątroby należy przygotować się tak samo jak do USG jamy brzusznej, czyli przyjść na badanie na czczo. Zaleca się powstrzymanie od jedzenia przez około 6-8 godzin przed badaniem, co ogranicza ilość gazów w jelitach i pozwala lepiej uwidocznić wątrobę oraz pęcherzyk żółciowy.</p><p>W dniu badania można wypić niewielką ilość niegazowanej wody. Przyjmowane na stałe leki należy zażyć zgodnie z zaleceniami lekarza prowadzącego, popijając je niewielką ilością wody. W dniu poprzedzającym badanie warto unikać potraw wzdymających oraz napojów gazowanych.</p><p>Na badanie warto zabrać wyniki wcześniejszych badań obrazowych oraz aktualne wyniki prób wątrobowych, jeśli były wykonywane. Umożliwia to lekarzowi porównanie obrazu z poprzednimi opisami.</p>',
  },
  {
    title: 'Jak przebiega badanie i gdzie wykonać USG wątroby we Wrocławiu?',
    content:
      '<p>Badanie USG wątroby jest bezbolesne i trwa zwykle kilkanaście minut. Pacjent układa się na plecach, a na skórę brzucha nakładany jest żel ułatwiający przewodzenie fal ultradźwiękowych. Lekarz przesuwa głowicę po prawej okolicy podżebrowej, a w trakcie badania może poprosić o głęboki wdech i jego zatrzymanie, co poprawia widoczność wątroby.</p><p>Opis wyniku sporządza lekarz wykonujący ultrasonografię, zwykle bezpośrednio po badaniu. Warto pamiętać, że USG wątroby jest badaniem obrazowym i nie zastępuje konsultacji lekarskiej ani badań laboratoryjnych, lecz stanowi ich uzupełnienie.</p><p>USG wątroby wykonujemy w <a href="/usg/">pracowni USG we Wrocławiu</a> przy ulicy Opatowickiej 132. Badanie realizowane jest prywatnie, bez skierowania, a dogodny termin można ustalić telefonicznie pod numerem +48 690 511 511.</p>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG wątroby?',
    answer:
      'USG wątroby wykrywa zmiany rozlane i ogniskowe w obrębie narządu. Pozwala uwidocznić stłuszczenie wątroby (zwiększona echogeniczność miąższu), torbiele, naczyniaki oraz ogniska lite wymagające różnicowania, a także cechy mogące towarzyszyć przebudowie marskiej, poszerzenie dróg żółciowych i zmiany w pęcherzyku żółciowym. USG nie rozpoznaje samodzielnie nowotworu, a wykryte zmiany często wymagają dalszej diagnostyki, którą zleca lekarz.',
  },
  {
    question: 'Czy do USG wątroby trzeba być na czczo?',
    answer:
      'Do USG wątroby należy przyjść na czczo. Zaleca się powstrzymanie od jedzenia przez około 6-8 godzin przed badaniem, co ogranicza ilość gazów w jelitach i poprawia widoczność wątroby oraz pęcherzyka żółciowego. Można wypić niewielką ilość niegazowanej wody, a stałe leki przyjąć zgodnie z zaleceniami lekarza.',
  },
  {
    question: 'Czy USG wykryje stłuszczenie wątroby?',
    answer:
      'USG jest podstawowym badaniem obrazowym w ocenie stłuszczenia wątroby. Stłuszczenie odpowiada w obrazie zwiększonej, jednorodnej echogeniczności miąższu. USG opisuje jednak obraz ultrasonograficzny, a nie stopień zaawansowania choroby, dlatego do dokładniejszej oceny włóknienia stosuje się dodatkowe metody, na przykład elastografię. Interpretacji dokonuje lekarz w odniesieniu do wyników badań krwi.',
  },
  {
    question: 'USG wątroby a USG jamy brzusznej - czym się różnią?',
    answer:
      'USG jamy brzusznej to badanie wielonarządowe, które obejmuje wątrobę razem z trzustką, śledzioną, nerkami i pęcherzykiem żółciowym. Określenie USG wątroby odnosi się do diagnostyki ukierunkowanej na ten jeden narząd, na przykład przy kontroli zmiany ogniskowej lub stłuszczenia. W praktyce wątrobę ocenia się zwykle wraz z sąsiednimi strukturami, a o zakresie badania decyduje lekarz.',
  },
  {
    question: 'Ile kosztuje USG wątroby we Wrocławiu?',
    answer:
      'Cena USG wątroby we Wrocławiu zależy od zakresu badania. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511, gdzie można też ustalić dogodny termin badania.',
  },
  {
    question: 'Czy na USG wątroby potrzebne jest skierowanie?',
    answer:
      'Na USG wątroby wykonywane prywatnie skierowanie nie jest wymagane. Badanie można umówić bezpośrednio, kontaktując się z Bas Clinic. Warto zabrać ze sobą wyniki wcześniejszych badań obrazowych oraz prób wątrobowych, jeśli były wykonywane, aby lekarz mógł porównać obraz z poprzednimi opisami.',
  },
];

export default function UsgWatrobyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG wątroby we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG wątroby to celowane badanie ultrasonograficzne oceniające miąższ wątroby, drogi żółciowe i pęcherzyk żółciowy. Wykonujemy je w Bas Clinic we Wrocławiu, na czczo i bez skierowania."
      slug="usg/watroby"
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
