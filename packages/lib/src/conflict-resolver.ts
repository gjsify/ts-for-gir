import { GirFactory } from './gir-factory.js'
import { Logger } from './logger.js'
import { NO_TSDATA } from './messages.js'
import { isEqual, merge, clone, typesContainsOptional } from './utils.js'
import { SIGNAL_METHOD_NAMES, MAX_CLASS_PARENT_DEPTH } from './constants.js'
import { GirDirection } from './types/gir-direction.js'

import type {
    Environment,
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
    TsTypeSeparator,
    TsType,
    TsClass,
    TsParameter,
    TypeGirFunction,
    TypeGirProperty,
    ConflictChildElement,
    ConflictGroupedElements,
    ConflictGroupedElement,
} from './types/index.js'

/**
 * Resolve conflicts between types caused by overloads / inheritances and implementations
 * With multiple implementations or a inherit it can happen that the interfaces / parent have the same method and/or property names with incompatible types,
 * we are trying to resolve this conflicts by merging, overloading or removing this conflicts.
 */
export class ConflictResolver {
    private log: Logger

    private girFactory = new GirFactory()

    constructor(private readonly environment: Environment, private readonly verbose: boolean) {
        this.log = new Logger(environment, verbose, 'ConflictResolver')
    }

    private girElArrToChildArr<T = TsFunction | TsProperty | TsVar>(
        dataArr: Array<
            | GirMethodElement
            | GirVirtualMethodElement
            | GirConstructorElement
            | GirFunctionElement
            | GirPropertyElement
            | GirFieldElement
        >,
        depth: number,
    ): ConflictChildElement<T>[] {
        return dataArr
            .filter((data) => !!data?._tsData)
            .map((data) => {
                if (!data?._tsData) throw new Error('_tsData not set!')
                return {
                    depth,
                    data: data?._tsData as unknown as T,
                }
            })
    }

    private tsElArrToChildArr<T extends ConflictChildElement>(
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

    /**
     * Get class elements and parent elements (implementations and inherits)
     * @param tsClass
     * @param depth
     * @returns
     */
    private getClassElements(tsClass: TsClass, depth: number, processedClasses: string[]) {
        const tsClassFullPackageSymName = `${tsClass.namespace}-${tsClass.version}.${tsClass.namespace}.${tsClass.name}`

        const signalMethods: ConflictChildElement<TsFunction>[] = []
        const propertySignalMethods: ConflictChildElement<TsFunction>[] = []
        const methods: ConflictChildElement<TsFunction>[] = []
        const virtualMethods: ConflictChildElement<TsFunction>[] = []
        const staticFunctions: ConflictChildElement<TsFunction>[] = []
        const constructors: ConflictChildElement<TsFunction>[] = []

        const properties: ConflictChildElement<TsProperty | TsVar>[] = []
        const fields: ConflictChildElement<TsProperty | TsVar>[] = []
        const constructProps: ConflictChildElement<TsProperty | TsVar>[] = []

        const depthLimitReached = depth >= MAX_CLASS_PARENT_DEPTH
        const classAlreadyProcessed = processedClasses.includes(tsClassFullPackageSymName)

        if (depthLimitReached || classAlreadyProcessed) {
            if (depthLimitReached) {
                this.log.error(`[getClassElements] Maximum recursion depth reached (limit: ${MAX_CLASS_PARENT_DEPTH})!`)
            }
            return {
                signalMethods,
                propertySignalMethods,
                methods,
                virtualMethods,
                staticFunctions,
                constructors,
                properties,
                fields,
                constructProps,
            }
        }

        // Signals
        const _signals = tsClass.signals.map((s) => s._tsData).filter((s) => !!s) as TsSignal[]
        for (const tsSignal of _signals) {
            signalMethods.push(...this.tsElArrToChildArr<ConflictChildElement<TsFunction>>(tsSignal.tsMethods, depth))
        }
        // Property signals
        propertySignalMethods.push(
            ...this.tsElArrToChildArr<ConflictChildElement<TsFunction>>(tsClass.propertySignalMethods, depth),
        )
        // Methods
        if (tsClass.methods.length) methods.push(...this.girElArrToChildArr<TsFunction>(tsClass.methods, depth))
        // Virtual methods
        if (tsClass.virtualMethods.length)
            virtualMethods.push(...this.girElArrToChildArr<TsFunction>(tsClass.virtualMethods, depth))
        // Static functions
        if (tsClass.staticFunctions.length)
            staticFunctions.push(...this.girElArrToChildArr<TsFunction>(tsClass.staticFunctions, depth))
        // Constructors
        if (tsClass.constructors.length)
            constructors.push(...this.girElArrToChildArr<TsFunction>(tsClass.constructors, depth))
        // Properties
        if (tsClass.properties.length)
            properties.push(...this.girElArrToChildArr<TsProperty | TsVar>(tsClass.properties, depth))
        // Fields
        if (tsClass.fields.length) fields.push(...this.girElArrToChildArr<TsProperty | TsVar>(tsClass.fields, depth))
        // Constructor properties
        if (tsClass.constructProps.length)
            constructProps.push(...this.girElArrToChildArr<TsProperty | TsVar>(tsClass.constructProps, depth))

        for (const ifacePackageFullSymName of Object.keys(tsClass.implements)) {
            if (tsClassFullPackageSymName === ifacePackageFullSymName) {
                this.log.warn("[getImplementedInterfaceElements] A interface can't implement itself")
                continue
            }

            const { interface: implementation, depth: parentDepth } = tsClass.implements[ifacePackageFullSymName]
            const implementationElements = this.getClassElements(
                implementation,
                parentDepth + depth + 1,
                processedClasses,
            )

            signalMethods.push(...implementationElements.signalMethods)
            propertySignalMethods.push(...implementationElements.propertySignalMethods)
            methods.push(...implementationElements.methods)
            virtualMethods.push(...implementationElements.virtualMethods)
            staticFunctions.push(...implementationElements.staticFunctions)
            constructors.push(...implementationElements.constructors)
            properties.push(...implementationElements.properties)
            fields.push(...implementationElements.fields)
            constructProps.push(...implementationElements.constructProps)
        }

        for (const ifaceFullPackageSymName of Object.keys(tsClass.inherit)) {
            if (tsClassFullPackageSymName === ifaceFullPackageSymName) {
                this.log.warn("[getClassElements] A class can't inherit itself")
                continue
            }

            const { class: inherit, depth: parentDepth } = tsClass.inherit[ifaceFullPackageSymName]
            const inheritElements = this.getClassElements(inherit, parentDepth + depth + 1, processedClasses)

            signalMethods.push(...inheritElements.signalMethods)
            propertySignalMethods.push(...inheritElements.propertySignalMethods)
            methods.push(...inheritElements.methods)
            virtualMethods.push(...inheritElements.virtualMethods)
            staticFunctions.push(...inheritElements.staticFunctions)
            constructors.push(...inheritElements.constructors)
            properties.push(...inheritElements.properties)
            fields.push(...inheritElements.fields)
            constructProps.push(...inheritElements.constructProps)
        }

        processedClasses.push(tsClassFullPackageSymName)

        return {
            signalMethods,
            propertySignalMethods,
            methods,
            virtualMethods,
            staticFunctions,
            constructors,
            properties,
            fields,
            constructProps,
        }
    }

    private tsElementIsMethod(el: TsFunction | TsVar) {
        return !this.tsElementIsStatic(el) && this.tsElementIsMethodOrFunction(el)
    }

    private tsElementIsStaticFunction(el: TsFunction | TsVar) {
        return this.tsElementIsStatic(el) && this.tsElementIsMethodOrFunction(el)
    }

    private tsElementIsProperty(el: TsFunction | TsVar) {
        return !this.tsElementIsStatic(el) && this.tsElementIsPropertyOrVariable(el)
    }

    private tsElementIsStaticProperty(el: TsFunction | TsVar) {
        return this.tsElementIsStatic(el) && this.tsElementIsPropertyOrVariable(el)
    }

    private tsElementIsSignal(el: TsFunction | TsVar) {
        return el.tsTypeName === 'event-methods'
    }

    private tsElementIsConstructor(el: TsFunction | TsVar) {
        return el.tsTypeName === 'constructor'
    }

    private tsElementIsMethodOrFunction(el: TsFunction | TsVar) {
        return el.tsTypeName === 'function' || el.tsTypeName === 'method' || el.tsTypeName === 'static-function'
    }

    private tsElementIsPropertyOrVariable(el: TsFunction | TsVar | TsProperty) {
        return (
            el.tsTypeName === 'constant' ||
            el.tsTypeName === 'constructor-property' ||
            el.tsTypeName === 'property' ||
            el.tsTypeName === 'static-property'
        )
    }

    private tsElementIsStatic(el: TsFunction | TsVar) {
        return (
            // el.tsTypeName === 'constructor' ||
            (el as TsFunction).isStatic || el.tsTypeName === 'static-property' || el.tsTypeName === 'static-function'
        )
    }

    private typeIsString(type: TsType) {
        return (
            type.type === 'string' ||
            (type.type.startsWith("'") && type.type.endsWith("'")) ||
            (type.type.startsWith('"') && type.type.endsWith('"'))
        )
    }

    private tsTypeIsEqual(a: TsType, b: TsType) {
        return (
            a &&
            b &&
            a.optional === b.optional &&
            a.nullable === b.nullable &&
            a.type === b.type &&
            a.isArray === b.isArray &&
            a.isFunction === b.isFunction &&
            a.isCallback === b.isCallback &&
            a.leftSeparator === b.leftSeparator &&
            isEqual(a.callbacks, b.callbacks) &&
            isEqual(a.generics, b.generics)
        )
    }

    private mergeTypes(leftSeparator: TsTypeSeparator, ...types: Array<TsType | undefined>) {
        const dest: TsType[] = []

        for (const type of types) {
            if (!type) continue
            if (!dest.find((destType) => this.tsTypeIsEqual(destType, type))) {
                dest.push({ ...type, leftSeparator })
            }
        }

        return dest
    }

    private setTypesProperty(types: TsType[], property: 'optional', value: boolean) {
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
    private mergeParam(a: GirCallableParamElement | undefined, b: GirCallableParamElement | undefined) {
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
            dest._tsData.type = this.mergeTypes('|', ...a._tsData.type, ...b._tsData.type)
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

        if (typesContainsOptional(dest._tsData.type)) {
            dest._tsData.type = this.setTypesProperty(dest._tsData.type, 'optional', true)
        }

        return dest
    }

    /**
     * Merges parameter names and types of multiple functions
     * @param params
     * @returns
     */
    private mergeParams(...params: GirCallableParamElement[][]) {
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

    private paramCanBeOptional(
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
            .filter((p) => p.$.direction !== GirDirection.Out)
            .map((p) => p._tsData)

        if (following.some((p) => p && !typesContainsOptional(p.type))) {
            canBeOptional = false
        }

        return canBeOptional
    }

    /**
     * In Typescript no optional parameters are allowed if the following ones are not optional
     * @param girParams
     * @returns
     */
    private fixOptionalParameters(girParams: GirCallableParamElement[]) {
        for (const girParam of girParams) {
            if (!girParam._tsData) throw new Error(NO_TSDATA('fixOptionalParameters'))
            if (typesContainsOptional(girParam._tsData.type) && !this.paramCanBeOptional(girParam, girParams)) {
                this.setTypesProperty(girParam._tsData.type, 'optional', false)
            }
        }
        return girParams
    }

    /**
     * Merge function types and parameters together
     * @param baseFunc The function to change or null if you want to create a new property
     * @param funcs The functions you want to merge
     * @returns
     */
    public mergeFunctions(baseFunc: TsFunction | null, ...funcs: TsFunction[]) {
        const returnTypesMap: TsType[] = []
        for (const func of funcs) {
            returnTypesMap.push(...func.returnTypes)
        }
        const returnTypes = this.mergeTypes('|', ...returnTypesMap)

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

        if (baseFunc) {
            baseFunc.returnTypes = returnTypes
            return baseFunc
        }

        return this.girFactory.newTsFunction(
            {
                name: funcs[0].name,
                returnTypes: returnTypes,
                isStatic: funcs[0].isStatic || false,
                inParams: inParams.map((inParam) => inParam._tsData).filter((inParam) => !!inParam) as TsParameter[],
                outParams: outParams
                    .map((outParam) => outParam._tsData)
                    .filter((outParam) => !!outParam) as TsParameter[],
                girTypeName: funcs[0].girTypeName,
            },
            funcs[0].parent,
        )
    }

    /**
     * Merge property types together
     * @param baseProp The property to change or null if you want to create a new property
     * @param props The properties you want to merge
     * @returns
     */
    public mergeProperties(typeSeparator: TsTypeSeparator, baseProp: TsProperty | null, ...props: TsProperty[]) {
        const typesMap: TsType[] = []
        for (const prop of props) {
            typesMap.push(...prop.type)
        }

        const types = this.mergeTypes(typeSeparator, ...typesMap)

        // Merge readonly
        let readonly = false
        for (const prop of props) {
            readonly = readonly || prop.readonly || false
        }

        if (!props[0] || !props[0].name) {
            throw new Error('At least one property to merge must exist!')
        }

        if (baseProp) {
            baseProp.type = types
            baseProp.readonly = readonly
            return baseProp
        }

        const newProp = this.girFactory.newTsProperty({
            readonly: readonly,
            isStatic: props[0].isStatic || false,
            name: props[0].name,
            type: types,
            girTypeName: props[0].girTypeName,
        })
        return newProp
    }

    /**
     * Check if there is a type conflict between the ts elements a and b
     * @param a
     * @param b
     * @returns
     */
    public hasConflict(a: ConflictChildElement, b: ConflictChildElement) {
        if (a !== b && a.data.name === b.data.name) {
            const name = a.data.name
            // Ignore element with name of:
            if (name === 'constructor' || name === '_init') {
                return false
            }
            if (this.elementHasConflict(a.data, b.data)) {
                return true
            }
        }

        return false
    }

    public newAnyTsProperty(name: string, girTypeName: TypeGirProperty) {
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
    public newAnyTsFunction(name: string, girTypeName: TypeGirFunction, isStatic: boolean, parent: TsClass | null) {
        return this.girFactory.newTsFunction(
            {
                name,
                isStatic,
                inParams: [
                    {
                        name: 'args',
                        isRest: true,
                        type: [this.girFactory.newTsType({ type: 'any', isArray: true })],
                    },
                ],
                returnTypes: [{ type: 'any' }],
                girTypeName,
            },
            parent,
        )
    }

    public getCompatibleTsProperty(elements: TsProperty[], baseProp: TsProperty) {
        return elements.find((prop) => !this.propertyHasConflict(baseProp, prop))
    }

    public getCompatibleTsFunction(elements: TsFunction[], baseFunc: TsFunction) {
        return elements.find((func) => !this.functionHasConflict(baseFunc, func))
    }

    /**
     * Use this instead of `getCompatibleTsProperty` and `getCompatibleTsProperty` if you can, because it's much faster
     * @param elements
     * @param name
     * @returns
     */
    public getTsElementByName(elements: (TsProperty | TsFunction)[], name: string) {
        return elements.find((el) => el.name === name)
    }

    protected canAddConflictProperty(conflictProperties: TsProperty[], prop: TsProperty) {
        const canAdd =
            prop.name &&
            // Only one property can be defined, no overloads
            !this.getTsElementByName(conflictProperties, prop.name) &&
            // Do not set properties with signal method names
            !SIGNAL_METHOD_NAMES(this.environment).includes(prop.name)

        return canAdd
    }

    public groupSignalConflicts(signalsMethods: ConflictChildElement<TsFunction>[], baseClass: TsClass) {
        const groupedConflicts: ConflictGroupedElements = {}
        for (const base of signalsMethods) {
            for (const b of signalsMethods) {
                if (base === b) {
                    continue
                }

                if (base.data.name !== 'connect' && base.data.name !== 'connect_after') {
                    continue
                }

                const sigNameParam = base.data.inParams[0]
                // const callbackParam = base.data.inParams[1]

                const eventName = sigNameParam?._tsData?.type?.[0]?.type
                // TODO do not render the callback type as a full string, create a TSCallback instead
                // const callbackType = callbackParam?._tsData?.type?.[0]?.type
                // console.debug('eventName', eventName, callbackType)

                if (!eventName || eventName === 'string') {
                    continue
                }
                groupedConflicts[eventName] ||= {
                    baseElements: [],
                    inheritedElements: [],
                    baseClass,
                }

                const groupedConflict = groupedConflicts[eventName]
                const isBaseElement = base.depth === 0
                if (isBaseElement) {
                    if (!groupedConflict.baseElements.find((c) => isEqual(c.data, base.data))) {
                        groupedConflict.baseElements.push(base)
                    }
                } else {
                    if (!groupedConflict.inheritedElements.find((c) => isEqual(c.data, base.data))) {
                        groupedConflict.inheritedElements.push(base)
                    }
                }
            }
        }

        return groupedConflicts
    }

    public fixSignalConflicts(groupedElements: ConflictGroupedElements) {
        for (const eventName of Object.keys(groupedElements)) {
            const elements = groupedElements[eventName]

            const bases = elements.baseElements

            if (!bases.length) {
                // TODO
                // return this.fixIndirectSignalConflicts(elements.inheritedElements, elements.baseClass)
                return
            }

            for (const base of bases) {
                if (base.data.hasUnresolvedConflict) {
                    continue
                }
                for (const b of elements.inheritedElements) {
                    if (b === base || b.data.hasUnresolvedConflict) {
                        continue
                    }
                    // TODO
                }
            }
        }
    }

    /**
     * Check conflicts between the implementations / inheritances
     * To fix type errors like:
     * ```
     *   Interface 'PopoverMenu' can\'t simultaneously extend types 'Popover' and 'Native'.
     *   Named property 'parent' of types 'Popover' and 'Native' are not identical.
     */
    public fixIndirectConflicts(name: string, elements: ConflictChildElement[], baseClass: TsClass) {
        for (const base of elements) {
            if (base.data.hasUnresolvedConflict) {
                continue
            }
            for (const b of elements) {
                if (b === base || b.data.hasUnresolvedConflict) {
                    continue
                }

                const className = `${baseClass.namespace}-${baseClass.version}.${baseClass.name}`

                // If a element is a function / method
                if (this.tsElementIsMethodOrFunction(base.data)) {
                    const baseFunc = base.data as TsFunction

                    // Function vs. Property
                    if (this.tsElementIsPropertyOrVariable(b.data)) {
                        this.log.debug(`${className}.${name} External Function vs. Property`, baseFunc, b.data)
                        b.data.hasUnresolvedConflict = true
                    }

                    // Function vs. Signal
                    else if (this.tsElementIsSignal(b.data)) {
                        this.log.debug(`${className}.${name} External Function vs. Signal`, baseFunc, b.data)
                        baseFunc.hasUnresolvedConflict = true
                    }

                    // Function vs. Function
                    else if (this.tsElementIsMethodOrFunction(b.data)) {
                        const bFunc = b.data as TsFunction
                        this.log.debug(
                            `${className}.${name} External Function vs. Function`,
                            baseFunc.inParams.map((p) => p._tsData?.name).join(', '),
                            bFunc.inParams.map((p) => p._tsData?.name).join(', '),
                        )

                        // Just add conflicting methods to the class
                        if (!baseClass.conflictMethods.includes(baseFunc)) {
                            baseClass.conflictMethods.push(baseFunc)
                        }
                        if (!baseClass.conflictMethods.includes(bFunc)) {
                            baseClass.conflictMethods.push(bFunc)
                        }
                    }

                    // Function vs. Constructor
                    else if (this.tsElementIsConstructor(base.data)) {
                        const bConstr = b.data as TsFunction
                        this.log.debug(`${className}.${name} External Function vs. Constructor`, baseFunc, bConstr)

                        // Just add conflicting methods to the class
                        if (!baseClass.conflictMethods.includes(baseFunc)) {
                            baseClass.conflictMethods.push(baseFunc)
                        }
                        if (!baseClass.conflictMethods.includes(bConstr)) {
                            baseClass.conflictMethods.push(bConstr)
                        }
                    }

                    // Function vs. Unknown
                    else {
                        this.log.debug(`${className}.${name} External Unknown ${b.data.tsTypeName}`, baseFunc, b.data)
                        baseFunc.hasUnresolvedConflict = true
                    }
                }

                // If a element is a constructor
                else if (this.tsElementIsConstructor(base.data)) {
                    const baseConstr = base.data as TsFunction

                    // Constructor vs. Function
                    if (this.tsElementIsMethodOrFunction(b.data)) {
                        const bFunc = b.data as TsFunction
                        this.log.debug(
                            `${className}.${name} External Constructor vs. Function`,
                            baseConstr.inParams.map((p) => p._tsData?.name).join(', '),
                            bFunc.inParams.map((p) => p._tsData?.name).join(', '),
                        )

                        if (!baseClass.conflictMethods.includes(baseConstr)) {
                            baseClass.conflictMethods.push(baseConstr)
                        }
                        if (!baseClass.conflictMethods.includes(bFunc)) {
                            baseClass.conflictMethods.push(bFunc)
                        }
                    }

                    // Constructor vs. Constructor
                    else if (this.tsElementIsConstructor(base.data)) {
                        this.log.debug(`${className}.${name} External Constructor vs. Constructor`, baseConstr, b.data)

                        const anyFunc = this.newAnyTsFunction(
                            name,
                            baseConstr.girTypeName,
                            baseConstr.isStatic,
                            baseConstr.parent,
                        )

                        // Check if any function is not already added
                        if (!this.getTsElementByName(baseClass.conflictMethods, anyFunc.name)) {
                            baseClass.conflictMethods.push(anyFunc)
                        }
                    }
                }

                // If a element is a property / variable
                else if (this.tsElementIsPropertyOrVariable(base.data)) {
                    const baseProp = base.data as TsProperty

                    // Property vs. Function
                    if (this.tsElementIsMethodOrFunction(b.data)) {
                        const bFunc = b.data as TsFunction
                        this.log.debug(
                            `${className}.${name} External Property vs. Function`,
                            baseProp.type[0].type,
                            bFunc,
                        )
                        baseProp.hasUnresolvedConflict = true
                    }

                    // Property vs. Property
                    else if (this.tsElementIsPropertyOrVariable(b.data)) {
                        const bProp = b.data as TsProperty
                        this.log.debug(
                            `${className}.${name} External Property vs. Property`,
                            baseProp.type[0].type,
                            bProp.type[0].type,
                        )

                        switch (name) {
                            case 'parent':
                            case 'window':
                            case 'parent_instance':
                            case 'priv':
                                const mergedProp = this.mergeProperties('&', null, baseProp, bProp)
                                if (this.canAddConflictProperty(baseClass.conflictProperties, mergedProp)) {
                                    baseClass.conflictProperties.push(mergedProp)
                                }
                                break

                            default:
                                const anyProp = this.newAnyTsProperty(name, baseProp.girTypeName)
                                if (this.canAddConflictProperty(baseClass.conflictProperties, anyProp)) {
                                    baseClass.conflictProperties.push(anyProp)
                                }
                                break
                        }
                    }

                    // Property vs. Signal
                    else if (this.tsElementIsSignal(b.data)) {
                        this.log.debug(`${className}.${name} External Property vs. Signal`, baseProp, b.data)
                        base.data.hasUnresolvedConflict = true
                    } else {
                        this.log.error(`${className}.${name} External Unknown ${b.data.tsTypeName}`, baseProp, b.data)
                    }
                }

                // Other
                else {
                    this.log.error(`${className}.${name} External Unknown ${base.data.tsTypeName}`)
                    base.data.hasUnresolvedConflict = true
                }
            }
        }
    }

    /**
     * Check conflicts within the class itself (ignores implementations / inheritances)
     */
    public fixInternalConflicts(name: string, elements: ConflictChildElement[], baseClass: TsClass) {
        for (const base of elements) {
            if (base.data.hasUnresolvedConflict) {
                continue
            }
            for (const b of elements) {
                if (b === base || b.data.hasUnresolvedConflict) {
                    continue
                }

                const className = `${baseClass.namespace}-${baseClass.version}.${baseClass.name}`

                // Conflict between injected and original elements
                if (base.data.isInjected !== b.data.isInjected) {
                    if (!base.data.isInjected) {
                        base.data.hasUnresolvedConflict = true
                    } else if (!b.data.isInjected) {
                        b.data.hasUnresolvedConflict = true
                    }
                    // Copy doc from original element if not set in the injected element
                    if (!b.data.doc.text && base.data.doc.text) {
                        b.data.doc = base.data.doc
                    } else if (!base.data.doc.text && b.data.doc.text) {
                        base.data.doc = b.data.doc
                    }
                    continue
                }

                // If a element is a function / method
                if (this.tsElementIsMethodOrFunction(base.data)) {
                    const baseFunc = base.data as TsFunction

                    // Function vs. Property
                    if (this.tsElementIsPropertyOrVariable(b.data)) {
                        this.log.debug(`${className}.${name} Internal Function vs. Property`, baseFunc, b.data)
                        b.data.hasUnresolvedConflict = true
                    }

                    // Function vs. Signal
                    else if (this.tsElementIsSignal(b.data)) {
                        this.log.debug(`${className}.${name} Internal Function vs. Signal`, baseFunc, b.data)
                        // Do nothing
                    }

                    // Function vs. Function
                    else if (this.tsElementIsMethodOrFunction(b.data)) {
                        const bFunc = b.data as TsFunction
                        this.log.debug(
                            `${className}.${name} Internal Function vs. Function`,
                            baseFunc.inParams.map((p) => p._tsData?.name).join(', '),
                            bFunc.inParams.map((p) => p._tsData?.name).join(', '),
                        )

                        // Conflict between virtual and non-virtual methods (this should only occur in node-gtk, because Gjs has a vfunc_ prefix for virtual methods)
                        if (baseFunc.isVirtual !== bFunc.isVirtual) {
                            if (!baseFunc.isVirtual) {
                                baseFunc.hasUnresolvedConflict = true
                            } else {
                                bFunc.hasUnresolvedConflict = true
                            }
                            continue
                        }

                        // Do nothing..
                    } else {
                        this.log.error(`${className}.${name} Internal Unknown ${b.data.tsTypeName}`, baseFunc, b.data)
                        b.data.hasUnresolvedConflict = true
                    }
                }

                // If a element is a property / variable
                else if (this.tsElementIsPropertyOrVariable(base.data)) {
                    const baseProp = base.data as TsProperty

                    // Property vs. Function
                    if (this.tsElementIsMethodOrFunction(b.data)) {
                        const bFunc = b.data as TsFunction
                        this.log.debug(
                            `${className}.${name} Internal Property vs. Function`,
                            baseProp.type[0].type,
                            bFunc,
                        )
                        baseProp.hasUnresolvedConflict = true
                    }

                    // Property vs. Property
                    else if (this.tsElementIsPropertyOrVariable(b.data)) {
                        const bProp = b.data as TsProperty
                        this.log.debug(
                            `${className}.${name} Internal Property vs. Property`,
                            baseProp.type[0].type,
                            bProp.type[0].type,
                        )

                        switch (name) {
                            case 'parent':
                            case 'window':
                            case 'parent_instance':
                                this.mergeProperties('&', baseProp, baseProp, bProp)
                                break

                            default:
                                // Set property type to any
                                baseProp.type = [this.girFactory.newTsType({ ...bProp.type, type: 'any' })]
                                break
                        }
                    }

                    // Property vs. Signal
                    else if (this.tsElementIsSignal(b.data)) {
                        this.log.debug(`${className}.${name} Internal Property vs. Signal`, baseProp, b.data)
                        base.data.hasUnresolvedConflict = true
                    } else {
                        this.log.error(`${className}.${name} Internal Unknown ${b.data.tsTypeName}`, baseProp, b.data)
                    }
                }

                // If a element is a signal
                else if (this.tsElementIsSignal(base.data)) {
                    const baseSig = base.data as TsSignal
                    // Signal vs. Function
                    if (this.tsElementIsMethodOrFunction(b.data)) {
                        this.log.debug(`${className}.${name} Internal Signal vs. Function`, baseSig, b.data)
                        // Do nothing
                    }
                    // Signal vs. Property
                    else if (this.tsElementIsPropertyOrVariable(b.data)) {
                        this.log.debug(`${className}.${name} Internal Signal vs. Property`, baseSig, b.data)
                        b.data.hasUnresolvedConflict = true
                    }
                }

                // Other
                else {
                    this.log.error(`${className}.${name} Internal Unknown ${base.data.tsTypeName}`)
                }
            }
        }
    }

    /**
     * Check conflicts of the class with implementations and inheritances
     */
    public fixDirectConflicts(name: string, elements: ConflictGroupedElement) {
        const className = `${elements.baseClass.namespace}-${elements.baseClass.version}.${elements.baseClass.name}`

        for (const base of elements.baseElements) {
            if (base.data.hasUnresolvedConflict) {
                continue
            }

            // Each conflicting elements
            for (const b of elements.inheritedElements) {
                if (b === base || b.data.hasUnresolvedConflict) {
                    continue
                }

                // If base element is a function
                if (this.tsElementIsMethodOrFunction(base.data)) {
                    const baseFunc = base.data as TsFunction

                    // Function vs. Function
                    if (this.tsElementIsMethodOrFunction(b.data)) {
                        const bFunc = b.data as TsFunction
                        this.log.debug(
                            `${className}.${name} Direct Function vs. Function`,
                            baseFunc.inParams.map((p) => p._tsData?.name).join(', '),
                            bFunc.inParams.map((p) => p._tsData?.name).join(', '),
                        )

                        // Add a function to overload methods if there is not already a compatible version
                        if (
                            !baseFunc.overloads.includes(bFunc) &&
                            !this.getCompatibleTsFunction(baseFunc.overloads, bFunc)
                        ) {
                            baseFunc.overloads.push(bFunc)
                        }
                    }

                    // Function vs. Constructor
                    else if (this.tsElementIsConstructor(b.data)) {
                        const bConstr = b.data as TsFunction
                        this.log.debug(
                            `${className}.${name} Direct Function vs. Constructor`,
                            baseFunc.inParams.map((p) => p._tsData?.name).join(', '),
                            bConstr.inParams.map((p) => p._tsData?.name).join(', '),
                        )

                        // Add a function to overload methods if there is not already a compatible version
                        if (!this.getCompatibleTsFunction(baseFunc.overloads, bConstr)) {
                            baseFunc.overloads.push(bConstr)
                        }
                    }

                    // Function vs. Property
                    else if (this.tsElementIsPropertyOrVariable(b.data)) {
                        this.log.debug(`${className}.${name} Direct Function vs. Property`)
                        b.data.hasUnresolvedConflict = true
                    }

                    // Function vs. Signal
                    else if (this.tsElementIsSignal(b.data)) {
                        this.log.debug(`${className}.${name} Direct Function vs. Signal`)
                        // Do nothing
                    }
                }

                // If base element is a property / variable
                else if (this.tsElementIsPropertyOrVariable(base.data)) {
                    const baseProp = base.data as TsProperty

                    // Property vs. Property
                    if (this.tsElementIsPropertyOrVariable(b.data)) {
                        const bProp = b.data as TsProperty
                        this.log.debug(
                            `${className}.${name} Direct Property vs. Property`,
                            baseProp.type[0].type,
                            bProp.type[0].type,
                        )
                        switch (name) {
                            case 'parent':
                            case 'window':
                            case 'parent_instance':
                                this.mergeProperties('&', baseProp, baseProp, bProp)
                                break

                            default:
                                // Set property type to any
                                baseProp.type = [this.girFactory.newTsType({ ...bProp.type, type: 'any' })]
                                break
                        }
                    }

                    // Property vs. Function
                    else if (this.tsElementIsMethodOrFunction(b.data)) {
                        this.log.debug(`${className}.${name} Direct Property vs. Function`)
                        baseProp.hasUnresolvedConflict = true
                    }

                    // Property vs. Signal
                    else if (this.tsElementIsSignal(b.data)) {
                        this.log.debug(`${className}.${name} Direct Property vs. Signal`)
                        baseProp.hasUnresolvedConflict = true
                    }
                }

                // If base element is a signal method
                else if (this.tsElementIsSignal(base.data)) {
                    // Signal vs. Property
                    if (this.tsElementIsPropertyOrVariable(b.data)) {
                        this.log.debug(`${className}.${name} Direct Signal vs. Property`)
                        b.data.hasUnresolvedConflict = true
                    }

                    // Signal vs. Function
                    if (this.tsElementIsMethodOrFunction(b.data)) {
                        this.log.debug(`${className}.${name} Direct Signal vs. Function`)
                        const bFunc = b.data as TsFunction
                        const baseSignal = base.data as TsFunction
                        // Add parent class incompatible method as overload
                        if (!this.getCompatibleTsFunction(baseSignal.overloads, bFunc)) {
                            baseSignal.overloads.push(bFunc)
                        }
                    }
                }
                // If a element is a constructor
                else if (this.tsElementIsConstructor(base.data)) {
                    const baseConstr = base.data as TsFunction

                    // Constructor vs. Function
                    if (this.tsElementIsMethodOrFunction(b.data)) {
                        const bFunc = b.data as TsFunction
                        this.log.debug(
                            `${className}.${name} Direct Constructor vs. Function`,
                            baseConstr.inParams.map((p) => p._tsData?.name).join(', '),
                            bFunc.inParams.map((p) => p._tsData?.name).join(', '),
                        )

                        // Add a function to overload methods if there is not already a compatible version
                        if (!this.getCompatibleTsFunction(baseConstr.overloads, bFunc)) {
                            baseConstr.overloads.push(bFunc)
                        }
                    }

                    // Constructor vs. Constructor
                    else if (this.tsElementIsConstructor(base.data)) {
                        const bConstr = b.data as TsFunction
                        this.log.debug(`${className}.${name} Direct Constructor vs. Constructor`, baseConstr, bConstr)

                        // Add the constructor to overload methods if there is not already a compatible version
                        if (!this.getCompatibleTsFunction(baseConstr.overloads, bConstr)) {
                            baseConstr.overloads.push(bConstr)
                        }
                    }
                } else {
                    this.log.warn(`{className}.${name} Unknown ${base.data.tsTypeName}`, base)
                    base.data.hasUnresolvedConflict = true
                }
            }
        }
    }

    /**
     * Fix the conflicts of a class
     * @param groupedElements
     */
    public fixConflicts(groupedElements: ConflictGroupedElements) {
        for (const key of Object.keys(groupedElements)) {
            const elements = groupedElements[key]
            // Remove the key prefix `_`
            const name = key.substring(1)

            if (elements.baseElements.length === 0) {
                this.fixIndirectConflicts(name, elements.inheritedElements, elements.baseClass)
            }
            this.fixInternalConflicts(name, elements.baseElements, elements.baseClass)

            this.fixDirectConflicts(name, elements)
        }
    }

    /**
     * Group conflicts by name and sort them by depth for simpler handling of conflicts
     */
    public groupConflicts(elements: ConflictChildElement[], tsClass: TsClass) {
        const groupedConflicts: ConflictGroupedElements = {}

        const IGNORE_CONFLICT_NAMES = ['$gtype', '__gtype__']

        for (const a of elements) {
            const name = a.data.name
            for (const b of elements) {
                if (
                    a === b ||
                    !name ||
                    !b.data.name ||
                    IGNORE_CONFLICT_NAMES.includes(name) ||
                    IGNORE_CONFLICT_NAMES.includes(b.data.name)
                ) {
                    continue
                }
                if (a && name && b && b.data.name && a !== b && this.hasConflict(a, b)) {
                    const key = `_${name}` // if the key would be `toString` this would be always true so we prefix `_`
                    groupedConflicts[key] ||= {
                        baseElements: [],
                        inheritedElements: [],
                        baseClass: tsClass,
                    }
                    const groupedConflict = groupedConflicts[key]
                    const isBaseElement = a.depth === 0
                    if (isBaseElement) {
                        if (!groupedConflict.baseElements.find((c) => isEqual(c.data, a.data))) {
                            groupedConflict.baseElements.push(a)
                        }
                    } else {
                        if (
                            !groupedConflict.baseElements.find((c) => isEqual(c.data, a.data)) &&
                            !groupedConflict.inheritedElements.find((c) => isEqual(c.data, a.data))
                        ) {
                            groupedConflict.inheritedElements.push(a)
                        }
                    }
                }
            }
        }

        // Sort by depth
        for (const key of Object.keys(groupedConflicts)) {
            groupedConflicts[key].inheritedElements = groupedConflicts[key].inheritedElements.sort(
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
    public repairClass(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('repairClass'))

        const classElements = this.getClassElements(girClass._tsData, 0, [])

        // Do not pass a reference of the array here
        const elements = [
            ...classElements.signalMethods,
            ...classElements.propertySignalMethods,
            ...classElements.methods,
            ...classElements.virtualMethods,
            ...classElements.staticFunctions,
            ...classElements.constructors,
            ...classElements.properties,
            ...classElements.fields,
        ]

        const groupedElementConflicts = this.groupConflicts(elements, girClass._tsData)
        const groupedConstructPropConflicts = this.groupConflicts(classElements.constructProps, girClass._tsData)

        this.fixConflicts(groupedElementConflicts)
        this.fixConflicts(groupedConstructPropConflicts)

        return girClass
    }

    /**
     * Returns true if `p1s` and `p2s` conflicting with each other.
     * The parameters must have the same length and the same type but can have different names
     * @param params
     * @returns
     */
    public paramsHasConflict(...params: GirCallableParamElement[][]) {
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

    public typesHasConflict(a: TsType[], b: TsType[]) {
        if (a.length !== b.length) {
            return true
        }
        // return !isEqual(a, b.data)
        for (let i = 0; i < a.length; i++) {
            const aType = a[i]
            const bType = b[i]
            if (
                aType.type !== bType.type ||
                aType.nullable !== bType.nullable ||
                aType.optional !== bType.optional ||
                aType.isFunction !== bType.isFunction ||
                aType.isCallback !== bType.isCallback ||
                aType.isArray !== bType.isArray ||
                aType.callbacks.length !== bType.callbacks.length ||
                aType.generics.length !== bType.generics.length ||
                !isEqual(aType.callbacks, bType.callbacks) ||
                !isEqual(aType.generics, bType.generics) ||
                !isEqual(aType, bType) // TODO
            ) {
                return true
            }
        }

        return false
    }

    /**
     * Returns `true` if the function / method types of `a` and `b` are not compatible with each other.
     * The parameters must have the same length and the same type but can have different names
     * @param a
     * @param b
     * @returns
     */
    public functionHasConflict(a: TsFunction, b: TsFunction) {
        // TODO find a better solution for that, not all this methods are conflicting
        if (a.isVirtual !== b.isVirtual) {
            return true
        }

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
    public propertyHasConflict(a: TsVar & TsProperty, b: TsVar & TsProperty) {
        if (!!a.isStatic !== !!b.isStatic) return false
        if (a.name !== b.name) return false

        if (!!a.readonly !== !!b.readonly || this.typesHasConflict(a.type, b.type)) return true

        return false
    }

    public signalHasConflict(a: TsSignal, b: TsSignal) {
        if (!!a.isStatic !== !!b.isStatic) return false
        if (a.name !== b.name) return false

        // TODO
        return false
    }

    /**
     * Returns true if the elements (properties or methods) of `a` and `b` are not compatible with each other (has no conflict).
     * @param a
     * @param b
     * @returns
     */
    public elementHasConflict(
        a: TsFunction | TsVar | TsProperty | TsSignal,
        b: TsFunction | TsVar | TsProperty | TsSignal,
    ) {
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
            return this.signalHasConflict(a as TsSignal, b as TsSignal)
        } else if (a.tsTypeName !== b.tsTypeName) {
            return true
        } else {
            return true
        }
    }
}
