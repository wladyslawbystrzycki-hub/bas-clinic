# Audyt SEO — Klinika BAS (bas.clinic)

Dowodowy audyt SEO wg kompendium **DrMax „Dokazatelnoe SEO 2026"** (`.claude/skills/seo-kompendium`), framework **T‑E‑E‑A**. Audyt **read-only** wobec `src/` — produktem są wyłącznie raporty w tym folderze. Naprawy osobno (np. `/seo-fix`).

- Stack: Next.js 16.1.6 / React 19 / SSG · 64 strony · 100% PL · branża **YMYL** (medycyna).
- Zakres: pełny audyt z repo + `npm run build`; punkty wymagające GSC/GA4/Ahrefs/CrUX → **checklisty manualne**.
- Plan faz: `/home/wadysaw/.claude/plans/przeprowad-dok-adny-audyt-projektu-transient-fiddle.md`.

## Postęp faz
| Faza | Zakres | Status | Raport |
|---|---|---|---|
| 0 | Inwentaryzacja, crawl, build + Lighthouse | ✅ done | [00-inwentaryzacja.md](./00-inwentaryzacja.md) |
| 1 | **T** — Trust & Technical | ✅ done | [01-trust-technical.md](./01-trust-technical.md) |
| 2 | On-Page: tytuły (Goldmine) + meta + H1-H6 | ✅ done | [02-onpage-title-naglowki.md](./02-onpage-title-naglowki.md) |
| 3 | Treść + contentEffort + **E** (Experience) + media | ✅ done | [03-tresc-experience.md](./03-tresc-experience.md) |
| 4 | Semantyka, QBST + **E** (Expertise) + spójność | ✅ done | [04-semantyka-qbst-expertise.md](./04-semantyka-qbst-expertise.md) |
| 5 | Linkowanie wewnętrzne / semantyczny kokon | ✅ done | [05-linkowanie-kokon.md](./05-linkowanie-kokon.md) |
| 6 | Local SEO | ✅ done | [06-local-seo.md](./06-local-seo.md) |
| 7 | **E‑E‑A‑T** + **A** (Authoritativeness) + YMYL + off-page | ✅ done | [07-eeat-authority.md](./07-eeat-authority.md) |
| 8 | Synteza, scoring, priorytetyzacja, roadmapa | ✅ done | [08-synteza-roadmapa.md](./08-synteza-roadmapa.md) |

## Scorecard T‑E‑E‑A — FINALNY (po F8)

> Wynik ogólny **≈ 45/100** — profil asymetryczny: fundament techniczny klasy A maskuje zapaść treściowo‑autorską. Wąskie gardło cyklu jakości (`129`) = **proaktywne Q\*** (treść + encja autora + brand), nie reaktywna wydajność (CWV gotowe). Wymiary pomocnicze (On‑Page/Local/Linkowanie) zasilają 4 filary. Pełna kalkulacja + roadmapa: [08](./08-synteza-roadmapa.md).

| Sekcja | Wynik 0–100 | Diagnoza |
|---|---|---|
| **T** — Trust & Technical | **74** (rdzeń techn. ~90 ⬆) | Infrastruktura ~85**→~90** (SSG, sitemap 64=64 + **realny lastmod** z git, **canonical 64/64**, OG **kompletny + og:image/twitter card**, **manifest/ikony/theme-color**, zdjęcia treściowe przez `next/image` (AVIF), CWV desktop 100, CLS=0, **a11y color-contrast 8/8 PASS**, nagłówki +HSTS/Permissions-Policy) − warstwa zaufania ~57 (brak stron prawnych/RODO EA‑10, dwumarkowość EA‑09, Local ~40, 0 disclaimera). ✅ **2 blokery P0 zamknięte 06-24** (T‑05/27, T‑33) + T‑13 + T‑38; ✅ **batch-2 06-30**: lastmod T‑09, a11y T‑23, HSTS/PP T‑30, social-entity T‑31; ✅ **batch-3 07-01**: og:image+twitter T‑26, manifest/ikony/theme-color T‑29, `next/image` EX‑25, T‑17 LCP re-mierzone (przyczyna „video" nieaktualna, CLS 0). **Zintegrowane T pozostaje ~74** — hamuje je niezmieniona warstwa prawna/YMYL (F6/F7), nie rdzeń techniczny. Baza F1 ~78→~90. Pełny: [01](./01-trust-technical.md) |
| **E** — Experience | **28→~30** ⬅ najsłabszy | ⚙️ **Korekta 07-01 (dev domknął część F3):** EX‑09 CTA boilerplate (whyUs 67/67), EX‑20 autor (`AuthorBio`+Person JSON‑LD), EX‑22 mylące „realizacje" (→`ClinicGallery`+`/metamorfozy/` RODO), EX‑23/24/27 częściowo (stomatologia = realne `/uploads` per usługa), EX‑25 `next/image` (AVIF aktywny), Video EX‑30…34 bezprzedmiotowe (0 `<video>`). Image SEO 14→~**40**, Video 38→n/d. **Rdzeń Experience 22 bez zmian** — wciąż blokada na materiałach: 0 liczb z praktyki, głos praktyka ~1/64, brak przed‑po (EX‑16/17/18/21/28 = brief dla kliniki, nie kod). contentEffort 34 / thin 42/64 nadal. Mocne: klaster USG = wzorzec high‑effort. Pełny: [03](./03-tresc-experience.md) |
| **E** — Expertise | **50** | Baza F4 ~54 skorygowana w dół o kokon F5 (~45) i `authorReputationScore=0` F7 (~18), wsparta On‑Page F2 (~82): 0,55×54+0,2×45+0,15×18+0,1×82≈50. siteRadius 74 ✅, lewy kontekst ✅, **USG=wzorzec klasy A** (QBST 86); długi: luki YMYL (powikłania XP‑14/przeciwwskazania XP‑16), Dentist vs masa treści, płaski kokon poza USG. Po adwersaryjnym (22 agenty): 0 P0, 3 FAIL. Pełny: [04](./04-semantyka-qbst-expertise.md) |
| **A** — Authoritativeness | **30** (on‑site; heavy‑external) | Encja organizacji ~48 (✅ /o-nas/+schema+NAP), **autorytet autorów ~18** (❌ 60 stron anonimowych EA‑02, brak Person‑huba/PWZ/`sameAs` EA‑03/06, `authorReputationScore`=0, ServiceSchema bez author/reviewedBy EA‑04), Trust YMYL ~28 (❌ brak stron prawnych EA‑10+RODO, 0 źródeł+disclaimera EA‑08). Profil linkowy/brand = n/d (domena nowa → Checklisty A/B/C). 15 findingów EA; net‑nowych P0=0. Mocne: weryfikowalna encja org (EA‑01) + bio Bogdana. Pełny: [07](./07-eeat-authority.md) |
| _Local SEO (F6, zasila T + A)_ | **~40** (wst.) | Sub‑wyniki: NAP/klaster ~52 (✅ centralizacja `clinic.js`, telefon międzynar.; ⚠️ pusty kod pocztowy LO‑02, dwumarkowość Klinika BAS vs Smile.Expert LO‑03, brak legalName/NIP/GBP w schemacie), schema LocalBusiness ~34 (tylko home, typ `Dentist` wąski, brak geo/hasMap/postalCode/region/priceRange/image; `ServiceSchema.provider.@id` wisi na 60 podstronach LO‑15), geoTopicality ~38 (**45/64 stron komercyjnych ZERO geo w widocznej treści** — geo tylko w meta; USG=wzorzec 16 stron), mapa/brick‑mortar ~25 (**mapa = atrapa/placeholder** LO‑09, brak `aggregateRating`/hiperlokalnego kontentu). 15 findingów LO; **net‑nowych P0=0** (LO‑02/03 zdegradowane P0→P1). Mocne: centralizacja NAP. Workflow 5‑wymiarowy (faza adwersaryjna padła na limicie sesji → **weryfikacja manualna agenta głównego z dostępem do `src/`**, każdy dowód potwierdzony naocznie). Pełny: [06](./06-local-seo.md) |
| _Linkowanie / Semantyczny kokon (F5, zasila E‑Expertise + T)_ | **~45** (wst.) | Sub‑wyniki po adwersaryjnym: matriarchat ~40 (Daughter działa w 3 hubach, Niece zdyscyplinowany ✅; brak Mother‑upward i Sister poza USG), topologia ~44 (2‑tier=poprawny, USG wzorzec; jedyny realny defekt=T‑33), orphany ~40 (6 sierot=1 bug S‑fix, ~20 near‑orphan reachable), LinkValue ~36 (PageRank PŁASKI: Target=PR `/cennik/`, top:bottom 13×, przeciek przez chrome), anchory ~58 (0 generycznych ✅, USG salient‑terms wzorcowo). **LK‑01 nawigacja header poza indeksowalnym DOM** (mega‑menu kliencke → odkrywalność tylko footer+in‑body+sitemap). 14 findingów LK; **net‑nowych P0=0** (jedyny P0=T‑33, własność F1; 6 sierot to jego ofiary). Mocne: USG = działający kokon klasy referencyjnej. Workflow 36 agentów (4 confirmed/24 needs‑adj/2 refuted). Pełny: [05](./05-linkowanie-kokon.md) |
| _On-Page (F2, zasila T + Expertise)_ | **~92** ⬆ (po 06-30) | Mocny fundament: unikalne title/meta, 1×H1, 0 przeskoków hierarchii, Q-style H3 (Passage Indexing). ✅ **Restrukturyzacja URL + marka „Bas Clinic" zamknęły 3 P1** (OG-03 dupTokens USG ×16, OG-07 geo — 67/73 z „Wrocław", OG-14 huby) + OG-04/OG-17. ✅ **batch 06-30**: OG-03 resztkowy (`/rejestracja/` podwójny sufiks), OG-05/06 (boilerplate „- Medycyna estetyczna" ×5), OG-08 (4 ubogie tytuły użytkowe + geo). Zostają tylko opcjonalne ℹ️ (OG-11/19/20). Pełny: [02](./02-onpage-title-naglowki.md) |

## Legenda findingów
`[ID]` Status ✅/⚠️/❌ · Sygnał Google · Dowód (`ścieżka:linia`/metryka) · Rekomendacja · Priorytet P0/P1/P2 · Effort S/M/L. Punkty zewnętrzne → **Checklist manualny**.
Prefiksy ID: `T-` (technical), `OG-` (on-page/goldmine/headings), `EX-` (experience/content), `XP-` (expertise/QBST), `LK-` (linkowanie), `LO-` (local), `EA-` (E-E-A-T/authority), `INV-` (flaga inwentaryzacyjna F0).

## Macierz pokrycia kompendium (budowana inkrementalnie; pełna w F8)
Każdy plik checklisty z `czesc-2…6` + `rozdzial-04` Księgi 2 → odwzorowanie na finding / status OK / checklist zewnętrzny.
| Obszar skilla | Faza | Status pokrycia |
|---|---|---|
| `czesc-6/127` instrumentarium | F0 | ✅ (narzędzia dobrane: crawler, Lighthouse, dataset) |
| `czesc-2` (robots/sitemap/canonical/CWV/URL) | F1 | ✅ (T-01..T-21) |
| `czesc-6/123` (T) | F1 | ✅ (T §1-5 → T-01..T-37) |
| `czesc-5/115-119` (mobile/clutterScore) | F1 | ✅ (T-22..T-25; 116/118-2..6/119 N/A — brak reklam) |
| `czesc-3/048-059` (Goldmine/H1-H6) | F2 | ✅ (OG-01..OG-23; checklist 059 zmapowany 11/11) |
| `czesc-3/060-070` + `czesc-6/124` (E-Experience) + `czesc-5/121-122` | F3 | ✅ (EX‑01..EX‑34; 16 punktów skilla zmapowane 1:1; weryfikacja adwersaryjna 20 agentów) |
| `czesc-3/071-079` + `czesc-6/125` (E-Expertise) | F4 | ✅ (XP‑01..XP‑35; 10 plików skilla zmapowane 1:1; 6× inżynieria odwrotna QBST; weryfikacja adwersaryjna 22 agentów) |
| `ksiega-2/rozdzial-04` (kokon, 36 plików) | F5 | ✅ (LK‑01..LK‑14; 36 plików zmapowane 1:1 — AUDYT→findingi, METODYKA→projekt topologii §4; graf+PageRank deterministyczny; weryfikacja adwersaryjna 36 agentów z dostępem do `src/`) |
| `czesc-5/109-114` (Local) | F6 | ✅ (LO‑01..LO‑15 + checklist 113 zmapowany 1:1; pomiar geoTopicality deterministyczny 64 strony; weryfikacja manualna agenta głównego z dostępem do `src/` — faza adwersaryjna workflow padła na limicie sesji) |
| `czesc-5/105-109` (E-E-A-T) | F7 | ✅ (EA‑01..15; hipoteza odłączonej encji §2; 12/12 taktyk §4 + 6/6 technik §5 zmapowane 1:1; weryfikacja manualna agenta głównego z dostępem do `src/`) |
| `czesc-6/126` (A — Authoritativeness) + `czesc-1/02-01-01` (siteAuthority) | F7 | ✅ (3 filary → Checklisty manualne A/B/C §6; EA‑12/13/14/15) |
| `czesc-4` off-page (080–106, 27 plików) | F7 | ✅ (macierz 27/27 §7 → Checklist A/B/C / strategia wykonawcza; algorytmika 082/083/084 cross‑ref F5/F4) |
| `czesc-6/128-131` strategia (proactive Q*/cykl jakości/AI/kyborg) | F8 | ✅ (rama strategiczna §3 + roadmapa §5 pod metodę kyborga; pełna macierz pokrycia §7) |
| Księga 2 rozdz. 1-3,5-10 (prompt eng./LLM/etyka/analityka) | F8 | ℹ️ metodyka narzędziowa — poza zakresem audytu strony (analityka rozdz.7 zasila checklisty GSC/GA; prompt eng. = sposób wykonania kyborga) |

## Artefakty
- `crawl-dataset.json` — maszynowy zrzut crawl (źródło danych dla F1–F5).
- `lighthouse/` — raporty Lighthouse (8 desktop + 3 mobile) + `_summary.json`.
- `_crawler.mjs`, `_build.log` — narzędzia/logi.
