// TODO move this class into a web-worker? https://www.npmjs.com/package/web-worker

import {
    Transformation,
    FULL_TYPE_MAP,
    PRIMITIVE_TYPE_MAP,
    ARRAY_TYPE_MAP,
    IGNORE_GIR_TYPE_TS_DOC_TYPES,
} from './transformation.js'
import { STATIC_NAME_ALREADY_EXISTS, MAX_CLASS_PARENT_DEPTH } from './constants.js'
import { Logger } from './logger.js'
import { Injector } from './injection/injector.js'
import { GirFactory } from './gir-factory.js'
import { ConflictResolver } from './conflict-resolver.js'
import { DependencyManager } from './dependency-manager.js'
import {
    NO_TSDATA,
    WARN_NOT_FOUND_TYPE,
    WARN_CONSTANT_ALREADY_EXPORTED,
    WARN_DUPLICATE_SYMBOL,
    WARN_DUPLICATE_PARAMETER,
    WARN_DUPLICATE_ENUM_IDENTIFIER,
} from './messages.js'
import { isEqual, find, clone, girBool, removeNamespace, addNamespace, girElementIsIntrospectable } from './utils.js'
import { SymTable } from './symtable.js'
import { LibraryVersion } from './library-version.js'

import { GirDirection } from './types/index.js'
import type {
    Dependency,
    GirRepository,
    GirNamespace,
    GirAliasElement,
    GirEnumElement,
    GirMemberElement,
    GirFunctionElement,
    GirClassElement,
    GirArrayType,
    GirType,
    GirCallableParams,
    GirCallableParamElement,
    GirVirtualMethodElement,
    GirSignalElement,
    GirCallableReturn,
    GirRecordElement,
    GirCallbackElement,
    GirConstantElement,
    GirBitfieldElement,
    GirFieldElement,
    GirMethodElement,
    GirPropertyElement,
    GirAnyElement,
    GirUnionElement,
    GirInstanceParameter,
    GirInterfaceElement,
    GirConstructorElement,
    GirDocElement,
    TypeGirVariable,
    TypeGirClass,
    TypeGirEnumerationMember,
    LocalNameCheck,
    LocalNameType,
    LocalName,
    LocalNames,
    TsDoc,
    TsDocTag,
    TsClass,
    TsMethod,
    TsFunction,
    TsProperty,
    TsVar,
    TsParameter,
    TsInstanceParameter,
    TsCallbackInterface,
    TsMember,
    TsEnum,
    TsAlias,
    TsType,
    TsGenericParameter,
    TsCallback,
    InheritanceTable,
    ParsedGir,
    GenerateConfig,
    ClassParent,
    InjectionParameter,
    TsSignal,
    PromisifyFunc,
} from './types/index.js'

export class GirModule {
    /**
     * Array of all gir modules
     */
    static allGirModules: GirModule[] = []
    /**
     * E.g. 'Gtk'
     */
    namespace: string
    /**
     * E.g. '4.0'
     */
    version = '0.0'
    /**
     * E.g. 'Gtk-4.0'
     */
    packageName: string
    /**
     * E.g. 'Gtk40'
     * Is used in the generated index.d.ts, for example: `import * as Gtk40 from "./Gtk-4.0.js";`
     */
    importNamespace: string

    importName: string

    /**
     * The version of the library as an object.
     * E.g. `{ major: 4, minor: 0, patch: 0 }` or as string `4.0.0`'
     */
    libraryVersion: LibraryVersion

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

    repo: GirRepository
    ns: GirNamespace = { $: { name: '', version: '0.0' } }
    /**
     * Used to find namespaces that are used in other modules
     */
    symTable: SymTable

    transformation: Transformation

    girFactory = new GirFactory()

    dependencyManager: DependencyManager

    conflictResolver: ConflictResolver

    log: Logger

    inject: Injector

    extends?: string

    /**
     * To prevent constants from being exported twice, the names already exported are saved here for comparison.
     * Please note: Such a case is only known for Zeitgeist-2.0 with the constant "ATTACHMENT"
     */
    constNames: { [varName: string]: GirConstantElement } = {}

    constructor(xml: ParsedGir, private readonly config: GenerateConfig) {
        this.repo = xml.repository

        if (!this.repo.namespace || !this.repo.namespace.length) {
            throw new Error(`Namespace not found!`)
        }

        this.dependencyManager = DependencyManager.getInstance(this.config)
        this.dependencies = this.dependencyManager.fromGirIncludes(this.repo.include || [])
        this.ns = this.repo.namespace[0]
        this.namespace = this.ns.$.name
        this.version = this.ns.$.version
        this.packageName = `${this.namespace}-${this.version}`
        this.libraryVersion = new LibraryVersion(this.ns.constant, this.version)
        this.transformation = new Transformation(config)
        this.log = new Logger(config.environment, config.verbose, this.packageName || 'GirModule')
        this.conflictResolver = new ConflictResolver(config.environment, config.verbose)
        this.inject = new Injector(this.config.environment)
        this.importNamespace = this.transformation.transformModuleNamespaceName(this.packageName)
        this.importName = this.transformation.transformImportName(this.packageName)
        this.symTable = new SymTable(this.config, this.packageName, this.namespace)
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
            let text = girDoc.doc?.[0]?._ || ''
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

    private getTsDocReturnTags(
        girElement?:
            | GirCallbackElement
            | GirConstructorElement
            | GirFunctionElement
            | GirMethodElement
            | GirSignalElement
            | GirVirtualMethodElement,
    ): TsDocTag[] {
        const girReturnValue = girElement?.['return-value']?.[0]
        if (!girReturnValue || !girReturnValue.doc?.[0]?._) {
            return []
        }
        const returnTag: TsDocTag = {
            tagName: 'returns',
            paramName: '',
            text: this.transformation.transformGirDocTagText(girReturnValue.doc[0]._),
        }

        return [returnTag]
    }

    private getTsDocInParamTags(inParams?: GirCallableParamElement[]): TsDocTag[] {
        const tags: TsDocTag[] = []
        if (!inParams?.length) {
            return tags
        }

        for (const inParam of inParams) {
            if (!inParam._tsData) {
                throw new Error(NO_TSDATA('getTsDocInParamTags'))
            }
            if (!inParam._tsData?.doc) {
                inParam._tsData.doc = this.getTsDoc(inParam)
            }
            if (inParam._tsData?.name) {
                tags.push({
                    paramName: inParam._tsData.name,
                    tagName: 'param',
                    text: inParam._tsData.doc.text
                        ? this.transformation.transformGirDocTagText(inParam._tsData.doc.text)
                        : '',
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
     * Functions and methods of a class
     */
    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs:
            | GirMethodElement[]
            | GirFunctionElement[]
            | GirConstructorElement[]
            | GirVirtualMethodElement[]
            | GirSignalElement[],
    ): void {
        if (Array.isArray(girFuncs))
            for (const girFunc of girFuncs) {
                if (girFunc?.$?.name) {
                    // girFunc._girType = girType
                    // girFunc._tsType = tsType
                    girFunc._class = girClass
                    const nsName = girClass ? girClass._fullSymName : this.namespace
                    if (nsName) girFunc._fullSymName = `${nsName}.${girFunc.$.name}`
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

    private annotateFields(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girVars: GirPropertyElement[],
    ): void

    private annotateFields(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girVars: GirFieldElement[],
    ): void

    /**
     * Fields are variables which are part of a class
     * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#fields
     */
    private annotateFields(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girVars: GirPropertyElement[] | GirFieldElement[],
    ): void {
        for (const girVar of girVars) {
            const nsName = girClass ? girClass._fullSymName : this.namespace
            girVar._module = this
            if (girClass) {
                girVar._class = girClass
            }

            if (girVar.$ && girVar.$.name && nsName) {
                girVar._fullSymName = `${nsName}.${girVar.$.name}`
            }
        }
    }

    private annotateClass(girClass: GirClassElement, girTypeName: 'class'): void
    private annotateClass(girClass: GirRecordElement, girTypeName: 'record'): void
    private annotateClass(girClass: GirInterfaceElement, girTypeName: 'interface'): void

    private annotateClass(girClass: GirClassElement | GirRecordElement | GirInterfaceElement) {
        girClass._module = this
        girClass._fullSymName = `${this.namespace}.${girClass.$.name}`

        const constructors = Array.isArray(girClass.constructor) ? girClass.constructor : []
        const signals = ((girClass as GirClassElement | GirInterfaceElement).signal ||
            girClass['glib:signal'] ||
            []) as GirSignalElement[]
        const functions = girClass.function || []
        const methods = girClass.method || []
        const vMethods = (girClass as GirClassElement)['virtual-method'] || new Array<GirVirtualMethodElement>()
        const properties = girClass.property
        const fields = girClass.field

        this.annotateMethods(girClass, constructors)
        this.annotateMethods(girClass, functions)
        this.annotateMethods(girClass, methods)
        this.annotateMethods(girClass, vMethods)
        this.annotateMethods(girClass, signals)
        if (properties) this.annotateFields(girClass, properties)
        if (fields) this.annotateFields(girClass, fields)
    }

    /**
     * Annotates the custom `_module`, `_fullSymName` and `_girType` properties.
     * Also registers the element on the `symTable`.
     * @param girElements
     * @param girType
     */
    private annotateAndRegisterGirElement(girElements: GirAnyElement[]): void {
        for (const girElement of girElements) {
            if (girElement?.$ && girElement.$.name) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
                if (!girElementIsIntrospectable(girElement as any)) continue

                girElement._module = this
                girElement._fullSymName = `${this.namespace}.${girElement.$.name}`
                if (this.symTable.get(this.allDependencies, girElement._fullSymName)) {
                    this.log.warn(WARN_DUPLICATE_SYMBOL(girElement._fullSymName))
                }

                this.symTable.set(this.allDependencies, girElement._fullSymName, girElement)
            }
        }
    }

    /**
     * TODO: find better name for this method
     * @param girVar
     * @param fullTypeName
     * @returns e.g.
     * ```ts
     * {
     *      namespace: "Gtk",
     *      resValue: "Gtk.Widget"
     * }
     *
     */
    private fullTypeLookup(
        girVar:
            | GirCallableParamElement
            | GirCallableReturn
            | GirFieldElement
            | GirAliasElement
            | GirFieldElement
            | GirPropertyElement
            | GirConstantElement,
        fullTypeName: string | null,
    ) {
        let resValue = ''
        let namespace = ''

        if (!fullTypeName) {
            return {
                value: resValue,
                fullTypeName,
                namespace,
            }
        }

        // Fully qualify our type name
        if (!fullTypeName.includes('.')) {
            let tryFullTypeName = ''

            if (!resValue && girVar._module && girVar._module !== this) {
                tryFullTypeName = `${girVar._module.namespace}.${fullTypeName}`
                resValue = this.fullTypeLookupWithNamespace(tryFullTypeName).value
                if (resValue) {
                    fullTypeName = tryFullTypeName
                    namespace = girVar._module.namespace
                }
            }

            if (!resValue) {
                tryFullTypeName = `${this.namespace}.${fullTypeName}`
                resValue = this.fullTypeLookupWithNamespace(tryFullTypeName).value
                if (resValue) {
                    fullTypeName = tryFullTypeName
                    namespace = this.namespace
                }
            }

            const girClass = (
                girVar as
                    | GirCallableParamElement
                    | GirCallableReturn
                    | GirFieldElement
                    | GirAliasElement
                    | GirFieldElement
                    | GirPropertyElement
            )._class as GirClassElement | undefined

            if (!resValue && girClass?._module?.namespace && girClass._module !== this) {
                tryFullTypeName = `${girClass._module.namespace}.${fullTypeName}`
                resValue = this.fullTypeLookupWithNamespace(tryFullTypeName).value
                if (resValue) {
                    fullTypeName = tryFullTypeName
                    namespace = girClass?._module?.namespace
                }
            }
        }

        if (!resValue && fullTypeName) {
            resValue = this.fullTypeLookupWithNamespace(fullTypeName).value
        }

        return {
            value: resValue,
            namespace,
        }
    }

    /**
     * this method needs to be refactored, an array can also be an array of an array for example
     * @param girVar
     * @returns
     */
    getArrayData(
        girVar:
            | GirCallableReturn
            | GirAliasElement
            | GirFieldElement
            | GirCallableParamElement
            | GirPropertyElement
            | GirConstantElement,
    ) {
        let arrayType: GirType | null = null
        let arrCType: string | undefined
        let isArray = false
        let overrideTypeName: string | undefined
        let typeArray: GirType[] | undefined

        let collection: GirArrayType[] | GirType[] | undefined

        if ((girVar as GirCallableReturn | GirFieldElement).array) {
            collection = (girVar as GirCallableReturn | GirFieldElement).array
        } else if (/^GLib.S?List$/.test(girVar.type?.[0].$?.name || '')) {
            // This converts GLib.List<T> / GLib.SList<T> to T[]
            collection = girVar.type
        }

        if (collection && collection.length > 0) {
            isArray = true
            typeArray = collection[0].type
            if (collection[0].$) {
                const ea = collection[0].$
                arrCType = ea['c:type']
            }
        }

        if (typeArray && typeArray?.length > 0) {
            arrayType = typeArray[0]
        }

        if (isArray && arrayType?.$?.name && ARRAY_TYPE_MAP[arrayType.$.name]) {
            isArray = false
            overrideTypeName = ARRAY_TYPE_MAP[arrayType.$.name] as string | undefined
        }

        return {
            arrCType,
            arrayType,
            isArray,
            overrideTypeName,
        }
    }

    /**
     * Get the typescript type of a GirElement like a `GirPropertyElement` or `GirCallableReturn`
     * @param girVar
     */
    private getTsType(
        girVar:
            | GirCallableReturn
            | GirAliasElement
            | GirFieldElement
            | GirCallableParamElement
            | GirPropertyElement
            | GirConstantElement,
        tsClass: TsClass | null,
        defaults: Partial<TsType> = {},
    ) {
        let type: GirType | undefined = girVar.type?.[0]
        let fullTypeName: string | null = null
        let typeName = defaults.type || ''
        let isFunction = defaults.isFunction || false
        let isCallback = defaults.isCallback || false
        const nullable = this.typeIsNullable(girVar) || defaults.nullable || false
        const optional = this.typeIsOptional(girVar) || defaults.optional || false

        const girCallbacks: GirCallbackElement[] = []
        const array = this.getArrayData(girVar)

        if (array.overrideTypeName) {
            typeName = array.overrideTypeName
        }

        if (array.arrayType) {
            type = array.arrayType
        }

        const cType = type?.$ ? type.$['c:type'] : array.arrCType
        fullTypeName = type?.$?.name || null
        const callbacks = (girVar as GirFieldElement).callback

        if (!typeName && callbacks?.length) {
            for (const girCallback of callbacks) {
                if (!girElementIsIntrospectable(girCallback)) continue

                if (!girCallback._tsData) {
                    const tsCallback = this.getFunctionTsData(girCallback, 'callback', tsClass, {
                        isStatic: false,
                        isArrowType: true,
                        isGlobal: false,
                        isVirtual: false,
                        returnType: null,
                        generics: [],
                    })

                    if (!tsCallback) continue

                    girCallback._tsData = {
                        ...tsCallback,
                        girTypeName: 'callback',
                        tsTypeName: this.girFactory.girTypeNameToTsTypeName('callback', false),
                        tsCallbackInterface: this.getCallbackInterfaceTsData(girCallback),
                        doc: this.getTsDoc(girCallback),
                        overloads: [],
                    }
                }

                if (girCallback._tsData) {
                    girCallbacks.push(girCallback)
                    isFunction = true
                    isCallback = true
                }
            }
        }

        if (!isFunction) {
            const res = this.fullTypeLookup(girVar, fullTypeName)
            if (res.value) {
                typeName = res.value
                fullTypeName = typeName
            }
        }

        if (!typeName && type?.$?.name && PRIMITIVE_TYPE_MAP[type.$.name]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            typeName = PRIMITIVE_TYPE_MAP[type.$.name]
        }

        if (cType) {
            const parsedCType = PRIMITIVE_TYPE_MAP[cType] as string | undefined
            if (!typeName && parsedCType) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                typeName = parsedCType
            }
        }

        if (!typeName) {
            typeName = 'any'
            const logName = cType || fullTypeName || girVar.$.name || ''
            this.log.warn(WARN_NOT_FOUND_TYPE(logName))
        }

        // TODO: transform array to type with generics?
        const tsType = this.girFactory.newTsType({
            ...defaults,
            type: typeName,
            optional,
            nullable,
            callbacks: girCallbacks,
            isArray: array.isArray,
            isFunction,
            isCallback,
        })

        return tsType
    }

    /**
     *
     * @param girFunc
     * @returns
     */
    private getReturnType(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirCallbackElement
            | GirSignalElement
            | GirVirtualMethodElement,
        tsClass: TsClass | null,
        generics: TsGenericParameter[] = [],
    ) {
        let outArrayLengthIndex = -1

        if (girFunc['return-value'] && girFunc['return-value'].length > 1) {
            throw new Error('Several return values found!')
        }

        // There are no multiple return values, so we always use index 0
        const girVar = girFunc['return-value']?.[0] || null

        // We still use an array to allow multiple return values for later
        const returnTypes: TsType[] = []

        if (girVar) {
            returnTypes.push(this.getTsType(girVar, tsClass, { generics }))

            outArrayLengthIndex = girVar.array && girVar.array[0].$?.length ? Number(girVar.array[0].$.length) : -1
        } else {
            returnTypes.push(this.girFactory.newTsType({ type: 'void', generics }))
        }

        const retTypeIsVoid = returnTypes.length === 1 && returnTypes[0].type === 'void'

        return { returnTypes, outArrayLengthIndex, retTypeIsVoid }
    }

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

    private setParameterTsData(
        girParam: GirCallableParamElement,
        girParams: GirCallableParamElement[],
        paramNames: string[],
        skip: GirCallableParamElement[],
        parent: TsFunction | TsSignal,
    ) {
        // I think it's safest to force inout params to have the
        // same type for in and out
        const tsType = this.getTsType(girParam, parent.parent)
        // const optDirection = girParam.$.direction

        if (girParam._tsData) {
            // this.log.warn('[setParameterTsData] _tsData already set!')
            return girParam._tsData
        }

        if (tsType.isCallback) {
            throw new Error('Callback type is not implemented here')
        }

        let paramName = this.transformation.transformParameterName(girParam, false)

        if (paramNames.includes(paramName)) {
            this.log.warn(WARN_DUPLICATE_PARAMETER(paramName, girParam._fullSymName))
            paramName += '_'
        }
        paramNames.push(paramName)

        // In Typescript no optional parameters are allowed if the following ones are not optional
        if (tsType.optional) {
            const index = girParams.indexOf(girParam)
            const following = girParams
                .slice(index)
                .filter(() => skip.indexOf(girParam) === -1)
                .filter((p) => p.$.direction !== GirDirection.Out)

            if (following.some((p) => !this.typeIsOptional(p))) {
                tsType.optional = false
            }
        }

        const tsParam: TsParameter = {
            name: paramName,
            type: [tsType],
            isRest: false,
            girTypeName: 'callable-param',
            doc: this.getTsDoc(girParam),
            parent,
        }

        girParam._tsData = tsParam

        // // TODO: remove this, wee need a special solution for Gio.AsyncReadyCallback instead
        girParam = this.inject.toParameterType(girParam)

        return girParam._tsData
    }

    private getInstanceParameterTsData(instanceParameter: GirInstanceParameter): TsInstanceParameter | undefined {
        const typeName = instanceParameter.type?.[0]?.$?.name || undefined
        const rec = typeName ? this.ns.record?.find((r) => r.$.name == typeName) : undefined
        const structFor = rec?.$['glib:is-gtype-struct-for']
        if (structFor && instanceParameter.$.name) {
            // TODO: Should use of a constructor, and even of an instance, be discouraged?
            return {
                name: instanceParameter.$.name,
                structFor,
            }
        }
        return undefined
    }

    private setParametersTsData(
        outArrayLengthIndex: number,
        girParams: GirCallableParams[] = [],
        parent: TsFunction | TsCallback,
    ) {
        const outParams: GirCallableParamElement[] = []
        const inParams: GirCallableParamElement[] = []
        const paramNames: string[] = []
        const instanceParameters: GirInstanceParameter[] = []

        if (girParams && girParams.length > 0) {
            for (const girParam of girParams) {
                const params = girParam?.parameter || []

                // Instance parameter needs to be exposed for class methods (see comment above getClassMethods())
                const instanceParameter = girParams[0]['instance-parameter']?.[0]
                if (instanceParameter) {
                    instanceParameter._tsData = this.getInstanceParameterTsData(instanceParameter)
                    if (instanceParameter._tsData) {
                        instanceParameters.push(instanceParameter)
                    }
                }
                if (params.length) {
                    const skip = outArrayLengthIndex === -1 ? [] : [params[outArrayLengthIndex]]

                    this.processParams(params, skip, (girVar) => this.arrayLengthIndexLookup(girVar))
                    this.processParams(params, skip, (girVar) => this.closureDataIndexLookup(girVar))
                    this.processParams(params, skip, (girVar) => this.destroyDataIndexLookup(girVar))

                    for (const param of params) {
                        if (skip.includes(param)) {
                            continue
                        }

                        param._tsData = this.setParameterTsData(param, params, paramNames, skip, parent)

                        const optDirection = param.$.direction
                        if (
                            optDirection === GirDirection.Out ||
                            optDirection === GirDirection.Inout ||
                            optDirection === GirDirection.InOut
                        ) {
                            outParams.push(param)
                            if (optDirection === GirDirection.Out) continue
                        }
                        inParams.push(param)
                    }
                }
            }
        }

        return { outParams, paramNames, inParams, instanceParameters }
    }

    private getVariableTsData(
        girVar: GirPropertyElement,
        girTypeName: 'property',
        tsTypeName: 'property' | 'constructor-property' | 'static-property',
        tsClass: TsClass | null,
        optional: boolean,
        nullable: boolean,
        allowQuotes: boolean,
    ): GirPropertyElement['_tsData']

    private getVariableTsData(
        girVar: GirConstantElement,
        girTypeName: 'constant',
        tsTypeName: 'constant',
        tsClass: TsClass | null,
        optional: boolean,
        nullable: boolean,
        allowQuotes: boolean,
    ): GirConstantElement['_tsData']

    private getVariableTsData(
        girVar: GirFieldElement,
        girTypeName: 'field',
        tsTypeName: 'property' | 'static-property',
        tsClass: TsClass | null,
        optional: boolean,
        nullable: boolean,
        allowQuotes: boolean,
    ): GirFieldElement['_tsData']

    private getVariableTsData(
        girVar: GirPropertyElement | GirFieldElement | GirConstantElement,
        girTypeName: 'property' | TypeGirVariable | 'field',
        tsTypeName: 'constant' | 'property' | 'constructor-property' | 'static-property',
        tsClass: TsClass | null,
        optional = false,
        nullable = false,
        allowQuotes = false,
        generics: TsGenericParameter[] = [],
    ) {
        if (!girVar.$.name) return undefined
        if (
            !girVar ||
            !girVar.$ ||
            !girBool(girVar.$.introspectable, true) ||
            girBool((girVar as GirFieldElement).$.private)
        ) {
            return undefined
        }

        if (girVar._tsData) {
            // this.log.warn('[getVariableTsData] _tsData already set!')
            return girVar._tsData
        }

        let name = girVar.$.name

        switch (girTypeName) {
            case 'property':
                name = this.transformation.transformPropertyName(girVar.$.name, allowQuotes)
                break
            case 'constant':
                name = this.transformation.transformConstantName(girVar.$.name, allowQuotes)
                break
            case 'field':
                name = this.transformation.transformFieldName(girVar.$.name, allowQuotes)
                break
        }
        // Use the out type because it can be a union which isn't appropriate
        // for a property
        const tsType = this.getTsType(girVar, tsClass, { optional, nullable, generics })

        const tsData: TsProperty | TsVar = {
            name,
            type: [tsType],
            isInjected: false,
            girTypeName,
            tsTypeName,
            doc: this.getTsDoc(girVar),
        }

        tsData.doc.tags.push(...this.getTsDocGirElementTags(tsData.tsTypeName, tsData.girTypeName))

        return tsData
    }

    private getPropertyTsData(
        girProp: GirPropertyElement,
        girTypeName: 'property',
        tsTypeName: 'property' | 'constructor-property' | 'static-property',
        tsClass: TsClass,
        construct?: boolean,
        optional?: boolean,
        nullable?: boolean,
        indentCount?: number,
    ): TsProperty | undefined

    private getPropertyTsData(
        girProp: GirFieldElement,
        girTypeName: 'field',
        tsTypeName: 'property' | 'static-property',
        tsClass: TsClass,
        construct?: boolean,
        optional?: boolean,
        nullable?: boolean,
        indentCount?: number,
    ): TsVar | undefined

    /**
     *
     * @param girProp
     * @param girTypeName
     * @param tsTypeName
     * @param construct construct means include the property even if it's construct-only,
     * @param optional optional means if it's construct-only it will also be marked optional (?)
     * @param nullable
     * @returns
     */
    private getPropertyTsData(
        girProp: GirPropertyElement | GirFieldElement,
        girTypeName: 'property' | 'field',
        tsTypeName: 'constructor-property' | 'property' | 'static-property',
        tsClass: TsClass,
        construct = false,
        optional?: boolean,
        nullable?: boolean,
    ): TsProperty | undefined {
        if (!girBool(girProp.$.writable) && construct) return undefined
        if (girBool((girProp as GirFieldElement).$.private)) return undefined

        if (girProp._tsData) {
            // this.log.warn('[getPropertyTsData] _tsData already set!')
            return girProp._tsData as TsProperty
        }

        if (optional === undefined) optional = this.typeIsOptional(girProp)
        if (nullable === undefined) nullable = this.typeIsNullable(girProp)

        const readonly =
            !girBool(girProp.$.writable) || (!construct && girBool((girProp as GirPropertyElement).$['construct-only']))

        let tsData: TsProperty | undefined

        switch (girTypeName) {
            case 'property':
                tsData = this.getVariableTsData(
                    girProp as GirPropertyElement,
                    girTypeName,
                    tsTypeName,
                    tsClass,
                    construct && optional,
                    construct && nullable,
                    true,
                ) as TsProperty
                break
            case 'field':
                if (tsTypeName !== 'property') {
                    throw new Error(`Wrong tsType: "${tsTypeName}" for girType: "${girTypeName}`)
                }
                tsData = this.getVariableTsData(
                    girProp as GirFieldElement,
                    girTypeName,
                    tsTypeName,
                    tsClass,
                    construct && optional,
                    construct && nullable,
                    true,
                ) as TsProperty
                break
            default:
                throw new Error(`Unknown property type: ${girTypeName as string}`)
        }

        if (!tsData?.name) {
            return undefined
        }

        tsData = {
            ...tsData,
            readonly,
        }
        return tsData
    }

    /**
     *
     * @param girFunc
     * @param prefix E.g. vfunc
     * @param overrideReturnType
     * @param isArrowType
     * @param indentCount
     */
    private getFunctionTsData(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirCallbackElement
            | GirVirtualMethodElement,
        girTypeName: 'virtual' | 'method' | 'constructor' | 'function' | 'callback' | 'static-function',
        tsClass: TsClass | null,
        overwrite: {
            isStatic: boolean
            isArrowType: boolean
            isGlobal: boolean
            isVirtual: boolean
            isInjected?: boolean
            returnType: string | null
            generics: TsGenericParameter[]
        },
    ): TsFunction | undefined {
        if (!girFunc || !girFunc.$ || !girBool(girFunc.$.introspectable, true) || girFunc.$['shadowed-by']) {
            return undefined
        }

        let hasUnresolvedConflict: boolean | undefined

        // TODO: Fix that we overwrite tsData every time seems wrong to me, but if I just return the already defined `_tsData` leads to problems with the overload methods
        if (girFunc._tsData) {
            hasUnresolvedConflict = girFunc._tsData?.hasUnresolvedConflict // WORKAROUND do not overwrite conflicts
        }

        let name = girFunc.$.name
        const { returnTypes, outArrayLengthIndex, retTypeIsVoid } = this.getReturnType(girFunc, tsClass)

        const shadows = (girFunc as GirMethodElement).$.shadows

        if (shadows) {
            name = shadows
        }

        // Overwrites
        overwrite.isStatic = overwrite.isStatic || girTypeName === 'static-function' || girTypeName === 'constructor'
        overwrite.isGlobal = overwrite.isGlobal || girTypeName === 'function'
        overwrite.isVirtual = overwrite.isVirtual || girTypeName === 'virtual'
        overwrite.isInjected = overwrite.isInjected || false

        // Function name transformation by environment
        name = this.transformation.transformFunctionName(name, overwrite.isVirtual)

        const tsData: TsFunction = {
            isArrowType: overwrite.isArrowType,
            isStatic: overwrite.isStatic,
            isGlobal: overwrite.isGlobal,
            isVirtual: overwrite.isVirtual,
            isInjected: overwrite.isInjected,
            returnTypes,
            retTypeIsVoid,
            name,
            overrideReturnType: overwrite.returnType || undefined,
            inParams: [],
            outParams: [],
            instanceParameters: [],
            generics: overwrite.generics,
            hasUnresolvedConflict,
            girTypeName,
            tsTypeName: this.girFactory.girTypeNameToTsTypeName(girTypeName, overwrite.isStatic),
            doc: this.getTsDoc(girFunc as GirDocElement),
            overloads: [],
            parent: tsClass,
        }

        const { inParams, outParams, instanceParameters } = this.setParametersTsData(
            outArrayLengthIndex,
            girFunc.parameters,
            tsData,
        )

        tsData.inParams.push(...inParams)
        tsData.outParams.push(...outParams)
        tsData.instanceParameters.push(...instanceParameters)

        tsData.doc.tags.push(...this.getTsDocGirElementTags(tsData.tsTypeName, tsData.girTypeName))
        tsData.doc.tags.push(...this.getTsDocInParamTags(tsData?.inParams))
        tsData.doc.tags.push(...this.getTsDocReturnTags(girFunc))

        return tsData
    }

    overloadPromisifiedFunctions(girFunctions: GirFunctionElement[]): void {
        if (!this.config.promisify) return

        const promisifyAsyncReturn = ['Gio.AsyncReadyCallback', 'AsyncReadyCallback']
        const promisifyFuncMap = {} as { [name: string]: PromisifyFunc }

        // Find the functions that can be promisified
        for (const girFunction of girFunctions) {
            const tsFunction = girFunction._tsData
            if (!tsFunction) continue

            // Check if function name satisfies async,finish scheme
            const isAsync = tsFunction.name.endsWith('_async') || tsFunction.name.endsWith('_begin')
            const isFinish = tsFunction.name.endsWith('_finish')
            if (!isAsync && !isFinish) continue

            // Handle async functions
            if (isAsync) {
                if (tsFunction.inParams.length === 0) continue
                const lastParam = tsFunction.inParams[tsFunction.inParams.length - 1]
                if (lastParam.type && lastParam.type.length > 0) {
                    const type = lastParam.type[0].$.name
                    if (type && promisifyAsyncReturn.includes(type)) {
                        if (!(tsFunction.name in promisifyFuncMap)) promisifyFuncMap[tsFunction.name] = {}
                        promisifyFuncMap[tsFunction.name].asyncFn = tsFunction
                    }
                }
            }

            // Handle finish functions
            if (isFinish) {
                if (tsFunction.returnTypes.length === 0) continue
                let name = `${tsFunction.name.replace(/(_finish)$/, '')}_async`
                if (!(name in promisifyFuncMap)) name = `${tsFunction.name.replace(/(_finish)$/, '')}_begin`
                if (!(name in promisifyFuncMap)) promisifyFuncMap[name] = {}
                promisifyFuncMap[name].finishFn = tsFunction
            }
        }

        // Generate TsFunctions for promisify-able functions and add to the array
        for (const [, func] of Object.entries(promisifyFuncMap)) {
            if (!func.asyncFn || !func.finishFn) continue

            const inParams = this.girFactory.newGirCallableParamElements(
                func.asyncFn.inParams.slice(0, -1),
                func.asyncFn,
            )

            const outParams = this.girFactory.newGirCallableParamElements(func.finishFn.outParams, func.asyncFn)

            const returnTypes = this.girFactory.newTsTypes(outParams.length > 0 ? [] : func.finishFn.returnTypes)

            let docReturnText = func.finishFn.doc.tags.find((tag) => tag.tagName === 'returns')?.text || ''
            if (docReturnText) {
                docReturnText = `A Promise of: ${docReturnText}`
            } else {
                docReturnText = `A Promise of the result of {@link ${func.asyncFn.name}}`
            }

            const docText = `Promisified version of {@link ${func.asyncFn.name}}\n\n${func.asyncFn.doc.text}`

            const docTags = func.asyncFn.doc.tags.filter(
                (tag) => tag.paramName !== 'callback' && tag.paramName !== 'returns',
            )

            docTags.push({
                tagName: 'returns',
                text: docReturnText,
                paramName: '',
            })

            const doc = this.girFactory.newTsDoc({
                text: docText,
                tags: docTags,
            })

            const promisifyFn = this.girFactory.newTsFunction(
                {
                    ...func.asyncFn,
                    inParams,
                    outParams,
                    returnTypes,
                    isPromise: true,
                    doc,
                },
                func.asyncFn.parent,
            )

            func.asyncFn.overloads.push(promisifyFn)
        }
    }

    private getCallbackInterfaceTsData(girCallback: GirCallbackElement | GirConstructorElement) {
        if (!girElementIsIntrospectable(girCallback)) return undefined

        const namespace = this.namespace

        const tsDataInterface: TsCallbackInterface = {
            name: `${namespace}.${girCallback.$.name}`,
            generics: [],
        }

        return tsDataInterface
    }

    private setCallbackTsData(girCallback: GirCallbackElement, tsClass: TsClass | null) {
        const tsFunction = this.getFunctionTsData(girCallback, 'callback', tsClass, {
            isStatic: false,
            isArrowType: true,
            isGlobal: false,
            isVirtual: false,
            returnType: null,
            generics: [],
        })
        if (tsFunction) {
            const tsCallback: TsCallback = {
                ...tsFunction,
                girTypeName: 'callback',
                tsTypeName: this.girFactory.girTypeNameToTsTypeName('callback', false),
                tsCallbackInterface: this.getCallbackInterfaceTsData(girCallback),
                overloads: [],
            }
            girCallback._tsData = tsCallback

            this.inject.toCallback(girCallback)
        }
        return girCallback._tsData
    }

    private getSignalCallbackInterfaceTsData(
        girCallback: GirSignalElement,
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girElementIsIntrospectable(girCallback)) return undefined

        if (!girClass._tsData || !girClass._module) {
            throw new Error(NO_TSDATA('getSignalCallbackTsData'))
        }

        const className = girClass._tsData.name
        const signalName = girCallback.$.name
        const signalInterfaceName = this.transformation.transformSignalInterfaceName(signalName)
        const namespace = girClass._module.namespace

        const tsDataInterface: TsCallbackInterface = {
            name: `${namespace}.${className}.${signalInterfaceName}SignalCallback`,
            generics: [],
            overwriteDoc: {
                text: `Signal callback interface for \`${signalName}\``,
                tags: [],
            },
        }

        return tsDataInterface
    }

    private getConstructorFunctionTsData(parentClass: TsClass, girConstructor: GirConstructorElement) {
        if (!girElementIsIntrospectable(girConstructor)) return

        const constructorTypeName = addNamespace(parentClass.name, parentClass.namespace)

        return this.getFunctionTsData(girConstructor, 'constructor', parentClass, {
            isStatic: true,
            isArrowType: false,
            isGlobal: false,
            isVirtual: false,
            returnType: constructorTypeName,
            generics: [],
        })
    }

    private getSignalCallbackTsData(
        girSignalFunc: GirSignalElement,
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) {
            throw new Error(NO_TSDATA('getSignalCallbackTsData'))
        }

        if (girSignalFunc._tsData) {
            return girSignalFunc._tsData
        }

        // Leads to errors here
        // if (!girElementIsIntrospectable(girSignalFunc)) return undefined

        const name = this.transformation.transform('signalName', girSignalFunc.$.name)

        const { returnTypes, outArrayLengthIndex, retTypeIsVoid } = this.getReturnType(girSignalFunc, girClass._tsData)

        if (this.config.environment === 'node') {
            returnTypes[0].type === 'void'
        }

        const tsCallback: TsCallback = {
            name, // TODO: 'callback'?
            returnTypes,
            isArrowType: true,
            isStatic: false,
            isGlobal: false,
            isVirtual: false,
            isInjected: false,
            retTypeIsVoid,
            inParams: [],
            instanceParameters: [],
            outParams: [],
            generics: [],
            girTypeName: 'callback',
            tsTypeName: this.girFactory.girTypeNameToTsTypeName('callback', false),
            doc: this.getTsDoc(girSignalFunc),
            overloads: [],
            parent: girClass._tsData,
        }

        const { inParams, outParams, instanceParameters } = this.setParametersTsData(
            outArrayLengthIndex,
            girSignalFunc.parameters,
            tsCallback,
        )

        if (this.config.environment === 'gjs') {
            inParams.unshift(
                this.girFactory.newGirCallableParamElement(
                    {
                        name: '$obj',
                        type: [
                            {
                                type: girClass._tsData.name,
                            },
                        ],
                    },
                    tsCallback,
                ),
            )
        }

        tsCallback.inParams.push(...inParams)
        tsCallback.outParams.push(...outParams)
        tsCallback.instanceParameters.push(...instanceParameters)

        tsCallback.doc.tags.push(...this.getTsDocGirElementTags(tsCallback.tsTypeName, tsCallback.girTypeName))
        tsCallback.doc.tags.push(...this.getTsDocInParamTags(tsCallback?.inParams))
        tsCallback.doc.tags.push(...this.getTsDocReturnTags(girSignalFunc))

        return tsCallback
    }

    /**
     * Generates signal methods like `connect`, `connect_after` and `emit` on Gjs or `connect`, `on`, `once`, `off` and `emit` an node-gtk
     * for a default gir signal element
     * @param girSignal
     * @returns
     */
    private getClassSignalMethodsTsData(girSignal: GirSignalElement, parentClass: TsClass) {
        if (!girSignal._tsData) {
            throw new Error(NO_TSDATA('getClassSignalMethodsTsData'))
        }

        const inParams = girSignal._tsData.inParams.slice(1).map((inParam) => {
            const injectParam: InjectionParameter = {
                ...inParam._tsData,
                type: inParam._tsData?.type || [],
                name: inParam._tsData?.name || 'unknown',
            }
            return injectParam
        })

        return this.girFactory.newTsSignalMethods(
            girSignal._tsData?.name,
            girSignal._tsData?.tsCallbackInterface?.name,
            inParams,
            parentClass,
            this.config.environment,
            false,
        )
    }

    /**
     * Generates signal methods for the GObject properties of a gir class element
     * @param girClass
     */
    private getClassPropertySignalsMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) {
            throw new Error(NO_TSDATA('getClassPropertySignalsMethods'))
        }

        const tsMethods: TsMethod[] = []

        const propertyNames = this.getClassNonStaticPropertyNames(girClass)
        const namespacePrefix = this.namespace === 'GObject' ? '' : 'GObject.'

        // TODO: Signals: Generate SignalMethods instead of direct types
        for (const propertyName of propertyNames) {
            let callbackType = 'any'
            if (this.config.environment === 'gjs') {
                const objParam = `$obj: ${girClass._tsData.name}`
                // TODO: create arrowType object instead of a pure string type, see Pango-1.0.Pango.FontMapClass.load_font for an example
                callbackType = `((${objParam}, pspec: ${namespacePrefix}ParamSpec) => void)`
            } else if (this.config.environment === 'node') {
                callbackType = `(...args: any[]) => void`
            }
            tsMethods.push(
                ...this.girFactory.newTsSignalMethods(
                    `notify::${propertyName}`,
                    callbackType,
                    [],
                    girClass._tsData,
                    this.config.environment,
                ),
            )
        }

        return tsMethods
    }

    private getGeneralSignalsMethods(parentClass: TsClass) {
        return this.girFactory.newTsSignalMethods(undefined, undefined, [], parentClass, this.config.environment, true)
    }

    private setSignalTsData(
        girSignal: GirSignalElement,
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) {
            throw NO_TSDATA('setSignalTsData')
        }

        if (!girSignal._tsData) {
            girSignal._tsData = {
                ...this.getSignalCallbackTsData(girSignal, girClass),
                tsCallbackInterface: this.getSignalCallbackInterfaceTsData(girSignal, girClass),
                tsMethods: [],
                girTypeName: 'signal',
                tsTypeName: this.girFactory.girTypeNameToTsTypeName('signal', false),
                doc: this.getTsDoc(girSignal),
                overloads: [],
            }

            girSignal._tsData.doc.tags.push(
                ...this.getTsDocGirElementTags(girSignal._tsData.tsTypeName, girSignal._tsData.girTypeName),
            )
            // TODO: this are the callback parameters
            girSignal._tsData.doc.tags.push(...this.getTsDocInParamTags(girSignal._tsData?.inParams))
            girSignal._tsData.doc.tags.push(...this.getTsDocReturnTags(girSignal))

            if (!girSignal._tsData) {
                throw NO_TSDATA('setSignalTsData')
            }

            girSignal._tsData.tsMethods = this.getClassSignalMethodsTsData(girSignal, girClass._tsData)
        }

        return girSignal._tsData
    }

    private fixEnumerationDuplicateIdentifier(girEnum: GirEnumElement | GirBitfieldElement) {
        if (!girElementIsIntrospectable(girEnum)) return girEnum

        if (!girEnum._tsData) {
            throw new Error(NO_TSDATA('fixEnumerationDuplicateIdentifier'))
        }

        if (!girEnum.member?.length) {
            return girEnum
        }

        const memberNames: string[] = []

        for (const girEnumMember of girEnum.member) {
            if (!girEnumMember._tsData) {
                throw new Error(NO_TSDATA('fixEnumerationDuplicateIdentifier'))
            }
            if (memberNames.find((name) => name === girEnumMember._tsData?.name)) {
                const renamed = '_' + girEnumMember._tsData.name
                this.log.warn(WARN_DUPLICATE_ENUM_IDENTIFIER(girEnumMember._tsData.name, renamed))
                girEnumMember._tsData.name = renamed
            }
            memberNames.push(girEnumMember._tsData.name)
        }
        return girEnum
    }

    private getEnumerationMemberTsData(girEnumMember: GirMemberElement, girTypeName: TypeGirEnumerationMember) {
        const memberName = girEnumMember.$.name || girEnumMember.$['glib:nick'] || girEnumMember.$['c:identifier']
        if (!girElementIsIntrospectable(girEnumMember, memberName)) return undefined

        if (girEnumMember._tsData) {
            // this.log.warn('[getEnumerationMemberTsData] _tsData already set!')
            return girEnumMember._tsData
        }

        const name = this.transformation.transformEnumMember(memberName)
        const tsData: TsMember = {
            name,
            girTypeName,
            tsTypeName: this.girFactory.girTypeNameToTsTypeName(girTypeName, false),
            doc: this.getTsDoc(girEnumMember),
        }

        tsData.doc.tags.push(...this.getTsDocGirElementTags(tsData.tsTypeName, tsData.girTypeName))

        return tsData
    }

    private getEnumerationTsData(girEnum: GirEnumElement | GirBitfieldElement, girTypeName: 'bitfield' | 'enum') {
        if (!girElementIsIntrospectable(girEnum)) return undefined

        if (girEnum._tsData) {
            // this.log.warn('[getEnumerationMemberTsData] _tsData already set!')
            return girEnum._tsData
        }

        // E.g. the NetworkManager-1.0 has enum names starting with 80211
        const name = this.transformation.transformEnumName(girEnum)

        const tsData: TsEnum = {
            name,
            girTypeName,
            tsTypeName: this.girFactory.girTypeNameToTsTypeName(girTypeName, false),
            doc: this.getTsDoc(girEnum),
        }

        tsData.doc.tags.push(...this.getTsDocGirElementTags(tsData.tsTypeName, tsData.girTypeName))

        return tsData
    }

    private getAliasTsData(girAlias: GirAliasElement, tsClass: TsClass | null) {
        if (!girElementIsIntrospectable(girAlias)) return undefined

        if (girAlias._tsData) {
            // this.log.warn('[getEnumerationMemberTsData] _tsData already set!')
            return girAlias._tsData
        }

        const { type: typeName } = this.getTsType(girAlias, tsClass)
        const name = girAlias.$.name
        const tsData: TsAlias = {
            name,
            type: typeName,
            girTypeName: 'alias',
            tsTypeName: this.girFactory.girTypeNameToTsTypeName('alias', false),
        }
        return tsData
    }

    private getConstantTsData(girConst: GirConstantElement, tsClass: TsClass | null) {
        if (!girElementIsIntrospectable(girConst)) return undefined

        if (girConst._tsData) {
            // this.log.warn('[getConstantTsData] _tsData already set!')
            return girConst._tsData
        }

        let tsData: TsVar | undefined = this.getVariableTsData(
            girConst,
            'constant',
            'constant',
            tsClass,
            false,
            false,
            false,
        )
        if (tsData?.name) {
            if (!this.constNames[tsData.name]) {
                this.constNames[tsData.name] = girConst
            } else {
                this.log.warn(WARN_CONSTANT_ALREADY_EXPORTED(tsData.name))
                tsData = undefined
            }
        }
        return tsData
    }

    private getClassConstructPropsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        constructPropNames: LocalNames,
    ) {
        const constructProps: GirPropertyElement[] = []
        const girProperties = (girClass as GirClassElement | GirInterfaceElement).property
        if (!girProperties?.length) {
            return constructProps
        }
        for (const girProp of girProperties) {
            if (!girElementIsIntrospectable(girProp) || !girProp.$.name) continue
            // Do not modify the original girProp, create a new one by clone `girProp` to `girConstrProp`
            const girConstrProp = clone(girProp)

            if (!girClass._tsData) continue

            if (!girConstrProp._tsData) {
                girConstrProp._tsData = this.getPropertyTsData(
                    girConstrProp,
                    'property',
                    'constructor-property',
                    girClass._tsData,
                    true,
                    true,
                    true,
                    0,
                )
            }

            if (!girConstrProp._tsData) {
                continue
            }

            const localName = this.checkOrSetLocalName(girConstrProp, constructPropNames, 'property')

            if (!localName?.added) {
                continue
            }

            if (girConstrProp._fullSymName)
                this.symTable.set(this.allDependencies, girConstrProp._fullSymName, girConstrProp)
            constructProps.push(girConstrProp)
        }

        return constructProps
    }

    /**
     * Some class/static methods are defined in a separate record which is not
     * exported, but the methods are available as members of the JS constructor.
     * In gjs one can use an instance of the object, a JS constructor or a GType
     * as the method's instance-parameter.
     * @see https://discourse.gnome.org/t/using-class-methods-like-gtk-widget-class-get-css-name-from-gjs/4001
     * @param girClass
     */
    private getClassRecordMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): GirMethodElement[] {
        const girMethods: GirMethodElement[] = []

        if (!girClass.$.name) return girMethods
        const fName = girClass.$.name + 'Class'
        let rec = this.ns.record?.find((r) => r.$.name == fName)
        if (!rec || !this.isGtypeStructFor(girClass, rec)) {
            rec = this.ns.record?.find((r) => this.isGtypeStructFor(girClass, r))
            fName == rec?.$.name
        }
        if (!rec) return girMethods

        // Record methods
        const methods = rec.method || []

        for (const girMethod of methods) {
            if (!girElementIsIntrospectable(girMethod) || !girClass._tsData) continue

            if (!girMethod._tsData)
                girMethod._tsData = this.getFunctionTsData(girMethod, 'static-function', girClass._tsData, {
                    isStatic: true,
                    isArrowType: false,
                    isGlobal: false,
                    isVirtual: false,
                    returnType: null,
                    generics: [],
                })

            if (!girMethod._tsData) continue

            if (girMethod._tsData) {
                if (girMethod._fullSymName) this.symTable.set(this.allDependencies, girMethod._fullSymName, girMethod)
                girMethods.push(girMethod)
            }
        }

        this.overloadPromisifiedFunctions(methods)

        return girMethods
    }

    /**
     * Instance methods
     * @param girClass
     * @param localNames
     */
    private getClassMethodsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        localNames: LocalNames,
    ) {
        const girMethods: GirMethodElement[] = []
        if (girClass.method) {
            for (const girMethod of girClass.method) {
                if (!girElementIsIntrospectable(girMethod) || !girClass._tsData) continue

                if (!girMethod._tsData)
                    girMethod._tsData = this.getFunctionTsData(girMethod, 'method', girClass._tsData, {
                        isStatic: false,
                        isArrowType: false,
                        isGlobal: false,
                        isVirtual: false,
                        returnType: null,
                        generics: [],
                    })

                if (!girMethod._tsData) continue

                const localName = this.checkOrSetLocalName(girMethod, localNames, 'method')
                if (localName?.added && localName.method) {
                    if (girMethod._fullSymName)
                        this.symTable.set(this.allDependencies, girMethod._fullSymName, girMethod)
                    girMethods.push(localName.method)
                }
            }

            this.overloadPromisifiedFunctions(girClass.method)
        }
        return girMethods
    }

    private getClassFieldsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        localNames: LocalNames,
    ) {
        const girFields: GirFieldElement[] = []
        if (!girClass._tsData) {
            this.log.warn(NO_TSDATA('setClassFieldsTsData'))
            return girFields
        }

        if (girClass.field) {
            for (const girField of girClass.field) {
                if (!girElementIsIntrospectable(girField)) continue
                if (!girField._tsData)
                    girField._tsData = this.getVariableTsData(
                        girField,
                        'field',
                        'property',
                        girClass._tsData,
                        false,
                        false,
                        false,
                    )

                if (!girField._tsData) {
                    continue
                }

                const localName = this.checkOrSetLocalName(girField, localNames, 'field')
                if (localName?.added && localName.field) {
                    if (girField._fullSymName) this.symTable.set(this.allDependencies, girField._fullSymName, girField)
                    girFields.push(localName.field)
                }
            }
        }

        return girFields
    }

    private getGObjectProperties(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        const girProperties: GirPropertyElement[] = []
        if (girClass._fullSymName && !STATIC_NAME_ALREADY_EXISTS.includes(girClass._fullSymName)) {
            // Records, classes and interfaces all have a static name
            const type = this.girFactory.newTsType({ type: 'string' })
            const staticNameProp = this.girFactory.newGirProperty({
                isStatic: true,
                name: 'name',
                type: [type],
                girTypeName: 'property',
            })
            girProperties.push(staticNameProp)
        }

        if (girClass._tsData?.isDerivedFromGObject && girClass._module) {
            if (this.config.environment === 'gjs') {
                const type = this.girFactory.newTsType({
                    // TODO: Type not as string
                    type: 'GObject.GType',
                    generics: this.girFactory.newGenerics([
                        {
                            value: girClass._tsData.name,
                        },
                    ]),
                })
                const staticGTypeProp = this.girFactory.newGirProperty({
                    isStatic: true,
                    name: '$gtype',
                    type: [type],
                    girTypeName: 'property',
                })
                girProperties.push(staticGTypeProp)
            } else if (this.config.environment === 'node') {
                const staticGTypeProp = this.girFactory.newGirProperty({
                    isStatic: false,
                    name: '__gtype__',
                    type: [{ type: 'number' }],
                    girTypeName: 'property',
                })
                girProperties.push(staticGTypeProp)
            }
        }

        return girProperties
    }

    private getClassPropertiesTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        localNames: LocalNames,
    ) {
        const girProperties: GirPropertyElement[] = []
        const properties = (girClass as GirClassElement | GirInterfaceElement).property
        if (properties) {
            for (const girProperty of properties) {
                if (!girElementIsIntrospectable(girProperty) || !girClass._tsData) continue

                girProperty._tsData = this.getPropertyTsData(girProperty, 'property', 'property', girClass._tsData)
                if (!girProperty._tsData) continue

                const localName = this.checkOrSetLocalName(girProperty, localNames, 'property')
                if (localName?.added && localName.property) {
                    if (girProperty._fullSymName)
                        this.symTable.set(this.allDependencies, girProperty._fullSymName, girProperty)
                    girProperties.push(localName.property)
                }
            }
        }
        return girProperties
    }

    private getClassNonStaticPropertyNames(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        const propertyNames: string[] = []

        if (!girClass._tsData) {
            return propertyNames
        }

        const girProperties = girClass._tsData.properties

        if (girProperties.length > 0) {
            for (const girProperty of girProperties) {
                if (!girElementIsIntrospectable(girProperty)) continue
                if (
                    girProperty.$.name &&
                    !propertyNames.includes(girProperty.$.name) &&
                    !girProperty._tsData?.isStatic
                ) {
                    propertyNames.push(girProperty.$.name)
                }
            }
        }

        // Extended property names
        for (const fullSymName of Object.keys(girClass._tsData.inherit)) {
            const girProperties = girClass._tsData.inherit[fullSymName]?.class.properties
            if (girProperties.length > 0) {
                for (const girProperty of girProperties) {
                    if (!girElementIsIntrospectable(girProperty)) continue
                    if (
                        girProperty.$.name &&
                        !propertyNames.includes(girProperty.$.name) &&
                        !girProperty._tsData?.isStatic
                    ) {
                        propertyNames.push(girProperty.$.name)
                    }
                }
            }
        }

        // Implemented property names
        for (const fullSymName of Object.keys(girClass._tsData.implements)) {
            const girProperties = girClass._tsData.implements[fullSymName]?.interface.properties
            if (girProperties.length > 0) {
                for (const girProperty of girProperties) {
                    if (!girElementIsIntrospectable(girProperty)) continue
                    if (
                        girProperty._tsData &&
                        girProperty.$.name &&
                        !propertyNames.includes(girProperty.$.name) &&
                        !girProperty._tsData?.isStatic
                    ) {
                        propertyNames.push(girProperty.$.name)
                    }
                }
            }
        }

        return propertyNames
    }

    private getClassConstructorsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) {
            throw new Error(NO_TSDATA('getClassConstructorsTsData'))
        }
        const girConstructors: GirConstructorElement[] = []

        // JS constructor(s)
        if (girClass._tsData?.isDerivedFromGObject) {
            const constructorInParam: InjectionParameter = {
                name: 'config',
                type: [
                    {
                        optional: true,
                        type: girClass._tsData.constructPropInterfaceName,
                    },
                ],
            }
            const realConstructor = this.girFactory.newGirFunction(
                {
                    name: 'constructor',
                    isStatic: true,
                    inParams: [constructorInParam],
                    girTypeName: 'constructor',
                },
                girClass._tsData,
            )
            const initConstructor = this.girFactory.newGirFunction(
                {
                    name: '_init',
                    inParams: [constructorInParam],
                    girTypeName: 'method',
                },
                girClass._tsData,
            )
            girConstructors.push(realConstructor, initConstructor)
        }

        if (Array.isArray(girClass.constructor)) {
            for (const girConstructor of girClass.constructor) {
                if (!girElementIsIntrospectable(girConstructor)) continue

                girConstructor._tsData = this.getConstructorFunctionTsData(girClass._tsData, girConstructor)

                if (!girConstructor._tsData?.name) continue

                // Also add `new` pseudo constructors
                const ADD_NEW_PSEUDO_CONSTRUCTOR = true

                // Inject an additional real constructor if static new(...) exists
                if (girConstructor._tsData.name === 'new') {
                    const realConstructor = clone(girConstructor)
                    realConstructor._tsData = clone(realConstructor._tsData)

                    if (realConstructor._tsData) {
                        realConstructor._tsData.overloads = []
                        realConstructor.$.name = 'constructor'
                        realConstructor._tsData.name = 'constructor'
                        girConstructors.push(realConstructor)
                    }

                    if (ADD_NEW_PSEUDO_CONSTRUCTOR) {
                        girConstructors.push(girConstructor)
                    }
                } else {
                    girConstructors.push(girConstructor)
                }
            }
        }

        return girConstructors
    }

    private getClassVirtualMethodsTsData(
        girClass: GirClassElement | GirInterfaceElement | GirUnionElement | GirRecordElement,
    ) {
        const methods: GirVirtualMethodElement[] =
            (girClass as GirClassElement | GirInterfaceElement)['virtual-method'] || []
        const girMethods: GirVirtualMethodElement[] = []

        for (const girVMethod of methods) {
            if (!girElementIsIntrospectable(girVMethod) || !girClass._tsData) continue

            girVMethod._tsData = this.getFunctionTsData(girVMethod, 'virtual', girClass._tsData, {
                isStatic: false,
                isArrowType: false,
                isGlobal: false,
                isVirtual: true,
                returnType: null,
                generics: [],
            })
            if (!girVMethod._tsData) continue

            if (girVMethod?._tsData?.name) {
                girMethods.push(girVMethod)
            }
        }

        return girMethods
    }

    /**
     *
     * @param girClass This is the class / interface the `parentClass` implements signals from
     * @returns
     */
    private getClassSignalsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        const girSignals: GirSignalElement[] = []

        const signals: GirSignalElement[] =
            (girClass as GirClassElement | GirInterfaceElement).signal ||
            (girClass as GirClassElement | GirInterfaceElement)['glib:signal'] ||
            []
        if (signals) {
            for (const girSignal of signals) {
                girSignal._tsData = this.setSignalTsData(girSignal, girClass)
                if (!girSignal._tsData) continue
                if (girSignal._fullSymName) this.symTable.set(this.allDependencies, girSignal._fullSymName, girSignal)

                girSignals.push(girSignal)
            }
        }
        return girSignals
    }

    getClassParentObject(
        parentName: string,
        namespace: string,
        type: 'parent' | 'prerequisite' | 'implements',
    ): ClassParent {
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

        const cls = this.getClassParent({
            qualifiedParentName,
            parentName,
        })

        return {
            qualifiedParentName,
            localParentName,
            type,
            parentName,
            cls,
            dependencyExists,
            // TODO: are there other types that can be inherited or implemented?
            girTypeName: type === 'parent' ? 'class' : 'interface',
        }
    }

    private getClassParents(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        const parents: ClassParent[] = []

        if (!girClass._module?.namespace) {
            throw new Error('Namespace not found!')
        }

        if (!girClass._tsData) {
            throw new Error(NO_TSDATA('getClassParents'))
        }

        const prerequisites = (girClass as GirInterfaceElement)?.prerequisite
        const implmts = (girClass as GirInterfaceElement)?.implements

        if (implmts) {
            for (const implement of implmts) {
                const parentName = implement.$?.name
                if (!parentName) continue
                const parent = this.getClassParentObject(parentName, girClass._module.namespace, 'implements')
                if (parent.dependencyExists) {
                    parents.push(parent)
                }
            }
        }

        if (prerequisites) {
            for (const prerequisite of prerequisites) {
                const parentName = prerequisite.$?.name
                if (!parentName) continue
                const parent = this.getClassParentObject(parentName, girClass._module.namespace, 'prerequisite')
                if (parent.dependencyExists) {
                    parents.push(parent)
                }
            }
        }

        if ((girClass as GirClassElement).$.parent) {
            const parentName = (girClass as GirClassElement).$.parent
            if (parentName) {
                const parent = this.getClassParentObject(parentName, girClass._module.namespace, 'parent')
                if (parent.dependencyExists) {
                    parents.push(parent)
                }
            }
        }

        // Please reply: Do all interfaces always inherit from GObject.Object?
        // If this is a interface and GObject.Object is not in the parents array, add GObject.Object to the parents
        if (girClass._tsData.girTypeName === 'interface' && girClass._fullSymName !== 'GObject.Object') {
            if (!parents.find((parent) => parent.qualifiedParentName === 'GObject.Object')) {
                // TODO make sure this class exists in symTable
                const gObjectObjectCls =
                    this.symTable.getByHand<GirClassElement>('GObject-2.0.GObject.Object') || undefined
                const parent: ClassParent = {
                    qualifiedParentName: 'GObject.Object',
                    localParentName: girClass._module.namespace === 'GObject' ? 'Object' : 'GObject.Object',
                    type: 'parent',
                    parentName: 'Object',
                    cls: gObjectObjectCls,
                    dependencyExists: !!gObjectObjectCls,
                    girTypeName: 'class',
                }
                if (parent.dependencyExists) {
                    parents.push(parent)
                }
            }
        }

        return parents
    }

    private setClassBaseTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        girTypeName: TypeGirClass,
    ) {
        if (!girClass?.$?.name) return undefined

        const girModule: GirModule = girClass._module ? girClass._module : this
        let className = this.transformation.transformClassName(girClass.$.name)
        /**
         * E.g. 'Gtk'
         */
        const namespace = girModule.namespace
        /**
         * E.g. '3.0'
         */
        const version = girModule.version

        let qualifiedName: string
        if (!className.includes('.')) {
            qualifiedName = namespace + '.' + className
        } else {
            qualifiedName = className
            const split = className.split('.')
            className = split[split.length - 1]
        }

        girClass._tsData = {
            name: className,
            qualifiedName,
            parents: [],
            namespace,
            version,
            isAbstract: this.isAbstractClass(girClass),
            localNames: {},
            constructPropNames: {},
            inheritConstructPropInterfaceNames: [],
            constructPropInterfaceName: `${namespace}.${className}.ConstructorProperties`,
            fields: [],
            properties: [],
            conflictProperties: [],
            constructProps: [],
            propertySignalMethods: [],
            methods: [],
            conflictMethods: [],
            virtualMethods: [],
            constructors: [],
            staticFunctions: [],
            signals: [],
            generics: [],
            inherit: {},
            implements: {},
            girTypeName,
            tsTypeName: this.girFactory.girTypeNameToTsTypeName(girTypeName, false),
            doc: this.getTsDoc(girClass),
        }

        girClass._tsData.doc.tags.push(
            ...this.getTsDocGirElementTags(girClass._tsData.tsTypeName, girClass._tsData.girTypeName),
        )

        girClass._tsData.parents = this.getClassParents(girClass)

        if (girClass._tsData.parents.length) {
            for (const parent of girClass._tsData.parents) {
                girClass._tsData.inheritConstructPropInterfaceNames.push(
                    `${parent.qualifiedParentName}.ConstructorProperties`,
                )
            }
        }

        girClass._tsData.isDerivedFromGObject = this.isDerivedFromGObject(girClass)

        return girClass._tsData
    }

    private setClassTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        girTypeName: TypeGirClass,
    ): TsClass | undefined {
        if (!girClass?.$?.name) return undefined

        if (girClass._tsData) {
            return girClass._tsData
        }

        girClass._tsData = this.setClassBaseTsData(girClass, girTypeName)
        if (!girClass._tsData) {
            return undefined
        }

        // BASE

        if (girClass._tsData.isDerivedFromGObject) {
            girClass._tsData.constructProps.push(
                ...this.getClassConstructPropsTsData(girClass, girClass._tsData.constructPropNames),
            )
        }

        girClass._tsData.constructors.push(...this.getClassConstructorsTsData(girClass))
        girClass._tsData.staticFunctions.push(...this.getClassStaticFunctionsTsData(girClass, girClass._tsData))

        girClass._tsData.fields.push(...this.getClassFieldsTsData(girClass, girClass._tsData.localNames))

        girClass._tsData.properties.push(...this.getClassPropertiesTsData(girClass, girClass._tsData.localNames))
        girClass._tsData.methods.push(...this.getClassMethodsTsData(girClass, girClass._tsData.localNames))
        girClass._tsData.virtualMethods.push(...this.getClassVirtualMethodsTsData(girClass))
        girClass._tsData.signals.push(...this.getClassSignalsTsData(girClass))

        girClass._tsData.properties.push(...this.getGObjectProperties(girClass))

        // Copy fields, properties, methods, virtual methods and signals from inheritance tree
        this.traverseInheritanceTree(girClass, girClass._tsData.girTypeName, (extendsCls, depth) => {
            if (!girClass._tsData || !extendsCls._tsData || !extendsCls._fullSymName || !extendsCls._module) {
                return
            }

            if (girClass._fullSymName === extendsCls._fullSymName) {
                return
            }

            const key = extendsCls._module.packageName + '.' + extendsCls._fullSymName
            if (girClass._tsData.inherit[key]) return

            girClass._tsData.inherit[key] = {
                depth,
                class: extendsCls._tsData,
            }
        })

        // Copy properties, methods and signals from implemented interface
        this.forEachInterface(girClass, girClass._tsData.girTypeName, (iface, depth) => {
            if (!girClass._tsData || !iface._tsData || !iface._fullSymName || !iface._module) {
                return
            }

            if (girClass._fullSymName === iface._fullSymName) {
                return
            }

            const key = iface._module.packageName + '.' + iface._fullSymName
            if (girClass._tsData.implements[key]) return

            girClass._tsData.implements[key] = {
                depth,
                interface: iface._tsData,
            }
        })

        this.inject.toClass(girClass)

        girClass._tsData.propertySignalMethods.push(
            ...this.getClassPropertySignalsMethods(girClass),
            ...this.getGeneralSignalsMethods(girClass._tsData),
        )

        if (this.config.fixConflicts) {
            this.conflictResolver.repairClass(girClass)
        }

        return girClass._tsData
    }

    private isDerivedFromGObject(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): boolean {
        if (typeof girClass._tsData?.isDerivedFromGObject === 'boolean') return girClass._tsData.isDerivedFromGObject
        let ret = false

        const onClassOrInterface = (
            cls: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        ) => {
            if (cls._tsData?.isDerivedFromGObject === true || cls._fullSymName === 'GObject.Object') {
                ret = true
            }
        }
        if (!girClass._tsData) throw new Error(NO_TSDATA('isDerivedFromGObject'))
        this.traverseInheritanceTree(girClass, girClass._tsData.tsTypeName, onClassOrInterface)
        this.forEachInterface(girClass, girClass._tsData.tsTypeName, onClassOrInterface)
        return ret
    }

    private getClassParent(parent: Pick<ClassParent, 'qualifiedParentName' | 'parentName'>) {
        let parentPtr: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement | undefined =
            undefined
        if (this.symTable.get(this.allDependencies, parent.qualifiedParentName)) {
            parentPtr =
                (this.symTable.get(this.allDependencies, parent.qualifiedParentName) as GirClassElement) || undefined
        }

        if (!parentPtr && parent.parentName == 'Object') {
            parentPtr = (this.symTable.getByHand('GObject-2.0.GObject.Object') as GirClassElement) || undefined
        }

        return parentPtr
    }

    private traverseInheritanceTree(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        gitTypeName: TypeGirClass,
        callback: (
            girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
            depth: number,
        ) => void,
        depth = 0,
        recursive = true,
    ): void {
        if (!girClass.$.name) return
        if (!girClass._tsData) girClass._tsData = this.setClassTsData(girClass, gitTypeName)
        if (!girClass._tsData) return

        callback(girClass, depth)

        const parents = girClass._tsData.parents
        if (recursive && parents.length) {
            ++depth

            if (depth >= MAX_CLASS_PARENT_DEPTH) {
                this.log.error('[traverseInheritanceTree] Maximum recursion depth reached')
                return
            }

            for (const parent of parents) {
                if (!parent.parentName || parent.type !== 'parent') {
                    continue
                }

                if (parent.cls) {
                    if (parent.cls === girClass) {
                        this.log.warn('[traverseInheritanceTree] A class cannot inherit itself')
                        continue
                    }

                    this.traverseInheritanceTree(parent.cls, parent.girTypeName, callback, depth, recursive)
                }
            }
        }
    }

    private forEachInterface(
        girIface: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        girTypeName: TypeGirClass,
        callback: (
            cls: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
            depth: number,
        ) => void,
        recursive = true,
        depth = 0,
    ): void {
        if (!girIface.$.name) return
        if (!girIface._tsData) girIface._tsData = this.setClassTsData(girIface, girTypeName)
        if (!girIface._tsData) {
            throw new Error(NO_TSDATA('forEachInterface'))
        }

        const parents = girIface._tsData.parents
        if (parents.length) {
            ++depth
            for (const parent of parents) {
                if (!parent.parentName || parent.type === 'parent') {
                    continue
                }

                if (parent.cls) {
                    callback(parent.cls as GirInterfaceElement, depth)
                    // iface's prerequisite is also an interface, or it's
                    // a class and we also want to recurse classes

                    if (recursive)
                        this.forEachInterface(
                            parent.cls as GirInterfaceElement,
                            parent.girTypeName,
                            callback,
                            recursive,
                            depth,
                        )
                }
            }
        }
    }

    /**
     *
     * @param girElement
     * @param localNames Can be (constructor) properties, fields or methods
     * @param type
     */
    private checkOrSetLocalName(
        girElement:
            | GirMethodElement
            | GirPropertyElement
            | GirFieldElement
            | GirConstructorElement
            | GirFunctionElement,
        localNames: LocalNames,
        type: LocalNameType,
    ): LocalNameCheck | null {
        let isOverloadable = false

        if (!girElement._tsData) {
            return null
        }

        const name = girElement._tsData?.name

        if (!name) {
            return null
        }

        // Methods are overloadable by typescript
        // TODO Add support for properties
        if (type === 'method') {
            isOverloadable = true
        }

        // Only names of the same type are overloadable
        if (localNames[name]?.type && localNames[name].type !== type) {
            // In GIO there are some methods and properties with the same name
            // E.g. on `WebKit2.WebView.isLoading` and `WebKit2.WebView.isLoading()`
            // See Gjs doc https://gjs-docs.gnome.org/webkit240~4.0_api/webkit2.webview#property-is_loading
            // TODO prefer functions over properties (Overwrite the properties with the functions if they have the same name)

            return null
        }

        // If name is found in localNames this variable was already defined
        if (localNames?.[name]?.[type]?._tsData) {
            // Ignore duplicates with the same type
            // TODO should we use `this.functionSignaturesMatch` here?

            if (type === 'method') {
                const tsMethod1 = (girElement as GirMethodElement)._tsData
                const tsMethod2 = (localNames[name][type] as GirMethodElement)._tsData
                if (!tsMethod1 || !tsMethod2) {
                    return null
                }
                // if (ConflictResolver.functionConflict(tsMethod1, tsMethod2)) {
                //     return null
                // }
            } else {
                // TODO better handling of property and field
                if (isEqual(localNames[name][type]?._tsData, girElement._tsData)) {
                    return null
                }
            }

            // Ignore if current method is not overloadable
            if (!isOverloadable) {
                return null
            }
        }

        localNames[name] = localNames[name] || {}
        const localName: LocalName = {
            ...localNames[name],
            [type]: girElement,
            type,
        }

        localNames[name] = localName
        return { ...localName, added: true }
    }

    private isGtypeStructFor(
        e: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        rec: GirRecordElement,
    ) {
        const isFor = rec.$['glib:is-gtype-struct-for']
        return isFor && isFor == e.$.name
    }

    /**
     * E.g GObject.ObjectClass is a abstract class and required by UPowerGlib-1.0, UDisks-2.0 and others
     * @param girClass
     * @returns `true` if this is this a abstract class.
     */
    private isAbstractClass(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        return girClass.$?.['glib:is-gtype-struct-for'] ? true : false
    }

    /**
     *
     * @param girClass
     * @returns
     */
    private getOtherStaticFunctions(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): GirFunctionElement[] {
        const girFunctions: GirFunctionElement[] = []

        if (!girClass._tsData) return girFunctions

        if (girClass.function?.length) {
            for (const girFunction of girClass.function) {
                girFunction._tsData = this.getFunctionTsData(girFunction, 'static-function', girClass._tsData, {
                    isStatic: true,
                    isArrowType: false,
                    isGlobal: false,
                    isVirtual: false,
                    returnType: null,
                    generics: [],
                })

                if (!girFunction._tsData?.name) continue
                if (girFunction._tsData.name.startsWith('new')) continue

                girFunctions.push(girFunction)
            }
        }
        return girFunctions
    }

    private getStaticNewFunctions(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        parentClass: TsClass,
    ): Array<GirFunctionElement | GirConstructorElement> {
        const girFunctions: Array<GirFunctionElement | GirConstructorElement> = []
        if (girClass.function?.length) {
            for (const girFunction of girClass.function) {
                girFunction._tsData = this.getConstructorFunctionTsData(parentClass, girFunction)
                if (!girFunction._tsData?.name.startsWith('new')) continue
                girFunctions.push(girFunction)
            }
        }
        return girFunctions
    }

    /**
     * Static methods, <constructor> and <function>
     * @param girClass
     * @param constructorTypeName Used to overwrite the constructor return type
     * @param useReference This value should be `false` for inherited and implemented classes / interfaces.
     * Otherwise other modules would overwrite the return value of the constructor methods
     */
    private getClassStaticFunctionsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        parentClass: TsClass,
    ) {
        const girStaticFuncs: Array<GirFunctionElement | GirConstructorElement | GirMethodElement> = []

        girStaticFuncs.push(...this.getStaticNewFunctions(girClass, parentClass))
        girStaticFuncs.push(...this.getOtherStaticFunctions(girClass))
        girStaticFuncs.push(...this.getClassRecordMethods(girClass))

        return girStaticFuncs
    }

    private setModuleTsData() {
        if (this.ns.enumeration) {
            for (const girEnum of this.ns.enumeration) {
                if (girEnum.member) {
                    for (const girEnumMember of girEnum.member) {
                        girEnumMember._tsData = this.getEnumerationMemberTsData(girEnumMember, 'enum-member')
                        if (!girEnumMember._tsData) continue
                    }
                }
                girEnum._tsData = this.getEnumerationTsData(girEnum, 'enum')
                this.fixEnumerationDuplicateIdentifier(girEnum)
                if (!girEnum._tsData) continue
            }
        }

        if (this.ns.bitfield)
            for (const girBitfield of this.ns.bitfield) {
                if (girBitfield.member)
                    for (const girEnumMember of girBitfield.member) {
                        girEnumMember._tsData = this.getEnumerationMemberTsData(girEnumMember, 'bitfield-member')
                    }
                girBitfield._tsData = this.getEnumerationTsData(girBitfield, 'bitfield')
                if (!girBitfield._tsData) continue
                this.fixEnumerationDuplicateIdentifier(girBitfield)
            }

        if (this.ns.constant)
            for (const girConst of this.ns.constant) {
                girConst._tsData = this.getConstantTsData(girConst, null)
                if (!girConst._tsData) continue
            }

        if (this.ns.function) {
            for (const girFunc of this.ns.function) {
                girFunc._tsData = this.getFunctionTsData(girFunc, 'function', null, {
                    isStatic: false,
                    isArrowType: false,
                    isGlobal: true,
                    isVirtual: false,
                    returnType: null,
                    generics: [],
                })
                if (!girFunc._tsData) continue
            }

            this.overloadPromisifiedFunctions(this.ns.function)
        }

        if (this.ns.callback)
            for (const girCallback of this.ns.callback) {
                girCallback._tsData = this.setCallbackTsData(girCallback, null)
            }

        if (this.ns.interface)
            for (const girIface of this.ns.interface) {
                girIface._tsData = this.setClassTsData(girIface, 'interface')
            }

        if (this.ns.class)
            for (const girClass of this.ns.class) {
                girClass._tsData = this.setClassTsData(girClass, 'class')
                if (!girClass._tsData) continue
            }

        if (this.ns.record)
            for (const girRecord of this.ns.record) {
                girRecord._tsData = this.setClassTsData(girRecord, 'record')
                if (!girRecord._tsData) continue
            }

        if (this.ns.union)
            for (const girUnion of this.ns.union) {
                girUnion._tsData = this.setClassTsData(girUnion, 'union')
                if (!girUnion._tsData) continue
            }

        if (this.ns.alias) {
            for (const girAlias of this.ns.alias) {
                // GType is not a number in GJS
                if (this.packageName !== 'GObject-2.0' || girAlias.$.name !== 'Type')
                    girAlias._tsData = this.getAliasTsData(girAlias, null)
                if (!girAlias._tsData) continue
            }
        }
    }

    /**
     * TODO: find better name for this method
     * @param fullTypeName
     * @returns
     */
    private fullTypeLookupWithNamespace(fullTypeName: string) {
        let resValue = ''
        let namespace = ''

        // Check overwrites first
        if (!resValue && fullTypeName && FULL_TYPE_MAP(this.config.environment, fullTypeName)) {
            resValue = FULL_TYPE_MAP(this.config.environment, fullTypeName) || ''
        }

        // Only use the fullTypeName as the type if it is found in the symTable
        if (!resValue && this.symTable.get(this.allDependencies, fullTypeName)) {
            if (fullTypeName.startsWith(this.namespace + '.')) {
                resValue = removeNamespace(fullTypeName, this.namespace)
                resValue = this.transformation.transformTypeName(resValue)
                // TODO: check if resValue is a class, enum or interface before transformClassName
                resValue = this.transformation.transformClassName(resValue)
                namespace = this.namespace
                resValue = namespace + '.' + resValue
            } else {
                const resValues = fullTypeName.split('.')
                resValues.map((name) => this.transformation.transformTypeName(name))
                // TODO: check if resValues[resValues.length - 1] is a class, enum, interface before transformClassName
                resValues[resValues.length - 1] = this.transformation.transformClassName(
                    resValues[resValues.length - 1],
                )
                resValue = resValues.join('.')
                namespace = resValues[0]
            }
        }

        return {
            value: resValue,
            namespace,
        }
    }

    private loadInheritance(inheritanceTable: InheritanceTable): void {
        // Class hierarchy
        for (const girClass of this.ns.class ? this.ns.class : []) {
            let parent: string | null = null
            if (girClass.$ && girClass.$.parent) parent = girClass.$.parent
            if (!parent) continue
            if (!girClass._fullSymName) continue

            if (!parent.includes('.')) {
                parent = addNamespace(parent, this.namespace)
            }

            const className = girClass._fullSymName

            const arr: string[] = inheritanceTable[className] || []
            arr.push(parent)
            inheritanceTable[className] = arr
        }

        // Class interface implementations
        for (const girClass of this.ns.class ? this.ns.class : []) {
            if (!girClass._fullSymName) continue

            const names: string[] = []

            if (girClass.implements) {
                for (const girImplements of girClass.implements) {
                    if (girImplements.$.name) {
                        let name: string = girImplements.$.name
                        if (!name.includes('.')) {
                            name = girClass._fullSymName.substring(0, girClass._fullSymName.indexOf('.') + 1) + name
                        }
                        names.push(name)
                    }
                }
            }

            if (names.length > 0) {
                const className = girClass._fullSymName
                const arr: string[] = inheritanceTable[className] || []
                inheritanceTable[className] = arr.concat(names)
            }
        }
    }

    private loadTypes(): void {
        if (this.ns.bitfield) this.annotateAndRegisterGirElement(this.ns.bitfield)
        if (this.ns.callback) this.annotateAndRegisterGirElement(this.ns.callback)
        if (this.ns.class) this.annotateAndRegisterGirElement(this.ns.class)
        if (this.ns.constant) this.annotateAndRegisterGirElement(this.ns.constant)
        if (this.ns.enumeration) this.annotateAndRegisterGirElement(this.ns.enumeration)
        if (this.ns.function) this.annotateAndRegisterGirElement(this.ns.function)
        if (this.ns.interface) this.annotateAndRegisterGirElement(this.ns.interface)
        if (this.ns.record) this.annotateAndRegisterGirElement(this.ns.record)
        if (this.ns.union) this.annotateAndRegisterGirElement(this.ns.union)
        if (this.ns.alias) this.annotateAndRegisterGirElement(this.ns.alias)

        if (this.ns.callback) for (const girCallback of this.ns.callback) this.annotateFunctionArguments(girCallback)

        for (const girClass of this.ns.class || []) {
            this.annotateClass(girClass, 'class')
        }
        for (const girClass of this.ns.record || []) {
            this.annotateClass(girClass, 'record')
        }
        for (const girClass of this.ns.interface || []) {
            this.annotateClass(girClass, 'interface')
        }

        if (this.ns.function) this.annotateFunctions(this.ns.function)
        if (this.ns.callback) this.annotateFunctions(this.ns.callback)

        if (this.ns.constant) this.annotateVariables(this.ns.constant)
    }

    /**
     * Before processing the typescript data, each module should be initialized first.
     * This is done in the `GenerationHandler`.
     */
    public init(inheritanceTable: InheritanceTable) {
        this.loadTypes()
        this.loadInheritance(inheritanceTable)
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

        this.setModuleTsData()
    }
}
