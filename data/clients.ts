export interface SystemBuilt {
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  /** One-line outcome shown on the index card. Only needed when featured. */
  headline?: string;
  logo: string | null;
  problem?: string;
  systemsBuilt?: SystemBuilt[];
  results: string;
  metrics?: Metric[];
  timeline?: string;
  active?: boolean;
  anonymized: boolean;
  featured: boolean;
}

export const capabilities = [
  'Cold email outbound infrastructure',
  'Agentic workflow automation',
  'Voice agents',
  'Websites built for conversion',
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'ghar-apna',
    name: 'Gharapna',
    tagline: 'PG rental chain, Mumbai and Navi Mumbai. 7-figure business.',
    headline: 'Response time: inconsistent to immediate. Six systems, two weeks.',
    logo: '/logos/gharapna.svg',
    timeline: 'Six systems, shipped in two weeks',
    active: true,
    problem:
      'Leads came in and sat. There was no fixed response time, sometimes next-day, sometimes days later. The sales team had no real-time visibility into which beds were actually vacant. Reviews were not being collected systematically. Lead-to-visit conversion was low, and nobody could see why.',
    systemsBuilt: [
      {
        title: 'Lead capture system',
        description: 'Every inbound lead hits the pipeline immediately, with no manual entry lag.',
      },
      {
        title: 'Listing automation',
        description: 'Syncs and manages listings across OLX, MagicBricks, and 99acres.',
      },
      {
        title: 'Review collection system',
        description: 'Systematized Google review gathering across sources.',
      },
      {
        title: 'Ops dashboard',
        description:
          'Real-time visibility into occupancy, vacancy, and lead status for the sales team.',
      },
      {
        title: 'Bonvoice call integration',
        description: 'Call data flows into the same system instead of sitting isolated.',
      },
      {
        title: 'Property matcher',
        description: 'Routes leads to the right property for the sales team automatically.',
      },
    ],
    results:
      'Response time went from inconsistent, sometimes next-day, to immediate. The sales team went from no visibility into vacant beds to a live dashboard. Top-of-funnel volume increased.',
    anonymized: false,
    featured: true,
  },
  {
    id: 'upscalers',
    name: 'Upscalers.io',
    tagline:
      'Growth infrastructure for tech companies. 60+ companies served, 20k+ creator network.',
    headline: 'Manual influencer sourcing replaced with a system that scales with volume.',
    logo: '/logos/upscalers-mark.svg',
    problem:
      'Influencer sourcing, vetting, and matching was manual and did not scale. There was no system for scoring or enriching influencer data, and no structured way to match the right creator to the right campaign as volume grew.',
    systemsBuilt: [
      {
        title: 'Influencer database',
        description: 'Built from the ground up, starting from around 60 influencers in-system.',
      },
      {
        title: 'Auto-enrichment and scoring',
        description: 'Every influencer profile is enriched and scored automatically.',
      },
      {
        title: 'AI matching system',
        description: 'Pairs influencers to specific campaigns based on fit, not manual review.',
      },
      {
        title: 'ClickUp ops system',
        description:
          'The operational backbone tying sourcing, vetting, and campaign work together.',
      },
      {
        title: 'Supporting work',
        description:
          'Competitor analysis, podcast marketing operations, and campaign-specific influencer suggestions.',
      },
    ],
    results:
      'Replaced manual, one-off influencer sourcing and matching with a system that scales with campaign volume.',
    anonymized: false,
    featured: true,
  },
  {
    id: 'uk-review-growth',
    name: 'Review growth system',
    tagline: 'UK home services client',
    logo: null,
    results:
      'Built a system to grow Google reviews across multiple sources, with filtering logic to manage what surfaces. Review volume increased.',
    anonymized: true,
    featured: false,
  },
  {
    id: 'uk-outbound-recruitment',
    name: 'Full-funnel outbound',
    tagline: 'UK, recruitment niche',
    logo: null,
    results:
      'Ran the entire funnel end to end: scraping, enrichment, list building, outreach, follow-up, through to booked meetings. Performance-based engagement, compensated on results. 10+ meetings booked.',
    anonymized: true,
    featured: false,
  },
  {
    id: 'uk-outbound-coaching',
    name: 'Full-funnel outbound',
    tagline: 'UK, coaches and consultants niche',
    logo: null,
    results:
      'The same full-funnel model, a separate client in a separate niche. Performance-based, compensated on booked meetings.',
    anonymized: true,
    featured: false,
  },
];
