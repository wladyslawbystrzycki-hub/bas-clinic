import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Mezoterapia okolicy oka Wrocław - Medycyna estetyczna',
  description: 'Mezoterapia okolicy oka - specjalistyczna mezoterapia delikatnej okolicy oczu. Bas Clinic Wrocław.',
  path: '/mezoterapia-okolicy-oka/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Mezoterapia okolicy oka' },
];

const FAQ = [
  { question: 'Na czym polega mezoterapia okolicy oka?', answer: 'Mezoterapia okolicy oka polega na serii mikrowstrzyknięć specjalnie dobranych koktajli nawilżająco-regenerujących w delikatną skórę wokół oczu. Preparaty zawierają kwas hialuronowy, peptydy, witaminy i aminokwasy dedykowane tej wrażliwej okolicy.' },
  { question: 'Jakie problemy rozwiązuje mezoterapia okolicy oka?', answer: 'Zabieg skutecznie redukuje drobne zmarszczki wokół oczu, cienie pod oczami, odwodnienie skóry i utratę elastyczności. Poprawia mikrokrążenie, co zmniejsza opuchliznę i ciemne zabarwienie pod oczami.' },
  { question: 'Czy zabieg jest bezpieczny dla delikatnej skóry wokół oczu?', answer: 'Tak, zabieg wykonywany jest preparatami specjalnie opracowanymi do delikatnej okolicy oczu, o lekkiej konsystencji i odpowiednim składzie. Lekarz stosuje najcieńsze igły i techniki minimalizujące ryzyko siniaców.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest mezoterapia okolicy oka?', content: '<p>Mezoterapia okolicy oka to specjalistyczny zabieg polegający na wstrzykiwaniu koktajli aktywnych składników bezpośrednio w skórę wokół oczu. Skóra w tej okolicy jest najcieńsza na całym ciele i wymaga szczególnej pielęgnacji. Preparaty stosowane w mezoterapii okolicy oka zawierają skoncentrowany kwas hialuronowy, peptydy naprawcze, witaminy C i E oraz czynniki wzmacniające naczynia włosowate.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Po delikatnym oczyszczeniu okolicy oczu i nałożeniu kremu znieczulającego lekarz wykonuje serię precyzyjnych mikrowstrzyknięć wokół oczodołu. Stosowane są specjalne, ultracienkie igły. Zabieg trwa około 15-20 minut. Po zabiegu okolica oczu może być lekko zaczerwieniona, co ustępuje w ciągu kilku godzin.</p>' },
];

export default function MezoterapiaOkolicyOkaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Mezoterapia okolicy oka Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Specjalistyczna mezoterapia delikatnej okolicy oczu. Nawilżenie, regeneracja i odmłodzenie skóry wokół oczu."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="mezoterapia-okolicy-oka"
    />
  );
}
