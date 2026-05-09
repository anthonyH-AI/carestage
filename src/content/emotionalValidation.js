/* ═══════════════════════════════════════════════════════════════
   EMOTIONAL VALIDATION — V2 Stage 6
   "How you may be feeling" content for the result page.

   HOW THIS FILE WORKS
   ───────────────────
   EMOTIONAL_VALIDATION is keyed by stage number (1–6).
   Each stage object contains:
     generic           — shown when no condition is selected or no
                         condition-specific match exists
     [conditionId]     — optional condition-specific entry; ids match
                         src/content/conditions.js
     pressureNotes     — optional short notes keyed by pressure level
                         (low | moderate | high) from V2 Stage 5

   Each content entry (generic or condition-specific) contains:
     intro          — one opening sentence
     feelings       — 3–4 short bullet strings
     reassurance    — one sentence of honest reassurance
     gentlePrompt   — one soft, non-demanding suggestion

   SAFE LANGUAGE RULES — MUST be followed in all content
   ──────────────────────────────────────────────────────
   ✅  Use:  many carers, some carers, you may, it is common,
             "you might find", "some people describe"
   ❌  Avoid: must, will, guaranteed, inevitable, everyone feels,
              diagnosis, disorder, clinical, failure, you should always

   This section must:
     ✅ acknowledge feelings without projecting them
     ✅ normalise difficult emotions without dramatising them
     ✅ remain short and easy to scan
   This section must NOT:
     ❌ tell the user how they feel
     ❌ use clinical or diagnostic language
     ❌ create a wellbeing score or label
     ❌ store any new data
════════════════════════════════════════════════════════════════ */

const EMOTIONAL_VALIDATION = {

  /* ── Stage 1 — Just Starting Out ─────────────────────────── */
  1: {
    generic: {
      intro: "Many carers at this stage are still making sense of a new situation.",
      feelings: [
        "Uncertainty about what lies ahead",
        "Wanting to help but not always knowing how",
        "Adjusting to a role that may not yet feel like yours",
        "A mix of concern and determination",
      ],
      reassurance: "Feeling unsure is normal. You do not need all the answers right now.",
      gentlePrompt: "Taking things one step at a time is enough at this stage.",
    },
    dementia: {
      intro: "Caring for someone with dementia or memory problems can bring feelings that are hard to name.",
      feelings: [
        "A kind of grief, even though the person is still here",
        "Uncertainty about what each day might bring",
        "Wanting to protect them while adjusting to changes",
        "Not always knowing what to say or do",
      ],
      reassurance: "What you are feeling makes sense. Many carers describe exactly the same thing.",
      gentlePrompt: "You do not need to have it all figured out.",
    },
    physical: {
      intro: "Many carers early in a physical health caring journey feel a mix of worry and determination.",
      feelings: [
        "Concern about the person's health and what it means",
        "A sense of responsibility that feels both natural and heavy",
        "Adjusting to new routines or tasks",
        "Sometimes feeling the pressure of wanting to get things right",
      ],
      reassurance: "These feelings are a reflection of how much you care — not a sign that you are struggling.",
      gentlePrompt: "It is okay to take things at your own pace.",
    },
    'mental-health': {
      intro: "Caring for someone with a mental health condition can bring its own kind of uncertainty from the start.",
      feelings: [
        "Not always knowing what the person needs or how to help",
        "A feeling of walking on eggshells at times",
        "Concern about saying or doing the wrong thing",
        "Sometimes feeling alone with the situation",
      ],
      reassurance: "You are not expected to have all the answers. Many carers feel exactly this way.",
      gentlePrompt: "Reaching out for support — for yourself as well as the person you care for — is a strength.",
    },
    neurological: {
      intro: "When someone has a neurological condition, the road ahead can feel unpredictable from the start.",
      feelings: [
        "Adjusting to a diagnosis that may have been unexpected",
        "Uncertainty about how things may change over time",
        "Wanting to support without always knowing how",
        "Sometimes feeling out of your depth",
      ],
      reassurance: "What you are going through is genuinely difficult. You do not need to have it all together.",
      gentlePrompt: "Connecting with others who understand can help.",
    },
    'learning-disability': {
      intro: "Caring for someone with a learning disability or autism can be a lifelong journey — and each stage brings its own feelings.",
      feelings: [
        "A strong sense of protectiveness alongside worry about the future",
        "Feeling like you need to advocate constantly",
        "Pride alongside the weight of responsibility",
        "Sometimes feeling exhausted by navigating services",
      ],
      reassurance: "These feelings are real and valid. You carry a great deal.",
      gentlePrompt: "You do not have to carry everything alone.",
    },
    frailty: {
      intro: "Watching someone become more frail can bring a quiet, difficult kind of grief.",
      feelings: [
        "A growing awareness of change that is hard to name",
        "Wanting to do everything possible while feeling the limits of what you can",
        "Sometimes a sense of loss, even while the person is still with you",
        "Adjusting to a new kind of relationship",
      ],
      reassurance: "What you are feeling is a reflection of your love and commitment. It is not weakness.",
      gentlePrompt: "It is okay to grieve the changes, even before anything has been lost.",
    },
    pressureNotes: {
      low: "It sounds like you are managing — though keeping an eye on how things feel over time is worth doing.",
      moderate: "Your answers suggest things may be taking more out of you than usual. That is worth paying attention to.",
      high: "Your answers suggest you may be under significant pressure. Please reach out — you do not have to manage this alone.",
    },
  },

  /* ── Stage 2 — Finding Your Feet ─────────────────────────── */
  2: {
    generic: {
      intro: "Many carers at this stage are finding their feet — and that can bring its own kind of pressure.",
      feelings: [
        "The weight of responsibility becoming clearer",
        "Some days feeling more manageable than others",
        "A sense of doing your best while still figuring things out",
        "Occasionally feeling isolated or unsure who to turn to",
      ],
      reassurance: "There is no right way to step into a caring role. You are doing more than you may realise.",
      gentlePrompt: "Connecting with other carers or a support service can make a real difference.",
    },
    dementia: {
      intro: "As memory problems or confusion increase, many carers describe a shift in how things feel day to day.",
      feelings: [
        "The person you know changing in ways that are hard to process",
        "Grief and love existing at the same time",
        "Exhaustion from the unpredictability",
        "Sometimes feeling invisible or unsupported",
      ],
      reassurance: "What you are experiencing is real and valid. Dementia is one of the most emotionally complex caring situations.",
      gentlePrompt: "Dementia carer support services are there specifically for situations like yours.",
    },
    physical: {
      intro: "As physical care needs grow, many carers feel the balance of their own life beginning to shift.",
      feelings: [
        "Increasing responsibility that feels both right and heavy",
        "A growing awareness of what is changing",
        "Tiredness that builds gradually",
        "Sometimes a sense of doing this largely alone",
      ],
      reassurance: "Taking on more does not mean you are coping fine. Your feelings are worth attending to.",
      gentlePrompt: "Asking for support is not admitting you cannot manage — it is managing well.",
    },
    'mental-health': {
      intro: "Supporting someone with a mental health condition can leave carers feeling many things at once.",
      feelings: [
        "Worrying about saying or doing the wrong thing",
        "Emotional fatigue from managing around someone else's wellbeing",
        "Sometimes feeling resentful — then guilty about feeling that",
        "Uncertainty about whether things will improve",
      ],
      reassurance: "Mixed feelings, including frustration and guilt, are extremely common among carers in this situation.",
      gentlePrompt: "Your wellbeing matters too. You cannot look after someone else indefinitely while neglecting yourself.",
    },
    neurological: {
      intro: "As a neurological condition develops, the day-to-day nature of caring can become more emotionally demanding.",
      feelings: [
        "Adjusting to new changes in the person you care for",
        "Sometimes feeling the loss of things that used to be easy",
        "A growing weight of practical and emotional responsibility",
        "Feeling stretched between caring and the rest of life",
      ],
      reassurance: "What you are navigating is genuinely hard. You do not need to minimise that.",
      gentlePrompt: "It can help to talk to someone who understands what this kind of caring involves.",
    },
    'learning-disability': {
      intro: "Many carers of someone with a learning disability carry the weight of constant advocacy and planning.",
      feelings: [
        "Frustration with systems that do not always respond",
        "Tiredness from always being the one who knows best what the person needs",
        "Pride alongside depletion",
        "Sometimes wondering whether things will ever feel easier",
      ],
      reassurance: "The exhaustion you may feel is not weakness — it is the cost of caring deeply over time.",
      gentlePrompt: "You deserve support too — not only the person you care for.",
    },
    frailty: {
      intro: "As frailty increases, many carers feel the gradual weight of what is changing.",
      feelings: [
        "Watching someone slow down while trying to do everything you can",
        "A quiet kind of grief that is hard to explain to others",
        "Tiredness from caring and worrying at the same time",
        "Sometimes feeling unseen or underestimated as a carer",
      ],
      reassurance: "What you are going through is significant, even if it has crept up gradually.",
      gentlePrompt: "You are allowed to feel the weight of this.",
    },
    pressureNotes: {
      low: "You seem to be managing for now — checking in with yourself regularly is a healthy habit.",
      moderate: "It sounds like things may be taking more out of you than you are letting on. That matters.",
      high: "Your answers suggest real pressure. Please do not leave it until things reach a crisis — support is available now.",
    },
  },

  /* ── Stage 3 — Established Carer ─────────────────────────── */
  3: {
    generic: {
      intro: "At this stage, many carers have been carrying a significant load — often longer than they realise.",
      feelings: [
        "Physical and emotional tiredness that has built over time",
        "Sometimes feeling like the caring role has taken over",
        "Moments of frustration, even with someone you love",
        "Less time or energy for your own needs",
      ],
      reassurance: "Feeling stretched does not mean you are doing it wrong. It means you are carrying a lot.",
      gentlePrompt: "It is worth asking what support is available — for you, not only for the person you care for.",
    },
    dementia: {
      intro: "Many carers at this stage describe the emotional weight of dementia as unlike anything else.",
      feelings: [
        "Grief that is ongoing and difficult to name",
        "Physical and emotional exhaustion from constant vigilance",
        "Moments of frustration that may bring feelings of guilt",
        "A growing sense of doing this largely alone",
      ],
      reassurance: "What you are feeling is not a reflection of how much you care. It is a reflection of how hard this is.",
      gentlePrompt: "Specialist dementia carer support exists precisely for this kind of situation.",
    },
    physical: {
      intro: "As established carers, many men find the emotional side of caring becomes harder to ignore.",
      feelings: [
        "Fatigue that goes beyond ordinary tiredness",
        "Feeling responsible for someone else's health as well as your own life",
        "Sometimes feeling resentful or overwhelmed — then guilty about it",
        "Less room for anything outside the caring role",
      ],
      reassurance: "Mixed feelings — including the difficult ones — are part of an honest caring experience.",
      gentlePrompt: "Talking to someone about your own wellbeing is not a luxury.",
    },
    'mental-health': {
      intro: "Sustaining a caring role for someone with mental health needs over time can wear deeply.",
      feelings: [
        "Emotional exhaustion from always being the steady one",
        "Sometimes feeling like your own needs are invisible",
        "Carrying worry and uncertainty for long stretches",
        "Moments of despair, especially during difficult periods",
      ],
      reassurance: "Your emotional experience as a carer is real and valid — even when it is hard to put into words.",
      gentlePrompt: "Seeking support for yourself is not abandoning the person you care for.",
    },
    neurological: {
      intro: "As a neurological condition develops over time, the emotional demands on carers often deepen.",
      feelings: [
        "Grief for what has changed or been lost",
        "The weight of being the one who has to adapt and manage",
        "Fatigue from navigating complexity every day",
        "Sometimes feeling invisible to the professionals involved",
      ],
      reassurance: "The emotional demands of this role are real and significant.",
      gentlePrompt: "You are entitled to support — including emotional support for yourself.",
    },
    'learning-disability': {
      intro: "Long-term caring for someone with a learning disability or autism brings its own kind of weight.",
      feelings: [
        "Tiredness from years of advocating and navigating systems",
        "Uncertainty about what the future holds",
        "Pride in what has been achieved alongside what has been given up",
        "Sometimes feeling overlooked or underappreciated",
      ],
      reassurance: "Long-term carers often carry the most while being offered the least. Your experience matters.",
      gentlePrompt: "A carer assessment could give you access to support that is specifically for you.",
    },
    frailty: {
      intro: "Caring for someone who is increasingly frail can carry a sense of time passing.",
      feelings: [
        "Anticipatory grief — a quiet mourning of what is changing",
        "Physical tiredness from hands-on care",
        "The emotional weight of being the person who manages everything",
        "Sometimes feeling that others do not understand the complexity",
      ],
      reassurance: "This kind of caring is often invisible to the outside world, but it is significant.",
      gentlePrompt: "You do not have to wait for things to become a crisis before asking for support.",
    },
    pressureNotes: {
      low: "Things sound broadly manageable — but keeping an eye on yourself matters too.",
      moderate: "Caring at this stage can be genuinely depleting. What you are feeling may be a sign that more support would help.",
      high: "The level of pressure your answers suggest is significant. Please reach out — your wellbeing matters as much as the person you care for.",
    },
  },

  /* ── Stage 4 — Intensive Caring ──────────────────────────── */
  4: {
    generic: {
      intro: "At this stage, many carers are carrying more than they may be letting on.",
      feelings: [
        "Exhaustion that has become the new normal",
        "Feeling like there is no time or space that is just for you",
        "A heaviness that can be hard to put into words",
        "Sometimes wondering how long you can sustain this",
      ],
      reassurance: "What you are feeling is not weakness — it is the honest result of caring at this level.",
      gentlePrompt: "Please consider reaching out. You deserve support.",
    },
    dementia: {
      intro: "Caring intensively for someone with dementia is one of the most emotionally demanding things a person can do.",
      feelings: [
        "Deep grief that others may not see or understand",
        "Exhaustion that rest does not always fix",
        "A growing sense of loss, alongside love",
        "Moments of wondering who you are outside of this role",
      ],
      reassurance: "What you are living through is profound. The fact that you are still here, still caring, matters.",
      gentlePrompt: "Specialist dementia carer support is there for exactly this stage.",
    },
    physical: {
      intro: "Intensive physical caring takes a toll that goes beyond the body.",
      feelings: [
        "Emotional exhaustion alongside physical effort",
        "A feeling that your own health has been pushed to the background",
        "Carrying responsibility that feels never-ending",
        "Sometimes feeling that asking for help means failing — it does not",
      ],
      reassurance: "Caring at this level is significant. What you are feeling is an honest response.",
      gentlePrompt: "Your health matters. Please tell your GP about your caring role.",
    },
    'mental-health': {
      intro: "Caring intensively during a difficult mental health period can leave carers feeling profoundly depleted.",
      feelings: [
        "Emotional exhaustion from sustained vigilance and worry",
        "Feeling like your own wellbeing has become secondary",
        "Sometimes carrying anger or despair that has nowhere to go",
        "A sense of isolation that can be hard to talk about",
      ],
      reassurance: "What you are experiencing is real. Carer exhaustion in mental health situations is recognised and taken seriously.",
      gentlePrompt: "Please speak to your GP or a carer support service about how this is affecting you.",
    },
    neurological: {
      intro: "Intensive caring for someone with a neurological condition carries emotional demands that are rarely fully seen.",
      feelings: [
        "Grief for the person's previous abilities and the relationship you had",
        "Physical and emotional fatigue that has become constant",
        "The weight of making decisions on behalf of someone else",
        "A sense of having given up large parts of your own life",
      ],
      reassurance: "What you are giving is immense. You are allowed to acknowledge the weight of it.",
      gentlePrompt: "Respite — even briefly — can be transformative. It is worth asking what is available.",
    },
    'learning-disability': {
      intro: "Intensive caring for someone with a learning disability or autism can feel relentless.",
      feelings: [
        "Deep tiredness from years of constant involvement",
        "The emotional weight of planning for an uncertain future",
        "Sometimes feeling that the world does not understand what you carry",
        "A mix of love, duty, and occasionally resentment — all of which are understandable",
      ],
      reassurance: "Long-term intensive caring is one of the hardest things to sustain. You are not alone in what you feel.",
      gentlePrompt: "A formal carer assessment could open up support options you may not know are available.",
    },
    frailty: {
      intro: "Intensive caring for someone with significant frailty often comes with a kind of anticipatory grief.",
      feelings: [
        "Preparing for something you cannot fully prepare for",
        "Physical exhaustion from hands-on daily care",
        "Emotional heaviness that is hard to share",
        "Sometimes guilt about feelings of exhaustion or relief when help arrives",
      ],
      reassurance: "Every feeling you have in this situation is valid — including the complicated ones.",
      gentlePrompt: "Palliative care services support carers too, not only the person being cared for.",
    },
    pressureNotes: {
      low: "Even if things feel manageable right now, intensive caring has a cumulative effect. Stay aware of how you are doing.",
      moderate: "Your answers suggest things may be taking more from you than usual. Please do not wait too long before reaching out.",
      high: "The pressure your answers suggest is high. Please speak to someone — your GP, a carer service, or someone you trust — as soon as you can.",
    },
  },

  /* ── Stage 5 — Crisis Point ───────────────────────────────── */
  5: {
    generic: {
      intro: "At crisis point, many carers feel things they have never had words for before.",
      feelings: [
        "Exhaustion that goes beyond tiredness",
        "A sense that things cannot continue as they are",
        "Fear, helplessness, or a strange kind of numbness",
        "Sometimes feeling invisible or like no one understands",
      ],
      reassurance: "Reaching this point does not mean you have failed. It means you have been carrying too much for too long.",
      gentlePrompt: "Please reach out today — to a GP, a carer service, or someone you trust.",
    },
    dementia: {
      intro: "At crisis point in a dementia caring journey, many carers feel they have reached the limit of what is possible alone.",
      feelings: [
        "Profound exhaustion — emotional, physical, and mental",
        "A grief that has accumulated over months or years",
        "A sense that the situation is no longer safe or sustainable",
        "Loneliness in the middle of constant busyness",
      ],
      reassurance: "Being at this point is not a failure. It is the honest result of caring without enough support.",
      gentlePrompt: "Specialist dementia carer support can help you find a way through this.",
    },
    physical: {
      intro: "Crisis point in physical caring often comes after a long period of pushing through.",
      feelings: [
        "Physical and emotional depletion",
        "A feeling that your own health has been sacrificed",
        "Sometimes anger — at the situation, at services, or at yourself",
        "A sense that something needs to change but not knowing how",
      ],
      reassurance: "You have kept going for a long time. It is not weakness to acknowledge you are at a limit.",
      gentlePrompt: "Please speak to your GP today. Tell them about your caring role and how you are feeling.",
    },
    'mental-health': {
      intro: "Crisis point when caring for someone with mental health needs can feel like the ground has shifted.",
      feelings: [
        "Fear about what might happen",
        "Your own mental health may be significantly affected",
        "A sense of being unable to see a way forward",
        "Profound isolation",
      ],
      reassurance: "Your own mental health matters as much as the person you care for. You are not selfish for struggling.",
      gentlePrompt: "Please reach out — to a GP, a crisis line, or a carer support service. You do not have to manage this alone.",
    },
    neurological: {
      intro: "At crisis point in a neurological caring journey, many carers feel the weight of everything they have carried.",
      feelings: [
        "Physical and emotional exhaustion that has nowhere to go",
        "Grief for what has changed and what may still change",
        "A sense of having given everything and not knowing what is left",
        "Sometimes resentment — which is a deeply understandable response to an extraordinarily hard situation",
      ],
      reassurance: "What you have given is immense. You are not expected to continue without support.",
      gentlePrompt: "Respite and carer emergency support may be available — please ask.",
    },
    'learning-disability': {
      intro: "Crisis point for a long-term carer can sometimes feel like the weight of years all at once.",
      feelings: [
        "Total depletion after sustained, intense caring",
        "Fear about what will happen to the person if you cannot continue",
        "Anger, grief, and love all at once",
        "A sense of having been invisible to services for too long",
      ],
      reassurance: "You have given a very great deal. What you are feeling is a completely understandable response.",
      gentlePrompt: "Social services have a duty to respond when a carer is at crisis point. Please contact them.",
    },
    frailty: {
      intro: "When caring for someone with significant frailty reaches a crisis, the emotional weight can feel overwhelming.",
      feelings: [
        "Grief that is no longer quiet",
        "Physical and emotional exhaustion",
        "Sometimes guilt — for struggling, for feeling relief when help comes",
        "A sense that time is running out",
      ],
      reassurance: "Every feeling you have at this point is valid. There is nothing wrong with you for feeling overwhelmed.",
      gentlePrompt: "Palliative care and hospice services support carers as well as those being cared for. Please reach out.",
    },
    pressureNotes: {
      low: "Even if some things feel manageable, being at Stage 5 is significant. Please do not dismiss what you are going through.",
      moderate: "Your answers confirm that things are taking a real toll. Support is available — please use it.",
      high: "The pressure your answers show is significant. Please reach out today. You do not need to wait for things to get worse.",
    },
  },

  /* ── Stage 6 — Transition ─────────────────────────────────── */
  6: {
    generic: {
      intro: "Transitions in a caring role bring feelings that can be unexpected and difficult to make sense of.",
      feelings: [
        "A mix of relief and loss that may feel contradictory",
        "Uncertainty about who you are now that things have changed",
        "Grief, even if the person is still alive",
        "Sometimes a sense of emptiness after a period of intense purpose",
      ],
      reassurance: "These mixed and contradictory feelings are normal. You do not need to resolve them quickly.",
      gentlePrompt: "Carer transition support exists. You do not have to navigate this alone.",
    },
    dementia: {
      intro: "After an intense dementia caring journey, many carers describe a grief that is complicated and long.",
      feelings: [
        "Relief and loss existing at the same time — and feeling confused by that",
        "Mourning a person and a relationship that changed long before now",
        "Uncertainty about who you are without the caring role",
        "Sometimes guilt, even when you made the right decisions",
      ],
      reassurance: "What you are feeling is a reflection of everything you have given. There is no right way to grieve this.",
      gentlePrompt: "Specialist grief support for dementia carers exists and can help.",
    },
    physical: {
      intro: "After a period of intensive physical caring, transition can feel disorienting.",
      feelings: [
        "Physical relief alongside emotional loss",
        "Uncertainty about what comes next",
        "Grief — for the person, for the relationship, or for the life before",
        "Sometimes not knowing what to do with yourself",
      ],
      reassurance: "Adjustment takes time. There is no timeline for how you should feel.",
      gentlePrompt: "Your GP can help you reconnect with support for your own health and wellbeing.",
    },
    'mental-health': {
      intro: "Transitions after mental health caring are often emotionally complex.",
      feelings: [
        "A mixture of relief, grief, guilt, and uncertainty",
        "Possible exhaustion from years of emotional labour",
        "Not knowing who you are outside of the caring relationship",
        "Sometimes finding the quiet harder than the chaos",
      ],
      reassurance: "Your emotional experience at this stage is real and valid, whatever it looks like.",
      gentlePrompt: "Counselling or talking therapy can be especially valuable at this point.",
    },
    neurological: {
      intro: "After caring for someone with a neurological condition, the emotional landscape of transition can be complex.",
      feelings: [
        "Grief for what the person lost — and for what you gave up",
        "A profound tiredness that may take time to lift",
        "Uncertainty about the future",
        "Sometimes a sense of loss of identity",
      ],
      reassurance: "What you carry from this experience is significant. Give yourself time.",
      gentlePrompt: "Bereavement and transition support is available — you do not have to adjust alone.",
    },
    'learning-disability': {
      intro: "When a long-term caring role changes, many carers feel lost even when the change is positive.",
      feelings: [
        "A deep adjustment to a role that has defined you for years",
        "Concern for the person you care for, even from a distance",
        "Pride alongside loss",
        "Sometimes not knowing who you are without the daily demands of caring",
      ],
      reassurance: "Long-term carers often struggle most with transition. This is understandable and supported.",
      gentlePrompt: "Carer support organisations offer help beyond the active caring phase too.",
    },
    frailty: {
      intro: "After caring for someone through significant frailty — especially after bereavement — the feelings can be profound.",
      feelings: [
        "Grief that is both expected and still surprising in its depth",
        "A mix of relief, loss, and love",
        "Physical and emotional exhaustion that may take time to surface",
        "Sometimes not knowing how to be without the caring role",
      ],
      reassurance: "What you have been through, and what you are feeling now, matters. Give yourself space.",
      gentlePrompt: "Bereavement support is there when you are ready. There is no rush.",
    },
    pressureNotes: {
      low: "Things may feel more settled now. Be patient with yourself as you adjust.",
      moderate: "Transition can bring its own pressure. What you are feeling is worth paying attention to.",
      high: "If you are under significant pressure during this transition, please reach out. Your wellbeing matters now more than ever.",
    },
  },

};
