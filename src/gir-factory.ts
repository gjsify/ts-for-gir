import type {
    GirFunctionElement,
    GirDocElement,
    GirVirtualMethodElement,
    GirCallableParamElement,
    GirConstructorElement,
    GirMethodElement,
    GirInstanceParameter,
    TsFunction,
    TsMethod,
    TsParameter,
    TsInstanceParameter,
    TsGenericParameter,
    TsType,
    InjectionFunction,
    InjectionInstanceParameter,
    InjectionGenericParameter,
    InjectionType,
    InjectionParameter,
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

    newFunctions(functions: InjectionFunction[]) {
        const girFunctionElements: Array<
            GirConstructorElement & GirFunctionElement & GirMethodElement & GirVirtualMethodElement
        > = []
        for (const injectFunction of functions) {
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

            girFunctionElements.push(girFunctionElement)
        }
        return girFunctionElements
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

    newGirAttr(
        name = '',
    ): (GirConstructorElement & GirFunctionElement & GirMethodElement & GirVirtualMethodElement)['$'] {
        return {
            name,
            'glib:set-property': '',
            'glib:get-property': '',
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
