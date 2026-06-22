import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG tkanek miękkich Wrocław | Bas Clinic',
  description:
    'USG tkanek miękkich we Wrocławiu - ocena guzków podskórnych, mięśni, ścięgien i zmian powierzchownych. Bezbolesne badanie bez przygotowania. Bas Clinic.',
  path: '/usg/tkanek-miekkich/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG tkanek miękkich' },
];

const RELATED = ['usg/wezlow-chlonnych', 'usg/stawow', 'usg/piersi'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG tkanek miękkich?',
    content:
      '<p>USG tkanek miękkich to badanie ultrasonograficzne struktur powierzchownych ciała, czyli skóry, tkanki podskórnej oraz leżących płycej mięśni, powięzi i ścięgien. Ultrasonografia tkanek miękkich wykorzystuje fale dźwiękowe o wysokiej częstotliwości, dzięki czemu pozwala uwidocznić nawet niewielkie zmiany ogniskowe i guzki.</p>' +
      '<p>Badanie obejmuje przede wszystkim ocenę: skóry i tkanki podskórnej, powierzchownych mięśni, powierzchownych ścięgien i więzadeł oraz wszelkich zmian ogniskowych, takich jak guzki czy zgrubienia. Diagnostyka tkanek miękkich opiera się na głowicy liniowej wysokiej częstotliwości, która zapewnia wysoką rozdzielczość obrazu warstw położonych blisko powierzchni skóry.</p>' +
      '<p>Określenia ultrasonografia struktur powierzchownych oraz USG tkanki podskórnej odnoszą się do tego samego rodzaju badania. Pozwala ono opisać położenie, wielkość i budowę zmiany bez naruszania ciągłości skóry.</p>',
  },
  {
    title: 'Co wykrywa USG tkanek miękkich?',
    content:
      '<p>USG tkanek miękkich pozwala uwidocznić różnego rodzaju zmiany położone w skórze i tkance podskórnej. Badanie USG tkanek miękkich umożliwia ocenę takich zmian, jak tłuszczaki, kaszaki (torbiele naskórkowe), torbiele, krwiaki, ropnie i inne zbiorniki płynu, a także ciała obce, przepukliny powłok brzucha oraz zmiany zapalne.</p>' +
      '<p>W trakcie badania ocenia się cechy zmiany: jej lokalizację, wielkość, echogeniczność, granice oraz unaczynienie w opcji dopplerowskiej. USG guzka podskórnego pozwala wstępnie odróżnić zmianę litą od zbiornika płynowego i opisać jej charakter morfologiczny.</p>' +
      '<p><strong>Należy podkreślić, że USG tkanek miękkich nie rozpoznaje nowotworu.</strong> Badanie ocenia jedynie cechy zmiany i może wskazywać na konieczność dalszej diagnostyki. Ostateczny charakter zmiany potwierdza się badaniami uzupełniającymi, na przykład biopsją, której wynik interpretuje lekarz.</p>',
  },
  {
    title: 'Wskazania do USG tkanek miękkich',
    content:
      '<p>Wskazaniem do USG tkanek miękkich jest najczęściej wyczuwalny guzek lub zgrubienie pod skórą, którego charakter wymaga oceny. Badanie tkanek miękkich wykonuje się również przy utrzymującym się obrzęku, miejscowym bólu lub zaczerwienieniu wskazującym na proces zapalny.</p>' +
      '<ul>' +
      '<li>wyczuwalny guzek, zgrubienie lub uwypuklenie pod skórą</li>' +
      '<li>obrzęk lub bolesność tkanek miękkich o niejasnej przyczynie</li>' +
      '<li>podejrzenie obecności ciała obcego po skaleczeniu lub urazie</li>' +
      '<li>ocena tkanek po urazie, na przykład w poszukiwaniu krwiaka</li>' +
      '<li>kontrola wcześniej opisanych zmian i monitorowanie ich wielkości</li>' +
      '</ul>' +
      '<p>USG zmiany podskórnej bywa zlecane także w celu zaplanowania dalszego postępowania, w tym ewentualnego zabiegu lub pobrania materiału do badania. O zakresie badania oraz dalszych krokach decyduje lekarz na podstawie obrazu i objawów.</p>',
  },
  {
    title: 'Jak przygotować się do USG tkanek miękkich?',
    content:
      '<p>USG tkanek miękkich nie wymaga specjalnego przygotowania. Przed badaniem nie trzeba być na czczo ani stosować diety, nie ma też konieczności odstawiania przyjmowanych leków.</p>' +
      '<p>Warto natomiast precyzyjnie wskazać lekarzowi dokładne miejsce zmiany lub dolegliwości, ponieważ ułatwia to ukierunkowanie badania na właściwy obszar. Pomocne jest również zabranie ze sobą poprzednich wyników badań obrazowych oraz opisów, jeśli zmiana była już wcześniej oceniana - umożliwia to porównanie i ocenę dynamiki zmian.</p>' +
      '<p>Bezpośrednio przed badaniem zaleca się odsłonięcie ocenianej okolicy i zdjęcie biżuterii z tego obszaru. Skóra w miejscu badania powinna być wolna od opatrunków i grubych warstw kosmetyków.</p>',
  },
  {
    title: 'USG tkanek miękkich a USG stawów',
    content:
      '<p>USG tkanek miękkich różni się od USG stawów przede wszystkim zakresem ocenianych struktur. Badanie USG tkanek miękkich koncentruje się na zmianach powierzchownych, guzkach oraz tkance podskórnej, podczas gdy badanie narządu ruchu skupia się na stawach, ścięgnach i więzadłach w kontekście ortopedycznym.</p>' +
      '<p>Jeżeli celem jest ocena dolegliwości stawowych, sztywności lub urazu więzadeł i ścięgien w obrębie narządu ruchu, właściwym badaniem jest <a href="/usg/stawow/">USG stawów</a>. W ramach diagnostyki tkanek miękkich ocenia się natomiast zmiany ogniskowe położone płytko, niezależnie od konkretnego stawu.</p>' +
      '<p>Gdy w okolicy zmiany wyczuwalne są powiększone węzły chłonne, lekarz może zalecić poszerzenie diagnostyki o <a href="/usg/wezlow-chlonnych/">USG węzłów chłonnych</a>. W przypadku zmian zlokalizowanych w obrębie piersi odpowiednim badaniem jest <a href="/usg/piersi/">USG piersi</a>, które ocenia tę okolicę w sposób ukierunkowany.</p>',
  },
  {
    title: 'Jak przebiega USG tkanek miękkich i kiedy wynik?',
    content:
      '<p>USG tkanek miękkich przebiega w pozycji leżącej lub siedzącej, w zależności od lokalizacji ocenianego obszaru. Na skórę nakłada się żel sprzęgający, a następnie lekarz przesuwa głowicę liniową nad badaną okolicą, obserwując obraz na monitorze.</p>' +
      '<p>Badanie jest bezbolesne, nieinwazyjne i nie wykorzystuje promieniowania jonizującego, dzięki czemu można je w razie potrzeby powtarzać. Cała procedura trwa zazwyczaj kilkanaście minut, a jej długość zależy od liczby ocenianych zmian i ich umiejscowienia.</p>' +
      '<p>Opis badania sporządza lekarz wykonujący USG i przekazuje go wraz z dokumentacją. Wynik USG nie zastępuje konsultacji lekarskiej - to lekarz interpretuje obraz w kontekście objawów i podejmuje decyzję o dalszym postępowaniu. Badanie tkanek miękkich jest częścią szerszej diagnostyki ultrasonograficznej dostępnej w ramach <a href="/usg/">pełnej oferty badań USG w Bas Clinic</a>. Aby zarezerwować termin, wystarczy skontaktować się pod numerem +48 690 511 511; placówka mieści się przy ul. Opatowickiej 132 we Wrocławiu, a aktualne ceny znajdują się w zakładce <a href="/cennik/">cennik</a>.</p>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG tkanek miękkich?',
    answer:
      'USG tkanek miękkich wykrywa zmiany położone w skórze i tkance podskórnej, takie jak tłuszczaki, kaszaki (torbiele naskórkowe), torbiele, krwiaki, ropnie, ciała obce, przepukliny powłok oraz zmiany zapalne. Badanie ocenia cechy zmiany, czyli jej lokalizację, wielkość, echogeniczność, granice i unaczynienie, co pozwala wstępnie opisać jej charakter i zaplanować dalsze postępowanie.',
  },
  {
    question: 'Czy USG tkanek miękkich rozpoznaje nowotwór?',
    answer:
      'USG tkanek miękkich nie rozpoznaje nowotworu. Badanie pozwala uwidocznić zmianę i ocenić jej cechy, takie jak granice, echogeniczność czy unaczynienie, jednak nie potwierdza charakteru zmiany. Może ono wskazywać na konieczność dalszej diagnostyki, na przykład biopsji, której wynik interpretuje lekarz. USG nie zastępuje konsultacji lekarskiej.',
  },
  {
    question: 'Czy do USG tkanek miękkich trzeba się przygotować?',
    answer:
      'Do USG tkanek miękkich nie trzeba się specjalnie przygotowywać. Nie ma konieczności bycia na czczo ani stosowania diety czy odstawiania leków. Warto jedynie wskazać lekarzowi dokładne miejsce zmiany oraz zabrać ze sobą poprzednie wyniki badań obrazowych, jeśli zmiana była już wcześniej oceniana.',
  },
  {
    question: 'Ile kosztuje USG tkanek miękkich we Wrocławiu?',
    answer:
      'Cena USG tkanek miękkich we Wrocławiu zależy od zakresu badania oraz liczby ocenianych okolic. Aktualny cennik dostępny jest w zakładce Cennik na stronie Bas Clinic, a szczegółowe informacje można też uzyskać telefonicznie pod numerem 690 511 511.',
  },
  {
    question: 'Czy na USG tkanek miękkich potrzebne jest skierowanie?',
    answer:
      'Na USG tkanek miękkich nie jest potrzebne skierowanie. Badanie wykonywane jest prywatnie, dlatego można je wykonać bez skierowania od lekarza. Wystarczy umówić dogodny termin, kontaktując się z Bas Clinic we Wrocławiu.',
  },
  {
    question: 'Czym różni się USG tkanek miękkich od USG stawów?',
    answer:
      'USG tkanek miękkich różni się od USG stawów zakresem ocenianych struktur. USG tkanek miękkich ocenia zmiany powierzchowne, guzki oraz tkankę podskórną, natomiast USG stawów koncentruje się na narządzie ruchu, czyli stawach, ścięgnach i więzadłach w kontekście ortopedycznym. O wyborze właściwego badania decyduje rodzaj dolegliwości i lokalizacja zmiany.',
  },
];

export default function UsgTkanekMiekkichPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG tkanek miękkich we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG tkanek miękkich służy ocenie guzków podskórnych, mięśni, ścięgien i innych zmian powierzchownych. To bezbolesne badanie bez specjalnego przygotowania. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/tkanek-miekkich"
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
