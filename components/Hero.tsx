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
    <section id="home" ref={ref} className="relative min-h-[100vh] flex items-center justify-center pt-32 lg:pt-[108px] pb-20 overflow-hidden bg-navy-950">

      {/* Background System */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Primary radial glow — top center */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18)_0%,transparent_60%)] blur-[100px]"></div>

        {/* Secondary focused glow — tighter, centered on text */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.07)_0%,transparent_70%)] blur-[60px]"></div>

        {/* Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-[0.04]"></div>

        {/* Orbit rings — large, static, centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-electric-500/[0.04] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-electric-500/[0.055] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-electric-500/[0.07] rounded-full"></div>

        {/* Horizontal beam at center */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-500/[0.07] to-transparent"></div>

        {/* Floating Particles */}
        <motion.div style={{ y: nodesY }} className="absolute inset-0">
          <div className="absolute top-[18%] left-[8%]  w-2   h-2   bg-electric-500  rounded-full blur-[2px]  opacity-40 animate-float" style={{ animationDuration: '15s' }}></div>
          <div className="absolute top-[38%] right-[13%] w-1   h-1   bg-white         rounded-full blur-[1px]  opacity-25 animate-float" style={{ animationDelay: '2s', animationDuration: '18s' }}></div>
          <div className="absolute bottom-[22%] left-[18%] w-3  h-3   bg-electric-300 rounded-full blur-[4px]  opacity-15 animate-float" style={{ animationDelay: '5s', animationDuration: '20s' }}></div>
          <div className="absolute top-[55%] left-[45%]  w-1.5 h-1.5 bg-electric-400  rounded-full blur-[2px]  opacity-30 animate-float" style={{ animationDelay: '3s', animationDuration: '14s' }}></div>
          <div className="absolute top-[25%] right-[30%] w-1   h-1   bg-electric-300  rounded-full blur-[1px]  opacity-20 animate-float" style={{ animationDelay: '7s', animationDuration: '22s' }}></div>
          <div className="absolute bottom-[35%] right-[22%] w-2  h-2  bg-white         rounded-full blur-[2px]  opacity-15 animate-float" style={{ animationDelay: '1s', animationDuration: '17s' }}></div>
          <div className="absolute top-[70%] left-[60%]  w-1   h-1   bg-electric-500  rounded-full blur-[1px]  opacity-35 animate-float" style={{ animationDelay: '4s', animationDuration: '19s' }}></div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto relative"
        >
          AI systems that remove <br className="hidden md:block" /> bottlenecks and
          <span className="relative inline-block ml-3 text-transparent bg-clip-text bg-gradient-to-r from-electric-300 via-white to-electric-400 bg-[length:200%_auto] animate-shimmer">
            unlock scale.
            <div className="absolute inset-0 bg-electric-500/15 blur-2xl -z-10"></div>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light antialiased"
        >
          We redesign how growth operates inside your company —<br className="hidden md:block" />
          replacing manual drag with AI-backed operating infrastructure.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mb-16"
        >
          <Button variant="primary" onClick={() => scrollToSection('contact')}>
            Book a Strategy Call
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('work')}>
            See Our Work
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 text-sm text-gray-500"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-electric-500 opacity-70 animate-pulse"></span>
          <span>Working with growth-stage founders across SaaS, services &amp; agencies</span>
          <span className="w-1.5 h-1.5 rounded-full bg-electric-500 opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
        </motion.div>

      </motion.div>
    </section>
  );
};
