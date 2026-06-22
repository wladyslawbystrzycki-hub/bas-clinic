# Faza 0 — Inwentaryzacja, crawl i baseline (build + Lighthouse)

> Audyt SEO bas-clinic wg kompendium DrMax 2026. Metodyka doboru narzędzi: `seo-kompendium/ksiega-1-seo/czesc-6-strategia-i-audyt/127-audyt-instrumentarium.md`.
> Dane: `audyt-seo/crawl-dataset.json` (wyrenderowany HTML, `next start` prod) + `audyt-seo/lighthouse/*.json`.
> Data wykonania: 2026-06-18. Stack: Next.js 16.1.6 (Turbopack), React 19.2.3, SSG.

## 1. Build — stan
- `npm run build` → **exit 0**, kompilacja 4.7 s, TypeScript OK.
- **69 tras** wygenerowanych jako **statyczne (○ prerendered)** — 0 SSR/ISR, 0 dynamicznych. Idealne pod crawl/CWV.
- 64 strony treściowe (`page.jsx`) + `_not-found` + `robots.txt` + `sitemap.xml` (+ favicon).
- Brak ostrzeżeń blokujących w logu (`audyt-seo/_build.log`).

## 2. Inwentarz tras (64 strony treściowe)

| Segment | Liczba | Zawartość |
|---|---|---|
| Strona główna | 1 | `/` |
| Huby (pillar) | 3 | `/stomatologia/`, `/medycyna-estetyczna/`, `/usg/` |
| Strony informacyjne | 4 | `/cennik/`, `/o-nas/`, `/kontakt/`, `/wlewy-witaminowe/` |
| Kokon **stomatologia** | 18 | hub + 17 usług (w tym 6 zagnieżdżonych: `ortodoncja/*`, `chirurgia/usuwanie-zebow`, `stomatologia-estetyczna/*`) |
| Kokon **medycyna estetyczna** | 24 | 24 kanoniczne strony usług (płaskie, `bodyAreas`) |
| Kokon **USG** | 16 | hub + 15 badań (klastry: głowa-szyja, jama brzuszna, piersi, uroginekologia, naczynia, narząd ruchu) |

- **Strony zagnieżdżone (2 segmenty): 21** (15 USG + 6 stomatologia).
- Body-area medycyny estetycznej (`twarz/oczy/usta/...`) **NIE mają stron** — choć `.claude/rules/services-config.md` i `bodyAreas.js` opisują wzorzec `/medycyna-estetyczna/{area}/`. To luka strukturalna (kokon estetyczny niepełny) → **Faza 5**.

## 3. Pokrycie (trasy ↔ sitemap ↔ build) — ✅ spójne
- Filesystem: **64** trasy = Sitemap: **64** `<loc>` — **0 rozbieżności** w obie strony.
- **Wszystkie 64 strony HTTP 200**, 0 przekierowań przy żądaniu z trailing slash, 0 błędów renderu.
- Sitemap: wszystkie URL `https://` + trailing slash, namespace poprawny.
- ⚠️ `lastmod` generowany jako `new Date().toISOString()` przy każdym żądaniu (`sitemap.xml/route.js:8`) → zawsze „teraz", brak realnej daty modyfikacji per strona → **Faza 1**.
- `robots.txt`: `User-agent:* Allow:/` + wskazanie sitemap. Brak blokad → **Faza 1** ocena.

## 4. Baseline on-page (z crawl-dataset.json)

| Sygnał | Wynik | Routing do fazy |
|---|---|---|
| HTTP 200 / brak redirectów | 64/64 ✅ | — |
| `<html lang>` | `pl` na wszystkich ✅ | — |
| Title — obecny / unikalny | 64/64 obecne, **0 duplikatów** ✅ | F2 |
| Title — długość | **31/64 > 60 zn., 17/64 > 65 zn.** ⚠️ (ryzyko ucięcia w SERP) | F2 |
| Meta description — obecny/unikalny | 64/64, 0 duplikatów ✅ | F2 |
| Meta description — długość | 1 strona > 160 zn. ⚠️; brak zbyt krótkich | F2 |
| `rel=canonical` | 63/64 ✅ — **brak na `/` (home)** ❌ | F1/F2 |
| `meta viewport` | 64/64 ✅ (auto Next) — *koryguje wstępną hipotezę o braku* | — |
| `twitter:card` | 64/64 = `summary` ✅ (auto Next z OG) — *koryguje hipotezę o braku* | F2 |
| `og:image` | **0/64** ❌ (brak podglądu social) | F1/F2 |
| `og:url` | brak na `/` (home) ⚠️ | F1 |
| `H1` — dokładnie 1/stronę | 64/64 ✅ | F2 |
| Obrazy bez `alt` | **0** (67 obrazów, wszystkie z alt) ✅ — *koryguje hipotezę* | F3 |
| Word count (mediana / min / max) | **346** / 171 (`/kontakt/`) / 1072 ⚠️ niska mediana | F3 |
| Strony < 300 słów | `/kontakt/` (171), `/stomatologia-estetyczna/odbudowa-zebow/` (299) | F3 |
| Strony 300–500 słów | **45/64** ⚠️ (cienki content na stronach komercyjnych YMYL) | F3 |
| Śr. linków wewn./stronę | 41.8 (mega-menu Header+Footer) | F5 |

### JSON-LD — pokrycie typów (ground truth z renderu)
| Zestaw typów | Strony | Uwaga |
|---|---|---|
| `MedicalOrganization`+`Dentist`+`Person`+`PostalAddress`+`OpeningHoursSpecification` | 1 (`/`) | bogaty schemat org na home ✅ |
| `BreadcrumbList`+`MedicalProcedure`+`MedicalOrganization`+`FAQPage` | 42 | strony usług stom./estet. ✅ |
| `BreadcrumbList`+`ImagingTest`+`MedicalTest`+`MedicalDevice`+`FAQPage` | 15 | badania USG ✅ (bogate) |
| `BreadcrumbList`+`FAQPage`+`ItemList` | 1 (`/usg/`) | hub USG ma ItemList ✅ |
| **tylko `BreadcrumbList`** | 5 | `/cennik/`, `/kontakt/`, `/o-nas/`, **`/stomatologia/`**, **`/medycyna-estetyczna/`** ⚠️ |
- ⚠️ Huby `/stomatologia/` i `/medycyna-estetyczna/` mają **wyłącznie Breadcrumb** — brak `ItemList`/`CollectionPage`/`MedicalSpecialty` (inaczej niż hub USG) → niespójność → **F4/F6**.
- 0 błędów parsowania JSON-LD ✅.

## 5. Core Web Vitals — Lighthouse (lab)

### Desktop (preset desktop) — próbka 8 stron
| Strona | Perf | SEO | Best-Pr | A11y | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| home | 100 | 100 | 100 | 96 | 0.7 s | 0 | 0 ms |
| stomatologia | 100 | 100 | 100 | 96 | 0.6 s | 0 | 0 ms |
| medycyna-estetyczna | 100 | 100 | 100 | 96 | 0.6 s | 0 | 0 ms |
| usg | 100 | 100 | 100 | 96 | 0.7 s | 0 | 0 ms |
| implanty-zebowe | 100 | 100 | 100 | 96 | 0.6 s | 0 | 0 ms |
| stomatologia-estetyczna/wybielanie-zebow | 100 | 100 | 100 | 96 | 0.6 s | 0 | 0 ms |
| kontakt | 100 | 100 | 100 | 95 | 0.6 s | 0 | 0 ms |
| o-nas | 100 | 100 | 100 | 96 | 0.6 s | 0 | 0 ms |

### Mobile (slow 4G + 4× CPU throttle) — próbka 3 stron
| Strona | Perf | LCP | CLS | TBT | TTI |
|---|---|---|---|---|---|
| home | 95 | **2.9 s** | 0 | 30 ms | 3.0 s |
| implanty-zebowe | 97 | **2.7 s** | 0 | 30 ms | 3.0 s |
| medycyna-estetyczna | 96 | **2.8 s** | 0 | 40 ms | 3.2 s |

- **CLS = 0** i **TBT ≤ 40 ms** wszędzie ✅ (znakomicie). SEO/Best-Practices = 100 ✅.
- ⚠️ **Mobile LCP 2.7–2.9 s** — tuż powyżej progu „good" (≤ 2.5 s) w teście laboratoryjnym mobilnym → drobna optymalizacja LCP → **F1**.
- ⚠️ **A11y: `color-contrast`** — jedyny powtarzalny błąd na **wszystkich 8** stronach → **F1** (UX/dostępność, pośrednio `clutterScore`/jakość).
- 📋 **Checklist (dane polowe):** zweryfikować CrUX (LCP/INP/CLS p75 mobile) w GSC „Core Web Vitals" po wdrożeniu — lab ≠ field.

## 6. Flagi podniesione w Fazie 0 (do szczegółowej obróbki w fazach właścicielskich)

| ID wst. | Obserwacja | Dowód | Faza |
|---|---|---|---|
| **INV-01** | **Zepsute linki `/undefined/`** (6×) — karty „Powiązane zabiegi" na `/chirurgia/`, `/ortodoncja/`, `/stomatologia-estetyczna/` linkują do `/undefined/` (anchor np. „Usuwanie zębów Dowiedz się więcej") | crawl-dataset: 6× target `/undefined/` | F1 + F5 |
| **INV-02** | **6 stron-sierot (in-degree 0)** — `ortodoncja/{alignery,aparaty-stale,aparaty-ruchome}`, `chirurgia/usuwanie-zebow`, `stomatologia-estetyczna/{wybielanie-zebow,odbudowa-zebow}` — osiągalne tylko z sitemap. **Przyczyna = INV-01** (link do dziecka degeneruje do `/undefined/`) | in-degree map | F5 |
| **INV-03** | Home `/` bez `rel=canonical`, `og:url`, `og:image`, bez własnej `metadata` (dziedziczy z layout) | crawl: canonical=null | F1/F2 |
| **INV-04** | 31/64 title > 60 zn. (17 > 65) — ryzyko ucięcia | crawl titleLength | F2 |
| **INV-05** | Cienki content: mediana 346 słów, 45 stron 300–500, 2 strony < 300 | crawl wordCount | F3 |
| **INV-06** | Huby `/stomatologia/`, `/medycyna-estetyczna/` bez `ItemList`/CollectionPage (USG hub ma) | JSON-LD map | F4/F6 |
| **INV-07** | Brak `og:image` na 64/64 (social preview) | crawl og.image | F1/F2 |
| **INV-08** | A11y `color-contrast` na całej próbce | Lighthouse | F1 |
| **INV-09** | Mobile LCP 2.7–2.9 s (> 2.5 s lab) | Lighthouse mobile | F1 |
| **INV-10** | 1 meta description > 160 zn.; brak realnego `lastmod` w sitemap | crawl / route.js:8 | F1/F2 |

### Mocne strony potwierdzone w Fazie 0 (do scorecardu)
✅ 100% SSG/statyczne · 64/64 HTTP 200 · 0 duplikatów title/meta · 1×H1/stronę · 63/64 canonical · 100% `lang=pl` · 100% obrazów z alt · CLS=0 · SEO/Best-Practices Lighthouse 100 · bogaty JSON-LD na stronach usług (MedicalProcedure/ImagingTest/FAQ/Breadcrumb) · `viewport`/`twitter:card` auto-obecne.

## 7. Artefakty Fazy 0
- `audyt-seo/crawl-dataset.json` — 64 strony, pełne sygnały on-page + grafy linków (źródło dla F1–F5).
- `audyt-seo/lighthouse/*.json` (8 desktop + 3 mobile) + `audyt-seo/lighthouse/_summary.json`.
- `audyt-seo/_crawler.mjs`, `audyt-seo/_build.log`, `audyt-seo/_server.log`.

→ **Koniec Fazy 0. Zalecane `/compact` przed Fazą 1.** Wyniki utrwalone na dysku; kolejne fazy czytają `crawl-dataset.json` + źródła.
