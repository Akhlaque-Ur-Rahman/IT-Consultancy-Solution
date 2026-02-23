"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Briefcase,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "consulting",
    message: "",
  });

  useEffect(() => {
    const serviceParam = searchParams?.get("service");
    if (serviceParam) {
      const normalized = serviceParam.toLowerCase().trim();
      setFormData((prev) => ({ ...prev, service: normalized }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }

    setIsSubmitted(true);
    // Mimic API call
    setTimeout(() => {
      // Logic after submission (e.g. redirect or stay on success)
    }, 3000);
  };

  const handleBack = () => setStep(1);

  return (
    <div className="pt-8 pb-20 min-h-screen bg-black">
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
            <span className="text-sm font-medium text-[#f59e0b]">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Digital Transformation
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to scale your business? Our team of experts is here to help
            you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Contact Form Container */}
          <motion.div
            className="bg-[#121212] rounded-3xl overflow-hidden shadow-2xl border border-[#262626] relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Form Header / Progress */}
            {!isSubmitted && (
              <div className="bg-[#1a1a1a] px-8 py-6 border-b border-[#262626] flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {step === 1
                      ? "Step 1: Contact Details"
                      : "Step 2: Project Info"}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    {step === 1
                      ? "Start with your interest"
                      : "Tell us what you need"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <div
                    className={`w-10 h-1.5 rounded-full transition-colors ${
                      step >= 1 ? "bg-[#f59e0b]" : "bg-[#262626]"
                    }`}
                  />
                  <div
                    className={`w-10 h-1.5 rounded-full transition-colors ${
                      step >= 2 ? "bg-[#f59e0b]" : "bg-[#262626]"
                    }`}
                  />
                </div>
              </div>
            )}

            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#f59e0b]/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#f59e0b]" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 max-w-xs mx-auto mb-8">
                      Thank you for reaching out. Our team will review your
                      request and get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "consulting",
                          message: "",
                        });
                      }}
                      variant="outline"
                      className="border-[#262626] text-gray-300 hover:bg-[#1a1a1a]"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatePresence mode="wait">
                      {step === 1 ? (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">
                              Full Name
                            </label>
                            <div className="relative group">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#f59e0b] transition-colors" />
                              <input
                                type="text"
                                required
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#262626] bg-[#0a0a0a] text-white focus:ring-2 focus:ring-[#f59e0b]/50 focus:border-[#f59e0b] outline-none transition-all placeholder:text-gray-600"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    name: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">
                              Email Address
                            </label>
                            <div className="relative group">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#f59e0b] transition-colors" />
                              <input
                                type="email"
                                required
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#262626] bg-[#0a0a0a] text-white focus:ring-2 focus:ring-[#f59e0b]/50 focus:border-[#f59e0b] outline-none transition-all placeholder:text-gray-600"
                                placeholder="john@company.com"
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">
                              Service Interest
                            </label>
                            <div className="relative group">
                              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#f59e0b] transition-colors" />
                              <select
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#262626] bg-[#0a0a0a] text-white focus:ring-2 focus:ring-[#f59e0b]/50 focus:border-[#f59e0b] outline-none transition-all appearance-none cursor-pointer"
                                value={formData.service}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    service: e.target.value,
                                  })
                                }
                              >
                                <option value="consulting">
                                  IT Consulting
                                </option>
                                <option value="web-app-development">
                                  Web & App Development
                                </option>
                                <option value="crm-erp-solutions">
                                  CRM/ERP/Billing Solutions
                                </option>
                                <option value="digital-marketing-services">
                                  Digital Marketing
                                </option>
                                <option value="ui-ux-design">
                                  UI/UX Design
                                </option>
                                <option value="ecommerce-solutions">
                                  E-commerce Solutions
                                </option>
                                <option value="lead-management-systems">
                                  Lead Management
                                </option>
                                <option value="ivr-calling-solutions">
                                  IVR Solutions
                                </option>
                                <option value="hyperlocal-platform-dev">
                                  Hyperlocal Platforms
                                </option>
                                <option value="seo-optimization-expert">
                                  SEO & Optimization
                                </option>
                                <option value="animation-graphics-design">
                                  Animation & Graphics
                                </option>
                                <option value="business-registration-compliance">
                                  Business Registration & Compliance
                                </option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold h-14 text-lg rounded-xl transition-all shadow-[0_4px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)] group"
                          >
                            Next Step
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">
                              Phone Number
                            </label>
                            <div className="relative group">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#f59e0b] transition-colors" />
                              <input
                                type="tel"
                                required
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#262626] bg-[#0a0a0a] text-white focus:ring-2 focus:ring-[#f59e0b]/50 focus:border-[#f59e0b] outline-none transition-all placeholder:text-gray-600"
                                placeholder="+91 70708 09208"
                                value={formData.phone}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">
                              Message
                            </label>
                            <div className="relative group">
                              <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-500 group-focus-within:text-[#f59e0b] transition-colors" />
                              <textarea
                                rows={6}
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#262626] bg-[#0a0a0a] text-white focus:ring-2 focus:ring-[#f59e0b]/50 focus:border-[#f59e0b] outline-none transition-all placeholder:text-gray-600 resize-none"
                                placeholder="Tell us about your project requirements..."
                                value={formData.message}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    message: e.target.value,
                                  })
                                }
                              ></textarea>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <Button
                              type="button"
                              onClick={handleBack}
                              variant="outline"
                              className="bg-transparent border-[#262626] text-gray-400 hover:bg-[#1a1a1a] hover:text-white h-14 rounded-xl px-8"
                            >
                              <ChevronLeft className="mr-2 w-5 h-5" />
                              Back
                            </Button>
                            <Button
                              type="submit"
                              className="flex-1 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-bold h-14 text-lg rounded-xl transition-all shadow-[0_4px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)] group"
                            >
                              Send Message
                              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              className="bg-[#121212] rounded-3xl p-8 border border-[#262626]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, text: "+91 70708 09208", label: "Call Us" },
                  {
                    icon: Mail,
                    text: "support@edunesservices.in",
                    label: "Email Us",
                  },
                  {
                    icon: MapPin,
                    text: "Ward 15, Phulwari Sharif, Patna, Bihar 801505",
                    label: "Visit Us",
                  },
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
              className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-3xl p-8 text-white border border-[#262626] relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-[#f59e0b]">
                  Business Hours
                </h3>
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
        <div className="mb-20">
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <MapPin className="w-5 h-5 text-[#f59e0b]" />
            <h3 className="text-xl font-bold text-white">Our Location</h3>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden h-96 shadow-xl border border-[#262626] bg-[#0a0a0a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Ward%2015%2C%20Phulwari%20Sharif%2C%20Patna%2C%20Bihar%20801505&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#f59e0b] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
