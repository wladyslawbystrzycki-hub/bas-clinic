import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG Doppler żył kończyn dolnych Wrocław | Bas Clinic',
  description:
    'USG Doppler żył kończyn dolnych we Wrocławiu - diagnostyka żylaków i podejrzenia zakrzepicy żył głębokich (DVT). Bas Clinic, ul. Opatowicka 132. Umów termin.',
  path: '/usg/doppler-zyly-konczyn-dolnych/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG Doppler żył kończyn dolnych' },
];

const RELATED = ['usg/doppler', 'usg/doppler-tetnice-szyjne'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG Doppler żył kończyn dolnych?',
    content:
      '<p>USG Doppler żył kończyn dolnych to badanie przepływu krwi w żyłach nóg wykonywane metodą dopplerowską. Ultrasonografia dopplerowska żył kończyn dolnych obrazuje zarówno układ żył głębokich, jak i żył powierzchownych, pozwalając ocenić kierunek i prędkość przepływu oraz pracę zastawek żylnych.</p>' +
      '<p>Badanie funkcjonuje pod wieloma nazwami zwyczajowymi, takimi jak USG doppler nóg, USG żył kończyn dolnych czy doppler żylny nóg. Niezależnie od określenia chodzi o tę samą diagnostykę układu żylnego konczyn dolnych, czyli ocenę żył nóg za pomocą fali ultradźwiękowej.</p>' +
      '<p><strong>Uwaga:</strong> badanie dotyczy wyłącznie układu żylnego. USG Doppler tętnic kończyn dolnych jest osobnym badaniem oceniającym tętnice nóg i nie stanowi synonimu tego badania.</p>',
  },
  {
    title: 'Co wykrywa USG Doppler żył kończyn dolnych?',
    content:
      '<p>USG Doppler żył kończyn dolnych pozwala uwidocznić najczęstsze nieprawidłowości układu żylnego nóg. Badanie dopplerowskie żył nóg pomaga ocenić drożność żył oraz wydolność zastawek, a także wykryć cechy przepływu wstecznego.</p>' +
      '<ul>' +
      '<li><strong>Niewydolność żylna i refluks</strong> - cofanie się krwi przez nieszczelne zastawki żylne.</li>' +
      '<li><strong>Żylaki</strong> - poszerzone, niewydolne żyły powierzchowne.</li>' +
      '<li><strong>Cechy zakrzepicy żył głębokich (DVT)</strong> - obecność skrzepliny i zaburzenia drożności żyły.</li>' +
      '<li><strong>Zmiany pozakrzepowe</strong> - następstwa przebytej zakrzepicy w świetle żyły i w obrębie zastawek.</li>' +
      '</ul>' +
      '<p>Podejrzenie zakrzepicy żył głębokich jest stanem potencjalnie groźnym i wymaga pilnej konsultacji lekarskiej. USG pomaga ocenić drożność żył i uwidocznić cechy zakrzepu, jednak wynik badania interpretuje lekarz i USG nie zastępuje oceny klinicznej.</p>',
  },
  {
    title: 'Wskazania do USG Doppler żył nóg',
    content:
      '<p>Wskazaniem do USG Doppler żył nóg są dolegliwości i objawy sugerujące zaburzenia układu żylnego. Ocenę żył kończyn dolnych rozważa się zwłaszcza wtedy, gdy występują objawy przewlekłej niewydolności żylnej lub podejrzenie zakrzepicy.</p>' +
      '<ul>' +
      '<li>Obrzęki nóg oraz uczucie ciężkości i zmęczenia kończyn.</li>' +
      '<li>Ból łydek i nocne kurcze mięśni.</li>' +
      '<li>Widoczne żylaki oraz poszerzone naczynia powierzchowne.</li>' +
      '<li>Zmiany skórne podudzi, takie jak przebarwienia, stwardnienia czy owrzodzenia.</li>' +
      '<li>Podejrzenie zakrzepicy żył głębokich, na przykład nagły obrzęk i bolesność jednej kończyny.</li>' +
      '<li>Kwalifikacja do leczenia żylaków i monitorowanie po zabiegach.</li>' +
      '</ul>' +
      '<p>Diagnostyka żylaków za pomocą badania dopplerowskiego służy ustaleniu zakresu choroby i kwalifikacji do leczenia. Samo USG nie leczy żylaków, lecz dostarcza informacji niezbędnych do zaplanowania dalszego postępowania przez lekarza.</p>',
  },
  {
    title: 'Jak przygotować się do USG Doppler żył kończyn dolnych?',
    content:
      '<p>USG Doppler żył kończyn dolnych nie wymaga specjalnego przygotowania. Badanie przepływu w żyłach nóg można wykonać bez wcześniejszego postu czy odstawiania leków, o ile lekarz nie zaleci inaczej.</p>' +
      '<ul>' +
      '<li>Zaleca się wygodny strój umożliwiający swobodne odsłonięcie obu nóg do pachwiny.</li>' +
      '<li>Wskazana jest higiena skóry kończyn dolnych w dniu badania.</li>' +
      '<li>Warto zabrać wyniki wcześniejszych badań żylnych oraz dokumentację medyczną, jeśli jest dostępna.</li>' +
      '</ul>' +
      '<p>Część oceny układu żylnego wykonuje się w pozycji stojącej, dlatego komfortowy ubiór ułatwia przebieg badania. Pozwala to dokładniej ocenić wydolność zastawek i ewentualny refluks.</p>',
  },
  {
    title: 'Jak przebiega badanie i kiedy wynik?',
    content:
      '<p>Badanie przebiega w pozycji leżącej i stojącej, co pozwala kompleksowo ocenić układ żylny kończyn dolnych. Na skórę nanosi się żel, a osoba wykonująca badanie przesuwa głowicę ultrasonograficzną wzdłuż przebiegu żył nóg.</p>' +
      '<p>Do oceny refluksu stosuje się próbę Valsalvy oraz próbę uciskową łydki, które prowokują przepływ krwi i pozwalają uwidocznić cofanie się jej przez niewydolne zastawki. USG żył kończyn dolnych jest bezbolesne, nieinwazyjne i nie wykorzystuje promieniowania jonizującego.</p>' +
      '<p>Opis badania sporządza lekarz i to on interpretuje uzyskany obraz w kontekście objawów oraz pozostałych wyników. USG nie zastępuje konsultacji lekarskiej, a ostateczne rozpoznanie i decyzję o leczeniu podejmuje lekarz. Pełną ofertę diagnostyki obrazowej można sprawdzić w sekcji <a href="/usg/">pracownia USG we Wrocławiu</a>.</p>',
  },
  {
    title: 'USG Doppler żył a inne badania naczyń',
    content:
      '<p>USG Doppler żył kończyn dolnych ocenia wyłącznie żyły nóg, czyli układ żylny głęboki i powierzchowny. Jest to badanie ukierunkowane na drożność żył, wydolność zastawek i obecność refluksu w obrębie kończyn dolnych.</p>' +
      '<p>Szersza diagnostyka naczyniowa, obejmująca tętnice i żyły różnych okolic ciała, prowadzona jest w ramach badania <a href="/usg/doppler/">USG Doppler naczyń</a>. Ocenę naczyń doprowadzających krew do mózgu umożliwia natomiast <a href="/usg/doppler-tetnice-szyjne/">USG Doppler tętnic szyjnych</a>, które jest innym badaniem naczyniowym wykonywanym metodą Dopplera.</p>' +
      '<p>Dobór odpowiedniego zakresu badania zależy od objawów i wskazań. W razie wątpliwości warto skonsultować rodzaj diagnostyki z lekarzem prowadzącym.</p>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG Doppler żył kończyn dolnych?',
    answer:
      'USG Doppler żył kończyn dolnych wykrywa nieprawidłowości układu żylnego nóg, takie jak niewydolność żylna i refluks, żylaki, cechy zakrzepicy żył głębokich oraz zmiany pozakrzepowe. Badanie pozwala ocenić drożność żył i wydolność zastawek. Wynik interpretuje lekarz, a USG nie zastępuje konsultacji lekarskiej.',
  },
  {
    question: 'Czy USG Doppler wykryje zakrzepicę żył głębokich?',
    answer:
      'USG Doppler pomaga ocenić drożność żył i uwidocznić cechy zakrzepu, dlatego jest podstawowym badaniem przy podejrzeniu zakrzepicy żył głębokich. Zakrzepica żył głębokich (DVT) to stan potencjalnie groźny ze względu na ryzyko zatorowości płucnej, dlatego przy jej podejrzeniu konieczna jest pilna konsultacja lekarska. USG wspiera diagnostykę, lecz nie zastępuje oceny lekarza, który ustala rozpoznanie i dalsze postępowanie.',
  },
  {
    question: 'Jak przygotować się do USG Doppler żył nóg?',
    answer:
      'Przygotowanie do USG Doppler żył nóg nie wymaga postu ani odstawiania leków. Zaleca się wygodny strój umożliwiający odsłonięcie obu nóg oraz higienę skóry kończyn dolnych w dniu badania. Część oceny wykonuje się w pozycji stojącej, dlatego warto zadbać o komfortowy ubiór.',
  },
  {
    question: 'Ile kosztuje USG Doppler żył kończyn dolnych we Wrocławiu?',
    answer:
      'Cena USG Doppler żył kończyn dolnych we Wrocławiu zależy od zakresu badania. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511. Bas Clinic mieści się przy ul. Opatowickiej 132 we Wrocławiu.',
  },
  {
    question: 'Czy na USG Doppler żył potrzebne jest skierowanie?',
    answer:
      'Na USG Doppler żył nie jest potrzebne skierowanie, ponieważ badanie wykonywane jest prywatnie. Termin można umówić bezpośrednio, dzwoniąc pod numer +48 690 511 511. Warto jednak zabrać dokumentację wcześniejszych badań, jeśli jest dostępna.',
  },
];

export default function UsgDopplerZylKonczynDolnychPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG Doppler żył kończyn dolnych we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG Doppler żył kończyn dolnych to badanie przepływu krwi w żyłach nóg, stosowane w diagnostyce żylaków oraz podejrzeniu zakrzepicy żył głębokich. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/doppler-zyly-konczyn-dolnych"
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
