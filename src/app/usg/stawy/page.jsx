import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';

export const metadata = generatePageMetadata({
  title: 'USG stawów Wrocław - narząd ruchu',
  description:
    'USG stawów (narządu ruchu) we Wrocławiu - bezbolesne badanie kolana, barku, nadgarstka i innych stawów. Ocena ścięgien, więzadeł i tkanek miękkich. Umów termin.',
  path: '/usg/stawy/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG stawów' },
];

const RELATED = ['usg/tkanki-miekkie', 'usg/doppler'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG stawów (narządu ruchu)?',
    content:
      '<p>USG stawów to ultrasonografia narządu ruchu, która pozwala ocenić struktury samego stawu oraz tkanki okołostawowe, czyli ścięgna, więzadła, mięśnie, kaletki maziowe i błonę maziową. Badanie to bywa określane także jako USG narządu ruchu, USG układu ruchu, USG ortopedyczne lub USG mięśniowo-szkieletowe (mięśniowo-stawowe).</p><p>Ultrasonografia stawów wykorzystuje głowicę liniową o wysokiej częstotliwości, która dobrze obrazuje struktury położone powierzchownie. Istotną zaletą tej metody jest możliwość oceny dynamicznej, czyli obserwacji struktur w ruchu, co bywa pomocne przy ocenie ścięgien i niestabilności.</p><p>Diagnostyka USG stawu jest nieinwazyjna, bezbolesna i nie wykorzystuje promieniowania jonizującego. Z tego względu badanie można w razie potrzeby powtarzać, na przykład w celu monitorowania przebiegu leczenia.</p>',
  },
  {
    title: 'Jakie stawy można zbadać? Najczęściej badane stawy',
    content:
      '<p>USG stawów pozwala zbadać większość stawów dostępnych dla głowicy ultrasonograficznej, a do najczęściej badanych należą kolano, bark oraz nadgarstek. Często ocenie poddaje się również staw skokowy, łokieć, biodro oraz drobne stawy ręki i stopy.</p><p>Zwykle podczas jednej wizyty ocenia się jeden staw wraz z otaczającymi go tkankami, co pozwala na dokładną analizę okolicy zgłaszanej przez pacjenta. Wśród popularnych wskazań pojawiają się między innymi USG kolana, USG barku i USG nadgarstka, a także ocena bolącego stawu po urazie.</p><p>Warto podkreślić, że <strong>USG stawów biodrowych niemowląt</strong> (przesiewowa diagnostyka w kierunku dysplazji) to osobne, dedykowane badanie wykonywane według odrębnego protokołu i nie wchodzi ono w zakres tej oferty. Rutynowe USG narządu ruchu u osób dorosłych nie jest tożsame z przesiewem bioderek u dzieci.</p>',
  },
  {
    title: 'Co wykrywa USG stawów?',
    content:
      '<p>USG stawów pozwala uwidocznić nieprawidłowości w obrębie tkanek miękkich narządu ruchu, takie jak wysięk w stawie oraz zapalenie błony maziowej. Badanie pomaga ocenić struktury, które często są źródłem dolegliwości bólowych.</p><ul><li>uszkodzenia i stany zapalne ścięgien, na przykład ścięgna Achillesa lub ścięgien stożka rotatorów barku;</li><li>zapalenie rozcięgna podeszwowego stopy (sam element kostny, czyli tak zwana ostroga piętowa, potwierdzany jest zdjęciem RTG, a nie w USG);</li><li>zmiany w obrębie więzadeł oraz kaletek maziowych;</li><li>torbiele okołostawowe, między innymi torbiel Bakera w dole podkolanowym czy ganglion w okolicy nadgarstka;</li><li>zmiany pourazowe i krwiaki w obrębie mięśni i tkanek miękkich.</li></ul><p>Wynik badania pomaga ocenić charakter dolegliwości i może wskazywać na konieczność dalszej diagnostyki obrazowej. Ostateczną interpretację obrazu oraz rozpoznanie ustala lekarz w odniesieniu do obrazu klinicznego.</p>',
  },
  {
    title: 'Wskazania do USG stawów',
    content:
      '<p>Wskazaniem do USG stawów jest najczęściej ból stawu, jego obrzęk oraz ograniczenie ruchomości. Badanie ultrasonograficzne narządu ruchu zaleca się także po urazach oraz przy podejrzeniu stanu zapalnego lub wysięku w stawie.</p><ul><li>przewlekłe lub nawracające dolegliwości bólowe stawu i okolicy okołostawowej;</li><li>obrzęk, zaczerwienienie lub wyczuwalny opór w obrębie stawu;</li><li>uraz sportowy lub mechaniczny i ocena zmian pourazowych;</li><li>podejrzenie zapalenia ścięgna, kaletki maziowej lub błony maziowej;</li><li>kontrola przebiegu leczenia oraz ocena efektów rehabilitacji;</li><li>kwalifikacja do iniekcji dostawowych oraz ich monitorowanie, ponieważ zabiegi te można wykonywać pod kontrolą USG.</li></ul><p>Ocena stawu w USG bywa również elementem szerszej diagnostyki ortopedycznej i reumatologicznej. O zakresie badania oraz dalszym postępowaniu decyduje lekarz prowadzący.</p>',
  },
  {
    title: 'USG stawów a rezonans magnetyczny (MRI)',
    content:
      '<p>USG stawów i rezonans magnetyczny to metody uzupełniające się, a nie zamienne. Ultrasonografia bardzo dobrze ocenia tkanki miękkie i ścięgna oraz umożliwia ocenę dynamiczną w ruchu, jednak nie zastępuje rezonansu magnetycznego.</p><p>Struktury położone głęboko, kość, łąkotki oraz chrząstkę stawową dokładniej obrazuje MRI, dlatego w wielu sytuacjach klinicznych to właśnie rezonans pozostaje badaniem rozstrzygającym. O wyborze metody diagnostycznej każdorazowo decyduje lekarz, uwzględniając obraz kliniczny i lokalizację zmian.</p><p>W ocenie powierzchownych zmian tkanek miękkich oraz guzków okołostawowych pomocne bywa <a href="/usg/tkanki-miekkie/">USG tkanek miękkich</a>. Gdy konieczna jest ocena unaczynienia, na przykład przekrwienia błony maziowej w aktywnym stanie zapalnym, wykorzystuje się dodatkowo <a href="/usg/doppler/">USG Doppler naczyń</a>.</p>',
  },
  {
    title: 'Jak przygotować się i jak przebiega USG stawów?',
    content:
      '<p>USG stawów nie wymaga specjalnego przygotowania. Zaleca się jedynie wygodny strój umożliwiający łatwe odsłonięcie badanej okolicy, na przykład kolana, barku lub nadgarstka.</p><p>Podczas badania na skórę nakłada się żel ułatwiający przewodzenie fal ultradźwiękowych, a następnie lekarz przesuwa głowicę liniową nad badaną okolicą. Ocena obejmuje zwykle część statyczną oraz dynamiczną, czyli obserwację struktur podczas ruchu stawu. Badanie jest bezbolesne i nie wykorzystuje promieniowania jonizującego, a jego opis sporządza lekarz wykonujący ultrasonografię.</p><p>Należy pamiętać, że USG narządu ruchu ocenia przede wszystkim tkanki miękkie i nie zastępuje konsultacji ortopedycznej ani pełnej diagnostyki obrazowej. Wynik badania interpretuje lekarz w odniesieniu do objawów. Ultrasonografię stawów wykonujemy w <a href="/usg/">pracowni USG we Wrocławiu</a> przy ulicy Opatowickiej 132, a termin można ustalić telefonicznie pod numerem +48 690 511 511.</p>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG stawów?',
    answer:
      'USG stawów wykrywa zmiany w obrębie tkanek miękkich narządu ruchu, takie jak wysięk w stawie, zapalenie błony maziowej, uszkodzenia i stany zapalne ścięgien (na przykład ścięgna Achillesa czy stożka rotatorów), zapalenie rozcięgna podeszwowego oraz torbiele okołostawowe, między innymi torbiel Bakera i ganglion. Badanie pomaga też ocenić zmiany pourazowe. Wynik interpretuje lekarz, a w razie potrzeby zaleca dalszą diagnostykę.',
  },
  {
    question: 'Jakie stawy można zbadać w USG narządu ruchu?',
    answer:
      'W USG narządu ruchu można zbadać większość stawów dostępnych dla głowicy ultrasonograficznej. Najczęściej ocenia się kolano, bark, nadgarstek, staw skokowy, łokieć, biodro oraz drobne stawy ręki i stopy. Zwykle podczas jednej wizyty ocenia się jeden staw wraz z otaczającymi go tkankami. Przesiewowe USG stawów biodrowych u niemowląt to osobne, dedykowane badanie poza zakresem tej oferty.',
  },
  {
    question: 'USG stawów czy rezonans magnetyczny - co wybrać?',
    answer:
      'USG stawów i rezonans magnetyczny to metody uzupełniające się. USG bardzo dobrze ocenia tkanki miękkie oraz ścięgna i umożliwia ocenę dynamiczną w ruchu, natomiast struktury głębokie, kość, łąkotki i chrząstkę dokładniej obrazuje rezonans magnetyczny. O wyborze metody decyduje lekarz na podstawie obrazu klinicznego i lokalizacji zmian.',
  },
  {
    question: 'Jak przygotować się do USG stawów?',
    answer:
      'Do USG stawów nie trzeba się specjalnie przygotowywać. Wystarczy zadbać o wygodny strój, który umożliwi łatwe odsłonięcie badanej okolicy, na przykład kolana, barku lub nadgarstka. Badanie jest bezbolesne, nie wykorzystuje promieniowania i polega na przesuwaniu głowicy po skórze pokrytej żelem.',
  },
  {
    question: 'Ile kosztuje USG stawów we Wrocławiu?',
    answer:
      'Cena USG stawów we Wrocławiu zależy od zakresu badania oraz liczby ocenianych stawów. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511, gdzie można też ustalić termin badania.',
  },
  {
    question: 'Czy na USG stawów potrzebne jest skierowanie?',
    answer:
      'Na USG stawów wykonywane prywatnie skierowanie nie jest wymagane. Badanie można umówić bezpośrednio, kontaktując się z Bas Clinic, choć warto zabrać ze sobą dotychczasową dokumentację medyczną i wyniki wcześniejszych badań, jeśli takie były wykonywane.',
  },
];

export default function UsgStawowPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG stawów (narządu ruchu) we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG stawów to badanie narządu ruchu obejmujące kolano, bark, nadgarstek i inne stawy wraz ze ścięgnami, więzadłami i tkankami miękkimi. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/stawy"
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
