import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { pricingPlans } from '../data/mockData';
import { PricingCard } from '../components/PricingCard';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Let's discuss how we can help you achieve your goals
          </p>
        </motion.div>

        {/* Contact Info & Form */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2642] rounded-2xl p-8 text-white sticky top-32">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Phone</p>
                    <p className="font-medium">+91 98765 43210</p>
                    <p className="text-sm text-white/70">Mon-Sat, 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Email</p>
                    <p className="font-medium">contact@techconsultpro.com</p>
                    <p className="text-sm text-white/70">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Office</p>
                    <p className="font-medium">123 Business Park</p>
                    <p className="text-sm text-white/70">Cyber City, Gurugram, Haryana 122002</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Working Hours</p>
                    <p className="font-medium">Monday - Saturday</p>
                    <p className="text-sm text-white/70">9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-white/70 mb-4">Connect with us on social media</p>
                <div className="flex gap-3">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                    <button
                      key={social}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <span className="text-xs uppercase">{social[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-[#14b8a6]" />
                <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In *</Label>
                  <select
                    id="service"
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                    required
                  >
                    <option value="">Select a service</option>
                    <option>Web & App Development</option>
                    <option>CRM/ERP Solutions</option>
                    <option>Digital Marketing</option>
                    <option>UI/UX Design</option>
                    <option>E-commerce</option>
                    <option>Compliance Services</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <select
                    id="budget"
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                  >
                    <option value="">Select budget range</option>
                    <option>Under ₹50,000</option>
                    <option>₹50,000 - ₹1,50,000</option>
                    <option>₹1,50,000 - ₹5,00,000</option>
                    <option>Above ₹5,00,000</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, timeline, and goals..."
                    className="mt-2"
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white py-6 text-base"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to suit businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                nameHindi={plan.nameHindi}
                price={plan.price}
                duration={plan.duration}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
                onCTA={() => onNavigate('contact')}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.834088155435!2d77.08562!3d28.459497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sCyber%20City%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
