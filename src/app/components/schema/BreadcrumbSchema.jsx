import { CLINIC } from '@/config/clinic';
import JsonLd from './JsonLd';

export default function BreadcrumbSchema({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: CLINIC.url,
      },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href && { item: `${CLINIC.url}${item.href}` }),
      })),
    ],
  };

  return <JsonLd data={data} />;
}
