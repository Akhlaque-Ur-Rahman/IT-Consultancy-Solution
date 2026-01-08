import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { TrustCarousel } from '../components/TrustCarousel';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { MetricsCounter } from '../components/MetricsCounter';
import { LocalSEOSection } from '../components/LocalSEOSection';
import { GMBStyleReviews } from '../components/GMBStyleReviews';
import { FAQSection } from '../components/FAQSection';
import { motion } from 'motion/react';
import { services, clientLogos, caseStudies, metrics, faqs, gmbReviews } from '../data/mockData';
import { Button } from '../components/ui/button';
import { ArrowRight, Code, Database, TrendingUp, Shield } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // SEO-optimized service categories
  const primaryServices = services.filter(s => 
    ['web-app-dev', 'crm-erp', 'digital-marketing', 'compliance'].includes(s.id)
  );

  const serviceCategories = [
    {
      id: 'it-consulting',
      icon: Code,
      title: 'IT Consulting & Strategy',
      description: 'Enterprise technology consulting for digital transformation and business growth',
    },
    {
      id: 'software-dev',
      icon: Database,
      title: 'Software Development',
      description: 'Custom web, mobile, and enterprise application development services',
    },
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and performance-driven digital strategies',
    },
    {
      id: 'compliance',
      icon: Shield,
      title: 'Business & Legal Compliance',
      description: 'Company registration, GST, trademark, and complete compliance management',
    },
  ];

  return (
    <div className="bg-black">
      {/* SEO: H1 is in Hero component */}
      <Hero onNavigate={onNavigate} />

      {/* Trust Signals - Client Logos */}
      <TrustCarousel logos={clientLogos} />

      {/* SEO Section: Main Services - H2 */}
      <section className="py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Comprehensive IT Consulting &amp; Software Development Services
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              EDUNEX delivers enterprise-grade technology solutions including web and mobile app development, CRM/ERP systems, digital marketing, UI/UX design, e-commerce platforms, and complete business compliance services for organizations across India
            </p>
          </motion.div>

          {/* Service Category Grid - H3 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  className="bg-[#121212] border border-[#262626] rounded-lg p-6 hover:border-[#f59e0b]/50 transition-all duration-200 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => onNavigate('services')}
                >
                  <Icon className="w-12 h-12 text-[#f59e0b] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#f59e0b] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                onClick={() => onNavigate('services')}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* SEO Content Block */}
          <motion.div
            className="mt-16 bg-[#121212] border border-[#262626] rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#f59e0b] mb-4">
              Why Choose EDUNEX for IT Consulting and Software Development?
            </h3>
            <div className="text-sm text-gray-400 leading-relaxed space-y-3">
              <p>
                EDUNEX is a leading IT consulting and software development company serving businesses across India. With over 15 years of experience, we specialize in delivering custom web applications, mobile apps (iOS and Android), enterprise CRM/ERP systems, e-commerce platforms, and digital transformation solutions tailored to your business needs.
              </p>
              <p>
                Our team of certified developers, UI/UX designers, digital marketing experts, and compliance professionals work collaboratively to transform your digital infrastructure. We follow industry best practices, agile methodologies, and maintain ISO 9001:2015 certification to ensure quality delivery.
              </p>
              <p>
                Whether you're a startup looking for a minimal viable product (MVP) or an established enterprise requiring complex system integration, EDUNEX provides end-to-end technology solutions with transparent pricing, dedicated project managers, and ongoing support.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => onNavigate('services')}
              className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-black font-semibold px-10 py-6 text-base transition-all duration-200 group"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Metrics Counter - Trust Signals */}
      <MetricsCounter metrics={metrics} />

      {/* Case Studies Section - H2 */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-4">
              <span className="text-sm font-medium text-[#f59e0b]">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Real Results from Our IT Consulting Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how EDUNEX has helped businesses across India transform their operations through custom software development, digital marketing, and enterprise solutions
            </p>
          </motion.div>

          {/* Case Study Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                title={caseStudy.title}
                client={caseStudy.client}
                industry={caseStudy.industry}
                image={caseStudy.image}
                impact={caseStudy.impact}
                onClick={() => onNavigate('case-studies')}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => onNavigate('case-studies')}
              className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-black font-semibold px-10 py-6 text-base transition-all duration-200 group"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* GMB-Style Reviews - Social Proof */}
      <GMBStyleReviews reviews={gmbReviews} />

      {/* Local SEO Section - Geographic + NAP */}
      <LocalSEOSection onNavigate={onNavigate} />

      {/* FAQ Section - Schema.org */}
      <FAQSection 
        faqs={faqs}
        title="Frequently Asked Questions About Our IT Services"
        description="Get answers to common questions about our software development, consulting, and business services"
      />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] border-t border-[#262626] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f59e0b] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f59e0b] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with Technology?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Schedule a free consultation with our IT experts to discuss your project requirements, budget, and timeline. Get a detailed proposal with transparent pricing and delivery milestones.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-black font-semibold px-10 py-7 text-lg transition-all duration-200"
              >
                Schedule Free Consultation
              </Button>
              <Button
                onClick={() => onNavigate('about')}
                variant="outline"
                className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black px-10 py-7 text-lg transition-all duration-200"
              >
                Learn More About EDUNEX
              </Button>
            </div>
            
            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <span>✓ 500+ Projects Delivered</span>
              <span>•</span>
              <span>✓ 15+ Years Experience</span>
              <span>•</span>
              <span>✓ ISO 9001:2015 Certified</span>
              <span>•</span>
              <span>✓ 99.9% Uptime Guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schema.org JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "EDUNEX",
            "alternateName": "EDUNEX IT Consulting",
            "description": "Enterprise IT consulting, software development, CRM/ERP implementation, digital marketing, and business compliance services",
            "url": "https://edunex.tech",
            "telephone": "+91-98765-43210",
            "email": "contact@edunex.tech",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Business Park, Cyber City",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "postalCode": "122002",
              "addressCountry": "IN"
            },
            "areaServed": ["Gurugram", "Delhi", "Noida", "Mumbai", "Bangalore", "Hyderabad", "India"],
            "priceRange": "₹₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
            },
            "serviceType": ["IT Consulting", "Software Development", "CRM/ERP Implementation", "Digital Marketing", "Business Compliance"]
          })
        }}
      />
    </div>
  );
}
