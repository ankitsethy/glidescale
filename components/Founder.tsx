import React from 'react';
import { motion } from 'framer-motion';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="relative py-32 overflow-hidden z-20 bg-navy-950">
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Image Side - Fixed: Full Color + Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-2 md:order-1 group"
          >
            {/* Glow backing */}
            <div className="absolute -inset-4 bg-electric-500/20 blur-[40px] rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
            
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-navy-800 border border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
                 <img 
                  src="https://drive.google.com/thumbnail?id=1ZJat5R0gCFi1gnVAKWIftDJDKJl3Xbtu&sz=w1000" 
                  alt="Ankit Sethy" 
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80";
                    e.currentTarget.onerror = null;
                  }}
                />
                
                {/* Subtle Indigo Overlay for integration */}
                <div className="absolute inset-0 bg-navy-950/20 mix-blend-overlay z-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60 z-20"></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="p-10 rounded-[24px] glass-card">
                <h2 className="text-xs font-bold text-electric-400 uppercase tracking-[0.2em] mb-8">The Operator</h2>
                
                <h3 className="text-4xl md:text-5xl font-semibold text-white mb-8 leading-[1.1] tracking-tight">
                  Ankit Sethy
                </h3>
                
                <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg">
                  <p>
                    I work with growth-stage companies where execution is the constraint.
                    When revenue increases but systems cannot support scale, friction compounds across sales, operations, and delivery.
                  </p>
                  <p>
                    I design and implement AI-backed operating infrastructure that removes those constraints.
                  </p>
                  <div className="pl-6 border-l-2 border-electric-500 py-2 mt-4 bg-white/[0.02] rounded-r-lg">
                    <p className="text-white font-medium italic">
                        The result is not automation. It is structural leverage.
                    </p>
                  </div>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};