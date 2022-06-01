import { NO_TSDATA } from './messages.js'
import { isEqual, merge, clone, typeIsOptional } from './utils.js'
import type {
    GirClassElement,
    GirRecordElement,
    GirUnionElement,
    GirInterfaceElement,
    GirCallableParamElement,
    GirMethodElement,
    GirVirtualMethodElement,
    GirConstructorElement,
    GirFunctionElement,
    GirPropertyElement,
    GirFieldElement,
    TsSignal,
    TsFunction,
    TsProperty,
    TsVar,
    TsType,
    TsClass,
} from './types/index.js'

interface ChildElement {
    /**
     * The depth of the inheritance, starts at 1.
     * 1 means it is a direct inheritance,
     * greater means it is an indirect inheritance
     */
    depth: number
    data: TsFunction | TsProperty | TsVar
}

interface GroupedConflictElements {
    [name: string]: ChildElement[]
}

interface ChildFunction extends ChildElement {
    data: TsFunction
}

interface ChildProperty extends ChildElement {
    data: TsProperty | TsVar
}

/**
 * Resolve conflicts between types caused by overloads / inheritances and implementations
 * With multiple implementations or a inherit it can happen that the interfaces / parent have the same method and/or property name with incompatible types.
 */
export class ConflictResolver {
    private static girElArrToChildArr<T extends ChildElement>(
        dataArr: Array<
            | GirMethodElement
            | GirVirtualMethodElement
            | GirConstructorElement
            | GirFunctionElement
            | GirPropertyElement
            | GirFieldElement
        >,
        depth: number,
    ): T[] {
        return dataArr
            .filter((m) => !!m?._tsData)
            .map((data) => {
                return {
                    depth,
                    data: data?._tsData,
                } as T
            })
    }

    private static tsElArrToChildArr<T extends ChildElement>(
        dataArr: Array<TsFunction | TsProperty | TsVar>,
        depth: number,
    ): T[] {
        return dataArr
            .filter((m) => !!m)
            .map((data) => {
                return {
                    depth,
                    data,
                } as T
            })
    }

    private static getImplementedInterfaceElements(tsIface: TsClass) {
        const methods: ChildFunction[] = []
        const virtualMethods: ChildFunction[] = []
        const staticFunctions: ChildFunction[] = []
        const constructors: ChildFunction[] = []

        const properties: ChildProperty[] = []
        const fields: ChildProperty[] = []
        const constructProps: ChildProperty[] = []

        for (const ifaceFullSymName of Object.keys(tsIface.implements)) {
            const { interface: implementation, depth } = tsIface.implements[ifaceFullSymName]
            // Methods
            if (implementation.methods.length)
                methods.push(...this.girElArrToChildArr<ChildFunction>(implementation.methods, depth))
            // Virtual methods
            if (implementation.virtualMethods.length)
                virtualMethods.push(...this.girElArrToChildArr<ChildFunction>(implementation.virtualMethods, depth))
            // Static functions
            if (implementation.staticFunctions.length)
                staticFunctions.push(...this.girElArrToChildArr<ChildFunction>(implementation.staticFunctions, depth))
            // Constructors
            if (implementation.constructors.length)
                constructors.push(...this.girElArrToChildArr<ChildFunction>(implementation.constructors, depth))

            // Properties
            if (implementation.properties.length)
                properties.push(...this.girElArrToChildArr<ChildProperty>(implementation.properties, depth))
            // Fields
            if (implementation.fields.length)
                fields.push(...this.girElArrToChildArr<ChildProperty>(implementation.fields, depth))
            // Constructor properties
            if (implementation.constructProps.length)
                constructProps.push(...this.girElArrToChildArr<ChildProperty>(implementation.constructProps, depth))

            // Also get inheritances of the implemented class
            const indirect = this.getInheritedClassElements(implementation)
            methods.push(...indirect.methods)
            virtualMethods.push(...indirect.virtualMethods)
            staticFunctions.push(...indirect.staticFunctions)
            constructors.push(...indirect.constructors)
            properties.push(...indirect.properties)
            fields.push(...indirect.fields)
            constructProps.push(...indirect.constructProps)
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

    private static getInheritedClassElements(girClass: TsClass) {
        const methods: ChildFunction[] = []
        const virtualMethods: ChildFunction[] = []
        const staticFunctions: ChildFunction[] = []
        const constructors: ChildFunction[] = []

        const properties: ChildProperty[] = []
        const fields: ChildProperty[] = []
        const constructProps: ChildProperty[] = []

        for (const ifaceFullSymName of Object.keys(girClass.inherit)) {
            const { class: inherit, depth } = girClass.inherit[ifaceFullSymName]
            // Methods
            if (inherit.methods.length) methods.push(...this.girElArrToChildArr<ChildFunction>(inherit.methods, depth))
            // Virtual methods
            if (inherit.virtualMethods.length)
                virtualMethods.push(...this.girElArrToChildArr<ChildFunction>(inherit.virtualMethods, depth))
            // Static functions
            if (inherit.staticFunctions.length)
                staticFunctions.push(...this.girElArrToChildArr<ChildFunction>(inherit.staticFunctions, depth))
            // Constructors
            if (inherit.constructors.length)
                constructors.push(...this.girElArrToChildArr<ChildFunction>(inherit.constructors, depth))
            // Properties
            if (inherit.properties.length)
                properties.push(...this.girElArrToChildArr<ChildProperty>(inherit.properties, depth))
            // Fields
            if (inherit.fields.length) fields.push(...this.girElArrToChildArr<ChildProperty>(inherit.fields, depth))
            // Constructor properties
            if (inherit.constructProps.length)
                constructProps.push(...this.girElArrToChildArr<ChildProperty>(inherit.constructProps, depth))

            // Also get implementations of the inherited class
            const indirect = this.getImplementedInterfaceElements(inherit)
            methods.push(...indirect.methods)
            virtualMethods.push(...indirect.virtualMethods)
            staticFunctions.push(...indirect.staticFunctions)
            constructors.push(...indirect.constructors)
            properties.push(...indirect.properties)
            fields.push(...indirect.fields)
            constructProps.push(...indirect.constructProps)
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

    private static mergeTypes(...types: Array<TsType | undefined>) {
        const dest: TsType[] = []

        for (const type of types) {
            if (!type) continue
            if (!dest.find((destType) => isEqual(destType, type))) {
                dest.push(type)
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
            dest._tsData.type = this.mergeTypes(...a._tsData.type, ...b._tsData.type)
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

    private static mergeParams(...params: GirCallableParamElement[][]) {
        let dest: GirCallableParamElement[] = []

        for (const a of params) {
            for (const b of params) {
                if (a === b) {
                    continue
                }
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

    public static mergeFunctions(...funcs: TsFunction[]) {
        const returnTypesMap: TsType[] = []
        for (const func of funcs) {
            returnTypesMap.push(...func.returnTypes)
        }
        const returnTypes = this.mergeTypes(...returnTypesMap)

        const inParamsMap = funcs.map((func) => func.inParams)
        const inParams: GirCallableParamElement[] = []
        if (!this.paramsMatch(...inParamsMap)) {
            inParams.push(...this.mergeParams(...inParamsMap))
        }

        const outParamsMap = funcs.map((func) => func.outParams)
        const outParams: GirCallableParamElement[] = []
        if (!this.paramsMatch(...outParamsMap)) {
            outParams.push(...this.mergeParams(...outParamsMap))
        }

        if (funcs[0]) {
            funcs[0].returnTypes = returnTypes
            funcs[0].inParams = inParams
            funcs[0].outParams = outParams
        }
    }

    /**
     * Check if there is a type conflict between the ts elements a and b
     * @param a
     * @param b
     * @returns
     */
    public static hasConflict(a: ChildElement, b: ChildElement) {
        if (a !== b && a.data.name === b.data.name) {
            if (a.data.name === 'constructor' || a.data.name === 'new' || a.data.name === '_init') {
                return false
            }
            if (!this.elementMatch(a.data, b.data)) {
                return true
            }
        }

        return false
    }

    /**
     * Fix the conflicts by merging the types with each other
     * @param groupedElements
     */
    public static fixConflicts(groupedElements: GroupedConflictElements) {
        for (const name of Object.keys(groupedElements)) {
            const elements = groupedElements[name]
            for (const a of elements) {
                for (const b of elements) {
                    if (a === b) {
                        continue
                    }
                    if (this.tsElementIsMethodOrFunction(a.data) && this.tsElementIsMethodOrFunction(b.data)) {
                        this.mergeFunctions(a.data as TsFunction, b.data as TsFunction)
                    } else {
                        // Temporary solution, will be solved differently later
                        a.data.hasUnresolvedConflict = true
                    }
                }
            }
        }
    }

    /**
     * Group conflicts by name and sort them by depth for simpler handling of conflicts
     */
    public static groupConflicts(elements: ChildElement[]) {
        const groupedConflicts: GroupedConflictElements = {}

        for (const a of elements) {
            for (const b of elements) {
                if (a && a.data.name && b && this.hasConflict(a, b)) {
                    groupedConflicts[a.data.name] ||= []
                    const groupedConflict = groupedConflicts[a.data.name]

                    if (!groupedConflict.includes(a)) {
                        groupedConflict.push(a)
                    }
                    if (!groupedConflict.includes(b)) {
                        groupedConflict.push(b)
                    }
                }
            }
        }

        // Sort by depth
        for (const name of Object.keys(groupedConflicts)) {
            groupedConflicts[name] = groupedConflicts[name].sort((a, b) => a.depth - b.depth)
        }

        return groupedConflicts
    }

    /**
     * With multiple implementations or a inherit it can happen that the interfaces / parent have the same method and/or property name with incompatible types.
     * We merge these types here to solve this problem.
     * @param girClass
     */
    public static repairClass(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('repairClass'))

        const implementations = this.getImplementedInterfaceElements(girClass._tsData)
        const inheritance = this.getInheritedClassElements(girClass._tsData)

        const tsSignals = girClass._tsData.signals.map((s) => s._tsData).filter((s) => !!s) as TsSignal[]

        const constructProps = [
            ...this.girElArrToChildArr(girClass._tsData.constructProps, 0),
            ...implementations.constructProps,
            ...inheritance.constructProps,
        ]

        const signalMethods = [...this.tsElArrToChildArr(girClass._tsData.propertySignalMethods, 0)]
        for (const tsSignal of tsSignals) {
            signalMethods.push(...this.tsElArrToChildArr(tsSignal.tsMethods, 0))
        }

        const methods = [
            ...this.girElArrToChildArr(girClass._tsData.methods, 0),
            ...implementations.methods,
            ...inheritance.methods,
        ]

        const virtualMethods = [
            ...this.girElArrToChildArr(girClass._tsData.virtualMethods, 0),
            ...implementations.virtualMethods,
            ...inheritance.virtualMethods,
        ]

        const constructors = [
            ...this.girElArrToChildArr(girClass._tsData.constructors, 0),
            ...implementations.constructors,
            ...inheritance.constructors,
        ]

        const staticFunctions = [
            ...this.girElArrToChildArr(girClass._tsData.staticFunctions, 0),
            ...implementations.staticFunctions,
            ...inheritance.staticFunctions,
        ]

        const properties = [
            ...this.girElArrToChildArr(girClass._tsData.properties, 0),
            ...implementations.properties,
            ...inheritance.properties,
        ]

        const fields = [
            ...this.girElArrToChildArr(girClass._tsData.fields, 0),
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

        const groupedElementConflicts = this.groupConflicts(elements)
        const groupedConstructPropConflicts = this.groupConflicts(constructProps)

        this.fixConflicts(groupedElementConflicts)
        this.fixConflicts(groupedConstructPropConflicts)
    }

    /**
     * Returns true if `p1s` and `p2s` are compatible with each other.
     * The parameters must have the same length and the same type but can have different names
     * @param params
     * @returns
     */
    public static paramsMatch(...params: GirCallableParamElement[][]) {
        let match = true
        for (const p1s of params) {
            for (const p2s of params) {
                if (p1s === p2s) {
                    match = true
                    continue
                }

                if (p1s.length !== p2s.length) {
                    match = false
                    return match
                }

                for (const [i, p1] of p1s.entries()) {
                    const p2 = p2s[i]
                    if (p2._tsData && p1._tsData) {
                        if (!this.typesMatch(p2._tsData?.type, p1._tsData?.type)) {
                            match = false
                            return match
                        }
                    } else {
                        match = false
                        return match
                    }
                }
            }
        }

        return match
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
