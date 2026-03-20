import { ProblemCategory, type ProblemEntry, ProblemSeverity } from "./problem.ts";

/**
 * Generation status levels
 */
export type GenerationStatus = "success" | "success_with_warnings" | "partial";

/**
 * Determine the generation status based on problem statistics.
 * - "partial": actual errors, parsing failures, or generation failures occurred
 * - "success_with_warnings": generation completed but with non-blocking warnings
 * - "success": no problems at all
 */
export function determineGenerationStatus(
	bySeverity: Record<ProblemSeverity, number>,
	byCategory: Record<ProblemCategory, number>,
): GenerationStatus {
	const hasErrors = (bySeverity[ProblemSeverity.ERROR] || 0) > 0;
	const hasCritical = (bySeverity[ProblemSeverity.CRITICAL] || 0) > 0;
	const hasGenerationFailures = (byCategory[ProblemCategory.GENERATION_FAILURE] || 0) > 0;
	const hasParsingFailures = (byCategory[ProblemCategory.PARSING_FAILURE] || 0) > 0;

	if (hasErrors || hasCritical || hasGenerationFailures || hasParsingFailures) {
		return "partial";
	}

	if ((bySeverity[ProblemSeverity.WARNING] || 0) > 0) {
		return "success_with_warnings";
	}

	return "success";
}

/**
 * Aggregated problem statistics by type
 */
export interface ProblemTypeStatistics {
	/** Most common unresolved types */
	commonUnresolvedTypes: Array<{ type: string; count: number; namespaces: string[]; sourceModules: string[] }>;
	/** Most common type conflicts */
	commonTypeConflicts: Array<{ conflictType: string; count: number; examples: string[] }>;
	/** Namespaces with most problems */
	problematicNamespaces: Array<{ namespace: string; problems: number; types: string[] }>;
}

/**
 * Report statistics summary
 */
export interface ReportStatistics {
	/** Total number of problems by severity */
	bySeverity: Record<ProblemSeverity, number>;
	/** Total number of problems by category */
	byCategory: Record<ProblemCategory, number>;
	/** Total number of problems by module */
	byModule: Record<string, number>;
	/** Total problems count */
	totalProblems: number;
	/** Most problematic modules */
	mostProblematicModules: Array<{ module: string; count: number }>;
	/** Type-specific statistics */
	typeStatistics: ProblemTypeStatistics;
	/** Generation start time */
	startTime: Date;
	/** Generation end time */
	endTime?: Date;
	/** Total generation duration in milliseconds */
	durationMs?: number;
}

/**
 * Complete generation report
 */
export interface GenerationReport {
	/** Report metadata */
	metadata: {
		version: string;
		generatedAt: Date;
	};
	/** Aggregated statistics */
	statistics: ReportStatistics;
	/** All collected problems */
	problems: ProblemEntry[];
	/** Problems grouped by category */
	problemsByCategory: Record<ProblemCategory, ProblemEntry[]>;
	/** Summary and recommendations */
	summary: {
		/** Overall generation status */
		status: GenerationStatus;
		/** Key issues summary */
		keyIssues: string[];
		/** Recommendations for fixing issues */
		recommendations: string[];
	};
}
