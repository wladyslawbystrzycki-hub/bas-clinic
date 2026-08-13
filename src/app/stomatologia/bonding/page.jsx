import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Bonding zębów Wrocław - kompozytowa odbudowa',
  description: 'Bonding zębów we Wrocławiu - kompozytowa odbudowa bez szlifowania. Zobacz, jak przebiega zabieg, czy niszczy zęby, jak długo się trzyma i ile kosztuje.',
  path: '/stomatologia/bonding/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Bonding' },
];

const FAQ = [
  { question: 'Czy bonding niszczy zęby?', answer: 'Nie. Klasyczny bonding nie wymaga szlifowania zdrowego szkliwa - kompozyt dokładamy do istniejącej tkanki, a połączenie powstaje po powierzchownym wytrawieniu szkliwa. To jedna z najmniej inwazyjnych metod estetycznych i w wielu sytuacjach odwracalna: po usunięciu kompozytu ząb pod spodem pozostaje nienaruszony.' },
  { question: 'Jak długo trzyma się bonding zębów?', answer: 'Dobrze wykonany bonding służy zwykle od kilku do kilkunastu lat. W badaniach klinicznych przeżywalność bezpośrednich odbudów kompozytowych w odcinku przednim była wysoka, a roczny odsetek niepowodzeń niski (do około 4 procent). Trwałość zależy od higieny, nawyków oraz tego, czy pacjent zgrzyta zębami.' },
  { question: 'Czy zabieg bondingu boli?', answer: 'W większości przypadków nie. Bonding nie narusza wnętrza zęba, więc zwykle nie wymaga znieczulenia i jest bezbolesny. Zabieg jednego zęba trwa zazwyczaj od 30 do 60 minut i kończy się w jednej wizycie.' },
  { question: 'Bonding czy licówki - co wybrać?', answer: 'Bonding sprawdza się przy drobnych korektach, takich jak szpara, odprysk czy kształt zęba - jest tańszy, mniej inwazyjny i wykonywany w jednej wizycie. Licówki porcelanowe są trwalsze i bardziej odporne na przebarwienia, dlatego lepiej pasują do rozległej metamorfozy wielu zębów. Wybór zależy od zakresu zmian i ilości zdrowej tkanki.' },
  { question: 'Czy bonding się przebarwia?', answer: 'Kompozyt z czasem może wchłaniać barwniki z kawy, herbaty, czerwonego wina czy dymu papierosowego, zwłaszcza na granicy odbudowy. Powierzchowne przebarwienia często usuwa się przez polerowanie podczas wizyty kontrolnej. Ograniczenie barwników w pierwszych dobach i dobra higiena wyraźnie spowalniają ten proces.' },
  { question: 'Gdzie zrobić bonding zębów we Wrocławiu?', answer: `Bonding zębów we Wrocławiu wykonujemy w Bas Clinic przy ${CLINIC.address.street}. Na konsultację, podczas której oceniamy stan zębów i zgryzu oraz dobieramy zakres odbudowy, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest bonding zębów we Wrocławiu?',
    tocLabel: 'Czym jest bonding?',
    content:
      (
      <>
        <p>Bonding zębów to bezpośrednia odbudowa estetyczna, podczas której lekarz nakłada i modeluje na zębie żywicę kompozytową, a następnie utwardza ją światłem i poleruje. Pracujemy bezpośrednio w jamie ustnej, w jednej wizycie i zwykle bez szlifowania zdrowego szkliwa - dlatego bonding zaliczamy do stomatologii addytywnej, czyli „dokładającej&quot; tkankę zamiast ją usuwać.</p>
        <p>Te same materiały i technika, którymi zamykamy pojedynczą szparę, pozwalają też pokryć całą widoczną powierzchnię zęba. Taka pełna odbudowa to <strong>bezpośrednia licówka kompozytowa</strong>, więc bonding i licówka kompozytowa są blisko spokrewnione, a różni je głównie zakres pracy. Trwalszą, lecz bardziej inwazyjną alternatywą pozostają <Link href="/stomatologia/licowki/">licówki porcelanowe</Link>.</p>
        <p>Bonding wybieramy najczęściej wtedy, gdy pacjent chce poprawić wygląd zębów bez rozległego leczenia:</p>
        <ul>
          <li><strong>Szpara między zębami (diastema)</strong> - zamknięcie lub zwężenie przerwy.</li>
          <li><strong>Ukruszenia i odpryski</strong> - odbudowa brzegu siecznego, czyli tzw. edge bonding.</li>
          <li><strong>Korekta kształtu i długości</strong> - wyrównanie nierównych lub startych brzegów.</li>
          <li><strong>Drobne przebarwienia</strong> - zamaskowanie pojedynczych plam; jeśli problemem jest wyłącznie kolor całego uzębienia, zwykle lepszym wyborem jest <Link href="/stomatologia/wybielanie-zebow/">wybielanie zębów</Link>.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Jak przebiega bonding zębów krok po kroku?',
    tocLabel: 'Przebieg zabiegu',
    content:
      (
      <>
        <p>Bonding jednego zęba zajmuje zazwyczaj od 30 do 60 minut i kończy się w jednej wizycie. W większości przypadków nie wymaga znieczulenia, bo nie naruszamy wnętrza zęba. Zabieg przebiega w kilku etapach:</p>
        <ol>
          <li><strong>Dobór koloru</strong> - przy naturalnym świetle dopasowujemy odcień kompozytu do sąsiednich zębów; jeśli planowane jest też wybielanie, wykonujemy je przed bondingiem, by dostroić odbudowę do docelowej, jaśniejszej barwy.</li>
          <li><strong>Oczyszczenie i izolacja</strong> - czyścimy powierzchnię i osuszamy pole pracy, często z użyciem koferdamu, co zapewnia trwałe połączenie.</li>
          <li><strong>Wytrawianie i system łączący</strong> - szkliwo wytrawiamy kwasem ortofosforowym i pokrywamy systemem adhezyjnym (bondem), który tworzy mikropołączenie z żywicą.</li>
          <li><strong>Warstwowe nakładanie kompozytu</strong> - kompozyt aplikujemy i utwardzamy warstwami, zwykle do około 2 mm, co ogranicza naprężenia skurczowe materiału.</li>
          <li><strong>Utwardzanie światłem</strong> - każdą warstwę naświetlamy lampą polimeryzacyjną emitującą światło niebieskie (dioda LED, około 470 nm). To światło widzialne, a nie ultrafiolet, wbrew częstemu nieporozumieniu.</li>
          <li><strong>Modelowanie i polerowanie</strong> - nadajemy odbudowie ostateczny kształt i dokładnie ją polerujemy, bo gładka powierzchnia mniej gromadzi płytkę i wolniej się przebarwia.</li>
        </ol>
      </>
    ),
  },
  {
    title: 'Czy bonding niszczy zęby i czy trzeba je szlifować?',
    tocLabel: 'Czy niszczy zęby?',
    content:
      (
      <>
        <p>Nie - prawidłowo wykonany bonding nie niszczy zęba. W klasycznej odmianie nie wymaga szlifowania zdrowego szkliwa, a materiał dokładamy do istniejącej tkanki. To jedna z najmniej inwazyjnych metod poprawy estetyki i w wielu sytuacjach odwracalna: gdy pacjent zrezygnuje, kompozyt można usunąć, a ząb pod spodem pozostaje nienaruszony.</p>
        <p>Wymaga to jednak doprecyzowania. Aby żywica trwale przylgnęła, powierzchnię szkliwa wytrawiamy kwasem - to zmiana mikroskopijna i powierzchowna, która nie osłabia zęba w sposób trwały, inaczej niż nieodwracalne szlifowanie pod koronę. Bywa też, że dla naturalnego efektu potrzebne jest minimalne wygładzenie brzegu, ale to wciąż nieporównanie mniej niż przy odbudowach pełnopokryciowych. W praktyce oznacza to, że bonding nie uszkadza zęba, choć jak każda odbudowa wymaga później dbałości i okresowej kontroli.</p>
        <p>Trwałość połączenia zależy przede wszystkim od podłoża - żywica najmocniej i najtrwalej wiąże się ze szkliwem, słabiej z zębiną. Dlatego bonding daje najlepsze efekty tam, gdzie zachowane jest zdrowe szkliwo.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania do bondingu zębów',
    tocLabel: 'Przeciwwskazania',
    content:
      (
      <>
        <p>Bonding jest bezpieczny, ale nie w każdej sytuacji daje trwały efekt. Przed zabiegiem oceniamy stan zębów, dziąseł i zgryzu, ponieważ niektóre stany trzeba najpierw wyleczyć lub rozwiązać inną metodą. Najważniejsze przeciwwskazania i ograniczenia to:</p>
        <ul>
          <li><strong>Aktywna próchnica i choroba dziąseł</strong> - najpierw leczymy próchnicę (<Link href="/stomatologia/leczenie-zebow/">leczenie zębów</Link>) i wyciszamy stan zapalny dziąseł (<Link href="/stomatologia/higienizacja/">higienizacja</Link>); odbudowę estetyczną zakłada się na zdrowym podłożu.</li>
          <li><strong>Bruksizm i parafunkcje</strong> - zgrzytanie i zaciskanie zębów zwiększa ryzyko odprysku oraz złamania kompozytu; w takich przypadkach proponujemy szynę ochronną na noc.</li>
          <li><strong>Rozległe ubytki i duże zniszczenie zęba</strong> - przy znacznej utracie tkanek bezpośredni kompozyt ma ograniczoną wytrzymałość i lepszym rozwiązaniem bywa <Link href="/stomatologia/protetyka-korony/">korona protetyczna</Link>.</li>
          <li><strong>Wada zgryzu i stłoczenia</strong> - gdy problemem jest realne ustawienie zębów, a nie ich kształt, skuteczniejsze i trwalsze jest leczenie <Link href="/stomatologia/ortodoncja/">ortodontyczne</Link>.</li>
          <li><strong>Silne nawyki barwiące</strong> - palenie papierosów w połączeniu z kawą czy czerwonym winem potrafi trwale przebarwić kompozyt; o tym, jak temu przeciwdziałać, piszemy niżej.</li>
        </ul>
        <p>To nie są bezwzględne zakazy, lecz sytuacje, w których plan leczenia trzeba dostosować - czasem wystarczy etap przygotowawczy, a czasem lepiej wybrać inną metodę.</p>
      </>
    ),
  },
  {
    title: 'Bonding, licówki, korona czy wybielanie? Co wybrać',
    tocLabel: 'Bonding a alternatywy',
    content:
      (
      <>
        <p>Bonding to nie jedyna droga do ładniejszego uśmiechu - wybór metody zależy od tego, co chcemy poprawić, jak rozległa jest zmiana i ile zdrowej tkanki da się zachować. Z badań klinicznych wynika, że odbudowy kompozytowe mają wyższy roczny odsetek niepowodzeń niż ceramiczne (w 10-letniej obserwacji praktycznej około 3,9-4,1 procent rocznie dla kompozytu wobec 1,2-1,4 procent dla ceramiki; Mazzetti i wsp., 2022), za to są tańsze, szybsze i mniej inwazyjne. Poniższa tabela porządkuje najczęstsze opcje:</p>
        <table>
          <tbody>
            <tr>
              <th>Metoda</th>
              <th>Główne wskazanie</th>
              <th>Inwazyjność</th>
              <th>Trwałość</th>
            </tr>
            <tr>
              <td><strong>Bonding</strong></td>
              <td>Drobne korekty: szpara, odprysk, kształt, brzeg sieczny</td>
              <td>Mała, zwykle bez szlifowania, często odwracalny</td>
              <td>Kilka do kilkunastu lat</td>
            </tr>
            <tr>
              <td><strong><Link href="/stomatologia/licowki/">Licówki porcelanowe</Link></strong></td>
              <td>Rozległa metamorfoza koloru i kształtu wielu zębów</td>
              <td>Średnia, zwykle wymaga szlifowania</td>
              <td>Zwykle dłuższa niż kompozytu</td>
            </tr>
            <tr>
              <td><strong><Link href="/stomatologia/protetyka-korony/">Korona</Link></strong></td>
              <td>Ząb mocno zniszczony lub po leczeniu kanałowym</td>
              <td>Duża, oszlifowanie całego zęba</td>
              <td>Długoterminowa, pełnopokryciowa</td>
            </tr>
            <tr>
              <td><strong><Link href="/stomatologia/wybielanie-zebow/">Wybielanie</Link></strong></td>
              <td>Sam kolor zębów, bez zmiany kształtu</td>
              <td>Bardzo mała, bez ingerencji w tkanki</td>
              <td>Efekt czasowy, do odświeżenia</td>
            </tr>
          </tbody>
        </table>
        <p>Często metody się uzupełniają: najpierw wybielamy całe uzębienie, a dopiero potem bondingiem korygujemy pojedyncze zęby, by dopasować je do nowego, jaśniejszego koloru.</p>
      </>
    ),
  },
  {
    title: 'Jak długo trzyma się bonding i jak o niego dbać?',
    tocLabel: 'Trwałość i pielęgnacja',
    content:
      (
      <>
        <p>Bonding to rozwiązanie na lata, ale nie na całe życie. W przeglądzie systematycznym bezpośrednich odbudów kompozytowych w odcinku przednim przeżywalność wynosiła od 53 do 100 procent w zależności od badania, a roczny odsetek niepowodzeń sięgał około 4 procent (Demarco i wsp., 2015). W metaanalizie licówek kompozytowych łączna przeżywalność wyniosła około 88 procent, przy czym technika bezpośrednia wypadała lepiej niż pośrednia (Lim i wsp., 2023). W praktyce dobrze wykonany bonding służy od kilku do kilkunastu lat.</p>
        <h3>Czy bonding można naprawić?</h3>
        <p>Najczęstsze problemy to odprysk brzegu, drobne pęknięcie, przebarwienie na granicy odbudowy i stopniowa utrata połysku - w badaniach klinicznych połysk matowieje już w pierwszych latach, mimo że sam materiał wciąż trzyma się zęba. Dużą zaletą kompozytu jest to, że zwykle da się go naprawić punktowo, bez wymiany całej odbudowy. Naprawa jest mniej inwazyjna od całkowitej wymiany i pozwala oszczędzić tkanki zęba.</p>
        <h3>Jak dbać o bonding?</h3>
        <p>O bonding dbamy jak o własne zęby, ze szczególnym naciskiem na gładkość i higienę:</p>
        <ul>
          <li><strong>Higiena i kontrole</strong> - regularne szczotkowanie i nitkowanie oraz wizyty kontrolne; profesjonalne czyszczenie i ponowne polerowanie podczas <Link href="/stomatologia/higienizacja/">higienizacji</Link> przywraca gładkość i usuwa powierzchowne przebarwienia.</li>
          <li><strong>Pierwsze 1-2 doby</strong> - warto ograniczyć silne barwniki (kawa, herbata, czerwone wino, owoce jagodowe), gdy świeży kompozyt najłatwiej chłonie kolor.</li>
          <li><strong>Nawyki</strong> - palenie w połączeniu z napojami barwiącymi może trwale zmienić kolor odbudowy, a obgryzanie twardych przedmiotów grozi odpryskiem.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Ile kosztuje bonding zębów we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content:
      (
      <>
        <p>Koszt bondingu we Wrocławiu zależy od zakresu pracy, dlatego cenę zawsze ustalamy po badaniu. Najczęściej wpływają na nią:</p>
        <ul>
          <li><strong>Liczba zębów</strong> - inna jest cena pojedynczej korekty, a inna pełnej metamorfozy uśmiechu obejmującej kilka zębów.</li>
          <li><strong>Zakres odbudowy</strong> - zamknięcie niewielkiej szpary to mniej pracy niż odbudowa całej powierzchni zęba, czyli bezpośrednia licówka kompozytowa.</li>
          <li><strong>Stan wyjściowy</strong> - jeśli najpierw trzeba wyleczyć próchnicę lub wykonać higienizację, są to osobne etapy leczenia.</li>
        </ul>
        <p>Bonding ze wskazań estetycznych nie jest refundowany przez NFZ. Aktualne ceny znajdziesz w naszym <Link href="/cennik/">cenniku</Link>, a indywidualną wycenę przygotujemy podczas konsultacji - umów się przez <Link href="/rejestracja/">rejestrację online</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji stomatologicznej. O tym, czy bonding jest w Twoim przypadku najlepszym rozwiązaniem, decyduje lekarz po badaniu jamy ustnej i ocenie zgryzu.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content:
      (
      <ol>
        <li>Lim TW, Tan SK, Li KY, Burrow MF. Survival and complication rates of resin composite laminate veneers: a systematic review and meta-analysis. J Evid Based Dent Pract. 2023;23(4):101911.</li>
        <li>Mazzetti T, Collares K, Rodolfo B i wsp. 10-year practice-based evaluation of ceramic and direct composite veneers. Dent Mater. 2022;38(5):898-906.</li>
        <li>Demarco FF, Collares K, Coelho-de-Souza FH i wsp. Anterior composite restorations: a systematic review on long-term survival and reasons for failure. Dent Mater. 2015;31(10):1214-1224.</li>
        <li>Coelho-de-Souza FH, Goncalves DS, Sales MP i wsp. Direct anterior composite veneers in vital and non-vital teeth: a retrospective clinical evaluation. J Dent. 2015;43(11):1330-1336.</li>
        <li>Alqutaibi AY, Saker S, Alghauli MA i wsp. Clinical survival and complication rate of ceramic veneers bonded to different substrates: a systematic review and meta-analysis. J Prosthet Dent. 2025;134(4):1030-1039.</li>
        <li>Vandekar M, Pendse G, Toprani N i wsp. Longevity of repair versus replacement of partially fractured direct composite restorations in permanent teeth: a systematic review and meta-analysis. Cureus. 2025;17(7):e88307.</li>
        <li>Sharif MO, Catleugh M, Merry A i wsp. Replacement versus repair of defective restorations in adults: resin composite. Cochrane Database of Systematic Reviews. 2014;(2):CD005971.</li>
        <li>Al-Talib T, Goodman X, Ziada H, Abubakr NH. Bruxism and direct and indirect restorations failure: a scoping review. J Dent. 2025;157:105738.</li>
        <li>Watts DC. Light-curing dental resin-based composites: how it works and how you can make it work. Front Dent Med. 2023.</li>
      </ol>
    ),
  },
];

export default function BondingPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Bonding zębów Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Szybka i nieinwazyjna korekta estetyczna zębów metodą bondingu. Naprawiamy odpryski, zamykamy szpary i poprawiamy kształt zębów w jednej wizycie."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      faqImage="/uploads/services/bonding-zabieg-bas-clinic-wroclaw.webp"
      faqImageAlt="Zabieg bondingu zębów w Bas Clinic we Wrocławiu"
      slug="stomatologia/bonding"
    />
  );
}
