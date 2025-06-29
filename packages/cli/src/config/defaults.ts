/**
 * Default configuration values for ts-for-gir CLI
 */

import { existsSync } from "node:fs";
import { join } from "node:path";
import { APP_NAME, APP_USAGE } from "@ts-for-gir/lib";

export const appName = APP_NAME;
export const usage = APP_USAGE;

/**
 * Default CLI flag and argument values
 */
export const defaults = {
	print: false,
	configName: ".ts-for-girrc.js",
	root: process.cwd(),
	outdir: "./@types",
	girDirectories: getDefaultGirDirectories(),
	modules: ["*"],
	ignore: [],
	verbose: false,
	ignoreVersionConflicts: false,
	noNamespace: false,
	noComments: false,
	promisify: true,
	npmScope: "@girs",
	workspace: false,
	onlyVersionPrefix: false,
	noPrettyPrint: false,
	// Disabled by default because advanced variants are complicated,
	// it does impact performance (especially on older typescript versions)
	// and we'd need to test it works with the updated bindings
	noAdvancedVariants: true,
	package: false,
	reporter: false,
	reporterOutput: "ts-for-gir-report.json",
};

/**
 * Get default GIR directories based on the system configuration
 */
function getDefaultGirDirectories(): string[] {
	const girDirectories = [
		"/usr/local/share/gir-1.0",
		"/usr/share/gir-1.0",
		"/usr/share/*/gir-1.0",
		"/usr/share/gnome-shell",
		"/usr/share/gnome-shell/gir-1.0",
		"/usr/lib64/mutter-*",
		"/usr/lib/mutter-*",
		"/usr/lib/x86_64-linux-gnu/mutter-*",
	];

	// NixOS and other distributions does not have a /usr/local/share directory.
	// Instead, the nix store paths with Gir files are set as XDG_DATA_DIRS.
	// See https://github.com/NixOS/nixpkgs/blob/96e18717904dfedcd884541e5a92bf9ff632cf39/pkgs/development/libraries/gobject-introspection/setup-hook.sh#L7-L10
	const dataDirs = process.env.XDG_DATA_DIRS?.split(":") || [];
	for (let dataDir of dataDirs) {
		dataDir = join(dataDir, "gir-1.0");
		if (!girDirectories.includes(dataDir) && existsSync(dataDir)) {
			girDirectories.push(dataDir);
		}
	}

	return girDirectories;
}
