import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export function ContactForm({
  isOpen,
  onClose,
  prefilledService = "",
}: ContactFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Use prefilledService for initial state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: prefilledService || "",
    message: "",
  });

  // Update service if prefilledService changes
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  const servicesList = [
    { label: "Web & App Development", slug: "web-app-development" },
    { label: "CRM/ERP/Billing Solutions", slug: "crm-erp-solutions" },
    { label: "Digital Marketing", slug: "digital-marketing-services" },
    { label: "UI/UX Design", slug: "ui-ux-design" },
    { label: "E-commerce Solutions", slug: "ecommerce-solutions" },
    { label: "Lead Management", slug: "lead-management-systems" },
    { label: "IVR Solutions", slug: "ivr-calling-solutions" },
    { label: "Hyperlocal Platforms", slug: "hyperlocal-platform-dev" },
    { label: "SEO & Optimization", slug: "seo-optimization-expert" },
    { label: "Animation & Graphics", slug: "animation-graphics-design" },
    {
      label: "Business Registration & Compliance",
      slug: "business-registration-compliance",
    },
    { label: "Other", slug: "other" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-[#121212] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#262626]">
              {/* Header */}
              <div className="sticky top-0 bg-[#121212] border-b border-[#262626] px-8 py-6 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Request a Demo
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors group"
                >
                  <X className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </motion.button>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Basic Info */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                            className="w-full px-3 py-2 rounded-md bg-[#0a0a0a] border border-[#262626] text-white focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent placeholder:text-gray-600 transition-all"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            required
                            className="w-full px-3 py-2 rounded-md bg-[#0a0a0a] border border-[#262626] text-white focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent placeholder:text-gray-600 transition-all"
                            placeholder="your.email@company.com"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Phone Number *
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            required
                            className="w-full px-3 py-2 rounded-md bg-[#0a0a0a] border border-[#262626] text-white focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent placeholder:text-gray-600 transition-all"
                            placeholder="+91 70708 09208"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Company Name
                          </label>
                          <input
                            id="company"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 rounded-md bg-[#0a0a0a] border border-[#262626] text-white focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent placeholder:text-gray-600 transition-all"
                            placeholder="Your company name"
                          />
                        </div>

                        <Button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black font-bold h-11"
                        >
                          Next Step
                        </Button>
                      </motion.div>
                    )}

                    {/* Step 2: Service & Message */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Service Interested In *
                          </label>
                          <select
                            id="service"
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                service: e.target.value,
                              })
                            }
                            required
                            className="w-full px-3 py-2 rounded-md bg-[#0a0a0a] border border-[#262626] text-white focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent transition-all"
                          >
                            <option value="" className="bg-[#121212]">
                              Select a service
                            </option>
                            {servicesList.map((service) => (
                              <option
                                key={service.slug}
                                value={service.slug}
                                className="bg-[#121212]"
                              >
                                {service.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Tell Us About Your Project *
                          </label>
                          <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                            required
                            className="w-full px-3 py-2 rounded-md bg-[#0a0a0a] border border-[#262626] text-white focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent placeholder:text-gray-600 transition-all resize-none"
                            rows={6}
                            placeholder="Describe your requirements, timeline, and any specific goals..."
                          />
                        </div>

                        <div className="flex gap-4">
                          <Button
                            type="button"
                            onClick={() => setStep(1)}
                            variant="outline"
                            className="flex-1 border-[#262626] text-gray-300 hover:bg-[#1a1a1a] hover:text-white h-11 bg-transparent"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="flex-1 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black font-bold h-11"
                          >
                            Submit Request
                            <Send className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#f59e0b]/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#f59e0b]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Request Submitted!
                    </h3>
                    <p className="text-gray-400">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Progress Indicator */}
              {!isSubmitted && (
                <div className="px-8 pb-6">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex-1 h-2 rounded-full ${step >= 1 ? "bg-[#f59e0b]" : "bg-[#262626]"}`}
                    ></div>
                    <div
                      className={`flex-1 h-2 rounded-full ${step >= 2 ? "bg-[#f59e0b]" : "bg-[#262626]"}`}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">Basic Info</span>
                    <span className="text-xs text-gray-500">
                      Project Details
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
