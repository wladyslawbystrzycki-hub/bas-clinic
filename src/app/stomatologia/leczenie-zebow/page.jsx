import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Leczenie zębów Wrocław - endodoncja',
  description: 'Leczenie zębów we Wrocławiu: próchnica, wypełnienia kompozytowe i leczenie kanałowe (endodoncja). Poznaj przebieg zabiegu, odbudowę zęba i kiedy ratować ząb.',
  path: '/stomatologia/leczenie-zebow/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Leczenie zębów' },
];

const FAQ = [
  {
    question: 'Czy leczenie kanałowe boli?',
    answer:
      'Leczenie kanałowe wykonujemy w znieczuleniu miejscowym, dzięki czemu w trakcie zabiegu nie odczuwasz bólu. Po ustąpieniu znieczulenia przez kilka dni może utrzymywać się przejściowy dyskomfort, zwłaszcza przy nagryzaniu. Zwykle ustępuje samoistnie i można go łagodzić lekami przeciwbólowymi, takimi jak ibuprofen.',
  },
  {
    question: 'Czy ząb po leczeniu kanałowym trzeba odbudować lub założyć koronę?',
    answer:
      'Ząb po leczeniu kanałowym jest bardziej kruchy, dlatego zwykle wymaga trwałej odbudowy. Przy niewielkim ubytku wystarcza wypełnienie, a przy dużej utracie tkanek, zwłaszcza w zębach trzonowych, zaleca się wkład koronowo-korzeniowy i koronę protetyczną, które chronią ząb przed złamaniem.',
  },
  {
    question: 'Jak długo wytrzymuje wypełnienie (plomba)?',
    answer:
      'Dobrze wykonane wypełnienie kompozytowe służy zwykle wiele lat. Jego trwałość zależy od higieny, lokalizacji zęba, ryzyka próchnicy oraz nawyków, takich jak zaciskanie zębów. Wypełnienie wymienia się, gdy przestaje szczelnie przylegać lub pojawia się próchnica wtórna, a nie wyłącznie z powodu jego wieku.',
  },
  {
    question: 'Czy po leczeniu kanałowym trzeba brać antybiotyk?',
    answer:
      'Antybiotyk nie jest rutynowym elementem leczenia kanałowego. Bólu zęba nie leczy się antybiotykiem, lecz usunięciem jego przyczyny i lekami przeciwbólowymi. Lekarz przepisuje antybiotyk tylko w wybranych sytuacjach, na przykład przy gorączce, objawach ogólnych lub szerzącym się zakażeniu.',
  },
  {
    question: 'Czy można leczyć zęby w ciąży?',
    answer:
      'Tak, potrzebne leczenie zębów w ciąży jest bezpieczne, a nieleczona infekcja stanowi większe zagrożenie niż sam zabieg. Planowe leczenie najlepiej wykonać w drugim trymestrze. Przed wizytą poinformuj lekarza o ciąży i jej zaawansowaniu, aby dobrał zakres zabiegu i znieczulenie.',
  },
  {
    question: 'Gdzie we Wrocławiu leczyć zęby w Bas Clinic?',
    answer: `Leczenie zębów, w tym leczenie próchnicy i leczenie kanałowe, prowadzimy w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Na wizytę, podczas której oceniamy ząb i planujemy leczenie, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest leczenie zachowawcze zębów i co obejmuje?',
    tocLabel: 'Czym jest',
    content: (
      <>
        <p>Leczenie zachowawcze zębów to dział stomatologii, który zajmuje się rozpoznawaniem i leczeniem próchnicy oraz odbudową uszkodzonych zębów bez ich usuwania. Jego węższą częścią jest endodoncja, czyli leczenie kanałowe chorej miazgi. Celem jest zachowanie własnego, naturalnego zęba tak długo, jak to możliwe.</p>
        <p>Współczesna stomatologia zachowawcza opiera się na podejściu minimalnie inwazyjnym, czyli usuwaniu wyłącznie tkanki nieodwracalnie zniszczonej i maksymalnym oszczędzaniu zdrowego szkliwa oraz zębiny. Międzynarodowy konsensus dotyczący leczenia próchnicy zaleca selektywne, oszczędne usuwanie zmienionych tkanek zamiast rutynowego, całkowitego opracowywania ubytku (Schwendicke i wsp., 2016).</p>
        <p>Leczenie zaczyna się od dokładnej diagnostyki: przeglądu jamy ustnej, oceny każdego zęba oraz zdjęć rentgenowskich, które pokazują próchnicę w miejscach niewidocznych gołym okiem i stan tkanek wokół korzeni. Zakres stomatologii zachowawczej obejmuje:</p>
        <ul>
          <li><strong>leczenie próchnicy</strong> i zakładanie wypełnień (plomb);</li>
          <li><strong>leczenie kanałowe</strong> (endodoncję) zębów z chorą lub martwą miazgą;</li>
          <li><strong>powtórne leczenie kanałowe</strong>, gdy wcześniejsze leczenie zawiodło;</li>
          <li><strong>odbudowę zęba</strong> po leczeniu kanałowym, w tym wkłady i korony;</li>
          <li>profilaktykę i diagnostykę, które pomagają wcześnie wykryć próchnicę.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Próchnica - jak powstaje i jak ją rozpoznać?',
    tocLabel: 'Próchnica',
    content: (
      <>
        <p>Próchnica to choroba, w której bakterie płytki nazębnej przetwarzają cukry z pożywienia na kwasy rozpuszczające tkanki zęba. Proces postępuje etapami i przez długi czas nie boli, dlatego wczesne zmiany wykrywa się najczęściej dopiero podczas wizyty kontrolnej.</p>
        <h3>Etapy rozwoju próchnicy</h3>
        <ul>
          <li><strong>Plama próchnicowa</strong> - początkowa demineralizacja szkliwa w postaci białej lub brązowej plamki; na tym etapie zmiana bywa jeszcze odwracalna dzięki remineralizacji i fluorowi.</li>
          <li><strong>Próchnica szkliwa</strong> - ubytek ograniczony do twardego szkliwa, zwykle jeszcze bezbolesny.</li>
          <li><strong>Próchnica zębiny</strong> - ubytek sięga głębiej, pojawia się nadwrażliwość na słodkie, zimne i gorące.</li>
          <li><strong>Zapalenie miazgi</strong> - bakterie docierają do nerwu zęba; ból bywa silny i samoistny, co często oznacza konieczność leczenia kanałowego.</li>
        </ul>
        <p>Wczesną próchnicę, w tym zmiany bez ubytku, pomaga wykryć ocena wizualna w skali ICDAS oraz zdjęcia rentgenowskie. Brak bólu nie oznacza braku próchnicy, dlatego tak ważne są regularne kontrole. Podstawą zapobiegania pozostają codzienna higiena, ograniczenie cukrów i fluor, którego skuteczność w profilaktyce próchnicy potwierdzają przeglądy badań. Profesjonalną profilaktykę zapewnia <Link href="/stomatologia/higienizacja/">higienizacja</Link>.</p>
      </>
    ),
  },
  {
    title: 'Leczenie próchnicy i wypełnienia (plomby)',
    tocLabel: 'Leczenie próchnicy',
    content: (
      <>
        <p>Leczenie próchnicy polega na usunięciu zmienionych chorobowo tkanek i odtworzeniu kształtu zęba wypełnieniem. W zębach bocznych standardem są dziś wypełnienia z kompozytu, czyli żywicy utwardzanej światłem, które dobrze imitują naturalny ząb.</p>
        <p>Lekarz oczyszcza ubytek, oszczędzając zdrowe tkanki, a następnie warstwowo odbudowuje ząb materiałem kompozytowym i utwardza go lampą. Przy rozległych ubytkach, gdy wypełnienie bezpośrednie nie zapewni trwałości, stosuje się uzupełnienia pośrednie, takie jak inlay i onlay, lub kieruje pacjenta do <Link href="/stomatologia/protetyka-korony/">odbudowy protetycznej</Link>.</p>
        <h3>Jak długo służy wypełnienie?</h3>
        <p>Dobrze wykonane wypełnienie kompozytowe w zębie bocznym służy zwykle wiele lat. Przeglądy badań wskazują roczny odsetek niepowodzeń rzędu kilku procent, a najczęstszą przyczyną wymiany są próchnica wtórna i pęknięcia. Trwałość zależy od materiału, a w równym stopniu od higieny, indywidualnego ryzyka próchnicy i codziennych nawyków, takich jak zaciskanie zębów. Dlatego wypełnienie wymienia się, gdy przestaje szczelnie przylegać, a nie wyłącznie z powodu jego wieku.</p>
      </>
    ),
  },
  {
    title: 'Leczenie kanałowe (endodoncja) - kiedy i jak przebiega?',
    tocLabel: 'Leczenie kanałowe',
    content: (
      <>
        <p>Leczenie kanałowe wykonuje się, gdy miazga zęba, czyli jego nerw, ulega nieodwracalnemu zapaleniu lub martwicy, najczęściej z powodu głębokiej próchnicy lub urazu. Pozwala zachować ząb, który dawniej trzeba by usunąć.</p>
        <h3>Przebieg leczenia krok po kroku</h3>
        <ol>
          <li><strong>Diagnostyka</strong> - badanie zęba, ocena żywotności miazgi i zdjęcie rentgenowskie, które pokazuje kanały oraz tkanki wokół korzenia.</li>
          <li><strong>Znieczulenie miejscowe</strong> - w trakcie zabiegu nie odczuwasz bólu.</li>
          <li><strong>Izolacja koferdamem</strong> - gumowa osłona zapewnia suche, czyste pole zabiegowe i chroni kanały przed bakteriami ze śliny.</li>
          <li><strong>Opracowanie kanałów</strong> - usunięcie chorej miazgi oraz oczyszczenie i dezynfekcja kanałów. Praca w dużym powiększeniu, nazywana też leczeniem kanałowym pod mikroskopem, wiąże się z dokładniejszą lokalizacją i oczyszczeniem nawet trudno dostępnych kanałów.</li>
          <li><strong>Wypełnienie kanałów</strong> - szczelne zamknięcie kanałów, najczęściej gutaperką, oraz kontrolne zdjęcie rentgenowskie.</li>
        </ol>
        <p>Nowoczesne leczenie kanałowe jest skuteczne u większości pacjentów. Przeglądy badań pokazują, że tkanki wokół korzenia goją się u około 8 na 10 leczonych zębów, a sam ząb zostaje zachowany u około 87-93% pacjentów w wieloletniej obserwacji (Ng i wsp., 2010). Dodatkową ochroną jest praca w izolacji koferdamem, którą badania łączą z wyższą przeżywalnością leczonych zębów.</p>
      </>
    ),
  },
  {
    title: 'Odbudowa zęba po leczeniu kanałowym',
    tocLabel: 'Odbudowa po leczeniu',
    content: (
      <>
        <p>Ząb po leczeniu kanałowym jest pozbawiony miazgi i odżywienia, przez co staje się bardziej kruchy i podatny na pęknięcia, zwłaszcza w odcinku bocznym. Dlatego samo wypełnienie nie zawsze wystarcza i często potrzebna jest mocniejsza odbudowa.</p>
        <p>Trwała odbudowa chroni leczony ząb przed złamaniem i wydłuża czas jego użytkowania. Badania obserwacyjne wiążą pokrycie zęba koroną z rzadszą utratą zębów leczonych kanałowo, a Europejskie Towarzystwo Endodontyczne zaleca w zębach bocznych z dużą utratą tkanek odbudowę z pokryciem guzków, na przykład koroną lub nakładem (ESE, 2021). Jednocześnie dobrej jakości badania z randomizacją są ograniczone, dlatego sposób odbudowy dobiera się indywidualnie.</p>
        <p>W praktyce decyduje ilość pozostałych zdrowych tkanek. Przy niewielkim ubytku wystarcza wypełnienie, a przy znacznej utracie struktury, częstej w zębach trzonowych, stosuje się wkład koronowo-korzeniowy i <Link href="/stomatologia/protetyka-korony/">koronę protetyczną</Link>. Jeśli zęba nie da się już odbudować, jego funkcję może przejąć <Link href="/stomatologia/implanty-zebowe/">implant zębowy</Link>, choć zachowanie własnego, dobrze odbudowanego zęba jest zwykle korzystniejsze.</p>
      </>
    ),
  },
  {
    title: 'Ratować czy usunąć ząb? Przegląd metod leczenia',
    tocLabel: 'Ratować czy usunąć',
    content: (
      <>
        <p>Współczesna stomatologia dąży do zachowania własnego zęba, ale nie każdy ząb da się uratować. Wybór metody zależy od tego, jak bardzo ząb jest zniszczony i czy ma zdrowe podłoże w kości.</p>
        <table>
          <tbody>
            <tr>
              <th>Metoda</th>
              <th>Kiedy stosowana</th>
              <th>Co zachowuje</th>
            </tr>
            <tr>
              <td>Wypełnienie (plomba)</td>
              <td>Próchnica w obrębie szkliwa i zębiny, żywa miazga</td>
              <td>Najmniej inwazyjne, zachowuje żywy ząb</td>
            </tr>
            <tr>
              <td>Leczenie biologiczne miazgi</td>
              <td>Wybrane przypadki odsłonięcia lub wczesnego zapalenia miazgi</td>
              <td>Próba zachowania żywej miazgi, metoda dobierana indywidualnie</td>
            </tr>
            <tr>
              <td>Leczenie kanałowe</td>
              <td>Nieodwracalne zapalenie miazgi lub jej martwica</td>
              <td>Usuwa nerw i ratuje ząb, który wymaga potem odbudowy</td>
            </tr>
            <tr>
              <td>Powtórne leczenie kanałowe</td>
              <td>Nawrót zmian po wcześniejszym leczeniu kanałowym</td>
              <td>Kolejna szansa na zachowanie zęba bez jego usuwania</td>
            </tr>
            <tr>
              <td>Resekcja wierzchołka korzenia</td>
              <td>Gdy leczenia kanałowego nie można powtórzyć</td>
              <td>Zabieg z zakresu chirurgii stomatologicznej</td>
            </tr>
            <tr>
              <td>Usunięcie zęba i implant</td>
              <td>Pęknięcie korzenia, perforacja, brak podparcia w kości</td>
              <td>Wymiana zęba na implant</td>
            </tr>
          </tbody>
        </table>
        <p>Decyzję podejmuje się po diagnostyce, w tym po zdjęciu rentgenowskim. O konieczności usunięcia zęba przesądzają zwykle podłużne pęknięcie korzenia, rozległa perforacja lub utrata podparcia kostnego, czyli sytuacje, w których leczenie zachowawcze nie daje już trwałego efektu. Gdy leczenia kanałowego nie da się powtórzyć, pomocna bywa <Link href="/stomatologia/chirurgia/">chirurgia stomatologiczna</Link>, a utracony ząb można zastąpić <Link href="/stomatologia/implanty-zebowe/">implantem</Link>.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania, ryzyka i powikłania',
    tocLabel: 'Przeciwwskazania i ryzyka',
    content: (
      <>
        <p>Leczenie zachowawcze i kanałowe to bezpieczne, rutynowe procedury, ale jak każda interwencja medyczna mają swoje ograniczenia i możliwe powikłania. Warto je znać przed wizytą.</p>
        <ul>
          <li><strong>Kiedy leczenie kanałowe nie jest możliwe</strong> - podłużne pęknięcie korzenia, rozległa perforacja lub brak podparcia w kości zwykle oznaczają, że zęba nie da się trwale uratować i konieczne jest jego usunięcie.</li>
          <li><strong>Przejściowy ból po zabiegu</strong> - dyskomfort lub ból przy nagryzaniu przez kilka dni jest częsty i zwykle ustępuje; pomagają ibuprofen lub paracetamol. Ból narastający lub utrzymujący się dłużej wymaga kontroli.</li>
          <li><strong>Rzadkie powikłania endodontyczne</strong> - może dojść do złamania cienkiego narzędzia w kanale lub pominięcia dodatkowego kanału; precyzję zwiększa praca w powiększeniu. Bardzo rzadko zdarza się podrażnienie tkanek płynem do płukania kanałów.</li>
          <li><strong>Leki przeciwzakrzepowe</strong> - przy rutynowym leczeniu kanałowym zwykle nie trzeba ich odstawiać. Nie zmieniaj dawkowania samodzielnie i poinformuj lekarza o przyjmowanych lekach; kwestia ta dotyczy głównie etapów chirurgicznych.</li>
          <li><strong>Ciąża</strong> - potrzebne leczenie jest bezpieczne, a planowe zabiegi najlepiej wykonać w drugim trymestrze; nieleczona infekcja jest większym zagrożeniem niż samo leczenie.</li>
          <li><strong>Antybiotyk tylko w razie potrzeby</strong> - bólu zęba nie leczy się antybiotykiem, lecz usunięciem przyczyny i lekami przeciwbólowymi; antybiotyk jest wskazany jedynie przy objawach ogólnych lub szerzącym się zakażeniu (ADA, 2019).</li>
          <li><strong>Alergia na lateks</strong> - dla uczulonych pacjentów dostępny jest koferdam bezlateksowy.</li>
        </ul>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji ani badania stomatologicznego. O wskazaniach, przeciwwskazaniach i wyborze metody leczenia decyduje lekarz po zbadaniu pacjenta.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje leczenie zębów we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content: (
      <>
        <p>Koszt leczenia zębów zależy przede wszystkim od rodzaju i zakresu zabiegu. Inaczej wycenia się proste wypełnienie, a inaczej leczenie kanałowe wielokanałowego trzonowca z późniejszą odbudową.</p>
        <ul>
          <li>rodzaj zabiegu: wypełnienie, leczenie kanałowe czy odbudowa zęba;</li>
          <li>liczba kanałów w leczonym zębie, od jednego do kilku;</li>
          <li>rozległość ubytku i sposób odbudowy: wypełnienie, wkład lub korona;</li>
          <li>konieczność dodatkowej diagnostyki, na przykład zdjęć rentgenowskich.</li>
        </ul>
        <p>Część świadczeń obejmuje refundacja Narodowego Funduszu Zdrowia, jednak zakres procedur i materiałów jest wtedy ograniczony, a leczenie prywatne daje szerszy wybór metod. Aktualne stawki znajdziesz w naszym <Link href="/cennik/">cenniku</Link>, a indywidualny plan i kosztorys przedstawiamy podczas konsultacji, na którą umówisz się przez <Link href="/rejestracja/">rejestrację online</Link>.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: (
      <ol>
        <li>Schwendicke F, i wsp. Managing Carious Lesions: Consensus Recommendations on Carious Tissue Removal. Advances in Dental Research, 2016. PMID: 27099358.</li>
        <li>Ricketts D, i wsp. Operative caries management in adults and children. Cochrane Database of Systematic Reviews, 2013. PMID: 23543523.</li>
        <li>Walsh T, i wsp. Fluoride toothpastes of different concentrations for preventing dental caries. Cochrane Database of Systematic Reviews, 2019. PMID: 30829399.</li>
        <li>Opdam NJ, i wsp. Longevity of posterior composite restorations: a systematic review and meta-analysis. Journal of Dental Research, 2014. PMID: 25048250.</li>
        <li>Ng YL, Mann V, Gulabivala K. Tooth survival following non-surgical root canal treatment: a systematic review. International Endodontic Journal, 2010. PMID: 20158529.</li>
        <li>Manfredi M, i wsp. Single versus multiple visits for endodontic treatment of permanent teeth. Cochrane Database of Systematic Reviews, 2016. PMID: 27905673.</li>
        <li>European Society of Endodontology. Position statement: The restoration of root filled teeth. International Endodontic Journal, 2021. PMID: 34378217.</li>
        <li>Sequeira-Byron P, i wsp. Single crowns versus conventional fillings for the restoration of root-filled teeth. Cochrane Database of Systematic Reviews, 2015. PMID: 26403154.</li>
        <li>Segura-Egea JJ, i wsp. European Society of Endodontology position statement: the use of antibiotics in endodontics. International Endodontic Journal, 2018. PMID: 28436043.</li>
        <li>Lockhart PB, i wsp. Evidence-based clinical practice guideline on antibiotic use for the urgent management of pulpal- and periapical-related dental pain and intraoral swelling (American Dental Association). JADA, 2019. PMID: 31668170.</li>
      </ol>
    ),
  },
];

export default function LeczeniZebowPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Leczenie zębów Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Leczenie zębów w Bas Clinic we Wrocławiu. Leczenie próchnicy, estetyczne wypełnienia i leczenie kanałowe pod mikroskopem oraz odbudowa zęba po endodoncji."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      faqImage="/uploads/services/leczenie-zebow-faq-bas-clinic-wroclaw.webp"
      faqImageAlt="Pacjentka w gabinecie stomatologicznym Bas Clinic we Wrocławiu"
      slug="stomatologia/leczenie-zebow"
    />
  );
}
