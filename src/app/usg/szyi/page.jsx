import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG szyi Wrocław - tkanki miękkie | Bas Clinic',
  description:
    'USG szyi we Wrocławiu - bezbolesne badanie tkanek miękkich szyi, węzłów chłonnych, ślinianek i naczyń. Bas Clinic, ul. Opatowicka 132. Sprawdź terminy i cenę.',
  path: '/usg/szyi/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG szyi' },
];

const RELATED = [
  'usg/tarczycy',
  'usg/wezlow-chlonnych',
  'usg/slinianek',
  'usg/doppler-tetnic-szyjnych',
].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG szyi?',
    content:
      '<p>USG szyi to kompleksowe, parasolowe badanie ultrasonograficzne całej okolicy szyi, w którym ocenia się leżące pod skórą struktury anatomiczne. Określa się je także mianem USG tkanek miękkich szyi, ultrasonografii szyi czy badania USG struktur szyi. Jest to metoda nieinwazyjna, bezbolesna i bez promieniowania jonizującego, wykorzystująca fale ultradźwiękowe.</p>' +
      '<p>Ultrasonograficzne badanie szyi obejmuje przeglądowo szeroki zakres tkanek miękkich okolicy szyjnej. W jednym badaniu można uwidocznić tarczycę, węzły chłonne szyjne, ślinianki przyuszne i podżuchwowe, a także tkanki miękkie wraz z ewentualnymi zmianami ogniskowymi.</p>' +
      '<p>Obraz USG szyi pozwala dodatkowo ocenić okolicę przytarczyc, choć prawidłowe przytarczyce zwykle nie są w badaniu widoczne, a uwagę zwracają dopiero powiększone przytarczyce. Orientacyjnie uwidacznia się również duże naczynia tej okolicy, jednak szczegółowa ocena przepływu krwi wymaga osobnego badania dopplerowskiego.</p>',
  },
  {
    title: 'Co można ocenić w USG szyi?',
    content:
      '<p>W USG szyi można ocenić wielkość, kształt i strukturę większości tkanek miękkich tej okolicy oraz wykryć obecność zmian, które nie zawsze są wyczuwalne podczas badania palpacyjnego. Badanie szyi w USG pozwala uwidocznić nieprawidłowości, które mogą wymagać dalszej diagnostyki.</p>' +
      '<ul>' +
      '<li><strong>Węzły chłonne</strong> - ocena powiększonych węzłów chłonnych szyjnych, ich wielkości i struktury.</li>' +
      '<li><strong>Tarczyca</strong> - uwidocznienie guzków tarczycy oraz zmian w obrębie miąższu gruczołu.</li>' +
      '<li><strong>Ślinianki</strong> - zmiany w śliniankach, takie jak kamica ślinianek, cechy stanów zapalnych czy zmiany ogniskowe.</li>' +
      '<li><strong>Tkanki miękkie</strong> - torbiele, guzki i inne zmiany w tkankach miękkich okolicy szyjnej.</li>' +
      '<li><strong>Zmiany niewyczuwalne</strong> - ocena drobnych, głęboko położonych zmian, których nie sposób wyczuć przez skórę.</li>' +
      '</ul>' +
      '<p>Należy podkreślić, że obraz ultrasonograficzny pozwala opisać cechy zmian, lecz sam w sobie nie rozpoznaje konkretnej choroby. Charakter wykrytych nieprawidłowości może wskazywać na konieczność dalszej diagnostyki, którą ustala lekarz.</p>',
  },
  {
    title: 'Wskazania do USG szyi',
    content:
      '<p>Wskazaniem do USG szyi są najczęściej dolegliwości lub objawy zlokalizowane w okolicy szyjnej, a także potrzeba kontroli wcześniej opisanych zmian. Ultrasonograficzne badanie szyi bywa zalecane zarówno w diagnostyce wstępnej, jak i w obserwacji już znanych zmian.</p>' +
      '<ul>' +
      '<li>Wyczuwalny guzek, zgrubienie lub opór w obrębie szyi.</li>' +
      '<li>Powiększone węzły chłonne lub ich utrzymujące się powiększenie.</li>' +
      '<li>Obrzęk, asymetria lub niepokojąca zmiana zarysu szyi.</li>' +
      '<li>Ból lub obrzęk w okolicy ślinianek, zwłaszcza nasilający się w trakcie posiłków.</li>' +
      '<li>Kontrola wcześniej opisanych zmian ogniskowych i monitorowanie ich wielkości.</li>' +
      '<li>Objawy mogące sugerować zaburzenia ze strony tarczycy.</li>' +
      '</ul>' +
      '<p>O zasadności i zakresie badania decyduje lekarz na podstawie wywiadu i badania przedmiotowego. USG szyi można jednak wykonać prywatnie również z własnej inicjatywy, bez skierowania.</p>',
  },
  {
    title: 'Jak przygotować się do USG szyi?',
    content:
      '<p>USG szyi nie wymaga żadnego specjalnego przygotowania, a samo badanie można wykonać o dowolnej porze dnia. Nie trzeba być na czczo ani modyfikować przyjmowanych leków, co istotnie ułatwia umówienie wizyty.</p>' +
      '<p>Przed badaniem zaleca się zdjęcie biżuterii z szyi (łańcuszków, naszyjników) oraz odsłonięcie okolicy szyjnej, dlatego warto założyć ubranie z luźnym dekoltem. Pomocne jest również odpięcie kołnierza i zsunięcie odzieży zasłaniającej obojczyki.</p>' +
      '<p>Aby USG szyi miało wartość porównawczą, warto zabrać ze sobą poprzednie wyniki badań obrazowych oraz dokumentację medyczną dotyczącą wcześniej opisanych zmian. Dotyczy to także wyników badań laboratoryjnych, na przykład hormonów tarczycy, jeśli były wykonywane.</p>',
  },
  {
    title: 'USG szyi a badania celowane',
    content:
      '<p>USG szyi jest badaniem parasolowym, które przeglądowo ocenia całą okolicę szyjną, natomiast szczegółowa analiza pojedynczej struktury należy do badań celowanych. Taki podział pozwala dobrać zakres badania do konkretnego problemu klinicznego.</p>' +
      '<p>Gdy uwagę skupia konkretny narząd, dedykowane są badania ukierunkowane. Dokładniejszą ocenę gruczołu tarczowego, jego guzków i objętości umożliwia <a href="/usg/tarczycy/">USG tarczycy</a>. Pogłębioną analizę powiększonych lub zmienionych węzłów zapewnia <a href="/usg/wezlow-chlonnych/">USG węzłów chłonnych</a>, a ukierunkowaną ocenę gruczołów ślinowych pod kątem kamicy i zmian zapalnych - <a href="/usg/slinianek/">USG ślinianek</a>.</p>' +
      '<p>Oddzielnym zagadnieniem jest ocena przepływu krwi w naczyniach. Analiza tętnic szyjnych pod kątem przepływu oraz blaszek miażdżycowych to osobne badanie dopplerowskie tętnic szyjnych. W ramach USG szyi duże naczynia uwidacznia się jedynie orientacyjnie, dlatego pełna ocena układu naczyniowego wykracza poza zakres tego badania.</p>',
  },
  {
    title: 'Jak przebiega USG szyi i kiedy wynik?',
    content:
      '<p>USG szyi przebiega w pozycji leżącej z lekko odchyloną do tyłu głową, co ułatwia dostęp do struktur okolicy szyjnej. Badanie jest całkowicie bezbolesne i nie wiąże się z promieniowaniem jonizującym.</p>' +
      '<p>Na skórę nanosi się żel ułatwiający przewodzenie fal ultradźwiękowych, a następnie przesuwa głowicę liniową po okolicy szyi. Wykonanie USG szyi trwa zwykle kilkanaście minut, w zależności od liczby ocenianych struktur i zakresu badania.</p>' +
      '<p>Bezpośrednio po badaniu pacjent otrzymuje pisemny opis sporządzony przez lekarza wykonującego ultrasonografię. Warto pamiętać, że USG szyi nie zastępuje konsultacji lekarskiej - wynik badania interpretuje lekarz w kontekście całości obrazu klinicznego i w razie potrzeby zleca dalszą diagnostykę.</p>' +
      '<p>USG szyi we Wrocławiu wykonuje się w Bas Clinic przy ul. Opatowicka 132. Informacje o terminach i rejestracji dostępne są pod numerem +48 690 511 511, a pełną ofertę prezentuje <a href="/usg/">pracownia USG we Wrocławiu</a>.</p>',
  },
];

const FAQ = [
  {
    question: 'Co obejmuje USG szyi?',
    answer:
      'USG szyi obejmuje przeglądową ocenę tkanek miękkich całej okolicy szyjnej. W badaniu uwidacznia się tarczycę, węzły chłonne szyjne, ślinianki przyuszne i podżuchwowe oraz tkanki miękkie wraz z ewentualnymi zmianami ogniskowymi. Orientacyjnie ocenia się także okolicę przytarczyc i duże naczynia, jednak szczegółowa analiza pojedynczej struktury wymaga badania celowanego.',
  },
  {
    question: 'Czy do USG szyi trzeba być na czczo?',
    answer:
      'Do USG szyi nie trzeba być na czczo. Badanie nie wymaga żadnego specjalnego przygotowania, można je wykonać o dowolnej porze dnia, bez modyfikacji posiłków i przyjmowanych leków. Zaleca się jedynie zdjęcie biżuterii z szyi oraz zabranie poprzednich wyników badań do porównania.',
  },
  {
    question: 'Czym różni się USG szyi od USG tarczycy?',
    answer:
      'USG szyi różni się od USG tarczycy zakresem badania. USG szyi to badanie parasolowe, które przeglądowo ocenia całą okolicę szyjną, w tym węzły chłonne, ślinianki i tkanki miękkie. USG tarczycy jest natomiast badaniem celowanym, skupionym na szczegółowej ocenie gruczołu tarczowego, jego guzków i objętości. Jeśli problem dotyczy wyłącznie tarczycy, zwykle wybiera się badanie ukierunkowane.',
  },
  {
    question: 'Ile kosztuje USG szyi we Wrocławiu?',
    answer:
      'Cena USG szyi we Wrocławiu zależy od zakresu badania i ocenianych struktur, dlatego ustala się ją indywidualnie. Aktualny cennik dostępny jest w zakładce Cennik na stronie Bas Clinic oraz pod numerem 690 511 511, gdzie można też potwierdzić koszt i umówić termin.',
  },
  {
    question: 'Czy na USG szyi potrzebne jest skierowanie?',
    answer:
      'Na USG szyi skierowanie nie jest wymagane. Badanie wykonywane jest prywatnie, więc można je zarezerwować bez skierowania, również z własnej inicjatywy. Warto jednak zabrać wcześniejszą dokumentację medyczną, jeśli badanie ma charakter kontrolny.',
  },
  {
    question: 'Czy USG szyi ocenia tętnice szyjne?',
    answer:
      'USG szyi ocenia tętnice szyjne jedynie orientacyjnie, uwidaczniając duże naczynia tej okolicy. Szczegółowa analiza przepływu krwi oraz blaszek miażdżycowych w tętnicach szyjnych to osobne badanie - USG Doppler tętnic szyjnych. Pełna ocena układu naczyniowego wykracza poza zakres standardowego USG szyi.',
  },
];

export default function UsgSzyiPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG szyi we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG szyi to kompleksowe badanie tkanek miękkich szyi, w którym ocenia się węzły chłonne, ślinianki, tarczycę oraz inne struktury tej okolicy. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/szyi"
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
