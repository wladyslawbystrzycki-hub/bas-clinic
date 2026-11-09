import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug, WLEWY_TIERS } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Kroplówka na libido Wrocław - skład i cena',
  description:
    'Kroplówka na libido we Wrocławiu: elektrolity, magnez, witaminy B lub koenzym Q10 bez hormonów, dla kobiet i mężczyzn. Kwalifikacja lekarska, cena od 500 zł.',
  path: '/wlewy-witaminowe/kroplowka-na-libido/',
});

const SERVICE = getServiceBySlug('wlewy-witaminowe/kroplowka-na-libido');
const TIER_LABEL = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.label]));
const TIER_PRICE = Object.fromEntries(WLEWY_TIERS.map((t) => [t.id, t.price]));

const BREADCRUMBS = [
  { label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' },
  { label: 'Kroplówka na libido' },
];

const EXPERT_INFO = [
  {
    title: 'Kroplówka na libido we Wrocławiu - co zawiera wlew i czego nie zawiera',
    tocLabel: 'Skład wlewu',
    content: (
      <>
        <p><strong>Kroplówka na libido</strong> to wlew dożylny na bazie płynu wieloelektrolitowego Optilyte z magnezem, dostępny w Bas Clinic we Wrocławiu w trzech wariantach. VIP dokłada kompleks witamin B (B1, B6, B12), a Exclusive zamiast kompleksu B zawiera koenzym Q10 (ubichinon). Wlew trwa około godziny i poprzedza go kwalifikacja lekarska.</p>
        <p>Wlew nie zawiera hormonów, afrodyzjaków ani leków na zaburzenia erekcji i nie jest terapią zaburzeń seksualnych. Jego zadanie to uzupełnienie płynów, elektrolitów, magnezu i witamin, czyli fizjologicznych podstaw energii i sprawności. Podajemy go kobietom i mężczyznom.</p>
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
        <p>Exclusive nie jest sumą pozostałych wariantów: koenzym Q10 wchodzi w nim na miejsce kompleksu witamin B, a nie obok niego. VIP wspiera metabolizm energetyczny i neuroprzekaźnictwo, Exclusive pracę mitochondriów i ochronę błon komórkowych. Optilyte to zbilansowany roztwór sodu, potasu, wapnia, magnezu i chlorków z octanami i cytrynianami, o składzie zbliżonym do osocza.</p>
      </>
    ),
  },
  {
    title: 'Skąd bierze się obniżone libido - przyczyny wymagające diagnostyki',
    tocLabel: 'Przyczyny obniżonego libido',
    content: (
      <>
        <p>Obniżone libido rzadko ma jedną przyczynę. Zalecenia International Society for the Study of Women&apos;s Sexual Health (Clayton i wsp., 2018) każą oceniać je biopsychospołecznie, a u mężczyzn Corona i wsp. (2013) podkreślają rolę chorób ogólnych. Wlew nie zajmuje się żadną z tych przyczyn; lekarz podczas kwalifikacji może za to wskazać, gdzie szukać dalej.</p>
        <h3>Cztery grupy przyczyn</h3>
        <ul>
          <li><strong>Hormonalne</strong>: niski testosteron, zaburzenia estrogenów po menopauzie i po porodzie, hiperprolaktynemia, niedoczynność tarczycy. Wymagają badań krwi i konsultacji endokrynologa, ginekologa lub urologa.</li>
          <li><strong>Naczyniowe i metaboliczne</strong>: cukrzyca, nadciśnienie, miażdżyca. Zaburzenia erekcji bywają pierwszym objawem choroby wieńcowej (Shamloul i Ghanem, 2013), dlatego nie wolno ich tłumaczyć zmęczeniem.</li>
          <li><strong>Psychiczne i relacyjne</strong>: depresja, lęk, przewlekły stres, konflikt w związku. Hamilton i Meston (2013) wykazały niższe pobudzenie u kobiet z wysokim poziomem przewlekłego stresu.</li>
          <li><strong>Lekowe</strong>: leki przeciwdepresyjne z grupy SSRI, beta-blokery, antykoncepcja hormonalna, finasteryd, opioidy. Zmianę leku omawia się z lekarzem prowadzącym.</li>
        </ul>
        <p>Jeśli w wywiadzie pojawia się którakolwiek z tych grup, lekarz w Bas Clinic proponuje najpierw diagnostykę. Kroplówka może być uzupełnieniem, ale nie powinna opóźniać rozpoznania.</p>
      </>
    ),
  },
  {
    title: 'Jak wlew wspiera witalność - trzy pośrednie ścieżki działania',
    tocLabel: 'Mechanizm działania',
    content: (
      <>
        <p>Związek między składnikami wlewu a sferą intymną jest pośredni. Kroplówka na libido działa przez nawodnienie i elektrolity, metabolizm energetyczny oraz, w wariancie VIP, przez witaminy B zaangażowane w syntezę neuroprzekaźników. Żadna z tych ścieżek nie omija przyczyn opisanych wyżej.</p>
        <h3>Trzy ścieżki</h3>
        <ul>
          <li><strong>Wodno-elektrolitowa (każdy wariant)</strong>: objętość krwi i sprawne krążenie obwodowe zależą od nawodnienia. Odwodnienie i rozchwiane elektrolity same obniżają wydolność i nastrój.</li>
          <li><strong>Energetyczna (magnez, w VIP witaminy B)</strong>: magnez jest kofaktorem reakcji wytwarzających ATP, a witamina B1 (tiamina) uczestniczy w metabolizmie węglowodanów. Zmęczenie i brak motywacji to najczęstsze zgłaszane tło spadku popędu.</li>
          <li><strong>Neurochemiczna (VIP)</strong>: witamina B6 jest kofaktorem enzymu przekształcającego prekursory w dopaminę i serotoninę, a B12 utrzymuje syntezę mieliny i czynność nerwów obwodowych; jej niedobór daje zmęczenie, które nie mija po odpoczynku.</li>
        </ul>
        <p>W wariancie Exclusive miejsce witamin B zajmuje koenzym Q10, działający w mitochondriach. Przegląd Kennedy&apos;ego z 2016 roku opisuje rolę witamin B w pracy mózgu biochemicznie, ale korzyści z ich podawania osobom bez niedoboru są słabo udokumentowane. Efekt każdej ścieżki jest wyraźny u osoby z niedoborem lub odwodnionej, a niewielki u osoby zdrowej. Mówimy to wprost podczas kwalifikacji. Osobom z ogólnymi niedoborami witaminowymi bliższa będzie <Link href="/wlewy-witaminowe/witaminowa-bomba/">kroplówka Witaminowa bomba</Link>, w której kompleks B jest już w Standardzie.</p>
      </>
    ),
  },
  {
    title: 'Magnez a krążenie obwodowe i układ nerwowy - składnik każdego wariantu',
    tocLabel: 'Rola magnezu',
    content: (
      <>
        <p>Magnez jest jedynym składnikiem czynnym obecnym we wszystkich wariantach kroplówki na libido, także w Standardzie. Według przeglądu de Baaij i wsp. z 2015 roku uczestniczy w ponad 600 reakcjach enzymatycznych, przede wszystkim w mózgu, sercu i mięśniach.</p>
        <h3>Dlaczego magnez ma znaczenie dla witalności</h3>
        <ul>
          <li><strong>Napięcie naczyń</strong>: jako fizjologiczny antagonista wapnia reguluje napięcie mięśniówki gładkiej w ścianach naczyń. Sprawne krążenie obwodowe jest warunkiem odpowiedzi seksualnej u obu płci.</li>
          <li><strong>Energia komórkowa</strong>: ATP jest aktywne biologicznie tylko w kompleksie z magnezem, więc niedobór ogranicza wykorzystanie dostępnego paliwa.</li>
          <li><strong>Układ nerwowy</strong>: magnez tłumi pobudliwość neuronów i uczestniczy w przewodnictwie nerwowo-mięśniowym; niedobór daje drażliwość, skurcze i gorszy sen.</li>
        </ul>
        <h3>Skąd biorą się niedobory</h3>
        <p>Przewlekły stres zwiększa wydalanie magnezu z moczem, co Pickering i wsp. (2020) opisują jako błędne koło stresu i niedoboru. Utratę nasilają też intensywny wysiłek, leki moczopędne, inhibitory pompy protonowej i alkohol. Podanie dożylne omija wchłanianie jelitowe, ale wymaga wolnego tempa, bo zbyt szybki wlew daje uczucie gorąca i spadek ciśnienia. Osobom, u których dominuje wyczerpanie, częściej proponujemy <Link href="/wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres/">kroplówkę na zmęczenie i stres</Link>.</p>
      </>
    ),
  },
  {
    title: 'Koenzym Q10 (ubichinon) w wariancie Exclusive - co wiadomo, a czego nie',
    tocLabel: 'Koenzym Q10',
    content: (
      <>
        <p>Koenzym Q10 wyróżnia wariant Exclusive i zastępuje w nim kompleks witamin B. Jest ogniwem mitochondrialnego łańcucha oddechowego i antyoksydantem rozpuszczalnym w tłuszczach, a jego stężenie w tkankach obniża się z wiekiem.</p>
        <h3>Dwie role koenzymu Q10</h3>
        <ul>
          <li><strong>Łańcuch oddechowy</strong>: przenosi elektrony między kompleksami I/II a III, na etapie prowadzącym do wytworzenia ATP.</li>
          <li><strong>Ochrona błon</strong>: wbudowuje się w błony komórkowe i lipoproteiny, ograniczając ich utlenianie; dotyczy to także śródbłonka naczyń.</li>
        </ul>
        <h3>Stan dowodów</h3>
        <p>Przegląd Hernández-Camacho i wsp. z 2018 roku wskazuje na korzyści z suplementacji Q10 głównie w pierwotnych niedoborach i chorobach mitochondrialnych, a w innych wskazaniach, w tym w płodności, wzywa do większych i dłuższych badań. Dane o wpływie Q10 na libido u ludzi są ograniczone i nie pozwalają na żadną obietnicę. Wariant Exclusive proponujemy osobom po 40. roku życia jako wsparcie metabolizmu energetycznego, nie jako lek.</p>
        <h3>Interakcja z lekami przeciwzakrzepowymi</h3>
        <p>Opis przypadku Spigseta z 1994 roku sugerował, że ubichinon osłabia działanie warfaryny, a badanie z randomizacją Engelsen i wsp. z 2002 roku takiego wpływu nie potwierdziło. Dane są sprzeczne, dlatego przy leczeniu acenokumarolem lub warfaryną lekarz w Bas Clinic wybiera wariant Standard albo VIP, które Q10 nie zawierają.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo jest kroplówka na libido - wskazania i granice',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Wlew jest przeznaczony dla kobiet i mężczyzn, u których spadek energii i zainteresowania sferą intymną wiąże się z przemęczeniem, stresem, odwodnieniem lub niedoborami. Nie jest lekiem na dysfunkcje seksualne i nie zastępuje konsultacji urologa, ginekologa, seksuologa ani psychiatry.</p>
        <h3>Typowe sytuacje, w których pacjenci wybierają ten wlew</h3>
        <ul>
          <li><strong>Praca pod przewlekłym stresem</strong>, krótki sen, nieregularne posiłki.</li>
          <li><strong>Niedobór magnezu lub witamin B</strong> potwierdzony badaniami.</li>
          <li><strong>Wiek po 40. roku życia</strong> i spadek witalności, bez nieprawidłowości hormonalnych w badaniach.</li>
          <li><strong>Rekonwalescencja</strong> po chorobie lub operacji.</li>
          <li><strong>Intensywny trening</strong> z utratą magnezu z potem i objawami przetrenowania.</li>
        </ul>
        <h3>Kiedy wlew nie jest właściwą drogą</h3>
        <p>Zaburzenia erekcji, ból podczas współżycia, brak libido po porodzie lub w okresie menopauzy, a także spadek popędu po włączeniu nowego leku wymagają diagnostyki, nie kroplówki. Lekarz w Bas Clinic wskaże właściwego specjalistę. Osobom z objawami przetrenowania częściej proponujemy <Link href="/wlewy-witaminowe/kroplowka-sport-i-regeneracja/">kroplówkę Sport i regeneracja</Link>, a przy spadku energii bez komponentu intymnego <Link href="/wlewy-witaminowe/kroplowka-energetyczna/">kroplówkę energetyczną</Link>.</p>
      </>
    ),
  },
  {
    title: 'Przebieg kroplówki na libido w Bas Clinic we Wrocławiu',
    tocLabel: 'Przebieg wizyty',
    content: (
      <>
        <p>Wizyta w Bas Clinic przy {CLINIC.address.street} we Wrocławiu trwa łącznie około 75-80 minut. Sam wlew zajmuje godzinę, reszta to kwalifikacja lekarska i krótka obserwacja po zabiegu.</p>
        <h3>Etapy wizyty</h3>
        <ol>
          <li><strong>Kwalifikacja lekarska</strong>: wywiad o chorobach nerek i serca, zaburzeniach rytmu, lekach (w tym przeciwzakrzepowych i przeciwdepresyjnych), a także rozmowa o tym, od kiedy i w jakich okolicznościach pojawił się spadek libido.</li>
          <li><strong>Przygotowanie wlewu</strong>: roztwór powstaje na miejscu, bezpośrednio przed podaniem, zgodnie z wybranym wariantem.</li>
          <li><strong>Założenie kaniuli</strong>: cienki wenflon w żyle przedramienia, dyskomfort porównywalny z pobraniem krwi.</li>
          <li><strong>Wlew właściwy</strong>: około 60 minut w fotelu; można czytać lub pracować na laptopie. Uczucie ciepła przy podawaniu magnezu jest normalne.</li>
          <li><strong>Usunięcie kaniuli i obserwacja</strong>: kontrola samopoczucia i opatrunek.</li>
        </ol>
        <p>Po wlewie nie ma rekonwalescencji. Pacjent może prowadzić samochód i wrócić do pracy. Rozmowa o sferze intymnej jest objęta tajemnicą lekarską jak każda inna część wywiadu. Wizytę umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i bezpieczeństwo wlewu z magnezem',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>O profilu bezpieczeństwa kroplówki na libido decydują objętość płynu i magnez obecny w każdym wariancie. Exclusive dokłada jedno zastrzeżenie związane z koenzymem Q10. W Bas Clinic nikt nie otrzymuje wlewu bez kwalifikacji lekarskiej.</p>
        <h3>Przeciwwskazania bezwzględne</h3>
        <ul>
          <li><strong>Ciężka niewydolność nerek</strong>: magnez i potas z Optilyte kumulują się przy upośledzonym wydalaniu.</li>
          <li><strong>Hipermagnezemia i hiperkaliemia</strong> stwierdzone w badaniach.</li>
          <li><strong>Bradykardia i blok przedsionkowo-komorowy</strong>: magnez zwalnia przewodzenie w sercu.</li>
          <li><strong>Miastenia</strong>: magnez osłabia przewodnictwo nerwowo-mięśniowe.</li>
          <li><strong>Nadwrażliwość</strong> na którykolwiek składnik wlewu.</li>
        </ul>
        <h3>Przeciwwskazania względne, o których decyduje lekarz</h3>
        <ul>
          <li><strong>Niewyrównana niewydolność serca i niekontrolowane nadciśnienie</strong>: objętość płynów obciąża układ krążenia.</li>
          <li><strong>Leki obniżające ciśnienie</strong>: magnez nasila ich działanie.</li>
          <li><strong>Acenokumarol lub warfaryna</strong>: dotyczy wyłącznie Exclusive; lekarz wybiera wariant bez koenzymu Q10.</li>
          <li><strong>Ciąża i karmienie piersią</strong>: wlew tylko po indywidualnej ocenie wskazań.</li>
        </ul>
        <p>Możliwe działania niepożądane to uczucie gorąca, zaczerwienienie twarzy i przejściowy spadek ciśnienia przy magnezie oraz ból w miejscu wkłucia. Gabinet dysponuje zestawem przeciwwstrząsowym, a wlew przebiega pod nadzorem personelu medycznego.</p>
      </>
    ),
  },
  {
    title: 'Częstotliwość wlewów i realistyczne oczekiwania',
    tocLabel: 'Częstotliwość i efekty',
    content: (
      <>
        <p>Kroplówka na libido nie działa jak lek na potencję i nie daje efektu po jednym podaniu. To uzupełnienie zasobów, którego wynik zależy od stanu wyjściowego i od tego, czy rzeczywista przyczyna spadku libido została zaopiekowana.</p>
        <h3>Typowy schemat stosowania</h3>
        <ol>
          <li><strong>Seria wstępna</strong>: 4 wlewy w odstępach tygodniowych, jeśli lekarz stwierdzi wskazania.</li>
          <li><strong>Wlewy podtrzymujące</strong>: co 2-4 tygodnie, zależnie od obciążenia i stylu życia.</li>
          <li><strong>Wlew doraźny</strong>: pojedynczo w okresie zmęczenia lub rekonwalescencji.</li>
        </ol>
        <h3>Czego można się spodziewać</h3>
        <ul>
          <li>Przy odwodnieniu lub niedoborze magnezu pacjenci zgłaszają mniej zmęczenia i lepszy sen już po pierwszych wlewach; to pośrednio wpływa na sferę intymną.</li>
          <li>U osoby bez niedoborów różnica jest niewielka, a sen, aktywność fizyczna i ograniczenie alkoholu dają więcej niż kolejna kroplówka.</li>
          <li>Brak poprawy po serii to sygnał, że przyczyna leży gdzie indziej: w hormonach, naczyniach, lekach lub psychice. Wtedy lekarz kieruje do diagnostyki.</li>
        </ul>
        <p>Wlew nie zastępuje leczenia chorób przewlekłych, terapii hormonalnej, psychoterapii ani rozmowy z partnerem. Informujemy o tym uczciwie, bo obietnica szybkiego efektu opóźniłaby właściwe rozpoznanie.</p>
      </>
    ),
  },
  {
    title: 'Cena kroplówki na libido we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Kroplówka na libido w Bas Clinic we Wrocławiu kosztuje od {TIER_PRICE.standard} zł. Wariant Standard to {TIER_PRICE.standard} zł, VIP {TIER_PRICE.vip} zł, a Exclusive {TIER_PRICE.exclusive} zł. Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe, godzinny wlew pod opieką personelu i obserwację po zabiegu.</p>
        <h3>Co zawiera cena</h3>
        <ul>
          <li>kwalifikację lekarską i wywiad zdrowotny, w tym o lekach,</li>
          <li>produkty lecznicze zgodne z wybranym wariantem,</li>
          <li>kaniulę, zestaw do wlewów i opatrunek,</li>
          <li>opiekę personelu przez cały czas trwania wlewu,</li>
          <li>kontrolę samopoczucia przed wyjściem z kliniki.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizyta nie wymaga skierowania. Warto zabrać aktualne wyniki badań: morfologię, jonogram, kreatyninę, a jeśli są, także hormony. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>. Pozostałe kroplówki i warianty opisujemy na stronie <Link href="/wlewy-witaminowe/">wlewów witaminowych</Link> oraz w <Link href="/cennik/">cenniku</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O wskazaniach i wariancie wlewu decyduje lekarz podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Clayton A.H., Goldstein I., Kim N.N. i wsp. The International Society for the Study of Women&apos;s Sexual Health Process of Care for Management of Hypoactive Sexual Desire Disorder in Women. Mayo Clinic Proceedings 2018; 93(4): 467-487. PMID 29545008.</li>
        <li>Corona G., Rastrelli G., Maseroli E., Forti G., Maggi M. Sexual function of the ageing male. Best Practice &amp; Research Clinical Endocrinology &amp; Metabolism 2013; 27(4): 581-601. PMID 24054932.</li>
        <li>Shamloul R., Ghanem H. Erectile dysfunction. Lancet 2013; 381(9861): 153-165. PMID 23040455.</li>
        <li>Hamilton L.D., Meston C.M. Chronic stress and sexual function in women. Journal of Sexual Medicine 2013; 10(10): 2443-2454. PMID 23841462.</li>
        <li>de Baaij J.H.F., Hoenderop J.G.J., Bindels R.J.M. Magnesium in man: implications for health and disease. Physiological Reviews 2015; 95(1): 1-46. PMID 25540137.</li>
        <li>Pickering G., Mazur A., Trousselard M. i wsp. Magnesium Status and Stress: The Vicious Circle Concept Revisited. Nutrients 2020; 12(12): 3672. PMID 33260549.</li>
        <li>Kennedy D.O. B Vitamins and the Brain: Mechanisms, Dose and Efficacy. A Review. Nutrients 2016; 8(2): 68. PMID 26828517.</li>
        <li>Hernández-Camacho J.D., Bernier M., López-Lluch G., Navas P. Coenzyme Q10 Supplementation in Aging and Disease. Frontiers in Physiology 2018; 9: 44. PMID 29459830.</li>
        <li>Spigset O. Reduced effect of warfarin caused by ubidecarenone. Lancet 1994; 344(8933): 1372-1373. PMID 7968059.</li>
        <li>Engelsen J., Nielsen J.D., Winther K. Effect of coenzyme Q10 and Ginkgo biloba on warfarin dosage in stable, long-term warfarin treated outpatients. A randomised, double blind, placebo-crossover trial. Thrombosis and Haemostasis 2002; 87(6): 1075-1076. PMID 12083489.</li>
        <li>Charakterystyka Produktu Leczniczego Optilyte, roztwór do infuzji (Fresenius Kabi).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Czy kroplówka na libido zawiera hormony lub leki na potencję?',
    answer:
      'Nie. Wlew zawiera płyn wieloelektrolitowy Optilyte i magnez, a w wyższych wariantach kompleks witamin B albo koenzym Q10. Nie ma w nim testosteronu, innych hormonów ani leków na zaburzenia erekcji. To wsparcie nawodnienia i metabolizmu energetycznego, nie terapia zaburzeń seksualnych.',
  },
  {
    question: 'Czy kroplówka na libido jest tylko dla mężczyzn?',
    answer:
      'Nie. Podajemy ją kobietom i mężczyznom. Składniki działają niezależnie od płci: uzupełniają płyny, elektrolity, magnez i witaminy, których niedobór obniża energię i nastrój. Przyczyny spadku libido u obu płci lekarz omawia podczas kwalifikacji.',
  },
  {
    question: 'Jak długo trwa kroplówka na libido?',
    answer:
      'Sam wlew trwa około 60 minut. Z kwalifikacją lekarską i krótką obserwacją po zabiegu wizyta w Bas Clinic zajmuje około 75-80 minut. Po wlewie można prowadzić samochód i wrócić do pracy.',
  },
  {
    question: 'Kiedy widać efekty i jak często powtarzać wlew?',
    answer:
      'Wlew nie działa od razu i nie u każdego. Przy odwodnieniu lub niedoborze magnezu pacjenci zgłaszają mniej zmęczenia po pierwszych wlewach. Lekarz zwykle proponuje serię 4 wlewów co tydzień, potem co 2-4 tygodnie. Brak poprawy po serii to sygnał do diagnostyki hormonalnej lub innej.',
  },
  {
    question: 'Przyjmuję leki przeciwzakrzepowe. Czy mogę wybrać wariant Exclusive?',
    answer:
      'Przy acenokumarolu lub warfarynie lekarz proponuje wariant Standard albo VIP. Dane o wpływie koenzymu Q10 na działanie tych leków są sprzeczne, dlatego w Exclusive, który go zawiera, nie podejmujemy tego ryzyka. Warto przynieść listę wszystkich przyjmowanych leków.',
  },
  {
    question: 'Gdzie we Wrocławiu podać kroplówkę na libido?',
    answer: `Kroplówkę na libido podajemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}, a wariant Standard kosztuje ${TIER_PRICE.standard} zł.`,
  },
];

export default function KroplowkaNaLibidoPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Kroplówka na libido Wrocław"
      heroSubtitle="Wlewy witaminowe"
      heroDescription="Wlew dożylny z elektrolitami i magnezem, w wyższych wariantach z witaminami B lub koenzymem Q10. Bez hormonów, dla kobiet i mężczyzn, po kwalifikacji lekarskiej w Bas Clinic we Wrocławiu."
      slug="wlewy-witaminowe/kroplowka-na-libido"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
