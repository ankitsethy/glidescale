import React, { useRef } from 'react';
import { Button } from './Button';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const nodesY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={ref} className="relative min-h-[100vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-navy-950">

      {/* 1. Background System */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_60%)] blur-[100px]"></div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-[0.03]"></div>

        {/* Floating Particles (Extremely Slow) */}
        <motion.div style={{ y: nodesY }} className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-electric-500 rounded-full blur-[2px] opacity-40 animate-float" style={{ animationDuration: '15s' }}></div>
          <div className="absolute top-[40%] right-[15%] w-1 h-1 bg-white rounded-full blur-[1px] opacity-30 animate-float" style={{ animationDelay: '2s', animationDuration: '18s' }}></div>
          <div className="absolute bottom-[20%] left-[20%] w-3 h-3 bg-electric-300 rounded-full blur-[4px] opacity-20 animate-float" style={{ animationDelay: '5s', animationDuration: '20s' }}></div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center"
      >



        {/* Headline with Light Sweep */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto relative"
        >
          AI systems that remove <br className="hidden md:block" /> bottlenecks and
          <span className="relative inline-block ml-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-electric-200 to-white bg-[length:200%_auto] animate-shimmer">
            unlock scale.
            {/* Glow behind text */}
            <div className="absolute inset-0 bg-electric-500/10 blur-xl -z-10"></div>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light antialiased"
        >
          We redesign how growth operates inside your company. <br className="hidden md:block" />
          Scale increases output, not complexity.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <Button variant="primary" onClick={() => scrollToSection('contact')}>
            Start Scaling
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('work')}>
            View Workflow
          </Button>
        </motion.div>

      </motion.div>
    </section>
  );
};