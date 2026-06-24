import { STOMATOLOGIA_SERVICES, AESTHETIC_SERVICES, USG_SERVICES } from '@/config/services';

const SITE_URL = 'https://bas.clinic';

function buildUrl(path, priority = 0.7, changeFrequency = 'monthly') {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  };
}

function generateSitemapXml(urls) {
  const entries = urls
    .map(
      (u) => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${u.lastModified}</lastmod>
    <changefreq>${u.changeFrequency}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

export async function GET() {
  const urls = [];

  // Static pages
  urls.push(buildUrl('/', 1.0, 'weekly'));
  urls.push(buildUrl('/stomatologia/', 0.9, 'weekly'));
  urls.push(buildUrl('/medycyna-estetyczna/', 0.9, 'weekly'));
  urls.push(buildUrl('/usg/', 0.9, 'weekly'));
  urls.push(buildUrl('/wlewy-witaminowe/', 0.8, 'monthly'));
  urls.push(buildUrl('/leczenie-uzaleznien/', 0.8, 'monthly'));
  urls.push(buildUrl('/metamorfozy/', 0.7, 'monthly'));
  urls.push(buildUrl('/cennik/', 0.7, 'monthly'));
  urls.push(buildUrl('/o-nas/', 0.6, 'monthly'));
  urls.push(buildUrl('/kontakt/', 0.7, 'monthly'));

  // Stomatologia services
  STOMATOLOGIA_SERVICES.forEach((s) => {
    if (!s.isLanding) {
      urls.push(buildUrl(`/${s.slug}/`, 0.8, 'monthly'));
    }
  });

  // Aesthetic medicine - services
  AESTHETIC_SERVICES.forEach((s) => {
    urls.push(buildUrl(`/${s.slug}/`, 0.8, 'monthly'));
  });

  // USG (ultrasonografia) - hub juz dodany wyzej, tu strony badan
  USG_SERVICES.forEach((s) => {
    if (!s.isLanding) {
      urls.push(buildUrl(`/${s.slug}/`, 0.8, 'monthly'));
    }
  });

  const xml = generateSitemapXml(urls);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
