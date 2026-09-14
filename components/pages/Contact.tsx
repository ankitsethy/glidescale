import React from 'react';
import { SectionEyebrow } from '../Primitives';

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

const EmailIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M1.5 4.5A1.5 1.5 0 0 1 3 3h18a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 21 21H3a1.5 1.5 0 0 1-1.5-1.5v-15zm2.4.5 8.1 6.3L20.1 5H3.9zm16.6 1.4-8.1 6.3a1 1 0 0 1-1.2 0L3.5 6.4V19h17V6.4z" />
  </svg>
);

const links = [
  {
    label: 'ankitsethy.ai@gmail.com',
    href: 'mailto:ankitsethy.ai@gmail.com',
    icon: <EmailIcon />,
  },
  {
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/ankit-sethy-/',
    icon: <LinkedInIcon />,
  },
  {
    label: 'Follow on X',
    href: 'https://x.com/ankitsethy_',
    icon: <XIcon />,
  },
];

export const Contact: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-48 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[600px] mx-auto px-6 relative z-10">
        <SectionEyebrow center>Contact</SectionEyebrow>
        <h1 className="mt-5 font-display font-semibold text-ink leading-[1.1] tracking-tight text-[clamp(32px,5vw,52px)] text-center">
          Let's talk.
        </h1>
        <p className="mt-4 text-ink-dim leading-relaxed font-light text-center max-w-md mx-auto">
          Reach out directly through any of these — LinkedIn is fastest.
        </p>

        <div className="mt-12 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/10 hover:border-accent/40 text-ink-dim hover:text-ink transition-colors"
            >
              <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
                {link.icon}
              </span>
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
