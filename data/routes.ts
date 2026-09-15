import { caseStudies } from './clients';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  /** Public path to a 1200x630 preview image. Falls back to DEFAULT_OG_IMAGE. */
  image?: string;
}

export const DEFAULT_OG_IMAGE = '/og-image.png';

// Canonical host. glidescales.com 307-redirects here, so og:url must match.
export const SITE_URL = 'https://www.glidescales.com';

export const routes: RouteMeta[] = [
  {
    path: '/',
    title: 'Glidescale AI | Find what\'s slowing growth. Fix it.',
    description:
      'Glidescale builds the systems that remove bottlenecks: outbound, voice agents, automation, and CRM built to convert leads.',
  },
  {
    path: '/work',
    title: 'Work | Glidescale AI',
    description:
      'Systems we have built, who they were for, and what changed. Lead capture, outbound, voice agents, and the dashboards that make growth visible.',
  },
  {
    path: '/services',
    title: 'Services | Glidescale AI',
    description:
      'Five systems we build: cold email outbound, AI voice agents, workflow automation, CRM systems, and websites built to convert.',
  },
  {
    path: '/process',
    title: 'Our Process | Glidescale AI',
    description:
      'From first call to live system. How we find what is slowing a business down, then build what fixes it.',
  },
  {
    path: '/privacy',
    title: 'Privacy | Glidescale AI',
    description:
      'How Glidescale AI collects, uses, and handles information through glidescales.com.',
  },
  {
    path: '/contact',
    title: 'Contact | Glidescale AI',
    description: 'Reach Glidescale AI directly by email, LinkedIn, or X.',
  },
  // One route per featured case study, generated so it can never drift out
  // of sync with what's actually in data/clients.ts.
  ...caseStudies
    .filter((study) => study.featured)
    .map((study) => ({
      path: `/work/${study.id}`,
      title: `${study.name} | Work | Glidescale AI`,
      description: study.headline ?? study.results,
    })),
];

export const findRoute = (path: string): RouteMeta =>
  routes.find((route) => route.path === path) ?? routes[0];
