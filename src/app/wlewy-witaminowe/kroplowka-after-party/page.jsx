import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug, WLEWY_TIERS } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Kroplówka na kaca Wrocław - After party, cena',
  description:
    'Kroplówka After party we Wrocławiu: wlew z glukozą i wodorowęglanem sodu po nadmiernym spożyciu alkoholu. Kwalifikacja lekarska, granice, cena od 500 zł.',
  path: '/wlewy-witaminowe/kroplowka-after-party/',
});

const SERVICE = getServiceBySlug('wlewy-witaminowe/kroplowka-after-party');
const TIER_LABEL = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.label]));
const TIER_PRICE = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.price]));

const BREADCRUMBS = [
  { label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' },
  { label: 'Kroplówka After party' },
];

const EXPERT_INFO = [
  {
    title: 'Kroplówka After party we Wrocławiu - skład i warianty wlewu',
    tocLabel: 'Skład wlewu',
    content: (
      <>
        <p><strong>Kroplówka After party</strong> to wlew dożylny podawany po epizodzie nadmiernego spożycia alkoholu, gdy stężenie alkoholu we krwi spadło już do zera, a utrzymują się objawy kaca. Bazą wlewu jest roztwór glukozy (500 ml), do którego lekarz dodaje wodorowęglan sodu (Natrium Bicarbonicum). Wlew trwa około 90 minut i w Bas Clinic we Wrocławiu podajemy go po kwalifikacji lekarskiej.</p>
        <p>Warianty różnią się wyłącznie dodatkami. VIP dokłada drugą butelkę soli fizjologicznej NaCl 250 ml i magnez, Exclusive dodatkowo witaminę C. Glukoza i wodorowęglan sodu są w każdym wariancie.</p>
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
        <p>W tym wlewie nie ma witamin z grupy B, potasu, leków przeciwbólowych ani przeciwwymiotnych. Pacjent, któremu zależy na tiaminie i pozostałych witaminach B, powinien rozważyć <Link href="/wlewy-witaminowe/witaminowa-bomba/">kroplówkę Witaminowa bomba</Link>. Formuła After party jest wąska celowo: odpowiada na utratę płynów, spadek glukozy i zakwaszenie, czyli na te następstwa alkoholu, które da się skorygować dożylnie.</p>
      </>
    ),
  },
  {
    title: 'Co wiadomo o kacu alkoholowym - dowody naukowe',
    tocLabel: 'Co wiadomo o kacu',
    content: (
      <>
        <p>Kac to zespół dolegliwości psychicznych i fizycznych po pojedynczym epizodzie picia, który zaczyna się, gdy stężenie alkoholu we krwi zbliża się do zera. Tak brzmi definicja Alcohol Hangover Research Group (Verster i wsp., 2020). Nie ma metody, która „leczy kaca&quot; w sensie skrócenia go do zera.</p>
        <h3>Co pokazują badania</h3>
        <ul>
          <li><strong>Brak skutecznego leku na kaca</strong>: przegląd systematyczny badań z randomizacją (Pittler i wsp., BMJ 2005) nie znalazł przekonujących dowodów, by jakakolwiek interwencja konwencjonalna lub uzupełniająca zapobiegała kacowi albo go leczyła. Najskuteczniejsza metoda to umiar lub abstynencja.</li>
          <li><strong>Nasilenie kaca nie zależy wprost od odwodnienia</strong>: w przeglądzie Penning i wsp. (2010) markery odwodnienia, stężenia elektrolitów, glukozy i mleczanów nie wykazywały statystycznego związku z ciężkością kaca. Najsilniejszy związek wykazano dla czynników zapalnych (cytokin) i, w części badań, dla acetaldehydu.</li>
          <li><strong>Objawy da się łagodzić wybiórczo</strong>: nawodnienie, glukoza i wyrównanie elektrolitów zmniejszają osłabienie, suchość w ustach, zawroty głowy i drżenie, ale nie usuwają zmęczenia ani spowolnienia, które wynikają z reakcji zapalnej i braku snu.</li>
        </ul>
        <p>Dlatego opisujemy tę kroplówkę jako wsparcie objawowe, a nie terapię. Wlew uzupełnia to, co organizm stracił, i daje ulgę w części dolegliwości. Tempo rozkładu etanolu i acetaldehydu w wątrobie zależy od enzymów, na które kroplówka nie ma wpływu.</p>
      </>
    ),
  },
  {
    title: 'Nawodnienie i glukoza - co uzupełnia baza wlewu',
    tocLabel: 'Nawodnienie i glukoza',
    content: (
      <>
        <p>Alkohol hamuje wydzielanie wazopresyny, hormonu zatrzymującego wodę w nerkach, i przez to zwiększa wydalanie moczu. Efekt jest najwyraźniejszy u osoby dobrze nawodnionej; przy istniejącym odwodnieniu nerki częściowo go kompensują (Hobson i Maughan, 2010). Do utraty płynów dokładają się wymioty, pocenie i pominięte posiłki.</p>
        <h3>Dlaczego bazą jest glukoza, a nie sama sól</h3>
        <ul>
          <li><strong>Objętość</strong>: 500 ml roztworu glukozy uzupełnia płyny z pominięciem przewodu pokarmowego. Ma to znaczenie praktyczne, gdy nudności nie pozwalają pić.</li>
          <li><strong>Substrat energetyczny</strong>: metabolizm etanolu zużywa NAD+ i hamuje glukoneogenezę w wątrobie. U osoby, która piła bez jedzenia, prowadzi to do spadku glukozy we krwi, a objawami są osłabienie, poty, drżenie i trudność w skupieniu. Glukoza podana dożylnie wyrównuje ten deficyt w ciągu minut.</li>
          <li><strong>Hamowanie ketogenezy</strong>: wzrost insuliny po podaniu glukozy ogranicza wytwarzanie ciał ketonowych, czyli jedno ze źródeł zakwaszenia. Glukoza i wodorowęglan sodu pracują więc w tym wlewie razem.</li>
        </ul>
        <p>W wariantach VIP i Exclusive druga butelka NaCl 250 ml zwiększa łączną objętość płynów i uzupełnia sód. Roztwór glukozy jest produktem leczniczym do infuzji, a szybkość podania kontroluje personel, aby uniknąć gwałtownych wahań glikemii. Osobom, u których dominuje samo odwodnienie, bez zakwaszenia, lekarz częściej proponuje <Link href="/wlewy-witaminowe/kroplowka-nawodnienie/">kroplówkę nawadniającą</Link> z płynem wieloelektrolitowym.</p>
      </>
    ),
  },
  {
    title: 'Wodorowęglan sodu i kwasica po alkoholu',
    tocLabel: 'Wodorowęglan sodu',
    content: (
      <>
        <p>Wodorowęglan sodu (Natrium Bicarbonicum) to roztwór do infuzji stosowany w kwasicy metabolicznej. Po alkoholu organizm gromadzi kwasy: mleczany wskutek nadmiaru NADH oraz ciała ketonowe wskutek zahamowanej glukoneogenezy i głodzenia. Wymioty i odwodnienie osłabiają zdolność buforowania. Wodorowęglan wiąże nadmiar jonów wodorowych i wspiera powrót pH do fizjologicznego zakresu.</p>
        <h3>Jak stosujemy wodorowęglan we wlewie</h3>
        <ul>
          <li><strong>Dawkę ustala lekarz</strong> na podstawie wywiadu i badania. Nadmiar wodorowęglanu może wywołać zasadowicę, wzrost stężenia sodu i spadek potasu, dlatego składnik nie jest podawany „standardowo w maksymalnej ilości&quot;.</li>
          <li><strong>Charakterystyka Produktu Leczniczego</strong> wymienia jako przeciwwskazania między innymi zasadowicę metaboliczną i oddechową, hipernatremię, hipokaliemię i ciężką niewydolność nerek. Te stany wykluczamy podczas kwalifikacji.</li>
          <li><strong>Granica zastosowania</strong>: pełnoobjawowa alkoholowa kwasica ketonowa, z bólem brzucha, przyspieszonym oddechem i zaburzeniami świadomości, jest stanem szpitalnym. Wymaga dożylnej glukozy, płynów, tiaminy i monitorowania, a nie wlewu ambulatoryjnego (McGuire i wsp., Emerg Med J 2006).</li>
        </ul>
        <p>Przy typowym kacu zakwaszenie jest niewielkie i częściowo wyrównałoby się samo. Wodorowęglan skraca ten proces i zmniejsza nudności oraz osłabienie związane z zaburzeniem równowagi kwasowo-zasadowej. Nie wpływa na stężenie acetaldehydu ani na tempo trzeźwienia.</p>
      </>
    ),
  },
  {
    title: 'Magnez i witamina C - co dokładają warianty VIP i Exclusive',
    tocLabel: 'Magnez i witamina C',
    content: (
      <>
        <p>Magnez wchodzi do składu od wariantu VIP, witamina C dopiero w Exclusive. Wariant Standard nie zawiera żadnego z nich. VIP i Exclusive zawierają także drugą butelkę NaCl 0,9% 250 ml, a wariant dobiera lekarz podczas kwalifikacji.</p>
        <h3>Magnez (VIP i Exclusive)</h3>
        <ul>
          <li>Alkohol działa ostro jako diuretyk magnezowy: po wypiciu nerki wydalają magnez w zwiększonej ilości, wraz z innymi elektrolitami (Rivlin, J Am Coll Nutr 1994).</li>
          <li>Niedobór magnezu nasila pobudliwość nerwowo-mięśniową, czyli drżenie rąk, skurcze łydek, kołatanie serca i rozdrażnienie. Uzupełnienie dożylne działa w ciągu godzin, doustne wymaga kilku dni.</li>
          <li>Warianty VIP i Exclusive obejmują drugą butelkę NaCl 0,9% 250 ml oraz magnez w ampułce. Osoby z niewydolnością nerek nie otrzymują magnezu dożylnie.</li>
        </ul>
        <h3>Witamina C (Exclusive)</h3>
        <ul>
          <li>Metabolizm acetaldehydu wytwarza reaktywne formy tlenu i zużywa glutation. Kwas askorbinowy jest antyoksydantem rozpuszczalnym w wodzie i uczestniczy w odtwarzaniu zredukowanego glutationu.</li>
          <li>Nie ma badań, które wykazałyby, że witamina C skraca kaca. Traktujemy ją jako uzupełnienie po obciążeniu oksydacyjnym, a nie jako składnik przeciwkacowy.</li>
          <li>Osoby, którym zależy przede wszystkim na witaminie C, znajdą ją już w wariancie Standard <Link href="/wlewy-witaminowe/kroplowka-na-odpornosc/">kroplówki na odporność</Link>.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Dla kogo jest kroplówka After party i czego nie robi',
    tocLabel: 'Wskazania i granice',
    content: (
      <>
        <p>Kroplówka After party jest przeznaczona dla dorosłych po jednorazowym, epizodycznym nadmiernym spożyciu alkoholu, u których objawy kaca utrudniają funkcjonowanie. Lekarz ocenia wskazania podczas kwalifikacji i może odmówić wlewu, jeśli pacjent potrzebuje innej formy pomocy.</p>
        <h3>Typowe wskazania</h3>
        <ul>
          <li>nudności uniemożliwiające picie i jedzenie,</li>
          <li>osłabienie, poty, drżenie rąk i zawroty głowy po nocy bez posiłku,</li>
          <li>suchość w ustach, ból głowy i uczucie odwodnienia, które nie ustępują po płynach doustnych,</li>
          <li>skurcze mięśni i kołatanie serca sugerujące utratę magnezu (warianty VIP i Exclusive).</li>
        </ul>
        <h3>Czego wlew nie robi</h3>
        <ul>
          <li><strong>Nie przyspiesza trzeźwienia.</strong> Etanol rozkładają enzymy wątroby w stałym tempie, około 0,1-0,2 promila na godzinę. Żaden składnik wlewu tego nie zmienia, a lekarz nie wydaje zaświadczeń o trzeźwości.</li>
          <li><strong>Nie leczy uzależnienia od alkoholu.</strong> Jeśli picie powtarza się mimo szkód, a rano pojawia się potrzeba „klina&quot;, problemem nie jest kac, tylko zespół uzależnienia. W Bas Clinic prowadzimy <Link href="/leczenie-uzaleznien/">leczenie uzależnień</Link> pod opieką lekarza.</li>
          <li><strong>Nie chroni wątroby.</strong> Wlew nie zawiera składników hepatoprotekcyjnych. Po dłuższym okresie obciążenia alkoholem lekarz może zaproponować <Link href="/wlewy-witaminowe/kroplowka-detox-watroby/">kroplówkę detox wątroby</Link> z L-asparaginianem L-ornityny, po ocenie prób wątrobowych.</li>
          <li><strong>Nie zastępuje snu, jedzenia i przerwy od alkoholu.</strong> Zmęczenie i spowolnienie po kacu wynikają w dużej mierze z reakcji zapalnej i niedoboru snu, na które kroplówka nie działa.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Kiedy kroplówka nie wystarczy - zespół abstynencyjny i stany pilne',
    tocLabel: 'Stany pilne',
    content: (
      <>
        <p>Część objawów po alkoholu nie jest kacem, tylko początkiem alkoholowego zespołu abstynencyjnego albo innego stanu wymagającego szpitala. Rozpoznanie tej różnicy jest najważniejszym zadaniem kwalifikacji lekarskiej i powodem, dla którego nie podajemy tego wlewu bez badania.</p>
        <h3>Objawy, przy których należy wezwać pomoc (112) lub jechać na SOR</h3>
        <ul>
          <li><strong>Drgawki</strong> po odstawieniu alkoholu, także pojedynczy napad.</li>
          <li><strong>Majaczenie</strong>: splątanie, omamy, dezorientacja co do czasu i miejsca. Majaczenie alkoholowe (delirium tremens) rozwija się zwykle 48-96 godzin po ostatnim kieliszku i nieleczone może prowadzić do zgonu (Schuckit, N Engl J Med 2014).</li>
          <li><strong>Tachykardia z zaburzeniami świadomości</strong>, wysoka gorączka, nasilone drżenie całego ciała i obfite poty.</li>
          <li><strong>Krwawe lub fusowate wymioty, smolisty stolec</strong>: podejrzenie krwawienia z przewodu pokarmowego.</li>
          <li><strong>Silny ból brzucha z przyspieszonym oddechem</strong>: podejrzenie kwasicy ketonowej lub zapalenia trzustki.</li>
          <li><strong>Zaburzenia widzenia po alkoholu niewiadomego pochodzenia</strong>: podejrzenie zatrucia metanolem.</li>
        </ul>
        <p>Zespół abstynencyjny leczy się w warunkach szpitalnych benzodiazepinami, tiaminą i monitorowaniem, a nie kroplówką witaminową. Pacjenta z takimi objawami kierujemy do szpitala, a osobom z rozpoznanym uzależnieniem proponujemy program <Link href="/leczenie-uzaleznien/">leczenia uzależnień</Link> zamiast doraźnych wlewów.</p>
      </>
    ),
  },
  {
    title: 'Przebieg kroplówki After party w Bas Clinic we Wrocławiu',
    tocLabel: 'Przebieg wizyty',
    content: (
      <>
        <p>Wizyta w Bas Clinic przy {CLINIC.address.street} we Wrocławiu trwa łącznie około 2 godzin. Sam wlew zajmuje około 90 minut, reszta to kwalifikacja lekarska i krótka obserwacja po zabiegu. Klinika pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}.</p>
        <h3>Etapy wizyty</h3>
        <ol>
          <li><strong>Kwalifikacja lekarska</strong>: lekarz pyta, kiedy i ile alkoholu wypito, czy pacjent jadł, jakie objawy występują, czy choruje przewlekle i jakie leki przyjmuje. Bada ciśnienie, tętno, nawodnienie i stan świadomości. Pacjent w stanie upojenia nie otrzymuje wlewu; wracamy do tematu, gdy alkohol zostanie zmetabolizowany.</li>
          <li><strong>Wybór wariantu</strong>: przy dominującym odwodnieniu i nudnościach wystarcza Standard, przy drżeniu i skurczach lekarz proponuje VIP z magnezem, Exclusive dokłada witaminę C.</li>
          <li><strong>Przygotowanie wlewu</strong>: roztwór powstaje na miejscu, bezpośrednio przed podaniem, z produktów leczniczych do infuzji.</li>
          <li><strong>Założenie kaniuli</strong>: cienki wenflon w żyle przedramienia, jedyny moment dyskomfortu.</li>
          <li><strong>Wlew właściwy</strong>: około 90 minut w fotelu, pod opieką personelu. Można drzemać lub korzystać z telefonu.</li>
          <li><strong>Obserwacja</strong>: usunięcie kaniuli, kontrola ciśnienia i samopoczucia, zalecenia dotyczące dalszego nawadniania i posiłku.</li>
        </ol>
        <p>Poprawa w zakresie nudności, suchości w ustach i osłabienia pojawia się zwykle w trakcie wlewu lub do godziny po nim. Ból głowy i zmęczenie ustępują wolniej, bo zależą także od snu i reakcji zapalnej.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania, bezpieczeństwo i częstotliwość wlewu',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Wlew dożylny jest procedurą medyczną. Skład After party jest prosty, ale każdy z jego składników ma własne ograniczenia, dlatego w Bas Clinic nikt nie otrzymuje kroplówki bez kwalifikacji lekarskiej.</p>
        <h3>Przeciwwskazania</h3>
        <ul>
          <li><strong>Stan upojenia alkoholowego</strong>: wlew podajemy po wytrzeźwieniu.</li>
          <li><strong>Objawy zespołu abstynencyjnego</strong>: drgawki, majaczenie, tachykardia z zaburzeniami świadomości wymagają szpitala.</li>
          <li><strong>Niewydolność nerek</strong>: upośledzone wydalanie sodu, wodorowęglanów i magnezu.</li>
          <li><strong>Niewydolność serca i niekontrolowane nadciśnienie</strong>: dodatkowa objętość płynów i sód obciążają krążenie.</li>
          <li><strong>Zasadowica, hipernatremia, hipokaliemia</strong>: przeciwwskazania do wodorowęglanu sodu według ChPL.</li>
          <li><strong>Cukrzyca niewyrównana</strong>: baza glukozowa wymaga oceny glikemii i decyzji lekarza.</li>
          <li><strong>Czynne krwawienie z przewodu pokarmowego</strong>, ciąża i karmienie piersią, nadwrażliwość na którykolwiek składnik.</li>
        </ul>
        <h3>Możliwe działania niepożądane</h3>
        <p>Najczęściej ból lub zaczerwienienie w miejscu wkłucia i przejściowe uczucie ciepła. Rzadko nudności przy zbyt szybkim wlewie, co koryguje się spowolnieniem podania. Gabinet ma zestaw przeciwwstrząsowy, a personel jest obecny przez cały czas trwania wlewu.</p>
        <h3>Jak często</h3>
        <p>Kroplówka After party jest wlewem doraźnym, po pojedynczym epizodzie. Nie ma sensu jako terapia cykliczna. Jeżeli potrzeba wlewu pojawia się co tydzień, lekarz porozmawia z pacjentem o wzorcu picia, a nie o kolejnym terminie.</p>
      </>
    ),
  },
  {
    title: 'Cena kroplówki After party we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Kroplówka After party w Bas Clinic we Wrocławiu kosztuje od {TIER_PRICE.standard} zł. Wariant Standard to {TIER_PRICE.standard} zł, VIP {TIER_PRICE.vip} zł, a Exclusive {TIER_PRICE.exclusive} zł. Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe, wlew pod opieką personelu i obserwację po zabiegu.</p>
        <h3>Co zawiera cena</h3>
        <ul>
          <li>kwalifikację lekarską z pomiarem ciśnienia i tętna,</li>
          <li>glukozę, wodorowęglan sodu oraz dodatki zgodne z wariantem,</li>
          <li>kaniulę, zestaw do wlewów i opatrunek,</li>
          <li>opiekę personelu przez około 90 minut wlewu,</li>
          <li>kontrolę samopoczucia przed wyjściem z kliniki.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizyta nie wymaga skierowania. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>. Pozostałe kroplówki i warianty znajdziesz na stronie <Link href="/wlewy-witaminowe/">wlewów witaminowych</Link> oraz w <Link href="/cennik/">cenniku</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O wskazaniach i wariancie wlewu decyduje lekarz podczas kwalifikacji. Przy objawach zespołu abstynencyjnego należy wezwać pomoc medyczną, a nie umawiać kroplówkę.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Pittler M.H., Verster J.C., Ernst E. Interventions for preventing or treating alcohol hangover: systematic review of randomised controlled trials. BMJ 2005; 331(7531): 1515-1518. PMID 16373736.</li>
        <li>Penning R., van Nuland M., Fliervoet L.A., Olivier B., Verster J.C. The pathology of alcohol hangover. Current Drug Abuse Reviews 2010; 3(2): 68-75. PMID 20712596.</li>
        <li>Verster J.C., Penning R. Treatment and prevention of alcohol hangover. Current Drug Abuse Reviews 2010; 3(2): 103-109. PMID 20712594.</li>
        <li>Verster J.C., Scholey A., van de Loo A.J.A.E., Benson S., Stock A.K. Updating the Definition of the Alcohol Hangover. Journal of Clinical Medicine 2020; 9(3): 823. PMID 32197381.</li>
        <li>Hobson R.M., Maughan R.J. Hydration status and the diuretic action of a small dose of alcohol. Alcohol and Alcoholism 2010; 45(4): 366-373. PMID 20497950.</li>
        <li>Rivlin R.S. Magnesium deficiency and alcohol intake: mechanisms, clinical significance and possible relation to cancer development (a review). Journal of the American College of Nutrition 1994; 13(5): 416-423. PMID 7836619.</li>
        <li>McGuire L.C., Cruickshank A.M., Munro P.T. Alcoholic ketoacidosis. Emergency Medicine Journal 2006; 23(6): 417-420. PMID 16714496.</li>
        <li>Schuckit M.A. Recognition and management of withdrawal delirium (delirium tremens). New England Journal of Medicine 2014; 371(22): 2109-2113. PMID 25427113.</li>
        <li>Charakterystyka Produktu Leczniczego Natrium Bicarbonicum 8,4%, roztwór do infuzji (wodorowęglan sodu).</li>
        <li>Charakterystyka Produktu Leczniczego Glucosum, roztwór do infuzji.</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Czy kroplówka After party wytrzeźwia?',
    answer:
      'Nie. Etanol rozkładają enzymy wątroby w stałym tempie i żaden składnik wlewu tego nie przyspiesza. Kroplówka uzupełnia płyny i glukozę oraz buforuje zakwaszenie, co łagodzi część objawów kaca. Lekarz nie wydaje zaświadczeń o trzeźwości, a wlew podajemy dopiero po wytrzeźwieniu.',
  },
  {
    question: 'Kiedy najlepiej przyjść na kroplówkę po alkoholu?',
    answer:
      'Gdy alkohol został już zmetabolizowany, a objawy kaca są odczuwalne, zwykle następnego dnia. Pacjent w stanie upojenia nie otrzymuje wlewu. Jeśli występują drgawki, splątanie, omamy lub kołatanie serca z zaburzeniami świadomości, należy wezwać pomoc medyczną, a nie umawiać kroplówkę.',
  },
  {
    question: 'Ile trwa i ile kosztuje kroplówka After party we Wrocławiu?',
    answer: `Sam wlew trwa około 90 minut, a cała wizyta z kwalifikacją lekarską i obserwacją około 2 godzin. Cena zaczyna się od ${TIER_PRICE.standard} zł za wariant Standard; VIP z magnezem kosztuje ${TIER_PRICE.vip} zł, a Exclusive z magnezem i witaminą C ${TIER_PRICE.exclusive} zł.`,
  },
  {
    question: 'Czy po kroplówce mogę prowadzić samochód?',
    answer:
      'Sam wlew nie wpływa na zdolność prowadzenia pojazdów. Decyduje stężenie alkoholu we krwi, którego kroplówka nie obniża. Jeśli od ostatniego kieliszka minęło zbyt mało czasu, prowadzenie pozostaje zabronione niezależnie od wlewu.',
  },
  {
    question: 'Jak często można korzystać z kroplówki After party?',
    answer:
      'To wlew doraźny po pojedynczym epizodzie nadmiernego picia, nie terapia cykliczna. Jeśli potrzeba kroplówki pojawia się regularnie, lekarz porozmawia o wzorcu picia i w razie potrzeby zaproponuje konsultację w ramach leczenia uzależnień, które prowadzimy w Bas Clinic.',
  },
  {
    question: 'Gdzie we Wrocławiu podać kroplówkę After party?',
    answer: `Kroplówkę After party podajemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function KroplowkaAfterPartyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Kroplówka After party Wrocław"
      heroSubtitle="Wlewy witaminowe"
      heroDescription="Wlew dożylny z glukozą i wodorowęglanem sodu, w VIP i Exclusive także z magnezem, a w Exclusive dodatkowo z witaminą C, podawany po epizodzie nadmiernego spożycia alkoholu. Kwalifikacja lekarska, około 90 minut w Bas Clinic we Wrocławiu."
      slug="wlewy-witaminowe/kroplowka-after-party"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
