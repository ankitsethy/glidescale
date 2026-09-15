import React from 'react';
import { motion } from 'framer-motion';
import { SectionEyebrow } from './Primitives';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/8 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5 relative order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-accent/15 blur-[60px] rounded-full opacity-70 pointer-events-none"></div>
              <div className="gradient-border-static p-1.5">
                <div className="relative aspect-[4/5] rounded-[14px] overflow-hidden bg-base-700">
                  <img
                    src="/ankit.jpg"
                    alt="Ankit Sethy"
                    width={900}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://drive.google.com/thumbnail?id=1ZJat5R0gCFi1gnVAKWIftDJDKJl3Xbtu&sz=w1000';
                      (e.currentTarget as HTMLImageElement).onerror = () => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80';
                      };
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-50"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="md:col-span-7 order-1 md:order-2"
          >
            <SectionEyebrow>Founder</SectionEyebrow>
            <h2 className="mt-5 font-display font-semibold text-ink leading-[1.06] tracking-tighter text-[clamp(36px,5vw,64px)]">
              Ankit Sethy
            </h2>

            <div className="mt-8 space-y-6 text-ink-dim leading-relaxed font-light text-lg max-w-xl">
              <p>
                I work with growth-stage companies where execution is the constraint.
                When revenue increases but systems cannot support scale, friction
                compounds across sales, operations, and delivery.
              </p>
              <p>
                I design and implement AI-backed operating infrastructure that removes
                those constraints, across outbound, revenue ops, and internal workflows.
              </p>
            </div>

            {/* Pulled quote */}
            <div className="mt-10 relative max-w-xl">
              <div className="absolute -left-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/70 to-transparent"></div>
              <p className="pl-6 text-ink text-xl md:text-2xl italic font-light leading-snug tracking-tightx">
                The result is not automation. It is structural leverage.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/ankit-sethy-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2.5 text-sm text-ink-dim hover:text-accent-200 transition-colors duration-200 group"
              >
                <span className="w-9 h-9 rounded-full border border-white/10 group-hover:border-accent/40 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <span className="font-medium tracking-wide">Connect on LinkedIn</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://x.com/ankitsethy_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 rounded-full border border-white/10 hover:border-accent/40 text-ink-dim hover:text-accent-200 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="mailto:ankitsethy.ai@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-white/10 hover:border-accent/40 text-ink-dim hover:text-accent-200 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M1.5 4.5A1.5 1.5 0 0 1 3 3h18a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 21 21H3a1.5 1.5 0 0 1-1.5-1.5v-15zm2.4.5 8.1 6.3L20.1 5H3.9zm16.6 1.4-8.1 6.3a1 1 0 0 1-1.2 0L3.5 6.4V19h17V6.4z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
