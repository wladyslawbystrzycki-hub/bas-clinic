import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Regeneratory komórkowe Wrocław - Medycyna estetyczna',
  description: 'Regeneratory komórkowe - zaawansowana regeneracja komórkowa skóry. Bas Clinic Wrocław.',
  path: '/regeneratory-komorkowe/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Regeneratory komórkowe' },
];

const FAQ = [
  { question: 'Czym są regeneratory komórkowe?', answer: 'Regeneratory komórkowe to preparaty nowej generacji zawierające polinukleotydy, peptydy biomimetyczne lub czynniki wzrostu, które działają na poziomie komórkowym, stymulując odnowę i naprawę uszkodzonych tkanek. Są to jedne z najbardziej zaawansowanych preparatów w medycynie estetycznej.' },
  { question: 'Kiedy stosuje się regeneratory komórkowe?', answer: 'Regeneratory komórkowe są stosowane u pacjentów ze zmęczoną, pozbawioną blasku skórą, oznakami fotostarzenia, utratą elastyczności oraz jako element kompleksowych programów odmładzających. Mogą być stosowane na twarz, szyję i dekolt.' },
  { question: 'Ile zabiegów potrzeba, by zobaczyć efekty?', answer: 'Zalecana seria to 3-4 zabiegi w odstępach 3-4 tygodniowych. Efekty w postaci poprawy nawilżenia i elastyczności widoczne są już po pierwszym zabiegu, natomiast pełna regeneracja kolagenowa następuje w ciągu 2-3 miesięcy.' },
];

const EXPERT_INFO = [
  { title: 'Czym są regeneratory komórkowe?', content: '<p>Regeneratory komórkowe to najnowsza generacja preparatów medycyny estetycznej, działających na poziomie komórkowym. Zawierają składniki takie jak polinukleotydy (PDRN), peptydy biomimetyczne, czynniki wzrostu czy egzosomy, które bezpośrednio stymulują procesy naprawcze w skórze. Dzięki temu skóra odzyskuje zdolność do samodzielnej regeneracji i produkcji kolagenu.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Zabieg wykonywany jest techniką mezoterapii igłowej lub mikroigłowej. Po znieczuleniu miejscowym lekarz wprowadza preparat regeneracyjny w skórę właściwą za pomocą serii mikrowstrzyknięć. Zabieg trwa około 30-40 minut. Po zabiegu skóra może być lekko zaczerwieniona przez kilka godzin.</p>' },
];

export default function RegeneratoryKomorkowePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Regeneratory komórkowe Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Zaawansowana regeneracja komórkowa skóry. Preparaty nowej generacji działające na poziomie komórkowym dla głębokiej odnowy tkanek."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="regeneratory-komorkowe"
    />
  );
}
