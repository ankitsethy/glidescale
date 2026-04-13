import React from 'react';
import { motion } from 'framer-motion';

const Mark = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2.5 text-ink-mute hover:text-ink-dim transition-colors duration-300 whitespace-nowrap">
    {children}
  </div>
);

const logos = [
  {
    name: 'Northwind',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 21V5l9 6 9-6v16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Helio Labs',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Vector Tide',
    svg: (
      <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
        <path d="M2 16c2-4 4-4 6 0s4 4 6 0 4-4 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 10c2-4 4-4 6 0s4 4 6 0 4-4 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: 'Atlas Forge',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Quanta',
    svg: (
      <svg width="24" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 20L12 4l8 16M7 14h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Stratify',
    svg: (
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
        <path d="M2 14l6-8 5 6 4-4 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="6" r="1.4" fill="currentColor" />
        <circle cx="13" cy="12" r="1.4" fill="currentColor" />
        <circle cx="17" cy="8" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
];

export const LogoCloud: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-mute mb-12"
        >
          Trusted by operators at growth-stage teams
        </motion.p>

        <div className="mask-fade-edges overflow-hidden">
          <div className="marquee gap-16 lg:gap-20 text-base font-medium">
            {Array.from({ length: 2 }).map((_, copy) => (
              <div key={copy} className="flex items-center gap-16 lg:gap-20 pr-16 lg:pr-20">
                {logos.map((l, i) => (
                  <Mark key={`${copy}-${i}`}>
                    {l.svg}
                    <span className="font-display text-[1.05rem] tracking-tight">{l.name}</span>
                  </Mark>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
