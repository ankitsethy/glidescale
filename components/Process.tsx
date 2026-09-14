import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionEyebrow } from './Primitives';

const DiagnoseVisual = () => (
  <svg viewBox="0 0 200 100" className="w-full h-auto">
    <defs>
      <linearGradient id="dgrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#9C82FF" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
    <path
      d="M0 50 L20 50 L30 30 L40 70 L55 40 L70 60 L85 50 L100 50 L115 25 L130 75 L145 35 L160 65 L180 50 L200 50"
      stroke="url(#dgrad)"
      strokeWidth="1.6"
      fill="none"
      strokeLinejoin="round"
    />
    <circle cx="100" cy="50" r="3" fill="#9C82FF">
      <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const DesignVisual = () => (
  <svg viewBox="0 0 200 100" className="w-full h-auto">
    <defs>
      <linearGradient id="bgrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#9C82FF" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {[10, 40, 70, 100, 130, 160].map((x, i) => (
      <rect
        key={i}
        x={x}
        y={50 - i * 5}
        width="20"
        height={45 + i * 5}
        rx="2"
        fill="url(#bgrad)"
        stroke="rgba(124,92,255,0.3)"
        strokeWidth="1"
      />
    ))}
  </svg>
);

const DeployVisual = () => (
  <svg viewBox="0 0 200 100" className="w-full h-auto">
    <defs>
      <linearGradient id="depgrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B6A3FF" />
        <stop offset="100%" stopColor="#7C5CFF" />
      </linearGradient>
    </defs>
    {[
      [30, 30, 'A'],
      [100, 30, 'B'],
      [170, 30, 'C'],
      [65, 70, 'D'],
      [135, 70, 'E'],
    ].map(([cx, cy, label], i) => (
      <g key={i}>
        <circle cx={cx as number} cy={cy as number} r="14" fill="#0F0F18" stroke="url(#depgrad)" strokeWidth="1.4" />
        <text x={cx as number} y={(cy as number) + 4} textAnchor="middle" fontSize="9" fontFamily="Inter" fill="#B6A3FF">
          {label as string}
        </text>
      </g>
    ))}
    <line x1="44" y1="34" x2="86" y2="34" stroke="rgba(124,92,255,0.4)" strokeWidth="1" />
    <line x1="114" y1="34" x2="156" y2="34" stroke="rgba(124,92,255,0.4)" strokeWidth="1" />
    <line x1="44" y1="34" x2="51" y2="58" stroke="rgba(124,92,255,0.4)" strokeWidth="1" />
    <line x1="86" y1="34" x2="121" y2="58" stroke="rgba(124,92,255,0.4)" strokeWidth="1" />
    <line x1="156" y1="34" x2="149" y2="58" stroke="rgba(124,92,255,0.4)" strokeWidth="1" />
  </svg>
);

const steps = [
  {
    num: '01',
    title: 'Diagnose',
    desc: 'We map how your business actually runs to identify manual bottlenecks and data silos.',
    visual: <DiagnoseVisual />,
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We rebuild workflows around speed and leverage, architecting the operating layer.',
    visual: <DesignVisual />,
  },
  {
    num: '03',
    title: 'Deploy',
    desc: "We implement for measurable output. We don't just hand over a document; we install infrastructure.",
    visual: <DeployVisual />,
  },
];

export const Process: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="methodology" className="relative py-20 lg:py-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky title */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <SectionEyebrow>Methodology</SectionEyebrow>
                <h2 className="mt-5 font-display font-semibold text-ink leading-[1.05] tracking-tighter text-[clamp(36px,5vw,64px)]">
                  From chaos <br />
                  to clarity.
                </h2>
                <p className="mt-8 max-w-sm text-ink-dim leading-relaxed border-l border-accent/30 pl-5">
                  We do not sell tools. <br />
                  We redesign operating models for the modern era.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Timeline */}
          <div ref={ref} className="lg:col-span-7 relative">
            {/* Background line */}
            <div className="absolute left-[14px] top-2 bottom-2 w-px bg-white/[0.08]"></div>
            {/* Filled line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[14px] top-2 w-px bg-gradient-to-b from-accent via-accent-300 to-transparent"
            />

            <div className="space-y-20 lg:space-y-24">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-15%' }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="relative pl-16"
                >
                  {/* Node dot */}
                  <div className="absolute left-[7px] top-3 w-4 h-4 rounded-full bg-base border border-accent/70 z-10">
                    <div className="absolute inset-0.5 rounded-full bg-accent/60 animate-pulse-soft"></div>
                  </div>

                  {/* Background numeral */}
                  <span className="pointer-events-none absolute -top-10 left-12 font-display font-bold text-[140px] leading-none text-white/[0.035] select-none tracking-tighter">
                    {step.num}
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                        Step {step.num}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-4 tracking-tighter">
                      {step.title}
                    </h3>
                    <p className="text-ink-dim text-lg leading-relaxed font-light max-w-md">
                      {step.desc}
                    </p>
                    <div className="mt-7 max-w-sm gradient-border-static p-5">{step.visual}</div>
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
