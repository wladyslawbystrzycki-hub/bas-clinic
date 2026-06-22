# Faza 4 — Semantyka, QBST + Expertise (E) + spójność tematyczna

Dowodowy audyt sekcji **E‑Expertise** wg kompendium DrMax „Dokazatelnoe SEO 2026". Zakres skilla pokryty 1:1: `czesc-3/071–079` (EntityAnnotations, QBST, matematyka autorytetu site2vec/siteFocusScore/siteRadius, nieoczywiste techniki semantyczne) + `czesc-6/125` (audyt Expertise). Audyt **read‑only** wobec `src/` — dowody z repo + renderu prod (`localhost:3000`) + crawl‑datasetu.

**Metoda:** analiza deterministyczna (chmura H2/H3 per wertykał, skan salient terms body+JSON‑LD, rozkład `jsonLdTypes`, graf linków wychodzących) + **workflow 22 agentów**: `pipeline()` po 5 wymiarach Expertise → 6× inżynieria odwrotna QBST per kluczowa strona → **adwersaryjna weryfikacja** wszystkich findingów P0/FAIL (11 sceptyków). Artefakty: `_f4_workflow.json`, `_f3_corpus.json` (rendered `<main>` 64 stron), `crawl-dataset.json`.

> **Werdykt nagłówkowy:** Architektura semantyczna jest **zasadniczo zdrowa** — to mocniejszy filar niż E‑Experience (~28). siteRadius umiarkowany (wszystkie 4 wertykały to medycyna), reguła lewego kontekstu encji spełniona, **klaster USG = wzorzec** (kompletny hub‑and‑spoke, QBST‑pełnia 86/100, bogatszy schema). Słabości realne, ale w większości **klasy „wzbogacenie", nie „awaria"**: weryfikacja adwersaryjna obniżyła **8 z 11** findingów P0/FAIL (w tym **wykryła sfabrykowane liczby cosinus** i błąd faktograficzny). Po korekcie pozostają **2 twarde FAIL należące do F4** — obie to **systemowa luka treści YMYL**: brak „powikłań/skutków ubocznych" i „przeciwwskazań" na stronach estetyki/stomatologii. Trzeci FAIL (brak „przed/po") dubluje F3 (EX‑22/24/26) — to luka medialna/E‑E‑A‑T, nie semantyczna.

---

## Scoring wymiarów E‑Expertise (0–100, wstępny — finalizacja w F8)

| # | Wymiar | Sygnał Google | Wynik | Komentarz |
|---|---|---|---|---|
| A | Tematyczna koherencja | `siteFocusScore` / `site2vecEmbedding` | **52** | 4 wertykały, brak węzła‑parasola spinającego; encja `Dentist` nie pasuje do masy treści (USG ~55% korpusu). Broni lokalnie wspólny parasol medyczny. |
| B | siteRadius / off‑topic | `siteRadius` | **74** | Najmocniejszy — realny off‑topic niski (wszystko medyczne), pruning **niezalecany**. Ryzyka: wlewy‑outlier, `/programy-zabiegowe/` wielo‑jądrowa, hub estetyki = link‑directory. |
| C | Semantyczna pełnia / QBST | `QBST` (salient terms) | **48** | USG wzorcowo pełne (86); estetyka/stomatologia systemowo pomijają blok RYZYKA (powikłania/przeciwwskazania/przed‑po) + komercyjne salient terms (cena, geo). Korpus 3,8× cieńszy od USG. |
| D | Jasność encji + Schema.org | `EntityAnnotations` / Webref / disambiguation | **44** | Lewy kontekst OK (mocna strona). Słabo: 0 linków wychodzących (64/64), `ServiceSchema` minimalny, brak `Person` na `/o-nas/`, entity‑first linking tylko w USG. |
| E | Hub‑and‑spoke (koherencja) | `siteFocusScore` (kohezja klastra) | **52** | USG = kompletny klaster (sister‑linki + ItemList). Stomatologia płytka, estetyka (28 stron) bez warstwy pośredniej i kontekstowego linkowania in‑body. |

**Kompozyt E‑Expertise ≈ 54/100 (wst.)** — wyraźnie wyżej niż E‑Experience (~28). Po weryfikacji adwersaryjnej: **0 findingów P0**, **3 FAIL** (w tym 1 dubel F3), reszta to enrichment.

**QBST per strona (inżynieria odwrotna — przybliżenie domenowe, walidacja SERP = checklist):** USG piersi **86** (benchmark) · botoks 62 · wypełniacze HA 58 · modelowanie ust 58 · implanty 52 · licówki 52. Średnia komercyjna ~56; USG ciągnie w górę.

**Legenda:** Status ✅ OK / ⚠️ WARN / ❌ FAIL / ℹ️ INFO. Priorytet **po weryfikacji adwersaryjnej** (zmiany oznaczone `było→jest`). Effort S/M/L. ID globalne `XP-01…XP-35`. Werdykt sceptyka cytowany przy findingach weryfikowanych.

---

## Sekcja A — Tematyczna koherencja / `siteFocusScore` (wynik 52)
*Skill: 073 (site2vec/siteFocusScore/siteRadius), 125 sek.1. Rdzeń tematyczny, test „jednego zdania", węzeł integrujący.*

Klinika obejmuje **4 wertykały komercyjne**: stomatologia (19 stron), medycyna estetyczna (24), USG (16), wlewy witaminowe (1) — `OrganizationSchema.jsx:7` deklaruje jednak najwęższą encję `['MedicalOrganization','Dentist']`. Test „rdzeń w jednym zdaniu" zawodzi: nie da się opisać witryny jedną specjalnością.

**[XP-01]** Encja `Dentist` w schema nie pasuje do faktycznego rdzenia treści
- **Status:** ⚠️ WARN · **Sygnał:** `EntityAnnotations` / entity‑type vs masa treści · **Skill:** 125
- **Dowód:** `OrganizationSchema.jsx:7` → `@type=['MedicalOrganization','Dentist']`. Schemat renderowany **tylko na home** (1 strona, nie 64). Rozkład masy korpusu (`_f3_corpus.json`, weryfikacja sceptyka): USG ≈ 103,7k znaków (**~55%**), estetyka ≈ 43k, **stomatologia ≈ 32,9k (17,5%)**. USG avg 6483 zn./str. vs ~1730 dla dentystyki/estetyki. Centroid TF‑IDF zdominowany przez termy USG (`badanie, szyi, węzłów, doppler, tarczycy`).
- **Rekomendacja:** Zmień `Dentist` → szerszy prawdziwy typ `['MedicalClinic','MedicalOrganization']`; specjalności wyraź przez `medicalSpecialty: ['Dentistry','PlasticSurgery','Diagnostic']`. Nie deklaruj encji, której nie pokrywa większość korpusu.
- **Prio:** P0→**P1** · **Effort:** S
- **Werdykt sceptyka (needs‑adjustment):** *„Rdzeń tezy potwierdzony, USG dominuje nawet silniej niż w findingu. Ale błędny typ siedzi na 1 stronie, nie 64; `Dentist` nie jest fałszywe (klinika realnie robi stomatologię) — to niekompletność, nie błąd krytyczny. Dla nowej marki ledwie obecnej w KG entity‑type to sygnał miękki. FAIL→WARN, P0→P1."*

**[XP-02]** Rdzeń tematyczny nie przechodzi testu „jednego zdania"
- **Status:** ❌→⚠️ WARN · **Sygnał:** `siteFocusScore` / dyspersja centroidu · **Skill:** 073
- **Dowód:** 4 odrębne wertykały komercyjne o rozłącznych rdzeniach leksykalnych core‑terms (`zębów/próchnicy` vs `zmarszczek/mezoterapia` vs `doppler/węzły‑chłonne` vs `witaminy/samopoczucie`). Intro home **ma już** zdanie‑parasol („klinika stomatologiczno‑estetyczna … stomatologii, medycyny estetycznej i wlewów witaminowych") — ale **pomija USG** (2. wertykał wg masy!) i **nie jest powtarzane na hubach**.
- **Rekomendacja:** Przyjmij świadomie pozycjonowanie „klinika medyczna multi‑specjalność" i **zakotwicz je jawnym węzłem**: jednozdaniowy positioning (z USG!) powtarzany na home + 3 hubach + `/o-nas/`, by centroid miał jawny węzeł integrujący zamiast czterech sierot.
- **Prio:** P1→**P2** · **Effort:** M
- **Werdykt sceptyka (needs‑adjustment — KRYTYCZNY):** *„Dowód częściowo SFABRYKOWANY. Liczby cosine (0.154/0.123/0.086) NIE ISTNIEJĄ w żadnym artefakcie — pipeline liczy Jaccard na szinglach, nie cosine centroidów; żadnego site2vec w repo nie ma. Teza »brak wspólnego rdzenia leksykalnego« jest LITERALNIE FAŁSZYWA: `klinik/pacjent/specjalist/zdrowi/bas` są na 100% stron każdej wertykały — TF‑IDF je mechanicznie zeruje. KERNEL prawdziwy (4 wertykały, USG najdalej), ale precyzja metryki i status FAIL to overreach. → WARN/P2; usunięto liczby cosinus z raportu."*
- **⚠️ Korekta raportu:** wszystkie liczby cosine/site2vec usunięte jako niezmierzone; finding opisany jakościowo.

**[XP-03]** USG (radiologia) tworzy własny gęsty klaster przejmujący centroid
- **Status:** ⚠️ WARN · **Sygnał:** `site2vecEmbedding` (centroid) / `siteRadius` · **Skill:** 073
- **Dowód:** USG: 16 stron, najwyższa wewnętrzna kohezja, nagłówki bogate w QBST (wskazania/przygotowanie/przebieg/wynik), bogatszy schema (`MedicalTest`+`ImagingTest`+`MedicalDevice` ×15), `ItemList` na hubie. Semantycznie **najdalej** od stomatologii.
- **Rekomendacja:** To paradoksalnie **najlepiej zoptymalizowany wertykał — nie ruszać**. Potraktuj USG jako odrębny silos: hub jako `CollectionPage` z własnym `@id`, referowany z `#organization` przez `department`. Wysoki fokus USG działa wtedy na jego korzyść, zamiast „rozmywać markę".
- **Prio:** P1 · **Effort:** M

**[XP-04]** Wlewy witaminowe = pojedyncza izolowana strona‑outlier (wellness)
- **Status:** ⚠️ WARN · **Sygnał:** `siteRadius` / `siteFocusScore` (outlier) · **Skill:** 073
- **Dowód:** `/wlewy-witaminowe/` = 1 strona; leksyka `samopoczucie/witaminy/minerały` = wellness, nie YMYL‑medycyna kliniczna; najniższe podobieństwo do każdego rdzenia.
- **Rekomendacja:** Albo podłącz pod parasol medyczny (wskazania medyczne, zespół nadzorujący → przesunięcie z „wellness" ku „medycynie"), albo świadomie zostaw jako satelita CTA bez ambicji rankingowych. **Nie buduj wokół niej osobnego wertykału** — pogłębiłoby rozmycie.
- **Prio:** P2 · **Effort:** S

**[XP-05]** Brak warstwy hub/`CollectionPage` spinającej wertykały (centroid bez węzła integrującego)
- **Status:** ⚠️ WARN · **Sygnał:** `siteFocusScore` (graf encji) / `ItemList`/`CollectionPage` · **Skill:** 125
- **Dowód:** `ItemList` tylko na `/usg/`; huby `/stomatologia/`, `/medycyna-estetyczna/` **bez** `ItemList`/`CollectionPage`. `MedicalOrganization @id` nie jest referowane na home/hubach/info — brak struktury „organizacja → działy → usługi".
- **Rekomendacja:** Zbuduj graf encji: `#organization` (`MedicalClinic`) → `department`/`hasOfferCatalog` → 3–4 huby jako `CollectionPage` z `ItemList`, każdy referujący `provider:{@id:#organization}`. Niskie podobieństwo między wertykałami staje się wtedy **cechą architektury**, nie sygnałem chaosu.
- **Prio:** P1 · **Effort:** M

**[XP-06]** Kontr‑argument zważony: wspólny parasol medyczny realnie broni fokusu lokalnie
- **Status:** ℹ️ INFO · **Sygnał:** `siteFocusScore` (kalibracja) · **Skill:** 073
- **Dowód:** Wszystkie 4 wertykały to zdrowie/medycyna, jeden adres, jeden zespół (Bogdan & Iwanna Bas), wspólny rdzeń `klinik/pacjent/specjalist` na 100% stron. Dla **lokalnego** biznesu medycznego Google ocenia witrynę jako multi‑service local business — wspólny core + spójny NAP to realny sygnał spajający.
- **Rekomendacja:** Nie panikuj „rozmyciem" — to zarządzalne. Priorytetem jest **jawny węzeł‑parasol** (XP‑02/XP‑05), nie pruning. Dyspersja 4 wertykałów w obrębie jednej encji medycznej **nie** jest defektem klasy FAIL.
- **Prio:** P2 · **Effort:** S

---

## Sekcja B — `siteRadius` / off‑topic / dyspersja wewnątrzstronowa (wynik 74)
*Skill: 073, 077 (siteRadius wewnątrz strony), 079 (przeprogramowanie). Najmocniejszy wymiar.*

**[XP-07]** USG = osobne jądro semantyczne, ale poprawnie izolowane
- **Status:** ⚠️ WARN · **Sygnał:** `siteRadius` (pod‑site) · **Skill:** 073/077/079
- **Dowód:** USG semantycznie odległe od stomatologii, ale spójne wewnętrznie, zmostkowane (`related[]` sister‑linki) i dobrze otagowane. To zwarty pod‑site, nie chaos.
- **Rekomendacja:** Utrzymać izolację jako zaletę (silos + `CollectionPage`, jak XP‑03). Nie mieszać treści USG do hubów estetyki/stomatologii.
- **Prio:** P1 · **Effort:** M

**[XP-08]** `/wlewy-witaminowe/` = izolowany wellness‑outlier bez kontekstowego linkowania
- **Status:** ⚠️ WARN · **Sygnał:** `siteRadius` (outlier) · **Skill:** 079/073 · *(pokrywa się z XP‑04)*
- **Dowód:** Strona bez linków przychodzących w treści poza nawigacją; leksyka wellness odstaje od rdzenia.
- **Rekomendacja:** Jak XP‑04 — przeprogramować wstęp ku medycynie lub świadomie izolować.
- **Prio:** P2 · **Effort:** S

**[XP-09]** `/programy-zabiegowe/` — strona wielo‑jądrowa (kilka intentów na 1 URL)
- **Status:** ⚠️ WARN · **Sygnał:** `siteRadius` wewnątrzstronowy (rozmycie wektora) · **Skill:** 077
- **Dowód:** Strona agreguje wiele różnych programów/zabiegów — „kilka jąder tematycznych" na jednym URL → rozmycie embeddingu (skill 077: „strona z kilkoma jądrami jest gorsza niż dwie wąskie strony").
- **Rekomendacja:** Wydziel dominujący temat; podtematy albo do osobnych URL, albo ściśle podporządkuj strukturą `H3-H4` bez nowych klastrów encji.
- **Prio:** P2 · **Effort:** M

**[XP-10]** Hub `/medycyna-estetyczna/` = link‑directory z wielokrotną repetycją usług (multi‑nuclear), bez treści pillar
- **Status:** ⚠️ WARN · **Sygnał:** `siteRadius` wewnątrzstronowy / pillar completeness · **Skill:** 077/072
- **Dowód:** Hub renderuje 8 sekcji obszarów ciała z kartami, ale ta sama usługa powtarza się do 8× (mapowanie many‑to‑many `bodyAreas`) i **brak warstwy treści eksperckiej** (pillar‑body) — to katalog linków, nie pełnoprawny pillar.
- **Rekomendacja:** Dodaj na hub estetyki warstwę treści pillar (definicje, klasyfikacja zabiegów, kryteria doboru) — jak treść hubu USG. Inaczej hub nie buduje tematycznej grawitacji klastra.
- **Prio:** P1 · **Effort:** M

**[XP-11]** Hub `/stomatologia/` zasadniczo czysty pillar — mostek do USG akceptowalny
- **Status:** ✅ OK · **Sygnał:** `siteRadius` · **Skill:** 079/073
- **Dowód:** Hub stomatologii skupiony tematycznie; pojedynczy akapit „off‑axis" (np. odesłanie do USG) to akceptowalny mostek między działami, nie rozmycie.
- **Rekomendacja:** Bez zmian — wzorzec do naśladowania dla hubu estetyki.
- **Prio:** P2 · **Effort:** S

**[XP-12]** Deklaracja `Dentist` sprzeczna z rozkładem masy treści
- **Status:** ⚠️ WARN · **Sygnał:** `siteFocusScore` / entity‑type · **Skill:** 073/077 · *(pokrywa się z XP‑01)*
- **Dowód:** USG+estetyka = ~40/61 stron komercyjnych i ~75% masy tekstu; `Dentist` reprezentuje mniejszość.
- **Rekomendacja:** Jak XP‑01 — `MedicalClinic` + `medicalSpecialty[]`.
- **Prio:** P1 · **Effort:** S

**[XP-13]** Brak drastycznego off‑topicu — `siteRadius` umiarkowany, pruning niezalecany
- **Status:** ℹ️ INFO · **Sygnał:** `siteRadius` (kalibracja) · **Skill:** 079/073
- **Dowód:** Żadna strona nie jest off‑topic w stylu „przepis na szarlotkę na blogu B2B" (przykład skilla 073). Wszystko mieści się w medycynie/zdrowiu.
- **Rekomendacja:** **Nie usuwaj żadnej strony.** Optymalizuj przez węzeł‑parasol i kontekstowe linkowanie, nie przez pruning.
- **Prio:** P2 · **Effort:** S

---

## Sekcja C — Semantyczna pełnia / QBST (wynik 48)
*Skill: 072 (QBST), 074 (praktyczne kroki / reverse‑eng SERP), 076 (QBST przez brak), 125 sek.2. Pokrycie salient terms na stronach komercyjnych.*

**[XP-14]** Systemowy brak bloku „powikłania / skutki uboczne" na estetyce i stomatologii (luka YMYL)
- **Status:** ❌ FAIL · **Sygnał:** `QBST` (salient terms) + YMYL content quality · **Skill:** 072/076
- **Dowód:** Frazy „powikłania" i „skutki uboczne" **nie występują na ŻADNEJ z 64 stron** (`grep` site‑wide = 0). Skan źródeł: 30/40 nie‑USG stron komercyjnych ma **zero** wzmianki o skutkach (obrzęk/siniak/zaczerwienienie). `/wypelniacze-ha/`, `/modelowanie-ust/` = 0 skutków/powikłań/przeciwwskazań — to zabiegi iniekcyjne z realnym ryzykiem (okluzja naczyniowa, guzki). FAQ‑schema ratuje tylko ból/gojenie/trwałość, **nie** powikłania.
- **Rekomendacja:** Dodaj na każdej stronie zabiegowej dedykowaną sekcję `H2/H3` „Możliwe skutki uboczne i powikłania" + „Bezpieczeństwo". To jednocześnie salient term QBST i twardy sygnał E‑E‑A‑T/trust dla YMYL.
- **Prio:** P0→**P1** · **Effort:** L
- **Werdykt sceptyka (needs‑adjustment):** *„Teza trzyma się co do meritum, luka jest nawet WIĘKSZA (0× site‑wide, nie 0× na 4 stronach). ALE błąd faktograficzny: `/implanty-zebowe/` NIE jest »0×« — FAQ zawiera »lekki obrzęk i dyskomfort« (są w FAQPage JSON‑LD, nie w body — korpus `_f3_corpus.json` pomija odpowiedzi FAQ). Liczba 7/38 → ~10/40. »QBST wymusza top‑5 term« przekoloryzowuje mechanizm. FAIL OK, P0→P1."*
- **⚠️ Korekta:** `/implanty-zebowe/` ma częściowy opis pozabiegowy w FAQ‑schema — usunięty z listy „0×". Luka dotyczy ~30/40 stron (skutki) i jest najostrzejsza na zabiegach iniekcyjnych.

**[XP-15]** Zerowe pokrycie dowodów wizualnych „przed/po" (0/38 stron komercyjnych)
- **Status:** ❌ FAIL · **Sygnał:** E‑E‑A‑T / Experience evidence (**nie** czysty QBST) · **Skill:** 125 · *(dubel F3: EX‑22/EX‑24/EX‑26)*
- **Dowód:** 0/43 stron komercyjnych zawiera „przed i po"/„metamorfoza"/„galeria"; `ServicePageTemplate` nie ma komponentu galerii; `ServiceSchema` nie ma pola `image`. Jedyne 2 trafienia „wizualizacj" to cyfrowy plan 3D, nie zdjęcia pacjentów.
- **Rekomendacja:** To **luka medialna/assetowa**, nie tekstowa — domknięcie wymaga **własnych zdjęć przed/po** (zgody RODO) + `MedicalProcedure.image`/`ImageObject`. Realizacja wspólnie z F3 (rollout własnych mediów).
- **Prio:** P1 · **Effort:** L
- **Werdykt sceptyka (needs‑adjustment):** *„Fakt OK (0/43). ALE to gap MEDIALNY, nie tekstowy salient term — etykieta »QBST/semantyczna pełnia« myląca; oś to E‑E‑A‑T/Experience. DUPLIKUJE F3 (EX‑22 stock fałszywie podpisany »nasze realizacje«, EX‑24/26 »0 galerii przed/po«) — ryzyko double‑countingu. Przenieść oś, zaznaczyć nakładanie."* → **oznaczone jako dubel F3; liczone raz w bilansie F4 jako cross‑ref.**

**[XP-16]** Niespójne pokrycie „przeciwwskazań" — tylko 2/38 stron
- **Status:** ❌ FAIL · **Sygnał:** `QBST` + YMYL · **Skill:** 072
- **Dowód:** „przeciwwskaz" w body tylko na `/mezoterapia-iglowa/` i `/redukcja-zmarszczek-botox/` (2 strony); +1 w FAQ‑schema (`/osocze-bogatoplytkowe/`). Strony sztandarowe — `/implanty-zebowe/`, `/wypelniacze-ha/`, `/modelowanie-ust/`, `/licowki/` — **zero** wystąpień gdziekolwiek (`curl`+`grep`=0, nagłówki potwierdzają brak sekcji). To zabiegi inwazyjne z twardymi przeciwwskazaniami (implant: antykoagulacja, bisfosfoniany, cukrzyca; HA/botox: ciąża, choroby autoimmunologiczne, infekcje).
- **Rekomendacja:** Standaryzuj w `ServicePageTemplate` pole „Przeciwwskazania" (dedykowana sekcja `H2/H3`, nie zatopiona w akapicie). Klinicznie istotne dla bezpieczeństwa pacjenta.
- **Prio:** P0→**P1** · **Effort:** M
- **Werdykt sceptyka (confirmed):** *„Dowód wytrzymuje. Strony inwazyjne mają ZERO przeciwwskazań gdziekolwiek. Klinicznie istotne, nie kosmetyczne. Nawet 2 »pokryte« mają je zatopione w akapicie, nie w sekcji H2/H3 — realny stan GORSZY. Framing YMYL E‑E‑A‑T mocniejszy niż czysty QBST; sam fakt faktyczny i materialny. FAIL OK, P0→P1."*

**[XP-17]** Korpus komercyjny ~3,8× cieńszy od USG — niedobór objętości semantycznej
- **Status:** ⚠️ WARN · **Sygnał:** `QBST` (głębia pokrycia) · **Skill:** 076
- **Dowód:** USG avg ~6483 zn./str. vs ~1730 dla estetyki/stomatologii. Mniej miejsca na sub‑encje i salient terms → niższe pokrycie „zapamiętanego modelu" QBST dla zapytań transakcyjno‑zdrowotnych.
- **Rekomendacja:** Pogłębiaj strony komercyjne wg modelu USG — ale **przez pokrycie podtematów** (cena, przeciwwskazania, powikłania, rekonwalescencja, porównania, sub‑encje), nie „wodę" (skill 076: „QBST ocenia obecność pojęć, nie głębokość — czasem 1 akapit > 1000 słów wody").
- **Prio:** P1 · **Effort:** L

**[XP-18]** Brak „rekonwalescencji / zaleceń pozabiegowych" na większości estetyki
- **Status:** ⚠️ WARN · **Sygnał:** `QBST` + YMYL · **Skill:** 072
- **Dowód:** Większość stron iniekcyjnych nie opisuje downtime/zaleceń po zabiegu (nie masować, unikać sportu/sauny itd.) — przewidywalne PAA dla zabiegów estetycznych.
- **Rekomendacja:** Sekcja „Zalecenia po zabiegu / rekonwalescencja" w szablonie.
- **Prio:** P1 · **Effort:** M

**[XP-19]** Część salient terms POKRYTA w `FAQPage` schema (trwałość/bezpieczeństwo/ból) — nie penalizować jako zero
- **Status:** ℹ️ INFO · **Sygnał:** `QBST` (kalibracja) · **Skill:** 074
- **Dowód:** FAQ (w `FAQPage` JSON‑LD) pokrywa trwałość, bezpieczeństwo, ból, obszary — to **nie zero**. Niuans metodyczny: odpowiedzi FAQ żyją **tylko w schema**, nie w widocznym `<main>` (`FAQSection` renderuje `{open && <p>}` — F3).
- **Rekomendacja:** (1) Nie traktować luk jako „zero pokrycia". (2) Rozważyć renderowanie odpowiedzi FAQ w SSR (dziś treść jest tylko w JSON‑LD — QBST/HCS oceniają głównie tekst widoczny).
- **Prio:** P2 · **Effort:** S

**[XP-20]** CHECKLIST: inżynieria odwrotna QBST przez analizę SERP top‑5
- **Status:** ℹ️ INFO (checklist zewnętrzny) · **Sygnał:** `QBST` · **Skill:** 074/125
- **Dowód:** Pełna walidacja „zapamiętanego modelu" wymaga danych SERP/PAA (poza repo). Tabela QBST poniżej to **przybliżenie domenowe**, nie odczyt rankingu Google.
- **Checklist manualny (per kluczowa strona komercyjna):**
  1. Wpisz zapytanie (np. „implanty zębowe Wrocław") → otwórz top‑5 organicznych (pomiń reklamy/agregatory).
  2. Wypisz wspólne `H2/H3`, salient terms, encje, bloki PAA („Ludzie też pytają").
  3. Dodaj autouzupełnianie + „powiązane wyszukiwania" (skill 076 — QBST‑Gap).
  4. Porównaj z treścią strony → uzupełnij brakujące podtematy mikrosekcjami (3–5 zdań).
  - **Narzędzia:** SurferSEO / Website Auditor / Ahrefs / ręcznie.
- **Prio:** P1 · **Effort:** M

### Inżynieria odwrotna QBST — kluczowe strony (przybliżenie domenowe)

| Strona | Zapytanie | QBST | Główne luki (missing salient terms / PAA) |
|---|---|---|---|
| `/usg/piersi/` | USG piersi Wrocław | **86** ✅ | tylko: cena+skierowanie w body (są w FAQ‑schema), „jak często", próg wieku |
| `/redukcja-zmarszczek-botox/` | botoks zmarszczki Wrocław | 62 | skutki uboczne/powikłania (opadanie powieki, krwiaki), zalecenia pozabiegowe, przed/po, jednostki/dawka, marki preparatów, cena, **geo w body** |
| `/wypelniacze-ha/` | wypełniacze HA Wrocław | 58 | przeciwwskazania, powikłania (guzki, Tyndall, martwica naczyniowa), downtime, przed/po, cena, marki (Juvederm/Restylane), **geo w body** |
| `/modelowanie-ust/` | powiększanie ust Wrocław | 58 | przeciwwskazania (opryszczka, ciąża), powikłania, odwracalność (hialuronidaza), przed/po, cena, techniki, **geo w body** |
| `/implanty-zebowe/` | implanty zębowe Wrocław | 52 | cena/NFZ, przeciwwskazania, powikłania (periimplantitis), augmentacja/sinus‑lift, all‑on‑4, abutment, proteza‑vs‑implant, systemy (Straumann/Nobel), **geo w body** |
| `/licowki/` | licówki porcelanowe Wrocław | 52 | cena, nieodwracalność/szlifowanie, ból/znieczulenie, powikłania, przed/po, rodzaj ceramiki (emax), no‑prep, **geo w body** |

> **Wzorzec USG piersi (86):** mapuje kanoniczny intent diagnostyczny (czym → co wykrywa → vs mammografia → wskazania → przygotowanie/kiedy → przebieg → wynik) + disclaimery YMYL (nie rozpoznaje raka, interpretacja lekarza, MR przy implantach) + geo „we Wrocławiu" + NAP w treści. **To benchmark dla wszystkich pozostałych stron.**

> **🔁 Sygnał przekrojowy (wzmocnienie OG‑07 z F2 + wejście do F6 Local):** na **wszystkich 6 stronach komercyjnych** geo „Wrocław" występuje **tylko w meta description / title**, a jest **nieobecne w widocznym body/H1/H2 i FAQ** (wyjątek: USG, które konsekwentnie ma „we Wrocławiu" + adres Opatowicka 132 w treści). Przy zapytaniach lokalnych to istotny brak `geoTopicality`. Naprawa: geo‑anchor w H1/wstępie + `areaServed` w `ServiceSchema` (szczegóły → **Faza 6**).

---

## Sekcja D — Jasność encji + EntityAnnotations / disambiguation + Schema.org (wynik 44)
*Skill: 071 (EntityAnnotations/Webref), 074 (Schema.org), 075 (prawdopodobieństwo disambiguation / encje kotwicowe), 078 (entity‑first linking), 125 sek.3.*

**[XP-21]** Zero linków wychodzących do encji kotwicowych KG na wszystkich 64 stronach
- **Status:** ❌→⚠️ WARN · **Sygnał:** `EntityAnnotations` / disambiguation (entity‑anchoring) · **Skill:** 074/078
- **Dowód:** `outboundLinks=[]` na 64/64 stronach (`crawl-dataset.json`). Jedyne linki zewnętrzne to ikony social w Footerze (kierują do `smile.expert/` — nie należą nawet do marki BAS). **Zero** linków do węzłów kotwicowych KG (Wikipedia, ChPL, producenci: BTL/Exion, systemy implantów, substancje: toksyna botulinowa, kwas hialuronowy). Słaba lokalna marka „Klinika BAS" pozostaje nieanchorowana do silnych encji (skill 075).
- **Rekomendacja:** Dodaj 1–3 linki do autorytatywnych encji per strona (toksyna botulinowa/ChPL, BTL Exion → producent, kwas hialuronowy, system implantologiczny). Treść idzie przez `dangerouslySetInnerHTML` → wstawienie `<a>` trywialne.
- **Prio:** P1→**P2** · **Effort:** M
- **Werdykt sceptyka (needs‑adjustment):** *„Fakt 100% prawdziwy (64/64). ALE zły wymiar: outbound‑anchoring to wąski pod‑sygnał disambiguation, NIE siteFocus/QBST. »FAIL« sugeruje aktywną usterkę — to brakujący tani enhancement, nie defekt. Disambiguation JUŻ rozwiązany lewym kontekstem (breadcrumb+kategoria+marka). Słaby sygnał korroborujący E‑E‑A‑T. FAIL→WARN, P1→P2 (luki treści YMYL i bogatszy schema mają wyższy priorytet)."*

**[XP-22]** `ServiceSchema` minimalny dla 42 `MedicalProcedure` (brak `medicalSpecialty`/`bodyLocation`/`howPerformed`/`image`)
- **Status:** ❌→⚠️ WARN · **Sygnał:** Schema.org / EntityAnnotations · **Skill:** 075/125
- **Dowód:** `ServiceSchema.jsx:11-28` renderuje dokładnie `{@type, name, description, url, provider}` (+opcjonalnie `usesDevice`). Render botoks potwierdza brak pól rozszerzonych. Dotyczy 42 stron `MedicalProcedure`.
- **Rekomendacja:** Wzbogać per strona z `config/services.js`: `medicalSpecialty`, `image` (gdy będą własne media), `bodyLocation`, `howPerformed`, `procedureType`. **Bonus:** `/btl-exion/` to zabieg urządzeniowy, ale **nie przekazuje `usesDevice`** — łatwy fix.
- **Prio:** P1→**P2** · **Effort:** M
- **Werdykt sceptyka (needs‑adjustment):** *„Fakt w kodzie potwierdzony. ALE to brakujące OPCJONALNE właściwości, nie błąd — schema jest WALIDNY, poprawnie linkuje `provider` przez `@id`. `MedicalProcedure` nie odblokowuje rich‑results, więc realny wpływ na SERP ≈ 0. KOREKTA findingu: USG TEŻ nie ma `bodyLocation`/`howPerformed`/`medicalSpecialty`/`image` — brak jest JEDNOLITY na 64 stronach, nie asymetria estetyka‑vs‑USG. FAIL→WARN, P1→P2; naprawiać jako enrichment razem z innymi schema‑taskami."*

**[XP-23]** Entity‑first internal linking obecny tylko w USG — 42 strony nie‑USG mają 0 kontekstowych ankor w body
- **Status:** ❌→⚠️ WARN · **Sygnał:** `EntityAnnotations` / graf encji (skill 078) · **Skill:** 078
- **Dowód:** USG: 15/15 podstron ma 3–5 prawdziwych in‑body ankorów (`EXPERT_INFO` przez `dangerouslySetInnerHTML`), entity‑first/opisowych („USG węzłów chłonnych", „USG tarczycy"). Wszystkie **42** strony nie‑USG (`ServicePageTemplate`) mają **0** in‑body ankorów (`grep href="/"`=0). 39 stron‑liści (botoks, wypełniacze, implanty, modelowanie) ma zero zarówno prozy‑linków, jak i kart powiązanych.
- **Rekomendacja:** Dodaj kontekstowe linki encji w treści estetyki/stomatologii (np. „wypełniacze HA" → `/modelowanie-ust/`). Skill 078: ankor nie musi być exact‑match („te zabiegi", „ta substancja") — EntityAnnotations rozpoznaje encję linku.
- **Prio:** P1 · **Effort:** M
- **Werdykt sceptyka (needs‑adjustment):** *„Dowód realny, asymetria nawet ostrzejsza (39 leaf = 0 prozy+0 kart). ALE strony NIE są osierocone — menu/Header/Footer/breadcrumb linkują każdą. Brakuje wyłącznie KONTEKSTOWYCH ankorów encji in‑body — enhancement, nie awaria. FAIL→WARN; P1 obronne (systematyczny brak na 36+ stronach = realna luka topical authority), graniczne z P2. Dla nowej marki YMYL linkowanie wewnętrzne to jeden z nielicznych sygnałów encji pod pełną kontrolą."* · **Uwaga:** pełny graf linków → **Faza 5**.

**[XP-24]** Brak `Person`/`Physician` schema na `/o-nas/` mimo realnych bio founderów
- **Status:** ❌→⚠️ WARN · **Sygnał:** `EntityAnnotations` / autor jako encja (YMYL) · **Skill:** 071/075
- **Dowód:** `/o-nas/` renderuje **tylko** `BreadcrumbList` (0 `Person`/`Physician`). `OrganizationSchema` (tylko home) ma `founder` `Person` z samym `name`+`jobTitle` (bez `@id`, `medicalSpecialty`, `alumniOf`, `sameAs`). `clinic.js:36-42` zawiera pełne bio (`lek. med.`, absolwent Akademii Medycznej we Wrocławiu, „lekarz w 3. pokoleniu") + cytat — ale **tylko jako tekst**.
- **Rekomendacja:** Dodaj komponent `Person`/`Physician` na `/o-nas/` z `@id` powiązanym z `founder` w `OrganizationSchema`, `alumniOf`, `medicalSpecialty`, `sameAs` (gdy powstaną profile zewnętrzne). Powiąż autora z encją kliniki.
- **Prio:** P1→**P2** · **Effort:** M
- **Werdykt sceptyka (needs‑adjustment):** *„Fakty potwierdzone. ALE bogate bio JEST w widocznym body /o-nas/ — sygnał E‑E‑A‑T istnieje jako TEKST; brakuje warstwy maszynowej. »mimo realnych bio« + FAIL przeszacowuje (nic nie zepsute). `clinic.js` nie ma żadnych zewnętrznych `sameAs` (brak LinkedIn/ORCID/Wikidata) → wartość `@id` umiarkowana. Ostrożnie z `medicalSpecialty` (founder = lekarz med./estetyczna, nie `Dentist` — ryzyko niespójności z Org). To strona nietransakcyjna. FAIL→WARN, P1→P2."* · **Łączy się z Fazą 7 (E‑E‑A‑T/autorzy).**

**[XP-25]** Founder `Person` bez `sameAs`/`knowsAbout`/`medicalSpecialty` — encja eksperta nieanchorowana
- **Status:** ⚠️ WARN · **Sygnał:** `EntityAnnotations` (anchoring encji autora) · **Skill:** 071/078
- **Dowód:** `OrganizationSchema.jsx:26-30` — `founder` ma tylko `name`+`jobTitle`. Brak powiązań z encjami wiedzy/profilami.
- **Rekomendacja:** Uzupełnij `knowsAbout` (specjalizacje), `sameAs` (profile zawodowe — gdy powstaną), `alumniOf`. Konkret → Faza 7.
- **Prio:** P2 · **Effort:** S

**[XP-26]** Huby stomatologia i medycyna‑estetyczna bez `ItemList`/`CollectionPage`
- **Status:** ⚠️ WARN · **Sygnał:** Schema.org (encja kolekcji) · **Skill:** 075/125 · *(pokrywa się z XP‑05)*
- **Dowód:** `ItemList` tylko na `/usg/`. Huby stom./estetyki bez strukturalnego sygnału kolekcji usług.
- **Rekomendacja:** `CollectionPage`+`ItemList` na obu hubach (jak USG).
- **Prio:** P2 · **Effort:** S

**[XP-27]** Huby i strony info nie referują `@id` `MedicalOrganization` w grafie encji
- **Status:** ⚠️ WARN · **Sygnał:** graf encji / `@id` referencing · **Skill:** 075
- **Dowód:** `MedicalOrganization` nieobecne na `/`, `/stomatologia/`, `/medycyna-estetyczna/`, `/usg/`, `/kontakt/`, `/cennik/`, `/o-nas/` — huby nie wiążą się z encją organizacji przez `@id`.
- **Rekomendacja:** Każda strona powinna referować `provider`/`publisher`:`{@id:#organization}`, by spiąć graf encji witryny.
- **Prio:** P2 · **Effort:** S

**[XP-28]** Lewy kontekst encji (disambiguation) spełniony — mocna strona ✅
- **Status:** ✅ OK · **Sygnał:** `Webref`/disambiguation (reguła lewego kontekstu, skill 075) · **Skill:** 074/078
- **Dowód:** Intro każdej strony: breadcrumb („Strona główna / Stomatologia / Implanty zębowe") + nazwa kategorii + „w Klinice BAS" **poprzedzają** H1/encję → algorytm dostaje kontekst markowo‑kategorialny **przed** pierwszym wspomnieniem. USG dodaje geo „we Wrocławiu".
- **Rekomendacja:** Utrzymać wzorzec. Wzmocnić tylko anchoring do encji zewnętrznych (XP‑21).
- **Prio:** P2 · **Effort:** S

**[XP-29]** `@type Dentist` deklarowany globalnie mimo że dentystyka to mniejszość treści
- **Status:** ℹ️ INFO · **Sygnał:** entity‑type · **Skill:** 071/125 · *(pokrywa się z XP‑01/XP‑12)*
- **Dowód:** Jak XP‑01.
- **Rekomendacja:** Jak XP‑01.
- **Prio:** P2 · **Effort:** S

---

## Sekcja E — Struktura klastrów Hub‑and‑Spoke (koherencja semantyczna) (wynik 52)
*Skill: 125 sek.1 (hub‑and‑spoke), 073. Tylko aspekt SEMANTYCZNY klastra — pełny graf linków = Faza 5.*

**[XP-30]** Pod‑huby obszarów ciała `/medycyna-estetyczna/{obszar}/` nie istnieją jako strony
- **Status:** ❌→ℹ️ INFO · **Sygnał:** pillar completeness / lokalny `siteFocusScore` · **Skill:** 125
- **Dowód:** `src/app/medycyna-estetyczna/` = tylko `page.jsx` (landing); 0 katalogów `{obszar}/`; 8 `BODY_AREAS` żyje tylko w `bodyAreas.js`+`menuConfig.js` (z `groupOnly:true` — celowo nie‑klikalne). `loadBodyAreaData()` = martwy kod, `src/data/.../body-areas/` pusty → **porzucony plan, nie regresja**. Brak 404/orphanów.
- **Rekomendacja:** **Niepilne.** Flat hub JUŻ renderuje 8 obszarów jako sekcje z kartami (działający płaski hub‑and‑spoke). Dodanie 8 cienkich stron **grozi kanibalizacją + thin‑content (YMYL!)**, chyba że każda dostanie unikalny content ekspercki → to inicjatywa contentowa, nie naprawa.
- **Prio:** P0→**P2** · **Effort:** L
- **Werdykt sceptyka (needs‑adjustment):** *„Dowody faktyczne potwierdzone, ale to porzucony plan — nic nie zepsute (brak 404/orphan/broken links). Flat hub renderuje wszystkie 8 obszarów jako sekcje z kartami — poprawny działający wzorzec. Dodanie 8 stron grozi kanibalizacją/thin‑content. FAIL→INFO, P0→P2 (czysto addytywna rozbudowa)."*

**[XP-31]** 24 spoke'i estetyki bez kontekstowego linkowania wewnątrzklastrowego in‑body
- **Status:** ❌→⚠️ WARN · **Sygnał:** kohezja klastra (`siteFocusScore`) · **Skill:** 073 · *(wejście do Fazy 5)*
- **Dowód:** `AESTHETIC_SERVICES` nie ma pola `related` (kontrast: `USG_SERVICES` ma 15× `related`, `services.js:356-473`). 24 spoke'i: `childServices/related=0/24`. `ServicePageTemplate` renderuje blok „Powiązane" tylko gdy `childServices` przekazane — estetyka nie przekazuje nic. Render: `/usg/tarczycy/` ma w `<main>` blok „Powiązane badania USG" (3–4 sister‑linki); `/wypelniacze-ha/` = 0 sister‑linków w `<main>`.
- **Rekomendacja:** Dodaj `related[]` do `AESTHETIC_SERVICES` (grupowanie po `bodyAreas`) + renderuj blok „Powiązane zabiegi" jak USG. Fallback dla singletonów (`cialo`, `pachy` — brak rodzeństwa).
- **Prio:** P0→**P2** · **Effort:** M
- **Werdykt sceptyka (needs‑adjustment):** *„Dowody techniczne OK. ALE »semantyczne wyspy« to nadinterpretacja — sister‑linki ISTNIEJĄ, lecz wyłącznie w globalnym `<footer>` (`inFooter=True, inMainContent=False`) + Header menu → strony crawlowalne, w grafie PageRank, połączone sitewide nav. Brakuje KONTEKSTOWEGO linkowania in‑body. Prawidłowy framing: »brak in‑body cross‑linków, w przeciwieństwie do USG«, nie »izolacja«. Wpływ na siteFocus marginalny. FAIL→WARN, P0→P2."* · **Pełna analiza grafu → Faza 5.**

**[XP-32]** USG = wzorcowy kompletny hub‑and‑spoke ✅
- **Status:** ✅ OK · **Sygnał:** `siteFocusScore` (kohezja klastra) · **Skill:** 125
- **Dowód:** 6 klastrów tematycznych (`USG_CLUSTERS`), `related[]` sister‑linki na 15/15 podstron, `ItemList` na hubie, bogatszy schema. Wewnętrzna kohezja klastra najwyższa w witrynie.
- **Rekomendacja:** **Wzorzec do replikacji** na estetykę i stomatologię.
- **Prio:** P2 · **Effort:** S

**[XP-33]** Hub stomatologii płytki — flat lista, brak grupowania klastrowego i `ItemList`
- **Status:** ⚠️ WARN · **Sygnał:** `siteFocusScore` (struktura klastra) · **Skill:** 125
- **Dowód:** `/stomatologia/` = płaska lista usług bez grupowania tematycznego (kontrast: 6 klastrów USG). Tylko 2 gałęzie mają dzieci (ortodoncja, chirurgia).
- **Rekomendacja:** Pogrupuj usługi w klastry tematyczne (estetyczna / zachowawcza / chirurgia / ortodoncja / protetyka) + `ItemList`.
- **Prio:** P1 · **Effort:** M

**[XP-34]** Stomatologia: brak sister‑linków między rodzeństwem, płytkie drzewo
- **Status:** ⚠️ WARN · **Sygnał:** kohezja klastra · **Skill:** 073
- **Dowód:** Brak `related[]` w `STOMATOLOGIA_SERVICES`; rodzeństwo (implanty ↔ leczenie‑bezzębia ↔ protetyka) niezlinkowane kontekstowo in‑body.
- **Rekomendacja:** Dodaj `related[]` (jak USG) między powiązanymi usługami dentystycznymi.
- **Prio:** P1 · **Effort:** M

**[XP-35]** Hub estetyki bez warstwy eksperckiej i schematu kolekcji
- **Status:** ⚠️ WARN · **Sygnał:** pillar completeness · **Skill:** 125 · *(pokrywa się z XP‑10)*
- **Dowód:** `/medycyna-estetyczna/` = katalog linków bez treści pillar i bez `CollectionPage`/`ItemList` (vs USG/—).
- **Rekomendacja:** Warstwa treści eksperckiej + `CollectionPage`+`ItemList` na hubie estetyki.
- **Prio:** P1 · **Effort:** M

---

## Weryfikacja adwersaryjna — podsumowanie

**Workflow:** 22 agenty (5 wymiarów + 6× QBST‑RE + 11 sceptyków). Zweryfikowano wszystkie findingi P0/FAIL (11). Wynik: **0 confirmed bez zastrzeżeń, 11 needs‑adjustment, 0 refuted** — przy czym „needs‑adjustment" tu znaczy „rdzeń tezy stoi, ale status/prio/dowód do korekty".

**Kluczowe korekty wymuszone przez sceptyków (transparentnie):**
1. **XP‑02 — wykryto sfabrykowane liczby cosinus/site2vec.** Pipeline liczy tylko Jaccard‑szingle; żadnego embeddingu w repo nie ma. Liczby usunięto, finding zjakościowany, FAIL→WARN/P2. Teza „brak wspólnego rdzenia leksykalnego" obalona jako literalnie fałszywa (wspólny core `klinik/pacjent/specjalist` na 100% stron).
2. **XP‑14 — błąd faktograficzny:** `/implanty-zebowe/` ma opis pozabiegowy w FAQ‑schema (korpus pomija odpowiedzi FAQ). Skorygowano; luka realna, ale ~30/40, nie „wszystkie".
3. **XP‑22 — obalona asymetria:** USG też nie ma `bodyLocation`/`howPerformed`/`image` — brak jednolity na 64 stronach.
4. **XP‑31 — „semantyczne wyspy" obalone:** sister‑linki istnieją w footerze (crawlowalne, w PageRank); brak dotyczy tylko kontekstowych linków in‑body.
5. **8 z 11** findingów P0/FAIL obniżono (FAIL→WARN: XP‑01, XP‑21, XP‑22, XP‑23, XP‑24; FAIL→INFO: XP‑30; P0→P1: XP‑14, XP‑16; P0→P2: XP‑31). Powód systemowy: P0 zarezerwowane dla żywych szkód (noindex/canonical/404), a nie dla „brakującego wzbogacenia". Reszta findingów to enrichment.
6. **Zachowane jako twarde FAIL:** XP‑14 (powikłania), XP‑16 (przeciwwskazania) — realna systemowa luka treści YMYL należąca do F4. XP‑15 (przed/po) zachowane, ale oznaczone jako **dubel F3** (liczone raz).

---

## Bilans Fazy 4 (po weryfikacji adwersaryjnej)

| Status | Liczba | Findingi |
|---|---|---|
| ❌ FAIL | **3** | XP‑14 (powikłania/skutki uboczne), XP‑16 (przeciwwskazania), XP‑15 (przed/po — *dubel F3*) |
| ⚠️ WARN | **23** | XP‑01,03,04,05,07,08,09,10,12,17,18,21,22,23,24,25,26,27,31,33,34,35 |
| ✅ OK | **3** | XP‑11 (hub stom. czysty), XP‑28 (lewy kontekst), XP‑32 (USG wzorzec) |
| ℹ️ INFO | **6** | XP‑02 (korekta metodyczna), XP‑06, XP‑13, XP‑19, XP‑20 (checklist SERP), XP‑29, XP‑30 |
| **Razem** | **35** | (1 z FAIL = cross‑ref F3, liczony raz w syntezie F8) |

**Priorytety F4 po weryfikacji:** **0× P0.** P1: XP‑01/12 (typ encji `MedicalClinic`), XP‑05 (węzeł‑parasol/CollectionPage), XP‑14/16/17/18 (treść YMYL: powikłania/przeciwwskazania/rekonwalescencja + głębia), XP‑15 (media przed/po — z F3), XP‑20 (checklist QBST‑SERP), XP‑23 (entity‑first linking), XP‑33/34/35 (klastry stom./estetyka). P2: reszta (enrichment schema/encji).

**Headline F4:** filar **Expertise zdrowszy niż Experience** (~54 vs ~28). Architektura semantyczna działa (siteRadius 74, lewy kontekst OK, **USG = wzorzec klasy A** na 3 osiach: QBST‑pełnia 86, kompletny hub‑and‑spoke, bogatszy schema). Dwa realne długi do spłaty: **(1) systemowa luka treści YMYL** (powikłania/przeciwwskazania/rekonwalescencja na estetyce/stomatologii — jednocześnie luka QBST i trust), **(2) brak węzła‑parasola + warstwy encji/schematu** spinającej 4 wertykały (typ `MedicalClinic`, `CollectionPage`/`ItemList`, entity‑first linking, `Person` autora). Rollout wzorca USG na pozostałe wertykały zamyka większość luk bez zmiany architektury.

---

## Macierz pokrycia kompendium — Faza 4 (`czesc-3/071–079` + `czesc-6/125`)

| Plik skilla | Temat | Pokrycie w F4 |
|---|---|---|
| `071-od-slow-do-encji` | EntityAnnotations / Knowledge Graph / Webref | ✅ Sekcja D (XP‑21,24,28,29): disambiguation, encje autora, jednoznaczność |
| `072-qbst-system` | QBST salient terms | ✅ Sekcja C (XP‑14,16): pokrycie/luki salient terms |
| `073-matematyka-autorytetu` | site2vec / siteFocusScore / siteRadius | ✅ Sekcje A+B (XP‑01..06, 07..13) |
| `074-00-nieoczywiste-techniki` | indeks 5 technik | ✅ meta (mapowane na 075–079 poniżej) |
| `074-praktyczne-kroki` | reverse‑eng SERP + Schema.org + fokus | ✅ Sekcja C (XP‑20 checklist) + D (XP‑22) |
| `075-prawdopodobienstwo-disambiguation` | lewy kontekst, encje kotwicowe | ✅ Sekcja D (XP‑21 anchoring, XP‑28 lewy kontekst) |
| `076-qbst-przez-brak` | QBST‑Gap (brakujące oczekiwane terminy) | ✅ Sekcja C (XP‑14,17 + tabela QBST‑RE: missing terms/PAA) |
| `077-site-radius-control` | siteRadius wewnątrz strony | ✅ Sekcja B (XP‑09 programy‑zabiegowe, XP‑10 hub estetyki) |
| `078-entity-first-linking` | graf encji, ankory nie‑exact | ✅ Sekcja D (XP‑23) |
| `079-semantyczne-przeproszowanie` | zmiana wektora przez wstęp/nagłówki | ✅ Sekcje A+B (XP‑02 reprogramming wstępu, XP‑04/08 wlewy) |
| `125-audyt-sekcja-e-expertise` | siteFocusScore, hub‑and‑spoke, QBST, jasność encji+Schema | ✅ Sekcje A (koherencja), C (QBST), D (Schema/encje), E (hub‑and‑spoke) — 1:1 |

**Wszystkie 10 plików skilla F4 zmapowane 1:1 na findingi/checklisty.**

---

→ **Koniec Fazy 4.** Wyniki na dysku: `04-semantyka-qbst-expertise.md`, `_f4_workflow.json` (35 findingów + 6 QBST‑RE + 11 werdyktów). Zalecane **`/compact`** przed Fazą 5 (**Linkowanie wewnętrzne / semantyczny kokon**). F5 czyta: skill `ksiega-2/rozdzial-04-semantyczny-kokon` (metryki entity‑salience/link‑value `04-01`, topologia `04-04`, matriarchalne linkowanie `04-05`, orphan pages `04-07-02`, audyt topic authority `04-07`); repo `crawl-dataset.json` (graf `internalLinks` — już zebrany), `menuConfig.js`, `bodyAreas.js`, `ServicePageTemplate.jsx` (`childServices`), `Footer.jsx`/`Header.jsx`. **Wejście z F4 do F5:** XP‑23 (entity‑first linking tylko USG), XP‑31 (24 spoke estetyki bez in‑body cross‑linków — sister‑linki tylko w footerze), XP‑30 (brak pod‑hubów obszarów), XP‑34 (brak sister‑linków w stomatologii) — F5 zbuduje pełny graf, potwierdzi orphany i rozkład wewnętrznego PageRank.
