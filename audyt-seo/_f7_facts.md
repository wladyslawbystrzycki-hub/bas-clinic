# Faza 7 — FAKTY E-E-A-T / Authoritativeness / YMYL / off-page (ground truth z repo + grep)

Serwis: Klinika BAS (bas.clinic), Next.js SSG, 64 strony, **YMYL (medycyna)**, Wrocław. Metoda F7: sygnały E-E-A-T to **stałe ogólnowitrynowe** (komponenty schema, szablony, strony autorów) — weryfikowalne deterministycznie przez grep/Read, NIE rozkład per-strona. Dlatego F7 wykonana przez agenta głównego z dostępem do `src/` (bez workflow — brak wartości dodanej z fan-outu dla stałych globalnych; dodatkowo unika ryzyka limitu sesji, który ubił fazę weryfikacji F6).

## AUTORZY / Person — stan deterministyczny (grep całego `src/`)
- `Person` w schemacie: **TYLKO** zagnieżdżony `founder` w `OrganizationSchema.jsx:26-30` → `{@type Person, name, jobTitle}`. BRAK: `@id`, `sameAs`, `image`, `url`, `hasCredential`, `worksFor`, `alumniOf`, `knowsAbout`. Renderowany **tylko na home**.
- `author` / `reviewedBy` / `Physician` / `medicalSpecialty` / `hasCredential`: **0 wystąpień** w całym `src/` (grep potwierdzony). 60 stron usług YMYL bez autora/recenzenta medycznego w schemacie.
- `ServiceSchema.jsx`: `@type` MedicalProcedure, `provider` = Organization `@id` (wisi na podstronach — LO-15/F6). BRAK `author`, `reviewedBy`, `howPerformed`, `medicalSpecialty`.

## TREŚĆ usług — autorstwo (ServicePageTemplate.jsx + ExpertInfoSection.jsx)
- Wszystkie 60 stron usług: blok `ExpertInfoSection` pod nagłówkiem **„Informacje od specjalisty" / „Wszystko o: {X}"** (`ServicePageTemplate.jsx:63-67`). **Specjalista ANONIMOWY** — brak imienia, brak podpisu (byline), brak `Person`, brak linku do bio. Treść deklaruje ekspercki głos, ale bez nosiciela encji → authorReputationScore = 0 (hipoteza odłączonej encji, plik 107, na poziomie autora).
- `ExpertInfoSection.jsx`: renderuje `items[].title + content` (dangerouslySetInnerHTML). Zero atrybucji autora.

## STRONA /o-nas/ — stan (o-nas/page.jsx) — encja ORG częściowo „przyłączona"
- ✅ Strona istnieje, nazwani realni założyciele (Bogdan i Iwanna Bas), filozofia, adres → witryna NIE jest w pełni „odłączoną encją" na poziomie organizacji.
- Bogdan Bas: pełne bio (4 akapity z `clinic.js` bio[]), cytat, statystyki (15+ lat, 2000+ pacjentów, od 2012), „lek. med.", absolwent Akademii Medycznej we Wrocławiu, lekarz w 3. pokoleniu.
- Iwanna Bas: **TYLKO 1 zdanie** (`description`) — brak `bio[]`, brak statystyk, brak cytatu. Asymetria Bogdan 4 akapity vs Iwanna 1 linia.
- ❌ Zdjęcia: **placeholdery SVG** (generyczna ikona usera, `o-nas/page.jsx:44-46, 110-112`) — BRAK realnych fotografii (taktyka 4/7 z 108).
- ❌ Schema na /o-nas/: **TYLKO BreadcrumbSchema** (`o-nas/page.jsx:24`) — brak `Person` (taktyka 4: znacznik Person na stronie autora), brak `AboutPage`.
- ❌ BRAK regaliów strukturalnych: certyfikaty, dyplomy, członkostwa (PTMEiAA itp.), akredytacje, specjalizacja, **numer PWZ** (Prawo Wykonywania Zawodu — kluczowy sygnał Trust YMYL w PL).
- ❌ BRAK linków do zewnętrznych profili/publikacji osób: LinkedIn, **ZnanyLekarz/Doctoralia**, brak `Person.sameAs` → brak grafu encji autora.
- ❌ BRAK „wzmianek w mediach" / nagród (taktyka 7).
- ⚠️ Kwalifikacja vs zakres: Bogdan opisany jako „lekarz medycyny" (ogólny) prowadzący klinikę stomatologiczno-estetyczną — brak deklarowanej specjalizacji stomatologicznej; treści USG/estetyka/stomatologia bez przypisanego wykonawcy-specjalisty.

## HOME — sekcja „Nasz zespół" (page.jsx:28-55)
- Karty założycieli: avatar = placeholder SVG (bez zdjęć), name + role + description z `clinic.js`.
- ❌ Karty **NIE linkują** do `/o-nas/` (taktyka 4: imię autora → link na stronę-biografię). Brak huba encji autora.
- Odkrywalność `/o-nas/`: nawigacja header (mega-menu klienckie — LK-01/F5, poza indeksowalnym DOM) + **footer** (`Footer.jsx:126`, indeksowalny) + sitemap (`prio 0.6`). Home → /o-nas/ tylko przez chrome, brak in-body linku z treści home.

## STRONY ZAUFANIA / PRAWNE — BRAK
- `find src/app`: **0 stron** polityka prywatności / regulamin / cookies / RODO / disclaimer (grep potwierdzony „NONE FOUND").
- Witryna zbiera dane (formularz/kontakt, `mailto`/`tel`) → brak Polityki Prywatności = naruszenie RODO + negatywny sygnał Trust (taktyka 10 z 108: „dla każdej witryny zbierającej dane jest to obowiązkowe").

## YMYL — ŹRÓDŁA / DISCLAIMER — ZERO
- grep `src/data/` + `src/app/components/`: **0** wystąpień źródeł medycznych (PubMed/NLM/NFZ/towarzystwa nauk.), bibliografii, piśmiennictwa, disclaimera medycznego („materiał nie zastępuje konsultacji lekarskiej"), PWZ.
- `src/data/` = **tylko 2 pliki** (większość treści inline w page.jsx via `expertInfo`). 0 linków zewnętrznych http do nie-własnych domen w `data/`.
- Cross-ref F4: **0 linków wychodzących 64/64** (własność F4, sygnał encji/ekspertyzy). F7 ujmuje to pod kątem **YMYL taktyka 6/12** (odwołania do autorytetnych źródeł pierwotnych) — liczone raz (F4), tu rekomendacja medyczna.

## ENTITY SOURCE OF TRUTH — naruszona (Tech 4 z 109)
- Dwumarkowość: `name` = „Klinika BAS" vs `legalName` = „Smile.Expert Sp. z o.o."; `email` = rejestracja@**smile.expert**; `social` FB/IG = **smile.expert**. NIP `8971862168` / KRS `0000763394` w `clinic.js`, ale **NIE emitowane** w schemacie (brak `vatID`/`taxID`/`legalName` w OrganizationSchema).
- Tech 4 (109): „niespójność danych (różne nazwy w stopce, w Schema i w profilach zewnętrznych)" → podwyższa scamness, podważa Trust. Cross-ref: F6 (LO-03 klaster NAP), F1 (social→smile.expert), F4 (brand confusion). F7 ujmuje pod kątem **odłączonej/niespójnej encji + ryzyko scamness**.

## AUTHORITATIVENESS (126) — 3 filary, w większości ZEWNĘTRZNE → checklisty
1. **Profil linkowy** (jakość/bliskość do seed, anchorMismatchDemotion, organic traffic donorów) → Ahrefs/Semrush/Majestic. Niemierzalne z repo. Algorytmika 082/083/084 — cross-ref F5 (anchory LK), F1 (spamrank wych.).
2. **Sygnały brandowe** (brand demand GSC, direct % GA4, kontrola SERP top-10 brandowy, `queriesForWhichOfficial` 089) → GSC/GA4/SERP. Niemierzalne z repo.
3. **Autorzy** — strony autorów (F7 on-site, słabe — patrz wyżej) + **cyfrowy ślad** (search „Bogdan Bas"/„Iwanna Bas", LinkedIn, ZnanyLekarz, Knowledge Graph, publikacje, cytowania) → checklist.

## siteAuthority (02-01-01) — baseline
- Site-level, wielowektorowy, wolnozmienny: PageRank-NearestSeeds + chromeInTotal/NavBoost + agregat contentEffort/OriginalContentScore.
- Wektory wejściowe znane z wcześniejszych faz są SŁABE: contentEffort ~34 (F3), OriginalContentScore ~52 (F3), Experience ~22 (F3); linki/brand = nieznane (zewn.). Domena nowa (1 commit „Initial commit") → niski startowy siteAuthority. → checklist + synteza F8.

## DEDUP / CROSS-REFERENCE (dyscyplina)
- 0 linków wychodzących → **F4** (własność). F7: kąt YMYL-źródła (taktyka 6).
- dwumarkowość BAS↔Smile.Expert → **F6 (LO-03), F1, F4**. F7: kąt entity-source-of-truth/scamness.
- Experience-in-content (1-os., liczby z praktyki) → **F3 (EX, Experience ~22)**. F7: kąt autorstwa/atrybucji (kto demonstruje doświadczenie).
- siteFocusScore/Dentist wąski → **F4**. F7 nie liczy ponownie.
- Iwanna bio szczątkowe — odnotowane jako sygnał F6, **własność F7** (kompletność strony autora).
- legalName/NIP/KRS brak w schemacie → odnotowane F6 (LO-06), **F7 ujmuje pod entity-source-of-truth** — liczone raz (defekt wspólny, dwa kąty).

## OBSERWACJA (mocne strony — uczciwie)
- ✅ Strona /o-nas/ istnieje z nazwanymi realnymi założycielami + Organization schema + pełne dane kontaktowe → encja ORG częściowo przyłączona (NIE „czarna skrzynka").
- ✅ Bogdan Bas: realne, osobiste, niegeneryczne bio (3 pokolenia lekarzy, empatia) — autentyczny ślad (choć bez regaliów strukturalnych/zdjęcia).
- ✅ Spójny on-site NAP via clinic.js (z F6) wspiera encję organizacji.
