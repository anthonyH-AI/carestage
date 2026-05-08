/* ═══════════════════════════════════════════════════════════════
   NEXT STAGE GUIDANCE — V2 Stage 2
   "What may happen next" content for the result page.

   HOW THIS FILE WORKS
   ───────────────────
   NEXT_STAGE_GUIDANCE is keyed by stage number (1–6).
   Each stage object has a 'generic' array (shown if no condition
   is selected or no matching condition exists) plus optional
   condition-specific arrays keyed by condition id.

   Condition ids match CONDITIONS in src/content/conditions.js:
     dementia | physical | mental-health | neurological |
     learning-disability | frailty | not-sure | other

   SAFE LANGUAGE RULES — MUST be followed in all content
   ──────────────────────────────────────────────────────
   ✅  Use:   may, might, can, sometimes, often, some carers, could
   ✅  Use:   "You may find…", "Some carers notice…", "Over time…"
   ❌  Avoid: will, guaranteed, inevitable, certain, definitely
   ❌  Never write: "This will happen", "You are likely to", "You will"

   This section must:  support preparation · reduce uncertainty ·
                       encourage earlier support
   This section must NOT: frighten users · suggest diagnosis ·
                          act like a clinical prognosis

   To add a new condition, match the id from conditions.js and
   add an array of 3–5 bullet strings to each stage object.

   To add a new language, create nextSteps-cy.js (Welsh) etc.
   Keep ids identical across locale files.
════════════════════════════════════════════════════════════════ */

const NEXT_STAGE_GUIDANCE = {

  /* ── Stage 1 — Just Starting Out ─────────────────────────── */
  1: {
    generic: [
      "Caring responsibilities can increase gradually as the situation develops",
      "More appointments or assessments may come up over the coming months",
      "You may find yourself with more questions about what support is available",
      "Feelings of uncertainty about the future are very common at this stage",
      "Practical tasks around the home can begin to take more time",
    ],
    dementia: [
      "Questions or conversations may sometimes be repeated more often",
      "Familiar routines can become increasingly important for the person you care for",
      "Moments of confusion or disorientation may occur from time to time",
      "Safety at home may become something worth thinking about early",
      "Some daily tasks can take longer as the situation gradually changes",
    ],
    physical: [
      "Physical tasks such as moving around or personal care may gradually need more support",
      "Fatigue levels can change for both you and the person you care for",
      "Medical appointments and prescription management may become more frequent",
      "Mobility challenges can sometimes increase over time",
      "Equipment or home adaptations may be helpful to consider at some point",
    ],
    'mental-health': [
      "Mood and motivation may vary from day to day for the person you care for",
      "Emotional support needs can grow over time",
      "Periods of withdrawal or low energy sometimes occur",
      "Routines and consistency can often help, though they may need adjusting",
      "Some carers find it helpful to seek support for themselves early on",
    ],
    neurological: [
      "Some symptoms may change or progress at an unpredictable pace",
      "Fatigue can be a significant factor for the person you care for",
      "Communication may become more challenging at times",
      "Adaptations to daily routines may become more important over time",
      "Support needs for mobility and daily tasks can shift gradually",
    ],
    'learning-disability': [
      "Changes in routine or environment can sometimes feel unsettling for the person you care for",
      "Communication may need additional patience and adjustment at times",
      "Social support and structured activities can become increasingly important",
      "Transitions — such as changes in services — may need early planning",
      "You may find yourself advocating on their behalf more frequently",
    ],
    frailty: [
      "Physical strength and stamina can change gradually over time",
      "Falls or balance difficulties may become something worth monitoring",
      "Recovery from illness can sometimes take longer as frailty increases",
      "Daily tasks may take more time or require more assistance",
      "Social connection can become more important as independence reduces",
    ],
  },

  /* ── Stage 2 — Finding Your Feet ─────────────────────────── */
  2: {
    generic: [
      "The caring role can deepen as needs become more established",
      "Managing time between caring and other commitments may become more challenging",
      "You may notice your own energy levels are affected more frequently",
      "Navigating services and professionals can sometimes feel overwhelming",
      "It may become clearer what type of support would be most helpful",
    ],
    dementia: [
      "Repeating questions or retelling stories may happen more regularly",
      "Confusion around appointments, times, or places can increase",
      "Reliance on reminders, notes, or familiar routines may grow",
      "Safety concerns at home — such as leaving appliances on — may begin to emerge",
      "Nights can sometimes become more disrupted",
    ],
    physical: [
      "Personal care support may gradually become more involved",
      "Managing medications or treatments may require more organisation",
      "The person you care for may have more good days and more difficult days",
      "Transport to appointments can become a more regular consideration",
      "Adaptations to the home environment may be worth exploring",
    ],
    'mental-health': [
      "There may be periods when support needs feel more intense",
      "Managing a caring role alongside someone's emotional state can be draining",
      "It can be helpful to think ahead about support options during difficult periods",
      "Maintaining your own wellbeing can become harder to prioritise",
      "Finding a supportive network for yourself can be especially valuable at this stage",
    ],
    neurological: [
      "Symptoms can sometimes change over weeks or months",
      "Fatigue management can become a central part of the caring role",
      "Speech or swallowing difficulties may begin or develop further in some conditions",
      "Equipment such as walking aids or specialist seating may become relevant",
      "Accessing specialist services may become more important over time",
    ],
    'learning-disability': [
      "Behaviours that are harder to manage sometimes increase during periods of change",
      "Health appointments may become more frequent or more complex",
      "Planning for future care needs may begin to come into focus",
      "Family dynamics around caring responsibilities can sometimes surface",
      "Knowing your rights around carer assessments may become useful",
    ],
    frailty: [
      "Recovery after illness or a fall may require more support than before",
      "Nutrition and hydration can become more significant over time",
      "Loneliness or low mood can be a concern for the person you care for",
      "Hospital admissions are something some carers prepare for at this stage",
      "Planning ahead for increased care needs can reduce stress later",
    ],
  },

  /* ── Stage 3 — Established Carer ─────────────────────────── */
  3: {
    generic: [
      "Caring can become a significant part of your daily structure at this stage",
      "Your own health and wellbeing may begin to be affected if not given attention",
      "It can become harder to maintain friendships, hobbies, or work commitments",
      "Navigating changes in the cared-for person's needs can feel unpredictable",
      "A formal carer assessment may become more relevant and worthwhile at this stage",
    ],
    dementia: [
      "Day-to-day memory tasks may require more active support",
      "Managing finances or important documents on their behalf may increase",
      "Wandering or becoming disoriented in familiar places can sometimes become a safety consideration",
      "Increased confusion in the evenings — sometimes called sundowning — can occur in some cases",
      "Personal care needs may gradually become more hands-on",
    ],
    physical: [
      "Physical care tasks may require more time and energy from you",
      "Managing pain or discomfort for the person you care for may become more complex",
      "Hospital appointments or planned procedures may increase",
      "Support from district nurses or healthcare workers may become part of regular life",
      "Access to specialist support such as physiotherapy may become more relevant",
    ],
    'mental-health': [
      "The emotional toll on you as a carer may become more noticeable",
      "Having a support plan for difficult periods can be helpful to think about",
      "Access to talking therapies or mental health services may become more relevant",
      "Periods of relapse or difficulty can be hard to anticipate",
      "Connecting with other carers in similar situations can offer real relief",
    ],
    neurological: [
      "Managing complex symptoms day-to-day can require ongoing adaptation",
      "Cognitive changes may begin or develop further in some conditions",
      "Specialist nursing or therapy may become a regular part of the routine",
      "Planning for future needs — such as adapted housing — may come into focus",
      "The emotional impact on both of you can deepen over time",
    ],
    'learning-disability': [
      "Long-term planning around care arrangements may become more pressing",
      "Health conditions can sometimes become more complex as the person ages",
      "Accessing appropriate day services or activities may need reviewing",
      "Legal considerations such as lasting power of attorney may become relevant",
      "Your caring role may expand if other formal support reduces",
    ],
    frailty: [
      "Physical care needs can increase as frailty progresses",
      "Hospital stays and recovery periods may become more frequent",
      "Social isolation for the person you care for may become more marked",
      "End-of-life planning is something some carers begin to consider at this stage",
      "Your own energy reserves may feel stretched more often",
    ],
  },

  /* ── Stage 4 — Intensive Caring ──────────────────────────── */
  4: {
    generic: [
      "Caring needs at this level can place significant strain on your health and relationships",
      "You may find it harder to switch off or get adequate rest",
      "Without support, carer fatigue can develop and affect your ability to continue",
      "A formal review of care needs for the person you support may become important",
      "Some carers at this stage begin to consider whether current arrangements are sustainable",
    ],
    dementia: [
      "Communication can become more difficult as the condition progresses",
      "Personal care needs may become more intensive and frequent",
      "Managing distress or agitation can be tiring over time",
      "The person you care for may not recognise familiar people at certain moments",
      "Considering additional support — such as respite or care workers — may become more pressing",
    ],
    physical: [
      "Physical care tasks may become increasingly demanding on your body",
      "Medical needs can become more complex and require coordination across services",
      "Managing specialist equipment may become part of daily routine",
      "Your own physical health may be affected if you are not receiving adequate support",
      "Palliative care conversations may become relevant in some situations",
    ],
    'mental-health': [
      "Caring during difficult periods can feel relentless at this stage",
      "Your own mental health may be significantly affected",
      "Boundaries around your caring role can become harder to maintain",
      "Accessing emergency or crisis services on their behalf may sometimes happen",
      "Reaching out to a GP or mental health professional for your own support is worth considering",
    ],
    neurological: [
      "Symptoms and care needs may become more complex to manage day-to-day",
      "Communication difficulties may require specialist support",
      "Regular breaks from caring become particularly important at this stage",
      "Advanced care planning may be a conversation worth starting",
      "The emotional and physical load at this stage can be considerable",
    ],
    'learning-disability': [
      "Transitions in service provision can sometimes be disruptive and require careful management",
      "Managing complex health needs alongside learning disability can require coordination",
      "Planning for when your caring role changes is something many carers address at this stage",
      "Your own wellbeing may be significantly affected if adequate support is not in place",
      "Advocacy and legal protections are important to understand",
    ],
    frailty: [
      "Care needs can sometimes increase significantly over a relatively short period",
      "End-of-life conversations and advance care planning may become timely",
      "Palliative or hospice support may become relevant for some families",
      "Your own grief — even while still caring — can begin at this stage",
      "Accepting help is not giving up — it is a way of continuing to care well",
    ],
  },

  /* ── Stage 5 — Crisis Point ───────────────────────────────── */
  5: {
    generic: [
      "At this stage, many carers find their own health and wellbeing is significantly affected",
      "Without support, it can become increasingly difficult to continue in the caring role",
      "Some carers at this stage consider whether additional or alternative care arrangements are needed",
      "A crisis in the caring situation can sometimes lead to an urgent reassessment of needs",
      "Your own need for support is as important as that of the person you care for",
    ],
    dementia: [
      "Behaviours may sometimes become more difficult to manage safely at home",
      "Around-the-clock care needs can become a reality for some families",
      "Considering whether a care home or specialist provision is right may come into focus",
      "Grief and loss are common feelings even before bereavement at this stage",
      "Specialist dementia carer support can make a real difference — you do not have to manage alone",
    ],
    physical: [
      "Managing complex or advanced physical conditions requires significant support",
      "Coordinating multiple health professionals and services can feel overwhelming",
      "Palliative or hospice care may become the most appropriate option for some families",
      "Your own physical safety when providing personal care is important to protect",
      "Organisations such as Macmillan or Marie Curie may offer timely support",
    ],
    'mental-health': [
      "A serious crisis in the caring situation may require urgent professional support",
      "Keeping yourself safe is a priority — your needs matter too",
      "Reaching out to a GP or crisis team for your own support is a sign of strength",
      "Some carers find the role becomes very difficult to sustain without structured professional help",
      "You do not have to manage this alone — help is available",
    ],
    neurological: [
      "End-stage symptom management may require specialist palliative input",
      "Advanced care planning conversations — if not already started — are worth raising",
      "Carer fatigue and burnout are real risks at this intensity of caring",
      "Regular breaks from caring are especially critical at this stage",
      "Specialist neurological charities can connect you to experienced support",
    ],
    'learning-disability': [
      "Crisis support — for the person you care for and for yourself — may sometimes be needed",
      "Advocacy support can help ensure the person you care for remains protected",
      "Your own limits are important to recognise and to communicate to services",
      "If you are struggling to continue, social care services have contingency processes",
      "Speaking to a social worker about support options may be a helpful step",
    ],
    frailty: [
      "Specialist palliative and hospice care services can support both of you",
      "Bereavement support services can be considered at any point — not only after loss",
      "Your grief and emotional needs are valid and deserve care",
      "Being present and caring at this stage, even imperfectly, matters deeply",
      "You are not alone — support is available for carers at this stage",
    ],
  },

  /* ── Stage 6 — Transition ─────────────────────────────────── */
  6: {
    generic: [
      "Transitions in caring — such as a change in care setting or bereavement — can bring complex emotions",
      "Identity adjustment after a significant change in your caring role is very common",
      "Some carers feel lost or without purpose after a period of intense caring ends",
      "Reconnecting with your own health, friendships, and interests may take time",
      "Support after a caring role changes is available — and often underused",
    ],
    dementia: [
      "If the person has moved into residential care, a different kind of caring role often continues",
      "Guilt, relief, and grief can exist at the same time — this is a normal experience",
      "Grief connected to dementia can begin long before bereavement",
      "Specialist dementia carer support can help during and after transitions",
      "Your identity as a carer does not disappear when the role changes",
    ],
    physical: [
      "Recovering your own health after a period of intensive physical caring may take time",
      "Reconnecting with your GP about your own health is an important step",
      "Financial and practical adjustments after a change in caring may need attention",
      "If bereavement has occurred, specialist grief support is available",
      "You are allowed to prioritise your own recovery now",
    ],
    'mental-health': [
      "Processing the emotional intensity of the caring role may take time",
      "Your own mental health — which may have been affected — deserves attention now",
      "Counselling or talking therapy can be particularly helpful after a significant transition",
      "Social connection and routine can be powerful in rebuilding after caring",
      "Carers organisations can offer post-caring support as well as in-caring support",
    ],
    neurological: [
      "Transitions from caring can coincide with bereavement or significant loss",
      "Rebuilding daily structure after intensive caring is a gradual process",
      "Specialist bereavement support for neurological conditions is available",
      "Your own physical health, which may have been neglected, deserves priority now",
      "Reconnecting with others who have had similar experiences can help",
    ],
    'learning-disability': [
      "If the person you care for has moved to supported living, a new kind of relationship begins",
      "Allowing yourself to step back from constant responsibility can feel unfamiliar at first",
      "Your own identity beyond the caring role may need time to rediscover",
      "Carer support organisations can help with the transition",
      "Planning for the longer term — especially as an ageing parent carer — may be worthwhile",
    ],
    frailty: [
      "Bereavement after caring for someone with frailty is a significant loss",
      "Grief may be mixed with relief — and both are completely understandable",
      "Bereavement counselling and support groups are available",
      "Your own health, which may have been set aside during caring, deserves focus now",
      "Taking things one day at a time is enough — there is no right way to adjust",
    ],
  },

};
