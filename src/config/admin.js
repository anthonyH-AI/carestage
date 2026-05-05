/* ═══════════════════════════════════════════════════════════════
   ADMIN CONFIG
   Internal access control settings.

   insightsPassphrase — the code required to access the Insights
     screen at /?mode=insights. Change before deployment and do
     not share publicly. This is lightweight access control only —
     it is not a substitute for authentication on sensitive data.
     Insights data is anonymous and device-only, so exposure risk
     is low.

   To change the passphrase:
     1. Update the value below.
     2. Bump CACHE_VERSION in sw.js.
     3. Redeploy.
════════════════════════════════════════════════════════════════ */

const ADMIN_CONFIG = {
  insightsPassphrase: "cts-insights",
};
