'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CLINIC } from '@/config/clinic';

/**
 * ProcessStepsTabs — interaktywna część `ProcessSteps` (zawsze dokładnie jeden
 * aktywny etap, jak w stepperze).
 *
 * - Desktop (lg+): pionowa lista zakładek (WAI-ARIA tabs: roving tabindex, strzałki
 *   góra/dół, Home/End) + grafitowa karta. Panele wszystkich etapów leżą w JEDNEJ
 *   komórce gridu — wysokość karty = najwyższy panel, więc zmiana etapu nie
 *   przesuwa layoutu; nieaktywne panele są `invisible` (poza drzewem dostępności
 *   i kolejnością Tab), aktywny wchodzi crossfade'em.
 * - Mobile: pionowy akordeon (`grid-rows-[0fr]→[1fr]`, ten sam wzorzec co
 *   ServicesAccordion/FAQAccordion); otwarty etap staje się tą samą ciemną kartą.
 *   Zwinięte panele są `inert`, bo CTA w środku nie może łapać fokusu.
 *
 * Treść jest w DOM (SSR) w obu wariantach; `ICONS` mapuje klucz `icon` na SVG.
 * `ordered=false` (lista bez kolejności, np. wskazania) chowa numerację: zakładka
 * pokazuje ikonę pozycji, karta nie ma wyblakłej cyfry.
 */
export default function ProcessStepsTabs({
  sectionId,
  steps,
  ctaHref,
  ctaLabel,
  ordered = true,
  tabsLabel = 'Etapy',
  className = '',
}) {
  const [active, setActive] = useState(0);
  const tabId = (i) => `${sectionId}-etap-${i + 1}`;
  const panelId = (i) => `${sectionId}-panel-${i + 1}`;
  const mobilePanelId = (i) => `${sectionId}-panel-mobile-${i + 1}`;

  function onTabListKeyDown(e) {
    const last = steps.length - 1;
    let next;
    if (e.key === 'ArrowDown') next = active === last ? 0 : active + 1;
    else if (e.key === 'ArrowUp') next = active === 0 ? last : active - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = last;
    else return;
    e.preventDefault();
    setActive(next);
    e.currentTarget.querySelectorAll('[role="tab"]')[next].focus();
  }

  return (
    <div className={`grid gap-5 lg:grid-cols-2 lg:gap-6 ${className}`}>
      {/* ----------------------------- Desktop: zakładki ----------------------------- */}
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label={tabsLabel}
        onKeyDown={onTabListKeyDown}
        className="hidden flex-col gap-3 lg:flex"
      >
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <button
              key={step.title}
              type="button"
              role="tab"
              id={tabId(i)}
              aria-selected={isActive}
              aria-controls={panelId(i)}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={`relative flex flex-1 items-center gap-4 overflow-hidden rounded-2xl px-6 py-5 text-left font-display text-lg font-semibold transition-all duration-300 motion-reduce:transition-none ${
                isActive
                  ? 'bg-primary-950 text-white shadow-lg'
                  : 'bg-white text-primary-900 shadow-sm ring-1 ring-gray-100 hover:shadow-md hover:ring-primary-200'
              }`}
            >
              {isActive && <Glow />}
              {ordered ? (
                <span
                  className={`relative tabular-nums ${isActive ? 'text-secondary-400' : 'text-primary-500'}`}
                >
                  {num(i)}.
                </span>
              ) : (
                <IconBadge
                  icon={step.icon}
                  onDark={isActive}
                  className="h-9 w-9 rounded-lg [&_svg]:h-[1.125rem] [&_svg]:w-[1.125rem]"
                />
              )}
              <span className="relative">{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* ------------------------------ Desktop: karta ------------------------------ */}
      <div className="relative hidden overflow-hidden rounded-2xl bg-primary-950 p-7 text-white shadow-xl lg:flex lg:flex-col">
        <Glow />
        <div className="relative grid flex-1">
          {steps.map((step, i) => (
            <div
              key={step.title}
              role="tabpanel"
              id={panelId(i)}
              aria-labelledby={tabId(i)}
              tabIndex={0}
              className={`col-start-1 row-start-1 rounded-xl transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none ${
                i === active ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <IconBadge icon={step.icon} className="h-14 w-14 rounded-2xl [&_svg]:h-7 [&_svg]:w-7" />
                {ordered && (
                  <span
                    aria-hidden
                    className="select-none font-display text-5xl font-bold leading-none text-white/10"
                  >
                    {num(i)}
                  </span>
                )}
              </div>
              <StepBody step={step} className="mt-6" />
            </div>
          ))}
        </div>
        <CardFooter ctaHref={ctaHref} ctaLabel={ctaLabel} />
      </div>

      {/* ------------------------------- Mobile: akordeon ------------------------------- */}
      <div className="flex flex-col gap-3 lg:hidden">
        {steps.map((step, i) => {
          const isOpen = i === active;
          return (
            <div
              key={step.title}
              className={`relative overflow-hidden rounded-2xl transition-colors duration-300 motion-reduce:transition-none ${
                isOpen
                  ? 'bg-primary-950 text-white shadow-lg'
                  : 'bg-white shadow-sm ring-1 ring-gray-100'
              }`}
            >
              {isOpen && <Glow />}
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={mobilePanelId(i)}
                onClick={() => setActive(i)}
                className="relative flex w-full items-center gap-4 p-4 text-left"
              >
                <IconBadge
                  icon={step.icon}
                  onDark={isOpen}
                  className="h-11 w-11 rounded-xl [&_svg]:h-5 [&_svg]:w-5"
                />
                <span
                  className={`flex-1 font-display text-base font-semibold ${
                    isOpen ? 'text-white' : 'text-primary-900'
                  }`}
                >
                  {step.title}
                </span>
                {ordered && (
                  <span
                    aria-hidden
                    className={`font-display text-sm font-bold tabular-nums ${
                      isOpen ? 'text-secondary-400' : 'text-primary-500'
                    }`}
                  >
                    {num(i)}
                  </span>
                )}
                <span
                  aria-hidden
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 motion-reduce:transition-none ${
                    isOpen
                      ? 'rotate-180 border-secondary-400 bg-secondary-500 text-primary-950'
                      : 'border-gray-300 text-primary-700'
                  }`}
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </span>
              </button>

              <div
                id={mobilePanelId(i)}
                inert={!isOpen}
                className={`relative grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-5">
                    <StepBody step={step} />
                    <CardFooter ctaHref={ctaHref} ctaLabel={ctaLabel} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------- Wspólne części ------------------------------- */

const num = (i) => String(i + 1).padStart(2, '0');

/** Rozświetlenie górnej krawędzi ciemnych elementów — ten sam motyw co zakładki ServicesAccordion. */
function Glow() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_55%_at_50%_0%,var(--color-primary-800)_0%,transparent_60%)]"
    />
  );
}

/** `onDark=false` = grafitowa plakietka na białym nagłówku (platyna sama w sobie jest na jasnym niewidoczna). */
function IconBadge({ icon, onDark = true, className }) {
  const Icon = ICONS[icon];
  return (
    <span
      aria-hidden
      className={`relative flex shrink-0 items-center justify-center text-secondary-400 ${
        onDark ? 'bg-white/[0.07] ring-1 ring-white/15' : 'bg-primary-950'
      } ${className}`}
    >
      <Icon />
    </span>
  );
}

function StepBody({ step, className = '' }) {
  return (
    <div className={className}>
      <p className="text-sm leading-relaxed text-primary-100">{step.description}</p>
      <ul className="mt-5 space-y-2">
        {step.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5 text-sm font-medium text-white">
            <span
              aria-hidden
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary-500/15 text-secondary-300 ring-1 ring-secondary-500/35"
            >
              <CheckIcon className="h-3 w-3" />
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Stopka ciemnej karty: platynowe CTA (konwencja na ciemnym) + telefon z configu. */
function CardFooter({ ctaHref, ctaLabel }) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-white/10 pt-6">
      <Link
        href={ctaHref}
        className="inline-flex items-center gap-2 rounded-lg bg-secondary-500 px-5 py-3 text-sm font-semibold text-primary-950 shadow-lg transition-all hover:bg-secondary-400 hover:shadow-secondary-500/25"
      >
        <CalendarIcon className="h-4 w-4" />
        {ctaLabel}
      </Link>
      <a
        href={`tel:${CLINIC.phoneRaw}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-100 transition-colors hover:text-white"
      >
        <PhoneIcon className="h-4 w-4 text-secondary-400" />
        {CLINIC.phone}
      </a>
    </div>
  );
}

/* ----------------------------------- Ikony ----------------------------------- */

const ICONS = {
  wywiad: ChatIcon,
  badania: FlaskIcon,
  dowody: DocumentIcon,
  zgoda: SignatureIcon,
  plan: CalendarCheckIcon,
  // wskazania do wlewu (hub wlewów, `ordered={false}`)
  infekcja: ThermometerIcon,
  niedobory: TestTubeIcon,
  wchlanianie: IntestineIcon,
  odwodnienie: DropletIcon,
  trening: DumbbellIcon,
  stres: BatteryLowIcon,
};

function ThermometerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3.5a2 2 0 0 0-2 2v8.3a3.5 3.5 0 1 0 4 0V5.5a2 2 0 0 0-2-2Z" />
      <path d="M12 9v6.5" />
    </svg>
  );
}

function TestTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 3.5h8M9.75 3.5v12.25a2.25 2.25 0 0 0 4.5 0V3.5" />
      <path d="M9.75 10.5h4.5" />
    </svg>
  );
}

function IntestineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5.5 6.5h9a3 3 0 0 1 0 6h-5a3 3 0 0 0 0 6h9" />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3.5C9.2 7.1 6.75 10.1 6.75 13.25a5.25 5.25 0 0 0 10.5 0C17.25 10.1 14.8 7.1 12 3.5Z" />
    </svg>
  );
}

function DumbbellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="5.75" y="7.5" width="2.5" height="9" rx="1" />
      <rect x="15.75" y="7.5" width="2.5" height="9" rx="1" />
      <path d="M3 10v4M21 10v4M8.25 12h7.5" />
    </svg>
  );
}

function BatteryLowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="8" width="16" height="8" rx="2" />
      <path d="M21.5 11v2" />
      <rect x="5.5" y="10.5" width="2" height="3" rx="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6.5 4.5h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6.3L7 19.3v-3.8h-.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
      <path d="M8.5 10h.01M12 10h.01M15.5 10h.01" strokeWidth="2.4" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9.5 3.5h5M10.25 3.5v5.3L5.7 16.9a2.2 2.2 0 0 0 1.9 3.35h8.8a2.2 2.2 0 0 0 1.9-3.35L13.75 8.8V3.5" />
      <path d="M8.2 14.5h7.6" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 3.5h5.5L18 8v10.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
      <path d="M13.5 3.5V8H18M9 12.5h6M9 16h4" />
    </svg>
  );
}

function SignatureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4.5 20h15" />
      <path d="m14.3 4.9 3.6 3.6-8.4 8.4H5.9v-3.6l8.4-8.4Z" />
      <path d="m12.6 6.6 3.6 3.6" />
    </svg>
  );
}

function CalendarCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 3.5V6M17 3.5V6M4.5 9.5h15M6.5 5h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="m9.5 14.5 1.8 1.8 3.4-3.6" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M4 10.5 8 14.5 16 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDownIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}
