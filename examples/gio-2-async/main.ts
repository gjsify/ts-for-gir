import Gio from "gi://Gio";
import GLib from "gi://GLib";

// Example demonstrating promisified async file operations

// Promisify Gio.File operations
Gio._promisify(Gio.File.prototype, "enumerate_children_async", "enumerate_children_finish");
Gio._promisify(Gio.FileEnumerator.prototype, "next_files_async", "next_files_finish");
Gio._promisify(Gio.File.prototype, "load_contents_async", "load_contents_finish");

async function main() {
	try {
		const dir = Gio.File.new_for_path(".");

		// Test load_contents_async behavior
		console.log("\nTesting load_contents_async:");
		const thisFile = Gio.File.new_for_path("main.ts");
		const contents = await thisFile.load_contents_async(null);
		// contents is [Uint8Array, string], not [boolean, Uint8Array, string]
		console.log("Number of returned items:", contents.length);
		console.log(
			"Types of returned items:",
			contents.map((item) => typeof item),
		);
		console.log("Content preview:", new TextDecoder().decode(contents[0]).slice(0, 50));

		// List directory contents asynchronously
		const enumerator = await dir.enumerate_children_async(
			"standard::*",
			Gio.FileQueryInfoFlags.NONE,
			GLib.PRIORITY_DEFAULT,
			null,
		);

		while (true) {
			// Get next files asynchronously
			const files = await enumerator.next_files_async(
				10, // Number of files to fetch
				GLib.PRIORITY_DEFAULT,
				null,
			);

			if (!files.length) {
				break;
			}

			// Process each file info
			for (const info of files) {
				const name = info.get_name();
				const type = info.get_file_type();
				const size = info.get_size();

				console.log(`${name} (${type === Gio.FileType.DIRECTORY ? "Directory" : "File"}, ${size} bytes)`);
			}
		}
	} catch (error) {
		console.error("Error:", error);
	}

	// Required to properly terminate the program
	mainLoop.quit();
}

// Create main loop
const mainLoop = new GLib.MainLoop(null, false);

// Start async operation
main();

// Run main loop
mainLoop.run();
