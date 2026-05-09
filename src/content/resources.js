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
     phone         — phone number string, or null — shown as tel: link
     appliesToStages — array of stage numbers 1–6
                       (used for result-page recommendations)
     urgencyLevel  — 'standard', 'urgent', or 'emergency'
     conditionTags — array of condition ids (from conditions.js) for
                     which this resource is especially relevant.
                     Leave empty or omit for universal resources.
                     Valid ids: dementia · physical · mental-health ·
                     neurological · learning-disability · frailty ·
                     not-sure · other
     priority      — sort order among condition-matched resources.
                     1 = highest (specialist services), 2 = strong
                     match (local statutory), 3 = general support.
                     Omit for non-tagged resources.
     highlightReason — editorial note explaining why this resource is
                       tagged. Not shown to users. For content review.

   How condition-aware sorting works:
     When a condition is selected, resources whose conditionTags
     include that condition are shown first (sorted by priority),
     then remaining resources appear underneath. Resources without
     conditionTags are always visible but are never highlighted.

   How to add a new condition-specific resource:
     1. Add the resource object below with appropriate conditionTags
        and a priority of 1 (specialist) or 2 (strong local match).
     2. Optionally add its id to STAGE_RECOMMENDATIONS for stages
        where it is especially relevant.
     3. Bump CACHE_VERSION in sw.js.

   Why resources are highlighted, not hidden:
     This feature is for better signposting, not gatekeeping. All
     resources remain visible regardless of condition. The badge
     "Suggested for your situation" signals relevance — it does not
     imply that other services are unsuitable.

   Future multi-language support:
     - Create resources-cy.js (Welsh) etc. for translated text.
     - Keep id, category, url, phone, appliesToStages, urgencyLevel,
       conditionTags, and priority identical across locales.
════════════════════════════════════════════════════════════════ */

const CATEGORIES = [
  { id: 'carers-support',    label: 'Carers support' },
  { id: 'adult-social-care', label: 'Adult social care' },
  { id: 'financial-support', label: 'Financial support' },
  { id: 'health-wellbeing',  label: 'Health and wellbeing' },
  { id: 'emergency-urgent',  label: 'Emergency and urgent help' },
  { id: 'work-employment',   label: 'Work and employment rights' },
  { id: 'young-carers',      label: 'Young carers and parent carers' },
  { id: 'digital-support',   label: 'Digital support' },
];

const RESOURCES = [

  // ── Universal carers support ────────────────────────────────
  {
    id: 'carers-trust-solihull',
    name: 'Carers Trust Solihull',
    category: 'carers-support',
    description: 'Free, confidential support for unpaid carers in Solihull. Includes carer assessments, one-to-one support, and information on what you are entitled to.',
    url: 'https://solihullcarers.org',
    phone: null,  // add phone number when confirmed with the charity
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
  },

  // ── Adult social care ────────────────────────────────────────
  {
    id: 'solihull-connect',
    name: 'Solihull Connect',
    category: 'adult-social-care',
    description: 'Solihull\'s adult social care and community support service. Contact for care assessments, emergency support planning, and out-of-hours help.',
    url: 'https://www.solihull.gov.uk/adult-social-care/solihull-connect',
    phone: '0121 704 8007',  // verify before deployment
    appliesToStages: [4, 5, 6],
    urgencyLevel: 'urgent',
    conditionTags: ['dementia', 'physical', 'neurological', 'frailty', 'learning-disability'],
    priority: 2,
    highlightReason: 'Local statutory service providing care assessments and emergency planning for most health and disability conditions.',
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
    conditionTags: ['dementia', 'physical', 'neurological', 'frailty', 'learning-disability'],
    priority: 2,
    highlightReason: 'Statutory carer assessment is particularly relevant for long-term and complex health and disability conditions.',
  },

  // ── Health and wellbeing ─────────────────────────────────────
  {
    id: 'nhs-carers',
    name: 'NHS — Carers Support',
    category: 'health-wellbeing',
    description: 'NHS guidance on conditions, care options, and the support available to unpaid carers — including how to register as a carer with your GP.',
    url: 'https://www.nhs.uk/conditions/social-care-and-support-guide/support-and-benefits-for-carers/',
    phone: null,
    appliesToStages: [1, 2, 3],
    urgencyLevel: 'standard',
    conditionTags: ['dementia', 'physical', 'neurological', 'frailty', 'mental-health'],
    priority: 2,
    highlightReason: 'NHS carer guidance is especially useful when caring for someone with a diagnosed health condition.',
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
    conditionTags: ['dementia', 'physical', 'neurological', 'frailty', 'mental-health', 'learning-disability', 'not-sure', 'other'],
    priority: 2,
    highlightReason: 'The GP is a key first contact for referrals, carer registration, and condition-specific support for almost all health conditions.',
  },

  // ── Condition-specific: Dementia ─────────────────────────────
  {
    id: 'alzheimers-society',
    name: 'Alzheimer\'s Society',
    category: 'health-wellbeing',
    description: 'Specialist support, information, and guidance for people affected by dementia and their carers. Includes a Dementia Connect support line and local services.',
    url: 'https://www.alzheimers.org.uk',
    phone: '0333 150 3456',
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
    conditionTags: ['dementia'],
    priority: 1,
    highlightReason: 'Leading national charity specialising in dementia support for carers — information, local groups, and a dedicated helpline.',
  },
  {
    id: 'dementia-uk',
    name: 'Dementia UK — Admiral Nurses',
    category: 'health-wellbeing',
    description: 'Specialist dementia nurses (Admiral Nurses) provide free, practical, and emotional support to families and carers affected by dementia.',
    url: 'https://www.dementiauk.org',
    phone: '0800 888 6678',
    appliesToStages: [2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
    conditionTags: ['dementia'],
    priority: 1,
    highlightReason: 'Admiral Nurses offer specialist one-to-one support specifically for dementia carers — free to access by phone.',
  },

  // ── Condition-specific: Mental health ───────────────────────
  {
    id: 'mind',
    name: 'Mind',
    category: 'health-wellbeing',
    description: 'National mental health charity providing information, advice, and support for people experiencing mental health problems — including carers.',
    url: 'https://www.mind.org.uk',
    phone: '0300 123 3393',
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
    conditionTags: ['mental-health'],
    priority: 1,
    highlightReason: 'Specialist mental health support and information for carers of someone with a mental health condition.',
  },
  {
    id: 'rethink',
    name: 'Rethink Mental Illness',
    category: 'health-wellbeing',
    description: 'Support and advice for people affected by severe mental illness, including carers. Includes a helpline and peer support groups across the UK.',
    url: 'https://www.rethink.org',
    phone: '0808 801 0525',
    appliesToStages: [2, 3, 4, 5],
    urgencyLevel: 'standard',
    conditionTags: ['mental-health'],
    priority: 2,
    highlightReason: 'Specialist carers support for those supporting someone with a serious or enduring mental illness.',
  },

  // ── Condition-specific: Frailty / ageing ────────────────────
  {
    id: 'age-uk',
    name: 'Age UK',
    category: 'carers-support',
    description: 'Information, advice, and support for older people and those who care for them. Covers benefits, housing, health, and wellbeing.',
    url: 'https://www.ageuk.org.uk',
    phone: '0800 678 1602',
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
    conditionTags: ['frailty'],
    priority: 1,
    highlightReason: 'Specialist support for carers of older or frail people, including benefits advice and local services.',
  },

  // ── Condition-specific: Learning disability / autism ─────────
  {
    id: 'mencap',
    name: 'Mencap',
    category: 'carers-support',
    description: 'Support and information for people with a learning disability and their families. Includes advice on care, benefits, education, and local services.',
    url: 'https://www.mencap.org.uk',
    phone: '0808 808 1111',
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
    conditionTags: ['learning-disability'],
    priority: 1,
    highlightReason: 'Leading charity for carers of people with a learning disability — information, advice, and local support.',
  },
  {
    id: 'national-autistic-society',
    name: 'National Autistic Society',
    category: 'carers-support',
    description: 'Guidance and support for autistic people and their families, including information on care, rights, education, and local services.',
    url: 'https://www.autism.org.uk',
    phone: '0808 800 4104',
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
    conditionTags: ['learning-disability'],
    priority: 1,
    highlightReason: 'Specialist support for carers of autistic people, including rights, local groups, and a helpline.',
  },

  // ── Condition-specific: Neurological ────────────────────────
  {
    id: 'headway',
    name: 'Headway — Brain Injury Association',
    category: 'health-wellbeing',
    description: 'Support for people affected by acquired brain injury and their carers, including a helpline, information, and local groups.',
    url: 'https://www.headway.org.uk',
    phone: '0808 800 2244',
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
    conditionTags: ['neurological'],
    priority: 1,
    highlightReason: 'Specialist support for carers of someone with a neurological or brain injury condition.',
  },

  // ── Financial support ────────────────────────────────────────
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

  // ── Work and employment ──────────────────────────────────────
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

  // ── Young carers ─────────────────────────────────────────────
  {
    id: 'young-carers-solihull',
    name: 'Young Carers — Carers Trust Solihull',
    category: 'young-carers',
    description: 'Support for young people aged 5–25 who care for a family member, including respite activities, school liaison, and one-to-one support.',
    url: 'https://solihullcarers.org',
    phone: null,
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
  },

  // ── Emergency and urgent help ────────────────────────────────
  {
    id: 'samaritans',
    name: 'Samaritans',
    category: 'emergency-urgent',
    description: 'Free, 24-hour confidential listening service. Available any time you need to talk — you do not need to be in crisis. Calls are free, including from mobiles.',
    url: 'https://www.samaritans.org',
    phone: '116 123',
    appliesToStages: [4, 5, 6],
    urgencyLevel: 'urgent',
    conditionTags: ['mental-health', 'not-sure', 'other'],
    priority: 1,
    highlightReason: 'Especially relevant when caring feels emotionally overwhelming — available any time, no need to be in crisis.',
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

  // ── Digital support ──────────────────────────────────────────
  {
    id: 'bridgit-care-ai',
    name: 'Bridgit Care AI',
    category: 'digital-support',
    description: '24/7 digital support for carers. Provides guidance, answers, and ongoing support. Available any time — including outside office hours.',
    url: 'https://carers.bridgit.care/app/ctsol/web',
    phone: null,
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
    whenToUse: [
      'You have questions outside office hours',
      'You need guidance between appointments',
      'You are unsure what to do next',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   STAGE RECOMMENDATIONS
   IDs of resources to highlight on the result page for each stage.
   Must match resource ids defined in RESOURCES above.
   Keep to 2–3 per stage — the full directory is one tap away.
   When a condition is selected, the JS in index.html extends this
   list with condition-matched resources automatically.
════════════════════════════════════════════════════════════════ */
const STAGE_RECOMMENDATIONS = {
  1: ['carers-trust-solihull', 'nhs-carers', 'your-gp'],
  2: ['carers-trust-solihull', 'solihull-adult-care', 'your-gp'],
  3: ['carers-trust-solihull', 'carers-allowance', 'citizens-advice'],
  4: ['carers-trust-solihull', 'solihull-adult-care', 'your-gp'],
  5: ['carers-trust-solihull', 'solihull-connect', 'samaritans'],
  6: ['solihull-connect', 'carers-trust-solihull', 'emergency-999'],
};
