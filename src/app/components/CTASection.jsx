import Link from 'next/link';
import { CLINIC } from '@/config/clinic';
import ReviewsBadge from './ReviewsBadge';

const DEFAULT_BENEFITS = [
  'Kompleksowa opieka stomatologiczna',
  'Medycyna estetyczna na najwyższym poziomie',
  'Nowoczesny sprzęt i technologie',
  'Indywidualne podejście do każdego Pacjenta',
  'Ponad 15 lat doświadczenia',
  'Wlewy witaminowe i terapie infuzyjne',
  'Komfortowa atmosfera kliniki',
  'Doświadczony zespół specjalistów',
];

export default function CTASection({
  id,
  eyebrow = 'Dlaczego my',
  title = 'Dlaczego warto wybrać Bas Clinic?',
  intro = 'Łączymy stomatologię, medycynę estetyczną i diagnostykę USG pod jednym dachem. Każdy plan leczenia tworzymy indywidualnie — w oparciu o medyczną wiedzę w trzecim pokoleniu, nowoczesny sprzęt i szczere, pełne empatii podejście do Pacjenta.',
  benefits = DEFAULT_BENEFITS,
}) {
  const experience = CLINIC.founders?.[0]?.experience;

  return (
    <section id={id} className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* ----------------------------- Lewa: treść ---------------------------- */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
              {intro}
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckBadge />
                  <span className="text-sm font-medium leading-snug text-primary-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <Link
                href="/rejestracja/"
                className="group inline-flex items-center gap-3 self-start rounded-lg bg-primary-700 py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-800"
              >
                Umów wizytę
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>

              <a href={`tel:${CLINIC.phoneRaw}`} className="group inline-flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-200">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-gray-500">
                    Zadzwoń do nas
                  </span>
                  <span className="block text-base font-bold text-primary-900">
                    {CLINIC.phone}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* -------------------- Prawa: zdjęcia + pływające odznaki -------------------- */}
          <div className="relative">
            {/* miękka poświata pod zdjęciami (głębia) */}
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary-100/70 via-cream to-transparent blur-2xl"
            />

            {/* zdjęcie główne */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&h=1100&fit=crop"
                alt="Zadowolona Pacjentka Bas Clinic"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-primary-950/25 to-transparent"
              />
            </div>

            {/* zdjęcie poboczne — nakładka (od sm) */}
            <div className="absolute -bottom-8 -right-3 hidden w-2/5 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:block lg:-right-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=520&h=520&fit=crop"
                alt="Zabieg w Bas Clinic"
                className="aspect-square w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* odznaka opinii Google (dane z CLINIC.reviews) */}
            <div className="absolute -top-5 right-3 sm:right-6 lg:-right-6">
              <ReviewsBadge variant="card" />
            </div>

            {/* odznaka doświadczenia (realne dane z clinic.js) */}
            {experience && (
              <div className="absolute -left-3 bottom-6 sm:-left-6">
                <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-black/5 backdrop-blur">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <ShieldCheckIcon className="h-5 w-5" />
                  </span>
                  <span className="leading-tight">
                    <span className="block font-display text-lg font-bold text-primary-900">
                      {experience} lat
                    </span>
                    <span className="block text-xs text-gray-500">doświadczenia</span>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Ikony --------------------------------- */

function CheckBadge() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3" aria-hidden>
        <path
          d="m5 10.5 3 3 7-7.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.6}
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}
