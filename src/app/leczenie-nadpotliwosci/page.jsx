import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Leczenie nadpotliwości toksyną botulinową Wrocław - Medycyna estetyczna',
  description: 'Leczenie nadpotliwości toksyną botulinową - skuteczne leczenie nadmiernego pocenia się. Bas Clinic Wrocław.',
  path: '/leczenie-nadpotliwosci/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Leczenie nadpotliwości toksyną botulinową' },
];

const FAQ = [
  { question: 'Jak działa toksyna botulinowa w leczeniu nadpotliwości?', answer: 'Toksyna botulinowa blokuje przekaźnictwo nerwowe do gruczołów potowych, co skutecznie hamuje nadmierne wydzielanie potu. Zabieg nie wpływa na termoregulację organizmu - pot jest produkowany przez inne gruczoły w całym ciele.' },
  { question: 'Jak długo utrzymuje się efekt zabiegu?', answer: 'Efekt leczenia nadpotliwości toksyną botulinową utrzymuje się od 6 do 12 miesięcy - znacznie dłużej niż w przypadku zabiegów estetycznych na twarz. Po tym czasie zabieg można powtórzyć.' },
  { question: 'Czy zabieg jest bolesny?', answer: 'Zabieg wykonywany jest po wcześniejszym nałożeniu kremu znieczulającego na okolice pach. Wstrzyknięcia wykonywane są bardzo cienką igłą. Dyskomfort jest minimalny i krótkotrwały. Cały zabieg trwa około 15-20 minut.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest leczenie nadpotliwości toksyną botulinową?', content: '<p>Leczenie nadpotliwości (hiperhidrozy) toksyną botulinową to sprawdzona metoda medyczna polegająca na wstrzykiwaniu toksyny botulinowej w skórę pach, co blokuje sygnały nerwowe stymulujące gruczoły potowe. Jest to skuteczna metoda leczenia nadmiernego pocenia się, które nie reaguje na standardowe antyperspiranty. Zabieg jest zatwierdzony przez FDA i stosowany na całym świecie.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Przed zabiegiem lekarz może wykonać test jodowo-skrobiowy w celu precyzyjnego określenia obszarów najintensywniejszego pocenia. Następnie na skórę pach nakładany jest krem znieczulający. Po 20 minutach lekarz wykonuje serię drobnych wstrzyknięć toksyny botulinowej równomiernie w skórę pach. Zabieg trwa 15-20 minut. Efekt pojawia się po 3-5 dniach.</p>' },
  { title: 'Dla kogo jest przeznaczony ten zabieg?', content: '<p>Zabieg jest przeznaczony dla osób cierpiących na nadmierną potliwość pach (hiperhidrozę), która znacząco wpływa na jakość życia i komfort psychiczny. Wskazany jest szczególnie gdy standardowe antyperspiranty nie przynoszą ulgi. Zabieg jest bezpieczny i może być powtarzany w regularnych odstępach czasu.</p>' },
];

export default function LeczenieNadpotliwosciPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Leczenie nadpotliwości toksyną botulinową Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Skuteczne leczenie nadmiernego pocenia się toksyną botulinową. Długotrwała ulga od hiperhidrozy pach."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="leczenie-nadpotliwosci"
    />
  );
}
