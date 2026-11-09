import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug, WLEWY_TIERS } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Kroplówka sportowa Wrocław - skład i cena',
  description:
    'Kroplówka Sport i regeneracja we Wrocławiu: Optilyte, magnez, witaminy B i glutation w trzech wariantach. Kwalifikacja lekarska, zasady WADA, cena od 500 zł.',
  path: '/wlewy-witaminowe/kroplowka-sport-i-regeneracja/',
});

const SERVICE = getServiceBySlug('wlewy-witaminowe/kroplowka-sport-i-regeneracja');
const TIER_LABEL = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.label]));
const TIER_PRICE = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.price]));

const BREADCRUMBS = [
  { label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' },
  { label: 'Kroplówka Sport i regeneracja' },
];

const EXPERT_INFO = [
  {
    title: 'Kroplówka sportowa we Wrocławiu - skład i warianty wlewu',
    tocLabel: 'Skład wlewu',
    content: (
      <>
        <p><strong>Kroplówka Sport i regeneracja</strong> to wlew dożylny dla osób obciążonych treningiem lub pracą fizyczną. Podstawą każdego wariantu jest Optilyte, wieloelektrolitowy płyn infuzyjny, z dodatkiem magnezu. VIP dokłada kompleks witamin B (B1, B6, B12), a Exclusive drugą butelkę soli fizjologicznej z preparatem TAD 600, czyli glutationem. Wlew trwa około godziny i podajemy go w Bas Clinic we Wrocławiu po kwalifikacji lekarskiej.</p>
        <p>Warianty budują się na sobie: każdy wyższy zawiera wszystko z niższego i jeden składnik więcej. Pacjent, któremu zależy na glutationie, znajdzie go wyłącznie w Exclusive.</p>
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
        <p>Optilyte (Fresenius Kabi) to roztwór elektrolitów o składzie jonowym zbliżonym do osocza: sód, potas, wapń, magnez i chlorki. Jest produktem leczniczym do podania dożylnego, czym różni się od napoju izotonicznego. TAD 600 to ampułka 600 mg glutationu w postaci soli sodowej, również produkt leczniczy z własną Charakterystyką Produktu Leczniczego. Nie stosujemy suplementów diety rozpuszczanych do wlewu.</p>
      </>
    ),
  },
  {
    title: 'Elektrolity i magnez po wysiłku - co robi baza wlewu',
    tocLabel: 'Elektrolity i magnez',
    content: (
      <>
        <p>Wysiłek fizyczny odwadnia i wypłukuje elektrolity z potem. Optilyte odtwarza objętość krążącego osocza i uzupełnia jony, a magnez odpowiada za skurcz i rozkurcz mięśni oraz udział w syntezie ATP. Oba składniki są w każdym wariancie, także w Standardzie.</p>
        <h3>Co dzieje się z magnezem podczas treningu</h3>
        <ul>
          <li><strong>Straty z potem i moczem</strong>: intensywny wysiłek zwiększa wydalanie magnezu. Nielsen i Lukaski (2006) szacują, że zapotrzebowanie osób trenujących rośnie o 10-20% w porównaniu z osobami nieaktywnymi.</li>
          <li><strong>Redystrybucja</strong>: podczas wysiłku magnez przemieszcza się z osocza do pracujących mięśni i krwinek, więc jego stężenie we krwi przejściowo spada.</li>
          <li><strong>Zużycie metaboliczne</strong>: ATP jest biologicznie aktywne dopiero jako kompleks z jonem magnezu, dlatego intensywny metabolizm wysiłkowy zużywa go więcej niż spoczynkowy.</li>
        </ul>
        <p>Ten sam przegląd wyznacza granicę: uzupełnianie magnezu poprawia wydolność u osób z jego niedoborem, natomiast u osób z prawidłowym stężeniem nie wykazano wpływu na wyniki sportowe. Standardem uzupełniania płynów po wysiłku pozostaje droga doustna (stanowisko ACSM, Sawka i wsp., 2007). Wlew ma sens, gdy pacjent źle toleruje płyny doustne, po bardzo dużym obciążeniu albo przy udokumentowanym niedoborze. Osobom, którym zależy tylko na nawodnieniu, lekarz może zaproponować <Link href="/wlewy-witaminowe/kroplowka-nawodnienie/">kroplówkę nawadniającą</Link>, której wariant Standard to sam Optilyte.</p>
      </>
    ),
  },
  {
    title: 'Witaminy B1, B6 i B12 w wariantach VIP i Exclusive',
    tocLabel: 'Witaminy B',
    content: (
      <>
        <p>Kompleks witamin B (B1, B6, B12) pojawia się od wariantu VIP. Te trzy witaminy są kofaktorami enzymów metabolizmu energetycznego i pracy układu nerwowego, a organizm magazynuje je w niewielkich ilościach, poza B12 gromadzoną w wątrobie.</p>
        <h3>Rola w organizmie osoby trenującej</h3>
        <ul>
          <li><strong>B1 (tiamina)</strong>: kofaktor dehydrogenazy pirogronianowej, enzymu wprowadzającego produkty rozkładu węglowodanów do cyklu Krebsa. Zapotrzebowanie rośnie wraz z ilością spalanych węglowodanów.</li>
          <li><strong>B6 (pirydoksyna)</strong>: uczestniczy w przemianach aminokwasów i glikogenu oraz w syntezie neuroprzekaźników.</li>
          <li><strong>B12 (kobalamina)</strong>: niezbędna do produkcji krwinek czerwonych przenoszących tlen i do pracy nerwów obwodowych. Doustnie przyswaja się jedynie około 1-2% dawki przekraczającej pojemność czynnika wewnętrznego.</li>
        </ul>
        <p>Wlew dostarcza witaminy B jednorazowo, pozajelitowo. To nie jest leczenie niedoboru witaminy B12, które wymaga diagnostyki i schematu iniekcji ustalonego przez lekarza. Pacjent, który potrzebuje szerszego zestawu witamin zamiast elektrolitów, może porównać skład <Link href="/wlewy-witaminowe/witaminowa-bomba/">kroplówki Witaminowa bomba</Link>, opartej na soli fizjologicznej, kompleksie B i witaminie C.</p>
      </>
    ),
  },
  {
    title: 'TAD 600 w wariancie Exclusive - glutation dożylnie',
    tocLabel: 'Glutation (Exclusive)',
    content: (
      <>
        <p><strong>TAD 600</strong> to preparat glutationu do podania dożylnego. Glutation jest tripeptydem z kwasu glutaminowego, cysteiny i glicyny oraz głównym antyoksydantem wewnątrzkomórkowym. W kroplówce Sport i regeneracja występuje wyłącznie w wariancie Exclusive, w drugiej butelce NaCl 0,9% 100 ml lub 250 ml.</p>
        <h3>Co robi glutation w mięśniu</h3>
        <ul>
          <li><strong>Neutralizuje reaktywne formy tlenu</strong>: forma zredukowana (GSH) oddaje elektron wolnym rodnikom i przechodzi w formę utlenioną (GSSG), którą reduktaza glutationowa odtwarza.</li>
          <li><strong>Chroni mitochondria</strong>: to w nich powstaje najwięcej rodników podczas pracy mięśnia i to ich błony są na nie najbardziej wrażliwe.</li>
          <li><strong>Uczestniczy w detoksykacji</strong>: jest kofaktorem enzymów II fazy w wątrobie.</li>
        </ul>
        <h3>Dlaczego dożylnie zamiast tabletki</h3>
        <p>Glutation podany doustnie rozkładają peptydazy jelitowe. W badaniu z randomizacją Allena i Bradleya (2011) czterotygodniowa suplementacja doustna 1000 mg dziennie nie zmieniła ani stężenia glutationu w krwinkach, ani markerów stresu oksydacyjnego u zdrowych dorosłych. Podanie dożylne omija ten etap. Trzeba jednak dodać, że badań nad glutationem u sportowców jest mało: w próbie Aoi i wsp. (2015) doustny glutation obniżał mleczany i odczuwane zmęczenie po godzinnym wysiłku, ale badanie objęło ośmiu mężczyzn. To sygnał, a nie dowód.</p>
      </>
    ),
  },
  {
    title: 'Stres oksydacyjny po treningu - co wlew może, a czego nie',
    tocLabel: 'Stres oksydacyjny',
    content: (
      <>
        <p>Każdy intensywny trening zwiększa produkcję reaktywnych form tlenu w mięśniach. W małych ilościach są one sygnałem uruchamiającym adaptację treningową; w nadmiarze uszkadzają białka i lipidy komórki i osłabiają siłę skurczu (Powers i Jackson, 2008).</p>
        <h3>Trzy fazy po wysiłku</h3>
        <ul>
          <li><strong>Faza wysiłkowa (0-1 h)</strong>: szczyt produkcji rodników w mitochondriach, zużycie endogennego glutationu, mikrouszkodzenia włókien.</li>
          <li><strong>Faza zapalna (2-24 h)</strong>: napływ neutrofilów i makrofagów, cytokiny prozapalne, opóźniona bolesność mięśni (DOMS).</li>
          <li><strong>Faza odbudowy (24-72 h)</strong>: synteza białek mięśniowych i odtworzenie zasobów elektrolitów. Ten etap wymaga magnezu, nawodnienia i snu.</li>
        </ul>
        <h3>Antyoksydanty a adaptacja do treningu</h3>
        <p>Tu potrzebne jest zastrzeżenie. Ristow i wsp. (2009) wykazali, że codzienna wysoka dawka witamin C i E znosiła korzystny wpływ czterotygodniowego treningu na wrażliwość insulinową, bo wygaszała sygnał rodnikowy potrzebny do adaptacji. Glutationu dożylnego nie badano w ten sposób, ale wniosek nakazuje ostrożność: antyoksydant ma uzasadnienie po bardzo dużym, jednorazowym obciążeniu (maraton, turniej wielodniowy), nie po każdej jednostce treningowej. Dlatego wariant Exclusive proponujemy wybiórczo.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo jest kroplówka na regenerację po treningu',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Wlew Sport i regeneracja jest dla osób, u których obciążenie wysiłkiem przekracza możliwości odbudowy z diety i snu. Nie jest lekiem na przetrenowanie ani zamiennikiem odpoczynku. O wskazaniach decyduje lekarz podczas kwalifikacji.</p>
        <h3>Sytuacje, w których pacjenci wybierają ten wlew</h3>
        <ul>
          <li><strong>Po zawodach wytrzymałościowych</strong>: maraton, triathlon, wyścig kolarski, gdy straty płynów i elektrolitów są duże, a apetyt i tolerancja płynów doustnych obniżone.</li>
          <li><strong>Bloki treningowe o dużej objętości</strong>: 5-6 jednostek tygodniowo, przygotowania do startu.</li>
          <li><strong>Skurcze i bolesność mięśni</strong> przy udokumentowanym lub prawdopodobnym niedoborze magnezu.</li>
          <li><strong>Powrót do treningu</strong> po infekcji lub dłuższej przerwie, gdy organizm reaguje na wysiłek silniej niż zwykle.</li>
          <li><strong>Ciężka praca fizyczna</strong>: budowa, magazyn, praca w upale; obciążenie porównywalne z treningiem.</li>
        </ul>
        <p>Osoby, u których na pierwszym planie jest wyczerpanie pracą umysłową, częściej kierujemy na <Link href="/wlewy-witaminowe/kroplowka-energetyczna/">kroplówkę energetyczną</Link> o identycznym składzie we wszystkich trzech wariantach, ale z innym wywiadem kwalifikacyjnym. Po infekcji lekarz może zaproponować <Link href="/wlewy-witaminowe/kroplowka-na-odpornosc/">kroplówkę na odporność</Link> z witaminą C.</p>
      </>
    ),
  },
  {
    title: 'Przebieg wlewu sportowego w Bas Clinic we Wrocławiu',
    tocLabel: 'Przebieg wizyty',
    content: (
      <>
        <p>Wizyta w Bas Clinic przy {CLINIC.address.street} we Wrocławiu trwa łącznie około 75-80 minut. Sam wlew zajmuje godzinę, reszta to kwalifikacja lekarska i krótka obserwacja po zabiegu.</p>
        <h3>Etapy wizyty</h3>
        <ol>
          <li><strong>Kwalifikacja lekarska</strong>: lekarz pyta o choroby przewlekłe, alergie, leki i suplementy (zwłaszcza magnez, kreatynę, przedtreningówki), a także o dyscyplinę, objętość treningu, ostatni start i ewentualne objawy przetrenowania. Sprawdza też, czy pacjent podlega kontroli antydopingowej.</li>
          <li><strong>Przygotowanie wlewu</strong>: roztwór powstaje na miejscu, bezpośrednio przed podaniem, zgodnie z wybranym wariantem.</li>
          <li><strong>Założenie kaniuli</strong>: cienki wenflon w żyle przedramienia; jedyny moment dyskomfortu, porównywalny z pobraniem krwi.</li>
          <li><strong>Wlew właściwy</strong>: około 60 minut w fotelu, pod opieką personelu. W Exclusive po pierwszej butelce podłączamy drugą, z glutationem.</li>
          <li><strong>Usunięcie kaniuli i obserwacja</strong>: kontrola samopoczucia i opatrunek w miejscu wkłucia.</li>
        </ol>
        <p>Po wlewie można prowadzić samochód i wrócić do pracy. Lekki trening tego samego dnia jest możliwy, intensywną jednostkę lepiej zaplanować na kolejny dzień. Najlepszy moment podania to 24-48 godzin po zawodach lub najcięższym treningu bloku. Wizytę umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania, bezpieczeństwo i kontrola antydopingowa',
    tocLabel: 'Bezpieczeństwo i WADA',
    content: (
      <>
        <p>Wlew dożylny jest procedurą medyczną. Składniki kroplówki Sport i regeneracja są dobrze poznane, ale magnez podany dożylnie działa na serce i przewodnictwo nerwowo-mięśniowe, a dodatkowa objętość płynów obciąża krążenie. Dlatego w Bas Clinic żaden pacjent nie otrzymuje wlewu bez kwalifikacji lekarskiej.</p>
        <h3>Przeciwwskazania bezwzględne</h3>
        <ul>
          <li><strong>Niewydolność nerek</strong>: magnez i potas są wydalane przez nerki; przy upośledzonej filtracji grozi hipermagnezemia i hiperkaliemia.</li>
          <li><strong>Hipermagnezemia i blok przedsionkowo-komorowy</strong>: magnez zwalnia przewodzenie w sercu.</li>
          <li><strong>Nadwrażliwość</strong> na którykolwiek składnik, w tym na tiaminę (opisywane reakcje anafilaktyczne po podaniu pozajelitowym).</li>
        </ul>
        <h3>Przeciwwskazania względne, o których decyduje lekarz</h3>
        <ul>
          <li><strong>Niewydolność serca i niekontrolowane nadciśnienie</strong>: ryzyko przeciążenia objętościowego, większe w Exclusive z drugą butelką.</li>
          <li><strong>Ciąża i karmienie piersią</strong>: brak danych o bezpieczeństwie dożylnego glutationu; decyzja indywidualna.</li>
          <li><strong>Doustna suplementacja magnezu</strong>: lekarz musi o niej wiedzieć, żeby nie zdublować dawki.</li>
        </ul>
        <h3>Zawodnicy objęci kontrolą antydopingową</h3>
        <p>Żaden składnik wlewu (elektrolity, magnez, witaminy B, glutation) nie jest substancją zabronioną. Zabroniona jest natomiast sama metoda. Lista Substancji i Metod Zabronionych WADA (punkt M2.2) zakazuje wlewów dożylnych i wstrzyknięć o łącznej objętości powyżej 100 ml w ciągu 12 godzin, z wyjątkiem otrzymanych w toku leczenia szpitalnego, zabiegu chirurgicznego lub diagnostyki klinicznej. Zakaz obowiązuje przez cały rok, również poza zawodami. Kroplówka 500 ml podana w gabinecie w celu regeneracji nie mieści się w tym wyjątku. Zawodnik podlegający kontroli powinien przed wizytą skontaktować się ze swoją federacją lub POLADA i, jeśli istnieje wskazanie medyczne, wystąpić o wyłączenie dla celów terapeutycznych (TUE). Pytamy o to podczas kwalifikacji i nie podajemy wlewu osobie, która takiej zgody nie ma.</p>
      </>
    ),
  },
  {
    title: 'Częstotliwość wlewów i realistyczne oczekiwania',
    tocLabel: 'Częstotliwość i efekty',
    content: (
      <>
        <p>Efekt wlewu zależy od stanu wyjściowego. U osoby odwodnionej i z niedoborem magnezu różnica bywa odczuwalna tego samego dnia. U osoby dobrze odżywionej i nawodnionej wlew nie doda nic ponad to, co daje sen i posiłek po treningu.</p>
        <h3>Typowe schematy stosowania</h3>
        <ol>
          <li><strong>Doraźnie</strong>: pojedynczy wlew 24-48 godzin po maratonie, triathlonie lub turnieju.</li>
          <li><strong>W bloku treningowym</strong>: co 1-2 tygodnie w okresie przygotowawczym, jeśli lekarz widzi wskazania, potem co 3-4 tygodnie.</li>
          <li><strong>Po przerwie</strong>: 1-2 wlewy przy powrocie do treningu po infekcji.</li>
        </ol>
        <h3>Co mówią dowody</h3>
        <p>Przegląd Cochrane (Garrison i wsp., 2020) nie znalazł ani jednego badania z randomizacją oceniającego magnez w skurczach powysiłkowych, a u osób starszych ze skurczami nocnymi nie wykazał korzyści. Badań nad dożylnymi wlewami regeneracyjnymi u sportowców praktycznie nie ma. Mówimy to wprost: wlew jest uzupełnieniem, a podstawą regeneracji pozostają sen, posiłek z węglowodanami i białkiem oraz zaplanowany odpoczynek. Wlew nie zastępuje też diagnostyki, gdy spadek formy utrzymuje się mimo odpoczynku.</p>
      </>
    ),
  },
  {
    title: 'Cena kroplówki sportowej we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Kroplówka Sport i regeneracja w Bas Clinic we Wrocławiu kosztuje od {TIER_PRICE.standard} zł. Wariant Standard to {TIER_PRICE.standard} zł, VIP {TIER_PRICE.vip} zł, a Exclusive {TIER_PRICE.exclusive} zł. Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe, godzinny wlew pod opieką personelu i obserwację po zabiegu.</p>
        <h3>Co zawiera cena</h3>
        <ul>
          <li>kwalifikację lekarską z wywiadem treningowym,</li>
          <li>preparaty do podania pozajelitowego zgodne z wariantem,</li>
          <li>kaniulę, zestaw do wlewów i opatrunek,</li>
          <li>opiekę personelu przez cały czas trwania wlewu,</li>
          <li>kontrolę samopoczucia przed wyjściem z kliniki.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizyta nie wymaga skierowania. Warto zabrać aktualne wyniki badań, zwłaszcza jonogram z magnezem, morfologię i kreatyninę. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>. Pozostałe wlewy i warianty znajdziesz na stronie <Link href="/wlewy-witaminowe/">wlewów witaminowych</Link> oraz w <Link href="/cennik/">cenniku</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O wskazaniach i wariancie wlewu decyduje lekarz podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Nielsen F.H., Lukaski H.C. Update on the relationship between magnesium and exercise. Magnesium Research 2006; 19(3): 180-189. PMID 17172008.</li>
        <li>Sawka M.N. i wsp. American College of Sports Medicine position stand. Exercise and fluid replacement. Medicine and Science in Sports and Exercise 2007; 39(2): 377-390. PMID 17277604.</li>
        <li>Powers S.K., Jackson M.J. Exercise-induced oxidative stress: cellular mechanisms and impact on muscle force production. Physiological Reviews 2008; 88(4): 1243-1276. PMID 18923182.</li>
        <li>Ristow M. i wsp. Antioxidants prevent health-promoting effects of physical exercise in humans. Proceedings of the National Academy of Sciences USA 2009; 106(21): 8665-8670. PMID 19433800.</li>
        <li>Allen J., Bradley R.D. Effects of oral glutathione supplementation on systemic oxidative stress biomarkers in human volunteers. Journal of Alternative and Complementary Medicine 2011; 17(9): 827-833. PMID 21875351.</li>
        <li>Aoi W. i wsp. Glutathione supplementation suppresses muscle fatigue induced by prolonged exercise via improved aerobic metabolism. Journal of the International Society of Sports Nutrition 2015; 12: 7. PMID 25685110.</li>
        <li>Garrison S.R. i wsp. Magnesium for skeletal muscle cramps. Cochrane Database of Systematic Reviews 2020; 9: CD009402. PMID 32956536.</li>
        <li>World Anti-Doping Agency. The Prohibited List 2026, sekcja M2 Chemical and Physical Manipulation, punkt M2.2.</li>
        <li>Charakterystyka Produktu Leczniczego TAD 600, proszek i rozpuszczalnik do sporządzania roztworu do wstrzykiwań (Biomedica Foscama).</li>
        <li>Charakterystyka Produktu Leczniczego Optilyte, roztwór do infuzji (Fresenius Kabi).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Jak długo trwa kroplówka Sport i regeneracja?',
    answer:
      'Sam wlew trwa około 60 minut, a w wariancie Exclusive z drugą butelką nieco dłużej. Do tego dochodzi kwalifikacja lekarska (10-15 minut) i krótka obserwacja po zakończeniu, więc na wizytę w Bas Clinic warto zarezerwować około 80 minut.',
  },
  {
    question: 'Czy mogę trenować po kroplówce sportowej?',
    answer:
      'Tak, lekki trening tego samego dnia jest możliwy. Intensywną jednostkę lepiej zaplanować na kolejny dzień. Prowadzenie samochodu i praca są możliwe od razu po wyjściu z kliniki.',
  },
  {
    question: 'Kiedy podać wlew: przed zawodami czy po nich?',
    answer:
      'Najlepszy moment to 24-48 godzin po zawodach lub najcięższym treningu, gdy straty elektrolitów są największe, a organizm wchodzi w fazę odbudowy. Wlew tuż przed startem nie poprawia wyników u osób bez niedoboru i nie ma uzasadnienia.',
  },
  {
    question: 'Czy kroplówka sportowa jest dopingiem?',
    answer:
      'Składniki (elektrolity, magnez, witaminy B, glutation) nie są substancjami zabronionymi. Lista WADA zakazuje jednak samej metody: wlewów dożylnych powyżej 100 ml w ciągu 12 godzin poza leczeniem szpitalnym, zabiegiem chirurgicznym i diagnostyką. Zawodnik podlegający kontroli antydopingowej powinien przed wizytą skonsultować się z federacją lub POLADA i uzyskać wyłączenie terapeutyczne (TUE), jeśli istnieje wskazanie medyczne.',
  },
  {
    question: 'Czy w kroplówce Sport i regeneracja jest TAD 600?',
    answer: `Tylko w wariancie Exclusive (${TIER_PRICE.exclusive} zł), jako ampułka glutationu w drugiej butelce NaCl 0,9% 100 ml lub 250 ml. Standard (${TIER_PRICE.standard} zł) i VIP (${TIER_PRICE.vip} zł) go nie zawierają. Wariant dobiera lekarz podczas kwalifikacji.`,
  },
  {
    question: 'Gdzie we Wrocławiu podać kroplówkę Sport i regeneracja?',
    answer: `Kroplówkę Sport i regeneracja podajemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function KroplowkaSportIRegeneracjaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Kroplówka Sport i regeneracja Wrocław"
      heroSubtitle="Wlewy witaminowe"
      heroDescription="Wlew dożylny z elektrolitami, magnezem, witaminami B i glutationem dla osób obciążonych treningiem. Kwalifikacja lekarska przed każdym podaniem, około 60 minut w Bas Clinic we Wrocławiu."
      slug="wlewy-witaminowe/kroplowka-sport-i-regeneracja"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
