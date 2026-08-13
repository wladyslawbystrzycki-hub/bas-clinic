import Link from 'next/link';
import Image from 'next/image';

/**
 * KnowledgeSection — „Kompendium wiedzy".
 *
 * Edytorialny blok wiedzy inspirowany układem z referencji: kompozycja zdjęć po
 * jednej stronie (główne zdjęcie + nakładka + dekoracyjny łuk + obrotowy
 * pierścień z tekstem), a po drugiej nagłówek, opis i ponumerowane „filary"
 * wiedzy. Zamiast zmyślonej liczby lekarzy / liczby opinii z referencji
 * (zakazane — UOKiK/Omnibus + reklama medyczna) prezentujemy realną,
 * edukacyjno-organizacyjną treść.
 *
 * Komponent **serwerowy** — pierścień obraca się czystym CSS (`kompendium-ring-spin`
 * w globals.css, wyłączany przy `prefers-reduced-motion`), więc nie potrzebuje JS.
 * Renderuje WŁASNĄ sekcję (jak CTASection) — nie owijać w <Section>.
 *
 * Używany na każdej podstronie usługi (pod hero, treść per-kategoria z
 * `getKnowledge`) oraz na stronie głównej (niżej, `KNOWLEDGE_HOME`).
 */
export default function KnowledgeSection({
  id = 'kompendium',
  eyebrow = 'Kompendium wiedzy',
  title = 'Świadoma opieka zaczyna się od wiedzy',
  description,
  points = [],
  image = '/uploads/services/kompendium-konsultacja-lekarska-bas-clinic-wroclaw.webp',
  image2 = '/uploads/services/kompendium-gabinet-lekarski-bas-clinic-wroclaw.webp',
  imageAlt = 'Konsultacja lekarska w Bas Clinic we Wrocławiu',
  ctaHref = '/rejestracja/',
  ctaLabel = 'Umów konsultację',
  bg = 'white',
}) {
  const ringPathId = `${id}-ring-path`;
  const ringText = 'KOMPENDIUM WIEDZY · BAS CLINIC · ';

  return (
    <section
      id={id}
      className={`${bg === 'light' ? 'bg-cream' : 'bg-white'} py-16 sm:py-20 lg:py-24`}
    >
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ----------------------- Treść (na desktopie po prawej) ---------------------- */}
          <div className="lg:order-2">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              {title}
            </h2>
            {description && (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
                {description}
              </p>
            )}

            {points.length > 0 && (
              <ul className="mt-8 space-y-5">
                {points.map((point, i) => (
                  <li key={point.title || i} className="flex gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50 font-display text-sm font-semibold tabular-nums text-primary-700 ring-1 ring-primary-100">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-primary-900">
                        {point.title}
                      </h3>
                      {point.text && (
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                          {point.text}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {ctaHref && ctaLabel && (
              <Link
                href={ctaHref}
                className="group mt-9 inline-flex items-center gap-3 rounded-lg bg-primary-700 py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-800"
              >
                {ctaLabel}
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            )}
          </div>

          {/* ----------------- Kompozycja zdjęć (na desktopie po lewej) ----------------- */}
          <div className="relative lg:order-1">
            {/* miękka poświata (głębia) */}
            <div
              aria-hidden
              className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary-100/60 via-cream to-transparent blur-2xl"
            />

            {/* zdjęcie główne */}
            <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 sm:ml-auto sm:w-[84%]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 84vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-primary-950/30 to-transparent"
              />
            </figure>

            {/* zdjęcie poboczne — nakładka (kolaż, od sm) */}
            {image2 && (
              <div className="absolute bottom-7 left-0 hidden aspect-square w-2/5 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:block">
                <Image
                  src={image2}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 15vw, 34vw"
                  className="object-cover"
                />
              </div>
            )}

            {/* obrotowy pierścień z tekstem (dekoracja, jak „explore more" na referencji) */}
            <div className="absolute -bottom-5 right-3 sm:right-6 lg:right-10">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-black/5 sm:h-28 sm:w-28">
                <div className="kompendium-ring-spin absolute inset-0" aria-hidden>
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <defs>
                      <path
                        id={ringPathId}
                        d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                        fill="none"
                      />
                    </defs>
                    <text className="fill-primary-500 text-[8px] font-semibold uppercase tracking-[0.18em]">
                      <textPath href={`#${ringPathId}`} startOffset="0">
                        {ringText}
                      </textPath>
                    </text>
                  </svg>
                </div>
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary-700 text-white sm:h-12 sm:w-12">
                  <SparkleIcon className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Ikony / dekoracje --------------------------------- */

function SparkleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2c.45 5.1 2.4 7.05 7.5 7.5-5.1.45-7.05 2.4-7.5 7.5-.45-5.1-2.4-7.05-7.5-7.5 5.1-.45 7.05-2.4 7.5-7.5Z" />
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
