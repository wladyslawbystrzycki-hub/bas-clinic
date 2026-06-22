import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Korekta uśmiechu dziąsłowego Wrocław - Medycyna estetyczna',
  description: 'Korekta uśmiechu dziąsłowego (gummy smile) toksyną botulinową. Bas Clinic Wrocław.',
  path: '/korekta-usmiechu-dziaslowego/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Korekta uśmiechu dziąsłowego' },
];

const FAQ = [
  { question: 'Czym jest uśmiech dziąsłowy (gummy smile)?', answer: 'Uśmiech dziąsłowy to stan, w którym podczas uśmiechu widoczna jest nadmierna ilość dziąseł powyżej górnych zębów. Może to być spowodowane nadmiernym unoszeniem górnej wargi, krótką wargą górną lub przerostem dziąseł. Problem ten można skutecznie skorygować.' },
  { question: 'Jak działa toksyna botulinowa w korekcie uśmiechu dziąsłowego?', answer: 'Toksyna botulinowa wstrzykiwana jest w mięsień dźwigacz wargi górnej, co ogranicza jego nadmierne unoszenie podczas uśmiechu. Dzięki temu warga nie unosi się tak wysoko i dziąsła są mniej widoczne, zachowując przy tym naturalny, piękny uśmiech.' },
  { question: 'Jak długo utrzymuje się efekt korekty?', answer: 'Efekt korekty uśmiechu dziąsłowego toksyną botulinową utrzymuje się od 4 do 6 miesięcy. Zabieg można powtarzać. Z czasem regularne stosowanie może wydłużyć okres między zabiegami.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest korekta uśmiechu dziąsłowego?', content: '<p>Korekta uśmiechu dziąsłowego to zabieg medycyny estetycznej polegający na wstrzyknięciu niewielkiej dawki toksyny botulinowej w okolicę mięśnia dźwigacza wargi górnej. Zabieg redukuje nadmierne unoszenie wargi podczas uśmiechu, zmniejszając widoczność dziąseł. Jest to szybka, nieinwazyjna i bezbolesna metoda rozwiązania problemu gummy smile.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Zabieg jest bardzo szybki - trwa zaledwie kilka minut. Lekarz analizuje mechanizm uśmiechu pacjenta i wyznacza precyzyjne punkty iniekcji. Następnie wstrzykuje minimalną dawkę toksyny botulinowej - zazwyczaj 2-4 jednostki po każdej stronie. Nie wymaga znieczulenia. Efekt pojawia się po 3-7 dniach.</p>' },
];

export default function KorektaUsmiechuDziaslowegoPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Korekta uśmiechu dziąsłowego Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Estetyczna korekta gummy smile toksyną botulinową. Szybki zabieg przywracający harmonijny, piękny uśmiech."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="korekta-usmiechu-dziaslowego"
    />
  );
}
