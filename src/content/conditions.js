/* ═══════════════════════════════════════════════════════════════
   CONDITIONS — Condition Awareness Layer (V2 Stage 1)

   Edit this file to update the condition options shown before
   the stage checker questions. Each option has a stable id
   (do not change after deployment — it may be stored in exports)
   and a label shown to the user.

   This question does not affect stage scoring. It is used only
   to help tailor future support content.

   Future multi-language support:
     - Create conditions-cy.js (Welsh) etc. for translated labels.
     - Keep id values identical across locales.
════════════════════════════════════════════════════════════════ */

const CONDITIONS = [
  { id: 'dementia',            label: 'Dementia or memory problems' },
  { id: 'physical',            label: 'Physical health condition' },
  { id: 'mental-health',       label: 'Mental health condition' },
  { id: 'neurological',        label: 'Neurological condition' },
  { id: 'learning-disability', label: 'Learning disability or autism' },
  { id: 'frailty',             label: 'Frailty or ageing' },
  { id: 'not-sure',            label: 'Not sure' },
  { id: 'other',               label: 'Other' },
];
