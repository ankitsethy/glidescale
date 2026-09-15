import React from 'react';
import { motion } from 'framer-motion';
import { SectionEyebrow } from './Primitives';

export const Guarantee: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[400px] bg-accent/8 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <SectionEyebrow>Guarantee</SectionEyebrow>
            <h2 className="mt-5 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(32px,4.5vw,56px)]">
              We carry the risk <br />
              with you.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-ink-dim text-lg lg:text-xl leading-relaxed font-light max-w-2xl">
              Every engagement has a guarantee written into it. What it is tied to depends on
              what we are building, and we agree it with you before any work starts.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
