import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Stomatologia estetyczna Wrocław - metamorfoza',
  description: 'Stomatologia estetyczna we Wrocławiu: wybielanie zębów, bonding, licówki i odbudowa. Zobacz, który zabieg wybrać i jak przebiega metamorfoza uśmiechu.',
  path: '/stomatologia/estetyczna/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Stomatologia estetyczna' },
];

const FAQ = [
  { question: 'Jakie zabiegi obejmuje stomatologia estetyczna?', answer: 'Stomatologia estetyczna obejmuje wybielanie zębów, bonding kompozytowy, licówki porcelanowe i kompozytowe, estetyczną odbudowę zębów oraz korony pełnoceramiczne. Zabiegi można łączyć w jeden plan metamorfozy uśmiechu, dobierany do koloru, kształtu i ustawienia zębów.' },
  { question: 'Czym różni się bonding od licówek?', answer: 'Bonding to odbudowa zęba światłoutwardzalnym kompozytem, zwykle bez szlifowania i często w jednej wizycie. Licówki to cienkie nakładki, najczęściej ceramiczne, które wymagają minimalnego oszlifowania szkliwa, ale dają trwalszy i bardziej naturalny efekt przy zmianie całego uśmiechu.' },
  { question: 'Czy wybielanie zębów jest bezpieczne?', answer: 'Wybielanie preparatami na bazie nadtlenku jest bezpieczne i skuteczne, gdy wykonuje się je zgodnie z zaleceniami i pod nadzorem stomatologa (Carey, 2014). Najczęstszym działaniem niepożądanym jest przejściowa nadwrażliwość zębów, która zwykle ustępuje po kilku dniach.' },
  { question: 'Jak długo utrzymują się efekty zabiegów estetycznych?', answer: 'Trwałość zależy od metody. Licówki ceramiczne w badaniach wykazują wysoką przeżywalność po około dziesięciu latach, uzupełnienia kompozytowe i bonding służą dobrze, ale wymagają okresowych korekt, a efekt wybielania trzeba co jakiś czas odświeżać. Codzienna higiena i kontrole wydłużają trwałość.' },
  { question: 'Czy zabiegi stomatologii estetycznej są refundowane przez NFZ?', answer: 'Zabiegi czysto estetyczne, takie jak wybielanie, licówki czy bonding estetyczny, nie są refundowane przez NFZ i wykonuje się je prywatnie. W ramach NFZ dostępne jest podstawowe leczenie zachowawcze, na przykład wypełnienia w zakresie ujętym w koszyku świadczeń gwarantowanych.' },
  { question: 'Gdzie we Wrocławiu wykonać metamorfozę uśmiechu?', answer: `Stomatologię estetyczną prowadzimy w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Na konsultację, podczas której oceniamy stan zębów i dobieramy zabiegi, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest stomatologia estetyczna i jakie problemy rozwiązuje?',
    tocLabel: 'Czym jest',
    content:
      (
      <>
        <p>Stomatologia estetyczna to dział stomatologii, który poprawia wygląd zębów i uśmiechu: ich kolor, kształt, proporcje i ustawienie. Warunkiem trwałego efektu jest zdrowe podłoże, dlatego zabiegi estetyczne planujemy dopiero po wyleczeniu próchnicy i opanowaniu stanu dziąseł.</p>
        <p>Najczęstsze sytuacje, w których pomaga estetyka uśmiechu:</p>
        <ul>
          <li><strong>Przebarwienia i ciemny kolor zębów</strong>: naloty po kawie, herbacie czy nikotynie oraz naturalne ściemnienie z wiekiem.</li>
          <li><strong>Ubytki, szczerby i szpary</strong>: ukruszone brzegi, diastema (szpara między jedynkami), drobne nierówności.</li>
          <li><strong>Starte i skrócone zęby</strong>: efekt bruksizmu lub wieloletniego ścierania.</li>
          <li><strong>Nieregularny kształt i drobne wady ustawienia</strong>: zęby o różnej wielkości lub lekko obrócone.</li>
          <li><strong>Nadmiernie odsłonięte dziąsła</strong>: tak zwany <Link href="/medycyna-estetyczna/korekta-usmiechu-dziaslowego/">uśmiech dziąsłowy</Link>, który koryguje się zabiegowo.</li>
        </ul>
        <p>Zanim zaplanujemy metamorfozę, dbamy o fundament: <Link href="/stomatologia/higienizacja/">profesjonalną higienizację</Link> i, w razie potrzeby, <Link href="/stomatologia/leczenie-zebow/">leczenie zachowawcze</Link>.</p>
      </>
    ),
  },
  {
    title: 'Jakie zabiegi obejmuje estetyka uśmiechu?',
    tocLabel: 'Zakres zabiegów',
    content:
      (
      <>
        <p>Estetyka uśmiechu łączy kilka metod, które dobiera się do problemu i oczekiwań pacjenta. Najczęściej stosujemy cztery grupy zabiegów.</p>
        <h3>Wybielanie zębów</h3>
        <p>Rozjaśnia kolor zębów o kilka odcieni preparatami na bazie nadtlenku, bez naruszania ich struktury, a metoda jest bezpieczna przy stosowaniu zgodnym z zaleceniami (Carey, 2014). Sprawdza się, gdy kształt zębów jest prawidłowy, a problemem pozostaje kolor. Szczegóły opisujemy na stronie <Link href="/stomatologia/wybielanie-zebow/">wybielania zębów</Link>.</p>
        <h3>Bonding kompozytowy</h3>
        <p>To małoinwazyjna korekta światłoutwardzalnym kompozytem: zamykanie szpar, odbudowa ukruszeń i zmiana kształtu, często w jednej wizycie i bez szlifowania. Więcej w sekcji <Link href="/stomatologia/bonding/">bonding</Link>.</p>
        <h3>Licówki porcelanowe i kompozytowe</h3>
        <p>Cienkie nakładki na przednią powierzchnię zębów, które zmieniają kolor i kształt całego uśmiechu. <Link href="/stomatologia/licowki/">Licówki</Link> ceramiczne dają naturalny i trwały efekt.</p>
        <h3>Odbudowa i korony pełnoceramiczne</h3>
        <p>Gdy ząb jest mocno zniszczony lub po leczeniu kanałowym, estetykę przywraca <Link href="/stomatologia/odbudowa-zebow/">odbudowa zachowawcza</Link> lub <Link href="/stomatologia/protetyka-korony/">korona pełnoceramiczna</Link>.</p>
      </>
    ),
  },
  {
    title: 'Który zabieg estetyczny wybrać? Porównanie metod',
    tocLabel: 'Porównanie metod',
    content:
      (
      <>
        <p>Wybór metody zależy przede wszystkim od problemu, oczekiwanej trwałości i akceptowanej inwazyjności. Poniższa tabela porządkuje typowe sytuacje.</p>
        <table>
          <tbody>
            <tr>
              <th>Problem</th>
              <th>Zalecany zabieg</th>
              <th>Inwazyjność</th>
              <th>Trwałość</th>
            </tr>
            <tr>
              <td>Przebarwienia, ciemny kolor</td>
              <td>Wybielanie</td>
              <td>Bez szlifowania</td>
              <td>Efekt wymaga odświeżania</td>
            </tr>
            <tr>
              <td>Szczerby, szpary, drobne ubytki</td>
              <td>Bonding kompozytowy</td>
              <td>Małoinwazyjny, często bez szlifowania</td>
              <td>Dobra, z okresowymi korektami</td>
            </tr>
            <tr>
              <td>Zmiana kształtu i koloru kilku zębów</td>
              <td>Licówki ceramiczne</td>
              <td>Minimalne oszlifowanie szkliwa</td>
              <td>Wysoka, wieloletnia</td>
            </tr>
            <tr>
              <td>Mocno zniszczony ząb, po leczeniu kanałowym</td>
              <td>Korona lub odbudowa</td>
              <td>Większe opracowanie zęba</td>
              <td>Wysoka</td>
            </tr>
          </tbody>
        </table>
        <p>Im trwalszy efekt, tym zwykle większa ingerencja w ząb. Licówki ceramiczne osiągają wysoką przeżywalność w obserwacjach wieloletnich (Klein i wsp., 2025), ale wymagają oszlifowania szkliwa i są nieodwracalne. Bonding kompozytowy jest tańszy i bardziej zachowawczy, jednak częściej wymaga korekt i z czasem może się przebarwiać (Demarco i wsp., 2015). Dlatego decyzję podejmujemy indywidualnie, zaczynając od metody możliwie najmniej inwazyjnej.</p>
      </>
    ),
  },
  {
    title: 'Cyfrowy projekt uśmiechu i konsultacja',
    tocLabel: 'Projekt uśmiechu',
    content:
      (
      <>
        <p>Metamorfozę uśmiechu zaczynamy od konsultacji i analizy estetycznej, a nie od razu od zabiegu. Cel to przewidywalny, naturalny efekt dopasowany do rysów twarzy.</p>
        <p>Podczas planowania wykorzystujemy zdjęcia, model diagnostyczny i cyfrowy <strong>skan wewnątrzustny</strong>, dzięki któremu zaplanowany kształt zębów można ocenić przed rozpoczęciem leczenia. Jeśli metamorfoza łączy kilka zabiegów (na przykład wybielanie, bonding i licówki), ustalamy ich kolejność w jednym, spójnym planie. Przykładowe efekty pokazujemy w galerii <Link href="/metamorfozy/">metamorfoz uśmiechu</Link>.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega metamorfoza uśmiechu krok po kroku?',
    tocLabel: 'Przebieg leczenia',
    content:
      (
      <>
        <p>Przebieg zależy od wybranych zabiegów, ale schemat metamorfozy jest powtarzalny i obejmuje kilka etapów.</p>
        <ol>
          <li><strong>Konsultacja i analiza</strong>: wywiad, ocena zębów i dziąseł, zdjęcia oraz skan, rozmowa o oczekiwaniach.</li>
          <li><strong>Plan leczenia i wizualizacja</strong>: dobór metod, kolejności i koloru; w wybranych przypadkach projekt lub mock-up przyszłego uśmiechu.</li>
          <li><strong>Przygotowanie</strong>: <Link href="/stomatologia/higienizacja/">higienizacja</Link> i, jeśli trzeba, leczenie zachowawcze, aby zabiegi estetyczne opierały się na zdrowych zębach.</li>
          <li><strong>Wykonanie zabiegów</strong>: wybielanie, bonding, licówki lub odbudowa, w razie potrzeby w znieczuleniu miejscowym.</li>
          <li><strong>Kontrola i korekta</strong>: ocena efektu, dopasowanie zgryzu i zalecenia dotyczące pielęgnacji.</li>
        </ol>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i ograniczenia zabiegów estetycznych',
    tocLabel: 'Przeciwwskazania',
    content:
      (
      <>
        <p>Zabiegi estetyczne nie są wskazane w każdej sytuacji, a niektóre wymagają wcześniejszego przygotowania. Zakres możliwości zawsze ustala lekarz po badaniu jamy ustnej.</p>
        <ul>
          <li><strong>Nieleczona próchnica i choroba dziąseł</strong>: najpierw konieczne jest <Link href="/stomatologia/leczenie-zebow/">leczenie zachowawcze</Link> i opanowanie stanu zapalnego.</li>
          <li><strong>Bruksizm (zgrzytanie zębami)</strong>: bez szyny ochronnej rośnie ryzyko uszkodzenia licówek i odbudów.</li>
          <li><strong>Ciąża i karmienie</strong>: wybielanie zwykle się odracza ze względu na brak badań w tej grupie.</li>
          <li><strong>Niezakończony rozwój zębów</strong>: u nastolatków część zabiegów, w tym wybielanie, odkłada się w czasie.</li>
          <li><strong>Nierealne oczekiwania</strong>: efekt ma być naturalny i zgodny z anatomią twarzy, a nie identyczny z retuszowanym zdjęciem.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Trwałość efektów i pielęgnacja',
    tocLabel: 'Trwałość i pielęgnacja',
    content:
      (
      <>
        <p>Trwałość metamorfozy zależy od rodzaju zabiegu i codziennej pielęgnacji. Żaden efekt estetyczny nie jest dożywotni, ale właściwa opieka znacznie go wydłuża.</p>
        <p>W badaniach licówki ceramiczne wykazują wysoką przeżywalność po około dziesięciu latach, a materiały z dwukrzemianu litu wiążą się z najmniejszą liczbą powikłań (Klein i wsp., 2025). Uzupełnienia kompozytowe i bonding mają dobrą trwałość, ale częściej wymagają polerowania lub korekty, a z czasem mogą się przebarwiać (Demarco i wsp., 2015). Efekt wybielania stopniowo zanika i wymaga okresowego odświeżenia.</p>
        <h3>Jak dbać o efekt</h3>
        <ul>
          <li>Codzienna higiena jamy ustnej i regularna <Link href="/stomatologia/higienizacja/">higienizacja</Link> w gabinecie.</li>
          <li>Ograniczenie barwników: kawy, herbaty, czerwonego wina i nikotyny.</li>
          <li>Szyna ochronna na noc przy bruksizmie.</li>
          <li>Kontrole, podczas których oceniamy stan uzupełnień.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Ile kosztuje stomatologia estetyczna we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content:
      (
      <>
        <p>Nie ma jednej ceny stomatologii estetycznej, ponieważ każda metamorfoza jest inna. Koszt ustalamy indywidualnie po konsultacji, a zależy on od kilku czynników.</p>
        <ul>
          <li><strong>Rodzaj i liczba zabiegów</strong>: pojedyncze wybielanie kosztuje inaczej niż metamorfoza całego uśmiechu.</li>
          <li><strong>Liczba zębów</strong>: korekta kilku zębów to inny zakres niż cały łuk.</li>
          <li><strong>Materiał</strong>: kompozyt jest tańszy od ceramiki, która daje trwalszy efekt.</li>
          <li><strong>Leczenie przygotowawcze</strong>: higienizacja lub leczenie zachowawcze przed właściwymi zabiegami.</li>
        </ul>
        <p>Aktualne stawki podajemy w <Link href="/cennik/">cenniku</Link>, a dokładną wycenę przedstawiamy po badaniu. Termin konsultacji we Wrocławiu zarezerwujesz przez <Link href="/rejestracja/">rejestrację online</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji stomatologicznej. O doborze i bezpieczeństwie zabiegów estetycznych decyduje lekarz po badaniu jamy ustnej.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content:
      (
      <ol>
        <li>Klein P, Spitznagel FA, Zembic A i wsp. Survival and Complication Rates of Feldspathic, Leucite-Reinforced, Lithium Disilicate and Zirconia Ceramic Laminate Veneers: A Systematic Review and Meta-Analysis. Journal of Esthetic and Restorative Dentistry. 2025. PMID: 39523553.</li>
        <li>Carey CM. Tooth whitening: what we now know. The Journal of Evidence-Based Dental Practice. 2014. PMID: 24929591.</li>
        <li>Demarco FF, Collares K, Coelho-de-Souza FH i wsp. Anterior composite restorations: A systematic review on long-term survival and reasons for failure. Dental Materials. 2015. PMID: 26303655.</li>
        <li>American Dental Association. Whitening. Oral Health Topics.</li>
      </ol>
    ),
  },
];

const CHILD_SERVICES = [
  { name: 'Wybielanie zębów', description: 'Profesjonalne wybielanie zębów w gabinecie i metodą nakładkową.', href: '/stomatologia/wybielanie-zebow/' },
  { name: 'Odbudowa zębów', description: 'Estetyczna odbudowa zębów kompozytem i materiałami ceramicznymi.', href: '/stomatologia/odbudowa-zebow/' },
];

export default function StomatologiaEstetycznaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Stomatologia estetyczna Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Oferujemy kompleksowe zabiegi estetyczne, które pozwolą Ci cieszyć się pięknym i zdrowym uśmiechem. Nowoczesne metody, naturalne efekty."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      childServices={CHILD_SERVICES}
      slug="stomatologia/estetyczna"
    />
  );
}
