import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Aparaty ruchome Wrocław - Ortodoncja dla dzieci i dorosłych',
  description: 'Aparaty ruchome we Wrocławiu. Aparaty ortodontyczne zdejmowane dla dzieci i dorosłych. Wczesne leczenie wad zgryzu w Bas Clinic.',
  path: '/ortodoncja/aparaty-ruchome/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Ortodoncja', href: '/ortodoncja/' },
  { label: 'Aparaty ruchome' },
];

const FAQ = [
  { question: 'Dla kogo są aparaty ruchome?', answer: 'Aparaty ruchome stosuje się głównie u dzieci w okresie uzębienia mieszanego (6-12 lat) do korekcji wczesnych wad zgryzu. U dorosłych mogą służyć jako aparaty retencyjne po zakończeniu leczenia aparatem stałym.' },
  { question: 'Ile godzin dziennie trzeba nosić aparat ruchomy?', answer: 'Aparat ruchomy należy nosić minimum 14-16 godzin dziennie, najlepiej przez całą noc i kilka godzin w ciągu dnia. Regularne noszenie jest kluczowe dla skuteczności leczenia.' },
  { question: 'Jak dbać o aparat ruchomy?', answer: 'Aparat należy myć po każdym posiłku szczoteczką i pastą do zębów lub specjalnym płynem. Raz w tygodniu warto używać tabletek czyszczących. Aparat należy przechowywać w dedykowanym pudełku, gdy nie jest noszony.' },
];

const EXPERT_INFO = [
  { title: 'Czym są aparaty ruchome?', content: '<p>Aparaty ruchome to zdejmowane urządzenia ortodontyczne wykonane z akrylu i elementów metalowych. Stosowane są głównie u dzieci do korekcji wad zgryzu we wczesnym stadium, poszerzania łuku zębowego i tworzenia miejsca dla zębów stałych. Mogą być też stosowane jako aparaty retencyjne u dorosłych.</p>' },
  { title: 'Jak przebiega leczenie aparatem ruchomym?', content: '<p>Po badaniu ortodontycznym i analizie zdjęć rentgenowskich ortodonta pobiera wyciski zębów. Na ich podstawie technik laboratoryjny wykonuje indywidualny aparat. Wizyty kontrolne z aktywacją aparatu odbywają się co 4-6 tygodni. Czas leczenia wynosi zazwyczaj 6-18 miesięcy.</p>' },
  { title: 'Aparaty ruchome a stałe', content: '<p>Aparaty ruchome są mniej precyzyjne niż stałe, ale mają swoje unikalne zastosowania. Idealnie sprawdzają się we wczesnym leczeniu wad zgryzu u dzieci, gdy można wykorzystać potencjał wzrostowy. W wielu przypadkach wczesne leczenie aparatem ruchomym skraca lub eliminuje potrzebę późniejszego leczenia aparatem stałym.</p>' },
];

export default function AparatyRuchomePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Aparaty ruchome Wrocław"
      heroSubtitle="Ortodoncja"
      heroDescription="Aparaty ruchome w Bas Clinic. Skuteczne leczenie wad zgryzu u dzieci i retencja po leczeniu ortodontycznym. Indywidualnie dobrane rozwiązania."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="ortodoncja/aparaty-ruchome"
    />
  );
}
