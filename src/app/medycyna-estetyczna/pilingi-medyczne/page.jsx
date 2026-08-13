import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Pilingi medyczne Wrocław - peeling chemiczny',
  description:
    'Peeling medyczny we Wrocławiu wykonywany przez lekarza: dobór kwasu do problemu skóry i fototypu, realne efekty na trądzik, przebarwienia i fotostarzenie.',
  path: '/medycyna-estetyczna/pilingi-medyczne/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Pilingi medyczne' },
];

const FAQ = [
  {
    question: 'Czym różni się peeling medyczny od kosmetycznego i domowego?',
    answer:
      'Peeling medyczny wykonuje lekarz, używając kwasów o wyższym stężeniu i niższym pH niż preparaty kosmetyczne czy domowe. Głębokość działania jest kontrolowana i dobierana do problemu skóry oraz fototypu, co poszerza możliwości zabiegu, ale wymaga kwalifikacji medycznej i oceny przeciwwskazań.',
  },
  {
    question: 'Czy peeling chemiczny powoduje przebarwienia i jak ich uniknąć?',
    answer:
      'Przebarwienia pozapalne to najczęstsze powikłanie peelingów, zwłaszcza u osób o ciemniejszej karnacji (fototyp IV-VI). Ryzyko ogranicza dobór łagodniejszego peelingu powierzchownego, ścisła ochrona przeciwsłoneczna i odpowiednia pielęgnacja. Żaden zabieg nie eliminuje go jednak całkowicie, dlatego liczy się ostrożna kwalifikacja.',
  },
  {
    question: 'Ile zabiegów peelingu trzeba wykonać i jak często?',
    answer:
      'Peelingi powierzchowne wykonuje się zwykle w serii kilku zabiegów w odstępach kilkutygodniowych, z okresowym podtrzymaniem. Dokładna liczba zależy od rodzaju kwasu, głębokości i wskazania, dlatego ustala ją lekarz indywidualnie po ocenie skóry. Nie ma jednej normy dla wszystkich.',
  },
  {
    question: 'Czy peeling chemiczny można robić latem?',
    answer:
      'Po peelingu skóra jest wrażliwa na słońce, a ekspozycja na promieniowanie UV zwiększa ryzyko przebarwień. Dlatego mocniejsze peelingi planuje się najczęściej jesienią i zimą. Latem dobiera się łagodniejsze kwasy oraz bezwzględnie stosuje wysoki filtr SPF i unika opalania.',
  },
  {
    question: 'Jakie są przeciwwskazania do peelingu medycznego?',
    answer:
      'Do przeciwwskazań należą m.in. aktywna opryszczka lub zakażenie skóry, czynne stany zapalne (np. atopowe zapalenie skóry), świeża opalenizna, skłonność do bliznowców, ciąża i karmienie piersią oraz nierealistyczne oczekiwania. Każdy przypadek lekarz ocenia indywidualnie przed zabiegiem podczas konsultacji.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać peeling medyczny?',
    answer: `Peeling medyczny we Wrocławiu wykonujemy w Bas Clinic przy ${CLINIC.address.street} w mieście ${CLINIC.address.city}. Konsultację i termin zabiegu umówisz telefonicznie pod numerem ${CLINIC.phone}, od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, lub przez formularz rejestracji online.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest peeling medyczny i czym różni się od kosmetycznego',
    tocLabel: 'Czym jest',
    content: (
      <>
        <p><strong>Peeling medyczny</strong> to kontrolowane, dozowane przez lekarza złuszczanie skóry kwasami o stężeniu i pH, których nie spotkamy w pielęgnacji domowej ani w gabinecie kosmetycznym. Bywa nazywany <strong>peelingiem chemicznym</strong>, <strong>pilingiem medycznym</strong> lub chemoeksfoliacją. Zabieg nie sprowadza się do zmycia naskórka; ma wywołać kontrolowaną odnowę skóry.</p>
        <p>Najważniejsza różnica dotyczy tego, kto i czym wykonuje zabieg. To rozróżnienie często ginie w marketingu, a ma realne znaczenie dla efektu i bezpieczeństwa:</p>
        <ul>
          <li><strong>Peeling medyczny (lekarski)</strong> - wyższe stężenia kwasów, kwalifikacja medyczna, ocena fototypu skóry i wywiadu, dobór głębokości do problemu. Wykonuje lekarz.</li>
          <li><strong>Peeling kosmetyczny</strong> - niższe stężenia, działanie głównie w naskórku, w gabinecie kosmetycznym.</li>
          <li><strong>Peeling domowy</strong> - preparaty bez recepty o najsłabszym działaniu, do pielęgnacji podtrzymującej.</li>
        </ul>
        <p>W Bas Clinic peeling medyczny prowadzimy jako zabieg lekarski w ramach <Link href="/medycyna-estetyczna/">medycyny estetycznej</Link> we Wrocławiu - od konsultacji i oceny skóry, przez dobór kwasu, po plan serii.</p>
      </>
    ),
  },
  {
    title: 'Rodzaje peelingów medycznych: głębokość, kwasy i mechanizm',
    tocLabel: 'Rodzaje i głębokość',
    content: (
      <>
        <p>Peelingi medyczne dzielimy przede wszystkim według <strong>głębokości penetracji</strong>: powierzchowne sięgają naskórka, średnie docierają do górnej warstwy skóry właściwej, a głębokie - do jej warstwy siatkowatej. Głębokość decyduje jednocześnie o sile efektu, o skali ryzyka i o długości rekonwalescencji.</p>
        <table>
          <tbody>
            <tr>
              <th>Głębokość</th>
              <th>Dokąd sięga</th>
              <th>Przykładowe kwasy</th>
              <th>Orientacyjny downtime</th>
            </tr>
            <tr>
              <td>Powierzchowny</td>
              <td>Naskórek</td>
              <td>Migdałowy, mlekowy, glikolowy (niższe stężenia), salicylowy, pirogronowy, roztwór Jessnera</td>
              <td>1-3 dni</td>
            </tr>
            <tr>
              <td>Średni</td>
              <td>Górna warstwa skóry właściwej</td>
              <td>TCA 35-50%, glikolowy 70%</td>
              <td>ok. 5-10 dni</td>
            </tr>
            <tr>
              <td>Głęboki</td>
              <td>Siatkowata warstwa skóry właściwej</td>
              <td>Fenol z olejem krotonowym, wysokie stężenia TCA</td>
              <td>tygodnie; pełne gojenie ponad 2 miesiące</td>
            </tr>
          </tbody>
        </table>
        <p>Kwasy różnią się też charakterem działania: <strong>alfa-hydroksykwasy (AHA)</strong> - glikolowy, mlekowy, migdałowy - pracują głównie na kolorycie i gładkości, a <strong>beta-hydroksykwas (BHA)</strong>, czyli salicylowy, rozpuszcza się w tłuszczach i wnika w ujścia gruczołów łojowych, co czyni go przydatnym w cerze trądzikowej i tłustej.</p>
        <h3>Jak peeling medyczny działa na skórę?</h3>
        <p>Kwas wywołuje kontrolowane uszkodzenie: keratolizę i denaturację białek naskórka, a w głębszych peelingach również skóry właściwej. Skóra odpowiada reepitelizacją oraz przebudową - pobudzeniem włókien kolagenowych i elastynowych. To dlatego efekt budujemy serią zabiegów, a nie jednym.</p>
        <h3>Frosting i neutralizacja</h3>
        <p>W trakcie zabiegu lekarz obserwuje tzw. <strong>frosting</strong> - białawe zmętnienie skóry będące wizualnym wskaźnikiem głębokości działania. Część kwasów (np. glikolowy) wymaga neutralizacji preparatem zasadowym, inne, jak TCA, działają samoograniczająco, a kwas salicylowy zostawia charakterystyczny biały nalot.</p>
      </>
    ),
  },
  {
    title: 'Wskazania: na co pomaga peeling medyczny',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Peelingi medyczne stosuje się w <strong>trądziku</strong>, <strong>przebarwieniach</strong>, <strong>fotostarzeniu</strong>, przy drobnych zmarszczkach i nierównej teksturze skóry. Warto jednak wiedzieć, że siła dowodów naukowych różni się dla każdego z tych wskazań, dlatego o doborze metody decyduje rzetelna konsultacja, a nie obietnice.</p>
        <h3>Trądzik i blizny potrądzikowe</h3>
        <p>W aktywnym trądziku peelingi powierzchowne, zwłaszcza salicylowy i glikolowy, przynoszą umiarkowaną poprawę i są dobrze tolerowane. Przegląd systematyczny badań z randomizacją nie wykazał istotnej przewagi jednego kwasu nad innym (Chen i wsp., 2018), dlatego dobór zależy od typu cery, a nie od jednego składnika. Płytkie nierówności bywają poprawiane techniką punktowego TCA, ale głębokie blizny atroficzne zwykle wymagają innych metod, takich jak <Link href="/medycyna-estetyczna/laserowe-usuwanie-blizn/">laserowe usuwanie blizn</Link> czy <Link href="/medycyna-estetyczna/mezoterapia-mikroiglowa/">mezoterapia mikroigłowa</Link>.</p>
        <h3>Przebarwienia i melasma</h3>
        <p>W przebarwieniach peeling jest <strong>terapią wspomagającą</strong>, a nie samodzielnym rozwiązaniem. W melasmie dodanie peelingu glikolowego do leczenia miejscowego nie przyniosło istotnej dodatkowej poprawy (Hurley i wsp., 2002), a ryzyko nawrotu i podrażnienia jest realne. Dlatego przebarwienia prowadzimy planowo: pielęgnacja rozjaśniająca, ochrona przeciwsłoneczna i ewentualnie peeling jako element całości.</p>
        <h3>Fotostarzenie i tekstura</h3>
        <p>Peelingi poprawiają koloryt, gładkość i drobne zmarszczki wynikające z fotostarzenia. Na głębsze zmarszczki działają mocniej peelingi średnie i głębokie, ale kosztem dłuższej rekonwalescencji i większego ryzyka. Poprawa wyglądu rozszerzonych porów bywa efektem wtórnym, nie samodzielną obietnicą.</p>
      </>
    ),
  },
  {
    title: 'Przebieg zabiegu i rekonwalescencja krok po kroku',
    tocLabel: 'Przebieg i rekonwalescencja',
    content: (
      <>
        <p>Zabieg zaczyna się od dokładnego oczyszczenia skóry, po którym lekarz nakłada kwas i kontroluje czas jego działania, obserwując reakcję skóry. Przy części kwasów preparat się neutralizuje, a na koniec nakłada się krem ochronny z wysokim filtrem.</p>
        <ol>
          <li><strong>Oczyszczenie i odtłuszczenie</strong> skóry.</li>
          <li><strong>Aplikacja kwasu</strong> - punktowo lub na całą okolicę, z kontrolą czasu i głębokości.</li>
          <li><strong>Neutralizacja lub zmycie</strong> preparatu, zależnie od rodzaju kwasu.</li>
          <li><strong>Zabezpieczenie</strong> skóry i fotoprotekcja.</li>
        </ol>
        <h3>Ile trwa rekonwalescencja po peelingu?</h3>
        <p>Czas złuszczania zależy od głębokości peelingu: po powierzchownych to zwykle 1-3 dni lekkiego rumienia i delikatnego łuszczenia, po średnich około 5-10 dni wyraźnego łuszczenia, a po głębokich gojenie liczy się w tygodniach. W tym czasie nie wolno odrywać schodzącego naskórka - to częsta przyczyna powikłań.</p>
        <h3>Dlaczego fotoprotekcja jest tak ważna</h3>
        <p>Po każdym peelingu skóra jest przejściowo wrażliwa na słońce, a jej bariera osłabiona. Promieniowanie UV w pierwszych dniach po zabiegu to najprostsza droga do przebarwień pozapalnych. Dlatego <strong>wysoki filtr SPF i unikanie słońca</strong> traktujemy jako część zabiegu, szczególnie w pierwszych tygodniach. Z tego powodu peelingi, zwłaszcza mocniejsze, planuje się najczęściej jesienią i zimą.</p>
      </>
    ),
  },
  {
    title: 'Efekty, trwałość i seria zabiegów',
    tocLabel: 'Efekty i seria',
    content: (
      <>
        <p>Efekty peelingów medycznych są <strong>stopniowe i kumulatywne</strong> - budują się w serii zabiegów i zależą od konsekwentnej pielęgnacji oraz fotoprotekcji. Pojedynczy peeling odświeża skórę, ale realną poprawę kolorytu, gładkości czy trądziku daje zwykle cała seria.</p>
        <p>Schemat dobiera się indywidualnie. Orientacyjnie peelingi powierzchowne wykonuje się w serii kilku zabiegów w odstępach kilkutygodniowych, z okresowym podtrzymaniem - dokładna liczba zależy od kwasu, głębokości i wskazania. Nie ma jednej uniwersalnej liczby zabiegów, która sprawdzi się u każdego.</p>
        <h3>Czego peeling medyczny nie zrobi</h3>
        <p>Uczciwe zarządzanie oczekiwaniami to część dobrej kwalifikacji. Peeling chemiczny:</p>
        <ul>
          <li>nie wypełni zmarszczek ani nie doda objętości - to zadanie innych metod;</li>
          <li>nie usunie trwale melasmy - łagodzi ją jako element szerszego planu, z ryzykiem nawrotu;</li>
          <li>nie wygładzi w pełni głębokich blizn atroficznych - tu lepsze efekty dają zwykle laser frakcyjny lub mezoterapia mikroigłowa (porównanie niżej);</li>
          <li>nie zastąpi biostymulacji kolagenu przy zaawansowanej wiotkości - temu służą m.in. <Link href="/medycyna-estetyczna/stymulatory-tkankowe/">stymulatory tkankowe</Link>;</li>
          <li>nie zadziała po jednym zabiegu - liczy się seria i pielęgnacja domowa.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo, powikłania i ryzyko przebarwień',
    tocLabel: 'Bezpieczeństwo',
    content: (
      <>
        <p>Peelingi powierzchowne mają dobry profil bezpieczeństwa, ale jak każda procedura medyczna niosą ryzyko. Najczęstszym powikłaniem są <strong>przebarwienia pozapalne (PIH)</strong> - i to one decydują o tym, jak ostrożnie dobiera się kwas oraz głębokość.</p>
        <h3>Przebarwienia pozapalne a fototyp skóry</h3>
        <p>PIH powstają, gdy uszkodzenie skóry pobudza melanocyty do nadmiernej produkcji barwnika. Ryzyko rośnie wraz z ciemniejszym fototypem w skali Fitzpatricka (IV-VI) i jest dobrze udokumentowane (Sarkar i wsp., 2012). Dlatego u osób z ciemniejszą karnacją bezpieczniejsze są peelingi powierzchowne, łagodniejsze protokoły i stopniowe zwiększanie mocy. Podstawą prewencji jest ścisła fotoprotekcja i odpowiednio dobrana pielęgnacja.</p>
        <h3>Inne powikłania peelingu chemicznego</h3>
        <ul>
          <li><strong>Rumień, pieczenie, obrzęk</strong> - zwykle przejściowe, nasilają się z głębokością.</li>
          <li><strong>Reaktywacja opryszczki</strong> - przy nawracającej opryszczce lekarz może zalecić profilaktykę przeciwwirusową przed zabiegiem.</li>
          <li><strong>Blizny</strong> - rzadkie, ale najpoważniejsze; ryzyko rośnie przy peelingach głębokich i u osób ze skłonnością do bliznowców.</li>
        </ul>
        <p>Osobną kategorią są <strong>peelingi głębokie z fenolem</strong>, które mogą obciążać serce i wymagają monitorowania - to procedury zarezerwowane dla wybranych przypadków i odpowiednich warunków zabiegowych. Większości pacjentów dotyczą peelingi powierzchowne i średnie, przy których takiego ryzyka ogólnoustrojowego nie ma.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania, kwalifikacja i cena we Wrocławiu',
    tocLabel: 'Przeciwwskazania i cena',
    content: (
      <>
        <p>Peeling medyczny poprzedza konsultacja lekarska z oceną skóry, fototypu i wywiadem - to moment, w którym ustala się, czy i jaki peeling jest bezpieczny.</p>
        <h3>Przeciwwskazania do peelingu medycznego</h3>
        <ul>
          <li>aktywna opryszczka lub inne zakażenie skóry w miejscu zabiegu;</li>
          <li>czynne stany zapalne skóry (np. atopowe zapalenie skóry), świeże rany;</li>
          <li>świeża opalenizna i intensywna ekspozycja na słońce;</li>
          <li>skłonność do bliznowców i bliznowacenia przerostowego;</li>
          <li>ciąża i karmienie piersią - podejście ostrożnościowe (doustne retinoidy są w ciąży bezwzględnie przeciwwskazane);</li>
          <li>nierealistyczne oczekiwania co do efektu.</li>
        </ul>
        <p>Odrębną kwestią jest leczenie izotretynoiną. Klasycznie zalecano kilkumiesięczną przerwę przed peelingiem, jednak nowsze stanowiska kwestionują tę zasadę dla peelingów powierzchownych i średnich - decyzję lekarz podejmuje indywidualnie.</p>
        <h3>Ile kosztuje peeling medyczny we Wrocławiu?</h3>
        <p>Cena zależy od rodzaju kwasu, głębokości i liczby zabiegów w serii, dlatego ustalamy ją po konsultacji i ocenie skóry. Aktualne widełki znajdziesz w <Link href="/cennik/">cenniku</Link>, a termin konsultacji umówisz przez <Link href="/rejestracja/">rejestrację</Link>. Peeling medyczny jest świadczeniem z zakresu medycyny estetycznej i nie podlega refundacji NFZ.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej ani indywidualnej kwalifikacji do zabiegu.</p>
      </>
    ),
  },
  {
    title: 'Peeling chemiczny a mikrodermabrazja, mikroigłowa i laser',
    tocLabel: 'Porównanie metod',
    content: (
      <>
        <p>Peeling chemiczny, mikrodermabrazja, mezoterapia mikroigłowa i laser frakcyjny działają na różnych głębokościach i różnymi mechanizmami, dlatego częściej się uzupełniają, niż wykluczają. Wybór zależy od problemu, fototypu i akceptowalnej rekonwalescencji.</p>
        <table>
          <tbody>
            <tr>
              <th>Metoda</th>
              <th>Zasada działania</th>
              <th>Typowe wskazania</th>
              <th>Charakter dowodów</th>
            </tr>
            <tr>
              <td>Peeling chemiczny</td>
              <td>Złuszczanie kwasami, kontrolowane wg głębokości</td>
              <td>Trądzik, przebarwienia, fotostarzenie, tekstura</td>
              <td>Umiarkowane, różne dla różnych wskazań</td>
            </tr>
            <tr>
              <td>Mikrodermabrazja</td>
              <td>Mechaniczne ścieranie warstwy rogowej</td>
              <td>Szorstkość, matowość, drobna pigmentacja</td>
              <td>Słabszy efekt; bez wpływu na zmarszczki</td>
            </tr>
            <tr>
              <td>Mezoterapia mikroigłowa</td>
              <td>Mikronakłucia pobudzające kolagen</td>
              <td>Blizny, fotostarzenie, tekstura</td>
              <td>Niższe ryzyko przebarwień u ciemnych fototypów</td>
            </tr>
            <tr>
              <td>Laser frakcyjny</td>
              <td>Energia świetlna, frakcyjna przebudowa skóry</td>
              <td>Blizny atroficzne, głębsze fotostarzenie</td>
              <td>Mocniejszy efekt; dłuższa rekonwalescencja</td>
            </tr>
          </tbody>
        </table>
        <p>W bliznach potrądzikowych laser frakcyjny CO2 daje zwykle wyraźniejszą poprawę niż erbowy, ale wiąże się z dłuższym rumieniem (Liu i wsp., 2024). Coraz częściej lepsze rezultaty daje łączenie metod, na przykład peelingu z mikronakłuwaniem. Powiązane ścieżki opisujemy osobno: <Link href="/medycyna-estetyczna/laserowe-usuwanie-blizn/">laserowe usuwanie blizn</Link> i <Link href="/medycyna-estetyczna/mezoterapia-mikroiglowa/">mezoterapia mikroigłowa</Link>, a dla samego nawilżenia i odżywienia skóry - <Link href="/medycyna-estetyczna/skin-booster/">skin booster</Link> oraz <Link href="/medycyna-estetyczna/mezoterapia-iglowa/">mezoterapia igłowa</Link>.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Samargandy S, Raggio BS. Chemical Peels for Skin Resurfacing. StatPearls. PMID: 31613532.</li>
        <li>Soleymani T i wsp. A Practical Approach to Chemical Peels: A Review of Fundamentals and Step-by-step Algorithmic Protocol for Treatment. J Clin Aesthet Dermatol. 2018. PMID: 30214663.</li>
        <li>Khunger N (IADVL Task Force). Standard guidelines of care for chemical peels. Indian J Dermatol Venereol Leprol. 2008. PMID: 18688104.</li>
        <li>Lee KC i wsp. Basic chemical peeling: Superficial and medium-depth peels. J Am Acad Dermatol. 2019. PMID: 30550830.</li>
        <li>Rendon MI i wsp. Evidence and considerations in the application of chemical peels in skin disorders and aesthetic resurfacing. J Clin Aesthet Dermatol. 2010. PMID: 20725555.</li>
        <li>Chen X i wsp. Chemical peels for acne vulgaris: a systematic review of randomised controlled trials. BMJ Open. 2018. PMID: 29705755.</li>
        <li>Kaminaka C i wsp. Clinical evaluation of glycolic acid chemical peeling in patients with acne vulgaris. Dermatol Surg. 2014. PMID: 24447110.</li>
        <li>Lekakh O i wsp. Treatment of Acne Vulgaris With Salicylic Acid Chemical Peel and Pulsed Dye Laser. J Lasers Med Sci. 2015. PMID: 26705462.</li>
        <li>Grimes PE. The safety and efficacy of salicylic acid chemical peels in darker racial-ethnic groups. Dermatol Surg. 1999. PMID: 9935087.</li>
        <li>Dorgham NA i wsp. Efficacy and tolerability of chemical peeling as a single agent for melasma in dark-skinned patients. J Cosmet Dermatol. 2020. PMID: 32947652.</li>
        <li>Hurley ME i wsp. Efficacy of glycolic acid peels in the treatment of melasma. Arch Dermatol. 2002. PMID: 12472345.</li>
        <li>Sitohang IBS i wsp. Trichloroacetic Acid Peeling for Treating Photoaging: A Systematic Review. Dermatol Res Pract. 2021. PMID: 34504524.</li>
        <li>Sarkar R i wsp. Chemical peels for melasma in dark-skinned patients. J Cutan Aesthet Surg. 2012. PMID: 23378706.</li>
        <li>Mar K i wsp. Treatment of Post-Inflammatory Hyperpigmentation in Skin of Colour: A Systematic Review. J Cutan Med Surg. 2024. PMID: 39075672.</li>
        <li>Lee SS i wsp. Noninvasive Cosmetic Treatments for Fitzpatrick IV-VI: A Narrative Review of Safety and Efficacy Guidelines. Plast Reconstr Surg. 2026. PMID: 41884758.</li>
        <li>Nikalji N i wsp. Complications of medium depth and deep chemical peels. J Cutan Aesthet Surg. 2012. PMID: 23378707.</li>
        <li>Marçon CR. Phenol in dermatology: updated evidence on efficacy and safety. An Bras Dermatol. 2025. PMID: 40857991.</li>
        <li>Waldman A i wsp. ASDS Guidelines Task Force: Consensus Recommendations Regarding the Safety of Lasers, Dermabrasion, Chemical Peels, Energy Devices, and Skin Surgery During and After Isotretinoin Use. Dermatol Surg. 2017. PMID: 28498204.</li>
        <li>Liu F i wsp. Efficacy and safety of CO2 fractional laser versus Er:YAG fractional laser in the treatment of atrophic acne scar. J Cosmet Dermatol. 2024. PMID: 38733085.</li>
        <li>Atiyeh BS i wsp. Microneedling: Percutaneous Collagen Induction (PCI) Therapy for Management of Scars and Photoaged Skin. Aesthetic Plast Surg. 2021. PMID: 32875437.</li>
        <li>El-Domyati M i wsp. Microdermabrasion: a clinical, histometric, and histopathologic study. J Cosmet Dermatol. 2016. PMID: 27357600.</li>
      </ol>
    ),
  },
];

export default function PilingiMedycznePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Pilingi medyczne Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Kontrolowane złuszczanie skóry kwasami, dobierane do problemu i fototypu. Peeling medyczny we Wrocławiu wykonuje lekarz po konsultacji."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/pilingi-medyczne"
    />
  );
}
