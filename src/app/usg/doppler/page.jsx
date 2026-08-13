import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'USG Doppler naczyń Wrocław - przepływ krwi',
  description:
    'USG Doppler naczyń we Wrocławiu (ul. Opatowicka 132). Badanie przepływu krwi w tętnicach i żyłach - miażdżyca, zwężenia, zakrzepica. Umów termin w Bas Clinic.',
  path: '/usg/doppler/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG Doppler naczyń' },
];

const RELATED = [
  'usg/doppler-zyly-konczyn-dolnych',
  'usg/doppler-tetnice-szyjne',
  'usg/nerki',
].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG Doppler naczyń - badanie przepływu krwi we Wrocławiu',
    tocLabel: 'Czym jest',
    content:
      (
      <>
        <p><strong>USG Doppler naczyń</strong> to nieinwazyjne, bezbolesne badanie ultrasonograficzne, które ocenia przepływ krwi w tętnicach i żyłach. Wykorzystuje zjawisko fizyczne nazywane efektem Dopplera, nie używa promieniowania jonizującego i można je bezpiecznie powtarzać.</p>
        <p>Badanie łączy obraz ściany i światła naczynia z oceną kierunku oraz prędkości płynącej krwi. To właśnie odróżnia je od klasycznej ultrasonografii (tzw. <strong>B-mode</strong>, prezentacji w skali szarości), która pokazuje samą strukturę narządów, bez informacji o przepływie.</p>
        <p>Badanie dopplerowskie bywa nazywane też <strong>ultrasonografią dopplerowską</strong>, USG dopplerowskim, USG naczyń, USG metodą Dopplera lub badaniem przepływu krwi. Wszystkie te określenia opisują tę samą technikę. Obraz i wynik zawsze interpretuje lekarz w odniesieniu do objawów i pełnego obrazu klinicznego pacjenta.</p>
      </>
    ),
  },
  {
    title: 'Jak działa USG Doppler - efekt Dopplera i tryby obrazowania',
    tocLabel: 'Jak działa',
    content:
      (
      <>
        <p>USG Doppler działa dzięki <strong>efektowi Dopplera</strong>: fala ultradźwiękowa odbita od poruszających się krwinek czerwonych wraca do głowicy ze zmienioną częstotliwością, a wielkość tej zmiany zależy od prędkości i kierunku przepływu. Zależność tę opisuje równanie Dopplera, w którym kluczową rolę odgrywa kąt padania wiązki na naczynie.</p>
        <p>Aby pomiar prędkości był wiarygodny, wiązkę ustawia się pod <strong>kątem insonacji</strong> nie większym niż 60 stopni. Przy kącie zbliżonym do 90 stopni przesunięcie dopplerowskie zanika i przepływ przestaje być wykrywany.</p>
        <h3>Tryby obrazowania przepływu</h3>
        <p>W trakcie jednego badania lekarz korzysta z kilku trybów prezentacji przepływu. To nie są osobne usługi, lecz różne sposoby pokazania tej samej krwi płynącej w naczyniu.</p>
        <table>
          <tbody>
            <tr>
              <th>Tryb Dopplera</th>
              <th>Co pokazuje</th>
              <th>Typowe zastosowanie</th>
            </tr>
            <tr>
              <td>Doppler kolorowy (color Doppler)</td>
              <td>barwną mapę kierunku i prędkości przepływu nałożoną na obraz</td>
              <td>szybkie wykrycie przepływu, zwężeń i refluksu</td>
            </tr>
            <tr>
              <td>Doppler spektralny (fala pulsacyjna i ciągła)</td>
              <td>wykres prędkości krwi w czasie</td>
              <td>pomiar prędkości przepływu i ocena stopnia zwężenia</td>
            </tr>
            <tr>
              <td>Power Doppler (Doppler mocy)</td>
              <td>natężenie sygnału, czulszy na wolny przepływ, bez kierunku</td>
              <td>drobne i wolno płynące naczynia</td>
            </tr>
            <tr>
              <td>Duplex / triplex</td>
              <td>połączenie obrazu strukturalnego z oceną przepływu (i widmem)</td>
              <td>standard badania naczyniowego</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    title: 'Rodzaje badań dopplerowskich naczyń',
    tocLabel: 'Rodzaje badań',
    content:
      (
      <>
        <p>USG Doppler naczyń obejmuje kilka odrębnych zakresów, dobieranych do ocenianej okolicy ciała. Strona zbiorcza jest punktem wyjścia, z którego kieruje się pacjenta do węższego, ukierunkowanego badania konkretnego obszaru.</p>
        <ul>
          <li><strong>Tętnice szyjne, dogłowowe i kręgowe</strong> - ocena tętnic doprowadzających krew do mózgu, istotna w profilaktyce udaru. Szczegółowy zakres opisuje badanie <Link href="/usg/doppler-tetnice-szyjne/">USG Doppler tętnic szyjnych</Link>.</li>
          <li><strong>Żyły kończyn dolnych</strong> - ocena drożności i wydolności żył nóg przy żylakach, obrzękach oraz podejrzeniu zakrzepicy. Pełny opis zawiera badanie <Link href="/usg/doppler-zyly-konczyn-dolnych/">USG Doppler żył kończyn dolnych</Link>.</li>
          <li><strong>Tętnice kończyn dolnych</strong> - diagnostyka miażdżycy tętnic obwodowych i chromania przestankowego (bólu nóg podczas chodzenia).</li>
          <li><strong>Naczynia jamy brzusznej</strong> - ocena aorty brzusznej oraz tętnic nerkowych. Tętnice nerkowe ocenia się również w ramach <Link href="/usg/nerki/">USG nerek</Link>, a aortę przy okazji <Link href="/usg/jama-brzuszna/">USG jamy brzusznej</Link>.</li>
        </ul>
        <p>W każdym z tych zakresów wykorzystuje się te same tryby Dopplera opisane wyżej. O doborze obszaru i szczegółowej metody decyduje skierowanie kliniczne oraz zgłaszane objawy.</p>
      </>
    ),
  },
  {
    title: 'Co ocenia i co wykrywa USG Doppler?',
    tocLabel: 'Co wykrywa',
    content:
      (
      <>
        <p>USG Doppler ocenia przepływ krwi oraz stan ścian naczyń: pokazuje, czy naczynia są drożne i czy nie ma w nich nieprawidłowości. Badanie uwidacznia zarówno tętnice, jak i żyły w wybranej okolicy ciała.</p>
        <ul>
          <li>kierunek i prędkość przepływu krwi w tętnicach i żyłach (m.in. szczytową prędkość skurczową),</li>
          <li>zwężenia (stenozy) i niedrożności tętnic ograniczające przepływ,</li>
          <li>blaszki miażdżycowe oraz pogrubienie kompleksu intima-media jako wczesny marker miażdżycy,</li>
          <li>refluks żylny i cechy przewlekłej niewydolności żylnej (żylaki),</li>
          <li>cechy zakrzepicy żył głębokich,</li>
          <li>tętniaka aorty brzusznej oraz zwężenie tętnic nerkowych.</li>
        </ul>
        <p>W diagnostyce zakrzepicy żył głębokich badaniem pierwszego wyboru jest <strong>kompresyjna ultrasonografia</strong> żył (przegląd systematyczny, Bhatt i wsp., 2020), a w ocenie zwężeń tętnic szyjnych stosuje się prędkościowe kryteria konsensusu SRU (Grant i wsp., 2003).</p>
        <p>Wynik pomaga oszacować ryzyko naczyniowe i może wskazywać na potrzebę dalszej diagnostyki, jednak USG Doppler nie jest ostatecznym rozpoznaniem choroby. Przy podejrzeniu zakrzepicy żył głębokich należy traktować sytuację jako stan pilny i niezwłocznie skonsultować się z lekarzem.</p>
      </>
    ),
  },
  {
    title: 'Wskazania do USG Doppler naczyń',
    tocLabel: 'Wskazania',
    content:
      (
      <>
        <p>Wskazaniem do USG Doppler naczyń są objawy sugerujące zaburzenia przepływu krwi w tętnicach lub żyłach. Badanie zaleca się zarówno w diagnostyce dolegliwości, jak i w profilaktyce naczyniowej u osób z czynnikami ryzyka miażdżycy.</p>
        <ul>
          <li>obrzęki, ból i uczucie ciężkości kończyn dolnych,</li>
          <li>żylaki i widoczne zmiany żylne,</li>
          <li>podejrzenie zakrzepicy żył głębokich,</li>
          <li>ból nóg podczas chodzenia (chromanie przestankowe) i inne objawy miażdżycy tętnic kończyn,</li>
          <li>profilaktyka udaru oraz ocena tętnic dogłowowych u osób z nadciśnieniem, cukrzycą, podwyższonym cholesterolem lub paleniem w wywiadzie,</li>
          <li>zawroty głowy, omdlenia i inne objawy ze strony układu nerwowego,</li>
          <li>diagnostyka nadciśnienia naczyniowo-nerkowego,</li>
          <li>kontrola drożności naczyń po zabiegach naczyniowych.</li>
        </ul>
        <p>Osobnym, przesiewowym wskazaniem jest jednorazowe USG aorty brzusznej w kierunku tętniaka u mężczyzn w wieku 65-75 lat, którzy palili papierosy (rekomendacja USPSTF, 2019). O zasadności i zakresie konkretnego badania decyduje lekarz na podstawie wywiadu i objawów.</p>
      </>
    ),
  },
  {
    title: 'Czym różni się USG Doppler od zwykłego USG?',
    tocLabel: 'Doppler a zwykłe USG',
    content:
      (
      <>
        <p>Zwykłe USG (w skali szarości, B-mode) pokazuje obraz tkanek oraz ścian naczyń, ale nie ocenia przepływu krwi. <strong>USG Doppler</strong> dodaje do tego obrazu informację o kierunku i prędkości krwi, dzięki czemu wykrywa zwężenia, niedrożności i refluks. W praktyce naczyniowej standardem jest tryb duplex, który łączy oba badania w jednym.</p>
        <table>
          <tbody>
            <tr>
              <th>Cecha</th>
              <th>Zwykłe USG (B-mode)</th>
              <th>USG Doppler (duplex)</th>
            </tr>
            <tr>
              <td>Co obrazuje</td>
              <td>strukturę tkanek i ścian naczyń</td>
              <td>strukturę oraz przepływ krwi</td>
            </tr>
            <tr>
              <td>Ocena kierunku i prędkości krwi</td>
              <td>nie</td>
              <td>tak</td>
            </tr>
            <tr>
              <td>Wykrywanie zwężeń i zakrzepicy</td>
              <td>ograniczone</td>
              <td>tak</td>
            </tr>
            <tr>
              <td>Promieniowanie jonizujące</td>
              <td>nie</td>
              <td>nie</td>
            </tr>
          </tbody>
        </table>
        <p>W praktyce nie trzeba wybierać między oboma badaniami. Lekarz zwykle zaczyna od obrazu w skali szarości, a następnie włącza Doppler kolorowy i spektralny, gdy chce ocenić sam przepływ. Dlatego badanie naczyniowe niemal zawsze wykonuje się w trybie duplex.</p>
      </>
    ),
  },
  {
    title: 'Jak przygotować się do USG Doppler i jak przebiega badanie?',
    tocLabel: 'Przygotowanie i przebieg',
    content:
      (
      <>
        <p>Do USG Doppler naczyń kończyn i tętnic szyjnych zwykle nie jest wymagane żadne specjalne przygotowanie i można je wykonać o dowolnej porze dnia. Zakres przygotowania zależy od ocenianego obszaru.</p>
        <p>W przypadku naczyń jamy brzusznej (aorty i tętnic nerkowych) zaleca się przyjście na czczo, zwykle około 8 godzin bez jedzenia, aby ograniczyć gaz jelitowy pogarszający tzw. okno akustyczne. Warto założyć wygodny strój umożliwiający odsłonięcie badanej okolicy - szyi, brzucha lub nóg - i zabrać dokumentację wcześniejszych badań naczyniowych.</p>
        <h3>Przebieg badania</h3>
        <p>Badanie przypomina klasyczną ultrasonografię: lekarz przesuwa głowicę po skórze pokrytej żelem sprzęgającym, który poprawia kontakt głowicy ze skórą i jakość obrazu. Na ekranie pojawia się barwne odwzorowanie płynącej krwi, a aparat odtwarza słyszalny sygnał przepływu.</p>
        <p>Ocenę żył kończyn dolnych pod kątem refluksu wykonuje się zwykle w pozycji stojącej, ponieważ pozycja pionowa zwiększa wiarygodność oceny zastawek. Badanie jest bezbolesne i trwa zwykle od kilkunastu do kilkudziesięciu minut, zależnie od liczby ocenianych naczyń. Pisemny opis sporządza lekarz wykonujący badanie i to on interpretuje wynik w kontekście klinicznym - pacjent zwykle otrzymuje opis bezpośrednio po badaniu.</p>
      </>
    ),
  },
  {
    title: 'Ograniczenia, bezpieczeństwo i przeciwwskazania',
    tocLabel: 'Bezpieczeństwo',
    content:
      (
      <>
        <p>USG Doppler jest badaniem bezpiecznym - nie wykorzystuje promieniowania jonizującego i jest uznawane za bezpieczne także w ciąży. Nie ma bezwzględnych przeciwwskazań do jego wykonania, a aparaturę diagnostyczną stosuje się zgodnie z zasadą ALARA, czyli z możliwie najniższą konieczną energią (oświadczenie AIUM).</p>
        <p>Badanie ma jednak ograniczenia, o których warto wiedzieć:</p>
        <ul>
          <li><strong>zależność od operatora</strong> - jakość obrazu i interpretacja zależą od doświadczenia osoby wykonującej badanie,</li>
          <li><strong>okno akustyczne</strong> - ocenę naczyń jamy brzusznej mogą utrudniać gaz jelitowy oraz otyłość,</li>
          <li><strong>zwapnienia</strong> - silnie zwapniała blaszka miażdżycowa daje cień akustyczny, który może zasłaniać światło naczynia.</li>
        </ul>
        <p>Z tych powodów USG Doppler bywa badaniem wstępnym. Jako badanie nieinwazyjne dobrze nadaje się do przesiewu i kontroli, jednak gdy planowane jest leczenie zabiegowe, wynik bywa potwierdzany badaniem angio-TK lub rezonansem magnetycznym. Miejscowym ograniczeniem może być też rozległa rana, opatrunek lub stan zapalny skóry w okolicy przyłożenia głowicy.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O zasadności badania, jego zakresie i interpretacji wyniku decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Cena USG Doppler naczyń we Wrocławiu',
    tocLabel: 'Cena',
    content:
      (
      <>
        <p>Cena USG Doppler naczyń we Wrocławiu zależy od zakresu badania - ocenianego obszaru (jedna czy obie kończyny, tętnice szyjne, jama brzuszna), liczby ocenianych naczyń oraz zakresu konsultacji. Z tego powodu ustala się ją indywidualnie do skierowania klinicznego.</p>
        <p>W Bas Clinic badanie wykonuje <Link href="/usg/">pracownia USG we Wrocławiu</Link>. Aktualne ceny poszczególnych zakresów dopplerowskich znajdziesz w sekcji <Link href="/cennik/">cennik</Link>, a dogodny termin ustalisz przez <Link href="/rejestracja/">rejestrację</Link>. Badanie wykonywane jest prywatnie i nie wymaga skierowania.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content:
      (
      <ol>
        <li>Grant EG, Benson CB, Moneta GL, i wsp. Carotid artery stenosis: gray-scale and Doppler US diagnosis - Society of Radiologists in Ultrasound Consensus Conference. Radiology 2003;229:340-346 (PMID 14500855).</li>
        <li>Naylor R, Rantner B, Ancetti S, i wsp. ESVS 2023 Clinical Practice Guidelines on the Management of Atherosclerotic Carotid and Vertebral Artery Disease. Eur J Vasc Endovasc Surg 2023;65(1):7-111.</li>
        <li>De Maeseneer MG, Kakkos SK, Aherne T, i wsp. ESVS 2022 Clinical Practice Guidelines on the Management of Chronic Venous Disease of the Lower Limbs. Eur J Vasc Endovasc Surg 2022;63(2):184-267.</li>
        <li>Bhatt M, Braun C, Patel P, i wsp. Diagnosis of deep vein thrombosis of the lower extremity: a systematic review and meta-analysis. Blood Adv 2020;4(7):1250-1264 (PMID 32227213).</li>
        <li>Goodacre S, Sampson F, Thomas S, i wsp. Systematic review and meta-analysis of the diagnostic accuracy of ultrasonography for deep vein thrombosis. BMC Med Imaging 2005;5:6 (PMID 16202135).</li>
        <li>Coleridge-Smith P, Labropoulos N, Partsch H, i wsp. Duplex ultrasound investigation of the veins in chronic venous disease - UIP Consensus Document Part I. Eur J Vasc Endovasc Surg 2006;31(1):83-92 (PMID 16226898).</li>
        <li>Lorenz MW, Markus HS, Bots ML, i wsp. Prediction of clinical cardiovascular events with carotid intima-media thickness: a systematic review and meta-analysis. Circulation 2007;115:459-467 (PMID 17242284).</li>
        <li>Dias SVM, i wsp. Diagnostic accuracy of duplex ultrasound for peripheral arterial disease: systematic review and meta-analysis. J Vasc Bras 2025;24:e20240033 (PMID 39981417).</li>
        <li>US Preventive Services Task Force. Screening for abdominal aortic aneurysm: recommendation statement. JAMA 2019;322(22):2211-2218 (PMID 31821437).</li>
        <li>Doppler Ultrasonography. StatPearls / NCBI Bookshelf NBK580539, National Library of Medicine, 2024.</li>
        <li>AIUM Official Statement: Prudent Clinical Use and Safety of Diagnostic Ultrasound. American Institute of Ultrasound in Medicine, 2019 (potw. 2024).</li>
        <li>Torloni MR, Vedmedovska N, Merialdi M, i wsp. Safety of ultrasonography in pregnancy: WHO systematic review and meta-analysis. Ultrasound Obstet Gynecol 2009;33(5):599-608.</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Czym różni się USG Doppler od zwykłego USG?',
    answer:
      'USG Doppler różni się od zwykłego USG tym, że poza obrazem struktury naczynia ocenia także przepływ krwi - jego kierunek i prędkość. Klasyczna ultrasonografia pokazuje anatomię narządów, a badanie dopplerowskie odwzorowuje płynącą krew jako barwną mapę i sygnał dźwiękowy, dzięki czemu wykrywa zwężenia oraz refluks żylny.',
  },
  {
    question: 'Co wykrywa USG Doppler naczyń?',
    answer:
      'USG Doppler naczyń wykrywa zaburzenia przepływu krwi, zwężenia i niedrożności tętnic, blaszki miażdżycowe, refluks żylny oraz cechy zakrzepicy żył głębokich, a także tętniaka aorty. Badanie pomaga oszacować ryzyko naczyniowe, ale nie jest ostatecznym rozpoznaniem - przy podejrzeniu zakrzepicy konieczna jest pilna konsultacja lekarska.',
  },
  {
    question: 'Czy do USG Doppler trzeba być na czczo?',
    answer:
      'Na czczo trzeba być tylko przy USG Doppler naczyń jamy brzusznej, czyli aorty i tętnic nerkowych - zaleca się wtedy około 8 godzin bez jedzenia, aby ograniczyć gaz jelitowy. Badanie żył i tętnic kończyn oraz tętnic szyjnych nie wymaga specjalnego przygotowania i można je wykonać o dowolnej porze.',
  },
  {
    question: 'Czy USG Doppler jest bezpieczne i czy są przeciwwskazania?',
    answer:
      'USG Doppler jest bezpieczne i bezbolesne, nie wykorzystuje promieniowania jonizującego i jest uznawane za bezpieczne także w ciąży. Nie ma bezwzględnych przeciwwskazań do badania. Ograniczeniem bywa jedynie rozległa rana lub opatrunek w miejscu przyłożenia głowicy oraz gaz jelitowy utrudniający ocenę naczyń jamy brzusznej.',
  },
  {
    question: 'Czy na USG Doppler potrzebne jest skierowanie?',
    answer:
      'Na USG Doppler w Bas Clinic skierowanie nie jest wymagane, ponieważ badanie wykonywane jest prywatnie. Wystarczy umówić termin telefonicznie. Przy rejestracji warto podać, który obszar naczyniowy ma zostać oceniony - na przykład żyły nóg, tętnice szyjne lub jama brzuszna - aby dobrać odpowiedni zakres badania.',
  },
  {
    question: 'Gdzie wykonać USG Doppler naczyń we Wrocławiu?',
    answer:
      `USG Doppler naczyń we Wrocławiu wykonasz w ${CLINIC.name} przy ${CLINIC.address.street} (${CLINIC.address.city}). Termin umówisz telefonicznie pod numerem ${CLINIC.phone}. Pracownia przyjmuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}; w soboty i niedziele jest zamknięta.`,
  },
];

export default function UsgDopplerPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG Doppler naczyń we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG Doppler naczyń (badanie dopplerowskie) ocenia przepływ krwi w tętnicach i żyłach, pomagając wykryć zwężenia, blaszki miażdżycowe i zakrzepicę. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/doppler"
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
