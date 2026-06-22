import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Leczenie bezzębia Wrocław - Kompleksowe uzupełnienie zębów',
  description: 'Leczenie bezzębia we Wrocławiu. Protezy, implanty All-on-4, mosty protetyczne. Przywracamy pełny uśmiech i komfort życia w Bas Clinic.',
  path: '/leczenie-bezzebia/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Leczenie bezzębia' },
];

const FAQ = [
  { question: 'Jakie są opcje leczenia bezzębia?', answer: 'Leczenie bezzębia obejmuje protezy ruchome (częściowe i całkowite), mosty protetyczne oraz rozwiązania implantologiczne, w tym metodę All-on-4 i All-on-6. Wybór metody zależy od stanu kości, oczekiwań pacjenta i budżetu.' },
  { question: 'Czym jest metoda All-on-4?', answer: 'All-on-4 to innowacyjna metoda, w której cały łuk zębowy osadzony jest na czterech implantach. Pozwala na odzyskanie pełnego uśmiechu nawet w jeden dzień, bez konieczności rozległej augmentacji kości.' },
  { question: 'Czy można jeść normalnie po leczeniu bezzębia?', answer: 'Tak, nowoczesne metody leczenia bezzębia pozwalają na pełny powrót do normalnej diety. Rozwiązania na implantach zapewniają stabilność porównywalną z naturalnymi zębami.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest bezzębie i jak je leczymy?', content: '<p>Bezzębie to stan całkowitego lub częściowego braku zębów, który wpływa na jakość życia, możliwość jedzenia i mówienia oraz samoocenę pacjenta. W Bas Clinic oferujemy kompleksowe leczenie bezzębia - od tradycyjnych protez po nowoczesne rozwiązania implantologiczne, które przywracają pełną funkcjonalność i estetykę.</p>' },
  { title: 'Jak przebiega leczenie?', content: '<p>Proces leczenia rozpoczyna się od szczegółowej diagnostyki obejmującej badanie kliniczne, zdjęcia RTG i tomografię CBCT. Na podstawie wyników przygotowujemy indywidualny plan leczenia. W przypadku implantów procedura obejmuje wszczepianie śrub tytanowych, okres gojenia i wykonanie stałej pracy protetycznej.</p>' },
];

export default function LeczenieBezzebiaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Leczenie bezzębia Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Kompleksowe leczenie bezzębia w Bas Clinic. Nowoczesne protezy, implanty i metoda All-on-4. Przywracamy uśmiech i komfort codziennego życia."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="leczenie-bezzebia"
    />
  );
}
