import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import Section from '../components/Section';
import BookingFlow from '../components/BookingFlow';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'Rejestracja online — umów wizytę | Bas Clinic',
  description:
    'Umów wizytę online w Bas Clinic we Wrocławiu. Wybierz usługę, dogodny termin i godzinę — oddzwonimy, aby potwierdzić rezerwację.',
  path: '/rejestracja/',
});

export default function RejestracjaPage() {
  return (
    <>
      {/* Nagłówek (spójny z hero, bez CTA — formularz jest akcją) */}
      <section className="relative isolate overflow-hidden bg-primary-950">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,var(--color-primary-900)_0%,var(--color-primary-950)_60%)]" />
          <div className="absolute right-[-6%] top-[-12%] h-[28rem] w-[28rem] rounded-full bg-primary-700/30 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] opacity-[0.06] [background-size:46px_46px] [mask-image:linear-gradient(to_left,black,transparent_55%)] [-webkit-mask-image:linear-gradient(to_left,black,transparent_55%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[100rem] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-primary-300 transition-colors hover:text-secondary-400"
                >
                  Strona główna
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span aria-hidden className="text-primary-500">
                  /
                </span>
                <span aria-current="page" className="font-medium text-primary-100">
                  Rejestracja online
                </span>
              </li>
            </ol>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-400 sm:text-sm">
            Rejestracja online
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
            Umów wizytę w kilku krokach
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-primary-200/90 sm:text-lg">
            Wybierz obszar, dogodny termin i godzinę, a następnie zostaw kontakt.
            Oddzwonimy, aby potwierdzić rezerwację. Wolisz rozmowę? Zadzwoń:{' '}
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="font-medium text-white underline-offset-4 hover:underline"
            >
              {CLINIC.phone}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Kreator rejestracji */}
      <Section bg="light">
        <BookingFlow />
      </Section>
    </>
  );
}
