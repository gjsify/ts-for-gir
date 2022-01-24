import { GirFunctionElement, GirConstructorElement, GirVirtualMethodElement, GirMethodElement } from '.'
export type FunctionMap<T = GirConstructorElement | GirFunctionElement | GirVirtualMethodElement | GirMethodElement> =
    Map<string, T>
