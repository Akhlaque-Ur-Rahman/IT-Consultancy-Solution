import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import HeroModernWrapper from '@/components/HeroModernWrapper';

export function HeroModern() {
  // Server-rendered hero core: heading and static layout.
  // Interactive/animated parts are moved to a client island (`HeroModernClient`).
  return (
    <section className="relative min-h-[calc(100svh-5rem)] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(1200px circle at 50% 40%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 70%)' }} />

      <div className="relative w-full max-w-[1000px] mx-auto px-4 md:px-6 pb-16">
        <div className="text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6 mx-auto">
            <div className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
            <span className="text-sm font-medium text-[#f59e0b]">Trusted by 500+ Enterprises</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 md:mb-3 leading-tight">
            Enterprise IT Consulting Company in India
          </h1>

          {/* Static placeholder for the animated phrase. The client island will take over animations. */}
          <div className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8 min-h-[1.4em]">
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
              Web-App Development
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-black font-semibold px-10 py-6 text-base transition-all duration-200 group">
                Request Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                variant="outline"
                className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black px-10 py-6 text-base transition-all duration-200 group"
              >
                View Case Studies
                <PlayCircle className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8  max-w-3xl mx-auto">
            <div className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 hover:border-[#f59e0b]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 to-[#d97706]/0 group-hover:from-[#f59e0b]/15 group-hover:to-[#d97706]/15 transition-all duration-300" />
              <div className="relative">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">500+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
            </div>
            <div className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 hover:border-[#f59e0b]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 to-[#d97706]/0 group-hover:from-[#f59e0b]/15 group-hover:to-[#d97706]/15 transition-all duration-300" />
              <div className="relative">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">15+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
            <div className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 hover:border-[#f59e0b]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 to-[#d97706]/0 group-hover:from-[#f59e0b]/15 group-hover:to-[#d97706]/15 transition-all duration-300" />
              <div className="relative">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">99.9%</p>
                <p className="text-sm text-gray-400">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client island: mounts after hydration and runs animations/typing. */}
      <HeroModernWrapper />
    </section>
  );
}
