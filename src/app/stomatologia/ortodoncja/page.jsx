import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Ortodoncja Wrocław - prostowanie zębów',
  description: 'Ortodoncja we Wrocławiu: aparaty stałe, alignery i aparaty ruchome. Sprawdź, jak leczymy wady zgryzu u dzieci i dorosłych oraz który aparat wybrać.',
  path: '/stomatologia/ortodoncja/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Ortodoncja' },
];

const FAQ = [
  { question: 'W jakim wieku najlepiej rozpocząć leczenie ortodontyczne?', answer: 'Pierwsza wizyta ortodontyczna powinna odbyć się około 7. roku życia, gdy w jamie ustnej są jeszcze zęby mleczne i pierwsze stałe. Leczenie aparatem stałym zaczyna się zwykle po wyrznięciu większości zębów stałych (12-14 lat), a dorośli mogą rozpocząć je w każdym wieku.' },
  { question: 'Czy leczenie ortodontyczne jest skuteczne u dorosłych?', answer: 'Tak. Zęby można przemieszczać w każdym wieku, dlatego coraz więcej dorosłych korzysta z aparatów stałych lub alignerów. Warunkiem jest zdrowe przyzębie i zaleczone zęby; u dorosłych leczenie bywa nieco dłuższe niż u dzieci.' },
  { question: 'Ile trwa leczenie ortodontyczne?', answer: 'Leczenie ortodontyczne trwa zwykle od 1,5 do 3 lat. Proste przypadki udaje się skorygować w 6-12 miesięcy, a złożone wady zgryzu wymagają więcej czasu. Długość leczenia zależy od rodzaju wady, wieku i regularności noszenia aparatu.' },
  { question: 'Czy leczenie aparatem ortodontycznym jest bolesne?', answer: 'Samo założenie aparatu nie jest bolesne. Po każdej aktywacji może pojawić się uczucie ucisku i tkliwość zębów, które zwykle ustępuje w ciągu 2-3 dni. Z kolejnymi wizytami dyskomfort jest coraz mniejszy.' },
  { question: 'Czy po zdjęciu aparatu zęby się cofają?', answer: 'Bez retencji zęby mają tendencję do powrotu w stronę dawnego ustawienia. Dlatego po leczeniu zakłada się aparat retencyjny, stały lub ruchomy. Przegląd Cochrane (Martin i wsp., 2023) podkreśla, że retencję planuje się długoterminowo i dobiera indywidualnie.' },
  { question: 'Gdzie we Wrocławiu prowadzicie leczenie ortodontyczne?', answer: `Leczenie ortodontyczne prowadzimy w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Na konsultację ortodontyczną, podczas której oceniamy zgryz i dobieramy aparat, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest ortodoncja i jakie wady zgryzu leczy?',
    tocLabel: 'Czym jest',
    content: '<p>Ortodoncja to dział stomatologii zajmujący się rozpoznawaniem i korygowaniem wad zgryzu oraz nieprawidłowego ustawienia zębów. Prawidłowy zgryz to nie tylko estetyka: ułatwia gryzienie i mowę oraz utrzymanie higieny, a przez to obniża ryzyko próchnicy i chorób przyzębia.</p><p>Leczenie poprzedza diagnostyka. Ortodonta ocenia zgryz, wykonuje zdjęcie pantomograficzne i cefalometryczne oraz <strong>cyfrowy skan wewnątrzustny</strong>, na podstawie których planuje terapię. Najczęściej koryguje się następujące nieprawidłowości:</p><ul><li><strong>Stłoczenia zębów</strong>: brak miejsca w łuku sprawia, że zęby zachodzą na siebie.</li><li><strong>Szpary między zębami (diastema)</strong>: nadmiar miejsca, m.in. szpara między jedynkami.</li><li><strong>Tyłozgryz i przodozgryz</strong>: nieprawidłowe wzajemne ustawienie łuków zębowych.</li><li><strong>Zgryz otwarty, głęboki lub krzyżowy</strong>: zęby nie kontaktują się prawidłowo podczas zwierania.</li></ul><p>Warunkiem jest zdrowe podłoże. Przed założeniem aparatu trzeba zaleczyć próchnicę w ramach <a href="/stomatologia/leczenie-zebow/">leczenia zachowawczego zębów</a> i opanować stan zapalny dziąseł, dlatego leczenie zaczyna się od <a href="/stomatologia/higienizacja/">profesjonalnej higienizacji</a>.</p>',
  },
  {
    title: 'Rodzaje aparatów ortodontycznych',
    tocLabel: 'Rodzaje aparatów',
    content: '<p>W ortodoncji stosuje się trzy główne grupy aparatów: stałe, alignery (przezroczyste nakładki) oraz ruchome. Wybór zależy od rodzaju wady, wieku pacjenta i etapu leczenia.</p><h3>Aparat stały</h3><p>Zamki przyklejane do zębów i połączone łukiem wywierają stały, kontrolowany nacisk. Zamki bywają metalowe lub mniej widoczne ceramiczne. To rozwiązanie pozwala korygować niemal każdą wadę zgryzu i działa niezależnie od współpracy pacjenta. Więcej w opisie <a href="/stomatologia/aparaty-stale/">aparatów stałych</a>.</p><h3>Alignery</h3><p>Seria przezroczystych, zdejmowanych nakładek stopniowo przesuwa zęby. Są dyskretne i ułatwiają higienę, ale wymagają noszenia przez około 20-22 godziny na dobę. Szczegóły w sekcji <a href="/stomatologia/alignery/">alignerów</a>.</p><h3>Aparat ruchomy</h3><p>Zdejmowany aparat stosuje się głównie u dzieci we wczesnej fazie leczenia oraz jako terapię wspomagającą. Sprawdza się w okresie wymiany zębów w ramach <a href="/stomatologia/dziecieca/">stomatologii dziecięcej</a>. Więcej o <a href="/stomatologia/aparaty-ruchome/">aparatach ruchomych</a>.</p>',
  },
  {
    title: 'Aparat stały, alignery czy ruchomy? Porównanie metod',
    tocLabel: 'Porównanie metod',
    content: '<p>Nie ma jednego najlepszego aparatu. Odpowiednią metodę dobiera się do konkretnej wady zgryzu, wieku i trybu życia pacjenta.</p><table><tr><th>Metoda</th><th>Zakres wad zgryzu</th><th>Estetyka i komfort</th><th>Współpraca pacjenta</th></tr><tr><td>Aparat stały</td><td>Od prostych po złożone</td><td>Widoczny (mniej w wersji ceramicznej)</td><td>Działa na stałe, niezależnie od pacjenta</td></tr><tr><td>Alignery</td><td>Lekkie do umiarkowanych</td><td>Przezroczyste, zdejmowane</td><td>Wymagają noszenia 20-22 h na dobę</td></tr><tr><td>Aparat ruchomy</td><td>Wczesne leczenie u dzieci, ograniczony zakres</td><td>Zdejmowany</td><td>Zależy od regularnego noszenia</td></tr></table><p>Najczęściej pacjenci wahają się między <a href="/stomatologia/aparaty-stale/">aparatem stałym</a> a <a href="/stomatologia/alignery/">alignerami</a>. Przegląd systematyczny porównujący obie metody (Jaber i wsp., 2023) wskazuje, że w przypadkach z ekstrakcjami obie są skuteczne, ale aparaty stałe dają lepszą kontrolę nachylenia zębów i kontaktów zwarciowych w krótszym czasie. Przy alignerach może natomiast wystąpić rozbieżność między zaplanowanym a uzyskanym ruchem zębów. Z drugiej strony alignery bywają wybierane ze względu na komfort, dyskrecję i łatwiejszą higienę.</p><p>Dlatego w złożonych wadach częściej sprawdza się aparat stały, a w wadach lekkich i umiarkowanych, gdy zależy nam na niewidocznym leczeniu, alignery. Ostateczną decyzję podejmuje ortodonta po diagnostyce.</p>',
  },
  {
    title: 'Jak przebiega leczenie ortodontyczne krok po kroku?',
    tocLabel: 'Przebieg leczenia',
    content: '<p>Leczenie ortodontyczne to proces rozłożony na wizyty: od diagnostyki, przez założenie aparatu, po regularne kontrole i fazę retencji.</p><ol><li><strong>Konsultacja i diagnostyka</strong>: ocena zgryzu, zdjęcie pantomograficzne i cefalometryczne oraz cyfrowy skan wewnątrzustny.</li><li><strong>Plan leczenia</strong>: ortodonta dobiera rodzaj aparatu i omawia przewidywany czas terapii.</li><li><strong>Założenie aparatu</strong>: przyklejenie zamków albo wydanie pierwszych nakładek.</li><li><strong>Wizyty kontrolne</strong>: co kilka tygodni aktywacja aparatu lub wymiana alignerów. W tym czasie szczególnie ważna jest <a href="/stomatologia/higienizacja/">higiena jamy ustnej</a>.</li><li><strong>Zakończenie i retencja</strong>: zdjęcie aparatu i założenie aparatu retencyjnego utrwalającego efekt.</li></ol><p>Całość trwa zwykle od 1,5 do 3 lat. Proste przypadki udaje się skorygować w około 6-12 miesięcy. Długość leczenia zależy od rodzaju wady, wieku oraz współpracy pacjenta.</p>',
  },
  {
    title: 'Przeciwwskazania, ryzyka i ograniczenia leczenia',
    tocLabel: 'Przeciwwskazania',
    content: '<p>Leczenie ortodontyczne jest bezpieczne, ale jak każda terapia ma ograniczenia i wymaga spełnienia kilku warunków.</p><ul><li><strong>Nieleczona próchnica i choroba dziąseł</strong>: aparat zakłada się dopiero po opanowaniu stanu zapalnego i wyleczeniu zębów w ramach <a href="/stomatologia/leczenie-zebow/">leczenia zachowawczego</a>.</li><li><strong>Niedostateczna higiena</strong>: wokół zamków łatwo o demineralizację szkliwa (białe plamy) i próchnicę, dlatego podczas leczenia trzeba szczególnie dbać o higienę.</li><li><strong>Resorpcja korzeni</strong>: przy długim leczeniu i dużych siłach może dojść do skrócenia korzeni zębów. Przegląd przeglądów systematycznych (Yassir i wsp., 2021) zaleca unikanie ciężkich, stałych sił oraz regularne monitorowanie.</li><li><strong>Niezakończony wzrost lub brak współpracy</strong>: u dzieci moment rozpoczęcia dobiera ortodonta, a alignery i aparaty ruchome działają tylko przy regularnym noszeniu.</li><li><strong>Nierealne oczekiwania</strong>: ortodoncja koryguje ustawienie zębów i zgryz, nie zmienia natomiast koloru ani kształtu zęba.</li></ul>',
  },
  {
    title: 'Retencja: jak utrwalić efekt leczenia?',
    tocLabel: 'Retencja i trwałość',
    content: '<p>Zdjęcie aparatu nie kończy leczenia. Bez retencji zęby mają tendencję do powrotu w stronę dawnego ustawienia, czyli do nawrotu.</p><p>Po aktywnej fazie zakłada się aparat retencyjny: stały (cienki drut po wewnętrznej stronie zębów) lub ruchomy (przezroczysta nakładka). Przegląd Cochrane obejmujący 47 badań (Martin i wsp., 2023) wskazuje, że dowody są niskiej i bardzo niskiej jakości i nie pozwalają wskazać jednego protokołu retencji jako wyraźnie lepszego. Noszenie nakładek przez cały czas nie okazało się skuteczniejsze niż noszenie częściowe.</p><p>W praktyce retencję traktuje się jako element długoterminowy, a sposób i czas noszenia aparatu retencyjnego ortodonta dobiera indywidualnie.</p>',
  },
  {
    title: 'Ile kosztuje leczenie ortodontyczne we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content: '<p>Koszt leczenia ortodontycznego zależy przede wszystkim od rodzaju wady i wybranego aparatu, dlatego ustala się go po konsultacji. Na wycenę wpływają:</p><ul><li><strong>Rodzaj aparatu</strong>: aparat ruchomy, stały metalowy, ceramiczny i alignery różnią się ceną.</li><li><strong>Złożoność wady zgryzu</strong>: im trudniejszy przypadek, tym dłuższe leczenie i więcej wizyt.</li><li><strong>Liczba leczonych łuków</strong>: jeden łuk czy oba.</li><li><strong>Diagnostyka i retencja</strong>: zdjęcia, skan oraz aparat retencyjny po leczeniu.</li></ul><p>Orientacyjne stawki znajdziesz w <a href="/cennik/">cenniku</a>, a indywidualną wycenę podajemy po badaniu. Termin wizyty zarezerwujesz przez <a href="/rejestracja/">rejestrację online</a>.</p><p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji ortodontycznej. O wyborze metody leczenia decyduje lekarz po badaniu i diagnostyce.</p>',
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: '<ol><li>Jaber ST i wsp. Treatment Effectiveness of Clear Aligners in Correcting Complicated and Severe Malocclusion Cases Compared to Fixed Orthodontic Appliances: A Systematic Review. Cureus 2023. PMID 37128600.</li><li>Yassir i wsp. Orthodontic treatment and root resorption: an overview of systematic reviews. European Journal of Orthodontics 2021. PMID 33215186.</li><li>Martin C i wsp. Retention procedures for stabilising tooth position after treatment with orthodontic braces. Cochrane Database of Systematic Reviews 2023. PMID 37219527.</li><li>American Association of Orthodontists. Zalecenie pierwszej kontroli ortodontycznej około 7. roku życia.</li><li>Polskie Towarzystwo Ortodontyczne. Standardy i zalecenia dotyczące leczenia ortodontycznego.</li></ol>',
  },
];

const CHILD_SERVICES = [
  { name: 'Aparaty stałe', description: 'Klasyczne aparaty stałe metalowe i estetyczne ceramiczne.', href: '/stomatologia/aparaty-stale/' },
  { name: 'Alignery', description: 'Przezroczyste nakładki do niewidocznego prostowania zębów.', href: '/stomatologia/alignery/' },
  { name: 'Aparaty ruchome', description: 'Aparaty ruchome dla dzieci i dorosłych.', href: '/stomatologia/aparaty-ruchome/' },
];

export default function OrtodoncjaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Ortodoncja Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Kompleksowe leczenie ortodontyczne w Bas Clinic. Aparaty stałe, alignery i aparaty ruchome. Prostujemy zęby skutecznie i komfortowo."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      childServices={CHILD_SERVICES}
      slug="stomatologia/ortodoncja"
    />
  );
}
