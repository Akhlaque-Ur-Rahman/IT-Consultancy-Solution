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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const solutions = [
  {
    id: "crm",
    icon: Users,
    name: "Custom CRM",
    target: "Sales & Marketing Teams",
    tagline: "Know Your Customers Better",
    description:
      "Stop losing leads in notebooks and WhatsApp messages. Our CRM keeps all your customer info in one place, helping you close more deals with less effort.",
    capabilities: [
      {
        name: "Lead Scoring",
        definition: "Auto-ranks customers based on how likely they are to buy.",
      },
      {
        name: "Sales Pipelines",
        definition: "A visual map of every deal from 'Hello' to 'Closed'.",
      },
      {
        name: "WhatsApp Hub",
        definition: "Chat with customers directly from your dashboard.",
      },
      {
        name: "Deep Analytics",
        definition:
          "Simple charts that show you what's working and what's not.",
      },
    ],
    outcomes: ["24% Faster Sales Cycle", "18% More Customers Saved"],
    price: "₹1,49,999",
    metric: { value: "10M+", label: "Leads Tracked" },
    localTrust: "Used by 45+ Patna Agencies",
  },
  {
    id: "erp",
    icon: BarChart3,
    name: "Enterprise ERP",
    target: "Operations & Finance",
    tagline: "Run Your Office on Autopilot",
    description:
      "Manage your staff, stock, and money without the headache. A complete system that connects your warehouse to your front office.",
    capabilities: [
      {
        name: "Live Inventory",
        definition: "See exactly what's in stock across all your branches.",
      },
      {
        name: "Auto-Accounting",
        definition: "Your bills and taxes are calculated automatically.",
      },
      {
        name: "Staff Manager",
        definition: "Track attendance, salary, and performance in one click.",
      },
      {
        name: "Regional Compliance",
        definition: "Built-in rules for Bihar's specific tax and labor laws.",
      },
    ],
    outcomes: ["15% Less Waste", "Zero Errors in Billing"],
    price: "₹2,99,999",
    metric: { value: "99.9%", label: "Stock Accuracy" },
    localTrust: "Trusted by Magadh Distribution",
  },
  {
    id: "billing",
    icon: Zap,
    name: "Billing & Invoicing",
    target: "Shops & Service Providers",
    tagline: "Get Paid Faster, Every Time",
    description:
      "Professional invoices that look great and remind customers to pay. Perfect for businesses with monthly fees or complex billing.",
    capabilities: [
      {
        name: "Auto-Reminders",
        definition:
          "Sends polite WhatsApp/Email nudges before payments are due.",
      },
      {
        name: "GST-Ready",
        definition: "Generate tax-compliant bills in seconds, not hours.",
      },
      {
        name: "Multi-Location",
        definition: "Control billing for all your shops from your phone.",
      },
      {
        name: "Instant Payments",
        definition: "QR codes and links so customers can pay on the spot.",
      },
    ],
    outcomes: ["20% Faster Cash Flow", "Zero Manual Data Entry"],
    price: "₹49,999",
    metric: { value: "₹50Cr+", label: "Bills Processed" },
    localTrust: "Powering Vaishali Agro",
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
                <p className="text-[#f59e0b] text-lg font-medium mb-6">
                  {solution.tagline}
                </p>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {solution.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <TooltipProvider>
                    {solution.capabilities.map((cap, idx) => (
                      <Tooltip key={idx}>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-3 cursor-help group/cap">
                            <div className="w-5 h-5 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 group-hover/cap:bg-[#f59e0b]/20 transition-colors">
                              <Check className="w-3 h-3 text-[#f59e0b]" />
                            </div>
                            <span className="text-sm text-gray-300 font-medium flex items-center gap-1.5 border-b border-white/5 border-dashed group-hover/cap:text-white transition-colors">
                              {cap.name}
                              <Info className="w-3 h-3 text-gray-600" />
                            </span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[200px] border-[#262626] bg-[#121212] text-gray-300">
                          <p>{cap.definition}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>

                <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 mb-8">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                    Expected Outcomes
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

                <div className="flex items-center justify-between gap-6 pt-8 border-t border-white/5">
                  <div>
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest">
                      Enterprise Starting From
                    </p>
                    <p className="text-2xl font-bold text-white tracking-tight">
                      {solution.price}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Link href="/contact">
                      <Button className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold h-12 px-6 rounded-xl">
                        Get Demo
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/5 h-12 px-6 rounded-xl bg-transparent"
                      >
                        Details
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
