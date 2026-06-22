import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';

export const metadata = generatePageMetadata({
  title: 'USG serca Wrocław - echokardiografia | Bas Clinic',
  description:
    'USG serca (echokardiografia) we Wrocławiu - ocena pracy serca, zastawek, jam i frakcji wyrzutowej. Bezbolesne badanie obrazowe w Bas Clinic. Umów termin.',
  path: '/usg/serca/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG serca' },
];

const RELATED = ['usg/pluc', 'usg/doppler', 'usg/doppler-tetnic-szyjnych'].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG serca (echokardiografia)?',
    content:
      '<p>USG serca, określane najczęściej jako echokardiografia lub echo serca, to badanie ultrasonograficzne obrazujące budowę i pracę serca w czasie rzeczywistym. Standardowo wykonuje się je metodą przezklatkową (TTE), przykładając głowicę do klatki piersiowej pacjenta.</p><p>Echokardiografia łączy obraz ultrasonograficzny z oceną dopplerowską przepływu krwi, co pozwala obserwować zarówno kurczące się ściany serca, jak i kierunek oraz prędkość przepływu przez zastawki. Badanie nie wykorzystuje promieniowania jonizującego, jest bezbolesne i może być w razie potrzeby powtarzane.</p><p>Ze względu na specjalistyczny charakter echo serca wykonuje i opisuje lekarz, zwykle kardiolog. Echokardiografia przezklatkowa to inna technika niż badanie przezprzełykowe (TEE) oraz niż dopplerowska ocena naczyń, którą obejmuje <a href="/usg/doppler/">USG Doppler naczyń</a>.</p>',
  },
  {
    title: 'Co ocenia echokardiografia?',
    content:
      '<p>Echokardiografia pozwala kompleksowo ocenić budowę i funkcję serca. Badanie dostarcza informacji zarówno o samym mięśniu sercowym, jak i o zastawkach oraz worku osierdziowym.</p><ul><li>czynność skurczową lewej komory, w tym frakcję wyrzutową (EF) opisującą wydolność serca jako pompy;</li><li>kurczliwość poszczególnych ścian serca oraz ewentualne zaburzenia jej regionalnego skurczu;</li><li>budowę i pracę zastawek serca, w tym ich niedomykalność lub zwężenie;</li><li>wymiary jam serca oraz grubość ścian, na przykład cechy przerostu mięśnia;</li><li>obecność płynu w worku osierdziowym oraz ocenę początkowego odcinka aorty.</li></ul><p>Wynik echokardiografii pomaga ocenić wydolność serca i charakter wady, jednak jego interpretację zawsze prowadzi lekarz w odniesieniu do obrazu klinicznego. Echo serca nie zastępuje innych badań kardiologicznych, lecz je uzupełnia.</p>',
  },
  {
    title: 'Wskazania do USG serca',
    content:
      '<p>Wskazaniem do USG serca są zwykle objawy mogące świadczyć o chorobie układu krążenia oraz potrzeba kontroli wcześniej rozpoznanych schorzeń. O skierowaniu na echokardiografię decyduje lekarz po zebraniu wywiadu i badaniu.</p><ul><li>szmer nad sercem wykryty podczas osłuchiwania;</li><li>duszność, obniżona tolerancja wysiłku lub obrzęki kończyn dolnych;</li><li>kołatania serca oraz zaburzenia rytmu;</li><li>nadciśnienie tętnicze i ocena jego wpływu na serce;</li><li>kontrola rozpoznanej wady zastawkowej, kardiomiopatii lub niewydolności serca;</li><li>diagnostyka po przebytych chorobach serca oraz kwalifikacja do dalszego leczenia.</li></ul><p>Należy podkreślić, że echokardiografia jest badaniem planowym. W razie nagłego, silnego bólu w klatce piersiowej lub innych objawów sugerujących zawał serca konieczny jest pilny kontakt z pogotowiem ratunkowym, a nie oczekiwanie na planowe echo serca.</p>',
  },
  {
    title: 'Echo serca a EKG i inne badania kardiologiczne',
    content:
      '<p>Echo serca i EKG to różne, uzupełniające się badania. Elektrokardiografia (EKG) rejestruje czynność elektryczną serca i jego rytm, natomiast echokardiografia obrazuje budowę serca oraz ocenia jego pracę i przepływ krwi przez zastawki.</p><p>USG serca nie zastępuje EKG, próby wysiłkowej, badania holterowskiego ani koronarografii. Echokardiografia może uwidocznić zaburzenia kurczliwości, które bywają następstwem niedokrwienia, jednak rozpoznanie zawału serca opiera się na obrazie klinicznym, zapisie EKG oraz wynikach badań krwi. O doborze i kolejności badań decyduje lekarz.</p><p>W diagnostyce układu krążenia echokardiografia bywa łączona z oceną naczyń. Przepływ w tętnicach dogłowowych obrazuje <a href="/usg/doppler-tetnic-szyjnych/">USG Doppler tętnic szyjnych</a>, a ocenę przepływu w innych naczyniach umożliwia <a href="/usg/doppler/">USG Doppler naczyń</a>.</p>',
  },
  {
    title: 'Jak przygotować się i jak przebiega USG serca?',
    content:
      '<p>USG serca nie wymaga specjalnego przygotowania. Nie trzeba być na czczo, a przyjmowane na stałe leki należy zażyć zgodnie z zaleceniami lekarza prowadzącego. Warto założyć wygodny strój umożliwiający odsłonięcie klatki piersiowej.</p><p>Podczas badania pacjent układa się zwykle na lewym boku, a na skórę klatki piersiowej nakładany jest żel. Lekarz przykłada głowicę w kilku miejscach, aby uzyskać obrazy serca z różnych przekrojów. Do zsynchronizowania obrazu z pracą serca często wykorzystuje się niewielkie elektrody EKG. Badanie trwa zwykle od kilkunastu do około trzydziestu minut i jest bezbolesne.</p><p>Echokardiografię traktuje się jako element diagnostyki kardiologicznej, dlatego nie zastępuje ona konsultacji kardiologicznej, a jej wynik interpretuje lekarz. USG serca wykonujemy w <a href="/usg/">pracowni USG we Wrocławiu</a> przy ulicy Opatowickiej 132, a termin można ustalić telefonicznie pod numerem +48 690 511 511.</p>',
  },
];

const FAQ = [
  {
    question: 'Co ocenia USG serca (echokardiografia)?',
    answer:
      'USG serca ocenia budowę i pracę serca. Badanie pozwala określić czynność skurczową lewej komory wraz z frakcją wyrzutową (EF), kurczliwość ścian serca, budowę i pracę zastawek (niedomykalność lub zwężenie), wymiary jam i grubość ścian oraz obecność płynu w worku osierdziowym. Echokardiografia obrazuje też przepływ krwi przez zastawki metodą Dopplera. Wynik interpretuje lekarz w odniesieniu do obrazu klinicznego.',
  },
  {
    question: 'Czym różni się echo serca od EKG?',
    answer:
      'Echo serca i EKG to różne, uzupełniające się badania. EKG rejestruje czynność elektryczną serca i jego rytm, a echokardiografia obrazuje budowę serca oraz ocenia jego pracę i przepływ krwi przez zastawki. USG serca nie zastępuje EKG, próby wysiłkowej ani koronarografii. O doborze badań decyduje lekarz na podstawie objawów.',
  },
  {
    question: 'Czy USG serca wykrywa zawał?',
    answer:
      'Echokardiografia może uwidocznić zaburzenia kurczliwości ścian serca, które bywają następstwem niedokrwienia, jednak rozpoznanie zawału serca opiera się na obrazie klinicznym, zapisie EKG i wynikach badań krwi. Echo serca jest badaniem planowym. W razie nagłego, silnego bólu w klatce piersiowej należy pilnie wezwać pogotowie ratunkowe, a nie oczekiwać na planowe badanie.',
  },
  {
    question: 'Jak przygotować się do USG serca?',
    answer:
      'USG serca nie wymaga specjalnego przygotowania. Nie trzeba być na czczo, a stałe leki należy przyjąć zgodnie z zaleceniami lekarza. Warto założyć wygodny strój umożliwiający odsłonięcie klatki piersiowej. Podczas badania pacjent układa się zwykle na lewym boku, a lekarz przykłada głowicę pokrytą żelem w kilku miejscach klatki piersiowej.',
  },
  {
    question: 'Czy echokardiografia jest bezpieczna i bolesna?',
    answer:
      'Echokardiografia przezklatkowa jest bezpieczna i bezbolesna. Wykorzystuje fale ultradźwiękowe, a nie promieniowanie jonizujące, dlatego można ją powtarzać oraz wykonywać u kobiet w ciąży i u dzieci. Badanie polega na przykładaniu głowicy do skóry klatki piersiowej pokrytej żelem i nie wymaga nakłucia ani znieczulenia.',
  },
  {
    question: 'Ile kosztuje USG serca we Wrocławiu?',
    answer:
      'Cena USG serca (echokardiografii) we Wrocławiu zależy od zakresu badania. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511, gdzie można też ustalić dogodny termin badania.',
  },
];

export default function UsgSercaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG serca (echokardiografia) we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG serca, czyli echokardiografia, to badanie obrazujące budowę i pracę serca, zastawki oraz frakcję wyrzutową. Wykonujemy je w Bas Clinic we Wrocławiu, bezboleśnie i bez promieniowania."
      slug="usg/serca"
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
