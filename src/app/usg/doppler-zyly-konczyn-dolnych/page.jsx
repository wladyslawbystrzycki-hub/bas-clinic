import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG Doppler żył kończyn dolnych Wrocław',
  description:
    'USG Doppler żył kończyn dolnych (USG doppler nóg) we Wrocławiu - diagnostyka żylaków i zakrzepicy żył głębokich. Bas Clinic, ul. Opatowicka 132. Umów termin.',
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
    tocLabel: 'Czym jest',
    content:
      '<p><strong>USG Doppler żył kończyn dolnych</strong> to nieinwazyjne, bezbolesne badanie ultrasonograficzne, które ocenia przepływ krwi w żyłach nóg metodą dopplerowską. Obrazuje zarówno układ żył głębokich, jak i powierzchownych, pozwalając ocenić ich drożność, kierunek przepływu oraz pracę zastawek żylnych.</p>' +
      '<p>Badanie funkcjonuje pod wieloma nazwami zwyczajowymi: USG doppler nóg, USG żył kończyn dolnych, doppler żylny nóg czy ultrasonografia dopplerowska żył. Wszystkie te określenia opisują tę samą diagnostykę układu żylnego nóg, czyli ocenę żył odpiszczelowej, odstrzałkowej, udowej i podkolanowej za pomocą fali ultradźwiękowej. Obraz i wynik zawsze interpretuje lekarz w odniesieniu do objawów i pełnego obrazu klinicznego pacjenta.</p>' +
      '<p><strong>Uwaga:</strong> badanie dotyczy wyłącznie układu żylnego. USG Doppler tętnic kończyn dolnych jest osobnym badaniem, które ocenia tętnice nóg i nie stanowi synonimu tej diagnostyki.</p>',
  },
  {
    title: 'Jak działa USG Doppler żył - efekt Dopplera i ocena refluksu',
    tocLabel: 'Jak działa',
    content:
      '<p>USG Doppler żył działa dzięki <strong>efektowi Dopplera</strong>: fala ultradźwiękowa odbita od poruszających się krwinek czerwonych wraca do głowicy ze zmienioną częstotliwością, co pozwala zmierzyć kierunek i prędkość przepływu krwi. W zdrowych żyłach kończyn dolnych krew płynie w jednym kierunku, ku sercu, a zastawki żylne nie pozwalają jej się cofać.</p>' +
      '<p>To właśnie odróżnia badanie dopplerowskie od klasycznej ultrasonografii w skali szarości, która pokazuje samą strukturę naczynia, bez informacji o przepływie. W praktyce naczyniowej standardem jest tryb duplex, łączący obraz żyły z barwną mapą płynącej w niej krwi (Doppler kolorowy) oraz pomiarem prędkości (Doppler spektralny).</p>' +
      '<h3>Kiedy refluks żylny jest nieprawidłowy?</h3>' +
      '<p>O niewydolności zastawek świadczy zbyt długi przepływ wsteczny, nazywany refluksem. Zgodnie z dokumentem konsensusowym UIP (Coleridge-Smith i wsp., 2006) oraz wytycznymi ESVS dotyczącymi przewlekłej choroby żylnej (De Maeseneer i wsp., 2022) refluks uznaje się za patologiczny, gdy cofanie krwi trwa dłużej niż 0,5 sekundy w żyłach powierzchownych i przeszywających oraz dłużej niż 1 sekundę w żyłach głębokich odcinka udowo-podkolanowego.</p>' +
      '<p>Aby uwidocznić refluks, trzeba na chwilę zwiększyć ciśnienie w żyłach. Służą do tego manewry prowokacyjne: próba Valsalvy oraz uciskowa próba łydki, które prowokują przepływ i pozwalają sprawdzić, czy zastawki domykają się prawidłowo.</p>',
  },
  {
    title: 'Co wykrywa USG Doppler żył nóg - żylaki, refluks i zakrzepica',
    tocLabel: 'Co wykrywa',
    content:
      '<p>USG Doppler żył nóg uwidacznia najczęstsze nieprawidłowości układu żylnego kończyn dolnych. Badanie pozwala ocenić drożność żył oraz wydolność zastawek, a także wykryć cechy przepływu wstecznego.</p>' +
      '<ul>' +
      '<li><strong>Niewydolność żylna i refluks</strong> - cofanie się krwi przez nieszczelne zastawki, podstawa przewlekłej choroby żylnej.</li>' +
      '<li><strong>Żylaki</strong> - poszerzone, niewydolne żyły powierzchowne.</li>' +
      '<li><strong>Cechy zakrzepicy żył głębokich (DVT)</strong> - obecność skrzepliny i zaburzenia drożności żyły, oceniane uciskiem żyły głowicą.</li>' +
      '<li><strong>Zmiany pozakrzepowe</strong> - następstwa przebytej zakrzepicy w świetle żyły i w obrębie zastawek.</li>' +
      '</ul>' +
      '<p>W diagnostyce zakrzepicy żył głębokich kompresyjna ultrasonografia żył jest badaniem obrazowym pierwszego wyboru (przegląd systematyczny, Bhatt i wsp., 2020). Zaawansowanie przewlekłej choroby żylnej lekarz może opisać według międzynarodowej klasyfikacji CEAP, która porządkuje obraz kliniczny, etiologię, anatomię i mechanizm choroby.</p>' +
      '<p>Podejrzenie zakrzepicy żył głębokich jest stanem potencjalnie groźnym ze względu na ryzyko zatorowości płucnej i wymaga pilnej konsultacji lekarskiej. USG pomaga ocenić drożność żył i uwidocznić cechy zakrzepu, jednak wynik interpretuje lekarz, a badanie nie zastępuje oceny klinicznej.</p>',
  },
  {
    title: 'Wskazania do USG Doppler żył nóg',
    tocLabel: 'Wskazania',
    content:
      '<p>Wskazaniem do USG Doppler żył nóg są dolegliwości sugerujące zaburzenia układu żylnego. Ocenę żył kończyn dolnych rozważa się zwłaszcza przy objawach przewlekłej niewydolności żylnej lub podejrzeniu zakrzepicy.</p>' +
      '<ul>' +
      '<li>obrzęki nóg oraz uczucie ciężkości i zmęczenia kończyn,</li>' +
      '<li>ból łydek i nocne kurcze mięśni,</li>' +
      '<li>widoczne żylaki oraz poszerzone naczynia powierzchowne,</li>' +
      '<li>zmiany skórne podudzi - przebarwienia, stwardnienia czy owrzodzenia żylne,</li>' +
      '<li>nagły obrzęk i bolesność jednej kończyny, nasuwające podejrzenie zakrzepicy żył głębokich,</li>' +
      '<li>kwalifikacja do leczenia żylaków oraz kontrola po zabiegach na układzie żylnym.</li>' +
      '</ul>' +
      '<p>Przed planowanym leczeniem żylaków badanie służy do tak zwanego mapowania żył, czyli odwzorowania ich przebiegu i miejsc refluksu - tę rolę wytyczne ESVS (2022) wskazują jako podstawę planowania zabiegu. Samo USG nie leczy żylaków, lecz dostarcza informacji niezbędnych do zaplanowania dalszego postępowania przez lekarza.</p>',
  },
  {
    title: 'USG Doppler żył a inne badania naczyń',
    tocLabel: 'Doppler żył a inne badania',
    content:
      '<p>USG Doppler żył kończyn dolnych ocenia wyłącznie żyły nóg, czyli układ żylny głęboki i powierzchowny. Inne badania dopplerowskie obejmują tętnice lub naczynia innych okolic ciała, dlatego zakres dobiera się do objawów.</p>' +
      '<table>' +
      '<tr><th>Cecha</th><th>USG Doppler żył nóg</th><th>USG Doppler tętnic szyjnych</th><th>USG Doppler naczyń (zbiorcze)</th></tr>' +
      '<tr><td>Co ocenia</td><td>przepływ w żyłach nóg, drożność i zastawki</td><td>tętnice doprowadzające krew do mózgu</td><td>tętnice i żyły wybranej okolicy ciała</td></tr>' +
      '<tr><td>Układ naczyniowy</td><td>żylny</td><td>tętniczy</td><td>tętniczy i żylny</td></tr>' +
      '<tr><td>Typowe wskazanie</td><td>żylaki, obrzęki, podejrzenie zakrzepicy</td><td>profilaktyka udaru, miażdżyca</td><td>szeroka diagnostyka naczyniowa</td></tr>' +
      '</table>' +
      '<p>Szerszą diagnostykę naczyniową, obejmującą różne okolice ciała, prowadzi się w ramach badania <a href="/usg/doppler/">USG Doppler naczyń</a>. Ocenę tętnic doprowadzających krew do mózgu umożliwia natomiast <a href="/usg/doppler-tetnice-szyjne/">USG Doppler tętnic szyjnych</a>. W razie wątpliwości, który zakres będzie właściwy, warto skonsultować rodzaj badania z lekarzem prowadzącym.</p>',
  },
  {
    title: 'Jak przygotować się do badania i jak przebiega?',
    tocLabel: 'Przygotowanie i przebieg',
    content:
      '<p>USG Doppler żył kończyn dolnych nie wymaga specjalnego przygotowania. Badania nie trzeba wykonywać na czczo ani odstawiać leków, o ile lekarz nie zaleci inaczej.</p>' +
      '<ul>' +
      '<li>wygodny strój umożliwiający swobodne odsłonięcie obu nóg do pachwiny,</li>' +
      '<li>higiena skóry kończyn dolnych w dniu badania,</li>' +
      '<li>dokumentacja wcześniejszych badań żylnych, jeśli jest dostępna.</li>' +
      '</ul>' +
      '<h3>Przebieg badania</h3>' +
      '<p>Badanie przypomina klasyczną ultrasonografię: na skórę nanosi się żel sprzęgający, a osoba wykonująca badanie przesuwa głowicę liniową wzdłuż przebiegu żył nóg. Drożność żyły sprawdza się, uciskając ją głowicą - zdrowa żyła zapada się pod naciskiem, a wypełniona skrzepliną nie.</p>' +
      '<p>Ocenę refluksu wykonuje się zwykle w pozycji stojącej, którą wytyczne ESVS (2022) wskazują jako najbardziej wiarygodną dla żył kończyn dolnych, z użyciem próby Valsalvy oraz uciskowej próby łydki. Badanie jest bezbolesne, nieinwazyjne i nie wykorzystuje promieniowania jonizującego; trwa zwykle od kilkunastu do kilkudziesięciu minut. Pisemny opis sporządza lekarz i to on interpretuje obraz w kontekście objawów. Pełną ofertę diagnostyki obrazowej znajdziesz w sekcji <a href="/usg/">pracownia USG we Wrocławiu</a>.</p>',
  },
  {
    title: 'Bezpieczeństwo, ograniczenia i przeciwwskazania',
    tocLabel: 'Bezpieczeństwo',
    content:
      '<p>USG Doppler żył jest badaniem bezpiecznym - nie wykorzystuje promieniowania jonizującego i nie ma bezwzględnych przeciwwskazań. Aparaturę stosuje się zgodnie z zasadą ALARA, czyli z możliwie najniższą konieczną energią (oświadczenie AIUM), a diagnostyczną ultrasonografię uznaje się za bezpieczną także w ciąży.</p>' +
      '<p>Badanie ma jednak ograniczenia. Jest podstawową, nieinwazyjną metodą oceny żył, ale jego czułość zależy od umiejscowienia zakrzepicy: dla zakrzepicy żył proksymalnych (udowej, podkolanowej) jest wysoka, natomiast dla izolowanej zakrzepicy żył łydki wyraźnie niższa (Goodacre i wsp., 2005 - czułość proksymalna 96,5%, dystalna 71,2%). Z tego powodu przy podejrzeniu zakrzepicy lekarz ocenia prawdopodobieństwo kliniczne, a badanie bywa powtarzane lub uzupełniane innymi metodami.</p>' +
      '<p>Pozostałe ograniczenia mają charakter techniczny i względny:</p>' +
      '<ul>' +
      '<li><strong>zależność od operatora</strong> - jakość obrazu i interpretacja zależą od doświadczenia osoby wykonującej badanie,</li>' +
      '<li><strong>warunki anatomiczne</strong> - otyłość i znaczne obrzęki mogą pogarszać widoczność głębiej położonych żył,</li>' +
      '<li><strong>ograniczenia miejscowe</strong> - rozległa rana, opatrunek, gips lub stan zapalny skóry w okolicy przyłożenia głowicy.</li>' +
      '</ul>' +
      '<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O zasadności badania, jego zakresie oraz interpretacji wyniku decyduje lekarz podczas indywidualnej wizyty.</p>',
  },
  {
    title: 'Cena USG Doppler żył kończyn dolnych we Wrocławiu',
    tocLabel: 'Cena',
    content:
      '<p>Cena USG Doppler żył kończyn dolnych we Wrocławiu zależy od zakresu badania - tego, czy oceniana jest jedna czy obie nogi, oraz od zakresu konsultacji. Z tego powodu ustala się ją indywidualnie.</p>' +
      '<p>W Bas Clinic badanie wykonuje <a href="/usg/">pracownia USG we Wrocławiu</a>. Aktualne ceny znajdziesz w sekcji <a href="/cennik/">cennik</a>, a dogodny termin ustalisz przez <a href="/rejestracja/">rejestrację</a>. Badanie wykonywane jest prywatnie i nie wymaga skierowania.</p>',
  },
  {
    title: 'Źródła',
    content:
      '<ol>' +
      '<li>De Maeseneer MG, Kakkos SK, Aherne T, i wsp. ESVS 2022 Clinical Practice Guidelines on the Management of Chronic Venous Disease of the Lower Limbs. Eur J Vasc Endovasc Surg 2022;63(2):184-267 (PMID 35027279).</li>' +
      '<li>Coleridge-Smith P, Labropoulos N, Partsch H, i wsp. Duplex ultrasound investigation of the veins in chronic venous disease of the lower limbs - UIP Consensus Document Part I. Eur J Vasc Endovasc Surg 2006;31(1):83-92 (PMID 16226898).</li>' +
      '<li>Labropoulos N, Tiongson J, Pryor L, i wsp. Definition of venous reflux in lower-extremity veins. J Vasc Surg 2003;38(4):793-798 (PMID 14560232).</li>' +
      '<li>Bhatt M, Braun C, Patel P, i wsp. Diagnosis of deep vein thrombosis of the lower extremity: a systematic review and meta-analysis. Blood Adv 2020;4(7):1250-1264 (PMID 32227213).</li>' +
      '<li>Goodacre S, Sampson F, Thomas S, i wsp. Systematic review and meta-analysis of the diagnostic accuracy of ultrasonography for deep vein thrombosis. BMC Med Imaging 2005;5:6 (PMID 16202135).</li>' +
      '<li>Lim W, Le Gal G, Bates SM, i wsp. American Society of Hematology 2018 guidelines for management of venous thromboembolism: diagnosis of venous thromboembolism. Blood Adv 2018;2(22):3226-3256 (PMID 30482764).</li>' +
      '<li>Peripheral Venous Duplex Ultrasound: Technique and Clinical Applications. StatPearls / NCBI Bookshelf NBK570555, National Library of Medicine, 2024.</li>' +
      '<li>AIUM Official Statement: Prudent Clinical Use and Safety of Diagnostic Ultrasound. American Institute of Ultrasound in Medicine, 2024.</li>' +
      '<li>Torloni MR, Vedmedovska N, Merialdi M, i wsp. Safety of ultrasonography in pregnancy: WHO systematic review and meta-analysis. Ultrasound Obstet Gynecol 2009;33(5):599-608 (PMID 19291813).</li>' +
      '</ol>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG Doppler żył kończyn dolnych?',
    answer:
      'USG Doppler żył kończyn dolnych wykrywa nieprawidłowości układu żylnego nóg: niewydolność żylną i refluks, żylaki, cechy zakrzepicy żył głębokich oraz zmiany pozakrzepowe. Badanie pozwala ocenić drożność żył i wydolność zastawek. Wynik interpretuje lekarz, a USG nie zastępuje konsultacji lekarskiej.',
  },
  {
    question: 'Czy USG Doppler wykryje zakrzepicę żył głębokich?',
    answer:
      'USG Doppler pomaga ocenić drożność żył i uwidocznić cechy zakrzepu, dlatego kompresyjna ultrasonografia jest badaniem obrazowym pierwszego wyboru przy podejrzeniu zakrzepicy żył głębokich. Zakrzepica (DVT) to stan potencjalnie groźny ze względu na ryzyko zatorowości płucnej, dlatego wymaga pilnej konsultacji lekarskiej. USG wspiera diagnostykę, lecz nie zastępuje oceny lekarza.',
  },
  {
    question: 'Jak przygotować się do USG Doppler żył nóg?',
    answer:
      'Przygotowanie do USG Doppler żył nóg nie wymaga postu ani odstawiania leków. Zaleca się wygodny strój umożliwiający odsłonięcie obu nóg oraz higienę skóry kończyn dolnych w dniu badania. Część oceny wykonuje się w pozycji stojącej, dlatego warto zadbać o komfortowy ubiór.',
  },
  {
    question: 'Ile kosztuje USG Doppler żył kończyn dolnych we Wrocławiu?',
    answer:
      `Cena USG Doppler żył kończyn dolnych we Wrocławiu zależy od zakresu badania - tego, czy oceniana jest jedna czy obie nogi. Aktualny cennik jest dostępny w zakładce Cennik na stronie ${CLINIC.name} oraz pod numerem telefonu ${CLINIC.phone}. Badanie wykonywane jest prywatnie i nie wymaga skierowania.`,
  },
  {
    question: 'Czy na USG Doppler żył potrzebne jest skierowanie?',
    answer:
      'Na USG Doppler żył skierowanie nie jest potrzebne, ponieważ badanie wykonywane jest prywatnie. Termin można umówić bezpośrednio, telefonicznie. Warto jednak zabrać dokumentację wcześniejszych badań żylnych, jeśli jest dostępna, aby lekarz mógł porównać obraz.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG Doppler żył kończyn dolnych?',
    answer:
      `USG Doppler żył kończyn dolnych we Wrocławiu wykonasz w ${CLINIC.name} przy ${CLINIC.address.street} (${CLINIC.address.city}). Termin umówisz telefonicznie pod numerem ${CLINIC.phone}. Pracownia przyjmuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}; w soboty i niedziele jest zamknięta.`,
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
