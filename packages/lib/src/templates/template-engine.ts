import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, extname, join, resolve } from "node:path";
import ejs from "ejs";

import { fileExists, Logger } from "../index.ts";
import type { TemplateData } from "../types/index.ts";

const require = createRequire(import.meta.url);

/**
 * Core template engine for rendering EJS templates
 * This is a generic utility that can be used by different generators
 */
export class TemplateEngine {
	// Populated at startup by registerEmbedded(). Templates are read by names
	// computed at runtime, so they cannot be inlined statically by the gjsify
	// build-time `readFileSync` rewriter — they must be embedded as a map
	// instead. Empty in dev mode, where `resolveTemplateDirectory()` finds the
	// @ts-for-gir/templates package on the filesystem.
	private static _embedded: Record<string, string> = {};

	static registerEmbedded(templates: Record<string, string>): void {
		TemplateEngine._embedded = templates;
	}

	protected log: Logger;
	protected readonly templateDir: string;

	constructor(templateDir?: string) {
		this.templateDir = templateDir ?? this.resolveTemplateDirectory();
		this.log = new Logger(false, "TemplateEngine");
	}

	/**
	 * Resolves the templates directory from the @ts-for-gir/templates package.
	 * Used as filesystem fallback when no embedded templates are registered (dev mode).
	 */
	private resolveTemplateDirectory(): string {
		try {
			return join(dirname(require.resolve("@ts-for-gir/templates/package.json")), "templates");
		} catch (_error) {
			// Fallback for workspace development setup
			return resolve(process.cwd(), "../../templates/templates");
		}
	}

	/**
	 * Gets the append template name for a given template filename
	 */
	protected getAppendTemplateName(templateFilename: string): string {
		let appendTemplateFilename = templateFilename;

		if (appendTemplateFilename.endsWith(".d.ts")) {
			appendTemplateFilename = appendTemplateFilename.replace(".d.ts", ".append.d.ts");
		} else if (extname(appendTemplateFilename)) {
			const ext = extname(appendTemplateFilename);
			appendTemplateFilename = appendTemplateFilename.replace(ext, `.append${ext}`);
		} else {
			appendTemplateFilename += ".append";
		}
		return appendTemplateFilename;
	}

	/**
	 * Checks if the template file or directory exists and returns the path if found.
	 * Checks embedded templates first, then the filesystem.
	 */
	public async exists(templateFilename: string): Promise<string | null> {
		const key = templateFilename.replace(/\\/g, "/");
		if (key in TemplateEngine._embedded) {
			return `__embedded__/${key}`;
		}
		// For directory lookups: check if any embedded key starts with "dir/"
		if (Object.keys(TemplateEngine._embedded).some((k) => k.startsWith(`${key}/`))) {
			return `__embedded__/${key}`;
		}
		const fullTemplatePath = join(this.templateDir, templateFilename);
		if (await fileExists(fullTemplatePath)) {
			return fullTemplatePath;
		}
		return null;
	}

	/**
	 * Removes TypeScript directive comments from the first line of a template
	 */
	protected removeTypeScriptDirectives(content: string): string {
		const lines = content.split("\n");
		if (lines.length > 0 && (lines[0].includes("// @ts-nocheck") || lines[0].includes("// @ts-ignore"))) {
			lines.shift(); // Remove the first line
			return lines.join("\n");
		}
		return content;
	}

	/**
	 * Reads a template file and gets the raw string back.
	 * Returns from embedded templates if available, otherwise reads from filesystem.
	 */
	protected async read(templateFilename: string): Promise<string> {
		const key = templateFilename.replace(/\\/g, "/");
		if (key in TemplateEngine._embedded) {
			return this.removeTypeScriptDirectives(TemplateEngine._embedded[key]);
		}
		const path = await this.exists(templateFilename);
		if (path) {
			const content = await readFile(path, "utf8");
			return this.removeTypeScriptDirectives(content);
		}
		throw new Error(`Template '${path || templateFilename}' not found'`);
	}

	/**
	 * Reads all template files from a directory and gets the raw strings back.
	 * Returns from embedded templates if available, otherwise reads from filesystem.
	 */
	protected async readAll(templateDirname: string, fileExtension: string): Promise<{ [path: string]: string }> {
		const prefix = templateDirname.replace(/\\/g, "/") + "/";
		const embeddedKeys = Object.keys(TemplateEngine._embedded).filter(
			(k) => k.startsWith(prefix) && k.endsWith(fileExtension),
		);
		if (embeddedKeys.length > 0) {
			const results: { [path: string]: string } = {};
			for (const key of embeddedKeys) {
				const filename = key.slice(prefix.length);
				results[filename] = this.removeTypeScriptDirectives(TemplateEngine._embedded[key]);
			}
			return results;
		}
		const path = await this.exists(templateDirname);
		if (path) {
			const files = (await readdir(path)).filter((file) => file.endsWith(fileExtension));
			if (files.length === 0) {
				throw new Error(`Template directory '${templateDirname}' is empty'`);
			}
			const results: { [path: string]: string } = {};
			for (const file of files) {
				const content = await readFile(join(path, file), "utf8");
				results[file] = this.removeTypeScriptDirectives(content);
			}
			return results;
		}
		throw new Error(`Template directory '${templateDirname}' not found'`);
	}

	/**
	 * Renders a template string with the given data and options
	 */
	protected async render(
		templateString: string,
		data: TemplateData,
		options: Partial<ejs.Options> = {},
	): Promise<string> {
		try {
			const renderedTpl = await ejs.render(templateString, data, {
				async: true,
				...options,
			});
			return renderedTpl;
		} catch (error) {
			this.log.error(`Error on render "${templateString}":`, error);
			throw error;
		}
	}

	/**
	 * Loads and renders a template and gets the rendered templates back
	 */
	public async load(
		templateFilename: string,
		data: TemplateData,
		ejsOptions: Partial<ejs.Options> = {},
	): Promise<{ prepend: string; append: string }> {
		const fileContent = await this.read(templateFilename);
		const prepend = await this.render(fileContent, data, ejsOptions);
		let append = "";

		const appendTemplateFilename = this.getAppendTemplateName(templateFilename);
		if (await this.exists(appendTemplateFilename)) {
			const appendFileContent = await this.read(appendTemplateFilename);
			append = await this.render(appendFileContent, data, ejsOptions);
		}

		return { prepend, append };
	}

	/**
	 * Loads and renders all templates in a directory and gets the rendered templates back
	 */
	public async loadAll(
		templateDirname: string,
		fileExtension: string,
		data: TemplateData,
		ejsOptions: Partial<ejs.Options> = {},
	): Promise<{ [path: string]: string }> {
		const fileContents = await this.readAll(templateDirname, fileExtension);
		for (const file of Object.keys(fileContents)) {
			fileContents[file] = await this.render(fileContents[file], data, ejsOptions);
		}
		return fileContents;
	}

	/**
	 * Writes content to the filesystem
	 */
	public async writeFile(content: string, outputPath: string): Promise<string> {
		this.log.info("Writing to", outputPath);

		// write template result file
		await mkdir(dirname(outputPath), { recursive: true });
		await writeFile(outputPath, content, { encoding: "utf8", flag: "w" });

		return Promise.resolve(outputPath);
	}
} 