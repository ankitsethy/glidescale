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
    { name: 'Services', id: 'work' },
    { name: 'About', id: 'founder' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 h-[96px] ${isScrolled
        ? 'bg-navy-950/70 backdrop-blur-xl border-b border-white/[0.05]'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex-1 flex items-center justify-start h-full">
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                scrollToSection('home');
              }
            }}
            className="flex items-center group focus:outline-none transition-all duration-200 ease-in-out hover:opacity-90 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] active:opacity-80"
          >
            <img src="/logo-dark.svg" alt="Glidescale" className="h-[40px] sm:h-[72px] w-auto max-h-[80px] object-contain transition-transform duration-200" />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center gap-10 text-sm h-full">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="relative transition-colors duration-300 py-1 group focus:outline-none font-semibold text-[rgba(255,255,255,0.92)] hover:text-[rgba(255,255,255,1)]"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#6366F1]"></span>
            </button>
          ))}
        </div>

        {/* Right side group */}
        <div className="flex-1 flex items-center justify-end h-full">
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