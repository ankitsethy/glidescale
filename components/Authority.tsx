import React from 'react';
import { motion } from 'framer-motion';

export const Authority: React.FC = () => {
  return (
    <section className="py-28 relative overflow-hidden flex flex-col items-center justify-center z-10 bg-navy-950">
      
      {/* 3D Axis Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
         <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-electric-500 to-transparent"></div>
         <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-electric-500 to-transparent absolute top-1/2 left-0"></div>
         
         <div className="absolute w-[500px] h-[500px] border border-electric-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }}></div>
         <div className="absolute w-[300px] h-[300px] border border-electric-500/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15]">
            Growth does not break businesses. <br />
            <span className="text-electric-300 drop-shadow-lg">Poor systems do.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};