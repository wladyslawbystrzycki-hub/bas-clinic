import Link from 'next/link';
import { CLINIC } from '@/config/clinic';
import { getFullUrl } from '@/lib/siteUrl';
import JsonLd from './schema/JsonLd';

/**
 * AuthorBio — zwięzły podpis autora/specjalistki pod treścią strony usługi (EEAT).
 *
 * Po co: na YMYL-owych stronach medycznych Google premiuje jasne autorstwo —
 * KTO stoi za treścią, z jakimi kompetencjami. Ten blok podaje imię + tytuł
 * (lek. med.), krótki opis kompetencji i link do pełnego profilu (/o-nas/) jako
 * encji autora, a dodatkowo emituje dane strukturalne `Person` (schema.org).
 *
 * Zakres/treść: rozwiązywane przez `getPageAuthor(heroSubtitle)` (src/config/authors.js)
 * i wpinane automatycznie przez `ServicePageTemplate` — tylko stomatologia i
 * medycyna estetyczna (USG/wlewy bez podpisu).
 *
 * Server Component (bez JS). Avatar: zdjęcie z `image`, a gdy puste — elegancki
 * monogram na grafitowym dysku (jak FoundersSlider); podmieni się automatycznie,
 * gdy w clinic.js pojawi się wycinanka.
 *
 * ⚠️ `blurb` to opis kompetencji — NIE obietnice skuteczności/leczenia ani
 * wymyślone liczby (UOKiK/Omnibus + reklama usług medycznych).
 */
export default function AuthorBio({
  id = 'autor',
  name,
  role,
  image,
  initials,
  blurb,
  profileHref = '/o-nas/',
  profileLabel = 'Poznaj pełny profil',
  eyebrow = 'O specjalistce',
}) {
  if (!name) return null;

  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    ...(role ? { jobTitle: role } : {}),
    worksFor: {
      '@type': 'MedicalOrganization',
      '@id': `${CLINIC.url}/#organization`,
      name: CLINIC.name,
    },
    url: getFullUrl(profileHref),
    ...(image ? { image: getFullUrl(image) } : {}),
  };

  return (
    <section id={id} className="scroll-mt-20 bg-white py-12 sm:py-14 lg:py-16">
      <JsonLd data={personData} />
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <figure className="flex flex-col items-center gap-6 rounded-3xl border border-gray-100 bg-cream p-7 text-center shadow-sm sm:flex-row sm:items-center sm:gap-8 sm:p-9 sm:text-left lg:gap-12 lg:p-10">
          <Avatar image={image} initials={initials} name={name} />
          <figcaption className="min-w-0 sm:flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-600">
              {eyebrow}
            </p>
            <p className="mt-2 font-display text-xl font-bold tracking-tight text-primary-900 sm:text-2xl">
              {name}
            </p>
            {role && <p className="mt-1 text-sm font-medium text-primary-600">{role}</p>}
            {blurb && (
              <p className="mt-3.5 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-[0.95rem]">
                {blurb}
              </p>
            )}
          </figcaption>
          <Link
            href={profileHref}
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-primary-200 bg-white px-5 py-3 text-sm font-semibold text-primary-700 shadow-sm transition-colors hover:border-primary-300 hover:text-primary-900 sm:self-center lg:ml-auto"
          >
            {profileLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </figure>
      </div>
    </section>
  );
}

/** Avatar — zdjęcie (jeśli jest) lub monogram na grafitowym dysku z dekoracyjnym
 *  przerywanym pierścieniem. Spójny z wizualem FoundersSlider. */
function Avatar({ image, initials, name }) {
  return (
    <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
      <svg viewBox="0 0 112 112" fill="none" aria-hidden className="absolute inset-0 h-full w-full">
        <circle
          cx="56"
          cy="56"
          r="55"
          stroke="var(--color-primary-300)"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          strokeDasharray="1.5 6"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-[6%] overflow-hidden rounded-full bg-primary-950">
        <span
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,var(--color-primary-800)_0%,transparent_60%)]"
        />
        {image ? (
          // Wycinanka-portret w kolistym dysku, dopasowana `object-contain object-bottom`
          // + `h-[98%]` — nie sztywny box. next/image nic tu nie zyska (mały,
          // przezroczysty webp) i kolidowałby ze skalą — świadomie zostaje <img>
          // (ta sama zasada co hero i FoundersSlider).
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={name}
            width={224}
            height={224}
            loading="lazy"
            decoding="async"
            className="absolute bottom-0 left-1/2 h-[98%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-display text-3xl font-semibold tracking-wide text-secondary-400">
            {initials}
          </span>
        )}
      </div>
    </div>
  );
}

function ArrowRight({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 12h16m0 0-6-6m6 6-6 6" />
    </svg>
  );
}
