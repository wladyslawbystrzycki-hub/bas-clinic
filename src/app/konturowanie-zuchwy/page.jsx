import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Konturowanie linii żuchwy i brody Wrocław - Medycyna estetyczna',
  description: 'Konturowanie linii żuchwy i brody kwasem hialuronowym. Modelowanie dolnej partii twarzy. Bas Clinic Wrocław.',
  path: '/konturowanie-zuchwy/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Konturowanie linii żuchwy i brody' },
];

const FAQ = [
  { question: 'Na czym polega konturowanie linii żuchwy?', answer: 'Konturowanie linii żuchwy to zabieg polegający na wstrzyknięciu kwasu hialuronowego o dużej gęstości wzdłuż linii żuchwy i w okolicę brody. Efektem jest wyrazista, dobrze zdefiniowana linia żuchwy oraz proporcjonalna broda, co nadaje twarzy harmonijny i młodzieńczy wygląd.' },
  { question: 'Czy zabieg nadaje się zarówno dla kobiet, jak i mężczyzn?', answer: 'Tak, konturowanie żuchwy jest popularne zarówno wśród kobiet, jak i mężczyzn. U kobiet celem jest zwykle delikatne wysubtelnienie i odżywienie owalu twarzy, natomiast u mężczyzn - wzmocnienie męskiego rysu żuchwy i podbródka.' },
  { question: 'Jak długo utrzymuje się efekt?', answer: 'Efekt konturowania linii żuchwy utrzymuje się od 12 do 18 miesięcy dzięki zastosowaniu preparatów o wysokim stopniu sieciowania. Jest to jeden z dłużej utrzymujących się zabiegów z kwasem hialuronowym ze względu na mniejszą ruchliwość tego obszaru.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest konturowanie linii żuchwy i brody?', content: '<p>Konturowanie żuchwy i brody to zabieg medycyny estetycznej polegający na precyzyjnym wstrzykiwaniu kwasu hialuronowego o dużej gęstości w okolicę linii żuchwy, kąta żuchwy i brody. Zabieg pozwala na wyostrzenie konturu dolnej partii twarzy, korekcję asymetrii, wydłużenie lub poszerzenie brody oraz poprawę proporcji twarzy. Jest idealny dla osób z niewyraźną linią żuchwy lub cofniętą brodą.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Po analizie proporcji twarzy i zaplanowaniu punktów iniekcji lekarz stosuje znieczulenie miejscowe. Preparat aplikowany jest przy użyciu kaniul, co minimalizuje ryzyko siniaków. Lekarz precyzyjnie modeluje linię żuchwy i brodę, kontrolując efekt na bieżąco. Zabieg trwa 30-45 minut. Efekt jest widoczny natychmiast.</p>' },
];

export default function KonturowanieZuchwyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Konturowanie linii żuchwy i brody Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Modelowanie i wyraziste konturowanie dolnej partii twarzy. Precyzyjne definiowanie linii żuchwy i brody kwasem hialuronowym."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="konturowanie-zuchwy"
    />
  );
}
