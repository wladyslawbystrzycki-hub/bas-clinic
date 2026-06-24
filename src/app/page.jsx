import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Section from './components/Section';
import SectionHeader from './components/SectionHeader';
import ServicesAccordion from './components/ServicesAccordion';
import FoundersSlider from './components/FoundersSlider';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import ClinicGallery from './components/ClinicGallery';
import KnowledgeSection from './components/KnowledgeSection';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import OrganizationSchema from './components/schema/OrganizationSchema';
import FAQPageSchema from './components/schema/FAQPageSchema';
import { CLINIC } from '@/config/clinic';
import { TESTIMONIALS } from '@/config/testimonials';
import { CLINIC_GALLERY } from '@/config/gallery';
import { KNOWLEDGE_HOME } from '@/config/knowledge';

const FEATURED_SERVICES = [
  {
    icon: 'stomatologia',
    title: 'Stomatologia',
    href: '/stomatologia/',
    image: '/uploads/services/gabinet-stomatologiczny-bas-clinic-wroclaw.webp',
    imageAlt: 'Gabinet stomatologiczny Bas Clinic we Wrocławiu — lekarz dentysta podczas wizyty',
    description:
      'Kompleksowa opieka stomatologiczna od konsultacji i profilaktyki, przez nowoczesne leczenie zachowawcze oraz endodontyczne, aż po zabiegi z zakresu stomatologii estetycznej, w tym profesjonalne wybielanie zębów.\n\nDbamy nie tylko o zdrowie zębów, ale również o komfort i dobre samopoczucie naszych Pacjentów. Dzięki indywidualnemu podejściu, nowoczesnym technologiom i skutecznym metodom leczenia pomagamy przywrócić zdrowy, piękny uśmiech oraz pewność siebie.',
    bullets: [
      'Leczenie zachowawcze',
      'Leczenie kanałowe',
      'Implanty i protetyka',
      'Chirurgia stomatologiczna',
      'Licówki',
      'Ortodoncja',
      'Bonding zębów',
      'Higienizacja',
      'Wybielanie zębów',
      'Stomatologia dziecięca',
    ],
    expert: { name: 'lek. dent. Ivanna Bas', role: 'Stomatologia', initials: 'IB' },
  },
  {
    icon: 'uzaleznienia',
    title: 'Leczenie uzależnień',
    href: '/leczenie-uzaleznien/',
    image: '/uploads/services/leczenie-uzaleznien-bas-clinic-wroclaw.webp',
    imageAlt: 'Leczenie uzależnień w Bas Clinic we Wrocławiu — dyskretna konsultacja z lekarzem',
    description:
      'Kompleksowa, dyskretna pomoc w wychodzeniu z uzależnienia — łączymy opiekę lekarską, farmakoterapię i psychoterapię, bez oceniania.',
    bullets: ['Detoksykacja alkoholowa', 'Farmakoterapia uzależnień', 'Terapia indywidualna', 'Wsparcie dla rodzin'],
    expert: { name: 'lek. med. Bogdan Bas', role: 'Leczenie uzależnień', initials: 'BB' },
  },
  {
    icon: 'estetyka',
    title: 'Medycyna estetyczna',
    href: '/medycyna-estetyczna/',
    image: '/uploads/services/medycyna-estetyczna-bas-clinic-wroclaw.webp',
    imageAlt: 'Medycyna estetyczna w Bas Clinic we Wrocławiu — pacjentka w gabinecie zabiegowym',
    description:
      'W Bas Clinic medycyna estetyczna podkreśla naturalne piękno, a nie je zmienia. Przywracamy harmonię, świeżość i pewność siebie bezpiecznymi, nowoczesnymi i indywidualnie dobranymi terapiami.\n\nKażdy zabieg poprzedzamy konsultacją i oceną potrzeb Pacjenta, a plan leczenia tworzymy spersonalizowanie — na sprawdzonych preparatach i z najwyższym standardem bezpieczeństwa oraz komfortu.\n\nNie tworzymy nowej wersji Ciebie. Odsłaniamy tę właściwą.',
    bulletGroups: [
      {
        label: 'Zabiegi dla kobiet',
        items: [
          'Korekcja i wygładzenie zmarszczek',
          'Powiększanie i modelowanie ust',
          'Mezoterapia igłowa twarzy i dłoni',
          'Modelowanie konturów twarzy',
        ],
      },
      {
        label: 'Zabiegi dla mężczyzn',
        items: [
          'Korekcja zmarszczek mimicznych',
          'Leczenie blizn potrądzikowych',
          'Modelowanie konturów twarzy',
          'Leczenie nadpotliwości',
        ],
      },
    ],
    expert: { name: 'lek. dent. Ivanna Bas', role: 'Medycyna estetyczna', initials: 'IB' },
  },
  {
    icon: 'usg',
    title: 'USG — ultrasonografia',
    href: '/usg/',
    image: '/uploads/services/usg-bas-clinic-wroclaw.webp',
    imageAlt: 'Pracownia USG w Bas Clinic we Wrocławiu — lekarz przy aparacie ultrasonograficznym',
    description:
      'Kompleksowa diagnostyka ultrasonograficzna — szybka, bezbolesna i bezpieczna ocena stanu zdrowia, bez promieniowania. Badania prowadzimy na nowoczesnym sprzęcie, a ich wynik lekarz opisuje od razu na miejscu.\n\nPrecyzyjna diagnostyka to podstawa skutecznego leczenia — pozwala szybko wdrożyć właściwą terapię.',
    bullets: [
      'Głowa i szyja',
      'Jama brzuszna i układ moczowy',
      'Piersi i tkanki miękkie',
      'Diagnostyka uroginekologiczna',
      'Doppler naczyniowy',
      'Serce i klatka piersiowa',
      'Narząd ruchu',
    ],
    expert: { name: 'lek. med. Bogdan Bas', role: 'Diagnostyka USG', initials: 'BB' },
  },
  {
    icon: 'wlewy',
    title: 'Wlewy witaminowe',
    href: '/wlewy-witaminowe/',
    image: '/uploads/services/wlewy-witaminowe-bas-clinic-wroclaw.webp',
    imageAlt: 'Wlewy witaminowe w Bas Clinic we Wrocławiu — pacjentka podczas terapii dożylnej',
    description:
      'Nowoczesna terapia dożylna, która wspiera organizm tam, gdzie najbardziej tego potrzebuje. Każdy wlew dobieramy indywidualnie — pod stan zdrowia, styl życia i cel terapii — aby uzupełnić niedobory, poprawić samopoczucie i wesprzeć naturalną regenerację.\n\nZadbaj o zdrowie od wewnątrz — dobre samopoczucie zaczyna się na poziomie komórkowym.',
    bullets: [
      'Wlewy witaminowe – odporność, witalność, anti-aging',
      'Wlewy sportowe – regeneracja po wysiłku',
      'Wlewy na kaca – nawodnienie i detoksykacja',
      'Wlewy na zjazd – energia i wsparcie wątroby',
    ],
    expert: { name: 'lek. dent. Ivanna Bas', role: 'Terapie infuzyjne', initials: 'IB' },
  },
];

// Najczęściej zadawane pytania (homepage). Treść ogólna/organizacyjna — bezpieczna
// pod kątem medycznym. Zasila zarówno widok (FAQSection), jak i FAQPageSchema (SEO).
const FAQ = [
  {
    question: 'Jak umówić wizytę w Bas Clinic?',
    answer: `Aby umówić się na wizytę, należy zadzwonić pod ${CLINIC.phone} lub skorzystać z rejestracji online. Wspólnie dobierzemy termin dopasowany do Twojego grafiku, a w razie potrzeby zaproponujemy wcześniejszą konsultację, by spokojnie omówić plan leczenia.`,
  },
  {
    question: 'Czy przed zabiegiem odbywa się konsultacja?',
    answer:
      'Tak. Każdy plan leczenia — stomatologiczny czy estetyczny — poprzedzony jest indywidualną konsultacją. Lekarz ocenia Twoją sytuację, odpowiada na wszystkie pytania i proponuje rozwiązanie dopasowane do Twoich potrzeb oraz oczekiwań.',
  },
  {
    question: 'Czy zabiegi medycyny estetycznej są bolesne?',
    answer:
      'Większość zabiegów z zakresu medycyny estetycznej jest dobrze tolerowana przez Pacjentów. Tam, gdzie to potrzebne, stosujemy znieczulenie miejscowe lub kremy znieczulające, aby zapewnić komfort i zniwelować odczuwany ból. Przebieg zabiegu i ewentualne odczucia zawsze omawiamy wcześniej.',
  },
  {
    question: 'Jakie metody płatności akceptujecie?',
    answer:
      'Płatność można uregulować gotówką lub kartą. Koszt zabiegu ustalamy i przedstawiamy przed jego rozpoczęciem — zachowujemy pełną transparentność, bez ukrytych opłat i niespodzianek.',
  },
  {
    question: 'Czy mogę przełożyć lub odwołać wizytę?',
    answer:
      'Oczywiście. Prosimy jedynie o możliwie wcześniejszą informację telefoniczną — dzięki temu sprawnie znajdziemy dla Ciebie nowy termin, a zwolnione miejsce zaproponujemy innym Pacjentom.',
  },
];

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />

      {/* Hero */}
      <HeroSection
        id="hero"
        variant="home"
        title="Bas Clinic"
        lead="Nie tworzymy nowej wersji Ciebie. Odsłaniamy tę właściwą."
        quote="Nasze zabiegi skierowane są ku świadomej, subtelnej poprawie wizerunku — takiej, która pozostaje niewidoczna dla innych, a zostaje odczuwalna dla Ciebie."
        quoteAuthor="Bogdan Bas & Ivanna Bas"
        showReviews
      />

      {/* O nas — cichy manifest typograficzny pod hero */}
      <AboutSection />

      {/* Team */}
      <Section id="zalozyciele" bg="light">
        <SectionHeader
          subtitle="Nasz zespół"
          title="Poznaj założycieli Bas Clinic"
        />
        <FoundersSlider founders={CLINIC.founders} />
      </Section>

      {/* Main service categories */}
      <Section id="uslugi">
        <SectionHeader
          subtitle="Nasze usługi"
          title="Kompleksowa opieka medyczna"
          description="Oferujemy szeroki zakres usług stomatologicznych i estetycznych."
        />
        <ServicesAccordion items={FEATURED_SERVICES} />
      </Section>

      {/* Gallery — wnętrza i sprzęt */}
      <ClinicGallery id="galeria" images={CLINIC_GALLERY} />

      {/* Kompendium wiedzy — sekcja edukacyjna (ogólnoklinicza, NIE pod hero) */}
      <KnowledgeSection id="kompendium" {...KNOWLEDGE_HOME} />

      {/* Opinie Pacjentów — ciemny pas akcentowy (treść: PLACEHOLDER, patrz testimonials.js) */}
      <Testimonials id="opinie" items={TESTIMONIALS.general} />

      {/* CTA — „Dlaczego my" (na stronie głównej: ogólnoklinicze, domyślne treści) */}
      <CTASection id="dlaczego-my" />

      {/* FAQ */}
      <FAQPageSchema questions={FAQ} />
      <FAQSection
        id="faq"
        items={FAQ}
        intro="Zebraliśmy odpowiedzi na pytania, które Pacjenci zadają nam najczęściej. Jeśli nie znajdziesz tutaj potrzebnych informacji, zapraszamy do kontaktu — chętnie wszystko wyjaśnimy podczas rozmowy."
        image="/uploads/services/faq-recepcja-bas-clinic-wroclaw.webp"
        imageAlt="Recepcja Bas Clinic we Wrocławiu — rejestracja i kontakt z Pacjentem"
        imageRatio="aspect-[5/6]"
      />

      {/* Contact */}
      <Section id="kontakt">
        <SectionHeader
          subtitle="Kontakt"
          title="Odwiedź naszą klinikę"
          description="Zapraszamy do kontaktu. Chętnie odpowiemy na wszystkie pytania."
        />
        <ContactSection />
      </Section>
    </>
  );
}
