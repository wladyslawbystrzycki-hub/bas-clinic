import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Korekta uśmiechu dziąsłowego Wrocław',
  description: 'Korekta uśmiechu dziąsłowego (gummy smile) we Wrocławiu. Botoks pomaga przy podłożu mięśniowym; o doborze metody decyduje przyczyna i konsultacja z lekarzem.',
  path: '/medycyna-estetyczna/korekta-usmiechu-dziaslowego/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Korekta uśmiechu dziąsłowego' },
];

const FAQ = [
  {
    question: 'Ile utrzymuje się botoks na uśmiech dziąsłowy (gummy smile)?',
    answer: 'Botoks na uśmiech dziąsłowy działa czasowo: pierwsze efekty widać po kilku dniach, pełny rezultat po około dwóch tygodniach, a utrzymuje się on zwykle przez 3-6 miesięcy. Efekt jest odwracalny i aby go utrzymać, zabieg trzeba okresowo powtarzać.',
  },
  {
    question: 'Kiedy stosuje się botoks na gummy smile, a kiedy potrzebne jest leczenie stomatologiczne?',
    answer: 'Botoks na gummy smile stosuje się, gdy przyczyną jest nadreaktywna lub zbyt ruchoma górna warga. Gdy dziąsła są odsłonięte z powodu ich przerostu, opóźnionego wyrzynania zębów albo nadmiaru kości szczęki, potrzebne jest leczenie stomatologiczne, ortodontyczne lub chirurgiczne, bo sam botoks nie usunie przyczyny.',
  },
  {
    question: 'Czy korekta uśmiechu dziąsłowego jest trwała i czy trzeba powtarzać zabieg?',
    answer: 'Trwałość zależy od metody. Korekta toksyną botulinową i kwasem hialuronowym jest czasowa i wymaga powtarzania co kilka miesięcy. Leczenie przyczynowe, takie jak gingiwektomia, intruzja ortodontyczna czy zabieg chirurgiczny, dąży do trwałej korekty uśmiechu dziąsłowego.',
  },
  {
    question: 'Czy zabieg na uśmiech dziąsłowy boli i czy zostaje blizna?',
    answer: 'Korekta uśmiechu dziąsłowego toksyną botulinową jest zabiegiem małoinwazyjnym, bez nacięć, więc nie pozostawia blizny. Iniekcje wykonuje się cienką igłą i odczuwane są zwykle jako krótkie ukłucia. Możliwe działania niepożądane są łagodne i przemijające.',
  },
  {
    question: 'Jakie są przeciwwskazania do korekty uśmiechu dziąsłowego toksyną botulinową?',
    answer: 'Do przeciwwskazań należą choroby nerwowo-mięśniowe (np. miastenia), ciąża i karmienie piersią, nadwrażliwość na składniki preparatu oraz aktywne zakażenie w miejscu wkłucia. Toksyna botulinowa to lek na receptę, dlatego o kwalifikacji do zabiegu zawsze decyduje lekarz.',
  },
  {
    question: 'Gdzie we Wrocławiu skorygować uśmiech dziąsłowy?',
    answer: `Korektę uśmiechu dziąsłowego we Wrocławiu wykonujemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Na wizytę umówisz się telefonicznie pod numerem ${CLINIC.phone} (czynne w dni powszednie ${CLINIC.hours.weekdays}) lub przez stronę rejestracji. Zaczynamy od konsultacji i ustalenia przyczyny.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest uśmiech dziąsłowy (gummy smile)',
    tocLabel: 'Co to jest',
    content: `<p>Uśmiech dziąsłowy (gummy smile) to nadmierne odsłonięcie dziąseł nad górnymi zębami podczas uśmiechu. Za naturalną uznaje się widoczność około 1-2 mm dziąsła; o uśmiechu dziąsłowym mówimy zwykle wtedy, gdy podczas pełnego uśmiechu widać ponad 2-3 mm.</p>
<p>To kwestia estetyczna, a nie choroba, i sama w sobie nie wymaga leczenia. W klasyfikacji linii uśmiechu Liebart odpowiada jej tak zwana klasa I (wysoka linia uśmiechu). Najważniejsze nie jest jednak to, <strong>ile</strong> dziąsła widać, lecz <strong>dlaczego</strong> jest ono odsłonięte, bo od przyczyny zależy, która metoda korekty w ogóle zadziała.</p>`,
  },
  {
    title: 'Przyczyny gummy smile: dlaczego diagnoza decyduje o metodzie',
    tocLabel: 'Przyczyny i diagnoza',
    content: `<p>Nadmierna ekspozycja dziąseł ma kilka przyczyn, a każda z nich wymaga innego leczenia. Dlatego pierwszym krokiem nie jest wybór zabiegu, lecz ustalenie przyczyny (przegląd systematyczny, Inchingolo i wsp., 2024).</p>
<p>Najczęstsze mechanizmy to:</p>
<ul>
<li><strong>Nadczynność mięśni unoszących górną wargę</strong> lub zbyt ruchoma, krótka warga, która podczas uśmiechu unosi się wyjątkowo wysoko.</li>
<li><strong>Przyczyna zębowo-dziąsłowa</strong>: przerost dziąsła, opóźnione bierne wyrzynanie zębów lub krótkie korony kliniczne, przez co zęby wyglądają na „za krótkie".</li>
<li><strong>Przyczyna kostna (szkieletowa)</strong>: nadmierny pionowy wzrost szczęki, który odsłania dziąsła niezależnie od pracy mięśni.</li>
<li><strong>Przyczyna mieszana</strong>: kilka powyższych czynników jednocześnie, co zdarza się często.</li>
</ul>
<h3>Jeden objaw, różne przyczyny</h3>
<p>Każdy z tych przypadków wygląda podobnie, ale reaguje na zupełnie inne leczenie. Toksyna botulinowa rozluźni nadaktywny mięsień, lecz nie zmieni ani wysokości kości, ani ilości dziąsła. Dobranie metody bez rozpoznania przyczyny prowadzi więc do efektu częściowego lub krótkotrwałego. Poniższa tabela pokazuje to wprost:</p>
<table>
<tr><th>Typ uśmiechu dziąsłowego</th><th>Co jest przyczyną</th><th>Metoda, która realnie pomaga</th></tr>
<tr><td>Mięśniowy</td><td>Nadczynna lub nadruchoma górna warga</td><td>Toksyna botulinowa (lub repozycja wargi)</td></tr>
<tr><td>Zębowo-dziąsłowy</td><td>Przerost dziąsła, opóźnione wyrzynanie, krótkie korony</td><td>Gingiwektomia, wydłużanie koron klinicznych</td></tr>
<tr><td>Kostny (szkieletowy)</td><td>Nadmiar pionowy szczęki</td><td>Ortodoncja (intruzja) lub chirurgia ortognatyczna</td></tr>
<tr><td>Mieszany</td><td>Kilka przyczyn jednocześnie</td><td>Leczenie łączone, wielodyscyplinarne</td></tr>
</table>`,
  },
  {
    title: 'Korekta toksyną botulinową: dla kogo zadziała i jak działa',
    tocLabel: 'Botoks: dla kogo',
    content: `<p>Toksyna botulinowa pomaga w uśmiechu dziąsłowym o podłożu mięśniowym, czyli wtedy, gdy górna warga unosi się zbyt mocno. Nie zmienia ani kości, ani ilości dziąsła, więc działa tylko w jednym z opisanych wyżej typów.</p>
<p>Preparat podaje się w mięśnie unoszące górną wargę: dźwigacz wargi górnej i skrzydła nosa (levator labii superioris alaeque nasi), dźwigacz wargi górnej oraz mięsień jarzmowy mniejszy. Często wykorzystuje się tak zwany punkt Yonsei, czyli miejsce zbiegu tych mięśni, w które wystarczy jedno wkłucie z każdej strony. Rozluźnione mięśnie unoszą wargę słabiej, dzięki czemu podczas uśmiechu widać mniej dziąsła. Metaanalizy potwierdzają realną redukcję ekspozycji dziąseł w tym wskazaniu (Rojo-Sanchis i wsp., 2023).</p>
<p>Ogólny mechanizm działania samej <a href="/medycyna-estetyczna/redukcja-zmarszczek-botox/">toksyny botulinowej</a> opisujemy szerzej na osobnej stronie.</p>
<h3>Botoks pomaga tylko w jednym typie gummy smile</h3>
<p>Jeśli dziąsła są odsłonięte z powodu ich przerostu, opóźnionego wyrzynania zębów albo nadmiaru kości, samo rozluźnienie wargi przyniesie co najwyżej częściową poprawę. To najważniejsze ograniczenie tej metody i powód, dla którego zaczynamy od rozpoznania przyczyny.</p>`,
  },
  {
    title: 'Przebieg zabiegu i trwałość efektu',
    tocLabel: 'Przebieg i trwałość',
    content: `<p>Zabieg trwa kilka minut i polega na precyzyjnych iniekcjach cienką igłą w mięśnie unoszące górną wargę. Efekt narasta przez około dwa tygodnie i utrzymuje się kilka miesięcy.</p>
<p>Przebieg krok po kroku:</p>
<ol>
<li>Konsultacja i kwalifikacja: lekarz ocenia przyczynę i mechanizm uśmiechu.</li>
<li>Wyznaczenie punktów wkłucia odpowiadających zaangażowanym mięśniom.</li>
<li>Podanie niewielkiej, dobranej indywidualnie dawki preparatu.</li>
<li>Powrót do codziennych zajęć zwykle od razu, bez rekonwalescencji.</li>
<li>Ocena efektu po około dwóch tygodniach, gdy działanie jest pełne.</li>
</ol>
<p>Pierwsze zmiany widać po kilku dniach, maksymalny efekt pojawia się po 2-4 tygodniach, a utrzymuje się około 3-6 miesięcy (przegląd systematyczny, Wang i wsp., 2024). W szczycie działania metaanalizy notują redukcję widoczności dziąseł rzędu kilku milimetrów, która następnie stopniowo słabnie.</p>
<h3>Efekt jest czasowy: co to znaczy w praktyce</h3>
<p>Po kilku miesiącach warga wraca do wcześniejszej ruchomości, a uśmiech do punktu wyjścia, dlatego zabieg trzeba powtarzać, aby utrzymać rezultat. Dawkę dobiera się indywidualnie do nasilenia problemu; jednostki różnych preparatów toksyny nie są wymienne (dawka jednego nie odpowiada dawce drugiego w stosunku 1:1).</p>`,
  },
  {
    title: 'Kiedy botoks nie wystarczy: leczenie przyczynowe i metody trwałe',
    tocLabel: 'Kiedy potrzeba więcej',
    content: `<p>Jeśli przyczyną uśmiechu dziąsłowego jest dziąsło, kość lub budowa wargi, sama toksyna botulinowa nie rozwiąże problemu. Potrzebne jest wtedy leczenie przyczynowe, które daje trwalszy rezultat.</p>
<p>Porównania pokazują, że metody chirurgiczne i niechirurgiczne dają zbliżony efekt krótko po zabiegu, ale po roku korekta chirurgiczna pozostaje stabilna, podczas gdy efekt toksyny w dużej mierze zanika (metaanaliza, Maleki i wsp., 2024). Wybór metody zależy więc od przyczyny oraz od tego, czy zależy nam na efekcie czasowym, czy trwałym.</p>
<table>
<tr><th>Metoda</th><th>Co koryguje</th><th>Trwałość</th><th>Koszt</th></tr>
<tr><td>Toksyna botulinowa</td><td>Nadczynność mięśni wargi</td><td>Czasowa (kilka miesięcy)</td><td>Cykliczny, powtarzany</td></tr>
<tr><td>Kwas hialuronowy w okolicy ust</td><td>Ogranicza ruch mięśni unoszących wargę</td><td>Czasowa</td><td>Cykliczny</td></tr>
<tr><td>Gingiwektomia, wydłużanie koron</td><td>Nadmiar lub przerost dziąsła</td><td>Trwała (strukturalna)</td><td>Jednorazowy</td></tr>
<tr><td>Intruzja ortodontyczna</td><td>Przyczyna zębowo-wyrostkowa</td><td>Trwała</td><td>Jednorazowy, dłuższy proces</td></tr>
<tr><td>Chirurgia ortognatyczna, repozycja wargi</td><td>Nadmiar kości lub krótka warga</td><td>Trwała</td><td>Jednorazowy</td></tr>
</table>
<p>Kwas hialuronowy bywa stosowany w okolicy okołoustnej jako czasowa alternatywa ograniczająca ruch wargi; samo <a href="/medycyna-estetyczna/modelowanie-ust/">modelowanie i powiększanie ust</a> oraz właściwości <a href="/medycyna-estetyczna/wypelniacze-ha/">wypełniaczy z kwasem hialuronowym</a> omawiamy osobno.</p>`,
  },
  {
    title: 'Bezpieczeństwo, powikłania i przeciwwskazania',
    tocLabel: 'Bezpieczeństwo',
    content: `<p>Iniekcje toksyny botulinowej w tej okolicy są zwykle dobrze tolerowane, a działania niepożądane łagodne i przemijające. Najpoważniejsze ryzyko wiąże się z nieprecyzyjnym podaniem lub zbyt dużą dawką.</p>
<p>Mogą to być przejściowa asymetria uśmiechu, opadnięcie lub wydłużenie górnej wargi oraz uczucie utrudnionego mówienia czy jedzenia. Występują rzadko, wynikają najczęściej z techniki lub przedawkowania i ustępują wraz ze słabnięciem działania preparatu. W miejscu wkłucia może pojawić się niewielki ból, zaczerwienienie lub siniak.</p>
<h3>Przeciwwskazania do zabiegu toksyną botulinową</h3>
<p>Toksyna botulinowa to lek wydawany na receptę, który podaje lekarz po kwalifikacji. Zabiegu nie wykonuje się między innymi przy:</p>
<ul>
<li>chorobach nerwowo-mięśniowych (np. miastenia, zespół Lamberta-Eatona, stwardnienie zanikowe boczne);</li>
<li>ciąży i karmieniu piersią (ostrożnościowo, wobec braku wystarczających danych);</li>
<li>nadwrażliwości na którykolwiek składnik preparatu;</li>
<li>aktywnym zakażeniu lub stanie zapalnym w miejscu planowanego wkłucia;</li>
<li>jednoczesnym stosowaniu antybiotyków aminoglikozydowych, które mogą nasilać działanie toksyny.</li>
</ul>`,
  },
  {
    title: 'Uśmiech dziąsłowy u dzieci i rola ortodoncji',
    tocLabel: 'Dzieci i ortodoncja',
    content: `<p>U dzieci i nastolatków uśmiech dziąsłowy często wiąże się z trwającym wzrostem szczęki i wyrzynaniem zębów, dlatego decyzję o leczeniu podejmuje się ostrożnie i w odpowiednim momencie.</p>
<p>Gdy przyczyna jest zębowo-wyrostkowa lub szkieletowa, pomocna bywa ortodoncja: kontrolowana intruzja zębów, często z użyciem mikroimplantów, pozwala cofnąć nadmierne odsłonięcie dziąseł u właściwie zakwalifikowanych pacjentów. Leczenie aparatem ma największy sens w okresie wzrostu. Toksyny botulinowej nie stosuje się u dzieci w tym wskazaniu, jest to zabieg estetyczny dla dorosłych. Warto też pamiętać, że nie każdy uśmiech dziąsłowy wymaga leczenia, czasem jest po prostu cechą urody.</p>`,
  },
  {
    title: 'Kwalifikacja i korekta uśmiechu dziąsłowego we Wrocławiu',
    tocLabel: 'Konsultacja i cena',
    content: `<p>Na konsultacji lekarz ustala przyczynę nadmiernej ekspozycji dziąseł i dopiero wtedy dobiera metodę, od toksyny botulinowej po leczenie stomatologiczne lub ortodontyczne.</p>
<p>Kwalifikacja obejmuje pomiar widoczności dziąseł w milimetrach, ocenę ruchomości górnej wargi, długości koron klinicznych oraz wyglądu dziąseł. W klinice łączącej stomatologię i medycynę estetyczną przyczynę dentystyczną można ocenić na miejscu i, gdy to ona odpowiada za odsłonięcie dziąseł, zaplanować leczenie przyczynowe, na przykład gingiwektomię, także laserową z użyciem lasera Nd:YAG. Pełną ofertę zabiegów z zakresu <a href="/medycyna-estetyczna/">medycyny estetycznej</a> przedstawiamy na stronie kategorii.</p>
<h3>Cena i korekta uśmiechu dziąsłowego we Wrocławiu</h3>
<p>Koszt zależy od przyczyny i wybranej metody. Warto pamiętać o różnicy w modelu wydatku: cena korekty toksyną botulinową jest cykliczna, bo zabieg powtarza się co kilka miesięcy, a leczenie chirurgiczne czy ortodontyczne to zwykle koszt jednorazowy o trwalszym efekcie. Korekta uśmiechu dziąsłowego jest zabiegiem estetycznym i nie jest refundowana przez NFZ. Aktualny <a href="/cennik/">cennik</a> oraz <a href="/rejestracja/">rejestracja na konsultację</a> dostępne są na osobnych stronach.</p>
<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O wskazaniach, przeciwwskazaniach i doborze metody decyduje lekarz po badaniu.</p>`,
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: `<ol>
<li>Brizuela M, Ines D. Excessive Gingival Display. StatPearls; 2026. PMID: 29262052.</li>
<li>Inchingolo AD i wsp. Effectiveness and Personalized Approaches in the Correction of Gummy Smile: A Systematic Review of Orthodontic and Surgical Treatments. J Clin Med; 2024. PMID: 39597985.</li>
<li>Rojo-Sanchis C i wsp. Non-Surgical Management of the Gingival Smile with Botulinum Toxin A: A Systematic Review and Meta-Analysis. J Clin Med; 2023. PMID: 36835971.</li>
<li>Maleki M i wsp. A Systematic Review and Meta-Analysis Comparing Surgical and Nonsurgical Treatments for Excessive Gingival Display. Dent J; 2024. PMID: 38920855.</li>
<li>Fatani B. An Approach for Gummy Smile Treatment Using Botulinum Toxin A: A Narrative Review of the Literature. Cureus; 2023. PMID: 36824551.</li>
<li>Castro LT i wsp. Facial, dental, periodontal, and tomographic characteristics of the etiology of excessive gingival display. J Periodontal Implant Sci; 2024. PMID: 39058347.</li>
<li>Hwang WS i wsp. Surface anatomy of the lip elevator muscles for the treatment of gummy smile using botulinum toxin. Angle Orthod; 2009. PMID: 19123705.</li>
<li>Wan J i wsp. The Yonsei Point: A Precision Approach to Gummy Smile Correction With Botulinum Neurotoxin. 2025. PMID: 40130832.</li>
<li>Mazzuco R, Hexsel D. Gummy smile and botulinum toxin: a new approach based on the gingival exposure area. J Am Acad Dermatol; 2010. PMID: 21093661.</li>
<li>Wang X i wsp. Dose and injection site of botulinum toxin type A for gummy smile management: A systematic review and bibliometric analysis. Toxicon; 2024. PMID: 39134226.</li>
<li>Zengiski ACS i wsp. Effect and longevity of botulinum toxin in the treatment of gummy smile: a meta-analysis and meta-regression. 2022. PMID: 34652491.</li>
<li>Chagas TF i wsp. Duration of effectiveness of Botulinum toxin type A in excessive gingival display: a systematic review and meta-analysis. Braz Oral Res; 2018. PMID: 29742231.</li>
<li>Lam F, Chan MYS. The role of botulinum toxin A in the management of different types of excessive gingival display: a systematic review. 2022. PMID: 35962103.</li>
<li>Polo M. Botulinum toxin type A (Botox) for the neuromuscular correction of excessive gingival display on smiling (gummy smile). Am J Orthod Dentofacial Orthop; 2008. PMID: 18249285.</li>
<li>Suber JS i wsp. OnabotulinumtoxinA for the treatment of a gummy smile. Aesthet Surg J; 2014. PMID: 24676413.</li>
<li>Diaspro A i wsp. Gummy Smile Treatment: Proposal for a Novel Corrective Technique and a Review of the Literature. 2018. PMID: 30010767.</li>
<li>Das A i wsp. Decision-making process for esthetic treatment of gummy smile: A surgical perspective. 2021. PMID: 34898925.</li>
<li>Abu Alfaraj TM i wsp. A Review of Current Techniques in Lip Reposition Surgery for Treating Excessive Gingival Display. 2024. PMID: 39776712.</li>
<li>Duruel O i wsp. Ideal Dose and Injection Site for Gummy Smile Treatment with Botulinum Toxin-A: A Systematic Review and Introduction of a Case Study. 2019. PMID: 31226199.</li>
<li>Cengiz AF i wsp. Efficacy of botulinum toxin for treating a gummy smile. 2020. PMID: 32414547.</li>
<li>Mercado-García J i wsp. Gummy Smile: Mercado-Rosso Classification System and Dynamic Restructuring with Hyaluronic Acid. 2021. PMID: 33619610.</li>
<li>Biello A, Zhu B. Botulinum Toxin Treatment of the Upper Face. StatPearls; 2026. PMID: 34662037.</li>
<li>Sundaram H i wsp. Global Aesthetics Consensus: Botulinum Toxin Type A. Plast Reconstr Surg; 2016. PMID: 26910696.</li>
<li>Liebart MF i wsp. Smile Line and Periodontium Visibility. Periodontal Practice Today; 2004 (klasyfikacja linii uśmiechu, źródło nieindeksowane w MEDLINE).</li>
<li>Charakterystyka Produktu Leczniczego (ChPL) stosowanego preparatu toksyny botulinowej typu A, URPL/EMA (przeciwwskazania i sposób podawania).</li>
</ol>`,
  },
];

export default function KorektaUsmiechuDziaslowegoPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Korekta uśmiechu dziąsłowego Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Estetyczna korekta gummy smile toksyną botulinową. Szybki zabieg przywracający harmonijny, piękny uśmiech."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/korekta-usmiechu-dziaslowego"
    />
  );
}
