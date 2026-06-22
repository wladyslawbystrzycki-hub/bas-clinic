import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Higienizacja Wrocław - Profesjonalne czyszczenie zębów',
  description: 'Profesjonalna higienizacja jamy ustnej we Wrocławiu. Scaling, piaskowanie, polerowanie i fluoryzacja. Zadbaj o zdrowie zębów w Bas Clinic.',
  path: '/higienizacja/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Higienizacja' },
];

const FAQ = [
  { question: 'Jak często należy wykonywać higienizację?', answer: 'Zalecamy profesjonalną higienizację co 6 miesięcy. Pacjenci z chorobą przyzębia, aparatami ortodontycznymi lub implantami powinni korzystać z zabiegów co 3-4 miesiące.' },
  { question: 'Czy higienizacja jest bolesna?', answer: 'Zabieg jest zazwyczaj bezbolesny. Pacjenci z wrażliwymi zębami lub stanem zapalnym dziąseł mogą odczuwać lekki dyskomfort. W takim przypadku możliwe jest zastosowanie znieczulenia miejscowego.' },
  { question: 'Co obejmuje profesjonalna higienizacja?', answer: 'Pełna higienizacja obejmuje usuwanie kamienia nazębnego (scaling ultradźwiękowy), piaskowanie nalotu i przebarwień (metoda Air-Flow), polerowanie powierzchni zębów oraz fluoryzację wzmacniającą szkliwo.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest profesjonalna higienizacja?', content: '<p>Profesjonalna higienizacja jamy ustnej to zabieg profilaktyczny polegający na dokładnym oczyszczeniu zębów z kamienia nazębnego, nalotu i przebarwień. Jest to podstawa zdrowych zębów i dziąseł, a także skuteczna profilaktyka chorób przyzębia i próchnicy.</p>' },
  { title: 'Jak przebiega zabieg higienizacji?', content: '<p>Zabieg rozpoczyna się od scalingu ultradźwiękowego, który usuwa kamień nazębny. Następnie wykonywane jest piaskowanie metodą Air-Flow, które eliminuje nalot i powierzchniowe przebarwienia. Kolejnym etapem jest polerowanie zębów pastą profilaktyczną. Zabieg kończy fluoryzacja, która wzmacnia szkliwo i chroni przed próchnicą.</p>' },
  { title: 'Dlaczego higienizacja jest ważna?', content: '<p>Regularna higienizacja zapobiega rozwojowi próchnicy i chorób przyzębia. Kamień nazębny, którego nie da się usunąć domowymi metodami, jest główną przyczyną stanów zapalnych dziąseł. Zaniedbanie higieny może prowadzić do choroby przyzębia i utraty zębów.</p>' },
];

export default function HigienizacjaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Higienizacja Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Profesjonalna higienizacja jamy ustnej w Bas Clinic. Scaling, piaskowanie Air-Flow, polerowanie i fluoryzacja - kompleksowa ochrona Twoich zębów."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="higienizacja"
    />
  );
}
