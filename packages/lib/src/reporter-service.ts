/**
 * Central Reporter Service that manages all reporter instances
 * and creates comprehensive reports across the entire generation process.
 */

import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { blue, gray, green, red, yellow } from "colorette";
import {
	type GenerationReport,
	ProblemCategory,
	type ProblemEntry,
	type ProblemTypeStatistics,
	type Reporter,
	type ReportStatistics,
} from "./reporter.ts";

/**
 * Centralized service for managing multiple Reporter instances
 * and creating comprehensive generation reports
 */
export class ReporterService {
	private static instance: ReporterService | null = null;
	private readonly reporters: Map<string, Reporter> = new Map();
	private readonly config: {
		enabled: boolean;
		outputPath: string;
	} = {
		enabled: false,
		outputPath: "ts-for-gir-report.json",
	};

	private constructor() {}

	/**
	 * Get the singleton instance of ReporterService
	 */
	public static getInstance(): ReporterService {
		if (!ReporterService.instance) {
			ReporterService.instance = new ReporterService();
		}
		return ReporterService.instance;
	}

	/**
	 * Configure the reporter service
	 */
	public configure(enabled: boolean, outputPath: string): void {
		this.config.enabled = enabled;
		this.config.outputPath = outputPath;
	}

	/**
	 * Register a Reporter instance
	 */
	public registerReporter(id: string, reporter: Reporter): void {
		if (this.config.enabled) {
			this.reporters.set(id, reporter);
		}
	}

	/**
	 * Unregister a Reporter instance
	 */
	public unregisterReporter(id: string): void {
		this.reporters.delete(id);
	}

	/**
	 * Check if reporter service is enabled
	 */
	public isEnabled(): boolean {
		return this.config.enabled;
	}

	/**
	 * Get all registered reporters
	 */
	public getReporters(): Map<string, Reporter> {
		return new Map(this.reporters);
	}

	/**
	 * Collect all problems from all registered reporters
	 */
	private collectAllProblems(): ProblemEntry[] {
		const allProblems: ProblemEntry[] = [];

		for (const reporter of this.reporters.values()) {
			const report = reporter.generateReport();
			allProblems.push(...report.problems);
		}

		return allProblems;
	}

	/**
	 * Generate comprehensive statistics from all reporters
	 */
	private generateComprehensiveStatistics(): ReportStatistics {
		const allProblems = this.collectAllProblems();

		// If we have no reporters, return empty stats
		if (this.reporters.size === 0) {
			return {
				bySeverity: {
					debug: 0,
					info: 0,
					warning: 0,
					error: 0,
					critical: 0,
				},
				byCategory: {
					type_resolution: 0,
					parsing_failure: 0,
					generation_failure: 0,
					type_conflict: 0,
					dependency_issue: 0,
					configuration: 0,
					io_error: 0,
					general: 0,
				},
				byModule: {},
				totalProblems: 0,
				mostProblematicModules: [],
				typeStatistics: {
					commonUnresolvedTypes: [],
					commonTypeConflicts: [],
					problematicNamespaces: [],
				},
				startTime: new Date(),
				endTime: new Date(),
				durationMs: 0,
			};
		}

		// Get the first reporter's report as base for timing
		const firstReport = this.reporters.values().next().value?.generateReport();
		const startTime = firstReport?.statistics.startTime || new Date();

		// Use current time as end time
		const endTime = new Date();
		const durationMs = endTime.getTime() - startTime.getTime();

		// Aggregate statistics
		const bySeverity: Record<string, number> = {
			debug: 0,
			info: 0,
			warning: 0,
			error: 0,
			critical: 0,
		};

		const byCategory: Record<string, number> = {
			type_resolution: 0,
			parsing_failure: 0,
			generation_failure: 0,
			type_conflict: 0,
			dependency_issue: 0,
			configuration: 0,
			io_error: 0,
			general: 0,
		};

		const byModule: Record<string, number> = {};

		// Type-specific tracking
		const unresolvedTypes: Record<string, { count: number; namespaces: Set<string> }> = {};
		const typeConflicts: Record<string, { count: number; examples: Set<string> }> = {};
		const namespaceProblems: Record<string, { count: number; types: Set<string> }> = {};

		for (const problem of allProblems) {
			bySeverity[problem.severity] = (bySeverity[problem.severity] || 0) + 1;
			byCategory[problem.category] = (byCategory[problem.category] || 0) + 1;
			byModule[problem.module] = (byModule[problem.module] || 0) + 1;

			// Track type resolution problems
			if (problem.category === "type_resolution" && problem.typeName) {
				if (!unresolvedTypes[problem.typeName]) {
					unresolvedTypes[problem.typeName] = { count: 0, namespaces: new Set() };
				}
				unresolvedTypes[problem.typeName].count++;
				if (problem.location) {
					unresolvedTypes[problem.typeName].namespaces.add(problem.location);
				}

				// Track namespace problems
				if (problem.location) {
					if (!namespaceProblems[problem.location]) {
						namespaceProblems[problem.location] = { count: 0, types: new Set() };
					}
					namespaceProblems[problem.location].count++;
					namespaceProblems[problem.location].types.add(problem.typeName);
				}
			}

			// Track type conflicts
			if (problem.category === "type_conflict" && problem.metadata?.conflictType) {
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

		// Convert to arrays and sort
		const commonUnresolvedTypes = Object.entries(unresolvedTypes)
			.map(([type, data]) => ({
				type,
				count: data.count,
				namespaces: Array.from(data.namespaces),
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

		return {
			bySeverity: bySeverity as ReportStatistics["bySeverity"],
			byCategory: byCategory as ReportStatistics["byCategory"],
			byModule,
			totalProblems: allProblems.length,
			mostProblematicModules,
			typeStatistics: {
				commonUnresolvedTypes,
				commonTypeConflicts,
				problematicNamespaces,
			},
			startTime,
			endTime,
			durationMs,
		};
	}

	/**
	 * Generate comprehensive report from all reporters
	 */
	public generateComprehensiveReport(): GenerationReport {
		const statistics = this.generateComprehensiveStatistics();
		const allProblems = this.collectAllProblems();

		// Generate problems by category
		const problemsByCategory = Object.values(ProblemCategory).reduce(
			(acc, category) => {
				acc[category] = [];
				return acc;
			},
			{} as Record<ProblemCategory, ProblemEntry[]>,
		);

		for (const problem of allProblems) {
			problemsByCategory[problem.category].push(problem);
		}

		// Generate summary
		const errorCount = statistics.bySeverity.error || 0;
		const criticalCount = statistics.bySeverity.critical || 0;
		const warningCount = statistics.bySeverity.warning || 0;

		let status: "success" | "partial" | "failed" = "success";
		if (criticalCount > 0 || errorCount > 10) {
			status = "failed";
		} else if (errorCount > 0 || warningCount > 20) {
			status = "partial";
		}

		const keyIssues: string[] = [];
		const recommendations: string[] = [];

		// Analyze key issues across all modules
		const typeResolutionCount = statistics.byCategory.type_resolution || 0;
		const parsingFailureCount = statistics.byCategory.parsing_failure || 0;
		const generationFailureCount = statistics.byCategory.generation_failure || 0;
		const conflictCount = statistics.byCategory.type_conflict || 0;

		if (typeResolutionCount > 0) {
			keyIssues.push(`${typeResolutionCount} type resolution issues across all modules`);
			recommendations.push("Review GIR files for missing or incorrect type definitions");
		}

		if (parsingFailureCount > 0) {
			keyIssues.push(`${parsingFailureCount} parsing failures encountered`);
			recommendations.push("Check GIR file syntax and ensure proper introspection data");
		}

		if (generationFailureCount > 0) {
			keyIssues.push(`${generationFailureCount} generation failures occurred`);
			recommendations.push("Review template configuration and output settings");
		}

		if (conflictCount > 10) {
			keyIssues.push(`High number of type conflicts (${conflictCount})`);
			recommendations.push("Consider using ignore patterns or updating GIR files to resolve conflicts");
		}

		if (keyIssues.length === 0 && statistics.totalProblems > 0) {
			keyIssues.push(`${statistics.totalProblems} minor issues detected across all modules`);
		}

		if (recommendations.length === 0 && statistics.totalProblems > 0) {
			recommendations.push("Review detailed problem list for specific improvement opportunities");
		}

		return {
			metadata: {
				version: "1.0.0",
				generatedAt: new Date(),
				reporterVersion: "1.0.0",
			},
			statistics,
			problems: allProblems,
			problemsByCategory,
			summary: {
				status,
				keyIssues,
				recommendations,
			},
		};
	}

	/**
	 * Save comprehensive report to file
	 */
	public async saveComprehensiveReport(outputPath?: string): Promise<void> {
		if (!this.config.enabled) {
			return;
		}

		const report = this.generateComprehensiveReport();
		const filePath = outputPath || this.config.outputPath;

		try {
			const fullPath = resolve(process.cwd(), filePath);
			await writeFile(fullPath, JSON.stringify(report, null, 2), "utf-8");
			console.log(`📊 Comprehensive report saved to: ${fullPath}`);
		} catch (error) {
			console.error(`❌ Failed to save comprehensive report to ${filePath}: ${error}`);
		}
	}

	/**
	 * Print comprehensive summary to console
	 */
	public printComprehensiveSummary(): void {
		const report = this.generateComprehensiveReport();
		const { statistics, summary } = report;

		console.log(`\n${"=".repeat(60)}`);
		console.log("📊 COMPREHENSIVE GENERATION REPORT");
		console.log("=".repeat(60));

		// Overall status
		const statusColor = summary.status === "success" ? green : summary.status === "partial" ? yellow : red;
		console.log(`\n🎯 Overall Status: ${statusColor(summary.status.toUpperCase())}`);

		// Total statistics
		console.log(`\n📈 Total Statistics:`);
		console.log(`  ⏱️  Duration: ${Math.round((statistics.durationMs || 0) / 1000)}s`);
		console.log(`  📁 Modules Processed: ${this.reporters.size}`);
		console.log(`  ⚠️  Total Problems: ${statistics.totalProblems}`);

		// Severity breakdown
		if (statistics.totalProblems > 0) {
			console.log(`\n🔍 Problems by Severity:`);
			for (const [severity, count] of Object.entries(statistics.bySeverity)) {
				if (count > 0) {
					const icon = severity === "error" || severity === "critical" ? "❌" : severity === "warning" ? "⚠️" : "ℹ️";
					const color = severity === "error" || severity === "critical" ? red : severity === "warning" ? yellow : blue;
					console.log(`  ${icon} ${color(severity.toUpperCase())}: ${count}`);
				}
			}

			// Category breakdown
			console.log(`\n📂 Problems by Category:`);
			for (const [category, count] of Object.entries(statistics.byCategory)) {
				if (count > 0) {
					const categoryName = category.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
					console.log(`  • ${categoryName}: ${count}`);
				}
			}

			// Type-specific statistics
			if (statistics.typeStatistics.commonUnresolvedTypes.length > 0) {
				console.log(`\n❌ Top Unresolved Types:`);
				statistics.typeStatistics.commonUnresolvedTypes.slice(0, 10).forEach(({ type, count, namespaces }) => {
					console.log(`  ${red(type)}: ${count} occurrences`);
					if (namespaces.length <= 3) {
						console.log(`    └─ In: ${gray(namespaces.join(", "))}`);
					} else {
						console.log(`    └─ In: ${gray(`${namespaces.slice(0, 3).join(", ")} and ${namespaces.length - 3} more`)}`);
					}
				});
			}

			if (statistics.typeStatistics.commonTypeConflicts.length > 0) {
				console.log(`\n⚔️  Type Conflicts Summary:`);
				statistics.typeStatistics.commonTypeConflicts.forEach(({ conflictType, count, examples }) => {
					console.log(`  ${yellow(conflictType.replace(/_/g, " "))}: ${count} conflicts`);
					if (examples.length > 0) {
						const exampleList = examples.slice(0, 3).join(", ");
						const moreExamples = examples.length > 3 ? ` and ${examples.length - 3} more` : "";
						console.log(`    └─ Examples: ${gray(exampleList + moreExamples)}`);
					}
				});
			}

			if (statistics.typeStatistics.problematicNamespaces.length > 0) {
				console.log(`\n🚨 Most Problematic Namespaces:`);
				statistics.typeStatistics.problematicNamespaces.slice(0, 10).forEach(({ namespace, problems, types }) => {
					console.log(`  ${namespace}: ${red(problems.toString())} problems`);
					if (types.length > 0) {
						const typeList = types.slice(0, 5).join(", ");
						const moreTypes = types.length > 5 ? ` and ${types.length - 5} more` : "";
						console.log(`    └─ Problem types: ${gray(typeList + moreTypes)}`);
					}
				});
			}

			// Module breakdown
			if (statistics.mostProblematicModules.length > 0) {
				console.log(`\n📦 Most Problematic Modules:`);
				statistics.mostProblematicModules.slice(0, 10).forEach(({ module, count }) => {
					const percentage = Math.round((count / statistics.totalProblems) * 100);
					console.log(`  ${module}: ${count} issues (${percentage}%)`);
				});
			}
		}

		// Key issues
		if (summary.keyIssues.length > 0) {
			console.log(`\n⚠️  Key Issues:`);
			summary.keyIssues.forEach((issue) => console.log(`  • ${issue}`));
		}

		// Recommendations
		if (summary.recommendations.length > 0) {
			console.log(`\n💡 Recommendations:`);
			summary.recommendations.forEach((rec) => console.log(`  • ${rec}`));
		}

		console.log(`\n${"=".repeat(60)}`);
		console.log(`📝 Detailed report: ${this.config.outputPath || "ts-for-gir-report.json"}`);
		console.log("=".repeat(60) + "\n");
	}

	/**
	 * Reset the service (mainly for testing)
	 */
	public reset(): void {
		this.reporters.clear();
		this.config.enabled = false;
		this.config.outputPath = "ts-for-gir-report.json";
	}
}
