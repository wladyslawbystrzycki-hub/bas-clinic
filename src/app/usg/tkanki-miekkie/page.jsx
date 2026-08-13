import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG tkanek miękkich Wrocław - guzki podskórne',
  description:
    'USG tkanek miękkich we Wrocławiu - ultrasonografia guzków podskórnych, torbieli i ciał obcych. Badanie bezbolesne, bez skierowania i bez przygotowania.',
  path: '/usg/tkanki-miekkie/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG tkanek miękkich' },
];

const RELATED = ['usg/wezly-chlonne', 'usg/stawy', 'usg/piersi'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG tkanek miękkich?',
    content:
      (
      <>
        <p><strong>USG tkanek miękkich</strong> to badanie ultrasonograficzne struktur powierzchownych ciała: skóry, tkanki podskórnej oraz leżących płycej mięśni, powięzi i ścięgien. Ultrasonografia tkanek miękkich wykorzystuje fale dźwiękowe o wysokiej częstotliwości i nie korzysta z promieniowania jonizującego, dzięki czemu pozwala uwidocznić nawet niewielkie zmiany ogniskowe i guzki.</p>
        <p>Obrazowanie opiera się na <strong>głowicy liniowej o wysokiej częstotliwości</strong> (zwykle kilkunastu megaherców), która zapewnia wysoką rozdzielczość warstw położonych blisko powierzchni skóry. Badanie ocenia przede wszystkim skórę i tkankę podskórną, powierzchowne mięśnie, powięzie oraz wszelkie zmiany ogniskowe, takie jak guzki czy zgrubienia.</p>
        <p>Określenia <strong>ultrasonografia struktur powierzchownych</strong> oraz <strong>USG tkanki podskórnej</strong> odnoszą się do tego samego rodzaju badania. Pozwala ono opisać położenie, wielkość, budowę i unaczynienie zmiany bez naruszania ciągłości skóry.</p>
      </>
    ),
  },
  {
    title: 'Co wykrywa USG tkanek miękkich?',
    tocLabel: 'Co wykrywa',
    content:
      (
      <>
        <p>USG tkanek miękkich uwidacznia zmiany położone w skórze i tkance podskórnej: tłuszczaki, kaszaki, torbiele, krwiaki, ropnie, ciała obce, przepukliny powłok oraz ogniska zapalne. Badanie ocenia cechy zmiany - jej lokalizację, wielkość, echogeniczność, granice oraz unaczynienie w opcji dopplerowskiej - co pozwala wstępnie określić jej charakter.</p>
        <h3>Guzki lite: tłuszczaki i inne zmiany</h3>
        <p><strong>Tłuszczak</strong> (lipoma) to najczęstszy łagodny guz tkanek miękkich, a ultrasonografia jest dla niego metodą obrazową pierwszego wyboru (Rahmani i wsp., 2017). USG dobrze charakteryzuje także inne zmiany lite, choć trafność rozpoznania zależy od typu zmiany oraz doświadczenia badającego.</p>
        <h3>Zmiany płynowe: torbiele, kaszaki, krwiaki i ropnie</h3>
        <p>Badanie wstępnie odróżnia zmianę litą od zbiornika płynowego. <strong>Kaszak</strong> (torbiel naskórkowa), <strong>torbiel</strong>, <strong>krwiak</strong> czy <strong>ropień</strong> mają charakterystyczny obraz - ropień jest zwykle zbiornikiem o obniżonej echogeniczności, bez przepływu w opcji dopplerowskiej, otoczonym wzmożonym unaczynieniem.</p>
        <h3>Ciała obce i przepukliny powłok</h3>
        <p>USG uwidacznia <strong>ciała obce</strong>, w tym drzazgi, drewno czy szkło, które bywają niewidoczne na zdjęciu rentgenowskim (Davis i wsp., 2015). Pozwala też ocenić <strong>przepuklinę powłok</strong> - pomocne jest tu badanie dynamiczne, podczas próby Valsalvy, gdy worek przepuklinowy uwypukla się pod naciskiem tłoczni brzusznej.</p>
        <p><strong>USG tkanek miękkich nie rozpoznaje nowotworu.</strong> Badanie opisuje cechy zmiany i może wskazywać na potrzebę dalszej diagnostyki, jednak ostateczny charakter potwierdza biopsja oraz badanie histopatologiczne, których wynik interpretuje lekarz.</p>
      </>
    ),
  },
  {
    title: 'Wskazania - kiedy wykonać USG tkanek miękkich?',
    tocLabel: 'Wskazania',
    content:
      (
      <>
        <p>Wskazaniem do USG tkanek miękkich jest najczęściej wyczuwalny guzek lub zgrubienie pod skórą, którego charakter wymaga oceny. Badanie wykonuje się również przy utrzymującym się obrzęku, miejscowym bólu albo zaczerwienieniu sugerującym proces zapalny.</p>
        <ul>
          <li>wyczuwalny guzek, zgrubienie lub uwypuklenie pod skórą,</li>
          <li>obrzęk lub bolesność tkanek miękkich o niejasnej przyczynie,</li>
          <li>podejrzenie obecności ciała obcego po skaleczeniu lub urazie,</li>
          <li>ocena okolicy po urazie, na przykład w poszukiwaniu krwiaka,</li>
          <li>kontrola wcześniej opisanych zmian i monitorowanie ich wielkości.</li>
        </ul>
        <p>USG zmiany podskórnej bywa też zlecane, by zaplanować dalsze postępowanie, w tym ewentualny zabieg lub pobranie materiału do badania. O zakresie badania oraz dalszych krokach decyduje lekarz na podstawie obrazu i objawów.</p>
      </>
    ),
  },
  {
    title: 'USG tkanek miękkich a inne badania ultrasonograficzne',
    tocLabel: 'Porównanie badań',
    content:
      (
      <>
        <p>USG tkanek miękkich różni się od pokrewnych badań ultrasonograficznych zakresem ocenianych struktur. Skupia się na zmianach powierzchownych, guzkach i tkance podskórnej, podczas gdy inne badania celują w konkretne narządy lub układy.</p>
        <p>Gdy dolegliwości dotyczą narządu ruchu - stawów, ścięgien czy więzadeł - właściwym badaniem jest <Link href="/usg/stawy/">USG stawów</Link>. Jeśli w okolicy zmiany wyczuwalne są powiększone węzły, lekarz może zalecić <Link href="/usg/wezly-chlonne/">USG węzłów chłonnych</Link>, a w przypadku zmian w obrębie piersi - ukierunkowane <Link href="/usg/piersi/">USG piersi</Link>. Zmiany w okolicy gruczołów ślinowych ocenia się odrębnie, w ramach <Link href="/usg/slinianki/">USG ślinianek</Link>.</p>
        <table>
          <tbody>
            <tr>
              <th>Badanie</th>
              <th>Główny zakres</th>
              <th>Promieniowanie jonizujące</th>
              <th>Inwazyjność</th>
            </tr>
            <tr>
              <td>USG tkanek miękkich</td>
              <td>guzki podskórne, zmiany powierzchowne, ciała obce</td>
              <td>nie</td>
              <td>nieinwazyjne</td>
            </tr>
            <tr>
              <td>USG stawów</td>
              <td>narząd ruchu: stawy, ścięgna, więzadła</td>
              <td>nie</td>
              <td>nieinwazyjne</td>
            </tr>
            <tr>
              <td>Rezonans magnetyczny (RM)</td>
              <td>zmiany głębokie i rozległe, ocena zasięgu guza</td>
              <td>nie</td>
              <td>nieinwazyjne</td>
            </tr>
            <tr>
              <td>Tomografia komputerowa (TK)</td>
              <td>struktury kostne, zwapnienia</td>
              <td>tak</td>
              <td>nieinwazyjne</td>
            </tr>
          </tbody>
        </table>
        <p>Dzięki nieinwazyjności i brakowi promieniowania ultrasonografia jest zwykle badaniem pierwszego rzutu w ocenie zmian powierzchownych. Metody uzupełniające lekarz dobiera w zależności od głębokości i charakteru zmiany.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega USG tkanek miękkich i jak się przygotować?',
    tocLabel: 'Przebieg i przygotowanie',
    content:
      (
      <>
        <p>USG tkanek miękkich przebiega w pozycji leżącej lub siedzącej, w zależności od lokalizacji ocenianego obszaru. Na skórę nakłada się żel sprzęgający, a lekarz przesuwa głowicę liniową nad badaną okolicą i na bieżąco ocenia obraz na monitorze. Procedura jest bezbolesna i zwykle trwa kilkanaście minut.</p>
        <h3>Jak przebiega badanie?</h3>
        <ol>
          <li>Pacjent odsłania okolicę zmiany lub dolegliwości i przyjmuje wygodną pozycję.</li>
          <li>Lekarz nanosi żel i ocenia zmianę w dwóch płaszczyznach - jej położenie, wielkość, granice i echogeniczność.</li>
          <li>W razie potrzeby włącza opcję Dopplera, aby ocenić unaczynienie zmiany.</li>
          <li>Po badaniu przygotowuje opis, który pacjent najczęściej otrzymuje bezpośrednio po wizycie.</li>
        </ol>
        <h3>Jak przygotować się do USG tkanek miękkich?</h3>
        <p>USG tkanek miękkich nie wymaga specjalnego przygotowania - nie trzeba być na czczo, stosować diety ani odstawiać leków. Warto precyzyjnie wskazać miejsce zmiany lub dolegliwości oraz zabrać poprzednie wyniki badań obrazowych, jeśli zmiana była już oceniana, co umożliwia porównanie i ocenę jej dynamiki. Bezpośrednio przed badaniem odsłania się ocenianą okolicę i zdejmuje biżuterię, a skóra powinna być wolna od opatrunków i grubych warstw kosmetyków.</p>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo i ograniczenia USG tkanek miękkich',
    tocLabel: 'Bezpieczeństwo i ograniczenia',
    content:
      (
      <>
        <p>USG tkanek miękkich jest badaniem bezpiecznym i nieinwazyjnym - nie wykorzystuje promieniowania jonizującego, dlatego nie ma typowych przeciwwskazań i można je powtarzać, również u dzieci oraz u kobiet w ciąży. Każda metoda obrazowa ma jednak swoje granice.</p>
        <h3>Ograniczenia badania</h3>
        <p>Ultrasonografia dobrze charakteryzuje powierzchowne zmiany tkanek miękkich, a w doświadczonych rękach trafnie różnicuje zmiany łagodne od podejrzanych (Hung i wsp., 2020). Nie rozstrzyga jednak ostatecznie charakteru guza - to potwierdza biopsja oraz badanie histopatologiczne. Obraz zależy też od doświadczenia badającego, a zmiany położone głęboko pod powięzią mogą wymagać rezonansu magnetycznego.</p>
        <h3>Kiedy zmiana wymaga poszerzonej diagnostyki?</h3>
        <p>Większość guzków podskórnych to zmiany łagodne, jednak pewne cechy nakazują czujność. Zgodnie z zaleceniami Society of Radiologists in Ultrasound (SRU, 2022) do takich sygnałów ostrzegawczych należą:</p>
        <ul>
          <li>wielkość powyżej 5 cm - to najsilniejszy pojedynczy sygnał ostrzegawczy,</li>
          <li>położenie głębokie, pod powięzią,</li>
          <li>szybki wzrost zmiany.</li>
        </ul>
        <p>Obecność tych cech nie oznacza rozpoznania, ale skłania lekarza do skierowania na rezonans magnetyczny lub biopsję. Trzeba pamiętać, że niewielka część złośliwych zmian tkanek miękkich ma mniej niż 5 cm, dlatego o dalszym postępowaniu zawsze decyduje lekarz, oceniając całość obrazu klinicznego.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O zasadności badania, jego interpretacji oraz ewentualnej dalszej diagnostyce decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje USG tkanek miękkich we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content:
      (
      <>
        <p>Cena USG tkanek miękkich we Wrocławiu zależy od zakresu badania oraz liczby ocenianych okolic. Aktualny koszt znajdziesz w zakładce <Link href="/cennik/">cennik</Link>, a dokładną kwotę potwierdzisz podczas rejestracji.</p>
        <p>Badanie wykonujemy prywatnie, bez skierowania, w pracowni USG Bas Clinic we Wrocławiu. Dogodny termin <Link href="/rejestracja/">umówisz online</Link> lub telefonicznie, a pełną ofertę diagnostyki przedstawia <Link href="/usg/">pracownia USG</Link>.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content:
      (
      <ol>
        <li>Society of Radiologists in Ultrasound (SRU). Zalecenia dotyczące oceny i obrazowania powierzchownych guzów tkanek miękkich. Radiology 2022 (PMID 35412355).</li>
        <li>European Society of Musculoskeletal Radiology (ESSR). Guidelines for the imaging of soft tissue tumours, 2024.</li>
        <li>Hung E.H.Y. i wsp. Dokładność ultrasonografii w charakterystyce powierzchownych zmian tkanek miękkich. 2020 (PMID 31900511).</li>
        <li>Hung E.H.Y. i wsp. Ultrasonografia guzów tkanek miękkich położonych powierzchownie względem powięzi. AJR Am J Roentgenol 2014 (PMID 24848846).</li>
        <li>Rahmani G. i wsp. Rola ultrasonografii w diagnostyce tłuszczaków tkanek miękkich. 2017 (PMID 28717519).</li>
        <li>Davis J. i wsp. Wykrywanie ciał obcych tkanek miękkich w badaniu ultrasonograficznym. 2015 (PMID 26111545).</li>
        <li>Gottlieb M. i wsp. Ultrasonografia w diagnostyce zakażeń skóry i tkanek miękkich (ropień a zapalenie tkanki łącznej). 2020 (PMID 32081383).</li>
        <li>Kwee R.M., Kwee T.C. Ultrasonografia przepuklin powłok brzucha. 2018 (PMID 29761361).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG tkanek miękkich?',
    answer:
      'USG tkanek miękkich wykrywa zmiany położone w skórze i tkance podskórnej: tłuszczaki, kaszaki, torbiele, krwiaki, ropnie, ciała obce, przepukliny powłok oraz ogniska zapalne. Badanie ocenia cechy zmiany - jej położenie, wielkość, echogeniczność, granice i unaczynienie - jednak charakter zmiany potwierdza dalsza diagnostyka, a wynik interpretuje lekarz.',
  },
  {
    question: 'Czy USG tkanek miękkich rozpoznaje nowotwór?',
    answer:
      'USG tkanek miękkich nie rozpoznaje nowotworu. Badanie uwidacznia zmianę i opisuje jej cechy - granice, echogeniczność i unaczynienie - ale nie potwierdza jej charakteru. Może wskazywać na potrzebę dalszej diagnostyki, na przykład biopsji, której wynik interpretuje lekarz. USG nie zastępuje konsultacji lekarskiej.',
  },
  {
    question: 'Czy do USG tkanek miękkich trzeba się przygotować?',
    answer:
      'Do USG tkanek miękkich nie trzeba się specjalnie przygotowywać - nie ma konieczności bycia na czczo, stosowania diety ani odstawiania leków. Warto jedynie wskazać lekarzowi dokładne miejsce zmiany oraz zabrać poprzednie wyniki badań obrazowych, jeśli zmiana była już wcześniej oceniana.',
  },
  {
    question: 'Czy na USG tkanek miękkich potrzebne jest skierowanie?',
    answer:
      'Na USG tkanek miękkich nie jest potrzebne skierowanie - badanie wykonywane jest prywatnie, więc można umówić je samodzielnie. Wystarczy ustalić dogodny termin w pracowni USG Bas Clinic we Wrocławiu, telefonicznie lub online, a aktualny koszt potwierdzić w cenniku.',
  },
  {
    question: 'Czym różni się USG tkanek miękkich od USG stawów?',
    answer:
      'USG tkanek miękkich różni się od USG stawów zakresem ocenianych struktur. USG tkanek miękkich ocenia zmiany powierzchowne, guzki i tkankę podskórną, natomiast USG stawów koncentruje się na narządzie ruchu - stawach, ścięgnach i więzadłach. O wyborze właściwego badania decyduje rodzaj dolegliwości i lokalizacja zmiany.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG tkanek miękkich?',
    answer: `USG tkanek miękkich we Wrocławiu wykonasz w pracowni USG Bas Clinic przy ${CLINIC.address.street}. Badanie jest prywatne i nie wymaga skierowania, a termin umówisz telefonicznie pod numerem ${CLINIC.phone}. Pracownia przyjmuje od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, a koszt potwierdzisz w cenniku lub podczas rejestracji.`,
  },
];

export default function UsgTkanekMiekkichPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG tkanek miękkich we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG tkanek miękkich służy ocenie guzków podskórnych, mięśni, ścięgien i innych zmian powierzchownych. To bezbolesne badanie bez specjalnego przygotowania. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/tkanki-miekkie"
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
