import GLib from "gi://GLib?version=2.0";

console.log("=== Testing GLib Type Definitions ===\n");

// Testing UCS-4 conversion functions with strings only
console.log("=== Testing UCS-4 conversion functions with strings ===");

const testString = "Hello World 😀";

console.log("Testing ucs4_to_utf8 with string:");
try {
	const [utf8Result, itemsRead, itemsWritten] = GLib.ucs4_to_utf8(testString);
	console.log(`ucs4_to_utf8("${testString}") -> "${utf8Result}"`);
	console.log(`Items read: ${itemsRead}, items written: ${itemsWritten}`);
} catch (error) {
	console.log(`ucs4_to_utf8 failed: ${error}`);
}

console.log("Testing ucs4_to_utf16 with string:");
try {
	const [utf16Result, itemsRead, itemsWritten] = GLib.ucs4_to_utf16(testString);
	console.log(`ucs4_to_utf16("${testString}") -> result: ${utf16Result}`);
	console.log(`Items read: ${itemsRead}, items written: ${itemsWritten}`);
} catch (error) {
	console.log(`ucs4_to_utf16 failed: ${error}`);
}

console.log("=== Testing reverse conversions ===");

console.log("Testing utf8_to_ucs4:");
try {
	const [ucs4Result, itemsRead, itemsWritten] = GLib.utf8_to_ucs4(testString, testString.length);
	console.log(`utf8_to_ucs4("${testString}") -> result type:`, typeof ucs4Result);
	console.log(`Items read: ${itemsRead}, items written: ${itemsWritten}`);

	if (typeof ucs4Result === "string") {
		console.log(`Result string length: ${ucs4Result.length}`);
	} else if (Array.isArray(ucs4Result)) {
		console.log(`Result array length: ${(ucs4Result as Array<number>).length}`);
		console.log(`First few elements:`, (ucs4Result as Array<number>).slice(0, 5));
	}
} catch (error) {
	console.log(`utf8_to_ucs4 failed: ${error}`);
}

console.log("Testing utf16_to_ucs4 with string:");
try {
	// @ts-ignore
	const [ucs4Result, itemsRead, itemsWritten] = GLib.utf16_to_ucs4(testString);
	console.log(`utf16_to_ucs4("${testString}") -> result type:`, typeof ucs4Result);
	console.log(`Items read: ${itemsRead}, items written: ${itemsWritten}`);
} catch (error) {
	console.log(`utf16_to_ucs4 failed: ${error}`);
}

console.log("=== Testing other string-related functions ===");

// Test gunichar functions
console.log("Testing gunichar functions:");
try {
	const unicodeChar = 0x1f600; // 😀 emoji
	// @ts-ignore Should we support this?
	const isAlnum = GLib.unichar_isalnum(unicodeChar);
	// @ts-ignore Should we support this?
	const isDigit = GLib.unichar_isdigit(unicodeChar);
	console.log(`Unicode char 0x${unicodeChar.toString(16)}: isalnum=${isAlnum}, isdigit=${isDigit}`);
} catch (error) {
	console.log(`gunichar functions failed: ${error}`);
}

// Test GVariant string functions
console.log("Testing GVariant with strings:");
try {
	const stringVariant = GLib.Variant.new_string("test string");
	console.log(`String variant: "${stringVariant.get_string()}"`);

	const arrayVariant = GLib.Variant.new_strv(["hello", "world"]);
	console.log(`String array variant:`, arrayVariant.get_strv());
} catch (error) {
	console.log(`GVariant test failed: ${error}`);
}

console.log("=== Tests completed ===");

// Simple loop to exit
const loop = GLib.MainLoop.new(null, false);
GLib.timeout_add(100, 0, () => {
	console.log("Exiting...");
	loop.quit();
	return false;
});
loop.run();
