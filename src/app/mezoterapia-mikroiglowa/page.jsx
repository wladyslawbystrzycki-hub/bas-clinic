import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Mezoterapia mikroigłowa Wrocław - Medycyna estetyczna',
  description: 'Mezoterapia mikroigłowa - stymulacja produkcji kolagenu mikronakłuciami. Bas Clinic Wrocław.',
  path: '/mezoterapia-mikroiglowa/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Mezoterapia mikroigłowa' },
];

const FAQ = [
  { question: 'Czym różni się mezoterapia mikroigłowa od igłowej?', answer: 'Mezoterapia mikroigłowa wykorzystuje urządzenie z wieloma drobnymi igłami (dermapen), które tworzą kontrolowane mikrokanaliki w skórze, stymulując regenerację. Mezoterapia igłowa polega na ręcznym wstrzykiwaniu preparatów. Obie metody można łączyć dla lepszych efektów.' },
  { question: 'Jak długo trwa rekonwalescencja?', answer: 'Bezpośrednio po zabiegu skóra jest zaczerwieniona - efekt przypominający lekkie oparzenie słoneczne. Zaczerwienienie ustępuje w ciągu 24-48 godzin. Przez 2-3 dni należy unikać makijażu, sauny i intensywnego wysiłku fizycznego.' },
  { question: 'Jakie problemy skórne można leczyć mikroigłami?', answer: 'Mezoterapia mikroigłowa jest skuteczna w leczeniu blizn potrądzikowych, rozszerzonych porów, zmarszczek, przebarwień, rozstępów oraz ogólnej poprawy jakości skóry. Głębokość nakłuć dobiera się indywidualnie do problemu.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest mezoterapia mikroigłowa?', content: '<p>Mezoterapia mikroigłowa (microneedling) to zabieg wykorzystujący urządzenie dermapen wyposażone w sterylne mikroigły, które tworzą kontrolowane mikronakłucia w skórze. Proces ten uruchamia naturalną kaskadę gojenia - stymuluje produkcję kolagenu i elastyny, co prowadzi do odbudowy i odmłodzenia skóry. Podczas zabiegu można równocześnie aplikować serum z substancjami aktywnymi.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Po oczyszczeniu skóry i nałożeniu kremu znieczulającego lekarz wykonuje zabieg urządzeniem dermapen, dostosowując głębokość nakłuć do leczonego obszaru i problemu. Na skórę nakładane jest serum z kwasem hialuronowym lub innymi substancjami aktywnymi. Zabieg trwa 30-45 minut i kończy się nałożeniem maski kojącej.</p>' },
];

export default function MezoterapiaMikroiglowaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Mezoterapia mikroigłowa Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Stymulacja produkcji kolagenu mikronakłuciami. Naturalna regeneracja skóry z wykorzystaniem technologii dermapen."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="mezoterapia-mikroiglowa"
    />
  );
}
