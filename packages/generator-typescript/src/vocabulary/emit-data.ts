/**
 * Render the `./vocabulary` runtime data module.
 *
 * Why data and not only types: the one check that can go red for a real reason is
 * "does the INSTALLED library actually have this". Asking it needs a running GJS
 * with a GTK present, which this generator does not have — it emits 705 namespaces
 * headlessly. So the facts ship as values a consumer's test can read, and the
 * checking stays where a GTK is installed.
 *
 * Kept deliberately narrow: names, the declaration chain, nicks, slot candidates and
 * since-versions. No default values — GIR's `default-value` and a probed instance
 * disagree in 104 of 953 measured cases, so a default that is worth having has to
 * come from constructing the object, which again is not something this generator can
 * do.
 */

import type { WidgetVocabulary } from "./model.ts";

const record = (rows: readonly string[]): string =>
  rows.length === 0 ? "{}" : `{\n${rows.join("\n")}\n}`;

const list = (items: readonly string[]): string =>
  `[${items.map((item) => `'${item}'`).join(", ")}]`;

/**
 * A single-quoted literal for text that is NOT an identifier.
 *
 * `list` above quotes nicks and GTypes, which GObject constrains to
 * `[A-Za-z0-9_-]` (measured: no nick or GType in the 718 GIRs leaves that set). The raw
 * GIR `value` of a member no number could be read from is arbitrary text -- Vala writes
 * `(null)`, a char enum writes a letter -- so it is the one thing emitted here that has to
 * survive a quote of its own.
 *
 * Line terminators are in the list beside the quote and the backslash because they fail
 * DIFFERENTLY and worse: a stray quote emits a wrong string, a raw newline emits an
 * unterminated one and the whole module stops parsing -- every export in it, not just this
 * entry. The parser does not apply XML attribute-value normalisation, so a newline written
 * into a `value` reaches here as a newline.
 */
const quote = (text: string): string =>
  `'${text
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")}'`;

export function emitVocabularyData(surface: WidgetVocabulary): string {
  // `OWN_PROPS` and `OWN_SIGNALS` are keyed by DECLARATION, not by creatable widget, and
  // they must stay keyed the same way: `DECLS` hands the consumer a chain of GTypes, and
  // it reads both tables at every link of it. Keying signals by concrete widget is what
  // this fixes — `GtkWidget` owns 13 signals and no `Widgets` row, so the two tables
  // disagreed about which GTypes the vocabulary describes.
  const byGType = [...surface.declarations.values()]
    .filter((decl) => decl.emitted)
    .sort((a, b) => (a.gtype < b.gtype ? -1 : 1));

  const ownProps = byGType
    .filter((decl) => decl.props.length > 0)
    .map((decl) => `    ${decl.gtype}: ${list(decl.props.map((prop) => prop.girName))},`);

  // The join `ENUM_VALUES` needs and nothing else in the vocabulary carries: which enum or
  // bitfield a settable property IS. Keyed by DECLARATION, like `OWN_PROPS` beside it, so a
  // consumer walks a `DECLS` chain and reads all three at every link — `orientation` is
  // registered on `GtkOrientable`, not on the `GtkBox` a caller starts from.
  const propEnums = byGType.flatMap((decl) =>
    decl.props
      .filter((prop) => prop.enumType !== undefined)
      .map((prop) => `    '${decl.gtype}.${prop.girName}': '${prop.enumType}',`),
  );

  const ownSignals = byGType
    .filter((decl) => decl.signals.length > 0)
    .map((decl) => `    ${decl.gtype}: ${list(decl.signals)},`);

  // The runtime data describes EVERYTHING the surface knows, widgets and holders alike:
  // a holder a consumer cannot look up is a holder it has to re-read the GIR for.
  // `CHILD_HOLDERS` is the line between the two kinds, not a second data set.
  const all = [...surface.widgets, ...surface.childHolders].sort((a, b) =>
    a.gtype < b.gtype ? -1 : 1,
  );

  const decls = all.map((widget) => `    ${widget.gtype}: ${list(widget.chain)},`);

  const enums = [...surface.enums.values()].sort((a, b) => (a.gtype < b.gtype ? -1 : 1));

  const nicks = enums.map((entry) => `    ${entry.gtype}: ${list(entry.nicks)},`);

  // `<GType>.<nick>`, the same grammar `SINCE` uses for a member, because a consumer that
  // reads both should not need two key parsers. Emitted for exactly the enums `ENUM_NICKS`
  // covers, so "every nick has a number or is named in the remainder" is a claim about one
  // subject rather than about the overlap of two.
  const values = enums.flatMap((entry) =>
    [...entry.values]
      .sort(([a], [b]) => (a < b ? -1 : 1))
      .map(([nick, value]) => `    '${entry.gtype}.${nick}': ${value},`),
  );

  const deprecated = enums.flatMap((entry) =>
    [...entry.deprecated].sort().map((nick) => `${entry.gtype}.${nick}`),
  );

  // Same two shapes as the enum tables above, over the bitfields — see `WidgetVocabulary.flags`
  // for why they are carried at all and why they are their own table.
  const bitfields = [...surface.flags.values()].sort((a, b) => (a.gtype < b.gtype ? -1 : 1));

  const flagValues = bitfields.flatMap((entry) =>
    [...entry.values]
      .sort(([a], [b]) => (a < b ? -1 : 1))
      .map(([nick, value]) => `    '${entry.gtype}.${nick}': ${value},`),
  );

  const flagUnreadable = bitfields.flatMap((entry) =>
    [...entry.unreadable]
      .sort(([a], [b]) => (a < b ? -1 : 1))
      .map(([nick, raw]) => `    '${entry.gtype}.${nick}': ${quote(raw)},`),
  );

  const unreadable = enums.flatMap((entry) =>
    [...entry.unreadable]
      .sort(([a], [b]) => (a < b ? -1 : 1))
      .map(([nick, raw]) => `    '${entry.gtype}.${nick}': ${quote(raw)},`),
  );

  const slots = all
    .filter((widget) => widget.slotCandidates.size > 0)
    .map((widget) => {
      const rows = [...widget.slotCandidates]
        .sort(([a], [b]) => (a < b ? -1 : 1))
        .map(([slot, method]) => `        '${slot}': '${method}',`);
      return `    ${widget.gtype}: {\n${rows.join("\n")}\n    },`;
    });

  const since = [...surface.since]
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([member, version]) => `    '${member}': '${version}',`);

  // Structured, not the prose line. The header sentence is for a reader; a consumer
  // comparing this vocabulary against the library it runs against needs the version as a
  // value, and pulling it out of a sentence is a parser nobody should have to write.
  const p = surface.provenanceData;
  const provenance = [
    "{",
    `    namespace: '${p.namespace}',`,
    `    version: '${p.version}',`,
    `    libraryVersion: ${p.libraryVersion === null ? "null" : `'${p.libraryVersion}'`},`,
    `    childHolders: ${p.childHolders},`,
    `    droppedBases: ${list(p.droppedBases)},`,
    `    inlinedBases: ${list(p.inlinedBases)},`,
    `    unsettableProps: ${list(p.unsettableProps)},`,
    "}",
  ].join("\n");

  return `// The widget vocabulary of ${surface.namespace}-${surface.version} as runtime data.
//
// GENERATED — do not edit. Provenance: ${surface.provenance}
//
// The type half of this subpath is the sibling \`.d.ts\`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = ${provenance};

export const OWN_PROPS = ${record(ownProps)};

export const OWN_SIGNALS = ${record(ownSignals)};

export const DECLS = ${record(decls)};

// The GTypes above that are NOT widgets: they hold one through \`set_child\`/\`get_child\`
// and descend from \`GObject.Object\`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = ${list(surface.childHolders.map((holder) => holder.gtype))};

export const ENUM_NICKS = ${record(nicks)};

// The number behind each of those nicks, read from GIR's own \`value\` attribute.
//
// It ships because position in \`ENUM_NICKS\` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 129 enums a GTK 4 vocabulary carries (104 in Gtk-4.0, 25 in Adw-1) --
// \`GtkResponseType\` runs -1 down to
// -11, \`GtkTextWindowType\` starts at 1, and \`GtkConstraintStrength.required\` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = ${record(values)};

// The nicks GIR marks \`deprecated="1"\`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// \`GTK_ALIGN_BASELINE\` and \`GTK_ALIGN_BASELINE_FILL\` are both 4. \`ENUM_VALUES\` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = ${list(deprecated)};

// The declared remainder: nicks whose GIR \`value\` is not a number this can carry.
//
// Every nick in \`ENUM_NICKS\` is in \`ENUM_VALUES\` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes \`(null)\`, a char enum writes a letter) and an integer past
// \`Number.MAX_SAFE_INTEGER\`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's \`girs/\`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = ${record(unreadable)};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// \`ENUM_NICKS\` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 21 writable widget properties in Gtk-4.0
// and Adw-1 are bitfield-typed -- \`GtkEntry:input-hints\`, \`GtkPopoverMenu:flags\`,
// \`AdwTabView:shortcuts\`, ... -- and they are typed bare \`number\`, so a host without GI
// has nothing to compute one from. Counting is worst exactly here: 95 of 121 Gtk-4.0
// bitfield members disagree with their position, against 29 of 685 enumeration members.
//
// A table of its own rather than more rows in \`ENUM_VALUES\`, so that "every nick in
// \`ENUM_NICKS\` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = ${record(flagValues)};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// \`girs/\` whose value is past \`Number.MAX_SAFE_INTEGER\` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = ${record(flagUnreadable)};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// \`orientation\` to the number behind the nick \`vertical\`; \`ENUM_VALUES\` is keyed
// \`GtkOrientation.vertical\`, and nothing else says that \`orientation\` is a
// \`GtkOrientation\`. Deriving it is not available: \`never\` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
export const PROP_ENUMS = ${record(propEnums)};

export const SLOT_CANDIDATES = ${record(slots)};

export const SINCE = ${record(since)};
`;
}
