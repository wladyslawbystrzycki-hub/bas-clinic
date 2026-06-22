import Link from 'next/link';

/**
 * Lekki, „premium" nagłówek dla stron pomocniczych (kontakt, o nas, cennik).
 *
 * Spójny z głównym `HeroSection` (grafit `bg-primary-950`, warstwowe kształty tła,
 * platynowy eyebrow, ta sama typografia H1), ale bez wycinanki i CTA — krótszy.
 * Renderuje własne breadcrumbs dopasowane do ciemnego tła (komponent `Breadcrumbs`
 * jest stylowany pod jasne tło i ginie na grafitcie).
 */
export default function PageHeader({ eyebrow, title, description, breadcrumbs = [] }) {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-primary-950">
      {/* ---------------------------- Tło: kształty --------------------------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* mesh: rozświetlenie lewy-górny */}
        <div className="absolute inset-0 bg-[radial-gradient(100%_140%_at_12%_-30%,var(--color-primary-800)_0%,transparent_55%)]" />
        {/* mesh: poświata prawy-górny */}
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(60%_140%_at_92%_-10%,var(--color-primary-700)_0%,transparent_55%)]" />
        {/* siatka kropek wygaszona ku lewej */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:38px_38px] [mask-image:linear-gradient(to_left,black,transparent_62%)] [-webkit-mask-image:linear-gradient(to_left,black,transparent_62%)]" />
        {/* platynowy łuk (echo głównego hero) */}
        <svg
          aria-hidden
          viewBox="0 0 820 820"
          fill="none"
          className="absolute right-[-22%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 sm:right-[-12%] sm:h-[680px] sm:w-[680px] lg:right-[-6%]"
        >
          <g stroke="var(--color-secondary-500)" strokeWidth="1" strokeLinecap="round">
            <circle cx="410" cy="410" r="260" strokeOpacity="0.14" pathLength="1" strokeDasharray="0.30 1" />
            <circle cx="410" cy="410" r="340" strokeOpacity="0.16" pathLength="1" strokeDasharray="0.34 1" />
          </g>
        </svg>
        {/* dolne wygaszenie (scala z następną sekcją) */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-950 to-transparent" />
      </div>

      {/* ------------------------------ Zawartość ----------------------------- */}
      <div className="relative z-10 mx-auto w-full max-w-[100rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm">
              <li>
                <Link href="/" className="text-primary-300 transition-colors hover:text-secondary-400">
                  Strona główna
                </Link>
              </li>
              {breadcrumbs.map((item, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li key={item.href || item.label} className="flex items-center gap-1.5">
                    <span aria-hidden className="text-primary-500">
                      /
                    </span>
                    {isLast || !item.href ? (
                      <span aria-current="page" className="font-medium text-primary-100">
                        {item.label}
                      </span>
                    ) : (
                      <Link href={item.href} className="text-primary-300 transition-colors hover:text-secondary-400">
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-400 sm:text-sm">
            {eyebrow}
          </p>
        )}

        <h1 className="mt-4 max-w-3xl font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-primary-200/90 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
