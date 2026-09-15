import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { SectionEyebrow } from './Primitives';

const outcomes: { value: number; suffix: string; qualifier?: string; label: string; desc: string }[] = [
  {
    value: 8,
    suffix: 'wks',
    label: 'Time to Live Infrastructure',
    desc: 'From first call to fully deployed operating system, without months of back and forth.',
  },
  {
    value: 30,
    suffix: 'hrs',
    qualifier: '/wk',
    label: 'Operational Time Reclaimed',
    desc: 'Per client, on average. Time that goes back into revenue-generating work, not manual processes.',
  },
  {
    value: 3,
    suffix: '×',
    label: 'Output Without New Headcount',
    desc: 'AI-backed workflows multiply what your existing team can execute, with no new hires required.',
  },
];

const Counter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const spring = useSpring(0, { mass: 0.8, stiffness: 60, damping: 22 });
  const display = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

export const Metrics: React.FC = () => {
  return (
    <section id="outcomes" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/8 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex"
          >
            <SectionEyebrow center>What to Expect</SectionEyebrow>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display font-semibold text-ink leading-[1.05] tracking-tighter text-[clamp(36px,5vw,64px)]"
          >
            Real outcomes. <br />
            <span className="text-gradient-accent">Specific timelines.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden gradient-border-static">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative group bg-base-800 p-8 lg:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono font-medium text-ink leading-none tracking-tighter text-[clamp(64px,9vw,108px)] flex items-baseline gap-2">
                  <span className="text-gradient-accent">
                    <Counter value={item.value} />
                  </span>
                  <span className="text-2xl md:text-3xl font-medium text-ink-dim">
                    {item.suffix}
                    {item.qualifier && (
                      <span className="text-xl text-ink-mute">{item.qualifier}</span>
                    )}
                  </span>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                  className="mt-6 origin-left h-[1.5px] w-16 bg-gradient-to-r from-accent to-transparent"
                />
              </div>

              <div className="mt-10">
                <h3 className="font-display font-semibold text-xl text-ink mb-3 tracking-tightx">
                  {item.label}
                </h3>
                <p className="text-ink-dim leading-relaxed font-light text-[15px]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
