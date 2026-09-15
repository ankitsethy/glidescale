import React from 'react';
import { motion } from 'framer-motion';
import { tools, type Tool } from '../data/tools';

// brightness(0) invert(1) flattens any source logo to solid white regardless of
// its original colours, so seven logos from four different sources read as one
// consistent set without per-logo tuning.
const MONO = 'brightness(0) invert(1)';

const ToolMark: React.FC<{ tool: Tool }> = ({ tool }) => (
  <div className="flex items-center gap-3 whitespace-nowrap opacity-50 hover:opacity-90 transition-opacity duration-300">
    <img
      src={`/tools/${tool.slug}.svg`}
      alt={tool.name}
      loading="lazy"
      className={tool.kind === 'wordmark' ? 'h-[18px] w-auto' : 'h-6 w-auto'}
      style={{ filter: MONO }}
    />
    {tool.kind === 'icon' && (
      <span className="font-display text-[1.05rem] tracking-tight text-ink-dim">{tool.name}</span>
    )}
  </div>
);

export const ToolMarquee: React.FC = () => {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-mute mb-10"
        >
          Tools we build with
        </motion.p>

        <div className="mask-fade-edges overflow-hidden">
          {/* Exactly two copies: the -50% keyframe only seams cleanly at two. */}
          <div className="marquee gap-14 lg:gap-20 hover:[animation-play-state:paused]">
            {Array.from({ length: 2 }).map((_, copy) => (
              <div
                key={copy}
                className="flex items-center gap-14 lg:gap-20 pr-14 lg:pr-20"
              >
                {tools.map((tool) => (
                  <ToolMark key={`${copy}-${tool.slug}`} tool={tool} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
