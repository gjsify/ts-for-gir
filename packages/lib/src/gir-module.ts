// TODO move this class into a web-worker? https://www.npmjs.com/package/web-worker
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Transformation, IGNORE_GIR_TYPE_TS_DOC_TYPES } from './transformation.js'
import { Logger } from './logger.js'
import { Injector } from './injection/injector.js'
import { GirFactory } from './gir-factory.js'
import { ConflictResolver } from './conflict-resolver.js'
import { DependencyManager } from './dependency-manager.js'
import { find, girBool } from './utils.js'
import { SymTable } from './symtable.js'
import { LibraryVersion } from './library-version.js'

import type {
    Dependency,
    GirRepository,
    GirAliasElement,
    GirFunctionElement,
    GirArrayType,
    GirType,
    GirCallableParamElement,
    GirVirtualMethodElement,
    GirSignalElement,
    GirCallableReturn,
    GirCallbackElement,
    GirConstantElement,
    GirFieldElement,
    GirMethodElement,
    GirPropertyElement,
    GirConstructorElement,
    GirDocElement,
    TsDoc,
    TsDocTag,
    ParsedGir,
    GirInfoAttrs,
    GenerateConfig,
} from './types/index.js'
import {
    ClosureType,
    TypeIdentifier,
    PromiseType,
    VoidType,
    BooleanType,
    TupleType,
    BinaryType,
    NullableType,
    ObjectType,
    GirNSMember,
} from './gir.js'
import { IntrospectedAlias } from './gir/alias.js'
import { IntrospectedBase, IntrospectedNamespaceMember } from './gir/base.js'
import { IntrospectedBaseClass, IntrospectedClass, IntrospectedRecord, IntrospectedInterface } from './gir/class.js'
import { IntrospectedConstant } from './gir/const.js'
import { IntrospectedEnum, IntrospectedError } from './gir/enum.js'
import {
    IntrospectedFunction,
    IntrospectedCallback,
    IntrospectedClassCallback,
    IntrospectedClassFunction,
    IntrospectedFunctionParameter,
} from './gir/function.js'
import { NSRegistry } from './gir/registry.js'
import { isPrimitiveType } from './gir/util.js'
import { LoadOptions } from './types.js'
import { GirVisitor } from './visitor.js'

export class GirModule {
    /**
     * E.g. 'Gtk'
     */
    namespace!: string
    /**
     * E.g. '4.0'
     */
    version: string
    /**
     * E.g. 'Gtk-4.0'
     */
    packageName!: string
    /**
     * E.g. 'Gtk40'
     * Is used in the generated index.d.ts, for example: `import * as Gtk40 from "./Gtk-4.0.js";`
     */
    importNamespace!: string

    importName!: string

    /**
     * The version of the library as an object.
     * E.g. `{ major: 4, minor: 0, patch: 0 }` or as string `4.0.0`'
     */
    libraryVersion!: LibraryVersion

    dependencies: Dependency[] = []
    private _transitiveDependencies: Dependency[] = []

    set transitiveDependencies(deps: Dependency[]) {
        this._transitiveDependencies = this.checkTransitiveDependencies(deps)
    }

    get transitiveDependencies(): Dependency[] {
        return this._transitiveDependencies
    }

    get allDependencies(): Dependency[] {
        return [...new Set([...this.dependencies, ...this.transitiveDependencies])]
    }

    /**
     * Used to find namespaces that are used in other modules
     */
    symTable!: SymTable

    transformation!: Transformation

    girFactory = new GirFactory()

    dependencyManager: DependencyManager

    conflictResolver!: ConflictResolver

    log!: Logger

    inject!: Injector

    extends?: string

    /**
     * To prevent constants from being exported twice, the names already exported are saved here for comparison.
     * Please note: Such a case is only known for Zeitgeist-2.0 with the constant "ATTACHMENT"
     */
    constNames: { [varName: string]: GirConstantElement } = {}

    readonly name: string
    readonly c_prefixes: string[]

    private imports: Map<string, string> = new Map()
    default_imports: Map<string, string> = new Map()

    private _members?: Map<string, GirNSMember | GirNSMember[]>
    private _enum_constants?: Map<string, readonly [string, string]>
    private _resolve_names: Map<string, TypeIdentifier> = new Map()
    __dts__references?: string[]

    package_version!: readonly [string, string] | readonly [string, string, string]
    parent!: NSRegistry
    config: GenerateConfig

    constructor(repo: GirRepository, name: string, version: string, prefixes: string[], config: GenerateConfig) {
        this.name = name
        this.version = version
        this.c_prefixes = [...prefixes]
        this.package_version = ['0', '0']
        this.config = config

        this.dependencyManager = DependencyManager.getInstance(this.config)
        this.dependencies = this.dependencyManager.fromGirIncludes(repo.include || [])
    }

    get ns() {
        return this
    }

    private checkTransitiveDependencies(transitiveDependencies: Dependency[]) {
        // Always pull in GObject-2.0, as we may need it for e.g. GObject-2.0.type
        if (this.packageName !== 'GObject-2.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'GObject-2.0')) {
                transitiveDependencies.push(this.dependencyManager.get('GObject', '2.0'))
            }
        }

        // Add missing dependencies
        if (this.packageName === 'UnityExtras-7.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'Unity-7.0')) {
                transitiveDependencies.push(this.dependencyManager.get('Unity', '7.0'))
            }
        }
        if (this.packageName === 'UnityExtras-6.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'Unity-6.0')) {
                transitiveDependencies.push(this.dependencyManager.get('Unity', '6.0'))
            }
        }
        if (this.packageName === 'GTop-2.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'GLib-2.0')) {
                transitiveDependencies.push(this.dependencyManager.get('GLib', '2.0'))
            }
        }

        return transitiveDependencies
    }

    private getTsDoc(girDoc: GirDocElement) {
        const tsDoc: TsDoc = {
            text: '',
            tags: [],
        }
        if (girDoc.doc?.[0]?._) {
            // TODO: Somehow _ is not a string
            let text = `${girDoc.doc?.[0]?._ || ''}`
            text = this.transformation.transformGirDocText(text)
            tsDoc.text = text
        }

        return tsDoc
    }

    private getTsDocGirElementTags(tsTypeName?: string, girTypeName?: string): TsDocTag[] {
        const tags: TsDocTag[] = []

        if (!girTypeName || IGNORE_GIR_TYPE_TS_DOC_TYPES.includes(girTypeName)) {
            return tags
        }

        tags.push({
            tagName: girTypeName,
            paramName: '',
            text: '',
        })

        return tags
    }

    getTsDocReturnTags(girElement?: IntrospectedFunction | IntrospectedClassFunction): TsDocTag[] {
        const girReturnValue = girElement?.returnTypeDoc
        if (!girReturnValue) {
            return []
        }
        const returnTag: TsDocTag = {
            tagName: 'returns',
            paramName: '',
            text: this.transformation.transformGirDocTagText(girReturnValue),
        }

        return [returnTag]
    }

    getTsDocInParamTags(inParams?: IntrospectedFunctionParameter[]): TsDocTag[] {
        const tags: TsDocTag[] = []
        if (!inParams?.length) {
            return tags
        }

        for (const inParam of inParams) {
            if (inParam.name) {
                tags.push({
                    paramName: inParam.name,
                    tagName: 'param',
                    text:
                        typeof inParam.doc === 'string' ? this.transformation.transformGirDocTagText(inParam.doc) : '',
                })
            }
        }

        return tags
    }

    private annotateFunctionArguments(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirVirtualMethodElement
            | GirCallbackElement
            | GirSignalElement,
    ): void {
        const funcName = girFunc._fullSymName
        if (funcName && girFunc.parameters) {
            for (const girParams of girFunc.parameters) {
                if (girParams.parameter) {
                    for (const girParam of girParams.parameter) {
                        girParam._module = this
                        if (girParam.$ && girParam.$.name) {
                            girParam._fullSymName = `${funcName}.${girParam.$.name}`
                        }
                    }
                }
            }
        }
    }

    private annotateFunctionReturn(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirVirtualMethodElement
            | GirCallbackElement
            | GirSignalElement,
    ): void {
        const retVals = girFunc['return-value']
        if (retVals && girFunc._fullSymName)
            for (const retVal of retVals) {
                retVal._module = this
                retVal.girTypeName = 'callable-return'
                if (retVal.$ && retVal.$.name) {
                    retVal._fullSymName = `${girFunc._fullSymName}.${retVal.$.name}`
                }
            }
    }

    /**
     * Functions which are not part of a class
     * @param girFuncs
     */
    private annotateFunctions(girFuncs: GirFunctionElement[] | GirCallbackElement[]): void {
        if (Array.isArray(girFuncs))
            for (const girFunc of girFuncs) {
                if (girFunc?.$?.name) {
                    // girFunc._girType = girType
                    girFunc._fullSymName = `${this.namespace}.${girFunc.$.name}`
                    this.annotateFunctionArguments(girFunc)
                    this.annotateFunctionReturn(girFunc)
                }
            }
    }

    /**
     * Variables which are not part of a class
     */
    private annotateVariables(girVars: GirConstantElement[]): void {
        for (const girVar of girVars) {
            girVar._module = this
            if (girVar.$ && girVar.$.name) {
                girVar._fullSymName = `${this.namespace}.${girVar.$.name}`
            }
        }
    }

    // /**
    //  * Annotates the custom `_module`, `_fullSymName` and `_girType` properties.
    //  * Also registers the element on the `symTable`.
    //  * @param girElements
    //  * @param girType
    //  */
    // private annotateAndRegisterGirElement(girElements: GirAnyElement[]): void {
    //     for (const girElement of girElements) {
    //         if (girElement?.$ && girElement.$.name) {
    //             // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
    //             if (!girElementIsIntrospectable(girElement as any)) continue

    //             girElement._module = this
    //             girElement._fullSymName = `${this.namespace}.${girElement.$.name}`
    //             if (this.symTable.get(this.allDependencies, girElement._fullSymName)) {
    //                 this.log.warn(WARN_DUPLICATE_SYMBOL(girElement._fullSymName))
    //             }

    //             this.symTable.set(this.allDependencies, girElement._fullSymName, girElement)
    //         }
    //     }
    // }

    // /**
    //  * TODO: find better name for this method
    //  * @param girVar
    //  * @param fullTypeName
    //  * @returns e.g.
    //  * ```ts
    //  * {
    //  *      namespace: "Gtk",
    //  *      resValue: "Gtk.Widget"
    //  * }
    //  *
    //  */
    // private fullTypeLookup(
    //     girVar:
    //         | GirCallableParamElement
    //         | GirCallableReturn
    //         | GirFieldElement
    //         | GirAliasElement
    //         | GirPropertyElement
    //         | GirConstantElement,
    //     fullTypeName: string | null,
    // ) {
    //     let resValue = ''
    //     let namespace = ''

    //     if (!fullTypeName) {
    //         return {
    //             value: resValue,
    //             fullTypeName,
    //             namespace,
    //         }
    //     }

    //     // Fully qualify our type name
    //     if (!fullTypeName.includes('.')) {
    //         let tryFullTypeName = ''

    //         if (!resValue && girVar._module && girVar._module !== this) {
    //             tryFullTypeName = `${girVar._module.namespace}.${fullTypeName}`
    //             resValue = this.fullTypeLookupWithNamespace(tryFullTypeName).value
    //             if (resValue) {
    //                 fullTypeName = tryFullTypeName
    //                 namespace = girVar._module.namespace
    //             }
    //         }

    //         if (!resValue) {
    //             tryFullTypeName = `${this.namespace}.${fullTypeName}`
    //             resValue = this.fullTypeLookupWithNamespace(tryFullTypeName).value
    //             if (resValue) {
    //                 fullTypeName = tryFullTypeName
    //                 namespace = this.namespace
    //             }
    //         }

    //         const girClass = (
    //             girVar as
    //                 | GirCallableParamElement
    //                 | GirCallableReturn
    //                 | GirFieldElement
    //                 | GirAliasElement
    //                 | GirPropertyElement
    //         )._class as GirClassElement | undefined

    //         if (!resValue && girClass?._module?.namespace && girClass._module !== this) {
    //             tryFullTypeName = `${girClass._module.namespace}.${fullTypeName}`
    //             resValue = this.fullTypeLookupWithNamespace(tryFullTypeName).value
    //             if (resValue) {
    //                 fullTypeName = tryFullTypeName
    //                 namespace = girClass?._module?.namespace
    //             }
    //         }
    //     }

    //     if (!resValue && fullTypeName) {
    //         resValue = this.fullTypeLookupWithNamespace(fullTypeName).value
    //     }

    //     return {
    //         value: resValue,
    //         namespace,
    //     }
    // }

    /**
     * this method needs to be refactored, an array can also be an array of an array for example
     * @param girVar
     * @returns
     */

    private arrayLengthIndexLookup(girVar: GirCallableParamElement): number {
        if (!girVar.array) return -1

        const arr: GirArrayType = girVar.array[0]
        if (!arr.$) return -1

        if (arr.$.length) {
            return parseInt(arr.$.length)
        }

        return -1
    }

    private closureDataIndexLookup(girVar: GirCallableParamElement): number {
        if (!girVar.$.closure) return -1

        return parseInt(girVar.$.closure)
    }

    private destroyDataIndexLookup(girVar: GirCallableParamElement): number {
        if (!girVar.$.destroy) return -1

        return parseInt(girVar.$.destroy)
    }

    private processParams(
        params: GirCallableParamElement[],
        skip: GirCallableParamElement[],
        getIndex: (param: GirCallableParamElement) => number,
    ): void {
        for (const param of params) {
            const index = getIndex(param)
            if (index < 0) continue
            if (index >= params.length) continue
            skip.push(params[index])
        }
    }

    /**
     * Checks if the parameter is nullable (which results in ` | null`).
     *
     * @param girVar girVar to test
     */
    private typeIsNullable(
        girVar:
            | GirCallableParamElement
            | GirCallableReturn
            | GirAliasElement
            | GirFieldElement
            | GirConstantElement
            | GirPropertyElement,
    ): boolean {
        const a = (girVar as GirCallableParamElement).$

        if (!a) return false

        const type: GirType | undefined = girVar.type?.[0]
        const cType = type?.$?.['c:type']

        // UTF-8 string pointers can be null, e.g. `gchar*`, see https://github.com/gjsify/ts-for-gir/issues/108
        if (type?.$?.name === 'utf8' && cType?.endsWith('*')) {
            return true
        }

        // If the default value is NULL, handle this as nullable
        if (a['default-value'] === 'NULL') return true

        // Ignore depreciated `allow-none` if one of the new implementation `optional` or `nullable` is set
        if (a.optional || a.nullable) {
            return girBool(a.nullable)
        } else {
            return girBool(a.nullable) || girBool(a['allow-none']) || girBool(a['null-ok'])
        }
    }

    /**
     * Checks if the parameter is optional (which results in `foo?: bar`).
     * @param girVar girVar to test
     */
    private typeIsOptional(
        girVar:
            | GirCallableParamElement
            | GirCallableReturn
            | GirAliasElement
            | GirFieldElement
            | GirConstantElement
            | GirPropertyElement,
    ): boolean {
        const a = (girVar as GirCallableParamElement).$
        if (!a) return false

        // Ignore depreciated `allow-none` if one of the new implementation `optional` or `nullable` is set
        if (a.optional || a.nullable) {
            return girBool(a.optional)
        } else {
            return girBool(a.optional) || girBool(a['allow-none']) || girBool(a['null-ok'])
        }
    }

    // private setParameterTsData(
    //     girParam: GirCallableParamElement,
    //     girParams: GirCallableParamElement[],
    //     paramNames: string[],
    //     skip: GirCallableParamElement[],
    //     parent: TsFunction | TsSignal,
    // ) {
    //     // I think it's safest to force inout params to have the
    //     // same type for in and out
    //     const tsType = this.getTsType(girParam, parent.parent)
    //     // const optDirection = girParam.$.direction

    //     if (girParam._tsData) {
    //         // this.log.warn('[setParameterTsData] _tsData already set!')
    //         return girParam._tsData
    //     }

    //     if (tsType.isCallback) {
    //         throw new Error('Callback type is not implemented here')
    //     }

    //     let paramName = this.transformation.transformParameterName(girParam, false)

    //     if (paramNames.includes(paramName)) {
    //         this.log.warn(WARN_DUPLICATE_PARAMETER(paramName, girParam._fullSymName))
    //         paramName += '_'
    //     }
    //     paramNames.push(paramName)

    //     // In Typescript no optional parameters are allowed if the following ones are not optional
    //     if (tsType.optional) {
    //         const index = girParams.indexOf(girParam)
    //         const following = girParams
    //             .slice(index)
    //             .filter(() => skip.indexOf(girParam) === -1)
    //             .filter((p) => p.$.direction !== GirDirection.Out)

    //         if (following.some((p) => !this.typeIsOptional(p))) {
    //             tsType.optional = false
    //         }
    //     }

    //     const tsParam: TsParameter = {
    //         name: paramName,
    //         type: [tsType],
    //         isRest: false,
    //         girTypeName: 'callable-param',
    //         doc: this.getTsDoc(girParam),
    //         parent,
    //     }

    //     girParam._tsData = tsParam

    //     // // TODO: remove this, wee need a special solution for Gio.AsyncReadyCallback instead
    //     girParam = this.inject.toParameterType(girParam)

    //     return girParam._tsData
    // }

    // private setParametersTsData(
    //     outArrayLengthIndex: number,
    //     girParams: GirCallableParams[] = [],
    //     parent: TsFunction | TsCallback,
    // ) {
    //     const outParams: GirCallableParamElement[] = []
    //     const inParams: GirCallableParamElement[] = []
    //     const paramNames: string[] = []
    //     const instanceParameters: GirInstanceParameter[] = []

    //     if (girParams && girParams.length > 0) {
    //         for (const girParam of girParams) {
    //             const params = girParam?.parameter || []

    //             // Instance parameter needs to be exposed for class methods (see comment above getClassMethods())
    //             const instanceParameter = girParams[0]['instance-parameter']?.[0]
    //             if (instanceParameter) {
    //             }
    //             if (params.length) {
    //                 const skip = outArrayLengthIndex === -1 ? [] : [params[outArrayLengthIndex]]

    //                 this.processParams(params, skip, (girVar) => this.arrayLengthIndexLookup(girVar))
    //                 this.processParams(params, skip, (girVar) => this.closureDataIndexLookup(girVar))
    //                 this.processParams(params, skip, (girVar) => this.destroyDataIndexLookup(girVar))

    //                 for (const param of params) {
    //                     if (skip.includes(param)) {
    //                         continue
    //                     }

    //                     param._tsData = this.setParameterTsData(param, params, paramNames, skip, parent)

    //                     const optDirection = param.$.direction
    //                     if (
    //                         optDirection === GirDirection.Out ||
    //                         optDirection === GirDirection.Inout ||
    //                         optDirection === GirDirection.InOut
    //                     ) {
    //                         outParams.push(param)
    //                         if (optDirection === GirDirection.Out) continue
    //                     }
    //                     inParams.push(param)
    //                 }
    //             }
    //         }
    //     }

    //     return { outParams, paramNames, inParams, instanceParameters }
    // }

    // overloadPromisifiedFunctions(girFunctions: GirFunctionElement[]): void {
    //     if (!this.config.promisify) return

    //     const promisifyAsyncReturn = ['Gio.AsyncReadyCallback', 'AsyncReadyCallback']
    //     const promisifyFuncMap = {} as { [name: string]: PromisifyFunc }

    //     // Find the functions that can be promisified
    //     for (const girFunction of girFunctions) {
    //         const tsFunction = girFunction._tsData
    //         if (!tsFunction) continue

    //         // Check if function name satisfies async,finish scheme
    //         const isAsync = tsFunction.name.endsWith('_async') || tsFunction.name.endsWith('_begin')
    //         const isFinish = tsFunction.name.endsWith('_finish')
    //         if (!isAsync && !isFinish) continue

    //         // Handle async functions
    //         if (isAsync) {
    //             if (tsFunction.inParams.length === 0) continue
    //             const lastParam = tsFunction.inParams[tsFunction.inParams.length - 1]
    //             if (lastParam.type && lastParam.type.length > 0) {
    //                 const type = lastParam.type[0].$.name
    //                 if (type && promisifyAsyncReturn.includes(type)) {
    //                     if (!(tsFunction.name in promisifyFuncMap)) promisifyFuncMap[tsFunction.name] = {}
    //                     promisifyFuncMap[tsFunction.name].asyncFn = tsFunction
    //                 }
    //             }
    //         }

    //         // Handle finish functions
    //         if (isFinish) {
    //             if (tsFunction.returnTypes.length === 0) continue
    //             let name = `${tsFunction.name.replace(/(_finish)$/, '')}_async`
    //             if (!(name in promisifyFuncMap)) name = `${tsFunction.name.replace(/(_finish)$/, '')}_begin`
    //             if (!(name in promisifyFuncMap)) promisifyFuncMap[name] = {}
    //             promisifyFuncMap[name].finishFn = tsFunction
    //         }
    //     }

    //     // Generate TsFunctions for promisify-able functions and add to the array
    //     for (const [, func] of Object.entries(promisifyFuncMap)) {
    //         if (!func.asyncFn || !func.finishFn) continue

    //         const inParams = this.girFactory.newGirCallableParamElements(
    //             func.asyncFn.inParams.slice(0, -1),
    //             func.asyncFn,
    //         )

    //         const outParams = this.girFactory.newGirCallableParamElements(func.finishFn.outParams, func.asyncFn)

    //         const returnTypes = this.girFactory.newTsTypes(outParams.length > 0 ? [] : func.finishFn.returnTypes)

    //         let docReturnText = func.finishFn.doc.tags.find((tag) => tag.tagName === 'returns')?.text || ''
    //         if (docReturnText) {
    //             docReturnText = `A Promise of: ${docReturnText}`
    //         } else {
    //             docReturnText = `A Promise of the result of {@link ${func.asyncFn.name}}`
    //         }

    //         const docText = `Promisified version of {@link ${func.asyncFn.name}}\n\n${func.asyncFn.doc.text}`

    //         const docTags = func.asyncFn.doc.tags.filter(
    //             (tag) => tag.paramName !== 'callback' && tag.paramName !== 'returns',
    //         )

    //         docTags.push({
    //             tagName: 'returns',
    //             text: docReturnText,
    //             paramName: '',
    //         })

    //         const doc = this.girFactory.newTsDoc({
    //             text: docText,
    //             tags: docTags,
    //         })

    //         const promisifyFn = this.girFactory.newTsFunction(
    //             {
    //                 ...func.asyncFn,
    //                 inParams,
    //                 outParams,
    //                 returnTypes,
    //                 isPromise: true,
    //                 doc,
    //             },
    //             func.asyncFn.parent,
    //         )

    //         func.asyncFn.overloads.push(promisifyFn)
    //     }
    // }

    // private getConstantTsData(girConst: GirConstantElement, tsClass: TsClass | null) {
    //     if (!girElementIsIntrospectable(girConst)) return undefined

    //     if (girConst._tsData) {
    //         // this.log.warn('[getConstantTsData] _tsData already set!')
    //         return girConst._tsData
    //     }

    //     let tsData: TsVar | undefined = this.getVariableTsData(
    //         girConst,
    //         'constant',
    //         'constant',
    //         tsClass,
    //         false,
    //         false,
    //         false,
    //     )
    //     if (tsData?.name) {
    //         if (!this.constNames[tsData.name]) {
    //             this.constNames[tsData.name] = girConst
    //         } else {
    //             this.log.warn(WARN_CONSTANT_ALREADY_EXPORTED(tsData.name))
    //             tsData = undefined
    //         }
    //     }
    //     return tsData
    // }

    // private getClassConstructPropsTsData(
    //     girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    //     constructPropNames: LocalNames,
    // ) {
    //     const constructProps: GirPropertyElement[] = []
    //     const girProperties = (girClass as GirClassElement | GirInterfaceElement).property
    //     if (!girProperties?.length) {
    //         return constructProps
    //     }
    //     for (const girProp of girProperties) {
    //         if (!girElementIsIntrospectable(girProp) || !girProp.$.name) continue
    //         // Do not modify the original girProp, create a new one by clone `girProp` to `girConstrProp`
    //         const girConstrProp = clone(girProp)

    //         if (!girClass._tsData) continue

    //         if (!girConstrProp._tsData) {
    //             girConstrProp._tsData = this.getPropertyTsData(
    //                 girConstrProp,
    //                 'property',
    //                 'constructor-property',
    //                 girClass._tsData,
    //                 true,
    //                 true,
    //                 true,
    //                 0,
    //             )
    //         }

    //         if (!girConstrProp._tsData) {
    //             continue
    //         }

    //         const localName = this.checkOrSetLocalName(girConstrProp, constructPropNames, 'property')

    //         if (!localName?.added) {
    //             continue
    //         }

    //         if (girConstrProp._fullSymName)
    //             this.symTable.set(this.allDependencies, girConstrProp._fullSymName, girConstrProp)
    //         constructProps.push(girConstrProp)
    //     }

    //     return constructProps
    // }

    // /**
    //  * Some class/static methods are defined in a separate record which is not
    //  * exported, but the methods are available as members of the JS constructor.
    //  * In gjs one can use an instance of the object, a JS constructor or a GType
    //  * as the method's instance-parameter.
    //  * @see https://discourse.gnome.org/t/using-class-methods-like-gtk-widget-class-get-css-name-from-gjs/4001
    //  * @param girClass
    //  */
    // private getClassRecordMethods(
    //     girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    // ): GirMethodElement[] {
    //     const girMethods: GirMethodElement[] = []

    //     if (!girClass.$.name) return girMethods
    //     const fName = girClass.$.name + 'Class'
    //     let rec = this.ns.record?.find((r) => r.$.name == fName)
    //     if (!rec || !this.isGtypeStructFor(girClass, rec)) {
    //         rec = this.ns.record?.find((r) => this.isGtypeStructFor(girClass, r))
    //         fName == rec?.$.name
    //     }
    //     if (!rec) return girMethods

    //     // Record methods
    //     const methods = rec.method || []

    //     for (const girMethod of methods) {
    //         if (!girElementIsIntrospectable(girMethod) || !girClass._tsData) continue

    //         if (!girMethod._tsData)
    //             girMethod._tsData = this.getFunctionTsData(girMethod, 'static-function', girClass._tsData, {
    //                 isStatic: true,
    //                 isArrowType: false,
    //                 isGlobal: false,
    //                 isVirtual: false,
    //                 returnType: null,
    //                 generics: [],
    //             })

    //         if (!girMethod._tsData) continue

    //         if (girMethod._tsData) {
    //             if (girMethod._fullSymName) this.symTable.set(this.allDependencies, girMethod._fullSymName, girMethod)
    //             girMethods.push(girMethod)
    //         }
    //     }

    //     this.overloadPromisifiedFunctions(methods)

    //     return girMethods
    // }

    // private getGObjectProperties(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
    //     const girProperties: GirPropertyElement[] = []
    //     if (girClass._fullSymName && !STATIC_NAME_ALREADY_EXISTS.includes(girClass._fullSymName)) {
    //         // Records, classes and interfaces all have a static name
    //         const type = this.girFactory.newTsType({ type: 'string' })
    //         const staticNameProp = this.girFactory.newGirProperty({
    //             isStatic: true,
    //             name: 'name',
    //             type: [type],
    //             girTypeName: 'property',
    //         })
    //         girProperties.push(staticNameProp)
    //     }

    //     if (girClass._tsData?.isDerivedFromGObject && girClass._module) {
    //         if (this.config.environment === 'gjs') {
    //             const type = this.girFactory.newTsType({
    //                 // TODO: Type not as string
    //                 type: 'GObject.GType',
    //                 generics: this.girFactory.newGenerics([
    //                     {
    //                         value: girClass._tsData.name,
    //                     },
    //                 ]),
    //             })
    //             const staticGTypeProp = this.girFactory.newGirProperty({
    //                 isStatic: true,
    //                 name: '$gtype',
    //                 type: [type],
    //                 girTypeName: 'property',
    //             })
    //             girProperties.push(staticGTypeProp)
    //         }
    //     }

    //     return girProperties
    // }

    getClassParentObject(parentName: string, namespace: string, type: 'parent' | 'prerequisite' | 'implements') {
        let qualifiedParentName: string
        let parentModName: string

        // WORKAROUND: Fix wrong parent names
        if (
            (this.packageName === 'GstAudio-0.10' || this.packageName === 'ClutterGst-1.0') &&
            (parentName === 'GstBase.BaseTransform' ||
                parentName === 'GstBase.BaseSink' ||
                parentName === 'GstBase.PushSrc')
        ) {
            const rename = parentName.replace('GstBase.', 'Gst.')
            this.log.warn(`[getClassParentObject] Rename parent class "${parentName}" -> "${rename}"`)
            parentName = rename
        }

        if (parentName === 'GraniteServicesSettingsSerializable') {
            parentName = 'ServicesSettingsSerializable'
            this.log.warn(
                `[getClassParentObject] Rename parent class "GraniteServicesSettingsSerializable" -> "ServicesSettingsSerializable"`,
            )
        }

        if (parentName.indexOf('.') < 0) {
            qualifiedParentName = namespace + '.' + parentName
            parentModName = namespace
        } else {
            qualifiedParentName = parentName
            const split = parentName.split('.')
            parentName = split[split.length - 1]
            parentModName = split.slice(0, split.length - 1).join('.')
        }
        const localParentName = parentModName == namespace ? parentName : qualifiedParentName

        const dependencyExists = !!this.symTable.get(this.allDependencies, qualifiedParentName)

        // todo
    }

    registerResolveName(resolveName: string, namespace: string, name: string) {
        this._resolve_names.set(resolveName, new TypeIdentifier(name, namespace))
    }

    get members(): Map<string, GirNSMember | GirNSMember[]> {
        if (!this._members) {
            this._members = new Map<string, GirNSMember | GirNSMember[]>()
        }

        return this._members
    }

    get enum_constants(): Map<string, readonly [string, string]> {
        if (!this._enum_constants) {
            this._enum_constants = new Map()
        }

        return this._enum_constants
    }

    accept(visitor: GirVisitor) {
        for (const key of [...this.members.keys()]) {
            const member = this.members.get(key)

            if (!member) continue

            if (Array.isArray(member)) {
                this.members.set(
                    key,
                    member.map((m) => {
                        return m.accept(visitor)
                    }),
                )
            } else {
                this.members.set(key, member.accept(visitor))
            }
        }

        return this
    }

    getImportsForCPrefix(c_prefix: string): GirModule[] {
        return this.parent.namespacesForPrefix(c_prefix)
    }

    hasImport(name: string): boolean {
        return this.default_imports.has(name) || this.imports.has(name)
    }

    private _getImport(name: string): GirModule | null {
        let version = this.default_imports.get(name) ?? this.imports.get(name)

        if (name === this.name) {
            return this
        }

        // TODO: Clean this up, but essentially try to resolve import versions
        // using transitive imports (e.g. use GtkSource to find the version of Gtk)
        if (!version) {
            const entries = [...this.default_imports.entries()].flatMap(([_name]) => {
                const namespace = this._getImport(_name)

                return [...(namespace?.default_imports.entries() ?? [])]
            })

            version = Object.fromEntries(entries)[name]
        }

        if (!version) {
            version = this.parent.assertDefaultVersionOf(name)
        }

        const namespace = this.parent.namespace(name, version)

        if (namespace) {
            if (!this.imports.has(namespace.name)) {
                this.imports.set(namespace.name, namespace.version)
            }
        }

        return namespace
    }

    getInstalledImport(name: string): GirModule | null {
        let version = this.default_imports.get(name) ?? this.imports.get(name)

        if (name === this.name) {
            return this
        }

        if (!version) {
            version = this.parent.defaultVersionOf(name) ?? undefined
        }

        if (!version) {
            return null
        }

        const namespace = this.parent.namespace(name, version)

        if (namespace) {
            if (!this.imports.has(namespace.name)) {
                this.imports.set(namespace.name, namespace.version)
            }
        }

        return namespace
    }

    assertInstalledImport(name: string): GirModule {
        const namespace = this._getImport(name)

        if (!namespace) {
            throw new Error(`Failed to import ${name} in ${this.name}, not installed or accessible.`)
        }

        return namespace
    }

    getImports(): [string, string][] {
        return [...this.imports.entries()].sort(([[a], [b]]) => a.localeCompare(b))
    }

    addImport(ns_name: string) {
        this._getImport(ns_name)
    }

    getMembers(name: string): IntrospectedNamespaceMember[] {
        const members = this.members.get(name)

        if (Array.isArray(members)) {
            return [...members]
        }
        return members ? [members] : []
    }

    getMemberWithoutOverrides(name: string) {
        if (this.members.has(name)) {
            const member = this.members.get(name)

            if (!Array.isArray(member)) {
                return member
            }

            return null
        }

        const resolvedName = this._resolve_names.get(name)
        if (resolvedName) {
            const member = this.members.get(resolvedName.name)

            if (!Array.isArray(member)) {
                return member
            }
        }

        return null
    }

    assertClass(name: string): IntrospectedBaseClass {
        const clazz = this.getClass(name)

        if (!clazz) {
            throw new Error(`Class ${name} does not exist in namespace ${this.name}.`)
        }

        return clazz
    }

    getClass(name: string): IntrospectedBaseClass | null {
        const member = this.getMemberWithoutOverrides(name)

        if (member instanceof IntrospectedBaseClass) {
            return member
        }
        return null
    }

    getEnum(name: string): IntrospectedEnum | null {
        const member = this.getMemberWithoutOverrides(name)

        if (member instanceof IntrospectedEnum) {
            return member
        }
        return null
    }

    getAlias(name: string): IntrospectedAlias | null {
        const member = this.getMemberWithoutOverrides(name)

        if (member instanceof IntrospectedAlias) {
            return member
        }
        return null
    }

    hasSymbol(name: string) {
        return this.members.has(name)
    }

    resolveSymbolFromTypeName(name: string): string | null {
        const resolvedName = this._resolve_names.get(name)

        if (!resolvedName) {
            return null
        }

        const member = this.members.get(resolvedName.name)
        if (member instanceof IntrospectedBase) {
            return member.name
        }

        return null
    }

    findClassCallback(name: string): [string | null, string] {
        const clazzes = Array.from(this.members.values()).filter(
            (m): m is IntrospectedBaseClass => m instanceof IntrospectedBaseClass,
        )
        const res = clazzes
            .map<[IntrospectedBaseClass, IntrospectedClassCallback | undefined]>((m) => [
                m,
                m.callbacks.find((c) => c.name === name || c.resolve_names.includes(name)),
            ])
            .find((r): r is [IntrospectedBaseClass, IntrospectedClassCallback] => r[1] != null)

        if (res) {
            return [res[0].name, res[1].name]
        } else {
            return [null, name]
        }
    }

    /**
     * This is an internal method to add TypeScript <reference>
     * comments when overrides use parts of the TypeScript standard
     * libraries that are newer than default.
     */
    ___dts___addReference(reference: string) {
        this.__dts__references ??= []
        this.__dts__references.push(reference)
    }

    static load(repo: ParsedGir, config: GenerateConfig, registry: NSRegistry): GirModule {
        const ns = repo.repository[0]?.namespace?.[0]

        if (!ns) throw new Error(`Missing namespace in ${repo.repository[0].package[0].$.name}`)

        const modName = ns.$['name']
        const version = ns.$['version']

        // TODO: Hardcoding HarfBuzz here leads to issues when loading...
        // Hardcode harfbuzz version for now...
        // if (modName === 'HarfBuzz' && version === '0.0') {
        //     version = '2.0'
        // }

        const options: LoadOptions = {
            loadDocs: !config.noComments,
            propertyCase: 'both',
            environment: 'gjs',
            verbose: config.verbose,
        }

        if (!modName) {
            throw new Error('Invalid GIR file: no namespace name specified.')
        }

        if (!version) {
            throw new Error('Invalid GIR file: no version name specified.')
        }

        const c_prefix = ns.$?.['c:symbol-prefixes']?.split(',') ?? []

        if (options.verbose) {
            console.debug(`Parsing ${modName}...`)
        }

        const building = new GirModule(repo.repository[0], modName, version, c_prefix, config)
        building.parent = registry
        // Set the namespace object here to prevent re-parsing the namespace if
        // another namespace imports it.
        registry.mapping.set(modName, version, building)

        const includes = repo.repository[0].include || []

        includes
            .map((i) => [i.$.name, i.$.version] as const)
            .forEach(([name, version]) => {
                if (version) {
                    if (options.verbose) {
                        console.debug(`Adding dependency ${name} ${version}...`)
                    }

                    building.default_imports.set(name, version)
                }
            })

        const importConflicts = (el: IntrospectedConstant | IntrospectedBaseClass | IntrospectedFunction) => {
            return !building.hasImport(el.name)
        }

        if (ns.enumeration) {
            // Get the requested enums
            ns.enumeration
                ?.map((enumeration) => {
                    if (enumeration.$['glib:error-domain']) {
                        return IntrospectedError.fromXML(enumeration, building, options)
                    } else {
                        return IntrospectedEnum.fromXML(enumeration, building, options)
                    }
                })
                .forEach((c) => building.members.set(c.name, c))
        }

        // Constants
        if (ns.constant) {
            ns.constant
                ?.filter(isIntrospectable)
                .map((constant) => IntrospectedConstant.fromXML(constant, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        // Get the requested functions
        if (ns.function) {
            ns.function
                ?.filter(isIntrospectable)
                .map((func) => IntrospectedFunction.fromXML(func, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns.callback) {
            ns.callback
                ?.filter(isIntrospectable)
                .map((callback) => IntrospectedCallback.fromXML(callback, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns['glib:boxed']) {
            ns['glib:boxed']
                ?.filter(isIntrospectable)
                .map(
                    (boxed) =>
                        new IntrospectedAlias({
                            name: boxed.$['glib:name'],
                            namespace: building,
                            type: new NullableType(ObjectType),
                        }),
                )
                .forEach((c) => building.members.set(c.name, c))
        }

        // Bitfield is a type of enum
        if (ns.bitfield) {
            ns.bitfield
                ?.filter(isIntrospectable)
                .map((field) => IntrospectedEnum.fromXML(field, building, options, true))
                .forEach((c) => building.members.set(c.name, c))
        }

        // The `enum_constants` map maps the C identifiers (GTK_BUTTON_TYPE_Y)
        // to the name of the enum (Button) to resolve references (Gtk.Button.Y)
        Array.from(building.members.values())
            .filter((m): m is IntrospectedEnum => m instanceof IntrospectedEnum)
            .forEach((m) => {
                m.members.forEach((member) => {
                    building.enum_constants.set(member.c_identifier, [m.name, member.name] as const)
                })
            })

        // Get the requested classes
        if (ns.class) {
            ns.class
                ?.filter(isIntrospectable)
                .map((klass) => IntrospectedClass.fromXML(klass, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns.record) {
            ns.record
                ?.filter(isIntrospectable)
                .map((record) => IntrospectedRecord.fromXML(record, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns.union) {
            ns.union
                ?.filter(isIntrospectable)
                .map((union) => IntrospectedRecord.fromXML(union, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns.interface) {
            ns.interface
                ?.map((inter) => IntrospectedInterface.fromXML(inter, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns.alias) {
            type NamedType = GirType & { $: { name: string } }

            ns.alias
                ?.filter(isIntrospectable)
                // Avoid attempting to alias non-introspectable symbols.
                .map((b) => {
                    b.type = b.type
                        ?.filter((t): t is NamedType => !!(t && t.$.name))
                        .map((t) => {
                            if (
                                t.$.name &&
                                !building.hasSymbol(t.$.name) &&
                                !isPrimitiveType(t.$.name) &&
                                !t.$.name.includes('.')
                            ) {
                                return { $: { name: 'unknown', 'c:type': 'unknown' } } as GirType
                            }

                            return t
                        })

                    return b
                })
                .map((alias) => IntrospectedAlias.fromXML(alias, building, options))
                .filter((alias): alias is IntrospectedAlias => alias != null)
                .forEach((c) => building.members.set(c.name, c))
        }

        building.namespace = building.ns.name
        building.version = building.ns.version
        building.packageName = `${building.namespace}-${building.version}`
        building.libraryVersion = new LibraryVersion(ns.constant, building.version)
        building.transformation = new Transformation(config)

        building.log = new Logger(config.environment, config.verbose, building.packageName || 'GirModule')
        building.conflictResolver = new ConflictResolver(config.environment, config.verbose)
        building.inject = new Injector(building.config.environment)
        building.importNamespace = building.transformation.transformModuleNamespaceName(building.packageName)
        building.importName = building.transformation.transformImportName(building.packageName)
        building.symTable = new SymTable(building.config, building.packageName, building.namespace)

        return building
    }

    /**
     * Start processing the typescript data
     */
    public start(girModules: GirModule[]) {
        // GObject and Gio are following the version of GLib
        if (this.namespace === 'GObject' || this.namespace === 'Gio') {
            const glibModule = girModules.find((girModule) => girModule.namespace === 'GLib')
            if (glibModule) {
                this.libraryVersion = glibModule.libraryVersion
            }
        }
    }
}

export const isIntrospectable = (e: { $?: GirInfoAttrs }) =>
    !e || !e.$ || !e.$.introspectable || e.$.introspectable === '1'
export const isDeprecated = (e: { $: GirInfoAttrs }) => e && e.$ && e.$.deprecated === '1'
export const deprecatedVersion = (e: { $: GirInfoAttrs }) => e?.$?.['deprecated-version']
export const introducedVersion = (e: { $: GirInfoAttrs }) => e?.$?.version

export function promisifyNamespaceFunctions(namespace: GirModule) {
    return namespace.members.forEach((node) => {
        if (!(node instanceof IntrospectedFunction)) return

        if (node.parameters.length < 1) return

        const last_param = node.parameters[node.parameters.length - 1]

        if (!last_param) return

        const last_param_unwrapped = last_param.type.unwrap()

        if (!(last_param_unwrapped instanceof ClosureType)) return

        const internal = last_param_unwrapped.type

        if (internal instanceof TypeIdentifier && internal.is('Gio', 'AsyncReadyCallback')) {
            const async_res = [
                ...Array.from(namespace.members.values()).filter(
                    (m): m is IntrospectedFunction => m instanceof IntrospectedFunction,
                ),
            ].find((m) => m.name === `${node.name.replace(/_async$/, '')}_finish` || m.name === `${node.name}_finish`)

            if (async_res) {
                const async_parameters = node.parameters.slice(0, -1).map((p) => p.copy())
                const sync_parameters = node.parameters.map((p) => p.copy({ isOptional: false }))
                const output_parameters = async_res.output_parameters

                let async_return = new PromiseType(async_res.return())

                if (output_parameters.length > 0) {
                    const raw_return = async_res.return()
                    if (raw_return.equals(VoidType) || raw_return.equals(BooleanType)) {
                        const [output_type, ...output_types] = output_parameters.map((op) => op.type)
                        async_return = new PromiseType(new TupleType(output_type, ...output_types))
                    } else {
                        const [...output_types] = output_parameters.map((op) => op.type)
                        async_return = new PromiseType(new TupleType(raw_return, ...output_types))
                    }
                }

                namespace.members.set(node.name, [
                    node.copy({
                        parameters: async_parameters,
                        return_type: async_return,
                    }),
                    node.copy({
                        parameters: sync_parameters,
                    }),
                    node.copy({
                        return_type: new BinaryType(async_return, node.return()),
                    }),
                ])
            }
        }
    })
}
