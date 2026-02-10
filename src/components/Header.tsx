'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Web & App Development', href: '/services?category=development' },
        { label: 'CRM/ERP Solutions', href: '/solutions' },
        { label: 'Digital Marketing', href: '/services?category=marketing' },
        { label: 'UI/UX Design', href: '/services?category=design' },
        { label: 'All Services', href: '/services' },
      ]
    },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'About', href: '/about' },
    { label: 'Resources', href: '/resources' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-[#262626]' : 'bg-black/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* EDUNEX Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/">
              <img src="/logo.jpg" alt="EDUNEX Logo" className="h-14 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      isActive(item.href)
                        ? 'text-[#f59e0b] bg-[#1a1a1a]'
                        : 'text-gray-300 hover:text-[#f59e0b] hover:bg-[#1a1a1a]'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      isActive(item.href)
                        ? 'text-[#f59e0b] bg-[#1a1a1a]'
                        : 'text-gray-300 hover:text-[#f59e0b] hover:bg-[#1a1a1a]'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.href && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-[#121212] rounded-lg shadow-2xl border border-[#262626] py-2 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.dropdownItems?.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        href={dropdownItem.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block w-full px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-[#1a1a1a] hover:text-[#f59e0b] transition-colors"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
             <Button variant="ghost" size="icon" className="text-gray-300 hover:text-[#f59e0b]">
               <Search className="w-5 h-5" />
             </Button>
            <Link href="/contact">
              <Button
                className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black font-semibold px-6 transition-all duration-200"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-[#262626]"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-md text-left text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-[#f59e0b] bg-[#1a1a1a]'
                        : 'text-gray-300 hover:bg-[#1a1a1a] hover:text-[#f59e0b]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-semibold mt-2"
                  >
                    Get Started
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}