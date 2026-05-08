/* ═══════════════════════════════════════════════════════════════
   RESPONSIBILITY GUIDANCE — V2 Stage 3
   "What you may need to do" content for the result page.

   HOW THIS FILE WORKS
   ───────────────────
   RESPONSIBILITY_GUIDANCE is keyed by stage number (1–6).
   Each stage object has a 'generic' array (shown if no condition
   is selected or no matching condition exists) plus optional
   condition-specific arrays keyed by condition id.

   Condition ids match CONDITIONS in src/content/conditions.js:
     dementia | physical | mental-health | neurological |
     learning-disability | frailty | not-sure | other

   SAFE LANGUAGE RULES — MUST be followed in all content
   ──────────────────────────────────────────────────────
   ✅  Use:  may, might, can, often helps, some carers, could,
             "you may find yourself", "it can help to",
             "some carers begin to"
   ❌  Avoid: must, required to, should always, you need to,
              always responsible for, you are expected to

   This section should:
     ✅ help carers recognise growing responsibilities
     ✅ reduce uncertainty and encourage earlier support
     ✅ normalise asking for help
   This section must NOT:
     ❌ pressure carers or imply they must cope alone
     ❌ replace professional advice
     ❌ sound clinical or instruction-like

   To add a new condition, match the id from conditions.js and
   add an array of 3–5 bullet strings to each stage object.

   To add a new language, create responsibilities-cy.js (Welsh) etc.
   Keep ids identical across locale files.
════════════════════════════════════════════════════════════════ */

const RESPONSIBILITY_GUIDANCE = {

  /* ── Stage 1 — Just Starting Out ─────────────────────────── */
  1: {
    generic: [
      "Finding out what support might be available in your local area",
      "Keeping a note of any appointments, medications, or useful information",
      "Having early conversations with family or trusted people about the situation",
      "Checking whether any important documents — such as lasting power of attorney — are in place",
      "Beginning to look after your own health and wellbeing — this becomes more important over time",
    ],
    dementia: [
      "Learning a little more about the condition when you feel ready",
      "Keeping a simple diary or notebook to track any changes you notice",
      "Finding out whether important legal documents — such as lasting power of attorney — are in place",
      "Beginning to think about safety at home and any simple adjustments that could help",
      "Having early conversations about the person's wishes while communication is straightforward",
    ],
    physical: [
      "Noting any changes in the person's physical condition or ability over time",
      "Finding out what equipment or home adaptations might be available to help",
      "Keeping a list of contacts — such as the GP, specialists, and any support services",
      "Starting to think about how appointments will be managed and who can help",
      "Learning about the condition from reliable sources when you feel ready to do so",
    ],
    'mental-health': [
      "Learning about the condition and how it can affect day-to-day life",
      "Finding out what crisis support is available locally, as a precaution",
      "Keeping important contact numbers in one accessible place",
      "Beginning to think about your own wellbeing — caring for someone with a mental health condition can have an impact on you",
      "Starting to build a network of people who know the situation",
    ],
    neurological: [
      "Learning about the condition and what changes might gradually occur",
      "Keeping a record of symptoms or changes that seem significant",
      "Finding out about specialist services or charities linked to the condition",
      "Noting the person's preferences and wishes while communication is clear",
      "Starting to think about home adaptations or equipment that might be useful over time",
    ],
    'learning-disability': [
      "Familiarising yourself with any current support plans or assessments",
      "Finding out what rights and entitlements the person has",
      "Keeping key contact information organised and accessible",
      "Learning about advocacy services and when they might be helpful",
      "Starting to think ahead about any transitions or life changes that may be coming",
    ],
    frailty: [
      "Keeping track of health appointments and any changes in the person's condition",
      "Beginning to think about safety at home — such as fall risks",
      "Finding out what home support services might be available in your area",
      "Starting to involve the person in conversations about their future care where possible",
      "Looking after your own health — being a carer can affect your own wellbeing too",
    ],
  },

  /* ── Stage 2 — Finding Your Feet ─────────────────────────── */
  2: {
    generic: [
      "Keeping track of appointments, medication, and medical information",
      "Starting to organise important paperwork and key contact details",
      "Beginning conversations with family or trusted people about sharing responsibilities",
      "Learning what support and services are available in your local area",
      "Thinking about your own needs as a carer — a carer assessment may be available to you",
    ],
    dementia: [
      "Helping with daily reminders and familiar routines",
      "Starting to monitor for changes in safety or increasing confusion",
      "Organising important documents and contact numbers in one accessible place",
      "Beginning to think about what additional support at home might help",
      "Looking into local dementia cafés, support groups, or carers' services",
    ],
    physical: [
      "Helping to manage medications, prescriptions, and repeat appointments",
      "Assisting with practical tasks that are becoming more difficult",
      "Finding out what community health support — such as district nursing — might be available",
      "Starting to think about equipment or adaptations that could reduce strain on both of you",
      "Making sure your GP knows about your caring role",
    ],
    'mental-health': [
      "Learning about warning signs or triggers that may indicate a more difficult period",
      "Keeping a calm, predictable routine where possible — this can help",
      "Finding out what crisis support options are available and how to access them",
      "Starting to look after your own mental health — it is easy to overlook",
      "Connecting with other carers in similar situations can provide real support",
    ],
    neurological: [
      "Helping to coordinate specialist appointments and communicate with health teams",
      "Keeping a record of symptom changes to share with professionals",
      "Starting to think about adaptations at home that could increase safety",
      "Learning about any specialist services or charities for the condition",
      "Beginning to consider the emotional impact on you as a carer and where you can get support",
    ],
    'learning-disability': [
      "Supporting the person to maintain their routines and activities",
      "Attending reviews and helping to communicate the person's needs to services",
      "Starting to think about any upcoming transitions — such as moving into adult services",
      "Learning about benefits, entitlements, and what the person is eligible for",
      "Beginning to think about longer-term plans and future care arrangements",
    ],
    frailty: [
      "Helping with daily tasks that are becoming harder to manage alone",
      "Monitoring the person's appetite, hydration, and general wellbeing",
      "Making sure the home environment is as safe as possible",
      "Starting to involve other services — such as a GP or social worker — early",
      "Thinking ahead about what support might be needed if the situation changes",
    ],
  },

  /* ── Stage 3 — Established Carer ─────────────────────────── */
  3: {
    generic: [
      "Coordinating appointments and communicating with health professionals on their behalf",
      "Keeping track of changes in their condition or day-to-day wellbeing",
      "Taking on more tasks around the home or with personal care as needs grow",
      "Beginning to think about what would happen if your own circumstances changed",
      "Requesting a carer assessment if you have not already — you are entitled to one",
    ],
    dementia: [
      "Helping with reminders, routines, and managing moments of confusion",
      "Monitoring changes in safety at home — such as wandering or leaving appliances on",
      "Keeping important contact numbers and documents accessible at all times",
      "Beginning to think about contingency planning for times when you need a break",
      "Starting to look into lasting power of attorney if it is not already in place",
    ],
    physical: [
      "Providing regular personal care or physical assistance as part of the daily routine",
      "Managing a growing number of medications, appointments, and health updates",
      "Communicating changes clearly to the GP, district nurse, or specialist team",
      "Starting to think about your own physical health — lifting and caring tasks can take their toll",
      "Exploring whether any community support services or care workers could help share the load",
    ],
    'mental-health': [
      "Providing steady, consistent support during both stable and difficult periods",
      "Having a plan in place for how to respond during a crisis — even a simple one",
      "Keeping communication open with mental health services about the person's situation",
      "Making time for your own mental health — it can be easy to neglect when caring",
      "Connecting with other carers or a support group to share experiences",
    ],
    neurological: [
      "Managing day-to-day symptom changes and communicating these to health professionals",
      "Helping with communication, mobility, or personal care as the condition develops",
      "Starting to think about specialist equipment, home adaptations, or vehicles",
      "Keeping yourself informed about the likely progression of the condition",
      "Looking after your own health — the emotional load at this stage can be significant",
    ],
    'learning-disability': [
      "Supporting the person with daily living, communication, and activities",
      "Attending health and care reviews and helping professionals understand the person's needs",
      "Exploring longer-term care arrangements and what planning is needed",
      "Considering legal matters — such as deputyship or formal advocacy — if not yet in place",
      "Finding support for yourself as a carer — your needs matter too",
    ],
    frailty: [
      "Providing increasing practical and personal care support on a regular basis",
      "Monitoring the person's health closely and communicating changes to professionals",
      "Thinking about hospital discharge plans if admissions begin to happen",
      "Starting to consider future care arrangements — such as home care or residential options",
      "Looking after your own health and energy levels — the caring role at this stage can be draining",
    ],
  },

  /* ── Stage 4 — Intensive Caring ──────────────────────────── */
  4: {
    generic: [
      "Coordinating complex care across multiple services and health professionals",
      "Managing medications, personal care, and daily appointments routinely",
      "Communicating the person's needs and wishes clearly to care teams",
      "Making time for your own health — even briefly — as fatigue can build over time",
      "Exploring whether more formal support — such as a care worker or respite — could help",
    ],
    dementia: [
      "Managing daily safety, routines, and increasing personal care needs",
      "Communicating clearly with health and social care teams when the situation changes",
      "Thinking about whether current living arrangements remain safe and appropriate",
      "Considering options for additional support at home — such as a care worker",
      "Looking after your own health — carer fatigue is a very real risk at this stage",
    ],
    physical: [
      "Providing intensive physical care and support as part of a daily routine",
      "Coordinating multiple health professionals — nurses, therapists, consultants — effectively",
      "Managing equipment, home adaptations, and specialist needs",
      "Keeping records of the person's condition and communicating changes promptly",
      "Seeking support for your own physical health — personal care tasks can cause strain",
    ],
    'mental-health': [
      "Maintaining your caring role during what may be a sustained difficult period",
      "Staying in close contact with the person's mental health team",
      "Having a clear plan for what to do in a crisis",
      "Protecting your own mental health — it is not selfish to prioritise this",
      "Asking services for more support if current arrangements are not enough",
    ],
    neurological: [
      "Managing complex and changing symptom needs on a daily basis",
      "Working closely with specialist health teams to coordinate care",
      "Thinking about advanced care planning and the person's future wishes",
      "Ensuring regular breaks from caring — however brief — are built into each week",
      "Recognising the emotional and physical weight of caring at this level",
    ],
    'learning-disability': [
      "Managing the person's complex health and care needs as they evolve",
      "Coordinating across multiple services — health, social care, housing, benefits",
      "Planning for significant transitions, such as changes in living arrangements",
      "Protecting your own wellbeing — intensive caring without support takes a toll",
      "Making sure the person's legal protections and rights are actively maintained",
    ],
    frailty: [
      "Providing high levels of personal and practical care on a daily basis",
      "Keeping close communication with the GP and any specialist services",
      "Beginning to think about end-of-life wishes and advance care planning",
      "Seeking help from palliative care services if they might be relevant",
      "Giving yourself permission to ask for more support — it is not a sign of failure",
    ],
  },

  /* ── Stage 5 — Crisis Point ───────────────────────────────── */
  5: {
    generic: [
      "Communicating your situation clearly to services and health professionals",
      "Letting your GP know about your caring role and how it is affecting you",
      "Asking for urgent support if you feel you cannot safely continue alone",
      "Accepting help where it is offered — you do not have to manage everything by yourself",
      "Thinking about whether others could take on some responsibilities, even temporarily",
    ],
    dementia: [
      "Being honest with services about the level of care you are currently providing",
      "Asking about emergency respite if you need a break urgently",
      "Contacting specialist dementia carer support services for practical guidance",
      "Speaking to a social worker about what can be put in place if you need additional help",
      "You do not have to manage this stage alone — support is available",
    ],
    physical: [
      "Making sure all relevant health professionals are aware of the current situation",
      "Asking your GP or care team about palliative support if it has not been discussed",
      "Considering whether a care worker, night support, or respite could give you a break",
      "Looking after your own physical safety when providing personal care",
      "Reaching out to organisations such as Macmillan or Marie Curie if relevant",
    ],
    'mental-health': [
      "Reaching out to the person's mental health team if you are concerned about safety",
      "Letting your own GP know how the caring role is affecting your mental health",
      "Asking about carer crisis support — some areas have dedicated services",
      "Recognising your own limits and communicating these to relevant services",
      "You are allowed to ask for help — for yourself as well as for the person you care for",
    ],
    neurological: [
      "Making sure all services involved in the person's care are communicating with each other",
      "Raising concerns clearly with the specialist team if care needs have increased significantly",
      "Considering whether the current situation is sustainable and being honest with services",
      "Looking into emergency or short-notice respite options",
      "Specialist neurological charities may be able to offer carer support at this stage",
    ],
    'learning-disability': [
      "Contacting social care services to request an urgent review if needed",
      "Being clear with services about what is and is not manageable right now",
      "Asking about contingency plans — such as emergency short breaks or supported living options",
      "Seeking advocacy support to help communicate the person's needs to services",
      "Your own safety and wellbeing are important — raising concerns is not giving up",
    ],
    frailty: [
      "Making sure palliative or end-of-life care support is in place if appropriate",
      "Communicating clearly with all services involved in the person's care",
      "Asking for more help — a higher level of care or respite — if the current situation is not sustainable",
      "Giving yourself permission to grieve — even while still in the caring role",
      "You have given a great deal — accepting support now is a sign of strength",
    ],
  },

  /* ── Stage 6 — Transition ─────────────────────────────────── */
  6: {
    generic: [
      "Beginning to hand over or step back from responsibilities where the situation has changed",
      "Looking after your own health after a period of intensive caring",
      "Giving yourself time to adjust — identity and routine can take time to rebuild",
      "Reaching out to support services designed for carers who have been through a major change",
      "Thinking about what you need now that your caring role has shifted",
    ],
    dementia: [
      "If the person has moved into care, staying involved in decisions about their wellbeing",
      "Allowing yourself to process the emotional complexity of the transition",
      "Staying connected with specialist dementia carer support services",
      "Reconnecting with your own GP about your health and wellbeing",
      "Giving yourself permission to grieve the changes — this is a normal and valid experience",
    ],
    physical: [
      "Reconnecting with your own GP about your health now the intensity has reduced",
      "Giving yourself time to recover physically and emotionally after intensive caring",
      "Handling any practical or financial matters that arise after a change in the caring situation",
      "Accessing grief or bereavement support if the caring situation has ended through loss",
      "Taking things at your own pace — there is no fixed timeline for adjustment",
    ],
    'mental-health': [
      "Seeking counselling or talking therapy — this stage can bring complex emotions",
      "Looking after your own mental health, which may have been affected during intensive caring",
      "Rebuilding social connection and routine where these have faded",
      "Reaching out to a carer support organisation that offers post-caring support",
      "Processing feelings of loss, relief, or uncertainty — all of these are understandable",
    ],
    neurological: [
      "Allowing yourself to grieve — transitions after a long neurological caring journey can be profound",
      "Reconnecting with your own GP and looking after your health",
      "Accessing specialist bereavement or carer transition support if available",
      "Rebuilding daily structure gradually — there is no rush",
      "Reconnecting with others who understand this kind of experience can help",
    ],
    'learning-disability': [
      "Staying involved in decisions about the person's care if they have moved to a new setting",
      "Stepping back from daily responsibilities at a pace that feels manageable",
      "Looking after your own identity and interests beyond the caring role",
      "Connecting with carer support organisations for people past the intensive stage",
      "Planning for your own future, including any longer-term considerations for the person you care for",
    ],
    frailty: [
      "Taking care of any practical matters that need attention after the caring situation changes",
      "Giving yourself permission to rest — you have carried a significant load",
      "Accessing bereavement counselling or a support group if you have experienced a loss",
      "Reconnecting with your GP about your own health",
      "Taking things one step at a time — you do not have to have everything sorted straight away",
    ],
  },

};
