# bas-clinic

Website for Bas Clinic (bas.clinic) — dental and aesthetic medicine clinic by Bogdan & Iwanna Bas in Wroclaw.

## ⚠️ Zasady pracy (najwyższy priorytet — czytaj przed każdą zmianą)

Pracujesz nad tym projektem jak senior software engineer. Spójność z resztą repo i najlepsze praktyki mają pierwszeństwo nad szybką, łatającą drogą, która zwiększa dług techniczny.

**Filozofia (cytat właściciela):** *„weź to zbadaj dokładnie, i nie używaj łatania błędów bo to będzie pogłębiać dług i właśnie z tym teraz walczymy, róbmy zgodnie z najlepszymi zasadami"*.

### Styl odpowiedzi (ma pierwszeństwo nad domyślnym „pełnym raportem")

- **Wynik najpierw, krótko.** „Dlaczego" tylko gdy nieoczywiste (1–2 zdania).
- **Bez narracji.** Nie streszczaj kontekstu, nie pisz „co zrobię", nie wymieniaj odrzuconych opcji.
- **Diagnoza = root cause + fix w 1–2 liniach.** Pełny ślad analizy tylko na żądanie.
- **Weryfikacja jedną linią** (co przeszło: `npm run build` / `npm run lint`). Nie wklejaj zielonych outputów.
- **Nagłówki tylko gdy realnie pomagają.** Krótka odpowiedź = zwykły akapit.
- **Nieusuwalne:** ostrzeżenia bezpieczeństwa (push / deploy na Vercel) i „nie commitowałem".
- **Szablon podsumowania ukończonego zadania** (limit ~15 linii):
  ```
  <Wynik w 1 linii — co naprawione/dodane, commit, deploy>
  - <zmiana 1, plik/mechanizm w pół linii>
  - <zmiana 2…>
  Weryfikacja: <build / lint / live — jedna linia>.
  ⚠️ <ostrzeżenia / backlog — tylko jeśli są>
  ```

### Reguły inżynierskie

1. **Root cause, nie objaw.** Zrozum dlaczego coś nie działa, zanim naprawisz. Żadnego łatania bez wyraźnej zgody i komentarza WHY: brak połykania błędów, brak `eslint-disable` ani `--no-verify` bez inline-komentarza dlaczego prawdziwa naprawa jest niemożliwa. Sankcjonowany wyjątek już w repo: `// eslint-disable-next-line @next/next/no-img-element` dla intencjonalnego `<img>` — od 2026-07-01 **zawężony** do wycinanek-portretów z przezroczystym tłem, dopasowanych `object-contain`+`max-h` (hero, `FoundersSlider`, `AuthorBio`): tam `next/image` (model width/height/fill) nie daje zysku dla i tak zoptymalizowanego, przezroczystego webp, a psuje swobodne skalowanie/maskę — każde takie miejsce ma inline-WHY. **Prostokątne zdjęcia treściowe w sized-boxach idą przez `next/image fill` + `sizes`** (ClinicGallery, KnowledgeSection, FAQSection, CTASection, AboutSection, BeforeAfter, ServicesAccordion) — aktywny pipeline AVIF/WebP; wszystkie zdjęcia hostowane lokalnie w `/public/uploads/` (brak `images.remotePatterns`).
2. **Czytaj sąsiedztwo, reuse istniejących wzorców.** Nie wprowadzaj nowego wzorca, gdy istnieje sprawdzony. Kanoniczne kształty repo: `ServicePageTemplate` (każda strona usługi), resolvery `getWhyUs`/`getKnowledge`/`getTestimonials`/`getPageAuthor` w `src/config/*.js`, wspólny wzorzec karuzeli (`FoundersSlider`/`RelatedServicesSlider`/`ClinicGallery`). Konwencje spisane w `.claude/rules/components.md`.
3. **Single responsibility.** Komponent/funkcja robi jedną rzecz. >500 linii = sygnał do dekompozycji, ale TYLKO dla komponentów/logiki (np. `BookingFlow.jsx`, `Header.jsx`). Pliki danych/configu (`src/config/whyUs.js`, `services.js`) są celowo długie — NIE dekomponuj ich.
4. **Brak martwego kodu.** Nieużywane importy/zmienne/propsy/eksporty usuwaj od razu. Aktualnie martwe (zero importerów, do usunięcia/pominięcia): `src/lib/data.js`, puste `src/data/`, `src/messages/pl.json`. Żywe i potrzebne: `src/lib/metadata.js`, `src/lib/siteUrl.js`.
5. **Komentarze: tylko WHY, po polsku.** Komentarz wyjaśnia nieoczywiste „dlaczego" (kompromis biznesowy, a11y, intencjonalnie wąska tablica deps), nigdy „co" robi kod. Komentarz typu `// pobierz dane` nad oczywistym kodem — usuwany.
6. **`useEffect` to ostateczność.** Preferuj derived state / `useMemo` / event handler (wzorzec: `useMemo` w `BookingFlow.jsx`, zero zbędnych effectów). Effect tylko dla realnej synchronizacji z systemem zewnętrznym (scroll, `matchMedia`, `setInterval`, `requestAnimationFrame`) — dziś istnieje tylko w `BackToTop`, `FoundersSlider`, `RelatedServicesSlider`, `ClinicGallery`. Effect inline jest OK; wyciągaj do hooka dopiero przy realnym reuse (nie ma katalogu hooków — nie twórz go pod jeden effect). Jeśli celowo zawężasz tablicę deps: jednolinijkowy WHY + `eslint-disable-next-line react-hooks/exhaustive-deps` w tej samej linii (dziś jest zero takich — każdy nowy to red flag wymagający uzasadnienia).
7. **YAGNI — trust internal code.** Bez feature-flagów, fallbacków i walidacji „na wszelki wypadek". Jedyna realna granica walidacji to formularz `BookingFlow` (brak API/backendu; submit przez `mailto:`). Nie projektuj pod hipotetyczne wymagania.

> Świadomie pominięte z oryginalnej propozycji (pochodziła z innego projektu — TS monorepo z bookingiem): reguły o TypeScript/`any`/typach, CSS Modules, `useTranslations`/`@nasz/ui`, oraz precedensy `NotificationContext`/`bookingState.ts`/`booking/hooks/`. Nie istnieją w tym repo — to czysty JS/JSX, Tailwind v4, inline-PL, pojedyncza aplikacja.

## Tech Stack

- Next.js 16 (App Router, SSG)
- React 19
- Tailwind CSS v4 (CSS-based config, `@theme inline` in globals.css — NOT tailwind.config.js)
- Vercel hosting

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build (SSG, ~61 pages)
npm run lint      # ESLint
```

## Code Style

- Polish language throughout all UI text and content
- IMPORTANT: Use Tailwind CSS v4 utility classes only. Theme tokens in `src/app/globals.css` via `@theme inline`
- Server Components by default. `"use client"` only for interactive elements (Header, BackToTop, FAQAccordion, FoundersSlider, RelatedServicesSlider, ClinicGallery, ServicesAccordion, BookingFlow)
- Import alias: `@/` maps to `./src/`
- All URLs use trailing slashes (`trailingSlash: true` in next.config.mjs)
- Clinic data centralized in `src/config/clinic.js` — never hardcode phone/address/email

## Project Structure

```
src/
├── app/
│   ├── globals.css              # Tailwind theme tokens (@theme inline)
│   ├── layout.js                # Root layout (fonts, Header, Footer)
│   ├── page.jsx                 # Homepage
│   ├── components/              # Reusable components
│   │   ├── ServicePageTemplate.jsx  # Template for all service pages
│   │   └── schema/              # JSON-LD structured data
│   ├── stomatologia/            # 18 dental pages
│   ├── medycyna-estetyczna/     # Landing + 8 body area categories
│   ├── btl-exion/ ... /wypelniacze-ha/  # ~24 canonical aesthetic service pages
│   └── wlewy-witaminowe/ kontakt/ cennik/ o-nas/
├── config/
│   ├── clinic.js                # Clinic contact data (single source of truth)
│   ├── services.js              # All services: STOMATOLOGIA_SERVICES + AESTHETIC_SERVICES
│   ├── menuConfig.js            # Navigation tree (consumed by Header/Footer)
│   └── bodyAreas.js             # 8 body areas → service mappings
├── data/                        # JSON content files per service
├── lib/                         # Helpers: data loading, metadata, siteUrl
└── messages/pl.json             # UI strings (i18n-ready)
```

## Key Patterns

### Service Pages

All service pages use `ServicePageTemplate`. To add a new service:
1. Add entry to `STOMATOLOGIA_SERVICES` or `AESTHETIC_SERVICES` in `src/config/services.js`
2. Create `src/app/{slug}/page.jsx` using ServicePageTemplate (see existing pages for pattern)
3. Add to `menuConfig.js` if it should appear in navigation
4. For aesthetic services: add `bodyAreas` array to map to body area categories

### Expert Info Content

`EXPERT_INFO` items in a page's `page.jsx` hold `content` as **JSX**, not an HTML string:
`content: (<><p>…</p><ul><li>…</li></ul></>)`. Allowed elements: `<p> <ul> <ol> <li> <h3> <h4>
<strong> <table>/<tbody>/<tr>/<th>/<td>` + `next/link` for internal links (trailing slash).
`ExpertInfoSection` renders it directly — no `dangerouslySetInnerHTML`, no `className` in content.

### Aesthetic Medicine: Shared Services

Services like "Wypelniacze HA" appear under multiple body areas. Each gets ONE canonical page at `/{slug}/`. Body area pages (`/medycyna-estetyczna/{area}/`) list services via `getAestheticServicesByArea()`.

## Design System

### Design Direction

Premium medical-aesthetic design inspired by top clinic websites (Arbor Dental, GLANZ Aesthetics, Klinika Sharley). The visual identity combines medical trustworthiness with luxury warmth.

Key principles:
- **Clean & spacious**: generous whitespace, editorial typography, no clutter
- **Quiet luxury, light-dominant**: clean light / cool-grey (`bg-cream`) content sections with deep graphite/charcoal as the anchor color for hero, footer and CTA; platinum/silver as a sparing metallic signal on dark
- **Subtle depth**: layered gradients, soft shadows, radial dot patterns in hero sections
- **Shared shapes hero**: ONE `HeroSection` for homepage + service pages (no video). Dark graphite with layered CSS/SVG shapes (radial gradient, blurred blobs, dot grid masked to the right, one platinum hairline arc) + a transparent doctor cut-out (`/public/people/*.webp`) floated on the right, `hidden lg:flex`. Breadcrumbs only on `variant="service"`; CTAs = platinum `/rejestracja/` + outline `tel:`
- **Single-family typography**: Poppins for headings and body (no serif — emphasis via weight/size)
- **CTA convention (monochrome)**: on DARK bg a platinum/silver button (`bg-secondary-500`) with DARK text (`text-primary-950`); on LIGHT bg a graphite button (`bg-primary-600/700 text-white`). Platinum is invisible on light — never use it there

### Color Palette

Custom-designed palette — NOT generic Tailwind presets. Built using Refactoring UI method + OKLCH principles:

- **Primary** (`primary-*`): Cool graphite / charcoal — #1e2225 at 900 (dark body/hero/footer), #5a646b at 500. Hue ~210° (cool grey), very low chroma. Anchor brand color on a light-dominant layout. Used for hero, footer, dark accent bands, headers, links, focus states, graphite CTA on light bg. (500–700 verified ≥4.5:1 on light relief; 800–950 carry white text 13:1+)
- **Secondary** (`secondary-*`): Platinum / silver — cool metallic accent. Used on DARK only: light-silver CTA fill + dark text (10.7:1), subtitle text on dark (10.4:1), hairlines, icons. Platinum on light bg is invisible (1.7:1) — on light use primary graphite instead
- **Relief** (`cream`, `cream-dark`): Cool light grey (#f2f3f4) for the light sections between dark bands — near-neutral, NOT warm cream. Token name kept as `cream` for back-compat
- All colors defined as CSS custom properties in `globals.css` `@theme inline` block

### Typography

- **Body & headings**: Poppins — `font-sans` and `font-display` both map to Poppins (single family, weights 300–700). No serif: emphasize with weight/size, never a second font
- Loaded via `next/font/google` in layout.js (`subsets: ['latin', 'latin-ext']` for Polish glyphs)
- Subtitle text uses `uppercase tracking-[0.2em]` for editorial feel

### Component Patterns

- Cards: `rounded-2xl border border-gray-100 shadow-sm` with `hover:shadow-md hover:border-primary-200`
- Buttons: `rounded-lg` (crisp premium corner — NOT a `rounded-full` pill; pills read as consumer-app). CTA on dark bg = platinum (`bg-secondary-500`) with DARK text (`text-primary-950`); CTA on light bg = graphite `bg-primary-700 text-white`. Radius scale: buttons/chips `rounded-lg`, form controls (inputs, date/slot cells) `rounded-xl`, cards `rounded-2xl`/`rounded-3xl`. `rounded-full` is reserved for genuinely circular elements only (avatars, blobs, icon-only round buttons, step bullets)
- Sections are LIGHT-DOMINANT: alternate `bg-white` / `bg-cream` (cool grey relief) for content; reserve `Section bg="dark"` (graphite) for hero, footer and the occasional accent band. Dark-aware props exist for those: `light` on SectionHeader/ExpertInfoSection/FAQSection, `onDark` on ServiceCard
- Dark sections: `bg-primary-950 text-white` or `bg-primary-700` (CTA)

## Gotchas

- IMPORTANT: Tailwind v4 uses CSS-based config (`@theme inline` in globals.css), NOT `tailwind.config.js`
- Aesthetic services have `bodyAreas` array — one service can belong to multiple areas
- `ServicePageTemplate` import path varies by page depth: `../components/` vs `../../components/`
- `sitemap.xml` is a route handler (`src/app/sitemap.xml/route.js`), not `src/app/sitemap.js`
- Content from smile.expert — verify medical accuracy before publishing
- `trailingSlash: true` — all internal links must end with `/`
- `bg-cream` token now holds cool light-grey relief `--color-cream: #f2f3f4` (near-neutral, not warm cream); defined in globals.css
