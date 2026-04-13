import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryCTA, SecondaryCTA, SectionEyebrow } from './Primitives';
import { SystemDiagram } from './SystemDiagram';

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
      className="relative min-h-[100vh] pt-36 lg:pt-[120px] pb-24 lg:pb-32 overflow-hidden"
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex"
            >
              <SectionEyebrow center>AI Infrastructure & Growth Systems</SectionEyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display font-semibold text-ink leading-[1.04] tracking-tighter text-[clamp(44px,7vw,92px)]"
            >
              AI systems that <br className="hidden md:block" />
              remove bottlenecks <br className="hidden md:block" />
              and{' '}
              <span className="text-gradient-shimmer">unlock scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-8 text-lg md:text-xl text-ink-dim max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              We redesign how growth operates inside your company,
              replacing manual drag with AI-backed operating infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <PrimaryCTA pulse onClick={() => scrollToSection('contact')}>
                Book a Strategy Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </PrimaryCTA>
              <SecondaryCTA onClick={() => scrollToSection('work')}>
                See How We Work
              </SecondaryCTA>
            </motion.div>
          </div>

          {/* Right: system diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <SystemDiagram />
          </motion.div>
        </div>

        {/* Marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-20 lg:mt-24 mask-fade-edges overflow-hidden"
        >
          <div className="marquee gap-12 text-sm text-ink-mute font-medium tracking-wide">
            {Array.from({ length: 2 }).map((_, copy) => (
              <div key={copy} className="flex items-center gap-12 pr-12 whitespace-nowrap">
                <span>Working with growth-stage founders across SaaS, services & agencies</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <span>Outbound infrastructure</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                <span>Revenue architecture</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <span>Execution frameworks</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                <span>Deployed in 8 weeks</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
