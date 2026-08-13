import { generatePageMetadata } from '@/lib/metadata';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import { CLINIC } from '@/config/clinic';

export const metadata = generatePageMetadata({
  title: 'O nas - lekarze Bogdan i Ivanna Bas, Wrocław',
  description:
    'Poznaj Bas Clinic - stomatologię i medycynę estetyczną we Wrocławiu. Dowiedz się więcej o naszych założycielach: Bogdanie i Ivannie Bas.',
  path: '/o-nas/',
});

const BREADCRUMBS = [{ label: 'O nas' }];

const bogdan = CLINIC.founders[0];
const ivanna = CLINIC.founders[1];

export default function ONasPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      <PageHeader
        eyebrow="Poznaj Bas Clinic"
        title="O nas"
        description="Poznaj zespół Bas Clinic i naszą filozofię leczenia."
        breadcrumbs={BREADCRUMBS}
      />

      {/* Bogdan Bas - detailed bio */}
      <Section id="bogdan-bas">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-primary-50">
              <div className="flex aspect-[3/4] items-center justify-center bg-gradient-to-b from-primary-100 to-primary-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="h-32 w-32 text-primary-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </div>
            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-primary-50 p-4 text-center">
                <p className="font-display text-2xl font-bold text-primary-700">{bogdan.experience}</p>
                <p className="mt-1 text-xs text-gray-600">lat doświadczenia</p>
              </div>
              <div className="rounded-xl bg-primary-50 p-4 text-center">
                <p className="font-display text-2xl font-bold text-primary-700">{bogdan.patients}</p>
                <p className="mt-1 text-xs text-gray-600">Pacjentów</p>
              </div>
              <div className="rounded-xl bg-primary-50 p-4 text-center">
                <p className="font-display text-2xl font-bold text-primary-700">od {bogdan.since}</p>
                <p className="mt-1 text-xs text-gray-600">Bas Clinic</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Założyciel Bas Clinic
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {bogdan.name}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600">
              {bogdan.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Cytat */}
            <blockquote className="mt-8 border-l-4 border-secondary-400 pl-6">
              <p className="text-lg italic text-gray-700">
                &ldquo;{bogdan.quote}&rdquo;
              </p>
            </blockquote>

            {/* Podpis bez tytułu „lek. med." — pełna, tytułowana forma jest w nagłówku wyżej */}
            <div className="mt-8">
              <p className="font-display text-xl font-semibold text-gray-900">Bogdan Bas</p>
              <p className="mt-1 text-sm font-medium text-gray-600">
                Założyciel {CLINIC.name}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Ivanna Bas */}
      <Section bg="light" id="ivanna-bas">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
          <div className="order-2 lg:order-1 lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Współzałożycielka Bas Clinic
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {ivanna.name}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600">
              {ivanna.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Podpis bez tytułu „lek. dent." — pełna, tytułowana forma jest w nagłówku wyżej */}
            <div className="mt-10">
              <p className="font-display text-xl font-semibold text-gray-900">Ivanna Bas</p>
              <p className="mt-1 text-sm font-medium text-gray-600">
                Współzałożycielka {CLINIC.name}
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-primary-50">
              <div className="flex aspect-[3/4] items-center justify-center bg-gradient-to-b from-primary-100 to-primary-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="h-32 w-32 text-primary-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section id="filozofia">
        <SectionHeader
          subtitle="Nasza filozofia"
          title="Bas Clinic - pasja i doświadczenie"
        />
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-gray-600">
          <p>
            Bas Clinic to nowoczesny gabinet stomatologiczno-estetyczny
            założony przez małżeństwo lekarzy - Bogdana i Ivannę Bas. Nasza
            klinika łączy doświadczenie w stomatologii z najnowszymi osiągnięciami
            medycyny estetycznej.
          </p>
          <p>
            Wierzymy w kompleksowe podejście do Pacjenta. Każdy zabieg
            planujemy indywidualnie, uwzględniając potrzeby i oczekiwania
            naszych Pacjentów. Korzystamy z nowoczesnego sprzętu, który
            umożliwia bezbolesne leczenie i precyzyjne planowanie zabiegów.
          </p>
          <p>
            Nasz gabinet przy ul. Opatowickiej 132 we Wrocławiu to
            przestrzeń zaprojektowana z myślą o komforcie Pacjentów. Ciepłe
            wnętrze i przyjazna atmosfera sprawiają, że wizyta w naszej
            klinice jest komfortowym doświadczeniem.
          </p>
        </div>
      </Section>

      <CTASection
        id="dlaczego-my"
        title="Umów wizytę w Bas Clinic"
        intro="Zapraszamy do kontaktu. Z przyjemnością odpowiemy na Twoje pytania."
      />
    </>
  );
}
