import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Modelowanie ust Wrocław - Medycyna estetyczna',
  description: 'Modelowanie ust kwasem hialuronowym - powiększanie i korekta kształtu ust. Bas Clinic Wrocław.',
  path: '/modelowanie-ust/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Modelowanie ust' },
];

const FAQ = [
  { question: 'Jak przygotować się do zabiegu modelowania ust?', answer: 'Kilka dni przed zabiegiem należy przestać przyjmować leki przeciwzapalne, ograniczyć palenie oraz alkohol, unikać solarium i sauny. Tuż przed zabiegiem należy pozbyć się makijażu. Na konsultacji lekarz ustali optymalną objętość preparatu.' },
  { question: 'Jak przebiega zabieg modelowania ust?', answer: 'Procedura obejmuje demakijaż, dezynfekcję i znieczulenie (ok. 15 minut). Następnie lekarz wstrzykuje kwas hialuronowy w zaplanowane punkty ust, po czym wykonuje masaż modelujący i aplikuje krem ochronny. Cały zabieg trwa około 30 minut.' },
  { question: 'Jakie są zalecenia po zabiegu?', answer: 'Usta mogą być opuchnięte przez kilka dni - to normalna reakcja. Zaleca się schładzanie, delikatny masaż od drugiego dnia, unikanie gorących napojów i nadmiernej ekspresji mimicznej przez pierwszy tydzień. Efekt utrzymuje się od 8 do 12 miesięcy.' },
  { question: 'Czy powiększanie ust wygląda naturalnie?', answer: 'Tak, jedna cząsteczka kwasu hialuronowego może związać nawet 250 cząsteczek wody, co daje naturalny, pełny efekt. Zabieg pozwala ujędrniać, nawilżać, zmieniać kształt ust, wyrównywać asymetrię oraz usuwać zmarszczki wokół ust i poprawiać koloryt czerwieni wargowej.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest modelowanie ust?', content: '<p>Modelowanie ust to zabieg medycyny estetycznej polegający na wstrzykiwaniu kwasu hialuronowego w wargi w celu zwiększenia ich objętości, poprawy kształtu, wyrazistości obrysu oraz nawilżenia. Zabieg pozwala na powiększenie górnej lub dolnej wargi, wyrównanie asymetrii, zaakcentowanie łuku kupidyna oraz wygładzenie zmarszczek wokół ust (tzw. kod kreskowy).</p>' },
  { title: 'Jak przebiega zabieg?', content: '<p>Po konsultacji i ustaleniu oczekiwań pacjenta lekarz stosuje znieczulenie miejscowe. Następnie przy użyciu cienkiej igły lub kaniuli precyzyjnie wstrzykuje kwas hialuronowy w zaplanowane punkty ust. Zabieg trwa 20-30 minut. Po zabiegu usta mogą być lekko opuchnięte przez 1-3 dni, co jest normalną reakcją.</p>' },
];

export default function ModelowanieUstPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Modelowanie ust Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Powiększanie i modelowanie ust kwasem hialuronowym. Naturalne, pełne usta dopasowane do proporcji Twojej twarzy."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="modelowanie-ust"
    />
  );
}
