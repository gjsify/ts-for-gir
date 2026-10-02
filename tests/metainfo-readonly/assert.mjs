// Rationale: `MetaInfo`'s array fields must accept a `readonly` tuple. GJS only READS every one of
// them -- `registerClass` stores the array on the class and later iterates it
// (`for (let child of children)`, `children.forEach(...)`, `requires.filter(...)`,
// `[...gobjectInterfaces].reverse()`, which copies before reversing) -- so a mutable type rejects
// data the caller legitimately holds as `const`: a `readonly` tuple from a typed export, or any
// `as const` list. Checking the declaration text alone cannot catch that, because the text says
// nothing about what a consumer may pass; only compiling a consumer can.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const temporary = mkdtempSync(join(tmpdir(), "gir-metainfo-readonly-"));
const consumer = join(temporary, "consumer.ts");

function format(diagnostics) {
  return ts.formatDiagnosticsWithColorAndContext(diagnostics, {
    getCanonicalFileName: (file) => file,
    getCurrentDirectory: () => root,
    getNewLine: () => "\n",
  });
}

// Rationale: `noAdvancedVariants` selects the OTHER `registerClass` overload set of the template,
// which carries its own copy of the `Interfaces` constraint. Both sets are widened, so the
// consumer is compiled against both generations -- otherwise half of what the template changes
// goes untested.
function generate(variant) {
  const outdir = join(temporary, `generated-${variant}`);
  execFileSync(
    join(root, "node_modules/.bin/ts-for-gir-dev"),
    [
      "generate",
      "GObject-2.0",
      "--girDirectories",
      join(root, "girs"),
      "--outdir",
      outdir,
      "--package",
      "--noPrettyPrint",
      ...(variant === "legacy" ? ["--noAdvancedVariants"] : []),
    ],
    { cwd: temporary, stdio: "pipe", timeout: 120000 },
  );
  return outdir;
}

function check(outdir, body) {
  writeFileSync(consumer, body);
  return ts.getPreEmitDiagnostics(
    ts.createProgram([consumer], {
      strict: true,
      skipLibCheck: true,
      noEmit: true,
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      paths: { "@girs/*": [join(outdir, "*")] },
      types: [],
      noUncheckedSideEffectImports: true,
    }),
  );
}

// Rationale: these are the shapes a real consumer holds. `CHILDREN` is the shape a typed export
// from a Blueprint template compiles to; `IFACES` the shape an `as const` interface list takes;
// `CHILD_LIST` the non-tuple one. Every one is a `readonly` array, and every one was rejected with
// TS4104 before the fix. `CHANGED` and `PROPS` pin the two neighbours the fix did NOT have to
// touch: `param_types` is read there through `SignalDefinition` itself rather than through the
// inferred `Signals` constraint, and `Properties` is a record, whose readonly modifiers TypeScript
// never rejected. Neither can narrow again without a positive here that goes red.
const POSITIVES = `import GObject from '@girs/gobject-2.0';
import Gio from '@girs/gio-2.0';

const CHILDREN = ['box'] as const;
const INTERNAL = ['button'] as const;
const IFACES = [Gio.ListModel] as const;
const PARAM_TYPES = [GObject.TYPE_STRING] as const;
const CHILD_LIST: readonly string[] = ['box'];
const PROPS = { title: GObject.ParamSpec.string('title', null, null, GObject.ParamFlags.READWRITE, '') } as const;
const CHANGED = { accumulator: GObject.AccumulatorType.NONE, param_types: PARAM_TYPES } as const satisfies GObject.SignalDefinition;
const SIGNALS = { changed: CHANGED };

const Children = GObject.registerClass(
  { GTypeName: 'ChildWidget', Template: 'w.ui', Children: CHILDREN, InternalChildren: INTERNAL, Signals: SIGNALS },
  class ChildWidget extends GObject.Object {},
);
const Implements = GObject.registerClass(
  { GTypeName: 'ListModel', Implements: IFACES },
  class ListModel extends GObject.Object {},
);
const Props = GObject.registerClass(
  { GTypeName: 'Titled', Properties: PROPS, Children: CHILD_LIST },
  class Titled extends GObject.Object {},
);
// Rationale: a mutable array stays accepted -- a readonly type WIDENS the accepted input, it does
// not narrow it, and every existing consumer passes one. Pin that so the fix cannot become a break.
const Mutable = GObject.registerClass(
  { GTypeName: 'MutableWidget', Template: 'w.ui', Children: ['box'], InternalChildren: ['button'] },
  class MutableWidget extends GObject.Object {},
);
void Children; void Implements; void Props; void Mutable;`;

// Rationale: a control per widened field, and each must go the OTHER way. Without them this test
// would also pass if the fields were widened to `any`, or dropped -- the positives alone cannot
// tell "accepts a readonly tuple" from "accepts everything". One per field the template changed:
// `Children`, `InternalChildren`, `Requires`, the `Implements` constraint, `param_types`.
const NEGATIVES = [
  "GObject.registerClass({ Children: [1] }, class Bad extends GObject.Object {});",
  "GObject.registerClass({ InternalChildren: [1] }, class Bad extends GObject.Object {});",
  "GObject.registerClass({ Requires: [1] }, class Bad extends GObject.Object {});",
  "GObject.registerClass({ Implements: [1] }, class Bad extends GObject.Object {});",
  "const S = { accumulator: 0, param_types: [1] } satisfies GObject.SignalDefinition; void S;",
];

try {
  for (const variant of ["advanced", "legacy"]) {
    const outdir = generate(variant);

    const valid = check(outdir, POSITIVES);
    assert.equal(valid.length, 0, `${variant}:\n${format(valid)}`);

    for (const negative of NEGATIVES) {
      const diagnostics = check(outdir, `${POSITIVES}\n${negative}`);
      const fromNegative = diagnostics.filter(
        (d) => d.file?.fileName === consumer && d.start != null && d.start >= POSITIVES.length,
      );
      assert.notEqual(
        fromNegative.length,
        0,
        `${variant}: ${negative}\n  compiled clean, or failed away from the line under test:\n  ${diagnostics
          .map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n"))
          .join("\n  ")}`,
      );
    }
  }

  // Rationale: the generated declaration must actually carry the change, not merely accept the
  // input through some other overload. Asserting the TEXT pins the source of the fix, so a later
  // regeneration that silently reverts the template fails here rather than at a consumer.
  const generated = readFileSync(
    join(temporary, "generated-advanced/gobject-2.0/gobject-2.0.d.ts"),
    "utf8",
  );
  for (const field of ["Children", "InternalChildren", "Requires"]) {
    assert.match(
      generated,
      new RegExp(`\\n    ${field}\\?: readonly `),
      `generated MetaInfo.${field} is not readonly`,
    );
  }

  console.log("MetaInfo accepted readonly tuples and still rejected wrong element types.");
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
