import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'USG ginekologiczne Wrocław - narząd rodny',
  description:
    'USG ginekologiczne we Wrocławiu - badanie macicy i jajników metodą transwaginalną lub przezbrzuszną. Ultrasonografia narządu rodnego prywatnie, bez skierowania.',
  path: '/usg/ginekologiczne/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG ginekologiczne' },
];

const RELATED = ['usg/jama-brzuszna', 'usg/piersi', 'usg/nerki'].map(
  getServiceBySlug
);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG ginekologiczne?',
    content:
      (
      <>
        <p>USG ginekologiczne to ultrasonograficzne badanie narządu rodnego kobiety - macicy, jajników oraz przydatków - wykorzystujące fale ultradźwiękowe. Badanie przebiega bez promieniowania jonizującego i bez nakłuwania skóry, dlatego jest nieinwazyjne i można je bezpiecznie powtarzać. W praktyce stosuje się też nazwy ultrasonografia ginekologiczna, USG narządu rodnego oraz badanie USG ginekologiczne.</p>
        <p>Badanie pozwala uwidocznić budowę i położenie macicy, ocenić jamę macicy i błonę śluzową (endometrium) oraz obejrzeć oba jajniki. Ocenie podlega także zatoka Douglasa, w której można uwidocznić ewentualną obecność wolnego płynu. USG ginekologiczne prowadzi i opisuje lekarz, najczęściej ginekolog.</p>
        <p><strong>USG ginekologiczne obrazuje narządy miednicy mniejszej i opisuje cechy widocznych zmian, ale nie stawia samodzielnie rozpoznania.</strong> Ultrasonografia może szacować na przykład ryzyko, że dana zmiana jest złośliwa, natomiast ostateczny charakter ogniska potwierdza dopiero badanie histopatologiczne. Wynik USG wymaga interpretacji lekarza i nie zastępuje pełnej konsultacji ginekologicznej.</p>
      </>
    ),
  },
  {
    title:
      'Metody dostępu: transwaginalne, przezbrzuszne i przezodbytnicze',
    tocLabel: 'Metody dostępu',
    content:
      (
      <>
        <p>USG ginekologiczne wykonuje się trzema metodami dostępu - transwaginalną (dopochwową), przezbrzuszną i przezodbytniczą - które różnią się sposobem przyłożenia głowicy oraz dokładnością obrazu. O wyborze metody decyduje lekarz na podstawie wskazań, sytuacji klinicznej i komfortu pacjentki.</p>
        <ul>
          <li><strong>USG transwaginalne (dopochwowe)</strong> - głowicę pokrytą jednorazową osłonką wprowadza się do pochwy, blisko ocenianych narządów. Daje najdokładniejszy obraz narządu rodnego i wymaga opróżnionego pęcherza moczowego. To metoda podstawowa.</li>
          <li><strong>USG przezbrzuszne</strong> - głowicę przykłada się do powłok brzucha. Wymaga dobrze wypełnionego pęcherza moczowego, który tworzy okno akustyczne dla fali ultradźwiękowej. Wybiera się je przy dużych zmianach wykraczających poza pole głowicy dopochwowej, u kobiet niewspółżyjących oraz w ciąży.</li>
          <li><strong>USG przezodbytnicze</strong> - głowicę wprowadza się przez odbytnicę. To alternatywa dla dostępu transwaginalnego, gdy nie jest on wykonalny lub akceptowany; obraz jest zwykle dokładniejszy niż w dostępie przezbrzusznym.</li>
        </ul>
        <p>Dostęp transwaginalny daje najwyższą rozdzielczość, ponieważ głowica leży tuż przy narządach i nie musi pokonywać powłok brzusznych. Nie zawsze jest jednak możliwy lub wskazany. Zgodnie z zaleceniami ISUOG metodę dobiera się indywidualnie, a u kobiet, które nie współżyły, stosuje się dostęp przezbrzuszny lub przezodbytniczy - decydują wskazania i zgoda pacjentki, a nie status błony dziewiczej.</p>
        <table>
          <tbody>
            <tr>
              <th>Cecha</th>
              <th>Transwaginalne</th>
              <th>Przezbrzuszne</th>
              <th>Przezodbytnicze</th>
            </tr>
            <tr>
              <td>Pęcherz moczowy</td>
              <td>opróżniony</td>
              <td>wypełniony (okno akustyczne)</td>
              <td>zwykle opróżniony</td>
            </tr>
            <tr>
              <td>Rozdzielczość obrazu</td>
              <td>najwyższa</td>
              <td>niższa</td>
              <td>wyższa niż przezbrzuszne</td>
            </tr>
            <tr>
              <td>Dla kogo</td>
              <td>metoda podstawowa</td>
              <td>duże zmiany, ciąża, kobiety niewspółżyjące</td>
              <td>alternatywa u niewspółżyjących</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    title: 'Co wykrywa USG ginekologiczne?',
    content:
      (
      <>
        <p>USG ginekologiczne uwidacznia zmiany w obrębie macicy, jajników i przydatków oraz opisuje ich cechy ultrasonograficzne. Badanie nie rozpoznaje samodzielnie nowotworu - opisuje cechy zmiany i szacuje jej ryzyko, a charakter ogniska potwierdza dopiero badanie histopatologiczne.</p>
        <p>W obrębie narządu rodnego ultrasonografia ginekologiczna pozwala ocenić między innymi:</p>
        <ul>
          <li><strong>mięśniaki macicy</strong> - ich liczbę, wielkość i położenie (klasyfikowane według lokalizacji na podśluzówkowe, śródścienne i podsurowicówkowe),</li>
          <li>polipy endometrium i inne zmiany w jamie macicy,</li>
          <li>torbiele jajników oraz inne zmiany w obrębie przydatków,</li>
          <li>grubość i strukturę endometrium w odniesieniu do fazy cyklu,</li>
          <li>obraz jajników wielotorbielowatych (PCOM),</li>
          <li>obecność wolnego płynu w zatoce Douglasa,</li>
          <li>położenie wkładki wewnątrzmacicznej (IUD),</li>
          <li>wczesną ciążę wewnątrzmaciczną.</li>
        </ul>
        <p>Niektóre zmiany wymagają badań uzupełniających. Mięśniaki podśluzówkowe i polipy bywają dokładniej widoczne w sonohisterografii (badaniu z podaniem soli fizjologicznej do jamy macicy) lub w histeroskopii, ponieważ sama ultrasonografia ma w ich ocenie ograniczenia.</p>
        <h3>Ocena ryzyka zmian jajnika - O-RADS i modele IOTA</h3>
        <p>Aby ujednolicić opis zmian jajnika, stosuje się systemy oceny ryzyka. System <strong>O-RADS</strong>, opracowany przez Amerykańskie Kolegium Radiologii (ACR), porządkuje cechy zmiany w kategorie ryzyka złośliwości, a modele <strong>IOTA</strong> (ADNEX i Simple Rules) szacują to ryzyko na podstawie zestawu cech ultrasonograficznych. Narzędzia te oceniają prawdopodobieństwo - niskie, pośrednie lub wysokie ryzyko - i pomagają zaplanować dalsze postępowanie: obserwację, badanie uzupełniające lub konsultację ginekologiczno-onkologiczną. Oznaczenie markera CA-125 bywa oceniane jako uzupełnienie obrazu. Żaden z tych systemów nie stawia rozpoznania nowotworu; ostatecznie rozstrzyga badanie histopatologiczne.</p>
      </>
    ),
  },
  {
    title: 'Wskazania do USG ginekologicznego',
    content:
      (
      <>
        <p>Wskazaniem do USG ginekologicznego są objawy zgłaszane przez pacjentkę, kontrola wcześniej rozpoznanych zmian oraz badania profilaktyczne narządu rodnego. Decyzję o wykonaniu i zakresie badania podejmuje lekarz ginekolog.</p>
        <ul>
          <li>nieregularne, obfite lub bolesne miesiączki oraz krwawienia między miesiączkami,</li>
          <li>krwawienia po menopauzie,</li>
          <li>ból podbrzusza i dolegliwości w obrębie miednicy mniejszej,</li>
          <li>kontrola wcześniej stwierdzonych mięśniaków macicy i torbieli jajników,</li>
          <li>ocena narządu rodnego w okresie starań o dziecko oraz w diagnostyce niepłodności,</li>
          <li>podejrzenie zespołu policystycznych jajników (PCOS),</li>
          <li>kontrola położenia wkładki wewnątrzmacicznej,</li>
          <li>potwierdzenie i ocena umiejscowienia wczesnej ciąży,</li>
          <li>badania profilaktyczne u kobiet bez objawów.</li>
        </ul>
        <p>USG ginekologiczne bywa elementem szerszej oceny, gdy lekarz analizuje także sąsiednie narządy. Uzupełnieniem w ramach układu moczowo-płciowego może być wtedy <Link href="/usg/nerki/">USG nerek</Link>, a w profilaktyce kobiet wartościowym badaniem pozostaje <Link href="/usg/piersi/">USG piersi</Link>.</p>
        <h3>Kiedy w cyklu wykonać USG ginekologiczne?</h3>
        <p>U kobiet miesiączkujących rutynowe USG ginekologiczne najlepiej wykonać w pierwszej połowie cyklu, najczęściej między 5. a 10. dniem. Endometrium jest wtedy najcieńsze, co daje najczytelniejszy obraz jamy macicy. Nie jest to bezwzględny wymóg - w sytuacjach pilnych badanie wykonuje się w dowolnym dniu cyklu, także podczas miesiączki.</p>
      </>
    ),
  },
  {
    title: 'Jak przygotować się do USG ginekologicznego i jak przebiega badanie?',
    tocLabel: 'Przygotowanie i przebieg',
    content:
      (
      <>
        <p>Przygotowanie do USG ginekologicznego zależy od metody dostępu, dlatego sposób badania warto ustalić wcześniej z lekarzem. Dostęp przezbrzuszny wymaga wypełnionego pęcherza moczowego, a transwaginalny - pęcherza opróżnionego. Badanie nie wymaga bycia na czczo ani specjalnej diety.</p>
        <ul>
          <li><strong>USG przezbrzuszne</strong> - około godziny przed badaniem zaleca się wypić około 1-1,5 litra niegazowanej wody i nie oddawać moczu, aby pęcherz pozostał wypełniony.</li>
          <li><strong>USG transwaginalne</strong> - bezpośrednio przed badaniem należy oddać mocz, ponieważ wymaga ono opróżnionego pęcherza.</li>
        </ul>
        <h3>Jak przebiega badanie?</h3>
        <p>W dostępie transwaginalnym lekarz wprowadza do pochwy cienką głowicę pokrytą jednorazową osłonką, co może wiązać się z niewielkim, przejściowym dyskomfortem. W dostępie przezbrzusznym głowicę przesuwa się po skórze brzucha pokrytej żelem. Przed badaniem transwaginalnym pacjentka jest informowana o jego przebiegu i wyraża zgodę; zgodnie z zaleceniami ISUOG możliwa jest obecność osoby towarzyszącej.</p>
        <p>Samo badanie trwa zwykle kilkanaście minut. Po jego zakończeniu pacjentka otrzymuje opis wyniku wraz z omówieniem. Szczegóły poszczególnych badań przedstawia <Link href="/usg/">pełna oferta pracowni USG</Link>.</p>
      </>
    ),
  },
  {
    title: 'Endometrium i krwawienia po menopauzie',
    tocLabel: 'Endometrium i krwawienia',
    content:
      (
      <>
        <p>USG przezpochwowe jest badaniem obrazowym pierwszego rzutu u kobiet z krwawieniem po menopauzie, ponieważ pozwala ocenić grubość i strukturę endometrium. Cienkie endometrium wiąże się z niskim ryzykiem raka błony śluzowej macicy, ale samo USG nie wyklucza go całkowicie.</p>
        <p>Grubość endometrium mierzy się w ustandaryzowany sposób, w najgrubszym miejscu, obejmując obie warstwy błony śluzowej. U kobiet miesiączkujących grubość zmienia się wraz z fazą cyklu, dlatego pojedyncza wartość nie jest sama w sobie wskaźnikiem choroby. Inaczej ocenia się sytuację po menopauzie.</p>
        <p>U kobiety z krwawieniem po menopauzie endometrium o grubości do około 4 mm oznacza niskie ryzyko raka błony śluzowej macicy. Taki wynik ma jednak granice: cienkie endometrium nie wyklucza rzadszych typów raka, a krwawienie utrzymujące się lub nawracające wymaga oceny histopatologicznej niezależnie od grubości błony śluzowej. Dlatego zgodnie z aktualnymi zaleceniami ACOG u większości pacjentek z krwawieniem po menopauzie samo USG nie wystarcza - łączy się je z pobraniem wycinka endometrium (biopsją). Ultrasonografia wskazuje, kiedy potrzebna jest dalsza diagnostyka, natomiast rozpoznanie stawia badanie histopatologiczne.</p>
        <p>Inaczej traktuje się przygodnie wykryte pogrubienie endometrium u kobiety po menopauzie bez krwawienia. Taki wynik nie wymaga rutynowo dalszej diagnostyki, a decyzję podejmuje się indywidualnie, biorąc pod uwagę czynniki ryzyka. O interpretacji wyniku i dalszym postępowaniu zawsze decyduje lekarz.</p>
      </>
    ),
  },
  {
    title: 'USG ginekologiczne a USG prenatalne',
    tocLabel: 'USG a USG prenatalne',
    content:
      (
      <>
        <p>USG ginekologiczne nie jest tym samym badaniem co USG prenatalne. Badanie ginekologiczne może potwierdzić wczesną ciążę i jej umiejscowienie w jamie macicy, natomiast USG prenatalne to przesiewowa ocena rozwoju i budowy płodu wykonywana w ściśle określonych tygodniach ciąży.</p>
        <p>We wczesnej ciąży ultrasonografia ginekologiczna uwidacznia pęcherzyk ciążowy, a następnie pęcherzyk żółtkowy, którego obecność w jamie macicy potwierdza ciążę wewnątrzmaciczną. Badanie pomaga też różnicować ciążę prawidłowo umiejscowioną z ciążą pozamaciczną.</p>
        <h3>Podejrzenie ciąży pozamacicznej</h3>
        <p>W podejrzeniu ciąży pozamacicznej w USG poszukuje się pustej jamy macicy oraz zmiany w obrębie przydatków. Rozpoznania nie stawia się jednak na podstawie samego obrazu - ocenia się go łącznie z objawami pacjentki i poziomem hormonu ciążowego (beta-hCG), a sytuacja ta wymaga pilnej konsultacji. To jeden z powodów, dla których wynik USG zawsze interpretuje lekarz.</p>
        <h3>USG prenatalne - inny cel i harmonogram</h3>
        <p>USG prenatalne ocenia płód i wykonuje się je w wyznaczonych oknach czasowych. Zgodnie z rekomendacjami Polskiego Towarzystwa Ginekologów i Położników (PTGiP) badania przesiewowe planuje się między 11. a 14. tygodniem, między 18. a 22. tygodniem oraz w okolicach 28.-32. tygodnia ciąży. USG ginekologiczne ma inny cel - ocenia narządy miednicy mniejszej, a nie rozwój płodu.</p>
      </>
    ),
  },
  {
    title: 'Ograniczenia, bezpieczeństwo i przeciwwskazania',
    tocLabel: 'Ograniczenia i bezpieczeństwo',
    content:
      (
      <>
        <p>USG ginekologiczne jest badaniem bezpiecznym - nie wykorzystuje promieniowania jonizującego, jest nieinwazyjne i można je powtarzać, także w ciąży. Nie ma bezwzględnych przeciwwskazań do ultrasonografii, istnieją natomiast ograniczenia dotyczące dostępu transwaginalnego.</p>
        <p>Dostępu transwaginalnego nie stosuje się u kobiet, które nie współżyły, przy braku zgody lub akceptacji pacjentki, a niekiedy także z przyczyn klinicznych. W takich sytuacjach badanie wykonuje się drogą przezbrzuszną lub przezodbytniczą, dlatego brak możliwości badania dopochwowego nie oznacza rezygnacji z USG.</p>
        <p>Badanie ma też ograniczenia diagnostyczne. Ultrasonografia opisuje cechy zmian i szacuje ich ryzyko, ale nie rozpoznaje nowotworu - rozpoznanie wymaga badania histopatologicznego. Trafność oceny zależy od doświadczenia osoby badającej, jakości aparatu oraz warunków badania, a część zmian (na przykład mięśniaki podśluzówkowe czy polipy) bywa dokładniej widoczna w badaniach uzupełniających. USG ginekologiczne nie zastępuje również cytologii - to badania o różnym celu, ponieważ USG obrazuje narządy, a cytologia ocenia komórki szyjki macicy.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O kwalifikacji do badania, jego przebiegu i interpretacji wyniku decyduje lekarz podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Cena i wizyta we Wrocławiu',
    content:
      (
      <>
        <p>USG ginekologiczne w Bas Clinic wykonujemy przy {CLINIC.address.street} we Wrocławiu, w ramach <Link href="/usg/">pracowni USG</Link>. Badanie jest prywatne i nie wymaga skierowania.</p>
        <p>Cena USG ginekologicznego zależy od zakresu badania i metody dostępu. Aktualne stawki znajdziesz w <Link href="/cennik/">cenniku</Link>, a termin umówisz telefonicznie pod numerem {CLINIC.phone} lub przez <Link href="/rejestracja/">formularz rejestracji</Link>. Pracownia przyjmuje w dni powszednie w godzinach {CLINIC.hours.weekdays}.</p>
        <p>Wynik USG ginekologicznego nie zastępuje konsultacji lekarskiej - jego interpretacja oraz decyzja o dalszym postępowaniu zawsze należą do lekarza.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content:
      (
      <ol>
        <li>Strachowski LM, Jha P, Phillips CH i wsp. O-RADS US v2022: An Update from the ACR Ovarian-Adnexal Reporting and Data System US Committee. Radiology 2023;308(3):e230685 (PMID 37698472).</li>
        <li>Van Calster B, Van Hoorde K, Valentin L i wsp. Evaluating the risk of ovarian cancer before surgery using the ADNEX model. BMJ 2014;349:g5920 (PMID 25320247).</li>
        <li>Timmerman D, Testa AC, Bourne T i wsp. Simple ultrasound-based rules for the diagnosis of ovarian cancer. Ultrasound Obstet Gynecol 2008;31(6):681-690 (PMID 18504770).</li>
        <li>Timmerman D, Planchamp F, Bourne T i wsp. ESGO/ISUOG/IOTA/ESGE Consensus Statement on preoperative diagnosis of ovarian tumors. Ultrasound Obstet Gynecol 2021;58(1):148-168 (PMID 34107646).</li>
        <li>ISUOG Education Committee. Recommendations for basic training in obstetric and gynecological ultrasound. Ultrasound Obstet Gynecol 2014;43(1):113-116 (PMID 24259320).</li>
        <li>Leone FPG, Timmerman D, Bourne T i wsp. Terms, definitions and measurements to describe the sonographic features of the endometrium and intrauterine lesions (IETA consensus). Ultrasound Obstet Gynecol 2010;35(1):103-112 (PMID 20014360).</li>
        <li>American College of Obstetricians and Gynecologists. Committee Opinion No. 734: The Role of Transvaginal Ultrasonography in Evaluating the Endometrium of Women With Postmenopausal Bleeding. Obstet Gynecol 2018;131(5):e124-e129 (PMID 29683909).</li>
        <li>Smith-Bindman R, Kerlikowske K, Feldstein VA i wsp. Endovaginal ultrasound to exclude endometrial cancer and other endometrial abnormalities. JAMA 1998;280(17):1510-1517 (PMID 9809732).</li>
        <li>National Institute for Health and Care Excellence (NICE). NG126: Ectopic pregnancy and miscarriage: diagnosis and initial management. 2019 (aktualizacja 2023).</li>
        <li>Teede HJ, Tay CT, Laven JJE i wsp. Recommendations From the 2023 International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome. J Clin Endocrinol Metab 2023;108(10):2447-2469 (PMID 37580314).</li>
        <li>Munro MG, Critchley HOD, Broder MS, Fraser IS. The FIGO classification of causes of abnormal uterine bleeding (PALM-COEIN). Int J Gynecol Obstet 2011;113(1):3-13.</li>
        <li>Polskie Towarzystwo Ginekologów i Położników (PTGiP), Sekcja Ultrasonografii. Rekomendacje w zakresie przesiewowej diagnostyki ultrasonograficznej w ciąży. Ginekologia Polska 2020.</li>
        <li>StatPearls (NCBI Bookshelf): Pelvic Ultrasound (NBK470360); Gestational Sac Evaluation (NBK551624); Sonography Postmenopausal Assessment (NBK570641); Postmenopausal Bleeding (NBK562188).</li>
      </ol>
    ),
  },
];

const FAQ = [
  {
    question: 'Czy USG ginekologiczne wykrywa raka?',
    answer:
      'USG ginekologiczne nie rozpoznaje samodzielnie raka. Badanie uwidacznia zmiany w macicy, jajnikach i endometrium, opisuje ich cechy i szacuje ryzyko złośliwości, co może wskazywać na potrzebę dalszej diagnostyki. Ostateczne rozpoznanie potwierdza badanie histopatologiczne, a wynik USG interpretuje lekarz.',
  },
  {
    question: 'Czy USG transwaginalne (dopochwowe) boli i czy można je wykonać u dziewicy?',
    answer:
      'USG transwaginalne zwykle nie boli, choć wprowadzenie cienkiej głowicy może wiązać się z niewielkim, przejściowym dyskomfortem. U kobiet, które nie współżyły, badania dopochwowego się nie wykonuje - stosuje się wtedy dostęp przezbrzuszny lub przezodbytniczy. O wyborze metody decydują wskazania i zgoda pacjentki.',
  },
  {
    question: 'Czy do USG ginekologicznego trzeba mieć pełny czy pusty pęcherz?',
    answer:
      'Do USG ginekologicznego przygotowanie pęcherza zależy od metody. USG przezbrzuszne wymaga wypełnionego pęcherza, dlatego zaleca się wypić około 1-1,5 litra wody mniej więcej godzinę przed badaniem. USG transwaginalne wymaga przeciwnie pęcherza opróżnionego, więc bezpośrednio przed badaniem należy oddać mocz.',
  },
  {
    question: 'Ile kosztuje USG ginekologiczne we Wrocławiu?',
    answer:
      `Cena USG ginekologicznego we Wrocławiu zależy od zakresu badania i metody dostępu. Aktualny cennik znajdziesz w zakładce Cennik na stronie Bas Clinic, a termin umówisz pod numerem ${CLINIC.phone}. Badanie jest prywatne i nie wymaga skierowania.`,
  },
  {
    question: 'Czy na USG ginekologiczne potrzebne jest skierowanie?',
    answer:
      'Na USG ginekologiczne wykonywane prywatnie skierowanie nie jest wymagane. Badanie można umówić bezpośrednio. Wynik ultrasonografii interpretuje lekarz w kontekście wywiadu i objawów, dlatego w razie potrzeby zaleca dalsze postępowanie lub badania uzupełniające.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG ginekologiczne?',
    answer:
      `USG ginekologiczne we Wrocławiu wykonasz w pracowni ultrasonografii Bas Clinic przy ${CLINIC.address.street}. Badanie obejmuje ocenę macicy, jajników i przydatków metodą transwaginalną lub przezbrzuszną. Termin umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez formularz rejestracji online, w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function UsgGinekologicznePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG ginekologiczne we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG ginekologiczne to badanie narządu rodnego - macicy i jajników - wykonywane metodą transwaginalną lub przezbrzuszną. Realizujemy je w Bas Clinic we Wrocławiu pod opieką lekarza."
      slug="usg/ginekologiczne"
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
