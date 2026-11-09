import Section from './Section';
import SectionHeader from './SectionHeader';

/**
 * ProcessTimeline — przebieg wizyty w jednym rzędzie (np. kwalifikacja →
 * przygotowanie → wlew → po wlewie): ciemne pasmo akcentowe, okrągłe ikony
 * połączone hairline'ami ze strzałką i notka pod kreską.
 *
 * Referencja („how it works" na zdjęciu z granatową nakładką i heksagonami)
 * w naszym języku: grafit `Section bg="dark"` z poświatą i jednym blobem zamiast
 * zdjęcia, platynowe hairline'y zamiast kręconych cyjanowych strzałek, jeden
 * Poppins zamiast dwukolorowego serif-H2, eyebrow `SectionHeader` zamiast
 * pigułki. Kolejność niosą łączniki i <ol>, bez numerów 01/02/03. Bez CTA —
 * to blok informacyjny między dwoma CTA (pasek wariantów i karta wskazań).
 *
 * Komponent serwerowy (bez JS). Renderuje WŁASNĄ sekcję, NIE owijaj w <Section>.
 *
 * @param steps - [{ title, description, icon }]; `icon` to klucz z `ICONS`
 * @param note  - zdanie pod kreską (np. „Skierowanie nie jest potrzebne…")
 */
export default function ProcessTimeline({ id, eyebrow, title, description, steps, note }) {
  return (
    <Section id={id} bg="dark" className="relative isolate overflow-hidden">
      {/* Poświata górnej krawędzi (motyw zakładek ServicesAccordion) + jeden blob;
          bez siatki kropek, bo sąsiednia sekcja ma już `dotGrid` */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_55%_at_50%_0%,var(--color-primary-800)_0%,transparent_60%)]" />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-primary-500/30 blur-[120px]" />
      </div>

      <SectionHeader subtitle={eyebrow} title={title} description={description} light />

      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {steps.map((step, i) => {
          const Icon = ICONS[step.icon];
          return (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && <Connector />}
              <span
                aria-hidden
                className="relative flex h-20 w-20 items-center justify-center rounded-full border border-secondary-500/40 bg-white/[0.04] text-secondary-300"
              >
                <Icon className="h-9 w-9" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-primary-100">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>

      <p className="mx-auto mt-12 max-w-2xl border-t border-white/10 pt-8 text-center text-sm leading-relaxed text-primary-200">
        {note}
      </p>
    </Section>
  );
}

/**
 * Hairline ze strzałką od krawędzi tego kółka do krawędzi następnego — tylko
 * w rzędzie (lg+). Szerokość = 100% + gap (2rem) − 2 × (promień 2.5rem + 0.75rem
 * odstępu) = 100% − 4.5rem; `top-10` to środek kółka `h-20`.
 */
function Connector() {
  return (
    <span
      aria-hidden
      className="absolute left-[calc(50%+3.25rem)] top-10 hidden h-px w-[calc(100%-4.5rem)] bg-secondary-500/30 lg:block"
    >
      <svg
        viewBox="0 0 10 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-0.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 text-secondary-400/70"
        aria-hidden
      >
        <path d="m3 1 4 4-4 4" />
      </svg>
    </span>
  );
}

/* --------------------------------- Ikony --------------------------------- */

const ICONS = {
  kwalifikacja: ClipboardCheckIcon,
  przygotowanie: SyringeIcon,
  wlew: DripBagIcon,
  powrot: CarIcon,
};

function ClipboardCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M8 4.5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2h-1" />
      <rect x="9" y="3" width="6" height="3" rx="1" />
      <path d="m9 13 2 2 4-4.5" />
    </svg>
  );
}

function SyringeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {/* ukośnie, żeby sylwetka różniła się od pionowego worka w kroku „Wlew" */}
      <g transform="rotate(-45 12 12)">
        <path d="M12 2.5v4M9.5 4.5h5" />
        <path d="M9 6.5h6V16a3 3 0 0 1-6 0V6.5Z" />
        <path d="M9 12.5h6M12 19v2.5" />
      </g>
    </svg>
  );
}

function DripBagIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 1.5v2" />
      <path d="M7.5 3.5h9v7a4.5 4.5 0 0 1-9 0v-7Z" />
      <path d="M7.5 8h9M12 15v2" />
      <path d="M12 17.5c-1.1 1.4-1.9 2.4-1.9 3.2a1.9 1.9 0 0 0 3.8 0c0-.8-.8-1.8-1.9-3.2Z" />
    </svg>
  );
}

function CarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m6.5 11.5 1.5-4h8l1.5 4" />
      <path d="M4 16.5v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
      <circle cx="8" cy="17.5" r="1.5" />
      <circle cx="16" cy="17.5" r="1.5" />
    </svg>
  );
}
