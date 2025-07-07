/**
 * Result of a TypeScript validation operation
 */
export interface ValidationResult {
	success: boolean;
	errors: string[];
	warnings: string[];
}

/**
 * Options for TypeScript validation operations
 */
export interface ValidationOptions {
	strict?: boolean;
	/**
	 * Path to the directory containing GIR type definitions (@types folder)
	 */
	typesPath?: string;
} 