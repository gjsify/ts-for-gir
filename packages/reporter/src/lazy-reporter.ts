import { ConsoleReporter } from "./console-reporter.ts";
import { ReporterService } from "./reporter-service.ts";

/**
 * A lazily-initialized reporter that auto-registers with ReporterService.
 * Consolidates the repeated lazy-init + configure pattern used across the codebase.
 */
export class LazyReporter {
	private config = { enabled: false, output: "ts-for-gir-report.json" };
	private instance: ConsoleReporter | null = null;

	constructor(private readonly name: string) {}

	configure(enabled: boolean, output = "ts-for-gir-report.json"): void {
		this.config = { enabled, output };
		this.instance = null;

		if (enabled) {
			this.instance = new ConsoleReporter(true, this.name, enabled, output);
			ReporterService.getInstance().registerReporter(this.name, this.instance);
		}
	}

	get(): ConsoleReporter {
		if (!this.instance) {
			const { enabled, output } = this.config;
			this.instance = new ConsoleReporter(true, this.name, enabled, output);

			if (enabled) {
				ReporterService.getInstance().registerReporter(this.name, this.instance);
			}
		}
		return this.instance;
	}
}
