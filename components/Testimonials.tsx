import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "GlideScale made managing our outbound so easy. I can track everything in one place!",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "The automation features kept us organized and on top of our budget. Love it!",
    author: "Daniel Harnes",
    role: "CFO, Vertex",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "We rely on GlideScale to keep our pipeline transparent and organized. The best investment we made.",
    author: "Maria Clayton",
    role: "Director, Solstice",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=150&h=150&q=80"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden z-20 bg-deep-950">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
             <div className="inline-block px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 backdrop-blur-sm mb-6">
                <span className="text-xs font-medium text-primary-300 uppercase tracking-widest">Testimonials</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">What our clients are saying</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
            >
               {/* Card Bg */}
               <div className="absolute inset-0 bg-[#0F0B1E] rounded-[2rem] border border-white/[0.05] transition-all duration-300 group-hover:bg-[#15102A] group-hover:border-primary-500/20"></div>

               <div className="relative p-10 flex flex-col h-full z-10">
                  {/* Quote Icon Circle */}
                  <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8">
                     <Quote className="w-5 h-5 text-gray-400" />
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed mb-8 flex-grow">
                    "{item.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05]">
                    <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                    <div>
                        <h4 className="text-white font-medium">{item.author}</h4>
                        <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};