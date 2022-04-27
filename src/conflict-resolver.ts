import { NO_TSDATA } from './messages.js'
import { isEqual } from './utils.js'
import type {
    GirFunctionElement,
    GirClassElement,
    GirVirtualMethodElement,
    GirRecordElement,
    GirFieldElement,
    GirMethodElement,
    GirPropertyElement,
    GirUnionElement,
    GirInterfaceElement,
    GirConstructorElement,
    GirCallableParamElement,
    TsSignal,
    TsFunction,
    TsVar,
} from './types/index.js'

/**
 * Resolve conflicts between types caused by overloads / inheritances and implementations
 * With multiple implementations or a inherit it can happen that the interfaces / parent have the same method and/or property name with incompatible types.
 */
export class ConflictResolver {
    /**
     * Returns true if `p1s` and `p2s` are compatible with each other.
     * The parameters must have the same length and the same type but can have different names
     * @param p1s
     * @param p2s
     * @returns
     */
    static paramsMatch(p1s: GirCallableParamElement[], p2s: GirCallableParamElement[]) {
        if (p1s.length !== p2s.length) {
            return false
        }

        for (const [i, p1] of p1s.entries()) {
            // Ignore parameter name, just check the types
            if (p2s[i]?._tsData?.type !== p1._tsData?.type) {
                return false
            }
        }

        return true
    }

    /**
     * Returns `true` if the function / method types of `a` and `b` are compatible with each other.
     * The parameters must have the same length and the same type but can have different names
     * @param a
     * @param b
     * @returns
     */
    static functionMatch(a: TsFunction, b: TsFunction) {
        if (!isEqual(a.returnTypes, b.returnTypes)) {
            return false
        }

        if (!this.paramsMatch(a.inParams, b.inParams)) {
            return false
        }

        if (!this.paramsMatch(a.outParams, b.outParams)) {
            return false
        }

        return true
    }

    /**
     * Returns `true` if the property types of `a` and `b` are compatible with each other.
     * @param a
     * @param b
     * @returns
     */
    static propertyMatch(a: TsVar, b: TsVar) {
        if (!isEqual(a.type, b.type)) {
            return false
        }

        return true
    }

    /**
     * Returns true if the elements (properties or methods) of `a` and `b` are compatible with each other.
     * @param a
     * @param b
     * @returns
     */
    static elementMatch(a: TsFunction | TsVar, b: TsFunction | TsVar) {
        if (this.tsElementIsMethod(a) && this.tsElementIsMethod(b)) {
            return this.functionMatch(a as TsFunction, b as TsFunction)
        }

        if (this.tsElementIsProperty(a) && this.tsElementIsProperty(b)) {
            return this.propertyMatch(a as TsVar, b as TsVar)
        }

        if (this.tsElementIsStaticFunction(a) && this.tsElementIsStaticFunction(b)) {
            return this.functionMatch(a as TsFunction, b as TsFunction)
        }

        if (this.tsElementIsStaticProperty(a) && this.tsElementIsStaticProperty(b)) {
            return this.propertyMatch(a as TsVar, b as TsVar)
        }

        if (!isEqual(a, b)) {
            // TODO:
            return false
        }

        return true
    }

    static tsElementIsMethod(el: TsFunction | TsVar) {
        return !this.tsElementIsStatic(el) && this.tsElementIsMethodOrFunction(el)
    }

    static tsElementIsStaticFunction(el: TsFunction | TsVar) {
        return this.tsElementIsStatic(el) && this.tsElementIsMethodOrFunction(el)
    }

    static tsElementIsProperty(el: TsFunction | TsVar) {
        return !this.tsElementIsStatic(el) && this.tsElementIsPropertyOrVariable(el)
    }

    static tsElementIsStaticProperty(el: TsFunction | TsVar) {
        return this.tsElementIsStatic(el) && this.tsElementIsPropertyOrVariable(el)
    }

    static tsElementIsMethodOrFunction(el: TsFunction | TsVar) {
        return (
            el.tsTypeName === 'constructor' ||
            el.tsTypeName === 'function' ||
            el.tsTypeName === 'method' ||
            el.tsTypeName === 'static-function' ||
            el.tsTypeName === 'event-methods'
        )
    }

    static tsElementIsPropertyOrVariable(el: TsFunction | TsVar) {
        return (
            el.tsTypeName === 'constant' ||
            el.tsTypeName === 'constructor-property' ||
            el.tsTypeName === 'property' ||
            el.tsTypeName === 'static-property'
        )
    }

    static tsElementIsStatic(el: TsFunction | TsVar) {
        return (
            el.tsTypeName === 'constructor' ||
            el.tsTypeName === 'static-property' ||
            el.tsTypeName === 'static-function'
        )
    }

    static getImplementedInterfaceProperties(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('getImplementedInterfaceProperties'))

        const properties: GirPropertyElement[] = []
        const fields: GirFieldElement[] = []

        for (const ifaceFullSymName of Object.keys(girClass._tsData.implements)) {
            const implementation = girClass._tsData.implements[ifaceFullSymName].interface
            if (implementation._tsData?.properties.length) properties.push(...implementation._tsData?.properties)
            if (implementation._tsData?.fields.length) fields.push(...implementation._tsData?.fields)
        }

        return {
            properties,
            fields,
        }
    }

    static getImplementedInterfaceMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('getImplementedInterfaceMethods'))

        const methods: GirMethodElement[] = []
        const virtualMethods: GirVirtualMethodElement[] = []
        const staticFunctions: (GirMethodElement | GirConstructorElement | GirFunctionElement)[] = []

        for (const ifaceFullSymName of Object.keys(girClass._tsData.implements)) {
            const implementation = girClass._tsData.implements[ifaceFullSymName].interface
            if (implementation._tsData?.methods.length) methods.push(...implementation._tsData.methods)
            if (implementation._tsData?.virtualMethods.length)
                virtualMethods.push(...implementation._tsData.virtualMethods)
            if (implementation._tsData?.staticFunctions.length)
                staticFunctions.push(...implementation._tsData.staticFunctions)
        }

        return {
            methods,
            virtualMethods,
            staticFunctions,
        }
    }

    static getInheritedClassProperties(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('getInheritedClassProperties'))

        const properties: GirPropertyElement[] = []
        const fields: GirFieldElement[] = []

        for (const ifaceFullSymName of Object.keys(girClass._tsData.inherit)) {
            const inherit = girClass._tsData.inherit[ifaceFullSymName].class
            if (inherit._tsData?.properties.length) properties.push(...inherit._tsData?.properties)
            if (inherit._tsData?.fields.length) fields.push(...inherit._tsData?.fields)
        }

        return {
            properties,
            fields,
        }
    }

    static getInheritedClassMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('getInheritedClassMethods'))

        const methods: GirMethodElement[] = []
        const virtualMethods: GirVirtualMethodElement[] = []
        const staticFunctions: (GirMethodElement | GirConstructorElement | GirFunctionElement)[] = []

        for (const ifaceFullSymName of Object.keys(girClass._tsData.inherit)) {
            const inherit = girClass._tsData.inherit[ifaceFullSymName].class
            if (inherit._tsData?.methods.length) methods.push(...inherit._tsData?.methods)
            if (inherit._tsData?.virtualMethods.length) virtualMethods.push(...inherit._tsData?.virtualMethods)
            if (inherit._tsData?.staticFunctions.length) staticFunctions.push(...inherit._tsData?.staticFunctions)
        }

        return {
            methods,
            virtualMethods,
            staticFunctions,
        }
    }

    /**
     * Check if there is a type conflict between the ts elements a and b
     * @param a
     * @param b
     * @returns
     */
    static hasConflict(a: TsFunction | TsVar, b: TsFunction | TsVar) {
        if (a.name === b.name) {
            if (this.tsElementIsStatic(a) && this.tsElementIsStatic(b)) {
                if (!this.elementMatch(a, b)) {
                    return true
                }
            }
            if (!this.tsElementIsStatic(a) && !this.tsElementIsStatic(b)) {
                if (!this.elementMatch(a, b)) {
                    return true
                }
            }
        }

        return false
    }

    /**
     * With multiple implementations or a inherit it can happen that the interfaces / parent have the same method and/or property name with incompatible types.
     * We merge these types here to solve this problem.
     * @param girClass
     */
    static repairClass(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('fixMethodConflicts'))

        const implementations = this.getImplementedInterfaceMethods(girClass)
        const inheritance = this.getInheritedClassMethods(girClass)

        const tsSignals = girClass._tsData.signals.map((s) => s._tsData).filter((s) => !!s) as TsSignal[]

        const signalMethods = [...girClass._tsData.propertySignalMethods]
        for (const tsSignal of tsSignals) {
            signalMethods.push(...tsSignal.tsMethods)
        }

        // Do not pass a reference of the array here
        const properties = [
            ...girClass._tsData.properties.map((p) => p._tsData),
            ...this.getImplementedInterfaceProperties(girClass).properties.map((p) => p._tsData),
            ...this.getInheritedClassProperties(girClass).properties.map((p) => p._tsData),
        ]

        const fields = [
            ...girClass._tsData.fields.map((p) => p._tsData),
            ...this.getImplementedInterfaceProperties(girClass).fields.map((p) => p._tsData),
            ...this.getInheritedClassProperties(girClass).fields.map((p) => p._tsData),
        ]

        const propsAndFields = [...properties, ...fields]

        // Do not pass a reference of the array here
        const methods = [
            ...girClass._tsData.methods.map((m) => m._tsData),
            ...implementations.methods.map((m) => m._tsData),
            ...inheritance.methods.map((m) => m._tsData),
            ...signalMethods,
            ...propsAndFields,
        ]

        // virtual methods can be handled separately as they do not overlap with other methods / properties due to their prefixes
        const virtualMethods = [
            ...implementations.virtualMethods.map((m) => m._tsData),
            ...inheritance.virtualMethods.map((m) => m._tsData),
        ]

        const staticFunctions = [
            ...girClass._tsData.constructors.map((m) => m._tsData),
            ...implementations.staticFunctions.map((m) => m._tsData),
            ...inheritance.staticFunctions.map((m) => m._tsData),
        ]

        for (const a of methods) {
            for (const b of methods) {
                if (a && b && this.hasConflict(a, b)) {
                    // temporary solution, will be solved differently later
                    a.hasConflict = true
                    b.hasConflict = true
                }
            }
        }

        for (const method1 of virtualMethods) {
            for (const method2 of virtualMethods) {
                if (method1 && method2 && this.hasConflict(method1, method2)) {
                    // temporary solution, will be solved differently later
                    method1.hasConflict = true
                    method2.hasConflict = true
                }
            }
        }

        for (const method1 of staticFunctions) {
            for (const method2 of staticFunctions) {
                if (method1 && method2 && method1.name === method2.name && this.hasConflict(method1, method2)) {
                    // temporary solution, will be solved differently later
                    method1.hasConflict = true
                    method2.hasConflict = true
                }
            }
        }
    }
}
