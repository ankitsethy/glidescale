export interface Service {
  id: string;
  title: string;
  /** Homepage card copy. Deliberately short. */
  short: string;
  /** /services page copy. Fuller, still tight. */
  long: string;
  /** Business metrics this service affects. Never a claimed result, only what it moves. */
  moves: string[];
}

export const services: Service[] = [
  {
    id: 'cold-email',
    title: 'Cold Email Outbound',
    short:
      'We build and run outbound end to end. Domains, inboxes, sourcing, copy, sending, follow-up.',
    long: 'We build and run outbound end to end. Domains and inboxes warmed properly, leads sourced and enriched, copy written and tested, sending and follow-up handled. Nobody on your team writes an email. Meetings arrive on your calendar.',
    moves: ['lead volume', 'meetings booked', 'pipeline value'],
  },
  {
    id: 'voice-agents',
    title: 'AI Voice Agents',
    short:
      'Calls answered in one ring, at any hour. Agents qualify, book, and log every call.',
    long: 'Calls answered in one ring, at any hour, including the ones that come in at 11pm on a Sunday. Agents qualify inbound, chase leads that went cold, book appointments, and write every call back into your systems. No voicemail, no missed enquiry.',
    moves: ['response time', 'lead-to-appointment rate', 'calls handled'],
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    short:
      'The work your team does by hand that a system should do. Built custom, not bolted together.',
    long: 'The work your team does by hand that a system should be doing. Data moving between tools, records updating themselves, reports building on schedule, work routing without anyone deciding. Built as real software rather than a chain of connectors that breaks when something changes.',
    moves: ['hours per week', 'error rate', 'throughput per person'],
  },
  {
    id: 'revenue-systems',
    title: 'Revenue & CRM Systems',
    short:
      'One place where every lead, conversation, and deal lives. Capture wired to the source.',
    long: 'One place where every lead, conversation, and deal lives. Capture wired directly to the source so nothing depends on someone remembering to type it in. Pipeline visible in real time, not reconstructed on a Monday from six browser tabs and a spreadsheet.',
    moves: ['conversion rate', 'speed to lead', 'pipeline visibility'],
  },
  {
    id: 'websites',
    title: 'Websites',
    short: 'Sites built to convert. Fast, clear, and wired to your capture from day one.',
    long: 'Sites built to convert rather than to be admired. Fast, clear, and wired to your capture and CRM from the first day, so a visitor becomes a tracked lead without a manual step in between. Built to be measured, not guessed at.',
    moves: ['conversion rate', 'cost per lead', 'session to enquiry'],
  },
];
