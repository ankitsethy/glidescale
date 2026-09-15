export interface ProcessStep {
  num: string;
  title: string;
  /** Homepage copy. Deliberately short. */
  short: string;
  /** /process page copy. Fuller, still tight. */
  long: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Discovery',
    short: 'A call with the people who do the work. Not the org chart version.',
    long: 'A free 30-minute call with the people who actually do the work. We learn how the business really runs, who does what in which tool, and what breaks when someone is away.',
  },
  {
    num: '02',
    title: 'Mapping',
    short: 'Every process written down end to end. Where a lead enters, where it stalls.',
    long: 'Every process written down end to end. Where a lead enters, every hand it passes through, every place it stalls. Most teams see their own operation clearly for the first time here.',
  },
  {
    num: '03',
    title: 'ROI Analysis',
    short: 'We rank what we found by what it costs you. Expensive problems first.',
    long: 'We rank what we found by what it is costing you. Some problems are loud and cheap. Others are quiet and expensive. We build the expensive ones first, and tell you which ones to leave alone.',
  },
  {
    num: '04',
    title: 'Build',
    short: 'We build against that ranking. Working systems, not status decks.',
    long: 'We build against that ranking. You see working systems during the build rather than status decks, so nothing about the result is a surprise at the end of it.',
  },
  {
    num: '05',
    title: 'Deploy',
    short: 'Live and in use inside your business. We move fast on purpose.',
    long: 'Live, in use, and running inside your business. We move fast on purpose. The sooner it ships, the sooner you can see what it returns.',
  },
  {
    num: '06',
    title: 'Ongoing',
    short: 'We watch what we built, fix what breaks, and keep improving it.',
    long: 'We watch what we built, fix what breaks, and keep improving it as the business changes. A system nobody maintains stops being an asset.',
  },
];
