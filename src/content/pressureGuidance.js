/* ═══════════════════════════════════════════════════════════════
   PRESSURE GUIDANCE — V2 Stage 5
   Content for the "Pressure check" section on the result page.

   HOW THIS FILE WORKS
   ───────────────────
   PRESSURE_GUIDANCE has three keys: 'low', 'moderate', 'high'.
   The level is determined by getPressureLevel() in index.html,
   which maps existing question answers to pressure points.
   This content is not a diagnosis and must never be presented
   as one.

   Each level contains:
     label        — short badge label shown on the card
     intro        — one opening sentence
     signs        — 3–4 bullets (what the carer may be experiencing)
     nextSteps    — 3–4 bullets (practical, non-demanding actions)
     supportPrompt — one closing reassurance sentence

   SAFE LANGUAGE RULES — MUST be followed in all content
   ──────────────────────────────────────────────────────
   ✅  Use:  may, might, can, sometimes, often, some carers,
             "you may find", "it can help to"
   ❌  Avoid: must, will, guaranteed, inevitable, failure,
              burnt out, burnout diagnosis, risk score,
              you should always, you are expected to

   This section must:
     ✅ be calm, practical, and reassuring
     ✅ encourage earlier support
     ✅ keep urgent help clearly visible for high pressure
   This section must NOT:
     ❌ diagnose or label the carer clinically
     ❌ use guilt-based language
     ❌ suggest the carer has failed
════════════════════════════════════════════════════════════════ */

const PRESSURE_GUIDANCE = {

  /* ── Low — things feel pressured but manageable ──────────── */
  low: {
    label: "Steady",
    intro: "Your answers suggest things feel pressured but broadly manageable at the moment.",
    signs: [
      "You are keeping on top of day-to-day responsibilities",
      "You may have difficult days, but you are generally coping",
      "You have some structure or support around you",
    ],
    nextSteps: [
      "Keep checking in with yourself — pressure can build gradually without you noticing",
      "Make note of anything that starts to feel harder than usual",
      "Knowing what support is available before you need it can make a real difference",
    ],
    supportPrompt: "Taking stock of how you are doing is a healthy step. The support directory lists services available to carers at any stage.",
  },

  /* ── Moderate — caring is taking more out of you than usual ─ */
  moderate: {
    label: "Some pressure",
    intro: "Your answers suggest caring may be taking more out of you than usual.",
    signs: [
      "You may be feeling more tired or stretched than you realise",
      "Some days feel harder to manage or stay on top of",
      "You may be carrying more than you are letting on — to others or yourself",
      "Things may feel less organised than you would like",
    ],
    nextSteps: [
      "Try to identify one thing that would feel lighter with some support",
      "Let your GP know about your caring role — it can open up options you may not be aware of",
      "Reaching out to a local carer support service — even just to talk — can help",
      "Accepting support now can prevent things from becoming harder later on",
    ],
    supportPrompt: "You do not have to manage this alone. Speaking to a carer support service is a practical step — not a sign of weakness.",
  },

  /* ── High — significant pressure, gentle encouragement ──── */
  high: {
    label: "High pressure",
    intro: "Your answers suggest you may be under a lot of pressure at the moment. You do not need to manage this alone.",
    signs: [
      "You may be feeling exhausted or close to your limit",
      "Things may feel hard to organise or keep on top of",
      "You may have little support around you right now",
      "The weight of caring may be affecting your own health or wellbeing",
    ],
    nextSteps: [
      "Please speak to someone — your GP is a good first contact and can refer you to further support",
      "Contact a carer support service — they are familiar with situations like this and can help",
      "If you or anyone else is in immediate danger, call 999",
      "Consider whether anyone else could share some responsibilities, even temporarily",
    ],
    supportPrompt: "Please do not wait for things to reach a crisis point. Support is available now, and reaching out is the right move.",
  },

};
