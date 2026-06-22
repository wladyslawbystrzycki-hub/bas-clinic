export const BODY_AREAS = [
  {
    slug: 'twarz',
    name: 'Twarz',
    description: 'Zabiegi odmładzające i modelujące twarz.',
    icon: 'face',
  },
  {
    slug: 'oczy',
    name: 'Oczy',
    description: 'Specjalistyczne zabiegi okolicy oczu.',
    icon: 'eye',
  },
  {
    slug: 'usta',
    name: 'Usta',
    description: 'Modelowanie i korekta ust.',
    icon: 'lips',
  },
  {
    slug: 'szyja',
    name: 'Szyja',
    description: 'Odmładzanie i ujędrnianie skóry szyi.',
    icon: 'neck',
  },
  {
    slug: 'dekolt',
    name: 'Dekolt',
    description: 'Regeneracja i odmłodzenie skóry dekoltu.',
    icon: 'decolletage',
  },
  {
    slug: 'wlosy',
    name: 'Włosy',
    description: 'Terapie wzmacniające włosy i skórę głowy.',
    icon: 'hair',
  },
  {
    slug: 'cialo',
    name: 'Ciało',
    description: 'Zabiegi laserowe na ciało.',
    icon: 'body',
  },
  {
    slug: 'pachy',
    name: 'Pachy',
    description: 'Leczenie nadmiernej potliwości.',
    icon: 'underarm',
  },
];

export function getBodyAreaBySlug(slug) {
  return BODY_AREAS.find((a) => a.slug === slug);
}
