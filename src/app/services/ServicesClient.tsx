"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/mockData";
import { ArrowRight, Building2, Filter } from "lucide-react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";
import { Button } from "@/components/ui/button";

export default function ServicesClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "development", label: "Development" },
    { id: "solutions", label: "Solutions" },
    { id: "marketing", label: "Marketing" },
    { id: "design", label: "Design" },
    { id: "compliance", label: "Compliance" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
          ]}
        />

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-4 py-2 shadow-[0_0_32px_-12px_rgba(245,158,11,0.35)]">
                <Building2 className="h-4 w-4 text-[#fbbf24]" aria-hidden />
                <span className="text-sm font-semibold text-[#fbbf24]">
                  Local Bihar IT Services
                </span>
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
                Everything You Need to{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Run &amp; Grow
                </span>{" "}
                Your Business
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl [text-wrap:balance]">
                From easy-to-use custom software and automated billing systems
                to strict statutory business compliance. We help regional SMEs
                scale safely.
              </p>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-[1px] rounded-[1.05rem] opacity-75"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(245,158,11,0.28) 0%, rgba(245,158,11,0.06) 45%, transparent 68%)",
                    filter: "blur(18px)",
                  }}
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-2xl border border-[#f59e0b]/30 bg-[#121212] p-8 shadow-[0_0_0_1px_rgba(245,158,11,0.08),0_28px_80px_-32px_rgba(0,0,0,0.9),0_0_56px_-24px_rgba(245,158,11,0.14)] lg:p-12">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/45 to-transparent" />
                  <div className="prose prose-invert prose-lg max-w-none">
                    <h2 className="mb-6 border-b border-[#262626] pb-4 text-3xl font-bold text-white">
                      Why We Are Different From Other IT Agencies
                    </h2>
                    <div className="space-y-6 text-gray-400 leading-relaxed md:columns-2 md:gap-12">
                      <p>
                        The biggest problem small and medium businesses face in
                        Bihar today is hiring completely disconnected people. You
                        might hire a freelancer in Delhi to build a simple
                        website, buy an off-the-shelf billing software that
                        doesn&apos;t match how your godown works, and have a
                        local CA handle your GST who doesn&apos;t know how your
                        software calculates taxes.
                      </p>
                      <p>
                        At EDUNEX, we eliminate this confusion because we handle
                        everything under one roof, right here in your home
                        state. We don&apos;t view your software, your digital
                        marketing, and your business registration as different
                        things. Our unified approach means your billing
                        software automatically prepares your exact GST numbers,
                        while our digital marketing brings new customers
                        directly to your digital storefront or WhatsApp.
                      </p>
                      <div className="mt-8 break-inside-avoid">
                        <h3 className="mb-4 text-2xl font-semibold text-[#f59e0b]">
                          1. Local Billing &amp; Workflow Automation
                        </h3>
                        <p>
                          We don&apos;t sell massive corporate systems that your
                          staff cannot learn. Our local engineering team visits
                          your shop, godown, or clinic, understands exactly how
                          you work with paper today, and builds simple, fast,
                          lightning-quick digital systems. Whether you need a
                          local inventory tracker that works offline or an app
                          to manage your delivery boys, we build it to be
                          reliable and easy.
                        </p>
                      </div>
                      <div className="mt-8 break-inside-avoid">
                        <h3 className="mb-4 text-2xl font-semibold text-[#f59e0b]">
                          2. Local SEO &amp; Digital Growth
                        </h3>
                        <p>
                          Having a website means nothing if local people
                          can&apos;t find your shop. We specialize in Local
                          Search Engine Optimization (SEO). When a family in Patna
                          searches for your type of business, we make sure your
                          shop shows up first on Google Maps. We run targeted,
                          affordable local Facebook ads that actually result in
                          foot traffic or direct WhatsApp enquiries to your
                          phone, proving real return on every rupee spent.
                        </p>
                      </div>
                      <div className="mt-8 break-inside-avoid">
                        <h3 className="mb-4 text-2xl font-semibold text-[#f59e0b]">
                          3. Headache-Free Business Registration
                        </h3>
                        <p>
                          Running a business in India means heavy paperwork. We
                          do it for you. Our compliance team handles the
                          complicated process of registering your firm (Private
                          Limited, MSME, or Proprietorship), securing local Trade
                          Licenses or FSSAI certificates, and filing your monthly
                          GST returns on time to ensure you never pay a single
                          late fee or penalty. Technical excellence, fully
                          protected by legal safety.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="mb-10 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-gray-400">
                <Filter className="h-4 w-4" aria-hidden />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "scale-105 bg-[#f59e0b] font-semibold text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                      : "border border-[#262626] bg-[#121212] text-gray-400 hover:border-[#f59e0b]/50 hover:text-[#f59e0b]"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              layout
            >
              {filteredServices.map((service, index) => (
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
                    delay={index * 0.05}
                  />
                </Link>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-lg text-gray-500">
                  No services found in this category
                </p>
              </div>
            )}
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="relative border-t border-[#262626] py-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-5xl">
                Don&apos;t See What You&apos;re Looking For?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
                We offer custom solutions tailored to your unique requirements.
                Let&apos;s discuss your project.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-10 py-7 text-lg font-semibold text-black transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button
                    variant="outline"
                    className="border border-white/20 px-10 py-7 text-lg text-white transition-all duration-200 hover:bg-white/10"
                  >
                    View success stories
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
