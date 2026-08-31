// Asserts that GIR's documentation METADATA — `@deprecated` with its version and reason,
// and `@since` — reaches the emitted declarations.
//
// WHY THIS EXISTS. `parseMetadata` read all of it correctly and `getTsDocMetadataTags`
// rendered it correctly, and between them the class-member rebuild dropped it on the
// floor: `IntrospectedClassFunction.fromXML` builds an `IntrospectedFunction`, copies
// `doc`, `parameters` and `return_type` out of it, and constructed a new object without
// `metadata`. Every method, static function, virtual method and class callback in the
// corpus lost its deprecation that way. Measured on Gtk-4.0 before the fix: 295
// `@deprecated` in the output against 780 `<doc-deprecated>` in the GIR, and the 528 that
// sit on `<method>` reached nobody — so an IDE showed no strikethrough for an API that
// upstream says will be gone in GTK 5.
//
// A unit test over `getTsDocMetadataTags` would have passed throughout. The assertion has
// to run the PARSE, so this suite generates and reads the emitted file.
//
// The property case is the positive control: properties never lost their metadata, so if
// the property assertion fails the suite is broken rather than the fix.

import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const file = join(here, "generated", "docs-1.0", "docs-1.0.d.ts");
if (!existsSync(file)) throw new Error(`types not generated: ${file}`);
const types = readFileSync(file, "utf8");

/** @type {string[]} */
const failures = [];
const fail = (message) => failures.push(message);

/** The TSDoc block immediately above a declaration, or null. */
function docBlockOf(declaration) {
  const at = types.indexOf(declaration);
  if (at === -1) return null;
  const before = types.slice(0, at);
  const open = before.lastIndexOf("/**");
  const close = before.lastIndexOf("*/");
  if (open === -1 || close < open) return null;
  // Only if nothing but whitespace separates the block from the declaration.
  if (before.slice(close + 2).trim() !== "") return null;
  return before.slice(open, close + 2);
}

const must = [
  // The reason text keeps the generator's own doc transform, which fences a C symbol in
  // backticks — asserted as emitted rather than as written in the GIR.
  [
    "method keeps its deprecation",
    "old_way(): void",
    /@deprecated since 1\.8: Use `docs_thing_new_way\(\)` instead\./,
  ],
  ["method keeps its since", "new_way(): void", /@since 1\.8/],
  ["method keeps BOTH tags", "old_way(): void", /@since 1\.2[\s\S]*@deprecated/],
  [
    "static function keeps its deprecation",
    "static make_old(): Thing",
    /@deprecated since 1\.9: Construct it directly\./,
  ],
  [
    "property keeps its deprecation",
    "get legacy_mode()",
    /@deprecated since 1\.5: Legacy mode is gone\./,
  ],
];

for (const [label, declaration, expected] of must) {
  const block = docBlockOf(declaration);
  if (block === null) {
    fail(`${label}: no TSDoc block above \`${declaration}\``);
    continue;
  }
  if (!expected.test(block))
    fail(`${label}: block does not match ${expected}\n      ${block.replace(/\n/g, "\n      ")}`);
}

// ---------------------------------------------------------- signal parameter names
//
// Methods have always carried the GIR's parameter name — `set_child(child: Widget)` — and
// signals carried `arg0`, which discards the label exactly where a reader is about to
// write a callback. Measured on Gtk-4.0 after the change: 125 named, 0 `argN`.
if (!/"row-activated": \(row: Thing\)/.test(types)) {
  fail("a signal parameter lost its GIR name");
}
// NOT covered here, and said so rather than left as a silent gap: the `argN` fallback for
// a reserved word or a duplicate name. Two extra signals added to this same fixture class
// to exercise it never reached the output at all, and four hypotheses were ruled out
// (parameter name, parameter type, position in the class, stale artefact). Whatever drops
// them is upstream of the naming code, so a control written here would be testing that
// instead. The fallback stays defensive and is argued in `signalParamName`'s comment.

// The control: an undeprecated method must not inherit a sibling's tag.
const newWay = docBlockOf("new_way(): void");
if (newWay && /@deprecated/.test(newWay)) {
  fail("an undeprecated method carries @deprecated — the tag is leaking between members");
}

// A virtual method is emitted under a different name; assert the tag reached the file at
// all rather than guessing the spelling.
if (!/@deprecated since 1\.8: Override handle_new instead\./.test(types)) {
  fail("the virtual method's deprecation reached no declaration");
}

if (failures.length > 0) {
  console.error("doc-tags assertion failures:");
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

const count = (re) => (types.match(re) ?? []).length;
console.log(
  `OK: ${count(/@deprecated/g)} @deprecated, ${count(/@since/g)} @since across method, ` +
    `static function, virtual method and property; undeprecated sibling clean`,
);
