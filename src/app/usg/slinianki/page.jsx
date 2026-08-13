import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG ślinianek Wrocław - kamica i guzy',
  description:
    'USG ślinianek we Wrocławiu w Bas Clinic - bezbolesna ultrasonografia gruczołów ślinowych: kamica, stany zapalne, guzy. Bez skierowania, prywatnie. Umów termin.',
  path: '/usg/slinianki/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG ślinianek' },
];

const RELATED = ['usg/szyja', 'usg/tarczyca', 'usg/wezly-chlonne'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG ślinianek?',
    content:
      (
      <>
        <p>USG ślinianek to ultrasonograficzne badanie gruczołów ślinowych, które za pomocą fal ultradźwiękowych ocenia ich budowę bez promieniowania jonizującego. Ultrasonografia ślinianek wykorzystuje głowicę liniową o wysokiej rozdzielczości, dzięki czemu obrazowanie ślinianek uwidacznia nawet drobne zmiany w obrębie tych narządów.</p>
        <p>Badanie USG ślinianek obejmuje przede wszystkim parzyste <strong>ślinianki przyuszne</strong> oraz <strong>ślinianki podżuchwowe</strong>, które dzięki powierzchownemu położeniu są dobrze dostępne ocenie ultrasonograficznej. <strong>Ślinianki podjęzykowe</strong> ocenia się w ograniczonym zakresie, ponieważ leżą głęboko pod żuchwą, co utrudnia ich uwidocznienie głowicą.</p>
        <p>W trakcie badania ocenie podlegają również przewody wyprowadzające ślinę oraz okoliczne węzły chłonne. Dzięki temu ultrasonografia gruczołów ślinowych jest podstawowym narzędziem obrazowym w diagnostyce ślinianek.</p>
      </>
    ),
  },
  {
    title: 'Co wykrywa USG ślinianek? Kamica, stany zapalne i guzy',
    tocLabel: 'Co wykrywa',
    content:
      (
      <>
        <p>USG ślinianek uwidacznia najczęstsze nieprawidłowości gruczołów ślinowych: kamicę, stany zapalne, torbiele oraz zmiany ogniskowe. Badanie ocenia strukturę narządu i charakter widocznych zmian, jednak ostateczna interpretacja należy do lekarza.</p>
        <h3>Kamica ślinianek</h3>
        <p><strong>Kamica ślinianek</strong> (sialolithiasis) to złogi w przewodach wyprowadzających, które utrudniają odpływ śliny. Ultrasonografia jest tu metodą obrazową pierwszego wyboru - w opracowaniach diagnostycznych czułość i swoistość wykrywania złogów osiągają wartości rzędu 90-95 procent (Koch i wsp., 2021). Złogi o wielkości 1-2 mm bywają widoczne, ale najmniejsze, słabo uwapnione kamienie do około 3-4 mm mogą zostać przeoczone; pośrednią wskazówką jest wtedy poszerzenie przewodu ślinowego.</p>
        <h3>Stany zapalne, ropnie i torbiele</h3>
        <ul>
          <li><strong>Stany zapalne i ropnie</strong> - badanie ocenia zasięg zapalenia oraz obecność ewentualnego zbiornika ropnego.</li>
          <li><strong>Torbiele</strong> - dobrze odgraniczone zmiany płynowe w obrębie ślinianki.</li>
          <li>Przebudowa miąższu w chorobach autoimmunologicznych, na przykład w zespole Sjögrena.</li>
        </ul>
        <h3>Zmiany ogniskowe i guzy</h3>
        <p>W ocenie zmian ogniskowych USG opisuje wielkość, granice i unaczynienie guza (z użyciem opcji Dopplera), jednak <strong>nie rozpoznaje samodzielnie nowotworu ślinianki</strong>. Cechy takie jak niejednorodna struktura czy wzmożone unaczynienie zwiększają podejrzenie zmiany złośliwej, ale charakter guza potwierdza dopiero <strong>biopsja aspiracyjna cienkoigłowa</strong> (BAC) i badanie histopatologiczne.</p>
      </>
    ),
  },
  {
    title: 'Wskazania - kiedy wykonać USG ślinianek?',
    tocLabel: 'Wskazania',
    content:
      (
      <>
        <p>Wskazaniem do USG ślinianek są dolegliwości w okolicy gruczołów ślinowych oraz wyczuwalne zmiany wymagające oceny. Ultrasonograficzne badanie ślinianek bywa też zlecane w ramach kontroli wcześniej rozpoznanych nieprawidłowości.</p>
        <ul>
          <li>Obrzęk i ból okolicy ślinianki, zwłaszcza nasilające się podczas jedzenia - objaw sugerujący kamicę ślinianek.</li>
          <li>Wyczuwalny guzek lub zgrubienie w okolicy przyusznej albo podżuchwowej.</li>
          <li>Nawracające stany zapalne ślinianki.</li>
          <li>Suchość w jamie ustnej w toku diagnostyki, w tym chorób autoimmunologicznych.</li>
          <li>Kontrola znanych zmian ogniskowych lub monitorowanie po leczeniu.</li>
        </ul>
        <p>O zasadności badania oraz interpretacji wyniku decyduje lekarz, uwzględniając całość obrazu klinicznego.</p>
      </>
    ),
  },
  {
    title: 'USG ślinianek a inne metody obrazowania',
    tocLabel: 'Porównanie metod',
    content:
      (
      <>
        <p>USG ślinianek to badanie celowane, skupione wyłącznie na gruczołach ślinowych, podczas gdy <Link href="/usg/szyja/">USG szyi</Link> ma charakter parasolowy i obejmuje szerszy obszar tej okolicy. Wybór metody zależy od objawów i pytania klinicznego postawionego przez lekarza.</p>
        <p>Gdy dolegliwości są zlokalizowane w śliniance przyusznej lub podżuchwowej, zwykle wystarcza ukierunkowane USG gruczołów ślinowych. Przy ocenie szerszego rejonu szyi lekarz może zalecić dodatkowo <Link href="/usg/wezly-chlonne/">USG węzłów chłonnych</Link>, a w diagnostyce sąsiednich narządów również <Link href="/usg/tarczyca/">USG tarczycy</Link>.</p>
        <p>W odróżnieniu od metod wykorzystujących promieniowanie lub wziernikowanie ultrasonografia jest nieinwazyjna i powtarzalna, dlatego zwykle jest badaniem pierwszego rzutu.</p>
        <table>
          <tbody>
            <tr>
              <th>Metoda</th>
              <th>Główne zastosowanie</th>
              <th>Promieniowanie jonizujące</th>
              <th>Inwazyjność</th>
            </tr>
            <tr>
              <td>USG ślinianek</td>
              <td>kamica, stany zapalne, ocena guza</td>
              <td>nie</td>
              <td>nieinwazyjne</td>
            </tr>
            <tr>
              <td>Tomografia komputerowa (TK)</td>
              <td>uwapnione złogi, ocena struktur kostnych</td>
              <td>tak</td>
              <td>nieinwazyjne</td>
            </tr>
            <tr>
              <td>Rezonans magnetyczny (RM)</td>
              <td>rozległość guza, tkanki miękkie</td>
              <td>nie</td>
              <td>nieinwazyjne</td>
            </tr>
            <tr>
              <td>Sialendoskopia</td>
              <td>wgląd do wnętrza przewodu, usuwanie złogów</td>
              <td>nie</td>
              <td>zabiegowe</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    title: 'Jak przebiega USG ślinianek i jak się przygotować?',
    tocLabel: 'Przebieg i przygotowanie',
    content:
      (
      <>
        <p>USG ślinianek przebiega w pozycji leżącej, głowicą liniową przesuwaną po skórze pokrytej żelem. Procedura jest bezbolesna, nie wiąże się z promieniowaniem jonizującym i zwykle trwa kilkanaście minut.</p>
        <h3>Jak przebiega USG ślinianek?</h3>
        <ol>
          <li>Pacjent kładzie się i odsłania okolicę szyi oraz żuchwy.</li>
          <li>Lekarz nanosi żel i ocenia ślinianki przyuszne, podżuchwowe, przewody wyprowadzające oraz okoliczne węzły chłonne.</li>
          <li>W razie potrzeby włącza opcję Dopplera, aby ocenić unaczynienie zmiany.</li>
          <li>Po badaniu przygotowuje opis, który pacjent najczęściej otrzymuje bezpośrednio po wizycie.</li>
        </ol>
        <h3>Jak przygotować się do USG ślinianek?</h3>
        <p>USG ślinianek nie wymaga specjalnego przygotowania - nie trzeba być na czczo ani odstawiać leków. Warto zdjąć biżuterię z szyi i uszu, a panów z gęstym zarostem lekarz może poprosić o ogolenie okolicy dla wyraźniejszego obrazu. Pomocne bywa odpowiednie nawodnienie oraz zabranie poprzednich wyników badań obrazowych ślinianek, jeśli pacjent je posiada.</p>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo i ograniczenia USG ślinianek',
    tocLabel: 'Bezpieczeństwo i ograniczenia',
    content:
      (
      <>
        <p>USG ślinianek jest badaniem bezpiecznym i nieinwazyjnym - nie wykorzystuje promieniowania jonizującego, dlatego nie ma typowych przeciwwskazań i w razie potrzeby można je powtarzać. Mimo to każda metoda obrazowa ma swoje granice.</p>
        <h3>Ograniczenia USG ślinianek</h3>
        <p>Ultrasonografia ślinianek jest metodą pierwszego wyboru w diagnostyce kamicy i stanów zapalnych, nie odpowiada jednak na każde pytanie kliniczne. Najmniejsze, słabo uwapnione złogi mogą umknąć ocenie, a obraz ślinianek podjęzykowych bywa ograniczony przez ich głębokie położenie.</p>
        <ul>
          <li>USG nie różnicuje ostatecznie guza łagodnego od złośliwego - charakter zmiany potwierdza biopsja aspiracyjna cienkoigłowa i badanie histopatologiczne.</li>
          <li>W kierunku zespołu Sjögrena badanie jest wysoce swoiste, lecz pełni rolę wspierającą; rozpoznanie opiera się na kryteriach klinicznych i serologicznych (Zhou i wsp., 2018).</li>
          <li>W wybranych sytuacjach lekarz uzupełnia diagnostykę o tomografię komputerową, rezonans magnetyczny lub sialendoskopię.</li>
        </ul>
        <p>Z tego względu wynik USG zawsze interpretuje się w kontekście obrazu klinicznego, a o dalszym postępowaniu decyduje lekarz.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O zasadności badania, jego interpretacji i ewentualnej dalszej diagnostyce decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje USG ślinianek we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content:
      (
      <>
        <p>Cena USG ślinianek we Wrocławiu zależy od zakresu badania oraz tego, czy oceną zostaną objęte sąsiednie struktury szyi. Aktualny koszt znajdziesz w zakładce <Link href="/cennik/">cennik</Link>, a dokładną kwotę potwierdzisz podczas rejestracji.</p>
        <p>Badanie wykonujemy prywatnie, bez skierowania, w pracowni USG Bas Clinic we Wrocławiu. Dogodny termin <Link href="/rejestracja/">umówisz online</Link> lub telefonicznie, a pełną ofertę diagnostyki przedstawia <Link href="/usg/">pracownia USG</Link>.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content:
      (
      <ol>
        <li>Koch M. i wsp. Ultrasound in Inflammatory and Obstructive Salivary Gland Diseases: Own Experiences and a Review of the Literature. J Clin Med 2021; 10(16): 3547 (PMID 34441850).</li>
        <li>Zhou M. i wsp. Diagnostic accuracy of salivary gland ultrasonography with different scoring systems in Sjögren syndrome: a systematic review and meta-analysis. Sci Rep 2018 (PMID 30459471).</li>
        <li>OMERACT Ultrasound Working Group. Konsensusowy, półilościowy system oceny ultrasonograficznej dużych ślinianek (skala szarości 0-3) w pierwotnym zespole Sjögrena.</li>
        <li>The differential diagnosis of parotid gland tumours with high-resolution ultrasound in otolaryngological practice. Eur Arch Otorhinolaryngol 2017 (PMC5500678).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Co wykrywa USG ślinianek?',
    answer:
      'USG ślinianek wykrywa najczęstsze nieprawidłowości gruczołów ślinowych, takie jak kamica, stany zapalne, ropnie, torbiele oraz zmiany ogniskowe. Badanie ocenia strukturę ślinianek przyusznych i podżuchwowych oraz cechy widocznych zmian, jednak charakter zmiany ogniskowej potwierdza dalsza diagnostyka, a wynik interpretuje lekarz.',
  },
  {
    question: 'Czy USG ślinianek wykrywa kamicę ślinianek?',
    answer:
      'USG ślinianek uwidacznia kamicę ślinianek, czyli złogi w przewodach wyprowadzających ślinę, które utrudniają jej odpływ. Badanie jest tu metodą obrazową pierwszego wyboru, pomocną zwłaszcza gdy ból w okolicy ślinianki nasila się podczas jedzenia. Najmniejsze złogi bywają jednak trudne do uwidocznienia, a o postępowaniu decyduje lekarz.',
  },
  {
    question: 'Czy do USG ślinianek trzeba się przygotować?',
    answer:
      'Do USG ślinianek nie trzeba się specjalnie przygotowywać - badanie nie wymaga bycia na czczo ani odstawiania leków. Warto zdjąć biżuterię z szyi i uszu oraz zabrać poprzednie wyniki badań obrazowych ślinianek, jeśli pacjent je posiada. Pomocne bywa też odpowiednie nawodnienie w dniu wizyty.',
  },
  {
    question: 'Czy na USG ślinianek potrzebne jest skierowanie?',
    answer:
      'Na USG ślinianek nie jest potrzebne skierowanie - badanie wykonywane jest prywatnie, więc pacjent może umówić je samodzielnie. Wystarczy ustalić dogodny termin w pracowni USG Bas Clinic we Wrocławiu, telefonicznie lub online, a aktualny koszt potwierdzić w cenniku.',
  },
  {
    question: 'Czy USG ślinianek rozpoznaje zespół Sjögrena?',
    answer:
      'USG ślinianek nie rozpoznaje zespołu Sjögrena samodzielnie - schorzenie to rozpoznaje się klinicznie oraz na podstawie badań serologicznych. Ultrasonografia jest tu wysoce swoista i uwidacznia typową przebudowę miąższu ślinianek, dostarczając obrazu wspierającego diagnostykę, a interpretacją wyniku zajmuje się lekarz.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG ślinianek?',
    answer:
      `USG ślinianek we Wrocławiu wykonasz w pracowni USG Bas Clinic przy ${CLINIC.address.street}. Badanie jest prywatne i nie wymaga skierowania, a termin umówisz telefonicznie pod numerem ${CLINIC.phone}. Pracownia przyjmuje od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, a koszt potwierdzisz w cenniku lub podczas rejestracji.`,
  },
];

export default function UsgSlinianekPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG ślinianek we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG ślinianek to bezbolesne badanie ślinianek przyusznych i podżuchwowych, pomocne w ocenie kamicy, stanów zapalnych i zmian ogniskowych. Wykonujemy je w Bas Clinic we Wrocławiu."
      slug="usg/slinianki"
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
