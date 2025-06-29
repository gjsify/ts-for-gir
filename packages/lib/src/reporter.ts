/**
 * A reporter that tracks generation problems and creates comprehensive reports.
 * Replaces the Logger with extended functionality for problem tracking and analysis.
 */

import { writeFile } from "node:fs/promises";
import { blue, gray, green, red, yellow, yellowBright } from "colorette";

/**
 * Problem severity levels
 */
export enum ProblemSeverity {
	DEBUG = "debug",
	INFO = "info",
	WARNING = "warning",
	ERROR = "error",
	CRITICAL = "critical",
}

/**
 * Problem categories for better organization
 */
export enum ProblemCategory {
	TYPE_RESOLUTION = "type_resolution",
	PARSING_FAILURE = "parsing_failure",
	GENERATION_FAILURE = "generation_failure",
	TYPE_CONFLICT = "type_conflict",
	DEPENDENCY_ISSUE = "dependency_issue",
	CONFIGURATION = "configuration",
	IO_ERROR = "io_error",
	GENERAL = "general",
}

/**
 * Individual problem entry
 */
export interface ProblemEntry {
	/** Unique identifier for this problem instance */
	id: string;
	/** Problem severity level */
	severity: ProblemSeverity;
	/** Problem category */
	category: ProblemCategory;
	/** Module/namespace where the problem occurred */
	module: string;
	/** Brief problem description */
	message: string;
	/** Detailed description or context */
	details?: string;
	/** Related type name (if applicable) */
	typeName?: string;
	/** Source location or context */
	location?: string;
	/** Timestamp when the problem occurred */
	timestamp: Date;
	/** Additional metadata */
	metadata?: Record<string, unknown>;
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

/**
 * Reporter configuration
 */
export interface ReporterConfig {
	/** Enable reporter functionality */
	enabled: boolean;
	/** Enable verbose logging to console */
	verbose: boolean;
	/** Module name for this reporter instance */
	moduleName: string;
	/** Output file path for the report */
	outputPath?: string;
}

/**
 * Reporter class that replaces Logger with problem tracking capabilities
 */
export class Reporter {
	private readonly config: ReporterConfig;
	private readonly problems: ProblemEntry[] = [];
	private readonly startTime: Date = new Date();
	private problemIdCounter = 0;

	constructor(config: ReporterConfig);
	constructor(verbose: boolean, moduleName: string, reporterEnabled?: boolean, outputPath?: string);
	constructor(
		configOrVerbose: ReporterConfig | boolean,
		moduleName?: string,
		reporterEnabled = false,
		outputPath?: string,
	) {
		if (typeof configOrVerbose === "boolean") {
			// Legacy Logger constructor compatibility
			this.config = {
				enabled: reporterEnabled,
				verbose: configOrVerbose,
				moduleName: moduleName || "Unknown",
				outputPath,
			};
		} else {
			this.config = configOrVerbose;
		}
	}

	/**
	 * Generate a unique problem ID
	 */
	private generateProblemId(): string {
		return `${this.config.moduleName}_${Date.now()}_${++this.problemIdCounter}`;
	}

	/**
	 * Add a problem to the report
	 */
	private addProblem(
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
	 * Log a general message (Logger compatibility)
	 */
	public log(...args: unknown[]): void {
		if (!this.config.verbose) {
			return;
		}
		console.log(...args);
	}

	/**
	 * Log detailed object inspection (Logger compatibility)
	 */
	public dir(...args: unknown[]): void {
		if (!this.config.verbose) {
			return;
		}
		args.forEach((arg) => {
			console.dir(arg);
		});
	}

	/**
	 * Log an info message
	 */
	public info(txt: string, ...args: unknown[]): void {
		if (this.config.enabled) {
			this.addProblem(
				ProblemSeverity.INFO,
				ProblemCategory.GENERAL,
				txt,
				args.length > 0 ? JSON.stringify(args) : undefined,
			);
		}

		if (!this.config.verbose) {
			return;
		}
		console.info(blue(txt), ...args);
	}

	/**
	 * Log a warning message
	 */
	public warn(txt: string, ...args: unknown[]): void {
		if (this.config.enabled) {
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
		txt = this.prependInfo(txt, "WARN:");
		console.warn(yellow(txt), ...args);
	}

	/**
	 * Log a debug message
	 */
	public debug(txt: string, ...args: unknown[]): void {
		if (this.config.enabled) {
			this.addProblem(
				ProblemSeverity.DEBUG,
				ProblemCategory.GENERAL,
				txt,
				args.length > 0 ? JSON.stringify(args) : undefined,
			);
		}

		if (!this.config.verbose) {
			return;
		}
		txt = this.prependInfo(txt, "DEBUG:");
		console.debug(yellowBright(txt), ...args);
	}

	/**
	 * Log an error message
	 */
	public error(txt: string, ...args: unknown[]): void {
		if (this.config.enabled) {
			this.addProblem(
				ProblemSeverity.ERROR,
				ProblemCategory.GENERAL,
				txt,
				args.length > 0 ? JSON.stringify(args) : undefined,
			);
		}

		txt = this.prependInfo(txt, "ERROR:");
		this.danger(txt, ...args);
	}

	/**
	 * Log a success message
	 */
	public success(txt: string, ...args: unknown[]): void {
		if (!this.config.verbose) {
			return;
		}
		this.log(green(txt), ...args);
	}

	/**
	 * Log a critical error message (always shown)
	 */
	public danger(txt: string, ...args: unknown[]): void {
		console.error(red(txt), ...args);
	}

	/**
	 * Log a muted message
	 */
	public muted(txt: string, ...args: unknown[]): void {
		this.log(gray(txt), ...args);
	}

	/**
	 * Log a white message
	 */
	public white(txt: string, ...args: unknown[]): void {
		this.log(txt, ...args);
	}

	/**
	 * Log a yellow message
	 */
	public yellow(txt: string, ...args: unknown[]): void {
		this.log(yellow(txt), ...args);
	}

	/**
	 * Log a gray message
	 */
	public gray(txt: string, ...args: unknown[]): void {
		this.log(gray(txt), ...args);
	}

	// === Problem-specific reporting methods ===

	/**
	 * Report a type resolution problem
	 */
	public reportTypeResolutionError(typeName: string, namespace: string, message: string, details?: string): void {
		this.addProblem(ProblemSeverity.ERROR, ProblemCategory.TYPE_RESOLUTION, message, details, typeName, namespace, {
			namespace,
			typeName,
		});

		if (this.config.verbose) {
			this.error(message);
		}
	}

	/**
	 * Report a type resolution warning (fallback cases)
	 */
	public reportTypeResolutionWarning(typeName: string, namespace: string, message: string, details?: string): void {
		this.addProblem(ProblemSeverity.WARNING, ProblemCategory.TYPE_RESOLUTION, message, details, typeName, namespace, {
			namespace,
			typeName,
		});

		if (this.config.verbose) {
			this.warn(message);
		}
	}

	/**
	 * Report a parsing failure
	 */
	public reportParsingFailure(itemName: string, itemType: string, namespace: string, error: Error | string): void {
		const message = `Failed to parse ${itemType}: ${itemName}`;
		const details = error instanceof Error ? error.message : error;

		this.addProblem(ProblemSeverity.ERROR, ProblemCategory.PARSING_FAILURE, message, details, itemName, namespace, {
			itemType,
			namespace,
			error: details,
		});

		if (this.config.verbose) {
			this.error(message, details);
		}
	}

	/**
	 * Report a generation failure
	 */
	public reportGenerationFailure(namespace: string, error: Error | string, context?: string): void {
		const message = `Failed to generate ${context || "namespace"}: ${namespace}`;
		const details = error instanceof Error ? error.message : error;

		this.addProblem(ProblemSeverity.ERROR, ProblemCategory.GENERATION_FAILURE, message, details, undefined, namespace, {
			namespace,
			context,
			error: details,
		});

		if (this.config.verbose) {
			this.error(message, details);
		}
	}

	/**
	 * Report a type conflict
	 */
	public reportTypeConflict(conflictType: string, elementName: string, namespace: string, details?: string): void {
		const message = `Type conflict (${conflictType}): ${elementName}`;

		this.addProblem(ProblemSeverity.WARNING, ProblemCategory.TYPE_CONFLICT, message, details, elementName, namespace, {
			conflictType,
			namespace,
		});

		if (this.config.verbose) {
			this.warn(message, details);
		}
	}

	/**
	 * Report a dependency issue
	 */
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

	/**
	 * Generate comprehensive statistics
	 */
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

		for (const problem of this.problems) {
			bySeverity[problem.severity]++;
			byCategory[problem.category]++;
			byModule[problem.module] = (byModule[problem.module] || 0) + 1;
		}

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
			startTime: this.startTime,
			endTime,
			durationMs,
		};
	}

	/**
	 * Generate summary and recommendations
	 */
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

	/**
	 * Generate a comprehensive report
	 */
	public generateReport(): GenerationReport {
		const statistics = this.generateStatistics();
		const summary = this.generateSummary(statistics);

		return {
			metadata: {
				version: "1.0.0",
				generatedAt: new Date(),
				reporterVersion: "1.0.0",
			},
			statistics,
			problems: [...this.problems],
			summary,
		};
	}

	/**
	 * Save the report to a file
	 */
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

	/**
	 * Print a summary to console
	 */
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

			if (statistics.mostProblematicModules.length > 0) {
				console.log(`\n🚨 Most Problematic Modules:`);
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

	// === Private helper methods (for Logger compatibility) ===

	private static prepend(txt: string, prepend: string): string {
		if (typeof txt === "string") {
			txt = `${prepend}${txt}`;
		}
		return txt;
	}

	private prependInfo(txt: string, logLevel?: "WARN:" | "ERROR:" | "INFO:" | "DEBUG:"): string {
		if (logLevel || this.config.moduleName.length > 0) {
			txt = Reporter.prepend(txt, " ");
		}
		if (logLevel) {
			if (this.config.moduleName.length > 0) {
				txt = Reporter.prepend(txt, ` ${logLevel}`);
			} else {
				txt = Reporter.prepend(txt, logLevel);
			}
		}
		if (this.config.moduleName.length > 0) {
			txt = Reporter.prepend(txt, `[${this.config.moduleName}]`);
		}

		return txt;
	}
}
