import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Mezoterapia głęboka (skin booster) Wrocław - Medycyna estetyczna',
  description: 'Skin booster - głębokie nawilżenie i regeneracja skóry dekoltu. Bas Clinic Wrocław.',
  path: '/skin-booster/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Mezoterapia głęboka (skin booster)' },
];

const FAQ = [
  { question: 'Czym jest skin booster?', answer: 'Skin booster to zabieg głębokiego nawilżenia skóry polegający na wstrzykiwaniu niewielkich ilości stabilizowanego kwasu hialuronowego w skórę właściwą. W odróżnieniu od wypełniaczy, skin booster nie modeluje rysów, lecz nawilża, regeneruje i poprawia jakość skóry od wewnątrz.' },
  { question: 'Jakie są efekty zabiegu skin booster?', answer: 'Po serii zabiegów skóra jest głęboko nawilżona, bardziej elastyczna, gładka i promienna. Zmniejszają się drobne zmarszczki, poprawia się koloryt skóry. Efekt tzw. glass skin - zdrowej, rozświetlonej skóry.' },
  { question: 'Na jakie obszary można zastosować skin booster?', answer: 'Skin booster można aplikować na twarz, szyję, dekolt, dłonie, a także okolice pod oczami. Szczególnie polecany na dekolt, który często jest zaniedbywany w codziennej pielęgnacji, a szybko zdradza oznaki starzenia.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest mezoterapia głęboka (skin booster)?', content: '<p>Skin booster to zaawansowana forma mezoterapii wykorzystująca stabilizowany, niesieciowany kwas hialuronowy do głębokiego nawilżenia skóry. Preparat wstrzykiwany jest w skórę właściwą, gdzie tworzy rezerwuar wody, nawilżając skórę od wewnątrz. Skin boostery stymulują również fibroblasty do produkcji kolagenu i elastyny, poprawiając jakość skóry na dłuższy czas.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Po oczyszczeniu skóry i nałożeniu kremu znieczulającego lekarz wykonuje serię mikrowstrzyknięć preparatu skin booster równomiernie na całej powierzchni dekoltu. Stosowana jest technika mikrobolusów w regularnym układzie. Zabieg trwa 30-40 minut. Po zabiegu widoczne są drobne grudki, które wchłaniają się w ciągu 24-48 godzin.</p>' },
];

export default function SkinBoosterPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Mezoterapia głęboka (skin booster) Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Głębokie nawilżenie i regeneracja skóry dekoltu. Przywracanie promienistego wyglądu i elastyczności skóry."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="skin-booster"
    />
  );
}
