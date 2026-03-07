"use client";

import { motion } from "motion/react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Terminal,
  Server,
  ShieldCheck,
  Download,
  Code2,
  Database,
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export default function BiharSoftwarePage() {
  return (
    <div className="pt-4 lg:pt-8 pb-20 min-h-screen bg-black">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          {
            name: "Software Development Bihar",
            item: "/software-development-bihar",
          },
        ]}
      />
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-24 pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6">
            <Code2 className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-medium text-[#f59e0b]">
              Custom Software Engine
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Connecting{" "}
            <span className="text-[#f59e0b]">Bihar's Businesses</span>
            <br className="hidden md:block" />
            to the Digital Economy.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            We bridge the technology gap for SMEs operating in Gaya,
            Muzaffarpur, Bhagalpur, Darbhanga, and beyond. We build powerful
            custom software tailored to the exact realities of regional
            distribution and local retail.
          </p>
          <Link href="/contact">
            <Button className="w-full sm:w-auto px-10 h-16 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-lg rounded-xl shadow-[0_10px_30px_rgba(245,158,11,0.3)] transition-all">
              Request Software Estimate
            </Button>
          </Link>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            {
              icon: Terminal,
              title: "Custom Billing ERPs",
              desc: "Automated GST invoicing, daily cash ledgers, and inventory tracking tools that work even when internet connectivity drops.",
            },
            {
              icon: Server,
              title: "Logistics & Delivery Apps",
              desc: "Dispatch management software to track your transport vehicles and delivery boys moving goods across Bihar's districts.",
            },
            {
              icon: Database,
              title: "Data Secure Platforms",
              desc: "Your business secrets are safe. We ensure full data ownership, local backups, and absolute privacy for your business logic.",
            },
          ].map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#121212] p-8 rounded-3xl border border-[#262626] hover:border-[#f59e0b]/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f59e0b]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feat.icon className="w-7 h-7 text-[#f59e0b]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feat.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Full Image Section */}
        <motion.div
          className="relative rounded-[2rem] overflow-hidden border border-[#262626] h-[500px] mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="Software Development Analytics"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent flex items-center p-12 lg:p-20">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Built for Reliability. Designed for Speed.
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We don't sell bloated templates. Our engineering team builds
                extremely fast, deeply secure applications from scratch. By
                listening to your local needs, we create software that your
                staff will actually want to use.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-[#f59e0b] font-bold">
                  <ShieldCheck className="w-5 h-5" /> 100% Secure
                </div>
                <div className="flex items-center gap-2 text-[#f59e0b] font-bold">
                  <Copy className="w-5 h-5" /> Easy to Use
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Transform Your Operations Out of the Paper Age
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to automate your distribution rules, retail stock, or
            manufacturing pipeline? Contact EDUNEX to discuss software
            development specifically for Bihar.
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black font-bold h-12 px-8 rounded-xl"
            >
              Start a Project Discussion
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
