/**
 * The one error the vocabulary raises, in a module of its own so every builder can
 * throw it without importing the model.
 *
 * It lived in `model.ts` while `model.ts` was the only thing that threw. `aria.ts`
 * needs it too and `model.ts` calls into `aria.ts`, so leaving it there would make
 * the two modules import each other — a cycle that works today because the class is
 * only referenced inside function bodies, and stops working the moment someone uses
 * it at module scope. A leaf module costs nothing and cannot develop that failure.
 */

/** Thrown with the offending member named — never swallowed into a fallback type. */
export class VocabularyError extends Error {}
