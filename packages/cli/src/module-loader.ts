/**
 * The ModuleLoader is used for reading gir modules from the file system and to solve conflicts (e.g. Gtk-3.0 and Gtk-4.0 would be a conflict)
 */

import type {
	AnswerVersion,
	Dependency,
	GirModuleResolvedBy,
	GirModulesGroupedMap,
	NSRegistry,
	OptionsGeneration,
} from "@ts-for-gir/lib";
import {
	DependencyManager,
	GirModule,
	Logger,
	ResolveType,
	union,
	WARN_NO_GIR_FILE_FOUND_FOR_PACKAGE,
} from "@ts-for-gir/lib";
import { DependencyResolver, FileFinder, ModuleGrouper, PromptHandler } from "./module-loader/index.ts";

export class ModuleLoader {
	private readonly log: Logger;
	private readonly dependencyManager: DependencyManager;
	private readonly dependencyResolver: DependencyResolver;
	private readonly fileFinder: FileFinder;
	private readonly moduleGrouper: ModuleGrouper;
	private readonly promptHandler: PromptHandler;

	constructor(
		private readonly config: OptionsGeneration,
		private readonly registry: NSRegistry,
	) {
		this.log = new Logger(config.verbose, "ModuleLoader");
		this.dependencyManager = DependencyManager.getInstance(config);
		this.dependencyResolver = new DependencyResolver();
		this.fileFinder = new FileFinder(config.girDirectories, this.dependencyManager);
		this.moduleGrouper = new ModuleGrouper();
		this.promptHandler = new PromptHandler(config.verbose);
	}

	/**
	 * Sets the traverse dependencies for the current girModule,
	 * is required so that all dependencies can be found internally when generating the dependency imports for the module .d.ts file
	 */
	private async initGirModules(girModules: GirModuleResolvedBy[]): Promise<void> {
		for (const girModule of girModules) {
			const dependencies = this.dependencyResolver.getTransitiveDependencies(girModule.packageName);
			await girModule.module.initTransitiveDependencies(dependencies);
		}
	}

	/**
	 * Reads a gir xml module file and creates an object of GirModule.
	 * Also sets the setDependencyMap
	 */
	private async loadAndCreateGirModule(dependency: Dependency): Promise<GirModule | null> {
		if (!dependency.exists || dependency.path === null) {
			return null;
		}

		this.log.log(`Loading ${dependency.packageName}...`);
		const girModule = await GirModule.load(dependency, this.config, this.registry);
		// Figure out transitive module dependencies
		this.dependencyResolver.extendDependencyMapByGirModule(girModule);
		return girModule;
	}

	/**
	 * If multiple versions of the same module are found, this will ask the user with input prompts for the version they wish to use.
	 * Ignores also modules that depend on a module that should be ignored
	 */
	private async askForEachConflictVersionsPrompt(
		girModulesGroupedMap: GirModulesGroupedMap,
		ignore: string[],
	): Promise<{ keep: Set<GirModuleResolvedBy>; ignore: string[] }> {
		let keep = new Set<GirModuleResolvedBy>();

		for (const girModulesGrouped of Object.values(girModulesGroupedMap)) {
			// Remove ignored modules from group
			girModulesGrouped.modules = girModulesGrouped.modules.filter(
				(girGroup) => !ignore.includes(girGroup.packageName),
			);
			girModulesGrouped.hasConflict = girModulesGrouped.modules.length >= 2;

			if (girModulesGrouped.modules.length <= 0) {
				continue;
			}

			// Ask for version if there is a conflict
			if (!girModulesGrouped.hasConflict) {
				keep = union<GirModuleResolvedBy>(keep, girModulesGrouped.modules);
			} else {
				let goBack = true;
				let versionAnswer: AnswerVersion | null = null;
				let ignoreDepsAnswer: "Yes" | "No" | "Go back" | null = null;
				let wouldIgnoreDeps: GirModuleResolvedBy[] = [];

				while (goBack) {
					versionAnswer = await this.promptHandler.askForVersionsPrompt(girModulesGrouped);
					// Check modules that depend on the unchosen modules
					wouldIgnoreDeps = this.dependencyResolver.findModulesDependingOnPackages(
						girModulesGroupedMap,
						versionAnswer.unselected,
					);
					// Do not check dependencies that have already been ignored
					wouldIgnoreDeps = wouldIgnoreDeps.filter((dep) => !ignore.includes(dep.packageName));
					ignoreDepsAnswer = await this.promptHandler.askIgnoreDepsPrompt(wouldIgnoreDeps);
					goBack = ignoreDepsAnswer === "Go back";
				}

				if (!versionAnswer) {
					throw new Error("Error in processing the prompt versionAnswer");
				}

				if (ignoreDepsAnswer === "Yes") {
					// Also ignore the dependencies of the unselected version
					ignore = ignore.concat(wouldIgnoreDeps.map((dep) => dep.packageName));
				}

				const unionMe = this.moduleGrouper.sortVersionsByAnswer(girModulesGrouped, versionAnswer.selected);
				// Do not ignore the selected package version
				keep = union<GirModuleResolvedBy>(keep, unionMe.keep);
				// Ignore the unchosen package versions
				ignore = ignore.concat(unionMe.ignore);
			}
		}

		if (ignore && ignore.length > 0) {
			this.promptHandler.showIgnoredModules(ignore);
			await this.promptHandler.askAddToIgnoreToConfigPrompt(ignore);
		}

		return {
			keep,
			ignore,
		};
	}

	/**
	 * Reads the gir xml module files and creates an object of GirModule for each module
	 */
	private async loadGirModules(
		dependencies: Dependency[],
		ignoreDependencies: string[] = [],
		girModules: GirModuleResolvedBy[] = [],
		resolvedBy = ResolveType.BY_HAND,
		failedGirModules = new Set<string>(),
	): Promise<{ loaded: GirModuleResolvedBy[]; failed: Set<string> }> {
		let newModuleFound = false;

		// Clone array
		dependencies = [...dependencies];

		while (dependencies.length > 0) {
			const dependency = dependencies.shift();
			if (!dependency?.packageName) continue;
			// If module has not already been loaded
			if (!this.dependencyResolver.existsGirModules(girModules, dependency.packageName)) {
				const girModule = await this.loadAndCreateGirModule(dependency);
				if (!girModule) {
					if (!failedGirModules.has(dependency.packageName)) {
						this.log.warn(WARN_NO_GIR_FILE_FOUND_FOR_PACKAGE(dependency.packageName));
						failedGirModules.add(dependency.packageName);
					}
				} else if (girModule?.packageName) {
					const addModule = {
						namespace: dependency.namespace,
						version: dependency.version,
						packageName: girModule.packageName,
						module: girModule,
						resolvedBy,
						path: dependency.path,
					};
					girModules.push(addModule);
					newModuleFound = true;
				}
			}
		}

		if (!newModuleFound) {
			return {
				loaded: girModules,
				failed: failedGirModules,
			};
		}

		// Figure out transitive module dependencies
		await this.initGirModules(girModules);

		// Load girModules for dependencies
		for (const girModule of girModules) {
			// Load dependencies
			const transitiveDependencies = girModule.module.transitiveDependencies;
			if (transitiveDependencies.length > 0) {
				await this.loadGirModules(
					transitiveDependencies,
					ignoreDependencies,
					girModules,
					ResolveType.DEPENDENCE,
					failedGirModules,
				);
			}
		}

		return {
			loaded: girModules,
			failed: failedGirModules,
		};
	}

	/**
	 * Loads all found `packageNames`
	 * @param packageNames Module names to load
	 * @param ignore Modules to ignore
	 * @param doNotAskForVersionOnConflict Set this to false if you want to get a prompt for each version conflict
	 */
	public async getModulesResolved(
		packageNames: string[],
		ignore: string[] = [],
		doNotAskForVersionOnConflict = true,
	): Promise<{ keep: GirModuleResolvedBy[]; grouped: GirModulesGroupedMap; ignore: string[]; failed: Set<string> }> {
		const girFiles = await this.fileFinder.findGirFiles([...packageNames], ignore);
		// Always require these because GJS does...
		const GLib = await this.dependencyManager.get("GLib", "2.0");
		const Gio = await this.dependencyManager.get("Gio", "2.0");
		const GObject = await this.dependencyManager.get("GObject", "2.0");

		const dependencies = await this.fileFinder.girFilePathToDependencies(girFiles);

		const { loaded, failed } = await this.loadGirModules(
			[
				GLib,
				Gio,
				GObject,
				...dependencies.filter(
					(dep) => dep.namespace !== "GLib" && dep.namespace !== "Gio" && dep.namespace !== "GObject",
				),
			],
			ignore,
		);

		let keep: GirModuleResolvedBy[] = [];
		if (doNotAskForVersionOnConflict) {
			keep = loaded;
		} else {
			const girModulesGrouped = this.moduleGrouper.groupGirFiles(loaded);
			const filtered = await this.askForEachConflictVersionsPrompt(girModulesGrouped, ignore);
			keep = Array.from(filtered.keep);
		}

		const grouped = this.moduleGrouper.groupGirFiles(keep);

		return { keep, grouped, ignore, failed };
	}

	/**
	 * Find modules
	 * @param modules Module names to find
	 * @param ignore Modules to ignore
	 */
	public async getModules(
		modules: string[],
		ignore: string[] = [],
	): Promise<{ grouped: GirModulesGroupedMap; loaded: GirModuleResolvedBy[]; failed: string[] }> {
		const girFiles = await this.fileFinder.findGirFiles(modules, ignore);
		const dependencies = await this.fileFinder.girFilePathToDependencies(girFiles);
		const { loaded, failed } = await this.loadGirModules(dependencies, ignore);
		const grouped = this.moduleGrouper.groupGirFiles(loaded);
		return { grouped, loaded, failed: Array.from(failed) };
	}

	/**
	 * Start parsing the gir modules
	 */
	public parse(girModules: GirModuleResolvedBy[]): void {
		for (const girModule of girModules) {
			girModule.module.parse();
		}
	}
}
