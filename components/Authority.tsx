import React from 'react';
import { motion } from 'framer-motion';

export const Authority: React.FC = () => {
  return (
    <section className="py-28 relative overflow-hidden flex flex-col items-center justify-center z-10 bg-navy-950">

      {/* Static geometric background — elegant, no animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-electric-500/12 to-transparent"></div>
        {/* Horizontal line */}
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-electric-500/12 to-transparent"></div>

        {/* Concentric rings — static, no spinning */}
        <div className="absolute w-[520px] h-[520px] border border-electric-500/[0.06] rounded-full animate-breathe" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-[340px] h-[340px] border border-electric-500/[0.08] rounded-full animate-breathe" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[180px] h-[180px] border border-electric-500/[0.1] rounded-full animate-breathe" style={{ animationDelay: '2s' }}></div>

        {/* Center dot */}
        <div className="absolute w-2 h-2 rounded-full bg-electric-500/40 blur-[3px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.15]">
            Growth does not break businesses. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-300 via-electric-400 to-electric-300 bg-[length:200%_auto] animate-shimmer">
              Poor systems do.
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
