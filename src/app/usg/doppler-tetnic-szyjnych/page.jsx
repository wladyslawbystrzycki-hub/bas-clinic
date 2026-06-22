import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG Doppler tętnic szyjnych Wrocław | Bas Clinic',
  description:
    'USG Doppler tętnic szyjnych we Wrocławiu - ocena blaszki miażdżycowej i ryzyka udaru. Badanie tętnic dogłowowych w Bas Clinic, ul. Opatowicka 132.',
  path: '/usg/doppler-tetnic-szyjnych/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG Doppler tętnic szyjnych' },
];

const RELATED = ['usg/doppler', 'usg/szyi', 'usg/tarczycy'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG Doppler tętnic szyjnych?',
    content:
      '<p>USG Doppler tętnic szyjnych to badanie ultrasonograficzne oceniające przepływ krwi w tętnicach szyjnych oraz tętnicach kręgowych, czyli w naczyniach zaopatrujących mózg. Tętnice te określa się wspólnym mianem tętnic dogłowowych, ponieważ doprowadzają krew do struktur głowy.</p>' +
      '<p>Badanie łączy obraz ultrasonograficzny w skali szarości z metodą dopplerowską, która pozwala uwidocznić kierunek i prędkość przepływu krwi. Dzięki temu ocena tętnic szyjnych obejmuje zarówno wygląd ściany naczynia, jak i parametry hemodynamiczne strumienia krwi.</p>' +
      '<p>W terminologii medycznej badanie funkcjonuje pod kilkoma równoważnymi nazwami. Najczęściej używa się określeń: USG dopplerowskie szyi, USG naczyń szyi, doppler tętnic dogłowowych oraz ultrasonografia dopplerowska tętnic szyjnych.</p>',
  },
  {
    title: 'Co wykrywa USG Doppler tętnic szyjnych?',
    content:
      '<p>USG Doppler tętnic szyjnych uwidacznia blaszki miażdżycowe, zwężenia (stenozy) oraz zmiany przepływu w naczyniach dogłowowych. Badanie pozwala określić lokalizację blaszki, jej charakter i orientacyjny stopień zwężenia światła naczynia, a w zaawansowanych zmianach także niedrożność tętnicy.</p>' +
      '<p>Istotnym elementem oceny jest grubość kompleksu intima-media (IMT), czyli wewnętrznych warstw ściany tętnicy. Pogrubienie tego kompleksu uznaje się za wczesny wskaźnik zmian miażdżycowych, dlatego ocena tętnic szyjnych bywa wykorzystywana w profilaktyce naczyniowej.</p>' +
      '<p>Ocena przepływu w tętnicach szyjnych pomaga oszacować ryzyko incydentów naczyniowo-mózgowych. Należy podkreślić, że badanie nie rozpoznaje udaru ani go nie diagnozuje. USG Doppler tętnic szyjnych pozwala jedynie ocenić czynniki ryzyka i może wskazywać na konieczność dalszej diagnostyki oraz postępowania ustalanego przez lekarza.</p>',
  },
  {
    title: 'Wskazania do USG Doppler tętnic szyjnych',
    content:
      '<p>Wskazaniem do USG Doppler tętnic szyjnych jest przede wszystkim profilaktyka i monitorowanie miażdżycy u osób z czynnikami ryzyka sercowo-naczyniowego. Badanie dopplerowskie tętnic szyjnych zaleca się szczególnie przy współistnieniu kilku obciążeń jednocześnie.</p>' +
      '<ul>' +
      '<li>Nadciśnienie tętnicze oraz podwyższony poziom cholesterolu</li>' +
      '<li>Cukrzyca i zaburzenia gospodarki węglowodanowej</li>' +
      '<li>Palenie tytoniu oraz dodatni wywiad rodzinny w kierunku miażdżycy</li>' +
      '<li>Zawroty głowy, zaburzenia równowagi oraz szumy uszne</li>' +
      '<li>Przebyty incydent niedokrwienny mózgu (TIA lub udar)</li>' +
      '<li>Szmer naczyniowy słyszalny nad tętnicą szyjną podczas badania lekarskiego</li>' +
      '<li>Kwalifikacja przed planowanymi zabiegami operacyjnymi i kardiochirurgicznymi</li>' +
      '</ul>' +
      '<p>Decyzję o zakresie diagnostyki podejmuje lekarz na podstawie objawów i obciążeń pacjenta. USG tętnic dogłowowych może stanowić uzupełnienie szerszej oceny układu krążenia.</p>',
  },
  {
    title: 'Jak przygotować się do badania?',
    content:
      '<p>USG Doppler tętnic szyjnych nie wymaga specjalnego przygotowania. Pacjent nie musi być na czczo i może przyjmować stale stosowane leki zgodnie z zaleceniami lekarza prowadzącego.</p>' +
      '<p>Zaleca się odsłonięcie okolicy szyi, dlatego wygodniej jest zrezygnować z odzieży z wysokim kołnierzem lub golfem. Z okolicy szyi i dekoltu warto wcześniej zdjąć biżuterię, ponieważ może utrudniać dostęp głowicy do naczyń.</p>' +
      '<p>Na badanie dopplerowskie tętnic szyjnych dobrze jest zabrać dokumentację z wcześniejszych badań oraz informacje o przyjmowanych lekach. Ułatwia to lekarzowi interpretację obrazu i porównanie z poprzednimi wynikami.</p>',
  },
  {
    title: 'Jak przebiega USG Doppler tętnic szyjnych i kiedy wynik?',
    content:
      '<p>USG Doppler tętnic szyjnych wykonuje się w pozycji leżącej, z głową lekko odchyloną do tyłu i odwróconą na bok, co poprawia dostęp do naczyń po obu stronach szyi. Na skórę nakłada się żel ułatwiający przewodzenie fal ultradźwiękowych.</p>' +
      '<p>Badanie przeprowadza się głowicą liniową, oceniając obie strony szyi. Tryb dopplerowski umożliwia kolorowe odwzorowanie przepływu oraz sygnał dźwiękowy strumienia krwi, dzięki czemu ocena tętnic szyjnych obejmuje zarówno obraz ściany naczynia, jak i parametry przepływu. Procedura jest bezbolesna i nie wykorzystuje promieniowania jonizującego.</p>' +
      '<p>Opis badania sporządza lekarz wykonujący ultrasonografię, zwykle bezpośrednio po jego zakończeniu. Wynik USG naczyń dogłowowych należy traktować jako element diagnostyki, który nie zastępuje konsultacji lekarskiej. Ostatecznej interpretacji i decyzji o dalszym postępowaniu dokonuje lekarz, łącząc obraz z objawami i wynikami innych badań. Pełną ofertę diagnostyki obrazowej prezentuje <a href="/usg/">pracownia USG we Wrocławiu</a>.</p>',
  },
  {
    title: 'USG Doppler tętnic szyjnych a USG szyi',
    content:
      '<p>USG Doppler tętnic szyjnych i USG szyi to dwa odmienne badania, które różnią się ocenianym obszarem. Doppler koncentruje się na naczyniach i przepływie krwi w tętnicach dogłowowych, natomiast badanie tkanek miękkich obejmuje inne struktury tej okolicy.</p>' +
      '<p><a href="/usg/szyi/">USG szyi</a> ocenia tkanki miękkie, takie jak węzły chłonne, ślinianki oraz pozostałe struktury szyi, i nie służy do oceny przepływu w naczyniach dogłowowych. Z kolei przy podejrzeniu zmian w obrębie gruczołu tarczowego właściwym badaniem celowanym jest <a href="/usg/tarczycy/">USG tarczycy</a>.</p>' +
      '<p>USG Doppler tętnic szyjnych stanowi część szerszej diagnostyki naczyniowej. W zależności od wskazań lekarz może rozszerzyć ocenę o <a href="/usg/doppler/">USG Doppler naczyń</a> innych obszarów ciała. Aktualne ceny poszczególnych badań znajdują się w zakładce <a href="/cennik/">cennik</a>.</p>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG Doppler tętnic szyjnych?',
    answer:
      'USG Doppler tętnic szyjnych uwidacznia blaszki miażdżycowe, zwężenia (stenozy) oraz zmiany przepływu krwi w tętnicach dogłowowych. Badanie pozwala ocenić grubość kompleksu intima-media, stopień zwężenia światła naczynia oraz kierunek przepływu, a w zaawansowanych przypadkach także niedrożność tętnicy. Wynik pomaga oszacować nasilenie zmian naczyniowych, ale interpretuje go lekarz w odniesieniu do całości obrazu klinicznego.',
  },
  {
    question: 'Czy USG Doppler tętnic szyjnych pozwala ocenić ryzyko udaru?',
    answer:
      'USG Doppler tętnic szyjnych pomaga oszacować ryzyko incydentów naczyniowo-mózgowych poprzez ocenę blaszek miażdżycowych, stopnia zwężenia i przepływu w tętnicach dogłowowych. Badanie nie rozpoznaje udaru ani go nie diagnozuje. Pozwala jedynie ocenić czynniki ryzyka i może wskazywać na konieczność dalszej diagnostyki oraz postępowania ustalanego przez lekarza. USG nie zastępuje konsultacji lekarskiej.',
  },
  {
    question: 'Jak przygotować się do USG Doppler tętnic szyjnych?',
    answer:
      'Do USG Doppler tętnic szyjnych nie trzeba się specjalnie przygotowywać. Pacjent nie musi być na czczo i może przyjmować stale stosowane leki. Zaleca się odsłonięcie okolicy szyi, dlatego warto zrezygnować z golfu lub odzieży z wysokim kołnierzem, oraz zdjąć biżuterię z okolicy szyi i dekoltu. Dobrze jest również zabrać dokumentację z wcześniejszych badań.',
  },
  {
    question: 'Ile kosztuje USG Doppler tętnic szyjnych we Wrocławiu?',
    answer:
      'Cena USG Doppler tętnic szyjnych we Wrocławiu zależy od zakresu badania i jest ustalana indywidualnie. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511. Badanie wykonujemy w Bas Clinic przy ul. Opatowickiej 132 we Wrocławiu.',
  },
  {
    question: 'Czy na USG Doppler tętnic szyjnych potrzebne jest skierowanie?',
    answer:
      'Na USG Doppler tętnic szyjnych w Bas Clinic skierowanie nie jest wymagane, ponieważ badanie wykonywane jest prywatnie. Termin można umówić bezpośrednio, dzwoniąc pod numer 690 511 511. Warto jednak zabrać posiadaną dokumentację medyczną, która ułatwi lekarzowi interpretację wyniku.',
  },
];

export default function UsgDopplerTetnicSzyjnychPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG Doppler tętnic szyjnych we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG Doppler tętnic szyjnych ocenia przepływ krwi w tętnicach dogłowowych oraz obecność blaszek miażdżycowych, co pomaga oszacować ryzyko udaru. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/doppler-tetnic-szyjnych"
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
