import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Ortodoncja Wrocław - Prostowanie zębów w Bas Clinic',
  description: 'Ortodoncja we Wrocławiu. Aparaty stałe, alignery i aparaty ruchome. Skuteczne prostowanie zębów dla dzieci i dorosłych w Bas Clinic.',
  path: '/ortodoncja/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Ortodoncja' },
];

const FAQ = [
  { question: 'W jakim wieku najlepiej rozpocząć leczenie ortodontyczne?', answer: 'Pierwsza wizyta ortodontyczna powinna odbyć się około 7. roku życia. Leczenie aparatem stałym rozpoczyna się zazwyczaj po wyrznięciu wszystkich zębów stałych (12-14 lat). Dorośli mogą rozpocząć leczenie w każdym wieku.' },
  { question: 'Jak długo trwa leczenie ortodontyczne?', answer: 'Czas leczenia zależy od złożoności wady zgryzu i wynosi zazwyczaj 12-24 miesiące. Proste przypadki mogą być leczone krócej (6-12 miesięcy), a złożone wady mogą wymagać dłuższego czasu.' },
  { question: 'Czy leczenie ortodontyczne jest bolesne?', answer: 'Zakładanie aparatu jest bezbolesne. Po aktywacji aparatu może wystąpić uczucie ucisku i lekkiej bolesności, które ustępuje w ciągu 2-3 dni. Z każdą kolejną wizytą dyskomfort jest coraz mniejszy.' },
];

const EXPERT_INFO = [
  { title: 'Leczenie ortodontyczne', content: '<p>Leczenie ortodontyczne to nie tylko estetyka. Proces obejmuje dokładną diagnostykę z wykonaniem zdjęć panoramicznych i cefalometrycznych, określenie planu leczenia oraz systematyczne wizyty kontrolne. Ortodonta ustala rodzaj aparatu i harmonogram zabiegów dostosowany do konkretnego przypadku.</p>' },
  { title: 'Rodzaje aparatów', content: '<p>Aparat stały działa poprzez przytwierdzenie zamków do każdego zęba, połączonych łukami wywierającymi siłę przemieniającą. Dostępne są dwa rodzaje zamków: metalowe — jedno z najstarszych rozwiązań, oraz ceramiczne, które są bardziej estetyczne i mniej widoczne.</p>' },
  { title: 'Korzyści z leczenia', content: '<p>Leczenie ortodontyczne wspomaga w poradzeniu sobie z paradontozą, wadami wymowy, bólami głowy i ścieraniem zębów. Końcowym etapem jest założenie aparatu retencyjnego i periodyczne wizyty kontrolne utrzymujące efekty leczenia.</p>' },
];

const CHILD_SERVICES = [
  { name: 'Aparaty stałe', description: 'Klasyczne aparaty stałe metalowe i estetyczne ceramiczne.', href: '/ortodoncja/aparaty-stale/' },
  { name: 'Alignery', description: 'Przezroczyste nakładki do niewidocznego prostowania zębów.', href: '/ortodoncja/alignery/' },
  { name: 'Aparaty ruchome', description: 'Aparaty ruchome dla dzieci i dorosłych.', href: '/ortodoncja/aparaty-ruchome/' },
];

export default function OrtodoncjaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Ortodoncja Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Kompleksowe leczenie ortodontyczne w Bas Clinic. Aparaty stałe, alignery i aparaty ruchome. Prostujemy zęby skutecznie i komfortowo."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      childServices={CHILD_SERVICES}
      slug="ortodoncja"
    />
  );
}
