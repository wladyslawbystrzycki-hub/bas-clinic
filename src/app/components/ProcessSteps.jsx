import Image from 'next/image';
import Section from './Section';
import SectionHeader from './SectionHeader';
import ProcessStepsTabs from './ProcessStepsTabs';

/**
 * ProcessSteps — uporządkowana sekwencja etapów (np. kwalifikacja do terapii).
 *
 * Układ z referencji przełożony na nasz język wizualny: ponumerowane zakładki po
 * lewej, grafitowa karta z opisem aktywnego etapu pośrodku (grafit zamiast granatu
 * i gradientu, platynowe CTA na ciemnym) i spokojne zdjęcie po prawej. Na mobile
 * zakładki zamieniają się w pionowy akordeon (otwarty etap = ta sama ciemna karta),
 * a zdjęcie znika. Numeracja jest zasłużona tylko dla realnej kolejności —
 * dla listy bez kolejności (np. wskazania) podaj `ordered={false}`: zakładki
 * pokazują wtedy ikonę zamiast numeru, a karta nie ma wyblakłej cyfry.
 *
 * Komponent serwerowy — interaktywność żyje w `ProcessStepsTabs` (jak
 * FAQSection → FAQAccordion). Renderuje WŁASNĄ sekcję (`Section` z tłem `dotGrid`),
 * NIE owijaj w <Section>.
 *
 * @param steps     - [{ title, icon, description, bullets[] }]; `icon` to klucz z `ICONS`
 *                    w ProcessStepsTabs (dane serializowalne, jak w ServicesAccordion)
 * @param ordered   - czy pozycje są sekwencją (numeracja 01/02…); domyślnie tak
 * @param tabsLabel - aria-label listy zakładek (np. „Wskazania" zamiast „Etapy")
 */
export default function ProcessSteps({
  id,
  eyebrow,
  title,
  description,
  steps,
  ordered = true,
  tabsLabel = 'Etapy',
  image,
  imageAlt,
  ctaHref = '/rejestracja/',
  ctaLabel = 'Umów konsultację',
}) {
  return (
    <Section id={id} bg="light" dotGrid>
      <SectionHeader subtitle={eyebrow} title={title} description={description} />

      <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        <ProcessStepsTabs
          sectionId={id}
          steps={steps}
          ordered={ordered}
          tabsLabel={tabsLabel}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          className="lg:col-span-2"
        />

        {/* Zdjęcie dopełnia wysokość wiersza zakładek (grid stretch) — tylko desktop,
            żeby na mobile nie dokładać ciężaru pod akordeonem */}
        <figure className="relative hidden overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 lg:block">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 30vw, 0px"
            className="object-cover object-[50%_18%]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-primary-950/25 to-transparent"
          />
        </figure>
      </div>
    </Section>
  );
}
