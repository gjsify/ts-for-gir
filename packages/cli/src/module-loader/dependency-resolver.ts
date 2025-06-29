/**
 * Handles dependency resolution and traversal for GIR modules
 */

import type { Dependency, DependencyMap, GirModule, GirModuleResolvedBy, GirModulesGroupedMap } from "@ts-for-gir/lib";
import { isIterable } from "@ts-for-gir/lib";

export class DependencyResolver {
	private modDependencyMap: DependencyMap = {};

	/**
	 * Extends the modDependencyMap by the current Module,
	 * should be called for each girModule so that the modDependencyMap is complete
	 */
	extendDependencyMapByGirModule(girModule: GirModule): void {
		this.modDependencyMap[girModule.packageName] = girModule.dependencies || [];
	}

	/**
	 * Figure out transitive module dependencies
	 */
	traverseDependencies(packageName: string, result: { [name: string]: Dependency } = {}): void {
		const deps = this.modDependencyMap[packageName];
		if (isIterable(deps)) {
			for (const dep of deps) {
				if (result[dep.packageName]) continue;
				result[dep.packageName] = dep;
				this.traverseDependencies(dep.packageName, result);
			}
		}
	}

	/**
	 * Get transitive dependencies for a package
	 */
	getTransitiveDependencies(packageName: string): Dependency[] {
		const result: { [name: string]: Dependency } = {};
		this.traverseDependencies(packageName, result);
		return Object.values(result);
	}

	/**
	 * Find modules that depend on the module with the name 'packageName'
	 */
	findModulesDependingOnPackage(
		girModulesGroupedMap: GirModulesGroupedMap,
		packageName: string,
	): GirModuleResolvedBy[] {
		const girModules: GirModuleResolvedBy[] = [];

		for (const girModulesGrouped of Object.values(girModulesGroupedMap)) {
			for (const girModuleResolvedBy of girModulesGrouped.modules) {
				if (girModuleResolvedBy.packageName === packageName) {
					continue;
				}
				for (const dep of girModuleResolvedBy.module.dependencies) {
					if (dep.packageName === packageName && !girModules.includes(girModuleResolvedBy)) {
						girModules.push(girModuleResolvedBy);
					}
				}
			}
		}

		return girModules;
	}

	/**
	 * Find modules that depend on the modules with the names in `packageNames`
	 */
	findModulesDependingOnPackages(
		girModulesGroupedMap: GirModulesGroupedMap,
		packageNames: string[],
	): GirModuleResolvedBy[] {
		let girModules: GirModuleResolvedBy[] = [];

		for (const packageName of packageNames) {
			girModules = [...girModules, ...this.findModulesDependingOnPackage(girModulesGroupedMap, packageName)];
		}

		return girModules;
	}

	/**
	 * Returns a girModule found by `packageName` property
	 */
	findGirModuleByFullNames(
		girModules: (GirModuleResolvedBy | GirModule)[],
		packageNames: string[],
	): Array<GirModuleResolvedBy | GirModule> {
		return girModules.filter((girModule) => packageNames.includes(girModule.packageName));
	}

	/**
	 * Checks if a girModules with the `packageNames` exists
	 */
	existsGirModules(girModules: (GirModuleResolvedBy | GirModule)[], packageName: string): boolean {
		const foundModule = this.findGirModuleByFullNames(girModules, [packageName]);
		return foundModule.length > 0;
	}
}
