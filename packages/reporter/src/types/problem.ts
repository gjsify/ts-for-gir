/**
 * Problem severity levels
 */
export enum ProblemSeverity {
	DEBUG = "debug",
	INFO = "info",
	WARNING = "warning",
	ERROR = "error",
	CRITICAL = "critical",
}

/**
 * Problem categories for better organization
 */
export enum ProblemCategory {
	TYPE_RESOLUTION = "type_resolution",
	PARSING_FAILURE = "parsing_failure",
	GENERATION_FAILURE = "generation_failure",
	TYPE_CONFLICT = "type_conflict",
	DEPENDENCY_ISSUE = "dependency_issue",
	CONFIGURATION = "configuration",
	IO_ERROR = "io_error",
	GENERAL = "general",
}

/**
 * Individual problem entry
 */
export interface ProblemEntry {
	/** Unique identifier for this problem instance */
	id: string;
	/** Problem severity level */
	severity: ProblemSeverity;
	/** Problem category */
	category: ProblemCategory;
	/** Module/namespace where the problem occurred */
	module: string;
	/** Brief problem description */
	message: string;
	/** Detailed description or context */
	details?: string;
	/** Related type name (if applicable) */
	typeName?: string;
	/** Source location or context */
	location?: string;
	/** Timestamp when the problem occurred */
	timestamp: Date;
	/** Additional metadata */
	metadata?: Record<string, unknown>;
}

/**
 * Type resolution specific problem
 */
export interface TypeResolutionProblem extends ProblemEntry {
	/** The unresolved type name */
	unresolvedType: string;
	/** The namespace where resolution was attempted */
	targetNamespace: string;
	/** Whether this was a c:type fallback attempt */
	isCTypeFallback?: boolean;
	/** The resolved type if fallback succeeded */
	resolvedType?: string;
}

/**
 * Type conflict specific problem
 */
export interface TypeConflictProblem extends ProblemEntry {
	/** Type of conflict (field_property, general, etc.) */
	conflictType: string;
	/** Name of the conflicting element */
	elementName: string;
	/** What it conflicts with */
	conflictsWith?: string;
} 