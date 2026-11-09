import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug, WLEWY_TIERS } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Kroplówka energetyczna Wrocław - skład i cena',
  description:
    'Kroplówka energetyczna we Wrocławiu: magnez i witaminy B bez kofeiny i stymulantów, trzy warianty. Kwalifikacja lekarska, przeciwwskazania, cena od 500 zł.',
  path: '/wlewy-witaminowe/kroplowka-energetyczna/',
});

const SERVICE = getServiceBySlug('wlewy-witaminowe/kroplowka-energetyczna');
const TIER_LABEL = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.label]));
const TIER_PRICE = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.price]));

const BREADCRUMBS = [
  { label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' },
  { label: 'Kroplówka energetyczna' },
];

const EXPERT_INFO = [
  {
    title: 'Kroplówka energetyczna we Wrocławiu - skład i warianty wlewu',
    tocLabel: 'Skład wlewu',
    content: (
      <>
        <p><strong>Kroplówka energetyczna</strong> to wlew dożylny z elektrolitami i magnezem, w wariantach VIP i Exclusive także z kompleksem witamin B (B1, B6, B12), a wyłącznie w Exclusive dodatkowo z glutationem. Nie zawiera kofeiny, tauryny ani żadnej substancji pobudzającej. Wlew trwa około godziny i podajemy go w Bas Clinic we Wrocławiu po kwalifikacji lekarskiej.</p>
        <p>„Energia” w nazwie nie oznacza pobudzenia. Składniki wlewu są kofaktorami reakcji, w których komórka wytwarza ATP. Jeśli ich brakuje, uzupełnienie może poprawić samopoczucie. Jeśli ich nie brakuje, wlew energii nie doda.</p>
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
        <p>Optilyte (Fresenius Kabi) to płyn wieloelektrolitowy o składzie jonowym zbliżonym do osocza, dopuszczony do podania dożylnego. Magnez i witaminy B pochodzą z ampułek do podania pozajelitowego. TAD 600 to produkt leczniczy z 600 mg glutationu; w tym wlewie występuje wyłącznie w wariancie Exclusive, w drugiej butelce soli fizjologicznej. Nie stosujemy suplementów diety rozpuszczanych do wlewu.</p>
      </>
    ),
  },
  {
    title: 'Skąd bierze się energia w komórce - ATP, magnez i witaminy B',
    tocLabel: 'Mechanizm działania',
    content: (
      <>
        <p>Energia w komórce ma postać ATP, adenozynotrifosforanu, który powstaje w trzech etapach: glikolizie, cyklu Krebsa i łańcuchu oddechowym w mitochondriach. Każdy etap wymaga kofaktorów. Magnez i witaminy B należą do najważniejszych, a ich niedobór spowalnia cały szlak.</p>
        <h3>Gdzie w tym szlaku działają składniki wlewu</h3>
        <ul>
          <li><strong>Magnez</strong>: ATP jest aktywne biologicznie jako kompleks z jonem magnezu; bez niego enzymy wytwarzające i zużywające ATP pracują wolniej.</li>
          <li><strong>Witamina B1</strong>: kofaktor dehydrogenazy pirogronianowej i alfa-ketoglutaranowej, dwóch enzymów na wejściu i w środku cyklu Krebsa.</li>
          <li><strong>Witamina B6</strong>: przemiany aminokwasów i glikogenu, synteza neuroprzekaźników.</li>
          <li><strong>Witamina B12</strong>: dojrzewanie krwinek czerwonych, które dostarczają tlen do mitochondriów.</li>
        </ul>
        <h3>Czym to różni się od kawy i napoju energetycznego</h3>
        <p>Kofeina blokuje receptory adenozynowe w mózgu i maskuje sygnał zmęczenia: energii nie dodaje, tylko odsuwa jej odczuwanie. Wlew działa inaczej, bo dostarcza substraty do reakcji, które wytwarzają ATP. Dlatego nie daje efektu „kopa” po kilku minutach i nie powoduje spadku po kilku godzinach. Przegląd Tardy i wsp. (2020) porządkuje dowody na udział witamin B, witaminy C, magnezu i żelaza w zmęczeniu fizycznym i psychicznym: korzyść pojawia się wtedy, gdy stan wyjściowy jest niedoborowy.</p>
      </>
    ),
  },
  {
    title: 'Magnez w kroplówce energetycznej - niedobór, stres i wchłanianie',
    tocLabel: 'Rola magnezu',
    content: (
      <>
        <p>Magnez jest kofaktorem ponad 600 reakcji enzymatycznych (de Baaij i wsp., 2015) i drugim po potasie kationem wewnątrzkomórkowym. Zmęczenie, drażliwość, skurcze i zaburzenia snu należą do wczesnych objawów jego niedoboru. W kroplówce energetycznej magnez jest w każdym wariancie.</p>
        <h3>Kto traci magnez szybciej</h3>
        <ul>
          <li><strong>Osoby pod przewlekłym stresem</strong>: kortyzol i katecholaminy zwiększają wydalanie magnezu z moczem.</li>
          <li><strong>Pijący dużo kawy i alkoholu</strong>: oba działają moczopędnie i nasilają utratę nerkową.</li>
          <li><strong>Przyjmujący inhibitory pompy protonowej lub diuretyki</strong>: te leki obniżają wchłanianie albo zwiększają wydalanie magnezu.</li>
          <li><strong>Trenujący intensywnie</strong>: straty z potem i przesunięcie magnezu do mięśni.</li>
        </ul>
        <p>Doustnie wchłania się około 30-40% dawki magnezu, przy biegunkach i chorobach jelit mniej. Wlew omija jelito, ale nerki wydalają nadmiar magnezu w ciągu kilku do kilkunastu godzin, więc pojedyncze podanie nie odbudowuje zapasów na tygodnie. Stąd sens ma raczej krótka seria niż jednorazowa duża dawka. Osobom, u których dominuje napięcie i przeciążenie pracą, lekarz może zaproponować <Link href="/wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres/">kroplówkę na zmęczenie i stres</Link>, która już w wariancie VIP zawiera glutation i glukozę.</p>
      </>
    ),
  },
  {
    title: 'Witaminy B1, B6 i B12 w wariantach VIP i Exclusive',
    tocLabel: 'Witaminy B',
    content: (
      <>
        <p>Kompleks witamin B (B1, B6, B12) pojawia się od wariantu VIP. Są to witaminy rozpuszczalne w wodzie, których organizm nie magazynuje w większych ilościach, poza B12 gromadzoną w wątrobie. Przy zwiększonym zapotrzebowaniu lub ubogiej diecie ich zasoby wyczerpują się w ciągu tygodni.</p>
        <h3>Co robi każda z witamin</h3>
        <ul>
          <li><strong>B1 (tiamina)</strong>: bez niej pirogronian z glikolizy nie wchodzi do cyklu Krebsa. Niedobór objawia się zmęczeniem, drażliwością i pogorszeniem pamięci, a nasila go alkohol i dieta oparta na cukrach prostych.</li>
          <li><strong>B6 (pirydoksyna)</strong>: koenzym ponad stu reakcji, w tym syntezy serotoniny, dopaminy i GABA. Przegląd Kennedy&apos;ego (2016) opisuje, jak deficyt tej grupy witamin przekłada się na funkcje poznawcze i nastrój.</li>
          <li><strong>B12 (kobalamina)</strong>: niezbędna do produkcji krwinek czerwonych i osłonek mielinowych nerwów. Doustnie przyswaja się około 1-2% dawki przekraczającej pojemność czynnika wewnętrznego, dlatego droga pozajelitowa ma tu największą przewagę.</li>
        </ul>
        <p>Wlew dostarcza witaminy B jednorazowo. Rozpoznany niedobór B12 (na przykład u wegan, po operacjach żołądka, przy metforminie) wymaga osobnej diagnostyki i schematu iniekcji, a nie kroplówki energetycznej. Pacjent, któremu zależy na szerszym zestawie witamin z witaminą C, może porównać skład <Link href="/wlewy-witaminowe/witaminowa-bomba/">kroplówki Witaminowa bomba</Link>.</p>
      </>
    ),
  },
  {
    title: 'TAD 600 w wariancie Exclusive - glutation a przewlekłe zmęczenie',
    tocLabel: 'Glutation (Exclusive)',
    content: (
      <>
        <p><strong>TAD 600</strong> to preparat glutationu do podania dożylnego. Glutation jest tripeptydem z kwasu glutaminowego, cysteiny i glicyny i głównym antyoksydantem wewnątrzkomórkowym. W kroplówce energetycznej pojawia się wyłącznie w wariancie Exclusive, w drugiej butelce NaCl 0,9% 100 ml lub 250 ml.</p>
        <h3>Związek ze zmęczeniem</h3>
        <p>Mitochondria, w których powstaje ATP, są zarazem głównym źródłem reaktywnych form tlenu. Glutation chroni ich błony i enzymy łańcucha oddechowego przed uszkodzeniem oksydacyjnym; przy przewlekłym stresie, infekcjach i niedosypianiu jego zasoby spadają. Stąd obecność glutationu w wariancie dla osób z najgłębszym wyczerpaniem.</p>
        <h3>Dlaczego dożylnie zamiast tabletki</h3>
        <p>Glutation doustny rozkładają peptydazy jelitowe. W badaniu z randomizacją Allena i Bradleya (2011) czterotygodniowa suplementacja 1000 mg dziennie nie zmieniła stężenia glutationu w krwinkach ani markerów stresu oksydacyjnego u zdrowych dorosłych. Podanie dożylne omija ten etap. Jednocześnie nie ma badań z randomizacją, które oceniałyby dożylny glutation u osób zmęczonych bez choroby podstawowej. Dlatego Exclusive proponujemy wybiórczo, a nie jako domyślny wybór.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo jest kroplówka energetyczna - wskazania i diagnostyka zmęczenia',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Kroplówka energetyczna jest dla osób, u których spadek energii wynika z przeciążenia, ubogiej diety lub rekonwalescencji, a nie z nierozpoznanej choroby. Zmęczenie jest objawem, a nie diagnozą, dlatego lekarz podczas kwalifikacji pyta o jego czas trwania i charakter.</p>
        <h3>Sytuacje, w których pacjenci wybierają ten wlew</h3>
        <ul>
          <li><strong>Okres wzmożonego wysiłku umysłowego</strong>: sesja, zamknięcie projektu, praca zmianowa, nieregularne posiłki.</li>
          <li><strong>Rekonwalescencja</strong> po infekcji, gdy osłabienie utrzymuje się mimo ustąpienia gorączki.</li>
          <li><strong>Przesilenie sezonowe</strong> wiosną i jesienią, przy krótkim dniu i gorszej diecie.</li>
          <li><strong>Trudności z koncentracją</strong> przy prawidłowych wynikach badań podstawowych.</li>
          <li><strong>Obciążenie fizyczne</strong>: tu częściej proponujemy <Link href="/wlewy-witaminowe/kroplowka-sport-i-regeneracja/">kroplówkę Sport i regeneracja</Link>, kwalifikowaną z wywiadem treningowym.</li>
        </ul>
        <h3>Kiedy wlew nie jest odpowiedzią</h3>
        <p>Zmęczenie trwające ponad kilka tygodni wymaga badań: morfologii i ferrytyny (niedokrwistość), TSH (niedoczynność tarczycy), glukozy, witaminy B12 i witaminy D, a przy chrapaniu i senności w dzień oceny pod kątem bezdechu sennego. Depresja również objawia się brakiem energii. W takich sytuacjach kroplówka nie zastępuje leczenia przyczyny, a lekarz kieruje pacjenta na diagnostykę zamiast na wlew.</p>
      </>
    ),
  },
  {
    title: 'Przebieg wlewu energetycznego w Bas Clinic we Wrocławiu',
    tocLabel: 'Przebieg wizyty',
    content: (
      <>
        <p>Wizyta w Bas Clinic przy {CLINIC.address.street} we Wrocławiu trwa łącznie około 75-80 minut. Sam wlew zajmuje godzinę, reszta to kwalifikacja lekarska i krótka obserwacja po zabiegu.</p>
        <h3>Etapy wizyty</h3>
        <ol>
          <li><strong>Kwalifikacja lekarska</strong>: lekarz pyta o choroby przewlekłe (zwłaszcza nerek i serca), zaburzenia rytmu, leki, suplementy i alergie oraz o czas trwania i charakter zmęczenia. Ogląda wyniki badań, jeśli pacjent je przyniósł.</li>
          <li><strong>Przygotowanie wlewu</strong>: roztwór powstaje na miejscu, bezpośrednio przed podaniem, zgodnie z wybranym wariantem.</li>
          <li><strong>Założenie kaniuli</strong>: cienki wenflon w żyle przedramienia; jedyny moment dyskomfortu, porównywalny z pobraniem krwi.</li>
          <li><strong>Wlew właściwy</strong>: około 60 minut w fotelu, pod opieką personelu. Można czytać lub pracować na laptopie. W Exclusive po pierwszej butelce podłączamy drugą, z glutationem.</li>
          <li><strong>Usunięcie kaniuli i obserwacja</strong>: kontrola samopoczucia i opatrunek w miejscu wkłucia.</li>
        </ol>
        <p>Po wlewie nie ma okresu rekonwalescencji. Pacjent może prowadzić samochód i wrócić do pracy. Ponieważ wlew nie zawiera stymulantów, nie zaburza snu, więc wizyta po południu jest równie dobra jak rano. Termin umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i bezpieczeństwo kroplówki energetycznej',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Wlew dożylny jest procedurą medyczną. Magnez podany dożylnie działa na przewodnictwo w sercu i układ nerwowo-mięśniowy, a dodatkowa objętość płynów obciąża krążenie. Dlatego w Bas Clinic żaden pacjent nie otrzymuje wlewu bez kwalifikacji lekarskiej.</p>
        <h3>Przeciwwskazania bezwzględne</h3>
        <ul>
          <li><strong>Niewydolność nerek</strong>: magnez i potas są wydalane przez nerki; przy upośledzonej filtracji grozi ich kumulacja.</li>
          <li><strong>Blok przedsionkowo-komorowy i hipermagnezemia</strong>: magnez zwalnia przewodzenie w sercu i może nasilić zaburzenia rytmu.</li>
          <li><strong>Nadwrażliwość</strong> na którykolwiek składnik, w tym na tiaminę (opisywane reakcje anafilaktyczne po podaniu pozajelitowym).</li>
        </ul>
        <h3>Przeciwwskazania względne, o których decyduje lekarz</h3>
        <ul>
          <li><strong>Niewydolność serca i niekontrolowane nadciśnienie</strong>: ryzyko przeciążenia objętościowego, większe w Exclusive z drugą butelką.</li>
          <li><strong>Ciąża i karmienie piersią</strong>: brak danych o bezpieczeństwie dożylnego glutationu; decyzja indywidualna.</li>
          <li><strong>Doustna suplementacja magnezu</strong> i leki wpływające na jego stężenie: lekarz musi o nich wiedzieć.</li>
        </ul>
        <p>Możliwe działania niepożądane to uczucie ciepła i zaczerwienienie twarzy podczas podawania magnezu, ból w miejscu wkłucia i przejściowy spadek ciśnienia przy zbyt szybkim wlewie. Dlatego tempo podania ustala lekarz. Przy zawrotach głowy, osłabieniu mięśni lub kołataniu serca wlew przerywamy. Gabinet ma zestaw przeciwwstrząsowy, a wlew przebiega pod nadzorem personelu medycznego.</p>
      </>
    ),
  },
  {
    title: 'Częstotliwość wlewów i realistyczne oczekiwania',
    tocLabel: 'Częstotliwość i efekty',
    content: (
      <>
        <p>Kroplówka energetyczna nie działa jak kawa. Część pacjentów odczuwa poprawę tego samego dnia, u innych zmiana pojawia się po drugim lub trzecim wlewie serii, a u osoby bez niedoborów może nie pojawić się wcale. Efekt zależy od stanu wyjściowego, snu i diety.</p>
        <h3>Typowy schemat stosowania</h3>
        <ol>
          <li><strong>Seria wstępna</strong>: 3-4 wlewy w odstępach tygodniowych, jeśli lekarz stwierdzi wskazania.</li>
          <li><strong>Wlewy podtrzymujące</strong>: co 2-4 tygodnie w okresie obciążenia.</li>
          <li><strong>Wlew doraźny</strong>: pojedynczo, w rekonwalescencji lub po zakończeniu wymagającego projektu.</li>
        </ol>
        <h3>Co mówią dowody</h3>
        <p>Dowody na korzyści z wlewów witaminowo-mineralnych u osób bez choroby są słabe. Jedyne badanie z randomizacją i placebo nad mieszanką magnezu, witamin B i witaminy C (tak zwanym koktajlem Myersa) dotyczyło fibromialgii i nie wykazało przewagi nad placebo, choć obie grupy zgłaszały poprawę (Ali i wsp., 2009). Wcześniejsze opisy korzyści pochodzą z serii przypadków, bez grupy kontrolnej. Mówimy o tym podczas kwalifikacji. Wlew nie zastępuje snu, regularnych posiłków ani leczenia przyczyn zmęczenia.</p>
      </>
    ),
  },
  {
    title: 'Cena kroplówki energetycznej we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Kroplówka energetyczna w Bas Clinic we Wrocławiu kosztuje od {TIER_PRICE.standard} zł. Wariant Standard to {TIER_PRICE.standard} zł, VIP {TIER_PRICE.vip} zł, a Exclusive {TIER_PRICE.exclusive} zł. Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe, godzinny wlew pod opieką personelu i obserwację po zabiegu.</p>
        <h3>Co zawiera cena</h3>
        <ul>
          <li>kwalifikację lekarską i wywiad zdrowotny,</li>
          <li>preparaty do podania pozajelitowego zgodne z wariantem,</li>
          <li>kaniulę, zestaw do wlewów i opatrunek,</li>
          <li>opiekę personelu przez cały czas trwania wlewu,</li>
          <li>kontrolę samopoczucia przed wyjściem z kliniki.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizyta nie wymaga skierowania. Warto zabrać aktualne wyniki badań, zwłaszcza morfologię, TSH, jonogram z magnezem i kreatyninę. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>. Pozostałe wlewy i warianty znajdziesz na stronie <Link href="/wlewy-witaminowe/">wlewów witaminowych</Link> oraz w <Link href="/cennik/">cenniku</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O wskazaniach i wariancie wlewu decyduje lekarz podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Tardy A.L. i wsp. Vitamins and Minerals for Energy, Fatigue and Cognition: A Narrative Review of the Biochemical and Clinical Evidence. Nutrients 2020; 12(1): 228. PMID 31963141.</li>
        <li>de Baaij J.H.F., Hoenderop J.G.J., Bindels R.J.M. Magnesium in man: implications for health and disease. Physiological Reviews 2015; 95(1): 1-46. PMID 25540137.</li>
        <li>Kennedy D.O. B Vitamins and the Brain: Mechanisms, Dose and Efficacy. A Review. Nutrients 2016; 8(2): 68. PMID 26828517.</li>
        <li>Schwalfenberg G.K., Genuis S.J. The Importance of Magnesium in Clinical Healthcare. Scientifica 2017; 2017: 4179326. PMID 29093983.</li>
        <li>Allen J., Bradley R.D. Effects of oral glutathione supplementation on systemic oxidative stress biomarkers in human volunteers. Journal of Alternative and Complementary Medicine 2011; 17(9): 827-833. PMID 21875351.</li>
        <li>Ali A. i wsp. Intravenous micronutrient therapy (Myers&apos; Cocktail) for fibromyalgia: a placebo-controlled pilot study. Journal of Alternative and Complementary Medicine 2009; 15(3): 247-257. PMID 19250003.</li>
        <li>Gaby A.R. Intravenous nutrient therapy: the &quot;Myers&apos; cocktail&quot;. Alternative Medicine Review 2002; 7(5): 389-403. PMID 12410623.</li>
        <li>EFSA NDA Panel. Scientific Opinion on the substantiation of health claims related to magnesium, including contribution to normal energy-yielding metabolism and reduction of tiredness and fatigue. EFSA Journal 2010; 8(10): 1807.</li>
        <li>Charakterystyka Produktu Leczniczego Optilyte, roztwór do infuzji (Fresenius Kabi).</li>
        <li>Charakterystyka Produktu Leczniczego TAD 600, proszek i rozpuszczalnik do sporządzania roztworu do wstrzykiwań (Biomedica Foscama).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Czy kroplówka energetyczna zawiera kofeinę lub substancje pobudzające?',
    answer:
      'Nie. Wlew nie zawiera kofeiny, tauryny ani innych stymulantów. Każdy wariant zawiera Optilyte i magnez. Warianty VIP i Exclusive obejmują także kompleks witamin B, a wyłącznie Exclusive dodatkowo drugą butelkę NaCl 0,9% 100 ml lub 250 ml z TAD 600 (glutationem). Nie pobudza i nie zaburza snu.',
  },
  {
    question: 'Jak długo trwa wlew energetyczny?',
    answer:
      'Sam wlew trwa około 60 minut, w wariancie Exclusive z drugą butelką nieco dłużej. Do tego dochodzi kwalifikacja lekarska (10-15 minut) i krótka obserwacja, więc na wizytę w Bas Clinic warto zarezerwować około 80 minut.',
  },
  {
    question: 'Kiedy odczuwalne są efekty kroplówki energetycznej?',
    answer:
      'Reakcja jest indywidualna. Część pacjentów zgłasza poprawę samopoczucia tego samego dnia, u innych zmiana pojawia się po kolejnych wlewach serii. U osoby bez niedoborów magnezu i witamin B efekt może nie wystąpić, o czym mówimy podczas kwalifikacji.',
  },
  {
    question: 'Czym różnią się warianty Standard, VIP i Exclusive?',
    answer: `Standard (${TIER_PRICE.standard} zł) to Optilyte z magnezem. VIP (${TIER_PRICE.vip} zł) dokłada kompleks witamin B (B1, B6, B12). Exclusive (${TIER_PRICE.exclusive} zł) zawiera dodatkowo drugą butelkę soli fizjologicznej z TAD 600, czyli glutationem. Wariant dobiera lekarz podczas kwalifikacji.`,
  },
  {
    question: 'Czy kroplówka energetyczna zastąpi badania przy przewlekłym zmęczeniu?',
    answer:
      'Nie. Zmęczenie trwające ponad kilka tygodni wymaga diagnostyki: morfologii, ferrytyny, TSH, glukozy, witaminy B12 i witaminy D. Niedokrwistość, niedoczynność tarczycy, bezdech senny czy depresja wymagają leczenia przyczyny. Lekarz podczas kwalifikacji może skierować na badania zamiast podać wlew.',
  },
  {
    question: 'Gdzie we Wrocławiu podać kroplówkę energetyczną?',
    answer: `Kroplówkę energetyczną podajemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function KroplowkaEnergetycznaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Kroplówka energetyczna Wrocław"
      heroSubtitle="Wlewy witaminowe"
      heroDescription="Wlew dożylny z elektrolitami i magnezem, w wariantach VIP i Exclusive także z kompleksem witamin B, bez kofeiny i substancji pobudzających. Kwalifikacja lekarska przed każdym podaniem, około 60 minut w Bas Clinic we Wrocławiu."
      slug="wlewy-witaminowe/kroplowka-energetyczna"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
