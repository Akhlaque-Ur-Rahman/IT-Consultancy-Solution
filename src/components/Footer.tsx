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
      href: "/services?category=development",
      id: "web-dev",
    },
    { label: "CRM/ERP Solutions", href: "/solutions", id: "crm-erp" },
    {
      label: "Digital Marketing",
      href: "/services?category=marketing",
      id: "digital-marketing",
    },
    { label: "Compliance Services", href: "/compliance", id: "compliance" },
  ];

  const resources = [
    { label: "Blog", href: "/resources", id: "blog" },
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
    <footer className="bg-[#0a0a0a] text-white mt-20 border-t border-[#262626]">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.jpg"
              alt="EDUNEX Logo"
              className="h-14 w-auto object-contain"
              width={200}
              height={56}
            />
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Enterprise-grade IT consulting, software development, and business
              solutions for scaling organizations.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#f59e0b]" />
                <span>Ward 15, Phulwari Sharif, Patna, Bihar 801505</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#f59e0b]" />
                <span>+91 70708 09208</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#f59e0b]" />
                <span>support@edunesservices.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f59e0b]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#f59e0b] transition-all duration-200 block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f59e0b]">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <motion.li
                  key={service.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-[#f59e0b] transition-all duration-200 block"
                  >
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f59e0b]">
              Resources
            </h4>
            <ul className="space-y-2.5 mb-6">
              {resources.map((resource) => (
                <motion.li
                  key={resource.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={resource.href}
                    className="text-sm text-gray-400 hover:text-[#f59e0b] transition-all duration-200 block"
                  >
                    {resource.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold mb-3">
              Subscribe to Newsletter
            </h4>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#121212] border-[#262626] text-white placeholder:text-gray-500 text-sm focus:border-[#f59e0b]"
              />
              <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black px-4 shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-[#262626]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#262626] hover:border-[#f59e0b] flex items-center justify-center transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                  </motion.a>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#f59e0b]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                ISO 9001:2015 Certified
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#f59e0b]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                GDPR Compliant
              </span>
              <span>•</span>
              <span>Secured by SSL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#000000] py-6 border-t border-[#262626]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2026 EDUNEX. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="hover:text-[#f59e0b] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#f59e0b] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-[#f59e0b] transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
