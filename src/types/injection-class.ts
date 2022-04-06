import type { InjectionFunction, InjectionGenericParameter } from './index.js'

/** Interface to inject additional methods, properties, etc to a class */
export interface InjectionClass {
    qualifiedName: string

    /** Fields of the base class itself */
    // TODO: fields: InjectionField[]
    /** Properties of the base class itself */
    // TODO: properties: InjectionProperty[]
    /** Constructor properties of the base class itself */
    // TODO:constructProps: InjectionProperty[]
    /** Array of property names of the base class itself (used to generate signals) */
    propertyNames?: string[]
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
