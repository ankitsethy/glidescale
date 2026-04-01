import React from 'react';
import { motion } from 'framer-motion';

export const Transition: React.FC = () => {
  return (
    <section className="py-28 relative overflow-hidden flex items-center justify-center z-10 bg-navy-900">

      {/* Subtle Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-electric-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-bold text-electric-400 uppercase tracking-[0.2em] mb-6">The reality</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-8">
            Most companies don’t have a growth problem.
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            They have a{" "}
            <span className="text-white relative inline-block pb-1">
              systems problem.
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-electric-500 shadow-[0_0_10px_#6366F1]"></span>
            </span>
            {" "}Revenue stalls not because demand is missing — but because the infrastructure to handle it is not there.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span className="w-4 h-[1px] bg-electric-500/50"></span>
            <span>That’s what we fix.</span>
            <span className="w-4 h-[1px] bg-electric-500/50"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};