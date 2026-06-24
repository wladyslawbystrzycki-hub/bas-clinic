import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG węzłów chłonnych Wrocław - szyja, pachy',
  description:
    'USG węzłów chłonnych we Wrocławiu - ocena powiększonych węzłów szyi, pach i pachwin: kształt, wnęka, unaczynienie Doppler. Badanie prywatne, bez skierowania.',
  path: '/usg/wezly-chlonne/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG węzłów chłonnych' },
];

const RELATED = ['usg/szyja', 'usg/piersi', 'usg/tarczyca', 'usg/slinianki'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG węzłów chłonnych?',
    content:
      '<p><strong>USG węzłów chłonnych</strong> to badanie ultrasonograficzne, w którym fale dźwiękowe o wysokiej częstotliwości obrazują węzły chłonne w wybranej okolicy ciała. Pozwala ocenić wielkość, kształt, granice i wewnętrzną budowę węzła bez nakłuwania skóry i bez promieniowania jonizującego.</p>' +
      '<p>Badanie najczęściej obejmuje trzy grupy węzłów: <strong>szyjne</strong>, <strong>pachowe</strong> i <strong>pachwinowe</strong>. Zakres ustala się indywidualnie, zależnie od miejsca, w którym pacjent wyczuwa zmianę lub które wskazuje lekarz kierujący.</p>' +
      '<p>Ultrasonografia uwidacznia korę węzła, jego <strong>wnękę tłuszczową</strong> (centralną, jaśniejszą część) oraz typ unaczynienia w opcji kolorowego Dopplera. Te elementy razem tworzą obraz, który lekarz zestawia z badaniem palpacyjnym i objawami zgłaszanymi przez pacjenta.</p>',
  },
  {
    title: 'Co ocenia USG węzłów chłonnych?',
    content:
      '<p>USG węzłów chłonnych ocenia zestaw cech morfologicznych pojedynczego węzła oraz rozmieszczenie węzłów w danej okolicy. Lekarz analizuje wielkość, kształt, ostrość granic, echogeniczność i wygląd wnęki tłuszczowej, ponieważ jej zachowanie częściej towarzyszy zmianom odczynowym, na przykład w przebiegu infekcji.</p>' +
      '<p>Lekarz ocenia również <strong>unaczynienie</strong> węzła w opcji kolorowego Dopplera. Prawidłowe, odczynowe węzły mają zwykle unaczynienie wnękowe, prowadzone od wnęki ku obwodowi. Według przeglądu Ahui i Ying około 90 procent prawidłowych węzłów o wymiarze powyżej 5 milimetrów wykazuje ten typ przepływu.</p>' +
      '<p>Lekarz interpretuje wszystkie cechy łącznie, a nie pojedynczo. Sam rozmiar węzła nie przesądza o niczym, bo węzły bywają powiększone w zwykłej infekcji. O znaczeniu obrazu decyduje całość cech w zestawieniu z sytuacją kliniczną pacjenta.</p>',
  },
  {
    title: 'Węzeł odczynowy a węzeł podejrzany w USG',
    content:
      '<p>W opisie USG rozróżnia się cechy, które częściej towarzyszą węzłom odczynowym, oraz cechy wymagające dalszej diagnostyki. Najważniejsze z nich to kształt węzła, stan wnęki tłuszczowej i typ unaczynienia.</p>' +
      '<p>Kształt opisuje się proporcją osi długiej do krótkiej, znaną jako <strong>indeks Solbiatiego</strong> (stosunek L/S). Węzeł owalny i wydłużony, o wartości powyżej około 2, jest zwykle odczynowy. Węzeł zaokrąglony, o wartości poniżej 2, bywa opisywany jako bardziej podejrzany. Poniższe zestawienie porządkuje najczęściej oceniane cechy.</p>' +
      '<table>' +
      '<tr><th>Cecha w USG</th><th>Częściej węzeł odczynowy</th><th>Wymaga dalszej oceny</th></tr>' +
      '<tr><td>Kształt (indeks L/S)</td><td>owalny, wydłużony (powyżej ~2)</td><td>kulisty, zaokrąglony (poniżej ~2)</td></tr>' +
      '<tr><td>Wnęka tłuszczowa</td><td>zachowana, dobrze widoczna</td><td>zatarta lub nieobecna</td></tr>' +
      '<tr><td>Granice</td><td>gładkie, wyraźne</td><td>nieostre, cechy naciekania</td></tr>' +
      '<tr><td>Unaczynienie (Doppler)</td><td>wnękowe lub brak przepływu</td><td>obwodowe lub mieszane</td></tr>' +
      '<tr><td>Struktura wewnętrzna</td><td>jednorodna</td><td>ogniska martwicy, mikrozwapnienia</td></tr>' +
      '<tr><td>Układ węzłów</td><td>pojedyncze, przesuwalne</td><td>zlewające się w pakiety</td></tr>' +
      '</table>' +
      '<p><strong>Ważne zastrzeżenie:</strong> żadna z tych cech nie rozpoznaje samodzielnie nowotworu. Opisują one prawdopodobieństwo, a nie diagnozę. Klasyczne kryteria sonograficzne, opracowane między innymi przez zespoły Vassallo oraz Ahui i Ying, pomagają lekarzowi zdecydować, czy potrzebna jest dalsza diagnostyka.</p>',
  },
  {
    title: 'Wskazania: kiedy zrobić USG węzłów chłonnych?',
    content:
      '<p>Najczęstszym wskazaniem do USG węzłów chłonnych jest wyczuwalny, powiększony węzeł lub utrzymujące się powiększenie węzłów w jednej okolicy. Badanie wykonuje się także po to, by ocenić strukturę i unaczynienie zmiany wyczuwanej pod palcami.</p>' +
      '<p>W praktyce klinicznej powiększenie węzłów (limfadenopatia) utrzymujące się ponad 3-4 tygodnie jest sygnałem do pogłębionej oceny. Wskazówki Amerykańskiej Akademii Lekarzy Rodzinnych wymieniają wśród sygnałów ostrzegawczych wiek powyżej 40 lat, lokalizację nadobojczykową oraz objawy ogólne, takie jak gorączka, nocne poty i niewyjaśniony spadek masy ciała.</p>' +
      '<ul>' +
      '<li>wyczuwalny powiększony węzeł na szyi, w pasze lub pachwinie,</li>' +
      '<li>limfadenopatia utrzymująca się orientacyjnie ponad 3-4 tygodnie,</li>' +
      '<li>kontrola znanych wcześniej węzłów chłonnych,</li>' +
      '<li>ocena węzłów w przebiegu infekcji i stanów zapalnych,</li>' +
      '<li>monitorowanie zmian w czasie zaleconej obserwacji.</li>' +
      '</ul>' +
      '<p>Pomocna bywa obserwacja samego pacjenta. Węzły miękkie, bolesne i przesuwalne częściej towarzyszą infekcji, natomiast węzły twarde, niebolesne i zbite w pakiety wymagają większej czujności. Ostateczną decyzję o zakresie badania podejmuje lekarz.</p>',
  },
  {
    title: 'Jak przebiega badanie i jak się przygotować?',
    content:
      '<p>USG węzłów chłonnych jest szybkie, bezbolesne i nieinwazyjne, a do badania nie trzeba się specjalnie przygotowywać. Pacjent nie musi być na czczo ani odstawiać przyjmowanych leków.</p>' +
      '<p>Lekarz nakłada na skórę żel i przesuwa <strong>głowicę liniową</strong> o wysokiej rozdzielczości po ocenianej okolicy, obrazując kolejne grupy węzłów. Dodatkowo włącza kolorowy Doppler, aby ocenić unaczynienie. Badanie jednej okolicy trwa zwykle kilkanaście minut.</p>' +
      '<p>Przed wizytą warto wskazać lekarzowi dokładne miejsce wyczuwanego powiększenia oraz zabrać wcześniejsze wyniki, jeśli badanie ma charakter kontrolny. Pomocne jest ubranie, które pozwala łatwo odsłonić szyję, pachę lub pachwinę. Ponieważ ultrasonografia nie korzysta z promieniowania jonizującego, badanie można w razie potrzeby powtarzać.</p>',
  },
  {
    title: 'USG węzłów chłonnych a inne badania',
    content:
      '<p>Obraz węzłów chłonnych warto interpretować w kontekście sąsiednich struktur, dlatego badanie bywa łączone z oceną pobliskich okolic. Zakres dobiera się indywidualnie, zależnie od lokalizacji powiększonych węzłów.</p>' +
      '<p>Przy węzłach szyjnych szersze spojrzenie daje <a href="/usg/szyja/">badanie USG szyi</a> obejmujące tkanki miękkie tej okolicy, a sąsiadujący gruczoł ocenia <a href="/usg/tarczyca/">USG tarczycy</a>. Przy węzłach pachowych ocenę uzupełnia <a href="/usg/piersi/">USG piersi</a>, ponieważ pachy są naturalnym obszarem spływu chłonki z gruczołu piersiowego.</p>' +
      '<p>USG bywa pierwszym badaniem obrazowym przy zlokalizowanym powiększeniu węzłów, ale nie jest badaniem ostatecznym. Gdy cechy węzła budzą wątpliwości, lekarz może zlecić <strong>biopsję</strong>, najczęściej biopsję aspiracyjną cienkoigłową (BAC), albo dalsze obrazowanie, jak tomografia komputerowa lub rezonans magnetyczny. To te badania, a nie samo USG, pozwalają ustalić charakter zmiany.</p>',
  },
  {
    title: 'Ograniczenia i bezpieczeństwo USG węzłów chłonnych',
    content:
      '<p>USG węzłów chłonnych jest badaniem bezpiecznym, które można powtarzać, ponieważ nie wykorzystuje promieniowania jonizującego. Nie wiążą się z nim szczególne przeciwwskazania, a sama procedura nie obciąża organizmu.</p>' +
      '<p>Najważniejsze ograniczenie dotyczy interpretacji. <strong>USG węzłów chłonnych nie rozpoznaje nowotworu ani chłoniaka i nie określa typu zmiany.</strong> Badanie opisuje wyłącznie cechy obrazu, które mogą wskazywać na potrzebę dalszej diagnostyki. Rozpoznanie histopatologiczne stawia się na podstawie biopsji, a nie obrazu ultrasonograficznego.</p>' +
      '<p>Wynik USG to opis sporządzony przez lekarza wykonującego badanie. Nie zastępuje on konsultacji, ponieważ obraz węzłów nabiera znaczenia dopiero w zestawieniu z objawami i całością dokumentacji medycznej. Interpretację i decyzję o dalszym postępowaniu zawsze prowadzi lekarz.</p>',
  },
  {
    title: 'Cena i wizyta we Wrocławiu',
    content:
      '<p>USG węzłów chłonnych w Bas Clinic wykonujemy prywatnie, bez skierowania, w pracowni ultrasonografii we Wrocławiu. Termin badania umówisz telefonicznie lub przez formularz rejestracji online.</p>' +
      `<p>Cena zależy od zakresu badania, czyli liczby i lokalizacji ocenianych okolic. Aktualne stawki znajdziesz w zakładce <a href="/cennik/">cennik</a>, a szczegóły badania doprecyzujesz pod numerem ${CLINIC.phone}. Pracownia działa przy ${CLINIC.address.street} we Wrocławiu, a wizytę zarezerwujesz przez <a href="/rejestracja/">rejestrację online</a>. Badanie prowadzi <a href="/usg/">pracownia USG</a> Bas Clinic.</p>` +
      '<p>Treść ma charakter informacyjny i nie zastępuje konsultacji lekarskiej ani indywidualnej oceny. O zakresie badania, interpretacji wyniku i dalszym postępowaniu decyduje lekarz po zapoznaniu się z sytuacją pacjenta.</p>',
  },
  {
    title: 'Źródła',
    content:
      '<ol>' +
      '<li>Ahuja AT, Ying M, Ho SY, et al. Ultrasound of malignant cervical lymph nodes. Cancer Imaging. 2008;8(1):48-56. (PMID 18390388)</li>' +
      '<li>Ahuja A, Ying M. Sonography of neck lymph nodes. Part II: Abnormal lymph nodes. Clin Radiol. 2003;58(5):359-366.</li>' +
      '<li>Vassallo P, Wernecke K, Roos N, Peters PE. Differentiation of benign from malignant superficial lymphadenopathy: the role of high-resolution US. Radiology. 1992;183(1):215-220. (PMID 1549675)</li>' +
      '<li>Gaddey HL, Riegel AM. Unexplained Lymphadenopathy: Evaluation and Differential Diagnosis. Am Fam Physician. 2016;94(11):896-903. (PMID 27929264)</li>' +
      '</ol>',
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
      'Powiększone węzły chłonne warto ocenić w USG, gdy są wyraźnie wyczuwalne lub gdy ich powiększenie utrzymuje się orientacyjnie ponad 3-4 tygodnie. Wskazaniem bywa też kontrola znanych wcześniej węzłów oraz ocena w przebiegu infekcji. O potrzebie i terminie badania najlepiej zdecydować wspólnie z lekarzem.',
  },
  {
    question: 'Czy na USG węzłów chłonnych potrzebne jest skierowanie?',
    answer:
      'Na USG węzłów chłonnych w Bas Clinic skierowanie nie jest wymagane, ponieważ badanie wykonujemy prywatnie. Wizytę można umówić bezpośrednio, a w razie wątpliwości dotyczących zakresu badania warto skonsultować się z lekarzem.',
  },
  {
    question: 'Ile kosztuje USG węzłów chłonnych we Wrocławiu?',
    answer:
      `Cena USG węzłów chłonnych we Wrocławiu zależy od zakresu badania, czyli liczby i lokalizacji ocenianych okolic. Aktualne stawki znajdziesz w zakładce Cennik na stronie Bas Clinic oraz pod numerem ${CLINIC.phone}, gdzie doprecyzujesz też szczegóły badania.`,
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG węzłów chłonnych?',
    answer:
      `USG węzłów chłonnych we Wrocławiu wykonasz w pracowni ultrasonografii Bas Clinic przy ${CLINIC.address.street}. Badanie obejmuje węzły szyi, pach i pachwin. Termin umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez formularz rejestracji online, w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function UsgWezlowChlonnychPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG węzłów chłonnych we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG węzłów chłonnych to bezbolesne badanie oceniające węzły szyi, pach i pachwin - ich wielkość, strukturę i unaczynienie. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/wezly-chlonne"
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
