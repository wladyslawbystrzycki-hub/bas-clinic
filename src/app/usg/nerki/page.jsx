import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'USG nerek Wrocław - cena i wskazania',
  description:
    'USG nerek we Wrocławiu: bezbolesne, nieinwazyjne badanie ultrasonograficzne nerek i dróg moczowych. Wykrywa kamicę, torbiele i wodonercze. Sprawdź wskazania.',
  path: '/usg/nerki/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG nerek' },
];

const RELATED = ['usg/jama-brzuszna', 'usg/prostata', 'usg/doppler'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG nerek?',
    tocLabel: 'Co to jest',
    content:
      '<p>USG nerek to badanie ultrasonograficzne, które ocenia budowę nerek oraz górnych dróg moczowych za pomocą fal ultradźwiękowych. Ultrasonografia nerek jest metodą nieinwazyjną i bezbolesną, obraz powstaje w czasie rzeczywistym i bez promieniowania jonizującego, dlatego badanie można bezpiecznie powtarzać.</p><p>Ultrasonograficzne badanie nerek obejmuje ocenę wielkości, położenia i budowy obu nerek, w tym warstwy miąższowej (kory i rdzenia) oraz układu kielichowo-miedniczkowego. Często łączy się je z oceną pęcherza moczowego (jako USG nerek i pęcherza moczowego), a w zakresie możliwym do uwidocznienia również okolicy nadnerczy. Stopień widoczności poszczególnych struktur zależy od warunków anatomicznych i przygotowania pacjenta.</p>',
  },
  {
    title: 'Co wykrywa USG nerek?',
    tocLabel: 'Co wykrywa',
    content:
      '<p>USG nerek uwidacznia wiele nieprawidłowości nerek i dróg moczowych, między innymi kamicę, poszerzenie układu kielichowo-miedniczkowego, torbiele oraz zmiany ogniskowe. Badanie jest zwykle pierwszym krokiem diagnostycznym przy dolegliwościach ze strony układu moczowego, a jego wynik lekarz interpretuje w odniesieniu do objawów i pozostałych badań.</p><ul><li><strong>Kamica nerkowa</strong> - złogi w nerkach lub w drogach moczowych, widoczne jako ogniska hiperechogeniczne z cieniem akustycznym.</li><li><strong>Wodonercze i zastój moczu</strong> - poszerzenie układu kielichowo-miedniczkowego, które może świadczyć o utrudnionym odpływie moczu.</li><li><strong>Torbiele nerek</strong> - zmiany płynowe, których charakter ocenia się w obrazie ultrasonograficznym.</li><li><strong>Zmiany ogniskowe</strong> - obszary o nieprawidłowej strukturze, niekiedy wymagające dalszej diagnostyki.</li><li><strong>Stan po zakażeniach układu moczowego</strong> - kontrola nerek po przebytych lub nawracających infekcjach.</li><li><strong>Zaleganie moczu po mikcji</strong> - pomiar objętości moczu pozostającego w pęcherzu po jego opróżnieniu.</li></ul><p>Badanie ultrasonograficzne nie pozwala jednoznacznie określić charakteru wykrytych zmian. Stwierdzenie nieprawidłowości w USG nerek może wskazywać na potrzebę poszerzenia diagnostyki o badania zlecone przez lekarza, na przykład tomografię komputerową lub rezonans magnetyczny.</p>',
  },
  {
    title: 'Kamica nerkowa i wodonercze w USG',
    tocLabel: 'Kamica i wodonercze',
    content:
      '<p>USG dobrze wykrywa kamicę w obrębie nerki oraz jej pośredni objaw, czyli wodonercze, ale ma ograniczoną czułość dla drobnych złogów i kamieni w moczowodzie. Według wytycznych European Association of Urology (EAU) czułość USG w kamicy wynosi około 45 procent przy wysokiej swoistości (88 procent dla kamieni nerkowych i 94 procent dla moczowodowych), dlatego prawidłowy wynik nie wyklucza obecności kamienia.</p><p>Kamień uwidacznia się jako jasne (hiperechogeniczne) ognisko z cieniem akustycznym; pomocniczy jest artefakt migotania w kolorowym Dopplerze. USG zwykle zawyża wielkość złogu w stosunku do tomografii (średnio o około 2 mm, bardziej u osób z wyższym BMI), co należy uwzględniać przy planowaniu leczenia. Drobne kamienie poniżej kilku milimetrów oraz złogi w środkowym odcinku moczowodu bywają niewidoczne.</p><h3>Wodonercze i poszerzenie układu kielichowo-miedniczkowego</h3><p>Wodonercze to poszerzenie układu kielichowo-miedniczkowego, które może towarzyszyć utrudnionemu odpływowi moczu. Samo poszerzenie nie jest jednak równoznaczne z przeszkodą - bywa skutkiem pełnego pęcherza, przewodnienia, ciąży czy odpływu pęcherzowo-moczowodowego. Stopień wodonercza opisuje się najczęściej w skali 0-4 Society for Fetal Urology (SFU):</p><ul><li><strong>Stopień 1</strong> - poszerzona wyłącznie miedniczka nerkowa.</li><li><strong>Stopień 2</strong> - poszerzona miedniczka i część kielichów.</li><li><strong>Stopień 3</strong> - poszerzona miedniczka i niemal wszystkie kielichy, bez ścieńczenia miąższu.</li><li><strong>Stopień 4</strong> - jak stopień 3, dodatkowo ścieńczenie warstwy miąższowej nerki.</li></ul>',
  },
  {
    title: 'USG, tomografia czy rezonans? Kiedy które badanie',
    tocLabel: 'USG a TK i MR',
    content:
      '<p>USG nerek jest bezpiecznym badaniem pierwszego wyboru, jednak przy podejrzeniu kamicy badaniem potwierdzającym jest niskodawkowa tomografia komputerowa (TK) bez kontrastu, a w ocenie zmian litych i złożonych torbieli - tomografia lub rezonans magnetyczny (MR) z kontrastem. Wybór metody zależy od pytania klinicznego, dlatego ustala go lekarz.</p><table><tr><th>Cecha</th><th>USG</th><th>Tomografia (TK)</th><th>Rezonans (MR)</th></tr><tr><td>Promieniowanie jonizujące</td><td>brak</td><td>tak (niska dawka w protokole bez kontrastu)</td><td>brak</td></tr><tr><td>Czułość w kamicy</td><td>umiarkowana (ok. 45% wg EAU)</td><td>wysoka (ok. 93%)</td><td>ograniczona dla drobnych złogów</td></tr><tr><td>Ocena charakteru zmiany litej</td><td>ograniczona</td><td>dobra (z kontrastem)</td><td>bardzo dobra (z kontrastem)</td></tr><tr><td>Typowa rola</td><td>przesiew, ciąża, dzieci, kontrole</td><td>potwierdzenie kamicy, planowanie leczenia</td><td>torbiele złożone, przeciwwskazania do kontrastu jodowego</td></tr></table><p>W wieloośrodkowym badaniu z randomizacją (Smith-Bindman, New England Journal of Medicine 2014, 2759 pacjentów) rozpoczęcie diagnostyki podejrzenia kamicy od USG zamiast od TK nie pogarszało wyników leczenia, a istotnie zmniejszało dawkę promieniowania. Dlatego u kobiet w ciąży i u dzieci to USG jest preferowaną metodą wstępną. Ocenę przepływu w tętnicach nerkowych umożliwia <a href="/usg/doppler/">USG Doppler</a>, a szerszy przegląd narządów brzucha zapewnia <a href="/usg/jama-brzuszna/">USG jamy brzusznej</a>.</p>',
  },
  {
    title: 'Torbiele i guzy nerek - klasyfikacja Bosniaka',
    tocLabel: 'Torbiele i guzy',
    content:
      '<p>Torbiele proste nerek są częste i w większości łagodne - występują u około 30 procent dorosłych, a ich częstość rośnie z wiekiem. Zmiany bardziej złożone klasyfikuje się w skali Bosniaka, która szacuje ryzyko złośliwości; kategorię ustala się jednak na podstawie tomografii lub rezonansu z kontrastem, a nie samego USG.</p><table><tr><th>Kategoria Bosniaka</th><th>Charakter zmiany</th><th>Ryzyko złośliwości*</th><th>Typowe postępowanie</th></tr><tr><td>I</td><td>torbiel prosta</td><td>ok. 3%</td><td>bez dalszej kontroli</td></tr><tr><td>II</td><td>łagodna, drobne przegrody lub zwapnienia</td><td>ok. 6%</td><td>bez dalszej kontroli</td></tr><tr><td>IIF</td><td>nieco bardziej złożona</td><td>ok. 7%</td><td>nadzór obrazowy</td></tr><tr><td>III</td><td>niejednoznaczna, pogrubiałe ściany lub przegrody</td><td>ok. 55%</td><td>konsultacja urologiczna, często leczenie operacyjne</td></tr><tr><td>IV</td><td>cechy złośliwości, lity wzmacniający się komponent</td><td>ok. 91%</td><td>leczenie operacyjne</td></tr></table><p>Odsetki te pochodzą z serii obrazowania z kontrastem (Sevcenco 2017), a aktualizacja klasyfikacji z 2019 roku (Silverman) formalnie objęła rezonans magnetyczny. Zwykłe USG w trybie B-mode nie uwidacznia subtelnego wzmocnienia ścian i przegród, dlatego torbiel złożona wykryta w USG wymaga charakteryzacji w TK, MR lub w USG z kontrastem (CEUS).</p><h3>Zmiany lite: angiomyolipoma i rak nerki</h3><p>Jasny, jednorodny guzek z cieniem akustycznym najczęściej odpowiada łagodnemu naczyniakomięśniakotłuszczakowi (AML), jednak około jednej trzeciej małych raków nerkowokomórkowych (RCC) wygląda podobnie. Z tego powodu USG nie różnicuje pewnie zmiany łagodnej od złośliwej, a każda zmiana lita wymaga potwierdzenia w TK lub MR z kontrastem (Schieda 2014).</p>',
  },
  {
    title: 'Wskazania do USG nerek',
    tocLabel: 'Wskazania',
    content:
      '<p>Wskazaniem do USG nerek są przede wszystkim dolegliwości oraz nieprawidłowe wyniki badań sugerujące problem ze strony układu moczowego. Zgodnie z zaleceniami towarzystw urologicznych i radiologicznych (między innymi EAU oraz ACR) ultrasonografia jest badaniem wstępnym przy podejrzeniu przeszkody w odpływie moczu, w diagnostyce przewlekłej choroby nerek oraz w obrazowaniu nerek w ciąży. O zasadności i zakresie badania decyduje lekarz.</p><ul><li>Bóle okolicy lędźwiowej lub podbrzusza o niejasnej przyczynie, w tym kolka nerkowa.</li><li>Krwiomocz lub krwinkomocz stwierdzony w badaniu moczu.</li><li>Nawracające zakażenia układu moczowego.</li><li>Nadciśnienie tętnicze, zwłaszcza trudne do kontroli lub wykryte u młodych osób.</li><li>Nieprawidłowe wyniki badań laboratoryjnych, na przykład podwyższona kreatynina lub odchylenia w badaniu ogólnym moczu.</li><li>Kontrola rozpoznanej wcześniej kamicy, torbieli lub innych opisanych zmian.</li><li>Ocena zalegania moczu po mikcji w diagnostyce zaburzeń oddawania moczu (u mężczyzn uzupełniana niekiedy o <a href="/usg/prostata/">USG prostaty</a>).</li></ul>',
  },
  {
    title: 'Jak przygotować się do USG nerek i jak przebiega badanie?',
    tocLabel: 'Przygotowanie i przebieg',
    content:
      '<p>Przygotowanie do USG nerek zależy od zakresu badania, a najważniejszym elementem jest odpowiednie wypełnienie pęcherza, gdy oceniany jest pęcherz moczowy lub zaleganie moczu po mikcji. Zaleca się wtedy wypić około 0,5-1 l niegazowanej wody mniej więcej godzinę przed badaniem i nie oddawać moczu, ponieważ wypełniony pęcherz poprawia widoczność jego ścian i dolnych dróg moczowych.</p><p>Pozostanie na czczo nie jest do USG nerek bezwzględnie wymagane. Ograniczenie produktów wzdymających w dniu poprzedzającym badanie zmniejsza ilość gazów w jelitach i poprawia jakość obrazu, szczególnie u osób ze skłonnością do wzdęć. W razie wątpliwości co do przygotowania warto skontaktować się z naszą <a href="/rejestracja/">rejestracją</a>, a zakres i koszt badania podaje <a href="/cennik/">cennik</a>.</p><p>Badanie odbywa się w pozycji leżącej - lekarz przesuwa głowicę z żelem po skórze brzucha i okolicy lędźwiowej, oceniając nerki z różnych projekcji, i może poprosić o zmianę pozycji lub wstrzymanie oddechu. USG nerek jest bezbolesne, trwa zwykle kilkanaście minut i nie wiąże się z nakłuciem. Wynik w formie opisu pacjent otrzymuje zazwyczaj bezpośrednio po badaniu; opis wymaga interpretacji w kontekście objawów i pozostałych wyników, a dalsze postępowanie ustala lekarz prowadzący. Badanie wykonuje <a href="/usg/">pracownia USG Bas Clinic we Wrocławiu</a>.</p>',
  },
  {
    title: 'Bezpieczeństwo, ograniczenia i powtarzanie badania',
    tocLabel: 'Bezpieczeństwo',
    content:
      '<p>USG nerek jest badaniem bezpiecznym - nie wykorzystuje promieniowania jonizującego ani środków kontrastowych, jest nieinwazyjne i można je powtarzać, także u dzieci i kobiet w ciąży. Diagnostyczna ultrasonografia stosowana jest od kilkudziesięciu lat i nie ma potwierdzonych, szkodliwych następstw przy dawkach diagnostycznych, choć badanie wykonuje się zgodnie z zasadą ALARA (możliwie najniższa moc i najkrótszy czas potrzebny do uzyskania obrazu).</p><p>Głównym ograniczeniem metody jest jej zależność od warunków badania i doświadczenia osoby wykonującej. Jakość obrazu pogarszają gazy jelitowe oraz budowa ciała, a ocena niektórych struktur (drobne kamienie, moczowód, zmiany poniżej kilku centymetrów) bywa utrudniona. Dlatego prawidłowy wynik USG nie wyklucza patologii, a interpretacja zależy od kontekstu klinicznego.</p><p>Treść ma charakter informacyjny i nie zastępuje konsultacji lekarskiej ani indywidualnej kwalifikacji do badania. O zakresie diagnostyki i dalszym postępowaniu decyduje lekarz.</p>',
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content:
      '<ol><li>Skolarikos A, Neisius A, Petřík A, i wsp. EAU Guidelines on Urolithiasis. European Association of Urology, 2025 (Eur Urol 2025;88(1):64-75; PMID 40268592).</li><li>Smith-Bindman R, Aubin C, Bailitz J, i wsp. Ultrasonography versus computed tomography for suspected nephrolithiasis. N Engl J Med 2014;371(12):1100-1110 (PMID 25229916).</li><li>Sevcenco S, Spick C, Helbich TH, i wsp. Malignancy rates and diagnostic performance of the Bosniak classification. Eur Radiol 2017;27(6):2239-2247 (PMID 27761710).</li><li>Silverman SG, Pedrosa I, Ellis JH, i wsp. Bosniak Classification of Cystic Renal Masses, Version 2019. Radiology 2019;292(2):475-488 (PMID 31210616).</li><li>Schieda N, Avruch L, Flood TA. Incidental echogenic renal cortical nodules. Insights Imaging 2014;5(3):295-299 (PMID 24609721).</li><li>European Association of Urology. Guidelines on Renal Cell Carcinoma, Diagnostic Evaluation, 2024.</li><li>American Institute of Ultrasound in Medicine (AIUM). Prudent Use and Safety of Diagnostic Ultrasound, Official Statement.</li></ol>',
  },
];

const FAQ = [
  {
    question: 'Czy USG nerek wykrywa kamienie nerkowe?',
    answer:
      'USG nerek wykrywa kamienie w obrębie nerki jako jasne ogniska z cieniem akustycznym, ma jednak ograniczoną czułość - drobne złogi i kamienie w moczowodzie bywają niewidoczne. Według wytycznych EAU czułość USG w kamicy wynosi około 45 procent przy wysokiej swoistości, dlatego prawidłowy wynik nie wyklucza kamicy. Badaniem potwierdzającym jest niskodawkowa tomografia komputerowa.',
  },
  {
    question: 'Czy USG nerek wykrywa raka nerki?',
    answer:
      'USG nerek może uwidocznić zmiany ogniskowe i torbiele, ale nie pozwala jednoznacznie rozpoznać ich charakteru ani potwierdzić nowotworu. Około jednej trzeciej małych raków nerki wygląda podobnie do łagodnego naczyniakomięśniakotłuszczaka. Każda zmiana lita lub złożona torbiel wymaga potwierdzenia w tomografii komputerowej lub rezonansie magnetycznym z kontrastem oraz konsultacji urologicznej.',
  },
  {
    question: 'Czy do USG nerek trzeba być na czczo i czy potrzebny jest pełny pęcherz?',
    answer:
      'Do USG nerek nie trzeba być bezwzględnie na czczo, choć ograniczenie produktów wzdymających dzień wcześniej poprawia jakość obrazu. Pełny pęcherz jest potrzebny, gdy oceniany jest pęcherz moczowy lub zaleganie moczu po mikcji - zaleca się wtedy wypić około 0,5-1 l wody mniej więcej godzinę przed badaniem i nie oddawać moczu.',
  },
  {
    question: 'Ile kosztuje USG nerek we Wrocławiu?',
    answer:
      'Cena USG nerek we Wrocławiu zależy od zakresu badania, na przykład od tego, czy obejmuje ono również ocenę pęcherza moczowego lub badanie Doppler tętnic nerkowych. Aktualny koszt podaje cennik Bas Clinic; można go też potwierdzić telefonicznie przed wizytą i umówić dogodny termin.',
  },
  {
    question: 'Czy na USG nerek potrzebne jest skierowanie?',
    answer:
      'Na USG nerek skierowanie nie jest wymagane. Badanie wykonywane jest prywatnie, dlatego można je umówić bez skierowania od lekarza. Wynik w formie opisu warto następnie omówić z lekarzem prowadzącym, który zaplanuje dalsze postępowanie i ewentualną pogłębioną diagnostykę.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG nerek?',
    answer: `USG nerek we Wrocławiu wykonasz w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online, a pracownia przyjmuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function UsgNerekPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG nerek we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG nerek to bezbolesne badanie ultrasonograficzne oceniające budowę nerek oraz dróg moczowych. Pomaga wykryć kamicę, torbiele i zastój moczu. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/nerki"
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
