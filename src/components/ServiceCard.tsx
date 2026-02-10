'use client';
import { motion } from 'motion/react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export function ServiceCard({ icon, title, description, features, delay = 0 }: ServiceCardProps) {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[icon] as LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay, ease: [0.2, 0.9, 0.2, 1] }}
      className="group relative h-full"
    >
      <div className="relative h-full bg-[#121212] rounded-lg border border-[#262626] p-6 transition-all duration-200 hover:border-[#f59e0b]/50 cursor-pointer overflow-hidden">
        {/* Subtle Gold Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-200">
            {IconComponent && <IconComponent className="w-6 h-6 text-black" />}
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#f59e0b] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <ul className="space-y-1.5 mb-4">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-1 h-1 rounded-full bg-[#f59e0b] flex-shrink-0"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            className="flex items-center gap-2 text-xs font-medium text-gray-400 group-hover:text-[#f59e0b] transition-colors"
          >
            Learn More
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
      </div>
    </motion.div>
  );
}