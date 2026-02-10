'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pricingPlans } from '@/data/mockData';
import { PricingCard } from '@/components/PricingCard';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'consulting',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a backend
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'consulting',
      message: '',
    });
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-4">
            <Phone className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-medium text-[#f59e0b]">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Digital Transformation
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to scale your business? Our team of experts is here to help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            className="bg-[#121212] rounded-3xl p-8 md:p-10 shadow-xl border border-[#262626]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#262626] bg-[#0a0a0a] text-white focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#262626] bg-[#0a0a0a] text-white focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#262626] bg-[#0a0a0a] text-white focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                  placeholder="+91 70708 09208"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Service Interest</label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-[#262626] bg-[#0a0a0a] text-white focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent outline-none transition-all"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="consulting">IT Consulting</option>
                  <option value="development">Software Development</option>
                  <option value="compliance">Business Compliance</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#262626] bg-[#0a0a0a] text-white focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black font-bold py-6 text-lg transition-all duration-300 transform hover:-translate-y-1">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              className="bg-[#121212] rounded-3xl p-8 border border-[#262626]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, text: '+91 70708 09208', label: 'Call Us' },
                  { icon: Mail, text: 'support@edunesservices.in', label: 'Email Us' },
                  { icon: MapPin, text: 'Ward 15, Phulwari Sharif, Patna, Bihar 801505', label: 'Visit Us' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#f59e0b]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="font-medium text-white">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#1a1a1a] to-[#black] rounded-3xl p-8 text-white border border-[#262626] relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-[#f59e0b]">Business Hours</h3>
                <div className="space-y-3 font-medium">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-[#f59e0b]">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          className="rounded-3xl overflow-hidden h-96 shadow-xl border border-[#262626] mb-20 grayscale hover:grayscale-0 transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.37!2d85.06!3d25.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6b155555%3A0x5eb35e389475e7!2sPhulwari+Sharif%2C+Patna%2C+Bihar+801505!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Pricing Section */}
        <div id="pricing" className="mb-20">
            <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Choose a plan that fits your business needs. No hidden charges.
            </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
                <PricingCard
                key={plan.name}
                {...plan}
                onCTA={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setFormData(prev => ({ ...prev, service: plan.name }));
                }}
                delay={index * 0.1}
                />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
