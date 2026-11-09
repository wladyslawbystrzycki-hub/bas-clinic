/**
 * Akcenty kart na hubach (oferta, warianty) — jeden motyw dla `OfferCards`
 * i `PricingTiers`, żeby sąsiednie siatki mówiły tym samym językiem, a maskę
 * i rozmiar łaty stroić w jednym miejscu.
 */

/**
 * Łata kropek w rogu karty — echo tła sekcji (`Section dotGrid`) i hero, w miejsce
 * helisy DNA z referencji. Maska wygasza ją ku środkowi karty, żeby nie
 * konkurowała z tytułem. Karta musi mieć `relative overflow-hidden`.
 *
 * @param className - np. reakcja na hover grupy (`group-hover:opacity-100`)
 */
export function CornerDots({ className = '' }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute -right-4 -top-4 h-32 w-32 opacity-60 bg-[radial-gradient(circle_at_center,var(--color-primary-300)_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(circle_at_top_right,black_15%,transparent_70%)] [-webkit-mask-image:radial-gradient(circle_at_top_right,black_15%,transparent_70%)] ${className}`}
    />
  );
}

/**
 * Okrągła grafitowa plakietka z platynową ikoną — jedna monochromatyczna zamiast
 * kolorowych plakietek i numerów z referencji (platyna tylko na ciemnym).
 */
export function IconBadge({ children }) {
  return (
    <span
      aria-hidden
      className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-950 text-secondary-400 shadow-md"
    >
      {children}
    </span>
  );
}
