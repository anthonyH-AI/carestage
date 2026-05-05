/* ═══════════════════════════════════════════════════════════════
   BRANDING CONFIG
   Edit this file to customise the app for a different charity
   or service. Keep charity contact details here — do not hard-
   code them in content files or HTML.

   Future multi-language support:
     - Keep this file in English.
     - For Welsh, Urdu, Punjabi, Polish etc., create a sibling
       file (e.g. branding-cy.js) and load it based on the user's
       language preference.
════════════════════════════════════════════════════════════════ */

const BRANDING = {

  /* ── Identity ─────────────────────────────────────────────── */
  charityName:      "Carers Trust Solihull",
  organisationName: "Carers Trust Solihull",  // used in partner exports and PDF footer
  serviceName:      "Male Carer Stage Checker",
  logoPath:         null,   // set to e.g. "assets/logo.svg" if a logo is available

  /* ── Partner / local authority context ───────────────────── */
  localAuthorityName: "Solihull Metropolitan Borough Council",
  // directoryOverride: replace ALL resources with a partner-specific list.
  // Set to an array of resource objects (same shape as src/content/resources.js)
  // to swap out the default Solihull directory for a different area.
  directoryOverride: null,

  /* ── Theme colours (CSS hex values) ──────────────────────── */
  primaryColour:   "#0f766e",   // teal — buttons, links, labels
  secondaryColour: "#134e4a",   // dark teal — headings, accents

  /* ── Contact — add when confirmed with the charity ───────── */
  supportEmail: null,           // e.g. "support@solihullcarers.org"
  supportPhone: null,           // e.g. "0121 704 8007"
  websiteUrl:   "https://solihullcarers.org",

  /* ── Feedback ─────────────────────────────────────────────── */
  // feedbackUrl: a mailto: link or external form (e.g. Google Forms, Typeform).
  // Set to null to hide the "Give feedback" link entirely.
  feedbackUrl: null,            // e.g. "mailto:info@solihullcarers.org?subject=Stage%20Checker%20Feedback"

  /* ── Location note — shown on result and directory pages ─── */
  locationNote:
    "Some of these services are specific to Solihull. If you are outside " +
    "Solihull, ask your local council for equivalent services.",

  /* ── Safeguarding notes ───────────────────────────────────── */
  safeguardingNote:
    "This tool is for information and guidance only. It does not replace " +
    "emergency services. If someone is in immediate danger, call 999.",

  safeguardingReminder:
    "If you are worried about someone's safety, contact local safeguarding " +
    "services or call 999 if there is immediate danger.",

  // emergencyContactText: overrides the "call 999" text in the safety notice
  // on the landing screen. Change for non-UK deployments (e.g. "call 999" → "call 911").
  emergencyContactText: null,   // null = use default "call 999"

  /* ── Organisation mode ────────────────────────────────────── */
  // organisationType affects wording on the about page and PDF footer
  //   'charity' | 'council' | 'NHS' | 'other'
  organisationType: "charity",

  showLocalSupportFirst: true,

  // enableConversationMode: set to false to hide the "Use with someone" toggle
  enableConversationMode: true,

  /* ── Launch mode ──────────────────────────────────────────── */
  // 'soft'   → shows a testing banner on the landing screen
  // 'public' → no banner; production mode
  launchMode: "public",

  /* ── Content status (Stage 13) ───────────────────────────── */
  // Controls the content-review banner on the landing screen.
  //   'draft'    → content in progress; amber banner shown
  //   'review'   → under review before launch; amber banner shown
  //   'approved' → signed off; banner hidden
  // Change to 'approved' once senior sign-off is recorded externally.
  contentStatus: "approved",

  /* ── Version ──────────────────────────────────────────────── */
  version:     "1.0",
  lastUpdated: "May 2026",

  /* ── Content governance (Stage 12) ───────────────────────── */
  // contentVersion: incremented when any stage content, links, or wording is changed.
  // Used in footer and impact reports for audit traceability.
  contentVersion: "1.0",

  // contentLastReviewed: ISO date (YYYY-MM-DD) of most recent full content review.
  // Combined with reviewCycleMonths to trigger the stale-content banner.
  contentLastReviewed: "2026-05-01",

  // reviewCycleMonths: how often a full content review is expected.
  // If today is more than this many months after contentLastReviewed, a notice is shown.
  reviewCycleMonths: 6,

  // reviewBannerMode: controls who sees the stale-content review banner.
  //   'always'   → shown to all users when content is overdue
  //   'internal' → shown only after Insights auth (sessionStorage flag is set)
  reviewBannerMode: "internal",

  /* ── A/B message testing (Stage 15) ──────────────────────── */
  // abTestVariant: null = off | 'b' = show alternate tip on result page
  // When 'b', abTestTip replaces the stage's default tip text.
  // Compare overall usage between deployments using the Insights page.
  // Do NOT track users individually.
  abTestVariant: null,
  abTestTip:     null,   // e.g. "One step at a time — that is enough for now."
};
