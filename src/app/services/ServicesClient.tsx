"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/mockData";
import { Filter } from "lucide-react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

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
    <div className="pt-4 lg:pt-8 pb-20 min-h-screen bg-black">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
        ]}
      />
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-4">
            <span className="text-sm font-medium text-[#f59e0b]">
              Local Bihar IT Services
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="text-[#f59e0b]">Run & Grow</span> Your Business
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            From easy-to-use custom software and automated billing systems to
            strict statutory business compliance. We help regional SMEs scale
            safely.
          </p>
        </motion.div>

        {/* Enterprise Service Philosophy (SEO Expansion) */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#121212] border border-[#262626] rounded-2xl p-8 lg:p-12 prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-[#262626] pb-4">
              Why We Are Different From Other IT Agencies
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed md:columns-2 gap-12">
              <p>
                The biggest problem small and medium businesses face in Bihar
                today is hiring completely disconnected people. You might hire a
                freelancer in Delhi to build a simple website, buy an
                off-the-shelf billing software that doesn't match how your
                godown works, and have a local CA handle your GST who doesn't
                know how your software calculates taxes.
              </p>
              <p>
                At EDUNEX, we eliminate this confusion because we handle
                everything under one roof, right here in your home state. We
                don't view your software, your digital marketing, and your
                business registration as different things. Our unified approach
                means your billing software automatically prepares your exact
                GST numbers, while our digital marketing brings new customers
                directly to your digital storefront or WhatsApp.
              </p>
              <div className="mt-8 break-inside-avoid">
                <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                  1. Local Billing & Workflow Automation
                </h3>
                <p>
                  We don't sell massive corporate systems that your staff cannot
                  learn. Our local engineering team visits your shop, godown, or
                  clinic, understands exactly how you work with paper today, and
                  builds simple, fast, lightning-quick digital systems. Whether
                  you need a local inventory tracker that works offline or an
                  app to manage your delivery boys, we build it to be reliable
                  and easy.
                </p>
              </div>
              <div className="mt-8 break-inside-avoid">
                <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                  2. Local SEO & Digital Growth
                </h3>
                <p>
                  Having a website means nothing if local people can't find your
                  shop. We specialize in Local Search Engine Optimization (SEO).
                  When a family in Patna searches for your type of business, we
                  make sure your shop shows up first on Google Maps. We run
                  targeted, affordable local Facebook ads that actually result
                  in foot traffic or direct WhatsApp enquiries to your phone,
                  proving real return on every rupee spent.
                </p>
              </div>
              <div className="mt-8 break-inside-avoid">
                <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                  3. Headache-Free Business Registration
                </h3>
                <p>
                  Running a business in India means heavy paperwork. We do it
                  for you. Our compliance team handles the complicated process
                  of registering your firm (Private Limited, MSME, or
                  Proprietorship), securing local Trade Licenses or FSSAI
                  certificates, and filing your monthly GST returns on time to
                  ensure you never pay a single late fee or penalty. Technical
                  excellence, fully protected by legal safety.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[#f59e0b] text-black shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105 font-semibold"
                  : "bg-[#121212] text-gray-400 border border-[#262626] hover:border-[#f59e0b]/50 hover:text-[#f59e0b]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
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
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No services found in this category
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 bg-[#121212] border border-[#262626] rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            Don't See What You're Looking For?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We offer custom solutions tailored to your unique requirements.
            Let's discuss your project.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black rounded-lg font-semibold transition-all duration-200">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
