// Test example for noAdvancedVariants: true option
// This demonstrates how GLib.Variant usage differs when Advanced Variants are disabled

import './@types/index.d.ts';
import GLib from "gi://GLib?version=2.0";

/**
 * Demonstrates variant usage with noAdvancedVariants: true
 * This shows the "legacy" behavior where explicit types are required
 */

function testBasicVariants() {
	print("\n=== Basic Variant Tests (noAdvancedVariants: true) ===");

	// Simple string variant
	const basic = new GLib.Variant("s", "hello world");
	print("Basic string variant:", basic.print(true));

	// Unpack - works the same way
	const unpacked = basic.unpack();
	print("Unpacked value:", unpacked);
}

function testComplexVariantsWithExplicitTypes() {
	print("\n=== Complex Variants with Explicit Types ===");

	// Dictionary variant - a{sv} type
	const dict = new GLib.Variant("a{sv}", {
		name: new GLib.Variant("s", "Test App"),
		version: new GLib.Variant("i", 42),
		active: new GLib.Variant("b", true),
		features: new GLib.Variant("as", ["feature1", "feature2"]),
	});
	
	print("Dictionary variant:", dict.print(true));

	// With noAdvancedVariants: true, we MUST provide explicit types
	// This will work:
	const dictUnpacked = dict.deepUnpack<{ [key: string]: GLib.Variant }>();
	print("Unpacked dictionary keys:", Object.keys(dictUnpacked));
	
	// Access nested values by unpacking the variant values
	for (const [key, value] of Object.entries(dictUnpacked)) {
		print(`${key}: ${value.deepUnpack()}`);
	}

	// Array variant
	const arrayVariant = new GLib.Variant("as", ["apple", "banana", "cherry"]);
	
	// With noAdvancedVariants: true, explicit type needed for deepUnpack
	const arrayUnpacked = arrayVariant.deepUnpack<string[]>();
	print("Unpacked array:", JSON.stringify(arrayUnpacked));
}

function testNestedStructures() {
	print("\n=== Nested Structure Tests ===");

	// Complex nested structure
	const nested = new GLib.Variant("(sa{sv})", [
		"config",
		{
			debug: new GLib.Variant("b", true),
			port: new GLib.Variant("i", 8080),
			allowed_hosts: new GLib.Variant("as", ["localhost", "127.0.0.1"]),
		},
	]);

	print("Nested variant:", nested.print(true));

	// With noAdvancedVariants: true, we need explicit types
	const [name, settings] = nested.deepUnpack<[string, { [key: string]: GLib.Variant }]>();
	print(`Config name: ${name}`);
	
	// Unpack the settings dictionary
	for (const [key, value] of Object.entries(settings)) {
		print(`Setting ${key}: ${value.deepUnpack()}`);
	}
}

function testRecursiveUnpack() {
	print("\n=== Recursive Unpack Test ===");

	// Create a complex variant
	const complex = new GLib.Variant("a{sv}", {
		metadata: new GLib.Variant("a{sv}", {
			title: new GLib.Variant("s", "My App"),
			author: new GLib.Variant("s", "Developer"),
		}),
		settings: new GLib.Variant("a{sv}", {
			theme: new GLib.Variant("s", "dark"),
			notifications: new GLib.Variant("b", true),
		}),
	});

	// recursiveUnpack still works the same way
	const recursiveResult = complex.recursiveUnpack();
	print("Recursively unpacked:", JSON.stringify(recursiveResult, null, 2));
}

// Main execution
print("Testing GLib.Variant with noAdvancedVariants: true");
print("This demonstrates the 'legacy' behavior requiring explicit types");

testBasicVariants();
testComplexVariantsWithExplicitTypes();
testNestedStructures();
testRecursiveUnpack();

print("\n=== Summary ===");
print("With noAdvancedVariants: true:");
print("- deepUnpack() requires explicit type parameters");
print("- No automatic type inference");  
print("- Must use: variant.deepUnpack<ExpectedType>()");
print("- recursiveUnpack() and unpack() work unchanged");
print("\nTest completed successfully!");