"use client";

import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import Image from "next/image";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const SOCIAL = [
  {
    icon: Facebook,
    label: "Facebook",
    url: "https://www.facebook.com/edunexservices",
  },
  {
    icon: Twitter,
    label: "Twitter",
    url: "https://twitter.com/edunexservices",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/edunexservices",
  },
] as const;

export function Footer() {
  const quickLinks = [
    { label: "Solutions", href: "/solutions", id: "solutions" },
    { label: "About", href: "/about", id: "about-us" },
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
      label: "Compliance",
      href: "/compliance",
      id: "compliance",
    },
  ];

  const resources = [
    { label: "Blog", href: "/blog", id: "blog" },
    { label: "Resources", href: "/resources", id: "resources" },
    { label: "FAQs", href: "/resources", id: "faqs" },
    { label: "Support", href: "/contact", id: "support" },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/[0.07] bg-[#020202] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-30%,rgba(245,158,11,0.09),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-[1400px] px-5 py-16 sm:px-6 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-6 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)]">
              <div
                className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-[#f59e0b]/[0.12] blur-3xl"
                aria-hidden
              />
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.jpg"
                  alt="EDUNEX"
                  className="h-12 w-auto object-contain sm:h-14"
                  width={200}
                  height={56}
                />
              </Link>
              <p
                className={cn(
                  display.className,
                  "mt-4 max-w-sm text-lg leading-snug tracking-tight text-neutral-100",
                )}
              >
                Software, growth, and compliance - one calm partner for Bihar
                SMEs.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                Clear scopes, local delivery, no jargon.
              </p>

              <div className="mt-8 space-y-2.5">
                {[
                  {
                    icon: MapPin,
                    text: "Ward 15, Phulwari Sharif, Patna, Bihar 801505",
                  },
                  { icon: Phone, text: "+91 70708 09208", href: "tel:+917070809208" },
                  {
                    icon: Mail,
                    text: "support@edunexservices.in",
                    href: "mailto:support@edunexservices.in",
                  },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text}>
                    {href ? (
                      <a
                        href={href}
                        className="group flex items-start gap-3 rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3 text-sm text-neutral-400 transition-all hover:border-[#f59e0b]/25 hover:text-neutral-200"
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f59e0b]/[0.12] text-[#fbbf24] ring-1 ring-[#f59e0b]/20 transition-colors group-hover:bg-[#f59e0b]/20">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <span className="pt-0.5">{text}</span>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3 text-sm text-neutral-400">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f59e0b]/[0.12] text-[#fbbf24] ring-1 ring-[#f59e0b]/20">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <span className="pt-0.5">{text}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-5">
            {[
              { title: "Explore", links: quickLinks },
              { title: "Services", links: services },
              { title: "Resources", links: resources },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a3a3a3]">
                  {col.title}
                </h4>
                <ul className="space-y-1">
                  {col.links.map((link, i) => (
                    <motion.li
                      key={link.id}
                      initial={false}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 420, damping: 28 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center gap-1 py-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#f59e0b]/0 transition-colors group-hover:bg-[#f59e0b]" />
                        {link.label}
                        <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-50" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-[1.35rem] p-[1px] shadow-[0_0_60px_-20px_rgba(245,158,11,0.35)]">
              <div
                className="absolute inset-0 rounded-[1.33rem] bg-gradient-to-br from-[#f59e0b]/35 via-[#f59e0b]/10 to-transparent opacity-90"
                aria-hidden
              />
              <div className="relative flex h-full flex-col rounded-[1.3rem] border border-white/[0.06] bg-gradient-to-b from-[#101010] to-[#050505] p-6">
                <p
                  className={cn(
                    display.className,
                    "text-xl tracking-tight text-white",
                  )}
                >
                  Field notes for Bihar operators
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Product updates and compliance tips - no spam, easy
                  unsubscribe.
                </p>
                <div className="mt-6 flex flex-1 flex-col gap-3 sm:flex-row sm:items-stretch">
                  <Input
                    type="email"
                    placeholder="Work email"
                    className="h-11 flex-1 rounded-xl border-white/10 bg-black/50 text-white placeholder:text-neutral-600 focus-visible:border-[#f59e0b]/40 focus-visible:ring-[#f59e0b]/25"
                  />
                  <Button className="h-11 shrink-0 rounded-xl bg-gradient-to-r from-[#fbbf24] to-[#d97706] px-6 font-semibold text-black shadow-[0_0_24px_-8px_rgba(245,158,11,0.5)] hover:opacity-95">
                    Join
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-10 border-t border-white/[0.06] pt-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2.5">
            {SOCIAL.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-neutral-400 transition-colors hover:border-[#f59e0b]/40 hover:text-[#fde68a]"
                  aria-label={social.label}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </motion.a>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            {[
              "Hands-on delivery",
              "Patna & Bihar",
              "SSL secured",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.06] bg-black/80 py-6 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 text-sm text-neutral-500 sm:px-6 md:flex-row">
          <p>
            © {new Date().getFullYear()} EDUNEX. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
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
