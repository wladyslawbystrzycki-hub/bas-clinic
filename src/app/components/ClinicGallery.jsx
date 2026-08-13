'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/**
 * ClinicGallery — pozioma karuzela prezentująca wnętrza kliniki i sprzęt.
 *
 * Inspiracja układem: nagłówek po lewej + strzałki nawigacji po prawej, a pod
 * spodem przewijalny rząd kart ze zdjęciami (z „podglądem" kolejnej karty na
 * krawędzi). Natywne przewijanie (scroll-snap) + przyciski strzałek; strzałki
 * wygaszają się na krańcach, a płynne przewijanie respektuje `prefers-reduced-motion`.
 *
 * Renderuje WŁASNĄ sekcję (jak CTASection) — nie owijać w <Section>.
 * Zdjęcia to licencjonowany stock (lokalnie w /public/uploads/galeria) — podmień na realne foto Bas Clinic.
 */
export default function ClinicGallery({
  id,
  subtitle = 'Galeria',
  title = 'Nasz gabinet i nowoczesny sprzęt',
  description = 'Zajrzyj do Bas Clinic — komfortowe, zadbane wnętrza i nowoczesny sprzęt, dzięki któremu dbamy o Twoje zdrowie, komfort i bezpieczeństwo.',
  images = [],
}) {
  const scrollerRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = scrollerRef.current;
    if (!el) return undefined;
    el.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    return () => {
      el.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, [updateEdges]);

  const scrollByDir = useCallback((dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    const step = card ? card.offsetWidth + 20 /* gap-5 */ : el.clientWidth * 0.85;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: step * dir, behavior: reduce ? 'auto' : 'smooth' });
  }, []);

  if (!images.length) return null;

  return (
    <section id={id} className="bg-cream py-16 sm:py-20 lg:py-24">
      {/* Nagłówek + nawigacja */}
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {subtitle && (
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
                {subtitle}
              </p>
            )}
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
                {description}
              </p>
            )}
          </div>

          <div className="flex shrink-0 gap-3">
            <NavButton
              direction="prev"
              onClick={() => scrollByDir(-1)}
              disabled={atStart}
            />
            <NavButton
              direction="next"
              onClick={() => scrollByDir(1)}
              disabled={atEnd}
            />
          </div>
        </div>
      </div>

      {/* Karuzela — pełna szerokość ekranu na desktopie (full-bleed). Lewy padding
          wyrównuje pierwszą kartę do kolumny nagłówka (max-w-[90rem]), a karty „wychodzą"
          ku prawej krawędzi ekranu, dając premium efekt szerokiego sliderka. */}
      <div className="relative">
        <ul
          ref={scrollerRef}
          aria-label="Galeria zdjęć kliniki"
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pr-8 lg:pl-[max(2rem,calc((100vw-90rem)/2+2rem))] motion-safe:scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((img, i) => (
            <li
              key={img.src || i}
              data-card
              className="shrink-0 basis-[80%] snap-start sm:basis-[46%] lg:basis-[20rem] xl:basis-[22rem]"
            >
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
                <Image
                  src={img.src}
                  alt={img.alt || img.caption || ''}
                  fill
                  sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 20rem, (min-width: 640px) 46vw, 80vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/15 to-transparent"
                />
                {(img.caption || img.kicker) && (
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    {img.kicker && (
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-secondary-300">
                        {img.kicker}
                      </span>
                    )}
                    {img.caption && (
                      <p className="mt-1 font-display text-lg font-semibold text-white">
                        {img.caption}
                      </p>
                    )}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>

        {/* Wygaszenie krawędzi (podpowiedź: można przewijać) */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-cream to-transparent transition-opacity duration-300 ${
            atStart ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cream to-transparent transition-opacity duration-300 ${
            atEnd ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>
    </section>
  );
}

function NavButton({ direction, onClick, disabled }) {
  const isPrev = direction === 'prev';
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? 'Poprzednie zdjęcia' : 'Następne zdjęcia'}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-primary-700 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-gray-200 disabled:hover:bg-white disabled:hover:text-primary-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="h-5 w-5"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isPrev ? 'M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' : 'M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'}
        />
      </svg>
    </button>
  );
}
