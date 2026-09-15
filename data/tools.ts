export interface Tool {
  name: string;
  /** Matches the filename in public/tools/, written by scripts/tool-logos.mjs */
  slug: string;
  /**
   * wordmark: the SVG already spells the product name, so it renders alone.
   * icon: a bare mark, rendered with a text label beside it.
   */
  kind: 'icon' | 'wordmark';
}

// Order alternates icon and wordmark so the marquee keeps an even rhythm
// rather than clustering all the wide logos together.
export const tools: Tool[] = [
  { name: 'Claude', slug: 'claude', kind: 'icon' },
  { name: 'Instantly', slug: 'instantly', kind: 'wordmark' },
  { name: 'OpenAI', slug: 'openai', kind: 'icon' },
  { name: 'Apify', slug: 'apify', kind: 'wordmark' },
  { name: 'LinkedIn Sales Navigator', slug: 'linkedin', kind: 'icon' },
  { name: 'Retell AI', slug: 'retell', kind: 'wordmark' },
  { name: 'Claude Code', slug: 'claude-code', kind: 'icon' },
  { name: 'Vercel', slug: 'vercel', kind: 'icon' },
  { name: 'Google Cloud', slug: 'google-cloud', kind: 'icon' },
  { name: 'ClickUp', slug: 'clickup', kind: 'icon' },
  { name: 'Airtable', slug: 'airtable', kind: 'icon' },
];
