import { generatePageMetadata } from '@/lib/metadata';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Odbudowa zębów Wrocław - metody i cena',
  description: 'Odbudowa zębów we Wrocławiu - rekonstrukcja zniszczonych, złamanych i startych zębów kompozytem lub ceramiką. Poznaj metody, trwałość i cenę odbudowy zęba.',
  path: '/stomatologia-estetyczna/odbudowa-zebow/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Stomatologia estetyczna', href: '/stomatologia-estetyczna/' },
  { label: 'Odbudowa zębów' },
];

const FAQ = [
  {
    question: 'Czym różni się odbudowa zęba od zwykłej plomby?',
    answer: 'Odbudowa zęba dotyczy rozległych uszkodzeń: dużych ubytków, złamań, startych zębów oraz zębów po leczeniu kanałowym, gdzie trzeba odtworzyć kształt, funkcję i estetykę. Zwykła plomba zamyka niewielki ubytek próchnicowy. Przy większej utracie tkanek stosujemy kompozyt warstwowy albo uzupełnienia pośrednie: wkład, nakład lub endokoronę.',
  },
  {
    question: 'Ile wytrzymuje odbudowa zęba?',
    answer: 'Odbudowa zęba wytrzymuje zwykle wiele lat, a jej trwałość zależy od metody i materiału. Kompozytowe odbudowy zębów bocznych zachowują około 90% przetrwania w obserwacji 10-letniej, a ceramiczne wkłady i nakłady około 91% w 10 lat. Bruksizm, wysokie ryzyko próchnicy oraz nawyki dietetyczne skracają ten czas.',
  },
  {
    question: 'Czy ząb po leczeniu kanałowym trzeba pokryć koroną?',
    answer: 'Ząb po leczeniu kanałowym, zwłaszcza boczny, zwykle wymaga pokrycia guzków nakładem, endokoroną lub koroną, ponieważ po utracie tkanek łatwiej pęka. Zęby boczne pozostawione bez takiej ochrony są tracone wielokrotnie częściej. Ząb przedni z niewielkim ubytkiem często wystarczy odbudować kompozytem; decyzję podejmujemy po ocenie ilości zdrowej tkanki.',
  },
  {
    question: 'Czy odbudowa zęba boli i ile trwa?',
    answer: 'Odbudowa zęba nie boli, ponieważ wykonujemy ją w znieczuleniu miejscowym; po zabiegu możliwa jest przejściowa nadwrażliwość. Odbudowa kompozytowa mieści się zwykle w jednej wizycie, około 30 do 60 minut na ząb, a uzupełnienie pośrednie (wkład, nakład, endokorona) wymaga dwóch wizyt, bo powstaje poza jamą ustną.',
  },
  {
    question: 'Czy starte zęby można odbudować i czy szyna zatrzyma ścieranie?',
    answer: 'Starte zęby odbudowujemy kompozytem bez szlifowania zdrowych tkanek, często w lekko podniesionym zgryzie. Szyna ochronna zabezpiecza odbudowy przed siłami zgrzytania, ale dowody, że całkowicie zatrzymuje ścieranie, są niewystarczające. Najważniejsze jest opanowanie przyczyny, czyli bruksizmu lub kwasowej erozji, bo bez tego starcie postępuje dalej.',
  },
  {
    question: 'Gdzie wykonać odbudowę zębów we Wrocławiu?',
    answer: `Odbudowę zębów we Wrocławiu wykonujemy w gabinecie Bas Clinic przy ${CLINIC.address.street}. Na konsultację, podczas której dobieramy metodę odbudowy, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest odbudowa zębów we Wrocławiu?',
    tocLabel: 'Czym jest odbudowa?',
    content:
      '<p><strong>Odbudowa zębów</strong> (rekonstrukcja zęba) to odtworzenie kształtu, funkcji i estetyki zęba, który stracił znaczną część twardych tkanek wskutek próchnicy, urazu, złamania lub starcia. W odróżnieniu od zwykłej plomby dotyczy rozległych uszkodzeń, a także zębów po leczeniu kanałowym.</p>' +
      '<p>Niewielki ubytek próchnicowy zamyka się <a href="/leczenie-zebow/">wypełnieniem w ramach leczenia próchnicy</a>. O odbudowie mówimy wtedy, gdy zniszczenie jest na tyle duże, że trzeba odtworzyć ścianę zęba, guzek, punkt styczny albo cały kształt korony. Do dyspozycji są dwie drogi: odbudowa bezpośrednia kompozytem oraz odbudowa pośrednia, czyli wkład, nakład, overlay i endokorona.</p>' +
      '<h3>Kiedy ząb wymaga odbudowy?</h3>' +
      '<ul>' +
      '<li><strong>Rozległa próchnica</strong> z utratą ściany lub guzka zęba.</li>' +
      '<li><strong>Złamanie lub ukruszenie</strong> zęba, w tym złamana jedynka po urazie.</li>' +
      '<li><strong>Ząb po leczeniu kanałowym</strong>, osłabiony utratą tkanek.</li>' +
      '<li><strong>Starte zęby</strong> przy bruksizmie lub kwasowej erozji.</li>' +
      '<li><strong>Ząb zachowany niemal do poziomu dziąsła</strong>, tak zwany ząb na korzeniu.</li>' +
      '</ul>',
  },
  {
    title: 'Odbudowa bezpośrednia czy pośrednia? Metody odbudowy zęba',
    tocLabel: 'Metody odbudowy',
    content:
      '<p>Ząb odbudowujemy dwiema drogami. <strong>Odbudowa bezpośrednia</strong> polega na nałożeniu kompozytu warstwowo od razu w jamie ustnej i utwardzeniu go światłem, zwykle podczas jednej wizyty. <strong>Odbudowa pośrednia</strong> to uzupełnienie wykonane poza zębem, w laboratorium lub technologią CAD/CAM, i wklejone adhezyjnie na kolejnej wizycie.</p>' +
      '<p>Odbudowa bezpośrednia kompozytem dobrze sprawdza się przy ubytkach małych i umiarkowanych oraz w zębach przednich, gdzie liczy się estetyka. Drobne korekty kształtu czy koloru zębów przednich wykonujemy metodą <a href="/bonding/">bondingu kompozytowego</a>. Większe ubytki w zębach bocznych, z osłabionymi guzkami, częściej wymagają uzupełnienia pośredniego.</p>' +
      '<h3>Wkład, nakład, overlay i endokorona, czym się różnią?</h3>' +
      '<p>Uzupełnienia pośrednie różnią się zakresem, w jakim pokrywają ząb, a zwłaszcza jego guzki:</p>' +
      '<table>' +
      '<tr><th>Typ uzupełnienia</th><th>Zakres odbudowy</th><th>Pokrycie guzków</th><th>Typowe zastosowanie</th></tr>' +
      '<tr><td>Wkład (inlay)</td><td>wnętrze korony zęba</td><td>bez guzków</td><td>umiarkowany ubytek w bruździe lub na powierzchni stycznej</td></tr>' +
      '<tr><td>Nakład (onlay)</td><td>wnętrze i co najmniej jeden guzek</td><td>częściowe</td><td>rozległy ubytek z osłabionym guzkiem</td></tr>' +
      '<tr><td>Overlay</td><td>cała powierzchnia żująca i wszystkie guzki</td><td>pełne</td><td>duża utrata tkanek, ochrona przed złamaniem</td></tr>' +
      '<tr><td>Endokorona</td><td>korona oparta na komorze zęba</td><td>pełne</td><td>mocno zniszczony ząb boczny po leczeniu kanałowym</td></tr>' +
      '</table>' +
      '<h3>Z czego wykonujemy uzupełnienie?</h3>' +
      '<p>Materiał dobieramy do lokalizacji zęba i obciążenia zgryzem. <strong>Kompozyt</strong> jest zachowawczy i naprawialny, dobrze wygląda w odcinku przednim. <strong>Ceramika</strong>, zwłaszcza na bazie <strong>dwukrzemianu litu</strong>, oraz <strong>cyrkon</strong> są bardzo trwałe i dobrze wyglądają w zębach bocznych. Uzupełnienia pośrednie projektujemy na podstawie cyfrowego wycisku pobranego <strong>skanerem wewnątrzustnym</strong>, bez tradycyjnej masy wyciskowej.</p>',
  },
  {
    title: 'Jak przebiega odbudowa zęba we Wrocławiu krok po kroku?',
    tocLabel: 'Przebieg zabiegu',
    content:
      '<p>Odbudowę poprzedza badanie i opanowanie próchnicy, a sam zabieg wykonujemy w znieczuleniu miejscowym, dlatego jest bezbolesny. Odbudowa bezpośrednia kompozytem zwykle mieści się w jednej wizycie, a odbudowa pośrednia wymaga dwóch.</p>' +
      '<ol>' +
      '<li><strong>Konsultacja i diagnostyka.</strong> Oceniamy zakres zniszczenia, żywotność zęba i zgryz, a następnie ustalamy metodę odbudowy.</li>' +
      '<li><strong>Przygotowanie zęba.</strong> Po znieczuleniu usuwamy próchnicę i nieszczelne wypełnienia, a pole zabiegu izolujemy koferdamem.</li>' +
      '<li><strong>Odbudowa bezpośrednia.</strong> Kompozyt nakładamy warstwami i utwardzamy światłem, modelujemy anatomię zęba, korygujemy zgryz i polerujemy powierzchnię. To jedna wizyta.</li>' +
      '<li><strong>Odbudowa pośrednia.</strong> Pobieramy cyfrowy wycisk skanerem, wykonujemy wkład lub nakład, a na drugiej wizycie wklejamy go adhezyjnie.</li>' +
      '<li><strong>Kontrola i zalecenia.</strong> Sprawdzamy kontakt zgryzowy i przekazujemy wskazówki pielęgnacyjne.</li>' +
      '</ol>' +
      '<p>Sama odbudowa kompozytowa zajmuje zwykle od 30 do 60 minut na ząb. Po zabiegu może wystąpić przejściowa nadwrażliwość na ciepło i zimno, która zwykle szybko ustępuje.</p>',
  },
  {
    title: 'Odbudowa zęba po leczeniu kanałowym, czy potrzebna jest korona?',
    tocLabel: 'Ząb po leczeniu kanałowym',
    content:
      '<p>Ząb po leczeniu kanałowym jest bardziej narażony na złamanie, ale głównie dlatego, że utracił dużo twardych tkanek wskutek próchnicy i dostępu do kanałów, a nie dlatego, że „wysechł". Samo otwarcie zęba do leczenia kanałowego obniża jego sztywność o około 5%, natomiast utrata obu listew brzeżnych w rozległym ubytku nawet o około 60%.</p>' +
      '<p>Dlatego zęby boczne po leczeniu kanałowym zwykle wymagają pokrycia guzków, czyli nakładu, overlay, endokorony lub <a href="/protetyka-korony/">korony protetycznej</a>. Zęby boczne pozostawione bez takiej ochrony są tracone wielokrotnie częściej niż zabezpieczone (badanie kohortowe Aquilino i Caplan). Zgodnie z wytycznymi pokrycie warto wykonać stosunkowo wcześnie po zakończonym leczeniu kanałowym (wytyczne ESE, 2021).</p>' +
      '<h3>Wkład koronowo-korzeniowy, czy wzmacnia ząb?</h3>' +
      '<p>Wbrew obiegowej opinii <strong>wkład koronowo-korzeniowy</strong> nie wzmacnia zęba. Służy wyłącznie do utrzymania, czyli retencji odbudowy, gdy z korony zostało zbyt mało tkanek. Przy dobrze zachowanej koronie jest zbędny. Stosujemy wkłady z włókna szklanego, wklejane adhezyjnie, których trwałość jest porównywalna z dawnymi wkładami metalowymi.</p>' +
      '<h3>Efekt ferrule, kiedy ząb da się jeszcze uratować?</h3>' +
      '<p>O możliwości odbudowy decyduje tak zwany efekt ferrule, czyli obwodowy kołnierz około 1,5 do 2 mm zdrowej zębiny, który obejmuje odbudowa lub korona. Gdy tego kołnierza brakuje, ząb można czasem przygotować przez chirurgiczne wydłużenie korony lub ekstruzję ortodontyczną. Jeśli korzeń jest pęknięty albo tkanek jest za mało, trwalszym rozwiązaniem bywa usunięcie zęba i <a href="/implanty-zebowe/">wszczepienie implantu</a>.</p>',
  },
  {
    title: 'Odbudowa startych zębów: bruksizm i erozja',
    tocLabel: 'Starte zęby i bruksizm',
    content:
      '<p>Starcie zębów to utrata szkliwa i zębiny wskutek tarcia zęba o ząb (atrycja), działania mechanicznego (abrazja) lub kwasów (erozja). Oznaki starcia ma blisko 40% dorosłych, a metodą pierwszego wyboru jest dziś odbudowa addytywna, czyli dołożenie kompozytu bez szlifowania zdrowych tkanek.</p>' +
      '<p>Najczęstszym tłem szybkiego starcia jest <strong>bruksizm</strong>, czyli powtarzalne zaciskanie i zgrzytanie zębami. U osób zdrowych traktuje się go jako zachowanie, a nie chorobę. Druga częsta przyczyna to <strong>erozja</strong> kwasowa, związana z refluksem lub kwaśną dietą. Trwałość odbudowy zależy od opanowania tej przyczyny.</p>' +
      '<h3>Podniesienie wysokości zwarcia (koncepcja Dahla)</h3>' +
      '<p>Gdy starcie obniżyło wysokość zwarcia, odbudowa w lekko podniesionym zgryzie pozwala odtworzyć utracone miejsce bez szlifowania zębów. Zgryz reorganizuje się wtedy samoistnie w ciągu kilku miesięcy.</p>' +
      '<p>Szyna ochronna, zwana relaksacyjną, zabezpiecza odbudowy przed siłami zgrzytania, jednak dowody na to, że całkowicie zatrzymuje samo starcie, są niewystarczające (przegląd Cochrane, 2007). Chroni więc odbudowy, ale nie leczy samego starcia.</p>',
  },
  {
    title: 'Odbudowa, korona, licówka czy implant, kiedy co wybrać?',
    tocLabel: 'Odbudowa a korona i implant',
    content:
      '<p>O wyborze metody decyduje przede wszystkim ilość zdrowej tkanki, jaka została w zębie, oraz obciążenie zgryzem. Im więcej zęba ubyło, tym pełniejsze pokrycie jest potrzebne: od kompozytu, przez nakład, po koronę. Gdy zęba nie da się już uratować, rozwiązaniem jest implant.</p>' +
      '<p>Odbudowa adhezyjna kompozytem, wkładem lub nakładem jest zachowawcza, bo oszczędza zdrowe tkanki. Przy bardzo dużej utracie tkanek lub braku kołnierza ferrule wytrzymałość zęba spada i pewniejszym rozwiązaniem jest <a href="/protetyka-korony/">korona protetyczna</a>. Jeśli korzeń jest pęknięty albo tkanek jest za mało, odbudowa nie ma oparcia i trwalej służy <a href="/implanty-zebowe/">implant zębowy</a>. To wybór warunkowy, zależny od konkretnego zęba.</p>' +
      '<table>' +
      '<tr><th>Sytuacja kliniczna</th><th>Zwykle proponujemy</th></tr>' +
      '<tr><td>Umiarkowany ubytek, zachowane ściany zęba</td><td>kompozyt bezpośredni lub wkład</td></tr>' +
      '<tr><td>Rozległy ubytek, osłabione guzki</td><td>nakład lub overlay</td></tr>' +
      '<tr><td>Mocno zniszczony ząb boczny po leczeniu kanałowym</td><td>endokorona lub korona</td></tr>' +
      '<tr><td>Mało tkanek, ale zachowany kołnierz ferrule</td><td>wkład z włókna szklanego i korona</td></tr>' +
      '<tr><td>Pęknięty korzeń lub brak ferrule</td><td>usunięcie zęba i implant</td></tr>' +
      '<tr><td>Zdrowy, mocny ząb z defektem estetycznym z przodu</td><td>licówka lub bonding</td></tr>' +
      '</table>' +
      '<p>Sama <a href="/licowki/">licówka</a> to cienka okładzina poprawiająca wygląd mocnego zęba od strony wargowej; nie odbudowuje rozległych ubytków ani powierzchni żującej. Dlatego przy dużym zniszczeniu wybieramy odbudowę lub koronę, a licówkę rezerwujemy dla wskazań estetycznych.</p>',
  },
  {
    title: 'Przeciwwskazania do odbudowy zęba',
    tocLabel: 'Przeciwwskazania',
    content:
      '<p>Większość przeciwwskazań do odbudowy zęba ma charakter względny. To sytuacje, które najpierw trzeba opanować, a nie trwałe zakazy zabiegu.</p>' +
      '<ul>' +
      '<li><strong>Nieopanowana próchnica i zła higiena.</strong> Wymagają leczenia i <a href="/higienizacja/">profesjonalnej higienizacji</a> przed odbudową, inaczej pod uzupełnieniem rozwinie się próchnica wtórna.</li>' +
      '<li><strong>Czynna choroba przyzębia.</strong> Stan zapalny dziąseł trzeba opanować, zanim wykonamy pracę na granicy dziąsła.</li>' +
      '<li><strong>Nieleczony bruksizm bez szyny.</strong> Zwiększa ryzyko złamania uzupełnienia, dlatego zalecamy szynę ochronną.</li>' +
      '<li><strong>Zbyt mało zdrowej tkanki.</strong> Przy braku kołnierza ferrule ząb może wymagać korony, a przy pęknięciu korzenia, usunięcia i implantu.</li>' +
      '</ul>' +
      '<p>Ostateczną decyzję podejmujemy po badaniu i ocenie zęba. Czasem plan leczenia zmienia się dopiero w trakcie zabiegu, gdy okaże się, że pod starym wypełnieniem zniszczenie jest większe, niż było widać na zdjęciu.</p>',
  },
  {
    title: 'Jak długo trzyma się odbudowa zęba?',
    tocLabel: 'Trwałość odbudowy',
    content:
      '<p>Trwałość odbudowy zależy od metody, materiału, wielkości ubytku i nawyków pacjenta. Dobrze wykonane uzupełnienia służą wiele lat, choć żadna odbudowa nie jest dożywotnia.</p>' +
      '<p>Kompozytowe odbudowy zębów bocznych zachowują około 90% przetrwania w obserwacji 10-letniej (przegląd systematyczny, Opdam i wsp., 2014), przy czym ryzyko rośnie u osób z wysokim ryzykiem próchnicy oraz z bruksizmem. Ceramiczne wkłady i nakłady osiągają około 92 do 95% w 5 lat i około 91% w 10 lat, a uzupełnienia z dwukrzemianu litu w zębach bocznych nawet około 96% w obserwacji kilkunastoletniej. Endokorony zachowują około 90% w 5 lat, choć dane pochodzą z nielicznych badań.</p>' +
      '<p>Odbudowy startych zębów kompozytem mają wysoką przeżywalność w okresie krótkoterminowym i średnioterminowym, a w dłuższej perspektywie zwykle wymagają napraw lub wymiany. Uszkodzoną odbudowę często da się też naprawić punktowo, bez wymiany całości.</p>' +
      '<h3>Jak przedłużyć trwałość odbudowy?</h3>' +
      '<ul>' +
      '<li>Regularna higiena domowa i kontrolne <a href="/higienizacja/">wizyty higienizacyjne</a>.</li>' +
      '<li>Szyna ochronna przy bruksizmie oraz kontrola kwaśnej diety lub refluksu.</li>' +
      '<li>Przeglądy stomatologiczne, które pozwalają naprawić drobne ubytki, zanim się powiększą.</li>' +
      '</ul>',
  },
  {
    title: 'Ile kosztuje odbudowa zębów we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content:
      '<p>Cena odbudowy zęba we Wrocławiu zależy przede wszystkim od metody i zakresu zniszczenia: od stosunkowo prostej odbudowy kompozytowej, przez wkład czy nakład, po endokoronę i koronę z wkładem koronowo-korzeniowym.</p>' +
      '<p>Na koszt wpływają najczęściej:</p>' +
      '<ul>' +
      '<li><strong>Metoda</strong>, czyli odbudowa bezpośrednia kompozytem albo uzupełnienie pośrednie.</li>' +
      '<li><strong>Materiał</strong>: kompozyt, ceramika lub cyrkon.</li>' +
      '<li><strong>Wielkość ubytku</strong> i liczba odbudowywanych powierzchni.</li>' +
      '<li><strong>Stan zęba</strong>, to znaczy czy jest po leczeniu kanałowym i czy potrzebny jest wkład.</li>' +
      '<li><strong>Lokalizacja zęba</strong>, przedni o wysokich wymaganiach estetycznych czy boczny.</li>' +
      '</ul>' +
      '<p>Część zachowawczych wypełnień bywa objęta refundacją NFZ, natomiast estetyczne i pośrednie odbudowy, takie jak ceramika, endokorona czy korona, to zwykle świadczenia komercyjne. Aktualne stawki znajdziesz w <a href="/cennik/">cenniku</a>, a konkretną wycenę przygotowujemy po badaniu. Metodę odbudowy dobieramy podczas konsultacji, na którą umówisz się przez <a href="/rejestracja/">rejestrację online</a>.</p>' +
      '<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji ani badania stomatologicznego. Zakres odbudowy, metodę oraz materiał dobiera lekarz indywidualnie po ocenie konkretnego zęba.</p>',
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content:
      '<ol>' +
      '<li>European Society of Endodontology (Mannocci F, Bhuva B, Roig M, Zarow M, Bitter K). The restoration of root filled teeth: ESE position statement. International Endodontic Journal. 2021;54(7):1005-1019. PMID 34378217.</li>' +
      '<li>Opdam NJM, van de Sande FH, Bronkhorst E i wsp. Longevity of Posterior Composite Restorations: A Systematic Review and Meta-analysis. Journal of Dental Research. 2014;93(10):943-949. PMID 25048250.</li>' +
      '<li>Demarco FF, Correa MB, Cenci MS, Moraes RR, Opdam NJM. Longevity of posterior composite restorations: not only a matter of materials. Dental Materials. 2012;28(1):87-101. PMID 22192253.</li>' +
      '<li>Demarco FF, Collares K, Coelho-de-Souza FH i wsp. Anterior composite restorations: a systematic review on long-term survival and reasons for failure. Dental Materials. 2015;31(10):1214-1224. PMID 26303655.</li>' +
      '<li>Morimoto S, Rebello de Sampaio FBW, Braga MM, Sesma N, Ozcan M. Survival Rate of Resin and Ceramic Inlays, Onlays, and Overlays: A Systematic Review and Meta-analysis. Journal of Dental Research. 2016;95(9):985-994. PMID 27287305.</li>' +
      '<li>Malament KA i wsp. Survival of pressed acid etched lithium disilicate complete and partial coverage restorations in posterior teeth. Journal of Prosthetic Dentistry. 2021;126(4):533-545. PMID 33010922.</li>' +
      '<li>Al-Dabbagh RA. Survival and success of endocrowns: A systematic review and meta-analysis. Journal of Prosthetic Dentistry. 2021;125(3):415.e1-415.e9. PMID 32197872.</li>' +
      '<li>Aquilino SA, Caplan DJ. Relationship between crown placement and the survival of endodontically treated teeth. Journal of Prosthetic Dentistry. 2002;87(3):256-263. PMID 11941351.</li>' +
      '<li>Reeh ES, Messer HH, Douglas WH. Reduction in tooth stiffness as a result of endodontic and restorative procedures. Journal of Endodontics. 1989;15(11):512-516. PMID 2639947.</li>' +
      '<li>Juloski J, Radovic I, Goracci C, Vulicevic ZR, Ferrari M. Ferrule Effect: A Literature Review. Journal of Endodontics. 2012;38(1):11-19. PMID 22152612.</li>' +
      '<li>Tsintsadze N i wsp. Comparing survival rates of endodontically treated teeth restored with glass-fiber-reinforced or metal posts. Journal of Prosthetic Dentistry. 2024. PMID 35430048.</li>' +
      '<li>Ahmed KE, Murbay S. Survival rates of anterior composites in managing tooth wear: a systematic review. Journal of Oral Rehabilitation. 2016;43(2):145-153. PMID 26440584.</li>' +
      '<li>Macedo CR, Silva AB, Machado MA, Saconato H, Prado GF. Occlusal splints for treating sleep bruxism (tooth grinding). Cochrane Database of Systematic Reviews. 2007;(4):CD005514. PMID 17943862.</li>' +
      '<li>Lobbezoo F i wsp. International consensus on the assessment of bruxism. Journal of Oral Rehabilitation. 2018;45(11):837-844. PMID 29926505.</li>' +
      '<li>Salari N i wsp. Global prevalence of tooth wear: a systematic review and meta-analysis. Public Health in Practice. 2025. PMID 41502587.</li>' +
      '<li>Sadid-Zadeh R i wsp. Clinical evaluation of lithium disilicate versus indirect resin composite partial posterior restorations: a 7.8-year retrospective study. Dental Materials. 2023. PMID 37821330.</li>' +
      '</ol>',
  },
];

export default function OdbudowaZebowPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Odbudowa zębów Wrocław"
      heroSubtitle="Stomatologia estetyczna"
      heroDescription="Estetyczna odbudowa zębów z wykorzystaniem nowoczesnych kompozytów i ceramiki. Przywracamy naturalny wygląd i pełną funkcjonalność zębów."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="stomatologia-estetyczna/odbudowa-zebow"
    />
  );
}
