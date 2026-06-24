import { generatePageMetadata } from '@/lib/metadata';
import { getServiceBySlug } from '@/config/services';
import { CLINIC } from '@/config/clinic';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'USG jamy brzusznej Wrocław',
  description:
    'USG jamy brzusznej we Wrocławiu: nieinwazyjne badanie USG brzucha oceniające wątrobę, trzustkę, śledzionę i nerki. Bez skierowania, sprawdź przygotowanie.',
  path: '/usg/jama-brzuszna/',
});

const BREADCRUMBS = [
  { label: 'USG', href: '/usg/' },
  { label: 'USG jamy brzusznej' },
];

const RELATED = [
  'usg/nerki',
  'usg/prostata',
  'usg/wezly-chlonne',
  'usg/ginekologiczne',
].map(getServiceBySlug);

const EXPERT_INFO = [
  {
    title: 'Czym jest USG jamy brzusznej?',
    tocLabel: 'Co to jest',
    content:
      '<p>USG jamy brzusznej to nieinwazyjne badanie obrazowe, w którym fale ultradźwiękowe o wysokiej częstotliwości tworzą obraz narządów wnętrza brzucha w czasie rzeczywistym. W praktyce funkcjonuje pod równorzędnymi nazwami: USG brzucha, ultrasonografia jamy brzusznej, badanie ultrasonograficzne brzucha oraz USG narządów jamy brzusznej.</p>' +
      '<p>Lekarz przesuwa głowicę po powłokach brzucha, a obraz powstaje na bieżąco na ekranie aparatu. Badanie nie wykorzystuje promieniowania jonizującego, dlatego jest bezpieczne i można je w razie potrzeby powtarzać, także u dzieci i u kobiet w ciąży.</p>' +
      '<p>Ultrasonografia jamy brzusznej ma charakter przeglądowy, czyli obejmuje kilka narządów naraz. Z tego powodu bywa jednym z pierwszych badań obrazowych zlecanych przy niejasnych dolegliwościach ze strony brzucha.</p>',
  },
  {
    title: 'Co ocenia USG jamy brzusznej?',
    tocLabel: 'Co ocenia',
    content:
      '<p>USG jamy brzusznej ocenia jednocześnie narządy miąższowe i duże naczynia jamy brzusznej. Zakres standardowego badania opisują standardy Polskiego Towarzystwa Ultrasonograficznego oraz wytyczne praktyki klinicznej AIUM.</p>' +
      '<p>W trakcie badania lekarz ocenia przede wszystkim:</p>' +
      '<ul>' +
      '<li><strong>wątrobę</strong>, jej wielkość, echostrukturę i obecność zmian ogniskowych,</li>' +
      '<li><strong>pęcherzyk żółciowy i drogi żółciowe</strong>, pod kątem złogów i poszerzenia przewodów,</li>' +
      '<li><strong>trzustkę</strong> w zakresie dostępnym dla głowicy,</li>' +
      '<li><strong>śledzionę</strong>, jej rozmiar i jednorodność miąższu,</li>' +
      '<li><strong>nerki</strong>, ich budowę oraz układ kielichowo-miedniczkowy,</li>' +
      '<li><strong>aortę brzuszną</strong>, jej szerokość i przebieg,</li>' +
      '<li><strong>węzły chłonne i okolicę nadnerczy</strong> w zakresie możliwym do uwidocznienia,</li>' +
      '<li><strong>pęcherz moczowy</strong>, gdy badanie obejmuje dolne piętro jamy brzusznej.</li>' +
      '</ul>' +
      '<p>Tak szeroki zakres sprawia, że jedno badanie daje ogólny obraz kilku narządów. Dokładność oceny pojedynczej struktury bywa jednak mniejsza niż w badaniu celowanym, o czym mowa w dalszej części.</p>',
  },
  {
    title: 'Co wykrywa USG brzucha: wskazania i wykrywalność',
    tocLabel: 'Wskazania i wykrywalność',
    content:
      '<p>USG brzucha wykonuje się przy niejasnych dolegliwościach jamy brzusznej oraz do kontroli wcześniej rozpoznanych zmian. Badanie pozwala uwidocznić wiele nieprawidłowości, choć jego wynik nie jest rozpoznaniem, lecz wskazówką do dalszego postępowania.</p>' +
      '<p>Najczęstsze wskazania obejmują:</p>' +
      '<ul>' +
      '<li><strong>bóle brzucha</strong> o niejasnej przyczynie, zwłaszcza w nadbrzuszu i pod prawym łukiem żebrowym,</li>' +
      '<li>przewlekłą <strong>niestrawność</strong>, wzdęcia, nudności i uczucie pełności,</li>' +
      '<li><strong>nieprawidłowe próby wątrobowe</strong> i inne odchylenia w badaniach krwi,</li>' +
      '<li><strong>kontrolę znanych zmian</strong>, takich jak torbiele, kamica czy stłuszczenie wątroby,</li>' +
      '<li><strong>profilaktyczną</strong> ocenę narządów jamy brzusznej u osób bez objawów.</li>' +
      '</ul>' +
      '<p>Wykrywalność poszczególnych nieprawidłowości jest różna. W metaanalizie Shea i współpracowników czułość USG w wykrywaniu kamicy pęcherzyka żółciowego oceniono na około 84 procent przy swoistości około 99 procent. Stłuszczenie wątroby o nasileniu umiarkowanym i dużym ultrasonografia rozpoznaje dobrze (w metaanalizie Hernaeza czułość około 85 procent, swoistość około 94 procent), natomiast stłuszczenie łagodne bywa pomijane.</p>' +
      '<table>' +
      '<tr><th>Cel oceny</th><th>Wykrywalność w USG</th><th>Uwaga</th></tr>' +
      '<tr><td>Kamica pęcherzyka żółciowego</td><td>wysoka</td><td>bardzo wysoka swoistość</td></tr>' +
      '<tr><td>Stłuszczenie wątroby (umiarkowane i duże)</td><td>dobra</td><td>łagodne bywa niewidoczne</td></tr>' +
      '<tr><td>Tętniak aorty brzusznej</td><td>wysoka</td><td>zalecane badanie przesiewowe</td></tr>' +
      '<tr><td>Wodonercze i zastój moczu</td><td>dobra</td><td>zmiany nasilone są bardziej swoiste</td></tr>' +
      '<tr><td>Torbiele i zmiany ogniskowe</td><td>dobra</td><td>charakter często wymaga dalszej oceny</td></tr>' +
      '<tr><td>Ogon trzustki i światło jelit</td><td>ograniczona</td><td>przesłania je gaz jelitowy</td></tr>' +
      '</table>' +
      '<p>USG dobrze sprawdza się również w ocenie aorty brzusznej. Amerykański panel USPSTF zaleca jednorazowe USG przesiewowe w kierunku tętniaka aorty brzusznej u mężczyzn w wieku od 65 do 75 lat, którzy kiedykolwiek palili, ponieważ ultrasonografia wykrywa tętniak z dużą czułością i swoistością.</p>',
  },
  {
    title: 'Jak przygotować się do USG jamy brzusznej?',
    tocLabel: 'Przygotowanie',
    content:
      '<p>Do USG jamy brzusznej należy przygotować się przede wszystkim przez zgłoszenie się na czczo. Powstrzymanie się od jedzenia zwykle przez około 6 godzin ogranicza ilość gazów i treści pokarmowej oraz wypełnia pęcherzyk żółciowy, co ułatwia ocenę narządów.</p>' +
      '<p>Post jest praktyką poprawiającą jakość obrazu, a nie bezwzględnym warunkiem badania. W badaniach pęcherzyk żółciowy bywa dobrze widoczny także u części osób, które nie były na czczo, dlatego o ostatecznych zaleceniach decyduje pracownia podczas umawiania terminu.</p>' +
      '<p>Aby zwiększyć czytelność obrazu, warto dodatkowo:</p>' +
      '<ul>' +
      '<li>dzień lub dwa wcześniej stosować <strong>dietę lekkostrawną</strong> i unikać produktów wzdymających, takich jak warzywa kapustne, rośliny strączkowe, napoje gazowane czy świeże pieczywo,</li>' +
      '<li>przyjmowane na stałe <strong>leki popić niewielką ilością wody</strong>, o ile lekarz nie zaleci inaczej,</li>' +
      '<li>w dniu badania ograniczyć palenie i żucie gumy, które nasilają połykanie powietrza,</li>' +
      '<li>preparaty z <strong>symetykonem</strong> rozważyć tylko po konsultacji, bo dowody na ich przewagę są niejednoznaczne.</li>' +
      '</ul>' +
      '<p><strong>Pełny pęcherz moczowy nie jest rutynowym wymogiem.</strong> Bywa potrzebny tylko wtedy, gdy oceniane jest dolne piętro jamy brzusznej lub narządy miednicy, na przykład w badaniu <a href="/usg/ginekologiczne/">USG ginekologicznym</a>. Osoby z cukrzycą powinny ustalić porę badania i sposób przyjęcia leków indywidualnie, a u dzieci czas pozostawania na czczo jest krótszy i zależy od wieku.</p>',
  },
  {
    title: 'Jak przebiega badanie USG brzucha?',
    tocLabel: 'Przebieg badania',
    content:
      '<p>Badanie USG brzucha przebiega w pozycji leżącej i polega na przesuwaniu głowicy ultrasonografu po powłokach brzucha. Na skórę nanosi się żel sprzęgający, który poprawia przewodzenie fal i jakość obrazu. Cała procedura trwa zwykle około 15 do 20 minut.</p>' +
      '<p>W trakcie badania osoba badana bywa proszona o wstrzymanie oddechu lub zmianę ułożenia ciała, aby lepiej uwidocznić poszczególne narządy. Badanie jest bezbolesne, nie wymaga nakłuwania skóry ani rekonwalescencji, a po jego zakończeniu można wrócić do codziennych zajęć.</p>' +
      '<p>Wynik w formie opisu sporządza lekarz wykonujący badanie. Warto zabrać ze sobą wcześniejsze opisy USG, jeśli badanie ma charakter kontrolny. Opis ultrasonograficzny nie zastępuje konsultacji, ponieważ obraz interpretuje się w odniesieniu do objawów, wyników badań laboratoryjnych i całościowej oceny stanu zdrowia.</p>',
  },
  {
    title: 'Ograniczenia i bezpieczeństwo USG jamy brzusznej',
    tocLabel: 'Ograniczenia i bezpieczeństwo',
    content:
      '<p>USG jamy brzusznej jest badaniem bezpiecznym i powtarzalnym, ponieważ nie wykorzystuje promieniowania jonizującego. Nie wiążą się z nim szczególne przeciwwskazania, a sama procedura nie obciąża organizmu.</p>' +
      '<p>Ultrasonografia ma jednak ograniczenia. Jakość obrazu zależy od doświadczenia osoby badającej oraz od warunków anatomicznych. <strong>Gaz jelitowy i tkanka tłuszczowa odbijają oraz rozpraszają fale ultradźwiękowe</strong>, dlatego u osób z otyłością lub przy rozdętych jelitach niektóre struktury są trudne do oceny. Dotyczy to zwłaszcza ogona trzustki i aorty brzusznej, które bywają częściowo zasłonięte.</p>' +
      '<h3>Czego USG brzucha nie ocenia</h3>' +
      '<p>Ultrasonografia obrazuje narządy miąższowe i naczynia, ale słabo ocenia błonę śluzową oraz światło przewodu pokarmowego. Choroby takie jak wrzody żołądka, zmiany zapalne jelit czy rak jelita grubego wymagają innych badań, przede wszystkim gastroskopii, kolonoskopii albo tomografii i rezonansu.</p>' +
      '<p>Wynik USG opisuje obraz, a nie stawia rozpoznania. O znaczeniu obserwacji i o dalszym postępowaniu decyduje lekarz, zestawiając badanie z objawami i pozostałą dokumentacją medyczną.</p>',
  },
  {
    title: 'USG jamy brzusznej a inne badania: TK, rezonans, endoskopia',
    tocLabel: 'USG a inne badania',
    content:
      '<p>USG jamy brzusznej jest zwykle pierwszym, przeglądowym badaniem obrazowym brzucha. Gdy obraz jest niejednoznaczny lub potrzebna jest dokładna ocena narządów zaotrzewnowych, lekarz kieruje na badania uzupełniające.</p>' +
      '<table>' +
      '<tr><th>Badanie</th><th>Promieniowanie</th><th>Zastosowanie</th><th>Ograniczenie</th></tr>' +
      '<tr><td>USG</td><td>brak</td><td>przegląd narządów miąższowych, pęcherzyk, nerki, aorta, badania u dzieci i w ciąży</td><td>gaz jelitowy i otyłość, światło jelit</td></tr>' +
      '<tr><td>Tomografia (TK)</td><td>tak</td><td>narządy zaotrzewnowe, urazy, dokładna ocena aorty i trzustki</td><td>promieniowanie, podanie kontrastu</td></tr>' +
      '<tr><td>Rezonans (MR)</td><td>brak</td><td>drogi żółciowe i zmiany ogniskowe wątroby</td><td>czas, dostępność, koszt</td></tr>' +
      '<tr><td>Endoskopia</td><td>brak</td><td>błona śluzowa i światło przewodu pokarmowego</td><td>badanie inwazyjne, wymaga przygotowania</td></tr>' +
      '</table>' +
      '<p>Gdy dolegliwości dotyczą jednego narządu, lepiej sprawdzają się badania celowane. <a href="/usg/watroba/">USG wątroby</a> dokładniej obrazuje miąższ i drogi żółciowe, <a href="/usg/nerki/">USG nerek</a> ocenia drogi moczowe oraz zastój moczu, a u mężczyzn <a href="/usg/prostata/">USG prostaty</a> wykonuje się przezbrzusznie. Pełną ofertę przedstawia <a href="/usg/">pracownia USG</a> Bas Clinic.</p>',
  },
  {
    title: 'Cena i wizyta we Wrocławiu',
    tocLabel: 'Cena i wizyta we Wrocławiu',
    content:
      `<p>USG jamy brzusznej w Bas Clinic wykonujemy prywatnie, bez skierowania, w pracowni ultrasonografii we Wrocławiu. Termin badania umówisz telefonicznie lub przez formularz rejestracji online.</p>` +
      `<p>Cena zależy od zakresu badania, czyli liczby ocenianych narządów. Aktualne stawki znajdziesz w zakładce <a href="/cennik/">cennik</a>, a szczegóły doprecyzujesz pod numerem ${CLINIC.phone}. Pracownia działa przy ${CLINIC.address.street} we Wrocławiu, a wizytę zarezerwujesz przez <a href="/rejestracja/">rejestrację online</a>.</p>` +
      `<p>Treść ma charakter informacyjny i nie zastępuje konsultacji lekarskiej ani indywidualnej oceny. O zakresie badania, interpretacji wyniku i dalszym postępowaniu decyduje lekarz po zapoznaniu się z sytuacją pacjenta.</p>`,
  },
  {
    title: 'Źródła',
    tocLabel: 'Źródła',
    content:
      '<ol>' +
      '<li>Walas MK i wsp. Standardy badań USG Polskiego Towarzystwa Ultrasonograficznego: wątroba, pęcherzyk i drogi żółciowe. J Ultrason. 2012. (PMID 26673807)</li>' +
      '<li>Tyloch JF i wsp. Standardy badań USG PTU: nerki, moczowody i pęcherz moczowy. J Ultrason. 2013. (PMID 26673083)</li>' +
      '<li>Ćwik G i wsp. Standardy badań USG PTU: trzustka. J Ultrason. 2013. (PMID 26676070)</li>' +
      '<li>Walczyk J i wsp. Standardy badań USG PTU: śledziona. J Ultrason. 2013. (PMID 26672802)</li>' +
      '<li>AIUM, ACR, SPR, SRU. Practice parameter for the performance of an ultrasound examination of the abdomen and/or retroperitoneum. 2022. (PMID 34792206)</li>' +
      '<li>Nylund K i wsp. EFSUMB recommendations: gastrointestinal ultrasound, część 1. Ultraschall Med. 2017. (PMID 27604052)</li>' +
      '<li>Shea JA i wsp. Diagnostyczna czułość i swoistość badań w podejrzeniu chorób dróg żółciowych (metaanaliza). Arch Intern Med. 1994. (PMID 7979854)</li>' +
      '<li>Huang RJ i wsp. Dokładność badań obrazowych w ostrym zapaleniu pęcherzyka żółciowego (metaanaliza). 2023. (PMID 38037062)</li>' +
      '<li>Kiewiet JJS i wsp. Dokładność obrazowania w ostrym zapaleniu pęcherzyka żółciowego (przegląd i metaanaliza). Radiology. 2012. (PMID 22798223)</li>' +
      '<li>Hernaez R i wsp. Dokładność i powtarzalność USG w wykrywaniu stłuszczenia wątroby (metaanaliza). Hepatology. 2011. (PMID 21618575)</li>' +
      '<li>Concannon E i wsp. Dokładność USG w rozpoznawaniu tętniaka aorty brzusznej (metaanaliza). 2014. (PMID 24837590)</li>' +
      '<li>Rubano E i wsp. USG przyłóżkowe w podejrzeniu tętniaka aorty brzusznej (przegląd systematyczny). Acad Emerg Med. 2013. (PMID 23406071)</li>' +
      '<li>US Preventive Services Task Force (Owens DK i wsp.). Badanie przesiewowe w kierunku tętniaka aorty brzusznej. JAMA. 2019. (PMID 31821437)</li>' +
      '<li>Wanhainen A i wsp. Wytyczne ESVS 2024 dotyczące tętniaków aorty brzusznej i biodrowych. Eur J Vasc Endovasc Surg. 2024. (PMID 38307694)</li>' +
      '<li>Wong C i wsp. Dokładność USG przyłóżkowego w rozpoznawaniu kamicy moczowej (metaanaliza). 2018. (PMID 29427476)</li>' +
      '<li>Sibley S i wsp. USG przyłóżkowe w rozpoznawaniu wodonercza. 2020. (PMID 32507905)</li>' +
      '<li>Podoll A i wsp. Wydajność USG nerek w ostrym uszkodzeniu nerek. 2013. (PMID 24011084)</li>' +
      '<li>Sinan T i wsp. Wpływ pozostawania na czczo na uwidocznienie pęcherzyka żółciowego (badanie z randomizacją). 2003. (PMID 12873354)</li>' +
      '<li>Meier J i wsp. Ograniczenia ultrasonografii jamy brzusznej, w tym uwidocznienie ogona trzustki. 2024. (PMID 39411753)</li>' +
      '<li>Liisberg M i wsp. Uwidocznienie aorty brzusznej w USG w ramach badania DANCAVAS. 2017. (PMID 28193267)</li>' +
      '</ol>',
  },
];

const FAQ = [
  {
    question: 'Czy do USG jamy brzusznej trzeba być na czczo?',
    answer:
      'Do USG jamy brzusznej należy zgłosić się na czczo. Zaleca się powstrzymanie od jedzenia zwykle przez około 6 godzin oraz lekkostrawną dietę dzień wcześniej, co ogranicza ilość gazów utrudniających ocenę narządów. Leki przyjmowane na stałe można popić niewielką ilością wody. Pełny pęcherz moczowy jest potrzebny tylko wtedy, gdy dodatkowo oceniane są narządy miednicy.',
  },
  {
    question: 'Ile trwa USG jamy brzusznej?',
    answer:
      'USG jamy brzusznej trwa zwykle około 15 do 20 minut. Czas zależy od liczby ocenianych narządów oraz od warunków obrazowania, takich jak ilość gazów jelitowych i budowa ciała. Badanie nie wymaga rekonwalescencji, a po jego zakończeniu można wrócić do codziennych zajęć.',
  },
  {
    question: 'Co wykrywa USG jamy brzusznej?',
    answer:
      'USG jamy brzusznej pozwala uwidocznić między innymi kamicę pęcherzyka żółciowego, stłuszczenie i zmiany ogniskowe wątroby, torbiele, powiększenie śledziony, tętniak aorty brzusznej oraz zastój moczu i zmiany w nerkach. Badanie opisuje obraz narządów, ale nie stawia rozpoznania, które ustala lekarz na podstawie całości danych.',
  },
  {
    question: 'Czy USG brzucha jest bolesne i bezpieczne?',
    answer:
      'USG brzucha jest badaniem bezbolesnym i bezpiecznym. Wykorzystuje fale ultradźwiękowe, a nie promieniowanie jonizujące, dlatego można je wielokrotnie powtarzać i stosuje się je również u dzieci oraz u kobiet w ciąży. Podczas badania odczuwa się jedynie chłód żelu i delikatny ucisk głowicy na powłoki brzucha.',
  },
  {
    question: 'Czy na USG jamy brzusznej potrzebne jest skierowanie?',
    answer:
      `Na USG jamy brzusznej skierowanie nie jest wymagane. Badanie wykonujemy prywatnie w Bas Clinic we Wrocławiu, dlatego można je umówić bezpośrednio, bez skierowania od lekarza. Termin rezerwuje się telefonicznie pod numerem ${CLINIC.phone} lub przez formularz rejestracji online, często z szybkim terminem.`,
  },
  {
    question: 'Gdzie we Wrocławiu wykonać USG jamy brzusznej?',
    answer:
      `USG jamy brzusznej we Wrocławiu wykonasz w pracowni ultrasonografii Bas Clinic przy ${CLINIC.address.street}. Termin umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez formularz rejestracji online, w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

export default function UsgJamyBrzusznejPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="USG jamy brzusznej we Wrocławiu"
      heroSubtitle="Ultrasonografia"
      heroDescription="USG jamy brzusznej (USG brzucha) to bezbolesne badanie obrazujące wątrobę, trzustkę, nerki, śledzionę i pęcherzyk żółciowy. Wykonujemy je w Bas Clinic przy ul. Opatowickiej 132 we Wrocławiu."
      slug="usg/jama-brzuszna"
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
