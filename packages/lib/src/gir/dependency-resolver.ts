import type { DependencyManager } from "../dependency-manager.ts";
import type { Dependency } from "../types/index.ts";
import { find } from "../utils/objects.ts";

/**
 * Handles resolution and validation of GIR module dependencies
 */
export class DependencyResolver {
	private readonly dependencyManager: DependencyManager;

	constructor(dependencyManager: DependencyManager) {
		this.dependencyManager = dependencyManager;
	}

	/**
	 * Resolves transitive dependencies and adds missing required dependencies
	 */
	async resolveTransitiveDependencies(
		packageName: string,
		transitiveDependencies: Dependency[],
	): Promise<Dependency[]> {
		// Always pull in GObject-2.0, as we may need it for e.g. GObject-2.0.type
		if (packageName !== "GObject-2.0") {
			this.ensureGObjectDependency(transitiveDependencies);
		}

		// Add package-specific missing dependencies
		this.addPackageSpecificDependencies(packageName, transitiveDependencies);

		return transitiveDependencies;
	}

	private ensureGObjectDependency(transitiveDependencies: Dependency[]): void {
		if (!this.hasDependency(transitiveDependencies, "GObject-2.0")) {
			transitiveDependencies.push(this.getDependency("GObject", "2.0"));
		}
	}

	private addPackageSpecificDependencies(packageName: string, transitiveDependencies: Dependency[]): void {
		const dependencyRules = this.getDependencyRules();
		const rule = dependencyRules[packageName];

		if (rule) {
			rule.forEach(({ namespace, version, required }) => {
				const requiredPackage = `${namespace}-${version}`;
				if (!this.hasDependency(transitiveDependencies, requiredPackage)) {
					transitiveDependencies.push(this.getDependency(namespace, version));
				}
			});
		}
	}

	private getDependencyRules(): Record<string, Array<{ namespace: string; version: string; required: string }>> {
		return {
			"UnityExtras-7.0": [{ namespace: "Unity", version: "7.0", required: "Unity-7.0" }],
			"UnityExtras-6.0": [{ namespace: "Unity", version: "6.0", required: "Unity-6.0" }],
			"GTop-2.0": [{ namespace: "GLib", version: "2.0", required: "GLib-2.0" }],
			"GioUnix-2.0": [
				{ namespace: "Gio", version: "2.0", required: "Gio-2.0" },
				{ namespace: "GLib", version: "2.0", required: "GLib-2.0" },
			],
		};
	}

	private hasDependency(dependencies: Dependency[], packageName: string): boolean {
		return find(dependencies, (x) => x.packageName === packageName) !== undefined;
	}

	private getDependency(namespace: string, version: string): Dependency {
		// This will be resolved asynchronously - for now, we'll use a placeholder
		// In the actual implementation, this should call this.dependencyManager.get(namespace, version)
		throw new Error(`Dependency resolution for ${namespace}-${version} needs to be implemented asynchronously`);
	}

	/**
	 * Asynchronously gets a dependency - this method should be used instead of getDependency
	 */
	async getDependencyAsync(namespace: string, version: string): Promise<Dependency> {
		return await this.dependencyManager.get(namespace, version);
	}
}
