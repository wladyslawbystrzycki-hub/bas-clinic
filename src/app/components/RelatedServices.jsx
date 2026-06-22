import Link from 'next/link';
import RelatedServicesSlider from './RelatedServicesSlider';

// Globalna sekcja „Powiązane zabiegi" — relewantne linkowanie wewnętrzne.
// Treść/lista pochodzą z `getRelatedServices(slug)` (src/config/relatedServices.js);
// ServicePageTemplate rozkłada pakiet na propsy. Renderuje WŁASNY <section> (jak
// FAQSection/Testimonials) — nie owijaj w <Section>.
//
// Układ inspirowany referencyjnym „Choose Your Plan", przełożony na naszą paletę
// (grafit/platyna, NIE pomarańcz): lewa kolumna edytorska (eyebrow → tytuł → intro →
// grafitowe CTA do hubu, lepka na desktopie) + siatka kart powiązanych usług po prawej.
//
// Każdy element listy jest normalizowany: `href` lub `/${slug}/`, `description` lub
// `shortDesc` — dzięki temu działa zarówno dla obiektów z services.js, jak i dla
// ręcznych wpisów `{ name, description, href }` przekazywanych ze stron.
export default function RelatedServices({
  id = 'powiazane-zabiegi',
  subtitle = 'Nasze usługi',
  title = 'Powiązane zabiegi',
  intro,
  ctaHref,
  ctaLabel = 'Zobacz wszystkie usługi',
  services = [],
}) {
  if (!services.length) return null;

  return (
    <section id={id} className="scroll-mt-20 bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ----------------------- Lewa: kolumna edytorska ---------------------- */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">
              {subtitle}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
            {intro && (
              <p className="mt-5 max-w-md text-base leading-relaxed text-gray-600">
                {intro}
              </p>
            )}
            {ctaHref && (
              <Link
                href={ctaHref}
                className="group mt-8 inline-flex items-center gap-3 self-start rounded-lg bg-primary-700 py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-800"
              >
                {ctaLabel}
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            )}
          </div>

          {/* ------------------------- Prawa: karty usług (slider) ---------------- */}
          <div className="lg:col-span-8">
            <RelatedServicesSlider services={services} />
          </div>
        </div>
      </div>
    </section>
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
