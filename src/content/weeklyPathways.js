/* ═══════════════════════════════════════════════════════════════
   WEEKLY PATHWAY CONTENT — V2.5 Feature 3
   Stage-specific gentle guidance for the coming week.

   Rules:
   - Language must be calm, validating, non-prescriptive.
   - Use "may", "might", "some carers find", "when you feel ready".
   - Never use "must", "should", "keep going", "don't fall behind".
   - today:       1–2 items — immediate and achievable.
   - nextFewDays: 2–3 items — gentle actions for the next 2–3 days.
   - thisWeek:    2–3 items — broader goals for the week.
   - whenReady:   2–3 items — lowest pressure, no time expectation.
   - Each item: { text, hint }
     - text: short, gentle imperative (max ~12 words)
     - hint: supporting note, reassurance, or context (optional)
════════════════════════════════════════════════════════════════ */

const WEEKLY_PATHWAYS = {

  stage1: {
    intro: "These are ideas, not a to-do list. Take what feels useful and leave the rest.",
    today: [
      {
        text: "Acknowledge that what you are doing is caring — even if it has not felt that way",
        hint: "Naming it is often the first step towards finding the right support",
      },
      {
        text: "Write down one thing about your situation that feels uncertain",
        hint: "You do not need to solve it today — just naming it can make it feel more manageable",
      },
    ],
    nextFewDays: [
      {
        text: "Look up Carers Trust Solihull or your nearest carers centre online",
        hint: "Just browsing counts — no commitment needed at this stage",
      },
      {
        text: "Check whether there is a local carers group that meets near you",
        hint: "Many groups meet informally — you can read about them before deciding anything",
      },
    ],
    thisWeek: [
      {
        text: "Tell one person in your life that you are in a caring role",
        hint: "A friend, family member, or GP receptionist — whoever feels right",
      },
      {
        text: "Read through this result at your own pace",
        hint: "There is no rush — the information will still be here when you come back",
      },
    ],
    whenReady: [
      {
        text: "Consider registering as a carer at your GP surgery",
        hint: "This can help with flexible appointments and access to carer-specific support",
      },
      {
        text: "Find out whether you qualify for a free carer's assessment",
        hint: "A carer's assessment is a conversation about your needs — it is not a test or judgment",
      },
    ],
  },

  stage2: {
    intro: "Some carers at this stage find it helps to take one small step at a time. These ideas are here if they are useful.",
    today: [
      {
        text: "Find the contact details for your local carers centre",
        hint: "You do not have to call today — just knowing where it is can feel like progress",
      },
      {
        text: "Think about what one thing would make the biggest difference to your week",
        hint: "Even a rough idea helps when it comes to asking for support later",
      },
    ],
    nextFewDays: [
      {
        text: "Make first contact with your local carers centre — by phone, online, or in person",
        hint: "You can simply say you are not sure where to start",
      },
      {
        text: "Let one person know how things have been going",
        hint: "A brief message counts — you do not need to explain everything at once",
      },
    ],
    thisWeek: [
      {
        text: "Read about what a carer's assessment involves",
        hint: "It is free, voluntary, and focused on your needs — not a check on how you are coping",
      },
      {
        text: "Look at what local services are available for the person you care for",
        hint: "The support directory in this tool lists some local options worth exploring",
      },
    ],
    whenReady: [
      {
        text: "Consider speaking to your GP about your caring role",
        hint: "Your own health matters too — GPs can also refer you to additional support services",
      },
      {
        text: "Check whether your employer has a carers policy or flexible working options",
        hint: "Many employers have support in place that is not widely advertised",
      },
    ],
  },

  stage3: {
    intro: "You are already connected with some support. These ideas are gentle next steps — take them at your own pace.",
    today: [
      {
        text: "Name the one thing that feels hardest right now",
        hint: "You do not need to fix it today — acknowledging it can ease some of the weight",
      },
      {
        text: "Take a short break today, even five minutes of quiet",
        hint: "Small pauses matter — they do not need to be long to make a difference",
      },
    ],
    nextFewDays: [
      {
        text: "Tell your support worker or carers contact how things really are at the moment",
        hint: "It is okay to say it has been harder than you have let on",
      },
      {
        text: "Look into what respite options might be available to you",
        hint: "Even a few hours away from caring can make a real difference — it is worth asking",
      },
    ],
    thisWeek: [
      {
        text: "Look at the action plan on this screen and pick one item that feels doable",
        hint: "You do not need to do everything — one small step is enough",
      },
      {
        text: "Check in with the person you care for about how they are feeling too",
        hint: "Sometimes a shared check-in can ease pressure on both sides",
      },
    ],
    whenReady: [
      {
        text: "Ask your carers centre about emergency or planned short breaks",
        hint: "Planning ahead — even for a short break — can give you something to look forward to",
      },
      {
        text: "Think about whether your support has kept pace with how things have changed",
        hint: "Needs evolve — it is always worth reviewing whether current support still fits",
      },
    ],
  },

  stage4: {
    intro: "Some carers at this stage find that reconnecting with people around them, however briefly, helps ease the sense of doing it alone.",
    today: [
      {
        text: "Reach out to one person today — a friend, family member, or fellow carer",
        hint: "A short message counts — you do not need to explain everything",
      },
      {
        text: "Notice one thing that went reasonably well today, however small",
        hint: "Some carers find that naming small positives helps balance out harder moments",
      },
    ],
    nextFewDays: [
      {
        text: "Look into a local or online carers group you have not tried before",
        hint: "Carers groups are often more informal than you might expect",
      },
      {
        text: "Think about one task you could ask someone else to take on, even temporarily",
        hint: "Accepting help is a skill — it tends to get easier with practice",
      },
    ],
    thisWeek: [
      {
        text: "Plan one activity that is just for you — not for the person you care for",
        hint: "This could be a walk, something you enjoy watching, or time with a friend",
      },
      {
        text: "Check whether the services in place still feel like the right fit",
        hint: "Needs change over time — it is worth making sure things have not quietly drifted",
      },
    ],
    whenReady: [
      {
        text: "Request a review of your carer's assessment if your situation has changed",
        hint: "Assessments can be updated — you do not have to wait for a crisis to ask",
      },
      {
        text: "Think about longer-term planning — what happens if things become harder?",
        hint: "The contingency planner in this tool can help you think this through at your own pace",
      },
    ],
  },

  stage5: {
    intro: "Things sound genuinely hard at the moment. These ideas are about getting support, not adding pressure.",
    today: [
      {
        text: "Contact Carers Trust Solihull or a carers support line today",
        hint: "You do not need a specific question — saying 'I am struggling' is enough to start",
      },
      {
        text: "Talk to someone you trust about how things are",
        hint: "You do not have to manage this alone — letting someone in can ease the weight",
      },
    ],
    nextFewDays: [
      {
        text: "Book an appointment with your GP and mention you are a carer under significant strain",
        hint: "GPs can refer carers to mental health support, respite services, and other help",
      },
      {
        text: "Ask your carers contact for an urgent review of your situation",
        hint: "You do not need to wait for a scheduled review if things have become unsustainable",
      },
    ],
    thisWeek: [
      {
        text: "Accept any practical help that is offered to you this week",
        hint: "Taking help is the right thing to do right now — it is not a sign of failure",
      },
      {
        text: "Find out what emergency or short-term respite might be possible",
        hint: "Even a few days' rest can help you recover and think more clearly",
      },
    ],
    whenReady: [
      {
        text: "Think about whether your caring arrangement is sustainable as it currently stands",
        hint: "It is okay to reach a point where something needs to change — that is honest, not giving up",
      },
      {
        text: "Explore what additional professional care support could look like",
        hint: "More professional involvement can reduce the pressure that currently falls on you",
      },
    ],
  },

  stage6: {
    intro: "Right now, getting support is the most important thing. These ideas focus on that first.",
    today: [
      {
        text: "Contact a support service today — Carers Trust Solihull, your GP, or a carers helpline",
        hint: "If there is immediate danger, call 999. If you are struggling, please reach out — you do not have to say much",
      },
      {
        text: "Tell someone close to you how serious things feel",
        hint: "Carrying this alone makes everything harder — one honest conversation can matter",
      },
    ],
    nextFewDays: [
      {
        text: "Ask for an urgent review from social services or your care coordinator",
        hint: "If there are safeguarding concerns, services can act quickly — do not hesitate to ask",
      },
      {
        text: "Speak to your GP about your mental and physical health",
        hint: "Your wellbeing needs attention now — not after things improve",
      },
    ],
    thisWeek: [
      {
        text: "Accept any emergency respite or practical support that is offered",
        hint: "Taking a break is not giving up — it is what helps you keep going",
      },
      {
        text: "Let go of non-essential tasks this week",
        hint: "Some things can wait. Right now, your wellbeing is what matters most",
      },
    ],
    whenReady: [
      {
        text: "Think about whether your current caring arrangement can continue as it is",
        hint: "It is honest, not failure, to say that something needs to change",
      },
      {
        text: "Explore what a different caring arrangement might look like",
        hint: "More professional care, different family involvement, or planned respite — all are worth considering",
      },
    ],
  },

};
