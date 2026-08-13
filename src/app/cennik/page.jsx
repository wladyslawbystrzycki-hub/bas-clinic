import { generatePageMetadata } from '@/lib/metadata';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';

export const metadata = generatePageMetadata({
  title: 'Cennik - stomatologia, estetyka, USG Wrocław',
  description:
    'Cennik usług stomatologicznych i medycyny estetycznej w Bas Clinic we Wrocławiu. Sprawdź ceny zabiegów.',
  path: '/cennik/',
});

const BREADCRUMBS = [{ label: 'Cennik' }];

const PRICING_CATEGORIES = [
  {
    category: 'Stomatologia ogólna',
    items: [
      { name: 'Konsultacja stomatologiczna', price: 'od 150 zł' },
      { name: 'Wypełnienie kompozytowe', price: 'od 300 zł' },
      { name: 'Leczenie kanałowe (1 kanał)', price: 'od 500 zł' },
      { name: 'Ekstrakcja zęba', price: 'od 250 zł' },
      { name: 'Higienizacja (skaling + piaskowanie)', price: 'od 350 zł' },
    ],
  },
  {
    category: 'Stomatologia estetyczna',
    items: [
      { name: 'Wybielanie zębów (gabinet)', price: 'od 1200 zł' },
      { name: 'Licówka porcelanowa (1 szt.)', price: 'od 2500 zł' },
      { name: 'Bonding kompozytowy (1 ząb)', price: 'od 500 zł' },
      { name: 'Korona protetyczna', price: 'od 1500 zł' },
    ],
  },
  {
    category: 'Implantologia',
    items: [
      { name: 'Implant zębowy (z koroną)', price: 'od 4000 zł' },
      { name: 'Augmentacja kości', price: 'od 1500 zł' },
      { name: 'All-on-4', price: 'od 25000 zł' },
    ],
  },
  {
    category: 'Ortodoncja',
    items: [
      { name: 'Aparat stały (metalowy)', price: 'od 3000 zł' },
      { name: 'Alignery (komplet)', price: 'od 6000 zł' },
      { name: 'Aparat ruchomy', price: 'od 1000 zł' },
    ],
  },
  {
    category: 'Medycyna estetyczna',
    items: [
      { name: 'Toksyna botulinowa', price: 'od 800 zł' },
      { name: 'Wypełniacze HA (1 ml)', price: 'od 1200 zł' },
      { name: 'Mezoterapia igłowa', price: 'od 500 zł' },
      { name: 'Stymulatory tkankowe', price: 'od 1500 zł' },
      { name: 'Modelowanie ust', price: 'od 1200 zł' },
      { name: 'Osocze bogatopłytkowe', price: 'od 800 zł' },
    ],
  },
  {
    category: 'Wlewy witaminowe',
    items: [
      { name: 'Wlew witaminowy podstawowy', price: 'od 250 zł' },
      { name: 'Wlew witaminowy premium', price: 'od 500 zł' },
    ],
  },
];

export default function CennikPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      <PageHeader
        eyebrow="Przejrzyste ceny"
        title="Cennik"
        description="Orientacyjne ceny usług w Bas Clinic. Dokładną wycenę otrzymasz po konsultacji."
        breadcrumbs={BREADCRUMBS}
      />

      <Section id="cennik">
        <div className="mx-auto max-w-4xl space-y-12">
          {PRICING_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h2 className="font-display text-2xl font-bold text-gray-900">
                {cat.category}
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {cat.items.map((item) => (
                      <tr key={item.name} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-semibold text-primary-700">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-gray-500">
          Podane ceny są orientacyjne. Ostateczna wycena zależy od indywidualnej
          sytuacji pacjenta i zostanie przedstawiona po konsultacji.
        </p>
      </Section>

      <CTASection
        id="dlaczego-my"
        title="Potrzebujesz indywidualnej wyceny?"
        intro="Skontaktuj się z nami, aby umówić konsultację i otrzymać dokładną wycenę."
      />
    </>
  );
}
