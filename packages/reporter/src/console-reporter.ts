/**
 * Console Reporter - A concrete implementation of ReporterBase
 * that provides console logging and comprehensive problem tracking
 */

import { writeFile } from "node:fs/promises";
import { blue, gray, green, red, yellow, yellowBright } from "colorette";
import { ReporterBase } from "./reporter-base.ts";
import type { GenerationReport, ProblemEntry, ReporterConfig, ReportStatistics } from "./types/index.ts";
import { ProblemCategory, ProblemSeverity } from "./types/index.ts";

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
			// Type resolution warnings
			if (
				txt.includes("Attempting to fall back on c:type inference") ||
				txt.includes("Falling back on c:type inference")
			) {
				const matches = txt.match(/for\s+(\w+)\.(\w+)/);
				if (matches) {
					const [, namespace, typeName] = matches;
					this.reportTypeResolutionWarning(
						typeName,
						namespace,
						txt,
						args.length > 0 ? JSON.stringify(args) : undefined,
					);
					return;
				}
			}
			// Type conflicts
			else if (txt.includes("Type conflict")) {
				const conflictMatch = txt.match(/Type conflict \((\w+)\):\s*(\w+)/);
				if (conflictMatch) {
					const [, conflictType, elementName] = conflictMatch;
					const detailsMatch = txt.match(/Conflict with (.+)$/);
					const details = detailsMatch ? detailsMatch[1] : undefined;
					this.reportTypeConflict(conflictType, elementName, this.config.moduleName, details);
					return;
				}
			}

			// Fall back to general warning
			this.addProblem(
				ProblemSeverity.WARNING,
				ProblemCategory.GENERAL,
				txt,
				args.length > 0 ? JSON.stringify(args) : undefined,
			);
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
			// Type resolution errors
			if (txt.includes("Unable to resolve type") || txt.includes("could not be resolved")) {
				const unresolvedMatch = txt.match(/Unable to resolve type (\w+) in same namespace (\w+)!/);
				if (unresolvedMatch) {
					const [, typeName, namespace] = unresolvedMatch;
					this.reportTypeResolutionError(typeName, namespace, txt, args.length > 0 ? JSON.stringify(args) : undefined);
					return;
				}

				const couldNotResolveMatch = txt.match(/Type (\w+) could not be resolved in (\w+)/);
				if (couldNotResolveMatch) {
					const [, typeName, context] = couldNotResolveMatch;
					const namespaceMatch = context.match(/(\w+)\s+[\d.]+/);
					const namespace = namespaceMatch ? namespaceMatch[1] : context;
					this.reportTypeResolutionError(typeName, namespace, txt, args.length > 0 ? JSON.stringify(args) : undefined);
					return;
				}
			}
			// Parsing failures
			else if (txt.includes("Failed to parse")) {
				const parseMatch = txt.match(/Failed to parse (\w+):\s*(.+)/);
				if (parseMatch) {
					const [, itemType, itemName] = parseMatch;
					this.reportParsingFailure(
						itemName,
						itemType,
						this.config.moduleName,
						args.length > 0 ? String(args[0]) : txt,
					);
					return;
				}
			}
			// Generation failures
			else if (txt.includes("Failed to generate")) {
				const genMatch = txt.match(/Failed to generate (.+):\s*(.+)/);
				if (genMatch) {
					const [, context, namespace] = genMatch;
					this.reportGenerationFailure(namespace, args.length > 0 ? String(args[0]) : txt, context);
					return;
				}
			}

			// Fall back to general error
			this.addProblem(
				ProblemSeverity.ERROR,
				ProblemCategory.GENERAL,
				txt,
				args.length > 0 ? JSON.stringify(args) : undefined,
			);
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
		this.addProblem(ProblemSeverity.ERROR, ProblemCategory.TYPE_RESOLUTION, message, details, typeName, namespace, {
			namespace,
			typeName,
		});

		if (this.config.verbose) {
			const txt = this.prependInfo(message, "ERROR:");
			console.error(red(txt));
		}
	}

	public reportTypeResolutionWarning(typeName: string, namespace: string, message: string, details?: string): void {
		this.addProblem(ProblemSeverity.WARNING, ProblemCategory.TYPE_RESOLUTION, message, details, typeName, namespace, {
			namespace,
			typeName,
		});

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

		this.addProblem(ProblemSeverity.WARNING, ProblemCategory.TYPE_CONFLICT, message, details, elementName, namespace, {
			conflictType,
			namespace,
		});

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

	private generateStatistics(): ReportStatistics {
		const bySeverity = Object.values(ProblemSeverity).reduce(
			(acc, severity) => {
				acc[severity] = 0;
				return acc;
			},
			{} as Record<ProblemSeverity, number>,
		);

		const byCategory = Object.values(ProblemCategory).reduce(
			(acc, category) => {
				acc[category] = 0;
				return acc;
			},
			{} as Record<ProblemCategory, number>,
		);

		const byModule: Record<string, number> = {};

		// Type-specific tracking
		const unresolvedTypes: Record<string, { count: number; namespaces: Set<string> }> = {};
		const typeConflicts: Record<string, { count: number; examples: Set<string> }> = {};
		const namespaceProblems: Record<string, { count: number; types: Set<string> }> = {};

		for (const problem of this.problems) {
			bySeverity[problem.severity]++;
			byCategory[problem.category]++;
			byModule[problem.module] = (byModule[problem.module] || 0) + 1;

			// Track type resolution problems
			if (problem.category === ProblemCategory.TYPE_RESOLUTION && problem.typeName) {
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

		const endTime = new Date();
		const durationMs = endTime.getTime() - this.startTime.getTime();

		return {
			bySeverity,
			byCategory,
			byModule,
			totalProblems: this.problems.length,
			mostProblematicModules,
			typeStatistics: {
				commonUnresolvedTypes,
				commonTypeConflicts,
				problematicNamespaces,
			},
			startTime: this.startTime,
			endTime,
			durationMs,
		};
	}

	private generateSummary(statistics: ReportStatistics): GenerationReport["summary"] {
		const { bySeverity, byCategory, totalProblems } = statistics;

		let status: "success" | "partial" | "failed" = "success";
		if (bySeverity[ProblemSeverity.CRITICAL] > 0 || bySeverity[ProblemSeverity.ERROR] > 10) {
			status = "failed";
		} else if (bySeverity[ProblemSeverity.ERROR] > 0 || bySeverity[ProblemSeverity.WARNING] > 20) {
			status = "partial";
		}

		const keyIssues: string[] = [];
		const recommendations: string[] = [];

		// Analyze key issues
		if (byCategory[ProblemCategory.TYPE_RESOLUTION] > 0) {
			keyIssues.push(`${byCategory[ProblemCategory.TYPE_RESOLUTION]} type resolution issues detected`);
			recommendations.push("Review GIR files for missing or incorrect type definitions");
		}

		if (byCategory[ProblemCategory.PARSING_FAILURE] > 0) {
			keyIssues.push(`${byCategory[ProblemCategory.PARSING_FAILURE]} parsing failures occurred`);
			recommendations.push("Check GIR file syntax and ensure proper introspection data");
		}

		if (byCategory[ProblemCategory.GENERATION_FAILURE] > 0) {
			keyIssues.push(`${byCategory[ProblemCategory.GENERATION_FAILURE]} generation failures encountered`);
			recommendations.push("Review template configuration and output settings");
		}

		if (byCategory[ProblemCategory.TYPE_CONFLICT] > 5) {
			keyIssues.push(`High number of type conflicts (${byCategory[ProblemCategory.TYPE_CONFLICT]})`);
			recommendations.push("Consider using ignore patterns or updating GIR files to resolve conflicts");
		}

		if (keyIssues.length === 0 && totalProblems > 0) {
			keyIssues.push(`${totalProblems} minor issues detected`);
		}

		if (recommendations.length === 0 && totalProblems > 0) {
			recommendations.push("Review detailed problem list for specific improvement opportunities");
		}

		return {
			status,
			keyIssues,
			recommendations,
		};
	}

	public generateReport(): GenerationReport {
		const statistics = this.generateStatistics();
		const summary = this.generateSummary(statistics);

		const problemsByCategory = Object.values(ProblemCategory).reduce(
			(acc, category) => {
				acc[category] = [];
				return acc;
			},
			{} as Record<ProblemCategory, ProblemEntry[]>,
		);

		for (const problem of this.problems) {
			problemsByCategory[problem.category].push(problem);
		}

		return {
			metadata: {
				version: "1.0.0",
				generatedAt: new Date(),
				reporterVersion: "1.0.0",
			},
			statistics,
			problems: [...this.problems],
			problemsByCategory,
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
		const statusColor = summary.status === "success" ? green : summary.status === "partial" ? yellow : red;
		console.log(`Status: ${statusColor(summary.status.toUpperCase())}`);

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
				console.log(`\n❌ Most Common Unresolved Types:`);
				statistics.typeStatistics.commonUnresolvedTypes.slice(0, 10).forEach(({ type, count, namespaces }) => {
					console.log(`  ${red(type)}: ${count} occurrences in ${namespaces.length} namespace(s)`);
					if (namespaces.length <= 3) {
						console.log(`    └─ ${gray(namespaces.join(", "))}`);
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
				console.log(`\n🚨 Most Problematic Namespaces:`);
				statistics.typeStatistics.problematicNamespaces.slice(0, 5).forEach(({ namespace, problems, types }) => {
					console.log(`  ${namespace}: ${problems} problems`);
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
			summary.keyIssues.forEach((issue) => console.log(`  • ${issue}`));
		}

		// Recommendations
		if (summary.recommendations.length > 0) {
			console.log(`\n💡 Recommendations:`);
			summary.recommendations.forEach((rec) => console.log(`  • ${rec}`));
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
