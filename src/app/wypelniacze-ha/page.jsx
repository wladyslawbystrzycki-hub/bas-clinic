import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Wypełniacze na bazie kwasu hialuronowego Wrocław - Medycyna estetyczna',
  description: 'Wypełniacze na bazie kwasu hialuronowego - modelowanie rysów twarzy i przywracanie objętości. Bas Clinic Wrocław.',
  path: '/wypelniacze-ha/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Wypełniacze na bazie kwasu hialuronowego' },
];

const FAQ = [
  { question: 'Jak długo utrzymuje się efekt wypełniania kwasem hialuronowym?', answer: 'W zależności od rodzaju preparatu i obszaru zabiegu, efekt utrzymuje się od 6 do 18 miesięcy. Preparaty o większym sieciowaniu stosowane do modelowania trwają dłużej niż te przeznaczone do delikatnego wypełnienia.' },
  { question: 'Czy kwas hialuronowy jest bezpieczny?', answer: 'Tak, kwas hialuronowy jest substancją naturalnie występującą w organizmie człowieka. Preparaty stosowane w medycynie estetycznej są biokompatybilne i biodegradowalne. W razie potrzeby efekt można odwrócić za pomocą enzymu hialuronidazy.' },
  { question: 'Jakie obszary można wypełnić kwasem hialuronowym?', answer: 'Kwas hialuronowy można stosować do modelowania policzków, brody, linii żuchwy, ust, wypełniania bruzd nosowo-wargowych, doliny łez, zmarszczek marionetki oraz korygowania asymetrii twarzy.' },
];

const EXPERT_INFO = [
  { title: 'Czym są wypełniacze na bazie kwasu hialuronowego?', content: '<p>Kwas hialuronowy to substancja naturalnie występująca w ludzkim organizmie, głównie w skórze, tkance łącznej i płynie stawowym. Jego główną funkcją jest wiązanie wody - jedna cząsteczka może związać nawet 250 cząsteczek wody, co zapewnia nawilżenie i elastyczność tkanek. W medycynie estetycznej wykorzystujemy usieciowane formy kwasu hialuronowego do modelowania rysów twarzy, przywracania objętości i wypełniania zmarszczek.</p>' },
  { title: 'Zastosowania kwasu hialuronowego', content: '<p>Wypełniacze HA stosujemy do: wypełniania zmarszczek i bruzd (mimiczne, linie marionetki, bruzdy nosowo-wargowe), modelowania i powiększania ust, konturowania twarzy (kości policzkowe, owal twarzy, linia żuchwy), korygowania doliny łez oraz wyrównywania asymetrii. Efekty są widoczne natychmiast po zabiegu - skóra staje się bardziej nawilżona, jędrna i gładka.</p>' },
  { title: 'Przebieg zabiegu i zalecenia', content: '<p>Po konsultacji i analizie proporcji twarzy lekarz aplikuje znieczulenie miejscowe. Następnie przy użyciu cienkich igieł lub kaniul precyzyjnie wstrzykuje preparat w zaplanowane obszary. Zabieg trwa 30-60 minut. Po zabiegu zalecamy unikanie intensywnej aktywności fizycznej, ekspozycji na słońce i wysokich temperatur oraz niemasowanie miejsc wstrzyknięcia. Efekt utrzymuje się od 6 do 12 miesięcy.</p>' },
];

export default function WypelniaczePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Wypełniacze na bazie kwasu hialuronowego Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Modelowanie rysów twarzy i przywracanie objętości z użyciem najwyższej jakości preparatów na bazie kwasu hialuronowego."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="wypelniacze-ha"
    />
  );
}
