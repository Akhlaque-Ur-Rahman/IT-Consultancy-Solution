import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'About Us', page: 'about', id: 'about-us' },
    { label: 'Services', page: 'services', id: 'services' },
    { label: 'Case Studies', page: 'case-studies', id: 'case-studies' },
    { label: 'Careers', page: 'about', id: 'careers' },
  ];

  const services = [
    { label: 'Web Development', page: 'services', id: 'web-dev' },
    { label: 'CRM/ERP Solutions', page: 'solutions', id: 'crm-erp' },
    { label: 'Digital Marketing', page: 'services', id: 'digital-marketing' },
    { label: 'Compliance Services', page: 'compliance', id: 'compliance' },
  ];

  const resources = [
    { label: 'Blog', page: 'resources', id: 'blog' },
    { label: 'Whitepapers', page: 'resources', id: 'whitepapers' },
    { label: 'FAQs', page: 'resources', id: 'faqs' },
    { label: 'Support', page: 'contact', id: 'support' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Youtube, label: 'YouTube', url: '#' },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white mt-20 border-t border-[#262626]">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img src="/src/assets/logo.png" alt="EDUNEX Logo" className="h-10 w-auto" />
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Enterprise-grade IT consulting, software development, and business solutions for scaling organizations.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#f59e0b]" />
                <span>Business Park, Cyber City, Gurugram, Haryana 122002, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#f59e0b]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#f59e0b]" />
                <span>contact@edunex.tech</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f59e0b]">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-gray-400 hover:text-[#f59e0b] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f59e0b]">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate(service.page)}
                    className="text-sm text-gray-400 hover:text-[#f59e0b] transition-colors duration-200"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f59e0b]">Resources</h4>
            <ul className="space-y-2.5 mb-6">
              {resources.map((resource) => (
                <li key={resource.id}>
                  <button
                    onClick={() => onNavigate(resource.page)}
                    className="text-sm text-gray-400 hover:text-[#f59e0b] transition-colors duration-200"
                  >
                    {resource.label}
                  </button>
                </li>
              ))}
            </ul>
            
            <h4 className="text-sm font-semibold mb-3">Subscribe to Newsletter</h4>
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
                  <a
                    key={social.label}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#f59e0b] border border-[#262626] hover:border-[#f59e0b] flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                  </a>
                );
              })}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                ISO 9001:2015 Certified
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
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
              <button className="hover:text-[#f59e0b] transition-colors">Privacy Policy</button>
              <button className="hover:text-[#f59e0b] transition-colors">Terms of Service</button>
              <button className="hover:text-[#f59e0b] transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}