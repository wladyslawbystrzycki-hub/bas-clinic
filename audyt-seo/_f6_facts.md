# Faza 6 — FAKTY Local SEO (ground truth z repo + crawl + render localhost:3000)

Serwis: Klinika BAS (bas.clinic), Next.js SSG, 64 strony, YMYL (medycyna), Wrocław. Trailing slash wszędzie.

## DANE FIRMY — single source of truth: `src/config/clinic.js`
- name: **"Klinika BAS"**
- legalName: **"Smile.Expert Sp. z o.o."** (← inna marka niż name)
- url: https://bas.clinic
- phone: **"+48 690 511 511"** (format międzynarodowy ✓), phoneRaw "+48690511511"
- email: **"rejestracja@smile.expert"** (← domena smile.expert, nie bas.clinic)
- address: street "ul. Opatowicka 132", city "Wrocław", **postalCode: '' (PUSTY)**, country "PL"
- hours: Pon–Pt 8:00–20:00; Sob "Zamknięte"; Ndz "Zamknięte"
- openingHoursSpecification: TYLKO `[{Mon–Fri, 08:00–20:00}]` (brak wpisów weekend)
- social: facebook.com/smile.expert, instagram.com/smile.expert (← smile.expert, nie bas)
- krs: 0000763394, nip: 8971862168 (w configu, ale NIE emitowane w schemacie)
- founders: Bogdan Bas (pełne bio), Iwanna Bas (szczątkowe) — szczegóły w F7

## SCHEMA LOKALNY — `OrganizationSchema.jsx`, renderowany TYLKO na home (`page.jsx:14`)
- @type: **['MedicalOrganization','Dentist']**. UWAGA: `Dentist` JEST podtypem `LocalBusiness` (Dentist → LocalBusiness/MedicalBusiness/MedicalOrganization) → LocalBusiness obecny technicznie, ale: (a) wąski — pokrywa tylko stomatologię, nie estetykę ani USG/diagnostykę; (b) tylko na 1 stronie (home), brak na `/kontakt/`.
- address: streetAddress, addressLocality, addressCountry. **BRAK: postalCode, addressRegion (Dolnośląskie), geo (GeoCoordinates lat/lng), hasMap.**
- openingHoursSpecification: tylko Mon–Fri (brak deklaracji weekendu — dopuszczalne, ale niespójne z kontaktem).
- sameAs: tylko FB+IG (smile.expert). BRAK: GBP/Maps URL, legalName, vatID(NIP), taxID(KRS), priceRange, image, areaServed, aggregateRating, medicalSpecialty.
- founder: Person{name, jobTitle} ×2 (bez sameAs/zdjęć — F7).
- `/kontakt/` ma TYLKO BreadcrumbSchema (kontakt/page.jsx) — brak LocalBusiness/ContactPoint na kanonicznej stronie kontaktu.

## MAPA / ADDRESS ANCHORING — `ContactSection.jsx`
- **Mapa = PLACEHOLDER (atrapa).** Linie 34–43: `{/* Map placeholder */}` → szary box z napisem "Mapa Google Maps\n{adres}". BRAK realnego `<iframe>` Google Maps, BRAK linku do trasy/deep-linka, BRAK `hasMap`.
- Grep całego `src/`: 0× iframe / maps.google / GeoCoordinates / latitude / hasMap / priceRange / areaServed.
- ContactSection pokazuje: Adres (street+city, BEZ kodu), Telefon, Email, Godziny **tylko "Pon–Pt"** (pomija Sob/Ndz). BRAK instrukcji dojazdu/parkingu/dzielnicy (technika 1 "Address Anchoring" z pliku 114 niezrealizowana).
- Footer: pokazuje street + city (bez kodu), pełne godziny (Pon–Pt + "Sob–Ndz: Zamknięte"), "Stomatologia i Medycyna Estetyczna **we Wrocławiu**" (geo w chrome na każdej stronie).

## NAP — SPÓJNOŚĆ
- ON-SITE: w pełni spójny (footer/kontakt/schema czytają z `clinic.js`) → ✅ centralizacja = mocna strona. Telefon `tel:`/format międzynarodowy OK, email `mailto:` OK.
- RYZYKO OFF-SITE (entity cluster): dwumarkowość **Klinika BAS ↔ Smile.Expert Sp. z o.o.** (legalName + email + social + treści ze smile.expert). Cytowania w sieci mogą rozszczepiać się między dwie nazwy → niższa pewność klastra (cluster). Weryfikacja off-site → checklist.
- Kod pocztowy pusty wszędzie → adres niekanoniczny względem oficjalnego formatu (checklist 113 Wymiar 1).

## geoTopicality ON-PAGE — pomiar deterministyczny (render localhost:3000, 64 strony)
Metoda: zliczanie `wrocław|dolnośl|opatowic` w: title/H1/meta (z crawl-dataset) oraz w WIDOCZNEJ treści (render z usuniętym `<head>`, `<header>`, `<footer>`, `<script>`).
- **meta description: 64/64** mają geo (ale meta = niewidoczna, słaby sygnał treściowy).
- **title: 17/64** (16 stron USG + home). 0 stron stomatologii/estetyki.
- **H1: 16/64** (wyłącznie USG). 0 poza USG (home H1 też bez geo).
- **WIDOCZNA TREŚĆ: 19/64 z geo; 45/64 = ZERO geo w widocznej treści.**
  - ZERO (45): WSZYSTKIE strony stomatologii (huby + usługi + sub-huby + dzieci), WSZYSTKIE 24 strony estetyki, /cennik/, /wlewy-witaminowe/, /programy-zabiegowe/, /medycyna-estetyczna/. Jedyne "Wrocław" na tych stronach = meta `<head>` + footer chrome.
  - Z geo (19): 16× USG (4–8 wystąpień, geo wpleciony w H1+H2+akapity: "USG tarczycy we Wrocławiu", "Wykonujemy je w Klinice BAS we Wrocławiu"), home (7), /kontakt/ (4), /o-nas/ (3).
- WNIOSEK: **USG = wzorzec geoTopicality** (geo w title+H1+treści). 45 stron komercyjnych (implanty/licówki/botox/wypełniacze itd. — strony "pieniężne") mają geo WYŁĄCZNIE w meta — niewidoczne dla użytkownika, słaby sygnał rankingowy dla zapytań typu "implanty Wrocław". To centralny defekt on-page Local. Cross-ref: geo-w-title = OG-07 (F2, własność F2); geo-w-treści/geoTopicality = własność F6.

## brick-and-mortar / hiperlokalny kontent
- 0 stron z treścią o dzielnicy/okolicy/dojeździe (Opatowice, Wrocław-Wojnów/okolica, parking, komunikacja). Technika 1 (112) i hiperlokalny kontent (113 Wymiar 4) — niezrealizowane.
- Wszystkie sygnały brickAndMortarStrength (recenzje volume/velocity/sentiment, zdjęcia UGC, foot traffic, dwell, directions, GBP aktywność) — NIEWERYFIKOWALNE z repo → checklisty manualne (GBP Insights/Ahrefs/SERP).

## POLSKIE PLATFORMY CYTOWAŃ/RECENZJI (dla checklistów manualnych, YMYL-medyczne)
Google Business Profile/Maps, **ZnanyLekarz.pl (Doctoralia)** — krytyczne dla medycyny, Mapa Polski, panoramafirm.pl, ALE.pl, Booksy (estetyka), Facebook/Instagram (smile.expert), katalogi medyczne.

## DUBLE / CROSS-REFERENCE (dyscyplina dedupu)
- geo-w-title 47 stron bez → **OG-07 (F2)**. F6 liczy geoTopicality treściowy, nie title.
- encja `Dentist` wąska vs multi-wertykał → koreluje z **siteFocusScore (F4)**; F6 patrzy pod kątem LocalBusiness/geo.
- brand Klinika BAS vs smile.expert → **F1 (social→smile.expert), F4 (brand confusion)**; F6 patrzy pod kątem entity cluster/NAP.
- founders bio (Iwanna szczątkowe), Person schema bez regaliów → **F7 (E-E-A-T)**; F6 tylko odnotowuje istnienie founder w schemacie lokalnym.
