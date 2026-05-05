/* ═══════════════════════════════════════════════════════════════
   STAGE RESULTS CONTENT
   Edit all stage content here. Each stage object contains:

     stage        — stage number 1–6 (do not change)
     title        — stage name shown on result page
     meaning      — paragraph under "What this means"
     action       — { label, url } for the main CTA button
     steps        — array of exactly 5 next-step strings
     learnMore    — { signs[], watchFor, whatHelps } for the
                    expandable "Learn more" section
     tip          — italic tip text shown at bottom of result
     reviewTiming — suggested interval before checking again
     help         — array of { label, detail, url } support links
     bridgitMessage — short sentence shown on the Bridgit Care AI
                    card on the result page. Adjust per stage.

   Dependencies:
     HELP_LINKS must be loaded before this file (via helpLinks.js).

   Future multi-language support:
     - Create stageResults-cy.js (Welsh) etc. and load based on
       locale. Keep stage numbers and structure identical.
════════════════════════════════════════════════════════════════ */

const STAGE_RESULTS = [
  /* ── Stage 1: Just Found Out ─────────────────────────────── */
  {
    stage: 1,
    title: "Just Found Out",
    meaning: "You are at the very start of this journey. The situation may feel new, uncertain, or hard to make sense of. You may not yet see yourself as a carer, or the diagnosis or condition may still be unclear. This is a normal and common place to be.",
    action: {
      label: "Get clear medical information",
      url: HELP_LINKS.NHS_CARERS,
    },
    steps: [
      "Focus on getting accurate information about the diagnosis or condition",
      "Contact your GP if the diagnosis is still unclear or unexplained",
      "Find out what a carer's assessment is — you are likely entitled to one",
      "Contact Carers Trust Solihull — they can help even at this very early stage",
      "Try not to take on everything at once — start with one question or task at a time",
    ],
    learnMore: {
      signs: [
        "The diagnosis or condition is new or still unclear",
        "You are unsure whether the word 'carer' applies to you",
        "The situation feels unfamiliar or hard to plan around",
      ],
      watchFor: "A tendency to deal with things alone without getting information first. Early clarity makes everything that follows easier.",
      whatHelps: "A single conversation with a carer support worker — even at this very early stage — can help you understand what to expect and what support is available.",
    },
    tip: "Many carers in your position feel it is too early to ask for help. It is not. Getting the right information now saves time and stress later.",
    reviewTiming: "Check again in 1 to 2 weeks.",
    bridgitMessage: "If you are unsure where to start, Bridgit can help explain things step by step.",
    help: [
      { label: "Carers Trust Solihull", detail: "for early guidance and carer support", url: HELP_LINKS.CARERS_TRUST_SOLIHULL },
      { label: "NHS Carers Support", detail: "for information about conditions and care options", url: HELP_LINKS.NHS_CARERS },
      { label: "Your GP", detail: "to discuss the diagnosis and register as a carer", url: HELP_LINKS.YOUR_GP },
    ],
  },

  /* ── Stage 2: Getting Your Bearings ──────────────────────── */
  {
    stage: 2,
    title: "Getting Your Bearings",
    meaning: "You are beginning to understand what is happening but may still feel uncertain about what you should be doing. You may be starting to accept the carer role, but it can still feel unfamiliar or a lot to take on at times.",
    action: {
      label: "Request a carer's assessment",
      url: HELP_LINKS.SOLIHULL_ADULT_CARE,
    },
    steps: [
      "Ask for a carer's assessment from your local council — it is free and you are entitled to one",
      "Find out what services and support are available for the person you care for",
      "Tell your GP you are a carer so they can add it to your record",
      "Think about practical basics: medication management, appointments, and emergency contacts",
      "Connect with other carers if you can — you are not alone in this",
    ],
    learnMore: {
      signs: [
        "You are starting to understand what is needed but still figuring it out",
        "The word 'carer' feels unfamiliar or does not quite fit how you see yourself",
        "You are helping but unsure whether you are doing the right things",
      ],
      watchFor: "Taking on too much before support is in place. It is much harder to step back once expectations are set.",
      whatHelps: "Getting a carer's assessment — it is free, you are entitled to it, and it opens practical doors you may not know exist.",
    },
    tip: "You do not need to have everything figured out at once. Focus on understanding the next step, not the whole road ahead.",
    reviewTiming: "Check again in 2 to 4 weeks.",
    bridgitMessage: "If you are unsure where to start, Bridgit can help explain things step by step.",
    help: [
      { label: "Carers Trust Solihull", detail: "for carer support and guidance", url: HELP_LINKS.CARERS_TRUST_SOLIHULL },
      { label: "Solihull Council Adult Social Care", detail: "to request a free carer's assessment", url: HELP_LINKS.SOLIHULL_ADULT_CARE },
      { label: "Your GP", detail: "to register as a carer and access health support", url: HELP_LINKS.YOUR_GP },
    ],
  },

  /* ── Stage 3: Becoming the Carer ─────────────────────────── */
  {
    stage: 3,
    title: "Becoming the Carer",
    meaning: "You are settling into the role but it is taking real effort. Tasks are building up and you may be managing a lot on your own. Your own needs can start to get pushed aside at this stage, and it is worth being aware of that.",
    action: {
      label: "Register as a carer with your GP",
      url: HELP_LINKS.CARERS_TRUST_SOLIHULL,
    },
    steps: [
      "Look into practical support options: respite care, sitting services, or help with tasks",
      "Check whether you or the person you care for is entitled to any benefits or allowances",
      "Make time to think about what you need — not just what the person you care for needs",
      "Talk to your employer if caring is affecting your work — you have legal rights as a carer",
      "Look for a local carer support group or online community to share experiences",
    ],
    learnMore: {
      signs: [
        "You are clearly taking on a caring role, even if it does not always feel like it",
        "Tasks and responsibilities are building up week by week",
        "Your own needs are starting to get pushed aside",
      ],
      watchFor: "Your own health starting to slip. At this stage it is common to focus entirely on the person you care for — but your health matters too.",
      whatHelps: "Connecting with other carers. Hearing that others are in a similar position reduces isolation and helps you think more clearly about your situation.",
    },
    tip: "Carers often wait too long before asking for help. Reaching out early keeps more options open — and it does not mean you are not coping.",
    reviewTiming: "Check again in 4 weeks.",
    bridgitMessage: "Use Bridgit to get help with day to day caring questions.",
    help: [
      { label: "Carers Trust Solihull", detail: "for support groups and practical advice", url: HELP_LINKS.CARERS_TRUST_SOLIHULL },
      { label: "Carer's Allowance (GOV.UK)", detail: "to check if you are entitled to financial support", url: HELP_LINKS.CARERS_ALLOWANCE },
      { label: "Citizens Advice", detail: "for benefits, rights at work, and financial guidance", url: HELP_LINKS.CITIZENS_ADVICE },
    ],
  },

  /* ── Stage 4: Building a Routine ─────────────────────────── */
  {
    stage: 4,
    title: "Building a Routine",
    meaning: "You have a routine in place but it requires constant effort to maintain. You may be managing well day to day, but the longer-term pressure is building. You might be starting to feel the strain personally even if things look organised from the outside.",
    action: {
      label: "Review your care arrangements",
      url: HELP_LINKS.CARERS_TRUST_SOLIHULL,
    },
    steps: [
      "Review what is working and what is not — things change and your approach should too",
      "Make sure you have a break planned, even a short one — it matters more than you think",
      "Check in on your own health — it is easy to ignore your own needs when focused on someone else",
      "Make sure key information is written down somewhere: medication, contacts, care plan",
      "Consider a formal care plan or shared care arrangement if you do not already have one",
    ],
    learnMore: {
      signs: [
        "You have a structure in place, even if it takes effort to maintain",
        "You know what needs doing most of the time",
        "The pressure is from sustained effort rather than uncertainty",
      ],
      watchFor: "Assuming the routine will hold without reviewing it. Caring situations change, and what worked six months ago may need updating.",
      whatHelps: "A regular check-in — with a carer support worker or with yourself — asking what is working and what needs to change.",
    },
    tip: "Routine protects you as much as the person you care for. But routines also need reviewing — what worked six months ago may not be right now.",
    reviewTiming: "Check again in 4 to 6 weeks.",
    bridgitMessage: "Use Bridgit to get help with day to day caring questions.",
    help: [
      { label: "Carers Trust Solihull", detail: "for regular support and care reviews", url: HELP_LINKS.CARERS_TRUST_SOLIHULL },
      { label: "Solihull Council Adult Social Care", detail: "to review or update care arrangements", url: HELP_LINKS.SOLIHULL_ADULT_CARE },
      { label: "Your GP", detail: "for a carer health check and personal wellbeing", url: HELP_LINKS.YOUR_GP },
    ],
  },

  /* ── Stage 5: Keeping Going ───────────────────────────────── */
  {
    stage: 5,
    title: "Keeping Going",
    meaning: "You are managing, but it is hard. The caring role may be feeling relentless and your own wellbeing may be suffering. This is one of the most important stages to get support — before things reach breaking point. Your effort is real and it is being felt.",
    action: {
      label: "Talk to a carer support worker",
      url: HELP_LINKS.CARERS_TRUST_SOLIHULL,
    },
    steps: [
      "Talk to someone about how you are feeling — your GP, a carer support worker, or a trusted person",
      "Ask for an urgent carer's assessment if you have not had a recent review",
      "Explore respite options — short breaks or temporary support for the person you care for",
      "Be honest with yourself about what you can and cannot keep doing at this level",
      "Consider whether the current care arrangement is still sustainable and what needs to change",
    ],
    learnMore: {
      signs: [
        "You are managing but it feels relentless",
        "You feel tired more often than not",
        "Social contact or time for yourself has reduced significantly",
      ],
      watchFor: "Signs of carer burnout: exhaustion, irritability, feeling detached, or a sense that you cannot keep going at this level. These are signals that something needs to change.",
      whatHelps: "Even a short break can make a real difference. Respite care and sitting services exist for exactly this situation — you do not need to justify using them.",
    },
    tip: "Keeping going at all costs is not strength — it is a risk. Getting support now is the most practical thing you can do for both yourself and the person you care for.",
    reviewTiming: "Check again in 1 to 2 weeks.",
    bridgitMessage: "If things feel difficult, you can use Bridgit at any time for guidance.",
    help: [
      { label: "Carers Trust Solihull", detail: "contact urgently for intensive carer support", url: HELP_LINKS.CARERS_TRUST_SOLIHULL },
      { label: "Solihull Connect", detail: "for adult care reviews and emergency support planning", url: HELP_LINKS.SOLIHULL_CONNECT },
      { label: "Your GP", detail: "for urgent personal health support", url: HELP_LINKS.YOUR_GP },
    ],
  },

  /* ── Stage 6: Review, Crisis, or Change ──────────────────── */
  {
    stage: 6,
    title: "Review, Crisis, or Change",
    meaning: "Something significant is happening or about to happen. This could be a health crisis, a major change in the caring situation, or a point where the current arrangement is no longer working. You may be exhausted, isolated, or at a turning point. This stage needs real support, not just information.",
    action: {
      label: "Speak to someone now",
      url: HELP_LINKS.CARERS_TRUST_SOLIHULL,
    },
    steps: [
      "Contact Carers Trust Solihull now — this level of pressure needs professional support",
      "If a crisis has happened or is close, contact Solihull Connect for adult care support",
      "Talk to your GP urgently if your own health is being affected",
      "Do not try to manage a major change or crisis alone — this is what support services are for",
      "Start thinking about what a sustainable plan looks like — the current situation needs to change",
    ],
    learnMore: {
      signs: [
        "Something significant has happened or is about to happen",
        "The current arrangement is no longer working as it was",
        "You may feel isolated, at a loss, or unable to see a way forward",
      ],
      watchFor: "Trying to manage everything alone. At this stage, professional support is not a last resort — it is the right and appropriate response.",
      whatHelps: "Making a single call to Carers Trust Solihull or Solihull Connect. You do not need to explain everything at once — just say you need support and they will guide you from there.",
    },
    tip: "This is not failure — it is the nature of long-term caring. The most important thing right now is to ask for help. That takes courage.",
    reviewTiming: "Seek support now and check again after speaking to someone.",
    bridgitMessage: "If things feel difficult, you can use Bridgit at any time for guidance.",
    help: [
      { label: "Carers Trust Solihull", detail: "contact as a priority — do not wait", url: HELP_LINKS.CARERS_TRUST_SOLIHULL },
      { label: "Solihull Connect", detail: "for adult care emergencies and crisis planning", url: HELP_LINKS.SOLIHULL_CONNECT },
      { label: "Your GP", detail: "urgently, if your own health is at risk", url: HELP_LINKS.YOUR_GP },
      { label: "Emergency services", detail: "if someone is in immediate danger, call 999", url: HELP_LINKS.EMERGENCY_999 },
    ],
  },
];
