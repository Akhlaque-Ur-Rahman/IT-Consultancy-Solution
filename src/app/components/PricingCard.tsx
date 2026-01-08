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
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white text-sm font-medium flex items-center gap-1 shadow-lg z-10">
          <Star className="w-4 h-4 fill-current" />
          Most Popular
        </div>
      )}

      <div
        className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
          highlighted
            ? 'bg-gradient-to-br from-[#1a3a5c] to-[#0f2642] text-white shadow-2xl scale-105'
            : 'bg-white border-2 border-gray-200 hover:border-[#14b8a6] hover:shadow-xl'
        }`}
      >
        {/* Header */}
        <div className="mb-8">
          <h3
            className={`text-2xl font-bold mb-1 ${
              highlighted ? 'text-white' : 'text-gray-900'
            }`}
          >
            {name}
          </h3>
          <p
            className={`text-sm ${
              highlighted ? 'text-white/70' : 'text-gray-500'
            }`}
          >
            {nameHindi}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span
              className={`text-5xl font-bold ${
                highlighted ? 'text-white' : 'text-gray-900'
              }`}
            >
              {price}
            </span>
            {duration !== 'Contact us' && (
              <span
                className={`text-sm ${
                  highlighted ? 'text-white/70' : 'text-gray-500'
                }`}
              >
                {duration}
              </span>
            )}
          </div>
          <p
            className={`mt-2 text-sm ${
              highlighted ? 'text-white/80' : 'text-gray-600'
            }`}
          >
            {description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  highlighted
                    ? 'bg-white/20'
                    : 'bg-[#14b8a6]/10'
                }`}
              >
                <Check
                  className={`w-3 h-3 ${
                    highlighted ? 'text-white' : 'text-[#14b8a6]'
                  }`}
                />
              </div>
              <span
                className={`text-sm ${
                  highlighted ? 'text-white/90' : 'text-gray-600'
                }`}
              >
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
              ? 'bg-white text-[#1a3a5c] hover:bg-gray-100'
              : 'bg-[#f97316] text-white hover:bg-[#ea580c]'
          }`}
        >
          {price === 'Custom' ? 'Contact Sales' : 'Get Started'}
        </Button>
      </div>
    </motion.div>
  );
}
