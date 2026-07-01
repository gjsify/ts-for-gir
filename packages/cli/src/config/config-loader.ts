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
 * Validate the configuration
 */
export function validate(config: UserConfig): UserConfig {
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
