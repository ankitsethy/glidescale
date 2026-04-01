import React from 'react';

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 py-16 border-t border-white/[0.04] relative z-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center justify-center md:justify-start">
            <a href="/" className="flex items-center group transition-opacity hover:opacity-80">
              <img src="/logo-dark.svg" alt="Glidescale" className="h-[36px] sm:h-[56px] w-auto object-contain" />
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/ankitsethy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-electric-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com/ankitsethy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-electric-400 transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-600 font-medium">
              <span>© {new Date().getFullYear()} GlideScale AI Inc.</span>
              <span className="text-gray-700">·</span>
              <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy &amp; Terms</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};