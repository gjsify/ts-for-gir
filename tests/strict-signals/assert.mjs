// Rationale: compile consumers of freshly generated types. Checking declaration text alone
// cannot detect an inherited fallback that defeats strict signal checking.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const temporary = mkdtempSync(join(tmpdir(), "gir-strict-signals-"));

try {
  const outdir = join(temporary, "generated");
  execFileSync(
    join(root, "node_modules/.bin/ts-for-gir-dev"),
    [
      "generate",
      "Gio-2.0",
      "--girDirectories",
      join(root, "girs"),
      "--outdir",
      outdir,
      "--package",
      "--noPrettyPrint",
    ],
    { cwd: temporary, stdio: "pipe", timeout: 120000 },
  );

  const consumer = join(temporary, "consumer.ts");
  // Rationale: compile the registerClass migration recipe against fresh GIR types,
  // then reject invalid calls on the same subclass used by the GJS runtime test.
  const example = join(root, "examples/gobject-param-spec/strict-signals.ts");
  const runtimeSource = readFileSync(example, "utf8");
  const header = runtimeSource
    .replace("gi://Gio?version=2.0", "@girs/gio-2.0")
    .replace("gi://GObject?version=2.0", "@girs/gobject-2.0");
  const positives = `action.connect('activate', (source, parameter) => {
    const name: string = source.name;
    const value: import('@girs/glib-2.0').default.Variant | null = parameter;
    void name; void value;
  });
  action.connect_after('activate', source => { const enabled: boolean = source.enabled; void enabled; });
  action.emit('activate', null);
  new Gio.Cancellable().emit('cancelled');
  action.connect('notify::enabled', (source, pspec) => { void source.enabled; void pspec.name; });
  // Rationale: GObject's notify index signature deliberately accepts arbitrary details.
  customAction.connect('notify::nonexistent-property', (_source, pspec) => { void pspec.name; });
  // Rationale: SignalMethods<this, Signals> must preserve the most-derived emitter type.
  class DerivedAction extends StrictSignalAction { derivedOnly(): void {} }
  const derived = new DerivedAction({ name: 'derived' });
  derived.connect('value-changed', source => source.derivedOnly());
  derived.connect_after('value-changed', source => source.derivedOnly());
  derived.emit('value-changed', 42, 'answer');`;
  const negatives = [
    "action.connect('activtae', () => {});",
    "action.connect('activate', (_source, parameter: number) => {});",
    "action.connect_after('activtae', () => {});",
    "action.connect_after('activate', (_source, parameter: number) => {});",
    "action.emit('activtae', null);",
    "action.emit('activate', 123);",
    "action.emit('activate');",
    "customAction.connect('value-chagned', () => {});",
    "customAction.connect('value-changed', (_source, value: string) => {});",
    "customAction.connect_after('value-chagned', () => {});",
    "customAction.connect_after('value-changed', (_source, value: string) => {});",
    "customAction.emit('value-chagned', 42, 'answer');",
    "customAction.emit('value-changed', 'wrong', 'answer');",
    "customAction.emit('value-changed', 42, 123);",
    "customAction.emit('value-changed', 42);",
    "customAction.emit('value-changed', 42, 'answer', 'extra');",
    "customAction.connect('activtae', () => {});",
    "customAction.connect_after('activate', (_source, parameter: number) => {});",
    "customAction.emit('activate', 123);",
    // Rationale: the helper requires a callback signature for every signal entry.
    "type InvalidSignals = GObject.SignalMethods<GObject.Object, { broken: string }>;",
  ];
  const options = {
    strict: true,
    skipLibCheck: true,
    noEmit: true,
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    paths: { "@girs/*": [join(outdir, "*")] },
    types: [],
    noUncheckedSideEffectImports: true,
  };

  function check(body, prefix = header) {
    writeFileSync(consumer, prefix + body);
    return ts.getPreEmitDiagnostics(ts.createProgram([consumer], options));
  }

  const valid = check(positives);
  assert.equal(
    valid.length,
    0,
    ts.formatDiagnosticsWithColorAndContext(valid, {
      getCanonicalFileName: (file) => file,
      getCurrentDirectory: () => root,
      getNewLine: () => "\n",
    }),
  );
  for (const negative of negatives) {
    const diagnostics = check(negative);
    // Rationale: `length !== 0` would also be satisfied by a diagnostic from the header, so the
    // assertion says what it means -- the failure has to come from the line under test. The
    // positives above are what prove the header itself compiles; this pins the attribution, and
    // prints the diagnostics instead of just the snippet when a negative stops failing.
    const fromNegative = diagnostics.filter((d) => d.file && d.start >= header.length);
    assert.notEqual(
      fromNegative.length,
      0,
      `${negative}\n  compiled clean, or failed away from the line under test:\n  ${diagnostics
        .map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n"))
        .join("\n  ")}`,
    );
  }

  // Rationale: the documented migration recipe must compile and execute as written.
  const readme = readFileSync(join(root, "packages/cli/README.md"), "utf8");
  const heading = "### Signal type checking";
  const headingAt = readme.indexOf(heading);
  // Rationale: `indexOf` returning -1 would slice from the last character, find no block, and
  // report a missing recipe when the real fault is a renamed section. Name the actual fault.
  assert.notEqual(headingAt, -1, `packages/cli/README.md no longer has a "${heading}" section`);
  const signalDocs = readme.slice(headingAt);
  const recipe = /```ts\n([\s\S]*?)```/.exec(signalDocs)?.[1];
  assert.ok(recipe, "Missing custom signal migration recipe");
  // Rationale: "the first ts block after the heading" is the recipe only by convention. Pin the
  // convention -- a block inserted above it would otherwise be compiled in its place, and this
  // check would stay green while the documented recipe went untested.
  for (const marker of ["GObject.SignalMethods", "registerClass", "declare emit"]) {
    assert.ok(
      recipe.includes(marker),
      `the first ts block under "${heading}" is not the migration recipe: no ${marker}`,
    );
  }
  const recipeErrors = check(recipe.replace("gi://GObject?version=2.0", "@girs/gobject-2.0"), "");
  assert.equal(
    recipeErrors.length,
    0,
    recipeErrors
      .map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"))
      .join("\n"),
  );

  writeFileSync(consumer, runtimeSource);
  const exampleProgram = ts.createProgram(
    [
      consumer,
      join(outdir, "gio-2.0/gio-2.0-ambient.d.ts"),
      join(outdir, "gobject-2.0/gobject-2.0-ambient.d.ts"),
    ],
    options,
  );
  const errors = ts.getPreEmitDiagnostics(exampleProgram);
  assert.equal(
    errors.length,
    0,
    errors
      .map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"))
      .join("\n"),
  );

  const js = ts.transpileModule(runtimeSource, { compilerOptions: options }).outputText;
  const executable = join(temporary, "strict-signals.js");
  writeFileSync(executable, js);
  execFileSync("gjs", ["-m", executable], { stdio: "inherit", timeout: 15000 });
  writeFileSync(executable, ts.transpileModule(recipe, { compilerOptions: options }).outputText);
  execFileSync("gjs", ["-m", executable], { stdio: "inherit", timeout: 15000 });

  console.log("Generated signal overloads passed compile-time and runtime checks.");
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
