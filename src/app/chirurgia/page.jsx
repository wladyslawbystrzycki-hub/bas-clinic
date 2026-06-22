import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Chirurgia stomatologiczna Wrocław - Zabiegi chirurgiczne',
  description: 'Chirurgia stomatologiczna we Wrocławiu. Usuwanie zębów, zębów mądrości, zabiegi na tkankach miękkich. Bezpieczne zabiegi chirurgiczne w Bas Clinic.',
  path: '/chirurgia/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Chirurgia' },
];

const FAQ = [
  { question: 'Jakie zabiegi chirurgiczne są wykonywane w gabinecie?', answer: 'W Bas Clinic wykonujemy usuwanie zębów (w tym zębów mądrości), resekcje wierzchołków korzeni, plastykę dziąseł, podcięcie wędzidełka, wyłuszczenie torbieli oraz zabiegi przygotowujące do implantacji (augmentacja kości, podniesienie dna zatoki).' },
  { question: 'Czy zabiegi chirurgiczne są bolesne?', answer: 'Wszystkie zabiegi wykonujemy w skutecznym znieczuleniu miejscowym, dzięki czemu są całkowicie bezbolesne. Po zabiegu przepisujemy leki przeciwbólowe i zalecamy stosowanie okładu chłodzącego w celu minimalizacji obrzęku.' },
  { question: 'Jak długo trwa gojenie po zabiegu chirurgicznym?', answer: 'Czas gojenia zależy od rodzaju zabiegu. Po prostym usunięciu zęba gojenie trwa 7-10 dni. Po bardziej skomplikowanych zabiegach może potrwać 2-3 tygodnie. Szwy zdejmowane są po 7-10 dniach.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest chirurgia stomatologiczna?', content: '<p>Chirurgia stomatologiczna obejmuje zabiegi operacyjne wykonywane w obrębie jamy ustnej. Obejmuje usuwanie zębów, w tym skomplikowane ekstrakcje zębów zatrzymanych, zabiegi na tkankach miękkich, leczenie chirurgiczne stanów zapalnych oraz zabiegi przygotowujące do leczenia protetycznego i implantologicznego.</p>' },
  { title: 'Jak przygotować się do zabiegu?', content: '<p>Przed zabiegiem chirurgicznym należy poinformować lekarza o przyjmowanych lekach, alergiach i chorobach ogólnych. Zalecamy zjedzenie lekkiego posiłku przed wizytą. Nie należy spożywać alkoholu 24 godziny przed zabiegiem. Po zabiegu warto mieć zapewniony transport do domu.</p>' },
  { title: 'Zalecenia pozabiegowe', content: '<p>Po zabiegu chirurgicznym należy stosować okłady chłodzące przez pierwsze 24 godziny, unikać wysiłku fizycznego przez 2-3 dni, nie płukać ust w dniu zabiegu i stosować przepisane leki. Ważne jest również unikanie gorących posiłków i napojów oraz palenia papierosów.</p>' },
];

const CHILD_SERVICES = [
  { name: 'Usuwanie zębów', description: 'Ekstrakcja zębów, w tym zębów mądrości i zębów zatrzymanych.', href: '/chirurgia/usuwanie-zebow/' },
];

export default function ChirurgiaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Chirurgia Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Chirurgia stomatologiczna w Bas Clinic. Bezpieczne zabiegi chirurgiczne wykonywane przez doświadczonych specjalistów z wykorzystaniem nowoczesnego sprzętu."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      childServices={CHILD_SERVICES}
      slug="chirurgia"
    />
  );
}
