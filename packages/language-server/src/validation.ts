import * as fs from "node:fs";
import * as path from "node:path";
import * as ts from "typescript";

export interface ValidationResult {
	success: boolean;
	errors: string[];
	warnings: string[];
}

export interface ValidationOptions {
	strict?: boolean;
	/**
	 * Path to the directory containing GIR type definitions (@types folder)
	 */
	typesPath?: string;
}

/**
 * Result of a hover operation
 */
export interface HoverResult {
	success: boolean;
	/** The inferred type at the position */
	type?: string;
	/** Documentation or additional information */
	documentation?: string;
	/** Error message if hover failed */
	error?: string;
}

/**
 * Options for hover operations
 */
export interface HoverOptions {
	strict?: boolean;
	/**
	 * Path to the directory containing GIR type definitions (@types folder)
	 */
	typesPath?: string;
}

/**
 * Result of a type expectation validation
 */
export interface TypeExpectationResult {
	success: boolean;
	/** Whether the actual type matches the expected type */
	matches: boolean;
	/** The actual inferred type */
	actualType?: string;
	/** The expected type */
	expectedType: string;
	/** Documentation or additional information */
	documentation?: string;
	/** Error message if validation failed */
	error?: string;
}

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
	// Common paths where GIR types might be located
	const possibleTypesPaths = [
		path.resolve("./@types"),
		path.resolve("../@types"),
		path.resolve("../../@types"),
		path.resolve("./types"),
		path.resolve("../types"),
		path.resolve("../../types"),
	];

	// Find the first available types directory
	let typesPath: string | undefined;
	for (const possiblePath of possibleTypesPaths) {
		try {
			if (fs.existsSync(possiblePath)) {
				// Check if it contains .d.ts files
				const files = fs.readdirSync(possiblePath);
				if (files.some((file) => file.endsWith(".d.ts"))) {
					typesPath = possiblePath;
					break;
				}
			}
		} catch {
			// Continue to next path
		}
	}

	return validateTypeScript(code, {
		...options,
		typesPath,
	});
}

/**
 * Helper function to create TypeScript program with GIR types
 */
function createTypeScriptProgram(code: string, options: HoverOptions = {}) {
	// Compiler options optimized for GJS/GIR types
	const compilerOptions: ts.CompilerOptions = {
		target: ts.ScriptTarget.ESNext,
		module: ts.ModuleKind.ESNext,
		moduleResolution: ts.ModuleResolutionKind.Bundler,
		skipLibCheck: true,
		strict: options.strict ?? true,
		noImplicitAny: true,
		strictNullChecks: true,
		noImplicitThis: true,
		alwaysStrict: true,
		noEmit: true,
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

	// Create program
	const program = ts.createProgram(filesToInclude, compilerOptions, host);

	return { program, sourceFile };
}

/**
 * Find the position of a variable or identifier in TypeScript code
 */
function findIdentifierPosition(sourceFile: ts.SourceFile, identifier: string): number | undefined {
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
	// Common paths where GIR types might be located
	const possibleTypesPaths = [
		path.resolve("./@types"),
		path.resolve("../@types"),
		path.resolve("../../@types"),
		path.resolve("./types"),
		path.resolve("../types"),
		path.resolve("../../types"),
	];

	// Find the first available types directory
	let typesPath: string | undefined;
	for (const possiblePath of possibleTypesPaths) {
		try {
			if (fs.existsSync(possiblePath)) {
				// Check if it contains .d.ts files
				const files = fs.readdirSync(possiblePath);
				if (files.some((file) => file.endsWith(".d.ts"))) {
					typesPath = possiblePath;
					break;
				}
			}
		} catch {
			// Continue to next path
		}
	}

	return getIdentifierType(code, identifier, {
		...options,
		typesPath,
	});
}

/**
 * Helper function to get the node at a specific position
 */
function getNodeAtPosition(sourceFile: ts.SourceFile, position: number): ts.Node | undefined {
	function find(node: ts.Node): ts.Node | undefined {
		if (position >= node.getStart() && position < node.getEnd()) {
			return ts.forEachChild(node, find) || node;
		}
		return undefined;
	}
	return find(sourceFile);
}

/**
 * Helper function to normalize type strings for comparison
 */
function normalizeTypeString(typeString: string): string {
	// Remove extra whitespace and normalize common type variations
	return (
		typeString
			.trim()
			.replace(/\s+/g, " ")
			// Normalize union types (remove spaces around |)
			.replace(/\s*\|\s*/g, "|")
			// Normalize array types
			.replace(/Array<(.+)>/g, "$1[]")
			// Remove import() type wrappers for comparison
			.replace(/import\(".*?"\)\./g, "")
	);
}

/**
 * Check if two type strings match, considering type aliases and normalization
 */
function typesMatch(actual: string, expected: string): boolean {
	const normalizedActual = normalizeTypeString(actual);
	const normalizedExpected = normalizeTypeString(expected);

	// Direct match
	if (normalizedActual === normalizedExpected) {
		return true;
	}

	// Extract type name without namespace for comparison
	// e.g., "Gtk.Button" -> "Button", "import().Button" -> "Button"
	const getTypeName = (typeStr: string): string => {
		// Remove namespace prefixes (e.g., "Gtk.Button" -> "Button")
		const withoutNamespace = typeStr.replace(/^[A-Z][a-zA-Z0-9]*\./, "");
		// Remove any remaining import wrappers
		return withoutNamespace.replace(/^[^.]*\./, "");
	};

	const actualTypeName = getTypeName(normalizedActual);
	const expectedTypeName = getTypeName(normalizedExpected);

	// Match without namespace (Button === Gtk.Button)
	if (actualTypeName === expectedTypeName) {
		return true;
	}

	// Match in reverse (Gtk.Button === Button)
	if (normalizedActual === expectedTypeName || actualTypeName === normalizedExpected) {
		return true;
	}

	// Check for common type aliases
	const typeAliases = new Map([
		["number", "Number"],
		["string", "String"],
		["boolean", "Boolean"],
		["object", "Object"],
	]);

	// Check both directions of type aliases
	if (
		typeAliases.get(normalizedActual) === normalizedExpected ||
		typeAliases.get(normalizedExpected) === normalizedActual
	) {
		return true;
	}

	// Check type aliases with namespace-stripped names
	if (typeAliases.get(actualTypeName) === expectedTypeName || typeAliases.get(expectedTypeName) === actualTypeName) {
		return true;
	}

	return false;
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
	// Common paths where GIR types might be located
	const possibleTypesPaths = [
		path.resolve("./@types"),
		path.resolve("../@types"),
		path.resolve("../../@types"),
		path.resolve("./types"),
		path.resolve("../types"),
		path.resolve("../../types"),
	];

	// Find the first available types directory
	let typesPath: string | undefined;
	for (const possiblePath of possibleTypesPaths) {
		try {
			if (fs.existsSync(possiblePath)) {
				// Check if it contains .d.ts files
				const files = fs.readdirSync(possiblePath);
				if (files.some((file) => file.endsWith(".d.ts"))) {
					typesPath = possiblePath;
					break;
				}
			}
		} catch {
			// Continue to next path
		}
	}

	return expectIdentifierType(code, identifier, expectedType, {
		...options,
		typesPath,
	});
}
