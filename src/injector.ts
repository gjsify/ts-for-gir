import type {
    GirClassElement,
    GirRecordElement,
    GirUnionElement,
    GirInterfaceElement,
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
    InjectionFunction,
    InjectionInstanceParameter,
} from './types/index.js'

import { classes } from './injections/index.js'

/**
 * Inject additional methods, properties, etc
 */
export class Injector {
    /** Inject additional methods, properties, etc to a existing class */
    toClass(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        if (!girClass._tsData) {
            return
        }

        const toClass = classes.find((cls) => cls.qualifiedName === girClass._tsData?.qualifiedName)
        if (toClass) {
            if (toClass.staticFunctions) {
                girClass._tsData.staticFunctions.push(...this.newFunctions(toClass.staticFunctions))
            }
            if (toClass.constructors) {
                girClass._tsData.constructors.push(...this.newFunctions(toClass.constructors))
            }
            if (toClass.methods) {
                girClass._tsData.methods.push(...this.newFunctions(toClass.methods))
            }
            if (toClass.virtualMethods) {
                girClass._tsData.virtualMethods.push(...this.newFunctions(toClass.virtualMethods))
            }
            if (toClass.propertyNames) {
                girClass._tsData.propertyNames.push(...toClass.propertyNames)
            }
        }
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
                returnType: injectFunction.returnType,
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

    newGirCallableParamElement(tsData: Partial<TsParameter> & { name: string }): GirCallableParamElement {
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
        tsData.returnType ||= 'void'
        tsData.isArrowType ||= false
        tsData.isStatic ||= false
        tsData.isGlobal ||= false
        tsData.isVirtual ||= false
        tsData.patched ||= true
        tsData.retTypeIsVoid ||= tsData.returnType === 'void'
        tsData.inParams ||= []
        tsData.outParams ||= []
        tsData.instanceParameters ||= []
        tsData.overloads ||= []
        return tsData as TsFunction & TsMethod
    }

    newTsParameter(tsData: Partial<TsParameter> & { name: string }) {
        tsData.optional ||= false
        tsData.nullable ||= false
        tsData.type ||= 'any'

        return tsData as TsParameter
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
