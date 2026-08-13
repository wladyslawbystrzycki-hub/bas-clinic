import { getFullUrl } from './siteUrl';

// Brandowy podgląd społecznościowy z pliku-konwencji `src/app/opengraph-image.js`.
// MUSI być tu jawnie: Next ZASTĘPUJE (nie scala) openGraph przy nadpisaniu w segmencie,
// więc strona ustawiająca własny openGraph (poniżej) gubi obraz doklejany globalnie —
// bez tego og:image/twitter:image znika na wszystkich podstronach (zostaje tylko home).
// Stabilna ścieżka `/opengraph-image` (bez hasha) i tak zwraca ten sam PNG.
const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Bas Clinic — prywatna klinika medyczna we Wrocławiu',
};

// Next.js ZASTĘPUJE (nie scala) openGraph przy nadpisaniu w segmencie, więc statyczne
// pola OG (type/locale/siteName + images) muszą być tutaj — inaczej każda strona używająca
// tego helpera gubi je względem layout.js. To jedyne źródło prawdy OG dla stron.
export function generatePageMetadata({ title, description, path, ogImage }) {
  const url = getFullUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'pl_PL',
      siteName: 'Bas Clinic',
      title,
      description,
      url,
      images: [ogImage ? { url: ogImage, width: 1200, height: 630 } : OG_IMAGE],
    },
  };
}
