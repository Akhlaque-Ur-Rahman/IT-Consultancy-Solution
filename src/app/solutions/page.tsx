"use client";

import ProblemSolutionHero from "@/components/solutions/ProblemSolutionHero";
import IndustryVerticals from "@/components/solutions/IndustryVerticals";
import SolutionShowcase from "@/components/solutions/SolutionShowcase";
import IntegrationsGrid from "@/components/solutions/IntegrationsGrid";
import DeploymentOptions from "@/components/solutions/DeploymentOptions";
import ImplementationProcess from "@/components/solutions/ImplementationProcess";
import ValuePropositions from "@/components/solutions/ValuePropositions";
import UnifiedEcosystem from "@/components/solutions/UnifiedEcosystem";
import PremiumFinalCTA from "@/components/solutions/PremiumFinalCTA";
import SocialProofBlock from "@/components/solutions/SocialProofBlock";
import DecisionHelper from "@/components/solutions/DecisionHelper";
import { FAQSection } from "@/components/FAQSection";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

const solutionsFaqs = [
  {
    question:
      "How do your enterprise solutions integrate with legacy hardware or databases?",
    answer:
      "Our integration methodology relies on creating secure middleware layers. We construct RESTful or GraphQL APIs that communicate safely with legacy on-premise databases (like older SQL Server or Oracle instances) while exposing a modern, fast Next.js frontend to your users or staff. This prevents the need for a risky 'rip-and-replace' while instantly modernizing the user experience.",
  },
  {
    question:
      "Do you offer localized cloud deployment within India to comply with data residency laws?",
    answer:
      "Absolutely. We routinely architect deployments on AWS Asia Pacific (Mumbai) or local localized data centers. For compliance-heavy industries like healthcare or finance in India, we ensure strict data sovereignty, meaning your sensitive customer data never crosses international borders.",
  },
  {
    question:
      "What is your typical implementation timeline for a custom CRM/ERP ecosystem?",
    answer:
      "A complete custom CRM or ERP implementation generally scales between 3 to 6 months. However, we deploy using Agile sprints. This means your team will receive usable, core modules (like lead tracking or basic invoicing) within the first 4-6 weeks, allowing you to recognize ROI while we continue building secondary features.",
  },
  {
    question:
      "How do you handle user adoption training for non-technical staff?",
    answer:
      "Software is useless if your team refuses to use it. Our 'Implementation Process' includes dedicated user-acceptance testing (UAT) and guided onboarding sessions. We design our UX specifically for the least technical user in your office, minimizing friction and flattening the learning curve.",
  },
  {
    question: "Who owns the codebase after the solution is deployed?",
    answer:
      "You do. Upon final payment and successful deployment, EDUNEX Services transfers full intellectual property (IP) rights and the complete source code repository to your organization. We offer ongoing SLA support, but you are never held hostage by vendor lock-in.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-black min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Solutions", item: "/solutions" },
        ]}
      />
      {/* 1. Problem → Solution Intro */}
      <ProblemSolutionHero />

      {/* 2. Industry Use Cases */}
      <IndustryVerticals />

      {/* 2.5 Social Proof (Validation) */}
      <SocialProofBlock />

      {/* 3. Solution Cards (Showcase) */}
      <SolutionShowcase />

      {/* 3.5 Decision Support */}
      <DecisionHelper />

      {/* 4. Integrations */}
      <IntegrationsGrid />

      {/* 5. Deployment Options */}
      <DeploymentOptions />

      {/* 6. Implementation Process */}
      <ImplementationProcess />

      {/* 7. Value Propositions (Why Choose Us) */}
      <ValuePropositions />

      {/* 8. Unified Ecosystem Message */}
      <UnifiedEcosystem />

      {/* 8.5 Enterprise FAQs */}
      <FAQSection
        faqs={solutionsFaqs}
        title={
          <>
            Enterprise Solutions <span className="text-[#f59e0b]">FAQ</span>
          </>
        }
        description="Technical and operational answers for IT directors, founders, and executive decision-makers."
      />

      {/* 9. Final CTA */}
      <PremiumFinalCTA />
    </main>
  );
}
