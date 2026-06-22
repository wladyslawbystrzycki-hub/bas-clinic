import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Alignery Wrocław - Niewidoczne prostowanie zębów',
  description: 'Alignery we Wrocławiu. Przezroczyste nakładki do niewidocznego prostowania zębów. Komfortowa alternatywa dla aparatów stałych w Bas Clinic.',
  path: '/ortodoncja/alignery/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Ortodoncja', href: '/ortodoncja/' },
  { label: 'Alignery' },
];

const FAQ = [
  { question: 'Czy alignery są skuteczne tak jak aparaty stałe?', answer: 'Alignery są bardzo skuteczne w leczeniu lekkiego i średniego stłoczenia zębów, szpar oraz niektórych wad zgryzu. W przypadku złożonych wad ortodontycznych aparat stały może być bardziej efektywny. Ortodonta oceni, która metoda będzie najlepsza.' },
  { question: 'Jak długo trzeba nosić alignery?', answer: 'Alignery należy nosić 20-22 godziny na dobę, zdejmując je jedynie do jedzenia i mycia zębów. Każdy komplet nakładek nosi się przez 1-2 tygodnie, a całkowity czas leczenia wynosi zazwyczaj 6-18 miesięcy.' },
  { question: 'Czy alignery są widoczne na zębach?', answer: 'Alignery są wykonane z przezroczystego, cienkiego tworzywa i są praktycznie niewidoczne na zębach. To idealne rozwiązanie dla osób, które nie chcą nosić tradycyjnego aparatu stałego.' },
];

const EXPERT_INFO = [
  { title: 'Czym są alignery?', content: '<p>Alignery to przezroczyste, wymienne nakładki ortodontyczne, które stopniowo przesuwają zęby w pożądaną pozycję. Każdy komplet nakładek jest indywidualnie projektowany na podstawie cyfrowego skanu zębów pacjenta. Alignery są wygodną i estetyczną alternatywą dla tradycyjnych aparatów stałych.</p>' },
  { title: 'Jak przebiega leczenie alignerami?', content: '<p>Leczenie rozpoczyna się od wykonania cyfrowego skanu zębów skanerem wewnątrzustnym. Na tej podstawie tworzona jest wizualizacja 3D całego procesu leczenia. Pacjent otrzymuje serię nakładek, które zmienia co 1-2 tygodnie. Wizyty kontrolne odbywają się co 6-8 tygodni.</p>' },
  { title: 'Zalety alignerów', content: '<p>Alignery są niewidoczne na zębach, można je wygodnie zdejmować do jedzenia i mycia zębów, nie powodują podrażnienia błony śluzowej i są łatwiejsze w utrzymaniu higieny niż aparaty stałe. Pacjent może jeść wszystko bez ograniczeń diety.</p>' },
];

export default function AligneryPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Alignery Wrocław"
      heroSubtitle="Ortodoncja"
      heroDescription="Przezroczyste alignery w Bas Clinic. Niewidoczne prostowanie zębów bez metalowych zamków. Komfort, estetyka i skuteczność w jednym rozwiązaniu."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="ortodoncja/alignery"
    />
  );
}
