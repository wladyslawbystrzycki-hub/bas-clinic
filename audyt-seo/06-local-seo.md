# Faza 6 — Local SEO (Klinika BAS, Wrocław)

Dowodowy audyt Local SEO wg DrMax „Dokazatelnoe SEO 2026", `czesc-5/109-114` (LocalWWWInfo, brickAndMortarStrength, geotopicality, checklist 113, neochevid 114). Branża **YMYL-medyczna**, pojedyncza lokalizacja: **ul. Opatowicka 132, Wrocław**. Audyt **read-only** wobec `src/` — produktem są findingi + checklisty manualne. Naprawy osobno (np. `/seo-fix`).

---

## 0. Metoda i dane

**Źródła dowodów (wszystkie zweryfikowane bezpośrednio):**
- Repo: `src/config/clinic.js` (single source of truth NAP/godziny/founders), `OrganizationSchema.jsx`, `ServiceSchema.jsx`, `ContactSection.jsx`, `kontakt/page.jsx`, `Footer.jsx`, `page.jsx`.
- Pomiar deterministyczny geo on-page: render wszystkich **64 stron** z serwera prod (`localhost:3000`), zliczanie geo-kotwic (`wrocław|dolnośl|opatowic`) w title/H1/meta (z `crawl-dataset.json`) oraz w **widocznej treści** (render z usuniętym `<head>`/`<header>`/`<footer>`/`<script>`). Skrypty inline, fakty w `_f6_facts.md`.
- Skill 109–114 przeczytany w całości; checklist 113 zmapowany 1:1 w §4.

**Fan-out + weryfikacja.** Uruchomiono workflow 5-wymiarowy (NAP/cluster, schema-LocalBusiness, geoTopicality, brick-and-mortar, checklist-113) → `_f6_workflow_findings.json` (26 findingów: LO-01…LO-15 + LO-C1…C11). **Faza adwersaryjnej weryfikacji i syntezy workflow padła na limicie sesji** (52 agenty `weryf:*` + `synteza` zwróciły „session limit"). Dlatego **weryfikację przeprowadził ręcznie agent główny** (pełny dostęp do `src/`), otwierając i sprawdzając każdy plik źródłowy cytowany w findingach — patrz §7. Wszystkie dowody `ścieżka:linia` poniżej są potwierdzone naocznie, nie zaufane na słowo agentom.

**Korekty względem surowych findingów (transparentnie):**
- Postępy priorytetów: LO-02 (kod pocztowy) i LO-03 (dwumarkowość) zaproponowane przez agenta jako **P0** → **zdegradowane do P1**. Na ujednoliconej skali T-E-E-A P0 = blokery łamiące stronę (brak canonical na home, linki 404 — F1). Pusty kod pocztowy i strategiczna decyzja brandowa to długi P1 (wysoka wartość, ale nie blokery). **Net-nowych P0 w F6: 0.**
- **Kod pocztowy NIE jest podawany konkretną wartością** w tym raporcie. Agenci-wymiary zgadywali rozbieżnie („50-115" vs „~51-000"); audyt nie fabrykuje danych adresowych. Naprawa wymaga ustalenia oficjalnego kodu dla ul. Opatowicka 132 ze źródła firmowego.

---

## 1. Dane firmy i stan schematu lokalnego (snapshot)

| Atrybut | Wartość (`clinic.js`) | W schemacie `OrganizationSchema` | W stopce / `/kontakt/` |
|---|---|---|---|
| name | Klinika BAS | ✅ `name` | ✅ |
| legalName | Smile.Expert Sp. z o.o. | ❌ nieemitowane | — |
| phone | +48 690 511 511 (międzynar. ✅) | ✅ `telephone` | ✅ (`tel:` OK) |
| email | rejestracja@**smile.expert** | ✅ | ✅ (`mailto:` OK) |
| street | ul. Opatowicka 132 | ✅ `streetAddress` | ✅ |
| city | Wrocław | ✅ `addressLocality` | ✅ |
| **postalCode** | **'' (PUSTY)** | ❌ brak | ❌ brak |
| **addressRegion** | — (brak w configu) | ❌ brak | — |
| country | PL | ✅ `addressCountry` | — |
| **geo (lat/lng)** | — | ❌ brak `GeoCoordinates` | — |
| **hasMap** | — | ❌ brak | ❌ (mapa = atrapa) |
| hours | Pon-Pt 8-20; Sob/Ndz Zamknięte | ⚠️ tylko Mon-Fri | Footer ✅ pełne; `/kontakt/` ⚠️ tylko Pon-Pt |
| sameAs | FB+IG (smile.expert) | ✅ ale tylko 2 (brak GBP/Maps) | — |
| nip / krs | 8971862168 / 0000763394 | ❌ brak `vatID`/`taxID` | — |
| priceRange / image / areaServed / aggregateRating / medicalSpecialty | — | ❌ wszystkie brak | — |
| @type | — | `['MedicalOrganization','Dentist']` | — |

**Pokrycie schematu:** `OrganizationSchema` renderowany **wyłącznie na home** (`page.jsx:14`; reguła „OrganizationSchema – homepage only"). `/kontakt/` ma tylko `BreadcrumbSchema`. Każda strona usługi ma `ServiceSchema` z `provider.@id = .../#organization`, ale węzeł o tym `@id` istnieje tylko na home → **referencja `provider` jest wisząca na 60 podstronach usług** (LO-15).

**Uwaga o typie encji.** `Dentist` jest w schema.org podtypem `LocalBusiness` (→ `LocalBusiness`/`MedicalBusiness`/`MedicalOrganization`), więc **LocalBusiness jest obecny technicznie** — nie jest prawdą, że „brak LocalBusiness". Problem jest węższy: typ **pokrywa tylko stomatologię**, nie medycynę estetyczną ani USG/diagnostykę (koreluje z `siteFocusScore`, F4), i brakuje mu kluczowych pól lokalnych.

---

## 2. geoTopicality on-page — pomiar deterministyczny (64 strony)

| Warstwa | Strony z geo-kotwicą | Komentarz |
|---|---|---|
| **meta description** | **64 / 64** | 100% — ale meta jest niewidoczna dla użytkownika; słaby sygnał treściowy |
| **title** | **17 / 64** | 16× USG + home. 0 stron stomatologii/estetyki (= OG-07, własność F2) |
| **H1** | **16 / 64** | wyłącznie USG (home H1 też bez geo) |
| **widoczna treść** (chrome+head usunięte) | **19 / 64** | 16× USG (4–8 wystąpień, geo w H1+akapitach), home (7), `/kontakt/` (4), `/o-nas/` (3) |
| **widoczna treść = ZERO** | **45 / 64** | **cała stomatologia + cała estetyka + `/cennik/` + `/wlewy-witaminowe/` + `/programy-zabiegowe/`** |

**Wniosek.** **USG = wzorzec geoTopicality** — geo wplecione w title, H1 i treść („USG tarczycy we Wrocławiu", „Wykonujemy je w Klinice BAS we Wrocławiu"). **45 stron komercyjnych („pieniężnych": implanty, licówki, botox, wypełniacze…) ma geo wyłącznie w meta** — niewidoczne dla czytelnika i słabe rankingowo dla zapytań typu „implanty Wrocław", „botoks Wrocław". To centralny defekt on-page Local. **0 stron** zawiera treść o dzielnicy/dojeździe/parkingu (Opatowice/Wrocław-Wschód) — brak hiperlokalnego kontentu (`geotopicality` taktyka 1, plik 112).

---

## 3. Findingi LO-01 … LO-15

> Format: **[ID]** Tytuł · Status ✅/⚠️/❌/ℹ️ · Sygnał · Dowód · Rekomendacja · Priorytet · Effort · (ext = wymaga danych zewn.)

### LO-01 · ✅ NAP on-site spójny w 100% (centralizacja) — MOCNA STRONA
**Sygnał:** address/cluster. **Dowód:** `clinic.js` jedyne źródło; `Footer.jsx:19-25`, `ContactSection.jsx:12-30`, `OrganizationSchema.jsx:13-18` czytają z `CLINIC`. Grep: 0 hardkodów telefonu/adresu poza configiem. **Rekomendacja:** utrzymać — brak ryzyka rozjazdu Name/Address/Phone między stopką, `/kontakt/` a schematem (DrMax Wymiar 1: niesprzeczny „środek ciężkości"). Chronić przed przyszłymi hardkodami. **P2 · S.**

### LO-02 · ⚠️ Kod pocztowy PUSTY — adres niekompletny w NAP i `PostalAddress`
**Sygnał:** address/cluster. **Dowód:** `clinic.js:12` `postalCode: ''`; brak `postalCode` w `PostalAddress` (`OrganizationSchema.jsx:13-18`); brak w stopce (`Footer.jsx:19-20`) i kontakcie (`ContactSection.jsx:12`). **Rekomendacja:** ustalić oficjalny kod dla ul. Opatowicka 132 (źródło firmowe — **nie zgadywać**), uzupełnić `postalCode` w `clinic.js` i dodać do `PostalAddress` + renderu stopki/kontaktu. DrMax: „adres w oficjalnym formacie, z kodem pocztowym" — bez kodu wzorzec NAP nie zgadza się znak-po-znaku z GBP/katalogami, co obniża pewność klastra. **P1 · S** (degradacja z P0 — patrz §0).

### LO-03 · ⚠️ Dwumarkowość Klinika BAS vs Smile.Expert — ryzyko rozszczepienia klastra
**Sygnał:** cluster/address. **Dowód:** `name='Klinika BAS'` (`clinic.js:2`) ale `email='rejestracja@smile.expert'` (:7), `legalName='Smile.Expert Sp. z o.o.'` (:3), social FB+IG = smile.expert (:52-53); `sameAs` wskazuje wyłącznie profile smile.expert (`OrganizationSchema.jsx:25`); treści pochodzą ze smile.expert (CLAUDE.md gotcha). **Rekomendacja:** ujednolicić markę publiczną na „Klinika BAS" (docelowo email `@bas.clinic`, profile FB/IG przebrandowane lub jawnie powiązane: nazwa „Klinika BAS", URL bas.clinic w bio). Jeśli prawnie musi zostać Smile.Expert — emitować `legalName`+`vatID`+`taxID` (LO-06), by Google połączył markę z podmiotem w **jedną** encję. **P1 · M · ext** (degradacja z P0). Dubel decyzji brandowej: **F1** (social→smile.expert), **F4** (brand/siteFocusScore) — tu liczone pod kątem klastra NAP.

### LO-04 · ✅ Telefon w formacie międzynarodowym
**Sygnał:** address/cluster. **Dowód:** `clinic.js:5` `+48 690 511 511` (E.164), `phoneRaw` w `tel:` (`Footer.jsx:22`, `ContactSection.jsx:18`). **Rekomendacja:** bez zmian; pilnować zgodności znak-po-znaku z GBP/katalogami przy audycie off-site. **P2 · S.**

### LO-05 · ⚠️ Brak LocalBusiness na `/kontakt/` (tylko Breadcrumb)
**Sygnał:** cluster/address/hasMap. **Dowód:** `OrganizationSchema` (typ `Dentist`=podtyp LocalBusiness) renderowany **tylko** na `page.jsx:14` (home); `/kontakt/` ma wyłącznie `BreadcrumbSchema` (`kontakt/page.jsx:19`). Strona kontaktu — wskazany przez DrMax kanoniczny nośnik NAP+geo+hours — jest pozbawiona znacznika lokalnego. **Rekomendacja:** wyrenderować pełny `LocalBusiness`/`MedicalClinic` także na `/kontakt/` (najlepiej współdzielony komponent z home). **P1 · M.**

### LO-06 · ⚠️ `legalName`/NIP/KRS w configu, ale nieemitowane w schemacie
**Sygnał:** cluster. **Dowód:** `clinic.js:3` `legalName`, `:55` `krs`, `:56` `nip` zdefiniowane; grep: 0 użyć poza configiem — nie trafiają do `OrganizationSchema` (brak `legalName`/`vatID`/`taxID`). **Rekomendacja:** dodać `legalName`, `vatID`(NIP), `taxID`(KRS) — twarde identyfikatory wiążące markę „Klinika BAS" z osobą prawną „Smile.Expert Sp. z o.o."; kluczowe dla entity resolution przy dwumarkowości (LO-03). **P1 · S.**

### LO-07 · ❌ Brak `geo` (GeoCoordinates) i `hasMap` w schemacie
**Sygnał:** address/hasMap/brickAndMortarStrength. **Dowód:** grep `src`: 0× `GeoCoordinates`/`latitude`/`longitude`/`hasMap`; `PostalAddress` bez `geo` (`OrganizationSchema.jsx:13-18`). DrMax Wymiar 1: „obowiązkowo wypełnij `geo` (współrzędne) i `sameAs`". **Rekomendacja:** dodać `geo {GeoCoordinates lat/lng}` dla ul. Opatowicka 132 oraz `hasMap` (URL profilu Google Maps). Współrzędne wiążą NAP z punktem w przestrzeni i wzmacniają dopasowanie do GBP. **P1 · S.**

### LO-08 · ⚠️ `sameAs` nie zawiera GBP/Google Maps
**Sygnał:** cluster/brickAndMortarStrength. **Dowód:** `OrganizationSchema.jsx:25` `sameAs=[facebook, instagram]`; grep: 0× `business.google`/`g.page`/`maps.app`/`place_id`. **Rekomendacja:** po weryfikacji GBP dodać URL profilu Google do `sameAs` i jako `hasMap` — jawny sygnał „ta witryna = ten profil firmowy", spinający klaster on-site↔GBP. **P1 · S · ext** (wymaga istniejącego/zweryfikowanego GBP).

### LO-09 · ❌ Mapa to atrapa (placeholder), nie realny embed/link trasy
**Sygnał:** hasMap/brickAndMortarStrength. **Dowód:** `ContactSection.jsx:34-43` — `div bg-gray-100` z tekstem „Mapa Google Maps" + adres; brak `<iframe>`, brak linku nawigacji; grep: 0× `iframe`/`maps.google`. **Rekomendacja:** zastąpić realnym osadzeniem mapy Google (iframe) z pinezką + przyciskiem „Wyznacz trasę" (deep-link Maps). Realna mapa = sygnał brick-and-mortar + UX dojazdu; atrapa nie niesie żadnej wartości lokalizacyjnej (Address Anchoring, plik 114 technika 1). **P1 · S.**

### LO-10 · ⚠️ Niespójność godzin: `/kontakt/` pomija weekend, footer/schema pokazują
**Sygnał:** hours/cluster. **Dowód:** `ContactSection.jsx:29` renderuje tylko „Pon-Pt 8-20"; `Footer.jsx:146-147` pokazuje też „Sob-Ndz: Zamknięte"; `openingHoursSpecification` (`clinic.js:20-26`) ma tylko Mon-Fri. **Rekomendacja:** dorenderować Sob/Ndz=„Zamknięte" w `ContactSection`; opcjonalnie dodać jawne wpisy `Saturday`/`Sunday` (opens=closes) do `openingHoursSpecification`, by schema = GBP = on-site znak-po-znaku. **P2 · S.**

### LO-11 · ℹ️ Audyt NAP off-site + eliminacja duplikatów — niemierzalne z repo → CHECKLIST
**Sygnał:** cluster/address. **Dowód:** brak danych zewnętrznych w repo; dwumarkowość (LO-03) podnosi ryzyko duplikatów (listingi pod „Klinika BAS" i pod „Smile.Expert"). **Rekomendacja:** checklist manualny §5.B. **P1 · L · ext.**

### LO-12 · ⚠️ Brak `addressRegion` (województwo) w `PostalAddress`
**Sygnał:** address. **Dowód:** `OrganizationSchema.jsx:13-18` ma `streetAddress`/`addressLocality`/`addressCountry`, brak `addressRegion` (dolnośląskie); `clinic.js:8-14` też nie definiuje regionu. **Rekomendacja:** dodać `addressRegion: 'dolnośląskie'` — uzupełnia oficjalny format adresu i kontekst geo na poziomie województwa. Tani element kompletności. **P2 · S.**

### LO-13 · ℹ️ Brak `image`/`logo` w schemacie organizacji
**Sygnał:** brickAndMortarStrength/cluster. **Dowód:** `OrganizationSchema.jsx` bez pola `image`/`logo`; galeria na home (`page.jsx:101-105`) to stock Unsplash, nie zdjęcia lokalu. **Rekomendacja:** dodać `image` (fasada/wnętrze przy Opatowickiej 132) i `logo`. Realne zdjęcie placówki wspiera brick-and-mortar i spójność z fotami w GBP. **Wymaga autentycznych zdjęć** (dubel przyczynowy z **F3** Image SEO — 100% stock). **P2 · M.**

### LO-14 · ❌ geoTopicality: 45/64 stron „pieniężnych" bez geo w widocznej treści
**Sygnał:** geotopicality. **Dowód:** §2 — 45/64 stron ZERO geo w treści (cała stomatologia+estetyka), geo tylko w meta; USG = wzorzec (16 stron, 4–8 wystąpień); 0 stron z treścią o dzielnicy/dojeździe. **Rekomendacja:** przenieść wzorzec USG na strony stomatologii/estetyki — wpleść geo w H1 i widoczną treść (nie tylko meta); dodać hiperlokalny blok (Opatowice/dojazd/parking). **P1 · L.** **Atrybucja dedupu:** geo-w-title 47 stron = **OG-07 (F2)**; tu liczony **geoTopicality treściowy + hiperlokalny kontent = własność F6**.

### LO-15 · ℹ️ `ServiceSchema.provider.@id` wisi na 60 podstronach (graf encji)
**Sygnał:** cluster/entity graph. **Dowód:** `ServiceSchema.jsx:17-19` `provider.@id = ${CLINIC.url}/#organization`, ale węzeł `#organization` definiuje tylko `OrganizationSchema` (home-only). Na stronach usług referencja `@id` nie ma w-stronowego węzła do rozwiązania. **Rekomendacja:** po globalnym/`/kontakt/` wyrenderowaniu `LocalBusiness` (LO-05) referencja `provider` stanie się rozwiązywalna, tworząc spójny graf `Service→provider→LocalBusiness`. **P2 · S.** (Powiązane z F4 — kompletność grafu Schema.)

---

## 4. Checklist 113 — pokrycie 1:1 (każda pozycja)

| Wymiar | Pozycja checklistu 113 | Status | Mapowanie / uwaga |
|---|---|---|---|
| **W1 Tożsamość** | Audyt i standaryzacja NAP | ⚠️ | on-site ✅ (LO-01), ale kod pocztowy pusty (LO-02); off-site → §5.B |
| W1 | Wdrożenie Schema.org LocalBusiness | ❌ | LO-02/05/06/07/08/12 — typ wąski (Dentist), tylko home, brak geo/postalCode/region/priceRange/image/legalName/vatID/taxID |
| W1 | Optymalizacja GBP | ℹ️ ext | LO-C3 → §5.A (niemierzalne; brak linku GBP w `sameAs` = LO-08) |
| W1 | Eliminacja duplikatów | ℹ️ ext | LO-11/LO-C4 → §5.B (ryzyko ↑ przez dwumarkowość) |
| **W2 Popularność** | Budowa systemu zbierania recenzji | ℹ️ ext | §5.C; brak `aggregateRating` w schemacie (grep: 0) — nawet istniejące recenzje nie są reprezentowane on-page |
| W2 | Stymulowanie zdjęć użytkowników (UGC) | ℹ️ ext | §5.C (niemierzalne z repo) |
| W2 | Aktywne zarządzanie GBP (Posts/Q&A/Messages) | ℹ️ ext | §5.A |
| **W3 Skala** | Strony oddziałów (multi-lokacja) | ✅ N/A | single-location (jeden adres, jeden `openingHoursSpecification`); poprawne — NIE tworzyć sztucznych stron miast |
| W3 | Architektura sieci `/locations/` | ✅ N/A | single-location; `isLargeChain`/`siteSiblings` nie dotyczy. Pilnować, by domeny BAS i smile.expert nie indeksowały równolegle tych samych usług |
| **W4 Kontekst** | Tworzenie hiperlokalnego kontentu (geotopicality) | ❌ | LO-14/LO-C10 — 45/64 bez geo w treści; 0 stron o dzielnicy/dojeździe |
| W4 | Lokalny linkbuilding | ℹ️ ext | §5.D (Ahrefs/SERP) |
| W4 | Demonstracja udziału w społeczności | ℹ️ ext | §5.D; brak sekcji aktualności/fotorelacji w repo |

Pokrycie: **12/12 pozycji** rozstrzygnięte (3 ❌, 1 ⚠️, 2 ✅N/A, 6 ℹ️ external→checklist).

---

## 5. Checklisty manualne (gotowe do użycia — dane zewnętrzne)

### 5.A — Google Business Profile (GBP) — sygnały `brickAndMortarStrength` (pliki 111, 113 W1+W2)
- [ ] Potwierdzić, że profil **istnieje i jest zweryfikowany** (verified).
- [ ] Rozstrzygnąć **nazwę kanoniczną**: „Klinika BAS" vs „Smile.Expert" (powiązane z LO-03) — jeden profil, jedna nazwa.
- [ ] Kategorie: główna „Klinika stomatologiczna" + dodatkowe „Medycyna estetyczna", „Pracownia USG/diagnostyka obrazowa".
- [ ] Pola: atrybuty, usługi (z `/cennik/`), opis, **data otwarcia** (`since: 2012`, `clinic.js:35`).
- [ ] NAP w GBP = wzorzec **znak-po-znaku** (z kodem pocztowym po LO-02, telefon `+48 690 511 511`).
- [ ] Dodać URL profilu GBP do witryny: `sameAs` + `hasMap` (zamyka LO-08).
- [ ] Aktywność: Google Posts ≥1×/tydzień, odpowiedzi w Q&A, włączone Messages.

### 5.B — Audyt NAP off-site + duplikaty (plik 113 W1; LO-11)
- [ ] Zbudować plik wzorcowy NAP (txt): pełna nazwa + adres z kodem + telefon międzynar.
- [ ] Sprawdzić **10–15 katalogów** znak-po-znaku: Google Maps, **ZnanyLekarz.pl / Doctoralia** (krytyczne dla YMYL-medycyny), Mapa Targeo, Panorama Firm, ALE.pl, **Booksy** (estetyka), katalogi medyczne, Facebook/Instagram.
- [ ] Wyszukać po telefonie `+48 690 511 511` i adresie „Opatowicka 132" → znaleźć duplikaty listingów (szczególnie podwójne wpisy BAS vs Smile.Expert na tym samym adresie).
- [ ] Scalić/usunąć duplikaty („zaproponuj poprawkę" / kontakt z platformą).

### 5.C — System recenzji i zdjęć UGC (plik 111, 113 W2)
- [ ] Automatyczny mailing/SMS z prośbą o recenzję 3–5 dni po wizycie (idealnie po zakończeniu planu leczenia).
- [ ] QR-kody do strony recenzji w recepcji / na materiałach.
- [ ] Monitorować **velocity** recenzji co tydzień (równomierny strumień, nie skok — plik 114 technika 3).
- [ ] Gdy recenzje istnieją: dodać `aggregateRating` do `LocalBusiness` **z realnych danych** (YMYL — nie fabrykować).
- [ ] Strefa fotogeniczna + brandowany hashtag, zachęta do oznaczania „Klinika BAS Wrocław".

### 5.D — geotopicality off-page + społeczność (pliki 112, 114; 113 W4)
- [ ] Linki z lokalnych zasobów o silnej geo-przywiązce: wrocławskie portale, izba lekarska, cross-promo sąsiednich (niekonkurencyjnych) biznesów przy Opatowickiej.
- [ ] Fotorelacje z lokalnych akcji/wydarzeń — linkujące do **bas.clinic** (nie smile.expert).
- [ ] Ujednolicić markę w cytowaniach lokalnych (spójne z LO-03).
- [ ] (Pomiar profilu linków/wzmianek: Ahrefs/SERP — zasila **F7**.)

---

## 6. Stan docelowy Local SEO (wejście dla `/seo-fix`)

**Schema (`OrganizationSchema` → docelowo współdzielony `LocalBusiness`, renderowany na home + `/kontakt/`):**
- Rozszerzyć `@type` o `MedicalClinic` (objęcie estetyki+USG) obok `Dentist`.
- `address`: dodać `postalCode` (oficjalny, po ustaleniu), `addressRegion: 'dolnośląskie'`.
- Dodać `geo` (`GeoCoordinates` lat/lng), `hasMap` (URL Google Maps), `priceRange`, `image`+`logo` (realne zdjęcia placówki), `legalName`, `vatID`(NIP), `taxID`(KRS).
- `sameAs`: dodać URL GBP/Maps; docelowo profile pod marką „Klinika BAS".
- `openingHoursSpecification`: opcjonalnie jawne wpisy Sob/Ndz (zamknięte).
- Po wyrenderowaniu na `/kontakt/` — `ServiceSchema.provider.@id` przestaje wisieć (LO-15).
- **Wszystkie wartości z `clinic.js`** (single source of truth — nie hardkodować).

**`/kontakt/` (Address Anchoring, plik 114):** realny iframe Google Maps z pinezką + przycisk „Wyznacz trasę" (deep-link); sekcja dojazdu (komunikacja, parking przy Opatowickiej, landmarki dzielnicy); pełne godziny (Sob/Ndz).

**geoTopicality treściowy (45 stron):** wpleść geo w H1 + widoczną treść wg wzorca USG; rozważyć blok hiperlokalny / aktualności wiążące klinikę z dzielnicą (uwaga YMYL: bez thin-contentu — spójne z XP-30/F4 i EX/F3).

---

## 7. Weryfikacja adwersaryjna (manualna — agent główny z dostępem do `src/`)

Faza `weryf:*`/`synteza` workflow padła na limicie sesji (52 agenty). Weryfikację wykonano ręcznie, otwierając każdy cytowany plik:

| Finding | Werdykt | Działanie |
|---|---|---|
| LO-02 postalCode | **confirmed** | `clinic.js:12=''` potwierdzone naocznie. Priorytet P0→**P1**; wartość kodu **nie podana** (zakaz fabrykacji) |
| LO-03 dwumarkowość | **confirmed** | `clinic.js:2/3/7/52-53` + `OrganizationSchema.jsx:25` potwierdzone. P0→**P1** (on-site spójne; resolucja off-site/biznesowa) |
| LO-05 brak LB na `/kontakt/` | **confirmed** | `kontakt/page.jsx` ma tylko `BreadcrumbSchema`; `OrganizationSchema` import tylko w `page.jsx:14` |
| LO-06 legalName/NIP/KRS | **confirmed** | grep potwierdza 0 emisji poza configiem |
| LO-07 geo/hasMap | **confirmed** | grep `src`: 0× `GeoCoordinates`/`hasMap` |
| LO-08 sameAs bez GBP | **confirmed** | `OrganizationSchema.jsx:25` = tylko FB+IG |
| LO-09 mapa-atrapa | **confirmed** | `ContactSection.jsx:34-43` = placeholder, naocznie |
| LO-12 addressRegion | **confirmed** | brak w schemacie i configu |
| LO-13 image | **confirmed** | brak `image`/`logo`; dubel przyczynowy F3 |
| LO-14 geoTopicality | **confirmed** | pomiar deterministyczny 64 stron (własny skrypt); 45/64=0 |
| LO-15 provider @id | **confirmed** | `ServiceSchema.jsx:19` ref do home-only `#organization` (just zweryfikowane) |
| „Dentist=brak LocalBusiness" | **odrzucone jako błąd** | Dentist JEST podtypem LocalBusiness — findingi poprawnie unikają tej tezy |

**Bilans (15 findingów kanonicznych):** ✅ 2 · ❌ 3 (LO-07, LO-09, LO-14) · ⚠️ 7 (LO-02/03/05/06/08/10/12) · ℹ️ 3 (LO-11/13/15).
**Priorytety:** **P0 net-nowych: 0** · P1: 9 (LO-02/03/05/06/07/08/09/11/14) · P2: 6 (LO-01/04/10/12/13/15).

### Scoring Local SEO (composite ~40/100)
| Sub-wymiar | Wynik | Uzasadnienie |
|---|---|---|
| NAP / klaster | ~52 | ✅ centralizacja on-site, telefon międzynar.; ⚠️ pusty kod pocztowy, dwumarkowość, brak legalName/NIP/GBP w schemacie |
| Schema LocalBusiness | ~34 | tylko home, typ wąski (Dentist), brak geo/hasMap/postalCode/region/priceRange/image/areaServed; provider @id wisi |
| geoTopicality on-page | ~38 | 45/64 zero geo w treści; USG=wzorzec; brak hiperlokalnego kontentu |
| Mapa / brick-and-mortar (on-page) | ~25 | mapa-atrapa, brak instrukcji dojazdu, brak `aggregateRating`/`image`; reszta sygnałów = off-page checklisty |
| **Composite** | **~40** | jeden realny atut (centralizacja NAP) wśród systemowych luk schematu/geo/mapy; off-page niemierzalne (checklisty, nie obniżają na ślepo) |

---

## 8. Macierz pokrycia skilla `czesc-5/109-114` (1:1)

| Plik skilla | Pokrycie |
|---|---|
| 109 wprowadzenie (entity resolution, integracja witryna↔GBP) | ✅ rama §0–1; LO-03/05/08 (klaster, witryna↔GBP) |
| 110 LocalWWWInfo (address/phone/hours/brickAndMortarStrength/geotopicality/cluster/siteSiblings) | ✅ LO-01/02/04/05/06/07/10/12 + W3 (siteSiblings/isLargeChain N/A) |
| 111 brickAndMortarStrength (GBP/UGC/behawioralne/cytowania) | ✅ LO-09/13 (on-page) + §5.A/C (manual) |
| 112 geotopicality (geo-tematyka, hiperlokalny kontent) | ✅ LO-14 + §2 pomiar + §5.D |
| 113 checklist (4 wymiary) | ✅ §4 — 12/12 pozycji 1:1 |
| 114 neochevid (Address Anchoring, szumność NAP, sygnały temporalne, inwersja geo, zszywanie online↔offline) | ✅ LO-09 (technika 1) + §5.B (technika 2) + §5.C/A (technika 3) + §5.D (technika 4) + LO-13/14 (technika 5) |

---

## 9. Wejście do Fazy 7 (E-E-A-T + Authoritativeness + YMYL + off-page)

- **Founders/Person:** `OrganizationSchema` emituje `founder` (Bogdan, Iwanna) jako `Person{name, jobTitle}` bez `sameAs`/zdjęć/regaliów; bio Iwanny szczątkowe (`clinic.js:45-49`). Brak `Person`/`Physician` + `author`/`reviewedBy` na stronach usług (YMYL).
- **Brand BAS vs Smile.Expert** (LO-03) — wspólny wątek z F1/F4; w F7 pod kątem sygnałów brandowych/autorytetu i „hipotezy odłączonej encji".
- **Off-page** (profil linków, wzmianki lokalne — §5.D) zasila checklisty Authoritativeness.
- **`aggregateRating`/recenzje** (§5.C) — sygnał Trust/YMYL do skorelowania w F7.

---

→ **Koniec Fazy 6.** Wyniki na dysku: `06-local-seo.md`, `_f6_facts.md`, `_f6_workflow_findings.json` (26 findingów surowych z 5 wymiarów). **15 findingów LO-01…LO-15** + checklist 113 zmapowany 1:1, composite **~40/100**. Workflow 5-wymiarowy (faza weryfikacji padła na limicie sesji → **weryfikacja manualna agenta głównego z dostępem do `src/`**, każdy dowód potwierdzony naocznie). **Net-nowych P0: 0.** Mocna strona: **centralizacja NAP** (`clinic.js`). Główne długi P1: schema lokalny niekompletny+tylko home, mapa-atrapa, geoTopicality 45/64 bez geo w treści, dwumarkowość. Zalecane **`/compact`** przed **Fazą 7 (E-E-A-T + Authoritativeness + YMYL)**.
