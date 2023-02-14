import type { InheritanceTable, GirModulesGrouped, GirModule } from '@ts-for-gir/lib'

export interface Generator {
    start(
        girModules: GirModule[],
        girModulesGrouped: GirModulesGrouped[],
        inheritanceTable: InheritanceTable,
    ): Promise<void>
}
