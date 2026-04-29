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
		// @ts-expect-error - API may have different signatures
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
		// @ts-expect-error - Unicode character functions may have different type definitions
		const isAlnum = GLib.unichar_isalnum(UNICODE_EMOJI);
		// @ts-expect-error
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

function testUnderscoreInit() {
	const errorEnum = new GLib.BookmarkFileError({ message: "foo", code: GLib.BookmarkFileError.WRITE });
	try {
		// @ts-expect-error
		errorEnum._init();
	} catch {}

	const boxedStruct = new GLib.BookmarkFile();
	try {
		// @ts-expect-error
		boxedStruct._init();
	} catch {}

	const gobject = new GObject.Object();
	gobject._init();
}

function testGErrorGType() {
	if (GLib.BookmarkFileError.$gtype !== GLib.Error.$gtype) throw new Error("GError GTypes should be equal");
	// @ts-expect-error
	if (GLib.BookmarkFileError.$gtype === GObject.Object.$gtype)
		throw new Error("GError GType should not be equal to GObject GType");
}

function testEnumGType() {
	// @ts-expect-error - ChecksumType has $gtype but it returns the void GType (unregistered)
	const checksumGtype = GLib.ChecksumType.$gtype;
	if (checksumGtype?.name !== undefined && checksumGtype.name !== "void")
		throw new Error("Unregistered enum should have void $gtype");
	if (GLib.NormalizeMode.$gtype === undefined) throw new Error("Registered enum should have a $gtype property");
}

function testEnumNotIntrospectable() {
	// @ts-expect-error
	if (GLib.ThreadPriority) throw new Error("Non-introspectable enum shouldn't be in type definitions");
}

function testBigintOrNumber() {
	const result = GLib.ascii_string_to_unsigned("1000", 10, 0n, 4500n);
	if (!result[0] || result[1] !== 1000) throw new Error("Failure");
	const bmf = new GLib.BookmarkFile();
	bmf.set_added("about:blank", 1_000_000_000n);
	// the `* 1` will fail in tsc if the return type is bigint | number
	if (bmf.get_added("about:blank") * 1 !== 1_000_000_000) throw new Error("Failure");
}

/**
 * Tests that trailing nullable parameters are required, not optional.
 * GJS does not support omitting nullable C parameters — they must be passed as null.
 * Relates to: https://github.com/gjsify/ts-for-gir/issues/369
 */
function testNullableParamsRequired(): void {
	// Nullable parameters must be passed explicitly as null
	const encoded = GLib.base64_encode(null);
	const canonical = GLib.canonicalize_filename("foo.txt", null);
	const cmp = GLib.strcmp0(null, null);
	console.log(`  base64_encode(null): "${encoded}"`);
	console.log(`  canonicalize_filename("foo.txt", null): "${canonical}"`);
	console.log(`  strcmp0(null, null): ${cmp}`);

	// Omitting nullable params is a compile-time type error.
	// Wrapped in `if (false)` so TypeScript still checks the types but the code never runs.
	if (false as boolean) {
		// @ts-expect-error
		GLib.base64_encode();
		// @ts-expect-error
		GLib.canonicalize_filename("foo.txt");
		// @ts-expect-error
		GLib.strcmp0();
	}
}

function testRawPointers(): void {
	// Non-nullable raw pointers cannot be passed to functions, either according
	// to TypeScript or at runtime
	let failed = false;
	try {
		// @ts-expect-error
		GLib.str_hash("foobar");
	} catch (_) {
		failed = true;
	}
	if (!failed) throw new Error("Passing value to non-nullable raw pointer failed");

	// Nullable raw pointers are always marshalled as C null, even if you pass
	// something else
	// @ts-expect-error
	const nonnullHash = GLib.direct_hash("foobar");
	const nullHash = GLib.direct_hash(null);
	if (nonnullHash !== nullHash) throw new Error("Passing value to nullable raw pointer failed");

	// Raw pointers are always marshalled as JS null, even if the function
	// returns something else
	const pointer: null = GLib.aligned_alloc0(1, 64, 8);
	if (pointer !== null) throw new Error("Returning raw pointer from function failed");
}

/**
 * Tests that GLib.DestroyNotify params are stripped from _full-shadowed functions.
 * GJS handles destroy-notify internally for scope="notified" callbacks and does not
 * expose that parameter — idle_add and timeout_add only accept (priority, fn).
 * Relates to: https://github.com/gjsify/ts-for-gir/issues/369
 */
function testDestroyNotifyParamsFiltered(): void {
	// idle_add takes only (priority, callback) — no notify argument
	const id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
		GLib.Source.remove(id);
		return GLib.SOURCE_REMOVE;
	});
	console.log(`  idle_add id: ${id}`);

	// timeout_add takes (priority, interval, callback) — no notify argument
	const tid = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1, () => {
		GLib.Source.remove(tid);
		return GLib.SOURCE_REMOVE;
	});
	console.log(`  timeout_add id: ${tid}`);

	// Passing a spurious null as notify is a compile-time type error.
	// Wrapped in `if (false)` so TypeScript still checks the types but the code never runs.
	if (false as boolean) {
		// @ts-expect-error
		GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => false, null);
		// @ts-expect-error
		GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1, () => false, null);
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
	console.log("✓ Trailing nullable params are required (not optional) — GJS throws if omitted");
	console.log("✓ DestroyNotify params stripped from idle_add/timeout_add — GJS handles destroy internally");
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
	testUnderscoreInit();
	testGErrorGType();
	testEnumGType();
	testEnumNotIntrospectable();
	testBigintOrNumber();
	testDestroyNotifyParamsFiltered();
	testNullableParamsRequired();
	testRawPointers();
	displaySummary();
	runMainLoop();
}

main();
