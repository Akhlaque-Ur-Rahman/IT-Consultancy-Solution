import { useState } from 'react';
import { motion } from 'motion/react';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/mockData';
import { Filter } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services', labelHindi: 'सभी सेवाएँ' },
    { id: 'development', label: 'Development', labelHindi: 'विकास' },
    { id: 'solutions', label: 'Solutions', labelHindi: 'समाधान' },
    { id: 'marketing', label: 'Marketing', labelHindi: 'मार्केटिंग' },
    { id: 'design', label: 'Design', labelHindi: 'डिज़ाइन' },
    { id: 'compliance', label: 'Compliance', labelHindi: 'अनुपालन' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-4">
            <span className="text-sm font-medium text-[#f59e0b]">Complete Service Portfolio</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end IT consulting and business solutions to accelerate your digital transformation journey
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#f59e0b] text-black shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105 font-semibold'
                  : 'bg-[#121212] text-gray-400 border border-[#262626] hover:border-[#f59e0b]/50 hover:text-[#f59e0b]'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">{category.labelHindi}</span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              onClick={() => onNavigate('contact')}
              delay={index * 0.05}
            />
          ))}
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No services found in this category</p>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 bg-[#121212] border border-[#262626] rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            Don't See What You're Looking For?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We offer custom solutions tailored to your unique requirements. Let's discuss your project.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black rounded-lg font-semibold transition-all duration-200"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
}
