import { CLINIC } from '@/config/clinic';
import JsonLd from './JsonLd';

export default function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['MedicalOrganization', 'Dentist'],
    '@id': `${CLINIC.url}/#organization`,
    name: CLINIC.name,
    url: CLINIC.url,
    telephone: CLINIC.phone,
    email: CLINIC.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CLINIC.address.street,
      addressLocality: CLINIC.address.cityDisplay,
      addressCountry: CLINIC.address.country,
    },
    openingHoursSpecification: CLINIC.openingHoursSpecification.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: [CLINIC.social.facebook, CLINIC.social.instagram],
    founder: CLINIC.founders.map((f) => ({
      '@type': 'Person',
      name: f.name,
      jobTitle: f.role,
    })),
  };

  return <JsonLd data={data} />;
}
