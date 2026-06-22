import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Stymulatory tkankowe Wrocław - Medycyna estetyczna',
  description: 'Stymulatory tkankowe - biostymulacja skóry dla naturalnego odmłodzenia. Bas Clinic Wrocław.',
  path: '/stymulatory-tkankowe/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Stymulatory tkankowe' },
];

const FAQ = [
  { question: 'Czym są stymulatory tkankowe?', answer: 'Stymulatory tkankowe to preparaty iniekcyjne, które pobudzają fibroblasty do produkcji własnego kolagenu, elastyny i kwasu hialuronowego. W odróżnieniu od wypełniaczy, nie dodają objętości, lecz stymulują naturalne procesy regeneracyjne skóry.' },
  { question: 'Po jakim czasie widać efekty?', answer: 'Efekty biostymulacji narastają stopniowo w ciągu 4-12 tygodni po zabiegu, w miarę jak skóra produkuje nowy kolagen. Pełny efekt widoczny jest po całej serii zabiegów i może utrzymywać się do 2 lat.' },
  { question: 'Ile zabiegów jest potrzebnych?', answer: 'Standardowa seria to 3 zabiegi wykonywane w odstępach 4-6 tygodniowych. Po osiągnięciu oczekiwanych efektów zaleca się zabiegi podtrzymujące raz na 6-12 miesięcy.' },
];

const EXPERT_INFO = [
  { title: 'Jak działają stymulatory tkankowe?', content: '<p>Stymulator tkankowy działa na poziomie komórkowym, stymulując fibroblasty do produkcji kolagenu i elastyny - kluczowych składników odpowiedzialnych za jędrność i elastyczność skóry. Preparaty zawierają substancje takie jak kwas polimlekowy, hydroksyapatyt wapnia lub polinukleotydy, które pobudzają naturalne procesy regeneracyjne organizmu.</p>' },
  { title: 'Obszary zastosowania', content: '<p>Stymulatory tkankowe mogą być stosowane w różnych obszarach twarzy, takich jak okolice oczu, policzki, broda czy szyja. Wskazania obejmują: poprawę jakości skóry, zwiększenie gęstości, elastyczności i nawilżenia, a także redukcję drobnych zmarszczek i linii mimicznych. Zabiegi są idealne do poprawy ogólnej jakości i kondycji skóry.</p>' },
  { title: 'Przebieg zabiegu i zalecenia', content: '<p>Po oczyszczeniu skóry i zastosowaniu znieczulenia miejscowego lekarz wstrzykuje preparat w głębsze warstwy skóry za pomocą cienkich igieł lub kaniul. Zabieg trwa około 30-45 minut. Preparat rozprowadza się równomiernie w tkankach. Po zabiegu zaleca się unikanie intensywnego wysiłku fizycznego, sauny i masowania miejsc iniekcji.</p>' },
];

export default function StymulatorTkankowePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Stymulatory tkankowe Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Biostymulacja skóry dla naturalnego odmłodzenia. Pobudzanie własnych procesów regeneracyjnych organizmu."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="stymulatory-tkankowe"
    />
  );
}
