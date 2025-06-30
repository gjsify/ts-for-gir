// Backwards compatibility export - alias ConsoleReporter as Reporter
export { ConsoleReporter, ConsoleReporter as Reporter } from "./console-reporter.ts";
export type { AnalyzedMessage } from "./message-analyzer.ts";
export { analyzeError, analyzeWarning } from "./message-analyzer.ts";
export { ReporterBase } from "./reporter-base.ts";
export { ReporterService } from "./reporter-service.ts";
export * from "./types/index.ts";
