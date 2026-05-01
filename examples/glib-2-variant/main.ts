// GLib.Variant in GJS with TypeScript — practical, typed examples
// Docs: https://gjs.guide/guides/glib/gvariant.html

import GLib from "gi://GLib?version=2.0";

/**
 * This example shows how to:
 * - Create Variants for simple values, tuples, arrays and dictionaries
 * - Use deepUnpack() and recursiveUnpack() and see their type effects
 * - Rely on TypeScript to infer precise types from Variant signatures
 */

function basicValues(): void {
	print("\n=== Basic values ===");

	const vBool = new GLib.Variant("b", true);
	const vStr = new GLib.Variant("s", "hello");
	const vInt = new GLib.Variant("i", 42);

	// Recommended: deepUnpack for simple values → typed JS values
	const boolValue = vBool.deepUnpack(); // boolean
	const strValue = vStr.deepUnpack(); // string
	const intValue = vInt.deepUnpack(); // number

	print(`boolean: ${boolValue}`);
	print(`string: ${strValue}`);
	print(`int32: ${intValue}`);
}

function tuples(): void {
	print("\n=== Tuples ===");

	// (si) → [string, number]
	const vTuple = new GLib.Variant("(si)", ["score", 99]);

	// deepUnpack gives typed tuple values
	const tupleDeep = vTuple.deepUnpack(); // [string, number]
	print(`deepUnpack(): [${tupleDeep[0]}, ${tupleDeep[1]}]`);

	// unpack keeps elements as Variants (useful for manual control)
	const tupleShallow = vTuple.unpack(); // Variant[]
	print(`unpack(): [Variant x${tupleShallow.length}]`);
}

function arrays(): void {
	print("\n=== Arrays ===");

	// as → string[]
	const vStrArray = new GLib.Variant("as", ["one", "two", "three"]);

	const deep = vStrArray.deepUnpack(); // string[]
	print(`deepUnpack(): ${JSON.stringify(deep)}`);

	const shallow = vStrArray.unpack(); // Variant[] (elements still Variants)
	print(`unpack(): Variant[] length=${shallow.length}`);
}

function dictionaries(): void {
	print("\n=== Dictionaries (a{sv}) ===");

	// Values must be Variants for a{sv}
	const vDict = new GLib.Variant("a{sv}", {
		name: new GLib.Variant("s", "Mario"),
		lives: new GLib.Variant("i", 3),
		active: new GLib.Variant("b", true),
	});

	// deepUnpack keeps Variant values for a{sv} (so you can inspect types)
	const deep = vDict.deepUnpack(); // { [k: string]: GLib.Variant }
	print(
		`deepUnpack(): name=${deep.name.deepUnpack()}, lives=${deep.lives.deepUnpack()}, active=${deep.active.deepUnpack()}`,
	);

	// recursiveUnpack converts everything to plain JS values
	const recursive = vDict.recursiveUnpack(); // { name: string, lives: number, active: boolean }
	print(`recursiveUnpack(): ${JSON.stringify(recursive)}`);
}

function signaturesAndInference(): void {
	print("\n=== Signatures & Type inference ===");

	// Types are inferred from the signature literal
	const numbers = new GLib.Variant("ai", [1, 2, 3]);
	const numbersDeep = numbers.deepUnpack(); // number[]
	const first: number | undefined = numbersDeep[0];
	print(`numbers: ${JSON.stringify(numbersDeep)}, first=${first}`);

	// Tuple with nested array: (sai) → [string, number[]]
	const nested = new GLib.Variant("(sai)", ["items", [1, 2, 3]]);
	const nestedDeep = nested.deepUnpack(); // [string, number[]]
	print(`nested tuple: [${nestedDeep[0]}, [${nestedDeep[1].join(", ")}]]`);
}

function main(): void {
	print("GLib.Variant — typed GJS examples\n");

	basicValues();
	tuples();
	arrays();
	dictionaries();
	signaturesAndInference();

	// Keep the example short-lived in CI and local runs
	const loop = GLib.MainLoop.new(null, false);
	GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1000, () => {
		print("\nDone.");
		loop.quit();
		return GLib.SOURCE_REMOVE;
	});
	loop.run();
}

main();
