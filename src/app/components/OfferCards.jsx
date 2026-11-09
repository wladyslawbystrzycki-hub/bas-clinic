import Link from 'next/link';
import Section from './Section';
import SectionHeader from './SectionHeader';
import { CornerDots, IconBadge } from './CardAccents';

/**
 * OfferCards — siatka oferty (np. kroplówki na hubie wlewów): karta z ikoną,
 * opisem, linią meta (cena „od" · czas) i przyciskiem do strony usługi.
 *
 * Układ z referencji przełożony na nasz język wizualny: zamiast kolorowych
 * plakietek jedna grafitowa z platynową ikoną, zamiast helisy DNA w rogu karty
 * wygaszona łata siatki kropek (ten sam motyw co tło sekcji i hero; oba akcenty
 * dzielone z `PricingTiers` przez `CardAccents`), przycisk
 * `rounded-lg` zamiast pigułki. Bez numeracji: lista oferty to nie sekwencja.
 *
 * Komponent serwerowy (bez JS). Renderuje WŁASNĄ sekcję (`Section` z tłem
 * `dotGrid`), NIE owijaj w <Section>.
 *
 * @param items  - [{ id, name, description, meta?, href, icon }]; `icon` to klucz z `ICONS`
 * @param listId - id listy kart: anchor dla deep-linków z menu (np. `#kroplowki`),
 *                 gdy sekcja ma osobne, stałe `id`
 */
export default function OfferCards({
  id,
  listId,
  eyebrow,
  title,
  description,
  items,
  linkLabel = 'Dowiedz się więcej',
}) {
  return (
    <Section id={id} bg="light" dotGrid>
      <SectionHeader subtitle={eyebrow} title={title} description={description} />

      {/* flex-wrap zamiast grid: przy 10 kartach w 4 kolumnach ostatni rząd ma dwie
          sieroty — justify-center wyśrodkowuje go zamiast zostawiać dziurę po prawej.
          Szerokość = (100% - odstępy) / liczba kolumn dla gap-6 */}
      <ul id={listId} className="flex flex-wrap justify-center gap-6 scroll-mt-28">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
          >
            <OfferCard item={item} linkLabel={linkLabel} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function OfferCard({ item, linkLabel }) {
  const Icon = ICONS[item.icon];

  return (
    <Link
      href={item.href}
      className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-7 shadow-sm transition-all duration-300 hover:border-primary-300 hover:shadow-lg motion-safe:hover:-translate-y-1"
    >
      <CornerDots className="transition-opacity duration-300 group-hover:opacity-100" />

      <IconBadge>
        <Icon className="h-7 w-7" />
      </IconBadge>

      <h3 className="relative mt-6 font-display text-xl font-semibold leading-snug text-primary-900 transition-colors group-hover:text-primary-700">
        {item.name}
      </h3>
      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-gray-600">
        {item.description}
      </p>
      {item.meta && (
        <p className="relative mt-4 text-sm font-semibold tabular-nums text-primary-700">
          {item.meta}
        </p>
      )}

      <span className="relative mt-6 flex items-center justify-between gap-3 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-primary-900 transition-colors duration-300 group-hover:border-primary-700 group-hover:bg-primary-700 group-hover:text-white">
        {linkLabel}
        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

/* --------------------------------- Ikony --------------------------------- */

const ICONS = {
  witaminy: CapsuleIcon,
  sport: DumbbellIcon,
  odpornosc: ShieldPlusIcon,
  regeneracja: MoonIcon,
  'anti-age': HourglassIcon,
  'after-party': SunriseIcon,
  libido: HeartIcon,
  detox: LeafIcon,
  nawodnienie: DropletIcon,
  energia: BoltIcon,
};

function ArrowUpRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function CapsuleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <g transform="rotate(-45 12 12)">
        <rect x="2.75" y="8.75" width="18.5" height="6.5" rx="3.25" />
        <path d="M12 8.75v6.5" />
      </g>
    </svg>
  );
}

function DumbbellIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="5.75" y="7.5" width="2.5" height="9" rx="1" />
      <rect x="15.75" y="7.5" width="2.5" height="9" rx="1" />
      <path d="M3 10v4M21 10v4M8.25 12h7.5" />
    </svg>
  );
}

function ShieldPlusIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 3 5 6v5.5c0 4.3 3 8 7 9.5 4-1.5 7-5.2 7-9.5V6l-7-3Z" />
      <path d="M12 9v6M9 12h6" />
    </svg>
  );
}

function MoonIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      <path d="M17.5 3v3M16 4.5h3" />
    </svg>
  );
}

function HourglassIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M6.5 3h11M6.5 21h11" />
      <path d="M8 3v3.2c0 1.2.5 2.3 1.4 3.1L12 12l-2.6 2.7A4.4 4.4 0 0 0 8 17.8V21M16 3v3.2c0 1.2-.5 2.3-1.4 3.1L12 12l2.6 2.7c.9.8 1.4 1.9 1.4 3.1V21" />
    </svg>
  );
}

function SunriseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 3.5V6M5.6 6.6l1.8 1.8M18.4 6.6l-1.8 1.8M3 17h18M6.5 17a5.5 5.5 0 0 1 11 0M8 20.5h8" />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 20.5 4.9 13.6a4.3 4.3 0 0 1 6.1-6.1l1 1 1-1a4.3 4.3 0 0 1 6.1 6.1L12 20.5Z" />
    </svg>
  );
}

function LeafIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 4C11 4 5 9 5 15.5A4.5 4.5 0 0 0 9.5 20C16 20 20 13 20 4Z" />
      <path d="M5.5 19.5c3-5 6-8 9.5-10.5" />
    </svg>
  );
}

function DropletIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 3.25S6.5 9.65 6.5 14a5.5 5.5 0 0 0 11 0c0-4.35-5.5-10.75-5.5-10.75Z" />
      <path d="M9.2 14.6c1 .8 1.9.8 2.8 0 .9-.8 1.8-.8 2.8 0" />
    </svg>
  );
}

function BoltIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M13 2.5 5 13.5h6l-1 8 8-11h-6l1-8Z" />
    </svg>
  );
}
