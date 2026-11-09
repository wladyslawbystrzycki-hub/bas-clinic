export const STOMATOLOGIA_SERVICES = [
  {
    id: 'stomatologia',
    slug: 'stomatologia',
    name: 'Stomatologia',
    shortDesc: 'Kompleksowa opieka stomatologiczna dla całej rodziny.',
    isLanding: true,
  },
  {
    id: 'stomatologia-estetyczna',
    slug: 'stomatologia/estetyczna',
    name: 'Stomatologia estetyczna',
    shortDesc: 'Piękny uśmiech dzięki nowoczesnym zabiegom estetycznym.',
    parent: 'stomatologia',
    children: ['wybielanie-zebow', 'odbudowa-zebow'],
  },
  {
    id: 'wybielanie-zebow',
    slug: 'stomatologia/wybielanie-zebow',
    name: 'Wybielanie zębów',
    shortDesc: 'Profesjonalne wybielanie zębów w gabinecie.',
    parent: 'stomatologia-estetyczna',
  },
  {
    id: 'odbudowa-zebow',
    slug: 'stomatologia/odbudowa-zebow',
    name: 'Odbudowa zębów',
    shortDesc: 'Odbudowa i rekonstrukcja zębów z użyciem najnowszych materiałów.',
    parent: 'stomatologia-estetyczna',
  },
  {
    id: 'implanty-zebowe',
    slug: 'stomatologia/implanty-zebowe',
    name: 'Implanty zębowe',
    shortDesc: 'Implanty zębowe najwyższej jakości. Trwałe rozwiązanie braków zębowych.',
    parent: 'stomatologia',
  },
  {
    id: 'leczenie-bezzebia',
    slug: 'stomatologia/leczenie-bezzebia',
    name: 'Leczenie bezzębia',
    shortDesc: 'Kompleksowe leczenie bezzębia z zastosowaniem implantów i protez.',
    parent: 'stomatologia',
  },
  {
    id: 'licowki',
    slug: 'stomatologia/licowki',
    name: 'Licówki',
    shortDesc: 'Licówki porcelanowe i kompozytowe dla idealnego uśmiechu.',
    parent: 'stomatologia',
  },
  {
    id: 'bonding',
    slug: 'stomatologia/bonding',
    name: 'Bonding',
    shortDesc: 'Szybka korekta estetyczna zębów metodą bondingu kompozytowego.',
    parent: 'stomatologia',
  },
  {
    id: 'protetyka-korony',
    slug: 'stomatologia/protetyka-korony',
    name: 'Protetyka korony',
    shortDesc: 'Korony protetyczne - trwałe i estetyczne uzupełnienia protetyczne.',
    parent: 'stomatologia',
  },
  {
    id: 'higienizacja',
    slug: 'stomatologia/higienizacja',
    name: 'Higienizacja',
    shortDesc: 'Profesjonalna higienizacja jamy ustnej, skaling i piaskowanie.',
    parent: 'stomatologia',
  },
  {
    id: 'stomatologia-dziecieca',
    slug: 'stomatologia/dziecieca',
    name: 'Stomatologia dziecięca',
    shortDesc: 'Leczenie zębów mlecznych i stałych u dzieci w przyjaznej atmosferze.',
    parent: 'stomatologia',
  },
  {
    id: 'leczenie-zebow',
    slug: 'stomatologia/leczenie-zebow',
    name: 'Leczenie zębów',
    shortDesc: 'Leczenie próchnicy, kanałowe i zachowawcze leczenie zębów.',
    parent: 'stomatologia',
  },
  {
    id: 'ortodoncja',
    slug: 'stomatologia/ortodoncja',
    name: 'Ortodoncja',
    shortDesc: 'Prostowanie zębów aparatami stałymi, ruchomymi i alignerami.',
    parent: 'stomatologia',
    children: ['aparaty-stale', 'alignery', 'aparaty-ruchome'],
  },
  {
    id: 'aparaty-stale',
    slug: 'stomatologia/aparaty-stale',
    name: 'Aparaty stałe',
    shortDesc: 'Klasyczne i estetyczne aparaty stałe do korekcji zgryzu.',
    parent: 'ortodoncja',
  },
  {
    id: 'alignery',
    slug: 'stomatologia/alignery',
    name: 'Alignery',
    shortDesc: 'Niewidoczne nakładki ortodontyczne - komfortowa alternatywa.',
    parent: 'ortodoncja',
  },
  {
    id: 'aparaty-ruchome',
    slug: 'stomatologia/aparaty-ruchome',
    name: 'Aparaty ruchome',
    shortDesc: 'Aparaty ruchome dla dzieci i dorosłych.',
    parent: 'ortodoncja',
  },
  {
    id: 'chirurgia',
    slug: 'stomatologia/chirurgia',
    name: 'Chirurgia stomatologiczna',
    shortDesc: 'Zabiegi chirurgiczne w obrębie jamy ustnej.',
    parent: 'stomatologia',
    children: ['usuwanie-zebow'],
  },
  {
    id: 'usuwanie-zebow',
    slug: 'stomatologia/usuwanie-zebow',
    name: 'Usuwanie zębów',
    shortDesc: 'Bezbolesne usuwanie zębów, w tym zębów mądrości.',
    parent: 'chirurgia',
  },
];

export const AESTHETIC_SERVICES = [
  {
    id: 'btl-exion',
    slug: 'medycyna-estetyczna/btl-exion',
    name: 'BTL Exion',
    shortDesc: 'Nieinwazyjna technologia odmładzania i ujędrniania skóry.',
    bodyAreas: ['twarz', 'szyja'],
  },
  {
    id: 'redukcja-zmarszczek-botox',
    slug: 'medycyna-estetyczna/redukcja-zmarszczek-botox',
    name: 'Redukcja zmarszczek toksyną botulinową',
    shortDesc: 'Wygładzanie zmarszczek mimicznych toksyną botulinową.',
    bodyAreas: ['twarz', 'szyja'],
  },
  {
    id: 'wypelniacze-ha',
    slug: 'medycyna-estetyczna/wypelniacze-ha',
    name: 'Wypełniacze na bazie kwasu hialuronowego',
    shortDesc: 'Modelowanie i wypełnianie kwasem hialuronowym.',
    bodyAreas: ['twarz', 'oczy'],
  },
  {
    id: 'redukcja-zmarszczek-ha',
    slug: 'medycyna-estetyczna/redukcja-zmarszczek-ha',
    name: 'Redukcja zmarszczek kwasem hialuronowym',
    shortDesc: 'Wygładzanie zmarszczek z użyciem kwasu hialuronowego.',
    bodyAreas: ['twarz'],
  },
  {
    id: 'stymulatory-tkankowe',
    slug: 'medycyna-estetyczna/stymulatory-tkankowe',
    name: 'Stymulatory tkankowe',
    shortDesc: 'Biostymulacja skóry dla naturalnego odmłodzenia.',
    bodyAreas: ['twarz', 'oczy'],
  },
  {
    id: 'mezoterapia-iglowa',
    slug: 'medycyna-estetyczna/mezoterapia-iglowa',
    name: 'Mezoterapia igłowa',
    shortDesc: 'Odżywianie i regeneracja skóry metodą iniekcyjną.',
    bodyAreas: ['twarz', 'szyja', 'dekolt'],
  },
  {
    id: 'mezoterapia-mikroiglowa',
    slug: 'medycyna-estetyczna/mezoterapia-mikroiglowa',
    name: 'Mezoterapia mikroigłowa',
    shortDesc: 'Stymulacja produkcji kolagenu mikronakłuciami.',
    bodyAreas: ['twarz', 'dekolt'],
  },
  {
    id: 'pilingi-medyczne',
    slug: 'medycyna-estetyczna/pilingi-medyczne',
    name: 'Pilingi medyczne',
    shortDesc: 'Profesjonalne pilingi chemiczne dla odnowy skóry.',
    bodyAreas: ['twarz', 'szyja'],
  },
  {
    id: 'programy-zabiegowe',
    slug: 'medycyna-estetyczna/programy-zabiegowe',
    name: 'Programy zabiegowe',
    shortDesc: 'Intensywne odmładzanie i poprawa owalu twarzy.',
    bodyAreas: ['twarz'],
  },
  {
    id: 'regeneratory-komorkowe',
    slug: 'medycyna-estetyczna/regeneratory-komorkowe',
    name: 'Regeneratory komórkowe',
    shortDesc: 'Zaawansowana regeneracja komórkowa skóry.',
    bodyAreas: ['twarz'],
  },
  {
    id: 'terapia-egzosomami',
    slug: 'medycyna-estetyczna/terapia-egzosomami',
    name: 'Luksusowa terapia odmładzająca z egzosomami',
    shortDesc: 'Najnowsza technologia odmładzania z wykorzystaniem egzosomów.',
    bodyAreas: ['twarz'],
  },
  {
    id: 'redukcja-glebokich-zmarszczek',
    slug: 'medycyna-estetyczna/redukcja-glebokich-zmarszczek',
    name: 'Redukcja głębokich zmarszczek kwasem hialuronowym',
    shortDesc: 'Wypełnianie głębokich zmarszczek kwasem hialuronowym.',
    bodyAreas: ['oczy'],
  },
  {
    id: 'mezoterapia-okolicy-oka',
    slug: 'medycyna-estetyczna/mezoterapia-okolicy-oka',
    name: 'Mezoterapia okolicy oka',
    shortDesc: 'Specjalistyczna mezoterapia delikatnej okolicy oczu.',
    bodyAreas: ['oczy'],
  },
  {
    id: 'regeneracja-konturu-oka',
    slug: 'medycyna-estetyczna/regeneracja-konturu-oka',
    name: 'Regeneracja konturu oka',
    shortDesc: 'Odmłodzenie i regeneracja konturu oka.',
    bodyAreas: ['oczy'],
  },
  {
    id: 'redukcja-cieni',
    slug: 'medycyna-estetyczna/redukcja-cieni',
    name: 'Redukcja cieni pod oczami',
    shortDesc: 'Eliminacja cieni i woreczków pod oczami.',
    bodyAreas: ['oczy'],
  },
  {
    id: 'modelowanie-ust',
    slug: 'medycyna-estetyczna/modelowanie-ust',
    name: 'Modelowanie ust',
    shortDesc: 'Powiększanie i modelowanie ust kwasem hialuronowym.',
    bodyAreas: ['usta'],
  },
  {
    id: 'korekta-usmiechu-dziaslowego',
    slug: 'medycyna-estetyczna/korekta-usmiechu-dziaslowego',
    name: 'Korekta uśmiechu dziąsłowego',
    shortDesc: 'Leczenie gummy smile - estetyczna korekta dziąseł.',
    bodyAreas: ['usta'],
  },
  {
    id: 'redukcja-drobnych-zmarszczek-ha',
    slug: 'medycyna-estetyczna/redukcja-drobnych-zmarszczek-ha',
    name: 'Redukcja drobnych zmarszczek kwasem hialuronowym',
    shortDesc: 'Wygładzanie drobnych zmarszczek szyi i dekoltu.',
    bodyAreas: ['szyja', 'dekolt'],
  },
  {
    id: 'konturowanie-zuchwy',
    slug: 'medycyna-estetyczna/konturowanie-zuchwy',
    name: 'Konturowanie linii żuchwy i brody',
    shortDesc: 'Modelowanie i wyraziste konturowanie dolnej partii twarzy.',
    bodyAreas: ['szyja'],
  },
  {
    id: 'skin-booster',
    slug: 'medycyna-estetyczna/skin-booster',
    name: 'Mezoterapia głęboka (skin booster)',
    shortDesc: 'Głębokie nawilżenie i regeneracja skóry.',
    bodyAreas: ['dekolt'],
  },
  {
    id: 'mezoterapia-skory-glowy',
    slug: 'medycyna-estetyczna/mezoterapia-skory-glowy',
    name: 'Mezoterapia skóry głowy',
    shortDesc: 'Stymulacja wzrostu włosów i regeneracja skóry głowy.',
    bodyAreas: ['wlosy'],
  },
  {
    id: 'osocze-bogatoplytkowe',
    slug: 'medycyna-estetyczna/osocze-bogatoplytkowe',
    name: 'Osocze bogatopłytkowe',
    shortDesc: 'Terapia PRP - regeneracja z wykorzystaniem własnego osocza.',
    bodyAreas: ['wlosy'],
  },
  {
    id: 'przeszczep-wlosow',
    slug: 'medycyna-estetyczna/przeszczep-wlosow',
    name: 'Przeszczep włosów',
    shortDesc: 'Odtworzenie linii włosów i zagęszczenie owłosienia metodą przeszczepu.',
    bodyAreas: ['wlosy'],
  },
  {
    id: 'laserowe-usuwanie-blizn',
    slug: 'medycyna-estetyczna/laserowe-usuwanie-blizn',
    name: 'Laserowe usuwanie blizn i rozstępów',
    shortDesc: 'Laserowa redukcja blizn, rozstępów i niedoskonałości skóry.',
    bodyAreas: ['cialo'],
  },
  {
    id: 'leczenie-nadpotliwosci',
    slug: 'medycyna-estetyczna/leczenie-nadpotliwosci',
    name: 'Leczenie nadpotliwości toksyną botulinową',
    shortDesc: 'Skuteczne leczenie nadmiernego pocenia się.',
    bodyAreas: ['pachy'],
  },
];

// Klastry tematyczne grupy USG (kokon semantyczny) - uzywane na hubie /usg/
// do grupowania kart oraz do matriarchalnego linkowania wewnetrznego.
export const USG_CLUSTERS = [
  // Pierwszy klaster celowo: pozycja na początku mega-menu USG i hubu (decyzja właściciela).
  {
    slug: 'medycyna-estetyczna',
    name: 'USG w medycynie estetycznej',
    description: 'Ocena wypełniaczy kwasu hialuronowego i tkanek twarzy przed zabiegiem, po zabiegu i przy powikłaniach.',
  },
  {
    slug: 'glowa-szyja',
    name: 'Głowa i szyja',
    description: 'Badania USG tarczycy, ślinianek, węzłów chłonnych i tkanek miękkich szyi.',
  },
  {
    slug: 'jama-brzuszna',
    name: 'Jama brzuszna i układ moczowy',
    description: 'USG narządów jamy brzusznej, nerek oraz gruczołu krokowego.',
  },
  {
    slug: 'piersi-tkanki',
    name: 'Piersi i tkanki miękkie',
    description: 'USG piersi oraz zmian i struktur powierzchownych ciała.',
  },
  {
    slug: 'uroginekologia',
    name: 'Diagnostyka uroginekologiczna',
    description: 'USG ginekologiczne narządu rodnego oraz USG jąder i moszny.',
  },
  {
    slug: 'naczynia',
    name: 'Doppler naczyń',
    description: 'Badania dopplerowskie przepływu krwi w tętnicach i żyłach.',
  },
  {
    slug: 'klatka-piersiowa',
    name: 'Serce i klatka piersiowa',
    description: 'Echokardiografia (USG serca) oraz USG płuc i jamy opłucnej.',
  },
  {
    slug: 'narzad-ruchu',
    name: 'Narząd ruchu',
    description: 'USG stawów, ścięgien, więzadeł i mięśni.',
  },
];

// Grupa uslug USG (ultrasonografia). Hub (isLanding) + strony badan (Mixed).
// Pole `cluster` grupuje strone na hubie; `related` to linki Sister w obrebie kokonu.
export const USG_SERVICES = [
  {
    id: 'usg',
    slug: 'usg',
    name: 'USG',
    shortDesc: 'Pracownia ultrasonografii we Wrocławiu. Pełen zakres badań USG.',
    isLanding: true,
  },
  // --- Klaster: USG w medycynie estetycznej ---
  {
    id: 'usg-kontrola-wypelniaczy',
    slug: 'usg/kontrola-wypelniaczy',
    name: 'USG - kontrola wypełniaczy',
    shortDesc: 'Kontrola wypełniaczy HA po zabiegu: lokalizacja preparatu, guzki, obrzęki i mapowanie naczyń przed kolejną iniekcją.',
    cluster: 'medycyna-estetyczna',
    related: ['medycyna-estetyczna/wypelniacze-ha', 'usg/tkanki-miekkie', 'usg/wezly-chlonne', 'usg/slinianki'],
  },
  // --- Klaster: jama brzuszna i uklad moczowy ---
  {
    id: 'usg-jama-brzuszna',
    slug: 'usg/jama-brzuszna',
    name: 'USG jamy brzusznej',
    shortDesc: 'USG brzucha: ocena wątroby, trzustki, nerek, śledziony i pęcherzyka żółciowego.',
    cluster: 'jama-brzuszna',
    related: ['usg/watroba', 'usg/nerki', 'usg/prostata', 'usg/wezly-chlonne', 'usg/ginekologiczne'],
  },
  {
    id: 'usg-watroba',
    slug: 'usg/watroba',
    name: 'USG wątroby',
    shortDesc: 'Ocena wątroby: stłuszczenie, ogniskowe zmiany i drogi żółciowe.',
    cluster: 'jama-brzuszna',
    related: ['usg/jama-brzuszna', 'usg/nerki', 'usg/doppler'],
  },
  {
    id: 'usg-nerki',
    slug: 'usg/nerki',
    name: 'USG nerek',
    shortDesc: 'Ocena nerek i dróg moczowych: struktura, kamica i zastój moczu.',
    cluster: 'jama-brzuszna',
    related: ['usg/jama-brzuszna', 'usg/prostata', 'usg/doppler'],
  },
  {
    id: 'usg-prostata',
    slug: 'usg/prostata',
    name: 'USG prostaty',
    shortDesc: 'USG gruczołu krokowego przezbrzusznie: objętość stercza i zaleganie moczu.',
    cluster: 'jama-brzuszna',
    related: ['usg/jama-brzuszna', 'usg/nerki', 'usg/jadra'],
  },
  // --- Klaster: glowa i szyja ---
  {
    id: 'usg-tarczyca',
    slug: 'usg/tarczyca',
    name: 'USG tarczycy',
    shortDesc: 'Ocena guzków, struktury i objętości gruczołu tarczowego.',
    cluster: 'glowa-szyja',
    related: ['usg/szyja', 'usg/wezly-chlonne', 'usg/slinianki'],
  },
  {
    id: 'usg-szyja',
    slug: 'usg/szyja',
    name: 'USG szyi',
    shortDesc: 'Kompleksowa ocena tkanek miękkich szyi, węzłów chłonnych i ślinianek.',
    cluster: 'glowa-szyja',
    related: ['usg/tarczyca', 'usg/wezly-chlonne', 'usg/slinianki', 'usg/doppler-tetnice-szyjne'],
  },
  {
    id: 'usg-slinianki',
    slug: 'usg/slinianki',
    name: 'USG ślinianek',
    shortDesc: 'USG ślinianek przyusznych i podżuchwowych: kamica, stany zapalne, guzy.',
    cluster: 'glowa-szyja',
    related: ['usg/szyja', 'usg/tarczyca', 'usg/wezly-chlonne'],
  },
  {
    id: 'usg-wezly-chlonne',
    slug: 'usg/wezly-chlonne',
    name: 'USG węzłów chłonnych',
    shortDesc: 'Ocena powiększonych węzłów chłonnych szyi, pach i pachwin.',
    cluster: 'glowa-szyja',
    related: ['usg/szyja', 'usg/piersi', 'usg/tarczyca', 'usg/slinianki'],
  },
  // --- Klaster: piersi i tkanki miekkie ---
  {
    id: 'usg-piersi',
    slug: 'usg/piersi',
    name: 'USG piersi',
    shortDesc: 'USG gruczołów piersiowych i węzłów pachowych. Badanie bez promieniowania.',
    cluster: 'piersi-tkanki',
    related: ['usg/wezly-chlonne', 'usg/tkanki-miekkie', 'usg/ginekologiczne'],
  },
  {
    id: 'usg-tkanki-miekkie',
    slug: 'usg/tkanki-miekkie',
    name: 'USG tkanek miękkich',
    shortDesc: 'Ocena guzków podskórnych, mięśni, ścięgien i zmian powierzchownych.',
    cluster: 'piersi-tkanki',
    related: ['usg/wezly-chlonne', 'usg/stawy', 'usg/piersi'],
  },
  // --- Klaster: diagnostyka uroginekologiczna ---
  {
    id: 'usg-jadra',
    slug: 'usg/jadra',
    name: 'USG jąder',
    shortDesc: 'USG jąder i moszny z opcją Dopplera: guzki, ból, żylaki powrózka.',
    cluster: 'uroginekologia',
    related: ['usg/prostata', 'usg/wezly-chlonne', 'usg/tkanki-miekkie'],
  },
  {
    id: 'usg-ginekologiczne',
    slug: 'usg/ginekologiczne',
    name: 'USG ginekologiczne',
    shortDesc: 'USG narządu rodnego: macica i jajniki. Dostęp transwaginalny lub przezbrzuszny.',
    cluster: 'uroginekologia',
    related: ['usg/jama-brzuszna', 'usg/piersi', 'usg/nerki'],
  },
  // --- Klaster: Doppler naczyn (pod-hub naczyniowy) ---
  {
    id: 'usg-doppler',
    slug: 'usg/doppler',
    name: 'USG Doppler naczyń',
    shortDesc: 'Ocena przepływu krwi w tętnicach i żyłach metodą dopplerowską.',
    cluster: 'naczynia',
    related: ['usg/doppler-zyly-konczyn-dolnych', 'usg/doppler-tetnice-szyjne', 'usg/serce', 'usg/nerki'],
  },
  {
    id: 'usg-doppler-zyly-konczyn-dolnych',
    slug: 'usg/doppler-zyly-konczyn-dolnych',
    name: 'USG Doppler żył kończyn dolnych',
    shortDesc: 'Diagnostyka żylaków i podejrzenia zakrzepicy żył głębokich nóg.',
    cluster: 'naczynia',
    related: ['usg/doppler', 'usg/doppler-tetnice-szyjne'],
  },
  {
    id: 'usg-doppler-tetnice-szyjne',
    slug: 'usg/doppler-tetnice-szyjne',
    name: 'USG Doppler tętnic szyjnych',
    shortDesc: 'Ocena blaszek miażdżycowych i ryzyka udaru w tętnicach dogłowowych.',
    cluster: 'naczynia',
    related: ['usg/doppler', 'usg/szyja', 'usg/tarczyca'],
  },
  // --- Klaster: serce i klatka piersiowa ---
  {
    id: 'usg-serce',
    slug: 'usg/serce',
    name: 'USG serca',
    shortDesc: 'Echokardiografia: ocena kurczliwości, zastawek i frakcji wyrzutowej serca.',
    cluster: 'klatka-piersiowa',
    related: ['usg/pluca', 'usg/doppler', 'usg/doppler-tetnice-szyjne'],
  },
  {
    id: 'usg-pluca',
    slug: 'usg/pluca',
    name: 'USG płuc',
    shortDesc: 'Ocena płynu w jamie opłucnej i zmian zapalnych w obwodowych partiach płuc.',
    cluster: 'klatka-piersiowa',
    related: ['usg/serce', 'usg/jama-brzuszna'],
  },
  // --- Klaster: narzad ruchu ---
  {
    id: 'usg-stawy',
    slug: 'usg/stawy',
    name: 'USG stawów',
    shortDesc: 'USG narządu ruchu: kolano, bark, nadgarstek, ścięgna i więzadła.',
    cluster: 'narzad-ruchu',
    related: ['usg/staw-skokowy', 'usg/stopa', 'usg/tkanki-miekkie', 'usg/doppler'],
  },
  {
    id: 'usg-staw-skokowy',
    slug: 'usg/staw-skokowy',
    name: 'USG stawu skokowego',
    shortDesc: 'Ocena więzadeł, ścięgien i wysięku w stawie skokowym, także po skręceniu kostki.',
    cluster: 'narzad-ruchu',
    related: ['usg/stawy', 'usg/stopa', 'usg/tkanki-miekkie'],
  },
  {
    id: 'usg-stopa',
    slug: 'usg/stopa',
    name: 'USG stopy',
    shortDesc: 'Ocena rozcięgna podeszwowego, nerwiaka Mortona i ścięgien stopy.',
    cluster: 'narzad-ruchu',
    related: ['usg/stawy', 'usg/staw-skokowy', 'usg/tkanki-miekkie'],
  },
];

// ————————————————————————— Wlewy witaminowe i peptydy —————————————————————————
// Oferta przeniesiona z serwisu kroplowka-witaminowa.pl (ta sama grupa medyczna):
// 10 kroplówek w trzech wariantach (Standard / VIP / Exclusive). Klaster jest jeden
// (`kroplowki`), ale struktura zostaje taka jak w USG, żeby hub i menu były 1:1.
// Skład wariantów trzymamy tu (SSOT) — z niego rysują się tabela na stronie wlewu,
// karty na hubie /wlewy-witaminowe/ i cennik.

// Warianty wspólne dla wszystkich kroplówek: etykieta + cena w gabinecie. `description`
// i `icon` zasilają karty `PricingTiers` na hubie (`icon` to klucz z tamtejszych `ICONS`).
export const WLEWY_TIERS = [
  {
    id: 'standard',
    label: 'Standard',
    price: 500,
    icon: 'butelka',
    description:
      'Baza wlewu z jednym lub dwoma składnikami czynnymi. Punkt wyjścia dla większości pacjentów.',
  },
  {
    id: 'vip',
    label: 'VIP',
    price: 600,
    badge: 'najczęściej wybierany',
    icon: 'butelka-plus',
    description:
      'Skład Standardu rozszerzony o kolejny składnik, na przykład witaminę C, kompleks witamin B lub glukozę.',
  },
  {
    id: 'exclusive',
    label: 'Exclusive',
    price: 800,
    icon: 'butelki',
    description:
      'Najszersza receptura: zwykle druga butelka z glutationem (TAD 600) albo zmieniony zestaw składników.',
  },
];

export const WLEWY_CLUSTERS = [
  {
    slug: 'kroplowki',
    name: 'Kroplówki witaminowe',
    description:
      'Wlewy dożylne witamin, elektrolitów i antyoksydantów w trzech wariantach składu. Skład dobiera lekarz po kwalifikacji.',
  },
];

// Hub (isLanding) + strony kroplówek (cluster `kroplowki`, z `variants`). `related` to
// linki „Powiązane zabiegi" w obrębie kokonu (jak w USG); mogą wskazywać też peptydy.
// `icon` to klucz z `ICONS` w `OfferCards` (karta kroplówki na hubie).
export const WLEWY_SERVICES = [
  {
    id: 'wlewy-witaminowe',
    slug: 'wlewy-witaminowe',
    name: 'Wlewy witaminowe',
    shortDesc: 'Kroplówki witaminowe i terapie peptydowe we Wrocławiu.',
    isLanding: true,
  },
  // --- Klaster: kroplówki witaminowe ---
  {
    id: 'wlewy-witaminowa-bomba',
    slug: 'wlewy-witaminowe/witaminowa-bomba',
    name: 'Kroplówka Witaminowa bomba',
    shortDesc:
      'Kompleks witamin B i witamina C we wlewie wspierającym odporność i regenerację po infekcji.',
    cluster: 'kroplowki',
    duration: '60 min',
    icon: 'witaminy',
    variants: [
      { tier: 'standard', composition: ['NaCl 0,9% 500 ml (baza)', 'Kompleks witamin B (B1, B6, B12)'] },
      { tier: 'vip', composition: ['NaCl 0,9% 500 ml (baza)', 'Witamina C', 'Kompleks witamin B (B1, B6, B12)'] },
      { tier: 'exclusive', composition: ['NaCl 0,9% 500 ml (baza)', 'Witamina C', 'Cernevit (kompleks multiwitaminowy)'] },
    ],
    related: [
      'wlewy-witaminowe/kroplowka-na-odpornosc',
      'wlewy-witaminowe/kroplowka-sport-i-regeneracja',
      'wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres',
      'wlewy-witaminowe/kroplowka-anti-age',
    ],
  },
  {
    id: 'wlewy-sport-i-regeneracja',
    slug: 'wlewy-witaminowe/kroplowka-sport-i-regeneracja',
    name: 'Kroplówka Sport i regeneracja',
    shortDesc:
      'Elektrolity, magnez i witaminy B dla osób aktywnych: regeneracja po treningu i uzupełnienie strat z potem.',
    cluster: 'kroplowki',
    duration: '60 min',
    icon: 'sport',
    variants: [
      { tier: 'standard', composition: ['Optylite 500 ml (baza)', 'Magnez'] },
      { tier: 'vip', composition: ['Optylite 500 ml (baza)', 'Magnez', 'Kompleks witamin B (B1, B6, B12)'] },
      { tier: 'exclusive', composition: ['Optylite 500 ml (baza)', 'Magnez', 'Kompleks witamin B (B1, B6, B12)', 'Druga butelka: NaCl 100-250 ml + TAD 600 (glutation)'] },
    ],
    related: [
      'wlewy-witaminowe/witaminowa-bomba',
      'wlewy-witaminowe/kroplowka-na-odpornosc',
      'wlewy-witaminowe/kroplowka-nawodnienie',
      'wlewy-witaminowe/kroplowka-energetyczna',
    ],
  },
  {
    id: 'wlewy-na-odpornosc',
    slug: 'wlewy-witaminowe/kroplowka-na-odpornosc',
    name: 'Kroplówka na odporność',
    shortDesc:
      'Witamina C, magnez i elektrolity w sezonie infekcyjnym oraz w rekonwalescencji po chorobie.',
    cluster: 'kroplowki',
    duration: '90 min',
    icon: 'odpornosc',
    variants: [
      { tier: 'standard', composition: ['Optylite 500 ml (baza)', 'Magnez', 'Witamina C'] },
      { tier: 'vip', composition: ['Optylite 500 ml (baza)', 'Magnez', 'Witamina C (3 amp.)'] },
      { tier: 'exclusive', composition: ['Optylite 500 ml (baza)', 'Magnez', 'Witamina C (3 amp.)', 'Druga butelka: NaCl 100-250 ml + TAD 600 (glutation)'] },
    ],
    related: [
      'wlewy-witaminowe/witaminowa-bomba',
      'wlewy-witaminowe/kroplowka-sport-i-regeneracja',
      'wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres',
      'wlewy-witaminowe/kroplowka-detox-watroby',
    ],
  },
  {
    id: 'wlewy-na-zmeczenie-i-stres',
    slug: 'wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres',
    name: 'Kroplówka na zmęczenie i stres',
    shortDesc:
      'Magnez, glutation i glukoza dla osób przemęczonych i przeciążonych pracą; wsparcie koncentracji.',
    cluster: 'kroplowki',
    duration: '90 min',
    icon: 'regeneracja',
    variants: [
      { tier: 'standard', composition: ['Optylite 500 ml (baza)', 'Magnez', 'Witamina B12'] },
      { tier: 'vip', composition: ['Optylite 500 ml (baza)', 'TAD 600 (glutation)', 'Glukoza 250 ml', 'Magnez'] },
      { tier: 'exclusive', composition: ['Optylite 500 ml (baza)', 'TAD 600 (glutation)', 'Glukoza 250 ml', 'Magnez', 'Druga butelka: NaCl 250 ml', 'Witamina C'] },
    ],
    related: [
      'wlewy-witaminowe/witaminowa-bomba',
      'wlewy-witaminowe/kroplowka-na-odpornosc',
      'wlewy-witaminowe/kroplowka-energetyczna',
      'wlewy-witaminowe/kroplowka-na-libido',
    ],
  },
  {
    id: 'wlewy-anti-age',
    slug: 'wlewy-witaminowe/kroplowka-anti-age',
    name: 'Kroplówka Anti-age',
    shortDesc:
      'Witamina C i B12 wspierające syntezę kolagenu oraz kondycję skóry, włosów i paznokci.',
    cluster: 'kroplowki',
    duration: '60 min',
    icon: 'anti-age',
    variants: [
      { tier: 'standard', composition: ['NaCl 0,9% 500 ml (baza)', 'Witamina C', 'Witamina B12'] },
      { tier: 'vip', composition: ['NaCl 0,9% 500 ml (baza)', 'Magnez', 'Witamina C', 'Witamina B12'] },
      { tier: 'exclusive', composition: ['NaCl 0,9% 500 ml (baza)', 'Witamina C', 'Witamina B12', 'Natrium Bicarbonicum', 'Magnez'] },
    ],
    related: [
      'wlewy-witaminowe/witaminowa-bomba',
      'terapie-peptydowe/ghk-cu',
      'wlewy-witaminowe/kroplowka-na-odpornosc',
      'wlewy-witaminowe/kroplowka-na-libido',
    ],
  },
  {
    id: 'wlewy-after-party',
    slug: 'wlewy-witaminowe/kroplowka-after-party',
    name: 'Kroplówka After party',
    shortDesc:
      'Nawodnienie, glukoza i buforowanie kwasicy po nadmiernym spożyciu alkoholu; ulga w objawach kaca.',
    cluster: 'kroplowki',
    duration: '90 min',
    icon: 'after-party',
    variants: [
      { tier: 'standard', composition: ['Glukoza 500 ml (baza)', 'Natrium Bicarbonicum'] },
      { tier: 'vip', composition: ['Glukoza 500 ml (baza)', 'Natrium Bicarbonicum', 'Druga butelka: NaCl 250 ml', 'Magnez'] },
      { tier: 'exclusive', composition: ['Glukoza 500 ml (baza)', 'Natrium Bicarbonicum', 'Druga butelka: NaCl 250 ml', 'Magnez', 'Witamina C'] },
    ],
    related: [
      'wlewy-witaminowe/kroplowka-detox-watroby',
      'wlewy-witaminowe/kroplowka-nawodnienie',
      'wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres',
      'wlewy-witaminowe/witaminowa-bomba',
    ],
  },
  {
    id: 'wlewy-na-libido',
    slug: 'wlewy-witaminowe/kroplowka-na-libido',
    name: 'Kroplówka na libido',
    shortDesc:
      'Elektrolity, magnez i koenzym Q10 jako wsparcie witalności i wytrzymałości; bez hormonów.',
    cluster: 'kroplowki',
    duration: '60 min',
    icon: 'libido',
    variants: [
      { tier: 'standard', composition: ['Optylite 500 ml (baza)', 'Magnez'] },
      { tier: 'vip', composition: ['Optylite 500 ml (baza)', 'Magnez', 'Kompleks witamin B (B1, B6, B12)'] },
      { tier: 'exclusive', composition: ['Optylite 500 ml (baza)', 'Magnez', 'Koenzym Q10 (ubichinon)'] },
    ],
    related: [
      'wlewy-witaminowe/kroplowka-energetyczna',
      'wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres',
      'wlewy-witaminowe/kroplowka-sport-i-regeneracja',
      'terapie-peptydowe/peptydy-osi-gh',
    ],
  },
  {
    id: 'wlewy-detox-watroby',
    slug: 'wlewy-witaminowe/kroplowka-detox-watroby',
    name: 'Kroplówka Detox wątroby',
    shortDesc:
      'L-ornityna L-asparaginian (Hepa-Merz) i elektrolity jako wsparcie wątroby po lekach lub alkoholu.',
    cluster: 'kroplowki',
    duration: '60 min',
    icon: 'detox',
    variants: [
      { tier: 'standard', composition: ['NaCl 0,9% 500 ml (baza)', 'Hepa-Merz (L-ornityna L-asparaginian)'] },
      { tier: 'vip', composition: ['NaCl 0,9% 500 ml (baza)', 'Hepa-Merz (L-ornityna L-asparaginian)', 'Druga butelka: Optylite 500 ml', 'Natrium Bicarbonicum'] },
      { tier: 'exclusive', composition: ['NaCl 0,9% 500 ml (baza)', 'Hepa-Merz (L-ornityna L-asparaginian)', 'Druga butelka: Optylite 500 ml', 'Natrium Bicarbonicum', 'Magnez'] },
    ],
    related: [
      'wlewy-witaminowe/kroplowka-after-party',
      'wlewy-witaminowe/kroplowka-nawodnienie',
      'wlewy-witaminowe/kroplowka-na-odpornosc',
      'wlewy-witaminowe/witaminowa-bomba',
    ],
  },
  {
    id: 'wlewy-nawodnienie',
    slug: 'wlewy-witaminowe/kroplowka-nawodnienie',
    name: 'Kroplówka nawadniająca',
    shortDesc:
      'Szybkie uzupełnienie płynów i elektrolitów po wysiłku, upale i infekcji z gorączką.',
    cluster: 'kroplowki',
    duration: '60 min',
    icon: 'nawodnienie',
    variants: [
      { tier: 'standard', composition: ['Optylite 500 ml (baza)'] },
      { tier: 'vip', composition: ['Optylite 500 ml (baza)', 'Witamina B12', 'Magnez'] },
      { tier: 'exclusive', composition: ['Optylite 500 ml (baza)', 'Kompleks witamin B (B1, B6, B12)', 'Magnez', 'Druga butelka: NaCl 250 ml + TAD 600 (glutation)'] },
    ],
    related: [
      'wlewy-witaminowe/kroplowka-sport-i-regeneracja',
      'wlewy-witaminowe/kroplowka-after-party',
      'wlewy-witaminowe/kroplowka-energetyczna',
      'wlewy-witaminowe/kroplowka-na-odpornosc',
    ],
  },
  {
    id: 'wlewy-energetyczna',
    slug: 'wlewy-witaminowe/kroplowka-energetyczna',
    name: 'Kroplówka energetyczna',
    shortDesc:
      'Magnez i witaminy B wspierające metabolizm energetyczny w okresach wzmożonego wysiłku.',
    cluster: 'kroplowki',
    duration: '60 min',
    icon: 'energia',
    variants: [
      { tier: 'standard', composition: ['Optylite 500 ml (baza)', 'Magnez'] },
      { tier: 'vip', composition: ['Optylite 500 ml (baza)', 'Magnez', 'Kompleks witamin B (B1, B6, B12)'] },
      { tier: 'exclusive', composition: ['Optylite 500 ml (baza)', 'Magnez', 'Kompleks witamin B (B1, B6, B12)', 'Druga butelka: NaCl 100-250 ml + TAD 600 (glutation)'] },
    ],
    related: [
      'wlewy-witaminowe/kroplowka-na-zmeczenie-i-stres',
      'wlewy-witaminowe/witaminowa-bomba',
      'wlewy-witaminowe/kroplowka-sport-i-regeneracja',
      'wlewy-witaminowe/kroplowka-nawodnienie',
    ],
  },
];

// ————————————————————————— Terapie peptydowe —————————————————————————
// Osobny hub /terapie-peptydowe/ (peptydy to głównie iniekcje podskórne, nie wlewy;
// inna intencja wyszukiwania). Bez `variants` i ceny - wycena po konsultacji.
// Żaden z peptydów nie jest zarejestrowanym lekiem; treść stron musi podawać
// status prawny (WADA) i stan dowodów.
export const PEPTYDY_SERVICES = [
  {
    id: 'terapie-peptydowe',
    slug: 'terapie-peptydowe',
    name: 'Terapie peptydowe',
    shortDesc: 'GHK-Cu, BPC-157 i peptydy osi GH po konsultacji lekarskiej we Wrocławiu.',
    isLanding: true,
  },
  {
    id: 'wlewy-ghk-cu',
    slug: 'terapie-peptydowe/ghk-cu',
    name: 'Peptyd GHK-Cu',
    shortDesc:
      'Peptyd miedziowy stosowany w terapiach regeneracyjnych skóry; droga podania i kwalifikacja po konsultacji lekarskiej.',
    related: [
      'terapie-peptydowe/bpc-157',
      'terapie-peptydowe/peptydy-osi-gh',
      'wlewy-witaminowe/kroplowka-anti-age',
      'medycyna-estetyczna/mezoterapia-iglowa',
    ],
  },
  {
    id: 'wlewy-bpc-157',
    slug: 'terapie-peptydowe/bpc-157',
    name: 'Peptyd BPC-157',
    shortDesc:
      'Syntetyczny peptyd badany pod kątem regeneracji tkanek; substancja eksperymentalna, decyzja po konsultacji lekarskiej.',
    related: [
      'terapie-peptydowe/ghk-cu',
      'terapie-peptydowe/peptydy-osi-gh',
      'wlewy-witaminowe/kroplowka-sport-i-regeneracja',
    ],
  },
  {
    id: 'wlewy-peptydy-osi-gh',
    slug: 'terapie-peptydowe/peptydy-osi-gh',
    name: 'Peptydy osi GH',
    shortDesc:
      'Sekretagogi hormonu wzrostu (sermorelina, CJC-1295, ipamorelin, tesamorelina); kwalifikacja lekarska i omówienie statusu prawnego.',
    related: [
      'terapie-peptydowe/bpc-157',
      'terapie-peptydowe/ghk-cu',
      'wlewy-witaminowe/kroplowka-energetyczna',
      'wlewy-witaminowe/kroplowka-na-libido',
    ],
  },
];

export function getServiceBySlug(slug) {
  return (
    STOMATOLOGIA_SERVICES.find((s) => s.slug === slug) ||
    AESTHETIC_SERVICES.find((s) => s.slug === slug) ||
    USG_SERVICES.find((s) => s.slug === slug) ||
    WLEWY_SERVICES.find((s) => s.slug === slug) ||
    PEPTYDY_SERVICES.find((s) => s.slug === slug)
  );
}

export function getWlewyServicesByCluster(clusterSlug) {
  return WLEWY_SERVICES.filter((s) => s.cluster === clusterSlug);
}

// Kroplówki z wariantami (bez huba) — cennik, ItemList, karty z ceną „od".
export function getWlewyDrips() {
  return WLEWY_SERVICES.filter((s) => s.variants);
}

// Cena „od" kroplówki = cena wariantu Standard (pierwszy tier). Sklejanie wyższych
// wariantów w jedną cenę obiecywałoby składniki dostępne dopiero w VIP/Exclusive.
export function getWlewyPriceFrom() {
  return WLEWY_TIERS[0].price;
}

// Strony peptydów (bez huba) — hub, menu, cennik, ItemList.
export function getPeptydy() {
  return PEPTYDY_SERVICES.filter((s) => !s.isLanding);
}

export function getUsgServicesByCluster(clusterSlug) {
  return USG_SERVICES.filter((s) => s.cluster === clusterSlug);
}

export function getUsgExams() {
  return USG_SERVICES.filter((s) => !s.isLanding);
}

export function getTopLevelStomatologiaServices() {
  return STOMATOLOGIA_SERVICES.filter(
    (s) => s.parent === 'stomatologia' || s.isLanding
  );
}

export function getAestheticServicesByArea(areaSlug) {
  return AESTHETIC_SERVICES.filter((s) => s.bodyAreas?.includes(areaSlug));
}
