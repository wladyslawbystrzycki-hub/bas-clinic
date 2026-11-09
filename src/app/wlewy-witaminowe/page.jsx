import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { CLINIC } from '@/config/clinic';
import { WLEWY_TIERS, getWlewyDrips, getWlewyPriceFrom } from '@/config/services';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import KnowledgeSection from '../components/KnowledgeSection';
import OfferCards from '../components/OfferCards';
import PricingTiers from '../components/PricingTiers';
import ProcessSteps from '../components/ProcessSteps';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import ExpertInfoSection from '../components/ExpertInfoSection';
import Testimonials from '../components/Testimonials';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import FAQPageSchema from '../components/schema/FAQPageSchema';
import JsonLd from '../components/schema/JsonLd';
import { getWhyUs } from '@/config/whyUs';
import { getTestimonials } from '@/config/testimonials';

export const metadata = generatePageMetadata({
  title: 'Kroplówki witaminowe Wrocław - skład i cena',
  description:
    'Kroplówki witaminowe we Wrocławiu w Bas Clinic: dziesięć wlewów dożylnych w wariantach Standard, VIP i Exclusive. Kwalifikacja lekarska, skład, cena od 500 zł.',
  path: '/wlewy-witaminowe/',
});

const BREADCRUMBS = [{ label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' }];

const DRIPS = getWlewyDrips();
const PRICE_FROM = getWlewyPriceFrom();

// Linia meta na karcie: cena „od" (= wariant Standard) i czas trwania.
function cardMeta(service) {
  return `od ${PRICE_FROM} zł · ${service.duration}`;
}

// Treść bloku „Czym są kroplówki witaminowe?" (KnowledgeSection).
// ⚠️ Zdjęcia wygenerowane modelem AI (Nano Banana 2) na prośbę właściciela —
// wyjątek od reguły „licencjonowany stock, nie AI" obowiązującej w reszcie repo.
const KNOWLEDGE_HUB = {
  eyebrow: 'Terapia infuzyjna',
  title: 'Czym są kroplówki witaminowe?',
  description:
    'Kroplówki witaminowe, nazywane też wlewami witaminowymi, to dożylne podanie witamin, elektrolitów i antyoksydantów. Składniki omijają przewód pokarmowy, dlatego cała dawka trafia do krwi.',
  points: [
    {
      title: 'Prosto do krwiobiegu',
      text: 'Droga dożylna ma znaczenie przy niedoborach, zaburzeniach wchłaniania, w rekonwalescencji po infekcji i przy odwodnieniu.',
    },
    {
      title: 'Kwalifikacja lekarska',
      text: 'Przed każdym wlewem lekarz ocenia wskazania i przeciwwskazania oraz dobiera skład do celu wizyty.',
    },
    {
      title: 'Trzy warianty składu',
      text: 'Każdą kroplówkę podajemy w wariancie Standard, VIP albo Exclusive, z preparatów przeznaczonych do podania pozajelitowego.',
    },
    {
      title: 'Bez rekonwalescencji',
      text: 'Wlew trwa od 60 do 90 minut, a po nim można wrócić do pracy i prowadzić samochód.',
    },
  ],
  image: '/uploads/services/kompendium-kroplowki-wlew-bas-clinic-wroclaw.webp',
  image2: '/uploads/services/kompendium-kroplowki-przygotowanie-bas-clinic-wroclaw.webp',
  imageAlt: 'Pacjentka podczas kroplówki witaminowej w Bas Clinic we Wrocławiu',
  ctaLabel: 'Umów wlew',
};

// Wskazania jako zakładki (ProcessSteps, `ordered={false}`). Treść zachowawcza:
// wlew jest uzupełnieniem, o wskazaniach decyduje lekarz — bez obietnic efektów.
const WSKAZANIA = [
  {
    title: 'Rekonwalescencja po infekcji',
    icon: 'infekcja',
    description:
      'Po przebytej infekcji przez kilka tygodni może utrzymywać się osłabienie, spadek energii i gorsza tolerancja wysiłku. Wlew uzupełnia płyny, elektrolity i witaminy jako dodatek do odpoczynku i leczenia zaleconego przez lekarza, nie zamiast nich.',
    bullets: ['Osłabienie i spadek energii po chorobie', 'Uzupełnienie płynów, elektrolitów i witamin', 'Po zakończonym leczeniu infekcji'],
  },
  {
    title: 'Potwierdzone niedobory',
    icon: 'niedobory',
    description:
      'Gdy badania krwi wykazują niedobór witamin lub elektrolitów, a suplementacja doustna nie przynosi efektu albo jest źle tolerowana, lekarz może zaproponować podanie dożylne. Kroplówkę i wariant dobiera po przejrzeniu wyników, nie na podstawie samych objawów.',
    bullets: ['Niedobór potwierdzony w badaniach krwi', 'Gdy suplementacja doustna nie działa', 'Skład dobrany do wyników, nie do objawów'],
  },
  {
    title: 'Zaburzenia wchłaniania',
    icon: 'wchlanianie',
    description:
      'Przy chorobach jelit, po operacjach przewodu pokarmowego lub przy nietolerancji preparatów doustnych składniki przyjmowane doustnie mogą wchłaniać się tylko częściowo. Droga dożylna omija przewód pokarmowy, dlatego cała dawka trafia do krwi.',
    bullets: ['Choroby jelit i stany po operacjach', 'Nietolerancja preparatów doustnych', 'Cała dawka omija przewód pokarmowy'],
  },
  {
    title: 'Odwodnienie',
    icon: 'odwodnienie',
    description:
      'Po intensywnym wysiłku, upale, gorączce lub alkoholu organizm traci wodę i elektrolity. Wlew podaje je bezpośrednio do krwi, co ma znaczenie, gdy nawadnianie doustne jest utrudnione, na przykład przy nudnościach.',
    bullets: ['Po wysiłku, upale, gorączce lub alkoholu', 'Woda i elektrolity prosto do krwi', 'Gdy picie nie wystarcza lub jest utrudnione'],
  },
  {
    title: 'Trening i regeneracja',
    icon: 'trening',
    description:
      'Przy dużych obciążeniach treningowych rośnie zapotrzebowanie na płyny, elektrolity i witaminy. Wlew może być elementem regeneracji między blokami treningowymi, po ocenie lekarza i z uwzględnieniem przepisów antydopingowych u osób startujących w zawodach.',
    bullets: ['Regeneracja między blokami treningowymi', 'Płyny, elektrolity i witaminy', 'Z uwzględnieniem przepisów antydopingowych'],
  },
  {
    title: 'Przewlekły stres i przeciążenie',
    icon: 'stres',
    description:
      'Długotrwałe przeciążenie pracą, niedosypianie i stres często idą w parze z nieregularnym jedzeniem i odwodnieniem. Wlew uzupełnia płyny i witaminy z grupy B, ale nie zastępuje snu, odpoczynku ani diagnostyki, jeśli zmęczenie się utrzymuje.',
    bullets: ['Przeciążenie pracą i niedosypianie', 'Uzupełnienie płynów i witamin z grupy B', 'Utrzymujące się zmęczenie wymaga diagnostyki'],
  },
];

// Przebieg wizyty w jednym rzędzie (ProcessTimeline) — realna kolejność, niosą ją łączniki.
const PRZEBIEG = [
  {
    title: 'Kwalifikacja lekarska',
    icon: 'kwalifikacja',
    description: 'Wywiad o chorobach, lekach i alergiach, przegląd wyników badań, wybór kroplówki i wariantu.',
  },
  {
    title: 'Przygotowanie wlewu',
    icon: 'przygotowanie',
    description: 'Roztwór powstaje na miejscu, bezpośrednio przed podaniem, z preparatów do podania pozajelitowego.',
  },
  {
    title: 'Wlew',
    icon: 'wlew',
    description: 'Cienki wenflon w żyle przedramienia i 60–90 minut w wygodnym fotelu pod opieką personelu.',
  },
  {
    title: 'Po wlewie',
    icon: 'powrot',
    description: 'Krótka obserwacja i powrót do codziennych zajęć, także za kierownicą.',
  },
];

// FAQ ogólne dla huba (samodzielne chunki, keyword-echo na początku odpowiedzi)
const FAQ = [
  {
    question: 'Czym są wlewy witaminowe?',
    answer:
      'Wlewy witaminowe to dożylne podanie roztworu witamin, elektrolitów i antyoksydantów bezpośrednio do krwiobiegu, z pominięciem przewodu pokarmowego. Dzięki temu cała podana dawka trafia do krwi, co ma znaczenie przy niedoborach, zaburzeniach wchłaniania i w rekonwalescencji. Wlew nie zastępuje leczenia ani zbilansowanej diety.',
  },
  {
    question: 'Ile kosztuje kroplówka witaminowa we Wrocławiu?',
    answer: `Kroplówka witaminowa w Bas Clinic we Wrocławiu kosztuje od ${WLEWY_TIERS[0].price} zł. Każda z dziesięciu kroplówek ma trzy warianty składu: ${WLEWY_TIERS.map((t) => `${t.label} ${t.price} zł`).join(', ')}. Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe i opiekę podczas wlewu. Terapie peptydowe wyceniamy po konsultacji.`,
  },
  {
    question: 'Czym różnią się warianty Standard, VIP i Exclusive?',
    answer:
      'Warianty Standard, VIP i Exclusive różnią się składem, nie tylko liczbą składników. Standard może obejmować sam płyn bazowy, jak Optilyte 500 ml w nawodnieniu. VIP i Exclusive mogą dodawać składniki, zwiększać ich dawki albo zastępować preparaty, zależnie od kroplówki. Dokładny skład każdego wariantu podajemy na stronie danej kroplówki.',
  },
  {
    question: 'Jak długo trwa wlew witaminowy?',
    answer:
      'Wlew witaminowy trwa od 60 do 90 minut, zależnie od kroplówki i objętości roztworu. Do tego dochodzi kwalifikacja lekarska przed podaniem (10-15 minut) i krótka obserwacja po zakończeniu. Po wlewie można od razu wrócić do pracy i prowadzić samochód.',
  },
  {
    question: 'Czy do wlewu witaminowego potrzebne są badania lub skierowanie?',
    answer:
      'Do wlewu witaminowego nie jest potrzebne skierowanie. Aktualne wyniki badań (morfologia, kreatynina, jonogram) są pomocne przy kwalifikacji, ale nie zawsze wymagane. Lekarz ocenia to podczas wywiadu i może zalecić badania przed serią wlewów, zwłaszcza przy chorobach nerek, serca lub wątroby.',
  },
  {
    question: 'Kto nie powinien przyjmować kroplówek witaminowych?',
    answer:
      'Kroplówek witaminowych nie podajemy przy niewydolności nerek i serca, niekontrolowanym nadciśnieniu, nadwrażliwości na składniki wlewu, a wariantów z witaminą C przy hemochromatozie, niedoborze G6PD i kamicy szczawianowej. Ciąża i karmienie piersią wymagają indywidualnej decyzji lekarza. Pełną listę przeciwwskazań podajemy na stronie każdej kroplówki.',
  },
  {
    question: 'Gdzie we Wrocławiu podać wlew witaminowy?',
    answer: `Wlewy witaminowe we Wrocławiu podajemy w Bas Clinic przy ${CLINIC.address.street}. Wizytę umówisz telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

// Kompendium „Informacje od specjalisty" - pasaże wspólne dla całej oferty
// (szczegóły składu, wskazań i przeciwwskazań są na stronach kroplówek).
const EXPERT_INFO = [
  {
    title: 'Jak działa wlew dożylny i czym różni się od suplementów',
    tocLabel: 'Jak działa wlew',
    content: (
      <>
        <p>Wlew dożylny omija przewód pokarmowy i metabolizm pierwszego przejścia w wątrobie, dlatego cała podana dawka trafia do krwi. Przy suplementach doustnych część substancji nie wchłania się w jelicie, a część jest metabolizowana, zanim dotrze do krwiobiegu.</p>
        <p>Różnica jest największa przy witaminie C i witaminie B12. Wchłanianie witaminy C ogranicza nasycalny transporter jelitowy, więc przy dawkach doustnych rzędu 1 g stężenie w osoczu rośnie już tylko nieznacznie, a po podaniu dożylnym jest wielokrotnie wyższe (Padayatty i wsp., 2004). Witamina B12 doustnie przyswaja się w około 1-2% dawki przekraczającej pojemność czynnika wewnętrznego.</p>
        <h3>Kiedy droga dożylna ma sens</h3>
        <ul>
          <li>potwierdzone badaniami niedobory witamin lub elektrolitów,</li>
          <li>zaburzenia wchłaniania: choroby zapalne jelit, celiakia, stan po operacjach bariatrycznych,</li>
          <li>rekonwalescencja po infekcji, odwodnienie po wysiłku, upale lub gorączce,</li>
          <li>nudności i wymioty utrudniające przyjmowanie płynów i tabletek.</li>
        </ul>
        <p>U osoby zdrowej, która odżywia się prawidłowo, dieta i suplementacja doustna zwykle wystarczają. Mówimy to wprost podczas kwalifikacji, bo wlew nie jest potrzebny każdemu.</p>
      </>
    ),
  },
  {
    title: 'Skład kroplówek witaminowych: baza, składniki czynne i warianty',
    tocLabel: 'Skład i warianty',
    content: (
      <>
        <p>Bazą każdej kroplówki jest płyn infuzyjny 500 ml: sól fizjologiczna NaCl 0,9%, zbilansowany płyn wieloelektrolitowy (Optilyte) albo glukoza, zależnie od celu wlewu. Dodatki zależą od wybranego wlewu i wariantu, a Nawodnienie Standard to sam Optilyte.</p>
        <h3>Składniki czynne stosowane w naszych kroplówkach</h3>
        <table>
          <tbody>
            <tr>
              <th>Składnik</th>
              <th>Rola we wlewie</th>
              <th>Przykładowe kroplówki</th>
            </tr>
            <tr>
              <td>Kompleks witamin B (B1, B6, B12)</td>
              <td>metabolizm energetyczny, przewodnictwo nerwowe, erytropoeza</td>
              <td>Witaminowa bomba (Standard i VIP), energetyczna i Sport i regeneracja (VIP i Exclusive)</td>
            </tr>
            <tr>
              <td>Witamina C</td>
              <td>antyoksydant, kofaktor syntezy kolagenu, wsparcie komórek odpornościowych</td>
              <td>na odporność, Anti-age, Witaminowa bomba (VIP)</td>
            </tr>
            <tr>
              <td>Magnez</td>
              <td>kofaktor setek reakcji enzymatycznych, praca mięśni i układu nerwowego</td>
              <td>Sport i regeneracja, na zmęczenie i stres, energetyczna</td>
            </tr>
            <tr>
              <td>TAD 600 (glutation)</td>
              <td>główny antyoksydant wewnątrzkomórkowy; doustnie rozkłada się w przewodzie pokarmowym</td>
              <td>Sport i regeneracja, na odporność, nawodnienie i energetyczna (Exclusive); na zmęczenie i stres (VIP i Exclusive)</td>
            </tr>
            <tr>
              <td>Hepa-Merz (L-ornityny L-asparaginian)</td>
              <td>udział w cyklu mocznikowym, lek stosowany przy hiperamonemii</td>
              <td>Detox wątroby</td>
            </tr>
            <tr>
              <td>Natrium Bicarbonicum</td>
              <td>bufor równowagi kwasowo-zasadowej</td>
              <td>After party, Detox wątroby (VIP i Exclusive)</td>
            </tr>
            <tr>
              <td>Cernevit, koenzym Q10 (ubichinon)</td>
              <td>wieloskładnikowy preparat witaminowy; ubichinon w łańcuchu oddechowym</td>
              <td>Witaminowa bomba (Exclusive), na libido (Exclusive)</td>
            </tr>
          </tbody>
        </table>
        <p>Warianty nie zawsze się sumują: Exclusive może dodawać składniki do VIP albo zastępować jeden preparat innym. Dlatego wariant dobiera lekarz, a nie pacjent z cennika. Stosujemy wyłącznie preparaty do podania pozajelitowego, nigdy suplementy diety rozpuszczane do wlewu.</p>
      </>
    ),
  },
  {
    title: 'Kwalifikacja lekarska i przebieg wlewu w Bas Clinic we Wrocławiu',
    tocLabel: 'Kwalifikacja i przebieg',
    content: (
      <>
        <p>W Bas Clinic żaden pacjent nie otrzymuje wlewu bez kwalifikacji lekarskiej. Lekarz zbiera wywiad, wyklucza przeciwwskazania, ogląda wyniki badań, jeśli pacjent je przyniósł, i dobiera kroplówkę oraz wariant do celu wizyty.</p>
        <ol>
          <li><strong>Wywiad lekarski</strong>: choroby przewlekłe (nerki, serce, cukrzyca, wątroba), alergie, leki i suplementy, ciąża.</li>
          <li><strong>Dobór wlewu i wariantu</strong>: zgodnie z celem (odporność, regeneracja, nawodnienie, skóra) i stanem zdrowia.</li>
          <li><strong>Przygotowanie roztworu</strong> na miejscu, bezpośrednio przed podaniem.</li>
          <li><strong>Wlew</strong>: cienki wenflon w żyle przedramienia, 60-90 minut w fotelu pod opieką personelu.</li>
          <li><strong>Obserwacja</strong>: kontrola samopoczucia i opatrunek; można od razu wrócić do codziennych zajęć.</li>
        </ol>
        <p>Wizytę umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie. Pełne ceny wariantów znajdziesz w <Link href="/cennik/">cenniku</Link>.</p>
      </>
    ),
  },
  {
    title: 'Bezpieczeństwo wlewów witaminowych i przeciwwskazania',
    tocLabel: 'Bezpieczeństwo',
    content: (
      <>
        <p>Wlew dożylny to procedura medyczna z naruszeniem ciągłości skóry. Nawet przy składnikach uznawanych za bezpieczne istnieją stany, w których kroplówka jest przeciwwskazana lub wymaga ostrożności.</p>
        <h3>Najważniejsze przeciwwskazania</h3>
        <ul>
          <li><strong>Niewydolność nerek i serca, niekontrolowane nadciśnienie</strong>: dodatkowa objętość płynów obciąża krążenie, a nerki wolniej wydalają metabolity.</li>
          <li><strong>Hemochromatoza, niedobór G6PD, kamica szczawianowa</strong>: przeciwwskazania do wariantów z witaminą C.</li>
          <li><strong>Niewyrównana cukrzyca</strong>: przeciwwskazanie do wlewów na bazie glukozy.</li>
          <li><strong>Nadwrażliwość</strong> na którykolwiek składnik, w tym na tiaminę podawaną pozajelitowo.</li>
          <li><strong>Ciąża i karmienie piersią</strong>: decyzja indywidualna, brak wystarczających danych o bezpieczeństwie.</li>
        </ul>
        <p>Możliwe działania niepożądane to ból lub zaczerwienienie w miejscu wkłucia, metaliczny posmak, przejściowe uczucie ciepła. Rzadko dochodzi do reakcji alergicznej; gabinet dysponuje zestawem przeciwwstrząsowym. Sportowcy podlegający kontroli antydopingowej powinni wiedzieć, że wlewy dożylne powyżej 100 ml w ciągu 12 godzin poza szpitalem są na liście metod zabronionych WADA (M2), niezależnie od składu.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Padayatty S.J. i wsp. Vitamin C pharmacokinetics: implications for oral and intravenous use. Annals of Internal Medicine 2004; 140(7): 533-537. PMID 15068981.</li>
        <li>Carr A.C., Maggini S. Vitamin C and Immune Function. Nutrients 2017; 9(11): 1211. PMID 29099763.</li>
        <li>Hemilä H., Chalker E. Vitamin C for preventing and treating the common cold. Cochrane Database of Systematic Reviews 2013; CD000980. PMID 23440782.</li>
        <li>Gaby A.R. Intravenous nutrient therapy: the &quot;Myers&apos; cocktail&quot;. Alternative Medicine Review 2002; 7(5): 389-403. PMID 12410623.</li>
        <li>World Anti-Doping Agency. The Prohibited List (aktualne wydanie): sekcja M2 (manipulacje chemiczne i fizyczne), pkt dotyczący wlewów dożylnych.</li>
        <li>Charakterystyki Produktów Leczniczych: Optilyte (Fresenius Kabi), TAD 600 (Biomedica), Hepa-Merz (Merz), Cernevit (Baxter).</li>
      </ol>
    ),
  },
];

const DRIP_ITEM_LIST = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wlewy witaminowe w Bas Clinic we Wrocławiu',
  itemListElement: DRIPS.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `${CLINIC.url}/${s.slug}/`,
  })),
};

export default function WlewyWitaminowePage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQPageSchema questions={FAQ} />
      <JsonLd data={DRIP_ITEM_LIST} />

      <HeroSection
        id="hero"
        subtitle="Wlewy witaminowe"
        title="Kroplówki witaminowe Wrocław"
        description={`Kroplówki dożylne w Bas Clinic przy ${CLINIC.address.street} we Wrocławiu: dziesięć receptur w wariantach Standard, VIP i Exclusive. Każdy wlew poprzedza kwalifikacja lekarska.`}
        ctaText="Umów wlew"
      />

      {/* Definicja — wspólny blok „Kompendium wiedzy" (KnowledgeSection), ten sam
          komponent co na podstronach usług; treść hubu zamiast per-usługa. */}
      <KnowledgeSection id="o-wlewach" {...KNOWLEDGE_HUB} />

      {/* Pełna oferta (OfferCards). Lista kart nosi id klastra `kroplowki`, bo menu
          linkuje do `/wlewy-witaminowe/#kroplowki`; sekcja zostaje pod stałym `oferta`. */}
      <OfferCards
        id="oferta"
        listId="kroplowki"
        eyebrow="Oferta"
        title="Kroplówki witaminowe w Bas Clinic"
        description="Dziesięć kroplówek dożylnych. Każda ma osobną stronę ze składem wariantów, wskazaniami, przeciwwskazaniami i przebiegiem wizyty."
        items={DRIPS.map((s) => ({
          id: s.id,
          name: s.name,
          description: s.shortDesc,
          meta: cardMeta(s),
          href: `/${s.slug}/`,
          icon: s.icon,
        }))}
        linkLabel="Skład i wskazania"
      />

      {/* Warianty i ceny (siatka wspólna dla wszystkich kroplówek) */}
      <PricingTiers
        id="warianty"
        eyebrow="Warianty i ceny"
        title="Standard, VIP i Exclusive"
        description="Każda kroplówka ma trzy warianty składu w tej samej siatce cen. Skład wariantu zależy od kroplówki i jest opisany na jej stronie; wariant dobiera lekarz podczas kwalifikacji."
        tiers={WLEWY_TIERS}
        note="Cena obejmuje kwalifikację lekarską, preparaty, materiały jednorazowe i opiekę podczas wlewu."
        noteDetail="Terapie peptydowe wyceniamy indywidualnie po konsultacji."
        ctaLabel="Umów wlew"
      />

      {/* Wskazania jako zakładki (ProcessSteps bez numeracji: lista, nie sekwencja),
          przebieg wizyty osobno w ciemnym paśmie (ProcessTimeline) */}
      <ProcessSteps
        id="wskazania"
        eyebrow="Wskazania"
        title="Kiedy warto rozważyć kroplówkę?"
        description="Wlew jest uzupełnieniem, nie leczeniem. O wskazaniach decyduje lekarz na podstawie wywiadu; przy objawach choroby wlew nie zastępuje diagnostyki ani leczenia."
        steps={WSKAZANIA}
        ordered={false}
        tabsLabel="Wskazania"
        image="/uploads/services/kompendium-konsultacja-lekarska-bas-clinic-wroclaw.webp"
        imageAlt="Lekarka podczas konsultacji przed kroplówką witaminową w Bas Clinic we Wrocławiu"
        ctaLabel="Umów wlew"
      />

      <ProcessTimeline
        id="przebieg"
        eyebrow="Przebieg wizyty"
        title="Jak wygląda wizyta w Bas Clinic?"
        steps={PRZEBIEG}
        note="Skierowanie nie jest potrzebne. Warto zabrać aktualne wyniki badań, jeśli są dostępne."
      />

      {/* Informacje od specjalisty - kompendium wspólne dla oferty; brak AuthorBio na wlewach */}
      <Section id="informacje">
        <ExpertInfoSection eyebrow="Informacje od specjalisty" items={EXPERT_INFO} />
      </Section>

      <FAQSection items={FAQ} contactHref="/kontakt/" title="Najczęściej zadawane pytania o wlewy witaminowe" />

      <Testimonials id="opinie" items={getTestimonials('Wlewy witaminowe')} />

      <CTASection id="dlaczego-my" {...getWhyUs('wlewy-witaminowe')} />
    </>
  );
}
