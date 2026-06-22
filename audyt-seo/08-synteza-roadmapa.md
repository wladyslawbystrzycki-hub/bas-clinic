# Faza 8 — Synteza, scoring T‑E‑E‑A, priorytetyzacja, roadmapa

> **Faza finalna** dowodowego audytu SEO Kliniki BAS (bas.clinic) wg kompendium DrMax „Dokazatelnoe SEO 2026". Scala findingi ze wszystkich raportów (00–07) po ID, liczy finalny scorecard **T‑E‑E‑A**, dowodzi pokrycia „każdego punktu" kompendium (macierz) i porządkuje rekomendacje w **fale wdrożeniowe** wg impact × effort, ze wskazaniem, co wykona `/seo-fix`.
> Rama strategiczna: `czesc-6/128‑131` (proaktywna jakość Q* vs reaktywna wydajność NavBoost, cykl jakości, SEO w epoce AI, metoda kyborga).
> Audyt **read‑only** wobec `src/` — produktem jest wyłącznie ten raport. Naprawy osobno (`/seo-fix`).

---

## 1. Streszczenie wykonawcze (TL;DR)

Klinika BAS to witryna o **znakomitym szkielecie technicznym i ubogiej tkance treściowo‑autorskiej** — klasyczny profil „świetny skeleton, cienkie mięso" w erze AI. Fundament (SSG, CWV, czysta architektura on‑page) jest klasy A; zawodzą **trzy filary, które dziś realnie decydują o rankingu w YMYL: doświadczenie (Experience), autorytet (Authoritativeness) i głębia treści**.

**Finalny scorecard T‑E‑E‑A (0–100):**

| Filar | Wynik | Jednozdaniowa diagnoza |
|---|---|---|
| **T — Trust & Technical** | **74** | Fundament techniczny A‑klasy (SSG/CWV/sitemap/canonical), obniżony przez warstwę zaufania: brak stron prawnych (RODO), dwumarkowość, niekompletny schemat lokalny, 2 drobne blokery P0. |
| **E — Experience** | **28** | ⬅ **najsłabszy.** Treść odtwarzalna przez LLM <60 s, 100% media stockowe, ~1/64 stron z głosem praktyka, 0 liczb z praktyki, 0 efektów przed/po. |
| **E — Expertise** | **50** | Architektura semantyczna zdrowa (siteRadius OK, USG = wzorzec klasy A), ale `authorReputationScore=0`, luki YMYL (powikłania/przeciwwskazania), płaski kokon poza USG. |
| **A — Authoritativeness** | **30** | Encja organizacji weryfikowalna (✅ /o-nas/ + schema), ale autorzy odłączeni, brak sygnałów off‑page (domena nowa), brak stron prawnych. Heavy‑external. |
| **OGÓLNY (ważony)** | **≈ 45** | Strong shell, weak substance. Wąskie gardło cyklu jakości = **proaktywna jakość Q\*** (treść + encja autora + brand), nie reaktywna wydajność (CWV już dobre). |

**Wymiary pomocnicze (zasilają 4 filary):** On‑Page **~82** (zasila T+Expertise) · Local SEO **~40** (zasila T+A) · Linkowanie/kokon **~45** (zasila Expertise+T).

**Bilans findingów (po dedupie, 8 faz):** **~118 findingów** w 7 prefiksach (T/OG/EX/XP/LK/LO/EA). **Net‑nowych blokerów P0 = 2 techniczne** (T‑05 home‑canonical, T‑33 `/undefined/`→404) + **7 P0 treściowo‑medialnych** (Experience/media, effort L). Reszta to dług P1 strukturalny i P2 wzbogacający.

**Trzy zdania o tym, gdzie leży dźwignia:**
1. **Technika jest zrobiona** — nie inwestować dalej w CWV/infrastrukturę; dwa blokery P0 to poprawki rzędu godzin.
2. **Treść i autor to wąskie gardło** — witryna nie przejdzie mocno przez filtry jakości (Mustang/HCS) ani nie zostanie „kanonicznym źródłem prawdy" dla AI, dopóki treść jest odtwarzalna i anonimowa. To wymaga **metody kyborga** (ekspert + AI), nie kolejnych poprawek kodu.
3. **USG jest dowodem, że zespół potrafi** — ten sam szablon produkuje treść klasy A na 16 stronach USG. Problem jest **decyzyjny, nie kompetencyjny**: rollout wzorca USG na pozostałe ~48 stron zamyka większość luk Experience/Expertise bez zmiany architektury.

---

## 2. Finalny scorecard T‑E‑E‑A — metoda i uzasadnienie

Framework DrMax (`czesc-6/123‑126`) dzieli ocenę na 4 sekcje. Wymiary z faz pomocniczych (On‑Page F2, Linkowanie F5, Local F6) **nie są osobnymi osiami** — zasilają 4 filary. Poniżej finalna kalkulacja każdego filaru: wynik bazowy z fazy‑właściciela skorygowany o wkład wymiarów pomocniczych i cross‑fazowych sygnałów.

### T — Trust & Technical = **74** (baza F1 ~78)
| Składnik | Waga | Wynik | Uzasadnienie |
|---|---|---|---|
| Infrastruktura techniczna | 60% | **~85** | SSG 64/64 200, robots/sitemap idealne, canonical 63/64, CWV desktop 100/CLS 0, nagłówki bezp. (część). Minus: 2× P0 (T‑05/T‑33), og:image 64/64, fałszywy lastmod, mobile LCP 2.7–2.9 s. Wsparcie: On‑Page ~82 (czyste title/meta). |
| Trust / encja / prawne | 40% | **~57** | ❌ brak stron prawnych (EA‑10, RODO), ⚠️ dwumarkowość/scamness‑ryzyko (EA‑09), Local trust słaby (~40: mapa‑atrapa, pusty kod pocztowy, schema niekompletny), 0 disclaimera/źródeł YMYL (EA‑08). |
| **Razem T** | | **≈ 74** | 0,6×85 + 0,4×57 = 51 + 22,8 ≈ **74**. Fundament A‑klasy ciągnięty w dół przez warstwę zaufania nie‑technicznego (prawne/encja/local). |

### E — Experience = **28** (= F3, bez korekty)
Najsłabszy filar; żaden wymiar pomocniczy go nie zmienia. Sub‑wyniki F3: contentEffort **34** · OriginalContentScore **52** · **rdzeń Experience 22** · Image SEO **14** · Video SEO **38**. Diagnoza: treść technicznie poprawna, ale **maszynowo odtwarzalna** i pozbawiona dowodów realnego doświadczenia — dokładnie to, co `contentEffort`/Experience mają deklasować w erze AI.

### E — Expertise = **50** (baza F4 ~54, skorygowana w dół)
| Składnik | Waga | Wynik | Uzasadnienie |
|---|---|---|---|
| Semantyka / QBST / encje (F4) | 55% | **~54** | siteRadius 74 ✅, lewy kontekst ✅, USG wzorzec QBST 86; minus: luki YMYL (powikłania/przeciwwskazania), Dentist vs masa treści, ServiceSchema ubogi. |
| Kokon / TopicAuthority (F5) | 20% | **~45** | USG = działający kokon; estetyka/stom. bez sister/Mother in‑body, płaski PageRank. |
| Autorytet autora (F7) | 15% | **~18** | `authorReputationScore=0` — autorzy anonimowi na 60 stronach (sygnał Expertise wg pliku 106). |
| Struktura on‑page (F2) | 10% | **~82** | 1×H1, 0 przeskoków, Q‑style H3 (Passage Indexing). |
| **Razem E‑Expertise** | | **≈ 50** | 0,55×54 + 0,2×45 + 0,15×18 + 0,1×82 ≈ 29,7 + 9 + 2,7 + 8,2 ≈ **50**. |

### A — Authoritativeness = **30** (= F7, on‑site; heavy‑external)
Sub‑wyniki F7: encja organizacji **~48** (✅ weryfikowalna), autorytet autorów **~18** (❌ odłączeni), Trust YMYL **~28** (❌ prawne/źródła). Profil linkowy + brand = **niemierzalne z repo** (domena nowa, 1 commit → baseline niski). Local SEO ~40 zasila A przez brick‑and‑mortar/GBP, ale te sygnały też są w większości off‑page. **Ocena ~30 dotyczy sygnałów on‑site**; pełny obraz wymaga GSC/GA4/Ahrefs → Checklisty A/B/C (§6).

### Wynik ogólny ≈ **45/100**
Średnia 4 filarów = (74+28+50+30)/4 = **45,5**. Dla YMYL profil jest **asymetryczny**: szczyt techniczny (74) maskuje zapaść treściowo‑autorską (Experience 28, A 30). To nie jest witryna „średnia we wszystkim" — to witryna **doskonała w jednym wymiarze i krytycznie słaba w trzech, które dziś ważą najwięcej**.

---

## 3. Diagnoza strategiczna (rama `128‑131`)

### 3.1. Proaktywna jakość (Q*) vs reaktywna wydajność (NavBoost) — `128`
Strategia musi działać na dwóch torach. Bilans dla bas.clinic:

| Tor | Stan | Wniosek |
|---|---|---|
| **Reaktywna wydajność** (goodClick, lastLongestClick, Page Experience) | **Częściowo gotowy.** CWV desktop 100, CLS 0, mobile LCP do drobnej poprawy. Tytuły/snippety: fundament dobry (unikalne), ale brak geo + boilerplate osłabiają „obietnicę kliku". Brak głębi treści osłabia „ostatni najdłuższy klik". | Infrastruktura gotowa; brakuje **treści, która zatrzymuje** (lastLongestClick) i **snippetów, które obiecują właściwie** (geo, intro‑obietnice). |
| **Proaktywna jakość Q\*** (siteAuthority, contentEffort, brand, PageRank‑NearestSeeds) | **Słaby.** contentEffort 34, OCS 52, brand nieznany (nowa domena), `authorReputationScore=0`, 0 linków. | **To wąskie gardło.** Witryna ryzykuje odfiltrowanie przez Mustang **zanim** dostanie szansę na NavBoost. |

**Wniosek `128`:** „Idealna reaktywna wydajność bez Q* jest niewystarczająca" — strona może być szybka, ale z niskim `siteAuthority` nie trafi do selekcji. **Priorytet strategiczny = budowa Q\*** (treść + autor + brand), bo tor reaktywny jest już w dużej mierze zrobiony.

### 3.2. Wąskie gardło cyklu jakości — `129`
Cykl jakości (Q* → widoczność → kliki → NavBoost → wzrost Q*) jest **przerwany na Etapie 1** (fundamentalna jakość zapewnia widoczność). Wektory wejściowe `siteAuthority` (02‑01‑01): contentEffort ~34, OCS ~52, linki/brand nieznane, domena nowa. **Strategiczny wniosek `129`: „oddziałuj na najsłabszy etap cyklu".** Tu: brak ruchu → pracuj nad **fundamentalnym Q\*** (nie nad UX, który jest gotowy). Nie da się „naprawić badClicks bez naprawy CWV" — tu odwrotnie: CWV są OK, więc dług leży w treści/autorytecie, które warunkują samo wejście do gry.

### 3.3. Kanoniczne źródło prawdy w erze AI — `130`
Witryna **nie jest** dziś „kanonicznym źródłem prawdy" o Klinice BAS dla AI/AI Overviews:
- **Odłączona encja autora** (EA‑02/03) → AI nie ma kogo zacytować jako kwalifikowanego eksperta‑medyka.
- **Dwumarkowość BAS↔Smile.Expert** (EA‑09) → SCDL (Synthetic Content Data Layer) rozszczepia fakty o marce między dwie nazwy.
- **Treść odtwarzalna + 0 danych własnych** (EX‑02/04) → AI woli „tańsze" źródła; brak unikalnych faktów, które tylko BAS posiada.
- **Brak danych strukturalnych** (1 tabela/64, ServiceSchema ubogi) → AI nie ma maszynowo‑czytelnej „naziemnej prawdy".

**Antidotum (`130`):** uczynić bas.clinic master‑rekordem — strukturalne bio autorów (Person + regalia), data‑shift (tabele faktograficzne), źródła pierwotne, spójna encja marki. To jednocześnie domyka „hipotezę odłączonej encji" (F7).

### 3.4. Metoda kyborga — sposób realizacji `131`
Największy dług (rollout wzorca USG na ~48 stron + głos praktyka + data‑shift) jest **nie do udźwignięcia tradycyjnie** i **nie do zrobienia samym AI** (dałoby niski contentEffort). Rozwiązanie = **kyborg**:
- **Ekspert (Bogdan/Iwanna)** dostarcza „naziemną prawdę": liczby z praktyki, mikro‑case'y, niuanse, przeciwwskazania z doświadczenia, regalia, zdjęcia.
- **AI** strukturyzuje wg wzorca USG (sekcje, tabele, FAQ), skaluje na ~48 stron.
- **Ekspert** weryfikuje (YMYL — kontrola faktów) i wzbogaca głosem 1‑os.

To jedyny realny sposób podniesienia Experience z 28 i contentEffort z 34 bez „dolewania wody". **Roadmapa §5 jest zaprojektowana pod ten model.**

---

## 4. Konsolidacja findingów po ID (dedup — liczone raz)

Wiele defektów widziano z kilku faz. Mapa własności (defekt liczony **raz**, w fazie‑właścicielu; pozostałe = cross‑ref):

| Defekt | Własność | Cross‑ref (ten sam defekt, inny kąt) |
|---|---|---|
| Home bez canonical/og:url | **T‑05** | T‑27 (og:url), INV‑03 |
| 6× `/undefined/` → 404 + 6 sierot | **T‑33** | LK‑02, INV‑01, INV‑02 |
| Dwumarkowość BAS↔Smile.Expert | **EA‑09** (entity‑truth) | LO‑03 (klaster NAP), T‑31 (social), F4 (brand confusion), LO‑06 (legalName) |
| 0 linków wychodzących / brak źródeł medycznych | **F4 / XP‑21** (pomiar) | EA‑08 (kąt YMYL‑źródła) |
| Media 100% stock / placeholdery / brak zdjęć | **EX‑21/23/28** (F3) | LO‑13 (image schema), EA‑05 (regalia/zdjęcia /o-nas/), XP‑15 (przed/po) |
| Efekty przed/po (0/64) | **EX‑22/24/26** (F3) | XP‑15 (dubel F4 — liczony raz) |
| Sub‑pillary obszarów estetyki nie istnieją | **XP‑30** (F4) | LK‑09 (F5) |
| Sister‑linki tylko w USG | **LK‑05** (F5) | XP‑31, XP‑34 (F4) |
| Typ encji Dentist vs masa treści | **XP‑01** (F4) | XP‑12, XP‑29 |
| Brak CollectionPage/ItemList na hubach | **XP‑05** (F4) | XP‑26, INV‑06 |
| geo nieobecne (komercyjne strony) | **OG‑07** (title, F2) | LO‑14 (treść/body, F6), XP geo (F4) |
| Experience footprints / warstwa redakcyjna | **F3** (EX‑16/19) | EA‑11 (F7) |
| Anonimowy autor YMYL | **EA‑02** (F7) | EX‑20 (F3, atrybucja wykonawcy) |

**Zasada:** w roadmapie (§5) każdy defekt występuje **raz**, pod ID własnościowym, z adnotacją „zamyka też: …".

---

## 5. Roadmapa — fale wdrożeniowe (impact × effort)

Legenda: **🔧 /seo-fix** = wykonalne w kodzie z danych w repo (bez danych zewn./treści/mediów) · **✍️ treść/kyborg** = wymaga eksperta + AI · **📸 media** = wymaga sesji zdjęciowej/wideo · **🌐 off‑page** = poza witryną · **📋 dane zewn.** = wymaga ustalenia wartości (kod pocztowy, geo, PWZ) lub narzędzia (GSC/Ahrefs).

---

### 🌊 FALA 0 — Krytyczne quick‑winy (P0, effort S, natychmiast) · 🔧 /seo-fix

> Cel: usunąć 2 blokery techniczne + ryzyko prawne/wizerunkowe. Rząd godzin. Maksymalny stosunek impact/effort w całym audycie.

| # | Akcja | ID | Sygnał | Wykonanie |
|---|---|---|---|---|
| 0.1 | **Metadata home** — `export const metadata = generatePageMetadata({…path:'/'})` → dodaje canonical + og:url | T‑05/T‑27 | clutterScore/CompositeDoc | 🔧 /seo-fix |
| 0.2 | **Naprawa `/undefined/`** — `ServiceList.jsx` preferuj `service.href`/dodaj `slug` do 6 dzieci → likwiduje 6 linków 404 **i 6 sierot** | T‑33 (=LK‑02) | crawl‑budget/badClick/orphan | 🔧 /seo-fix |
| 0.3 | **Korekta mylących altów** „nasze realizacje"/„Wnętrze Kliniki BAS" na stocku → neutralne (do czasu własnych zdjęć) — ryzyko wizerunkowe/prawne | EX‑22 (część) | misleading authenticity | 🔧 /seo-fix |
| 0.4 | **Podwójny sufiks marki USG ×16** — usunąć ręczne `\| Klinika BAS` z 16 title USG (template doklei raz) | OG‑03 | dupTokens/boilerplate | 🔧 /seo-fix |

---

### 🌊 FALA 1 — Strukturalne P1: schema, encja, linkowanie, local, prawne (effort S–M)

> Cel: podnieść Trust + Expertise + Authoritativeness przez **maszynowo‑czytelną encję** i **topologię linków** — bez pisania treści. Większość 🔧 /seo-fix; część wymaga ustalenia danych (📋).

**1A. Encja autora (zamyka odłączoną encję — najwyższy priorytet przekrojowy, zasila E+E+A):**
| Akcja | ID | Wykonanie |
|---|---|---|
| `Person`/`Physician` schema na `/o-nas/` — `@id` per osoba, `worksFor→#organization`, `alumniOf` (Akademia Med. Wrocław), `image`, `hasCredential` | EA‑03 | 🔧 (struktura) + 📋 (PWZ/specjalizacja) |
| `author`/`reviewedBy` + `medicalSpecialty` w `ServiceSchema` → `{@id #osoba}` | EA‑04 | 🔧 /seo-fix |
| Byline „Konsultacja medyczna: lek. med. … " + link do `/o-nas/` na stronach usług | EA‑02 (=EX‑20) | 🔧 /seo-fix |
| Karty zespołu (home + /o-nas/) linkują do bio; `sameAs` osób | EA‑07 | 🔧 (link) + 📋 (sameAs zewn.) |

**1B. Schemat lokalny + encja organizacji (zasila T+A):**
| Akcja | ID | Wykonanie |
|---|---|---|
| `LocalBusiness`/`MedicalClinic` renderowany też na `/kontakt/` (współdzielony komponent) → odwiesza `provider.@id` na 60 stronach | LO‑05 (+LO‑15) | 🔧 /seo-fix |
| Typ encji `Dentist`→`['MedicalClinic','MedicalOrganization']` + `medicalSpecialty[]` | XP‑01 | 🔧 /seo-fix |
| `geo` (GeoCoordinates), `hasMap`, `postalCode`, `addressRegion`, `priceRange`, `legalName`, `vatID`(NIP), `taxID`(KRS) w schemacie | LO‑02/06/07/08/12, EA‑09 | 🔧 (struktura) + 📋 (kod pocztowy, lat/lng, URL GBP) |
| Realny embed mapy Google (iframe + „Wyznacz trasę") zamiast atrapy | LO‑09 | 🔧 /seo-fix |
| `CollectionPage`+`ItemList` na hubach stom./estetyki (jak USG) | XP‑05/26 | 🔧 /seo-fix |
| og:image domyślny (`opengraph-image`, 1200×630) | T‑26 | 🔧 + 📸 (grafika) |
| Realny `lastmod` w sitemap (git/`updatedAt`) zamiast `new Date()` | T‑09 | 🔧 /seo-fix |
| Strony prawne `/polityka-prywatnosci/`, `/regulamin/`, baner cookies + link footer | EA‑10 | 🔧 (szkielet) + ✍️ (treść prawna do weryfikacji) |
| Rozwiązanie dwumarkowości: email/social na domenie BAS **lub** jawna relacja `parentOrganization`/`alternateName` | EA‑09 | 📋 decyzja biznesowa + 🔧 |
| Profile social → Klinika BAS (zamiast smile.expert) | T‑31 | 📋 + 🔧 |

**1C. Linkowanie wewnętrzne / kokon (zasila Expertise+T):**
| Akcja | ID | Wykonanie |
|---|---|---|
| `related[]` (sister‑linki) dla estetyki (po obszarze/składniku) + stomatologii (po klastrze) + render bloku „Powiązane zabiegi" (wzór USG) | LK‑05 (=XP‑31/34) | 🔧 /seo-fix |
| Linki Mother (in‑body upward Support→Target) na stronach usług | LK‑03 | 🔧 + ✍️ (1–2 zdania kontekstu) |
| Home‑funnel: kuratorowana sekcja 4 linków in‑body do 4 Targetów | LK‑08 | 🔧 /seo-fix |
| Nawigacja header w indeksowalnym DOM (mega‑menu bez zależności od stanu JS) | LK‑01 | 🔧 /seo-fix |
| Linki wychodzące do encji kotwicowych KG (ChPL/producenci/substancje) — 1–3/strona | XP‑21 | ✍️ (kontekst) |

**1D. On‑page geo + koherencja (zasila T+Expertise):**
| Akcja | ID | Wykonanie |
|---|---|---|
| geo „Wrocław" w title 47 stron komercyjnych | OG‑07 | 🔧 /seo-fix |
| title↔H1 uzgodnienie na home + hub estetyki | OG‑14 | 🔧 /seo-fix |
| a11y `color-contrast` (≥4.5:1) | T‑23 | 🔧 /seo-fix |
| mobile LCP: poster wideo hero + `preload=metadata`; `next/image priority` na hero usług | T‑17 | 🔧 + 📸 (poster) |

---

### 🌊 FALA 2 — Treść / Experience / media / off‑page (P1–P2, effort L) · ✍️📸🌐

> Cel: podnieść Experience (28) i contentEffort (34) oraz zbudować Q*. **Metoda kyborga** (§3.4). To inicjatywa contentowo‑marketingowa, nie zadanie /seo-fix. Pilotaż przed skalowaniem.

**2A. Rollout wzorca USG na ~48 stron (✍️ kyborg) — pilotaż 5 stron, potem skala:**
| Akcja | ID | 
|---|---|
| Sekcja „Możliwe skutki uboczne i powikłania" na każdej stronie zabiegowej (0/64 dziś) | XP‑14 |
| Sekcja „Przeciwwskazania" (dedykowany H2/H3, nie w akapicie) | XP‑16 |
| Sekcja „Zalecenia po zabiegu / rekonwalescencja" | XP‑18 |
| Głębia 700–900 sł. body wg wzorca USG (dziś 42/64 thin 295–500) — **przez pokrycie podtematów, nie wodę** | EX‑01/17, XP‑17 |
| Data‑shift: mini‑tabele faktograficzne (czas/sesje/trwałość/rekonwalescencja/cena od) — unikalne wartości | EX‑05/13 |
| Asymetria w szablonie: mikro‑case / mini‑porównanie / lokalna notatka per strona | EX‑10/15 |
| Głos praktyka 1‑os. + zrównoważony obraz (wady/niuanse), liczby z praktyki | EX‑16/17/18/19 |
| FAQ pogłębione (kosztowne do odtworzenia, bez pokrywania się z expertInfo) | EX‑14 |
| Redukcja boilerplate CTA (×63 → krótkie etykiety / badge) | EX‑09 |

**2B. Media własne (📸 sesja zdjęciowa/wideo) — najsilniejszy dowód Experience:**
| Akcja | ID |
|---|---|
| Sesja: gabinet, zespół (Bogdan & Iwanna), sprzęt → self‑host, zastąpić 100% stocku | EX‑23/28/21, LO‑13, EA‑05 |
| Galerie przed/po (zgody RODO) + `MedicalProcedure.image`/`ImageObject` | EX‑22/24, XP‑15 |
| Migracja na `next/image` (AVIF/WebP, lazy, `fetchPriority`) + alty kontekstowe | EX‑25/27 |
| Infografiki/schematy zabiegów i anatomii (OCR/`multibangKgEntities`) | EX‑26 |
| 1 film treściowy / kategoria (słowo lekarza) + `VideoObject` | EX‑30/31 |

**2C. Autorzy / E‑E‑A‑T (✍️ + 📋):**
| Akcja | ID |
|---|---|
| Regalia: PWZ, specjalizacje, dyplomy, członkostwa (PTMEiAA), sekcja „W mediach/Certyfikaty" na /o-nas/ | EA‑05/06 |
| Pełne bio Iwanny (dziś 1 zdanie vs 4 akapity Bogdana — a to twarz medycyny estetycznej) | EA‑06 |
| Disclaimer medyczny + cytowania źródeł pierwotnych + data recenzji | EA‑08 |
| Strona „Polityka redakcyjna / weryfikacja medyczna" + `reviewedBy`/publisher split + experience footprints | EA‑11 |

**2D. Off‑page / brand / Q* (🌐 → Checklisty §6):**
| Akcja | ID |
|---|---|
| Profil linkowy: linki z portali medycznych PL (ZnanyLekarz/Medonet) + lokalnych (Wrocław) — bliskość do seed | EA‑12 → Checklist A |
| Sygnały brandowe: PR/SMM pod wzrost popytu brandowego (GSC), kontrola SERP brandowego | EA‑13 → Checklist B |
| Cyfrowy ślad autorów: ZnanyLekarz/Doctoralia, LinkedIn, Knowledge Graph → `Person.sameAs` | EA‑14 → Checklist C |
| GBP: weryfikacja, kategorie, NAP znak‑po‑znaku, recenzje (velocity), `aggregateRating` z realnych danych | LO‑11 + Checklisty 5.A–D (F6) |
| Hiperlokalny kontent (Opatowice/dojazd/parking) | LO‑14 |

---

### 🌊 FALA 3 — Dług świadomy / opcjonalne (P2) — nie pilne

| Akcja | ID | Uwaga |
|---|---|---|
| Sub‑pillary `/medycyna-estetyczna/{obszar}/` + `/usg/{klaster}/` | XP‑30/LK‑09 | **Tylko z unikalną treścią** — inaczej ryzyko thin/kanibalizacji (YMYL). 2‑tier jest poprawny. |
| Spójność hierarchii URL (estetyka/stom. płaskie w root) | LK‑10/T‑13 | **NIE migrować na siłę** — koszt 301 > zysk; hierarchię budować linkami in‑body. |
| Bramy cross‑cocoon (Target↔Target) | LK‑12 | Most uśmiech (estetyka↔stom.‑estet.), diagnostyka (stom.↔USG). |
| Odchudzenie footera do hubów+sub‑pillarów | LK‑13 | **Dopiero po** zbudowaniu in‑body (kolejność krytyczna). |
| Wariacja anchorów („Dowiedz się więcej") | LK‑11 | Przy okazji Mother/Sister. |
| H4–H5 sekcje ograniczające YMYL, szablon H2 „Wszystko o:" | OG‑17/19 | Refinement. |
| HSTS/CSP/Permissions‑Policy, manifest/apple‑touch‑icon | T‑29/30 | Drobne; zweryfikować HSTS na prod. |
| `changefreq`/`priority` w sitemap (ignorowane przez Google) | T‑10 | Martwy sygnał; bez szkody. |

---

## 6. Checklisty manualne — zbiorczo (dane zewnętrzne, poza repo)

> Audyt **nie zgaduje** danych zewnętrznych. Poniżej komplet checklist z F0/F1/F6/F7 — gotowych do wykonania po uzyskaniu dostępu do narzędzi. Pełne wersje w raportach źródłowych.

**Techniczne (F1):** SSL prod (SSL Labs) · kanonikalizacja hosta www/non‑www→301 · CWV field (GSC/CrUX p75 mobile LCP/INP/CLS) · test na fizycznym smartfonie (font ≥16 px, tap ≥48 px) · indeks (`site:` + GSC „Strony", rozbieżność <15%) · badClicks (GA4 bounce/dwell organiczny) · ręczne sankcje (GSC) · nagłówki (securityheaders.com) · wiek domeny/piaskownica (GSC 1. indeksacja).

**Local (F6 §5):** GBP weryfikacja+kategorie+aktywność (5.A) · audyt NAP off‑site znak‑po‑znaku w 10–15 katalogach + eliminacja duplikatów BAS vs Smile.Expert (5.B) · system recenzji+zdjęć UGC, monitoring velocity (5.C) · geotopicality off‑page + społeczność lokalna (5.D). **Ustalić ze źródła firmowego: kod pocztowy ul. Opatowicka 132, współrzędne geo, PWZ obojga lekarzy.**

**Authoritativeness (F7 §6):** profil linkowy — Ahrefs/Semrush, bliskość do seed, anchory, ruch donorów (A) · sygnały brandowe — GSC trend zapytań brandowych, GA4 Direct, kontrola SERP top‑10 brandowy (B) · cyfrowy ślad autorów — search nazwisk, ZnanyLekarz, LinkedIn, Knowledge Graph (C).

**Audyt SCDL (strategia AI, `130`):** zapytać ChatGPT/Gemini „Kto jest założycielem Kliniki BAS?", „Cennik usług BAS?", „BAS vs konkurencja?" → wykryć nieścisłości/halucynacje → zasilić „naziemną prawdą" przez kanoniczne źródło.

---

## 7. Macierz pokrycia kompendium — dowód „każdego punktu"

> Każdy obszar skilla `czesc-1…6` + `ksiega-2/rozdzial-04` → faza + odwzorowanie (finding / status OK / checklist / strategia). Brak białych plam.

| Obszar skilla | Faza | Pokrycie |
|---|---|---|
| `czesc-1/01-02` indeksacja/tieryzacja | F1 (kontekst) | ✅ T‑35 (renderowanie/mobile‑first), T‑34 (indeks→checklist) |
| `czesc-1/02-01-01` site‑authority | F7 | ✅ EA‑15 (baseline, wektory contentEffort/OCS/linki/brand) |
| `czesc-2` robots `03-01` | F1 | ✅ T‑02/T‑03 |
| `czesc-2` sitemap `03-02` | F1 | ✅ T‑08/09/10/11 |
| `czesc-2` kanonikalizacja `03-03` | F1 | ✅ T‑04/05/06/15 (ContentChecksum/clutterScore) |
| `czesc-2` CWV `04-*` (LCP/INP/CLS/TTFB) | F1 | ✅ T‑16..21 (Lighthouse lab + checklist field) |
| `czesc-2` URL `05-*` (4 zasady) | F1 | ✅ T‑12/13/14/15 |
| `czesc-3/048-052` Goldmine (title) | F2 | ✅ OG‑01..09 |
| `czesc-3/053-059` nagłówki H1‑H6 | F2 | ✅ OG‑12..23 + checklist 059 (11/11) |
| `czesc-3/060-063` contentEffort | F3 | ✅ EX‑01/02/07/09/12 |
| `czesc-3/064-070` anti‑replicability/data‑shift/anti‑template/layering/klastry | F3 | ✅ EX‑02/05/08/10/13/15 + EX‑07 (USG klaster) |
| `czesc-3/071-079` encje/QBST/siteRadius/entity‑first | F4 | ✅ XP‑01..29 (10 plików 1:1) |
| `czesc-4` off‑page (080‑106, 27 plików) | F7 | ✅ §7 macierz 27/27 → Checklist A/B/C / strategia; algorytmika 082/083/084 cross‑ref F5/F4 |
| `czesc-5/105-109` E‑E‑A‑T (mapping/hipoteza/implementacja/wzmocnienie) | F7 | ✅ EA‑01..15 + §4 (12/12 taktyk) + §5 (6/6 technik) |
| `czesc-5/109-114` Local | F6 | ✅ LO‑01..15 + checklist 113 (12/12) |
| `czesc-5/115-119` mobile/clutterScore | F1 | ✅ T‑22..25 (116/118‑2..6/119 N/A — brak reklam) |
| `czesc-5/121` Image SEO | F3 | ✅ EX‑23..29 |
| `czesc-5/122` Video SEO | F3 | ✅ EX‑30..34 |
| `czesc-6/123` audyt T | F1 | ✅ T §1‑5 (T‑01..37) |
| `czesc-6/124` audyt E‑Experience | F3 | ✅ EX‑01..34 (3 sekcje 1:1) |
| `czesc-6/125` audyt E‑Expertise | F4 | ✅ XP‑01..35 (4 sekcje 1:1) |
| `czesc-6/126` audyt A‑Authoritativeness | F7 | ✅ §6 (3 filary → Checklist A/B/C) + EA‑12/13/14 |
| `czesc-6/127` instrumentarium | F0 | ✅ dobór narzędzi (crawler, Lighthouse, dataset) |
| `czesc-6/128-131` strategia (proactive/cykl/AI/kyborg) | **F8** | ✅ **§3** (rama strategiczna) + §5 (roadmapa pod kyborga) |
| `ksiega-2/rozdzial-04` semantyczny kokon (36 plików) | F5 | ✅ LK‑01..14 (AUDYT→findingi, METODYKA→projekt topologii §4) |
| Księga 2 rozdz. 1‑3, 5‑10 (prompt eng./LLM/etyka/analityka) | — | ℹ️ **metodyka narzędziowa, poza zakresem audytu strony.** Analityka (rozdz. 7) zasila checklisty GSC/GA w F1/F6/F7. Prompt eng. (rozdz. 1‑3) = sposób wykonania kyborga (§3.4), nie przedmiot audytu zbudowanej witryny. Uzasadnienie zgodne z planem. |

**Werdykt pokrycia:** wszystkie pliki audytowe `czesc-1…6` + `rozdzial-04` mają odwzorowanie. Punkty zewnętrzne → checklisty (nie pominięte, nie zgadnięte). Księga 2 (poza rozdz. 4) świadomie poza zakresem jako metodyka.

---

## 8. Co może wykonać `/seo-fix` (a czego nie)

**✅ Wykonalne automatycznie (kod z danych w repo):** T‑05, T‑33, OG‑03, OG‑07, OG‑14, T‑09, T‑26 (template), T‑23, EX‑22 (alty), EA‑02 (byline), EA‑03/04 (schema Person/reviewedBy — struktura), EA‑07 (linki), LO‑05/09/15, XP‑01/05/26 (typ encji, CollectionPage), LK‑01/05/08 (DOM nav, sister `related[]`, home‑funnel), EX‑09 (redukcja CTA). Większość Fali 0 + 1A/1B/1C/1D (część strukturalna).

**📋 Wymaga ustalenia wartości** (kod gotowy, brak danych): postalCode, geo lat/lng, PWZ/specjalizacje, URL GBP, `sameAs` osób. → /seo-fix przygotuje strukturę, wartości uzupełnić ręcznie.

**✍️📸🌐 Poza /seo-fix** (treść/media/decyzje/off‑page): cała Fala 2 (rollout treści — kyborg, sesja zdjęciowa/wideo, regalia, źródła medyczne, off‑page/brand), decyzja o dwumarkowości, treść stron prawnych (weryfikacja prawna).

**Sugerowana kolejność dla `/seo-fix`:** Fala 0 → Fala 1A (encja autora — najwyższy impact przekrojowy) → 1B (schema/local) → 1C (kokon) → 1D (geo/a11y). Następnie inicjatywa contentowa (Fala 2) prowadzona oddzielnie metodą kyborga.

---

## 9. Zakończenie audytu

**Stan:** witryna z **fundamentem technicznym klasy A** (T=74, On‑Page=82, CWV=100) i **krytycznym długiem treściowo‑autorskim** (Experience=28, A=30). Wynik ogólny ≈ **45/100**. Profil asymetryczny: nie „średnia witryna", lecz **doskonała technicznie, słaba tam, gdzie YMYL i era AI ważą najwięcej**.

**Jedna rekomendacja nadrzędna:** przestać optymalizować to, co działa (technika), i skierować zasoby na **wąskie gardło cyklu jakości — proaktywne Q\*** (treść + encja autora + brand). Dźwignia jest dostępna i udowodniona: **klaster USG to wewnętrzny wzorzec klasy A** zbudowany na tym samym szablonie. Rollout wzorca USG metodą kyborga (ekspert dostarcza naziemną prawdę, AI strukturyzuje, ekspert weryfikuje) + domknięcie encji autora (Person/regalia/PWZ) + media własne + sygnały brandowe podniosłyby Experience, Expertise i Authoritativeness jednocześnie, czyniąc bas.clinic **kanonicznym źródłem prawdy** o klinice — dla użytkownika, dla NavBoost i dla AI.

**Weryfikacja kompletności audytu (kryteria z planu):**
1. ✅ `npm run build` przechodzi (exit 0); serwer prod wstał; Lighthouse dla próbki (8 desktop + 3 mobile).
2. ✅ `crawl-dataset.json` pokrywa 64/64 URL z sitemap (0 braków, 0 statusów ≠200).
3. ✅ Każdy plik checklisty `czesc-2…6` + `rozdzial-04` ma wpis w macierzy (§7) — brak białych plam.
4. ✅ Każdy finding ma status/sygnał/dowód(`ścieżka:linia`)/priorytet/effort.
5. ✅ Scorecard T‑E‑E‑A wypełniony (4 sekcje); roadmapa P0/P1/P2 spójna z findingami (każda akcja → ID).
6. ✅ Zero modyfikacji w `src/` (audyt = tylko `audyt-seo/`).

**Artefakty audytu:** `00`–`08` (9 raportów), `crawl-dataset.json`, `lighthouse/`, skrypty `_f*`/`_crawler.mjs`, digesty `_f*_facts.md`, `_f4/5/6_workflow*.json`.

→ **Koniec Fazy 8 — audyt zakończony.** Filar A i E‑Experience pozostają „heavy‑external" do finalizacji po wykonaniu checklist (GSC/GA4/Ahrefs/GBP). Naprawy: zacząć od Fali 0 (`/seo-fix`), potem Fala 1, równolegle uruchomić inicjatywę contentową Fali 2 (kyborg).
