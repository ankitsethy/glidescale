import React from 'react';
import { motion } from 'framer-motion';
import { SectionEyebrow, GradientBorderCard } from './Primitives';
import { caseStudies } from '../data/clients';

export const HomeProof: React.FC = () => {
  const featured = caseStudies.filter((study) => study.featured);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionEyebrow>Clients</SectionEyebrow>
            <h2 className="mt-5 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(34px,5vw,60px)]">
              Who we've <br />
              done this for.
            </h2>
          </motion.div>

          <motion.a
            href="/work"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-eyebrow text-accent-300/80 hover:text-accent-200 transition-colors whitespace-nowrap group"
          >
            See the work
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {featured.map((study, i) => (
            <motion.a
              key={study.id}
              href={`/work/${study.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="block"
            >
              <GradientBorderCard className="h-full p-8 lg:p-9 group">
                {study.logo && (
                  <img src={study.logo} alt={study.name} className="h-8 w-auto object-contain mb-5" />
                )}
                <h3 className="font-display font-semibold text-xl lg:text-2xl text-ink tracking-tightx">
                  {study.name}
                </h3>
                <p className="mt-2 text-sm text-ink-mute">{study.tagline}</p>
                <p className="mt-5 text-ink-dim leading-relaxed font-light">{study.results}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow text-accent-300/80 group-hover:text-accent-200 transition-colors">
                  Read the case study
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </GradientBorderCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
