import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG jąder Wrocław - badanie moszny | Bas Clinic',
  description:
    'USG jąder we Wrocławiu (ul. Opatowicka 132). Bezbolesne badanie moszny, jąder i najądrzy z opcją Dopplera. Diagnostyka guzków i bólu. Umów termin.',
  path: '/usg/jader/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG jąder' },
];

const RELATED = ['usg/prostaty', 'usg/wezlow-chlonnych', 'usg/tkanek-miekkich'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG jąder?',
    content:
      '<p>USG jąder to nieinwazyjne, ultrasonograficzne badanie moszny, w którym ocenia się zawartość worka mosznowego. Bywa określane wymiennie jako USG moszny, USG jąder i najądrzy, ultrasonografia jąder lub badanie USG worka mosznowego. Wszystkie te nazwy odnoszą się do tej samej oceny ultrasonograficznej.</p>' +
      '<p>Ultrasonograficzne badanie jąder obejmuje oba jądra (badanie wykonuje się obustronnie i porównawczo), najądrza, początkowe odcinki powrózka nasiennego oraz powłoki worka mosznowego. Pozwala uwidocznić strukturę tkanek, ich echogeniczność oraz ewentualne zmiany ogniskowe i płyn w obrębie moszny.</p>' +
      '<p>Obrazowanie jąder uzupełnia się zwykle oceną dopplerowską (USG jąder z dopplerem). Doppler pozwala ocenić unaczynienie jąder i najądrzy, co ma znaczenie między innymi w różnicowaniu stanów zapalnych oraz przy podejrzeniu zaburzeń ukrwienia.</p>',
  },
  {
    title: 'Co wykrywa USG jąder?',
    content:
      '<p>USG jąder pozwala uwidocznić najczęstsze zmiany w obrębie moszny, jąder i najądrzy oraz ocenić ich cechy ultrasonograficzne. Badanie ocenia wielkość, granice, echogeniczność i unaczynienie tkanek, ale samo w sobie nie rozpoznaje charakteru zmiany.</p>' +
      '<ul>' +
      '<li>zmiany ogniskowe i guzki w obrębie jąder - badanie ocenia ich cechy (wielkość, granice, echogeniczność, unaczynienie), natomiast charakter zmiany wymaga dalszej diagnostyki,</li>' +
      '<li>torbiele, w tym torbiel najądrza,</li>' +
      '<li>wodniak jądra, czyli nadmiar płynu między osłonkami jądra,</li>' +
      '<li>żylaki powrózka nasiennego (varicocele),</li>' +
      '<li>cechy stanu zapalnego jądra i najądrza,</li>' +
      '<li>skutki urazu moszny, takie jak krwiak lub uszkodzenie tkanek.</li>' +
      '</ul>' +
      '<p>Ocena unaczynienia w opcji Dopplera jest szczególnie istotna przy nagłym, silnym bólu moszny i podejrzeniu skrętu jądra, gdy uwidocznienie lub brak przepływu krwi może wskazywać na konieczność pilnej diagnostyki i pilnej konsultacji lekarskiej.</p>',
  },
  {
    title: 'USG jąder w diagnostyce żylaków powrózka (varicocele)',
    content:
      '<p>USG jąder w diagnostyce żylaków powrózka nasiennego wykonuje się dwuetapowo: w pozycji leżącej oraz w pozycji stojącej, z próbą Valsalvy (parcie jak przy wydechu z zamkniętymi ustami i nosem). Takie postępowanie zwiększa czułość oceny i pozwala wykryć żylaki, które w pozycji leżącej bywają niewidoczne.</p>' +
      '<p>W pozycji stojącej i podczas próby Valsalvy łatwiej uwidocznić poszerzenie naczyń żylnych splotu wiciowatego oraz refluks, czyli cofanie się krwi. Ocena dopplerowska pozwala potwierdzić nieprawidłowy przepływ i określić jego nasilenie.</p>' +
      '<p>Ze względu na tę metodykę warto uprzedzić personel pracowni, że badanie ma obejmować ocenę pod kątem żylaków powrózka, aby od początku zaplanować pomiary w pozycji stojącej z próbą Valsalvy.</p>',
  },
  {
    title: 'Wskazania do USG jąder',
    content:
      '<p>Wskazaniem do USG jąder są najczęściej dolegliwości lub nieprawidłowości stwierdzane w obrębie moszny. Badanie zleca lekarz na podstawie objawów i badania fizykalnego, a jego celem jest ocena cech ewentualnych zmian.</p>' +
      '<ul>' +
      '<li>wyczuwalny guzek, zgrubienie lub stwardnienie w obrębie jądra bądź najądrza,</li>' +
      '<li>ból i obrzęk moszny,</li>' +
      '<li>uraz moszny,</li>' +
      '<li>podejrzenie żylaków powrózka nasiennego,</li>' +
      '<li>asymetria, powiększenie lub zmiana spoistości jądra,</li>' +
      '<li>jądro niewyczuwalne w mosznie (z zastrzeżeniem, że przy jądrze niezstąpionym położonym wysoko lub w kanale pachwinowym czułość USG jest ograniczona),</li>' +
      '<li>kontrola wcześniej rozpoznanych zmian, na przykład torbieli lub wodniaka.</li>' +
      '</ul>' +
      '<p>W diagnostyce męskiej USG jąder bywa elementem szerszej oceny. W zależności od objawów lekarz może zalecić dodatkowo <a href="/usg/prostaty/">USG prostaty</a>, a przy powiększonych węzłach w pachwinie pomocne bywa <a href="/usg/wezlow-chlonnych/">USG węzłów chłonnych</a>.</p>',
  },
  {
    title: 'Jak przygotować się do USG jąder?',
    content:
      '<p>USG jąder nie wymaga specjalnego przygotowania. Nie trzeba być na czczo, nie obowiązuje też dieta ani wypełnianie pęcherza moczowego. Badanie można wykonać o dowolnej porze dnia.</p>' +
      '<p>Przed badaniem zaleca się higienę okolicy intymnej oraz zabranie wyników i opisów wcześniejszych badań, jeśli pacjent je posiada. Ułatwia to porównanie obrazu i ocenę ewentualnej dynamiki zmian.</p>' +
      '<p>Warto pamiętać, że ultrasonografia moszny obejmuje oba jądra, oceniane porównawczo. Jeśli powodem zgłoszenia jest podejrzenie żylaków powrózka, część pomiarów wykonuje się dodatkowo w pozycji stojącej.</p>',
  },
  {
    title: 'Jak przebiega USG jąder i kiedy wynik?',
    content:
      '<p>USG jąder przebiega zwykle w pozycji leżącej, a przy ocenie żylaków powrózka także w pozycji stojącej. Lekarz przykłada do skóry moszny głowicę liniową pokrytą żelem i ocenia oba jądra, najądrza oraz przylegające struktury, najczęściej z użyciem opcji Doppler do oceny unaczynienia.</p>' +
      '<p>Badanie jest bezbolesne, nie wymaga znieczulenia ani nakłuć i nie wykorzystuje promieniowania jonizującego. Trwa zazwyczaj kilkanaście minut, w zależności od zakresu oceny.</p>' +
      '<p>Po badaniu lekarz sporządza opis z pomiarami i wnioskami. Wynik USG nie jest rozpoznaniem choroby - badanie nie rozpoznaje nowotworu i nie ocenia płodności, a uwidocznione cechy wymagają interpretacji w kontekście objawów i ewentualnej dalszej diagnostyki. Ultrasonografia nie zastępuje konsultacji lekarskiej, a o dalszym postępowaniu decyduje lekarz.</p>' +
      '<p>Badanie wykonywane jest w Bas Clinic przy ul. Opatowicka 132 we Wrocławiu i stanowi część <a href="/usg/">pełnej oferty pracowni USG we Wrocławiu</a>. Termin oraz aktualny <a href="/cennik/">cennik</a> można potwierdzić telefonicznie pod numerem +48 690 511 511.</p>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG jąder?',
    answer:
      'USG jąder pozwala uwidocznić zmiany w obrębie moszny, jąder i najądrzy oraz ocenić ich cechy. Badanie obrazuje guzki i zmiany ogniskowe (oceniając ich wielkość, granice i echogeniczność), torbiele, wodniak jądra, żylaki powrózka nasiennego, cechy stanów zapalnych oraz skutki urazu. Ocena dopplerowska unaczynienia jest istotna między innymi przy podejrzeniu skrętu jądra. Charakter wykrytych zmian wymaga jednak dalszej diagnostyki i interpretacji lekarza.',
  },
  {
    question: 'Czy USG jąder wykrywa raka jądra?',
    answer:
      'USG jąder nie rozpoznaje raka jądra. Badanie pozwala uwidocznić zmianę i ocenić jej cechy ultrasonograficzne, takie jak wielkość, granice, echogeniczność i unaczynienie, co może wskazywać na konieczność dalszej diagnostyki. O charakterze zmiany rozstrzygają jednak kolejne badania i konsultacja lekarska, a samo USG nie stawia rozpoznania onkologicznego.',
  },
  {
    question: 'Jak wygląda USG jąder przy podejrzeniu żylaków powrózka?',
    answer:
      'USG jąder przy podejrzeniu żylaków powrózka wykonuje się w dwóch pozycjach: leżącej oraz stojącej, dodatkowo z próbą Valsalvy, czyli parciem. Pozycja stojąca i próba Valsalvy ułatwiają uwidocznienie poszerzonych naczyń żylnych splotu wiciowatego oraz refluksu krwi. Ocena dopplerowska pozwala potwierdzić nieprawidłowy przepływ i jego nasilenie.',
  },
  {
    question: 'Czy do USG jąder trzeba się przygotować?',
    answer:
      'Do USG jąder nie trzeba się specjalnie przygotowywać. Nie obowiązuje bycie na czczo, dieta ani wypełnianie pęcherza. Zaleca się jedynie higienę okolicy intymnej oraz zabranie wyników wcześniejszych badań. Badanie obejmuje oba jądra oceniane porównawczo.',
  },
  {
    question: 'Ile kosztuje USG jąder we Wrocławiu?',
    answer:
      'Cena USG jąder we Wrocławiu zależy od zakresu badania, na przykład od tego, czy obejmuje ono ocenę dopplerowską oraz pomiary w pozycji stojącej pod kątem żylaków powrózka. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511, gdzie można też potwierdzić zakres badania.',
  },
  {
    question: 'Czy na USG jąder potrzebne jest skierowanie?',
    answer:
      'Na USG jąder skierowanie nie jest wymagane. Badanie wykonywane jest prywatnie, dlatego można je zrealizować bez skierowania od lekarza. Termin ustala się telefonicznie, a wynik z opisem otrzymuje się po badaniu.',
  },
];

export default function UsgJaderPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG jąder we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG jąder (USG moszny) to bezbolesne badanie jąder i najądrzy, często uzupełniane oceną dopplerowską przepływu krwi. Pomaga w diagnostyce guzków, bólu i żylaków powrózka nasiennego. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/jader"
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
