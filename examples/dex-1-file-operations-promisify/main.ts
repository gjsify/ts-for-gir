#!/usr/bin/env -S gjs -m

import Dex from "gi://Dex";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import { promisify } from "./promisify.js";
import { replaceFileContents } from "./utils.js";

// Promisify the GIO methods we need for file operations
Gio._promisify(Gio.File.prototype, "make_directory_async", "make_directory_finish");
Gio._promisify(Gio.File.prototype, "copy_async", "copy_finish");
Gio._promisify(Gio.File.prototype, "enumerate_children_async", "enumerate_children_finish");
Gio._promisify(Gio.FileEnumerator.prototype, "next_files_async", "next_files_finish");
Gio._promisify(Gio.File.prototype, "load_contents_async", "load_contents_finish");
Gio._promisify(Gio.File.prototype, "delete_async", "delete_finish");

/**
 * DexFileManager - A file management utility using a hybrid Dex/GIO approach
 *
 * This application demonstrates practical file operations using a pragmatic approach:
 * - Dex for operations that work reliably (directory creation, file copying)
 * - GIO for operations where Dex has limitations (enumeration, content loading)
 * It provides a simple command-line interface for common file management tasks.
 */

class DexFileManager {
	private tempDir: Gio.File;
	private operations: string[] = [];

	constructor() {
		this.tempDir = Gio.File.new_for_path("/tmp/dex-file-manager");
	}

	/**
	 * Initialize the file manager and create working directory
	 * Uses Dex for directory creation
	 */
	async initialize(): Promise<void> {
		console.log("🚀 Initializing DexFileManager...");

		if (!this.tempDir.query_exists(null)) {
			// Create working directory using Dex
			await promisify(Dex.file_make_directory(this.tempDir, GLib.PRIORITY_DEFAULT), "boolean");
			console.log("✓ Working directory created");
		}

		console.log("✓ DexFileManager ready");
	}

	/**
	 * Create a new file with specified content
	 * Uses GIO for file content writing
	 */
	async createFile(filename: string, content: string): Promise<void> {
		const file = this.tempDir.get_child(filename);
		await replaceFileContents(file, content);
		this.operations.push(`Created file: ${filename}`);
		console.log(`✓ File '${filename}' created`);
	}

	/**
	 * Copy a file to a new location
	 * Uses Dex for file copying
	 */
	async copyFile(sourceName: string, destName: string): Promise<void> {
		const source = this.tempDir.get_child(sourceName);
		const dest = this.tempDir.get_child(destName);

		if (!source.query_exists(null)) {
			throw new Error(`Source file '${sourceName}' does not exist`);
		}

		// Check if destination already exists and remove it
		if (dest.query_exists(null)) {
			await dest.delete_async(GLib.PRIORITY_DEFAULT, null);
			console.log("⚠️ Destination file already existed, removed it");
		}

		// Copy file using Dex
		await promisify(Dex.file_copy(source, dest, Gio.FileCopyFlags.NONE, GLib.PRIORITY_DEFAULT), "boolean");

		this.operations.push(`Copied: ${sourceName} → ${destName}`);
		console.log(`✓ File copied: ${sourceName} → ${destName}`);
	}

	/**
	 * List all files in the working directory
	 * Uses GIO for directory enumeration
	 */
	async listFiles(): Promise<void> {
		console.log("\n📁 Files in working directory:");

		// Use GIO for directory enumeration since Dex functions have type issues
		const enumerator = await this.tempDir.enumerate_children_async(
			"standard::*",
			Gio.FileQueryInfoFlags.NONE,
			GLib.PRIORITY_DEFAULT,
			null,
		);

		if (!enumerator) {
			console.log("  (enumerator creation failed)");
			return;
		}

		const files = await enumerator.next_files_async(50, GLib.PRIORITY_DEFAULT, null);

		if (!files || files.length === 0) {
			console.log("  (no files found)");
			return;
		}

		for (const fileInfo of files) {
			const name = fileInfo.get_name();
			const type = fileInfo.get_file_type();
			const size = fileInfo.get_size();
			const icon = type === Gio.FileType.DIRECTORY ? "📁" : "📄";
			console.log(`  ${icon} ${name} (${size} bytes)`);
		}
	}

	/**
	 * Display file contents
	 * Uses GIO for file content loading
	 */
	async showFileContents(filename: string): Promise<void> {
		const file = this.tempDir.get_child(filename);

		if (!file.query_exists(null)) {
			throw new Error(`File '${filename}' does not exist`);
		}

		const [contents] = await file.load_contents_async(null);

		if (contents) {
			const text = new TextDecoder().decode(contents);
			console.log(`\n📖 Contents of '${filename}':`);
			console.log("─".repeat(40));
			console.log(text);
			console.log("─".repeat(40));
		} else {
			console.log(`⚠️ No contents found for file '${filename}'`);
		}
	}

	/**
	 * Clean up all created files
	 * Uses GIO for file operations
	 */
	async cleanup(): Promise<void> {
		console.log("\n🧹 Cleaning up...");

		const enumerator = await this.tempDir.enumerate_children_async(
			"standard::*",
			Gio.FileQueryInfoFlags.NONE,
			GLib.PRIORITY_DEFAULT,
			null,
		);

		if (!enumerator) {
			await this.tempDir.delete_async(GLib.PRIORITY_DEFAULT, null);
			console.log("✓ Cleanup completed");
			return;
		}

		const files = await enumerator.next_files_async(50, GLib.PRIORITY_DEFAULT, null);

		if (files && files.length > 0) {
			for (const fileInfo of files) {
				const file = this.tempDir.get_child(fileInfo.get_name());
				await file.delete_async(GLib.PRIORITY_DEFAULT, null);
			}
		}

		await this.tempDir.delete_async(GLib.PRIORITY_DEFAULT, null);
		console.log("✓ Cleanup completed");
	}

	/**
	 * Show operation history
	 */
	showHistory(): void {
		console.log("\n📋 Operation History:");

		if (this.operations.length === 0) {
			console.log("  No operations performed yet");
			return;
		}

		this.operations.forEach((op, index) => {
			console.log(`  ${index + 1}. ${op}`);
		});
	}
}

/**
 * Main application entry point
 * Demonstrates a hybrid approach to file operations using both Dex and GIO
 * based on what works reliably for each operation type.
 */
async function main(): Promise<void> {
	let fileManager: DexFileManager | undefined;

	try {
		console.log("DexFileManager - File Management Utility");
		console.log("=======================================");

		fileManager = new DexFileManager();

		// Initialize Dex
		Dex.init();
		console.log("✓ Dex library initialized");

		// Initialize file manager
		await fileManager.initialize();

		// Demonstrate file operations
		console.log("\n📝 Creating sample files...");
		await fileManager.createFile("welcome.txt", "Welcome to DexFileManager!\nThis file was created using Dex.");
		await fileManager.createFile("config.json", '{"app": "DexFileManager", "version": "1.0.0"}');

		// Copy a file
		console.log("\n📋 Copying files...");
		await fileManager.copyFile("welcome.txt", "welcome-backup.txt");

		// List all files
		console.log("\n📁 Listing files...");
		await fileManager.listFiles();

		// Show file contents
		console.log("\n📖 Showing file contents...");
		await fileManager.showFileContents("welcome.txt");

		// Show operation history
		fileManager.showHistory();

		console.log("\n✅ File management operations completed successfully!");
		console.log("\nKey features demonstrated:");
		console.log("  • File creation with GIO");
		console.log("  • File copying with Dex");
		console.log("  • Directory enumeration with GIO");
		console.log("  • File content loading with GIO");
		console.log("  • Hybrid approach: using the best tool for each operation");
		console.log("  • Cleanup and resource management");

		// Cleanup with proper error handling
		console.log("\n🧹 Starting cleanup...");
		await fileManager.cleanup();

		console.log("\n👋 DexFileManager finished");
	} catch (error) {
		console.error("❌ Error in main:", error);
		console.log("\n🧹 Starting emergency cleanup...");
		try {
			await fileManager?.cleanup();
		} catch (cleanupError) {
			console.error("❌ Emergency cleanup failed:", cleanupError);
		}
	} finally {
		// Always quit the main loop, even if errors occur
		mainLoop.quit();
	}
}

// Create main loop
const mainLoop = new GLib.MainLoop(null, false);

// Start application
main();

// Run main loop
mainLoop.run();
