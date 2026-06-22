import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Protetyka korony Wrocław - Korony protetyczne w Bas Clinic',
  description: 'Korony protetyczne we Wrocławiu. Korony ceramiczne, cyrkonowe i pełnoceramiczne. Trwałe uzupełnienie zniszczonych zębów w Bas Clinic.',
  path: '/protetyka-korony/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Protetyka korony' },
];

const FAQ = [
  { question: 'Kiedy potrzebna jest korona protetyczna?', answer: 'Korona protetyczna jest wskazana, gdy ząb jest znacznie zniszczony przez próchnicę, uraz lub po leczeniu kanałowym. Korona chroni osłabiony ząb przed dalszym zniszczeniem i przywraca jego prawidłowy kształt oraz funkcję.' },
  { question: 'Z jakich materiałów wykonuje się korony?', answer: 'Oferujemy korony pełnoceramiczne, cyrkonowe oraz ceramiczne na podbudowie metalowej. Korony pełnoceramiczne i cyrkonowe zapewniają najlepszą estetykę i są preferowane w strefie uśmiechu.' },
  { question: 'Ile trwa wykonanie korony protetycznej?', answer: 'Wykonanie korony wymaga zazwyczaj dwóch wizyt w odstępie 7-10 dni. Podczas pierwszej wizyty ząb jest przygotowywany i pobierany jest wycisk. Na czas oczekiwania zakładana jest korona tymczasowa.' },
];

const EXPERT_INFO = [
  { title: 'Czym są korony protetyczne?', content: '<p>Korona protetyczna to stałe uzupełnienie protetyczne, które nakładane jest na zniszczony lub osłabiony ząb. Pokrywa całą widoczną część zęba, przywracając mu naturalny kształt, wielkość, kolor i funkcję. Współczesne korony są praktycznie nie do odróżnienia od naturalnych zębów.</p>' },
  { title: 'Jak przebiega zakładanie korony?', content: '<p>Podczas pierwszej wizyty stomatolog przygotowuje ząb przez jego oszlifowanie, pobiera wyciski precyzyjne i zakłada koronę tymczasową. Technik laboratoryjny wykonuje koronę z wybranego materiału. Podczas drugiej wizyty korona jest przymierzana, korygowana i trwale cementowana na zębie.</p>' },
  { title: 'Pielęgnacja koron protetycznych', content: '<p>Korony protetyczne wymagają regularnej higieny - szczotkowania, nitkowania i stosowania irygatorów. Ważne są też regularne wizyty kontrolne, podczas których stomatolog sprawdza stan korony i przylegającego zęba. Przy prawidłowej pielęgnacji korony mogą służyć 10-15 lat.</p>' },
];

export default function ProtetykaKoronyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Protetyka korony Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Korony protetyczne najwyższej jakości w Bas Clinic. Stosujemy nowoczesne materiały ceramiczne i cyrkonowe, które zapewniają trwałość i naturalny wygląd."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="protetyka-korony"
    />
  );
}
