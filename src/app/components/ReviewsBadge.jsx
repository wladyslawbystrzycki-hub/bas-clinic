import { CLINIC } from '@/config/clinic';

/**
 * Odznaka z oceną Google — trzy warianty:
 * - variant="vertical" → pionowa „pigułka" przy prawej krawędzi hero (desktop),
 *   tekst obrócony (czyta się od dołu do góry), gwiazdki na dole.
 * - variant="inline"   → kompaktowy rządek gwiazdek + tekst (mobile, na ciemnym tle).
 * - variant="card"     → pozioma biała karta z logo Google (pływająca odznaka na
 *   jasnym tle, np. nad zdjęciem w sekcji „Dlaczego my").
 *
 * Dane z `CLINIC.reviews` (single source of truth). Gdy `url` ustawiony — link do
 * profilu Google; gdy `count` puste — pokazujemy samą ocenę bez liczby opinii.
 */
export default function ReviewsBadge({ variant = 'vertical' }) {
  const r = CLINIC.reviews;
  if (!r || !r.rating) return null;

  const countText = r.count ? `${r.count} ` : '';
  const a11yLabel = `Ocena ${r.rating} na 5 — ${countText}${r.label}`;
  const Wrapper = r.url ? 'a' : 'div';
  const linkProps = r.url
    ? { href: r.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  if (variant === 'card') {
    return (
      <Wrapper
        {...linkProps}
        aria-label={a11yLabel}
        className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5"
      >
        <GoogleG className="h-7 w-7 shrink-0" />
        <span className="block leading-tight">
          <span className="flex items-center gap-1.5">
            <Stars className="flex gap-0.5" starClass="h-3.5 w-3.5 text-amber-400" />
            <span className="text-sm font-bold text-primary-900">({r.rating})</span>
          </span>
          <span className="mt-0.5 block text-xs font-medium text-gray-500">
            {countText}
            {r.label}
          </span>
        </span>
      </Wrapper>
    );
  }

  if (variant === 'inline') {
    return (
      <Wrapper {...linkProps} aria-label={a11yLabel} className="inline-flex items-center gap-2">
        <Stars className="flex gap-0.5" starClass="h-4 w-4 text-amber-400" />
        <span className="text-sm text-primary-200">
          <span className="font-semibold text-white">{r.rating}</span>
          {' · '}
          {countText}
          {r.label}
        </span>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      {...linkProps}
      aria-label={a11yLabel}
      className="flex flex-col items-center gap-3 rounded-full bg-white px-2.5 py-5 shadow-xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5"
    >
      <span className="rotate-180 whitespace-nowrap text-sm font-semibold tracking-tight [writing-mode:vertical-rl]">
        <span className="text-amber-500">({r.rating})</span>{' '}
        <span className="text-primary-700">
          {countText}
          {r.label}
        </span>
      </span>
      <Stars className="flex flex-col gap-1" starClass="h-4 w-4 text-amber-400" />
    </Wrapper>
  );
}

function Stars({ className, starClass }) {
  return (
    <span className={className} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={starClass} />
      ))}
    </span>
  );
}

function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" />
    </svg>
  );
}

/** Wielokolorowe logo „G" Google (do białej karty na jasnym tle). */
function GoogleG({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.4 5.4 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.27 14.29a7.21 7.21 0 0 1 0-4.58V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09Z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75Z" />
    </svg>
  );
}
