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