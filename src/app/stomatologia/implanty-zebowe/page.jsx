import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Implanty zębowe Wrocław - tytanowe i cyrkonowe',
  description: 'Implanty zębowe we Wrocławiu: tytanowe i cyrkonowe wszczepy odtwarzające brakujące zęby. Zobacz wskazania, przebieg leczenia, trwałość i przeciwwskazania.',
  path: '/stomatologia/implanty-zebowe/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Implanty zębowe' },
];

const FAQ = [
  { question: 'Czy wszczepienie implantu boli?', answer: 'Wszczepienie implantu wykonuje się w znieczuleniu miejscowym, dlatego sam zabieg jest praktycznie bezbolesny. Przez kilka dni może utrzymywać się niewielki obrzęk lub dyskomfort, które łagodzą zalecone środki przeciwbólowe i zwykle szybko ustępują.' },
  { question: 'Jak długo trwa leczenie implantologiczne?', answer: 'Całe leczenie zajmuje zwykle kilka miesięcy. Najważniejszy etap to osteointegracja, czyli zrastanie implantu z kością, które trwa od 3 do 6 miesięcy. Dopiero po nim na wszczepie osadza się ostateczną koronę, most lub protezę.' },
  { question: 'Jak długo wytrzymują implanty zębowe?', answer: 'W przeglądach systematycznych dziesięcioletnie przeżycie implantów sięga około 96 procent przy dobrej higienie i regularnych kontrolach. Sam wszczep bywa bardzo trwały, natomiast osadzona na nim korona może z czasem wymagać wymiany.' },
  { question: 'Implant czy most - co wybrać?', answer: 'Główna różnica dotyczy sąsiednich zębów: implant odtwarza pojedynczy ząb bez ich szlifowania, podczas gdy most wymaga oszlifowania zębów obok luki na filary. Implant sprawdza się, gdy jest wystarczająca ilość kości, a ostateczny wybór ustala się na konsultacji.' },
  { question: 'Czy implanty zębowe są refundowane przez NFZ?', answer: 'Nie, wszczepienie implantów jest procedurą prywatną i nie podlega refundacji NFZ. Koszt zależy od systemu implantologicznego, ewentualnych dodatkowych zabiegów oraz rodzaju pracy protetycznej. Indywidualną wycenę przedstawiamy po konsultacji i tomografii.' },
  { question: 'Gdzie we Wrocławiu wszczepić implant zębowy?', answer: `Implanty zębowe wszczepiamy w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Na konsultację implantologiczną, podczas której oceniamy ilość kości na podstawie tomografii i dobieramy plan leczenia, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest implant zębowy i kiedy się go stosuje?',
    tocLabel: 'Czym jest implant?',
    content: (
      <>
        <p>Implant zębowy to niewielki wszczep, najczęściej z tytanu, który zastępuje korzeń utraconego zęba. Po wgojeniu w kość, czyli osteointegracji, staje się stabilnym filarem, na którym osadza się <Link href="/stomatologia/protetyka-korony/">koronę protetyczną</Link>, most lub protezę. W mowie potocznej mówi się o nim „wszczep&quot; albo „implant zęba&quot;.</p>
        <p>Implantacja sprawdza się w kilku sytuacjach:</p>
        <ul>
          <li><strong>Brak pojedynczego zęba</strong>: implant z koroną odtwarza jeden ząb bez szlifowania sąsiednich, zdrowych zębów.</li>
          <li><strong>Braki w kilku miejscach</strong>: kilka wszczepów może podtrzymywać <Link href="/stomatologia/leczenie-bezzebia/">most na implantach</Link>.</li>
          <li><strong>Bezzębie</strong>: na kilku implantach opiera się stałą lub ruchomą <Link href="/stomatologia/leczenie-bezzebia/">protezę</Link>, co wyraźnie zwiększa jej stabilność.</li>
          <li><strong>Chęć uniknięcia mostu tradycyjnego</strong>: gdy nie chcesz oszlifować zdrowych zębów obok luki pod przęsło mostu.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Implant tytanowy czy cyrkonowy? Porównanie materiałów',
    tocLabel: 'Tytan czy cyrkon',
    content: (
      <>
        <p>W implantologii stosuje się dwa materiały na wszczepy: tytan i tlenek cyrkonu. Różnią się przede wszystkim ilością dowodów naukowych oraz estetyką.</p>
        <h3>Implant tytanowy</h3>
        <p>Tytan to materiał z najdłuższą historią w implantologii i największą liczbą badań długoterminowych. Dobrze zrasta się z kością i jest bardzo wytrzymały. Jego główne ograniczenie jest estetyczne: przy cienkim, obniżonym dziąśle metaliczny kolor wszczepu może lekko prześwitywać.</p>
        <h3>Implant cyrkonowy</h3>
        <p>Wszczepy z tlenku cyrkonu są białe i nie zawierają metalu, dlatego bywają wybierane w odcinku przednim oraz u osób preferujących rozwiązania bezmetalowe. Dysponujemy jednak głównie danymi z krótszego okresu obserwacji, więc przy odbudowie zębów bocznych tytan pozostaje materiałem o najlepiej udokumentowanej przewidywalności. Wybór dobiera się indywidualnie podczas konsultacji.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega leczenie implantologiczne krok po kroku?',
    tocLabel: 'Przebieg leczenia',
    content: (
      <>
        <p>Leczenie implantologiczne to proces rozłożony na kilka etapów i zwykle na kilka miesięcy. Najwięcej czasu zajmuje osteointegracja, czyli trwałe zrośnięcie wszczepu z kością.</p>
        <ol>
          <li><strong>Konsultacja i diagnostyka</strong>: ocena stanu jamy ustnej oraz tomografia komputerowa (CBCT), która pokazuje ilość i jakość kości.</li>
          <li><strong>Przygotowanie podłoża</strong>: w razie potrzeby zabieg <Link href="/stomatologia/chirurgia/">chirurgiczny</Link> odbudowujący kość (augmentacja lub podniesienie dna zatoki).</li>
          <li><strong>Wszczepienie implantu</strong>: zabieg w znieczuleniu miejscowym; wszczep umieszcza się w kości i zaopatruje śrubą gojącą lub zaślepką.</li>
          <li><strong>Osteointegracja</strong>: gojenie trwające zwykle od 3 do 6 miesięcy, podczas którego kość zrasta się z implantem.</li>
          <li><strong>Wycisk lub skan</strong>: po zagojeniu pobiera się cyfrowy <strong>skan wewnątrzustny</strong> pod pracę protetyczną.</li>
          <li><strong>Odbudowa protetyczna</strong>: na implant montuje się łącznik i ostateczną <Link href="/stomatologia/protetyka-korony/">koronę</Link>, most lub protezę.</li>
        </ol>
      </>
    ),
  },
  {
    title: 'Kiedy potrzebna jest augmentacja kości lub podniesienie zatoki?',
    tocLabel: 'Augmentacja kości',
    content: (
      <>
        <p>Augmentacja kości i podniesienie dna zatoki szczękowej (sinus lift) to zabiegi, które odbudowują podłoże, gdy kości jest za mało, by pewnie utrzymać implant. Decyzję podejmuje się na podstawie tomografii.</p>
        <p>Bywa, że pacjent oczekuje augmentacji na wszelki wypadek. Tu warto zachować umiar. Przegląd Cochrane wykazał, że dostępne dowody są umiarkowanej jakości i nie pozwalają jednoznacznie rozstrzygnąć, czy podniesienie zatoki daje lepsze wyniki niż zastosowanie krótszych implantów, a sam sinus lift wiąże się z większą liczbą powikłań (Esposito i wsp., 2014). Wniosek jest praktyczny: augmentację stosuje się wtedy, gdy kości realnie brakuje, a nie rutynowo. O jej konieczności najlepiej rozstrzyga obraz z CBCT i ocena lekarza.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania do implantów zębowych',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Nie u każdego można od razu wszczepić implant. Część przeciwwskazań jest czasowa i znika po przygotowaniu jamy ustnej, część wymaga rozważenia innego rozwiązania.</p>
        <ul>
          <li><strong>Niekontrolowane choroby ogólnoustrojowe</strong>: na przykład nieuregulowana cukrzyca czy choroby krwi; wymagają wcześniejszego ustabilizowania.</li>
          <li><strong>Aktywna choroba przyzębia</strong>: stan zapalny dziąseł trzeba wyleczyć przed implantacją; pomaga w tym regularna <Link href="/stomatologia/higienizacja/">higienizacja</Link>.</li>
          <li><strong>Niewystarczająca ilość kości</strong>: bywa wskazaniem do augmentacji albo do wyboru <Link href="/stomatologia/leczenie-bezzebia/">protezy lub mostu</Link>.</li>
          <li><strong>Palenie tytoniu</strong>: nie wyklucza zabiegu, ale zwiększa ryzyko powikłań i utraty implantu.</li>
          <li><strong>Niezakończony wzrost kości</strong>: u nastolatków implanty odkłada się do zakończenia rozwoju kośćca.</li>
          <li><strong>Zła higiena jamy ustnej</strong>: bez codziennej, dokładnej pielęgnacji rośnie ryzyko zapalenia wokół wszczepu.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Jak długo służą implanty i jakie powikłania mogą wystąpić?',
    tocLabel: 'Trwałość i powikłania',
    content: (
      <>
        <p>Implanty zębowe należą do trwałych metod odbudowy. W przeglądzie systematycznym dziesięcioletnie przeżycie wszczepów oszacowano na 96,4 procent (Howe i wsp., 2019), a analiza długoletnich obserwacji podała przeżycie 94,6 procent przy średnim czasie obserwacji 13,4 roku (Moraschini i wsp., 2015). Są to dane dla dużych grup pacjentów, a nie obietnica dla pojedynczego przypadku.</p>
        <h3>Periimplantitis i co mu sprzyja</h3>
        <p>Najczęstszym powikłaniem jest zapalenie tkanek wokół implantu. Łagodniejsza postać (mucositis) dotyczy w przeglądach około 43 procent pacjentów, a periimplantitis, który prowadzi do zaniku kości wokół wszczepu, około 22 procent (Derks i Tomasi, 2015). Ryzyko zwiększają palenie, zła higiena oraz nieleczona choroba przyzębia.</p>
        <h3>Jak dbać o implanty zębowe?</h3>
        <p>Implant czyści się jak własny ząb, ze szczególną uwagą na okolicę dziąsła, i wspiera regularnymi wizytami kontrolnymi oraz <Link href="/stomatologia/higienizacja/">higienizacją</Link>. Sam wszczep bywa bardzo trwały, natomiast osadzona na nim <Link href="/stomatologia/protetyka-korony/">korona</Link> może z czasem wymagać wymiany.</p>
      </>
    ),
  },
  {
    title: 'Implant, most czy proteza? Co wybrać przy braku zęba',
    tocLabel: 'Implant a alternatywy',
    content: (
      <>
        <p>Brak zęba można uzupełnić na trzy sposoby: implantem, mostem protetycznym albo protezą. Różnią się ingerencją w sąsiednie zęby, komfortem i trwałością.</p>
        <table>
          <tbody>
            <tr>
              <th>Rozwiązanie</th>
              <th>Sąsiednie zęby</th>
              <th>Komfort</th>
              <th>Kiedy się sprawdza</th>
            </tr>
            <tr>
              <td><strong>Implant</strong></td>
              <td>Nie wymaga szlifowania</td>
              <td>Stały, jak własny ząb</td>
              <td>Pojedyncze i mnogie braki, gdy jest dość kości</td>
            </tr>
            <tr>
              <td><strong>Most</strong></td>
              <td>Wymaga oszlifowania zębów obok luki</td>
              <td>Stały</td>
              <td>Brak zęba przy zębach nadających się na filary</td>
            </tr>
            <tr>
              <td><strong>Proteza</strong></td>
              <td>Najczęściej nie szlifuje</td>
              <td>Wyjmowana</td>
              <td>Większe braki, ograniczenia kostne lub budżetowe</td>
            </tr>
          </tbody>
        </table>
        <p>Most opiera się na oszlifowanych <Link href="/stomatologia/protetyka-korony/">koronach</Link> sąsiednich zębów, a <Link href="/stomatologia/leczenie-bezzebia/">proteza</Link> jest rozwiązaniem zdejmowanym. Implant, w odróżnieniu od pozostałych metod, odtwarza również korzeń zęba, dlatego nie obciąża zębów sąsiednich. Ostateczny wybór zależy od liczby braków, ilości kości i oczekiwań pacjenta.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje implant zęba we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content: (
      <>
        <p>Cena implantu zęba we Wrocławiu nie jest jedną kwotą, ponieważ leczenie składa się z kilku elementów. Na koszt wpływają przede wszystkim:</p>
        <ul>
          <li><strong>System implantologiczny</strong>: producent i rodzaj wszczepu.</li>
          <li><strong>Dodatkowe zabiegi</strong>: ewentualna augmentacja kości lub podniesienie zatoki.</li>
          <li><strong>Praca protetyczna</strong>: rodzaj korony, mostu lub protezy osadzanej na implancie.</li>
          <li><strong>Liczba braków</strong>: uzupełnienie jednego zęba to inny zakres niż odbudowa całego łuku.</li>
        </ul>
        <p>Implanty zębowe są procedurą prywatną i nie są refundowane przez NFZ. Dokładną wycenę przygotowujemy po konsultacji i tomografii. Aktualne widełki cen znajdziesz w <Link href="/cennik/">cenniku</Link>, a termin wizyty zarezerwujesz przez <Link href="/rejestracja/">rejestrację online</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji stomatologicznej. Zakres leczenia, jego przebieg oraz rokowanie ustala lekarz po badaniu i analizie zdjęć.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Howe MS, Keys W, Richards D. Long-term (10-year) dental implant survival: a systematic review and sensitivity meta-analysis. J Dent. 2019 (PMID 30904559).</li>
        <li>Moraschini V, Poubel LA, Ferreira VF, Barboza ES. Evaluation of survival and success rates of dental implants reported in longitudinal studies with a follow-up period of at least 10 years: a systematic review. Int J Oral Maxillofac Surg. 2015 (PMID 25467739).</li>
        <li>Derks J, Tomasi C. Peri-implant health and disease. A systematic review of current epidemiology. J Clin Periodontol. 2015 (PMID 25495683).</li>
        <li>Esposito M, Felice P, Worthington HV. Interventions for replacing missing teeth: augmentation procedures of the maxillary sinus. Cochrane Database Syst Rev. 2014 (CD008397, PMID 24825543).</li>
      </ol>
    ),
  },
];

export default function ImplantyZebowePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Implanty zębowe Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Nowoczesna implantologia w Bas Clinic. Wszczepienie implantów zębowych jako trwałe i estetyczne rozwiązanie braków zębowych."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      faqImage="/uploads/services/implanty-zebowe-faq-bas-clinic-wroclaw.webp"
      faqImageAlt="Lekarka stomatolog przy zdjęciu panoramicznym w Bas Clinic we Wrocławiu"
      slug="stomatologia/implanty-zebowe"
    />
  );
}
