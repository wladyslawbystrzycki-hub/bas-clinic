import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Laserowe usuwanie blizn i rozstępów Wrocław',
  description: 'Laserowe usuwanie blizn i rozstępów we Wrocławiu: laser frakcyjny na blizny potrądzikowe i rozstępy. O doborze metody i efektach decyduje konsultacja lekarska.',
  path: '/medycyna-estetyczna/laserowe-usuwanie-blizn/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Laserowe usuwanie blizn i rozstępów' },
];

const FAQ = [
  {
    question: 'Czy laser usuwa blizny całkowicie i jakich efektów można się spodziewać?',
    answer: 'Laserowe usuwanie blizn poprawia ich wygląd: spłyca zagłębienia, wygładza powierzchnię i ujednolica kolor, choć rzadko usuwa bliznę całkowicie. Zakres poprawy zależy od typu i wieku zmiany: blizny faliste i kraterowe reagują dobrze, blizny szpilkowe i dojrzałe rozstępy słabiej.',
  },
  {
    question: 'Czy laser pomaga na blizny potrądzikowe i czy laser frakcyjny CO2 naprawdę działa?',
    answer: 'Tak, zwłaszcza w bliznach falistych (rolling) i kraterowych (boxcar). Wąskie blizny szpilkowe (ice-pick) lepiej reagują na technikę TCA CROSS. Laser frakcyjny CO2 i Er:YAG dają porównywalną poprawę blizn atroficznych i często łączy się je z mikronakłuwaniem lub osoczem bogatopłytkowym.',
  },
  {
    question: 'Czy laserem można usunąć rozstępy?',
    answer: 'Laser poprawia wygląd rozstępów, najlepiej świeżych, czerwono-różowych (striae rubrae). Dojrzałe, białe rozstępy (striae albae) reagują słabiej. To redukcja widoczności, a nie całkowite usunięcie. Wcześniejsze włączenie leczenia rokuje korzystniej.',
  },
  {
    question: 'Czy laserowe usuwanie blizn boli i jakie są przeciwwskazania?',
    answer: 'Dyskomfort zależy od rodzaju lasera i zwykle łagodzi go krem znieczulający nakładany przed zabiegiem. Do przeciwwskazań należą m.in. ciąża i karmienie piersią, czynne zakażenie lub opryszczka w okolicy zabiegu, świeża opalenizna oraz skłonność do bliznowców. Każdorazowo ocenia je lekarz.',
  },
  {
    question: 'Ile zabiegów potrzeba i kiedy widać efekty po laserowym usuwaniu blizn?',
    answer: 'Liczbę zabiegów ustala się indywidualnie i zależy od typu, głębokości oraz wieku blizny; zwykle jest to seria sesji w odstępach kilkutygodniowych. Efekt narasta przez wiele tygodni po zabiegu, ponieważ skóra stopniowo przebudowuje włókna kolagenowe.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać laserowe usuwanie blizn?',
    answer: `Laserowe usuwanie blizn i rozstępów wykonujemy w Bas Clinic we Wrocławiu, ${CLINIC.address.street}, ${CLINIC.address.city}. Zabieg poprzedza konsultacja kwalifikacyjna z oceną typu blizny i fototypu skóry. Rejestracja telefoniczna: ${CLINIC.phone}, w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest laserowe usuwanie blizn i rozstępów',
    tocLabel: 'Co to jest',
    content: `<p>Laserowe usuwanie blizn i rozstępów to grupa zabiegów, w których kontrolowana wiązka światła pobudza skórę do przebudowy włókien kolagenowych i wyrównania struktury blizny lub rozstępu. Laser zwykle poprawia strukturę i wyrównuje kolor zmiany, ale rzadko usuwa ją całkowicie.</p>
<p>To rozróżnienie jest punktem wyjścia uczciwej rozmowy o zabiegu. Realnym celem jest <strong>poprawa wyglądu skóry</strong>, nie zaś obietnica, że blizna zniknie bez śladu. Jak duża będzie ta poprawa, zależy przede wszystkim od tego, jaki to typ blizny, jak jest głęboka i jak stara. Dlatego dobór metody zaczyna się od oceny samej zmiany.</p>`,
  },
  {
    title: 'Rodzaje blizn i rozstępów: który typ dobrze reaguje na laser',
    tocLabel: 'Rodzaje i rokowanie',
    content: `<p>Nie każda blizna reaguje na laser tak samo. Blizny atroficzne (zanikowe) po trądziku dzieli się na trzy główne typy: <strong>szpilkowe (ice-pick)</strong>, <strong>kraterowe (boxcar)</strong> i <strong>faliste (rolling)</strong>, które różnią się szerokością, głębokością i profilem brzegów. Do oceny ich nasilenia służą zwalidowane skale, takie jak system Goodmana i Barona oraz skala ECCA.</p>
<h3>Który typ reaguje na laser, a który słabiej</h3>
<p>Blizny faliste i kraterowe zwykle dobrze poddają się laserom frakcyjnym. Wąskie i głębokie blizny szpilkowe reagują słabiej, a metodą z wyboru bywa tu raczej technika TCA CROSS. Blizny przerostowe i bliznowce (keloidy) laser może złagodzić (zmniejszyć zaczerwienienie, wysokość i napięcie), ale w ramach terapii łączonej i z realnym ryzykiem nawrotu, a nie jako samodzielne wyleczenie. W rozstępach świeże, czerwono-różowe zmiany reagują lepiej niż dojrzałe, białe.</p>
<table>
<tr><th>Typ zmiany</th><th>Charakterystyka</th><th>Rokowanie / metoda z wyboru</th></tr>
<tr><td>Blizny faliste i kraterowe (atroficzne)</td><td>szerokie, faliste lub kraterowe zagłębienia</td><td>dobrze reagują na laser frakcyjny; często łączony z subcyzją</td></tr>
<tr><td>Blizny szpilkowe (ice-pick)</td><td>wąskie, głębokie wcięcia</td><td>laser mniej pomocny; metoda z wyboru to TCA CROSS</td></tr>
<tr><td>Blizny przerostowe i keloidy</td><td>wypukłe, przerośnięte</td><td>laser łagodzi cechy zmiany w terapii łączonej; ryzyko nawrotu</td></tr>
<tr><td>Blizny pooperacyjne i pourazowe</td><td>linijne, o różnej dojrzałości</td><td>wczesne, zaczerwienione reagują lepiej; korzystne wczesne leczenie</td></tr>
<tr><td>Rozstępy czerwone (striae rubrae)</td><td>świeże, różowo-czerwone</td><td>reagują lepiej; wczesna faza rokuje korzystniej</td></tr>
<tr><td>Rozstępy białe (striae albae)</td><td>dojrzałe, perłowo-białe, zanikowe</td><td>reagują słabiej; poprawa, nie usunięcie</td></tr>
</table>`,
  },
  {
    title: 'Jak działa laser frakcyjny: mikrokolumny termiczne i przebudowa kolagenu',
    tocLabel: 'Jak działa',
    content: `<p>Większość laserów stosowanych przy bliznach działa na zasadzie <strong>fototermolizy frakcyjnej</strong>: wiązka tworzy w skórze siatkę mikroskopijnych kolumn uszkodzenia termicznego (tzw. mikrostrefy leczenia, MTZ) otoczonych nienaruszoną tkanką. Tę koncepcję opisali Manstein i wsp. (2004).</p>
<p>Zachowanie zdrowej skóry pomiędzy kolumnami przyspiesza gojenie i jednocześnie uruchamia przebudowę kolagenu w skórze właściwej. Ma to ważną konsekwencję praktyczną: <strong>efekt nie pojawia się od razu</strong>. Przebudowa włókien trwa tygodniami i miesiącami, więc wygładzenie blizny narasta stopniowo po zabiegu, a pełniejszy obraz widać dopiero po kilku miesiącach.</p>`,
  },
  {
    title: 'Lasery ablacyjne i nieablacyjne: porównanie działania, bólu i rekonwalescencji',
    tocLabel: 'Ablacyjne vs nieablacyjne',
    content: `<p>Lasery do leczenia blizn dzieli się na <strong>ablacyjne</strong> (odparowują naskórek i podgrzewają skórę właściwą, np. CO2, Er:YAG) oraz <strong>nieablacyjne</strong> (działają w skórze właściwej, oszczędzając naskórek). Różnica sprowadza się do kompromisu między siłą działania a długością rekonwalescencji.</p>
<p>W bliznach atroficznych laser CO2 daje wyższy odsetek osób reagujących na leczenie niż Er:YAG, ale kosztem dłuższego rumienia i większego dyskomfortu, przy zbliżonym ryzyku przebarwień (Liu i wsp., 2024). Ogólny wzorzec jest taki, że lasery ablacyjne dają większą poprawę, a nieablacyjne są lepiej tolerowane i wymagają krótszej rekonwalescencji. Przy wypukłych bliznach z nasilonym zaczerwienieniem bywa stosowany także laser barwnikowy (PDL).</p>
<table>
<tr><th>Cecha</th><th>Laser ablacyjny (CO2, Er:YAG)</th><th>Laser nieablacyjny (frakcyjny)</th></tr>
<tr><td>Mechanizm</td><td>odparowuje naskórek i nagrzewa skórę właściwą</td><td>działa w skórze właściwej, naskórek zachowany</td></tr>
<tr><td>Siła działania</td><td>zwykle większa poprawa na sesję</td><td>łagodniejsza, często więcej sesji</td></tr>
<tr><td>Dyskomfort i rumień</td><td>większy ból, dłuższy rumień</td><td>mniejszy dyskomfort, krótszy rumień</td></tr>
<tr><td>Rekonwalescencja</td><td>dłuższa</td><td>krótsza</td></tr>
<tr><td>Ryzyko przebarwień u ciemnej karnacji</td><td>wyższe</td><td>niższe</td></tr>
</table>
<p>O wyborze rodzaju lasera decyduje połączenie typu blizny, fototypu skóry i akceptowalnej długości rekonwalescencji.</p>`,
  },
  {
    title: 'Laser na rozstępy: czerwone reagują lepiej niż białe',
    tocLabel: 'Rozstępy',
    content: `<p>W rozstępach laser poprawia przede wszystkim zmiany świeże, czerwono-różowe (striae rubrae). Dojrzałe, białe rozstępy (striae albae) reagują słabiej, a leczenie zmniejsza ich widoczność, zamiast je całkowicie usuwać.</p>
<p>O efekcie decyduje więc faza rozstępu, a nie tylko sama metoda. W analizach porównawczych spośród laserów w rozstępach najkorzystniej wypada frakcyjny laser CO2, choć jakość dowodów jest ograniczona, a wyraźniejszą poprawę widać przy wczesnych zmianach. Działania niepożądane przy laseroterapii rozstępów są zwykle łagodne i przemijające: zaczerwienienie, obrzęk, złuszczanie i przejściowe przebarwienia. Wniosek dla pacjenta jest prosty: <strong>im wcześniej, tym lepiej</strong>.</p>`,
  },
  {
    title: 'Przeciwwskazania, bezpieczeństwo i fototyp skóry: ryzyko przebarwień',
    tocLabel: 'Bezpieczeństwo i przeciwwskazania',
    content: `<p>Laseroterapia blizn jest zabiegiem medycznym z realnymi ograniczeniami. Najważniejsze z nich to ryzyko przebarwień pozapalnych (PIH), silnie zależne od fototypu skóry, oraz indywidualna skłonność do bliznowców.</p>
<p>W zbiorczej analizie zabiegów laserami nieablacyjnymi i urządzeniami energetycznymi u osób o ciemniejszej karnacji (fototyp Fitzpatricka IV-VI) przebarwienia pozapalne wystąpiły u około 8% pacjentów, a ich ryzyko rośnie wraz z fototypem oraz intensywnością parametrów zabiegu (Hu i wsp., 2022). Dobór lasera nieablacyjnego, dłuższej fali i ostrożnych ustawień pozwala to ryzyko ograniczać; przy ciemnej karnacji zabiegi ablacyjne niosą wyższe ryzyko zaburzeń barwnikowych.</p>
<h3>Przeciwwskazania do laserowego usuwania blizn</h3>
<ul>
<li>skłonność do blizn przerostowych i keloidów, u których agresywne leczenie może nasilić zmianę</li>
<li>czynne zakażenie lub stan zapalny w okolicy zabiegu, w tym aktywny trądzik</li>
<li>nawrotowa opryszczka (HSV) w miejscu zabiegu, wymagająca osłony przeciwwirusowej</li>
<li>ciąża i karmienie piersią</li>
<li>świeża opalenizna lub planowana intensywna ekspozycja na słońce</li>
<li>przyjmowanie leków światłouczulających oraz nierealistyczne oczekiwania co do efektu</li>
</ul>
<p>Wbrew dawnej zasadzie odczekania pół roku po leczeniu izotretynoiną, nowsze rekomendacje nie znajdują podstaw, by odraczać lasery frakcyjne (nieablacyjne i frakcyjne ablacyjne) u osób niedawno ją przyjmujących, choć pełny resurfacing ablacyjny i dermabrazja wciąż wymagają ostrożności. Decyzję zawsze podejmuje lekarz po ocenie skóry.</p>`,
  },
  {
    title: 'Przebieg leczenia, liczba zabiegów i efekty w czasie',
    tocLabel: 'Przebieg i efekty',
    content: `<p>Leczenie laserowe blizn i rozstępów to zwykle seria zabiegów rozłożona w czasie, a efekt narasta przez wiele tygodni po ostatniej sesji.</p>
<ol>
<li>konsultacja i ocena typu blizny, fototypu skóry oraz oczekiwań</li>
<li>przygotowanie skóry, zwykle z kremem znieczulającym</li>
<li>zabieg laserowy obejmujący obszar blizny lub rozstępów</li>
<li>okres rekonwalescencji: rumień, obrzęk i złuszczanie utrzymujące się kilka dni, zależnie od urządzenia</li>
<li>ochrona przeciwsłoneczna i pielęgnacja, a następnie kolejne sesje w odstępach kilkutygodniowych</li>
</ol>
<p>Liczbę zabiegów ustala się indywidualnie i zależy od typu, głębokości oraz wieku zmiany. W badaniach nad rozstępami stosowano na przykład serię trzech sesji co cztery tygodnie, ale realny plan różni się między pacjentami. Stare, wieloletnie blizny rokują gorzej niż świeże.</p>
<h3>Pielęgnacja i ochrona skóry po zabiegu laserowym</h3>
<p>Ścisła fotoprotekcja i krem z wysokim filtrem (SPF) przed leczeniem i po nim ograniczają ryzyko przebarwień, dlatego zabiegi planuje się zwykle poza sezonem intensywnego słońca.</p>`,
  },
  {
    title: 'Terapia łączona: kiedy laser to za mało',
    tocLabel: 'Terapia łączona',
    content: `<p>W wielu bliznach lepsze efekty daje nie pojedyncza metoda, lecz połączenie kilku. Laser bywa wtedy jednym z elementów planu dobranego do konkretnego typu zmiany.</p>
<p>W sieciowej metaanalizie obejmującej kilkadziesiąt badań terapie łączone (np. laser z osoczem, laser z peelingiem czy mikronakłuwanie z osoczem) konsekwentnie wypadały lepiej niż pojedyncze metody (Wu i wsp., 2025).</p>
<h3>Metoda dobrana do typu blizny</h3>
<ul>
<li><a href="/medycyna-estetyczna/mezoterapia-mikroiglowa/">mikronakłuwanie (microneedling)</a> bywa stosowane przy bliznach atroficznych i białych rozstępach, z krótszą rekonwalescencją niż lasery ablacyjne</li>
<li><a href="/medycyna-estetyczna/osocze-bogatoplytkowe/">osocze bogatopłytkowe (PRP)</a> wspomaga gojenie i poprawia wynik w połączeniu z laserem frakcyjnym, a nie jako samodzielne leczenie blizn</li>
<li>subcyzja uwalnia blizny faliste zakotwiczone w głębszych warstwach skóry</li>
<li>technika TCA CROSS i <a href="/medycyna-estetyczna/pilingi-medyczne/">peelingi medyczne</a> sprawdzają się punktowo: TCA CROSS przy bliznach szpilkowych, a peelingi przy bliznach powierzchownych i przebarwieniach</li>
<li><a href="/medycyna-estetyczna/mezoterapia-iglowa/">mezoterapia igłowa</a> poprawia jakość i nawilżenie skóry jako uzupełnienie leczenia</li>
</ul>
<p>O doborze i kolejności metod decyduje lekarz po ocenie blizny i skóry.</p>`,
  },
  {
    title: 'Kwalifikacja i laserowe usuwanie blizn we Wrocławiu',
    tocLabel: 'Konsultacja i cena',
    content: `<p>O doborze metody i realnych efektach decyduje konsultacja, podczas której lekarz ocenia typ i dojrzałość blizny, fototyp skóry oraz oczekiwania pacjenta.</p>
<p>Bas Clinic łączy stomatologię i <a href="/medycyna-estetyczna/">medycynę estetyczną</a>, a wśród sprzętu dysponuje m.in. laserem Nd:YAG. Kwalifikacja obejmuje ocenę rodzaju zmiany (blizna atroficzna, przerostowa czy keloid, rozstęp świeży czy dojrzały), fototypu skóry i przeciwwskazań; przy ciemniejszej karnacji parametry dobiera się ostrożniej, aby ograniczyć ryzyko przebarwień.</p>
<h3>Ile kosztuje laserowe usuwanie blizn?</h3>
<p>Cena zależy od lokalizacji i wielkości blizny oraz liczby sesji, a rozliczenie bywa prowadzone za pojedynczą bliznę lub za obszar, na przykład policzki, dekolt czy plecy. Dlatego ustala się ją po konsultacji, a nie z góry. Aktualne stawki znajdziesz w <a href="/cennik/">cenniku</a>, a wizytę umówisz przez <a href="/rejestracja/">rejestrację</a>. Zabiegi estetyczne na blizny i rozstępy nie są refundowane przez NFZ.</p>
<p><strong>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej.</strong> O kwalifikacji do zabiegu, doborze metody i przeciwwskazaniach decyduje lekarz podczas wizyty.</p>`,
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: `<ol>
<li>Jacob CI i wsp. Acne scarring: a classification system and review of treatment options. J Am Acad Dermatol 2001 (PMID 11423843).</li>
<li>Goodman GJ, Baron JA. Postacne scarring: a qualitative global scarring grading system. Dermatol Surg 2006 (PMID 17199653).</li>
<li>Goodman GJ, Baron JA. Postacne scarring: a quantitative global scarring grading system. J Cosmet Dermatol 2006 (PMID 17173571).</li>
<li>Dréno B i wsp. ECCA grading scale: an original validated acne scar grading scale for clinical practice in dermatology. Dermatology 2007 (PMID 17191047).</li>
<li>Manstein D i wsp. Fractional photothermolysis: a new concept for cutaneous remodeling using microscopic patterns of thermal injury. Lasers Surg Med 2004 (PMID 15216537).</li>
<li>Tierney EP i wsp. Review of fractional photothermolysis: treatment indications and efficacy. Dermatol Surg 2009 (PMID 19686366).</li>
<li>Liu F i wsp. Efficacy and safety of CO2 fractional laser versus Er:YAG fractional laser in the treatment of atrophic acne scar: a meta-analysis and systematic review. J Cosmet Dermatol 2024 (PMID 38733085).</li>
<li>Ke R i wsp. Efficacy and safety of non-ablative vs. ablative lasers for acne scarring: a meta-analysis. J Dtsch Dermatol Ges 2025 (PMID 40066600).</li>
<li>Zhao Z i wsp. Efficacy and safety of laser interventions for facial acne scars: a systematic review and Bayesian network meta-analysis. Ann Transl Med 2022 (PMID 36660635).</li>
<li>Haji Mohammadi A i wsp. A systematic review of comparative clinical trials on ablative and non-ablative laser therapies for atrophic, hypertrophic, and keloid scars. Lasers Med Sci 2025 (PMID 40515775).</li>
<li>Oosterhoff TCH i wsp. Laser treatment of specific scar characteristics in hypertrophic scars and keloid: a systematic review. J Plast Reconstr Aesthet Surg 2021 (PMID 33645505).</li>
<li>Foppiani JA i wsp. Laser therapy in hypertrophic and keloid scars: a systematic review and network meta-analysis. Aesthetic Plast Surg 2024 (PMID 38760539).</li>
<li>Abi Zeid Daou C i wsp. The use of laser monotherapy in the treatment of keloids and hypertrophic scars: a look at the carbon dioxide laser. A systematic review and meta-analysis. Lasers Med Sci 2025 (PMID 40962972).</li>
<li>de las Alas JM i wsp. Pulsed dye laser for the treatment of keloid and hypertrophic scars: a systematic review. Expert Rev Med Devices 2012 (PMID 23249157).</li>
<li>Wollina U, Goldman A. Management of stretch marks (with a focus on striae rubrae). J Cutan Aesthet Surg 2017 (PMID 29403182).</li>
<li>Lu H i wsp. Comparative effectiveness of different therapies for treating striae distensae: a systematic review and network meta-analysis. Medicine (Baltimore) 2020 (PMID 32991422).</li>
<li>Yang YJ, Lee GY. Treatment of striae distensae with nonablative fractional laser versus ablative CO2 fractional laser: a randomized controlled trial. Ann Dermatol 2011 (PMID 22148016).</li>
<li>Algarra Sahuquillo J i wsp. Stretch marks: systematic review of its therapeutic approach. Actas Dermosifiliogr 2026 (PMID 41386441).</li>
<li>Hu S i wsp. Adverse events of nonablative lasers and energy-based therapies in subjects with Fitzpatrick skin phototypes IV to VI: a systematic review and meta-analysis. Aesthet Surg J 2022 (PMID 35019139).</li>
<li>Soares I i wsp. Complications of dermatologic lasers in high Fitzpatrick phototypes and management: an updated narrative review. Lasers Med Sci 2024 (PMID 38834924).</li>
<li>Mar K i wsp. Treatment of post-inflammatory hyperpigmentation in skin of colour: a systematic review. J Cutan Med Surg 2024 (PMID 39075672).</li>
<li>Levy T i wsp. Expert consensus on clinical recommendations for fractional ablative CO2 laser in facial skin rejuvenation treatment. Lasers Surg Med 2025 (PMID 39434507).</li>
<li>Spring LK i wsp. Isotretinoin and timing of procedural interventions: a systematic review with consensus recommendations. JAMA Dermatol 2017 (PMID 28658462).</li>
<li>Waldman A i wsp. ASDS guidelines task force: consensus recommendations regarding the safety of lasers, dermabrasion, chemical peels, energy devices, and skin surgery during and after isotretinoin use. Dermatol Surg 2017 (PMID 28498204).</li>
<li>Sitohang IBS i wsp. Microneedling in the treatment of atrophic scars: a systematic review of randomised controlled trials. Int Wound J 2021 (PMID 33538106).</li>
<li>Chang HC i wsp. Efficacy of autologous platelet-rich plasma combined with ablative fractional carbon dioxide laser for acne scars: a systematic review and meta-analysis. Aesthet Surg J 2019 (PMID 30809666).</li>
<li>Aljefri YE i wsp. Ablative fractional carbon dioxide laser combined with autologous platelet-rich plasma in the treatment of atrophic acne scars: a systematic review and meta-analysis. Dermatol Ther 2022 (PMID 36183145).</li>
<li>Kang C, Lu D. Combined effect of microneedling and platelet-rich plasma for the treatment of acne scars: a meta-analysis. Front Med 2021 (PMID 35237616).</li>
<li>Ahramiyanpour N i wsp. Subcision in acne scarring: a review of clinical trials. J Cosmet Dermatol 2023 (PMID 36315903).</li>
<li>Soysal MÇ, Akçalı C. Trichloroacetic acid peeling with the chemical reconstruction of skin scars (CROSS) technique in atrophic acne scar treatment: a randomized comparison of concentrations. Arch Dermatol Res 2025 (PMID 40072613).</li>
<li>Wu B i wsp. Optimal treatment options for acne scars in patients with historic acne: a systematic review and network meta-analysis. PeerJ 2025 (PMID 41081097).</li>
<li>Zhang M i wsp. Advances in the treatment of acne scars. Front Med 2025 (PMID 40950966).</li>
</ol>`,
  },
];

export default function LaseroweUsuwanieBliznPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Laserowe usuwanie blizn i rozstępów Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Laserowa redukcja blizn, rozstępów i niedoskonałości skóry. Nowoczesne technologie laserowe dla gładkiej i zdrowej skóry ciała."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/laserowe-usuwanie-blizn"
    />
  );
}
