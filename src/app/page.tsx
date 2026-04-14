import { HeroModernAnimated as HeroModern } from "@/components/HeroModernAnimated";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustCarousel } from "@/components/TrustCarousel";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { MetricsCounter } from "@/components/MetricsCounter";
import { LocalSEOSection } from "@/components/LocalSEOSection";
import { GMBStyleReviews } from "@/components/GMBStyleReviews";
import { FAQSection } from "@/components/FAQSection";
import { SectionAmbient } from "@/components/SectionAmbient";
import { ExpandableAuthorityContent } from "@/components/ExpandableAuthorityContent";

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
import { COMPANY_INFO, SITE_URL_HOME, SEO_KEYWORDS } from "@/config/company";

export const metadata: Metadata = {
  title:
    "Software Development Patna | Billing Software & GST Bihar | EDUNEX",
  description:
    "Patna IT company for billing software, ERP, GST, web & digital marketing for Bihar SMEs. Hands-on delivery since 2018.",
  keywords: SEO_KEYWORDS.primary.concat(SEO_KEYWORDS.secondary),
  alternates: {
    canonical: SITE_URL_HOME,
  },
  openGraph: {
    url: SITE_URL_HOME,
    title: "Software Development Patna | Billing & GST Bihar | EDUNEX",
    description:
      "Patna IT company for billing, ERP, GST, web & digital marketing for Bihar SMEs. Hands-on delivery since 2018.",
    type: "website",
  },
};

export default function HomePage() {
  const trustProjectsLabel =
    "Hands-on delivery · growing portfolio of regional brands";

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
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema items={[{ name: "Home", item: "/" }]} />
        <HeroModern />

        <TrustCarousel logos={clientLogos} />

        <SectionAmbient
          preset="surface"
          className="border-t border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              Everything You Need to{" "}
              <span className="text-[#f59e0b]">{"Automate & Grow"}</span> Your
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
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} href={category.href} className="block h-full">
                  <div className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_12px_40px_-18px_rgba(0,0,0,0.85)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f59e0b]/35 hover:shadow-[0_24px_56px_-20px_rgba(0,0,0,0.75),0_0_48px_-16px_rgba(245,158,11,0.14)]">
                    <div
                      className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#f59e0b]/[0.06] blur-3xl transition-opacity duration-500 group-hover:bg-[#f59e0b]/[0.1]"
                      aria-hidden
                    />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-70" />
                    <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.06] transition-all duration-300 group-hover:border-[#f59e0b]/40 group-hover:ring-[#f59e0b]/20">
                      <Icon className="h-7 w-7 text-gray-200 transition-all duration-300 group-hover:scale-105 group-hover:text-[#fbbf24]" />
                    </div>
                    <h3 className="relative mb-2 text-lg font-semibold tracking-tight text-white">
                      {category.title}
                    </h3>
                    <div className="relative mb-3 h-px w-10 rounded-full bg-gradient-to-r from-[#f59e0b]/80 to-transparent opacity-70 transition-all duration-300 group-hover:w-14 group-hover:opacity-100" />
                    <p className="relative text-sm leading-relaxed text-gray-400 [text-wrap:pretty]">
                      {category.description}
                    </p>
                    <div className="relative mt-5 flex items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors group-hover:text-[#fbbf24]">
                      <span>Explore</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-[0.35] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] opacity-70 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
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
          <div className="relative mt-20">
            <div
              className="pointer-events-none absolute -inset-[1px] rounded-[1.05rem] opacity-75"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.28) 0%, rgba(245,158,11,0.06) 45%, transparent 68%)",
                filter: "blur(18px)",
              }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-[#f59e0b]/30 bg-[#121212] p-8 shadow-[0_0_0_1px_rgba(245,158,11,0.08),0_28px_80px_-32px_rgba(0,0,0,0.9),0_0_56px_-24px_rgba(245,158,11,0.14)] lg:p-16">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/45 to-transparent" />
              <div className="relative z-[1] max-w-4xl mx-auto prose prose-invert prose-lg md:prose-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 border-b border-[#262626] pb-6">
                Why Bihar Businesses Choose Us as Their Technology Partner
              </h2>

              <ExpandableAuthorityContent>
              <div className="space-y-8 text-gray-400 leading-relaxed">
                <div>
                  <h3 className="text-2xl font-semibold text-white border-l-2 border-[#f59e0b] pl-4 mb-4">
                    The Problem: Losing Money to Manual Work and Mistakes
                  </h3>
                  <p className="mb-4">
                    If you run a business in Bihar—whether it&apos;s a wholesale
                    godown in Patna, a clinic in Gaya, or a factory in
                    Muzaffarpur—you face the exact same problems. Staff making
                    mistakes in handwritten bills, ledgers constantly not
                    matching up, marketing budgets wasted on newspaper ads that
                    don&apos;t bring customers, and the constant headache of filing
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
                  <h3 className="text-2xl font-semibold text-white border-l-2 border-[#f59e0b] pl-4 mb-4">
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
                  <h3 className="text-2xl font-semibold text-white border-l-2 border-[#f59e0b] pl-4 mb-4">
                    More Than Just Code: End-to-End Compliance & Support
                  </h3>
                  <p className="mb-4">
                    We know that pure software isn&apos;t enough. That is why we
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
                  <h3 className="text-2xl font-semibold text-white border-l-2 border-[#f59e0b] pl-4 mb-4">
                    A Partner You Can Meet Face-to-Face
                  </h3>
                  <p className="mb-4">
                    The biggest advantage we offer is our physical presence. We
                    don&apos;t just email you a zip file and disappear. We sit in
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
              </ExpandableAuthorityContent>
            </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button
                variant="outline"
                className="group rounded-xl border border-white/15 bg-white/[0.04] px-10 py-6 text-base text-gray-100 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#f59e0b]/40 hover:bg-[#f59e0b]/10 hover:text-white hover:shadow-[0_0_40px_-12px_rgba(245,158,11,0.2)]"
              >
                View all services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
        </SectionAmbient>

        <MetricsCounter metrics={metrics} />

        <SectionAmbient
          preset="surfaceRaised"
          className="border-t border-[#262626] py-16 md:py-24"
        >
          <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="relative mb-16 text-center">
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-32 w-[min(100%,28rem)] -translate-x-1/2 rounded-full bg-[#f59e0b]/[0.07] blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-4 py-2 shadow-[0_0_32px_-12px_rgba(245,158,11,0.35)]">
                <span className="text-sm font-semibold text-[#fbbf24]">
                  Success Stories
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
                How We Help{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Founders &amp; Teams
                </span>{" "}
                Succeed
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl [text-wrap:balance]">
                See how our simple, reliable solutions solved real problems for
                local businesses and large companies alike.
              </p>
            </div>
          </div>

          {/* Case Study Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                href={`/case-studies/${caseStudy.slug}`}
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
          <div className="mt-14 text-center">
            <Link href="/case-studies">
              <Button
                variant="outline"
                className="group rounded-xl border border-white/15 bg-white/[0.04] px-10 py-6 text-base text-gray-100 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#f59e0b]/40 hover:bg-[#f59e0b]/10 hover:text-white hover:shadow-[0_0_40px_-12px_rgba(245,158,11,0.2)]"
              >
                View all case studies
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-t border-[#262626]"
        >
          <GMBStyleReviews
            reviews={gmbReviews}
            sectionClassName="border-transparent bg-transparent"
          />
        </SectionAmbient>

        <SectionAmbient preset="surface" className="border-t border-[#262626]">
          <LocalSEOSection sectionClassName="border-transparent bg-transparent" />
        </SectionAmbient>

        <SectionAmbient preset="surface" className="border-t border-[#262626]">
          <FAQSection
            faqs={faqs}
            sectionClassName="border-transparent bg-transparent"
            title={
              <>
                Common Questions{" "}
                <span className="bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-600 bg-clip-text font-normal text-transparent">
                  Answered Simply
                </span>
              </>
            }
            description="Everything you need to know about our services, pricing, and how we work with you."
          />
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="relative border-t border-[#262626] py-16 md:py-24"
        >
        <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center">
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
                  className="border border-white/20 text-white hover:bg-white/10 px-10 py-7 text-lg transition-all duration-200"
                >
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="border border-[#262626] text-gray-300 hover:bg-[#262626] hover:text-white px-10 py-7 text-lg transition-all duration-200"
                >
                  Read Our Blog
                </Button>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <span>✓ {trustProjectsLabel}</span>
              <span>•</span>
              <span>✓ {COMPANY_INFO.yearsOfExperience}+ Years Experience</span>
              <span>•</span>
              <span>✓ Reliable Infrastructure</span>
              <span>•</span>
              <span>✓ Performance Monitoring</span>
            </div>
          </div>
        </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
