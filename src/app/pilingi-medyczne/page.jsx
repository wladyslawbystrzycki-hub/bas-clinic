import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Pilingi medyczne Wrocław - Medycyna estetyczna',
  description: 'Pilingi medyczne - profesjonalne pilingi chemiczne dla odnowy skóry. Bas Clinic Wrocław.',
  path: '/pilingi-medyczne/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Pilingi medyczne' },
];

const FAQ = [
  { question: 'Czym są pilingi medyczne?', answer: 'Pilingi medyczne to zabiegi wykorzystujące specjalistyczne preparaty chemiczne (kwasy) o wyższych stężeniach niż te dostępne w kosmetyce. Działają na różną głębokość skóry, usuwając martwe komórki i stymulując odnowę. Wykonywane są wyłącznie przez lekarza.' },
  { question: 'Jak wygląda skóra po pilingu medycznym?', answer: 'W zależności od rodzaju pilingu, skóra może być lekko zaczerwieniona (pilingi powierzchowne) lub wyraźnie się łuszczać przez 5-7 dni (pilingi średniogłębokie). Lekarz dobiera rodzaj pilingu do potrzeb skóry i informuje o przebiegu rekonwalescencji.' },
  { question: 'Jak często można wykonywać pilingi?', answer: 'Pilingi powierzchowne można powtarzać co 2-4 tygodnie. Pilingi średniogłębokie wykonuje się co 4-8 tygodni. Standardowa seria to 3-6 zabiegów. Lekarz ustala plan zabiegów na podstawie indywidualnych potrzeb skóry.' },
];

const EXPERT_INFO = [
  { title: 'Czym są pilingi medyczne?', content: '<p>Pilingi medyczne to kontrolowana eksfoliacja skóry przy użyciu specjalistycznych kwasów, takich jak kwas glikolowy, salicylowy, mlekowy, migdałowy, TCA czy retinolowy. W zależności od rodzaju i stężenia kwasu zabieg działa na różną głębokość skóry - od warstwy rogowej po skórę właściwą. Efektem jest usuwanie martwych komórek, stymulacja odnowy komórkowej i poprawa ogólnego stanu skóry.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Zabieg rozpoczyna się od dokładnego oczyszczenia skóry. Następnie lekarz nakłada preparat pilingu na twarz lub szyję, kontrolując czas ekspozycji. Po odpowiednim czasie preparat jest neutralizowany lub zmywany. Na zakończenie nakładany jest krem ochronny z filtrem. Cały zabieg trwa 20-40 minut.</p>' },
];

export default function PilingiMedycznePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Pilingi medyczne Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Profesjonalne pilingi chemiczne dla odnowy skóry. Kontrolowana eksfoliacja stymulująca regenerację i odmłodzenie."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="pilingi-medyczne"
    />
  );
}
