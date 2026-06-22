import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Implanty zębowe Wrocław - Implantologia w Bas Clinic',
  description: 'Implanty zębowe we Wrocławiu. Wszczepienie implantów najwyższej jakości w Bas Clinic. Trwałe i estetyczne uzupełnienie brakujących zębów.',
  path: '/implanty-zebowe/',
});

const BREADCRUMBS = [
  { label: 'Stomatologia', href: '/stomatologia/' },
  { label: 'Implanty zębowe' },
];

const FAQ = [
  { question: 'Czy zabieg wszczepienia implantu jest bolesny?', answer: 'Zabieg wszczepienia implantu wykonywany jest w znieczuleniu miejscowym, dzięki czemu jest całkowicie bezbolesny. Po zabiegu może wystąpić lekki obrzęk i dyskomfort, który ustępuje w ciągu kilku dni.' },
  { question: 'Jak długo trwa gojenie się implantu?', answer: 'Proces osteointegracji, czyli zrastania się implantu z kością, trwa zazwyczaj 3-6 miesięcy. W tym czasie implant jest chroniony koroną tymczasową. Po pełnym zagojeniu mocowana jest korona ostateczna.' },
  { question: 'Jaka jest trwałość implantów zębowych?', answer: 'Implanty zębowe przy prawidłowej higienie i regularnych kontrolach mogą służyć nawet przez całe życie. Korona na implancie wymaga wymiany średnio co 10-15 lat.' },
];

const EXPERT_INFO = [
  { title: 'Czym są implanty zębowe?', content: '<p>Implantami nazywane są odpowiedniki korzeni zęba wszczepiane w miejsce wyrwanych zębów. Łączą się z kością i służą jako filary do założenia korony. Implantologia umożliwia uzupełnienie jednego lub kilku braków zębowych, stanowiąc najlepsze rozwiązanie, ponieważ implant spełnia wszystkie funkcje, odtwarzając naturalny ząb.</p>' },
  { title: 'Rodzaje implantów', content: '<p>Implanty dzielą się na dwa główne typy materiałowe: tytanowe i cyrkonowe. Wersja tytanowa charakteryzuje się wysoką odpornością na uszkodzenia, trwałością i stabilnością, jednak może wykazywać metaliczny kolor. Implanty cyrkonowe to nowsze rozwiązanie bardziej zbliżone kolorystycznie do naturalnej kości.</p>' },
  { title: 'Przebieg leczenia implantologicznego', content: '<p>Proces leczenia obejmuje kilka etapów: plan diagnostyczny z tomografią, sam zabieg implantacji, usunięcie szwów (7-10 dni), założenie śruby gojącej (3-6 miesięcy) oraz montaż ostatecznej pracy protetycznej (2-3 miesiące po śrubie).</p>' },
];

export default function ImplantyZebowePage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Implanty zębowe Wrocław"
      heroSubtitle="Stomatologia"
      heroDescription="Nowoczesna implantologia w Bas Clinic. Wszczepienie implantów zębowych najwyższej jakości - trwałe i estetyczne rozwiązanie braków zębowych."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="implanty-zebowe"
    />
  );
}
