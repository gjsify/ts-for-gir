import type {
    GirFunctionElement,
    GirDocElement,
    GirVirtualMethodElement,
    GirCallableParamElement,
    GirConstructorElement,
    GirMethodElement,
    GirInstanceParameter,
    GirPropertyElement,
    GirAnnotation,
    TsFunction,
    TsMethod,
    TsParameter,
    TsGenericParameter,
    TsProperty,
    TsType,
    TsDoc,
    InjectionFunction,
    InjectionInstanceParameter,
    InjectionGenericParameter,
    InjectionType,
    InjectionParameter,
    InjectionProperty,
    Environment,
    TypeGirProperty,
    TypeGirElement,
    TypeGirFunction,
    TypeGirEnumerationMember,
    TypeTsElement,
    TypeTsEnumerationMember,
    TypeTsFunction,
    TypeTsProperty,
    TsClass,
} from './types/index.js'

import { GENERIC_NAMES } from './constants.js'

/**
 * Creates new gir and ts objects
 */
export class GirFactory {
    newGenerics(generics: InjectionGenericParameter[]) {
        const tsGenerics: TsGenericParameter[] = []
        for (let i = 0; i < generics.length; i++) {
            const generic = generics[i]
            const tsGeneric: TsGenericParameter = {
                name: generic.name || GENERIC_NAMES[i],
                ...generic,
            }
            tsGenerics.push(tsGeneric)
        }
        return tsGenerics
    }

    girTypeNameToTsTypeName(girTypeName: 'alias', isStatic: boolean): 'type'
    girTypeNameToTsTypeName(girTypeName: 'enum' | 'bitfield', isStatic: boolean): 'enum'
    girTypeNameToTsTypeName(girTypeName: TypeGirEnumerationMember, isStatic: boolean): TypeTsEnumerationMember
    girTypeNameToTsTypeName(girTypeName: 'callback', isStatic: boolean): 'interface'
    girTypeNameToTsTypeName(girTypeName: 'class' | 'interface' | 'union' | 'record', isStatic: boolean): 'class'
    girTypeNameToTsTypeName(girTypeName: 'constant', isStatic: boolean): 'constant'
    girTypeNameToTsTypeName(girTypeName: 'constructor', isStatic: boolean): 'constructor' | 'static-function'
    girTypeNameToTsTypeName(girTypeName: 'method' | 'virtual', isStatic: boolean): 'method'
    girTypeNameToTsTypeName(girTypeName: 'signal' | 'method', isStatic: boolean): 'event-methods'
    girTypeNameToTsTypeName(girTypeName: 'static-function', isStatic: true): 'static-function'
    girTypeNameToTsTypeName(girTypeName: 'function', isStatic: true): 'static-function'
    girTypeNameToTsTypeName(girTypeName: 'function', isStatic: false): 'function'
    girTypeNameToTsTypeName(girTypeName: TypeGirProperty, isStatic: boolean): TypeTsProperty
    girTypeNameToTsTypeName(girTypeName: TypeGirProperty, isStatic: false): 'property' | 'constructor-property'
    girTypeNameToTsTypeName(girTypeName: TypeGirProperty, isStatic: true): 'static-property'
    girTypeNameToTsTypeName(girTypeName: TypeGirFunction, isStatic: boolean): TypeTsFunction
    girTypeNameToTsTypeName(girTypeName: TypeGirElement, isStatic: boolean): TypeTsElement {
        switch (girTypeName) {
            case 'alias':
                return 'type'
            case 'enum':
            case 'bitfield':
                return 'enum'
            case 'enum-member':
            case 'bitfield-member':
                return 'enum-member'
            case 'callback':
                return 'interface'
            case 'class':
            case 'interface':
            case 'union':
            case 'record':
                return 'class'
            case 'constant':
                return 'constant'
            case 'constructor':
                return 'constructor'
            case 'method':
            case 'virtual':
                return 'method'
            case 'signal':
                return 'event-methods'
            case 'static-function':
                return 'static-function'
            case 'function':
                if (typeof isStatic === 'undefined') {
                    throw new Error(
                        'You must specify if the function is static or not if you want to convert the type of a function!',
                    )
                }
                if (isStatic) {
                    return 'static-function'
                }
                return 'function'
            case 'field':
            case 'property':
                if (typeof isStatic === 'undefined') {
                    throw new Error(
                        'You must specify if the property is static or not if you want to convert the type of a function!',
                    )
                }
                if (isStatic) {
                    return 'static-property'
                }
                return 'property'
        }
        throw new Error(`Unknown gir type: "${String(girTypeName)}"!`)
    }

    newGirFunctions(
        injectFunctions: InjectionFunction[],
        parent: TsClass | null,
        overrideToAll: Partial<InjectionFunction> = {},
    ) {
        const girFunctionElements: Array<
            GirConstructorElement & GirFunctionElement & GirMethodElement & GirVirtualMethodElement
        > = []
        for (let injectFunction of injectFunctions) {
            injectFunction = { ...injectFunction, ...overrideToAll }
            girFunctionElements.push(this.newGirFunction(injectFunction, parent))
        }
        return girFunctionElements
    }

    newGirFunction(
        tsData: InjectionFunction,
        parent: TsClass | null,
    ): GirConstructorElement & GirFunctionElement & GirMethodElement & GirVirtualMethodElement {
        const _tsData = this.newTsFunction(tsData, parent)
        return {
            $: this.newGirAttr(_tsData.name),
            ...this.newGirDocElement(),
            _tsData,
        }
    }

    newGirCallableParamElement(
        tsData: InjectionParameter | GirCallableParamElement,
        parent: TsFunction,
    ): GirCallableParamElement {
        return {
            $: this.newGirAttr(),
            ...this.newGirDocElement(),
            _tsData: this.newTsParameter(tsData, parent),
        }
    }

    newGirCallableParamElements(
        injectionParams: Array<InjectionParameter | GirCallableParamElement> = [],
        parent: TsFunction,
    ): GirCallableParamElement[] {
        const result: GirCallableParamElement[] = []
        for (const injectionParam of injectionParams) {
            result.push(this.newGirCallableParamElement(injectionParam, parent))
        }
        return result
    }

    newGirInstanceParameter(data: InjectionInstanceParameter | GirInstanceParameter): GirInstanceParameter {
        const tsData = (data as GirInstanceParameter)._tsData
            ? (data as GirInstanceParameter)._tsData
            : (data as InjectionInstanceParameter)

        return {
            $: this.newGirAttr(),
            ...this.newGirDocElement(),
            _tsData: tsData,
        }
    }

    newGirInstanceParameters(
        injectionInstanceParams: Array<InjectionInstanceParameter | GirInstanceParameter> = [],
    ): GirInstanceParameter[] {
        const result: GirInstanceParameter[] = []
        for (const injectionInstanceParam of injectionInstanceParams) {
            result.push(this.newGirInstanceParameter(injectionInstanceParam))
        }
        return result
    }

    newGirProperty(tsData: InjectionProperty): GirPropertyElement {
        const _tsData = this.newTsProperty(tsData)
        if (!_tsData.name) throw new Error('The name property is required!')
        return {
            $: {
                ...this.newGirAttr(_tsData.name),
            },
            annotation: [],
            ...this.newGirDocElement(),
            _tsData,
        }
    }

    newGirProperties(
        InjectionProps: InjectionProperty[],
        overrideToAll: Partial<InjectionProperty> = {},
    ): GirPropertyElement[] {
        const result: GirPropertyElement[] = []
        for (const InjectionProp of InjectionProps) {
            result.push(this.newGirProperty({ ...InjectionProp, ...overrideToAll }))
        }
        return result
    }

    newTsFunction(tsData: InjectionFunction, parent: TsClass | null): TsFunction {
        const tsFunc: TsFunction = {
            ...tsData,
            returnTypes: this.newTsTypes(tsData.returnTypes || []),
            isArrowType: tsData.isArrowType || false,
            isStatic: tsData.isStatic || false,
            isGlobal: tsData.isGlobal || false,
            isVirtual: tsData.isVirtual || false,
            isInjected: tsData.isInjected || false,
            retTypeIsVoid: tsData.returnTypes?.length === 1 && tsData.returnTypes[0]?.type === 'void',
            generics: this.newGenerics(tsData.generics || []),
            overloads: tsData.overloads || [],
            doc: this.newTsDoc(tsData.doc),
            tsTypeName: this.girTypeNameToTsTypeName(tsData.girTypeName, tsData.isStatic || false),
            inParams: [],
            outParams: [],
            instanceParameters: [],
            parent,
        }

        tsFunc.inParams.push(...this.newGirCallableParamElements(tsData.inParams, tsFunc))
        tsFunc.outParams.push(...this.newGirCallableParamElements(tsData.outParams, tsFunc))
        tsFunc.instanceParameters.push(...this.newGirInstanceParameters(tsData.instanceParameters))

        return tsFunc
    }

    newTsProperty(tsData: InjectionProperty): TsProperty {
        tsData.type ||= [this.newTsType()]
        const tsProp: TsProperty = {
            ...tsData,
            readonly: tsData.readonly || false,
            isStatic: tsData.isStatic || false,
            isInjected: tsData.isInjected || false,
            type: this.newTsTypes(tsData.type || []),
            doc: this.newTsDoc(tsData.doc),
            tsTypeName: this.girTypeNameToTsTypeName(tsData.girTypeName, tsData.isStatic || false),
        }
        return tsProp
    }

    newTsType(tsData: InjectionType = {}): TsType {
        tsData.callbacks ||= []
        tsData.generics ||= []
        tsData.nullable ||= false
        tsData.optional ||= false

        const newTsData: TsType = {
            type: tsData.type || 'void',
            callbacks: tsData.callbacks || [],
            generics: tsData.generics || [],
            nullable: tsData.nullable || false,
            optional: tsData.optional || false,
            isArray: tsData.isArray || false,
            isCallback: tsData.isCallback || false,
            isFunction: tsData.isFunction || false,
            leftSeparator: tsData.leftSeparator || '|',
        }

        return newTsData
    }

    newTsTypes(tsDataArr: InjectionType[]): TsType[] {
        const types: TsType[] = []
        for (const tsData of tsDataArr) {
            types.push(this.newTsType(tsData))
        }

        if (tsDataArr.length === 0) {
            types.push(this.newTsType({}))
        }

        return types
    }

    newTsParameter(tsData: InjectionParameter | GirCallableParamElement, parent: TsFunction) {
        const types: TsType[] = []
        const tsTypes = (tsData as GirCallableParamElement)._tsData?.type || (tsData as InjectionParameter).type || []
        for (const type of tsTypes) {
            type.type = type.type || 'any'
            types.push(this.newTsType(type))
        }

        const name = (tsData as InjectionParameter).name || (tsData as GirCallableParamElement)._tsData?.name
        const isRest =
            (tsData as InjectionParameter).isRest || (tsData as GirCallableParamElement)._tsData?.isRest || false
        const doc = (tsData as InjectionParameter).doc || (tsData as GirCallableParamElement)._tsData?.doc

        if (!name) throw new Error('[GirFactory.newTsParameter] The name property is required!')

        const newTsData: TsParameter = {
            type: types,
            name: name,
            isRest: isRest,
            girTypeName: 'callable-param',
            doc: this.newTsDoc(doc),
            parent,
        }

        return newTsData
    }

    newTsParameters(datas: Array<InjectionParameter | GirCallableParamElement>, parent: TsFunction) {
        const tsParameters: TsParameter[] = []
        for (const data of datas) {
            tsParameters.push(this.newTsParameter(data, parent))
        }
        return tsParameters
    }

    /**
     * Generates signal methods like `connect`, `connect_after` and `emit` on Gjs or `connect`, `on`, `once`, `off` and `emit` an node-gtk
     * for a default gir signal element
     * @param signalName The signal name
     * @param callbackType The callback type
     * @param emitInParams
     * @param environment
     * @param withDisconnect If `true` this also generates a `disconnect` method
     * @returns
     */
    newTsSignalMethods(
        signalName: string | undefined,
        callbackType: string | undefined,
        emitInParams: InjectionParameter[],
        parentClass: TsClass,
        environment: Environment,
        withDisconnect = false,
    ) {
        const tsMethods: TsMethod[] = []
        const girTypeName: TypeGirFunction = 'signal'

        const sigNameInParam: InjectionParameter = {
            name: 'sigName',
            type: [
                this.newTsType({
                    type: signalName ? `"${signalName}"` : 'string',
                }),
            ],
            doc: this.newTsDoc(),
        }

        const anyArgsInParam: InjectionParameter = {
            name: 'args',
            isRest: true,
            type: [
                this.newTsType({
                    type: `any`,
                    isArray: true,
                }),
            ],
            doc: this.newTsDoc(),
        }

        emitInParams.push(anyArgsInParam)

        const callbackInParam: InjectionParameter = {
            name: 'callback',
            type: [
                this.newTsType({
                    type: callbackType || '(...args: any[]) => void',
                }),
            ],
            doc: this.newTsDoc(),
        }

        const numberReturnType = this.newTsType({
            type: 'number',
        })

        const connectTsFn = this.newTsFunction(
            {
                name: 'connect',
                inParams: [sigNameInParam, callbackInParam],
                returnTypes: [numberReturnType],
                girTypeName,
            },
            parentClass,
        )
        tsMethods.push(connectTsFn)

        if (environment === 'gjs') {
            const connectAfterTsFn = this.newTsFunction(
                {
                    name: 'connect_after',
                    inParams: [sigNameInParam, callbackInParam],
                    returnTypes: [numberReturnType],
                    girTypeName,
                },
                parentClass,
            )
            tsMethods.push(connectAfterTsFn)
        } else if (environment === 'node') {
            const afterInParam: InjectionParameter = {
                name: 'after',
                type: [
                    this.newTsType({
                        type: 'boolean',
                        optional: true,
                    }),
                ],
                doc: this.newTsDoc(),
            }

            const nodeEventEmitterReturnType = this.newTsType({
                type: 'NodeJS.EventEmitter',
            })

            const onTsFn = this.newTsFunction(
                {
                    name: 'on',
                    inParams: [sigNameInParam, callbackInParam, afterInParam],
                    returnTypes: [nodeEventEmitterReturnType],
                    girTypeName,
                },
                parentClass,
            )
            const onceTsFn = this.newTsFunction(
                {
                    name: 'once',
                    inParams: [sigNameInParam, callbackInParam, afterInParam],
                    returnTypes: [nodeEventEmitterReturnType],
                    girTypeName,
                },
                parentClass,
            )
            const offTsFn = this.newTsFunction(
                {
                    name: 'off',
                    inParams: [sigNameInParam, callbackInParam],
                    returnTypes: [nodeEventEmitterReturnType],
                    girTypeName,
                },
                parentClass,
            )
            tsMethods.push(onTsFn, onceTsFn, offTsFn)
        }

        const emitTsFn = this.newTsFunction(
            {
                name: 'emit',
                inParams: [sigNameInParam, ...emitInParams],
                girTypeName,
            },
            parentClass,
        )
        tsMethods.push(emitTsFn)

        if (withDisconnect) {
            const idInParam: InjectionParameter = {
                name: 'id',
                type: [
                    this.newTsType({
                        type: 'number',
                    }),
                ],
                doc: this.newTsDoc(),
            }

            const emitTsFn = this.newTsFunction(
                {
                    name: 'disconnect',
                    inParams: [idInParam],
                    girTypeName,
                },
                parentClass,
            )
            tsMethods.push(emitTsFn)
        }

        return tsMethods
    }

    newGirAttr(
        name = '',
    ): (GirConstructorElement & GirFunctionElement & GirMethodElement & GirVirtualMethodElement)['$'] {
        return {
            name,
            'glib:set-property': '',
            'glib:get-property': '',
        }
    }

    newGirAnnotation(data: Partial<GirAnnotation['$']> = {}): GirAnnotation {
        data.name ||= ''
        data.value ||= []
        return {
            $: data as GirAnnotation['$'],
        }
    }

    newGirDocElement(text = '', filename = '', line = '', column = ''): GirDocElement {
        return {
            doc: [{ $: { filename, line, column }, _: text }],
            'doc-deprecated': [{ $: {}, _: '' }],
            'source-position': [{ filename: '', line: '', column: [''] }],
        }
    }

    newTsDoc(data: Partial<TsDoc> = {}): TsDoc {
        return {
            tags: data.tags || [],
            text: data.text || '',
        }
    }
}
