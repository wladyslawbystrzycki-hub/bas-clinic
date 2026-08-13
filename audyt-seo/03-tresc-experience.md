# Faza 3 — Treść + `contentEffort` + Experience (E) + media

> Dowodowy audyt wg kompendium DrMax „Dokazatelnoe SEO 2026", framework **T‑E‑E‑A**, sekcja **E (Experience)**.
> Zakres skilla pokryty 1:1: `czesc-3/060–070` (contentEffort, anti‑replicability, data‑shift, anti‑template, content‑layering, eksperckie klastry), `czesc-6/124` (audyt E‑Experience), `czesc-5/121–122` (Image SEO, Video SEO).
> **Audyt read‑only wobec `src/`.** Produktem jest wyłącznie ten raport. Naprawy osobno (`/seo-fix`).

## Metoda i dowody

1. **Korpus z renderu (ground truth).** Pobrano wyrenderowany HTML 64 stron z serwera prod (`localhost:3000`), wyizolowano `<main>` → `audyt-seo/_f3_corpus.json`. Analiza deterministyczna: `audyt-seo/_f3_analyze.mjs` → `audyt-seo/_f3_shingle.txt`.
2. **Sygnały maszynowe** z `crawl-dataset.json` (wordCount, images[], headingCounts, hTree).
3. **Workflow adwersaryjny (ultracode):** 5 wymiarów (contentEffort, OriginalContentScore, Experience, Image SEO, Video SEO) × niezależny sceptyk podważający każdy nagłówkowy finding → **20 agentów**. Wyniki i werdykty wbudowane poniżej (priorytety **po korekcie adwersaryjnej** — zmiany oznaczono `P0→P1`).

### Kluczowe metryki deterministyczne (fakty, nie szacunki)

| Metryka | Wartość | Źródło |
|---|---|---|
| Mediana słów / strona | **346** | `crawl-dataset.json` |
| Strony usług (estetyka+stomatologia) w paśmie thin 295–500 sł. | **42/64** (30 z nich ≤350) | `_f3_analyze.mjs` |
| Spoke'y USG (bogate) | 16 × **910–1072 sł.** | `_f3_analyze.mjs` |
| Shingle (k=8) współdzielone ≥5 stron | **95** (z czego **25** = blok CTA ×63) | `_f3_shingle.txt` |
| Near‑duplicate par usług J≥0.12 / ≥0.20 | **100 / 0** | `_f3_shingle.txt` |
| Mediana udziału boilerplate‑shingli / strona usługi | **~0.20** | `_f3_shingle.txt` |
| Strony z markerem 1‑os. doświadczenia | **2/64** (realnie ~1) | `_f3_corpus.json` |
| Strony z tabelą (`<table>`) | **1/64** (`/cennik/`) | `_f3_shingle.txt` |
| Obrazy: stock Unsplash / self‑host | **67 / 0** (1 zdjęcie ×63) | `crawl-dataset.json` |
| Użycie `next/image` | **0** (martwa konfiguracja `formats:['avif','webp']`) | grep `src/` |
| Pliki wideo | **1** (`hero-bg.mp4`, dekoracyjne tło) | `find public/` |

> **Niuans pomiarowy (zweryfikowany):** odpowiedzi FAQ **nie są** w renderowanym `<main>` (accordion `{open && …}` — klient‑side), ale **są** w `FAQPage` JSON‑LD (Google je indeksuje jako Q&A). Widoczny body `/modelowanie-ust/` = **199 słów** realnej prozy. Tezy „thin" dotyczą widocznego korpusu tekstowego; FAQ dokłada treść wyłącznie przez schema, nie do korpusu passage‑indexing.

---

## ⚙️ Aktualizacja 2026-07-01 — pogodzenie z kodem (dev domknął większość F3)

Raport F3 wykonano na wcześniejszym stanie repo. W niezacommitowanym kodzie **dev domknął większość findingów** — poniższe sekcje czytać z tą korektą:

| Finding | Stan w raporcie | Realnie w kodzie (2026-07-01) |
|---|---|---|
| **EX‑09** CTA boilerplate ×63 | ❌ FAIL | ✅ `WHY_US` = 67/67 stron usług (per‑usługa `benefits`/`intro`); szablonowy CTA leci już tylko na home. |
| **EX‑20** brak autora zabiegu | ❌ FAIL P0 | ✅ `AuthorBio` + `Person` JSON‑LD (Ivanna Bas) na stomatologii/estetyce. |
| **EX‑22** homepage „nasze realizacje" = stock z mylącymi altami | ❌ FAIL P0 | ✅ zastąpione `ClinicGallery` (wnętrze/sprzęt) + osobną `/metamorfozy/` z klauzulą RODO/zgody. |
| **EX‑23/24/27** 100% stock ×63, 1 zdjęcie, generyczne alty | ❌ FAIL | ⚙️ częściowo: stomatologia ma realne `/uploads/services/*.webp` per usługa + własne alty. Reszta (estetyka/USG CTA fallback, galeria/kompendium/FAQ) nadal Unsplash → **wymaga zdjęć kliniki**. |
| **EX‑25** brak `next/image`, martwa konfiguracja `formats` | ❌ FAIL | ✅ NAPRAWIONE (batch niżej). |
| **EX‑30…34** Video SEO | ❌/⚠️ | ✅ bezprzedmiotowe: `hero-bg.mp4` usunięty, 0 `<video>` w `src/` (hero = CSS/SVG). |

**Migracja `next/image` (EX‑25 — batch 2026-07-01):** prostokątne zdjęcia treściowe w sized‑boxach → `next/image fill` + `sizes` (ClinicGallery, KnowledgeSection ×2, FAQSection, CTASection ×2, AboutSection ×2, BeforeAfter, ServicesAccordion). Pipeline AVIF/WebP **aktywny** (potwierdzone: `Accept: image/avif` → `image/avif`); `images.remotePatterns` dla resztkowych placeholderów Unsplash. Wycinanki‑portrety (hero / FoundersSlider / AuthorBio) świadomie zostają `<img>` (przezroczysty webp dopasowany `max‑h` — zero zysku z optymalizatora; WHY w kodzie). Martwy `HoverGallery` usunięty. **CLS = 0** po migracji (weryfikacja screenshotami desktop+mobile).

**Nadal otwarte — wymaga materiałów kliniki / treści medycznej (nie fabrykujemy, YMYL):** głębia treści (EX‑01/02/05/13), liczby z praktyki (EX‑17), głos praktyka / mikro‑case (EX‑16/18/19), oryginalne media przed‑po + infografiki (EX‑21/26/28), realne zdjęcia w miejsce resztkowych placeholderów Unsplash. To **brief dla kliniki**, nie zadanie kodowe.

**Wpływ na wynik:** Image SEO 14 → ~**40** (optymalizator aktywny + realne foto stomatologii + własne alty; sufit trzyma brak przed‑po i resztkowy stock). Video 38 → n/d (kanał usunięty). Rdzeń Experience 22 bez zmian — nadal blokada na materiałach (liczby z praktyki, głos praktyka, media przed‑po).

---

## A. `contentEffort` — głębia i koszt odtworzenia · wynik **34/100**

> Skill: `060` (algorytmiczny pomiar wysiłku), `061` (definicja replicability), `062` (LLM‑ocena złożoności), `063` (walka z cienkim contentem), `064/068` (ludzkie ograniczenia), `069` (content‑layering), `070` (eksperckie klastry).

**[EX‑01] Systemowy thin content: 42/64 strony usług 295–500 sł. (30 ≤350)** · ❌ FAIL · `low contentEffort / HCS little‑content red flag` · Prio **P1** (`P0→P1` adwersaryjnie — patrz niżej) · Effort L
- **Dowód:** estetyka n≈27 median **331** (301–395); stomatologia n≈15 median **335** (299–465). Najcieńsze: `/stomatologia-estetyczna/odbudowa-zebow/` 299, `/regeneratory-komorkowe/` 301, `/leczenie-bezzebia/` 305, `/modelowanie-ust/` 316. Widoczny body to ~110–200 sł. prozy + chrome szablonu.
- **Rekomendacja:** próg min. **700–900 sł.** body dla strony usługi YMYL (wzór: USG). Rozbudowa o wskazania/przeciwwskazania (lista), „dla kogo / dla kogo nie", przebieg z realnymi zakresami, powikłania/rekonwalescencja, notatka gabinetowa. **Nie „dolewać wody"** — dodawać informację podnoszącą koszt odtworzenia.
- **Werdykt sceptyka:** *needs‑adjustment, `P0→P1`.* Najcieńsze wordCounty potwierdzone co do liczby; render `<main>` potwierdza realnie płytki body (nie gęsty‑unikalny ukryty pod niskim licznikiem). P0 zarezerwowany dla literalnej duplikacji CTA (EX‑09); tu unikalna leksyka chroni OriginalContentScore → problem „sufitu jakości / ryzyka HCS", nie ostra awaria. Status FAIL utrzymany.

**[EX‑02] Treść usług w pełni odtwarzalna przez LLM w <60 s (definicja+procedura, zero unikalnego wkładu)** · ❌ FAIL · `near‑zero contentEffort / replicability` · Prio **P0** · Effort L
- **Dowód:** [modelowanie-ust/page.jsx:22-25](../src/app/modelowanie-ust/page.jsx#L22-L25) — 2 sekcje `EXPERT_INFO` („Czym jest…?" + „Jak przebiega zabieg?"), encyklopedyczna definicja. [implanty-zebowe/page.jsx](../src/app/implanty-zebowe/page.jsx) — schemat „Czym są / Rodzaje / Przebieg". Zero case'ów, zero zdjęć efektów własnych, zero komentarza operatora.
- **Rekomendacja:** „asymetria wewnątrz szablonu" (`067`): twarde jądro (definicja) + **zmienna strefa wysiłku** trudna do odtworzenia — mikro‑case z gabinetu (anonimizowany, RODO), zdjęcia przed/po z archiwum, konkretne preparaty/urządzenia BAS, obserwacje operatora.
- **Werdykt sceptyka:** *confirmed, P0.* Próba obalenia nieudana: rozszerzono na 7 dalszych stron (bonding, licowki, wypelniacze‑ha, botox, skin‑booster) — wszystkie powielają szablon „Czym jest / Jak przebiega"; deterministyczny skan 14 fraz 1‑os. = 0 trafień; obecne liczby (8–12 mies., 0,2–1 mm) to wartości podręcznikowe, nie data‑shift.

**[EX‑04] Brak danych własnych — jedyne liczby „ze studiów" to statystyki producenta (BTL Exion), nie kliniki** · ❌ FAIL · `no first‑party data / no original research` · Prio **P1** · Effort L
- **Dowód:** markery „badania/wykazały/o X%" tylko na `/btl-exion/` (HA +224%, elastyna +50%, kolagen +47% — dane marketingowe producenta urządzenia) i `/leczenie-bezzebia/`. Realny marker 1‑os. tylko 2/64 (`_f3_shingle.txt`).
- **Rekomendacja:** dane pierwszej strony — liczba zabiegów danego typu w BAS, średni czas gojenia obserwowany u pacjentów, statystyki z własnej praktyki. Cytując producenta — oznaczać źródło + komentarz kliniczny. **Nie fabrykować liczb (YMYL).**

**[EX‑05] Nieobecność data‑shift: 1/64 strony ma tabelę, brak zakresów liczbowych jako nośnika unikalności** · ❌ FAIL · `no data‑shift uniqueness` (`066`) · Prio **P1** · Effort M
- **Dowód:** `<table>` tylko `/cennik/` (6 szt.). Treść `expertInfo` = wyłącznie `<p>` + `<ol>`; brak strukturalnych zakresów (czas, liczba sesji, trwałość, cena „od").
- **Rekomendacja:** mini‑tabela faktograficzna / strona usługi („Czas | Liczba sesji | Efekt utrzymuje się | Rekonwalescencja | Cena od") z **unikalnymi** wartościami. Liczby są nie‑przepisywalne → realnie podnoszą OriginalContentScore i contentEffort silniej niż parafrazy.

**[EX‑03] Brak głębi analitycznej / sekcji porównawczych** · ⚠️ WARN · `analysis depth` · Prio **P2** (`P1→P2` adwersaryjnie) · Effort M
- **Dowód (skorygowany):** sekcje porównawcze („X a Y", „różni się od") realnie istnieją na **8–12 stronach** usług (bonding „bonding a licówki", licowki „licówki a korony", mezoterapia‑mikroiglowa, redukcja‑zmarszczek‑ha „HA vs botoks", implanty „tytanowe vs cyrkonowe", leczenie‑bezzebia „protezy/mosty/All‑on‑4"), nie tylko 3.
- **Werdykt sceptyka:** *needs‑adjustment, `P1→P2`.* Pierwotny dowód zawyżony (~4×) i metodycznie ślepy — `_f3_corpus.json` renderuje tylko pytania FAQ, nie odpowiedzi (accordion zwinięty), więc treść porównawcza w odpowiedziach FAQ była niewidoczna dla skanu, choć jest w `FAQPage` JSON‑LD. **Kernel prawdziwy:** porównania są płytkie (strony 305–335 sł.) i **brak tabel** poza `/cennik/`. Działanie: pogłębić istniejące porównania do tabel decyzyjnych + uzupełnić mniejszość stron bez treści różnicowej (mezoterapia‑iglowa, mezoterapia‑okolicy‑oka, skin‑booster, wypelniacze‑ha, stymulatory‑tkankowe).

**[EX‑08] Powtarzalny schemat proceduralny („Jak przebiega zabieg") na ~40 stronach** · ⚠️ WARN · `intra‑template boilerplate / OriginalContentScore drag` · Prio **P2** · Effort M
- **Dowód:** poza CTA powtarzalny jest wzorzec „oczyszczenie + krem znieczulający + seria wstrzyknięć + zabieg trwa X min + po zabiegu zaczerwienienie ustępuje" (mezoterapia‑iglowa/mikroiglowa/okolicy‑oka/skory‑glowy, modelowanie‑ust — niemal identyczna kalka). Jaccard ≤0.14 ratuje słownictwo, ale par J≥0.12 jest 100.
- **Rekomendacja:** różnicować procedurę realnymi szczegółami (konkretny preparat/igła/głębokość/liczba sesji w BAS); ogólniki („jak działa znieczulenie") wynieść na 1 stronę‑filar i linkować zamiast powielać.

**[EX‑06] Pozorna głębia hierarchii nagłówków niepokryta głębią treści (h2=3/h3=8 przy 316–366 sł.)** · ⚠️ WARN · `structural depth without content depth` · Prio **P2** · Effort S
- **Dowód:** `/modelowanie-ust/` h2=3 h3=7 @316 sł.; `/btl-exion/` h2=3 h3=8 @366 sł. — h3 to gł. pytania FAQ + nagłówki kart, nie sekcje treści. Kontrast `/usg/jamy-brzusznej/` h2=4 h3=15 @1072 sł. (głębia proporcjonalna).
- **Rekomendacja:** każdy h3 ≥80–120 sł. merytorycznych; nie symulować struktury kartami/FAQ liczonymi jako h3.

**[EX‑07] Klaster USG jako wewnętrzny wzorzec wysokiego `contentEffort` — dowód, że zespół potrafi** · ℹ️ INFO (benchmark) · Prio P1 · Effort L
- **Dowód:** [usg/jamy-brzusznej/page.jsx:24-99](../src/app/usg/jamy-brzusznej/page.jsx#L24-L99) / [usg/tarczycy/page.jsx](../src/app/usg/tarczycy/page.jsx) — 6 sekcji `EXPERT_INFO` z listami `<ul>`, klasyfikacje kliniczne (EU‑TIRADS, BI‑RADS), sekcja różnicowa, cross‑linki kontekstowe w treści (`/usg/nerek/`, `/usg/prostaty/`, `/cennik/`), 6 zlokalizowanych FAQ. **Te same komponenty** (`ServicePageTemplate`) — bariera jest **decyzyjna, nie techniczna**.
- **Rekomendacja:** skanonizować wzorzec USG jako **content brief** dla wszystkich usług (min. 5–6 sekcji + cross‑linki w body + 5–6 FAQ z lokalnym kątem). Rollout partiami wg priorytetu biznesowego.

---

## B. `OriginalContentScore` + anti‑template — unikalność i szablonowość · wynik **52/100**

> Skill: `063` (OriginalContentScore/ContentChecksum96/shingleInfo), `065` (anti‑replicability), `067` (anti‑template / asymetria), `069`.

**[EX‑09] Dosłowny blok CTA powielony na 63/64 stronach → 25 boilerplate‑szingli** · ❌ FAIL · `ContentChecksum96 / shingleInfo` · Prio **P1** (`P0→P1` adwersaryjnie) · Effort **S**
- **Dowód:** 25 najczęstszych szingli k=8 = ten sam ~24‑słowny ciąg ×63 („kompleksowa opieka stomatologiczna … na najwyższym poziomie … ponad 15 lat doświadczenia …"). Sentinel „na najwyższym poziomie" =63×, nagłówek „Zadbaj o swoje zdrowie i piękno w Klinice BAS" =61×. Źródło: [CTASection.jsx:3-12](../src/app/components/CTASection.jsx#L3-L12) (`benefits[]`) renderowane bezwarunkowo przez `ServicePageTemplate`. (Strony bez: `/kontakt/`, `/cennik/`, `/o-nas/`.)
- **Rekomendacja:** skrócić `benefits` do 3–4 krótkich etykiet **lub** przenieść 8 benefitów do nieindeksowanego komponentu badge/ikona bez pełnych zdań; alternatywnie render pełnego CTA tylko na hubach. Cel: szingle ≥5 stron z 95 → <40 (sam ten fix usuwa 25).
- **Werdykt sceptyka:** *needs‑adjustment, `P0→P1`.* Wszystkie liczby potwierdzone (to realny ciągły tekst w `<main>`, nie menu). Korekta tylko prio: Jaccard ≤0.14, 0 par ≥0.20 → boilerplate podnosi **udział** duplikat‑szingli, ale nie powoduje near‑duplicate collapse. Fix effort‑S, porządkowy.

**[EX‑10] Sztywny szkielet H3 „Czym jest X?" + „Jak przebiega zabieg?" bez zmiennej strefy wysiłku** · ⚠️ WARN · `anti‑template / asymetria` · Prio **P1** (`P0→P1`, status `FAIL→WARN`) · Effort L
- **Dowód (skorygowany):** **16 stron** ma dokładnie 2 bloki `expertInfo` bez sekcji asymetrycznej (skin‑booster, modelowanie‑ust, laserowe‑usuwanie‑blizn…); „Jak przebiega zabieg?" renderuje się **verbatim na 19 stronach**.
- **Werdykt sceptyka:** *needs‑adjustment, `FAIL→WARN`, `P0→P1`.* Teza „brak JAKIEJKOLWIEK sekcji odbiegającej" jest fałszywa jako uogólnienie — **20 stron** ma 3. blok ze zróżnicowanym H3 („Rodzaje licówek", „Udowodnione efekty kliniczne"…), a [bonding/page.jsx](../src/app/bonding/page.jsx) ma mini‑porównanie „Bonding a licówki — co wybrać?" (czyli żądana „zmienna strefa wysiłku" już istnieje na ~31% usług). Dotknięty zbiór = 16 stron 2‑blokowych, nie wszystkie.
- **Rekomendacja:** obowiązkowa 3. sekcja asymetryczna / strona: mikro‑case **lub** mini‑porównanie tabelaryczne **lub** lokalna notatka; różnicować H3 (nie zawsze „Jak przebiega zabieg?").

**[EX‑13] Brak danych strukturalnych (data‑shift): 0 tabel porównawczych/zakresów na stronach usług** · ⚠️ WARN · `data‑shift / OriginalContentScore` · Prio **P1** · Effort M
- **Dowód:** `<table>` =1/64 (`/cennik/`); `expertInfo` = `<p>`+`<ol>` (60/64 ma `<ol>`), brak strukturalnych zakresów liczbowych.
- **Rekomendacja:** mini‑tabela faktograficzna / strona z unikalnymi liczbami (spinać z `config/services.js`, nie hardkodować). Por. EX‑05.

**[EX‑11] Powtarzalne nagłówki sekcji „Wszystko o:" / „Informacje od specjalisty" / „Często zadawane pytania" na 58 stronach** · ⚠️ WARN · `shingleInfo` · Prio **P2** (`P1→P2` adwersaryjnie) · Effort M
- **Dowód:** „Informacje od specjalisty" =58×, „Często zadawane pytania" =58× — hardkod w [ServicePageTemplate.jsx:63-66](../src/app/components/ServicePageTemplate.jsx#L63-L66), :86‑87.
- **Werdykt sceptyka:** *needs‑adjustment, `P1→P2`.* „Wszystko o: {heroTitle}" **interpoluje** tytuł → H2 jest unikalny per strona; realnie stałe są tylko krótkie eyebrow‑etykiety (3‑słowne UI‑chrome o niskiej wadze), nie duplikacja treści. Pierwotny pomiar `heroSubtitle` był niekompletny (pominął 15× „Ultrasonografia", 3× „Ortodoncja" — jest ≥7 wartości, nie 3). Polish anti‑template, nie pilna naprawa.
- **Rekomendacja:** sparametryzować `sectionTitle/faqTitle` (props z domyślną wartością); wariantowe brzmienie na 30–40% stron.

**[EX‑14] FAQ jako jedyna strefa wariancji — wykorzystana płytko i częściowo redundantna z `expertInfo`** · ⚠️ WARN · `OriginalContentScore / głębia` · Prio **P2** · Effort M
- **Dowód:** `/skin-booster/` FAQ „Czym jest skin booster?" powiela tezę z `expertInfo` „Czym jest mezoterapia głęboka (skin booster)?". 3 pytania/strona, odpowiedzi = ogólne definicje bez liczb/niuansów/wad.
- **Rekomendacja:** FAQ nie pokrywające się z `expertInfo`, pytania kosztowne do odtworzenia („Ile sesji dla dekoltu?", „Przeciwwskazania i skutki uboczne?"); 4–5 pytań na thin pages.

**[EX‑12] Unikalna leksyka medyczna (Jaccard ≤0.14) chroni OriginalContentScore — ale ochrona krucha i pasywna** · ℹ️ INFO (niuans) · Prio P1
- **Dowód:** 100 par usług J≥0.12, **0 par ≥0.20** — terminologia (kwas hialuronowy niesieciowany, fibroblasty, mikrobolusy) różnicuje strony. Ale boilerplate‑frac/strona = 0.20 przy thin 300–395 sł.
- **Wniosek:** nie traktować niskiego Jaccarda jak „zielonego światła" — anti‑template‑classifier ocenia **wzorzec strukturalny** (szkielet H3 + nagłówki + CTA), nie tylko leksykę. Unikalne terminy = warunek konieczny, nie wystarczający. Priorytet: pogłębienie treści (EX‑10) + redukcja boilerplate (EX‑09).

**[EX‑15] Rekomendacja systemowa: wstrzyknięcie „zmiennej strefy wysiłku" (asymetrii) per strona** · ℹ️ INFO (synteza) · Prio P1 · Effort L
- **Działanie:** kontrakt redakcyjny — KAŻDA strona usługi dostaje min. 1 z 3: (a) mikro‑case „Z naszej praktyki w Klinice BAS…", (b) mini‑porównanie tabelaryczne, (c) lokalna notatka (preparat/urządzenie BAS, Wrocław). **Pilotaż na 5 stronach** (wypełniacze‑ha, modelowanie‑ust, implanty, licówki, botox) → zmierzyć wzrost unikalnego shingle‑frac przed skalowaniem na ~50.

---

## C. Experience (E) — dowody realnego doświadczenia · wynik **22/100** ⬅ najsłabsze ogniwo T‑E‑E‑A

> Skill: `czesc-6/124` (audyt E‑Experience), `068` (ludzkie ograniczenia jako sygnał autentyczności).

**[EX‑17] Brak konkretnych liczb z własnej praktyki — jedyna liczba „15 lat" to szablonowy CTA na 63/64 stronach** · ❌ FAIL · `quantified practice signals` · Prio **P0** · Effort M
- **Dowód:** 0 stron z liczbami z praktyki („wykonaliśmy", „skuteczność N%", „ponad N zabiegów"). Statystyki [clinic.js:33-35](../src/config/clinic.js#L33-L35) (`experience:'15+'`, `patients:'2000+'`, `since:'2012'`) renderowane **wyłącznie** na `/o-nas/`. „Ponad 15 lat doświadczenia" z [CTASection.jsx:8](../src/app/components/CTASection.jsx#L8) ×63 = **false‑positive Experience** (zarazem liability duplikacyjny).
- **Werdykt sceptyka:** *confirmed, P0.* Najmocniejsze twierdzenie („0 stron z liczbami z praktyki") wytrzymuje atak: regexy wykonaliśmy/przeprowadziliśmy/skuteczność/„większość naszych pacjentów" = 0/64.
- **Rekomendacja:** przenieść statystyki z poziomu kliniki na poziom usługi (drobne, weryfikowalne). Usunąć „15 lat" z CTA jako sygnał Experience. **Nie fabrykować (YMYL).**

**[EX‑18] Treść tylko o zaletach — brak wad/niuansów/przeciwwskazań z perspektywy praktyka** · ❌ FAIL · `balanced practitioner view` · Prio **P0** · Effort M
- **Dowód:** przeciwwskazania/ryzyka wzmiankuje ~**10–17/64** stron (zależnie od słownika), **wyłącznie encyklopedycznie**; **0/64** z markerem ludzkiego ograniczenia praktyka („u części pacjentów", „zdarza się, że", „nie u każdego"). [wypelniacze-ha/page.jsx:22-24](../src/app/wypelniacze-ha/page.jsx#L22-L24) — same zalety i przebieg.
- **Werdykt sceptyka:** *confirmed, P0.* Defekt strukturalny (53/64 bez wzmianki o wadach; 0/64 z głosem praktyka) niezależny od progu. YMYL bez perspektywy ryzyk = słaby sygnał E + bezpieczeństwa.
- **Rekomendacja:** sekcja „Przeciwwskazania i ograniczenia" + min. 1 niuans z praktyki / strona („Uczciwie: u pacjentów z X efekt bywa krótszy / nie rekomendujemy, gdy…"). Podnosi E **i** wiarygodność YMYL, odróżnia od treści AI (`068`).

**[EX‑20] Brak atrybucji wykonawcy zabiegu / autora‑medyka na stronach usług** · ❌ FAIL · `Experience × Authoritativeness (→F7)` · Prio **P0** · Effort M
- **Dowód:** skan „lek. med. / Bogdan/Iwanna Bas / nasz lekarz / dr" → tylko 3/64 (`/`, `/o-nas/`, `/stomatologia-estetyczna/` — to ostatnie generyczne). [ServicePageTemplate.jsx](../src/app/components/ServicePageTemplate.jsx) nie ma propsa `author/performedBy`; `ServiceSchema` nie wiąże usługi z osobą‑providerem. **0 stron usług mówi KTO wykonuje zabieg.**
- **Rekomendacja:** blok „Zabieg wykonuje" (imię, tytuł, link do bio: Bogdan → stomatologia/implanty, Iwanna → medycyna estetyczna) + mikro‑bio autora pod treścią; powiązać w JSON‑LD (`Person` jako `provider`/`author`). **Koordynacja z Fazą 7.**

**[EX‑22] Homepage „Galeria / Nasze realizacje" ilustrowana stockiem z altami sugerującymi własny gabinet i pacjentów (wprowadzenie w błąd)** · ❌ FAIL · `misleading authenticity signal` · Prio **P0** · Effort M
- **Dowód:** sekcja „Galeria — Nasze realizacje — Przekonaj się o jakości naszych usług"; 5 obrazów homepage = **wszystkie Unsplash**, alty implikują autentyczność: „Klinika BAS — gabinet stomatologiczny", „…uśmiech pacjenta", „Wnętrze Kliniki BAS" ([page.jsx:102-105](../src/app/page.jsx#L102-L105)). Stock opisany jako „nasze realizacje" = fałszywy sygnał Experience + ryzyko wizerunkowe/prawne.
- **Rekomendacja:** zastąpić realnymi zdjęciami gabinetu/efektów; do czasu wymiany — skorygować alty/podpisy, by nie twierdziły fałszywie „nasze"/„Wnętrze Kliniki BAS".

**[EX‑16] Realny marker 1‑os. doświadczenia tylko na 2/64 stronach (realnie ~1) — reszta to bezosobowa teoria** · ❌ FAIL · `first‑person evidence` · Prio **P1** (`P0→P1` adwersaryjnie) · Effort L
- **Dowód:** realny 1‑os. tekst praktyka tylko w bio Bogdana ([clinic.js:38-39](../src/config/clinic.js#L38-L39): „W swojej praktyce klinicznej spotkałem się z tysiącami historii Pacjentów") → `/o-nas/` + echo na `/`. „Marker" na `/wlewy-witaminowe/` to generyczne „W naszej klinice oferujemy…" (nie doświadczenie). Na ~15 stronach jest „my" **proceduralne** („wykonujemy RTG", „zalecamy") — tryb encyklopedyczny, nie Experience.
- **Werdykt sceptyka:** *needs‑adjustment, `P0→P1`.* Realny zasięg to ~1/64 (finding wręcz zbyt łagodny). Korekta prio: brak markera = deficyt jakości/uplift E‑E‑A‑T, nie aktywny trigger kary; P0 należy do duplikacji CTA.
- **Rekomendacja:** marker 1‑os. praktyka na min. 40/64 stron (asymetria w szablonie).

**[EX‑19] Idealnie gładki, bezosobowy ton = sygnał treści generycznej/AI (technika 068)** · ⚠️ WARN · `human‑limitation absence` · Prio **P1** · Effort M
- **Dowód:** 0/64 stron z markerem wahania/ograniczenia („zdarza się", „bywa, że", „trzeba uczciwie powiedzieć"). Tekst usług perfekcyjnie wypolerowany, deklaratywny — wzorzec niskiego contentEffort flagowany przez HCS. Kontrast: bio `/o-nas/` ma autentyczny głos.
- **Rekomendacja:** celowo ludzki, niuansowany ton (warunkowe sformułowania, autentyczne zastrzeżenia, mini‑obserwacje gabinetowe) — `068`; finalne teksty przez weryfikację anti‑AI z zachowaniem poprawności medycznej.

**[EX‑21] Brak własnych mediów jako dowodu Experience — 0 efektów przed/po, 0 zdjęć zespołu/gabinetu** · ❌ FAIL · `original_media_score` · Prio **P1** · Effort L
- **Dowód:** 67/67 obrazów stock; bio `/o-nas/` zamiast zdjęć założycieli ma **placeholder SVG‑sylwetkę** ([o-nas/page.jsx:42-47](../src/app/o-nas/page.jsx#L42-L47), 107‑114); `public/uploads/` pusty; 0 galerii przed/po. (Szczegóły mediów: sekcja D.)
- **Rekomendacja:** self‑hostowane media (`next/image`): fotografie założycieli, gabinet/sprzęt, **galerie przed/po** (zgoda pacjentów, RODO) — najsilniejszy dowód Experience.

---

## D. Image SEO — `original_media_score`, NIMA, OCR, alt, `next/image` · wynik **14/100** ⬅ zapaść

> Skill: `czesc-5/121` (original_media_score, OCR `ocrGoodoc`/`ocrTaser`, `multibangKgEntities`, `nimaAva/nimaVq`, `clickMagnetScore`).

**[EX‑23] `original_media_score` = floor: 0 zdjęć oryginalnych, 100% hotlinkowany stock Unsplash** · ❌ FAIL · `original_media_score / contentEffort z mediów` · Prio **P0** · Effort L
- **Dowód:** 67/67 `<img>` host=`images.unsplash.com` (0 self‑host). Tylko **5 distinct src** na 64 strony. `public/uploads/{services,team}/` istnieją lecz **puste** (0 plików, brak `.gitkeep`). `public/` zawiera tylko `hero-bg.mp4`.
- **Werdykt sceptyka:** *confirmed, P0.* Dowód silniejszy niż w findingu — surowy hotlink `<img>`, `next/image` nieużyte nigdzie. 0% oryginalnych mediów na YMYL = floor + jawny red flag HCS (stock).
- **Rekomendacja:** oryginalna sesja (gabinet BAS, sprzęt, zespół Bogdan & Iwanna), self‑host w gotowych folderach z opisowymi nazwami.

**[EX‑28] Brak zdjęć przed/po, zespołu, gabinetu, sprzętu — zerowy sygnał Experience i NIMA z mediów** · ❌ FAIL · `Experience / NIMA / zaufanie YMYL` · Prio **P0** · Effort L
- **Dowód:** 0 obrazów przed/po na ~24 stronach estetyki i 18 stomatologii; 0 zdjęć realnego zespołu mimo `/o-nas/`. Cała ekspozycja = stock.
- **Rekomendacja:** galerie przed/po (RODO) — najsilniejszy dowód Experience + magnes na dwell (NIMA, `clickMagnetScore`); zdjęcia zespołu przy autorach; realne wnętrze.

**[EX‑26] Brak infografik / schematów zabiegów i anatomii — OCR/`multibangKgEntities` niewykorzystane** · ❌ FAIL · `OCR / multibangKgEntities / contentEffort` · Prio **P1** · Effort L
- **Dowód:** 0 obrazów typu diagram/schemat (5 distinct src = fotografie stock). Brak warstwy graficznej niosącej tekst/encje — krytyczne dla YMYL.
- **Rekomendacja:** oryginalne infografiki (etapy zabiegu, schematy anatomiczne stref botoksu/HA, porównania technik). Tekst w grafice zasila OCR; encje medyczne → `multibangKgEntities`.

**[EX‑24] Jedno stockowe zdjęcie powielone na 63/64 stronach (duplikacja medialna)** · ❌ FAIL · `OriginalContentScore / ContentChecksum96` · Prio **P1** (`P0→P1` adwersaryjnie) · Effort M
- **Dowód:** [CTASection.jsx:102](../src/app/components/CTASection.jsx#L102) hardkod `photo-1629909613654-…w=800&h=900` → renderowany na każdej stronie usługi. To samo photo ID też w [page.jsx:102](../src/app/page.jsx#L102) (galeria homepage, wariant `h=600`) — łącznie ~65 wystąpień. (Strona bez: `/kontakt/`.)
- **Werdykt sceptyka:** *needs‑adjustment, `P0→P1`.* Potwierdzone i niedoszacowane co do liczby; korekta prio — obraz dekoracyjny (`hidden lg:block`, alt istnieje), sygnał `original_media_score`, nie ranking‑killer. **Sama parametryzacja nie rozwiązuje problemu, że wszystkie obrazy to stock** (EX‑23).
- **Rekomendacja:** sparametryzować obraz CTA (prop `serviceImage` z `ServicePageTemplate`) — w połączeniu z self‑hostem (EX‑23).

**[EX‑25] Brak `next/image` — surowe `<img>`, brak AVIF/WebP/optymalizacji (martwa konfiguracja)** · ✅ NAPRAWIONE 2026-07-01 (migracja zdjęć treściowych na `next/image fill`; AVIF aktywny; cut‑outy świadomie `<img>` — patrz Aktualizacja 2026-07-01) · ~~❌ FAIL~~ · `next/image / Best Practices` · Prio **P1** (`P0→P1` adwersaryjnie) · Effort L
- **Dowód:** `grep next/image src/` = 0. Surowe `<img>` w [HoverGallery.jsx:15](../src/app/components/HoverGallery.jsx#L15) i [CTASection.jsx:101](../src/app/components/CTASection.jsx#L101). `next.config.mjs` deklaruje `images.formats=['avif','webp']` ale **brak `remotePatterns`** → optymalizator nie odpala dla zewnętrznego hosta przy surowych `<img>`. Brak `loading=lazy`/`fetchPriority` w całym `src/`.
- **Werdykt sceptyka:** *needs‑adjustment, `P0→P1`.* Fakty 100% potwierdzone, ale „LCP" zawyżone — żaden surowy `<img>` nie jest elementem LCP (CTA‑obraz `hidden lg:block` desktop‑only/nisko; HoverGallery tylko homepage). Realny dług Best Practices/optymalizacji, nie blocker LCP. Złagodzić sygnał do „optymalizacja obrazów".
- **Rekomendacja:** migracja na `next/image` (po self‑hoście) — AVIF/WebP, srcset, lazy; `fetchPriority='high'` tylko dla realnego obrazu LCP, `loading='lazy'` dla reszty.

**[EX‑27] Alt‑y obecne (`imgWithoutAlt=0`) ale generyczne i niezgodne z tematem strony** · ⚠️ WARN · `koherencja obraz↔temat` · Prio **P1** · Effort **S**
- **Dowód:** tylko **5 distinct alt** na 67 obrazów; dominujący „Wnętrze Kliniki BAS" ([CTASection.jsx:103](../src/app/components/CTASection.jsx#L103)) ×63 — ten sam alt na botoksie, implantach i stomatologii dziecięcej.
- **Rekomendacja:** alt z kontekstu usługi („Wypełniacze HA — modelowanie ust w Klinice BAS Wrocław") — wzmacnia koherencję obraz↔encja.

**[EX‑29] Obrazy galerii homepage bez `width/height` (ryzyko CLS)** · ⚠️ WARN · `CLS` · Prio **P2** · Effort S
- **Dowód:** [page.jsx:102-105](../src/app/page.jsx#L102-L105) — `<img>` bez `width/height`. (`HoverGallery` przekazuje wymiary, ale homepage‑galeria nie.) Wideo hero: patrz EX‑32.
- **Rekomendacja:** zawsze podawać `width/height` (lub `next/image`, który je wymusza).

---

## E. Video SEO — `hero-bg.mp4` · wynik **38/100**

> Skill: `czesc-5/122` (watch‑time jako analog NavBoost, VideoObject, poster, rozdziały, pierwsze 15 s).

**[EX‑30] Zero filmów treściowych na 64 stronach — niewykorzystany kanał Experience/contentEffort (YMYL)** · ❌ FAIL · `original_media_score / contentEffort / Experience` · Prio **P1** · Effort L
- **Dowód:** w repo 1 plik wideo (`hero-bg.mp4`), użyty wyłącznie jako tło hero na `/` ([page.jsx:22](../src/app/page.jsx#L22)). 0 filmów na ~50 stronach usług; 0/64 markerów wideo treściowego w renderze.
- **Werdykt sceptyka:** *confirmed, P1.* `hero-bg.mp4` to czysto dekoracyjne tło → zerowy sygnał Experience, co **wzmacnia** finding (gap = 64/64). Wysokowartościowa dźwignia, ale zadanie produkcyjne (effort L), nie blocker → P1.
- **Rekomendacja:** 1 krótki film (30–90 s) / kluczowa kategoria: słowo lekarza (Bogdan/Iwanna) o wskazaniach i przebiegu **lub** nagranie z gabinetu = (a) oryginalne medium, (b) twardy dowód Experience 1‑os., (c) wzrost contentEffort. Osadzić z `VideoObject` (EX‑31).

**[EX‑31] Brak `VideoObject` — ale dla obecnego filmu to celowo poprawne (niuans)** · ℹ️ INFO · Prio P2 · Effort M
- **Dowód:** `grep VideoObject src/` = 0; schema = tylko Breadcrumb/FAQPage/Organization/Service. Obecny film = dekoracyjna, wyciszona pętla.
- **Rekomendacja:** **NIE** dodawać `VideoObject` do dekoracyjnego tła (Google wymaga filmu z wartością informacyjną; oznaczenie ozdobnej pętli grozi structured‑data spam). `VideoObject` wdrożyć **dopiero** przy filmach treściowych (EX‑30): `name`, `description`, `thumbnailUrl` (self‑host), `uploadDate`, `duration` ISO‑8601, `contentUrl`, `transcript`. Utworzyć `schema/VideoObjectSchema.jsx`.

**[EX‑33] 2,4 MB wideo ładowane natychmiast bez `preload`/lazy — koszt transferu i LCP na mobile (homepage)** · ⚠️ WARN · `lazy‑load / transfer mobile` · Prio **P2** · Effort M
- **Dowód:** `public/hero-bg.mp4` = 2 468 125 B. [HeroSection.jsx:26-33](../src/app/components/HeroSection.jsx#L26-L33) — `<video>` bez `preload` (domyślnie `auto`), 1 `<source type=video/mp4>` (brak WebM/wariantu mobile); `videoSrc` tylko na `/` (page.jsx:22).
- **Werdykt sceptyka:** *confirmed, P2.* Lokalny (1 strona), częściowo zmitygowany overlayem — homepage to najwyższy ruch, więc koszt realny i skoncentrowany.
- **Rekomendacja:** `preload='metadata'` + poster (EX‑32); wariant mobile 720p (<1 MB) + WebM jako `<source>`; rozważyć sam poster na wąskich viewportach.

**[EX‑32] Brak atrybutu `poster` — fallback gdy autoplay zablokowany** · ⚠️ WARN · `poster/thumbnail` · Prio **P2** (`P1→P2`, status `FAIL→WARN`) · Effort S
- **Dowód:** [HeroSection.jsx:26-32](../src/app/components/HeroSection.jsx#L26-L32) `<video autoPlay muted loop playsInline>` bez `poster`.
- **Werdykt sceptyka:** *needs‑adjustment, `FAIL→WARN`, `P1→P2`.* Argumenty CLS i LCP **błędne**: wideo jest `position:absolute inset-0` → nie wpływa na layout rodzica (brak CLS); element LCP to `<h1>` z SSG (element `<video>` bez poster nie jest kandydatem LCP); tło to navy gradient, nie biały FOUC. **Realna wartość:** poster jako fallback przy zablokowanym autoplay (iOS Low Power / Data Saver) — tania korekta UX na 1 stronie.
- **Rekomendacja:** `poster='/hero-bg-poster.webp'` (uzasadnienie: wyłącznie fallback autoplay + wzbogacenie pierwszego paintu).

**[EX‑34] Surowy `<video>` bez `aria-hidden`/captions/fallbacku** · ⚠️ WARN · `accessibility / delivery` · Prio P2 · Effort S
- **Dowód:** natywny `<video>` z 1 `<source>`, bez `<track kind=captions>`, bez tekstu fallback, bez `aria-hidden`. muted+loop → zero watch‑time/zaangażowania.
- **Rekomendacja:** dla dekoracyjnego tła — `aria-hidden='true'`. Przy filmach treściowych (EX‑30): `<track kind='captions' srcLang='pl'>` + widoczna transkrypcja (indeksowalny tekst + WCAG + pole `transcript` w `VideoObject`).

---

## Weryfikacja adwersaryjna (ultracode)

20 agentów (5 wymiarów × ≤3 sceptyków). Wynik: **6 findingów `confirmed`**, **9 `needs‑adjustment`** (skorygowano priorytety/status — wszystkie zmiany wpisane wyżej i oznaczone `P0→P1` itd.), **0 `refuted`**. Najważniejsze korekty wniesione przez sceptyków:
- **Rezerwa P0:** P0 należy do **literalnej duplikacji** (CTA ×63, EX‑09 — choć i ona zdegradowana do P1 jako effort‑S/porządkowa) oraz do **całkowitych braków Experience/mediów** (EX‑02, EX‑17, EX‑18, EX‑20, EX‑22, EX‑23, EX‑28); thin‑content i szablonowość → P1 (systemowe, ale chronione unikalną leksyką).
- **Korekta metodyczna:** `_f3_corpus.json` renderuje tylko **pytania** FAQ, nie odpowiedzi (accordion) — skan był ślepy na treść porównawczą w odpowiedziach FAQ (są w `FAQPage` JSON‑LD). Stąd downgrade EX‑03.
- **Korekta techniczna:** brak `poster` **nie** powoduje CLS (wideo `absolute`) ani nie psuje LCP (`<h1>` jest LCP) → EX‑32 zdegradowane.

---

## Macierz pokrycia kompendium — Faza 3 (każdy punkt)

| Plik skilla | Punkt | Pokrycie |
|---|---|---|
| `czesc-3/060` | algorytmiczny pomiar wysiłku | ✅ A (EX‑01,02,07) |
| `czesc-3/061` | contentEffort = replicability | ✅ EX‑02 |
| `czesc-3/062` | LLM‑ocena złożoności / oznaki low‑effort | ✅ EX‑02,19 |
| `czesc-3/063` | walka z cienkim contentem / OriginalContentScore | ✅ EX‑01,09,12 |
| `czesc-3/064`+`064-00` | strategia high‑effort / nieoczywiste techniki | ✅ EX‑07,15 (brief) |
| `czesc-3/065` | anti‑replicability (wielopoziomowa logika, lokalne definicje) | ✅ EX‑02,10 (brak) |
| `czesc-3/066` | data‑shift (unikalność w danych/tabelach) | ✅ EX‑05,13 (brak) |
| `czesc-3/067` | anti‑template / asymetria w szablonie | ✅ EX‑08,09,10,11,15 |
| `czesc-3/068` | ludzkie ograniczenia jako sygnał autentyczności | ✅ EX‑18,19 (brak) |
| `czesc-3/069` | content‑layering (narastanie wysiłku w czasie) | ✅ uwaga: brak `dateModified`/historii aktualizacji (powiązanie z fałszywym `lastmod` z F1) → rekomendacja EX‑15 + Faza 8 |
| `czesc-3/070` | eksperckie klastry (korpus badawczy) | ✅ EX‑07 (USG jako klaster) + Faza 5 (kokon) |
| `czesc-6/124 §1` | audyt contentEffort (dane własne, głębia analizy) | ✅ EX‑01..05 |
| `czesc-6/124 §2` | OriginalContentScore + media (stock vs własne) | ✅ EX‑09..14, EX‑23,24 |
| `czesc-6/124 §3` | dowody Experience (1‑os., liczby, wady/niuanse) | ✅ EX‑16,17,18,19,20 |
| `czesc-5/121` | Image SEO (original_media_score, OCR, NIMA, clickMagnet, alt, pliki) | ✅ EX‑23..29 |
| `czesc-5/122` | Video SEO (VideoObject, poster, watch‑time, rozdziały, 15 s) | ✅ EX‑30..34 |

---

## Bilans Fazy 3

| Status | Liczba |
|---|---|
| ❌ FAIL | 12 |
| ⚠️ WARN | 12 |
| ℹ️ INFO / benchmark | 6 |
| **Findingi razem** | **30** (EX‑01…EX‑34, scalone duplikaty) |

### Wyniki cząstkowe (zasila **E — Experience** w scorecardzie T‑E‑E‑A)

| Wymiar | Wynik | Werdykt |
|---|---|---|
| `contentEffort` | **34** | thin 42/64, replicable <60s, data‑shift nieobecny; ratuje klaster USG |
| `OriginalContentScore` + anti‑template | **52** | unikalna leksyka chroni (J≤0.14), ale 95 boilerplate‑szingli + sztywny szkielet |
| **Experience (rdzeń E)** | **22** | 1‑os. tylko ~1/64, 0 liczb z praktyki, tylko zalety, brak autora/mediów |
| Image SEO | **14** | 100% stock hotlink, 1 zdjęcie ×63, 0 `next/image`, 0 infografik |
| Video SEO | **38** | 1 film dekoracyjny; brak filmów treściowych (kanał niewykorzystany) |

> **Wynik sekcji E (Experience): ~28/100** (rdzeń = wymiar Experience 22, lekko podniesiony przez realną jakość klastra USG i poprawne schema/FAQ). To **najsłabszy filar T‑E‑E‑A** i kluczowa luka w erze AI: witryna jest technicznie znakomita (T ~78, On‑Page ~82), ale treściowo **odtwarzalna maszynowo** i pozbawiona dowodów realnego doświadczenia — dokładnie to, co `contentEffort`/Experience mają deklasować.

### Klamra strategiczna
**Problem jest decyzyjny, nie kompetencyjny** (EX‑07): ten sam szablon `ServicePageTemplate` produkuje na 16 stronach USG content wysokiego wysiłku (1000+ sł., klasyfikacje kliniczne, cross‑linki, lokalne FAQ). Rollout wzorca USG + asymetria per strona (EX‑15) + własne media/wideo (EX‑21,28,30) + głos praktyka (EX‑16,17,18) podniosłyby E z ~28 do poziomu T/On‑Page bez zmiany architektury.

---

→ **Koniec Fazy 3.** Wyniki na dysku: `03-tresc-experience.md`, `_f3_analyze.mjs`, `_f3_corpus.json`, `_f3_shingle.txt`. Zalecane **`/compact`** przed Fazą 4 (**Semantyka, QBST + Expertise (E) + spójność tematyczna**). F4 czyta: skill `czesc-3/071–079` (encje, QBST, siteRadius, entity‑first), `czesc-6/125` (audyt Expertise: `siteFocusScore`/`siteRadius`, hub‑and‑spoke, luki QBST, jasność encji + Schema.org); repo `src/config/services.js`, `bodyAreas.js`, `src/app/components/schema/`; dane `crawl-dataset.json` (hTree, jsonLdTypes). Ryzyko do oceny: rozmycie `siteFocusScore` (4 wertykały: stomatologia + estetyka + USG + wlewy).
