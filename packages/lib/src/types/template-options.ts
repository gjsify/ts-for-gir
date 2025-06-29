import type ejs from "ejs";

/**
 * Configuration options for template rendering
 */
export interface TemplateRenderOptions {
	/** EJS rendering options */
	ejsOptions?: Partial<ejs.Options>;
	/** Whether to include append templates */
	includeAppend?: boolean;
	/** Custom template directory override */
	templateDir?: string;
}

/**
 * Result of template loading operation
 */
export interface TemplateLoadResult {
	/** Main template content */
	prepend: string;
	/** Append template content (if exists) */
	append: string;
}

/**
 * Template file processing result
 */
export interface TemplateFileResult {
	/** The rendered template content */
	content: string;
	/** The output file path */
	outputPath: string;
} 