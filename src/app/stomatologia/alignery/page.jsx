import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Alignery Wrocław: przezroczyste nakładki',
  description: 'Alignery we Wrocławiu: przezroczyste nakładki do dyskretnego prostowania krzywych zębów. Korekta stłoczenia i wad zgryzu u dorosłych i młodzieży w Bas Clinic.',
  path: '/stomatologia/alignery/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Ortodoncja', href: '/stomatologia/ortodoncja/' },
  { label: 'Alignery' },
];

const FAQ = [
  { question: 'Ile trwa leczenie alignerami?', answer: 'Leczenie alignerami trwa zwykle od 6 do 18 miesięcy. Proste przypadki kończą się szybciej, a złożone wymagają więcej czasu. Długość zależy od stopnia wady zgryzu oraz od tego, czy pacjent nosi nakładki zalecane 20-22 godziny na dobę.' },
  { question: 'Czy alignery są skuteczne tak jak aparat stały?', answer: 'Przy lekkim i umiarkowanym stłoczeniu oraz szparach alignery bywają równie skuteczne jak aparat stały. Przy złożonych wadach zgryzu i trudnych ruchach zębów aparat stały daje precyzyjniejszą kontrolę. O wyborze metody decyduje diagnostyka u ortodonty.' },
  { question: 'Ile godzin dziennie trzeba nosić alignery?', answer: 'Alignery nosi się 20-22 godziny na dobę, zdejmując je tylko do jedzenia, picia napojów innych niż woda oraz mycia zębów. Każdy komplet wymienia się zwykle co 1-2 tygodnie. Krótszy czas noszenia spowalnia ruch zębów i wydłuża leczenie.' },
  { question: 'Czy nakładki ortodontyczne bolą?', answer: 'Po założeniu nowej szyny przez pierwsze dni odczuwa się ucisk i lekką tkliwość zębów, co jest oznaką, że leczenie działa. Z badań wynika, że dyskomfort ten jest zwykle mniejszy niż przy aparacie stałym i ustępuje po kilku dniach.' },
  { question: 'Czy NFZ refunduje alignery?', answer: 'Nie. Alignery to leczenie w pełni prywatne, niezależnie od wieku pacjenta. NFZ finansuje jedynie aparat ruchomy u dzieci, które rozpoczną leczenie przed ukończeniem 12. roku życia. Aparat stały i nakładki ortodontyczne nie są refundowane, poza wybranymi wadami wrodzonymi.' },
  { question: 'Gdzie we Wrocławiu założyć alignery?', answer: `Alignery zakładamy w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Leczenie zaczyna się od konsultacji ortodontycznej ze skanem wewnątrzustnym, podczas której oceniamy wadę zgryzu i sprawdzamy, czy nakładki będą skuteczne. Wizytę umówisz od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym są alignery i jak prostują zęby?',
    tocLabel: 'Czym są i jak działają',
    content: (
      <>
        <p>Alignery (nakładki ortodontyczne) to seria przezroczystych, zdejmowanych szyn z elastycznego tworzywa, które stopniowo przesuwają zęby w zaplanowane położenie. Każdą parę nosi się 1-2 tygodnie, a kolejne nakładki przejmują leczenie tam, gdzie skończyła poprzednia.</p>
        <p>Działa tu ten sam mechanizm, co przy innych metodach <Link href="/stomatologia/ortodoncja/">leczenia ortodontycznego</Link>: delikatny, stały nacisk uruchamia przebudowę kości wokół korzenia, dzięki czemu ząb może bezpiecznie zmienić pozycję. Aby nakładka przekazała siłę także przy trudniejszych ruchach, na niektórych zębach mocuje się <strong>attachmenty</strong>, czyli niewielkie kompozytowe zaczepy w kolorze zęba.</p>
        <p>Nakładki najlepiej sprawdzają się przy <strong>stłoczeniu</strong> lekkim i umiarkowanym, szparach między zębami (diastema) oraz wybranych wadach zgryzu. To dyskretna alternatywa dla <Link href="/stomatologia/aparaty-stale/">aparatu stałego</Link> i <Link href="/stomatologia/aparaty-ruchome/">aparatu ruchomego</Link>, choć, jak każda metoda, ma swoje wskazania i ograniczenia.</p>
      </>
    ),
  },
  {
    title: 'Cyfrowy przebieg leczenia: skan, plan 3D i kontrole',
    tocLabel: 'Przebieg cyfrowy',
    content: (
      <>
        <p>Leczenie alignerami opiera się na cyfrowym planowaniu. Zaczyna się od dokładnej diagnostyki, a kończy na fazie retencji, która utrwala efekt.</p>
        <ol>
          <li><strong>Konsultacja i diagnostyka.</strong> Ortodonta ocenia wadę zgryzu, wykonuje zdjęcia RTG oraz <strong>skan wewnątrzustny</strong>, który zastępuje tradycyjny wycisk. Cyfrowy odlew łuków staje się podstawą całego planu.</li>
          <li><strong>Plan 3D.</strong> Na podstawie skanu powstaje wirtualna symulacja ruchu zębów, etap po etapie, aż do położenia docelowego.</li>
          <li><strong>Przygotowanie zębów.</strong> W razie potrzeby zakłada się attachmenty i wykonuje <strong>IPR</strong> (interproximal reduction), czyli minimalne wypolerowanie powierzchni stycznych, aby odzyskać miejsce na wyrównanie.</li>
          <li><strong>Noszenie szyn.</strong> Pacjent samodzielnie wymienia kolejne nakładki zwykle co 1-2 tygodnie, nosząc je 20-22 godziny na dobę.</li>
          <li><strong>Wizyty kontrolne.</strong> Co kilka tygodni ortodonta sprawdza, czy zęby podążają za planem i czy szyny dobrze przylegają.</li>
          <li><strong>Retencja.</strong> Po uzyskaniu efektu attachmenty są usuwane, a pozycję zębów stabilizuje retainer.</li>
        </ol>
        <h3>Refinement, czyli korekta planu</h3>
        <p>Realny ruch zęba nie zawsze nadąża za symulacją. Dlatego u większości pacjentów potrzebny jest tak zwany <strong>refinement</strong>: dodatkowy, korygujący zestaw nakładek wykonany na podstawie nowego skanu pod koniec leczenia. To normalny element planowania, a nie oznaka błędu.</p>
      </>
    ),
  },
  {
    title: 'Jakie wady korygują alignery, a kiedy lepszy aparat stały?',
    tocLabel: 'Wskazania i ograniczenia',
    content: (
      <>
        <p>Alignery dobrze radzą sobie z wyrównywaniem łuków, zamykaniem szpar i korektą lekkich oraz umiarkowanych stłoczeń. Słabiej kontrolują ruchy trudne, dlatego nie każda wada zgryzu nadaje się do leczenia nakładkami.</p>
        <p>Przeglądy badań zgodnie wskazują, że nakładki skutecznie wyrównują zęby i wykonują intruzję (wsunięcie) zębów przednich, ale gorzej radzą sobie z <strong>ekstruzją</strong> (wysuwaniem), <strong>rotacją zębów okrągłych</strong> (kłów i przedtrzonowców), poszerzaniem łuku oraz dużymi przesunięciami korpusowymi. Dla precyzyjnej kontroli zgryzu i takich ruchów <Link href="/stomatologia/aparaty-stale/">aparat stały</Link> pozostaje metodą z wyboru.</p>
        <p>Istnieje też naturalna różnica między planem cyfrowym a wynikiem w jamie ustnej. W badaniach prospektywnych średnia dokładność odwzorowania zaplanowanego ruchu wynosiła około 41% (2009) i około 50% w nowszej generacji nakładek (2020). To tłumaczy, dlaczego refinement bywa potrzebny i dlaczego trudniejszych ruchów nie da się zwykle uzyskać jedną serią szyn.</p>
        <p>W złożonych wadach u dorosłych metaanaliza z 2020 roku wykazała, że leczenie nakładkami daje średnio nieco gorszy wynik zgryzowy niż aparat stały. Dlatego o doborze metody decyduje rzetelna diagnostyka, a nie założenie, że nakładki są dobre „dla każdego&quot;. Uczciwa kwalifikacja oznacza, że czasem rekomendujemy aparat stały.</p>
      </>
    ),
  },
  {
    title: 'Alignery czy aparat stały? Porównanie',
    tocLabel: 'Alignery a aparat stały',
    content: (
      <>
        <p>Alignery i aparat stały prowadzą do tego samego celu, ale różnią się estetyką, komfortem i zakresem wad, które korygują. Poniższa tabela zestawia najważniejsze różnice.</p>
        <table>
          <tbody>
            <tr>
              <th>Cecha</th>
              <th>Alignery (nakładki)</th>
              <th>Aparat stały</th>
            </tr>
            <tr>
              <td>Estetyka</td>
              <td>Przezroczyste, dyskretne</td>
              <td>Widoczne zamki i łuk (mniej w wersji ceramicznej)</td>
            </tr>
            <tr>
              <td>Zdejmowanie</td>
              <td>Tak, do posiłków i higieny</td>
              <td>Nie, zamocowany na stałe</td>
            </tr>
            <tr>
              <td>Higiena</td>
              <td>Łatwiejsza, mycie bez przeszkód</td>
              <td>Trudniejsza, wymaga szczoteczek międzyzębowych</td>
            </tr>
            <tr>
              <td>Kontrola trudnych ruchów</td>
              <td>Ograniczona</td>
              <td>Pełna, precyzyjna</td>
            </tr>
            <tr>
              <td>Zależność od pacjenta</td>
              <td>Duża (noszenie 20-22 h/dobę)</td>
              <td>Mała (działa stale)</td>
            </tr>
            <tr>
              <td>Komfort początkowy</td>
              <td>Zwykle mniejszy ból w pierwszych dniach</td>
              <td>Możliwe otarcia błony śluzowej</td>
            </tr>
          </tbody>
        </table>
        <p>Nie ma metody lepszej w każdej sytuacji. U osób zdyscyplinowanych z lekką lub umiarkowaną wadą nakładki bywają wygodniejsze; przy złożonych wadach przewagę daje <Link href="/stomatologia/aparaty-stale/">aparat stały</Link>.</p>
      </>
    ),
  },
  {
    title: 'Ile godzin nosić alignery? Współpraca pacjenta',
    tocLabel: 'Czas noszenia i współpraca',
    content: (
      <>
        <p>Alignery działają tylko wtedy, gdy są noszone. Zalecany czas to 20-22 godziny na dobę; szyny zdejmuje się jedynie na posiłki i mycie zębów.</p>
        <p>To brzmi prosto, ale w praktyce bywa najtrudniejszym elementem leczenia. W badaniu kohortowym z 2021 roku pełne zalecenia dotyczące noszenia spełniało tylko około jednej trzeciej pacjentów, a deklarowany czas noszenia bywa zawyżany. Każda godzina poza zalecanym zakresem spowalnia ruch zębów i wydłuża leczenie.</p>
        <p>Dlatego od dyscypliny pacjenta wprost zależy powodzenie leczenia. U osób, które nie są pewne, czy utrzymają taki rygor, lepszym wyborem bywa <Link href="/stomatologia/aparaty-stale/">aparat stały</Link>, który działa bez względu na to, czy pacjent pamięta o noszeniu.</p>
        <p>Tempo wymiany szyn (zwykle co 1-2 tygodnie) ustala ortodonta. Szybsza wymiana w wybranych przypadkach bywa równie skuteczna, ale o protokole decyduje plan leczenia, a nie samodzielne przyspieszanie.</p>
      </>
    ),
  },
  {
    title: 'Higiena, dieta i komfort w trakcie leczenia',
    tocLabel: 'Higiena, dieta, komfort',
    content: (
      <>
        <p>Nakładki można zdejmować i to jedna z głównych praktycznych zalet tej metody: zęby myje się normalnie, bez omijania zamków i drutów.</p>
        <p>Przekłada się to na higienę. Przeglądy systematyczne wskazują, że podczas leczenia nakładkami na zębach odkłada się mniej płytki nazębnej niż przy aparacie stałym (przegląd systematyczny, 2023), a białych plam próchnicowych (odwapnień szkliwa) jest zwykle mniej. Mimo to skrupulatne mycie zębów i samych szyn pozostaje warunkiem zdrowia jamy ustnej; pomocna bywa też regularna <Link href="/stomatologia/higienizacja/">higienizacja</Link>.</p>
        <h3>Co można jeść i pić w alignerach?</h3>
        <p>Na czas jedzenia nakładki się wyjmuje. W założonych szynach bezpieczna jest właściwie tylko woda, ponieważ kawa, herbata czy barwne napoje przebarwiają tworzywo, a cukier zamknięty pod szyną zwiększa ryzyko <Link href="/stomatologia/leczenie-zebow/">próchnicy</Link>.</p>
        <h3>Czy alignery bolą i jak wpływają na mowę?</h3>
        <p>Po założeniu nowej szyny przez pierwsze dni pojawia się uczucie ucisku. Z badań wynika, że dyskomfort ten jest zwykle mniejszy niż przy aparacie stałym, zwłaszcza w pierwszych dniach. Na początku możliwe jest też przejściowe seplenienie, które ustępuje w miarę przyzwyczajenia.</p>
      </>
    ),
  },
  {
    title: 'Retencja po leczeniu: jak utrwalić efekt',
    tocLabel: 'Retencja po leczeniu',
    content: (
      <>
        <p>Zakończenie noszenia nakładek nie jest końcem leczenia. Zęby mają naturalną tendencję do powrotu w stronę dawnego ustawienia, dlatego konieczna jest retencja.</p>
        <p>Utrzymanie efektu zapewnia <strong>retainer</strong>: cienki drut przyklejony od wewnętrznej strony zębów (retencja stała) albo przezroczysta nakładka nocna (retencja ruchoma). Aktualny przegląd Cochrane nie wskazuje jednej, uniwersalnie najlepszej metody retencji, więc ortodonta dobiera ją indywidualnie. Retencję traktuje się jako trwały, często wieloletni element dbania o efekt.</p>
        <p>Po zdjęciu attachmentów warto rozważyć też estetyczne dopełnienie, na przykład <Link href="/stomatologia/wybielanie-zebow/">wybielanie zębów</Link>, które najlepiej wykonać już po wyrównaniu łuków.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania, bezpieczeństwo i ograniczenia',
    tocLabel: 'Przeciwwskazania i bezpieczeństwo',
    content: (
      <>
        <p>Alignery są bezpieczną metodą leczenia, ale nie dla każdego i nie w każdej sytuacji. Przed rozpoczęciem leczenia ortodonta wyklucza przeciwwskazania.</p>
        <p>Leczenie odkłada się lub modyfikuje między innymi, gdy obecne są:</p>
        <ul>
          <li>nieleczona <Link href="/stomatologia/leczenie-zebow/">próchnica</Link> lub aktywna choroba dziąseł i przyzębia, które wymagają wcześniejszego leczenia;</li>
          <li>niedostateczna <Link href="/stomatologia/higienizacja/">higiena jamy ustnej</Link>, zwiększająca ryzyko próchnicy i odwapnień;</li>
          <li>złożone wady szkieletowe lub potrzeba dużych przesunięć, w których skuteczniejszy jest aparat stały albo leczenie łączone;</li>
          <li>brak gotowości do noszenia szyn przez 20-22 godziny na dobę.</li>
        </ul>
        <h3>Czy nakładki są bezpieczne dla korzeni i dziąseł?</h3>
        <p>Jak każde leczenie ortodontyczne, przesuwanie zębów może wiązać się z resorpcją (skróceniem) korzeni. Dostępne przeglądy badań sugerują, że przy nakładkach jest ona zwykle mniejsza niż przy aparacie stałym, choć ryzyka tego nie da się wykluczyć, a jakość tych dowodów jest ograniczona. Łatwiejsza higiena podczas leczenia nakładkami sprzyja z kolei zdrowiu dziąseł.</p>
        <p>Alignery stosuje się u dorosłych i u młodzieży po wymianie uzębienia na stałe. Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji ortodontycznej, podczas której lekarz ocenia indywidualne wskazania oraz ryzyko.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztują alignery we Wrocławiu? Cena i NFZ',
    tocLabel: 'Cena i NFZ Wrocław',
    content: (
      <>
        <p>Cena leczenia alignerami zależy od stopnia wady zgryzu, liczby potrzebnych szyn i czasu leczenia, dlatego ustala się ją indywidualnie po konsultacji i diagnostyce.</p>
        <p>Na koszt składają się zwykle: diagnostyka i skan, cyfrowy plan 3D, komplet nakładek, attachmenty i ewentualne IPR, wizyty kontrolne oraz retencja. Aktualne stawki znajdziesz w <Link href="/cennik/">cenniku</Link>, a wiążącą wycenę przedstawiamy po zaplanowaniu leczenia.</p>
        <h3>Czy NFZ refunduje alignery?</h3>
        <p>Nie. Alignery są leczeniem w pełni prywatnym, niezależnie od wieku pacjenta. W ramach NFZ bezpłatne jest wyłącznie leczenie aparatem <Link href="/stomatologia/aparaty-ruchome/">ruchomym</Link> u dzieci, które rozpoczną je przed ukończeniem 12. roku życia; aparat stały i nakładki nie są refundowane (poza wybranymi wadami wrodzonymi). Dlatego planując leczenie nakładkami, warto z góry potraktować je jako inwestycję prywatną.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Papageorgiou SN i wsp. Treatment outcome with orthodontic aligners and fixed appliances: a systematic review with meta-analyses. Eur J Orthod. 2020. PMID: 31758191.</li>
        <li>Rossini G i wsp. Efficacy of clear aligners in controlling orthodontic tooth movement: a systematic review. Angle Orthod. 2015. PMID: 25412265.</li>
        <li>Robertson L i wsp. Effectiveness of clear aligner therapy for orthodontic treatment: a systematic review. Orthod Craniofac Res. 2020. PMID: 31651082.</li>
        <li>Ke Y i wsp. A comparison of treatment effectiveness between clear aligner and fixed appliance therapies. BMC Oral Health. 2019. PMID: 30674307.</li>
        <li>Galan-Lopez L i wsp. A systematic review of the accuracy and efficiency of dental movements with Invisalign. Korean J Orthod. 2019. PMID: 31149604.</li>
        <li>Kravitz ND i wsp. How well does Invisalign work? A prospective clinical study evaluating the efficacy of tooth movement with Invisalign. Am J Orthod Dentofacial Orthop. 2009. PMID: 19121497.</li>
        <li>Haouili N i wsp. Has Invisalign improved? A prospective follow-up study on the efficacy of tooth movement with Invisalign. Am J Orthod Dentofacial Orthop. 2020. PMID: 32620479.</li>
        <li>Koletsi D i wsp. Predictability of rotational tooth movement with orthodontic aligners: a systematic review and meta-analysis of observational studies. 2021. PMID: 34176358.</li>
        <li>Benedetti G i wsp. Evaluating the clinical success of clear aligners for rotational tooth movements in adult patients: a systematic review. Dent J (Basel). 2025. PMID: 41149087.</li>
        <li>Muthuswamy Pandian S i wsp. Comparison of efficacy and accuracy of tooth movements in optimized and conventional attachments of clear aligners: a systematic review and meta-analysis. J Oral Biol Craniofac Res. 2025. PMID: 40778386.</li>
        <li>Ladewig VM i wsp. Does the need for refinement sets of orthodontic clear aligners correlate with professional experience? 2025. PMID: 40435056.</li>
        <li>Timm LH i wsp. Factors influencing patient compliance during clear aligner therapy: a retrospective cohort study. 2021. PMID: 34300269.</li>
        <li>Al-Nadawi M i wsp. Effect of clear aligner wear protocol on the efficacy of tooth movement. Angle Orthod. 2021. PMID: 33296455.</li>
        <li>Pesce P i wsp. Accuracy of full-arch intraoral scans versus conventional impression: a systematic review with a meta-analysis. 2024. PMID: 39797155.</li>
        <li>Jiang Q i wsp. Periodontal health during orthodontic treatment with clear aligners and fixed appliances: a meta-analysis. J Am Dent Assoc. 2018. PMID: 29921415.</li>
        <li>Raghavan S i wsp. White spot lesions, plaque accumulation and salivary caries-associated bacteria in clear aligners compared to fixed orthodontic treatment: a systematic review and meta-analysis. BMC Oral Health. 2023. PMID: 37635207.</li>
        <li>Llera-Romero AR i wsp. Periodontal health status, oral microbiome, white-spot lesions and oral health related to quality of life: clear aligners versus fixed appliances. Korean J Orthod. 2023. PMID: 37989575.</li>
        <li>Di Spirito F i wsp. Impact of clear aligners versus fixed appliances on periodontal status of patients undergoing orthodontic treatment: a systematic review of systematic reviews. Healthcare (Basel). 2023. PMID: 37174882.</li>
        <li>Li Y i wsp. Comparison of pain intensity and impacts on oral health-related quality of life between orthodontic patients treated with clear aligners and fixed appliances: a systematic review and meta-analysis. BMC Oral Health. 2023. PMID: 38001455.</li>
        <li>Cardoso PC i wsp. Pain level between clear aligners and fixed appliances: a systematic review. Prog Orthod. 2020. PMID: 31956934.</li>
        <li>Fang X i wsp. Root resorption in orthodontic treatment with clear aligners: a systematic review and meta-analysis. Orthod Craniofac Res. 2019. PMID: 31323701.</li>
        <li>Singh i wsp. Comparative assessment of external apical root resorption between subjects treated with clear aligners and fixed orthodontic appliances: a systematic review and meta-analysis. 2024. PMID: 39071210.</li>
        <li>Zhang B i wsp. Evaluation of aligners and root resorption: an overview of systematic reviews. J Clin Med. 2024. PMID: 38610714.</li>
        <li>Jaber ST i wsp. Treatment effectiveness of clear aligners in correcting complicated and severe malocclusion cases compared to fixed orthodontic appliances: a systematic review. Cureus. 2023. PMID: 37128600.</li>
        <li>Baneshi i wsp. Effectiveness of clear orthodontic aligners in correcting malocclusions: a systematic review and meta-analysis. J Evid Based Dent Pract. 2025. PMID: 39947778.</li>
        <li>Martin C i wsp. Retention procedures for stabilising tooth position after treatment with orthodontic braces. Cochrane Database Syst Rev. 2023. PMID: 37219527.</li>
        <li>Narodowy Fundusz Zdrowia, pacjent.gov.pl. Leczenie ortodontyczne dzieci w ramach NFZ (zakres świadczeń refundowanych).</li>
      </ol>
    ),
  },
];

export default function AligneryPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Alignery Wrocław"
      heroSubtitle="Ortodoncja"
      heroDescription="Alignery, czyli przezroczyste nakładki ortodontyczne, w Bas Clinic we Wrocławiu. Dyskretnie korygują stłoczenie i wybrane wady zgryzu u dorosłych i młodzieży, a leczenie planujemy na podstawie skanu wewnątrzustnego."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="stomatologia/alignery"
    />
  );
}
