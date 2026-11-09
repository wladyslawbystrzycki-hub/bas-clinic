import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug, WLEWY_TIERS } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Kroplówka nawadniająca Wrocław - skład i cena',
  description:
    'Kroplówka nawadniająca we Wrocławiu: nawodnienie dożylne płynem Optilyte po wysiłku, upale i gorączce. Kwalifikacja lekarska, przeciwwskazania, cena od 500 zł.',
  path: '/wlewy-witaminowe/kroplowka-nawodnienie/',
});

const SERVICE = getServiceBySlug('wlewy-witaminowe/kroplowka-nawodnienie');
const TIER_LABEL = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.label]));
const TIER_PRICE = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.price]));

const BREADCRUMBS = [
  { label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' },
  { label: 'Kroplówka nawadniająca' },
];

const EXPERT_INFO = [
  {
    title: 'Kroplówka nawadniająca we Wrocławiu - skład i warianty wlewu',
    tocLabel: 'Skład wlewu',
    content: (
      <>
        <p><strong>Kroplówka nawadniająca</strong> to dożylny wlew zbilansowanego płynu wieloelektrolitowego Optilyte, który uzupełnia wodę i jony bezpośrednio w krwiobiegu, z pominięciem przewodu pokarmowego. Wlew trwa około 60 minut i podajemy go w Bas Clinic we Wrocławiu po kwalifikacji lekarskiej.</p>
        <p>Wariant Standard to sam Optilyte 500 ml, czyli nawodnienie bez dodatków. VIP dokłada witaminę B12 i magnez. Exclusive zamiast samej B12 zawiera kompleks witamin B (B1, B6, B12) z magnezem oraz drugą butelkę soli fizjologicznej z preparatem TAD 600 (glutation).</p>
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
        <p>Skład każdego wariantu jest stały. Lekarz podczas kwalifikacji rozstrzyga, który wariant jest zasadny, nie układa receptury pod pacjenta. Osobie, która straciła płyny po treningu lub w upale i nie ma niedoborów, zwykle wystarcza Standard.</p>
      </>
    ),
  },
  {
    title: 'Optilyte - zbilansowany płyn wieloelektrolitowy jako baza wlewu',
    tocLabel: 'Optilyte',
    content: (
      <>
        <p>Optilyte (Fresenius Kabi) to izotoniczny roztwór do infuzji o składzie jonowym zbliżonym do osocza. Zgodnie z Charakterystyką Produktu Leczniczego 1000 ml zawiera 141 mmol sodu, 5 mmol potasu, 2 mmol wapnia, 1 mmol magnezu, 109 mmol chlorków, 34 mmol octanów i 3 mmol cytrynianów; osmolarność wynosi 295 mOsm/l.</p>
        <h3>Dlaczego płyn zbilansowany, a nie sama sól fizjologiczna</h3>
        <ul>
          <li><strong>Chlorki</strong>: sól fizjologiczna 0,9% zawiera 154 mmol/l chlorków, znacznie więcej niż osocze. Optilyte ma 109 mmol/l, więc nie zakwasza organizmu nadmiarem chloru.</li>
          <li><strong>Octany i cytryniany</strong>: metabolizowane w tkankach do wodorowęglanów, wyrównują lekką kwasicę, która towarzyszy odwodnieniu i wysiłkowi.</li>
          <li><strong>Potas, wapń, magnez</strong>: uzupełniają jony tracone z potem i w biegunce, których sól fizjologiczna nie zawiera wcale.</li>
        </ul>
        <p>Badania porównujące płyny zbilansowane z solą fizjologiczną pochodzą z oddziałów intensywnej terapii; w badaniu SMART (Semler i wsp., 2018) płyny zbilansowane wiązały się z mniejszą liczbą powikłań nerkowych u chorych krytycznie. To inna populacja niż pacjent po maratonie, ale zasada jest ta sama: skład bliższy osoczu obciąża organizm mniej niż roztwór samego chlorku sodu.</p>
      </>
    ),
  },
  {
    title: 'Nawodnienie dożylne a picie wody - kiedy droga dożylna ma sens',
    tocLabel: 'Dożylnie czy doustnie',
    content: (
      <>
        <p>U większości osób z łagodnym odwodnieniem wystarczy picie wody lub doustnego płynu nawadniającego z elektrolitami. Wlew dożylny ma przewagę wtedy, gdy jelita nie wchłaniają płynów wystarczająco szybko albo pacjent nie jest w stanie pić.</p>
        <h3>Jak wchłania się wypita woda</h3>
        <p>Woda musi przejść przez żołądek i zostać wchłonięta w jelicie cienkim. Żołądek opróżnia się w tempie około 1 litra na godzinę, a przy nudnościach, po alkoholu, w upale i po intensywnym wysiłku to tempo spada. Przegląd Popkina i wsp. (2010) opisuje, jak odwodnienie rzędu 1-2% masy ciała pogarsza koncentrację, nastrój i tolerancję wysiłku, zanim pojawi się wyraźne pragnienie.</p>
        <h3>Kiedy droga dożylna ma znaczenie</h3>
        <ul>
          <li><strong>Nudności utrudniające picie</strong>, na przykład po infekcji żołądkowo-jelitowej lub po alkoholu.</li>
          <li><strong>Duża utrata płynów w krótkim czasie</strong>: długi trening w upale, gorączka przez kilka dni.</li>
          <li><strong>Potrzeba szybkiego uzupełnienia elektrolitów</strong>, gdy sama woda rozcieńcza sód i nasila osłabienie.</li>
        </ul>
        <p>Wlew nie zastępuje codziennego picia wody. Zgodnie z opinią EFSA (2010) dorosła kobieta potrzebuje około 2 litrów, a mężczyzna 2,5 litra wody dziennie ze wszystkich źródeł, i tej ilości żadna kroplówka nie zastąpi.</p>
      </>
    ),
  },
  {
    title: 'Odwodnienie - objawy, stopnie i kiedy potrzebny jest szpital',
    tocLabel: 'Objawy odwodnienia',
    content: (
      <>
        <p>Odwodnienie to utrata wody przekraczająca jej podaż. Cheuvront i Kenefick (2014) opisują, że już ubytek 2% masy ciała mierzalnie obniża wydolność, a powyżej 3-4% pojawiają się bóle głowy, zawroty i przyspieszona akcja serca.</p>
        <h3>Objawy, które lekarz ocenia podczas kwalifikacji</h3>
        <ul>
          <li><strong>Łagodne</strong>: pragnienie, suchość w ustach, ciemny mocz, zmęczenie, ból głowy.</li>
          <li><strong>Umiarkowane</strong>: rzadkie oddawanie moczu, zawroty głowy przy wstawaniu, przyspieszone tętno, obniżone ciśnienie, skurcze mięśni.</li>
          <li><strong>Ciężkie</strong>: splątanie, senność, brak moczu przez wiele godzin, bardzo szybkie tętno, zapadnięte oczy.</li>
        </ul>
        <h3>Kiedy wlew w gabinecie to za mało</h3>
        <p>Ciężkie odwodnienie, wymioty z zaburzeniami świadomości, odwodnienie u niemowląt i małych dzieci oraz odwodnienie w przebiegu cukrzycy z bardzo wysoką glikemią wymagają leczenia szpitalnego: monitorowania jonogramu, glikemii i funkcji nerek oraz podawania płynów w większych objętościach. W takich sytuacjach nie kwalifikujemy do wlewu, tylko kierujemy pacjenta na SOR lub wzywamy pomoc. Kroplówka nawadniająca w Bas Clinic jest przeznaczona dla dorosłych z łagodnym i umiarkowanym odwodnieniem.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo jest kroplówka nawadniająca - wskazania',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Z nawodnienia dożylnego korzystają dorośli, którzy w krótkim czasie stracili dużo płynów lub mają trudność z piciem. Wlew nie leczy przyczyny odwodnienia; o zasadności decyduje lekarz podczas kwalifikacji.</p>
        <h3>Najczęstsze sytuacje</h3>
        <ul>
          <li><strong>Po intensywnym wysiłku</strong>: zgodnie ze stanowiskiem American College of Sports Medicine (Sawka i wsp., 2007) tempo pocenia podczas wysiłku w upale sięga 1-2 litrów na godzinę, a wraz z potem ubywa sodu. Osobom regularnie trenującym lekarz często proponuje <Link href="/wlewy-witaminowe/kroplowka-sport-i-regeneracja/">kroplówkę Sport i regeneracja</Link>.</li>
          <li><strong>Po dniu w upale</strong>: praca fizyczna lub długi pobyt na słońcu z obfitym poceniem.</li>
          <li><strong>Po infekcji z gorączką</strong>: każdy stopień powyżej 37 zwiększa utratę wody przez skórę i oddech, a osłabienie ogranicza picie.</li>
          <li><strong>Po alkoholu</strong>: etanol hamuje wazopresynę i nasila diurezę; na tę sytuację przygotowaliśmy <Link href="/wlewy-witaminowe/kroplowka-after-party/">kroplówkę After party</Link>.</li>
          <li><strong>Po podróży lub nieprzespanej nocy</strong>: suche powietrze w samolocie i długie godziny bez picia.</li>
        </ul>
        <p>Jeśli dominuje przemęczenie i spadek energii, a nie utrata płynów, lekarz może zaproponować <Link href="/wlewy-witaminowe/kroplowka-energetyczna/">kroplówkę energetyczną</Link> z magnezem i witaminami B.</p>
      </>
    ),
  },
  {
    title: 'Witamina B12, kompleks B, magnez i TAD 600 w wariantach VIP i Exclusive',
    tocLabel: 'Dodatki w VIP i Exclusive',
    content: (
      <>
        <p>Dodatki w wyższych wariantach nie zwiększają samego nawodnienia. Mają sens u pacjentów, u których utrata płynów nakłada się na niedobór magnezu lub witamin z grupy B, na przykład po dłuższej infekcji, przy nieregularnej diecie albo po alkoholu.</p>
        <h3>Co robi każdy z dodatków</h3>
        <ul>
          <li><strong>Magnez</strong> (VIP i Exclusive): tracony z potem i w biegunce; jego niedobór daje skurcze mięśni i kołatania serca, które pacjenci często mylą z samym odwodnieniem.</li>
          <li><strong>Witamina B12</strong> (VIP) i <strong>kompleks B1, B6, B12</strong> (Exclusive): uczestniczą w metabolizmie energetycznym i pracy układu nerwowego. Alkohol i infekcje zwiększają ich zużycie.</li>
          <li><strong>TAD 600</strong> (Exclusive): produkt leczniczy z 600 mg glutationu, głównego wewnątrzkomórkowego antyoksydanta, podawany w drugiej butelce soli fizjologicznej. Wydłuża wizytę o czas drugiego wlewu.</li>
        </ul>
        <p>Dowody na korzyść z dodawania witamin do wlewu nawadniającego u osób bez niedoborów są ograniczone. Jeśli pacjent potrzebuje głównie płynów, lekarz zaproponuje Standard. Osobom z ogólnymi niedoborami witamin bardziej odpowiada <Link href="/wlewy-witaminowe/witaminowa-bomba/">kroplówka Witaminowa bomba</Link>.</p>
      </>
    ),
  },
  {
    title: 'Przebieg kroplówki nawadniającej w Bas Clinic we Wrocławiu',
    tocLabel: 'Przebieg wizyty',
    content: (
      <>
        <p>Wizyta w Bas Clinic przy {CLINIC.address.street} we Wrocławiu trwa łącznie około 75-80 minut. Sam wlew zajmuje około godziny, reszta to kwalifikacja lekarska i krótka obserwacja po zabiegu. W wariancie Exclusive druga butelka wydłuża wizytę.</p>
        <h3>Etapy wizyty</h3>
        <ol>
          <li><strong>Kwalifikacja lekarska</strong>: wywiad o chorobach nerek, serca, nadciśnieniu, przyjmowanych lekach (zwłaszcza moczopędnych) i alergiach. Lekarz ocenia stopień odwodnienia: tętno, ciśnienie, śluzówki, ilość oddawanego moczu.</li>
          <li><strong>Wybór wariantu</strong>: lekarz wskazuje jeden z trzech wariantów o stałym składzie i ustala tempo podawania.</li>
          <li><strong>Założenie kaniuli</strong>: cienki wenflon w żyle przedramienia; dyskomfort porównywalny z pobraniem krwi.</li>
          <li><strong>Wlew właściwy</strong>: 500 ml Optilyte przez około 60 minut w wygodnym fotelu. Można czytać lub pracować na laptopie.</li>
          <li><strong>Usunięcie kaniuli i obserwacja</strong>: kontrola samopoczucia i ciśnienia, opatrunek w miejscu wkłucia.</li>
        </ol>
        <p>Po wlewie nie ma okresu rekonwalescencji. Pacjent może prowadzić samochód i wrócić do codziennych zajęć. Wizytę umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i bezpieczeństwo nawodnienia dożylnego',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Podanie 500 ml płynu dożylnie w godzinę jest bezpieczne u zdrowej osoby dorosłej, ale u pacjenta z niewydolnym sercem lub nerkami ta sama objętość może wywołać przeciążenie. Dlatego w Bas Clinic żaden pacjent nie otrzymuje wlewu bez kwalifikacji lekarskiej.</p>
        <h3>Przeciwwskazania bezwzględne</h3>
        <ul>
          <li><strong>Niewydolność serca</strong>: ryzyko przeciążenia objętościowego, obrzęku płuc i nasilenia duszności.</li>
          <li><strong>Niewydolność nerek</strong>: upośledzone wydalanie wody, potasu i magnezu.</li>
          <li><strong>Przewodnienie i obrzęki o niewyjaśnionej przyczynie</strong>: dodatkowy płyn pogłębia zaburzenie.</li>
          <li><strong>Hiperkaliemia, hiperkalcemia, hipermagnezemia</strong>: Optilyte zawiera te jony, a ich nadmiar zaburza rytm serca.</li>
          <li><strong>Nadwrażliwość</strong> na którykolwiek składnik wlewu.</li>
        </ul>
        <h3>Przeciwwskazania względne, o których decyduje lekarz</h3>
        <ul>
          <li><strong>Niekontrolowane nadciśnienie tętnicze</strong>: zwiększenie objętości krwi krążącej podnosi ciśnienie.</li>
          <li><strong>Leczenie ceftriaksonem</strong>: antybiotyk ten wytrąca się z wapniem zawartym w Optilyte; wlewu nie łączymy z tym lekiem.</li>
          <li><strong>Ciężka hiponatremia lub hipernatremia</strong>: wymagają korekty w warunkach szpitalnych, pod kontrolą jonogramu.</li>
          <li><strong>Ciąża i karmienie piersią</strong>: Optilyte sam w sobie nie jest przeciwwskazany, ale dodatki w VIP i Exclusive wymagają indywidualnej decyzji.</li>
        </ul>
        <p>Możliwe działania niepożądane to ból lub zaczerwienienie w miejscu wkłucia i uczucie chłodu wzdłuż żyły. Objawy przeciążenia płynami (duszność, obrzęki) są wskazaniem do natychmiastowego przerwania wlewu. Wlew przebiega pod nadzorem personelu, a gabinet dysponuje zestawem przeciwwstrząsowym.</p>
      </>
    ),
  },
  {
    title: 'Jak często stosować kroplówkę nawadniającą i czego się spodziewać',
    tocLabel: 'Częstotliwość i efekty',
    content: (
      <>
        <p>Kroplówka nawadniająca jest zabiegiem doraźnym. Stosuje się ją w odpowiedzi na konkretną utratę płynów, a nie jako stały element tygodnia. Nie ma badań uzasadniających regularne wlewy nawadniające u zdrowych osób, które mogą pić.</p>
        <h3>Schematy stosowania</h3>
        <ol>
          <li><strong>Pojedynczy wlew</strong>: po zawodach, upale, infekcji z gorączką lub po alkoholu. Najczęstszy scenariusz w Bas Clinic.</li>
          <li><strong>Dwa wlewy w odstępie kilku dni</strong>: przy przedłużającej się rekonwalescencji, jeśli lekarz potwierdzi wskazania.</li>
        </ol>
        <h3>Czego się spodziewać</h3>
        <p>Pacjenci zgłaszają zwykle ustąpienie pragnienia, suchości w ustach i bólu głowy jeszcze w trakcie wlewu, a poprawę samopoczucia w ciągu kilku godzin. Efekt zależy od stopnia odwodnienia: u osoby, która nie była odwodniona, wlew nie poprawi samopoczucia ponad to, co daje szklanka wody i odpoczynek.</p>
        <p>Nawracające odwodnienie bez wyraźnej przyczyny wymaga diagnostyki, nie kolejnych kroplówek. Może wskazywać na cukrzycę, nadczynność tarczycy, choroby nerek lub działanie leków moczopędnych. Lekarz podczas kwalifikacji powie wprost, jeśli zamiast wlewu potrzebne są badania. Pełną listę kroplówek znajdziesz na stronie <Link href="/wlewy-witaminowe/">wlewów witaminowych</Link>, a w sezonie infekcyjnym warto też przeczytać o <Link href="/wlewy-witaminowe/kroplowka-na-odpornosc/">kroplówce na odporność</Link>.</p>
      </>
    ),
  },
  {
    title: 'Cena kroplówki nawadniającej we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Kroplówka nawadniająca w Bas Clinic we Wrocławiu kosztuje od {TIER_PRICE.standard} zł. Wariant Standard z samym Optilyte to {TIER_PRICE.standard} zł, VIP {TIER_PRICE.vip} zł, a Exclusive z kompleksem B i TAD 600 {TIER_PRICE.exclusive} zł. Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe, wlew pod opieką personelu i obserwację po zabiegu.</p>
        <h3>Co zawiera cena</h3>
        <ul>
          <li>kwalifikację lekarską z oceną stopnia odwodnienia,</li>
          <li>Optilyte 500 ml oraz dodatki zgodne z wariantem,</li>
          <li>kaniulę, zestaw do wlewów i opatrunek,</li>
          <li>opiekę personelu przez cały czas trwania wlewu,</li>
          <li>kontrolę samopoczucia i ciśnienia przed wyjściem z kliniki.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizyta nie wymaga skierowania. Jeśli masz aktualny jonogram i kreatyninę, zabierz wyniki ze sobą. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>. Ceny wszystkich wlewów zestawia <Link href="/cennik/">cennik</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O wskazaniach i wariancie wlewu decyduje lekarz podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Charakterystyka Produktu Leczniczego Optilyte, roztwór do infuzji (Fresenius Kabi Polska). Rejestr Produktów Leczniczych, e-zdrowie.gov.pl.</li>
        <li>Popkin B.M., D&apos;Anci K.E., Rosenberg I.H. Water, hydration, and health. Nutrition Reviews 2010; 68(8): 439-458. PMID 20646222.</li>
        <li>Cheuvront S.N., Kenefick R.W. Dehydration: physiology, assessment, and performance effects. Comprehensive Physiology 2014; 4(1): 257-285. PMID 24692140.</li>
        <li>Sawka M.N. i wsp. American College of Sports Medicine position stand. Exercise and fluid replacement. Medicine and Science in Sports and Exercise 2007; 39(2): 377-390. PMID 17277604.</li>
        <li>Semler M.W. i wsp. Balanced Crystalloids versus Saline in Critically Ill Adults. New England Journal of Medicine 2018; 378(9): 829-839. PMID 29485925.</li>
        <li>Myburgh J.A., Mythen M.G. Resuscitation fluids. New England Journal of Medicine 2013; 369(13): 1243-1251. PMID 24066745.</li>
        <li>EFSA NDA Panel. Scientific Opinion on Dietary Reference Values for water. EFSA Journal 2010; 8(3): 1459.</li>
        <li>Charakterystyka Produktu Leczniczego TAD 600, glutation 600 mg, proszek i rozpuszczalnik do sporządzania roztworu do wstrzykiwań (Biomedica Foscama).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Jak długo trwa kroplówka nawadniająca?',
    answer:
      'Sam wlew 500 ml Optilyte trwa około 60 minut. Do tego dochodzi kwalifikacja lekarska (10-15 minut) i krótka obserwacja, więc na całą wizytę w Bas Clinic warto zarezerwować około 80 minut. Wariant Exclusive z drugą butelką trwa dłużej.',
  },
  {
    question: 'Czym kroplówka nawadniająca różni się od picia wody?',
    answer:
      'Wypita woda musi zostać wchłonięta w jelitach, co przy nudnościach, po alkoholu lub w upale bywa wolne. Wlew podaje płyn i elektrolity bezpośrednio do krwi. U osoby, która może normalnie pić i jest tylko lekko odwodniona, woda lub doustny płyn nawadniający zwykle wystarczą.',
  },
  {
    question: 'Czy nawodnienie dożylne jest bezpieczne?',
    answer:
      'U zdrowej osoby dorosłej po kwalifikacji lekarskiej tak. Wlewu nie podajemy przy niewydolności serca i nerek, obrzękach oraz niekontrolowanym nadciśnieniu, bo dodatkowa objętość płynu może wywołać przeciążenie. Wlew przebiega pod nadzorem personelu medycznego.',
  },
  {
    question: 'Kiedy zamiast kroplówki w gabinecie potrzebny jest szpital?',
    answer:
      'Przy ciężkim odwodnieniu z sennością lub splątaniem, przy uporczywych wymiotach z zaburzeniami świadomości, przy odwodnieniu u niemowląt i małych dzieci oraz przy bardzo wysokiej glikemii u osoby z cukrzycą. W takich sytuacjach lekarz kieruje na SOR, a nie kwalifikuje do wlewu.',
  },
  {
    question: 'Ile kosztuje kroplówka nawadniająca we Wrocławiu?',
    answer: `Kroplówka nawadniająca kosztuje od ${TIER_PRICE.standard} zł w wariancie Standard (sam Optilyte). VIP z witaminą B12 i magnezem to ${TIER_PRICE.vip} zł, a Exclusive z kompleksem witamin B, magnezem i TAD 600 ${TIER_PRICE.exclusive} zł. Cena obejmuje kwalifikację lekarską i opiekę podczas wlewu.`,
  },
  {
    question: 'Gdzie we Wrocławiu podać kroplówkę nawadniającą?',
    answer: `Kroplówkę nawadniającą podajemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function KroplowkaNawodnieniePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Kroplówka nawadniająca Wrocław"
      heroSubtitle="Wlewy witaminowe"
      heroDescription="Nawodnienie dożylne zbilansowanym płynem wieloelektrolitowym Optilyte po wysiłku, upale i infekcji z gorączką. Kwalifikacja lekarska przed każdym podaniem, około 60 minut w Bas Clinic we Wrocławiu."
      slug="wlewy-witaminowe/kroplowka-nawodnienie"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
