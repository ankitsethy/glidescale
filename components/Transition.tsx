import React from 'react';
import { motion } from 'framer-motion';
import { SectionEyebrow } from './Primitives';

export const Transition: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-accent/8 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex"
        >
          <SectionEyebrow center>The Reality</SectionEyebrow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10"
        >
          {/* Big quote mark */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 font-display font-bold text-[260px] leading-none text-accent/[0.08] select-none"
          >
            “
          </span>

          <h2 className="relative font-display font-semibold text-ink leading-[1.05] tracking-tighter text-[clamp(34px,5.5vw,68px)]">
            Most companies don't have <br className="hidden md:block" />a growth problem. <br />
            <span className="text-gradient-accent">They have a systems problem.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-12 text-lg md:text-xl text-ink-dim font-light max-w-2xl mx-auto leading-relaxed"
        >
          Revenue stalls not because demand is missing, but because the
          infrastructure to handle it is not there.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-3 text-sm text-ink-mute"
        >
          <span className="w-8 h-px bg-accent/50"></span>
          <span>That is what we fix.</span>
          <span className="w-8 h-px bg-accent/50"></span>
        </motion.div>
      </div>
    </section>
  );
};
