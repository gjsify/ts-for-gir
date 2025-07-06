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