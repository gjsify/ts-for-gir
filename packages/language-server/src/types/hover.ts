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