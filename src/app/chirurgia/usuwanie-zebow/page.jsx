import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Usuwanie zębów Wrocław - Ekstrakcja zębów w Bas Clinic',
  description: 'Usuwanie zębów we Wrocławiu. Bezbolesna ekstrakcja zębów, usuwanie zębów mądrości i zębów zatrzymanych. Doświadczeni chirurdzy w Bas Clinic.',
  path: '/chirurgia/usuwanie-zebow/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Chirurgia', href: '/chirurgia/' },
  { label: 'Usuwanie zębów' },
];

const FAQ = [
  { question: 'Kiedy konieczne jest usunięcie zęba?', answer: 'Usunięcie zęba jest konieczne, gdy nie można go uratować leczeniem zachowawczym lub endodontycznym, przy zaawansowanej chorobie przyzębia, w przypadku zębów zatrzymanych powodujących dolegliwości oraz ze wskazań ortodontycznych.' },
  { question: 'Jak wygląda usuwanie zębów mądrości?', answer: 'Usuwanie zębów mądrości (ósemek) często wymaga zabiegu chirurgicznego, zwłaszcza gdy ząb jest zatrzymany w kości. Chirurg wykonuje nacięcie dziąsła, odsłania ząb, w razie potrzeby dzieli go na części i usuwa. Rana jest zszywana, a szwy zdejmowane po 7-10 dniach.' },
  { question: 'Jakie są zalecenia po usunięciu zęba?', answer: 'Po usunięciu zęba należy przygryzać gazik przez 30 minut, nie płukać ust przez 24 godziny, stosować okłady chłodzące, unikać gorących pokarmów i wysiłku fizycznego. Przepisane leki przeciwbólowe i antybiotyki należy przyjmować zgodnie z zaleceniami lekarza.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest ekstrakcja zęba?', content: '<p>Ekstrakcja to zabieg chirurgiczny polegający na usunięciu zęba z zębodołu. Rozróżniamy ekstrakcje proste (gdy ząb jest widoczny i dostępny) oraz chirurgiczne (gdy ząb jest zatrzymany w kości lub wymaga odsłonięcia). W Bas Clinic wszystkie zabiegi wykonywane są w komfortowych warunkach i skutecznym znieczuleniu.</p>' },
  { title: 'Jak przebiega zabieg usuwania zęba?', content: '<p>Przed zabiegiem wykonujemy zdjęcie RTG, aby ocenić anatomię zęba i otaczających tkanek. Następnie podajemy znieczulenie miejscowe. Chirurg rozchwiewa ząb specjalnymi narzędziami i delikatnie go usuwa. W przypadku zębów zatrzymanych konieczne jest nacięcie dziąsła i często podzielenie zęba na części. Rana jest zaopatrywana i zszywana.</p>' },
  { title: 'Gojenie po ekstrakcji', content: '<p>Proces gojenia po ekstrakcji trwa zazwyczaj 7-14 dni. W pierwszych dniach może wystąpić obrzęk i lekki ból, który jest kontrolowany lekami. Pełna regeneracja kości w miejscu po zębie trwa około 3-6 miesięcy. Ważne jest przestrzeganie zaleceń pozabiegowych, aby uniknąć powikłań takich jak suchy zębodół.</p>' },
];

export default function UsuwanieZebowPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Usuwanie zębów Wrocław"
      heroSubtitle="Chirurgia"
      heroDescription="Bezbolesne usuwanie zębów w Bas Clinic. Ekstrakcje proste i chirurgiczne, usuwanie zębów mądrości. Doświadczeni chirurdzy i nowoczesny sprzęt."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="chirurgia/usuwanie-zebow"
    />
  );
}
