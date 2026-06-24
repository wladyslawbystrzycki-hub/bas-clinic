import { generatePageMetadata } from '@/lib/metadata';
import ServicePageTemplate from '../components/ServicePageTemplate';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Leczenie uzależnień Wrocław - alkoholizm, detoks, terapia',
  description:
    'Leczenie uzależnień we Wrocławiu w Bas Clinic — detoksykacja alkoholowa, farmakoterapia, terapia indywidualna i wsparcie dla rodzin pod opieką lek. med. Bogdana Basa.',
  path: '/leczenie-uzaleznien/',
});

const BREADCRUMBS = [{ label: 'Leczenie uzależnień' }];

const EXPERT_INFO = [
  {
    title: 'Uzależnienie to choroba, a nie wybór',
    content:
      '<p>Uzależnienie traktujemy jako chorobę, a nie kwestię wyboru. Łączymy wiedzę medyczną z empatią, tworząc bezpieczną przestrzeń opartą na zaufaniu, zrozumieniu i braku oceniania — bo za każdą diagnozą stoi człowiek ze swoimi lękami, nadzieją i pragnieniem zmiany.</p><p>Skuteczne leczenie wymaga indywidualnego, kompleksowego planu, który obejmuje zarówno łagodzenie objawów, jak i pracę nad przyczynami choroby.</p>',
  },
  {
    title: 'Pierwsza wizyta i plan leczenia',
    content:
      '<p>Pierwsza wizyta trwa zwykle około 60 minut. Zbieramy szczegółowy wywiad medyczny, oceniamy stan zdrowia i wspólnie ustalamy indywidualny plan leczenia dopasowany do potrzeb Pacjenta. Rozmowa odbywa się w atmosferze pełnego zaufania i bez oceniania — na wizytę można przyjść samemu lub z osobą bliską.</p>',
  },
  {
    title: 'Detoksykacja alkoholowa',
    content:
      '<p>Prowadzimy bezpieczne i kontrolowane detoksykacje alkoholowe pod nadzorem personelu medycznego. Celem detoksu jest nie tylko przerwanie ciągu alkoholowego, ale przede wszystkim stabilizacja organizmu i przygotowanie Pacjenta do dalszego procesu terapeutycznego.</p><p>Plan postępowania ustalamy indywidualnie, uwzględniając stan zdrowia, stopień uzależnienia oraz choroby współistniejące. Samodzielne, gwałtowne odstawienie alkoholu po długotrwałym piciu bywa niebezpieczne — dlatego detoksykację warto przeprowadzić pod opieką lekarza.</p>',
  },
  {
    title: 'Farmakoterapia uzależnień',
    content:
      '<p>Stosujemy nowoczesne i sprawdzone metody farmakologiczne, które wspierają proces wychodzenia z uzależnienia — pomagają redukować głód alkoholowy, łagodzić objawy abstynencyjne i stabilizować nastrój. Dobór leków zawsze poprzedzamy dokładną diagnostyką i analizą potrzeb Pacjenta.</p><p>Jednym z dostępnych narzędzi jest również wszywka alkoholowa (Esperal), wspierająca utrzymanie abstynencji. Farmakoterapia pełni jednak rolę wsparcia — sama nie rozwiązuje problemu uzależnienia, dlatego łączymy ją z oddziaływaniami terapeutycznymi.</p>',
  },
  {
    title: 'Terapia indywidualna',
    content:
      '<p>W pracy terapeutycznej koncentrujemy się na zidentyfikowaniu rzeczywistych przyczyn uzależnienia, a nie wyłącznie na jego objawach. Terapia indywidualna pomaga zrozumieć mechanizmy choroby, przepracować trudne doświadczenia oraz stopniowo odbudować poczucie sprawczości i odpowiedzialności za własne życie.</p><p>Każdy proces dostosowujemy do tempa i możliwości Pacjenta — w formie stacjonarnej lub online.</p>',
  },
  {
    title: 'Wsparcie dla rodzin',
    content:
      '<p>Uzależnienie dotyka nie tylko Pacjenta, ale również jego najbliższych. Bliskim oferujemy psychoedukację, wsparcie emocjonalne oraz naukę zdrowej komunikacji i stawiania granic — co sprzyja procesowi leczenia, odbudowie relacji i przeciwdziałaniu współuzależnieniu.</p>',
  },
];

const FAQ = [
  {
    question: 'Jak wygląda pierwsza wizyta?',
    answer:
      'Pierwsza wizyta trwa około 60 minut. Przeprowadzamy szczegółowy wywiad medyczny, oceniamy stan zdrowia i omawiamy możliwości leczenia. Rozmowa odbywa się w atmosferze pełnego zaufania i bez oceniania — możesz przyjść sam lub z osobą bliską.',
  },
  {
    question: 'Czy detoksykacja alkoholowa jest bezpieczna?',
    answer:
      'Detoksykacja prowadzona pod nadzorem lekarza jest bezpieczna — stosujemy sprawdzone protokoły medyczne i monitorujemy parametry życiowe, a leczenie farmakologiczne łagodzi objawy odstawienne. Samodzielne odstawianie alkoholu po długotrwałym piciu bywa natomiast niebezpieczne.',
  },
  {
    question: 'Jak długo trwa leczenie uzależnienia?',
    answer:
      'Czas leczenia jest bardzo indywidualny. Sama detoksykacja trwa zwykle od kilku do kilkunastu dni, jednak pełna terapia i budowanie trzeźwości to proces długoterminowy. Uzależnienie jest chorobą przewlekłą, która wymaga stałej uwagi.',
  },
  {
    question: 'Czy wizyty są poufne?',
    answer:
      'Tak. Wszystkie wizyty objęte są tajemnicą lekarską. Nie przekazujemy informacji o Pacjentach osobom trzecim bez ich pisemnej zgody — dbamy o pełną dyskrecję na każdym etapie leczenia.',
  },
  {
    question: 'Ile kosztuje leczenie?',
    answer: `Gabinet jest prywatny. Koszt konsultacji i leczenia ustalamy indywidualnie i przedstawiamy przed jego rozpoczęciem — bez ukrytych opłat. Szczegóły uzyskasz telefonicznie pod ${CLINIC.phone}.`,
  },
];

export default function LeczenieUzaleznienPage() {
  return (
    <ServicePageTemplate
      breadcrumbs={BREADCRUMBS}
      heroTitle="Leczenie uzależnień Wrocław"
      heroSubtitle="Leczenie uzależnień"
      heroDescription="Uzależnienie to choroba, a nie wybór. W Bas Clinic pomagamy z niej wyjść kompleksowo — łącząc opiekę lekarską, farmakoterapię i psychoterapię, dyskretnie i bez oceniania."
      expertInfo={EXPERT_INFO}
      faq={FAQ}
      slug="leczenie-uzaleznien"
      schemaType="MedicalTherapy"
      testimonials={[]}
    />
  );
}
