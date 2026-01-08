import { motion } from 'motion/react';
import { caseStudies } from '../data/mockData';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { Download, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CaseStudiesPageProps {
  onNavigate: (page: string) => void;
}

export function CaseStudiesPage({ onNavigate }: CaseStudiesPageProps) {
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
            <TrendingUp className="w-4 h-4 text-[#0f766e]" />
            <span className="text-sm font-medium text-[#0f766e]">Success Stories</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how we've helped businesses achieve measurable success through technology
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              title={caseStudy.title}
              client={caseStudy.client}
              industry={caseStudy.industry}
              image={caseStudy.image}
              impact={caseStudy.impact}
              onClick={() => {}}
            />
          ))}
        </div>

        {/* Featured Case Study Detail */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-96 lg:h-full bg-gray-100">
              <ImageWithFallback
                src={`https://source.unsplash.com/800x600/?${encodeURIComponent(caseStudies[0].image)}`}
                alt={caseStudies[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-medium mb-2">{caseStudies[0].industry}</p>
                <h3 className="text-3xl font-bold">{caseStudies[0].client}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {caseStudies[0].title}
              </h2>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#14b8a6] uppercase tracking-wider mb-2">
                  Challenge
                </h4>
                <p className="text-gray-600">{caseStudies[0].challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#14b8a6] uppercase tracking-wider mb-2">
                  Solution
                </h4>
                <p className="text-gray-600">{caseStudies[0].solution}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#14b8a6] uppercase tracking-wider mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudies[0].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#14b8a6]/10 text-sm text-[#0f766e] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#14b8a6] uppercase tracking-wider mb-3">
                  Impact
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(caseStudies[0].impact).map(([key, value]) => (
                    <div key={key} className="p-4 rounded-lg bg-gray-50">
                      <p className="text-3xl font-bold text-[#1a3a5c] mb-1">{value}</p>
                      <p className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="p-6 bg-gradient-to-br from-[#1a3a5c]/5 to-transparent rounded-xl border border-[#1a3a5c]/10">
                <p className="text-gray-700 italic mb-4">
                  "{caseStudies[0].testimonial}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{caseStudies[0].testimonialAuthor}</p>
                  <p className="text-sm text-gray-600">{caseStudies[0].testimonialRole}</p>
                </div>
              </div>

              {/* Download CTA */}
              <Button className="w-full mt-6 bg-[#f97316] hover:bg-[#ea580c] text-white">
                <Download className="mr-2 w-4 h-4" />
                Download Full Case Study (PDF)
              </Button>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2642] rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's create measurable impact for your business together
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-6 text-lg"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
