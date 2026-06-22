import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG jamy brzusznej Wrocław | Bas Clinic',
  description:
    'USG jamy brzusznej we Wrocławiu (ul. Opatowicka 132). Bezbolesne badanie USG brzucha oceniające wątrobę, trzustkę i nerki. Sprawdź przygotowanie i umów termin.',
  path: '/usg/jamy-brzusznej/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG jamy brzusznej' },
];

const RELATED = [
  'usg/nerek',
  'usg/prostaty',
  'usg/wezlow-chlonnych',
  'usg/ginekologiczne',
].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG jamy brzusznej?',
    content:
      '<p>USG jamy brzusznej to nieinwazyjne badanie obrazowe wykorzystujące fale ultradźwiękowe do oceny narządów położonych w obrębie brzucha. W praktyce funkcjonuje pod kilkoma równorzędnymi nazwami: USG brzucha, ultrasonografia jamy brzusznej, badanie ultrasonograficzne brzucha oraz USG narządów jamy brzusznej.</p>' +
      '<p>Badanie ma charakter przeglądowy i obejmuje jednocześnie kilka struktur. W trakcie ultrasonografii narządów jamy brzusznej ocenia się przede wszystkim:</p>' +
      '<ul>' +
      '<li><strong>wątrobę</strong> - jej wielkość, echostrukturę oraz obecność zmian ogniskowych,</li>' +
      '<li><strong>pęcherzyk żółciowy i drogi żółciowe</strong> - pod kątem złogów i poszerzenia przewodów,</li>' +
      '<li><strong>trzustkę</strong> - w zakresie dostępnym dla głowicy,</li>' +
      '<li><strong>śledzionę</strong> - jej rozmiar i jednorodność miąższu,</li>' +
      '<li><strong>nerki</strong> - budowę i układ kielichowo-miedniczkowy,</li>' +
      '<li><strong>aortę brzuszną</strong> - jej szerokość i przebieg,</li>' +
      '<li><strong>węzły chłonne</strong> w obrębie jamy brzusznej,</li>' +
      '<li><strong>okolicę nadnerczy w zakresie możliwym do uwidocznienia</strong>.</li>' +
      '</ul>' +
      '<p>Tak szeroki zakres sprawia, że diagnostyka USG jamy brzusznej bywa jednym z pierwszych badań zlecanych przy niejasnych dolegliwościach ze strony jamy brzusznej.</p>',
  },
  {
    title: 'Co można ocenić w USG brzucha?',
    content:
      '<p>USG brzucha pozwala uwidocznić wiele nieprawidłowości w obrębie narządów miąższowych i przewodu pokarmowego. Wynik badania nie stanowi rozpoznania, lecz dostarcza lekarzowi informacji, które mogą wskazywać na konieczność dalszej diagnostyki.</p>' +
      '<p>Ultrasonografia jamy brzusznej może między innymi:</p>' +
      '<ul>' +
      '<li>uwidocznić <strong>kamicę żółciową</strong> - złogi w pęcherzyku żółciowym oraz cechy zastoju żółci,</li>' +
      '<li>wykazać <strong>stłuszczenie wątroby</strong> oraz zmiany ogniskowe w jej miąższu,</li>' +
      '<li>ujawnić <strong>torbiele</strong> wątroby, nerek lub innych narządów,</li>' +
      '<li>zobrazować zmiany w obrębie <strong>trzustki</strong> w dostępnym zakresie,</li>' +
      '<li>wykazać <strong>powiększenie śledziony</strong>,</li>' +
      '<li>uwidocznić poszerzenie aorty mogące odpowiadać <strong>tętniakowi aorty brzusznej</strong>,</li>' +
      '<li>wykryć obecność <strong>wolnego płynu w jamie otrzewnej</strong>,</li>' +
      '<li>ocenić <strong>zmiany w nerkach</strong>, w tym kamicę i zastój moczu.</li>' +
      '</ul>' +
      '<p>Interpretacja tych obserwacji oraz decyzja o kolejnych krokach należy zawsze do lekarza prowadzącego.</p>',
  },
  {
    title: 'Wskazania do USG jamy brzusznej',
    content:
      '<p>Wskazaniem do USG jamy brzusznej są przede wszystkim niejasne dolegliwości brzuszne oraz potrzeba kontroli wcześniej rozpoznanych zmian. Badanie ultrasonograficzne brzucha wykonuje się zarówno w diagnostyce objawowej, jak i profilaktycznie.</p>' +
      '<p>Najczęstsze sytuacje, w których zaleca się to badanie, obejmują:</p>' +
      '<ul>' +
      '<li><strong>bóle brzucha</strong> o niewyjaśnionej przyczynie, zwłaszcza w nadbrzuszu i pod prawym łukiem żebrowym,</li>' +
      '<li>przewlekłą <strong>niestrawność</strong>, wzdęcia, nudności i uczucie pełności,</li>' +
      '<li><strong>nieprawidłowe próby wątrobowe</strong> oraz inne odchylenia w badaniach laboratoryjnych,</li>' +
      '<li><strong>kontrolę znanych zmian</strong>, takich jak torbiele, kamica czy stłuszczenie wątroby,</li>' +
      '<li><strong>profilaktykę</strong> - okresową ocenę narządów jamy brzusznej u osób bez objawów.</li>' +
      '</ul>' +
      '<p>USG brzucha wykonuje się zarówno u dorosłych, jak i u dzieci. O zasadności badania w konkretnym przypadku decyduje lekarz na podstawie wywiadu i objawów.</p>',
  },
  {
    title: 'Jak przygotować się do USG jamy brzusznej?',
    content:
      '<p>Do USG jamy brzusznej należy przygotować się przede wszystkim poprzez pozostanie na czczo. Standardem jest powstrzymanie się od jedzenia przez około 6-8 godzin przed badaniem, co ogranicza ilość gazów i treści pokarmowej utrudniających ocenę narządów.</p>' +
      '<p>Aby zwiększyć czytelność obrazu, zaleca się dodatkowo:</p>' +
      '<ul>' +
      '<li>dzień wcześniej zastosować <strong>dietę lekkostrawną</strong> i unikać produktów wzdymających, takich jak warzywa kapustne, rośliny strączkowe, napoje gazowane czy świeże pieczywo,</li>' +
      '<li>przyjmowane na stałe <strong>leki popić niewielką ilością wody</strong>, o ile lekarz nie zaleci inaczej,</li>' +
      '<li>w dniu badania ograniczyć palenie i żucie gumy, które nasilają połykanie powietrza.</li>' +
      '</ul>' +
      '<p><strong>Pełny pęcherz moczowy nie jest rutynowym wymogiem.</strong> Wypełnienie pęcherza bywa potrzebne tylko wtedy, gdy oceniane jest dodatkowo dolne piętro jamy brzusznej lub sam pęcherz moczowy - w takiej sytuacji warunek ten zostaje wskazany podczas umawiania terminu.</p>',
  },
  {
    title: 'Jak przebiega badanie USG brzucha?',
    content:
      '<p>Badanie USG brzucha przebiega w pozycji leżącej i polega na przesuwaniu głowicy ultrasonografu po powłokach brzucha. Na skórę nanosi się żel sprzęgający, który poprawia przewodzenie fal ultradźwiękowych i jakość uzyskiwanego obrazu.</p>' +
      '<p>W trakcie badania osoba badana może zostać poproszona o wstrzymanie oddechu lub zmianę ułożenia ciała, aby lepiej uwidocznić poszczególne narządy. Cała procedura trwa zwykle około 15-20 minut, jest bezbolesna i nie wykorzystuje promieniowania jonizującego, dlatego można ją bezpiecznie powtarzać.</p>' +
      '<p>Wynik badania w formie opisu sporządza lekarz wykonujący ultrasonografię. Należy pamiętać, że USG nie zastępuje konsultacji lekarskiej - obraz ultrasonograficzny interpretuje się zawsze w odniesieniu do objawów, wyników badań laboratoryjnych oraz całościowej oceny stanu zdrowia.</p>',
  },
  {
    title: 'USG jamy brzusznej a badania celowane',
    content:
      '<p>USG jamy brzusznej jest badaniem wielonarządowym i przeglądowym, które obejmuje kilka struktur naraz. Daje ono ogólny obraz narządów brzucha, jednak do szczegółowej oceny pojedynczego narządu lepiej sprawdzają się badania celowane.</p>' +
      '<p>Jeżeli na pierwszy plan wysuwają się dolegliwości ze strony układu moczowego, dedykowane jest <a href="/usg/nerek/">USG nerek</a>, które dokładniej obrazuje miąższ nerek, drogi moczowe oraz ewentualny zastój moczu. W diagnostyce gruczołu krokowego u mężczyzn osobnym badaniem jest <a href="/usg/prostaty/">USG prostaty</a> wykonywane przezbrzusznie, oceniające objętość stercza i zaleganie moczu po mikcji.</p>' +
      '<p>Wybór odpowiedniego zakresu warto skonsultować z lekarzem. Pełną ofertę pracowni USG we Wrocławiu wraz z opisem poszczególnych badań przedstawiono na stronie <a href="/usg/">wszystkie badania USG w Bas Clinic</a>. Aktualne stawki podano w zakładce <a href="/cennik/">cennik</a>.</p>',
  },
];

const FAQ = [
  {
    question: 'Czy do USG jamy brzusznej trzeba być na czczo?',
    answer:
      'Do USG jamy brzusznej należy zgłosić się na czczo. Zaleca się powstrzymanie od jedzenia przez około 6-8 godzin przed badaniem oraz lekkostrawną dietę dzień wcześniej, co ogranicza ilość gazów utrudniających ocenę narządów. Leki przyjmowane na stałe można popić niewielką ilością wody. Pełny pęcherz moczowy jest potrzebny tylko wtedy, gdy dodatkowo oceniane jest dolne piętro jamy brzusznej lub pęcherz moczowy.',
  },
  {
    question: 'Ile trwa USG jamy brzusznej?',
    answer:
      'USG jamy brzusznej trwa zwykle około 15-20 minut. Czas badania zależy od liczby ocenianych narządów oraz warunków obrazowania, takich jak ilość gazów jelitowych czy budowa ciała. Badanie nie wymaga rekonwalescencji, a po jego zakończeniu można wrócić do codziennych zajęć.',
  },
  {
    question: 'Czy USG brzucha jest bolesne i bezpieczne?',
    answer:
      'USG brzucha jest badaniem bezbolesnym i bezpiecznym. Wykorzystuje fale ultradźwiękowe, a nie promieniowanie jonizujące, dlatego może być wielokrotnie powtarzane i jest stosowane również u dzieci oraz u kobiet w ciąży. Podczas badania odczuwa się jedynie chłód żelu oraz delikatny ucisk głowicy na powłoki brzucha.',
  },
  {
    question: 'Ile kosztuje USG jamy brzusznej we Wrocławiu?',
    answer:
      'Koszt USG jamy brzusznej we Wrocławiu zależy od zakresu badania oraz ewentualnego rozszerzenia oceny o dodatkowe struktury. Aktualny cennik jest dostępny w zakładce Cennik na stronie Bas Clinic oraz pod numerem telefonu 690 511 511, gdzie można też zapytać o szczegóły i umówić termin.',
  },
  {
    question: 'Czy na USG jamy brzusznej potrzebne jest skierowanie?',
    answer:
      'Na USG jamy brzusznej skierowanie nie jest wymagane. Badanie wykonywane jest prywatnie w Bas Clinic przy ul. Opatowicka 132 we Wrocławiu, dlatego można umówić je bezpośrednio, bez skierowania od lekarza. Termin rezerwuje się telefonicznie pod numerem +48 690 511 511, często z możliwością szybkiego terminu.',
  },
  {
    question: 'Czym różni się USG jamy brzusznej od USG nerek?',
    answer:
      'USG jamy brzusznej różni się od USG nerek przede wszystkim zakresem. USG jamy brzusznej to badanie przeglądowe obejmujące wiele narządów naraz, między innymi wątrobę, pęcherzyk żółciowy, trzustkę, śledzionę, aortę oraz nerki. USG nerek jest natomiast badaniem celowanym, które skupia się wyłącznie na nerkach i drogach moczowych, dzięki czemu pozwala je ocenić dokładniej. Wybór odpowiedniego badania zależy od objawów i zaleceń lekarza.',
  },
];

export default function UsgJamyBrzusznejPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG jamy brzusznej we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG jamy brzusznej (USG brzucha) to bezbolesne badanie obrazujące wątrobę, trzustkę, nerki, śledzionę i pęcherzyk żółciowy. Wykonujemy je w Bas Clinic przy ul. Opatowickiej 132 we Wrocławiu."
      slug="usg/jamy-brzusznej"
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
