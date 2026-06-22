import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';

export const metadata = generatePageMetadata({
  title: 'Redukcja zmarszczek toksyną botulinową Wrocław - Medycyna estetyczna',
  description: 'Redukcja zmarszczek mimicznych toksyną botulinową. Skuteczne wygładzanie zmarszczek na czole, lwiej zmarszczki i kurzych łapek. Bas Clinic Wrocław.',
  path: '/redukcja-zmarszczek-botox/',
});

const BREADCRUMBS = [
  { label: 'Medycyna estetyczna', href: '/medycyna-estetyczna/' },
  { label: 'Redukcja zmarszczek toksyną botulinową' },
];

const FAQ = [
  { question: 'Jak długo utrzymuje się efekt zabiegu toksyną botulinową?', answer: 'Efekt zabiegu utrzymuje się od 4 do 6 miesięcy. Po tym czasie mięśnie stopniowo odzyskują ruchliwość i zabieg można powtórzyć. Regularne stosowanie może wydłużyć czas utrzymywania się efektu.' },
  { question: 'Czy zabieg toksyną botulinową jest bezpieczny?', answer: 'Tak, zabieg wykonywany przez doświadczonego lekarza medycyny estetycznej jest bardzo bezpieczny. Toksyna botulinowa jest stosowana w medycynie od ponad 30 lat i ma udokumentowany profil bezpieczeństwa.' },
  { question: 'Kiedy widać efekty zabiegu?', answer: 'Pierwsze efekty są widoczne po 3-5 dniach od zabiegu. Pełny efekt rozwija się w ciągu 10-14 dni. W tym czasie zmarszczki mimiczne ulegają wygładzeniu, a twarz zyskuje młodszy wygląd.' },
];

const EXPERT_INFO = [
  { title: 'Jak działa toksyna botulinowa?', content: '<p>Podanie toksyny botulinowej w odpowiednie mięśnie twarzy pozwala na wygładzenie zmarszczek mimicznych. Preparat blokuje przewodnictwo nerwowo-mięśniowe, uniemożliwiając uwalnianie acetylocholiny - neuroprzekaźnika odpowiedzialnego za skurcz mięśni. Prowadzi to do czasowego zahamowania skurczu mięśni i wygładzenia zmarszczek na czole, między brwiami (lwia zmarszczka) oraz wokół oczu (kurze łapki).</p>' },
  { title: 'Przebieg zabiegu', content: '<p>Zabieg poprzedza konsultacja, podczas której lekarz analizuje mimikę twarzy pacjenta i planuje punkty iniekcji. Samo wstrzyknięcie trwa około 15-20 minut. Używane są bardzo cienkie igły, dzięki czemu zabieg jest niemal bezbolesny. Po zabiegu pacjent może wrócić do codziennych aktywności.</p>' },
  { title: 'Inne zastosowania toksyny botulinowej', content: '<p>Toksyna botulinowa znajduje zastosowanie nie tylko w redukcji zmarszczek. Stosujemy ją również w leczeniu nadpotliwości (okolica pach), terapii migren oraz leczeniu bruksizmu (zaciskania zębów). Zabieg można stosować profilaktycznie już od około 25-30 roku życia. Przeciwwskazania obejmują ciążę, karmienie piersią, infekcje w miejscu zabiegu oraz niektóre choroby neurologiczne.</p>' },
];

export default function RedukcjaZmarszczekBotoxPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Redukcja zmarszczek toksyną botulinową Wrocław"
      heroSubtitle="Medycyna estetyczna"
      heroDescription="Skuteczne wygładzanie zmarszczek mimicznych na czole, między brwiami i wokół oczu. Naturalny efekt odmłodzenia bez skalpela."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="redukcja-zmarszczek-botox"
    />
  );
}
