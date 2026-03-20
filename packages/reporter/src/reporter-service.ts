/**
 * Central Reporter Service that manages all reporter instances
 * and creates comprehensive reports across the entire generation process.
 */

import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { blue, green, red, yellow } from "colorette";
import { PACKAGE_VERSION } from "./constants.ts";
import type { ReporterBase } from "./reporter-base.ts";
import type { GenerationReport, ProblemEntry } from "./types/index.ts";
import { computeProblemStatistics, generateReportSummary, groupProblemsByCategory } from "./types/report.ts";

/**
 * Centralized service for managing multiple Reporter instances
 * and creating comprehensive generation reports
 */
export class ReporterService {
	private static instance: ReporterService | null = null;
	private readonly reporters: Map<string, ReporterBase> = new Map();
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
	public registerReporter(id: string, reporter: ReporterBase): void {
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
	public getReporters(): Map<string, ReporterBase> {
		return new Map(this.reporters);
	}

	/**
	 * Collect all problems from all registered reporters
	 */
	private collectAllProblems(): ProblemEntry[] {
		const allProblems: ProblemEntry[] = [];

		for (const reporter of this.reporters.values()) {
			allProblems.push(...reporter.getProblems());
		}

		return allProblems;
	}

	/**
	 * Generate comprehensive statistics from all reporters
	 */
	/**
	 * Generate comprehensive report from all reporters
	 */
	public generateComprehensiveReport(): GenerationReport {
		const allProblems = this.collectAllProblems();
		const startTime = this.reporters.values().next().value?.getProblems()[0]?.timestamp || new Date();
		const statistics = computeProblemStatistics(allProblems, startTime);
		const summary = generateReportSummary(statistics);

		return {
			metadata: {
				version: PACKAGE_VERSION,
				generatedAt: new Date(),
			},
			statistics,
			problems: allProblems,
			problemsByCategory: groupProblemsByCategory(allProblems),
			summary,
		};
	}

	/**
	 * Save comprehensive report to file
	 */
	public async saveComprehensiveReport(outputPath?: string, precomputedReport?: GenerationReport): Promise<void> {
		if (!this.config.enabled) {
			return;
		}

		const report = precomputedReport || this.generateComprehensiveReport();
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
	public printComprehensiveSummary(precomputedReport?: GenerationReport): void {
		const report = precomputedReport || this.generateComprehensiveReport();
		const { statistics, summary } = report;

		console.log(`\n${"=".repeat(60)}`);
		console.log("📊 COMPREHENSIVE GENERATION REPORT");
		console.log("=".repeat(60));

		// Overall status
		const statusColor = summary.status === "partial" ? yellow : green;
		console.log(`\n🎯 Overall Status: ${statusColor(summary.status.toUpperCase())}`);
		if (summary.status === "success_with_warnings") {
			console.log(green("  All issues are non-blocking. Generated types are complete."));
		}

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

			// Most problematic namespaces (byModule now tracks GIR namespaces)
			if (statistics.mostProblematicModules.length > 0) {
				console.log(`\n📦 Namespaces with Most Issues:`);
				statistics.mostProblematicModules.slice(0, 10).forEach(({ module, count }) => {
					const percentage = Math.round((count / statistics.totalProblems) * 100);
					console.log(`  ${module}: ${count} issues (${percentage}%)`);
				});
			}
		}

		// Key issues
		if (summary.keyIssues.length > 0) {
			console.log(`\n⚠️  Key Issues:`);
			for (const issue of summary.keyIssues) {
				console.log(`  • ${issue}`);
			}
		}

		// Recommendations
		if (summary.recommendations.length > 0) {
			console.log(`\n💡 Recommendations:`);
			for (const rec of summary.recommendations) {
				console.log(`  • ${rec}`);
			}
		}

		console.log(`\n${"=".repeat(60)}`);
		console.log(`📝 Detailed report: ${this.config.outputPath || "ts-for-gir-report.json"}`);
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
