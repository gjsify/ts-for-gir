import type { InjectionFunction, InjectionGenericParameter, InjectionProperty, TsMethod } from './index.js'

/** Interface to inject additional methods, properties, etc to a class */
export interface InjectionClass {
    /** The versions on which the injections are to be applied. E.g. `["3.0", "2.0"]` */
    versions: string[]
    /** The class namespace and name on which the injections are to be applied. E.g. "Gtk.Window "*/
    qualifiedName: string

    /** Fields of the base class itself */
    // TODO: fields: InjectionField[]
    /** Properties of the base class itself */
    properties?: InjectionProperty[]
    /** Constructor properties of the base class itself */
    // TODO:constructProps: InjectionProperty[]
    /** Array of signal methods for GObject properties */
    propertySignalMethods?: TsMethod[]
    /** Methods of the base class itself */
    methods?: InjectionFunction[]
    /** Virtual methods of the base class itself */
    virtualMethods?: InjectionFunction[]
    /** Constructor methods of the base class itself */
    constructors?: InjectionFunction[]
    /** Static functions of the base class itself */
    staticFunctions?: InjectionFunction[]
    /** Signals of the base class itself */
    // TODO:signals: InjectionSignal[]
    /** Generic type parameters */
    generics?: InjectionGenericParameter[]
}
