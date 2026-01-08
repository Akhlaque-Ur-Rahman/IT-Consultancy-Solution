import { motion } from 'motion/react';
import { MapPin, Building2, Users, Award } from 'lucide-react';

interface LocalSEOSectionProps {
  onNavigate: (page: string) => void;
}

export function LocalSEOSection({ onNavigate }: LocalSEOSectionProps) {
  const serviceAreas = [
    { city: 'Phulwari Sharif', state: 'Patna' },
    { city: 'Danapur', state: 'Patna' },
    { city: 'Kankarbagh', state: 'Patna' },
    { city: 'Boring Road', state: 'Patna' },
    { city: 'Bailey Road', state: 'Patna' },
    { city: 'Patliputra', state: 'Patna' },
    { city: 'Rajendra Nagar', state: 'Patna' },
    { city: 'Gandhi Maidan', state: 'Patna' },
  ];

  const localTrust = [
    { icon: Building2, value: '500+', label: 'Happy Clients' },
    { icon: Users, value: '15+', label: 'Years Experience' },
    { icon: Award, value: 'ISO', label: 'Certified' },
    { icon: MapPin, value: '10+', label: 'Local Areas' },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-[#262626]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted IT Consulting Partner in Patna
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Delivering enterprise-grade IT solutions, software development, and business consulting services to organizations across Patna and Bihar
          </p>
        </motion.div>

        {/* Local Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {localTrust.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#121212] border border-[#262626] rounded-lg p-6 text-center hover:border-[#f59e0b]/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className="w-8 h-8 text-[#f59e0b] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Areas */}
        <div className="bg-[#121212] border border-[#262626] rounded-lg p-8">
          <h3 className="text-xl font-semibold text-[#f59e0b] mb-6 text-center">
            Our Service Areas in Patna
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-gray-300 p-3 rounded-md hover:bg-[#1a1a1a] transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <MapPin className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-white">{area.city}</div>
                  <div className="text-xs text-gray-500">{area.state}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SEO Content Block */}
        <div className="mt-12 prose prose-invert max-w-none">
          <div className="bg-[#121212] border border-[#262626] rounded-lg p-8">
            <h3 className="text-lg font-semibold text-white mb-4">
              Leading IT Consulting Company in Patna, Bihar
            </h3>
            <div className="text-sm text-gray-400 leading-relaxed space-y-3">
              <p>
                EDUNEX is a premier IT consulting and software development company serving businesses across Patna. With over 15 years of experience, we specialize in delivering enterprise-grade web and mobile application development, CRM/ERP implementation, digital marketing, UI/UX design, e-commerce solutions, and comprehensive business compliance services.
              </p>
              <p>
                Our team of certified developers, designers, and consultants work with organizations in Phulwari Sharif, Danapur, Kankarbagh, and other major areas of Patna to transform their digital infrastructure and drive business growth through technology innovation.
              </p>
              <p>
                Whether you need custom software development, cloud migration, digital transformation consulting, or ongoing IT support, EDUNEX provides tailored solutions that align with your business objectives and budget requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
