import FAQAccordion from './FAQAccordion';

/**
 * FAQSection — wspólna sekcja „Najczęściej zadawane pytania" dla strony głównej
 * ORAZ stron usług. Jedno źródło wyglądu, żeby FAQ nie rozjeżdżał się między
 * widokami (ten sam wzorzec co wspólny `FAQAccordion`).
 *
 * Układ dwukolumnowy przełożony na nasz język wizualny (grafit zamiast pomarańczu,
 * brak wymyślonych awatarów): po lewej nagłówek (do lewej) + rozwijana lista pytań
 * (`FAQAccordion`) + miękki przycisk „Nie znalazłeś odpowiedzi?"; po prawej spokojne
 * zdjęcie 4:5. Renderuje WŁASNĄ sekcję `bg-cream` — NIE owijaj w <Section>.
 *
 * Komponent serwerowy (interaktywność żyje w `FAQAccordion`). Treść jest w DOM (SSR)
 * — pod SEO dokłada się FAQPageSchema (renderowany osobno przez stronę/szablon).
 *
 * @param items       - tablica { question, answer }
 * @param id          - id sekcji (kotwica); domyślnie 'faq'
 * @param contactHref - cel przycisku „Nie znalazłeś odpowiedzi?": '#kontakt' na
 *                      stronie głównej, '/kontakt/' na stronach usług
 * @param title       - nagłówek H2 (domyślnie wersja ze strony głównej)
 * @param eyebrow     - nadtytuł nad H2
 * @param intro       - akapit pod nagłówkiem
 * @param image       - URL zdjęcia (portret 4:5); domyślnie placeholder
 * @param imageAlt    - alt zdjęcia
 */

// PLACEHOLDER — zdjęcie z Unsplash; podmień na realne foto Bas Clinic (portret 4:5).
const FAQ_IMAGE =
  'https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&h=1100&fit=crop';

export default function FAQSection({
  items = [],
  id = 'faq',
  contactHref = '#kontakt',
  title = 'Najczęściej zadawane pytania',
  eyebrow = 'Masz pytania?',
  intro = 'Zebraliśmy odpowiedzi na pytania, które słyszymy najczęściej. Jeśli nie znajdziesz swojego — po prostu się z nami skontaktuj, chętnie wszystko spokojnie wyjaśnimy.',
  image = FAQ_IMAGE,
  imageAlt = 'Konsultacja i opieka w Bas Clinic',
}) {
  if (!items || items.length === 0) return null;

  return (
    <section id={id} className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* ----------------------------- Lewa: treść --------------------------- */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
              {intro}
            </p>

            {/* Akordeon (wspólny komponent z całą witryną) */}
            <FAQAccordion items={items} className="mt-8" />

            {/* „Nie znalazłeś odpowiedzi?" → sekcja/strona kontaktu */}
            <a
              href={contactHref}
              className="group mt-9 inline-flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-primary-200"
            >
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-primary-900">
                  Nie znalazłeś odpowiedzi?
                </span>
                <span className="block text-sm text-gray-500">
                  Napisz lub zadzwoń — chętnie pomożemy
                </span>
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-700 text-white transition-colors group-hover:bg-primary-800">
                <ArrowUpRightIcon />
              </span>
            </a>
          </div>

          {/* ----------------------------- Prawa: zdjęcie ------------------------- */}
          <div className="relative">
            {/* miękka poświata pod zdjęciem (głębia) */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary-100/70 via-cream to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={imageAlt}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-primary-950/20 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Ikony --------------------------------- */

function ArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5 19.5 4.5m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}
