import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Blefaroplastyka górna i dolna Wrocław - plastyka powiek',
  description:
    'Blefaroplastyka — plastyka powiek górnych i dolnych. Korekta nadmiaru skóry powiek w Bas Clinic Wrocław. Konsultacja i ocena okolicy oczu przed zabiegiem.',
  path: '/medycyna-estetyczna/blefaroplastyka/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Blefaroplastyka górna i dolna' },
];

const FAQ = [
  {
    question: 'Czym różni się blefaroplastyka górna od dolnej?',
    answer:
      'Blefaroplastyka górna dotyczy powiek górnych i polega na korekcie nadmiaru skóry, który może opadać nad oko. Blefaroplastyka dolna obejmuje powieki dolne, gdzie korygowany jest nadmiar skóry oraz uwypuklenia tkanek. Zakres zabiegu lekarz ustala indywidualnie po ocenie okolicy oczu podczas konsultacji.',
  },
  {
    question: 'Jak przebiega rekonwalescencja po zabiegu?',
    answer:
      'Po zabiegu w okolicy powiek mogą wystąpić obrzęk i zasinienie, które stopniowo ustępują w ciągu kilkunastu dni. W tym czasie zaleca się oszczędzający tryb, unikanie wysiłku i stosowanie się do zaleceń lekarza. Szczegółowe wytyczne dotyczące pielęgnacji i wizyt kontrolnych przekazujemy indywidualnie.',
  },
  {
    question: 'Czy zabieg wykonywany jest w znieczuleniu?',
    answer:
      'Blefaroplastykę wykonuje się zwykle w znieczuleniu miejscowym, dbając o komfort Pacjenta w trakcie zabiegu. Rodzaj znieczulenia oraz przebieg zabiegu lekarz omawia podczas kwalifikacji.',
  },
];

const EXPERT_INFO = [
  {
    title: 'Czym jest blefaroplastyka?',
    content:
      '<p>Blefaroplastyka to zabieg w obrębie powiek, którego celem jest korekta nadmiaru skóry powiek górnych lub dolnych oraz poprawa wyglądu okolicy oczu. Zabieg może obejmować powieki górne, dolne lub obie okolice jednocześnie. Zakres i metodę lekarz dobiera indywidualnie po ocenie anatomii powiek i oczekiwań Pacjenta.</p>',
  },
  {
    title: 'Jak wygląda kwalifikacja do zabiegu?',
    content:
      '<p>Zabieg poprzedza konsultacja, podczas której lekarz ocenia okolicę oczu, omawia możliwy zakres korekty, przebieg zabiegu oraz okres gojenia. Na tym etapie ustalane są również ewentualne przeciwwskazania i zalecenia przygotowujące do zabiegu. Decyzję o zabiegu podejmujemy wspólnie, po wyjaśnieniu wszystkich wątpliwości.</p>',
  },
];

export default function BlefaroplastykaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Blefaroplastyka górna i dolna Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Plastyka powiek górnych i dolnych — korekta nadmiaru skóry powiek i odświeżenie okolicy oczu. Zabieg poprzedzony konsultacją i oceną lekarską."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/blefaroplastyka"
    />
  );
}
