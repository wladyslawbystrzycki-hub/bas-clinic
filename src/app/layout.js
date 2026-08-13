import { Poppins } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});


export const metadata = {
  metadataBase: new URL('https://bas.clinic'),
  applicationName: 'Bas Clinic',
  title: {
    default: 'Bas Clinic | Prywatna klinika medyczna we Wrocławiu',
    template: '%s | Bas Clinic',
  },
  description:
    'Prywatna klinika medyczna Bas Clinic we Wrocławiu: stomatologia, medycyna estetyczna, USG, wlewy witaminowe i leczenie uzależnień. Lekarze Bogdan i Ivanna Bas.',
  // Karta społecznościowa Twittera/X — bez title/description, żeby dziedziczyła
  // per-stronę z og:title/og:description; obraz z pliku-konwencji opengraph-image.
  twitter: { card: 'summary_large_image' },
  appleWebApp: { capable: true, title: 'Bas Clinic', statusBarStyle: 'black-translucent' },
  // Jawny sygnał indeksacji site-wide (dziedziczony przez wszystkie strony, żadna nie
  // nadpisuje robots). max-image-preview:large → duże miniatury w SERP (klinika wizualna).
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

// theme-color = grafit hero/stopki (pasek adresu na mobile scala się z marką).
export const viewport = {
  themeColor: '#14171a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
