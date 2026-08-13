import Link from 'next/link';
import Image from 'next/image';

/**
 * BeforeAfter — pojedyncza metamorfoza: para zdjęć „Przed / Po" + opis zabiegu.
 *
 * Server Component (bez JS). Prezentacja side-by-side (a nie suwak) jest tu
 * świadoma: dla materiałów medycznych równe, podpisane kadry czytają się
 * najbardziej wiarygodnie i są w pełni dostępne.
 *
 * Gdy `before`/`after` są puste, renderuje elegancką ramkę-placeholder
 * („Zdjęcie w przygotowaniu") — ten sam wzorzec co monogram w AuthorBio.
 * Po wstawieniu realnych ścieżek w `src/config/metamorfozy.js` zdjęcia
 * podmienią się automatycznie (publikowane wyłącznie za pisemną zgodą Pacjenta).
 *
 * ⚠️ `summary` to neutralna charakterystyka zabiegu — NIE obietnice skuteczności
 * ani wymyślone liczby (UOKiK/Omnibus + reklama usług medycznych).
 */
export default function BeforeAfter({
  area,
  service,
  serviceHref,
  title,
  summary,
  before,
  after,
  alt,
}) {
  return (
    <figure className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md">
      {/* Para zdjęć — hairline pośrodku (gap-px na szarym tle) */}
      <div className="grid grid-cols-2 gap-px bg-gray-100">
        <Frame
          image={before}
          label="Przed"
          tone="muted"
          alt={alt ? `${alt} — przed zabiegiem` : 'Stan przed zabiegiem'}
        />
        <Frame
          image={after}
          label="Po"
          tone="accent"
          alt={alt ? `${alt} — po zabiegu` : 'Stan po zabiegu'}
        />
      </div>

      {/* Opis */}
      <figcaption className="p-6 sm:p-7">
        {area && (
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-600">
            {area}
          </span>
        )}
        <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-primary-900 sm:text-xl">
          {title}
        </h3>
        {summary && (
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{summary}</p>
        )}
        {serviceHref && service && (
          <Link
            href={serviceHref}
            className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-900"
          >
            <span>
              Poznaj zabieg: <span className="underline-offset-2 group-hover/link:underline">{service}</span>
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        )}
      </figcaption>
    </figure>
  );
}

/** Pojedynczy kadr „Przed"/„Po" — zdjęcie albo ramka-placeholder. */
function Frame({ image, label, alt, tone }) {
  return (
    <div className="relative aspect-[4/5] bg-cream">
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
          className="object-cover"
        />
      ) : (
        <Placeholder />
      )}
      <span
        className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] ${
          tone === 'accent'
            ? 'bg-primary-900 text-white'
            : 'bg-white/90 text-primary-700 ring-1 ring-black/5 backdrop-blur-sm'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/** Placeholder do czasu wstawienia realnej, udokumentowanej fotografii. */
function Placeholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary-300 shadow-sm ring-1 ring-primary-100">
        <CameraIcon className="h-6 w-6" />
      </span>
      <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-primary-400">
        Zdjęcie w przygotowaniu
      </span>
    </div>
  );
}

/* -------------------------------- Ikony --------------------------------- */

function CameraIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
    </svg>
  );
}

function ArrowRight({ className }) {
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
