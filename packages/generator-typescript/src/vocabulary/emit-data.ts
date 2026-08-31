/**
 * Render the `./surface` runtime data module.
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

export function emitVocabularyData(surface: WidgetVocabulary): string {
  const ownProps: string[] = [];
  for (const decl of [...surface.declarations.values()].sort((a, b) =>
    a.gtype < b.gtype ? -1 : 1,
  )) {
    if (!decl.emitted || decl.props.length === 0) continue;
    ownProps.push(`    ${decl.gtype}: ${list(decl.props.map((prop) => prop.girName))},`);
  }

  // The runtime data describes EVERYTHING the surface knows, widgets and holders alike:
  // a holder a consumer cannot look up is a holder it has to re-read the GIR for.
  // `CHILD_HOLDERS` is the line between the two kinds, not a second data set.
  const all = [...surface.widgets, ...surface.childHolders].sort((a, b) =>
    a.gtype < b.gtype ? -1 : 1,
  );

  const ownSignals = all
    .filter((widget) => widget.signals.length > 0)
    .map((widget) => `    ${widget.gtype}: ${list(widget.signals)},`);

  const decls = all.map((widget) => `    ${widget.gtype}: ${list(widget.chain)},`);

  const nicks = [...surface.enums.values()]
    .sort((a, b) => (a.gtype < b.gtype ? -1 : 1))
    .map((entry) => `    ${entry.gtype}: ${list(entry.nicks)},`);

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

export const SLOT_CANDIDATES = ${record(slots)};

export const SINCE = ${record(since)};
`;
}
