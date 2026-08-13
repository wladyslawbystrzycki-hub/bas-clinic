import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Leczenie bezzębia Wrocław - All-on-4 i protezy',
  description: 'Leczenie bezzębia we Wrocławiu: proteza całkowita, proteza na implantach (overdenture) i stały most All-on-4. Zobacz metody, przebieg i przeciwwskazania.',
  path: '/stomatologia/leczenie-bezzebia/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Leczenie bezzębia' },
];

const FAQ = [
  { question: 'Jakie są metody leczenia całkowitego bezzębia?', answer: 'Całkowite bezzębie leczy się protezą całkowitą osiadającą, protezą na implantach (overdenture) albo stałym mostem na implantach w schemacie All-on-4 lub All-on-6. Metody różnią się stabilnością, komfortem i zakresem zabiegu, a wybór zależy od ilości kości i oczekiwań pacjenta.' },
  { question: 'Czy przy bezzębiu można wszczepić implanty?', answer: 'W większości przypadków tak. O możliwości decyduje ilość i jakość kości, którą oceniamy w tomografii CBCT. Gdy kości jest za mało, stosuje się jej augmentację, schemat All-on-4 omijający deficyt albo protezę opartą na mniejszej liczbie implantów.' },
  { question: 'Na czym polega metoda All-on-4?', answer: 'All-on-4 to odbudowa całego łuku zębowego na czterech implantach, z których dwa tylne wprowadza się pod kątem, aby ominąć braki kości. Na wszczepach mocuje się stały most, a w wybranych przypadkach obciąża się je od razu pracą tymczasową.' },
  { question: 'Czy proteza na implantach jest wygodniejsza od zwykłej?', answer: 'Badania z randomizacją wskazują, że proteza na implantach (overdenture) daje wyższą satysfakcję i lepszą jakość życia niż klasyczna proteza całkowita. Lepiej trzyma się w jamie ustnej, co ułatwia jedzenie i mówienie.' },
  { question: 'Czy leczenie bezzębia jest refundowane przez NFZ?', answer: 'Proteza całkowita z akrylu jest częściowo refundowana przez NFZ, co do zasady raz na 5 lat. Rozwiązania na implantach, takie jak overdenture i All-on-4, są zabiegami prywatnymi. Aktualne ceny znajdziesz w naszym cenniku.' },
  { question: 'Gdzie we Wrocławiu leczymy bezzębie?', answer: `Leczenie bezzębia prowadzimy w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Na konsultację, podczas której oceniamy ilość kości na podstawie tomografii i dobieramy metodę odbudowy, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest bezzębie i dlaczego wymaga leczenia?',
    tocLabel: 'Czym jest bezzębie',
    content: (
      <>
        <p>Bezzębie to całkowity lub częściowy brak zębów własnych. Nieuzupełniony brak zębów nie jest wyłącznie problemem estetycznym: z czasem prowadzi do zaniku (resorpcji) kości wyrostka zębodołowego, w którym wcześniej tkwiły korzenie.</p>
        <p>Kość pozbawiona obciążenia żuciem stopniowo się obkurcza, a skutki narastają latami:</p>
        <ul>
          <li><strong>Trudności z jedzeniem</strong>: ograniczony wybór pokarmów i gorsze rozdrabnianie kęsów.</li>
          <li><strong>Zaburzenia mowy</strong>: brak podparcia dla warg i języka zmienia artykulację niektórych głosek.</li>
          <li><strong>Zapadnięcie rysów twarzy</strong>: utrata wysokości kości skraca dolny odcinek twarzy i pogłębia zmarszczki wokół ust.</li>
          <li><strong>Postępujący zanik kości</strong>: im dłużej trwa bezzębie, tym mniej kości pozostaje pod przyszłe uzupełnienie.</li>
        </ul>
        <p>Dlatego brak zębów warto uzupełnić, a nie odkładać. Pojedyncze braki rozwiązuje się zwykle przez <Link href="/stomatologia/implanty-zebowe/">wszczepienie implantu</Link> lub most, natomiast całkowity brak zębów wymaga odbudowy całego łuku, którą opisujemy poniżej.</p>
      </>
    ),
  },
  {
    title: 'Jakie są metody leczenia bezzębia?',
    tocLabel: 'Metody leczenia',
    content: (
      <>
        <p>Całkowite bezzębie można leczyć na trzy główne sposoby, które różnią się stabilnością, komfortem i zakresem zabiegu. Wybór zależy przede wszystkim od ilości i jakości kości oraz oczekiwań pacjenta.</p>
        <h3>Proteza całkowita osiadająca</h3>
        <p>Klasyczna proteza ruchoma z akrylu opiera się na błonie śluzowej, a w szczęce także na podniebieniu. Jest najtańsza i nieinwazyjna, lecz trzyma się wyłącznie dzięki przyleganiu, dlatego bywa ruchoma podczas jedzenia i mówienia.</p>
        <h3>Proteza na implantach (overdenture)</h3>
        <p>Overdenture to proteza ruchoma dociążona kilkoma implantami. Zaczepy (zatrzaski, lokatory lub belka) stabilizują ją w jamie ustnej, więc trzyma się lepiej niż proteza osiadająca, a pacjent zdejmuje ją do mycia.</p>
        <h3>Stałe uzupełnienie na implantach</h3>
        <p>Most przykręcony na stałe do implantów, najczęściej w schemacie All-on-4 lub All-on-6, odtwarza cały łuk. Pacjent nie zdejmuje go samodzielnie, a komfort jest najbliższy własnym zębom. Stałą pracę można też oprzeć na większej liczbie wszczepów i połączyć z <Link href="/stomatologia/protetyka-korony/">koronami na implantach</Link>.</p>
      </>
    ),
  },
  {
    title: 'Proteza, overdenture czy All-on-4? Porównanie metod',
    tocLabel: 'Porównanie metod',
    content: (
      <>
        <p>Trzy podstawowe rozwiązania różnią się stabilnością, zakresem zabiegu i kosztem. Poniższa tabela zestawia je według kryteriów, które najczęściej decydują o wyborze.</p>
        <table>
          <tbody>
            <tr>
              <th>Kryterium</th>
              <th>Proteza całkowita</th>
              <th>Overdenture na implantach</th>
              <th>Most stały (All-on-4)</th>
            </tr>
            <tr>
              <td>Stabilność</td>
              <td>Trzyma się przyleganiem, bywa ruchoma</td>
              <td>Dociążona implantami, stabilna, zdejmowana</td>
              <td>Przykręcona na stałe, najbardziej stabilna</td>
            </tr>
            <tr>
              <td>Zabieg</td>
              <td>Bez operacji</td>
              <td>Kilka implantów</td>
              <td>4 lub więcej implantów, czasem augmentacja</td>
            </tr>
            <tr>
              <td>Komfort jedzenia</td>
              <td>Ograniczony</td>
              <td>Dobry</td>
              <td>Zbliżony do własnych zębów</td>
            </tr>
            <tr>
              <td>Kiedy się sprawdza</td>
              <td>Mała ilość kości, niższy budżet</td>
              <td>Niestabilna proteza dolna, kompromis kosztu i komfortu</td>
              <td>Oczekiwanie stałego uzupełnienia, wystarczająca ilość kości</td>
            </tr>
          </tbody>
        </table>
        <p>U pacjentów z bezzębną żuchwą proteza wsparta dwoma implantami (overdenture) jest uznawana za rozwiązanie pierwszego wyboru zamiast samej protezy osiadającej (konsensus z McGill, 2002). Ostateczny wybór ustalamy po ocenie ilości kości i możliwości <Link href="/stomatologia/implanty-zebowe/">leczenia implantologicznego</Link> oraz rozmowie o oczekiwaniach.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega leczenie bezzębia krok po kroku?',
    tocLabel: 'Przebieg leczenia',
    content: (
      <>
        <p>Leczenie zaczyna się od diagnostyki, a kończy oddaniem docelowego uzupełnienia. Przy rozwiązaniach na implantach podstawą jest ocena ilości kości w tomografii.</p>
        <ol>
          <li><strong>Konsultacja i diagnostyka</strong>: badanie jamy ustnej oraz tomografia CBCT, która pokazuje ilość i jakość kości pod implanty.</li>
          <li><strong>Plan leczenia</strong>: dobór metody (proteza, overdenture albo most stały) i liczby implantów do warunków kostnych i oczekiwań.</li>
          <li><strong>Przygotowanie podłoża</strong>: gdy kości jest za mało, planujemy jej <Link href="/stomatologia/chirurgia/">odbudowę (augmentację)</Link> lub dobieramy schemat omijający deficyt.</li>
          <li><strong>Wszczepienie implantów</strong>: zabieg w znieczuleniu miejscowym; w wybranych przypadkach implanty od razu obciąża się tymczasową pracą.</li>
          <li><strong>Gojenie i osteointegracja</strong>: implanty zrastają się z kością przez kilka miesięcy, jeśli nie zastosowano natychmiastowego obciążenia.</li>
          <li><strong>Praca docelowa</strong>: na podstawie cyfrowego <strong>skanu wewnątrzustnego</strong> wykonujemy ostateczną protezę lub most i mocujemy uzupełnienie.</li>
        </ol>
      </>
    ),
  },
  {
    title: 'All-on-4: na czym polega i jakie ma ograniczenia?',
    tocLabel: 'Metoda All-on-4',
    content: (
      <>
        <p>All-on-4 to odbudowa całego łuku zębowego oparta na czterech implantach, z których dwa tylne wprowadza się pod kątem, aby ominąć deficyty kości i często uniknąć augmentacji. Na implantach mocuje się stały most.</p>
        <p>Krótkoterminowe wyniki metod pełnołukowych są dobre: w przeglądzie systematycznym przeżywalność stałych mostów na implantach wyniosła od 93,3 do 100 procent, a samych implantów od 87,89 do 100 procent (Kwon i wsp., 2014). To tłumaczy popularność rozwiązania u pacjentów oczekujących stałego uzupełnienia.</p>
        <p>Te same dane mają jednak ograniczenie: autorzy zaznaczają, że wiarygodnej przeżywalności powyżej 10 lat nie udało się ustalić z powodu braku długoletnich badań, i odradzają usuwanie zębów o dobrym rokowaniu tylko po to, by wykonać most na implantach (Kwon i wsp., 2014). All-on-4 jest więc skutecznym rozwiązaniem przy realnym bezzębiu lub zębach bez szans na utrzymanie, a nie domyślną alternatywą dla zębów, które da się jeszcze leczyć zachowawczo lub odbudować <Link href="/stomatologia/protetyka-korony/">koroną protetyczną</Link>.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i przygotowanie do leczenia',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Większość przeciwwskazań do leczenia implantologicznego ma charakter względny: po przygotowaniu pacjenta zabieg często staje się możliwy. Część stanów wymaga jednak wcześniejszego leczenia lub wyboru rozwiązania bez operacji.</p>
        <ul>
          <li><strong>Niekontrolowane choroby ogólnoustrojowe</strong>: na przykład niewyrównana cukrzyca, którą trzeba ustabilizować przed zabiegiem.</li>
          <li><strong>Niewystarczająca ilość kości</strong>: bywa wskazaniem do <Link href="/stomatologia/chirurgia/">augmentacji</Link>, schematu All-on-4 albo protezy osiadającej.</li>
          <li><strong>Aktywna choroba przyzębia i zła higiena</strong>: zwiększają ryzyko powikłań, dlatego stan jamy ustnej porządkujemy podczas <Link href="/stomatologia/higienizacja/">higienizacji</Link> przed implantacją.</li>
          <li><strong>Palenie tytoniu</strong>: pogarsza gojenie i podnosi ryzyko niepowodzenia wszczepu.</li>
          <li><strong>Niezakończony wzrost kości</strong>: u młodych osób implanty odracza się do zakończenia wzrostu.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Trwałość, komfort i pielęgnacja uzupełnień',
    tocLabel: 'Trwałość i pielęgnacja',
    content: (
      <>
        <p>Rozwiązania wsparte implantami poprawiają komfort i jakość życia względem klasycznej protezy, ale wymagają regularnej higieny, żeby służyły latami.</p>
        <p>W metaanalizie badań z randomizacją proteza na implantach (overdenture) wypadła lepiej od zwykłej protezy całkowitej pod względem satysfakcji pacjentów i jakości życia zależnej od zdrowia jamy ustnej, choć w odczuwaniu bólu różnicy nie potwierdzono (Sivaramakrishnan i Sridharan, 2016). Stabilne podparcie implantami pomaga też spowolnić zanik kości, którego sama proteza osiadająca nie zatrzymuje.</p>
        <p>Wyboru samego typu zaczepu (zatrzask, lokator czy belka) nie przesądzają mocne dowody: przegląd Cochrane uznał je za niewystarczające, by wskazać system lepszy od pozostałych (Payne i wsp., 2018). W praktyce dobieramy go indywidualnie do warunków w jamie ustnej.</p>
        <h3>Jak dbać o protezę i implanty</h3>
        <p>Uzupełnienia na implantach czyści się codziennie, a stan tkanek wokół wszczepów kontroluje na wizytach. Profesjonalne czyszczenie podczas <Link href="/stomatologia/higienizacja/">higienizacji</Link> ogranicza ryzyko stanu zapalnego wokół implantu.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje leczenie bezzębia we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content: (
      <>
        <p>Koszt leczenia bezzębia zależy przede wszystkim od wybranej metody i liczby implantów, dlatego cenę ustalamy indywidualnie po diagnostyce. Najtańsza jest proteza osiadająca, a najwięcej kosztuje stały most na implantach.</p>
        <ul>
          <li><strong>Metoda leczenia</strong>: proteza całkowita, overdenture na implantach czy stały most All-on-4.</li>
          <li><strong>Liczba implantów</strong>: ile wszczepów podpiera uzupełnienie w danym łuku.</li>
          <li><strong>Dodatkowe zabiegi</strong>: ewentualna augmentacja kości lub podniesienie dna zatoki.</li>
          <li><strong>Praca protetyczna</strong>: materiał i wykonanie docelowej protezy lub mostu.</li>
        </ul>
        <p>Proteza całkowita z akrylu jest częściowo refundowana przez NFZ (co do zasady raz na 5 lat), natomiast rozwiązania na implantach, w tym overdenture i All-on-4, są zabiegami prywatnymi. Aktualne stawki znajdziesz w <Link href="/cennik/">cenniku</Link>, a indywidualną wycenę przygotujemy po konsultacji, na którą umówisz się przez <Link href="/rejestracja/">rejestrację</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji stomatologicznej. Zakres leczenia i jego przebieg ustala lekarz po badaniu i analizie tomografii.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Kwon T, Bain PA, Levin L. Systematic review of short- and long-term survival and success of full-arch fixed dental hybrid prostheses and supporting implants. Journal of Dentistry, 2014 (PMID 24975989).</li>
        <li>Sivaramakrishnan G, Sridharan K. Comparison of implant supported mandibular overdentures and conventional dentures on quality of life: a systematic review and meta-analysis of randomized controlled studies. Australian Dental Journal, 2016 (PMID 26836981).</li>
        <li>Payne AGT, Alsabeeha NHM, Atieh MA, Esposito M, Ma S, Anas El-Wegoud M. Interventions for replacing missing teeth: attachment systems for implant overdentures in edentulous jaws. Cochrane Database of Systematic Reviews, 2018 (CD008001; PMID 30308116).</li>
        <li>Konsensus z McGill nt. protez nakładowych na implantach (overdentures) jako standardu opieki dla bezzębnej żuchwy, 2002 (Eur J Prosthodont Restor Dent; PMID 12387249).</li>
      </ol>
    ),
  },
];

export default function LeczenieBezzebiaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Leczenie bezzębia Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Kompleksowe leczenie bezzębia w Bas Clinic. Nowoczesne protezy, implanty i metoda All-on-4. Przywracamy uśmiech i komfort codziennego życia."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      faqImage="/uploads/services/leczenie-bezzebia-faq-bas-clinic-wroclaw.webp"
      faqImageAlt="Zadowolona starsza pacjentka w poczekalni Bas Clinic we Wrocławiu"
      slug="stomatologia/leczenie-bezzebia"
    />
  );
}
