import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Peptydy osi GH Wrocław - sekretagogi i badania',
  description:
    'Peptydy osi GH we Wrocławiu: sermorelina, CJC-1295, ipamorelin, tesamorelina. Fizjologia osi GH/IGF-1, stan badań, status prawny i WADA, kwalifikacja lekarska.',
  path: '/terapie-peptydowe/peptydy-osi-gh/',
});

const SERVICE = getServiceBySlug('terapie-peptydowe/peptydy-osi-gh');

const BREADCRUMBS = [
  { label: 'Terapie peptydowe', href: '/terapie-peptydowe/' },
  { label: SERVICE.name },
];

const EXPERT_INFO = [
  {
    title: 'Peptydy osi GH we Wrocławiu - czym są sekretagogi hormonu wzrostu',
    tocLabel: 'Czym są peptydy osi GH',
    content: (
      <>
        <p><strong>Peptydy osi GH</strong> to sekretagogi hormonu wzrostu. Sekretagog (od łacińskiego secretio, czyli wydzielanie) to substancja, która sama nie jest hormonem, tylko nakłania organizm do wydzielenia własnego. Te peptydy to krótkie łańcuchy aminokwasów, które pobudzają przysadkę, gruczoł wielkości ziarna grochu u podstawy mózgu, do uwolnienia hormonu wzrostu (GH). Należą do nich sermorelina, CJC-1295, ipamorelin i tesamorelina. Nie są hormonem wzrostu; działają na wcześniejszym etapie osi, czyli łańcucha sterującego podwzgórze - przysadka - wątroba.</p>
        <p>Różnica wobec rekombinowanego hormonu wzrostu ma znaczenie kliniczne. Egzogenny GH, czyli gotowy hormon podany w zastrzyku, podnosi jego stężenie w sposób ciągły i omija naturalne hamulce organizmu. Sekretagogi wywołują pulsy GH, czyli krótkie wyrzuty hormonu, które nadal podlegają sprzężeniu zwrotnemu: gdy hormonu jest za dużo, IGF-1 i somatostatyna wyciszają jego wydzielanie. Według przeglądu Sigalosa i Pastuszaka z 2018 roku ten mechanizm ogranicza ryzyko stężeń GH wyższych niż naturalne, ale brakuje długoterminowych badań kontrolowanych.</p>
        <p>W Bas Clinic we Wrocławiu terapie peptydowe, podobnie jak <Link href="/wlewy-witaminowe/">wlewy witaminowe</Link>, wymagają decyzji lekarza po konsultacji, badaniach i omówieniu statusu prawnego. Lekarz może odmówić kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Oś GH/IGF-1: podwzgórze, przysadka, wątroba i somatopauza',
    tocLabel: 'Fizjologia osi GH',
    content: (
      <>
        <p>Wydzielanie hormonu wzrostu reguluje układ trzech pięter. Podwzgórze, ośrodek sterujący w mózgu, wysyła do przysadki dwa przeciwstawne sygnały: GHRH (somatoliberynę), która pobudza wydzielanie, oraz somatostatynę, która je hamuje. Przysadka uwalnia GH w pulsach, najobficiej w pierwszych godzinach snu głębokiego. GH pobudza wątrobę do produkcji IGF-1, czyli insulinopodobnego czynnika wzrostu: to przez niego hormon wzrostu działa na tkanki, a jego stężenie we krwi jest w badaniach miarą pracy całej osi. IGF-1 hamuje zwrotnie podwzgórze i przysadkę.</p>
        <h3>Gdzie działają poszczególne peptydy</h3>
        <ul>
          <li><strong>Analogi GHRH</strong>, czyli cząsteczki zbudowane na wzór somatoliberyny (sermorelina, CJC-1295, tesamorelina), naśladują sygnał z podwzgórza i działają na receptor GHRH w przysadce.</li>
          <li><strong>Mimetyki greliny</strong> (ipamorelin, GHRP-2, GHRP-6, ibutamoren) naśladują grelinę, hormon głodu wydzielany przez żołądek: działają na ten sam receptor GHS-R1a co ona.</li>
        </ul>
        <h3>Somatopauza</h3>
        <p>Po 30. roku życia wyrzuty GH stają się coraz słabsze, a stężenie IGF-1 stopniowo maleje. Ten proces nazywa się somatopauzą. To zjawisko fizjologiczne, nie choroba. Towarzyszy mu wzrost tkanki tłuszczowej trzewnej i ubytek masy mięśniowej, do których przyczyniają się też mniejsza aktywność, sen i dieta. Wytyczne Endocrine Society z 2011 roku i AACE z 2019 roku odróżniają somatopauzę od niedoboru hormonu wzrostu u dorosłych, który wynika z choroby przysadki lub podwzgórza i wymaga potwierdzenia testami stymulacyjnymi.</p>
      </>
    ),
  },
  {
    title: 'Przegląd peptydów osi GH: sermorelina, CJC-1295, ipamorelin, tesamorelina',
    tocLabel: 'Przegląd peptydów',
    content: (
      <>
        <p>Sekretagogi hormonu wzrostu różnią się klasą, czasem działania i statusem rejestracyjnym. Rejestracja oznacza, że urząd (w Polsce URPL, w Unii Europejskiej EMA, w USA FDA) ocenił jakość, skuteczność i bezpieczeństwo preparatu i dopuścił go do leczenia. Tylko tesamorelina ma aktualną rejestrację jako lek, i to w jednym wskazaniu; pozostałe są substancjami badanymi lub wycofanymi z rynku.</p>
        <table>
          <tbody>
            <tr>
              <th>Peptyd</th>
              <th>Klasa</th>
              <th>Status rejestracyjny</th>
              <th>Status WADA</th>
            </tr>
            <tr>
              <td>Sermorelina (GHRH 1-29)</td>
              <td>analog GHRH</td>
              <td>dawniej zarejestrowana w USA (Geref), wycofana z rynku w 2008 roku z przyczyn komercyjnych, nie z powodu bezpieczeństwa</td>
              <td>S2, zabroniona</td>
            </tr>
            <tr>
              <td>CJC-1295</td>
              <td>analog GHRH o wydłużonym działaniu</td>
              <td>niezarejestrowany; badania I/II fazy</td>
              <td>S2, zabroniony</td>
            </tr>
            <tr>
              <td>Tesamorelina</td>
              <td>analog GHRH (1-44)</td>
              <td>zarejestrowana w USA (Egrifta, 2010) w lipodystrofii (nieprawidłowym rozmieszczeniu tkanki tłuszczowej) u osób zakażonych HIV; brak rejestracji EMA</td>
              <td>S2, zabroniona</td>
            </tr>
            <tr>
              <td>Ipamorelin</td>
              <td>mimetyk greliny (GHRP)</td>
              <td>niezarejestrowany; rozwój kliniczny przerwany</td>
              <td>S2, zabroniony</td>
            </tr>
            <tr>
              <td>GHRP-2, GHRP-6</td>
              <td>mimetyki greliny (GHRP)</td>
              <td>niezarejestrowane jako leki</td>
              <td>S2, zabronione</td>
            </tr>
            <tr>
              <td>Ibutamoren (MK-677)</td>
              <td>doustny mimetyk greliny, niepeptydowy</td>
              <td>niezarejestrowany</td>
              <td>S2, zabroniony</td>
            </tr>
          </tbody>
        </table>
        <p>CJC-1295 z dodatkiem DAC działa długo: w badaniu Teichmana i wsp. z 2006 roku pojedyncze wstrzyknięcie podnosiło GH przez co najmniej 6 dni, a IGF-1 przez 9-11 dni. Wersja bez DAC (mod GRF 1-29) działa krótko, jak sermorelina. Ipamorelin, opisany przez Rauna i wsp. w 1998 roku, w badaniach na zwierzętach nie podnosił kortyzolu ani ACTH, w przeciwieństwie do GHRP-2 i GHRP-6.</p>
      </>
    ),
  },
  {
    title: 'Co mówią badania o sekretagogach GH i hormonie wzrostu u dorosłych',
    tocLabel: 'Stan badań',
    content: (
      <>
        <p>Dowody na korzyści z pobudzania osi GH u zdrowych dorosłych są słabe, a najlepiej udokumentowane efekty dotyczą składu ciała, nie sprawności, zdrowia ani długości życia. Jedyne mocne dane kliniczne dotyczą tesamoreliny w konkretnym wskazaniu.</p>
        <h3>Hormon wzrostu u zdrowych osób starszych</h3>
        <p>Przegląd systematyczny, czyli zestawienie wszystkich badań na dany temat według z góry ustalonych kryteriów, opublikowany przez Liu i wsp. w 2007 roku objął 18 badań z randomizacją (uczestników losowo przydziela się do hormonu albo do placebo) u zdrowych osób w wieku około 69 lat. Hormon wzrostu zmniejszał masę tłuszczową średnio o 2,1 kg i zwiększał beztłuszczową masę ciała, czyli mięśnie, kości i wodę, o 2,1 kg, bez zmiany masy ciała. Częściej występowały obrzęki tkanek miękkich, bóle stawów, zespół cieśni nadgarstka (drętwienie i ból ręki z ucisku nerwu), ginekomastia, czyli powiększenie piersi u mężczyzn, a także nieprawidłowe stężenie cukru we krwi na czczo i cukrzyca. Autorzy uznali, że GH nie może być zalecany jako terapia przeciwstarzeniowa. Wcześniejsza praca Rudmana i wsp. z 1990 roku, na której opiera się część marketingu, objęła 21 mężczyzn i nie była zaślepiona: uczestnicy i badacze wiedzieli, kto dostaje hormon.</p>
        <h3>Sekretagogi u zdrowych osób starszych</h3>
        <p>Najdłuższe badanie kontrolowane dotyczy doustnego ibutamorenu. Nass i wsp. w 2008 roku podawali go przez rok 65 osobom w wieku 60-81 lat. GH i IGF-1 wzrosły do zakresu młodych dorosłych, beztłuszczowa masa ciała o około 1,1 kg, ale siła mięśni i sprawność nie zmieniły się. Wzrosły masa ciała, apetyt, glikemia na czczo i kortyzol, a wrażliwość na insulinę spadła.</p>
        <h3>Tesamorelina w lipodystrofii HIV</h3>
        <p>Dwa badania z randomizacją, opisane przez Falutza i wsp. w 2007 i 2010 roku, objęły ponad 800 osób zakażonych HIV z nadmiarem tłuszczu trzewnego, czyli tego, który otacza narządy jamy brzusznej. Tesamorelina 2 mg dziennie przez 26 tygodni zmniejszała objętość tego tłuszczu o około 15% względem placebo i poprawiała lipidogram, czyli profil cholesterolu i trójglicerydów; efekt utrzymywał się tylko przy kontynuacji podawania. To dane z populacji chorej, nie z osób zdrowych.</p>
        <p>Dla sermoreliny, CJC-1295 i ipamorelinu nie ma badań z randomizacją oceniających skład ciała, sen czy regenerację u zdrowych dorosłych; dostępne są badania farmakokinetyczne i krótkie obserwacje.</p>
      </>
    ),
  },
  {
    title: 'Status prawny peptydów osi GH w Polsce i zakaz WADA',
    tocLabel: 'Status prawny i WADA',
    content: (
      <>
        <p>W Polsce sekretagogi hormonu wzrostu nie są dopuszczone do obrotu jako produkty lecznicze. Wyjątkiem jest makimorelina, doustny test diagnostyczny niedoboru GH, który nie służy do terapii. Tesamorelina ma rejestrację amerykańską, ale nie została zgłoszona do Europejskiej Agencji Leków.</p>
        <h3>Co to oznacza dla pacjenta</h3>
        <ul>
          <li>Preparaty dostępne w internecie jako „do celów badawczych” nie podlegają kontroli jakości produktów leczniczych. Nie ma pewności co do dawki, czystości ani sterylności.</li>
          <li>Zastosowanie w warunkach medycznych wymaga decyzji lekarza, świadomej zgody na piśmie i wpisu w dokumentacji, z informacją o braku rejestracji i ograniczonych dowodach.</li>
          <li>Odpowiedzialność ponosi lekarz, dlatego w Bas Clinic omawia status prawny przed decyzją i może odmówić.</li>
        </ul>
        <h3>Sportowcy i kontrola antydopingowa</h3>
        <p>Lista Substancji i Metod Zabronionych WADA umieszcza wszystkie sekretagogi GH w klasie S2 (hormony peptydowe, czynniki wzrostu i substancje pokrewne), w punkcie o czynnikach uwalniających hormon wzrostu. Zakaz obejmuje analogi GHRH (sermorelinę, CJC-1295, tesamorelinę), mimetyki greliny (ipamorelin, ibutamoren) i peptydy GHRP. Obowiązuje podczas zawodów i poza nimi. Dotyczy każdej osoby podlegającej kontroli antydopingowej, także amatora startującego w zawodach pod egidą federacji, niezależnie od wskazań lekarskich.</p>
      </>
    ),
  },
  {
    title: 'Dla kogo bywają rozważane peptydy osi GH, a dla kogo nie',
    tocLabel: 'Dla kogo',
    content: (
      <>
        <p>Sekretagogi GH nie są terapią dla osoby zdrowej, która chce lepiej wyglądać lub „odmłodzić organizm”. Bywają rozważane w wąskich sytuacjach klinicznych, po wykluczeniu innych przyczyn dolegliwości.</p>
        <h3>Sytuacje, w których lekarz może rozważyć terapię</h3>
        <ul>
          <li>udokumentowany, obniżony poziom IGF-1 z objawami klinicznymi, po wykluczeniu prawdziwego niedoboru GH, który wymaga leczenia endokrynologicznego, a nie peptydów,</li>
          <li>utrata masy mięśniowej w przebiegu rekonwalescencji, gdy sen, dieta z odpowiednią podażą białka i trening oporowy (siłowy) zostały już wprowadzone i nie wystarczają,</li>
          <li>nagromadzenie tłuszczu trzewnego u osób zakażonych HIV leczonych antyretrowirusowo, czyli lekami hamującymi namnażanie wirusa (jedyne wskazanie z dowodami, dotyczy tesamoreliny).</li>
        </ul>
        <h3>Osoby, u których lekarz odmówi</h3>
        <ul>
          <li>sportowcy podlegający kontroli antydopingowej,</li>
          <li>osoby z czynną chorobą nowotworową lub nowotworem w wywiadzie bez zakończonej obserwacji onkologicznej,</li>
          <li>osoby z cukrzycą niewyrównaną lub retinopatią proliferacyjną, czyli zaawansowanym uszkodzeniem siatkówki oka,</li>
          <li>kobiety w ciąży i karmiące piersią,</li>
          <li>osoby poniżej 18. roku życia.</li>
        </ul>
        <p>Przy zmęczeniu i spadku energii lekarz proponuje najpierw diagnostykę i, gdy są wskazania, <Link href="/wlewy-witaminowe/kroplowka-energetyczna/">kroplówkę energetyczną</Link>. Peptydy nie są pierwszym krokiem.</p>
      </>
    ),
  },
  {
    title: 'Konsultacja, badania i monitorowanie peptydów osi GH w Bas Clinic we Wrocławiu',
    tocLabel: 'Konsultacja i badania',
    content: (
      <>
        <p>W Bas Clinic przy {CLINIC.address.street} we Wrocławiu terapia peptydowa zaczyna się od konsultacji lekarskiej. Może się ona zakończyć odmową, skierowaniem do endokrynologa albo planem terapii z badaniami kontrolnymi.</p>
        <h3>Przebieg kwalifikacji</h3>
        <ol>
          <li><strong>Wywiad lekarski</strong>: choroby przewlekłe, nowotwory w rodzinie i w wywiadzie, leki, sen, dieta, aktywność, ewentualne starty w zawodach sportowych.</li>
          <li><strong>Badania przed decyzją</strong>: IGF-1, glukoza na czczo i HbA1c (hemoglobina glikowana, obraz poziomu cukru z ostatnich trzech miesięcy), morfologia, lipidogram, TSH i fT4 (tarczyca), kreatynina (nerki), próby wątrobowe. Zależnie od wywiadu lekarz może zlecić kortyzol, prolaktynę, u mężczyzn PSA, u kobiet konsultację ginekologiczną.</li>
          <li><strong>Omówienie statusu prawnego i stanu badań</strong>: informacja o braku rejestracji, o dowodach i ich lukach oraz o działaniach niepożądanych.</li>
          <li><strong>Świadoma zgoda na piśmie</strong> i wpis w dokumentacji medycznej.</li>
          <li><strong>Plan monitorowania</strong>: kontrola IGF-1 i glikemii po kilku tygodniach, potem w odstępach ustalonych przez lekarza; ocena objawów niepożądanych na każdej wizycie.</li>
        </ol>
        <p>Peptydy tej grupy podaje się podskórnie, zwykle wieczorem, w porze nocnego pulsu GH. Dawkę i czas trwania ustala lekarz. Wzrost IGF-1 powyżej zakresu referencyjnego dla wieku jest sygnałem do zmniejszenia dawki lub przerwania terapii.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i działania niepożądane sekretagogów hormonu wzrostu',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Podniesienie stężenia GH i IGF-1 wpływa na przemianę materii i pobudza komórki do podziałów, dlatego lista przeciwwskazań jest długa. Większość wynika z danych o samym hormonie wzrostu, bo dla sekretagogów długoterminowych danych brakuje.</p>
        <h3>Przeciwwskazania bezwzględne</h3>
        <ul>
          <li><strong>Czynna choroba nowotworowa</strong> i nowotwór w wywiadzie bez zakończonej obserwacji: IGF-1 jest czynnikiem wzrostu dla wielu typów komórek, także nowotworowych.</li>
          <li><strong>Retinopatia proliferacyjna</strong>, czyli zaawansowane uszkodzenie siatkówki oka, i cukrzyca niewyrównana.</li>
          <li><strong>Ciąża i karmienie piersią</strong>: brak danych o bezpieczeństwie.</li>
          <li><strong>Stan krytyczny, ostra ciężka choroba</strong>: w badaniach hormonu wzrostu u chorych na oddziałach intensywnej terapii obserwowano wzrost śmiertelności.</li>
          <li><strong>Czynne gruczolaki przysadki</strong> (łagodne guzy tego gruczołu) i akromegalia, czyli choroba z nadmiaru hormonu wzrostu.</li>
          <li><strong>Nadwrażliwość</strong> na którykolwiek składnik preparatu.</li>
        </ul>
        <h3>Przeciwwskazania względne</h3>
        <ul>
          <li>wyrównana cukrzyca typu 2 i stan przedcukrzycowy (częstsza kontrola glikemii),</li>
          <li>bezdech senny i niewydolność serca (ryzyko zatrzymywania wody w organizmie),</li>
          <li>zespół cieśni nadgarstka w wywiadzie,</li>
          <li>niedoczynność tarczycy przed wyrównaniem (GH zmienia przemianę hormonów tarczycy).</li>
        </ul>
        <h3>Działania niepożądane</h3>
        <p>Najczęściej opisywane to reakcje w miejscu wstrzyknięcia, zaczerwienienie twarzy i uczucie gorąca po podaniu, bóle głowy, obrzęki, bóle stawów, drętwienie rąk. Mimetyki greliny, zwłaszcza GHRP-2, GHRP-6 i ibutamoren, zwiększają apetyt i mogą podnosić kortyzol oraz prolaktynę. Wszystkie sekretagogi mogą podnosić glikemię. Nie wiadomo, jak długotrwałe podnoszenie IGF-1 wpływa na zapadalność na nowotwory; przegląd Sigalosa i Pastuszaka wskazuje to jako główną lukę w danych.</p>
      </>
    ),
  },
  {
    title: 'Realistyczne oczekiwania: sen, skład ciała i regeneracja',
    tocLabel: 'Realistyczne oczekiwania',
    content: (
      <>
        <p>Sekretagogi GH nie odmładzają, nie wydłużają życia i nie zastępują snu, diety ani treningu. Najlepiej udokumentowany efekt to niewielki wzrost beztłuszczowej masy ciała, bez wzrostu siły. Inne efekty opisywane w internecie opierają się na relacjach, nie na badaniach kontrolowanych.</p>
        <h3>Czego można się spodziewać</h3>
        <ul>
          <li><strong>IGF-1</strong>: wzrost stężenia w ciągu dni do tygodni; to parametr laboratoryjny, nie odczuwalna korzyść.</li>
          <li><strong>Skład ciała</strong>: w badaniach z ibutamorenem i hormonem wzrostu przyrost beztłuszczowej masy rzędu 1-2 kg po miesiącach stosowania, bez poprawy siły. Trening oporowy z odpowiednią podażą białka daje więcej.</li>
          <li><strong>Sen</strong>: GHRH i grelina biorą udział w regulacji snu głębokiego, ale nie ma badań potwierdzających lepszą jakość snu po sermorelinie, CJC-1295 czy ipamorelinie u zdrowych dorosłych.</li>
          <li><strong>Regeneracja i gojenie</strong>: brak badań kontrolowanych u ludzi. Bliżej badań są peptydy takie jak <Link href="/terapie-peptydowe/bpc-157/">BPC-157</Link>, choć i one pozostają eksperymentalne.</li>
          <li><strong>Skóra</strong>: hormon wzrostu zwiększał grubość skóry w małym badaniu Rudmana z 1990 roku; dla sekretagogów takich danych nie ma. W terapiach skóry lekarz częściej sięga po <Link href="/terapie-peptydowe/ghk-cu/">GHK-Cu</Link>.</li>
        </ul>
        <p>W badaniach na zwierzętach to obniżona, a nie podwyższona sygnalizacja GH/IGF-1 wiąże się z dłuższym życiem, co przemawia przeciw traktowaniu pobudzania osi GH jako profilaktyki starzenia. Efekty ustępują po odstawieniu, co pokazały badania tesamoreliny.</p>
      </>
    ),
  },
  {
    title: 'Cena peptydów osi GH we Wrocławiu i rejestracja',
    tocLabel: 'Cena i rejestracja',
    content: (
      <>
        <p>Cena terapii peptydami osi GH w Bas Clinic we Wrocławiu jest ustalana po konsultacji lekarskiej. Zależy od zakresu badań, peptydu, czasu trwania i liczby wizyt kontrolnych, dlatego nie podajemy jednej kwoty.</p>
        <h3>Co wchodzi w wycenę</h3>
        <ul>
          <li>konsultacja lekarska z wywiadem i oceną wyników,</li>
          <li>zestaw badań laboratoryjnych przed decyzją i w trakcie monitorowania,</li>
          <li>preparat, jeśli lekarz zdecyduje o terapii,</li>
          <li>wizyty kontrolne w ustalonych odstępach.</li>
        </ul>
        <p>Klinika mieści się przy {CLINIC.address.street} we Wrocławiu i pracuje w dni powszednie w godzinach {CLINIC.hours.weekdays}. Na konsultację warto przynieść aktualne wyniki badań i listę przyjmowanych leków. Rejestracja telefoniczna pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz online</Link>. Ceny pozostałych usług znajdziesz w <Link href="/cennik/">cenniku</Link>. Pacjentom pytającym o hormony i libido lekarz może zaproponować najpierw diagnostykę i <Link href="/wlewy-witaminowe/kroplowka-na-libido/">kroplówkę na libido</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. Sekretagogi hormonu wzrostu nie są zarejestrowanymi produktami leczniczymi w Polsce; o ich zastosowaniu decyduje wyłącznie lekarz po badaniach i świadomej zgodzie pacjenta.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Liu H., Bravata D.M., Olkin I. i wsp. Systematic review: the safety and efficacy of growth hormone in the healthy elderly. Annals of Internal Medicine 2007; 146(2): 104-115. PMID 17227934.</li>
        <li>Falutz J., Allas S., Blot K. i wsp. Metabolic effects of a growth hormone-releasing factor in patients with HIV. New England Journal of Medicine 2007; 357(23): 2359-2370. PMID 18057338.</li>
        <li>Falutz J., Mamputu J.C., Potvin D. i wsp. Effects of tesamorelin (TH9507), a growth hormone-releasing factor analog, in HIV-infected patients with excess abdominal fat: a pooled analysis of two multicenter, double-blind placebo-controlled phase 3 trials with safety extension data. Journal of Clinical Endocrinology and Metabolism 2010; 95(9): 4291-4304. PMID 20554713.</li>
        <li>Sigalos J.T., Pastuszak A.W. The Safety and Efficacy of Growth Hormone Secretagogues. Sexual Medicine Reviews 2018; 6(1): 45-53. PMID 28400207.</li>
        <li>Nass R., Pezzoli S.S., Oliveri M.C. i wsp. Effects of an oral ghrelin mimetic on body composition and clinical outcomes in healthy older adults: a randomized trial. Annals of Internal Medicine 2008; 149(9): 601-611. PMID 18981485.</li>
        <li>Teichman S.L., Neale A., Lawrence B. i wsp. Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults. Journal of Clinical Endocrinology and Metabolism 2006; 91(3): 799-805. PMID 16352683.</li>
        <li>Raun K., Hansen B.S., Johansen N.L. i wsp. Ipamorelin, the first selective growth hormone secretagogue. European Journal of Endocrinology 1998; 139(5): 552-561. PMID 9849822.</li>
        <li>Rudman D., Feller A.G., Nagraj H.S. i wsp. Effects of human growth hormone in men over 60 years old. New England Journal of Medicine 1990; 323(1): 1-6. PMID 2355952.</li>
        <li>Molitch M.E., Clemmons D.R., Malozowski S. i wsp. Evaluation and treatment of adult growth hormone deficiency: an Endocrine Society clinical practice guideline. Journal of Clinical Endocrinology and Metabolism 2011; 96(6): 1587-1609. PMID 21602453.</li>
        <li>Yuen K.C.J., Biller B.M.K., Radovick S. i wsp. American Association of Clinical Endocrinologists and American College of Endocrinology guidelines for management of growth hormone deficiency in adults and patients transitioning from pediatric to adult care. Endocrine Practice 2019; 25(11): 1191-1232. PMID 31760824.</li>
        <li>World Anti-Doping Agency. The Prohibited List 2026, klasa S2: hormony peptydowe, czynniki wzrostu, substancje pokrewne i mimetyki (punkt 2.4: czynniki uwalniające hormon wzrostu).</li>
        <li>U.S. Food and Drug Administration. Determination that GEREF (sermorelin acetate) injection was not withdrawn from sale for reasons of safety or effectiveness. Federal Register, 4 marca 2013.</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Czym peptydy osi GH różnią się od hormonu wzrostu?',
    answer:
      'Hormon wzrostu (somatropina) to gotowy hormon podawany z zewnątrz, który omija naturalną regulację organizmu. Sekretagogi, czyli substancje nakłaniające organizm do wydzielania własnego hormonu, takie jak sermorelina, CJC-1295, ipamorelin czy tesamorelina, pobudzają przysadkę do wydzielania własnego GH w pulsach, które nadal podlegają hamowaniu przez IGF-1 i somatostatynę. Nie są jednak łagodniejszą wersją hormonu wzrostu: podnoszą IGF-1 i dzielą z nim większość ryzyk.',
  },
  {
    question: 'Czy peptydy osi GH są legalne w Polsce?',
    answer:
      'Żaden z sekretagogów hormonu wzrostu nie jest w Polsce zarejestrowany jako produkt leczniczy do terapii. Tesamorelina ma rejestrację tylko w USA, sermorelina została wycofana z rynku w 2008 roku, a CJC-1295, ipamorelin i ibutamoren nigdy nie były zarejestrowane. Ich zastosowanie w warunkach medycznych wymaga decyzji lekarza, świadomej zgody pacjenta i dokumentacji, a lekarz może odmówić.',
  },
  {
    question: 'Czy sportowiec może stosować sermorelinę, CJC-1295 albo ipamorelin?',
    answer:
      'Nie. Wszystkie czynniki uwalniające hormon wzrostu, w tym sermorelina, CJC-1295, tesamorelina, ipamorelin, GHRP-2, GHRP-6 i ibutamoren, znajdują się w klasie S2 Listy Substancji Zabronionych WADA i są zakazane w zawodach i poza nimi. Dotyczy to także amatorów startujących w zawodach objętych kontrolą antydopingową.',
  },
  {
    question: 'Jakie badania trzeba zrobić przed terapią peptydami osi GH?',
    answer:
      'Podstawowy zestaw to IGF-1, glukoza na czczo i HbA1c, morfologia, lipidogram, TSH i fT4, kreatynina oraz próby wątrobowe. Zależnie od wywiadu lekarz może dołożyć kortyzol, prolaktynę, PSA u mężczyzn lub konsultację ginekologiczną. W trakcie terapii kontroluje się IGF-1 i glikemię.',
  },
  {
    question: 'Czy peptydy osi GH odmładzają organizm?',
    answer:
      'Nie ma na to dowodów. Przegląd systematyczny badań nad hormonem wzrostu u zdrowych osób starszych wykazał niewielki przyrost beztłuszczowej masy ciała kosztem obrzęków, bólów stawów, zespołu cieśni nadgarstka i zaburzeń glikemii, bez poprawy sprawności. Dla sekretagogów u zdrowych dorosłych długoterminowych badań kontrolowanych brakuje.',
  },
  {
    question: 'Gdzie we Wrocławiu skonsultować terapię peptydami osi GH?',
    answer: `Konsultację lekarską w sprawie peptydów osi GH umówisz w Bas Clinic, ${CLINIC.address.street}, ${CLINIC.address.city}. Rejestracja telefoniczna pod numerem ${CLINIC.phone} lub przez formularz online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}. Cena terapii jest ustalana po konsultacji.`,
  },
];

export default function PeptydyOsiGhPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Peptydy osi GH Wrocław"
      heroSubtitle="Terapie peptydowe"
      heroDescription="Sekretagogi hormonu wzrostu: sermorelina, CJC-1295, ipamorelin, tesamorelina. Konsultacja lekarska, badania i omówienie statusu prawnego przed każdą decyzją w Bas Clinic we Wrocławiu."
      slug="terapie-peptydowe/peptydy-osi-gh"
      schemaType="MedicalTherapy"
      expertInfo={EXPERT_INFO}
      faq={FAQ}
    />
  );
}
