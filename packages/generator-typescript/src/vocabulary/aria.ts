/**
 * The ARIA value-type table: what kind of value each GTK accessible property,
 * relation and state actually takes.
 *
 * WHY IT CANNOT BE DERIVED FROM THE WIDGET. An `accessibility { … }` block in a
 * GtkBuilder or Blueprint file is typed by GTK's ARIA table, not by the widget's
 * ParamSpecs, and the two disagree in ways a consumer cannot guess at:
 *
 *  - `Gtk.Label { accessibility { orientation: vertical; } }` is legal and means the
 *    number 1, although `GtkLabel` implements no `GtkOrientable` and has no
 *    `orientation` property at all.
 *  - `checked: true` is not a boolean. The slot is a `GtkAccessibleTristate`, so the
 *    value is 1, and a consumer that treated the name as boolean would emit `true`.
 *  - `label: "…"` stays a string, `level: 2` stays a number, and
 *    `active-descendant: someId` stays the reference it was written as.
 *
 * The NAME half of that table is already in the vocabulary: `ENUM_NICKS` lists every
 * member of `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState`.
 * Only the VALUE TYPE was missing, and the received wisdom is that it exists solely in
 * C, inside `gtk_accessible_property_init_value()`. That is true of the FUNCTION and
 * false of the table: every member documents its own value type in its own doc string,
 * and `girs/Gtk-4.0.gir` (gtk4 4.23.3) states it for 52 of the 53 members.
 *
 * So this is a READ, not a derivation — the rule this whole subpath is bound by. What
 * GIR does not state is refused rather than guessed: see {@link buildAriaValueTypes}.
 */

import {
  type GirEnumMember,
  type GirModule,
  IntrospectedEnum,
  type OptionsGeneration,
} from "@ts-for-gir/lib";
import { VocabularyError } from "./errors.ts";

/**
 * The three enums that ARE the ARIA table, by the GType they register.
 *
 * Stated rather than detected. Detecting them — "any enum whose members carry a
 * `Value type:` sentence" — would be a subject that shrinks silently: an enum whose
 * members all lost the sentence would simply stop being one, which is the exact
 * failure this file exists to prevent. Measured over the 718 GIRs in `girs/`: the
 * sentence appears on 52 members, all of them in these three enums, and only
 * `Gtk-4.0.gir` declares any of them.
 */
const ARIA_ENUM_GTYPES = [
  "GtkAccessibleProperty",
  "GtkAccessibleRelation",
  "GtkAccessibleState",
] as const;

/**
 * The kinds of value an ARIA slot takes.
 *
 * Five primitives GTK spells in prose plus `enum`, which is the one that needs a
 * second lookup — `ARIA_VALUE_ENUMS` names the enum GType, and `ENUM_NICKS` and
 * `ENUM_VALUES` take it from there.
 */
export type AriaValueType = "string" | "integer" | "double" | "boolean" | "reference" | "enum";

/**
 * The prose token GTK writes -> the kind it means.
 *
 * A table and not a `switch`, so that "which words are understood" is one readable
 * list. Every token here occurs in `girs/Gtk-4.0.gir`; an unknown one is a
 * {@link VocabularyError} naming the member, never a default.
 */
const PRIMITIVE_VALUE_TYPES = new Map<string, AriaValueType>([
  ["string", "string"],
  ["integer", "integer"],
  ["double", "double"],
  ["boolean", "boolean"],
  ["reference", "reference"],
]);

/**
 * `Value type:` followed by the FIRST whitespace-delimited token.
 *
 * Deliberately not "the rest of the line", which is what a first reading suggests and
 * what four of the 52 members punish. `key-shortcuts` continues the sentence
 * (`string. The format of the value is a space-separated list…`), `expanded` and
 * `selected` add `or undefined`, `pressed` adds the word `enumeration`, and `hidden`
 * follows with a whole `See also:` line. GTK also wraps the doc, so the continuation
 * may be on the next line — `\S+` stops at either.
 */
const VALUE_TYPE_SENTENCE = /Value type:\s*(\S+)/;

/**
 * `[enum@Name]` or `[enum@Namespace.Name]`, gi-docgen's link syntax.
 *
 * Gtk-4.0 writes only the bare form today (`[enum@Orientation]`,
 * `[enum@AccessibleTristate]`). The qualified form is matched anyway so that a link
 * into another namespace produces a NAMED refusal rather than an unparsed token — see
 * {@link resolveEnumLink} for why a foreign enum is not silently accepted.
 */
const ENUM_LINK = /^\[enum@(?:([A-Za-z][A-Za-z0-9_]*)\.)?([A-Za-z][A-Za-z0-9_]*)\]$/;

/**
 * A member whose documentation does not state its value type, and what it is anyway.
 *
 * DATA, and deliberately not a branch in the builder. The distinction matters in both
 * directions: a hard-coded `if` grows silently as GTK's docs rot, and it never shrinks,
 * because nothing notices when an entry stops being needed. Every entry here is checked
 * in BOTH directions by {@link buildAriaValueTypes} — the member must exist, and it must
 * still be missing its sentence. A GTK release that fixes the doc therefore fails
 * generation with "no longer needed" rather than quietly keeping a hand-written answer
 * beside an authoritative one.
 */
interface AriaValueTypeException {
  /** `<enum GType>.<nick>`, the key the tables use. */
  readonly member: string;
  readonly valueType: AriaValueType;
  /** Quote GTK's actual prose, so the next reader can check the claim in one grep. */
  readonly reason: string;
}

/**
 * The declared remainder. One entry, measured on gtk4 4.22.4 and 4.23.3 alike.
 *
 * Reading `busy` out of its prose was considered and refused: "This state has boolean
 * values" occurs exactly once in the 718-GIR corpus, so a regex for it would match one
 * member and be called a convention on the strength of a single instance. An exception
 * that must justify itself and expires on its own is the more honest shape for a
 * one-off, and it costs the same.
 */
const ARIA_VALUE_TYPE_EXCEPTIONS: readonly AriaValueTypeException[] = [
  {
    member: "GtkAccessibleState.busy",
    valueType: "boolean",
    reason:
      'GTK states the type in prose instead of the convention: "A “busy” state. ' +
      'This state has boolean values". Every other member of the three enums ends with ' +
      '"Value type: <type>".',
  },
];

/** `<enum GType>.<nick>` -> value kind, plus the enum GType for the `enum` rows. */
export interface AriaValueTypes {
  readonly kinds: ReadonlyMap<string, AriaValueType>;
  /** The same keys, for the `'enum'` rows only. */
  readonly enums: ReadonlyMap<string, string>;
}

const EMPTY: AriaValueTypes = { kinds: new Map(), enums: new Map() };

/** The ARIA enums this namespace itself declares, by GType. */
function ariaEnumsOf(module: GirModule): Map<string, IntrospectedEnum> {
  const found = new Map<string, IntrospectedEnum>();
  for (const member of module.members.values()) {
    for (const candidate of Array.isArray(member) ? member : [member]) {
      if (!(candidate instanceof IntrospectedEnum)) continue;
      const gtype = candidate.glibTypeName;
      if (gtype && (ARIA_ENUM_GTYPES as readonly string[]).includes(gtype))
        found.set(gtype, candidate);
    }
  }
  return found;
}

/**
 * The enum GType a `[enum@…]` link names, or a refusal.
 *
 * Restricted to enums THIS namespace declares, on purpose. The tables the link joins
 * to — `ENUM_NICKS` and `ENUM_VALUES` — are emitted by the namespace that owns the
 * enum, so a link into a namespace with no vocabulary of its own would be a join into
 * nothing. That is not hypothetical elsewhere in this subpath: `PROP_ENUMS` shipped 5
 * rows naming a GType no vocabulary carried before the inlining rule existed. All five
 * enums Gtk-4.0 links to today (`GtkOrientation`, `GtkAccessibleAutocomplete`,
 * `GtkAccessibleSort`, `GtkAccessibleTristate`, `GtkAccessibleInvalidState`) are its
 * own, so the restriction costs nothing and turns the day that changes into a named
 * failure rather than a dangling key.
 */
function resolveEnumLink(module: GirModule, token: string, where: string): string | null {
  const link = ENUM_LINK.exec(token);
  if (!link) return null;
  const [, namespace, name] = link;
  if (namespace !== undefined && namespace !== module.namespace) {
    throw new VocabularyError(`${where}: value type links ${namespace}.${name}, another namespace`);
  }
  const target = module.getEnum(name);
  if (!target)
    throw new VocabularyError(`${where}: value type links ${name}, which is not declared here`);
  if (!target.glibTypeName)
    throw new VocabularyError(`${where}: value type links ${name}, an unregistered enum`);
  return target.glibTypeName;
}

/** The value type one member's doc states, or null where it states none. */
function statedValueType(member: GirEnumMember): string | null {
  const stated = VALUE_TYPE_SENTENCE.exec(member.doc ?? "");
  // `visited` ends `Value type: boolean.` and `key-shortcuts` runs on after `string.`,
  // so the token carries a sentence-final period into the lookup unless it is dropped.
  return stated ? stated[1].replace(/\.+$/, "") : null;
}

/**
 * Read the ARIA value types out of this namespace's own documentation.
 *
 * THE GATE IS THE POINT, not the table. A member this cannot answer for makes
 * generation fail and names itself, because the alternative — a table missing a row —
 * is worse than no table at all: a consumer joining `checked` and finding nothing has
 * no way to tell "GTK has no such state" from "the generator dropped it", and the
 * plausible fallback (treat the name as boolean) emits `true` where GTK means `1`.
 *
 * Four refusals, each of which has to be able to fire:
 *
 *  1. A member with no `Value type:` sentence and no declared exception.
 *  2. A token that is neither a known primitive nor a resolvable `[enum@…]` link.
 *  3. An exception that has stopped being needed, or never named a real member.
 *  4. `noComments`, which turns off the only source this has. Documentation is where
 *     GTK keeps the table; a run that discards it cannot emit the table, and emitting
 *     an empty one instead would be failure 1 for all 53 members at once, silently.
 *
 * And one more at the enum level: the three enums are one API, so a namespace that
 * declares some of them must declare all of them. Without that, renaming one upstream
 * would shrink the table by a third and raise nothing.
 */
export function buildAriaValueTypes(module: GirModule, config: OptionsGeneration): AriaValueTypes {
  const declared = ariaEnumsOf(module);
  if (declared.size === 0) return EMPTY;
  if (declared.size !== ARIA_ENUM_GTYPES.length) {
    const missing = ARIA_ENUM_GTYPES.filter((gtype) => !declared.has(gtype));
    throw new VocabularyError(
      `${module.packageName} declares part of the ARIA table but not ${missing.join(", ")}`,
    );
  }
  if (config.noComments) {
    throw new VocabularyError(
      `${module.packageName}: the ARIA value types are documented, and noComments discards documentation — ` +
        "generate with comments or without widgetVocabulary",
    );
  }

  const exceptions = new Map(ARIA_VALUE_TYPE_EXCEPTIONS.map((entry) => [entry.member, entry]));
  const kinds = new Map<string, AriaValueType>();
  const enums = new Map<string, string>();
  const stated = new Set<string>();

  for (const gtype of ARIA_ENUM_GTYPES) {
    for (const member of declared.get(gtype)?.members.values() ?? []) {
      const key = `${gtype}.${member.nick}`;
      const token = statedValueType(member);
      if (token === null) {
        const exception = exceptions.get(key);
        if (!exception) throw new VocabularyError(`${key}: documentation states no value type`);
        kinds.set(key, exception.valueType);
        continue;
      }
      stated.add(key);
      const primitive = PRIMITIVE_VALUE_TYPES.get(token);
      if (primitive) {
        kinds.set(key, primitive);
        continue;
      }
      const enumType = resolveEnumLink(module, token, key);
      if (enumType === null)
        throw new VocabularyError(`${key}: value type "${token}" is not understood`);
      kinds.set(key, "enum");
      enums.set(key, enumType);
    }
  }

  assertExceptionsStillNeeded(kinds, stated);
  return { kinds, enums };
}

/**
 * An exception list that can only grow is a second source of truth with no expiry.
 *
 * So both halves are checked. A member the exception names and this GIR does not have
 * is a list describing a GTK that no longer exists; a member that now STATES its value
 * type is an exception asserting by hand what the authoritative source already says,
 * and the two would drift without a word.
 */
function assertExceptionsStillNeeded(
  kinds: ReadonlyMap<string, AriaValueType>,
  stated: ReadonlySet<string>,
): void {
  for (const entry of ARIA_VALUE_TYPE_EXCEPTIONS) {
    if (!kinds.has(entry.member)) {
      throw new VocabularyError(
        `declared ARIA exception ${entry.member} names no member of this GIR`,
      );
    }
    if (stated.has(entry.member)) {
      // The reason travels with the refusal, because the person reading it has to decide
      // whether to delete the entry, and "why was this here" is the question they are
      // about to go looking for.
      throw new VocabularyError(
        `declared ARIA exception ${entry.member} is no longer needed — its documentation now ` +
          `states a value type. It was declared because: ${entry.reason}`,
      );
    }
  }
}
