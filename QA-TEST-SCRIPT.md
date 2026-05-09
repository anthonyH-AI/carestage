# CareStage V2 — Manual QA Test Script

**Version tested:** V2 (all 10 V2 stages complete) · SW cache `mcsc-v28`
**Prepared for:** Carers Trust Solihull
**Intended tester:** Non-technical staff or volunteer

---

## How to use this script

- Work through each section in order on your first pass. Later sections assume earlier ones have passed.
- Mark each item **✓ Pass**, **✗ Fail**, or **— Skip** (with a reason).
- If something fails, note what you saw vs. what was expected. Take a screenshot if possible.
- You do not need to understand how the tool works technically — just follow the steps and compare what you see against the "You should see" description.
- Some sections ask you to open a specific URL. Replace **[TOOL URL]** throughout with the actual web address of the deployed tool (e.g. `https://carestage.vercel.app`).

---

## Setup checklist

Before starting any tests, complete the following:

- [ ] You have the tool URL (ask your service lead if unsure)
- [ ] You have Chrome or Edge on a desktop or laptop
- [ ] You have access to a real mobile phone (iOS or Android) for Section T (mobile layout)
- [ ] You can open browser DevTools (press F12 in Chrome)
- [ ] You know the Insights passphrase: **cts-insights**
- [ ] You have cleared your browser's site data for the tool URL, so you start with a clean state. To do this: DevTools → Application tab → Storage → Click "Clear site data"

---

## Quick reference: answer sequences

Use these answer combinations to reach each stage naturally during full-flow tests.
For most sections you can use the direct URL shortcut `[TOOL URL]/?stage=N` instead.

| Goal | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Score |
|---|---|---|---|---|---|---|---|---|
| **Stage 1** | No, we are still waiting | No | Chaotic | Understanding what is happening | A little | I am coping fine | No | 4 |
| **Stage 2** | Yes, but I do not understand it yet | Not sure | Some things are in place | Understanding what is happening | A little | I am coping fine | No | 7 |
| **Stage 3** | Yes, I understand the basics | Yes, but I am new to it | Some things are in place | Knowing what I should be doing | Some family or friends | I am coping fine | No | 11 |
| **Stage 4** | Yes, and care needs are already changing | Yes, I have been doing this for a while | Some things are in place | Managing appointments, medication, or tasks | A little | Some days are difficult | No | 18 |
| **Stage 5** | Yes, and care needs are already changing | Yes, I have been doing this for a while | Mostly organised | Feeling tired, stressed, or isolated | A little | Some days are difficult | No | 21 |
| **Stage 6** | Yes, and care needs are already changing | Yes, I have been doing this for a while | Mostly organised | Feeling tired, stressed, or isolated | A little | I am exhausted or close to burnout | No | 26 |
| **Urgent flow** | any | any | any | any | **I need urgent help** | any | any | — |
| **Risk urgent** | any | any | any | any | any | any | **Yes, I am concerned** | — |

**Pressure level reference (for Section H):**

| Pressure level | How to achieve it |
|---|---|
| **Low** | Q3 = "Mostly organised" or "Stable but needs reviewing", Q4 = anything except "Feeling tired…", Q5 = "Some family or friends" or "Professional…", Q6 = "I am coping fine", Q7 = "No" |
| **Moderate** | Q3 = "Chaotic" (2 pts) and everything else as low, OR Q6 = "Some days are difficult" (1 pt) + Q7 = "Not sure" (1 pt) |
| **High (via answers)** | Q6 = "I feel overwhelmed" (2 pts) + Q7 = "Yes, I am concerned" (2 pts) = 4 pts → high; OR Q6 = "I am exhausted or close to burnout" (3 pts) + any 1 other pressure point |
| **High (via urgent)** | Use the urgent flow answer sequence — urgent screen shown always produces high pressure |

---

---

## Section A — Landing screen

**Goal:** Confirm the landing screen displays correctly with all expected elements.

**Steps:** Open `[TOOL URL]` in Chrome.

- [ ] **A1** · The page title in the browser tab reads **Male Carer Stage Checker** (or similar)
- [ ] **A2** · The main heading reads **"Find out where you are in your caring journey"**
- [ ] **A3** · The intro paragraph mentions **"men who are caring for a family member or friend"** and **"Solihull"**
- [ ] **A4** · A red-tinted notice card appears near the top with the words **"Not for emergencies"** and **"call 999"**
- [ ] **A5** · A large teal **"Start the check"** button is visible
- [ ] **A6** · The footer text reads something like **"Takes around 2 minutes · No sign-up needed · Your answers are not saved"**
- [ ] **A7** · Four text links appear below the footer note: **About this tool · Privacy · Accessibility · Insights**
- [ ] **A8** · A version number (e.g. **"Version 1.0"**) is visible at the very bottom of the landing screen
- [ ] **A9** · A persistent red **"Get help now"** bar is visible at the very bottom of the browser window
- [ ] **A10** · There is NO testing or draft banner visible (the tool is in public mode)

---

## Section B — Condition screen (V2 Stage 1)

**Goal:** Confirm the condition selection screen appears before the questions and all 8 options are available.

**Steps:** Click **"Start the check"** from the landing screen.

- [ ] **B1** · You are taken to a new screen — NOT immediately to a question
- [ ] **B2** · The screen asks something like **"What best describes the situation?"** or similar
- [ ] **B3** · Exactly **8 answer options** are visible. Confirm each of these is present:
  - [ ] Dementia or memory problems
  - [ ] Physical health condition
  - [ ] Mental health condition
  - [ ] Neurological condition (e.g. stroke, MS, Parkinson's)
  - [ ] Learning disability or autism
  - [ ] Frailty or ageing
  - [ ] Not sure
  - [ ] Other
- [ ] **B4** · A **"Skip this question"** link or button is visible
- [ ] **B5** · A **back arrow** or back button is visible and takes you back to the landing screen
- [ ] **B6** · Clicking any condition option takes you to **Question 1** (not the result)
- [ ] **B7** · The selected condition name appears quietly on the result page later (check after completing the check with any condition selected and reaching a result)

---

## Section C — Question flow

**Goal:** Confirm the 7 questions display and navigate correctly.

**Steps:** Start the check, select any condition, then work through all 7 questions.

- [ ] **C1** · There are exactly **7 questions** total
- [ ] **C2** · A **progress indicator** is visible (e.g. "Question 1 of 7") and updates with each question
- [ ] **C3** · Clicking a **Back** button on Q1 returns you to the condition screen (not the landing screen)
- [ ] **C4** · The Back button on Q2–Q7 returns you to the previous question
- [ ] **C5** · Each question has between 3 and 5 answer options
- [ ] **C6** · Clicking an answer immediately advances to the next question (no separate "Next" button needed)
- [ ] **C7** · After Q7, you arrive at a result screen (or the urgent screen — see Section G)
- [ ] **C8** · The **"Get help now"** bar is hidden during the question flow

**Verify exact question text is present:**
- [ ] **C9** · Q1 includes the phrase **"Has the person you care for received a diagnosis"**
- [ ] **C10** · Q2 includes the phrase **"Do you see yourself as a carer"**
- [ ] **C11** · Q3 includes the phrase **"How organised does the situation feel"**
- [ ] **C12** · Q4 includes the phrase **"What is your biggest pressure right now"**
- [ ] **C13** · Q5 includes the phrase **"Do you have support in place"**
- [ ] **C14** · Q6 includes the phrase **"How are you coping personally"**
- [ ] **C15** · Q7 includes the phrase **"Is anyone at risk right now"**

---

## Section D — Stage results: all 6 stages

**Goal:** Confirm each of the 6 stage result pages displays the correct content.

For each stage, open `[TOOL URL]/?stage=N` (replacing N with 1 through 6). This bypasses the questions and goes directly to the result. Note: condition-specific content will not appear this way — Section E covers that.

### D1 — Stage 1 result

Open `[TOOL URL]/?stage=1`

- [ ] The page heading includes **"Stage 1"** and a title (e.g. "Just finding out" or similar)
- [ ] A **"What this means"** section is visible with a paragraph of explanation
- [ ] A **"What to do next"** section shows a numbered or bulleted list of steps
- [ ] A prominent teal **action button** is visible
- [ ] A **"Suggested review timing"** note is visible (e.g. "Check again in 1 to 2 weeks")
- [ ] A **"Learn more about this stage"** expandable section is visible — click it and confirm content appears
- [ ] A **"Where to get help"** section shows 2 or more help links
- [ ] A **Bridgit Care AI** card is visible with an "Open Bridgit Care AI" button
- [ ] A **"Get help now"** bar is visible at the bottom

### D2 — Stage 2 result

Open `[TOOL URL]/?stage=2`

- [ ] Page heading includes **"Stage 2"**
- [ ] All elements from D1 are present
- [ ] The **"Suggested review timing"** text is different from Stage 1

### D3 — Stage 3 result

Open `[TOOL URL]/?stage=3`

- [ ] Page heading includes **"Stage 3"**
- [ ] All elements from D1 are present
- [ ] The stage description is noticeably different in tone from Stage 1

### D4 — Stage 4 result

Open `[TOOL URL]/?stage=4`

- [ ] Page heading includes **"Stage 4"**
- [ ] All elements from D1 are present
- [ ] The **amber support banner** is NOT visible (it only appears for certain answer combinations — not in direct-URL mode)

### D5 — Stage 5 result

Open `[TOOL URL]/?stage=5`

- [ ] Page heading includes **"Stage 5"**
- [ ] All elements from D1 are present
- [ ] The tone of the content reflects a higher level of need than Stage 3

### D6 — Stage 6 result

Open `[TOOL URL]/?stage=6`

- [ ] Page heading includes **"Stage 6"**
- [ ] All elements from D1 are present
- [ ] The **"Caring rarely follows a straight line"** section title should read **"This stage is not a permanent state"** (Stage 6 has a special reassurance variant — different from Stages 1–5)
- [ ] The Bridgit card message mentions something about things being difficult or any time for guidance

### D7 — Common result page elements (check on any stage)

Open `[TOOL URL]/?stage=3` and confirm all of the following on a single result page:

- [ ] **D7a** · A **"What may happen next"** section is visible with bullet points
- [ ] **D7b** · A **"What you may need to do"** section is visible with bullet points
- [ ] **D7c** · A **"How you may be feeling"** section is visible with a short paragraph
- [ ] **D7d** · A **"How you have been managing"** pressure check section is visible
- [ ] **D7e** · A **"Caring rarely follows a straight line"** reassurance section is visible with bullet points and a closing sentence
- [ ] **D7f** · A **"Recommended for your stage"** resources section is visible
- [ ] **D7g** · A **"Your next 7 days"** action plan section is visible with checkable items
- [ ] **D7h** · A **"Was this helpful?"** Yes/No feedback row is visible
- [ ] **D7i** · A **"Your data and privacy"** section is visible at the bottom
- [ ] **D7j** · Share / Copy / Print buttons are visible in a row
- [ ] **D7k** · A **"Check in again"** button is visible

---

## Section E — Condition-specific content: all 8 conditions

**Goal:** Confirm that selecting a condition produces condition-specific content in the relevant sections.

For each condition, do a full check: Start the check → select the condition → answer questions using the **Stage 3 answer sequence** from the Quick Reference table → reach the result page.

For each condition, confirm on the result page:

- [ ] The **selected condition name** appears quietly in the "What this means" section
- [ ] The **"What may happen next"** section contains content relevant to the condition (bullet points should mention condition-specific challenges, not generic ones)
- [ ] The **"What you may need to do"** section contains condition-specific responsibilities
- [ ] A **"Support that may fit your situation"** section is visible with 2–3 services specifically relevant to the condition
- [ ] The service names and phone numbers in that section match the condition

Run this for each condition:

- [ ] **E1** · Dementia or memory problems → section title should read "Support for dementia and memory conditions" · Alzheimer's Society should be listed
- [ ] **E2** · Physical health condition → "Support for physical health conditions" · NHS carer's assessment should be listed
- [ ] **E3** · Mental health condition → "Support for mental health caring roles" · Rethink Mental Illness or Mind should be listed
- [ ] **E4** · Neurological condition → "Support for neurological conditions" · Headway or MS Society should be listed
- [ ] **E5** · Learning disability or autism → "Support for learning disabilities and autism" · Mencap or National Autistic Society should be listed
- [ ] **E6** · Frailty or ageing → "Support for frailty and ageing" · Age UK should be listed
- [ ] **E7** · Not sure → "Support when you are not sure where to start" · Carers UK and Your GP should be listed
- [ ] **E8** · Other → "Support for carers in less common situations" · Carers UK and Carers Trust should be listed

**Service link check (do on any one condition):**
- [ ] **E9** · Click at least one service link — it should open in a new browser tab, not navigate away from the tool
- [ ] **E10** · If a phone number is shown, tap it on a mobile phone — it should offer to dial

---

## Section F — Condition skipped flow

**Goal:** Confirm that skipping the condition screen produces generic (not condition-specific) content and hides the service suggestions section.

**Steps:**
1. Start the check from the landing screen
2. On the condition screen, click **"Skip this question"**
3. Answer questions using the **Stage 3 answer sequence** from the Quick Reference table
4. Reach the result page

- [ ] **F1** · You are taken directly from the condition screen to Q1 when you click Skip
- [ ] **F2** · No condition name appears in the "What this means" section
- [ ] **F3** · The **"Support that may fit your situation"** section is **NOT visible** (it should be completely hidden when no condition is selected)
- [ ] **F4** · The **"What may happen next"** and **"What you may need to do"** sections are still visible (with generic content)
- [ ] **F5** · Back on Q1 should return you to the **condition screen**, not the landing screen
- [ ] **F6** · Selecting a condition at this point and completing questions produces condition-specific content as expected (test: go back on Q1, select a condition, re-answer all questions)

---

## Section G — Urgent support flow

**Goal:** Confirm the urgent support pathway triggers correctly and displays the right screens.

### G1 — Trigger via Q5 "I need urgent help"

1. Start the check, select any condition (or skip)
2. Answer Q1–Q4 with any options
3. On Q5, select **"I need urgent help"**
4. Continue answering Q6 and Q7

- [ ] After answering Q7, you are taken to the **urgent support screen** — NOT directly to the stage result
- [ ] The urgent screen has a prominent red banner mentioning **999**
- [ ] The screen shows **emergency and urgent support services**
- [ ] A button is visible to **continue to your result** (or similar wording)
- [ ] Clicking that button takes you to the **stage result screen**
- [ ] On the stage result, an **amber support banner** is visible (says something like "You may benefit from speaking to someone")

### G2 — Trigger via Q7 "Yes, I am concerned"

1. Start a fresh check (click "Check in again" or reload), select any condition
2. Answer Q1–Q6 with anything (avoid Q5 "I need urgent help")
3. On Q7, select **"Yes, I am concerned"**

- [ ] You are taken to the **urgent support screen** after Q7
- [ ] The amber support banner appears on the result page

### G3 — Trigger via Q7 "Not sure"

1. Start a fresh check
2. Answer Q1–Q6 with anything
3. On Q7, select **"Not sure"**

- [ ] You are taken to the **urgent support screen** after Q7

### G4 — "Get help now" button (urgent help screen)

1. From any screen where the "Get help now" bar is visible (landing, result, directory), click it

- [ ] **G4a** · The screen that opens is titled **"Get help now"** (not "I need help now")
- [ ] **G4b** · A prominent call-out for **999** is visible at the top
- [ ] **G4c** · Emergency and urgent services are listed
- [ ] **G4d** · A **Bridgit Care AI** section is visible at the bottom of the screen
- [ ] **G4e** · A back button returns you to the previous screen

---

## Section H — Pressure check levels

**Goal:** Confirm the pressure check section shows the correct level based on answer patterns.

For each level, complete a full check (with any condition) using the answer pattern from the Quick Reference table, then check the result page.

**Note:** The pressure check section is titled something like **"How you have been managing"** on the result page.

### H1 — Low pressure

Use the "Low pressure" answer pattern from the Quick Reference.

- [ ] The pressure section heading or description reflects a **lower pressure level** (words like "managing well" or "things seem relatively steady" or similar calm language)
- [ ] No urgent or crisis language is present in this section

### H2 — Moderate pressure

Use the "Moderate pressure" answer pattern.

- [ ] The pressure section reflects **some strain** — language should acknowledge difficulty without being alarming
- [ ] The content is noticeably different from the low-pressure version

### H3 — High pressure (via answers)

Use the "High pressure via answers" pattern (Q6 = "I feel overwhelmed" + Q7 = "Yes, I am concerned").

- [ ] Note: Q7 "Yes, I am concerned" triggers the urgent screen — click through to the result
- [ ] On the result page, the pressure section reflects **significant pressure** — language should be more urgent and supportive
- [ ] An **amber support banner** is visible on this result

### H4 — High pressure (via urgent screen)

Use the "Urgent flow" answer pattern (Q5 = "I need urgent help").

- [ ] The urgent screen appears after Q7
- [ ] On the result page, the pressure section reflects **high pressure** (same as H3 in content level)

---

## Section I — Emotional validation (V2 Stage 6)

**Goal:** Confirm the "How you may be feeling" section shows appropriate content for the stage and pressure level.

- [ ] **I1** · Open `[TOOL URL]/?stage=1` — the emotional validation section should contain language appropriate for someone at the start of their caring journey (gentler, exploratory tone)
- [ ] **I2** · Open `[TOOL URL]/?stage=5` — the section should contain more supportive, urgent-aware language
- [ ] **I3** · Open `[TOOL URL]/?stage=6` — the section should contain the most supportive language
- [ ] **I4** · Do a full check with a **specific condition** selected and the **Stage 3 answer sequence** → the emotional validation content should be slightly different from Stage 3 without a condition selected (condition-specific variant, if available)
- [ ] **I5** · The section never tells the carer how they **must** feel, or uses clinical/diagnostic language — read the content and confirm it uses phrases like "many carers find", "it is common to", "you may notice"

---

## Section J — Progression reassurance (V2 Stage 7)

**Goal:** Confirm the "Caring rarely follows a straight line" section appears correctly and uses the correct variant for Stage 6.

- [ ] **J1** · Open `[TOOL URL]/?stage=1` — the section heading reads **"Caring rarely follows a straight line"**
- [ ] **J2** · Open `[TOOL URL]/?stage=3` — same heading, different bullet content is acceptable
- [ ] **J3** · Open `[TOOL URL]/?stage=5` — same heading
- [ ] **J4** · Open `[TOOL URL]/?stage=6` — the section heading reads **"This stage is not a permanent state"** (different from all other stages)
- [ ] **J5** · On Stage 6, the closing sentence mentions **"reaching out"** or **"getting support now"**
- [ ] **J6** · On any stage, the section includes at least 4 bullet points
- [ ] **J7** · None of the bullet points use the words "will", "guaranteed", or "inevitable" — the language should use "may", "can", "often", or similar
- [ ] **J8** · The section appears **between** the pressure check section and the "Learn more" expandable

---

## Section K — Condition-specific service suggestions (V2 Stage 8)

**Goal:** Confirm the service suggestions section shows and hides correctly based on condition selection.

- [ ] **K1** · Open `[TOOL URL]/?stage=3` (no condition selected via direct URL) — the **"Support that may fit your situation"** section is **not visible**
- [ ] **K2** · Do a full check with **Dementia or memory problems** selected and Stage 3 answers — the section is visible with the Alzheimer's Society listed and a real phone number shown
- [ ] **K3** · Do a full check with **Mental health condition** selected and Stage 3 answers — the section shows Mind and/or Rethink Mental Illness
- [ ] **K4** · Each service card shows: the service name, a brief description of why it is relevant, and at least one contact route (URL or phone)
- [ ] **K5** · At the bottom of the section, a link reads something like **"View all support"** — clicking it opens the support directory
- [ ] **K6** · Phone numbers in the section are real UK numbers (begin with 0800, 0808, 0300, 0333 — not placeholder numbers)
- [ ] **K7** · The section header uses soft language — phrases like "may fit" or "might be useful" — never "you must contact" or "you need to call"

---

## Section L — Copy, Share, and Print buttons

**Goal:** Confirm the copy, share, and print buttons work and produce clean output.

Open `[TOOL URL]/?stage=3` for this section.

### L1 — Copy my result

- [ ] Click the **"Copy my result"** button (or similar label)
- [ ] A brief confirmation message appears (e.g. "Copied!")
- [ ] Open a plain text editor (e.g. Notepad, Notes app) and paste
- [ ] The pasted text includes: stage number, stage title, the "What to do next" steps, help links
- [ ] The text does **not** include any HTML tags (`<div>`, `<p>`, etc.)
- [ ] The text includes a disclaimer at the bottom

### L2 — Share (Web Share API — mobile only)

This check is only relevant on a mobile phone (Android or iOS).

- [ ] On a mobile browser, a **Share** button appears alongside Copy
- [ ] Tapping Share opens the phone's native share sheet (e.g. WhatsApp, Messages, Email)
- [ ] On a desktop browser, the Share button may be hidden — this is expected

### L3 — Download my result / Print Carer Roadmap

- [ ] Click the **"Print Carer Roadmap"** button (or similar wording with a printer icon)
- [ ] The browser's print dialog opens
- [ ] In the print preview, the document shows a clean, structured layout — **not** the app with buttons and navigation
- [ ] The print preview includes: stage number, stage name, the main content sections, help links, and a date
- [ ] Cancel the print dialog — the tool returns to the result screen with no visible errors
- [ ] The print preview does **not** show the Insights passphrase, any admin URLs, or internal notes

---

## Section M — Action plan (Your next 7 days)

**Goal:** Confirm the action plan section works end-to-end.

Open `[TOOL URL]/?stage=3` for this section.

- [ ] **M1** · The "Your next 7 days" section is visible with 3–5 suggested actions listed
- [ ] **M2** · Each action has a title, a short description, and a suggested timescale
- [ ] **M3** · Clicking the checkbox next to an action marks it as done (visual change — strikethrough or tick visible)
- [ ] **M4** · A progress bar or counter updates to reflect the number completed
- [ ] **M5** · Mark all actions as complete — a **completion message** appears
- [ ] **M6** · A **"Copy action plan"** button appears — clicking it puts a text summary on the clipboard (paste into Notepad to verify)
- [ ] **M7** · A **"Reset"** button appears once at least one item is ticked — clicking it (after confirming) clears all ticks

---

## Section N — Professional mode and conversation prompts (V2 Stage 10)

**Goal:** Confirm the professional mode toggle works, the Discussion guide appears, and focus chips render correct prompts.

### N1 — Toggle on

- [ ] From the **landing screen**, a toggle or switch reads **"Use with someone"** or **"Professional mode"** (or similar)
- [ ] Clicking the toggle enables professional mode — a brief explanation appears below the toggle
- [ ] Start the check with any condition, use the Stage 3 answer sequence, reach the result

On the result page in professional mode:
- [ ] **N2** · A green **professional guidance banner** is visible at the top of the result
- [ ] **N3** · An **"Agreed next step"** section is visible — it lists the same steps as "What to do next" but as selectable buttons
- [ ] **N4** · Clicking one of the agreed-step buttons marks it as selected (visual highlight) and saves it
- [ ] **N5** · A **"Discussion guide"** section is visible, collapsed by default
- [ ] **N6** · Opening the Discussion guide shows four focus chips: **Opening · Practical · Support · Reflection**

### N2 — Session focus chips

- [ ] **N7** · Click the **"Opening"** chip — the chip becomes highlighted (appears selected)
- [ ] **N8** · The Discussion guide section now shows 4 prompts relevant to opening a conversation with a carer at this stage
- [ ] **N9** · The prompts are open-ended questions — none start with "Do you…" or can be answered with Yes/No
- [ ] **N10** · Click **"Practical"** — the prompts change to practical questions (about tasks, money, work, etc.)
- [ ] **N11** · Click **"Support"** — prompts change to support-related questions
- [ ] **N12** · Click **"Reflection"** — prompts change to reflection questions
- [ ] **N13** · Click the **active chip again** (the one currently highlighted) — it deselects and the section returns to the default prompt list
- [ ] **N14** · Repeat the focus chip test on a Stage 1 result and a Stage 5 result — confirm the prompts are different across stages (the tool has 6 different sets)

### N3 — Session summary

- [ ] **N15** · A **"View session summary"** button is visible at the bottom of the result in professional mode
- [ ] **N16** · Clicking it opens a full-screen session summary
- [ ] **N17** · The summary includes: stage, agreed next step (if set), the "What to do next" steps, help links
- [ ] **N18** · A **"Copy session summary"** button is present — clicking it copies the text (verify by pasting into Notepad)
- [ ] **N19** · The copied text includes the selected focus (e.g. "Focus: Practical") and the focus-specific prompts
- [ ] **N20** · A back button returns to the result screen

### N4 — Toggle off

- [ ] **N21** · Return to the landing screen and toggle professional mode **off**
- [ ] **N22** · Start a fresh check and reach a result — the green professional banner and Discussion guide section should be **gone**
- [ ] **N23** · The "Agreed next step" section should not be visible

---

## Section O — Support directory

**Goal:** Confirm the directory opens, filters work, and condition-aware sorting is applied.

- [ ] **O1** · From the landing screen, click **"View support directory"** (or similar link) — the support directory screen opens
- [ ] **O2** · A list of services is visible — at least 10 entries
- [ ] **O3** · Category filter chips are visible — click **"Financial support"** — the list filters to only financial services
- [ ] **O4** · Click the same chip again (or an "All" chip) to remove the filter
- [ ] **O5** · Type a word into the search box (e.g. "Carers") — the list filters to matching services
- [ ] **O6** · Clear the search — all services reappear
- [ ] **O7** · Do a full check with **Dementia or memory problems** selected, then click "View all support" from the result page — the directory opens and dementia-relevant services appear at the top with a **"Suggested for your situation"** badge
- [ ] **O8** · A **"Suggested for my situation"** filter chip is visible — clicking it shows only the condition-matched services; clicking again removes the filter
- [ ] **O9** · The safeguarding note is visible (mentions "This tool is for information and guidance only")
- [ ] **O10** · Phone numbers shown as links — on mobile, tapping one should offer to dial

---

## Section P — Privacy screen

**Goal:** Confirm the privacy screen is accessible, complete, and accurate.

- [ ] **P1** · From the landing screen, click the **"Privacy"** link in the footer meta-links
- [ ] **P2** · A full-screen privacy information page opens (not a pop-up modal)
- [ ] **P3** · The "Get help now" bar is **not** visible on this screen
- [ ] **P4** · The screen covers: what is stored, what is never stored, that there are no cookies, how to delete data
- [ ] **P5** · The text confirms that **nothing is sent externally** and all data stays on the device
- [ ] **P6** · The text confirms that **no names, contact details, or medical information** are stored
- [ ] **P7** · A **back button** is visible and returns you to the landing screen
- [ ] **P8** · Also verify: from the **About this tool** modal (click "About this tool" on landing), there is a link that opens the privacy screen

---

## Section Q — Accessibility statement

**Goal:** Confirm the accessibility statement is accessible and contains expected information.

- [ ] **Q1** · From the landing screen, click the **"Accessibility"** link in the footer meta-links
- [ ] **Q2** · A full-screen accessibility statement opens
- [ ] **Q3** · The statement mentions **WCAG 2.1 AA** (Web Content Accessibility Guidelines)
- [ ] **Q4** · There is a list of implemented accessibility features (e.g. skip navigation, focus indicators, minimum touch target sizes)
- [ ] **Q5** · There is a section covering **known limitations**
- [ ] **Q6** · There is a way to provide feedback or report accessibility issues
- [ ] **Q7** · A back button returns you to the landing screen

---

## Section R — About panel

**Goal:** Confirm the About modal is accurate and its links work.

- [ ] **R1** · Click **"About this tool"** from the landing screen
- [ ] **R2** · A modal or panel slides up — it includes "This tool helps you" and "This tool does not" sections
- [ ] **R3** · The "does not" list includes phrases like "give medical advice" and "replace professional assessment"
- [ ] **R4** · A privacy summary is present (mentions device-only storage, no external sending)
- [ ] **R5** · A link or button reading **"Read the full privacy information"** is present — clicking it closes the modal and opens the privacy screen
- [ ] **R6** · Pressing Escape or clicking outside the modal closes it

---

## Section S — Insights screen (internal access only)

**Goal:** Confirm Insights requires a passphrase and shows anonymous stats.

- [ ] **S1** · From the landing screen, click the **"Insights"** link — you are shown a passphrase entry screen (not the Insights data directly)
- [ ] **S2** · Enter the wrong passphrase — an "Access not authorised" message appears and the input is cleared
- [ ] **S3** · Enter the correct passphrase: **cts-insights** — the Insights screen opens
- [ ] **S4** · An **"Internal use only"** badge is visible
- [ ] **S5** · Usage statistics are shown (checks started, checks completed)
- [ ] **S6** · A stage distribution display is visible (may show zero counts if this is a fresh test device)
- [ ] **S7** · A **"Copy report summary"** or similar button is visible
- [ ] **S8** · Click "Copy report summary" — paste into Notepad — the text includes the tool name, date, and anonymous figures
- [ ] **S9** · Also accessible via URL: `[TOOL URL]/?mode=insights` — confirm it also asks for the passphrase

---

## Section T — Service worker and offline behaviour

**Goal:** Confirm the tool loads from cache when offline and shows a warning banner.

### T1 — First visit caching

- [ ] Open `[TOOL URL]` in Chrome on a fresh profile or after clearing site data
- [ ] Open DevTools (F12) → Application → Service Workers
- [ ] Confirm a service worker is registered with status **"activated and running"**
- [ ] Open Application → Cache Storage — confirm a cache named something like **mcsc-v28** is listed

### T2 — Offline banner

- [ ] With the tool open, open DevTools → Network tab → change the throttle dropdown to **"Offline"**
- [ ] A yellow or amber banner should appear near the bottom of the screen reading something like **"You appear to be offline. External links may not open."**
- [ ] Change the Network tab back to **"No throttling"** — the banner should disappear

### T3 — Offline load

- [ ] With DevTools Network set to Offline, **reload the page** (Ctrl+R)
- [ ] The tool should still load from cache — you should see the landing screen, not a browser error page
- [ ] Navigate to a stage result (use `[TOOL URL]/?stage=3`) — the result should load
- [ ] Set Network back to "No throttling"

### T4 — Cache version

- [ ] In DevTools → Application → Cache Storage → click the `mcsc-v28` cache → confirm it contains entries for `index.html`, `sw.js`, `manifest.json`, and files under `src/content/` including `progressionGuidance.js`, `serviceSuggestions.js`, and `conversationPrompts.js`

---

## Section U — Mobile layout

**Goal:** Confirm the tool is usable and readable on a real mobile phone.

Use a real iPhone or Android phone (not a simulated device in DevTools). Open `[TOOL URL]` in the phone's default browser.

- [ ] **U1** · The landing screen fits the phone screen without horizontal scrolling
- [ ] **U2** · All text is readable without zooming in
- [ ] **U3** · The "Start the check" button is easy to tap — large enough without misclicks
- [ ] **U4** · The condition screen options are easy to tap on a small screen
- [ ] **U5** · Answer buttons on the question screens are tall enough to tap comfortably
- [ ] **U6** · The result page is readable by scrolling vertically — no content is cut off or overflows horizontally
- [ ] **U7** · The "Get help now" bar at the bottom does not obscure the last content on any screen
- [ ] **U8** · The Print Roadmap button — tapping it opens a print/share sheet on iPhone or the print dialog on Android
- [ ] **U9** · The Share button appears on the result page (it may be hidden on desktop but should be visible on mobile)
- [ ] **U10** · The support directory filter chips scroll horizontally if there are too many to fit — no chips are hidden or broken
- [ ] **U11** · The session focus chips (in professional mode) are easy to tap and clearly show which one is active

---

## Section V — Keyboard navigation

**Goal:** Confirm the tool is usable without a mouse.

On a desktop or laptop, use only the keyboard (Tab, Shift+Tab, Enter, Space, Escape).

- [ ] **V1** · From the landing screen, press **Tab** — focus should move visibly between interactive elements (buttons, links) in a logical order
- [ ] **V2** · A **"Skip to main content"** link should appear at the very top when you first press Tab (it is hidden visually until focused)
- [ ] **V3** · Press **Enter** on the "Start the check" button — the condition screen opens
- [ ] **V4** · Tab through the condition options and press **Enter** to select one — advances to Q1
- [ ] **V5** · Tab through the answer options on a question — pressing **Enter** on one should select it and advance
- [ ] **V6** · Focus is moved to the new screen on each navigation (you should not have to Tab back to the top manually)
- [ ] **V7** · Open the About modal, then press **Escape** — the modal closes and focus returns to the landing screen
- [ ] **V8** · The "Get help now" bar is reachable by Tab

---

## Section W — Error handling and edge cases

**Goal:** Confirm that error states are handled gracefully.

### W1 — Global error banner

- [ ] Open `[TOOL URL]` in Chrome
- [ ] Open DevTools → Console tab
- [ ] In the console, type: `throw new Error('QA test error')` and press Enter
- [ ] A red error banner should appear at the top of the page reading something like **"Something went wrong. Please refresh the page."**
- [ ] Click the **×** button on the banner — it dismisses
- [ ] The tool is still usable (you can still navigate)

### W2 — Direct URL shortcuts

- [ ] `[TOOL URL]/?stage=1` → Stage 1 result (no questions asked)
- [ ] `[TOOL URL]/?stage=6` → Stage 6 result
- [ ] `[TOOL URL]/?stage=7` → Should not crash — should either show the landing screen or Stage 6 (no Stage 7 exists)
- [ ] `[TOOL URL]/?mode=insights` → Passphrase screen
- [ ] `[TOOL URL]/?mode=review` → Launch checklist screen (internal tool)

### W3 — Refresh mid-check

- [ ] Start the check, select a condition, answer Q3
- [ ] Press **F5** to refresh
- [ ] The tool should return to the **landing screen** without an error (answers from a partial check are not saved)

### W4 — Multiple checks and history

- [ ] Complete a full check twice (use different stage answer sequences)
- [ ] On the second result, a **"Last time, your result was Stage X"** comparison banner should appear at the top of the result
- [ ] After 2 or more checks, a check-in **history timeline** should be visible on the result page

---

## Section X — Final content quality checks

**Goal:** A quick read-through for tone, language, and accuracy.

Read each of the following and confirm there are no issues:

- [ ] **X1** · The safety notice on the landing screen correctly says to call **999** for emergencies
- [ ] **X2** · The safeguarding note on the result page does not imply clinical diagnosis or risk assessment
- [ ] **X3** · No stage result uses words like "you will deteriorate", "inevitable", or "you must do this"
- [ ] **X4** · The service suggestions (Section K) all show real UK charity names and real freephone numbers (0800/0808 prefix)
- [ ] **X5** · The Bridgit Care AI card on every stage includes the note "Bridgit provides guidance but does not replace emergency or professional support"
- [ ] **X6** · The privacy screen does not claim the tool is GDPR-exempt — it says no personal data is stored
- [ ] **X7** · The About modal does not make any claim that the tool formally assesses risk or replaces a carer's assessment

---

## Tester sign-off

| Field | Value |
|---|---|
| Tester name | |
| Date tested | |
| Browser and version | |
| Device tested on (desktop + mobile) | |
| Tool URL tested | |
| Any failures recorded? | Yes / No |
| Number of items marked Fail | |
| Tester notes | |

---

## Failure log

Use this table to record any failed checks.

| Section | Item | What you saw | What was expected | Screenshot? |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

---

*End of QA test script. Total checkable items: approx. 175.*
