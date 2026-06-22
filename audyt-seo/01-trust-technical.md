# Faza 1 — T: Trust & Technical (fundament zaufania technicznego)

> Audyt wg `seo-kompendium`: `czesc-6/123` (sekcja T), `czesc-2-fundamentalne-seo/` (robots `03-01`, sitemap `03-02`, kanonikalizacja `03-03`, CWV `04`, URL `05`), `czesc-5/115-119` (mobile/clutterScore), `czesc-6/127` (instrumentarium).
> Dane: `crawl-dataset.json` (64 strony, wyrenderowany HTML prod) + `lighthouse/*.json` + odczyty live z `next start` (localhost:3000) + źródła repo.
> Metoda analizy: `audyt-seo/_f1_analyze.mjs` (read-only). Data: 2026-06-18.
> Legenda: **Status** ✅ ok / ⚠️ do poprawy / ❌ blokujące · **Sygnał** = atrybut/system Google z kompendium · **Dowód** = `ścieżka:linia` lub metryka · **Prio** P0/P1/P2 · **Effort** S/M/L · 📋 = checklist manualny (dane zewnętrzne).

---

## Podsumowanie wykonawcze (T)

Witryna ma **bardzo solidny fundament techniczny**: 100% SSG, 64/64 HTTP 200 bez przekierowań, czysty `robots.txt` nieblokujący CSS/JS, sitemap idealnie pokrywający trasy, self-canonical na 63/64 stronach, CLS=0, perfekcyjne CWV desktop, brak parametrów URL / duplikatów / interstitiali, poprawne nagłówki bezpieczeństwa (część). To minimalizuje ryzyko `clutterScore`, `pandaDemotion`, `isSmearedSignal`.

**Blokery i luki technicznego zaufania (wymagają naprawy):**
- ❌ **`/` (home) bez `rel=canonical` i `og:url`** — jedyna strona bez kanonikalizacji.
- ❌ **6 wewnętrznych linków do `/undefined/` (HTTP 404)** — marnowanie crawl-budżetu + przyczyna 6 stron-sierot.
- ⚠️ **`og:image` brak na 64/64** — zero podglądu social (CTR/brand).
- ⚠️ **Fałszywy `lastmod`** w sitemap (`new Date()` co żądanie) — Google przestaje ufać sygnałowi świeżości.
- ⚠️ **Mobile LCP 2.7–2.9 s** (lab) — powyżej progu „good" 2.5 s → ryzyko `badClicks`/NavBoost.
- ⚠️ **Cienki content** — 47/64 stron < 500 słów (higiena indeksu, `OriginalContentScore`/`pandaDemotion`) → szczegóły F3.
- ⚠️ **Linki social → `smile.expert`** (nie bas.clinic) — niespójność encji brandowej.
- ⚠️ **Brak HSTS/CSP/Permissions-Policy**, brak `manifest`/`apple-touch-icon`/`opengraph-image`.
- ⚠️ **A11y `color-contrast`** na całej próbce Lighthouse (pośrednio UX/isSmartphoneOptimized).

**Wstępny wynik sekcji T: ~78/100** (finalizacja w F8). Fundament A‑klasy, obniżony przez kilka łatwych do naprawy braków on-page (home metadata, og:image, lastmod, broken links).

---

## 1.1. Bezpieczeństwo techniczne i dostępność dla crawlera (`123` §1)

**[T-01] SSL / HTTPS — kontrola `badSslCertificate`** · ✅ (repo) / 📋 (cert prod)
- **Sygnał:** `badSslCertificate`.
- **Dowód:** `metadataBase: new URL('https://bas.clinic')` (`layout.js:16`), `SITE_URL='https://bas.clinic'` (`siteUrl.js:1`, `sitemap.xml/route.js:3`), `robots.js:9` sitemap https. Wszystkie 64 canonical/sitemap = `https://`. Hosting Vercel (TLS automatyczny).
- 📋 **Checklist:** zweryfikować ważność i łańcuch certyfikatu produkcyjnego (SSL Labs / `https://bas.clinic`), brak mixed-content. **Prio P2 · S.**

**[T-02] robots.txt — dyrektywy i dostępność** · ✅
- **Sygnał:** `isRoboted`.
- **Dowód:** live `User-Agent: *\nAllow: /\n\nSitemap: https://bas.clinic/sitemap.xml` (z `src/app/robots.js`). Brak `Disallow`, brak blokady `/_next/`, CSS, JS → crawler renderuje pełną stronę (chroni `richcontentData`/mobile-first). Brak przypadkowego `Disallow: /`.
- **Rekomendacja:** stan poprawny. Opcjonalnie rozważyć jawny `Disallow` dla ewentualnych przyszłych ścieżek technicznych — obecnie zbędne. **Prio —.**

**[T-03] Brak `noindex` na kluczowych stronach** · ✅
- **Sygnał:** `seenNoindex`.
- **Dowód:** `robotsMeta present: []` (0/64 stron ma meta robots) — żadna strona nie jest przypadkowo wykluczona; wszystkie indeksowalne.
- **Rekomendacja:** OK. (Świadomy `noindex` warto dodać tylko gdyby powstały strony techniczne/podziękowań — obecnie brak.) **Prio —.**

**[T-35] Renderowanie / mobile-first / dostęp do treści w HTML** · ✅
- **Sygnał:** `richcontentData`, mobile-first indexing.
- **Dowód:** 100% SSG (`_build.log`: 69/69 ○ Static). Treść obecna w surowym HTML (crawl `wordCount` liczony z statycznego `<body>`, nie z JS). Robots nie blokuje zasobów renderujących.
- **Rekomendacja:** OK — treść nie zależy od client-side JS. **Prio —.**

---

## 1.2. Kanonikalizacja i obsługa duplikatów (`123` §2, `03-03-*`)

**[T-04] Kanonikalizacja hosta (http/https, www/non-www)** · 📋
- **Sygnał:** `forwardingdup`, duplikaty na poziomie hosta.
- **Dowód:** niewweryfikowalne z repo — zależy od konfiguracji domeny w Vercel/DNS. `metadataBase`/sitemap wymuszają `https://bas.clinic` (non-www) jako formę kanoniczną.
- 📋 **Checklist:** wpisać w przeglądarce 4 warianty — `http://bas.clinic`, `https://bas.clinic`, `http://www.bas.clinic`, `https://www.bas.clinic` — i potwierdzić **301 → `https://bas.clinic/…`** (Vercel → Settings → Domains: ustaw `bas.clinic` jako primary, `www` jako redirect). **Prio P1 · S.**

**[T-05] `rel=canonical` per strona — BRAK na home** · ❌
- **Sygnał:** `clutterScore`, `isSmearedSignal`, konsolidacja `CompositeDoc`.
- **Dowód:** `canonical NULL: ["/"]` — strona główna nie ma `<link rel="canonical">`; pozostałe **63/64 self-canonical poprawne** (host+trailing slash+https, `MISMATCH: []`). Przyczyna: `src/app/page.jsx` **nie eksportuje `metadata`** (nie wywołuje `generatePageMetadata`), więc dziedziczy tylko statyczne OG z `layout.js` — bez `alternates.canonical`. Dla porównania `/implanty-zebowe/` ma `<link rel="canonical" href="https://bas.clinic/implanty-zebowe/">`.
- **Rekomendacja:** dodać `export const metadata = generatePageMetadata({ title, description, path: '/' })` w `page.jsx` (doda canonical + `og:url`). **Prio P0 · S.** (→ naprawialne przez `/seo-fix`).

**[T-06] Parametry URL / łańcuchy 301 / duplikaty treści** · ✅
- **Sygnał:** `clutterScore`, `ContentChecksum96`, `isSmearedSignal`.
- **Dowód:** `redirected: []` (0 przekierowań), 0 stron z parametrami (`?`), **0 duplikatów title i meta** (F0), brak nawigacji fasetowej. Architektura SSG nie generuje wariantów URL. Ryzyko `clutterScore` z duplikacji = minimalne.
- **Rekomendacja:** OK. Utrzymać dyscyplinę (brak parametrów filtrów/UTM w linkach wewnętrznych). **Prio —.**

**[T-07] Cienki / zduplikowany content — higiena indeksu** · ⚠️ (→ F3)
- **Sygnał:** `OriginalContentScore`, `pandaDemotion`, „dług algorytmiczny".
- **Dowód:** `wc <500 count: 47` (47/64 stron < 500 słów); najcieńsze: `/kontakt/`=171, `/stomatologia-estetyczna/odbudowa-zebow/`=299, `/regeneratory-komorkowe/`=301, `/leczenie-bezzebia/`=305, `/programy-zabiegowe/`=305. Title/meta unikalne (brak duplikatów), ale objętość niska na stronach komercyjnych YMYL.
- **Rekomendacja:** pełna ocena głębi/unikalności w **F3** (contentEffort). Z perspektywy T: brak twardych duplikatów = brak ryzyka `pandaDemotion` z duplikacji; ryzyko = „thin" per strona. **Prio P1 · L** (content).

---

## 1.3. Sitemap.xml (`03-02-*`)

**[T-08] Kompletność sitemap vs trasy** · ✅
- **Dowód:** `sitemap locCount: 64`; `in crawl NOT in sitemap: []`, `in sitemap NOT in crawl: []` — **0 rozbieżności w obie strony**. Wszystkie 64 strony 200. Rozbieżność indeks↔sitemap < 15% (próg kompendium).
- **Rekomendacja:** OK. **Prio —.**

**[T-09] Fałszywy `<lastmod>`** · ⚠️
- **Sygnał:** świeżość (`FreshnessTwiddler`), best-practice sitemap.
- **Dowód:** `sitemap.xml/route.js:8` → `lastModified: new Date().toISOString()` dla **każdego** URL przy każdym żądaniu. Kompendium (`03-02-03` §1): „jeśli `<lastmod>` aktualizowana automatycznie bez zmiany treści, Google szybko to wykrywa i **przestaje używać tego tagu**". Wszystkie 64 URL dostają identyczny, bieżący znacznik = zerowa wartość sygnału.
- **Rekomendacja:** generować `lastmod` z realnej daty modyfikacji treści (np. `git log -1 --format=%cI` per plik danych / pole `updatedAt` w `services.js`/`data/`). Jeśli brak realnej daty — lepiej pominąć `<lastmod>` niż podawać fałszywy. **Prio P1 · M.**

**[T-10] `<changefreq>` / `<priority>`** · ℹ️
- **Dowód:** `route.js:5-12` ustawia `changefreq` + `priority` (0.6–1.0). Kompendium (`03-02-03` §4): **Google ignoruje `priority`** i w większości `changefreq`.
- **Rekomendacja:** bez szkody, ale martwy sygnał. Można zostawić. **Prio P2 · S.**

**[T-11] Limity / segmentacja / sitemap index** · ✅
- **Dowód:** 64 URL « 50 000, rozmiar « 50 MB → jeden plik wystarcza, sitemap-index zbędny. Namespace poprawny (`xmlns=…/0.9`), `Content-Type: application/xml` (live). Brak URL zablokowanych w robots w sitemap (robots nic nie blokuje).
- **Rekomendacja:** OK. **Prio —.**

---

## 1.4. Struktura URL — cztery zasady (`05-01-*`)

**[T-12] Zasada 1 — czytelność / przewidywalność** · ✅
- **Sygnał:** „information scent", `badClick`.
- **Dowód:** slugi opisowe, PL, myślniki jako separatory (`/implanty-zebowe/`, `/usg/doppler-tetnic-szyjnych/`, `/redukcja-zmarszczek-botox/`). Brak `?id=`, brak podkreśleń, brak `%20`. **Prio —.**

**[T-13] Zasada 2 — spójność strukturalna / hierarchia** · ⚠️ (→ F5/F8)
- **Sygnał:** wkład w `Q*`, rozkład wewnętrznego PageRank.
- **Dowód:** struktura **częściowo płaska**. USG zagnieżdżone (`/usg/{badanie}/`, 15 stron) i część stomatologii (`/ortodoncja/alignery/`, `/chirurgia/usuwanie-zebow/`, `/stomatologia-estetyczna/wybielanie-zebow/`), ale **24 strony medycyny estetycznej i większość usług stom. są na root-poziomie** (`/licowki/`, `/wypelniacze-ha/`) zamiast `/stomatologia/…` lub `/medycyna-estetyczna/…`. Breadcrumbs jednak obecne (BreadcrumbList na wszystkich) — hierarchia jest komunikowana semantycznie.
- **Rekomendacja:** **NIE migrować URL pochopnie** — zmiana slugów resetuje `documentHistory`/PageRank (zob. T-14). Płaskość częściowo kompensuje breadcrumb schema + linkowanie. Docelową topologię (z ew. sub-pillarami `/medycyna-estetyczna/{obszar}/`) projektuje **F5**; decyzja o ewentualnej migracji → **F8** z analizą ryzyka. **Prio P2 · L.**

**[T-14] Zasada 3 — stabilność / `documentHistory`** · ✅ / 📋
- **Dowód:** SSG + stałe slugi + `trailingSlash:true`. Brak dat w URL. Domena prawdopodobnie młoda (świeży repo „Initial commit").
- 📋 **Checklist:** potwierdzić wiek domeny i ewentualną „piaskownicę" (`documentHistory` karze strony „nowe dla wyszukiwarki") — GSC data pierwszego zaindeksowania. Każdą przyszłą zmianę slug → **301**. **Prio P2 · S.**

**[T-15] Zasada 4 — kanonizacja / unikalność** · ✅ (poza home)
- **Dowód:** 1 URL = 1 treść, brak parametrów; jedyny wyjątek to brak self-canonical na home (T-05). **Prio —** (objęte T-05).

---

## 1.5. Core Web Vitals (`04-*`)

**[T-16] CWV Desktop** · ✅
- **Sygnał:** `desktopCwv`.
- **Dowód:** Lighthouse desktop (8 stron): Perf **100**, LCP **0.6–0.7 s**, CLS **0**, TBT **0 ms**, SEO/Best-Practices **100**. Zob. `lighthouse/_summary.json`.
- **Rekomendacja:** OK. **Prio —.**

**[T-17] CWV Mobile — LCP** · ⚠️
- **Sygnał:** `mobileCwv` → wyzwalacz `badClicks`/NavBoost (`04-01`, `04-03-01`).
- **Dowód:** Lighthouse mobile (4G + 4× CPU): LCP **2.9 s** (home), **2.7 s** (implanty), **2.8 s** (medycyna-est.) — powyżej progu „good" (≤2.5 s). Prawdopodobna przyczyna LCP na home: hero `<video src="/hero-bg.mp4">` + brak `poster`; na stronach usług — duży obraz hero. Perf mobile i tak wysoki (95–97), CLS 0, TBT ≤40 ms.
- **Rekomendacja:** dla home dodać `poster` (lekki plakat) do `<video>` i `preload="none"`/`metadata`; rozważyć obraz LCP zamiast wideo na mobile (`media`-switch). Na stronach usług: `priority` + `next/image` AVIF/WebP (formaty już włączone w `next.config.mjs:5`) i poprawny `sizes`. **Prio P1 · M.**

**[T-18] CLS** · ✅
- **Sygnał:** `violatesMobileInterstitialPolicy` (pośrednio), Trust.
- **Dowód:** CLS **0** na wszystkich 8 desktop + 3 mobile. Hero `<video>` ma `object-cover` w kontenerze o stałej wysokości; obrazy przez `next/image`. **Prio —.**

**[T-19] INP / TBT** · ✅ (lab) / 📋 (field)
- **Dowód:** TBT ≤ 40 ms (proxy dobrego INP); mała ilość JS (głównie statyczny HTML, `"use client"` tylko Header/BackToTop/FAQSection).
- 📋 **Checklist:** zweryfikować **INP p75 field** w CrUX/GSC po starcie ruchu (lab ≠ field). **Prio P2 · S.**

**[T-20] TTFB** · ✅ / 📋
- **Sygnał:** `time-to-first-byte-per-doc` (zbierane przez Chrome).
- **Dowód:** strony statyczne serwowane z CDN Vercel → niski TTFB; lokalnie `next start` zwraca natychmiast.
- 📋 **Checklist:** potwierdzić TTFB prod p75 (PageSpeed Insights / CrUX) — cel < 0.8 s. **Prio P2 · S.**

**[T-21] CWV field (CrUX / GSC)** · 📋
- 📋 **Checklist:** GSC → „Core Web Vitals" (mobile+desktop), po zebraniu danych CrUX p75 dla LCP/INP/CLS. Lab (Lighthouse) nie zastępuje pola. **Prio P1 · S.**

---

## 1.6. Mobile SEO / clutterScore / interstitials (`115-119`)

**[T-22] isSmartphoneOptimized — 4 czynniki** · ⚠️
- **Sygnał:** `isSmartphoneOptimized` (tri-state), `maximumFlashRatio`.
- **Dowód:** responsywność OK (Lighthouse mobile 95–97, `meta viewport` 64/64, brak poziomego scrolla w audycie). Brak Flash. **ALE** powtarzalny błąd a11y `color-contrast` na całej próbce (T-23) może obniżać ocenę użyteczności; rozmiar czcionki bazowej i tap-targety (min 48×48 px, font ≥16 px) — niezweryfikowane automatycznie.
- 📋 **Checklist:** ręczny test na fizycznym smartfonie — rozmiar tekstu głównego ≥16 px, tap-targety ≥48 px z odstępem, brak elementów szerszych niż ekran. **Prio P1 · S.**

**[T-23] A11y `color-contrast`** · ⚠️
- **Sygnał:** użyteczność mobile → `badClicks`; pośrednio `isSmartphoneOptimized`.
- **Dowód:** Lighthouse A11y 95–96 — jedyny powtarzalny fail to `color-contrast` na **wszystkich 8** stronach desktop. Prawdopodobnie subtitle `text-secondary-400` na jasnym tle lub szare `text-gray-400` (np. ikony social).
- **Rekomendacja:** podnieść kontrast tekstów akcentowych do ≥4.5:1 (WCAG AA) — w F8 jako element a11y; technicznie dotyczy `globals.css`/klas Tailwind. **Prio P1 · S.**

**[T-24] clutterScore — natrętne elementy / reklamy / autoplay media** · ✅
- **Sygnał:** `clutterScore`, `violatesMobileInterstitialPolicy`, `isSmearedSignal`, `adsDensityInterstitialViolationStrength`.
- **Dowód:** **brak reklam, pop-upów, interstitiali, cookie-bannera** (live grep: 0 markerów `cookie/consent/rodo/gdpr`). Hero `<video autoPlay muted loop playsInline>` — **`muted`** ✅ (autoplay z dźwiękiem byłby triggerem clutterScore; muted jest zgodny). Header `sticky top-0` (nieinwazyjny). Gęstość reklam = 0.
- **Rekomendacja:** stan modelowy z perspektywy clutterScore. **Uwaga poboczna:** brak banera cookie/zgody RODO to plus dla UX/clutterScore, ale potencjalna **luka prawna** (medyczna witryna PL) i brak polityki prywatności jako sygnału Trust → przekazane do **F7** (strony zaufania). **Prio —** (clutter) / P2 (polityka, F7).

**[T-25] Pierwszy ekran mobile (`118-01`)** · ⚠️
- **Sygnał:** wczesny `badClick`, `isSmartphoneOptimized`.
- **Dowód:** header `sticky` (~kilkanaście % ekranu, OK), ale pierwszy ekran home zdominowany przez **hero-wideo dekoracyjne** z H1 nałożonym na overlay; główna treść (zespół, usługi) poniżej zgięcia. Kompendium: hero-obrazy „tylko jeśli niosą treść". H1 jest widoczny w hero (dobrze), ale konsumpcja treści wymaga przewinięcia.
- **Rekomendacja:** zapewnić, że H1 + pierwsze zdanie wartości są czytelne bez przewijania na typowym mobile; ograniczyć wysokość hero. **Prio P2 · S** (UX). Pełna ocena hero/treści → F3.

---

## 1.7. Meta techniczne (`123` kontekst, OG/social)

**[T-26] `og:image` — brak na 64/64** · ⚠️
- **Sygnał:** social CTR, sygnały brandowe (pośrednio).
- **Dowód:** `og.image null count: 64`. `generatePageMetadata` dodaje `images` tylko gdy przekazany `ogImage` (`metadata.js:15-18`) — nigdy nieprzekazywany; brak pliku `src/app/opengraph-image.*` ani globalnego `openGraph.images` w `layout.js`.
- **Rekomendacja:** dodać domyślny `opengraph-image` (1200×630, logo+brand) — Next zaserwuje go automatycznie z `src/app/opengraph-image.png` dla wszystkich stron; opcjonalnie per-usługa. `metadataBase` już ustawiony → ścieżki względne zadziałają. **Prio P1 · M.**

**[T-27] `og:url` — brak na home** · ⚠️
- **Dowód:** `og.url null: ["/"]`. Ta sama przyczyna co T-05 (home bez `generatePageMetadata`). Pozostałe 63 mają `og:url`.
- **Rekomendacja:** naprawia się razem z T-05. **Prio P0 · S** (objęte T-05).

**[T-28] Viewport / twitter / OG bazowe** · ✅
- **Dowód:** `viewport` 64/64, `twitter:card=summary` 64/64, `og:title/description/type=website/locale=pl_PL/site_name=Klinika BAS` obecne (live home + service). `og:type` poprawny `website`.
- **Rekomendacja:** OK. (Przy dodaniu `og:image` rozważyć `twitter:card=summary_large_image`.) **Prio —.**

**[T-29] Favicon / manifest / ikony** · ⚠️ (drobne)
- **Dowód:** `favicon.ico` obecny (`src/app/favicon.ico`, live `<link rel="icon">`). **Brak** `manifest.webmanifest`, `apple-touch-icon`, `icon.svg`, `opengraph-image`.
- **Rekomendacja:** dodać `apple-touch-icon` (180×180) i opcjonalnie `manifest` (PWA/branding). Niski priorytet SEO. **Prio P2 · S.**

**[T-30] Nagłówki bezpieczeństwa** · ⚠️
- **Sygnał:** Trust/Best-Practices.
- **Dowód:** live obecne: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `X-XSS-Protection: 1; mode=block`, `Referrer-Policy: strict-origin-when-cross-origin` (`next.config.mjs:13-16`). **Brak:** `Strict-Transport-Security` (HSTS), `Content-Security-Policy`, `Permissions-Policy`.
- **Rekomendacja:** dodać `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (Vercel często dokłada HSTS — zweryfikować na prod) oraz minimalne `Permissions-Policy`. CSP opcjonalnie (ostrożnie z inline). **Prio P2 · S.** 📋 sprawdzić nagłówki na prod (securityheaders.com).

---

## 1.8. Spam-sygnały i „wina przez skojarzenie" (`123` §5)

**[T-31] Linki wychodzące — `spamrank` + spójność encji** · ⚠️
- **Sygnał:** `spamrank`, spójność encji brandowej (`sameAs`).
- **Dowód:** `outbound domains: {facebook.com:64, instagram.com:64}` — jedyne linki zewnętrzne to social w stopce, na każdej stronie, `rel="noopener noreferrer"`. Domeny renomowane → `spamrank` czysty. **ALE** linki prowadzą do **`facebook.com/smile.expert/` i `instagram.com/smile.expert/`** — profili **innej marki (smile.expert)**, nie Kliniki BAS (treść źródłowo z smile.expert, zob. CLAUDE.md). To niespójność encji: witryna bas.clinic deklaruje cudze profile social jako swoje.
- **Rekomendacja:** podmienić na oficjalne profile **Kliniki BAS** (lub usunąć do czasu założenia). Spójność `sameAs` ważna dla Knowledge Graph/brand (→ F6/F7). Centralizować w `src/config/clinic.js`. **Prio P1 · S.**

**[T-32] UGC — spam w treściach użytkowników** · ✅
- **Sygnał:** `ugcScore`, `ugcDiscussionEffortScore`.
- **Dowód:** brak komentarzy/forum/recenzji UGC w renderze — N/A. Brak ryzyka spamu UGC. **Prio —.**

**[T-33] Linki wewnętrzne do `/undefined/` → 404** · ❌
- **Sygnał:** marnowanie crawl-budżetu, „broken links", `badClick`, przyczyna stron-sierot.
- **Dowód:** `UNDEFINED links` (6×): `/chirurgia/`→`/undefined/` („Usuwanie zębów"), `/ortodoncja/`→`/undefined/` ×3 („Aparaty stałe/Alignery/Aparaty ruchome"), `/stomatologia-estetyczna/`→`/undefined/` ×2 („Wybielanie/Odbudowa zębów"). Live: `/undefined/` zwraca **HTTP 404** (twardy not-found, nie soft-200 — dobrze, że nie soft-404). Karty „Powiązane zabiegi" budują `href` ze złego pola (slug dziecka = `undefined`).
- **Rekomendacja:** naprawić źródło hrefów child-services w szablonie/configu (slug zagnieżdżonych: `ortodoncja/alignery` itd.). Naprawa **jednocześnie** likwiduje 6 stron-sierot (INV-02). Topologia → **F5**; charakter techniczny (broken link/404) → tu. **Prio P0 · S.** (→ `/seo-fix`).

---

## 1.9. Sygnały behawioralne i sankcje — checklisty zewnętrzne (`123` §3-5)

**[T-34] Analiza zaindeksowanych stron (`site:`)** · 📋
- 📋 GSC → „Strony" (Pokrycie): porównać zaindeksowane vs 64 z sitemap; `site:bas.clinic` w Google. Szukać śmieciowych/duplikatów/`/undefined/` w indeksie. Cel: rozbieżność < 15%. **Prio P1.**

**[T-36] BadClicks / NavBoost (behawioralne)** · 📋
- 📋 GA4 → Zaangażowanie → Strony i ekrany: strony z wysokim bounce/krótkim czasem dla ruchu organicznego = kandydaci na `badClicks`. Wymaga ruchu. **Prio P1.**

**[T-37] Ręczne sankcje / problemy bezpieczeństwa** · 📋
- 📋 GSC → „Ręczne działania" i „Problemy z bezpieczeństwem" — potwierdzić brak „czerwonej kartki". **Prio P1 · S.**

---

## Tabela findingów — Faza 1 (T)

| ID | Problem | Status | Sygnał | Prio | Effort |
|---|---|---|---|---|---|
| T-01 | SSL/HTTPS (cert prod) | ✅/📋 | badSslCertificate | P2 | S |
| T-02 | robots.txt poprawny | ✅ | isRoboted | — | — |
| T-03 | brak błędnego noindex | ✅ | seenNoindex | — | — |
| T-04 | kanonikalizacja hosta www/non-www | 📋 | forwardingdup | P1 | S |
| **T-05** | **home bez rel=canonical** | ❌ | clutterScore/CompositeDoc | **P0** | S |
| T-06 | brak param./duplikatów/301-chain | ✅ | clutterScore | — | — |
| T-07 | cienki content 47/64 <500 sł. | ⚠️ | OriginalContentScore/panda | P1 | L |
| T-08 | sitemap kompletny 64=64 | ✅ | — | — | — |
| T-09 | fałszywy lastmod | ⚠️ | freshness | P1 | M |
| T-10 | changefreq/priority (ignorowane) | ℹ️ | — | P2 | S |
| T-11 | limity/segmentacja sitemap | ✅ | — | — | — |
| T-12 | URL czytelność | ✅ | badClick/scent | — | — |
| T-13 | URL hierarchia (płaska część) | ⚠️ | Q*/PageRank | P2 | L |
| T-14 | URL stabilność/documentHistory | ✅/📋 | documentHistory | P2 | S |
| T-15 | URL unikalność | ✅ | — | — | — |
| T-16 | CWV desktop 100 | ✅ | desktopCwv | — | — |
| T-17 | mobile LCP 2.7–2.9 s | ⚠️ | mobileCwv/NavBoost | P1 | M |
| T-18 | CLS=0 | ✅ | — | — | — |
| T-19 | INP/TBT (lab ok) | ✅/📋 | — | P2 | S |
| T-20 | TTFB | ✅/📋 | ttfb-per-doc | P2 | S |
| T-21 | CWV field CrUX | 📋 | mobileCwv | P1 | S |
| T-22 | isSmartphoneOptimized 4 czynniki | ⚠️/📋 | isSmartphoneOptimized | P1 | S |
| T-23 | a11y color-contrast | ⚠️ | UX/badClicks | P1 | S |
| T-24 | clutterScore/interstitials (czysto) | ✅ | clutterScore | — | — |
| T-25 | pierwszy ekran mobile (hero) | ⚠️ | isSmartphoneOptimized | P2 | S |
| T-26 | og:image brak 64/64 | ⚠️ | social CTR | P1 | M |
| T-27 | og:url brak na home | ⚠️ | — | P0 | S |
| T-28 | viewport/twitter/OG bazowe | ✅ | — | — | — |
| T-29 | manifest/apple-touch brak | ⚠️ | — | P2 | S |
| T-30 | HSTS/CSP/Permissions-Policy brak | ⚠️ | Trust | P2 | S |
| T-31 | social → smile.expert (zła encja) | ⚠️ | sameAs/brand/spamrank | P1 | S |
| T-32 | UGC spam (N/A) | ✅ | ugcScore | — | — |
| **T-33** | **6 linków → /undefined/ (404)** | ❌ | crawl-budget/badClick | **P0** | S |
| T-34 | indeks site: | 📋 | pandaDemotion | P1 | — |
| T-36 | badClicks/NavBoost | 📋 | NavBoost | P1 | — |
| T-37 | ręczne sankcje GSC | 📋 | — | P1 | S |

**Bilans:** ✅ 14 · ⚠️ 13 · ❌ 3 (T-05, T-27→T-05, T-33) · ℹ️ 1 · 📋 czyste zewnętrzne: T-34/T-36/T-37 (+ hybrydy).

## Checklisty manualne (dane zewnętrzne) — zebrane dla T
1. **SSL prod** — SSL Labs `bas.clinic`, brak mixed-content (T-01).
2. **Kanonikalizacja hosta** — 4 warianty URL → 301 na `https://bas.clinic/` (T-04).
3. **CWV field** — GSC „Core Web Vitals" + PSI, LCP/INP/CLS p75 mobile (T-21, T-19, T-20).
4. **isSmartphoneOptimized** — test na fizycznym smartfonie: font ≥16 px, tap ≥48 px (T-22).
5. **Indeks** — GSC „Strony" + `site:bas.clinic` (T-34).
6. **BadClicks** — GA4 bounce/dwell organiczny (T-36).
7. **Sankcje** — GSC „Ręczne działania" / „Bezpieczeństwo" (T-37).
8. **Nagłówki** — securityheaders.com (HSTS na prod) (T-30).
9. **Wiek domeny / piaskownica** — GSC data 1. indeksacji (T-14).

## Wkład do scorecardu T‑E‑E‑A
- **T (Trust & Technical) ≈ 78/100** (wstępnie, finalizacja F8). Mocne: SSG, 200/redirecty, robots, sitemap-coverage, canonical 63/64, CWV desktop, CLS, brak clutter/interstitials, bezpieczne nagłówki (część). Obniżenie: home canonical/og:url (P0), 6×/undefined 404 (P0), og:image (P1), lastmod (P1), mobile LCP (P1), thin content (P1), social-entity mismatch (P1), a11y/HSTS/manifest (P2).

## Pokrycie kompendium w F1
`czesc-6/123` (T §1-5: SSL, robots, kanonikalizacja, indeks/thin, behawioralne, spam, UGC) ✅ · `03-01-*` robots ✅ · `03-02-*` sitemap ✅ · `03-03-*` kanonikalizacja/ContentChecksum/clutterScore ✅ · `04-*` CWV (LCP/INP/CLS/TTFB, mobile vs desktop, NavBoost-trigger) ✅ · `05-01-*` URL (4 zasady) ✅ · `115` isSmartphoneOptimized ✅ · `117` clutterScore/isSmearedSignal ✅ · `118-01` pierwszy ekran ✅ · (`116`/`118-02..06`/`119` reklama/manipulacje — N/A: brak reklam na witrynie, odnotowane w T-24).

→ **Koniec Fazy 1.** Wyniki na dysku (`01-trust-technical.md`, `_f1_analyze.mjs`). Zalecane **`/compact`** przed Fazą 2 (On-Page: tytuły Goldmine + meta + nagłówki H1-H6). F2 czyta `crawl-dataset.json` (title/meta/hTree) + `metadata.js`/`layout.js`/`ServicePageTemplate.jsx`.
