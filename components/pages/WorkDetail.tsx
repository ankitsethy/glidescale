import React from 'react';
import { motion } from 'framer-motion';
import { SectionEyebrow } from '../Primitives';
import type { CaseStudy } from '../../data/clients';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const SubHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-ink-mute">{children}</h3>
);

export const WorkDetail: React.FC<{ study: CaseStudy }> = ({ study }) => {
  return (
    <main className="relative z-10">
      <section className="relative pt-28 lg:pt-40 pb-12 lg:pb-16 overflow-hidden">
        <div className="orb top-[-220px] left-1/2 -translate-x-1/2 w-[800px] h-[480px] bg-accent/10 opacity-40"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.a
            href="/work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm text-ink-mute hover:text-accent-200 transition-colors mb-8"
          >
            <span aria-hidden="true">←</span> All work
          </motion.a>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}>
            <SectionEyebrow>Case study</SectionEyebrow>
          </motion.div>

          {study.logo && (
            <img src={study.logo} alt={study.name} className="mt-6 h-9 w-auto object-contain" />
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(36px,6vw,68px)]"
          >
            {study.name}
          </motion.h1>
          <p className="mt-4 text-ink-dim text-lg leading-relaxed font-light max-w-xl">
            {study.tagline}
          </p>

          {(study.timeline || study.active) && (
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {study.timeline && (
                <span className="text-xs text-ink-mute border border-white/10 rounded-full px-3 py-1.5">
                  {study.timeline}
                </span>
              )}
              {study.active && (
                <span className="text-xs text-accent-200 border border-accent/25 rounded-full px-3 py-1.5">
                  Active engagement
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="relative py-12 lg:py-16 border-t border-white/[0.06]">
        <div className="max-w-[900px] mx-auto px-6 space-y-12">
          {study.problem && (
            <motion.div {...reveal} transition={{ duration: 0.6 }}>
              <SubHead>The problem</SubHead>
              <p className="mt-4 text-ink-dim text-lg leading-relaxed font-light">
                {study.problem}
              </p>
            </motion.div>
          )}

          {study.systemsBuilt && study.systemsBuilt.length > 0 && (
            <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.05 }}>
              <SubHead>What we built</SubHead>
              <ul className="mt-5 border-t border-white/[0.06]">
                {study.systemsBuilt.map((system, i) => (
                  <li key={system.title} className="flex gap-5 py-5 border-b border-white/[0.06]">
                    <span className="font-mono text-xs text-accent-300/70 pt-1 w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="text-ink font-medium tracking-tightx">{system.title}</h4>
                      <p className="mt-1.5 text-ink-dim leading-relaxed font-light">
                        {system.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {study.metrics && study.metrics.length > 0 && (
            <motion.div
              {...reveal}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid sm:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden gradient-border-static"
            >
              {study.metrics.map((metric) => (
                <div key={metric.label} className="bg-base-800 p-7 lg:p-8">
                  <div className="font-mono text-ink text-3xl lg:text-4xl tracking-tighter">
                    {metric.value}
                  </div>
                  <div className="mt-3 text-ink-mute text-sm leading-relaxed">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.1 }}>
            <SubHead>What changed</SubHead>
            <p className="mt-4 text-ink text-lg lg:text-xl leading-relaxed font-light">
              {study.results}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
