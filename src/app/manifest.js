// Web App Manifest (T-29) — instalowalność PWA + theme-color dla paska przeglądarki
// na mobile. Next auto-linkuje ten plik jako <link rel="manifest">. Ikony wskazują na
// tras-konwencję `icon.js` (512) i `apple-icon.js` (180).
export default function manifest() {
  return {
    name: 'Bas Clinic — prywatna klinika medyczna we Wrocławiu',
    short_name: 'Bas Clinic',
    description:
      'Stomatologia, medycyna estetyczna, USG, wlewy witaminowe i leczenie uzależnień. Lekarze Bogdan i Ivanna Bas — Wrocław.',
    lang: 'pl',
    start_url: '/',
    display: 'standalone',
    background_color: '#14171a',
    theme_color: '#14171a',
    icons: [
      { src: '/icon', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
