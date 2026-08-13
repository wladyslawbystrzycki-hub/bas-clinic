import { generatePageMetadata } from '@/lib/metadata';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Redukcja cieni pod oczami Wrocław - dolina łez',
  description: 'Redukcja cieni pod oczami we Wrocławiu - wypełnianie doliny łez kwasem hialuronowym, mezoterapia i metody dobrane do rodzaju podkrążeń. Umów konsultację.',
  path: '/medycyna-estetyczna/redukcja-cieni/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Redukcja cieni pod oczami' },
];

const FAQ = [
  {
    question: 'Jak pozbyć się cieni pod oczami?',
    answer:
      'Aby pozbyć się cieni pod oczami, najpierw trzeba ustalić ich przyczynę. Cienie strukturalne z zapadniętą doliną łez wypełnia się kwasem hialuronowym, naczyniowe leczy laserem i mezoterapią, a barwnikowe rozjaśnia preparatami i peelingami. Właściwą metodę dobiera lekarz podczas konsultacji.',
  },
  {
    question: 'Czy cienie pod oczami można usunąć na stałe?',
    answer:
      'Cieni pod oczami zwykle nie usuwa się na stałe - zabiegi medycyny estetycznej dają efekt czasowy. Wypełniacz kwasu hialuronowego utrzymuje się zwykle 9-12 miesięcy, a pozostałe metody wymagają powtarzania. Trwałość zależy od metody, typu cieni i indywidualnych uwarunkowań pacjenta.',
  },
  {
    question: 'Co lepsze na cienie pod oczami: kwas hialuronowy czy mezoterapia?',
    answer:
      'Kwas hialuronowy czy mezoterapia - to zależy od rodzaju cieni. Kwas hialuronowy sprawdza się przy cieniach strukturalnych z zapadniętą doliną łez, bo uzupełnia objętość. Mezoterapia działa na komponent naczyniowy i jakość skóry. Przy cieniach mieszanych obie metody bywają łączone.',
  },
  {
    question: 'Czy zabieg na cienie pod oczami boli i czy zostają siniaki?',
    answer:
      'Zabieg na cienie pod oczami jest mało bolesny - okolicę znieczula się kremem z lidokainą, a wypełniacz często podaje cienką kaniulą. Po iniekcji mogą pojawić się przejściowe siniaki i obrzęk, które ustępują zazwyczaj w ciągu kilku dni od zabiegu.',
  },
  {
    question: 'Ile kosztuje wypełnienie doliny łez i redukcja cieni pod oczami?',
    answer:
      'Koszt redukcji cieni pod oczami zależy od metody, ilości preparatu i liczby zabiegów w serii. Wypełnienie doliny łez wycenia się inaczej niż mezoterapia czy zabiegi laserowe. Aktualne ceny podajemy w cenniku oraz indywidualnie podczas konsultacji we Wrocławiu.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać redukcję cieni pod oczami?',
    answer: `Redukcję cieni pod oczami wykonujemy w Bas Clinic we Wrocławiu, ${CLINIC.address.street}. Zabiegi prowadzi lekarz medycyny estetycznej po wcześniejszej konsultacji. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone}; gabinet jest czynny w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest redukcja cieni pod oczami?',
    content:
      '<p><strong>Redukcja cieni pod oczami</strong> to grupa zabiegów medycyny estetycznej, które zmniejszają ciemne zabarwienie, zasinienie i zapadnięcie okolicy podoczodołowej. To nie jeden zabieg, lecz dobór metody do przyczyny - leczenie zaczyna się od diagnozy rodzaju podkrążeń, a nie od samej iniekcji.</p>' +
      '<p>Cienie pod oczami (nazywane też podkrążeniami, sińcami czy ciemnymi obwódkami; medycznie hiperpigmentacja okołooczodołowa) wynikają zwykle z kilku nakładających się mechanizmów: przeświecania naczyń przez bardzo cienką skórę powieki, nadmiaru melaniny oraz cienia rzucanego przez zapadniętą <strong>dolinę łez</strong>. Dlatego jednej osobie pomoże <a href="/medycyna-estetyczna/wypelniacze-ha/">wypełnienie doliny łez kwasem hialuronowym</a>, a innej leczenie naczyniowe lub rozjaśniające.</p>' +
      '<p>Są to zabiegi z zakresu <a href="/medycyna-estetyczna/">medycyny estetycznej</a>: małoinwazyjne, ambulatoryjne, a w przypadku wypełniaczy odwracalne. W naszym gabinecie we Wrocławiu kwalifikację prowadzi lekarz, który ocenia, czy cienie mają podłoże naczyniowe, barwnikowe, strukturalne, czy mieszane.</p>',
  },
  {
    title: 'Skąd biorą się cienie pod oczami? Rodzaje podkrążeń',
    tocLabel: 'Przyczyny i rodzaje',
    content:
      '<p>Cienie pod oczami dzieli się na cztery typy: naczyniowy, pigmentacyjny (barwnikowy), strukturalny (cieniowy) oraz mieszany. Rozpoznanie typu jest najważniejszym krokiem, bo każdy z nich reaguje na inną metodę leczenia.</p>' +
      '<p>Powstawanie cieni jest wieloczynnikowe, a najsilniej wiąże się z czynnikiem dziedzicznym. Według badań populacyjnych (Matsui i wsp., 2015) podkrążenia są przede wszystkim uwarunkowane rodzinnie, a o ich nasileniu decyduje głównie ilość melaniny i przeświecanie odtlenionej krwi. Z wiekiem cienie mogą się pogłębiać wskutek utraty objętości i ścieńczenia skóry. Wbrew obiegowej opinii związek z samym niedoborem snu jest słabo udokumentowany.</p>' +
      '<h3>Cztery typy cieni pod oczami</h3>' +
      '<table><tr><th>Typ cieni</th><th>Wygląd</th><th>Główna przyczyna</th><th>Kierunek leczenia</th></tr>' +
      '<tr><td>Naczyniowy</td><td>niebiesko-fioletowy, nasila się przy zmęczeniu</td><td>przeświecanie naczyń i hemosyderyny przez cienką skórę</td><td>terapie naczyniowe (laser), mezoterapia, poprawa jakości skóry</td></tr>' +
      '<tr><td>Pigmentacyjny</td><td>brązowy, dość jednolity</td><td>nadmiar melaniny, przebarwienia pozapalne, słońce</td><td>preparaty rozjaśniające, peelingi, lasery na pigment</td></tr>' +
      '<tr><td>Strukturalny</td><td>cień w zagłębieniu, wyraźny przy świetle z góry</td><td>zapadnięta dolina łez, utrata objętości</td><td>wypełniacz kwasu hialuronowego, biostymulatory</td></tr>' +
      '<tr><td>Mieszany</td><td>kombinacja powyższych</td><td>kilka mechanizmów naraz</td><td>leczenie łączone wg dominującej składowej</td></tr></table>' +
      '<p>U większości pacjentów spotyka się typ mieszany, dlatego skuteczny plan zwykle łączy kilka metod. Czynniki nasilające cienie to m.in. atopia i alergia (pocieranie oczu pogłębia przebarwienia), ekspozycja na promieniowanie UV, czynniki hormonalne oraz niektóre leki okulistyczne.</p>' +
      '<h3>Cienie, worki czy sińce - czym się różnią?</h3>' +
      '<p>Warto rozróżnić te pojęcia, bo wymagają innego postępowania. <strong>Cienie</strong> to zmiana barwy lub cień anatomiczny, <strong>worki pod oczami</strong> to uwypuklenie spowodowane przepukliną tłuszczu oczodołowego lub obrzękiem, a <strong>sińce</strong> to potoczna nazwa cieni naczyniowych. Niekiedy nasilone, nagle pojawiające się cienie współwystępują z niedokrwistością, niedoborami (np. żelaza, witaminy B12), alergią lub chorobami tarczycy - wtedy warto wykluczyć przyczyny ogólnoustrojowe u lekarza.</p>',
  },
  {
    title: 'Wypełnianie doliny łez kwasem hialuronowym',
    tocLabel: 'Dolina łez (HA)',
    content:
      '<p>Przy cieniach strukturalnych pierwszorzędową metodą niechirurgiczną jest wypełnienie doliny łez <strong>kwasem hialuronowym</strong>. Żel podaje się głęboko, na brzeg kostny oczodołu, aby uzupełnić zagłębienie i zredukować rzucany przez nie cień; efekt widać od razu.</p>' +
      '<h3>Technika i bezpieczeństwo podania</h3>' +
      '<p>W tej delikatnej okolicy stosuje się wypełniacze o niskiej zdolności wiązania wody, podawane cienką kaniulą lub igłą tuż nad okostną. Zbyt powierzchowne podanie grozi <strong>efektem Tyndalla</strong>, czyli niebieskoszarym przeświecaniem żelu, dlatego tak liczą się technika i doświadczenie lekarza. Zwykle wystarcza niewielka ilość preparatu na jedną stronę.</p>' +
      '<p>Skuteczność tej metody jest dobrze udokumentowana - w metaanalizie (Liu i wsp., 2023) ogólne zadowolenie pacjentów po korekcji doliny łez sięgnęło około 91%. Zabieg jest też odwracalny - w razie potrzeby kwas hialuronowy można rozpuścić enzymem <strong>hialuronidazą</strong>.</p>' +
      '<h3>Kiedy wypełniacz nie jest dobrym wyborem</h3>' +
      '<p>Wypełniacz na bazie kwasu hialuronowego sprawdza się przy cieniach strukturalnych, ale nie rozjaśni przebarwień barwnikowych ani nie usunie cieni czysto naczyniowych. Przy obrzękach okolicy oka, festonach lub wyraźnej przepuklinie tłuszczu może wręcz nasilić „podpuchnięty" wygląd, a wtedy lepszym rozwiązaniem bywa konsultacja w kierunku zabiegu chirurgicznego. To kolejny powód, dla którego o doborze metody decyduje typ cieni, a nie samo życzenie wypełnienia.</p>',
  },
  {
    title: 'Mezoterapia, osocze (PRP) i metody na cienie naczyniowe i barwnikowe',
    tocLabel: 'Pozostałe metody',
    content:
      '<p>Gdy cienie mają podłoże naczyniowe lub barwnikowe, sam wypełniacz nie wystarczy. Stosuje się wtedy metody poprawiające jakość skóry, mikrokrążenie i koloryt - dobierane do typu podkrążeń.</p>' +
      '<ul>' +
      '<li><strong>Mezoterapia</strong> - seria mikroiniekcji preparatów nawilżających i rozjaśniających (m.in. z witaminą C); poprawia kondycję cienkiej skóry powieki. Szczegóły opisujemy przy zabiegu <a href="/medycyna-estetyczna/mezoterapia-okolicy-oka/">mezoterapii okolicy oka</a>.</li>' +
      '<li><strong>Osocze bogatopłytkowe</strong> - <a href="/medycyna-estetyczna/osocze-bogatoplytkowe/">osocze bogatopłytkowe (PRP)</a> z krwi pacjenta; daje wysokie zadowolenie i poprawia koloryt skóry, choć słabiej działa na samą melaninę.</li>' +
      '<li><strong>Biostymulatory</strong> - <a href="/medycyna-estetyczna/stymulatory-tkankowe/">stymulatory tkankowe</a> (np. polinukleotydy) pogrubiają i regenerują skórę, pośrednio maskując przeświecające naczynia.</li>' +
      '<li><strong>Laser i peelingi</strong> - laser (m.in. Nd:YAG) celuje w naczynia i pigment, a delikatne peelingi rozjaśniają przebarwienia barwnikowe.</li>' +
      '</ul>' +
      '<p>Cienie pod oczami to obszar o ograniczonej bazie dowodowej, a wiele z tych metod ma charakter wspomagający i bywa stosowanych poza zarejestrowanym wskazaniem preparatu. Badania (Iranmanesh i wsp., 2024) wskazują, że osocze i mezoterapia dają porównywalne, umiarkowane efekty, a lepsze rezultaty daje zwykle leczenie łączone, dobrane do dominującego typu cieni.</p>' +
      '<h3>Porównanie metod redukcji cieni</h3>' +
      '<table><tr><th>Metoda</th><th>Głównie na typ</th><th>Charakter</th><th>Orientacyjna trwałość</th></tr>' +
      '<tr><td>Wypełniacz HA (dolina łez)</td><td>strukturalny</td><td>iniekcja, efekt od razu, odwracalny</td><td>ok. 9-12 miesięcy</td></tr>' +
      '<tr><td>Mezoterapia</td><td>naczyniowy, barwnikowy</td><td>seria mikroiniekcji</td><td>kilka miesięcy, wymaga powtórzeń</td></tr>' +
      '<tr><td>Osocze (PRP)</td><td>jakość skóry, naczyniowy</td><td>seria iniekcji z własnej krwi</td><td>kilka miesięcy, w serii</td></tr>' +
      '<tr><td>Laser</td><td>naczyniowy, barwnikowy</td><td>seria zabiegów</td><td>dłuższa po serii, zależna od typu</td></tr>' +
      '<tr><td>Biostymulatory, peelingi</td><td>barwnikowy, jakość skóry</td><td>seria, efekt stopniowy</td><td>kilka miesięcy</td></tr></table>',
  },
  {
    title: 'Jak przebiega zabieg krok po kroku?',
    tocLabel: 'Przebieg zabiegu',
    content:
      '<p>Zabieg zaczyna się od konsultacji i oceny typu cieni. Przy wypełnianiu doliny łez lekarz znieczula okolicę kremem z lidokainą, a preparat podaje cienką kaniulą lub igłą; sama iniekcja trwa zwykle kilkanaście do około 30 minut.</p>' +
      '<ol>' +
      '<li>Konsultacja i diagnoza rodzaju cieni - ocena, czy są naczyniowe, barwnikowe, strukturalne, czy mieszane.</li>' +
      '<li>Demakijaż i dezynfekcja okolicy oka.</li>' +
      '<li>Znieczulenie kremem z lidokainą dla komfortu zabiegu.</li>' +
      '<li>Podanie preparatu - przy wypełniaczu głęboko nad okostną, przy mezoterapii serią płytkich mikronakłuć.</li>' +
      '<li>Ocena efektu i ewentualna delikatna korekta.</li>' +
      '<li>Zalecenia pozabiegowe i ustalenie kontroli.</li>' +
      '</ol>' +
      '<p>Metody wspomagające, takie jak mezoterapia czy osocze, wykonuje się zazwyczaj w serii kilku zabiegów co 1-2 tygodnie. Po iniekcji mogą pojawić się przejściowe siniaki i obrzęk; przez kilka dni warto unikać intensywnego wysiłku, sauny, solarium i makijażu okolicy oka.</p>',
  },
  {
    title: 'Efekty i trwałość - jak długo utrzymują się rezultaty?',
    tocLabel: 'Efekty i trwałość',
    content:
      '<p>Po wypełnieniu doliny łez kwasem hialuronowym efekt jest widoczny od razu, a ostateczny wynik ocenia się po około 2 tygodniach, gdy ustąpi obrzęk. Wypełniacz utrzymuje się zwykle od 9 do 12 miesięcy, u części pacjentów dłużej.</p>' +
      '<p>To zabieg czasowy - rezultat stopniowo zanika w miarę naturalnego metabolizmu preparatu, dlatego dla utrzymania efektu zabieg się powtarza. Przy metodach wspomagających efekty narastają stopniowo:</p>' +
      '<ul>' +
      '<li><strong>Mezoterapia i osocze</strong> - poprawa kondycji i kolorytu skóry po serii zabiegów, utrzymująca się kilka miesięcy.</li>' +
      '<li><strong>Laser</strong> - redukcja składowej naczyniowej i barwnikowej narasta po serii, a efekt bywa trwalszy.</li>' +
      '</ul>' +
      '<p>Trwałość zależy od metody, typu cieni, jakości skóry i stylu życia. Żaden z tych zabiegów nie usuwa cieni na stałe. Realnym celem jest naturalne rozjaśnienie i wypoczęty wygląd spojrzenia.</p>',
  },
  {
    title: 'Przeciwwskazania i bezpieczeństwo zabiegu',
    tocLabel: 'Przeciwwskazania',
    content:
      '<p>Zabiegów na cienie pod oczami nie wykonuje się w kilku sytuacjach. Lista przeciwwskazań zależy od metody, a o ostatecznej kwalifikacji decyduje lekarz po zebraniu wywiadu.</p>' +
      '<h3>Najważniejsze przeciwwskazania</h3>' +
      '<ul>' +
      '<li>ciąża i okres karmienia piersią,</li>' +
      '<li>aktywna infekcja lub opryszczka w okolicy oka,</li>' +
      '<li>choroby autoimmunologiczne i zapalne w fazie zaostrzenia,</li>' +
      '<li>zaburzenia krzepnięcia lub przyjmowanie leków przeciwkrzepliwych,</li>' +
      '<li>alergia na składnik preparatu,</li>' +
      '<li>skłonność do bliznowców i przebarwień pozapalnych (przy laserach i peelingach),</li>' +
      '<li>choroba nowotworowa w trakcie leczenia oraz niewyrównane choroby ogólne.</li>' +
      '</ul>' +
      '<h3>Bezpieczeństwo i możliwe działania niepożądane</h3>' +
      '<p>Najczęstsze działania niepożądane są łagodne i przemijające: obrzęk, zasinienie, rumień i tkliwość okolicy. Przy zbyt powierzchownym podaniu wypełniacza może wystąpić efekt Tyndalla, który - podobnie jak nadmiar żelu - jest odwracalny dzięki hialuronidazie. Bardzo rzadko, ale poważnie, iniekcje w okolicy oka wiążą się z ryzykiem zamknięcia naczynia; w piśmiennictwie opisywano pojedyncze przypadki zaburzeń widzenia (Global Aesthetics Consensus, 2016). Dlatego zabieg powinien wykonywać wyłącznie doświadczony lekarz, w gabinecie wyposażonym w hialuronidazę i protokół postępowania w razie powikłań.</p>',
  },
  {
    title: 'Ile kosztuje redukcja cieni pod oczami we Wrocławiu?',
    tocLabel: 'Cena',
    content:
      '<p>Cena redukcji cieni pod oczami zależy od metody, ilości użytego preparatu oraz liczby zabiegów w serii. Wypełnienie doliny łez wycenia się inaczej niż seria mezoterapii czy zabiegów laserowych, dlatego ostateczny koszt ustala się po konsultacji.</p>' +
      '<p>Aktualne widełki cenowe znajdziesz w <a href="/cennik/">cenniku</a>. Zabiegi medycyny estetycznej są świadczeniami prywatnymi i nie podlegają refundacji NFZ. Dobrym pierwszym krokiem jest <a href="/rejestracja/">umówienie konsultacji</a>, podczas której lekarz oceni rodzaj cieni i przedstawi indywidualny plan wraz z wyceną.</p>' +
      '<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O kwalifikacji do zabiegu, jego przebiegu i ewentualnych przeciwwskazaniach decyduje lekarz podczas indywidualnej wizyty.</p>',
  },
  {
    title: 'Źródła',
    content:
      '<ol>' +
      '<li>Huang YL, Chang SL, Ma L, et al. Clinical analysis and classification of dark eye circle. Int J Dermatol. 2014;53(2):164-170 (PMID 23879616).</li>' +
      '<li>Vrcek I, Ozgur O, Nakra T. Infraorbital dark circles: a review of the pathogenesis, evaluation and treatment. J Cutan Aesthet Surg. 2016;9(2):65-72 (PMID 27398005).</li>' +
      '<li>Sarkar R, Ranjan R, Garg S, et al. Periorbital hyperpigmentation: a comprehensive review. J Clin Aesthet Dermatol. 2016;9(1):49-55 (PMID 26962392).</li>' +
      '<li>Matsui MS, Schalka S, Vanderover G, et al. Physiological and lifestyle factors contributing to risk and severity of peri-orbital dark circles in the Brazilian population. An Bras Dermatol. 2015;90(4):494-503 (PMID 26375218).</li>' +
      '<li>Liu X, Gao Y, Ma X, Li Q. The efficacy and safety of hyaluronic acid injection in tear trough deformity: a systematic review and meta-analysis. Aesthetic Plast Surg. 2023 (PMID 37684413).</li>' +
      '<li>Wollina U. Improvement of tear trough by monophasic hyaluronic acid and calcium hydroxylapatite. J Clin Aesthet Dermatol. 2014;7(10):38-43 (PMID 25371770).</li>' +
      '<li>Signorini M, Liew S, Sundaram H, et al. Global Aesthetics Consensus: avoidance and management of complications from hyaluronic acid fillers. Plast Reconstr Surg. 2016;137(6):961e-971e (PMID 27219265).</li>' +
      '<li>Beleznay K, Carruthers JDA, Humphrey S, Jones D. Avoiding and treating blindness from fillers: a review of the world literature. Dermatol Surg. 2015;41(10):1097-1117 (PMID 26356847).</li>' +
      '<li>Iranmanesh B, Rastaghi F, Hashemi NS, Kaveh R. Comparison of platelet-rich plasma versus tranexamic acid plus vitamin C mesotherapy in periorbital hyperpigmentation: a split-site randomized clinical trial. J Cosmet Dermatol. 2024;23(12):4066-4071 (PMID 39279206).</li>' +
      '<li>Ma G, Lin XX, Hu XJ, et al. Treatment of venous infraorbital dark circles using a long-pulsed 1064-nm Nd:YAG laser. Dermatol Surg. 2012;38(8):1277-1282 (PMID 22621220).</li>' +
      '</ol>',
  },
];

export default function RedukcjaCieniPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Redukcja cieni pod oczami Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Eliminacja cieni i woreczków pod oczami. Skuteczne metody przywracające świeży i wypoczęty wygląd spojrzenia."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/redukcja-cieni"
    />
  );
}
