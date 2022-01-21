import { GirFunctionElement, GirConstructorElement, GirVirtualMethodElement } from '.'
export type FunctionMap<T = GirFunctionElement | GirConstructorElement | GirVirtualMethodElement> = Map<string, T>
