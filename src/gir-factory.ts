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
    TsInstanceParameter,
    TsGenericParameter,
    TsProperty,
    TsType,
    InjectionFunction,
    InjectionInstanceParameter,
    InjectionGenericParameter,
    InjectionType,
    InjectionParameter,
    Environment,
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

    newFunctions(injectFunctions: InjectionFunction[]) {
        const girFunctionElements: Array<
            GirConstructorElement & GirFunctionElement & GirMethodElement & GirVirtualMethodElement
        > = []
        for (const injectFunction of injectFunctions) {
            girFunctionElements.push(this.newFunction(injectFunction))
        }
        return girFunctionElements
    }

    newFunction(injectFunction: InjectionFunction) {
        const inParams: GirCallableParamElement[] = []
        if (injectFunction.inParams?.length) {
            for (const inParam of injectFunction.inParams) {
                inParams.push(this.newGirCallableParamElement(inParam))
            }
        }

        const outParams: GirCallableParamElement[] = []
        if (injectFunction.outParams?.length) {
            for (const outParam of injectFunction.outParams) {
                outParams.push(this.newGirCallableParamElement(outParam))
            }
        }

        const instanceParameters: GirInstanceParameter[] = []
        if (injectFunction.instanceParameters) {
            for (const instanceParameter of injectFunction.instanceParameters) {
                instanceParameters.push(this.newGirInstanceParameter(instanceParameter))
            }
        }

        const girFunctionElement = this.newGirFunctionElement({
            name: injectFunction.name,
            returnTypes: [this.newTsType(injectFunction.returnType)],
            isArrowType: injectFunction.isArrowType,
            isStatic: injectFunction.isStatic,
            isGlobal: injectFunction.isGlobal,
            isVirtual: injectFunction.isVirtual,
            inParams,
            outParams,
            instanceParameters,
        })

        return girFunctionElement
    }

    newGirCallableParamElement(tsData: InjectionParameter): GirCallableParamElement {
        return {
            $: this.newGirAttr(),
            ...this.newGirDocElement(),
            _tsData: this.newTsParameter(tsData),
        }
    }

    newGirInstanceParameter(tsData: InjectionInstanceParameter): GirInstanceParameter {
        return {
            $: this.newGirAttr(),
            ...this.newGirDocElement(),
            _tsData: this.newTsInstanceParameter(tsData),
        }
    }

    newGirFunctionElement(
        tsData: Partial<TsFunction> & { name: string },
    ): GirConstructorElement & GirFunctionElement & GirMethodElement & GirVirtualMethodElement {
        const _tsData = this.newTsFunction(tsData)
        return {
            $: this.newGirAttr(_tsData.name),
            ...this.newGirDocElement(),
            _tsData,
        }
    }

    newGirPropertyElement(tsData: Partial<TsProperty> & { name: string }): GirPropertyElement {
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

    newTsFunction(tsData: Partial<TsFunction> & { name: string }): TsFunction {
        tsData.returnTypes ||= [this.newTsType({ type: 'void' })]
        tsData.isArrowType ||= false
        tsData.isStatic ||= false
        tsData.isGlobal ||= false
        tsData.isVirtual ||= false
        tsData.retTypeIsVoid ||= tsData.returnTypes.length === 1 && tsData.returnTypes[0]?.type === 'void'
        tsData.inParams ||= []
        tsData.outParams ||= []
        tsData.instanceParameters ||= []
        tsData.overloads ||= []
        return tsData as TsFunction & TsMethod
    }

    newTsProperty(tsData: Partial<TsProperty> & { name: string }): TsProperty {
        tsData.type ||= this.newTsType()
        return tsData as TsProperty
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
        }

        return newTsData
    }

    newTsParameter(tsData: InjectionParameter) {
        const newTsData: TsParameter = {
            type: this.newTsType({
                ...tsData.type,
                type: tsData.type?.type || 'any',
            }),
            name: tsData.name,
        }

        return newTsData
    }

    newTsInstanceParameter(tsData: TsInstanceParameter) {
        return tsData
    }

    /**
     * Generates signal methods like `connect`, `connect_after` and `emit` on Gjs or `connect`, `on`, `once`, `off` and `emit` an node-gtk
     * for a default gir signal element
     * @param girSignal
     * @returns
     */
    newTsSignalMethods(
        signalName: string | undefined,
        callbackType: string | undefined,
        emitInParams: GirCallableParamElement[],
        environment: Environment,
        withDisconnect?: boolean,
    ) {
        const tsMethods: TsMethod[] = []

        const sigNameInParam = this.newGirCallableParamElement({
            name: 'sigName',
            type: this.newTsType({
                type: signalName ? `"${signalName}"` : 'string',
            }),
        })

        const anyArgsInParam = this.newGirCallableParamElement({
            name: '...args',
            type: this.newTsType({
                type: `any`,
                isArray: true,
            }),
        })

        emitInParams.push(anyArgsInParam)

        const callbackInParam = this.newGirCallableParamElement({
            name: 'callback',
            type: this.newTsType({
                type: callbackType || '(...args: any[]) => void',
            }),
        })

        const numberReturnType = this.newTsType({
            type: 'number',
        })

        const connectTsFn = this.newTsFunction({
            name: 'connect',
            inParams: [sigNameInParam, callbackInParam],
            returnTypes: [numberReturnType],
        })
        tsMethods.push(connectTsFn)

        if (environment === 'gjs') {
            const connectAfterTsFn = this.newTsFunction({
                name: 'connect_after',
                inParams: [sigNameInParam, callbackInParam],
                returnTypes: [numberReturnType],
            })
            tsMethods.push(connectAfterTsFn)
        } else if (environment === 'node') {
            const afterInParam = this.newGirCallableParamElement({
                name: 'after',
                type: this.newTsType({
                    type: 'boolean',
                    optional: true,
                }),
            })

            const nodeEventEmitterReturnType = this.newTsType({
                type: 'NodeJS.EventEmitter',
            })

            const onTsFn = this.newTsFunction({
                name: 'on',
                inParams: [sigNameInParam, callbackInParam, afterInParam],
                returnTypes: [nodeEventEmitterReturnType],
            })
            const onceTsFn = this.newTsFunction({
                name: 'once',
                inParams: [sigNameInParam, callbackInParam, afterInParam],
                returnTypes: [nodeEventEmitterReturnType],
            })
            const offTsFn = this.newTsFunction({
                name: 'off',
                inParams: [sigNameInParam, callbackInParam],
                returnTypes: [nodeEventEmitterReturnType],
            })
            tsMethods.push(onTsFn, onceTsFn, offTsFn)
        }

        const emitTsFn = this.newTsFunction({
            name: 'emit',
            inParams: [sigNameInParam, ...emitInParams],
        })
        tsMethods.push(emitTsFn)

        if (withDisconnect && environment === 'gjs') {
            const idInParam = this.newGirCallableParamElement({
                name: 'id',
                type: this.newTsType({
                    type: 'number',
                }),
            })

            const emitTsFn = this.newTsFunction({
                name: 'disconnect',
                inParams: [idInParam],
            })
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
}
