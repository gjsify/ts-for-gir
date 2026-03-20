/**
 * Console Reporter - A concrete implementation of ReporterBase
 * that provides console logging and comprehensive problem tracking
 */

import { writeFile } from "node:fs/promises";
import { blue, gray, green, red, yellow, yellowBright } from "colorette";
import { PACKAGE_VERSION } from "./constants.ts";
import { analyzeError, analyzeWarning } from "./message-analyzer.ts";
import { ReporterBase } from "./reporter-base.ts";
import type { GenerationReport, ReporterConfig } from "./types/index.ts";
import { ProblemCategory, ProblemSeverity } from "./types/index.ts";
import { computeProblemStatistics, generateReportSummary, groupProblemsByCategory } from "./types/report.ts";

/**
 * Console Reporter implementation with full logging capabilities
 */
export class ConsoleReporter extends ReporterBase {
	constructor(config: ReporterConfig);
	constructor(verbose: boolean, moduleName: string, reporterEnabled?: boolean, outputPath?: string);
	constructor(
		configOrVerbose: ReporterConfig | boolean,
		moduleName?: string,
		reporterEnabled = false,
		outputPath?: string,
	) {
		let config: ReporterConfig;
		if (typeof configOrVerbose === "boolean") {
			// Legacy Logger constructor compatibility
			config = {
				enabled: reporterEnabled,
				verbose: configOrVerbose,
				moduleName: moduleName || "Unknown",
				outputPath,
			};
		} else {
			config = configOrVerbose;
		}
		super(config);
	}

	// === Logger compatibility methods ===

	public log(...args: unknown[]): void {
		if (!this.config.verbose) {
			return;
		}
		console.log(...args);
	}

	public dir(...args: unknown[]): void {
		if (!this.config.verbose) {
			return;
		}
		args.forEach((arg) => {
			console.dir(arg);
		});
	}

	public info(txt: string, ...args: unknown[]): void {
		if (!this.config.verbose) {
			return;
		}
		console.info(blue(txt), ...args);
	}

	public warn(txt: string, ...args: unknown[]): void {
		// Analyze message for specific problem types
		if (this.config.enabled) {
			const analyzed = analyzeWarning(txt, args);
			if (analyzed) {
				this.addProblem(
					analyzed.severity,
					analyzed.category,
					txt,
					analyzed.details,
					analyzed.typeName,
					analyzed.namespace || this.config.moduleName,
					analyzed.metadata,
				);
			}
		}

		if (!this.config.verbose) {
			return;
		}
		const formattedTxt = this.prependInfo(txt, "WARN:");
		console.warn(yellow(formattedTxt), ...args);
	}

	public debug(txt: string, ...args: unknown[]): void {
		if (!this.config.verbose) {
			return;
		}
		const formattedTxt = this.prependInfo(txt, "DEBUG:");
		console.debug(yellowBright(formattedTxt), ...args);
	}

	public error(txt: string, ...args: unknown[]): void {
		// Analyze message for specific problem types
		if (this.config.enabled) {
			const analyzed = analyzeError(txt, args);
			if (analyzed) {
				this.addProblem(
					analyzed.severity,
					analyzed.category,
					txt,
					analyzed.details,
					analyzed.typeName,
					analyzed.namespace || this.config.moduleName,
					analyzed.metadata,
				);
			}
		}

		const formattedTxt = this.prependInfo(txt, "ERROR:");
		this.danger(formattedTxt, ...args);
	}

	public success(txt: string, ...args: unknown[]): void {
		if (!this.config.verbose) {
			return;
		}
		this.log(green(txt), ...args);
	}

	public danger(txt: string, ...args: unknown[]): void {
		console.error(red(txt), ...args);
	}

	public muted(txt: string, ...args: unknown[]): void {
		this.log(gray(txt), ...args);
	}

	public white(txt: string, ...args: unknown[]): void {
		this.log(txt, ...args);
	}

	public yellow(txt: string, ...args: unknown[]): void {
		this.log(yellow(txt), ...args);
	}

	public gray(txt: string, ...args: unknown[]): void {
		this.log(gray(txt), ...args);
	}

	// === Problem-specific reporting methods ===

	public reportTypeResolutionError(typeName: string, namespace: string, message: string, details?: string): void {
		this.addProblem(
			ProblemSeverity.ERROR,
			ProblemCategory.TYPE_RESOLUTION,
			message,
			details,
			typeName,
			namespace,
			undefined,
			namespace,
		);

		if (this.config.verbose) {
			const txt = this.prependInfo(message, "ERROR:");
			console.error(red(txt));
		}
	}

	public reportTypeResolutionWarning(
		typeName: string,
		namespace: string,
		message: string,
		details?: string,
		sourceModule?: string,
	): void {
		this.addProblem(
			ProblemSeverity.WARNING,
			ProblemCategory.TYPE_RESOLUTION,
			message,
			details,
			typeName,
			namespace,
			sourceModule ? { sourceModule } : undefined,
			namespace,
		);

		if (this.config.verbose) {
			const txt = this.prependInfo(message, "WARN:");
			console.warn(yellow(txt));
		}
	}

	public reportParsingFailure(itemName: string, itemType: string, namespace: string, error: Error | string): void {
		const message = `Failed to parse ${itemType}: ${itemName}`;
		const details = error instanceof Error ? error.message : error;

		this.addProblem(ProblemSeverity.ERROR, ProblemCategory.PARSING_FAILURE, message, details, itemName, namespace, {
			itemType,
			namespace,
			error: details,
		});

		if (this.config.verbose) {
			const txt = this.prependInfo(message, "ERROR:");
			console.error(red(txt), details);
		}
	}

	public reportGenerationFailure(namespace: string, error: Error | string, context?: string): void {
		const message = `Failed to generate ${context || "namespace"}: ${namespace}`;
		const details = error instanceof Error ? error.message : error;

		this.addProblem(ProblemSeverity.ERROR, ProblemCategory.GENERATION_FAILURE, message, details, undefined, namespace, {
			namespace,
			context,
			error: details,
		});

		if (this.config.verbose) {
			const txt = this.prependInfo(message, "ERROR:");
			console.error(red(txt), details);
		}
	}

	public reportTypeConflict(conflictType: string, elementName: string, namespace: string, details?: string): void {
		const message = `Type conflict (${conflictType}): ${elementName}`;

		this.addProblem(
			ProblemSeverity.WARNING,
			ProblemCategory.TYPE_CONFLICT,
			message,
			details,
			elementName,
			namespace,
			{ conflictType },
			namespace,
		);

		if (this.config.verbose) {
			const txt = this.prependInfo(message, "WARN:");
			console.warn(yellow(txt), details || "");
		}
	}

	public reportDependencyIssue(dependencyName: string, issue: string, details?: string): void {
		const message = `Dependency issue: ${dependencyName} - ${issue}`;

		this.addProblem(
			ProblemSeverity.WARNING,
			ProblemCategory.DEPENDENCY_ISSUE,
			message,
			details,
			dependencyName,
			this.config.moduleName,
			{ dependencyName, issue },
		);

		if (this.config.verbose) {
			this.warn(message, details);
		}
	}

	// === Report generation methods ===

	public generateReport(): GenerationReport {
		const statistics = computeProblemStatistics(this.problems, this.startTime);
		const summary = generateReportSummary(statistics);

		return {
			metadata: {
				version: PACKAGE_VERSION,
				generatedAt: new Date(),
			},
			statistics,
			problems: [...this.problems],
			problemsByCategory: groupProblemsByCategory(this.problems),
			summary,
		};
	}

	public async saveReport(outputPath?: string): Promise<void> {
		if (!this.config.enabled) {
			return;
		}

		const report = this.generateReport();
		const filePath = outputPath || this.config.outputPath || "ts-for-gir-report.json";

		try {
			await writeFile(filePath, JSON.stringify(report, null, 2), "utf-8");
			if (this.config.verbose) {
				this.success(`Report saved to: ${filePath}`);
			}
		} catch (error) {
			this.danger(`Failed to save report to ${filePath}: ${error}`);
		}
	}

	public printSummary(): void {
		if (!this.config.enabled) {
			return;
		}

		const report = this.generateReport();
		const { statistics, summary } = report;

		console.log(`\n${"=".repeat(50)}`);
		console.log("📊 GENERATION REPORT SUMMARY");
		console.log("=".repeat(50));

		// Status
		const statusColor = summary.status === "partial" ? yellow : green;
		console.log(`Status: ${statusColor(summary.status.toUpperCase())}`);
		if (summary.status === "success_with_warnings") {
			console.log(green("  All issues are non-blocking. Generated types are complete."));
		}

		// Statistics
		console.log(`\n📈 Statistics:`);
		console.log(`  Total Problems: ${statistics.totalProblems}`);
		console.log(`  Duration: ${Math.round((statistics.durationMs || 0) / 1000)}s`);

		if (statistics.totalProblems > 0) {
			console.log(`\n🔍 By Severity:`);
			for (const [severity, count] of Object.entries(statistics.bySeverity)) {
				if (count > 0) {
					const color = severity === "error" || severity === "critical" ? red : severity === "warning" ? yellow : blue;
					console.log(`  ${color(severity)}: ${count}`);
				}
			}

			console.log(`\n📂 By Category:`);
			for (const [category, count] of Object.entries(statistics.byCategory)) {
				if (count > 0) {
					console.log(`  ${category.replace(/_/g, " ")}: ${count}`);
				}
			}

			// Type-specific statistics
			if (statistics.typeStatistics.commonUnresolvedTypes.length > 0) {
				console.log(`\n⚠️  Most Common Unresolved Types (produce 'never' type):`);
				statistics.typeStatistics.commonUnresolvedTypes
					.slice(0, 10)
					.forEach(({ type, count, namespaces, sourceModules }) => {
						console.log(`  ${yellow(type)}: ${count} occurrences (origin: ${namespaces.join(", ") || "unknown"})`);
						if (sourceModules.length > 0) {
							const moduleList = sourceModules.slice(0, 5).join(", ");
							const moreModules = sourceModules.length > 5 ? ` and ${sourceModules.length - 5} more` : "";
							console.log(`    └─ Referenced from: ${gray(moduleList + moreModules)}`);
						}
					});
			}

			if (statistics.typeStatistics.commonTypeConflicts.length > 0) {
				console.log(`\n⚔️  Type Conflicts:`);
				statistics.typeStatistics.commonTypeConflicts.forEach(({ conflictType, count, examples }) => {
					console.log(`  ${yellow(conflictType)}: ${count} conflicts`);
					if (examples.length > 0) {
						console.log(`    └─ Examples: ${gray(examples.join(", "))}`);
					}
				});
			}

			if (statistics.typeStatistics.problematicNamespaces.length > 0) {
				console.log(`\n📂 Namespaces with Most Warnings:`);
				statistics.typeStatistics.problematicNamespaces.slice(0, 5).forEach(({ namespace, problems, types }) => {
					console.log(`  ${namespace}: ${problems} warnings`);
					if (types.length > 0) {
						const typeList = types.slice(0, 5).join(", ");
						const moreTypes = types.length > 5 ? ` and ${types.length - 5} more` : "";
						console.log(`    └─ Types: ${gray(typeList + moreTypes)}`);
					}
				});
			}

			if (statistics.mostProblematicModules.length > 0) {
				console.log(`\n📦 Most Problematic Modules:`);
				statistics.mostProblematicModules.slice(0, 5).forEach(({ module, count }) => {
					console.log(`  ${module}: ${count} issues`);
				});
			}
		}

		// Key Issues
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

		console.log(`${"=".repeat(50)}\n`);
	}

	// === Private helper methods ===

	private static prepend(txt: string, prepend: string): string {
		if (typeof txt === "string") {
			txt = `${prepend}${txt}`;
		}
		return txt;
	}

	private prependInfo(txt: string, logLevel?: "WARN:" | "ERROR:" | "INFO:" | "DEBUG:"): string {
		if (logLevel || this.config.moduleName.length > 0) {
			txt = ConsoleReporter.prepend(txt, " ");
		}
		if (logLevel) {
			if (this.config.moduleName.length > 0) {
				txt = ConsoleReporter.prepend(txt, ` ${logLevel}`);
			} else {
				txt = ConsoleReporter.prepend(txt, logLevel);
			}
		}
		if (this.config.moduleName.length > 0) {
			txt = ConsoleReporter.prepend(txt, `[${this.config.moduleName}]`);
		}

		return txt;
	}
}
