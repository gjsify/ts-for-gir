import type { GirModule, NSRegistry } from '@ts-for-gir/lib'

export interface Generator {
    start(registry: NSRegistry): Promise<void>
    generate(registry: NSRegistry, module: GirModule): Promise<void>
    finish(registry: NSRegistry, girModules: GirModule[]): Promise<void>
}
