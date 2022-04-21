import { GirFunctionElement, GirConstructorElement, GirVirtualMethodElement, GirMethodElement } from './index.js'
export type FunctionMap<T = GirConstructorElement | GirFunctionElement | GirVirtualMethodElement | GirMethodElement> =
    Map<string, T>
