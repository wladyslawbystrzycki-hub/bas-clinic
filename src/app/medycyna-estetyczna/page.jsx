import { generatePageMetadata } from '@/lib/metadata';
import { BODY_AREAS } from '@/config/bodyAreas';
import { getAestheticServicesByArea } from '@/config/services';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import ServiceList from '../components/ServiceList';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import Testimonials from '../components/Testimonials';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import FAQPageSchema from '../components/schema/FAQPageSchema';
import { getWhyUs } from '@/config/whyUs';
import { getTestimonials } from '@/config/testimonials';

const FAQ = [
  {
    question: 'Od czego zaczyna się zabieg medycyny estetycznej?',
    answer:
      'Każdy zabieg poprzedza konsultacja, podczas której lekarz ocenia skórę i okolicę poddawaną zabiegowi, omawia oczekiwania Pacjenta oraz proponuje odpowiednie postępowanie. Zakres i przebieg zabiegu ustalamy wspólnie, po wyjaśnieniu ewentualnych przeciwwskazań.',
  },
  {
    question: 'Czy zabiegi są bolesne?',
    answer:
      'Komfort Pacjenta jest dla nas priorytetem — w zależności od rodzaju zabiegu stosujemy znieczulenie miejscowe lub preparaty znieczulające powierzchniowo. Szczegóły dotyczące przebiegu i odczuć podczas zabiegu lekarz omawia na konsultacji.',
  },
  {
    question: 'Jak przygotować się do zabiegu?',
    answer:
      'Zalecenia przygotowujące zależą od rodzaju zabiegu i lekarz przekazuje je indywidualnie podczas konsultacji. Na tym etapie ustalane są również ewentualne przeciwwskazania oraz zalecenia dotyczące okresu po zabiegu.',
  },
  {
    question: 'Jak umówić konsultację?',
    answer:
      'Konsultację można umówić telefonicznie lub przez formularz rejestracji online. Chętnie odpowiemy też na pytania dotyczące zakresu zabiegów i przygotowania w kontakcie telefonicznym.',
  },
];

export const metadata = generatePageMetadata({
  title: 'Medycyna estetyczna Wrocław - zabiegi odmładzające i modelujące',
  description: 'Medycyna estetyczna w Bas Clinic. Zabiegi na twarz, oczy, usta, szyję, dekolt, włosy i ciało. Profesjonalne zabiegi odmładzające we Wrocławiu.',
  path: '/medycyna-estetyczna/',
});

export default function MedycynaEstetycznaPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' }]} />
      <FAQPageSchema questions={FAQ} />
      <HeroSection
        id="hero"
        subtitle="Medycyna estetyczna"
        title="Zabiegi estetyczne dla Twojej urody we Wrocławiu"
        description="Oferujemy szeroki zakres zabiegów medycyny estetycznej. Poznaj nasze zabiegi pogrupowane według obszarów ciała."
      />
      {BODY_AREAS.map((area, idx) => {
        const services = getAestheticServicesByArea(area.slug);
        if (services.length === 0) return null;
        return (
          <Section key={area.slug} id={area.slug} bg={idx % 2 === 0 ? 'white' : 'light'}>
            <SectionHeader subtitle={area.name} title={area.description} />
            <ServiceList services={services} />
          </Section>
        );
      })}
      <FAQSection items={FAQ} contactHref="/kontakt/" title="Najczęściej zadawane pytania o medycynę estetyczną" />
      <Testimonials id="opinie" items={getTestimonials('Medycyna estetyczna')} />
      <CTASection id="dlaczego-my" {...getWhyUs('medycyna-estetyczna')} />
    </>
  );
}
