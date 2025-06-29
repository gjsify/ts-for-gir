import type { ProblemCategory, ProblemEntry, ProblemSeverity } from "./problem.ts";

/**
 * Aggregated problem statistics by type
 */
export interface ProblemTypeStatistics {
	/** Most common unresolved types */
	commonUnresolvedTypes: Array<{ type: string; count: number; namespaces: string[] }>;
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
		reporterVersion: string;
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
		status: "success" | "partial" | "failed";
		/** Key issues summary */
		keyIssues: string[];
		/** Recommendations for fixing issues */
		recommendations: string[];
	};
} 