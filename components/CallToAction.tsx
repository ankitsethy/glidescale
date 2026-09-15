import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryCTA, SectionEyebrow } from './Primitives';

export const CallToAction: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden flex items-center justify-center"
    >
      {/* Big multi-layer glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[800px] bg-accent/15 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/20 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Dot grid masked */}
      <div
        className="absolute inset-0 mask-fade-radial opacity-50 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex mb-8"
        >
          <SectionEyebrow center>Work with us</SectionEyebrow>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold text-ink leading-[1.03] tracking-tighter text-[clamp(42px,7vw,88px)]"
        >
          Start with <br />
          <span className="text-gradient-shimmer">a call.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="mt-8 text-lg md:text-xl text-ink-dim font-light max-w-xl mx-auto leading-relaxed"
        >
          Thirty minutes. We map where your bottlenecks are. You leave with
          clarity on how we can help, and something about your business you
          did not know.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-10"
        >
          <PrimaryCTA
            pulse
            onClick={() => window.open('https://cal.com/ankitsethy/30', '_blank')}
            className="!min-h-[64px] !px-12 !text-base"
          >
            Book a 30-minute call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </PrimaryCTA>
        </motion.div>
      </div>
    </section>
  );
};
