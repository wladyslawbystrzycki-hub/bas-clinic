import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Modelowanie i powiększanie ust Wrocław',
  description:
    'Modelowanie i powiększanie ust kwasem hialuronowym we Wrocławiu: techniki, bezpieczeństwo, trwałość i odwracalność. Zabieg wykonuje lekarz, po konsultacji.',
  path: '/medycyna-estetyczna/modelowanie-ust/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Modelowanie ust' },
];

const FAQ = [
  {
    question: 'Jak długo utrzymuje się efekt modelowania ust kwasem hialuronowym?',
    answer:
      'Efekt modelowania ust kwasem hialuronowym utrzymuje się zwykle od kilku do kilkunastu miesięcy. W metaanalizie pozostawało około 74% efektu po sześciu miesiącach i około 46% po roku. Czas jest indywidualny i zależy od preparatu, metabolizmu oraz ruchliwości warg, dlatego zabieg się okresowo powtarza.',
  },
  {
    question: 'Czy powiększanie ust kwasem hialuronowym boli?',
    answer:
      'Powiększanie ust bywa odczuwane jako dyskomfort, ale zabieg wykonuje się w znieczuleniu miejscowym (krem znieczulający), a sam żel najczęściej zawiera lidokainę. Wargi są dobrze unaczynione i unerwione, więc po zabiegu przez kilka dni możliwy jest obrzęk, tkliwość i siniaki.',
  },
  {
    question: 'Ile kwasu hialuronowego potrzeba na pierwszy raz w usta?',
    answer:
      'Na pierwszy zabieg modelowania ust często stosuje się mniejszą ilość, zwykle rzędu pół mililitra kwasu hialuronowego, aby ocenić efekt i zachować naturalny wygląd. Dokładną ilość lekarz dobiera indywidualnie na konsultacji, w zależności od celu zabiegu i budowy warg.',
  },
  {
    question: 'Czy kwas hialuronowy z ust można rozpuścić?',
    answer:
      'Tak. Kwas hialuronowy jest odwracalny: lekarz może go rozpuścić enzymem zwanym hialuronidazą. Stosuje się to przy nadkorekcie, guzkach, asymetrii lub migracji preparatu, a także ratunkowo przy powikłaniu naczyniowym. Tej możliwości nie dają wypełniacze trwałe (permanentne).',
  },
  {
    question: 'Jakie są przeciwwskazania do modelowania ust?',
    answer:
      'Przeciwwskazania do modelowania ust to między innymi ciąża i karmienie piersią, aktywna opryszczka lub inne zakażenie w okolicy ust, zaostrzenie chorób autoimmunologicznych, zaburzenia krzepnięcia oraz nadwrażliwość na kwas hialuronowy lub lidokainę. Skłonność do opryszczki należy zgłosić przed zabiegiem.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać modelowanie ust?',
    answer: `Modelowanie ust we Wrocławiu wykonujemy w Bas Clinic przy ${CLINIC.address.street}, ${CLINIC.address.city}. Zabieg prowadzi lekarz, co jest warunkiem bezpiecznego postępowania w razie powikłań. Termin umówisz pod numerem ${CLINIC.phone} lub przez stronę rejestracji; pracujemy od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Modelowanie ust kwasem hialuronowym: co to jest i jak działa',
    tocLabel: 'Co to jest',
    content: (
      <>
        <p>Modelowanie ust to zabieg medycyny estetycznej, w którym lekarz podaje w wargi usieciowany kwas hialuronowy, aby zmienić ich objętość, kształt i obrys. Kwas hialuronowy (HA) to cząsteczka naturalnie obecna w skórze, która wiąże wodę i nadaje tkankom jędrność oraz nawodnienie.</p>
        <p>W ustach używa się żelu <strong>usieciowanego</strong>: kwasu hialuronowego o trwalszej strukturze, który utrzymuje się w tkance przez wiele miesięcy. To odróżnia modelowanie ust od preparatów nieusieciowanych, stosowanych głównie do nawilżenia skóry (zobacz <Link href="/medycyna-estetyczna/skin-booster/">skin booster</Link>). Ogólne zasady działania i rodzaje wypełniaczy opisaliśmy szerzej przy <Link href="/medycyna-estetyczna/wypelniacze-ha/">wypełniaczach kwasem hialuronowym</Link>.</p>
        <h3>Powiększanie, wolumetria i korekta konturu to różne cele</h3>
        <p>Pod jednym hasłem „modelowanie ust&quot; kryje się kilka różnych zamierzeń. Powiększanie zwiększa objętość warg. Wolumetria odbudowuje zarys utracony z wiekiem. Korekta konturu podkreśla granicę czerwieni wargowej i łuk Kupidyna albo wyrównuje asymetrię. Cel ustala się na konsultacji, bo od niego zależą ilość preparatu i technika podania.</p>
        <p>Istotna cecha kwasu hialuronowego: jest <strong>odwracalny</strong>. W razie potrzeby można go rozpuścić enzymem (hialuronidazą), co opisujemy w dalszej części.</p>
      </>
    ),
  },
  {
    title: 'Wskazania: dla kogo jest zabieg i czego kwas hialuronowy nie zrobi',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Modelowanie ust kierujemy do osób, które chcą poprawić objętość, symetrię, obrys lub nawilżenie warg. To zabieg estetyczny, a nie leczniczy, więc decyzję podejmuje się po konsultacji i ocenie proporcji całej dolnej części twarzy.</p>
        <p>Typowe wskazania:</p>
        <ul>
          <li>wąskie, spłaszczone lub „znikające&quot; przy uśmiechu wargi,</li>
          <li>asymetria górnej lub dolnej wargi,</li>
          <li>nieczytelny zarys czerwieni wargowej i łuku Kupidyna,</li>
          <li>utrata objętości i opadające kąciki ust związane z wiekiem,</li>
          <li>suche, odwodnione wargi, które potrzebują nawilżenia.</li>
        </ul>
        <p>Drobne zmarszczki tuż przy granicy wargi (tak zwany kod kreskowy) bywają poprawiane przy okazji, ale zmarszczki okołoustne na większym obszarze leczy się innymi metodami (zobacz <Link href="/medycyna-estetyczna/redukcja-zmarszczek-ha/">redukcję zmarszczek kwasem hialuronowym</Link>).</p>
        <h3>Co modelowanie ust może, a czego nie</h3>
        <p>Uczciwe ustawienie oczekiwań jest częścią dobrego zabiegu. W metaanalizie 16 badań z randomizacją pełną satysfakcję z efektu zgłaszało około dwóch trzecich pacjentów (Wen i wsp. 2026), co oznacza, że dla części osób wynik nie spełnia w pełni wyobrażeń.</p>
        <ul>
          <li><strong>Realne do osiągnięcia:</strong> większa objętość, lepiej zarysowany kontur, wyrównanie umiarkowanej asymetrii, nawilżenie i subtelne uniesienie kącików.</li>
          <li><strong>Trudne lub niemożliwe samym wypełniaczem:</strong> zmiana ustawienia kości i zębów, korekta dużej asymetrii anatomicznej, trwała zmiana kształtu na lata.</li>
          <li><strong>Wymaga innych metod:</strong> nadmiernie odsłonięte dziąsła przy uśmiechu to <Link href="/medycyna-estetyczna/korekta-usmiechu-dziaslowego/">korekta uśmiechu dziąsłowego</Link>, a samo uniesienie wargi bez dodawania objętości daje raczej botoks („lip flip&quot;), o czym piszemy niżej.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Przebieg zabiegu i techniki: igła czy kaniula',
    tocLabel: 'Przebieg i techniki',
    content: (
      <>
        <p>Zabieg trwa zwykle od 20 do 40 minut i wykonuje się go w znieczuleniu miejscowym. Lekarz podaje kwas hialuronowy precyzyjnie w zaplanowane punkty, a technikę i preparat dobiera do anatomii oraz celu zabiegu, nie na odwrót.</p>
        <p>Przebieg krok po kroku:</p>
        <ol>
          <li>konsultacja, ocena proporcji oraz ustalenie celu i ilości preparatu,</li>
          <li>demakijaż i dezynfekcja skóry,</li>
          <li>znieczulenie (zwykle krem znieczulający, a sam żel najczęściej zawiera lidokainę),</li>
          <li>iniekcje kwasu hialuronowego igłą lub kaniulą,</li>
          <li>ocena symetrii, delikatne uformowanie i czasem schłodzenie.</li>
        </ol>
        <h3>Igła i kaniula to kompromis, nie konkurs</h3>
        <p>Lekarz może podawać preparat ostrą igłą albo tępo zakończoną kaniulą. Żadna z metod nie jest po prostu „lepsza&quot;: każda ma mocne i słabe strony, a wybór zależy od okolicy i planu.</p>
        <table>
          <tbody>
            <tr>
              <th>Cecha</th>
              <th>Igła</th>
              <th>Kaniula</th>
            </tr>
            <tr>
              <td>Precyzja przy samym konturze</td>
              <td>Bardzo wysoka</td>
              <td>Nieco mniejsza</td>
            </tr>
            <tr>
              <td>Ryzyko siniaków i obrzęku</td>
              <td>Większe</td>
              <td>Kierunkowo mniejsze</td>
            </tr>
            <tr>
              <td>Ryzyko nakłucia naczynia</td>
              <td>Większe</td>
              <td>Mniejsze (tępy koniec rozsuwa tkanki)</td>
            </tr>
            <tr>
              <td>Liczba wkłuć</td>
              <td>Więcej punktów</td>
              <td>Mniej wkłuć, większy zasięg z jednego</td>
            </tr>
          </tbody>
        </table>
        <p>Dane porównujące kaniulę z igłą pochodzą głównie z innych okolic twarzy (np. fałdów nosowo-wargowych), więc mniejsze ryzyko przy kaniuli w ustach traktujemy jako prawdopodobny kierunek, a nie pewnik. Niezależnie od narzędzia w ustach dobiera się miękki, kohezyjny żel o niższej twardości (niższym G prim), który wygląda naturalnie i nie tworzy twardych zgrubień.</p>
        <p>Nazwy technik („liniowa&quot;, „tenting&quot;, „Russian lips&quot;) opisują sposób rozłożenia preparatu. To warianty wykonania dobierane indywidualnie, a nie osobne, lepsze „produkty&quot;.</p>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo i powikłania: od łagodnych do zatoru naczyniowego',
    tocLabel: 'Bezpieczeństwo',
    content: (
      <>
        <p>Większość działań niepożądanych po modelowaniu ust jest łagodna i przemijająca: to obrzęk, zaczerwienienie, tkliwość i siniaki utrzymujące się zwykle kilka dni. W metaanalizach jakaś reakcja miejscowa pojawia się nawet u około połowy pacjentów, natomiast powikłania poważne są rzadkie (rzędu jednego procenta).</p>
        <table>
          <tbody>
            <tr>
              <th>Typ powikłania</th>
              <th>Przykłady</th>
              <th>Jak częste</th>
            </tr>
            <tr>
              <td>Wczesne, łagodne</td>
              <td>obrzęk, siniaki, tkliwość, zaczerwienienie</td>
              <td>Częste, ustępują w kilka dni</td>
            </tr>
            <tr>
              <td>Opóźnione zapalne</td>
              <td>guzki i odczyny zapalne (często 3-4 miesiące po zabiegu)</td>
              <td>Rzadkie</td>
            </tr>
            <tr>
              <td>Naczyniowe</td>
              <td>zamknięcie naczynia, niedokrwienie, w skrajnych przypadkach martwica</td>
              <td>Bardzo rzadkie, ale najgroźniejsze</td>
            </tr>
          </tbody>
        </table>
        <h3>Dlaczego zator naczyniowy to najważniejsze ryzyko</h3>
        <p>Najpoważniejszym powikłaniem jest zamknięcie naczynia (zator) przez nieumyślne podanie wypełniacza do tętnicy lub jej ucisk. Wargi są bogato unaczynione, dlatego ten temat traktujemy priorytetowo.</p>
        <ul>
          <li><strong>Mechanizm:</strong> żel blokuje przepływ krwi w tętnicy wargowej, co odcina dopływ tlenu do tkanki.</li>
          <li><strong>Wczesne objawy:</strong> nieproporcjonalnie silny ból, blednięcie, a następnie sinienie skóry, czasem już w pierwszych godzinach po zabiegu.</li>
          <li><strong>Liczy się czas:</strong> wytyczne eksperckie (np. CMAC, 2021) podkreślają, że szybkie rozpoznanie i podanie hialuronidazy decydują o uniknięciu trwałych następstw.</li>
        </ul>
        <p>Do rzadszych sytuacji należą opóźnione guzki zapalne (czasem wyzwalane infekcją) oraz reaktywacja opryszczki (HSV) u osób, które miewają nawroty. Pacjent ze skłonnością do opryszczki powinien zgłosić to przed zabiegiem, bo lekarz może zalecić profilaktykę przeciwwirusową.</p>
      </>
    ),
  },
  {
    title: 'Anatomia okolicy ust a kwalifikacja lekarza',
    tocLabel: 'Anatomia i kwalifikacja',
    content: (
      <>
        <p>Bezpieczeństwo modelowania ust w dużej mierze wynika ze znajomości anatomii naczyń. Tętnice wargowe (górna i dolna) biegną w pobliżu czerwieni wargowej, a badania obrazowe lokalizują je średnio na głębokości około pięciu milimetrów (Cotofana i wsp. 2020).</p>
        <p>Problem w tym, że ich przebieg jest bardzo zmienny osobniczo: nie istnieje jeden „bezpieczny&quot; punkt, który u każdego pacjenta zapewnia ominięcie naczynia. Lekarz musi więc łączyć wiedzę anatomiczną z oceną konkretnej twarzy, kontrolą głębokości i odpowiednią techniką.</p>
        <p>Na tym polega różnica między zabiegiem medycznym a tanim „powiększaniem ust&quot; wykonywanym poza gabinetem lekarskim. Osoba bez przygotowania medycznego nie rozpozna w porę zatoru naczyniowego ani nie ma dostępu do hialuronidazy, która jest leczeniem ratunkowym. Dlatego modelowanie ust powinno odbywać się u lekarza, w ramach <Link href="/medycyna-estetyczna/">medycyny estetycznej</Link> prowadzonej przez specjalistę.</p>
      </>
    ),
  },
  {
    title: 'Odwracalność: rola hialuronidazy',
    tocLabel: 'Odwracalność',
    content: (
      <>
        <p>Jedną z największych zalet kwasu hialuronowego jest odwracalność. W razie potrzeby lekarz może rozpuścić podany żel enzymem zwanym hialuronidazą, czego nie da się zrobić z wypełniaczami trwałymi (permanentnymi).</p>
        <p>Hialuronidazę stosuje się między innymi przy:</p>
        <ul>
          <li>nadkorekcie lub zbyt dużej objętości,</li>
          <li>widocznych guzkach albo asymetrii do skorygowania,</li>
          <li>przemieszczeniu (migracji) preparatu poza zaplanowany obszar,</li>
          <li>powikłaniu naczyniowym, gdzie działa jako leczenie ratunkowe.</li>
        </ul>
        <p>Dawkę i sposób podania ustala lekarz indywidualnie, bo zależą one od ilości i rodzaju wypełniacza. Sam enzym też nie jest obojętny: może wywołać reakcję alergiczną, dlatego również jego podanie należy do kompetencji medycznych. Możliwość szybkiego sięgnięcia po hialuronidazę to kolejny powód, dla którego usta modeluje się w gabinecie lekarskim.</p>
      </>
    ),
  },
  {
    title: 'Trwałość efektu, dolewki i naturalny rezultat',
    tocLabel: 'Trwałość i efekt',
    content: (
      <>
        <p>Efekt modelowania ust jest czasowy. Kwas hialuronowy stopniowo się wchłania, a wargi wracają do stanu wyjściowego, jeśli zabiegu się nie powtarza. W metaanalizie utrzymywało się około 74% efektu po sześciu miesiącach i około 46% po roku (Czumbel i wsp. 2021).</p>
        <p>W praktyce efekt w ustach utrzymuje się zwykle od kilku do kilkunastu miesięcy. Wargi to obszar ruchomy (mówienie, jedzenie, mimika), co sprzyja szybszemu wchłanianiu niż w okolicach mało ruchomych. Konkretny czas jest indywidualny i nie można go z góry określić co do miesiąca.</p>
        <h3>Jak uniknąć efektu „kaczych ust&quot;</h3>
        <p>Nienaturalny, „kaczy&quot; wygląd nie jest cechą samego kwasu hialuronowego, lecz najczęściej skutkiem przedawkowania, złej warstwy podania lub kumulacji preparatu przy zbyt częstych dolewkach. Rozsądne podejście to mniejsza ilość na start (często rzędu pół mililitra), ocena efektu i ewentualne uzupełnienie. Celem jest wynik, którego nie trzeba rozpuszczać, a nie maksymalna objętość za jednym razem.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania, cena i modelowanie ust we Wrocławiu',
    tocLabel: 'Przeciwwskazania i cena',
    content: (
      <>
        <p>Modelowanie ust jest zabiegiem bezpiecznym u właściwie zakwalifikowanych pacjentów, ale ma jasne przeciwwskazania. Część z nich jest bezwzględna, część czasowa (zabieg odracza się do ustąpienia przyczyny).</p>
        <h3>Przeciwwskazania do modelowania ust</h3>
        <ul>
          <li>ciąża i karmienie piersią,</li>
          <li>aktywna opryszczka lub inne zakażenie w okolicy ust,</li>
          <li>aktywny stan zapalny albo choroby autoimmunologiczne w fazie zaostrzenia,</li>
          <li>zaburzenia krzepnięcia lub przyjmowanie leków przeciwkrzepliwych (wymaga konsultacji),</li>
          <li>nadwrażliwość na kwas hialuronowy lub lidokainę.</li>
        </ul>
        <p>Skłonność do nawrotów opryszczki nie wyklucza zabiegu, ale wymaga zgłoszenia, bo lekarz może zalecić profilaktykę przeciwwirusową.</p>
        <h3>Ile kosztuje modelowanie ust we Wrocławiu?</h3>
        <p>Cena modelowania ust zależy przede wszystkim od ilości i rodzaju użytego kwasu hialuronowego, dlatego ustalamy ją po konsultacji. Aktualne widełki podajemy w <Link href="/cennik/">cenniku</Link>, a termin można zarezerwować przez <Link href="/rejestracja/">rejestrację</Link>. Zabieg estetyczny nie jest refundowany przez NFZ.</p>
        <h3>Modelowanie kwasem hialuronowym a „lip flip&quot; botoksem</h3>
        <p>To dwa różne narzędzia, które bywają mylone. Wypełniacz dodaje objętość i rzeźbi kontur. „Lip flip&quot; to małe dawki toksyny botulinowej, które rozluźniają mięsień okrężny ust i delikatnie odwijają górną wargę, bez dodawania objętości.</p>
        <table>
          <tbody>
            <tr>
              <th>Cecha</th>
              <th>Kwas hialuronowy</th>
              <th>„Lip flip&quot; (botoks)</th>
            </tr>
            <tr>
              <td>Co robi</td>
              <td>dodaje objętość, modeluje kontur</td>
              <td>lekko odwija wargę, nie zmienia objętości</td>
            </tr>
            <tr>
              <td>Trwałość</td>
              <td>zwykle od kilku do kilkunastu miesięcy</td>
              <td>krócej, kilka miesięcy</td>
            </tr>
            <tr>
              <td>Odwracalność</td>
              <td>tak (hialuronidaza)</td>
              <td>nie, efekt po prostu mija</td>
            </tr>
          </tbody>
        </table>
        <p>Więcej o samej toksynie botulinowej piszemy przy <Link href="/medycyna-estetyczna/redukcja-zmarszczek-botox/">redukcji zmarszczek botoksem</Link>. Niezależnie od metody zabieg powinien wykonywać lekarz: wypełniacze to wyroby medyczne stosowane u osób dorosłych, a bezpieczne prowadzenie ewentualnych powikłań wymaga przygotowania medycznego, którego nie zapewnia tanie „bezigłowe&quot; powiększanie ust poza gabinetem.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O wskazaniach, przeciwwskazaniach i przebiegu zabiegu decyduje lekarz po badaniu.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Wen E i wsp. (2026). Wypełniacze kwasem hialuronowym w powiększaniu ust: przegląd systematyczny i metaanaliza 16 badań RCT. Aesthetic Surgery Journal. PMID: 41186199.</li>
        <li>Czumbel LM i wsp. (2021). Kwas hialuronowy w powiększaniu ust: metaanaliza. Frontiers in Surgery. PMID: 34422892.</li>
        <li>Stojanovič L, Majdič N. (2019). Wypełniacze HA do poprawy objętości ust: przegląd systematyczny. Journal of Cosmetic Dermatology. PMID: 30636365.</li>
        <li>Colon J i wsp. (2023). Działania niepożądane po wypełniaczach HA twarzy: przegląd 19 badań RCT. Cureus. PMID: 37261136.</li>
        <li>Chakhachiro A, Waseem M. (2025). Analiza czynników ryzyka zatorów naczyniowych po wypełniaczach. Cureus. PMID: 40406769.</li>
        <li>Guo Y i wsp. (2022). Wypełniacze HA do ust w populacji azjatyckiej: badanie kliniczne. Journal of Cosmetic Dermatology. PMID: 35132743.</li>
        <li>Kestemont P i wsp. (2025). Obserwacja długoterminowa wypełniacza HA do ust (do 18 miesięcy). Aesthetic Surgery Journal Open Forum. PMID: 40309237.</li>
        <li>Beer K i wsp. (2023). Wypełniacze HA podawane igłą i kaniulą: badanie z randomizacją. Clinical, Cosmetic and Investigational Dermatology. PMID: 37038451.</li>
        <li>Alam M i wsp. (2021). Częstość zatorów naczyniowych: igła a kaniula. JAMA Dermatology. PMID: 33377939.</li>
        <li>Chopra R i wsp. (2018). Podanie kaniulą w ustach: badanie prospektywne, otwarte. Journal of Drugs in Dermatology. PMID: 29320583.</li>
        <li>Germani M i wsp. (2026). „Lip flip&quot;: wyniki kliniczne i podstawy neuromodulacji. Aesthetic Plastic Surgery. PMID: 41915065.</li>
        <li>Bourmand R i wsp. (2025). Wypełniacz ust a „lip flip&quot;: przegląd. Journal of Cosmetic Dermatology. PMID: 39936357.</li>
        <li>Urdiales-Gálvez F i wsp. (2018). Leczenie powikłań po wypełniaczach: konsensus ekspertów. Aesthetic Plastic Surgery. PMID: 29305643.</li>
        <li>Murray G i wsp. (2021). Wytyczne CMAC: zator naczyniowy po wypełniaczach HA. Journal of Clinical and Aesthetic Dermatology. PMID: 34188752.</li>
        <li>Barańska-Rybak W i wsp. (2024). Reakcje opóźnione po wypełniaczach HA: konsensus. Dermatology and Therapy. PMID: 38907876.</li>
        <li>Vaghela D i wsp. (2021). Wytyczne: opryszczka (HSV) a zabiegi estetyczne. Journal of Clinical and Aesthetic Dermatology. PMID: 34976293.</li>
        <li>Funt DK. (2022). Leczenie opóźnionych reakcji zapalnych po HA. Plastic and Reconstructive Surgery Global Open. PMID: 35747256.</li>
        <li>Díaz-Aguayo I i wsp. (2024). Estetyka ust i okolicy okołoustnej: rekomendacje. Journal of Cosmetic Dermatology. PMID: 38751134.</li>
        <li>Cotofana S i wsp. (2020). Anatomia tętnic wargowych w badaniu ultrasonograficznym. Aesthetic Surgery Journal. PMID: 32469050.</li>
        <li>Cotofana S i wsp. (2017). Wzorzec dystrybucji tętnic wargowych. Plastic and Reconstructive Surgery. PMID: 28092335.</li>
        <li>Lee SH i wsp. (2015). Anatomia topograficzna tętnicy wargowej górnej. Plastic and Reconstructive Surgery. PMID: 25626792.</li>
        <li>Tansatit T i wsp. (2019). Tętnica wargowa dolna: badania anatomiczne i USG. Plastic and Reconstructive Surgery Global Open. PMID: 31942380.</li>
        <li>Money SM i wsp. (2020). Światło i anatomia tętnicy wargowej górnej. Dermatologic Surgery. PMID: 31403539.</li>
        <li>Bravo BSF i wsp. (2025). Podejście podśluzówkowe w ustach jako bezpieczniejsze. Life (Basel). PMID: 40283064.</li>
        <li>Fundarò SP i wsp. (2022). Reologia i właściwości fizykochemiczne wypełniaczy HA. International Journal of Molecular Sciences. PMID: 36142430.</li>
        <li>Hong GW i wsp. (2025). Technika iniekcji oparta na anatomii: usta i okolica. Life (Basel). PMID: 40003724.</li>
        <li>Kroumpouzos G, Treacy P. (2024). Hialuronidaza w leczeniu powikłań po wypełniaczach. JMIR Dermatology. PMID: 38231537.</li>
        <li>Jiang B i wsp. (2019). Wypełniacze niekolagenowe: podsumowanie badań rejestracyjnych FDA. Dermatologic Surgery. PMID: 31569111.</li>
        <li>Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2017/745 w sprawie wyrobów medycznych (MDR), Załącznik XVI (produkty bez przeznaczenia medycznego).</li>
      </ol>
    ),
  },
];

export default function ModelowanieUstPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Modelowanie ust Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Powiększanie i modelowanie ust kwasem hialuronowym. Naturalne, pełne usta dopasowane do proporcji Twojej twarzy."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/modelowanie-ust"
    />
  );
}
