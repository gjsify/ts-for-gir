import {
    GirCallableParamElement,
    GirInstanceParameter,
    GirConstructorElement,
    GirFunctionElement,
    GirVirtualMethodElement,
    GirMethodElement,
} from '.'

export interface DescFunction {
    name: string
    returnType: string
    /** true if this function is a arrow function: `() => {}` */
    isArrowType: boolean
    /** c `static foobar() {}` */
    isStatic: boolean
    /** true if this function is a global function and not part of a class: `function foobar() {}` */
    isGlobal: boolean
    /** true if this function is a virtual method with the `vfunc:` prefix: vfunc_foobar() {} */
    isVirtual: boolean
    overrideReturnType?: string
    patched: boolean
    retTypeIsVoid: boolean
    inParams: GirCallableParamElement[]
    instanceParameters: GirInstanceParameter[]
    outParams: GirCallableParamElement[]
    overloads: Array<GirConstructorElement | GirFunctionElement | GirVirtualMethodElement | GirMethodElement>
}
