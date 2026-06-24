import Link from 'next/link';
import { CLINIC } from '@/config/clinic';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-primary-950 text-gray-300">
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Logo & Contact */}
          <div>
            <Link href="/" className="font-display text-2xl font-bold text-white">
              Bas Clinic
            </Link>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Stomatologia i Medycyna Estetyczna we Wrocławiu. Kompleksowa opieka
              w nowoczesnym gabinecie.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>{CLINIC.address.street}</p>
              <p>{CLINIC.address.cityDisplay}</p>
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="block text-primary-400 hover:text-primary-300"
              >
                {CLINIC.phone}
              </a>
              <a
                href={`mailto:${CLINIC.email}`}
                className="block text-primary-400 hover:text-primary-300"
              >
                {CLINIC.email}
              </a>
            </div>
          </div>

          {/* Column 2: Stomatologia */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stomatologia
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: '/stomatologia/implanty-zebowe/', label: 'Implanty zębowe' },
                { href: '/stomatologia/licowki/', label: 'Licówki' },
                { href: '/stomatologia/estetyczna/', label: 'Stomatologia estetyczna' },
                { href: '/stomatologia/ortodoncja/', label: 'Ortodoncja' },
                { href: '/stomatologia/higienizacja/', label: 'Higienizacja' },
                { href: '/stomatologia/leczenie-zebow/', label: 'Leczenie zębów' },
                { href: '/stomatologia/chirurgia/', label: 'Chirurgia' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Medycyna estetyczna */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Medycyna estetyczna
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: '/medycyna-estetyczna/', label: 'Wszystkie zabiegi' },
                { href: '/medycyna-estetyczna/wypelniacze-ha/', label: 'Wypełniacze HA' },
                { href: '/medycyna-estetyczna/redukcja-zmarszczek-botox/', label: 'Redukcja zmarszczek botox' },
                { href: '/medycyna-estetyczna/mezoterapia-iglowa/', label: 'Mezoterapia igłowa' },
                { href: '/medycyna-estetyczna/stymulatory-tkankowe/', label: 'Stymulatory tkankowe' },
                { href: '/medycyna-estetyczna/modelowanie-ust/', label: 'Modelowanie ust' },
                { href: '/medycyna-estetyczna/pilingi-medyczne/', label: 'Pilingi medyczne' },
                { href: '/medycyna-estetyczna/skin-booster/', label: 'Skin booster' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: USG */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Ultrasonografia (USG)
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: '/usg/', label: 'Wszystkie badania USG' },
                { href: '/usg/jama-brzuszna/', label: 'USG jamy brzusznej' },
                { href: '/usg/tarczyca/', label: 'USG tarczycy' },
                { href: '/usg/piersi/', label: 'USG piersi' },
                { href: '/usg/nerki/', label: 'USG nerek' },
                { href: '/usg/szyja/', label: 'USG szyi' },
                { href: '/usg/wezly-chlonne/', label: 'USG węzłów chłonnych' },
                { href: '/usg/doppler/', label: 'USG Doppler naczyń' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Informacje
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: '/o-nas/', label: 'O nas' },
                { href: '/cennik/', label: 'Cennik' },
                { href: '/kontakt/', label: 'Kontakt' },
                { href: '/wlewy-witaminowe/', label: 'Wlewy witaminowe' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">
              Godziny otwarcia
            </h3>
            <div className="mt-4 space-y-1 text-sm">
              <p>Pon - Pt: {CLINIC.hours.weekdays}</p>
              <p>Sob - Ndz: {CLINIC.hours.saturday}</p>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              <a
                href={CLINIC.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={CLINIC.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {CLINIC.name}. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
