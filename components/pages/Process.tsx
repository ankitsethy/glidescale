import React from 'react';
import { motion } from 'framer-motion';
import { SectionEyebrow } from '../Primitives';
import { processSteps } from '../../data/process';

export const ProcessPage: React.FC = () => {
  return (
    <main className="relative z-10">
      <section className="relative pt-28 lg:pt-40 pb-12 lg:pb-16 overflow-hidden">
        <div className="orb top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[480px] bg-accent/10 opacity-40"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionEyebrow>How We Work</SectionEyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(38px,6vw,68px)]"
          >
            From first call <br />
            to live system.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-lg text-ink-dim max-w-xl leading-relaxed font-light"
          >
            We find what's slowing your business down, then build the system that fixes it.
          </motion.p>
        </div>
      </section>

      <section className="relative py-12 lg:py-16 border-t border-white/[0.06]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="space-y-10 lg:space-y-14">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="grid sm:grid-cols-12 gap-4 sm:gap-8"
              >
                <div className="sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                    Step {step.num}
                  </span>
                  <h2 className="mt-2 font-display font-semibold text-2xl text-ink tracking-tighter">
                    {step.title}
                  </h2>
                </div>
                <div className="sm:col-span-9">
                  <p className="text-ink-dim text-lg leading-relaxed font-light max-w-xl">
                    {step.long}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
