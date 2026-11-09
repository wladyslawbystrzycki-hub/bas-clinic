import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Peptyd BPC-157 Wrocław - fakty, status, dowody',
  description:
    'Peptyd BPC-157 we Wrocławiu: badania na zwierzętach i u ludzi, status prawny i antydopingowy (WADA S0), drogi podania, ryzyka. Decyzja po konsultacji lekarza.',
  path: '/terapie-peptydowe/bpc-157/',
});

const SERVICE = getServiceBySlug('terapie-peptydowe/bpc-157');

const BREADCRUMBS = [
  { label: 'Terapie peptydowe', href: '/terapie-peptydowe/' },
  { label: SERVICE.name },
];

const EXPERT_INFO = [
  {
    title: 'Peptyd BPC-157 we Wrocławiu - czym jest i skąd pochodzi',
    tocLabel: 'Czym jest BPC-157',
    content: (
      <>
        <p><strong>BPC-157</strong> (Body Protection Compound 157) to syntetyczny pentadekapeptyd, czyli łańcuch 15 aminokwasów, którego sekwencja pochodzi z białka obecnego w ludzkim soku żołądkowym. Nie jest hormonem ani sterydem. Od lat 90. bada go zespół Predraga Sikirića z Uniwersytetu w Zagrzebiu, niemal wyłącznie na szczurach. W żadnym kraju nie jest zarejestrowanym lekiem.</p>
        <p>Peptyd pozostaje stabilny w kwaśnym środowisku żołądka, co odróżnia go od większości peptydów rozkładanych w przewodzie pokarmowym. Z tego powodu w modelach zwierzęcych podawano go zarówno w iniekcjach, jak i doustnie. W latach 90. w Chorwacji prowadzono badania kliniczne preparatu o kodzie PL 14736 w nieswoistych zapaleniach jelit, ale ich wyników nigdy nie opublikowano w pełnej formie.</p>
        <h3>Co oznacza „substancja eksperymentalna”</h3>
        <p>BPC-157 nie przeszedł ścieżki badań klinicznych: nie ma badań fazy II ani III, ustalonej dawki dla ludzi ani preparatu o jakości farmaceutycznej. Wiedza o jego działaniu pochodzi prawie w całości z prac na gryzoniach. W Bas Clinic we Wrocławiu mówimy o tym pacjentowi na pierwszej konsultacji, zanim padnie pytanie o dawkę.</p>
      </>
    ),
  },
  {
    title: 'Postulowane mechanizmy działania BPC-157 - dane z modeli zwierzęcych',
    tocLabel: 'Mechanizmy (zwierzęta)',
    content: (
      <>
        <p>Mechanizmy działania BPC-157 opisano w modelach zwierzęcych i hodowlach komórkowych. Żaden nie został potwierdzony u ludzi, dlatego poniższa lista to hipotezy badawcze, a nie opis działania leku.</p>
        <h3>Główne hipotezy z badań na szczurach</h3>
        <ul>
          <li><strong>Angiogeneza i VEGF</strong>: angiogeneza to tworzenie nowych naczyń krwionośnych, a VEGF to białko, które je pobudza. W uszkodzonych ścięgnach i mięśniach BPC-157 zwiększał liczbę receptorów dla VEGF i przyspieszał powstawanie naczyń w tkance o słabym ukrwieniu (Seiwerth i wsp., 2018).</li>
          <li><strong>Tlenek azotu (NO)</strong>: peptyd wpływał w obie strony na układ tlenku azotu, cząsteczki regulującej rozszerzanie naczyń, krzepnięcie i ochronę błony śluzowej żołądka (Sikirić i wsp., 2014).</li>
          <li><strong>Szlaki wzrostu komórek</strong>: aktywacja genu Egr-1 oraz szlaków FAK-paksylina i JAK2 w fibroblastach ścięgna, czyli komórkach produkujących kolagen, co ma tłumaczyć ich szybszą wędrówkę do miejsca urazu.</li>
          <li><strong>Układ dopaminergiczny i serotoninergiczny</strong>: w testach behawioralnych BPC-157 łagodził skutki nadmiaru lub blokady dopaminy; stąd hipotezy o działaniu na oś jelito-mózg (Sikirić i wsp., 2016).</li>
        </ul>
        <p>Jeden fakt zasługuje na uwagę: większość tych prac pochodzi z jednego ośrodka, a niezależnych replikacji jest niewiele. Ten sam efekt tworzenia nowych naczyń, który w teorii sprzyja gojeniu, budzi pytania o bezpieczeństwo u osób z nowotworem. Wracamy do tego w części o przeciwwskazaniach.</p>
      </>
    ),
  },
  {
    title: 'Stan dowodów u ludzi - co naprawdę wiadomo o BPC-157',
    tocLabel: 'Dowody u ludzi',
    content: (
      <>
        <p>Badań BPC-157 na ludziach jest bardzo mało. Przegląd McGuire&apos;a i wsp. z 2025 roku zidentyfikował trzy opublikowane prace, wszystkie bez grupy kontrolnej, czyli bez porównania z osobami, które peptydu nie dostały, łącznie na mniej niż 30 osobach. Nie istnieje ani jedno randomizowane badanie kliniczne, czyli takie, w którym uczestnicy są losowo przydzielani do preparatu albo do placebo.</p>
        <h3>Publikacje z udziałem ludzi</h3>
        <ul>
          <li>Retrospektywna, czyli odtwarzana z przeszłości, ankieta telefoniczna 16 pacjentów po podaniu BPC-157 do stawu kolanowego w bólu kolana (Lee i Padgett, 2021): bez grupy kontrolnej, bez skal klinicznych, bez obrazowania.</li>
          <li>Badanie pilotażowe bezpieczeństwa wlewu dożylnego u 2 osób (Lee i Burgess, 2025): brak zmian w badaniach laboratoryjnych po dwóch podaniach, co nie pozwala wnioskować o bezpieczeństwie w populacji.</li>
        </ul>
        <h3>Stan dowodów według obszaru</h3>
        <table>
          <tbody>
            <tr>
              <th>Obszar</th>
              <th>Dane zwierzęce</th>
              <th>Dane ludzkie</th>
              <th>Wniosek</th>
            </tr>
            <tr>
              <td>Ścięgna, więzadła, mięśnie</td>
              <td>liczne prace na szczurach: szybsze gojenie przeciętego ścięgna Achillesa, więzadła pobocznego, zmiażdżonego mięśnia</td>
              <td>jedna retrospektywna seria przypadków (kolano)</td>
              <td>obiecujące u gryzoni, u ludzi niepotwierdzone</td>
            </tr>
            <tr>
              <td>Przewód pokarmowy</td>
              <td>ochrona śluzówki przed lekami przeciwbólowymi z grupy NLPZ i alkoholem, gojenie przetok i zespoleń jelitowych</td>
              <td>badania w nieswoistych zapaleniach jelit z lat 90. bez opublikowanych wyników</td>
              <td>brak dowodów klinicznych</td>
            </tr>
            <tr>
              <td>Gojenie ran i skóry</td>
              <td>szybsze zamykanie ran, oparzeń i owrzodzeń</td>
              <td>brak</td>
              <td>tylko dane przedkliniczne, czyli sprzed badań na ludziach</td>
            </tr>
            <tr>
              <td>Układ nerwowy</td>
              <td>modele urazu rdzenia, nerwów obwodowych i encefalopatii</td>
              <td>brak</td>
              <td>tylko dane przedkliniczne</td>
            </tr>
          </tbody>
        </table>
        <p>Przegląd zakresowy w American Journal of Sports Medicine (Tewari i wsp., 2026) podsumowuje to wprost: korzyści opisywane w reklamach peptydów nie mają potwierdzenia w badaniach na ludziach i peptydy nie powinny zastępować standardowego leczenia ortopedycznego.</p>
      </>
    ),
  },
  {
    title: 'Status prawny i antydopingowy BPC-157 w Polsce, UE i WADA',
    tocLabel: 'Status prawny i WADA',
    content: (
      <>
        <p>BPC-157 nie jest dopuszczony do obrotu jako lek w Polsce, w Unii Europejskiej (EMA, Europejska Agencja Leków) ani w Stanach Zjednoczonych (FDA, amerykański urząd rejestracji leków). Nie jest też suplementem diety. Od 1 stycznia 2022 roku podlega zakazowi WADA w każdym czasie, w kategorii S0 (substancje niezatwierdzone).</p>
        <h3>Polska i Unia Europejska</h3>
        <p>Żaden urząd rejestracyjny nie ocenił jakości, skuteczności ani bezpieczeństwa BPC-157. W Polsce peptyd bywa sprzedawany w internecie jako odczynnik do badań („research chemical”) z zastrzeżeniem, że nie jest przeznaczony dla ludzi. Taki produkt nie podlega nadzorowi farmaceutycznemu i nie daje gwarancji czystości ani dawki deklarowanej na etykiecie.</p>
        <h3>WADA i sport</h3>
        <p>Kategoria S0 obejmuje każdą substancję farmakologiczną bez dopuszczenia do stosowania u ludzi przez jakikolwiek urząd, więc lista nie musi wymieniać BPC-157 z nazwy. Agencje antydopingowe (USADA, Sport Integrity Australia) wprost wskazują go jako zabroniony od 2022 roku i podkreślają, że nie ma podstaw do wyłączenia terapeutycznego (TUE), bo substancja nie jest lekiem. Sportowiec objęty kontrolą antydopingową, zawodowy lub amatorski, nie powinien go stosować w ogóle. Laboratoria antydopingowe mają już metody wykrywania BPC-157 we krwi i w suchej kropli krwi.</p>
        <h3>FDA</h3>
        <p>We wrześniu 2023 roku FDA umieściła BPC-157 w kategorii 2 substancji do receptury aptecznej, wskazując ryzyko immunogenności, czyli reakcji układu odpornościowego na podany peptyd, zanieczyszczeń peptydowych i brak danych o bezpieczeństwie dla proponowanych dróg podania. W kwietniu 2026 roku wycofała go z tej kategorii, ale nie wpisała na listę substancji dopuszczonych do receptury, więc w USA status pozostaje nierozstrzygnięty. Ta zmiana nie wpływa na sytuację w Polsce.</p>
      </>
    ),
  },
  {
    title: 'Drogi podania BPC-157 i jakość dostępnych preparatów',
    tocLabel: 'Drogi podania i jakość',
    content: (
      <>
        <p>W badaniach na zwierzętach BPC-157 podawano podskórnie, domięśniowo, dootrzewnowo, doustnie i miejscowo. U ludzi opisano podanie dostawowe i dożylne u pojedynczych osób. Nie ma ustalonej dawki ani schematu dla człowieka; dawkowanie krążące w internecie to przeliczenie dawek z badań na szczurach.</p>
        <h3>Podskórnie czy doustnie</h3>
        <ul>
          <li><strong>Iniekcja podskórna</strong>: najczęściej opisywana droga w praktyce. Badanie u zwierząt wykazało okres półtrwania we krwi poniżej 30 minut, czyli po tym czasie znika połowa podanej dawki, co kłóci się z efektami biologicznymi trwającymi dni i pozostaje niewyjaśnione (Mateescu i wsp., 2026).</li>
          <li><strong>Doustnie</strong>: peptyd jest stabilny w soku żołądkowym, a u szczurów działał po podaniu do żołądka. Nikt nie zmierzył u ludzi biodostępności doustnej, czyli tego, jaka część połkniętej dawki trafia do krwi.</li>
        </ul>
        <h3>Jakość preparatów</h3>
        <p>Nie istnieje preparat BPC-157 o jakości farmaceutycznej zatwierdzony przez urząd rejestracyjny. Każdy dostępny produkt pochodzi spoza systemu kontroli leków. FDA zwracała uwagę na zanieczyszczenia peptydowe (skrócone lub zmodyfikowane łańcuchy z syntezy) i na trudność w potwierdzeniu tożsamości substancji czynnej. Lekarz w Bas Clinic omawia z pacjentem pochodzenie preparatu, dokumentację jego czystości (certyfikat analizy, czyli wynik badania danej serii preparatu) oraz ograniczenia tej dokumentacji. Preparat bez wiarygodnego certyfikatu nie zostanie podany.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo BPC-157 bywa rozważany, a dla kogo nie',
    tocLabel: 'Dla kogo i dla kogo nie',
    content: (
      <>
        <p>BPC-157 bywa rozważany u dorosłych z przewlekłym, opornym na standardowe leczenie uszkodzeniem ścięgna lub mięśnia, którzy po wyczerpaniu metod o udowodnionej skuteczności świadomie chcą spróbować substancji eksperymentalnej. Nie jest terapią pierwszego wyboru w żadnym wskazaniu.</p>
        <h3>Kiedy lekarz może podjąć rozmowę o BPC-157</h3>
        <ul>
          <li>przewlekła tendinopatia, czyli przeciążeniowe uszkodzenie ścięgna (łokieć tenisisty, ścięgno Achillesa, stożek rotatorów), po rehabilitacji i leczeniu ortopedycznym bez poprawy,</li>
          <li>uraz mięśnia u osoby nieobjętej kontrolą antydopingową,</li>
          <li>pacjent, który już stosuje peptyd na własną rękę i szuka nadzoru lekarskiego oraz badań kontrolnych.</li>
        </ul>
        <h3>Dla kogo BPC-157 nie jest opcją</h3>
        <ul>
          <li><strong>sportowcy</strong> podlegający kontroli antydopingowej, na każdym poziomie rywalizacji,</li>
          <li><strong>kobiety w ciąży i karmiące</strong>: brak jakichkolwiek danych,</li>
          <li><strong>osoby z aktywnym nowotworem lub nowotworem w wywiadzie</strong>: peptyd pobudza tworzenie nowych naczyń, a te mogą teoretycznie odżywiać guz. Zespół z Zagrzebia opisuje działanie przeciwnowotworowe w modelach zwierzęcych, ale to spór naukowy, nie dowód bezpieczeństwa,</li>
          <li>osoby poniżej 18 roku życia,</li>
          <li>pacjenci oczekujący, że peptyd zastąpi rehabilitację, operację lub leczenie choroby przewlekłej.</li>
        </ul>
        <p>Osobom, którym zależy na wsparciu regeneracji składnikami o lepiej udokumentowanym profilu bezpieczeństwa, lekarz częściej proponuje <Link href="/wlewy-witaminowe/kroplowka-sport-i-regeneracja/">kroplówkę sport i regeneracja</Link>.</p>
      </>
    ),
  },
  {
    title: 'Konsultacja i procedura podania BPC-157 w Bas Clinic we Wrocławiu',
    tocLabel: 'Konsultacja i procedura',
    content: (
      <>
        <p>W Bas Clinic przy {CLINIC.address.street} we Wrocławiu BPC-157 nie jest zabiegiem, który można wybrać przy rejestracji. Pierwszym i obowiązkowym etapem jest konsultacja lekarska, po której lekarz może odmówić podania.</p>
        <h3>Etapy</h3>
        <ol>
          <li><strong>Konsultacja lekarska</strong>: wywiad, przegląd dotychczasowego leczenia urazu, choroby przewlekłe, leki, wywiad onkologiczny, status sportowy. Lekarz omawia stan dowodów, status prawny i antydopingowy oraz brak badań na ludziach.</li>
          <li><strong>Badania</strong>: zależnie od wywiadu morfologia, CRP, próby wątrobowe, kreatynina, glukoza; przy wątpliwościach onkologicznych dodatkowa diagnostyka przed decyzją.</li>
          <li><strong>Świadoma zgoda</strong>: pisemna, z zapisem, że substancja nie jest zarejestrowanym lekiem, że nie ma dowodów skuteczności u ludzi i że ryzyka długoterminowe są nieznane.</li>
          <li><strong>Podanie</strong>: jeśli lekarz zakwalifikuje pacjenta, ustala drogę, dawkę i czas trwania terapii indywidualnie; iniekcje wykonuje personel medyczny w gabinecie.</li>
          <li><strong>Kontrola</strong>: wizyta kontrolna i powtórzenie badań; przy działaniach niepożądanych terapia jest przerywana.</li>
        </ol>
        <p>Lekarz odmówi, gdy ryzyko przewyższa potencjalną korzyść lub gdy pacjent podlega kontroli antydopingowej. Odmowa nie jest wyjątkiem, tylko częścią procedury.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania do BPC-157 i ryzyka, których nie znamy',
    tocLabel: 'Przeciwwskazania i ryzyka',
    content: (
      <>
        <p>Lista przeciwwskazań do BPC-157 opiera się na rozumowaniu farmakologicznym, a nie na danych klinicznych, bo takich danych nie ma. To samo dotyczy działań niepożądanych: „brak zgłoszeń” oznacza brak badań, a nie brak ryzyka.</p>
        <h3>Przeciwwskazania</h3>
        <ul>
          <li>aktywny nowotwór lub nowotwór w wywiadzie (peptyd pobudza tworzenie naczyń krwionośnych),</li>
          <li>ciąża, karmienie piersią, planowanie ciąży,</li>
          <li>wiek poniżej 18 lat,</li>
          <li>udział w sporcie objętym kontrolą antydopingową,</li>
          <li>choroby autoimmunologiczne i leczenie immunosupresyjne: brak danych o wpływie na układ odpornościowy,</li>
          <li>zaburzenia krzepnięcia i leki przeciwzakrzepowe: peptyd wpływa na układ NO i krzepnięcie w modelach zwierzęcych,</li>
          <li>nadwrażliwość na składniki preparatu.</li>
        </ul>
        <h3>Ryzyka, których nie da się dziś wykluczyć</h3>
        <ul>
          <li><strong>Immunogenność</strong>: syntetyczny peptyd podany w iniekcji może wywołać reakcję układu odpornościowego; FDA wskazywała to ryzyko wprost.</li>
          <li><strong>Zanieczyszczenia syntezy</strong>: niepełne łańcuchy peptydowe, rozpuszczalniki, endotoksyny (bakteryjne zanieczyszczenia wywołujące gorączkę) w preparatach bez kontroli jakości.</li>
          <li><strong>Interakcje z lekami</strong>: nieprzebadane.</li>
          <li><strong>Efekty odległe</strong>: brak obserwacji dłuższych niż kilka miesięcy u ludzi.</li>
        </ul>
        <p>Objawy opisywane w internecie po iniekcjach (ból i zaczerwienienie w miejscu wkłucia, nudności, zawroty głowy, zmęczenie) pochodzą z relacji użytkowników, nie z badań.</p>
      </>
    ),
  },
  {
    title: 'Realistyczne oczekiwania wobec terapii BPC-157',
    tocLabel: 'Realistyczne oczekiwania',
    content: (
      <>
        <p>Uczciwa odpowiedź na pytanie „czy BPC-157 mi pomoże” brzmi: nie wiadomo. Efekty opisywane u szczurów nie przekładają się automatycznie na ludzi, a wiele substancji skutecznych u gryzoni zawiodło w badaniach klinicznych.</p>
        <h3>Czego nie obiecujemy</h3>
        <ul>
          <li>że ścięgno zagoi się szybciej niż przy samej rehabilitacji,</li>
          <li>że peptyd zastąpi operację lub fizjoterapię,</li>
          <li>że działanie jest pozbawione skutków ubocznych,</li>
          <li>że poprawa, jeśli wystąpi, wynika z peptydu, a nie z równolegle prowadzonego leczenia, upływu czasu lub efektu placebo.</li>
        </ul>
        <p>Ostatni punkt wymaga podkreślenia. Bóle ścięgien i mięśni mają naturalną tendencję do ustępowania, a samo oczekiwanie poprawy zmniejsza odczuwanie bólu. Przegląd w Sports Medicine (Mendias i Awan, 2026) wskazuje placebo jako prawdopodobny składnik relacji o skuteczności peptydów, wzmacnianych przez media społecznościowe. Podstawą pozostają metody o udokumentowanej skuteczności: rehabilitacja, trening ekscentryczny w tendinopatiach (ćwiczenia z kontrolowanym wydłużaniem mięśnia pod obciążeniem), leczenie ortopedyczne. Peptyd może być co najwyżej dodatkiem, o którym pacjent decyduje świadomie.</p>
      </>
    ),
  },
  {
    title: 'Cena terapii BPC-157 we Wrocławiu i rejestracja na konsultację',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Cena terapii BPC-157 w Bas Clinic we Wrocławiu jest ustalana po konsultacji lekarskiej. Nie podajemy stałej kwoty, bo zakres badań, droga podania, liczba iniekcji i czas trwania terapii zależą od wyniku kwalifikacji, a lekarz może pacjenta nie zakwalifikować.</p>
        <h3>Co składa się na wycenę</h3>
        <ul>
          <li>konsultacja lekarska (płatna niezależnie od decyzji o podaniu),</li>
          <li>badania laboratoryjne przed terapią i kontrolne,</li>
          <li>preparat i materiały do iniekcji,</li>
          <li>wizyty kontrolne.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Wizytę konsultacyjną umówisz telefonicznie pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>. Pozostałe terapie peptydowe (<Link href="/terapie-peptydowe/ghk-cu/">GHK-Cu</Link>, <Link href="/terapie-peptydowe/peptydy-osi-gh/">peptydy osi GH</Link>) oraz <Link href="/wlewy-witaminowe/">wlewy witaminowe</Link> opisujemy na osobnych stronach; ceny wlewów znajdziesz w <Link href="/cennik/">cenniku</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. BPC-157 jest substancją eksperymentalną bez rejestracji jako lek; decyzję o jej zastosowaniu podejmuje lekarz wspólnie z pacjentem po omówieniu ograniczeń wiedzy i statusu prawnego.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Sikirić P. i wsp. Stable gastric pentadecapeptide BPC 157: novel therapy in gastrointestinal tract. Current Pharmaceutical Design 2011; 17(16): 1612-1632. PMID 21548867.</li>
        <li>Sikirić P. i wsp. Stable gastric pentadecapeptide BPC 157-NO-system relation. Current Pharmaceutical Design 2014; 20(7): 1126-1135. PMID 23755725.</li>
        <li>Sikirić P. i wsp. Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications. Current Neuropharmacology 2016; 14(8): 857-865. PMID 27138887.</li>
        <li>Seiwerth S. i wsp. BPC 157 and Standard Angiogenic Growth Factors. Gastrointestinal Tract Healing, Lessons from Tendon, Ligament, Muscle and Bone Healing. Current Pharmaceutical Design 2018; 24(18): 1972-1989. PMID 29998800.</li>
        <li>Sikirić P. i wsp. Novel Cytoprotective Mediator, Stable Gastric Pentadecapeptide BPC 157. Vascular Recruitment and Gastrointestinal Tract Healing. Current Pharmaceutical Design 2018; 24(18): 1990-2001. PMID 29879879.</li>
        <li>Gwyer D. i wsp. Gastric pentadecapeptide body protection compound BPC 157 and its role in accelerating musculoskeletal soft tissue healing. Cell and Tissue Research 2019; 377(2): 153-159. PMID 30915550.</li>
        <li>Lee E., Padgett B. Intra-Articular Injection of BPC 157 for Multiple Types of Knee Pain. Alternative Therapies in Health and Medicine 2021; 27(4): 8-13. PMID 34324435.</li>
        <li>Lee E., Burgess K. Safety of Intravenous Infusion of BPC157 in Humans: A Pilot Study. Alternative Therapies in Health and Medicine 2025; 31(5): 20-24. PMID 40131143.</li>
        <li>Józwiak M. i wsp. Multifunctionality and Possible Medical Application of the BPC 157 Peptide: Literature and Patent Review. Pharmaceuticals 2025; 18(2): 185. PMID 40005999.</li>
        <li>McGuire F.P. i wsp. Regeneration or Risk? A Narrative Review of BPC-157 for Musculoskeletal Healing. Current Reviews in Musculoskeletal Medicine 2025; 18(12): 611-619. PMID 40789979.</li>
        <li>Mateescu D.M. i wsp. BPC-157 as an Investigational Peptide Therapeutic: Biopharmaceutical Challenges, Formulation Strategies, and Translational Development Barriers. Pharmaceutics 2026; 18(5): 625. PMID 42198317.</li>
        <li>Tewari K. i wsp. Peptide Supplements and Their Therapeutic Applications in Sports Medicine. American Journal of Sports Medicine 2026. PMID 42578445.</li>
        <li>Mendias C.L., Awan T.M. Safety and Efficacy of Approved and Unapproved Peptide Therapies for Musculoskeletal Injuries and Athletic Performance. Sports Medicine 2026; 56(8): 1921-1935. PMID 41966639.</li>
        <li>World Anti-Doping Agency. The Prohibited List 2022 (obowiązuje od 1 stycznia 2022) i wydania kolejne, kategoria S0: Non-Approved Substances.</li>
        <li>U.S. Anti-Doping Agency. BPC-157: Experimental Peptide Creates Risk for Athletes (komunikat dla sportowców).</li>
        <li>U.S. Food and Drug Administration. Certain Bulk Drug Substances for Use in Compounding that May Present Significant Safety Risks; wpis BPC-157 (wrzesień 2023, aktualizacja kwiecień 2026).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Czy BPC-157 jest legalny w Polsce?',
    answer:
      'BPC-157 nie jest w Polsce zarejestrowanym lekiem ani suplementem diety. Bywa sprzedawany jako odczynnik do badań z zastrzeżeniem, że nie jest przeznaczony dla ludzi. Podanie pacjentowi jest możliwe wyłącznie na odpowiedzialność lekarza, po świadomej zgodzie i po omówieniu braku rejestracji oraz braku badań na ludziach.',
  },
  {
    question: 'Czy BPC-157 jest na liście substancji zabronionych WADA?',
    answer:
      'Tak. Od 1 stycznia 2022 roku BPC-157 podlega zakazowi WADA w każdym czasie, w kategorii S0 (substancje niezatwierdzone). Nie ma możliwości uzyskania wyłączenia terapeutycznego, bo substancja nie jest lekiem. Sportowcy objęci kontrolą antydopingową nie powinni go stosować.',
  },
  {
    question: 'Czy są badania BPC-157 na ludziach?',
    answer:
      'Opublikowano tylko trzy niewielkie prace bez grupy kontrolnej, łącznie na mniej niż 30 osobach, w tym retrospektywną ankietę 16 pacjentów z bólem kolana i badanie bezpieczeństwa wlewu u 2 osób. Nie ma żadnego randomizowanego badania klinicznego. Niemal cała wiedza o BPC-157 pochodzi z badań na szczurach.',
  },
  {
    question: 'Jak podaje się BPC-157?',
    answer:
      'W praktyce najczęściej podskórnie, rzadziej doustnie; w pojedynczych doniesieniach dostawowo i dożylnie. Nie istnieje ustalona dawka dla ludzi. W Bas Clinic drogę i dawkę ustala lekarz indywidualnie po kwalifikacji, a iniekcje wykonuje personel medyczny w gabinecie.',
  },
  {
    question: 'Czy lekarz może odmówić podania BPC-157?',
    answer:
      'Tak, i jest to część procedury. Lekarz odmawia, gdy ryzyko przewyższa potencjalną korzyść, w szczególności przy nowotworze w wywiadzie, w ciąży, u osób poniżej 18 lat oraz u sportowców podlegających kontroli antydopingowej. Odmawia także, gdy preparat nie ma wiarygodnego certyfikatu analizy.',
  },
  {
    question: 'Gdzie we Wrocławiu skonsultować terapię BPC-157?',
    answer: `Konsultację w sprawie BPC-157 prowadzi lekarz w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}. Cena terapii jest ustalana po konsultacji.`,
  },
];

export default function Bpc157Page() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Peptyd BPC-157 Wrocław"
      heroSubtitle="Terapie peptydowe"
      heroDescription="Syntetyczny peptyd badany niemal wyłącznie na zwierzętach, bez rejestracji jako lek i zabroniony w sporcie (WADA S0). W Bas Clinic we Wrocławiu wyłącznie po konsultacji lekarskiej i świadomej zgodzie pacjenta."
      slug="terapie-peptydowe/bpc-157"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
