import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Regeneracja konturu oka Wrocław - Medycyna estetyczna',
  description: 'Regeneracja konturu oka - odmłodzenie i regeneracja okolicy oczu. Bas Clinic Wrocław.',
  path: '/medycyna-estetyczna/regeneracja-konturu-oka/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Regeneracja konturu oka' },
];

const FAQ = [
  { question: 'Na czym polega regeneracja konturu oka?', answer: 'Regeneracja konturu oka to zabieg łączący różne techniki medycyny estetycznej w celu kompleksowej poprawy wyglądu okolicy oczu - wygładzenia zmarszczek, redukcji cieni, poprawy jędrności skóry i odświeżenia spojrzenia.' },
  { question: 'Czym różni się od zwykłej mezoterapii okolicy oka?', answer: 'Regeneracja konturu oka to bardziej kompleksowy zabieg, który może łączyć mezoterapię z biostymulatorami, peptydami lub stymulatorami tkankowymi. Celem jest nie tylko nawilżenie, ale całościowa przebudowa i wzmocnienie struktury skóry wokół oczu.' },
  { question: 'Jak często należy powtarzać zabieg?', answer: 'Zalecana seria to 3-4 zabiegi w odstępach 3-4 tygodniowych. Następnie zabiegi podtrzymujące raz na 3-6 miesięcy. Lekarz dobiera protokół indywidualnie do potrzeb pacjenta.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest regeneracja konturu oka?', content: '<p>Regeneracja konturu oka to zaawansowany zabieg medycyny estetycznej skoncentrowany na kompleksowej odnowie i wzmocnieniu delikatnych tkanek wokół oczu. Zabieg wykorzystuje kombinację biostymulatorów, peptydów naprawczych i kwasu hialuronowego do odbudowy struktury kolagenowej, poprawy elastyczności i wzmocnienia ścian naczyniowych w okolicy oczodołu.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Po konsultacji i analizie okolicy oczu lekarz dobiera indywidualny protokół zabiegowy. Zabieg wykonywany jest po znieczuleniu miejscowym - lekarz wprowadza preparaty regeneracyjne techniką iniekcyjną w strategiczne punkty wokół oka. Zabieg trwa 20-30 minut. Efekty narastają stopniowo w ciągu kilku tygodni.</p>' },
];

export default function RegeneracjaKonturuOkaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Regeneracja konturu oka Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Odmłodzenie i kompleksowa regeneracja konturu oka. Zaawansowane techniki przywracające młodzieńczy wygląd spojrzenia."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/regeneracja-konturu-oka"
    />
  );
}
