import * as ts from "typescript";

export interface ValidationResult {
	success: boolean;
	errors: string[];
	warnings: string[];
}

export interface ValidationOptions {
	strict?: boolean;
}

/**
 * Simple TypeScript validation for generated GIR types
 */
export function validateTypeScript(code: string, options: ValidationOptions = {}): ValidationResult {
	try {
		// Simple, essential compiler options
		const compilerOptions: ts.CompilerOptions = {
			target: ts.ScriptTarget.ES2020,
			module: ts.ModuleKind.ES2020,
			moduleResolution: ts.ModuleResolutionKind.Node10,
			strict: options.strict ?? true,
			skipLibCheck: true,
			noEmit: true,
			// Don't specify lib - let TypeScript use defaults for target
		};

		// Create source file
		const fileName = "test.ts";
		const sourceFile = ts.createSourceFile(fileName, code, ts.ScriptTarget.ES2020, true);

		// Create simple compiler host
		const host = ts.createCompilerHost(compilerOptions);

		// Override only the test file
		const originalGetSourceFile = host.getSourceFile;
		host.getSourceFile = (name, languageVersion) => {
			if (name === fileName) {
				return sourceFile;
			}
			return originalGetSourceFile.call(host, name, languageVersion);
		};

		// Create program and get diagnostics
		const program = ts.createProgram([fileName], compilerOptions, host);
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
