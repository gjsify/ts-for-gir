/**
 * The TemplateProcessor is used generate strings from templates files or template strings
 * For example, the signal methods are generated here
 */

import { dirname, join, relative } from "node:path";
import type { Dependency, OptionsGeneration, TemplateData } from "@ts-for-gir/lib";
import {
	APP_NAME,
	APP_SOURCE,
	APP_USAGE,
	APP_VERSION,
	DependencyManager,
	type NSRegistry,
	PACKAGE_DESC,
	PACKAGE_KEYWORDS,
	Reporter,
	ReporterService,
	TemplateEngine,
	transformImportName,
} from "@ts-for-gir/lib";
import type ejs from "ejs";

export class TemplateProcessor extends TemplateEngine {
	protected readonly data: TemplateData;
	protected readonly packageName: string;
	protected readonly registry: NSRegistry;
	protected readonly deps: Dependency[];
	protected readonly config: OptionsGeneration;

	constructor(
		data: TemplateData | undefined,
		packageName: string,
		registry: NSRegistry,
		deps: Dependency[],
		config: OptionsGeneration,
	) {
		super(); // Initialize TemplateEngine
		this.packageName = packageName;
		this.registry = registry;
		this.deps = deps;
		this.config = config;

		const dep = DependencyManager.getInstance(config);
		let outdir = config.outdir || "./";
		// Make outdir relative to the root directory
		outdir = relative(config.root, outdir);
		const typeDir = outdir;

		this.data = {
			...data,
			APP_NAME,
			APP_USAGE,
			APP_SOURCE,
			APP_VERSION,
			PACKAGE_DESC: PACKAGE_DESC(packageName, data?.girModule?.libraryVersion),
			PACKAGE_KEYWORDS: PACKAGE_KEYWORDS(packageName),
			importName: transformImportName(packageName),
			dep,
			deps,
			typeDir,
			join,
			dirname,
			...this.config,
			packageName: this.packageName,
		};
		this.log = new Reporter(
			config.verbose,
			`TemplateProcessor (${this.packageName})`,
			config.reporter,
			config.reporterOutput,
		);

		// Register with reporter service if reporting is enabled
		if (config.reporter) {
			const reporterService = ReporterService.getInstance();
			reporterService.registerReporter(`TemplateProcessor(${packageName})`, this.log);
		}
	}

	/**
	 * Loads and renders a template and gets the rendered templates back
	 * @param templateFilename
	 * @param ejsOptions EJS options
	 * @param overrideTemplateData Override template data if you want
	 */
	public async load(
		templateFilename: string,
		ejsOptions: Partial<ejs.Options> = {},
		overrideTemplateData: TemplateData = {},
	): Promise<{ prepend: string; append: string }> {
		const mergedData = { ...this.data, ...overrideTemplateData };
		return super.load(templateFilename, mergedData, ejsOptions);
	}

	/**
	 * Loads and renders all templates in a directory and gets the rendered templates back
	 * @param templateDirname
	 * @param fileExtension
	 * @param ejsOptions EJS options
	 * @param overrideTemplateData Override template data if you want
	 * @returns The rendered templates
	 */
	public async loadAll(
		templateDirname: string,
		fileExtension: string,
		ejsOptions: Partial<ejs.Options> = {},
		overrideTemplateData: TemplateData = {},
	): Promise<{ [path: string]: string }> {
		const mergedData = { ...this.data, ...overrideTemplateData };
		return super.loadAll(templateDirname, fileExtension, mergedData, ejsOptions);
	}

	/**
	 * Loads an template, render the template and write the template to the filesystem
	 * @param templateFilename The filename of the template
	 * @param baseOutputPath The base output directory path where the templates should be written to
	 * @param outputFilename The filename of the output file
	 * @param content A (optional) string that should be appended to the rendered template
	 * @param ejsOptions EJS options
	 * @param overrideTemplateData Override template data if you want
	 * @return The rendered template string
	 */
	public async create(
		templateFilename: string,
		baseOutputPath: string,
		outputFilename: string,
		content = "",
		ejsOptions: Partial<ejs.Options> = {},
		overrideTemplateData: TemplateData = {},
	): Promise<string> {
		const { prepend, append } = await this.load(templateFilename, ejsOptions, overrideTemplateData);
		const code = `${prepend}\n${content}\n${append}`;
		await this.write(code, baseOutputPath, outputFilename);
		return code;
	}

	/**
	 * Loads all templates with file extension in dir, render the templates and write the template to the filesystem
	 * @param fileExtension The file extension of the templates
	 * @param templateDirname The directory where the templates are located
	 * @param baseOutputPath The base output directory path where the templates should be written to
	 * @param outputDirname The child output directory of the base output directory where the templates should be written to
	 * @param append A (optional) string that should be appended to the rendered template
	 * @param ejsOptions EJS options
	 * @param overrideTemplateData Override template data if you want
	 * @return The rendered (and if possible prettified) templates
	 */
	public async createAll(
		fileExtension: string,
		templateDirname: string,
		baseOutputPath: string,
		outputDirname: string,
		append = "",
		ejsOptions: Partial<ejs.Options> = {},
		overrideTemplateData: TemplateData = {},
	) {
		const rendered = await this.loadAll(templateDirname, fileExtension, ejsOptions, overrideTemplateData);
		const result: { [path: string]: string } = {};
		for (const filename of Object.keys(rendered)) {
			const destPath = join(baseOutputPath, outputDirname, filename);
			result[destPath] = `${rendered[filename]}\n${append}`;
			await this.write(result[destPath], baseOutputPath, join(outputDirname, filename));
		}

		return result;
	}

	/**
	 * Gets the output path for a file based on package configuration
	 * This is TypeScript-specific logic for handling package.json mode
	 */
	public getOutputPath(baseOutputPath: string, outputFilename: string): string {
		// Create a directory for each package if package.json mode is enabled otherwise use the output directory directly
		const filePath = this.config.package
			? join(this.data?.importName || this.packageName, outputFilename)
			: outputFilename;
		const outputPath = join(baseOutputPath, filePath);
		return outputPath;
	}

	/**
	 * Writes (and optionally formats) the `content` to the filesystem
	 * Includes TypeScript-specific formatting logic
	 * @param content The content (normally the content of a rendered template file) that should be written to the filesystem
	 * @param baseOutputPath The base output directory path where the templates should be written to
	 * @param outputFilename The filename of the output file
	 * @returns
	 */
	public async write(content: string, baseOutputPath: string, outputFilename: string): Promise<string> {
		const outputPath = this.getOutputPath(baseOutputPath, outputFilename);

		// TypeScript-specific formatting logic
		if (!this.config.noPrettyPrint) {
			try {
				if (outputFilename.endsWith(".d.ts")) {
					this.log.info("Formatting", outputPath);
					content = await this.registry.getFormatter("dts").format(content);
				}
				// TODO: Fix me
				// if (outputFilename.endsWith('.json')) {
				//     this.log.info('Formatting', outputPath)
				//     content = await this.registry.getFormatter('json').format(content)
				// }
			} catch (error) {
				this.log.error("Failed to format output...", error);
			}
		}

		// Use the base class writeFile method
		return super.writeFile(content, outputPath);
	}
}

export default TemplateProcessor;
