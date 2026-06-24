import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';

export const metadata = generatePageMetadata({
  title: 'USG stopy Wrocław - badanie | Bas Clinic',
  description:
    'USG stopy we Wrocławiu - ocena rozcięgna podeszwowego, nerwiaka Mortona i ścięgien stopy. Bezbolesne badanie bez promieniowania. Umów termin w Bas Clinic.',
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
      '<p>USG stopy to ultrasonografia narządu ruchu obejmująca struktury przodostopia, śródstopia oraz okolicy pięty. Badanie pozwala ocenić tkanki miękkie stopy, w tym rozcięgno podeszwowe, ścięgna, drobne stawy oraz przestrzenie międzykostne.</p><p>Ultrasonografia stopy wykorzystuje głowicę liniową o wysokiej częstotliwości, która bardzo dobrze obrazuje położone powierzchownie struktury. Metoda umożliwia także ocenę dynamiczną, czyli obserwację ścięgien i innych struktur podczas ruchu, co bywa pomocne w wykrywaniu drobnych zmian.</p><p>USG stopy jest częścią szerszej diagnostyki, jaką stanowi <a href="/usg/stawy/">USG stawów (narządu ruchu)</a>. Badanie jest nieinwazyjne, bezbolesne i nie wykorzystuje promieniowania jonizującego, dzięki czemu można je w razie potrzeby powtarzać.</p>',
  },
  {
    title: 'Co wykrywa USG stopy?',
    content:
      '<p>USG stopy pozwala uwidocznić zmiany w obrębie tkanek miękkich, które często odpowiadają za ból stopy. Badanie pomaga ocenić struktury najczęściej będące źródłem dolegliwości w okolicy pięty oraz przodostopia.</p><ul><li>zapalenie rozcięgna podeszwowego, czyli częstą przyczynę bólu pięty;</li><li>nerwiaka Mortona oraz inne zmiany w przestrzeniach międzypalcowych przodostopia;</li><li>uszkodzenia i stany zapalne ścięgien, w tym ścięgna Achillesa w okolicy jego przyczepu;</li><li>torbiele, ganglion oraz zmiany w obrębie kaletek maziowych;</li><li>obecność ciał obcych w tkankach miękkich oraz zmiany pourazowe.</li></ul><p>Warto podkreślić, że tak zwana ostroga piętowa, czyli element kostny, potwierdzana jest zdjęciem RTG, a nie w badaniu USG, które ocenia towarzyszące jej zmiany w tkankach miękkich. USG stopy nie zastępuje pełnej diagnostyki obrazowej, a ostateczne rozpoznanie ustala lekarz w odniesieniu do obrazu klinicznego.</p>',
  },
  {
    title: 'Wskazania do USG stopy',
    content:
      '<p>Najczęstszym wskazaniem do USG stopy jest przewlekły lub nawracający ból stopy, zwłaszcza pięty oraz przodostopia. Badanie ultrasonograficzne stopy zaleca się także przy objawach sugerujących stan zapalny lub uszkodzenie tkanek miękkich.</p><ul><li>ból pięty, który może wskazywać na zapalenie rozcięgna podeszwowego;</li><li>ból i drętwienie przodostopia mogące towarzyszyć nerwiakowi Mortona;</li><li>obrzęk, wyczuwalny guzek lub zgrubienie w obrębie stopy;</li><li>podejrzenie uszkodzenia lub stanu zapalnego ścięgien;</li><li>kontrola przebiegu leczenia oraz ocena efektów rehabilitacji.</li></ul><p>Ocena stopy w USG bywa elementem szerszej diagnostyki ortopedycznej oraz reumatologicznej. O zakresie badania i dalszym postępowaniu decyduje lekarz prowadzący.</p>',
  },
  {
    title: 'USG stopy a rezonans magnetyczny i RTG',
    content:
      '<p>USG stopy, rezonans magnetyczny oraz RTG to metody uzupełniające się, a nie zamienne. Ultrasonografia bardzo dobrze ocenia tkanki miękkie stopy, ścięgna i rozcięgno podeszwowe oraz umożliwia ocenę dynamiczną w ruchu, jednak nie zastępuje rezonansu magnetycznego ani zdjęcia rentgenowskiego.</p><p>Zmiany kostne, w tym ostrogę piętową oraz złamania, ocenia się na podstawie RTG, natomiast struktury położone głębiej oraz chrząstkę stawową dokładniej obrazuje rezonans magnetyczny. O wyborze metody diagnostycznej każdorazowo decyduje lekarz, uwzględniając obraz kliniczny i lokalizację zmian.</p><p>Gdy dolegliwości obejmują okolicę kostki, pomocne bywa <a href="/usg/staw-skokowy/">USG stawu skokowego</a>, a w ocenie powierzchownych guzków i zmian wykorzystuje się <a href="/usg/tkanki-miekkie/">USG tkanek miękkich</a>.</p>',
  },
  {
    title: 'Jak przygotować się i jak przebiega USG stopy?',
    content:
      '<p>USG stopy nie wymaga specjalnego przygotowania. Zaleca się jedynie wygodne obuwie oraz strój, które umożliwią łatwe odsłonięcie stopy i okolicy kostki.</p><p>Podczas badania na skórę nakłada się żel ułatwiający przewodzenie fal ultradźwiękowych, a następnie lekarz przesuwa głowicę liniową nad poszczególnymi okolicami stopy. Ocena obejmuje zwykle część statyczną oraz dynamiczną, czyli obserwację struktur podczas ruchu. Badanie jest bezbolesne, nie wykorzystuje promieniowania jonizującego, a jego opis sporządza lekarz wykonujący ultrasonografię.</p><p>Należy pamiętać, że USG stopy ocenia przede wszystkim tkanki miękkie i nie zastępuje konsultacji ortopedycznej ani pełnej diagnostyki obrazowej. Ultrasonografię stopy wykonujemy w <a href="/usg/">pracowni USG we Wrocławiu</a> przy ulicy Opatowickiej 132, a termin można ustalić telefonicznie pod numerem +48 690 511 511.</p>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG stopy?',
    answer:
      'USG stopy wykrywa zmiany w obrębie tkanek miękkich. Pozwala ocenić zapalenie rozcięgna podeszwowego będące częstą przyczyną bólu pięty, nerwiaka Mortona i inne zmiany w przestrzeniach międzypalcowych, uszkodzenia oraz stany zapalne ścięgien, a także torbiele, ganglion, ciała obce i zmiany pourazowe. Element kostny, czyli ostroga piętowa, potwierdzany jest zdjęciem RTG, a wynik USG interpretuje lekarz.',
  },
  {
    question: 'Czy USG stopy pomoże przy bólu pięty?',
    answer:
      'USG stopy jest pomocne przy bólu pięty, ponieważ pozwala ocenić rozcięgno podeszwowe i wykryć cechy jego zapalenia, które jest częstą przyczyną takich dolegliwości. Badanie ocenia również ścięgna oraz inne tkanki miękkie okolicy pięty. Tak zwaną ostrogę piętową, czyli zmianę kostną, potwierdza się zdjęciem RTG, a dalsze postępowanie ustala lekarz.',
  },
  {
    question: 'Czy USG stopy wykryje nerwiaka Mortona?',
    answer:
      'USG stopy jest jednym z badań stosowanych w diagnostyce nerwiaka Mortona, ponieważ pozwala ocenić przestrzenie międzypalcowe przodostopia i uwidocznić charakterystyczne zgrubienie. Badanie umożliwia także ocenę dynamiczną. Ostateczne rozpoznanie lekarz ustala w odniesieniu do objawów, a w razie potrzeby zaleca dodatkową diagnostykę obrazową.',
  },
  {
    question: 'Jak przygotować się do USG stopy?',
    answer:
      'Do USG stopy nie trzeba się specjalnie przygotowywać. Wystarczy zadbać o wygodne obuwie i strój, które umożliwią łatwe odsłonięcie stopy oraz okolicy kostki. Badanie jest bezbolesne, nie wykorzystuje promieniowania i polega na przesuwaniu głowicy po skórze pokrytej żelem, zarówno w spoczynku, jak i podczas ruchu.',
  },
  {
    question: 'Ile kosztuje USG stopy we Wrocławiu?',
    answer:
      'Cena USG stopy we Wrocławiu zależy od zakresu badania. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511, gdzie można też ustalić dogodny termin badania.',
  },
  {
    question: 'Czy na USG stopy potrzebne jest skierowanie?',
    answer:
      'Na USG stopy wykonywane prywatnie skierowanie nie jest wymagane. Badanie można umówić bezpośrednio, kontaktując się z Bas Clinic. Warto zabrać ze sobą dotychczasową dokumentację medyczną oraz wyniki wcześniejszych badań, jeśli takie były wykonywane.',
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
