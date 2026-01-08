import { motion } from 'motion/react';
import { blogPosts, faqs } from '../data/mockData';
import { BookOpen, Download, HelpCircle, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

export function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const whitepapers = [
    {
      title: 'Digital Transformation ROI: A 2026 Guide',
      description: 'Measuring the impact of digital initiatives on business outcomes',
      downloads: 1234,
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to successful cloud adoption',
      downloads: 987,
    },
    {
      title: 'E-commerce Security & Compliance',
      description: 'Protecting customer data and ensuring regulatory compliance',
      downloads: 756,
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-[#f9fafb] to-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 mb-4">
            <BookOpen className="w-4 h-4 text-[#0f766e]" />
            <span className="text-sm font-medium text-[#0f766e]">Knowledge Hub</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, guides, and knowledge to help you make informed decisions
          </p>
        </motion.div>

        {/* Blog Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Blog Posts</h2>
            <Button variant="outline" className="border-[#1a3a5c] text-[#1a3a5c]">
              View All Posts
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative h-48 bg-gray-100">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x600/?${encodeURIComponent(post.image)}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-900">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="text-[#14b8a6] hover:text-[#0f766e] p-0">
                    Read More →
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Whitepapers Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Whitepapers & Guides</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1a3a5c] to-[#14b8a6] flex items-center justify-center mb-6">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {paper.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {paper.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {paper.downloads.toLocaleString()} downloads
                  </span>
                  <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white">
                    <Download className="mr-2 w-4 h-4" />
                    Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-[#14b8a6] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-gray-200 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{faq.question}</p>
                      <p className="text-sm text-gray-500 mt-1 italic">{faq.questionHindi}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-[#1a3a5c] hover:bg-[#0f2642] text-white px-8"
            >
              Contact Support
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
