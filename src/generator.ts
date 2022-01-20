import type { InheritanceTable, GirModulesGrouped } from './types/index.js'
import type { GirModule } from './gir-module.js'

export interface Generator {
    start(
        girModules: GirModule[],
        girModulesGrouped: GirModulesGrouped[],
        inheritanceTable: InheritanceTable,
    ): Promise<void>
}
