import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';

export const metadata = generatePageMetadata({
  title: 'USG stawu skokowego Wrocław | Bas Clinic',
  description:
    'USG stawu skokowego we Wrocławiu - ocena więzadeł, ścięgien i wysięku po skręceniu kostki. Bezbolesne badanie bez promieniowania. Umów termin w Bas Clinic.',
  path: '/usg/stawu-skokowego/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG stawu skokowego' },
];

const RELATED = ['usg/stawow', 'usg/stopy', 'usg/tkanek-miekkich'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG stawu skokowego?',
    content:
      '<p>USG stawu skokowego to ultrasonografia narządu ruchu skupiona na okolicy kostki, czyli stawu łączącego goleń ze stopą. Badanie ocenia struktury samego stawu oraz tkanki okołostawowe, w tym więzadła, ścięgna, kaletki maziowe i błonę maziową.</p><p>Ultrasonografia stawu skokowego wykorzystuje głowicę liniową o wysokiej częstotliwości, która dobrze obrazuje położone powierzchownie struktury kostki. Istotną zaletą metody jest możliwość oceny dynamicznej, czyli obserwacji więzadeł i ścięgien podczas ruchu, co bywa pomocne w ocenie ich ciągłości i stabilności.</p><p>USG stawu skokowego jest częścią szerszej diagnostyki, jaką jest <a href="/usg/stawow/">USG stawów (narządu ruchu)</a>. Badanie jest nieinwazyjne, bezbolesne i nie wykorzystuje promieniowania jonizującego, dzięki czemu można je w razie potrzeby powtarzać.</p>',
  },
  {
    title: 'Co wykrywa USG stawu skokowego?',
    content:
      '<p>USG stawu skokowego pozwala uwidocznić zmiany w obrębie tkanek miękkich kostki, które często są źródłem dolegliwości bólowych po urazie. Badanie pomaga ocenić struktury najczęściej uszkadzane podczas skręcenia kostki.</p><ul><li>uszkodzenia i naciągnięcia więzadeł, w tym więzadeł bocznych kostki ocenianych po skręceniu;</li><li>stany zapalne i uszkodzenia ścięgien, na przykład ścięgna Achillesa, ścięgien strzałkowych oraz ścięgna piszczelowego tylnego;</li><li>obecność wysięku w stawie oraz zapalenie błony maziowej;</li><li>zmiany pourazowe, krwiaki i obrzęk tkanek miękkich okolicy kostki;</li><li>torbiele oraz zmiany w obrębie kaletek maziowych.</li></ul><p>Wynik badania pomaga ocenić charakter dolegliwości po urazie kostki. Należy jednak pamiętać, że USG ocenia przede wszystkim tkanki miękkie, a podejrzenie złamania potwierdza się zdjęciem RTG. Ostateczną interpretację obrazu oraz rozpoznanie ustala lekarz w odniesieniu do obrazu klinicznego.</p>',
  },
  {
    title: 'Wskazania do USG stawu skokowego',
    content:
      '<p>Najczęstszym wskazaniem do USG stawu skokowego jest uraz kostki, zwłaszcza skręcenie, oraz utrzymujące się po nim dolegliwości. Badanie ultrasonograficzne kostki zaleca się także przy objawach sugerujących stan zapalny lub uszkodzenie ścięgna.</p><ul><li>ból, obrzęk i zasinienie okolicy kostki po skręceniu lub innym urazie;</li><li>uczucie niestabilności stawu skokowego oraz nawracające skręcenia;</li><li>podejrzenie uszkodzenia więzadeł lub ścięgien okolicy kostki;</li><li>ból tylnej części pięty mogący wskazywać na zmiany w ścięgnie Achillesa;</li><li>kontrola przebiegu leczenia oraz ocena efektów rehabilitacji.</li></ul><p>Ocena stawu skokowego w USG bywa elementem szerszej diagnostyki ortopedycznej. O zakresie badania oraz dalszym postępowaniu decyduje lekarz prowadzący.</p>',
  },
  {
    title: 'USG stawu skokowego a rezonans magnetyczny i RTG',
    content:
      '<p>USG stawu skokowego, rezonans magnetyczny i RTG to metody uzupełniające się, a nie zamienne. Ultrasonografia bardzo dobrze ocenia więzadła i ścięgna kostki oraz umożliwia ocenę dynamiczną w ruchu, jednak nie zastępuje rezonansu magnetycznego ani zdjęcia rentgenowskiego.</p><p>Zmiany kostne, w tym złamania, ocenia się na podstawie RTG, natomiast struktury położone głębiej oraz chrząstkę stawową dokładniej obrazuje rezonans magnetyczny. W wielu sytuacjach klinicznych to właśnie te badania pozostają rozstrzygające. O wyborze metody diagnostycznej każdorazowo decyduje lekarz, uwzględniając obraz kliniczny i lokalizację zmian.</p><p>Gdy dolegliwości obejmują dalszą część kończyny, pomocne bywa <a href="/usg/stopy/">USG stopy</a>, a w ocenie powierzchownych zmian tkanek miękkich wykorzystuje się <a href="/usg/tkanek-miekkich/">USG tkanek miękkich</a>.</p>',
  },
  {
    title: 'Jak przygotować się i jak przebiega USG stawu skokowego?',
    content:
      '<p>USG stawu skokowego nie wymaga specjalnego przygotowania. Zaleca się jedynie wygodny strój oraz obuwie, które umożliwią łatwe odsłonięcie okolicy kostki i stopy.</p><p>Podczas badania na skórę nakłada się żel ułatwiający przewodzenie fal ultradźwiękowych, a następnie lekarz przesuwa głowicę liniową nad okolicą stawu skokowego. Ocena obejmuje zwykle część statyczną oraz dynamiczną, czyli obserwację więzadeł i ścięgien podczas ruchu kostki. Badanie jest bezbolesne i nie wykorzystuje promieniowania jonizującego, a jego opis sporządza lekarz wykonujący ultrasonografię.</p><p>Należy pamiętać, że USG stawu skokowego ocenia przede wszystkim tkanki miękkie i nie zastępuje konsultacji ortopedycznej ani pełnej diagnostyki obrazowej. Ultrasonografię kostki wykonujemy w <a href="/usg/">pracowni USG we Wrocławiu</a> przy ulicy Opatowickiej 132, a termin można ustalić telefonicznie pod numerem +48 690 511 511.</p>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG stawu skokowego?',
    answer:
      'USG stawu skokowego wykrywa zmiany w obrębie tkanek miękkich kostki. Pozwala ocenić uszkodzenia i naciągnięcia więzadeł (w tym więzadeł bocznych po skręceniu), stany zapalne i uszkodzenia ścięgien, na przykład ścięgna Achillesa czy ścięgien strzałkowych, a także obecność wysięku w stawie, zapalenie błony maziowej oraz zmiany pourazowe. Podejrzenie złamania potwierdza się zdjęciem RTG, a wynik interpretuje lekarz.',
  },
  {
    question: 'Czy warto zrobić USG kostki po skręceniu?',
    answer:
      'USG stawu skokowego jest pomocnym badaniem po skręceniu kostki, ponieważ pozwala ocenić więzadła, ścięgna oraz obecność wysięku i zmian pourazowych w tkankach miękkich. Umożliwia też ocenę dynamiczną w ruchu. Badanie nie ocenia jednak kości, dlatego przy podejrzeniu złamania konieczne jest zdjęcie RTG. O zakresie diagnostyki decyduje lekarz.',
  },
  {
    question: 'USG stawu skokowego czy rezonans magnetyczny?',
    answer:
      'USG stawu skokowego i rezonans magnetyczny uzupełniają się. USG bardzo dobrze ocenia więzadła i ścięgna kostki oraz umożliwia ocenę dynamiczną w ruchu, natomiast struktury głębokie i chrząstkę dokładniej obrazuje rezonans magnetyczny, a zmiany kostne ocenia RTG. O wyborze metody decyduje lekarz na podstawie obrazu klinicznego i lokalizacji zmian.',
  },
  {
    question: 'Jak przygotować się do USG stawu skokowego?',
    answer:
      'Do USG stawu skokowego nie trzeba się specjalnie przygotowywać. Wystarczy zadbać o wygodny strój i obuwie, które umożliwią łatwe odsłonięcie okolicy kostki i stopy. Badanie jest bezbolesne, nie wykorzystuje promieniowania i polega na przesuwaniu głowicy po skórze pokrytej żelem, zarówno w spoczynku, jak i podczas ruchu stawu.',
  },
  {
    question: 'Ile kosztuje USG stawu skokowego we Wrocławiu?',
    answer:
      'Cena USG stawu skokowego we Wrocławiu zależy od zakresu badania. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511, gdzie można też ustalić dogodny termin badania.',
  },
  {
    question: 'Czy na USG stawu skokowego potrzebne jest skierowanie?',
    answer:
      'Na USG stawu skokowego wykonywane prywatnie skierowanie nie jest wymagane. Badanie można umówić bezpośrednio, kontaktując się z Bas Clinic. Warto zabrać ze sobą dotychczasową dokumentację medyczną oraz wyniki wcześniejszych badań, jeśli takie były wykonywane.',
  },
];

export default function UsgStawuSkokowegoPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG stawu skokowego we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG stawu skokowego to badanie narządu ruchu oceniające więzadła, ścięgna i wysięk w okolicy kostki, także po skręceniu. Wykonujemy je w Bas Clinic we Wrocławiu, bezboleśnie i bez promieniowania."
      slug="usg/stawu-skokowego"
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
