import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG tarczycy Wrocław | Bas Clinic',
  description:
    'USG tarczycy we Wrocławiu w Bas Clinic - bezbolesne, nieinwazyjne badanie oceniające guzki, strukturę i objętość gruczołu tarczowego. Sprawdź termin i cenę.',
  path: '/usg/tarczycy/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG tarczycy' },
];

const RELATED = ['usg/szyi', 'usg/wezlow-chlonnych', 'usg/slinianek'].map(
  getServiceBySlug,
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG tarczycy?',
    content:
      '<p>USG tarczycy to nieinwazyjne badanie obrazowe gruczołu tarczowego z wykorzystaniem fal ultradźwiękowych. Ultrasonografia tarczycy pozwala ocenić oba płaty oraz cieśń tarczycy, czyli środkową część łączącą płaty, bez stosowania promieniowania jonizującego.</p>' +
      '<p>Badanie USG tarczycy obrazuje strukturę i echogeniczność miąższu, mierzy objętość gruczołu oraz uwidacznia ewentualne guzki i zmiany ogniskowe. W opcji Doppler ocenia się dodatkowo unaczynienie tarczycy oraz przepływ krwi w obrębie zmian.</p>' +
      '<p>Ultrasonograficzne badanie tarczycy bywa nazywane także USG gruczołu tarczowego. Jest to badanie celowane, skupione wyłącznie na tym narządzie, dlatego stanowi podstawowe narzędzie w diagnostyce schorzeń tarczycy.</p>',
  },
  {
    title: 'Co wykrywa USG tarczycy?',
    content:
      '<p>USG tarczycy pozwala uwidocznić guzki tarczycy (lite, torbielowate oraz mieszane), wole, zmiany ogniskowe oraz rozlane zmiany struktury gruczołu. Badanie umożliwia opisanie wielkości, lokalizacji i liczby zmian, a także ocenę echogeniczności miąższu.</p>' +
      '<p>Obniżona lub niejednorodna echogeniczność tarczycy oraz wzmożone unaczynienie mogą towarzyszyć zapaleniom tarczycy, na przykład w chorobie Hashimoto, natomiast wole guzkowe objawia się obecnością licznych guzków. Ultrasonografia tarczycy ocenia również cechy ryzyka pojedynczych guzków, takie jak echogeniczność, granice, kształt, obecność mikrozwapnień oraz wzór unaczynienia.</p>' +
      '<p><strong>USG tarczycy nie rozpoznaje raka tarczycy.</strong> Badanie pozwala ocenić ryzyko złośliwości guzka według klasyfikacji EU-TIRADS i może wskazywać na konieczność dalszej diagnostyki. Charakter zmiany potwierdza dopiero biopsja aspiracyjna cienkoigłowa (BACC), a całość wyników interpretuje lekarz.</p>',
  },
  {
    title: 'Wskazania do USG tarczycy',
    content:
      '<p>Wskazaniem do USG tarczycy jest wyczuwalny guzek na szyi, powiększenie tarczycy lub wole, a także nieprawidłowe wyniki badań hormonalnych (TSH, FT3, FT4). Badanie wykonuje się również w ramach diagnostyki objawów nadczynności oraz niedoczynności tarczycy.</p>' +
      '<ul>' +
      '<li>wyczuwalny guzek lub niesymetryczne powiększenie szyi,</li>' +
      '<li>nieprawidłowe stężenia hormonów tarczycy i TSH,</li>' +
      '<li>objawy nadczynności tarczycy (kołatanie serca, chudnięcie, drżenie rąk),</li>' +
      '<li>objawy niedoczynności tarczycy (osłabienie, senność, przyrost masy ciała),</li>' +
      '<li>monitorowanie znanych guzków oraz wola guzkowego,</li>' +
      '<li>kontrola po leczeniu chorób tarczycy lub po zabiegach operacyjnych.</li>' +
      '</ul>' +
      '<p>Ultrasonograficzne badanie tarczycy bywa też zlecane profilaktycznie u osób obciążonych rodzinnie chorobami tarczycy. O zasadności badania w konkretnym przypadku decyduje lekarz.</p>',
  },
  {
    title: 'Jak przygotować się do USG tarczycy?',
    content:
      '<p>USG tarczycy nie wymaga specjalnego przygotowania - nie trzeba być na czczo ani odstawiać przyjmowanych leków. Badanie tarczycy można wykonać o dowolnej porze dnia.</p>' +
      '<p>Zaleca się zdjąć biżuterię z okolicy szyi oraz ubrać się tak, aby łatwo odsłonić tę okolicę. Warto przynieść poprzednie wyniki badań - opisy wcześniejszych USG, wyniki badań hormonalnych oraz dokumentację dotyczącą leczenia tarczycy, co ułatwia porównanie i ocenę dynamiki zmian.</p>' +
      '<p>Przygotowanie do USG tarczycy jest więc minimalne, dzięki czemu badanie jest wygodne i dostępne także przy potrzebie szybkiego terminu.</p>',
  },
  {
    title: 'USG tarczycy a USG szyi',
    content:
      '<p>USG tarczycy to badanie celowane wyłącznie na gruczoł tarczowy, natomiast <a href="/usg/szyi/">USG szyi</a> jest badaniem parasolowym obejmującym szerszy obszar tej okolicy. Kompleksowa ocena szyi uwzględnia poza tarczycą także węzły chłonne, ślinianki oraz tkanki miękkie szyi.</p>' +
      '<p>Wybór zakresu zależy od celu diagnostycznego. Jeśli ocena dotyczy samego gruczołu tarczowego oraz guzków tarczycy, wystarcza ultrasonografia tarczycy. Gdy konieczna jest szersza ocena okolicy szyi, wskazane jest badanie parasolowe.</p>' +
      '<p>W razie stwierdzenia nieprawidłowych lub podejrzanych węzłów chłonnych w trakcie oceny szyi pomocne jest <a href="/usg/wezlow-chlonnych/">USG węzłów chłonnych</a>, które szczegółowo charakteryzuje węzły szyjne. O właściwym zakresie badania decyduje lekarz na podstawie objawów i dotychczasowych wyników.</p>',
  },
  {
    title: 'Jak przebiega USG tarczycy i kiedy wynik?',
    content:
      '<p>USG tarczycy przebiega w pozycji leżącej, z lekko odchyloną do tyłu głową, co ułatwia dostęp do gruczołu. Na skórę szyi nakłada się żel sprzęgający, a badanie wykonuje się głowicą liniową o wysokiej rozdzielczości.</p>' +
      '<p>Badanie tarczycy jest bezbolesne, nieinwazyjne i nie wykorzystuje promieniowania, dlatego można je powtarzać wielokrotnie. Całość trwa zwykle kilkanaście minut, a wynik w formie opisu sporządza lekarz wykonujący badanie.</p>' +
      '<p>Wynik USG tarczycy nie zastępuje konsultacji lekarskiej - opis ultrasonograficzny należy zestawić z wywiadem, badaniem palpacyjnym oraz wynikami badań hormonalnych. W ciąży badanie wykonuje się jedynie przy wyraźnych wskazaniach. Pełną ofertę pracowni USG we Wrocławiu, w tym <a href="/usg/">wszystkie dostępne badania</a> oraz <a href="/cennik/">cennik</a>, prezentujemy na stronie Bas Clinic.</p>',
  },
];

const FAQ = [
  {
    question: 'Czy do USG tarczycy trzeba być na czczo?',
    answer:
      'Do USG tarczycy nie trzeba być na czczo. Badanie nie wymaga specjalnego przygotowania - można je wykonać o dowolnej porze dnia, bez odstawiania leków. Zaleca się jedynie zdjąć biżuterię z okolicy szyi i przynieść poprzednie wyniki badań tarczycy.',
  },
  {
    question: 'Co wykrywa USG tarczycy?',
    answer:
      'USG tarczycy uwidacznia guzki (lite, torbielowate i mieszane), wole, zmiany ogniskowe oraz rozlane zmiany struktury gruczołu. Badanie ocenia objętość i echogeniczność tarczycy oraz cechy ryzyka guzków, takie jak granice, kształt, mikrozwapnienia i unaczynienie. Wynik interpretuje lekarz.',
  },
  {
    question: 'Czy USG tarczycy wykrywa raka tarczycy?',
    answer:
      'USG tarczycy nie rozpoznaje raka tarczycy. Badanie pozwala ocenić cechy ryzyka guzków i sklasyfikować je według skali EU-TIRADS, co może wskazywać na konieczność dalszej diagnostyki. Charakter zmiany potwierdza dopiero biopsja aspiracyjna cienkoigłowa (BACC) oceniana przez lekarza.',
  },
  {
    question: 'Ile kosztuje USG tarczycy we Wrocławiu?',
    answer:
      'Cena USG tarczycy we Wrocławiu zależy od zakresu badania, na przykład od tego, czy obejmuje ocenę Doppler. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511.',
  },
  {
    question: 'Czy na USG tarczycy potrzebne jest skierowanie?',
    answer:
      'Na USG tarczycy nie jest potrzebne skierowanie. Badanie tarczycy wykonujemy prywatnie, dlatego można je zaplanować bez skierowania od lekarza i umówić w dogodnym, często szybkim terminie pod numerem 690 511 511.',
  },
  {
    question: 'Czym różni się USG tarczycy od USG szyi?',
    answer:
      'USG tarczycy różni się od USG szyi zakresem badania. USG tarczycy jest badaniem celowanym wyłącznie na gruczoł tarczowy, natomiast USG szyi to badanie parasolowe obejmujące także węzły chłonne, ślinianki i tkanki miękkie szyi. Wybór zakresu zależy od celu diagnostycznego i decyzji lekarza.',
  },
];

export default function UsgTarczycyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG tarczycy we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG tarczycy to bezbolesne badanie oceniające strukturę, objętość i echogeniczność gruczołu tarczowego oraz ewentualne guzki. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/tarczycy"
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
