// Prints the first N names from `getGenericNames(start)`, one per line.
//
// This runs as its own process on purpose. The defect the suite next door
// guards against is a generator that stops YIELDING but never RETURNS, and a
// synchronous loop like that cannot be interrupted from inside JavaScript —
// not by vitest's test timeout, not by an AbortSignal. Driving it from a child
// process turns "hangs the whole CI job" into "one test fails in N seconds".

import { getGenericNames } from "@ts-for-gir/lib";

const [, , start, count] = process.argv;
const names = start === "" ? getGenericNames() : getGenericNames(start);
const wanted = Number.parseInt(count, 10);

for (let taken = 0; taken < wanted; taken++) {
  process.stdout.write(`${names.next().value}\n`);
}
