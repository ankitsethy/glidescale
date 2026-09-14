import React from 'react';
import { motion } from 'framer-motion';
import { SectionEyebrow, GradientBorderCard } from '../Primitives';
import { caseStudies, capabilities, type CaseStudy } from '../../data/clients';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const SubHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-ink-mute">{children}</h3>
);

const CaseStudySection: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <section
    id={study.id}
    className="relative py-24 lg:py-32 border-t border-white/[0.06] scroll-mt-28"
  >
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <motion.div {...reveal} transition={{ duration: 0.7 }} className="lg:col-span-4">
          <SectionEyebrow>Case study</SectionEyebrow>

          {study.logo && (
            <img
              src={study.logo}
              alt={study.name}
              className="mt-6 h-9 w-auto object-contain"
            />
          )}

          <h2 className="mt-5 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(32px,4vw,52px)]">
            {study.name}
          </h2>
          <p className="mt-4 text-ink-dim leading-relaxed font-light">{study.tagline}</p>

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
        </motion.div>

        <motion.div
          {...reveal}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-8 space-y-12"
        >
          {study.problem && (
            <div>
              <SubHead>The problem</SubHead>
              <p className="mt-4 text-ink-dim text-lg leading-relaxed font-light max-w-2xl">
                {study.problem}
              </p>
            </div>
          )}

          {study.systemsBuilt && study.systemsBuilt.length > 0 && (
            <div>
              <SubHead>What we built</SubHead>
              <ul className="mt-5 border-t border-white/[0.06]">
                {study.systemsBuilt.map((system, i) => (
                  <li
                    key={system.title}
                    className="flex gap-5 py-5 border-b border-white/[0.06]"
                  >
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
            </div>
          )}

          {study.metrics && study.metrics.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden gradient-border-static">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="bg-base-800 p-7 lg:p-8">
                  <div className="font-mono text-ink text-3xl lg:text-4xl tracking-tighter">
                    {metric.value}
                  </div>
                  <div className="mt-3 text-ink-mute text-sm leading-relaxed">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          <div>
            <SubHead>What changed</SubHead>
            <p className="mt-4 text-ink text-lg lg:text-xl leading-relaxed font-light max-w-2xl">
              {study.results}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export const Work: React.FC = () => {
  const featured = caseStudies.filter((study) => study.featured);
  const alsoBuilt = caseStudies.filter((study) => !study.featured);

  return (
    <main className="relative z-10">
      <section className="relative pt-40 lg:pt-48 pb-20 lg:pb-24 overflow-hidden">
        <div className="orb top-[-220px] left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-accent/12 opacity-50"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionEyebrow>Portfolio</SectionEyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(40px,6vw,76px)]"
          >
            Systems we've built.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-7 text-lg md:text-xl text-ink-dim max-w-2xl leading-relaxed font-light"
          >
            We design and build the infrastructure businesses run their growth on. Lead capture,
            outreach, voice, and the dashboards that make all of it visible. Below is what we have
            shipped, who it was for, and what changed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden gradient-border-static"
          >
            {capabilities.map((capability) => (
              <div key={capability} className="bg-base-800 px-7 py-8">
                <span className="block w-6 h-px bg-accent/50 mb-5"></span>
                <span className="text-ink font-medium leading-snug tracking-tightx">
                  {capability}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm"
          >
            {featured.map((study) => (
              <a
                key={study.id}
                href={`#${study.id}`}
                className="text-ink-dim hover:text-accent-200 transition-colors"
              >
                {study.name} <span aria-hidden="true">→</span>
              </a>
            ))}
            {alsoBuilt.length > 0 && (
              <a
                href="#also-built"
                className="text-ink-dim hover:text-accent-200 transition-colors"
              >
                Also built <span aria-hidden="true">↓</span>
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {featured.map((study) => (
        <CaseStudySection key={study.id} study={study} />
      ))}

      {alsoBuilt.length > 0 && (
        <section
          id="also-built"
          className="relative py-24 lg:py-32 border-t border-white/[0.06] scroll-mt-28"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div {...reveal} transition={{ duration: 0.7 }}>
              <SectionEyebrow>Also built</SectionEyebrow>
              <h2 className="mt-5 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(30px,4vw,48px)]">
                Shorter engagements.
              </h2>
            </motion.div>

            <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-7">
              {alsoBuilt.map((study, i) => (
                <motion.div
                  key={study.id}
                  {...reveal}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <GradientBorderCard className="h-full p-8 lg:p-9">
                    <h3 className="font-display font-semibold text-xl text-ink tracking-tightx">
                      {study.name}
                    </h3>
                    <p className="mt-2 text-sm text-ink-mute">{study.tagline}</p>
                    <p className="mt-5 text-ink-dim leading-relaxed font-light">{study.results}</p>
                  </GradientBorderCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
