// This example is based on the GJS GVariant guide: https://gjs.guide/guides/glib/gvariant.html#basic-usage

import Gio from "gi://Gio?version=2.0";
import GLib from "gi://GLib?version=2.0";

/**
 * Example demonstrating different ways to use GLib.Variant
 * Based on the GJS GVariant guide: https://gjs.guide/guides/glib/gvariant.html
 */

// DBus interface definition for testing signal emission
const ifaceXml = `
<node>
  <interface name="org.example.Test">
    <signal name="picked">
      <arg name="wmClass" type="s"/>
    </signal>
  </interface>
</node>`;

/**
 * Demonstrates basic variant usage with simple types
 */
function testBasicVariants() {
	print("\n=== Basic Variant Tests ===");

	// Simple string variant
	const basic = new GLib.Variant("s", "hello");
	print("Basic string variant:", basic.print(true));

	// Tuple combining string and integer
	const tuple = new GLib.Variant("(si)", ["hello", 42]);
	print("Tuple variant:", tuple.print(true));

	// Array of strings
	const array = new GLib.Variant("as", ["one", "two", "three"]);
	print("String array variant:", array.print(true));

	// Compare with JSON for reference
	const json = {
		name: "Mario",
		lives: 3,
		active: true,
	};
	print("\nJSON equivalent:", JSON.stringify(json, null, 2));
}

/**
 * Demonstrates DBus-related variant usage
 */
function testDBusVariants() {
	print("\n=== DBus Variant Tests ===");

	// Create and export DBus object
	const dbus = Gio.DBusExportedObject.wrapJSObject(ifaceXml, {});
	dbus.export(Gio.DBus.session, "/org/example/Test");

	// Emit signal with string variant
	const wmClass = "test-window";
	const variant = new GLib.Variant("(s)", [wmClass]);
	print("DBus signal variant:", variant.print(true));
	dbus.emit_signal("picked", variant);

	// Example of a complex DBus method call parameters - empty dictionary for a{sv}
	const emptyDict: Record<string, GLib.Variant> = {};
	const methodParams = new GLib.Variant("(ssa{sv})", ["some-extension@someone.github.io", "", emptyDict]);
	print("DBus method parameters:", methodParams.print(true));
}

/**
 * Demonstrates complex variant structures and nested types
 */
function testComplexVariants() {
	print("\n=== Complex Variant Tests ===");

	// Dictionary with variant values - must use GVariant objects for a{sv} type
	const dict = new GLib.Variant("a{sv}", {
		key1: new GLib.Variant("s", "value1"), // String variant
		key2: new GLib.Variant("i", 123), // Integer variant
		key3: new GLib.Variant("as", ["a", "b", "c"]), // String array variant
	});
	print("Dictionary variant:", dict.print(true));

	// Nested structure combining multiple types - fixed nested object
	const nested = new GLib.Variant("(sa{sv})", [
		"test",
		{
			bool: new GLib.Variant("b", true), // Boolean variant
			number: new GLib.Variant("d", 3.14), // Double variant
			array: new GLib.Variant("ai", [1, 2, 3]), // Integer array variant
		},
	]);
	print("Nested variant:", nested.print(true));
}

/**
 * Demonstrates variant unpacking methods and validates our type fixes
 */
function testVariantUnpacking() {
	print("\n=== Variant Unpacking Tests ===");

	// Test 1: Simple types - all methods should return the same result
	print("\n--- Simple Types ---");
	const boolVariant = new GLib.Variant("b", true);
	const _stringVariant = new GLib.Variant("s", "hello");
	const _numberVariant = new GLib.Variant("i", 42);

	// All unpacking methods return the same for simple types
	const boolUnpack = boolVariant.unpack(); // TypeScript: boolean
	const boolDeep = boolVariant.deepUnpack(); // TypeScript: boolean
	const boolRecursive = boolVariant.recursiveUnpack(); // TypeScript: boolean
	print(`Boolean - unpack: ${boolUnpack}, deep: ${boolDeep}, recursive: ${boolRecursive}`);

	// Test 2: String array - demonstrates the key differences
	print("\n--- String Array (as) ---");
	const arrayVariant = new GLib.Variant("as", ["one", "two", "three"]);

	// unpack() should return GLib.Variant[] (shallow)
	const arrayUnpack = arrayVariant.unpack();
	print(`unpack() result type: ${typeof arrayUnpack}, length: ${arrayUnpack.length}`);
	print(`First element type: ${typeof arrayUnpack[0]}, is Variant: ${arrayUnpack[0] instanceof GLib.Variant}`);

	// deepUnpack() should return string[] (one level deep)
	const arrayDeep = arrayVariant.deepUnpack();
	print(`deepUnpack() result type: ${typeof arrayDeep}, length: ${arrayDeep.length}`);
	print(`First element type: ${typeof arrayDeep[0]}, value: "${arrayDeep[0]}"`);

	// recursiveUnpack() should return string[] (fully recursive)
	const arrayRecursive = arrayVariant.recursiveUnpack();
	print(`recursiveUnpack() result type: ${typeof arrayRecursive}, length: ${arrayRecursive.length}`);
	print(`First element type: ${typeof arrayRecursive[0]}, value: "${arrayRecursive[0]}"`);

	// Test 3: Complex nested structure - shows recursive vs deep differences
	print("\n--- Complex Structure (a{sv}) ---");
	const complexVariant = new GLib.Variant("a{sv}", {
		simpleString: new GLib.Variant("s", "value"),
		nestedArray: new GLib.Variant("as", ["nested1", "nested2"]),
		deepStruct: new GLib.Variant("(si)", ["tuple", 123]),
	});

	// unpack() returns object with Variant values
	const complexUnpack = complexVariant.unpack();
	print(`unpack() - simpleString is Variant: ${complexUnpack.simpleString instanceof GLib.Variant}`);

	// deepUnpack() unpacks one level
	const complexDeep = complexVariant.deepUnpack();
	print(`deepUnpack() - simpleString: "${complexDeep.simpleString}" (${typeof complexDeep.simpleString})`);
	print(`deepUnpack() - nestedArray is Variant: ${complexDeep.nestedArray instanceof GLib.Variant}`);

	// recursiveUnpack() unpacks all levels
	const complexRecursive = complexVariant.recursiveUnpack();
	print(
		`recursiveUnpack() - simpleString: "${complexRecursive.simpleString}" (${typeof complexRecursive.simpleString})`,
	);
	print(
		`recursiveUnpack() - nestedArray: [${complexRecursive.nestedArray.join(", ")}] (${typeof complexRecursive.nestedArray[0]})`,
	);
	print(`recursiveUnpack() - deepStruct: [${complexRecursive.deepStruct.join(", ")}]`);

	// Test 4: Type validation - this should show TypeScript correctly inferring types
	print("\n--- Type Validation ---");

	// TypeScript should infer these types correctly:
	// - unpack() on "as" → GLib.Variant[]
	// - deepUnpack() on "as" → string[]
	// - recursiveUnpack() on "as" → string[]
	const stringArrayVariant = new GLib.Variant("as", ["type", "test"]);

	const unpackResult = stringArrayVariant.unpack();
	const deepResult = stringArrayVariant.deepUnpack();
	const recursiveResult = stringArrayVariant.recursiveUnpack();

	print(`Type inference validation:`);
	print(`- unpack() contains Variants: ${unpackResult.every((item) => item instanceof GLib.Variant)}`);
	print(`- deepUnpack() contains strings: ${deepResult.every((item) => typeof item === "string")}`);
	print(`- recursiveUnpack() contains strings: ${recursiveResult.every((item) => typeof item === "string")}`);
}

// Main execution
print("Starting GLib.Variant tests...");

// Run all test categories
testBasicVariants();
testDBusVariants();
testComplexVariants();
testVariantUnpacking();

// Create main loop and exit timer
const loop = GLib.MainLoop.new(null, false);
GLib.timeout_add(GLib.PRIORITY_DEFAULT, 2000, () => {
	print("\nTests completed, exiting...");
	loop.quit();
	return GLib.SOURCE_REMOVE;
});

// Run main loop
loop.run();
