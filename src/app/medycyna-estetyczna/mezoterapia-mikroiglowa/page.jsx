import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Mezoterapia mikroigłowa Wrocław - microneedling',
  description: 'Mezoterapia mikroigłowa (microneedling) we Wrocławiu: mikronakłucia pobudzające produkcję kolagenu, redukcja blizn i zmarszczek. Zabieg wykonuje lekarz.',
  path: '/medycyna-estetyczna/mezoterapia-mikroiglowa/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Mezoterapia mikroigłowa' },
];

const FAQ = [
  {
    question: 'Czym różni się mezoterapia mikroigłowa od mezoterapii igłowej (iniekcyjnej)?',
    answer: 'Mezoterapia mikroigłowa (microneedling) to mechaniczna indukcja kolagenu: sterylne mikronakłucia uruchamiają kaskadę gojenia i pobudzają skórę do produkcji kolagenu oraz elastyny. Mezoterapia igłowa polega na wstrzyknięciu w skórę koktajlu witamin i aminokwasów. To dwie różne metody o odmiennym mechanizmie, które bywają ze sobą łączone.',
  },
  {
    question: 'Ile zabiegów mezoterapii mikroigłowej potrzeba, aby zobaczyć efekty?',
    answer: 'Mezoterapia mikroigłowa zwykle wymaga serii około 4-6 zabiegów w odstępach 2-4 tygodni; w badaniach stosowano od 3 do 8 sesji. Pierwszą poprawę przy bliznach widać orientacyjnie po trzech zabiegach, jednak efekt jest progresywny i rozwija się w kolejnych tygodniach po serii, w miarę odbudowy kolagenu.',
  },
  {
    question: 'Czy mezoterapia mikroigłowa usuwa zmarszczki i blizny po trądziku?',
    answer: 'Mezoterapia mikroigłowa spłyca drobne zmarszczki, poprawia teksturę i jędrność oraz zmniejsza widoczność atroficznych blizn potrądzikowych. Najlepiej reagują blizny rolujące, słabiej blizny typu ice-pick. To poprawa wyglądu skóry, a nie całkowite usunięcie zmarszczek czy blizn, dlatego ważne są realistyczne oczekiwania ustalone z lekarzem.',
  },
  {
    question: 'Jak długo trwa rekonwalescencja po mezoterapii mikroigłowej?',
    answer: 'Rekonwalescencja po mezoterapii mikroigłowej jest krótka: rumień, lekki obrzęk i uczucie ściągnięcia ustępują zwykle w ciągu kilku dni (średnio od trzech do czterech, rzadziej do tygodnia). Przez 24-72 godziny warto unikać makijażu, sauny, basenu, intensywnego wysiłku i słońca oraz stosować łagodną pielęgnację i wysoki filtr SPF.',
  },
  {
    question: 'Jakie są przeciwwskazania do mezoterapii mikroigłowej?',
    answer: 'Przeciwwskazania do mezoterapii mikroigłowej to między innymi czynna infekcja skóry lub opryszczka w miejscu zabiegu, czynny trądzik zapalny, skłonność do bliznowców, immunosupresja oraz zaostrzona łuszczyca lub wyprysk. Ostrożności wymagają zaburzenia krzepnięcia i leki przeciwzakrzepowe, ciemne fototypy skóry oraz ciąża i karmienie. Kwalifikację zawsze przeprowadza lekarz.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać mezoterapię mikroigłową?',
    answer: `Mezoterapię mikroigłową wykonujemy w Bas Clinic przy ${CLINIC.address.street} we Wrocławiu (${CLINIC.address.city}). Zabieg przeprowadza lekarz po konsultacji kwalifikacyjnej. Termin umówisz telefonicznie pod numerem ${CLINIC.phone} w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest mezoterapia mikroigłowa i czym różni się od mezoterapii igłowej',
    tocLabel: 'Czym jest',
    content: (
      <>
        <p><strong>Mezoterapia mikroigłowa</strong>, nazywana też mikronakłuwaniem lub microneedlingiem, to zabieg mechanicznej indukcji kolagenu. Cienkie, sterylne igły wykonują w skórze setki kontrolowanych mikronakłuć, które pobudzają ją do naturalnej odbudowy, czyli wytwarzania kolagenu i elastyny.</p>
        <p>Sama nazwa bywa myląca, dlatego warto rozróżnić dwie metody. Mezoterapia mikroigłowa działa mechanicznie: bodźcem jest samo nakłucie, a nie wstrzyknięty preparat. <Link href="/medycyna-estetyczna/mezoterapia-iglowa/">Mezoterapia igłowa (iniekcyjna)</Link> polega natomiast na podaniu w skórę właściwą koktajlu witamin, aminokwasów i kwasu hialuronowego. Obie bywają łączone, ale opierają się na innym mechanizmie i mają inny zakres udokumentowanej skuteczności.</p>
        <p>Microneedling opisuje się w piśmiennictwie jako mechaniczną indukcję kolagenu (CIT) lub przezskórną indukcję kolagenu (PCI). Zabieg wykonuje się ręcznym wałkiem (dermaroller) albo, częściej w gabinecie, automatycznym urządzeniem typu dermapen, które pozwala precyzyjnie ustawić głębokość pracy. W naszej klinice we Wrocławiu zabieg planuje i wykonuje lekarz po konsultacji.</p>
      </>
    ),
  },
  {
    title: 'Jak działa mikronakłuwanie: kaskada gojenia i indukcja kolagenu',
    tocLabel: 'Jak działa',
    content: (
      <>
        <p>Mikronakłuwanie działa, ponieważ kontrolowany mikrouraz uruchamia naturalny proces gojenia skóry. Każde nakłucie tworzy mikrokanalik, który zamyka się w ciągu kilkudziesięciu minut, a w odpowiedzi skóra rozpoczyna przebudowę i syntezę nowego kolagenu.</p>
        <p>Proces przebiega w trzech fazach gojenia. Najpierw z uszkodzonych naczyń i płytek krwi uwalniają się <strong>czynniki wzrostu</strong> (m.in. TGF-beta, PDGF, VEGF i EGF), które aktywują fibroblasty. Następnie powstaje rusztowanie z fibronektyny, na którym odkłada się kolagen typu III, z czasem przebudowywany w trwalszy kolagen typu I. To zjawisko nazywa się neokolagenozą.</p>
        <p>Mechanizm potwierdzają badania histologiczne. W skórze ze zmianami fotostarzeniowymi po serii zabiegów wykazano istotny wzrost zawartości kolagenu typu I, III i VII oraz tropoelastyny (El-Domyati i wsp., 2015). Naskórek pozostaje przy tym względnie nienaruszony, co odróżnia microneedling od metod ablacyjnych, takich jak laser frakcyjny.</p>
        <h3>Mikrokanaliki a wchłanianie substancji aktywnych</h3>
        <p>Powstałe mikrokanaliki przejściowo zwiększają przepuszczalność naskórka, dlatego po nakłuwaniu na skórę nakłada się serum, najczęściej z kwasem hialuronowym lub witaminą C. Bariera naskórkowa odbudowuje się jednak szybko, a dostarczenie składników aktywnych jest uzupełnieniem, a nie głównym mechanizmem działania zabiegu.</p>
      </>
    ),
  },
  {
    title: 'Na co pomaga mezoterapia mikroigłowa?',
    tocLabel: 'Wskazania',
    content: (
      <>
        <p>Mezoterapia mikroigłowa sprawdza się przede wszystkim w poprawie jakości i tekstury skóry oraz w redukcji blizn i rozstępów. To jeden z lepiej przebadanych zabiegów stymulujących, choć siła dowodów różni się w zależności od wskazania.</p>
        <h3>Odmłodzenie i poprawa jakości skóry</h3>
        <p>W odmładzaniu skóry zabieg spłyca drobne zmarszczki oraz poprawia teksturę, jędrność i koloryt. W badaniach nad rewitalizacją twarzy najczęściej ocenianymi efektami były spłycenie zmarszczek, poprawa tekstury i redukcja oznak fotostarzenia, przy wysokiej satysfakcji pacjentów. Microneedling pomaga też zmniejszyć widoczność rozszerzonych porów.</p>
        <h3>Blizny potrądzikowe i rozstępy</h3>
        <p>Najlepiej udokumentowanym wskazaniem są atroficzne blizny potrądzikowe. Przegląd systematyczny badań z randomizacją potwierdził skuteczność microneedlingu w tym wskazaniu, z pierwszą poprawą obserwowaną już po około trzech sesjach (Sitohang i wsp., 2021). Najlepiej reagują blizny rolujące, słabiej blizny typu boxcar, a najtrudniejsze pozostają wąskie blizny ice-pick. Zabieg stosuje się również w rozstępach białych (striae alba), gdzie bywa porównywalny z laserem frakcyjnym przy niższym koszcie. Zagadnienie wypadania włosów omawiamy osobno na stronie <Link href="/medycyna-estetyczna/mezoterapia-skory-glowy/">mezoterapii skóry głowy</Link>.</p>
      </>
    ),
  },
  {
    title: 'Mikroigłowa a igłowa, RF, laser i peeling - porównanie metod',
    tocLabel: 'Porównanie metod',
    content: (
      <>
        <p>Mezoterapię mikroigłową łatwo pomylić z innymi zabiegami poprawiającymi jakość skóry, choć każdy z nich działa inaczej. Poniższe zestawienie porządkuje podstawowe różnice w mechanizmie, rekonwalescencji i sile dowodów.</p>
        <table>
          <tbody>
            <tr>
              <th>Metoda</th>
              <th>Zasada działania</th>
              <th>Rekonwalescencja</th>
              <th>Siła dowodów</th>
            </tr>
            <tr>
              <td>Mezoterapia mikroigłowa</td>
              <td>Mechaniczne mikronakłucia, indukcja kolagenu</td>
              <td>Krótka (kilka dni)</td>
              <td>Umiarkowana</td>
            </tr>
            <tr>
              <td>Mezoterapia igłowa (iniekcyjna)</td>
              <td>Iniekcja koktajlu witamin i aminokwasów</td>
              <td>Krótka</td>
              <td>Ograniczona</td>
            </tr>
            <tr>
              <td>Microneedling z RF</td>
              <td>Mikronakłucia oraz energia o częstotliwości radiowej (ciepło)</td>
              <td>Kilka dni</td>
              <td>Umiarkowana</td>
            </tr>
            <tr>
              <td>Laser frakcyjny CO2</td>
              <td>Frakcyjna ablacja, fototermoliza</td>
              <td>Dłuższa</td>
              <td>Mocna</td>
            </tr>
            <tr>
              <td>Peeling chemiczny</td>
              <td>Złuszczanie warstw naskórka i skóry</td>
              <td>Zmienna</td>
              <td>Umiarkowana</td>
            </tr>
          </tbody>
        </table>
        <p>W bezpośrednich porównaniach przy bliznach potrądzikowych laser frakcyjny CO2 daje zwykle większą poprawę niż microneedling, ale kosztem dłuższej rekonwalescencji i wyższego ryzyka przebarwień pozapalnych, zwłaszcza u osób o ciemniejszej karnacji (Agrawal i wsp., 2024). Dlatego u pacjentów o wyższym fototypie mikronakłuwanie bywa bezpieczniejszym wyborem. Alternatywą o mocniejszych dowodach pozostaje <Link href="/medycyna-estetyczna/laserowe-usuwanie-blizn/">laserowe usuwanie blizn</Link>.</p>
        <h3>Kiedy warto dodać energię RF</h3>
        <p>Microneedling frakcyjny z radiofrekwencją (RF) dostarcza dodatkowo ciepło w głąb skóry właściwej, co silniej działa na wiotkość. W październiku 2025 roku amerykańska agencja FDA wydała jednak komunikat o poważnych powikłaniach po niektórych urządzeniach RF, co podkreśla znaczenie doświadczenia operatora i sprawdzonego sprzętu. Gdy głównym problemem jest odwodnienie i utrata blasku, alternatywą bywa nawilżający <Link href="/medycyna-estetyczna/skin-booster/">skin booster</Link>, a przy wiotkości i utracie gęstości rozważa się <Link href="/medycyna-estetyczna/stymulatory-tkankowe/">stymulatory tkankowe</Link>.</p>
      </>
    ),
  },
  {
    title: 'Przebieg zabiegu, znieczulenie i liczba sesji',
    tocLabel: 'Przebieg i seria',
    content: (
      <>
        <p>Zabieg mezoterapii mikroigłowej trwa zwykle kilkadziesiąt minut, a poprzedza go konsultacja, podczas której lekarz ocenia skórę i wyklucza przeciwwskazania. Na oczyszczoną skórę nakłada się krem znieczulający, dzięki czemu zabieg jest dobrze tolerowany.</p>
        <ol>
          <li>Oczyszczenie i dezynfekcja skóry oraz nałożenie kremu znieczulającego.</li>
          <li>Nakłuwanie urządzeniem dermapen, z głębokością igieł dobraną do wskazania.</li>
          <li>Aplikacja serum (np. z kwasem hialuronowym) oraz maski kojącej.</li>
        </ol>
        <h3>Dobór głębokości igieł</h3>
        <p>Głębokość nakłuć dobiera się indywidualnie: orientacyjnie 0,25-0,5 mm dla poprawy tekstury, 0,5-1,0 mm dla rewitalizacji i drobnych zmarszczek oraz 1,5-2,5 mm dla głębszych blizn. Większe głębokości powinien stosować wyłącznie przeszkolony operator, ponieważ wiążą się z wyższym ryzykiem. W badaniu nad bliznami głębokość 2,5 mm dała większą poprawę niż 1,5 mm.</p>
        <h3>Ile zabiegów mezoterapii mikroigłowej i jak często?</h3>
        <p>Mezoterapia mikroigłowa rzadko jest zabiegiem jednorazowym. Zwykle planuje się serię około 4-6 sesji w odstępach 2-4 tygodni, a następnie zabiegi podtrzymujące. Dokładny schemat zależy od wskazania i stanu skóry, dlatego ustala go lekarz. Nie ma jednej liczby zabiegów odpowiedniej dla każdego.</p>
      </>
    ),
  },
  {
    title: 'Efekty mezoterapii mikroigłowej: kiedy widoczne i jak długo się utrzymują?',
    tocLabel: 'Efekty i trwałość',
    content: (
      <>
        <p>Efekty mezoterapii mikroigłowej pojawiają się stopniowo i kumulują w trakcie serii. Skóra staje się gładsza, bardziej napięta i lepiej nawilżona, a blizny i drobne zmarszczki stają się mniej widoczne. Pełny rezultat rozwija się przez kolejne tygodnie i miesiące, w miarę dojrzewania nowego kolagenu.</p>
        <p>Trwałość efektu zależy od wskazania i pielęgnacji. Nowy kolagen może utrzymywać się długo, ale skóra wciąż się starzeje, dlatego zwykle zaleca się zabiegi podtrzymujące co 6-12 miesięcy. Microneedling nie zatrzymuje procesu starzenia, lecz poprawia kondycję skóry na pewien czas.</p>
        <h3>Realistyczne oczekiwania: czego zabieg nie zrobi</h3>
        <p>Uczciwa kwalifikacja obejmuje granice metody. Microneedling:</p>
        <ul>
          <li>zmniejsza widoczność blizn i rozstępów, ale ich całkowicie nie usuwa, a badania wykazują istotną, lecz częściową poprawę;</li>
          <li>nie przywróci utraconej objętości twarzy ani nie zastąpi <Link href="/medycyna-estetyczna/redukcja-zmarszczek-ha/">wypełniaczy z kwasem hialuronowym</Link>;</li>
          <li>nie cofnie wyraźnej wiotkości ani opadania tkanek;</li>
          <li>nie działa po jednym zabiegu i wymaga serii oraz podtrzymania.</li>
        </ul>
        <p>Skuteczność można zwiększyć, łącząc nakłuwanie z innymi metodami. Dodanie <Link href="/medycyna-estetyczna/osocze-bogatoplytkowe/">osocza bogatopłytkowego (PRP)</Link> poprawia wyniki w bliznach potrądzikowych w porównaniu z samym microneedlingiem.</p>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo, działania niepożądane i rekonwalescencja',
    tocLabel: 'Bezpieczeństwo',
    content: (
      <>
        <p>Mezoterapia mikroigłowa jest uznawana za zabieg o korzystnym profilu bezpieczeństwa, gdy wykonuje go wykwalifikowany personel w warunkach jałowych. Przegląd systematyczny obejmujący ponad tysiąc pacjentów wykazał, że działania niepożądane są najczęściej łagodne i przemijające (Gowda i wsp., 2021).</p>
        <p>Typowe, spodziewane reakcje to rumień, lekki obrzęk, uczucie ściągnięcia i punktowe krwawienie. Ustępują zwykle w ciągu kilku dni, średnio od trzech do czterech, rzadko utrzymując się do tygodnia.</p>
        <h3>Rzadsze i poważniejsze powikłania po microneedlingu</h3>
        <ul>
          <li><strong>Przebarwienia pozapalne</strong>, częstsze u osób o ciemniejszej karnacji (fototypy III-VI), są głównym powodem ostrożnego doboru parametrów.</li>
          <li><strong>Tram-track scarring</strong>, czyli linijne blizny powstające od nadmiernego nacisku lub kontaktowej alergii na nikiel.</li>
          <li>Reakcje ziarniniakowe i alergiczne, najczęściej związane z preparatami nakładanymi po nakłuwaniu, a nie z samą techniką.</li>
          <li>Reaktywacja opryszczki oraz, rzadko, zakażenia bakteryjne.</li>
        </ul>
        <p>Wiele cięższych powikłań opisano przy zabiegach łączonych (np. z agresywnymi substancjami aktywnymi) albo przy domowych wałkach dermaroller używanych bez zachowania sterylności. Dlatego zabieg w gabinecie, sterylnym sprzętem i pod kontrolą lekarza istotnie ogranicza ryzyko.</p>
        <h3>Kiedy zgłosić się do lekarza po zabiegu?</h3>
        <p>Skontaktuj się z nami, jeśli po zabiegu pojawi się obrzęk lub ból narastający zamiast ustępować, gorączka, sącząca się wydzielina, bolesne pęcherzyki układające się w skupiska albo twarde grudki utrzymujące się tygodniami.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania, kwalifikacja i cena we Wrocławiu',
    tocLabel: 'Przeciwwskazania i cena',
    content: (
      <>
        <p>Mezoterapia mikroigłowa nie jest dla każdego, a kwalifikację zawsze przeprowadza lekarz podczas konsultacji. Część przeciwwskazań jest bezwzględna, część ma charakter ostrożnościowy.</p>
        <h3>Przeciwwskazania do mezoterapii mikroigłowej</h3>
        <ul>
          <li>czynna infekcja skóry lub opryszczka, brodawki oraz czynny trądzik zapalny w polu zabiegu;</li>
          <li>zaostrzona łuszczyca lub wyprysk (egzema) w obszarze nakłuwania;</li>
          <li>skłonność do bliznowców (keloidów) i blizn przerostowych;</li>
          <li>immunosupresja, w tym chemioterapia, oraz choroby nowotworowe;</li>
          <li>zaburzenia krzepnięcia i leczenie przeciwzakrzepowe (ostrożność, indywidualna ocena);</li>
          <li>ciemne fototypy skóry, ze względu na ryzyko przebarwień (ostrożność, nie zakaz);</li>
          <li>ciąża i karmienie piersią, z powodu braku wystarczających danych o bezpieczeństwie.</li>
        </ul>
        <p>Osobnej rozmowy z lekarzem wymaga niedawne leczenie izotretynoiną (lekiem na ciężki trądzik). Tradycyjnie zalecano odstęp około sześciu miesięcy, jednak część współczesnych danych tę ostrożność kwestionuje, dlatego decyzję podejmuje się indywidualnie. U osób ze skłonnością do opryszczki lekarz może zalecić profilaktykę przeciwwirusową.</p>
        <h3>Ile kosztuje mezoterapia mikroigłowa we Wrocławiu? Cena i NFZ</h3>
        <p>Mezoterapia mikroigłowa to zabieg estetyczny, nierefundowany przez NFZ, więc pacjent pokrywa jego koszt w całości. Cena zależy od leczonej okolicy (sama twarz albo twarz z szyją i dekoltem), liczby sesji w serii oraz ewentualnego dodania osocza bogatopłytkowego lub specjalistycznych preparatów. Aktualne widełki znajdziesz w <Link href="/cennik/">cenniku</Link>, a ostateczną wycenę przedstawiamy po <Link href="/rejestracja/">konsultacji kwalifikacyjnej</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O kwalifikacji do zabiegu, jego przebiegu i ewentualnych przeciwwskazaniach decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Jaiswal S, Jawade S. Microneedling in Dermatology. Cureus. 2024. PMID: 39449889.</li>
        <li>Tehrani L, Tashjian M, Mayrovitz HN. Physiological Mechanisms and Therapeutic Applications of Microneedling. Cureus. 2025. PMID: 40225445.</li>
        <li>El-Domyati M i wsp. Multiple microneedling sessions for minimally invasive facial rejuvenation: an objective assessment. Int J Dermatol. 2015. PMID: 26096653.</li>
        <li>Ablon G. Safety and Effectiveness of an Automated Microneedling Device in Improving the Signs of Aging Skin. J Clin Aesthet Dermatol. 2018. PMID: 30214664.</li>
        <li>Foppiani JA i wsp. Microneedling for Facial Rejuvenation: A Systematic Review. Aesthetic Plast Surg. 2025. PMID: 40542236.</li>
        <li>Sitohang IBS i wsp. Microneedling in the treatment of atrophic scars: a systematic review of randomised controlled trials. Int Wound J. 2021. PMID: 33538106.</li>
        <li>Shen YC i wsp. Microneedling Monotherapy for Acne Scar: A Systematic Review and Meta-Analysis of Randomized Controlled Trials. Aesthetic Plast Surg. 2022. PMID: 35426044.</li>
        <li>Agrawal K i wsp. Fractional CO2 Laser Versus Microneedling in Atrophic Acne Scars in Skin of Color. Indian Dermatol Online J. 2024. PMID: 39640445.</li>
        <li>Saki N i wsp. Microneedling versus CO2 fractional laser for striae alba: a randomised clinical trial. Dermatol Ther. 2022. PMID: 34796595.</li>
        <li>Kang C, Lu D. Combined Effect of Microneedling and Platelet-Rich Plasma for Acne Scars: A Meta-Analysis. Front Med (Lausanne). 2022. PMID: 35237616.</li>
        <li>El-Domyati M i wsp. Evaluation of microneedling depth of penetration in atrophic acne scars: a split-face study. Int J Dermatol. 2024. PMID: 38159109.</li>
        <li>Singh A, Yadav S. Microneedling: Advances and widening horizons. Indian Dermatol Online J. 2016. PMID: 27559496.</li>
        <li>Gowda A i wsp. A Systematic Review Examining the Potential Adverse Effects of Microneedling. J Clin Aesthet Dermatol. 2021. PMID: 33584968.</li>
        <li>Chu S, Foulad DP, Mesinkovska NA. Safety Profile for Microneedling: A Systematic Review. Dermatol Surg. 2021. PMID: 34448760.</li>
        <li>Litchman G i wsp. Microneedling. StatPearls. 2022. PMID: 29083607.</li>
        <li>Ramaut L i wsp. Microneedling: Where do we stand now? A systematic review. J Plast Reconstr Aesthet Surg. 2018. PMID: 28690124.</li>
        <li>Atiyeh BS, Abou Ghanem O. An Update on Facial Skin Rejuvenation: Effectiveness of Mesotherapy. J Craniofac Surg. 2021. PMID: 34516073.</li>
        <li>U.S. Food and Drug Administration. Microneedling devices, klasyfikacja klasy II (21 CFR 878.4430), 2018; komunikat bezpieczeństwa dotyczący mikroigłowej radiofrekwencji, 2025.</li>
      </ol>
    ),
  },
];

export default function MezoterapiaMikroiglowaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Mezoterapia mikroigłowa Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Stymulacja produkcji kolagenu mikronakłuciami. Naturalna regeneracja skóry z wykorzystaniem technologii dermapen."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/mezoterapia-mikroiglowa"
    />
  );
}
