/* ═══════════════════════════════════════════════════════════════
   QUESTION CONTENT, SCORING, AND SAFETY TRIGGERS
   Edit question text, answer options, and point values here.

   Rules:
   - Answer strings in QUESTIONS and SCORING_MAP must match exactly.
   - SAFETY_TRIGGERS and SUPPORT_BANNER_TRIGGERS reference answer
     strings — update both if answer text changes.
   - Q6 (coping, index 5) is intentionally weighted higher than
     other questions; do not normalise without checking stage bands.

   Future multi-language support:
     - Create questions-cy.js (Welsh) etc. for translated text.
     - Keep SCORING_MAP values and SCORE_BANDS numeric — they are
       language-neutral and do not need separate files.
════════════════════════════════════════════════════════════════ */

const QUESTIONS = [
  {
    text: "Has the person you care for received a diagnosis or clear explanation?",
    answers: [
      "No, we are still waiting",
      "Yes, but I do not understand it yet",
      "Yes, I understand the basics",
      "Yes, and care needs are already changing",
    ],
  },
  {
    text: "Do you see yourself as a carer?",
    answers: [
      "No",
      "Not sure",
      "Yes, but I am new to it",
      "Yes, I have been doing this for a while",
    ],
  },
  {
    text: "How organised does the situation feel?",
    answers: [
      "Chaotic",
      "Some things are in place",
      "Mostly organised",
      "Stable but needs reviewing",
    ],
  },
  {
    text: "What is your biggest pressure right now?",
    answers: [
      "Understanding what is happening",
      "Knowing what I should be doing",
      "Managing appointments, medication, or tasks",
      "Feeling tired, stressed, or isolated",
      "Planning for the future",
    ],
  },
  {
    text: "Do you have support in place?",
    answers: [
      "No",
      "A little",
      "Some family or friends",
      "Professional or carer support is involved",
      "I need urgent help",
    ],
  },
  {
    text: "How are you coping personally?",
    answers: [
      "I am coping fine",
      "Some days are difficult",
      "I feel overwhelmed",
      "I am exhausted or close to burnout",
    ],
  },
  {
    text: "Is anyone at risk right now?",
    answers: [
      "No",
      "Not sure",
      "Yes, I am concerned",
    ],
  },
];

const TOTAL = QUESTIONS.length;

/* ═══════════════════════════════════════════════════════════════
   SCORING MAP
   Point value per answer. Edit values to adjust scoring.
   Q6 (coping, index 5) is weighted higher by design.
════════════════════════════════════════════════════════════════ */
const SCORING_MAP = [
  // Q1 — Diagnosis
  {
    "No, we are still waiting":                  0,
    "Yes, but I do not understand it yet":       1,
    "Yes, I understand the basics":              2,
    "Yes, and care needs are already changing":  4,
  },
  // Q2 — Carer identity
  {
    "No":                                        0,
    "Not sure":                                  1,
    "Yes, but I am new to it":                   2,
    "Yes, I have been doing this for a while":   4,
  },
  // Q3 — Organisation
  {
    "Chaotic":                                   1,
    "Some things are in place":                  2,
    "Mostly organised":                          3,
    "Stable but needs reviewing":                5,
  },
  // Q4 — Pressure
  {
    "Understanding what is happening":           1,
    "Knowing what I should be doing":            2,
    "Managing appointments, medication, or tasks": 3,
    "Feeling tired, stressed, or isolated":      5,
    "Planning for the future":                   4,
  },
  // Q5 — Support (urgent answer also triggers safety override)
  {
    "No":                                        2,
    "A little":                                  2,
    "Some family or friends":                    3,
    "Professional or carer support is involved": 3,
    "I need urgent help":                        5,
  },
  // Q6 — Coping (extra weight — values are higher)
  {
    "I am coping fine":                          0,
    "Some days are difficult":                   3,
    "I feel overwhelmed":                        6,
    "I am exhausted or close to burnout":        8,
  },
  // Q7 — Risk (also triggers safety override)
  {
    "No":                                        0,
    "Not sure":                                  2,
    "Yes, I am concerned":                       3,
  },
];

/* ═══════════════════════════════════════════════════════════════
   SCORE BANDS
   Minimum score (inclusive) to reach each stage.
   Edit these numbers to change stage thresholds.
════════════════════════════════════════════════════════════════ */
const SCORE_BANDS = [
  { minScore: 0,  stageIndex: 0 },  // Stage 1
  { minScore: 6,  stageIndex: 1 },  // Stage 2
  { minScore: 11, stageIndex: 2 },  // Stage 3
  { minScore: 16, stageIndex: 3 },  // Stage 4
  { minScore: 21, stageIndex: 4 },  // Stage 5
  { minScore: 26, stageIndex: 5 },  // Stage 6
];

/* ═══════════════════════════════════════════════════════════════
   SAFETY OVERRIDE TRIGGERS
   Any matching answer routes to the urgent screen first.
   questionIndex is 0-based.
════════════════════════════════════════════════════════════════ */
const SAFETY_TRIGGERS = [
  { questionIndex: 4, answer: "I need urgent help" },
  { questionIndex: 6, answer: "Not sure" },
  { questionIndex: 6, answer: "Yes, I am concerned" },
];

/* ═══════════════════════════════════════════════════════════════
   SUPPORT BANNER TRIGGERS
   Any matching answer shows the calm amber banner on the result
   page (separate from the urgent screen).
════════════════════════════════════════════════════════════════ */
const SUPPORT_BANNER_TRIGGERS = [
  { questionIndex: 4, answer: "I need urgent help" },
  { questionIndex: 5, answer: "I feel overwhelmed" },
  { questionIndex: 5, answer: "I am exhausted or close to burnout" },
  { questionIndex: 6, answer: "Not sure" },
  { questionIndex: 6, answer: "Yes, I am concerned" },
];
