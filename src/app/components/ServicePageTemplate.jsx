import Section from './Section';
import HeroSection from './HeroSection';
import FAQSection from './FAQSection';
import ExpertInfoSection from './ExpertInfoSection';
import CTASection from './CTASection';
import Testimonials from './Testimonials';
import RelatedServices from './RelatedServices';
import KnowledgeSection from './KnowledgeSection';
import AuthorBio from './AuthorBio';
import ClinicGallery from './ClinicGallery';
import ServiceSchema from './schema/ServiceSchema';
import BreadcrumbSchema from './schema/BreadcrumbSchema';
import FAQPageSchema from './schema/FAQPageSchema';
import { getTestimonials } from '@/config/testimonials';
import { getWhyUs } from '@/config/whyUs';
import { getRelatedServices, getHubForSlug } from '@/config/relatedServices';
import { getKnowledge } from '@/config/knowledge';
import { getPageAuthor } from '@/config/authors';
import { CLINIC_GALLERY } from '@/config/gallery';

export default function ServicePageTemplate({
  breadcrumbs,
  heroTitle,
  heroSubtitle,
  heroDescription,
  expertInfo,
  faq,
  childServices,
  childServicesTitle,
  childServicesSubtitle,
  slug,
  schemaType,
  usesDevice,
  testimonials,
  faqImage,
  faqImageAlt,
}) {
  // Opinie relewantne z kategorią usługi (z heroSubtitle). Strona może nadpisać
  // własną tablicą `testimonials`, albo ukryć sekcję przekazując `testimonials={[]}`.
  const testimonialItems = testimonials ?? getTestimonials(heroSubtitle);
  // Treść „Dlaczego my" relewantna z usługą (per-slug, fallback po kategorii).
  const whyUs = getWhyUs(slug, heroSubtitle);
  // „Kompendium wiedzy" pod hero — treść per-kategoria (fallback: KNOWLEDGE.default).
  const knowledge = getKnowledge(slug, heroSubtitle);
  // Podpis autora/specjalistki (EEAT) — tylko stomatologia i medycyna estetyczna
  // (null dla USG/wlewów). Patrz src/config/authors.js (decyzja: Ivanna Bas).
  const author = getPageAuthor(heroSubtitle);
  // „Powiązane zabiegi" — relewantne linki wyprowadzone z modelu danych (per slug).
  // Jawna lista `childServices` (kuratorska na stronie) nadpisuje usługi, zachowując
  // intro + CTA do właściwego hubu kategorii.
  const autoRelated = getRelatedServices(slug);
  let related = autoRelated;
  if (childServices?.length) {
    const hub = getHubForSlug(slug);
    related = {
      subtitle: childServicesSubtitle || autoRelated?.subtitle || 'Nasze usługi',
      title: childServicesTitle || autoRelated?.title || 'Powiązane zabiegi',
      intro: autoRelated?.intro,
      ctaHref: autoRelated?.ctaHref || hub.href,
      ctaLabel: autoRelated?.ctaLabel || hub.label,
      services: childServices,
    };
  }

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={heroTitle}
        description={heroDescription}
        url={`/${slug}/`}
        schemaType={schemaType}
        usesDevice={usesDevice}
      />
      {faq && <FAQPageSchema questions={faq} />}

      {/* Hero */}
      <HeroSection
        id="hero"
        variant="service"
        breadcrumbs={breadcrumbs}
        subtitle={heroSubtitle}
        title={heroTitle}
        description={heroDescription}
      />

      {/* Kompendium wiedzy — edytorialny blok pod hero (globalny komponent).
          Treść per-kategoria (src/config/knowledge.js); sekwencja: ciemny hero →
          jasne kompendium → cream galeria → białe informacje. */}
      <KnowledgeSection id="kompendium" {...knowledge} />

      {/* Galeria — wnętrza i sprzęt (globalny komponent). Full-bleed slider
          na desktopie; dane wspólne z homepage (src/config/gallery.js). */}
      <ClinicGallery id="galeria" images={CLINIC_GALLERY} />

      {/* Expert content */}
      {expertInfo && expertInfo.length > 0 && (
        <Section id="informacje">
          <ExpertInfoSection eyebrow="Informacje od specjalisty" items={expertInfo} />
        </Section>
      )}

      {/* Autor / specjalistka — podpis EEAT pod treścią. Tylko stomatologia i
          medycyna estetyczna (USG/wlewy → author=null, sekcja się nie renderuje).
          Treść/osoba z src/config/authors.js (decyzja: Ivanna Bas na obu). */}
      {author && <AuthorBio {...author} />}

      {/* Powiązane zabiegi — relewantne linkowanie wewnętrzne (globalny komponent) */}
      {related && related.services?.length > 0 && <RelatedServices {...related} />}

      {/* FAQ — wspólna sekcja (renderuje własny <section bg-cream>, jak na stronie głównej) */}
      {faq && faq.length > 0 && (
        <FAQSection
          items={faq}
          contactHref="/kontakt/"
          image={faqImage}
          imageAlt={faqImageAlt}
        />
      )}

      {/* Opinie Pacjentów — dobrane tematycznie (PLACEHOLDER, patrz testimonials.js) */}
      {testimonialItems && testimonialItems.length > 0 && (
        <Testimonials id="opinie" items={testimonialItems} />
      )}

      {/* CTA — „Dlaczego my" dobrane do usługi (patrz src/config/whyUs.js) */}
      <CTASection id="dlaczego-my" {...whyUs} />
    </>
  );
}
