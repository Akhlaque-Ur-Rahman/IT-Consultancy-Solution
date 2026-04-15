import { services } from "@/data/mockData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, SEO_KEYWORDS, META_TITLE_MAX, META_DESC_MAX, truncateMeta } from "@/config/company";

// Universal Components
import { ServiceHero } from "@/components/services/ServiceHero";
import { DeliverablesGrid } from "@/components/services/DeliverablesGrid";
import { ProcessFlow } from "@/components/services/ProcessFlow";
import { ServiceFAQs } from "@/components/services/ServiceFAQs";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceResults } from "@/components/services/ServiceResults";
import { EngagementModels } from "@/components/services/EngagementModels";

// Specialized Details Components
import { EngineeringDetails } from "@/components/services/EngineeringDetails";
import { MarketingStrategy } from "@/components/services/MarketingStrategy";
import { DesignPortfolio } from "@/components/services/DesignPortfolio";
import { ComplianceDetails } from "@/components/services/ComplianceDetails";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";
import { ServiceSchema } from "@/components/ServiceSchema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found | EDUNEX" };

  const serviceKw = SEO_KEYWORDS.serviceKeywords[slug];
  const baseDesc = service.description;
  const metaDesc =
    baseDesc.length >= META_DESC_MAX
      ? truncateMeta(baseDesc, META_DESC_MAX)
      : baseDesc.length < 120
        ? `${baseDesc} Local help in Patna for shop and godown owners.`
        : baseDesc;
  const fullDesc = truncateMeta(metaDesc, META_DESC_MAX);
  const fullTitle = truncateMeta(
    `${service.title} | Patna & Bihar | EDUNEX`,
    META_TITLE_MAX
  );

  const s = service as {
    heroImage?: string;
    heroImageAlt?: string;
  };
  const ogImagePath = s.heroImage ?? "/Services/web-app.webp";
  const ogImageAlt =
    s.heroImageAlt ??
    `${service.title} — EDUNEX Patna`;

  return {
    title: fullTitle,
    description: fullDesc,
    keywords: serviceKw ?? SEO_KEYWORDS.primary.slice(0, 4),
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
      title: fullTitle,
      description: fullDesc,
      type: "website",
      images: [
        {
          url: ogImagePath,
          width: 1600,
          height: 1000,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDesc,
      images: [{ url: ogImagePath, alt: ogImageAlt }],
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const heroPath = (service as { heroImage?: string }).heroImage;
  const serviceOgImage =
    heroPath != null ? `${SITE_URL}${heroPath}` : undefined;

  return (
    <main className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
      <ServiceSchema
        name={service.title}
        description={service.description}
        url={`${SITE_URL}/services/${service.slug}`}
        image={serviceOgImage}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: service.title, item: `/services/${service.slug}` },
        ]}
      />
      {/* 1. Conversion Hero */}
      <ServiceHero
        badge={service.category}
        title={
          <span dangerouslySetInnerHTML={{ __html: service.outcomeHeadline }} />
        }
        description={service.description}
        benefits={service.keyBenefits}
        serviceTitle={service.slug}
        heroImageSrc={(service as { heroImage?: string }).heroImage}
        heroImageAlt={(service as { heroImageAlt?: string }).heroImageAlt}
      />

      {/* 2. Capability Cards (What We Deliver) */}
      <DeliverablesGrid items={service.deliverables} />

      {/* 3. Type-Specific Details / Strategy */}
      {service.type === "engineering" && service.typeSpecificData && (
        <EngineeringDetails data={service.typeSpecificData as any} />
      )}
      {service.type === "marketing" && service.typeSpecificData && (
        <MarketingStrategy data={service.typeSpecificData as any} />
      )}
      {service.type === "design" && service.typeSpecificData && (
        <DesignPortfolio data={service.typeSpecificData as any} />
      )}
      {service.type === "compliance" && service.typeSpecificData && (
        <ComplianceDetails data={service.typeSpecificData as any} />
      )}

      {/* 4. Process Timeline */}
      <ProcessFlow steps={service.processSteps || []} />

      {/* 5. Measurable Results */}
      <ServiceResults
        title={
          <span
            dangerouslySetInnerHTML={{ __html: (service as any).resultsTitle }}
          />
        }
        results={(service as any).results}
        testimonial={(service as any).testimonial}
      />

      {/* 6. Engagement Models - Only for professional services */}
      {service.type !== "compliance" && (
        <EngagementModels
          title={(service as any).engagementTitle}
          subtitle={(service as any).engagementSubtitle}
          models={(service as any).engagementModels}
          serviceTitle={service.slug}
          sourcePath={`/services/${service.slug}`}
        />
      )}

      {/* 7. FAQ Accordion - matches homepage FAQ styling */}
      <SectionAmbient preset="surface" className="border-t border-[#262626]">
        <ServiceFAQs
          items={service.faqs || []}
          title={(service as any).faqTitle}
          subtitle={(service as any).faqSubtitle}
          sectionClassName="border-transparent bg-transparent"
        />
      </SectionAmbient>

      {/* 8. Final CTA Section */}
      <ServiceCTA
        badge={(service as any).ctaBadge}
        title={
          <span
            dangerouslySetInnerHTML={{ __html: (service as any).ctaTitle }}
          />
        }
        description={(service as any).ctaDescription}
        serviceTitle={service.slug}
      />
      </div>
    </main>
  );
}
