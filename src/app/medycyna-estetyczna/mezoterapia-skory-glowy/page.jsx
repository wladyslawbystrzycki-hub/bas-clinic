import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Mezoterapia skóry głowy Wrocław - zabieg na włosy',
  description: 'Mezoterapia skóry głowy - stymulacja wzrostu włosów i regeneracja cebulek włosowych. Bas Clinic Wrocław.',
  path: '/medycyna-estetyczna/mezoterapia-skory-glowy/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Mezoterapia skóry głowy' },
];

const FAQ = [
  { question: 'Dla kogo przeznaczona jest mezoterapia skóry głowy?', answer: 'Zabieg jest przeznaczony dla osób borykających się z nadmiernym wypadaniem włosów, przerzedzeniem włosów, łysieniem androgenowym we wczesnym stadium oraz dla osób chcących wzmocnić włosy i poprawić ich kondycję. Skuteczny zarówno u kobiet, jak i mężczyzn.' },
  { question: 'Jakie substancje są wstrzykiwane w skórę głowy?', answer: 'Koktajle mezoterapeutyczne dla skóry głowy zawierają peptydy stymulujące wzrost włosów, witaminy z grupy B, cynk, biotynę, aminokwasy i czynniki wzrostu. Skład preparatu lekarz dobiera indywidualnie do problemu pacjenta.' },
  { question: 'Ile zabiegów potrzeba, by zobaczyć efekty?', answer: 'Zalecana seria to 6-10 zabiegów wykonywanych co 1-2 tygodnie. Pierwsze efekty w postaci zmniejszenia wypadania włosów widoczne są po 3-4 zabiegach. Nowe włosy zaczynają odrastać po 2-3 miesiącach od rozpoczęcia terapii.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest mezoterapia skóry głowy?', content: '<p>Mezoterapia skóry głowy to zabieg polegający na wstrzykiwaniu specjalistycznych koktajli witaminowych i peptydowych bezpośrednio w skórę głowy, w okolice mieszków włosowych. Substancje aktywne stymulują cebulki włosowe, poprawiają mikrokrążenie, dostarczają składniki odżywcze i hamują procesy prowadzące do wypadania włosów. To jedna z najskuteczniejszych niechirurgicznych metod leczenia wypadania włosów.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Lekarz wykonuje serię drobnych wstrzyknięć preparatu w skórę głowy przy użyciu cienkiej igły lub pistoletu do mezoterapii. Preparaty są aplikowane równomiernie na całej powierzchni skóry głowy lub w obszarach największego przerzedzenia. Zabieg trwa 20-30 minut. Może powodować lekki dyskomfort, który jest dobrze tolerowany przez pacjentów.</p>' },
  { title: 'Jakie efekty daje mezoterapia skóry głowy?', content: '<p>Regularna mezoterapia skóry głowy skutkuje zmniejszeniem wypadania włosów, pogrubieniem włosów istniejących, stymulacją wzrostu nowych włosów z uśpionych mieszków oraz poprawę ogólnej kondycji włosów - blasku, elastyczności i gęstości. Efekty są długotrwałe przy regularnych zabiegach podtrzymujących.</p>' },
];

export default function MezoterapiaSkoryglowyPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Mezoterapia skóry głowy Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Stymulacja wzrostu włosów i regeneracja cebulek włosowych. Skuteczna terapia przeciw wypadaniu i przerzedzeniu włosów."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="medycyna-estetyczna/mezoterapia-skory-glowy"
    />
  );
}
