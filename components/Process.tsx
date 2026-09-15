import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionEyebrow } from './Primitives';
import { processSteps } from '../data/process';

export const Process: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="methodology" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Sticky title */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <SectionEyebrow>How We Work</SectionEyebrow>
                <h2 className="mt-5 font-display font-semibold text-ink leading-[1.05] tracking-tighter text-[clamp(34px,5vw,60px)]">
                  From first call <br />
                  to live system.
                </h2>

                <a
                  href="/process"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-eyebrow text-accent-300/80 hover:text-accent-200 transition-colors group"
                >
                  The full process
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Timeline */}
          <div ref={ref} className="lg:col-span-7 relative">
            <div className="absolute left-[14px] top-2 bottom-2 w-px bg-white/[0.08]"></div>
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[14px] top-2 w-px bg-gradient-to-b from-accent via-accent-300 to-transparent"
            />

            <div className="space-y-8 lg:space-y-10">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-[7px] top-2 w-4 h-4 rounded-full bg-base border border-accent/70 z-10">
                    <div className="absolute inset-0.5 rounded-full bg-accent/60 animate-pulse-soft"></div>
                  </div>

                  <div className="relative">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                      Step {step.num}
                    </span>
                    <h3 className="mt-2 font-display font-semibold text-2xl md:text-3xl text-ink tracking-tighter">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-ink-dim leading-relaxed font-light max-w-md">
                      {step.short}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
