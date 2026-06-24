import { USG_CLUSTERS, getUsgServicesByCluster } from '@/config/services';

export function getMainMenu() {
  return [
    getStomatologiaMenu(),
    getMedycynaEstetycznaMenu(),
    getUsgMenu(),
    { id: 'wlewy', label: 'Wlewy witaminowe', href: '/wlewy-witaminowe/' },
    { id: 'uzaleznienia', label: 'Leczenie uzależnień', href: '/leczenie-uzaleznien/' },
    { id: 'metamorfozy', label: 'Metamorfozy', href: '/metamorfozy/' },
    { id: 'cennik', label: 'Cennik', href: '/cennik/' },
    { id: 'o-nas', label: 'O nas', href: '/o-nas/' },
    { id: 'kontakt', label: 'Kontakt', href: '/kontakt/' },
  ];
}

function getUsgMenu() {
  return {
    id: 'usg',
    label: 'USG',
    href: '/usg/',
    megaMenu: true,
    featured: {
      title: 'Diagnostyka USG\nwe Wrocławiu',
      description:
        'Bezbolesne, nieinwazyjne badania ultrasonograficzne w Bas Clinic.',
      ctaLabel: 'Umów badanie',
      ctaHref: '/kontakt/',
    },
    children: USG_CLUSTERS.map((cluster) => ({
      id: `usg-${cluster.slug}`,
      label: cluster.name,
      groupOnly: true,
      children: getUsgServicesByCluster(cluster.slug).map((s) => ({
        id: s.id,
        label: s.name,
        href: `/${s.slug}/`,
      })),
    })),
  };
}

function getStomatologiaMenu() {
  return {
    id: 'stomatologia',
    label: 'Stomatologia',
    href: '/stomatologia/',
    megaMenu: true,
    featured: {
      title: 'Zdrowy uśmiech\nna całe lata',
      description:
        'Kompleksowe leczenie i stomatologia estetyczna pod opieką lek. dent. Ivanny Bas.',
      ctaLabel: 'Umów wizytę',
      ctaHref: '/kontakt/',
    },
    children: [
      {
        id: 'estetyczna',
        label: 'Stomatologia estetyczna',
        href: '/stomatologia/estetyczna/',
        children: [
          { id: 'wybielanie', label: 'Wybielanie zębów', href: '/stomatologia/wybielanie-zebow/' },
          { id: 'odbudowa', label: 'Odbudowa zębów', href: '/stomatologia/odbudowa-zebow/' },
          { id: 'licowki', label: 'Licówki', href: '/stomatologia/licowki/' },
          { id: 'bonding', label: 'Bonding', href: '/stomatologia/bonding/' },
        ],
      },
      {
        id: 'leczenie-profilaktyka',
        label: 'Leczenie i profilaktyka',
        groupOnly: true,
        children: [
          { id: 'leczenie', label: 'Leczenie zębów', href: '/stomatologia/leczenie-zebow/' },
          { id: 'higienizacja', label: 'Higienizacja', href: '/stomatologia/higienizacja/' },
          { id: 'dziecieca', label: 'Stomatologia dziecięca', href: '/stomatologia/dziecieca/' },
        ],
      },
      {
        id: 'protetyka-implanty',
        label: 'Protetyka i implanty',
        groupOnly: true,
        children: [
          { id: 'implanty', label: 'Implanty zębowe', href: '/stomatologia/implanty-zebowe/' },
          { id: 'protetyka', label: 'Protetyka korony', href: '/stomatologia/protetyka-korony/' },
          { id: 'bezzebie', label: 'Leczenie bezzębia', href: '/stomatologia/leczenie-bezzebia/' },
        ],
      },
      {
        id: 'ortodoncja',
        label: 'Ortodoncja',
        href: '/stomatologia/ortodoncja/',
        children: [
          { id: 'stale', label: 'Aparaty stałe', href: '/stomatologia/aparaty-stale/' },
          { id: 'alignery', label: 'Alignery', href: '/stomatologia/alignery/' },
          { id: 'ruchome', label: 'Aparaty ruchome', href: '/stomatologia/aparaty-ruchome/' },
        ],
      },
      {
        id: 'chirurgia',
        label: 'Chirurgia',
        href: '/stomatologia/chirurgia/',
        children: [
          { id: 'usuwanie', label: 'Usuwanie zębów', href: '/stomatologia/usuwanie-zebow/' },
        ],
      },
    ],
  };
}

function getMedycynaEstetycznaMenu() {
  return {
    id: 'medycyna-estetyczna',
    label: 'Medycyna estetyczna',
    href: '/medycyna-estetyczna/',
    megaMenu: true,
    featured: {
      title: 'Naturalne piękno,\nmedyczna precyzja',
      description:
        'Indywidualne zabiegi odmładzające pod opieką lek. dent. Ivanny Bas.',
      ctaLabel: 'Umów konsultację',
      ctaHref: '/kontakt/',
    },
    children: [
      {
        id: 'twarz',
        label: 'Twarz',
        groupOnly: true,
        children: [
          { id: 'redukcja-zmarszczek-botox', label: 'Redukcja zmarszczek toksyną botulinową', href: '/medycyna-estetyczna/redukcja-zmarszczek-botox/' },
          { id: 'wypelniacze-ha', label: 'Wypełniacze na bazie kwasu hialuronowego', href: '/medycyna-estetyczna/wypelniacze-ha/' },
          { id: 'redukcja-zmarszczek-ha', label: 'Redukcja zmarszczek kwasem hialuronowym', href: '/medycyna-estetyczna/redukcja-zmarszczek-ha/' },
          { id: 'stymulatory-tkankowe', label: 'Stymulatory tkankowe', href: '/medycyna-estetyczna/stymulatory-tkankowe/' },
          { id: 'mezoterapia-iglowa', label: 'Mezoterapia igłowa', href: '/medycyna-estetyczna/mezoterapia-iglowa/' },
          { id: 'mezoterapia-mikroiglowa', label: 'Mezoterapia mikroigłowa', href: '/medycyna-estetyczna/mezoterapia-mikroiglowa/' },
          { id: 'pilingi-medyczne', label: 'Pilingi medyczne', href: '/medycyna-estetyczna/pilingi-medyczne/' },
          { id: 'programy-zabiegowe', label: 'Programy zabiegowe', href: '/medycyna-estetyczna/programy-zabiegowe/' },
          { id: 'regeneratory-komorkowe', label: 'Regeneratory komórkowe', href: '/medycyna-estetyczna/regeneratory-komorkowe/' },
          { id: 'terapia-egzosomami', label: 'Terapia odmładzająca z egzosomami', href: '/medycyna-estetyczna/terapia-egzosomami/' },
        ],
      },
      {
        id: 'oczy',
        label: 'Oczy',
        groupOnly: true,
        children: [
          { id: 'wypelniacze-ha-oczy', label: 'Wypełniacze na bazie kwasu hialuronowego', href: '/medycyna-estetyczna/wypelniacze-ha/' },
          { id: 'redukcja-glebokich-zmarszczek', label: 'Redukcja głębokich zmarszczek kwasem hialuronowym', href: '/medycyna-estetyczna/redukcja-glebokich-zmarszczek/' },
          { id: 'mezoterapia-okolicy-oka', label: 'Mezoterapia okolicy oka', href: '/medycyna-estetyczna/mezoterapia-okolicy-oka/' },
          { id: 'regeneracja-konturu-oka', label: 'Regeneracja konturu oka', href: '/medycyna-estetyczna/regeneracja-konturu-oka/' },
          { id: 'stymulatory-tkankowe-oczy', label: 'Stymulatory tkankowe', href: '/medycyna-estetyczna/stymulatory-tkankowe/' },
          { id: 'redukcja-cieni', label: 'Redukcja cieni pod oczami', href: '/medycyna-estetyczna/redukcja-cieni/' },
          { id: 'blefaroplastyka', label: 'Blefaroplastyka górna i dolna', href: '/medycyna-estetyczna/blefaroplastyka/' },
        ],
      },
      {
        id: 'usta',
        label: 'Usta',
        groupOnly: true,
        children: [
          { id: 'modelowanie-ust', label: 'Modelowanie ust', href: '/medycyna-estetyczna/modelowanie-ust/' },
          { id: 'korekta-usmiechu-dziaslowego', label: 'Korekta uśmiechu dziąsłowego', href: '/medycyna-estetyczna/korekta-usmiechu-dziaslowego/' },
        ],
      },
      {
        id: 'szyja',
        label: 'Szyja',
        groupOnly: true,
        children: [
          { id: 'redukcja-drobnych-zmarszczek-ha', label: 'Redukcja drobnych zmarszczek kwasem hialuronowym', href: '/medycyna-estetyczna/redukcja-drobnych-zmarszczek-ha/' },
          { id: 'konturowanie-zuchwy', label: 'Konturowanie linii żuchwy i brody', href: '/medycyna-estetyczna/konturowanie-zuchwy/' },
          { id: 'redukcja-zmarszczek-botox-szyja', label: 'Redukcja zmarszczek toksyną botulinową', href: '/medycyna-estetyczna/redukcja-zmarszczek-botox/' },
          { id: 'mezoterapia-iglowa-szyja', label: 'Mezoterapia igłowa', href: '/medycyna-estetyczna/mezoterapia-iglowa/' },
          { id: 'pilingi-medyczne-szyja', label: 'Pilingi medyczne', href: '/medycyna-estetyczna/pilingi-medyczne/' },
        ],
      },
      {
        id: 'dekolt',
        label: 'Dekolt',
        groupOnly: true,
        children: [
          { id: 'mezoterapia-iglowa-dekolt', label: 'Mezoterapia igłowa', href: '/medycyna-estetyczna/mezoterapia-iglowa/' },
          { id: 'skin-booster', label: 'Mezoterapia głęboka (skin booster)', href: '/medycyna-estetyczna/skin-booster/' },
          { id: 'mezoterapia-mikroiglowa-dekolt', label: 'Mezoterapia mikroigłowa', href: '/medycyna-estetyczna/mezoterapia-mikroiglowa/' },
          { id: 'redukcja-drobnych-zmarszczek-ha-dekolt', label: 'Redukcja drobnych zmarszczek kwasem hialuronowym', href: '/medycyna-estetyczna/redukcja-drobnych-zmarszczek-ha/' },
        ],
      },
      {
        id: 'wlosy',
        label: 'Włosy',
        groupOnly: true,
        children: [
          { id: 'mezoterapia-skory-glowy', label: 'Mezoterapia skóry głowy', href: '/medycyna-estetyczna/mezoterapia-skory-glowy/' },
          { id: 'osocze-bogatoplytkowe', label: 'Osocze bogatopłytkowe', href: '/medycyna-estetyczna/osocze-bogatoplytkowe/' },
          { id: 'przeszczep-wlosow', label: 'Przeszczep włosów', href: '/medycyna-estetyczna/przeszczep-wlosow/' },
        ],
      },
      {
        id: 'cialo',
        label: 'Ciało',
        groupOnly: true,
        children: [
          { id: 'laserowe-usuwanie-blizn', label: 'Laserowe usuwanie blizn i rozstępów', href: '/medycyna-estetyczna/laserowe-usuwanie-blizn/' },
        ],
      },
      {
        id: 'pachy',
        label: 'Pachy',
        groupOnly: true,
        children: [
          { id: 'leczenie-nadpotliwosci', label: 'Leczenie nadpotliwości toksyną botulinową', href: '/medycyna-estetyczna/leczenie-nadpotliwosci/' },
        ],
      },
    ],
  };
}
