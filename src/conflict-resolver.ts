import { NO_TSDATA } from './messages.js'
import { isEqual } from './utils.js'
import type {
    GirClassElement,
    GirRecordElement,
    GirUnionElement,
    GirInterfaceElement,
    GirCallableParamElement,
    TsSignal,
    TsFunction,
    TsProperty,
    TsVar,
} from './types/index.js'

/**
 * Resolve conflicts between types caused by overloads / inheritances and implementations
 * With multiple implementations or a inherit it can happen that the interfaces / parent have the same method and/or property name with incompatible types.
 */
export class ConflictResolver {
    static getImplementedInterfaceElements(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('getImplementedInterfaceElements'))

        const methods: TsFunction[] = []
        const virtualMethods: TsFunction[] = []
        const staticFunctions: TsFunction[] = []
        const constructors: TsFunction[] = []

        const properties: TsProperty[] = []
        const fields: TsVar[] = []
        const constructProps: TsProperty[] = []

        for (const ifaceFullSymName of Object.keys(girClass._tsData.implements)) {
            const implementation = girClass._tsData.implements[ifaceFullSymName].interface
            // Methods
            if (implementation._tsData?.methods.length)
                methods.push(
                    ...(implementation._tsData.methods.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )
            // Virtual methods
            if (implementation._tsData?.virtualMethods.length)
                virtualMethods.push(
                    ...(implementation._tsData.virtualMethods.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )
            // Static functions
            if (implementation._tsData?.staticFunctions.length)
                staticFunctions.push(
                    ...(implementation._tsData.staticFunctions
                        .map((m) => m._tsData)
                        .filter((m) => !!m) as TsFunction[]),
                )
            // Static functions
            if (implementation._tsData?.constructors.length)
                constructors.push(
                    ...(implementation._tsData.constructors.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )
            // Constructors
            if (implementation._tsData?.constructors.length)
                constructors.push(
                    ...(implementation._tsData.constructors.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )

            // Properties
            if (implementation._tsData?.properties.length)
                properties.push(
                    ...(implementation._tsData?.properties.map((p) => p._tsData).filter((p) => !!p) as TsProperty[]),
                )
            // Fields
            if (implementation._tsData?.fields.length)
                fields.push(...(implementation._tsData?.fields.map((p) => p._tsData).filter((p) => !!p) as TsVar[]))
            // Constructor properties
            if (implementation._tsData?.constructProps.length)
                constructProps.push(
                    ...(implementation._tsData?.constructProps
                        .map((p) => p._tsData)
                        .filter((p) => !!p) as TsProperty[]),
                )
        }

        return {
            methods,
            virtualMethods,
            staticFunctions,
            constructors,
            properties,
            fields,
            constructProps,
        }
    }

    static getInheritedClassElements(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('getInheritedClassElements'))

        const methods: TsFunction[] = []
        const virtualMethods: TsFunction[] = []
        const staticFunctions: TsFunction[] = []
        const constructors: TsFunction[] = []

        const properties: TsProperty[] = []
        const fields: TsVar[] = []
        const constructProps: TsProperty[] = []

        for (const ifaceFullSymName of Object.keys(girClass._tsData.inherit)) {
            const inherit = girClass._tsData.inherit[ifaceFullSymName].class
            // Methods
            if (inherit._tsData?.methods.length)
                methods.push(...(inherit._tsData?.methods.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]))
            // Virtual methods
            if (inherit._tsData?.virtualMethods.length)
                virtualMethods.push(
                    ...(inherit._tsData?.virtualMethods.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )
            // Static functions
            if (inherit._tsData?.staticFunctions.length)
                staticFunctions.push(
                    ...(inherit._tsData?.staticFunctions.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )
            // Constructors
            if (inherit._tsData?.constructors.length)
                constructors.push(
                    ...(inherit._tsData?.constructors.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )

            // Properties
            if (inherit._tsData?.properties.length)
                properties.push(
                    ...(inherit._tsData?.properties.map((p) => p._tsData).filter((p) => !!p) as TsProperty[]),
                )
            // Fields
            if (inherit._tsData?.fields.length)
                fields.push(...(inherit._tsData?.fields.map((p) => p._tsData).filter((p) => !!p) as TsVar[]))
            // Constructor properties
            if (inherit._tsData?.constructProps.length)
                constructProps.push(
                    ...(inherit._tsData?.constructProps.map((p) => p._tsData).filter((p) => !!p) as TsProperty[]),
                )
        }

        return {
            methods,
            virtualMethods,
            staticFunctions,
            constructors,
            properties,
            fields,
            constructProps,
        }
    }

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

    /**
     * Check if there is a type conflict between the ts elements a and b
     * @param a
     * @param b
     * @returns
     */
    static hasConflict(a: TsFunction | TsVar, b: TsFunction | TsVar) {
        if (a.name === b.name) {
            if (a.name === 'constructor') {
                return false
            }

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
        if (!girClass._tsData) throw new Error(NO_TSDATA('repairClass'))

        const implementations = this.getImplementedInterfaceElements(girClass)
        const inheritance = this.getInheritedClassElements(girClass)

        const tsSignals = girClass._tsData.signals.map((s) => s._tsData).filter((s) => !!s) as TsSignal[]

        const constructProps = [
            ...girClass._tsData.constructProps.map((p) => p._tsData),
            ...implementations.constructProps,
            ...inheritance.constructProps,
        ]

        const signalMethods = [...girClass._tsData.propertySignalMethods]
        for (const tsSignal of tsSignals) {
            signalMethods.push(...tsSignal.tsMethods)
        }

        const methods = [
            ...girClass._tsData.methods.map((m) => m._tsData),
            ...implementations.methods,
            ...inheritance.methods,
        ]

        const virtualMethods = [
            ...girClass._tsData.virtualMethods.map((m) => m._tsData),
            ...implementations.virtualMethods,
            ...inheritance.virtualMethods,
        ]

        const constructors = [
            ...girClass._tsData.constructors.map((m) => m._tsData),
            ...implementations.constructors,
            ...inheritance.constructors,
        ]

        const staticFunctions = [
            ...girClass._tsData.staticFunctions.map((m) => m._tsData),
            ...implementations.staticFunctions,
            ...inheritance.staticFunctions,
        ]

        const properties = [
            ...girClass._tsData.properties.map((p) => p._tsData),
            ...implementations.properties,
            ...inheritance.properties,
        ]

        const fields = [
            ...girClass._tsData.fields.map((p) => p._tsData),
            ...implementations.fields,
            ...inheritance.fields,
        ]

        // Do not pass a reference of the array here
        const elements = [
            ...methods,
            ...signalMethods,
            ...virtualMethods,
            ...staticFunctions,
            ...constructors,
            ...properties,
            ...fields,
        ]

        for (const a of elements) {
            for (const b of elements) {
                if (a && b && this.hasConflict(a, b)) {
                    // temporary solution, will be solved differently later
                    a.hasConflict = true
                    b.hasConflict = true
                }
            }
        }

        for (const a of constructProps) {
            for (const b of constructProps) {
                if (a && b && this.hasConflict(a, b)) {
                    // temporary solution, will be solved differently later
                    a.hasConflict = true
                    b.hasConflict = true
                }
            }
        }
    }
}
