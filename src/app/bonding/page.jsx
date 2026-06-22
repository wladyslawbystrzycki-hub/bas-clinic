import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Bonding zębowy Wrocław - Szybka korekta estetyczna zębów',
  description: 'Bonding zębowy we Wrocławiu. Szybka i nieinwazyjna korekta estetyczna zębów kompozytem. Naprawa odprysków, szpar i drobnych wad w Bas Clinic.',
  path: '/bonding/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Bonding' },
];

const FAQ = [
  { question: 'Czym jest bonding zębowy?', answer: 'Bonding to zabieg estetyczny polegający na nakładaniu żywicy kompozytowej na powierzchnię zęba w celu poprawy jego wyglądu. Pozwala na naprawę odprysków, zamknięcie szpar między zębami, zmianę kształtu lub maskowanie przebarwień.' },
  { question: 'Ile trwa zabieg bondingu?', answer: 'Bonding jednego zęba trwa zazwyczaj 30-60 minut. Zabieg jest wykonywany w jednej wizycie, bez konieczności znieczulenia w większości przypadków. To jedna z najszybszych metod poprawy estetyki uśmiechu.' },
  { question: 'Jak długo utrzymuje się bonding?', answer: 'Bonding utrzymuje się zazwyczaj 5-7 lat, po czym może wymagać odświeżenia lub wymiany. Trwałość zależy od lokalizacji, nawyków żywieniowych i higieny jamy ustnej pacjenta.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest bonding zębowy?', content: '<p>Bonding zębowy to zabieg z zakresu stomatologii estetycznej, podczas którego stomatolog nakłada na ząb specjalną żywicę kompozytową, modelując ją w pożądany kształt. Jest to metoda nieinwazyjna, która nie wymaga szlifowania zębów. Idealnie nadaje się do drobnych korekt estetycznych.</p>' },
  { title: 'Jak przebiega zabieg bondingu?', content: '<p>Stomatolog dobiera kolor kompozytu do naturalnych zębów pacjenta. Następnie powierzchnia zęba jest delikatnie wytrawiana i pokrywana środkiem łączącym. Kompozyt jest nakładany warstwowo, modelowany i utwardzany światłem UV. Na koniec odbudowa jest kształtowana i polerowana do uzyskania naturalnego wyglądu.</p>' },
  { title: 'Bonding a licówki - co wybrać?', content: '<p>Bonding jest idealny do drobnych korekt i kosztuje mniej niż licówki. Jest też mniej inwazyjny, bo nie wymaga szlifowania zębów. Licówki są lepszym rozwiązaniem przy większych zmianach estetycznych, oferując wyższą trwałość i odporność na przebarwienia.</p>' },
];

export default function BondingPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Bonding Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Szybka i nieinwazyjna korekta estetyczna zębów metodą bondingu. Naprawiamy odpryski, zamykamy szpary i poprawiamy kształt zębów w jednej wizycie."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="bonding"
    />
  );
}
