import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug, WLEWY_TIERS } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Kroplówka Anti-age Wrocław - skład i cena',
  description:
    'Kroplówka Anti-age we Wrocławiu: wlew z witaminą C i B12 na skórę, włosy i paznokcie. Kwalifikacja lekarska, skład wariantów, przeciwwskazania, cena od 500 zł.',
  path: '/wlewy-witaminowe/kroplowka-anti-age/',
});

const SERVICE = getServiceBySlug('wlewy-witaminowe/kroplowka-anti-age');
const TIER_LABEL = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.label]));
const TIER_PRICE = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.price]));

const BREADCRUMBS = [
  { label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' },
  { label: 'Kroplówka Anti-age' },
];

const EXPERT_INFO = [
  {
    title: 'Kroplówka Anti-age we Wrocławiu - skład i trzy warianty wlewu',
    tocLabel: 'Skład wlewu',
    content: (
      <>
        <p><strong>Kroplówka Anti-age</strong> to wlew dożylny, którego trzon w każdym wariancie stanowią witamina C i witamina B12 podane w soli fizjologicznej. Wlew trwa około godziny i podajemy go w Bas Clinic we Wrocławiu po kwalifikacji lekarskiej. Warianty VIP i Exclusive dokładają magnez, a Exclusive dodatkowo wodorowęglan sodu (Natrium Bicarbonicum).</p>
        <p>Dawka witaminy C i B12 jest taka sama we wszystkich trzech wariantach. Kto przychodzi po składniki wspierające syntezę kolagenu i odnowę naskórka, dostaje je już w Standardzie. Dopłata dotyczy magnezu i buforu, nie większej dawki witamin.</p>
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
        <p>Sól fizjologiczna NaCl 0,9% jest nośnikiem wlewu i uzupełnia płyny. Wszystkie składniki to produkty lecznicze przeznaczone do podania pozajelitowego, nie suplementy diety. Formuła Anti-age różni się od <Link href="/wlewy-witaminowe/witaminowa-bomba/">kroplówki Witaminowa bomba</Link> tym, że zamiast witamin B1, B6 i B12 zawiera tylko B12, a witaminę C ma już w Standardzie.</p>
      </>
    ),
  },
  {
    title: 'Witamina C a synteza kolagenu w skórze',
    tocLabel: 'Witamina C i kolagen',
    content: (
      <>
        <p>Witamina C (kwas askorbinowy) jest kofaktorem hydroksylaz proliny i lizyny, enzymów, bez których fibroblasty nie wytwarzają stabilnych włókien kolagenowych. To jedyny dobrze udokumentowany związek między witaminą C a jędrnością skóry i na nim opiera się skład tego wlewu.</p>
        <h3>Co robi witamina C w skórze właściwej i naskórku</h3>
        <ul>
          <li><strong>Hydroksylacja proliny i lizyny</strong>: bez tego etapu łańcuchy prokolagenu nie tworzą stabilnej potrójnej helisy, a włókna nie łączą się wiązaniami krzyżowymi. Skrajnym obrazem niedoboru jest szkorbut z kruchymi naczyniami i złym gojeniem ran.</li>
          <li><strong>Ochrona antyoksydacyjna</strong>: askorbinian neutralizuje reaktywne formy tlenu w fazie wodnej komórki i regeneruje utlenioną witaminę E w błonach. Przegląd Pullar i wsp. z 2017 roku opisuje wysokie stężenia witaminy C w zdrowym naskórku i ich spadek w skórze narażonej na UV.</li>
          <li><strong>Stymulacja fibroblastów</strong>: w hodowlach komórkowych askorbinian zwiększa ekspresję genów kolagenu typu I i III, ale dane te pochodzą z badań in vitro, nie z prób klinicznych z wlewami.</li>
        </ul>
        <h3>Dlaczego droga dożylna</h3>
        <p>Wchłanianie jelitowe witaminy C ogranicza transporter SVCT1, który nasyca się przy dawkach rzędu kilkuset miligramów. Badanie farmakokinetyczne Padayatty i wsp. z 2004 roku wykazało, że ta sama dawka podana dożylnie daje wielokrotnie wyższe stężenie w osoczu niż doustnie. Nie oznacza to jednak, że wyższe stężenie automatycznie przekłada się na więcej kolagenu w skórze. U osoby bez niedoboru tkanki są już nasycone, a nadmiar witaminy C nerki wydalają z moczem w ciągu kilku godzin.</p>
      </>
    ),
  },
  {
    title: 'Witamina B12 a odnowa naskórka, włosów i paznokci',
    tocLabel: 'Witamina B12',
    content: (
      <>
        <p>Witamina B12 (kobalamina) jest kofaktorem syntazy metioninowej, enzymu warunkującego syntezę DNA. Naskórek, macierz paznokcia i mieszki włosowe należą do najszybciej dzielących się tkanek w organizmie, dlatego niedobór B12 daje objawy widoczne właśnie tam.</p>
        <h3>Objawy skórne niedoboru B12</h3>
        <ul>
          <li><strong>Przebarwienia</strong>: najczęstsza manifestacja skórna, zwykle na dłoniach, stopach i w fałdach skóry, opisana w przeglądzie Brescoll i Daveluy z 2015 roku.</li>
          <li><strong>Zmiany włosów i paznokci</strong>: przedwczesne siwienie, rozlane wypadanie włosów, kruchość i podłużne prążkowanie płytki paznokciowej.</li>
          <li><strong>Zapalenie języka i kącików ust</strong>: gładki, bolesny język to objaw, który lekarz często widzi jeszcze przed wynikiem badania.</li>
        </ul>
        <h3>Kto przyswaja B12 gorzej</h3>
        <p>Wchłanianie kobalaminy z jelita wymaga czynnika wewnętrznego produkowanego w żołądku. Osoby przyjmujące przewlekle inhibitory pompy protonowej lub metforminę, po operacjach żołądka, z zanikowym zapaleniem błony śluzowej żołądka oraz na diecie wegańskiej mają realne ryzyko niedoboru. U nich podanie pozajelitowe omija problematyczny etap. U osoby z prawidłowym poziomem B12 wlew nie przyspieszy wzrostu włosów ani nie wzmocni paznokci, co wprost pokazuje przegląd Almohanna i wsp. z 2019 roku: suplementacja pomaga w łysieniu tylko przy stwierdzonym niedoborze.</p>
      </>
    ),
  },
  {
    title: 'Stres oksydacyjny i starzenie skóry - co wlew może, a czego nie',
    tocLabel: 'Stres oksydacyjny',
    content: (
      <>
        <p>Stres oksydacyjny to nadmiar reaktywnych form tlenu ponad zdolność organizmu do ich neutralizacji. W skórze napędza go przede wszystkim promieniowanie UV, a w mniejszym stopniu dym tytoniowy, pyły zawieszone i ozon. To główny mechanizm starzenia zewnątrzpochodnego (fotostarzenia).</p>
        <h3>Jak wolne rodniki uszkadzają skórę</h3>
        <ul>
          <li><strong>Aktywacja metaloproteinaz (MMP)</strong>: enzymy te rozkładają kolagen i elastynę w skórze właściwej, a UV zwiększa ich ekspresję już po jednej ekspozycji.</li>
          <li><strong>Peroksydacja lipidów</strong>: uszkodzenie błon keratynocytów i bariery hydrolipidowej, czego efektem jest suchość i utrata elastyczności.</li>
          <li><strong>Uszkodzenia DNA mitochondrialnego</strong>: fibroblasty ze zużytymi mitochondriami produkują mniej kolagenu i więcej cytokin zapalnych. Przegląd Rinnerthaler i wsp. z 2015 roku omawia te szlaki szczegółowo.</li>
        </ul>
        <h3>Uczciwie o granicach wlewu</h3>
        <p>Kroplówka Anti-age dostarcza antyoksydant do krwi, ale nie zastępuje fotoprotekcji. Krem z filtrem SPF 30-50 stosowany codziennie robi dla skóry więcej niż jakikolwiek wlew, bo blokuje źródło rodników, a nie tylko część ich skutków. Nie ma też badań klinicznych, które wykazałyby, że dożylna witamina C odmładza skórę u osób bez niedoboru. Mówimy to pacjentom podczas kwalifikacji, żeby oczekiwania odpowiadały temu, co wlew realnie robi: uzupełnia składniki, których w organizmie brakuje.</p>
      </>
    ),
  },
  {
    title: 'Magnez i wodorowęglan sodu w wariantach VIP i Exclusive',
    tocLabel: 'Magnez i bufor',
    content: (
      <>
        <p>Magnez nie wchodzi w skład wariantu Standard. Pojawia się w VIP jako jedyna różnica względem Standardu, a w Exclusive towarzyszy mu wodorowęglan sodu. Oba składniki mają uzasadnienie u konkretnych pacjentów, nie u każdego.</p>
        <h3>Rola magnezu</h3>
        <ul>
          <li><strong>Kofaktor syntezy białek</strong>: polimerazy DNA i RNA oraz rybosomy wymagają jonów magnezu. Fibroblasty i keratynocyty to komórki o intensywnym metabolizmie białkowym.</li>
          <li><strong>Stabilizacja ATP</strong>: cząsteczka ATP jest czynna biologicznie w kompleksie Mg-ATP, więc każdy proces naprawczy w skórze zużywa magnez.</li>
          <li><strong>Objawy niedoboru</strong>: skurcze mięśni, drżenie powiek, drażliwość, zaburzenia snu. Ryzyko rośnie u osób pijących dużo kawy, przewlekle zestresowanych, stosujących diuretyki lub inhibitory pompy protonowej.</li>
        </ul>
        <h3>Wodorowęglan sodu</h3>
        <p>Natrium Bicarbonicum to bufor wyrównujący równowagę kwasowo-zasadową. W wariancie Exclusive ma znaczenie u pacjentów po okresie intensywnego wysiłku, diety wysokobiałkowej lub niedoboru snu, gdy metabolizm produkuje więcej kwaśnych metabolitów. Nie jest składnikiem „odmładzającym” i nie ma badań wiążących go z kondycją skóry. Lekarz proponuje Exclusive tylko wtedy, gdy wywiad wskazuje na taką potrzebę. Pacjentom, którym zależy głównie na magnezie i elektrolitach, częściej pasuje <Link href="/wlewy-witaminowe/kroplowka-na-libido/">kroplówka na libido</Link> na bazie Optilyte.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo jest kroplówka na skórę i włosy - wskazania',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Kroplówka Anti-age nie jest lekiem i nie zastępuje leczenia dermatologicznego. Ma sens u osób, u których pogorszenie kondycji skóry, włosów lub paznokci wiąże się z niedoborem witaminy C, B12 albo magnezu, lub z ograniczonym wchłanianiem jelitowym. O wskazaniach decyduje lekarz.</p>
        <h3>Sytuacje, w których lekarz rozważa ten wlew</h3>
        <ul>
          <li><strong>Potwierdzony niedobór witaminy B12 lub C</strong> w badaniach laboratoryjnych, zwłaszcza z objawami skórnymi.</li>
          <li><strong>Zaburzenia wchłaniania</strong>: choroby zapalne jelit, celiakia, stan po operacjach bariatrycznych, przewlekłe leczenie inhibitorami pompy protonowej lub metforminą.</li>
          <li><strong>Dieta wegańska bez suplementacji B12</strong> z rozlanym wypadaniem włosów lub kruchością paznokci.</li>
          <li><strong>Rekonwalescencja po infekcji lub zabiegu</strong>, gdy zapotrzebowanie na witaminę C rośnie, a apetyt spada.</li>
          <li><strong>Uzupełnienie zabiegów medycyny estetycznej</strong>: pacjenci po <Link href="/medycyna-estetyczna/mezoterapia-iglowa/">mezoterapii igłowej</Link> lub podaniu <Link href="/medycyna-estetyczna/stymulatory-tkankowe/">stymulatorów tkankowych</Link> potrzebują witaminy C do syntezy kolagenu, który te zabiegi pobudzają.</li>
        </ul>
        <p>Zmarszczki, utrata objętości i wiotkość skóry to problemy strukturalne, na które wlew nie działa. Ich leczenie należy do <Link href="/medycyna-estetyczna/">medycyny estetycznej</Link>, a wlew może być co najwyżej tłem metabolicznym dla zabiegu. Osobom zainteresowanym terapiami regeneracyjnymi skóry lekarz omawia także <Link href="/terapie-peptydowe/ghk-cu/">peptyd miedziowy GHK-Cu</Link>, którego droga podania i kwalifikacja wymagają osobnej konsultacji.</p>
      </>
    ),
  },
  {
    title: 'Przebieg kroplówki Anti-age w Bas Clinic we Wrocławiu',
    tocLabel: 'Przebieg wizyty',
    content: (
      <>
        <p>Wizyta w Bas Clinic przy {CLINIC.address.street} we Wrocławiu trwa łącznie około 75-80 minut. Sam wlew zajmuje godzinę, reszta to kwalifikacja lekarska i krótka obserwacja po zabiegu.</p>
        <h3>Etapy wizyty</h3>
        <ol>
          <li><strong>Kwalifikacja lekarska</strong>: lekarz pyta o choroby przewlekłe, leki, suplementy, alergie, choroby nerek i przebyte zabiegi estetyczne. Jeśli pacjent ma wyniki badań, ogląda je.</li>
          <li><strong>Przygotowanie wlewu</strong>: roztwór powstaje na miejscu, bezpośrednio przed podaniem, według wybranego wariantu.</li>
          <li><strong>Założenie kaniuli</strong>: cienki wenflon w żyle przedramienia; dyskomfort porównywalny z pobraniem krwi.</li>
          <li><strong>Wlew właściwy</strong>: około 60 minut w fotelu, pod opieką personelu. Można czytać, pracować na laptopie lub odpocząć.</li>
          <li><strong>Usunięcie kaniuli i obserwacja</strong>: kontrola samopoczucia i opatrunek w miejscu wkłucia.</li>
        </ol>
        <p>Po wlewie nie ma okresu rekonwalescencji. Pacjent może prowadzić samochód i wrócić do pracy. Zalecamy większe nawodnienie przez 24 godziny i unikanie długiej ekspozycji na słońce w dniu zabiegu. Wizytę umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania do kroplówki z witaminą C i bezpieczeństwo',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Wlew dożylny jest procedurą medyczną i nawet przy składnikach uznawanych za bezpieczne istnieją stany, w których <strong>kroplówka Anti-age</strong> jest przeciwwskazana. Dlatego w Bas Clinic żaden pacjent nie otrzymuje wlewu bez kwalifikacji lekarskiej.</p>
        <h3>Przeciwwskazania bezwzględne</h3>
        <ul>
          <li><strong>Niedobór dehydrogenazy glukozo-6-fosforanowej (G6PD)</strong>: wysokie dawki witaminy C podane dożylnie wywołują u tych osób ostrą hemolizę. Opisano to w piśmiennictwie (Rees i wsp., 1993). Osoby pochodzące z basenu Morza Śródziemnego, Afryki i Azji Południowo-Wschodniej mają wyższe ryzyko nosicielstwa i przed serią wlewów warto oznaczyć aktywność enzymu.</li>
          <li><strong>Niewydolność nerek</strong>: metabolity witaminy C (szczawiany) wydalają nerki; przy upośledzonej filtracji rośnie ryzyko kamicy i nefropatii szczawianowej.</li>
          <li><strong>Hemochromatoza</strong>: witamina C nasila wchłanianie i uwalnianie żelaza, co przy jego nadmiarze pogłębia uszkodzenie wątroby i serca.</li>
          <li><strong>Nadwrażliwość</strong> na którykolwiek składnik, w tym na kobalt (składnik cząsteczki B12).</li>
        </ul>
        <h3>Przeciwwskazania względne, o których decyduje lekarz</h3>
        <ul>
          <li><strong>Kamica nerkowa szczawianowa w wywiadzie</strong>.</li>
          <li><strong>Niewydolność serca i niekontrolowane nadciśnienie</strong>: dodatkowa objętość płynów obciąża krążenie.</li>
          <li><strong>Blok przedsionkowo-komorowy i miastenia</strong> przy wariantach z magnezem.</li>
          <li><strong>Alkaloza metaboliczna</strong> przy wariancie Exclusive z wodorowęglanem.</li>
          <li><strong>Ciąża i karmienie piersią</strong>: brak wystarczających danych o bezpieczeństwie dożylnych dawek witamin.</li>
        </ul>
        <p>Możliwe działania niepożądane to ból lub zaczerwienienie w miejscu wkłucia, przejściowe uczucie ciepła, metaliczny posmak, rzadko nudności. Po B12 zdarzają się reakcje trądzikopodobne. Gabinet dysponuje zestawem przeciwwstrząsowym, a wlew przebiega pod nadzorem.</p>
      </>
    ),
  },
  {
    title: 'Częstotliwość wlewów Anti-age i realistyczne oczekiwania',
    tocLabel: 'Częstotliwość i efekty',
    content: (
      <>
        <p>Kroplówka Anti-age nie działa jak zabieg estetyczny: nie wygładza zmarszczek i nie zmienia struktury skóry. Uzupełnia składniki, których poziom był obniżony, więc odczuwalna zmiana zależy od stanu wyjściowego. U osoby bez niedoborów wlew nie da więcej niż sen, dieta, ochrona przeciwsłoneczna i rzucenie palenia.</p>
        <h3>Typowy schemat stosowania</h3>
        <ol>
          <li><strong>Seria wstępna</strong>: zwykle 4 wlewy w odstępach tygodniowych, jeśli lekarz stwierdzi wskazania.</li>
          <li><strong>Wlewy podtrzymujące</strong>: co 2-4 tygodnie, zależnie od wyników i stylu życia.</li>
          <li><strong>Wlew towarzyszący zabiegowi</strong>: pojedynczo, w okresie po mezoterapii lub stymulatorach tkankowych, po ustaleniu z lekarzem prowadzącym zabieg.</li>
        </ol>
        <h3>Czego się spodziewać</h3>
        <p>Przy niedoborze B12 poprawa wypadania włosów i kruchości paznokci wymaga tygodni, bo włos rośnie około centymetra miesięcznie, a paznokieć odrasta w pół roku. Przy niedoborze witaminy C szybciej poprawia się gojenie i kondycja dziąseł niż wygląd skóry. Dowody na korzyści u osób zdrowych są ograniczone i informujemy o tym wprost. Pacjentom w rekonwalescencji z częstymi infekcjami lekarz częściej proponuje <Link href="/wlewy-witaminowe/kroplowka-na-odpornosc/">kroplówkę na odporność</Link> z witaminą C i elektrolitami.</p>
      </>
    ),
  },
  {
    title: 'Cena kroplówki Anti-age we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Kroplówka Anti-age w Bas Clinic we Wrocławiu kosztuje od {TIER_PRICE.standard} zł. Wariant Standard to {TIER_PRICE.standard} zł, VIP {TIER_PRICE.vip} zł, a Exclusive {TIER_PRICE.exclusive} zł. Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe, godzinny wlew pod opieką personelu i obserwację po zabiegu.</p>
        <h3>Co zawiera cena</h3>
        <ul>
          <li>kwalifikację lekarską i wywiad zdrowotny,</li>
          <li>preparaty do podania pozajelitowego zgodne z wariantem,</li>
          <li>kaniulę, zestaw do wlewów i opatrunek,</li>
          <li>opiekę personelu przez cały czas trwania wlewu,</li>
          <li>kontrolę samopoczucia przed wyjściem z kliniki.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizyta nie wymaga skierowania. Warto zabrać wyniki morfologii, kreatyniny i witaminy B12, jeśli są dostępne. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>. Pozostałe kroplówki i warianty znajdziesz na stronie <Link href="/wlewy-witaminowe/">wlewów witaminowych</Link> oraz w <Link href="/cennik/">cenniku</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O wskazaniach i wariancie wlewu decyduje lekarz podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Pullar J.M., Carr A.C., Vissers M.C.M. The Roles of Vitamin C in Skin Health. Nutrients 2017; 9(8): 866. PMID 28805671.</li>
        <li>Padayatty S.J. i wsp. Vitamin C pharmacokinetics: implications for oral and intravenous use. Annals of Internal Medicine 2004; 140(7): 533-537. PMID 15068981.</li>
        <li>Brescoll J., Daveluy S. A review of vitamin B12 in dermatology. American Journal of Clinical Dermatology 2015; 16(1): 27-33. PMID 25559140.</li>
        <li>Almohanna H.M., Ahmed A.A., Tsatalis J.P., Tosti A. The Role of Vitamins and Minerals in Hair Loss: A Review. Dermatology and Therapy 2019; 9(1): 51-70. PMID 30547302.</li>
        <li>Rinnerthaler M. i wsp. Oxidative stress in aging human skin. Biomolecules 2015; 5(2): 545-589. PMID 25906193.</li>
        <li>Rees D.C., Kelsey H., Richards J.D. Acute haemolysis induced by high dose ascorbic acid in glucose-6-phosphate dehydrogenase deficiency. BMJ 1993; 306(6881): 841-842. PMID 8490379.</li>
        <li>Carr A.C., Maggini S. Vitamin C and Immune Function. Nutrients 2017; 9(11): 1211. PMID 29099763.</li>
        <li>Charakterystyka Produktu Leczniczego Vitaminum C, roztwór do wstrzykiwań (URPL).</li>
        <li>Charakterystyka Produktu Leczniczego Natrium Bicarbonicum 8,4%, roztwór do wstrzykiwań (URPL).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Jak długo trwa kroplówka Anti-age?',
    answer:
      'Wlew trwa około 60 minut. Do tego dochodzi kwalifikacja lekarska przed podaniem (10-15 minut) i krótka obserwacja po zakończeniu, więc na całą wizytę w Bas Clinic warto zarezerwować około 80 minut.',
  },
  {
    question: 'Czy kroplówka Anti-age odmładza skórę?',
    answer:
      'Nie w sensie zabiegu estetycznego. Wlew uzupełnia witaminę C i B12, czyli składniki potrzebne do syntezy kolagenu i odnowy naskórka; magnez jest dodatkiem w wariantach VIP i Exclusive. Nie ma badań, które wykazałyby odmłodzenie skóry po dożylnej witaminie C u osób bez niedoboru. Zmarszczki i utratę objętości leczy medycyna estetyczna, a wlew może być jej uzupełnieniem.',
  },
  {
    question: 'Czy kroplówka zastępuje krem z filtrem albo zabiegi dermatologiczne?',
    answer:
      'Nie. Codzienna fotoprotekcja blokuje główne źródło wolnych rodników w skórze i robi dla niej więcej niż jakikolwiek wlew. Kroplówka Anti-age nie zastępuje też leczenia dermatologicznego ani zabiegów medycyny estetycznej.',
  },
  {
    question: 'Jak często powtarzać kroplówkę na skórę i włosy?',
    answer:
      'Częstotliwość ustala lekarz. Przy stwierdzonych wskazaniach stosuje się zwykle serię 4 wlewów w odstępach tygodniowych, potem wlewy podtrzymujące co 2-4 tygodnie. Efekty na włosach i paznokciach wymagają tygodni, bo tkanki te rosną powoli.',
  },
  {
    question: `Ile kosztuje kroplówka Anti-age i czy potrzebuję badań?`,
    answer: `Kroplówka Anti-age kosztuje od ${TIER_PRICE.standard} zł (Standard), VIP ${TIER_PRICE.vip} zł, Exclusive ${TIER_PRICE.exclusive} zł. Wyniki morfologii, kreatyniny i witaminy B12 są pomocne, ale nie zawsze wymagane. Przy planowanej serii wlewów lekarz może zlecić oznaczenie aktywności G6PD, bo niedobór tego enzymu jest przeciwwskazaniem do dożylnej witaminy C.`,
  },
  {
    question: 'Gdzie we Wrocławiu podać kroplówkę Anti-age?',
    answer: `Kroplówkę Anti-age podajemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function KroplowkaAntiAgePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Kroplówka Anti-age Wrocław"
      heroSubtitle="Wlewy witaminowe"
      heroDescription="Wlew dożylny z witaminą C i B12 na skórę, włosy i paznokcie, w trzech wariantach składu. Kwalifikacja lekarska przed każdym podaniem, około 60 minut w Bas Clinic we Wrocławiu."
      slug="wlewy-witaminowe/kroplowka-anti-age"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
