import type { InjectionGenericParameter, InjectionParameter } from './index.js'

/** Interface to inject additional methods, properties, etc to a class */
export interface InjectionCallback {
    /** The versions on which the injections are to be applied. E.g. `["3.0", "2.0"]` */
    versions: string[]
    /** The versions on which the injections are to be applied. E.g. `"Gtk"` */
    namespace: string
    name: string

    /** Generic type parameters */
    generics?: InjectionGenericParameter[]

    inParams?: InjectionParameter[]

    tsCallbackInterface: {
        /** Generic type parameters */
        generics?: InjectionGenericParameter[]
    }
}
