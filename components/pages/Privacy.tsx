import React from 'react';
import { SectionEyebrow } from '../Primitives';

export const Privacy: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-48 overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <SectionEyebrow>Legal</SectionEyebrow>
        <h1 className="mt-5 font-display font-semibold text-ink leading-[1.1] tracking-tight text-[clamp(32px,5vw,52px)]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink-mute">Last updated: September 13, 2026</p>

        <div className="mt-12 space-y-10 text-ink-dim leading-relaxed font-light">
          <div>
            <h2 className="text-ink font-semibold text-xl mb-3">Overview</h2>
            <p>
              GlideScale AI Inc. ("GlideScale", "we", "us") provides AI infrastructure and
              growth systems consulting. This policy explains what information we collect
              through glidescales.com and how we use it.
            </p>
          </div>

          <div>
            <h2 className="text-ink font-semibold text-xl mb-3">Information we collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact details you submit voluntarily (name, email, company) via forms or booking links.</li>
              <li>Basic analytics data (pages visited, referrer, device type) to understand site usage.</li>
              <li>Inputs you provide to the interactive strategy demo, used only to generate your result and not stored beyond the session.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ink font-semibold text-xl mb-3">How we use it</h2>
            <p>
              We use this information to respond to inquiries, schedule calls, improve the
              site, and — where you've given consent — to follow up about our services. We
              do not sell your data.
            </p>
          </div>

          <div>
            <h2 className="text-ink font-semibold text-xl mb-3">Third-party services</h2>
            <p>
              We use third-party tools for scheduling (Cal.com) and analytics. These
              providers may process data under their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-ink font-semibold text-xl mb-3">Your rights</h2>
            <p>
              You can request access to, correction of, or deletion of your data at any
              time by emailing{' '}
              <a href="mailto:ankitsethy.ai@gmail.com" className="text-accent-300 hover:text-accent-200">
                ankitsethy.ai@gmail.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-ink font-semibold text-xl mb-3">Contact</h2>
            <p>
              Questions about this policy? Reach us at{' '}
              <a href="mailto:ankitsethy.ai@gmail.com" className="text-accent-300 hover:text-accent-200">
                ankitsethy.ai@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
