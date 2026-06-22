import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';

export const metadata = generatePageMetadata({
  title: 'USG Doppler naczyń Wrocław | Bas Clinic',
  description:
    'USG Doppler naczyń we Wrocławiu (ul. Opatowicka 132). Badanie przepływu krwi w tętnicach i żyłach - miażdżyca, zwężenia, zakrzepica. Umów termin w Bas Clinic.',
  path: '/usg/doppler/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG Doppler naczyń' },
];

const RELATED = [
  'usg/doppler-zyl-konczyn-dolnych',
  'usg/doppler-tetnic-szyjnych',
  'usg/nerek',
].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG Doppler naczyń?',
    content:
      '<p>USG Doppler naczyń to nieinwazyjne badanie ultrasonograficzne, które obrazuje przepływ krwi w tętnicach i żyłach metodą dopplerowską. Łączy obraz struktury ściany naczynia z oceną kierunku oraz prędkości płynącej krwi, co odróżnia je od klasycznej ultrasonografii pokazującej wyłącznie anatomię narządów.</p>' +
      '<p>Badanie dopplerowskie bywa nazywane także ultrasonografią dopplerowską, USG dopplerowskim, USG naczyń lub badaniem przepływu krwi. Wszystkie te określenia odnoszą się do tej samej techniki, w której efekt Dopplera pozwala zarejestrować ruch krwinek wewnątrz naczynia.</p>' +
      '<p>USG metodą Dopplera jest całkowicie bezbolesne i nie wykorzystuje promieniowania jonizującego, dzięki czemu może być powtarzane wielokrotnie. Należy pamiętać, że obraz oraz wynik zawsze interpretuje lekarz w odniesieniu do objawów i pełnego obrazu klinicznego.</p>',
  },
  {
    title: 'Rodzaje badań dopplerowskich naczyń',
    content:
      '<p>Badania dopplerowskie naczyń obejmują kilka odrębnych zakresów, dobieranych w zależności od ocenianej okolicy ciała. USG Doppler naczyń pełni rolę punktu wyjścia, z którego kieruje się pacjenta do węższego, ukierunkowanego badania konkretnego obszaru.</p>' +
      '<ul>' +
      '<li><strong>Tętnice dogłowowe i szyjne oraz tętnice kręgowe</strong> - ocena tętnic doprowadzających krew do mózgu, istotna w profilaktyce naczyniowej. Szczegółowy zakres opisuje badanie <a href="/usg/doppler-tetnic-szyjnych/">USG Doppler tętnic szyjnych</a>.</li>' +
      '<li><strong>Żyły kończyn dolnych</strong> - ocena drożności i wydolności żył nóg, przydatna przy żylakach, obrzękach oraz podejrzeniu zakrzepicy. Pełen opis zawiera badanie <a href="/usg/doppler-zyl-konczyn-dolnych/">USG Doppler żył kończyn dolnych</a>.</li>' +
      '<li><strong>Naczynia jamy brzusznej</strong> - ocena aorty brzusznej oraz tętnic nerkowych. Tętnice nerkowe ocenia się również w ramach badania <a href="/usg/nerek/">USG nerek</a>.</li>' +
      '</ul>' +
      '<p>W obrębie każdego z tych badań stosuje się różne tryby obrazowania przepływu: Doppler kolorowy (color Doppler) nakłada barwną mapę przepływu na obraz naczynia, Doppler spektralny przedstawia prędkość krwi w formie wykresu, a opcja duplex łączy obraz struktury z oceną przepływu. Są to sposoby prezentacji przepływu w trakcie jednego badania, a nie osobne usługi.</p>',
  },
  {
    title: 'Co ocenia USG Doppler?',
    content:
      '<p>USG Doppler ocenia przepływ krwi oraz stan ścian naczyń, dostarczając informacji o ich drożności i ewentualnych nieprawidłowościach. Badanie pozwala uwidocznić zarówno tętnice, jak i żyły w wybranej okolicy ciała.</p>' +
      '<ul>' +
      '<li>kierunek i prędkość przepływu krwi w tętnicach i żyłach,</li>' +
      '<li>zwężenia i niedrożności naczyń ograniczające przepływ,</li>' +
      '<li>blaszki miażdżycowe oraz pogrubienie ściany naczynia,</li>' +
      '<li>refluks i cechy niewydolności żylnej,</li>' +
      '<li>cechy zakrzepicy żył głębokich (DVT).</li>' +
      '</ul>' +
      '<p>Wynik badania pomaga oszacować ryzyko naczyniowe i może wskazywać na konieczność dalszej diagnostyki, jednak USG Doppler nie stanowi ostatecznego rozpoznania choroby. Przy podejrzeniu zakrzepicy żył głębokich należy traktować sytuację jako stan pilny i niezwłocznie skonsultować się z lekarzem.</p>',
  },
  {
    title: 'Wskazania do USG Doppler naczyń',
    content:
      '<p>Wskazaniem do USG Doppler naczyń są objawy sugerujące zaburzenia przepływu krwi w tętnicach lub żyłach. Badanie dopplerowskie zaleca się zarówno w diagnostyce dolegliwości, jak i w ramach kontroli oraz profilaktyki naczyniowej.</p>' +
      '<ul>' +
      '<li>objawy miażdżycy oraz chromanie przestankowe (ból nóg podczas chodzenia),</li>' +
      '<li>obrzęki, ból i uczucie ciężkości kończyn dolnych,</li>' +
      '<li>żylaki i widoczne zmiany żylne,</li>' +
      '<li>podejrzenie zakrzepicy żył głębokich,</li>' +
      '<li>profilaktyka udaru i ocena tętnic doprowadzających krew do mózgu,</li>' +
      '<li>zawroty głowy oraz inne objawy ze strony układu nerwowego,</li>' +
      '<li>kontrola drożności naczyń po zabiegach naczyniowych.</li>' +
      '</ul>' +
      '<p>O zasadności wykonania konkretnego badania oraz jego zakresie decyduje lekarz na podstawie wywiadu i objawów. USG dopplerowskie nie zastępuje konsultacji lekarskiej, lecz ją uzupełnia.</p>',
  },
  {
    title: 'Jak przygotować się do USG Doppler?',
    content:
      '<p>Do USG Doppler naczyń zwykle nie jest wymagane specjalne przygotowanie i badanie można wykonać o dowolnej porze dnia. Zakres przygotowania zależy od ocenianego obszaru ciała.</p>' +
      '<p>W przypadku naczyń jamy brzusznej, na przykład aorty brzusznej oraz tętnic nerkowych, czasem zaleca się badanie na czczo, aby ograniczyć gazy jelitowe utrudniające obrazowanie. Szczegółowe zalecenia przekazuje się przy ustalaniu terminu, zależnie od planowanego zakresu badania.</p>' +
      '<p>Zaleca się wygodny strój, który umożliwia łatwe odsłonięcie badanej okolicy, na przykład szyi, brzucha lub nóg. Warto zabrać ze sobą dokumentację wcześniejszych badań naczyniowych, jeśli pacjent nią dysponuje.</p>',
  },
  {
    title: 'Jak przebiega USG Doppler i kiedy wynik?',
    content:
      '<p>USG Doppler przebiega podobnie do klasycznej ultrasonografii i polega na przesuwaniu głowicy po skórze pokrytej żelem sprzęgającym. Żel poprawia kontakt głowicy ze skórą i jakość obrazu, a po badaniu łatwo go usunąć.</p>' +
      '<p>Podczas oceny przepływu na ekranie pojawia się kolorowe odwzorowanie krwi płynącej w naczyniu, a aparat odtwarza słyszalny sygnał przepływu. Badanie jest bezbolesne, nie wykorzystuje promieniowania, a jego czas zależy od zakresu i liczby ocenianych naczyń.</p>' +
      '<p>Opis badania sporządza lekarz wykonujący ultrasonografię i to on interpretuje wynik w kontekście klinicznym. USG dopplerowskie nie zastępuje konsultacji lekarskiej, a w razie potrzeby lekarz może zalecić dalszą diagnostykę lub poszerzenie zakresu badań. Badanie wykonuje <a href="/usg/">pracownia USG we Wrocławiu</a>, a aktualną ofertę i ceny przedstawia <a href="/cennik/">cennik</a> Bas Clinic.</p>',
  },
];

const FAQ = [
  {
    question: 'Co to jest USG Doppler naczyń?',
    answer:
      'USG Doppler naczyń to nieinwazyjne badanie ultrasonograficzne, które ocenia przepływ krwi w tętnicach i żyłach metodą dopplerowską. Łączy obraz struktury naczynia z oceną kierunku oraz prędkości przepływu, dzięki czemu pozwala uwidocznić zwężenia, blaszki miażdżycowe i cechy zakrzepicy. Wynik interpretuje lekarz w odniesieniu do objawów pacjenta.',
  },
  {
    question: 'Co wykrywa badanie dopplerowskie?',
    answer:
      'Badanie dopplerowskie pozwala uwidocznić zaburzenia przepływu krwi, zwężenia i niedrożności naczyń, blaszki miażdżycowe, refluks żylny oraz cechy zakrzepicy żył głębokich. USG dopplerowskie pomaga oszacować ryzyko naczyniowe i może wskazywać na konieczność dalszej diagnostyki, ale nie stanowi ostatecznego rozpoznania choroby. Przy podejrzeniu zakrzepicy żył głębokich konieczna jest pilna konsultacja lekarska.',
  },
  {
    question: 'Czym różni się USG Doppler od zwykłego USG?',
    answer:
      'USG Doppler różni się od zwykłego USG tym, że oprócz obrazu struktury naczynia ocenia także przepływ krwi - jego kierunek i prędkość. Klasyczna ultrasonografia pokazuje przede wszystkim anatomię narządów, natomiast badanie dopplerowskie odwzorowuje płynącą krew w postaci kolorowej mapy i sygnału dźwiękowego. Dzięki temu metoda Dopplera nadaje się do oceny tętnic i żył.',
  },
  {
    question: 'Jak przygotować się do USG Doppler?',
    answer:
      'Przygotowanie do USG Doppler zwykle nie jest konieczne, a zakres zaleceń zależy od ocenianego obszaru. W przypadku naczyń jamy brzusznej, takich jak aorta i tętnice nerkowe, czasem zaleca się badanie na czczo, aby ograniczyć gazy jelitowe. Warto założyć wygodny strój umożliwiający odsłonięcie badanej okolicy oraz zabrać dokumentację wcześniejszych badań naczyniowych.',
  },
  {
    question: 'Ile kosztuje USG Doppler we Wrocławiu?',
    answer:
      'Cena USG Doppler we Wrocławiu zależy od zakresu badania oraz liczby ocenianych obszarów naczyniowych. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511. Pod tym numerem można również ustalić termin badania i uzyskać informacje o zalecanym przygotowaniu.',
  },
  {
    question: 'Czy na USG Doppler potrzebne jest skierowanie?',
    answer:
      'Na USG Doppler w Bas Clinic skierowanie nie jest wymagane, ponieważ badanie wykonywane jest prywatnie. Wystarczy umówić termin telefonicznie pod numerem 690 511 511. Przy rejestracji warto podać, który obszar naczyniowy ma zostać oceniony, aby dobrać odpowiedni zakres badania.',
  },
];

export default function UsgDopplerPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG Doppler naczyń we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG Doppler naczyń (badanie dopplerowskie) ocenia przepływ krwi w tętnicach i żyłach, pomagając wykryć zwężenia, blaszki miażdżycowe i zakrzepicę. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/doppler"
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
