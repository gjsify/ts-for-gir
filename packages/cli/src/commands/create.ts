/**
 * Everything you need for the `ts-for-gir create` command is located here
 */

import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { input, select } from "@inquirer/prompts";
import { APP_NAME, type ConfigFlags, Logger } from "@ts-for-gir/lib";

import { createOptions } from "../config.ts";
import type { CreateCommandArgs, CreateTemplateId } from "../types/index.ts";
import { createBuilder } from "./command-builder.ts";

const command = "create [name]";

const description = "Scaffold a new GJS TypeScript project from a template";

const examples: ReadonlyArray<[string, string?]> = [
	[`${APP_NAME} create my-app --template types-npm`, "Scaffold using the @girs/* NPM types"],
	[`${APP_NAME} create my-app --template types-locally`, "Scaffold and generate types into ./@types/ locally"],
	[
		`${APP_NAME} create my-app --template types-workspace`,
		"Scaffold an npm workspace with types as workspace packages",
	],
	[`${APP_NAME} create`, "Interactive: prompts for name and template"],
];

const TEMPLATE_CHOICES: ReadonlyArray<{ value: CreateTemplateId; name: string; description: string }> = [
	{
		value: "types-locally",
		name: "types-locally",
		description: "Generate GIR types directly into ./@types/ (no package format, no @girs/* deps)",
	},
	{
		value: "types-npm",
		name: "types-npm",
		description: "Use pre-generated types from the @girs/* NPM packages",
	},
	{
		value: "types-workspace",
		name: "types-workspace",
		description: "npm workspace; generate @girs/* as workspace packages under ./@girs/",
	},
];

const TEMPLATE_IDS: ReadonlyArray<CreateTemplateId> = TEMPLATE_CHOICES.map((c) => c.value);

const PROJECT_NAME_PLACEHOLDER = "__PROJECT_NAME__";

const TEXT_FILE_EXT = new Set([".json", ".md", ".ts", ".tsx", ".js", ".mjs", ".cjs"]);

const builder = createBuilder<CreateCommandArgs>(createOptions, examples);

function findTemplatesRoot(): string {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
	const candidates = [
		// Bundled production binary (bin/ts-for-gir): ../dist-templates
		resolve(__dirname, "..", "dist-templates"),
		// Source layout (src/commands/create.ts): ../../dist-templates then ../../templates
		resolve(__dirname, "..", "..", "dist-templates"),
		resolve(__dirname, "..", "..", "templates"),
	];
	for (const path of candidates) {
		if (existsSync(path)) return path;
	}
	throw new Error(
		`Could not locate templates directory. Looked in:\n  ${candidates.join("\n  ")}\n` +
			"If you are running from source, make sure packages/cli/templates/ exists. " +
			"If you are running the published CLI, make sure dist-templates/ was packed.",
	);
}

function listTemplates(templatesRoot: string): CreateTemplateId[] {
	const entries = readdirSync(templatesRoot).filter((name) => {
		const p = join(templatesRoot, name);
		return statSync(p).isDirectory();
	});
	return entries.filter((name): name is CreateTemplateId => (TEMPLATE_IDS as readonly string[]).includes(name));
}

function sanitizeProjectName(raw: string): string {
	const trimmed = raw.trim();
	if (!trimmed) throw new Error("Project name cannot be empty");
	// npm package name rules: lowercase letters, digits, dashes, underscores, dots; no leading dot/underscore
	const cleaned = trimmed
		.toLowerCase()
		.replace(/[^a-z0-9._-]+/g, "-")
		.replace(/^[._-]+/, "")
		.replace(/[._-]+$/, "");
	if (!cleaned) throw new Error(`"${raw}" is not a valid npm package name`);
	return cleaned;
}

function isDirEmpty(path: string): boolean {
	if (!existsSync(path)) return true;
	return readdirSync(path).length === 0;
}

function substituteInFile(filePath: string, projectName: string): void {
	const content = readFileSync(filePath, "utf8");
	if (!content.includes(PROJECT_NAME_PLACEHOLDER)) return;
	writeFileSync(filePath, content.replaceAll(PROJECT_NAME_PLACEHOLDER, projectName));
}

function walkAndSubstitute(rootDir: string, projectName: string): void {
	for (const entry of readdirSync(rootDir, { withFileTypes: true })) {
		const full = join(rootDir, entry.name);
		if (entry.isDirectory()) {
			if (entry.name === "node_modules") continue;
			walkAndSubstitute(full, projectName);
			continue;
		}
		if (!entry.isFile()) continue;
		const ext = entry.name.slice(entry.name.lastIndexOf("."));
		if (!TEXT_FILE_EXT.has(ext)) continue;
		substituteInFile(full, projectName);
	}
}

const handler = async (args: ConfigFlags) => {
	const a = args as unknown as CreateCommandArgs;
	const log = new Logger(a.verbose ?? false, "CreateCommand");

	const templatesRoot = findTemplatesRoot();
	const available = listTemplates(templatesRoot);
	if (available.length === 0) {
		throw new Error(`No templates found in ${templatesRoot}`);
	}

	let template: CreateTemplateId | undefined = a.template;
	if (template && !available.includes(template)) {
		throw new Error(`Unknown template "${template}". Available: ${available.join(", ")}`);
	}
	if (!template) {
		if (!process.stdin.isTTY) {
			throw new Error(`--template is required (non-TTY). Available: ${available.join(", ")}`);
		}
		template = await select<CreateTemplateId>({
			message: "Choose a template:",
			choices: TEMPLATE_CHOICES.filter((c) => available.includes(c.value)).map((c) => ({
				value: c.value,
				name: c.name,
				description: c.description,
			})),
		});
	}

	let nameRaw = a.name;
	if (!nameRaw) {
		if (!process.stdin.isTTY) {
			throw new Error("Project name is required (non-TTY). Pass it as the first positional argument.");
		}
		nameRaw = await input({
			message: "Project name:",
			default: "my-gjs-app",
			validate: (v) => (v.trim().length > 0 ? true : "Project name cannot be empty"),
		});
	}
	const projectName = sanitizeProjectName(nameRaw);

	const targetDir = resolve(process.cwd(), projectName);
	if (existsSync(targetDir) && !isDirEmpty(targetDir) && !a.force) {
		throw new Error(
			`Target directory ${targetDir} exists and is not empty. Use --force to scaffold into a non-empty directory.`,
		);
	}
	mkdirSync(targetDir, { recursive: true });

	const templateDir = join(templatesRoot, template);
	cpSync(templateDir, targetDir, { recursive: true });
	walkAndSubstitute(targetDir, projectName);

	log.success(`Scaffolded ${template} into ${targetDir}`);

	if (a.install) {
		log.info("Running npm install...");
		const result = spawnSync("npm", ["install", "--no-audit", "--no-fund"], {
			cwd: targetDir,
			stdio: "inherit",
		});
		if (result.status !== 0) {
			log.warn("npm install failed; you can re-run it manually in the project directory.");
		}
	}

	log.info("\nNext steps:");
	log.white(`  cd ${projectName}`);
	if (!a.install) log.white("  npm install");
	if (template === "types-locally") {
		log.white("  npm run generate");
		log.white("  npm run check:types");
		log.white("  npm run build && npm start");
	} else if (template === "types-npm") {
		log.white("  npm run check");
		log.white("  npm run build && npm start");
	} else if (template === "types-workspace") {
		log.white("  npm run build:types && npm install");
		log.white("  npm run build:app && npm start");
	}
};

export const create = {
	command,
	description,
	builder,
	handler,
	examples,
};
