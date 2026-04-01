import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';

export const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-48 relative overflow-hidden flex items-center justify-center z-20 bg-navy-950">

      {/* Multi-layer glow — outer, mid, inner */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-electric-500/[0.08] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-electric-400/[0.1] rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[200px] bg-electric-300/[0.08] rounded-full blur-[40px] pointer-events-none"></div>

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-electric-500/[0.06] rounded-full pointer-events-none animate-breathe"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-electric-500/[0.08] rounded-full pointer-events-none animate-breathe" style={{ animationDelay: '1.5s' }}></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.03]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <span className="inline-block py-2 px-6 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-300 text-[11px] uppercase tracking-[0.2em] font-bold shadow-[0_0_20px_rgba(99,102,241,0.25)]">
            Limited capacity
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white mb-16 tracking-tight leading-[1.05]"
        >
          Scale without <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-300 via-white to-electric-400 bg-[length:200%_auto] animate-shimmer">
            operational drag.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative inline-block group"
        >
          {/* Button aura */}
          <div className="absolute -inset-2 bg-electric-500/20 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

          <Button
            variant="primary"
            className="!h-20 !px-16 !text-xl !bg-white !text-navy-950 hover:!bg-electric-50 hover:!text-navy-950 font-bold relative"
            onClick={() => window.open('https://cal.com/ankitsethy/30', '_blank')}
          >
            Let's talk
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-sm text-gray-600"
        >
          No commitment. 30-minute strategy session.
        </motion.p>

      </div>
    </section>
  );
};
