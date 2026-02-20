import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Work', id: 'work' },
    { name: 'About', id: 'founder' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-navy-950/70 backdrop-blur-xl border-b border-white/[0.05] py-4'
          : 'bg-transparent border-b border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group focus:outline-none"
        >
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 bg-electric-500 rounded-full animate-pulse-glow"></div>
            <div className="absolute inset-0.5 bg-white rounded-full"></div>
          </div>
          <span className="group-hover:text-electric-300 transition-colors">glidescale</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="relative hover:text-white transition-colors duration-300 py-1 group focus:outline-none"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#6366F1]"></span>
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            variant="primary"
            className="!py-2.5 !px-6 !text-sm !h-auto"
            onClick={() => window.open('https://cal.com/ankitsethy/30', '_blank')}
          >
            Let's talk
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 right-0 bg-navy-950/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden md:hidden pt-20 pb-8"
          >
            <div className="px-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="text-2xl font-light text-gray-300 hover:text-white tracking-tight text-left"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  variant="primary"
                  className="w-full justify-center py-4"
                  onClick={() => window.open('https://cal.com/ankitsethy/30', '_blank')}
                >
                  Let's talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};