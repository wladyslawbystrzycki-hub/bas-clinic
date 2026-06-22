import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Laserowe usuwanie blizn i rozstępów Wrocław - Medycyna estetyczna',
  description: 'Laserowe usuwanie blizn i rozstępów - laserowa redukcja niedoskonałości skóry. Bas Clinic Wrocław.',
  path: '/laserowe-usuwanie-blizn/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Laserowe usuwanie blizn i rozstępów' },
];

const FAQ = [
  { question: 'Jakie rodzaje blizn można leczyć laserem?', answer: 'Laserem można skutecznie leczyć blizny potrądzikowe, blizny pooperacyjne, blizny pourazowe, blizny przerostowe, keloidy oraz rozstępy. Rodzaj lasera i parametry zabiegu lekarz dobiera indywidualnie do typu blizny i fototypu skóry pacjenta.' },
  { question: 'Ile zabiegów jest potrzebnych do usunięcia blizn?', answer: 'Liczba zabiegów zależy od rodzaju, wielkości i głębokości blizn. Typowo potrzeba 3-6 zabiegów w odstępach 4-8 tygodniowych. Drobne blizny potrądzikowe mogą wymagać mniejszej liczby sesji, a głębokie blizny lub rozstępy - większej.' },
  { question: 'Jak wygląda rekonwalescencja po zabiegu laserowym?', answer: 'Po zabiegu skóra jest zaczerwieniona i może być lekko opuchnięta przez 3-7 dni. Następnie pojawia się delikatne łuszczenie. Przez 2-4 tygodnie należy unikać ekspozycji na słońce i stosować krem z wysokim filtrem UV. Lekarz przekaże szczegółowe zalecenia pozabiegowe.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest laserowe usuwanie blizn i rozstępów?', content: '<p>Laserowe usuwanie blizn i rozstępów to zabieg wykorzystujący wiązkę laserową do kontrolowanego uszkodzenia tkanki bliznowatej, co uruchamia naturalne procesy gojenia i przebudowy kolagenu. W zależności od rodzaju blizny stosuje się lasery ablacyjne (CO2, erbowy) lub nieablacyjne (frakcyjny). Laser stymuluje produkcję nowego, zdrowego kolagenu, który zastępuje tkankę bliznowatą.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Po oczyszczeniu skóry i nałożeniu kremu znieczulającego lekarz wykonuje zabieg laserem, precyzyjnie obejmując obszar blizny lub rozstępów. Wiązka laserowa tworzy mikroskopijne kolumny w skórze, stymulując regenerację. Zabieg trwa 15-60 minut w zależności od wielkości leczonego obszaru. Po zabiegu nakładany jest krem kojący i ochronny.</p>' },
];

export default function LaseroweUsuwanieBliznPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Laserowe usuwanie blizn i rozstępów Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Laserowa redukcja blizn, rozstępów i niedoskonałości skóry. Nowoczesne technologie laserowe dla gładkiej i zdrowej skóry ciała."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="laserowe-usuwanie-blizn"
    />
  );
}
