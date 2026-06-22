import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Leczenie zębów Wrocław - Stomatologia zachowawcza i endodoncja',
  description: 'Leczenie zębów we Wrocławiu. Leczenie próchnicy, leczenie kanałowe pod mikroskopem. Nowoczesna stomatologia zachowawcza w Bas Clinic.',
  path: '/leczenie-zebow/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Leczenie zębów' },
];

const FAQ = [
  { question: 'Czy leczenie kanałowe jest bolesne?', answer: 'Nowoczesne leczenie kanałowe wykonywane pod mikroskopem w znieczuleniu miejscowym jest bezbolesne. Pacjent może odczuwać jedynie lekki dyskomfort związany z dłuższą wizytą. Ból po zabiegu jest zazwyczaj minimalny i ustępuje w ciągu 2-3 dni.' },
  { question: 'Jak rozpoznać próchnicę?', answer: 'Wczesna próchnica często nie daje objawów - dlatego regularne wizyty kontrolne są tak ważne. Objawy zaawansowanej próchnicy to ból przy jedzeniu słodyczy, gorąca lub zimna, widoczne ubytki lub przebarwienia na zębach.' },
  { question: 'Ile kosztuje leczenie kanałowe?', answer: 'Koszt leczenia kanałowego zależy od liczby kanałów w zębie (1-4 kanały). Podczas konsultacji przedstawiamy szczegółowy kosztorys leczenia. Inwestycja w leczenie kanałowe pozwala zachować własny ząb, co jest zawsze lepsze niż ekstrakcja.' },
];

const EXPERT_INFO = [
  { title: 'Stomatologia zachowawcza', content: '<p>Specjalizujemy się w zachowawczym leczeniu zębów, polegającym na usuwaniu próchnicy i odbudowie uszkodzonych zębów z wykorzystaniem nowoczesnych materiałów, które są zarówno estetyczne, jak i trwałe.</p>' },
  { title: 'Leczenie kanałowe', content: '<p>Leczenie kanałowe (endodontyczne) stanowi jedną z naszych specjalności. Przy użyciu nowoczesnego sprzętu wykonujemy precyzyjne leczenie kanałowe polegające na usunięciu chorej miazgi i dokładnym wypełnieniu kanałów korzeniowych. Pozwala to ratować nawet mocno uszkodzone zęby, eliminując konieczność ekstrakcji.</p>' },
  { title: 'Profilaktyka', content: '<p>Profilaktyka jest kluczowym elementem oferty. Regularne przeglądy, usuwanie kamienia nazębnego i edukacja w zakresie higieny jamy ustnej pomagają zapobiegać próchnicy i innym chorobom zębów. Kładziemy nacisk na edukację pacjentów, aby mogli samodzielnie dbać o zdrowie jamy ustnej.</p>' },
];

export default function LeczeniZebowPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Leczenie zębów Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Nowoczesne leczenie zębów w Bas Clinic. Leczenie próchnicy i zabiegi endodontyczne pod mikroskopem. Bezboleśnie i skutecznie dbamy o zdrowie Twoich zębów."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="leczenie-zebow"
    />
  );
}
