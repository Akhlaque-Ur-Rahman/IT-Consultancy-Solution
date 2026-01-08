import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', page: 'home' },
    { 
      label: 'Services', 
      page: 'services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Web & App Development', page: 'services', category: 'development' },
        { label: 'CRM/ERP Solutions', page: 'services', category: 'solutions' },
        { label: 'Digital Marketing', page: 'services', category: 'marketing' },
        { label: 'UI/UX Design', page: 'services', category: 'design' },
        { label: 'All Services', page: 'services', category: 'all' },
      ]
    },
    { label: 'Solutions', page: 'solutions' },
    { label: 'Case Studies', page: 'case-studies' },
    { label: 'Compliance', page: 'compliance' },
    { label: 'About', page: 'about' },
    { label: 'Resources', page: 'resources' },
  ];

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
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src="/logo.jpg" alt="EDUNEX Logo" className="h-14 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div
                key={item.page}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.page)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => onNavigate(item.page)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    currentPage === item.page
                      ? 'text-[#f59e0b] bg-[#1a1a1a]'
                      : 'text-gray-300 hover:text-[#f59e0b] hover:bg-[#1a1a1a]'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.page && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-[#121212] rounded-lg shadow-2xl border border-[#262626] py-2 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.dropdownItems?.map((dropdownItem, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigate(dropdownItem.page);
                          setActiveDropdown(null);
                        }}
                        className="w-full px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-[#1a1a1a] hover:text-[#f59e0b] transition-colors"
                      >
                        {dropdownItem.label}
                      </button>
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
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black font-semibold px-6 transition-all duration-200"
            >
              Get Started
            </Button>
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
                  <button
                    key={item.page}
                    onClick={() => {
                      onNavigate(item.page);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-md text-left text-sm font-medium transition-colors ${
                      currentPage === item.page
                        ? 'text-[#f59e0b] bg-[#1a1a1a]'
                        : 'text-gray-300 hover:bg-[#1a1a1a] hover:text-[#f59e0b]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    onNavigate('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-semibold mt-2"
                >
                  Get Started
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}