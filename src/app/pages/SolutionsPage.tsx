import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';

interface SolutionsPageProps {
  onNavigate: (page: string) => void;
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const solutions = [
    {
      id: 'crm',
      icon: Users,
      name: 'Custom CRM',
      tagline: 'Manage customer relationships effectively',
      description: 'A complete customer relationship management system tailored to your business processes',
      features: [
        'Contact & Lead Management',
        'Sales Pipeline Tracking',
        'Email & SMS Integration',
        'Custom Workflows',
        'Advanced Analytics & Reports',
        'Mobile Apps (iOS & Android)',
        'Third-party Integrations',
        'Role-based Access Control',
      ],
      benefits: [
        'Increase sales productivity by 35%',
        'Improve customer retention by 28%',
        'Reduce response time by 60%',
        'Automate repetitive tasks',
      ],
      pricing: 'Starting ₹1,49,999',
    },
    {
      id: 'erp',
      icon: BarChart3,
      name: 'Enterprise ERP',
      tagline: 'Unified business management platform',
      description: 'Integrate all your business processes into one powerful system',
      features: [
        'Inventory Management',
        'Financial Accounting',
        'HR & Payroll',
        'Supply Chain Management',
        'Production Planning',
        'Multi-location Support',
        'Real-time Dashboards',
        'Custom Module Development',
      ],
      benefits: [
        'Reduce operational costs by 25%',
        'Improve data accuracy by 95%',
        'Streamline processes across departments',
        'Make data-driven decisions faster',
      ],
      pricing: 'Starting ₹2,99,999',
    },
    {
      id: 'billing',
      icon: Zap,
      name: 'Billing & Invoicing',
      tagline: 'Automated billing made simple',
      description: 'Streamline your billing process with our intelligent invoicing system',
      features: [
        'Automated Invoice Generation',
        'Recurring Billing',
        'Payment Gateway Integration',
        'GST Compliance',
        'Expense Tracking',
        'Multi-currency Support',
        'Client Portal',
        'Automated Reminders',
      ],
      benefits: [
        'Reduce billing errors by 90%',
        'Get paid 40% faster',
        'Save 15 hours per week',
        'Improve cash flow management',
      ],
      pricing: 'Starting ₹49,999',
    },
    {
      id: 'ivr',
      icon: Shield,
      name: 'IVR System',
      tagline: 'Intelligent call management',
      description: 'Interactive Voice Response system for seamless customer communication',
      features: [
        'Multi-level IVR Menu',
        'Call Routing & Queuing',
        'Voicemail & Recording',
        'CRM Integration',
        'Multi-language Support',
        'Real-time Analytics',
        'Auto Attendant',
        'Call Transfer & Conference',
      ],
      benefits: [
        'Reduce call handling time by 45%',
        'Handle 3x more calls',
        'Improve customer satisfaction',
        '24/7 automated support',
      ],
      pricing: 'Starting ₹99,999',
    },
  ];

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
            <Zap className="w-4 h-4 text-[#0f766e]" />
            <span className="text-sm font-medium text-[#0f766e]">Enterprise Solutions</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Products & Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful, scalable business solutions designed to streamline operations and drive growth
          </p>
        </motion.div>

        {/* Solutions */}
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a3a5c] to-[#14b8a6] flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {solution.name}
                </h2>
                <p className="text-[#14b8a6] font-medium mb-4">{solution.tagline}</p>
                <p className="text-gray-600 text-lg mb-6">{solution.description}</p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Starting at</p>
                    <p className="text-2xl font-bold text-gray-900">{solution.pricing}</p>
                  </div>
                  <Button
                    onClick={() => onNavigate('contact')}
                    className="ml-auto bg-[#f97316] hover:bg-[#ea580c] text-white px-8"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Features Card */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">
                    Features Included
                  </h4>
                  <div className="space-y-4">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#14b8a6]/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-[#14b8a6]" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hyperlocal Platform Section */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-[#1a3a5c] via-[#0f2642] to-[#0a1628] rounded-3xl p-12 text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#14b8a6] rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Hyperlocal Platform</h2>
                <p className="text-xl text-white/80 mb-6">
                  Connect local businesses with customers through location-based services
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Real-time geolocation tracking',
                    'Multi-vendor marketplace',
                    'Automated order routing',
                    'In-app chat & notifications',
                    'Payment gateway integration',
                    'Analytics dashboard',
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#14b8a6]" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Button
                    onClick={() => onNavigate('contact')}
                    className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8"
                  >
                    Request Demo
                  </Button>
                  <Button
                    onClick={() => onNavigate('case-studies')}
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a5c] px-8"
                  >
                    View Case Study
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Delivery Partners', value: '500+' },
                  { label: 'Daily Orders', value: '10K+' },
                  { label: 'Cities Covered', value: '25+' },
                  { label: 'Avg Rating', value: '4.8★' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                  >
                    <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We build bespoke software tailored to your unique business requirements
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-[#1a3a5c] hover:bg-[#0f2642] text-white px-10 py-6 text-lg"
          >
            Discuss Your Requirements
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
