import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from "@/config/services";
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG piersi Wrocław - gruczoły piersiowe',
  description:
    'USG piersi we Wrocławiu - bezbolesne badanie gruczołów piersiowych i węzłów pachowych, z oceną zmian w skali BI-RADS. Prywatnie, bez skierowania.',
  path: '/usg/piersi/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG piersi' },
];

const RELATED = [
  'usg/wezly-chlonne',
  'usg/tkanki-miekkie',
  'usg/ginekologiczne',
].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG piersi?',
    content:
      '<p>USG piersi to ultrasonografia gruczołów piersiowych, czyli obrazowanie piersi falami ultradźwiękowymi. Badanie ocenia budowę gruczołu piersiowego bez promieniowania jonizującego, jest bezbolesne i nieinwazyjne, dlatego można je powtarzać tak często, jak wymaga tego sytuacja kliniczna.</p>' +
      '<p>Ultrasonografia piersi obejmuje oba gruczoły piersiowe wraz z otaczającymi strukturami. Ocenie podlega tkanka gruczołowa i tłuszczowa, przewody mlekowe oraz węzły chłonne pachowe. Spotykane na skierowaniach nazwy USG gruczołów piersiowych, ultrasonografia piersi i badanie USG piersi oznaczają to samo badanie.</p>' +
      '<p>USG gruczołów piersiowych wykonuje się głowicą liniową o wysokiej rozdzielczości, która dobrze różnicuje struktury powierzchowne. Brak promieniowania sprawia, że obrazowanie piersi jest bezpieczne również dla kobiet w ciąży i w okresie laktacji.</p>',
  },
  {
    title: 'Co ocenia USG piersi?',
    content:
      '<p>USG piersi uwidacznia zmiany ogniskowe w gruczole piersiowym i opisuje ich cechy. Badanie różnicuje przede wszystkim zmiany płynowe od litych, na przykład torbiele od guzków takich jak gruczolakowłókniak (włókniakogruczolak).</p>' +
      '<p>Ultrasonografia gruczołów piersiowych ocenia kształt, granice, echogeniczność, orientację i unaczynienie zmiany, a następnie porządkuje te cechy w skali BI-RADS. Badanie obejmuje również węzły chłonne pachowe, dlatego w razie potrzeby uzupełnia je <a href="/usg/wezly-chlonne/">USG węzłów chłonnych</a> okolicy pachy.</p>' +
      '<p><strong>USG piersi nie rozpoznaje raka piersi.</strong> Badanie opisuje cechy zmiany i przypisuje jej kategorię BI-RADS, natomiast ostateczny charakter ogniska potwierdza wynik biopsji, czyli badanie histopatologiczne pobranego materiału. Wynik USG nie zastępuje konsultacji lekarskiej, a jego interpretacja należy do lekarza.</p>',
  },
  {
    title: 'USG piersi a mammografia',
    content:
      '<p>USG piersi i mammografia to badania komplementarne, a nie konkurencyjne. Ultrasonografia nie wykorzystuje promieniowania i sprawdza się u kobiet z gęstą strukturą gruczołową, u młodszych pacjentek oraz w ciąży i w okresie laktacji, natomiast mammografia lepiej uwidacznia mikrozwapnienia.</p>' +
      '<p>Według rekomendacji europejskich (EUSOBI) podstawą badań przesiewowych w kierunku raka piersi pozostaje mammografia. U kobiet z gęstą piersią (kategorie gęstości ACR C i D) USG bywa stosowane jako badanie uzupełniające, ponieważ gęsta tkanka gruczołowa utrudnia ocenę w mammografii. Dobór metody i kolejność badań ustala lekarz na podstawie wieku, budowy piersi i obrazu klinicznego.</p>' +
      '<table>' +
      '<tr><th>Cecha</th><th>USG piersi</th><th>Mammografia</th></tr>' +
      '<tr><td>Promieniowanie jonizujące</td><td>brak</td><td>niska dawka RTG</td></tr>' +
      '<tr><td>Gęsta pierś, młodsze pacjentki</td><td>dobra ocena tkanki gruczołowej</td><td>ocena bywa utrudniona</td></tr>' +
      '<tr><td>Mikrozwapnienia</td><td>słabo widoczne</td><td>uwidacznia najlepiej</td></tr>' +
      '<tr><td>Ciąża i laktacja</td><td>badanie bezpieczne</td><td>stosowana z ostrożnością</td></tr>' +
      '<tr><td>Rola w przesiewie</td><td>uzupełniająca (gęsta pierś)</td><td>podstawowa</td></tr>' +
      '</table>' +
      '<p>W praktyce diagnostyka piersi często łączy obie metody, ponieważ uzupełniają się wzajemnie. Dodanie USG do mammografii zwiększa wykrywalność zmian, wiąże się jednak z większą liczbą wyników wymagających dalszej weryfikacji.</p>',
  },
  {
    title: 'Jak czytać wynik USG piersi: skala BI-RADS',
    content:
      '<p>Wynik USG piersi kończy się kategorią w skali BI-RADS, która porządkuje dalsze postępowanie. BI-RADS to system oceny i zaleceń z kategoriami od 0 do 6, a nie liniowa skala procentowego ryzyka.</p>' +
      '<p>Poszczególne kategorie wskazują, co dalej:</p>' +
      '<ul>' +
      '<li><strong>BI-RADS 0</strong> - badanie niediagnostyczne lub niejednoznaczne, wymaga uzupełnienia, na przykład o mammografię, dodatkowe projekcje lub porównanie z poprzednimi wynikami,</li>' +
      '<li><strong>BI-RADS 1</strong> - obraz prawidłowy,</li>' +
      '<li><strong>BI-RADS 2</strong> - zmiana o cechach łagodnych, na przykład prosta torbiel,</li>' +
      '<li><strong>BI-RADS 3</strong> - zmiana prawdopodobnie łagodna, zalecana kontrola w skróconym odstępie,</li>' +
      '<li><strong>BI-RADS 4</strong> - zmiana podejrzana, rozważana biopsja,</li>' +
      '<li><strong>BI-RADS 5</strong> - obraz wysoce podejrzany, wskazana biopsja,</li>' +
      '<li><strong>BI-RADS 6</strong> - zmiana potwierdzona histopatologicznie po wcześniejszej biopsji.</li>' +
      '</ul>' +
      '<p>Kategoria BI-RADS jest wskazówką dalszego postępowania, a nie ostatecznym rozpoznaniem. Tę samą zmianę lekarz interpretuje w zestawieniu z badaniem klinicznym i poprzednimi wynikami, a decyzja o dalszych krokach należy do lekarza prowadzącego.</p>',
  },
  {
    title: 'Wskazania do USG piersi',
    content:
      '<p>Najczęstszym wskazaniem do USG piersi jest wyczuwalny guzek lub zgrubienie wymagające oceny. Badanie rozważa się również przy bólu piersi, wycieku z brodawki, zmianach skórnych okolicy gruczołu oraz u kobiet z gęstą strukturą gruczołową.</p>' +
      '<ul>' +
      '<li>diagnostyka wyczuwalnego guzka lub zgrubienia,</li>' +
      '<li>kontrola i monitorowanie zmian opisanych wcześniej w skali BI-RADS,</li>' +
      '<li>ocena uzupełniająca po mammografii lub przy niejednoznacznym wyniku,</li>' +
      '<li>ocena powierzchownych zmian okolicy piersi, którą może doprecyzować <a href="/usg/tkanki-miekkie/">USG tkanek miękkich</a>,</li>' +
      '<li>kontrola implantów piersi.</li>' +
      '</ul>' +
      '<p>Przy podejrzeniu pęknięcia implantu piersi badaniem o najwyższej czułości jest rezonans magnetyczny (MR). USG ma w tej sytuacji ograniczoną wartość, dlatego o dalszej diagnostyce decyduje lekarz.</p>',
  },
  {
    title: 'Jak przygotować się do USG piersi i jak przebiega badanie?',
    content:
      '<p>USG piersi nie wymaga specjalnego przygotowania, nie obowiązują ograniczenia dotyczące posiłków ani płynów. U kobiet miesiączkujących dla komfortu zaleca się pierwszą fazę cyklu, mniej więcej między 1. a 10. dniem, gdy tkanka gruczołowa jest mniej tkliwa i obrzmiała. Nie jest to jednak bezwzględny wymóg.</p>' +
      '<p>Na badanie warto zabrać poprzednie wyniki, wcześniejsze USG czy mammografię. Porównanie z nimi ułatwia ocenę dynamiki zmian.</p>' +
      '<h3>Przebieg badania</h3>' +
      '<p>Badanie wykonuje się w pozycji leżącej, z ręką uniesioną i ułożoną za głową, co rozprostowuje tkankę gruczołową. Na skórę nakłada się żel sprzęgający, a następnie lekarz prowadzi głowicę liniową, oceniając kolejne kwadranty obu piersi oraz doły pachowe. USG piersi jest bezbolesne, nie wykorzystuje promieniowania i typowo trwa kilkanaście minut. Wynik to opis obrazu wraz z kategorią BI-RADS.</p>',
  },
  {
    title: 'Ograniczenia i bezpieczeństwo USG piersi',
    content:
      '<p>USG piersi jest bezpieczne, nie wykorzystuje promieniowania jonizującego, jest bezbolesne i można je powtarzać. Ma jednak ograniczenia, o których warto wiedzieć.</p>' +
      '<p><strong>USG piersi nie jest samodzielnym badaniem przesiewowym w kierunku raka piersi i nie zastępuje mammografii ani biopsji.</strong> Ultrasonografia słabo uwidacznia mikrozwapnienia, które w mammografii bywają ważnym sygnałem, dlatego u części pacjentek potrzebne są obie metody. Wynik USG to opis obrazu, a nie rozpoznanie, ponieważ charakter zmiany potwierdza dopiero badanie histopatologiczne.</p>' +
      '<p>Czułość badania zależy też od budowy piersi i doświadczenia osoby wykonującej. Z tych powodów o doborze badań, ich kolejności i interpretacji wyniku decyduje lekarz, najlepiej w zestawieniu z badaniem klinicznym i poprzednią dokumentacją.</p>',
  },
  {
    title: 'Cena i wizyta we Wrocławiu',
    content:
      `<p>USG piersi w Bas Clinic wykonujemy przy ${CLINIC.address.street} we Wrocławiu, w ramach <a href="/usg/">pracowni USG</a>. Badanie jest prywatne i nie wymaga skierowania.</p>` +
      `<p>Aktualne ceny znajdziesz w <a href="/cennik/">cenniku</a>, a termin umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez <a href="/rejestracja/">formularz rejestracji</a>. Pracownia przyjmuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.</p>` +
      '<p>Wynik USG piersi nie zastępuje konsultacji lekarskiej. Ostateczna interpretacja obrazu oraz decyzja o dalszym postępowaniu zawsze należą do lekarza.</p>',
  },
  {
    title: 'Źródła',
    content:
      '<ol>' +
      '<li>Marcon M, Fuchsjäger MH, Clauser P, Mann RM. ESR Essentials: screening for breast cancer - general recommendations by EUSOBI. European Radiology 2024;34(10):6348-6357.</li>' +
      '<li>ACR BI-RADS Atlas - Breast Imaging Reporting and Data System (leksykon i kategorie oceny piersi). American College of Radiology.</li>' +
      '<li>Breast Imaging Reporting and Data System (BI-RADS). StatPearls, NCBI Bookshelf (NBK459169).</li>' +
      '<li>Ohuchi N i wsp. Sensitivity and specificity of mammography and adjunctive ultrasonography to screen for breast cancer in the Japan Strategic Anti-cancer Randomized Trial (J-START). Lancet 2016;387(10016):341-348.</li>' +
      '</ol>',
  },
];

const FAQ = [
  {
    question: 'Czy USG piersi wykrywa raka piersi?',
    answer:
      'USG piersi nie wykrywa i nie rozpoznaje raka piersi. Badanie uwidacznia zmiany w gruczole piersiowym, ocenia ich cechy i przypisuje kategorię BI-RADS, co może wskazywać na potrzebę dalszej diagnostyki. Ostateczny charakter zmiany potwierdza badanie histopatologiczne (biopsja), a wynik USG interpretuje lekarz; badanie nie zastępuje konsultacji lekarskiej.',
  },
  {
    question: 'USG piersi czy mammografia - co wybrać?',
    answer:
      'USG piersi i mammografia to badania komplementarne, dlatego nie zawsze trzeba wybierać między nimi. USG nie wykorzystuje promieniowania i sprawdza się u kobiet z gęstą strukturą gruczołową, u młodszych pacjentek oraz w ciąży i laktacji, natomiast mammografia lepiej uwidacznia mikrozwapnienia i pozostaje podstawą przesiewu. O doborze i kolejności badań decyduje lekarz na podstawie wieku, budowy piersi i obrazu klinicznego.',
  },
  {
    question: 'W którym dniu cyklu wykonać USG piersi?',
    answer:
      'USG piersi u kobiet miesiączkujących najwygodniej wykonać w pierwszej fazie cyklu, mniej więcej między 1. a 10. dniem, gdy tkanka gruczołowa jest mniej tkliwa i obrzmiała. To zalecenie dotyczy komfortu, a nie warunku diagnostycznego - w razie potrzeby badanie można wykonać w dowolnym dniu cyklu.',
  },
  {
    question: 'Ile kosztuje USG piersi we Wrocławiu?',
    answer:
      `Cena USG piersi we Wrocławiu zależy od zakresu badania. Aktualny cennik znajdziesz w zakładce Cennik na stronie Bas Clinic, a termin umówisz pod numerem ${CLINIC.phone}. Badanie jest prywatne i nie wymaga skierowania.`,
  },
  {
    question: 'Czy na USG piersi potrzebne jest skierowanie?',
    answer:
      'Na USG piersi skierowanie nie jest wymagane. Badanie wykonujemy prywatnie, dlatego można umówić je bezpośrednio, bez skierowania od lekarza.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG piersi?',
    answer:
      `USG piersi we Wrocławiu wykonasz w pracowni ultrasonografii Bas Clinic przy ${CLINIC.address.street}. Badanie obejmuje oba gruczoły piersiowe i węzły chłonne pachowe, a jego wynik opisuje zmiany w skali BI-RADS. Termin umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez formularz rejestracji online, w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
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
