/**
 * Message Analyzer - Extracts problem information from log messages
 * Following Single Responsibility Principle for message analysis
 */

import { ProblemCategory, ProblemSeverity } from "./types/index.ts";

export interface AnalyzedMessage {
	severity: ProblemSeverity;
	category: ProblemCategory;
	typeName?: string;
	namespace?: string;
	details?: string;
	metadata?: Record<string, unknown>;
}

/**
 * Analyzes a warning message and extracts problem details
 */
export function analyzeWarning(message: string, args?: unknown[]): AnalyzedMessage | null {
	const details = args && args.length > 0 ? JSON.stringify(args) : undefined;

	// Type resolution warnings
	if (
		message.includes("Attempting to fall back on c:type inference") ||
		message.includes("Falling back on c:type inference")
	) {
		const matches = message.match(/for\s+(\w+)\.(\w+)/);
		if (matches) {
			const [, namespace, typeName] = matches;
			return {
				severity: ProblemSeverity.WARNING,
				category: ProblemCategory.TYPE_RESOLUTION,
				typeName,
				namespace,
				details,
				metadata: { inferenceType: "c:type", namespace, typeName },
			};
		}
	}

	// Type conflicts
	if (message.includes("Type conflict")) {
		const conflictMatch = message.match(/Type conflict \((\w+)\):\s*(\w+)/);
		if (conflictMatch) {
			const [, conflictType, elementName] = conflictMatch;
			const detailsMatch = message.match(/Conflict with (.+)$/);
			const conflictDetails = detailsMatch ? detailsMatch[1] : undefined;

			return {
				severity: ProblemSeverity.WARNING,
				category: ProblemCategory.TYPE_CONFLICT,
				typeName: elementName,
				details: conflictDetails || details,
				metadata: { conflictType, elementName },
			};
		}
	}

	// No specific pattern found - return general warning
	return {
		severity: ProblemSeverity.WARNING,
		category: ProblemCategory.GENERAL,
		details,
	};
}

/**
 * Analyzes an error message and extracts problem details
 */
export function analyzeError(message: string, args?: unknown[]): AnalyzedMessage | null {
	const details = args && args.length > 0 ? JSON.stringify(args) : undefined;

	// Type resolution errors
	if (message.includes("Unable to resolve type") || message.includes("could not be resolved")) {
		const unresolvedMatch = message.match(/Unable to resolve type (\w+) in same namespace (\w+)!/);
		if (unresolvedMatch) {
			const [, typeName, namespace] = unresolvedMatch;
			return {
				severity: ProblemSeverity.ERROR,
				category: ProblemCategory.TYPE_RESOLUTION,
				typeName,
				namespace,
				details,
				metadata: { namespace, typeName, resolutionType: "same_namespace" },
			};
		}

		const couldNotResolveMatch = message.match(/Type (\w+) could not be resolved in (\w+)/);
		if (couldNotResolveMatch) {
			const [, typeName, context] = couldNotResolveMatch;
			const namespaceMatch = context.match(/(\w+)\s+[\d.]+/);
			const namespace = namespaceMatch ? namespaceMatch[1] : context;

			return {
				severity: ProblemSeverity.ERROR,
				category: ProblemCategory.TYPE_RESOLUTION,
				typeName,
				namespace,
				details,
				metadata: { namespace, typeName, context },
			};
		}
	}

	// Parsing failures
	if (message.includes("Failed to parse")) {
		const parseMatch = message.match(/Failed to parse (\w+):\s*(.+)/);
		if (parseMatch) {
			const [, itemType, itemName] = parseMatch;
			return {
				severity: ProblemSeverity.ERROR,
				category: ProblemCategory.PARSING_FAILURE,
				typeName: itemName,
				details: args && args.length > 0 ? String(args[0]) : message,
				metadata: { itemType, itemName },
			};
		}
	}

	// Generation failures
	if (message.includes("Failed to generate")) {
		const genMatch = message.match(/Failed to generate (.+):\s*(.+)/);
		if (genMatch) {
			const [, context, namespace] = genMatch;
			return {
				severity: ProblemSeverity.ERROR,
				category: ProblemCategory.GENERATION_FAILURE,
				namespace,
				details: args && args.length > 0 ? String(args[0]) : message,
				metadata: { context, namespace },
			};
		}
	}

	// No specific pattern found - return general error
	return {
		severity: ProblemSeverity.ERROR,
		category: ProblemCategory.GENERAL,
		details,
	};
}
