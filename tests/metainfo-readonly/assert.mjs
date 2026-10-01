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

function format(diagnostics) {
  return ts.formatDiagnosticsWithColorAndContext(diagnostics, {
    getCanonicalFileName: (file) => file,
    getCurrentDirectory: () => root,
    getNewLine: () => "\n",
  });
}

try {
  const outdir = join(temporary, "generated");
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
    ],
    { cwd: temporary, stdio: "pipe", timeout: 120000 },
  );

  const consumer = join(temporary, "consumer.ts");
  const header = `import GObject from '@girs/gobject-2.0';
import Gio from '@girs/gio-2.0';

`;
  // Rationale: these are the shapes a real consumer holds. `CHILDREN` is the shape a typed export
  // from a Blueprint template compiles to; `IFACES` the shape an `as const` interface list takes.
  // Both are `readonly` tuples, and both were rejected with TS4104 before the fix.
  const positives = `const CHILDREN = ['box'] as const;
const INTERNAL = ['button'] as const;
const IFACES = [Gio.ListModel] as const;

const Children = GObject.registerClass(
  { GTypeName: 'ChildWidget', Template: 'w.ui', Children: CHILDREN, InternalChildren: INTERNAL },
  class ChildWidget extends GObject.Object {},
);
const Implements = GObject.registerClass(
  { GTypeName: 'ListModel', Implements: IFACES },
  class ListModel extends GObject.Object {},
);
// Rationale: a mutable array stays accepted -- a readonly type WIDENS the accepted input, it does
// not narrow it, and every existing consumer passes one. Pin that so the fix cannot become a break.
const Mutable = GObject.registerClass(
  { GTypeName: 'MutableWidget', Template: 'w.ui', Children: ['box'], InternalChildren: ['button'] },
  class MutableWidget extends GObject.Object {},
);
void Children; void Implements; void Mutable;`;

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

  function check(body) {
    writeFileSync(consumer, header + body);
    return ts.getPreEmitDiagnostics(ts.createProgram([consumer], options));
  }

  const valid = check(positives);
  assert.equal(valid.length, 0, format(valid));

  // Rationale: a control that must go the OTHER way. Without it this test would also pass if
  // `MetaInfo` were widened to `any`, or if the field were dropped -- the positives alone cannot
  // tell "accepts a readonly tuple" from "accepts everything". `Children` still has to reject a
  // number.
  const negatives = [
    "const Bad = GObject.registerClass({ Children: [1] }, class Bad extends GObject.Object {});",
    "const Bad = GObject.registerClass({ InternalChildren: [1] }, class Bad extends GObject.Object {});",
  ];
  for (const negative of negatives) {
    const diagnostics = check(negative);
    const fromNegative = diagnostics.filter((d) => d.file && d.start >= header.length);
    assert.notEqual(
      fromNegative.length,
      0,
      `${negative}\n  compiled clean, or failed away from the line under test:\n  ${diagnostics
        .map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n"))
        .join("\n  ")}`,
    );
  }

  // Rationale: the generated declaration must actually carry the change, not merely accept the
  // input through some other overload. Asserting the TEXT pins the source of the fix, so a later
  // regeneration that silently reverts the template fails here rather than at a consumer.
  const generated = readFileSync(join(outdir, "gobject-2.0/gobject-2.0.d.ts"), "utf8");
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
