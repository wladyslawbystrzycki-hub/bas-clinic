import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Stomatologia dziecięca Wrocław - Dentysta dla dzieci',
  description: 'Stomatologia dziecięca we Wrocławiu. Przyjazna atmosfera, bezbolesne leczenie zębów mlecznych i stałych u dzieci. Bas Clinic - dentysta dla dzieci.',
  path: '/stomatologia-dziecieca/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Stomatologia dziecięca' },
];

const FAQ = [
  { question: 'Kiedy zabrać dziecko na pierwszą wizytę u dentysty?', answer: 'Pierwsza wizyta adaptacyjna powinna odbyć się około 1. roku życia dziecka lub po pojawieniu się pierwszych zębów mlecznych. Wczesna wizyta pozwala na kontrolę rozwoju zębów i przyzwyczajenie dziecka do gabinetu stomatologicznego.' },
  { question: 'Czy warto leczyć zęby mleczne?', answer: 'Tak, leczenie zębów mlecznych jest bardzo ważne. Nieleczona próchnica może prowadzić do bólu, infekcji i przedwczesnej utraty zębów mlecznych, co zaburza prawidłowy rozwój zębów stałych i zgryzu.' },
  { question: 'Jak przygotować dziecko do wizyty u dentysty?', answer: 'Warto rozmawiać z dzieckiem pozytywnie o wizycie, unikając słów takich jak ból czy zastrzyk. Dobry stomatolog dziecięcy potrafi nawiązać kontakt z małym pacjentem i przeprowadzić leczenie w przyjaznej atmosferze.' },
];

const EXPERT_INFO = [
  { title: 'Opieka stomatologiczna dla dzieci', content: '<p>Stomatologia dziecięca obejmuje opiekę profilaktyczną, leczenie ubytków i próchnicy, usuwanie zębów mlecznych oraz leczenie wad uzębienia. Priorytetowo traktujemy budowanie pozytywnych skojarzeń z opieką dentystyczną poprzez metody przyjazne dzieciom.</p>' },
  { title: 'Wizyty adaptacyjne', content: '<p>Organizujemy wizyty adaptacyjne, aby oswoić dzieci ze środowiskiem gabinetu i zmniejszyć lęk. Specjalista pedodonta rozumie, że wczesna edukacja stomatologiczna kształtuje zdrowe nawyki na całe życie. Wczesne wykrywanie próchnicy jest kluczowe, gdyż choroby zębów mlecznych mogą wpłynąć na zdrowie zębów stałych.</p>' },
  { title: 'Zdrowe nawyki od najmłodszych lat', content: '<p>Nawyki mycia zębów i diety powinny być uczone przez zabawę, a nie przymus. Zalecane są produkty zawierające fluor, wapń, fosfor i magnez, przy jednoczesnym ograniczeniu słodkich pokarmów i napojów przyczyniających się do próchnicy u młodych pacjentów.</p>' },
];

export default function StomatologiaDzieciecaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Stomatologia dziecięca Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Stomatologia dziecięca w Bas Clinic. Przyjazna atmosfera, doświadczony zespół i bezbolesne leczenie. Dbamy o zdrowe zęby Twojego dziecka."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="stomatologia-dziecieca"
    />
  );
}
