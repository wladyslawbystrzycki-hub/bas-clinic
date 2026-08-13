import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Konturowanie żuchwy i brody Wrocław',
  description: 'Konturowanie żuchwy i brody we Wrocławiu: modelowanie dolnej twarzy kwasem hialuronowym. O wskazaniach i przeciwwskazaniach decyduje konsultacja lekarska.',
  path: '/medycyna-estetyczna/konturowanie-zuchwy/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Konturowanie linii żuchwy i brody' },
];

const FAQ = [
  {
    question: 'Jak długo utrzymują się efekty konturowania żuchwy i brody?',
    answer: 'Efekt jest widoczny od razu, choć przez pierwsze dni nakłada się na niego obrzęk, a kształt finalny ocenia się po około dwóch, trzech tygodniach. Twarde, podporowe wypełniacze w tej okolicy utrzymują się kierunkowo do około roku, a u części osób dłużej. Trwałość zależy od preparatu, ilości, metabolizmu i ruchomości obszaru. Efekt można skorygować lub rozpuścić hialuronidazą.',
  },
  {
    question: 'Kwas hialuronowy czy botoks na żuchwę, co wybrać?',
    answer: 'To dwa przeciwstawne narzędzia. Kwas hialuronowy dodaje objętość i podporę, więc stosuje się go przy słabej, niewyraźnej lub cofniętej żuchwie i brodzie. Toksyna botulinowa podana w mięśnie żwacze zwęża dolną twarz, więc sprawdza się przy przeroście żwaczy, masywnej kwadratowej twarzy oraz przy bruksizmie. O wyborze decyduje przyczyna problemu ustalana na konsultacji.',
  },
  {
    question: 'Czy konturowanie żuchwy boli i czy jest bezpieczne?',
    answer: 'Przed zabiegiem stosuje się krem znieczulający, a podanie w głębokie warstwy bywa mniej odczuwalne niż przy płytkich iniekcjach. Poważne powikłania są rzadkie, ale linia żuchwy i broda są gęsto unaczynione, dlatego o bezpieczeństwie decydują znajomość anatomii, technika podania (często kaniulą) i doświadczenie lekarza. Konsultacja i wywiad poprzedzają każdy zabieg.',
  },
  {
    question: 'Czy kwas hialuronowy pomoże na podwójny podbródek?',
    answer: 'Najczęściej nie. Podwójny podbródek to zwykle nadmiar tłuszczu podbródkowego, a nie brak objętości, więc wskazane są wtedy inne metody, takie jak lipoliza iniekcyjna lub liposukcja, a przy wiotkiej skórze zabiegi napinające. Wypełniacz hialuronowy dodaje objętość i w takiej sytuacji może wręcz pogłębić ciężkość dolnej twarzy. Plan ustala się indywidualnie.',
  },
  {
    question: 'Jakie są przeciwwskazania do modelowania żuchwy kwasem hialuronowym?',
    answer: 'Do przeciwwskazań należą aktywne infekcje lub stany zapalne skóry w miejscu zabiegu, alergia na składniki preparatu, ciąża i karmienie piersią, a także, jako przeciwwskazania względne, choroby autoimmunologiczne, zaburzenia krzepnięcia, choroba nowotworowa w trakcie leczenia oraz wcześniejsze powikłania po wypełniaczach. Ostateczną kwalifikację przeprowadza lekarz na podstawie wywiadu.',
  },
  {
    question: 'Gdzie wykonać konturowanie żuchwy i brody we Wrocławiu?',
    answer: `Konturowanie linii żuchwy i brody wykonujemy w ${CLINIC.name} przy ${CLINIC.address.street} we Wrocławiu, po konsultacji i kwalifikacji u lekarza medycyny estetycznej. Atutem jest dwoisty profil kliniki, czyli stomatologia i medycyna estetyczna, co pozwala uwzględnić zgryz, bruksizm i ewentualny przerost żwaczy przy planowaniu dolnej twarzy. Wizytę umówisz pod ${CLINIC.phone} (rejestracja w dni powszednie ${CLINIC.hours.weekdays}).`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Na czym polega konturowanie linii żuchwy i brody kwasem hialuronowym',
    tocLabel: 'Co to jest',
    content: (
      <>
        <p>Konturowanie linii żuchwy i brody to zabieg medycyny estetycznej, w którym lekarz podaje usieciowany <strong>kwas hialuronowy</strong> o twardej, podporowej konsystencji wzdłuż trzonu i kąta żuchwy oraz w okolicę brody. Celem nie jest wygładzanie zmarszczek, tylko odbudowa struktury i wyrazistości dolnej części twarzy.</p>
        <p>Preparat działa tu jak rusztowanie wsparte o kość. Pozwala wyostrzyć i wydłużyć linię żuchwy, dodać projekcję cofniętej brodzie (retrogenia), wyrównać niewielkie asymetrie i poprawić profil oraz owal twarzy. To podejście opisuje się czasem jako „rzeźbienie&quot; dolnej twarzy, bo efekt zależy od precyzyjnego rozmieszczenia objętości, a nie od jej ilości.</p>
        <p>Sama metoda ma mocne zaplecze regulacyjne: pierwszy wypełniacz hialuronowy z aprobatą FDA dedykowaną linii żuchwy zarejestrowano w 2022 roku, a preparat do augmentacji brody w 2020 roku (aprobaty FDA, 2022 i 2020). To, czym jest kwas hialuronowy, jak nawilża i stymuluje skórę oraz czym różnią się jego rodzaje i stopnie usieciowania, opisujemy szerzej na stronie <Link href="/medycyna-estetyczna/wypelniacze-ha/">wypełniaczy kwasem hialuronowym</Link>. Tutaj skupiamy się na zastosowaniu w dolnej twarzy.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo jest zabieg: wskazania i różne cele u kobiet i mężczyzn',
    tocLabel: 'Wskazania i cele',
    content: (
      <>
        <p>Konturowanie żuchwy i brody rozważa się, gdy dolna część twarzy jest słabo zaznaczona lub niezharmonijna. Sama anatomia kostna, a nie tylko wiek, często decyduje o tym, czy zabieg ma sens.</p>
        <p>Najczęstsze wskazania:</p>
        <ul>
          <li>niewyraźna, zlewająca się z szyją linia żuchwy,</li>
          <li>cofnięta lub zbyt mała broda (retrogenia, brak projekcji w profilu),</li>
          <li>asymetria dolnej twarzy,</li>
          <li>wczesne opadanie owalu i zarysowujące się obwisłości policzków (tzw. chomiki),</li>
          <li>chęć zrównoważenia proporcji po modelowaniu ust lub środkowej twarzy.</li>
        </ul>
        <p>Cel estetyczny wyraźnie różni się między płciami, co wynika z budowy kości. Broda u mężczyzn jest zwykle szersza i bardziej kwadratowa, a u kobiet węższa i lekko spiczasta. Dobry plan respektuje tę różnicę, bo przeciążenie brody u kobiety grozi maskulinizacją rysów.</p>
        <table>
          <tbody>
            <tr>
              <th>Cecha</th>
              <th>Cel u kobiet</th>
              <th>Cel u mężczyzn</th>
            </tr>
            <tr>
              <td>Kształt brody</td>
              <td>węższa, lekko spiczasta, miękka</td>
              <td>szersza, bardziej kwadratowa</td>
            </tr>
            <tr>
              <td>Kąt żuchwy</td>
              <td>subtelnie zaznaczony, owal w kształcie litery V</td>
              <td>wyraźny, mocny kąt</td>
            </tr>
            <tr>
              <td>Nadrzędny cel</td>
              <td>harmonia i odmłodzenie owalu</td>
              <td>definicja i wyrazisty rys dolnej twarzy</td>
            </tr>
          </tbody>
        </table>
        <p>Konturowanie często planuje się razem z innymi zabiegami harmonizującymi twarz, na przykład z <Link href="/medycyna-estetyczna/modelowanie-ust/">modelowaniem ust</Link>, tak aby proporcje dolnej twarzy pozostały zrównoważone.</p>
      </>
    ),
  },
  {
    title: 'Dobór preparatu: dlaczego do żuchwy i brody trzeba twardego kwasu hialuronowego',
    tocLabel: 'Dobór preparatu',
    content: (
      <>
        <p>Nie każdy kwas hialuronowy nadaje się do dolnej twarzy. Żuchwa i broda to obszary podporowe, więc preparat musi mieć dużą odporność na odkształcenie i zdolność do utrzymania pionowej projekcji, a nie tylko delikatnie wypełniać.</p>
        <p>O tych właściwościach decyduje reologia żelu. Twardość opisuje parametr <strong>G&apos;</strong> (moduł sprężystości), a spójność, czyli odporność na rozpływanie się pod naciskiem tkanek, opisuje kohezja. Do podbudowy kąta żuchwy i brody dobiera się żele o wysokim G&apos;, twarde i sprężyste, ponieważ miękkie wypełniacze przeznaczone do drobnych zmarszczek rozpłynęłyby się i nie dałyby trwałego konturu.</p>
        <p>Tam, gdzie potrzebna jest mocniejsza podpora, alternatywą bywa hydroksyapatyt wapnia, materiał o działaniu stymulującym, choć w konturowaniu kwasem hialuronowym podstawowym narzędziem pozostaje twardy, usieciowany żel. Szczegóły rodzajów, gęstości i sieciowania samego kwasu hialuronowego znajdziesz na stronie <Link href="/medycyna-estetyczna/wypelniacze-ha/">wypełniaczy HA</Link>.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega zabieg konturowania żuchwy krok po kroku',
    tocLabel: 'Przebieg zabiegu',
    content: (
      <>
        <p>Zabieg poprzedza konsultacja, podczas której lekarz analizuje proporcje twarzy, profil i symetrię oraz kwalifikuje pacjenta. Sam zabieg jest jednodniowy i zwykle trwa kilkadziesiąt minut, zależnie od zakresu.</p>
        <ol>
          <li><strong>Analiza i plan.</strong> Lekarz ocenia budowę kostną, ruchomość tkanek i cel estetyczny, a następnie wyznacza punkty podania.</li>
          <li><strong>Przygotowanie.</strong> Skórę się oczyszcza i odkaża, a na obszar zabiegu nakłada krem znieczulający.</li>
          <li><strong>Podanie preparatu.</strong> Na kącie żuchwy i na brodzie często stosuje się depozyty nadokostnowe (bolus blisko kości), a wzdłuż trzonu żuchwy podanie linijne. Lekarz wybiera igłę lub kaniulę, przy czym tępa kaniula wiąże się z mniejszym ryzykiem siniaków i z mniejszym bólem.</li>
          <li><strong>Modelowanie.</strong> Lekarz rozprowadza i formuje preparat manualnie, kontrolując symetrię na bieżąco.</li>
          <li><strong>Zalecenia.</strong> Pacjent otrzymuje wskazówki pielęgnacyjne i, jeśli trzeba, termin kontroli.</li>
        </ol>
        <p>Efekt jest częściowo widoczny od razu, ale przez pierwsze dni nakłada się na niego obrzęk, dlatego ostateczny kształt ocenia się później.</p>
      </>
    ),
  },
  {
    title: 'Kwas hialuronowy czy toksyna na żwacze: dwa przeciwstawne cele w żuchwie',
    tocLabel: 'HA czy botoks na żuchwę',
    content: (
      <>
        <p>To rozróżnienie najczęściej myli pacjentów. Kwas hialuronowy i toksyna botulinowa działają w żuchwie w przeciwnych kierunkach, więc nie są wymienne, a wybór zależy od przyczyny problemu.</p>
        <p>Kwas hialuronowy <strong>dodaje objętość</strong> i podporę. Stosuje się go, gdy żuchwa jest słaba, niewyraźna lub broda cofnięta, czyli gdy brakuje struktury. Toksyna botulinowa podana w przerośnięte mięśnie <strong>żwacze</strong> działa odwrotnie, czyli rozluźnia mięsień i z czasem zmniejsza jego masę, przez co dolna twarz staje się węższa. To narzędzie przy masywnej, kwadratowej twarzy i przy przeroście żwaczy, który bywa związany z bruksizmem (Kundu i wsp., 2022). Oba podejścia bywają łączone w jednym planie, ale odpowiadają na różne potrzeby (Sundaram i wsp., 2016).</p>
        <table>
          <tbody>
            <tr>
              <th>Cecha</th>
              <th>Kwas hialuronowy</th>
              <th>Toksyna na żwacze</th>
            </tr>
            <tr>
              <td>Mechanizm</td>
              <td>dodaje objętość i podporę</td>
              <td>rozluźnia mięsień, zmniejsza jego masę</td>
            </tr>
            <tr>
              <td>Wpływ na kształt</td>
              <td>wyostrza i dodaje projekcję</td>
              <td>zwęża i wyszczupla dolną twarz</td>
            </tr>
            <tr>
              <td>Typowe wskazanie</td>
              <td>słaba lub cofnięta żuchwa i broda</td>
              <td>przerost żwacza, „kwadratowa&quot; twarz, bruksizm</td>
            </tr>
            <tr>
              <td>Czas do efektu</td>
              <td>od razu, finalnie po kilku tygodniach</td>
              <td>stopniowo, w ciągu kilku tygodni</td>
            </tr>
          </tbody>
        </table>
        <p>Protokół, dawkowanie i technikę podania toksyny w mięsień żwacz, w tym koncepcję tak zwanego liftingu Nefertiti wzdłuż linii żuchwy, omawiamy na stronie <Link href="/medycyna-estetyczna/redukcja-zmarszczek-botox/">redukcji zmarszczek toksyną botulinową</Link>.</p>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo, strefy ryzyka i przeciwwskazania',
    tocLabel: 'Bezpieczeństwo i przeciwwskazania',
    content: (
      <>
        <p>Konturowanie żuchwy i brody jest zabiegiem o korzystnym profilu bezpieczeństwa, ale nie jest pozbawione ryzyka, a dolna twarz należy do okolic wymagających szczególnej ostrożności. Poważne reakcje są rzadkie, a o ich unikaniu decydują technika podania, znajomość anatomii i dobór pacjenta (Global Aesthetics Consensus, Signorini i wsp., 2016).</p>
        <p>Najważniejsza jest anatomia naczyniowa. Tętnica twarzowa przebiega przez dolny brzeg żuchwy tuż przed mięśniem żwaczem, a okolica brody jest zaopatrywana przez gęstą sieć naczyń, w pobliżu biegnie też nerw brzeżny żuchwy (Hazani i wsp., 2011; Clark i wsp., 2023). Najgroźniejszym powikłaniem jest niezamierzone podanie do naczynia, które może prowadzić do zamknięcia jego światła i niedokrwienia tkanek. Dlatego liczą się powolna iniekcja, kontrola i często wybór tępej kaniuli, która zmniejsza to ryzyko, choć go nie eliminuje.</p>
        <p>Do typowych, przemijających działań niepożądanych należą zasinienie, obrzęk, tkliwość i zaczerwienienie. Rzadziej pojawiają się guzki lub opóźnione reakcje zapalne. Istotną zaletą kwasu hialuronowego jest odwracalność, bo w razie potrzeby preparat można rozpuścić enzymem hialuronidazą. Mechanizm odwracania i pełen profil bezpieczeństwa kwasu hialuronowego opisujemy na stronie <Link href="/medycyna-estetyczna/wypelniacze-ha/">wypełniaczy HA</Link>.</p>
        <h3>Przeciwwskazania do konturowania żuchwy: bezwzględne i względne</h3>
        <table>
          <tbody>
            <tr>
              <th>Bezwzględne</th>
              <th>Względne</th>
            </tr>
            <tr>
              <td>aktywna infekcja lub stan zapalny skóry w miejscu zabiegu</td>
              <td>choroby autoimmunologiczne</td>
            </tr>
            <tr>
              <td>alergia na składniki preparatu</td>
              <td>zaburzenia krzepnięcia lub leki przeciwkrzepliwe</td>
            </tr>
            <tr>
              <td>ciąża i karmienie piersią (postępowanie ostrożnościowe)</td>
              <td>choroba nowotworowa w trakcie leczenia</td>
            </tr>
            <tr>
              <td>nieuregulowane choroby ogólnoustrojowe</td>
              <td>wcześniejsze powikłania po wypełniaczach</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    title: 'Trwałość efektu, pielęgnacja po zabiegu i granice metody',
    tocLabel: 'Trwałość i granice',
    content: (
      <>
        <p>Efekt konturowania jest częściowo widoczny od razu, a kształt finalny ocenia się po ustąpieniu obrzęku, zwykle po około dwóch, trzech tygodniach. Twarde wypełniacze w tej okolicy utrzymują się kierunkowo do około roku, a w części obserwacji dłużej, co potwierdzają dane z badań rejestracyjnych preparatów do żuchwy i brody.</p>
        <p>Przez kilka dni po zabiegu warto unikać silnego nacisku i masowania okolicy, intensywnego wysiłku, sauny i solarium oraz alkoholu, bo sprzyjają one obrzękowi i zasinieniom. Realistyczne oczekiwania są ważne, bo nadmierne wypełnianie nie poprawia konturu, a może dać sztuczny, przeciążony wygląd dolnej twarzy.</p>
        <h3>Czego konturowanie żuchwy kwasem hialuronowym nie zrobi</h3>
        <p>Kwas hialuronowy ma jasne granice. Nie usuwa nadmiaru tłuszczu, więc nie jest metodą na podwójny podbródek, który wynika zwykle z tkanki tłuszczowej, a nie z braku objętości. W takim przypadku wypełniacz mógłby wręcz pogłębić ciężkość dolnej twarzy. Konturowanie nie zastąpi też leczenia chirurgicznego, takiego jak genioplastyka czy osteotomia, przy dużych wadach kostnych lub zgryzowych, które wymagają konsultacji chirurga szczękowo-twarzowego. Dla okolicy szyi i dekoltu właściwsze są inne zabiegi, opisane przy <Link href="/medycyna-estetyczna/redukcja-drobnych-zmarszczek-ha/">redukcji drobnych zmarszczek kwasem hialuronowym</Link>.</p>
      </>
    ),
  },
  {
    title: 'Kwalifikacja, cena i konturowanie żuchwy we Wrocławiu',
    tocLabel: 'Konsultacja i cena',
    content: (
      <>
        <p>Dobry efekt zaczyna się od kwalifikacji. Lekarz ocenia, czy problem wynika z braku objętości (wtedy pomaga kwas hialuronowy), z przerostu mięśnia (wtedy rozważa się toksynę), czy z nadmiaru tłuszczu lub wady kostnej, które wymagają innych metod. To rozróżnienie chroni przed niepotrzebnym lub nietrafionym zabiegiem.</p>
        <p>W <Link href="/medycyna-estetyczna/">medycynie estetycznej</Link> Bas Clinic konturowanie dolnej twarzy wykonuje lekarz po konsultacji. Atutem jest dwoisty profil kliniki, czyli stomatologia i medycyna estetyczna, dzięki czemu przy planowaniu można uwzględnić zgryz, bruksizm i ewentualny przerost żwaczy, co bezpośrednio dotyczy kształtu żuchwy.</p>
        <p>Cena zależy od zakresu i liczby potrzebnych mililitrów preparatu, dlatego ustala się ją indywidualnie. Aktualne widełki znajdziesz w <Link href="/cennik/">cenniku</Link>, a wizytę umówisz przez <Link href="/rejestracja/">rejestrację</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O wskazaniach, doborze metody i przeciwwskazaniach decyduje lekarz po badaniu i wywiadzie.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Burgess C. i wsp. Odbudowa linii żuchwy wypełniaczem HA VYC-25L, satysfakcja i utrzymanie efektu (badanie rejestracyjne). 2024 (PMID 39141784).</li>
        <li>Rivkin A. i wsp. Odbudowa definicji linii żuchwy żelem HA VYC-25L, randomizowane badanie kontrolowane. 2024 (PMID 38985546).</li>
        <li>Beer K. i wsp. Augmentacja brody wypełniaczem HA VYC-20L. 2021 (PMID 33347003).</li>
        <li>Dayan S. i wsp. Ocena „na żywo&quot; vs fotograficzna po VYC-20L w augmentacji brody. 2024 (PMID 37966371).</li>
        <li>Xie Y. i wsp. VYC-25L w korekcji retruzji brody i poprawie żuchwy (kohorta chińska). 2025 (PMID 40246546).</li>
        <li>Ou Y. i wsp. Nieoperacyjna augmentacja brody HA, przegląd systematyczny. 2023 (PMID 37036507).</li>
        <li>Mataro I. i wsp. Nieoperacyjna augmentacja brody HA, przegląd systematyczny. 2024 (PMID 37814037).</li>
        <li>Al-Khafaji Z. i wsp. Wypełniacze HA w korekcji brody, przegląd wyników zgłaszanych przez pacjentów. 2023 (PMID 38098909).</li>
        <li>Swaminathan A. i wsp. Wypełniacz HA przy niedoborze objętości twarzy, retruzji brody i utracie konturu żuchwy, obserwacja 12-miesięczna. 2025 (PMID 40837210).</li>
        <li>de Maio M. MD Codes, metodyczne podejście do iniekcji HA na twarzy. 2021 (PMID 32445044).</li>
        <li>Segurado-Miravalles G. i wsp. Konsensus ekspercki dotyczący zastosowania HA VYC-25L. 2021 (PMID 34460984).</li>
        <li>Bertossi D. i wsp. Strukturalne leczenie wypełniaczem HA VYC-25L, rozważania eksperckie. 2025 (PMID 39591976).</li>
        <li>van Loghem J. i wsp. Konsensus dotyczący wypełniaczy HA, zasady dobrej praktyki we wskazaniach twarzowych. 2021 (PMID 34526796).</li>
        <li>Signorini M. i wsp. Global Aesthetics Consensus, unikanie i postępowanie w powikłaniach wypełniaczy HA. 2016 (PMID 27219265).</li>
        <li>Urdiales-Gálvez F. i wsp. Zapobieganie powikłaniom wypełniaczy, konsensus ekspercki. 2017 (PMID 28411354).</li>
        <li>Urdiales-Gálvez F. i wsp. Leczenie powikłań wypełniaczy tkanek miękkich, konsensus ekspercki. 2018 (PMID 29305643).</li>
        <li>Sundaram H. i wsp. Global Aesthetics Consensus, wypełniacze HA i toksyna botulinowa, leczenie skojarzone. 2016 (PMID 27119917).</li>
        <li>Chakhachiro D. i wsp. Czynniki ryzyka okluzji naczyniowych po wypełniaczach, przegląd systematyczny i metaanaliza. 2025 (PMID 40406769).</li>
        <li>Alam M. i wsp. Częstość okluzji naczyniowych przy igle vs kaniuli. 2021 (PMID 33377939).</li>
        <li>Beer K. i wsp. Wypełniacze HA podawane kaniulą, randomizowane badanie split-face. 2023 (PMID 37038451).</li>
        <li>Hazani R. i wsp. Punkty orientacyjne dla uniknięcia uszkodzenia nerwu brzeżnego żuchwy. 2011 (PMID 21385737).</li>
        <li>Clark C.M. i wsp. Wypełniacze twarzy, anatomia, techniki iniekcji i powikłania. 2023 (PMID 37780674).</li>
        <li>Waked K. i wsp. Indywidualna anatomia tętnicza twarzy przy iniekcjach wypełniaczy. 2022 (PMID 35517577).</li>
        <li>Moradi A. i wsp. Nieoperacyjna augmentacja brody i żuchwy hydroksyapatytem wapnia i HA. 2019 (PMID 30943558).</li>
        <li>Sella-Tunis T. i wsp. Zmienność wielkości i kształtu brody u mężczyzn i kobiet, badanie CT. 2020 (PMID 32545912).</li>
        <li>de la Guardia C. i wsp. Charakterystyka reologiczna wypełniaczy HA a działanie produktu. 2022 (PMID 35114708).</li>
        <li>Carbone C. i wsp. Analiza reologiczna wypełniaczy HA do augmentacji brody. 2026 (PMID 41779101).</li>
        <li>Fang M. i wsp. Postępowanie w zajęciu tętnicy podbródkowej po iniekcji HA w okolicę brody. 2018 (PMID 29922566).</li>
        <li>Thanasarnaksorn W. i wsp. Martwica języka po powikłaniach naczyniowych po augmentacji brody HA. 2023 (PMID 36700378).</li>
        <li>Convery C. i wsp. Opóźnione guzki i ich leczenie po wypełniaczach HA. 2021 (PMID 34840652).</li>
        <li>Funt D. Leczenie opóźnionych reakcji zapalnych na wypełniacze HA, podejście algorytmiczne. 2022 (PMID 35747256).</li>
        <li>Philipp-Dormston W.G. Odpowiedzialne stosowanie wypełniaczy HA, prewencja, diagnostyka, terapia. 2021 (PMID 33877378).</li>
        <li>Kundu N. i wsp. Toksyna botulinowa w przeroście mięśnia żwacza w konturowaniu dolnej twarzy. 2022 (PMID 35176198).</li>
        <li>Ferrillo M. i wsp. Rola toksyny botulinowej w przeroście mięśnia żwacza, przegląd. 2025 (PMID 39998108).</li>
        <li>de Souza Nobre B.B. i wsp. Wpływ toksyny botulinowej na przerost żwacza, badanie randomizowane. 2024 (PMID 38914688).</li>
        <li>Levy P.M. Lifting Nefertiti, technika konturowania linii żuchwy. 2007 (PMID 18236245).</li>
        <li>FDA, 2022. Zatwierdzenie Juvéderm Volux XC do poprawy utraty definicji linii żuchwy (dorośli powyżej 21 lat).</li>
        <li>FDA, 2020. Zatwierdzenie Juvéderm Voluma XC do augmentacji okolicy brody.</li>
        <li>FDA, 2015. Zatwierdzenie kwasu dezoksycholowego do redukcji tłuszczu podbródkowego.</li>
      </ol>
    ),
  },
];

export default function KonturowanieZuchwyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Konturowanie linii żuchwy i brody Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Modelowanie i definiowanie dolnej partii twarzy kwasem hialuronowym, od linii żuchwy po projekcję brody. O doborze metody decyduje konsultacja lekarska."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/konturowanie-zuchwy"
    />
  );
}
