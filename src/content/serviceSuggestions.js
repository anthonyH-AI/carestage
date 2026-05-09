/* ═══════════════════════════════════════════════════════════════
   SERVICE SUGGESTIONS — V2 Stage 8
   "Support that may fit your situation" section on the result page.

   HOW THIS FILE WORKS
   ───────────────────
   SERVICE_SUGGESTIONS is keyed by condition id (from conditions.js).
   The section is hidden entirely when no condition was selected.

   This content IS:
     ✓ gentle signposting
     ✓ support discovery
     ✓ orientation toward relevant national services
     ✓ encouragement to seek support earlier

   This content is NOT:
     ✗ diagnosis or triage
     ✗ referral matching or eligibility checking
     ✗ a replacement for the main support directory
     ✗ a guarantee that services are available or suitable

   Each condition entry contains:
     title        — short section heading (condition-specific)
     intro        — one sentence framing (soft, non-assuming)
     suggestions  — array of 2–3 service objects

   Each service object contains:
     name         — service name
     type         — brief descriptor (e.g. "National charity")
     why          — one sentence: why relevant for this condition/carer
     url          — website URL (optional)
     phone        — phone number string (optional)
     phoneLabel   — label for the phone number (optional)

   SAFE LANGUAGE RULES — MUST be followed in all content
   ──────────────────────────────────────────────────────
   ✅  Use:  may, might, can, could, some carers,
             "you may find", "it may help to", "worth knowing about"
   ❌  Avoid: you need, you must, you should, guaranteed, will,
              you are required to, this service will fix, diagnosis,
              you have been referred

   This section must:
     ✅ remain fully optional and hidden when no condition is set
     ✅ not imply the condition is confirmed or diagnosed
     ✅ not imply services are compulsory
     ✅ not remove or replace the main support directory
   This section must NOT:
     ❌ suggest the carer has failed to find these services already
     ❌ imply these are the only relevant services
     ❌ create a sense of urgency that overrides carer autonomy
════════════════════════════════════════════════════════════════ */

const SERVICE_SUGGESTIONS = {

  /* ── Dementia or memory problems ─────────────────────────── */
  dementia: {
    title: "Support for dementia and memory conditions",
    intro: "A few organisations that specialise in supporting carers of someone with dementia or memory difficulties.",
    suggestions: [
      {
        name: "Alzheimer's Society",
        type: "National charity",
        why: "Offers specialist information, local support groups, and the Dementia Connect helpline for carers at any stage.",
        url: "https://www.alzheimers.org.uk",
        phone: "0333 150 3456",
        phoneLabel: "Dementia Connect helpline",
      },
      {
        name: "Dementia UK — Admiral Nurses",
        type: "Specialist nursing support",
        why: "Admiral Nurses are specialist dementia nurses who provide free, practical support and guidance directly to families and carers.",
        url: "https://www.dementiauk.org",
        phone: "0800 888 6678",
        phoneLabel: "Admiral Nurse helpline (free)",
      },
      {
        name: "Carers UK",
        type: "National carer charity",
        why: "Provides advice, emotional support, and practical information for anyone caring for a family member or friend.",
        url: "https://www.carersuk.org",
        phone: "0808 808 7777",
        phoneLabel: "Helpline (free)",
      },
    ],
  },

  /* ── Physical health condition ────────────────────────────── */
  physical: {
    title: "Support for physical health conditions",
    intro: "Some organisations that may be useful when caring for someone with a physical health condition or disability.",
    suggestions: [
      {
        name: "Carers UK",
        type: "National carer charity",
        why: "Provides guidance on managing a caring role, understanding your rights, and finding local support.",
        url: "https://www.carersuk.org",
        phone: "0808 808 7777",
        phoneLabel: "Helpline (free)",
      },
      {
        name: "Disabled Living Foundation — Living Made Easy",
        type: "Equipment and adaptations advice",
        why: "Provides free, impartial advice on equipment, adaptations, and daily living aids that may help the person you care for.",
        url: "https://www.livingmadeeasy.org.uk",
      },
      {
        name: "NHS — Carer's assessment",
        type: "Statutory assessment",
        why: "A carer's assessment from your local council can identify practical support, respite, and services you may be entitled to.",
        url: "https://www.nhs.uk/conditions/social-care-and-support-guide/support-and-benefits-for-carers/carer-assessments/",
      },
    ],
  },

  /* ── Mental health condition ──────────────────────────────── */
  "mental-health": {
    title: "Support for mental health caring roles",
    intro: "Caring for someone with a mental health condition brings its own challenges — these organisations understand that.",
    suggestions: [
      {
        name: "Rethink Mental Illness",
        type: "National charity",
        why: "Offers specialist advice, carer support groups, and a helpline for anyone supporting a person with a mental illness.",
        url: "https://www.rethink.org",
        phone: "0808 801 0525",
        phoneLabel: "Advice and information helpline (free)",
      },
      {
        name: "Mind",
        type: "National mental health charity",
        why: "Provides information and support for anyone affected by a mental health problem, including carers.",
        url: "https://www.mind.org.uk",
        phone: "0300 123 3393",
        phoneLabel: "Mind infoline",
      },
      {
        name: "Carers UK",
        type: "National carer charity",
        why: "Can help you understand your rights as a carer and connect you with local support in your area.",
        url: "https://www.carersuk.org",
        phone: "0808 808 7777",
        phoneLabel: "Helpline (free)",
      },
    ],
  },

  /* ── Neurological condition ────────────────────────────────── */
  neurological: {
    title: "Support for neurological conditions",
    intro: "Neurological conditions vary widely — these organisations cover some of the most common and can point you further if needed.",
    suggestions: [
      {
        name: "Headway — The Brain Injury Association",
        type: "National charity",
        why: "Supports carers of people affected by brain injury, stroke, or other acquired neurological conditions.",
        url: "https://www.headway.org.uk",
        phone: "0808 800 2244",
        phoneLabel: "Helpline (free)",
      },
      {
        name: "MS Society",
        type: "National charity",
        why: "Provides information, local support groups, and a helpline for carers of people living with multiple sclerosis.",
        url: "https://www.mssociety.org.uk",
        phone: "0808 800 8000",
        phoneLabel: "MS helpline (free)",
      },
      {
        name: "Parkinson's UK",
        type: "National charity",
        why: "Offers a helpline, local groups, and specialist advice for carers supporting someone with Parkinson's disease.",
        url: "https://www.parkinsons.org.uk",
        phone: "0808 800 0303",
        phoneLabel: "Helpline (free)",
      },
    ],
  },

  /* ── Learning disability or autism ────────────────────────── */
  "learning-disability": {
    title: "Support for learning disabilities and autism",
    intro: "These organisations work specifically with carers and families supporting someone with a learning disability or autism.",
    suggestions: [
      {
        name: "Mencap",
        type: "National charity",
        why: "Provides advice, information, and support for families and carers of people with a learning disability.",
        url: "https://www.mencap.org.uk",
        phone: "0808 808 1111",
        phoneLabel: "Helpline (free)",
      },
      {
        name: "National Autistic Society",
        type: "National charity",
        why: "Offers a helpline and specialist information for carers and families of autistic people of all ages.",
        url: "https://www.autism.org.uk",
        phone: "0808 800 4104",
        phoneLabel: "Autism helpline (free)",
      },
      {
        name: "Foundation for People with Learning Disabilities",
        type: "Research and support",
        why: "Provides resources and guidance for carers supporting people with learning disabilities, including mental health needs.",
        url: "https://www.mentalhealth.org.uk/learning-disabilities",
      },
    ],
  },

  /* ── Frailty or ageing ─────────────────────────────────────── */
  frailty: {
    title: "Support for frailty and ageing",
    intro: "These organisations may be helpful when caring for someone whose needs are increasing as they age.",
    suggestions: [
      {
        name: "Age UK",
        type: "National charity",
        why: "Offers information, advice, and local services for older people and those who care for them.",
        url: "https://www.ageuk.org.uk",
        phone: "0800 678 1602",
        phoneLabel: "Advice line (free, 8am–7pm)",
      },
      {
        name: "Independent Age",
        type: "National charity",
        why: "Provides free, practical advice on care, housing, and money for older people and their carers.",
        url: "https://www.independentage.org",
        phone: "0800 319 6789",
        phoneLabel: "Helpline (free)",
      },
      {
        name: "Carers UK",
        type: "National carer charity",
        why: "Can help you understand what support is available and how to access a carer's assessment from your local council.",
        url: "https://www.carersuk.org",
        phone: "0808 808 7777",
        phoneLabel: "Helpline (free)",
      },
    ],
  },

  /* ── Not sure ─────────────────────────────────────────────── */
  "not-sure": {
    title: "Support when you are not sure where to start",
    intro: "If the nature of the situation is still uncertain, these organisations can help you find the right direction.",
    suggestions: [
      {
        name: "Carers UK",
        type: "National carer charity",
        why: "Whatever your situation, the Carers UK helpline can help you understand your options and point you toward the right support.",
        url: "https://www.carersuk.org",
        phone: "0808 808 7777",
        phoneLabel: "Helpline (free)",
      },
      {
        name: "Your GP",
        type: "First point of contact",
        why: "Your GP can help identify what is happening with the person you care for, and can refer you both to appropriate services.",
      },
      {
        name: "NHS — Find a carer support service",
        type: "NHS guidance",
        why: "The NHS has a practical guide to finding local carer support, including carer assessments and respite options.",
        url: "https://www.nhs.uk/conditions/social-care-and-support-guide/support-and-benefits-for-carers/",
      },
    ],
  },

  /* ── Other ────────────────────────────────────────────────── */
  other: {
    title: "Support for carers in less common situations",
    intro: "When the situation does not fit a single category, general carer support services are often the most helpful starting point.",
    suggestions: [
      {
        name: "Carers UK",
        type: "National carer charity",
        why: "Supports carers in all kinds of situations — their helpline can help you find relevant services regardless of condition.",
        url: "https://www.carersuk.org",
        phone: "0808 808 7777",
        phoneLabel: "Helpline (free)",
      },
      {
        name: "Carers Trust",
        type: "National charity network",
        why: "Works with a UK-wide network of local carer support organisations — useful for finding help in your local area.",
        url: "https://carers.org",
      },
      {
        name: "NHS — Carer's assessment",
        type: "Statutory assessment",
        why: "A carer's assessment can identify practical support and services available to you, regardless of what condition is involved.",
        url: "https://www.nhs.uk/conditions/social-care-and-support-guide/support-and-benefits-for-carers/carer-assessments/",
      },
    ],
  },

};
