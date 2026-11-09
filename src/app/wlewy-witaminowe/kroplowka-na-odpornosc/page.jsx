import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug, WLEWY_TIERS } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Kroplówka na odporność Wrocław - skład i cena',
  description:
    'Kroplówka na odporność we Wrocławiu: witamina C, magnez i Optilyte, w Exclusive glutation TAD 600. Kwalifikacja lekarska, przeciwwskazania, cena od 500 zł.',
  path: '/wlewy-witaminowe/kroplowka-na-odpornosc/',
});

const SERVICE = getServiceBySlug('wlewy-witaminowe/kroplowka-na-odpornosc');
const TIER_LABEL = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.label]));
const TIER_PRICE = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.price]));

const BREADCRUMBS = [
  { label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' },
  { label: 'Kroplówka na odporność' },
];

const EXPERT_INFO = [
  {
    title: 'Kroplówka na odporność we Wrocławiu - skład wariantów Standard, VIP i Exclusive',
    tocLabel: 'Skład wlewu',
    content: (
      <>
        <p><strong>Kroplówka na odporność</strong> to wlew dożylny witaminy C i magnezu w zbilansowanym płynie wieloelektrolitowym Optilyte. W wariancie Exclusive dochodzi druga butelka z preparatem TAD 600, czyli glutationem. Wlew trwa około 90 minut i podajemy go w Bas Clinic we Wrocławiu po kwalifikacji lekarskiej.</p>
        <p>Trzon składu jest taki sam we wszystkich wariantach. Różni je dawka witaminy C (jedna ampułka w Standardzie, trzy w VIP i Exclusive) oraz obecność glutationu, który pacjent otrzymuje wyłącznie w Exclusive.</p>
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
        <p>Optilyte jest bazą wlewu: uzupełnia wodę i elektrolity (sód, potas, wapń, magnez) w stężeniach zbliżonych do osocza. Witamina C i magnez to preparaty do podania pozajelitowego w ampułkach, o dawce stałej dla danego wariantu. Nie stosujemy suplementów diety rozpuszczanych do wlewu.</p>
      </>
    ),
  },
  {
    title: 'Witamina C dożylnie a odporność - co mówią badania',
    tocLabel: 'Witamina C a odporność',
    content: (
      <>
        <p>Witamina C jest potrzebna do pracy komórek odpornościowych, ale jej dodatkowe podawanie nie zapobiega infekcjom u osób zdrowych. Przegląd Cochrane (Hemilä i Chalker, 2013) obejmujący ponad 11 tysięcy uczestników nie wykazał zmniejszenia liczby przeziębień w populacji ogólnej. Regularna suplementacja skracała natomiast czas trwania przeziębienia u dorosłych o około 8%.</p>
        <h3>Co robi witamina C w układzie odpornościowym</h3>
        <ul>
          <li><strong>Neutrofile i limfocyty</strong> gromadzą witaminę C w stężeniach wielokrotnie wyższych niż osocze; przegląd Carr i Maggini z 2017 roku opisuje jej udział w migracji komórek do miejsca zakażenia i w usuwaniu patogenów.</li>
          <li><strong>Ochrona antyoksydacyjna</strong>: podczas infekcji komórki odpornościowe wytwarzają reaktywne formy tlenu, a witamina C ogranicza ich szkodliwe działanie na własne tkanki.</li>
          <li><strong>Bariera skóry i błon śluzowych</strong>: kwas askorbinowy jest kofaktorem syntezy kolagenu, który utrzymuje szczelność pierwszej linii obrony.</li>
        </ul>
        <h3>Dlaczego dożylnie</h3>
        <p>Wchłanianie jelitowe witaminy C nasyca się już przy dawkach rzędu kilkuset miligramów. Badania farmakokinetyczne Padayatty i wsp. (2004) pokazały, że podanie dożylne daje stężenia w osoczu nieosiągalne drogą doustną. Ma to znaczenie przy zwiększonym zużyciu witaminy C, na przykład w rekonwalescencji po infekcji, a nie u osoby zdrowej, która je warzywa i owoce. W Bas Clinic mówimy to wprost podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Magnez i elektrolity Optilyte w pracy układu odpornościowego',
    tocLabel: 'Magnez i elektrolity',
    content: (
      <>
        <p>Magnez jest kofaktorem kilkuset reakcji enzymatycznych, w tym syntezy białek i podziałów komórkowych, od których zależy odpowiedź limfocytów na patogen. Przegląd Tam i wsp. (2003) wiąże niedobór magnezu ze wzrostem markerów zapalnych i osłabieniem odpowiedzi immunologicznej.</p>
        <h3>Rola poszczególnych elektrolitów</h3>
        <ul>
          <li><strong>Magnez</strong>: stabilizuje błony komórkowe, uczestniczy w aktywacji limfocytów T i w syntezie immunoglobulin. Doustnie wchłania się w 30-40%, dlatego przy potwierdzonym niedoborze droga dożylna działa szybciej.</li>
          <li><strong>Wapń</strong>: wtórny przekaźnik w sygnalizacji komórkowej; aktywacja makrofagów i degranulacja komórek tucznych wymagają jonów wapnia.</li>
          <li><strong>Sód i potas</strong>: utrzymują potencjał błonowy i objętość płynu pozakomórkowego, warunek sprawnego transportu leukocytów do tkanek.</li>
        </ul>
        <p>Optilyte dostarcza te jony w proporcjach zbliżonych do osocza (141 mmol/l sodu, 5 mmol/l potasu, 2 mmol/l wapnia, 1 mmol/l magnezu) i jednocześnie nawadnia. Odwodnienie towarzyszące gorączce zagęszcza krew i spowalnia oczyszczanie dróg oddechowych, dlatego sam płyn bazowy ma znaczenie w rekonwalescencji. Osobom, u których problemem jest głównie utrata płynów, lekarz częściej proponuje <Link href="/wlewy-witaminowe/kroplowka-nawodnienie/">kroplówkę nawadniającą</Link>.</p>
      </>
    ),
  },
  {
    title: 'TAD 600 (glutation) w wariancie Exclusive',
    tocLabel: 'Glutation TAD 600',
    content: (
      <>
        <p>TAD 600 to produkt leczniczy zawierający 600 mg zredukowanego glutationu w ampułce. Glutation jest tripeptydem (glutaminian, cysteina, glicyna) obecnym w każdej komórce i głównym wewnątrzkomórkowym antyoksydantem. W kroplówce na odporność podajemy go wyłącznie w wariancie Exclusive, w drugiej butelce soli fizjologicznej.</p>
        <h3>Co robi glutation</h3>
        <ul>
          <li><strong>Neutralizuje reaktywne formy tlenu</strong> i jest odtwarzany przez reduktazę glutationową, więc działa cyklicznie, a nie jednorazowo.</li>
          <li><strong>Wpływa na limfocyty</strong>: Dröge i Breitkreutz (2000) opisali zależność proliferacji limfocytów T i aktywności komórek NK od wewnątrzkomórkowego poziomu glutationu.</li>
          <li><strong>Uczestniczy w detoksykacji wątrobowej</strong>, wiążąc metabolity leków i toksyny w reakcjach sprzęgania.</li>
        </ul>
        <h3>Dożylnie czy doustnie</h3>
        <p>Glutation przyjęty doustnie jest w dużej części rozkładany w przewodzie pokarmowym. Witschi i wsp. (1992) po jednorazowej dawce 3 g nie stwierdzili wzrostu stężenia glutationu w osoczu. Późniejsze badanie Richie i wsp. (2015) pokazało, że wielomiesięczna suplementacja doustna zwiększa zapasy w krwinkach, ale dopiero po tygodniach. Podanie dożylne omija ten etap. Uczciwie dodajemy: nie ma badań klinicznych, które wykazałyby, że dożylny glutation zmniejsza liczbę infekcji u osób zdrowych. Pacjentom, którym zależy na wsparciu wątroby, lekarz może zaproponować <Link href="/wlewy-witaminowe/kroplowka-detox-watroby/">kroplówkę Detox wątroby</Link> z Hepa-Merz; ten wlew nie zawiera glutationu.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo jest kroplówka na odporność - wskazania',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Wlew na odporność nie jest lekiem i nie zastępuje leczenia infekcji. Ma sens tam, gdzie zużycie witaminy C, magnezu i płynów jest zwiększone albo droga doustna zawodzi. O wskazaniach decyduje lekarz podczas kwalifikacji.</p>
        <h3>Sytuacje, w których pacjenci wybierają ten wlew</h3>
        <ul>
          <li><strong>Rekonwalescencja po infekcji</strong>: grypa, COVID-19, angina, zapalenie oskrzeli, po których utrzymuje się osłabienie i odwodnienie po gorączce.</li>
          <li><strong>Nawracające infekcje sezonowe</strong>: kilka przeziębień w sezonie u osoby przemęczonej, z nieregularną dietą i krótkim snem.</li>
          <li><strong>Potwierdzony niedobór magnezu</strong> w badaniach, zwłaszcza przy zaburzeniach wchłaniania lub stosowaniu leków moczopędnych.</li>
          <li><strong>Zwiększony stres oksydacyjny</strong>: palenie, praca w zanieczyszczonym środowisku, przewlekły stres.</li>
          <li><strong>Choroby przewlekłe zużywające antyoksydanty</strong>, na przykład cukrzyca, po uzgodnieniu z lekarzem prowadzącym.</li>
        </ul>
        <p>Osobom, u których na pierwszy plan wysuwa się przemęczenie i przeciążenie pracą, lekarz częściej proponuje <Link href="/wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres/">kroplówkę na zmęczenie i stres</Link>, a przy ogólnych niedoborach witamin <Link href="/wlewy-witaminowe/witaminowa-bomba/">kroplówkę Witaminowa bomba</Link> z kompleksem witamin B.</p>
      </>
    ),
  },
  {
    title: 'Czego wlew na odporność nie zrobi - szczepienia, diagnostyka, dieta',
    tocLabel: 'Ograniczenia wlewu',
    content: (
      <>
        <p>Kroplówka nie zastępuje szczepień ochronnych, leczenia infekcji ani diagnostyki przyczyn obniżonej odporności. Wlew dostarcza składniki, z których organizm korzysta, ale nie uczy układu odpornościowego rozpoznawania konkretnych patogenów, jak robi to szczepionka.</p>
        <h3>Trzy rzeczy, które mówimy każdemu pacjentowi</h3>
        <ol>
          <li><strong>Szczepienie przeciw grypie i COVID-19</strong> pozostaje najlepiej udokumentowaną metodą zapobiegania tym chorobom. Wlew może być uzupełnieniem, nigdy zamiennikiem.</li>
          <li><strong>Nawracające, ciężkie lub nietypowe infekcje</strong> wymagają diagnostyki: morfologii z rozmazem, poziomu immunoglobulin, oceny tarczycy i glikemii, a czasem konsultacji immunologa. Wlew nie może opóźniać tej ścieżki.</li>
          <li><strong>Sen, dieta i aktywność</strong> mają większy wpływ na odporność niż jakikolwiek wlew. Kroplówka nie zrekompensuje przewlekłego niedoboru snu ani diety ubogiej w warzywa.</li>
        </ol>
        <p>Jeśli podczas kwalifikacji lekarz uzna, że pacjent potrzebuje badań lub leczenia zamiast wlewu, powie o tym wprost. Zdarza się, że wizyta kończy się skierowaniem na diagnostykę, a nie kroplówką.</p>
      </>
    ),
  },
  {
    title: 'Przebieg kroplówki na odporność w Bas Clinic we Wrocławiu',
    tocLabel: 'Przebieg wizyty',
    content: (
      <>
        <p>Wizyta w Bas Clinic przy {CLINIC.address.street} we Wrocławiu trwa łącznie około 105-110 minut. Sam wlew zajmuje 90 minut, reszta to kwalifikacja lekarska i krótka obserwacja po zabiegu.</p>
        <h3>Etapy wizyty</h3>
        <ol>
          <li><strong>Kwalifikacja lekarska</strong>: wywiad o chorobach przewlekłych (nerki, serce, tarczyca), alergiach, przyjmowanych lekach i przebytych w ostatnich tygodniach infekcjach. Lekarz ogląda wyniki badań, jeśli pacjent je przyniósł; przydatne są kreatynina, jonogram i morfologia.</li>
          <li><strong>Wybór wariantu</strong>: dawki są przypisane do wariantu na stałe. Lekarz rozstrzyga, który wariant jest zasadny, nie skaluje dawek pod pacjenta.</li>
          <li><strong>Przygotowanie wlewu</strong>: roztwór powstaje na miejscu, bezpośrednio przed podaniem.</li>
          <li><strong>Założenie kaniuli</strong>: cienki wenflon w żyle przedramienia, dyskomfort porównywalny z pobraniem krwi.</li>
          <li><strong>Wlew właściwy</strong>: około 90 minut. Tempo jest wolniejsze niż przy wlewach witaminowych bez magnezu, bo szybkie podanie magnezu powoduje uderzenia gorąca i spadek ciśnienia. W Exclusive po pierwszej butelce podłączamy drugą z TAD 600.</li>
          <li><strong>Usunięcie kaniuli i obserwacja</strong>: kontrola samopoczucia i opatrunek w miejscu wkłucia.</li>
        </ol>
        <p>Po wlewie nie ma okresu rekonwalescencji. Pacjent może prowadzić samochód i wrócić do pracy. Uczucie ciepła lub lekkiego rozluźnienia w trakcie wlewu to zwykła reakcja na magnez. Wizytę umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i bezpieczeństwo wlewu z witaminą C, magnezem i glutationem',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Składniki kroplówki na odporność mają działanie farmakologiczne, dlatego w Bas Clinic żaden pacjent nie otrzymuje wlewu bez kwalifikacji lekarskiej. Największe znaczenie ma stan nerek, bo to one wydalają witaminę C, magnez i potas z Optilyte.</p>
        <h3>Przeciwwskazania bezwzględne</h3>
        <ul>
          <li><strong>Niewydolność nerek</strong>: ryzyko hipermagnezemii, hiperkaliemii i kamicy szczawianowej z metabolitów witaminy C.</li>
          <li><strong>Hemochromatoza</strong>: witamina C nasila wchłanianie i uwalnianie żelaza, co przy jego nadmiarze pogłębia uszkodzenie narządów.</li>
          <li><strong>Niedobór dehydrogenazy glukozo-6-fosforanowej (G6PD)</strong>: wysokie dawki witaminy C mogą wywołać hemolizę.</li>
          <li><strong>Nadwrażliwość</strong> na którykolwiek składnik wlewu.</li>
          <li><strong>Blok przedsionkowo-komorowy i miastenia</strong>: dożylny magnez nasila zaburzenia przewodzenia i osłabienie mięśni.</li>
        </ul>
        <h3>Przeciwwskazania względne, o których decyduje lekarz</h3>
        <ul>
          <li><strong>Niewydolność serca i niekontrolowane nadciśnienie</strong>: dodatkowa objętość płynów, w Exclusive dwie butelki, obciąża układ krążenia.</li>
          <li><strong>Kamica nerkowa szczawianowa w wywiadzie</strong>: metabolity witaminy C sprzyjają nawrotom.</li>
          <li><strong>Astma oskrzelowa</strong>: dożylny magnez jest stosowany w leczeniu napadów astmy, ale przy szybkim podaniu może wywołać spadek ciśnienia; wlew podajemy wolno.</li>
          <li><strong>Ciąża i karmienie piersią</strong>: brak wystarczających danych o bezpieczeństwie dożylnego glutationu; decyzja indywidualna.</li>
          <li><strong>Aktywna infekcja z gorączką</strong>: pacjent z gorączką powyżej 38 stopni powinien najpierw trafić do lekarza rodzinnego, a nie na wlew.</li>
        </ul>
        <p>Możliwe działania niepożądane to uczucie ciepła, przejściowy spadek ciśnienia, metaliczny posmak i ból w miejscu wkłucia. Rzadko dochodzi do reakcji alergicznej; gabinet dysponuje zestawem przeciwwstrząsowym, a wlew przebiega pod nadzorem personelu medycznego.</p>
      </>
    ),
  },
  {
    title: 'Częstotliwość wlewów, sezon infekcyjny i realistyczne oczekiwania',
    tocLabel: 'Częstotliwość i efekty',
    content: (
      <>
        <p>Pojedynczy wlew uzupełnia witaminę C, magnez i płyny na kilka dni. Nie ma badań, które określałyby optymalną liczbę wlewów u osób zdrowych, dlatego schemat ustala lekarz na podstawie wskazań, a nie kalendarza.</p>
        <h3>Typowe schematy stosowania</h3>
        <ol>
          <li><strong>Wlew doraźny</strong>: pojedynczo, w rekonwalescencji po infekcji lub po okresie dużego obciążenia. Najczęstszy scenariusz w Bas Clinic.</li>
          <li><strong>Seria przed sezonem</strong>: zwykle 3-4 wlewy w odstępach tygodniowych we wrześniu i październiku u osób z historią nawracających infekcji, jeśli lekarz potwierdzi wskazania.</li>
          <li><strong>Wlewy podtrzymujące</strong>: co 3-4 tygodnie w sezonie infekcyjnym, wyłącznie przy udokumentowanych niedoborach.</li>
        </ol>
        <h3>Czego się spodziewać</h3>
        <p>Bezpośrednio po wlewie pacjenci zgłaszają zwykle poprawę samopoczucia i ustąpienie uczucia wyczerpania. To przede wszystkim efekt nawodnienia i uzupełnienia magnezu, nie wzmocnienia odporności. Nie prowadzimy pomiaru liczby infekcji u naszych pacjentów i nie podajemy statystyk skuteczności, bo nie mielibyśmy ich czym uzasadnić. Osoby, które regularnie trenują i szukają wsparcia regeneracji po wysiłku, mogą rozważyć <Link href="/wlewy-witaminowe/kroplowka-sport-i-regeneracja/">kroplówkę Sport i regeneracja</Link>. Pełną listę kroplówek znajdziesz na stronie <Link href="/wlewy-witaminowe/">wlewów witaminowych</Link>.</p>
      </>
    ),
  },
  {
    title: 'Cena kroplówki na odporność we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Kroplówka na odporność w Bas Clinic we Wrocławiu kosztuje od {TIER_PRICE.standard} zł. Wariant Standard to {TIER_PRICE.standard} zł, VIP {TIER_PRICE.vip} zł, a Exclusive z glutationem TAD 600 {TIER_PRICE.exclusive} zł. Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe, 90-minutowy wlew pod opieką personelu i obserwację po zabiegu.</p>
        <h3>Co zawiera cena</h3>
        <ul>
          <li>kwalifikację lekarską i wywiad zdrowotny,</li>
          <li>Optilyte, magnez i witaminę C w dawce wariantu, w Exclusive drugą butelkę z TAD 600,</li>
          <li>kaniulę, zestaw do wlewów i opatrunek,</li>
          <li>opiekę personelu przez cały czas trwania wlewu,</li>
          <li>kontrolę samopoczucia przed wyjściem z kliniki.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizyta nie wymaga skierowania. Warto zabrać aktualne wyniki badań, zwłaszcza kreatyninę i jonogram. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>. Ceny wszystkich wlewów zestawia <Link href="/cennik/">cennik</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O wskazaniach i wariancie wlewu decyduje lekarz podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Hemilä H., Chalker E. Vitamin C for preventing and treating the common cold. Cochrane Database of Systematic Reviews 2013; CD000980. PMID 23440782.</li>
        <li>Carr A.C., Maggini S. Vitamin C and Immune Function. Nutrients 2017; 9(11): 1211. PMID 29099763.</li>
        <li>Padayatty S.J. i wsp. Vitamin C pharmacokinetics: implications for oral and intravenous use. Annals of Internal Medicine 2004; 140(7): 533-537. PMID 15068981.</li>
        <li>Tam M., Gómez S., González-Gross M., Marcos A. Possible roles of magnesium on the immune system. European Journal of Clinical Nutrition 2003; 57(10): 1193-1197. PMID 14506478.</li>
        <li>Dröge W., Breitkreutz R. Glutathione and immune function. Proceedings of the Nutrition Society 2000; 59(4): 595-600. PMID 11115795.</li>
        <li>Witschi A., Reddy S., Stofer B., Lauterburg B.H. The systemic availability of oral glutathione. European Journal of Clinical Pharmacology 1992; 43(6): 667-669. PMID 1362956.</li>
        <li>Richie J.P. i wsp. Randomized controlled trial of oral glutathione supplementation on body stores of glutathione. European Journal of Nutrition 2015; 54(2): 251-263. PMID 24791752.</li>
        <li>Charakterystyka Produktu Leczniczego Optilyte, roztwór do infuzji (Fresenius Kabi Polska).</li>
        <li>Charakterystyka Produktu Leczniczego TAD 600, glutation 600 mg, proszek i rozpuszczalnik do sporządzania roztworu do wstrzykiwań (Biomedica Foscama).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Jak długo trwa kroplówka na odporność?',
    answer:
      'Sam wlew trwa około 90 minut, bo magnez i witaminę C podaje się wolno. Do tego dochodzi kwalifikacja lekarska (10-15 minut) i krótka obserwacja po zakończeniu, więc na całą wizytę w Bas Clinic warto zarezerwować około 110 minut.',
  },
  {
    question: 'Czy kroplówka na odporność chroni przed przeziębieniem?',
    answer:
      'Nie. Przegląd Cochrane z 2013 roku nie wykazał, aby dodatkowa witamina C zmniejszała liczbę przeziębień u osób zdrowych; regularne przyjmowanie skracało jedynie czas trwania infekcji o kilka procent. Wlew nie zastępuje szczepień, snu ani diety. Ma sens przy zwiększonym zużyciu witaminy C i magnezu, na przykład w rekonwalescencji.',
  },
  {
    question: 'Czym różnią się warianty Standard, VIP i Exclusive?',
    answer:
      'Wszystkie zawierają Optilyte, magnez i witaminę C. Standard ma jedną ampułkę witaminy C, VIP trzy. Exclusive to skład VIP plus druga butelka soli fizjologicznej z TAD 600, czyli glutationem. Wariant dobiera lekarz podczas kwalifikacji.',
  },
  {
    question: 'Czy mogę przyjść na wlew w trakcie infekcji?',
    answer:
      'Przy lekkim przeziębieniu bez gorączki lekarz może zakwalifikować do wlewu, zwykle jako wsparcie rekonwalescencji. Przy gorączce powyżej 38 stopni, duszności lub złym stanie ogólnym najpierw potrzebna jest wizyta u lekarza rodzinnego i leczenie, a nie kroplówka.',
  },
  {
    question: 'Jak często można powtarzać kroplówkę na odporność?',
    answer:
      'Najczęściej jest to pojedynczy wlew doraźny. Przy wskazaniach lekarz może zaproponować serię 3-4 wlewów w odstępach tygodniowych przed sezonem infekcyjnym, a potem wlewy podtrzymujące co 3-4 tygodnie. Nie ma badań określających optymalną liczbę wlewów u osób zdrowych.',
  },
  {
    question: 'Gdzie we Wrocławiu podać kroplówkę na odporność?',
    answer: `Kroplówkę na odporność podajemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function KroplowkaNaOdpornoscPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Kroplówka na odporność Wrocław"
      heroSubtitle="Wlewy witaminowe"
      heroDescription="Wlew dożylny witaminy C i magnezu w płynie wieloelektrolitowym, w wariancie Exclusive z glutationem TAD 600. Kwalifikacja lekarska przed każdym podaniem, około 90 minut w Bas Clinic we Wrocławiu."
      slug="wlewy-witaminowe/kroplowka-na-odpornosc"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
