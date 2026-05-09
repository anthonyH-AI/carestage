/* ═══════════════════════════════════════════════════════════════
   CONVERSATION PROMPTS — V2 Stage 10
   Categorised discussion prompts for professional and volunteer
   use of CareStage in an assisted-session context.

   HOW THIS FILE WORKS
   ───────────────────
   CONVERSATION_PROMPTS is keyed by stage (stage1–stage6).
   Each stage has four categories:

     opening     — icebreaker and scene-setting questions
     practical   — questions about tasks, challenges, and resources
     support     — questions about networks, services, and help
     reflection  — questions that invite emotional processing

   The worker selects a focus using the session focus selector on
   the result page. The matching prompts are rendered in the
   Discussion guide section.

   This is for:
     ✓ guided conversation support
     ✓ structured discussion assistance
     ✓ practical signposting
     ✓ collaborative roadmap building

   This is NOT:
     ✗ clinical assessment
     ✗ safeguarding record
     ✗ case management
     ✗ CRM or referral tool

   TONE RULES — MUST be followed in all prompts
   ─────────────────────────────────────────────
   ✅  Prompts should be:
       - warm and professionally curious
       - open-ended (never yes/no)
       - non-leading
       - appropriate for the stage context
   ❌  Prompts must NOT:
       - assume how the carer feels
       - use clinical or diagnostic language
       - suggest the carer has failed
       - create pressure to disclose
════════════════════════════════════════════════════════════════ */

const CONVERSATION_PROMPTS = {

  /* ── Stage 1 — Just found out / early awareness ───────────── */
  stage1: {
    opening: [
      "What brought you here today — can you tell me a little about your situation?",
      "How long have you been in this caring role, and how is it going so far?",
      "Is this the first time you have had a chance to talk properly about being a carer?",
      "What feels most important to talk about right now?",
    ],
    practical: [
      "What are the main things you are managing day-to-day at the moment?",
      "Have you had to make any changes to your work, routines, or finances since caring began?",
      "Are there things you feel you need to know about — like benefits, assessments, or local services?",
      "What practical help, if any, do you currently have in place?",
    ],
    support: [
      "Does anyone else know about your caring role — family, friends, or colleagues?",
      "Have you had any contact with health or social care services yet?",
      "What support, if any, is around you at the moment?",
      "Is there anyone else who could help, even in a small way?",
    ],
    reflection: [
      "How has taking on this caring role affected how you feel day-to-day?",
      "Is there anything about the situation that feels uncertain or difficult to think about?",
      "Is there one thing that, if it were in place, would make things feel more manageable?",
      "How does it feel to be talking about this today?",
    ],
  },

  /* ── Stage 2 — Getting to grips ──────────────────────────── */
  stage2: {
    opening: [
      "How have things been since you last thought about your caring role — or since we last spoke?",
      "What feels different or more settled now compared to when you started?",
      "What has been on your mind most this week?",
      "Where would you like to start today?",
    ],
    practical: [
      "What does a typical day or week look like for you now?",
      "Are there tasks or responsibilities that feel harder to manage than others?",
      "Have you had a carer's assessment, or do you know what that involves?",
      "Are there any practical things still feeling unsorted or unclear?",
    ],
    support: [
      "What formal support, if any, is currently in place for you or the person you care for?",
      "Who do you turn to when things feel difficult?",
      "Are there local services or groups you have heard of but not yet tried?",
      "Is there anything you have been putting off looking into?",
    ],
    reflection: [
      "How are you managing your own health and wellbeing alongside the caring role?",
      "What aspects of caring do you find most rewarding, if any?",
      "What feels like it still needs to fall into place for things to feel more settled?",
      "What does support actually look like for you — what would make a real difference?",
    ],
  },

  /* ── Stage 3 — Coping and adapting ───────────────────────── */
  stage3: {
    opening: [
      "How would you describe where things are for you right now?",
      "What has helped most in managing the caring role so far?",
      "Are there any recent changes — in you, or in the person you care for — worth talking about?",
      "What feels most pressing for you at the moment?",
    ],
    practical: [
      "What adjustments have you made to your life to manage the caring role?",
      "Are there things you have had to give up that still feel difficult?",
      "What would make the biggest practical difference to your situation right now?",
      "Are there any areas — like work, money, or housing — that need attention?",
    ],
    support: [
      "Who else is involved in supporting the person you care for?",
      "Is there anything the services or support system is missing for you?",
      "Have you ever taken a proper break from caring — and do you have options to do so?",
      "Is there a service or resource you have thought about but not accessed yet?",
    ],
    reflection: [
      "How do you feel about the caring role at this point — compared to when you started?",
      "Is there anything you are carrying that you have not had a chance to talk about?",
      "What does good support look like for you going forward?",
      "What are you most proud of managing, even if things are hard?",
    ],
  },

  /* ── Stage 4 — Under pressure ─────────────────────────────── */
  stage4: {
    opening: [
      "How are you really doing at the moment?",
      "Is there anything that has felt harder recently, or a change that has made things more difficult?",
      "What would you most like to talk about today?",
      "When things feel heavy, what helps you get through the day?",
    ],
    practical: [
      "Are there parts of the caring role that feel unsustainable or close to the edge?",
      "What would need to change for things to feel more manageable?",
      "Have you spoken to your GP about your own health recently — including the impact of caring?",
      "Are there services or financial supports you have not yet explored?",
    ],
    support: [
      "What support is currently in place, and is it actually helping?",
      "Is there anything we could help you access today — services, respite, or financial support?",
      "Are there people around you who could share some of the load, even occasionally?",
      "Who knows how much you are doing and how hard things are right now?",
    ],
    reflection: [
      "What are the signs that things are getting too much for you — for yourself, not just the caring role?",
      "What keeps you going at the moment?",
      "What would you want to be different in the next few months?",
      "Is there something you need to say or do that you have been putting off?",
    ],
  },

  /* ── Stage 5 — Near crisis ────────────────────────────────── */
  stage5: {
    opening: [
      "How are you doing today — are you okay?",
      "Things seem like they are under a lot of pressure right now. What feels most urgent?",
      "Is there anything we should talk about first before anything else?",
      "What feels most important to address today?",
    ],
    practical: [
      "Is there anyone who could step in and help, even temporarily, to give you a break?",
      "Have you looked into respite care or emergency support services?",
      "What is the most pressing practical thing that needs to change right now?",
      "Are there things that could be taken off your plate, even temporarily?",
    ],
    support: [
      "Have you been able to speak to your GP or a carer support service recently?",
      "Are there services we should look at together today — even just to know they are there?",
      "What is making it hard to access more support?",
      "Who can you call if things get worse before we next speak?",
    ],
    reflection: [
      "How are you feeling about continuing in this caring role?",
      "Is there anything you are holding back from saying — about how you really are?",
      "What is one thing you need for yourself, today or this week?",
      "What would feel like some small relief right now?",
    ],
  },

  /* ── Stage 6 — Transition / end of caring ─────────────────── */
  stage6: {
    opening: [
      "How are you doing — taking everything into account?",
      "What has this period been like for you, and how are you feeling now?",
      "Is there anything you want to talk through first, before we look at what comes next?",
      "How are you filling your time now — how does the day feel different?",
    ],
    practical: [
      "Are there practical things still to sort out — financial, legal, housing, or benefits?",
      "What does your day-to-day life look like now that the caring role has changed?",
      "Are there organisations or services that could help with the transition?",
      "Is there anything practical that feels unresolved or worrying?",
    ],
    support: [
      "Who is supporting you through this — personally as well as practically?",
      "Have you had access to bereavement support, counselling, or a space to talk?",
      "Is there anything you are still waiting for, or that feels unresolved from the caring period?",
      "What kind of support do you feel you need most right now?",
    ],
    reflection: [
      "How are you feeling about who you are now that this caring role has changed or ended?",
      "What do you want to do or feel more able to do as things settle?",
      "What would feel like a positive step for you, at your own pace?",
      "What do you want people around you to understand about what you have been through?",
    ],
  },

};
