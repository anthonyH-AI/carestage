/* ═══════════════════════════════════════════════════════════════
   HELP LINK URLS
   Edit URLs here to update them across all stages.
   Set to null for services without a web link (e.g. 999, your GP).

   Future multi-language support:
     - Create helpLinks-cy.js (Welsh) etc. and load based on locale.
════════════════════════════════════════════════════════════════ */

const HELP_LINKS = {
  CARERS_TRUST_SOLIHULL: "https://solihullcarers.org",
  SOLIHULL_CONNECT:      "https://www.solihull.gov.uk/adult-social-care/solihull-connect",
  SOLIHULL_ADULT_CARE:   "https://www.solihull.gov.uk/adult-social-care",
  CARERS_ALLOWANCE:      "https://www.gov.uk/carers-allowance",
  NHS_CARERS:            "https://www.nhs.uk/conditions/social-care-and-support-guide/support-and-benefits-for-carers/",
  CITIZENS_ADVICE:       "https://www.citizensadvice.org.uk/",
  YOUR_GP:               null,  // no web link — contact directly
  EMERGENCY_999:         null,  // 999 — no web link

  // ── Bridgit Care AI (Stage 14) ────────────────────────────
  // 24/7 digital support for carers. To update the link, change
  // the URL below — it is used across stage results, the urgent
  // help screen, and the support directory.
  BRIDGIT_CARE: "https://carers.bridgit.care/app/ctsol/web",
};
