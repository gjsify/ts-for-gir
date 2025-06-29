/**
 * Central Reporter Service that manages all reporter instances
 * and creates comprehensive reports across the entire generation process.
 */

import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { GenerationReport, ProblemEntry, Reporter, ReportStatistics } from "./reporter.ts";

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

		for (const problem of allProblems) {
			bySeverity[problem.severity] = (bySeverity[problem.severity] || 0) + 1;
			byCategory[problem.category] = (byCategory[problem.category] || 0) + 1;
			byModule[problem.module] = (byModule[problem.module] || 0) + 1;
		}

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
		if (!this.config.enabled) {
			return;
		}

		const report = this.generateComprehensiveReport();
		const { statistics, summary } = report;

		console.log(`\n${"=".repeat(60)}`);
		console.log("📊 COMPREHENSIVE GENERATION REPORT");
		console.log("=".repeat(60));

		// Status
		const statusEmoji = summary.status === "success" ? "✅" : summary.status === "partial" ? "⚠️" : "❌";
		console.log(`${statusEmoji} Status: ${summary.status.toUpperCase()}`);

		// Statistics
		console.log(`\n📈 Overall Statistics:`);
		console.log(`  Total Problems: ${statistics.totalProblems}`);
		console.log(`  Modules Processed: ${this.reporters.size}`);
		console.log(`  Duration: ${Math.round((statistics.durationMs || 0) / 1000)}s`);

		if (statistics.totalProblems > 0) {
			console.log(`\n🔍 Problems by Severity:`);
			for (const [severity, count] of Object.entries(statistics.bySeverity)) {
				if (count > 0) {
					const emoji = severity === "error" || severity === "critical" ? "🔴" : severity === "warning" ? "🟡" : "🔵";
					console.log(`  ${emoji} ${severity}: ${count}`);
				}
			}

			console.log(`\n📂 Problems by Category:`);
			for (const [category, count] of Object.entries(statistics.byCategory)) {
				if (count > 0) {
					console.log(`  • ${category.replace(/_/g, " ")}: ${count}`);
				}
			}

			if (statistics.mostProblematicModules.length > 0) {
				console.log(`\n🚨 Most Problematic Modules:`);
				statistics.mostProblematicModules.slice(0, 5).forEach(({ module, count }) => {
					console.log(`  📦 ${module}: ${count} issues`);
				});
			}
		}

		// Key Issues
		if (summary.keyIssues.length > 0) {
			console.log(`\n⚠️  Key Issues:`);
			summary.keyIssues.forEach((issue) => console.log(`  • ${issue}`));
		}

		// Recommendations
		if (summary.recommendations.length > 0) {
			console.log(`\n💡 Recommendations:`);
			summary.recommendations.forEach((rec) => console.log(`  • ${rec}`));
		}

		console.log(`${"=".repeat(60)}\n`);
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
