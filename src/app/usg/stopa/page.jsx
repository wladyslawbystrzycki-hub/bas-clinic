import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'USG stopy Wrocław - ból pięty i przodostopia',
  description:
    'USG stopy we Wrocławiu - diagnostyka bólu pięty, zapalenia rozcięgna podeszwowego i nerwiaka Mortona. Bezbolesne badanie bez promieniowania w Bas Clinic.',
  path: '/usg/stopa/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG stopy' },
];

const RELATED = ['usg/stawy', 'usg/staw-skokowy', 'usg/tkanki-miekkie'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG stopy?',
    content:
      (
      <>
        <p><strong>USG stopy</strong> to ultrasonograficzne badanie narządu ruchu, które obrazuje tkanki miękkie przodostopia, śródstopia oraz okolicy pięty - rozcięgno podeszwowe, ścięgna, drobne stawy, kaletki maziowe i nerwy. Ultrasonografia stopy jest nieinwazyjna, bezbolesna i nie wykorzystuje promieniowania jonizującego, dzięki czemu w razie potrzeby można ją bezpiecznie powtarzać.</p>
        <p>Badanie wykonuje się <strong>głowicą liniową o wysokiej częstotliwości</strong>, która bardzo dokładnie obrazuje struktury położone powierzchownie. Cechą wyróżniającą ultrasonografię jest <strong>ocena dynamiczna</strong>, czyli obserwacja ścięgien i innych struktur w ruchu oraz pod uciskiem, w czasie rzeczywistym - takiej możliwości nie daje statyczny rezonans magnetyczny ani zdjęcie rentgenowskie.</p>
        <p>USG stopy jest częścią szerszej diagnostyki narządu ruchu. Pełen zakres oceny stawów i tkanek okołostawowych opisujemy przy <Link href="/usg/stawy/">USG stawów (narządu ruchu)</Link>; ultrasonografię stopy wykonujemy w pracowni USG we Wrocławiu.</p>
      </>
    ),
  },
  {
    title: 'Co wykrywa USG stopy?',
    content:
      (
      <>
        <p>USG stopy pozwala ocenić struktury tkanek miękkich, które najczęściej odpowiadają za dolegliwości bólowe w okolicy pięty i przodostopia. Zgodnie z zaleceniami europejskich towarzystw radiologii narządu ruchu (EFSUMB, ESSR) ultrasonografia dobrze obrazuje ścięgna, więzadła, rozcięgna, kaletki maziowe, nerwy obwodowe oraz tkanki miękkie.</p>
        <p>W badaniu stopy ocenia się między innymi:</p>
        <ul>
          <li><strong>zapalenie rozcięgna podeszwowego</strong> (fasciitis plantaris) - częstą przyczynę bólu pięty;</li>
          <li><strong>nerwiaka Mortona</strong> oraz inne zmiany przestrzeni międzyplusnowych przodostopia;</li>
          <li>tendinopatie, stany zapalne i uszkodzenia ścięgien, w tym ścięgna Achillesa w okolicy przyczepu;</li>
          <li>torbiele galaretowate (ganglion), wysięki oraz zapalenie kaletek maziowych (bursitis);</li>
          <li>ciała obce w tkankach miękkich oraz zmiany pourazowe.</li>
        </ul>
        <p>Ultrasonografia ocenia przede wszystkim tkanki miękkie i nie obrazuje wnętrza kości. Dlatego struktury kostne, takie jak ostroga piętowa czy złamania, ocenia się na zdjęciu rentgenowskim, a ostateczne rozpoznanie zawsze ustala lekarz na podstawie obrazu klinicznego.</p>
      </>
    ),
  },
  {
    title: 'USG stopy w bólu pięty: zapalenie rozcięgna podeszwowego i ostroga piętowa',
    tocLabel: 'Ból pięty i rozcięgno',
    content:
      (
      <>
        <p>W diagnostyce przewlekłego bólu pięty USG ocenia przede wszystkim <strong>rozcięgno podeszwowe</strong>. Za cechę <strong>zapalenia rozcięgna podeszwowego</strong> uznaje się jego pogrubienie w miejscu przyczepu do guza piętowego powyżej około 4 mm, podczas gdy prawidłowe rozcięgno ma zwykle 2-4 mm grubości.</p>
        <p>Poza grubością lekarz ocenia także obniżoną echogeniczność (hipoechogeniczność), zatarcie prawidłowego, włóknistego utkania oraz wzmożone unaczynienie w opcji Dopplera. W badaniu Aggarwal i wsp. (2020) ultrasonografia przy progu powyżej 4 mm rozpoznawała zapalenie rozcięgna z czułością 96%, była to jednak pojedyncza, niewielka praca, a inne badania podają wartości niższe.</p>
        <p>Sam pomiar grubości ma ograniczenia. Próg 4 mm bywa krytykowany za brak standaryzacji - na wynik wpływa pozycja stopy i napięcie rozcięgna, a pogrubienie powyżej 4 mm opisywano także u osób bez dolegliwości. Z tego powodu wynik USG interpretuje się łącznie z obrazem klinicznym, a nie wyłącznie na podstawie samej liczby milimetrów.</p>
        <h3>Ostroga piętowa a zapalenie rozcięgna podeszwowego</h3>
        <p>Ostroga piętowa to wyrośl kostna i jako struktura kostna uwidacznia się na zdjęciu rentgenowskim, a nie w USG. Ultrasonografia ocenia natomiast towarzyszące jej zmiany w tkankach miękkich, przede wszystkim stan rozcięgna podeszwowego. Obecność ostrogi nie jest równoznaczna z bólem, a wielu pacjentów z bólem pięty nie ma ostrogi.</p>
      </>
    ),
  },
  {
    title: 'USG w diagnostyce nerwiaka Mortona',
    tocLabel: 'Nerwiak Mortona',
    content:
      (
      <>
        <p>USG jest jednym z podstawowych badań obrazowych w diagnostyce <strong>nerwiaka Mortona</strong> (nerwiaka międzyplusnowego). Badanie uwidacznia charakterystyczną, hipoechogeniczną zmianę w przestrzeni międzyplusnowej przodostopia, najlepiej widoczną od strony podeszwowej oraz przy ucisku.</p>
        <p>Atutem ultrasonografii jest tu <strong>ocena dynamiczna</strong>: uciskając głowy kości śródstopia w czasie rzeczywistym, badający może wywołać tak zwany ultrasonograficzny objaw Muldera, co ułatwia odróżnienie nerwiaka od innych zmian. Według metaanalizy (Bignotti i wsp., 2015) czułość USG w nerwiaku Mortona jest zbliżona do czułości rezonansu magnetycznego, choć swoistość rezonansu bywa wyższa.</p>
        <p>Wynik obrazowania trzeba zawsze odnieść do objawów, ponieważ rozpoznanie nerwiaka Mortona jest przede wszystkim kliniczne. Niewielkie pogrubienia nerwu spotyka się także u osób bez dolegliwości, dlatego o znaczeniu zmiany decyduje lekarz w korelacji z badaniem pacjenta.</p>
      </>
    ),
  },
  {
    title: 'USG ścięgien i tkanek miękkich stopy: Achilles, ganglion, kaletki, ciała obce',
    tocLabel: 'Ścięgna i tkanki miękkie',
    content:
      (
      <>
        <p>USG jest podstawową metodą obrazowania <strong>ścięgna Achillesa</strong> i pozostałych tkanek miękkich stopy. W tendinopatii ścięgno bywa pogrubiałe, z obszarami obniżonej echogeniczności i zaburzoną strukturą włókienkową; w postaci przyczepowej (entezopatii) zmiany dotyczą dystalnego odcinka ścięgna, a w przypadkach przewlekłych w badaniu Dopplerem widoczna jest neowaskularyzacja, czyli patologiczne unaczynienie.</p>
        <p>Ultrasonografia dobrze uwidacznia również:</p>
        <ul>
          <li><strong>ganglion</strong> (torbiel galaretowatą) - dobrze odgraniczoną, bezechową zmianę;</li>
          <li>zapalenie kaletek maziowych (bursitis), w tym kaletki zapiętowej;</li>
          <li><strong>ciała obce</strong> w tkankach miękkich, w tym drzazgi, ciernie czy fragmenty szkła, które bywają niewidoczne na zdjęciu rentgenowskim.</li>
        </ul>
        <p>Warto pamiętać o granicach metody: przy podejrzeniu częściowego lub całkowitego zerwania ścięgna albo zmian w głębszych strukturach pomocny bywa rezonans magnetyczny. W ocenie okolicy kostki uzupełnieniem jest <Link href="/usg/staw-skokowy/">USG stawu skokowego</Link>, a powierzchownych guzków i zmian podskórnych - <Link href="/usg/tkanki-miekkie/">USG tkanek miękkich</Link>.</p>
      </>
    ),
  },
  {
    title: 'USG stopy a RTG i rezonans magnetyczny',
    tocLabel: 'USG a RTG i rezonans',
    content:
      (
      <>
        <p>USG, RTG oraz rezonans magnetyczny to metody uzupełniające się, a nie zamienne. Ultrasonografia najlepiej ocenia tkanki miękkie, zdjęcie rentgenowskie obrazuje kość, a rezonans magnetyczny struktury głębokie, chrząstkę i szpik.</p>
        <table>
          <tbody>
            <tr>
              <th>Cecha</th>
              <th>USG</th>
              <th>RTG</th>
              <th>Rezonans (MRI)</th>
            </tr>
            <tr>
              <td>Co ocenia najlepiej</td>
              <td>tkanki miękkie, ścięgna, rozcięgno</td>
              <td>kość</td>
              <td>struktury głębokie, chrząstka, szpik</td>
            </tr>
            <tr>
              <td>Promieniowanie jonizujące</td>
              <td>nie</td>
              <td>tak</td>
              <td>nie</td>
            </tr>
            <tr>
              <td>Ocena dynamiczna (w ruchu)</td>
              <td>tak</td>
              <td>nie</td>
              <td>nie</td>
            </tr>
            <tr>
              <td>Ostroga i złamania kości</td>
              <td>ograniczona</td>
              <td>tak</td>
              <td>tak</td>
            </tr>
            <tr>
              <td>Chrząstka, szpik, głębokie struktury</td>
              <td>ograniczona</td>
              <td>nie</td>
              <td>tak</td>
            </tr>
          </tbody>
        </table>
        <p>W praktyce USG jest często badaniem pierwszego rzutu przy bólu pięty, dolegliwościach ścięgna Achillesa czy podejrzeniu nerwiaka Mortona, ponieważ szybko i bez promieniowania ocenia tkanki miękkie. Nie zastępuje jednak pozostałych metod: wczesne złamanie przeciążeniowe bywa początkowo niewidoczne na RTG, a chrząstkę, szpik kostny i głębiej położone struktury najdokładniej obrazuje rezonans magnetyczny. O wyborze badania decyduje lekarz na podstawie obrazu klinicznego.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega USG stopy we Wrocławiu i jak się przygotować?',
    tocLabel: 'Przebieg i przygotowanie',
    content:
      (
      <>
        <p>USG stopy nie wymaga specjalnego przygotowania, a samo badanie trwa zwykle kilkanaście minut. Wystarczy zadbać o wygodny strój oraz obuwie, które pozwolą swobodnie odsłonić stopę i okolicę kostki.</p>
        <p>W trakcie badania na skórę nakłada się żel ułatwiający przewodzenie fal ultradźwiękowych, a lekarz przesuwa głowicę liniową nad kolejnymi okolicami stopy. Ocena obejmuje zwykle część statyczną oraz dynamiczną, czyli obserwację struktur podczas ruchu. Badanie jest bezbolesne, a jego opis sporządza lekarz wykonujący ultrasonografię.</p>
        <p>Ultrasonografię stopy wykonujemy w <Link href="/usg/">pracowni USG we Wrocławiu</Link> przy ulicy Opatowickiej 132. Aktualne ceny badań znajdziesz w zakładce <Link href="/cennik/">cennik</Link>, a dogodny termin ustalisz telefonicznie lub przez <Link href="/rejestracja/">rejestrację online</Link>.</p>
      </>
    ),
  },
  {
    title: 'Ograniczenia, bezpieczeństwo i przeciwwskazania USG stopy',
    tocLabel: 'Bezpieczeństwo i ograniczenia',
    content:
      (
      <>
        <p>USG stopy jest badaniem bezpiecznym i nie ma typowych przeciwwskazań. Nie wykorzystuje promieniowania jonizującego, więc można je powtarzać, a w razie potrzeby wykonać także u kobiet w ciąży.</p>
        <p>Najważniejszym ograniczeniem ultrasonografii jest jej <strong>zależność od osoby badającej</strong> - jakość obrazu i jego interpretacja zależą od doświadczenia lekarza oraz klasy sprzętu. USG nie ocenia wnętrza kości i struktur głębokich, dlatego nie zastępuje zdjęcia rentgenowskiego ani rezonansu magnetycznego, a o doborze badań i dalszym postępowaniu decyduje lekarz.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O wskazaniach do USG stopy, interpretacji wyniku oraz dalszej diagnostyce decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content:
      (
      <ol>
        <li>EFSUMB Guidelines and Recommendations on Musculoskeletal Ultrasound. Part I: Extraarticular pathologies. Ultraschall in der Medizin 2022 (PMID 34479372).</li>
        <li>Möller I. i wsp. The 2017 EULAR standardised procedures for ultrasound imaging in rheumatology. Annals of the Rheumatic Diseases 2017; 76(12): 1974-1979 (PMID 28814430).</li>
        <li>European Society of Musculoskeletal Radiology (ESSR). Musculoskeletal Ultrasound Technical Guidelines - Ankle.</li>
        <li>McMillan A.M. i wsp. Diagnostic imaging for chronic plantar heel pain: a systematic review and meta-analysis. Journal of Foot and Ankle Research 2009; 2: 32 (PMID 19912628).</li>
        <li>Aggarwal P. i wsp. Evaluation of plantar fascia using high-resolution ultrasonography in clinically diagnosed cases of plantar fasciitis. Polish Journal of Radiology 2020; 85: e375-e380 (PMID 32817771).</li>
        <li>Radwan A. i wsp. Ultrasonography, an effective tool in diagnosing plantar fasciitis: a systematic review of diagnostic trials. International Journal of Sports Physical Therapy 2016; 11(5): 663-671 (PMID 27757279).</li>
        <li>Bignotti B. i wsp. Ultrasound versus magnetic resonance imaging for Morton neuroma: systematic review and meta-analysis. European Radiology 2015; 25(8): 2254-2262 (PMID 25809742).</li>
        <li>Xu Z. i wsp. The accuracy of ultrasonography and magnetic resonance imaging for the diagnosis of Morton neuroma: a systematic review. Clinical Radiology 2015; 70(4): 351-358 (PMID 25466436).</li>
        <li>Padua L. i wsp. Relationship between sensory symptoms, Mulder sign, and dynamic ultrasonographic findings in Morton neuroma. Foot and Ankle International 2020; 41(12): 1474-1479 (PMID 32856473).</li>
        <li>Page P. i wsp. Diagnostic musculoskeletal ultrasound of the Achilles tendon. International Journal of Sports Physical Therapy 2025; 20(2): 296-304 (PMID 39906049).</li>
        <li>Tantray M.D. i wsp. Role of ultrasound in detection of radiolucent foreign bodies in extremities. Strategies in Trauma and Limb Reconstruction 2018; 13(2): 81-85 (PMID 29426979).</li>
        <li>Draghi F. i wsp. Imaging of plantar fascia disorders: findings on plain radiography, ultrasound and magnetic resonance imaging. Insights into Imaging 2017; 8(1): 69-78 (DOI 10.1007/s13244-016-0533-2; PMC5265197).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG stopy?',
    answer:
      'USG stopy wykrywa zmiany w tkankach miękkich będące częstą przyczyną bólu stopy. Pozwala ocenić zapalenie rozcięgna podeszwowego, nerwiaka Mortona, tendinopatie i uszkodzenia ścięgien, w tym ścięgna Achillesa, a także torbiele galaretowate, zapalenie kaletek i ciała obce. Struktury kostne, jak ostroga piętowa, ocenia się na RTG, a wynik interpretuje lekarz.',
  },
  {
    question: 'Czy USG stopy wykryje zapalenie rozcięgna podeszwowego i ostrogę piętową?',
    answer:
      'USG stopy jest pomocne w rozpoznaniu zapalenia rozcięgna podeszwowego, częstej przyczyny bólu pięty - ocenia grubość, strukturę oraz unaczynienie rozcięgna. Ostroga piętowa to zmiana kostna i uwidacznia się na zdjęciu rentgenowskim, a nie w USG, które obrazuje towarzyszące jej zmiany w tkankach miękkich.',
  },
  {
    question: 'Czy USG stopy wykryje nerwiaka Mortona?',
    answer:
      'USG stopy należy do podstawowych badań w diagnostyce nerwiaka Mortona. Uwidacznia hipoechogeniczną zmianę w przestrzeni międzyplusnowej, a ocena dynamiczna pod uciskiem (objaw Muldera) zwiększa jej pewność. Czułość USG jest zbliżona do rezonansu magnetycznego, jednak rozpoznanie jest przede wszystkim kliniczne i wymaga odniesienia do objawów.',
  },
  {
    question: 'Czy USG stopy zastępuje RTG lub rezonans magnetyczny?',
    answer:
      'USG stopy nie zastępuje RTG ani rezonansu magnetycznego - te metody się uzupełniają. Ultrasonografia najlepiej ocenia tkanki miękkie i umożliwia badanie w ruchu, RTG obrazuje kość (ostroga, złamania), a rezonans magnetyczny chrząstkę, szpik i struktury głębokie. O wyborze badania decyduje lekarz na podstawie objawów.',
  },
  {
    question: 'Czy na USG stopy potrzebne jest skierowanie i jak się przygotować?',
    answer:
      'Na USG stopy wykonywane prywatnie skierowanie nie jest wymagane - badanie można umówić bezpośrednio. Nie wymaga ono specjalnego przygotowania; wystarczy strój i obuwie pozwalające odsłonić stopę oraz kostkę. Warto zabrać dotychczasową dokumentację i wyniki wcześniejszych badań, jeśli były wykonywane.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG stopy?',
    answer:
      `Badanie USG stopy we Wrocławiu wykonasz w ${CLINIC.name} przy ${CLINIC.address.street} (${CLINIC.address.city}). Pracownia USG jest czynna w dni powszednie w godzinach ${CLINIC.hours.weekdays}; termin badania umówisz telefonicznie pod numerem ${CLINIC.phone}. Aktualny cennik USG stopy znajdziesz w zakładce Cennik na stronie Bas Clinic.`,
  },
];

export default function UsgStopyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG stopy we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG stopy to badanie narządu ruchu oceniające rozcięgno podeszwowe, ścięgna, drobne stawy i przestrzenie międzypalcowe. Wykonujemy je w Bas Clinic we Wrocławiu, bezboleśnie i bez promieniowania."
      slug="usg/stopa"
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
