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
    slug: 'stomatologia-estetyczna',
    name: 'Stomatologia estetyczna',
    shortDesc: 'Piękny uśmiech dzięki nowoczesnym zabiegom estetycznym.',
    parent: 'stomatologia',
    children: ['wybielanie-zebow', 'odbudowa-zebow'],
  },
  {
    id: 'wybielanie-zebow',
    slug: 'stomatologia-estetyczna/wybielanie-zebow',
    name: 'Wybielanie zębów',
    shortDesc: 'Profesjonalne wybielanie zębów w gabinecie.',
    parent: 'stomatologia-estetyczna',
  },
  {
    id: 'odbudowa-zebow',
    slug: 'stomatologia-estetyczna/odbudowa-zebow',
    name: 'Odbudowa zębów',
    shortDesc: 'Odbudowa i rekonstrukcja zębów z użyciem najnowszych materiałów.',
    parent: 'stomatologia-estetyczna',
  },
  {
    id: 'implanty-zebowe',
    slug: 'implanty-zebowe',
    name: 'Implanty zębowe',
    shortDesc: 'Implanty zębowe najwyższej jakości. Trwałe rozwiązanie braków zębowych.',
    parent: 'stomatologia',
  },
  {
    id: 'leczenie-bezzebia',
    slug: 'leczenie-bezzebia',
    name: 'Leczenie bezzębia',
    shortDesc: 'Kompleksowe leczenie bezzębia z zastosowaniem implantów i protez.',
    parent: 'stomatologia',
  },
  {
    id: 'licowki',
    slug: 'licowki',
    name: 'Licówki',
    shortDesc: 'Licówki porcelanowe i kompozytowe dla idealnego uśmiechu.',
    parent: 'stomatologia',
  },
  {
    id: 'bonding',
    slug: 'bonding',
    name: 'Bonding',
    shortDesc: 'Szybka korekta estetyczna zębów metodą bondingu kompozytowego.',
    parent: 'stomatologia',
  },
  {
    id: 'protetyka-korony',
    slug: 'protetyka-korony',
    name: 'Protetyka korony',
    shortDesc: 'Korony protetyczne - trwałe i estetyczne uzupełnienia protetyczne.',
    parent: 'stomatologia',
  },
  {
    id: 'higienizacja',
    slug: 'higienizacja',
    name: 'Higienizacja',
    shortDesc: 'Profesjonalna higienizacja jamy ustnej, skaling i piaskowanie.',
    parent: 'stomatologia',
  },
  {
    id: 'stomatologia-dziecieca',
    slug: 'stomatologia-dziecieca',
    name: 'Stomatologia dziecięca',
    shortDesc: 'Leczenie zębów mlecznych i stałych u dzieci w przyjaznej atmosferze.',
    parent: 'stomatologia',
  },
  {
    id: 'leczenie-zebow',
    slug: 'leczenie-zebow',
    name: 'Leczenie zębów',
    shortDesc: 'Leczenie próchnicy, kanałowe i zachowawcze leczenie zębów.',
    parent: 'stomatologia',
  },
  {
    id: 'ortodoncja',
    slug: 'ortodoncja',
    name: 'Ortodoncja',
    shortDesc: 'Prostowanie zębów aparatami stałymi, ruchomymi i alignerami.',
    parent: 'stomatologia',
    children: ['aparaty-stale', 'alignery', 'aparaty-ruchome'],
  },
  {
    id: 'aparaty-stale',
    slug: 'ortodoncja/aparaty-stale',
    name: 'Aparaty stałe',
    shortDesc: 'Klasyczne i estetyczne aparaty stałe do korekcji zgryzu.',
    parent: 'ortodoncja',
  },
  {
    id: 'alignery',
    slug: 'ortodoncja/alignery',
    name: 'Alignery',
    shortDesc: 'Niewidoczne nakładki ortodontyczne - komfortowa alternatywa.',
    parent: 'ortodoncja',
  },
  {
    id: 'aparaty-ruchome',
    slug: 'ortodoncja/aparaty-ruchome',
    name: 'Aparaty ruchome',
    shortDesc: 'Aparaty ruchome dla dzieci i dorosłych.',
    parent: 'ortodoncja',
  },
  {
    id: 'chirurgia',
    slug: 'chirurgia',
    name: 'Chirurgia stomatologiczna',
    shortDesc: 'Zabiegi chirurgiczne w obrębie jamy ustnej.',
    parent: 'stomatologia',
    children: ['usuwanie-zebow'],
  },
  {
    id: 'usuwanie-zebow',
    slug: 'chirurgia/usuwanie-zebow',
    name: 'Usuwanie zębów',
    shortDesc: 'Bezbolesne usuwanie zębów, w tym zębów mądrości.',
    parent: 'chirurgia',
  },
];

export const AESTHETIC_SERVICES = [
  {
    id: 'btl-exion',
    slug: 'btl-exion',
    name: 'BTL Exion',
    shortDesc: 'Nieinwazyjna technologia odmładzania i ujędrniania skóry.',
    bodyAreas: ['twarz', 'szyja'],
  },
  {
    id: 'redukcja-zmarszczek-botox',
    slug: 'redukcja-zmarszczek-botox',
    name: 'Redukcja zmarszczek toksyną botulinową',
    shortDesc: 'Wygładzanie zmarszczek mimicznych toksyną botulinową.',
    bodyAreas: ['twarz', 'szyja'],
  },
  {
    id: 'wypelniacze-ha',
    slug: 'wypelniacze-ha',
    name: 'Wypełniacze na bazie kwasu hialuronowego',
    shortDesc: 'Modelowanie i wypełnianie kwasem hialuronowym.',
    bodyAreas: ['twarz', 'oczy'],
  },
  {
    id: 'redukcja-zmarszczek-ha',
    slug: 'redukcja-zmarszczek-ha',
    name: 'Redukcja zmarszczek kwasem hialuronowym',
    shortDesc: 'Wygładzanie zmarszczek z użyciem kwasu hialuronowego.',
    bodyAreas: ['twarz'],
  },
  {
    id: 'stymulatory-tkankowe',
    slug: 'stymulatory-tkankowe',
    name: 'Stymulatory tkankowe',
    shortDesc: 'Biostymulacja skóry dla naturalnego odmłodzenia.',
    bodyAreas: ['twarz', 'oczy'],
  },
  {
    id: 'mezoterapia-iglowa',
    slug: 'mezoterapia-iglowa',
    name: 'Mezoterapia igłowa',
    shortDesc: 'Odżywianie i regeneracja skóry metodą iniekcyjną.',
    bodyAreas: ['twarz', 'szyja', 'dekolt'],
  },
  {
    id: 'mezoterapia-mikroiglowa',
    slug: 'mezoterapia-mikroiglowa',
    name: 'Mezoterapia mikroigłowa',
    shortDesc: 'Stymulacja produkcji kolagenu mikronakłuciami.',
    bodyAreas: ['twarz', 'dekolt'],
  },
  {
    id: 'pilingi-medyczne',
    slug: 'pilingi-medyczne',
    name: 'Pilingi medyczne',
    shortDesc: 'Profesjonalne pilingi chemiczne dla odnowy skóry.',
    bodyAreas: ['twarz', 'szyja'],
  },
  {
    id: 'programy-zabiegowe',
    slug: 'programy-zabiegowe',
    name: 'Programy zabiegowe',
    shortDesc: 'Intensywne odmładzanie i poprawa owalu twarzy.',
    bodyAreas: ['twarz'],
  },
  {
    id: 'regeneratory-komorkowe',
    slug: 'regeneratory-komorkowe',
    name: 'Regeneratory komórkowe',
    shortDesc: 'Zaawansowana regeneracja komórkowa skóry.',
    bodyAreas: ['twarz'],
  },
  {
    id: 'terapia-egzosomami',
    slug: 'terapia-egzosomami',
    name: 'Luksusowa terapia odmładzająca z egzosomami',
    shortDesc: 'Najnowsza technologia odmładzania z wykorzystaniem egzosomów.',
    bodyAreas: ['twarz'],
  },
  {
    id: 'redukcja-glebokich-zmarszczek',
    slug: 'redukcja-glebokich-zmarszczek',
    name: 'Redukcja głębokich zmarszczek kwasem hialuronowym',
    shortDesc: 'Wypełnianie głębokich zmarszczek kwasem hialuronowym.',
    bodyAreas: ['oczy'],
  },
  {
    id: 'mezoterapia-okolicy-oka',
    slug: 'mezoterapia-okolicy-oka',
    name: 'Mezoterapia okolicy oka',
    shortDesc: 'Specjalistyczna mezoterapia delikatnej okolicy oczu.',
    bodyAreas: ['oczy'],
  },
  {
    id: 'regeneracja-konturu-oka',
    slug: 'regeneracja-konturu-oka',
    name: 'Regeneracja konturu oka',
    shortDesc: 'Odmłodzenie i regeneracja konturu oka.',
    bodyAreas: ['oczy'],
  },
  {
    id: 'redukcja-cieni',
    slug: 'redukcja-cieni',
    name: 'Redukcja cieni pod oczami',
    shortDesc: 'Eliminacja cieni i woreczków pod oczami.',
    bodyAreas: ['oczy'],
  },
  {
    id: 'blefaroplastyka',
    slug: 'blefaroplastyka',
    name: 'Blefaroplastyka górna i dolna',
    shortDesc: 'Plastyka powiek — korekta nadmiaru skóry powiek górnych i dolnych.',
    bodyAreas: ['oczy'],
  },
  {
    id: 'modelowanie-ust',
    slug: 'modelowanie-ust',
    name: 'Modelowanie ust',
    shortDesc: 'Powiększanie i modelowanie ust kwasem hialuronowym.',
    bodyAreas: ['usta'],
  },
  {
    id: 'korekta-usmiechu-dziaslowego',
    slug: 'korekta-usmiechu-dziaslowego',
    name: 'Korekta uśmiechu dziąsłowego',
    shortDesc: 'Leczenie gummy smile - estetyczna korekta dziąseł.',
    bodyAreas: ['usta'],
  },
  {
    id: 'redukcja-drobnych-zmarszczek-ha',
    slug: 'redukcja-drobnych-zmarszczek-ha',
    name: 'Redukcja drobnych zmarszczek kwasem hialuronowym',
    shortDesc: 'Wygładzanie drobnych zmarszczek szyi i dekoltu.',
    bodyAreas: ['szyja', 'dekolt'],
  },
  {
    id: 'konturowanie-zuchwy',
    slug: 'konturowanie-zuchwy',
    name: 'Konturowanie linii żuchwy i brody',
    shortDesc: 'Modelowanie i wyraziste konturowanie dolnej partii twarzy.',
    bodyAreas: ['szyja'],
  },
  {
    id: 'skin-booster',
    slug: 'skin-booster',
    name: 'Mezoterapia głęboka (skin booster)',
    shortDesc: 'Głębokie nawilżenie i regeneracja skóry.',
    bodyAreas: ['dekolt'],
  },
  {
    id: 'mezoterapia-skory-glowy',
    slug: 'mezoterapia-skory-glowy',
    name: 'Mezoterapia skóry głowy',
    shortDesc: 'Stymulacja wzrostu włosów i regeneracja skóry głowy.',
    bodyAreas: ['wlosy'],
  },
  {
    id: 'osocze-bogatoplytkowe',
    slug: 'osocze-bogatoplytkowe',
    name: 'Osocze bogatopłytkowe',
    shortDesc: 'Terapia PRP - regeneracja z wykorzystaniem własnego osocza.',
    bodyAreas: ['wlosy'],
  },
  {
    id: 'przeszczep-wlosow',
    slug: 'przeszczep-wlosow',
    name: 'Przeszczep włosów',
    shortDesc: 'Odtworzenie linii włosów i zagęszczenie owłosienia metodą przeszczepu.',
    bodyAreas: ['wlosy'],
  },
  {
    id: 'laserowe-usuwanie-blizn',
    slug: 'laserowe-usuwanie-blizn',
    name: 'Laserowe usuwanie blizn i rozstępów',
    shortDesc: 'Laserowa redukcja blizn, rozstępów i niedoskonałości skóry.',
    bodyAreas: ['cialo'],
  },
  {
    id: 'leczenie-nadpotliwosci',
    slug: 'leczenie-nadpotliwosci',
    name: 'Leczenie nadpotliwości toksyną botulinową',
    shortDesc: 'Skuteczne leczenie nadmiernego pocenia się.',
    bodyAreas: ['pachy'],
  },
];

// Klastry tematyczne grupy USG (kokon semantyczny) - uzywane na hubie /usg/
// do grupowania kart oraz do matriarchalnego linkowania wewnetrznego.
export const USG_CLUSTERS = [
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
  // --- Klaster: jama brzuszna i uklad moczowy ---
  {
    id: 'usg-jamy-brzusznej',
    slug: 'usg/jamy-brzusznej',
    name: 'USG jamy brzusznej',
    shortDesc: 'USG brzucha: ocena wątroby, trzustki, nerek, śledziony i pęcherzyka żółciowego.',
    cluster: 'jama-brzuszna',
    related: ['usg/watroby', 'usg/nerek', 'usg/prostaty', 'usg/wezlow-chlonnych', 'usg/ginekologiczne'],
  },
  {
    id: 'usg-watroby',
    slug: 'usg/watroby',
    name: 'USG wątroby',
    shortDesc: 'Ocena wątroby: stłuszczenie, ogniskowe zmiany i drogi żółciowe.',
    cluster: 'jama-brzuszna',
    related: ['usg/jamy-brzusznej', 'usg/nerek', 'usg/doppler'],
  },
  {
    id: 'usg-nerek',
    slug: 'usg/nerek',
    name: 'USG nerek',
    shortDesc: 'Ocena nerek i dróg moczowych: struktura, kamica i zastój moczu.',
    cluster: 'jama-brzuszna',
    related: ['usg/jamy-brzusznej', 'usg/prostaty', 'usg/doppler'],
  },
  {
    id: 'usg-prostaty',
    slug: 'usg/prostaty',
    name: 'USG prostaty',
    shortDesc: 'USG gruczołu krokowego przezbrzusznie: objętość stercza i zaleganie moczu.',
    cluster: 'jama-brzuszna',
    related: ['usg/jamy-brzusznej', 'usg/nerek', 'usg/jader'],
  },
  // --- Klaster: glowa i szyja ---
  {
    id: 'usg-tarczycy',
    slug: 'usg/tarczycy',
    name: 'USG tarczycy',
    shortDesc: 'Ocena guzków, struktury i objętości gruczołu tarczowego.',
    cluster: 'glowa-szyja',
    related: ['usg/szyi', 'usg/wezlow-chlonnych', 'usg/slinianek'],
  },
  {
    id: 'usg-szyi',
    slug: 'usg/szyi',
    name: 'USG szyi',
    shortDesc: 'Kompleksowa ocena tkanek miękkich szyi, węzłów chłonnych i ślinianek.',
    cluster: 'glowa-szyja',
    related: ['usg/tarczycy', 'usg/wezlow-chlonnych', 'usg/slinianek', 'usg/doppler-tetnic-szyjnych'],
  },
  {
    id: 'usg-slinianek',
    slug: 'usg/slinianek',
    name: 'USG ślinianek',
    shortDesc: 'USG ślinianek przyusznych i podżuchwowych: kamica, stany zapalne, guzy.',
    cluster: 'glowa-szyja',
    related: ['usg/szyi', 'usg/tarczycy', 'usg/wezlow-chlonnych'],
  },
  {
    id: 'usg-wezlow-chlonnych',
    slug: 'usg/wezlow-chlonnych',
    name: 'USG węzłów chłonnych',
    shortDesc: 'Ocena powiększonych węzłów chłonnych szyi, pach i pachwin.',
    cluster: 'glowa-szyja',
    related: ['usg/szyi', 'usg/piersi', 'usg/tarczycy', 'usg/slinianek'],
  },
  // --- Klaster: piersi i tkanki miekkie ---
  {
    id: 'usg-piersi',
    slug: 'usg/piersi',
    name: 'USG piersi',
    shortDesc: 'USG gruczołów piersiowych i węzłów pachowych. Badanie bez promieniowania.',
    cluster: 'piersi-tkanki',
    related: ['usg/wezlow-chlonnych', 'usg/tkanek-miekkich', 'usg/ginekologiczne'],
  },
  {
    id: 'usg-tkanek-miekkich',
    slug: 'usg/tkanek-miekkich',
    name: 'USG tkanek miękkich',
    shortDesc: 'Ocena guzków podskórnych, mięśni, ścięgien i zmian powierzchownych.',
    cluster: 'piersi-tkanki',
    related: ['usg/wezlow-chlonnych', 'usg/stawow', 'usg/piersi'],
  },
  // --- Klaster: diagnostyka uroginekologiczna ---
  {
    id: 'usg-jader',
    slug: 'usg/jader',
    name: 'USG jąder',
    shortDesc: 'USG jąder i moszny z opcją Dopplera: guzki, ból, żylaki powrózka.',
    cluster: 'uroginekologia',
    related: ['usg/prostaty', 'usg/wezlow-chlonnych', 'usg/tkanek-miekkich'],
  },
  {
    id: 'usg-ginekologiczne',
    slug: 'usg/ginekologiczne',
    name: 'USG ginekologiczne',
    shortDesc: 'USG narządu rodnego: macica i jajniki. Dostęp transwaginalny lub przezbrzuszny.',
    cluster: 'uroginekologia',
    related: ['usg/jamy-brzusznej', 'usg/piersi', 'usg/nerek'],
  },
  // --- Klaster: Doppler naczyn (pod-hub naczyniowy) ---
  {
    id: 'usg-doppler',
    slug: 'usg/doppler',
    name: 'USG Doppler naczyń',
    shortDesc: 'Ocena przepływu krwi w tętnicach i żyłach metodą dopplerowską.',
    cluster: 'naczynia',
    related: ['usg/doppler-zyl-konczyn-dolnych', 'usg/doppler-tetnic-szyjnych', 'usg/serca', 'usg/nerek'],
  },
  {
    id: 'usg-doppler-zyl-konczyn-dolnych',
    slug: 'usg/doppler-zyl-konczyn-dolnych',
    name: 'USG Doppler żył kończyn dolnych',
    shortDesc: 'Diagnostyka żylaków i podejrzenia zakrzepicy żył głębokich nóg.',
    cluster: 'naczynia',
    related: ['usg/doppler', 'usg/doppler-tetnic-szyjnych'],
  },
  {
    id: 'usg-doppler-tetnic-szyjnych',
    slug: 'usg/doppler-tetnic-szyjnych',
    name: 'USG Doppler tętnic szyjnych',
    shortDesc: 'Ocena blaszek miażdżycowych i ryzyka udaru w tętnicach dogłowowych.',
    cluster: 'naczynia',
    related: ['usg/doppler', 'usg/szyi', 'usg/tarczycy'],
  },
  // --- Klaster: serce i klatka piersiowa ---
  {
    id: 'usg-serca',
    slug: 'usg/serca',
    name: 'USG serca',
    shortDesc: 'Echokardiografia: ocena kurczliwości, zastawek i frakcji wyrzutowej serca.',
    cluster: 'klatka-piersiowa',
    related: ['usg/pluc', 'usg/doppler', 'usg/doppler-tetnic-szyjnych'],
  },
  {
    id: 'usg-pluc',
    slug: 'usg/pluc',
    name: 'USG płuc',
    shortDesc: 'Ocena płynu w jamie opłucnej i zmian zapalnych w obwodowych partiach płuc.',
    cluster: 'klatka-piersiowa',
    related: ['usg/serca', 'usg/jamy-brzusznej'],
  },
  // --- Klaster: narzad ruchu ---
  {
    id: 'usg-stawow',
    slug: 'usg/stawow',
    name: 'USG stawów',
    shortDesc: 'USG narządu ruchu: kolano, bark, nadgarstek, ścięgna i więzadła.',
    cluster: 'narzad-ruchu',
    related: ['usg/stawu-skokowego', 'usg/stopy', 'usg/tkanek-miekkich', 'usg/doppler'],
  },
  {
    id: 'usg-stawu-skokowego',
    slug: 'usg/stawu-skokowego',
    name: 'USG stawu skokowego',
    shortDesc: 'Ocena więzadeł, ścięgien i wysięku w stawie skokowym, także po skręceniu kostki.',
    cluster: 'narzad-ruchu',
    related: ['usg/stawow', 'usg/stopy', 'usg/tkanek-miekkich'],
  },
  {
    id: 'usg-stopy',
    slug: 'usg/stopy',
    name: 'USG stopy',
    shortDesc: 'Ocena rozcięgna podeszwowego, nerwiaka Mortona i ścięgien stopy.',
    cluster: 'narzad-ruchu',
    related: ['usg/stawow', 'usg/stawu-skokowego', 'usg/tkanek-miekkich'],
  },
];

export function getServiceBySlug(slug) {
  return (
    STOMATOLOGIA_SERVICES.find((s) => s.slug === slug) ||
    AESTHETIC_SERVICES.find((s) => s.slug === slug) ||
    USG_SERVICES.find((s) => s.slug === slug)
  );
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
