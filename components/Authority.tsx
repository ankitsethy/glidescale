import React from 'react';
import { motion } from 'framer-motion';

export const Authority: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-accent/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Top divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent mb-12"
        />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold text-ink leading-[1.05] tracking-tighter text-[clamp(36px,6vw,80px)]"
        >
          Growth does not <br />
          break businesses. <br />
          <span className="text-gradient-accent">Poor systems do.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent mt-14"
        />
      </div>
    </section>
  );
};
