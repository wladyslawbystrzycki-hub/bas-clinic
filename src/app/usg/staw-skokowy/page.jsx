import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'USG stawu skokowego Wrocław - po skręceniu',
  description:
    'USG stawu skokowego (USG kostki) we Wrocławiu - ocena więzadeł i ścięgien po skręceniu, także badanie dynamiczne. Bezbolesnie, bez promieniowania. Bas Clinic.',
  path: '/usg/staw-skokowy/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG stawu skokowego' },
];

const RELATED = ['usg/stawy', 'usg/stopa', 'usg/tkanki-miekkie'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG stawu skokowego?',
    content:
      '<p><strong>USG stawu skokowego</strong> to ultrasonografia narządu ruchu, która ocenia kostkę, czyli staw łączący goleń ze stopą, oraz otaczające ją tkanki miękkie. Badanie obrazuje więzadła, ścięgna, kaletki maziowe i błonę maziową w czasie rzeczywistym, bez promieniowania jonizującego.</p>' +
      '<p>Ultrasonografia stawu skokowego, nazywana też USG kostki, wykorzystuje głowicę liniową wysokiej częstotliwości (zwykle powyżej 12 MHz), która dokładnie obrazuje położone powierzchownie struktury okolicy kostki. Istotną zaletą metody jest ocena dynamiczna: obserwacja więzadeł i ścięgien podczas ruchu oraz porównanie z drugą, zdrową kończyną, czego nie umożliwia statyczny rezonans magnetyczny.</p>' +
      '<p>USG stawu skokowego jest częścią szerszej diagnostyki narządu ruchu, jaką jest <a href="/usg/stawy/">USG stawów</a>. Badanie jest nieinwazyjne, bezbolesne i w razie potrzeby można je powtarzać, na przykład w kontroli gojenia po urazie.</p>',
  },
  {
    title: 'Co ocenia USG stawu skokowego? Więzadła, ścięgna i struktury kostki',
    tocLabel: 'Co ocenia badanie',
    content:
      '<p>USG stawu skokowego ocenia kostkę w czterech okolicach (przedniej, bocznej, przyśrodkowej i tylnej), a w każdej z nich uwidacznia więzadła, ścięgna oraz sam staw z błoną maziową. Taki systematyczny przegląd pozwala odnieść objawy do konkretnej, uszkodzonej struktury.</p>' +
      '<h3>Więzadła boczne kostki (ATFL, CFL, PTFL)</h3>' +
      '<p>Kompleks więzadeł bocznych ulega uszkodzeniu przy najczęstszym mechanizmie urazu, czyli podwinięciu stopy do wewnątrz (inwersji). <strong>Więzadło skokowo-strzałkowe przednie (ATFL)</strong> jest najczęściej uszkadzanym więzadłem stawu skokowego i to ono najlepiej poddaje się ocenie ultrasonograficznej. <strong>Więzadło piętowo-strzałkowe (CFL)</strong> leży głębiej, pod ścięgnami strzałkowymi, i bywa trudniejsze do uwidocznienia. <strong>Więzadło skokowo-strzałkowe tylne (PTFL)</strong> jest najsilniejsze i ulega uszkodzeniu najrzadziej, zwykle dopiero w ciężkich urazach.</p>' +
      '<h3>Więzadło trójgraniaste i więzozrost piszczelowo-strzałkowy</h3>' +
      '<p>Po stronie wewnętrznej kostki znajduje się <strong>więzadło trójgraniaste</strong> (przyśrodkowe), a powyżej stawu <strong>więzozrost piszczelowo-strzałkowy</strong>, czyli syndesmoza. Uszkodzenie syndesmozy, nazywane wysokim skręceniem kostki, dotyczy do kilkunastu procent skręceń w populacji ogólnej i znacznie częściej występuje u sportowców. Tę okolicę szczególnie dobrze ocenia się w badaniu dynamicznym.</p>' +
      '<h3>Ścięgna okolicy kostki</h3>' +
      '<p>USG obrazuje ścięgna otaczające staw skokowy: <strong>ścięgno Achillesa</strong>, <strong>ścięgna strzałkowe</strong> oraz <strong>ścięgno piszczelowe tylne</strong>. Pozwala wykryć ich pogrubienie i cechy przeciążenia (tendinopatii), naderwania oraz, dzięki ocenie w ruchu, niestabilność i podwichnięcie ścięgien strzałkowych. Ocena ścięgien oraz innych struktur powierzchownych to także domena <a href="/usg/tkanki-miekkie/">USG tkanek miękkich</a>.</p>' +
      '<h3>Staw, wysięk i błona maziowa</h3>' +
      '<p>W obrębie samego stawu badanie uwidacznia <strong>wysięk</strong> oraz <strong>zapalenie błony maziowej</strong> (z przekrwieniem widocznym w opcji Dopplera), a także kaletki, torbiele galaretowate (ganglion) i zmiany pourazowe. Wysięk i przerost błony maziowej bywają wczesnym sygnałem chorób zapalnych stawu, dlatego USG wykorzystuje się również w ich monitorowaniu.</p>',
  },
  {
    title: 'USG kostki po skręceniu - stopnie uszkodzenia więzadeł i dokładność badania',
    tocLabel: 'Skręcenie i dokładność',
    content:
      '<p>Po skręceniu kostki USG pozwala ocenić, które więzadło uległo uszkodzeniu i czy jest to naciągnięcie, częściowe czy całkowite zerwanie. Najczęściej uszkadzaną strukturą jest więzadło ATFL, które w badaniach obrazowych odpowiada za około połowę uszkodzeń po skręceniu.</p>' +
      '<h3>Stopnie skręcenia więzadeł bocznych</h3>' +
      '<p>Skręcenie więzadeł bocznych kostki klasyfikuje się tradycyjnie w trzech stopniach:</p>' +
      '<ul><li><strong>I stopień</strong> - naciągnięcie i mikrouszkodzenia włókien, niewielki obrzęk, bez niestabilności stawu;</li><li><strong>II stopień</strong> - częściowe zerwanie więzadła, umiarkowany obrzęk i tkliwość, umiarkowana niestabilność;</li><li><strong>III stopień</strong> - całkowite zerwanie więzadła, znaczny obrzęk i wyraźna niestabilność.</li></ul>' +
      '<p>Zgodnie z wytycznymi postępowania w skręceniu kostki (Vuurberg i wsp., 2018) ciężkość uszkodzenia najpewniej ocenia się w badaniu fizykalnym powtórzonym po 4-5 dniach od urazu, gdy ustąpi pierwszy obrzęk i ból. USG uzupełnia tę ocenę, różnicując częściowe i całkowite zerwanie więzadła.</p>' +
      '<h3>Jak dokładne jest USG więzadeł kostki?</h3>' +
      '<p>W metaanalizach czułość USG dla najczęściej uszkadzanego więzadła ATFL sięga około 97% przy wysokiej swoistości (Kocsis i wsp., 2024), a w bezpośrednim porównaniu ultrasonografia bywa dla tego więzadła czulsza niż rezonans magnetyczny (Colò i wsp., 2023). Ocena położonego głębiej więzadła piętowo-strzałkowego (CFL) jest trudniejsza i mniej czuła. Europejskie Towarzystwo Radiologii Mięśniowo-Szkieletowej (ESSR) zaliczyło niestabilność stawu skokowego do wskazań o najwyższym poziomie rekomendacji dla USG narządu ruchu (Sconfienza i wsp., 2018).</p>' +
      '<h3>USG dynamiczne w niestabilności stawu skokowego</h3>' +
      '<p>Przy nawracających skręceniach i uczuciu uciekania kostki pomocna jest ocena dynamiczna z testem szuflady przedniej pod kontrolą głowicy. W badaniu chorych z przewlekłą niestabilnością potwierdzoną artroskopowo luźne, falujące więzadło ATFL uwidoczniono w ten sposób we wszystkich przypadkach, a więc częściej niż pozwalał manualny test szuflady (Cho i wsp., 2016).</p>',
  },
  {
    title: 'Wskazania do USG stawu skokowego',
    content:
      '<p>Najczęstszym wskazaniem do USG stawu skokowego jest uraz kostki, zwłaszcza skręcenie, oraz utrzymujące się po nim dolegliwości. Badanie wykonuje się także przy objawach sugerujących uszkodzenie lub zapalenie ścięgna albo niestabilność stawu.</p>' +
      '<ul><li>ból, obrzęk i zasinienie okolicy kostki po skręceniu lub innym urazie;</li><li>uczucie uciekania i niestabilności stawu skokowego oraz nawracające skręcenia;</li><li>podejrzenie uszkodzenia więzadeł lub ścięgien okolicy kostki;</li><li>ból tylnej części pięty mogący wskazywać na zmiany w ścięgnie Achillesa;</li><li>ból przyśrodkowej części kostki, na przykład w przebiegu zapalenia pochewki ścięgna piszczelowego tylnego;</li><li>obrzęk stawu z podejrzeniem wysięku lub zapalenia błony maziowej, także w chorobach reumatycznych;</li><li>kontrola gojenia więzadeł i ścięgien oraz ocena efektów rehabilitacji.</li></ul>' +
      '<p>O zakresie badania i dalszym postępowaniu decyduje lekarz prowadzący. Gdy dolegliwości obejmują dalszą część kończyny, pomocne bywa <a href="/usg/stopa/">USG stopy</a>.</p>',
  },
  {
    title: 'Czego USG stawu skokowego nie pokaże? Kiedy potrzebny RTG lub rezonans',
    tocLabel: 'Ograniczenia badania',
    content:
      '<p>USG stawu skokowego bardzo dobrze ocenia tkanki miękkie, czyli więzadła, ścięgna i błonę maziową, ale nie obrazuje wnętrza kości, chrząstki w głębi stawu ani struktur położonych najgłębiej. Z tego powodu jest badaniem uzupełniającym, a nie zamiennikiem zdjęcia RTG czy rezonansu magnetycznego.</p>' +
      '<p>Przy podejrzeniu złamania konieczne jest zdjęcie rentgenowskie. O tym, czy po urazie kostki wykonać RTG, pomagają zdecydować reguły ottawskie (Stiell i wsp.), czyli kliniczny zestaw kryteriów oceniających ryzyko złamania. Zmiany chrzęstne, uszkodzenia kostno-chrzęstne i struktury położone głęboko dokładniej obrazuje rezonans magnetyczny.</p>' +
      '<p>Wartość badania zależy też od doświadczenia osoby wykonującej USG, ponieważ obraz powstaje i jest interpretowany na bieżąco. Mimo to dla więzadeł bocznych i ścięgien ultrasonografia pozostaje czułym badaniem pierwszego rzutu, a o wyborze metody obrazowej każdorazowo decyduje lekarz, uwzględniając obraz kliniczny i lokalizację dolegliwości.</p>',
  },
  {
    title: 'USG stawu skokowego a RTG i rezonans magnetyczny (MRI)',
    tocLabel: 'USG a RTG i MRI',
    content:
      '<p>USG, RTG i rezonans magnetyczny to metody uzupełniające się, a nie wymienne. Ultrasonografia najlepiej ocenia więzadła i ścięgna oraz umożliwia ocenę dynamiczną w ruchu, RTG obrazuje kości, a rezonans - chrząstkę i struktury głębokie.</p>' +
      '<table><tr><th>Cecha</th><th>USG</th><th>RTG</th><th>Rezonans (MRI)</th></tr>' +
      '<tr><td>Więzadła i ścięgna</td><td>bardzo dobrze</td><td>nie ocenia</td><td>dobrze</td></tr>' +
      '<tr><td>Kość i złamania</td><td>ograniczone</td><td>bardzo dobrze</td><td>dobrze</td></tr>' +
      '<tr><td>Chrząstka i struktury głębokie</td><td>ograniczone</td><td>nie ocenia</td><td>bardzo dobrze</td></tr>' +
      '<tr><td>Ocena dynamiczna (w ruchu)</td><td>tak</td><td>nie</td><td>nie</td></tr>' +
      '<tr><td>Promieniowanie jonizujące</td><td>brak</td><td>tak</td><td>brak</td></tr>' +
      '<tr><td>Dostępność i koszt</td><td>wysoka, niski koszt</td><td>wysoka, niski koszt</td><td>niższa, wyższy koszt</td></tr></table>' +
      '<p>W praktyce po skręceniu kostki USG i RTG często się uzupełniają: USG ocenia więzadła i ścięgna, a RTG wyklucza złamanie. Rezonans rezerwuje się dla sytuacji niejednoznacznych lub podejrzenia zmian chrzęstnych. Przy ocenie powierzchownych zmian tkanek miękkich pomocne bywa też <a href="/usg/tkanki-miekkie/">badanie tkanek miękkich</a>.</p>',
  },
  {
    title: 'Jak przygotować się i jak przebiega USG stawu skokowego we Wrocławiu?',
    tocLabel: 'Przygotowanie i przebieg',
    content:
      '<p>USG stawu skokowego nie wymaga specjalnego przygotowania. Wystarczy zadbać o wygodny strój i obuwie, które pozwolą łatwo odsłonić okolicę kostki oraz stopy.</p>' +
      '<p>Przebieg badania jest prosty i trwa zwykle kilkanaście minut:</p>' +
      '<ol><li>pacjent przyjmuje pozycję leżącą lub siedzącą, z odsłoniętą kostką;</li><li>na skórę nakłada się żel ułatwiający przewodzenie fal ultradźwiękowych;</li><li>lekarz przesuwa głowicę liniową nad czterema okolicami stawu, oceniając więzadła, ścięgna i staw;</li><li>w razie potrzeby wykonuje ocenę dynamiczną, czyli obserwację struktur podczas ruchu kostki;</li><li>na koniec porównuje obraz z drugą kończyną i sporządza opis badania.</li></ol>' +
      '<p>Badanie jest bezbolesne i nie wykorzystuje promieniowania jonizującego. Ultrasonografię kostki wykonujemy w <a href="/usg/">pracowni USG we Wrocławiu</a>; o interpretacji wyniku i dalszym postępowaniu decyduje lekarz.</p>',
  },
  {
    title: 'Ile kosztuje USG stawu skokowego we Wrocławiu?',
    tocLabel: 'Cena badania',
    content:
      '<p>Cena USG stawu skokowego we Wrocławiu zależy od zakresu badania oraz tego, czy obejmuje ono dodatkowo sąsiednie okolice, na przykład stopę. Aktualne stawki podajemy w <a href="/cennik/">cenniku</a>, a termin badania można ustalić podczas <a href="/rejestracja/">rejestracji</a>.</p>' +
      '<p>Na USG stawu skokowego wykonywane prywatnie nie jest wymagane skierowanie. Warto natomiast zabrać dotychczasową dokumentację medyczną oraz wyniki wcześniejszych badań obrazowych, jeśli były wykonywane - ułatwia to porównanie i ocenę zmian w czasie.</p>' +
      '<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O zakresie badania, interpretacji jego wyniku i dalszym postępowaniu decyduje lekarz podczas indywidualnej wizyty.</p>',
  },
  {
    title: 'Źródła',
    content:
      '<ol>' +
      '<li>Sconfienza LM, Albano D, Allen G i wsp. Clinical indications for musculoskeletal ultrasound updated in 2017 by European Society of Musculoskeletal Radiology (ESSR) consensus. Eur Radiol 2018;28(12):5338-5351 (PMID 29876703).</li>' +
      '<li>Kocsis K, Stubnya B, Vancsa S i wsp. Diagnostic accuracy of ultrasonography in acute lateral ankle ligament injury: a systematic review and meta-analysis. Injury 2024;55 Suppl 3:111730 (PMID 39300628).</li>' +
      '<li>Colò G, Bignotti B, Costa G, Signori A, Tagliafico AS. Ultrasound or MRI in the evaluation of anterior talofibular ligament (ATFL) injuries: systematic review and meta-analysis. Diagnostics (Basel) 2023;13(14):2324 (PMID 37510068).</li>' +
      '<li>Baltes TPA, Arnáiz J, Geertsema L i wsp. Diagnostic value of ultrasonography in acute lateral and syndesmotic ligamentous ankle injuries. Eur Radiol 2021;31(4):2610-2620 (PMID 33026501).</li>' +
      '<li>Lee SH, Yun SJ. Ankle ultrasound for detecting anterior talofibular ligament tear using operative finding as reference standard: a systematic review and meta-analysis. Eur J Trauma Emerg Surg 2020;46(1):73-81 (PMID 31187159).</li>' +
      '<li>Cho JH i wsp. Value of stress ultrasound for the diagnosis of chronic ankle instability compared to manual anterior drawer test, stress radiography, MRI, and arthroscopy. Knee Surg Sports Traumatol Arthrosc 2016;24(4):1022-1028 (PMID 26515772).</li>' +
      '<li>Hattori S, Saggar R, Mullen J i wsp. Role of ultrasound in evaluating ligament injuries around the ankle: a narrative review. Diagnostics (Basel) 2025;15(3):392 (PMID 39941321).</li>' +
      '<li>Ghandour S, Mercer RW, Strahan JA i wsp. Diagnostic accuracy of MRI and US for peroneal tendon tears: a systematic review and meta-analysis. Eur Radiol 2025;35(9):5360-5368 (PMID 40035861).</li>' +
      '<li>Aminlari A, Stone J, McKee R i wsp. Diagnosing Achilles tendon rupture with ultrasound in patients treated surgically: a systematic review and meta-analysis. J Emerg Med 2021;61(5):558-567 (PMID 34801318).</li>' +
      '<li>Vuurberg G, Hoorntje A, Wink LM i wsp. Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. Br J Sports Med 2018;52(15):956-970 (PMID 29514819).</li>' +
      '<li>Stiell IG, Greenberg GH, McKnight RD i wsp. A study to develop clinical decision rules for the use of radiography in acute ankle injuries (Ottawa Ankle Rules). Ann Emerg Med 1992;21(4):384-390 (PMID 1554175).</li>' +
      '</ol>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG stawu skokowego?',
    answer:
      'USG stawu skokowego wykrywa uszkodzenia tkanek miękkich kostki: naciągnięcia i zerwania więzadeł (najczęściej więzadła ATFL po skręceniu), uszkodzenia oraz stany zapalne ścięgien, w tym ścięgna Achillesa i ścięgien strzałkowych, a także wysięk w stawie i zapalenie błony maziowej. Nie ocenia kości - złamanie potwierdza zdjęcie RTG.',
  },
  {
    question: 'Czy USG kostki wykryje zerwanie więzadeł po skręceniu?',
    answer:
      'USG kostki wykrywa uszkodzenia i zerwania więzadeł po skręceniu, a dla najczęściej urazowanego więzadła ATFL jest badaniem czułym - w metaanalizach czułość sięga około 97%. Pozwala odróżnić częściowe zerwanie od całkowitego, a w ocenie dynamicznej także niestabilność stawu. Głębiej położone więzadło CFL bywa trudniejsze do oceny.',
  },
  {
    question: 'USG stawu skokowego czy rezonans magnetyczny (MRI)?',
    answer:
      'USG stawu skokowego i rezonans magnetyczny uzupełniają się. USG bardzo dobrze ocenia więzadła i ścięgna oraz umożliwia ocenę dynamiczną w ruchu, a dla więzadła ATFL bywa czulsze niż MRI. Rezonans dokładniej obrazuje chrząstkę i struktury głębokie. O wyborze metody decyduje lekarz na podstawie obrazu klinicznego.',
  },
  {
    question: 'Czy USG stawu skokowego pokaże złamanie kostki?',
    answer:
      'USG stawu skokowego nie jest badaniem do oceny złamań - ultrasonografia obrazuje tkanki miękkie, a nie wnętrze kości. Przy podejrzeniu złamania konieczne jest zdjęcie RTG, o którym pomagają zdecydować reguły ottawskie. USG i RTG często się uzupełniają: jedno ocenia więzadła, drugie wyklucza złamanie.',
  },
  {
    question: 'Ile kosztuje USG stawu skokowego we Wrocławiu?',
    answer:
      'Cena USG stawu skokowego we Wrocławiu zależy od zakresu badania i ewentualnego objęcia sąsiednich okolic, na przykład stopy. Aktualny cennik jest dostępny w zakładce Cennik oraz pod numerem telefonu kliniki, gdzie można też ustalić dogodny termin badania. Na badanie prywatne skierowanie nie jest wymagane.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG stawu skokowego?',
    answer: `USG stawu skokowego we Wrocławiu wykonujemy w Bas Clinic przy ${CLINIC.address.street} (${CLINIC.address.city}). Termin umówisz telefonicznie pod numerem ${CLINIC.phone}; pracownia działa od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, w soboty jest zamknięta.`,
  },
];

export default function UsgStawuSkokowegoPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG stawu skokowego we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG stawu skokowego to badanie narządu ruchu oceniające więzadła, ścięgna i wysięk w okolicy kostki, także po skręceniu. Wykonujemy je w Bas Clinic we Wrocławiu, bezboleśnie i bez promieniowania."
      slug="usg/staw-skokowy"
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
