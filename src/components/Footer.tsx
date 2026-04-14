"use client";

import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const quickLinks = [
    { label: "About Us", href: "/about", id: "about-us" },
    { label: "Services", href: "/services", id: "services" },
    { label: "Case Studies", href: "/case-studies", id: "case-studies" },
    { label: "Careers", href: "/about", id: "careers" },
  ];

  const services = [
    {
      label: "Web Development",
      href: "/services/custom-software-bihar",
      id: "web-dev",
    },
    {
      label: "CRM/ERP Solutions",
      href: "/services/erp-billing-software",
      id: "crm-erp",
    },
    {
      label: "Digital Marketing",
      href: "/services/local-seo-marketing",
      id: "digital-marketing",
    },
    {
      label: "Compliance Services",
      href: "/compliance",
      id: "compliance",
    },
  ];

  const resources = [
    { label: "Blog", href: "/blog", id: "blog" },
    { label: "Whitepapers", href: "/resources", id: "whitepapers" },
    { label: "FAQs", href: "/resources", id: "faqs" },
    { label: "Support", href: "/contact", id: "support" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
    { icon: Instagram, label: "Instagram", url: "#" },
    { icon: Youtube, label: "YouTube", url: "#" },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/[0.08] bg-[#050505] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_40%_at_50%_-20%,rgba(245,158,11,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/logo.jpg"
              alt="EDUNEX Logo"
              className="mb-5 h-14 w-auto object-contain"
              width={200}
              height={56}
            />
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-neutral-400">
              IT consulting, custom software, and compliance—built for regional
              SMEs who need clarity, not jargon.
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: MapPin,
                  text: "Ward 15, Phulwari Sharif, Patna, Bihar 801505",
                },
                { icon: Phone, text: "+91 70708 09208" },
                { icon: Mail, text: "support@edunesservices.in" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-neutral-400 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <Icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/80"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-8 lg:col-span-5 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Explore
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <motion.li
                    key={link.id}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Services
              </h4>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <motion.li
                    key={service.id}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link
                      href={service.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {service.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Resources
              </h4>
              <ul className="space-y-2.5">
                {resources.map((resource) => (
                  <motion.li
                    key={resource.id}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link
                      href={resource.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {resource.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Newsletter
            </h4>
            <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 shadow-[0_24px_64px_-40px_rgba(0,0,0,0.9)]">
              <p className="mb-4 text-sm text-neutral-400">
                Product updates and compliance tips for Bihar businesses—no
                spam.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Work email"
                  className="border-white/10 bg-black/40 text-white placeholder:text-neutral-600 focus-visible:ring-amber-500/30"
                />
                <Button className="shrink-0 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 text-black hover:opacity-95">
                  Join
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social + trust */}
        <div className="mt-14 flex flex-col gap-8 border-t border-white/[0.06] pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-neutral-400 transition-colors hover:border-amber-500/35 hover:text-amber-200"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </motion.a>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-500 md:justify-end">
            {[
              "ISO 9001:2015",
              "GDPR-ready practices",
              "SSL secured",
            ].map((label, i) => (
              <span key={label} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-neutral-700" aria-hidden>
                    ·
                  </span>
                )}
                <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5">
                  {label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.06] bg-black py-6">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} EDUNEX. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-neutral-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-neutral-300"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="transition-colors hover:text-neutral-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
