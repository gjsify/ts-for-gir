/**
 * Everything you need for the `ts-for-gir create` command is located here
 */

import { spawnSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
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
  [
    `${APP_NAME} create my-app --template types-gjsify`,
    "Scaffold a Node-free GJS app via gjsify (recommended)",
  ],
  [
    `${APP_NAME} create my-app --template types-npm`,
    "Scaffold using the @girs/* NPM types + node/esbuild",
  ],
  [
    `${APP_NAME} create my-app --template types-locally`,
    "Scaffold and generate types into ./@types/ locally",
  ],
  [
    `${APP_NAME} create my-app --template types-workspace`,
    "Scaffold an npm workspace with types as workspace packages",
  ],
  [`${APP_NAME} create`, "Interactive: prompts for name and template"],
];

const TEMPLATE_CHOICES: ReadonlyArray<{
  value: CreateTemplateId;
  name: string;
  description: string;
}> = [
  {
    value: "types-gjsify",
    name: "types-gjsify",
    description:
      "Node-free: @girs/* from NPM, all dev scripts (install/build/run/format) routed through gjsify",
  },
  {
    value: "types-npm",
    name: "types-npm",
    description: "Use pre-generated types from the @girs/* NPM packages",
  },
  {
    value: "types-locally",
    name: "types-locally",
    description: "Generate GIR types directly into ./@types/ (no package format, no @girs/* deps)",
  },
  {
    value: "types-workspace",
    name: "types-workspace",
    description: "npm workspace; generate @girs/* as workspace packages under ./@girs/",
  },
];

const PROJECT_NAME_PLACEHOLDER = "__PROJECT_NAME__";

const TEXT_FILE_EXT = new Set([".json", ".md", ".ts", ".tsx", ".js", ".mjs", ".cjs"]);

const builder = createBuilder<CreateCommandArgs>(createOptions, examples);

function findTemplatesRoot(): string {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  // Resolve symlinks too. When the CLI is installed via `npm i -g`,
  // `gjsify install -g`, or any tool that lands a symlink in the user's PATH
  // (Yarn Berry's bin links, asdf shims, ...), `import.meta.url` resolves to
  // the symlink path — `<dir>/../dist-templates` would then look for the
  // templates next to the symlink (e.g. `~/.local/bin/../dist-templates`)
  // instead of next to the real package. Resolving via realpath first lets
  // the same `<dir>/../dist-templates` candidate hit the actual install dir.
  let realDirname = __dirname;
  try {
    realDirname = dirname(realpathSync(__filename));
  } catch {
    // `realpathSync` can throw on bundled paths that don't exist on disk
    // (e.g. virtual entries in a single-file binary). Fall through to the
    // direct __dirname — the candidate list below is a superset and will
    // still find templates when they live alongside the bundle.
  }
  const candidates = [
    // Symlink-resolved binary (`npm i -g` / `gjsify install -g`): the
    // realpath-aware candidate is required when the CLI is launched via a
    // `~/.local/bin/<name>` symlink that points at the real package's
    // `bin/<name>`. Try it first so the success path is symmetric across
    // install modes.
    resolve(realDirname, "..", "dist-templates"),
    // Bundled production binary invoked at its real path (no symlink),
    // or a tarball extracted into a flat `bin/` + `dist-templates/` layout.
    resolve(__dirname, "..", "dist-templates"),
    // Source layout (src/commands/create.ts): ../../dist-templates then ../../templates
    resolve(__dirname, "..", "..", "dist-templates"),
    resolve(__dirname, "..", "..", "templates"),
  ];
  const seen = new Set<string>();
  for (const path of candidates) {
    if (seen.has(path)) continue;
    seen.add(path);
    if (existsSync(path)) return path;
  }
  throw new Error(
    `Could not locate templates directory. Looked in:\n  ${[...seen].join("\n  ")}\n` +
      "If you are running from source, make sure packages/cli/templates/ exists. " +
      "If you are running the published CLI, make sure dist-templates/ was packed.",
  );
}

function listTemplates(templatesRoot: string): CreateTemplateId[] {
  const knownIds = TEMPLATE_CHOICES.map((c) => c.value) as readonly string[];
  return readdirSync(templatesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name): name is CreateTemplateId => knownIds.includes(name));
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

declare const __GJS_BUNDLE__: boolean | undefined;

const handler = async (args: ConfigFlags) => {
  const opts = args as unknown as CreateCommandArgs;
  const log = new Logger(opts.verbose ?? false, "CreateCommand");

  let templatesRoot: string;
  try {
    templatesRoot = findTemplatesRoot();
  } catch (err) {
    // `dist-templates/` not next to the running file. Two known scenarios:
    //   1. `install.js` (or any flow) deployed only the single-file GJS
    //      binary without the package tree. We can't scaffold without
    //      templates — point the user at the working install path.
    //   2. Source-mode mis-checkout (no `packages/cli/templates/`). Surface
    //      the original error so the developer can fix their layout.
    // The `__GJS_BUNDLE__` define lets us discriminate at build time.
    if (typeof __GJS_BUNDLE__ !== "undefined") {
      process.stderr.write(
        "The 'create' command needs templates that aren't shipped alongside this binary.\n" +
          "Install the full package instead so `dist-templates/` lives next to the bin:\n" +
          "  gjsify install -g @ts-for-gir/cli\n" +
          "  npm  install -g @ts-for-gir/cli\n" +
          "  npx  @ts-for-gir/cli create ...   # one-shot, no install\n",
      );
      process.exitCode = 1;
      return;
    }
    throw err;
  }
  const available = listTemplates(templatesRoot);
  if (available.length === 0) {
    throw new Error(`No templates found in ${templatesRoot}`);
  }

  let template: CreateTemplateId | undefined = opts.template;
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

  let nameRaw = opts.name;
  if (!nameRaw) {
    if (!process.stdin.isTTY) {
      throw new Error(
        "Project name is required (non-TTY). Pass it as the first positional argument.",
      );
    }
    nameRaw = await input({
      message: "Project name:",
      default: "my-gjs-app",
      validate: (v) => (v.trim().length > 0 ? true : "Project name cannot be empty"),
    });
  }
  const projectName = sanitizeProjectName(nameRaw);

  const targetDir = resolve(process.cwd(), projectName);
  if (existsSync(targetDir) && !isDirEmpty(targetDir) && !opts.force) {
    throw new Error(
      `Target directory ${targetDir} exists and is not empty. Use --force to scaffold into a non-empty directory.`,
    );
  }
  mkdirSync(targetDir, { recursive: true });

  const templateDir = join(templatesRoot, template);
  cpSync(templateDir, targetDir, { recursive: true });
  walkAndSubstitute(targetDir, projectName);

  log.success(`Scaffolded ${template} into ${targetDir}`);

  if (opts.install) {
    // types-gjsify is Node-free at runtime — bootstrap deps via `gjsify install`
    // so the user's first impression matches the rest of the template's scripts.
    // Other templates remain on npm (matches the prior behavior + their README).
    const installer = template === "types-gjsify" ? "gjsify" : "npm";
    const installerArgs =
      template === "types-gjsify" ? ["install"] : ["install", "--no-audit", "--no-fund"];
    log.info(`Running ${installer} install...`);
    const result = spawnSync(installer, installerArgs, {
      cwd: targetDir,
      stdio: "inherit",
    });
    if (result.status !== 0) {
      log.warn(`${installer} install failed; you can re-run it manually in the project directory.`);
    }
  }

  log.info("\nNext steps:");
  log.white(`  cd ${projectName}`);
  if (!opts.install) {
    if (template === "types-gjsify") {
      log.white("  gjsify install");
    } else {
      log.white("  npm install");
    }
  }
  switch (template) {
    case "types-locally":
      log.white("  npm run generate");
      log.white("  npm run check:types");
      log.white("  npm run build && npm start");
      break;
    case "types-npm":
      log.white("  npm run check");
      log.white("  npm run build && npm start");
      break;
    case "types-workspace":
      log.white("  npm run build:types && npm install");
      log.white("  npm run build:app && npm start");
      break;
    case "types-gjsify":
      log.white("  gjsify run check");
      log.white("  gjsify run build && gjsify run start");
      break;
  }
};

export const create = {
  command,
  description,
  builder,
  handler,
  examples,
};
