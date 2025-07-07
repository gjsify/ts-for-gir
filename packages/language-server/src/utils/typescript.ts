import * as fs from "node:fs";
import * as path from "node:path";
import * as ts from "typescript";
import type { HoverOptions } from "../types/index.ts";

/**
 * Create TypeScript compiler options optimized for GJS/GIR types
 */
export function createCompilerOptions(strict?: boolean): ts.CompilerOptions {
	return {
		target: ts.ScriptTarget.ESNext,
		module: ts.ModuleKind.ESNext,
		moduleResolution: ts.ModuleResolutionKind.Bundler,
		skipLibCheck: true,
		strict: strict ?? true,
		noImplicitAny: true,
		strictNullChecks: true,
		noImplicitThis: true,
		alwaysStrict: true,
		noEmit: true,
		allowSyntheticDefaultImports: true,
		esModuleInterop: true,
	};
}

/**
 * Create a virtual file system for type definitions
 */
export function createVirtualFileSystem(typesPath?: string): Map<string, string> {
	const virtualFileSystem = new Map<string, string>();

	if (!typesPath) {
		return virtualFileSystem;
	}

	try {
		const files = fs.readdirSync(typesPath);
		for (const file of files) {
			if (file.endsWith(".d.ts")) {
				const filePath = path.resolve(typesPath, file);
				const content = fs.readFileSync(filePath, "utf-8");
				// Store with full path for primary access
				virtualFileSystem.set(filePath, content);
				// Also store with relative path for triple-slash references
				virtualFileSystem.set(`./${file}`, content);
				virtualFileSystem.set(`./types/${file}`, content);
				virtualFileSystem.set(`@types/${file}`, content);
			}
		}
	} catch {
		// Types path not accessible, continue without types
	}

	return virtualFileSystem;
}

/**
 * Create a TypeScript compiler host with virtual file system support
 */
export function createCompilerHost(
	compilerOptions: ts.CompilerOptions,
	sourceFile: ts.SourceFile,
	virtualFileSystem: Map<string, string>,
	fileName: string,
): ts.CompilerHost {
	const host = ts.createCompilerHost(compilerOptions);

	// Override file resolution to use virtual file system
	const originalGetSourceFile = host.getSourceFile;
	host.getSourceFile = (name, languageVersion) => {
		if (name === fileName) {
			return sourceFile;
		}

		// Check virtual file system first
		if (virtualFileSystem.has(name)) {
			const content = virtualFileSystem.get(name);
			if (content !== undefined) {
				return ts.createSourceFile(name, content, languageVersion, true);
			}
		}

		// Check for relative path references
		const baseName = path.basename(name);
		if (virtualFileSystem.has(baseName)) {
			const content = virtualFileSystem.get(baseName);
			if (content !== undefined) {
				return ts.createSourceFile(name, content, languageVersion, true);
			}
		}

		return originalGetSourceFile.call(host, name, languageVersion);
	};

	return host;
}

/**
 * Create a TypeScript program with virtual file system support
 */
export function createTypeScriptProgram(code: string, options: HoverOptions = {}) {
	const fileName = "test.ts";
	const sourceFile = ts.createSourceFile(fileName, code, ts.ScriptTarget.ESNext, true);

	const compilerOptions = createCompilerOptions(options.strict);
	const virtualFileSystem = createVirtualFileSystem(options.typesPath);
	const host = createCompilerHost(compilerOptions, sourceFile, virtualFileSystem, fileName);

	// Files to include in the program
	const filesToInclude = [fileName];

	// Include index.d.ts if available
	if (options.typesPath) {
		const indexPath = path.resolve(options.typesPath, "index.d.ts");
		if (virtualFileSystem.has(indexPath)) {
			filesToInclude.push(indexPath);
		}
	}

	const program = ts.createProgram(filesToInclude, compilerOptions, host);

	return { program, sourceFile };
}

/**
 * Find the position of a variable or identifier in TypeScript code
 */
export function findIdentifierPosition(sourceFile: ts.SourceFile, identifier: string): number | undefined {
	let position: number | undefined;

	function visit(node: ts.Node): void {
		if (ts.isIdentifier(node) && node.text === identifier) {
			// Prefer variable declarations over references
			if (ts.isVariableDeclaration(node.parent) && node.parent.name === node) {
				position = node.getStart();
				return;
			}
			// Fall back to any identifier if no declaration found
			if (position === undefined) {
				position = node.getStart();
			}
		}
		ts.forEachChild(node, visit);
	}

	visit(sourceFile);
	return position;
}

/**
 * Get the node at a specific position in the source file
 */
export function getNodeAtPosition(sourceFile: ts.SourceFile, position: number): ts.Node | undefined {
	function find(node: ts.Node): ts.Node | undefined {
		if (position >= node.getStart() && position < node.getEnd()) {
			return ts.forEachChild(node, find) || node;
		}
		return undefined;
	}
	return find(sourceFile);
}
