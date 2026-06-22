import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Osocze bogatopłytkowe Wrocław - Medycyna estetyczna',
  description: 'Osocze bogatopłytkowe (PRP) - terapia regeneracyjna z wykorzystaniem własnego osocza. Bas Clinic Wrocław.',
  path: '/osocze-bogatoplytkowe/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Osocze bogatopłytkowe' },
];

const FAQ = [
  { question: 'Czym jest terapia PRP?', answer: 'PRP (Platelet-Rich Plasma) to terapia regeneracyjna wykorzystująca osocze bogatopłytkowe pozyskane z własnej krwi pacjenta. Płytki krwi zawierają czynniki wzrostu, które stymulują regenerację tkanek, produkcję kolagenu i wzrost włosów.' },
  { question: 'Jak pozyskuje się osocze bogatopłytkowe?', answer: 'Z żyły pacjenta pobiera się niewielką ilość krwi (ok. 10-20 ml), która następnie poddawana jest wirowaniu w specjalnej wirówce. Proces ten oddziela osocze bogate w płytki krwi od pozostałych składników. Cały proces trwa około 15 minut.' },
  { question: 'Czy terapia PRP jest bezpieczna?', answer: 'Tak, terapia PRP jest jedną z najbezpieczniejszych metod w medycynie estetycznej, ponieważ wykorzystuje własną krew pacjenta. Nie ma ryzyka reakcji alergicznej ani odrzucenia. Jedynym przeciwwskazaniem są zaburzenia krzepnięcia krwi.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest osocze bogatopłytkowe?', content: '<p>Osocze bogatopłytkowe (PRP) to frakcja krwi pacjenta zawierająca zagęszczoną koncentrację płytek krwi. Płytki te są bogatym źródłem czynników wzrostu (PDGF, TGF, VEGF, EGF), które po wstrzyknięciu w skórę głowy stymulują cebulki włosowe do wzrostu, poprawiają mikrokrążenie i odżywianie mieszków włosowych. Terapia PRP jest w pełni naturalna i biokompatybilna.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Zabieg rozpoczyna się od pobrania krwi z żyły pacjenta do specjalnych probówek. Następnie krew jest wirowana w certyfikowanej wirówce, co pozwala na wyizolowanie frakcji bogatopłytkowej. Pozyskane osocze jest następnie wstrzykiwane w skórę głowy techniką mezoterapii. Cały zabieg trwa około 45-60 minut.</p>' },
  { title: 'Jakie efekty daje terapia PRP na włosy?', content: '<p>Terapia PRP skutecznie hamuje wypadanie włosów, stymuluje wzrost nowych włosów z uśpionych mieszków, pogrubia istniejące włosy i poprawia ich kondycję. Efekty są widoczne po 2-3 miesiącach od rozpoczęcia serii zabiegów. Zaleca się 3-4 zabiegi w odstępach miesięcznych, a następnie sesje podtrzymujące co 6-12 miesięcy.</p>' },
];

export default function OsoczeBogatoplytkowePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Osocze bogatopłytkowe Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Terapia PRP - regeneracja z wykorzystaniem własnego osocza. Naturalna stymulacja wzrostu włosów i wzmocnienie cebulek włosowych."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="osocze-bogatoplytkowe"
    />
  );
}
