const GenericNames = [
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
 * An unbounded supply of generic parameter names: `A`…`Z`, then `A1`…`Z1`,
 * then `A2`…`Z2`, and so on.
 *
 * `start` resumes the sequence at an already-issued name, so a copied class
 * keeps handing out the names the original had not reached yet. The first
 * pass begins at that letter; every later pass covers the full alphabet.
 *
 * The generator is infinite by design and therefore never returns — that is
 * what the `never` return type states, so callers can treat `next().value`
 * as a plain `string`.
 */
export function* getGenericNames(start: string = "A"): Generator<string, never, unknown> {
	// A name is a letter plus the pass number, with pass 0 left bare ("A", not "A0").
	const startIteration = Number.parseInt(start.slice(1) || "0", 10);
	const startPosition = GenericNames.indexOf(start[0]);

	for (let iteration = startIteration; ; iteration++) {
		for (const [position, letter] of GenericNames.entries()) {
			if (iteration === startIteration && position < startPosition) continue;

			yield iteration === 0 ? letter : `${letter}${iteration}`;
		}
	}
}

export function createGenericNameGenerator(): () => string {
	const genericNames = getGenericNames();

	return () => genericNames.next().value;
}

export function createGenericNameGeneratorAt(start: string): () => string {
	const genericNames = getGenericNames(start);

	return () => genericNames.next().value;
}
