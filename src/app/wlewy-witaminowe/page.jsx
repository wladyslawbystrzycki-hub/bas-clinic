import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Wlewy witaminowe Wrocław - terapia infuzyjna',
  description:
    'Wlewy witaminowe w Bas Clinic. Terapie infuzyjne dostarczające witaminy, minerały i aminokwasy bezpośrednio do organizmu. Wrocław.',
  path: '/wlewy-witaminowe/',
});

const BREADCRUMBS = [{ label: 'Wlewy witaminowe' }];

const FAQ = [
  {
    question: 'Czym są wlewy witaminowe?',
    answer:
      'Wlewy witaminowe to terapie infuzyjne polegające na dożylnym podawaniu witamin, minerałów i aminokwasów. Dzięki temu składniki odżywcze są dostarczane bezpośrednio do krwioobiegu, co zapewnia ich maksymalne wchłonienie.',
  },
  {
    question: 'Jak długo trwa zabieg wlewu witaminowego?',
    answer:
      'Pojedynczy zabieg wlewu witaminowego trwa zazwyczaj od 30 do 60 minut. Czas zależy od rodzaju podawanych składników i ich objętości.',
  },
  {
    question: 'Dla kogo są przeznaczone wlewy witaminowe?',
    answer:
      'Wlewy witaminowe są dedykowane osobom zmęczonym, zestresowanym, po chorobach, sportowcom oraz wszystkim, którzy chcą poprawić swoje samopoczucie i odporność organizmu.',
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym są wlewy witaminowe?',
    content:
      '<p>Wlewy witaminowe to nowoczesna metoda suplementacji, która pozwala na dostarczenie wysokich dawek witamin i minerałów bezpośrednio do krwioobiegu. W przeciwieństwie do doustnych suplementów, terapia infuzyjna omija układ pokarmowy, zapewniając niemal 100% biodostępność podawanych składników.</p>',
  },
  {
    title: 'Jakie składniki zawierają wlewy?',
    content:
      '<p>W naszej klinice oferujemy różne kompozycje wlewów witaminowych, które mogą zawierać witaminę C w wysokich dawkach, witaminy z grupy B, magnez, cynk, selen, glutation, aminokwasy i inne składniki dobrane indywidualnie do potrzeb pacjenta.</p>',
  },
  {
    title: 'Wskazania do terapii infuzyjnej',
    content:
      '<p>Wlewy witaminowe są szczególnie polecane przy chronicznym zmęczeniu, obniżeniu odporności, w okresie rekonwalescencji, przy intensywnym wysiłku fizycznym, a także jako wsparcie w terapii anti-aging i poprawie kondycji skóry, włosów i paznokci.</p>',
  },
];

export default function WlewyWitaminowePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Wlewy witaminowe Wrocław"
      heroSubtitle="Terapia infuzyjna"
      heroDescription="Terapie infuzyjne dostarczające witaminy i minerały bezpośrednio do organizmu. Szybki sposób na poprawę samopoczucia, odporności i witalności."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="wlewy-witaminowe"
    />
  );
}
