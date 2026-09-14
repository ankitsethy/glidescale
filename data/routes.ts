export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

// Canonical host. glidescales.com 307-redirects here, so og:url must match.
export const SITE_URL = 'https://www.glidescales.com';

export const routes: RouteMeta[] = [
  {
    path: '/',
    title: 'Glidescale AI | AI Operating Systems for Growth-Stage Founders',
    description:
      'Glidescale AI builds AI-backed operating infrastructure for growth-stage companies. We replace manual drag with scalable outbound, revenue, and execution systems.',
  },
  {
    path: '/work',
    title: 'Work | Glidescale AI',
    description:
      'Systems we have built, who they were for, and what changed. Lead capture, outbound, voice agents, and the dashboards that make growth visible.',
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
];

export const findRoute = (path: string): RouteMeta =>
  routes.find((route) => route.path === path) ?? routes[0];
