import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug, WLEWY_TIERS } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Kroplówka Witaminowa bomba Wrocław - skład i cena',
  description:
    'Kroplówka Witaminowa bomba we Wrocławiu: wlew dożylny z kompleksem witamin B i witaminą C w trzech wariantach. Kwalifikacja lekarska, skład, przeciwwskazania, cena od 500 zł.',
  path: '/wlewy-witaminowe/witaminowa-bomba/',
});

const SERVICE = getServiceBySlug('wlewy-witaminowe/witaminowa-bomba');
const TIER_LABEL = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.label]));
const TIER_PRICE = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.price]));

const BREADCRUMBS = [
  { label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' },
  { label: 'Kroplówka Witaminowa bomba' },
];

const EXPERT_INFO = [
  {
    title: 'Kroplówka Witaminowa bomba we Wrocławiu - co zawiera wlew',
    tocLabel: 'Skład wlewu',
    content: (
      <>
        <p><strong>Kroplówka Witaminowa bomba</strong> to wlew dożylny, którego podstawą jest kompleks witamin z grupy B (B1, B6, B12) podany w soli fizjologicznej. W wariantach VIP i Exclusive dochodzi witamina C, a w Exclusive kompleks B zastępuje Cernevit, czyli wieloskładnikowy preparat witaminowy w jednej fiolce. Wlew trwa około godziny i podajemy go w Bas Clinic we Wrocławiu po kwalifikacji lekarskiej.</p>
        <p>Warianty nie sumują się. Exclusive nie jest Standardem z dodatkami, tylko inaczej zestawioną recepturą: kompleks witamin B ustępuje w nim miejsca preparatowi Cernevit. Pacjent, któremu zależy właśnie na witaminach B1, B6 i B12, powinien o tym wiedzieć przed wyborem wariantu.</p>
        <h3>Skład trzech wariantów</h3>
        <table>
          <tbody>
            <tr>
              <th>Wariant</th>
              <th>Skład</th>
              <th>Cena w gabinecie</th>
            </tr>
            {SERVICE.variants.map((v) => (
              <tr key={v.tier}>
                <td>{TIER_LABEL[v.tier]}</td>
                <td>{v.composition.join(', ')}</td>
                <td>{TIER_PRICE[v.tier]} zł</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Sól fizjologiczna NaCl 0,9% jest nośnikiem wlewu i uzupełnia płyny. Cernevit zawiera witaminy A, D, E, C, B1, B2, B6, B12, kwas foliowy, kwas pantotenowy, biotynę i niacynamid, dlatego w wariancie Exclusive zakres witamin jest szerszy, ale dawka samych witamin B jest inna niż w Standardzie i VIP.</p>
      </>
    ),
  },
  {
    title: 'Biodostępność dożylna a suplementacja doustna witamin B i C',
    tocLabel: 'Dożylnie czy doustnie',
    content: (
      <>
        <p><strong>Biodostępność</strong> to część podanej substancji, która dociera do krwiobiegu. Wlew dożylny pomija wchłanianie jelitowe i metabolizm pierwszego przejścia w wątrobie, dlatego cała podana dawka trafia do krwi. Przy witaminie C i witaminie B12 różnica między drogą doustną a dożylną jest największa.</p>
        <h3>Jak wchłaniają się poszczególne witaminy</h3>
        <ul>
          <li><strong>Witamina C</strong>: wchłanianie jelitowe ogranicza transporter SVCT1, który nasyca się przy dawkach rzędu kilkuset miligramów. Badania farmakokinetyczne Padayatty i wsp. z 2004 roku pokazały, że przy podaniu dożylnym stężenie w osoczu jest wielokrotnie wyższe niż po tej samej dawce doustnej.</li>
          <li><strong>Witamina B12</strong>: doustnie przyswaja się jedynie około 1-2% dawki powyżej pojemności czynnika wewnętrznego (IF). Podanie pozajelitowe omija ten etap, co ma znaczenie u osób z zaburzeniami wchłaniania.</li>
          <li><strong>Witamina B1 (tiamina)</strong>: transport jelitowy jest aktywny i nasyca się przy niewielkich dawkach, dlatego duże dawki doustne nie zwiększają proporcjonalnie ilości wchłoniętej.</li>
        </ul>
        <h3>Kiedy droga dożylna ma praktyczne znaczenie</h3>
        <p>Wlew ma przewagę przy potwierdzonych niedoborach, zaburzeniach wchłaniania jelitowego, w rekonwalescencji po infekcji i przy nudnościach utrudniających przyjmowanie tabletek. U osoby zdrowej, odżywiającej się prawidłowo, dieta i suplementacja doustna zwykle wystarczają. Mówimy to wprost podczas kwalifikacji, bo nie każdy pacjent potrzebuje wlewu.</p>
      </>
    ),
  },
  {
    title: 'Witaminy B1, B6 i B12 w kroplówce witaminowej',
    tocLabel: 'Rola witamin B',
    content: (
      <>
        <p>Kompleks witamin B (B1, B6, B12) w formie iniekcyjnej jest jedynym składnikiem czynnym wariantu Standard, obok soli fizjologicznej jako bazy. Trzy witaminy pełnią różne funkcje, ale łączy je udział w metabolizmie energetycznym i pracy układu nerwowego.</p>
        <h3>Co robi każda z witamin</h3>
        <ul>
          <li><strong>Witamina B1 (tiamina)</strong> jest kofaktorem enzymów metabolizmu węglowodanów. Organizm magazynuje jej niewiele, a niedobór objawia się zmęczeniem, drażliwością i osłabieniem pamięci.</li>
          <li><strong>Witamina B6 (pirydoksyna)</strong> uczestniczy w ponad stu reakcjach enzymatycznych, między innymi w syntezie neuroprzekaźników: serotoniny, dopaminy i GABA.</li>
          <li><strong>Witamina B12 (kobalamina)</strong> jest niezbędna do produkcji czerwonych krwinek i prawidłowej pracy nerwów obwodowych. Jej niedobór prowadzi do niedokrwistości megaloblastycznej i neuropatii.</li>
        </ul>
        <p>Preparat iniekcyjny różni się od suplementu diety: ma udokumentowaną stabilność, kontrolowaną dawkę i jakość farmaceutyczną potwierdzoną w Charakterystyce Produktu Leczniczego. W Bas Clinic stosujemy wyłącznie preparaty przeznaczone do podania pozajelitowego, nigdy suplementy doustne rozpuszczane do wlewu.</p>
      </>
    ),
  },
  {
    title: 'Witamina C w wariantach VIP i Exclusive',
    tocLabel: 'Witamina C',
    content: (
      <>
        <p>Witamina C (kwas askorbinowy) nie wchodzi w skład wariantu Standard. Pojawia się w VIP i Exclusive, gdzie działa jako antyoksydant i kofaktor enzymów. Przegląd Carr i Maggini z 2017 roku opisuje jej udział w pracy komórek odpornościowych, gojeniu i syntezie kolagenu.</p>
        <h3>Funkcje witaminy C w organizmie</h3>
        <ul>
          <li><strong>Ochrona antyoksydacyjna</strong>: kwas askorbinowy neutralizuje wolne rodniki powstające podczas infekcji, stresu i intensywnego wysiłku.</li>
          <li><strong>Synteza kolagenu</strong>: witamina C jest kofaktorem hydroksylaz proliny i lizyny, enzymów budujących kolagen skóry, naczyń i ścięgien.</li>
          <li><strong>Wchłanianie żelaza</strong>: redukuje żelazo do formy lepiej przyswajalnej, co ma znaczenie przy niedokrwistości z niedoboru żelaza, ale jest przeciwwskazane przy hemochromatozie.</li>
        </ul>
        <p>Witaminę C podajemy w ampułkach w dawkach stałych dla danego wariantu. Nie stosujemy megadawek liczonych w dziesiątkach gramów, bo wyższa dawka nie oznacza większej korzyści, a obciąża nerki. Osoby, którym zależy przede wszystkim na witaminie C, mogą rozważyć <Link href="/wlewy-witaminowe/kroplowka-na-odpornosc/">kroplówkę na odporność</Link>, która zawiera ją już w wariancie Standard.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo jest wlew Witaminowa bomba - wskazania',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Wlew Witaminowa bomba nie jest lekiem i nie zastępuje leczenia. To uzupełnienie witamin w sytuacjach, w których droga doustna jest niewystarczająca lub zbyt wolna. Lekarz ocenia wskazania podczas kwalifikacji.</p>
        <h3>Typowe sytuacje, w których pacjenci wybierają ten wlew</h3>
        <ul>
          <li><strong>Rekonwalescencja po infekcji</strong>: grypa, angina, zakażenia wirusowe, po których utrzymuje się osłabienie.</li>
          <li><strong>Przewlekłe zmęczenie i spadek koncentracji</strong> przy intensywnym trybie pracy i nieregularnych posiłkach.</li>
          <li><strong>Zaburzenia wchłaniania</strong>: choroby zapalne jelit, celiakia, stan po operacjach bariatrycznych, gdy jelito nie przyswaja witamin z diety.</li>
          <li><strong>Potwierdzone niedobory</strong> witaminy B12 lub innych witamin w badaniach laboratoryjnych.</li>
          <li><strong>Okres wzmożonego wysiłku</strong>: sesja, projekt zawodowy, częste podróże ze zmianą stref czasowych.</li>
        </ul>
        <p>Najczęściej pacjenci zgłaszają kombinację kilku czynników: przemęczenie nakłada się na częstsze infekcje i trudności z koncentracją. Osobom, u których dominuje przeciążenie stresem, lekarz częściej proponuje <Link href="/wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres/">kroplówkę na zmęczenie i stres</Link> z magnezem i glutationem.</p>
      </>
    ),
  },
  {
    title: 'Przebieg kroplówki witaminowej w Bas Clinic',
    tocLabel: 'Przebieg wizyty',
    content: (
      <>
        <p>Wizyta w Bas Clinic przy {CLINIC.address.street} we Wrocławiu trwa łącznie około 75-80 minut. Sam wlew zajmuje godzinę, reszta to kwalifikacja lekarska i krótka obserwacja po zabiegu.</p>
        <h3>Etapy wizyty</h3>
        <ol>
          <li><strong>Kwalifikacja lekarska</strong>: lekarz zbiera wywiad o chorobach przewlekłych, alergiach, przyjmowanych lekach i aktualnych dolegliwościach oraz ogląda wyniki badań, jeśli pacjent je przyniósł.</li>
          <li><strong>Przygotowanie wlewu</strong>: roztwór powstaje na miejscu, bezpośrednio przed podaniem, zgodnie z wybranym wariantem.</li>
          <li><strong>Założenie kaniuli</strong>: cienki wenflon w żyle przedramienia; to jedyny moment dyskomfortu, porównywalny z pobraniem krwi.</li>
          <li><strong>Wlew właściwy</strong>: około 60 minut w wygodnym fotelu, pod opieką personelu. Można czytać, korzystać z telefonu lub pracować na laptopie.</li>
          <li><strong>Usunięcie kaniuli i obserwacja</strong>: kontrola samopoczucia i opatrunek w miejscu wkłucia.</li>
        </ol>
        <p>Po wlewie nie ma okresu rekonwalescencji. Pacjent może prowadzić samochód, wrócić do pracy i ćwiczyć. Wizytę umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i bezpieczeństwo wlewu witaminowego',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Wlew dożylny jest procedurą medyczną naruszającą ciągłość skóry. Nawet przy składnikach uznawanych za bezpieczne istnieją stany, w których <strong>kroplówka witaminowa</strong> jest przeciwwskazana albo wymaga ostrożności. Dlatego w Bas Clinic żaden pacjent nie otrzymuje wlewu bez kwalifikacji lekarskiej.</p>
        <h3>Przeciwwskazania bezwzględne</h3>
        <ul>
          <li><strong>Niewydolność nerek</strong>: upośledzone wydalanie witaminy C i jej metabolitów zwiększa ryzyko kamicy szczawianowej.</li>
          <li><strong>Hemochromatoza</strong>: witamina C nasila wchłanianie i uwalnianie żelaza, co przy jego nadmiarze pogłębia uszkodzenie narządów.</li>
          <li><strong>Niedobór dehydrogenazy glukozo-6-fosforanowej (G6PD)</strong>: wysokie dawki witaminy C mogą wywołać hemolizę.</li>
          <li><strong>Nadwrażliwość</strong> na którykolwiek składnik wlewu, w tym na witaminę B1 (opisywane reakcje anafilaktyczne po tiaminie pozajelitowej).</li>
        </ul>
        <h3>Przeciwwskazania względne, o których decyduje lekarz</h3>
        <ul>
          <li><strong>Niewydolność serca i niekontrolowane nadciśnienie</strong>: dodatkowa objętość płynów obciąża układ krążenia.</li>
          <li><strong>Kamica nerkowa szczawianowa w wywiadzie</strong>: metabolity witaminy C sprzyjają nawrotom.</li>
          <li><strong>Ciąża i karmienie piersią</strong>: brak wystarczających danych o bezpieczeństwie dożylnych dawek witamin; decyzja indywidualna.</li>
        </ul>
        <p>Możliwe działania niepożądane to zaczerwienienie lub ból w miejscu wkłucia, metaliczny posmak w ustach i przejściowe uczucie ciepła. Rzadko dochodzi do reakcji alergicznej; gabinet dysponuje zestawem przeciwwstrząsowym, a wlew przebiega pod nadzorem personelu medycznego.</p>
      </>
    ),
  },
  {
    title: 'Gabinet lekarski a drip bar - co odróżnia wlew w klinice',
    tocLabel: 'Klinika a drip bar',
    content: (
      <>
        <p>We Wrocławiu wlewy witaminowe oferują zarówno placówki medyczne, jak i drip bary stylizowane na kawiarnie lub salony wellness. Różnice między tymi modelami mają znaczenie dla bezpieczeństwa pacjenta.</p>
        <table>
          <tbody>
            <tr>
              <th>Element</th>
              <th>Gabinet lekarski (Bas Clinic)</th>
              <th>Drip bar</th>
            </tr>
            <tr>
              <td>Kwalifikacja</td>
              <td>wywiad lekarski, ocena przeciwwskazań, analiza wyników</td>
              <td>zwykle formularz samooceny lub brak kwalifikacji</td>
            </tr>
            <tr>
              <td>Personel</td>
              <td>lekarz kwalifikuje, wlew podaje personel z uprawnieniami do procedur dożylnych</td>
              <td>przeszkoleni pracownicy, niekoniecznie medyczni</td>
            </tr>
            <tr>
              <td>Preparaty</td>
              <td>produkty lecznicze do podania pozajelitowego</td>
              <td>bywają suplementy diety rozpuszczane do wlewu</td>
            </tr>
            <tr>
              <td>Dokumentacja</td>
              <td>dokumentacja medyczna każdego zabiegu</td>
              <td>brak ciągłości opieki</td>
            </tr>
            <tr>
              <td>Powikłania</td>
              <td>procedury i wyposażenie na wypadek reakcji anafilaktycznej</td>
              <td>ograniczone możliwości interwencji</td>
            </tr>
          </tbody>
        </table>
        <p>W Bas Clinic wlew jest zabiegiem medycznym z pełną dokumentacją i kwalifikacją przed każdym podaniem. Pełną listę kroplówek i wariantów znajdziesz na stronie <Link href="/wlewy-witaminowe/">wlewów witaminowych</Link> oraz w <Link href="/cennik/">cenniku</Link>.</p>
      </>
    ),
  },
  {
    title: 'Częstotliwość wlewów i realistyczne oczekiwania',
    tocLabel: 'Częstotliwość i efekty',
    content: (
      <>
        <p>Kroplówka witaminowa nie działa jak tabletka przeciwbólowa. Uzupełnia witaminy, których poziom był obniżony, więc odczuwalna zmiana zależy od stanu wyjściowego. U osoby bez niedoborów wlew nie poprawi samopoczucia ponad to, co daje sen, dieta i odpoczynek.</p>
        <h3>Typowy schemat stosowania</h3>
        <ol>
          <li><strong>Seria wstępna</strong>: zwykle 4 wlewy w odstępach tygodniowych, jeśli lekarz stwierdzi wskazania.</li>
          <li><strong>Wlewy podtrzymujące</strong>: co 2-4 tygodnie, zależnie od stylu życia i wyników.</li>
          <li><strong>Wlew doraźny</strong>: pojedynczo, w rekonwalescencji lub po okresie dużego obciążenia.</li>
        </ol>
        <p>Dowody naukowe na korzyści z wlewów witaminowych u osób zdrowych są ograniczone. Przegląd Cochrane dotyczący witaminy C wskazuje na skrócenie czasu trwania przeziębienia przy regularnej suplementacji, ale nie na zapobieganie infekcjom w populacji ogólnej. Informujemy o tym uczciwie, a schemat ustala lekarz indywidualnie.</p>
      </>
    ),
  },
  {
    title: 'Cena kroplówki Witaminowa bomba we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Kroplówka Witaminowa bomba w Bas Clinic we Wrocławiu kosztuje od {TIER_PRICE.standard} zł. Wariant Standard to {TIER_PRICE.standard} zł, VIP {TIER_PRICE.vip} zł, a Exclusive {TIER_PRICE.exclusive} zł. Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe, godzinny wlew pod opieką personelu i obserwację po zabiegu.</p>
        <h3>Co zawiera cena</h3>
        <ul>
          <li>kwalifikację lekarską i wywiad zdrowotny,</li>
          <li>preparaty do podania pozajelitowego zgodne z wariantem,</li>
          <li>kaniulę, zestaw do wlewów i opatrunek,</li>
          <li>opiekę personelu przez cały czas trwania wlewu,</li>
          <li>kontrolę samopoczucia przed wyjściem z kliniki.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizyta nie wymaga skierowania. Warto zabrać aktualne wyniki badań, jeśli są dostępne. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O wskazaniach i wariancie wlewu decyduje lekarz podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Padayatty S.J. i wsp. Vitamin C pharmacokinetics: implications for oral and intravenous use. Annals of Internal Medicine 2004; 140(7): 533-537. PMID 15068981.</li>
        <li>Carr A.C., Maggini S. Vitamin C and Immune Function. Nutrients 2017; 9(11): 1211. PMID 29099763.</li>
        <li>Hemilä H., Chalker E. Vitamin C for preventing and treating the common cold. Cochrane Database of Systematic Reviews 2013; CD000980. PMID 23440782.</li>
        <li>EFSA NDA Panel. Scientific Opinion on Dietary Reference Values for cobalamin (vitamin B12). EFSA Journal 2015; 13(7): 4150.</li>
        <li>Gaby A.R. Intravenous nutrient therapy: the &quot;Myers&apos; cocktail&quot;. Alternative Medicine Review 2002; 7(5): 389-403. PMID 12410623.</li>
        <li>Charakterystyka Produktu Leczniczego Cernevit, proszek do sporządzania roztworu do wstrzykiwań lub infuzji (Baxter).</li>
        <li>Lykstad J., Sharma S. Biochemistry, Water Soluble Vitamins. StatPearls, NCBI Bookshelf, 2023.</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Jak długo trwa kroplówka Witaminowa bomba?',
    answer:
      'Kroplówka Witaminowa bomba trwa około 60 minut. Do tego dochodzi kwalifikacja lekarska przed wlewem (10-15 minut) i krótka obserwacja po zakończeniu, więc na całą wizytę w Bas Clinic warto zarezerwować około 80 minut.',
  },
  {
    question: 'Czym różnią się warianty Standard, VIP i Exclusive?',
    answer:
      'Standard zawiera sól fizjologiczną i kompleks witamin B (B1, B6, B12). VIP dokłada witaminę C. Exclusive zawiera witaminę C i Cernevit, czyli wieloskładnikowy preparat witaminowy, który zastępuje kompleks B. Wariant dobiera lekarz podczas kwalifikacji.',
  },
  {
    question: 'Czy po kroplówce mogę prowadzić samochód?',
    answer:
      'Tak. Wlew witaminowy nie wpływa na zdolność prowadzenia pojazdów ani na koncentrację. Bezpośrednio po zabiegu można wrócić do pracy, treningu i codziennych aktywności.',
  },
  {
    question: 'Jak często można powtarzać kroplówkę Witaminowa bomba?',
    answer:
      'Częstotliwość ustala lekarz indywidualnie. Przy wskazaniach stosuje się zwykle serię 4 wlewów w odstępach tygodniowych, a następnie wlewy podtrzymujące co 2-4 tygodnie. Pojedynczy wlew doraźny sprawdza się w rekonwalescencji.',
  },
  {
    question: 'Czy potrzebuję wyników badań przed wlewem?',
    answer:
      'Aktualne wyniki badań (morfologia, kreatynina, jonogram, witamina B12) są pomocne, ale nie zawsze wymagane. Lekarz ocenia to podczas kwalifikacji i może zalecić badania przed serią wlewów, zwłaszcza przy chorobach nerek lub wątroby.',
  },
  {
    question: 'Gdzie we Wrocławiu podać kroplówkę Witaminowa bomba?',
    answer: `Kroplówkę Witaminowa bomba podajemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function WitaminowaBombaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Kroplówka Witaminowa bomba Wrocław"
      heroSubtitle="Wlewy witaminowe"
      heroDescription="Wlew dożylny z kompleksem witamin B i witaminą C w trzech wariantach składu. Kwalifikacja lekarska przed każdym podaniem, około 60 minut w Bas Clinic we Wrocławiu."
      slug="wlewy-witaminowe/witaminowa-bomba"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
