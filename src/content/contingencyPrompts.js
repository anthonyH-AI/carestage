/* ═══════════════════════════════════════════════════════════════
   CONTINGENCY PLANNING PROMPTS — V2.5
   Content for the "If you suddenly needed help" mini-tool.

   Rules:
   - Keep prompts practical and calm — not alarming.
   - Never ask for: NHS numbers, diagnoses, passwords, bank details,
     or any information a carer might regret writing down.
   - Section IDs and prompt IDs must not be renamed after deployment —
     they are used as localStorage keys.
   - Add new sections by appending to the sections array.
   - Add new prompts by appending to a section's prompts array.
     Appending is safe; re-ordering would break stored data.
════════════════════════════════════════════════════════════════ */

const CONTINGENCY_PROMPTS = {
  sections: [
    {
      id:    "who-could-help",
      title: "Who could step in",
      icon:  "👤",
      intro: "Think about who could provide care, even temporarily, if you were suddenly unable to. You do not need a perfect answer — a rough idea is enough to start.",
      prompts: [
        {
          id:        "p1",
          label:     "Name and their relationship to you",
          hint:      "e.g. brother, neighbour, close friend",
          multiline: false,
        },
        {
          id:        "p2",
          label:     "How to contact them",
          hint:      "Phone number or email",
          multiline: false,
        },
        {
          id:        "p3",
          label:     "What they already know about the caring situation",
          hint:      "A few words is fine",
          multiline: true,
        },
        {
          id:        "p4",
          label:     "Any limits on when or how they could help",
          hint:      "e.g. only available at certain times, lives far away",
          multiline: true,
        },
      ],
    },

    {
      id:    "important-routines",
      title: "Important routines",
      icon:  "📋",
      intro: "What does a typical day look like? Someone stepping in would need to know what happens and when.",
      prompts: [
        {
          id:        "p1",
          label:     "Morning routine",
          hint:      "What needs to happen and in what order",
          multiline: true,
        },
        {
          id:        "p2",
          label:     "Mealtimes and diet",
          hint:      "Any preferences, restrictions, or things to avoid",
          multiline: true,
        },
        {
          id:        "p3",
          label:     "Evening or bedtime routine",
          hint:      "Anything that helps the person settle",
          multiline: true,
        },
        {
          id:        "p4",
          label:     "Anything that must not be missed",
          hint:      "Regular appointments, activities, or essential tasks",
          multiline: true,
        },
      ],
    },

    {
      id:    "important-contacts",
      title: "Important contacts",
      icon:  "📞",
      intro: "Who else is involved in the care? A brief list helps anyone stepping in know who to call.",
      prompts: [
        {
          id:        "p1",
          label:     "GP surgery",
          hint:      "Name and phone number",
          multiline: false,
        },
        {
          id:        "p2",
          label:     "Pharmacy",
          hint:      "Name and phone number",
          multiline: false,
        },
        {
          id:        "p3",
          label:     "Any key workers or support staff already involved",
          hint:      "Name, role, and how to reach them",
          multiline: true,
        },
        {
          id:        "p4",
          label:     "Anyone else who should be contacted if you are not available",
          hint:      "e.g. social worker, community nurse, day centre",
          multiline: true,
        },
      ],
    },

    {
      id:    "medication-notes",
      title: "Medication and support notes",
      icon:  "💊",
      intro: "Brief notes about medication timing can make a real difference in an emergency. Do not include NHS numbers, diagnoses, or detailed medical history here.",
      prompts: [
        {
          id:        "p1",
          label:     "Current medications — name, dose, and timing",
          hint:      "e.g. one tablet at 8am, one at 8pm. Not diagnosis or prescription numbers.",
          multiline: true,
        },
        {
          id:        "p2",
          label:     "How medication is taken",
          hint:      "e.g. tablet, liquid, patch — any special instructions",
          multiline: true,
        },
        {
          id:        "p3",
          label:     "Any allergies or important reactions to be aware of",
          hint:      "Keep brief — this is a planning note, not a medical record",
          multiline: true,
        },
        {
          id:        "p4",
          label:     "Medical equipment that needs managing",
          hint:      "e.g. mobility aids, hearing aids, oxygen supply",
          multiline: true,
        },
      ],
    },

    {
      id:    "quick-to-know",
      title: "Things to know quickly",
      icon:  "⚡",
      intro: "What would someone need to know in the first hour? These are the things that are not obvious from the outside.",
      prompts: [
        {
          id:        "p1",
          label:     "Likes, dislikes, or comfort items that matter",
          hint:      "What helps them feel settled or reassured",
          multiline: true,
        },
        {
          id:        "p2",
          label:     "How they communicate best",
          hint:      "e.g. speaks clearly, uses short phrases, uses non-verbal cues",
          multiline: true,
        },
        {
          id:        "p3",
          label:     "What to avoid or what can upset them",
          hint:      "Situations, topics, sensory issues, things that cause distress",
          multiline: true,
        },
        {
          id:        "p4",
          label:     "What helps when they are anxious, in pain, or distressed",
          hint:      "A calming strategy or approach that works",
          multiline: true,
        },
      ],
    },

    {
      id:    "backup-ideas",
      title: "Backup ideas",
      icon:  "🔄",
      intro: "If your first option is not available, what else could work? Even rough ideas are worth noting.",
      prompts: [
        {
          id:        "p1",
          label:     "If your main backup cannot help, who else might?",
          hint:      "A second or third person who could step in",
          multiline: true,
        },
        {
          id:        "p2",
          label:     "Local services or groups that could help short-term",
          hint:      "e.g. carers centre, day service, neighbour network",
          multiline: true,
        },
        {
          id:        "p3",
          label:     "What a short-term care arrangement might look like",
          hint:      "e.g. respite stay, rota of helpers, temporary professional care",
          multiline: true,
        },
        {
          id:        "p4",
          label:     "Any care agency or professional service that could be called",
          hint:      "Name and contact number if known",
          multiline: true,
        },
      ],
    },
  ],
};
