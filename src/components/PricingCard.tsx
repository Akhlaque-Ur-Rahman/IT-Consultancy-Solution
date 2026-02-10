import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { Button } from './ui/button';

interface PricingCardProps {
  name: string;
  nameHindi: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  highlighted: boolean;
  onCTA: () => void;
  delay?: number;
}

export function PricingCard({
  name,
  nameHindi,
  price,
  duration,
  description,
  features,
  highlighted,
  onCTA,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: highlighted ? 0 : -8 }}
      className={`relative ${highlighted ? 'lg:-mt-8' : ''}`}
    >
      {/* Popular Badge */}
      {highlighted && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#f59e0b] text-black text-sm font-bold flex items-center gap-1 shadow-[0_0_15px_rgba(245,158,11,0.5)] z-10">
          <Star className="w-4 h-4 fill-current" />
          Most Popular
        </div>
      )}

      <div
        className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
          highlighted
            ? 'bg-gradient-to-br from-[#262626] to-[#1a1a1a] border border-[#f59e0b] shadow-[0_0_30px_rgba(245,158,11,0.15)] scale-105'
            : 'bg-[#121212] border border-[#262626] hover:border-[#f59e0b]/50 hover:shadow-xl'
        }`}
      >
        {/* Header */}
        <div className="mb-8">
          <h3
            className={`text-2xl font-bold mb-1 ${
              highlighted ? 'text-[#f59e0b]' : 'text-white'
            }`}
          >
            {name}
          </h3>
          <p className="text-sm text-gray-400">
            {nameHindi}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-white">
              {price}
            </span>
            {duration !== 'Contact us' && (
              <span className="text-sm text-gray-400">
                {duration}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-gray-400">
            {description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#f59e0b]/10">
                <Check className="w-3 h-3 text-[#f59e0b]" />
              </div>
              <span className="text-sm text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          onClick={onCTA}
          className={`w-full py-6 ${
            highlighted
              ? 'bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]'
              : 'bg-[#262626] text-white hover:bg-[#333] hover:text-[#f59e0b]'
          }`}
        >
          {price === 'Custom' ? 'Contact Sales' : 'Get Started'}
        </Button>
      </div>
    </motion.div>
  );
}
