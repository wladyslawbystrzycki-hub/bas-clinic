/**
 * Opinie Pacjentów — pogrupowane tematycznie, aby na każdej stronie pokazać treść
 * RELEWANTNĄ z usługą (stomatologia / medycyna estetyczna / USG / wlewy), a na
 * stronie głównej zestaw ogólny.
 *
 * ⚠️ UWAGA — PLACEHOLDER: poniższe wypowiedzi są PRZYKŁADOWE i NIEPRAWDZIWE.
 * Przed publikacją zastąp je realnymi opiniami uzyskanymi za zgodą Pacjentów.
 * Prezentowanie zmyślonych opinii to ryzyko prawne (UOKiK / dyrektywa Omnibus —
 * opinie muszą pochodzić od osób, które faktycznie skorzystały z usługi), a reklama
 * usług medycznych bywa dodatkowo ograniczona. Najlepsze źródło realnych opinii to
 * profil Google Kliniki — patrz `CLINIC.reviews.url` w `src/config/clinic.js`.
 *
 * Format wpisu: { quote, author, role }. `author` w konwencji „Imię N." (jak w
 * publicznych opiniach), `role` = krótki kontekst usługi.
 */

const general = [
  {
    quote:
      'Od pierwszej wizyty czułam się zaopiekowana. Wszystko zostało spokojnie i dokładnie wytłumaczone — bez pośpiechu i bez stresu.',
    author: 'Anna K.',
    role: 'Pacjentka Bas Clinic',
  },
  {
    quote:
      'Profesjonalne podejście na każdym etapie, od rejestracji po samą wizytę. Widać, że zespół naprawdę dba o komfort Pacjenta.',
    author: 'Marcin W.',
    role: 'Pacjent Bas Clinic',
  },
  {
    quote:
      'Miła atmosfera i pełne zaangażowanie. Czułam, że jestem w dobrych rękach i mogę zadać każde pytanie.',
    author: 'Katarzyna L.',
    role: 'Pacjentka Bas Clinic',
  },
];

const stomatologia = [
  {
    quote:
      'Od lat bałam się dentysty. Tutaj pierwszy raz przeszłam leczenie spokojnie — z wyjaśnieniem każdego kroku i pełnym wyczuciem.',
    author: 'Joanna M.',
    role: 'Pacjentka — stomatologia',
  },
  {
    quote:
      'Cały plan leczenia był jasno przedstawiony, bez niespodzianek. Doceniam rzetelność i indywidualne podejście.',
    author: 'Piotr S.',
    role: 'Pacjent — implanty',
  },
  {
    quote:
      'Wreszcie uśmiecham się bez skrępowania. Naturalny efekt i ogromna cierpliwość całego zespołu.',
    author: 'Magdalena R.',
    role: 'Pacjentka — licówki',
  },
];

const estetyka = [
  {
    quote:
      'Efekt jest subtelny i naturalny — dokładnie taki, na jakim mi zależało. Pani doktor doradziła rozsądnie, bez naciągania na zbędne zabiegi.',
    author: 'Agnieszka P.',
    role: 'Pacjentka — medycyna estetyczna',
  },
  {
    quote:
      'Komfortowy przebieg zabiegu i pełne wyczucie estetyki. Czuję się zadbana i wypoczęta.',
    author: 'Karolina D.',
    role: 'Pacjentka — medycyna estetyczna',
  },
  {
    quote:
      'Indywidualne podejście i szczera rozmowa o moich oczekiwaniach. Polecam każdemu, kto ceni naturalne efekty.',
    author: 'Ewa N.',
    role: 'Pacjentka — medycyna estetyczna',
  },
];

const usg = [
  {
    quote:
      'Badanie dokładne, a wynik spokojnie omówiony od razu na miejscu — jasno i zrozumiale.',
    author: 'Tomasz B.',
    role: 'Pacjent — diagnostyka USG',
  },
  {
    quote:
      'Krótki termin, sprawne badanie i rzetelny opis. Dokładnie tego oczekiwałem od diagnostyki.',
    author: 'Krzysztof Z.',
    role: 'Pacjent — USG',
  },
  {
    quote:
      'Bez pośpiechu, z dbałością o komfort i cierpliwością na wszystkie pytania.',
    author: 'Beata K.',
    role: 'Pacjentka — USG',
  },
];

const wlewy = [
  {
    quote:
      'Skład wlewu dobrany indywidualnie po konsultacji. Po serii czuję wyraźny przypływ energii.',
    author: 'Monika T.',
    role: 'Pacjentka — wlewy witaminowe',
  },
  {
    quote:
      'Profesjonalnie i bezpiecznie, w komfortowych warunkach. Miła, spokojna atmosfera.',
    author: 'Robert J.',
    role: 'Pacjent — terapia infuzyjna',
  },
  {
    quote:
      'Doceniam rzetelną konsultację i jasne wyjaśnienie, czego się spodziewać. Polecam.',
    author: 'Aleksandra W.',
    role: 'Pacjentka — wlewy witaminowe',
  },
];

export const TESTIMONIALS = { general, stomatologia, estetyka, usg, wlewy };

/**
 * Dobiera zestaw opinii relewantny z kategorią usługi. Argument to zwykle
 * `heroSubtitle` ze strony usługi (np. „Medycyna estetyczna", „Ultrasonografia",
 * „Stomatologia"). Nierozpoznana kategoria → zestaw ogólny.
 */
export function getTestimonials(category = '') {
  const c = (category || '').toLowerCase();
  if (c.includes('ultrasonograf') || c.includes('usg')) return TESTIMONIALS.usg;
  if (c.includes('infuz') || c.includes('wlew')) return TESTIMONIALS.wlewy;
  // „Stomatologia estetyczna" celowo sprawdzane przed „estetyczn" → trafia tu.
  if (
    c.includes('stomatolog') ||
    c.includes('ortodonc') ||
    c.includes('chirurg') ||
    c.includes('protetyk')
  )
    return TESTIMONIALS.stomatologia;
  if (c.includes('estetyczn') || c.includes('estetyk')) return TESTIMONIALS.estetyka;
  return TESTIMONIALS.general;
}
