import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG węzłów chłonnych Wrocław | Bas Clinic',
  description:
    'USG węzłów chłonnych we Wrocławiu (szyja, pachy, pachwiny) w Bas Clinic. Bezpieczne, bezbolesne badanie oceniające powiększone węzły. Umów wizytę prywatnie.',
  path: '/usg/wezlow-chlonnych/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG węzłów chłonnych' },
];

const RELATED = ['usg/szyi', 'usg/piersi', 'usg/tarczycy', 'usg/slinianek'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG węzłów chłonnych?',
    content:
      '<p>USG węzłów chłonnych to ultrasonografia, czyli badanie obrazowe wykorzystujące fale dźwiękowe o wysokiej częstotliwości do oceny węzłów chłonnych w wybranych okolicach ciała. Ultrasonografia węzłów chłonnych pozwala uwidocznić wielkość, kształt, granice oraz wewnętrzną budowę węzła bez nakłuwania skóry i bez użycia promieniowania.</p>' +
      '<p>Badanie USG węzłów chłonnych najczęściej obejmuje trzy główne grupy: węzły chłonne szyjne, węzły chłonne pachowe oraz węzły chłonne pachwinowe. Zakres badania ustala się w zależności od miejsca, w którym pacjent wyczuwa zmianę lub które wskazuje lekarz kierujący.</p>' +
      '<p>Ocenie podlega między innymi wielkość węzła, jego owalny lub kulisty kształt, ostrość granic, obecność tak zwanej wnęki tłuszczowej oraz typ unaczynienia w opcji Doppler. Połączenie tych cech tworzy obraz węzłów chłonnych, który opisuje lekarz wykonujący badanie.</p>',
  },
  {
    title: 'Co ocenia USG węzłów chłonnych?',
    content:
      '<p>USG węzłów chłonnych ocenia zespół cech morfologicznych pojedynczych węzłów oraz ich rozmieszczenie w danej okolicy. Kluczowe znaczenie ma obecność i zachowanie tak zwanej wnęki tłuszczowej, ponieważ jej zachowanie częściej towarzyszy zmianom o charakterze odczynowym, na przykład w przebiegu infekcji.</p>' +
      '<p>Do cech bardziej niepokojących, wymagających dalszej oceny, zalicza się zatarcie lub zanik wnęki tłuszczowej, kulisty (zaokrąglony) zamiast owalnego kształt węzła, nieostre granice oraz nieprawidłowy, obwodowy typ unaczynienia zamiast prawidłowego unaczynienia wnękowego. Lekarz analizuje te elementy łącznie, a nie pojedynczo.</p>' +
      '<p><strong>Ważne zastrzeżenie:</strong> USG węzłów chłonnych nie rozpoznaje nowotworu ani chłoniaka i nie określa typu zmiany. Badanie pozwala jedynie ocenić cechy węzłów, które mogą wskazywać na konieczność dalszej diagnostyki, na przykład biopsji. Ostateczna interpretacja należy do lekarza.</p>',
  },
  {
    title: 'Wskazania do USG węzłów chłonnych',
    content:
      '<p>Wskazaniem do USG węzłów chłonnych jest najczęściej wyczuwalny, powiększony węzeł chłonny lub utrzymujące się powiększenie węzłów w danej okolicy. Badanie wykonuje się również wtedy, gdy lekarz chce ocenić strukturę i unaczynienie wyczuwalnej zmiany.</p>' +
      '<ul>' +
      '<li>wyczuwalny powiększony węzeł na szyi, w pasze lub pachwinie,</li>' +
      '<li>limfadenopatia (powiększenie węzłów chłonnych) utrzymująca się orientacyjnie powyżej 2-4 tygodni,</li>' +
      '<li>kontrola wcześniej stwierdzonych, znanych węzłów chłonnych,</li>' +
      '<li>ocena węzłów w przebiegu infekcji i stanów zapalnych,</li>' +
      '<li>monitorowanie zmian w czasie zaleconej obserwacji.</li>' +
      '</ul>' +
      '<p>Decyzję o zakresie i terminie badania warto skonsultować z lekarzem, zwłaszcza gdy powiększone węzły chłonne utrzymują się przez dłuższy czas lub towarzyszą im inne objawy.</p>',
  },
  {
    title: 'Jak przygotować się do USG węzłów chłonnych?',
    content:
      '<p>Do USG węzłów chłonnych nie jest wymagane żadne specjalne przygotowanie. Pacjent nie musi być na czczo, nie trzeba także odstawiać przyjmowanych leków ani zmieniać codziennego trybu funkcjonowania.</p>' +
      '<p>Przed badaniem warto dokładnie wskazać lekarzowi miejsce, w którym wyczuwane jest powiększenie lub zmiana, ponieważ ułatwia to celowaną ocenę okolicy. Pomocne jest również zabranie wcześniejszych wyników USG oraz dokumentacji medycznej, jeśli badanie jest powtarzane lub ma charakter kontrolny.</p>' +
      '<p>Na badanie zaleca się ubrać tak, aby można było łatwo odsłonić ocenianą okolicę, czyli szyję, pachę lub pachwinę.</p>',
  },
  {
    title: 'USG węzłów chłonnych a badania okolic',
    content:
      '<p>USG węzłów chłonnych bywa łączone z oceną sąsiednich struktur, ponieważ obraz węzłów warto interpretować w kontekście otaczających narządów. Zakres badania dobiera się indywidualnie, w zależności od lokalizacji powiększonych węzłów.</p>' +
      '<p>Przy ocenie węzłów chłonnych szyjnych przydatne bywa szersze, parasolowe <a href="/usg/szyi/">USG szyi</a>, które obejmuje tkanki miękkie tej okolicy. W kontekście głowy i szyi celowane spojrzenie zapewnia natomiast <a href="/usg/tarczycy/">USG tarczycy</a>, oceniające sąsiadujący gruczoł tarczowy.</p>' +
      '<p>W przypadku węzłów chłonnych pachowych ocenę uzupełnia często <a href="/usg/piersi/">USG piersi</a>, ponieważ węzły pachowe stanowią naturalny obszar spływu chłonki z gruczołu piersiowego. O właściwym zestawie badań decyduje lekarz na podstawie zgłaszanych objawów.</p>',
  },
  {
    title: 'Jak przebiega USG węzłów chłonnych i kiedy wynik?',
    content:
      '<p>USG węzłów chłonnych przebiega szybko, jest bezbolesne i nieinwazyjne. Badanie wykonuje się głowicą liniową o wysokiej rozdzielczości, którą po nałożeniu żelu lekarz przesuwa po skórze ocenianej okolicy, obrazując kolejne grupy węzłów.</p>' +
      '<p>W trakcie badania wykorzystuje się również opcję kolorowego Dopplera do oceny unaczynienia węzłów. Ultrasonografia nie wykorzystuje promieniowania jonizującego, dlatego badanie można w razie potrzeby powtarzać, na przykład w celu monitorowania zmian.</p>' +
      '<p>Wynik w postaci opisu sporządza lekarz wykonujący badanie. USG węzłów chłonnych nie zastępuje konsultacji lekarskiej, a sam obraz wymaga zestawienia z objawami i całością dokumentacji, dlatego interpretację zawsze prowadzi lekarz. Badanie jest częścią oferty diagnostycznej, którą udostępnia <a href="/usg/">pracownia USG we Wrocławiu</a> Bas Clinic przy ul. Opatowickiej 132. Zakres i koszt badania można sprawdzić w zakładce <a href="/cennik/">cennik</a> lub pod numerem +48 690 511 511.</p>',
  },
];

const FAQ = [
  {
    question: 'Co ocenia USG węzłów chłonnych?',
    answer:
      'USG węzłów chłonnych ocenia wielkość, kształt, granice oraz wewnętrzną budowę węzła, w tym obecność tak zwanej wnęki tłuszczowej i typ unaczynienia w opcji Doppler. Badanie pozwala odróżnić cechy bardziej typowe dla zmian odczynowych od cech wymagających dalszej oceny. Pełną interpretację obrazu zawsze przeprowadza lekarz.',
  },
  {
    question: 'Czy USG węzłów chłonnych wykrywa nowotwór lub chłoniaka?',
    answer:
      'USG węzłów chłonnych nie rozpoznaje nowotworu ani chłoniaka i nie określa typu zmiany. Badanie pozwala jedynie ocenić cechy węzłów, takie jak zatarcie wnęki tłuszczowej, kulisty kształt czy nieprawidłowe unaczynienie, które mogą wskazywać na konieczność dalszej diagnostyki, na przykład biopsji. Ostateczna ocena należy do lekarza.',
  },
  {
    question: 'Kiedy powiększone węzły chłonne wymagają USG?',
    answer:
      'Powiększone węzły chłonne warto ocenić w USG, gdy są wyraźnie wyczuwalne lub gdy ich powiększenie utrzymuje się orientacyjnie powyżej 2-4 tygodni. Wskazaniem bywa również kontrola znanych wcześniej węzłów oraz ocena w przebiegu infekcji. O potrzebie i terminie badania najlepiej zdecydować wspólnie z lekarzem.',
  },
  {
    question: 'Ile kosztuje USG węzłów chłonnych we Wrocławiu?',
    answer:
      'Cena USG węzłów chłonnych we Wrocławiu zależy od zakresu badania, czyli liczby i lokalizacji ocenianych okolic. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem 690 511 511, gdzie można też dopytać o szczegóły badania.',
  },
  {
    question: 'Czy na USG węzłów chłonnych potrzebne jest skierowanie?',
    answer:
      'Na USG węzłów chłonnych w Bas Clinic skierowanie nie jest wymagane, ponieważ badanie wykonywane jest prywatnie. Wizytę można umówić bezpośrednio, a w razie wątpliwości dotyczących zakresu badania warto skonsultować się z lekarzem.',
  },
  {
    question: 'Czy do USG węzłów chłonnych trzeba się przygotować?',
    answer:
      'Do USG węzłów chłonnych nie trzeba się specjalnie przygotowywać i nie trzeba być na czczo. Warto jedynie wskazać lekarzowi miejsce wyczuwanego powiększenia oraz zabrać wcześniejsze wyniki, jeśli badanie jest kontrolne. Pomocne jest też ubranie umożliwiające łatwe odsłonięcie szyi, pachy lub pachwiny.',
  },
];

export default function UsgWezlowChlonnychPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG węzłów chłonnych we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG węzłów chłonnych to bezbolesne badanie oceniające węzły szyi, pach i pachwin - ich wielkość, strukturę i unaczynienie. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/wezlow-chlonnych"
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
