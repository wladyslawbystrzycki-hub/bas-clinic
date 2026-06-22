# Faza 5 — Linkowanie wewnętrzne / Semantyczny kokon

**Audyt:** Klinika BAS (bas.clinic) · Next.js 16 SSG · 64 strony · YMYL (medycyna)
**Skill:** `ksiega-2-prompt-engineering/rozdzial-04-semantyczny-kokon/` (36 plików, DrMax „Dokazatelnoe SEO 2026")
**Metoda:** graf linków zbudowany deterministycznie z `crawl-dataset.json` (wyrenderowany HTML, nie inferencja z JSX) + analiza repo (`menuConfig.js`, `Header.jsx`, `Footer.jsx`, `ServicePageTemplate.jsx`, `ServiceList.jsx`, `services.js`) + workflow 36 agentów (5 wymiarów → weryfikatorzy adwersaryjni z dostępem do `src/` → projekt topologii docelowej).
**Read-only wobec `src/`.** Produkty: ten raport + `_f5_graph.json` (graf, PageRank, orphany) + `_f5_workflow.json` (50 findingów surowych + 30 werdyktów) + `_f5_facts.md` (ground truth).

> **Dyscyplina dedupu (po F1/F4):** wiele surowych findingów workflow to ten sam defekt widziany z 5 wymiarów oraz duble wcześniejszych faz. Konsoliduję do **14 kanonicznych findingów LK‑01…LK‑14**. Defekt `/undefined/` jest **własnością T‑33 (F1)** — liczony **raz**, tu opisany jako jego konsekwencja kokonowa. Luki sister/sub‑pillar odsyłają do XP‑30/31/33/34 (F4). **Net‑nowych P0 w F5: 0** (jedyny P0 = T‑33, już skatalogowany).

---

## 0. Metoda i podstawa danych

**Graf linków.** Z każdej z 64 stron wyekstrahowano `internalLinks` (href + anchor), znormalizowano (trailing slash, bez query/hash), zdeduplikowano per‑strona. Zbudowano macierz sąsiedztwa, in/out‑degree, PageRank (damping 0.85, 100 iteracji) oraz macierz krzyżową między wertykałami.

**Rozróżnienie chrome vs in‑body.** Kluczowe dla kokonu: linki sitewide („chrome": footer + top‑nav) są przez Google traktowane jako boilerplate nawigacyjny i mają niższą wagę niż linki kontekstowe w treści (skill `04-05-04`: „Google obniża wagę linków w elementach sztywnej nawigacji"). Linki obecne na ≥58/64 stron sklasyfikowano jako **chrome** (29 celów). Reszta = **kontekstowe (in‑body)**.

**Ustalenie krytyczne — nawigacja header poza indeksowalnym DOM.** `Header.jsx` to komponent kliencki; mega‑menu (desktop) i menu mobilne renderują pozycje rozwijane **tylko po interakcji** (stan React `openDropdown`/`mobileOpen`). W początkowym DOM (SSR) **ich nie ma**. Crawler użył `fetch` bez wykonania JS = widok DOM bez interakcji ≈ to, co indeksuje Googlebot (renderuje JS, ale nie najeżdża kursorem). **Wniosek: linki do usług w nawigacji header nie są w indeksowalnym DOM.** Z headera w DOM są tylko: logo→`/` + 7 pozycji top‑level. Odkrywalność stron usług opiera się **wyłącznie** na: footerze (29 celów chrome) + linkach in‑body (hub→spoke) + breadcrumbach + sitemap. → **LK‑01**.

---

## 1. Architektura kokonu — stan faktyczny

4 wertykały (kokony) + strony info + home. Mapowanie na model 3‑poziomowy skilla (Target / Mixed / Support — `04-02`):

| Wertyk | Target (Poziom 1) | Mixed (Poziom 2) | Support (Poziom 3) | Stan tier |
|---|---|---|---|---|
| **Stomatologia** | `/stomatologia/` | `/ortodoncja/`, `/chirurgia/`, `/stomatologia-estetyczna/` (sub‑huby) | 3+1+2 dzieci zagnieżdżone + 8 usług płaskich | **Próba 3‑tier — drugi skok ZEPSUTY** (`/undefined/`) |
| **Medycyna estetyczna** | `/medycyna-estetyczna/` | — (8 obszarów ciała tylko jako `groupOnly` w menu; `/medycyna-estetyczna/{obszar}/` nie istnieje) | 24 płaskie spoke w root | **2‑tier płaski** |
| **USG** | `/usg/` | — (6 klastrów tylko `groupOnly`) | 20 badań `/usg/{x}/` | **2‑tier (najzdrowszy)** |
| **Wlewy witaminowe** | `/wlewy-witaminowe/` | — | — | 1 strona, brak kokonu |

**Korekta względem hipotezy wstępnej:** wszystkie trzy huby‑Targety (`/stomatologia/`, `/medycyna-estetyczna/`, `/usg/`) **poprawnie linkują in‑body w dół (daughter)** do swoich usług/sub‑hubów przez `ServiceList`. Warstwa hub→spoke **działa**. Defekty leżą gdzie indziej: (a) drugi skok sub‑hub→dziecko w stomatologii (T‑33), (b) brak linków **w górę (Mother)** i **w bok (Sister)**, (c) płaski rozkład LinkValue.

**Uwaga o 2‑tier:** brak warstwy Mixed **nie jest sam w sobie defektem** — 2‑poziomowy hub‑and‑spoke (jak USG) to kompletna, poprawna architektura (potwierdzone w F4 jako wzorzec XP‑32 ✅). Trzeci poziom to wybór, nie wymóg.

---

## 2. Dane deterministyczne (graf)

### 2.1. PageRank wewnętrzny — PŁASKI (×1000)

| Pozycja | Strona | PR | in | ctxIn |
|---|---|---|---|---|
| Top | `/medycyna-estetyczna/` (Target) | 30.93 | 63 | — |
| | `/usg/` (Target) | 30.79 | 63 | — |
| | `/stomatologia/` (Target) | 30.72 | 63 | — |
| | `/usg/doppler/`, `/usg/piersi/`… | 30.65 | 63 | — |
| | **`/` (home)** | **30.59** | 63 | 0 |
| | **`/cennik/`** | **30.59** | 63 | 0 |
| Bottom | spoke estetyczne spoza footera (×16) | 2.93 | 1 | 1 |
| | **6 sierot (sub‑huby stom)** | **2.34** | 0 | 0 |

**Diagnoza:** stosunek top:bottom ≈ **13,2×**. Wszystkie 29 stron chrome leżą w wąskim paśmie 30,6–30,9 — **Target ma PR równy stronie `/cennik/`**. Brak efektu „czarnej dziury" Matriarcha (`04-01-03`): autorytet nie koncentruje się w węzłach filarowych. Home (zwykle najsilniejsza strona) = `/cennik/`, **niżej** niż badania USG — jej autorytet rozlewa się równo na 28 celów chrome zamiast zasilać 4 Targety. Każda strona (też Targety i sieroty) emituje 28–45 linków chrome → LinkValue stale „przecieka" na zewnątrz zamiast się akumulować.

### 2.2. Graf in‑body (kontekstowy) — macierz krzyżowa (źródło → cel)

| z ↓ \ do → | stoma | estet | estet‑hub | usg | inne |
|---|---|---|---|---|---|
| **stoma** | 4 | 0 | 0 | 1 | 0 |
| **estet‑hub** | 0 | 16 | 1 | 0 | 0 |
| **usg** | 0 | 0 | 0 | **25** | 0 |
| **home** | 0 | 0 | 0 | 0 | 0 |
| **estet (spoke)** | 0 | 0 | 0 | 0 | 0 |

(Wartości po odjęciu chrome; cele chrome — np. sub‑huby stom, badania USG z footera — są maskowane, dlatego stoma→stoma=4 to liście, a faktyczne pokrycie hub→spoke jest pełniejsze przez chrome.) Czytelne wzorce: **USG = bogaty mesh (25 krawędzi: daughter + sister `related[]`)**; estet‑hub→24 spoke (daughter); **24 spoke estetyczne i home = 0 wychodzących in‑body**.

### 2.3. Orphany i near‑orphany

- **6 prawdziwych sierot** (0 działającego in‑body inbound, poza footerem): `/ortodoncja/aparaty-stale/`, `/ortodoncja/alignery/`, `/ortodoncja/aparaty-ruchome/`, `/chirurgia/usuwanie-zebow/`, `/stomatologia-estetyczna/wybielanie-zebow/`, `/stomatologia-estetyczna/odbudowa-zebow/`. Odkrywalne **tylko** przez sitemap + klienckie mega‑menu (poza DOM) + zepsuty link rodzica (`/undefined/`). **= ofiary T‑33.**
- **~20 near‑orphanów** (1 in‑body inbound = link daughter z huba, brak sister, brak Mother): 16 spoke estetycznych spoza footera + 4 liście stom (`/bonding/`, `/leczenie-bezzebia/`, `/protetyka-korony/`, `/stomatologia-dziecieca/`). Reachable, ale na jednej kruchej nici.
- **Footer** pokrywa tylko **7 z 24** usług estetycznych i **7 z 20** badań USG — reszta zależy wyłącznie od in‑body.

### 2.4. Anchory

60 anchorów kontekstowych, **0 generycznych** („tutaj"/„czytaj"/„kliknij") ✅. Opisowe (nazwa + tagline). USG dodatkowo: linki sister osadzone w prozie nasyconej Salient Terms (wzorcowy Surrounding Text, `04-05-02`). Słabość: **niska różnorodność** — templatowy sufiks „Dowiedz się więcej" + identyczny mikrokontekst `shortDesc` na wszystkich linkach `ServiceList`.

---

## 3. Findingi (LK‑01 … LK‑14)

> Format: **[ID]** Tytuł · Status ✅/⚠️/❌/ℹ️ · Sygnał Google · Skill · Dowód · Rekomendacja · **Prio** (post‑adwersaryjny) · Effort.

### ❌ LK‑01 · Nawigacja header poza indeksowalnym DOM — odkrywalność na footerze + in‑body
**Status** ❌ · **Sygnał** rendered‑DOM crawlability / onsiteProminence · **Skill** `04-05-04` (waga linków nawigacyjnych) · **Prio P1** · **Effort M** (poza zakresem read‑only — to zmiana kodu)
**Dowód:** `Header.jsx` — mega‑menu (`{openItem?.megaMenu && <MegaMenu/>}`) i menu mobilne (`{mobileOpen && …}`) renderują się wyłącznie po interakcji klienckiej. Crawl (`fetch` bez JS) potwierdza: każda strona emituje z headera tylko logo→`/` + 7 top‑level. Wszystkie głębokie linki do usług w nawigacji **nie istnieją w DOM, który widzi Googlebot bez najechania**.
**Rekomendacja:** wyrenderować listę linków mega‑menu w DOM niezależnie od stanu klienta (np. `<details>`/CSS‑only disclosure, albo SSR ukryta wizualnie lista `<nav>` z pełnym drzewem). Przywróci odkrywalność przez nawigację (dziś: footer + in‑body + sitemap). **To finding strukturalny — fundament wszystkich pozostałych** (cały graf in‑body niesie odkrywalność, bo nawigacja jej nie niesie). *Werdykt sceptyka: confirmed („Nawigacja header nie zasila odkrywalności — DOM bez linków do usług").*

### ❌ LK‑02 · 6 sierot w sub‑hubach stomatologii (konsekwencja kokonowa T‑33) — **DUBEL T‑33 (F1)**
**Status** ❌ · **Sygnał** crawlability / brokenLink / daughter edges · **Skill** `04-05-01` (Daughter), `04-07-04` (Redirect/200‑OK audit) · **Prio P0 (własność T‑33 — liczone raz)** · **Effort S**
**Dowód (zweryfikowany w `src/` przez weryfikatorów):** `ServiceList.jsx:11` buduje `href={`/${service.slug}/`}`, a `CHILD_SERVICES` w `ortodoncja/page.jsx` (3), `chirurgia/page.jsx` (1), `stomatologia-estetyczna/page.jsx` (2) definiują obiekty z polem `href`+`name`+`description`, **bez `slug`** → `slug===undefined` → `href=/undefined/`. `npm run build` + inspekcja statycznego HTML: dokładnie 6× `/undefined/` (404). Drugi skok daughter (sub‑hub→dziecko) jest fizycznie zepsuty → 6 prawdziwych sierot (PR 2.34, ctxIn 0).
**Rekomendacja:** **fix należy do T‑33** — w `ServiceList.jsx` preferować `service.href` gdy istnieje (fallback `/${service.slug}/`), LUB dodać `slug` do 6 obiektów dzieci. Jeden fix S naprawia 6 linków daughter + likwiduje 6 sierot. (Bonus: te karty mają też pusty opis — `ServiceList` czyta `shortDesc`, dzieci podają `description`; pełny fix ujednolica kształt.) *Werdykt sceptyka: needs‑adjustment → „treść techniczna w pełni potwierdzona; korekta = framing/dedup z T‑33, jeden root cause, jeden fix".*

### ⚠️ LK‑03 · Brak linków Mother (Support→Target w górę) poza breadcrumbami
**Status** ⚠️ · **Sygnał** LinkValue consolidation / onsiteProminence · **Skill** `04-05-01` (Mother = najważniejszy typ), `04-01-03` · **Prio P1** · **Effort M**
**Dowód:** żaden Support nie emituje kontekstowego linku **w górę** do swojego Targeta. Spoke estetyczne → 0 wychodzących in‑body; badania USG linkują poziomo (sister) i nie w górę; jedyna ścieżka w górę to breadcrumb (chrome, niska waga). Mother to wg skilla najważniejszy typ — jego brak oznacza, że **Matriarchowie nie są zasilani od dołu**, co bezpośrednio tłumaczy płaski PageRank (LK‑04).
**Rekomendacja:** w body każdej strony Support 1–2 zdania z kontekstowym linkiem w górę do Targeta (np. `/wypelniacze-ha/`→`/medycyna-estetyczna/`, `/usg/tarczycy/`→`/usg/`), z anchorem zawierającym encję pillara. Uruchamia przepływ LinkValue do Matriarcha. *Werdykt sceptyka: needs‑adjustment → P1 (realny brak najważniejszego typu, ale nie blokuje indeksacji).*

### ⚠️ LK‑04 · Płaski PageRank — Targety nie pełnią roli „czarnej dziury" LinkValue
**Status** ⚠️ · **Sygnał** internal PageRank / siteFocusScore / linkEquityLeak · **Skill** `04-01-03` (matematyka LinkValue), `04-02-01` (Matriarch akumuluje wagę) · **Prio P1** · **Effort L**
**Dowód:** §2.1 — 29 stron chrome w paśmie 30,6–30,9; Target = PR `/cennik/`; top:bottom 13,2×. Każda strona emituje 28–45 linków chrome → Targety „przeciekają" LinkValue zamiast akumulować. Dla YMYL, gdzie siła strony filarowej warunkuje konkurowanie na trudnych frazach, to istotna wada.
**Rekomendacja:** (1) skierować in‑body upward (LK‑03) i home‑funnel (LK‑08) do 4 Targetów; (2) **po** zbudowaniu in‑body (P1/P2) rozważyć odchudzenie footera do hubów+sub‑pillarów (LK‑13), by ograniczyć rozpraszanie. Cel: wyraźne maksimum PR na 4 Matriarchach. *Werdykt sceptyka: needs‑adjustment → P1 (realny wzorzec, ale „płaski PageRank" jest częściowo nieodłączny od konwencji sitewide footer SSG; nie zero‑koncentracji — 13× to wciąż gradient).*

### ⚠️ LK‑05 · Sister‑linki istnieją tylko w USG; estetyka i stomatologia = 0 — **rozszerza XP‑31/XP‑34 (F4)**
**Status** ⚠️ · **Sygnał** contextual relevance / intra‑cluster Sister edges / topical mesh · **Skill** `04-05-01` (Sister), `04-05-02` · **Prio P1** · **Effort M**
**Dowód:** macierz §2.2 — `usg→usg = 25` (daughter + sister `related[]`). Estetyka: 24 spoke → 0 wychodzących in‑body. Stomatologia: brak sister między usługami. Mechanizm `related[]` istnieje w `USG_SERVICES`, **brak go** w `AESTHETIC_SERVICES` i `STOMATOLOGIA_SERVICES`.
**Rekomendacja:** dodać `related[]` (wzór USG) i renderować blok „Powiązane zabiegi" na spoke, linkując **tylko w obrębie jednego klastra/obszaru** (reguła pojedynczego klastra Mixed — `04-05-01`): estetyka grupowana po obszarze + wspólnym składniku/wskazaniu (HA, botoks, mezoterapia, regeneracja); stomatologia po klastrach (ortodoncja / estetyczna / protetyka / profilaktyka). USG = szablon. *Werdykt sceptyka: needs‑adjustment (jeden weryfikator P2 jako „marginalny wpływ na siteFocus", drugi P1 ze względu na skalę 1/3 serwisu i istniejący wzorzec USG) → przyjmuję **P1**.*

### ⚠️ LK‑06 · 24 spoke estetyczne (+ liście stom) = ślepe zaułki (0 wychodzących in‑body)
**Status** ⚠️ · **Sygnał** dead‑end pages / onsiteProminence / anchor diversity · **Skill** `04-04-03` (brak ślepych zaułków), `04-05-02` · **Prio P1** · **Effort M**
**Dowód:** potwierdzone w `src/` — wszystkie 24 spoke estetyczne: `<a href>` in‑body = 0, `childServices` = 0 (mimo że `ExpertInfoSection` renderuje `dangerouslySetInnerHTML`, więc linki są technicznie możliwe). 8 płaskich usług stom również 0 wychodzących. Razem ~32 strony bez przepływu kontekstu dalej w kokonie i bez anchorów wzbogacających sąsiadów.
**Rekomendacja:** rozwiązuje się **razem z LK‑05** (sister) + LK‑03 (Mother) — każdy spoke z 0 ctxOut zyskuje 1 Mother + 3‑4 sister, ctxIn rośnie z 1 do 3‑4, znika stan near‑orphan. *Werdykt sceptyka: confirmed („inny zbiór stron i inny kierunek krawędzi niż T‑33; nie dubel; P1 zasadny — skala 1/3 stron, kontrast wzorca USG").*

### ⚠️ LK‑07 · ~20 near‑orphanów z jednym kruchym in‑body inboundem
**Status** ⚠️ · **Sygnał** onsiteProminence / link redundancy · **Skill** `04-07-02` (orphan/luki) · **Prio P1** · **Effort M**
**Dowód:** §2.3 — 16 spoke estetycznych spoza footera (PR 2.93, ctxIn 1) + 4 liście stom. Każdy wisi na jednym linku daughter z huba; brak redundancji odkrywalności i brak sister.
**Rekomendacja:** jak LK‑05/LK‑06 (sister + Mother dają redundancję). Dla 16 spoke spoza footera rozważyć też włączenie do nowych sub‑pillarów (LK‑09) jako dodatkowy inbound. *Werdykt sceptyka: needs‑adjustment → P1 (reachable, nie blokuje indeksacji, ale krucha topologia).*

### ⚠️ LK‑08 · Home nie kieruje autorytetu do Matriarchów (brak kuratorowanego funnel)
**Status** ⚠️ · **Sygnał** homepageEquityFlow / onsiteProminence · **Skill** `04-01-03` · **Prio P1** · **Effort S**
**Dowód:** home → 0 linków in‑body poza chrome; linkuje równo do 28 celów chrome; PR home = `/cennik/`. W systemie matriarchalnym home powinien być głównym źródłem przepływu do 4 Targetów.
**Rekomendacja:** dodać na `/` kuratorowaną sekcję z 4 wyróżnionymi, kontekstowymi linkami in‑body do 4 Targetów (z opisowymi anchorami). Koncentruje PR home w Matriarchach. *Werdykt sceptyka: jeden instancja refuted jako dubel, druga needs‑adjustment → P1; przyjmuję **P1** (jedna realna akcja).*

### ⚠️ LK‑09 · Brak warstwy Mixed (sub‑pillar) — kokon 2‑poziomowy w estetyce i USG — **DUBEL XP‑30 (F4); ostrożnie**
**Status** ⚠️ · **Sygnał** 3‑tier completeness / siteFocusScore · **Skill** `04-02-02` (Mixed), `04-04-01` · **Prio P2** · **Effort L**
**Dowód:** estetyka — 8 obszarów ciała tylko `groupOnly` w menu; `src/app/medycyna-estetyczna/` zawiera **tylko** `page.jsx` (0 podkatalogów `{obszar}/` — potwierdzone). USG — 6 klastrów `groupOnly`, brak `/usg/{klaster}/`. Logika danych istnieje (`getAestheticServicesByArea`, `getUsgServicesByCluster`).
**Rekomendacja (z zastrzeżeniem YMYL):** materializacja sub‑pillarów (`/medycyna-estetyczna/{obszar}/`, `/usg/{klaster}/`) dałaby prawdziwy 3‑tier + Mother dla spoke. **ALE** — zgodnie z werdyktem XP‑30 (F4) i sceptykiem F5 — to **ryzyko thin‑content/kanibalizacji** w YMYL, jeśli strony obszarów nie dostaną unikalnej, wartościowej treści (Information Gain, `04-06-04`). 2‑tier hub‑and‑spoke jest poprawny (USG = wzorzec). **Nie traktować jako pilne; warunek wstępny: realna treść per sub‑pillar.** *Werdykt sceptyka: needs‑adjustment → P2 („2‑tier nie jest defektem; rekomendacja 8 stron sprzeczna z przyjętym XP‑30; ryzykowna w YMYL").*

### ℹ️ LK‑10 · Niespójna hierarchia URL (estetyka + część stom płaskie w root)
**Status** ℹ️ · **Sygnał** topic isolation w URL / siteFocusScore · **Skill** `04-02-03` (zagnieżdżenie `/root/sub/support/`), `04-04-03` (izolacja tematu) · **Prio P2** · **Effort L (ryzykowny)**
**Dowód:** USG `/usg/{x}/` ✅, sub‑klastry stom `/ortodoncja/{x}/` ✅; ale 24 spoke estetyczne płaskie w root (`/wypelniacze-ha/`) + 8 usług stom płaskich (`/licowki/`, `/bonding/`, `/implanty-zebowe/`…). URL nie koduje hierarchii kokonu dla estetyki i części stomatologii.
**Rekomendacja:** **NIE migrować URL na siłę** — koszt 301 + ryzyko regresji przewyższa zysk; reguła `trailingSlash` i istniejące linki. Hierarchię odbudować **linkami in‑body (Mother/Sister) + breadcrumb**, nie ścieżką URL. Traktować jako świadomy dług, nie pilną naprawę. *Werdykt sceptyka: needs‑adjustment → P2.*

### ⚠️ LK‑11 · Anchory: 0 generycznych (✅) ale niska różnorodność (templatowy „Dowiedz się więcej")
**Status** ⚠️ (mieszany: fundament ✅) · **Sygnał** anchorMismatch / anchor diversity / surrounding text · **Skill** `04-05-02`, `04-07-04` (Anchor Diversity) · **Prio P2** · **Effort S**
**Dowód:** 60 anchorów kontekstowych, 0 generycznych — fundament poprawny (`04-05-02`). USG osadza linki w Salient Terms (wzorcowo). Słabość: `ServiceCard`/`ServiceList` dokleja identyczny sufiks „Dowiedz się więcej" i ten sam `shortDesc` → minimalnie zróżnicowany Surrounding Text na linkach `ServiceList`. (Ekstremalny anchorMismatch anchor↔martwy target dotyczy 6× `/undefined/` = T‑33.)
**Rekomendacja:** przy dodawaniu Mother/Sister (LK‑03/05) zadbać o wariację anchorów w granicach chmury encji; przenieść wzorzec prozowych linków USG (salient terms wokół linku) na estetykę i stomatologię. *Werdykt sceptyka: confirmed (baza zdrowa; różnorodność do poprawy; mismatch = T‑33).*

### ✅ LK‑12 · Cross‑cocoon (Niece) poprawnie zminimalizowany — ale brak bram Target↔Target
**Status** ✅ (izolacja) + ⚠️ (brak gateways) · **Sygnał** cross‑cocoon leakage / Niece edges · **Skill** `04-05-04` (dyplomacja kokonów), `04-07-04` (Cross‑Cocoon Gateways) · **Prio P2** · **Effort M**
**Dowód:** Target↔Target ≈ 0 — jedyny cross to `/stomatologia/`→`/usg/slinianek/` (celuje w Support, nie Target — technicznie nawet nie niedozwolony Niece). Izolacja tematyczna zachowana ✅. Ale brak **świadomych bram** (`04-07-04`: „jeśli użytkownik doczytał kokon, czy znajdzie link na Matriarch następnego logicznie powiązanego kokonu?") — brak mostu estetyka↔stomatologia (uśmiech), stomatologia↔USG (diagnostyka).
**Rekomendacja:** dodać kilka **dwukierunkowych** bram Target↔Target z silnym wspólnym kontekstem YMYL (patrz §4). Nie linkować w głąb cudzego kokonu do Support. *Werdykt sceptyka: confirmed (dyscyplina Niece zachowana — utrzymać).*

### ⚠️ LK‑13 · Footer = jedyna nie‑JS odkrywalność, pokrywa 7/24 estetyki i 7/20 USG
**Status** ⚠️ · **Sygnał** sitewide link coverage / siteFocusScore · **Skill** `04-04-03` (koncentracja LinkValue) · **Prio P2** · **Effort M**
**Dowód:** `Footer.jsx` hardkoduje 7 usług estetycznych + hub i 7 badań USG + hub. Pozostałe 17 estetyki i 13 USG zależą **wyłącznie** od in‑body (bo nawigacja poza DOM — LK‑01). Footer jest jednocześnie źródłem chrome‑bloatu (LK‑04).
**Rekomendacja:** **dopiero po** zbudowaniu in‑body daughter/sister (LK‑05) i ewentualnych sub‑pillarów (LK‑09): odchudzić footer do Targetów + sub‑pillarów (zamiast 7 wybranych spoke), co zmniejszy rozpraszanie LinkValue. **Kolejność krytyczna** — footer to dziś jedyna nie‑JS odkrywalność tych stron. *Werdykt sceptyka: needs‑adjustment → P2 (zależność kolejnościowa od P1).*

### ✅ LK‑14 · Audyt 200‑OK wewnątrz kokonu: jedyne złamanie to 6× `/undefined/` (= T‑33)
**Status** ✅ (poza T‑33) · **Sygnał** redirect/200‑OK audit / broken internal links · **Skill** `04-07-04` (Redirect Audit) · **Prio —** · **Effort —**
**Dowód:** poza 6 linkami `/undefined/` (T‑33) wszystkie linki wewnątrz kokonów prowadzą na bezpośrednie URL 200 OK bez łańcuchów redirectów (potwierdzone w F1: 200/0‑redirect). Reguła `04-07-04` spełniona po naprawie T‑33.
**Rekomendacja:** brak osobnej akcji (zależne od T‑33). *Werdykt sceptyka: confirmed.*

---

## 4. Docelowa topologia kokonu (projekt — wejście dla `/seo-fix`)

Synteza z workflow (agent „topologia‑docelowa"). **Wszystko poza zakresem read‑only — to rekomendacje, nie zmiany.**

### Stomatologia → domknąć 3‑tier
- **Tier 1** `/stomatologia/` (działa jako Target). **Tier 2 Mixed:** `/stomatologia-estetyczna/`, `/ortodoncja/`, `/chirurgia/` (+ rozważyć nośniki dla klastrów „Protetyka i implanty" → `/implanty-zebowe/`, „Profilaktyka" → `/leczenie-zebow/`). **Tier 3 Support:** 13 usług‑liści jako daughters konkretnego Mixed.
- **Daughter:** **naprawić T‑33** (priorytet #1) → przywraca 6 linków + likwiduje 6 sierot.
- **Mother:** dodać in‑body upward Support→Mixed→Target (dziś tylko breadcrumb).
- **Sister:** dodać `related[]` w klastrach (ortodoncja {stałe↔alignery↔ruchome}; estetyczna {licówki↔bonding↔wybielanie↔odbudowa}; protetyka; profilaktyka).

### Medycyna estetyczna → z 2‑tier płaskiego do 3‑tier (warunkowo)
- **Sister (priorytet):** `related[]` dla 24 spoke (po obszarze + wspólnym składniku) — likwiduje ślepe zaułki i ~16 near‑orphanów **bez** ryzyka thin‑content.
- **Mixed (opcjonalnie, z treścią):** materializować `/medycyna-estetyczna/{obszar}/` **tylko** z unikalną treścią (Information Gain) — inaczej zostać przy 2‑tier (XP‑30).
- **Mother:** spoke→hub (lub →sub‑pillar po materializacji).

### USG → wzorzec; ewentualnie domknąć klastry
- Najzdrowszy kokon (sister `related[]` działa = 25 krawędzi). **Wzór do replikacji** na estetykę i stomatologię.
- Opcjonalnie: materializować 6 `/usg/{klaster}/` (`getUsgServicesByCluster` istnieje) → 3‑tier na zdrowej bazie; dodać klastry do footera zamiast 7 wybranych badań (lepsze pokrycie 13 badań spoza footera).

### Bramy cross‑cocoon (Target↔Target, dwukierunkowe)
1. **`/stomatologia/` ↔ `/usg/`** — rozszerzyć istniejący link ślinianek o Target `/usg/`; most: chirurgia/staw skroniowo‑żuchwowy ↔ diagnostyka USG.
2. **`/medycyna-estetyczna/` ↔ `/stomatologia-estetyczna/`** — most „estetyki uśmiechu": `modelowanie-ust`/`korekta-usmiechu-dziaslowego` ↔ `licówki`/`wybielanie`/`bonding`.
3. **Home → 4 Targety** (LK‑08) — kuratorowany funnel autorytetu.

### Kolejność wdrożenia (impact × bezpieczeństwo)
**P0:** T‑33 (S, naprawia 6 sierot) → **P1:** sister estetyki (LK‑05/06), Mother in‑body (LK‑03), home‑funnel (LK‑08), DOM nawigacji (LK‑01) → **P2:** sister stom, sub‑pillary z treścią (LK‑09), klastry USG, odchudzenie footera (LK‑13, **po** in‑body), bramy gateway → **P2/dług:** spójność URL (LK‑10, bez wymuszonej migracji).

---

## 5. Weryfikacja adwersaryjna

**Workflow:** 36 agentów (5 wymiarów audytu → 30 weryfikatorów adwersaryjnych **z dostępem do `src/`** → projekt topologii). Werdykty: **4 confirmed · 24 needs‑adjustment · 2 refuted**. CorrectedPriority: 6×P0 → 10×P1 → 12×P2 → 2×drop.

**Kluczowe korekty sceptyków (transparentnie):**
- **Dedup T‑33:** 6 surowych findingów P0 (z 5 wymiarów) to **jeden** root cause = T‑33. Skonsolidowane do LK‑02 z atrybucją fixu do F1. **Net‑nowych P0 w F5: 0.**
- **Korekta „/stomatologia/ tylko 4 liście" → refuted/drop:** weryfikator z dostępem do repo potwierdził, że hub **linkuje in‑body wszystkie usługi/sub‑huby** (mój wynik „4" to podzbiór po odjęciu chrome). Defekt dotyczy **wyłącznie** drugiego skoku (sub‑hub→dziecko). → LK‑02 zawężone, sekcja 1 skorygowana.
- **„Brak 3‑tier = FAIL" → needs‑adjustment/P2:** 2‑tier hub‑and‑spoke (USG) to kompletna, poprawna architektura; trzeci poziom to wybór, nie defekt. „Płaski PageRank" złagodzony (13× to gradient, częściowo nieodłączny od konwencji footer SSG).
- **Materializacja 8 sub‑pillarów estetyki → P2 z ostrzeżeniem YMYL:** sprzeczne z przyjętym XP‑30 (ryzyko thin‑content/kanibalizacji). LK‑09 oznaczone warunkowo.
- **Potwierdzony root cause w `src/`:** `ServiceList.jsx:11` (`/${service.slug}/`) + brak `slug` w `CHILD_SERVICES` 3 sub‑hubów (grep `slug:` = 0) + build HTML = 6× `/undefined/`. Liczba 6 nie zawyżona (USG `related[]` używa `getServiceBySlug` → ma slug → działa).

---

## 6. Bilans i scoring

**Findingi kanoniczne F5:** 14 (LK‑01…LK‑14). Po dedupie z surowych 50.
**Status:** ❌2 (LK‑01, LK‑02=dubel T‑33) · ⚠️8 · ℹ️1 · ✅3 (LK‑12 izolacja, LK‑14 200‑OK, fundament anchorów).
**Priorytety F5‑własne (bez dubli):** P0 ×0 (jedyny P0 = T‑33, własność F1) · P1 ×6 (LK‑01, LK‑03, LK‑04, LK‑05, LK‑06/07, LK‑08) · P2 ×6 (LK‑09, LK‑10, LK‑11, LK‑12, LK‑13) · ℹ️.

### Wynik wymiaru: Linkowanie / Semantyczny kokon ≈ **45/100** (wst.)
Sub‑wyniki (po złagodzeniu adwersaryjnym względem surowych ocen workflow 28–52):

| Wymiar | Surowy (workflow) | Po adwersaryjnym | Uzasadnienie korekty |
|---|---|---|---|
| Matriarchat (Mother/Daughter/Sister/Niece) | 31 | **~40** | Daughter działa (3 huby), Niece zdyscyplinowany ✅; braki: Mother + Sister (poza USG) |
| Topologia (3‑tier, jeden klik, izolacja URL) | 31 | **~44** | 2‑tier = poprawny (USG wzorzec); defekt realny = T‑33; sub‑pillary opcjonalne |
| Orphany / TopicAuthority | 28 | **~40** | 6 sierot = 1 bug (S fix); ~20 near‑orphan reachable, nie blokuje indeksacji |
| LinkValue / rozkład PageRank | 28 | **~36** | Płaski, ale 13× to gradient; częściowo nieodłączny od footer SSG; realna wada YMYL |
| Anchory | 52 | **~58** | 0 generycznych ✅, USG salient‑terms wzorcowo; minus: różnorodność + `/undefined/` (T‑33) |

**Composite ≈ 45/100 (wst.)** — pozycjonuje się między E‑Experience (~28) a E‑Expertise semantyczną (~54). **Filar zasila: E‑Expertise (TopicAuthority/kokon) + T (crawlability/orphany).**
**Najmocniejsze:** USG = działający kokon klasy referencyjnej (sister `related[]`, salient‑terms anchory, zdrowy mesh); warstwa hub→spoke daughter działa we wszystkich 3 hubach; 0 generycznych anchorów; izolacja kokonów (brak szkodliwych Niece).
**Najsłabsze:** płaski LinkValue (Targety = `/cennik/`); brak Mother (upward) i Sister (poza USG); nawigacja header poza DOM; 6 sierot (T‑33).

---

## 7. Macierz pokrycia `rozdzial-04-semantyczny-kokon` (1:1, 36 plików)

| Plik skilla | Typ | Pokrycie F5 |
|---|---|---|
| `00-INDEX` | — | nawigacja rozdziału |
| `04-01-metryki-fundament` | AUDYT | §0, §2 (3 filary: salience/embeddings/LinkValue) |
| `04-01-01-entity-salience` / `midCount` | AUDYT | LK‑11 (salient terms wokół anchorów), cross‑ref F4 XP‑05 |
| `04-01-02-topic-embeddings` | AUDYT | LK‑05/LK‑12 (linki wewnątrz kokonu wzmacniają topicEmbedding; izolacja) |
| `04-01-03-link-value` | AUDYT | **LK‑04** (czarna dziura), **LK‑03** (konsolidacja w górę), **LK‑08** |
| `04-02-projektowanie-hierarchii` | AUDYT | §1 (model 3‑tier mapowany) |
| `04-02-01-target-pages` | AUDYT | §1 (3 Targety), LK‑04 (akumulacja wagi) |
| `04-02-02-mixed-pages` | AUDYT | **LK‑09** (brak warstwy Mixed) |
| `04-02-03-support-pages` | AUDYT | LK‑06 (Support = liście), LK‑10 (zagnieżdżenie URL) |
| `04-03-zbior-analiza-encji` (+`01`,`03`) | METODYKA | prompt rozpoznania encji — zasila projekt sister/Mother (§4); audyt encji w F4 |
| `04-03-02-salient-vs-lsi` | AUDYT | LK‑11 (Surrounding Text = salient terms), cross‑ref F4 QBST |
| `04-04-projektowanie-topologii` | AUDYT | §1, §4 (projekt topologii) |
| `04-04-01-klasteryzacja-intenty` | AUDYT | §1 (klastry per wertyk/obszar), LK‑09 |
| `04-04-02-prompty-topologia` | METODYKA | prompt architektury URL — zastosowany w §4 |
| `04-04-03-checklist-topologii` | **AUDYT** | **LK‑01/02/06/04** (1 klik, brak ślepych zaułków, izolacja, koncentracja) — pozycja po pozycji w §3 |
| `04-04-04-uniwersalny-prompt-architektury` | METODYKA | prompt — użyty do projektu §4 |
| `04-05-matriarhalna-perlinkowania` | AUDYT | §3 cała sekcja (system matriarchalny) |
| `04-05-01-typologia-linkow` | **AUDYT** | **LK‑02 (Daughter), LK‑03 (Mother), LK‑05 (Sister), LK‑12 (Niece)** — 4 typy 1:1 |
| `04-05-02-kontekstowa-relevantnosc` | AUDYT | **LK‑11** (anchor = wektor + Salient Terms), LK‑05 |
| `04-05-03-prompty-projektowania-zwiazkow` | METODYKA | prompt związków — §4 |
| `04-05-04-wzajemne-oddzialywanie-kokonow` | **AUDYT** | **LK‑12** (Target↔Target), **LK‑01/04** (waga linków nawigacji), bramy §4 |
| `04-05-05-uniwersalny-prompt-perlinkowania` | METODYKA | prompt — §4 |
| `04-05-06-uniwersalny-prompt-walidacji` | **AUDYT** (checklist) | LK‑02/03/04/05 (architektura, hierarchia, kierunkowy LinkValue, sygnał ankorowy) |
| `04-06-00…03,05` (generacja contentu) | METODYKA | prompty treści Support/Mixed/Target — poza audytem linków (treść w F3) |
| `04-06-04-integracja-eat-microdata` | AUDYT | `about`/`mentions` (mid) + Information Gain — **cross‑ref F4 XP‑21** (ServiceSchema bez about/mentions) + warunek LK‑09 |
| `04-07-01-audyt-topic-authority` | **AUDYT** | §6 (TopicAuthority), LK‑04/03 (grupowe rankowanie wymaga zasilania Matriarcha) |
| `04-07-02-analiza-orphan-pages` | **AUDYT** | **LK‑02/07** (6 sierot + ~20 near‑orphan + luki semantyczne) §2.3 |
| `04-07-03-prompty-weryfikacji-tuning` | METODYKA | prompty tuningu — zasila roadmapę §4 |
| `04-07-04-checklist-finalnego-tuningu` | **AUDYT** | **LK‑14** (Redirect/200‑OK), **LK‑11** (Anchor Diversity), **LK‑12** (Cross‑Cocoon Gateways) — 3/3 |
| `zakonczenie-rozdzial-4` | AUDYT | §6 (gęstość/logika/wyczerpalność kokonu) |

**Wszystkie 36 plików zmapowane.** AUDYT → findingi/§; METODYKA (prompty generujące kokon) → zasila projekt topologii §4 (nie jest kryterium audytu zbudowanej strony, zgodnie z planem).

---

## 8. Wejście do Fazy 6 (Local SEO)
- **Skill F6:** `czesc-5/109-114` (`localwwwinfo`, `brickAndMortarStrength`, `geoTopicality`, checklist `113`, neochevid `114`).
- **Repo F6:** `src/config/clinic.js` (NAP/geo/hours/founders), `OrganizationSchema.jsx`, `Footer.jsx`, `kontakt/page.jsx`, `ContactSection.jsx`.
- **Wejście z F5/F4:** sygnał przekrojowy — **„Wrocław" jest tylko w meta/title, nieobecne w body/H1** wszystkich stron komercyjnych poza USG (F4 + OG‑07). F6 zweryfikuje `geoTopicality`, kompletność schematu lokalnego (brak `LocalBusiness`/`MedicalClinic`, `geo`, `hasMap`, `priceRange`, `openingHoursSpecification` bez sb/nd, `areaServed`), spójność NAP (footer/kontakt/schema), checklist `113` pozycja po pozycji + GBP/katalogi → checklist zewnętrzny.

---

→ **Koniec Fazy 5.** Wyniki na dysku: `05-linkowanie-kokon.md`, `_f5_graph.json` (graf+PageRank+orphany), `_f5_workflow.json` (50 findingów surowych + 30 werdyktów), `_f5_facts.md`, `_f5_graph.mjs`. **14 findingów LK‑01…LK‑14**, composite **~45/100**, 36 plików skilla zmapowane 1:1, weryfikacja adwersaryjna 36 agentów (4 confirmed / 24 needs‑adjustment / 2 refuted). **Net‑nowych P0: 0** (T‑33 = jedyny P0, własność F1). Zalecane **`/compact`** przed **Fazą 6 (Local SEO)**.
