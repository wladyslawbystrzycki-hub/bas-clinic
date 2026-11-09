import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { CLINIC } from '@/config/clinic';
import { getPeptydy } from '@/config/services';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import KnowledgeSection from '../components/KnowledgeSection';
import ServicesAccordion from '../components/ServicesAccordion';
import ProcessSteps from '../components/ProcessSteps';
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
  title: 'Terapie peptydowe Wrocław',
  description:
    'Terapie peptydowe we Wrocławiu w Bas Clinic: GHK-Cu, BPC-157 i peptydy osi GH. Konsultacja lekarska, badania, uczciwie o stanie dowodów i statusie prawnym (WADA). Wycena po konsultacji.',
  path: '/terapie-peptydowe/',
});

const BREADCRUMBS = [{ label: 'Terapie peptydowe', href: '/terapie-peptydowe/' }];

const PEPTYDY = getPeptydy();

// Status regulacyjny i stan dowodów per peptyd - jedno miejsce, z którego czerpią
// karty na hubie i tabela w kompendium (szczegóły na stronach peptydów).
const STATUS = {
  'terapie-peptydowe/ghk-cu': {
    evidence: 'małe badania miejscowe (skóra, włosy); dane in vitro i zwierzęce',
    legal: 'składnik kosmetyków i preparatów do mezoterapii; brak rejestracji jako lek do iniekcji',
    wada: 'niezabroniony',
  },
  'terapie-peptydowe/bpc-157': {
    evidence: 'brak badań z randomizacją; dane niemal wyłącznie zwierzęce',
    legal: 'niezarejestrowany w Polsce, UE i USA',
    wada: 'zabroniony (S0)',
  },
  'terapie-peptydowe/peptydy-osi-gh': {
    evidence: 'tesamorelina zbadana w lipodystrofii HIV; pozostałe: nieliczne, krótkie badania',
    legal: 'tesamorelina zarejestrowana w USA; sermorelina, CJC-1295, ipamorelin: niezarejestrowane',
    wada: 'zabronione (S2)',
  },
};

// Treść bloku „Czym są terapie peptydowe?" (KnowledgeSection).
// ⚠️ Zdjęcia wygenerowane modelem AI (Nano Banana 2) na prośbę właściciela —
// wyjątek od reguły „licencjonowany stock, nie AI" obowiązującej w reszcie repo.
const KNOWLEDGE_HUB = {
  eyebrow: 'Medycyna regeneracyjna',
  title: 'Czym są terapie peptydowe?',
  description:
    'Peptydy to krótkie łańcuchy aminokwasów, czyli cegiełek, z których zbudowane są białka; w organizmie działają jak sygnały dla komórek. W Bas Clinic obejmują trzy grupy: GHK-Cu, BPC-157 i peptydy osi GH, a o zastosowaniu decyduje lekarz.',
  points: [
    {
      title: 'Sygnał dla komórek',
      text: 'Peptyd wiąże się z receptorem i uruchamia konkretny proces: wydzielanie hormonu, syntezę kolagenu lub migrację komórek do miejsca urazu.',
    },
    {
      title: 'Różny stan badań',
      text: 'GHK-Cu ma badania w zastosowaniu miejscowym, BPC-157 przebadano niemal wyłącznie na zwierzętach, a większość sekretagogów, czyli substancji nakłaniających organizm do wydzielania własnych hormonów, nie ma rejestracji jako leki.',
    },
    {
      title: 'Konsultacja, nie cennik',
      text: 'Terapię poprzedza wywiad, badania i rozmowa o statusie prawnym oraz ryzykach; pacjent podpisuje świadomą zgodę, a lekarz może odmówić.',
    },
    {
      title: 'Ograniczenia dla sportowców',
      text: 'BPC-157 i peptydy osi GH są na liście substancji zabronionych WADA, więc nie stosujemy ich u osób podlegających kontroli antydopingowej.',
    },
  ],
  image: '/uploads/services/kompendium-peptydy-konsultacja-bas-clinic-wroclaw.webp',
  image2: '/uploads/services/kompendium-peptydy-fiolki-bas-clinic-wroclaw.webp',
  imageAlt: 'Konsultacja przed terapią peptydową w Bas Clinic we Wrocławiu',
};

// Panele oferty (ServicesAccordion - ten sam komponent co na stronie głównej).
// Nazwa i URL z configu usług (SSOT), treść prezentacyjna przy stronie.
// ⚠️ Zdjęcia wygenerowane modelem AI (Nano Banana 2), jak reszta grafik peptydowych.
const LEKARZ = CLINIC.founders.find((f) => f.name.includes('Bogdan'));

const PANELE = {
  'terapie-peptydowe/ghk-cu': {
    icon: 'peptydy',
    image: '/uploads/services/oferta-peptydy-ghk-cu-mezoterapia-bas-clinic-wroclaw.webp',
    imageAlt: 'Mezoterapia z peptydem GHK-Cu w Bas Clinic we Wrocławiu',
    description:
      'Naturalny peptyd miedziowy obecny w ludzkim osoczu. W badaniach pobudza syntezę kolagenu i elastyny oraz wspiera gojenie, przy czym u ludzi najlepiej udokumentowane są zastosowania miejscowe: na skórę twarzy i skórę głowy.\n\nW Bas Clinic GHK-Cu wchodzi w protokoły mezoterapii i pielęgnacji pozabiegowej. Stężenie, liczbę zabiegów i drogę podania ustala lekarz po ocenie skóry i wywiadzie.',
    bullets: [
      'Mezoterapia skóry i skóry głowy',
      'Wsparcie syntezy kolagenu',
      'Preparaty kosmetyczne i do iniekcji',
    ],
  },
  'terapie-peptydowe/bpc-157': {
    icon: 'peptydy',
    image: '/uploads/services/oferta-peptydy-bpc-157-konsultacja-bas-clinic-wroclaw.webp',
    imageAlt: 'Konsultacja lekarska przed terapią peptydem BPC-157 w Bas Clinic we Wrocławiu',
    description:
      'Syntetyczny peptyd badany pod kątem gojenia ścięgien, mięśni i błony śluzowej przewodu pokarmowego. Dane pochodzą niemal wyłącznie z badań na zwierzętach - nie ma badań z randomizacją u ludzi.\n\nBPC-157 nie jest zarejestrowany jako lek w Polsce, UE ani USA, a WADA umieściła go w kategorii S0. Lekarz omawia stan dowodów, ryzyka i status prawny, terapia wymaga świadomej zgody, a u sportowców pod kontrolą antydopingową jej nie prowadzimy.',
    bullets: [
      'Badany w regeneracji tkanek',
      'Substancja niezarejestrowana',
      'Wymagana świadoma zgoda',
    ],
  },
  'terapie-peptydowe/peptydy-osi-gh': {
    icon: 'peptydy',
    image: '/uploads/services/oferta-peptydy-osi-gh-badania-bas-clinic-wroclaw.webp',
    imageAlt: 'Badania krwi przed terapią peptydami osi GH w Bas Clinic we Wrocławiu',
    description:
      'Sekretagogi hormonu wzrostu, czyli substancje nakłaniające organizm do wydzielania własnego hormonu - sermorelina, CJC-1295, ipamorelin i tesamorelina - pobudzają przysadkę do produkcji GH, zamiast podawać gotowy hormon z zewnątrz. Jedyną zarejestrowaną cząsteczką z tej grupy jest tesamorelina (USA, lipodystrofia w przebiegu HIV, czyli nieprawidłowe rozmieszczenie tkanki tłuszczowej).\n\nKwalifikacja obejmuje wywiad i badania: IGF-1 (białko, przez które działa hormon wzrostu), poziom cukru we krwi oraz TSH, a w trakcie serii kontrolujemy te parametry. Cała grupa jest zabroniona przez WADA (S2), więc nie stosujemy jej u osób podlegających kontroli antydopingowej.',
    bullets: [
      'Sermorelina, CJC-1295, ipamorelin',
      'Tesamorelina zarejestrowana w USA',
      'Kontrola IGF-1 i glikemii',
    ],
  },
};

const OFERTA_PANELE = PEPTYDY.map((s) => ({
  title: s.name,
  href: `/${s.slug}/`,
  expert: { name: LEKARZ.name, role: 'Kwalifikacja lekarska', initials: LEKARZ.initials },
  ...PANELE[s.slug],
}));

// Etapy kwalifikacji - jedno miejsce, z którego czerpią sekcja `kwalifikacja`
// (ProcessSteps) i lista w kompendium (EXPERT_INFO). Treść = streszczenie
// kompendium, bez nowych twierdzeń o skuteczności.
const KWALIFIKACJA = [
  {
    title: 'Wywiad i cel terapii',
    icon: 'wywiad',
    description:
      'Lekarz pyta o choroby przewlekłe, leki, alergie i aktywność sportową, w tym o ewentualne kontrole antydopingowe. Ustala też, czego pacjent oczekuje i czy peptyd w ogóle jest właściwą drogą do tego celu.',
    bullets: ['Choroby przewlekłe, leki, alergie', 'Sport i kontrole antydopingowe', 'Oczekiwania i realny cel'],
  },
  {
    title: 'Badania',
    icon: 'badania',
    description:
      'Przed rozpoczęciem serii zlecamy morfologię, glukozę lub HbA1c, kreatyninę i próby wątrobowe. Przy peptydach osi GH dochodzą IGF-1 i TSH, a przy GHK-Cu ocena gospodarki miedzią, jeśli wywiad tego wymaga.',
    bullets: ['Morfologia, glukoza lub HbA1c', 'Kreatynina i próby wątrobowe', 'IGF-1 i TSH przy peptydach osi GH'],
  },
  {
    title: 'Omówienie dowodów i ryzyk',
    icon: 'dowody',
    description:
      'Rozmawiamy o tym, co o danym peptydzie wiadomo z badań, a czego nie wiadomo, oraz jaki ma status prawny i antydopingowy. Pacjent dowiaduje się, że dawki i profil bezpieczeństwa większości peptydów nie zostały ustalone w badaniach klinicznych.',
    bullets: ['Stan badań u ludzi', 'Status prawny w Polsce i UE', 'Lista substancji zabronionych WADA'],
  },
  {
    title: 'Decyzja i świadoma zgoda',
    icon: 'zgoda',
    description:
      'Decyzję podejmujemy wspólnie, a pacjent podpisuje świadomą zgodę po rozmowie o ryzyku. Lekarz może odmówić terapii, gdy nie widzi wskazań lub gdy ryzyko przewyższa możliwą korzyść.',
    bullets: ['Świadoma zgoda na piśmie', 'Lekarz może odmówić terapii', 'Pełna dokumentacja medyczna i dyskrecja'],
  },
  {
    title: 'Plan i monitorowanie',
    icon: 'plan',
    description:
      'Ustalamy drogę podania, schemat serii oraz terminy wizyt kontrolnych i badań. Niepokojące objawy w trakcie terapii są powodem do jej przerwania, nie do zwiększenia dawki.',
    bullets: ['Droga podania i schemat serii', 'Badania kontrolne w trakcie serii', 'Wycena po konsultacji'],
  },
];

const FAQ = [
  {
    question: 'Czym są terapie peptydowe?',
    answer:
      'Terapie peptydowe to podawanie krótkich łańcuchów aminokwasów, które działają jak sygnały dla komórek: pobudzają wydzielanie hormonów, produkcję kolagenu lub procesy naprawcze. W Bas Clinic obejmują GHK-Cu, BPC-157 i peptydy osi GH. Decyzję o zastosowaniu podejmuje lekarz po konsultacji.',
  },
  {
    question: 'Czy terapie peptydowe są legalne w Polsce?',
    answer:
      'Terapie peptydowe nie są zakazane, ale większość peptydów nie jest zarejestrowanymi produktami leczniczymi. GHK-Cu jest legalnym składnikiem kosmetyków i preparatów do mezoterapii. BPC-157 i peptydy osi GH nie mają rejestracji jako leki i znajdują się na liście substancji zabronionych WADA, więc lekarz stosuje je wyłącznie po omówieniu statusu prawnego i podpisaniu świadomej zgody.',
  },
  {
    question: 'Czy peptydy to doping?',
    answer:
      'BPC-157 (kategoria S0) i sekretagogi hormonu wzrostu, takie jak CJC-1295, ipamorelin czy sermorelina (kategoria S2), są zabronione przez WADA w sporcie przez cały rok. Sportowcy podlegający kontroli antydopingowej nie mogą ich stosować. GHK-Cu nie jest na liście WADA.',
  },
  {
    question: 'Jakie badania trzeba zrobić przed terapią peptydową?',
    answer:
      'Przed terapią peptydową lekarz zleca zwykle morfologię, glukozę lub HbA1c, kreatyninę i próby wątrobowe, a przy peptydach osi GH dodatkowo IGF-1 i TSH. Zakres badań zależy od wybranego peptydu i stanu zdrowia; lekarz ustala go podczas pierwszej konsultacji.',
  },
  {
    question: 'Ile kosztuje terapia peptydowa we Wrocławiu?',
    answer:
      'Terapie peptydowe w Bas Clinic wyceniamy indywidualnie po konsultacji lekarskiej, bo koszt zależy od peptydu, drogi podania, długości serii i zakresu badań kontrolnych. Pierwszym krokiem jest wizyta konsultacyjna, na której lekarz omawia wskazania, ryzyka i przedstawia wycenę.',
  },
  {
    question: 'Kto nie powinien stosować peptydów?',
    answer:
      'Peptydów nie stosujemy u kobiet w ciąży i karmiących, u osób z czynną chorobą nowotworową (peptydy pobudzają tworzenie naczyń krwionośnych lub podziały komórek), przy niewyrównanej cukrzycy i u sportowców podlegających kontroli antydopingowej. Pełną listę przeciwwskazań podajemy na stronie każdego peptydu.',
  },
  {
    question: 'Gdzie we Wrocławiu umówić konsultację w sprawie terapii peptydowej?',
    answer: `Konsultację w sprawie terapii peptydowych umówisz w Bas Clinic przy ${CLINIC.address.street} we Wrocławiu, telefonicznie pod numerem ${CLINIC.phone} lub przez rejestrację online. Klinika pracuje w dni powszednie w godzinach ${CLINIC.hours.weekdays}.`,
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym są peptydy i jak działają w organizmie',
    tocLabel: 'Czym są peptydy',
    content: (
      <>
        <p>Peptydy to krótkie łańcuchy aminokwasów, zwykle od kilku do kilkudziesięciu reszt, które w organizmie pełnią rolę sygnałów. Wiążą się z receptorami komórek i uruchamiają konkretne procesy: wydzielanie hormonu, syntezę kolagenu, migrację komórek do miejsca urazu. Wiele leków to peptydy, na przykład insulina czy oksytocyna.</p>
        <p>W terapiach nazywanych peptydowymi stosuje się peptydy syntetyczne, które naśladują naturalne sygnały. Różnią się one zasadniczo stanem badań: od substancji przebadanych w badaniach klinicznych po takie, które testowano wyłącznie na zwierzętach. Dlatego w Bas Clinic każdy peptyd omawiamy osobno, a nie jako jedną „terapię peptydową”.</p>
        <h3>Trzy grupy w naszej ofercie</h3>
        <ul>
          <li><strong><Link href="/terapie-peptydowe/ghk-cu/">GHK-Cu</Link></strong>: tripeptyd miedziowy, czyli trzy aminokwasy związane z miedzią, naturalnie obecny w osoczu, stosowany w regeneracji skóry i włosów.</li>
          <li><strong><Link href="/terapie-peptydowe/bpc-157/">BPC-157</Link></strong>: pentadekapeptyd, czyli łańcuch 15 aminokwasów, badany w gojeniu ścięgien, mięśni i błony śluzowej przewodu pokarmowego, niemal wyłącznie na zwierzętach.</li>
          <li><strong><Link href="/terapie-peptydowe/peptydy-osi-gh/">Peptydy osi GH</Link></strong>: sekretagogi, czyli substancje pobudzające przysadkę do wydzielania własnego hormonu wzrostu.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Stan dowodów i status prawny peptydów w Polsce',
    tocLabel: 'Dowody i status prawny',
    content: (
      <>
        <p>Żaden z trzech peptydów nie jest w Polsce zarejestrowanym produktem leczniczym do iniekcji. GHK-Cu jest legalnym składnikiem kosmetyków i preparatów do mezoterapii. BPC-157 i sekretagogi hormonu wzrostu nie mają rejestracji w Polsce ani w Unii Europejskiej, a WADA zalicza je do substancji zabronionych w sporcie.</p>
        <table>
          <tbody>
            <tr>
              <th>Peptyd</th>
              <th>Dowody u ludzi</th>
              <th>Status regulacyjny</th>
              <th>WADA</th>
            </tr>
            {PEPTYDY.map((s) => (
              <tr key={s.slug}>
                <td>{s.name}</td>
                <td>{STATUS[s.slug].evidence}</td>
                <td>{STATUS[s.slug].legal}</td>
                <td>{STATUS[s.slug].wada}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Co to oznacza w praktyce: lekarz może zastosować substancję niezarejestrowaną wyłącznie na własną odpowiedzialność zawodową, po rzetelnym poinformowaniu pacjenta i uzyskaniu świadomej zgody. Pacjent musi wiedzieć, że dawki, schematy i profil bezpieczeństwa nie zostały ustalone w badaniach klinicznych, a preparaty sprzedawane jako „odczynniki do badań” nie podlegają kontroli jakości leków.</p>
        <p>Przegląd systematyczny, czyli zestawienie wszystkich badań na dany temat, opublikowany przez Liu i wsp. w 2007 roku pokazał, że u zdrowych osób starszych hormon wzrostu daje niewielki przyrost beztłuszczowej masy ciała, czyli mięśni, kości i wody, kosztem obrzęków, bólów stawów i podwyższonego cukru. Dla BPC-157 nie istnieje ani jedno randomizowane badanie kliniczne, czyli takie, w którym uczestników losowo przydziela się do preparatu albo do placebo. Te fakty przedstawiamy na pierwszej konsultacji, zanim padnie pytanie o dawkę.</p>
      </>
    ),
  },
  {
    title: 'Konsultacja i kwalifikacja do terapii peptydowej we Wrocławiu',
    tocLabel: 'Konsultacja i badania',
    content: (
      <>
        <p>Terapia peptydowa w Bas Clinic zaczyna się od konsultacji lekarskiej, nie od zakupu preparatu. Lekarz zbiera wywiad, ocenia cel pacjenta i sprawdza, czy w ogóle istnieje sensowne wskazanie, czy też problem wymaga innego postępowania.</p>
        <ol>
          {KWALIFIKACJA.map((step) => (
            <li key={step.title}>
              <strong>{step.title}.</strong> {step.description}
            </li>
          ))}
        </ol>
        <p>Wizytę konsultacyjną umówisz przez <Link href="/rejestracja/">rejestrację online</Link> lub telefonicznie. Wycenę terapii przedstawiamy po konsultacji; orientacyjne ceny pozostałych usług znajdziesz w <Link href="/cennik/">cenniku</Link>.</p>
      </>
    ),
  },
  {
    title: 'Przeciwwskazania i bezpieczeństwo terapii peptydowych',
    tocLabel: 'Przeciwwskazania',
    content: (
      <>
        <p>Przeciwwskazania różnią się między peptydami, ale kilka zasad dotyczy wszystkich: nie stosujemy ich w ciąży i podczas karmienia piersią, przy czynnej chorobie nowotworowej ani u osób podlegających kontroli antydopingowej.</p>
        <h3>Najważniejsze grupy ryzyka</h3>
        <ul>
          <li><strong>Choroba nowotworowa</strong>: BPC-157 pobudza angiogenezę, czyli powstawanie nowych naczyń krwionośnych, a peptydy osi GH podnoszą IGF-1, białko pobudzające komórki do podziałów; oba mechanizmy w teorii mogą sprzyjać wzrostowi guza.</li>
          <li><strong>Cukrzyca i insulinooporność</strong>: sekretagogi hormonu wzrostu pogarszają tolerancję glukozy.</li>
          <li><strong>Zaburzenia gospodarki miedzią</strong> (choroba Wilsona): ostrożność przy GHK-Cu.</li>
          <li><strong>Nieznane ryzyka</strong>: przy BPC-157 brak danych o bezpieczeństwie długoterminowym u ludzi; działania niepożądane po prostu nie zostały zbadane.</li>
        </ul>
        <p>Dlatego terapia przebiega pod kontrolą lekarza, z badaniami przed rozpoczęciem i w trakcie serii. Objawy niepokojące zgłaszane w trakcie terapii są powodem do przerwania, a nie do zwiększenia dawki. Osobom szukającym wsparcia regeneracji o ugruntowanym statusie lekarz może zaproponować <Link href="/wlewy-witaminowe/">wlewy witaminowe</Link> lub zabiegi <Link href="/medycyna-estetyczna/">medycyny estetycznej</Link>.</p>
        <p>Treść ma charakter edukacyjny i nie zastępuje konsultacji lekarskiej. O zastosowaniu peptydu decyduje lekarz po ocenie wskazań i przeciwwskazań.</p>
      </>
    ),
  },
  {
    title: 'Źródła',
    content: (
      <ol>
        <li>Pickart L., Margolina A. Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data. International Journal of Molecular Sciences 2018; 19(7): 1987. PMID 29986520.</li>
        <li>Gwyer D., Wragg N.M., Wilson S.L. Gastric pentadecapeptide body protection compound BPC 157 and its role in accelerating musculoskeletal soft tissue healing. Cell and Tissue Research 2019; 377(2): 153-159.</li>
        <li>Liu H. i wsp. Systematic review: the safety and efficacy of growth hormone in the healthy elderly. Annals of Internal Medicine 2007; 146(2): 104-115. PMID 17227934.</li>
        <li>Sigalos J.T., Pastuszak A.W. The Safety and Efficacy of Growth Hormone Secretagogues. Sexual Medicine Reviews 2018; 6(1): 45-53. PMID 28400207.</li>
        <li>Falutz J. i wsp. Metabolic effects of a growth hormone-releasing factor in patients with HIV. New England Journal of Medicine 2007; 357(23): 2359-2370. PMID 18057338.</li>
        <li>World Anti-Doping Agency. The Prohibited List (aktualne wydanie): sekcje S0 (substancje niezatwierdzone) i S2 (hormony peptydowe, czynniki wzrostu i substancje pokrewne).</li>
        <li>Rozporządzenie Parlamentu Europejskiego i Rady (WE) nr 1223/2009 dotyczące produktów kosmetycznych; baza CosIng, składnik Copper Tripeptide-1.</li>
      </ol>
    ),
  },
];

const PEPTYDY_ITEM_LIST = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Terapie peptydowe w Bas Clinic we Wrocławiu',
  itemListElement: PEPTYDY.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `${CLINIC.url}/${s.slug}/`,
  })),
};

export default function TerapiePeptydowePage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQPageSchema questions={FAQ} />
      <JsonLd data={PEPTYDY_ITEM_LIST} />

      <HeroSection
        id="hero"
        subtitle="Terapie peptydowe"
        title="Terapie peptydowe Wrocław"
        description={`Peptydy regeneracyjne i sekretagogi hormonu wzrostu w Bas Clinic przy ${CLINIC.address.street} we Wrocławiu. Każdą terapię poprzedza konsultacja lekarska, badania i uczciwa rozmowa o stanie dowodów oraz statusie prawnym.`}
        ctaText="Umów konsultację"
      />

      {/* Definicja — wspólny blok „Kompendium wiedzy" (KnowledgeSection), ten sam
          komponent co na podstronach usług i na hubie wlewów. */}
      <KnowledgeSection id="o-peptydach" {...KNOWLEDGE_HUB} />

      {/* Oferta */}
      <Section bg="light" id="oferta">
        <SectionHeader
          subtitle="Oferta"
          title="Peptydy dostępne po konsultacji w Bas Clinic"
          description="Każdy peptyd ma osobną stronę z opisem mechanizmu, stanu badań, statusu prawnego i przeciwwskazań. Wycena po konsultacji lekarskiej."
        />
        <ServicesAccordion items={OFERTA_PANELE} />
      </Section>

      {/* Kwalifikacja krok po kroku (ProcessSteps). Adres i godziny zostają w hero,
          a NAP dla Local SEO w FAQ - tu tylko telefon i CTA w karcie etapu. */}
      <ProcessSteps
        id="kwalifikacja"
        eyebrow="Konsultacja lekarska"
        title="Jak wygląda kwalifikacja do terapii peptydowej"
        description="Terapia zaczyna się od wizyty konsultacyjnej, nie od zakupu preparatu. Każdy pacjent przechodzi pięć etapów, a decyzję podejmujemy wspólnie z lekarzem."
        steps={KWALIFIKACJA}
        image="/uploads/services/kompendium-konsultacja-bas-clinic-wroclaw.webp"
        imageAlt="Lekarz podczas konsultacji kwalifikującej do terapii peptydowej w Bas Clinic we Wrocławiu"
      />

      {/* Informacje od specjalisty - kompendium wspólne; brak AuthorBio na peptydach */}
      <Section id="informacje">
        <ExpertInfoSection eyebrow="Informacje od specjalisty" items={EXPERT_INFO} />
      </Section>

      <FAQSection items={FAQ} contactHref="/kontakt/" title="Najczęściej zadawane pytania o terapie peptydowe" />

      <Testimonials id="opinie" items={getTestimonials('Terapie peptydowe')} />

      <CTASection id="dlaczego-my" {...getWhyUs('terapie-peptydowe')} />
    </>
  );
}
