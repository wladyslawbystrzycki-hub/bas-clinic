import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Mezoterapia igłowa Wrocław - Medycyna estetyczna',
  description: 'Mezoterapia igłowa - odżywianie i regeneracja skóry metodą iniekcyjną. Zabiegi na twarz, szyję i dekolt. Bas Clinic Wrocław.',
  path: '/mezoterapia-iglowa/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Mezoterapia igłowa' },
];

const FAQ = [
  { question: 'Na czym polega mezoterapia igłowa?', answer: 'Mezoterapia igłowa to zabieg polegający na serii mikrowstrzyknięć koktajli witaminowych, kwasu hialuronowego i aminokwasów bezpośrednio w skórę. Substancje aktywne dostarczane są tam, gdzie są najbardziej potrzebne.' },
  { question: 'Jak często należy powtarzać mezoterapię?', answer: 'Zalecana seria to 4-6 zabiegów wykonywanych co 2-3 tygodnie. Po zakończeniu serii wskazane są zabiegi podtrzymujące raz na 1-3 miesiące w zależności od stanu skóry.' },
  { question: 'Czy zabieg jest bolesny?', answer: 'Przed zabiegiem na skórę nakłada się krem znieczulający, co minimalizuje dyskomfort. Większość pacjentów opisuje odczucia jako delikatne ukłuwanie. Po zabiegu może wystąpić krótkotrwałe zaczerwienienie.' },
];

const EXPERT_INFO = [
  { title: 'Czym jest mezoterapia igłowa?', content: '<p>Mezoterapia igłowa to zabieg polegający na iniekcji koktajli odżywczych bezpośrednio w skórę właściwą. Preparaty stosowane w mezoterapii mogą zawierać kwas hialuronowy, witaminy, aminokwasy, peptydy i inne substancje aktywne, które odżywiają skórę od wewnątrz, stymulują produkcję kolagenu i poprawiają mikrokrążenie.</p>' },
  { title: 'Przebieg zabiegu', content: '<p>Lekarz oczyszcza skórę i aplikuje krem znieczulający na ok. 30 minut przed zabiegiem. Następnie przy użyciu cienkiej igły wykonuje serię mikrowstrzyknięć wybranego preparatu w skórę właściwą. Zabieg obejmuje twarz, szyję lub dekolt i trwa kilkadziesiąt minut. Po zabiegu możliwa niewielka opuchlizna i ślady po nakłuciach, które znikają w ciągu kilku dni.</p>' },
  { title: 'Wskazania do mezoterapii', content: '<p>Mezoterapia igłowa jest wskazana przy: zmarszczkach i bruzdach, suchej i odwodnionej skórze, ścieńczeniu i zwiotczeniu skóry, bliznach potrądzikowych, rozstępach, a także łysieniu i wypadaniu włosów (mezoterapia skóry głowy). Przeciwwskazania obejmują ciążę i karmienie piersią, skłonność do bliznowacenia, aktywne infekcje skórne oraz choroby autoimmunologiczne i nowotworowe.</p>' },
];

export default function MezoterapiaIglowaPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Mezoterapia igłowa Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Odżywianie i regeneracja skóry metodą iniekcyjną. Koktajle witaminowe dostarczane bezpośrednio w skórę twarzy, szyi i dekoltu."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="mezoterapia-iglowa"
    />
  );
}
