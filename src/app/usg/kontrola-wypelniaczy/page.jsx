import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG wypełniaczy Wrocław - kontrola po zabiegu',
  description:
    'USG wypełniaczy we Wrocławiu: kontrola kwasu hialuronowego po zabiegu, ocena guzków i mapowanie naczyń przed kolejną iniekcją. Badanie wykonuje lekarz.',
  path: '/usg/kontrola-wypelniaczy/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG - kontrola wypełniaczy' },
];

// Krzyżowo: zabiegi estetyczne, których dotyczy kontrola, + badania USG tej samej okolicy.
const RELATED = [
  'medycyna-estetyczna/wypelniacze-ha',
  'medycyna-estetyczna/modelowanie-ust',
  'usg/tkanki-miekkie',
  'usg/wezly-chlonne',
].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG wypełniaczy i komu we Wrocławiu je wykonujemy?',
    tocLabel: 'Czym jest USG wypełniaczy',
    content: (
      <>
        <p><strong>USG wypełniaczy</strong> to badanie ultrasonograficzne skóry i tkanki podskórnej twarzy, które pokazuje, gdzie dokładnie leży podany wcześniej preparat, jak głęboko sięga i w jakiej relacji pozostaje do naczyń krwionośnych. W medycynie estetycznej służy do kontroli kwasu hialuronowego po zabiegu, wyjaśniania przyczyny guzków i obrzęków oraz do planowania kolejnej iniekcji.</p>
        <p>Badanie wykonuje się <strong>głowicą liniową wysokiej częstotliwości</strong> (zwykle 15-22 MHz), która rozdziela poszczególne warstwy: naskórek, skórę właściwą, tkankę podskórną, powięź SMAS, mięśnie mimiczne i okostną. W opcji Dopplera ta sama głowica pokazuje przepływ krwi w tętnicach twarzy, dlatego USG wykorzystuje się również przed podaniem preparatu.</p>
        <p>Określenia <strong>USG twarzy w medycynie estetycznej</strong>, <strong>USG kwasu hialuronowego</strong> oraz ultrasonografia wypełniaczy odnoszą się do tego samego badania. Przegląd literatury z 2026 roku wskazuje USG wysokiej częstotliwości z kolorowym Dopplerem jako metodę pierwszego wyboru w identyfikacji rodzaju, położenia i powikłań wypełniaczy (Khorasanizadeh i wsp., 2026). W pracowni Bas Clinic we Wrocławiu badanie wykonuje lekarz, a wynik omawia z pacjentem od razu.</p>
      </>
    ),
  },
  {
    title: 'Jak wygląda kwas hialuronowy w USG? Obraz różnych wypełniaczy',
    tocLabel: 'Obraz wypełniaczy w USG',
    content: (
      <>
        <p>Kwas hialuronowy widać w USG jako dobrze odgraniczone, bezechowe lub hipoechogeniczne (ciemne) złogi o pseudotorbielowatym wyglądzie. Inne materiały dają odmienny obraz, dlatego doświadczony lekarz zwykle potrafi wskazać, jaki rodzaj wypełniacza znajduje się w tkance.</p>
        <p>Rozróżnianie materiałów opiera się na echogeniczności złogu i artefaktach akustycznych, jakie wytwarza. Badanie na modelu skóry i u pacjentów pokazało, że każdy z popularnych wypełniaczy tworzy charakterystyczny wzorzec (Wortsman i wsp., 2011). W praktyce oznacza to, że USG pomaga ustalić, co podano, także wtedy, gdy pacjent nie zna nazwy preparatu.</p>
        <table>
          <tbody>
            <tr>
              <th>Materiał</th>
              <th>Typowy obraz w USG</th>
              <th>Rozpuszczalny hialuronidazą</th>
            </tr>
            <tr>
              <td>Kwas hialuronowy (HA)</td>
              <td>bezechowe lub hipoechogeniczne, dobrze odgraniczone złogi pseudotorbielowate</td>
              <td>tak</td>
            </tr>
            <tr>
              <td>Hydroksyapatyt wapnia (CaHA)</td>
              <td>nieregularne, hiperechogeniczne (jasne) złogi z cieniem akustycznym; obraz zależy od rozcieńczenia</td>
              <td>nie</td>
            </tr>
            <tr>
              <td>Kwas polimlekowy (PLLA)</td>
              <td>hiperechogeniczne złogi podskórne we wczesnym okresie, z czasem zanikające</td>
              <td>nie</td>
            </tr>
            <tr>
              <td>Polimetakrylan metylu (PMMA)</td>
              <td>jasne, punktowe echa z artefaktem „ogona komety”</td>
              <td>nie</td>
            </tr>
            <tr>
              <td>Olej silikonowy</td>
              <td>charakterystyczny obraz „burzy śnieżnej” z rewerberacjami</td>
              <td>nie</td>
            </tr>
            <tr>
              <td>Tłuszcz własny (lipofilling)</td>
              <td>hipoechogeniczne guzki; przy martwicy tłuszczu torbiele olejowe z jasnym obrysem</td>
              <td>nie</td>
            </tr>
          </tbody>
        </table>
        <p>Obraz kwasu hialuronowego zmienia się z czasem: złóg stopniowo się zmniejsza, integruje z tkanką i traci ostre granice. Wypełniacze HA bywają jednak widoczne w USG wiele miesięcy, a w części przypadków nawet lata po podaniu, co ma znaczenie przy planowaniu kolejnych zabiegów w tej samej okolicy.</p>
      </>
    ),
  },
  {
    title: 'Wskazania - kiedy wykonać kontrolę wypełniaczy w USG?',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>USG wypełniaczy warto wykonać, gdy po zabiegu pojawia się guzek, asymetria, przedłużający się obrzęk lub podejrzenie przemieszczenia preparatu, a także przed kolejną iniekcją w okolicy, w której podawano już jakikolwiek materiał.</p>
        <h3>Kontrola po zabiegu kwasem hialuronowym</h3>
        <ul>
          <li><strong>Guzek lub zgrubienie</strong> - USG różnicuje nadmiar preparatu, guzek zapalny, ropień i zmianę niezwiązaną z wypełniaczem.</li>
          <li><strong>Asymetria lub nierówność</strong> - badanie pokazuje, czy złóg leży zbyt płytko, zbyt głęboko lub poza planowaną warstwą.</li>
          <li><strong>Przedłużający się obrzęk</strong>, zwłaszcza pod oczami i na policzkach - złóg może uciskać naczynia żylne i limfatyczne; w serii 17 pacjentów z obrzękiem jarzmowym usunięcie preparatu pod kontrolą USG przywracało przepływ żylny (Schelke i wsp., 2023).</li>
          <li><strong>Przemieszczenie (migracja)</strong> - dotyczy szczególnie <Link href="/medycyna-estetyczna/modelowanie-ust/">ust po modelowaniu</Link>, gdzie warstwa podskórna ma zwykle poniżej milimetra, a preparat często trafia w mięsień okrężny ust.</li>
          <li><strong>Ocena trwałości</strong> - USG dokumentuje, ile preparatu pozostało i czy uzasadnione jest dopełnienie.</li>
        </ul>
        <h3>USG przed kolejnym zabiegiem</h3>
        <p>Pacjenci często nie pamiętają nazwy podanego wcześniej preparatu albo nie wiedzą, że w tkance pozostał materiał trwały. W badaniu przed lipofillingiem skroni u 80% pacjentek USG uwidoczniło wcześniej podane wypełniacze, resorbowalne lub nie (Kadouch i wsp., 2021). Podanie kwasu hialuronowego na stary złóg innego materiału zwiększa ryzyko reakcji zapalnych i guzków, dlatego kontrola przed zabiegiem ma sens także wtedy, gdy nic nie dolega.</p>
      </>
    ),
  },
  {
    title: 'USG Doppler przed podaniem kwasu hialuronowego - mapowanie naczyń twarzy',
    tocLabel: 'Mapowanie naczyń',
    content: (
      <>
        <p>USG Doppler przed zabiegiem pokazuje przebieg i głębokość tętnic twarzy, między innymi tętnicy twarzowej, kątowej i nadbloczkowej, dzięki czemu lekarz planuje miejsce i warstwę podania preparatu z uwzględnieniem anatomii konkretnej osoby.</p>
        <p>Dobra znajomość anatomii jest podstawą bezpiecznego zabiegu, ale nie zamyka tematu. Przebieg tętnic twarzy jest zmienny osobniczo: w serii pacjentów kwalifikowanych do korekty bruzd nosowo-wargowych USG ujawniło odmienny od typowego przebieg tętnicy twarzowej u 38% badanych (Hong i wsp., 2025). Test aspiracji i kaniula obniżają ryzyko, lecz go nie eliminują, o czym piszemy szerzej na stronie o <Link href="/medycyna-estetyczna/wypelniacze-ha/">wypełniaczach na bazie kwasu hialuronowego</Link>.</p>
        <p>Z tego względu część lekarzy wykonuje mapowanie naczyń przed iniekcją, a w wybranych okolicach podaje preparat pod kontrolą obrazu w czasie rzeczywistym. W badaniu 94 osób z podaniem kaniulą w środkową część twarzy pod kontrolą USG preparat trafił do zaplanowanej warstwy we wszystkich przypadkach, bez zdarzeń niepożądanych (Schelke i wsp., 2023). Trzeba jednak uczciwie dodać, że dowody pochodzą głównie z serii przypadków i badań obserwacyjnych, a USG nie jest dziś obowiązkowym standardem przed każdym zabiegiem. Jest natomiast rozsądnym uzupełnieniem w okolicach wysokiego ryzyka (nos, gładzizna, bruzdy nosowo-wargowe, skronie) oraz u osób po wcześniejszych zabiegach.</p>
      </>
    ),
  },
  {
    title: 'USG przy powikłaniach - zator naczyniowy, guzki i hialuronidaza pod kontrolą USG',
    tocLabel: 'Powikłania i hialuronidaza',
    content: (
      <>
        <p>Przy powikłaniach USG wskazuje, czy złóg uciska naczynie lub tkwi w jego świetle, gdzie leży materiał odpowiedzialny za guzek oraz w które miejsce podać hialuronidazę. Badanie dopplerowskie ocenia przy tym, czy przepływ w tętnicy jest zachowany.</p>
        <h3>Zaburzenia przepływu po wypełniaczu</h3>
        <p>W międzynarodowym badaniu 100 pacjentów z naczyniowymi zdarzeniami niepożądanymi po wypełniaczach najczęstszym obrazem był brak przepływu w naczyniach przeszywających (42%) i w większych tętnicach (35%); u 12% osób Doppler nie wykazał nieprawidłowości (Sigrist i wsp., 2026). Wynika z tego ważne zastrzeżenie: prawidłowy obraz USG nie wyklucza niedokrwienia. Nagły, silny ból, zblednięcie lub siateczkowate, sinawe zabarwienie skóry, a zwłaszcza zaburzenia widzenia po zabiegu, wymagają natychmiastowego kontaktu z lekarzem wykonującym zabieg. Leczenia nie wolno opóźniać w oczekiwaniu na badanie obrazowe.</p>
        <h3>Hialuronidaza pod kontrolą USG</h3>
        <p>Gdy przyczyną jest kwas hialuronowy, enzym hialuronidaza rozpuszcza złóg. Podanie enzymu bezpośrednio do zlokalizowanego w USG złogu pozwala działać precyzyjnie: w opisach klinicznych wystarczały dawki znacznie niższe niż przy podaniu bez obrazowania; w serii pięciu pacjentek z niedokrwieniem było to średnio 87 jednostek (Ugo i wsp., 2024). To także sposób na korektę przewypełnienia lub asymetrii bez rozpuszczania całego efektu zabiegu. Hialuronidaza w medycynie estetycznej jest stosowana poza wskazaniem rejestracyjnym i sama może wywołać reakcję alergiczną, dlatego o jej podaniu decyduje lekarz.</p>
        <h3>Guzki o późnym początku</h3>
        <p>Guzki pojawiające się tygodnie lub miesiące po zabiegu nie są jednym rozpoznaniem, lecz objawem o różnych przyczynach: nadmiar preparatu, opóźniona reakcja nadwrażliwości, biofilm, ropień lub ziarniniak. USG różnicuje złóg bezechowy od ropnia z zawartością i wzmocnieniem akustycznym oraz od unaczynionego, hipoechogenicznego guzka zapalnego, a sygnał przepływu wewnątrz złogu przemawia za zakażeniem. Badanie ukierunkowuje leczenie (hialuronidaza, antybiotyk, steroid podany miejscowo), ale nie zastępuje badań laboratoryjnych ani, w razie potrzeby, histopatologii.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega USG wypełniaczy i jak się przygotować?',
    tocLabel: 'Przebieg i przygotowanie',
    content: (
      <>
        <p>USG wypełniaczy nie wymaga przygotowania, trwa zwykle od kilkunastu do trzydziestu minut i jest bezbolesne. Pacjent leży, a lekarz przesuwa głowicę pokrytą żelem po skórze twarzy w badanych okolicach.</p>
        <ol>
          <li><strong>Wywiad</strong> - kiedy i w jakie okolice podawano preparat, jaki materiał (jeśli wiadomo), czy występowały dolegliwości. Warto zabrać dokumentację lub zdjęcia z wcześniejszych zabiegów.</li>
          <li><strong>Badanie w skali szarości</strong> - ocena warstw skóry i tkanki podskórnej, lokalizacja złogów, ich wielkość, echogeniczność i granice; opis w ujednoliconej terminologii (Schelke i wsp., 2019).</li>
          <li><strong>Doppler</strong> - ocena naczyń w sąsiedztwie złogu, mapowanie tętnic przed planowanym zabiegiem, sprawdzenie unaczynienia guzka.</li>
          <li><strong>Omówienie i opis</strong> - lekarz pokazuje obraz na ekranie i przekazuje opis od razu po badaniu, wraz z zaleceniem co do dalszego postępowania.</li>
        </ol>
        <p>Na badanie najlepiej przyjść bez makijażu w badanej okolicy, bo żel i głowica i tak go usuną. Nie trzeba być na czczo ani odstawiać leków. Jeśli USG ma poprzedzać zabieg, można wykonać je tego samego dnia, tuż przed iniekcją.</p>
      </>
    ),
  },
  {
    title: 'Ograniczenia i przeciwwskazania do USG w medycynie estetycznej',
    tocLabel: 'Ograniczenia i przeciwwskazania',
    content: (
      <>
        <p>Diagnostyczne USG nie ma przeciwwskazań bezwzględnych, nie używa promieniowania i można je powtarzać. Ograniczenia dotyczą samej metody: bardzo małe złogi mogą leżeć poniżej rozdzielczości aparatu, a rozpoznanie rodzaju materiału opiera się na wzorcu obrazu, nie na analizie chemicznej.</p>
        <h3>Ograniczenia badania</h3>
        <ul>
          <li>Jakość oceny zależy od klasy głowicy (częstotliwości) i doświadczenia lekarza w USG skóry i wypełniaczy.</li>
          <li>Wzorce obrazu różnych materiałów nakładają się częściowo, na przykład hydroksyapatyt wapnia po rozcieńczeniu może przypominać inne preparaty.</li>
          <li>Prawidłowy obraz dopplerowski nie wyklucza niedokrwienia, dlatego przy objawach zatoru liczy się przede wszystkim ocena kliniczna i czas.</li>
          <li>USG nie rozstrzyga o charakterze ziarniniaka ani o rodzaju drobnoustroju; tu potrzebne bywają badania laboratoryjne lub histopatologia.</li>
        </ul>
        <h3>Kiedy odraczamy badanie</h3>
        <p>Względnym przeciwwskazaniem jest czynne zakażenie skóry lub otwarta rana w polu badania, ponieważ utrudnia przyłożenie głowicy. Ciąża ani karmienie piersią nie są przeciwwskazaniem do diagnostycznego USG skóry, choć same zabiegi z użyciem wypełniaczy odracza się w tym okresie.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O kwalifikacji do zabiegu, jego przebiegu i ewentualnych przeciwwskazaniach decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje USG wypełniaczy we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content: (
      <>
        <p>USG wypełniaczy jest badaniem prywatnym, wykonywanym bez skierowania. Cena zależy od zakresu badania: kontrola jednej okolicy, ocena całej twarzy z Dopplerem lub USG połączone z podaniem hialuronidazy.</p>
        <p>NFZ nie refunduje badań wykonywanych w związku z zabiegami estetycznymi. Aktualne stawki podajemy w <Link href="/cennik/">cenniku</Link>, a termin ustalisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie. Jeśli kontrola ma poprzedzać zabieg, poinformuj o tym przy zapisie, aby zaplanować oba w jednej wizycie. Pełną listę badań pracowni znajdziesz na stronie <Link href="/usg/">USG we Wrocławiu</Link>, a ofertę zabiegów w dziale <Link href="/medycyna-estetyczna/">medycyny estetycznej</Link>.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Khorasanizadeh F i wsp. Ultrasonographic evaluation of cosmetic fillers: patterns and frequent complications - A literature review. Clinical Imaging 2026; 131: 110708. PMID 41505983.</li>
        <li>Tang Y i wsp. Clinical Applications of High-Frequency Ultrasound in Filler Identification and Complication Management. Seminars in Ultrasound, CT and MRI 2026; 47(3-4): 239-247. PMID 42342087.</li>
        <li>Wortsman X, Wortsman J, Orlandi C i wsp. Ultrasound detection and identification of cosmetic fillers in the skin. Journal of the European Academy of Dermatology and Venereology 2012; 26(3): 292-301. PMID 21418333.</li>
        <li>Schelke LW, Cassuto D, Velthuis P, Wortsman X. Nomenclature proposal for the sonographic description and reporting of soft tissue fillers. Journal of Cosmetic Dermatology 2020; 19(2): 282-288. PMID 31456355.</li>
        <li>Schelke LW, Decates TS, Velthuis PJ. Ultrasound to improve the safety of hyaluronic acid filler treatments. Journal of Cosmetic Dermatology 2018; 17(6): 1019-1024. PMID 30084182.</li>
        <li>Schelke LW, Velthuis P, Kadouch J, Swift A. Early ultrasound for diagnosis and treatment of vascular adverse events with hyaluronic acid fillers. Journal of the American Academy of Dermatology 2023; 88(1): 79-85. PMID 31325548.</li>
        <li>Sigrist RMS, Gonzalez C, Schelke L i wsp. Doppler Ultrasound Findings in Filler-Related Facial Vascular Adverse Events: An International Multicenter Study. Diagnostics 2026; 16(11): 1587. PMID 42279455.</li>
        <li>Ugo US, Paola M, Salvatore F, Giovanni M. Use of Minimal Amounts of Hyaluronidase in the Ultrasound-Guided Treatment of Acute Vascular Occlusion by Hyaluronic Acid: A Preliminary Report. Aesthetic Surgery Journal Open Forum 2024; 6: ojae025. PMID 38938923.</li>
        <li>Schelke L, Velthuis PJ, Lowry N i wsp. Precision in Midfacial Volumization Using Ultrasound-Assisted Cannula Injections. Plastic and Reconstructive Surgery 2023; 152(1): 67-74. PMID 36728630.</li>
        <li>Schelke L, Liplavk O, Cotofana S, Shah-Desai S, Velthuis P. Periorbital venous stasis may be involved with filler induced malar edema - A duplex ultrasound-imaging-based case series. Journal of Cosmetic Dermatology 2023; 22(12): 3246-3251. PMID 37786282.</li>
        <li>Kadouch J, Schelke LW, Swift A. Ultrasound to Improve the Safety and Efficacy of Lipofilling of the Temples. Aesthetic Surgery Journal 2021; 41(5): 603-612. PMID 32162653.</li>
        <li>Hong GW, Kim SB, Koppert E i wsp. Filler Injection Techniques and Ultrasound Observations: Ultrasound-Based Classification of Volume Deficiency in Nasolabial Folds. Aesthetic Plastic Surgery 2026; 50(1): 350-357. PMID 41120613.</li>
        <li>Hong GW, Hu H, Chang K i wsp. Adverse Effects Associated with Dermal Filler Treatments: Part II Vascular Complication. Diagnostics 2024; 14(14): 1555. PMID 39061692.</li>
        <li>Harris S i wsp. Ultrasound Evaluation of Lip Anatomy and Filler Placement: A Cross-Sectional Study of Injection Accuracy, Migration, and Demographic Variation. Plastic and Reconstructive Surgery 2026. PMID 41494527.</li>
        <li>Kroumpouzos G, Harris S, Bhargava S, Wortsman X. Complications of fillers in the lips and perioral area: Prevention, assessment, and management focusing on ultrasound guidance. Journal of Plastic, Reconstructive and Aesthetic Surgery 2023; 84: 656-669. PMID 37002059.</li>
        <li>Convery C, Davies E, Murray G, Walker L. Delayed-onset Nodules (DONs) and Considering their Treatment following use of Hyaluronic Acid (HA) Fillers. Journal of Clinical and Aesthetic Dermatology 2021; 14(7): E59-E67. PMID 34840652.</li>
        <li>Saad Y, Tannous Z. Management of Delayed Complications of Hyaluronic Acid Fillers: Case Series From the Middle East. Journal of Cosmetic Dermatology 2025; 24(4): e70166. PMID 40257429.</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Co pokazuje USG wypełniaczy?',
    answer:
      'USG wypełniaczy pokazuje, gdzie leży podany preparat, jak głęboko sięga i jaki ma zasięg, a także jego relację do tętnic i żył twarzy. Kwas hialuronowy widać jako ciemne, dobrze odgraniczone złogi, natomiast materiały trwałe, takie jak silikon czy hydroksyapatyt wapnia, dają odmienny obraz, co pozwala lekarzowi rozpoznać rodzaj wypełniacza.',
  },
  {
    question: 'Czy USG wykryje kwas hialuronowy podany kilka lat temu?',
    answer:
      'USG wykrywa kwas hialuronowy przez wiele miesięcy po podaniu, a w części przypadków także po latach, choć złóg z czasem się zmniejsza i traci ostre granice. Wypełniacze trwałe, na przykład olej silikonowy, pozostają widoczne bezterminowo. Dlatego badanie ma sens przed kolejnym zabiegiem, nawet jeśli pacjent nie pamięta nazwy preparatu.',
  },
  {
    question: 'Czy USG przed podaniem wypełniacza jest konieczne?',
    answer:
      'USG przed podaniem wypełniacza nie jest obowiązkowym standardem, ale w okolicach wysokiego ryzyka, takich jak nos, gładzizna czy bruzdy nosowo-wargowe, oraz u osób po wcześniejszych zabiegach daje lekarzowi informację o przebiegu tętnic i o pozostałościach starego materiału. Test aspiracji i kaniula obniżają ryzyko zatoru, lecz go nie eliminują.',
  },
  {
    question: 'Czy hialuronidazę można podać pod kontrolą USG?',
    answer:
      'Hialuronidazę można podać pod kontrolą USG bezpośrednio do zlokalizowanego złogu kwasu hialuronowego. Pozwala to rozpuścić tylko nadmiar preparatu, na przykład przy guzku lub asymetrii, i zwykle wymaga mniejszej dawki enzymu niż podanie bez obrazowania. O podaniu hialuronidazy decyduje lekarz, ponieważ enzym stosuje się poza wskazaniem rejestracyjnym.',
  },
  {
    question: 'Ile trwa USG wypełniaczy i czy trzeba się do niego przygotować?',
    answer:
      'USG wypełniaczy trwa zwykle od kilkunastu do trzydziestu minut i nie wymaga przygotowania: nie trzeba być na czczo ani odstawiać leków. Warto przyjść bez makijażu w badanej okolicy i zabrać dokumentację lub zdjęcia z wcześniejszych zabiegów. Badanie jest bezbolesne, a opis wyniku lekarz przekazuje od razu po jego zakończeniu.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG wypełniaczy?',
    answer: `USG wypełniaczy we Wrocławiu wykonasz w pracowni USG Bas Clinic przy ${CLINIC.address.street}, gdzie w jednym miejscu działa pracownia ultrasonografii i gabinet medycyny estetycznej. Badanie jest prywatne i nie wymaga skierowania, a termin umówisz telefonicznie pod numerem ${CLINIC.phone}. Przyjmujemy od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function UsgKontrolaWypelniaczyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG w medycynie estetycznej we Wrocławiu - kontrola wypełniaczy"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG wypełniaczy pokazuje, gdzie leży podany kwas hialuronowy, wyjaśnia przyczynę guzków i obrzęków po zabiegu oraz mapuje naczynia twarzy przed kolejną iniekcją. Badanie wykonuje w Bas Clinic we Wrocławiu lekarz, a wynik omawia od razu."
      slug="usg/kontrola-wypelniaczy"
      schemaType={['MedicalTest', 'ImagingTest']}
      usesDevice="Ultrasonograf"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      faqImage="/uploads/services/faq-usg-wypelniacze-konsultacja-bas-clinic-wroclaw.webp"
      faqImageAlt="Lekarka omawia z pacjentką obraz USG wypełniaczy w Bas Clinic we Wrocławiu"
      childServices={RELATED}
      childServicesTitle="Powiązane badania i zabiegi"
      childServicesSubtitle="Diagnostyka USG i medycyna estetyczna"
    />
  );
}
