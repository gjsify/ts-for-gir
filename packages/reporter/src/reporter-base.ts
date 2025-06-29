/**
 * Base Reporter class that defines the interface for problem reporting
 * Following the Formatter pattern for dependency injection
 */

import type {
	GenerationReport,
	ProblemCategory,
	ProblemEntry,
	ProblemSeverity,
	ReporterConfig,
} from "./types/index.ts";

/**
 * Abstract base class for reporters
 */
export abstract class ReporterBase {
	protected readonly config: ReporterConfig;
	protected readonly problems: ProblemEntry[] = [];
	protected readonly startTime: Date = new Date();
	protected problemIdCounter = 0;

	constructor(config: ReporterConfig) {
		this.config = config;
	}

	/**
	 * Generate a unique problem ID
	 */
	protected generateProblemId(): string {
		return `${this.config.moduleName}_${Date.now()}_${++this.problemIdCounter}`;
	}

	/**
	 * Add a problem to the report
	 */
	protected addProblem(
		severity: ProblemSeverity,
		category: ProblemCategory,
		message: string,
		details?: string,
		typeName?: string,
		location?: string,
		metadata?: Record<string, unknown>,
	): void {
		if (!this.config.enabled) {
			return;
		}

		const problem: ProblemEntry = {
			id: this.generateProblemId(),
			severity,
			category,
			module: this.config.moduleName,
			message,
			details,
			typeName,
			location,
			timestamp: new Date(),
			metadata,
		};

		this.problems.push(problem);
	}

	/**
	 * Get current problem count
	 */
	public getProblemCount(): number {
		return this.problems.length;
	}

	/**
	 * Get problems by category
	 */
	public getProblemsByCategory(category: ProblemCategory): ProblemEntry[] {
		return this.problems.filter((p) => p.category === category);
	}

	/**
	 * Get problems by severity
	 */
	public getProblemsBySeverity(severity: ProblemSeverity): ProblemEntry[] {
		return this.problems.filter((p) => p.severity === severity);
	}

	/**
	 * Get all problems
	 */
	public getProblems(): ProblemEntry[] {
		return [...this.problems];
	}

	// === Abstract methods that must be implemented by concrete reporters ===

	/**
	 * Report a type resolution problem
	 */
	public abstract reportTypeResolutionError(
		typeName: string,
		namespace: string,
		message: string,
		details?: string,
	): void;

	/**
	 * Report a type resolution warning (fallback cases)
	 */
	public abstract reportTypeResolutionWarning(
		typeName: string,
		namespace: string,
		message: string,
		details?: string,
	): void;

	/**
	 * Report a parsing failure
	 */
	public abstract reportParsingFailure(
		itemName: string,
		itemType: string,
		namespace: string,
		error: Error | string,
	): void;

	/**
	 * Report a generation failure
	 */
	public abstract reportGenerationFailure(namespace: string, error: Error | string, context?: string): void;

	/**
	 * Report a type conflict
	 */
	public abstract reportTypeConflict(
		conflictType: string,
		elementName: string,
		namespace: string,
		details?: string,
	): void;

	/**
	 * Report a dependency issue
	 */
	public abstract reportDependencyIssue(dependencyName: string, issue: string, details?: string): void;

	/**
	 * Generate a comprehensive report
	 */
	public abstract generateReport(): GenerationReport;

	/**
	 * Save the report to a file
	 */
	public abstract saveReport(outputPath?: string): Promise<void>;

	/**
	 * Print a summary to console
	 */
	public abstract printSummary(): void;

	// === Logger compatibility methods (abstract for customization) ===

	/**
	 * Log a general message
	 */
	public abstract log(...args: unknown[]): void;

	/**
	 * Log an info message
	 */
	public abstract info(txt: string, ...args: unknown[]): void;

	/**
	 * Log a warning message
	 */
	public abstract warn(txt: string, ...args: unknown[]): void;

	/**
	 * Log a debug message
	 */
	public abstract debug(txt: string, ...args: unknown[]): void;

	/**
	 * Log an error message
	 */
	public abstract error(txt: string, ...args: unknown[]): void;

	/**
	 * Log a success message
	 */
	public abstract success(txt: string, ...args: unknown[]): void;

	/**
	 * Log a critical error message (always shown)
	 */
	public abstract danger(txt: string, ...args: unknown[]): void;
}
