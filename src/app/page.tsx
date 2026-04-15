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
import {
  SITE_URL_HOME,
  SEO_KEYWORDS,
  OG_SHARE_IMAGE_PATH,
  OG_SHARE_IMAGE_ALT,
  OG_SHARE_IMAGE_WIDTH,
  OG_SHARE_IMAGE_HEIGHT,
} from "@/config/company";
import { PageFinalCTA } from "@/components/PageFinalCTA";
import { buildContactUrl } from "@/lib/contactPrefill";

export const metadata: Metadata = {
  title:
    "EDUNEX Patna | End-to-End Digital Solutions for Shops & Bihar",
  description:
    "Simple billing, stock control, and growth help for Bihar shops and clinics. Local Patna team since 2018. 90+ clients. 98% stay with us.",
  keywords: SEO_KEYWORDS.primary.concat(SEO_KEYWORDS.secondary),
  alternates: {
    canonical: SITE_URL_HOME,
  },
  openGraph: {
    url: SITE_URL_HOME,
    title: "EDUNEX Patna | Digital Solutions for Real Business Work",
    description:
      "End-to-End Digital Solutions Provider in Patna. Easy systems for billing, stock, and daily work across Bihar.",
    type: "website",
    images: [
      {
        url: OG_SHARE_IMAGE_PATH,
        width: OG_SHARE_IMAGE_WIDTH,
        height: OG_SHARE_IMAGE_HEIGHT,
        alt: OG_SHARE_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EDUNEX Patna | Digital Solutions for Real Business Work",
    description:
      "End-to-End Digital Solutions Provider in Patna. Easy systems for billing, stock, and daily work across Bihar.",
    images: [{ url: OG_SHARE_IMAGE_PATH, alt: OG_SHARE_IMAGE_ALT }],
  },
};

export default function HomePage() {
  const homeContactBase = buildContactUrl({
    serviceSlug: "consulting",
    ref: "/",
  });
  const homeConsultHref = `${homeContactBase}&intent=consultation`;

  // SEO-optimized service categories
  const primaryServices = services.filter((s) =>
    ["web-app-dev", "crm-erp", "digital-marketing", "compliance"].includes(
      s.id,
    ),
  );

  const serviceCategories = [
    {
      id: "custom-software",
      icon: Code,
      title: "Simple business software",
      description:
        "Web and phone tools shaped around how your shop or godown runs each day",
      href: "/services?category=development",
    },
    {
      id: "billing-stock",
      icon: Database,
      title: "Billing and stock control",
      description:
        "Clear bills, stock counts, and handovers your staff can learn without stress",
      href: "/services?category=solutions",
    },
    {
      id: "digital-marketing",
      icon: TrendingUp,
      title: "More customers nearby",
      description:
        "Help people find your shop on maps and reach you without big city ad waste",
      href: "/services?category=marketing",
    },
    {
      id: "compliance",
      icon: Shield,
      title: "Rules and filings",
      description:
        "Firm setup, FSSAI, trade license, and GST filing with plain guidance in Bihar",
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
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-[#fbbf24]/90">
              End-to-End Digital Solutions Provider
            </p>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              Grow your business with{" "}
              <span className="text-[#f59e0b]">simple digital tools</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Pick what you need. We speak plain language. We fix billing
              mistakes, stock confusion, and slow days with systems your team
              can actually use.
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
                Why owners in Bihar pick EDUNEX
              </h2>

              <ExpandableAuthorityContent>
              <div className="space-y-8 text-gray-400 leading-relaxed">
                <div>
                  <h3 className="text-2xl font-semibold text-white border-l-2 border-[#f59e0b] pl-4 mb-4">
                    Does this sound like your day?
                  </h3>
                  <p className="mb-4">
                    Wrong bills cost money. Stock counts rarely match. One person
                    holds all the know how. Paperwork steals your evening. Sales
                    feel slow and new buyers struggle to find you online.
                  </p>
                  <p className="mb-4">
                    Far away teams talk in circles. They sell heavy packages your
                    staff cannot run. When the counter is busy, you need answers
                    in Patna, not in another city.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white border-l-2 border-[#f59e0b] pl-4 mb-4">
                    Simple systems built for real business work
                  </h3>
                  <p className="mb-4">
                    We are an End-to-End Digital Solutions Provider. We build
                    plain tools for counters, godowns, and clinics. Your team can
                    learn a clean billing flow or stock check in one sitting.
                  </p>
                  <p className="mb-4">
                    Work keeps moving when the net drops. Data syncs when it
                    returns. Backups sit safely off site so one PC crash does
                    not erase your year.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white border-l-2 border-[#f59e0b] pl-4 mb-4">
                    Rules, filings, and growth in one place
                  </h3>
                  <p className="mb-4">
                    Software alone is not enough. We help register your firm,
                    sort FSSAI or trade papers, and file GST on time. You stay
                    calm while forms stay current.
                  </p>
                  <p className="mb-4">
                    When you want more footfall, we tune maps and simple local
                    ads so families nearby can find your shop. Plans stay honest
                    and sized for Bihar markets.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white border-l-2 border-[#f59e0b] pl-4 mb-4">
                    Meet us in Patna when it matters
                  </h3>
                  <p className="mb-4">
                    We sit with you on site. We watch how your staff moves. We
                    train hands on until bills flow smoothly. If something
                    breaks, our local team is a short drive away.
                  </p>
                  <p>
                    Since 2018 we have served 90+ clients with 98% retention. You
                    get steady help on a clear budget without big brand noise.
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
                Real shops.{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Real fixes.
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl [text-wrap:balance]">
                Short stories from local owners who cut mistakes, saved time, and
                grew with simple systems.
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
                Questions we hear{" "}
                <span className="bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-600 bg-clip-text font-normal text-transparent">
                  often
                </span>
              </>
            }
            description="Clear answers about price, time lines, training, and how we support your shop."
          />
        </SectionAmbient>

        <PageFinalCTA
          id="home-final-cta"
          title={
            <>
              Call us. Tell us what slows{" "}
              <span className="bg-gradient-to-r from-[#fde68a] via-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
                you down.
              </span>
            </>
          }
          description="Share billing pain, stock pain, or slow sales. We suggest a simple next step. Local team in Patna since 2018. Honest scope. Fair price talk up front."
          primaryHref={homeConsultHref}
          primaryLabel="Call or message us"
          secondaryHref="/solutions#final-cta"
          secondaryLabel="See how we work"
          trustItems={[
            "90+ clients across Bihar",
            "98% client retention",
            "Local support in Patna",
          ]}
        />
      </div>
    </div>
  );
}
