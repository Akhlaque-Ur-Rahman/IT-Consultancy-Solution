"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/mockData";
import { Filter } from "lucide-react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export default function ServicesPage() {
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
              Complete Service Portfolio
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="text-[#f59e0b]">Grow & Run</span> Your Business
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            From custom software architecture and headless commerce to statutory
            business compliance. We engineer end-to-end digital environments.
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
              Integrated Digital Engineering: Beyond Disconnected Solutions
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed md:columns-2 gap-12">
              <p>
                The fundamental flaw in modern enterprise software adoption is
                fragmentation. Businesses often procure a marketing website from
                one agency, employ an internal team to duct-tape a legacy CRM
                together, and hire a completely disconnected CA firm for
                compliance. The result is a fragile digital ecosystem riddled
                with data silos, security vulnerabilities, and massive
                operational inefficiencies.
              </p>
              <p>
                At EDUNEX Services, we eliminate this fragmentation by
                engineering holistic, vertically integrated solutions. We do not
                view software development, digital marketing, and business
                compliance as separate disciplines; rather, they are
                interlocking gears within our unified operational engine. By
                centralizing these requirements, we drastically reduce technical
                debt and accelerate your time to market with our{" "}
                <Link
                  href="/solutions"
                  className="text-[#f59e0b] hover:underline"
                >
                  Unified Enterprise Solutions
                </Link>
                .
              </p>
              <div className="mt-8 break-inside-avoid">
                <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                  1. Application Engineering & Architecture
                </h3>
                <p>
                  Our engineering pod builds horizontally scalable applications
                  using cloud-native paradigms. From progressive web apps (PWAs)
                  utilizing Next.js and React to robust backend services
                  governed by Node.js and RESTful APIs, our software is strictly
                  typed and built for high availability. Whether you require a
                  custom headless E-commerce stack or a proprietary enterprise
                  ERP tailored to regional Indian workflows, our codebase is
                  designed for extreme longevity and zero-downtime scalability.
                </p>
              </div>
              <div className="mt-8 break-inside-avoid">
                <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                  2. Performance Marketing & Digital Footprint
                </h3>
                <p>
                  Traffic without conversion mechanics yields zero ROI. Our
                  digital marketing strategies natively integrate with the
                  software we build. By instrumenting deep analytics engines
                  inside your web applications, we deploy hyper-targeted Paid
                  Search (SEM), technical on-page Search Engine Optimization
                  (SEO), and conversion-rate-optimized (CRO) funnels. We capture
                  granular user telemetry to iteratively improve
                  cost-per-acquisition metrics, transforming your software into
                  a quantifiable revenue channel.
                </p>
              </div>
              <div className="mt-8 break-inside-avoid">
                <h3 className="text-2xl font-semibold text-[#f59e0b] mb-4">
                  3. Statutory Compliance & Legal Scaffolding
                </h3>
                <p>
                  Deploying enterprise architecture in India necessitates
                  rigorous adherence to local regulations. Our unique
                  multi-disciplinary approach weaves legal safeguards straight
                  into your operational launch. We manage the complexities of
                  Private Limited/LLP incorporation, ensure automated alignment
                  with monthly GST filing regulations, and architect your data
                  compliance boundaries to satisfy regional data protection
                  mandates. At EDUNEX, technical excellence is systematically
                  protected by uncompromising legal foundations.
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
