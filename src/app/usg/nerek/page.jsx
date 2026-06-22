import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG nerek Wrocław - badanie | Bas Clinic',
  description:
    'USG nerek we Wrocławiu w Bas Clinic. Bezbolesne, nieinwazyjne badanie ultrasonograficzne nerek i dróg moczowych. Sprawdź wskazania i umów termin.',
  path: '/usg/nerek/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG nerek' },
];

const RELATED = ['usg/jamy-brzusznej', 'usg/prostaty', 'usg/doppler'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG nerek?',
    content:
      '<p>USG nerek to badanie ultrasonograficzne, które pozwala ocenić budowę nerek oraz górnych dróg moczowych przy użyciu fal ultradźwiękowych. Ultrasonografia nerek jest metodą nieinwazyjną i bezbolesną, a obraz powstaje w czasie rzeczywistym, bez użycia promieniowania jonizującego. Badanie USG nerek bywa wykonywane łącznie z oceną pęcherza moczowego (jako USG nerek i pęcherza moczowego).</p><p>Ultrasonograficzne badanie nerek obejmuje ocenę wielkości, położenia oraz budowy obu nerek, w tym miąższu i układu kielichowo-miedniczkowego. W ramach badania można też ocenić pęcherz moczowy oraz - w zakresie możliwym do uwidocznienia - okolicę nadnerczy. Stopień widoczności poszczególnych struktur zależy od warunków anatomicznych i przygotowania pacjenta.</p>',
  },
  {
    title: 'Co wykrywa USG nerek?',
    content:
      '<p>USG nerek pozwala uwidocznić wiele odchyleń w obrębie nerek i dróg moczowych, takich jak kamica nerkowa, poszerzenie układu kielichowo-miedniczkowego czy torbiele. Diagnostyka ultrasonograficzna nerek bywa pierwszym krokiem, gdy pojawiają się dolegliwości ze strony układu moczowego. Wynik USG nerek interpretuje lekarz w odniesieniu do objawów i pozostałych badań.</p><ul><li><strong>Kamica nerkowa</strong> - obecność złogów w nerkach lub w drogach moczowych.</li><li><strong>Wodonercze i zastój moczu</strong> - poszerzenie układu kielichowo-miedniczkowego mogące świadczyć o utrudnionym odpływie moczu.</li><li><strong>Torbiele nerek</strong> - zmiany płynowe, których charakter ocenia się w obrazie ultrasonograficznym.</li><li><strong>Zmiany ogniskowe</strong> - obszary o nieprawidłowej strukturze, które mogą wskazywać na konieczność dalszej diagnostyki.</li><li><strong>Ocena po infekcjach dróg moczowych</strong> - kontrola nerek po przebytych lub nawracających zakażeniach.</li><li><strong>Zaleganie moczu po mikcji</strong> - ocena ilości moczu pozostającego w pęcherzu po jego opróżnieniu.</li></ul><p>Badanie ultrasonograficzne nie pozwala jednoznacznie rozpoznać charakteru wykrytych zmian. Stwierdzenie nieprawidłowości w USG nerek może wskazywać na konieczność poszerzenia diagnostyki o dodatkowe badania zlecone przez lekarza.</p>',
  },
  {
    title: 'Wskazania do USG nerek',
    content:
      '<p>Wskazaniem do USG nerek są przede wszystkim dolegliwości oraz nieprawidłowe wyniki badań sugerujące problem ze strony układu moczowego. Ocenę nerek w USG zaleca się zarówno przy objawach ostrych, jak i w kontroli rozpoznanych wcześniej zmian. O zasadności badania i jego zakresie decyduje lekarz.</p><ul><li>Bóle okolicy lędźwiowej lub podbrzusza o niejasnej przyczynie.</li><li>Krwiomocz lub krwinkomocz stwierdzony w badaniu moczu.</li><li>Nawracające zakażenia układu moczowego.</li><li>Nadciśnienie tętnicze, zwłaszcza trudne do kontroli lub wykryte u młodych osób.</li><li>Nieprawidłowe wyniki badań laboratoryjnych, na przykład podwyższona kreatynina lub odchylenia w badaniu ogólnym moczu.</li><li>Kontrola znanej kamicy nerkowej, torbieli lub innych wcześniej opisanych zmian.</li></ul>',
  },
  {
    title: 'Jak przygotować się do USG nerek?',
    content:
      '<p>Przygotowanie do USG nerek zależy od zakresu badania, a w wielu przypadkach wymaga wypełnionego pęcherza moczowego. Gdy oceniany jest pęcherz moczowy lub zaleganie moczu po mikcji, zaleca się wypić około 0,5-1 l wody mniej więcej 1 godzinę przed badaniem i nie oddawać moczu, aby pęcherz był odpowiednio wypełniony. Wypełniony pęcherz poprawia widoczność jego ścian oraz dolnych dróg moczowych.</p><p>Pozostanie na czczo nie jest bezwzględnie wymagane do USG nerek. Ograniczenie produktów wzdymających w dniu poprzedzającym badanie zmniejsza ilość gazów w jelitach i poprawia jakość obrazu, szczególnie u osób z tendencją do wzdęć. W razie wątpliwości co do przygotowania warto skontaktować się z rejestracją pod numerem +48 690 511 511. Informacje o zakresie i koszcie badania zawiera także <a href="/cennik/">cennik</a>.</p>',
  },
  {
    title: 'USG nerek a USG jamy brzusznej',
    content:
      '<p>USG nerek różni się od USG jamy brzusznej przede wszystkim zakresem oceny. Nerki są wprawdzie widoczne podczas <a href="/usg/jamy-brzusznej/">USG jamy brzusznej</a>, jednak badanie to obejmuje wiele narządów i stanowi ogólny przegląd brzucha. USG nerek jest badaniem celowanym, skupionym wyłącznie na nerkach i drogach moczowych, często z dodatkową oceną pęcherza moczowego.</p><p>Wybór badania zależy od tego, co ma być przedmiotem oceny. Gdy podejrzewa się problem ograniczony do układu moczowego, bardziej szczegółowa jest ultrasonografia nerek. W wybranych sytuacjach lekarz może zalecić ocenę przepływu krwi w tętnicach nerkowych - w tym celu wykonuje się <a href="/usg/doppler/">USG Doppler</a>, które uzupełnia obraz uzyskany w klasycznym badaniu nerek.</p>',
  },
  {
    title: 'Jak przebiega USG nerek i kiedy wynik?',
    content:
      '<p>USG nerek przebiega w pozycji leżącej, a lekarz przesuwa głowicę z żelem po skórze okolicy brzucha i pleców, oceniając nerki z różnych projekcji. Badanie jest bezbolesne, trwa zwykle kilkanaście minut i nie wiąże się z promieniowaniem ani z koniecznością nakłucia. W trakcie badania pacjent może być proszony o zmianę pozycji lub o wstrzymanie oddechu, co poprawia widoczność struktur.</p><p>Wynik USG nerek pacjent otrzymuje w formie opisu sporządzonego przez lekarza wykonującego badanie, zwykle bezpośrednio po jego zakończeniu. Badanie ultrasonograficzne nie zastępuje konsultacji lekarskiej, a opis obrazu wymaga interpretacji w kontekście objawów i pozostałych wyników. Dalsze postępowanie ustala lekarz prowadzący. USG nerek wykonuje <a href="/usg/">pracownia USG Bas Clinic we Wrocławiu</a> przy ul. Opatowickiej 132.</p>',
  },
];

const FAQ = [
  {
    question: 'Czy do USG nerek trzeba być na czczo?',
    answer:
      'Do USG nerek nie trzeba być bezwzględnie na czczo. Zaleca się jednak ograniczenie produktów wzdymających w dniu poprzedzającym badanie, ponieważ mniejsza ilość gazów w jelitach poprawia jakość obrazu nerek. Najważniejszym elementem przygotowania jest odpowiednie nawodnienie i wypełnienie pęcherza, gdy oceniany jest także pęcherz moczowy.',
  },
  {
    question: 'Czy do USG nerek potrzebny jest pełny pęcherz?',
    answer:
      'Do USG nerek pełny pęcherz jest potrzebny wtedy, gdy oceniany jest pęcherz moczowy lub zaleganie moczu po mikcji. W takim przypadku zaleca się wypić około 0,5-1 l wody mniej więcej 1 godzinę przed badaniem i nie oddawać moczu. Wypełniony pęcherz pozwala lepiej ocenić jego ściany oraz dolne drogi moczowe.',
  },
  {
    question: 'Co wykrywa USG nerek?',
    answer:
      'USG nerek pozwala uwidocznić między innymi kamicę nerkową, poszerzenie układu kielichowo-miedniczkowego i zastój moczu, torbiele oraz zmiany ogniskowe w nerkach. Umożliwia także ocenę nerek po zakażeniach dróg moczowych i pomiar zalegania moczu po mikcji. Badanie nie pozwala jednoznacznie rozpoznać charakteru zmian, a stwierdzone nieprawidłowości mogą wskazywać na konieczność dalszej diagnostyki ustalonej przez lekarza.',
  },
  {
    question: 'Ile kosztuje USG nerek we Wrocławiu?',
    answer:
      'Cena USG nerek we Wrocławiu zależy od zakresu badania, na przykład od tego, czy obejmuje ono również ocenę pęcherza moczowego. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511. Tam można też potwierdzić koszt badania przed wizytą i umówić dogodny termin.',
  },
  {
    question: 'Czy na USG nerek potrzebne jest skierowanie?',
    answer:
      'Na USG nerek skierowanie nie jest wymagane. Badanie wykonywane jest prywatnie, dlatego można je umówić bez skierowania od lekarza. Wynik badania w formie opisu warto następnie omówić z lekarzem prowadzącym, który zaplanuje dalsze postępowanie.',
  },
  {
    question: 'Czym różni się USG nerek od USG jamy brzusznej?',
    answer:
      'USG nerek różni się od USG jamy brzusznej zakresem oceny. USG jamy brzusznej jest ogólnym przeglądem wielu narządów brzucha, w którym nerki ocenia się jako jeden z elementów. USG nerek to badanie celowane, skupione na nerkach i drogach moczowych, często z dodatkową oceną pęcherza moczowego, dlatego dostarcza bardziej szczegółowych informacji o układzie moczowym.',
  },
];

export default function UsgNerekPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG nerek we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG nerek to bezbolesne badanie ultrasonograficzne oceniające budowę nerek oraz dróg moczowych. Pomaga wykryć kamicę, torbiele i zastój moczu. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/nerek"
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
