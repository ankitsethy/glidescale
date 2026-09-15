import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryCTA, SectionEyebrow } from './Primitives';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden"
    >
      {/* Background system */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid with radial mask */}
        <div
          className="absolute inset-0 mask-fade-radial opacity-[0.55]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Top center radial glow */}
        <div className="orb top-[-180px] left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-accent/20 opacity-60"></div>
        {/* Side orbs */}
        <div className="orb top-[20%] -left-32 w-[420px] h-[420px] bg-accent/15 opacity-50"></div>
        <div className="orb top-[40%] -right-32 w-[480px] h-[480px] bg-accent/15 opacity-40"></div>
        {/* Bottom fade to base */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#07070C]"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex"
          >
            <SectionEyebrow center>AI Implementation & Growth Systems</SectionEyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display font-semibold text-ink leading-[1.1] tracking-tight text-[clamp(44px,7vw,84px)]"
          >
            AI systems that remove bottlenecks and{' '}
            <span className="text-gradient-shimmer">unlock scale.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <PrimaryCTA pulse onClick={() => scrollToSection('contact')}>
              Book a Strategy Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </PrimaryCTA>
            <a href="/process" className="btn-secondary">
              <span className="inline-flex items-center gap-2">See How We Work</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
