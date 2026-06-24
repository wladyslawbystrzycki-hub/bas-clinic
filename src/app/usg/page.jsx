import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { CLINIC } from '@/config/clinic';
import { USG_CLUSTERS, getUsgServicesByCluster, getUsgExams } from '@/config/services';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import Testimonials from '../components/Testimonials';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import FAQPageSchema from '../components/schema/FAQPageSchema';
import JsonLd from '../components/schema/JsonLd';
import { getWhyUs } from '@/config/whyUs';
import { getTestimonials } from '@/config/testimonials';

export const metadata = generatePageMetadata({
  title: 'USG Wrocław - pracownia ultrasonografii | Bas Clinic',
  description:
    'USG Wrocław w Bas Clinic (ul. Opatowicka 132). Pracownia ultrasonografii: USG jamy brzusznej, tarczycy, piersi, szyi, ślinianek i innych. Umów badanie USG.',
  path: '/usg/',
});

const BREADCRUMBS = [{ label: 'USG', href: '/usg/' }];

// Najczęściej wybierane badania - szybkie deeplinki (Daughter-links)
const POPULAR_EXAMS = [
  { name: 'USG jamy brzusznej', slug: 'usg/jama-brzuszna' },
  { name: 'USG tarczycy', slug: 'usg/tarczyca' },
  { name: 'USG piersi', slug: 'usg/piersi' },
  { name: 'USG nerek', slug: 'usg/nerki' },
];

// FAQ ogólne dla huba (samodzielne chunki, keyword-echo na początku odpowiedzi)
const FAQ = [
  {
    question: 'Czym jest badanie USG?',
    answer:
      'Badanie USG (ultrasonografia) to nieinwazyjna metoda obrazowania, w której głowica ultrasonografu wysyła fale ultradźwiękowe i rejestruje ich echo odbite od tkanek. Na tej podstawie powstaje obraz narządów wewnętrznych, naczyń i tkanek miękkich w czasie rzeczywistym. Ultrasonografia nie wykorzystuje promieniowania rentgenowskiego.',
  },
  {
    question: 'Czy badanie USG jest bezpieczne i bezbolesne?',
    answer:
      'Badanie USG jest bezpieczne i bezbolesne. Wykorzystuje fale ultradźwiękowe, a nie promieniowanie jonizujące, dlatego można je powtarzać wielokrotnie oraz wykonywać u dzieci i u kobiet w ciąży. Ultrasonografia nie wymaga nakłucia ani znieczulenia, a po badaniu można od razu wrócić do codziennych aktywności.',
  },
  {
    question: 'Czy do USG potrzebne jest skierowanie?',
    answer:
      'Do badania USG wykonywanego prywatnie skierowanie nie jest potrzebne. W Bas Clinic we Wrocławiu badanie ultrasonograficzne można umówić bezpośrednio, telefonicznie. Warto zabrać ze sobą wyniki wcześniejszych badań obrazowych, aby lekarz mógł porównać obraz z poprzednimi opisami.',
  },
  {
    question: 'Jak przygotować się do badania USG?',
    answer:
      'Przygotowanie do USG zależy od rodzaju badania. Do USG jamy brzusznej zaleca się przyjście na czczo, do USG ginekologicznego przezbrzusznego i USG prostaty potrzebny bywa wypełniony pęcherz moczowy, a badania tarczycy, szyi, piersi, stawów czy tkanek miękkich zwykle nie wymagają żadnego przygotowania. Szczegółowe zalecenia podane są na stronie każdego badania.',
  },
  {
    question: 'Ile trwa badanie USG?',
    answer:
      'Badanie USG trwa zazwyczaj od kilkunastu do około trzydziestu minut, w zależności od ocenianej okolicy i zakresu badania. USG z opcją Dopplera, oceniające przepływ krwi w naczyniach, może trwać nieco dłużej. Opis wyniku przekazywany jest zwykle bezpośrednio po badaniu.',
  },
  {
    question: 'Gdzie wykonać USG we Wrocławiu?',
    answer: `USG we Wrocławiu można wykonać w pracowni ultrasonografii Bas Clinic przy ${CLINIC.address.street}. Klinika oferuje pełen zakres badań: USG jamy brzusznej, tarczycy, piersi, szyi, węzłów chłonnych, ślinianek, nerek, a także badania dopplerowskie naczyń i USG stawów. Termin badania USG można umówić telefonicznie pod numerem ${CLINIC.phone}.`,
  },
  {
    question: 'Czy USG zastępuje wizytę u lekarza?',
    answer:
      'USG nie zastępuje konsultacji lekarskiej. Ultrasonografia jest badaniem obrazowym, które dostarcza informacji o budowie narządów i tkanek, jednak ostateczną diagnozę oraz dalsze postępowanie ustala lekarz na podstawie całości obrazu klinicznego, wywiadu i innych badań.',
  },
];

const EXAM_ITEM_LIST = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Badania USG w Bas Clinic we Wrocławiu',
  itemListElement: getUsgExams().map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `${CLINIC.url}/${s.slug}/`,
  })),
};

export default function UsgPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQPageSchema questions={FAQ} />
      <JsonLd data={EXAM_ITEM_LIST} />

      <HeroSection
        id="hero"
        subtitle="Ultrasonografia"
        title="USG Wrocław - pracownia ultrasonografii"
        description={`Pracownia USG w Bas Clinic przy ${CLINIC.address.street} we Wrocławiu. Wykonujemy bezbolesne i nieinwazyjne badania ultrasonograficzne - od USG jamy brzusznej, tarczycy i piersi po badania dopplerowskie naczyń.`}
        ctaText="Umów badanie USG"
      />

      {/* Definicja USG + globalne synonimy + najczęściej wybierane */}
      <Section id="o-badaniu">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Diagnostyka obrazowa
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Czym jest badanie USG?
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-600">
            <p>
              USG (ultrasonografia) to bezpieczne i nieinwazyjne badanie obrazowe, w którym głowica
              aparatu zwanego ultrasonografem wysyła fale ultradźwiękowe i rejestruje ich echo odbite
              od narządów wewnętrznych. Na tej podstawie powstaje obraz tkanek miękkich, naczyń i
              narządów w czasie rzeczywistym. Badanie ultrasonograficzne, określane też jako
              sonografia, nie wykorzystuje promieniowania rentgenowskiego.
            </p>
            <p>
              Diagnostyka ultrasonograficzna jest bezbolesna i nie wymaga nakłucia ani znieczulenia.
              Ze względu na bezpieczeństwo USG można powtarzać wielokrotnie oraz wykonywać u dzieci i u
              kobiet w ciąży. Badanie pozwala ocenić między innymi jamę brzuszną, tarczycę, piersi,
              węzły chłonne, ślinianki, stawy, a także przepływ krwi w tętnicach i żyłach (USG Doppler).
            </p>
            <p>
              W pracowni USG Bas Clinic we Wrocławiu badania wykonuje lekarz, a opis wyniku
              przekazywany jest zwykle bezpośrednio po badaniu. Poniżej znajduje się pełna lista badań
              ultrasonograficznych dostępnych w klinice, pogrupowana według okolicy ciała.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold text-gray-900">Najczęściej wybierane badania:</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {POPULAR_EXAMS.map((e) => (
                <Link
                  key={e.slug}
                  href={`/${e.slug}/`}
                  className="inline-flex items-center rounded-lg border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 transition-colors hover:border-primary-300 hover:bg-primary-100"
                >
                  {e.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Pełna lista badań pogrupowana klastrami (Daughter-links) */}
      <Section bg="light" id="badania">
        <SectionHeader
          subtitle="Zakres badań"
          title="Badania USG w Bas Clinic"
          description="Pełna lista badań ultrasonograficznych dostępnych w klinice, pogrupowana według okolicy ciała. Każde badanie ma osobną stronę z opisem wskazań, przygotowania i przebiegu."
        />
        <div className="space-y-14">
          {USG_CLUSTERS.map((cluster) => {
            const services = getUsgServicesByCluster(cluster.slug);
            if (services.length === 0) return null;
            return (
              <div key={cluster.slug}>
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-gray-900">{cluster.name}</h3>
                  <p className="mt-1 text-gray-600">{cluster.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((s) => (
                    <ServiceCard
                      key={s.id}
                      name={s.name}
                      description={s.shortDesc}
                      href={`/${s.slug}/`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Wskazania ogólne + przygotowanie ogólne */}
      <Section id="wskazania">
        <SectionHeader
          subtitle="Wskazania i przygotowanie"
          title="Kiedy warto wykonać USG i jak się przygotować"
        />
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Kiedy wykonuje się badanie USG?
            </h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              Ultrasonografię wykonuje się zarówno w diagnostyce dolegliwości, jak i w ramach
              profilaktyki oraz kontroli wcześniej rozpoznanych zmian. Do typowych wskazań należą:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-secondary-500">•</span> ból brzucha, niestrawność lub nieprawidłowe wyniki badań laboratoryjnych,</li>
              <li className="flex gap-2"><span className="text-secondary-500">•</span> wyczuwalny guzek, powiększony węzeł chłonny lub zmiana pod skórą,</li>
              <li className="flex gap-2"><span className="text-secondary-500">•</span> kontrola tarczycy, piersi, nerek lub gruczołu krokowego,</li>
              <li className="flex gap-2"><span className="text-secondary-500">•</span> ocena przepływu krwi w naczyniach (USG Doppler),</li>
              <li className="flex gap-2"><span className="text-secondary-500">•</span> ból stawu, urazy ścięgien, więzadeł i mięśni.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-600">
              O zakresie i rodzaju badania decyduje lekarz na podstawie zgłaszanych objawów. USG nie
              zastępuje konsultacji lekarskiej, lecz ją uzupełnia.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Jak przygotować się do USG?
            </h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              Sposób przygotowania zależy od ocenianej okolicy ciała:
            </p>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>
                <span className="font-semibold text-gray-900">Na czczo:</span> USG jamy brzusznej
                (zwykle 6-8 godzin bez jedzenia, aby ograniczyć gazy w jelitach).
              </li>
              <li>
                <span className="font-semibold text-gray-900">Z wypełnionym pęcherzem:</span> USG
                ginekologiczne przezbrzuszne oraz USG prostaty i pęcherza moczowego.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Bez przygotowania:</span> USG tarczycy,
                szyi, ślinianek, piersi, węzłów chłonnych, stawów oraz tkanek miękkich.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-600">
              Szczegółowe zalecenia dotyczące konkretnego badania znajdują się na jego stronie.
              Warto też zabrać wyniki wcześniejszych badań USG do porównania.
            </p>
          </div>
        </div>
      </Section>

      {/* Zaufanie + Local SEO (NAP z config) */}
      <Section bg="light" id="pracownia-usg">
        <SectionHeader
          subtitle="Pracownia USG we Wrocławiu"
          title="Badania USG wykonywane przez lekarza"
        />
        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              Bas Clinic to placówka prowadzona przez lekarzy z wieloletnim doświadczeniem. Badania
              ultrasonograficzne wykonuje lekarz, który na bieżąco omawia obraz i przekazuje opis
              wyniku, co skraca drogę od badania do dalszych decyzji diagnostycznych.
            </p>
            <p>
              Pracownia USG dysponuje nowoczesnym ultrasonografem umożliwiającym ocenę narządów,
              tkanek miękkich oraz przepływu krwi w naczyniach metodą Dopplera. Badania USG umawiane
              są prywatnie, bez skierowania, w dogodnym terminie.
            </p>
            <ul className="space-y-2 text-base text-gray-700">
              <li className="flex gap-2"><span className="text-secondary-500">✓</span> Badanie wykonywane i opisywane przez lekarza</li>
              <li className="flex gap-2"><span className="text-secondary-500">✓</span> Bezbolesna, nieinwazyjna diagnostyka bez promieniowania</li>
              <li className="flex gap-2"><span className="text-secondary-500">✓</span> Prywatnie, bez skierowania, szybki termin</li>
              <li className="flex gap-2"><span className="text-secondary-500">✓</span> Pełen zakres badań USG w jednym miejscu</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-gray-900">Pracownia USG - kontakt</h3>
            <dl className="mt-5 space-y-4 text-gray-600">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-primary-600">Adres</dt>
                <dd className="mt-1">{CLINIC.address.street}, {CLINIC.address.cityDisplay}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-primary-600">Telefon</dt>
                <dd className="mt-1">
                  <a href={`tel:${CLINIC.phoneRaw}`} className="font-medium text-primary-700 hover:text-primary-800">
                    {CLINIC.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-primary-600">Godziny otwarcia</dt>
                <dd className="mt-1">Poniedziałek - piątek: {CLINIC.hours.weekdays}</dd>
              </div>
            </dl>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-800"
            >
              Umów badanie USG
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ ogólne — wspólna sekcja (renderuje własny <section bg-cream>) */}
      <FAQSection items={FAQ} contactHref="/kontakt/" title="Najczęściej zadawane pytania o USG" />

      <Testimonials id="opinie" items={getTestimonials('USG')} />

      <CTASection id="dlaczego-my" {...getWhyUs('usg')} />
    </>
  );
}
