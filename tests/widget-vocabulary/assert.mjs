// Asserts the `@girs/<ns>/vocabulary` subpath: what it emits, what it must NOT emit, that
// the type half and the runtime half state the SAME facts, and that the generator refuses
// an input it cannot describe.
//
// WHY THE NEGATIVE HALVES ARE NOT OPTIONAL. A suite of positive assertions over a
// generator's own output cannot tell "the rule works" from "the rule never ran": a
// `mustNot` list that passes because the emitter produced nothing at all reads exactly
// like one that passes because the emitter filtered correctly. So this file carries three
// controls beside the positives, each of which has to go the other way:
//
//   1. FLAG OFF, same input — no surface file and no `./vocabulary` in the package.json. A
//      subpath that appears either way is not opt-in.
//   2. A BROKEN input — a widget with a settable property whose GIR type resolves to
//      NOTHING. The surface would reference a name the main emitter never emitted, so the
//      generator must exit non-zero and name the property. Note the scope: what is refused
//      is an unresolvable identifier, NOT every property that prints `never`. A writable
//      `gpointer` resolves fine and no TypeScript value satisfies it — `GcrTreeSelector:
//      columns`, `Wnck.ActionMenu:window`, eleven on `AgsGui.Cartesian` — as does one C
//      callback, `GimpDialog:help-func`. Those are emitted as `never`, kept in `OWN_PROPS`
//      because the ParamSpec is real, and NAMED in the provenance line of the surface that
//      carries them. The `user-data` assertions below hold that second half, because a
//      rule stated in a comment and enforced nowhere is the one that drifts.
//   3. TYPE HALF vs RUNTIME HALF — the two are read independently (regex over the `.d.ts`,
//      `import()` of the `.js`) and compared. Emitting both from one model means the
//      generator agrees with itself; this is the only check that notices if it stops.
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
  ["construct-only union names the property", /GtkWidgetConstructOnly = 'css-name'/],
  [
    "a declaration with no own construct-only props is `never`-rooted",
    /GtkOrientableConstructOnly = never/,
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
  // Deprecation, in the same shape the main `.d.ts` uses. The surface read a base
  // field the property parser never sets, so it emitted none at all — 0 against 136
  // in the `.d.ts` for the same namespace.
  [
    "deprecated property carries version and reason",
    /@deprecated since 1\.4: Use the style class instead\./,
  ],
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
  // A non-widget gets neither.
  ["non-widget row", /GtkAdjustment: \{/],
  ["non-widget props interface", /GtkAdjustmentProps/],
  // Half the accessor pair is not a holder, so it reaches no table at all.
  ["a set_child-only class anywhere", /GtkSetter/],
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

// The runtime data must name the same widgets the type map does.
const rowGTypes = new Set([...types.matchAll(/^ {4}(\w+): \{$/gm)].map((match) => match[1]));
const dataGTypes = new Set(Object.keys(data.DECLS ?? {}));
for (const gtype of rowGTypes) {
  if (!dataGTypes.has(gtype)) fail(`in a surface row but not in DECLS: ${gtype}`);
}
for (const gtype of dataGTypes) {
  if (!rowGTypes.has(gtype)) fail(`in DECLS but in no surface row: ${gtype}`);
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
if (data.OWN_SIGNALS?.GtkOrientable?.join(",") !== "orientation-flipped") {
  fail(`OWN_SIGNALS lost the interface's own signal: ${JSON.stringify(data.OWN_SIGNALS?.GtkOrientable)}`);
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
if (!/namespace Orientable \{\s*\n\s*\/\/ Signal signatures\n\s*interface SignalSignatures \{/.test(mainTypes)) {
  fail("the interface got no SignalSignatures of its own in mini-1.0.d.ts");
}
// And the implementing class must UNION it in. A bare `interface SignalSignatures` on the
// interface that nothing extends is the same hole one step later.
if (!/interface SignalSignatures extends Widget\.SignalSignatures, Orientable\.SignalSignatures \{/.test(mainTypes)) {
  fail("the implementing class does not extend the interface's SignalSignatures");
}
// The interface's own block must NOT extend `GObject.Object.SignalSignatures`: the class
// already reaches it through its parent chain, and inheriting the same `notify::` keys
// down two branches into one declaration is a conflict the first differing prerequisite
// would surface.
if (/interface SignalSignatures extends [^\n]*\n[^}]*"orientation-flipped"/.test(mainTypes)) {
  fail("the interface's SignalSignatures extends something; it must be bare");
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

// A namespace with no widgets gets nothing — the whole point of the per-namespace gate.
for (const dir of ["gobject-2.0", "glib-2.0"]) {
  const other = join(here, "generated", dir);
  if (!existsSync(other)) continue;
  const stray = readdirSync(other).filter((name) => name.includes("-surface."));
  if (stray.length > 0) fail(`${dir} declares no widgets but emitted ${stray.join(", ")}`);
  const otherPkg = JSON.parse(readFileSync(join(other, "package.json"), "utf8"));
  if (otherPkg.exports?.["./vocabulary"])
    fail(`${dir} declares no widgets but exports ./vocabulary`);
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
  if (!/export interface CarrierHolderProps \{[^}]*title\?: string;/s.test(inline)) {
    fail("Carrier.Holder was not inlined — its `title` property is missing from the surface");
  }
  if (!/interface GtkWidgetProps extends CarrierHolderProps/.test(inline)) {
    fail("the inlined base is emitted but nothing extends it");
  }
  if (!/inlined base\(s\) from a namespace with no vocabulary: Carrier\.Holder/.test(inline)) {
    // Named in the provenance line, so a dependency release that changes the base graph
    // shows up in a diff instead of in a support question.
    fail("the provenance line does not name the inlined base");
  }
  if (/from '@girs\/carrier-1\.0\/surface'/.test(inline)) {
    fail("the surface imports from @girs/carrier-1.0/surface, which does not exist");
  }
  if (existsSync(join(here, "generated-inline", "carrier-1.0", "carrier-1.0-vocabulary.d.ts"))) {
    fail("Carrier declares no widgets and still got a surface of its own");
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
}

// ---------------------------------------------------------------- control 2: broken input

const cli = join(here, "..", "..", "packages", "cli", "bin", "ts-for-gir-dev");
let brokenExit = 0;
let brokenOutput = "";
try {
  brokenOutput = execFileSync(
    process.execPath,
    [cli, "generate", "--configName", ".ts-for-gir.broken.rc.js"],
    {
      cwd: here,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
} catch (error) {
  brokenExit = typeof error.status === "number" ? error.status : 1;
  brokenOutput = `${error.stdout ?? ""}${error.stderr ?? ""}`;
}
if (brokenExit === 0) {
  fail("the broken fixture generated successfully — an unmappable property type is not refused");
} else if (!/GtkPanel\.mystery|Broken\.Panel\.mystery/.test(brokenOutput)) {
  // A non-zero exit for some other reason would be a gate that goes red without
  // measuring anything, which is the failure this whole file is shaped against.
  fail(`the broken fixture failed without naming the property:\n${brokenOutput.slice(-2000)}`);
}
const brokenSurface = join(here, "generated-broken", "broken-1.0", "broken-1.0-vocabulary.d.ts");
if (existsSync(brokenSurface)) fail("the broken fixture wrote a surface file before failing");

// ----------------------------------------------------------------------------------

if (failures.length > 0) {
  console.error("widget-surface assertion failures:");
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(
  `OK: ${rowGTypes.size - holders.size} widget row(s), ${holders.size} child holder(s), ` +
    `${Object.keys(data.OWN_PROPS).length} declaration(s) with props, ` +
    `${Object.keys(data.ENUM_NICKS).length} nick union(s); flag-off control clean; ` +
    `broken fixture rejected with exit ${brokenExit}`,
);
