import React, { useState } from 'react';
import { generateStrategy, isStrategyGeneratorEnabled } from '../services/geminiService';
import { Button } from './Button';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { LoadingState } from '../types';
import { motion } from 'framer-motion';

export const StrategyGenerator: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [goal, setGoal] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState('');
  const enabled = isStrategyGeneratorEnabled();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !goal || status === LoadingState.LOADING) return;

    setStatus(LoadingState.LOADING);
    try {
      const strategy = await generateStrategy(industry, goal);
      setResult(strategy);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="demo" className="py-32 relative overflow-hidden bg-navy-950">
        {/* Ambient background for this section */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-electric-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.03]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                
                {/* Left Side: Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 text-electric-300 text-xs font-semibold tracking-wide uppercase mb-6 border border-electric-500/20 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                        <Sparkles className="w-3 h-3" />
                        <span>Interactive Demo</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">Experience our <br /> intelligence</h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        See how GlideScale AI analyzes your unique position. Input your industry and primary bottleneck to generate an instant, high-level growth architecture.
                    </p>
                    
                    <form onSubmit={handleGenerate} className="space-y-4 max-w-md">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Industry / Niche</label>
                            <input 
                                type="text" 
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                placeholder="e.g. B2B SaaS, FinTech, E-commerce"
                                className="w-full bg-navy-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all duration-300 backdrop-blur-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Primary Growth Goal</label>
                            <input 
                                type="text" 
                                value={goal}
                                onChange={(e) => setGoal(e.target.value)}
                                placeholder="e.g. Increase outbound leads, Automate onboarding"
                                className="w-full bg-navy-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all duration-300 backdrop-blur-sm"
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={!enabled || status === LoadingState.LOADING || !industry || !goal}
                            className="w-full justify-center mt-4"
                        >
                            {status === LoadingState.LOADING ? (
                                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Analyzing...</>
                            ) : 'Generate Strategy Map'}
                        </Button>
                        {!enabled && (
                            <p className="text-xs text-gray-500 pt-1">Demo temporarily unavailable.</p>
                        )}
                    </form>
                </motion.div>

                {/* Right Side: Output Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                    {/* Glow effect behind card */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-500 to-electric-300 rounded-2xl blur opacity-20 animate-pulse"></div>
                    
                    <div className="relative glass-card rounded-2xl p-8 min-h-[450px] flex flex-col shadow-2xl">
                        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                            </div>
                            <span className="text-xs font-mono text-gray-500">AI_STRATEGY_PROTOCOL_V3</span>
                        </div>

                        {status === LoadingState.IDLE && (
                            <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-500 space-y-4">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                    <Sparkles className="w-6 h-6 text-gray-600" />
                                </div>
                                <p className="text-sm font-medium">Awaiting inputs to initialize analysis protocol...</p>
                            </div>
                        )}

                        {status === LoadingState.LOADING && (
                            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                                <div className="relative">
                                  <div className="w-12 h-12 rounded-full border-2 border-electric-500/30 border-t-electric-500 animate-spin"></div>
                                </div>
                                <div className="space-y-2 text-center">
                                    <p className="text-sm text-gray-300 font-medium">Synthesizing market data...</p>
                                    <p className="text-xs text-gray-600">Accessing enterprise models...</p>
                                </div>
                            </div>
                        )}

                        {status === LoadingState.SUCCESS && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h3 className="text-electric-300 text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-electric-400"></span>
                                  Strategic Roadmap Generated
                                </h3>
                                <div 
                                    className="prose prose-invert prose-sm text-gray-300 leading-relaxed [&_strong]:text-white [&_strong]:font-semibold [&_li]:mb-4 [&_li]:marker:text-electric-500/50"
                                    dangerouslySetInnerHTML={{ __html: result }}
                                />
                                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                                    <span className="text-xs text-gray-500">Generated by Gemini 2.5 Flash</span>
                                    <button className="text-xs text-electric-400 hover:text-white flex items-center gap-1 transition-colors group">
                                        Full Audit <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        )}

                         {status === LoadingState.ERROR && (
                            <div className="flex-1 flex flex-col items-center justify-center text-center text-red-400 space-y-4">
                                <p>Analysis failed. Please check your connection and try again.</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};