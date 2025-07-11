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

export function* getGenericNames(start: string = "A") {
	let names = GenericNames.map((s) => `${s}`);
	const startIteration = Number.parseInt(start.slice(1) || "0");

	let i = startIteration;

	names = names.map((s) => (i === 0 ? s : `${s}${i}`));

	const StartLetter = start[0];
	const position = GenericNames.indexOf(StartLetter);

	while (true) {
		for (const name of names) {
			if (i === startIteration && GenericNames.indexOf(name) >= position) {
				yield name;
			}
		}

		names = names.map((s) => `${s}${i}`);

		i++;
	}

	// This will always be a string return.
	return "ThisShouldNeverHappen";
}

export function createGenericNameGenerator(): () => string {
	const genericNames = getGenericNames();

	return () => genericNames.next().value;
}

export function createGenericNameGeneratorAt(start: string): () => string {
	const genericNames = getGenericNames(start);

	return () => genericNames.next().value;
}
