'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';

const AUTOPLAY_MS = 6500;
const SLIDE_MS = 700; // musi odpowiadać `duration-700` na torze

/**
 * Karuzela założycieli z auto-odtwarzaniem i NIESKOŃCZONĄ pętlą.
 *
 * Mechanika: tor [klon(ostatni), ...slajdy, klon(pierwszy)]; po dojechaniu na
 * klon następuje cichy „skok" (bez animacji) do realnego slajdu → bezszwowa
 * pętla w obie strony. Jeden slajd = jeden blok założyciela (wizual + treść).
 *
 * Dostępność:
 * - auto-play wstrzymywany na hover/focus oraz jawnym przyciskiem pauzy (WCAG 2.2.2),
 * - wyłączony przy `prefers-reduced-motion` (manualna nawigacja działa, bez animacji),
 * - slajdy poza ekranem są `inert` + `aria-hidden` (Tab/AT nie wchodzą w klony),
 * - strzałki, kropki i pauza są przyciskami z etykietami; swipe na mobile.
 */
export default function FoundersSlider({ founders }) {
  const n = founders.length;

  // Pojedynczy założyciel — bez karuzeli.
  if (n <= 1) {
    return (
      <div className="mx-auto max-w-5xl">{n === 1 && <FounderSlide founder={founders[0]} />}</div>
    );
  }

  return <Carousel founders={founders} />;
}

function Carousel({ founders }) {
  const n = founders.length;
  const slides = [founders[n - 1], ...founders, founders[0]]; // klony brzegowe
  const trackLen = slides.length;

  const [pos, setPos] = useState(1); // indeks w torze (1 = pierwszy realny)
  const [animate, setAnimate] = useState(true);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reduced, setReduced] = useState(false);

  const touchX = useRef(null);

  const activeReal = (pos - 1 + n) % n;
  const isPlaying = !userPaused && !hovered && !focused && !reduced;

  // prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  // Po wylądowaniu na klonie — cichy skok do realnego slajdu (po czasie animacji).
  useEffect(() => {
    if (pos !== 0 && pos !== trackLen - 1) return;
    const id = setTimeout(
      () => {
        setAnimate(false);
        setPos(pos === 0 ? n : 1);
      },
      animate && !reduced ? SLIDE_MS : 0
    );
    return () => clearTimeout(id);
  }, [pos, animate, reduced, n, trackLen]);

  // Po cichym skoku — ponownie włącz animację (gdy klatka jest już wyrenderowana).
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  // Auto-odtwarzanie.
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setAnimate(true);
      setPos((p) => p + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPlaying, pos]);

  const go = useCallback((delta) => {
    setAnimate(true);
    setPos((p) => p + delta);
  }, []);
  const goToReal = (i) => {
    setAnimate(true);
    setPos(i + 1);
  };

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="Karuzela"
      aria-label="Założyciele Bas Clinic"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {/* Okno + tor slajdów */}
      <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(${-pos * 100}%)`,
            transition: animate && !reduced ? undefined : 'none',
          }}
          aria-live={isPlaying ? 'off' : 'polite'}
        >
          {slides.map((founder, i) => {
            const isClone = i === 0 || i === trackLen - 1;
            const isVisible = i === pos;
            return (
              <div
                key={i}
                className="w-full shrink-0"
                role="group"
                aria-roledescription="Slajd"
                aria-label={isClone ? undefined : `${((i - 1 + n) % n) + 1} z ${n}`}
                aria-hidden={!isVisible}
                inert={!isVisible}
              >
                <FounderSlide founder={founder} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Sterowanie */}
      <div className="mt-10 flex items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Poprzedni założyciel"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-700 shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-primary-50 hover:text-primary-900"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5 px-1">
          {founders.map((founder, i) => (
            <button
              key={founder.name}
              type="button"
              onClick={() => goToReal(i)}
              aria-label={`Pokaż: ${founder.name}`}
              aria-current={activeReal === i ? 'true' : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeReal === i ? 'w-7 bg-primary-700' : 'w-2.5 bg-primary-200 hover:bg-primary-300'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Następny założyciel"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-700 shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-primary-50 hover:text-primary-900"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {!reduced && (
          <>
            <span aria-hidden className="mx-1 hidden h-6 w-px bg-gray-200 sm:block" />
            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? 'Wznów pokaz slajdów' : 'Wstrzymaj pokaz slajdów'}
              className="flex h-11 w-11 items-center justify-center rounded-full text-primary-600 ring-1 ring-gray-200 transition-colors hover:bg-primary-50 hover:text-primary-900"
            >
              {userPaused ? <PlayIcon className="h-4 w-4" /> : <PauseIcon className="h-4 w-4" />}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ------------------------------- Slajd ----------------------------------- */

function FounderSlide({ founder }) {
  return (
    <div className="grid items-center gap-12 px-1 lg:grid-cols-2 lg:gap-16">
      <FounderVisual founder={founder} />
      <FounderContent founder={founder} />
    </div>
  );
}

/* ------------------------------- Wizual ---------------------------------- */

function FounderVisual({ founder }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Dekoracyjne pierścienie (przerywane) + akcenty na orbicie */}
      <svg viewBox="0 0 400 400" fill="none" aria-hidden className="absolute inset-0 h-full w-full">
        <circle cx="200" cy="200" r="197" stroke="var(--color-primary-300)" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="1.5 7" strokeLinecap="round" />
        <circle cx="200" cy="200" r="183" stroke="var(--color-primary-200)" strokeOpacity="0.8" strokeWidth="1.5" strokeDasharray="1.5 7" strokeLinecap="round" />
        <circle cx="200" cy="10" r="4" fill="var(--color-primary-400)" />
        <circle cx="66" cy="334" r="3" fill="var(--color-primary-300)" />
      </svg>

      {/* Grafitowy dysk — WTAPIA wycinankę (clip do koła + wygaszenie dołu)
          lub niesie monogram, gdy brak zdjęcia */}
      <div className="absolute inset-[7%] overflow-hidden rounded-full bg-primary-950">
        <span aria-hidden className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,var(--color-primary-800)_0%,transparent_60%)]" />
        <span aria-hidden className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:22px_22px]" />
        {founder.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={founder.image}
            alt={founder.name}
            width={535}
            height={750}
            loading="lazy"
            decoding="async"
            className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom [mask-image:linear-gradient(to_top,transparent_0%,black_24%)] [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_24%)]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="font-display text-6xl font-semibold tracking-wide text-secondary-400">
              {founder.initials}
            </span>
            <span className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-300">
              {founder.name}
            </span>
          </div>
        )}
      </div>

      {/* Pływające odznaki — tylko dla realnych danych */}
      {founder.experience && (
        <StatBadge className="left-0 top-10 lg:-left-4" value={founder.experience} label="lat doświadczenia" />
      )}
      {founder.patients && (
        <StatBadge className="bottom-12 right-0 lg:-right-4" value={founder.patients} label="zadowolonych Pacjentów" icon />
      )}
    </div>
  );
}

function StatBadge({ value, label, className = '', icon = false }) {
  return (
    <div
      className={`absolute z-20 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-gray-100 backdrop-blur ${className}`}
    >
      {icon && (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
          <UserIcon className="h-5 w-5" />
        </span>
      )}
      <div>
        <p className="font-display text-2xl font-bold leading-none text-primary-900">{value}</p>
        <p className="mt-1 text-xs font-medium leading-tight text-gray-500">{label}</p>
      </div>
    </div>
  );
}

/* ------------------------------- Treść ----------------------------------- */

function FounderContent({ founder }) {
  return (
    <div className="max-w-xl">
      {founder.role && (
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
          {founder.role}
        </p>
      )}
      <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {founder.name}
      </h3>

      {founder.description && (
        <p className="mt-5 text-base leading-relaxed text-gray-600">{founder.description}</p>
      )}

      {founder.quote && (
        <figure className="mt-6 border-l-2 border-primary-200 pl-5">
          <blockquote className="text-base italic leading-relaxed text-pretty text-gray-700">
            „{founder.quote}”
          </blockquote>
        </figure>
      )}

      {founder.focusAreas?.length > 0 && (
        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Obszary specjalizacji
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {founder.focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-2.5 text-sm font-medium text-gray-800">
                <CheckBadge />
                {area}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
        <Link
          href="/rejestracja/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-700 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-800"
        >
          <CalendarIcon className="h-4 w-4" />
          Umów wizytę
        </Link>
        <Link
          href="/o-nas/"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-900"
        >
          Poznaj naszą historię
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

/* ----------------------------- Wspólne części ---------------------------- */

function CheckBadge() {
  return (
    <span
      aria-hidden
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700"
    >
      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
        <path d="M4 10.5 8 14.5 16 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* -------------------------------- Ikony ---------------------------------- */

function CalendarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M6.75 3v2.25M17.25 3v2.25M3 9h18M5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25Z" />
    </svg>
  );
}

function ArrowRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 12h16m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

function UserIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

function ChevronLeft({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m15 6-6 6 6 6" />
    </svg>
  );
}

function ChevronRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

function PauseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

function PlayIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5.5v13a1 1 0 0 0 1.52.85l10.5-6.5a1 1 0 0 0 0-1.7l-10.5-6.5A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}
