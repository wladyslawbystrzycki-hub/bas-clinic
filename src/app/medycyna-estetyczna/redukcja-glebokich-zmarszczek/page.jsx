import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Redukcja głębokich zmarszczek kwasem hialuronowym Wrocław',
  description: 'Redukcja głębokich zmarszczek kwasem hialuronowym w okolicy oczu. Bas Clinic Wrocław.',
  path: '/medycyna-estetyczna/redukcja-glebokich-zmarszczek/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Redukcja głębokich zmarszczek kwasem hialuronowym' },
];

const FAQ = [
  { question: 'Jakie zmarszczki można zredukować w okolicy oczu?', answer: 'Zabieg skutecznie redukuje głębokie kurze łapki, zmarszczki pod oczami oraz bruzdy wokół oczu. Kwas hialuronowy wypełnia zagłębienia, wygładzając skórę i przywracając młodzieńczy wygląd okolicy oczu.' },
  { question: 'Czy zabieg w okolicy oczu jest bezpieczny?', answer: 'Tak, pod warunkiem że wykonuje go doświadczony lekarz medycyny estetycznej. Okolica oczu wymaga specjalistycznej wiedzy anatomicznej i precyzji. Stosujemy preparaty dedykowane do tej delikatnej okolicy o odpowiedniej gęstości i plastyczności.' },
  { question: 'Jak długo utrzymuje się efekt?', answer: 'Efekt redukcji zmarszczek w okolicy oczu kwasem hialuronowym utrzymuje się od 6 do 12 miesięcy. Czas trwania zależy od rodzaju preparatu, metabolizmu pacjenta i stylu życia. Zabieg można bezpiecznie powtarzać.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest redukcja głębokich zmarszczek w okolicy oczu?', content: '<p>Zabieg polega na precyzyjnym wstrzyknięciu kwasu hialuronowego w obszary głębokich zmarszczek wokół oczu. Okolica oczu jest jednym z pierwszych miejsc, gdzie pojawiają się oznaki starzenia - skóra jest tutaj bardzo cienka i podatna na zmarszczki. Kwas hialuronowy wypełnia zagłębienia, nawilża skórę od wewnątrz i wygładza nawet głębokie zmarszczki.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Lekarz aplikuje krem znieczulający na okolice oczu. Po 20 minutach oczekiwania przystępuje do precyzyjnych iniekcji kwasu hialuronowego dedykowanego do okolicy oczu. Używane są najcieńsze igły lub kaniule dla minimalizacji urazowości. Zabieg trwa 20-30 minut. Po zabiegu mogą wystąpić niewielkie obrzęki ustępujące w ciągu 1-2 dni.</p>' },
];

export default function RedukcjaGlebokichZmarszczekPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Redukcja głębokich zmarszczek kwasem hialuronowym Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Wypełnianie głębokich zmarszczek w okolicy oczu kwasem hialuronowym. Precyzyjne iniekcje przywracające młodzieńczy wygląd spojrzenia."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/redukcja-glebokich-zmarszczek"
    />
  );
}
