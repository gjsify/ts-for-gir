/**
 * Type definitions for report analysis functionality
 */

import type { ProblemEntry } from "@ts-for-gir/reporter";

export interface TypeStatistics {
	commonUnresolvedTypes: Array<{ type: string; count: number; namespaces: string[] }>;
	commonTypeConflicts: Array<{ conflictType: string; count: number; examples: string[] }>;
	problematicNamespaces: Array<{ namespace: string; problems: number; types: string[] }>;
}

export interface ReportStatistics {
	bySeverity: Record<string, number>;
	byCategory: Record<string, number>;
	byModule: Record<string, number>;
	totalProblems: number;
	mostProblematicModules: Array<{ module: string; count: number }>;
	typeStatistics: TypeStatistics;
	startTime: string | Date;
	endTime?: string | Date;
	durationMs?: number;
}

export interface ReportMetadata {
	version: string;
	generatedAt: string | Date;
}

export interface ReportData {
	metadata: ReportMetadata;
	statistics: ReportStatistics;
	problems: ProblemEntry[];
} 