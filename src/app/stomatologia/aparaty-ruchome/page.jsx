import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Aparaty ruchome Wrocław: ortodoncja dla dzieci',
  description: 'Aparaty ruchome we Wrocławiu: zdejmowane płytki i aparaty czynnościowe do wczesnego leczenia wad zgryzu u dzieci. Refundacja NFZ i retencja w Bas Clinic.',
  path: '/stomatologia/aparaty-ruchome/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Ortodoncja', href: '/stomatologia/ortodoncja/' },
  { label: 'Aparaty ruchome' },
];

const FAQ = [
  {
    question: 'Ile godzin dziennie trzeba nosić aparat ruchomy?',
    answer: 'Aparat ruchomy nosi się zwykle przez 12-16 godzin na dobę, w tym całą noc i część dnia, dokładnie według zalecenia ortodonty. Ponieważ aparat przesuwa zęby tylko wtedy, gdy znajduje się w ustach, regularne noszenie jest najważniejszym warunkiem powodzenia leczenia.',
  },
  {
    question: 'Od jakiego wieku zakłada się dziecku aparat ruchomy?',
    answer: 'Aparat ruchomy zakłada się najczęściej w okresie uzębienia mieszanego, mniej więcej między 6. a 12. rokiem życia, gdy można wykorzystać wzrost dziecka. Pierwszą wizytę u ortodonty zaleca się jednak już około 7. roku życia, by w porę ocenić rozwój zgryzu.',
  },
  {
    question: 'Czy aparat ruchomy wyprostuje krzywe zęby?',
    answer: 'Aparat ruchomy dobrze radzi sobie z prostymi zadaniami, jak poszerzenie łuku, przechylenie pojedynczego zęba czy korekta zgryzu krzyżowego. Precyzyjne ustawienie i obroty zębów wymagają jednak aparatu stałego, który steruje ruchem dokładniej.',
  },
  {
    question: 'Aparat ruchomy czy stały dla dziecka?',
    answer: 'Aparat ruchomy sprawdza się we wczesnym leczeniu i modyfikacji wzrostu u dzieci w uzębieniu mieszanym. Aparat stały stosuje się w uzębieniu stałym oraz przy złożonych wadach, gdy potrzebny jest precyzyjny ruch zębów. O wyborze decyduje ortodonta po badaniu.',
  },
  {
    question: 'Czy NFZ refunduje aparat ruchomy?',
    answer: 'Tak. W ramach NFZ dziecku przysługuje bezpłatny aparat ruchomy do ukończenia 12. roku życia, a kontrola wyników i naprawa aparatu do ukończenia 13. roku życia. Aparaty stałe i alignery nie są refundowane i pozostają w pełni prywatne.',
  },
  {
    question: 'Gdzie we Wrocławiu założyć dziecku aparat ruchomy?',
    answer: `Aparaty ruchome dla dzieci zakładamy w Bas Clinic przy ${CLINIC.address.street} we Wrocławiu. Przyjmujemy w dni powszednie w godzinach ${CLINIC.hours.weekdays}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez formularz rejestracji online.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym są aparaty ruchome i jak działają?',
    tocLabel: 'Czym są i jak działają',
    content: `<p>Aparat ruchomy to zdejmowany aparat ortodontyczny, który pacjent samodzielnie wkłada i wyjmuje. Tworzy go płyta z akrylu oraz elementy druciane, a siłę potrzebną do przesuwania zębów wytwarza dokręcana śruba lub aktywne sprężyny.</p><p>W typowej <strong>płytce ortodontycznej</strong> płyta akrylowa przylega do podniebienia lub dna jamy ustnej, <strong>klamry Adamsa</strong> i łuk wargowy utrzymują aparat na zębach, a elementy czynne to <strong>śruba ortodontyczna</strong> oraz sprężynki. Stopniowe dokręcanie śruby albo napięcie sprężyn wywołuje lekki, przerywany nacisk, który przechyla zęby i poszerza łuk zębowy.</p><p>U dzieci w okresie wzrostu osobną grupę stanowią <strong>aparaty czynnościowe</strong>, które wykorzystują pracę mięśni i potencjał wzrostowy, by wpływać na wzajemne ustawienie szczęk. Aparat ruchomy działa wyłącznie wtedy, gdy znajduje się w ustach, więc o efekcie leczenia decyduje regularność noszenia (piszemy o tym w sekcji o czasie noszenia). Jest jedną z trzech metod stosowanych w <a href="/stomatologia/ortodoncja/">ortodoncji</a>, obok <a href="/stomatologia/aparaty-stale/">aparatu stałego</a> i <a href="/stomatologia/alignery/">alignerów</a>.</p>`,
  },
  {
    title: 'Rodzaje aparatów ruchomych: płytki aktywne i aparaty czynnościowe',
    tocLabel: 'Rodzaje aparatów',
    content: `<p>Aparaty ruchome dzielą się na dwie główne grupy: płytki aktywne, które przesuwają lub poszerzają, oraz aparaty czynnościowe, które u dzieci kierują wzrostem szczęk. Oddzielną rolę pełnią aparaty retencyjne noszone po zakończonym leczeniu.</p><h3>Płytki aktywne (np. płytka Schwarza)</h3><p>Płytka aktywna służy do poszerzania zbyt wąskiego łuku, przechylania pojedynczych zębów, korekty bocznego lub przedniego zgryzu krzyżowego oraz utrzymania miejsca po przedwcześnie utraconym zębie mlecznym. Elementem czynnym jest śruba lub sprężyna, którą okresowo się aktywuje.</p><h3>Aparaty czynnościowe</h3><p>Do tej grupy należą m.in. aktywator (monoblok), Twin Block, bionator i regulator funkcji Fränkla. Wykorzystują siły mięśni i wzrost, dlatego stosuje się je u dzieci z wadą klasy II (cofnięta żuchwa, wysunięte górne siekacze) w okresie intensywnego wzrostu. Nazwy te oznaczają ogólne typy aparatów, a nie zastrzeżony system konkretnej kliniki.</p><h3>Aparaty retencyjne</h3><p>Po leczeniu aparatem stałym lub nakładkami efekt utrwala aparat retencyjny: ruchoma płytka Hawleya albo przezroczysta nakładka zakładana na noc. Zapobiega on cofaniu się zębów do dawnego ustawienia.</p>`,
  },
  {
    title: 'Dla kogo są aparaty ruchome? Wiek i wskazania',
    tocLabel: 'Dla kogo i kiedy',
    content: `<p>Aparaty ruchome stosuje się przede wszystkim u dzieci w okresie uzębienia mieszanego, czyli mniej więcej między 6. a 12. rokiem życia. U młodzieży i dorosłych ich główną rolą jest retencja po wcześniejszym leczeniu.</p><p>Najczęstsze wskazania to wczesne, interceptywne leczenie rozwijającej się wady zgryzu, poszerzenie wąskiej szczęki, korekta zgryzu krzyżowego, modyfikacja wzrostu w wadach klasy II oraz utrzymanie miejsca dla zębów stałych. Dobór aparatu zależy od rodzaju wady i wieku dziecka, dlatego pierwszą wizytę u ortodonty zaleca się już około 7. roku życia, gdy obecne są pierwsze zęby stałe.</p><p>Wczesne leczenie ma jednak swoje granice. Duży <strong>przegląd Cochrane</strong> dotyczący wystających górnych siekaczy wskazuje, że rozpoczęcie leczenia w młodszym wieku zmniejsza ryzyko urazu tych zębów, ale nie daje lepszego ostatecznego zgryzu niż leczenie podjęte później. O momencie rozpoczęcia decyduje więc konkretna sytuacja, a nie sam wiek. Aparat ruchomy bywa też częścią szerszego planu w <a href="/stomatologia/dziecieca/">stomatologii dziecięcej</a>.</p>`,
  },
  {
    title: 'Co aparat ruchomy potrafi, a czego nie? Porównanie z aparatem stałym',
    tocLabel: 'Możliwości i ograniczenia',
    content: `<p>Aparat ruchomy ma realne, ale ograniczone możliwości. Ponieważ naciska na koronę zęba w jednym miejscu, przede wszystkim przechyla zęby i poszerza łuk, a nie wykonuje precyzyjnego ruchu korpusowego, obrotu czy kontroli nachylenia korzenia.</p><p>W praktyce proste zadania, jak poszerzenie łuku czy korekta pojedynczego zęba, aparat ruchomy wykonuje dobrze, natomiast złożone wady i precyzyjne ustawienie wymagają aparatu stałego. Przy bocznym zgryzie krzyżowym płytka poszerzająca jest skuteczna, ale aktualny <strong>przegląd Cochrane</strong> pokazuje, że stałe rozwiązanie (quad-helix) bywa bardziej niezawodne i nieco szybsze. To naturalny zakres zastosowania tej metody, a nie jej wada.</p><table><tr><th>Cecha</th><th>Aparat ruchomy</th><th>Aparat stały</th></tr><tr><td>Zdejmowanie</td><td>Tak, samodzielnie przez pacjenta</td><td>Nie, zamocowany na stałe</td></tr><tr><td>Zakres ruchu zębów</td><td>Głównie przechylanie i poszerzanie</td><td>Pełny: ruch korpusowy, obroty, kontrola nachylenia</td></tr><tr><td>Trudne wady zgryzu</td><td>Ograniczona skuteczność</td><td>Wysoka skuteczność</td></tr><tr><td>Zależność od współpracy</td><td>Bardzo duża (musi być noszony)</td><td>Mniejsza (działa stale)</td></tr><tr><td>Typowe wskazania</td><td>Wczesne leczenie u dzieci, retencja</td><td>Uzębienie stałe, złożone wady</td></tr></table><p>Wybór metody warto omówić z ortodontą. Bywa też tak, że wczesne leczenie aparatem ruchomym poprzedza późniejsze leczenie <a href="/stomatologia/aparaty-stale/">aparatem stałym</a> lub <a href="/stomatologia/alignery/">alignerami</a>.</p>`,
  },
  {
    title: 'Przebieg leczenia: od diagnostyki do kontroli',
    tocLabel: 'Przebieg leczenia',
    content: `<p>Leczenie aparatem ruchomym zaczyna się od diagnostyki, a sam aparat powstaje indywidualnie w pracowni techniki dentystycznej. Od pierwszej wizyty do oddania gotowego aparatu mija zwykle kilka tygodni.</p><ol><li><strong>Badanie i diagnostyka</strong>: ocena zgryzu, zdjęcie rentgenowskie (najczęściej pantomogram) i ustalenie planu leczenia.</li><li><strong>Pobranie wycisków lub skan</strong>: coraz częściej zamiast klasycznego wycisku wykonujemy cyfrowy skan wewnątrzustny, wygodniejszy dla dziecka.</li><li><strong>Wykonanie aparatu</strong>: na podstawie modelu technik dentystyczny przygotowuje indywidualny aparat.</li><li><strong>Oddanie i instruktaż</strong>: dziecko i rodzic uczą się zakładania, czyszczenia oraz dokręcania śruby zgodnie z harmonogramem.</li><li><strong>Aktywacje i kontrole</strong>: śrubę aktywuje się samodzielnie w domu, a wizyty kontrolne odbywają się regularnie; w leczeniu finansowanym przez NFZ kontrola przysługuje raz w miesiącu.</li></ol><p>Łączny czas leczenia zależy od rodzaju wady i od tego, jak systematycznie aparat jest noszony, dlatego trudno podać jedną liczbę dla wszystkich pacjentów.</p>`,
  },
  {
    title: 'Ile nosić aparat ruchomy? Współpraca decyduje o efekcie',
    tocLabel: 'Czas noszenia i współpraca',
    content: `<p>Aparat ruchomy trzeba nosić przez większą część doby, zwykle 12-16 godzin, w tym całą noc i część dnia. Ten czas to konkretne zalecenie, bo aparat przesuwa zęby tylko wtedy, gdy faktycznie znajduje się w ustach.</p><p>Tu pojawia się najważniejszy warunek skuteczności. Badania z czujnikami rejestrującymi czas noszenia pokazują, że dzieci noszą aparat zauważalnie krócej, niż zalecił ortodonta, a niedostateczne noszenie jest najczęstszą przyczyną przedłużania się lub niepowodzenia leczenia. Sam aparat, nawet idealnie wykonany, nie zadziała, jeśli leży w pudełku.</p><p>Dlatego efekt zależy w równym stopniu od aparatu i od codziennej dyscypliny dziecka oraz zaangażowania rodzica. Pomaga stały rytm dnia: zakładanie aparatu o tej samej porze, noszenie podczas nauki i snu, a zdejmowanie tylko na posiłki, mycie zębów i sport kontaktowy. Jeśli mimo to dziecko nie współpracuje, lepszym wyborem bywa <a href="/stomatologia/aparaty-stale/">aparat stały</a>, który działa niezależnie od pacjenta.</p>`,
  },
  {
    title: 'Higiena, jedzenie i komfort w trakcie leczenia',
    tocLabel: 'Higiena, jedzenie, komfort',
    content: `<p>Aparat ruchomy zdejmuje się do jedzenia i mycia zębów, co ułatwia higienę, ale wymaga osobnej pielęgnacji samego aparatu. Akryl łatwo gromadzi płytkę i drobnoustroje, dlatego samo opłukanie wodą nie wystarcza.</p><h3>Jak czyścić i przechowywać aparat ruchomy?</h3><p>Aparat czyść po wyjęciu szczoteczką, a okresowo także środkiem do dezynfekcji aparatów lub tabletkami musującymi, bo samo szczotkowanie nie usuwa całego biofilmu. Gdy aparat nie jest noszony, przechowuj go w dedykowanym pudełku z dostępem powietrza. Nie wkładaj go do gorącej wody ani nie zostawiaj na grzejniku, bo akryl może się odkształcić.</p><h3>Co można jeść i pić z aparatem ruchomym?</h3><p>Posiłki jedz bez aparatu. Z aparatem w ustach unikaj słodkich i gorących napojów, które sprzyjają próchnicy i odkształceniom. Po jedzeniu warto umyć zęby, zanim ponownie założysz aparat.</p><h3>Czy to boli? Ślinienie i mowa</h3><p>W pierwszych dniach po założeniu i po każdej aktywacji śruby pojawia się uczucie ucisku, wzmożone ślinienie i chwilowo zmieniona wymowa. To przejściowe objawy adaptacji, które zwykle mijają w ciągu kilku dni. Dbałość o zęby ogranicza ryzyko <a href="/stomatologia/leczenie-zebow/">próchnicy</a> w trakcie leczenia, a pomaga w tym także regularna <a href="/stomatologia/higienizacja/">higienizacja</a>.</p>`,
  },
  {
    title: 'Przeciwwskazania, bezpieczeństwo i alergie',
    tocLabel: 'Przeciwwskazania i bezpieczeństwo',
    content: `<p>Aparat ruchomy jest bezpieczną metodą, ale nie w każdej sytuacji jest właściwym wyborem. Część przeciwwskazań ma charakter względny i znika po wcześniejszym leczeniu lub poprawie higieny.</p><ul><li><strong>Nieleczona próchnica i niedostateczna higiena</strong>: wymagają leczenia i nauki higieny, zanim rozpocznie się leczenie ortodontyczne.</li><li><strong>Złożone wady zgryzu</strong> wymagające ruchu korpusowego, obrotów lub precyzyjnego ustawienia zębów: lepiej koryguje je aparat stały.</li><li><strong>Brak współpracy</strong>: jeśli regularne noszenie nie jest możliwe, aparat ruchomy nie przyniesie efektu.</li></ul><h3>Czy aparat ruchomy jest bezpieczny? Alergia na akryl</h3><p>Akryl, z którego wykonany jest aparat, jest dobrze tolerowany. Rzadko zdarza się alergia kontaktowa na resztkowy monomer akrylu, objawiająca się pieczeniem, zaczerwienieniem lub podrażnieniem błony śluzowej. Takie objawy należy zgłosić ortodoncie, który oceni ich przyczynę. Aby ograniczyć ten problem, gotowy aparat przed oddaniem jest odpowiednio wygrzewany i moczony, co zmniejsza ilość wolnego monomeru.</p><p>Powyższe informacje mają charakter edukacyjny i nie zastępują konsultacji ortodontycznej. Ostateczny dobór aparatu następuje zawsze po badaniu jamy ustnej i analizie dokumentacji.</p>`,
  },
  {
    title: 'Ile kosztuje aparat ruchomy we Wrocławiu? Cena i NFZ',
    tocLabel: 'Cena i NFZ Wrocław',
    content: `<p>Cena aparatu ruchomego zależy od jego rodzaju (płytka aktywna czy aparat czynnościowy) i liczby łuków objętych leczeniem. Aparat ruchomy jest przy tym jedynym leczeniem ortodontycznym, które u dzieci finansuje NFZ.</p><h3>Czy NFZ refunduje aparat ruchomy?</h3><p>Tak. W ramach NFZ dziecku przysługuje bezpłatny aparat ruchomy do ukończenia 12. roku życia, a kontrola wyników w okresie retencji oraz naprawa aparatu (raz w roku, z wyłączeniem uszkodzeń z winy pacjenta) do ukończenia 13. roku życia. W trakcie aktywnego leczenia kontrola przysługuje raz w miesiącu. Warto pamiętać, że spotykane określenie „aparat na NFZ do 13. roku życia" jest nieścisłe: sam aparat obejmuje refundacja do ukończenia 12. roku życia.</p><p>NFZ nie refunduje natomiast <a href="/stomatologia/aparaty-stale/">aparatów stałych</a> ani <a href="/stomatologia/alignery/">alignerów</a>, więc te metody są w pełni prywatne. Aktualne stawki prywatne dla naszej kliniki znajdziesz w <a href="/cennik/">cenniku</a>.</p>`,
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content: `<ol><li>Batista i wsp., 2018. Cochrane: leczenie wystających górnych siekaczy (klasa II) u dzieci i młodzieży. PMID 29534303.</li><li>O'Brien i wsp., 2009. RCT: wczesne leczenie aparatem Twin Block. PMID 19409339.</li><li>Tulloch i wsp., 2004. RCT: leczenie dwufazowe a jednofazowe (UNC). PMID 15179390.</li><li>Thiruvenkatachari i wsp., 2015. Przegląd systematyczny: wczesne leczenie klasy II. PMID 26124027.</li><li>Santamaría-Villegas i wsp., 2017. Metaanaliza: aparaty czynnościowe a wzrost żuchwy. PMID 28148248.</li><li>Cacciatore i wsp., 2019. Przegląd: długoterminowe efekty szkieletowe. PMID 31490945.</li><li>Ugolini i wsp., 2021. Cochrane: leczenie tylnego zgryzu krzyżowego. PMID 34951927.</li><li>Alsawaf i wsp., 2022. Metaanaliza: poszerzanie szczęki (płytka a quad-helix). PMID 35156156.</li><li>Bock i wsp., 2015. Badanie kliniczne: korekta przedniego zgryzu krzyżowego płytką. PMID 26141044.</li><li>Nahajowski i wsp., 2022. Pomiar czasu noszenia aparatów ruchomych czujnikami. PMID 35408050.</li><li>Tsomos i wsp., 2014. Obiektywny pomiar czasu noszenia aparatu. PMID 23834273.</li><li>Littlewood i wsp., 2001. Aparaty ruchome: zasady działania i ograniczenia. PMID 11587502.</li><li>Koletsi i wsp., 2021. Metaanaliza: dokładność ruchu zębów nakładkami. PMID 34176358.</li><li>Mandall i wsp., 2012. RCT: maska twarzowa w klasie III. PMID 22984102.</li><li>Rutili i wsp., 2023. Przegląd: protrakcja szczęki z zakotwieniem szkieletowym. PMID 36074492.</li><li>Martin i wsp., 2023. Cochrane: retencja po leczeniu ortodontycznym. PMID 37219527.</li><li>Charavet i wsp., 2021. Przegląd: czyszczenie aparatów ortodontycznych. PMID 34828679.</li><li>Ghazal i wsp., 2019. Badanie: metody dezynfekcji aparatów akrylowych. PMID 31046747.</li><li>Khawwam i wsp., 2023. Badanie: polerowanie akrylu a adhezja biofilmu. PMID 37868294.</li><li>İça i wsp., 2014. Uwalnianie resztkowego monomeru z akrylu. PMID 24601878.</li><li>Rashid i wsp., 2015. Przegląd: nadwrażliwość na akryl. PMID 26929705.</li><li>Gonçalves i wsp., 2006. Opis przypadku: reakcja alergiczna na akryl ortodontyczny. PMID 16527642.</li><li>Koutis i wsp., 2001. Opis przypadku: kontaktowe zapalenie jamy ustnej na monomer akrylu. PMID 11488717.</li><li>Narodowy Fundusz Zdrowia oraz pacjent.gov.pl. Leczenie ortodontyczne dzieci w ramach NFZ i refundacja aparatu ruchomego. Dostęp 2026.</li></ol>`,
  },
];

export default function AparatyRuchomePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Aparaty ruchome Wrocław"
      heroSubtitle="Ortodoncja"
      heroDescription="Aparaty ruchome w Bas Clinic we Wrocławiu: zdejmowane płytki i aparaty czynnościowe do wczesnego leczenia wad zgryzu u dzieci oraz retencji po leczeniu ortodontycznym."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="stomatologia/aparaty-ruchome"
    />
  );
}
