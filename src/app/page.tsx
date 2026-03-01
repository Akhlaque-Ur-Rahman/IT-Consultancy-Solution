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
  title: "EDUNEX - IT Consulting & Enterprise Software Solutions",
  description:
    "Transform your business with EDUNEX. Expert IT consulting, custom software development, ERP/CRM solutions, and digital marketing services.",
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
      title: "IT Consulting & Strategy",
      description:
        "Enterprise technology consulting for digital transformation and business growth",
      href: "/services?category=consulting",
    },
    {
      id: "software-dev",
      icon: Database,
      title: "Software Development",
      description:
        "Custom web, mobile, and enterprise application development services",
      href: "/services?category=development",
    },
    {
      id: "digital-marketing",
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "SEO, social media marketing, and performance-driven digital strategies",
      href: "/services?category=marketing",
    },
    {
      id: "compliance",
      icon: Shield,
      title: "Business & Legal Compliance",
      description:
        "Company registration, GST, trademark, and complete compliance management",
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
              <span className="text-[#f59e0b]">Run & Grow</span> Your Business
              Online
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From custom websites and mobile apps to managing your taxes and
              marketing — we handle the technical side so you can focus on your
              customers.
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
                Enterprise Digital Transformation: Architecting Your Competitive
                Advantage
              </h2>

              <div className="space-y-8 text-gray-400 leading-relaxed">
                <div>
                  <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                    The Problem: Legacy Bottlenecks and Fragmented Operations
                  </h3>
                  <p className="mb-4">
                    In today's hyper-accelerated market, traditional SMBs,
                    startups, and mid-market enterprises face a critical
                    inflection point. Legacy systems, siloed data frameworks,
                    and off-the-shelf software solutions are no longer
                    sufficient to maintain operational agility. Institutional
                    buyers and visionary founders frequently encounter what we
                    define as "friction economics"—where outdated internal
                    tools, manual data reconciliation, and fragmented
                    communication platforms directly cannibalize profit margins.
                  </p>
                  <p className="mb-4">
                    The challenge is rarely a lack of ambition; it is the
                    absence of a unified, scalable digital infrastructure. When
                    customer relationship data lives in spreadsheets, localized
                    financial compliance operates outside your core business
                    logic, and your customer-facing digital storefront is
                    decoupled from inventory management, scaling becomes
                    exponentially difficult and risky.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                    The Solution: Unified, Ecosystem-Driven Technology
                  </h3>
                  <p className="mb-4">
                    At EDUNEX Services, we do not view technology as a simple
                    procurement exercise. We architect unified digital
                    ecosystems tailored to the exact operational realities of
                    your enterprise. By leveraging full-stack modern JavaScript
                    utilizing Next.js, headless commerce architectures, and
                    horizontally scalable cloud infrastructure, we build digital
                    environments that operate reliably at scale.
                  </p>
                  <p className="mb-4">
                    Our approach to ERP and CRM integration focuses on creating
                    a single source of truth for your organization. By
                    centralizing data analytics, automating redundant
                    administrative workflows, and ensuring real-time
                    synchronization between financial compliance and operational
                    metrics, we allow executive leadership to make data-driven
                    decisions instantly. We replace fragmentation with cohesion.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                    Implementation: Engineering Excellence & Compliance Security
                  </h3>
                  <p className="mb-4">
                    Deploying enterprise software requires rigorous engineering
                    discipline. Our implementation methodology is structured
                    around agile delivery sprints, ensuring continuous
                    integration and continuous deployment (CI/CD) pipelines
                    minimize operational downtime. We utilize deep architectural
                    patterns, including strictly typed interfaces (TypeScript),
                    robust microservices where necessary, and secure RESTful or
                    GraphQL APIs to ensure high availability and military-grade
                    data security.
                  </p>
                  <p className="mb-4">
                    Furthermore, operating a business in India demands absolute
                    adherence to statutory requirements. Our unique integration
                    of regulatory compliance consulting—spanning GST
                    registration, trademark protection, and localized financial
                    structuring—with high-end software development means your
                    digital infrastructure is built from day one to be fully
                    compliant with Indian financial and legal frameworks.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                    Value Differentiation: The Long-Term Technical Partnership
                  </h3>
                  <p className="mb-4">
                    The market is saturated with transactional vendors who
                    deliver codebase handoffs and disappear. EDUNEX Services
                    operates on a fundamentally different paradigm. We act as
                    your fractional CTO and extended engineering department.
                    Supported by over {COMPANY_INFO.yearsOfExperience} years of
                    hard-won architectural experience in Patna and beyond, we
                    look past the initial deployment.
                  </p>
                  <p>
                    We provide proactive monitoring, continuous security
                    patching, rigorous performance audits, and strategic
                    scalability planning. When you partner with us, you are
                    securing a technology ally dedicated exclusively to
                    optimizing your time-to-market, reducing your technical
                    debt, and maximizing your return on engineered investment.
                    We don't just write code; we architect your firm's
                    structural longevity.
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
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black px-10 py-7 text-lg transition-all duration-200"
                >
                  Learn More About EDUNEX
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

      {/* Schema.org JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "EDUNEX",
            alternateName: "EDUNEX IT Consulting",
            description:
              "Enterprise IT consulting, software development, CRM/ERP implementation, digital marketing, and business compliance services",
            url: "https://edunexservices.in",
            telephone: "+91-70708-09208",
            email: "support@edunesservices.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Ward 15, Phulwari Sharif",
              addressLocality: "Patna",
              addressRegion: "Bihar",
              postalCode: "801505",
              addressCountry: "IN",
            },
            areaServed: ["Phulwari Sharif", "Patna", "Bihar", "India"],
            priceRange: "₹₹₹",
            sameAs: [
              "https://www.facebook.com/edunexservices",
              "https://www.linkedin.com/company/edunexservices",
              "https://www.instagram.com/edunexservices",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "65",
            },
            serviceType: [
              "IT Consulting",
              "Software Development",
              "CRM/ERP Implementation",
              "Digital Marketing",
              "Business Compliance",
            ],
          }),
        }}
      />
    </main>
  );
}
