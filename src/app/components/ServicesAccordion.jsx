'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Interaktywny akordeon usług.
 * - Desktop (lg+): rozwija się POZIOMO — zwinięte grafitowe zakładki z pionowym
 *   tytułem; kliknięta rozszerza się i pokazuje pełną kartę (panel + treść).
 * - Mobile: rozwija się PIONOWO — klasyczny akordeon (nagłówek + treść w dół).
 *
 * Dane (`items`) są serializowalne (stringi) — ikona przekazywana kluczem,
 * komponent mapuje go na SVG. Brak zależności od zdjęć (panel = grafit + ikona).
 */
export default function ServicesAccordion({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-12">
      {/* ----------------------------- Desktop ----------------------------- */}
      <div className="hidden h-[34rem] gap-3 lg:flex">
        {items.map((item, i) => (
          <DesktopPanel
            key={item.title}
            item={item}
            index={i}
            isActive={i === active}
            onOpen={() => setActive(i)}
          />
        ))}
      </div>

      {/* ------------------------------ Mobile ----------------------------- */}
      <div className="flex flex-col gap-3 lg:hidden">
        {items.map((item, i) => (
          <MobilePanel
            key={item.title}
            item={item}
            index={i}
            isActive={i === active}
            onToggle={() => setActive(i === active ? -1 : i)}
          />
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- Desktop panel ----------------------------- */

function DesktopPanel({ item, index, isActive, onOpen }) {
  const Icon = ICONS[item.icon] ?? SparklesIcon;
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 ease-out ${
        isActive ? 'flex-[1_1_0%]' : 'flex-[0_0_5.5rem]'
      }`}
    >
      {/* Zwinięta zakładka (grafit) — przykrywa białą kartę, znika po otwarciu */}
      <button
        type="button"
        onClick={onOpen}
        aria-expanded={isActive}
        aria-label={`Pokaż usługę: ${item.title}`}
        className={`absolute inset-0 z-20 flex flex-col items-center justify-between bg-primary-950 py-6 transition-opacity duration-300 ${
          isActive ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_55%_at_50%_0%,var(--color-primary-800)_0%,transparent_60%)]"
        />
        <span
          aria-hidden
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-900 shadow-md transition-transform duration-300 group-hover:-translate-y-0.5"
        >
          <ArrowUpRight className="h-5 w-5" />
        </span>
        <span className="relative rotate-180 whitespace-nowrap font-display text-lg font-semibold tracking-wide text-white [writing-mode:vertical-rl]">
          {item.title}
        </span>
        <span aria-hidden className="relative font-display text-3xl font-bold text-white/15">
          {num}
        </span>
      </button>

      {/* Rozwinięta zawartość */}
      {isActive && <DesktopExpanded item={item} num={num} Icon={Icon} />}
    </div>
  );
}

function DesktopExpanded({ item, num, Icon }) {
  return (
    <div className="relative flex h-full animate-[fadeIn_0.5s_ease] gap-5 p-4 lg:p-5">
      {/* Panel wizualny — realne foto (gdy `image`) albo grafit + ikona */}
      <div className="relative hidden w-[38%] shrink-0 flex-col overflow-hidden rounded-xl bg-primary-950 md:flex">
        {item.image ? (
          <>
            <Image
              src={item.image}
              alt={item.imageAlt}
              title={item.title}
              fill
              sizes="(min-width: 1024px) 22rem, (min-width: 768px) 30vw, 0px"
              className="object-cover"
            />
            {/* scrim u dołu — czytelność białego CTA na zdjęciu */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/20 to-transparent"
            />
          </>
        ) : (
          <>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_30%_0%,var(--color-primary-800)_0%,transparent_60%)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:22px_22px]"
            />
            <div className="relative flex flex-1 items-center justify-center p-6">
              <span className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/[0.07] text-secondary-400 ring-1 ring-white/15">
                <Icon className="h-12 w-12" />
              </span>
            </div>
          </>
        )}
        <Link
          href="/rejestracja/"
          className="relative m-3 mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary-900 transition-colors hover:bg-secondary-200"
        >
          <CalendarIcon className="h-4 w-4" />
          Umów wizytę
        </Link>
      </div>

      {/* Treść */}
      <div className="relative flex min-w-0 flex-1 flex-col">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-3 right-0 select-none font-display text-7xl font-bold leading-none text-primary-100"
        >
          {num}
        </span>
        {/* Strefa treści przewija się, gdy karta ma gęstą zawartość (np. estetyka),
            dzięki czemu stała wysokość panelu jej nie przycina; stopka zostaje przypięta. */}
        <div className="relative flex-1 overflow-y-auto pr-1 [scrollbar-width:thin]">
          <h3 className="font-display text-2xl font-bold text-gray-900">{item.title}</h3>
          <div className="mt-3 max-w-md space-y-3 text-sm leading-relaxed text-gray-600">
            {item.description.split('\n\n').map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Bullets item={item} />
        </div>
        <div className="relative mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
          <Expert expert={item.expert} />
          <Link
            href={item.href}
            aria-label={`Przejdź do: ${item.title}`}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-900 text-white transition-colors hover:bg-primary-800"
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Mobile panel ----------------------------- */

function MobilePanel({ item, index, isActive, onToggle }) {
  const Icon = ICONS[item.icon] ?? SparklesIcon;
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isActive}
        className="flex w-full items-center gap-4 p-4 text-left"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-950 text-secondary-400">
          <Icon className="h-5 w-5" />
        </span>
        <span className="flex-1 font-display text-base font-semibold text-gray-900">
          {item.title}
        </span>
        <span aria-hidden className="font-display text-sm font-bold text-primary-500">
          {num}
        </span>
        <span
          aria-hidden
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-transform duration-300 ${
            isActive ? 'rotate-90' : ''
          }`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-5">
            <div className="space-y-3 text-sm leading-relaxed text-gray-600">
              {item.description.split('\n\n').map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Bullets item={item} />
            <div className="mt-5 border-t border-gray-100 pt-4">
              <Expert expert={item.expert} />
            </div>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="/rejestracja/"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
              >
                <CalendarIcon className="h-4 w-4" />
                Umów wizytę
              </Link>
              <Link
                href={item.href}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary-200 px-5 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
              >
                Zobacz więcej
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Wspólne części ---------------------------- */

function Expert({ expert }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-900 text-sm font-semibold text-white">
        {expert.initials}
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-gray-900">{expert.name}</p>
        <p className="truncate text-xs font-medium text-primary-600">{expert.role}</p>
      </div>
    </div>
  );
}

/**
 * Lista zabiegów karty. Dwa kształty danych:
 * - `bulletGroups` (np. estetyka: kobiety / mężczyźni) → grupy z nagłówkami, obok
 *   siebie od sm; pozycje wieloliniowe (align do góry).
 * - `bullets` (płaska lista) → 1 kolumna, a przy >4 punktach 2 kolumny.
 */
function Bullets({ item }) {
  if (item.bulletGroups) {
    return (
      <div className="relative mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
        {item.bulletGroups.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-600">
              {group.label}
            </p>
            <ul className="mt-3 space-y-2">
              {group.items.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-gray-800">
                  <span className="mt-0.5">
                    <CheckBadge />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul
      className={`relative mt-5 ${
        item.bullets.length > 4 ? 'grid grid-cols-2 gap-x-5 gap-y-2.5' : 'space-y-2.5'
      }`}
    >
      {item.bullets.map((b) => (
        <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-gray-800">
          <CheckBadge />
          {b}
        </li>
      ))}
    </ul>
  );
}

function CheckBadge() {
  return (
    <span
      aria-hidden
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700"
    >
      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
        <path
          d="M4 10.5 8 14.5 16 5.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* -------------------------------- Ikony ---------------------------------- */

const ICONS = {
  stomatologia: ToothIcon,
  estetyka: SparklesIcon,
  usg: PulseIcon,
  wlewy: DropletIcon,
  uzaleznienia: LifeRingIcon,
};

function ArrowUpRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M6.75 3v2.25M17.25 3v2.25M3 9h18M5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25Z" />
    </svg>
  );
}

function ToothIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 5.5C10.93 4.44 9.49 4 8 4 5.79 4 4 5.79 4 8c0 1.1.12 2.21.5 3.5.5 1.7.9 3.6 1.5 5.5.3 1 .9 1.5 1.5 1.5.8 0 1.2-.7 1.5-1.7.3-1 .5-2.3 1.5-2.3s1.2 1.3 1.5 2.3c.3 1 .7 1.7 1.5 1.7.6 0 1.2-.5 1.5-1.5.6-1.9 1-3.8 1.5-5.5C19.88 10.21 20 9.1 20 8c0-2.21-1.79-4-4-4-1.49 0-2.93.44-4 1.5Z" />
    </svg>
  );
}

function SparklesIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  );
}

function PulseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M2.5 12h4l2-5.5 4 11 2-5.5h6.5" />
    </svg>
  );
}

function DropletIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 3.25S6.5 9.65 6.5 14a5.5 5.5 0 0 0 11 0c0-4.35-5.5-10.75-5.5-10.75Z" />
    </svg>
  );
}

// Koło ratunkowe — metafora wsparcia/pomocy (leczenie uzależnień).
function LifeRingIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="m9.46 9.46-3.82-3.82M14.54 9.46l3.82-3.82M14.54 14.54l3.82 3.82M9.46 14.54l-3.82 3.82" />
    </svg>
  );
}
