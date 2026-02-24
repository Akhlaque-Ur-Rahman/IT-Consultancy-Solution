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
  ShieldCheck,
  Lock,
  Clock,
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

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...formData,
          from_name: "EDUNEX Contact Page",
          subject: `Contact Lead: ${formData.service}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
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
            Let&apos;s Talk About Your{" "}
            <span className="text-[#f59e0b]">Next Project</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Have a question? Or ready to start building? We&apos;re here to help
            you every step of the way.
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
                      ? "Step 1: Your Details"
                      : "Step 2: How can we help?"}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    {step === 1
                      ? "Tell us how to reach you"
                      : "Tell us what you're looking for"}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex gap-1.5">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          step >= i ? "w-8 bg-[#f59e0b]" : "w-4 bg-[#262626]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Step {step} of 2
                  </span>
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
                      Thank you for reaching out. We&apos;ve received your
                      message and one of our experts will call you within 24
                      hours.
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
                        setStatus("idle");
                      }}
                      variant="outline"
                      className="border-[#262626] text-gray-300 hover:bg-[#1a1a1a]"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <div className="space-y-8">
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
                                    Expert Business Advice
                                  </option>
                                  <option value="web-app-development">
                                    Build a Website or Mobile App
                                  </option>
                                  <option value="crm-erp-solutions">
                                    Manage Staff, Billing & Office
                                  </option>
                                  <option value="digital-marketing-services">
                                    Grow Sales & Social Media
                                  </option>
                                  <option value="ui-ux-design">
                                    Design My App or Logo
                                  </option>
                                  <option value="ecommerce-solutions">
                                    Start an Online Store
                                  </option>
                                  <option value="lead-management-systems">
                                    Track New Customers
                                  </option>
                                  <option value="ivr-calling-solutions">
                                    Automatic Phone System (IVR)
                                  </option>
                                  <option value="hyperlocal-platform-dev">
                                    Delivery or Rider App
                                  </option>
                                  <option value="seo-optimization-expert">
                                    Rank Higher on Google (SEO)
                                  </option>
                                  <option value="animation-graphics-design">
                                    Videos & Animations
                                  </option>
                                  <option value="business-registration-compliance">
                                    GST, Tax & Registration
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
                                disabled={status === "loading"}
                                className="flex-1 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-bold h-14 text-lg rounded-xl transition-all shadow-[0_4px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)] group"
                              >
                                {status === "loading"
                                  ? "Sending..."
                                  : "Send Message"}
                                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              </Button>
                            </div>
                            {status === "error" && (
                              <p className="text-red-500 text-sm text-center">
                                Something went wrong. Please try again or call
                                us.
                              </p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </div>
                )}
              </AnimatePresence>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/5 flex items-center justify-center border border-[#f59e0b]/10">
                    <ShieldCheck className="w-5 h-5 text-[#f59e0b]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-tight">
                      100% Private
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Your data is safe with us
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/5 flex items-center justify-center border border-[#f59e0b]/10">
                    <Clock className="w-5 h-5 text-[#f59e0b]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-tight">
                      Fast Callback
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Response in &lt; 24 hours
                    </p>
                  </div>
                </div>
              </div>
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
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-[#f59e0b]" />
            <h3 className="text-xl font-bold text-white">Our Location</h3>
          </div>

          <motion.div
            className="group relative rounded-3xl overflow-hidden h-96 shadow-2xl border border-[#262626] bg-[#0a0a0a]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "#f59e0b" }}
            transition={{ duration: 0.5 }}
          >
            {/* Glossy Overlay for depth */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-[#f59e0b]/5 via-transparent to-[#f59e0b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Map Filter Wrapper */}
            <div className="w-full h-full grayscale invert-[0.9] contrast-[1.2] brightness-[0.9] transition-all duration-700 group-hover:contrast-[1.1] group-hover:brightness-[1]">
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
            </div>

            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-[#f59e0b]/20 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
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
