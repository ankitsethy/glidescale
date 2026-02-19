import React from 'react';
import { motion } from 'framer-motion';

export const Transition: React.FC = () => {
  return (
    <section className="py-40 relative overflow-hidden flex items-center justify-center z-10 bg-navy-950">
      
      {/* Subtle Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-electric-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-8">
            Execution creates leverage.
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Most companies don’t have a growth problem. <br/>
            <span className="text-white relative inline-block mt-2 pb-1">
              They have a systems problem.
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-electric-500 shadow-[0_0_10px_#6366F1]"></span>
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};