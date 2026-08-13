/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    // 301 po zmianie slugów USG (dopełniacz -> mianownik): stare, zaindeksowane
    // URL-e przekierowujemy, by zachować link equity i nie zwracać 404.
    const usgSlugRenames = [
      ['tarczycy', 'tarczyca'],
      ['jamy-brzusznej', 'jama-brzuszna'],
      ['watroby', 'watroba'],
      ['nerek', 'nerki'],
      ['prostaty', 'prostata'],
      ['szyi', 'szyja'],
      ['slinianek', 'slinianki'],
      ['wezlow-chlonnych', 'wezly-chlonne'],
      ['tkanek-miekkich', 'tkanki-miekkie'],
      ['jader', 'jadra'],
      ['serca', 'serce'],
      ['pluc', 'pluca'],
      ['stawow', 'stawy'],
      ['stawu-skokowego', 'staw-skokowy'],
      ['stopy', 'stopa'],
      ['doppler-tetnic-szyjnych', 'doppler-tetnice-szyjne'],
      ['doppler-zyl-konczyn-dolnych', 'doppler-zyly-konczyn-dolnych'],
    ];
    return usgSlugRenames.map(([from, to]) => ({
      source: `/usg/${from}/`,
      destination: `/usg/${to}/`,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // HSTS: wymuszenie HTTPS w przeglądarce (2 lata + subdomeny + preload).
          // Cała witryna jest HTTPS-only (Vercel) — bezpieczne; chroni przed
          // downgrade/SSL-strip i wzmacnia sygnał Trust.
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Domyślnie odbieramy uprawnienia, których strona nie używa (zmniejsza
          // powierzchnię ataku i wycisza Topics API). Mapa Google to <iframe> z
          // własnym originem — nie wymaga top-level geolocation.
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
