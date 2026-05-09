/* ═══════════════════════════════════════════════════════════════
   PROGRESSION GUIDANCE — V2 Stage 7
   "Caring rarely follows a straight line" reassurance section.

   HOW THIS FILE WORKS
   ───────────────────
   PROGRESSION_GUIDANCE has two keys:
     generic  — shown for stages 1–5
     stage6   — shown specifically when stage === 6, with extra
                reassurance that crisis is not a permanent state

   This content is NOT:
     ✗ progression tracking
     ✗ predictive modelling
     ✗ behaviour analysis
     ✗ scoring or assessment

   This content IS:
     ✓ reassurance
     ✓ orientation
     ✓ emotional grounding
     ✓ expectation setting

   Each variant contains:
     title        — short section heading
     intro        — one framing sentence (stage result is a snapshot)
     points       — 4–5 reassurance bullets
     reassurance  — one closing sentence of gentle encouragement

   SAFE LANGUAGE RULES — MUST be followed in all content
   ──────────────────────────────────────────────────────
   ✅  Use:  may, might, can, often, many carers, some carers,
             "you may find", "things can change", "it is normal"
   ❌  Avoid: must, will, guaranteed, inevitable, failure,
              you are expected to, everyone experiences, diagnosis,
              clinical, disorder, risk score, you should always

   This section must:
     ✅ reduce fear and self-judgement
     ✅ normalise movement between stages
     ✅ be calm, brief, and easy to scan
   This section must NOT:
     ❌ imply the tool predicts future stages
     ❌ suggest the carer has failed or fallen back
     ❌ create any sense of progression pressure
════════════════════════════════════════════════════════════════ */

const PROGRESSION_GUIDANCE = {

  /* ── Generic — stages 1–5 ─────────────────────────────────── */
  generic: {
    title: "Caring rarely follows a straight line",
    intro: "Your result today is a snapshot of where things are right now — not a fixed label or a permanent position.",
    points: [
      "Many carers move between stages over time — forward when things ease, and back when things become harder",
      "Support needs often change as the person you care for changes, or as your own circumstances shift",
      "Difficult periods do not reflect on you as a carer — they reflect the weight of what you are managing",
      "Returning to an earlier stage is normal and does not mean you have lost ground",
      "Using this tool again when things change can help you stay connected to the right support",
    ],
    reassurance: "There is no fixed path in caring. Wherever you are today, support is available for that stage.",
  },

  /* ── Stage 6 — significant pressure, extra reassurance ───── */
  stage6: {
    title: "This stage is not a permanent state",
    intro: "Stage 6 reflects a moment of significant pressure — not a fixed identity or a permanent position.",
    points: [
      "Many carers reach this level of pressure and find more stability once the right support comes in",
      "What feels overwhelming now can shift as circumstances change or help arrives",
      "This result is a signal to reach out — not a verdict on you or your caring",
      "People in caring situations often move between stages; difficult moments can and do pass",
      "Using this tool again after speaking to someone may show a very different picture",
    ],
    reassurance: "Getting support now is the most important next step. Things can change — and reaching out is how that starts.",
  },

};
