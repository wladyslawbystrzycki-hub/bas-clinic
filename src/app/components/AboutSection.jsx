import Link from 'next/link';
import Image from 'next/image';

// Fundamenty każdej terapii — realne (z treści klienta), zamiast zmyślonej
// „odznaki 215 lekarzy / 12k opinii" z referencji (zakaz: UOKiK/Omnibus +
// reklama medyczna).
const FUNDAMENTALS = ['Naturalne efekty', 'Bezpieczeństwo', 'Indywidualne podejście'];

// Realne foto Bas Clinic (ton: spokojne, naturalne piękno + troska o siebie).
const IMG_MAIN = '/uploads/services/o-nas-naturalne-piekno-bas-clinic-wroclaw.webp';
const IMG_SIDE = '/uploads/services/o-nas-troska-bas-clinic-wroclaw.webp';

/**
 * „O nas" — edytorialny blok image + text tuż pod hero, w układzie z referencji
 * (zdjęcie po lewej + dekoracyjny łuk + nakładka, treść po prawej), przełożonym
 * na markę Bas Clinic (grafit, Poppins, chłodny relief). Server Component.
 *
 * Świadome różnice względem „Kompendium" (KnowledgeSection, niżej na stronie):
 * BEZ obrotowego pierścienia i BEZ ponumerowanych filarów — tu manifest + chipy
 * fundamentów. Mobile-first: na telefonie zdjęcie na górze, potem nagłówek i treść.
 */
export default function AboutSection() {
  return (
    <section id="o-nas" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ------------- Kompozycja zdjęć (desktop: lewo / mobile: góra) ------------- */}
          <div className="relative">
            {/* miękka poświata (głębia) */}
            <div
              aria-hidden
              className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary-100/60 via-cream to-transparent blur-2xl"
            />

            {/* zdjęcie główne */}
            <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 sm:ml-auto sm:w-[86%]">
              <Image
                src={IMG_MAIN}
                alt="Naturalne piękno i harmonia — Pacjentka Bas Clinic"
                fill
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 86vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-primary-950/25 to-transparent"
              />
            </figure>

            {/* zdjęcie poboczne — nakładka (kolaż), tylko od sm */}
            <div className="absolute bottom-7 left-0 hidden aspect-square w-2/5 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:block">
              <Image
                src={IMG_SIDE}
                alt=""
                fill
                sizes="(min-width: 1024px) 15vw, 34vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* ------------------- Treść (desktop: prawo / mobile: dół) ------------------- */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">
              O nas
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-[1.14] tracking-tight text-primary-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              Prawdziwe piękno jest efektem zdrowia i harmonii
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-700">
              Wierzymy, że prawdziwe piękno nie polega na zmianie rysów twarzy
              czy pogoni za trendami. Jest efektem zdrowia, harmonii i świadomej
              troski o siebie. Dlatego stworzyliśmy miejsce, w którym medycyna
              estetyczna, stomatologia, diagnostyka oraz medycyna regeneracyjna
              wzajemnie się uzupełniają, pozwalając spojrzeć na pacjenta w sposób
              kompleksowy.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-700">
              Nasze zabiegi skierowane są ku świadomej, subtelnej poprawie
              wizerunku — takiej, która pozostaje niewidoczna dla innych, a
              zostaje odczuwalna przede wszystkim przez Ciebie. Naturalne efekty,
              bezpieczeństwo i indywidualne podejście są fundamentem każdej
              stosowanej przez nas terapii.
            </p>

            {/* Fundamenty — chipy (realne, zamiast zmyślonej social-proof) */}
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {FUNDAMENTALS.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-50 px-3.5 py-2 text-sm font-medium text-primary-800 ring-1 ring-primary-100"
                >
                  <CheckIcon className="h-4 w-4 shrink-0 text-primary-600" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/o-nas/"
              className="group mt-9 inline-flex items-center gap-3 rounded-lg bg-primary-700 py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-800"
            >
              Poznaj nas bliżej
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Ikony / dekoracje --------------------------------- */

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="m5 10.5 3 3 7-7.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0-6-6m6 6-6 6" />
    </svg>
  );
}
