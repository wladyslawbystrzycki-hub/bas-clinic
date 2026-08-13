import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'USG serca Wrocław - echokardiografia',
  description:
    'USG serca (echokardiografia) we Wrocławiu - ocena pracy serca, zastawek i frakcji wyrzutowej. Bezbolesne, bez promieniowania i bez skierowania. Umów termin.',
  path: '/usg/serce/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG serca' },
];

const RELATED = ['usg/pluca', 'usg/doppler', 'usg/doppler-tetnice-szyjne'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG serca (echokardiografia)?',
    content:
      (
      <>
        <p><strong>USG serca</strong>, nazywane echokardiografią lub echem serca, to badanie ultrasonograficzne obrazujące budowę i pracę serca w czasie rzeczywistym. Standardowo wykonuje się je metodą przezklatkową (TTE), przykładając głowicę do klatki piersiowej pacjenta. W skierowaniach i opisach spotyka się też nazwy badanie echokardiograficzne oraz UKG; oznaczają one to samo badanie.</p>
        <p>Echokardiografia łączy obraz ultrasonograficzny z oceną <strong>dopplerowską</strong> przepływu krwi, dzięki czemu pokazuje zarówno kurczące się ściany serca, jak i kierunek oraz prędkość przepływu przez zastawki. Badanie nie wykorzystuje promieniowania jonizującego, jest bezbolesne i można je w razie potrzeby powtarzać.</p>
        <p>Ze względu na specjalistyczny charakter echo serca wykonuje i opisuje lekarz, zwykle kardiolog. Echokardiografia przezklatkowa to inna technika niż badanie przezprzełykowe (TEE) oraz niż dopplerowska ocena naczyń obwodowych, którą obejmuje <Link href="/usg/doppler/">USG Doppler naczyń</Link>.</p>
      </>
    ),
  },
  {
    title: 'Co ocenia echokardiografia? Frakcja wyrzutowa, zastawki i osierdzie',
    tocLabel: 'Co ocenia echo serca',
    content:
      (
      <>
        <p>Echokardiografia ocenia budowę i funkcję serca - pracę mięśnia, zastawki oraz worek osierdziowy. Najważniejszym mierzonym parametrem jest <strong>frakcja wyrzutowa lewej komory (EF)</strong>, która opisuje wydolność serca jako pompy.</p>
        <p>Podczas badania lekarz ocenia między innymi:</p>
        <ul>
          <li>frakcję wyrzutową lewej komory (EF) oraz globalną i odcinkową kurczliwość ścian serca;</li>
          <li>budowę i pracę zastawek serca, w tym ich niedomykalność lub zwężenie (stenozę);</li>
          <li>wymiary jam serca i grubość ścian, na przykład cechy przerostu lewej komory;</li>
          <li>przepływ krwi przez zastawki, oceniany metodą Dopplera (prędkości i gradienty);</li>
          <li>obecność płynu w worku osierdziowym oraz szerokość początkowego odcinka aorty.</li>
        </ul>
        <h3>Jaka jest prawidłowa frakcja wyrzutowa?</h3>
        <p>Za wartość prawidłową przyjmuje się zwykle frakcję wyrzutową powyżej około 50%. Szczegółowe zakresy referencyjne (orientacyjnie 52-72% u mężczyzn i 54-74% u kobiet) pochodzą z rekomendacji towarzystw EACVI i ASE. Obniżona EF może wskazywać na osłabienie funkcji skurczowej, jednak zgodnie z wytycznymi ESC dotyczącymi niewydolności serca sama wartość nie jest rozpoznaniem. Służy do klasyfikacji i wymaga interpretacji w odniesieniu do obrazu klinicznego.</p>
        <p>Wynik echokardiografii pomaga ocenić wydolność serca i charakter ewentualnej wady, ale jego interpretację zawsze prowadzi lekarz. Echo serca nie zastępuje innych badań kardiologicznych, lecz je uzupełnia.</p>
      </>
    ),
  },
  {
    title: 'Rodzaje echa serca: przezklatkowe, przezprzełykowe i obciążeniowe',
    tocLabel: 'Rodzaje echa serca',
    content:
      (
      <>
        <p>Najczęściej wykonywanym badaniem jest echo przezklatkowe (TTE), w którym głowicę przykłada się do klatki piersiowej. Pozostałe techniki - przezprzełykowa i obciążeniowa - są badaniami specjalistycznymi, stosowanymi w wybranych wskazaniach.</p>
        <ul>
          <li><strong>Echo przezklatkowe (TTE)</strong> - podstawowe, nieinwazyjne badanie budowy i funkcji serca; od niego zaczyna się diagnostyka echokardiograficzna.</li>
          <li><strong>Echo przezprzełykowe (TEE)</strong> - głowicę wprowadza się przez przełyk, co daje dokładniejszy obraz struktur położonych z tyłu serca. Rozważa się je, gdy obraz z TTE jest niewystarczający albo gdy trzeba ocenić zastawki pod kątem infekcyjnego zapalenia wsierdzia lub wykluczyć skrzeplinę przed planowaną kardiowersją.</li>
          <li><strong>Echo obciążeniowe (wysiłkowe lub farmakologiczne)</strong> - serce ocenia się w spoczynku i podczas obciążenia, aby wykryć niedokrwienie. Zgodnie z wytycznymi ESC należy do badań pierwszego wyboru w diagnostyce przewlekłych zespołów wieńcowych.</li>
        </ul>
        <p>O tym, która technika jest potrzebna, decyduje lekarz na podstawie pytania klinicznego. U większości pacjentów do oceny budowy i pracy serca wystarcza echo przezklatkowe.</p>
      </>
    ),
  },
  {
    title: 'Wskazania do USG serca - kiedy kardiolog kieruje na echo?',
    tocLabel: 'Wskazania',
    content:
      (
      <>
        <p>Wskazaniem do USG serca są zwykle objawy mogące świadczyć o chorobie serca oraz potrzeba kontroli wcześniej rozpoznanych schorzeń. O skierowaniu na echokardiografię decyduje lekarz po zebraniu wywiadu i badaniu - echo wykonuje się wtedy, gdy jego wynik może zmienić dalsze postępowanie.</p>
        <ul>
          <li>szmer nad sercem wykryty podczas osłuchiwania;</li>
          <li>duszność, obniżona tolerancja wysiłku lub obrzęki kończyn dolnych;</li>
          <li>kołatania serca oraz zaburzenia rytmu, w tym migotanie przedsionków;</li>
          <li>omdlenia i stany przedomdleniowe;</li>
          <li>nadciśnienie tętnicze i ocena jego wpływu na serce;</li>
          <li>kontrola rozpoznanej wady zastawkowej, kardiomiopatii lub niewydolności serca;</li>
          <li>diagnostyka po przebytych chorobach serca i kwalifikacja do dalszego leczenia.</li>
        </ul>
        <p>U pacjentów z dusznością ocenę uzupełnia czasem <Link href="/usg/pluca/">USG płuc</Link>, na przykład w poszukiwaniu płynu w jamie opłucnej.</p>
        <p>Echokardiografia jest badaniem planowym. W razie nagłego, silnego bólu w klatce piersiowej lub innych objawów sugerujących zawał serca konieczny jest pilny kontakt z numerem alarmowym (112 lub 999), a nie oczekiwanie na planowe echo serca. W ostrych stanach o diagnostyce decyduje zespół ratunkowy.</p>
      </>
    ),
  },
  {
    title: 'Echo serca a EKG i inne badania kardiologiczne',
    tocLabel: 'Echo serca a EKG',
    content:
      (
      <>
        <p>Echo serca i EKG to różne, uzupełniające się badania. Elektrokardiografia (EKG) rejestruje czynność elektryczną serca i jego rytm, natomiast echokardiografia obrazuje budowę serca oraz ocenia jego pracę i przepływ krwi przez zastawki.</p>
        <p>USG serca nie zastępuje EKG, badania holterowskiego, próby wysiłkowej ani koronarografii - każde z nich odpowiada na inne pytanie kliniczne.</p>
        <table>
          <tbody>
            <tr>
              <th>Badanie</th>
              <th>Co ocenia</th>
              <th>Promieniowanie i inwazyjność</th>
            </tr>
            <tr>
              <td>Echo serca (TTE)</td>
              <td>budowę, kurczliwość, frakcję wyrzutową, zastawki i przepływ</td>
              <td>bez promieniowania, nieinwazyjne</td>
            </tr>
            <tr>
              <td>EKG</td>
              <td>czynność elektryczną i rytm serca</td>
              <td>bez promieniowania, nieinwazyjne</td>
            </tr>
            <tr>
              <td>Holter EKG</td>
              <td>rytm serca w ciągu doby lub kilku dni (napadowe arytmie)</td>
              <td>bez promieniowania, nieinwazyjne</td>
            </tr>
            <tr>
              <td>Próba wysiłkowa / echo obciążeniowe</td>
              <td>reakcję serca na wysiłek i cechy niedokrwienia</td>
              <td>echo obciążeniowe bez promieniowania, nieinwazyjne</td>
            </tr>
            <tr>
              <td>Koronarografia</td>
              <td>światło tętnic wieńcowych</td>
              <td>promieniowanie rentgenowskie i kontrast, badanie inwazyjne</td>
            </tr>
          </tbody>
        </table>
        <p>Echokardiografia może uwidocznić zaburzenia kurczliwości będące następstwem niedokrwienia, jednak rozpoznanie zawału serca opiera się na obrazie klinicznym, zapisie EKG oraz oznaczeniu troponiny, zgodnie z uniwersalną definicją zawału. Ocenę naczyń uzupełniają badania dopplerowskie, takie jak <Link href="/usg/doppler-tetnice-szyjne/">USG Doppler tętnic szyjnych</Link>. O doborze i kolejności badań decyduje lekarz.</p>
      </>
    ),
  },
  {
    title: 'Jak przygotować się i jak przebiega USG serca?',
    tocLabel: 'Przygotowanie i przebieg',
    content:
      (
      <>
        <p>USG serca nie wymaga specjalnego przygotowania. Nie trzeba być na czczo, a przyjmowane na stałe leki należy zażyć zgodnie z zaleceniami lekarza prowadzącego. Wymóg pozostawania na czczo dotyczy badania przezprzełykowego (TEE), a nie standardowego echa przezklatkowego. Warto założyć wygodny strój umożliwiający odsłonięcie klatki piersiowej.</p>
        <h3>Przebieg badania</h3>
        <p>Podczas badania pacjent układa się zwykle na lewym boku, z lewą ręką uniesioną za głowę, co przybliża serce do ściany klatki piersiowej. Na skórę nakłada się żel, a lekarz przykłada głowicę w kilku miejscach (oknach akustycznych), aby uzyskać obrazy serca z różnych przekrojów. Do zsynchronizowania obrazu z pracą serca wykorzystuje się zwykle niewielkie elektrody EKG. Badanie trwa zazwyczaj od kilkunastu do około czterdziestu minut i jest bezbolesne.</p>
        <p>Echokardiografię traktuje się jako element diagnostyki kardiologicznej, dlatego nie zastępuje ona konsultacji kardiologicznej, a jej wynik interpretuje lekarz.</p>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo i ograniczenia echokardiografii',
    tocLabel: 'Bezpieczeństwo i ograniczenia',
    content:
      (
      <>
        <p>Echo przezklatkowe jest badaniem bezpiecznym i nieinwazyjnym. Wykorzystuje fale ultradźwiękowe, a nie promieniowanie jonizujące, dlatego można je powtarzać oraz wykonywać u kobiet w ciąży i u dzieci. Poza rzadką reakcją na żel nie wiąże się z istotnymi powikłaniami, a standardowe TTE praktycznie nie ma przeciwwskazań poza brakiem zgody pacjenta.</p>
        <p>Badanie ma jednak ograniczenia, o których warto wiedzieć:</p>
        <ul>
          <li><strong>Jakość okna akustycznego</strong> - u części pacjentów (między innymi przy otyłości, rozedmie lub przewlekłej chorobie płuc oraz deformacjach klatki piersiowej) uzyskanie wyraźnego obrazu bywa trudniejsze. Pomocne są wtedy ultradźwiękowe środki kontrastujące lub badanie przezprzełykowe.</li>
          <li><strong>Zależność od operatora</strong> - jakość i dokładność oceny zależą od doświadczenia osoby wykonującej i opisującej badanie.</li>
          <li><strong>Charakter planowy</strong> - echo nie zastępuje pilnej diagnostyki ostrego zawału, która opiera się na EKG i badaniach krwi.</li>
        </ul>
        <p>Z tych powodów o doborze badań, ich kolejności i interpretacji wyniku decyduje lekarz, najlepiej w zestawieniu z badaniem klinicznym i wcześniejszą dokumentacją.</p>
      </>
    ),
  },
  {
    title: 'Cena USG serca we Wrocławiu i wizyta bez skierowania',
    tocLabel: 'Cena i wizyta',
    content:
      (
      <>
        <p>USG serca w Bas Clinic wykonujemy w <Link href="/usg/">pracowni USG</Link> przy {CLINIC.address.street} we Wrocławiu. Badanie jest prywatne, więc nie wymaga skierowania - w ramach NFZ skierowanie od lekarza jest natomiast konieczne.</p>
        <p>Aktualne ceny znajdziesz w <Link href="/cennik/">cenniku</Link>, a termin umówisz telefonicznie pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz rejestracji</Link>. Pracownia przyjmuje w dni powszednie w godzinach {CLINIC.hours.weekdays}.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O wskazaniach do echokardiografii, jej przebiegu i interpretacji wyniku decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content:
      (
      <ol>
        <li>McDonagh TA i wsp. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. European Heart Journal 2021;42(36):3599-3726.</li>
        <li>Lang RM i wsp. Recommendations for cardiac chamber quantification by echocardiography in adults: an update from the EACVI and the ASE. J Am Soc Echocardiogr 2015;28(1):1-39 (Eur Heart J Cardiovasc Imaging 2015;16(3):233-271).</li>
        <li>Vahanian A i wsp. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. European Heart Journal 2022;43(7):561-632.</li>
        <li>Adler Y i wsp. 2015 ESC Guidelines for the diagnosis and management of pericardial diseases. European Heart Journal 2015;36(42):2921-2964.</li>
        <li>Thygesen K i wsp. Fourth Universal Definition of Myocardial Infarction (2018). Circulation 2018;138(20):e618-e651.</li>
        <li>Echocardiogram. StatPearls, NCBI Bookshelf (NBK558940).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Co ocenia USG serca (echokardiografia)?',
    answer:
      'USG serca ocenia budowę i pracę serca. Badanie określa frakcję wyrzutową lewej komory (EF), kurczliwość ścian, budowę i pracę zastawek (niedomykalność lub zwężenie), wymiary jam i grubość ścian oraz obecność płynu w worku osierdziowym. Echokardiografia obrazuje też przepływ krwi przez zastawki metodą Dopplera. Wynik interpretuje lekarz w odniesieniu do obrazu klinicznego.',
  },
  {
    question: 'Czym różni się echo serca od EKG?',
    answer:
      'Echo serca i EKG to różne, uzupełniające się badania. EKG rejestruje czynność elektryczną serca i jego rytm, a echokardiografia obrazuje budowę serca oraz ocenia jego pracę i przepływ krwi przez zastawki. USG serca nie zastępuje EKG, próby wysiłkowej ani koronarografii. O doborze badań decyduje lekarz na podstawie objawów.',
  },
  {
    question: 'Czy USG serca wykrywa zawał?',
    answer:
      'Echokardiografia może uwidocznić zaburzenia kurczliwości ścian serca, które bywają następstwem niedokrwienia, jednak rozpoznanie zawału opiera się na obrazie klinicznym, zapisie EKG i oznaczeniu troponiny. Echo serca jest badaniem planowym. W razie nagłego, silnego bólu w klatce piersiowej należy pilnie zadzwonić pod numer alarmowy (112 lub 999), a nie oczekiwać na planowe badanie.',
  },
  {
    question: 'Jaka jest prawidłowa frakcja wyrzutowa serca (EF)?',
    answer:
      'Prawidłowa frakcja wyrzutowa lewej komory (EF) wynosi zwykle powyżej 50%; zakresy referencyjne to orientacyjnie 52-72% u mężczyzn i 54-74% u kobiet (rekomendacje EACVI i ASE). Obniżona EF może wskazywać na osłabienie funkcji skurczowej serca, jednak wyniku nie interpretuje się w oderwaniu od obrazu klinicznego - ocenia go lekarz.',
  },
  {
    question: 'Czy na USG serca potrzebne jest skierowanie?',
    answer:
      'Na prywatne USG serca skierowanie nie jest wymagane - badanie można umówić bezpośrednio. Skierowanie od lekarza jest natomiast konieczne, gdy echokardiografia ma być wykonana w ramach NFZ. Warto zabrać ze sobą wcześniejsze wyniki badań serca, ponieważ ułatwiają ocenę ewentualnych zmian w czasie.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG serca?',
    answer:
      `USG serca (echokardiografię) we Wrocławiu wykonasz w pracowni ultrasonografii Bas Clinic przy ${CLINIC.address.street}. Badanie jest bezbolesne, nie wykorzystuje promieniowania i obrazuje pracę serca, zastawki oraz frakcję wyrzutową. Termin umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez formularz rejestracji online, w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function UsgSercaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG serca (echokardiografia) we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG serca, czyli echokardiografia, to badanie obrazujące budowę i pracę serca, zastawki oraz frakcję wyrzutową. Wykonujemy je w Bas Clinic we Wrocławiu, bezboleśnie i bez promieniowania."
      slug="usg/serce"
      schemaType={['MedicalTest', 'ImagingTest']}
      usesDevice="Ultrasonograf"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      childServices={RELATED}
      childServicesTitle="Powiązane badania USG"
      childServicesSubtitle="Diagnostyka USG"
    />
  );
}
