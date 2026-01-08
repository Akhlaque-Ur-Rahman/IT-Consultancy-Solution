import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CompliancePage } from './pages/CompliancePage';
import { AboutPage } from './pages/AboutPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';

type Page = 'home' | 'services' | 'solutions' | 'case-studies' | 'compliance' | 'about' | 'resources' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'solutions':
        return <SolutionsPage onNavigate={handleNavigate} />;
      case 'case-studies':
        return <CaseStudiesPage onNavigate={handleNavigate} />;
      case 'compliance':
        return <CompliancePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'resources':
        return <ResourcesPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Content with Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Sticky Request Consultation CTA */}
      <motion.button
        className="fixed bottom-8 right-8 px-6 py-3 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-semibold rounded-md shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-200 z-50 group"
        onClick={() => setIsContactFormOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Request Consultation
        </span>
      </motion.button>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </div>
  );
}