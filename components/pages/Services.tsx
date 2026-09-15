import React from 'react';
import { motion } from 'framer-motion';
import { SectionEyebrow } from '../Primitives';
import { services } from '../../data/services';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const ServicesPage: React.FC = () => {
  return (
    <main className="relative z-10">
      <section className="relative pt-28 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
        <div className="orb top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[480px] bg-accent/10 opacity-40"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionEyebrow>What We Build</SectionEyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(38px,6vw,68px)]"
          >
            Five systems. <br />
            Built for whatever is actually broken.
          </motion.h1>
        </div>
      </section>

      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className="relative py-12 lg:py-16 border-t border-white/[0.06] scroll-mt-28"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div {...reveal} transition={{ duration: 0.6 }} className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs text-accent-300/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-2 font-display font-semibold text-2xl lg:text-3xl text-ink tracking-tighter">
                  {service.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-ink-dim text-lg leading-relaxed font-light max-w-2xl">
                  {service.long}
                </p>
                <div className="mt-6">
                  <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-mute">
                    Moves
                  </span>
                  <p className="mt-2 text-sm text-accent-300/90">{service.moves.join(' · ')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </main>
  );
};
