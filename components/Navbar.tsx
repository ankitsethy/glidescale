import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrimaryCTA } from './Primitives';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);

    // Some sections (e.g. the closing CTA) render on every page, not just the
    // homepage, so check the current page for the target before assuming a
    // cross-page navigation is needed.
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (id === 'home') {
      if (window.location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
      else window.location.href = '/';
      return;
    }

    window.location.href = `/#${id}`;
  };

  const navLinks: { name: string; id?: string; href?: string }[] = [
    { name: 'Services', id: 'services' },
    { name: 'Methodology', id: 'methodology' },
    { name: 'Work', href: '/work' },
    { name: 'About', id: 'founder' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'h-[72px] bg-base/70 backdrop-blur-xl border-b border-white/[0.06]'
          : 'h-[88px] bg-transparent border-b border-transparent'
      }`}
    >
      {/* Full width rather than the 1200px content column, so the logo sits near
          the viewport edge instead of ~360px inside it on a wide screen. */}
      <div className="w-full px-6 lg:px-10 h-full flex items-center justify-between relative">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              scrollToSection('home');
            }
          }}
          className="flex items-center group transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
        >
          <img
            src="/logo-dark.svg"
            alt="Glidescale"
            className="h-10 sm:h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-9 text-sm">
          {navLinks.map((link) => {
            const className =
              'relative text-ink-dim hover:text-ink transition-colors duration-300 font-medium tracking-tight group';
            const underline = (
              <span className="absolute -bottom-1.5 left-0 right-0 mx-auto w-0 h-px bg-accent group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#7C5CFF]"></span>
            );

            return link.href ? (
              <a key={link.name} href={link.href} className={className}>
                {link.name}
                {underline}
              </a>
            ) : (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id!)}
                className={className}
              >
                {link.name}
                {underline}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <PrimaryCTA
            onClick={() => window.open('https://cal.com/ankitsethy/30', '_blank')}
            className="!min-h-[42px] !py-2.5 !px-5 !text-sm"
          >
            Let's talk
          </PrimaryCTA>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ink p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-base/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-medium text-ink-dim hover:text-ink text-left transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id!)}
                    className="text-xl font-medium text-ink-dim hover:text-ink text-left transition-colors"
                  >
                    {link.name}
                  </button>
                )
              )}
              <div className="pt-4">
                <PrimaryCTA
                  onClick={() => window.open('https://cal.com/ankitsethy/30', '_blank')}
                  className="w-full justify-center"
                >
                  Let's talk
                </PrimaryCTA>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
