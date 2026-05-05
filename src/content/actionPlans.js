/* ═══════════════════════════════════════════════════════════════
   ACTION PLAN DATA — "Your next 7 days"
   Edit this file to update the action plan content.

   Each stage has 3–5 actions. Each action has:
     id          — unique across all stages, format: s{stage}-a{n}
     stage       — stage number 1–6
     title       — short action title (shown as the checkbox label)
     description — one or two sentences explaining what to do
     timescale   — when to do it (shown beneath the description)
     priority    — display order (1 = first)

   IMPORTANT: IDs must not change once deployed — they are stored
   in localStorage to track completion. Changing an ID will
   un-check that action for returning users.

   Future multi-language support:
     - Create actionPlans-cy.js (Welsh) etc. for translated text.
     - Keep id, stage, and priority values identical across locales.
════════════════════════════════════════════════════════════════ */

const ACTION_PLANS = [
  /* ── Stage 1: Just Found Out ─────────────────────────────── */
  {
    stage: 1,
    actions: [
      {
        id: 's1-a1',
        stage: 1,
        title: 'Write down what the doctor said',
        description: 'Note the main points from any recent appointment or diagnosis conversation. Even brief notes help you remember accurately and share information with others.',
        timescale: 'Today or tomorrow',
        priority: 1,
      },
      {
        id: 's1-a2',
        stage: 1,
        title: 'Confirm the next appointment',
        description: 'Check when the next medical or care appointment is. Write it somewhere you will see it — on paper or in your phone.',
        timescale: 'This week',
        priority: 2,
      },
      {
        id: 's1-a3',
        stage: 1,
        title: 'Ask for written information',
        description: 'Ask the GP, consultant, or care team for any leaflets, letters, or website links explaining the diagnosis or condition. You are entitled to ask.',
        timescale: 'At the next appointment',
        priority: 3,
      },
      {
        id: 's1-a4',
        stage: 1,
        title: "Find out what a carer's assessment involves",
        description: "A free carer's assessment identifies what support you are entitled to. Contact Carers Trust Solihull or your local council to find out more.",
        timescale: 'This week',
        priority: 4,
      },
    ],
  },

  /* ── Stage 2: Getting Your Bearings ──────────────────────── */
  {
    stage: 2,
    actions: [
      {
        id: 's2-a1',
        stage: 2,
        title: 'List what support is already in place',
        description: 'Write down the help already available — from family, friends, or services. Seeing it on paper makes it easier to spot gaps.',
        timescale: 'Today or tomorrow',
        priority: 1,
      },
      {
        id: 's2-a2',
        stage: 2,
        title: 'Write down your main concerns',
        description: 'Note the two or three things worrying you most right now. Having them written down makes it easier to explain your situation to a GP or support worker.',
        timescale: 'This week',
        priority: 2,
      },
      {
        id: 's2-a3',
        stage: 2,
        title: 'Identify one person you can speak to',
        description: 'Think of one person — a family member, friend, or neighbour — you can talk to about how things are going. You do not need to manage this alone.',
        timescale: 'This week',
        priority: 3,
      },
      {
        id: 's2-a4',
        stage: 2,
        title: 'Tell your GP you are a carer',
        description: "Ask your GP surgery to add 'carer' to your record. This gives you access to carer health checks and additional support.",
        timescale: 'Within two weeks',
        priority: 4,
      },
      {
        id: 's2-a5',
        stage: 2,
        title: "Look up what a carer's assessment is",
        description: "A carer's assessment is free and identifies what help you are entitled to from your local council. Ask Carers Trust Solihull or search online for 'carer assessment Solihull'.",
        timescale: 'This week',
        priority: 5,
      },
    ],
  },

  /* ── Stage 3: Becoming the Carer ─────────────────────────── */
  {
    stage: 3,
    actions: [
      {
        id: 's3-a1',
        stage: 3,
        title: 'Register as a carer with your GP',
        description: 'Ask your GP surgery to note that you are an unpaid carer. This is straightforward to do and gives access to carer-specific health support.',
        timescale: 'This week',
        priority: 1,
      },
      {
        id: 's3-a2',
        stage: 3,
        title: 'Create a simple appointment or task list',
        description: 'Write down all the regular appointments, medications, and tasks involved in your caring role. Even a basic list helps reduce the mental load.',
        timescale: 'Today or tomorrow',
        priority: 2,
      },
      {
        id: 's3-a3',
        stage: 3,
        title: "Ask about a carer's assessment",
        description: "Contact Solihull Adult Social Care or Carers Trust Solihull to request a free carer's assessment. It can open access to practical support you may not know about.",
        timescale: 'This week',
        priority: 3,
      },
      {
        id: 's3-a4',
        stage: 3,
        title: 'Check what benefits you may be entitled to',
        description: "If you care for 35 hours or more per week, you may be entitled to Carer's Allowance. Check GOV.UK or speak to Citizens Advice for a free benefits check.",
        timescale: 'Within two weeks',
        priority: 4,
      },
    ],
  },

  /* ── Stage 4: Building a Routine ─────────────────────────── */
  {
    stage: 4,
    actions: [
      {
        id: 's4-a1',
        stage: 4,
        title: 'Write down your weekly care routine',
        description: 'Put your current routine on paper — what happens each day, who does what, and when. This makes it easier to plan, share with others, or review.',
        timescale: 'Today or tomorrow',
        priority: 1,
      },
      {
        id: 's4-a2',
        stage: 4,
        title: 'Set reminders for medication or appointments',
        description: 'Use your phone or a simple chart to set reminders for key tasks. Reliable reminders reduce the mental effort of keeping track.',
        timescale: 'This week',
        priority: 2,
      },
      {
        id: 's4-a3',
        stage: 4,
        title: 'Keep key contacts in one place',
        description: "Write down the phone numbers for the GP, any specialists, your local care team, and Carers Trust Solihull — somewhere easy to find in an emergency.",
        timescale: 'This week',
        priority: 3,
      },
      {
        id: 's4-a4',
        stage: 4,
        title: 'Plan at least one short break this week',
        description: 'Even an hour away from caring makes a difference. Think about what would help you switch off briefly, and make a plan to do it.',
        timescale: 'This week',
        priority: 4,
      },
      {
        id: 's4-a5',
        stage: 4,
        title: 'Review what is working and what needs to change',
        description: 'Set aside 20 minutes to think honestly about your current routine. What is sustainable? What is not? This is a useful first step before talking to a support worker.',
        timescale: 'Within two weeks',
        priority: 5,
      },
    ],
  },

  /* ── Stage 5: Keeping Going ───────────────────────────────── */
  {
    stage: 5,
    actions: [
      {
        id: 's5-a1',
        stage: 5,
        title: 'Book or plan time away from caring',
        description: 'Even a short break matters. Ask a family member, friend, or sitting service to cover so you can step away. Respite is not a luxury — it is necessary.',
        timescale: 'Today or tomorrow',
        priority: 1,
      },
      {
        id: 's5-a2',
        stage: 5,
        title: 'Speak to your GP about how you are coping',
        description: 'Make an appointment and be honest about your own wellbeing, not just the person you care for. Your health matters too.',
        timescale: 'This week',
        priority: 2,
      },
      {
        id: 's5-a3',
        stage: 5,
        title: 'Ask about respite or peer support',
        description: 'Contact Carers Trust Solihull to find out about respite care, sitting services, or carer support groups. You do not need to meet a threshold to ask.',
        timescale: 'This week',
        priority: 3,
      },
      {
        id: 's5-a4',
        stage: 5,
        title: 'Tell someone how you are feeling',
        description: 'Speak to someone you trust — a family member, friend, or carer support worker. Naming how you feel is often the hardest and most important step.',
        timescale: 'Today or tomorrow',
        priority: 4,
      },
    ],
  },

  /* ── Stage 6: Review, Crisis, or Change ──────────────────── */
  {
    stage: 6,
    actions: [
      {
        id: 's6-a1',
        stage: 6,
        title: 'Contact a support service today',
        description: 'Call Carers Trust Solihull or Solihull Connect today. You do not need to explain everything at once — just say you need support and they will guide you from there.',
        timescale: 'Today',
        priority: 1,
      },
      {
        id: 's6-a2',
        stage: 6,
        title: 'Write down what has changed recently',
        description: 'Note the main changes in the caring situation, your own wellbeing, or the support in place. This helps when speaking to services.',
        timescale: 'Today or tomorrow',
        priority: 2,
      },
      {
        id: 's6-a3',
        stage: 6,
        title: 'Do not manage urgent risk alone',
        description: 'If someone is at risk of harm, contact Solihull Connect or the Emergency Duty Team straight away. If there is immediate danger, call 999.',
        timescale: 'Now if needed',
        priority: 3,
      },
      {
        id: 's6-a4',
        stage: 6,
        title: 'Speak to your GP urgently if your health is affected',
        description: 'If this situation is affecting your own mental or physical health, contact your GP today and explain that you are a carer under significant pressure.',
        timescale: 'Today or tomorrow',
        priority: 4,
      },
    ],
  },
];
