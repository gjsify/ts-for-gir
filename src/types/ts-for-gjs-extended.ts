import { GirModule } from '../gir-module'

export interface TsForGjsExtended {
    _module?: GirModule
    /**
     * girModule of the container, e.g. a class
     * Used for type patches
     */
    _containerModule?: GirModule
    _fullSymName?: string
}
