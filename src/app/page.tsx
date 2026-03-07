import { HeroModernAnimated as HeroModern } from "@/components/HeroModernAnimated";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustCarousel } from "@/components/TrustCarousel";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { MetricsCounter } from "@/components/MetricsCounter";
import { LocalSEOSection } from "@/components/LocalSEOSection";
import { GMBStyleReviews } from "@/components/GMBStyleReviews";
import { FAQSection } from "@/components/FAQSection";

import {
  services,
  clientLogos,
  caseStudies,
  metrics,
  faqs,
  gmbReviews,
} from "@/data/mockData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Database, TrendingUp, Shield } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { COMPANY_INFO } from "@/config/company";
import { WebSiteSchema } from "@/components/WebSiteSchema";
import { OrganizationSchema } from "@/components/OrganizationSchema";

export const metadata: Metadata = {
  title: "EDUNEX - IT Consulting & Custom Software Development in Bihar",
  description:
    "IT Consulting & Custom Software Development for SMEs in Bihar. Build billing software, mobile apps, and manage your GST legally.",
  alternates: {
    canonical: "https://edunexservices.in",
  },
};

export default function HomePage() {
  // SEO-optimized service categories
  const primaryServices = services.filter((s) =>
    ["web-app-dev", "crm-erp", "digital-marketing", "compliance"].includes(
      s.id,
    ),
  );

  const serviceCategories = [
    {
      id: "it-consulting",
      icon: Code,
      title: "Custom Software",
      description:
        "Affordable web and mobile apps built to automate your local business workflows",
      href: "/services?category=development",
    },
    {
      id: "software-dev",
      icon: Database,
      title: "ERP & Billing Systems",
      description:
        "Easy-to-use billing, inventory, and staff management systems for distributors",
      href: "/services?category=solutions",
    },
    {
      id: "digital-marketing",
      icon: TrendingUp,
      title: "Local Digital Marketing",
      description:
        "Google Maps ranking and local Facebook ads to bring walk-in customers to your shop",
      href: "/services?category=marketing",
    },
    {
      id: "compliance",
      icon: Shield,
      title: "GST & Compliance",
      description:
        "Headache-free firm registration, FSSAI, trade licenses, and monthly GST filing in Bihar",
      href: "/compliance",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }]} />
      {/* Hero Section */}
      {/* SEO: H1 is in Hero component */}
      <HeroModern />

      {/* Trust Signals - Client Logos */}
      <TrustCarousel logos={clientLogos} />

      {/* SEO Section: Main Services - H2 */}
      <section className="py-12 md:py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              Everything You Need to{" "}
              <span className="text-[#f59e0b]">Automate & Grow</span> Your
              Business in Bihar
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From building custom billing software for your godown to managing
              your GST returns and ranking your clinic on Google—we provide
              practical, affordable IT solutions for local SMEs.
            </p>
          </div>

          {/* Service Category Grid - H3 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  passHref
                  legacyBehavior={false}
                >
                  <div className="bg-[#121212] border border-[#262626] rounded-lg p-6 hover:border-[#f59e0b]/50 transition-all duration-200 group cursor-pointer h-full">
                    <Icon className="w-12 h-12 text-[#f59e0b] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#f59e0b] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Detailed Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryServices.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="block h-full"
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  delay={index * 0.1}
                />
              </Link>
            ))}
          </div>

          {/* Deep Technical Authority Section (SEO & Content Upgrade) */}
          <div className="mt-20 bg-[#121212] border border-[#262626] rounded-2xl p-8 lg:p-16">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg md:prose-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 border-b border-[#262626] pb-6">
                Why Bihar Businesses Choose Us as Their Technology Partner
              </h2>

              <div className="space-y-8 text-gray-400 leading-relaxed">
                <div>
                  <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                    The Problem: Losing Money to Manual Work and Mistakes
                  </h3>
                  <p className="mb-4">
                    If you run a business in Bihar—whether it's a wholesale
                    godown in Patna, a clinic in Gaya, or a factory in
                    Muzaffarpur—you face the exact same problems. Staff making
                    mistakes in handwritten bills, ledgers constantly not
                    matching up, marketing budgets wasted on newspaper ads that
                    don't bring customers, and the constant headache of filing
                    proper GST to avoid heavy government fines.
                  </p>
                  <p className="mb-4">
                    Most small businesses try to fix this by hiring expensive
                    agencies from Delhi or Bangalore. These agencies speak in
                    confusing tech jargon, sell complicated software that your
                    staff cannot understand, and charge massive corporate fees.
                    When you actually need emergency support, they are thousands
                    of kilometers away.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                    The Solution: Simple Software Built for Local Workflows
                  </h3>
                  <p className="mb-4">
                    At EDUNEX, we do not sell oversized corporate software. We
                    build simple, extremely fast, and highly secure digital
                    systems strictly tailored to how regional SMEs operate. We
                    design interfaces so simple that even staff with zero
                    computer experience can learn to generate a GST bill or
                    track inventory in one afternoon.
                  </p>
                  <p className="mb-4">
                    Our software works even when the internet drops, keeping
                    your billing counter moving, and syncs safely to the cloud
                    the second your connection returns. Everything is backed up,
                    safe from theft or hard drive crashes.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                    More Than Just Code: End-to-End Compliance & Support
                  </h3>
                  <p className="mb-4">
                    We know that pure software isn't enough. That is why we
                    provide end-to-end business support right here in Bihar. We
                    will register your new firm, secure your FSSAI or trade
                    licenses, and handle your monthly GST return filings.
                  </p>
                  <p className="mb-4">
                    When you want to grow, we optimize your Google Maps profile
                    so local families can find your shop instantly, and run
                    targeted Facebook ads that bring real foot traffic to your
                    location. You get an honest, practical strategy built on
                    local market understanding, not empty promises.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                    A Partner You Can Meet Face-to-Face
                  </h3>
                  <p className="mb-4">
                    The biggest advantage we offer is our physical presence. We
                    don't just email you a zip file and disappear. We sit in
                    your godown, watch how your staff works, and train them
                    perfectly. If a system goes down or if you face a critical
                    accounting error, our technical team is a quick drive away.
                  </p>
                  <p>
                    Partnering with EDUNEX means getting a complete IT
                    department working exactly on your budget, fully dedicated
                    to making your local business more organized, profitable,
                    and stress-free.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-black font-semibold px-10 py-6 text-base transition-all duration-200 group">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Counter - Trust Signals */}
      <MetricsCounter metrics={metrics} />

      {/* Case Studies Section - H2 */}
      <section className="py-20 bg-[#0a0a0a] border-t border-[#262626]">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-4">
              <span className="text-sm font-medium text-[#f59e0b]">
                Success Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How We Helped{" "}
              <span className="text-[#f59e0b]">90+ Business Owners</span>{" "}
              Succeed
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              See how our simple, reliable solutions solved real problems for
              local businesses and large companies alike.
            </p>
          </div>

          {/* Case Study Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                href="/case-studies"
                className="block h-full"
              >
                <CaseStudyCard
                  title={caseStudy.title}
                  client={caseStudy.client}
                  industry={caseStudy.industry}
                  image={caseStudy.image}
                  impact={caseStudy.impact}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-black font-semibold px-10 py-6 text-base transition-all duration-200 group">
                View All Case Studies
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* GMB-Style Reviews - Social Proof */}
      <GMBStyleReviews reviews={gmbReviews} />

      {/* Local SEO Section - Geographic + NAP */}
      <LocalSEOSection />

      {/* FAQ Section - Schema.org */}
      <FAQSection
        faqs={faqs}
        title={
          <>
            Common Questions{" "}
            <span className="text-[#f59e0b]">Answered Simply</span>
          </>
        }
        description="Everything you need to know about our services, pricing, and how we work with you."
      />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] border-t border-[#262626] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f59e0b] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f59e0b] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 text-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your{" "}
              <span className="text-[#f59e0b]">Success Story</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discuss your project with us today. No complicated jargon, no
              hidden fees — just honest advice and a plan to help your business
              grow.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-black font-semibold px-10 py-7 text-lg transition-all duration-200">
                  Schedule Free Consultation in Bihar
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black px-10 py-7 text-lg transition-all duration-200"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <span>✓ 90+ Projects Delivered</span>
              <span>•</span>
              <span>✓ {COMPANY_INFO.yearsOfExperience}+ Years Experience</span>
              <span>•</span>
              <span>✓ Reliable Infrastructure</span>
              <span>•</span>
              <span>✓ Performance Monitoring</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
