import { generatePageMetadata } from '@/lib/metadata';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Licówki Wrocław - porcelanowe i kompozytowe',
  description: 'Licówki we Wrocławiu - porcelanowe i kompozytowe. Sprawdź, czym różnią się rodzaje licówek, czy trzeba szlifować zęby, jak długo się trzymają i ile kosztują.',
  path: '/stomatologia/licowki/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Licówki' },
];

const FAQ = [
  { question: 'Czy licówki niszczą zęby?', answer: 'Licówki nie niszczą zębów, jeśli są prawidłowo zakwalifikowane i wykonane. Nieodwracalne jest samo oszlifowanie szkliwa, zwykle 0,3-0,5 mm, a ząb pozbawiony szkliwa wymaga starannej higieny. Przy zdrowym szkliwie warto rozważyć licówki bez szlifowania, które oszczędzają tkanki zęba.' },
  { question: 'Czy trzeba szlifować zęby pod licówki?', answer: 'Szlifowanie zębów pod licówki nie zawsze jest konieczne. Klasyczne licówki porcelanowe wymagają usunięcia cienkiej warstwy szkliwa, najczęściej 0,3-0,5 mm. Przy zdrowym szkliwie i sprzyjającym kształcie zębów stosuje się licówki bezszlifowe (no-prep) lub kompozytowe budowane bez preparacji.' },
  { question: 'Ile wytrzymują licówki porcelanowe?', answer: 'Licówki porcelanowe wytrzymują długo. W badaniach klinicznych około 95% z nich służy po 10 latach, a w praktyce często 10-15 lat lub dłużej. Trwałość zależy od materiału, zgryzu i higieny. Licówki kompozytowe trzymają się krócej i częściej wymagają naprawy lub wymiany.' },
  { question: 'Czym różnią się licówki od koron?', answer: 'Licówki różnią się od koron zakresem. Licówka to cienka nakładka pokrywająca przednią powierzchnię zdrowego zęba w celach estetycznych. Korona obejmuje ząb ze wszystkich stron i stosuje się ją, gdy ząb jest mocno zniszczony lub po leczeniu kanałowym i potrzebuje pełnego pokrycia.' },
  { question: 'Czy zakładanie licówek boli?', answer: 'Zakładanie licówek zwykle nie boli, a w razie potrzeby szlifowania wykonuje się je w znieczuleniu miejscowym. Po zabiegu przez kilka dni utrzymuje się czasem przejściowa nadwrażliwość zębów na ciepło i zimno, która zazwyczaj szybko ustępuje.' },
  { question: 'Gdzie we Wrocławiu założyć licówki?', answer: `Licówki we Wrocławiu zakładamy w Bas Clinic przy ${CLINIC.address.street}. Na konsultację, podczas której oceniamy zgryz i dobieramy rodzaj licówek, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym są licówki we Wrocławiu?',
    tocLabel: 'Czym są licówki?',
    content: '<p><strong>Licówki</strong> to cienkie nakładki, zwykle 0,3-0,7 mm grubości, mocowane na zewnętrznej, widocznej powierzchni przednich zębów. W stomatologii estetycznej zastępują tę warstwę szkliwa, która decyduje o kolorze i kształcie uśmiechu, bez naruszania wnętrza zęba tak jak przy koronie.</p><p>Licówki (z angielskiego veneers) korygują defekty, których nie usunie samo wybielanie ani higienizacja. Rozważa się je przy:</p><ul><li><strong>Trwałych przebarwieniach</strong>, na przykład po tetracyklinach lub przy fluorozie, które nie ustępują po <a href="/stomatologia/wybielanie-zebow/">wybielaniu zębów</a>.</li><li><strong>Diastemie i szparach</strong> między zębami, gdy pacjent chce je zamknąć bez aparatu.</li><li><strong>Drobnych złamaniach, odpryskach i startych brzegach</strong> siekaczy.</li><li><strong>Nieregularnym kształcie lub niewielkich rotacjach</strong> pojedynczych zębów.</li></ul><p>Jeśli przeszkadza wyłącznie kolor zębów, tańszym i nieinwazyjnym pierwszym krokiem bywa wybielanie. Licówki mają sens, gdy chcemy jednocześnie zmienić kształt, ustawienie i barwę, a efekt ma być trwały.</p>',
  },
  {
    title: 'Licówki porcelanowe czy kompozytowe? Rodzaje licówek',
    tocLabel: 'Rodzaje licówek',
    content: '<p>Licówki dzielą się na dwie główne grupy: <strong>porcelanowe (ceramiczne)</strong>, wykonywane w laboratorium, oraz <strong>kompozytowe</strong>, budowane bezpośrednio na zębie. Różnią się sposobem wykonania, trwałością i ceną.</p><table><tr><th>Cecha</th><th>Licówki porcelanowe</th><th>Licówki kompozytowe</th></tr><tr><td>Sposób wykonania</td><td>w laboratorium, zwykle 2 wizyty</td><td>bezpośrednio w gabinecie, często 1 wizyta</td></tr><tr><td>Trwałość</td><td>wysoka, około 95% po 10 latach</td><td>niższa, kilka lat, praca naprawialna</td></tr><tr><td>Odporność na przebarwienia</td><td>bardzo wysoka</td><td>niższa, barwią się z czasem</td></tr><tr><td>Inwazyjność</td><td>zwykle minimalne szlifowanie</td><td>często bez szlifowania</td></tr></table><h3>Licówki porcelanowe (ceramiczne)</h3><p>Powstają z ceramiki, najczęściej z dwukrzemianu litu (na przykład e.max) lub porcelany skaleniowej. Po cyfrowym wycisku pobranym skanerem wewnątrzustnym technik wykonuje pracę w laboratorium. Porcelana feldspatyczna i dwukrzemian litu dają zbliżoną przeżywalność, choć dwukrzemian litu rzadziej ulega odpryskom (metaanaliza, Klein i wsp., 2025).</p><h3>Licówki kompozytowe</h3><p>Lekarz modeluje je z żywicy kompozytowej bezpośrednio w gabinecie, podobnie jak przy <a href="/stomatologia/bonding/">bondingu</a>. Są tańsze, naprawialne i często nie wymagają szlifowania, ale ich szacowana przeżywalność wynosi około 88% w obserwacjach do kilku lat (przegląd systematyczny, Lim i wsp., 2023) i łatwiej się przebarwiają niż ceramika.</p>',
  },
  {
    title: 'Czy trzeba szlifować zęby i czy licówki niszczą zęby?',
    tocLabel: 'Szlifowanie a zdrowie zęba',
    content: '<p>Klasyczne licówki wymagają usunięcia cienkiej warstwy szkliwa, zwykle około 0,3-0,5 mm, aby nakładka przylegała równo i nie pogrubiała zęba. To zabieg nieodwracalny, ale prawidłowo zaplanowane licówki nie niszczą zęba. Decyduje właściwa kwalifikacja i higiena.</p><p>Pytanie „czy licówki niszczą zęby" wraca w gabinecie najczęściej. Warto rozdzielić dwie sprawy: samo oszlifowanie i dalsze losy zęba.</p><ul><li><strong>Szlifowanie jest nieodwracalne</strong> - usuniętego szkliwa nie da się odbudować, a ząb pozostaje zależny od uzupełnienia.</li><li><strong>Ząb pozbawiony szkliwa</strong> bywa wrażliwszy na bodźce i wymaga starannej higieny, bo licówka nie chroni przed próchnicą na granicy z zębem.</li></ul><h3>Licówki bez szlifowania (no-prep)</h3><p>Gdy szkliwo jest zdrowe, a docelowy kształt na to pozwala, stosuje się bardzo cienkie licówki bez szlifowania lub z minimalną preparacją. W obserwacji prospektywnej trwającej średnio 9 lat licówki minimalnie inwazyjne wypadały co najmniej tak dobrze jak klasyczne. Metoda nie sprawdza się jednak przy ciemnym podłożu, bo cienka ceramika nie zamaskuje przebarwienia większego niż dwa tony, ani przy stłoczeniach wymagających zeszlifowania zęba.</p><h3>Jak ograniczamy ryzyko uszkodzenia zęba?</h3><p>Przed zabiegiem wykluczamy próchnicę i stan zapalny dziąseł, w razie potrzeby po <a href="/stomatologia/higienizacja/">higienizacji</a>. Przy nawyku zaciskania zębów zalecamy szynę ochronną. Taka kwalifikacja decyduje, czy efekt utrzyma się latami.</p>',
  },
  {
    title: 'Jak przebiega zakładanie licówek we Wrocławiu krok po kroku?',
    tocLabel: 'Przebieg zabiegu',
    content: '<p>Założenie licówek porcelanowych to zwykle dwie wizyty, między którymi pracownia protetyczna wykonuje pracę; licówki kompozytowe powstają podczas jednej wizyty. Cały proces zajmuje od kilku do kilkunastu dni.</p><ol><li><strong>Konsultacja i kwalifikacja</strong> - ocena zgryzu, stanu szkliwa i dziąseł oraz ustalenie, czy licówki są właściwym rozwiązaniem.</li><li><strong>Projekt uśmiechu</strong> - cyfrowy wycisk skanerem wewnątrzustnym i zaprojektowanie kształtu oraz koloru; często wykonujemy przymiarkę (mock-up), by pacjent zobaczył efekt przed szlifowaniem.</li><li><strong>Preparacja i wycisk</strong> - minimalne oszlifowanie szkliwa, jeśli jest potrzebne, i pobranie precyzyjnego wycisku dla technika.</li><li><strong>Licówki tymczasowe</strong> - chronią oszlifowane zęby do czasu osadzenia pracy docelowej.</li><li><strong>Cementowanie adhezyjne</strong> - gotowe licówki przykleja się specjalnym cementem kompozytowym, a następnie poleruje i koryguje zgryz.</li></ol><p>Sam zabieg jest mało bolesny, a w razie potrzeby szlifowania wykonujemy go w znieczuleniu miejscowym. Przejściowa nadwrażliwość zębów w pierwszych dniach jest typowa i zwykle szybko ustępuje.</p>',
  },
  {
    title: 'Przeciwwskazania do licówek',
    tocLabel: 'Przeciwwskazania',
    content: '<p>Licówek nie zakłada się przy niewyleczonej próchnicy, chorobie dziąseł ani na zęby z niewystarczającą ilością zdrowego szkliwa. W części sytuacji lepszym rozwiązaniem jest korona, leczenie ortodontyczne albo odłożenie zabiegu do czasu opanowania problemu.</p><ul><li><strong>Bruksizm i nawykowe zaciskanie zębów</strong> - silne siły zgryzowe odłamują ceramikę; zabieg bywa możliwy dopiero po zabezpieczeniu szyną ochronną.</li><li><strong>Wadliwy lub głęboki zgryz</strong> - nieprawidłowe kontakty szybko uszkadzają licówki.</li><li><strong>Czynna próchnica lub stan zapalny dziąseł</strong> - wymaga wcześniejszego leczenia i <a href="/stomatologia/higienizacja/">higienizacji</a>.</li><li><strong>Niewystarczające szkliwo</strong> - licówka wiąże się adhezyjnie ze szkliwem, a jego brak osłabia mocowanie.</li><li><strong>Znaczne stłoczenia lub wysunięcie zębów</strong> - gdy potrzebna jest realna zmiana ustawienia, właściwsze bywa leczenie <a href="/stomatologia/ortodoncja/">ortodontyczne</a>.</li><li><strong>Silnie przebarwione, ciemne zęby</strong> - cienka licówka, zwłaszcza bezszlifowa, nie zawsze zamaskuje głębokie przebarwienie.</li></ul>',
  },
  {
    title: 'Licówki, bonding, korona czy ortodoncja? Co wybrać',
    tocLabel: 'Licówki a alternatywy',
    content: '<p>Licówki to jedno z kilku rozwiązań poprawiających wygląd przednich zębów. Wybór zależy od tego, czy problemem jest kolor, kształt, ustawienie, czy rozległe zniszczenie zęba.</p><table><tr><th>Rozwiązanie</th><th>Główne wskazanie</th><th>Inwazyjność</th><th>Odwracalność</th></tr><tr><td>Licówki</td><td>kolor, kształt i drobne ustawienie</td><td>mała do umiarkowanej (szlifowanie szkliwa)</td><td>nie po oszlifowaniu</td></tr><tr><td>Bonding kompozytowy</td><td>pojedyncze ubytki, szpary, młodsi pacjenci</td><td>minimalna</td><td>zwykle tak, bez szlifowania</td></tr><tr><td>Korona</td><td>ząb mocno zniszczony lub po leczeniu kanałowym</td><td>duża (pełne opracowanie)</td><td>nie</td></tr><tr><td>Ortodoncja</td><td>krzywe, stłoczone zęby</td><td>bez utraty tkanek</td><td>nie dotyczy</td></tr></table><p>W praktyce <a href="/stomatologia/bonding/">bonding</a> kompozytowy bywa dobrym, tańszym wyborem przy pojedynczych ubytkach i u młodszych pacjentów, bo nie wymaga szlifowania. <a href="/stomatologia/protetyka-korony/">Korona protetyczna</a> jest lepsza, gdy ząb jest mocno zniszczony lub po leczeniu kanałowym i potrzebuje pełnego pokrycia. Jeśli zęby są wyraźnie krzywe lub stłoczone, trwalszy i zdrowszy efekt da <a href="/stomatologia/ortodoncja/">leczenie ortodontyczne</a>, a licówki rozważa się dopiero na końcu, do drobnej korekty kształtu.</p>',
  },
  {
    title: 'Jak długo trzymają się licówki i jak o nie dbać?',
    tocLabel: 'Trwałość i pielęgnacja',
    content: '<p>Licówki porcelanowe utrzymują się długo: w przeglądach klinicznych ich przeżywalność sięga około 95,5% po 10 latach, a w praktyce często służą 10-15 lat (przegląd systematyczny, Alenezi i wsp., 2021). Licówki kompozytowe trwają krócej i częściej wymagają wymiany lub naprawy.</p><h3>Najczęstsze powikłania po licówkach</h3><p>Najczęstszą przyczyną niepowodzenia jest odprysk lub pęknięcie ceramiki, rzadziej odklejenie licówki; próchnica wtórna i problemy z miazgą zdarzają się sporadycznie. Licówki z pokryciem brzegu siecznego wypadają lepiej niż te bez niego.</p><h3>Jak dbać o licówki na co dzień?</h3><p>Trwałość w dużej mierze zależy od pacjenta. Pomaga codzienna higiena, kontrole i <a href="/stomatologia/higienizacja/">higienizacja</a> co 6-12 miesięcy, szyna ochronna przy bruksizmie oraz unikanie obgryzania twardych przedmiotów. Ceramika nie przebarwia się od kawy czy herbaty, choć otaczające ją zęby naturalne mogą z czasem zmieniać kolor.</p>',
  },
  {
    title: 'Ile kosztują licówki we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content: '<p>Cena licówek we Wrocławiu zależy przede wszystkim od materiału i liczby zębów. Licówki kompozytowe są tańsze, bo powstają w gabinecie; licówki porcelanowe są droższe ze względu na ceramikę i pracę laboratorium.</p><p>Na ostateczny koszt wpływają:</p><ul><li><strong>Rodzaj licówki</strong> - kompozytowa albo porcelanowa (dwukrzemian litu, porcelana skaleniowa).</li><li><strong>Liczba zębów</strong> objętych leczeniem.</li><li><strong>Zakres przygotowania</strong> - projekt uśmiechu oraz ewentualne wcześniejsze leczenie czy higienizacja.</li><li><strong>Stopień trudności</strong> metamorfozy i indywidualna charakteryzacja pracy.</li></ul><p>Licówki to zabieg estetyczny, więc nie są refundowane przez NFZ. Aktualny zakres cen i wycenę po konsultacji znajdziesz w <a href="/cennik/">cenniku</a>, a plan leczenia i liczbę licówek ustalamy podczas wizyty, na którą umówisz się przez <a href="/rejestracja/">rejestrację online</a>.</p><p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji stomatologicznej. O tym, czy licówki są dla Ciebie odpowiednie i jaki materiał wybrać, decyduje lekarz po badaniu jamy ustnej i ocenie zgryzu.</p>',
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: '<ol><li>Alenezi A, Alsweed M, Alsidrani S, Chrcanovic BR. Long-Term Survival and Complication Rates of Porcelain Laminate Veneers in Clinical Studies: A Systematic Review. J Clin Med. 2021;10(5):1074. PMID: 33807504.</li><li>Morimoto S, Albanesi RB, Sesma N, Agra CM, Braga MM. Main Clinical Outcomes of Feldspathic Porcelain and Glass-Ceramic Laminate Veneers: A Systematic Review and Meta-Analysis of Survival and Complication Rates. Int J Prosthodont. 2016;29(1):38-49. PMID: 26757327.</li><li>Klein BA i wsp. Survival and Complication Rates of Feldspathic, Leucite-Reinforced, Lithium Disilicate and Zirconia Ceramic Laminate Veneers: A Systematic Review and Meta-Analysis. J Esthet Restor Dent. 2025. PMID: 39523553.</li><li>Lim TW, Tan SK, Li KY, Burrow MF. Survival and Complication Rates of Resin Composite Laminate Veneers: A Systematic Review and Meta-Analysis. J Evid Based Dent Pract. 2023.</li><li>Survival rates of conventional versus no-prep lub minimalnie inwazyjnych licówek w obserwacji prospektywnej trwającej średnio 9 lat. Clinical Oral Investigations. 2021.</li><li>Incisal coverage or not in ceramic laminate veneers: A systematic review and meta-analysis. J Prosthet Dent. 2016. PMID: 27328640.</li></ol>',
  },
];

export default function LicowkiPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Licówki Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Licówki porcelanowe i kompozytowe w Bas Clinic. Naturalnie piękny uśmiech dzięki precyzyjnie wykonanym licówkom dopasowanym do Twoich zębów."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      faqImage="/uploads/services/licowki-faq-bas-clinic-wroclaw.webp"
      faqImageAlt="Lekarka stomatolog w gabinecie Bas Clinic we Wrocławiu"
      slug="stomatologia/licowki"
    />
  );
}
