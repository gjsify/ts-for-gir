/**
 * Helper function to normalize type strings for comparison
 */
export function normalizeTypeString(typeString: string): string {
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
export function typesMatch(actual: string, expected: string): boolean {
	const normalizedActual = normalizeTypeString(actual);
	const normalizedExpected = normalizeTypeString(expected);

	// Direct match
	if (normalizedActual === normalizedExpected) {
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
	return (
		typeAliases.get(normalizedActual) === normalizedExpected || typeAliases.get(normalizedExpected) === normalizedActual
	);
}
