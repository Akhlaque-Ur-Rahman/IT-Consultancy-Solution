import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 2000);
  };

  const services = [
    'Web & App Development',
    'CRM/ERP Solutions',
    'Digital Marketing',
    'UI/UX Design',
    'E-commerce',
    'Compliance Services',
    'Other',
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Request a Demo</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
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
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="mt-2"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="mt-2"
                            placeholder="your.email@company.com"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            className="mt-2"
                            placeholder="+91 70708 09208"
                          />
                        </div>

                        <div>
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="mt-2"
                            placeholder="Your company name"
                          />
                        </div>

                        <Button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full bg-[#1a3a5c] hover:bg-[#0f2642] text-white"
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
                          <Label htmlFor="service">Service Interested In *</Label>
                          <select
                            id="service"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            required
                            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <Label htmlFor="message">Tell Us About Your Project *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            className="mt-2"
                            rows={6}
                            placeholder="Describe your requirements, timeline, and any specific goals..."
                          />
                        </div>

                        <div className="flex gap-4">
                          <Button
                            type="button"
                            onClick={() => setStep(1)}
                            variant="outline"
                            className="flex-1"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="flex-1 bg-[#f97316] hover:bg-[#ea580c] text-white"
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
                    <div className="w-20 h-20 rounded-full bg-[#14b8a6]/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#14b8a6]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Request Submitted!
                    </h3>
                    <p className="text-gray-600">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Progress Indicator */}
              {!isSubmitted && (
                <div className="px-8 pb-6">
                  <div className="flex items-center gap-2">
                    <div className={`flex-1 h-2 rounded-full ${step >= 1 ? 'bg-[#14b8a6]' : 'bg-gray-200'}`}></div>
                    <div className={`flex-1 h-2 rounded-full ${step >= 2 ? 'bg-[#14b8a6]' : 'bg-gray-200'}`}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">Basic Info</span>
                    <span className="text-xs text-gray-500">Project Details</span>
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
