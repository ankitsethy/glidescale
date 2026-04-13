import React from 'react';

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Outbound Infrastructure', href: '#work' },
      { label: 'Revenue Architecture', href: '#work' },
      { label: 'Execution Frameworks', href: '#work' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#founder' },
      { label: 'Methodology', href: '#work' },
      { label: 'Outcomes', href: '#work' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Book a Call', href: 'https://cal.com/ankitsethy/30', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/ankitsethy', external: true },
      { label: 'hello@glidescales.com', href: 'mailto:hello@glidescales.com', external: true },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/8 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <a
              href="/"
              className="inline-flex items-center transition-opacity hover:opacity-80"
            >
              <img src="/logo-dark.svg" alt="Glidescale" className="h-12 w-auto object-contain" />
            </a>
            <p className="mt-6 max-w-sm text-ink-dim leading-relaxed font-light">
              AI-backed operating infrastructure for growth-stage companies.
              Built to remove bottlenecks and unlock scale.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://linkedin.com/in/ankitsethy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/10 hover:border-accent/50 text-ink-dim hover:text-accent-200 flex items-center justify-center transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com/ankitsethy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 rounded-full border border-white/10 hover:border-accent/50 text-ink-dim hover:text-accent-200 flex items-center justify-center transition-colors"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="text-ink-dim hover:text-ink text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 hidden md:block"></div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-mute">
          <span>© {new Date().getFullYear()} GlideScale AI Inc. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-ink-dim transition-colors">Privacy</a>
            <a href="/privacy" className="hover:text-ink-dim transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
