// Tests for `getGenericNames` — the supply of TypeScript generic parameter names
// that every generified class and callback draws on.
//
// WHY THIS EXISTS
//
// The generator is documented as an unbounded sequence: `A`…`Z`, then `A1`…`Z1`,
// then `A2`…, for as long as a declaration keeps asking. It was not one. After the
// first pass it kept looping without ever yielding again, so the 26th call to
// `createGenericNameGenerator()`'s returned function never came back — an infinite
// loop, not a wrong value. `createGenericNameGeneratorAt` made the ceiling lower
// still: a class copied at `"Z"` had exactly one name left before the same hang.
//
// Nothing caught it, in two ways. `packages/lib` was excluded from linting by an
// `ignorePatterns` entry meant for build output, so `no-unreachable` never reported
// the `return "ThisShouldNeverHappen"` the loop had left behind as its tombstone.
// And a hang produces no error, no partial output and no stack — a generator that
// hangs only past name 25 looks exactly like a generator that works, because the
// GIR corpus rarely reaches 26 generics on one declaration. Rarely is not never,
// and the failure mode is a build that stops making progress in silence.
//
// So these tests do two things. They pin the names actually handed out, because
// those names appear verbatim in every generated `.d.ts` and must not move. And
// they drive the generator well past the old ceiling — from a child process with a
// hard timeout, so that a regression fails loudly instead of hanging the suite.

import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const DRIVER = fileURLToPath(new URL("./drive-generic-names.ts", import.meta.url));

/**
 * A healthy run of the driver takes ~250 ms, so this is ~80x headroom. It has to be
 * enforced here: `execFileSync` blocks the thread, so vitest's own test timeout cannot
 * fire while a child is spinning.
 */
const TIMEOUT_MS = 20_000;

/**
 * The alphabet the generator walks. Note the gap: `T` is absent upstream, so a
 * pass is 25 names, not 26. Pinned here so a change to the table is a test change.
 */
const FIRST_PASS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

/**
 * Takes `count` names from `getGenericNames(start)`, running it out-of-process so
 * that a generator which stops yielding is killed rather than waited on.
 *
 * @param start - Resume point, or `""` for the default.
 */
function take(start: string, count: number): string[] {
  // `--experimental-transform-types`, not `--strip-types`: the driver reaches
  // `getGenericNames` through the `@ts-for-gir/lib` barrel, which re-exports a
  // real `enum` that strip-only mode refuses.
  const args = ["--no-warnings", "--experimental-transform-types", DRIVER, start, String(count)];

  let stdout: string;
  try {
    stdout = execFileSync(process.execPath, args, { encoding: "utf8", timeout: TIMEOUT_MS });
  } catch (error) {
    const killed = (error as { signal?: string | null }).signal;
    if (killed) {
      throw new Error(
        `getGenericNames(${start === "" ? "" : JSON.stringify(start)}) did not produce ${count} names ` +
          `within ${TIMEOUT_MS} ms — it was killed with ${killed}. A generator that stops yielding without ` +
          `returning hangs its caller; see the note at the top of this file.`,
      );
    }
    throw error;
  }

  return stdout.split("\n").filter((line) => line !== "");
}

describe("getGenericNames", () => {
  it("hands out the bare alphabet on the first pass", () => {
    expect(take("", FIRST_PASS.length)).toEqual(FIRST_PASS);
  });

  it("keeps going past the end of the alphabet", () => {
    const names = take("", FIRST_PASS.length * 3);

    expect(names).toHaveLength(FIRST_PASS.length * 3);
    expect(names.slice(FIRST_PASS.length, FIRST_PASS.length * 2)).toEqual(FIRST_PASS.map((n) => `${n}1`));
    expect(names.slice(FIRST_PASS.length * 2)).toEqual(FIRST_PASS.map((n) => `${n}2`));
  });

  it("never repeats a name", () => {
    const names = take("", 200);

    expect(new Set(names).size).toBe(names.length);
  });

  it("resumes at the letter a copied class stopped on", () => {
    expect(take("C", 3)).toEqual(["C", "D", "E"]);
  });

  it("carries on past the alphabet even when it resumes at the last letter", () => {
    // `Z` is the worst case for a copy chain: one name left on the first pass.
    // This is where the old generator hung after a single `next()`.
    expect(take("Z", 4)).toEqual(["Z", "A1", "B1", "C1"]);
  });

  it("resumes at a suffixed name from a later pass", () => {
    expect(take("B1", 3)).toEqual(["B1", "C1", "D1"]);
  });
});
