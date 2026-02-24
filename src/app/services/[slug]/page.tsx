import { services } from "@/data/mockData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Universal Components
import { ServiceHero } from "@/components/services/ServiceHero";
import { TrustStrip } from "@/components/services/TrustStrip";
import { DeliverablesGrid } from "@/components/services/DeliverablesGrid";
import { ProcessFlow } from "@/components/services/ProcessFlow";
import { ServiceFAQs } from "@/components/services/ServiceFAQs";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { TechnicalExcellence } from "@/components/services/TechnicalExcellence";
import { ServiceResults } from "@/components/services/ServiceResults";
import { EngagementModels } from "@/components/services/EngagementModels";

// Specialized Details Components
import { EngineeringDetails } from "@/components/services/EngineeringDetails";
import { MarketingStrategy } from "@/components/services/MarketingStrategy";
import { DesignPortfolio } from "@/components/services/DesignPortfolio";
import { ComplianceDetails } from "@/components/services/ComplianceDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found | EDUNEX" };

  return {
    title: `${service.title} | ${service.outcomeHeadline} | EDUNEX`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-black">
      {/* 1. Conversion Hero */}
      <ServiceHero
        badge={service.category}
        title={
          <span dangerouslySetInnerHTML={{ __html: service.outcomeHeadline }} />
        }
        description={service.description}
        benefits={service.keyBenefits}
        serviceTitle={service.slug}
      />

      {/* 2. Trust Signals Strip */}
      <TrustStrip items={(service as any).trustItems} />

      {/* 3. Capability Cards (What We Deliver) */}
      <DeliverablesGrid items={service.deliverables} />

      {/* 4. Type-Specific Details / Strategy */}
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

      {/* 5. Process Timeline */}
      <ProcessFlow steps={service.processSteps || []} />

      {/* 6. Measurable Results */}
      <ServiceResults
        title={
          <span
            dangerouslySetInnerHTML={{ __html: (service as any).resultsTitle }}
          />
        }
        results={(service as any).results}
        testimonial={(service as any).testimonial}
      />

      {/* 7. Engagement Models - Only for professional services */}
      {service.type !== "compliance" && (
        <EngagementModels
          title={(service as any).engagementTitle}
          subtitle={(service as any).engagementSubtitle}
          models={(service as any).engagementModels}
          serviceTitle={service.slug}
        />
      )}

      {/* 8. FAQ Accordion */}
      <ServiceFAQs
        items={service.faqs || []}
        title={(service as any).faqTitle}
        subtitle={(service as any).faqSubtitle}
      />

      {/* 9. Final CTA Section */}
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
    </main>
  );
}
