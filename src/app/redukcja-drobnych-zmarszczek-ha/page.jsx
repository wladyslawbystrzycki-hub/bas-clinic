import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Redukcja drobnych zmarszczek kwasem hialuronowym Wrocław - Medycyna estetyczna',
  description: 'Redukcja drobnych zmarszczek szyi i dekoltu kwasem hialuronowym. Bas Clinic Wrocław.',
  path: '/redukcja-drobnych-zmarszczek-ha/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Redukcja drobnych zmarszczek kwasem hialuronowym' },
];

const FAQ = [
  { question: 'Dlaczego szyja i dekolt wymagają specjalnej troski?', answer: 'Skóra szyi i dekoltu jest cienka, ma mniejszą ilość gruczołów łojowych i jest narażona na działanie czynników zewnętrznych. Starzeje się szybciej niż skóra twarzy, dlatego często wymaga dedykowanych zabiegów regenerujących i wygładzających.' },
  { question: 'Jakiego rodzaju kwas hialuronowy stosuje się na szyję i dekolt?', answer: 'Na szyję i dekolt stosuje się preparaty o niskim sieciowaniu, specjalnie przeznaczone do cienkich, delikatnych obszarów skóry. Preparaty te rozprowadzają się równomiernie, nawilżają skórę i wygładzają drobne zmarszczki bez ryzyka grudek.' },
  { question: 'Ile zabiegów jest potrzebnych?', answer: 'Dla optymalnych efektów zaleca się serię 2-3 zabiegów w odstępach 4-6 tygodniowych. Następnie zabiegi podtrzymujące co 6-12 miesięcy. Lekarz dobiera plan zabiegów na podstawie stanu skóry.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest redukcja drobnych zmarszczek szyi i dekoltu?', content: '<p>Zabieg polega na powierzchownym wstrzykiwaniu lekkiego kwasu hialuronowego w skórę szyi i dekoltu w celu wygładzenia drobnych zmarszczek, poprawy nawilżenia i elastyczności skóry. Stosowane są preparaty o niskim stopniu sieciowania, dedykowane do delikatnych obszarów, które zapewniają naturalny efekt wygładzenia bez efektu wypełnienia.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Po oczyszczeniu skóry i nałożeniu kremu znieczulającego lekarz wykonuje serię drobnych wstrzyknięć kwasu hialuronowego techniką mikrobolusów lub nappage na całej powierzchni szyi i/lub dekoltu. Zabieg trwa 30-45 minut. Po zabiegu mogą pojawić się drobne siniaki i zaczerwienienia ustępujące w ciągu 2-3 dni.</p>' },
];

export default function RedukcjaDrobnychZmarszczekHaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Redukcja drobnych zmarszczek kwasem hialuronowym Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Wygładzanie drobnych zmarszczek szyi i dekoltu kwasem hialuronowym. Przywracanie gładkości i nawilżenia delikatnej skóry."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="redukcja-drobnych-zmarszczek-ha"
    />
  );
}
