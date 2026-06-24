import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Wypełniacze kwasem hialuronowym Wrocław',
  description: 'Wypełniacze kwasem hialuronowym we Wrocławiu: modelowanie rysów twarzy i przywracanie objętości. Zabieg planuje i wykonuje lekarz, a efekt jest odwracalny.',
  path: '/medycyna-estetyczna/wypelniacze-ha/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Wypełniacze na bazie kwasu hialuronowego' },
];

const FAQ = [
  {
    question: 'Jak długo utrzymuje się efekt wypełniacza z kwasu hialuronowego?',
    answer: 'Efekt wypełniacza z kwasu hialuronowego utrzymuje się zwykle od kilku do kilkunastu miesięcy. Dokładny czas zależy od preparatu, okolicy, indywidualnego metabolizmu i techniki podania. Żel rozkłada się szybciej w miejscach ruchomych, na przykład w ustach, a wolniej tam, gdzie podpiera strukturę twarzy.',
  },
  {
    question: 'Czy kwas hialuronowy można rozpuścić?',
    answer: 'Tak, i to jest jego przewaga. Enzym hialuronidaza rozkłada kwas hialuronowy, dzięki czemu można skorygować przewypełnienie lub asymetrię, a w razie podejrzenia zatoru naczyniowego wdrożyć leczenie ratunkowe. W medycynie estetycznej hialuronidazę stosuje się poza wskazaniem rejestracyjnym, dlatego bywa poprzedzona próbą uczuleniową.',
  },
  {
    question: 'Jakie są skutki uboczne wypełniaczy z kwasu hialuronowego?',
    answer: 'Najczęściej są to łagodne, przemijające odczyny w miejscu wkłucia: obrzęk, zaczerwienienie, zasinienie, tkliwość i drobne guzki. Poważne powikłania, w tym zator naczyniowy, są rzadkie, ale możliwe. Dlatego zabieg powinien wykonywać lekarz znający anatomię twarzy.',
  },
  {
    question: 'Igła czy kaniula, co jest bezpieczniejsze?',
    answer: 'Kaniula bywa wiązana z niższym, choć nie zerowym ryzykiem zatoru naczyniowego w okolicach podwyższonego ryzyka. Wybór między igłą a kaniulą zależy od okolicy i techniki, a żadna z metod nie eliminuje ryzyka całkowicie. Bezpieczeństwo wynika przede wszystkim z anatomicznej wiedzy i doświadczenia lekarza.',
  },
  {
    question: 'Czy NFZ refunduje wypełniacze z kwasu hialuronowego?',
    answer: 'Nie. Wypełnianie kwasem hialuronowym w celu estetycznym jest w całości zabiegiem prywatnym (odpłatnym). NFZ refunduje wyłącznie wskazania medyczne i rekonstrukcyjne, a nie zabiegi estetyczne. Wycenę ustala się po konsultacji, ponieważ zależy od ilości i rodzaju preparatu.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać zabieg kwasem hialuronowym?',
    answer: `Wypełniacze z kwasu hialuronowego wykonujemy w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Zabieg przeprowadza lekarz po konsultacji i kwalifikacji. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} w godzinach ${CLINIC.hours.weekdays} lub przez formularz rejestracji online.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest kwas hialuronowy i jak działa jako wypełniacz?',
    tocLabel: 'Czym jest i jak działa',
    content: `<p>Wypełniacz na bazie kwasu hialuronowego to żel z usieciowanego kwasu hialuronowego, który lekarz podaje w skórę lub tkankę podskórną, aby przywrócić utraconą objętość i wygładzić zagłębienia. Efekt widać od razu, ale jest czasowy.</p>
<p>Kwas hialuronowy (HA, łac. acidum hyaluronicum) to cukier złożony naturalnie obecny w skórze, tkance łącznej i płynie stawowym. Wiąże wodę, dzięki czemu odpowiada za jędrność i nawodnienie tkanek. W naturalnej postaci organizm rozkłada go w ciągu kilkudziesięciu godzin, dlatego w <a href="/medycyna-estetyczna/">medycynie estetycznej</a> używa się jego formy usieciowanej.</p>
<p><strong>Usieciowanie</strong> to chemiczne połączenie łańcuchów kwasu hialuronowego (najczęściej odczynnikiem BDDE) w stabilną, sprężystą siatkę. Spowalnia ono rozkład żelu i nadaje mu konsystencję. Preparat pozostaje przy tym biodegradowalny: z czasem organizm wchłania go w całości, a sam efekt jest odwracalny.</p>`,
  },
  {
    title: 'Reologia wypełniaczy: G prim, sieciowanie i kohezja',
    tocLabel: 'Reologia: G prim',
    content: `<p>Wypełniacze z kwasu hialuronowego różnią się reologią, czyli zachowaniem żelu pod naciskiem tkanek. To dlatego jeden uniwersalny preparat nie sprawdza się we wszystkich okolicach twarzy.</p>
<p>Najczęściej omawianym parametrem jest <strong>G prim (G')</strong>, czyli moduł sprężystości. Opisuje sztywność żelu i jego zdolność do podnoszenia tkanek (lift). Z analiz właściwości fizykochemicznych wypełniaczy (Fundarò i wsp., 2022) wynika prosta zależność kliniczna:</p>
<ul>
<li><strong>Wysokie G'</strong>: żele twardsze, do głębokiej wolumetrii i podparcia struktury twarzy, na przykład kości policzkowych, brody i linii żuchwy.</li>
<li><strong>Niskie G'</strong>: żele miększe, do płytkich zmarszczek i okolic delikatnych, takich jak dolina łez czy usta.</li>
</ul>
<p>O twardości i trwałości żelu decyduje przede wszystkim stopień usieciowania. Kohezja, czyli wewnętrzna spójność preparatu, to cecha odrębna od G', a jej znaczenie kliniczne wciąż jest przedmiotem dyskusji. Wartości G' różnych marek nie da się jednak porównywać wprost, bo zależą od technologii sieciowania. Dlatego o doborze preparatu decyduje lekarz na podstawie okolicy i celu zabiegu, a nie sama liczba z katalogu.</p>`,
  },
  {
    title: 'Co poprawia kwas hialuronowy, a czego nie zrobi',
    tocLabel: 'Co poprawia (i czego nie)',
    content: `<p>Wypełniacze HA przywracają objętość i wygładzają zagłębienia, ale nie napinają wiotkiej skóry i nie zastępują zabiegu chirurgicznego. Świadomość tych granic chroni przed rozczarowaniem.</p>
<p>Typowe zastosowania klasy wypełniaczy z kwasu hialuronowego to wolumetria (kości policzkowe, broda, linia żuchwy), wypełnianie bruzd nosowo-wargowych i linii marionetki, korekta doliny łez oraz wyrównywanie asymetrii. W naszej klinice poszczególne okolice mają osobne opisy zabiegów:</p>
<ul>
<li>modelowanie i powiększanie ust: <a href="/medycyna-estetyczna/modelowanie-ust/">modelowanie ust</a>,</li>
<li>wygładzanie zmarszczek i bruzd twarzy: <a href="/medycyna-estetyczna/redukcja-zmarszczek-ha/">redukcja zmarszczek kwasem hialuronowym</a>,</li>
<li>nawodnienie i poprawa jakości skóry bez dodawania objętości: <a href="/medycyna-estetyczna/skin-booster/">mezoterapia głęboka (skin booster)</a>.</li>
</ul>
<h3>Czego kwas hialuronowy nie zrobi</h3>
<p>Wypełniacz nie usunie zmarszczek mimicznych, które powstają od pracy mięśni: tu działa <a href="/medycyna-estetyczna/redukcja-zmarszczek-botox/">toksyna botulinowa</a>, bo rozluźnia mięsień, zamiast wypełniać. HA nie napnie nadmiaru skóry ani nie zastąpi liftingu chirurgicznego. Nie stosuje się go też do modelowania ciała (piersi, pośladki); takie użycie jest poza wskazaniami i niebezpieczne, przed czym ostrzega FDA.</p>
<table>
<tr><th>Cecha</th><th>Wypełniacz HA</th><th>Toksyna botulinowa</th><th>Wypełniacz trwały</th></tr>
<tr><td>Co koryguje</td><td>ubytki objętości, bruzdy, kontur</td><td>zmarszczki mimiczne (dynamiczne)</td><td>ubytki objętości</td></tr>
<tr><td>Mechanizm</td><td>wypełnia i podpiera tkankę</td><td>rozluźnia mięsień</td><td>trwałe wypełnienie</td></tr>
<tr><td>Odwracalność</td><td>tak, hialuronidazą</td><td>nie, działanie ustępuje samo</td><td>nie, nieusuwalny enzymatycznie</td></tr>
<tr><td>Czas działania</td><td>od kilku do kilkunastu miesięcy</td><td>kilka miesięcy</td><td>lata, nieodwracalnie</td></tr>
</table>`,
  },
  {
    title: 'Jak długo utrzymuje się efekt wypełniacza HA?',
    tocLabel: 'Trwałość efektu',
    content: `<p>Efekt wypełniacza z kwasu hialuronowego utrzymuje się zwykle od kilku do kilkunastu miesięcy. Konkretny czas zależy od preparatu, okolicy, indywidualnego metabolizmu i techniki podania.</p>
<p>Metaanaliza badań nad wypełnianiem bruzd nosowo-wargowych (Stefura i wsp., 2021) pokazuje, że poprawa jest największa w pierwszych miesiącach, utrzymuje się mniej więcej do roku, a następnie stopniowo słabnie wraz z rozkładem żelu. Nowoczesne, mocniej usieciowane preparaty bywają w badaniach widoczne dłużej, w wybranych okolicach nawet kilkanaście miesięcy.</p>
<p>W praktyce żel rozkłada się szybciej w okolicach ruchomych, takich jak usta, a wolniej tam, gdzie podpiera strukturę twarzy. Z tego powodu nie podajemy jednej uniwersalnej liczby miesięcy. Aby utrwalić efekt, część osób decyduje się na zabieg uzupełniający, zanim poprzedni preparat całkowicie się wchłonie.</p>`,
  },
  {
    title: 'Jak wygląda zabieg? Igła, kaniula i znieczulenie',
    tocLabel: 'Przebieg i znieczulenie',
    content: `<p>Zabieg zaczyna się od konsultacji i kwalifikacji, a preparat podaje się igłą lub kaniulą. Większość nowoczesnych wypełniaczy zawiera lidokainę, która ogranicza ból w trakcie iniekcji.</p>
<ol>
<li><strong>Konsultacja i kwalifikacja</strong>: analiza proporcji twarzy, wywiad medyczny, omówienie celu zabiegu i przeciwwskazań.</li>
<li><strong>Przygotowanie</strong>: dezynfekcja skóry, w razie potrzeby krem znieczulający.</li>
<li><strong>Podanie preparatu</strong>: lekarz wprowadza żel cienką igłą lub kaniulą w zaplanowane warstwy, modelując okolicę na bieżąco.</li>
<li><strong>Ocena i zalecenia</strong>: kontrola symetrii oraz instrukcje na pierwsze dni.</li>
</ol>
<p>Dodatek lidokainy do preparatu zmniejsza dolegliwości bólowe bez utraty skuteczności ani bezpieczeństwa (Liu i wsp., 2024). Wybór między igłą a kaniulą zależy od okolicy i techniki, a jego znaczenie dla bezpieczeństwa omawiamy w sekcji o powikłaniach naczyniowych.</p>
<h3>Zalecenia po zabiegu</h3>
<ul>
<li>W pierwszych dniach mogą wystąpić obrzęk, zaczerwienienie lub drobne zasinienia, które zwykle samoustępują.</li>
<li>Warto unikać intensywnego wysiłku, sauny, solarium i długiej ekspozycji na słońce oraz wysokie temperatury.</li>
<li>Nie należy masować ani uciskać miejsc wkłucia, jeśli lekarz nie zalecił inaczej.</li>
</ul>`,
  },
  {
    title: 'Bezpieczeństwo: typowe odczyny i powikłania',
    tocLabel: 'Bezpieczeństwo i odczyny',
    content: `<p>Zdecydowana większość działań niepożądanych po wypełniaczach HA to łagodne, przemijające odczyny w miejscu wkłucia. Poważne powikłania są rzadkie, ale możliwe, dlatego zabieg należy do procedur lekarskich.</p>
<p>Do najczęstszych, zwykle samoustępujących odczynów należą obrzęk, zaczerwienienie, zasinienie, tkliwość, drobne guzki, stwardnienie i świąd (Colon i wsp., 2023). Przy zbyt płytkim podaniu, szczególnie pod oczami, może pojawić się <strong>efekt Tyndalla</strong>, czyli niebieskawe prześwitywanie żelu; koryguje się go hialuronidazą.</p>
<p>Osobną grupą są <strong>opóźnione reakcje zapalne</strong> i guzki o późnym początku, które pojawiają się od kilku tygodni do kilku miesięcy po zabiegu. Wiąże się je z biofilmem, nadwrażliwością lub czynnikami infekcyjnymi (Barańska-Rybak i wsp., 2024). Większości powikłań można zapobiegać poprzez właściwą kwalifikację, dobór preparatu i technikę, a w razie potrzeby leczyć według ustalonych schematów. Żaden rzetelny opis zabiegu nie powinien jednak obiecywać, że jest on pozbawiony ryzyka.</p>`,
  },
  {
    title: 'Zator naczyniowy: rzadkie, ale poważne powikłanie',
    tocLabel: 'Zator naczyniowy',
    content: `<p>Zator naczyniowy to najpoważniejsze powikłanie wypełniaczy. Zdarza się rzadko, ale może prowadzić do martwicy skóry, a w skrajnych przypadkach do utraty wzroku. Z tego względu nie wolno go bagatelizować.</p>
<p>Dochodzi do niego, gdy preparat trafi do naczynia lub je uciśnie. Do okolic podwyższonego ryzyka należą gładzizna czoła, nos, fałdy nosowo-wargowe i okolica wokół oczu (Brennan, 2014). Mechanizm utraty wzroku polega na przedostaniu się materiału do gałęzi tętnicy, cofnięciu się go z prądem krwi i zamknięciu tętnicy ocznej lub siatkówkowej (Carruthers i wsp., 2014). Powikłanie to jest skrajnie rzadkie, lecz realne i często nieodwracalne.</p>
<h3>Jakie objawy po zabiegu wymagają pilnej pomocy?</h3>
<p>Nagły, silny ból, blednięcie skóry lub jej sinawe, marmurkowate zabarwienie oraz zaburzenia widzenia po zabiegu wymagają pilnego kontaktu z lekarzem wykonującym zabieg. W powikłaniach naczyniowych liczy się czas: szybkie rozpoznanie i leczenie poprawiają rokowanie.</p>
<h3>Dlaczego o bezpieczeństwie decyduje wiele czynników</h3>
<p>Pacjenci często słyszą, że aspiracja przed podaniem albo użycie kaniuli całkowicie chronią przed powikłaniem naczyniowym. To uproszczenie. Test aspiracji ma niską czułość i bywa fałszywie ujemny (Van Loghem i wsp., 2018), a kaniula obniża ryzyko w wybranych okolicach, lecz go nie eliminuje, bo dużym narzędziem również można naruszyć naczynie (Pavicic i wsp., 2017; Alam i wsp., 2021). Realne bezpieczeństwo wynika z wielu czynników naraz: znajomości anatomii, doświadczenia, powolnego podawania małych objętości pod niewielkim ciśnieniem (Isaac i wsp., 2023) oraz gotowości do natychmiastowego leczenia, zgodnie z międzynarodowym konsensusem Global Aesthetics Consensus (Signorini i wsp., 2016).</p>`,
  },
  {
    title: 'Odwracalność: hialuronidaza jako przewaga HA',
    tocLabel: 'Odwracalność',
    content: `<p>Największą przewagą kwasu hialuronowego nad wypełniaczami trwałymi jest odwracalność. Enzym hialuronidaza rozpuszcza żel HA, dlatego efekt można skorygować lub usunąć.</p>
<p>Hialuronidaza rozszczepia wiązania w łańcuchu kwasu hialuronowego, co prowadzi do rozpuszczenia żelu w tkance (Kroumpouzos i wsp., 2024). Wykorzystuje się ją na dwa sposoby: do korekty przewypełnienia, asymetrii lub widocznych guzków oraz jako leczenie ratunkowe przy podejrzeniu zatoru naczyniowego, gdzie liczy się jak najszybsze działanie.</p>
<p>Są tu dwa ważne zastrzeżenia. Po pierwsze, w medycynie estetycznej hialuronidazę stosuje się poza zarejestrowanym wskazaniem (off-label), a sam enzym może wywołać reakcję alergiczną, dlatego bywa poprzedzony próbą uczuleniową. Po drugie, odwracalność dotyczy wyłącznie kwasu hialuronowego: wypełniaczy trwałych, takich jak silikon czy PMMA, nie da się rozpuścić enzymatycznie. To jeden z powodów, dla których HA jest dziś najczęściej wybieranym materiałem.</p>`,
  },
  {
    title: 'Przeciwwskazania, kwalifikacja i cena we Wrocławiu',
    tocLabel: 'Przeciwwskazania, cena, NFZ',
    content: `<p>Wypełniacze HA wykonuje się po kwalifikacji lekarskiej. Część przeciwwskazań jest bezwzględna, część względna i wymaga indywidualnej decyzji po wywiadzie.</p>
<p><strong>Przeciwwskazania bezwzględne</strong> (Urdiales-Gálvez i wsp., 2017; Heydenrych i wsp., 2018):</p>
<ul>
<li>nadwrażliwość na kwas hialuronowy lub składnik preparatu, na przykład lidokainę,</li>
<li>czynne zakażenie lub stan zapalny skóry w miejscu zabiegu (opryszczka, trądzik zapalny, zapalenie skóry).</li>
</ul>
<p><strong>Przeciwwskazania względne</strong>, przy których o zabiegu decyduje lekarz:</p>
<ul>
<li>ciąża i karmienie piersią, gdzie zabieg odracza się z powodu braku danych o bezpieczeństwie,</li>
<li>choroby autoimmunologiczne i tkanki łącznej,</li>
<li>leki przeciwkrzepliwe i przeciwpłytkowe, które zwiększają ryzyko siniaków.</li>
</ul>
<h3>Kto powinien wykonywać zabieg?</h3>
<p>Wypełniacze powinien podawać lekarz znający anatomię twarzy, dysponujący hialuronidazą i protokołem postępowania w powikłaniach. Usieciowany kwas hialuronowy jest wyrobem medycznym klasy III z oznakowaniem CE według unijnego rozporządzenia o wyrobach medycznych (MDR).</p>
<h3>Ile kosztują wypełniacze HA we Wrocławiu? Cena i NFZ</h3>
<p>Zabieg z kwasu hialuronowego w celu estetycznym jest w całości prywatny (odpłatny). NFZ refunduje wyłącznie wskazania medyczne i rekonstrukcyjne, nie estetyczne. Cena zależy od ilości i rodzaju preparatu oraz liczby okolic, dlatego ustala się ją po konsultacji; aktualne widełki dla Wrocławia znajdziesz w <a href="/cennik/">cenniku</a>.</p>
<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O kwalifikacji do zabiegu i doborze preparatu decyduje lekarz po badaniu.</p>`,
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: `<ol>
<li>Stefura T. i wsp. Tissue Fillers for the Nasolabial Fold Area: A Systematic Review and Meta-Analysis. Aesthetic Plast Surg 2021 (PMID 34255156).</li>
<li>Fundarò SP. i wsp. The Rheology and Physicochemical Characteristics of Hyaluronic Acid Fillers. Int J Mol Sci 2022 (PMID 36142430).</li>
<li>Safia A. i wsp. Efficacy and Safety of Hyaluronic Acid Fillers for Midface Augmentation. Medicina (Kaunas) 2025 (PMID 41155810).</li>
<li>Liu H. i wsp. Efficacy and Safety of Hyaluronic Acid Fillers With or Without Lidocaine. Aesthetic Plast Surg 2024 (PMID 39014236).</li>
<li>Kaufman-Janette J. i wsp. Efficacy and safety of a new resilient hyaluronic acid dermal filler. J Cosmet Dermatol 2019 (PMID 31444861).</li>
<li>Wang R. i wsp. Hyaluronic acid filler-induced vascular occlusion: case reports and overview. J Cosmet Dermatol 2024 (PMID 38131127).</li>
<li>Signorini M. i wsp. Global Aesthetics Consensus: Avoidance and Management of Complications from Hyaluronic Acid Fillers. Plast Reconstr Surg 2016 (PMID 27219265).</li>
<li>Colon J. i wsp. Adverse Events Reported From Hyaluronic Acid Dermal Filler Injections. Cureus 2023 (PMID 37261136).</li>
<li>Brennan C. Avoiding the danger zones when injecting dermal fillers. Plast Surg Nurs 2014 (PMID 25188847).</li>
<li>Isaac J. i wsp. An illustrated anatomical approach to reducing vascular risk during facial filler injection. JPRAS Open 2023 (PMID 37064503).</li>
<li>Carruthers JDA. i wsp. Blindness caused by cosmetic filler injection: a review of cause and therapy. Plast Reconstr Surg 2014 (PMID 25415089).</li>
<li>Sito G. i wsp. Vascular Complications after Facial Filler Injection: A Literature Review. J Clin Aesthet Dermatol 2019 (PMID 31360292).</li>
<li>Murray G. i wsp. Guideline for the Management of Hyaluronic Acid Filler-induced Vascular Occlusion. J Clin Aesthet Dermatol 2021 (PMID 34188752).</li>
<li>Van Loghem JA. i wsp. Sensitivity of aspiration as a safety test before injection of soft tissue fillers. J Cosmet Dermatol 2018 (PMID 28987016).</li>
<li>Pavicic T. i wsp. Precision in Dermal Filling: A Comparison Between Needle and Cannula. J Drugs Dermatol 2017 (PMID 28915281).</li>
<li>Alam M. i wsp. Rates of Vascular Occlusion Associated With Using Needles vs Cannulas. JAMA Dermatol 2021 (PMID 33377939).</li>
<li>Barańska-Rybak W. i wsp. Late-Onset Reactions after Hyaluronic Acid Dermal Fillers: A Consensus Recommendation. Dermatol Ther (Heidelb) 2024 (PMID 38907876).</li>
<li>Urdiales-Gálvez F. i wsp. Preventing the Complications Associated with the Use of Dermal Fillers in Facial Aesthetic Procedures. Aesthetic Plast Surg 2017 (PMID 28411354).</li>
<li>Urdiales-Gálvez F. i wsp. Treatment of Soft Tissue Filler Complications: Expert Consensus Recommendations. Aesthetic Plast Surg 2018 (PMID 29305643).</li>
<li>Sundaram H. i wsp. Global Aesthetics Consensus: Hyaluronic Acid Fillers and Botulinum Toxin Type A. Plast Reconstr Surg 2016 (PMID 27119917).</li>
<li>Kroumpouzos G. i wsp. Hyaluronidase for Dermal Filler Complications: Review of Applications and Dosing. JMIR Dermatol 2024 (PMID 38231537).</li>
<li>Heydenrych I. i wsp. A 10-point plan for avoiding hyaluronic acid dermal filler-related complications. Clin Cosmet Investig Dermatol 2018 (PMID 30538521).</li>
<li>Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2017/745 (MDR), Załącznik XVI; Rozporządzenie wykonawcze (UE) 2022/2346 (wspólne specyfikacje).</li>
<li>U.S. Food and Drug Administration. Dermal Fillers (Soft Tissue Fillers) (kontekst regulacyjny USA).</li>
</ol>`,
  },
];

export default function WypelniaczePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Wypełniacze na bazie kwasu hialuronowego Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Modelowanie rysów twarzy i przywracanie objętości usieciowanym kwasem hialuronowym we Wrocławiu. Zabieg planuje i wykonuje lekarz po konsultacji."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/wypelniacze-ha"
    />
  );
}
