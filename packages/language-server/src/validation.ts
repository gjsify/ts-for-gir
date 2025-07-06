import * as fs from "node:fs";
import * as path from "node:path";
import * as ts from "typescript";
import type {
	HoverOptions,
	HoverResult,
	TypeExpectationResult,
	ValidationOptions,
	ValidationResult,
} from "./types/index.ts";
import { findTypesPath } from "./utils/path.ts";
import { typesMatch } from "./utils/string.ts";
import { createTypeScriptProgram, findIdentifierPosition, getNodeAtPosition } from "./utils/typescript.ts";

/**
 * TypeScript validation for generated GIR types
 */
export function validateTypeScript(code: string, options: ValidationOptions = {}): ValidationResult {
	try {
		// Compiler options optimized for GJS/GIR types
		const compilerOptions: ts.CompilerOptions = {
			target: ts.ScriptTarget.ESNext,
			module: ts.ModuleKind.ESNext,
			// Don't specify lib to let TypeScript use defaults for target
			moduleResolution: ts.ModuleResolutionKind.Bundler,
			skipLibCheck: true, // Skip lib checking to avoid path resolution issues
			strict: options.strict ?? true,
			noImplicitAny: true,
			strictNullChecks: true,
			noImplicitThis: true,
			alwaysStrict: true,
			noEmit: true,
			// Allow module resolution for GIR modules
			allowSyntheticDefaultImports: true,
			esModuleInterop: true,
		};

		// Create source file
		const fileName = "test.ts";
		const sourceFile = ts.createSourceFile(fileName, code, ts.ScriptTarget.ESNext, true);

		// Files to include in the program
		const filesToInclude = [fileName];

		// Create virtual file system for type definitions
		const virtualFileSystem = new Map<string, string>();

		// Load all type definition files if types path is provided
		if (options.typesPath) {
			try {
				const files = fs.readdirSync(options.typesPath);
				for (const file of files) {
					if (file.endsWith(".d.ts")) {
						const filePath = path.resolve(options.typesPath, file);
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
		}

		// Include index.d.ts if available
		if (options.typesPath) {
			const indexPath = path.resolve(options.typesPath, "index.d.ts");
			if (virtualFileSystem.has(indexPath)) {
				filesToInclude.push(indexPath);
			}
		}

		// Create compiler host
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

		// Create program and get diagnostics
		const program = ts.createProgram(filesToInclude, compilerOptions, host);
		const diagnostics = ts.getPreEmitDiagnostics(program, sourceFile);

		const errors: string[] = [];
		const warnings: string[] = [];

		for (const diagnostic of diagnostics) {
			const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");

			if (diagnostic.category === ts.DiagnosticCategory.Error) {
				errors.push(message);
			} else if (diagnostic.category === ts.DiagnosticCategory.Warning) {
				warnings.push(message);
			}
		}

		return {
			success: errors.length === 0,
			errors,
			warnings,
		};
	} catch (error) {
		return {
			success: false,
			errors: [`Validation failed: ${error}`],
			warnings: [],
		};
	}
}

/**
 * Validate GIR TypeScript code with type definitions
 */
export function validateGIRTypeScript(
	code: string,
	typesPath: string,
	options: Omit<ValidationOptions, "typesPath"> = {},
): ValidationResult {
	return validateTypeScript(code, {
		...options,
		typesPath,
	});
}

/**
 * Validate GIR TypeScript code with automatic type discovery
 * Automatically finds and includes GIR type definitions from common locations
 */
export function validateGIRTypeScriptAuto(
	code: string,
	options: Omit<ValidationOptions, "typesPath"> = {},
): ValidationResult {
	const typesPath = findTypesPath();
	return validateTypeScript(code, {
		...options,
		typesPath,
	});
}

/**
 * Get type information for a specific identifier in TypeScript code
 */
export function getIdentifierType(code: string, identifier: string, options: HoverOptions = {}): HoverResult {
	try {
		const { program, sourceFile } = createTypeScriptProgram(code, options);

		// Find the position of the identifier
		const position = findIdentifierPosition(sourceFile, identifier);
		if (position === undefined) {
			return {
				success: false,
				error: `Identifier '${identifier}' not found in code`,
			};
		}

		// Get type checker
		const typeChecker = program.getTypeChecker();

		// Find the node at the position
		const node = getNodeAtPosition(sourceFile, position);
		if (!node) {
			return {
				success: false,
				error: `No node found at position ${position}`,
			};
		}

		// Get the type of the node
		const type = typeChecker.getTypeAtLocation(node);
		const typeString = typeChecker.typeToString(type);

		// Get symbol information for documentation
		const symbol = typeChecker.getSymbolAtLocation(node);
		const documentation = symbol
			?.getDocumentationComment(typeChecker)
			?.map((part) => part.text)
			?.join("\n");

		return {
			success: true,
			type: typeString,
			documentation: documentation || undefined,
		};
	} catch (error) {
		return {
			success: false,
			error: `Type checking failed: ${error}`,
		};
	}
}

/**
 * Get type information for a specific identifier in TypeScript code with automatic type discovery
 */
export function getIdentifierTypeAuto(
	code: string,
	identifier: string,
	options: Omit<HoverOptions, "typesPath"> = {},
): HoverResult {
	const typesPath = findTypesPath();
	return getIdentifierType(code, identifier, {
		...options,
		typesPath,
	});
}

/**
 * Validate that a specific identifier has the expected type
 */
export function expectIdentifierType(
	code: string,
	identifier: string,
	expectedType: string,
	options: HoverOptions = {},
): TypeExpectationResult {
	try {
		// First get the actual type
		const hoverResult = getIdentifierType(code, identifier, options);

		if (!hoverResult.success) {
			return {
				success: false,
				matches: false,
				expectedType,
				error: hoverResult.error,
			};
		}

		const actualType = hoverResult.type;
		if (!actualType) {
			return {
				success: false,
				matches: false,
				expectedType,
				error: "No type information available",
			};
		}

		// Check if types match
		const matches = typesMatch(actualType, expectedType);

		return {
			success: true,
			matches,
			actualType,
			expectedType,
			documentation: hoverResult.documentation,
			error: matches ? undefined : `Expected type '${expectedType}' but got '${actualType}'`,
		};
	} catch (error) {
		return {
			success: false,
			matches: false,
			expectedType,
			error: `Type expectation validation failed: ${error}`,
		};
	}
}

/**
 * Validate that a specific identifier has the expected type with automatic type discovery
 */
export function expectIdentifierTypeAuto(
	code: string,
	identifier: string,
	expectedType: string,
	options: Omit<HoverOptions, "typesPath"> = {},
): TypeExpectationResult {
	const typesPath = findTypesPath();
	return expectIdentifierType(code, identifier, expectedType, {
		...options,
		typesPath,
	});
}
