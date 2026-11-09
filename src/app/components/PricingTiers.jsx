import Link from 'next/link';
import Section from './Section';
import SectionHeader from './SectionHeader';
import { CornerDots, IconBadge } from './CardAccents';

/**
 * PricingTiers — warianty składu w jednej siatce cen (np. Standard / VIP /
 * Exclusive na hubie wlewów): karty z ceną i opisem, pod nimi pasek z tym, co
 * obejmuje cena, i CTA.
 *
 * Układ z referencji („how it works": karty z plakietką i dekoracją w rogu, pod
 * nimi baner kontaktowy) przełożony na nasz język wizualny: karty na reliefie
 * `bg-cream` zamiast lawendy, jedna grafitowa plakietka z platynową ikoną
 * zamiast numerów 01/02/03 (warianty to nie sekwencja — bez numeracji), łata
 * kropek zamiast helisy DNA, w pasku grafitowy `rounded-lg` CTA zamiast
 * gradientowej pigułki, bez linii EKG. Wyróżnik wariantu („najczęściej
 * wybierany") stoi obok etykiety, nie w rogu — nie zderza się z łatą kropek
 * i mieści się w wąskiej karcie na tablecie.
 *
 * Komponent serwerowy (bez JS). Renderuje WŁASNĄ, białą sekcję (leży między
 * dwiema z reliefem, dlatego bez `dotGrid`), NIE owijaj w <Section>.
 *
 * @param tiers      - [{ id, label, price, description, icon, badge? }]; cena w zł,
 *                     `icon` to klucz z `ICONS`, `badge` = wyróżnik wariantu
 * @param note       - główna linia paska (co obejmuje cena)
 * @param noteDetail - dopowiedzenie pod nią
 */
export default function PricingTiers({
  id,
  eyebrow,
  title,
  description,
  tiers,
  note,
  noteDetail,
  ctaHref = '/rejestracja/',
  ctaLabel,
}) {
  return (
    <Section id={id}>
      <SectionHeader subtitle={eyebrow} title={title} description={description} />

      <ul className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <li key={tier.id} className="flex">
            <TierCard tier={tier} />
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-5">
          <IconBadge>
            <CheckIcon className="h-7 w-7" />
          </IconBadge>
          <div>
            <p className="font-display text-base font-semibold leading-snug text-primary-900 sm:text-lg">{note}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{noteDetail}</p>
          </div>
        </div>
        <Link
          href={ctaHref}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary-700 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-800"
        >
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </Section>
  );
}

function TierCard({ tier }) {
  const Icon = ICONS[tier.icon];

  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-cream p-7 shadow-sm sm:p-8">
      <CornerDots />

      <IconBadge>
        <Icon className="h-7 w-7" />
      </IconBadge>

      {/* min-h = wysokość chipa: bez tego cena na karcie z wyróżnikiem siedzi niżej niż na sąsiednich */}
      <div className="relative mt-6 flex min-h-7 flex-wrap items-center gap-x-3 gap-y-2">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-600">
          {tier.label}
        </h3>
        {tier.badge && (
          <span className="rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-primary-700">
            {tier.badge}
          </span>
        )}
      </div>
      <p className="relative mt-2 font-display text-4xl font-bold tabular-nums text-primary-900">
        {tier.price} zł
      </p>
      <p className="relative mt-4 text-sm leading-relaxed text-gray-600">{tier.description}</p>
    </div>
  );
}

/* --------------------------------- Ikony --------------------------------- */

// Skład wariantu jako liczba butelek preparatu: baza, baza + składnik, dwie butelki.
const ICONS = {
  butelka: BottleIcon,
  'butelka-plus': BottlePlusIcon,
  butelki: BottlesIcon,
};

// Butelka na osi środkowej (24px) i wąska wersja do ikony z dwiema butelkami —
// osobna ścieżka zamiast `scale()`, żeby grubość kreski została ta sama.
const BOTTLE =
  'M10.5 3v4l-2.4 2.1A3 3 0 0 0 7 11.4V18a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6.6a3 3 0 0 0-1.1-2.3L13.5 7V3M9.5 3h5M7.5 14h9';
const BOTTLE_NARROW =
  'M5.7 3v4l-1.9 1.9A2.6 2.6 0 0 0 3 10.8v7.6A2.6 2.6 0 0 0 5.6 21h2.8a2.6 2.6 0 0 0 2.6-2.6v-7.6a2.6 2.6 0 0 0-.8-1.9L8.3 7V3M5 3h4M3.4 14h7.2';

function ArrowUpRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

function BottleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d={BOTTLE} />
    </svg>
  );
}

function BottlePlusIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d={BOTTLE} transform="translate(-3 0)" />
      <path d="M18.75 3.75v5.5M16 6.5h5.5" />
    </svg>
  );
}

function BottlesIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d={BOTTLE_NARROW} />
      <path d={BOTTLE_NARROW} transform="translate(10 0)" />
    </svg>
  );
}
