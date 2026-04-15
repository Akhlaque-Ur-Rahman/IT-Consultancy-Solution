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
import { TrustCarousel } from "@/components/TrustCarousel";
import { MetricsCounter } from "@/components/MetricsCounter";
import { clientLogos, metrics } from "@/data/mockData";

const solutionsFaqs = [
  {
    question: "Can new software talk to our old billing PC or Tally export?",
    answer:
      "Yes. We connect step by step. Often we sync Excel or Tally data first, then move daily work to the new screen. You avoid a risky big bang switch.",
  },
  {
    question: "Where is our data stored? Can it stay in India?",
    answer:
      "We use trusted Indian region cloud hosts when you want data close to home. Backups run on schedule. We explain every choice in plain words before we start.",
  },
  {
    question: "How long does a full billing or godown build take?",
    answer:
      "Most shop or godown systems go live in three to six weeks for core use. Bigger plants can take longer. You still get usable billing or stock modules early so the counter does not wait for every extra feature.",
  },
  {
    question: "What if my staff are not strong on computers?",
    answer:
      "We train on site in Hindi or English until the flow feels normal. Screens stay simple. We watch real rush hour before we freeze the layout.",
  },
  {
    question: "Who owns the work after we pay?",
    answer:
      "You own what we build for you. We hand files and access. You can stay on our support plan, but your data and code are not locked away.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Solutions", item: "/solutions" },
          ]}
        />
        {/* 1. Problem → Solution Intro */}
        <ProblemSolutionHero />

        <TrustCarousel logos={clientLogos} />
        <MetricsCounter metrics={metrics} />

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

        {/* FAQs */}
        <FAQSection
          faqs={solutionsFaqs}
          title={
            <>
              Questions about{" "}
              <span className="text-[#f59e0b]">our solutions</span>
            </>
          }
          description="Straight answers for owners who run shops, clinics, and godowns in Bihar."
          sectionClassName="border-t border-[#262626] bg-black"
        />

        {/* 9. Final CTA */}
        <PremiumFinalCTA />
      </div>
    </main>
  );
}
