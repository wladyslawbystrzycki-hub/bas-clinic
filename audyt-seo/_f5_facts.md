# Faza 5 — FAKTY (ground truth z crawl-dataset.json + analizy grafu + źródeł repo)

Serwis: Klinika BAS (bas.clinic), Next.js SSG, 64 strony, branża YMYL (medycyna). Wszystkie URL z trailing slash.

## Wertykały (kokony) i huby
- 4 piony: **Stomatologia** (Target `/stomatologia/`), **Medycyna estetyczna** (Target `/medycyna-estetyczna/`), **USG** (Target `/usg/`), **Wlewy witaminowe** (`/wlewy-witaminowe/`, pojedyncza strona — brak kokonu).
- Strony info: `/o-nas/`, `/cennik/`, `/kontakt/`; `/` (home).
- Stomatologia ma sub-huby (Mixed): `/ortodoncja/`, `/chirurgia/`, `/stomatologia-estetyczna/` (każdy z dziećmi zagnieżdżonymi w URL).

## NAWIGACJA — krytyczne
- Header (mega-menu desktop + menu mobilne) jest komponentem **klienckim**; pozycje rozwijane renderują się TYLKO po interakcji (stan React `openDropdown`/`mobileOpen`). W początkowym DOM (SSR) ich NIE MA.
- Crawler użył `fetch` bez wykonania JS = widok DOM bez interakcji ≈ to, co widzi Googlebot (renderuje JS, ale nie najeżdża/klika). Wniosek: **linki do usług w nawigacji header NIE są w indeksowalnym DOM**. Odkrywalność stron = footer + linki in-body (hub→spoke) + breadcrumbs + sitemap.
- W początkowym DOM z headera są tylko: logo→`/` oraz 7 pozycji top-level: `/stomatologia/`, `/medycyna-estetyczna/`, `/usg/`, `/wlewy-witaminowe/`, `/cennik/`, `/o-nas/`, `/kontakt/`.

## CHROME (linki sitewide, na ≥58/64 stron) — 29 celów
7 top-nav + footer. Footer linkuje: 7 stomatologia (`/implanty-zebowe/`, `/licowki/`, `/stomatologia-estetyczna/`, `/ortodoncja/`, `/higienizacja/`, `/leczenie-zebow/`, `/chirurgia/`), 8 estetyka (`/medycyna-estetyczna/`, `/wypelniacze-ha/`, `/redukcja-zmarszczek-botox/`, `/mezoterapia-iglowa/`, `/stymulatory-tkankowe/`, `/modelowanie-ust/`, `/pilingi-medyczne/`, `/skin-booster/`), 8 USG (`/usg/` + 7 badań: jamy-brzusznej, tarczycy, piersi, nerek, szyi, wezlow-chlonnych, doppler), 4 info (`/o-nas/`, `/cennik/`, `/kontakt/`, `/wlewy-witaminowe/`).
- Footer pokrywa tylko **7 z 24** usług estetycznych i **7 z 20** badań USG. Reszta zależy WYŁĄCZNIE od linków in-body.

## GRAF IN-BODY (kontekstowy, linki poza chrome) — macierz krzyżowa (źródło→cel)
- `/medycyna-estetyczna/` (Target) → **24 spoke estetyczne** (daughter, blok ServiceList). Każdy spoke estetyczny dostaje dokładnie 1 link in-body (z huba). Niektóre spoke pojawiają się 2× (są pod kilkoma obszarami ciała).
- `/usg/` (Target) → badania (daughter) + badanie↔badanie (related[] = sister) = **25 krawędzi in-body**. Bogaty.
- `/stomatologia/` (Target) → 4 liście (`/bonding/`, `/leczenie-bezzebia/`, `/protetyka-korony/`, `/stomatologia-dziecieca/`) + 1 cross-link `/usg/slinianek/`. NIE linkuje in-body do pozostałych usług stom. (są tylko w chrome).
- Sub-huby `/ortodoncja/` (3), `/chirurgia/` (1), `/stomatologia-estetyczna/` (2) → dzieci przez **ZEPSUTY `/undefined/`** (łącznie 6 linków = finding T-33 z F1). Anchory poprawne ("Aparaty stałe Dowiedz się więcej"), ale href = `/undefined/` → 404.
- **24 spoke estetyczne → 0 linków in-body wychodzących** (brak sister, brak daughter). Ślepe zaułki UX.
- **Home `/` → 0 linków in-body poza chrome.** Linkuje tylko do 28 celów chrome (równo). Brak kuratorowanego funnel do Matriarchów.
- Cross-cocoon (Target↔Target): praktycznie 0 (jedyny `/stomatologia/`→`/usg/slinianek/` celuje w Support, nie Target).

## ORPHANY (0 działającego in-body inbound, NIE w footerze) — 6 prawdziwych sierot
`/ortodoncja/aparaty-stale/`, `/ortodoncja/alignery/`, `/ortodoncja/aparaty-ruchome/`, `/chirurgia/usuwanie-zebow/`, `/stomatologia-estetyczna/wybielanie-zebow/`, `/stomatologia-estetyczna/odbudowa-zebow/`.
Odkrywalne TYLKO przez sitemap + klienckie mega-menu (poza DOM) + zepsuty link rodzica. To dokładnie ofiary `/undefined/` (T-33).

## NEAR-ORPHANY (dokładnie 1 in-body inbound = link daughter z huba, brak sister) — ~20
16 spoke estetycznych spoza footera + 4 liście stom. (`/bonding/`, `/leczenie-bezzebia/`, `/protetyka-korony/`, `/stomatologia-dziecieca/`). Pojedyncza, krucha nić; brak sister-linków.

## PageRank wewnętrzny (pełny graf, ×1000) — PŁASKI
- Wszystkie 29 stron chrome ≈ 30.6–30.9 (w tym `/cennik/` = home = Targety; in:63). 
- Home `/` = 30.59 — RÓWNO z `/cennik/`, NIŻEJ niż badania USG. Autorytet home NIE jest skierowany do Matriarchów.
- Spoke estetyczne spoza footera ≈ 2.93 (ctxIn 1). 6 sierot ≈ 2.34 (ctxIn 0).
- Stosunek top:bottom ≈ **13×**. LinkValue NIE skoncentrowany w Targetach (brak efektu „czarnej dziury" Matriarcha — Target ma PR równy stronie `/cennik/`).
- Każda strona (też Targety i sieroty) emituje 28–45 linków chrome na zewnątrz → Targety silnie „przeciekają" LinkValue; Support nie konsolidują wagi w górę (brak upward in-body poza breadcrumb).

## ANCHORY (kontekstowe in-body)
- 60 anchorów kontekstowych, **0 generycznych** ("tutaj"/"czytaj więcej"/"kliknij"). Opisowe (nazwa usługi + tagline + "Dowiedz się więcej").
- Templatowane i powtarzalne (footer = sama nazwa; hub = nazwa+opis). Niska różnorodność, ale nie spam.

## HIERARCHIA URL — NIESPÓJNA
- USG zagnieżdżone `/usg/{badanie}/` ✓. Stom sub-klastry zagnieżdżone `/ortodoncja/{x}/`, `/chirurgia/{x}/`, `/stomatologia-estetyczna/{x}/` ✓.
- ALE spoke estetyczne PŁASKIE w root: `/wypelniacze-ha/`, `/modelowanie-ust/`, ... (nie `/medycyna-estetyczna/{x}/`). Część usług stom. też płaska: `/licowki/`, `/bonding/`, `/implanty-zebowe/`, `/leczenie-zebow/`, `/higienizacja/`, `/leczenie-bezzebia/`, `/protetyka-korony/`, `/stomatologia-dziecieca/`.
- URL nie koduje hierarchii kokonu dla estetyki i części stomatologii.

## KOMPLETNOŚĆ 3-POZIOMOWEJ HIERARCHII
- USG = 2-poziomowy (Target→Support; 6 klastrów `groupOnly` w menu, BRAK materializacji jako Mixed pages).
- Estetyka = 2-poziomowy (Target→24 płaskie spoke; 8 obszarów ciała `groupOnly`, BRAK Mixed/sub-pillar pages — `/medycyna-estetyczna/{obszar}/` nie istnieje; potwierdzone w F4 XP-30).
- Stomatologia = próba 3-poziomowa (Target→sub-huby→dzieci), ale linki daughter zepsute (`/undefined/`).
- Żaden wertyka nie ma kompletnego, działającego 3-poziomowego kokonu matriarchalnego.

## WEJŚCIE Z F4 (do potwierdzenia/rozszerzenia)
- XP-23: entity-first linking tylko USG. XP-31: 24 spoke estetyki bez in-body cross-linków (sister tylko w footerze — UWAGA: footer NIE daje sister, daje chrome inbound). XP-30: brak pod-hubów obszarów. XP-34: brak sister-linków w stomatologii.
