import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Peptyd GHK-Cu Wrocław - działanie i zabieg',
  description:
    'Peptyd miedziowy GHK-Cu we Wrocławiu: mechanizm działania, stan badań, drogi podania, status prawny, przeciwwskazania. Kwalifikacja lekarska, wycena po wizycie.',
  path: '/terapie-peptydowe/ghk-cu/',
});

const SERVICE = getServiceBySlug('terapie-peptydowe/ghk-cu');

const BREADCRUMBS = [
  { label: 'Terapie peptydowe', href: '/terapie-peptydowe/' },
  { label: SERVICE.name },
];

const EXPERT_INFO = [
  {
    title: 'Peptyd GHK-Cu we Wrocławiu - czym jest peptyd miedziowy',
    tocLabel: 'Czym jest GHK-Cu',
    content: (
      <>
        <p><strong>GHK-Cu</strong> to kompleks tripeptydu glicylo-histydylo-lizyny (GHK) z jonem miedzi(II), czyli połączenie trzech aminokwasów z atomem miedzi. Peptyd występuje naturalnie w ludzkim osoczu, ślinie i moczu, a jego stężenie we krwi spada z wiekiem. W Bas Clinic we Wrocławiu lekarz omawia z pacjentem, czy i w jakiej formie peptyd miedziowy ma sens w jego planie regeneracji skóry.</p>
        <p>Sekwencję GHK wyizolował z ludzkiego osocza Loren Pickart w 1973 roku, badając czynniki, które przedłużały przeżycie komórek wątroby w hodowli (Pickart i Thaler, 1973). Później okazało się, że ten sam tripeptyd wiąże miedź niemal tak silnie jak albumina, główne białko transportowe krwi i że właśnie kompleks z miedzią odpowiada za większość obserwowanych efektów w tkankach.</p>
        <h3>Podstawowe fakty o cząsteczce</h3>
        <ul>
          <li><strong>Budowa</strong>: trzy aminokwasy (glicyna, histydyna, lizyna) i jon miedzi; masa cząsteczkowa około 340 Da, więc cząsteczka jest mała i rozpuszczalna w wodzie.</li>
          <li><strong>Pochodzenie</strong>: sekwencja GHK występuje w łańcuchu alfa-2 kolagenu typu I, dlatego przyjmuje się, że peptyd uwalnia się z macierzy w miejscu uszkodzenia tkanki.</li>
          <li><strong>Stężenie w osoczu</strong>: według prac Pickarta u osób około 20. roku życia jest wyraźnie wyższe niż po 60. roku życia; ten spadek jest jednym z argumentów za suplementowaniem peptydu, ale nie ma badań, które łączyłyby go wprost z tempem starzenia skóry.</li>
          <li><strong>Nazwa kosmetyczna</strong>: w składach kosmetyków figuruje jako Copper Tripeptide-1.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Mechanizm działania GHK-Cu: geny, kolagen, naczynia',
    tocLabel: 'Mechanizm działania',
    content: (
      <>
        <p>GHK-Cu działa jako cząsteczka sygnałowa: w hodowlach komórkowych pobudza fibroblasty, czyli komórki skóry produkujące kolagen, do jego syntezy oraz do wytwarzania glikozaminoglikanów, cząsteczek wiążących wodę w skórze. Wspiera też tworzenie nowych naczyń i ogranicza stres oksydacyjny, czyli uszkodzenia wywoływane przez wolne rodniki. Większość tych danych pochodzi z badań in vitro, czyli na komórkach w laboratorium, i na zwierzętach, dlatego opisujemy je jako mechanizmy, a nie udowodnione efekty u pacjentów.</p>
        <h3>Co pokazały badania laboratoryjne</h3>
        <ul>
          <li><strong>Synteza kolagenu</strong>: w pracy Maquarta i wsp. z 1988 roku GHK-Cu pobudzał produkcję kolagenu w hodowli fibroblastów już w śladowych stężeniach, niezależnie od liczby komórek.</li>
          <li><strong>Czynniki wzrostu</strong>: w fibroblastach skóry, także po radioterapii, kompleks zwiększał wydzielanie czynników wzrostu bFGF i VEGF, a zmniejszał TGF-beta1, co interpretuje się jako przebudowę tkanki bez włóknienia, czyli bez tworzenia blizny (Pollard i wsp., 2005).</li>
          <li><strong>Ekspresja genów</strong>: analiza danych z bazy Broad Institute (Connectivity Map) wskazała, że GHK moduluje ekspresję kilku tysięcy genów, w tym związanych z naprawą DNA, układem antyoksydacyjnym i proteasomem. To dane bioinformatyczne, nie kliniczne.</li>
          <li><strong>Angiogeneza i chemotaksja</strong>, czyli tworzenie naczyń i przyciąganie komórek do rany: w modelach zwierzęcych peptyd ściągał do rany makrofagi (komórki sprzątające) oraz komórki wyściełające naczynia i przyspieszał powstawanie ziarniny, młodej tkanki wypełniającej ubytek.</li>
          <li><strong>Miedź</strong>: jon miedzi jest kofaktorem oksydazy lizylowej, enzymu sieciującego kolagen i elastynę, oraz dysmutazy ponadtlenkowej, enzymu chroniącego komórki przed wolnymi rodnikami. Peptyd dostarcza miedź w postaci związanej, która nie działa jak wolny jon.</li>
        </ul>
        <p>Przeglądy Pickarta i Margoliny (2015, 2018) porządkują te mechanizmy, ale ich autorzy są jednocześnie twórcami preparatów z GHK-Cu, co warto mieć na uwadze przy ocenie wniosków.</p>
      </>
    ),
  },
  {
    title: 'Dowody kliniczne na GHK-Cu: zmarszczki, gojenie ran, włosy',
    tocLabel: 'Dowody kliniczne',
    content: (
      <>
        <p>Badania u ludzi dotyczą prawie wyłącznie GHK-Cu stosowanego miejscowo. Są nieliczne, mają małe grupy i często pochodzą z materiałów konferencyjnych, a nie z recenzowanych czasopism. Nie ma badań klinicznych z podaniem podskórnym ani dożylnym.</p>
        <h3>Skóra twarzy</h3>
        <p>Przeglądy cytują badania z lat 1998-2002, w których kremy z GHK-Cu stosowane przez 12 tygodni poprawiały gęstość i jędrność skóry oraz zmniejszały drobne zmarszczki u kobiet w wieku 50-59 lat, w porównaniu z kremem placebo i z tretynoiną, pochodną witaminy A o udowodnionym działaniu przeciwzmarszczkowym. Oryginalne wyniki opublikowano jako doniesienia zjazdowe, więc nie da się ocenić ich metodologii tak, jak pełnej publikacji.</p>
        <h3>Gojenie ran</h3>
        <p>Najlepiej udokumentowane zastosowanie to owrzodzenia przewlekłe. W wieloośrodkowym, randomizowanym badaniu Muldera i wsp. z 1994 roku żel z GHK-Cu przyspieszał zamykanie owrzodzeń neuropatycznych, czyli ran stopy powstających przy cukrzycowym uszkodzeniu nerwów. W badaniu Bishopa i wsp. z 1992 roku na owrzodzeniach żylnych ten sam kompleks nie okazał się lepszy od placebo, a skuteczniejsza była sulfadiazyna srebra. Wyniki są więc niejednoznaczne.</p>
        <h3>Włosy</h3>
        <p>Dane o włosach pochodzą z badań ex vivo, czyli na fragmentach skóry pobranych od ludzi i utrzymywanych przy życiu poza organizmem: kompleksy tripeptydowo-miedziowe wydłużały fazę wzrostu mieszków włosowych i pobudzały komórki brodawki włosa, z której włos wyrasta (Pyo i wsp., 2007, praca dotyczyła analogu AHK-Cu). Brak kontrolowanych badań u pacjentów z łysieniem androgenowym, czyli uwarunkowanym hormonalnie.</p>
        <p>Praktyczny problem to przenikanie przez skórę: GHK-Cu wiąże wodę i słabo pokonuje warstwę rogową, czyli zewnętrzną barierę naskórka, dlatego opracowuje się nośniki liposomalne, mikroskopijne pęcherzyki tłuszczowe przenoszące substancję w głąb, i koniugaty (Ogórek i wsp., 2025). To jeden z argumentów za podaniem śródskórnym w mezoterapii.</p>
      </>
    ),
  },
  {
    title: 'Drogi podania GHK-Cu i status prawny w Polsce',
    tocLabel: 'Drogi podania i prawo',
    content: (
      <>
        <p>W Unii Europejskiej, a więc i w Polsce, GHK-Cu nie jest zarejestrowanym produktem leczniczym w żadnej postaci. Legalnie występuje jako składnik kosmetyków (Copper Tripeptide-1, rozporządzenie 1223/2009) oraz w preparatach do mezoterapii wprowadzanych na rynek jako kosmetyki lub wyroby medyczne. Podanie iniekcyjne to zawsze decyzja lekarza po konsultacji i po pisemnej świadomej zgodzie pacjenta.</p>
        <table>
          <tbody>
            <tr>
              <th>Droga podania</th>
              <th>Forma</th>
              <th>Stan dowodów</th>
              <th>Status regulacyjny</th>
            </tr>
            <tr>
              <td>Miejscowo (kosmetyk)</td>
              <td>krem, serum, tonik do skóry głowy</td>
              <td>małe badania na ludziach, ograniczona penetracja</td>
              <td>składnik kosmetyczny dopuszczony w UE</td>
            </tr>
            <tr>
              <td>Mezoterapia śródskórna</td>
              <td>koktajl do mikroiniekcji, mikronakłuwanie</td>
              <td>dane z hodowli komórkowych i z pobranej skóry, obserwacje kliniczne</td>
              <td>preparaty do mezoterapii (kosmetyk lub wyrób medyczny); podanie na odpowiedzialność lekarza</td>
            </tr>
            <tr>
              <td>Podskórnie</td>
              <td>roztwór do iniekcji</td>
              <td>brak badań klinicznych u ludzi</td>
              <td>brak zarejestrowanego produktu leczniczego w UE i USA; wyłącznie indywidualna decyzja lekarza</td>
            </tr>
            <tr>
              <td>Dożylnie</td>
              <td>dodatek do wlewu</td>
              <td>brak badań u ludzi</td>
              <td>brak zarejestrowanego preparatu; nie jest rutynową ofertą</td>
            </tr>
          </tbody>
        </table>
        <p>Peptydy sprzedawane w internecie jako „odczynniki do badań&quot; nie są przeznaczone do podania ludziom: nie mają kontroli jałowości, czystości ani dawki. W Bas Clinic nie stosujemy takich produktów. Ta sama zasada dotyczy innych peptydów opisanych na stronach <Link href="/terapie-peptydowe/bpc-157/">BPC-157</Link> i <Link href="/terapie-peptydowe/peptydy-osi-gh/">peptydów osi GH</Link>.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo jest peptyd miedziowy - wskazania regeneracyjne',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>GHK-Cu rozważa się u osób, które chcą wesprzeć regenerację skóry i skóry głowy metodami o łagodnym profilu działania, bez wypełniania czy modelowania. Nie jest lekiem, nie leczy chorób skóry i nie zastępuje terapii dermatologicznej.</p>
        <h3>Sytuacje, w których lekarz może zaproponować GHK-Cu</h3>
        <ul>
          <li><strong>Pierwsze oznaki starzenia</strong>: utrata jędrności, drobne zmarszczki, matowa i przesuszona skóra twarzy, szyi i dekoltu.</li>
          <li><strong>Skóra po zabiegach</strong>: wsparcie gojenia po laserach, pilingach i mikronakłuwaniu, gdy lekarz chce skrócić okres zaczerwienienia.</li>
          <li><strong>Fotostarzenie</strong>: nierówny koloryt i szorstkość po latach ekspozycji na słońce.</li>
          <li><strong>Osłabione włosy</strong>: przerzedzenie i wypadanie o podłożu niehormonalnym, jako składnik koktajlu w <Link href="/medycyna-estetyczna/mezoterapia-skory-glowy/">mezoterapii skóry głowy</Link>.</li>
          <li><strong>Blizny potrądzikowe i drobne blizny</strong>: jako element planu, w którym główną rolę pełnią zabiegi ablacyjne (laserowe usuwanie wierzchniej warstwy skóry) lub igłowe.</li>
        </ul>
        <p>Lekarz nie zaproponuje peptydu osobie, która oczekuje szybkiego efektu objętościowego lub wygładzenia głębokich bruzd. Do tego służą inne metody, a GHK-Cu może je co najwyżej uzupełniać.</p>
      </>
    ),
  },
  {
    title: 'Konsultacja i zabieg z GHK-Cu w Bas Clinic we Wrocławiu',
    tocLabel: 'Przebieg wizyty',
    content: (
      <>
        <p>Każde zastosowanie GHK-Cu w Bas Clinic przy {CLINIC.address.street} we Wrocławiu zaczyna się od konsultacji lekarskiej. Lekarz ocenia skórę, zbiera wywiad i dopiero wtedy dobiera drogę podania oraz plan serii. Nie ma jednego, gotowego pakietu.</p>
        <h3>Etapy</h3>
        <ol>
          <li><strong>Konsultacja</strong>: wywiad o chorobach przewlekłych, lekach, alergiach, ciąży i planach prokreacyjnych; ocena skóry w dobrym świetle, czasem zdjęcia porównawcze.</li>
          <li><strong>Wybór drogi podania</strong>: pielęgnacja domowa z kosmetykiem, mezoterapia śródskórna albo mikronakłuwanie z preparatem na skórę. Lekarz omawia stan dowodów i status prawny każdej opcji.</li>
          <li><strong>Świadoma zgoda</strong>: pacjent otrzymuje informację o ograniczonych danych klinicznych, możliwych działaniach niepożądanych i alternatywach; podpisuje zgodę przed zabiegiem.</li>
          <li><strong>Zabieg</strong>: przy mezoterapii oczyszczenie i znieczulenie skóry kremem, seria płytkich mikroiniekcji lub mikronakłuć, około 30-45 minut. Preparat pochodzi z legalnego obrotu, otwierany jest przy pacjencie.</li>
          <li><strong>Zalecenia</strong>: przez dobę bez makijażu, sauny i intensywnego wysiłku; ochrona przeciwsłoneczna przez cały okres serii.</li>
        </ol>
        <p>Po zabiegu skóra może być zaczerwieniona i lekko obrzęknięta przez kilka godzin do dwóch dni. Wizytę umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i działania niepożądane GHK-Cu',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>GHK-Cu stosowany miejscowo jest dobrze tolerowany, ale każda iniekcja narusza ciągłość skóry, a peptyd dostarcza miedź. Dlatego przed zabiegiem lekarz wyklucza stany, w których podanie byłoby niebezpieczne lub nieuzasadnione.</p>
        <h3>Przeciwwskazania</h3>
        <ul>
          <li><strong>Ciąża i karmienie piersią</strong>: brak danych o bezpieczeństwie; nie stosujemy.</li>
          <li><strong>Choroba Wilsona i inne zaburzenia gospodarki miedzią</strong>: organizm nie wydala miedzi prawidłowo, a dodatkowa podaż może pogłębić jej odkładanie w wątrobie i mózgu.</li>
          <li><strong>Aktywna choroba nowotworowa lub jej leczenie</strong>: peptyd pobudza tworzenie naczyń krwionośnych i podziały komórek. Choć w przeglądach opisuje się także działania przeciwnowotworowe, przy czynnym nowotworze zachowujemy ostrożność i odraczamy zabieg.</li>
          <li><strong>Alergia</strong> na peptyd, miedź lub składniki preparatu do mezoterapii.</li>
          <li><strong>Aktywne infekcje skóry</strong> w polu zabiegu: opryszczka, trądzik ropowiczy, grzybica.</li>
          <li><strong>Zaburzenia krzepnięcia i leki przeciwzakrzepowe</strong>: większe ryzyko siniaków po mikroiniekcjach; decyzja lekarza.</li>
          <li><strong>Choroby autoimmunologiczne skóry w fazie aktywnej</strong>, na przykład toczeń, łuszczyca w okolicy zabiegu.</li>
        </ul>
        <h3>Możliwe działania niepożądane</h3>
        <ul>
          <li>zaczerwienienie, obrzęk, drobne siniaki i tkliwość po mikroiniekcjach, ustępujące w ciągu 1-3 dni,</li>
          <li>przejściowe niebieskozielone przebarwienie po kosmetykach z wysokim stężeniem miedzi,</li>
          <li>kontaktowe zapalenie skóry przy nadwrażliwości,</li>
          <li>infekcja w miejscu wkłucia, rzadko, przy nieprzestrzeganiu zaleceń pozabiegowych.</li>
        </ul>
        <p>Nie opisano poważnych działań niepożądanych po miejscowym GHK-Cu w dostępnych badaniach, ale przy podaniu podskórnym i dożylnym profil bezpieczeństwa nie został zbadany. Mówimy o tym wprost podczas konsultacji.</p>
      </>
    ),
  },
  {
    title: 'GHK-Cu z mezoterapią, kroplówką anti-age i innymi zabiegami',
    tocLabel: 'Łączenie zabiegów',
    content: (
      <>
        <p>GHK-Cu rzadko jest samodzielnym zabiegiem. Najczęściej wchodzi w skład planu, w którym pełni rolę składnika wspierającego regenerację, a efekt strukturalny dają inne metody.</p>
        <h3>Typowe połączenia</h3>
        <ul>
          <li><strong><Link href="/medycyna-estetyczna/mezoterapia-iglowa/">Mezoterapia igłowa</Link></strong>: peptyd jako składnik koktajlu z kwasem hialuronowym, witaminami i aminokwasami. W badaniu Jianga i wsp. z 2023 roku połączenie GHK-Cu z kwasem hialuronowym zwiększało ekspresję kolagenu IV w fibroblastach i w skórze ex vivo, co dobrze pasuje do tej formy podania.</li>
          <li><strong><Link href="/medycyna-estetyczna/mezoterapia-skory-glowy/">Mezoterapia skóry głowy</Link></strong>: peptyd w koktajlu na osłabione włosy, zwykle w serii z osoczem bogatopłytkowym lub witaminami.</li>
          <li><strong><Link href="/wlewy-witaminowe/kroplowka-anti-age/">Kroplówka anti-age</Link></strong>: wlew z glutationem i witaminą C wspiera ochronę antyoksydacyjną od środka, podczas gdy peptyd działa na skórę miejscowo. Nie dodajemy GHK-Cu do wlewu.</li>
          <li><strong>Mikronakłuwanie i lasery frakcyjne</strong>: kanały w skórze zwiększają wchłanianie peptydu nałożonego po zabiegu, a peptyd może skracać fazę zaczerwienienia.</li>
        </ul>
        <p>Odstępy między zabiegami ustala lekarz. Peptydu nie łączymy w jednej sesji z pilingiem chemicznym o dużej głębokości, żeby nie nakładać dwóch bodźców zapalnych. Pełną listę terapii znajdziesz na stronie <Link href="/wlewy-witaminowe/">wlewów witaminowych i terapii peptydowych</Link>.</p>
      </>
    ),
  },
  {
    title: 'Efekty GHK-Cu: realistyczne oczekiwania i częstotliwość',
    tocLabel: 'Efekty i częstotliwość',
    content: (
      <>
        <p>GHK-Cu działa powoli i subtelnie. Jeśli efekt się pojawia, to jako poprawa nawilżenia, gładkości i jędrności po kilku tygodniach, a nie zmiana widoczna po jednym zabiegu. U części pacjentów odczuwalnej różnicy nie będzie i uczciwie o tym uprzedzamy.</p>
        <h3>Orientacyjny schemat</h3>
        <ol>
          <li><strong>Seria wstępna</strong>: przy mezoterapii zwykle 3-4 zabiegi co 2-4 tygodnie.</li>
          <li><strong>Podtrzymanie</strong>: pojedynczy zabieg co 2-3 miesiące, jeśli lekarz i pacjent widzą korzyść.</li>
          <li><strong>Pielęgnacja domowa</strong>: kosmetyk z peptydem codziennie, jako uzupełnienie serii, a nie jej zamiennik.</li>
        </ol>
        <p>Efekt zależy od wyjściowego stanu skóry, wieku, palenia tytoniu, snu i ochrony przeciwsłonecznej. Peptyd nie zastępuje leczenia dermatologicznego, diety ani snu. W badaniach miejscowych oceniano skórę po 12 tygodniach stosowania, dlatego na ocenę serii warto dać sobie co najmniej trzy miesiące.</p>
      </>
    ),
  },
  {
    title: 'Cena peptydu GHK-Cu we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Koszt terapii GHK-Cu w Bas Clinic we Wrocławiu ustalamy po konsultacji lekarskiej, bo zależy od drogi podania, składu koktajlu i liczby zabiegów w serii. Nie podajemy jednej ceny z góry, żeby nie sugerować pakietu, którego lekarz może nie zalecić.</p>
        <h3>Co składa się na wycenę</h3>
        <ul>
          <li>konsultacja lekarska z oceną skóry i omówieniem stanu dowodów,</li>
          <li>preparat z legalnego obrotu, otwierany przy pacjencie,</li>
          <li>znieczulenie miejscowe i materiały jednorazowe,</li>
          <li>zabieg wykonywany przez lekarza i kontrola po serii.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizyta nie wymaga skierowania. Orientacyjne ceny mezoterapii znajdziesz w <Link href="/cennik/">cenniku</Link>. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O wskazaniach, drodze podania i planie serii decyduje lekarz podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Pickart L., Thaler M.M. Tripeptide in human serum which prolongs survival of normal liver cells and stimulates growth in neoplastic liver. Nature New Biology 1973; 243(124): 85-87. PMID 4349963.</li>
        <li>Maquart F.X., Pickart L., Laurent M. i wsp. Stimulation of collagen synthesis in fibroblast cultures by the tripeptide-copper complex glycyl-L-histidyl-L-lysine-Cu2+. FEBS Letters 1988; 238(2): 343-346. PMID 3169264.</li>
        <li>Bishop J.B., Phillips L.G., Mustoe T.A. i wsp. A prospective randomized evaluator-blinded trial of two potential wound healing agents for the treatment of venous stasis ulcers. Journal of Vascular Surgery 1992; 16(2): 251-257. PMID 1495150.</li>
        <li>Mulder G.D., Patt L.M., Sanders L. i wsp. Enhanced healing of ulcers in patients with diabetes by topical treatment with glycyl-l-histidyl-l-lysine copper. Wound Repair and Regeneration 1994; 2(4): 259-269. PMID 17147644.</li>
        <li>Pollard J.D., Quan S., Kang T., Koch R.J. Effects of copper tripeptide on the growth and expression of growth factors by normal and irradiated fibroblasts. Archives of Facial Plastic Surgery 2005; 7(1): 27-31. PMID 15655171.</li>
        <li>Pyo H.K., Yoo H.G., Won C.H. i wsp. The effect of tripeptide-copper complex on human hair growth in vitro. Archives of Pharmacal Research 2007; 30(7): 834-839. PMID 17703734.</li>
        <li>Pickart L. The human tri-peptide GHK and tissue remodeling. Journal of Biomaterials Science, Polymer Edition 2008; 19(8): 969-988. PMID 18644225.</li>
        <li>Pickart L., Vasquez-Soltero J.M., Margolina A. GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration. BioMed Research International 2015; 2015: 648108. PMID 26236730.</li>
        <li>Pickart L., Margolina A. Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data. International Journal of Molecular Sciences 2018; 19(7): 1987. PMID 29986520.</li>
        <li>Jiang F., Wu Y., Liu Z. i wsp. Synergy of GHK-Cu and hyaluronic acid on collagen IV upregulation via fibroblast and ex-vivo skin tests. Journal of Cosmetic Dermatology 2023; 22(9): 2598-2604. PMID 37062921.</li>
        <li>Ogórek K., Nowak K., Wadych E. i wsp. Are We Ready to Measure Skin Permeation of Modern Antiaging GHK-Cu Tripeptide Encapsulated in Liposomes? Molecules 2025; 30(1). PMID 39795193.</li>
        <li>Rozporządzenie Parlamentu Europejskiego i Rady (WE) nr 1223/2009 z dnia 30 listopada 2009 r. dotyczące produktów kosmetycznych; baza składników CosIng, wpis Copper Tripeptide-1.</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Czy GHK-Cu jest legalny w Polsce?',
    answer:
      'GHK-Cu jest legalnym składnikiem kosmetyków (Copper Tripeptide-1) i preparatów do mezoterapii dostępnych w obrocie jako kosmetyki lub wyroby medyczne. Nie jest zarejestrowanym produktem leczniczym do iniekcji ani w Polsce, ani w innych krajach UE. O ewentualnym podaniu iniekcyjnym decyduje lekarz po konsultacji i świadomej zgodzie pacjenta.',
  },
  {
    question: 'Czy peptyd GHK-Cu podaje się dożylnie?',
    answer:
      'Nie ma badań u ludzi z dożylnym podaniem GHK-Cu ani zarejestrowanego preparatu do wlewów. W Bas Clinic peptyd stosujemy miejscowo i śródskórnie (mezoterapia). Kroplówka anti-age to osobny wlew z glutationem i witaminą C, do którego peptydu nie dodajemy.',
  },
  {
    question: 'Po jakim czasie widać efekty GHK-Cu?',
    answer:
      'W badaniach miejscowych skórę oceniano po 12 tygodniach codziennego stosowania. Przy mezoterapii pierwsze zmiany nawilżenia i gładkości pacjenci zauważają zwykle po 2-3 zabiegach, czyli po 4-8 tygodniach. Efekt jest subtelny i u części osób może nie wystąpić.',
  },
  {
    question: 'Czy GHK-Cu pomaga na wypadanie włosów?',
    answer:
      'Dane pochodzą z badań ex vivo, czyli na fragmentach skóry pobranych od ludzi, w których kompleksy tripeptydowo-miedziowe wydłużały fazę wzrostu mieszków włosowych. Brak kontrolowanych badań u pacjentów z łysieniem androgenowym, czyli uwarunkowanym hormonalnie. Peptyd może być składnikiem koktajlu w mezoterapii skóry głowy, ale nie zastępuje leczenia dermatologicznego.',
  },
  {
    question: 'Kto nie powinien stosować GHK-Cu?',
    answer:
      'Kobiety w ciąży i karmiące, osoby z chorobą Wilsona lub innymi zaburzeniami gospodarki miedzią, pacjenci z aktywną chorobą nowotworową oraz osoby uczulone na peptyd, miedź lub składniki preparatu. Przy infekcjach skóry i zaburzeniach krzepnięcia decyzję podejmuje lekarz.',
  },
  {
    question: 'Gdzie we Wrocławiu skonsultować terapię GHK-Cu?',
    answer: `Konsultacje i zabiegi z peptydem GHK-Cu prowadzimy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}. Wycena po konsultacji lekarskiej.`,
  },
];

export default function GhkCuPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Peptyd GHK-Cu Wrocław"
      heroSubtitle="Terapie peptydowe"
      heroDescription="Peptyd miedziowy o działaniu regeneracyjnym na skórę i skórę głowy. Lekarz dobiera drogę podania po konsultacji i omawia stan dowodów oraz status prawny w Bas Clinic we Wrocławiu."
      slug="terapie-peptydowe/ghk-cu"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
