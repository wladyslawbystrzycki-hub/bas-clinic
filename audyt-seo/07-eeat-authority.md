# Faza 7 — E‑E‑A‑T + Authoritativeness (A) + YMYL + off‑page

> Audyt **read‑only** wobec `src/`. Sygnały: `authorReputationScore`, `siteAuthority`, `PageRank‑NearestSeeds`, `scamness`, „hipoteza odłączonej encji" (Disconnected Entity). Framework T‑E‑E‑A → ta faza zasila głównie filar **A (Authoritativeness)** + domyka **E‑E‑A‑T (autorstwo/Trust YMYL)**.
> Skill: `czesc-5/105‑109` (E‑E‑A‑T), `czesc-6/126` (Authoritativeness audit), `czesc-1/02‑01‑01` (siteAuthority), `czesc-4/080‑106` (off‑page). Branża **YMYL (medycyna)** → najwyższe standardy zaufania.

---

## 0. Metoda i dane

**Co i jak mierzone.** Sygnały E‑E‑A‑T to **stałe ogólnowitrynowe** — komponenty schema, szablony stron, kompletność stron autorów. Nie są to rozkłady per‑strona (jak title/H1 w F2), lecz globalne właściwości kodu. Dlatego zmierzone **deterministycznie przez grep + Read całego `src/`** przez agenta głównego z dostępem do źródeł — bez workflow:
- fan‑out po stronach nie wnosi wartości dla stałych globalnych (każda z 60 stron usług używa tego samego `ServicePageTemplate` → ten sam stan autorstwa),
- dodatkowo eliminuje ryzyko limitu sesji, który ubił fazę adwersaryjną F6.

**Dowody (wszystkie potwierdzone naocznie):** `OrganizationSchema.jsx`, `ServiceSchema.jsx`, `ServicePageTemplate.jsx`, `ExpertInfoSection.jsx`, `o-nas/page.jsx`, `page.jsx` (sekcja „Nasz zespół"), `clinic.js`, `Footer.jsx`, `menuConfig.js`, struktura `src/app/` (strony prawne), `src/data/`. Grepy: `Person|Physician|reviewedBy|author|medicalSpecialty|hasCredential` oraz `polityk|regulamin|prywatn|cookie|rodo` oraz `źródł|PWZ|disclaimer|bibliograf`. Surowy digest: `_f7_facts.md`.

**Punkty zewnętrzne** (profil linkowy, popyt brandowy, ruch direct, cyfrowy ślad autorów, SERP brandowy) — **niemierzalne z repo** → gotowe **checklisty manualne** (§6, §7).

**Skala priorytetów** (spójna T‑E‑E‑A, jak F1–F6): P0 = bloker rankingowy/site‑breaking; P1 = istotny dług; P2 = optymalizacja. **Net‑nowych P0 w F7 = 0** (uzasadnienie w §9).

---

## 1. Mapowanie E‑E‑A‑T → sygnały (kontekst, pliki 105–106)

E‑E‑A‑T **nie jest pojedynczym `eeat_score`** — to własność emergentna z grup sygnałów (105). Stan bas.clinic per komponent (z poprzednich faz + F7):

| Komponent | Sygnały (106) | Stan na bas.clinic | Faza‑własność |
|---|---|---|---|
| **Experience** | contentEffort, originalContentScore, docImages, original_media_score | contentEffort ~34, OCS ~52, media 100% stock, 1‑os. ~1/64 | **F3** (Experience ~28) |
| **Expertise** | siteFocusScore, siteRadius, **authorReputationScore**, ugcDiscussionEffort | siteFocusScore ~52, **authorReputationScore = 0** (autorzy anonimowi), brak UGC | **F4** (~54) + **F7** (autorzy) |
| **Authoritativeness** | **siteAuthority**, PageRank‑NearestSeeds, isLargeChain | linki/brand nieznane (zewn.), isLargeChain=false (1 lokal) | **F7** (ta faza) |
| **Trust** | badSslCertificate, scamness, clutterScore, GoodClicks/BadClicks | SSL ok, clutterScore niski (F1), **scamness‑ryzyko**: dwumarkowość + brak stron prawnych | **F1** + **F7** (entity/legal) |

F7 domyka dwie luki, które przecinają wszystkie filary: **(a) autorstwo/encja autora** (sercem Expertise + Experience + Authoritativeness), **(b) Trust YMYL** (strony prawne, źródła, spójność encji).

---

## 2. Hipoteza odłączonej encji — diagnoza (plik 107)

Pytanie asesora (Wytyczne 2.5.2): **„Kto odpowiada za tę witrynę i kto stworzył tę treść?"** Diagnoza bas.clinic = **encja organizacji częściowo PRZYŁĄCZONA, autorzy treści w pełni ODŁĄCZENI**:

| Wymiar | Stan | Werdykt |
|---|---|---|
| Strona „O nas" | ✅ istnieje, nazwani założyciele, filozofia, adres | **Przyłączona** |
| Dane kontaktowe | ✅ adres/telefon/email (spójny on‑site, F6) | **Przyłączona** |
| Organization schema | ✅ MedicalOrganization+Dentist, founder Person | **Przyłączona** (niepełna) |
| **Autorzy treści** | ❌ 60 stron YMYL „Informacje od specjalisty" = **anonimowe** | **ODŁĄCZONA** |
| **Person hub autora** | ❌ brak Person z `@id`/`sameAs`/`image`/regaliów; /o-nas/ bez Person schema | **ODŁĄCZONA** |
| **Ślad zewnętrzny osób** | ❌ brak LinkedIn/ZnanyLekarz/publikacji/`sameAs` | **ODŁĄCZONA** |
| **Spójność encji marki** | ⚠️ dwumarkowość BAS ↔ Smile.Expert (name vs legalName/email/social) | **Rozmyta** |
| Strony prawne (Trust) | ❌ brak Polityki Prywatności/Regulaminu (YMYL+RODO) | **Czerwona flaga** |

**Wniosek:** organizacja jest weryfikowalna (NIE „czarna skrzynka" → nie kwalifikuje się na rating Lowest z 4.5.1), ale **`authorReputationScore` = 0** (brak nosiciela encji autora), a dwumarkowość + brak stron prawnych podnoszą **scamness‑ryzyko** w niszy YMYL. To dokładnie wzorzec, który HCS/Core Update karze: treść medyczna bez weryfikowalnego, kwalifikowanego autora.

---

## 3. Findingi EA‑01 … EA‑15

> Format: **[ID]** Tytuł · Status ✅/⚠️/❌ · Sygnał · Dowód · Rekomendacja · Priorytet · Effort.

---

**[EA‑01] Encja organizacji częściowo przyłączona — fundament istnieje** · ✅ STRENGTH · Disconnected Entity / siteAuthority
**Dowód:** `o-nas/page.jsx` (nazwani założyciele, bio Bogdana, filozofia, adres `ul. Opatowicka 132`), `OrganizationSchema.jsx` (MedicalOrganization+Dentist+founder), spójny NAP via `clinic.js` (F6).
**Ocena:** witryna odpowiada na pytanie „kto za tym stoi" na poziomie organizacji → unika kary Lowest za anonimowość (107/4.5.1). To realna baza do budowy siteAuthority.
**Rekomendacja:** utrzymać i wzmacniać (EA‑05/EA‑09). · **P2** · **S**

---

**[EA‑02] 60 stron usług YMYL bez autora — treść „od specjalisty" anonimowa** · ❌ · `authorReputationScore`=0 / Disconnected Entity (autor)
**Dowód:** `ServicePageTemplate.jsx:63‑67` — sekcja `subtitle="Informacje od specjalisty"`, `title="Wszystko o: {X}"`; `ExpertInfoSection.jsx` renderuje treść **bez podpisu autora**. Grep: `author|reviewedBy|Physician` = **0** w `src/`. Treść deklaruje ekspercki głos, ale nie ma nosiciela encji.
**Skutek YMYL:** dla medycyny brak kwalifikowanego autora = klasyczny target HCS/Core Update; `authorReputationScore` nieosiągalny.
**Rekomendacja:** dodać byline „Konsultacja medyczna: lek. med. Bogdan Bas / lek. med. Iwanna Bas" z linkiem do `/o-nas/`; per‑zabieg przypisać wykonawcę‑specjalistę. · **P1 (wysoki)** · **M**

---

**[EA‑03] Brak Person‑huba autora; Person tylko zagnieżdżony w Organization (home)** · ❌ · `authorReputationScore` / entity‑first
**Dowód:** `OrganizationSchema.jsx:26‑30` — `founder: {@type Person, name, jobTitle}` ×2, BRAK `@id`, `sameAs`, `image`, `url`, `hasCredential`, `alumniOf`, `knowsAbout`. `/o-nas/` renderuje **tylko BreadcrumbSchema** (`o-nas/page.jsx:24`) — brak `Person` na stronie biografii (taktyka 4 z 108 niespełniona).
**Rekomendacja:** wyemitować na `/o-nas/` osobne węzły `Person` z `@id` (`#bogdan-bas`, `#iwanna-bas`), `image`, `hasCredential`, `alumniOf` (Akademia Medyczna we Wrocławiu), `sameAs` (LinkedIn/ZnanyLekarz), `worksFor → #organization`; podpiąć jako `author`/`reviewedBy` w ServiceSchema. · **P1** · **M**

---

**[EA‑04] ServiceSchema bez `author`/`reviewedBy`/`Physician`/`medicalSpecialty`** · ❌ · maszynowo‑czytelne E‑E‑A‑T (YMYL)
**Dowód:** `ServiceSchema.jsx:11‑28` — `@type` MedicalProcedure, `provider` = Organization `@id` (wisi na podstronach, LO‑15/F6). Brak `author`, `reviewedBy`, `howPerformed`, `medicalSpecialty`. 60 stron zabiegowych YMYL bez maszynowego sygnału „kto recenzował medycznie".
**Rekomendacja:** dodać `reviewedBy: {@id #bogdan-bas}` (lub właściwy specjalista) + `medicalSpecialty` (Dentistry / Dermatology / `PlasticSurgery`) do ServiceSchema. · **P1** · **M**

---

**[EA‑05] Strona /o-nas/ niekompletna vs taktyka 7 — brak zdjęć, regaliów, mediów** · ⚠️ · Disconnected Entity / Trust
**Dowód:** `o-nas/page.jsx:44‑46, 110‑112` — **placeholdery SVG** zamiast zdjęć founderów; brak sekcji certyfikatów/dyplomów/członkostw/akredytacji; brak „wzmianek w mediach"/nagród; brak Person schema. Bogdan ma realne bio, ale bez wizualnego i strukturalnego potwierdzenia kwalifikacji.
**Rekomendacja:** dodać prawdziwe fotografie (taktyka 4/7), listę regaliów (PWZ, specjalizacje, dyplomy, członkostwa np. PTMEiAA), sekcję „W mediach"/certyfikaty, znacznik Person. · **P1** · **M**

---

**[EA‑06] Brak regaliów/kwalifikacji autorów (PWZ, specjalizacja); asymetria bio** · ⚠️ · Expertise / YMYL Trust
**Dowód:** `clinic.js:28‑49`. Bogdan: „lek. med.", absolwent Akademii Medycznej we Wrocławiu, 15+ lat — ale **brak numeru PWZ** (kluczowy sygnał YMYL w PL), brak deklarowanej specjalizacji stomatologicznej mimo prowadzenia kliniki stom.‑estet. Iwanna: **1 zdanie** opisu (vs 4 akapity Bogdana), „specjalistka medycyny estetycznej" bez formalnej specjalizacji/PWZ.
**Rekomendacja:** uzupełnić PWZ, specjalizacje, dyplomy obojga; wyrównać bio Iwanny do pełnej biografii (jest współwłaścicielką i twarzą medycyny estetycznej — najsłabiej udokumentowana, a to filar oferty estetycznej). · **P1** · **M**

---

**[EA‑07] Karty zespołu nie linkują do bio; brak `sameAs` osób → brak grafu encji autora** · ⚠️ · `authorReputationScore` / entity graph
**Dowód:** `page.jsx:33‑53` (sekcja „Nasz zespół") — karty founderów **bez linku** do `/o-nas/` (taktyka 4: imię → link na biografię). `clinic.js` `founders[]` bez pola `sameAs`. Brak połączenia osoba↔profil zewnętrzny (LinkedIn/ZnanyLekarz/Doctoralia).
**Rekomendacja:** linkować imiona z home‑team i bylines do `/o-nas/#<osoba>`; dodać `sameAs` (ZnanyLekarz krytyczny dla medycyny PL, LinkedIn). · **P1** · **S**

---

**[EA‑08] YMYL: zero odwołań do autorytetnych źródeł medycznych + brak disclaimera** · ⚠️ · Expertise / Trust (taktyka 6/12)
**Dowód:** grep `src/data/` + komponenty: **0** źródeł (PubMed/NLM/NFZ/towarzystwa nauk.), 0 bibliografii/piśmiennictwa, 0 disclaimera („materiał nie zastępuje konsultacji lekarskiej"). 0 linków wychodzących 64/64 (pomiar **F4** — liczony tam; tu kąt YMYL‑źródła).
**Rekomendacja:** w treściach medycznych cytować pierwotne źródła (badania, wytyczne towarzystw, NFZ); dodać medyczny disclaimer i datę aktualizacji/recenzji medycznej. · **P1** · **M** · (defekt współ‑mierzony z F4 — liczyć raz)

---

**[EA‑09] Entity source of truth naruszona — dwumarkowość BAS ↔ Smile.Expert** · ⚠️ · scamness / siteAuthority (Tech 4 z 109)
**Dowód:** `clinic.js` — `name`„Klinika BAS" vs `legalName`„Smile.Expert Sp. z o.o.", `email` rejestracja@**smile.expert**, `social` FB/IG **smile.expert**. NIP `8971862168`/KRS `0000763394` w configu, ale **nieemitowane** w schemacie (brak `legalName`/`vatID`/`taxID` w OrganizationSchema). Cross‑ref: F6 (LO‑03/LO‑06), F1 (social→smile.expert), F4 (brand confusion).
**Skutek:** cytowania/wzmianki rozszczepiają się między dwie nazwy → niższa pewność encji w Knowledge Graph; niespójność = sygnał‑proxy scamness.
**Rekomendacja:** ujednolicić „źródło prawdy" encji; wyemitować `legalName`+`vatID`+`taxID` w schemacie; ustanowić relację BAS↔Smile.Expert (np. `parentOrganization`/`alternateName`); docelowo email/social na domenie marki. · **P1** · **M** · (defekt współ‑mierzony z F6/F1/F4 — kąt entity‑truth)

---

**[EA‑10] Brak stron prawnych (Polityka Prywatności / Regulamin / Cookies)** · ❌ · Trust / scamness (taktyka 10) + RODO
**Dowód:** `find src/app` → **0** stron polityka/regulamin/prywatność/cookies/RODO. Witryna zbiera dane (kontakt, `mailto`/`tel`, formularz CTA). Brak Polityki Prywatności = naruszenie RODO + brak „negatywnego dowodu Trust" (Tech 4/taktyka 10: dla każdej witryny zbierającej dane jest to obowiązkowe).
**Rekomendacja:** dodać `/polityka-prywatnosci/`, `/regulamin/`, baner cookies; link w footerze. · **P1 (wysoki)** · **M**

---

**[EA‑11] Brak warstwy redakcyjnej / „experience footprints" / reviewedBy‑editor** · ℹ️ · contentEffort / stabilność Core Update (Tech 1‑2 z 109)
**Dowód:** brak „Polityki redakcyjnej", brak roli redaktora/fakt‑czekera, brak rozdzielenia ekspertyzy autora (Person) i redakcji (Organization, `publisher`/`reviewedBy`). Treść bez „śladów doświadczenia" (mikro‑niepowodzenia, chronologia) — pokrywa się z F3 (Experience ~22).
**Rekomendacja:** dodać stronę „Polityka redakcyjna/weryfikacji medycznej"; oznaczyć `reviewedBy`; wpleść experience footprints (zasila F3). · **P2** · **M** · (współ z F3)

---

**[EA‑12] Profil linkowy — niemierzalny z repo** · ℹ️ EXT · `PageRank‑NearestSeeds` / `siteAuthority`
**Dowód:** brak danych off‑site w repo; domena nowa (1 commit „Initial commit"). Algorytmika 082/083/084 — cross‑ref F5 (anchory), F1 (spamrank wych.).
**Rekomendacja:** → **Checklist manualny A** (§6.1). · **P1 ext** · **L**

---

**[EA‑13] Sygnały brandowe — niemierzalne z repo** · ℹ️ EXT · `siteAuthority` (chromeInTotal/NavBoost), `queriesForWhichOfficial`
**Dowód:** brak GSC/GA4/SERP. → **Checklist manualny B** (§6.2). · **P1 ext** · **L**

---

**[EA‑14] Cyfrowy ślad autorów — niemierzalny z repo** · ℹ️ EXT · `authorReputationScore` / Knowledge Graph
**Dowód:** brak `sameAs` osób w repo; ślad zewn. (search nazwisk, LinkedIn, ZnanyLekarz, KG, publikacje) → **Checklist manualny C** (§6.3). · **P1 ext** · **M**

---

**[EA‑15] siteAuthority — baseline niski (synteza wektorów)** · ℹ️ · `siteAuthority` (site‑level, wolnozmienny)
**Dowód (02‑01‑01):** siteAuthority = PageRank‑NearestSeeds + chromeInTotal/NavBoost + agregat contentEffort/OCS. Wektory on‑site znane: contentEffort ~34 (F3), OCS ~52 (F3) — **słabe**; linki/brand nieznane (EA‑12/13). Domena nowa → niski start.
**Rekomendacja:** siteAuthority rośnie wolno (miesiące) — priorytet: contentEffort (F3) + autorzy (EA‑02..07) + brand (EA‑13). Pełna ocena w F8. · **kontekst** · **L**

---

## 4. Pokrycie „12 taktyk praktycznej implementacji" (plik 108) — 1:1

| # | Taktyka | Status na bas.clinic | Finding |
|---|---|---|---|
| 1 | Oryginalne media | ❌ 100% stock, placeholdery SVG | F3 (Image SEO 14) + EA‑05 |
| 2 | „Dowody" w tekście (experience) | ❌ ~1/64 1‑os., 0 liczb z praktyki | F3 (Experience 22) |
| 3 | Data i kontekst treści | ❌ brak dat testowania/aktualizacji | F3 + EA‑11 |
| 4 | Wyczerpujące strony autorów | ❌ brak Person, brak linku imię→bio, brak regaliów/zdjęć | **EA‑02/03/05/06/07** |
| 5 | Fokus tematyczny | ⚠️ 4 wertykały, siteFocusScore ~52 | F4 (własność) |
| 6 | Odwołania do źródeł pierwotnych | ❌ 0 cytowań medycznych | **EA‑08** (kąt) / F4 (pomiar) |
| 7 | Strona „O nas" budująca zaufanie | ⚠️ istnieje, ale bez zdjęć/regaliów/mediów/Person | **EA‑01/05** |
| 8 | Zajmij brandowe SERP | ℹ️ ext | **EA‑13** → Checklist B |
| 9 | Linki z „zaufanych źródeł" | ℹ️ ext | **EA‑12** → Checklist A |
| 10 | Techniczny audyt zaufania (SSL, kontakt, **strony prawne**, linki wych.) | SSL ✅(F1); kontakt ✅(F6); **strony prawne ❌**; linki wych. 0 (F4) | **EA‑10** + F1 + F4 |
| 11 | Nieskazitelny UX (clutterScore, CWV) | ✅ clutterScore niski, CWV desktop ok | F1 (własność) |
| 12 | Uczciwość YMYL (autor‑medyk, źródła, brak przesady) | ❌ autor anonimowy, 0 źródeł; ⚠️ „tylko zalety" (F3) | **EA‑02/08** + F3 |

→ **12/12 taktyk zmapowanych.**

---

## 5. Pokrycie „6 technik wzmocnienia E‑E‑A‑T" (plik 109) — 1:1

| # | Technika | Status | Finding |
|---|---|---|---|
| 1 | Experience footprints (mikro‑niepowodzenia, decyzje, znaczniki czasu) | ❌ nieobecne | EA‑11 + F3 |
| 2 | Rozdzielenie ekspertyzy autora vs redakcji (reviewedBy, polityka redakcyjna, Person+Org+publisher) | ❌ nieobecne | **EA‑11** |
| 3 | Kontrolowana „nadmiarowość" jako marker ekspertyzy | ⚠️ obecna tylko w USG (QBST wzorzec, F4) | F4 |
| 4 | Optymalizacja pod „negatywne dowody" Trust (entity source of truth, brak konfliktów, spójność danych) | ❌ dwumarkowość; brak nazwy prawnej w schemacie; brak stron prawnych | **EA‑09/EA‑10** |
| 5 | „Usprawiedliwienie kliku" (intro‑obietnica, spis korzyści, mini‑podsumowanie) → NavBoost | ⚠️ częściowo (FAQ/Q‑H3 z F2), brak intro‑obietnic | F2/F3 |
| 6 | Zewnętrzne potwierdzenia bez linkbuildingu (cytowalne dane, frameworki, wzmianki marki) | ❌ brak oryginalnych danych/frameworków | EA‑13 + F3 |

→ **6/6 technik zmapowanych.**

---

## 6. Checklisty manualne — Authoritativeness (plik 126, 3 filary)

### 6.1. Checklist A — Profil linkowy (EA‑12)
Narzędzie: **Ahrefs / Semrush / Majestic** (+ GSC „Linki").
- [ ] Eksport top‑100 domen linkujących do `bas.clinic`; ocena własnego autorytetu donorów (media, .gov, .edu, portale medyczne).
- [ ] „Bliskość do seed sites" — czy donorzy są blisko zaufanych źródeł w grafie (PageRank‑NearestSeeds).
- [ ] Raport „Anchors" — udział anchorów brandowych vs exact‑match; ryzyko `anchorMismatchDemotion` (cross‑ref F5 — anchory wewn. czyste, ale audyt dotyczy **zewnętrznych**).
- [ ] „Organic Traffic" stron linkujących — czy linki są „żywe" (donor z ruchem) vs martwe (zerowy ruch).
- [ ] Linki z portali medycznych PL (ZnanyLekarz, Medonet, Poradnik Zdrowie) i lokalnych (Wrocław) — pozyskać priorytetowo (1 link branżowy > 20 zwykłych).
- [ ] `spamrank` linków wychodzących = N/A (0 linków wych., F4) — ale przy budowie linków unikać złych sąsiedztw.

### 6.2. Checklist B — Sygnały brandowe (EA‑13)
Narzędzia: **Google Search Console, GA4, ręczny SERP**.
- [ ] GSC → filtr zapytań zawierających „klinika bas" / „bas clinic" / „smile expert" / „Bogdan Bas" / „Iwanna Bas"; **trend** liczby zapytań brandowych w czasie (rosnący = silny sygnał siteAuthority).
- [ ] GA4 → udział kanału **Direct** (proxy chromeInTotal/rozpoznawalności marki).
- [ ] Ręczny SERP „Klinika BAS" — czy top‑10 kontrolują zasoby własne (strona, GBP, FB/IG, ZnanyLekarz)? (`queriesForWhichOfficial`).
- [ ] **Dwumarkowość**: sprawdzić, czy „Klinika BAS" i „Smile.Expert" konkurują o ten sam SERP brandowy / dzielą sygnały (EA‑09).
- [ ] Negatywne/nierelewantne wyniki w SERP brandowym → SERM (czesc‑4 r.12).

### 6.3. Checklist C — Cyfrowy ślad autorów (EA‑14)
Narzędzie: ręczne wyszukiwanie + LinkedIn + ZnanyLekarz.
- [ ] Search „Bogdan Bas Wrocław" / „Iwanna Bas" — co znajduje Google? Profile, publikacje, cytowania?
- [ ] **ZnanyLekarz/Doctoralia** — profil + opinie (krytyczne dla medycyny PL); spójność NAP z witryną.
- [ ] LinkedIn / profile branżowe.
- [ ] Karta w Knowledge Graph (panel po prawej przy search nazwiska).
- [ ] Publikacje/wystąpienia/szkolenia osób → linkować z `/o-nas/` (Person.sameAs).
- [ ] Wnioski → uzupełnić `Person.sameAs` + sekcję „Publikacje/Media" na /o-nas/.

---

## 7. Off‑page (czesc‑4) — macierz checklistów manualnych (27 plików, 1:1)

Off‑page jest z definicji **poza repo** → mapowane na strategię/checklisty, nie findingi on‑site. Algorytmika pokryta tam, gdzie dotyka audytu on‑site (anchory→F5, spamrank wych.→F4). **Wiele technik 096–106 to zaawansowane/„szare" strategie wykonawcze** — odnotowane jako strategia, poza zakresem audytu on‑site.

| Plik | Temat | Mapowanie |
|---|---|---|
| 080 | Linkbuilding 2.0 — „nie linki, a kliki" | Checklist A (strategia: linki generujące realny ruch) |
| 081 | Trójwarstwowy indeks linków | Checklist A (jakość donorów) |
| 082 | PageRank‑NearestSeeds | Checklist A + EA‑12; algorytmika — cross‑ref site‑authority |
| 083 | anchorMismatchDemotion | Checklist A (anchory zewn.); cross‑ref **F5** (wewn.) |
| 084 | spamrank | Checklist A; cross‑ref **F4** (linki wych. = 0) |
| 085 | Strategia „Zarobaj klik" | Checklist A (strategia) |
| 086 | Nieoczywiste techniki linkbuildingu | Strategia (wykonawcza) |
| 087 | Wprowadzenie sygnały brandowe | Checklist B |
| 088 | Bezpośrednie wejścia / brand search / Chrome | Checklist B (GA4 Direct, chromeInTotal) |
| 089 | `queriesForWhichOfficial` | Checklist B (kontrola SERP brandowego) |
| 090 | Praktyczne strategie brand‑building | Checklist B (strategia) — EA‑13 |
| 091 | Nieoczywiste techniki brand signals | Strategia |
| 092 | SERM — zarządzanie reputacją | Checklist B/C; cross‑ref **F6** (recenzje/UGC) |
| 093 | Kontrola SERP brandowych zapytań | Checklist B |
| 094 | Nieoczywiste techniki SERM | Strategia |
| 095 | Podsumowanie cz.4 | Metodyka |
| 096 | Proksalacja strony donora | Strategia (zaawansowana) |
| 097 | In‑document link weighting | Strategia; cross‑ref F5 (in‑body links) |
| 098 | Semantyczne rozgrzewanie ankora | Strategia |
| 099 | Zarządzana pauza indeksacji | Strategia |
| 100 | Internal links donora | Strategia |
| 101 | Direct‑intent engineering | Checklist B (popyt brandowy) |
| 102 | Chrome memory bias | Checklist B |
| 103 | Inferencyjne wzmocnienie brandu | Strategia |
| 104 | Kanonikalizacja znaczeń | Strategia (encja marki); cross‑ref EA‑09 |
| 105 | Wychowywanie brandowych zapytań | Checklist B (strategia) |
| 106 | AI reputation watchdog | Checklist C (monitoring AI/SERP) |

→ **27/27 plików off‑page zmapowanych** (Checklist A/B/C lub strategia wykonawcza). Off‑page = **rekomendacja strategiczna**, nie defekt on‑site.

---

## 8. Stan docelowy (dla `/seo-fix`)

Pozycje wykonalne w kodzie (on‑site E‑E‑A‑T):
1. **Person schema** na `/o-nas/` — `@id` per osoba, `image`, `hasCredential` (PWZ/specjalizacja/dyplomy), `alumniOf`, `sameAs` (ZnanyLekarz/LinkedIn), `worksFor → #organization` (EA‑03).
2. **author/reviewedBy** w `ServiceSchema` → `{@id #osoba}` + `medicalSpecialty` (EA‑04).
3. **Byline** na stronach usług: „Konsultacja medyczna: …" + link do `/o-nas/` (EA‑02).
4. **Linkowanie kart zespołu** (home + o-nas) do bio (EA‑07).
5. **legalName + vatID + taxID** w OrganizationSchema; relacja BAS↔Smile.Expert (EA‑09).
6. **Strony prawne**: `/polityka-prywatnosci/`, `/regulamin/`, baner cookies + linki w footerze (EA‑10).
7. **Rozbudowa /o-nas/**: zdjęcia, regalia, sekcja „W mediach/Certyfikaty", pełne bio Iwanny (EA‑05/06).
8. **YMYL**: disclaimer medyczny + cytowania źródeł + data recenzji (EA‑08) [treściowe — współ z F3/seo-content].
9. **Polityka redakcyjna** + `reviewedBy`/publisher split (EA‑11).

Poza kodem (off‑page/zewnętrzne, do działań marki): Checklisty A/B/C (§6) + strategia czesc‑4 (§7).

---

## 9. Weryfikacja, bilans, scoring A

**Weryfikacja (manualna, agent główny z dostępem do `src/`).** Każdy finding on‑site potwierdzony naocznie w pliku źródłowym (grep + Read). Tabela:

| Finding | Twierdzenie | Weryfikacja naoczna | Werdykt |
|---|---|---|---|
| EA‑02 | 60 stron „od specjalisty" anonimowe | `ServicePageTemplate.jsx:63‑67` + grep author=0 | ✅ potwierdzone |
| EA‑03 | Person tylko founder@home, /o-nas/ bez Person | `OrganizationSchema.jsx:26‑30`, `o-nas/page.jsx:24` | ✅ potwierdzone |
| EA‑04 | ServiceSchema bez author/reviewedBy | `ServiceSchema.jsx:11‑28` | ✅ potwierdzone |
| EA‑05 | /o-nas/ placeholdery SVG, brak regaliów | `o-nas/page.jsx:44‑46,110‑112` | ✅ potwierdzone |
| EA‑07 | Karty zespołu bez linku do bio | `page.jsx:33‑53` (brak `<a>`/href) | ✅ potwierdzone |
| EA‑09 | Dwumarkowość, NIP/KRS poza schematem | `clinic.js` + `OrganizationSchema.jsx` (brak legalName/vatID) | ✅ potwierdzone |
| EA‑10 | Brak stron prawnych | `find src/app` = 0 | ✅ potwierdzone |
| EA‑08 | 0 źródeł/disclaimera medycznego | grep `src/data`+komponenty = 0 | ✅ potwierdzone |

**Kalibracja priorytetów.** Dwa kandydaci na P0 rozważone i **zdegradowane do P1‑high**, transparentnie:
- EA‑02 (anonimowi autorzy YMYL): poważne, ale witryna ma `/o-nas/`+Organization schema → encja organizacji weryfikowalna, nie kwalifikuje się na Lowest/„czarną skrzynkę" (107). Dług P1‑wysoki, nie site‑breaking P0.
- EA‑10 (brak Polityki Prywatności): istotny Trust+RODO, ale nie blokuje indeksacji/rankingu mechanicznie → P1‑wysoki.
- **Net‑nowych P0 = 0** (P0 zarezerwowane dla blokerów F1: home bez canonical T‑05, 6×`/undefined/`→404 T‑33). Spójne z F4/F5/F6.

**Bilans F7:** ✅1 (EA‑01) · ❌4 (EA‑02/03/04/10) · ⚠️5 (EA‑05/06/07/08/09) · ℹ️5 (EA‑11/12/13/14/15). Net‑nowych P1 = 9 (EA‑02..10, minus współ‑mierzone), P2 = 1 (EA‑11). 3 checklisty zewn. (A/B/C).

**Scoring A (Authoritativeness) — wstępny, ~30/100.** Sub‑wyniki:
| Wymiar | Wynik | Uzasadnienie |
|---|---|---|
| Encja organizacji | ~48 | ✅ /o-nas/+Organization schema+NAP; ⚠️ dwumarkowość, brak legalName/zdjęć/mediów |
| **Autorytet autorów** | ~18 | ❌ anonimowi na 60 stronach, brak Person‑huba, brak regaliów/PWZ/sameAs, authorReputationScore=0 |
| Trust YMYL (prawne/źródła/disclaimer) | ~28 | ❌ brak stron prawnych, 0 cytowań, brak disclaimera |
| Profil linkowy / brand | _n/d (zewn.)_ | EA‑12/13 → checklisty; domena nowa → baseline niski, ocena w F8 |
| **Composite A** | **~30 (wst.)** | Słaby filar; ratuje go istnienie weryfikowalnej encji org. Heavy‑external — finalizacja po checklistach A/B/C w F8 |

Uwaga: A jest **silnie zależny od danych zewnętrznych** (linki/brand). ~30 to ocena sygnałów **on‑site**; pełny obraz wymaga GSC/GA4/Ahrefs (F8 + checklisty).

---

## 10. Macierz pokrycia skilla F7 (1:1)

| Plik skilla | Pokrycie |
|---|---|
| `105-eeat-wprowadzenie` | §1 (E‑E‑A‑T emergentne, nie eeat_score) |
| `106-eeat-mapping-sygnalow` | §1 (tabela komponent→sygnały) |
| `106-eeat-experience-sygnaly` | §1 + cross‑ref F3 (Experience) |
| `107-eeat-hipoteza-odlaczenej-encji` | **§2** (diagnoza: org przyłączona / autorzy odłączeni) |
| `108-eeat-praktyczna-implementacja` | **§4** (12/12 taktyk zmapowanych) |
| `109-eeat-wzmocnienie` | **§5** (6/6 technik zmapowanych) |
| `126-audyt-sekcja-a-authoritativeness` | **§6** (3 filary → Checklisty A/B/C) + findingi EA‑12/13/14 |
| `02-01-01-site-authority` | §1 + **EA‑15** (baseline siteAuthority, wektory) |
| `czesc-4/080-106` (27 plików) | **§7** (macierz 27/27 → Checklist A/B/C / strategia) |

→ **Każdy punkt F7 odwzorowany** (finding / mapowanie taktyki / checklist zewnętrzny / strategia).

---

## 11. Wejście do Fazy 8 (synteza)

F7 dostarcza do F8:
- **Filar A ~30 (wst.)** — najsłabszy obok E‑Experience (~28); wymaga finalizacji po checklistach zewn.
- 15 findingów EA‑01..15; **net‑nowych P0 = 0**, P1 = 9, P2 = 1, 3 checklisty zewn.
- **Kluczowy dług strukturalny przekrojowy:** odłączona encja autora (EA‑02/03/04/07) — zasila Expertise (authorReputationScore), Experience (kto demonstruje doświadczenie) i Authoritativeness jednocześnie → wysoki priorytet w roadmapie.
- Wspólne defekty do scalenia po ID (liczyć raz): dwumarkowość (EA‑09 = F6 LO‑03 = F1 = F4), 0 źródeł wych. (EA‑08 = F4), media stock/placeholdery (EA‑05 = F3 Image SEO), experience footprints (EA‑11 = F3).
- **Mocna strona:** weryfikowalna encja organizacji (EA‑01) + autentyczne bio Bogdana — fundament do budowy siteAuthority.

---

→ **Koniec Fazy 7.** Wyniki na dysku: `07-eeat-authority.md`, `_f7_facts.md`. **15 findingów EA‑01…EA‑15**, 12/12 taktyk + 6/6 technik + 27/27 plików off‑page zmapowanych 1:1, filar **A ~30/100 (wst.)**. Weryfikacja **manualna agenta głównego z dostępem do `src/`** (każdy finding on‑site potwierdzony naocznie; sygnały E‑E‑A‑T to stałe globalne → fan‑out zbędny, ryzyko limitu sesji uniknięte). **Net‑nowych P0 = 0.** Główny dług: **odłączona encja autora** (YMYL: 60 stron bez autora‑medyka, brak Person‑huba, brak stron prawnych). Mocna strona: **weryfikowalna encja organizacji** (/o-nas/ + Organization schema). Zalecane **`/compact`** przed **Fazą 8 (Synteza, scoring T‑E‑E‑A, priorytetyzacja, roadmapa)**.
