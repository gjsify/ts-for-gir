import type { IGirModule } from "./gir-module-interface.ts";
import type { ResolveType } from "./resolve-type.ts";

/**
 * Represents a resolved GIR module with its resolution context
 * This is an operational type used by the CLI and module loader
 */
export interface GirModuleResolvedBy {
	namespace: string;
	version: string;
	modifier?: string;
	packageName: string;
	module: IGirModule;
	resolvedBy: ResolveType;
	path: string | null;
}

/**
 * Grouped GIR modules by namespace with conflict detection
 */
export interface GirModulesGrouped {
	namespace: string;
	modules: GirModuleResolvedBy[];
	hasConflict: boolean;
}

/**
 * Map of grouped GIR modules indexed by namespace
 */
export interface GirModulesGroupedMap {
	[namespace: string]: GirModulesGrouped;
} 