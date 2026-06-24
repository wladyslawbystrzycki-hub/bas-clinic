import { generatePageMetadata } from '@/lib/metadata';
import Section from '../components/Section';
import CTASection from '../components/CTASection';
import BeforeAfter from '../components/BeforeAfter';
import Breadcrumbs from '../components/Breadcrumbs';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import { METAMORFOZY_CASES, METAMORFOZY_STEPS } from '@/config/metamorfozy';

export const metadata = generatePageMetadata({
  title: 'Metamorfozy - efekty przed i po',
  description:
    'Metamorfozy Pacjentów Bas Clinic we Wrocławiu - efekty leczenia stomatologicznego i zabiegów medycyny estetycznej. Autentyczne realizacje publikowane za zgodą Pacjentów.',
  path: '/metamorfozy/',
});

const BREADCRUMBS = [{ label: 'Metamorfozy' }];

export default function MetamorfozyPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      {/* Nagłówek — zwykły pasek (jak na cenniku), bez pełnego hero */}
      <section id="hero" className="bg-gradient-to-r from-primary-800 to-primary-900 py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} />
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Metamorfozy
          </h1>
          <p className="mt-4 max-w-xl text-lg text-primary-100">
            Zobacz, jak zmienia się uśmiech i twarz naszych Pacjentów — realne efekty
            stomatologii i medycyny estetycznej.
          </p>
        </div>
      </section>

      {/* Intro — wprowadzenie + uczciwa nota o autentyczności */}
      <Section id="wprowadzenie">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">
            Autentyczne realizacje
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
            Prawdziwe historie zmian
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600">
            Każda metamorfoza zaczyna się od rozmowy i indywidualnego planu — nie od
            gotowego szablonu. Poniżej pokazujemy zakres zmian, jakie pomagamy osiągnąć
            w stomatologii estetycznej i medycynie estetycznej.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Zdjęcia „przed / po” publikujemy wyłącznie jako autentyczne realizacje naszych
            Pacjentów i za ich pisemną zgodą. Efekty są indywidualne i zależą od stanu
            wyjściowego oraz przyjętego planu leczenia.
          </p>
        </div>
      </Section>

      {/* Galeria metamorfoz */}
      <Section bg="light" id="galeria">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {METAMORFOZY_CASES.map((item) => (
            <BeforeAfter key={item.id} {...item} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-gray-600">
          Galerię uzupełniamy o kolejne udokumentowane realizacje. Chcesz zobaczyć efekty
          dla konkretnego zabiegu? Zapytaj o nie podczas konsultacji.
        </p>
      </Section>

      {/* Proces — realna sekwencja, numeracja zasłużona */}
      <Section id="proces">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">
            Jak to przebiega
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
            Droga do metamorfozy
          </h2>
        </div>
        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METAMORFOZY_STEPS.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-gray-100 bg-cream p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 font-display text-sm font-semibold tabular-nums text-primary-700 ring-1 ring-primary-100">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-primary-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* CTA */}
      <CTASection
        id="dlaczego-my"
        eyebrow="Zacznij od konsultacji"
        title="Zaplanujmy Twoją metamorfozę"
        intro="Umów konsultację, podczas której ocenimy stan wyjściowy, omówimy oczekiwania i zaproponujemy realny plan — krok po kroku, w Twoim tempie."
      />
    </>
  );
}
