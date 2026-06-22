'use client';

import { useState } from 'react';

/**
 * FAQAccordion — wspólny akordeon FAQ renderowany przez `FAQSection` (strona główna,
 * strony usług, hub USG). Jedno źródło stylu, żeby wygląd nie rozjeżdżał się między widokami.
 *
 * Pozycje rozwijają się płynnie przez `grid-rows-[0fr]→[1fr]` (ten sam wzorzec co
 * ServicesAccordion na mobile); chevron siedzi w okrągłej odznace, która wypełnia
 * się grafitem po otwarciu. Wszystkie pozycje domyślnie zamknięte. `light` = wariant
 * na ciemnym tle (platynowa odznaka). Treść jest w DOM (SSR) — SEO dokłada FAQPageSchema.
 */
export default function FAQAccordion({ items, light = false, className = '' }) {
  if (!items || items.length === 0) return null;

  return (
    <div
      className={`divide-y border-y ${
        light ? 'divide-white/15 border-white/15' : 'divide-gray-300 border-gray-300'
      } ${className}`}
    >
      {items.map((item, i) => (
        <FAQItem key={i} question={item.question} answer={item.answer} light={light} />
      ))}
    </div>
  );
}

function FAQItem({ question, answer, light }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-5 py-5 text-left"
      >
        <span
          className={`text-base font-semibold sm:text-lg ${
            light ? 'text-white' : 'text-primary-900'
          }`}
        >
          {question}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 motion-reduce:transition-none ${
            open
              ? light
                ? 'rotate-180 border-secondary-400 bg-secondary-500 text-primary-950'
                : 'rotate-180 border-primary-700 bg-primary-700 text-white'
              : light
                ? 'border-white/30 text-secondary-300 group-hover:border-white/50'
                : 'border-gray-300 text-primary-700 group-hover:border-primary-400'
          }`}
        >
          <ChevronDownIcon />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`text-base leading-relaxed ${
              light ? 'text-primary-100' : 'text-gray-600'
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
