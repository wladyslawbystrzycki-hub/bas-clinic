import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Wybielanie zębów Wrocław - cena i metody',
  description: 'Wybielanie zębów we Wrocławiu - gabinetowe i nakładkowe pod nadzorem stomatologa. Dowiedz się, jak działa, jak długo utrzymuje się efekt i ile kosztuje zabieg.',
  path: '/stomatologia/wybielanie-zebow/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Stomatologia estetyczna', href: '/stomatologia/estetyczna/' },
  { label: 'Wybielanie zębów' },
];

const FAQ = [
  {
    question: 'Ile kosztuje wybielanie zębów we Wrocławiu?',
    answer: 'Cena wybielania zębów we Wrocławiu zależy od metody (gabinetowe, nakładkowe lub łączone), liczby cykli i stanu wyjściowego zębów. Zabieg zwykle poprzedza higienizacja, co również wpływa na koszt. Aktualne ceny i dobór metody ustalamy podczas konsultacji, a bieżący cennik dostępny jest na stronie kliniki.',
  },
  {
    question: 'Czy wybielanie zębów jest szkodliwe dla szkliwa?',
    answer: 'Wybielanie zębów wykonywane pod nadzorem stomatologa nie powoduje klinicznie istotnego uszkodzenia szkliwa. Najczęstszym skutkiem ubocznym jest przejściowa nadwrażliwość zębów, która zwykle ustępuje w ciągu kilku dni. Obserwowane zmiany powierzchni szkliwa są niewielkie i odwracalne dzięki remineralizacji śliną.',
  },
  {
    question: 'Jak długo utrzymuje się efekt wybielania zębów?',
    answer: 'Efekt wybielania zębów utrzymuje się różnie długo, od kilkunastu miesięcy do kilku lat, i stopniowo słabnie pod wpływem kawy, herbaty, wina oraz tytoniu. Biała dieta po zabiegu, dobra higiena i regularna higienizacja wyraźnie przedłużają rezultat, a nakładki pozwalają go odświeżyć.',
  },
  {
    question: 'Wybielanie zębów w gabinecie czy w domu - co wybrać?',
    answer: 'Wybielanie w gabinecie daje szybki efekt już po jednej wizycie, a nadzorowane wybielanie nakładkowe w domu działa stopniowo, lecz zwykle trwalej. Badania nie wskazują jednej najlepszej metody, bo obie są porównywalnie skuteczne. Wybór zależy od oczekiwań i wrażliwości zębów, dlatego ustala się go ze stomatologiem.',
  },
  {
    question: 'Czy wybielanie wybiela też plomby, korony i licówki?',
    answer: 'Wybielanie nie rozjaśnia plomb, koron, mostów ani licówek, ponieważ materiały te są nieporowate i nie reagują na nadtlenek. Po wybieleniu zębów naturalnych widoczne uzupełnienia mogą wymagać wymiany, aby dopasować je do nowego odcienia. Dlatego protetykę planuje się zwykle po zakończeniu wybielania.',
  },
  {
    question: 'Gdzie we Wrocławiu wykonać wybielanie zębów w Bas Clinic?',
    answer: `Gabinet stomatologiczny Bas Clinic mieści się przy ${CLINIC.address.street} we Wrocławiu. Na wybielanie zębów umówisz się od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Metodę wybielania dobieramy podczas konsultacji.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest profesjonalne wybielanie zębów we Wrocławiu?',
    tocLabel: 'Czym jest wybielanie?',
    content:
      (
      <>
        <p><strong>Profesjonalne wybielanie zębów</strong> to kontrolowany zabieg stomatologiczny, w którym <strong>nadtlenek wodoru</strong> lub <strong>nadtlenek karbamidu</strong> rozjaśnia naturalny odcień zębów o kilka stopni w skali koloru. W odróżnieniu od higienizacji, która usuwa zewnętrzny osad, wybielanie zmienia barwę samej twardej tkanki zęba.</p>
        <p>Aby dobrać metodę, najpierw trzeba zrozumieć przyczynę przebarwienia. <strong>Przebarwienia zewnątrzpochodne</strong> powstają na powierzchni szkliwa pod wpływem kawy, herbaty, czerwonego wina i tytoniu, a usuwa się je mechanicznie podczas <Link href="/stomatologia/higienizacja/">higienizacji</Link> (skaling, piaskowanie, polerowanie). <strong>Przebarwienia wewnątrzpochodne</strong> leżą wewnątrz tkanki zęba i wynikają z wieku, działania leków takich jak tetracyklina, fluorozy lub leczenia kanałowego, dlatego dopiero one wymagają chemicznego wybielania nadtlenkiem.</p>
        <p>Wybielanie to jeden z najczęstszych zabiegów <Link href="/stomatologia/estetyczna/">stomatologii estetycznej</Link> i często jest pierwszym krokiem do poprawy estetyki uśmiechu, jeszcze przed dalszymi zabiegami.</p>
      </>
    ),
  },
  {
    title: 'Jak działa wybielanie? Nadtlenek wodoru i nadtlenek karbamidu',
    tocLabel: 'Jak działa?',
    content:
      (
      <>
        <p>Wybielanie działa przez utlenianie. Nadtlenek przenika przez szkliwo i zębinę, a uwolniony aktywny tlen rozkłada barwne związki, czyli chromogeny, nagromadzone w tkance zęba. Dzięki temu ząb staje się jaśniejszy w całej swojej grubości, a nie tylko na powierzchni.</p>
        <p>W praktyce używa się dwóch związków. Nadtlenek wodoru działa szybko i w wyższych stężeniach jest podstawą wybielania gabinetowego. Nadtlenek karbamidu rozkłada się wolniej i uwalnia około jednej trzeciej swojej masy jako nadtlenek wodoru, więc 10% nadtlenku karbamidu odpowiada w przybliżeniu 3,6% nadtlenku wodoru. Z tego powodu niższe stężenia stosuje się dłużej, w metodzie nakładkowej.</p>
        <p>Dla efektu znaczenie ma nie tyle samo stężenie, ile łączna dawka i czas kontaktu nadtlenku z zębem. To tłumaczy, dlaczego krótka, mocna sesja w gabinecie oraz dłuższe, łagodniejsze wybielanie nakładkowe potrafią dać porównywalny rezultat.</p>
      </>
    ),
  },
  {
    title: 'Wybielanie gabinetowe, nakładkowe czy drogeryjne?',
    tocLabel: 'Metody wybielania',
    content:
      (
      <>
        <p>Profesjonalnie zęby wybiela się dwiema drogami: <strong>wybielanie gabinetowe</strong> z wyższym stężeniem nadtlenku, często aktywowane lampą LED, oraz nadzorowane <strong>wybielanie nakładkowe</strong> z indywidualnymi nakładkami i żelem o niższym stężeniu, stosowane przez pacjenta w domu. Trzecia kategoria to preparaty drogeryjne (paski, pasty, żele bez recepty) o znikomej zawartości nadtlenku.</p>
        <table>
          <tbody>
            <tr>
              <th>Cecha</th>
              <th>Gabinetowe</th>
              <th>Nakładkowe</th>
              <th>Drogeryjne</th>
            </tr>
            <tr>
              <td>Stężenie i nadzór</td>
              <td>wysokie, pod kontrolą stomatologa</td>
              <td>niższe, nakładki dobrane przez stomatologa</td>
              <td>bardzo niskie, bez nadzoru</td>
            </tr>
            <tr>
              <td>Tempo efektu</td>
              <td>szybki, już po jednej wizycie</td>
              <td>stopniowy, w ciągu kilkunastu dni</td>
              <td>ograniczony, powolny</td>
            </tr>
            <tr>
              <td>Trwałość</td>
              <td>szybki efekt, częstszy nawrót koloru</td>
              <td>efekt zwykle trwalszy</td>
              <td>krótkotrwała</td>
            </tr>
            <tr>
              <td>Zastosowanie</td>
              <td>wyraźny efekt w krótkim czasie, kontrola nadwrażliwości</td>
              <td>wybielanie i podtrzymanie efektu</td>
              <td>odświeżenie koloru</td>
            </tr>
          </tbody>
        </table>
        <p>Przeglądy systematyczne nie wskazują jednej najlepszej metody profesjonalnej: gabinetowe i nadzorowane nakładkowe dają porównywalną zmianę koloru, choć gabinetowe działa szybciej, a nakładkowe zwykle trwalej. W metodzie nakładkowej 10% nadtlenek karbamidu bywa równie skuteczny jak wyższe stężenia, przy mniejszym ryzyku nadwrażliwości.</p>
        <h3>Dlaczego profesjonalne, a nie drogeryjne?</h3>
        <p>Preparaty bez recepty kuszą ceną, ale ich skuteczność ogranicza prawo. W Unii Europejskiej produkty zawierające lub uwalniające od 0,1% do 6% nadtlenku wodoru mogą być sprzedawane wyłącznie lekarzom dentystom, a pierwsze użycie w cyklu wykonuje dentysta lub odbywa się pod jego nadzorem. Nie wolno ich też stosować u osób poniżej 18. roku życia (dyrektywa Rady 2011/84/UE). Produkty o stężeniu powyżej 6% są w ogóle niedozwolone, a swobodnie dostępne kosmetyki do 0,1% dają znikomy efekt. Skuteczne i bezpieczne wybielanie wymaga więc nadzoru stomatologa.</p>
      </>
    ),
  },
  {
    title: 'Jak przebiega wybielanie zębów we Wrocławiu krok po kroku?',
    tocLabel: 'Przebieg zabiegu',
    content:
      (
      <>
        <p>Wybielanie poprzedza kwalifikacja u stomatologa, a sam zabieg gabinetowy trwa zwykle od około 45 do 90 minut. Przebieg wygląda następująco:</p>
        <ol>
          <li><strong>Badanie i kwalifikacja</strong> - lekarz ocenia stan zębów i dziąseł, ustala przyczynę przebarwień, w razie potrzeby zleca zdjęcie RTG oraz wyklucza próchnicę i nieszczelne wypełnienia.</li>
          <li><strong>Higienizacja</strong> - przed wybielaniem usuwa się kamień i osad, aby żel działał równomiernie na czystym szkliwie.</li>
          <li><strong>Ocena odcienia wyjściowego</strong> - kolor zębów określa się na skali VITA i dokumentuje, aby później porównać efekt.</li>
          <li><strong>Zabezpieczenie tkanek miękkich</strong> - dziąsła i wargi chroni się koferdamem lub żelem ochronnym przed kontaktem z nadtlenkiem.</li>
          <li><strong>Aplikacja żelu wybielającego</strong> - żel z nadtlenkiem nakłada się na zęby, a w metodzie gabinetowej dodatkowo aktywuje lampą LED, w kilku kolejnych cyklach.</li>
          <li><strong>Zalecenia po zabiegu</strong> - pacjent otrzymuje wskazówki dotyczące białej diety i łagodzenia ewentualnej nadwrażliwości.</li>
        </ol>
        <p>W metodzie nakładkowej stomatolog pobiera wyciski i wykonuje indywidualne nakładki, a pacjent nakłada żel samodzielnie w domu, zwykle przez 1 do 2 tygodni, kontrolując postęp na wizytach.</p>
      </>
    ),
  },
  {
    title: 'Czy wybielanie niszczy szkliwo? Bezpieczeństwo i nadwrażliwość zębów',
    tocLabel: 'Bezpieczeństwo',
    content:
      (
      <>
        <p>Przy prawidłowym stosowaniu pod nadzorem stomatologa wybielanie nadtlenkiem nie powoduje klinicznie istotnego uszkodzenia <strong>szkliwa</strong>. Najczęstszym działaniem niepożądanym jest przejściowa <strong>nadwrażliwość zębów</strong> oraz podrażnienie dziąseł.</p>
        <p>Nadwrażliwość i podrażnienie dziąseł to najczęściej zgłaszane skutki uboczne wybielania (przegląd Cochrane, 2018). Dolegliwości bywają odczuwane nawet przez około dwie trzecie pacjentów we wczesnej fazie zabiegu, zwykle pojawiają się w ciągu 2 do 3 dni i ustępują samoistnie około czwartego dnia. Obserwowane w badaniach zmiany mikrotwardości szkliwa są niewielkie i odwracalne dzięki naturalnej remineralizacji śliną.</p>
        <h3>Jak ograniczamy nadwrażliwość po wybielaniu?</h3>
        <p>Potwierdzone metody łagodzenia nadwrażliwości to preparaty z azotanem potasu i fluorkiem sodu oraz pasty z nanohydroksyapatytem i argininą, które znoszą nadwrażliwość bez pogarszania efektu wybielania. Pomaga także dobór niższego stężenia żelu i rozłożenie zabiegu w czasie.</p>
        <p>Z góry nie można obiecać konkretnego rezultatu. Jakość części badań nad wybielaniem jest ograniczona, dlatego efekt zależy od indywidualnych uwarunkowań i bywa różny u różnych osób.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania do wybielania zębów',
    tocLabel: 'Przeciwwskazania',
    content:
      (
      <>
        <p>Wybielanie jest zabiegiem estetycznym, wykonywanym z wyboru, dlatego w części sytuacji należy je odroczyć lub od niego odstąpić. Do najważniejszych przeciwwskazań należą:</p>
        <ul>
          <li><strong>ciąża i karmienie piersią</strong> - jako zabieg elektywny zaleca się odroczenie do czasu po porodzie i zakończeniu laktacji;</li>
          <li><strong>wiek poniżej 18 lat</strong> - produktów uwalniających powyżej 0,1% nadtlenku wodoru nie wolno stosować u osób niepełnoletnich;</li>
          <li><strong>czynna próchnica i nieszczelne wypełnienia</strong> - wymagają wyleczenia przed zabiegiem, ponieważ nadtlenek przenika przez twarde tkanki;</li>
          <li><strong>choroby przyzębia, recesje i odsłonięte szyjki zębów</strong> - zwiększają ryzyko nasilonej nadwrażliwości, dlatego stan dziąseł najpierw się stabilizuje;</li>
          <li><strong>znaczna nadwrażliwość zębów</strong> oraz alergia na składniki preparatu;</li>
          <li>przebarwienia oporne na wybielanie (tetracyklinowe, fluoroza) - nie są bezwzględnym przeciwwskazaniem, ale wymagają omówienia realnego rokowania.</li>
        </ul>
        <p>O ostatecznej kwalifikacji do zabiegu zawsze decyduje lekarz dentysta podczas badania.</p>
      </>
    ),
  },
  {
    title: 'Czego nie da się wybielić? Korony, licówki i przebarwienia oporne',
    tocLabel: 'Czego nie wybielimy?',
    content:
      (
      <>
        <p>Wybielaniu poddają się wyłącznie zęby naturalne. Nadtlenek nie rozjaśnia uzupełnień protetycznych ani wypełnień, ponieważ korony, mosty, <Link href="/stomatologia/licowki/">licówki</Link> oraz wypełnienia kompozytowe i ceramiczne są nieporowate i nie reagują na utleniacz.</p>
        <p>Wpływa to na kolejność zabiegów estetycznych. Jeśli w strefie estetycznej znajdują się widoczne uzupełnienia, po wybieleniu zębów własnych często trzeba je wymienić, aby dopasować odcień. Prawidłowa kolejność jest następująca: najpierw wybielić zęby naturalne, odczekać około dwóch tygodni na stabilizację koloru, a dopiero potem dobrać nowe licówki lub korony. Mniejsze korekty można wykonać metodą <Link href="/stomatologia/bonding/">bondingu kompozytowego</Link> albo w ramach <Link href="/stomatologia/odbudowa-zebow/">odbudowy zębów</Link>.</p>
        <h3>Przebarwienia oporne na wybielanie</h3>
        <p>Niektóre przebarwienia wewnątrzpochodne słabo reagują na nadtlenek. Przebarwienia tetracyklinowe oraz fluoroza wbudowują się trwale w strukturę zęba, dlatego rokowanie wybielania jest tu ograniczone, a często lepszym rozwiązaniem są licówki.</p>
        <h3>Wybielanie zęba martwego od wewnątrz</h3>
        <p>Pojedynczy ciemny ząb po leczeniu kanałowym wybiela się metodą wewnętrzną, nazywaną walking bleach. Po izolacji koferdamem i założeniu około 2 mm bariery nad wypełnieniem kanałowym środek wybielający umieszcza się w komorze zęba i wymienia co około dwa tygodnie. Zabieg prowadzi się ostrożnie ze względu na rzadkie ryzyko zewnętrznej resorpcji przyszyjkowej korzenia.</p>
      </>
    ),
  },
  {
    title: 'Jak długo utrzymuje się efekt wybielania?',
    tocLabel: 'Trwałość efektu',
    content:
      (
      <>
        <p>Efekt wybielania nie jest trwały na stałe. Utrzymuje się różnie długo, u części pacjentów kilkanaście miesięcy, u innych dłużej, i stopniowo słabnie pod wpływem barwiących pokarmów, używek oraz indywidualnych cech zębów. Wybielanie gabinetowe daje szybki efekt, ale częściej dochodzi do nawrotu koloru, dlatego nakładki bywają używane do podtrzymania rezultatu.</p>
        <h3>Biała dieta po wybielaniu</h3>
        <p>Przez pierwsze dni po zabiegu, gdy szkliwo jest najbardziej podatne na przebarwienia, zaleca się tak zwaną białą dietę. Najlepiej ograniczyć wtedy kawę, herbatę, czerwone wino, buraki, curry i inne intensywnie barwiące produkty oraz powstrzymać się od palenia tytoniu.</p>
        <p>Efekt przedłuża też codzienna higiena i regularna <Link href="/stomatologia/higienizacja/">higienizacja</Link>, która usuwa świeży osad, zanim utrwali się jako przebarwienie. U osób dbających o zęby rezultat utrzymuje się zauważalnie dłużej.</p>
      </>
    ),
  },
  {
    title: 'Ile kosztuje wybielanie zębów we Wrocławiu?',
    tocLabel: 'Cena we Wrocławiu',
    content:
      (
      <>
        <p>Cena wybielania zębów we Wrocławiu zależy przede wszystkim od wybranej metody, liczby cykli oraz stanu wyjściowego zębów. Inaczej wycenia się jednorazowe wybielanie gabinetowe z użyciem lampy, a inaczej wybielanie nakładkowe, które obejmuje wykonanie indywidualnych nakładek i żel do stosowania w domu.</p>
        <p>Na ostateczny koszt wpływa również przygotowanie, ponieważ zabieg zwykle poprzedza higienizacja, a niekiedy wcześniejsze leczenie próchnicy. Aktualne ceny poszczególnych wariantów znajdziesz w naszym <Link href="/cennik/">cenniku</Link>, a najlepszą metodę i jej koszt ustalisz na konsultacji. Wizytę możesz <Link href="/rejestracja/">umówić online</Link>.</p>
        <p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O kwalifikacji do wybielania, doborze metody i ewentualnych przeciwwskazaniach decyduje lekarz dentysta podczas indywidualnej wizyty.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content:
      (
      <ol>
        <li>Aidos M i wsp. Comparison of in-office and at-home bleaching techniques: an umbrella review. Heliyon. 2024;10(3):e25833.</li>
        <li>Butera A i wsp. Evaluation of the Effectiveness of Different Types of Professional Tooth Whitening: A Systematic Review. Bioengineering (Basel). 2024.</li>
        <li>de Geus JL i wsp. At-home bleaching: przegląd systematyczny z metaanalizą. Operative Dentistry. 2018 (PMID 29949477).</li>
        <li>Giachetti L i wsp. At-home a in-office bleaching, 9-miesięczne badanie RCT. J Am Dent Assoc. 2010 (PMID 21037194).</li>
        <li>Eachempati P i wsp. Home-based chemically-induced whitening (bleaching) of teeth in adults. Cochrane Database of Systematic Reviews. 2018;12:CD006202 (PMID 30562408).</li>
        <li>Wang Y i wsp. Środki znoszące nadwrażliwość podczas wybielania, przegląd systematyczny i metaanaliza. J Dent. 2015;43(8):913-923 (PMID 25913140).</li>
        <li>Moharam LM i wsp. Nanohydroksyapatyt i arginina a nadwrażliwość po wybielaniu, RCT. J Clin Exp Dent. 2022 (PMID 35765357).</li>
        <li>Markovic J i wsp. Hydrogen Peroxide Release Kinetics of Four Tooth Whitening Products. Materials (Basel). 2021 (PMCID PMC8708249).</li>
        <li>Carey CM. Tooth Whitening: What We Now Know. J Evid Based Dent Pract. 2014.</li>
        <li>Sulieman M. An overview of tooth discoloration. Dental Update. 2005 (PMID 16262034).</li>
        <li>Cloud JJ, Weibling B. Whitening tetracycline-stained teeth. Dentistry Today (PMID 20055044).</li>
        <li>StatPearls (NCBI Bookshelf). Internal Tooth Whitening. NBK603756.</li>
        <li>American Dental Association. Oral Health Topics: Whitening; MouthHealthy: Teeth Whitening.</li>
        <li>Dyrektywa Rady 2011/84/UE z dnia 20 września 2011 r.; załącznik III poz. 12 rozporządzenia (WE) nr 1223/2009.</li>
      </ol>
    ),
  },
];

export default function WybielanieZebowPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Wybielanie zębów Wrocław"
      heroSubtitle="Stomatologia estetyczna"
      heroDescription="Profesjonalne wybielanie zębów w gabinecie i metodą nakładkową. Bezpiecznie rozjaśniamy zęby nawet o kilka odcieni w ciągu jednej wizyty."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      faqImage="/uploads/services/wybielanie-zebow-zabieg-bas-clinic-wroclaw.webp"
      faqImageAlt="Zabieg wybielania zębów w gabinecie Bas Clinic we Wrocławiu"
      slug="stomatologia/wybielanie-zebow"
    />
  );
}
