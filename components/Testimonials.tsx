import React from 'react';
import { motion } from 'framer-motion';
import { GradientBorderCard, SectionEyebrow } from './Primitives';

// TODO(ankit): Replace with real testimonials when client approvals come in.
const testimonials = [
  {
    quote:
      'They rebuilt the way our outbound runs end to end. We went from chasing reps to watching qualified meetings land on the calendar.',
    name: 'Maya R.',
    role: 'Founder, B2B SaaS',
    initials: 'MR',
  },
  {
    quote:
      'The diagnose phase alone was worth the engagement. They surfaced bottlenecks our team had been working around for two years.',
    name: 'David K.',
    role: 'Head of Growth, Agency',
    initials: 'DK',
  },
  {
    quote:
      'Eight weeks in and our ops layer runs without anyone touching it. Genuine structural leverage, not another tool we have to babysit.',
    name: 'Priya S.',
    role: 'CEO, Services Firm',
    initials: 'PS',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-40 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/8 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex"
          >
            <SectionEyebrow center>Field Notes</SectionEyebrow>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display font-semibold text-ink leading-[1.05] tracking-tighter text-[clamp(36px,5vw,64px)]"
          >
            What operators say <br />
            <span className="text-gradient-accent">after we ship.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <GradientBorderCard className="relative h-full p-9 lg:p-10 flex flex-col">
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-4 right-7 font-display font-bold text-[100px] leading-none text-accent/15 select-none"
                >
                  “
                </span>

                <p className="relative text-ink-dim text-lg leading-relaxed font-light italic flex-grow">
                  {t.quote}
                </p>

                <div className="relative mt-10 pt-6 border-t border-white/[0.06] flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-mono text-sm font-semibold text-accent-200 bg-accent/10 border border-accent/25">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-ink font-medium text-[15px] tracking-tightx">{t.name}</p>
                    <p className="text-ink-mute text-xs uppercase tracking-[0.14em] mt-1">{t.role}</p>
                  </div>
                </div>
              </GradientBorderCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
