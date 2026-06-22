import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Stomatologia estetyczna Wrocław - Piękny uśmiech w Bas Clinic',
  description: 'Stomatologia estetyczna we Wrocławiu. Wybielanie zębów, odbudowa, licówki i bonding. Nowoczesne metody dla pięknego uśmiechu w Bas Clinic.',
  path: '/stomatologia-estetyczna/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Stomatologia estetyczna' },
];

const FAQ = [
  { question: 'Jakie zabiegi obejmuje stomatologia estetyczna?', answer: 'Stomatologia estetyczna obejmuje wybielanie zębów, licówki porcelanowe i kompozytowe, bonding, odbudowę estetyczną zębów oraz korektę kształtu i koloru zębów.' },
  { question: 'Czy zabiegi estetyczne są bolesne?', answer: 'Większość zabiegów estetycznych jest bezbolesna lub wykonywana w znieczuleniu miejscowym. Pacjent nie odczuwa dyskomfortu w trakcie zabiegu.' },
  { question: 'Jak długo utrzymują się efekty zabiegów estetycznych?', answer: 'Trwałość efektów zależy od rodzaju zabiegu. Licówki porcelanowe mogą służyć nawet 15-20 lat, wybielanie wymaga odświeżenia co 1-2 lata, a bonding utrzymuje się 5-7 lat.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest stomatologia estetyczna?', content: '<p>Stomatologia estetyczna to dziedzina stomatologii zajmująca się poprawianiem wyglądu zębów i uśmiechu. Łączy w sobie nowoczesne technologie i materiały, aby osiągnąć naturalny, piękny efekt. W Bas Clinic oferujemy szeroki zakres zabiegów estetycznych dostosowanych do indywidualnych potrzeb każdego pacjenta.</p>' },
  { title: 'Dla kogo jest stomatologia estetyczna?', content: '<p>Zabiegi estetyczne są przeznaczone dla osób, które chcą poprawić wygląd swoich zębów - ich kolor, kształt, ustawienie czy proporcje. Niezależnie od tego, czy chodzi o drobną korektę, czy kompleksową metamorfozę uśmiechu, nasi specjaliści dobiorą optymalne rozwiązanie.</p>' },
  { title: 'Jak przebiega konsultacja?', content: '<p>Podczas pierwszej wizyty stomatolog przeprowadza szczegółowy wywiad i badanie jamy ustnej. Na podstawie analizy estetycznej oraz oczekiwań pacjenta przygotowywany jest indywidualny plan leczenia z wizualizacją efektu końcowego.</p>' },
];

const CHILD_SERVICES = [
  { name: 'Wybielanie zębów', description: 'Profesjonalne wybielanie zębów w gabinecie i metodą nakładkową.', href: '/stomatologia-estetyczna/wybielanie-zebow/' },
  { name: 'Odbudowa zębów', description: 'Estetyczna odbudowa zębów kompozytem i materiałami ceramicznymi.', href: '/stomatologia-estetyczna/odbudowa-zebow/' },
];

export default function StomatologiaEstetycznaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Stomatologia estetyczna Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Oferujemy kompleksowe zabiegi estetyczne, które pozwolą Ci cieszyć się pięknym i zdrowym uśmiechem. Nowoczesne metody, naturalne efekty."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      childServices={CHILD_SERVICES}
      slug="stomatologia-estetyczna"
    />
  );
}
