import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Aparaty stałe Wrocław - Leczenie ortodontyczne aparatem stałym',
  description: 'Aparaty stałe we Wrocławiu. Aparaty metalowe i estetyczne ceramiczne. Skuteczne prostowanie zębów u dzieci i dorosłych w Bas Clinic.',
  path: '/ortodoncja/aparaty-stale/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Ortodoncja', href: '/ortodoncja/' },
  { label: 'Aparaty stałe' },
];

const FAQ = [
  { question: 'Jakie są rodzaje aparatów stałych?', answer: 'Oferujemy aparaty metalowe (klasyczne, samoligaturujące) oraz estetyczne aparaty ceramiczne, które są mniej widoczne na zębach. Aparaty samoligaturujące skracają czas leczenia i wymagają rzadszych wizyt kontrolnych.' },
  { question: 'Jak dbać o zęby z aparatem stałym?', answer: 'Konieczne jest dokładne szczotkowanie po każdym posiłku specjalną szczoteczką ortodontyczną, stosowanie szczoteczek międzyzębowych i irygatorów. Należy unikać twardych i lepkich pokarmów, które mogą uszkodzić aparat.' },
  { question: 'Jak często trzeba przychodzić na wizyty kontrolne?', answer: 'Wizyty kontrolne z aktywacją aparatu odbywają się co 4-6 tygodni. Podczas każdej wizyty ortodonta wymienia łuki, sprawdza postęp leczenia i dostosowuje siły działające na zęby.' },
];

const EXPERT_INFO = [
  { title: 'Czym są aparaty stałe?', content: '<p>Aparat stały to urządzenie ortodontyczne składające się z zamków (bracketów) przyklejonych do zębów oraz łuków metalowych, które generują siły przesuwające zęby w pożądanym kierunku. Jest to najskuteczniejsza metoda leczenia większości wad zgryzu, pozwalająca na precyzyjne kontrolowanie ruchów zębów.</p>' },
  { title: 'Jak przebiega zakładanie aparatu?', content: '<p>Zakładanie aparatu stałego trwa około 60-90 minut i jest całkowicie bezbolesne. Ortodonta przykleja zamki do zębów za pomocą specjalnego kleju, a następnie umieszcza łuk w zamkach. Pacjent otrzymuje szczegółowe instrukcje dotyczące higieny i diety.</p>' },
  { title: 'Aparaty metalowe czy ceramiczne?', content: '<p>Aparaty metalowe są trwalsze, bardziej wytrzymałe i pozwalają na szybsze leczenie. Aparaty ceramiczne są mniej widoczne na zębach dzięki przezroczystym lub białym zamkom. Wybór zależy od preferencji estetycznych pacjenta i rodzaju wady zgryzu.</p>' },
];

export default function AparatyStalePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Aparaty stałe Wrocław"
      heroSubtitle="Ortodoncja"
      heroDescription="Aparaty stałe metalowe i estetyczne ceramiczne w Bas Clinic. Skuteczne leczenie wad zgryzu z wykorzystaniem nowoczesnych systemów ortodontycznych."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="ortodoncja/aparaty-stale"
    />
  );
}
