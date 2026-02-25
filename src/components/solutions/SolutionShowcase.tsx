"use client";

import { motion } from "motion/react";
import {
  Check,
  ArrowRight,
  Users,
  BarChart3,
  Zap,
  Shield,
  Database,
  Globe,
  TrendingUp,
  Info,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const solutions = [
  {
    id: "crm",
    icon: Users,
    name: "Custom CRM",
    target: "Sales & Marketing Teams",
    tagline: "Stop Lead Leakage & Increase Sales Velocity",
    icp: "Ideal for growing agencies and sales teams managing 50+ monthly enquiries.",
    description:
      "Transform your chaotic sales process into a structured revenue engine. Our CRM eliminates manual tracking, ensuring no lead is ever forgotten while providing real-time visibility into your pipeline.",
    capabilities: [
      {
        name: "Predictive Lead Scoring",
        definition: "Focus your team on the deals most likely to close today.",
      },
      {
        name: "Automated Workflows",
        definition: "Eliminate repetitive tasks and manual data entry.",
      },
      {
        name: "WhatsApp Ecosystem",
        definition: "Meet your customers where they are, natively integrated.",
      },
      {
        name: "Executive Dashboards",
        definition:
          "Instant visibility into team performance and revenue forecasts.",
      },
    ],
    outcomes: [
      "24% Faster Sales Cycle (Average)",
      "Eliminate 15+ Hours of Weekly Admin",
      "Senior Implementation Engineer Included",
    ],
    price: "₹1,49,999+",
    priceContext: "Starts from. Depends on scale.",
    metric: { value: "10M+", label: "Leads Tracked" },
    localTrust: "Used by 45+ Regional Agencies",
  },
  {
    id: "erp",
    icon: BarChart3,
    name: "Enterprise ERP",
    target: "Operations & Finance",
    tagline: "Complete Operational Control & Real-Time Accuracy",
    icp: "Designed for multi-branch distribution and complex manufacturing units.",
    description:
      "Run your entire operation from a single source of truth. From warehouse inventory to financial reporting, our ERP provides the data consistency needed for high-stakes decision making.",
    capabilities: [
      {
        name: "Omnichannel Inventory",
        definition:
          "Live stock tracking across all physical and digital branches.",
      },
      {
        name: "Automated Reconciliation",
        definition: "Reduce financial audit time from weeks to minutes.",
      },
      {
        name: "Unified Huma Capital",
        definition: "Manage performance, payroll, and compliance in one click.",
      },
      {
        name: "Strategic Insights",
        definition:
          "Predictive analytics to reduce waste and optimize procurement.",
      },
    ],
    outcomes: [
      "Reduce Operational Waste by 15%",
      "100% Billing & Inventory Accuracy",
      "Full Onboarding & Training Support",
    ],
    price: "₹2,99,999+",
    priceContext: "Custom pricing for scale.",
    metric: { value: "99.9%", label: "Stock Accuracy" },
    localTrust: "Powering Magadh Distribution",
  },
  {
    id: "billing",
    icon: Zap,
    name: "Automated Billing & Invoicing",
    target: "Service Providers & Retailers",
    tagline: "Accelerate Cash Flow & Automate Collections",
    icp: "Best for recurring service models and high-volume billing operations.",
    description:
      "Move beyond manual invoicing. Our systems automate the entire payment lifecycle, from GST-compliant generation to smart follow-ups, ensuring you get paid faster and more reliably.",
    capabilities: [
      {
        name: "Smart Rev-Ops",
        definition:
          "Automated reminders that reduce DSOs (Days Sales Outstanding).",
      },
      {
        name: "Seamless Compliance",
        definition: "Always-ready GST filing and audit-ready reports.",
      },
      {
        name: "Global Payment Fabric",
        definition:
          "Integrated QR, UPI, and Credit support for instant settlements.",
      },
      {
        name: "Multi-Store Control",
        definition: "Centralized financial oversight for all your locations.",
      },
    ],
    outcomes: [
      "Improve Cash Flow by 20%",
      "Zero Manual Payment Entry Errors",
      "Dedicated Implementation Specialist",
    ],
    price: "₹49,999+",
    priceContext: "Starting price for basic tier.",
    metric: { value: "₹50Cr+", label: "Bills Processed" },
    localTrust: "Trusted by Vaishali Agro",
  },
];

export default function SolutionShowcase() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-16 items-center`}
            >
              {/* Image/Visual Placeholder Column */}
              <div
                className={`${index % 2 === 1 ? "lg:order-2" : ""} relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/10 to-transparent blur-3xl -z-10" />
                <div className="aspect-[4/3] rounded-3xl bg-[#0a0a0a] border border-white/5 p-8 overflow-hidden group">
                  {/* Decorative UI elements representing the product */}
                  <div className="h-full w-full flex flex-col gap-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-white/10 flex items-center justify-center">
                        <solution.icon className="w-8 h-8 text-[#f59e0b]" />
                      </div>
                      <Badge
                        variant="outline"
                        className="border-[#f59e0b]/30 text-[#f59e0b] px-3 py-1"
                      >
                        Enterprise
                      </Badge>
                    </div>

                    <div className="flex-1 rounded-2xl bg-[#121212] border border-white/5 p-6 relative overflow-hidden">
                      <div className="flex justify-between items-end h-full">
                        <div className="space-y-4 w-full">
                          <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                          <div className="h-4 w-3/4 bg-white/5 rounded-full" />
                          <div className="h-4 w-2/3 bg-white/5 rounded-full" />
                          <div className="grid grid-cols-3 gap-3 pt-6">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="aspect-square rounded-xl bg-white/5 flex items-center justify-center"
                              >
                                <TrendingUp className="w-4 h-4 text-[#f59e0b]/50" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Metric Overlay */}
                      <div className="absolute top-6 right-6 p-4 rounded-xl bg-black border border-white/10 shadow-2xl">
                        <p className="text-2xl font-bold text-[#f59e0b]">
                          {solution.metric.value}
                        </p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                          {solution.metric.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                      {solution.target}
                    </span>
                  </div>
                  {(solution as any).localTrust && (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20">
                      <Award className="w-3 h-3 text-[#f59e0b]" />
                      <span className="text-[10px] font-bold text-[#f59e0b] uppercase">
                        {(solution as any).localTrust}
                      </span>
                    </div>
                  )}
                </div>

                <h2 className="text-4xl font-bold text-white mb-4">
                  {solution.name}
                </h2>
                <p className="text-[#f59e0b] text-lg font-medium mb-4">
                  {solution.tagline}
                </p>
                <div className="mb-6 flex items-start gap-2 text-xs text-gray-400 bg-white/5 p-3 rounded-lg border border-white/10">
                  <span className="font-bold text-[#f59e0b] uppercase">
                    Ideal For:
                  </span>
                  <span>{(solution as any).icp}</span>
                </div>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {solution.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {solution.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 group/cap"
                      title={cap.definition}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 group-hover/cap:bg-[#f59e0b]/20 transition-colors">
                        <Check className="w-3 h-3 text-[#f59e0b]" />
                      </div>
                      <span className="text-sm text-gray-300 font-medium flex items-center gap-1.5 border-b border-white/5 border-dashed group-hover/cap:text-white transition-colors cursor-help">
                        {cap.name}
                        <Info className="w-3 h-3 text-gray-600" />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 mb-8">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                    Business Outcomes
                  </p>
                  <div className="space-y-3">
                    {solution.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                        <span className="text-sm text-gray-200">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                  <div>
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest">
                      {(solution as any).priceContext ||
                        "Enterprise Starting From"}
                    </p>
                    <p className="text-2xl font-bold text-white tracking-tight">
                      {solution.price}
                    </p>
                  </div>
                  <div className="flex gap-4 w-full sm:w-auto">
                    <Link href="/contact" className="flex-1 sm:flex-initial">
                      <Button className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold h-12 px-8 rounded-xl w-full">
                        Request Demo
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1 sm:flex-initial">
                      <Button
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/5 h-12 px-8 rounded-xl bg-transparent w-full"
                      >
                        Architecture Call
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
