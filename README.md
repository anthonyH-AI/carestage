# CareStage

A mobile-first web tool for a UK charity supporting unpaid male carers. Helps men understand where they are in their caring journey through a short 7-question check, then maps them to one of 6 support stages.

**Single file. No build tools. No accounts. No database.**
Open `index.html` in any browser, or upload to any web host.

---

## Stage 3 features

### Clickable help links
Every "Where to get help" entry is now a live link. URLs are defined in one place at the top of the script — `HELP_LINKS` — so they can all be updated without touching any other code.

### Copy my result
A "Copy my result" button appears at the bottom of every result page. It copies a plain-text summary (stage, meaning, steps, tip, help URLs) to the clipboard. Falls back to `execCommand` for HTTP or older browsers.

### Share (Web Share API)
A "Share" button appears on devices where the browser supports the Web Share API (most modern mobile browsers). On unsupported browsers it is hidden automatically. No fallback prompt — it either works or is not shown.

### Print view
A `@media print` stylesheet hides all navigation and buttons, expands the "Learn more" section, appends full URLs after each help link, and adds a print header with the app title and completion date. Works with Ctrl+P or the Print button on the result page.

### Stage history (localStorage)
On completing a check, the result is saved to `localStorage` under the key `mcsc_last_result`. The data saved is:
- Date completed (ISO string)
- Stage number
- Stage title
- Whether the urgent support screen was shown

**No personal information is saved.** No names, contacts, medical details, or free text.

On the next visit, the result page shows: _"Last time you completed this, your result was Stage X: Title on Date."_ If the stage has moved up or down, a brief comparison message is shown.

### Main action button
Each stage result now has one prominent teal button as a primary call to action. Labels and URLs are part of the stage content in `STAGE_RESULTS` and are easy to update.

### Learn more
Each result has a collapsed "Learn more about this stage" section using the native `<details>` / `<summary>` HTML elements. It expands inline to show:
- Common signs you are at this stage
- What to watch for
- What might help next

### Calm support banner
If any of these answers are given, a soft amber banner appears on the result page (separate from the urgent support screen):
- "I feel overwhelmed"
- "I am exhausted or close to burnout"
- "I need urgent help" (Q5)
- "Not sure" or "Yes, I am concerned" (Q7 — risk)

The banner says: _"You may benefit from speaking to someone. You do not need to manage this alone."_

### Privacy-first analytics
A `logEvent()` function logs anonymous events to the browser console only. No external service is connected. Events logged:
- `check_started`
- `check_completed` (includes stage number and score — no personal data)
- `urgent_support_shown`
- `result_copied`
- `result_shared`
- `result_printed`
- `action_clicked` (main CTA button)

### Accessibility improvements
- Visible focus ring on all interactive elements (`:focus-visible`)
- `aria-live` on progress text, copy success message, and history banner
- `role="alert"` on urgent banner
- Focus moved to new screen on navigation (`showScreen` sets `tabindex="-1"` and calls `focus()`)
- All buttons have minimum 44px touch target height
- Answer buttons use `role="radio"` and `aria-checked`

---

## How to edit content

### Help link URLs
Find `const HELP_LINKS` near the top of the `<script>` block. Each key maps to a URL string (or `null` for services with no web link like 999). Changing a URL here updates it everywhere it appears.

```js
const HELP_LINKS = {
  CARERS_TRUST_SOLIHULL: "https://carerstrustsolihull.org.uk",  // verify this URL
  SOLIHULL_CONNECT:      "https://www.solihull.gov.uk/adult-social-care/solihull-connect",
  ...
};
```

### Stage content (titles, steps, tips, learn more, action buttons)
Find `const STAGE_RESULTS` in the `<script>` block. It is an array of 6 objects, one per stage. Each object contains:
- `title` — stage name
- `meaning` — paragraph shown under "What this means"
- `action` — `{ label, url }` for the main CTA button
- `steps` — array of 5 next-step strings
- `learnMore` — `{ signs[], watchFor, whatHelps }` for the expandable section
- `tip` — italic tip text
- `help` — array of `{ label, detail, url }` objects

### Scoring
Find `const SCORING_MAP` — one object per question, answers mapped to point values.
Find `const SCORE_BANDS` — minimum scores for each of the 6 stages.
Find `const SAFETY_TRIGGERS` — answers that route to the urgent screen first.
Find `const SUPPORT_BANNER_TRIGGERS` — answers that show the calm banner on the result page.

### Questions
Find `const QUESTIONS` — edit question text and answer options here. Keep answer text identical in both `QUESTIONS` and `SCORING_MAP` (they must match exactly).

---

## Stage 5 features

### Personal action plan — "Your next 7 days"
A new section on the result page shows 3–5 stage-specific suggested actions. Each action has a title, short explanation, suggested timescale, and a checkbox to mark it complete. The section includes:

- **Progress indicator** — "0 of 4 actions completed" text and a thin progress bar, updated in real time as checkboxes are ticked
- **Completion message** — when all actions are ticked, a calm message appears: *"You have completed your suggested next steps. It may help to check your stage again in a few weeks, or sooner if anything changes."*
- **Copy action plan** — copies a plain-text version (stage title, actions with tick/untick status, help links, date, disclaimer) to the clipboard
- **Reset action plan** — clears all completions after a confirmation prompt; the button is hidden until at least one action is ticked
- **Print support** — the action plan section is included in the print view with completion state visible; copy and reset buttons are hidden

### Editable action plans file (`action-plans.js`)
All action plan content lives in `action-plans.js`. Edit it to update any action without touching `index.html`. Each action has:

```js
{
  id: 's3-a1',          // unique — do not change once deployed (stored in localStorage)
  stage: 3,
  title: 'Register as a carer with your GP',
  description: '...',
  timescale: 'This week',
  priority: 1,          // display order within the stage
}
```

**Important:** Do not change action `id` values once the tool is deployed. IDs are stored in localStorage to track completion — changing an ID will un-check that action for returning users.

### localStorage — action plan completions
Stored under key `mcsc_action_plan`. Contains only:
- Stage number
- Action ID
- Completed: true or false
- Date completed (ISO string)

**No names, addresses, medical details, notes, or free text are stored.**

When the user retakes the check and gets the same stage, their previous completions are restored. If the stage changes, a fresh plan is shown.

---

## Running locally

No npm or build tools needed. Open `index.html` directly in a browser, or:

```bash
python3 -m http.server 3456 --directory male-carer-stage-checker
```

Then visit `http://localhost:3456`.

---

## Stage 4 features

### Support directory page
A new "Support Directory" screen (`screen-directory`) lists all support services with search and filter. Access it from the landing page link or the "View all support" link on any result page.

- **Search** — full-text search across name and description
- **Category filter** — chips for each of the 7 categories (Carers support, Adult social care, Financial support, Health and wellbeing, Emergency and urgent help, Work and employment rights, Young carers and parent carers)
- **Urgent help filter** — checkbox to show only urgent and emergency services
- Phone numbers are `tel:` links — tap to dial on mobile

### Editable resources file (`resources.js`)
All directory content lives in `resources.js` — a separate file loaded before the main script. Edit it to update the directory without touching `index.html`. Each resource has:

```js
{
  id: 'carers-trust-solihull',   // unique ID (no spaces)
  name: 'Carers Trust Solihull',
  category: 'carers-support',    // must match a CATEGORIES id
  description: '...',
  url: 'https://...',            // or null
  phone: '0121 000 0000',        // or null — shown as tel: link
  appliesToStages: [1, 2, 3, 4, 5, 6],
  urgencyLevel: 'standard',      // 'standard', 'urgent', or 'emergency'
}
```

Also in `resources.js`:
- `CATEGORIES` — the 7 category definitions (id + label)
- `STAGE_RECOMMENDATIONS` — maps each stage number to 2–3 resource IDs shown on the result page

### Persistent "I need help now" button
A red fixed bar appears at the bottom of the landing, result, and directory screens. Tapping it goes to the dedicated urgent help screen. It is hidden during the question flow and on the urgent screens themselves.

### Urgent help screen (`screen-urgent-help`)
A dedicated page reachable from the "I need help now" bar at any time. Shows:
- A prominent banner: "If someone is in immediate danger — call 999 now"
- All urgent and emergency resources from `resources.js` (emergency first)
- A "Prepare before you call" expandable section with practical tips

### Stage-recommended resources on result page
Below the 5 next steps and before the "Where to get help" section, the result page now shows 2–3 resources recommended for the user's specific stage, pulled from `STAGE_RECOMMENDATIONS` in `resources.js`.

### Location note and safeguarding wording
- A grey note on result and directory pages: "Some services are specific to Solihull…"
- A red note on result and directory pages: "This tool is for information and guidance only. It does not replace emergency services. If someone is in immediate danger, call 999."

### Two new `logEvent()` events
- `directory_opened`
- `urgent_help_opened`

---

## How to edit resources

Open `resources.js` — it is the only file to edit for directory content. Key things to update before deployment:

1. **Phone numbers** — verify all numbers marked `// verify before deployment`
2. **Carers Trust Solihull phone** — add when confirmed with the charity
3. **URLs** — check all links are current and correct
4. **`STAGE_RECOMMENDATIONS`** — adjust which resources appear per stage as needed

---

## Stage 6 features

### Check-in again

A "Check in again" button on the result page restarts the 7-question check. Previous results stay in localStorage. When the check is completed again, the result page shows a before-and-after comparison.

### Review comparison banner

If the user has a previous result, the top of the result page shows:

> **Last time, your result was:** Stage X: Title
> **This time, your result is:** Stage Y: Title

Followed by one of three change messages:

- **Stage increased:** "Your answers suggest things may be getting harder. It may be a good time to review your support."
- **Stage the same:** "Your answers suggest things are at a similar stage. Keep reviewing what is working and what needs support."
- **Stage decreased:** "Your answers suggest things may feel more manageable than last time. Keep your support in place and review regularly."

### Check-in history timeline

The last 5 completed check-ins are stored and shown as a mobile-friendly timeline on the result page (visible from the second check-in onwards). Each entry shows:

- Date completed
- Stage number and title
- Whether urgent support was shown (amber badge if yes)

The timeline is also visible in print view.

### Suggested review timing

Each stage result now includes a suggested review interval, shown below the main action button:

| Stage | Suggested review |
|---|---|
| Stage 1 | Check again in 1 to 2 weeks. |
| Stage 2 | Check again in 2 to 4 weeks. |
| Stage 3 | Check again in 4 weeks. |
| Stage 4 | Check again in 4 to 6 weeks. |
| Stage 5 | Check again in 1 to 2 weeks. |
| Stage 6 | Seek support now and check again after speaking to someone. |

This text is stored in the `reviewTiming` field of each `STAGE_RESULTS` entry.

### Local reminder banner

After completing a check, the user can choose when to be reminded to check in again:

- Remind me in 1 week
- Remind me in 2 weeks
- Remind me in 4 weeks
- No reminder

The chosen date is stored in `localStorage` under `mcsc_reminder`. No notification is sent. On the next visit after the chosen date, a banner appears at the top of the landing screen:

> **It may be time to check in again.**
> Your caring situation can change. A short check-in may help you understand what support you need now.

Two buttons: **Start check-in** (starts the check and clears the reminder) and **Dismiss** (hides the banner without clearing the reminder).

### Your data & privacy

A section at the bottom of the result page explains what is stored and gives three data controls:

> **Your data & privacy**
> This app stores your stage history on this device only. It does not store your name, contact details, medical information, or answers to individual questions.

Buttons (each asks for confirmation before acting):
- **Clear check-in history** — removes `mcsc_history` and hides the timeline and comparison banner
- **Clear action plan progress** — removes `mcsc_action_plan` and resets all action plan checkboxes
- **Clear all saved data** — removes all four localStorage keys

### Updated copy output

The "Copy my result" button now includes in the plain-text output:

- Current stage number and title
- Suggested review timing
- Your next 7 days action plan (with completion status for each item)
- Help links
- A disclaimer: "This result is for information and guidance only. It does not replace professional advice."

Print output (via browser print) includes the same, minus the data-clearing controls and reminder buttons.

---

## What is stored in localStorage

| Key | Contents | Max size |
|---|---|---|
| `mcsc_last_result` | Most recent result: date, stage number, stage title, urgentShown | Single object |
| `mcsc_history` | Last 5 check-ins: date, stage number, stage title, urgentShown | Array of 5 |
| `mcsc_action_plan` | Stage number + completion state per action ID (true/false + date) | Per-stage object |
| `mcsc_reminder` | Chosen reminder date (ISO string) + interval days | Single object or null |

**Nothing personal is stored.** No names, contact details, answers to individual questions, medical information, or free text of any kind.

---

## How to clear saved data

Users can clear their data from the "Your data & privacy" section on the result page. Developers can clear it from the browser DevTools console:

```js
localStorage.removeItem('mcsc_last_result');
localStorage.removeItem('mcsc_history');
localStorage.removeItem('mcsc_action_plan');
localStorage.removeItem('mcsc_reminder');
```

Or clear all at once:

```js
['mcsc_last_result', 'mcsc_history', 'mcsc_action_plan', 'mcsc_reminder']
  .forEach(k => localStorage.removeItem(k));
```

---

## Stage 7 features

### Editable content files

All user-facing content has been moved out of `index.html` into separate files in `src/`. A non-developer can now update questions, stage descriptions, support links, or branding without touching any application code.

| File | What to edit |
|---|---|
| `src/config/branding.js` | Charity name, colours, contact details, location note, safeguarding note |
| `src/content/helpLinks.js` | All external URLs used by stage results |
| `src/content/questions.js` | Question text, answer options, scoring, safety triggers |
| `src/content/stageResults.js` | All stage content: titles, meanings, steps, tips, help links |
| `src/content/resources.js` | Support directory: services, categories, stage recommendations |
| `src/content/actionPlans.js` | Action plan content for all 6 stages |

The original `resources.js` and `action-plans.js` at the root are superseded by the `src/content/` versions. The `<script>` tags in `index.html` now load from `src/`.

### Charity branding config (`src/config/branding.js`)

Edit this file to adapt the tool for a different charity:

```js
const BRANDING = {
  charityName:     "Carers Trust Solihull",
  serviceName:     "Male Carer Stage Checker",
  logoPath:        null,             // e.g. "assets/logo.svg"
  primaryColour:   "#0f766e",        // buttons, links, labels
  secondaryColour: "#134e4a",        // headings, accents
  supportEmail:    null,
  supportPhone:    null,
  websiteUrl:      "https://carerstrustsolihull.org.uk",
  locationNote:    "Some of these services are specific to Solihull...",
  safeguardingNote: "This tool is for information and guidance only...",
};
```

`applyBranding()` runs on page load and updates the page title, location notes, and safeguarding notes from this config.

### Offline support (Service Worker)

`sw.js` caches the app shell using a cache-first strategy. After the first visit the tool works with no internet connection — useful for carers in low-connectivity areas.

To force users to get a fresh cache after a content update, bump `CACHE_VERSION` in `sw.js`:

```js
const CACHE_VERSION = 'mcsc-v2';  // was mcsc-v1
```

### Print to PDF

The `@page` rule sets A4 portrait with 18mm margins for clean PDF export via the browser's built-in "Save as PDF". Print body text is set to 11pt for readable output. Interactive controls (reminder picker, privacy buttons) are hidden; the timeline and review timing are always shown.

### Accessibility improvements

- **Skip navigation** — a visually hidden "Skip to main content" link appears at the top of the page for keyboard users
- **Color contrast** — muted text colour updated from `#94a3b8` (2.8:1 contrast ratio, fails WCAG AA) to `#64748b` (4.6:1, passes WCAG AA) across all 18 instances

### Multi-language support (placeholder)

File-level comments in each `src/content/` and `src/config/` file explain the naming convention for future translated files (e.g. `questions-cy.js` for Welsh). Scoring values and IDs are language-neutral and do not need separate files.

### Analytics integration (placeholder)

`logEvent()` in `index.html` logs to the browser console only. A comment at the service worker registration block marks where to connect a real analytics provider (e.g. Plausible, Fathom) once agreed with the charity.

---

## Project structure

```
male-carer-stage-checker/
├── index.html            ← app shell: HTML, CSS, and all JS logic
├── sw.js                 ← service worker for offline support (Stage 7)
├── resources.js          ← legacy root file (superseded by src/content/)
├── action-plans.js       ← legacy root file (superseded by src/content/)
├── README.md
├── src/
│   ├── config/
│   │   └── branding.js   ← charity name, colours, contact details
│   └── content/
│       ├── helpLinks.js  ← all external URLs
│       ├── questions.js  ← questions, scoring, safety triggers
│       ├── stageResults.js ← all 6 stage content objects
│       ├── resources.js  ← support directory data
│       └── actionPlans.js ← action plan data for all 6 stages
└── .claude/
    └── launch.json       ← dev server config (Python http.server)
```

Script loading order in `index.html` (dependencies must load first):

1. `src/config/branding.js` — no dependencies
2. `src/content/helpLinks.js` — no dependencies
3. `src/content/questions.js` — no dependencies
4. `src/content/stageResults.js` — requires `HELP_LINKS`
5. `src/content/resources.js` — no dependencies
6. `src/content/actionPlans.js` — no dependencies
7. `index.html` inline `<script>` — requires all of the above

---

## Stage 8 features

### Use with someone mode

A toggle on the landing screen — **Use this with someone** — enables conversation mode. When on:
- An intro appears: _"This tool can be used together with a carer to guide a conversation."_
- A banner appears at the top of the result page prompting guided use
- A footer appears on the result page: _"This result can support a conversation but does not replace professional advice."_
- The conversation prompts section (always present, collapsed by default) becomes contextually relevant

To disable the toggle for self-serve deployments, set `enableConversationMode: false` in `src/config/branding.js`.

### Guided conversation prompts

A collapsible **Conversation prompts** section appears on every result page. It contains 5 short prompts to guide a discussion:

- Does this stage feel right to you?
- What feels hardest right now?
- What support would help most this week?
- What is one thing we could change today?
- Has anything changed since we last spoke?

These are generic prompts suitable for any stage. They are collapsed by default so they do not add clutter for self-service users.

### Download my summary (print to PDF)

A **Download my summary** button in the share row triggers the browser's print/save-as-PDF flow. The PDF includes stage result, meaning, next steps, action plan, help links, date, and a privacy disclaimer. Use the browser's **Save as PDF** destination to download. The `@page` CSS rule sets A4 portrait with 18mm margins.

### Copy session summary

A **Copy session** button copies a brief plain-text session summary to the clipboard. It includes:
- Stage result and date
- 7-day action plan with completion state
- Help links

It does **not** include question answers, free text, or any personal identifiers. Suitable for passing to a colleague or pasting into a case note system.

### Organisation mode config

Three new fields in `src/config/branding.js`:

```js
organisationType: "charity",      // 'charity' | 'council' | 'NHS' | 'other'
showLocalSupportFirst: true,       // informational — affects future sorting logic
enableConversationMode: true,      // set false to hide the "Use with someone" toggle
```

### Insights (local only)

An **Insights** page (linked from the landing screen footer) shows anonymous aggregate stats stored on the device:

- Total checks completed (and started)
- Stage distribution bar chart
- Urgent support shown count
- Helpful feedback percentage (Yes/No responses)

Nothing is sent externally. No individuals are tracked. All data can be cleared from the Insights page.

### Safeguarding reminder

The landing screen now includes a persistent safeguarding footer:

> _If you are worried about someone's safety, contact local safeguarding services or call 999 if there is immediate danger._

The same wording appears in the About panel. The text is configurable via `BRANDING.safeguardingReminder` in `src/config/branding.js`.

### About this tool

An **About this tool** modal (bottom sheet on mobile) is accessible from the landing screen. It explains:

**This tool helps you:** understand your caring situation, see practical next steps, find support services, track changes over time.

**This tool does not:** give medical advice, replace professional assessment, formally assess risk, store personal information.

Also includes a privacy summary and the safeguarding reminder.

### Feedback button

A **Was this helpful?** Yes/No section appears on every result page. Responses are:
- Shown as aggregate stats only (in the Insights page)
- Stored locally under `mcsc_feedback` as `{ date, stage, helpful }` — no personal data

A confirmation message appears after a response is recorded. Feedback resets each time the check is completed.

### Updated localStorage keys

| Key | Contents | Max size |
|---|---|---|
| `mcsc_last_result` | Most recent result | Single object |
| `mcsc_history` | Last 5 check-ins | Array of 5 |
| `mcsc_action_plan` | Stage number + completion state | Per-stage object |
| `mcsc_reminder` | Reminder date and interval | Single object or null |
| `mcsc_stats` | Anonymous aggregate stats (Stage 8) | Single object |
| `mcsc_feedback` | Anonymous feedback responses (Stage 8) | Array, max 100 |

---

## Stage 9 features

### Public launch readiness

Stage 9 prepares the tool for public deployment by Carers Trust Solihull.

### Landing page rewrite
Clearer headline and intro copy explaining who the tool is for (men who are caring for a family member or friend) and what it does. Reassurance text added to the footer note ("Your answers are not saved").

### Safety-first entry card
A prominent but non-blocking card at the top of the landing screen reminds users that this tool is not for emergencies and directs to 999 if someone is in immediate danger.

### Privacy screen
A dedicated full privacy page (`screen-privacy`) covering: what is stored (localStorage only, anonymous), what is never stored, how to delete data, and that no cookies or tracking are used. Linked from the landing meta-links row and from the About modal.

### Accessibility statement
A dedicated accessibility statement screen (`screen-accessibility`) with WCAG 2.1 AA conformance intent, a list of implemented accessibility features, known limitations, and a contact route for feedback.

### Global error handler
`window.onerror` and `window.addEventListener('unhandledrejection')` show a dismissible banner — "Something went wrong. Please refresh the page." — if an unhandled error escapes the existing try/catch guards.

### Offline detection
`navigator.onLine` and the `offline`/`online` window events drive a small bottom banner warning that external links may not open when the user goes offline. Disappears automatically when connectivity is restored.

### "Get help now" rename
The persistent help bar button text, its aria-label, and the urgent-help screen heading are all updated from "I need help now" to "Get help now".

### Version number
`version: "1.0"` added to `BRANDING` config in `src/config/branding.js`. Displayed as `Version 1.0` in the footer of the landing screen, applied dynamically by `applyBranding()`.

### SEO metadata
`<meta name="description">`, `<meta name="author">`, and basic Open Graph tags added to `<head>`.

### Analytics
Pending charity sign-off. Not implemented in this stage. The `logEvent()` hook remains in place for a future provider integration.

---

## Stage 10 features

### Live rollout, partner use, and ongoing improvement

Stage 10 makes the tool public-ready, partner-ready, and measurable.

---

## Deployment guide

### Run locally

No build step required. Start a local server:

```bash
python3 -m http.server 3456 --directory male-carer-stage-checker
```

Open `http://localhost:3456` in any browser.

### Deploy to Netlify

1. Push the repo to GitHub.
2. In Netlify: **New site → Import from Git** → select the repo.
3. Set **publish directory** to `male-carer-stage-checker`.
4. Leave build command empty.
5. Deploy.

Netlify will pick up `netlify.toml` automatically. The `/start`, `/urgent`, and `/stage/:num` redirects are configured there.

### Deploy to Vercel

1. Push the repo to GitHub.
2. In Vercel: **New Project → Import** → select the repo.
3. Set **Root Directory** to `male-carer-stage-checker`.
4. Leave build command empty. Output directory: `.` (current directory).
5. Deploy.

`vercel.json` configures headers and redirects automatically.

### Deploy to GitHub Pages

1. Push the repo to GitHub.
2. In repo settings: **Pages → Source → Deploy from branch → main → /male-carer-stage-checker**.
3. The `.nojekyll` file prevents Jekyll from interfering with file paths.
4. The site will be live at `https://<username>.github.io/<repo>/`.

Note: GitHub Pages does not support server-side redirects. The `/start`, `/urgent`, `/stage/:num` shortcut URLs will not work — use the full `?entry=start` / `?stage=3` URL parameters directly instead.

---

## Configuring for another organisation

All customisation lives in `src/config/branding.js`. Copy the file, update these fields, and load it instead:

| Field | Purpose |
|---|---|
| `charityName` / `organisationName` | Display name and PDF/export labelling |
| `serviceName` | Page title and tool name |
| `localAuthorityName` | Local authority context, shown in location notes |
| `primaryColour` / `secondaryColour` | Brand colours (CSS hex) |
| `websiteUrl` | Used in session copy and external links |
| `feedbackUrl` | A `mailto:` or external form URL; set to `null` to hide |
| `locationNote` | Overrides the "services are specific to…" note |
| `safeguardingNote` | Overrides the result-page safeguarding text |
| `safeguardingReminder` | Overrides the landing-screen safeguarding footer |
| `emergencyContactText` | Overrides the "call 999" safety notice (for non-UK deployments) |
| `directoryOverride` | Replace the entire support directory with a partner-specific array of resources |
| `launchMode` | `"soft"` shows a testing banner; `"public"` removes it |
| `version` / `lastUpdated` | Shown in the landing footer |

### Swapping the support directory

Set `directoryOverride` to an array of resource objects matching the shape in `src/content/resources.js`:

```js
directoryOverride: [
  {
    id: 'my-local-service',
    name: 'My Local Carers Service',
    category: 'carers-support',
    description: 'Support for carers in [area].',
    url: 'https://example.org',
    phone: '01234 567890',
    appliesToStages: [1, 2, 3, 4, 5, 6],
    urgencyLevel: 'standard',
  },
],
```

---

## How to embed this tool on your website

The tool is iframe-friendly. To embed it, add this to any web page:

```html
<iframe
  src="https://your-deployment-url/?embed=true"
  width="100%"
  height="750"
  style="border:none;border-radius:12px;"
  title="Male Carer Stage Checker"
  loading="lazy"
  allow="clipboard-write"
></iframe>
```

When `?embed=true` is present in the URL, the tool hides the meta-links row, version footer, and conversation toggle to reduce visual clutter inside the iframe.

To pre-select an entry point in an embedded iframe, combine parameters:

```html
src="https://your-deployment-url/?embed=true&entry=start"
```

---

## Shareable link entry points

Use these URLs for campaigns, QR codes, and direct referrals.

| URL | Behaviour |
|---|---|
| `/?entry=start` | Jumps straight to the first question |
| `/?entry=urgent` | Opens the urgent help screen directly |
| `/?stage=3` | Shows the Stage 3 result page directly (useful for printed materials) |

On Netlify and Vercel, short redirects are also configured:

| Short URL | Resolves to |
|---|---|
| `/start` | `/?entry=start` |
| `/urgent` | `/?entry=urgent` |
| `/stage/3` | `/?stage=3` |

---

## QR code guidance

This tool can be accessed via QR code from printed materials. Suggested placements:

- **GP surgery waiting rooms** — link to `/?entry=start` for a direct check-in entry
- **Community centres and libraries** — link to the main URL for a full landing experience
- **Hospitals and discharge desks** — link to `/?entry=urgent` for immediate support signposting
- **Events and carer groups** — link to `/?stage=1` or `/?stage=2` for early-stage awareness

Generate QR codes at any free QR generator (e.g. qr-code-generator.com). Use the full deployment URL with the appropriate parameter. Test the QR code on at least two devices before printing.

---

## How to update content

All user-facing content lives in `src/content/` and `src/config/branding.js`. The HTML and JS in `index.html` do not need to be touched for routine content changes.

| What to change | File to edit |
|---|---|
| Questions and answer options | `src/content/questions.js` → `QUESTIONS` |
| Score bands and stage mapping | `src/content/questions.js` → `SCORE_BANDS` |
| Safety trigger answers | `src/content/questions.js` → `SAFETY_TRIGGERS` |
| Stage result titles, steps, tips | `src/content/stageResults.js` → `STAGE_RESULTS` |
| Help link URLs | `src/content/helpLinks.js` → `HELP_LINKS` |
| Support directory services | `src/content/resources.js` → `RESOURCES` |
| Action plan tasks | `src/content/actionPlans.js` → `ACTION_PLANS` |
| Branding, colours, launch mode | `src/config/branding.js` → `BRANDING` |

### Content review workflow

All content changes should follow this process before going live:

1. **Draft** — update the relevant `src/content/` file
2. **Service lead review** — the service lead at Carers Trust Solihull checks the wording for accuracy and tone
3. **Safeguarding check** — confirm that no content implies clinical advice, makes promises about outcomes, or understates risk
4. **Accuracy check** — verify all external URLs are live and pointing to the correct pages
5. **Version bump** — increment `version` in `branding.js` and update `lastUpdated`
6. **Deploy** — push to the hosting platform

---

## Safeguarding responsibilities

This tool is for information and guidance only. It does not replace a professional carer assessment or emergency services.

**The deploying organisation is responsible for:**

- Ensuring the safeguarding text accurately reflects their local safeguarding contacts and procedures
- Keeping help link URLs current and working
- Reviewing content at least every 6 months or when local services change
- Ensuring the tool is not promoted as a substitute for crisis support
- Training any staff who direct service users to this tool

**The tool does not:**

- Assess clinical risk
- Store any information about the person using it
- Make referrals to services
- Replace a carer's assessment under the Care Act 2014

If a person using this tool is in immediate danger, they should call 999. If there are safeguarding concerns, contact the local authority safeguarding team.

---

## Privacy statement

This tool is built privacy-first. No personal data is collected, transmitted, or stored externally.

**What is stored (localStorage only, on the user's device):**
- Stage number and date of each check-in (up to 5)
- Action plan completion state (which items ticked)
- Reminder date if set
- Anonymous usage counts and feedback responses

**What is never stored:**
- Names, addresses, or contact details
- Individual question answers
- Medical or care information
- IP addresses or device identifiers

**No cookies are used.** No analytics services are connected by default. The `logEvent()` function writes to the browser console only. To connect an analytics provider, see the Analytics section below.

---

## Analytics overview

Anonymous usage is tracked locally on each user's device via the **Service Insights** screen (accessible from the landing page). Figures are never sent externally.

**Events fired by `logEvent()`:**

| Event | When |
|---|---|
| `check_started` | User clicks Start Check |
| `check_completed` | User reaches the result screen |
| `urgent_support_shown` | Urgent screen is triggered by a safety answer |
| `result_copied` | User copies their result |
| `result_shared` | User uses the Web Share API |
| `result_printed` | User clicks Download Summary |
| `action_clicked` | User clicks the main action button on the result |
| `action_plan_toggled` | User opens or closes the action plan |
| `directory_opened` | User opens the support directory |
| `feedback_yes` / `feedback_no` | User submits helpful/not helpful feedback |
| `privacy_viewed` | User opens the Privacy screen |
| `accessibility_viewed` | User opens the Accessibility statement |
| `direct_stage_entry` | User arrived via a `?stage=N` shareable link |
| `error_reported` | An unhandled JS error was caught |

**To add a real analytics provider:**

1. Get sign-off from the service lead and update the privacy policy
2. In `index.html`, find the `reportError` function and the `logEvent` function
3. Replace the `console.log` / `console.error` calls with the provider's SDK calls
4. Recommended providers: **Plausible** (privacy-first, no cookies) or **Fathom** (GDPR-compliant)

---

## Impact measurement

This tool supports the following KPIs. All figures come from the local Service Insights screen.

| KPI | How this tool contributes |
|---|---|
| **Number of carers reached** | `check_completed` count — each completion represents one carer engagement |
| **Early identification of need** | Stage distribution — high counts at Stage 1–2 indicate early-stage carers being reached |
| **Signposting to services** | `action_clicked` count — each click represents a referral to an external service |
| **Urgent support triggered** | `urgent_support_shown` count — tracks how often the safety pathway was activated |
| **Carer engagement over time** | Check-in history (up to 5 per device) — tracks whether carers return and how their stage changes |
| **Tool helpfulness** | Feedback % — proportion of "Was this helpful?" Yes responses |
| **Action plan engagement** | Action plan usage % shown in Service Insights — tracks self-directed goal completion |

Note: all figures are per-device and anonymous. They do not identify individuals. For aggregate data across multiple users, figures must be collected manually from the Service Insights screen by staff with access to the device, or via an analytics integration once agreed with the service.

---

## Rollout checklist

Use this checklist before going live.

### Content
- [ ] All help link URLs tested and working
- [ ] Stage result content reviewed by service lead
- [ ] Safeguarding text reviewed and reflects local contacts
- [ ] `BRANDING.launchMode` changed from `"soft"` to `"public"`
- [ ] `BRANDING.version` and `BRANDING.lastUpdated` set correctly
- [ ] `BRANDING.feedbackUrl` set (or confirmed as `null` if not using)

### Technical
- [ ] Deployed to hosting platform (Netlify / Vercel / GitHub Pages)
- [ ] HTTPS confirmed (all modern hosts provide this automatically)
- [ ] Tool tested on a real mobile device (iOS Safari and Android Chrome)
- [ ] Tool tested with keyboard-only navigation
- [ ] Service worker confirmed working (tool loads offline after first visit)
- [ ] Shareable entry point URLs tested (`/?entry=start`, `/?stage=3`)
- [ ] Embed tested if used on a partner website

### Safeguarding
- [ ] Emergency messaging reviewed (999 call-out is prominent)
- [ ] "This tool is not a substitute for emergency services" is visible
- [ ] No content implies clinical diagnosis or assessment
- [ ] Staff who will refer people to the tool have been briefed

### Comms
- [ ] QR codes (if printed) tested on two devices before printing
- [ ] Partner organisations briefed on how to embed or link
- [ ] Feedback route confirmed (email or form URL set in `feedbackUrl`)

---

## Stage 11 features

Stage 11 adds professional and staff use capabilities while keeping the privacy-first, no-account design intact.

### Professional mode

A toggle on the landing screen enables professional mode for staff, volunteers, and partner organisations using the tool in a session with a carer.

**What professional mode adds:**

| Feature | Description |
|---|---|
| Professional guidance banner | Green banner at top of result reminding staff to use agreed step and follow-up prompts |
| Agreed next step selector | Staff can mark one of the suggested steps as the agreed action before the next contact |
| Follow-up prompts | 4 stage-specific conversation prompts to help structure the discussion |
| Escalation note | Appears inside the support banner in professional mode, prompting referral if needed |
| Session summary screen | Full-screen summary: stage, agreed step, all steps, help links, copy button |
| Session summary button | Green button at the bottom of the result screen, visible in professional mode only |
| Staff & volunteer guide | Linked from the professional mode toggle intro; covers introduction script, session workflow, higher-risk responses, escalation, safeguarding responsibilities, and post-session guidance |

**How it works:**
- Professional mode is session-only — it is never persisted to localStorage
- The agreed next step is stored in `mcsc_agreed_step` in localStorage scoped to the current stage number; it clears automatically when a new check-in starts
- `body.professional-mode` CSS class controls all show/hide logic for pro-only elements, enabling clean CSS-only selectors (e.g. `body.professional-mode .btn-session-summary { display: flex }`)

### New screens

| Screen ID | Route | Purpose |
|---|---|---|
| `screen-session-summary` | Via result screen button | Printable session record: stage, agreed step, steps, help links |
| `screen-staff-guide` | Via professional mode toggle intro | 6-section guide for staff and volunteers |

### New JS functions

| Function | Purpose |
|---|---|
| `toggleProfessionalMode()` | Toggles `_professionalMode` bool, `body.professional-mode` class, pro-mode-intro visibility |
| `renderProfessionalElements(result)` | Called from `renderResult()` — shows/hides all pro elements based on mode state |
| `selectAgreedStep(index, text)` | Saves chosen step to `mcsc_agreed_step` in localStorage; re-renders agreed step list |
| `clearAgreedStep()` | Removes `mcsc_agreed_step` from localStorage; re-renders |
| `renderAgreedStep()` | Builds the agreed step button list from current stage steps; marks saved selection |
| `renderFollowUpPrompts(stageNum)` | Renders 4 stage-specific follow-up prompts from `FOLLOWUP_PROMPTS` constant |
| `showSessionSummary()` | Calls `renderSessionSummary()` then `showScreen('screen-session-summary')` |
| `closeSessionSummary()` | Returns to `screen-result` |
| `renderSessionSummary()` | Populates all session summary elements including print conversation sheet |
| `showStaffGuide()` | Shows `screen-staff-guide`; also accessible via professional mode intro link |
| `closeStaffGuide()` | Returns to `screen-landing` |

### `copySessionSummary()` update

The existing `copySessionSummary()` function now includes the agreed next step (if selected) in the copied text. The success toast now fires on both `session-copy-success` (result screen) and `ss-copy-success` (session summary screen).

### Print conversation sheet

When printing from the session summary screen in professional mode, an additional conversation sheet is appended via `@media print`. It includes: stage label, agreed next step, follow-up prompts, a blank notes box, and a disclaimer. The sheet is hidden on screen and only appears in print output.

### New analytics events

| Event | When fired |
|---|---|
| `professional_mode_on` | Professional mode enabled |
| `professional_mode_off` | Professional mode disabled |
| `agreed_step_selected` | A step is selected as the agreed next step |
| `session_summary_viewed` | Session summary screen opened |
| `staff_guide_viewed` | Staff guide screen opened |

### New localStorage key

| Key | Stores | Cleared when |
|---|---|---|
| `mcsc_agreed_step` | `{ stageNum, stepIndex, stepText }` | New check-in starts (`restartCheck()`) |

---

## Stage 12 features

Stage 12 adds governance, quality assurance, and impact reporting suitable for a commissioned service. The tool remains anonymous, privacy-first, and lightweight throughout.

---

### Governance approach

The tool is designed to support accountability without storing personal data. All governance artefacts are either static (content review log, QA checklist) or derived from anonymous aggregates already stored in localStorage.

**Guiding principles:**
- No personal data is collected, stored, or transmitted at any stage
- Governance records describe content and process, not individuals
- Review responsibility sits with the deploying organisation, not the tool itself

---

### Content version control

Two new fields in `src/config/branding.js`:

| Field | Purpose |
|---|---|
| `contentVersion` | Incremented when any stage content, links, or wording changes. Shown in the landing footer. |
| `contentLastReviewed` | ISO date (`YYYY-MM-DD`) of the most recent full content review. Shown in footer and impact reports. |
| `reviewCycleMonths` | Recommended review interval. If today exceeds `contentLastReviewed + reviewCycleMonths`, a yellow banner appears on the landing screen. |

The content version footer (`Content v1.0 · Last reviewed: May 2026`) is shown below the version line on the landing screen, driven by `applyBranding()`.

**Note on SW caching:** `branding.js` is loaded with a `?v=12` query string to force a fresh fetch when the cache version changes. Update both the script tag in `index.html` and the `APP_SHELL` entry in `sw.js` together whenever you bump the content version.

---

### Content review log (`contentReviewLog.js`)

A new file at the project root. Add an entry at the top of `CONTENT_REVIEW_LOG` after each review:

```js
{
  version:    "1.1",
  date:       "2026-11-01",
  reviewedBy: "Service Lead",        // role, not name
  changes: [
    "Updated Carers Trust phone number",
    "Reviewed safeguarding wording against updated policy",
  ],
}
```

The review log is displayed in the **For organisations** screen under "Content review log". It is loaded as a script tag — it is not transmitted or stored anywhere.

---

### Review process

Recommended cadence: every 6 months (configurable via `reviewCycleMonths`).

At each review, check:
1. All external links are active and correct
2. Local service details are accurate for the deployment area
3. Stage descriptions, tips, and action plans remain appropriate
4. Safeguarding wording is consistent with current organisational policy
5. No clinical, medical, or legal claims have crept in
6. Update `contentLastReviewed` and `contentVersion` in `branding.js`
7. Add an entry to `contentReviewLog.js`
8. Bump the SW cache version (`mcsc-vN`) and the `?v=N` query on the branding.js script tag

---

### New screens

| Screen | Route | Audience | Purpose |
|---|---|---|---|
| `screen-safeguarding` | "Safeguarding" in footer links | Public + staff | Safeguarding approach, emergency contacts, service boundary statement |
| `screen-governance` | "For organisations" in footer links | Staff + commissioners | QA checklist, KPI alignment, partner responsibilities, operational considerations, content review log |

---

### Safeguarding approach

Covered in `screen-safeguarding`:
- The tool does not replace professional judgement
- It encourages early support-seeking, not diagnosis
- Immediate risk triggers route to 999 before continuing
- Staff retain full safeguarding responsibility
- Results must not be entered verbatim into case management systems

---

### KPI alignment

The "For organisations" screen documents how the tool supports service outcomes:

| Outcome | How the tool contributes |
|---|---|
| Early identification of carers | Helps people recognise their caring role and seek support earlier |
| Increased access to support | Stage-appropriate signposting at every result |
| Consistent conversations | Structured starting point for all staff and volunteers |
| Volunteer contribution | Can be used independently or as a guided conversation aid |
| Reduced late escalation | Urgent support route and stage-aware signposting |
| Anonymous impact evidence | Local usage data supports quarterly reporting |

---

### Impact reporting

The Insights screen now includes:

| New card | What it shows |
|---|---|
| Reaching higher stages (4–6) | Percentage and count of carers assessed at stages 4, 5, or 6 |
| Anonymous data note | "This data is anonymous and used to improve support." |

The **Copy impact summary** button (green, below the cards) copies a formatted plain-text report to the clipboard containing:
- Organisation name and export date
- Date range (derived from check-in history, if available)
- Content version
- Checks completed and started
- Urgent support shown count
- Stage breakdown with percentages
- Higher-need percentage (stages 4–6)
- Action plan engagement
- Feedback counts

Suitable for pasting into quarterly reports without manual extraction.

---

### Limitations of the tool

These are stated on the Safeguarding screen and in the About panel:

- Does not formally assess risk or determine safeguarding thresholds
- Does not replace a carer's assessment under the Care Act 2014
- Does not provide medical, legal, or clinical advice
- Does not store personal data or create a record of individual cases
- Does not send any information to a server or third party
- Does not constitute a care plan or support agreement

---

### Partner responsibilities

When deploying or embedding this tool, the deploying organisation is responsible for:

- Verifying all local service links are correct before deployment
- Ensuring safeguarding contact routes are current
- Reviewing content at the recommended 6-month interval
- Briefing staff and volunteers (see Staff & volunteer guide in the tool)
- Keeping their own review records using `contentReviewLog.js`
- Not making clinical, legal, or diagnostic claims when presenting results

---

### New analytics events (Stage 12)

| Event | When fired |
|---|---|
| `safeguarding_viewed` | Safeguarding screen opened |
| `governance_viewed` | For organisations screen opened |
| `impact_summary_copied` | Copy impact summary button clicked |

---

---

## Stage 13 features

### Content review status banner
`BRANDING.contentStatus` (`'draft'` | `'review'` | `'approved'`) controls an amber banner on the landing screen. Set to `'draft'` or `'review'` to show the banner; set to `'approved'` to hide it. This prevents accidentally exposing an unfinished version to the public.

### Prominent feedback button
When `BRANDING.feedbackUrl` is set, a green "Give feedback on this tool" button appears below the meta-links row on the landing screen. Links to the specified URL (e.g. a Google Form or mailto link). Hidden entirely when `feedbackUrl` is null.

### Internal launch checklist
An internal-only screen (`screen-launch-checklist`) with 10 pre-launch checklist items. Accessible via `?mode=review` in the URL — it is not linked in any public navigation. Progress is persisted in `localStorage` under `mcsc_launch_checklist`.

**Checklist items:**
1. Content reviewed and signed off by Service Lead
2. Safeguarding wording approved by Safeguarding Lead
3. All external support links verified as active
4. Privacy information reviewed and accurate
5. Accessibility statement reviewed
6. Tool tested on mobile (iOS and Android)
7. Tool tested in Chrome, Firefox, and Safari
8. Urgent help pathway tested end-to-end
9. `branding.js` updated: `launchMode` set to `"public"`
10. `branding.js` updated: `contentStatus` set to `"approved"`

When all items are checked, a green "All checklist items complete" readiness box appears with instructions on how to set the public launch flags.

### Pre-launch test scenarios
The launch checklist screen includes a grid of 10 test buttons that activate key screens/flows directly (start a check, urgent help, Stage 1/3/6 results, support directory, privacy, accessibility, governance, insights). Useful for manual regression testing before each deployment.

### `?mode=review` URL parameter
Adding `?mode=review` to the URL opens the launch checklist directly. Example:

```
https://your-domain.com/?mode=review
```

This is the only way to access the checklist — it has no public nav link.

### How to launch publicly

1. Complete all 10 checklist items at `?mode=review`
2. In `branding.js`, set:
   - `contentStatus: "approved"`
   - `launchMode: "public"`
3. Bump `CACHE_VERSION` in `sw.js` (e.g. `mcsc-v15`)
4. If `branding.js` was changed, also bump the `?v=N` cache-buster in both `<script src="src/config/branding.js?v=N">` (in `index.html`) and `APP_SHELL` in `sw.js` — they must match.
5. Deploy to your host and test on mobile

### New analytics events (Stage 13)

| Event | When fired |
|---|---|
| `launch_checklist_viewed` | Launch checklist screen opened via `?mode=review` |

---

## Stage 14 features

### Insights access control

The Insights screen is no longer accessible from the public navigation. It is only reachable via:

```
https://your-domain.com/?mode=insights
```

**Access flow:**
1. User visits the URL above
2. A passphrase prompt screen appears ("Enter access code")
3. If the correct passphrase is entered, access is granted and the Insights screen is shown
4. Access is stored in `sessionStorage` — it lasts for the browser session only and resets when the browser closes
5. If the passphrase is wrong, "Access not authorised" is shown and the input is cleared

**Where the passphrase is stored:**

`src/config/admin.js` — the `insightsPassphrase` field:

```js
const ADMIN_CONFIG = {
  insightsPassphrase: "cts-insights",
};
```

**How to change the passphrase:**
1. Edit `insightsPassphrase` in `src/config/admin.js`
2. Bump `CACHE_VERSION` in `sw.js`
3. Redeploy

**SEO protection:** `<meta name="robots" content="noindex">` is set on the page, preventing search engine indexing.

**Internal notice:** The Insights screen displays an "Internal use only" badge at the top whenever it is shown.

---

### Bridgit Care AI integration

Bridgit Care AI is a 24/7 digital support service for carers, added as part of the support offer.

**Where the link is stored:**

`src/content/helpLinks.js` — the `BRIDGIT_CARE` key:

```js
BRIDGIT_CARE: "https://carers.bridgit.care/app/ctsol/web",
```

To update the URL, change this value. It is referenced from the result page, urgent help screen, and support directory.

---

### Result page — Bridgit card

Each result page now includes a **"Get support anytime"** card below the "Where to get help" links:

- Stage-specific message (editable in `src/content/stageResults.js` via the `bridgitMessage` field)
- "Open Bridgit Care AI" button — opens in a new tab with `rel="noopener noreferrer"`
- "You are leaving this tool." note
- Safeguarding note: "Bridgit provides guidance but does not replace emergency or professional support."

**Stage-based messaging** (editable in `stageResults.js`):

| Stage | Message |
|---|---|
| 1–2 | If you are unsure where to start, Bridgit can help explain things step by step. |
| 3–4 | Use Bridgit to get help with day to day caring questions. |
| 5–6 | If things feel difficult, you can use Bridgit at any time for guidance. |

**How to update wording:** Edit the `bridgitMessage` field on the relevant stage object in `src/content/stageResults.js`. Each stage has its own message.

---

### Urgent help screen — Bridgit section

Bridgit appears below the existing emergency and local authority resources on the "Get help now" screen. Order: 999 → Solihull Connect → Emergency Duty Team → Bridgit. The text reads:

> "You can also use Bridgit Care AI for guidance, but if there is immediate risk, contact emergency services."

---

### Support directory — Bridgit entry

Bridgit Care AI is listed in the support directory under a new **"Digital support"** category:

- **Name:** Bridgit Care AI
- **Description:** 24/7 digital support for carers. Provides guidance, answers, and ongoing support.
- **When to use:** You have questions outside office hours / You need guidance between appointments / You are unsure what to do next
- Applies to all stages (1–6)

To edit this entry, update the `bridgit-care-ai` object in `src/content/resources.js`.

---

### Safeguarding note

Every Bridgit card includes: "Bridgit provides guidance but does not replace emergency or professional support." This is rendered inline and requires no configuration.

---

### New analytics events (Stage 14)

| Event | When fired |
|---|---|
| `insights_viewed` | Insights screen successfully opened |
| `insights_auth_failed` | Incorrect passphrase entered |

---

## Stage 15 features

### Live monitoring and continuous improvement

Stage 15 adds tools for ongoing oversight, reporting, and resilience. All data remains anonymous and on-device.

---

### Date-filtered Insights

The Insights screen now has three time-period filters: **All time**, **Last 30 days**, **Last 7 days**.

- When a period is selected, stage distribution and feedback are derived from the timestamped `mcsc_history` and `mcsc_feedback` arrays (most recent 5 check-ins and 100 feedback responses respectively).
- When **All time** is selected, the aggregated `mcsc_stats` counters are used (accurate even when check-in history has been overwritten by newer entries).
- Each stage bar now shows both count and percentage.
- A **trend indicator** (↑ higher / ↓ lower / → similar) compares the current period's proportion of higher-stage (4–6) outcomes against the immediately preceding equal period. Only shown when both periods have at least one data point.

---

### Safeguarding monitoring card

The Insights screen includes a **Safeguarding indicators** card showing:
- Total count of times urgent support was triggered (all-time, from `mcsc_stats`)
- Percentage of checks resulting in Stage 5 or 6

Intended for service managers to spot high-need patterns. Includes a contextual note: "High levels may indicate increased demand or need for targeted support."

---

### Copy report summary

A **Copy report summary** button on the Insights screen copies a plain-text report to the clipboard. The report includes:
- Organisation name (from `BRANDING`)
- Report date and period
- Usage (checks completed / started)
- Stage distribution with percentages
- Safeguarding indicators (urgent triggers, stages 5–6 %)
- Feedback (helpful %)
- Action plan engagement
- Privacy disclaimer

---

### What's new panel

A collapsible **What changed recently** panel on the landing screen is populated from `contentReviewLog.js`. It shows the most recent log entry — date, summary, and list of changes. Hidden when the log is empty. Populated by `renderWhatsNew()` on app init.

---

### Check-again prompt

`checkAndShowReminderBanner()` now also shows a time-based prompt below the scheduled reminder banner:
- **< 7 days** since last check → no prompt shown
- **7–28 days** → gentle green prompt with a secondary "Check again" button
- **> 28 days** → stronger prompt with a primary "Check your stage now" button

This is separate from the user-set reminder and requires no user configuration.

---

### A/B message testing

Two new fields in `src/config/branding.js`:

| Field | Purpose |
|---|---|
| `abTestVariant` | `null` (off) or `'b'` to show the alternate tip on the result page |
| `abTestTip` | The replacement tip text shown when `abTestVariant === 'b'` |

When variant B is active, the result tip is replaced with `abTestTip` and an `ab_tip_shown` event is fired. Compare feedback between deployments using the Insights page. Do not track users individually.

---

### Content review banner: `reviewBannerMode`

The stale-content review banner (Stage 12) now respects `BRANDING.reviewBannerMode`:
- `'always'` — shown to all users when content is overdue (previous behaviour)
- `'internal'` — shown only when the user has an active Insights session (i.e. has entered the passphrase in this browser session)

Default is `'internal'` in production to avoid showing internal notices to the public.

---

### Content accuracy checklist

The governance / launch-review screen (`?mode=review`) includes a **Content accuracy checklist** with six items:
1. All external links open correctly
2. Phone numbers are correct
3. Solihull Connect routing is appropriate
4. Bridgit link is working
5. Stage descriptions match current service
6. `contentLastReviewed` date updated in `branding.js`

Items are toggled by clicking. State is in-memory only (not persisted). A "Reset checklist" link restores all items to unchecked.

---

### Resilience fallback

A `checkContentLoaded()` IIFE runs after `applyBranding()` and checks whether `STAGE_RESULTS`, `QUESTIONS`, and `RESOURCES` are all defined and non-empty. If any are missing:
- The `#content-fallback-banner` is shown on the landing screen
- A `console.warn` message lists the missing modules

`renderResult()` also checks for missing `STAGE_RESULTS` before rendering and returns to the landing screen with the banner visible if the data is absent.

---

### Service worker bump

Cache version incremented to `mcsc-v17`.

---

### New analytics events (Stage 15)

| Event | When fired |
|---|---|
| `report_copied` | "Copy report summary" button clicked on Insights screen |
| `ab_tip_shown` | Result page rendered with A/B variant B tip |
| `insights_filter_changed` | Date filter tab clicked on Insights screen |

---

## V2 Stage 1 — Condition Awareness Layer

A new `screen-condition` screen is shown before the 7 stage-checker questions. It asks "What best describes the situation?" and offers 8 options (editable in `src/content/conditions.js`). The selection is held in session-scoped state only (`_currentCondition`) — it does not affect stage scoring and is not stored on the device.

- Back on Q1 returns to the condition screen rather than the landing screen
- The selected condition is shown quietly on the result page under "What this means"
- Condition is included in `buildResultText()` (copy/print) and `copySessionSummary()` (conversation mode)
- `skipCondition()` sets `_currentCondition = null`; generic fallbacks are used throughout

---

## V2 Stage 2 — What May Happen Next

### Overview

A new "What may happen next" section is shown on the result page, after the "What to do next" steps and before the "Learn more" expandable. It shows 3–5 short bullet points describing situations other carers at this stage have sometimes noticed, to support preparation and reduce uncertainty.

### Where content is stored

All guidance lives in **`src/content/nextSteps.js`** as `NEXT_STAGE_GUIDANCE`, a plain object keyed by stage number (1–6). Each stage object contains:

| Key | Content |
|---|---|
| `generic` | Shown when no condition is selected, or no condition-specific content exists |
| `dementia` | Guidance for "Dementia or memory problems" |
| `physical` | Guidance for "Physical health condition" |
| `mental-health` | Guidance for "Mental health condition" |
| `neurological` | Guidance for "Neurological condition" |
| `learning-disability` | Guidance for "Learning disability or autism" |
| `frailty` | Guidance for "Frailty or ageing" |

### How condition matching works

`getNextGuidance(stage, conditionId)` looks up `NEXT_STAGE_GUIDANCE[stage][conditionId]`. If that array exists and is non-empty it is returned; otherwise `NEXT_STAGE_GUIDANCE[stage].generic` is used. The `conditionId` comes from `_currentCondition.id` (set by V2 Stage 1).

### Fallback behaviour

| Scenario | What is shown |
|---|---|
| Condition selected, matching content exists | Condition-specific bullets |
| Condition selected, no matching content | Generic stage bullets |
| No condition selected (skipped) | Generic stage bullets |
| `NEXT_STAGE_GUIDANCE` not loaded | Section is hidden |
| Stage number has no entry | Section is hidden |

### Safe language protections

All content must use soft, preparatory language only. The `_validateNextGuidance()` function checks every item at render time against a list of patterns:

```
/\bwill\s+(?!not\b)/i    — "will" (but not "will not")
/\bguaranteed\b/i
/\binevitable\b/i
/\bcertain\s+to\b/i
/\bwill\s+definitely\b/i
/\bthis\s+will\s+happen\b/i
/\byou\s+are\s+likely\s+to\b/i
```

If a match is found, a `console.warn` message is logged to the browser console (never shown to users). This is a development safeguard — it does not prevent the content from rendering.

**Required language:** may · might · can · sometimes · often · some carers · could

**Forbidden language:** will · guaranteed · inevitable · certain · definitely

### Included in print and copy

- **Print view** — section renders in print because `#whats-next-result-section:not([hidden])` is set to `display: block !important` in `@media print`
- **Copied result** (`buildResultText()`) — a `WHAT MAY HAPPEN NEXT` block with bullet points is included between "What to do next" and "Helpful tip"
- **Session summary** (`copySessionSummary()`) — a `WHAT MAY HAPPEN NEXT` block is included before "Where to get help"

### New JS functions

| Function | Purpose |
|---|---|
| `getNextGuidance(stage, conditionId)` | Returns guidance array for a stage + optional condition |
| `renderWhatsNext(stage, conditionId)` | Populates and shows (or hides) `#whats-next-result-section` |
| `_validateNextGuidance(items, stage, conditionId)` | Logs console warnings if unsafe language is detected |

---

## Suggested future work

- **Multi-language support** — create `questions-cy.js`, `stageResults-cy.js` etc. for Welsh; add a language toggle that swaps the loaded content file
- **Analytics integration** — connect `logEvent()` to Plausible or Fathom; requires charity sign-off on analytics provider and privacy policy update
- **Stage progression chart** — visualise the `mcsc_history` data as a simple timeline graph
- **Accessibility audit** — formal WCAG 2.2 AA audit with VoiceOver / NVDA and keyboard-only navigation testing
- **Opening hours** — add an `openingHours` field to `src/content/resources.js` and display it in the directory
- **Action plan history** — show which actions were completed across previous check-ins, using the existing localStorage structure
- **Per-stage conversation prompts** — move `FOLLOWUP_PROMPTS` from `index.html` into `src/content/stageResults.js` so they are editable alongside other stage content
