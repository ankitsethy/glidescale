import React from 'react';
import { motion } from 'framer-motion';
import { Send, BarChart2, Workflow, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Send,
    title: "Outbound Infrastructure",
    description: "Install cold outreach systems that execute predictably. We engineer pipelines that deliver qualified meetings without manual input."
  },
  {
    icon: BarChart2,
    title: "Revenue Architecture",
    description: "Unify lead capture, CRM, and pipeline visibility. We implement a single source of truth for your entire revenue operation."
  },
  {
    icon: Workflow,
    title: "Execution Frameworks",
    description: "Replace repetitive tasks with AI-backed workflows. From onboarding to support, we architect the layer that removes operational drag."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="work" className="py-32 relative overflow-hidden z-20 bg-[#080D1C]">
      
      {/* Visible Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.05]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060A14] via-transparent to-[#060A14]"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h2 className="text-xs font-bold text-electric-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-electric-500"></span>
                Infrastructure
              </h2>
              <h3 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
                Built for scale, <br />
                engineered for speed.
              </h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-gray-500 text-sm max-w-xs leading-relaxed md:text-right"
            >
              Three systems. One operating model. Built to work together from day one.
            </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative h-full"
            >
              {/* Glass Card 2.0 */}
              <div className="relative h-full p-10 rounded-2xl glass-card flex flex-col">
                
                {/* Icon System */}
                <div className="w-14 h-14 rounded-xl bg-navy-800 border border-white/5 flex items-center justify-center mb-8 relative group-hover:bg-electric-500/10 group-hover:border-electric-500/30 transition-all duration-300">
                   <div className="absolute inset-0 bg-electric-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <service.icon className="w-6 h-6 text-gray-400 group-hover:text-electric-300 transition-colors relative z-10" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight group-hover:text-electric-100 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base font-light flex-grow">{service.description}</p>

                <div className="mt-8 flex items-center gap-1.5 text-xs font-semibold text-electric-500/60 group-hover:text-electric-400 transition-colors duration-300">
                  <span className="uppercase tracking-[0.15em]">Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Bottom Active Line */}
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-electric-500/0 to-transparent group-hover:via-electric-500/50 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};