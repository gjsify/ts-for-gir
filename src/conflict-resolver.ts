import { GirFactory } from './gir-factory.js'
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
    TsParameter,
    TypeGirFunction,
    TypeProperty,
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
    [name: string]: {
        baseElements: ChildElement[]
        inheritedElements: ChildElement[]
        baseClass: TsClass
    }
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
    private static girFactory = new GirFactory()

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

    private static getImplementedInterfaceElements(tsIface: TsClass, addDepth = 0) {
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
                methods.push(...this.girElArrToChildArr<ChildFunction>(implementation.methods, depth + addDepth))
            // Virtual methods
            if (implementation.virtualMethods.length)
                virtualMethods.push(
                    ...this.girElArrToChildArr<ChildFunction>(implementation.virtualMethods, depth + addDepth),
                )
            // Static functions
            if (implementation.staticFunctions.length)
                staticFunctions.push(
                    ...this.girElArrToChildArr<ChildFunction>(implementation.staticFunctions, depth + addDepth),
                )
            // Constructors
            if (implementation.constructors.length)
                constructors.push(
                    ...this.girElArrToChildArr<ChildFunction>(implementation.constructors, depth + addDepth),
                )

            // Properties
            if (implementation.properties.length)
                properties.push(...this.girElArrToChildArr<ChildProperty>(implementation.properties, depth + addDepth))
            // Fields
            if (implementation.fields.length)
                fields.push(...this.girElArrToChildArr<ChildProperty>(implementation.fields, depth + addDepth))
            // Constructor properties
            if (implementation.constructProps.length)
                constructProps.push(
                    ...this.girElArrToChildArr<ChildProperty>(implementation.constructProps, depth + addDepth),
                )

            // Also get inheritances of the implemented class
            const indirectInheritances = this.getInheritedClassElements(implementation, addDepth + 1)
            methods.push(...indirectInheritances.methods)
            virtualMethods.push(...indirectInheritances.virtualMethods)
            staticFunctions.push(...indirectInheritances.staticFunctions)
            constructors.push(...indirectInheritances.constructors)
            properties.push(...indirectInheritances.properties)
            fields.push(...indirectInheritances.fields)
            constructProps.push(...indirectInheritances.constructProps)

            // Also get implementations of the implemented class
            const indirectImplementations = this.getImplementedInterfaceElements(implementation, addDepth + 1)
            methods.push(...indirectImplementations.methods)
            virtualMethods.push(...indirectImplementations.virtualMethods)
            staticFunctions.push(...indirectImplementations.staticFunctions)
            constructors.push(...indirectImplementations.constructors)
            properties.push(...indirectImplementations.properties)
            fields.push(...indirectImplementations.fields)
            constructProps.push(...indirectImplementations.constructProps)
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

    private static getInheritedClassElements(girClass: TsClass, addDepth = 0) {
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
            if (inherit.methods.length)
                methods.push(...this.girElArrToChildArr<ChildFunction>(inherit.methods, depth + addDepth))
            // Virtual methods
            if (inherit.virtualMethods.length)
                virtualMethods.push(...this.girElArrToChildArr<ChildFunction>(inherit.virtualMethods, depth + addDepth))
            // Static functions
            if (inherit.staticFunctions.length)
                staticFunctions.push(
                    ...this.girElArrToChildArr<ChildFunction>(inherit.staticFunctions, depth + addDepth),
                )
            // Constructors
            if (inherit.constructors.length)
                constructors.push(...this.girElArrToChildArr<ChildFunction>(inherit.constructors, depth + addDepth))
            // Properties
            if (inherit.properties.length)
                properties.push(...this.girElArrToChildArr<ChildProperty>(inherit.properties, depth + addDepth))
            // Fields
            if (inherit.fields.length)
                fields.push(...this.girElArrToChildArr<ChildProperty>(inherit.fields, depth + addDepth))
            // Constructor properties
            if (inherit.constructProps.length)
                constructProps.push(...this.girElArrToChildArr<ChildProperty>(inherit.constructProps, depth + addDepth))

            // Also get implementations of the inherited class
            const indirectImplementations = this.getImplementedInterfaceElements(inherit, addDepth + 1)
            methods.push(...indirectImplementations.methods)
            virtualMethods.push(...indirectImplementations.virtualMethods)
            staticFunctions.push(...indirectImplementations.staticFunctions)
            constructors.push(...indirectImplementations.constructors)
            properties.push(...indirectImplementations.properties)
            fields.push(...indirectImplementations.fields)
            constructProps.push(...indirectImplementations.constructProps)

            // Also get inheritances of the inherited class
            const indirectInheritances = this.getInheritedClassElements(inherit, addDepth + 1)
            methods.push(...indirectInheritances.methods)
            virtualMethods.push(...indirectInheritances.virtualMethods)
            staticFunctions.push(...indirectInheritances.staticFunctions)
            constructors.push(...indirectInheritances.constructors)
            properties.push(...indirectInheritances.properties)
            fields.push(...indirectInheritances.fields)
            constructProps.push(...indirectInheritances.constructProps)
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

    private static tsElementIsSignal(el: TsFunction | TsVar) {
        return el.tsTypeName === 'event-methods'
    }

    private static tsElementIsConstructor(el: TsFunction | TsVar) {
        return el.tsTypeName === 'constructor'
    }

    private static tsElementIsMethodOrFunction(el: TsFunction | TsVar) {
        return (
            el.tsTypeName === 'function' || el.tsTypeName === 'method' || el.tsTypeName === 'static-function'
            // el.tsTypeName === 'event-methods'
            // el.tsTypeName === 'constructor' ||
        )
    }

    private static tsElementIsPropertyOrVariable(el: TsFunction | TsVar | TsProperty) {
        return (
            el.tsTypeName === 'constant' ||
            el.tsTypeName === 'constructor-property' ||
            el.tsTypeName === 'property' ||
            el.tsTypeName === 'static-property'
        )
    }

    private static tsElementIsStatic(el: TsFunction | TsVar) {
        return (
            // el.tsTypeName === 'constructor' ||
            el.tsTypeName === 'static-property' || el.tsTypeName === 'static-function'
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

    /**
     * Merges two parameter name and type of two parameters
     * @param a
     * @param b
     * @returns
     */
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

    /**
     * Merges parameter names and types of multiple functions
     * @param params
     * @returns
     */
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
        if (this.paramsHasConflict(...inParamsMap)) {
            inParams.push(...this.mergeParams(...inParamsMap))
        }

        const outParamsMap = funcs.map((func) => func.outParams)
        const outParams: GirCallableParamElement[] = []
        if (this.paramsHasConflict(...outParamsMap)) {
            outParams.push(...this.mergeParams(...outParamsMap))
        }

        if (!funcs[0]) {
            throw new Error('At least one function must exist!')
        }

        return this.girFactory.newTsFunction({
            name: funcs[0].name,
            returnTypes: returnTypes,
            inParams: inParams.map((inParam) => inParam._tsData).filter((inParam) => !!inParam) as TsParameter[],
            outParams: outParams.map((outParam) => outParam._tsData).filter((outParam) => !!outParam) as TsParameter[],
            girTypeName: funcs[0].girTypeName,
        })
    }

    public static mergeProperties(...props: TsProperty[]) {
        // Merge types
        const typesMap: TsType[] = []
        for (const prop of props) {
            typesMap.push(...prop.type)
        }
        const types = this.mergeTypes(...typesMap)

        // Merge readonly
        let readonly = false
        for (const prop of props) {
            readonly = readonly || prop.readonly || false
        }

        if (!props[0] || !props[0].name) {
            throw new Error('At least one property must exist!')
        }

        return this.girFactory.newTsProperty({
            readonly: readonly,
            isStatic: props[0].isStatic || false,
            name: props[0].name,
            type: types,
            girTypeName: props[0].girTypeName,
        })
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
            if (this.elementHasConflict(a.data, b.data)) {
                return true
            }
        }

        return false
    }

    public static newAnyTsProperty(name: string, girTypeName: TypeProperty) {
        return this.girFactory.newTsProperty({
            name,
            girTypeName,
            type: [{ type: 'any' }],
        })
    }

    /**
     * Returns a new any function: `name(...args: any[]): any`
     * @param name The name of the function
     */
    public static newAnyTsFunction(name: string, girTypeName: TypeGirFunction) {
        return this.girFactory.newTsFunction({
            name,
            inParams: [
                {
                    name: 'args',
                    isRest: true,
                    type: [this.girFactory.newTsType({ type: 'any', isArray: true })],
                },
            ],
            returnTypes: [{ type: 'any' }],
            girTypeName,
        })
    }

    public static getCompatibleTsProperty(elements: TsProperty[], name: string) {
        return elements.find((el) => el.name === name)
    }

    public static getCompatibleTsFunction(elements: TsFunction[], baseFunc: TsFunction) {
        return elements.find((func) => !this.functionHasConflict(baseFunc, func))
    }

    /**
     * Check conflicts between the implementations / inheritances
     * To fix type errors like:
     * ```
     *   Interface 'PopoverMenu' cannot simultaneously extend types 'Popover' and 'Native'.
     *   Named property 'parent' of types 'Popover' and 'Native' are not identical.
     */
    public static fixIndirectConflicts(elements: ChildElement[], baseClass: TsClass) {
        for (const base of elements) {
            for (const b of elements) {
                if (b === base) {
                    continue
                }

                if (base.data.name === 'parent') {
                    debugger
                }

                // If a element is a function / method
                if (this.tsElementIsMethodOrFunction(base.data)) {
                    const baseFunc = base.data as TsFunction

                    // Function vs. Property
                    if (this.tsElementIsPropertyOrVariable(b.data)) {
                        const bProp = b.data as TsProperty
                        const anyProp = this.newAnyTsProperty(bProp.name || 'unknown', bProp.girTypeName)
                        if (bProp.name && !this.getCompatibleTsProperty(baseClass.conflictProperties, bProp.name))
                            baseClass.conflictProperties.push(anyProp)
                    }

                    // Function vs. Signal
                    if (this.tsElementIsSignal(b.data)) {
                        base.data.hasUnresolvedConflict = true
                    }

                    // Function vs. Function
                    if (this.tsElementIsMethodOrFunction(b.data)) {
                        // const bFunc = b.data as TsFunction
                        // const mergedFunction = (this.mergeFunctions(baseFunc, ...baseFunc.overloads))
                        const anyFunc = this.newAnyTsFunction(baseFunc.name, baseFunc.girTypeName)
                        if (!this.getCompatibleTsFunction(baseClass.conflictMethods, anyFunc)) {
                            baseClass.conflictMethods.push(anyFunc)
                        }
                    }
                }

                // If a element is a property / variable
                else if (this.tsElementIsPropertyOrVariable(base.data)) {
                    const baseProp = base.data as TsProperty
                    // Property vs. Function
                    if (this.tsElementIsMethodOrFunction(b.data)) {
                        const anyProp = this.newAnyTsProperty(baseProp.name || 'unknown', baseProp.girTypeName)
                        if (baseProp.name && !this.getCompatibleTsProperty(baseClass.conflictProperties, baseProp.name))
                            baseClass.conflictProperties.push(anyProp)
                    }

                    // Property vs. Property
                    if (this.tsElementIsPropertyOrVariable(b.data)) {
                        // TODO fix JavaScript heap out of memory
                        // const bProp = b.data as TsProperty
                        // const mergedProp = this.mergeProperties(baseProp, ...bProp)
                        // baseClass.properties.push(this.girFactory.newGirProperty(mergedProp))
                        const anyProp = this.newAnyTsProperty(baseProp.name || 'unknown', baseProp.girTypeName)
                        if (baseProp.name && !this.getCompatibleTsProperty(baseClass.conflictProperties, baseProp.name))
                            baseClass.conflictProperties.push(anyProp)
                    }

                    // Property vs. Signal
                    if (this.tsElementIsSignal(b.data)) {
                        base.data.hasUnresolvedConflict = true
                    }
                }

                // Other
                else {
                    debugger
                }
            }
        }
    }

    /**
     * Fix the conflicts by merging the types with each other
     * @param groupedElements
     */
    public static fixConflicts(groupedElements: GroupedConflictElements) {
        for (const name of Object.keys(groupedElements)) {
            if (name === 'parent') {
                debugger
            }
            const elements = groupedElements[name]

            const base = elements.baseElements.length > 0 ? elements.baseElements[0] : undefined

            if (!base) {
                this.fixIndirectConflicts(elements.inheritedElements, elements.baseClass)
            } else {
                // Each conflicting elements
                for (const a of elements.inheritedElements) {
                    if (a === base) {
                        continue
                    }

                    // If base element is a function
                    if (this.tsElementIsMethodOrFunction(base.data)) {
                        const baseFunc = base.data as TsFunction

                        // Function vs. Function
                        if (this.tsElementIsMethodOrFunction(a.data)) {
                            const aFunc = a.data as TsFunction

                            // Add a function to overload methods
                            if (!this.getCompatibleTsFunction(baseFunc.overloads, aFunc)) baseFunc.overloads.push(aFunc)
                        }

                        // Function vs. Property
                        else if (this.tsElementIsPropertyOrVariable(a.data)) {
                            baseFunc.hasUnresolvedConflict = true
                        }
                    }

                    // If base element is a property / variable
                    else if (this.tsElementIsPropertyOrVariable(base.data)) {
                        const baseProp = base.data as TsProperty

                        // Property vs. Property
                        if (this.tsElementIsPropertyOrVariable(a.data)) {
                            const aProp = a.data as TsProperty
                            base.data = this.mergeProperties(baseProp, aProp)
                        }

                        // Property vs. Function
                        else if (this.tsElementIsMethodOrFunction(a.data)) {
                            baseProp.hasUnresolvedConflict = true
                        }
                    }

                    // Ignore signal conflicts
                    else if (this.tsElementIsSignal(base.data)) {
                        // Do nothing
                    }
                    // Ignore constructors
                    else if (this.tsElementIsConstructor(base.data)) {
                        // Do nothing
                    } else {
                        console.warn('Found unknown element', base)
                        base.data.hasUnresolvedConflict = true
                    }
                }

                // If base element is a function and has overloaded methods
                // if (this.tsElementIsMethodOrFunction(base.data)) {
                //     const baseFunc = base.data as TsFunction
                //     // Add a function with any types
                //     baseFunc.overloads.push(this.newAnyTsFunction(baseFunc.name, baseFunc.girTypeName))

                //     // Add a function with merged types and parameters
                //     baseFunc.overloads.push(this.mergeFunctions(baseFunc, ...baseFunc.overloads))
                // }
            }
        }
    }

    /**
     * Group conflicts by name and sort them by depth for simpler handling of conflicts
     */
    public static groupConflicts(elements: ChildElement[], tsClass: TsClass) {
        const groupedConflicts: GroupedConflictElements = {}

        for (const a of elements) {
            for (const b of elements) {
                if (a && a.data.name && b && b.data.name && a !== b && this.hasConflict(a, b)) {
                    groupedConflicts[a.data.name] ||= {
                        baseElements: [],
                        inheritedElements: [],
                        baseClass: tsClass,
                    }
                    const groupedConflict = groupedConflicts[a.data.name]
                    const isBaseElement = a.depth === 0
                    if (isBaseElement) {
                        if (!groupedConflict.baseElements.includes(a)) {
                            groupedConflict.baseElements.push(a)
                        }
                        if (!groupedConflict.baseElements.includes(b)) {
                            groupedConflict.baseElements.push(b)
                        }
                    } else {
                        if (!groupedConflict.inheritedElements.includes(a)) {
                            groupedConflict.inheritedElements.push(a)
                        }
                        if (!groupedConflict.inheritedElements.includes(b)) {
                            groupedConflict.inheritedElements.push(b)
                        }
                    }
                }
            }
        }

        // Sort by depth
        for (const name of Object.keys(groupedConflicts)) {
            groupedConflicts[name].inheritedElements = groupedConflicts[name].inheritedElements.sort(
                (a, b) => a.depth - b.depth,
            )
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

        const groupedElementConflicts = this.groupConflicts(elements, girClass._tsData)
        const groupedConstructPropConflicts = this.groupConflicts(constructProps, girClass._tsData)

        this.fixConflicts(groupedElementConflicts)
        this.fixConflicts(groupedConstructPropConflicts)
    }

    /**
     * Returns true if `p1s` and `p2s` conflicting with each other.
     * The parameters must have the same length and the same type but can have different names
     * @param params
     * @returns
     */
    public static paramsHasConflict(...params: GirCallableParamElement[][]) {
        let conflict = false
        for (const p1s of params) {
            for (const p2s of params) {
                if (p1s.length !== p2s.length) {
                    conflict = true
                    return conflict
                }

                for (const [i, p1] of p1s.entries()) {
                    const p2 = p2s[i]
                    if (p2._tsData && p1._tsData) {
                        if (this.typesHasConflict(p2._tsData?.type, p1._tsData?.type)) {
                            conflict = true
                            return conflict
                        }
                    } else {
                        conflict = true
                        return conflict
                    }
                }
            }
        }

        return conflict
    }

    public static typesHasConflict(a: TsType[], b: TsType[]) {
        if (isEqual(a, b)) {
            return false
        }
        return true
    }

    /**
     * Returns `true` if the function / method types of `a` and `b` are not compatible with each other.
     * The parameters must have the same length and the same type but can have different names
     * @param a
     * @param b
     * @returns
     */
    public static functionHasConflict(a: TsFunction, b: TsFunction) {
        if (this.typesHasConflict(a.returnTypes, b.returnTypes)) {
            return true
        }

        if (this.paramsHasConflict(a.inParams, b.inParams)) {
            return true
        }

        if (this.paramsHasConflict(a.outParams, b.outParams)) {
            return true
        }

        return false
    }

    /**
     * Returns `true` if the property types of `a` and `b` are not compatible with each other.
     * @param a
     * @param b
     * @returns
     */
    public static propertyHasConflict(a: TsVar & TsProperty, b: TsVar & TsProperty) {
        if (!!a.isStatic !== !!b.isStatic) return false
        if (a.name !== b.name) return false

        if (!!a.readonly !== !!b.readonly || this.typesHasConflict(a.type, b.type)) return true

        return false
    }

    /**
     * Returns true if the elements (properties or methods) of `a` and `b` are not compatible with each other (has no conflict).
     * @param a
     * @param b
     * @returns
     */
    public static elementHasConflict(a: TsFunction | TsVar | TsProperty, b: TsFunction | TsVar | TsProperty) {
        if (a.name !== b.name) {
            return false
        } else if (this.tsElementIsStatic(a) !== this.tsElementIsStatic(b)) {
            return false
        } else if (this.tsElementIsMethodOrFunction(a) && this.tsElementIsMethodOrFunction(b)) {
            return this.functionHasConflict(a as TsFunction, b as TsFunction)
        } else if (this.tsElementIsPropertyOrVariable(a) && this.tsElementIsPropertyOrVariable(b)) {
            return this.propertyHasConflict(a as TsVar & TsProperty, b as TsVar & TsProperty)
        } else if (this.tsElementIsConstructor(a) && this.tsElementIsConstructor(b)) {
            return this.functionHasConflict(a as TsFunction, b as TsFunction)
        } else if (this.tsElementIsSignal(a) && this.tsElementIsSignal(b)) {
            // TODO
            return !isEqual(a, b)
        } else if (a.tsTypeName !== b.tsTypeName) {
            return true
        } else {
            debugger
            return true
        }
    }
}
