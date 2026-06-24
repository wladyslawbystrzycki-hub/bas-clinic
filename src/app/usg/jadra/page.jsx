import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG jąder Wrocław - guzki i żylaki',
  description:
    'USG jąder we Wrocławiu (Bas Clinic) - badanie moszny z opcją Dopplera. Ocena guzków, żylaków powrózka i bólu jądra. Bez skierowania, bezbolesne. Umów termin.',
  path: '/usg/jadra/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG jąder' },
];

const RELATED = ['usg/prostata', 'usg/wezly-chlonne', 'usg/tkanki-miekkie'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG jąder?',
    content:
      '<p>USG jąder to nieinwazyjne, ultrasonograficzne badanie moszny, w którym ocenia się zawartość worka mosznowego. Bywa określane wymiennie jako USG moszny, USG jąder i najądrzy, ultrasonografia jąder lub badanie USG worka mosznowego. Wszystkie te nazwy odnoszą się do tej samej oceny ultrasonograficznej.</p>' +
      '<p>Ultrasonograficzne badanie jąder obejmuje oba jądra (wykonuje się je obustronnie i porównawczo), najądrza, początkowe odcinki powrózka nasiennego oraz powłoki worka mosznowego. Pozwala uwidocznić strukturę tkanek, ich echogeniczność, wielkość jąder oraz ewentualne zmiany ogniskowe i obecność płynu w obrębie moszny.</p>' +
      '<p>Obrazowanie jąder uzupełnia się zwykle oceną przepływu krwi, czyli <a href="/usg/doppler/">badaniem dopplerowskim</a> (USG jąder z Dopplerem). Doppler pozwala ocenić unaczynienie jąder i najądrzy, co ma znaczenie między innymi w różnicowaniu stanów zapalnych, w wykrywaniu żylaków powrózka nasiennego oraz przy podejrzeniu zaburzeń ukrwienia jądra.</p>',
  },
  {
    title: 'Co wykrywa USG jąder? Guzki, żylaki powrózka i stany ostre moszny',
    content:
      '<p>USG jąder uwidacznia najczęstsze zmiany w obrębie moszny, jąder i najądrzy oraz ocenia ich cechy ultrasonograficzne: wielkość, granice, echogeniczność i unaczynienie. Badanie pokazuje, czy zmiana znajduje się wewnątrz jądra, czy poza nim, natomiast samodzielnie nie rozstrzyga o jej charakterze.</p>' +
      '<ul>' +
      '<li>zmiany ogniskowe i guzki wewnątrz jądra - badanie ocenia ich cechy, ale charakter zmiany wymaga dalszej diagnostyki,</li>' +
      '<li>mikrozwapnienia jąder,</li>' +
      '<li>torbiele, w tym torbiel najądrza,</li>' +
      '<li>wodniak jądra, czyli nadmiar płynu między osłonkami jądra,</li>' +
      '<li>żylaki powrózka nasiennego (varicocele),</li>' +
      '<li>cechy stanu zapalnego jądra i najądrza,</li>' +
      '<li>skutki urazu moszny, takie jak krwiak lub uszkodzenie tkanek.</li>' +
      '</ul>' +
      '<h3>Ocena dopplerowska przy nagłym bólu moszny</h3>' +
      '<p>Ocena unaczynienia w opcji Dopplera jest szczególnie ważna przy nagłym, silnym bólu moszny i podejrzeniu skrętu jądra, który jest stanem nagłym. W metaanalizie opublikowanej w czasopiśmie European Urology Focus (2025), obejmującej 42 badania i 4422 pacjentów, ultrasonografia z kolorowym Dopplerem rozpoznawała skręt jądra z czułością około 95% i swoistością około 98%. Brak lub osłabienie przepływu krwi w jądrze nakazuje pilną konsultację urologiczną lub chirurgiczną.</p>' +
      '<p>Inaczej jest przy guzkach litych w jądrze. Wytyczne European Association of Urology (EAU, 2024) zalecają potwierdzenie zmiany głowicą o wysokiej częstotliwości (powyżej 10 MHz). Te same wytyczne zaznaczają, że żadna cecha ultrasonograficzna nie różnicuje pewnie zmiany łagodnej od złośliwej. Dlatego wykryty guzek zawsze wymaga interpretacji lekarza i zwykle dalszej diagnostyki.</p>',
  },
  {
    title: 'USG jąder w diagnostyce żylaków powrózka (varicocele)',
    content:
      '<p>USG jąder w diagnostyce żylaków powrózka nasiennego wykonuje się dwuetapowo: w pozycji leżącej oraz w pozycji stojącej, z próbą Valsalvy (parcie jak przy wydechu z zamkniętymi ustami i nosem). Takie postępowanie zwiększa czułość oceny i pozwala wykryć żylaki, które w pozycji leżącej bywają niewidoczne.</p>' +
      '<p>W pozycji stojącej i podczas próby Valsalvy łatwiej uwidocznić poszerzenie naczyń żylnych splotu wiciowatego oraz refluks, czyli cofanie się krwi. Według wytycznych ESUR-SPIWG (Freeman, Bertolotto i wsp., European Radiology, 2020) za nieprawidłowe przyjmuje się naczynie o średnicy 3 mm lub większej oraz refluks trwający ponad 2 sekundy w pozycji stojącej podczas próby Valsalvy. Stopień zaawansowania opisuje się najczęściej według klasyfikacji Sarteschiego.</p>' +
      '<p>Ze względu na tę metodykę warto uprzedzić personel pracowni, że badanie ma obejmować ocenę pod kątem żylaków powrózka, aby od początku zaplanować pomiary w pozycji stojącej z próbą Valsalvy.</p>',
  },
  {
    title: 'Wskazania - kiedy wykonać USG jąder?',
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
      '<p>USG jąder bywa elementem szerszej diagnostyki układu moczowo-płciowego mężczyzny. W zależności od objawów lekarz może zalecić dodatkowo <a href="/usg/prostata/">USG prostaty</a>, a przy powiększonych węzłach w pachwinie pomocne bywa <a href="/usg/wezly-chlonne/">USG węzłów chłonnych</a>.</p>',
  },
  {
    title: 'USG jąder a inne metody obrazowania',
    content:
      '<p>USG z Dopplerem jest podstawowym badaniem obrazowym moszny: jest nieinwazyjne, szeroko dostępne i nie naraża na promieniowanie jonizujące. Inne metody pełnią rolę uzupełniającą i sięga się po nie w wybranych sytuacjach klinicznych.</p>' +
      '<table>' +
      '<tr><th>Metoda</th><th>Co ocenia</th><th>Rola w diagnostyce moszny</th></tr>' +
      '<tr><td>USG moszny z Dopplerem</td><td>strukturę jąder i najądrzy, zmiany ogniskowe, płyn, przepływ krwi, żylaki, podejrzenie skrętu</td><td>badanie pierwszego wyboru przy objawach ze strony moszny</td></tr>' +
      '<tr><td>Rezonans magnetyczny moszny</td><td>dokładną charakterystykę i lokalizację zmian wewnątrz- i pozajądrowych</td><td>metoda uzupełniająca, gdy wynik USG jest niejednoznaczny (EAU, 2024)</td></tr>' +
      '<tr><td>Badanie palpacyjne i samobadanie</td><td>wyczuwalne guzki, asymetrię, bolesność</td><td>wstępna ocena i czujność onkologiczna, bez obrazu tkanek</td></tr>' +
      '<tr><td>Tomografia komputerowa</td><td>węzły chłonne i narządy odległe</td><td>ocena stopnia zaawansowania choroby, nie ocena samej moszny</td></tr>' +
      '</table>' +
      '<h3>USG jąder a szersza diagnostyka USG</h3>' +
      '<p>USG jąder jest badaniem celowanym na zawartość moszny. Ocena przepływów w naczyniach jądra opiera się na tej samej technice co <a href="/usg/doppler/">USG dopplerowskie</a>, natomiast diagnostyka pokrewnych narządów (na przykład gruczołu krokowego czy węzłów chłonnych pachwiny) wymaga osobnych badań. Rezonans magnetyczny, zgodnie z wytycznymi EAU, daje wyższą czułość i swoistość niż USG, jednak ze względu na koszt rezerwuje się go dla przypadków niejednoznacznych, a nie do rutynowej diagnostyki.</p>',
  },
  {
    title: 'Jak przebiega USG jąder i jak się przygotować?',
    content:
      '<p>USG jąder nie wymaga specjalnego przygotowania. Nie trzeba być na czczo, nie obowiązuje dieta ani wypełnianie pęcherza moczowego, a badanie można wykonać o dowolnej porze dnia.</p>' +
      '<h3>Jak przygotować się do USG jąder?</h3>' +
      '<ul>' +
      '<li>zadbaj o higienę okolicy intymnej przed wizytą,</li>' +
      '<li>zabierz wyniki i opisy wcześniejszych badań, jeśli je posiadasz - ułatwiają porównanie obrazu i ocenę dynamiki zmian,</li>' +
      '<li>jeśli powodem zgłoszenia jest podejrzenie żylaków powrózka, uprzedź o tym personel, bo część pomiarów wykonuje się dodatkowo w pozycji stojącej.</li>' +
      '</ul>' +
      '<h3>Przebieg badania</h3>' +
      '<p>Lekarz przykłada do skóry moszny głowicę liniową pokrytą żelem i ocenia oba jądra, najądrza oraz przylegające struktury, najczęściej z użyciem opcji Doppler. Badanie wykonuje się zwykle w pozycji leżącej, a przy ocenie żylaków powrózka także na stojąco. Jest bezbolesne, nie wymaga znieczulenia ani nakłuć i trwa zazwyczaj kilkanaście minut.</p>' +
      '<p>Po badaniu lekarz sporządza opis z pomiarami i wnioskami. Wynik bywa wydawany od razu po wizycie, a jego interpretację w kontekście objawów i ewentualnej dalszej diagnostyki ustala lekarz prowadzący.</p>',
  },
  {
    title: 'Bezpieczeństwo i ograniczenia USG jąder',
    content:
      '<p>USG jąder jest badaniem bezpiecznym i nieinwazyjnym. Wykorzystuje fale ultradźwiękowe, nie promieniowanie jonizujące, dlatego można je powtarzać i stosować kontrolnie bez ograniczeń wynikających z dawki. Ma jednak granice, o których warto wiedzieć przed wizytą.</p>' +
      '<p>Po pierwsze, USG obrazuje zmianę i ocenia jej cechy, ale nie rozpoznaje nowotworu. Jak zaznaczają wytyczne EAU (2024), cechy ultrasonograficzne nie różnicują pewnie guzka łagodnego od złośliwego, a o charakterze zmiany rozstrzygają dalsze badania i konsultacja lekarska. Po drugie, badanie nie ocenia płodności - parametry nasienia bada się osobno (badanie nasienia).</p>' +
      '<p>Po trzecie, drobne zmiany bywają trudne do jednoznacznej oceny, a ich znaczenie zależy od kontekstu klinicznego. Po czwarte, choć ocena dopplerowska jest bardzo czuła w wykrywaniu skrętu jądra, prawidłowy obraz nie wyklucza go w pełni: przy utrzymującym się, silnym bólu moszny decyduje pilna konsultacja urologiczna lub chirurgiczna, a nie samo USG.</p>' +
      '<p>W praktyce USG jąder dobrze sprawdza się jako pierwsze badanie obrazowe moszny, które ukierunkowuje dalsze postępowanie. Decyzję o rozpoznaniu i leczeniu podejmuje lekarz, który zestawia obraz USG z objawami, badaniem fizykalnym i, w razie potrzeby, kolejnymi badaniami.</p>' +
      '<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej ani indywidualnej oceny stanu zdrowia. O zakresie i interpretacji badania decyduje lekarz.</p>',
  },
  {
    title: 'Ile kosztuje USG jąder we Wrocławiu?',
    content:
      '<p>Cena USG jąder we Wrocławiu zależy przede wszystkim od zakresu badania, w tym od tego, czy obejmuje ono ocenę dopplerowską oraz pomiary w pozycji stojącej pod kątem żylaków powrózka. Badanie jest prywatne i nie wymaga skierowania.</p>' +
      '<p>Aktualną stawkę potwierdzisz w <a href="/cennik/">cenniku</a> Bas Clinic lub podczas <a href="/rejestracja/">rejestracji</a>, gdzie ustalisz też zakres badania dopasowany do objawów. USG jąder jest częścią <a href="/usg/">pełnej oferty pracowni USG we Wrocławiu</a>.</p>',
  },
  {
    title: 'Źródła',
    content:
      '<ol>' +
      '<li>European Association of Urology (EAU). Guidelines on Testicular Cancer, rozdział Diagnostic Evaluation, 2024.</li>' +
      '<li>Freeman S, Bertolotto M i wsp. Ultrasound evaluation of varicoceles: guidelines and recommendations of the ESUR-SPIWG. European Radiology, 2020;30:11-25. DOI: 10.1007/s00330-019-06280-y (oraz przegląd systematyczny ESUR-SPIWG, Journal of Ultrasound, 2020, PMID: 32720266).</li>' +
      '<li>Ultrasound for the Diagnosis of Testicular Torsion: A Systematic Review and Meta-analysis of Diagnostic Accuracy. European Urology Focus, 2025.</li>' +
      '</ol>',
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
      `Cena USG jąder we Wrocławiu zależy od zakresu badania, na przykład od tego, czy obejmuje ono ocenę dopplerowską oraz pomiary w pozycji stojącej pod kątem żylaków powrózka. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu ${CLINIC.phone}, gdzie można też potwierdzić zakres badania. Badanie jest prywatne i nie wymaga skierowania.`,
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG jąder?',
    answer:
      `USG jąder we Wrocławiu wykonasz w pracowni USG Bas Clinic przy ${CLINIC.address.street}. Badanie jest prywatne i nie wymaga skierowania, a termin umówisz telefonicznie pod numerem ${CLINIC.phone}. Pracownia przyjmuje od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, a koszt potwierdzisz w cenniku lub podczas rejestracji.`,
  },
];

export default function UsgJaderPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG jąder we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG jąder (USG moszny) to bezbolesne badanie jąder i najądrzy, często uzupełniane oceną dopplerowską przepływu krwi. Pomaga w diagnostyce guzków, bólu i żylaków powrózka nasiennego. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/jadra"
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
