"use client";

import { motion } from "motion/react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle2, PhoneCall } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export default function PatnaITConsultingPage() {
  return (
    <div className="pt-4 lg:pt-8 pb-20 min-h-screen bg-black">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "IT Consulting Patna", item: "/it-consulting-patna" },
        ]}
      />
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20 pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6">
            <MapPin className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-medium text-[#f59e0b]">
              Local Tech Partner in Patna
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Reliable IT Consulting for <br className="hidden md:block" />
            <span className="text-[#f59e0b]">Patna's Growing Businesses</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            From wholesale distributors in Patliputra to retail shops on Frazer
            Road and clinics in Kankarbagh—EDUNEX helps Patna's business owners
            automate their work, reduce billing errors, and get more local
            customers online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:px-8 h-14 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-lg rounded-xl shadow-[0_10px_30px_rgba(245,158,11,0.3)] transition-all">
                Call Local Tech Expert
                <PhoneCall className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:px-8 h-14 border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/5 bg-transparent"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Local Problems Addressed */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#121212] rounded-3xl border border-[#262626] p-10 lg:p-14">
            <h2 className="text-3xl font-bold text-white mb-8 text-center border-b border-[#262626] pb-6">
              Fixing Disconnected Business Operations
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Messy Billing & Inventory",
                  desc: "We replace slow, paper-based ledgers with simple point-of-sale software that your staff can learn in hours, not weeks.",
                },
                {
                  title: "Low Foot Traffic",
                  desc: "Our Patna-focused Local SEO ensures your shop is the first one families see when they search Google Maps in your area.",
                },
                {
                  title: "GST Filing Headaches",
                  desc: "We integrate your billing directly with our compliance tools, making your monthly tax returns completely automated and stress-free.",
                },
              ].map((prob, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b] font-bold text-xl">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white">{prob.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Custom Approach Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden border border-[#262626] bg-[#0a0a0a]">
            {/* Visual placeholder for Patna context */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="Local Business IT Consulting"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 p-4 bg-black/80 backdrop-blur-md rounded-xl border border-white/10">
              <p className="text-[#f59e0b] font-bold text-lg">
                On-Site Support
              </p>
              <p className="text-white text-sm">
                We visit your premises anywhere in Patna.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              We Speak <span className="text-[#f59e0b]">Your Language</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Many IT agencies in big metros sell complicated dashboard software
              that local staff simply cannot use. At EDUNEX, we specialize in
              building regional applications. We design interfaces in Hindi or
              English, specifically geared toward ease-of-use for workers in
              godowns, retail counters, and distribution hubs.
            </p>
            <ul className="space-y-4 text-gray-300">
              {[
                "Face-to-face consultations at your shop or office",
                "Software designed specifically for Bihar's business context",
                "Fast, same-day technical support just a phone call away",
                "Transparent pricing without hidden maintenance fees",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#f59e0b] flex-shrink-0" />
                  <span className="font-medium text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center text-[#f59e0b] font-bold mt-8 hover:underline"
            >
              Learn more about our local roots{" "}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-3xl p-12 lg:p-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-6">
            Ready to Modernize Your Patna Business?
          </h2>
          <p className="text-black/80 text-xl font-medium mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation consultation. Tell us your biggest
            operational headache, and we will show you the exact software needed
            to fix it.
          </p>
          <Link href="/contact">
            <Button className="bg-black hover:bg-black/80 text-white h-14 px-10 rounded-xl font-bold text-lg shadow-xl">
              Schedule Free Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
