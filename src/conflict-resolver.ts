import { NO_TSDATA } from './messages.js'
import { isEqual, functionMatch } from './utils.js'
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
    TsSignal,
} from './types/index.js'

/**
 * Resolve conflicts between types caused by overloads / inheritances and implementations
 * With multiple implementations or a inherit it can happen that the interfaces / parent have the same method and/or property name with incompatible types.
 */
export class ConflictResolver {
    private getImplementedInterfaceProperties(
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

    private getImplementedInterfaceMethods(
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

    private getInheritedClassProperties(
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

    private getInheritedClassMethods(
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
     * With multiple implementations or a inherit it can happen that the interfaces / parent have the same method and/or property name with incompatible types.
     * We merge these types here to solve this problem.
     * @param girClass
     */
    public repairClass(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
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
            // TODO: ...propsAndFields,
        ]

        // virtual methods can be handled separately as they do not overlap with other methods / properties due to their prefixes
        const virtualMethods = [
            ...girClass._tsData.methods.map((m) => m._tsData),
            ...implementations.virtualMethods.map((m) => m._tsData),
            ...inheritance.virtualMethods.map((m) => m._tsData),
        ]

        const staticFunctions = [
            ...girClass._tsData.methods.map((m) => m._tsData),
            ...implementations.staticFunctions.map((m) => m._tsData),
            ...inheritance.staticFunctions.map((m) => m._tsData),
        ]

        for (const a of methods) {
            for (const b of methods) {
                if (a && b && a.name === b.name && !functionMatch(a, b)) {
                    // temporary solution, will be solved differently later
                    a.hasConflict = true
                    b.hasConflict = true
                }
            }
        }

        for (const method1 of virtualMethods) {
            for (const method2 of virtualMethods) {
                if (method1 && method2 && method1.name === method2.name && !functionMatch(method1, method2)) {
                    // temporary solution, will be solved differently later
                    method1.hasConflict = true
                    method2.hasConflict = true
                }
            }
        }

        for (const method1 of staticFunctions) {
            for (const method2 of staticFunctions) {
                if (method1 && method2 && method1.name === method2.name && !functionMatch(method1, method2)) {
                    // temporary solution, will be solved differently later
                    method1.hasConflict = true
                    method2.hasConflict = true
                }
            }
        }

        for (const prop1 of propsAndFields) {
            for (const prop2 of propsAndFields) {
                if (prop1 && prop2 && prop1.name === prop2.name && !isEqual(prop1, prop2)) {
                    // temporary solution, will be solved differently later
                    prop1.hasConflict = true
                    prop2.hasConflict = true
                }
            }
        }
    }
}
