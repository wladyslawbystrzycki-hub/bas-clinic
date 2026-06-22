/**
 * Testimonials — sekcja „Opinie Pacjentów" (strona główna + strony usług).
 *
 * Układ kart inspirowany referencyjnym zrzutem (znak cudzysłowu → cytat → autor),
 * ale przełożony na nasz język wizualny: ciemny grafitowy pas akcentowy (jak hero
 * i stopka) z platynowym znakiem cudzysłowu i bursztynowymi gwiazdkami — to jedyny
 * dozwolony ciepły akcent (konwencja recenzji). Spójny wygląd na stronie głównej
 * i na podstronach usług; treść dobierana tematycznie (patrz `src/config/testimonials.js`).
 *
 * Server Component — brak interaktywności. Dane (PLACEHOLDER!) z `testimonials.js`.
 */
export default function Testimonials({
  id,
  eyebrow = 'Opinie',
  title = 'Co mówią nasi Pacjenci',
  description,
  items = [],
}) {
  if (!items || items.length === 0) return null;

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-primary-950 py-16 text-white sm:py-20 lg:py-24"
    >
      {/* miękka poświata w tle — spójna z hero/stopką */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary-700/40 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
        {/* Nagłówek — wyśrodkowany, platynowy eyebrow (konwencja na ciemnym tle) */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-400">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-primary-200/90">{description}</p>
          )}
        </div>

        {/* Karty z opiniami */}
        <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <li key={i} className="h-full">
              <TestimonialCard quote={t.quote} author={t.author} role={t.role} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl bg-white/[0.04] p-8 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.06] hover:ring-white/20">
      <QuoteGlyph className="h-9 w-9 shrink-0 text-secondary-500" />
      <blockquote className="mt-5 flex-1 text-base leading-relaxed text-primary-100">
        {quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-white/10 pt-5">
        <Stars />
        <span className="mt-3 block font-semibold text-white">{author}</span>
        {role && <span className="mt-0.5 block text-sm text-secondary-300">{role}</span>}
      </figcaption>
    </figure>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4" />
      ))}
    </div>
  );
}

/* -------------------------------- Ikony --------------------------------- */

/** Stylizowany znak cudzysłowu (platynowy akcent na ciemnym tle). */
function QuoteGlyph({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M9.13 8.36C7.4 8.86 6.2 10.06 6.2 11.9c0 .2.02.4.05.6.3-.13.63-.2.98-.2 1.5 0 2.62 1.1 2.62 2.62 0 1.5-1.2 2.68-2.74 2.68-1.86 0-3.31-1.5-3.31-3.97 0-3.02 1.98-5.42 4.79-6.2l.54 1.93Zm8.49 0c-1.74.5-2.93 1.7-2.93 3.54 0 .2.02.4.05.6.3-.13.63-.2.98-.2 1.5 0 2.62 1.1 2.62 2.62 0 1.5-1.2 2.68-2.74 2.68-1.86 0-3.31-1.5-3.31-3.97 0-3.02 1.98-5.42 4.79-6.2l.54 1.93Z" />
    </svg>
  );
}

/** Gwiazdka (ten sam kształt co w ReviewsBadge — spójność). */
function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" />
    </svg>
  );
}
