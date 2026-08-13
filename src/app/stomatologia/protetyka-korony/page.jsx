import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Korona protetyczna Wrocław - cyrkon, ceramika',
  description: 'Korona protetyczna we Wrocławiu: cyrkonowa, pełnoceramiczna lub metaloceramiczna. Zobacz, kiedy jest potrzebna, jak przebiega zabieg i jak długo się trzyma.',
  path: '/stomatologia/protetyka-korony/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Protetyka korony' },
];

const FAQ = [
  { question: 'Czy założenie korony protetycznej boli?', answer: 'Założenie korony zwykle nie jest bolesne. Oszlifowanie zęba wykonujemy w znieczuleniu miejscowym, dzięki czemu pacjenci najczęściej nie odczuwają bólu, a przy zębie po leczeniu kanałowym znieczulenie często nie jest nawet potrzebne. Samo cementowanie gotowej korony to krótki i komfortowy etap.' },
  { question: 'Czy przed koroną trzeba leczyć ząb kanałowo?', answer: 'Leczenie kanałowe przed koroną nie zawsze jest konieczne. Koronę można osadzić na żywym, oszlifowanym zębie. Leczenie kanałowe wykonujemy tylko wtedy, gdy miazga jest objęta stanem zapalnym lub martwa, albo gdy do odbudowy zrębu potrzebny jest wkład koronowo-korzeniowy.' },
  { question: 'Jak długo wytrzymuje korona protetyczna?', answer: 'Korona protetyczna wytrzymuje u większości pacjentów wiele lat. W metaanalizie z 2026 roku pięcioletnie przeżycie koron na zębach własnych wynosiło około 97 procent. Trwałość zależy od higieny, zgryzu i regularnych wizyt kontrolnych.' },
  { question: 'Korona czy implant - co wybrać?', answer: 'Korona ratuje własny, ale zniszczony ząb, którego korzeń jest zdrowy. Implant z koroną zastępuje natomiast ząb, który już wypadł lub trzeba go usunąć. O wyborze decyduje stan korzenia i kości, dlatego ocenę przeprowadzamy podczas konsultacji.' },
  { question: 'Z jakiego materiału jest najlepsza korona na ząb?', answer: 'Najlepszy materiał na koronę zależy od pozycji zęba. W strefie uśmiechu sprawdza się pełna ceramika z dwukrzemianu litu, która naturalnie przepuszcza światło. Na zęby boczne, mosty i przy bruksizmie wybieramy bardzo wytrzymały cyrkon. Metaloceramika to rozwiązanie uniwersalne.' },
  { question: 'Gdzie we Wrocławiu założyć koronę protetyczną?', answer: `Korony protetyczne zakładamy w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Na konsultację, podczas której oceniamy stan zęba i zgryzu oraz dobieramy materiał korony, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest korona protetyczna i kiedy jest potrzebna?',
    tocLabel: 'Czym jest korona?',
    content:
      (
      <>
        <p><strong>Korona protetyczna</strong> to stałe uzupełnienie, które pokrywa całą koronę kliniczną zniszczonego lub osłabionego zęba i przywraca mu kształt, funkcję żucia oraz wygląd. W mowie potocznej mówi się o niej „korona na ząb” albo „koronka”.</p>
        <p>Koronę rozważamy wtedy, gdy zęba nie da się już trwale odbudować mniejszym wypełnieniem, a jego korzeń jest zdrowy. Najczęstsze wskazania to:</p>
        <ul>
          <li>ząb po <Link href="/stomatologia/leczenie-zebow/">leczeniu kanałowym</Link>, który staje się bardziej kruchy;</li>
          <li>rozległy ubytek lub duże, stare wypełnienie osłabiające ząb;</li>
          <li>złamanie albo pęknięcie korony zęba;</li>
          <li>znaczne starcie zębów, na przykład przy bruksizmie;</li>
          <li><Link href="/stomatologia/implanty-zebowe/">korona na implancie</Link> odtwarzająca pojedynczy brak;</li>
          <li>ząb filarowy mostu przy <Link href="/stomatologia/leczenie-bezzebia/">uzupełnianiu większych braków</Link>.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Korona pełnoceramiczna, cyrkonowa czy metaloceramiczna?',
    tocLabel: 'Materiały i rodzaje',
    content:
      (
      <>
        <p>Korony różnią się przede wszystkim materiałem, a od niego zależy estetyka i wytrzymałość. Wybór zależy od tego, czy ząb leży w strefie uśmiechu, jak duże siły żucia go obciążają i jakiej estetyki oczekujesz.</p>
        <table>
          <tbody>
            <tr>
              <th>Materiał</th>
              <th>Estetyka</th>
              <th>Wytrzymałość</th>
              <th>Typowe zastosowanie</th>
            </tr>
            <tr>
              <td>Metaloceramika (PFM)</td>
              <td>dobra, metalowy rdzeń bywa widoczny przy dziąśle</td>
              <td>wysoka</td>
              <td>zęby boczne, mosty</td>
            </tr>
            <tr>
              <td>Pełna ceramika z dwukrzemianu litu (e.max)</td>
              <td>bardzo wysoka, przepuszcza światło jak szkliwo</td>
              <td>dobra</td>
              <td>zęby przednie, pojedyncze korony</td>
            </tr>
            <tr>
              <td>Cyrkon (tlenek cyrkonu)</td>
              <td>wysoka</td>
              <td>bardzo wysoka</td>
              <td>zęby boczne, mosty, bruksizm, korony na implantach</td>
            </tr>
            <tr>
              <td>Akryl lub kompozyt</td>
              <td>ograniczona</td>
              <td>niska</td>
              <td>korony tymczasowe, rozwiązania doraźne</td>
            </tr>
          </tbody>
        </table>
        <p>W strefie uśmiechu zwykle wybieramy pełną ceramikę, bo najlepiej naśladuje naturalny ząb. W odcinku bocznym i w mostach przewagę daje cyrkon, który znosi duże obciążenia żucia. Korony monolityczne, frezowane z jednego bloku, rzadziej odpryskują niż korony licowane porcelaną (Pjetursson i wsp., 2026). Jeśli ząb jest w dużej mierze zdrowy, a chodzi tylko o poprawę wyglądu, alternatywą bywa cieńsza <Link href="/stomatologia/licowki/">licówka</Link>.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega zakładanie korony krok po kroku?',
    tocLabel: 'Przebieg zabiegu',
    content:
      (
      <>
        <p>Wykonanie korony to zwykle dwie wizyty w odstępie około 7 do 10 dni. Między nimi gotowy ząb chroni korona tymczasowa, a docelową wykonuje pracownia protetyczna.</p>
        <ol>
          <li>Konsultacja i ocena: badanie, zdjęcie RTG, sprawdzenie ilości zdrowej tkanki oraz stanu przyzębia.</li>
          <li>Przygotowanie zęba: w razie potrzeby leczenie kanałowe lub wkład koronowo-korzeniowy odbudowujący zrąb.</li>
          <li>Preparacja, czyli oszlifowanie zęba w znieczuleniu miejscowym, aby zrobić miejsce na koronę.</li>
          <li>Wycisk klasyczny lub cyfrowy <strong>skan wewnątrzustny</strong>, na podstawie którego powstaje korona.</li>
          <li>Założenie korony tymczasowej, która zabezpiecza oszlifowany ząb.</li>
          <li>Wykonanie korony docelowej w pracowni, często w technologii CAD/CAM.</li>
          <li>Przymiarka, korekta koloru i kształtu oraz trwałe cementowanie na zębie.</li>
        </ol>
      </>
    ),
  },
  {
    title: 'Czy trzeba szlifować ząb pod koronę i czy to boli?',
    tocLabel: 'Szlifowanie i ból',
    content:
      (
      <>
        <p>Tak, założenie korony wymaga oszlifowania zęba, czyli usunięcia części szkliwa i zębiny. Preparację wykonujemy w znieczuleniu miejscowym, dzięki czemu pacjenci zwykle nie odczuwają bólu.</p>
        <p>Korona obejmuje cały ząb, dlatego wymaga zdjęcia większej ilości tkanki niż <Link href="/stomatologia/licowki/">licówka</Link>, która pokrywa tylko przednią powierzchnię. Tego oszlifowania nie da się cofnąć, więc decyzję podejmujemy rozważnie.</p>
        <p>Z drugiej strony dla zęba mocno zniszczonego lub po leczeniu kanałowym korona bywa realną ochroną przed pęknięciem. Przegląd Cochrane (Sequeira-Byron i wsp., 2015) zwraca jednak uwagę, że dla zębów po leczeniu kanałowym nie ma jednoznacznych dowodów na wyższość korony nad zwykłym wypełnieniem. Decyzja zależy od ilości pozostałej zdrowej tkanki i obciążenia zęba w zgryzie.</p>
        <p>W praktyce koronę proponujemy, gdy z zęba zostało już niewiele albo jest on mocno obciążony. Przy niewielkim ubytku często wystarcza mniej inwazyjna <Link href="/stomatologia/odbudowa-zebow/">kompozytowa odbudowa zęba</Link>. Samo cementowanie gotowej korony jest zwykle niebolesne.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania do korony protetycznej',
    tocLabel: 'Przeciwwskazania',
    content:
      (
      <>
        <p>Korony nie zakładamy od razu, jeśli w jamie ustnej toczy się aktywny problem, który najpierw trzeba opanować. Pominięcie tego etapu skraca trwałość pracy.</p>
        <ul>
          <li><strong>Aktywna próchnica i nieszczelne wypełnienia</strong> wymagają najpierw <Link href="/stomatologia/leczenie-zebow/">leczenia zachowawczego</Link>.</li>
          <li><strong>Nieleczona choroba przyzębia lub ruchomość zęba</strong> oznaczają konieczność stabilizacji przyzębia i <Link href="/stomatologia/higienizacja/">profesjonalnej higienizacji</Link> przed protetyką.</li>
          <li><strong>Zbyt mało zdrowej tkanki lub zniszczony korzeń</strong> skłaniają do odbudowy wkładem koronowo-korzeniowym, a gdy zęba nie da się uratować, do jego usunięcia i <Link href="/stomatologia/implanty-zebowe/">odbudowy na implancie</Link>.</li>
          <li><strong>Bruksizm, czyli zaciskanie i zgrzytanie zębami</strong>, skłania do wyboru wytrzymałego materiału i zalecenia szyny ochronnej.</li>
          <li><strong>Niedostateczna higiena jamy ustnej</strong> zwiększa ryzyko próchnicy wtórnej na granicy korony.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Jak długo wytrzymuje korona i jak o nią dbać?',
    tocLabel: 'Trwałość i pielęgnacja',
    content:
      (
      <>
        <p>Korona protetyczna służy u większości pacjentów wiele lat. W metaanalizie z 2026 roku (Pjetursson i wsp.) pięcioletnie przeżycie koron na zębach własnych wynosiło około 97 do 98 procent, zależnie od materiału.</p>
        <p>Raportowano 97,1 procent dla metaloceramiki, 98,5 procent dla monolitycznego dwukrzemianu litu i 96,8 procent dla monolitycznego cyrkonu. Podobnie wysokie przeżycie koron z dwukrzemianu litu, 97,8 procent po pięciu latach, opisał wcześniej przegląd Piegera i wsp. (2014). To dane statystyczne dla populacji, a nie obietnica dotycząca pojedynczego zęba.</p>
        <h3>Najczęstsze powikłania korony protetycznej</h3>
        <ul>
          <li>odprysk ceramiki licującej, rzadszy w koronach monolitycznych;</li>
          <li>próchnica wtórna na styku korony z zębem;</li>
          <li>rozcementowanie korony;</li>
          <li>zapalenie miazgi pod koroną osadzoną na żywym zębie.</li>
        </ul>
        <h3>Jak dbać o koronę, by posłużyła dłużej?</h3>
        <p>Koronę pielęgnujemy jak własny ząb: codzienne szczotkowanie, czyszczenie przestrzeni przy brzegu korony nicią lub irygatorem oraz regularne kontrole i <Link href="/stomatologia/higienizacja/">higienizacja</Link>. To właśnie szczelny brzeg i zdrowe dziąsło decydują o tym, jak długo korona posłuży.</p>
      </>
    ),
  },
  {
    title: 'Korona, most, implant czy licówka? Co wybrać',
    tocLabel: 'Korona a alternatywy',
    content:
      (
      <>
        <p>Korona ratuje własny, ale zniszczony ząb, którego korzeń jest zdrowy. Gdy ząb już wypadł albo trzeba go usunąć, wybór jest inny.</p>
        <p>Brakujący pojedynczy ząb najczęściej uzupełniamy <Link href="/stomatologia/implanty-zebowe/">implantem z koroną</Link>, który nie wymaga szlifowania sąsiednich zębów. Przy większej liczbie braków rozważamy most lub protezę w ramach <Link href="/stomatologia/leczenie-bezzebia/">leczenia bezzębia</Link>. Jeśli ząb jest w dużej mierze zdrowy, a chodzi o estetykę przodu, mniej inwazyjnym rozwiązaniem bywa <Link href="/stomatologia/licowki/">licówka</Link>. Przy niewielkich ubytkach wystarcza kompozytowa odbudowa zęba.</p>
        <p>O tym, które rozwiązanie będzie najtrwalsze w Twoim przypadku, decyduje stan zęba, zgryz i Twoje oczekiwania. Dlatego zakres planujemy wspólnie podczas konsultacji.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje korona protetyczna we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content:
      (
      <>
        <p>Cena korony protetycznej we Wrocławiu zależy przede wszystkim od materiału oraz od tego, co trzeba zrobić z zębem przed jej założeniem. Na koszt wpływają:</p>
        <ul>
          <li>materiał korony: metaloceramika, pełna ceramika z dwukrzemianu litu lub cyrkon;</li>
          <li>konieczność wcześniejszego leczenia kanałowego albo wkładu koronowo-korzeniowego;</li>
          <li>pozycja zęba, czyli ząb przedni lub boczny, oraz wymagania estetyczne;</li>
          <li>technologia wykonania, na przykład cyfrowy skan i frezowanie CAD/CAM.</li>
        </ul>
        <p>Korony pełnoceramiczne i cyrkonowe są zwykle świadczeniem prywatnym, nierefundowanym przez NFZ, który pokrywa jedynie ograniczony zakres protetyki. Aktualne stawki znajdziesz w zakładce <Link href="/cennik/">cennik</Link>, a indywidualną wycenę po ocenie zęba przygotujemy podczas <Link href="/rejestracja/">wizyty</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O kwalifikacji do zabiegu, doborze materiału i ewentualnych przeciwwskazaniach decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content:
      (
      <ol>
        <li>Pjetursson BE i wsp. A Systematic Review and Meta-analysis Evaluating the Survival, Failure, and Complication Rates of Metal-Ceramic, Veneered, and Monolithic All-Ceramic Tooth-Supported Single Crowns, Part 1. Int J Prosthodont 2026 (PMID 41489982).</li>
        <li>Pieger S i wsp. Clinical outcomes of lithium disilicate single crowns and partial fixed dental prostheses: a systematic review. J Prosthet Dent 2014 (PMID 24674802).</li>
        <li>Sequeira-Byron P i wsp. Single crowns versus conventional fillings for the restoration of root-filled teeth. Cochrane Database Syst Rev 2015; CD009109 (PMID 26403154).</li>
        <li>Sailer I i wsp. All-ceramic or metal-ceramic tooth-supported fixed dental prostheses (FDPs)? A systematic review of the survival and complication rates. Part I: Single crowns. Dent Mater 2015 (PMID 25842099).</li>
      </ol>
    ),
  },
];

export default function ProtetykaKoronyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Korona protetyczna Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Korony protetyczne w Bas Clinic we Wrocławiu. Pełna ceramika, cyrkon i metaloceramika odbudowują zniszczony ząb i przywracają mu kształt, funkcję żucia oraz naturalny wygląd."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      faqImage="/uploads/services/protetyka-korony-faq-bas-clinic-wroclaw.webp"
      faqImageAlt="Pacjentka w gabinecie protetycznym Bas Clinic we Wrocławiu"
      slug="stomatologia/protetyka-korony"
    />
  );
}
