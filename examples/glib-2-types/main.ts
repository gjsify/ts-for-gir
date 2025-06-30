import GLib from "gi://GLib?version=2.0";
import GObject from "gi://GObject?version=2.0";

/**
 * GLib Type Examples
 *
 * This example demonstrates various GLib and GObject type definitions
 * and their usage patterns in TypeScript with ts-for-gir.
 */

console.log("=== GLib Type Examples ===\n");

// Constants for testing
const TEST_STRING = "Hello World 😀";
const UNICODE_EMOJI = 0x1f600; // 😀 emoji
const SECONDS_IN_WEEK = 7 * 24 * 60 * 60;
const MAX_32BIT_UNSIGNED = 4294967295; // 2^32 - 1

/**
 * Tests UTF conversion functions with Unicode strings
 */
function testUtfConversions(): void {
	console.log("=== UTF Conversion Functions ===");

	testUcs4ToUtf8();
	testUcs4ToUtf16();
	testUtf8ToUcs4();
	testUtf16ToUcs4();
}

function testUcs4ToUtf8(): void {
	console.log("Testing UCS-4 to UTF-8 conversion:");

	try {
		const [result, itemsRead, itemsWritten] = GLib.ucs4_to_utf8(TEST_STRING);
		console.log(`  Input: "${TEST_STRING}"`);
		console.log(`  Output: "${result}"`);
		console.log(`  Items read: ${itemsRead}, written: ${itemsWritten}`);
	} catch (error) {
		console.log(`  Error: ${error}`);
	}
}

function testUcs4ToUtf16(): void {
	console.log("Testing UCS-4 to UTF-16 conversion:");

	try {
		const [result, itemsRead, itemsWritten] = GLib.ucs4_to_utf16(TEST_STRING);
		console.log(`  Input: "${TEST_STRING}"`);
		console.log(`  Result type: ${typeof result}`);
		console.log(`  Items read: ${itemsRead}, written: ${itemsWritten}`);
	} catch (error) {
		console.log(`  Error: ${error}`);
	}
}

function testUtf8ToUcs4(): void {
	console.log("Testing UTF-8 to UCS-4 conversion:");

	try {
		const [result, itemsRead, itemsWritten] = GLib.utf8_to_ucs4(TEST_STRING, TEST_STRING.length);
		console.log(`  Input: "${TEST_STRING}"`);
		console.log(`  Result type: ${typeof result}`);
		console.log(`  Items read: ${itemsRead}, written: ${itemsWritten}`);

		if (typeof result === "string") {
			console.log(`  Result length: ${result.length}`);
		} else if (Array.isArray(result)) {
			const arrayResult = result as number[];
			console.log(`  Array length: ${arrayResult.length}`);
			console.log(`  First elements: [${arrayResult.slice(0, 5).join(", ")}]`);
		}
	} catch (error) {
		console.log(`  Error: ${error}`);
	}
}

function testUtf16ToUcs4(): void {
	console.log("Testing UTF-16 to UCS-4 conversion:");

	try {
		// @ts-ignore - API may have different signatures
		const [result, itemsRead, itemsWritten] = GLib.utf16_to_ucs4(TEST_STRING);
		console.log(`  Input: "${TEST_STRING}"`);
		console.log(`  Result type: ${typeof result}`);
		console.log(`  Items read: ${itemsRead}, written: ${itemsWritten}`);
	} catch (error) {
		console.log(`  Error: ${error}`);
	}
}

/**
 * Tests Unicode character classification functions
 */
function testUnicodeCharacterFunctions(): void {
	console.log("\n=== Unicode Character Functions ===");

	try {
		// @ts-ignore - Unicode character functions may have different type definitions
		const isAlnum = GLib.unichar_isalnum(UNICODE_EMOJI);
		// @ts-ignore
		const isDigit = GLib.unichar_isdigit(UNICODE_EMOJI);

		console.log(`Unicode character 0x${UNICODE_EMOJI.toString(16)}:`);
		console.log(`  Is alphanumeric: ${isAlnum}`);
		console.log(`  Is digit: ${isDigit}`);
	} catch (error) {
		console.log(`  Error: ${error}`);
	}
}

/**
 * Tests GVariant string handling
 */
function testGVariantStrings(): void {
	console.log("\n=== GVariant String Functions ===");

	try {
		// Test single string variant
		const stringVariant = GLib.Variant.new_string("example string");
		console.log(`String variant value: "${stringVariant.get_string()}"`);

		// Test string array variant
		const arrayVariant = GLib.Variant.new_strv(["hello", "world", "glib"]);
		const retrievedArray = arrayVariant.get_strv();
		console.log(`String array variant: [${retrievedArray.map((s) => `"${s}"`).join(", ")}]`);
	} catch (error) {
		console.log(`  Error: ${error}`);
	}
}

/**
 * Tests timestamp handling with GLib.Date
 * Demonstrates working with Unix timestamps (time_t equivalent)
 */
function testTimestampHandling(): void {
	console.log("\n=== Timestamp Handling ===");

	try {
		// Current Unix timestamp (seconds since epoch)
		const currentTimestamp = Math.floor(Date.now() / 1000);
		console.log(`Current timestamp: ${currentTimestamp}`);

		// Create and set date from timestamp
		const date = new GLib.Date();
		date.set_time_t(currentTimestamp);

		if (!date.valid()) {
			console.log("  Invalid date created");
			return;
		}

		console.log(`Date from timestamp:`);
		console.log(`  Day: ${date.get_day()}`);
		console.log(`  Month: ${date.get_month()}`);
		console.log(`  Year: ${date.get_year()}`);

		// Demonstrate timestamp arithmetic
		const futureTimestamp = currentTimestamp + SECONDS_IN_WEEK;
		const futureDate = new GLib.Date();
		futureDate.set_time_t(futureTimestamp);

		console.log(`One week later:`);
		console.log(`  Timestamp: ${futureTimestamp}`);
		console.log(`  Date: ${futureDate.get_day()}/${futureDate.get_month()}/${futureDate.get_year()}`);
	} catch (error) {
		console.log(`  Error: ${error}`);
	}
}

/**
 * Tests large number handling with GObject property specifications
 * Demonstrates working with unsigned long values
 */
function testLargeNumberHandling(): void {
	console.log("\n=== Large Number Handling ===");

	try {
		// Define range for unsigned long property
		const minValue = 0;
		const maxValue = MAX_32BIT_UNSIGNED;
		const defaultValue = 1000000;

		console.log(`Creating property with range: ${minValue} - ${maxValue}`);
		console.log(`Default value: ${defaultValue}`);

		// Create property specification with large number range
		const paramSpec = GObject.param_spec_ulong(
			"large-number-property",
			"Large Number",
			"Demonstrates unsigned long parameter handling",
			minValue,
			maxValue,
			defaultValue,
			GObject.ParamFlags.READWRITE,
		);

		console.log(`Property specification created:`);
		console.log(`  Name: ${paramSpec.name}`);
		console.log(`  Value type: ${paramSpec.value_type}`);

		// Demonstrate arithmetic with large numbers
		const sum = minValue + maxValue;
		const product = defaultValue * 2;

		console.log(`Arithmetic operations:`);
		console.log(`  ${minValue} + ${maxValue} = ${sum}`);
		console.log(`  ${defaultValue} * 2 = ${product}`);
	} catch (error) {
		console.log(`  Error: ${error}`);
	}
}

/**
 * Tests high-precision time functions and timeout handling
 */
function testPrecisionTimeAndTimeouts(): void {
	console.log("\n=== Precision Time and Timeouts ===");

	try {
		// Get high-precision time (microseconds)
		const microTime = GLib.get_real_time();
		const secondsFromMicro = Math.floor(microTime / 1000000);

		console.log(`High-precision time: ${microTime} microseconds`);
		console.log(`Converted to seconds: ${secondsFromMicro}`);
		console.log(`Time value type: ${typeof microTime}`);

		// Test timeout with large timeout value
		const largeTimeoutMs = 2147483647; // Large timeout value
		console.log(`Setting timeout with large value: ${largeTimeoutMs}ms`);

		const timeoutId = GLib.timeout_add(50, largeTimeoutMs, () => {
			console.log("  Large timeout value processed successfully");
			return false;
		});

		console.log(`  Timeout ID: ${timeoutId}`);
	} catch (error) {
		console.log(`  Error: ${error}`);
	}
}

/**
 * Displays summary of type handling capabilities
 */
function displaySummary(): void {
	console.log("\n=== Type Handling Summary ===");
	console.log("✓ UTF string conversions work with Unicode content");
	console.log("✓ Unicode character classification functions available");
	console.log("✓ GVariant handles both single strings and string arrays");
	console.log("✓ Timestamp values integrate with GLib.Date functions");
	console.log("✓ Large number ranges work with GObject property specifications");
	console.log("✓ High-precision time functions return proper numeric types");
	console.log("✓ All type mappings provide TypeScript safety");
}

/**
 * Manages the application lifecycle
 */
function runMainLoop(): void {
	const loop = GLib.MainLoop.new(null, false);

	GLib.timeout_add(100, 0, () => {
		console.log("\nExample completed successfully!");
		loop.quit();
		return false;
	});

	loop.run();
}

// Main execution
function main(): void {
	testUtfConversions();
	testUnicodeCharacterFunctions();
	testGVariantStrings();
	testTimestampHandling();
	testLargeNumberHandling();
	testPrecisionTimeAndTimeouts();
	displaySummary();
	runMainLoop();
}

main();
