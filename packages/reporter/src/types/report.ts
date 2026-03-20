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
 * Compute problem statistics from a list of problems.
 * Shared between ConsoleReporter and ReporterService to avoid duplication.
 */
export function computeProblemStatistics(problems: ProblemEntry[], startTime: Date): ReportStatistics {
	const bySeverity: Record<ProblemSeverity, number> = {
		[ProblemSeverity.DEBUG]: 0,
		[ProblemSeverity.INFO]: 0,
		[ProblemSeverity.WARNING]: 0,
		[ProblemSeverity.ERROR]: 0,
		[ProblemSeverity.CRITICAL]: 0,
	};

	const byCategory: Record<ProblemCategory, number> = {
		[ProblemCategory.TYPE_RESOLUTION]: 0,
		[ProblemCategory.PARSING_FAILURE]: 0,
		[ProblemCategory.GENERATION_FAILURE]: 0,
		[ProblemCategory.TYPE_CONFLICT]: 0,
		[ProblemCategory.DEPENDENCY_ISSUE]: 0,
		[ProblemCategory.CONFIGURATION]: 0,
		[ProblemCategory.IO_ERROR]: 0,
		[ProblemCategory.GENERAL]: 0,
	};

	const byModule: Record<string, number> = {};

	const unresolvedTypes: Record<string, { count: number; namespaces: Set<string>; sourceModules: Set<string> }> = {};
	const typeConflicts: Record<string, { count: number; examples: Set<string> }> = {};
	const namespaceProblems: Record<string, { count: number; types: Set<string> }> = {};

	for (const problem of problems) {
		bySeverity[problem.severity]++;
		byCategory[problem.category]++;
		byModule[problem.module] = (byModule[problem.module] || 0) + 1;

		if (problem.category === ProblemCategory.TYPE_RESOLUTION && problem.typeName) {
			if (!unresolvedTypes[problem.typeName]) {
				unresolvedTypes[problem.typeName] = { count: 0, namespaces: new Set(), sourceModules: new Set() };
			}
			unresolvedTypes[problem.typeName].count++;
			if (problem.location) {
				unresolvedTypes[problem.typeName].namespaces.add(problem.location);
			}
			const sourceModule = problem.metadata?.sourceModule as string | undefined;
			if (sourceModule) {
				unresolvedTypes[problem.typeName].sourceModules.add(sourceModule);
			}

			if (problem.location) {
				if (!namespaceProblems[problem.location]) {
					namespaceProblems[problem.location] = { count: 0, types: new Set() };
				}
				namespaceProblems[problem.location].count++;
				namespaceProblems[problem.location].types.add(problem.typeName);
			}
		}

		if (problem.category === ProblemCategory.TYPE_CONFLICT && problem.metadata?.conflictType) {
			const conflictType = problem.metadata.conflictType as string;
			if (!typeConflicts[conflictType]) {
				typeConflicts[conflictType] = { count: 0, examples: new Set() };
			}
			typeConflicts[conflictType].count++;
			if (problem.typeName) {
				typeConflicts[conflictType].examples.add(problem.typeName);
			}
		}
	}

	const commonUnresolvedTypes = Object.entries(unresolvedTypes)
		.map(([type, data]) => ({
			type,
			count: data.count,
			namespaces: Array.from(data.namespaces),
			sourceModules: Array.from(data.sourceModules),
		}))
		.sort((a, b) => b.count - a.count)
		.slice(0, 20);

	const commonTypeConflicts = Object.entries(typeConflicts)
		.map(([conflictType, data]) => ({
			conflictType,
			count: data.count,
			examples: Array.from(data.examples).slice(0, 5),
		}))
		.sort((a, b) => b.count - a.count);

	const problematicNamespaces = Object.entries(namespaceProblems)
		.map(([namespace, data]) => ({
			namespace,
			problems: data.count,
			types: Array.from(data.types).slice(0, 10),
		}))
		.sort((a, b) => b.problems - a.problems)
		.slice(0, 10);

	const mostProblematicModules = Object.entries(byModule)
		.sort(([, a], [, b]) => b - a)
		.slice(0, 10)
		.map(([module, count]) => ({ module, count }));

	const endTime = new Date();

	return {
		bySeverity,
		byCategory,
		byModule,
		totalProblems: problems.length,
		mostProblematicModules,
		typeStatistics: { commonUnresolvedTypes, commonTypeConflicts, problematicNamespaces },
		startTime,
		endTime,
		durationMs: endTime.getTime() - startTime.getTime(),
	};
}

/**
 * Generate report summary with key issues and recommendations.
 * Shared between ConsoleReporter and ReporterService.
 */
export function generateReportSummary(statistics: ReportStatistics): GenerationReport["summary"] {
	const { bySeverity, byCategory, totalProblems } = statistics;

	const status = determineGenerationStatus(bySeverity, byCategory);

	const keyIssues: string[] = [];
	const recommendations: string[] = [];

	if (byCategory[ProblemCategory.TYPE_RESOLUTION] > 0) {
		keyIssues.push(
			`${byCategory[ProblemCategory.TYPE_RESOLUTION]} type resolution warnings (produce 'never' type in output)`,
		);
		recommendations.push(
			"Unresolved types produce 'never' in output — these are typically non-introspectable types or missing GIR dependencies",
		);
	}

	if (byCategory[ProblemCategory.PARSING_FAILURE] > 0) {
		keyIssues.push(`${byCategory[ProblemCategory.PARSING_FAILURE]} parsing failures occurred`);
		recommendations.push("Check GIR file syntax and ensure proper introspection data");
	}

	if (byCategory[ProblemCategory.GENERATION_FAILURE] > 0) {
		keyIssues.push(`${byCategory[ProblemCategory.GENERATION_FAILURE]} generation failures encountered`);
		recommendations.push("Review template configuration and output settings");
	}

	if (byCategory[ProblemCategory.TYPE_CONFLICT] > 0) {
		keyIssues.push(`${byCategory[ProblemCategory.TYPE_CONFLICT]} type conflicts detected`);
		recommendations.push(
			"Type conflicts are handled automatically — conflicting members are omitted or use union types",
		);
	}

	if (keyIssues.length === 0 && totalProblems > 0) {
		keyIssues.push(`${totalProblems} minor issues detected`);
	}

	if (recommendations.length === 0 && totalProblems > 0) {
		recommendations.push("Review detailed problem list for specific improvement opportunities");
	}

	return { status, keyIssues, recommendations };
}

/**
 * Group problems by category.
 */
export function groupProblemsByCategory(problems: ProblemEntry[]): Record<ProblemCategory, ProblemEntry[]> {
	const result = Object.values(ProblemCategory).reduce(
		(acc, category) => {
			acc[category] = [];
			return acc;
		},
		{} as Record<ProblemCategory, ProblemEntry[]>,
	);

	for (const problem of problems) {
		result[problem.category].push(problem);
	}

	return result;
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
