import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Diagnose",
    desc: "We map how your business actually runs to identify manual bottlenecks and data silos."
  },
  {
    num: "02",
    title: "Design",
    desc: "We rebuild workflows around speed and leverage, architecting the automation layer."
  },
  {
    num: "03",
    title: "Deploy",
    desc: "We implement for measurable output. We don't just hand over a document; we install infrastructure."
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden z-20 bg-navy-900">
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          
          <div className="flex flex-col justify-center sticky top-32 self-start">
             <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs font-bold text-electric-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                 <span className="w-6 h-[1px] bg-electric-500"></span>
                 Methodology
              </h2>
              <h3 className="text-4xl md:text-5xl font-semibold text-white mb-8 leading-[1] tracking-tight">
                From chaos <br /> to clarity.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-light border-l border-white/10 pl-6">
                We do not sell tools. <br/> We redesign operating models for the modern era.
              </p>
            </motion.div>
          </div>

          <div className="relative space-y-16 md:space-y-24 mt-12 lg:mt-0">
             {/* Glowing Center Line */}
             <div className="absolute left-[20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-electric-500 via-electric-500/20 to-transparent hidden md:block">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[100px] bg-electric-400 blur-[4px]"></div>
             </div>

            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-0 md:pl-24 group"
              >
                {/* Node Point */}
                <div className="absolute left-3 top-3 w-4 h-4 -ml-0.5 rounded-full bg-navy-900 border border-electric-500 z-10 hidden md:block group-hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-0 bg-electric-500 opacity-50 blur-[4px] animate-pulse"></div>
                </div>

                {/* Large Background Number */}
                <span className="absolute -top-12 -left-4 text-9xl font-bold text-white/[0.02] select-none pointer-events-none group-hover:text-electric-500/[0.04] transition-colors duration-500">
                    {step.num}
                </span>

                <div className="relative z-10">
                    <h4 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-electric-200 transition-colors flex items-center gap-3">
                        {step.title}
                        <span className="md:hidden text-xs text-electric-500 border border-electric-500/30 px-2 py-0.5 rounded-full">{step.num}</span>
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-lg font-light group-hover:text-gray-300 transition-colors">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};