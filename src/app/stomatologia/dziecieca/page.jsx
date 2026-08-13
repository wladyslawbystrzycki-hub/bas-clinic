import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Stomatologia dziecięca Wrocław',
  description: 'Stomatologia dziecięca we Wrocławiu: pierwsza wizyta i adaptacja, profilaktyka, lakowanie, leczenie zębów mlecznych i urazów. Dentysta dla dzieci w Bas Clinic.',
  path: '/stomatologia/dziecieca/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Stomatologia dziecięca' },
];

const FAQ = [
  { question: 'W jakim wieku zabrać dziecko na pierwszą wizytę do dentysty?', answer: 'Pierwszą wizytę warto zaplanować po pojawieniu się pierwszego zęba mlecznego, najpóźniej około 1. roku życia. Towarzystwa stomatologii dziecięcej zalecają wtedy ustalenie stałej opieki (dental home). Wczesna, często adaptacyjna wizyta pozwala kontrolować rozwój zębów i oswoić dziecko z gabinetem.' },
  { question: 'Czy trzeba leczyć zęby mleczne, skoro i tak wypadną?', answer: 'Tak. Zęby mleczne służą dziecku przez wiele lat, utrzymują miejsce dla zębów stałych i umożliwiają gryzienie oraz mowę. Nieleczona próchnica zęba mlecznego boli, grozi ropniem i może uszkodzić zawiązek zęba stałego, dlatego mleczaki leczy się tak samo uważnie jak zęby stałe.' },
  { question: 'Czy lakowanie i lakierowanie zębów u dzieci jest refundowane przez NFZ?', answer: 'Dzieciom i młodzieży do 18. roku życia NFZ refunduje lakierowanie zębów stałych, a jednorazowe lakowanie pierwszych trzonowców stałych („szóstek") przysługuje do ukończenia 8. roku życia. Dokładny zakres określa aktualny katalog NFZ, dlatego szczegóły warto potwierdzić w placówce z umową z Funduszem.' },
  { question: 'Czy gaz rozweselający (podtlenek azotu) jest bezpieczny dla dziecka?', answer: 'Sedacja wziewna podtlenkiem azotu uchodzi za bezpieczną metodę u dzieci, gdy podaje się ją z tlenem, po kwalifikacji i przy monitorowaniu. Dziecko pozostaje przytomne, a działanie szybko mija. Europejskie wytyczne stosują ją głównie od około 4. roku życia. O zastosowaniu decyduje lekarz po ocenie dziecka.' },
  { question: 'Co zrobić, gdy dziecko wybiło ząb?', answer: 'Wybitego zęba mlecznego nie wkładaj z powrotem, bo możesz uszkodzić zawiązek zęba stałego. Wybity ząb stały włóż delikatnie na miejsce lub przechowaj w mleku albo soli fizjologicznej (nie w wodzie) i natychmiast jedź do stomatologa. Przy urazie zęba liczy się każda minuta.' },
  { question: 'Gdzie leczyć zęby dziecka we Wrocławiu?', answer: `Małych pacjentów przyjmujemy w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Na pierwszą wizytę lub konsultację umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} albo przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest stomatologia dziecięca (pedodoncja)?',
    tocLabel: 'Czym jest',
    content: (
      <>
        <p>Stomatologia dziecięca, nazywana też pedodoncją, to dziedzina zajmująca się profilaktyką i leczeniem zębów u dzieci i młodzieży, od wyrznięcia pierwszego zęba mlecznego po uzębienie stałe. Pedodonta dobiera metody do wieku, etapu rozwoju i poziomu współpracy małego pacjenta.</p>
        <p>Opieka nad dzieckiem obejmuje wizyty profilaktyczne i adaptacyjne, leczenie próchnicy zębów mlecznych i stałych, leczenie miazgi, postępowanie po urazach oraz wczesną ocenę zgryzu. Pedodonta różni się od dentysty dla dorosłych przede wszystkim podejściem: zna specyfikę zębów mlecznych, prowadzi leczenie etapami i buduje u dziecka pozytywne skojarzenia z gabinetem. To część szerszej <Link href="/stomatologia/">opieki stomatologicznej</Link> dostosowanej do całej rodziny.</p>
        <p>Zdrowie zębów mlecznych ma znaczenie dla rozwoju mowy, odżywiania i prawidłowego wyrzynania zębów stałych. Próchnica wczesnego dzieciństwa (early childhood caries, ECC) to najczęstsza przewlekła choroba wieku rozwojowego; według przeglądu systematycznego (Uribe i wsp., 2021) dotyczy około 48% dzieci w wieku przedszkolnym na świecie.</p>
      </>
    ),
  },
  {
    title: 'Pierwsza wizyta i wizyta adaptacyjna - od kiedy i jak oswoić dziecko?',
    tocLabel: 'Pierwsza wizyta i adaptacja',
    content: (
      <>
        <p>Pierwszą wizytę warto zaplanować po pojawieniu się pierwszego zęba mlecznego, najpóźniej około pierwszych urodzin. Wczesny kontakt z gabinetem pozwala kontrolować rozwój uzębienia i oswoić dziecko, zanim pojawi się potrzeba leczenia.</p>
        <p>Towarzystwa stomatologii dziecięcej (m.in. AAPD) zalecają ustalenie stałej opieki stomatologicznej, tak zwanego dental home, do ukończenia 12. miesiąca życia. Regularne wizyty kontrolne co około pół roku pomagają wychwycić wczesne zmiany, zanim staną się bolesne.</p>
        <p>Lęk przed dentystą jest u dzieci częsty; metaanaliza (Grisolia i wsp., 2021) szacuje go na około 24%, a najsilniej dotyczy przedszkolaków. Dlatego pierwsza wizyta bywa <strong>wizytą adaptacyjną</strong>: bez wiercenia i zabiegów, pozwala dziecku poznać gabinet i zespół. Stomatolog dziecięcy stosuje sprawdzone techniki oswajania, takie jak metoda „powiedz-pokaż-zrób&quot; (tell-show-do) oraz pozytywne wzmacnianie.</p>
        <h3>Jak rodzic może pomóc przed wizytą</h3>
        <ul>
          <li>mów o wizycie spokojnie i pozytywnie, unikaj słów „ból&quot;, „zastrzyk&quot;, „wiercenie&quot;;</li>
          <li>nie strasz dentystą i nie obiecuj nagrody „za odwagę&quot;, bo sugeruje to, że stanie się coś trudnego;</li>
          <li>wybierz porę, gdy dziecko jest wyspane i najedzone;</li>
          <li>poczytajcie wspólnie książeczki lub obejrzyjcie bajki o wizycie u dentysty.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Profilaktyka próchnicy - fluor, lakowanie bruzd i dieta',
    tocLabel: 'Profilaktyka',
    content: (
      <>
        <p>Profilaktyka u dzieci opiera się na codziennym szczotkowaniu pastą z fluorem, profesjonalnym lakierowaniu i lakowaniu bruzd oraz ograniczeniu cukrów. To metody o udokumentowanej skuteczności w zapobieganiu próchnicy.</p>
        <h3>Pasta z fluorem - ile i jaka</h3>
        <p>Fluor wzmacnia szkliwo i ogranicza rozwój próchnicy. Europejska Akademia Stomatologii Dziecięcej (EAPD, 2019) zaleca szczotkowanie dwa razy dziennie pastą z fluorem od wyrznięcia pierwszego zęba, pod nadzorem dorosłego mniej więcej do 7. roku życia. Ilość pasty dobiera się do wieku, aby ograniczyć jej połykanie.</p>
        <table>
          <tbody>
            <tr>
              <th>Wiek dziecka</th>
              <th>Stężenie fluoru</th>
              <th>Ilość pasty</th>
            </tr>
            <tr>
              <td>0-2 lata</td>
              <td>1000 ppm</td>
              <td>wielkości ziarna ryżu</td>
            </tr>
            <tr>
              <td>2-6 lat</td>
              <td>1000 ppm</td>
              <td>wielkości ziarka grochu</td>
            </tr>
            <tr>
              <td>powyżej 6 lat</td>
              <td>1450 ppm</td>
              <td>pasek na długości włosia szczoteczki</td>
            </tr>
          </tbody>
        </table>
        <h3>Lakierowanie i lakowanie bruzd</h3>
        <p>W gabinecie stosuje się dwie różne metody, które bywają mylone. Lakierowanie fluorkowe to pokrycie zębów preparatem z dużym stężeniem fluoru; przegląd Cochrane (Marinho i wsp., 2013) wykazał, że zmniejsza przyrost próchnicy w zębach mlecznych o około 37%. Lakowanie (uszczelnianie) bruzd polega na wypełnieniu zagłębień na powierzchni żującej zębów trzonowych szczelnym lakiem, który odcina je od bakterii i resztek pokarmu. Profesjonalną higienę i fluoryzację u starszych dzieci i dorosłych prowadzimy w ramach <Link href="/stomatologia/higienizacja/">higienizacji jamy ustnej</Link>.</p>
        <h3>Dieta i cukier a próchnica u dzieci</h3>
        <p>Częstość spożycia cukrów jest ważniejsza niż jednorazowa ilość. Światowa Organizacja Zdrowia zaleca ograniczenie cukrów wolnych poniżej 10% energii, a dla lepszej ochrony zębów poniżej 5%. Szczególnie szkodzi pojenie dziecka na noc słodkimi napojami lub sokiem, co prowadzi do tak zwanej próchnicy butelkowej.</p>
      </>
    ),
  },
  {
    title: 'Leczenie próchnicy i zębów mlecznych - czy warto leczyć mleczaki?',
    tocLabel: 'Leczenie zębów mlecznych',
    content: (
      <>
        <p>Zęby mleczne leczy się, mimo że z czasem wypadną. Utrzymują miejsce dla zębów stałych, umożliwiają gryzienie i mowę, a nieleczona próchnica boli i grozi infekcją.</p>
        <p>Rodzice często pytają, czy warto leczyć mleczaki, skoro i tak wypadną. Argument wydaje się logiczny, ale pomija kilka faktów. Ostatnie zęby mleczne wymieniają się dopiero około 12. roku życia, więc służą dziecku przez wiele lat. Przedwczesna utrata trzonowca mlecznego prowadzi do przesuwania się sąsiednich zębów i utraty miejsca dla zęba stałego, co bywa później powodem wady zgryzu wymagającej <Link href="/stomatologia/ortodoncja/">leczenia ortodontycznego</Link>. Nieleczona próchnica nie zatrzymuje się sama: postępuje do bólu, zapalenia miazgi i ropnia, a infekcja przy korzeniu może uszkodzić zawiązek zęba stałego. Wniosek jest praktyczny: im wcześniej wykryta zmiana, tym leczenie krótsze i mniej obciążające.</p>
        <h3>Metody leczenia zębów mlecznych</h3>
        <table>
          <tbody>
            <tr>
              <th>Metoda</th>
              <th>Na czym polega</th>
              <th>Kiedy stosowana</th>
            </tr>
            <tr>
              <td>Wypełnienie</td>
              <td>usunięcie próchnicy i odbudowa ubytku materiałem</td>
              <td>ubytki o małym i średnim zasięgu</td>
            </tr>
            <tr>
              <td>Korona pedodontyczna (technika Halla)</td>
              <td>gotowa koronka nasadzana na ząb, w technice Halla bez wiercenia</td>
              <td>rozległa próchnica trzonowca mlecznego</td>
            </tr>
            <tr>
              <td>SDF (diaminofluorek srebra)</td>
              <td>preparat zatrzymujący próchnicę bez wiercenia, ciemni leczone miejsce</td>
              <td>gdy wiercenie jest niemożliwe lub trzeba zyskać czas</td>
            </tr>
            <tr>
              <td>Leczenie miazgi (pulpotomia)</td>
              <td>usunięcie zajętej części miazgi i opatrunek</td>
              <td>głęboka próchnica z zajęciem miazgi</td>
            </tr>
          </tbody>
        </table>
        <p>Przy rozległej próchnicy trzonowców mlecznych korony pedodontyczne dają trwalszy efekt niż klasyczne wypełnienia; przegląd Cochrane (Innes i wsp., 2015) wykazał wyraźnie niższe ryzyko poważnego niepowodzenia i bólu w obserwacji długoterminowej. Leczenie próchnicy i odbudowę zębów u starszych dzieci omawiamy szerzej przy <Link href="/stomatologia/leczenie-zebow/">leczeniu zachowawczym zębów</Link>. Jeśli ząb mleczny trzeba usunąć, planujemy to z myślą o miejscu dla zęba stałego; <Link href="/stomatologia/usuwanie-zebow/">usuwanie zębów</Link> u dzieci prowadzimy oszczędnie i dopiero gdy nie ma innej możliwości.</p>
      </>
    ),
  },
  {
    title: 'Urazy zębów, ząbkowanie i MIH - co powinni wiedzieć rodzice',
    tocLabel: 'Urazy, ząbkowanie, MIH',
    content: (
      <>
        <p>Urazy zębów to częsta sytuacja u aktywnych dzieci; dotyczą mniej więcej co piątego dziecka w wieku szkolnym. Najważniejsza zasada brzmi: wybitego zęba mlecznego nie wkłada się z powrotem, a wybity ząb stały trzeba jak najszybciej zabezpieczyć i pilnie zgłosić się do stomatologa.</p>
        <h3>Co robić, gdy dziecko wybiło ząb?</h3>
        <p>Postępowanie zależy od tego, czy to ząb mleczny, czy stały (wytyczne IADT). Wybitego <strong>zęba mlecznego</strong> nie wolno wkładać do zębodołu, bo próba replantacji może uszkodzić zawiązek zęba stałego. Wybity <strong>ząb stały</strong> ma szansę na przyjęcie, jeśli działamy szybko: gdy to możliwe, delikatnie umieść go w zębodole, a jeśli się nie da, włóż do mleka, soli fizjologicznej lub śliny (nigdy do wody) i od razu jedź do stomatologa. Liczy się każda minuta poza jamą ustną.</p>
        <h3>Ząbkowanie u niemowląt - objawy i co pomaga</h3>
        <p>Wyrzynaniu zębów mlecznych towarzyszy ślinienie, drażliwość i chęć gryzienia, czasem nieznaczny wzrost temperatury. Ząbkowanie nie wywołuje jednak prawdziwej gorączki; jej wystąpienie u niemowlęcia wymaga konsultacji pediatrycznej, a nie tłumaczenia „to tylko ząbki&quot;. Amerykańska agencja FDA odradza żele na ząbkowanie z benzokainą u dzieci poniżej 2. roku życia; bezpieczniejsze są schłodzony gryzak i delikatny masaż dziąseł.</p>
        <h3>MIH - białe i brązowe plamy na zębach</h3>
        <p>Hipomineralizacja trzonowcowo-siekaczowa (MIH) to wada szkliwa, w której pierwsze zęby trzonowe i siekacze stałe mają odgraniczone białe, żółte lub brązowe przebarwienia i bywają nadwrażliwe. Dotyczy około 13-15% dzieci. Wczesne rozpoznanie pozwala chronić osłabione szkliwo (fluoryzacja, uszczelnianie, wypełnienia) i ograniczyć nadwrażliwość.</p>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo, sedacja i przeciwwskazania',
    tocLabel: 'Bezpieczeństwo i przeciwwskazania',
    content: (
      <>
        <p>Leczenie u dzieci planuje się tak, aby było skuteczne i możliwie najmniej obciążające. Dobór znieczulenia i ewentualnej sedacji zależy od wieku, zakresu leczenia oraz stanu zdrowia dziecka, dlatego każdą wizytę poprzedza rozmowa i kwalifikacja.</p>
        <h3>Znieczulenie i sedacja wziewna</h3>
        <p>Do leczenia z reguły wystarcza znieczulenie miejscowe, którego dawkę lekarz dobiera do masy ciała dziecka. U dzieci lękowych lub przy większym zakresie leczenia bywa pomocna sedacja wziewna podtlenkiem azotu (gaz rozweselający): dziecko pozostaje przytomne i współpracuje, a działanie szybko ustępuje po zabiegu. Europejskie wytyczne (EAPD) wskazują tę metodę przede wszystkim u dzieci od około 4. roku życia, po kwalifikacji i przy monitorowaniu. Leczenie w znieczuleniu ogólnym rezerwuje się dla wybranych sytuacji, na przykład bardzo rozległych potrzeb lub braku współpracy uniemożliwiającego leczenie.</p>
        <h3>Przeciwwskazania do leczenia stomatologicznego u dzieci</h3>
        <ul>
          <li>ostra infekcja, katar lub niedrożny nos mogą wymagać przełożenia sedacji wziewnej;</li>
          <li>brak współpracy nieadekwatny do wieku, gdy zaczynamy od wizyt adaptacyjnych i metod oswajania;</li>
          <li>choroby ogólne i przyjmowane leki, o których zawsze poinformuj lekarza przed leczeniem;</li>
          <li>preparat SDF trwale ciemni leczone miejsce, dlatego stosuje się go po omówieniu z rodzicem;</li>
          <li>nadmierne połykanie pasty z fluorem, dlatego jej ilość dobiera się do wieku, a szczotkowanie nadzoruje dorosły.</li>
        </ul>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji ze stomatologiem. O wyborze metody profilaktyki i leczenia decyduje lekarz po zbadaniu dziecka.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje leczenie zębów dziecka we Wrocławiu? (NFZ i prywatnie)',
    tocLabel: 'Cena i NFZ Wrocław',
    content: (
      <>
        <p>Koszt leczenia zależy od rodzaju zabiegu, wieku dziecka i zakresu pracy. Dzieci do 18. roku życia mają też prawo do części świadczeń stomatologicznych w ramach NFZ, więc warto rozróżnić opiekę refundowaną i prywatną.</p>
        <p>W ramach NFZ dziecku przysługują między innymi badania kontrolne, leczenie próchnicy z wypełnieniami (dla dzieci do 18 lat również kompozytowe „białe&quot; wypełnienia), leczenie kanałowe, ekstrakcje i znieczulenia, a w profilaktyce lakierowanie zębów stałych oraz jednorazowe lakowanie pierwszych trzonowców stałych („szóstek&quot;) do ukończenia 8. roku życia. Zakres i częstotliwość świadczeń określa aktualny katalog NFZ, dlatego szczegóły warto potwierdzić w placówce mającej umowę z Funduszem.</p>
        <p>Na cenę leczenia prywatnego wpływają rodzaj zabiegu (od fluoryzacji i lakowania, przez wypełnienie, po koronę czy leczenie miazgi), liczba zębów i ewentualna sedacja. Aktualne stawki znajdziesz w <Link href="/cennik/">cenniku</Link>, a indywidualny plan i wycenę przygotujemy podczas konsultacji; umów ją przez <Link href="/rejestracja/">rejestrację online</Link>.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Uribe SE, Innes N, Maldupa I. The global prevalence of early childhood caries: a systematic review with meta-analysis. Int J Paediatr Dent. 2021. PMID 33735529.</li>
        <li>Grisolia BM i wsp. Prevalence of dental anxiety in children and adolescents globally: a systematic review with meta-analyses. Int J Paediatr Dent. 2021. PMID 33245591.</li>
        <li>Marinho VCC, Worthington HV, Walsh T, Clarkson JE. Fluoride varnishes for preventing dental caries in children and adolescents. Cochrane Database Syst Rev. 2013. PMID 23846772.</li>
        <li>Ahovuo-Saloranta A i wsp. Pit and fissure sealants for preventing dental decay in permanent teeth. Cochrane Database Syst Rev. 2017. PMID 28759120.</li>
        <li>Wright JT i wsp. Sealants for preventing and arresting pit-and-fissure occlusal caries (ADA i AAPD). J Am Dent Assoc. 2016. PMID 27470524.</li>
        <li>Innes NP i wsp. Preformed crowns for decayed primary molar teeth. Cochrane Database Syst Rev. 2015. PMID 26718872.</li>
        <li>Oliveira BH i wsp. The effect of silver diamine fluoride in preventing caries in the primary dentition: a systematic review and meta-analysis. Caries Res. 2019. PMID 29874642.</li>
        <li>Zhao J i wsp. Dental arch spatial changes after premature loss of first primary molars: a systematic review and meta-analysis. BMC Oral Health. 2023. PMID 37380944.</li>
        <li>Day PF i wsp. International Association of Dental Traumatology guidelines: 3. Injuries in the primary dentition. Dent Traumatol. 2020. PMID 32458553.</li>
        <li>Fouad AF i wsp. International Association of Dental Traumatology guidelines: 2. Avulsion of permanent teeth. Dent Traumatol. 2020. PMID 32460393.</li>
        <li>Lopes LB i wsp. The prevalence of molar-incisor hypomineralization: a systematic review and meta-analysis. Sci Rep. 2021. PMID 34789780.</li>
        <li>Massignan C i wsp. Signs and symptoms of primary tooth eruption: a meta-analysis. Pediatrics. 2016. PMID 26908659.</li>
        <li>Ashley PF, Chaudhary M, Lourenço-Matharu L. Sedation of children undergoing dental treatment. Cochrane Database Syst Rev. 2018. PMID 30566228.</li>
        <li>Ashley P i wsp. Best clinical practice guidance for conscious sedation of children undergoing dental treatment: an EAPD policy document. Eur Arch Paediatr Dent. 2021. PMID 34453697.</li>
        <li>Moynihan PJ, Kelly SA. Effect on caries of restricting sugars intake: systematic review to inform WHO guidelines. J Dent Res. 2014. PMID 24323509.</li>
        <li>Guidelines on the use of fluoride for caries prevention in children: an updated EAPD policy document. Eur Arch Paediatr Dent. 2019.</li>
        <li>American Academy of Pediatric Dentistry (AAPD). Policy on Early Childhood Caries; Policy on the Dental Home; Behavior Guidance for the Pediatric Dental Patient. AAPD Reference Manual.</li>
        <li>U.S. Food and Drug Administration. Safely soothing teething pain (komunikat o bezpieczeństwie benzokainy). 2018.</li>
        <li>Narodowy Fundusz Zdrowia. Poradnik pacjenta: świadczenia stomatologiczne dla dzieci i młodzieży. nfz.gov.pl.</li>
      </ol>
    ),
  },
];

export default function StomatologiaDzieciecaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Stomatologia dziecięca Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Stomatologia dziecięca w Bas Clinic we Wrocławiu. Przyjazna atmosfera, wizyty adaptacyjne i leczenie dopasowane do wieku dziecka. Dbamy o zdrowe zęby od pierwszego ząbka."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      faqImage="/uploads/services/dziecieca-faq-bas-clinic-wroclaw.webp"
      faqImageAlt="Rodzic z dzieckiem w poczekalni Bas Clinic we Wrocławiu"
      slug="stomatologia/dziecieca"
    />
  );
}
