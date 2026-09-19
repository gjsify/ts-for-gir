/**
 * Handles grouping of GIR modules and conflict resolution
 */

import type { GirModuleResolvedBy, GirModulesGrouped, GirModulesGroupedMap } from "@ts-for-gir/lib";
import { splitModuleName } from "@ts-for-gir/lib";

export class ModuleGrouper {
	/**
	 * Groups Gir modules by name id
	 * E.g. Gtk-3.0 and Gtk-4.0 will be grouped
	 */
	groupGirFiles(resolveGirModules: Set<GirModuleResolvedBy> | GirModuleResolvedBy[]): GirModulesGroupedMap {
		const girModulesGrouped: GirModulesGroupedMap = {};

		for (const resolveGirModule of resolveGirModules) {
			const { namespace } = splitModuleName(resolveGirModule.packageName);
			const id = namespace.toLowerCase();

			if (!girModulesGrouped[id]) {
				girModulesGrouped[id] = {
					namespace: namespace,
					modules: [resolveGirModule],
					hasConflict: false,
				};
			} else {
				girModulesGrouped[id].modules.push(resolveGirModule);
				girModulesGrouped[id].hasConflict = true;
			}
		}

		return girModulesGrouped;
	}

	/**
	 * Sorts out the module the user has not selected via cli prompt
	 * @param girModulesGrouped Grouped modules
	 * @param selected Users selected module packageName
	 */
	sortVersionsByAnswer(
		girModulesGrouped: GirModulesGrouped,
		selected: string[],
	): { keep: Set<GirModuleResolvedBy>; ignore: string[] } {
		const keep = new Set<GirModuleResolvedBy>();
		let ignore: string[] = [];

		if (!girModulesGrouped.hasConflict) {
			keep.add(girModulesGrouped.modules[0]);
		} else {
			const keepModules = this.findGirModuleByFullNames(girModulesGrouped.modules, selected);
			const girModulePackageNames = girModulesGrouped.modules.map((resolveGirModule) => resolveGirModule.packageName);

			if (!keepModules || keepModules.length <= 0) {
				throw new Error("Module not found!");
			}

			for (const keepModule of keepModules) {
				keep.add(keepModule);
			}

			const toIgnore = girModulePackageNames.filter((packageName) => !selected.includes(packageName));
			ignore = ignore.concat(toIgnore);
		}

		return {
			keep,
			ignore,
		};
	}

	/**
	 * Find modules by package names
	 */
	private findGirModuleByFullNames(girModules: GirModuleResolvedBy[], packageNames: string[]): GirModuleResolvedBy[] {
		return girModules.filter((girModule) => packageNames.includes(girModule.packageName));
	}
}
