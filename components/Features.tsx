import React from 'react';
import { Layers, Zap, BarChart3, Lock, Users, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Layers,
    title: "Workflow Automation",
    description: "Eliminate manual bottlenecks. We build self-healing operational loops that execute without human intervention."
  },
  {
    icon: Zap,
    title: "Revenue Operations",
    description: "Unify your GTM stack. From lead capture to close, data flows seamlessly to provide a single source of truth."
  },
  {
    icon: Cpu,
    title: "Custom AI Agents",
    description: "Deploy autonomous agents for support, SDR work, and data analysis that operate 24/7 with human-level nuance."
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Stop guessing. Use historical data to forecast revenue, churn, and pipeline velocity with 95% accuracy."
  },
  {
    icon: Users,
    title: "Team Alignment",
    description: "Systems that force alignment between Sales, Marketing, and CS through shared incentives and transparent data."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC2 compliant architectures ensuring your proprietary data remains siloed, secure, and sovereign."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#05070e] relative overflow-hidden">
      {/* Separator gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      
      {/* Background depth elements */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Built for scale, engineered for speed</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We don't just sell software. We architect the underlying infrastructure that allows modern enterprises to move 10x faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Card Background with Border Gradient on Hover */}
              <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative h-full p-8 rounded-2xl border border-white/5 bg-[#0a0e17] group-hover:bg-[#0d121f] transition-colors duration-300 overflow-hidden">
                {/* Inner Glow */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-indigo-500/10 blur-[60px] rounded-full translate-x-20 -translate-y-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all duration-300 ease-out">
                    <feature.icon className="w-6 h-6 text-gray-300 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-50 transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};