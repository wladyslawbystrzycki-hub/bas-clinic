import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Aparaty stałe Wrocław: metalowe i ceramiczne',
  description: 'Aparaty stałe we Wrocławiu: metalowe, ceramiczne i samoligaturujące. Korekta wad zgryzu u dzieci i dorosłych, diagnostyka skanerem wewnątrzustnym w Bas Clinic.',
  path: '/stomatologia/aparaty-stale/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Ortodoncja', href: '/stomatologia/ortodoncja/' },
  { label: 'Aparaty stałe' },
];

const FAQ = [
  { question: 'Ile trwa leczenie aparatem stałym?', answer: 'Leczenie aparatem stałym trwa średnio około dwóch lat, choć czas zależy od rodzaju wady zgryzu, wieku i współpracy pacjenta. U dorosłych jest zbliżony do tego u nastolatków. Dokładny czas ortodonta oszacuje po diagnostyce, a wizyty kontrolne odbywają się co 4-6 tygodni.' },
  { question: 'Czy aparat stały jest refundowany przez NFZ?', answer: 'Nie. NFZ refunduje leczenie ortodontyczne wyłącznie aparatem ruchomym i tylko u dzieci do ukończenia 12. roku życia (z kontynuacją do 13. roku życia). Aparat stały, niezależnie od wieku pacjenta, pozostaje świadczeniem w pełni prywatnym.' },
  { question: 'Czy zakładanie aparatu stałego boli?', answer: 'Samo założenie aparatu jest niebolesne, bo polega na przyklejeniu zamków do zębów. Dyskomfort pojawia się dopiero po kilku godzinach jako reakcja na nacisk: nasila się do około doby i ustępuje w ciągu kilku dni. W razie potrzeby pomagają standardowe leki przeciwbólowe.' },
  { question: 'Aparat metalowy czy ceramiczny - który wybrać?', answer: 'Skuteczność korekty zgryzu jest podobna dla obu rodzajów. Aparat ceramiczny jest mniej widoczny, bo zamki mają kolor zęba, ale jest bardziej kruchy i częściej się odkleja. Aparat metalowy jest trwalszy i tańszy. Wybór zależy od oczekiwań estetycznych i budżetu.' },
  { question: 'Czy aparat stały można założyć u dorosłych?', answer: 'Tak, zęby można przesuwać w każdym wieku, a leczenie aparatem stałym u dorosłych jest dziś powszechne. Ruch zębów bywa nieco wolniejszy, a warunkiem jest zdrowe, ustabilizowane przyzębie. Czas leczenia jest zbliżony do tego u nastolatków.' },
  { question: 'Gdzie we Wrocławiu założyć aparat stały?', answer: `Aparaty stałe zakładamy w Bas Clinic we Wrocławiu przy ${CLINIC.address.street}. Na konsultację ortodontyczną, podczas której oceniamy wadę zgryzu i dobieramy rodzaj aparatu, umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.` },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest aparat stały i jakie wady zgryzu koryguje?',
    tocLabel: 'Czym jest i wskazania',
    content:
      '<p><strong>Aparat stały</strong> to ortodontyczne urządzenie złożone z <strong>zamków (bracketów)</strong> przyklejonych do każdego zęba oraz <strong>łuku ortodontycznego</strong>, który wpina się w zamki i wywiera delikatny, stały nacisk przesuwający zęby w zaplanowane położenie. W odróżnieniu od aparatu zdejmowanego pacjent nie wyjmuje go samodzielnie, dlatego działa nieprzerwanie przez całą dobę.</p>' +
      '<p>Pod wpływem kontrolowanej siły zachodzi przebudowa kości wokół korzenia: po stronie ucisku kość się resorbuje, a po stronie przeciwnej odbudowuje, co pozwala zębowi zmieniać położenie. Pierwsze, cienkie łuki niklowo-tytanowe (NiTi) z pamięcią kształtu służą wyrównaniu stłoczeń; w miarę postępu leczenia ortodonta wymienia je na sztywniejsze.</p>' +
      '<p>Aparat stały koryguje większość wad zgryzu i nieprawidłowego ustawienia zębów:</p>' +
      '<ul>' +
      '<li>stłoczenia i zachodzenie zębów na siebie;</li>' +
      '<li>szpary między zębami (diastema, tremy);</li>' +
      '<li>zgryz głęboki, otwarty i krzyżowy;</li>' +
      '<li>nadmierny nagryz poziomy oraz wady doprzednie i dotylne.</li>' +
      '</ul>' +
      '<p>Potrzebę leczenia ocenia się m.in. wystandaryzowanym wskaźnikiem IOTN. U dzieci we wczesnym etapie bywa wystarczający <a href="/stomatologia/aparaty-ruchome/">aparat ruchomy</a>, a w łagodniejszych wadach estetycznych alternatywą bywają <a href="/stomatologia/alignery/">przezroczyste nakładki</a>. Pełny przegląd metod znajdziesz na stronie <a href="/stomatologia/ortodoncja/">ortodoncji</a>, a leczenie najmłodszych opisujemy w sekcji <a href="/stomatologia/dziecieca/">stomatologii dziecięcej</a>.</p>',
  },
  {
    title: 'Rodzaje aparatów stałych: metalowy, ceramiczny, samoligaturujący i lingwalny',
    tocLabel: 'Rodzaje aparatów',
    content:
      '<p>Aparaty stałe różnią się głównie materiałem zamków i sposobem mocowania łuku, natomiast sama korekta zgryzu przebiega podobnie. Wybór dotyczy przede wszystkim estetyki, kosztu i trwałości, a nie tego, czy zęby się wyrównają.</p>' +
      '<table>' +
      '<tr><th>Rodzaj</th><th>Estetyka</th><th>Cechy szczególne</th></tr>' +
      '<tr><td>Metalowy</td><td>widoczny</td><td>trwały, ekonomiczny, uniwersalny</td></tr>' +
      '<tr><td>Ceramiczny (estetyczny)</td><td>mało widoczny, w kolorze zęba</td><td>bardziej kruchy, częściej się odkleja</td></tr>' +
      '<tr><td>Samoligaturujący</td><td>metalowy lub ceramiczny</td><td>łuk trzyma zatrzask zamiast ligatury</td></tr>' +
      '<tr><td>Lingwalny</td><td>niewidoczny od zewnątrz</td><td>okres adaptacji mowy, dłuższy montaż</td></tr>' +
      '</table>' +
      '<h3>Czy aparat samoligaturujący leczy szybciej?</h3>' +
      '<p>To częsty mit. Randomizowane badania i przeglądy systematyczne nie wykazały, by zamki samoligaturujące skracały leczenie, zmniejszały liczbę wizyt czy ból w porównaniu z klasycznymi (wieloośrodkowe badanie kliniczne, 2016). Ich zaleta to wygoda pracy ortodonty, a nie krótsza terapia.</p>' +
      '<h3>Ceramiczny czy lingwalny dla estetyki?</h3>' +
      '<p>Zamki ceramiczne są znacznie mniej widoczne, ale w badaniach klinicznych odklejają się częściej niż metalowe i łatwiej pękają. Aparat lingwalny montowany od strony języka pozostaje niewidoczny od zewnątrz, lecz częściej wiąże się z przejściową bolesnością języka i trudnościami w mowie. Dlatego materiał dobiera się do wielkości sił żucia i oczekiwań estetycznych.</p>',
  },
  {
    title: 'Jak przebiega leczenie aparatem stałym i ile trwa?',
    tocLabel: 'Przebieg i czas',
    content:
      '<p>Leczenie aparatem stałym to proces rozłożony na kilkanaście miesięcy, zaplanowany po dokładnej diagnostyce. Średni czas leczenia to około dwóch lat (metaanaliza, 2017), choć zależy od rodzaju wady i współpracy pacjenta.</p>' +
      '<ol>' +
      '<li>Konsultacja i diagnostyka: badanie, zdjęcie pantomograficzne, w razie potrzeby cefalometria oraz <strong>skan wewnątrzustny</strong> zamiast tradycyjnych wycisków.</li>' +
      '<li>Plan leczenia: ustalenie celu, rodzaju aparatu i przybliżonego czasu terapii.</li>' +
      '<li>Montaż aparatu: przyklejenie zamków i założenie pierwszego łuku (zwykle od 1 do 2 godzin).</li>' +
      '<li>Wizyty kontrolne co 4-6 tygodni: wymiana lub aktywacja łuków i ocena postępu.</li>' +
      '<li>Zdjęcie aparatu i rozpoczęcie fazy retencji utrwalającej efekt.</li>' +
      '</ol>' +
      '<p>Czas leczenia u dorosłych jest zbliżony do tego u nastolatków, choć ruch zębów na starcie bywa wolniejszy. Aparat działa niezależnie od współpracy, ale regularne wizyty i dobra higiena wpływają na tempo i wynik leczenia.</p>',
  },
  {
    title: 'Czy aparat stały boli? Komfort, adaptacja i dieta',
    tocLabel: 'Czy boli, dieta',
    content:
      '<p>Samo założenie aparatu jest niebolesne, bo polega na przyklejeniu zamków bez ingerencji w ząb. Dyskomfort pojawia się dopiero później, jako reakcja na nacisk przesuwający zęby.</p>' +
      '<p>Ból ortodontyczny ma przewidywalny przebieg: zwykle pojawia się po kilku godzinach od montażu lub wymiany łuku, nasila do około doby i stopniowo ustępuje w ciągu 5-7 dni. W razie potrzeby pomagają standardowe leki przeciwbólowe. Ostre brzegi mogą podrażniać policzki i wargi w pierwszych dniach, dlatego stosuje się wosk ortodontyczny.</p>' +
      '<h3>Co jeść z aparatem stałym?</h3>' +
      '<p>W pierwszych dniach po założeniu i po każdej aktywacji warto wybierać miękkie posiłki. Przez całe leczenie unikaj pokarmów twardych i lepkich (orzechy, twarde pieczywo, toffi, guma), które mogą odkleić zamek lub wygiąć łuk. Twarde owoce i warzywa lepiej kroić na kawałki.</p>',
  },
  {
    title: 'Higiena i białe plamy: jak chronić zęby podczas leczenia',
    tocLabel: 'Higiena i białe plamy',
    content:
      '<p>Najczęstszym powikłaniem leczenia stałym aparatem nie jest ból, lecz <strong>demineralizacja szkliwa</strong>, czyli białe plamy (white spot lesions) wokół zamków. To wczesna postać próchnicy, której można zapobiec.</p>' +
      '<p>Zamki i łuki tworzą nowe miejsca zalegania płytki nazębnej, których nie usuwa zwykła nić dentystyczna. W metaanalizach nowe odwapnienia pojawiają się u znacznej części pacjentów leczonych aparatem stałym, blisko połowy, i niemal zawsze towarzyszy im niedostateczna higiena. Dlatego podczas leczenia codzienna, dokładna higiena ma większe znaczenie niż przy zdrowych zębach.</p>' +
      '<p>W praktyce zalecamy szczoteczkę ortodontyczną, szczoteczki międzyzębowe i irygator oraz preparaty z fluorem. Przegląd Cochrane (Benson i wsp., 2019) potwierdza, że fluor w odpowiednim stężeniu zmniejsza ryzyko odwapnień podczas leczenia, choć pewność dowodów co do najlepszej metody jest niska. Preparaty z CPP-ACP bywają stosowane pomocniczo, ale nie przewyższają samego fluoru. Fundamentem pozostają domowa higiena i regularna <a href="/stomatologia/higienizacja/">profesjonalna higienizacja</a>, a ogniska próchnicy trzeba <a href="/stomatologia/leczenie-zebow/">leczyć</a> przed założeniem aparatu.</p>',
  },
  {
    title: 'Retencja po leczeniu: jak utrwalić efekt i uniknąć nawrotu',
    tocLabel: 'Retencja po leczeniu',
    content:
      '<p>Zdjęcie aparatu nie kończy leczenia ortodontycznego. Zęby mają naturalną tendencję do powrotu w pobliże dawnego położenia (nawrót), dlatego po fazie aktywnej zakłada się <strong>retencję</strong>.</p>' +
      '<p>Retencję utrzymuje się na dwa sposoby: <strong>retainer stały</strong> (cienki drut przyklejony od wewnętrznej strony zębów) albo <strong>przezroczyste nakładki retencyjne</strong> noszone głównie w nocy. Przegląd Cochrane (Littlewood i wsp., 2023) porównał oba podejścia i nie wskazał jednego wyraźnie lepszego rozwiązania, a pewność dowodów jest niska. Dobór zależy od rodzaju wady, ustawienia zębów i preferencji pacjenta.</p>' +
      '<p>Retencja bywa długotrwała, często wieloletnia, bo stabilność efektu zależy od konsekwentnego noszenia retainera. Po zakończeniu leczenia część pacjentów decyduje się też na <a href="/stomatologia/wybielanie-zebow/">wybielanie zębów</a>, gdy zależy im na dopracowaniu estetyki uśmiechu.</p>',
  },
  {
    title: 'Przeciwwskazania i bezpieczeństwo leczenia',
    tocLabel: 'Przeciwwskazania i bezpieczeństwo',
    content:
      '<p>Aparatu stałego nie zakłada się, dopóki w jamie ustnej toczy się aktywny problem, który najpierw trzeba opanować. Pominięcie tego etapu zwiększa ryzyko powikłań i osłabia wynik leczenia.</p>' +
      '<ul>' +
      '<li><strong>Aktywna próchnica i nieszczelne wypełnienia</strong> wymagają wcześniejszego <a href="/stomatologia/leczenie-zebow/">leczenia zachowawczego</a>.</li>' +
      '<li><strong>Nieleczona choroba przyzębia</strong> wymaga stabilizacji i <a href="/stomatologia/higienizacja/">profesjonalnej higienizacji</a>; leczenie ortodontyczne przy zredukowanym przyzębiu jest możliwe, ale dopiero po opanowaniu stanu zapalnego i przy minimalnych siłach.</li>' +
      '<li><strong>Niedostateczna higiena</strong> zwiększa ryzyko białych plam i próchnicy wokół zamków.</li>' +
      '</ul>' +
      '<p>Leczenie aparatem stałym jest dobrze poznane i bezpieczne, ma jednak znane następstwa. Resorpcja korzeni wywołana siłą ortodontyczną jest niemal nieodłączna, lecz u większości pacjentów pozostaje niewielka i klinicznie nieistotna. Wskaźniki stanu dziąseł zwykle przejściowo pogarszają się w trakcie leczenia i wracają do normy po zdjęciu aparatu przy dobrej higienie. Leczenie jest możliwe w każdym wieku, choć u dorosłych ruch zębów bywa wolniejszy.</p>' +
      '<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O wskazaniach, doborze aparatu i ewentualnych przeciwwskazaniach decyduje ortodonta podczas indywidualnego badania.</p>',
  },
  {
    title: 'Ile kosztuje aparat stały we Wrocławiu? Cena i NFZ',
    tocLabel: 'Cena i NFZ Wrocław',
    content:
      '<p>Koszt leczenia aparatem stałym we Wrocławiu zależy przede wszystkim od rodzaju aparatu i złożoności wady zgryzu. Rozliczenie prowadzi się zwykle osobno za każdy łuk (górny i dolny) oraz za cykliczne wizyty kontrolne.</p>' +
      '<ul>' +
      '<li>rodzaj zamków: metalowe, ceramiczne, samoligaturujące lub lingwalne;</li>' +
      '<li>złożoność wady i przewidywany czas leczenia;</li>' +
      '<li>zakres diagnostyki i liczba wizyt kontrolnych;</li>' +
      '<li>faza retencji po zakończeniu leczenia.</li>' +
      '</ul>' +
      '<p><strong>Refundacja NFZ:</strong> bezpłatne leczenie ortodontyczne obejmuje wyłącznie <strong>aparat ruchomy</strong> i tylko u dzieci do ukończenia 12. roku życia (z kontynuacją do 13. roku życia). <strong>Aparat stały nie jest refundowany przez NFZ w żadnym wieku</strong> i u dzieci, i u dorosłych pozostaje świadczeniem prywatnym. Aktualne stawki znajdziesz w zakładce <a href="/cennik/">cennik</a>, a indywidualny plan z wyceną przygotujemy podczas <a href="/rejestracja/">wizyty</a>.</p>',
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content:
      '<ol>' +
      '<li>Cochrane: Initial arch wires used in orthodontic treatment with fixed appliances. Cochrane Database Syst Rev 2024 (PMID 38319008).</li>' +
      '<li>Systematic review on self-ligating vs. conventional brackets: initial pain, number of visits, treatment time. J Orofac Orthop 2013 (PMID 23299650).</li>' +
      '<li>A multi-center randomized controlled trial to compare a self-ligating bracket with a conventional bracket in a UK population. Part 1: Treatment efficiency. Angle Orthod 2016 (PMID 25853795).</li>' +
      '<li>Self-ligating brackets in orthodontics. A systematic review. Angle Orthod 2010 (PMID 20050755).</li>' +
      '<li>Metallic vs Ceramic Bracket Failures After 12 Months of Treatment: A Prospective Clinical Trial. Int Dent J 2024 (PMID 38744578).</li>' +
      '<li>Comparison of adverse effects between lingual and labial orthodontic treatment. Angle Orthod 2013 (PMID 23581503).</li>' +
      '<li>Lingual vs. labial fixed orthodontic appliances: systematic review and meta-analysis of treatment effects. Eur J Oral Sci 2016 (PMID 26916846).</li>' +
      '<li>Critical evaluation of incidence and prevalence of white spot lesions during fixed orthodontic appliance treatment: A meta-analysis. J Int Soc Prev Community Dent 2015 (PMID 26759794).</li>' +
      '<li>Benson PE i wsp. Fluorides for preventing early tooth decay (demineralised lesions) during fixed brace treatment. Cochrane Database Syst Rev 2019 (PMID 31742669).</li>' +
      '<li>Effectiveness of CPP-ACP-containing products in the prevention and treatment of white spot lesions in orthodontic patients: A systematic review. J Investig Clin Dent 2019 (PMID 30680921).</li>' +
      '<li>Interspace/interdental brushes for oral hygiene in orthodontic patients with fixed appliances. Cochrane Database Syst Rev 2007 (PMID 17636797).</li>' +
      '<li>Under pressure: mechanisms and risk factors for orthodontically induced inflammatory root resorption: a systematic review. Eur J Orthod 2023 (PMID 37366151).</li>' +
      '<li>Factors associated with orthodontic pain. J Oral Rehabil 2021 (PMID 34273191).</li>' +
      '<li>Monk AB i wsp. Pharmacological interventions for pain relief during orthodontic treatment. Cochrane Database Syst Rev 2017 (PMID 29182798).</li>' +
      '<li>Outcomes of comprehensive fixed appliance orthodontic treatment: A systematic review with meta-analysis. Korean J Orthod 2017 (PMID 29090128).</li>' +
      '<li>Duration of orthodontic treatment with fixed appliances in adolescents and adults: a systematic review with meta-analysis. Prog Orthod 2020 (PMID 33015719).</li>' +
      '<li>Orthodontic Fixed Appliance and Periodontal Status: An Updated Systematic Review. Open Dent J 2018 (PMID 30369970).</li>' +
      '<li>Orthodontic treatment in periodontally compromised patients: a systematic review. Clin Oral Investig 2023 (PMID 36502508).</li>' +
      '<li>Effect of orthodontic therapy in periodontitis and non-periodontitis patients: a systematic review with meta-analysis. J Clin Periodontol 2022 (PMID 33998045).</li>' +
      '<li>Martin C, Littlewood SJ i wsp. Retention procedures for stabilising tooth position after treatment with orthodontic braces. Cochrane Database Syst Rev 2023 (PMID 37219527).</li>' +
      '<li>The age-related effects on orthodontic tooth movement and the surrounding periodontal environment. Front Physiol 2024 (PMID 39308977).</li>' +
      '<li>Narodowy Fundusz Zdrowia. Leczenie ortodontyczne: zakres refundacji (aparat ruchomy u dzieci do 12. roku życia).</li>' +
      '</ol>',
  },
];

export default function AparatyStalePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Aparaty stałe Wrocław"
      heroSubtitle="Ortodoncja"
      heroDescription="Aparaty stałe metalowe i ceramiczne w Bas Clinic we Wrocławiu. Korygujemy wady zgryzu u dzieci i dorosłych, planując leczenie na podstawie diagnostyki i skanu wewnątrzustnego."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="stomatologia/aparaty-stale"
    />
  );
}
