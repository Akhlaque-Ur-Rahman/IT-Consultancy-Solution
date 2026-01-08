import { motion, useMotionValue, useTransform } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  image: string;
  impact: Record<string, string>;
  onClick?: () => void;
}

export function CaseStudyCard({ title, client, industry, image, impact, onClick }: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-full bg-[#121212] rounded-lg overflow-hidden border border-[#262626] hover:border-[#f59e0b]/50 transition-all duration-200">
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-[#0a0a0a]">
          <ImageWithFallback
            src={`https://source.unsplash.com/800x600/?${encodeURIComponent(image)}`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          
          {/* Industry Badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-md bg-[#f59e0b]/90 backdrop-blur-sm text-xs font-medium text-black">
            {industry}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Client */}
          <p className="text-sm font-medium text-[#f59e0b] mb-2">{client}</p>
          
          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-4 line-clamp-2 group-hover:text-[#f59e0b] transition-colors">{title}</h3>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {Object.entries(impact).slice(0, 4).map(([key, value]) => (
              <div key={key} className="p-3 rounded-md bg-[#0a0a0a] border border-[#262626]">
                <p className="text-xl font-bold text-[#f59e0b] mb-1">{value}</p>
                <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-[#f59e0b] transition-colors">
            View Case Study
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
      </div>
    </motion.div>
  );
}