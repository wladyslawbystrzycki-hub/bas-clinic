import { getFullUrl } from './siteUrl';

export function generatePageMetadata({ title, description, path, ogImage }) {
  const url = getFullUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630 }],
      }),
    },
  };
}
