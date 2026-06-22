import HeroSection from './components/HeroSection';
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
    description:
      'Kompleksowa opieka nad uśmiechem — od profilaktyki i leczenia po zaawansowaną implantologię i protetykę.',
    bullets: ['Implanty i protetyka', 'Leczenie kanałowe', 'Stomatologia dziecięca'],
    expert: { name: 'lek. med. Bogdan Bas', role: 'Stomatologia', initials: 'BB' },
  },
  {
    icon: 'estetyka',
    title: 'Medycyna estetyczna',
    href: '/medycyna-estetyczna/',
    description:
      'Subtelne zabiegi odmładzające i modelujące, które podkreślają naturalne piękno i pewność siebie.',
    bullets: ['Modelowanie ust i twarzy', 'Mezoterapia', 'Wypełniacze HA'],
    expert: { name: 'lek. med. Iwanna Bas', role: 'Medycyna estetyczna', initials: 'IB' },
  },
  {
    icon: 'usg',
    title: 'USG — ultrasonografia',
    href: '/usg/',
    description:
      'Bezbolesna, nieinwazyjna diagnostyka obrazowa — wykonywana i opisywana na miejscu przez lekarza.',
    bullets: ['Jama brzuszna i tarczyca', 'Piersi i węzły chłonne', 'Doppler naczyniowy'],
    expert: { name: 'lek. med. Bogdan Bas', role: 'Diagnostyka USG', initials: 'BB' },
  },
  {
    icon: 'wlewy',
    title: 'Wlewy witaminowe',
    href: '/wlewy-witaminowe/',
    description:
      'Terapie infuzyjne dostarczające witaminy i minerały wprost do organizmu — dla energii i odporności.',
    bullets: ['Indywidualne formuły', 'Witaminy i minerały', 'Wsparcie odporności'],
    expert: { name: 'lek. med. Iwanna Bas', role: 'Terapie infuzyjne', initials: 'IB' },
  },
];

// Najczęściej zadawane pytania (homepage). Treść ogólna/organizacyjna — bezpieczna
// pod kątem medycznym. Zasila zarówno widok (FAQSection), jak i FAQPageSchema (SEO).
const FAQ = [
  {
    question: 'Jak umówić wizytę w Bas Clinic?',
    answer: `Najprościej zadzwonić pod ${CLINIC.phone} lub skorzystać z rejestracji online. Wspólnie dobierzemy termin dopasowany do Twojego grafiku, a w razie potrzeby zaproponujemy wcześniejszą konsultację, by spokojnie omówić plan leczenia.`,
  },
  {
    question: 'Czy przed zabiegiem odbywa się konsultacja?',
    answer:
      'Tak. Każdy plan leczenia — stomatologiczny czy estetyczny — poprzedzamy indywidualną konsultacją. Lekarz ocenia Twoją sytuację, odpowiada na wszystkie pytania i proponuje rozwiązanie dopasowane do Twoich potrzeb oraz oczekiwań.',
  },
  {
    question: 'Czy zabiegi medycyny estetycznej są bolesne?',
    answer:
      'Większość zabiegów jest dobrze tolerowana. Tam, gdzie to potrzebne, stosujemy znieczulenie miejscowe lub kremy znieczulające, aby zapewnić Ci komfort. Przebieg zabiegu i ewentualne odczucia zawsze omawiamy wcześniej.',
  },
  {
    question: 'Jakie metody płatności akceptujecie?',
    answer:
      'Płatność można uregulować gotówką lub kartą. Koszt zabiegu ustalamy i przedstawiamy przed jego rozpoczęciem — bez ukrytych opłat i niespodzianek.',
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
        quoteAuthor="Bogdan Bas & Iwanna Bas"
        showReviews
      />

      {/* Team */}
      <Section id="zalozyciele" bg="light">
        <SectionHeader
          subtitle="Nasz zespół"
          title="Poznaj założycieli Bas Clinic"
          description="Doświadczeni specjaliści z pasją do medycyny i estetyki."
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
      <FAQSection id="faq" items={FAQ} />

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
