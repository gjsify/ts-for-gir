import { NO_TSDATA } from './messages.js'
import { isEqual, merge, clone, typeIsOptional } from './utils.js'
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
    TsType,
} from './types/index.js'

/**
 * Resolve conflicts between types caused by overloads / inheritances and implementations
 * With multiple implementations or a inherit it can happen that the interfaces / parent have the same method and/or property name with incompatible types.
 */
export class ConflictResolver {
    private static getImplementedInterfaceElements(
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
            if (implementation.methods.length)
                methods.push(...(implementation.methods.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]))
            // Virtual methods
            if (implementation.virtualMethods.length)
                virtualMethods.push(
                    ...(implementation.virtualMethods.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )
            // Static functions
            if (implementation.staticFunctions.length)
                staticFunctions.push(
                    ...(implementation.staticFunctions.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )
            // Constructors
            if (implementation.constructors.length)
                constructors.push(
                    ...(implementation.constructors.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )

            // Properties
            if (implementation.properties.length)
                properties.push(...(implementation.properties.map((p) => p._tsData).filter((p) => !!p) as TsProperty[]))
            // Fields
            if (implementation.fields.length)
                fields.push(...(implementation.fields.map((p) => p._tsData).filter((p) => !!p) as TsVar[]))
            // Constructor properties
            if (implementation.constructProps.length)
                constructProps.push(
                    ...(implementation.constructProps.map((p) => p._tsData).filter((p) => !!p) as TsProperty[]),
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

    private static getInheritedClassElements(
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
            if (inherit.methods.length)
                methods.push(...(inherit.methods.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]))
            // Virtual methods
            if (inherit.virtualMethods.length)
                virtualMethods.push(
                    ...(inherit.virtualMethods.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )
            // Static functions
            if (inherit.staticFunctions.length)
                staticFunctions.push(
                    ...(inherit.staticFunctions.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]),
                )
            // Constructors
            if (inherit.constructors.length)
                constructors.push(...(inherit.constructors.map((m) => m._tsData).filter((m) => !!m) as TsFunction[]))

            // Properties
            if (inherit.properties.length)
                properties.push(...(inherit.properties.map((p) => p._tsData).filter((p) => !!p) as TsProperty[]))
            // Fields
            if (inherit.fields.length)
                fields.push(...(inherit.fields.map((p) => p._tsData).filter((p) => !!p) as TsVar[]))
            // Constructor properties
            if (inherit.constructProps.length)
                constructProps.push(
                    ...(inherit.constructProps.map((p) => p._tsData).filter((p) => !!p) as TsProperty[]),
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

    private static tsElementIsMethod(el: TsFunction | TsVar) {
        return !this.tsElementIsStatic(el) && this.tsElementIsMethodOrFunction(el)
    }

    private static tsElementIsStaticFunction(el: TsFunction | TsVar) {
        return this.tsElementIsStatic(el) && this.tsElementIsMethodOrFunction(el)
    }

    private static tsElementIsProperty(el: TsFunction | TsVar) {
        return !this.tsElementIsStatic(el) && this.tsElementIsPropertyOrVariable(el)
    }

    private static tsElementIsStaticProperty(el: TsFunction | TsVar) {
        return this.tsElementIsStatic(el) && this.tsElementIsPropertyOrVariable(el)
    }

    private static tsElementIsMethodOrFunction(el: TsFunction | TsVar) {
        return (
            el.tsTypeName === 'constructor' ||
            el.tsTypeName === 'function' ||
            el.tsTypeName === 'method' ||
            el.tsTypeName === 'static-function' ||
            el.tsTypeName === 'event-methods'
        )
    }

    private static tsElementIsPropertyOrVariable(el: TsFunction | TsVar) {
        return (
            el.tsTypeName === 'constant' ||
            el.tsTypeName === 'constructor-property' ||
            el.tsTypeName === 'property' ||
            el.tsTypeName === 'static-property'
        )
    }

    private static tsElementIsStatic(el: TsFunction | TsVar) {
        return (
            el.tsTypeName === 'constructor' ||
            el.tsTypeName === 'static-property' ||
            el.tsTypeName === 'static-function'
        )
    }

    private static typeIsString(type: TsType) {
        return (
            type.type === 'string' ||
            (type.type.startsWith("'") && type.type.endsWith("'")) ||
            (type.type.startsWith('"') && type.type.endsWith('"'))
        )
    }

    private static mergeType(a: TsType | undefined, b: TsType | undefined) {
        const dest: TsType[] = []
        if (!a && !b) {
            throw new Error('At least one type must be defined!')
        }
        if (a && b) {
            if (isEqual(a, b)) {
                dest.push(clone(a))
            } else {
                dest.push(clone(a), clone(b))
            }
        } else {
            dest.push(clone((a || b) as TsType))
        }

        return dest
    }

    private static mergeTypes(a: TsType[], b: TsType[]) {
        let dest = new Array<TsType>()
        if (isEqual(a, b)) {
            dest.push(...clone(a))
        } else {
            const length = Math.max(a.length, b.length)
            for (let i = 0; i < length; i++) {
                dest.push(...this.mergeType(a[i], b[i]))
            }
            if (typeIsOptional(dest)) {
                dest = this.setTypesProperty(dest, 'optional', true)
            }
        }

        return dest
    }

    private static setTypesProperty(types: TsType[], property: 'optional', value: boolean) {
        for (const type of types) {
            type[property] = value
        }
        return types
    }

    private static mergeParam(a: GirCallableParamElement | undefined, b: GirCallableParamElement | undefined) {
        if (!a?._tsData && !b?._tsData) {
            throw new Error('At least one parameter must be defined!')
        }

        let dest: GirCallableParamElement

        if (a?._tsData && b?._tsData) {
            dest = merge({}, clone(a), clone(b))
            if (!dest._tsData) {
                throw new Error('Error on merge parameters!')
            }
            dest._tsData.type = []
            dest._tsData.type = this.mergeTypes(a._tsData.type, b._tsData.type)
            if (a._tsData.name !== b._tsData.name) {
                dest._tsData.name = `${a._tsData.name}_or_${b._tsData.name}`
            }
        } else {
            dest = clone((a || b) as GirCallableParamElement)
            if (!dest._tsData) {
                throw new Error('Error on merge parameters!')
            }
            // If `a` or `b` is undefined make the types optional
            dest._tsData.type = this.setTypesProperty(dest._tsData.type, 'optional', true)
        }

        if (typeIsOptional(dest._tsData.type)) {
            dest._tsData.type = this.setTypesProperty(dest._tsData.type, 'optional', true)
        }

        return dest
    }

    private static mergeParams(a: GirCallableParamElement[], b: GirCallableParamElement[]) {
        let dest: GirCallableParamElement[]
        if (isEqual(a, b)) {
            dest = clone(a)
        } else {
            const length = Math.max(a.length, b.length)
            dest = new Array<GirCallableParamElement>(length)
            for (let i = 0; i < length; i++) {
                const aParam = a[i] as GirCallableParamElement | undefined
                const bParam = b[i] as GirCallableParamElement | undefined
                dest[i] = this.mergeParam(aParam, bParam)
            }
        }

        return dest
    }

    private static paramCanBeOptional(
        girParam: GirCallableParamElement,
        girParams: GirCallableParamElement[],
        skip: GirCallableParamElement[] = [],
    ) {
        if (!girParam._tsData) return false
        let canBeOptional = true
        const index = girParams.indexOf(girParam)
        const following = girParams
            .slice(index)
            .filter((p) => !!p._tsData)
            .filter(() => !skip.includes(girParam))
            .filter((p) => p.$.direction !== 'out')
            .map((p) => p._tsData)

        if (following.some((p) => p && !typeIsOptional(p.type))) {
            canBeOptional = false
        }

        return canBeOptional
    }

    /**
     * In Typescript no optional parameters are allowed if the following ones are not optional
     * @param girParams
     * @returns
     */
    private static fixOptionalParameters(girParams: GirCallableParamElement[]) {
        for (const girParam of girParams) {
            if (!girParam._tsData) throw new Error(NO_TSDATA('fixOptionalParameters'))
            if (typeIsOptional(girParam._tsData.type) && !this.paramCanBeOptional(girParam, girParams)) {
                this.setTypesProperty(girParam._tsData.type, 'optional', false)
            }
        }
        return girParams
    }

    public static mergeFunctions(a: TsFunction, b: TsFunction) {
        const result = merge({}, clone(a), clone(b))

        result.returnTypes = this.mergeTypes(a.returnTypes, b.returnTypes)

        if (!this.paramsMatch(a.inParams, b.inParams)) {
            result.inParams = this.mergeParams(a.inParams, b.inParams)
            // TODO: Not working for get_proxy_type_func_or_cancellable
            // result.inParams = this.fixOptionalParameters(result.inParams)
        }

        if (!this.paramsMatch(a.outParams, b.outParams)) {
            result.outParams = this.mergeParams(a.outParams, b.outParams)
        }

        return result
    }

    /**
     * Check if there is a type conflict between the ts elements a and b
     * @param a
     * @param b
     * @returns
     */
    public static hasConflict(a: TsFunction | TsVar, b: TsFunction | TsVar) {
        if (a.name === b.name) {
            if (a.name === 'constructor' || a.name === 'new' || a.name === '_init') {
                return false
            }

            if (!this.elementMatch(a, b)) {
                return true
            }
        }

        return false
    }

    /**
     * With multiple implementations or a inherit it can happen that the interfaces / parent have the same method and/or property name with incompatible types.
     * We merge these types here to solve this problem.
     * @param girClass
     */
    public static repairClass(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
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

    /**
     * Returns true if `p1s` and `p2s` are compatible with each other.
     * The parameters must have the same length and the same type but can have different names
     * @param p1s
     * @param p2s
     * @returns
     */
    public static paramsMatch(p1s: GirCallableParamElement[], p2s: GirCallableParamElement[]) {
        if (p1s.length !== p2s.length) {
            return false
        }

        for (const [i, p1] of p1s.entries()) {
            const p2 = p2s[i]
            if (p2._tsData && p1._tsData) {
                if (!this.typesMatch(p2._tsData?.type, p1._tsData?.type)) {
                    return false
                }
            } else {
                return false
            }
        }

        return true
    }

    public static typesMatch(a: TsType[], b: TsType[]) {
        if (!isEqual(a, b)) {
            return false
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
    public static functionMatch(a: TsFunction, b: TsFunction) {
        if (!this.typesMatch(a.returnTypes, b.returnTypes)) {
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
    public static propertyMatch(a: TsVar, b: TsVar) {
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
    public static elementMatch(a: TsFunction | TsVar, b: TsFunction | TsVar) {
        if (this.tsElementIsStatic(a) !== this.tsElementIsStatic(b)) {
            return true
        }

        if (this.tsElementIsMethodOrFunction(a) && this.tsElementIsMethodOrFunction(b)) {
            return this.functionMatch(a as TsFunction, b as TsFunction)
        }

        if (this.tsElementIsPropertyOrVariable(a) && this.tsElementIsPropertyOrVariable(b)) {
            return this.propertyMatch(a as TsVar, b as TsVar)
        }

        if (!isEqual(a, b)) {
            // TODO:
            return false
        }

        return true
    }
}
