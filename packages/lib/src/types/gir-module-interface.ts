import type { Dependency } from "./dependency.ts";

/**
 * Interface representing the essential GirModule operations needed by type definitions
 * This follows the Interface Segregation Principle - clients should not depend on interfaces they don't use
 */
export interface IGirModule {
	/** Package name like 'Gtk-4.0' */
	readonly packageName: string;
	
	/** Direct dependencies of this module */
	readonly dependencies: Dependency[];
	
	/** All transitive dependencies of this module */
	readonly transitiveDependencies: Dependency[];
	
	/** Initialize transitive dependencies */
	initTransitiveDependencies(dependencies: Dependency[]): Promise<void>;
	
	/** Parse the module contents */
	parse(): void;
} 