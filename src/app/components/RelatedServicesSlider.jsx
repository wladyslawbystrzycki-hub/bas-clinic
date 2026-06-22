'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

// Slider kart „Powiązane zabiegi" — używany przez RelatedServices (część kliencka).
//
// Układ: poziomy tor scroll-snap z `grid-flow-col grid-rows-2` → karty układają
// się KOLUMNAMI po 2 (góra/dół). Szerokość kolumny: desktop ~połowa toru → widać
// 2 kolumny = 4 kafelki w siatce 2×2; mobile ~jedna kolumna (2 karty) + podgląd
// następnej. Przewijanie o jeden ekran (clientWidth) = strzałki, kropki, swipe.
// Natywny swipe działa bez JS; strzałki/kropki to progresywne ulepszenie.
export default function RelatedServicesSlider({ services = [] }) {
  const trackRef = useRef(null);
  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    const count = clientWidth ? Math.round(scrollWidth / clientWidth) : 1;
    setPages(Math.max(1, count));
    setActive(clientWidth ? Math.round(scrollLeft / clientWidth) : 0);
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const raf = requestAnimationFrame(sync);
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [sync]);

  const scrollByPage = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({
      left: dir * el.clientWidth,
      behavior: reduce ? 'auto' : 'smooth',
    });
  }, []);

  const scrollToPage = useCallback((i) => {
    const el = trackRef.current;
    if (!el) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: i * el.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
  }, []);

  if (!services.length) return null;

  const showControls = pages > 1;

  return (
    <div>
      <div
        ref={trackRef}
        className="grid snap-x snap-mandatory auto-cols-[88%] grid-flow-col grid-rows-2 gap-5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-[calc(50%-10px)] motion-safe:scroll-smooth"
      >
        {services.map((service) => (
          <div
            key={service.slug || service.id || service.href || service.name}
            className="snap-start"
          >
            <ServiceCard
              name={service.name}
              description={service.description || service.shortDesc}
              href={service.href || `/${service.slug}/`}
            />
          </div>
        ))}
      </div>

      {showControls && (
        <div className="mt-8 flex items-center justify-between gap-4">
          {/* Kropki — wskaźnik strony */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Strony">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Strona ${i + 1}`}
                onClick={() => scrollToPage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active
                    ? 'w-6 bg-primary-700'
                    : 'w-2 bg-primary-200 hover:bg-primary-300'
                }`}
              />
            ))}
          </div>

          {/* Strzałki */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={!canPrev}
              aria-label="Poprzednie"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-primary-700 transition-all hover:border-primary-300 hover:text-primary-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200"
            >
              <ArrowIcon className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={!canNext}
              aria-label="Następne"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-primary-700 transition-all hover:border-primary-300 hover:text-primary-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200"
            >
              <ArrowIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ArrowIcon({ className }) {
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
