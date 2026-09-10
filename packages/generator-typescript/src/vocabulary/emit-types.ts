/**
 * Render the `./vocabulary` type module.
 *
 * Module-scoped exports ONLY: named interfaces and type aliases a consumer imports.
 * No `declare global`, no `JSX` namespace, no `IntrinsicElements`, no augmentation
 * of anyone else's module. That is the whole design constraint, and it is observed
 * rather than feared — a JSX namespace is a global declaration, so a second library
 * declaring one collides on every shared tag, and `@girs/*` is used by projects that
 * want nothing to do with JSX.
 *
 * The runtime data is DECLARED here and defined in the sibling `.js`, so one subpath
 * serves both. Types are erased, and a test that asks the installed GTK whether
 * every emitted name is real cannot read a type.
 */

import {
  constructOnlyAliasOf,
  nickAliasOf,
  propsInterfaceOf,
  type VocabularyDecl,
  type VocabularyWidget,
  type WidgetVocabulary,
} from "./model.ts";

const RUNTIME_DATA_DOC = `/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by \`GObject.signal_lookup\`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */`;

const jsdoc = (
  indent: string,
  doc: string | undefined,
  deprecated: boolean,
  since?: string,
  deprecatedSince?: string,
  deprecatedDoc?: string,
  defaultValue?: string,
): string => {
  const lines: string[] = [];
  if (doc) lines.push(doc);
  if (since) lines.push(`@since ${since}`);
  // "Do I have to set this?" is the question a template author has at the attribute. The
  // main `.d.ts` answers it (2004 `@default` tags in Gtk-4.0); the vocabulary, which is
  // the file a JSX or Vue author actually hovers, did not.
  if (defaultValue) lines.push(`@default ${defaultValue}`);
  if (deprecated) {
    // Same shape the main `.d.ts` uses, so an editor renders one thing for both.
    const detail = [deprecatedSince ? `since ${deprecatedSince}` : "", deprecatedDoc ?? ""]
      .filter(Boolean)
      .join(": ");
    lines.push(detail ? `@deprecated ${detail}` : "@deprecated");
  }
  if (lines.length === 0) return "";
  if (lines.length === 1) return `${indent}/** ${lines[0]} */\n`;
  return `${indent}/**\n${lines.map((l) => `${indent} * ${l}`).join("\n")}\n${indent} */\n`;
};

/** A GObject property name is dashed, so every key needs quoting; be exact anyway. */
const key = (name: string): string =>
  /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) ? name : `'${name}'`;

function renderBases(decl: VocabularyDecl, surface: WidgetVocabulary): string {
  if (decl.bases.length === 0) return "";
  const omissions = surface.omissions.get(decl.key);
  const rendered = decl.bases.map((base) => {
    const target = surface.declarations.get(base);
    const name = target ? propsInterfaceOf(target.gtype) : base;
    const drop = omissions?.get(base);
    if (!drop || drop.length === 0) return name;
    return `Omit<${name}, ${drop.map((d) => `'${d}'`).join(" | ")}>`;
  });
  return ` extends ${rendered.join(", ")}`;
}

function renderDeclaration(decl: VocabularyDecl, surface: WidgetVocabulary): string {
  const body = decl.props
    .map(
      (prop) =>
        jsdoc(
          "    ",
          prop.doc,
          prop.deprecated,
          prop.since,
          prop.deprecatedSince,
          prop.deprecatedDoc,
          prop.defaultValue,
        ) + `    ${key(prop.girName)}?: ${prop.ts};\n`,
    )
    .join("");
  const constructOnly = decl.props
    .filter((prop) => prop.constructOnly)
    .map((prop) => `'${prop.girName}'`);
  const baseAliases = decl.bases
    .map((base) => surface.declarations.get(base))
    .filter((base): base is VocabularyDecl => base !== undefined)
    .map((base) => constructOnlyAliasOf(base.gtype));
  const parts = [...baseAliases, ...constructOnly];
  return (
    jsdoc("", decl.doc, false) +
    `export interface ${propsInterfaceOf(decl.gtype)}${renderBases(decl, surface)} {\n${body}}\n` +
    `/** Settable only at construction — a renderer must REBUILD, not patch. */\n` +
    `export type ${constructOnlyAliasOf(decl.gtype)} = ${parts.length > 0 ? parts.join(" | ") : "never"};\n`
  );
}

function renderImports(surface: WidgetVocabulary): string[] {
  const lines: string[] = [];
  for (const [ns, importPath] of [...surface.namespaceImports].sort(([a], [b]) =>
    a < b ? -1 : 1,
  )) {
    // The own namespace is a SIBLING file, not a package self-reference: the
    // surface ships inside the package it describes.
    const from = ns === surface.namespace ? `./${surface.importName}.js` : importPath;
    lines.push(`import type ${ns} from '${from}';`);
  }
  for (const [subpath, names] of [...surface.surfaceImports].sort(([a], [b]) => (a < b ? -1 : 1))) {
    lines.push(`import type { ${names.join(", ")} } from '${subpath}';`);
  }
  return lines;
}

export function emitVocabularyTypes(surface: WidgetVocabulary): string {
  const emitted = [...surface.declarations.values()]
    .filter((decl) => decl.emitted)
    .sort((a, b) => (a.gtype < b.gtype ? -1 : 1));
  const inlined = emitted.filter((decl) => decl.inlined);

  const nicks = [...surface.enums.values()]
    .sort((a, b) => (a.gtype < b.gtype ? -1 : 1))
    .map((entry) => {
      const union =
        entry.nicks.length === 0 ? "never" : entry.nicks.map((nick) => `'${nick}'`).join(" | ");
      return `export type ${nickAliasOf(entry.gtype)} = ${union};`;
    });

  const rowsOf = (entries: readonly VocabularyWidget[]): string[] =>
    entries.map((widget) => {
      const slots = [...widget.slotCandidates]
        .sort(([a], [b]) => (a < b ? -1 : 1))
        .map(([slot, method]) => `        '${slot}': '${method}';`);
      return (
        `    ${widget.gtype}: {\n` +
        `        class: ${widget.namespace}.${widget.local};\n` +
        `        props: ${propsInterfaceOf(widget.gtype)};\n` +
        `        signals: ${widget.namespace}.${widget.local}.SignalSignatures;\n` +
        `        constructOnly: ${constructOnlyAliasOf(widget.gtype)};\n` +
        `        slotCandidates: ${slots.length > 0 ? `{\n${slots.join("\n")}\n        }` : "{}"};\n` +
        `    };`
      );
    });

  const rows = rowsOf(surface.widgets);
  const holderRows = rowsOf(surface.childHolders);

  const slotTotal = [...surface.widgets, ...surface.childHolders].reduce(
    (n, widget) => n + widget.slotCandidates.size,
    0,
  );

  return `/**
 * The GIR-derived widget VOCABULARY for ${surface.namespace}-${surface.version}.
 *
 * GENERATED — do not edit. Provenance: ${surface.provenance}
 *
 * ${surface.widgets.length} concrete widgets${surface.childHolders.length > 0 ? `, ${surface.childHolders.length} child holders` : ""}, ${emitted.length} declarations${inlined.length > 0 ? ` (${inlined.length} inlined from a namespace with no surface)` : ""}, ${surface.enums.size} enum nick unions, ${slotTotal} slot candidates.
 *
 * Module-scoped exports only. There is no \`JSX\` namespace here, no tag spelling and
 * no \`on<Signal>\` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a \`declare global\` on
 * \`React.JSX\` collides with every other library on a shared tag — while a
 * module-scoped \`JSX\` behind a \`jsxImportSource\` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and \`ConstructorProps\` is not: WRITABLE-only (measured on
 * Gtk-4.0, \`ConstructorProps\` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling \`g_object_set\`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: \`X.SignalSignatures\`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the \`notify::\` keys folded in, is what \`Widgets[G]['signals']\` points at.
 */

${renderImports(surface).join("\n")}

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's \`glib:nick\`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with \`scripts/check-nick-derivation.mjs\` in ts-for-gir.
// ---------------------------------------------------------------------------

${nicks.join("\n")}

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: \`GtkBox\` declares four properties
// of its own and \`orientation\` is not among them — it lives on \`Gtk.Orientable\`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

${emitted.map((decl) => renderDeclaration(decl, surface)).join("\n")}
// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue \`GlobalComponents\`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// \`slotCandidates\` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// \`set_title_widget\` parents its argument and \`set_activatable_widget\` does not, and
// both are \`void f(GtkWidget*)\` at \`transfer-ownership="none"\`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {
${rows.join("\n")}
}

/** Every GType this namespace can create. A consumer derives its own tag map. */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// \`GtkListItem\`, \`GtkListHeader\`, \`GtkColumnViewCell\` and \`AdwToggle\` descend from
// \`GObject.Object\` and hold a widget through \`set_child\`/\`get_child\`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in \`Widgets\`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {
${holderRows.join("\n")}
}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a \`ref\`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

${RUNTIME_DATA_DOC}
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    readonly unsettableProps: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like \`OWN_PROPS\`, so both are read at every link of a \`DECLS\` chain. An
 * abstract base has no \`Widgets\` row and still owns signals — \`GtkWidget\` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> every declaration its members come from, self first. */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in \`DECLS\` that hold a widget without being one — see \`ChildHolders\`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * \`<enum GType>.<nick>\` -> the integer GObject registers for it, from GIR's \`value\`.
 *
 * Position in \`ENUM_NICKS\` is NOT this number. Counting is wrong on 6 of the 129 enums a
 * GTK 4 vocabulary carries -- 104 in Gtk-4.0 and 25 in Adw-1: \`GtkResponseType\` runs -1 to -11, \`GtkTextWindowType\` starts
 * at 1, \`GtkOrdering\` and \`GtkConstraintRelation\` are -1/0/1, \`GtkAlign\` has two names
 * on one value, and \`GtkConstraintStrength.required\` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The \`<enum GType>.<nick>\` entries GIR marks \`deprecated="1"\`.
 *
 * Two names on one value is how GObject spells an alias -- \`GTK_ALIGN_BASELINE\` and
 * \`GTK_ALIGN_BASELINE_FILL\` are both 4, and both keep a \`ENUM_VALUES\` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * \`<enum GType>.<nick>\` -> the raw GIR \`value\` no number could be read from.
 *
 * The declared remainder, so that every nick in \`ENUM_NICKS\` is in \`ENUM_VALUES\` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes \`(null)\`, a char enum writes a letter) and an integer past
 * \`Number.MAX_SAFE_INTEGER\`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * \`<bitfield GType>.<nick>\` -> the integer GObject registers for that one member.
 *
 * \`ENUM_NICKS\` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 21 writable widget properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared
 * bare \`number\` -- \`GtkEntry:input-hints\`, \`GtkPopoverMenu:flags\`, \`AdwTabView:shortcuts\`
 * among them. Counting is worst here: 95 of 121 Gtk-4.0 bitfield members disagree with their
 * position, against 29 of 685 enumeration members.
 *
 * Combine with \`|\` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** \`<bitfield GType>.<nick>\` -> the raw GIR \`value\` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * \`<declaration GType>.<property>\` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; \`ENUM_VALUES\` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like \`OWN_PROPS\`, so it is
 * read at every link of a \`DECLS\` chain — \`orientation\` belongs to \`GtkOrientable\`, not
 * to the \`GtkBox\` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so \`AdwComboRow.search-match-mode\` names
 * \`GtkStringFilterMatchMode\` and its rows are in \`@girs/gtk-4.0/vocabulary\` — 57 of the 438
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * \`Type\`, \`Type.property\` and \`Type::signal\` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * \`TypeError: can't access property "$gtype", ctor() is undefined\` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (\`version\`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
`;
}
