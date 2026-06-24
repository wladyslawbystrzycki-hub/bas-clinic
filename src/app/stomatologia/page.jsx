import { generatePageMetadata } from '@/lib/metadata';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import ServiceList from '../components/ServiceList';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import Testimonials from '../components/Testimonials';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import FAQPageSchema from '../components/schema/FAQPageSchema';
import ExpertInfoSection from '../components/ExpertInfoSection';
import AuthorBio from '../components/AuthorBio';
import { getWhyUs } from '@/config/whyUs';
import { getTestimonials } from '@/config/testimonials';
import { getPageAuthor } from '@/config/authors';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Dentysta Wrocław - stomatolog i leczenie zębów',
  description: 'Stomatolog i dentysta we Wrocławiu - profilaktyka, leczenie zębów, implanty, protetyka, ortodoncja i stomatologia dziecięca. Pełen zakres opieki w Bas Clinic.',
  path: '/stomatologia/',
});

const BREADCRUMBS = [{ label: 'Stomatologia', href: '/stomatologia/' }];

const EXPERT_INFO = [
  {
    title: 'Czym zajmuje się stomatolog we Wrocławiu?',
    tocLabel: 'Czym zajmuje się stomatolog?',
    content:
      '<p><strong>Stomatologia</strong> to dziedzina medycyny zajmująca się profilaktyką, diagnostyką i leczeniem chorób zębów, dziąseł i przyzębia. Dobry <strong>stomatolog</strong> (dentysta) we Wrocławiu prowadzi pacjenta przez całą ścieżkę leczenia - od przeglądu kontrolnego, przez leczenie zachowawcze, po protetykę i implantologię.</p>' +
      '<p>Skala potrzeb jest duża. Według Światowej Organizacji Zdrowia choroby jamy ustnej dotykają blisko <strong>3,7 mld</strong> osób na świecie, a nieleczona <strong>próchnica</strong> zębów stałych pozostaje najczęstszym schorzeniem człowieka (dane WHO, Global Burden of Disease 2021). Dlatego w naszym gabinecie we Wrocławiu kładziemy nacisk na wczesne wykrywanie i zapobieganie, zamiast skupiać się wyłącznie na leczeniu skutków.</p>',
  },
  {
    title: 'Dziedziny stomatologii: od profilaktyki po implanty zębowe',
    tocLabel: 'Dziedziny stomatologii',
    content:
      '<p>Stomatologia obejmuje kilka wyspecjalizowanych dziedzin, które najczęściej uzupełniają się w obrębie jednego planu leczenia. W naszym gabinecie pacjent znajduje je w jednym miejscu:</p>' +
      '<ul>' +
      '<li><strong>Profilaktyka i higienizacja</strong> - przeglądy, skaling i piaskowanie; podstawa zdrowia jamy ustnej (<a href="/stomatologia/higienizacja/">profesjonalna higienizacja</a>).</li>' +
      '<li><strong>Stomatologia zachowawcza i endodoncja</strong> - leczenie próchnicy oraz leczenie kanałowe (<a href="/stomatologia/leczenie-zebow/">leczenie zębów i kanałowe</a>).</li>' +
      '<li><strong>Protetyka</strong> - odbudowa zniszczonych lub utraconych zębów koronami i mostami (<a href="/stomatologia/protetyka-korony/">korony protetyczne</a>).</li>' +
      '<li><strong>Implantologia</strong> - odtwarzanie pojedynczych braków oraz <a href="/stomatologia/leczenie-bezzebia/">leczenie bezzębia</a> z użyciem <a href="/stomatologia/implanty-zebowe/">implantów zębowych</a>.</li>' +
      '<li><strong>Ortodoncja</strong> - korekta wad zgryzu aparatami i nakładkami (<a href="/stomatologia/ortodoncja/">leczenie ortodontyczne</a>).</li>' +
      '<li><strong>Chirurgia stomatologiczna</strong> - usuwanie zębów i zabiegi w obrębie jamy ustnej (<a href="/stomatologia/chirurgia/">chirurgia stomatologiczna</a>).</li>' +
      '<li><strong>Stomatologia dziecięca</strong> - opieka nad zębami mlecznymi i stałymi u najmłodszych (<a href="/stomatologia/dziecieca/">stomatologia dziecięca</a>).</li>' +
      '<li><strong>Stomatologia estetyczna</strong> - poprawa wyglądu uśmiechu, między innymi <a href="/stomatologia/licowki/">licówki</a> i <a href="/stomatologia/bonding/">bonding</a> (<a href="/stomatologia/estetyczna/">stomatologia estetyczna</a>).</li>' +
      '</ul>',
  },
  {
    title: 'Profilaktyka stomatologiczna - dlaczego chroni zęby lepiej niż leczenie?',
    tocLabel: 'Profilaktyka',
    content:
      '<p><strong>Profilaktyka</strong> stomatologiczna - regularne przeglądy, higienizacja i prawidłowa higiena domowa - pozwala wykryć próchnicę i choroby dziąseł, zanim staną się bolesne i wymagające rozległego leczenia.</p>' +
      '<p>Codzienna higiena ma policzalny efekt. Przeglądy systematyczne Cochrane wskazują, że pasta z <strong>fluorem</strong> w stężeniu co najmniej 1000 ppm zmniejsza próchnicę o około 24% w porównaniu z pastą bez fluoru, a szczotkowanie dwa razy dziennie zwiększa tę korzyść (Cochrane, Walsh i wsp., 2019). Na ryzyko próchnicy i chorób przyzębia wpływają też dieta bogata w cukry, palenie tytoniu oraz alkohol.</p>' +
      '<p>Z tego powodu domową higienę łączymy z regularną <a href="/stomatologia/higienizacja/">higienizacją w gabinecie</a>, która usuwa płytkę i kamień w miejscach niedostępnych dla szczoteczki.</p>',
  },
  {
    title: 'Jak często chodzić do stomatologa?',
    tocLabel: 'Jak często do stomatologa?',
    content:
      '<p>Optymalna częstotliwość wizyt kontrolnych jest ustalana indywidualnie. Wytyczne NICE zalecają odstęp między przeglądami od 3 do 24 miesięcy, dobierany na podstawie ryzyka próchnicy i chorób przyzębia u danego pacjenta.</p>' +
      '<p>W praktyce u większości dorosłych o stabilnym stanie jamy ustnej kontrola co 6-12 miesięcy jest wystarczająca, natomiast dzieci, kobiety w ciąży oraz osoby z częstą próchnicą lub chorobą przyzębia korzystają z częstszych wizyt. Termin kolejnego przeglądu wyznacza stomatolog po ocenie stanu zębów i dziąseł.</p>',
  },
  {
    title: 'Pierwsza wizyta u dentysty we Wrocławiu - jak wygląda?',
    tocLabel: 'Pierwsza wizyta',
    content:
      '<p>Leczenie w gabinecie zaczyna się od konsultacji i diagnostyki, a nie od samego zabiegu. Pierwsza wizyta u dentysty zwykle przebiega w kilku krokach:</p>' +
      '<ol>' +
      '<li>wywiad zdrowotny i rozmowa o oczekiwaniach pacjenta;</li>' +
      '<li>badanie zębów, dziąseł i błony śluzowej jamy ustnej;</li>' +
      '<li>w razie potrzeby zdjęcie RTG lub inna diagnostyka obrazowa;</li>' +
      '<li>plan leczenia z ustaloną kolejnością i zakresem zabiegów;</li>' +
      '<li>realizacja zabiegów, w razie potrzeby w <strong>znieczuleniu miejscowym</strong>.</li>' +
      '</ol>' +
      '<p>W diagnostyce zmian w obrębie głowy i szyi gabinet korzysta także z badań ultrasonograficznych, na przykład <a href="/usg/slinianki/">USG ślinianek</a> czy <a href="/usg/szyja/">USG szyi</a>, co pozwala ocenić ślinianki i węzły chłonne bez promieniowania.</p>',
  },
  {
    title: 'Próchnica i choroby przyzębia - najczęstsze problemy',
    tocLabel: 'Próchnica a przyzębie',
    content:
      '<p>Dwa najczęstsze problemy jamy ustnej - próchnica i choroby przyzębia - mają różne przyczyny i wymagają różnego leczenia. Próchnica to ubytek twardych tkanek zęba powstający w wyniku działania bakterii i cukrów, natomiast <strong>choroby przyzębia</strong> to przewlekłe zapalenie tkanek otaczających ząb.</p>' +
      '<p>Zaawansowane zapalenie przyzębia prowadzi do utraty kości i rozchwiania zębów; według WHO jego ciężka postać dotyczy ponad 1 mld osób na świecie. Europejska Federacja Periodontologii (EFP) zaleca leczenie etapowe - od instruktażu higieny i kontroli czynników ryzyka, przez instrumentację pod- i naddziąsłową, po leczenie podtrzymujące (wytyczne EFP S3, Sanz i wsp., 2020). Podstawą terapii jest regularne usuwanie płytki i kamienia podczas higienizacji.</p>',
  },
  {
    title: 'Leczenie zachowawcze, korona czy implant - jak dobieramy metodę?',
    tocLabel: 'Leczenie czy odbudowa?',
    content:
      '<p>Gdy ząb jest uszkodzony, wybór między leczeniem zachowawczym, odbudową protetyczną a usunięciem i wszczepieniem implantu zależy od stopnia zniszczenia tkanek, stanu kości oraz oczekiwań pacjenta.</p>' +
      '<p>Punktem wyjścia jest zachowanie własnego zęba: leczenie zachowawcze i kanałowe pozwala go uratować przy odwracalnych uszkodzeniach. Przy rozległej destrukcji korony ząb chroni jednak korona protetyczna, a gdy zęba nie da się utrzymać, jego korzeń zastępuje implant. To, że implant jest trwałym rozwiązaniem, nie znaczy, że sprawdza się w każdej sytuacji - o doborze metody decyduje diagnostyka i ocena lekarza.</p>' +
      '<h3>Porównanie metod odbudowy zęba</h3>' +
      '<table>' +
      '<tr><th>Metoda</th><th>Cel</th><th>Kiedy rozważana</th></tr>' +
      '<tr><td><a href="/stomatologia/leczenie-zebow/">Leczenie zachowawcze i kanałowe</a></td><td>zachowanie naturalnego zęba</td><td>próchnica, zapalenie miazgi, odwracalne uszkodzenia</td></tr>' +
      '<tr><td><a href="/stomatologia/protetyka-korony/">Korona protetyczna</a></td><td>odbudowa mocno zniszczonego zęba</td><td>rozległa utrata tkanek, ząb po leczeniu kanałowym</td></tr>' +
      '<tr><td><a href="/stomatologia/implanty-zebowe/">Implant zębowy</a></td><td>zastąpienie utraconego zęba</td><td>pojedyncze braki, brak możliwości uratowania zęba</td></tr>' +
      '<tr><td><a href="/stomatologia/leczenie-bezzebia/">Leczenie bezzębia</a></td><td>odbudowa wielu lub wszystkich zębów</td><td>rozległe lub całkowite braki zębowe</td></tr>' +
      '</table>',
  },
  {
    title: 'Przeciwwskazania do zabiegów stomatologicznych i bezpieczeństwo',
    tocLabel: 'Przeciwwskazania',
    content:
      '<p>Większość zabiegów stomatologicznych jest bezpieczna, jednak część wymaga uwzględnienia stanu ogólnego pacjenta i indywidualnych przeciwwskazań. Dlatego wywiad zdrowotny przed leczeniem jest tak samo ważny jak samo badanie zębów.</p>' +
      '<h3>Kiedy leczenie zębów wymaga ostrożności?</h3>' +
      '<p>Szczególnej ostrożności lub modyfikacji planu wymagają między innymi:</p>' +
      '<ul>' +
      '<li>ciąża i karmienie piersią - zabiegi planowe ustalamy z lekarzem, a zdjęcia RTG wykonujemy z osłoną i tylko gdy są konieczne;</li>' +
      '<li>przyjmowanie leków przeciwzakrzepowych i zaburzenia krzepnięcia - istotne przy zabiegach chirurgicznych;</li>' +
      '<li>niewyrównana cukrzyca oraz palenie tytoniu - wpływają na gojenie i powodzenie leczenia przyzębia i implantów;</li>' +
      '<li>osteoporoza leczona bisfosfonianami i inne choroby kości - wymagają oceny przed zabiegami chirurgicznymi i implantacją;</li>' +
      '<li>czynne zakażenie w jamie ustnej oraz alergie na leki lub środki znieczulające.</li>' +
      '</ul>' +
      '<h3>Czego nie robić samodzielnie?</h3>' +
      '<p>Nie zaleca się samodzielnego wybielania ani leczenia bólu zęba bez wcześniejszej diagnozy - objaw może maskować poważniejszy problem. O kwalifikacji do konkretnego zabiegu zawsze decyduje lekarz.</p>',
  },
  {
    title: 'Ile kosztuje leczenie stomatologiczne we Wrocławiu?',
    tocLabel: 'Cena leczenia',
    content:
      '<p>Koszt leczenia stomatologicznego we Wrocławiu zależy od rodzaju i zakresu zabiegu, użytych materiałów oraz liczby wizyt. Z tego powodu wiążącą wycenę przedstawiamy po badaniu i ustaleniu planu leczenia.</p>' +
      '<p>Część świadczeń podstawowych jest refundowana przez NFZ, natomiast większość leczenia zaawansowanego, protetycznego i estetycznego realizowana jest prywatnie. Aktualne ceny poszczególnych zabiegów zebraliśmy w <a href="/cennik/">cenniku</a>, a termin konsultacji można ustalić przez <a href="/rejestracja/">rejestrację online</a>.</p>' +
      '<p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji lekarskiej. O kwalifikacji do zabiegu, jego przebiegu i ewentualnych przeciwwskazaniach decyduje lekarz podczas indywidualnej wizyty.</p>',
  },
  {
    title: 'Źródła',
    content:
      '<p>Treść opracowano na podstawie wytycznych i przeglądów naukowych:</p>' +
      '<ol>' +
      '<li>Światowa Organizacja Zdrowia (WHO). Oral health - fact sheet (dane Global Burden of Disease 2021).</li>' +
      '<li>Walsh T. i wsp. Fluoride toothpastes of different concentrations for preventing dental caries. Cochrane Database of Systematic Reviews 2019.</li>' +
      '<li>NICE. Dental recall - recall interval between routine dental examinations (CG19).</li>' +
      '<li>Sanz M. i wsp. Treatment of stage I-III periodontitis - the EFP S3 level clinical practice guideline. Journal of Clinical Periodontology 2020; 47(Suppl. 22): 4-60 (PMID 32383274).</li>' +
      '</ol>',
  },
];

const FAQ = [
  {
    question: 'Jak często chodzić do stomatologa?',
    answer:
      'Do stomatologa warto chodzić na przegląd kontrolny w odstępach ustalanych indywidualnie - u większości dorosłych co 6-12 miesięcy, a u dzieci i osób z podwyższonym ryzykiem częściej. Wytyczne NICE dopuszczają zakres od 3 do 24 miesięcy zależnie od ryzyka. Termin wyznacza lekarz po badaniu.',
  },
  {
    question: 'Gdzie we Wrocławiu przyjmuje stomatolog Bas Clinic?',
    answer:
      `Gabinet stomatologiczny Bas Clinic mieści się przy ${CLINIC.address.street} we Wrocławiu. Stomatolodzy przyjmują od poniedziałku do piątku w godzinach ${CLINIC.hours.weekdays}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online.`,
  },
  {
    question: 'Czy leczenie zębów boli?',
    answer:
      'Leczenie zębów nie musi być bolesne - zabiegi, które tego wymagają, wykonujemy w znieczuleniu miejscowym, dbając o komfort pacjenta. Zakres znieczulenia i przebieg lekarz omawia przed rozpoczęciem. Po niektórych zabiegach możliwa jest przejściowa nadwrażliwość, która zwykle ustępuje samoistnie.',
  },
  {
    question: 'Ile kosztuje wizyta u dentysty we Wrocławiu?',
    answer:
      'Koszt wizyty u dentysty we Wrocławiu zależy od jej zakresu - inaczej wycenia się przegląd kontrolny, a inaczej leczenie próchnicy, leczenie kanałowe czy protetykę. Wiążącą wycenę przedstawiamy po badaniu i ustaleniu planu leczenia, a orientacyjne ceny zabiegów znajdują się w cenniku.',
  },
  {
    question: 'Jak dbać o zęby, aby uniknąć próchnicy?',
    answer:
      'Aby uniknąć próchnicy, zęby należy szczotkować dwa razy dziennie pastą z fluorem (co najmniej 1000 ppm), czyścić przestrzenie międzyzębowe nicią lub szczoteczką i ograniczać cukry. Według przeglądów Cochrane pasta z fluorem zmniejsza próchnicę o około 24%. Uzupełnieniem jest regularna higienizacja w gabinecie.',
  },
  {
    question: 'Czy leczenie stomatologiczne jest refundowane przez NFZ?',
    answer:
      'Część leczenia stomatologicznego jest refundowana przez NFZ - obejmuje to wybrane świadczenia podstawowe i materiały. Leczenie zaawansowane, protetyczne, implantologiczne oraz estetyczne jest najczęściej realizowane prywatnie. Zakres refundacji i koszt leczenia warto potwierdzić podczas konsultacji.',
  },
];

const SERVICES = [
  { name: 'Stomatologia estetyczna', shortDesc: 'Piękny uśmiech dzięki nowoczesnym zabiegom estetycznym.', slug: 'stomatologia-estetyczna', icon: '✨' },
  { name: 'Implanty zębowe', shortDesc: 'Implanty zębowe najwyższej jakości.', slug: 'implanty-zebowe', icon: '🦷' },
  { name: 'Leczenie bezzębia', shortDesc: 'Kompleksowe leczenie bezzębia.', slug: 'leczenie-bezzebia', icon: '🔧' },
  { name: 'Licówki', shortDesc: 'Licówki porcelanowe i kompozytowe.', slug: 'licowki', icon: '💎' },
  { name: 'Bonding', shortDesc: 'Szybka korekta estetyczna zębów.', slug: 'bonding', icon: '🎨' },
  { name: 'Protetyka korony', shortDesc: 'Korony protetyczne - trwałe uzupełnienia.', slug: 'protetyka-korony', icon: '👑' },
  { name: 'Higienizacja', shortDesc: 'Profesjonalna higienizacja jamy ustnej.', slug: 'higienizacja', icon: '🧹' },
  { name: 'Stomatologia dziecięca', shortDesc: 'Leczenie zębów u dzieci.', slug: 'stomatologia-dziecieca', icon: '👶' },
  { name: 'Leczenie zębów', shortDesc: 'Leczenie próchnicy i kanałowe.', slug: 'leczenie-zebow', icon: '🏥' },
  { name: 'Ortodoncja', shortDesc: 'Prostowanie zębów aparatami i alignerami.', slug: 'ortodoncja', icon: '😁' },
  { name: 'Chirurgia', shortDesc: 'Zabiegi chirurgiczne jamy ustnej.', slug: 'chirurgia', icon: '⚕️' },
];

export default function StomatologiaPage() {
  const author = getPageAuthor('Stomatologia');
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQPageSchema questions={FAQ} />
      <HeroSection
        id="hero"
        subtitle="Stomatologia"
        title="Stomatolog Wrocław - pełna opieka stomatologiczna"
        description="Pełen zakres leczenia zębów we Wrocławiu - profilaktyka, leczenie zachowawcze, protetyka, implanty i ortodoncja w jednym gabinecie."
      />
      <Section id="uslugi">
        <SectionHeader
          subtitle="Nasze usługi"
          title="Zakres usług stomatologicznych"
        />
        <ServiceList services={SERVICES} />
      </Section>
      <Section id="informacje">
        <ExpertInfoSection eyebrow="Informacje od specjalisty" items={EXPERT_INFO} />
      </Section>
      {author && <AuthorBio {...author} />}
      <FAQSection items={FAQ} contactHref="/kontakt/" title="Najczęściej zadawane pytania o stomatologię" />
      <Testimonials id="opinie" items={getTestimonials('Stomatologia')} />
      <CTASection id="dlaczego-my" {...getWhyUs('stomatologia')} />
    </>
  );
}
