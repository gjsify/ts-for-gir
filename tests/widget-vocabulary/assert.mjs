// Asserts the `@girs/<ns>/vocabulary` subpath: what it emits, what it must NOT emit, that
// the type half and the runtime half state the SAME facts, and that the generator refuses
// an input it cannot describe.
//
// WHY THE NEGATIVE HALVES ARE NOT OPTIONAL. A suite of positive assertions over a
// generator's own output cannot tell "the rule works" from "the rule never ran": a
// `mustNot` list that passes because the emitter produced nothing at all reads exactly
// like one that passes because the emitter filtered correctly. So this file carries ten
// controls beside the positives, each of which has to go the other way:
//
//   1. FLAG OFF, same input — no surface file and no `./vocabulary` in the package.json. A
//      subpath that appears either way is not opt-in.
//   2. A BROKEN input — a widget with a settable property naming a type its OWN namespace
//      declares nowhere. That GIR contradicts itself and nothing outside it can be the
//      cause, so the generator must exit non-zero and name the property. Note the scope
//      twice over: what is refused is an unresolvable identifier, NOT every property that
//      prints `never`, and it is refused only WITHIN one namespace — control 9 carries the
//      cross-namespace half, which is a declared remainder instead. A writable
//      `gpointer` resolves fine and no TypeScript value satisfies it — `GcrTreeSelector:
//      columns`, `Wnck.ActionMenu:window`, eleven on `AgsGui.Cartesian` — as does one C
//      callback, `GimpDialog:help-func`. Those are emitted as `never`, kept in `OWN_PROPS`
//      because the ParamSpec is real, and NAMED in the provenance line of the surface that
//      carries them. The `user-data` assertions below hold that second half, because a
//      rule stated in a comment and enforced nowhere is the one that drifts.
//   3. TYPE HALF vs RUNTIME HALF — the two are read independently (regex over the `.d.ts`,
//      `import()` of the `.js`) and compared. Emitting both from one model means the
//      generator agrees with itself; this is the only check that notices if it stops.
//   4. AN ARIA MEMBER WHOSE DOC STATES NO VALUE TYPE, covered by no declared exception.
//      The table is complete or absent: a dropped row is indistinguishable from "GTK has
//      no such name", and the fallback a consumer reaches for next emits `true` for
//      `checked: true` where GTK means the tristate 1.
//   5. A DECLARED EXCEPTION THAT IS NO LONGER NEEDED. The exception for
//      `GtkAccessibleState.busy` is data, and data that can only grow is a second source
//      of truth with no expiry. `fixtures-aria/AriaStale-1.0.gir` is that entry's own
//      upstream fix, and generation must refuse rather than keep a hand-written answer
//      beside an authoritative one.
//   6. `noComments` WITH `widgetVocabulary`. The ARIA value types live in GIR
//      documentation, so the flag that discards it must refuse rather than quietly emit
//      an empty table — control 4's failure arrived at through an option instead.
//   7. AN ABSTRACT CLASS NO CHAIN REACHES. Coverage is "what a UI description file can
//      INSTANTIATE", and without this control that rule and "every declaration in the
//      namespace" produce the same output here, so the first could silently become the
//      second. `Mini.Tool` is abstract, has a settable property and nothing derives from
//      it: it must be absent from the vocabulary entirely. `GtkWidget` holds the opposite
//      half — abstract, reached as a base, so emitted as an interface with no widget row.
//   8. AN INSTANTIABLE THAT IS NOT A WIDGET. `Mini.SizeGroup` must get a props interface,
//      a `DECLS` chain and a `PROP_ENUMS` row, and must appear in NEITHER `Widgets` nor
//      `ChildHolders` nor `SLOT_CANDIDATES` — even though its `add_widget` is exactly the
//      shape `slotNameOf` derives a slot from. `Widgets` is the index of what IS a widget
//      and the widening must not have moved it; `GtkAdjustment`, `GtkSetter`,
//      `GtkActorBin` and `GtkFlipper` are held to the same line below.
//   9. AN UNRESOLVABLE TYPE FROM ANOTHER NAMESPACE, which must NOT be refused — see
//      control 2 for the half that is. `Derived.Panel:ghost` names a type its installed
//      `Base` does not declare, which is what `Shell.App:app-info` is in the real corpus,
//      and the main emitter's own answer there is `never`. The vocabulary prints `never`,
//      keeps the property in `OWN_PROPS` because the ParamSpec is real, and names the
//      identifier in a provenance remainder of its own.
//  11. A NAMESPACE WITH NO WIDGET IN IT AT ALL still emits a vocabulary, and its
//      `identifierPrefixes` are the GIR's, not the namespace name and not a derivation.
//      A UI file NAMES types it never instantiates — `as <Gio.Icon>` is a `type="GIcon"` —
//      and a gate rooted at `GtkWidget` refused the whole class, `Gio`, `Gdk` and `GObject`
//      included, no matter how complete the widget namespaces' own vocabularies were.
//  12. A NAMESPACE THAT CAN INSTANTIATE NOTHING emits nothing — not the file, and not the
//      `./vocabulary` entry in its package.json. Control 11 alone passes for a generator
//      that emits unconditionally; this is the half that says which 88 GIRs stay out.
//  10. A FOREIGN DECLARATION ITS OWNER'S VOCABULARY DOES NOT CARRY. A cross-namespace base
//      is imported rather than copied, and that is sound only while the owner emits it —
//      which used to follow from both sides walking widget chains and no longer does.
//      `Base.Extra` is implemented by nothing in Base and by `Derived.Panel`, so Derived
//      must INLINE it; importing names an export that does not exist. `@girs/ide-46`
//      shipped exactly that against `@girs/gtksource-5`.
//
// And one positive case that is easy to get wrong in the safe-looking direction: a base
// from a namespace with no surface of its own. Dropping it is what a reader would do; it
// would shrink the vocabulary by properties nobody would notice were missing. Measured in
// the real corpus exactly once — Gcr.Prompt, ten writable properties — so the fixture is a
// stand-in for a real case, not a hypothetical.

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const pkgDir = join(here, "generated", "mini-1.0");
const typesFile = join(pkgDir, "mini-1.0-vocabulary.d.ts");
const dataFile = join(pkgDir, "mini-1.0-vocabulary.js");

/** @type {string[]} */
const failures = [];
const fail = (message) => failures.push(message);

if (!existsSync(typesFile)) throw new Error(`surface types not generated: ${typesFile}`);
if (!existsSync(dataFile)) throw new Error(`surface data not generated: ${dataFile}`);

const types = readFileSync(typesFile, "utf8");

const must = [
  // The property axis: writable only, optional, keyed as GObject registered it.
  ["dashed property key", /'css-classes'\?: string\[\];/],
  ["plain property key stays unquoted", /\n\s+spacing\?: number;/],
  [
    "interface property reaches the implementor",
    /orientation\?: GtkOrientationNick \| Mini\.Orientation;/,
  ],
  ["array property keeps its element type", /'css-classes'\?: string\[\];/],
  // Rationale: `GObject.Object` used to be a DROPPED empty base, because GObject-2.0
  // emitted no vocabulary to import it from; it emits one now, so the base is IMPORTED like
  // any other foreign declaration and the union names it. The control is unchanged in
  // force — the chain still bottoms out in `never`, asserted below against GObject's own
  // vocabulary rather than against a hole where a base used to be dropped.
  ["construct-only union names the property", /GtkWidgetConstructOnly = GObjectConstructOnly \| 'css-name'/],
  [
    "a declaration with no own construct-only props is rooted in its base's union",
    /GtkOrientableConstructOnly = GObjectConstructOnly/,
  ],
  [
    "construct-only unions inherit",
    /GtkBoxConstructOnly = GtkWidgetConstructOnly \| GtkOrientableConstructOnly/,
  ],
  // The nick axis: read from `glib:nick`, never derived from the member name.
  ["nick union from glib:nick", /GtkOrientationNick = 'horizontal' \| 'vertical' \| 'sideways';/],
  // Resolvable, inexpressible, and therefore emitted rather than refused — see the header.
  ["a gpointer property is kept as never", /'user-data'\?: never;/],
  [
    "…and named in the provenance line",
    /prop\(s\) no TypeScript value satisfies: Mini\.Box\.user-data/,
  ],
  // Every registered enum the namespace declares, not only the ones its own properties
  // reference: another namespace's widget can reach this one, and the version that emitted
  // only what it referenced left a real consumer importing a name that did not exist.
  ["nick union for an unreferenced enum", /GtkUnreferencedNick = 'one' \| 'two';/],
  // The widget map: GType-keyed, pointing at the SignalSignatures already emitted.
  ["widget row keyed by GType", /\n {4}GtkBox: \{/],
  ["row carries the instance type", /class: Mini\.Box;/],
  ["row points at the existing signal table", /signals: Mini\.Box\.SignalSignatures;/],
  ["slot candidate derived from set_child", /'child': 'set_child';/],
  ["slot candidate that parents nothing is listed too", /'activatable': 'set_activatable_widget';/],
  // The own-namespace import is a sibling file, not a package self-reference.
  ["own namespace imported relatively", /import type Mini from '\.\/mini-1\.0\.js';/],
  // Runtime data is declared here and defined in the sibling `.js`.
  [
    "runtime data declared",
    /export const OWN_PROPS: Readonly<Record<string, readonly string\[\]>>;/,
  ],
  ["since map declared", /export const SINCE: Readonly<Record<string, string>>;/],
  // The default a template author needs at the attribute. The main `.d.ts` has carried
  // it all along (2004 tags in Gtk-4.0); this file, which is what a JSX or Vue author
  // hovers, carried none.
  ["property documents its default", /@default 6/],
  ["helper types", /export type WidgetGType = keyof Widgets;/],
  // The ARIA kinds are a closed union in the type half, so a consumer that switches on
  // one is told by tsc when a kind it does not handle appears.
  [
    "ARIA value kinds are a closed union",
    /export type AriaValueType = 'string' \| 'integer' \| 'double' \| 'boolean' \| 'reference' \| 'enum';/,
  ],
  // Deprecation, in the same shape the main `.d.ts` uses. The surface read a base
  // field the property parser never sets, so it emitted none at all — 0 against 136
  // in the `.d.ts` for the same namespace.
  [
    "deprecated property carries version and reason",
    /@deprecated since 1\.4: Use the style class instead\./,
  ],
  // COVERAGE IS WHAT A UI FILE CAN INSTANTIATE, not what a widget chain reaches. Each of
  // these is a registered, non-abstract class that no widget inherits from, and every one
  // of them is something a `.ui` file creates.
  ["a non-widget instantiable gets a props interface", /export interface GtkSizeGroupProps\b/],
  ["…and so does one with half an accessor pair", /export interface GtkSetterProps\b/],
  ["…and one with neither accessor", /export interface GtkAdjustmentProps\b/],
  ["…and one whose child is not a widget", /export interface GtkActorBinProps\b/],
  // Child holders: a sibling table, never four more rows in `Widgets`.
  ["child holder table", /export interface ChildHolders \{/],
  ["child holder helper type", /export type ChildHolderGType = keyof ChildHolders;/],
  ["child holder list declared", /export const CHILD_HOLDERS: readonly string\[\];/],
];

const mustNot = [
  // The correctness bug `ConstructorProps` has: a read-only property offered as settable.
  // GTK's failure mode for writing one is exit 0.
  ["read-only property offered", /\n\s+parent\?:/],
  // Flags stay `number`: GObject exposes no way to resolve a nick SET.
  ["flags widened to a nick union", /GtkStateFlagsNick/],
  // Dialect, all of it, and a JSX namespace is a GLOBAL declaration.
  ["a JSX namespace", /namespace JSX/],
  ["intrinsic elements", /IntrinsicElements/],
  ["a Vue GlobalComponents interface", /GlobalComponents/],
  ["a global augmentation", /declare (global|module)/],
  ["a kebab TAG spelling", /'mini-box'|'gtk-box'/],
  ["an on<Signal> handler prop", /onChildAdded/],
  ["a camelCase property key", /cssClasses\?:/],
  // An abstract class cannot be created, so it gets no row — but it does get an interface.
  ["abstract class as a widget row", /\n {4}GtkWidget: \{/],
  // A non-widget is INSTANTIABLE — it gets a props interface, below — and it is still not
  // a widget, so it gets no row in either GType-keyed table.
  ["non-widget row", /\n {4}GtkAdjustment: \{/],
  ["a set_child-only class as a row", /\n {4}GtkSetter: \{/],
  ["a non-widget child carrier as a row", /\n {4}GtkActorBin: \{/],
  ["an instantiable non-widget as a row", /\n {4}GtkSizeGroup: \{/],
  // Abstract AND unreached: `g_object_new` refuses it and no chain needs it, so nothing
  // about it is emitted. Without this the coverage rule and "every declaration" agree.
  ["an abstract class no chain reaches", /GtkTool/],
];

// The `mustNot` list runs against the DECLARATIONS with comments stripped. The header
// explains what the surface deliberately omits, and it names those things — so a naive
// match on the whole file reports the explanation as the violation. Measured: the first
// run of this file failed on the word `GlobalComponents` inside its own prose.
const code = types.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");

for (const [label, re] of must)
  if (!re.test(types)) fail(`missing from vocabulary .d.ts: ${label} (${re})`);
for (const [label, re] of mustNot)
  if (re.test(code)) fail(`must not appear in vocabulary .d.ts: ${label} (${re})`);

// ---------------------------------------------------------------- both halves agree

const data = await import(`file://${dataFile}`);

const declaredNames = new Set(
  [...types.matchAll(/^export const (\w+):/gm)].map((match) => match[1]),
);
for (const name of declaredNames) {
  if (!(name in data)) fail(`declared in the .d.ts but not exported by the .js: ${name}`);
}
for (const name of Object.keys(data)) {
  if (!declaredNames.has(name)) fail(`exported by the .js but not declared in the .d.ts: ${name}`);
}

// `DECLS` is the COVERED population — every GType a UI description file can instantiate —
// so it is a SUPERSET of the two GType-keyed type maps, and the containment runs one way
// only. The other direction is against the props interfaces: a `DECLS` key a consumer
// cannot type is a key it has to re-read the GIR for.
const rowGTypes = new Set([...types.matchAll(/^ {4}(\w+): \{$/gm)].map((match) => match[1]));
const dataGTypes = new Set(Object.keys(data.DECLS ?? {}));
for (const gtype of rowGTypes) {
  if (!dataGTypes.has(gtype)) fail(`in a surface row but not in DECLS: ${gtype}`);
}
for (const gtype of dataGTypes) {
  if (!new RegExp(`export interface ${gtype}Props\\b`).test(types)) {
    fail(`in DECLS but the .d.ts has no ${gtype}Props: ${gtype}`);
  }
  // Self first, and the chain's own links must be describable too.
  const chain = data.DECLS[gtype];
  if (chain[0] !== gtype) fail(`DECLS[${gtype}] does not start with itself: ${chain[0]}`);
}

// ------------------------------------------------------- child holders vs widgets
//
// `Widgets` and `ChildHolders` have the SAME row shape, so the row-level regex above
// cannot tell them apart — which is precisely what a consumer asking "is this a widget"
// would get wrong. Both blocks are extracted and held against each other AND against the
// runtime list, because agreement between two halves of one emitter is not the same fact
// as the rule having selected correctly.
const blockOf = (name) =>
  new RegExp(`export interface ${name} \\{([\\s\\S]*?)\\n\\}`).exec(types)?.[1] ?? null;
const widgetsBlock = blockOf("Widgets");
const holdersBlock = blockOf("ChildHolders");
if (widgetsBlock === null) fail("no Widgets interface in the vocabulary .d.ts");
if (holdersBlock === null) fail("no ChildHolders interface in the vocabulary .d.ts");

const holders = new Set(data.CHILD_HOLDERS ?? []);
if (!holders.has("GtkListItem")) {
  fail(`CHILD_HOLDERS omits the set_child/get_child carrier: ${JSON.stringify([...holders])}`);
}
// THE control: half a pair is not a pair. Matching either accessor alone would also sweep
// in every `set_child`-carrying non-widget the real corpus has.
if (holders.has("GtkSetter")) {
  fail("CHILD_HOLDERS took a class with set_child and no get_child — the rule matched one half");
}
// The control for the defect that took a 705-namespace run down: both accessors over a
// NON-widget child. Name-only matching selects 17 classes across the corpus instead of
// four, and then asks the emitter to print a type from a hierarchy it does not model.
if (holders.has("GtkActorBin")) {
  fail("CHILD_HOLDERS took a set_child/get_child pair over a NON-widget — the type test is gone");
}
if (holders.has("GtkBox")) fail("CHILD_HOLDERS took a widget; concreteWidgetsOf already serves it");
if (holders.has("GtkAdjustment")) fail("CHILD_HOLDERS took a class with neither accessor");
if (widgetsBlock?.includes("GtkListItem:")) fail("a child holder appears as a WIDGET row");
if (!holdersBlock?.includes("GtkListItem:")) fail("the child holder has no ChildHolders row");
if (!widgetsBlock?.includes("GtkBox:")) fail("the widget table lost GtkBox");
if (holdersBlock?.includes("GtkBox:")) fail("a widget appears as a CHILD HOLDER row");
// A holder rides the same pipeline, so it must be describable like any other declaration:
// a holder a consumer cannot type is a holder it has to re-read the GIR for.
if (!data.DECLS?.GtkListItem) fail("DECLS omits the child holder — a consumer cannot type it");
if (!data.OWN_PROPS?.GtkListItem?.includes("activatable")) {
  fail(`OWN_PROPS lost the holder's own property: ${JSON.stringify(data.OWN_PROPS?.GtkListItem)}`);
}

// ------------------------------------------------- coverage: what a UI file can instantiate
//
// The rule is "every declaration a UI description file can instantiate" — operationally, a
// registered, non-abstract class — and not "everything a widget chain reaches". GtkBuilder
// resolves `<object class="…">` through `g_type_from_name`, which knows nothing about
// widgets, so a `.ui` file names layout managers, event controllers, cell renderers and
// `GtkSizeGroup` as readily as it names a box. The narrower rule cost a real consumer a
// real defect: `Gtk.SizeGroup { mode: horizontal; }` compiled to the string `horizontal`
// where `blueprint-compiler` writes `1`, because no widget chain reached `GtkSizeGroup`
// and it therefore had no `PROP_ENUMS` row to resolve the nick against.
//
// Held from both ends, because a rule that only widens is a rule that stops discriminating.
const coveredNonWidgets = ["GtkSizeGroup", "GtkAdjustment", "GtkSetter", "GtkActorBin"];
for (const gtype of coveredNonWidgets) {
  if (!data.DECLS?.[gtype]) fail(`DECLS omits the instantiable non-widget ${gtype}`);
  if (widgetsBlock?.includes(`${gtype}:`)) fail(`${gtype} is not a widget and has a Widgets row`);
  if (holdersBlock?.includes(`${gtype}:`)) fail(`${gtype} reached ChildHolders`);
  if (holders.has(gtype) && gtype !== "GtkListItem") fail(`CHILD_HOLDERS took ${gtype}`);
}
// THE ROW THE CONSUMER CAME FOR, walked the way it walks it: a non-widget's enum property
// resolves to the number GObject registered. Keyed by DECLARATION like every other row.
if (data.PROP_ENUMS?.["GtkSizeGroup.mode"] !== "GtkOrientation") {
  fail(
    `PROP_ENUMS has no row for the instantiable non-widget: ${data.PROP_ENUMS?.["GtkSizeGroup.mode"]}`,
  );
}
if (data.ENUM_VALUES?.[`${data.PROP_ENUMS?.["GtkSizeGroup.mode"]}.vertical`] !== 1) {
  fail("the non-widget's enum nick does not resolve to a number — the join is half an answer");
}
// …and ONLY the declaration tables widened. Slot candidates are about placing children, so
// a non-container keeps none even though `add_widget` is exactly the shape they derive from.
if (data.SLOT_CANDIDATES?.GtkSizeGroup) {
  fail(
    `SLOT_CANDIDATES widened to a non-widget: ${JSON.stringify(data.SLOT_CANDIDATES.GtkSizeGroup)}`,
  );
}
// THE OTHER EDGE. `Mini.Tool` is abstract with a settable property and nothing derives from
// it, so `g_object_new` refuses it and no chain needs it. Absent means the rule is
// "instantiable" and not "every declaration" — without this the two agree on this fixture.
if (data.DECLS?.GtkTool) fail("DECLS took an abstract class no chain reaches");
if (data.OWN_PROPS?.GtkTool) fail("OWN_PROPS took an abstract class no chain reaches");
// …while an abstract class a chain DOES reach keeps its interface, because every widget
// inherits from it. Both halves, or "abstract is excluded" would be the wrong lesson.
if (!/export interface GtkWidgetProps\b/.test(types)) {
  fail("the abstract base reached by the chain lost its props interface");
}
if (data.DECLS?.GtkWidget) fail("DECLS took the abstract base; it cannot be instantiated");

// Every property the runtime data offers must be a key of the interface it belongs to.
for (const [gtype, props] of Object.entries(data.OWN_PROPS ?? {})) {
  const block = new RegExp(`export interface ${gtype}Props[^{]*\\{([^}]*)\\}`, "s").exec(types);
  if (!block) {
    fail(`OWN_PROPS names ${gtype} but the .d.ts has no ${gtype}Props`);
    continue;
  }
  for (const prop of props) {
    if (!block[1].includes(`${/^[A-Za-z_$][\w$]*$/.test(prop) ? prop : `'${prop}'`}?:`)) {
      fail(`OWN_PROPS[${gtype}] offers '${prop}', absent from ${gtype}Props`);
    }
  }
}

if (data.ENUM_NICKS?.GtkOrientation?.join(",") !== "horizontal,vertical,sideways") {
  fail(`ENUM_NICKS.GtkOrientation is ${JSON.stringify(data.ENUM_NICKS?.GtkOrientation)}`);
}
if (!data.ENUM_NICKS?.GtkUnreferenced) {
  fail("ENUM_NICKS omits the enum no property references — a consumer in another namespace can");
}
if (data.ENUM_NICKS?.GtkStateFlags) {
  fail("ENUM_NICKS carries a bitfield; a nick SET is not something GObject can resolve");
}
// THE NUMBERS BEHIND THE NICKS, and the control that separates "read" from "counted".
//
// A suite that only checked `GtkOrientation` would pass either way: its values ARE its
// positions. `GtkOdd.below` is -1 at position 0, so counting answers 0 and reading answers
// -1, and only one of those can pass. That is the shape the real corpus has -- 6 of the 137
// enums in a GTK 4 vocabulary (112 in Gtk-4.0, 25 in Adw-1) disagree with counting, `GtkConstraintStrength.required`
// by 1001001000.
if (data.ENUM_VALUES?.["GtkOdd.below"] !== -1) {
  fail(
    `ENUM_VALUES lost the GIR value: GtkOdd.below is ${data.ENUM_VALUES?.["GtkOdd.below"]}, GIR says -1`,
  );
}
if (data.ENUM_VALUES?.["GtkOdd.below"] === data.ENUM_NICKS?.GtkOdd?.indexOf("below")) {
  fail("ENUM_VALUES agrees with counting on the one enum where counting is wrong");
}
// An alias: two names, one number. Both keep an entry -- dropping either would make a
// number un-spellable in one direction or the other -- and only `ENUM_DEPRECATED` says
// which name is the old one.
if (
  data.ENUM_VALUES?.["GtkAlign.baseline"] !== 4 ||
  data.ENUM_VALUES?.["GtkAlign.baseline-fill"] !== 4
) {
  fail(
    `an alias lost one of its two names: ${JSON.stringify({
      baseline: data.ENUM_VALUES?.["GtkAlign.baseline"],
      "baseline-fill": data.ENUM_VALUES?.["GtkAlign.baseline-fill"],
    })}`,
  );
}
if (JSON.stringify(data.ENUM_DEPRECATED) !== JSON.stringify(["GtkAlign.baseline"])) {
  fail(`ENUM_DEPRECATED is ${JSON.stringify(data.ENUM_DEPRECATED)}, expected the alias half only`);
}
// The declared remainder, with the raw attribute kept: an entry that said only "no number"
// would leave a reader unable to tell a Vala `(null)` from an integer too large to carry.
if (data.ENUM_VALUES_UNREADABLE?.["GtkOdd.symbolic"] !== "(null)") {
  fail(`ENUM_VALUES_UNREADABLE lost the raw value: ${JSON.stringify(data.ENUM_VALUES_UNREADABLE)}`);
}
if (data.ENUM_VALUES_UNREADABLE?.["GtkOdd.huge"] !== "9007199254740993") {
  fail("an integer past Number.MAX_SAFE_INTEGER was carried as a number instead of declared");
}
// The raw value is the one string the vocabulary emits that is not an identifier, and this
// is the only member that makes its quoting do anything -- every real unreadable value in
// `girs/` is `(null)` or a single letter, so a suite without a hostile one passes just as
// well with the escaping deleted. Checked by ROUND TRIP: the `import()` above already had
// to parse the module (an unescaped newline makes it a SyntaxError and takes every other
// export with it), and the characters have to come back unchanged.
if (data.ENUM_VALUES_UNREADABLE?.["GtkOdd.hostile"] !== "it's a \\ and a\nnewline") {
  fail(
    `the raw value did not survive quoting: ${JSON.stringify(data.ENUM_VALUES_UNREADABLE?.["GtkOdd.hostile"])}`,
  );
}
// And the invariant the remainder exists for: nothing falls between the two tables.
for (const [gtype, nicks] of Object.entries(data.ENUM_NICKS ?? {})) {
  for (const nick of nicks) {
    const key = `${gtype}.${nick}`;
    if (key in (data.ENUM_VALUES ?? {})) continue;
    if (key in (data.ENUM_VALUES_UNREADABLE ?? {})) continue;
    fail(`${key} has a nick and neither a number nor a declared reason — a silent drop`);
  }
}
// Same subject as the nicks, so a bitfield is out of both: ENUM_NICKS refuses one because
// GObject cannot resolve a nick SET, and a values table that covered more than the nicks
// would make the invariant above a claim about an overlap instead of about one set.
for (const key of Object.keys(data.ENUM_VALUES ?? {})) {
  if (key.startsWith("GtkStateFlags.")) fail(`ENUM_VALUES carries a bitfield member: ${key}`);
}
// THE JOIN, without which the value tables are half an answer.
//
// A host with no GI has a property name and a nick and needs a number. `ENUM_VALUES` is keyed
// by ENUM GType, and only `PROP_ENUMS` says which enum a property is. Keyed by DECLARATION:
// `orientation` is registered on the `GtkOrientable` INTERFACE, so a consumer that looked it
// up under `GtkBox` would find nothing.
if (data.PROP_ENUMS?.["GtkOrientable.orientation"] !== "GtkOrientation") {
  fail(`PROP_ENUMS lost the interface-declared property: ${JSON.stringify(data.PROP_ENUMS)}`);
}
// A bitfield gets an entry even though `ENUM_NICKS` refuses it — the refusal is about a nick
// SET, and this is about one member's number.
if (data.PROP_ENUMS?.["GtkWidget.state-flags"] !== "GtkStateFlags") {
  fail(`PROP_ENUMS omits the bitfield-typed property: ${JSON.stringify(data.PROP_ENUMS)}`);
}
// The control for the depth-0 rule: an ARRAY of a registered enum references one without
// being one. An entry here would be a nick resolved against the wrong thing.
if ("GtkWidget.axes" in (data.PROP_ENUMS ?? {})) {
  fail("PROP_ENUMS claims an array-of-enum property, which no consumer can resolve a nick against");
}
// And a property with no enum type at all has no entry.
if ("GtkBox.spacing" in (data.PROP_ENUMS ?? {})) fail("PROP_ENUMS claims a plain int property");
// A bitfield from a namespace that emits NO vocabulary of its own, which is the case the
// join silently broke: `printPropType` returned `number` for a bitfield before collecting
// it, so `FLAG_VALUES` only ever carried the ones this namespace DECLARES. `PROP_ENUMS`
// then named `GdkGLAPI` for `GtkGLArea:allowed-apis` with no table anywhere holding its
// numbers -- 5 such rows in the 142 generated vocabularies, every one of them a bitfield.
if (data.PROP_ENUMS?.["GtkWidget.binding-flags"] !== "GBindingFlags") {
  fail(`PROP_ENUMS omits the foreign bitfield: ${JSON.stringify(data.PROP_ENUMS)}`);
}
// The invariant that makes the join a join, and the same one `ENUM_NICKS` is held to above:
// a GType named here has numbers to be resolved against.
//
// Resolved across the DEPENDENCY CLOSURE, not within this one package, and that is the
// consumer's own shape: a vocabulary carries the numbers for the enums and bitfields its
// namespace DECLARES, so a join naming a foreign GType is answered by the owner's
// vocabulary — which a consumer has loaded, because it resolves a UI file against every
// namespace the file uses. Inlining a foreign table is now the exception (the owner emits
// nothing) rather than the rule, so a per-package check would assert the old topology and
// would go red for a vocabulary that is right.
const valueTablesOf = (vocabulary) =>
  [
    ...Object.keys(vocabulary.ENUM_VALUES ?? {}),
    ...Object.keys(vocabulary.FLAG_VALUES ?? {}),
    ...Object.keys(vocabulary.ENUM_VALUES_UNREADABLE ?? {}),
    ...Object.keys(vocabulary.FLAG_VALUES_UNREADABLE ?? {}),
  ].map((key) => key.slice(0, key.lastIndexOf(".")));

const numbered = new Set(valueTablesOf(data));
/** Where a GType's numbers came from, so a reader sees the join actually crossing a package. */
const numberedBy = new Map([...numbered].map((gtype) => [gtype, "mini-1.0"]));
for (const dir of readdirSync(join(here, "generated"))) {
  if (dir === "mini-1.0") continue;
  const sibling = join(here, "generated", dir, `${dir}-vocabulary.js`);
  if (!existsSync(sibling)) continue;
  for (const gtype of valueTablesOf(await import(`file://${sibling}`))) {
    numbered.add(gtype);
    if (!numberedBy.has(gtype)) numberedBy.set(gtype, dir);
  }
}
for (const [key, gtype] of Object.entries(data.PROP_ENUMS ?? {})) {
  if (numbered.has(gtype)) continue;
  fail(
    `PROP_ENUMS says ${key} is a ${gtype}, and no value table carries one — a join into nothing`,
  );
}
// And the crossing is REAL, not a coincidence of everything landing in one file: the
// foreign bitfield above has to be answered by the package that declares it. Asserting only
// "some table has it" would pass just as well if the generator went back to inlining every
// foreign table, which is the growth this split exists to prevent.
if (numberedBy.get("GBindingFlags") !== "gobject-2.0") {
  fail(
    `GBindingFlags numbers come from ${numberedBy.get("GBindingFlags")}, not from the ` +
      "vocabulary of the namespace that declares it",
  );
}
// The other half of the same containment `OWN_PROPS` is held to above: a key here names a
// declaration and a property that declaration actually offers. A table keyed by anything
// else — the concrete widget, the underscored spelling — is one a `DECLS` walk cannot hit.
for (const key of Object.keys(data.PROP_ENUMS ?? {})) {
  const gtype = key.slice(0, key.indexOf("."));
  const prop = key.slice(key.indexOf(".") + 1);
  if ((data.OWN_PROPS?.[gtype] ?? []).includes(prop)) continue;
  fail(`PROP_ENUMS keys ${key}, which OWN_PROPS[${gtype}] does not offer`);
}
// End to end, the way a consumer actually walks it: widget -> DECLS chain -> PROP_ENUMS ->
// ENUM_VALUES. If this stops working the three tables have stopped being one answer.
{
  const chain = data.DECLS?.GtkBox ?? [];
  const owner = chain.find((gtype) => `${gtype}.orientation` in (data.PROP_ENUMS ?? {}));
  const resolved =
    owner === undefined
      ? undefined
      : data.ENUM_VALUES?.[`${data.PROP_ENUMS[`${owner}.orientation`]}.vertical`];
  if (resolved !== 1) {
    fail(
      `walking GtkBox -> DECLS -> PROP_ENUMS -> ENUM_VALUES for \`vertical\` gave ${resolved}, expected 1`,
    );
  }
}

// THE BITFIELDS, which `ENUM_NICKS` refuses and which still have numbers.
//
// `GtkStateFlags.insensitive` is 8 at position 2, so this separates read from counted the
// way `GtkOdd.below` does for the enums -- and it is the shape that matters most: 119 of the
// 156 bitfield members the Gtk-4.0 vocabulary carries disagree with their declaration
// position, against 29 of 672 enumeration members.
if (data.FLAG_VALUES?.["GtkStateFlags.insensitive"] !== 8) {
  fail(
    `FLAG_VALUES lost the GIR value: GtkStateFlags.insensitive is ${data.FLAG_VALUES?.["GtkStateFlags.insensitive"]}, GIR says 8`,
  );
}
if (
  data.FLAG_VALUES?.["GtkStateFlags.active"] !== 1 ||
  data.FLAG_VALUES?.["GtkStateFlags.focused"] !== 2
) {
  fail(`FLAG_VALUES is ${JSON.stringify(data.FLAG_VALUES)}`);
}
if (data.FLAG_VALUES?.["GtkStateFlags.insensitive"] === 2) {
  fail("FLAG_VALUES agrees with counting on a power-of-two member");
}
// The remainder reaches this table and not the enum one: every value past
// Number.MAX_SAFE_INTEGER in ts-for-gir's `girs/` is a bitfield member.
if (data.FLAG_VALUES_UNREADABLE?.["GtkStateFlags.beyond"] !== "9007199254740993") {
  fail(`FLAG_VALUES_UNREADABLE is ${JSON.stringify(data.FLAG_VALUES_UNREADABLE)}`);
}
if ("GtkStateFlags.beyond" in (data.FLAG_VALUES ?? {})) {
  fail("an integer past Number.MAX_SAFE_INTEGER was carried as a number instead of declared");
}
// And the line stays where `ENUM_NICKS` drew it: a bitfield has numbers here and no nicks
// there, so neither table has quietly taken the other's subject.
if (data.ENUM_NICKS?.GtkStateFlags) fail("ENUM_NICKS took a bitfield after all");
for (const key of Object.keys(data.FLAG_VALUES ?? {})) {
  if (key.startsWith("GtkOrientation.") || key.startsWith("GtkOdd.")) {
    fail(`FLAG_VALUES carries a plain enum member: ${key}`);
  }
}

// ------------------------------------------------------------- the ARIA value types
//
// The one table here that is not a fact about a ParamSpec. An `accessibility { }` block in
// a GtkBuilder or Blueprint file is typed by GTK's ARIA table instead, and a consumer that
// types it from the widget's properties gets it wrong in both directions at once.

// COMPLETE, not "the ones that parsed". Six, two and four is every member of the three
// fixture enums, and a count is what notices a row quietly dropping out — every other
// assertion below only looks at rows that are already there.
{
  const perEnum = {};
  for (const key of Object.keys(data.ARIA_VALUE_TYPES ?? {})) {
    const gtype = key.slice(0, key.indexOf("."));
    perEnum[gtype] = (perEnum[gtype] ?? 0) + 1;
  }
  const expected = { GtkAccessibleProperty: 6, GtkAccessibleRelation: 2, GtkAccessibleState: 4 };
  for (const [gtype, count] of Object.entries(expected)) {
    if (perEnum[gtype] !== count) {
      fail(
        `ARIA_VALUE_TYPES has ${perEnum[gtype] ?? 0} row(s) for ${gtype}, the fixture declares ${count}`,
      );
    }
  }
}
// Keyed the way `ENUM_VALUES` is, because the ARIA names ARE enum members: one key parser
// reads both, and `ENUM_NICKS` already lists the names.
for (const key of Object.keys(data.ARIA_VALUE_TYPES ?? {})) {
  const at = key.indexOf(".");
  if (!(data.ENUM_NICKS?.[key.slice(0, at)] ?? []).includes(key.slice(at + 1))) {
    fail(`ARIA_VALUE_TYPES keys ${key}, which is not a nick of that enum in ENUM_NICKS`);
  }
}
// THE FOUR SHAPES THE SENTENCE TAKES, each of which defeats a "rest of the line" capture in
// a different way, and all four are in the real Gtk-4.0.gir.
if (data.ARIA_VALUE_TYPES?.["GtkAccessibleProperty.key-shortcuts"] !== "string") {
  fail("a sentence that continues after the type was not cut at the first token");
}
if (data.ARIA_VALUE_TYPES?.["GtkAccessibleState.expanded"] !== "boolean") {
  fail("a type whose qualifier wraps onto the next line was not read");
}
if (data.ARIA_VALUE_TYPES?.["GtkAccessibleState.visited"] !== "boolean") {
  fail("a sentence-final period was carried into the type token");
}
if (data.ARIA_VALUE_ENUMS?.["GtkAccessibleState.checked"] !== "GtkAccessibleTristate") {
  fail(
    `a qualified [enum@Ns.Name] link was not resolved: ${JSON.stringify(data.ARIA_VALUE_ENUMS)}`,
  );
}
// THE DECLARED EXCEPTION, which is data and not a branch: `busy` states its type in prose
// and the list in `aria.ts` answers for it. `fixtures-aria-stale` holds the other half —
// an entry that has stopped being needed must fail, so the list cannot only grow.
if (data.ARIA_VALUE_TYPES?.["GtkAccessibleState.busy"] !== "boolean") {
  fail("the declared exception for GtkAccessibleState.busy did not reach the table");
}
// `checked: true` is the number 1 of a tristate and not the boolean, and `orientation` is
// settable on a widget that implements no GtkOrientable. Those two are the whole reason the
// table exists, so they are walked end to end the way a consumer does.
{
  const kind = data.ARIA_VALUE_TYPES?.["GtkAccessibleState.checked"];
  const gtype = data.ARIA_VALUE_ENUMS?.["GtkAccessibleState.checked"];
  const resolved = data.ENUM_VALUES?.[`${gtype}.true`];
  if (kind !== "enum" || resolved !== 1) {
    fail(
      `walking ARIA_VALUE_TYPES -> ARIA_VALUE_ENUMS -> ENUM_VALUES for \`checked: true\` gave ${kind}/${resolved}, expected enum/1`,
    );
  }
}
{
  const gtype = data.ARIA_VALUE_ENUMS?.["GtkAccessibleProperty.orientation"];
  const resolved = data.ENUM_VALUES?.[`${gtype}.vertical`];
  if (resolved !== 1) fail(`ARIA \`orientation: vertical\` resolved to ${resolved}, expected 1`);
  // …and it must NOT have come from the widget. The ARIA slot exists on every widget
  // whether or not the ParamSpec does, which is exactly what a widget-derived answer
  // cannot express — so if the root ever grows the property, this stops being a control.
  if ((data.OWN_PROPS?.GtkWidget ?? []).includes("orientation")) {
    fail("the fixture stopped being a control: GtkWidget now has an `orientation` property");
  }
}
// The two tables are one answer, in both directions. A GType named here with no nicks
// anywhere is a join into nothing — the shape `PROP_ENUMS` shipped 5 of before inlining.
{
  const enumKeys = Object.keys(data.ARIA_VALUE_TYPES ?? {})
    .filter((key) => data.ARIA_VALUE_TYPES[key] === "enum")
    .sort();
  const joined = Object.keys(data.ARIA_VALUE_ENUMS ?? {}).sort();
  if (enumKeys.join(",") !== joined.join(",")) {
    fail(`the 'enum' rows and ARIA_VALUE_ENUMS disagree: ${enumKeys} vs ${joined}`);
  }
  for (const [key, gtype] of Object.entries(data.ARIA_VALUE_ENUMS ?? {})) {
    if (!data.ENUM_NICKS?.[gtype]) {
      fail(`ARIA_VALUE_ENUMS says ${key} is a ${gtype}, which ENUM_NICKS does not carry`);
    }
  }
}
// The six kinds are closed. A seventh would be a token the reader invented rather than one
// GIR wrote, and the `.d.ts` union beside it would no longer describe the data.
{
  const kinds = new Set(["string", "integer", "double", "boolean", "reference", "enum"]);
  for (const [key, kind] of Object.entries(data.ARIA_VALUE_TYPES ?? {})) {
    if (!kinds.has(kind)) fail(`ARIA_VALUE_TYPES gives ${key} the unknown kind '${kind}'`);
  }
}

// The TYPE half declares all three, or the two halves have stopped describing one surface.
for (const name of [
  "ENUM_VALUES",
  "ENUM_DEPRECATED",
  "ENUM_VALUES_UNREADABLE",
  "FLAG_VALUES",
  "FLAG_VALUES_UNREADABLE",
  "PROP_ENUMS",
  "ARIA_VALUE_TYPES",
  "ARIA_VALUE_ENUMS",
]) {
  if (!new RegExp(`export const ${name}\\s*:`).test(types)) {
    fail(`the .d.ts half does not declare ${name}`);
  }
}

if (data.SINCE?.["GtkOrientable.orientation"] !== "1.2") {
  fail(`SINCE lost the GIR version attribute: ${JSON.stringify(data.SINCE)}`);
}
// The SIGNAL half, keyed the way GObject spells a signal. Without it a consumer has no
// way to tell "this surface describes a newer library" from "this surface is wrong" for
// signals — measured against gtk4-4.22.4: 18 widgets reported as defects for a correct
// surface, because `GtkWindow::force-close` had nothing to explain it.
if (data.SINCE?.["GtkBox::child-added"] !== "1.6") {
  fail(
    `SINCE carries no signal key: ${JSON.stringify(
      Object.keys(data.SINCE ?? {}).filter((k) => k.includes("::")),
    )}`,
  );
}
// The TYPE half. A member-only `SINCE` explains a missing property or signal and says
// nothing about a missing CLASS — and that is the worse failure: `GtkSvgWidget` against a
// pre-4.24 GTK is a bare `TypeError: can't access property "$gtype", ctor() is undefined`,
// which names neither the GType asked for nor a version to forgive it with. Measured on
// the published vocabulary before this: 0 keys of this shape.
for (const [gtype, expected] of [
  // A class, an interface, and a child holder — the holders ride the same pipeline, and a
  // holder whose type has no key is a holder a consumer cannot forgive either.
  ["GtkBox", "1.4"],
  ["GtkOrientable", "1.1"],
  ["GtkListItem", "1.8"],
]) {
  if (data.SINCE?.[gtype] !== expected) {
    fail(
      `SINCE has no version for the type ${gtype} (expected ${expected}): ${JSON.stringify(
        Object.keys(data.SINCE ?? {}).filter((k) => !k.includes(".") && !k.includes("::")),
      )}`,
    );
  }
}
// The CONTROL that keeps the entry honest, and the reason it is conditional: `GtkWidget`
// is emitted and carries five properties, and its GIR states NO version. An invented one
// would let a consumer forgive an absence that is a genuine defect — the exact failure
// this table exists to prevent. Sparse is correct: `version` sits on 29 of the 301 classes
// and interfaces in Gtk-4.0.gir.
if ("GtkWidget" in (data.SINCE ?? {})) {
  fail(`SINCE invented a version for a type whose GIR states none: ${data.SINCE.GtkWidget}`);
}
// And the three spellings must not collide, nor may the bare one over-generate: a property
// key always contains `.`, a signal key `::`, and a type key neither.
for (const key of Object.keys(data.SINCE ?? {})) {
  if (key.includes("::") && key.includes(".")) fail(`SINCE key is neither spelling: ${key}`);
}
const typeKeys = Object.keys(data.SINCE ?? {})
  .filter((key) => !key.includes(".") && !key.includes("::"))
  .sort();
if (typeKeys.join(",") !== "GtkBox,GtkListItem,GtkOrientable") {
  fail(`SINCE keys a type the fixture gives no version: ${JSON.stringify(typeKeys)}`);
}
if (!data.OWN_PROPS?.GtkBox?.includes("user-data")) {
  // Dropping it from the runtime data would hide a real writable ParamSpec from the
  // consumer check that asks the installed library whether every name here exists.
  fail(`OWN_PROPS.GtkBox lost the gpointer property: ${JSON.stringify(data.OWN_PROPS?.GtkBox)}`);
}

// ------------------------------------------------------- signals are keyed by DECLARATION
//
// `OWN_SIGNALS` and `OWN_PROPS` describe the same set of GTypes, because `DECLS` hands a
// consumer a CHAIN and it reads both tables at every link. Keying signals by creatable
// widget instead is a hole with no symptom in this file's older shape: measured on
// Gtk-4.0, `GtkWidget` registers 13 signals (`destroy`, `map`, `realize`, `unrealize`,
// `show`, `state-flags-changed`, …), has no `Widgets` row because it is abstract, and so
// contributed nothing — all 53 widgets in the namespace were missing all 13, while
// `OWN_PROPS.GtkWidget` was there the whole time.
const baseSignals = data.OWN_SIGNALS?.GtkWidget;
if (baseSignals?.join(",") !== "destroy,state-flags-changed") {
  fail(`OWN_SIGNALS lost the abstract base's own signals: ${JSON.stringify(baseSignals)}`);
}
// The control that has to go the OTHER way, and the reason the row above is not simply
// "every signal reachable from GtkBox": `OWN_SIGNALS` is OWN. Folding the chain in would
// repeat `destroy` under all 53 Gtk-4.0 widgets and lose which GType registers it.
if (data.OWN_SIGNALS?.GtkBox?.join(",") !== "child-added") {
  fail(`OWN_SIGNALS.GtkBox is ${JSON.stringify(data.OWN_SIGNALS?.GtkBox)}`);
}
// `SINCE` is keyed over the same set for the same reason: a signal a consumer can read
// out of `OWN_SIGNALS` with no version to explain its absence from an older library is
// the correct-surface-reported-as-a-defect case again, one table over.
if (data.SINCE?.["GtkWidget::state-flags-changed"] !== "1.3") {
  fail(
    `SINCE has no version for the abstract base's signal: ${JSON.stringify(
      Object.keys(data.SINCE ?? {}).filter((k) => k.startsWith("GtkWidget")),
    )}`,
  );
}
// AN INTERFACE REGISTERS SIGNALS TOO, and reading them only on `<class>` is a hole with
// no symptom: an interface that contributes nothing looks exactly like one that has
// nothing to contribute. Measured on Gtk-4.0 before this assertion existed —
// `GtkEditable` (changed, delete-text, insert-text, input-intercepted), `GtkCellEditable`
// (editing-done, remove-widget), `GtkColorChooser` (color-activated) and `GtkFontChooser`
// (font-activated) reached no vocabulary at all, which through `implements` was 41 handler
// slots missing across 17 concrete widgets, `<gtk-entry onChanged>` among them.
// EXACT equality, base names only: detail variants (`orientation-changed::x`) are a
// TYPE-side expansion and must never leak into the runtime vocabulary — GObject
// registers ONE signal, the details are connect-time strings.
if (data.OWN_SIGNALS?.GtkOrientable?.join(",") !== "orientation-changed,orientation-flipped") {
  fail(
    `OWN_SIGNALS lost the interface's own signals: ${JSON.stringify(data.OWN_SIGNALS?.GtkOrientable)}`,
  );
}
// `GtkFlippable` registers NOTHING — its signals-by-prerequisite are Orientable's, and
// `OWN_SIGNALS` is keyed by the GType that REGISTERS. A key here would say the same
// signal twice and lose which GType owns it.
if ("GtkFlippable" in (data.OWN_SIGNALS ?? {})) {
  fail(
    `OWN_SIGNALS keys GtkFlippable, which registers no signal: ${JSON.stringify(data.OWN_SIGNALS?.GtkFlippable)}`,
  );
}
// Same containment as the class case: an interface signal a consumer reads out of
// `OWN_SIGNALS` needs a version to forgive its absence from an older library.
if (data.SINCE?.["GtkOrientable::orientation-flipped"] !== "1.7") {
  fail(
    `SINCE has no version for the interface's signal: ${JSON.stringify(
      Object.keys(data.SINCE ?? {}).filter((k) => k.startsWith("GtkOrientable")),
    )}`,
  );
}
// THE TYPE SIDE OF THE SAME FACT, read out of the main `.d.ts` rather than the
// vocabulary's. The two halves fail independently: an interface can reach `OWN_SIGNALS`
// (runtime, what a host connects) while emitting no `SignalSignatures` (types, what a
// consumer is allowed to write), and a consumer that has one without the other gets
// either a handler it cannot name or a name that connects to nothing.
const mainTypes = readFileSync(join(pkgDir, "mini-1.0.d.ts"), "utf8");
if (
  !/namespace Orientable \{\s*\n\s*\/\/ Signal signatures\n\s*interface SignalSignatures \{/.test(
    mainTypes,
  )
) {
  fail("the interface got no SignalSignatures of its own in mini-1.0.d.ts");
}
// And the implementing class must UNION it in. A bare `interface SignalSignatures` on the
// interface that nothing extends is the same hole one step later.
if (
  !/interface SignalSignatures extends Widget\.SignalSignatures, Orientable\.SignalSignatures, Flippable\.SignalSignatures \{/.test(
    mainTypes,
  )
) {
  fail("the implementing class does not extend the interfaces' SignalSignatures");
}
// The block that OWNS the signals must not extend anything here: Orientable's only
// prerequisite is a class (GObject.Object, filled in by the InterfaceVisitor), and the
// implementing class already reaches `GObject.Object.SignalSignatures` through its own
// parent chain — inheriting the same `notify::` keys down two branches into one
// declaration is a conflict the first differing prerequisite would surface.
if (/interface SignalSignatures extends [^\n]*\n[^}]*"orientation-flipped"/.test(mainTypes)) {
  fail("the signal-owning interface's SignalSignatures extends something; it must be bare");
}
// DETAIL VARIANTS live on the interface block or nowhere: the class side expands details
// only for its OWN signals, so `Gio.ActionGroup`-shaped signals (all four detailed) had
// the base name typed while `action-added::quit` fell through to the untyped overload.
// Both halves of the class convention: the enumerated key over the interface's own
// property, and the template-literal catch-all for the details GIR cannot enumerate.
if (!/"orientation-changed::orientation": \(what: string\) => void;/.test(mainTypes)) {
  fail("the detailed interface signal lost its property-enumerated detail variant");
}
if (!/\[key: `orientation-changed::\$\{string\}`\]: \(what: string\) => void;/.test(mainTypes)) {
  fail("the detailed interface signal lost its template-literal catch-all");
}
// A PREREQUISITE'S signals are part of the derived interface's own signature map
// (ClutterGst.Player without Clutter.Media's `eos`/`error` is wrong for any consumer of
// `keyof Player.SignalSignatures`), and they reach an implementor only through the
// derived interface when the GIR omits the prerequisite from `<implements>` — which GIR
// does not forbid, though measured per file over 718 GIRs no real class does it today.
// So Flippable — no signals of its own — must still get a block, extending the
// prerequisite's…
if (!/interface SignalSignatures extends Orientable\.SignalSignatures \{\}/.test(mainTypes)) {
  fail("the signal-less interface does not extend its signal-bearing prerequisite");
}
// …and the class with the omission must reach the signals through it.
if (
  !/interface SignalSignatures extends GObject\.Object\.SignalSignatures, Flippable\.SignalSignatures \{/.test(
    mainTypes,
  )
) {
  fail(
    "the class implementing only the derived interface does not reach the prerequisite's signals",
  );
}

// Every GType `OWN_SIGNALS` names must be one this vocabulary actually describes — the
// same containment `OWN_PROPS` is held to above, so a key can never appear that a
// consumer walking `DECLS` has no interface for.
for (const gtype of Object.keys(data.OWN_SIGNALS ?? {})) {
  if (!new RegExp(`export interface ${gtype}Props\\b`).test(types)) {
    fail(`OWN_SIGNALS names ${gtype} but the .d.ts has no ${gtype}Props`);
  }
}
// A REGRESSION GUARD, not evidence: nothing in the generator can produce this today.
// It is written down because a reader of the consumer's output mistook `onNotifySuffix`
// for a detail-qualified signal leaking in here. It is not one — `notify::<prop>` is the
// consumer's own rendering of a PROPERTY (`AdwSidebar:suffix`, `GtkSwitch:state`), and no
// signal name in any of the 719 GIRs in `girs/` contains `::`.
for (const [gtype, signals] of Object.entries(data.OWN_SIGNALS ?? {})) {
  for (const signal of signals) {
    if (signal.includes("::")) fail(`OWN_SIGNALS[${gtype}] carries a detail-qualified ${signal}`);
  }
}

if (data.SLOT_CANDIDATES?.GtkBox?.child !== "set_child") {
  fail(`SLOT_CANDIDATES.GtkBox is ${JSON.stringify(data.SLOT_CANDIDATES?.GtkBox)}`);
}

// ---------------------------------------------------------------- the package shape

const pkg = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf8"));
const surfaceExport = pkg.exports?.["./vocabulary"];
if (
  surfaceExport?.types !== "./mini-1.0-vocabulary.d.ts" ||
  surfaceExport?.import !== "./mini-1.0-vocabulary.js"
) {
  fail(`package.json exports["./vocabulary"] is ${JSON.stringify(surfaceExport)}`);
}
// The generated tsconfig carries `//` comments, so it is JSONC rather than JSON.
const tsconfig = JSON.parse(
  readFileSync(join(pkgDir, "tsconfig.json"), "utf8").replace(/^\s*\/\/.*$/gm, ""),
);
if (!tsconfig.include?.includes("./mini-1.0-vocabulary.d.ts")) {
  // Without this the surface is never compiled, and a surface referencing a name the
  // main emitter did not emit is exactly what nothing else can catch.
  fail(`tsconfig.json include does not cover the surface: ${JSON.stringify(tsconfig.include)}`);
}

// THE NAMESPACE GATE, over real GIRs rather than a fixture, and it has to cut both ways in
// the same generated tree — the two namespaces below sit side by side and must come out
// differently.
//
// `GObject-2.0` declares no widget and 28 registered non-abstract classes, so it emits: a
// UI file NAMES types it never instantiates (`as <Gio.Icon>` is a `type="GIcon"`), and
// while the gate read "declares a concrete GtkWidget descendant" there was nothing for such
// a reference to resolve against. `GLib-2.0` declares none at all — its types are boxed
// records and enums — so its `DECLS` would be empty and it stays out, with `cairo-1.0`,
// `Graphene-1.0` and 85 more of the 715 GIRs.
//
// Rationale: this loop asserted the pre-widening answer for BOTH. Keeping it one-sided
// would have made it agree with a generator that emits nothing at all.
for (const [dir, emits] of [
  ["gobject-2.0", true],
  ["glib-2.0", false],
]) {
  const other = join(here, "generated", dir);
  if (!existsSync(other)) {
    fail(`${dir} did not generate, so the namespace gate is untested in this run`);
    continue;
  }
  const otherPkg = JSON.parse(readFileSync(join(other, "package.json"), "utf8"));
  const hasFile = existsSync(join(other, `${dir}-vocabulary.d.ts`));
  const hasExport = otherPkg.exports?.["./vocabulary"] !== undefined;
  if (hasFile !== emits || hasExport !== emits) {
    fail(
      `${dir}: expected ${emits ? "a vocabulary" : "no vocabulary"}, got file=${hasFile} ` +
        `export=${hasExport}`,
    );
  }
  // The file and the export are one decision; a package carrying one without the other
  // resolves to ENOENT at the consumer instead of failing here.
  if (hasFile !== hasExport) fail(`${dir}: vocabulary file and ./vocabulary export disagree`);
}

// ---------------------------------------------------------------- control 1: flag off

const offDir = join(here, "generated-off", "mini-1.0");
if (!existsSync(offDir)) {
  fail("the flag-off control did not generate at all, so it proves nothing");
} else {
  const strayOff = readdirSync(offDir).filter((name) => name.includes("-surface."));
  if (strayOff.length > 0) fail(`widgetSurface off still emitted ${strayOff.join(", ")}`);
  const offPkg = JSON.parse(readFileSync(join(offDir, "package.json"), "utf8"));
  if (offPkg.exports?.["./vocabulary"])
    fail("widgetSurface off still wrote exports['./vocabulary']");
  // …and the control has to be a real run of the same generator, not an empty directory.
  if (!existsSync(join(offDir, "mini-1.0.d.ts")))
    fail("the flag-off control emitted no module .d.ts");
}

// ------------------------------------------------- a base from a namespace with no surface

const inlineFile = join(here, "generated-inline", "hosted-1.0", "hosted-1.0-vocabulary.d.ts");
if (!existsSync(inlineFile)) {
  fail(`the inline fixture did not generate: ${inlineFile}`);
} else {
  const inline = readFileSync(inlineFile, "utf8");
  // `extends GObjectProps` now sits between the name and the brace, so the pattern has to
  // admit a heritage clause. Matching `Props \{` exactly asserted the ABSENCE of a base.
  if (!/export interface CarrierHolderProps (?:extends [^{]+)?\{[^}]*title\?: string;/s.test(inline)) {
    fail("Carrier.Holder was not inlined — its `title` property is missing from the surface");
  }
  if (!/interface GtkWidgetProps extends CarrierHolderProps/.test(inline)) {
    fail("the inlined base is emitted but nothing extends it");
  }
  if (!/inlined base\(s\) their owner's vocabulary does not emit: Carrier\.Holder/.test(inline)) {
    // Named in the provenance line, so a dependency release that changes the base graph
    // shows up in a diff instead of in a support question.
    fail("the provenance line does not name the inlined base");
  }
  if (/from '@girs\/carrier-1\.0\/surface'/.test(inline)) {
    fail("the surface imports from @girs/carrier-1.0/surface, which does not exist");
  }
  // CONTROL 12, and it shares this fixture on purpose. Carrier's only declaration is
  // ABSTRACT, so the namespace can instantiate nothing and must emit nothing — the
  // `cairo-1.0` / `GLib-2.0` / `Graphene-1.0` shape, 88 of the 715 GIRs. This is the half
  // that keeps the widened namespace gate from meaning "every namespace": without it,
  // control 11 below passes just as well for a generator that emits unconditionally.
  if (existsSync(join(here, "generated-inline", "carrier-1.0", "carrier-1.0-vocabulary.d.ts"))) {
    fail("Carrier can instantiate nothing and still got a vocabulary of its own");
  }
  const carrierPkg = join(here, "generated-inline", "carrier-1.0", "package.json");
  if (existsSync(carrierPkg)) {
    const exports = JSON.parse(readFileSync(carrierPkg, "utf8")).exports ?? {};
    // The file being absent is not enough: a `./vocabulary` entry pointing at nothing is a
    // package that resolves to ENOENT, which fails later and somewhere else.
    if (exports["./vocabulary"] !== undefined) {
      fail("Carrier emits no vocabulary and its package.json still exports ./vocabulary");
    }
  }
}

// ------------------------------------------------- a base imported from another namespace

const crossFile = join(here, "generated-cross", "derived-1.0", "derived-1.0-vocabulary.d.ts");
if (!existsSync(crossFile)) {
  fail(`the cross-namespace fixture did not generate: ${crossFile}`);
} else {
  const cross = readFileSync(crossFile, "utf8");
  if (!/from '@girs\/base-1\.0\/vocabulary'/.test(cross)) {
    fail("Base's interfaces were copied instead of imported from its vocabulary");
  }
  if (/export interface GtkWidgetProps/.test(cross)) {
    fail("Base's GtkWidgetProps is emitted a second time here — two nominally distinct copies");
  }
  // TypeScript requires a declaration's OWN member to be assignable to its base's, and this
  // fixture breaks that on purpose. Without the `Omit` the emitted file is TS2430 — the
  // shape GimpUi-3.0 hit in the real corpus, invisible until the base's members were
  // computed for a declaration whose interface another package emits.
  if (!/interface DrvPanelProps extends Omit<GtkWidgetProps, 'holder'>/.test(cross)) {
    fail("the redeclared property is not Omit-ed from the imported base");
  }
  if (!/holder\?: Derived\.Thing/.test(cross)) fail("the redeclared property lost its own type");
  // CONTROL 9, the half of the unresolvable-type rule that must NOT be refused. `ghost`
  // names a type the installed `Base` does not declare — two independently released GIRs
  // disagreeing, not a file contradicting itself — and the MAIN emitter answers `never`
  // there. So the vocabulary answers `never` too rather than take the run down with it.
  if (!/ghost\?: never;/.test(cross)) {
    fail(
      "a type unresolvable ACROSS namespaces was not printed as never, the way the model resolves it",
    );
  }
  if (
    !/prop\(s\) whose type the model cannot resolve: Derived\.Panel\.ghost: Base\.NoSuchThing/.test(
      cross,
    )
  ) {
    // A remainder of its OWN, never folded into `unsettableProps`: "the model has no such
    // type" and "no TypeScript value satisfies this" have different fixes, and a reader of
    // one list must not have to guess which it is looking at.
    fail("the provenance line does not name the unresolvable identifier");
  }
  if (/no TypeScript value satisfies:[^\n]*Derived\.Panel\.ghost/.test(cross)) {
    fail("the unresolvable property is in BOTH remainders; each never-property belongs to one");
  }
  // CONTROL 10. `Base.Extra` is an interface Base implements nowhere, so Base's own
  // vocabulary does not emit `GtkExtraProps` — and Derived's `Panel` implements it. An
  // import decided on "the owner HAS a vocabulary" names an export that does not exist:
  // `@girs/ide-46` shipped exactly that against `@girs/gtksource-5` (TS2724), caught by the
  // per-package `tsc --project` and by nothing else. The question is whether the owner's
  // vocabulary CARRIES the declaration, and one it does not is inlined here.
  if (/GtkExtra(Props|ConstructOnly)[^\n]*from '@girs\/base-1\.0\/vocabulary'/.test(cross)) {
    fail("a declaration the owner's vocabulary does not emit was imported from it anyway");
  }
  if (!/export interface GtkExtraProps (?:extends [^{]+)?\{[^}]*'extra-label'\?: string;/s.test(cross)) {
    fail(
      "the uncovered foreign declaration was neither imported nor inlined — its members are lost",
    );
  }
  if (!/inlined base\(s\) their owner's vocabulary does not emit:[^\n]*Base\.Extra/.test(cross)) {
    fail(
      "the provenance line does not name the base inlined from a namespace that HAS a vocabulary",
    );
  }
  // …and the fixture is only a control while Base really does leave it out.
  const baseFile = join(here, "generated-cross", "base-1.0", "base-1.0-vocabulary.d.ts");
  if (/export interface GtkExtraProps/.test(readFileSync(baseFile, "utf8"))) {
    fail("Base now emits GtkExtraProps, so the fixture has stopped being a control");
  }
  const crossData = await import(
    `file://${join(here, "generated-cross", "derived-1.0", "derived-1.0-vocabulary.js")}`
  );
  // The ParamSpec is real, so the name stays where a consumer's runtime check looks for it.
  if (!crossData.OWN_PROPS?.DrvPanel?.includes("ghost")) {
    fail(
      `OWN_PROPS dropped the unresolvable property: ${JSON.stringify(crossData.OWN_PROPS?.DrvPanel)}`,
    );
  }
  if (
    crossData.PROVENANCE?.unresolvedProps?.join(",") !== "Derived.Panel.ghost: Base.NoSuchThing"
  ) {
    fail(`PROVENANCE.unresolvedProps is ${JSON.stringify(crossData.PROVENANCE?.unresolvedProps)}`);
  }
}

// --------------------------------- control 11: a namespace with no widget in it at all

// The namespace gate's positive half. `Plain` declares no `GtkWidget` descendant and must
// still emit a vocabulary, because a UI description file NAMES types it never instantiates:
// a Blueprint cast `as <Gio.Icon>` compiles to `type="GIcon"`, resolved per namespace, and
// `Gio`, `Gdk` and `GObject` shipped nothing to resolve it against. No widening inside the
// widget namespaces could reach that — the gate was the only thing in the way.
//
// Paired with control 12 above, which holds the line this widening must not cross.

const gateDir = join(here, "generated-gate", "plain-1.0");
const gateFile = join(gateDir, "plain-1.0-vocabulary.d.ts");
if (!existsSync(gateFile)) {
  fail(`a namespace with no widgets emitted no vocabulary: ${gateFile}`);
} else {
  const gate = readFileSync(gateFile, "utf8");
  const gateData = await import(`file://${join(gateDir, "plain-1.0-vocabulary.js")}`);

  if (!/export interface PnGroupProps\b/.test(gate)) {
    fail("the instantiable non-widget `Plain.Group` got no props interface");
  }
  if (!Object.hasOwn(gateData.DECLS, "PnGroup")) {
    fail("`PnGroup` is missing from DECLS — nothing in this namespace can be named");
  }
  if (!Object.hasOwn(gateData.ENUM_NICKS, "PnMode")) {
    fail("a widget-free namespace emitted no nick union for its own registered enum");
  }
  // From `value`, never from position: `tall` is the second nick and the number is 7.
  if (gateData.ENUM_VALUES["PnMode.tall"] !== 7) {
    fail(`PnMode.tall is ${gateData.ENUM_VALUES["PnMode.tall"]}, GIR says 7`);
  }
  if (gateData.PROP_ENUMS?.["PnGroup.mode"] !== "PnMode") {
    fail("no PROP_ENUMS row says `Plain.Group:mode` is a `PnMode`");
  }
  // Control 7's rule, re-asserted where the namespace gate could quietly undo it: widening
  // WHICH namespaces emit must not widen WHAT they emit. `Plain.Tool` is abstract and
  // nothing derives from it, so it is absent entirely — interface, DECLS row and all.
  if (/PnTool/.test(gate) || Object.hasOwn(gateData.DECLS, "PnTool")) {
    fail("the unreachable abstract `Plain.Tool` is in a vocabulary it cannot be named in");
  }
  // `Widgets` is the index of what IS a widget. A namespace with none must say so with an
  // empty map, not by omitting the export: a consumer that reads it either way would see
  // `undefined` and cannot tell "no widgets" from "old vocabulary".
  const gateWidgets = /export interface Widgets \{([\s\S]*?)\n\}/.exec(gate);
  if (!gateWidgets) {
    fail("a widget-free vocabulary omits the `Widgets` interface instead of emitting it empty");
  } else if (gateWidgets[1].trim() !== "") {
    fail(`a namespace with no widgets emitted Widgets rows: ${gateWidgets[1].trim().slice(0, 120)}`);
  }

  // CONTROL 13: the C identifier prefixes are READ, not derived and not defaulted.
  //
  // This is the fact a type REFERENCE needs and the one nothing else in the package states.
  // The fixture sets `c:identifier-prefixes="Pn,pn"` on a namespace called `Plain`, so an
  // implementation that defaults to the namespace name writes `Plain`, and one that derives
  // the prefix from the DECLS keys cannot produce two elements at all. Both failures are
  // silent at generation time and wrong at the consumer, which is why they are tested here
  // rather than trusted.
  const prefixes = gateData.PROVENANCE?.identifierPrefixes;
  if (JSON.stringify(prefixes) !== JSON.stringify(["Pn", "pn"])) {
    fail(`PROVENANCE.identifierPrefixes is ${JSON.stringify(prefixes)}, GIR says ["Pn","pn"]`);
  }
  if (!/readonly identifierPrefixes: readonly string\[\];/.test(gate)) {
    fail("the type half does not declare `identifierPrefixes`");
  }
  const gatePkg = JSON.parse(readFileSync(join(gateDir, "package.json"), "utf8"));
  if (gatePkg.exports?.["./vocabulary"] === undefined) {
    fail("a widget-free namespace emits a vocabulary its package.json does not export");
  }
}

// ------------------------------------------------- control 2: inputs that must be refused

const cli = join(here, "..", "..", "packages", "cli", "bin", "ts-for-gir-dev");

/** Generate with one config and report how it went, never throwing. */
const generate = (configName) => {
  try {
    const output = execFileSync(process.execPath, [cli, "generate", "--configName", configName], {
      cwd: here,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return { exit: 0, output };
  } catch (error) {
    return {
      exit: typeof error.status === "number" ? error.status : 1,
      output: `${error.stdout ?? ""}${error.stderr ?? ""}`,
    };
  }
};

/**
 * One refusal: non-zero AND saying which thing it refused.
 *
 * The second half is not decoration. A gate that exits non-zero for some other reason —
 * a missing fixture, a changed flag name — is a gate that goes red without measuring
 * anything, and it reads exactly like one that works.
 */
const mustRefuse = (label, configName, names) => {
  const { exit, output } = generate(configName);
  if (exit === 0) {
    fail(`${label}: generated successfully`);
    return 0;
  }
  if (!names.test(output)) fail(`${label}: failed without naming it:\n${output.slice(-2000)}`);
  return exit;
};

const brokenExit = mustRefuse(
  "an unmappable property type",
  ".ts-for-gir.broken.rc.js",
  /GtkPanel\.mystery|Broken\.Panel\.mystery/,
);
const brokenSurface = join(here, "generated-broken", "broken-1.0", "broken-1.0-vocabulary.d.ts");
if (existsSync(brokenSurface)) fail("the broken fixture wrote a surface file before failing");

// The ARIA table is complete or absent, never partial. A dropped row is indistinguishable
// from "GTK has no such name", and the fallback a consumer reaches for next emits `true`
// where GTK means 1 — which is the divergence this whole table was built to close.
const ariaBrokenExit = mustRefuse(
  "an ARIA member whose documentation states no value type",
  ".ts-for-gir.aria-broken.rc.js",
  /GtkAccessibleProperty\.label/,
);
// The exception list, checked in the direction that keeps it from only growing. `busy`
// states its type here, so the declared exception for it is obsolete.
const ariaStaleExit = mustRefuse(
  "a declared ARIA exception that is no longer needed",
  ".ts-for-gir.aria-stale.rc.js",
  /GtkAccessibleState\.busy/,
);
// Neither refusal may leave a vocabulary behind. A half-written surface on disk is the one
// outcome worse than the failure itself: the build is red and the file a consumer imports
// is there, so a rerun that skips the failing namespace picks up a partial table.
for (const [dir, pkg] of [
  ["generated-aria-broken", "ariabroken-1.0"],
  ["generated-aria-stale", "ariastale-1.0"],
]) {
  if (existsSync(join(here, dir, pkg, `${pkg}-vocabulary.d.ts`))) {
    fail(`${dir} wrote a vocabulary file before failing`);
  }
}
// `noComments` discards the only source these value types have. Emitting the rest of the
// vocabulary with an empty ARIA table would be the silent-partial failure above, arrived at
// through a flag instead of a doc defect.
const noCommentsExit = mustRefuse(
  "widgetVocabulary with noComments",
  ".ts-for-gir.no-comments.rc.js",
  /noComments/,
);

// ----------------------------------------------------------------------------------

if (failures.length > 0) {
  console.error("widget-vocabulary assertion failures:");
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(
  `OK: ${rowGTypes.size - holders.size} widget row(s), ${holders.size} child holder(s), ` +
    `${Object.keys(data.OWN_PROPS).length} declaration(s) with props, ` +
    `${Object.keys(data.ENUM_NICKS).length} nick union(s), ` +
    `${Object.keys(data.ENUM_VALUES).length} enum value(s) with ${Object.keys(data.ENUM_VALUES_UNREADABLE).length} declared unreadable, ` +
    `${Object.keys(data.FLAG_VALUES).length} flag value(s) with ${Object.keys(data.FLAG_VALUES_UNREADABLE).length} declared unreadable, ` +
    `${Object.keys(data.PROP_ENUMS).length} property/enum join(s), ` +
    `${Object.keys(data.ARIA_VALUE_TYPES).length} ARIA value type(s) with ${Object.keys(data.ARIA_VALUE_ENUMS).length} enum join(s); ` +
    `flag-off control clean; ` +
    `refused: broken type ${brokenExit}, silent ARIA doc ${ariaBrokenExit}, ` +
    `stale ARIA exception ${ariaStaleExit}, noComments ${noCommentsExit}`,
);
