const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bas.clinic';

export function getSiteUrl() {
  return SITE_URL;
}

export function getFullUrl(path) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}
