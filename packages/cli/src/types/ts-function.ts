import {
    GirCallableParamElement,
    GirInstanceParameter,
    TsGenericParameter,
    TsType,
    TsDoc,
    TypeTsFunction,
    TypeGirFunction,
    TsClass,
} from './index.js'

/**
 * Holds the data to generate a function in/for Typescript
 */
export interface TsFunction {
    name: string
    /**
     * Actually there are no multiple return types in gir.
     * We still use an array to resolve conflicts with multiple inheritance
     */
    returnTypes: TsType[]
    /** `true` if this function is a arrow function: `() => {}` */
    isArrowType: boolean
    /** c `static foobar() {}` */
    isStatic: boolean
    /** true if this function is a global function and not part of a class: `function foobar() {}` */
    isGlobal: boolean
    /** true if this function is a virtual method with the `vfunc:` prefix: vfunc_foobar() {} */
    isVirtual: boolean
    /** true if this function was injected using the `Injector`. This information is used in the `ConflictResolver` */
    isInjected: boolean
    /** Define this to override the return type defined in `returnTypes` */
    overrideReturnType?: string
    /** True if the return type is void */
    retTypeIsVoid: boolean
    /**
     * True if the return types are a promise
     * TODO: we should transform this to a generic `returnTypes`
     **/
    isPromise?: boolean
    inParams: GirCallableParamElement[]
    instanceParameters: GirInstanceParameter[]
    /**
     * Additional return types
     * TODO: we should transform this to `returnTypes`
     **/
    outParams: GirCallableParamElement[]
    generics: TsGenericParameter[]

    /** Function overloads, used in `ConflictResolver` */
    overloads: TsFunction[]

    /** Temporary property, we will try later to resolve the conflicts correctly */
    hasUnresolvedConflict?: boolean

    girTypeName: TypeGirFunction
    /**
     * - Functions are usually exported as global functions in typescript, but can also be static functions of a class
     * - Signals are represented in Typescript as multiple event methods
     * - Virtual methods are represented in Typescript as normal methods with the prefix "vfunc_"
     * - Callbacks are generated as interfaces
     */
    tsTypeName: TypeTsFunction

    /** Typescript data to generate documentations in TSDoc style */
    doc: TsDoc

    /** The parent class / interface which contains this function, if this is a global function parent is null */
    parent: TsClass | null
}
