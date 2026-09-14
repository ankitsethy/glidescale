import React from 'react';
import { motion } from 'framer-motion';
import { GradientBorderCard, SectionEyebrow } from './Primitives';

const OutboundIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="outIcon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B6A3FF" />
        <stop offset="100%" stopColor="#7C5CFF" />
      </linearGradient>
    </defs>
    <circle cx="10" cy="24" r="3" stroke="url(#outIcon)" strokeWidth="1.6" />
    <circle cx="38" cy="10" r="3" stroke="url(#outIcon)" strokeWidth="1.6" />
    <circle cx="38" cy="24" r="3" stroke="url(#outIcon)" strokeWidth="1.6" />
    <circle cx="38" cy="38" r="3" stroke="url(#outIcon)" strokeWidth="1.6" />
    <path d="M13 24L35 10M13 24h22M13 24L35 38" stroke="url(#outIcon)" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="10" cy="24" r="1.4" fill="#9C82FF" />
  </svg>
);

const RevenueIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="revIcon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B6A3FF" />
        <stop offset="100%" stopColor="#7C5CFF" />
      </linearGradient>
    </defs>
    <rect x="6" y="22" width="6" height="18" rx="1" stroke="url(#revIcon)" strokeWidth="1.6" />
    <rect x="18" y="14" width="6" height="26" rx="1" stroke="url(#revIcon)" strokeWidth="1.6" />
    <rect x="30" y="6" width="6" height="34" rx="1" stroke="url(#revIcon)" strokeWidth="1.6" />
    <path d="M9 22V18M21 14V10M33 6V4" stroke="url(#revIcon)" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="9" cy="16" r="1.6" fill="#9C82FF" />
    <circle cx="21" cy="8" r="1.6" fill="#9C82FF" />
    <circle cx="33" cy="2.5" r="1.6" fill="#9C82FF" />
  </svg>
);

const ExecutionIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="exIcon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B6A3FF" />
        <stop offset="100%" stopColor="#7C5CFF" />
      </linearGradient>
    </defs>
    <path d="M24 4l4 8 8 1.4-6 6 1.4 8.6L24 24l-7.4 4 1.4-8.6-6-6L20 12z" stroke="url(#exIcon)" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M14 38h20M18 44h12" stroke="url(#exIcon)" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const services = [
  {
    icon: <OutboundIcon />,
    title: 'Outbound Infrastructure',
    description:
      'Install cold outreach systems that execute predictably. We engineer pipelines that deliver qualified meetings without manual input.',
  },
  {
    icon: <RevenueIcon />,
    title: 'Revenue Architecture',
    description:
      'Unify lead capture, CRM, and pipeline visibility. We implement a single source of truth for your entire revenue operation.',
  },
  {
    icon: <ExecutionIcon />,
    title: 'Execution Frameworks',
    description:
      'Replace repetitive tasks with AI-backed workflows. From onboarding to support, we architect the layer that removes operational drag.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 lg:py-40 overflow-hidden">
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-[0.04] pointer-events-none mask-fade-radial"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <SectionEyebrow>Infrastructure</SectionEyebrow>
            <h2 className="mt-5 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(34px,5vw,64px)]">
              Built for scale, <br />
              engineered for speed.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-ink-dim text-sm md:text-base max-w-xs leading-relaxed md:text-right"
          >
            Three systems. One operating model. <br />
            Built to work together from day one.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <GradientBorderCard className="relative group h-full p-9 lg:p-10 overflow-hidden">
                {/* Faded numeral */}
                <span className="pointer-events-none absolute -top-2 right-6 font-display font-bold text-[110px] leading-none text-white/[0.035] group-hover:text-accent/[0.08] transition-colors duration-700 select-none tracking-tighter">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative">
                  <div className="mb-8">{s.icon}</div>
                  <h3 className="font-display font-semibold text-2xl text-ink mb-4 tracking-tightx">
                    {s.title}
                  </h3>
                  <p className="text-ink-dim leading-relaxed font-light">{s.description}</p>

                  <a
                    href="#contact"
                    className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300/80 group-hover:text-accent-200 transition-colors"
                  >
                    Learn more
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>
                </div>
              </GradientBorderCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
