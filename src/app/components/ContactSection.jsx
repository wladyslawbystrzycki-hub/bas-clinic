import Link from 'next/link';
import { CLINIC } from '@/config/clinic';

/**
 * ContactSection — sekcja „Kontakt" na stronie głównej.
 *
 * Premium „split card": po lewej ciemny grafitowy panel z danymi kontaktowymi
 * (jedyne miejsce na stronie głównej — poza hero/stopką — gdzie platyna działa
 * poprawnie, bo tło jest ciemne), po prawej PRAWDZIWA osadzona mapa Google z
 * pływającym przyciskiem „Wyznacz trasę". Renderuje się wewnątrz <Section>.
 *
 * Mapa: domyślnie budowana z adresu z `clinic.js` (bez klucza API). Można podać
 * własny `CLINIC.maps.embedSrc` (oficjalny embed Google) dla dokładnej pinezki.
 */
export default function ContactSection() {
  const address = `${CLINIC.address.street}, ${CLINIC.address.cityDisplay}`;
  const mapQuery = encodeURIComponent(address);
  const mapEmbedUrl =
    CLINIC.maps?.embedSrc ||
    `https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* ---------------------- Lewa: ciemny panel z danymi --------------------- */}
        <div className="relative overflow-hidden bg-primary-900 p-8 sm:p-10 lg:p-12">
          {/* miękka poświata (głębia) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary-700/50 blur-3xl"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-400">
              Dane kontaktowe
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-primary-200/90">
              Masz pytania lub chcesz umówić wizytę? Zadzwoń, napisz albo odwiedź
              nas osobiście — chętnie pomożemy i wszystko spokojnie wyjaśnimy.
            </p>

            <address className="mt-8 space-y-5 not-italic">
              <ContactRow icon={<MapPinIcon />} label="Adres">
                {CLINIC.address.street}
                <br />
                {CLINIC.address.cityDisplay}
              </ContactRow>
              <ContactRow
                icon={<PhoneIcon />}
                label="Telefon"
                href={`tel:${CLINIC.phoneRaw}`}
              >
                {CLINIC.phone}
              </ContactRow>
              <ContactRow
                icon={<MailIcon />}
                label="E-mail"
                href={`mailto:${CLINIC.email}`}
              >
                {CLINIC.email}
              </ContactRow>
              <ContactRow icon={<ClockIcon />} label="Godziny otwarcia">
                Pon–Pt: {CLINIC.hours.weekdays}
                <br />
                Sob–Ndz: {CLINIC.hours.saturday}
              </ContactRow>
            </address>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/rejestracja/"
                className="inline-flex items-center justify-center rounded-lg bg-secondary-500 px-6 py-3 text-sm font-semibold text-primary-950 shadow-lg transition-colors hover:bg-secondary-400"
              >
                Umów wizytę
              </Link>
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Zadzwoń
              </a>
            </div>

            {/* Social — tylko gdy istnieje realny profil Bas Clinic (patrz clinic.js) */}
            {(CLINIC.social.facebook || CLINIC.social.instagram) && (
              <div className="mt-8 flex items-center gap-5 border-t border-white/10 pt-6">
                <span className="text-xs font-medium uppercase tracking-wider text-secondary-400">
                  Obserwuj nas
                </span>
                <div className="flex gap-3">
                  {CLINIC.social.facebook && (
                    <a
                      href={CLINIC.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook Bas Clinic"
                      className="text-white/60 transition-colors hover:text-secondary-300"
                    >
                      <FacebookIcon />
                    </a>
                  )}
                  {CLINIC.social.instagram && (
                    <a
                      href={CLINIC.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram Bas Clinic"
                      className="text-white/60 transition-colors hover:text-secondary-300"
                    >
                      <InstagramIcon />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ----------------------------- Prawa: mapa ---------------------------- */}
        <div className="relative min-h-[20rem]">
          <iframe
            title={`Mapa dojazdu — ${CLINIC.name}, ${address}`}
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-primary-800 shadow-lg ring-1 ring-black/5 transition-colors hover:bg-primary-50"
          >
            <ArrowUpRightIcon />
            Wyznacz trasę
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, href, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary-300 ring-1 ring-white/10">
        {icon}
      </span>
      <div className="pt-0.5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-secondary-400">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="mt-1 block text-base font-medium leading-relaxed text-white transition-colors hover:text-secondary-300"
          >
            {children}
          </a>
        ) : (
          <p className="mt-1 text-base font-medium leading-relaxed text-white">
            {children}
          </p>
        )}
      </div>
    </div>
  );
}

/* -------------------------------- Ikony --------------------------------- */

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5 19.5 4.5m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    </svg>
  );
}
