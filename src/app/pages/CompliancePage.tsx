import { motion } from 'motion/react';
import { complianceServices } from '../data/mockData';
import { Check, ArrowRight, FileText, Shield, Clock, IndianRupee } from 'lucide-react';
import { Button } from '../components/ui/button';

interface CompliancePageProps {
  onNavigate: (page: string) => void;
}

export function CompliancePage({ onNavigate }: CompliancePageProps) {
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
            <Shield className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-medium text-[#f59e0b]">Legal & Compliance Services</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Business Registration & Compliance
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Navigate the complexities of business registration, tax compliance, and legal requirements with expert guidance
          </p>
        </motion.div>

        {/* Flow Chart UI */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-[#121212] rounded-2xl border border-[#262626] p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Your Path to Complete Compliance
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: 1, label: 'Consultation', icon: '📋' },
                { step: 2, label: 'Documentation', icon: '📄' },
                { step: 3, label: 'Filing', icon: '🔄' },
                { step: 4, label: 'Approval', icon: '✓' },
                { step: 5, label: 'Support', icon: '🤝' },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-2xl mb-3 text-white">
                      {item.icon}
                    </div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-gray-500">Step {item.step}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#f59e0b]/50 to-transparent -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {complianceServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-[#121212] rounded-2xl border border-[#262626] p-8 hover:border-[#f59e0b]/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#f59e0b] italic mb-1">{service.titleHindi}</p>
                  <p className="text-gray-400">{service.description}</p>
                </div>
                <div className="ml-4">
                  <FileText className="w-10 h-10 text-[#f59e0b]" />
                </div>
              </div>

              {/* Steps */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 mb-3">Process Steps:</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-6 h-6 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-[#f59e0b]">{idx + 1}</span>
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-[#0a0a0a] rounded-lg border border-[#262626]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Timeline</p>
                    <p className="text-sm font-semibold text-white">{service.timeline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Pricing</p>
                    <p className="text-sm font-semibold text-white">{service.price}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button
                onClick={() => onNavigate('contact')}
                className="w-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black font-semibold"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          className="bg-[#121212] border border-[#262626] rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-white">
            Why Choose Our Compliance Services?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '100% Compliant',
                description: 'Stay fully compliant with all legal and regulatory requirements',
              },
              {
                icon: Clock,
                title: 'Fast Processing',
                description: 'Quick turnaround times with expert handling of all paperwork',
              },
              {
                icon: FileText,
                title: 'End-to-End Support',
                description: 'From initial consultation to post-filing assistance',
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[#262626] group-hover:border-[#f59e0b] flex items-center justify-center mx-auto mb-4 transition-colors">
                  <item.icon className="w-8 h-8 text-[#f59e0b]" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
