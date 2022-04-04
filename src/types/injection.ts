import type { InjectionClass } from './injection-class.js'

/** Interface to inject additional methods, properties, etc to the generated type definitions (like gjs overrides) */
export interface Injection {
    classes: InjectionClass[]
}
