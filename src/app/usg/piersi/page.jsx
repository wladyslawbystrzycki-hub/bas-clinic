import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from "@/config/services";
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG piersi Wrocław - badanie | Bas Clinic',
  description:
    'USG piersi we Wrocławiu - bezbolesne badanie gruczołów piersiowych i węzłów pachowych bez promieniowania. Bez skierowania, w Bas Clinic. Umów termin.',
  path: '/usg/piersi/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG piersi' },
];

const RELATED = [
  'usg/wezlow-chlonnych',
  'usg/tkanek-miekkich',
  'usg/ginekologiczne',
].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG piersi?',
    content:
      '<p>USG piersi to ultrasonografia gruczołów piersiowych, czyli obrazowanie piersi z wykorzystaniem fal ultradźwiękowych. Badanie pozwala ocenić budowę gruczołu piersiowego bez użycia promieniowania jonizującego. Ultrasonografia piersi jest bezbolesna i nieinwazyjna, dlatego można ją powtarzać tak często, jak wymaga tego sytuacja kliniczna.</p>' +
      '<p>Ultrasonograficzne badanie piersi obejmuje oba gruczoły piersiowe (obie piersi) wraz z otaczającymi strukturami. Ocenie podlega tkanka gruczołowa i tłuszczowa, przewody mlekowe oraz węzły chłonne pachowe.</p>' +
      '<p>USG gruczołów piersiowych wykonuje się głowicą liniową o wysokiej rozdzielczości, która dobrze różnicuje struktury powierzchowne. Brak promieniowania sprawia, że obrazowanie piersi jest bezpieczne również dla kobiet w ciąży i w okresie laktacji.</p>',
  },
  {
    title: 'Co wykrywa USG piersi?',
    content:
      '<p>USG piersi pozwala uwidocznić zmiany ogniskowe w obrębie gruczołu piersiowego oraz scharakteryzować ich cechy. Badanie ultrasonograficzne piersi różnicuje przede wszystkim zmiany płynowe od litych, na przykład torbiele, gruczolakowłókniaki (włókniakogruczolaki) oraz inne ogniska wymagające obserwacji.</p>' +
      '<p>Ultrasonografia gruczołów piersiowych ocenia kształt, granice, echogeniczność, orientację i unaczynienie zmiany, a następnie klasyfikuje ją w skali BI-RADS. Badanie obejmuje również ocenę węzłów chłonnych pachowych, dlatego w razie potrzeby uzupełnia je <a href="/usg/wezlow-chlonnych/">USG węzłów chłonnych</a> okolicy pachy.</p>' +
      '<p><strong>USG piersi nie rozpoznaje raka piersi.</strong> Badanie ocenia cechy stwierdzonych zmian i klasyfikuje je w skali BI-RADS, natomiast ostateczny charakter zmiany potwierdza badanie histopatologiczne pobranego materiału (biopsja). Wynik USG nie zastępuje konsultacji lekarskiej, a jego interpretacja należy do lekarza.</p>',
  },
  {
    title: 'USG piersi a mammografia',
    content:
      '<p>USG piersi i mammografia to badania komplementarne, a nie konkurencyjne. Ultrasonografia piersi nie wykorzystuje promieniowania jonizującego i jest szczególnie przydatna u kobiet z gęstą strukturą gruczołową, u młodszych pacjentek oraz w okresie ciąży i laktacji.</p>' +
      '<p>Mammografia z kolei lepiej uwidacznia mikrozwapnienia, które mogą mieć znaczenie w ocenie gruczołu piersiowego. O doborze metody oraz o kolejności badań decyduje lekarz na podstawie wieku, budowy piersi i obrazu klinicznego.</p>' +
      '<p>W praktyce diagnostyka piersi często łączy obie metody, ponieważ uzupełniają się one wzajemnie. USG obu piersi bywa stosowane jako badanie pierwszego wyboru u młodszych kobiet oraz jako uzupełnienie wcześniejszej mammografii.</p>',
  },
  {
    title: 'Wskazania do USG piersi',
    content:
      '<p>Wskazaniem do USG piersi jest najczęściej wyczuwalny guzek lub zgrubienie w piersi, wymagające oceny ultrasonograficznej. Badanie ultrasonograficzne piersi rozważa się także przy bólu piersi, wycieku z brodawki, zmianach skórnych okolicy gruczołu oraz przy gęstej strukturze gruczołowej.</p>' +
      '<ul>' +
      '<li>kontrola wcześniej opisanych zmian i monitorowanie ognisk sklasyfikowanych w skali BI-RADS,</li>' +
      '<li>ocena uzupełniająca po mammografii lub przy niejednoznacznym wyniku innego badania,</li>' +
      '<li>ocena powierzchownych zmian w okolicy piersi, którą może doprecyzować <a href="/usg/tkanek-miekkich/">USG tkanek miękkich</a>,</li>' +
      '<li>kontrola implantów piersi.</li>' +
      '</ul>' +
      '<p>W ocenie implantów warto pamiętać, że przy podejrzeniu pęknięcia implantu piersi złotym standardem jest rezonans magnetyczny (MR). USG ma w tej sytuacji ograniczoną czułość, dlatego ostateczną decyzję o dalszej diagnostyce podejmuje lekarz.</p>',
  },
  {
    title: 'Jak przygotować się do USG piersi i kiedy je wykonać?',
    content:
      '<p>USG piersi nie wymaga specjalnego przygotowania - można zgłosić się na badanie bez wcześniejszych ograniczeń dotyczących posiłków czy płynów. Ultrasonografię gruczołów piersiowych wykonuje się w dogodnym terminie, a samo badanie poprzedza krótki wywiad.</p>' +
      '<p>U kobiet miesiączkujących zaleca się wykonanie badania między 5. a 10. dniem cyklu, ponieważ tkanka gruczołowa jest wtedy mniej tkliwa i obrzmiała, co zwiększa komfort. Jest to jednak zalecenie dotyczące komfortu, a nie bezwzględny wymóg - w razie potrzeby ultrasonograficzne badanie piersi można wykonać w dowolnym dniu cyklu.</p>' +
      '<p>Na badanie warto zabrać poprzednie wyniki, takie jak wcześniejsze USG czy mammografia. Możliwość porównania obrazu z poprzednimi badaniami ułatwia ocenę dynamiki zmian.</p>',
  },
  {
    title: 'Jak przebiega USG piersi i kiedy wynik?',
    content:
      '<p>USG piersi przebiega w pozycji leżącej, z ręką uniesioną i ułożoną za głową, co rozprostowuje tkankę gruczołową. Na skórę nakłada się żel sprzęgający, a następnie lekarz prowadzi głowicę liniową, oceniając kolejne kwadranty obu piersi oraz doły pachowe.</p>' +
      '<p>Badanie ultrasonograficzne piersi jest bezbolesne i nie wykorzystuje promieniowania, a typowo trwa kilkanaście minut. Wynik to opis obrazu wraz z kategorią w skali BI-RADS, która porządkuje dalsze postępowanie.</p>' +
      '<p>Skala BI-RADS to kategorie oceny (od 0 do 6), a nie liniowa skala procentowego ryzyka. Kategoria BI-RADS 0 oznacza badanie niediagnostyczne lub niejednoznaczne, które wymaga uzupełnienia, na przykład o mammografię lub dodatkowe projekcje. Wynik USG nie zastępuje konsultacji lekarskiej - jego interpretacja oraz decyzja o dalszym postępowaniu należą do lekarza.</p>' +
      '<p>USG piersi wykonujemy w Bas Clinic przy ul. Opatowicka 132 we Wrocławiu. Badanie stanowi część oferty <a href="/usg/">pracowni USG we Wrocławiu</a>, a termin można ustalić telefonicznie pod numerem +48 690 511 511.</p>',
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG piersi?',
    answer:
      'USG piersi wykrywa zmiany ogniskowe w gruczole piersiowym i pozwala je scharakteryzować - różnicuje zmiany płynowe od litych, takie jak torbiele czy gruczolakowłókniaki, oraz ocenia węzły chłonne pachowe. Badanie ocenia cechy zmiany (kształt, granice, echogeniczność, unaczynienie) i klasyfikuje ją w skali BI-RADS. USG piersi nie rozpoznaje raka piersi - charakter zmiany potwierdza biopsja, a wynik interpretuje lekarz.',
  },
  {
    question: 'Czy USG piersi wykrywa raka piersi?',
    answer:
      'USG piersi nie wykrywa i nie rozpoznaje raka piersi. Badanie pozwala uwidocznić zmiany w gruczole piersiowym oraz ocenić ich cechy i sklasyfikować je w skali BI-RADS, co może wskazywać na konieczność dalszej diagnostyki. Ostateczny charakter zmiany potwierdza badanie histopatologiczne (biopsja), a USG nie zastępuje konsultacji lekarskiej.',
  },
  {
    question: 'USG piersi czy mammografia - co wybrać?',
    answer:
      'USG piersi i mammografia to badania komplementarne, dlatego nie zawsze trzeba wybierać między nimi. USG piersi nie wykorzystuje promieniowania i jest szczególnie przydatne u kobiet z gęstą strukturą gruczołową, u młodszych pacjentek oraz w ciąży i laktacji, natomiast mammografia lepiej uwidacznia mikrozwapnienia. O doborze metody i kolejności badań decyduje lekarz na podstawie wieku, budowy piersi i obrazu klinicznego.',
  },
  {
    question: 'W którym dniu cyklu wykonać USG piersi?',
    answer:
      'USG piersi u kobiet miesiączkujących najwygodniej wykonać między 5. a 10. dniem cyklu, gdy tkanka gruczołowa jest mniej tkliwa i obrzmiała. Jest to jednak zalecenie dotyczące komfortu, a nie bezwzględny wymóg - w razie potrzeby badanie można wykonać w dowolnym dniu cyklu.',
  },
  {
    question: 'Ile kosztuje USG piersi we Wrocławiu?',
    answer:
      'Cena USG piersi we Wrocławiu zależy od zakresu badania. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511, gdzie można też ustalić termin.',
  },
  {
    question: 'Czy na USG piersi potrzebne jest skierowanie?',
    answer:
      'Na USG piersi skierowanie nie jest wymagane. Badanie wykonywane jest prywatnie, dlatego można umówić je bezpośrednio, bez skierowania od lekarza.',
  },
];

export default function UsgPiersiPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG piersi we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG piersi to bezpieczne, bezbolesne badanie gruczołów piersiowych i węzłów pachowych, wykonywane bez promieniowania. Szczególnie przydatne u kobiet z gęstą strukturą gruczołową. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/piersi"
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
