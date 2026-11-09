import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug, WLEWY_TIERS } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Kroplówka Detox wątroby Wrocław - skład i cena',
  description:
    'Kroplówka Detox wątroby we Wrocławiu: wlew z Hepa-Merz (L-ornityna L-asparaginian) i elektrolitami. Co robi, a czego nie, przeciwwskazania, cena od 500 zł.',
  path: '/wlewy-witaminowe/kroplowka-detox-watroby/',
});

const SERVICE = getServiceBySlug('wlewy-witaminowe/kroplowka-detox-watroby');
const TIER_LABEL = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.label]));
const TIER_PRICE = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.price]));

const BREADCRUMBS = [
  { label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' },
  { label: 'Kroplówka Detox wątroby' },
];

const EXPERT_INFO = [
  {
    title: 'Kroplówka Detox wątroby we Wrocławiu - skład i trzy warianty wlewu',
    tocLabel: 'Skład wlewu',
    content: (
      <>
        <p><strong>Kroplówka Detox wątroby</strong> to wlew dożylny zbudowany wokół jednego leku: Hepa-Merz, czyli L-ornityny L-asparaginianu (LOLA), podanego w soli fizjologicznej. Wlew trwa około godziny i podajemy go w Bas Clinic we Wrocławiu po kwalifikacji lekarskiej. Warianty VIP i Exclusive obejmują dodatkowo drugą butelkę Optilyte 500 ml oraz Natrium Bicarbonicum, a Exclusive także magnez.</p>
        <p>Hepa-Merz jest w każdym wariancie i w tej samej dawce. Dopłata za VIP i Exclusive dotyczy objętości płynów, elektrolitów i buforu, nie większej ilości leku. Skład jest zamknięty: nie dokładamy do niego witamin ani preparatów spoza tej listy.</p>
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
        <p>Sól fizjologiczna NaCl 0,9% jest nośnikiem leku i uzupełnia płyny. Optilyte w drugiej butelce to płyn wieloelektrolitowy (sód, potas, magnez, chlorki, octany), a Natrium Bicarbonicum to bufor wyrównujący pH krwi. Osobom, które szukają wlewu z witaminami, a nie z lekiem hepatologicznym, lekarz wskaże <Link href="/wlewy-witaminowe/witaminowa-bomba/">kroplówkę Witaminowa bomba</Link> z witaminami z grupy B.</p>
      </>
    ),
  },
  {
    title: 'Hepa-Merz (LOLA) - lek na hiperamonemię i jego mechanizm działania',
    tocLabel: 'Hepa-Merz i amoniak',
    content: (
      <>
        <p>Hepa-Merz to produkt leczniczy firmy Merz zawierający L-ornityny L-asparaginian. Według Charakterystyki Produktu Leczniczego jest zarejestrowany do leczenia następstw zaburzeń detoksykacyjnej funkcji wątroby z podwyższonym stężeniem amoniaku, w tym utajonej i jawnej encefalopatii wątrobowej. W kroplówce Detox wątroby wykorzystujemy ten sam mechanizm u osób z wątrobą obciążoną, ale wydolną.</p>
        <h3>Skąd bierze się amoniak i jak LOLA go usuwa</h3>
        <ul>
          <li><strong>Źródło amoniaku</strong>: rozpad białek w jelicie i mięśniach. Zdrowa wątroba przetwarza go w cyklu mocznikowym do mocznika, który wydalają nerki. Gdy hepatocyty pracują gorzej, amoniak przenika do krwi i mózgu.</li>
          <li><strong>L-ornityna</strong>: substrat cyklu mocznikowego; łączy się z karbamoilofosforanem i uruchamia przemianę amoniaku do cytruliny, argininy i mocznika. Aktywuje też syntetazę karbamoilofosforanową, enzym limitujący szybkość cyklu.</li>
          <li><strong>L-asparaginian</strong>: dostarcza grupy aminowej w kolejnym etapie cyklu, a w mięśniach i mózgu napędza syntetazę glutaminową, która wiąże amoniak w glutaminę. To druga, niezależna od wątroby droga usuwania amoniaku.</li>
        </ul>
        <h3>Czego LOLA nie robi</h3>
        <p>L-ornityny L-asparaginian nie przyspiesza metabolizmu alkoholu, nie usuwa z organizmu leków ani „toksyn środowiskowych” i nie odbudowuje uszkodzonych hepatocytów. Obniża stężenie amoniaku i to jest jedyny efekt, który da się zmierzyć. Wszystkie pozostałe działania, w tym antyoksydacyjne przez glutaminę i glutation, opisano na razie w modelach komórkowych, nie u pacjentów.</p>
      </>
    ),
  },
  {
    title: 'Co mówią badania o L-ornitynie L-asparaginianie',
    tocLabel: 'Dowody naukowe',
    content: (
      <>
        <p>Dowody na skuteczność LOLA dotyczą pacjentów z marskością i encefalopatią wątrobową. U osób zdrowych lub z lekko obciążoną wątrobą badań klinicznych z wlewami nie ma. Mówimy to wprost, bo od tego zależy, czego pacjent może się po wlewie spodziewać.</p>
        <h3>Najważniejsze prace</h3>
        <ul>
          <li><strong>Przegląd Cochrane (Goh i wsp., 2018)</strong>: 36 badań z randomizacją i ponad 2 tysiące uczestników z marskością. LOLA zmniejszała ryzyko encefalopatii i zgonu w porównaniu z placebo, ale autorzy ocenili jakość dowodów jako bardzo niską, a w badaniach o niskim ryzyku błędu efekt nie był już widoczny.</li>
          <li><strong>Metaanaliza Butterworth i wsp. (2018)</strong>: 10 badań, 884 pacjentów. LOLA poprawiała stan psychiczny w jawnej i minimalnej encefalopatii oraz obniżała amoniak we krwi średnio o 17,5 µmol/l.</li>
          <li><strong>Badanie Kircheis i wsp. (1997)</strong>: 126 pacjentów z marskością otrzymywało 20 g LOLA dożylnie dziennie przez 7 dni. Amoniak po posiłku i wyniki testów psychometrycznych poprawiły się w porównaniu z placebo; działania niepożądane (nudności) wystąpiły u 5% leczonych.</li>
          <li><strong>Stłuszczenie wątroby</strong>: Canbay i Sowa (2019) opisują LOLA jako kandydata do leczenia niealkoholowej stłuszczeniowej choroby wątroby, ale na etapie hipotezy i badań na komórkach. Wytyczne EASL z 2024 roku nie wymieniają LOLA wśród leków na stłuszczenie; podstawą leczenia jest redukcja masy ciała i zmiana diety.</li>
        </ul>
        <p>Wniosek dla pacjenta: Hepa-Merz działa na amoniak u chorych z niewydolną wątrobą. U osoby z wątrobą sprawną, po okresie leków lub alkoholu, wlew może obniżyć amoniak, ale nie ma badań, które by to udowodniły.</p>
      </>
    ),
  },
  {
    title: '„Detoks wątroby” - co to określenie znaczy naprawdę',
    tocLabel: 'Czym jest detoks',
    content: (
      <>
        <p>Słowo „detoks” to określenie potoczne, nie medyczne. Wątroba nie gromadzi „toksyn”, które trzeba wypłukać; ma własne, dobrze opisane szlaki biotransformacji i wykonuje je bez pomocy, dopóki jest zdrowa. Kroplówka Detox wątroby dostarcza substratów do jednego z tych szlaków, cyklu mocznikowego, oraz uzupełnia płyny i elektrolity.</p>
        <h3>Trzy fazy usuwania ksenobiotyków</h3>
        <ul>
          <li><strong>Faza I</strong>: enzymy cytochromu P450 utleniają, redukują lub hydrolizują leki i alkohol, czyniąc je bardziej polarnymi. Produktem ubocznym są reaktywne formy tlenu.</li>
          <li><strong>Faza II</strong>: sprzęganie metabolitów z glutationem, kwasem glukuronowym, siarczanami lub glicyną. Powstają związki rozpuszczalne w wodzie.</li>
          <li><strong>Faza III</strong>: transport do żółci lub krwi i wydalenie przez jelito albo nerki.</li>
        </ul>
        <h3>Co mówi nauka o „detoksie”</h3>
        <p>Przegląd Klein i Kiat z 2015 roku nie znalazł badań z randomizacją, które potwierdzałyby, że komercyjne programy „detoks” usuwają toksyny lub poprawiają pracę wątroby. Nasze stanowisko jest proste: nazwa wlewu jest handlowa, mechanizm jest metaboliczny i ograniczony do amoniaku, a jedynym sposobem na odciążenie wątroby, który ma dowody, jest usunięcie przyczyny obciążenia. Pacjentom po jednorazowym nadużyciu alkoholu, którym zależy na nawodnieniu i glukozie, a nie na leku hepatologicznym, lekarz częściej proponuje <Link href="/wlewy-witaminowe/kroplowka-after-party/">kroplówkę After party</Link>.</p>
      </>
    ),
  },
  {
    title: 'Optilyte, wodorowęglan sodu i magnez w wariantach VIP i Exclusive',
    tocLabel: 'Druga butelka',
    content: (
      <>
        <p>Wariant Standard to jedna butelka: sól fizjologiczna z Hepa-Merz. VIP obejmuje dodatkowo drugą butelkę Optilyte 500 ml oraz Natrium Bicarbonicum, a Exclusive także magnez. Cel wlewu nie zmienia się, zmienia się objętość i skład elektrolitowy.</p>
        <h3>Co wnosi każdy dodatek</h3>
        <ul>
          <li><strong>Optilyte</strong>: płyn wieloelektrolitowy o składzie zbliżonym do osocza. Druga butelka podwaja objętość płynów i uzupełnia sód, potas i chlorki, które tracą osoby po biegunce, wymiotach, gorączce lub alkoholu.</li>
          <li><strong>Natrium Bicarbonicum</strong>: wodorowęglan sodu wiąże nadmiar jonów wodorowych i podnosi pH krwi. Metabolizm etanolu i głodzenie produkują kwaśne metabolity (mleczany, ketony), a bufor je neutralizuje. U osoby z prawidłową gospodarką kwasowo-zasadową nie ma czego buforować.</li>
          <li><strong>Magnez</strong>: kofaktor setek enzymów, w tym uczestniczących w cyklu mocznikowym i syntezie ATP. Alkohol zwiększa wydalanie magnezu z moczem, więc po okresie picia niedobór jest częsty i objawia się skurczami, drżeniem i zaburzeniami rytmu serca.</li>
        </ul>
        <p>Dawki wodorowęglanu i magnezu są stałe dla wariantu. Nie stosujemy dawek maksymalnych, bo nadmiar wodorowęglanu daje alkalozę, a nadmiar magnezu spowalnia przewodnictwo w sercu. Osobom, którym zależy głównie na płynach i elektrolitach, lekarz może zaproponować <Link href="/wlewy-witaminowe/kroplowka-nawodnienie/">kroplówkę nawadniającą</Link> bez leku hepatologicznego.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo jest kroplówka na wątrobę - wskazania i granice',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Kroplówka Detox wątroby ma sens u osób z wątrobą przejściowo obciążoną: po serii leków, po okresie nadmiernego picia alkoholu, przy diecie wysokobiałkowej lub odwodnieniu. Nie leczy chorób wątroby i nie zastępuje ich diagnostyki. O wskazaniach decyduje lekarz po wywiadzie i ocenie wyników.</p>
        <h3>Sytuacje, w których lekarz rozważa ten wlew</h3>
        <ul>
          <li><strong>Po farmakoterapii</strong>: kilkutygodniowa antybiotykoterapia, leczenie przeciwgrzybicze, przewlekłe przyjmowanie paracetamolu lub niesteroidowych leków przeciwzapalnych, statyny z nieznacznie podwyższonymi aminotransferazami.</li>
          <li><strong>Po okresie nadmiernego picia</strong>: kilkudniowe lub kilkutygodniowe picie z uczuciem ciężkości w prawym podżebrzu, nudnościami i osłabieniem, gdy pacjent nie jest w stanie upojenia ani zespołu abstynencyjnego.</li>
          <li><strong>Nieznacznie podwyższone ALT, AST lub GGTP</strong> w badaniach kontrolnych, po wykluczeniu przez lekarza aktywnej choroby wątroby.</li>
          <li><strong>Odwodnienie i zaburzenia elektrolitowe</strong> towarzyszące obciążeniu wątroby, gdy wskazane są warianty z drugą butelką.</li>
        </ul>
        <h3>Kiedy wlew nie jest odpowiedzią</h3>
        <p>Stłuszczenie wątroby, wirusowe zapalenia wątroby, marskość, autoimmunologiczne choroby wątroby i znacznie podwyższone enzymy wymagają diagnostyki, a nie wlewu. Pierwszym krokiem jest zwykle <Link href="/usg/watroba/">USG wątroby</Link>, które w Bas Clinic wykonujemy na miejscu, oraz badania krwi. Kroplówka nie jest też leczeniem uzależnienia od alkoholu: osobom, u których picie wymyka się spod kontroli, proponujemy konsultację w ramach <Link href="/leczenie-uzaleznien/">leczenia uzależnień</Link>, gdzie lekarz prowadzi odtrucie i dalszą terapię w warunkach medycznych.</p>
      </>
    ),
  },
  {
    title: 'Przebieg kroplówki Detox wątroby w Bas Clinic we Wrocławiu',
    tocLabel: 'Przebieg wizyty',
    content: (
      <>
        <p>Wizyta w Bas Clinic przy {CLINIC.address.street} we Wrocławiu trwa łącznie około 75-80 minut. Sam wlew zajmuje godzinę, reszta to kwalifikacja lekarska i krótka obserwacja po zabiegu.</p>
        <h3>Etapy wizyty</h3>
        <ol>
          <li><strong>Kwalifikacja lekarska</strong>: lekarz pyta o choroby wątroby i nerek, przyjmowane leki, ilość i częstość picia alkoholu, ostatnie spożycie oraz objawy. Ogląda wyniki ALT, AST, GGTP, bilirubiny i kreatyniny, jeśli pacjent je ma.</li>
          <li><strong>Przygotowanie wlewu</strong>: roztwór powstaje na miejscu, bezpośrednio przed podaniem, według wybranego wariantu.</li>
          <li><strong>Założenie kaniuli</strong>: cienki wenflon w żyle przedramienia; dyskomfort porównywalny z pobraniem krwi.</li>
          <li><strong>Wlew właściwy</strong>: około 60 minut. Hepa-Merz podajemy w tempie zgodnym z ChPL, bo zbyt szybki wlew wywołuje nudności i wymioty.</li>
          <li><strong>Usunięcie kaniuli i obserwacja</strong>: kontrola samopoczucia, opatrunek i zalecenia dotyczące nawodnienia i diety na kolejne dni.</li>
        </ol>
        <p>Po wlewie nie ma okresu rekonwalescencji. Pacjent może prowadzić samochód i wrócić do pracy. Zalecamy większe nawodnienie przez 24 godziny i powstrzymanie się od alkoholu przynajmniej przez kilka dni, bo bez tego wlew traci sens. Wizytę umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania do wlewu z Hepa-Merz i bezpieczeństwo',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Hepa-Merz jest lekiem i ma przeciwwskazania opisane w Charakterystyce Produktu Leczniczego. Do tego dochodzą ograniczenia związane z objętością płynów, wodorowęglanem i magnezem. Dlatego w Bas Clinic żaden pacjent nie otrzymuje tego wlewu bez kwalifikacji lekarskiej.</p>
        <h3>Przeciwwskazania bezwzględne</h3>
        <ul>
          <li><strong>Ciężka niewydolność nerek</strong>: LOLA zwiększa produkcję mocznika, który muszą wydalić nerki. ChPL Hepa-Merz wymienia ciężką niewydolność nerek jako przeciwwskazanie.</li>
          <li><strong>Nadwrażliwość</strong> na L-ornityny L-asparaginian lub którykolwiek składnik wlewu.</li>
          <li><strong>Stan upojenia alkoholowego lub zespół abstynencyjny</strong>: to sytuacje wymagające innego postępowania medycznego, nie wlewu w gabinecie.</li>
          <li><strong>Alkaloza metaboliczna</strong> przy wariantach z wodorowęglanem sodu.</li>
        </ul>
        <h3>Przeciwwskazania względne, o których decyduje lekarz</h3>
        <ul>
          <li><strong>Rozpoznana choroba wątroby</strong> (marskość, aktywne zapalenie): pacjent trafia najpierw do hepatologa, a wlew rozważamy dopiero po ustaleniu rozpoznania i planu leczenia.</li>
          <li><strong>Niewydolność serca i niekontrolowane nadciśnienie</strong>: dwie butelki płynów w wariantach VIP i Exclusive obciążają krążenie. Wodorowęglan dostarcza też dodatkowego sodu.</li>
          <li><strong>Blok przedsionkowo-komorowy i miastenia</strong> przy wariancie Exclusive z magnezem.</li>
          <li><strong>Ciąża i karmienie piersią</strong>: brak wystarczających danych o bezpieczeństwie.</li>
        </ul>
        <p>Najczęstsze działania niepożądane LOLA to nudności, wymioty i wzdęcia, zwykle związane ze zbyt szybkim wlewem. Możliwy jest ból lub zaczerwienienie w miejscu wkłucia. Gabinet dysponuje zestawem przeciwwstrząsowym, a wlew przebiega pod nadzorem personelu.</p>
      </>
    ),
  },
  {
    title: 'Częstotliwość wlewów i realistyczne oczekiwania',
    tocLabel: 'Częstotliwość i efekty',
    content: (
      <>
        <p>Kroplówka Detox wątroby nie jest terapią, tylko wsparciem na czas obciążenia. Bez usunięcia przyczyny, czyli alkoholu, leków hepatotoksycznych lub diety, efekt jest krótkotrwały. Wytyczne EASL-EASD-EASO z 2024 roku jako podstawę leczenia stłuszczenia wątroby wskazują redukcję masy ciała, zmianę diety, aktywność fizyczną i ograniczenie alkoholu, nie wlewy.</p>
        <h3>Typowy schemat stosowania</h3>
        <ol>
          <li><strong>Wlew doraźny</strong>: pojedynczo, po zakończonej antybiotykoterapii lub po okresie picia, gdy lekarz stwierdzi wskazania.</li>
          <li><strong>Krótka seria</strong>: 2-4 wlewy w odstępach tygodniowych przy utrzymującym się obciążeniu, na przykład w trakcie długiej farmakoterapii.</li>
          <li><strong>Kontrola</strong>: przy wyjściowo podwyższonych enzymach wątrobowych zalecamy powtórzenie ALT, AST i GGTP po 4-6 tygodniach, żeby ocenić, czy zmiana stylu życia i wlew przyniosły mierzalny efekt.</li>
        </ol>
        <h3>Czego się spodziewać</h3>
        <p>Część pacjentów zgłasza po wlewie mniejsze uczucie ciężkości i lepsze samopoczucie, co w dużej mierze wynika z nawodnienia i elektrolitów, a nie z samego leku. Normalizacja enzymów wątrobowych zależy od usunięcia przyczyny, nie od liczby wlewów. Jeśli parametry nie wracają do normy mimo abstynencji i odstawienia leków, potrzebna jest diagnostyka, a nie kolejna kroplówka. Pacjentom w rekonwalescencji po infekcji lekarz częściej proponuje <Link href="/wlewy-witaminowe/kroplowka-na-odpornosc/">kroplówkę na odporność</Link> z witaminą C i elektrolitami.</p>
      </>
    ),
  },
  {
    title: 'Cena kroplówki Detox wątroby we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Kroplówka Detox wątroby w Bas Clinic we Wrocławiu kosztuje od {TIER_PRICE.standard} zł. Wariant Standard to {TIER_PRICE.standard} zł, VIP {TIER_PRICE.vip} zł, a Exclusive {TIER_PRICE.exclusive} zł. Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe, godzinny wlew pod opieką personelu i obserwację po zabiegu.</p>
        <h3>Co zawiera cena</h3>
        <ul>
          <li>kwalifikację lekarską z wywiadem dotyczącym wątroby, leków i alkoholu,</li>
          <li>Hepa-Merz i pozostałe preparaty zgodne z wariantem,</li>
          <li>kaniulę, zestaw do wlewów i opatrunek,</li>
          <li>opiekę personelu przez cały czas trwania wlewu,</li>
          <li>kontrolę samopoczucia i zalecenia przed wyjściem z kliniki.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizyta nie wymaga skierowania. Warto zabrać wyniki ALT, AST, GGTP, bilirubiny i kreatyniny, jeśli są dostępne. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>. Pozostałe kroplówki i warianty znajdziesz na stronie <Link href="/wlewy-witaminowe/">wlewów witaminowych</Link> oraz w <Link href="/cennik/">cenniku</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O wskazaniach i wariancie wlewu decyduje lekarz podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Goh E.T., Stokes C.S., Sidhu S.S., Vilstrup H., Gluud L.L., Morgan M.Y. L-ornithine L-aspartate for prevention and treatment of hepatic encephalopathy in people with cirrhosis. Cochrane Database of Systematic Reviews 2018; 5: CD012410. PMID 29762873.</li>
        <li>Butterworth R.F., Kircheis G., Hilger N., McPhail M.J.W. Efficacy of L-Ornithine L-Aspartate for the Treatment of Hepatic Encephalopathy and Hyperammonemia in Cirrhosis: Systematic Review and Meta-Analysis of Randomized Controlled Trials. Journal of Clinical and Experimental Hepatology 2018; 8(3): 301-313. PMID 30302048.</li>
        <li>Kircheis G. i wsp. Therapeutic efficacy of L-ornithine-L-aspartate infusions in patients with cirrhosis and hepatic encephalopathy: results of a placebo-controlled, double-blind study. Hepatology 1997; 25(6): 1351-1360. PMID 9185752.</li>
        <li>Canbay A., Sowa J.P. L-Ornithine L-Aspartate (LOLA) as a Novel Approach for Therapy of Non-alcoholic Fatty Liver Disease. Drugs 2019; 79(Suppl 1): 39-44. PMID 30706422.</li>
        <li>Vilstrup H. i wsp. Hepatic encephalopathy in chronic liver disease: 2014 Practice Guideline by the American Association for the Study of Liver Diseases and the European Association for the Study of the Liver. Hepatology 2014; 60(2): 715-735. PMID 25042402.</li>
        <li>European Association for the Study of the Liver (EASL), EASD, EASO. Clinical Practice Guidelines on the management of metabolic dysfunction-associated steatotic liver disease (MASLD). Journal of Hepatology 2024; 81(3): 492-542. PMID 38851997.</li>
        <li>Klein A.V., Kiat H. Detox diets for toxin elimination and weight management: a critical review of the evidence. Journal of Human Nutrition and Dietetics 2015; 28(6): 675-686. PMID 25522674.</li>
        <li>Charakterystyka Produktu Leczniczego Hepa-Merz, koncentrat do sporządzania roztworu do infuzji (Merz Pharmaceuticals).</li>
        <li>Charakterystyka Produktu Leczniczego Natrium Bicarbonicum 8,4%, roztwór do wstrzykiwań (URPL).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Jak długo trwa kroplówka Detox wątroby?',
    answer:
      'Wlew trwa około 60 minut. Do tego dochodzi kwalifikacja lekarska przed podaniem (10-15 minut) i krótka obserwacja po zakończeniu, więc na całą wizytę w Bas Clinic warto zarezerwować około 80 minut.',
  },
  {
    question: 'Czy kroplówka Detox wątroby leczy stłuszczenie lub inne choroby wątroby?',
    answer:
      'Nie. Wlew dostarcza L-ornityny L-asparaginian, który obniża stężenie amoniaku, oraz płyny i elektrolity. Stłuszczenie, wirusowe zapalenie wątroby i marskość wymagają diagnostyki lekarskiej, w tym USG wątroby i badań krwi, oraz leczenia przyczyny. Wlew może być co najwyżej uzupełnieniem.',
  },
  {
    question: 'Czy kroplówka na wątrobę pomaga po alkoholu i czy zastępuje odtrucie?',
    answer:
      'Po jednorazowym nadużyciu alkoholu wlew uzupełnia płyny i elektrolity oraz wspiera usuwanie amoniaku, ale nie przyspiesza metabolizmu etanolu. Nie jest leczeniem uzależnienia ani odtruciem alkoholowym. Osobom z problemem alkoholowym proponujemy konsultację w ramach leczenia uzależnień w Bas Clinic.',
  },
  {
    question: 'Czym jest Hepa-Merz w składzie wlewu?',
    answer:
      'Hepa-Merz to lek zawierający L-ornityny L-asparaginian (LOLA). Jest zarejestrowany do leczenia następstw zaburzeń detoksykacyjnej funkcji wątroby z podwyższonym amoniakiem, w tym encefalopatii wątrobowej. Wspiera cykl mocznikowy, w którym wątroba przetwarza amoniak do mocznika.',
  },
  {
    question: 'Ile kosztuje kroplówka Detox wątroby i czy potrzebuję badań?',
    answer: `Kroplówka Detox wątroby kosztuje od ${TIER_PRICE.standard} zł (Standard), VIP ${TIER_PRICE.vip} zł, Exclusive ${TIER_PRICE.exclusive} zł. Wyniki ALT, AST, GGTP, bilirubiny i kreatyniny są pomocne i zalecane, ale nie zawsze wymagane. Przy znacznie podwyższonych enzymach lekarz skieruje najpierw na diagnostykę zamiast podawać wlew.`,
  },
  {
    question: 'Gdzie we Wrocławiu podać kroplówkę Detox wątroby?',
    answer: `Kroplówkę Detox wątroby podajemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function KroplowkaDetoxWatrobyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Kroplówka Detox wątroby Wrocław"
      heroSubtitle="Wlewy witaminowe"
      heroDescription="Wlew dożylny z Hepa-Merz (L-ornityna L-asparaginian) i elektrolitami dla osób z wątrobą obciążoną lekami lub alkoholem. Kwalifikacja lekarska przed każdym podaniem, około 60 minut w Bas Clinic we Wrocławiu."
      slug="wlewy-witaminowe/kroplowka-detox-watroby"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
