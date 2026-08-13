import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Leczenie nadpotliwości Wrocław - botoks na poty',
  description: 'Leczenie nadpotliwości toksyną botulinową we Wrocławiu - botoks na nadmierne pocenie pach, dłoni i stóp. Zabieg wykonuje lekarz po konsultacji i kwalifikacji.',
  path: '/medycyna-estetyczna/leczenie-nadpotliwosci/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Leczenie nadpotliwości toksyną botulinową' },
];

const FAQ = [
  { question: 'Jak długo utrzymuje się efekt botoksu na nadpotliwość pach?', answer: 'Efekt leczenia nadpotliwości pach toksyną botulinową utrzymuje się średnio około 7 miesięcy (mediana 6,7-7,5 miesiąca według danych rejestracyjnych), a u części pacjentów rok lub dłużej. Przy kolejnych zabiegach czas działania zwykle się wydłuża. Następnie pocenie stopniowo wraca i zabieg można powtórzyć.' },
  { question: 'Czy botoks na pocenie działa dłużej niż botoks na zmarszczki i dlaczego?', answer: 'Botoks na pocenie działa dłużej (zwykle 6-9 miesięcy) niż botoks na zmarszczki mimiczne (3-4 miesiące). Wynika to z wolniejszej odbudowy połączenia nerwowo-gruczołowego przy gruczołach potowych niż połączenia nerwowo-mięśniowego. Dlatego zabieg na nadpotliwość pach powtarza się rzadziej, często mniej więcej raz w roku.' },
  { question: 'Czy zabieg leczenia nadpotliwości toksyną botulinową boli?', answer: 'Zabieg leczenia nadpotliwości polega na serii płytkich, śródskórnych wkłuć cienką igłą i jest na ogół dobrze tolerowany. W okolicy pach zwykle wystarcza krem znieczulający lub zabieg bez znieczulenia. Iniekcje w dłonie są bardziej wrażliwe, dlatego stosuje się tam blokadę nerwu.' },
  { question: 'Jakie są przeciwwskazania do leczenia nadpotliwości toksyną botulinową?', answer: 'Przeciwwskazania do leczenia nadpotliwości toksyną botulinową obejmują nadwrażliwość na preparat, zakażenie skóry w miejscu wkłucia, ciążę i karmienie piersią oraz choroby nerwowo-mięśniowe, na przykład miastenię. O wszystkich chorobach i przyjmowanych lekach poinformuj lekarza, który kwalifikuje do zabiegu podczas konsultacji.' },
  { question: 'Czy po botoksie na nadpotliwość pojawia się pocenie kompensacyjne?', answer: 'Pocenie kompensacyjne, czyli przeniesienie pocenia na inne okolice ciała, po toksynie botulinowej jest minimalne lub nieobecne. To istotna różnica wobec operacyjnej sympatektomii, po której nadmierne pocenie w innych miejscach pojawia się u większości operowanych. Działanie botoksu jest dodatkowo miejscowe i odwracalne.' },
  { question: 'Gdzie we Wrocławiu wykonać leczenie nadpotliwości toksyną botulinową?', answer: `Leczenie nadpotliwości toksyną botulinową we Wrocławiu wykonujemy w Bas Clinic przy ${CLINIC.address.street}. Zabieg poprzedza konsultacja i kwalifikacja lekarska. Pracujemy w dni powszednie w godzinach ${CLINIC.hours.weekdays}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez formularz rejestracji online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest nadpotliwość (hiperhidroza) i jak leczy ją toksyna botulinowa?',
    tocLabel: 'Czym jest i jak leczy',
    content: (
      <>
        <p><strong>Nadpotliwość</strong> (hiperhidroza, nadmierna potliwość) to nadmierne, niezależne od temperatury otoczenia wydzielanie potu, najczęściej w obrębie pach, dłoni, stóp lub czoła. <strong>Toksyna botulinowa typu A</strong> blokuje w skórze uwalnianie acetylocholiny z zakończeń nerwowych pobudzających gruczoły potowe, dzięki czemu w leczonej okolicy pocenie zatrzymuje się na wiele miesięcy.</p>
        <p>Leczenie nadpotliwości toksyną botulinową jest metodą objawową, miejscową i odwracalną. Nie usuwa gruczołów potowych ani nie zaburza termoregulacji całego ciała, a jedynie czasowo wycisza nadmierną aktywność gruczołów w ostrzykniętym obszarze. Pot nadal odprowadzany jest przez gruczoły w pozostałych częściach ciała.</p>
        <p>Nadpotliwość pierwotną ogniskową szacuje się na około 3-5% populacji, a w badaniach ankietowych nawet kilkanaście procent dorosłych zgłasza nadmierne pocenie, z czego część określa je jako uciążliwe. Nadmierne pocenie bywa krępujące zawodowo i towarzysko, dlatego pacjenci szukają trwalszego rozwiązania niż antyperspiranty.</p>
        <p>Zabieg należy do <Link href="/medycyna-estetyczna/">medycyny estetycznej</Link> i wykonuje go lekarz po konsultacji. Tę samą toksynę botulinową stosuje się także w <Link href="/medycyna-estetyczna/redukcja-zmarszczek-botox/">redukcji zmarszczek mimicznych</Link> oraz w <Link href="/medycyna-estetyczna/korekta-usmiechu-dziaslowego/">korekcie uśmiechu dziąsłowego</Link>, jednak w nadpotliwości inny jest cel i sposób podania preparatu.</p>
      </>
    ),
  },
  {
    title: 'Jak działa toksyna botulinowa na pocenie i dlaczego efekt trwa dłużej niż przy zmarszczkach?',
    tocLabel: 'Mechanizm i czas działania',
    content: (
      <>
        <p>Toksyna botulinowa typu A hamuje uwalnianie <strong>acetylocholiny</strong>, przekaźnika, którym układ współczulny pobudza gruczoły potowe do wydzielania. Po ostrzyknięciu skóry gruczoł przestaje otrzymywać sygnał i pocenie w danej okolicy ustaje.</p>
        <p>Na poziomie komórkowym preparat rozszczepia białko SNAP-25, niezbędne do przekazania sygnału z zakończenia nerwowego. To ta sama cząsteczka, na którą toksyna działa w mięśniu mimicznym, ale tutaj celem są <strong>gruczoły ekrynowe</strong> (potowe), a nie mięsień.</p>
        <h3>Dlaczego efekt na pocenie utrzymuje się dłużej?</h3>
        <p>Efekt na nadpotliwość pach utrzymuje się zwykle 6-9 miesięcy, podczas gdy botoks na zmarszczki mimiczne działa średnio 3-4 miesiące. Przyjmuje się, że wynika to z wolniejszej odbudowy połączenia nerwowo-gruczołowego niż szybko regenerującego się połączenia nerwowo-mięśniowego. Jest to mechanizm uznany w piśmiennictwie, a nie wynik bezpośredniego porównania w jednym badaniu.</p>
        <p>Działanie jest miejscowe i odwracalne. Po wygaśnięciu blokady gruczoły wracają do pracy, a pocenie stopniowo powraca. W obserwacji wieloletniej powtarzane zabiegi zachowują skuteczność i nie stwierdzono klinicznie istotnych przeciwciał neutralizujących preparat.</p>
      </>
    ),
  },
  {
    title: 'Nadpotliwość pierwotna czy wtórna - kiedy potrzebna jest diagnostyka?',
    tocLabel: 'Pierwotna a wtórna',
    content: (
      <>
        <p>Nadpotliwość <strong>pierwotna ogniskowa</strong> to nadmierne, zwykle obustronne i symetryczne pocenie wybranych okolic, trwające co najmniej 6 miesięcy bez uchwytnej przyczyny. Nadpotliwość <strong>wtórna</strong> jest objawem innej choroby lub działania leków i wymaga ustalenia przyczyny, zanim rozważy się leczenie objawowe.</p>
        <h3>Kryteria nadpotliwości pierwotnej</h3>
        <p>Zgodnie z powszechnie stosowanymi kryteriami diagnostycznymi (Hornberger i wsp., 2004) o postaci pierwotnej mówi się przy ogniskowym poceniu trwającym ponad pół roku oraz co najmniej dwóch z poniższych cech:</p>
        <ul>
          <li>pocenie obustronne i względnie symetryczne;</li>
          <li>utrudnia codzienne czynności;</li>
          <li>co najmniej jeden epizod w tygodniu;</li>
          <li>początek przed 25. rokiem życia;</li>
          <li>dodatni wywiad rodzinny;</li>
          <li>ustępowanie pocenia podczas snu.</li>
        </ul>
        <h3>Objawy, które wymagają konsultacji</h3>
        <p>Pocenie uogólnione (całego ciała), asymetryczne, nocne, rozpoczęte nagle u osoby dorosłej albo z towarzyszącą gorączką, spadkiem masy ciała czy kołataniem serca może wskazywać na przyczynę wtórną. Wtedy najpierw ustala się jej źródło. Dlatego każdy zabieg poprzedza konsultacja, podczas której lekarz kwalifikuje pacjenta i wyklucza przyczyny wtórne.</p>
        <p>Wskazaniem rejestracyjnym dla toksyny botulinowej jest ciężka nadpotliwość pach, oporna na leczenie miejscowe. Dłonie, stopy i czoło leczy się poza wskazaniem rejestracyjnym (off-label), na podstawie danych klinicznych i decyzji lekarza.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania do leczenia nadpotliwości toksyną botulinową',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Leczenia nadpotliwości toksyną botulinową nie wykonuje się m.in. przy nadwrażliwości na preparat, zakażeniu skóry w miejscu wkłucia, w ciąży i podczas karmienia piersią oraz w chorobach nerwowo-mięśniowych. Ostateczną kwalifikację przeprowadza lekarz.</p>
        <p>Do przeciwwskazań i sytuacji wymagających szczególnej ostrożności należą:</p>
        <ul>
          <li>nadwrażliwość na toksynę botulinową typu A lub składniki preparatu;</li>
          <li>zakażenie lub stan zapalny w miejscu planowanego podania;</li>
          <li>choroby nerwowo-mięśniowe, takie jak miastenia, zespół Lamberta-Eatona czy stwardnienie zanikowe boczne (ALS);</li>
          <li>ciąża i okres karmienia piersią;</li>
          <li>przyjmowanie leków wpływających na przewodnictwo nerwowo-mięśniowe.</li>
        </ul>
        <p>Charakterystyka Produktu Leczniczego (ChPL) preparatów toksyny botulinowej zawiera też ostrzeżenie dotyczące możliwego rozprzestrzeniania się działania toksyny poza miejsce podania. Przy dawkach stosowanych na pachy nie potwierdzono ciężkich zdarzeń tego typu, niemniej o wszystkich chorobach przewlekłych i przyjmowanych lekach należy poinformować lekarza podczas kwalifikacji.</p>
      </>
    ),
  },
  {
    title: 'Jak wygląda zabieg leczenia nadpotliwości krok po kroku?',
    tocLabel: 'Przebieg zabiegu',
    content: (
      <>
        <p>Zabieg poprzedza <strong>próba jodowo-skrobiowa</strong> (test Minora), która zabarwia obszar nadmiernego pocenia i pozwala precyzyjnie wyznaczyć pola do ostrzyknięcia. Następnie lekarz podaje serię płytkich, śródskórnych iniekcji rozmieszczonych co 1-2 cm.</p>
        <ol>
          <li><strong>Konsultacja i kwalifikacja</strong>: ocena nasilenia pocenia, wykluczenie przyczyny wtórnej i przeciwwskazań;</li>
          <li><strong>Test Minora</strong>: mapowanie obszaru pocenia (wyznacza powierzchnię, nie ocenia nasilenia);</li>
          <li><strong>Znieczulenie</strong>: w pachach zwykle krem znieczulający lub zabieg bez znieczulenia, w dłoniach blokada nerwu, bo znieczulenie powierzchniowe bywa niewystarczające;</li>
          <li><strong>Iniekcje</strong>: w pachy zwykle 10-15 wkłuć na stronę, cienką igłą, śródskórnie;</li>
          <li><strong>Powrót do aktywności</strong>: zwykle od razu po zabiegu, z zachowaniem zaleceń.</li>
        </ol>
        <h3>Dawkowanie toksyny botulinowej w nadpotliwości</h3>
        <p>Dawkę dobiera lekarz do okolicy i preparatu. Dla nadpotliwości pach rejestracyjna dawka preparatu BOTOX wynosi 50 jednostek na pachę, a preparatu Dysport od 100 do 200 jednostek na pachę. Jednostki różnych preparatów toksyny botulinowej nie są wymienne. W leczeniu dłoni stosuje się dawki wyższe, a efekt bywa krótszy.</p>
        <p>Przed wizytą warto ogolić pachy i nie stosować antyperspirantu w dniu zabiegu. Samo podanie trwa zwykle od kilku do kilkunastu minut.</p>
      </>
    ),
  },
  {
    title: 'Po jakim czasie widać efekt i jak długo się utrzymuje?',
    tocLabel: 'Efekt i zalecenia',
    content: (
      <>
        <p>Pierwsze zmniejszenie pocenia pojawia się zwykle po 2-7 dniach, a pełny efekt rozwija się w ciągu około 1-2 tygodni. Po pojedynczym zabiegu na pachy działanie utrzymuje się średnio około 7 miesięcy.</p>
        <p>Według danych rejestracyjnych (ChPL, etykieta FDA) mediana czasu utrzymania efektu po leczeniu pach wynosi około 6,7-7,5 miesiąca, a u części pacjentów (około jednej czwartej) efekt trwa rok lub dłużej. Przy kolejnych zabiegach czas działania zwykle się wydłuża: w badaniu obserwacyjnym mediana rosła z około 5,5 do 8,5 miesiąca. Zabiegu nie powtarza się częściej niż zaleca ChPL danego preparatu (BOTOX nie częściej niż co 16 tygodni, Dysport co 12 tygodni), a w praktyce wielu pacjentów wraca mniej więcej raz w roku.</p>
        <h3>Co robić po zabiegu botoksu na pocenie?</h3>
        <ul>
          <li>przez 24-48 godzin unikaj intensywnego wysiłku, sauny i gorących kąpieli;</li>
          <li>tego dnia odłóż antyperspirant i mocne pocieranie leczonej okolicy;</li>
          <li>niewielkie zaczerwienienie czy zasinienie w miejscach wkłuć ustępuje samoistnie.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Jak skuteczne jest leczenie nadpotliwości toksyną botulinową?',
    tocLabel: 'Skuteczność',
    content: (
      <>
        <p>Skuteczność toksyny botulinowej w nadpotliwości pach jest dobrze udokumentowana w badaniach z randomizacją. U większości pacjentów wydzielanie potu spada o około 80% względem stanu wyjściowego, a wyraźną poprawę odczuwa zdecydowana większość leczonych.</p>
        <p>W badaniu z grupą kontrolną placebo odsetek odpowiedzi (co najmniej 50% redukcji pocenia) wyniósł 94% po 4 tygodniach wobec 36% po placebo, a średnia redukcja wydzielania potu sięgała około 83% (Naumann i Lowe, 2001). W badaniach z użyciem 4-stopniowej skali HDSS poprawę o co najmniej dwa stopnie uzyskiwało około 75% leczonych wobec 25% po placebo. Satysfakcja pacjentów po zabiegu jest wysoka.</p>
        <p>Korzyść dotyczy nie tylko samego pocenia, ale też jakości życia, bo nadpotliwość pach silnie obciąża funkcjonowanie zawodowe i towarzyskie. Do oceny nasilenia i odpowiedzi na leczenie służą skala HDSS oraz kwestionariusz jakości życia DLQI.</p>
      </>
    ),
  },
  {
    title: 'Czy leczenie nadpotliwości toksyną botulinową jest bezpieczne?',
    tocLabel: 'Bezpieczeństwo',
    content: (
      <>
        <p>Toksyna botulinowa w leczeniu nadpotliwości jest dobrze tolerowana, a większość działań niepożądanych jest łagodna i przemijająca. W badaniu z randomizacją odsetek działań niepożądanych po leczeniu pach nie różnił się istotnie od placebo (Naumann i Lowe, 2001).</p>
        <p>Najczęstsze reakcje to przejściowy ból i niewielkie krwawienie w miejscu wkłucia, czasem ból głowy. Po iniekcjach w dłonie u części pacjentów pojawia się czasowe osłabienie siły chwytu, które samoistnie ustępuje w ciągu kilku tygodni; przy standardowym dawkowaniu siła ręki zwykle pozostaje niezmieniona.</p>
        <h3>Pocenie kompensacyjne</h3>
        <p><strong>Pocenie kompensacyjne</strong>, czyli przeniesienie pocenia na inne okolice ciała, po toksynie botulinowej jest minimalne lub nieobecne. To istotna różnica wobec operacyjnej <strong>sympatektomii</strong>, po której kompensacyjne pocenie pojawia się u znacznej części operowanych. Działanie toksyny jest dodatkowo miejscowe i odwracalne, co składa się na korzystny profil bezpieczeństwa zabiegu wykonywanego przez lekarza.</p>
      </>
    ),
  },
  {
    title: 'Alternatywy w leczeniu nadpotliwości - porównanie metod',
    tocLabel: 'Alternatywy i porównanie',
    content: (
      <>
        <p>Toksyna botulinowa to jeden ze stopni leczenia nadpotliwości, a nie pierwszy krok. Leczenie zwykle zaczyna się od antyperspirantów z chlorkiem glinu, a przy nadpotliwości dłoni i stóp od jontoforezy; iniekcje rozważa się przy nasilonym poceniu lub gdy metody miejscowe zawodzą.</p>
        <p>Taka kolejność ma uzasadnienie. Metody miejscowe są tanie i nieinwazyjne, ale bywają niewystarczające lub drażnią skórę. Toksyna botulinowa daje wyraźną ulgę na wiele miesięcy, wymaga jednak powtarzania. Zabiegi dążące do trwałego efektu, jak termoliza mikrofalowa (miraDry) czy chirurgiczna sympatektomia, są skuteczne, ale obarczone większym ryzykiem. Sympatektomię, z uwagi na ryzyko trwałego pocenia kompensacyjnego, rezerwuje się na sam koniec.</p>
        <table>
          <tbody>
            <tr>
              <th>Metoda</th>
              <th>Inwazyjność</th>
              <th>Czas działania</th>
              <th>Kluczowe ograniczenie</th>
            </tr>
            <tr>
              <td>Antyperspirant z chlorkiem glinu</td>
              <td>nieinwazyjna</td>
              <td>doraźnie, wymaga stałego stosowania</td>
              <td>podrażnienie skóry</td>
            </tr>
            <tr>
              <td>Jontoforeza</td>
              <td>nieinwazyjna</td>
              <td>podtrzymująca</td>
              <td>wymaga regularnych powtórzeń</td>
            </tr>
            <tr>
              <td>Toksyna botulinowa</td>
              <td>małoinwazyjna</td>
              <td>około 6-9 miesięcy</td>
              <td>konieczność powtarzania</td>
            </tr>
            <tr>
              <td>Termoliza mikrofalowa (miraDry)</td>
              <td>zabiegowa</td>
              <td>dążąca do trwałej</td>
              <td>koszt, dostępność</td>
            </tr>
            <tr>
              <td>Antycholinergiki doustne</td>
              <td>ogólnoustrojowa</td>
              <td>w trakcie stosowania</td>
              <td>suchość w ustach i inne działania</td>
            </tr>
            <tr>
              <td>Sympatektomia (ETS)</td>
              <td>operacyjna</td>
              <td>trwała</td>
              <td>częste pocenie kompensacyjne</td>
            </tr>
          </tbody>
        </table>
        <p>Do oceny nasilenia i kwalifikacji pomocna jest 4-stopniowa skala <strong>HDSS</strong> (Hyperhidrosis Disease Severity Scale): poprawa o jeden stopień odpowiada w przybliżeniu połowie redukcji pocenia, a o dwa stopnie około 80% (Solish i wsp., 2007). Dobór metody zależy od lokalizacji, nasilenia i odpowiedzi na dotychczasowe leczenie.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje leczenie nadpotliwości we Wrocławiu i czy refunduje je NFZ?',
    tocLabel: 'Cena i NFZ',
    content: (
      <>
        <p>Leczenie nadpotliwości toksyną botulinową w medycynie estetycznej jest procedurą w całości prywatną. Koszt zależy od liczby i rodzaju leczonych okolic (pachy, dłonie, stopy) oraz ilości użytego preparatu i jest ustalany indywidualnie podczas konsultacji.</p>
        <h3>Czy NFZ refunduje leczenie nadpotliwości?</h3>
        <p>Nadpotliwość pierwotna nie znajduje się wśród wskazań refundowanych. NFZ finansuje toksynę botulinową wyłącznie w wybranych programach lekowych (m.in. dystonie, spastyczność, pęcherz neurogenny, profilaktyka migreny przewlekłej), realizowanych w opiece specjalistycznej, a nie w leczeniu nadmiernego pocenia. Dlatego zabieg estetyczny jest odpłatny.</p>
        <p>Ponieważ jednostki różnych preparatów nie są wymienne, a plan leczenia dobiera się indywidualnie, cen nie porównuje się wprost między gabinetami. Aktualne stawki dla naszego gabinetu we Wrocławiu znajdziesz w <Link href="/cennik/">cenniku</Link>, a termin konsultacji ustalisz przez <Link href="/rejestracja/">rejestrację online</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O kwalifikacji do zabiegu, jego przebiegu i ewentualnych przeciwwskazaniach decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Naumann M, Lowe NJ. Botulinum toxin type A in treatment of bilateral primary axillary hyperhidrosis: randomised, parallel group, double blind, placebo controlled trial. BMJ 2001; 323(7313): 596-599 (PMID 11557704).</li>
        <li>Heckmann M, Ceballos-Baumann AO, Plewig G. Botulinum toxin A for axillary hyperhidrosis (excessive sweating). N Engl J Med 2001; 344(7): 488-493 (PMID 11172190).</li>
        <li>Lowe NJ i wsp. Botulinum toxin type A in the treatment of primary axillary hyperhidrosis: a 52-week multicenter double-blind, randomized, placebo-controlled study. J Am Acad Dermatol 2007; 56(4): 604-611 (PMID 17306417).</li>
        <li>Naumann M i wsp. Botulinum toxin type A is a safe and effective treatment for axillary hyperhidrosis over 16 months: a prospective study. Arch Dermatol 2003; 139(6): 731-736 (PMID 12810503).</li>
        <li>Lecouflet M i wsp. Duration of efficacy increases with the repetition of botulinum toxin A injections in primary axillary hyperhidrosis: a study in 83 patients. J Am Acad Dermatol 2013; 69(6): 960-964 (PMID 24035554).</li>
        <li>Saadia D i wsp. Botulinum toxin type A in primary palmar hyperhidrosis: randomized, single-blind, two-dose study. Neurology 2001; 57(11): 2095-2099 (PMID 11739832).</li>
        <li>Lowe NJ i wsp. Efficacy and safety of botulinum toxin type A in the treatment of palmar hyperhidrosis: a double-blind, randomized, placebo-controlled study. Dermatol Surg 2002; 28(9): 822-827 (PMID 12269876).</li>
        <li>Sun J i wsp. Efficacy and safety of botulinum toxin type A in primary axillary hyperhidrosis: a meta-analysis and systematic review. Aesthetic Plast Surg 2025 (PMID 40500510).</li>
        <li>Kouris A i wsp. Muscle weakness in treatment of palmar hyperhidrosis with botulinum toxin type A. J Drugs Dermatol 2014; 13(11): 1315-1316 (PMID 25607695).</li>
        <li>Krogstad AL i wsp. No compensatory sweating after botulinum toxin treatment of palmar hyperhidrosis. Br J Dermatol 2005; 152(2): 329-333 (PMID 15727647).</li>
        <li>Lin ZY, Lin M. Compensatory hyperhidrosis after endoscopic thoracic sympathectomy: a meta-analysis and systematic review. PeerJ 2025; 13: e19097 (PMID 40124609).</li>
        <li>Hornberger J i wsp. Recognition, diagnosis, and treatment of primary focal hyperhidrosis. J Am Acad Dermatol 2004; 51(2): 274-286 (PMID 15280848).</li>
        <li>Solish N i wsp. A comprehensive approach to the recognition, diagnosis, and severity-based treatment of focal hyperhidrosis. Dermatol Surg 2007; 33(8): 908-923 (PMID 17661933).</li>
        <li>Finlay AY, Khan GK. Dermatology Life Quality Index (DLQI). Clin Exp Dermatol 1994; 19(3): 210-216 (PMID 8033378).</li>
        <li>Augustin M i wsp. Prevalence and disease burden of hyperhidrosis in the adult population. Dermatology 2013; 227(1): 10-13 (PMID 23988406).</li>
        <li>McConaghy JR, Fosselman D. Hyperhidrosis: management options. Am Fam Physician 2018; 97(11): 729-734.</li>
        <li>Charakterystyka Produktu Leczniczego (ChPL): BOTOX 100 jednostek Allergan. Rejestr Produktów Leczniczych, URPL.</li>
        <li>Charakterystyka Produktu Leczniczego (ChPL): Dysport 300 j. (abobotulinumtoxinA), Ipsen. Rejestr Produktów Leczniczych, URPL.</li>
        <li>BOTOX (onabotulinumtoxinA) for injection - Full Prescribing Information (severe primary axillary hyperhidrosis). U.S. FDA.</li>
      </ol>
    ),
  },
];

export default function LeczenieNadpotliwosciPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Leczenie nadpotliwości toksyną botulinową Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Skuteczne leczenie nadmiernego pocenia się toksyną botulinową. Długotrwała ulga od hiperhidrozy pach."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/leczenie-nadpotliwosci"
    />
  );
}
