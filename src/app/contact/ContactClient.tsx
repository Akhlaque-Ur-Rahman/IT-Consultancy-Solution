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
  Clock,
  Cpu,
  TrendingUp,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormThemeSelect } from "@/components/FormThemeSelect";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";
import { CONTACT_FORM_SERVICES } from "@/lib/contactFormOptions";
import {
  buildContactPrefillMessage,
  buildContactSubmissionSource,
  resolveContactServiceSlug,
} from "@/lib/contactPrefill";

function emptyFormFromSearchParams(
  sp: { get: (key: string) => string | null } | null,
) {
  const serviceSlug = resolveContactServiceSlug(sp?.get("service"));
  const engagementSlug = sp?.get("engagement");
  const refPath = sp?.get("ref");
  const shouldPrefill = Boolean(
    engagementSlug || refPath || sp?.get("service"),
  );
  return {
    name: "",
    email: "",
    phone: "",
    company: "",
    service: serviceSlug,
    message: shouldPrefill
      ? buildContactPrefillMessage({
          serviceSlug,
          engagementSlug,
          refPath,
        })
      : "",
  };
}

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "consulting",
    company: "",
    message: "",
  });

  useEffect(() => {
    const sp = searchParams;
    if (!sp) return;

    const serviceSlug = resolveContactServiceSlug(sp.get("service"));
    const engagementSlug = sp.get("engagement");
    const refPath = sp.get("ref");
    const shouldPrefill = Boolean(
      engagementSlug || refPath || sp.get("service"),
    );

    setFormData((prev) => ({
      ...prev,
      service: serviceSlug,
      message: shouldPrefill
        ? buildContactPrefillMessage({
            serviceSlug,
            engagementSlug,
            refPath,
          })
        : prev.message,
    }));
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
      const { supabase } = await import("@/lib/supabase");
      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        source: buildContactSubmissionSource({
          refPath: searchParams?.get("ref"),
          engagementSlug: searchParams?.get("engagement"),
        }),
      });
      if (error) throw error;
      setIsSubmitted(true);
      setStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const handleBack = () => setStep(1);

  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Contact Us", item: "/contact" },
          ]}
        />

        <SectionAmbient
          preset="surface"
          className="relative border-b border-[#262626] py-20 md:py-28 lg:py-32"
        >
          <div className="relative mx-auto max-w-[1400px] px-6">
            <div
              className="pointer-events-none absolute inset-0 -mx-6 overflow-hidden rounded-none md:-mx-10"
              aria-hidden
            >
              <div
                className="absolute -left-1/4 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-y-1/2 rounded-full opacity-[0.12]"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(245,158,11,0.55) 0%, transparent 62%)",
                  filter: "blur(2px)",
                }}
              />
              <div
                className="absolute -right-1/4 bottom-0 h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full opacity-[0.1]"
                style={{
                  background:
                    "radial-gradient(circle at 60% 60%, rgba(251,191,36,0.45) 0%, transparent 65%)",
                  filter: "blur(3px)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: "64px 64px",
                  maskImage:
                    "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 75%)",
                }}
              />
            </div>

            <div className="relative grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
              <motion.div
                className="lg:col-span-7 xl:col-span-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 shadow-[0_0_0_1px_rgba(245,158,11,0.08),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
                  <Phone
                    className="h-4 w-4 text-[#fbbf24]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-[13px] font-medium tracking-wide text-[#fde68a]/90">
                    Local IT support in Bihar
                  </span>
                  <span className="hidden h-3 w-px bg-white/15 sm:inline" />
                  <span className="hidden text-[13px] text-gray-500 sm:inline">
                    Patna team · same-day callback
                  </span>
                </div>

                <h1 className="mb-6 max-w-[18ch] text-left text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.08] lg:max-w-none lg:text-[3.25rem] xl:text-[3.5rem]">
                  Let&apos;s build your{" "}
                  <span className="relative inline">
                    <span className="relative z-[1] bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                      business success
                    </span>
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[0.35em] rounded-sm bg-gradient-to-r from-[#f59e0b]/25 via-[#fbbf24]/20 to-transparent opacity-90"
                      aria-hidden
                    />
                  </span>
                </h1>

                <p className="mb-10 max-w-xl text-left text-base leading-relaxed text-gray-400 md:text-lg [text-wrap:pretty]">
                  Ready to upgrade your shop&apos;s software, win more local
                  customers, or stay on top of GST? Send a message - our Patna team
                  will get back to you quickly.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Software & billing", icon: Cpu },
                    { label: "Local SEO & growth", icon: TrendingUp },
                    { label: "GST & compliance", icon: ShieldCheck },
                  ].map(({ label, icon: Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#0a0a0a]/80 px-3.5 py-1.5 text-xs font-medium text-gray-300 shadow-sm backdrop-blur-sm transition-colors hover:border-[#f59e0b]/25 hover:text-[#fde68a]"
                    >
                      <Icon
                        className="h-3.5 w-3.5 text-[#f59e0b]/90"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      {label}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative lg:col-span-5 xl:col-span-6"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-[#161616] via-[#0c0c0c] to-black shadow-[0_32px_120px_-48px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(245,158,11,0.06)] lg:aspect-[5/4] lg:max-w-none">
                  <div
                    className="pointer-events-none absolute -inset-1 rounded-[2rem] opacity-90"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(245,158,11,0.22) 0%, rgba(245,158,11,0.06) 42%, transparent 65%)",
                      filter: "blur(20px)",
                    }}
                    aria-hidden
                  />
                  <div className="relative flex h-full flex-col justify-between p-7 sm:p-9">
                    <div>
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f59e0b]/80">
                        Why message us
                      </p>
                      <p className="text-lg font-medium leading-snug text-white/95">
                        One partner for apps, marketing, and filings - no Delhi
                        freelancer + random CA triangle.
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "We reply in plain language - Hindi or English.",
                        "Scope and pricing upfront; no surprise invoices.",
                        "On-site visits when your shop or godown needs it.",
                      ].map((line) => (
                        <li
                          key={line}
                          className="flex gap-3 rounded-2xl border border-white/[0.05] bg-black/40 px-4 py-3 text-sm leading-snug text-neutral-300 backdrop-blur-md"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]" />
                          {line}
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-2xl border border-dashed border-[#f59e0b]/25 bg-[#f59e0b]/[0.04] px-4 py-3 text-center text-xs text-[#fde68a]/90">
                      Prefer voice? Call{" "}
                      <a
                        href="tel:+917070809208"
                        className="font-semibold text-white underline-offset-2 hover:underline"
                      >
                        +91 70708 09208
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          {/* Contact Form Container */}
          <motion.div
            className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-[#141414] via-[#101010] to-[#0a0a0a] shadow-[0_32px_90px_-40px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.04)]"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-[#f59e0b]/[0.08] blur-3xl"
              aria-hidden
            />
            <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />
            {/* Form Header / Progress */}
            {!isSubmitted && (
              <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] bg-black/45 px-6 py-5 backdrop-blur-md sm:px-8 sm:py-6">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {step === 1
                      ? "Step 1: Your details"
                      : "Step 2: How can we help?"}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {step === 1
                      ? "Tell us how to reach you"
                      : "Tell us what you’re looking for"}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <div className="flex gap-1.5">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          step >= i ? "w-8 bg-[#f59e0b]" : "w-4 bg-white/[0.08]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
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
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center md:py-14"
                  >
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 shadow-[0_0_40px_-12px_rgba(245,158,11,0.4)]">
                      <CheckCircle className="h-10 w-10 text-[#fbbf24]" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      Message sent
                    </h3>
                    <p className="mx-auto mb-8 max-w-sm text-pretty text-sm leading-relaxed text-gray-400 md:text-base">
                      Thank you for reaching out. We&apos;ve received your
                      message and our team will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                        setFormData(emptyFormFromSearchParams(searchParams));
                        setStatus("idle");
                      }}
                      variant="outline"
                      className="rounded-full border-white/15 bg-white/[0.04] text-gray-200 hover:bg-white/[0.08]"
                    >
                      Send another message
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
                                  className="w-full rounded-xl border border-white/[0.1] bg-black/50 py-3.5 pl-12 pr-4 text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all placeholder:text-gray-600 focus:border-[#f59e0b]/45 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20"
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
                                  className="w-full rounded-xl border border-white/[0.1] bg-black/50 py-3.5 pl-12 pr-4 text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all placeholder:text-gray-600 focus:border-[#f59e0b]/45 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20"
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
                                Phone Number
                              </label>
                              <div className="relative group">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#f59e0b] transition-colors" />
                                <input
                                  type="tel"
                                  required
                                  className="w-full rounded-xl border border-white/[0.1] bg-black/50 py-3.5 pl-12 pr-4 text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all placeholder:text-gray-600 focus:border-[#f59e0b]/45 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20"
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
                                Service Interest
                              </label>
                              <div className="relative group">
                                <Briefcase className="pointer-events-none absolute left-4 top-1/2 z-[1] h-5 w-5 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-[#f59e0b]" />
                                <FormThemeSelect
                                  id="contact-service-interest"
                                  aria-label="Service interest"
                                  value={formData.service}
                                  onValueChange={(service) =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      service,
                                    }))
                                  }
                                  options={CONTACT_FORM_SERVICES.map((s) => ({
                                    value: s.slug,
                                    label: s.label,
                                  }))}
                                  className="cursor-pointer pl-12"
                                />
                              </div>
                            </div>

                            <Button
                              type="submit"
                              className="group h-14 w-full rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-base font-bold text-black shadow-[0_0_40px_-8px_rgba(245,158,11,0.45)] transition-all hover:shadow-[0_0_52px_-6px_rgba(245,158,11,0.55)]"
                            >
                              Next step
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
                                Company Name
                              </label>
                              <div className="relative group">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#f59e0b] transition-colors" />
                                <input
                                  type="text"
                                  className="w-full rounded-xl border border-white/[0.1] bg-black/50 py-3.5 pl-12 pr-4 text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all placeholder:text-gray-600 focus:border-[#f59e0b]/45 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20"
                                  placeholder="Your company (optional)"
                                  value={formData.company}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      company: e.target.value,
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
                                  className="w-full resize-none rounded-xl border border-white/[0.1] bg-black/50 py-3.5 pl-12 pr-4 text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all placeholder:text-gray-600 focus:border-[#f59e0b]/45 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20"
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
                                className="h-14 shrink-0 rounded-full border-white/15 bg-transparent px-6 text-gray-300 hover:bg-white/[0.06] hover:text-white"
                              >
                                <ChevronLeft className="mr-1 h-5 w-5" />
                                Back
                              </Button>
                              <Button
                                type="submit"
                                disabled={status === "loading"}
                                className="group h-14 flex-1 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-base font-bold text-black shadow-[0_0_40px_-8px_rgba(245,158,11,0.45)] transition-all hover:shadow-[0_0_52px_-6px_rgba(245,158,11,0.55)] disabled:opacity-70"
                              >
                                {status === "loading"
                                  ? "Sending..."
                                  : "Send message"}
                                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/[0.06] pt-8 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#f59e0b]/25 bg-[#f59e0b]/10">
                    <ShieldCheck className="h-5 w-5 text-[#fbbf24]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                      100% private
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-gray-500">
                      Your data is safe with us.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#f59e0b]/25 bg-[#f59e0b]/10">
                    <Clock className="h-5 w-5 text-[#fbbf24]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                      Fast callback
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-gray-500">
                      Response in under 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <motion.div
              className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] p-8 shadow-[0_24px_64px_-40px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h3 className="mb-6 text-lg font-semibold tracking-tight text-white">
                Contact information
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, text: "+91 70708 09208", label: "Call us", href: "tel:+917070809208" },
                  {
                    icon: Mail,
                    text: "support@edunexservices.in",
                    label: "Email us",
                    href: "mailto:support@edunexservices.in",
                  },
                  {
                    icon: MapPin,
                    text: "Ward 15, Phulwari Sharif, Patna, Bihar 801505",
                    label: "Visit us",
                    href: undefined,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f59e0b]/25 bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 shadow-[0_0_24px_-8px_rgba(245,158,11,0.35)]">
                      <item.icon className="h-5 w-5 text-[#fbbf24]" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 block font-medium leading-snug text-white transition-colors hover:text-[#fde68a]"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-medium leading-snug text-white">
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />
              <h3 className="mb-5 text-lg font-semibold text-[#f59e0b]">
                Business hours
              </h3>
              <div className="space-y-3 text-[15px] font-medium">
                <div className="flex justify-between gap-4 border-b border-white/[0.05] pb-3">
                  <span className="text-gray-400">Monday – Friday</span>
                  <span className="text-white tabular-nums">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/[0.05] pb-3">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white tabular-nums">10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">Sunday</span>
                  <span className="font-semibold text-[#fbbf24]">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          id="contact-location"
          preset="surface"
          className="border-b border-[#262626] py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="mb-10 md:mb-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] px-3.5 py-1.5">
                <Sparkles
                  className="h-3.5 w-3.5 text-[#fbbf24]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fde68a]/90">
                  Visit in person
                </span>
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
                Find us in{" "}
                <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                  Phulwari Sharif, Patna
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 [text-wrap:pretty]">
                We&apos;re based in Bihar - plan a visit when you want to walk
                through billing, stock, or compliance on-site. Parking is
                limited; call ahead and we&apos;ll guide you in.
              </p>
            </motion.div>

            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[1.75rem] opacity-[0.35]"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.14) 0%, transparent 55%)",
                  filter: "blur(20px)",
                }}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-[#141414] to-[#0c0c0c] shadow-[0_32px_90px_-48px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.3]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                    maskImage:
                      "radial-gradient(ellipse 90% 80% at 50% 0%, black, transparent)",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />

                <div className="relative z-[1] grid gap-8 p-6 md:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
                  <div className="flex flex-col justify-center lg:col-span-4">
                    <div className="mb-4 inline-flex items-center gap-2 text-[#f59e0b]">
                      <MapPin className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden />
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#fde68a]/90">
                        Office address
                      </span>
                    </div>
                    <p className="text-lg font-medium leading-relaxed text-white">
                      Ward 15, Phulwari Sharif
                      <br />
                      Patna, Bihar 801505
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      Same region we serve for on-site software training, GST
                      reviews, and shop-floor walkthroughs.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Button
                        asChild
                        className="h-12 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-6 text-[15px] font-semibold text-black shadow-[0_0_36px_-8px_rgba(245,158,11,0.45)]"
                      >
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Ward+15+Phulwari+Sharif+Patna+Bihar+801505"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open in Google Maps
                          <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="h-12 rounded-full border-white/15 bg-white/[0.03] px-6 text-[15px] text-white hover:bg-white/[0.06]"
                      >
                        <a href="tel:+917070809208">
                          Call before you visit
                          <Phone className="ml-2 h-4 w-4 opacity-80" aria-hidden />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <motion.div
                    className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/[0.07] bg-[#050505] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:min-h-[320px] lg:col-span-8 lg:min-h-[380px]"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/20"
                      aria-hidden
                    />
                    <div className="absolute inset-0 z-[3] bg-gradient-to-br from-[#f59e0b]/[0.06] via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0 z-[2] bg-gradient-to-tr from-[#f59e0b]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-[1] h-full min-h-[inherit] w-full grayscale-[0.35] contrast-[1.05] brightness-[0.92] transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-[1.08] group-hover:brightness-[0.98]">
                      <iframe
                        src="https://maps.google.com/maps?q=Ward%2015%2C%20Phulwari%20Sharif%2C%20Patna%2C%20Bihar%20801505&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        className="min-h-[280px] w-full border-0 sm:min-h-[320px] lg:absolute lg:inset-0 lg:min-h-full"
                        style={{ minHeight: "inherit" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="EDUNEX office location on Google Maps"
                      />
                    </div>

                    <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-[4] flex items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-black/55 px-3 py-2 text-[11px] text-gray-300 backdrop-blur-md sm:text-xs">
                      <span className="truncate text-[#fde68a]/95">
                        Ward 15 · Phulwari Sharif
                      </span>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-gray-500">
                        Map preview
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}

export default function ContactClient() {
  return (
    <Suspense
      fallback={
        <div className="page-depth-grain flex min-h-screen items-center justify-center bg-black">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#f59e0b] border-t-transparent" />
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
