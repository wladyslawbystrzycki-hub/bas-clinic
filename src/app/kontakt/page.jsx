import { generatePageMetadata } from '@/lib/metadata';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import ContactSection from '../components/ContactSection';
import PageHeader from '../components/PageHeader';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';

export const metadata = generatePageMetadata({
  title: 'Kontakt',
  description:
    'Skontaktuj się z Bas Clinic we Wrocławiu. Adres, telefon, email, godziny otwarcia. Umów wizytę stomatologiczną lub na zabieg medycyny estetycznej.',
  path: '/kontakt/',
});

const BREADCRUMBS = [{ label: 'Kontakt' }];

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      <PageHeader
        eyebrow="Napisz lub zadzwoń"
        title="Kontakt"
        description="Skontaktuj się z nami, aby umówić wizytę lub zadać pytanie. Jesteśmy do Twojej dyspozycji."
        breadcrumbs={BREADCRUMBS}
      />

      <Section id="kontakt">
        <SectionHeader
          subtitle="Dane kontaktowe"
          title="Jak się z nami skontaktować?"
        />
        <ContactSection />
      </Section>
    </>
  );
}
