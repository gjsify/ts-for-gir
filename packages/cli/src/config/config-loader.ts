/**
 * Config loader functionality for ts-for-gir
 */

import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type {
  ConfigFlags,
  OptionsGeneration,
  UserConfig,
  UserConfigLoadResult,
} from "@ts-for-gir/lib";
import { APP_NAME, isEqual } from "@ts-for-gir/lib";
import { type Options as ConfigSearchOptions, cosmiconfig } from "cosmiconfig";
import { setConfigFilePath } from "./config-writer.ts";
import { defaults } from "./defaults.ts";
import { docOptions, options } from "./options.ts";

/**
 * The user can create a `.ts-for-girrc` file for his default configs,
 * this method load this config file an returns the user configuration
 * @param configName If the user uses a custom config file name
 */
export async function loadConfigFile(configName?: string): Promise<UserConfigLoadResult | null> {
  const configSearchOptions: Partial<ConfigSearchOptions> = {
    loaders: {
      // ESM loader. cosmiconfig hands us an absolute filesystem path; Node's import()
      // tolerates that as a non-spec extension, but spec-compliant runtimes (GJS /
      // SpiderMonkey) reject it with "Module not found: <abs-path>". Convert to a
      // file:// URL so the loader works in both runtimes.
      ".js": async (filepath) => {
        const file = await import(pathToFileURL(filepath).href);

        // Files with `exports.default = { ... }`
        if (file?.default?.default) {
          return file.default.default as Partial<UserConfig>;
        }
        // Files with `export default { ... }`
        if (file?.default) {
          return file.default as Partial<UserConfig>;
        }
        // Files with `export { ... }`
        return file as Partial<UserConfig>;
      },
    },
  };

  if (configName) {
    configSearchOptions.searchPlaces = [configName];
  }

  const configFile: UserConfigLoadResult | null = await cosmiconfig(
    APP_NAME,
    configSearchOptions,
  ).search();

  if (configFile?.filepath) {
    setConfigFilePath(configFile.filepath);
  }

  return configFile;
}

/**
 * Convert UserConfig to OptionsGeneration
 */
export function getOptionsGeneration(config: UserConfig): OptionsGeneration {
  const generateConfig: OptionsGeneration = {
    ...config,
  };
  return generateConfig;
}

/**
 * Parse `Namespace=npm-package` strings (from repeatable `--external-package` flag) into a
 * map. Silently drops entries that don't contain `=`. Empty input returns undefined so the
 * field stays absent in the merged config (rather than `{}`, which would shadow rc values).
 */
function parseExternalPackagePairs(
  pairs: string[] | undefined,
): Record<string, string> | undefined {
  if (!pairs || pairs.length === 0) return undefined;
  const map: Record<string, string> = {};
  for (const pair of pairs) {
    const eq = pair.indexOf("=");
    if (eq < 1) continue;
    const ns = pair.slice(0, eq).trim();
    const pkg = pair.slice(eq + 1).trim();
    if (ns && pkg) map[ns] = pkg;
  }
  return Object.keys(map).length > 0 ? map : undefined;
}

/**
 * npm package name: an optional `@scope/` followed by a name. Deliberately stricter than npm
 * itself (no uppercase, no leading dot/underscore) — the value also becomes `npmScope`, so it
 * is pasted into every generated import specifier, where a name npm would reject only fails
 * once the bundle is published.
 */
const NPM_PACKAGE_NAME = /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

/**
 * Parse the `--bundleMeta` JSON string. Fails loudly: the alternative is a bundle published
 * without the provenance the caller asked for, which nothing downstream can tell apart from a
 * bundle that never wanted any.
 */
function parseBundleMeta(raw: string): Record<string, unknown> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(
      `--bundleMeta is not valid JSON: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error("--bundleMeta must be a JSON object");
  }
  return parsed as Record<string, unknown>;
}

/**
 * Validate the configuration, and apply the implications `--bundle` has on other options.
 *
 * Bundle mode is a different SHAPE of the same output, not a separate generator: the modules
 * are generated exactly as in package mode, and only the manifests change. So it sets the two
 * options that shape has to have — `package` and `npmScope` — rather than asking the caller to
 * keep three flags consistent by hand.
 */
export function validate(config: UserConfig): UserConfig {
  if (config.bundleMeta !== undefined && !config.bundle) {
    throw new Error("--bundleMeta is only valid together with --bundle");
  }

  if (!config.bundle) return config;

  if (!NPM_PACKAGE_NAME.test(config.bundle)) {
    throw new Error(`--bundle is not a valid npm package name: ${config.bundle}`);
  }

  // --external-deps resolves dep imports against INSTALLED @girs/* packages, which is the exact
  // opposite of a bundle: one deliberately reaches outside the output, the other deliberately
  // cannot. Silently letting one win would produce a bundle with unresolvable imports.
  if (config.externalDeps) {
    throw new Error("--bundle cannot be combined with --external-deps");
  }

  if (config.bundleMeta) {
    for (const reserved of ["name", "exports"]) {
      if (reserved in config.bundleMeta) {
        throw new Error(
          `--bundleMeta cannot override '${reserved}' — it is computed from the generated output`,
        );
      }
    }
  }

  config.package = true;
  config.npmScope = config.bundle;

  return config;
}

/**
 * Merge a single config value from file config to user config
 * @param userConfig The user config object to update
 * @param configFileData The config file data to merge from
 * @param key The config key to merge
 * @param optionDefault The default value from options
 * @param validator Optional validation function
 */
const isBoolean = (v: unknown) => typeof v === "boolean";

function mergeConfigValue<K extends keyof UserConfig>(
  userConfig: UserConfig,
  configFileData: Partial<UserConfig>,
  key: K,
  optionDefault: unknown,
  validator?: (value: unknown) => boolean,
): void {
  const fileValue = configFileData[key];
  const userValue = userConfig[key];

  // Skip if no file value
  if (fileValue === undefined) return;

  // Apply validator if provided
  if (validator && !validator(fileValue)) return;

  // Check if user value is default
  const isDefault =
    userValue === optionDefault ||
    (Array.isArray(userValue) && Array.isArray(optionDefault) && isEqual(userValue, optionDefault));

  if (isDefault) {
    (userConfig[key] as UserConfig[K]) = fileValue as UserConfig[K];
  }
}

/**
 * Loads the values of the config file and concatenate them with passed cli flags / arguments.
 * The values from config file are preferred if the cli flag value is the default (and so not set / overwritten)
 * @param cliOptions CLI options passed by the user
 */
export async function load(cliOptions: ConfigFlags): Promise<UserConfig> {
  const configFile = await loadConfigFile(cliOptions.configName);
  const configFileData = configFile?.config || {};

  // `--external-package GLib=@girs/glib-2.0` arrives as a string[]; collapse to Record.
  // Drop the raw array so it doesn't pollute the merged UserConfig surface.
  const externalPackagesFromCli = parseExternalPackagePairs(
    (cliOptions as { externalPackage?: string[] }).externalPackage,
  );
  const { externalPackage: _externalPackage, ...cliOptionsClean } = cliOptions as ConfigFlags & {
    externalPackage?: string[];
  };

  const userConfig: UserConfig = {
    ...cliOptionsClean,
  };

  // `--bundleMeta` arrives as a JSON string on the CLI and as an object from an rc file.
  // Normalize here so everything downstream sees the object form only.
  if (typeof userConfig.bundleMeta === "string") {
    userConfig.bundleMeta = parseBundleMeta(userConfig.bundleMeta);
  }
  if (externalPackagesFromCli) {
    userConfig.externalPackages = externalPackagesFromCli;
  }

  if (configFileData) {
    // Boolean options — config file overrides CLI defaults
    const booleanKeys: Array<[keyof UserConfig, unknown]> = [
      ["verbose", options.verbose.default],
      ["ignoreVersionConflicts", options.ignoreVersionConflicts.default],
      ["print", options.print.default],
      ["noNamespace", options.noNamespace.default],
      ["noComments", options.noComments.default],
      ["promisify", options.promisify.default],
      ["widgetVocabulary", options.widgetVocabulary.default],
      ["workspace", options.workspace.default],
      ["onlyVersionPrefix", options.onlyVersionPrefix.default],
      ["noPrettyPrint", options.noPrettyPrint.default],
      ["noAdvancedVariants", options.noAdvancedVariants.default],
      ["package", options.package.default],
      ["reporter", options.reporter.default],
      ["externalDeps", options.externalDeps.default],
      ["allowMissingDeps", options.allowMissingDeps.default],
      ["combined", docOptions.combined.default],
      ["merge", docOptions.merge.default],
    ];
    for (const [key, defaultVal] of booleanKeys) {
      mergeConfigValue(userConfig, configFileData, key, defaultVal, isBoolean);
    }

    // String options — config file overrides CLI defaults
    const stringKeys: Array<[keyof UserConfig, unknown]> = [
      ["npmScope", options.npmScope.default],
      ["bundle", undefined],
      ["reporterOutput", options.reporterOutput.default],
      ["depVersionFormat", undefined],
      ["theme", docOptions.theme.default],
      ["sourceLinkTemplate", undefined],
      ["readme", undefined],
      ["jsonDir", undefined],
    ];
    for (const [key, defaultVal] of stringKeys) {
      mergeConfigValue(userConfig, configFileData, key, defaultVal);
    }

    // Array options — config file overrides CLI defaults
    const arrayKeys: Array<[keyof UserConfig, unknown]> = [
      ["ignore", options.ignore.default],
      ["modules", options.modules.default],
    ];
    for (const [key, defaultVal] of arrayKeys) {
      mergeConfigValue(userConfig, configFileData, key, defaultVal);
    }

    // girDirectories: rc-file entries are prepended to the current dirs (CLI-provided or
    // system defaults) rather than replacing them. This lets projects add local GIR dirs
    // (e.g. a Vala build output) without having to enumerate all system paths in the rc.
    // To use ONLY the specified dirs (no system fallback), pass --girDirectories on the CLI.
    if (configFileData.girDirectories?.length) {
      const current = userConfig.girDirectories as string[];
      const toAdd = (configFileData.girDirectories as string[]).filter((d) => !current.includes(d));
      if (toAdd.length > 0) {
        userConfig.girDirectories = [...toAdd, ...current];
      }
    }

    // Special handling for root
    if (userConfig.root === options.root.default && (configFileData.root || configFile?.filepath)) {
      userConfig.root =
        configFileData.root ||
        (configFile?.filepath ? dirname(configFile.filepath) : (options.root.default as string));
    }

    // Special handling for outdir (override with config file value if still at a default)
    const isDefaultOutdir =
      userConfig.outdir === options.outdir.default || userConfig.outdir === defaults.docOutdir;
    if (isDefaultOutdir && configFileData.outdir) {
      userConfig.outdir = userConfig.print ? null : configFileData.outdir;
    }

    // bundleMeta is an object in rc files; a CLI --bundleMeta wins.
    if (userConfig.bundleMeta === undefined && configFileData.bundleMeta) {
      userConfig.bundleMeta = configFileData.bundleMeta;
    }

    // externalPackages is a Record<string, string> in rc files; CLI overrides take precedence.
    if (!externalPackagesFromCli && configFileData.externalPackages) {
      userConfig.externalPackages = configFileData.externalPackages;
    }
  }

  // Make paths absolute relative to root
  const resolveToRoot = (path: string) =>
    path.startsWith("/") ? path : resolve(userConfig.root, path);

  if (userConfig.outdir) {
    userConfig.outdir = resolveToRoot(userConfig.outdir);
  }
  if (userConfig.jsonDir) {
    userConfig.jsonDir = resolveToRoot(userConfig.jsonDir);
  }
  if (userConfig.girDirectories) {
    userConfig.girDirectories = userConfig.girDirectories.map(resolveToRoot);
  }
  return validate(userConfig);
}
