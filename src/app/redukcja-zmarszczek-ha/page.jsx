import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Redukcja zmarszczek kwasem hialuronowym Wrocław - Medycyna estetyczna',
  description: 'Redukcja zmarszczek kwasem hialuronowym - skuteczne wygładzanie zmarszczek na twarzy. Bas Clinic Wrocław.',
  path: '/redukcja-zmarszczek-ha/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Redukcja zmarszczek kwasem hialuronowym' },
];

const FAQ = [
  { question: 'Czym różni się redukcja zmarszczek HA od toksyny botulinowej?', answer: 'Kwas hialuronowy wypełnia zmarszczki od wewnątrz, przywracając objętość i nawilżenie. Toksyna botulinowa natomiast rozluźnia mięśnie tworzące zmarszczki mimiczne. Oba zabiegi można łączyć dla uzyskania optymalnych efektów.' },
  { question: 'Czy po zabiegu mogę wrócić do pracy?', answer: 'Tak, zabieg nie wymaga rekonwalescencji. Mogą pojawić się niewielkie obrzęki lub siniaki w miejscach wkłuć, które ustępują w ciągu 2-3 dni. Można je łatwo zamaskować kosmetykami.' },
  { question: 'Jak przygotować się do zabiegu?', answer: 'Na tydzień przed zabiegiem należy unikać aspiryny i leków przeciwzakrzepowych (po konsultacji z lekarzem). W dniu zabiegu nie należy spożywać alkoholu. Warto przyjść z czystą, pozbawioną makijażu skórą.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest redukcja zmarszczek kwasem hialuronowym?', content: '<p>Zabieg polega na precyzyjnym wstrzykiwaniu kwasu hialuronowego w miejsca występowania zmarszczek statycznych, czyli tych widocznych niezależnie od mimiki twarzy. Preparat wypełnia zmarszczki od wewnątrz, wygładzając skórę i przywracając jej młodzieńczy wygląd. Szczególnie skuteczny w przypadku bruzd nosowo-wargowych, zmarszczek marionetki i drobnych linii na twarzy.</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Lekarz oczyszcza skórę i aplikuje krem znieczulający. Następnie przy użyciu cienkich igieł wstrzykuje kwas hialuronowy w obszary wymagające korekcji. Zabieg trwa 20-40 minut. Po zabiegu lekarz modeluje preparat i ocenia efekt. Pacjent otrzymuje zalecenia dotyczące pielęgnacji pozabiegowej.</p>' },
];

export default function RedukcjaZmarszczekHaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Redukcja zmarszczek kwasem hialuronowym Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Skuteczne wygładzanie zmarszczek statycznych na twarzy dzięki precyzyjnym iniekcjom kwasu hialuronowego."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="redukcja-zmarszczek-ha"
    />
  );
}
