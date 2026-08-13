import Link from 'next/link';
import { CLINIC } from '@/config/clinic';
import ReviewsBadge from './ReviewsBadge';

/**
 * Ujednolicony hero dla strony głównej i podstron usług.
 *
 * - variant="home"    → bez breadcrumbs, wyższy hero.
 * - variant="service" → breadcrumbs u góry, niższy hero.
 *
 * Treść lewej kolumny (kolejność): eyebrow → H1 → `lead` (wyróżniony podtytuł) →
 * `quote`/`quoteAuthor` (cytat z podpisem) → `description` → kontakt → CTA.
 * `lead`/`quote` używane głównie na stronie głównej; `description` na usługach.
 *
 * Prawa kolumna to wycinanka lekarzy (PNG/WebP z przezroczystym tłem) „unosząca
 * się" na kształtach tła — ukryta poniżej `lg`. Ten sam obraz w całym hero;
 * można nadpisać propsem `heroImage` / `heroImageAlt`.
 */
export default function HeroSection({
  id,
  variant = 'service',
  breadcrumbs,
  subtitle,
  title,
  lead,
  quote,
  quoteAuthor,
  description,
  showReviews = false,
  heroImage = '/people/lekarze-klinika-bas.webp',
  heroImageAlt = 'Zespół lekarski Bas Clinic',
}) {
  const isHome = variant === 'home';
  const hasBreadcrumbs = !isHome && breadcrumbs && breadcrumbs.length > 0;

  return (
    <section
      id={id}
      className={`relative isolate flex items-center overflow-hidden bg-primary-950 ${
        isHome ? 'min-h-[88vh] min-h-[88svh] lg:min-h-[660px]' : 'min-h-0 lg:min-h-[560px]'
      }`}
    >
      {/* ---------------------------- Tło: kształty --------------------------- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* 1 — baza */}
        <div className="absolute inset-0 bg-primary-950" />
        {/* 2 — mesh: rozświetlenie lewy-górny */}
        <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_10%_-8%,var(--color-primary-800)_0%,transparent_55%)]" />
        {/* 3 — mesh: poświata prawy-górny (za postacią) */}
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(70%_65%_at_88%_14%,var(--color-primary-700)_0%,transparent_55%)]" />
        {/* 4 — mesh: poświata lewy-dolny (równoważy lewą stronę kadru) */}
        <div className="absolute inset-0 opacity-80 bg-[radial-gradient(58%_60%_at_4%_66%,var(--color-primary-800)_0%,transparent_55%)]" />
        {/* 5 — blob za postacią (prawy-górny) */}
        <div className="absolute right-[-10%] top-0 h-[40rem] w-[40rem] rounded-full bg-primary-700/30 blur-[130px]" />
        {/* 6 — blob lewy-dolny (bleeduje poza krawędź — domyka lewą stronę) */}
        <div className="absolute bottom-[-18%] left-[-8%] h-[32rem] w-[32rem] rounded-full bg-primary-800/45 blur-[120px]" />
        {/* 7 — koncentryczne łuki PRAWA (subtelny motyw „fali" zza postaci) */}
        <svg
          aria-hidden
          viewBox="0 0 820 820"
          fill="none"
          className="absolute right-[-24%] top-1/2 h-[640px] w-[640px] -translate-y-1/2 sm:right-[-14%] sm:h-[860px] sm:w-[860px] lg:right-[-8%] lg:h-[1000px] lg:w-[1000px]"
        >
          <g stroke="var(--color-secondary-500)" strokeWidth="1" strokeLinecap="round">
            <circle cx="410" cy="410" r="250" strokeOpacity="0.14" pathLength="1" strokeDasharray="0.30 1" />
            <circle cx="410" cy="410" r="330" strokeOpacity="0.18" pathLength="1" strokeDasharray="0.34 1" />
            <circle cx="410" cy="410" r="400" strokeOpacity="0.10" pathLength="1" strokeDasharray="0.30 1" />
          </g>
        </svg>
        {/* 8 — animowane drobinki SVG (wypełniają puste przestrzenie kadru) */}
        <HeroParticles />
        {/* 9 — siatka kropek na CAŁEJ szerokości (wygaszona pionowo) */}
        <div className="absolute inset-0 opacity-[0.045] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
        {/* 10 — ziarno (subtelny grain; „premium" + znosi banding gradientów) */}
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full opacity-[0.06] mix-blend-soft-light"
        >
          <filter id="heroGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroGrain)" />
        </svg>
        {/* 11 — winieta (delikatnie ściemnia rogi) */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_40%,transparent_58%,rgba(6,8,10,0.45)_100%)]" />
        {/* 12 — dolne wygaszenie (scala z następną sekcją) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-950 to-transparent" />
      </div>

      {/* ------------------------------ Zawartość ----------------------------- */}
      <div
        className={`relative z-10 mx-auto w-full max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${
          isHome ? 'lg:py-28' : 'lg:py-24'
        }`}
      >
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          {/* Lewa kolumna — treść */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="max-w-2xl lg:max-w-3xl">
              {hasBreadcrumbs && (
                <nav aria-label="Breadcrumb" className="mb-6 lg:mb-8">
                  <ol className="flex flex-wrap items-center gap-1.5 text-sm">
                    <li>
                      <Link
                        href="/"
                        className="text-primary-300 transition-colors hover:text-secondary-400"
                      >
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
                            <Link
                              href={item.href}
                              className="text-primary-300 transition-colors hover:text-secondary-400"
                            >
                              {item.label}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              )}

              {subtitle && (
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-400 sm:text-sm">
                  {subtitle}
                </p>
              )}

              <h1
                className={`mt-5 font-display font-semibold tracking-tight text-balance [hyphens:auto] text-white ${
                  isHome
                    ? 'text-[2.6rem] leading-[1.05] sm:text-5xl lg:text-[3.75rem]'
                    : 'text-[2.1rem] leading-[1.08] sm:text-4xl lg:text-5xl'
                }`}
              >
                {title}
              </h1>

              {lead && (
                <p className="mt-6 max-w-lg text-xl font-light leading-snug text-pretty text-primary-100 sm:text-2xl">
                  {lead}
                </p>
              )}

              {quote && (
                <figure className="mt-8 max-w-md border-l-2 border-secondary-500/60 pl-5">
                  <blockquote className="text-base italic leading-relaxed text-pretty text-primary-200/90 sm:text-lg">
                    „{quote}”
                  </blockquote>
                  {quoteAuthor && (
                    <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-400">
                      {quoteAuthor}
                    </figcaption>
                  )}
                </figure>
              )}

              {description && (
                <p className="mt-6 max-w-md text-base leading-relaxed text-pretty text-primary-200/90 sm:text-lg">
                  {description}
                </p>
              )}

              {/* Blok kontaktowy */}
              <dl className="mt-8 grid gap-3 sm:max-w-lg sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-3 ring-1 ring-white/10 transition-colors hover:bg-white/[0.06]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary-500/10 text-secondary-400 ring-1 ring-secondary-500/20">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-secondary-400">
                      Adres
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-primary-50">
                      {CLINIC.address.street}, {CLINIC.address.cityDisplay}
                    </dd>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-3 ring-1 ring-white/10 transition-colors hover:bg-white/[0.06]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary-500/10 text-secondary-400 ring-1 ring-secondary-500/20">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-secondary-400">
                      Godziny
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-primary-50">
                      Pon–Pt {CLINIC.hours.weekdays}
                    </dd>
                  </div>
                </div>
              </dl>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/rejestracja/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary-500 px-8 py-3.5 text-sm font-semibold text-primary-950 shadow-lg transition-all hover:bg-secondary-400 hover:shadow-secondary-500/25"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Umów wizytę online
                </Link>
                <a
                  href={`tel:${CLINIC.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Zadzwoń — {CLINIC.phone}
                </a>
              </div>

              {/* Opinie Google — wariant mobilny (subtelny rządek) */}
              {showReviews && (
                <div className="mt-8 lg:hidden">
                  <ReviewsBadge variant="inline" />
                </div>
              )}
            </div>
          </div>

          {/* Prawa kolumna — wycinanka lekarzy (tylko desktop) */}
          <div className="relative hidden self-stretch lg:col-span-5 lg:flex lg:items-end lg:justify-center">
            {heroImage && (
              // Wycinanka lekarza z przezroczystym tłem, dopasowana `object-contain`
              // + `max-h` (nie sztywnym boxem). next/image (model width/height/fill)
              // nie da tu zysku dla i tak zoptymalizowanego, przezroczystego webp, a
              // psułby swobodne skalowanie wysokością — świadomie zostaje <img>.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={heroImage}
                alt={heroImageAlt}
                width={1122}
                height={1402}
                loading="lazy"
                decoding="async"
                className={`relative z-10 w-auto max-w-full object-contain object-bottom drop-shadow-2xl ${
                  isHome ? 'max-h-[34rem] xl:max-h-[42rem]' : 'max-h-[28rem] xl:max-h-[34rem]'
                }`}
              />
            )}
          </div>
        </div>
      </div>

      {/* Opinie Google — wariant desktop (pionowa pigułka przy prawej krawędzi) */}
      {showReviews && (
        <div className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
          <ReviewsBadge variant="vertical" />
        </div>
      )}
    </section>
  );
}

/* --------------------- Tło: animowane drobinki (SVG) --------------------- */

/* Neutralne, „medyczne" znaczniki w pustych strefach kadru (z dala od H1).
   Typy: cienki pierścień, mała płaska kropka, delikatny krzyżyk (+). */
const HERO_PARTICLES = [
  { top: '20%', left: '46%', size: 13, float: 9, tw: 5.5, delay: 0, type: 'ring' },
  { top: '13%', left: '62%', size: 3, float: 10, tw: 6, delay: 1.2, type: 'dot' },
  { top: '38%', left: '54%', size: 11, float: 8, tw: 5, delay: 0.6, type: 'plus' },
  { top: '57%', left: '61%', size: 16, float: 11, tw: 6.5, delay: 1.8, type: 'ring' },
  { top: '74%', left: '49%', size: 3, float: 9, tw: 5.5, delay: 0.3, type: 'dot' },
  { top: '30%', left: '9%', size: 2, float: 10, tw: 6, delay: 2.2, type: 'dot' },
  { top: '82%', left: '16%', size: 12, float: 9.5, tw: 5, delay: 1, type: 'plus' },
  { top: '65%', left: '30%', size: 10, float: 8, tw: 6, delay: 1.5, type: 'ring' },
  { top: '47%', left: '39%', size: 3, float: 9.5, tw: 6.5, delay: 2.6, type: 'dot' },
];

/** Warstwa delikatnie unoszących się i wygaszających platynowych znaczników. */
function HeroParticles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {HERO_PARTICLES.map((p, i) => (
        <span
          key={i}
          className="hero-anim absolute block"
          style={{ top: p.top, left: p.left, animation: `heroFloat ${p.float}s ease-in-out ${p.delay}s infinite` }}
        >
          <span
            className="hero-anim block opacity-30"
            style={{ animation: `heroTwinkle ${p.tw}s ease-in-out ${p.delay}s infinite` }}
          >
            {p.type === 'ring' ? (
              <Ring size={p.size} />
            ) : p.type === 'plus' ? (
              <Plus size={p.size} />
            ) : (
              <Dot size={p.size} />
            )}
          </span>
        </span>
      ))}
    </div>
  );
}

function Dot({ size }) {
  return <span className="block rounded-full bg-secondary-400" style={{ width: size, height: size }} />;
}

function Ring({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10.5" stroke="var(--color-secondary-400)" strokeWidth="1" />
    </svg>
  );
}

function Plus({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4.5v15M4.5 12h15" stroke="var(--color-secondary-400)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/* -------------------------------- Ikony --------------------------------- */

function MapPinIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}
