"use client";
import React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EngagementModel {
  title: string;
  desc: string;
  price: string;
  features: string[];
  highlight: boolean;
}

interface EngagementModelsProps {
  title?: string;
  subtitle?: string;
  models?: EngagementModel[];
  serviceTitle?: string;
}

const defaultModels: EngagementModel[] = [
  {
    title: "Project-Based",
    desc: "Best for clearly defined scopes and fixed timelines.",
    price: "Fixed Quote",
    features: [
      "Dedicated project manager",
      "Defined milestones & deliverables",
      "Post-launch support period",
      "Rigorous quality assurance",
    ],
    highlight: false,
  },
  {
    title: "Dedicated Team",
    desc: "Ideal for long-term product development and scaling.",
    price: "Monthly Retainer",
    features: [
      "Full-time dedicated engineers",
      "Direct communication & integration",
      "Flexible scope adjustments",
      "Priority roadmap execution",
    ],
    highlight: true,
  },
  {
    title: "Consulting",
    desc: "Expert guidance for architecture and strategy.",
    price: "Hourly / Weekly",
    features: [
      "Architecture audit & review",
      "Tech stack modernization",
      "Security & compliance advisory",
      "CTO-as-a-Service model",
    ],
    highlight: false,
  },
];

export const EngagementModels = ({
  title = "Flexible Structures for Every Business Need",
  subtitle = "Engagement Models",
  models = defaultModels,
  serviceTitle = "Consulting",
}: EngagementModelsProps) => {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.3em] mb-4">
            {subtitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, i) => (
            <motion.div
              key={model.title}
              className={`relative p-10 rounded-[2.5rem] border ${
                model.highlight
                  ? "bg-[#121212] border-[#f59e0b]/40 shadow-[0_20px_50px_rgba(245,158,11,0.1)]"
                  : "bg-[#0a0a0a] border-white/5"
              } overflow-hidden group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {model.highlight && (
                <div className="absolute top-0 right-10 py-1.5 px-4 bg-[#f59e0b] text-black text-[10px] font-bold uppercase tracking-widest rounded-b-xl">
                  Most Preferred
                </div>
              )}

              <h4 className="text-2xl font-bold text-white mb-3">
                {model.title}
              </h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {model.desc}
              </p>

              <div className="mb-8">
                <span className="text-3xl font-bold text-white">
                  {model.price}
                </span>
              </div>

              <div className="space-y-4 mb-10">
                {model.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${model.highlight ? "bg-[#f59e0b]/20" : "bg-white/5"}`}
                    >
                      <Check
                        className={`w-3 h-3 ${model.highlight ? "text-[#f59e0b]" : "text-gray-500"}`}
                      />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`/contact?service=${serviceTitle.toLowerCase().replace(/ /g, "-")}`}
              >
                <Button
                  variant={model.highlight ? "default" : "secondary"}
                  className="w-full py-6 rounded-2xl h-auto font-bold"
                >
                  Enquiry Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
