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
  title: {
    default: 'Bas Clinic - Stomatologia i Medycyna Estetyczna | Wrocław',
    template: '%s | Bas Clinic',
  },
  description:
    'Klinika stomatologiczno-estetyczna Bogdana i Ivanny Bas we Wrocławiu. Stomatologia, medycyna estetyczna, wlewy witaminowe. Kompleksowa opieka w nowoczesnym gabinecie.',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Bas Clinic',
  },
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
