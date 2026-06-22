import { CLINIC } from '@/config/clinic';
import JsonLd from './JsonLd';

export default function ServiceSchema({
  name,
  description,
  url,
  schemaType,
  usesDevice,
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': schemaType || 'MedicalProcedure',
    name,
    description,
    url: `${CLINIC.url}${url}`,
    provider: {
      '@type': 'MedicalOrganization',
      '@id': `${CLINIC.url}/#organization`,
      name: CLINIC.name,
    },
    ...(usesDevice && {
      usesDevice: {
        '@type': 'MedicalDevice',
        name: usesDevice,
      },
    }),
  };

  return <JsonLd data={data} />;
}
