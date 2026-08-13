import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Programy zabiegowe Wrocław - protokoły łączone',
  description: 'Programy zabiegowe - intensywne odmładzanie i poprawa owalu twarzy. Indywidualne protokoły zabiegowe. Bas Clinic Wrocław.',
  path: '/medycyna-estetyczna/programy-zabiegowe/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Programy zabiegowe' },
];

const FAQ = [
  { question: 'Czym są programy zabiegowe?', answer: 'Programy zabiegowe to indywidualnie dobrane serie zabiegów medycyny estetycznej, łączące różne techniki i preparaty w celu uzyskania kompleksowego efektu odmłodzenia. Program jest projektowany przez lekarza na podstawie analizy potrzeb skóry pacjenta.' },
  { question: 'Jak długo trwa program zabiegowy?', answer: 'Typowy program zabiegowy trwa od 2 do 6 miesięcy i obejmuje serię zabiegów wykonywanych w regularnych odstępach. Każdy program jest indywidualny - lekarz ustala harmonogram, rodzaje zabiegów i łączenie technik.' },
  { question: 'Dla kogo są przeznaczone programy zabiegowe?', answer: 'Programy zabiegowe są idealne dla osób oczekujących kompleksowej poprawy jakości skóry i konturu twarzy. Szczególnie polecane pacjentom, u których pojedynczy zabieg nie zapewni oczekiwanego efektu odmłodzenia.' },
];

const EXPERT_INFO = [
  { title: 'Czym są programy zabiegowe?', content: '<p>Programy zabiegowe to zaawansowane protokoły łączące różne metody medycyny estetycznej w celu uzyskania synergicznego efektu odmłodzenia. Mogą obejmować kombinację mezoterapii, stymulatorów tkankowych, toksyny botulinowej, wypełniaczy i zabiegów aparatowych. Każdy program jest indywidualnie projektowany na podstawie dokładnej analizy stanu skóry pacjenta.</p>' },
  { title: 'Jak przebiega program zabiegowy?', content: '<p>Program rozpoczyna się od kompleksowej konsultacji, podczas której lekarz ocenia stan skóry, potrzeby pacjenta i cele terapeutyczne. Następnie przygotowywany jest indywidualny plan zabiegów z harmonogramem wizyt. Podczas kolejnych wizyt wykonywane są zaplanowane zabiegi, a lekarz monitoruje postępy i w razie potrzeby modyfikuje plan.</p>' },
];

export default function ProgramyZabiegowePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Programy zabiegowe Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Intensywne odmładzanie i poprawa owalu twarzy. Indywidualnie projektowane protokoły łączące najskuteczniejsze metody medycyny estetycznej."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/programy-zabiegowe"
    />
  );
}
