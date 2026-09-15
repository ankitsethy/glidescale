import React from 'react';
import { motion } from 'framer-motion';
import { SectionEyebrow, GradientBorderCard } from '../Primitives';
import { caseStudies, capabilities } from '../../data/clients';

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const Work: React.FC = () => {
  const featured = caseStudies.filter((study) => study.featured);
  const alsoBuilt = caseStudies.filter((study) => !study.featured);

  return (
    <main className="relative z-10">
      <section className="relative pt-28 lg:pt-40 pb-12 lg:pb-16 overflow-hidden">
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
            What we've shipped, who it was for, and what changed. Click a client to see the full
            build.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden gradient-border-static"
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
        </div>
      </section>

      <section className="relative py-12 lg:py-16 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {featured.map((study, i) => (
              <motion.a
                key={study.id}
                href={`/work/${study.id}`}
                {...reveal}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="block"
              >
                <GradientBorderCard className="h-full p-8 lg:p-10 group">
                  {study.logo && (
                    <img src={study.logo} alt={study.name} className="h-8 w-auto object-contain mb-6" />
                  )}
                  <h2 className="font-display font-semibold text-2xl lg:text-3xl text-ink tracking-tighter">
                    {study.name}
                  </h2>
                  <p className="mt-2 text-sm text-ink-mute">{study.tagline}</p>
                  {study.headline && (
                    <p className="mt-6 text-ink text-lg leading-relaxed font-light">
                      {study.headline}
                    </p>
                  )}
                  <span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow text-accent-300/80 group-hover:text-accent-200 transition-colors">
                    View case study
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

      {alsoBuilt.length > 0 && (
        <section className="relative py-12 lg:py-16 border-t border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div {...reveal} transition={{ duration: 0.6 }}>
              <SectionEyebrow>Also built</SectionEyebrow>
              <h2 className="mt-5 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(30px,4vw,48px)]">
                Shorter engagements.
              </h2>
            </motion.div>

            <div className="mt-10 grid md:grid-cols-3 gap-5 lg:gap-6">
              {alsoBuilt.map((study, i) => (
                <motion.div key={study.id} {...reveal} transition={{ duration: 0.6, delay: i * 0.1 }}>
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
