import React from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const outcomes = [
    {
        value: 95,
        suffix: "%",
        label: "Fast-Track Results",
        desc: "Accelerate your growth journey with optimized infrastructure."
    },
    {
        value: 20,
        suffix: "%",
        label: "Increased Efficiency",
        desc: "Uncover hidden capacity in your team's daily operations."
    },
    {
        value: 54,
        suffix: "%",
        label: "Strategic Advantage",
        desc: "Gain a competitive edge through data-driven strategies."
    }
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 50, damping: 20 });
    const display = useTransform(spring, (current) => Math.round(current).toString() + suffix);

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

export const Metrics: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden z-20 bg-navy-950">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-2xl mx-auto">
                     <div className="inline-block px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5 mb-6">
                        <span className="text-[10px] font-bold text-electric-300 tracking-[0.2em] uppercase">Statistics</span>
                     </div>
                     <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">The numbers that define success</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {outcomes.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative group min-h-[320px]"
                        >
                            {/* Glass Card */}
                            <div className="absolute inset-0 glass-card rounded-2xl transition-all duration-500 group-hover:border-electric-500/40"></div>
                            
                            <div className="relative h-full p-10 flex flex-col justify-center z-10 text-left">
                                {/* Glowing Counter */}
                                <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tighter mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                    <Counter value={item.value} suffix={item.suffix} />
                                </div>
                                
                                <div className="w-12 h-[2px] bg-electric-500 mb-6 opacity-50 group-hover:w-24 group-hover:opacity-100 group-hover:shadow-[0_0_10px_#6366F1] transition-all duration-500"></div>

                                <h3 className="text-xl font-medium text-white mb-4 tracking-tight group-hover:text-electric-200 transition-colors">{item.label}</h3>
                                <p className="text-gray-400 text-base leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};