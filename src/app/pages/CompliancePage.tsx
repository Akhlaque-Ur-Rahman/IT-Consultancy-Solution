import { motion } from 'motion/react';
import { complianceServices } from '../data/mockData';
import { Check, ArrowRight, FileText, Shield, Clock, IndianRupee } from 'lucide-react';
import { Button } from '../components/ui/button';

interface CompliancePageProps {
  onNavigate: (page: string) => void;
}

export function CompliancePage({ onNavigate }: CompliancePageProps) {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-[#f9fafb] to-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 mb-4">
            <Shield className="w-4 h-4 text-[#0f766e]" />
            <span className="text-sm font-medium text-[#0f766e]">Legal & Compliance Services</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Business Registration & Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a3a5c] to-[#14b8a6] flex items-center justify-center text-2xl mb-3">
                      {item.icon}
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500">Step {item.step}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#14b8a6] to-transparent -z-10"></div>
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
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 italic mb-1">{service.titleHindi}</p>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="ml-4">
                  <FileText className="w-10 h-10 text-[#14b8a6]" />
                </div>
              </div>

              {/* Steps */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">Process Steps:</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-6 h-6 rounded-full bg-[#14b8a6]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-[#14b8a6]">{idx + 1}</span>
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Timeline</p>
                    <p className="text-sm font-semibold text-gray-900">{service.timeline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Pricing</p>
                    <p className="text-sm font-semibold text-gray-900">{service.price}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2642] rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
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
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
