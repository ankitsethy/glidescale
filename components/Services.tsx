import React from 'react';
import { motion } from 'framer-motion';
import { GradientBorderCard, SectionEyebrow } from './Primitives';
import { services } from '../data/services';

export const ServiceCard: React.FC<{
  index: number;
  title: string;
  body: string;
  moves: string[];
}> = ({ index, title, body, moves }) => (
  <GradientBorderCard className="relative group h-full p-8 lg:p-9 overflow-hidden flex flex-col">
    <span className="pointer-events-none absolute -top-2 right-6 font-display font-bold text-[90px] leading-none text-white/[0.035] group-hover:text-accent/[0.08] transition-colors duration-700 select-none tracking-tighter">
      {String(index + 1).padStart(2, '0')}
    </span>

    <div className="relative flex flex-col h-full">
      <h3 className="font-display font-semibold text-xl lg:text-2xl text-ink mb-3 tracking-tightx">
        {title}
      </h3>
      <p className="text-ink-dim leading-relaxed font-light flex-grow">{body}</p>

      <div className="mt-6 pt-5 border-t border-white/[0.06]">
        <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-mute">
          Moves
        </span>
        <p className="mt-2 text-sm text-accent-300/90 leading-relaxed">{moves.join(' · ')}</p>
      </div>
    </div>
  </GradientBorderCard>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-[0.04] pointer-events-none mask-fade-radial"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <SectionEyebrow>What We Build</SectionEyebrow>
            <h2 className="mt-5 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(34px,5vw,60px)]">
              Five systems. <br />
              Each one moves a number.
            </h2>
          </motion.div>

          <motion.a
            href="/services"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-eyebrow text-accent-300/80 hover:text-accent-200 transition-colors whitespace-nowrap group"
          >
            All services
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <ServiceCard
                index={i}
                title={service.title}
                body={service.short}
                moves={service.moves}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
