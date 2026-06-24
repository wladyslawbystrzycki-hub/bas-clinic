import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Redukcja cieni pod oczami Wrocław - Medycyna estetyczna',
  description: 'Redukcja cieni pod oczami - eliminacja cieni i woreczków pod oczami. Bas Clinic Wrocław.',
  path: '/medycyna-estetyczna/redukcja-cieni/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Redukcja cieni pod oczami' },
];

const FAQ = [
  { question: 'Co powoduje cienie pod oczami?', answer: 'Cienie pod oczami mogą być spowodowane genetyką, utratą tkanki tłuszczowej i kolagenu związaną z wiekiem, osłabioną mikrocyrkulacją, odwodnieniem lub przewlekłym zmęczeniem. Lekarz podczas konsultacji określi przyczynę i dobierze odpowiednią metodę leczenia.' },
  { question: 'Jaka metoda jest najskuteczniejsza na cienie pod oczami?', answer: 'Wybór metody zależy od przyczyny cieni. Przy utracie objętości stosuje się wypełniacze HA do doliny łez. Przy problemach naczyniowych skuteczna jest mezoterapia wzmacniająca naczynia. Często najlepsze efekty daje połączenie kilku metod.' },
  { question: 'Czy efekt jest natychmiastowy?', answer: 'W przypadku wypełniania doliny łez kwasem hialuronowym efekt jest widoczny natychmiast, a ostateczny rezultat ocenia się po 2 tygodniach. Przy mezoterapii efekty narastają stopniowo po serii zabiegów.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest redukcja cieni pod oczami?', content: '<p>Redukcja cieni pod oczami to zestaw zabiegów medycyny estetycznej mających na celu eliminację ciemnego zabarwienia, zapadnięć i woreczków pod oczami. W zależności od przyczyny problemu lekarz może zastosować wypełnienie doliny łez kwasem hialuronowym, mezoterapię wzmacniającą naczynia, biostymulatory lub kombinację tych metod.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Zabieg poprzedza dokładna konsultacja i analiza przyczyny cieni. W przypadku wypełniania doliny łez lekarz stosuje znieczulenie miejscowe, a następnie przy użyciu kaniuli wprowadza kwas hialuronowy w okolice doliny łez. Zabieg trwa 15-20 minut i daje natychmiastowy efekt. W przypadku mezoterapii wykonuje się serię mikrowstrzyknięć preparatu nawilżająco-wzmacniającego.</p>' },
];

export default function RedukcjaCieniPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Redukcja cieni pod oczami Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Eliminacja cieni i woreczków pod oczami. Skuteczne metody przywracające świeży i wypoczęty wygląd spojrzenia."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/redukcja-cieni"
    />
  );
}
