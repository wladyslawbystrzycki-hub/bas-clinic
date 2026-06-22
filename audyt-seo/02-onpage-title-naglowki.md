# Faza 2 — On-Page: Tytuły (system Goldmine) + meta + nagłówki H1–H6

> Dowodowy audyt SEO bas-clinic wg kompendium DrMax 2026. Framework T‑E‑E‑A, sekcja **On‑Page** (część 3 skilla: `048–052` Goldmine, `053–059` nagłówki).
> Dane: `crawl-dataset.json` (wyrenderowany HTML, `next start` prod, 64 strony) + analiza `_f2_analyze.mjs`. Źródła repo: `src/lib/metadata.js`, `src/app/layout.js`, `ServicePageTemplate.jsx`, `HeroSection.jsx`, `SectionHeader.jsx`, per‑strona `page.jsx`.
> Data: 2026-06-18. **Read-only wobec `src/`** — produkt to raport. Prefiks findingów: `OG-`.

## Legenda
`[ID]` Problem · **Status** ✅ OK / ⚠️ do poprawy / ❌ błąd / ℹ️ info · **Sygnał Google** · **Dowód** (`ścieżka:linia`/metryka) · **Rekomendacja** · **Prio** P0/P1/P2 · **Effort** S/M/L. Punkty zewnętrzne → 📋 checklist.

---

## Streszczenie (TL;DR)

Warstwa On‑Page jest **mocna technicznie**: 64/64 unikalne tytuły (0 duplikatów), 64/64 unikalne meta description, **dokładnie 1×H1** na każdej stronie, **0 przeskoków** w hierarchii nagłówków, mediana 12 nagłówków/stronę, treściowe H3 w stylu pytań/faktów (świetne pod Passage Indexing — zwłaszcza USG). To fundament, który system **Goldmine** ocenia pozytywnie.

Słabości koncentrują się w kilku miejscach i są **łatwe do naprawienia**:
- ❌/⚠️ **P1 OG-03** — podwójny sufiks marki `| Klinika BAS | Klinika BAS` na **wszystkich 16 stronach USG** (sygnał `dupTokens` + `goldmineHasBoilerplateInTitle`). Root cause: USG `page.jsx` ręcznie dokleja markę, a `layout.js` template dokleja ją drugi raz.
- ⚠️ **P1 OG-07** — **47/64 komercyjnych stron** (cała stomatologia + estetyka) **bez geo „Wrocław" w title** — strata sygnału `geoTopicality` i koherencji Goldmine (geo jest tylko na USG + home).
- ⚠️ **P1 OG-14** — rozjazd `<title>`↔`<h1>` na 2 kluczowych hubach (home, `/medycyna-estetyczna/`): H1 emocjonalny vs title z frazą → Goldmine może wybrać innego kandydata.
- ⚠️ **P2** — boilerplate śródtytuł `- Medycyna estetyczna |` na 24 stronach (OG-05), szablonowe H2 `Wszystko o: {X}` (OG-17), 2 strony realnie ucięte pikselowo (OG-06).

**Wstępny wynik On‑Page: ~82/100** (finalizacja w F8).

---

## A. TYTUŁY — system Goldmine (`048–052`)

> Kontekst: `<title>` to tylko **jeden z kandydatów** w wewnętrznym konkursie Goldmine (`AlternativeTitlesAnnotator`). Konkurenci: `<h1>` (`goldmineHeaderIsH1`), anchory wewn./zewn., duży widoczny tekst (`sourceGeometry`). Werdykt rozstrzyga `goldmineBlockbertFactor` (semantyka) → `goldmineNavboostFactor` (kliknięcia). Kary: `isTruncated`/`widthFraction`, `dupTokens`, `goldmineHasBoilerplateInTitle`.

### `[OG-01]` Unikalność tytułów ✅
- **Sygnał:** `goldmineHasBoilerplateInTitle` (negatyw przy duplikatach) · **Dowód:** `_f2_analyze.mjs` → `duplikaty title: []` — **64/64 tytuły unikalne**, 0 duplikatów.
- **Status ✅** — brak ryzyka kanibalizacji snippetu. Wzorowo.

### `[OG-02]` Obecność marki w tytule ✅
- **Sygnał:** spójność brandowa / `sourceTitleTag` · **Dowód:** 64/64 title zawiera „BAS"; 63/64 kończy się sufiksem `| Klinika BAS` (template `layout.js:19`); home ma własny `…| Wrocław` (`layout.js:18`).
- **Status ✅** — marka konsekwentnie obecna.

### `[OG-03]` Podwójny sufiks marki na stronach USG ❌ → **P1**
- **Sygnał:** `dupTokens` (keyword stuffing) + `goldmineHasBoilerplateInTitle` · **Prio P1 · Effort S**
- **Dowód (ground truth z renderu):** wszystkie **16 stron USG** mają tytuł kończący się `… | Klinika BAS | Klinika BAS`:
  - `USG tarczycy Wrocław | Klinika BAS | Klinika BAS` (`/usg/tarczycy/`), `USG Doppler tętnic szyjnych Wrocław | Klinika BAS | Klinika BAS` itd. (`_f2_analyze.mjs` → dupTokens `[klinika, bas]` ×16).
- **Root cause (potwierdzony w kodzie):** `src/app/usg/tarczycy/page.jsx:6` przekazuje `title: 'USG tarczycy Wrocław | Klinika BAS'` (marka **wpisana ręcznie**), a `src/app/layout.js:19` ma `template: '%s | Klinika BAS'`, który **dokleja markę drugi raz**. Pozostałe wertykały (stom./estet.) NIE wpisują marki ręcznie → mają poprawny pojedynczy sufiks (`_f2_analyze.mjs` potwierdza brak innych ręcznych sufiksów).
- **Skutek:** `dupTokens=2` (tokeny „klinika", „bas") na 16 stronach → kara Goldmine obniża ocenę kandydata `sourceTitleTag`; ucina też miejsce na realne słowa kluczowe; zwiększa udział boilerplate.
- **Rekomendacja:** w 16 USG `page.jsx` usunąć ręczne `| Klinika BAS` z `title` (zostawić np. `USG tarczycy Wrocław`) — template doklei markę raz. (Naprawa: `/seo-fix`.)

### `[OG-04]` Powtórzenie marki „w Klinice BAS | Klinika BAS" ⚠️ → **P2**
- **Sygnał:** `dupTokens` (łagodny) · **Prio P2 · Effort S**
- **Dowód:** wzorzec „…w Klinice BAS | Klinika BAS" daje `dupTokens` dla „bas" na ~6 stronach stomatologii: `/implanty-zebowe/` (`Implanty zębowe - Implantologia w Klinice BAS | Klinika BAS`), `/ortodoncja/`, `/protetyka-korony/`, `/stomatologia-estetyczna/`, `/chirurgia/usuwanie-zebow/`, `/stomatologia-estetyczna/wybielanie-zebow/` (`_f2_analyze.mjs` dupTokens).
- **Rekomendacja:** w tych title zastąpić śródfrazę „w Klinice BAS" konkretem (np. geo „we Wrocławiu" — patrz OG-07) lub benefitem; marka i tak jest w sufiksie. Łagodne — `Implanty zębowe – implantologia we Wrocławiu` zamiast „…w Klinice BAS".

### `[OG-05]` Boilerplate śródtytuł „- Medycyna estetyczna |" na 24 stronach ⚠️ → **P2**
- **Sygnał:** `goldmineHasBoilerplateInTitle` · **Prio P2 · Effort M**
- **Dowód:** **24/24 strony estetyczne** mają identyczny śródczłon `- Medycyna estetyczna | Klinika BAS` (`_f2_analyze.mjs` → 24 dopasowania). Łącznie z sufiksem marki ~30 znaków title to **powtarzalny boilerplate** identyczny na 24 URL-ach.
- **Skutek:** zmniejsza udział unikalnej, opisowej części tytułu — dokładnie wzorzec, który `goldmineHasBoilerplateInTitle` penalizuje (analogia „Kup… - Nasz Sklep" z `051`).
- **Rekomendacja:** zróżnicować śródczłon benefitem/intencją zamiast generycznego „- Medycyna estetyczna" (np. `Wypełniacze HA – modelowanie ust i twarzy, Wrocław`). Pełna marka zostaje w sufiksie.

### `[OG-06]` Długość tytułu — `isTruncated`/`widthFraction` (analiza pikselowa) ⚠️ → **P2**
- **Sygnał:** `isTruncated` / `widthFraction > 1.0` (próg ~600 px desktop) · **Prio P2 · Effort S**
- **Dowód (zniuansowany — px, nie znaki):** licznik znaków zawyża problem (31/64 > 60 zn., 17 > 65 zn.), ale realna kara Goldmine działa na **szerokość pikselową**. Po przeliczeniu (`_f2_analyze.mjs`, proxy px):
  - **px > 600 (faktyczne `isTruncated=true`): tylko 2 strony** — `/redukcja-drobnych-zmarszczek-ha/` (637 px / 84 zn.), `/redukcja-glebokich-zmarszczek/` (644 px / 85 zn.).
  - **strefa ryzyka 560–600 px: 3 strony** — `/redukcja-zmarszczek-ha/` (568), `/terapia-egzosomami/` (594), `/wypelniacze-ha/` (561).
  - Polskie tytuły mają dużo wąskich liter (i, l, t, ł) → 60–65 znaków ≈ wciąż < 600 px. Większość „za długich wg znaków" NIE jest ucięta.
- **Rekomendacja:** skrócić **te 2** najdłuższe (głównie przez OG-05 — usunięcie „- Medycyna estetyczna" zwalnia ~22 zn.). Nie ma potrzeby masowego skracania wg licznika znaków.

### `[OG-07]` Brak geo „Wrocław" w 47/64 tytułach komercyjnych ⚠️ → **P1**
- **Sygnał:** `geoTopicality` + koherencja Goldmine (`sourceTitleTag` vs intencja lokalna) · **Prio P1 · Effort M**
- **Dowód:** geo w title ma tylko **17/64**: 16× USG + home (`_f2_analyze.mjs` → `z geo: 17/64`). **Cała stomatologia (18 stron) i cała estetyka (24 strony) — bez „Wrocław" w title** (np. `Implanty zębowe - Implantologia w Klinice BAS`, `Wypełniacze… - Medycyna estetyczna`).
- **Skutek:** zapytania lokalne („implanty zębowe Wrocław", „wypełniacze HA Wrocław") to rdzeń ruchu komercyjnego kliniki. Brak geo w title osłabia relewancję dla NavBoost na frazach lokalnych i koherencję z lokalną intencją. USG zrobiono wzorcowo („USG tarczycy **Wrocław**") — należy rozszerzyć wzorzec.
- **Rekomendacja:** dodać „Wrocław"/„we Wrocławiu" do title stron komercyjnych stom. i estet. (zwykle zmieści się po usunięciu boilerplate z OG-05/OG-04). Sprzęg z F6 (Local). Effort M (42 strony, ale mechaniczne).

### `[OG-08]` Ubogie/krótkie tytuły stron informacyjnych ⚠️ → **P2**
- **Sygnał:** niewykorzystany `sourceTitleTag` (mało informacji, wysoki udział boilerplate) · **Prio P2 · Effort S**
- **Dowód:** `Cennik | Klinika BAS` (20 zn.), `Kontakt | Klinika BAS` (21), `O nas | Klinika BAS` (19) — udział boilerplate sufiksu **67–74%** (`_f2_analyze.mjs` → top boilerplate frac: o-nas 0.74, cennik 0.70, kontakt 0.67). Brak geo, brak propozycji wartości.
- **Rekomendacja:** wzbogacić, np. `Cennik zabiegów stomatologicznych i estetycznych – Wrocław`, `Kontakt – Klinika BAS, Wrocław (rejestracja)`, `O nas – lek. Bogdan i Iwanna Bas, Wrocław`. Wzmacnia geo + encje autorów (sprzęg z F7 E‑E‑A‑T).

### `[OG-09]` Kolejność słów — fraza główna na początku ✅
- **Sygnał:** waga pozycyjna w `sourceTitleTag` · **Dowód:** tytuły zaczynają się od frazy głównej (np. `Implanty zębowe - …`, `USG tarczycy Wrocław …`, `Bonding zębowy - …`) — keyword‑first. **Status ✅.**

---

## B. META DESCRIPTION (warstwa snippetu)

### `[OG-10]` Obecność i unikalność meta description ✅
- **Sygnał:** jakość snippetu / CTR (pośrednio `goldmineNavboostFactor`) · **Dowód:** `_f2_analyze.mjs` → `NULL/brak: []`, `duplikaty meta: []` — **64/64 obecne i unikalne**. **Status ✅.**

### `[OG-11]` Długość meta description ✅ (1 drobny przypadek)
- **Dowód:** mediana **138 zn.**, zakres 83–166; **41/64 w optimum 120–160**; 0 za krótkich (<70); **tylko 1 > 160** — home (166 zn.) (`_f2_analyze.mjs`).
- **Status ✅** całościowo; ℹ️ P2: skrócić opis home o ~6 zn. (np. usunąć „w nowoczesnym gabinecie"). Effort S.

---

## C. NAGŁÓWKI H1–H6 (`053–059`)

> Kontekst: hierarchia ważniejsza niż liczba; `<h1>` to główny pretendent Goldmine (`goldmineHeaderIsH1`); poprawny „chunking" zasila Passage Indexing i AI Overviews; wizualna waga = `avgTermWeight`. Checklist `059` (11 punktów) zmapowany niżej.

### `[OG-12]` Dokładnie jeden H1 na stronę ✅ (`055`, `059#1`)
- **Sygnał:** `goldmineHeaderIsH1` (jednoznaczność kandydata) · **Dowód:** `_f2_analyze.mjs` → `h1Count != 1: []`, `h1 puste: []` — **64/64 dokładnie 1 H1**, żaden niepusty. **Status ✅** — złoty standard spełniony.
- **Realizacja:** H1 renderowany raz w Hero (`HeroSection.jsx:56`, `ServicePageTemplate.jsx:48`); reszta sekcji to H2 (`SectionHeader.jsx:19`).

### `[OG-13]` H1 opisowy, z frazą główną ✅
- **Dowód:** H1 = nazwa usługi/badania (np. „Implanty zębowe", „USG tarczycy we Wrocławiu", „Wypełniacze na bazie kwasu hialuronowego"). Keyword‑rich, niepuste. **Status ✅.**

### `[OG-14]` Rozjazd `<title>`↔`<h1>` na 2 hubach ⚠️ → **P1** (`052` zasada 1, `059#5`)
- **Sygnał:** koherencja sygnałowa Goldmine (`<h1>` jako konkurent `<title>`) · **Prio P1 · Effort S**
- **Dowód:** koherencja title↔H1 (overlap tokenów, `_f2_analyze.mjs`): **47/64 mocna (≥0.8)** ✅, 15 umiarkowana, **2 słabe (<0.5)**:
  - **home** (r=0.33): H1 `Klinika BAS - Twój uśmiech, nasza pasja` (slogan emocjonalny) vs title `Klinika BAS - Stomatologia i Medycyna Estetyczna | Wrocław` (keyword). Brak wspólnego rdzenia „stomatologia/medycyna estetyczna".
  - **/medycyna-estetyczna/** (r=0.25): H1 `Zabiegi estetyczne dla Twojej urody` (slogan) vs title `Medycyna estetyczna - zabiegi odmładzające i modelujące`. H1 nie zawiera frazy „medycyna estetyczna".
- **Skutek:** Goldmine widzi dwa rozjeżdżające się sygnały; emocjonalny H1 jest słabym kandydatem na zagolovek, a rozbieżność z `<title>` osłabia koherencję (`052`). Na hubie estetyki H1 w ogóle nie zawiera głównej frazy → strata na passage/relevance.
- **Rekomendacja:** dodać frazę główną do H1 zachowując ton, np. home: `Klinika BAS – stomatologia i medycyna estetyczna we Wrocławiu` (lub H1 = wartość + subtitle = slogan); estetyka: `Medycyna estetyczna we Wrocławiu – zabiegi dla Twojej urody`. Effort S (2 strony).

### `[OG-15]` Hierarchia bez przeskoków poziomów ✅ (`053`, `059#2`)
- **Sygnał:** jakość chunkingu / `contentEffort` (organizacja) · **Dowód:** `_f2_analyze.mjs` → `strony z przeskokami: 0` — **0/64**. Wszędzie ścisłe H1→H2→H3 (np. `/usg/tarczycy/`: h1 › h2 „Wszystko o…" › h3 pytania › h2 „Powiązane…" › h2 FAQ). **Status ✅** — wzorowo.

### `[OG-16]` Obecność H2 / gęstość nagłówków (chunking) ✅ (`054`)
- **Dowód:** `strony bez H2: []` — **64/64 mają H2**; mediana **12 nagłówków/stronę**; 0 stron z <4 nagłówkami (`_f2_analyze.mjs`). Treść jest „pocięta" na chunki, nie jest ścianą tekstu. **Status ✅.**

### `[OG-17]` Szablonowy H2 „Wszystko o: {nazwa}" ⚠️ → **P2** (`058` nagłówek‑fakt vs obietnica)
- **Sygnał:** boilerplate nagłówka / słabszy kandydat `sourceHeadingTag` · **Prio P2 · Effort M**
- **Dowód:** `ServicePageTemplate.jsx:63-66` generuje H2 `Wszystko o: ${heroTitle}` na **wszystkich ~57 stronach usług** (render: `/implanty-zebowe/` → „Wszystko o: Implanty zębowe", `/wypelniacze-ha/` → „Wszystko o: Wypełniacze…"). Generyczny „nagłówek‑obietnica", powtarzalny szablon.
- **Skutek:** wg `058` nagłówki‑fakty („Co wykrywa USG tarczycy?") są lepszym surowcem dla AI Overviews niż generyczne „Wszystko o: X". „Wszystko o:" nie dodaje informacji ponad H1.
- **Rekomendacja:** zamienić wzorzec H2 na opisowy/faktowy zależny od usługi (np. „Implanty zębowe – przebieg, rodzaje, cena" lub bezpośrednio pierwsze pytanie). Niżej i tak są dobre H3 (OG-18). Effort M (zmiana szablonu — `/seo-fix`).

### `[OG-18]` Treściowe H3 w stylu pytań/faktów ✅ (`054`, `058`)
- **Sygnał:** gotowość pod Passage Indexing / AI Overviews · **Dowód (render):** H3 to pytania i tematy: `/implanty-zebowe/` → „Czym są implanty zębowe?", „Rodzaje implantów", „Przebieg leczenia implantologicznego"; `/usg/tarczycy/` → „Co wykrywa USG tarczycy?", „Wskazania do USG tarczycy", „Jak przygotować się do USG tarczycy?". To idealne „faktoidy" do ekstrakcji. **Status ✅** — szczególnie mocne na USG (6+ Q‑style H3).

### `[OG-19]` Brak głębokości H4–H6 / sekcji ograniczających ℹ️ → **P2** (`058` promień chunka, YMYL)
- **Sygnał:** zarządzanie „promieniem działania" chunka / kontekstualizacja YMYL · **Prio P2 · Effort M**
- **Dowód:** `_f2_analyze.mjs` → `h4+ głębokość: 0` — **żadna z 64 stron nie używa H4–H6**. Struktura jest płaska (H1›H2›H3).
- **Kontekst (`058`):** dla treści **YMYL/medycznych** zalecane są H4–H5 jako „sekcje ograniczające/korygujące" (przeciwwskazania, warunki, „kiedy NIE wykonywać") — AI je widzi, ale nie wyrywa jako uniwersalną odpowiedź. To **refinement, nie błąd** — 3‑poziomowa struktura jest poprawna.
- **Rekomendacja:** na kluczowych stronach zabiegowych dodać H4 „Przeciwwskazania" / „Możliwe skutki uboczne" / „Kiedy zachować ostrożność" (zwiększa też E‑E‑A‑T — sprzęg F7). Opcjonalne.

### `[OG-20]` Boilerplate nagłówki CTA/Footer w outline każdej strony ℹ️ (minor)
- **Sygnał:** szum boilerplate w `sourceHeadingTag` · **Dowód (render):** każda strona kończy outline blokiem H2 `Zadbaj o swoje zdrowie i piękno w Klinice BAS` (CTASection) + H3 footer (`Stomatologia`, `Medycyna estetyczna`, `Ultrasonografia (USG)`, `Informacje`, `Godziny otwarcia`). Powtarzalne na 64 stronach.
- **Status ℹ️** — typowe i nieszkodliwe (nagłówki nawigacyjne), ale czysto „informacyjny" H2 CTA nie niesie treści. Niski priorytet; ewentualnie footer kolumny jako `<p>`/aria zamiast H3. Effort S, opcjonalne.

### `[OG-21]` Wizualna hierarchia = semantyczna (`avgTermWeight`) ✅ (`057`, `059#3`)
- **Sygnał:** `avgTermWeight` / `sourceGeometry` · **Dowód (komponenty):** H1 największy wizualnie (`HeroSection.jsx:57` `text-4xl…lg:text-6xl`, `font-display font-bold`), H2 mniejszy (`SectionHeader.jsx:20` `text-3xl sm:text-4xl`), H3 jeszcze mniejszy. Brak `<p>`/`<span>` udających nagłówki — `SectionHeader` używa realnego `<h2>`. Subtitle nad H1 to mały `text-sm uppercase` (`HeroSection.jsx:52`), więc **nie konkuruje** z H1 o `sourceGeometry`. **Status ✅** — waga wizualna pokrywa się z semantyczną.

### `[OG-22]` Nagłówki w statycznym HTML, nie ukryte ✅ (`059#8, #11`)
- **Sygnał:** parsowalność / brak manipulacji `display:none` · **Dowód:** 100% SSG (Faza 0) — wszystkie nagłówki w źródłowym HTML przy pierwszym renderze (crawl pobrał je bez JS). FAQ to client‑component, ale nagłówek sekcji „Często zadawane pytania" jest w SSG (widoczny w `hTree`). **Status ✅.**

### `[OG-23]` Linki w nagłówkach kart usług ℹ️ (akceptowalny wyjątek, `059#9`)
- **Sygnał:** czystość parsowania `sourceHeadingTag` · **Dowód:** na hubach i w „Powiązane zabiegi" H3 = nazwy usług będące linkami (np. `/medycyna-estetyczna/` H3 „BTL Exion", „Wypełniacze…"). Per `059#9` **wyjątek**: nagłówek‑karta będąca linkiem to akceptowalny pattern. **Status ℹ️/✅** — zgodne z wyjątkiem; bez działania.
- **Uwaga powiązana (F5):** część tych kart linkuje do `/undefined/` (zob. T‑33) — problem linku, nie nagłówka.

---

## D. Checklist nagłówków `059` — mapowanie punkt po punkcie (gwarancja „każdego punktu")

| # `059` | Reguła | Status | Dowód / finding |
|---|---|---|---|
| **Poziom 1 — fundamentalne** ||||
| 1 | Dokładnie jeden `<h1>` | ✅ | 64/64 (OG-12) |
| 2 | Ścisła hierarchia bez przeskoków | ✅ | 0 przeskoków (OG-15) |
| 3 | `<h*>` tylko do nagłówków, nie stylizacji | ✅ | SectionHeader = realny h2; H1>H2>H3 wizualnie (OG-21) |
| **Poziom 2 — kontentowe** ||||
| 4 | Nagłówek odzwierciedla treść pod nim | ✅ (⚠️ szablon) | H3 trafne (OG-18); H2 „Wszystko o:" generyczny (OG-17) |
| 5 | `<h1>`↔`<title>` uzgodnione | ⚠️ | 47/64 OK; 2 huby rozjazd (OG-14) |
| 6 | Słowa kluczowe naturalnie, bez stuffingu | ✅ (w nagłówkach) | brak stuffingu w H; dupTokens dotyczy `<title>` USG (OG-03) |
| 7 | Nagłówki odpowiadają na pytania / obiecują korzyść | ✅ | Q-style H3 (OG-18); H2 do poprawy (OG-17) |
| **Poziom 3 — techniczne** ||||
| 8 | Brak ukrywania `display:none` | ✅ | SSG, nagłówki w źródle (OG-22) |
| 9 | Brak linków w nagłówkach (wyj. karty) | ✅ (wyjątek) | karty‑linki dozwolone (OG-23) |
| 10 | Brak zbędnych wrapperów wokół nagłówków | ✅ | nagłówki bezpośrednio w sekcjach (komponenty) |
| 11 | Nagłówki w treści dynamicznej (taby/akordeon) w HTML | ✅ | FAQ akordeon: nagłówek sekcji w SSG; pytania FAQ w JSON‑LD (FAQPageSchema) |

---

## E. Bilans Fazy 2

| Status | Liczba findingów |
|---|---|
| ✅ OK | 12 (OG-01,02,09,10,11,12,13,15,16,18,21,22) |
| ⚠️ do poprawy | 8 (OG-03,04,05,06,07,08,14,17) |
| ℹ️ info / opcjonalne | 3 (OG-19,20,23) |

### Priorytety On‑Page
- **P1 (3):** OG-03 podwójny sufiks USG ×16 · OG-07 brak geo w 47 title · OG-14 rozjazd title↔H1 (home + hub estetyki).
- **P2 (5):** OG-04 brand 2× stom · OG-05 boilerplate „- Medycyna estetyczna" ×24 · OG-06 2 title ucięte px · OG-08 ubogie title cennik/kontakt/o-nas · OG-17 szablon H2 „Wszystko o:".
- **Opcjonalne:** OG-11 (home meta 166), OG-19 (H4 YMYL), OG-20 (footer H3).

### Wstępny wynik sekcji On‑Page: **~82/100**
Mocny fundament (unikalność title/meta, 1×H1, 0 przeskoków, świetne Q‑style H3, koherencja wizualna). Odejmują: 3 łatwe P1 (USG dupTokens, brak geo, 2 rozjazdy H1) i boilerplate title/H2. Wszystkie naprawy to S/M — kandydaci do `/seo-fix`.

> Uwaga: On‑Page nie jest osobną osią w T‑E‑E‑A — findingi zasilą głównie ocenę **T** (czystość techniczna title/meta) i **E‑Expertise** (koherencja/struktura) w syntezie F8.

---

## Artefakty Fazy 2
- `audyt-seo/_f2_analyze.mjs` — skrypt analizy (title px/dupTokens/boilerplate/geo, meta, koherencja title↔H1, przeskoki hierarchii, chunking). Read-only.
- Źródło danych: `crawl-dataset.json` (title, titleLength, metaDescription, h1, headingCounts, hTree).

→ **Koniec Fazy 2.** Wyniki na dysku (`02-onpage-title-naglowki.md`, `_f2_analyze.mjs`). Zalecane **`/compact`** przed Fazą 3 (Treść + `contentEffort` + Experience + media). F3 czyta `src/data/**` (JSON treści), `ExpertInfoSection.jsx`/`FAQSection.jsx`/`HeroSection.jsx` (wideo), `crawl-dataset.json` (wordCount/imgWithoutAlt/images) + skill `czesc-3/060-070`, `czesc-6/124`, `czesc-5/121-122`.
