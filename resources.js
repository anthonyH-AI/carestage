/* ═══════════════════════════════════════════════════════════════
   SUPPORT DIRECTORY DATA
   Edit this file to update the support directory.
   IMPORTANT: Verify all phone numbers before deployment.

   Each resource has:
     id            — unique identifier (no spaces)
     name          — display name shown in the directory
     category      — must match an id in CATEGORIES below
     description   — one or two sentences shown in the directory
     url           — website URL string, or null
     phone         — phone number string, or null
     appliesToStages — array of stage numbers 1–6 (used for result-page recommendations)
     urgencyLevel  — 'standard', 'urgent', or 'emergency'
════════════════════════════════════════════════════════════════ */

const CATEGORIES = [
  { id: 'carers-support',    label: 'Carers support' },
  { id: 'adult-social-care', label: 'Adult social care' },
  { id: 'financial-support', label: 'Financial support' },
  { id: 'health-wellbeing',  label: 'Health and wellbeing' },
  { id: 'emergency-urgent',  label: 'Emergency and urgent help' },
  { id: 'work-employment',   label: 'Work and employment rights' },
  { id: 'young-carers',      label: 'Young carers and parent carers' },
];

const RESOURCES = [
  {
    id: 'carers-trust-solihull',
    name: 'Carers Trust Solihull',
    category: 'carers-support',
    description: 'Free, confidential support for unpaid carers in Solihull. Includes carer assessments, one-to-one support, and information on what you are entitled to.',
    url: 'https://carerstrustsolihull.org.uk',
    phone: null,  // add phone number when confirmed with the charity
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
  },
  {
    id: 'solihull-connect',
    name: 'Solihull Connect',
    category: 'adult-social-care',
    description: 'Solihull\'s adult social care and community support service. Contact for care assessments, emergency support planning, and out-of-hours help.',
    url: 'https://www.solihull.gov.uk/adult-social-care/solihull-connect',
    phone: '0121 704 8007',  // verify before deployment
    appliesToStages: [4, 5, 6],
    urgencyLevel: 'urgent',
  },
  {
    id: 'solihull-adult-care',
    name: 'Solihull Adult Social Care',
    category: 'adult-social-care',
    description: 'Request a carer\'s assessment or a care needs assessment for the person you care for. Free to access — you are entitled to one by law.',
    url: 'https://www.solihull.gov.uk/adult-social-care',
    phone: null,
    appliesToStages: [2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
  },
  {
    id: 'nhs-carers',
    name: 'NHS — Carers Support',
    category: 'health-wellbeing',
    description: 'NHS guidance on conditions, care options, and the support available to unpaid carers — including how to register as a carer with your GP.',
    url: 'https://www.nhs.uk/conditions/social-care-and-support-guide/support-and-benefits-for-carers/',
    phone: null,
    appliesToStages: [1, 2, 3],
    urgencyLevel: 'standard',
  },
  {
    id: 'your-gp',
    name: 'Your GP',
    category: 'health-wellbeing',
    description: 'Register as a carer with your GP to access carer health checks, additional support, and referrals to local services. Contact your surgery directly.',
    url: null,
    phone: null,
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
  },
  {
    id: 'carers-allowance',
    name: 'Carer\'s Allowance — GOV.UK',
    category: 'financial-support',
    description: 'Check whether you are entitled to Carer\'s Allowance — a weekly government payment for people who spend 35 hours or more per week caring.',
    url: 'https://www.gov.uk/carers-allowance',
    phone: null,
    appliesToStages: [3, 4, 5, 6],
    urgencyLevel: 'standard',
  },
  {
    id: 'citizens-advice',
    name: 'Citizens Advice',
    category: 'financial-support',
    description: 'Free, independent advice on benefits, debt, employment rights, and housing. Available online, by phone, and in person at local offices.',
    url: 'https://www.citizensadvice.org.uk/',
    phone: '0800 144 8848',
    appliesToStages: [3, 4, 5, 6],
    urgencyLevel: 'standard',
  },
  {
    id: 'acas',
    name: 'ACAS — Working Carers Rights',
    category: 'work-employment',
    description: 'Guidance on your rights as a working carer: flexible working requests, emergency unpaid leave for dependants, and what your employer must do.',
    url: 'https://www.acas.org.uk/time-off-for-dependants',
    phone: '0300 123 1100',
    appliesToStages: [3, 4, 5],
    urgencyLevel: 'standard',
  },
  {
    id: 'working-families',
    name: 'Working Families',
    category: 'work-employment',
    description: 'Advice for working carers on balancing employment with caring responsibilities, including flexible working rights and legal protections.',
    url: 'https://workingfamilies.org.uk/',
    phone: null,
    appliesToStages: [3, 4, 5],
    urgencyLevel: 'standard',
  },
  {
    id: 'young-carers-solihull',
    name: 'Young Carers — Carers Trust Solihull',
    category: 'young-carers',
    description: 'Support for young people aged 5–25 who care for a family member, including respite activities, school liaison, and one-to-one support.',
    url: 'https://carerstrustsolihull.org.uk',
    phone: null,
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
  },
  {
    id: 'samaritans',
    name: 'Samaritans',
    category: 'emergency-urgent',
    description: 'Free, 24-hour confidential listening service. Available any time you need to talk — you do not need to be in crisis. Calls are free, including from mobiles.',
    url: 'https://www.samaritans.org',
    phone: '116 123',
    appliesToStages: [4, 5, 6],
    urgencyLevel: 'urgent',
  },
  {
    id: 'solihull-emergency-duty',
    name: 'Emergency Duty Team — Solihull',
    category: 'emergency-urgent',
    description: 'Out-of-hours emergency adult social care for Solihull residents. Contact when Solihull Connect is unavailable and urgent care support is needed.',
    url: null,
    phone: '0121 605 6060',  // verify before deployment
    appliesToStages: [5, 6],
    urgencyLevel: 'urgent',
  },
  {
    id: 'emergency-999',
    name: 'Emergency Services — 999',
    category: 'emergency-urgent',
    description: 'Call 999 immediately if someone is in immediate physical danger or the situation is life-threatening. Do not wait.',
    url: null,
    phone: '999',
    appliesToStages: [5, 6],
    urgencyLevel: 'emergency',
  },
];

/* ═══════════════════════════════════════════════════════════════
   STAGE RECOMMENDATIONS
   IDs of resources to highlight on the result page for each stage.
   Must match resource ids defined in RESOURCES above.
   Keep to 2–3 per stage — the full directory is one tap away.
════════════════════════════════════════════════════════════════ */
const STAGE_RECOMMENDATIONS = {
  1: ['carers-trust-solihull', 'nhs-carers', 'your-gp'],
  2: ['carers-trust-solihull', 'solihull-adult-care', 'your-gp'],
  3: ['carers-trust-solihull', 'carers-allowance', 'citizens-advice'],
  4: ['carers-trust-solihull', 'solihull-adult-care', 'your-gp'],
  5: ['carers-trust-solihull', 'solihull-connect', 'samaritans'],
  6: ['solihull-connect', 'carers-trust-solihull', 'emergency-999'],
};
