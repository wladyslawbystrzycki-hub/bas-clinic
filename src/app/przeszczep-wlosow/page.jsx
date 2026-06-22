import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Przeszczep włosów Wrocław - odtworzenie linii włosów',
  description:
    'Przeszczep włosów w Bas Clinic Wrocław — odtworzenie linii włosów i zagęszczenie owłosienia. Plan zabiegu po konsultacji i ocenie skóry głowy.',
  path: '/przeszczep-wlosow/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Przeszczep włosów' },
];

const FAQ = [
  {
    question: 'Na czym polega przeszczep włosów?',
    answer:
      'Przeszczep włosów polega na pobraniu własnych mieszków włosowych z obszaru dawczego (najczęściej tyłu głowy) i umieszczeniu ich w okolicy wymagającej zagęszczenia. Metodę pobrania i rozmieszczenia mieszków lekarz dobiera indywidualnie po ocenie skóry głowy i obszaru dawczego.',
  },
  {
    question: 'Jak wygląda okres po zabiegu?',
    answer:
      'Po zabiegu w okolicy poddanej zabiegowi może wystąpić zaczerwienienie i obrzęk, które stopniowo ustępują. Przeszczepione włosy wymagają czasu na wzrost, dlatego efekt ocenia się stopniowo w kolejnych miesiącach. Szczegółowe zalecenia dotyczące pielęgnacji i wizyt kontrolnych przekazujemy indywidualnie.',
  },
  {
    question: 'Czy zabieg jest bolesny?',
    answer:
      'Przeszczep włosów wykonuje się w znieczuleniu miejscowym, co zapewnia komfort w trakcie zabiegu. Przebieg zabiegu oraz rodzaj znieczulenia lekarz omawia podczas konsultacji kwalifikującej.',
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest przeszczep włosów?',
    content:
      '<p>Przeszczep włosów to zabieg polegający na przeniesieniu własnych mieszków włosowych z obszaru dawczego w miejsce przerzedzenia lub braku owłosienia. Celem zabiegu jest odtworzenie linii włosów oraz zagęszczenie owłosienia z wykorzystaniem naturalnego materiału Pacjenta. Plan zabiegu lekarz ustala indywidualnie po ocenie skóry głowy.</p>',
  },
  {
    title: 'Jak przygotować się do zabiegu?',
    content:
      '<p>Zabieg poprzedza konsultacja, podczas której lekarz ocenia skórę głowy oraz obszar dawczy, omawia możliwy zakres zabiegu, jego przebieg i okres gojenia. Na tym etapie ustalane są zalecenia przygotowujące oraz ewentualne przeciwwskazania. Decyzję o zabiegu podejmujemy wspólnie, po wyjaśnieniu wszystkich wątpliwości.</p>',
  },
];

export default function PrzeszczepWlosowPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Przeszczep włosów Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Odtworzenie linii włosów i zagęszczenie owłosienia z wykorzystaniem własnych mieszków włosowych. Plan zabiegu po konsultacji i ocenie skóry głowy."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="przeszczep-wlosow"
    />
  );
}
