"use client";
import React from "react";
import { motion } from "motion/react";
import { Gavel, Clock, FileCheck } from "lucide-react";

interface ComplianceProps {
  data: {
    renewal: string;
    consultancy: string;
  };
}

export const ComplianceDetails = ({ data }: ComplianceProps) => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="p-12 rounded-[40px] bg-gradient-to-br from-[#121212] to-[#050505] border border-[#1a1a1a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[100px] -mr-48 -mt-48" />

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Regulatory Precision
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Navigating the complex landscape of corporate law and taxation
                requires more than just advice—it requires a partner who ensures
                you're always one step ahead.
              </p>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    Live Monitoring
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    Expert Guardrails
                  </span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-[#1a1a1a]">
                <Clock className="w-8 h-8 text-[#f59e0b] mb-4" />
                <h4 className="text-white font-bold mb-2">Automated Renewal</h4>
                <p className="text-xs text-gray-500">
                  {data.renewal ||
                    "Automatic compliance reminders and filing alerts."}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-black border border-[#1a1a1a]">
                <Gavel className="w-8 h-8 text-blue-500 mb-4" />
                <h4 className="text-white font-bold mb-2">Legal Shield</h4>
                <p className="text-xs text-gray-500">
                  {data.consultancy ||
                    "Monthly regulatory updates and legal consultation."}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-black border border-[#1a1a1a] sm:col-span-2 flex items-center gap-4">
                <FileCheck className="w-10 h-10 text-green-500" />
                <div>
                  <h4 className="text-white font-bold">100% Audit Readiness</h4>
                  <p className="text-xs text-gray-500">
                    Every submission is reviewed by certified professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
