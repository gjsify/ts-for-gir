/**
 * Handles finding GIR files in the filesystem
 */

import { basename, join } from "node:path";
import type { Dependency, DependencyManager } from "@ts-for-gir/lib";
import { splitModuleName } from "@ts-for-gir/lib";
import { glob } from "glob";

export class FileFinder {
	constructor(
		private readonly girDirectories: string[],
		private readonly dependencyManager: DependencyManager,
	) {}

	/**
	 * Find modules with the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
	 * @param globPackageNames Module names with potential wildcards
	 * @param ignore Modules to ignore
	 */
	async findGirFiles(globPackageNames: string[], ignore: string[] = []): Promise<Set<string>> {
		const foundFiles = new Set<string>();

		for (let i = 0; i < globPackageNames.length; i++) {
			if (!globPackageNames[i]) {
				continue;
			}

			const filename = `${globPackageNames[i]}.gir`;
			const pattern = this.girDirectories.map((girDirectory) => join(girDirectory, filename));
			const ignoreGirs = ignore.map((girDirectory) => `${girDirectory}.gir`);
			const files = await glob(pattern, { ignore: ignoreGirs });

			files.forEach((file) => foundFiles.add(file));
		}

		return foundFiles;
	}

	/**
	 * Convert GIR file paths to Dependency objects
	 * @param girFiles Set of GIR file paths
	 */
	async girFilePathToDependencies(girFiles: Set<string>): Promise<Dependency[]> {
		const dependencies: Dependency[] = [];

		for (const girFile of girFiles) {
			const packageName = basename(girFile, ".gir");
			const { namespace, version } = splitModuleName(packageName);
			const dep = await this.dependencyManager.get(namespace, version);
			dependencies.push(dep);
		}

		return dependencies;
	}
}
