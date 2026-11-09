import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug, WLEWY_TIERS } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Kroplówka na zmęczenie i stres Wrocław - cena',
  description:
    'Kroplówka na zmęczenie i stres we Wrocławiu: magnez, glutation TAD 600 i glukoza we wlewie dożylnym. Kwalifikacja lekarska, przeciwwskazania, cena od 500 zł.',
  path: '/wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres/',
});

const SERVICE = getServiceBySlug('wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres');
const TIER_LABEL = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.label]));
const TIER_PRICE = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.price]));

const BREADCRUMBS = [
  { label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' },
  { label: 'Kroplówka na zmęczenie i stres' },
];

const EXPERT_INFO = [
  {
    title: 'Kroplówka na zmęczenie i stres we Wrocławiu - skład w trzech wariantach',
    tocLabel: 'Skład wlewu',
    content: (
      <>
        <p><strong>Kroplówka na zmęczenie i stres</strong> to wlew dożylny na bazie płynu wieloelektrolitowego Optilyte z magnezem, dostępny w Bas Clinic we Wrocławiu w trzech wariantach. Standard zawiera dodatkowo witaminę B12, VIP zastępuje ją glutationem (TAD 600) i glukozą 250 ml, a Exclusive rozszerza skład VIP o NaCl 0,9% 250 ml oraz witaminę C. Wlew trwa około 90 minut i poprzedza go kwalifikacja lekarska.</p>
        <p>Warianty nie sumują się. VIP nie jest Standardem z dodatkami: witamina B12 ustępuje w nim miejsca glutationowi i glukozie. Pacjent, któremu zależy właśnie na witaminie B12, powinien to wiedzieć przed wyborem.</p>
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
        <p>Optilyte to zbilansowany roztwór elektrolitów (sód, potas, wapń, magnez, chlorki, octany i cytryniany) o składzie jonowym zbliżonym do osocza. Jest nośnikiem wlewu i uzupełnia płyny. Magnez podajemy w preparacie do infuzji, a warianty VIP i Exclusive obejmują także TAD 600 (glutation) w ampułce oraz glukozę 250 ml. Wszystkie składniki to produkty lecznicze, nie suplementy diety.</p>
      </>
    ),
  },
  {
    title: 'Stres a niedobór magnezu i stres oksydacyjny - mechanizm błędnego koła',
    tocLabel: 'Mechanizm stresu',
    content: (
      <>
        <p>Przewlekły stres to mierzalna kaskada hormonalna, nie tylko odczucie. Podwyższony kortyzol zwiększa wydalanie magnezu z moczem, a niedobór magnezu nasila odpowiedź stresową. Tę zależność Pickering i wsp. opisali w 2020 roku jako błędne koło magnezu i stresu.</p>
        <h3>Co dzieje się w organizmie pod długotrwałym obciążeniem</h3>
        <ul>
          <li><strong>Aktywacja osi podwzgórze-przysadka-nadnercza</strong>: podwzgórze uwalnia CRH, przysadka ACTH, a nadnercza kortyzol. W stresie ostrym to reakcja ochronna, w przewlekłym obciąża metabolizm.</li>
          <li><strong>Utrata magnezu</strong>: kortyzol i katecholaminy zwiększają jego wydalanie przez nerki, a niski poziom magnezu podnosi pobudliwość układu nerwowego.</li>
          <li><strong>Stres oksydacyjny</strong>: nadmiar kortyzolu zwiększa produkcję wolnych rodników, do których neutralizacji organizm zużywa glutation.</li>
          <li><strong>Większe zapotrzebowanie mózgu na glukozę</strong> przy jednoczesnych wahaniach glikemii wywołanych kortyzolem.</li>
          <li><strong>Zaburzenia elektrolitowe</strong>: kortyzol wpływa na aldosteron i gospodarkę sodowo-potasową, co daje zmęczenie i wahania ciśnienia.</li>
        </ul>
        <p>Skład wlewu odpowiada tym deficytom: elektrolity, magnez, a w wyższych wariantach glutation i glukoza. Nie znaczy to, że kroplówka usuwa przyczynę stresu. Uzupełnia zasoby, które stres zużywa, i na tym jej rola się kończy.</p>
      </>
    ),
  },
  {
    title: 'Magnez dożylnie przy przewlekłym zmęczeniu i napięciu mięśni',
    tocLabel: 'Rola magnezu',
    content: (
      <>
        <p>Magnez jest kofaktorem kilkuset reakcji enzymatycznych, w tym wszystkich, w których bierze udział ATP. Występuje w każdym wariancie kroplówki na zmęczenie i stres i to on odpowiada za rozluźnienie mięśni odczuwane pod koniec wlewu.</p>
        <h3>Funkcje magnezu przy przewlekłym stresie</h3>
        <ul>
          <li><strong>Hamowanie odpowiedzi stresowej</strong>: magnez moduluje receptory NMDA i ogranicza nadmierną aktywację osi stresu.</li>
          <li><strong>Neuroprzekaźniki</strong>: uczestniczy w syntezie serotoniny, GABA i melatoniny, które wpływają na nastrój i sen.</li>
          <li><strong>Energia komórkowa</strong>: bez magnezu ATP nie jest biologicznie aktywne, więc niedobór daje zmęczenie nawet przy prawidłowej glikemii.</li>
          <li><strong>Mięśnie</strong>: jako antagonista wapnia rozluźnia włókna mięśniowe; niedobór objawia się napięciem karku, skurczami łydek i bruksizmem.</li>
        </ul>
        <h3>Dożylnie czy doustnie</h3>
        <p>Wchłanianie doustne magnezu jest niepełne i zależy od soli oraz wysycenia organizmu. Podanie dożylne omija jelito, ale wymaga wolnego tempa: zbyt szybki wlew daje uczucie gorąca i spadek ciśnienia, dlatego kroplówka trwa 90 minut. Przegląd systematyczny Boyle i wsp. z 2017 roku wskazuje na korzystny wpływ magnezu na subiektywny lęk u osób podatnych, zaznacza jednak niską jakość dostępnych badań. Informujemy o tym uczciwie podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'TAD 600 (glutation) w wariantach VIP i Exclusive',
    tocLabel: 'Glutation TAD 600',
    content: (
      <>
        <p>TAD 600 to produkt leczniczy zawierający 600 mg glutationu w postaci soli sodowej do podania pozajelitowego. Glutation, tripeptyd z glicyny, cysteiny i kwasu glutaminowego, jest głównym antyoksydantem wewnątrzkomórkowym. W kroplówce na zmęczenie i stres wchodzi na miejsce witaminy B12, więc pojawia się dopiero w VIP i Exclusive.</p>
        <h3>Rola glutationu w organizmie</h3>
        <ul>
          <li><strong>Neutralizacja wolnych rodników</strong> powstających przy podwyższonym kortyzolu; chroni błony komórkowe, DNA i białka.</li>
          <li><strong>Odtwarzanie witaminy C</strong>: redukuje jej utlenioną formę, co w wariancie Exclusive uzupełnia podaną witaminę C.</li>
          <li><strong>Detoksykacja w wątrobie</strong>: kofaktor enzymów fazy II, które sprzęgają i usuwają metabolity leków i toksyn.</li>
          <li><strong>Ochrona mitochondriów</strong>, które w stresie oksydacyjnym tracą wydolność energetyczną.</li>
        </ul>
        <h3>Dlaczego dożylnie i co mówią badania</h3>
        <p>Glutation doustny rozkłada gamma-glutamylotransferaza w jelicie i wątrobie. W badaniu Witschi i wsp. z 1992 roku pojedyncza dawka 3 g nie podniosła stężenia w osoczu, natomiast sześciomiesięczna suplementacja w badaniu Richie i wsp. z 2015 roku zwiększyła zapasy w krwinkach. Dane są więc niejednoznaczne, a droga dożylna omija ten spór: cała dawka trafia do krwi. Wskazania rejestracyjne z ChPL TAD 600 dotyczą stanów niedoboru glutationu i wspomagania leczenia uszkodzeń toksycznych. Podanie we wlewie na stres wykracza poza te wskazania, dlatego decyduje o nim lekarz i omawia to z pacjentem. Glutation w tej samej dawce zawiera też wariant Exclusive <Link href="/wlewy-witaminowe/kroplowka-na-odpornosc/">kroplówki na odporność</Link>.</p>
      </>
    ),
  },
  {
    title: 'Glukoza i Optilyte - paliwo dla mózgu i równowaga elektrolitowa',
    tocLabel: 'Glukoza i elektrolity',
    content: (
      <>
        <p>Glukoza 250 ml (VIP i Exclusive) oraz Optilyte (wszystkie warianty) odpowiadają za dwa aspekty przeciążenia: zapotrzebowanie mózgu na energię i gospodarkę wodno-elektrolitową.</p>
        <h3>Glukoza jako paliwo mózgu</h3>
        <ul>
          <li>Mózg stanowi około 2% masy ciała, a zużywa około 20% glukozy organizmu; w stresie to zapotrzebowanie rośnie (Mergenthaler i wsp., 2013).</li>
          <li>Kortyzol podnosi glikemię krótkoterminowo, ale wyczerpuje glikogen i prowadzi do wahań poziomu cukru, uczucia mgły umysłowej i napadów głodu.</li>
          <li>Warianty VIP i Exclusive zawierają glukozę 250 ml. Wlew nie zastępuje posiłku.</li>
        </ul>
        <h3>Optilyte i elektrolity</h3>
        <ul>
          <li>Zawiera sód, potas, wapń, magnez i chlorki w proporcjach zbliżonych do osocza, z octanami i cytrynianami jako buforem.</li>
          <li>Objawy zaburzeń elektrolitowych przy stresie to zmęczenie nieadekwatne do wysiłku, bóle głowy, ciemnienie przed oczami przy wstawaniu i kołatanie serca.</li>
          <li>Prawidłowe nawodnienie warunkuje transport magnezu do komórek, więc baza wlewu nie jest tylko rozpuszczalnikiem.</li>
        </ul>
        <p>Osobom z cukrzycą lekarz proponuje wariant Standard, który glukozy nie zawiera. Skład wariantów jest stały; kwalifikacja rozstrzyga o wyborze wariantu i tempie wlewu, nie o proporcjach składników.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo jest kroplówka na zmęczenie i stres - wskazania i granice',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Wlew nie jest lekiem na stres, lęk ani depresję. To uzupełnienie elektrolitów, magnezu i antyoksydantów u osób, u których długotrwałe obciążenie zużywa te zasoby szybciej, niż uzupełnia je dieta. O wskazaniach decyduje lekarz podczas kwalifikacji.</p>
        <h3>Typowe sytuacje, w których pacjenci wybierają ten wlew</h3>
        <ul>
          <li><strong>Wypalenie zawodowe</strong>: wielomiesięczna praca pod presją i wyczerpanie, które nie mija po weekendzie.</li>
          <li><strong>Spadek koncentracji</strong> u osób pracujących umysłowo, przy nieregularnych posiłkach i krótkim śnie.</li>
          <li><strong>Zaburzenia snu związane ze stresem</strong>: trudne zasypianie, płytki sen, nocne wybudzenia.</li>
          <li><strong>Napięcie mięśniowe</strong>: ból karku i barków, skurcze łydek, bruksizm.</li>
          <li><strong>Okresy kryzysowe</strong>: żałoba, rozwód, utrata pracy, przeprowadzka.</li>
        </ul>
        <h3>Kiedy wlew nie jest właściwą drogą</h3>
        <p>Obniżony nastrój utrzymujący się ponad dwa tygodnie, utrata zainteresowań, myśli rezygnacyjne i napady lęku wymagają konsultacji lekarskiej, a często psychoterapii lub farmakoterapii. Przewlekłe zmęczenie bywa też objawem niedoczynności tarczycy, niedokrwistości, niedoboru witaminy D lub bezdechu sennego, dlatego lekarz może najpierw zlecić badania. Osobom, u których dominuje osłabienie po infekcji, częściej proponujemy <Link href="/wlewy-witaminowe/witaminowa-bomba/">kroplówkę Witaminowa bomba</Link>, a przy wysiłku fizycznym <Link href="/wlewy-witaminowe/kroplowka-energetyczna/">kroplówkę energetyczną</Link>.</p>
      </>
    ),
  },
  {
    title: 'Przebieg kroplówki na zmęczenie i stres w Bas Clinic we Wrocławiu',
    tocLabel: 'Przebieg wizyty',
    content: (
      <>
        <p>Wizyta w Bas Clinic przy {CLINIC.address.street} we Wrocławiu trwa łącznie około 2 godzin. Sam wlew zajmuje około 90 minut, a tempo podania ustala personel medyczny.</p>
        <h3>Etapy wizyty</h3>
        <ol>
          <li><strong>Kwalifikacja lekarska</strong>: wywiad o chorobach przewlekłych, lekach, jakości snu i poziomie obciążenia; lekarz ogląda wyniki badań, jeśli pacjent je przyniósł, i wybiera wariant.</li>
          <li><strong>Przygotowanie wlewu</strong>: roztwór powstaje na miejscu, bezpośrednio przed podaniem.</li>
          <li><strong>Założenie kaniuli</strong>: cienki wenflon w żyle przedramienia, dyskomfort porównywalny z pobraniem krwi.</li>
          <li><strong>Wlew właściwy</strong>: około 90 minut w fotelu. Uczucie ciepła rozchodzące się po ciele przy podawaniu magnezu jest normalne; jeśli nasila się, personel zwalnia tempo.</li>
          <li><strong>Usunięcie kaniuli i obserwacja</strong>: kontrola samopoczucia i ciśnienia, opatrunek.</li>
        </ol>
        <p>Po wlewie można prowadzić samochód i wrócić do pracy. Zalecamy jedynie rezygnację z alkoholu w dniu zabiegu. Wizytę umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i bezpieczeństwo wlewu z magnezem i glukozą',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>O profilu bezpieczeństwa tej kroplówki decydują dwa składniki: magnez obecny w każdym wariancie i glukoza w VIP oraz Exclusive. Dlatego w Bas Clinic nikt nie otrzymuje wlewu bez kwalifikacji lekarskiej.</p>
        <h3>Przeciwwskazania bezwzględne</h3>
        <ul>
          <li><strong>Niewydolność nerek</strong>: magnez jest wydalany przez nerki i przy ich niewydolności kumuluje się do hipermagnezemii.</li>
          <li><strong>Zaawansowany blok przedsionkowo-komorowy i bradykardia</strong>: magnez zwalnia przewodzenie w sercu.</li>
          <li><strong>Hipermagnezemia</strong> stwierdzona w badaniach.</li>
          <li><strong>Miastenia</strong>: magnez osłabia przewodnictwo nerwowo-mięśniowe.</li>
          <li><strong>Nadwrażliwość</strong> na którykolwiek składnik wlewu.</li>
        </ul>
        <h3>Przeciwwskazania względne, o których decyduje lekarz</h3>
        <ul>
          <li><strong>Niewyrównana cukrzyca</strong>: glukoza w VIP i Exclusive może podnieść glikemię. Przy dobrze kontrolowanej cukrzycy lekarz może dopuścić wlew z pomiarem cukru, a w razie wątpliwości wybrać Standard, który glukozy nie zawiera.</li>
          <li><strong>Niewydolność serca i niekontrolowane nadciśnienie</strong>: objętość płynów obciąża układ krążenia.</li>
          <li><strong>Leki obniżające ciśnienie i zwiotczające mięśnie</strong>: magnez nasila ich działanie.</li>
          <li><strong>Niedobór G6PD</strong> przy witaminie C w wariancie Exclusive.</li>
          <li><strong>Ciąża i karmienie piersią</strong>: brak danych o bezpieczeństwie tej kombinacji.</li>
        </ul>
        <p>Możliwe działania niepożądane to uczucie gorąca, zaczerwienienie twarzy i przejściowy spadek ciśnienia przy magnezie oraz ból w miejscu wkłucia. Gabinet dysponuje zestawem przeciwwstrząsowym, a wlew przebiega pod nadzorem personelu medycznego.</p>
      </>
    ),
  },
  {
    title: 'Częstotliwość wlewów i czego kroplówka nie zastąpi',
    tocLabel: 'Częstotliwość i efekty',
    content: (
      <>
        <p>Kroplówka na zmęczenie i stres nie usuwa przyczyny przeciążenia i nie działa jak lek przyjęty doraźnie. Odczuwalna różnica zależy od stanu wyjściowego: u osoby z niedoborem magnezu jest wyraźna, u osoby bez niedoborów niewielka.</p>
        <h3>Typowy schemat stosowania</h3>
        <ol>
          <li><strong>Seria wstępna</strong>: 4 wlewy w odstępach tygodniowych, jeśli lekarz stwierdzi wskazania.</li>
          <li><strong>Wlewy podtrzymujące</strong>: co 2-4 tygodnie, zależnie od obciążenia i stylu życia.</li>
          <li><strong>Wlew doraźny</strong>: pojedynczo przed intensywnym okresem lub po nim.</li>
        </ol>
        <h3>Czego wlew nie zastąpi</h3>
        <ul>
          <li><strong>Snu</strong>: 7-9 godzin regularnego snu to warunek, bez którego magnez i glutation dają efekt krótkotrwały.</li>
          <li><strong>Psychoterapii i leczenia depresji</strong>: wlew wspiera ciało, a objawy psychiczne wymagają konsultacji lekarskiej i osobnych narzędzi.</li>
          <li><strong>Diagnostyki przyczyn zmęczenia</strong>: TSH, morfologia, ferrytyna, witamina B12 i D wyjaśniają więcej niż kolejna kroplówka.</li>
          <li><strong>Aktywności fizycznej</strong>, która metabolizuje kortyzol i adrenalinę.</li>
        </ul>
        <p>Przegląd Tardy i wsp. z 2020 roku wiąże niedobory magnezu i witamin z grupy B ze zmęczeniem i gorszą koncentracją, ale korzyści z ich podawania osobom bez niedoborów są słabo udokumentowane. Poziom magnezu w surowicy odzwierciedla około 1% jego zasobów, więc prawidłowy wynik nie wyklucza niedoboru tkankowego, a nieprawidłowy wymaga wyjaśnienia przyczyny.</p>
      </>
    ),
  },
  {
    title: 'Cena kroplówki na zmęczenie i stres we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Kroplówka na zmęczenie i stres w Bas Clinic we Wrocławiu kosztuje od {TIER_PRICE.standard} zł. Wariant Standard to {TIER_PRICE.standard} zł, VIP {TIER_PRICE.vip} zł, a Exclusive {TIER_PRICE.exclusive} zł. Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe, 90-minutowy wlew pod opieką personelu i obserwację po zabiegu.</p>
        <h3>Co zawiera cena</h3>
        <ul>
          <li>kwalifikację lekarską i wywiad zdrowotny,</li>
          <li>produkty lecznicze zgodne z wybranym wariantem,</li>
          <li>kaniulę, zestaw do wlewów i opatrunek,</li>
          <li>opiekę personelu przez cały czas trwania wlewu,</li>
          <li>kontrolę samopoczucia przed wyjściem z kliniki.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizyta nie wymaga skierowania. Warto zabrać aktualne wyniki badań, zwłaszcza magnez, glukozę i kreatyninę. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>. Pozostałe kroplówki i warianty opisujemy na stronie <Link href="/wlewy-witaminowe/">wlewów witaminowych</Link> oraz w <Link href="/cennik/">cenniku</Link>; osobom, u których stres odbija się na sferze intymnej, lekarz może zaproponować <Link href="/wlewy-witaminowe/kroplowka-na-libido/">kroplówkę na libido</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O wskazaniach i wariancie wlewu decyduje lekarz podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Pickering G., Mazur A., Trousselard M. i wsp. Magnesium Status and Stress: The Vicious Circle Concept Revisited. Nutrients 2020; 12(12): 3672. PMID 33260549.</li>
        <li>Boyle N.B., Lawton C., Dye L. The Effects of Magnesium Supplementation on Subjective Anxiety and Stress: A Systematic Review. Nutrients 2017; 9(5): 429. PMID 28445426.</li>
        <li>de Baaij J.H.F., Hoenderop J.G.J., Bindels R.J.M. Magnesium in man: implications for health and disease. Physiological Reviews 2015; 95(1): 1-46. PMID 25540137.</li>
        <li>Witschi A., Reddy S., Stofer B., Lauterburg B.H. The systemic availability of oral glutathione. European Journal of Clinical Pharmacology 1992; 43(6): 667-669. PMID 1362956.</li>
        <li>Richie J.P., Nichenametla S., Neidig W. i wsp. Randomized controlled trial of oral glutathione supplementation on body stores of glutathione. European Journal of Nutrition 2015; 54(2): 251-263. PMID 24791752.</li>
        <li>Mergenthaler P., Lindauer U., Dienel G.A., Meisel A. Sugar for the brain: the role of glucose in physiological and pathological brain function. Trends in Neurosciences 2013; 36(10): 587-597. PMID 23968694.</li>
        <li>Tardy A.L., Pouteau E., Marquez D., Yilmaz C., Scholey A. Vitamins and Minerals for Energy, Fatigue and Cognition: A Narrative Review of the Biochemical and Clinical Evidence. Nutrients 2020; 12(1): 228. PMID 31963141.</li>
        <li>Charakterystyka Produktu Leczniczego TAD 600, 600 mg, proszek i rozpuszczalnik do sporządzania roztworu do wstrzykiwań.</li>
        <li>Charakterystyka Produktu Leczniczego Optilyte, roztwór do infuzji (Fresenius Kabi).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Jak długo trwa kroplówka na zmęczenie i stres?',
    answer:
      'Sam wlew trwa około 90 minut, dłużej niż inne kroplówki, bo magnez wymaga wolnego tempa podawania. Z kwalifikacją lekarską i krótką obserwacją po zabiegu wizyta w Bas Clinic zajmuje około 2 godzin. Po wlewie można prowadzić samochód i wrócić do pracy.',
  },
  {
    question: 'Czy kroplówka na stres zastępuje psychoterapię lub leki?',
    answer:
      'Nie. Wlew uzupełnia elektrolity, magnez i antyoksydanty, które przewlekły stres zużywa, ale nie leczy depresji, zaburzeń lękowych ani bezsenności. Obniżony nastrój trwający ponad dwa tygodnie, napady lęku lub myśli rezygnacyjne wymagają konsultacji lekarskiej.',
  },
  {
    question: 'Czy z cukrzycą mogę przyjąć kroplówkę na zmęczenie i stres?',
    answer:
      'Warianty VIP i Exclusive zawierają 250 ml glukozy, dlatego przy niewyrównanej cukrzycy są przeciwwskazane. Przy dobrze kontrolowanej cukrzycy lekarz może dopuścić wlew z pomiarem glikemii albo zaproponować wariant Standard, który glukozy nie zawiera.',
  },
  {
    question: 'Jak często można powtarzać kroplówkę na zmęczenie i stres?',
    answer:
      'Częstotliwość ustala lekarz. Przy wskazaniach stosuje się zwykle serię 4 wlewów w odstępach tygodniowych, a potem wlewy podtrzymujące co 2-4 tygodnie. Pojedynczy wlew doraźny sprawdza się przed intensywnym okresem lub po nim.',
  },
  {
    question: 'Czy potrzebuję wyników badań przed wlewem?',
    answer:
      'Aktualne wyniki (magnez, glukoza, kreatynina, morfologia, TSH) są pomocne, ale nie zawsze wymagane. Lekarz ocenia to podczas kwalifikacji. Przy chorobach nerek, serca lub cukrzycy może zlecić badania przed serią wlewów, a przy przewlekłym zmęczeniu poszukać jego przyczyny.',
  },
  {
    question: 'Gdzie we Wrocławiu podać kroplówkę na zmęczenie i stres?',
    answer: `Kroplówkę na zmęczenie i stres podajemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}, a wariant Standard kosztuje ${TIER_PRICE.standard} zł.`,
  },
];

export default function KroplowkaNaZmeczenieIStresPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Kroplówka na zmęczenie i stres Wrocław"
      heroSubtitle="Wlewy witaminowe"
      heroDescription="Wlew dożylny z elektrolitami, magnezem, a w wyższych wariantach glutationem TAD 600 i glukozą. Kwalifikacja lekarska przed każdym podaniem, około 90 minut w Bas Clinic we Wrocławiu."
      slug="wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
