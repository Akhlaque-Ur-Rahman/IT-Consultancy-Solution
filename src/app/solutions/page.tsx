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

export default function SolutionsPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* 1. Problem → Solution Intro */}
      <ProblemSolutionHero />

      {/* 2. Industry Use Cases */}
      <IndustryVerticals />

      {/* 3. Solution Cards (Showcase) */}
      <SolutionShowcase />

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

      {/* 9. Final CTA */}
      <PremiumFinalCTA />
    </main>
  );
}
