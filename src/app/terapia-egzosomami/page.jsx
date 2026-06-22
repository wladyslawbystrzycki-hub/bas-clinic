import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Luksusowa terapia odmładzająca z egzosomami Wrocław - Medycyna estetyczna',
  description: 'Luksusowa terapia odmładzająca z egzosomami - najnowsza technologia odmładzania. Bas Clinic Wrocław.',
  path: '/terapia-egzosomami/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Luksusowa terapia odmładzająca z egzosomami' },
];

const FAQ = [
  { question: 'Czym są egzosomy i jak działają na skórę?', answer: 'Egzosomy to mikropęcherzyki wydzielane przez komórki macierzyste, zawierające czynniki wzrostu, cytokiny i mikroRNA. Komunikują się z komórkami skóry, stymulując ich do intensywnej regeneracji, produkcji kolagenu i naprawy uszkodzeń. To najbardziej zaawansowana forma biostymulacji skóry.' },
  { question: 'Dla kogo przeznaczona jest terapia egzosomami?', answer: 'Terapia egzosomami jest idealna dla pacjentów poszukujących najbardziej zaawansowanych metod odmładzania skóry. Szczególnie polecana osobom z wyraźnymi oznakami starzenia, utratą elastyczności, przebarwieniami oraz po zabiegach laserowych jako wspomaganie gojenia.' },
  { question: 'Ile kosztuje terapia egzosomami?', answer: 'Terapia egzosomami należy do premium zabiegów medycyny estetycznej. Dokładny koszt zależy od rodzaju preparatu, obszaru zabiegu i liczby sesji. Szczegółowy plan terapii i wycenę ustala lekarz podczas konsultacji.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest terapia egzosomami?', content: '<p>Terapia egzosomami to najbardziej innowacyjna metoda odmładzania skóry, wykorzystująca naturalne nanocząstki - egzosomy - pozyskiwane z komórek macierzystych. Egzosomy zawierają bogaty zestaw czynników wzrostu, cytokin i materiału genetycznego, który programuje komórki skóry do intensywnej regeneracji. To przełomowa technologia łącząca biotechnologię z medycyną estetyczną.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Zabieg rozpoczyna się od przygotowania skóry mezoterapią mikroigłową, która tworzy mikrokanaliki umożliwiające penetrację egzosomów. Następnie na skórę nakłada się preparat z egzosomami, który wnika w głębsze warstwy skóry. Cały zabieg trwa około 60 minut. Efekty są widoczne już po pierwszym zabiegu i narastają w kolejnych tygodniach.</p>' },
  { title: 'Jakie efekty daje terapia egzosomami?', content: '<p>Terapia egzosomami zapewnia kompleksowe odmłodzenie skóry: poprawę elastyczności i jędrności, redukcję zmarszczek, wyrównanie kolorytu, zmniejszenie porów i przywrócenie naturalnego blasku. Efekty są długotrwałe dzięki uruchomieniu własnych mechanizmów regeneracyjnych skóry.</p>' },
];

export default function TerapiaEgzosamamiPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Luksusowa terapia odmładzająca z egzosomami Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Najnowsza technologia odmładzania z wykorzystaniem egzosomów. Premium terapia dla kompleksowej regeneracji i odmłodzenia skóry."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="terapia-egzosomami"
    />
  );
}
