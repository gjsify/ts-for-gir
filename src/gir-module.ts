import { Transformation, C_TYPE_MAP, FULL_TYPE_MAP, POD_TYPE_MAP, POD_TYPE_MAP_ARRAY } from './transformation.js'
import { Logger } from './logger.js'
import { Injector } from './injector.js'
import { GirFactory } from './gir-factory.js'
import {
    NO_TSDATA,
    WARN_NOT_FOUND_TYPE,
    WARN_CONSTANT_ALREADY_EXPORTED,
    WARN_DUPLICATE_SYMBOL,
    WARN_DUPLICATE_PARAMETER,
    WARN_DUPLICATE_ENUM_IDENTIFIER,
    PATCH_FOR_PARAMETER,
    PATCH_FOR_VARIABLE,
    PATCH_FOR_METHOD,
    PATCH_FOR_CONSTRUCTOR_PROPERTY,
} from './messages.js'
import {
    isEqual,
    find,
    clone,
    girBool,
    removeNamespace,
    addNamespace,
    merge,
    girElementIsIntrospectable,
} from './utils.js'
import { SymTable } from './symtable.js'
import { typePatches } from './type-patches.js'
import type {
    GirRepository,
    GirNamespace,
    GirAliasElement,
    GirEnumElement,
    GirMemberElement,
    GirFunctionElement,
    GirClassElement,
    GirArrayType,
    GirType,
    GirInclude,
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
    TypeFunction,
    TypeMethod,
    TypeVariable,
    TypeField,
    TypeClass,
    TypeGirElement,
    TypeTsElement,
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
    InheritanceTable,
    ParsedGir,
    GenerateConfig,
    FunctionMap,
    Environment,
    ClassParent,
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
     * E.g. '3.0'
     */
    version = '0.0'
    /**
     * E.g. 'Gtk-3.0'
     */
    packageName: string
    /**
     * E.g. 'Gtk30'
     * Is used in the generated index.d.ts, for example: `import * as Gtk30 from "./Gtk-3.0";`
     */
    importName: string

    dependencies: string[] = []
    private _transitiveDependencies: string[] = []

    set transitiveDependencies(deps: string[]) {
        this._transitiveDependencies = this.checkTransitiveDependencies(deps)
    }

    get transitiveDependencies(): string[] {
        return this._transitiveDependencies
    }

    get allDependencies(): string[] {
        return [...new Set([...this.dependencies, ...this.transitiveDependencies])]
    }

    repo: GirRepository
    ns: GirNamespace = { $: { name: '', version: '' } }
    /**
     * Used to find namespaces that are used in other modules
     */
    symTable: SymTable

    transformation: Transformation

    girFactory = new GirFactory()

    inject = new Injector()
    extends?: string
    log: Logger

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

        this.dependencies = this.loadDependencies(this.repo.include || [])
        this.ns = this.repo.namespace[0]
        this.namespace = this.ns.$.name
        this.version = this.ns.$.version
        this.packageName = `${this.namespace}-${this.version}`
        this.transformation = new Transformation(this.packageName, config)
        this.log = new Logger(config.environment, config.verbose, this.packageName || 'GirModule')
        this.importName = this.transformation.transformModuleNamespaceName(this.packageName)

        this.symTable = new SymTable(this.config, this.packageName, this.namespace)
    }

    private loadDependencies(girInclude: GirInclude[]): string[] {
        const dependencies: string[] = []
        for (const i of girInclude) {
            dependencies.unshift(`${i.$.name}-${i.$.version || ''}`)
        }

        return dependencies
    }

    private checkTransitiveDependencies(transitiveDependencies: string[]) {
        // Always pull in GObject-2.0, as we may need it for e.g. GObject-2.0.type
        if (this.packageName !== 'GObject-2.0') {
            if (!find(transitiveDependencies, (x) => x === 'GObject-2.0')) {
                transitiveDependencies.push('GObject-2.0')
            }
        }

        // Add missing dependencies
        if (this.packageName === 'UnityExtras-7.0') {
            if (!find(transitiveDependencies, (x) => x === 'Unity-7.0')) {
                transitiveDependencies.push('Unity-7.0')
            }
        }
        if (this.packageName === 'UnityExtras-6.0') {
            if (!find(transitiveDependencies, (x) => x === 'Unity-6.0')) {
                transitiveDependencies.push('Unity-6.0')
            }
        }
        if (this.packageName === 'GTop-2.0') {
            if (!find(transitiveDependencies, (x) => x === 'GLib-2.0')) {
                transitiveDependencies.push('GLib-2.0')
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
            text = this.transformation.transformGirDoc(text)
            tsDoc.text = text
        }
        return tsDoc
    }

    private getTsDocGirElementTags(tsType?: string, girType?: string): TsDocTag[] {
        const tags: TsDocTag[] = []

        const IGNORE_GIR_TAYPE_TS_DOC_TYPES = ['method', 'enum', 'property', 'function']

        if (!girType || IGNORE_GIR_TAYPE_TS_DOC_TYPES.includes(girType)) {
            return tags
        }

        tags.push({
            tagName: girType,
            paramName: '',
            text: '',
        })

        return tags
    }

    private getTsDocInParamTags(inParams?: GirCallableParamElement[]): TsDocTag[] {
        const tags: TsDocTag[] = []
        if (!inParams?.length) {
            return tags
        }

        for (const inParam of inParams) {
            if (!inParam._tsDoc) {
                inParam._tsDoc = this.getTsDoc(inParam)
            }
            if (inParam._tsData?.name) {
                tags.push({
                    paramName: inParam._tsData.name,
                    tagName: 'param',
                    text: inParam._tsDoc.text ? this.transformation.transformGirDocTagText(inParam._tsDoc.text) : '',
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
                        girParam._girType = 'callable-param'
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
                retVal._girType = 'callable-return'
                if (retVal.$ && retVal.$.name) {
                    retVal._fullSymName = `${girFunc._fullSymName}.${retVal.$.name}`
                }
            }
    }

    private annotateFunctions(girFuncs: GirFunctionElement[], girType: 'function'): void
    private annotateFunctions(girFuncs: GirCallbackElement[], girType: 'callback'): void

    /**
     * Functions which are not part of a class
     * @param girFuncs
     * @param girType
     */
    private annotateFunctions(
        girFuncs: GirFunctionElement[] | GirCallbackElement[],
        girType: TypeFunction | 'callback',
    ): void {
        if (Array.isArray(girFuncs))
            for (const girFunc of girFuncs) {
                if (girFunc?.$?.name) {
                    girFunc._girType = girType
                    girFunc._fullSymName = `${this.namespace}.${girFunc.$.name}`
                    this.annotateFunctionArguments(girFunc)
                    this.annotateFunctionReturn(girFunc)
                }
            }
    }

    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirVirtualMethodElement[],
        girType: 'virtual',
        tsType: 'method',
    ): void

    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirSignalElement[],
        girType: 'signal',
        tsType: 'event-methods',
    ): void

    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirMethodElement[],
        girType: 'method',
        tsType: 'method',
    ): void

    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirFunctionElement[],
        girType: 'function',
        /** functions which are part of a class are always static functions */
        tsType: 'static',
    ): void

    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirConstructorElement[],
        girType: 'constructor',
        tsType: 'static',
    ): void

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
        girType: TypeMethod,
        tsType: 'static' | 'event-methods' | 'method',
    ): void {
        if (Array.isArray(girFuncs))
            for (const girFunc of girFuncs) {
                if (girFunc?.$?.name) {
                    girFunc._girType = girType
                    girFunc._tsType = tsType
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
    private annotateVariables(girVars: GirConstantElement[], girType: TypeVariable): void {
        for (const girVar of girVars) {
            girVar._module = this
            girVar._girType = girType
            girVar._tsType = this.girToTsType(girType)
            if (girVar.$ && girVar.$.name) {
                girVar._fullSymName = `${this.namespace}.${girVar.$.name}`
            }
        }
    }

    private annotateFields(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girVars: GirPropertyElement[],
        girType: 'property',
        tsType?: 'field' | 'constructor-property',
    ): void

    private annotateFields(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girVars: GirFieldElement[],
        girType: 'field',
        tsType?: 'field',
    ): void

    /**
     * Fields are variables which are part of a class
     * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#fields
     */
    private annotateFields(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girVars: GirPropertyElement[] | GirFieldElement[],
        girType: TypeField,
        tsType: 'field' | 'constructor-property' = 'field',
    ): void {
        for (const girVar of girVars) {
            const nsName = girClass ? girClass._fullSymName : this.namespace
            girVar._module = this
            girVar._girType = girType
            girVar._tsType = tsType
            if (girClass) {
                girVar._class = girClass
            }

            if (girVar.$ && girVar.$.name && nsName) {
                girVar._fullSymName = `${nsName}.${girVar.$.name}`
            }
        }
    }

    private annotateClass(girClass: GirClassElement, girType: 'class', tsType?: 'class'): void
    private annotateClass(girClass: GirRecordElement, girType: 'record', tsType?: 'class'): void
    private annotateClass(girClass: GirInterfaceElement, girType: 'interface', tsType?: 'class'): void

    private annotateClass(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girType: TypeClass,
        tsType: 'class' = 'class',
    ) {
        girClass._module = this
        girClass._fullSymName = `${this.namespace}.${girClass.$.name}`
        girClass._girType = girType
        girClass._tsType = tsType

        const constructors = girClass.constructor instanceof Array ? girClass.constructor : []
        const signals = ((girClass as GirClassElement | GirInterfaceElement).signal ||
            girClass['glib:signal'] ||
            []) as GirSignalElement[]
        const functions = girClass.function || []
        const methods = girClass.method || []
        const vMethods = (girClass as GirClassElement)['virtual-method'] || new Array<GirVirtualMethodElement>()
        const properties = girClass.property
        const fields = girClass.field

        this.annotateMethods(girClass, constructors, 'constructor', 'static')
        this.annotateMethods(girClass, functions, 'function', 'static')
        this.annotateMethods(girClass, methods, 'method', 'method')
        this.annotateMethods(girClass, vMethods, 'virtual', 'method')
        this.annotateMethods(girClass, signals, 'signal', 'event-methods')
        if (properties) this.annotateFields(girClass, properties, 'property')
        if (fields) this.annotateFields(girClass, fields, 'field')
    }

    /**
     * Annotates the custom `_module`, `_fullSymName` and `_girType` properties.
     * Also registers the element on the `symTable`.
     * @param girElements
     * @param girType
     */
    private annotateAndRegisterGirElement(
        girElements: GirAnyElement[],
        girType: TypeGirElement,
        isStatic = false,
    ): void {
        for (const girElement of girElements) {
            if (girElement?.$ && girElement.$.name) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
                if (!girElementIsIntrospectable(girElement as any)) continue

                girElement._girType = girType
                girElement._tsType = this.girToTsType(girType, isStatic)
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

        if (isArray && arrayType?.$?.name && POD_TYPE_MAP_ARRAY[arrayType.$.name]) {
            isArray = false
            overrideTypeName = POD_TYPE_MAP_ARRAY[arrayType.$.name] as string | undefined
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
                girCallback._tsData = this.getFunctionTsData(
                    girCallback,
                    'callback',
                    /* isStatic */ false,
                    /* isArrowType */ true,
                    /* isGlobal */ false,
                    /* isVirtual */ false,
                    /* overrideReturnType */ null,
                )
                girCallback._tsDoc = this.getTsDoc(girCallback)

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

        if (!typeName && type?.$?.name && POD_TYPE_MAP[type.$.name]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            typeName = POD_TYPE_MAP[type.$.name]
        }

        if (cType) {
            if (!typeName && C_TYPE_MAP(cType)) {
                typeName = C_TYPE_MAP(cType) || ''
            }

            if (!typeName && POD_TYPE_MAP[cType]) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                typeName = POD_TYPE_MAP[cType]
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
            returnTypes.push(this.getTsType(girVar, { generics }))

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

        // Ignore depreciated `allow-none` if one of the new implementation `optional` or `nullable` is set
        if (girBool(a.optional) || girBool(a.nullable)) {
            return girBool(a.nullable)
        } else {
            return girBool(a.nullable) || girBool(a['allow-none'])
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
        if (girBool(a.optional) || girBool(a.nullable)) {
            return girBool(a.optional)
        } else {
            return girBool(a.optional) || girBool(a['allow-none'])
        }
    }

    private getPatches(
        type: 'constructorProperties',
        nsPath: string,
        packageName?: string,
        env?: Environment,
    ): Partial<TsProperty>
    private getPatches(type: 'methods', nsPath: string, packageName?: string, env?: Environment): Partial<TsMethod>
    private getPatches(type: 'parameter', nsPath: string, packageName?: string, env?: Environment): Partial<TsParameter>

    /**
     * Get the patches for a given namespace path, type and package name (including the version number)
     * @param packageName E.g. 'Gtk-3.0'
     * @param type E.g 'methods'
     * @param nsPath E.g. 'Gtk.MenuItem.activate'
     */
    private getPatches(
        type: 'methods' | 'constructorProperties' | 'parameter',
        nsPath: string,
        packageName = this.packageName,
        env = this.config.environment,
    ) {
        const packagePatches = merge(typePatches[env][packageName], typePatches.all[packageName])
        if (!packagePatches) {
            return undefined
        }

        const typePatch = packagePatches[type]
        if (!typePatch) {
            return undefined
        }

        return typePatch?.[nsPath] || undefined
    }

    private getParameterTsData(
        girParam: GirCallableParamElement,
        girParams: GirCallableParamElement[],
        paramNames: string[],
        skip: GirCallableParamElement[],
    ) {
        // I think it's safest to force inout params to have the
        // same type for in and out
        const tsType = this.getTsType(girParam)

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
                .filter((p) => p.$.direction !== 'out')

            if (following.some((p) => !this.typeIsOptional(p))) {
                tsType.optional = false
            }
        }

        const tsData: TsParameter = {
            name: paramName,
            type: tsType,
        }

        return tsData
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

    private setParametersTsData(outArrayLengthIndex: number, girParams?: GirCallableParams[]) {
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

                        param._tsData = this.getParameterTsData(param, params, paramNames, skip)
                        param._tsDoc = this.getTsDoc(param)

                        // Apply patches
                        const paramPatches = param._fullSymName
                            ? this.getPatches('parameter', param._fullSymName)
                            : undefined

                        if (paramPatches) {
                            this.log.warn(PATCH_FOR_PARAMETER(param._fullSymName))
                            param._tsData = merge(param._tsData, paramPatches)
                        }

                        const optDirection = param.$.direction
                        if (optDirection === 'out' || optDirection === 'inout') {
                            outParams.push(param)
                            if (optDirection === 'out') continue
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
        girType: 'property',
        tsTypeName: 'field' | 'constructor-property',
        optional: boolean,
        nullable: boolean,
        allowQuotes: boolean,
    ): GirPropertyElement['_tsData']

    private getVariableTsData(
        girVar: GirConstantElement,
        girType: 'constant',
        tsTypeName: 'constant',
        optional: boolean,
        nullable: boolean,
        allowQuotes: boolean,
    ): GirConstantElement['_tsData']

    private getVariableTsData(
        girVar: GirFieldElement,
        girType: 'field',
        tsTypeName: 'field',
        optional: boolean,
        nullable: boolean,
        allowQuotes: boolean,
    ): GirFieldElement['_tsData']

    private getVariableTsData(
        girVar: GirPropertyElement | GirFieldElement | GirConstantElement,
        girType: 'property' | 'constant' | 'field',
        tsTypeName: 'constant' | 'field' | 'constructor-property',
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
        )
            return undefined

        girVar._girType = girType
        girVar._tsType = tsTypeName

        let name = girVar.$.name

        switch (girType) {
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
        const tsType = this.getTsType(girVar, { optional, nullable, generics })

        let tsData: TsProperty | TsVar = {
            name,
            type: tsType,
        }

        // Apply patches
        const varPatches = girVar._fullSymName ? this.getPatches('methods', girVar._fullSymName) : undefined

        if (varPatches) {
            this.log.warn(PATCH_FOR_VARIABLE(girVar._fullSymName))
            tsData = merge(tsData, varPatches)
        }

        return tsData
    }

    private getPropertyTsData(
        girProp: GirPropertyElement,
        girType: 'property',
        tsType: 'field' | 'constructor-property',
        construct?: boolean,
        optional?: boolean,
        nullable?: boolean,
        indentCount?: number,
    ): TsProperty | undefined

    private getPropertyTsData(
        girProp: GirFieldElement,
        girType: 'field',
        tsType: 'field',
        construct?: boolean,
        optional?: boolean,
        nullable?: boolean,
        indentCount?: number,
    ): TsProperty | undefined

    /**
     *
     * @param girProp
     * @param girType
     * @param tsType
     * @param construct construct means include the property even if it's construct-only,
     * @param optional optional means if it's construct-only it will also be marked optional (?)
     * @param nullable
     * @returns
     */
    private getPropertyTsData(
        girProp: GirPropertyElement | GirFieldElement,
        girType: 'property' | 'field',
        tsType: 'constructor-property' | 'field',
        construct = false,
        optional?: boolean,
        nullable?: boolean,
    ): TsProperty | undefined {
        if (!girBool(girProp.$.writable) && construct) return undefined
        if (girBool((girProp as GirFieldElement).$.private)) return undefined

        if (optional === undefined) optional = this.typeIsOptional(girProp)
        if (nullable === undefined) nullable = this.typeIsNullable(girProp)

        const readonly =
            !girBool(girProp.$.writable) || (!construct && girBool((girProp as GirPropertyElement).$['construct-only']))
        girProp._girType = girType

        let tsData: TsProperty | TsVar | undefined

        switch (girType) {
            case 'property':
                tsData = this.getVariableTsData(
                    girProp as GirPropertyElement,
                    girType,
                    tsType,
                    construct && optional,
                    construct && nullable,
                    true,
                )
                break
            case 'field':
                if (tsType !== 'field') {
                    throw new Error(`Wrong tsType: "${tsType}" for girType: "${girType}`)
                }
                tsData = this.getVariableTsData(
                    girProp as GirFieldElement,
                    girType,
                    tsType,
                    construct && optional,
                    construct && nullable,
                    true,
                )
                break
            default:
                throw new Error(`Unknown property type: ${girType as string}`)
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
        girType?: 'virtual' | 'method' | 'constructor' | 'function' | 'callback' | 'static',
        isStatic = false,
        isArrowType = false,
        isGlobal = false,
        isVirtual = false,
        overrideReturnType: string | null = null,
        generics: TsGenericParameter[] = [],
    ): TsFunction | undefined {
        if (!girFunc || !girFunc.$ || !girBool(girFunc.$.introspectable, true) || girFunc.$['shadowed-by']) {
            return undefined
        }
        let name = girFunc.$.name
        const { returnTypes, outArrayLengthIndex, retTypeIsVoid } = this.getReturnType(girFunc)

        const { inParams, outParams, instanceParameters } = this.setParametersTsData(
            outArrayLengthIndex,
            girFunc.parameters,
        )
        const shadows = (girFunc as GirMethodElement).$.shadows

        if (shadows) {
            name = shadows
        }

        // Overwrites
        girType = girType || girFunc._girType
        if (!girType) throw new Error('girType not set!')
        isStatic = isStatic || girFunc._tsType === 'static'
        isGlobal = isGlobal || girFunc._tsType === 'function'
        isVirtual = isVirtual || girType === 'virtual'

        girFunc._girType = girType
        girFunc._tsType = this.girToTsType(girType, isStatic)

        // Function name transformation by environment
        name = this.transformation.transformFunctionName(name)

        let tsData: TsFunction = {
            patched: true,
            isArrowType,
            isStatic,
            isGlobal,
            isVirtual,
            returnTypes,
            retTypeIsVoid,
            name,
            overrideReturnType: overrideReturnType || undefined,
            overloads: [],
            inParams,
            instanceParameters,
            outParams,
            generics,
        }

        // Apply patches
        const methodPatches = girFunc._fullSymName ? this.getPatches('methods', girFunc._fullSymName) : undefined

        if (methodPatches) {
            this.log.warn(PATCH_FOR_METHOD(girFunc._fullSymName))
            tsData = merge(tsData, methodPatches)
        }

        return tsData
    }

    private getCallbackInterfaceTsData(girCallback: GirCallbackElement | GirConstructorElement) {
        if (!girElementIsIntrospectable(girCallback)) return undefined

        const tsDataInterface: TsCallbackInterface = {
            name: girCallback.$.name,
        }

        return tsDataInterface
    }

    private getConstructorFunctionTsData(
        name: string,
        girConstructorFunc: GirConstructorElement,
    ): TsFunction | undefined {
        if (!girElementIsIntrospectable(girConstructorFunc)) return undefined
        return this.getFunctionTsData(
            girConstructorFunc,
            'constructor',
            /* isStatic */ true,
            /* isArrowType */ false,
            /* isGlobal */ false,
            /* isVirtual */ false,
            /* overrideReturnType */ name,
            /* generics */ [],
        )
    }

    private getSignalFuncTsData(
        girSignalFunc: GirSignalElement,
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) {
            throw new Error('girClass._tsData not set!')
        }

        // Leads to errors here
        // if (!girElementIsIntrospectable(girSignalFunc)) return undefined

        const name = this.transformation.transform('signalName', girSignalFunc.$.name)
        const { returnTypes, outArrayLengthIndex, retTypeIsVoid } = this.getReturnType(girSignalFunc)
        const { inParams, outParams, instanceParameters } = this.setParametersTsData(
            outArrayLengthIndex,
            girSignalFunc.parameters,
        )

        const tsData: TsFunction = {
            name,
            returnTypes,
            isArrowType: true,
            isStatic: false,
            isGlobal: false,
            isVirtual: false,
            patched: false,
            retTypeIsVoid,
            overloads: [],
            inParams,
            instanceParameters,
            outParams,
            generics: [],
        }

        return tsData
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

    private getEnumerationMemberTsData(girEnumMember: GirMemberElement) {
        const memberName = girEnumMember.$.name || girEnumMember.$['glib:nick'] || girEnumMember.$['c:identifier']
        if (!girElementIsIntrospectable(girEnumMember, memberName)) return undefined

        const name = this.transformation.transformEnumMember(memberName)
        const tsData: TsMember = {
            name,
        }

        return tsData
    }

    private getEnumerationTsData(girEnum: GirEnumElement | GirBitfieldElement) {
        if (!girElementIsIntrospectable(girEnum)) return undefined

        // E.g. the NetworkManager-1.0 has enum names starting with 80211
        const name = this.transformation.transformEnumName(girEnum)

        const tsData: TsEnum = {
            name,
        }

        return tsData
    }

    private getAliasTsData(girAlias: GirAliasElement) {
        if (!girElementIsIntrospectable(girAlias)) return undefined

        const { type: typeName } = this.getTsType(girAlias)
        const name = girAlias.$.name
        const tsData: TsAlias = {
            name,
            type: typeName,
        }
        return tsData
    }

    private getConstantTsData(girConst: GirConstantElement) {
        if (!girElementIsIntrospectable(girConst)) return undefined
        let tsData: TsVar | undefined = this.getVariableTsData(girConst, 'constant', 'constant', false, false, false)
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

            girConstrProp._tsData = this.getPropertyTsData(
                girConstrProp,
                'property',
                'constructor-property',
                true,
                true,
                true,
                0,
            )
            girConstrProp._tsDoc = this.getTsDoc(girConstrProp)

            if (!girConstrProp._tsData) {
                continue
            }

            const localName = this.checkOrSetLocalName(girConstrProp, constructPropNames, 'property')

            if (!localName?.added) {
                continue
            }

            // Apply patches
            {
                const constructPropPatches = girConstrProp._fullSymName
                    ? this.getPatches('constructorProperties', girConstrProp._fullSymName)
                    : undefined

                if (constructPropPatches) {
                    this.log.warn(PATCH_FOR_CONSTRUCTOR_PROPERTY(girConstrProp._fullSymName))
                    girConstrProp._tsData = merge(girConstrProp._tsData, constructPropPatches)
                    girConstrProp._tsDoc = this.getTsDoc(girConstrProp)
                }
            }

            constructProps.push(girConstrProp)
        }

        return constructProps
    }

    /**
     *
     * @param girClass
     * @param girChildClass
     * @param useReference This method overrides the return value of the constructor functions.
     * If we would use the reference to the `girElement` this value would be overwritten again by other modules
     * @returns
     */
    private getStaticConstructors(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        girChildClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        useReference = true,
    ): GirConstructorElement[] {
        const constructors = girClass.constructor
        const girConstructors: GirConstructorElement[] = []

        if (!girChildClass._tsData?.name) {
            throw new Error('girClass._tsData.name not set!')
        }

        if (!Array.isArray(constructors) || !girClass._tsData) {
            return girConstructors
        }

        for (const _girConstructor of constructors) {
            if (!girElementIsIntrospectable(_girConstructor)) continue
            let girConstructor: GirConstructorElement
            if (useReference) {
                girConstructor = _girConstructor
            } else {
                girConstructor = clone(_girConstructor)
            }

            girConstructor._tsData = this.getConstructorFunctionTsData(girChildClass._tsData?.name, girConstructor)

            if (!girConstructor?._tsData?.name) {
                continue
            }

            girConstructors.push(girConstructor)
        }

        return girConstructors
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
            if (!girElementIsIntrospectable(girMethod)) continue
            girMethod._tsData = this.getFunctionTsData(
                girMethod,
                'static',
                /* isStatic */ true,
                /* isArrowType */ false,
                /* isGlobal */ false,
                /* isVirtual */ false,
                /* overrideReturnType */ null,
            )
            girMethod._tsDoc = this.getTsDoc(girMethod)
            girMethod._tsDoc.tags.push(...this.getTsDocGirElementTags(girMethod._tsType, girMethod._girType))
            girMethod._tsDoc.tags.push(...this.getTsDocInParamTags(girMethod._tsData?.inParams))

            if (girMethod._tsData) {
                girMethods.push(girMethod)
            }
        }
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
                if (!girElementIsIntrospectable(girMethod)) continue
                girMethod._tsData = this.getFunctionTsData(
                    girMethod,
                    'method',
                    /* isStatic */ false,
                    /* isArrowType */ false,
                    /* isGlobal */ false,
                    /* isVirtual */ false,
                    /* overrideReturnType */ null,
                )

                girMethod._tsDoc = this.getTsDoc(girMethod)
                girMethod._tsDoc.tags.push(...this.getTsDocGirElementTags(girMethod._tsType, girMethod._girType))
                girMethod._tsDoc.tags.push(...this.getTsDocInParamTags(girMethod._tsData?.inParams))

                const localName = this.checkOrSetLocalName(girMethod, localNames, 'method')
                if (localName?.added && localName.method) {
                    girMethods.push(localName.method)
                }
            }
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
                girField._tsData = this.getVariableTsData(girField, 'field', 'field', false, false, false)
                girField._tsDoc = this.getTsDoc(girField)
                girField._tsDoc.tags.push(...this.getTsDocGirElementTags(girField._tsType, girField._girType))
                if (!girField._tsData) {
                    continue
                }

                const localName = this.checkOrSetLocalName(girField, localNames, 'field')
                if (localName?.added && localName.field) {
                    girFields.push(localName.field)
                }
            }
        }

        return girFields
    }

    private getClassPropertiesTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        localNames: LocalNames,
    ) {
        const girProperties: GirPropertyElement[] = []
        const properties = (girClass as GirClassElement | GirInterfaceElement).property
        if (properties) {
            for (const girProperty of properties) {
                if (!girElementIsIntrospectable(girProperty)) continue

                girProperty._tsData = this.getPropertyTsData(girProperty, 'property', 'field')
                girProperty._tsDoc = this.getTsDoc(girProperty)
                girProperty._tsDoc.tags.push(...this.getTsDocGirElementTags(girProperty._tsType, girProperty._girType))

                const localName = this.checkOrSetLocalName(girProperty, localNames, 'property')
                if (localName?.added && localName.property) {
                    girProperties.push(localName.property)
                }
            }
        }
        return girProperties
    }

    private getClassPropertyNames(
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
                if (girProperty.$.name && !propertyNames.includes(girProperty.$.name)) {
                    propertyNames.push(girProperty.$.name)
                }
            }
        }

        for (const fullSymName of Object.keys(girClass._tsData.extends)) {
            const girProperties = girClass._tsData.extends[fullSymName]?.properties
            if (girProperties.length > 0) {
                for (const girProperty of girProperties) {
                    if (!girElementIsIntrospectable(girProperty)) continue
                    if (girProperty.$.name && !propertyNames.includes(girProperty.$.name)) {
                        propertyNames.push(girProperty.$.name)
                    }
                }
            }
        }

        for (const fullSymName of Object.keys(girClass._tsData.implements)) {
            const girProperties = girClass._tsData.implements[fullSymName]?.properties
            if (girProperties.length > 0) {
                for (const girProperty of girProperties) {
                    if (!girElementIsIntrospectable(girProperty)) continue
                    if (girProperty._tsData && girProperty.$.name && !propertyNames.includes(girProperty.$.name)) {
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
        const girConstructors: GirConstructorElement[] = []
        // JS constructor(s)
        if (girClass._tsData?.isDerivedFromGObject) {
            // TODO see generateConstructorAndStaticFunctions.generateConstructorAndStaticFunctions
        } else {
            const constructors = girClass.constructor
            if (Array.isArray(constructors)) {
                for (const girConstructor of constructors) {
                    if (!girElementIsIntrospectable(girConstructor)) continue
                    if (!girClass._tsData?.name) continue

                    girConstructor._tsData = this.getConstructorFunctionTsData(girClass._tsData?.name, girConstructor)

                    if (!girConstructor._tsData?.name || girConstructor._tsData.name !== 'new') continue

                    girConstructors.push(girConstructor)
                }
            }
        }

        return girConstructors
    }

    private getClassVirtualMethodsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        const girVMethods = this.getOverloadableMethodsTsData(girClass, (girIface) => {
            const girMethods: GirVirtualMethodElement[] = []

            const methods: GirVirtualMethodElement[] = (girIface as GirClassElement)['virtual-method'] || []

            for (const girVMethod of methods) {
                if (!girElementIsIntrospectable(girVMethod)) continue

                girVMethod._tsData = this.getFunctionTsData(
                    girVMethod,
                    'virtual',
                    /* isStatic */
                    false,
                    /* isArrowType */
                    false,
                    /* isGLobal */
                    false,
                    /* isVirtual */
                    true,
                    /* overrideReturnType */
                    null,
                )
                girVMethod._tsDoc = this.getTsDoc(girVMethod)
                girVMethod._tsDoc.tags.push(...this.getTsDocGirElementTags(girVMethod._tsType, girVMethod._girType))
                girVMethod._tsDoc.tags.push(...this.getTsDocInParamTags(girVMethod._tsData?.inParams))

                if (girVMethod?._tsData?.name) {
                    girMethods.push(girVMethod)
                }
            }

            return methods
        }) as GirVirtualMethodElement[]
        return girVMethods
    }

    /**
     *
     * @param girClass This is the class / interface the `parentClass` implements signals from
     * @param girParentClass The main class which implements the signals from `girClass`
     * @returns
     */
    private getClassSignalsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        girParentClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        const girSignals: GirSignalElement[] = []
        if (!girParentClass._tsData) {
            this.log.warn(NO_TSDATA('getClassSignalsTsData'))
        }

        const signals: GirSignalElement[] =
            (girClass as GirClassElement | GirInterfaceElement).signal ||
            (girClass as GirClassElement | GirInterfaceElement)['glib:signal'] ||
            []
        if (signals) {
            for (const girSignal of signals) {
                girSignal._tsData = this.getSignalFuncTsData(girSignal, girParentClass)
                girSignal._tsDoc = this.getTsDoc(girSignal)
                girSignal._tsDoc.tags.push(...this.getTsDocGirElementTags(girSignal._tsType, girSignal._girType))
                girSignal._tsDoc.tags.push(...this.getTsDocInParamTags(girSignal._tsData?.inParams))

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

        return {
            qualifiedParentName,
            localParentName,
            type,
            parentName,
        }
    }

    private getClassParents(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        const parents: ClassParent[] = []

        if (!girClass._module?.namespace) {
            throw new Error('Namespace not found!')
        }

        const prerequisites = (girClass as GirInterfaceElement)?.prerequisite
        const implmts = (girClass as GirInterfaceElement)?.implements

        if (implmts) {
            for (const implement of implmts) {
                const parentName = implement.$?.name
                if (!parentName) continue
                parents.push(this.getClassParentObject(parentName, girClass._module.namespace, 'implements'))
            }
        }

        if (prerequisites) {
            for (const prerequisite of prerequisites) {
                const parentName = prerequisite.$?.name
                if (!parentName) continue
                parents.push(this.getClassParentObject(parentName, girClass._module.namespace, 'prerequisite'))
            }
        }

        if ((girClass as GirClassElement).$.parent) {
            const parentName = (girClass as GirClassElement).$.parent
            if (parentName) parents.push(this.getClassParentObject(parentName, girClass._module.namespace, 'parent'))
        }

        // Please reply: Do all interfaces always inherit from Gobject?
        // If this is a interface and GObject.Object is not in the parents array add GObject.Object to the parents
        if (
            girClass._girType === 'interface' &&
            !parents.find((parent) => parent.qualifiedParentName === 'GObject.Object')
        ) {
            parents.push({
                qualifiedParentName: 'GObject.Object',
                localParentName: girClass._module.namespace === 'GObject' ? 'Object' : 'GObject.Object',
                type: 'parent',
                parentName: 'Object',
            })
        }

        return parents
    }

    private setClassBaseTsData(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
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

        const parents = this.getClassParents(girClass)

        girClass._tsData = {
            name: className,
            qualifiedName,
            parents,
            namespace,
            version,
            isAbstract: this.isAbstractClass(girClass),
            localNames: {},
            constructPropNames: {},
            inheritConstructPropInterfaceNames: [],
            constructPropInterfaceName: `${className}_ConstructProps`,
            fields: [],
            properties: [],
            constructProps: [],
            propertyNames: [],
            methods: [],
            virtualMethods: [],
            constructors: [],
            staticFunctions: [],
            signals: [],
            generics: [],
            extends: {},
            implements: {},
        }

        // TODO handle multiple parents?
        if (girClass._tsData.parents.length) {
            girClass._tsData.inheritConstructPropInterfaceNames = girClass._tsData.parents.map(
                (parent) => parent.localParentName + '_ConstructProps',
            )
        }

        girClass._tsData.isDerivedFromGObject = this.isDerivedFromGObject(girClass)

        return girClass._tsData
    }

    private setClassTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): TsClass | undefined {
        if (!girClass?.$?.name) return undefined

        if (girClass._tsData) {
            return girClass._tsData
        }

        girClass._tsData = this.setClassBaseTsData(girClass)
        girClass._tsDoc = this.getTsDoc(girClass)
        girClass._tsDoc.tags.push(...this.getTsDocGirElementTags(girClass._tsType, girClass._girType))

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
        girClass._tsData.staticFunctions.push(...this.getClassStaticFunctionsTsData(girClass, false))

        girClass._tsData.fields.push(...this.getClassFieldsTsData(girClass, girClass._tsData.localNames))

        girClass._tsData.properties.push(...this.getClassPropertiesTsData(girClass, girClass._tsData.localNames))
        girClass._tsData.methods.push(...this.getClassMethodsTsData(girClass, girClass._tsData.localNames))
        girClass._tsData.virtualMethods.push(...this.getClassVirtualMethodsTsData(girClass))
        girClass._tsData.signals.push(...this.getClassSignalsTsData(girClass, girClass))

        // Copy fields, properties, methods, virtual methods and signals from inheritance tree
        this.traverseInheritanceTree(girClass, (extendsCls, depth) => {
            if (!girClass._tsData || !extendsCls._tsData || !extendsCls._fullSymName || !extendsCls._module) {
                return
            }

            if (girClass._fullSymName === extendsCls._fullSymName) {
                return
            }

            const key = extendsCls._module.packageName + '.' + extendsCls._fullSymName
            if (girClass._tsData.extends[key]) return

            girClass._tsData.extends[key] = {
                depth,
                class: extendsCls,
                fields: [],
                properties: [],
                methods: [],
                virtualMethods: [],
                signals: [],
            }

            girClass._tsData.extends[key].fields.push(
                ...this.getClassFieldsTsData(extendsCls, girClass._tsData.localNames),
            )
            girClass._tsData.extends[key].properties.push(
                ...this.getClassPropertiesTsData(extendsCls, girClass._tsData.localNames),
            )
            girClass._tsData.extends[key].methods.push(
                ...this.getClassMethodsTsData(extendsCls, girClass._tsData.localNames),
            )
            girClass._tsData.extends[key].virtualMethods.push(...this.getClassVirtualMethodsTsData(extendsCls))
            girClass._tsData.extends[key].signals.push(...this.getClassSignalsTsData(extendsCls, girClass))
        })

        // Copy properties, methods and signals from implemented interface
        this.forEachInterface(girClass, (iface, depth) => {
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
                interface: iface,
                properties: [],
                constructProps: [],
                methods: [],
                signals: [],
            }

            if (girClass._tsData.isDerivedFromGObject) {
                girClass._tsData.implements[key].constructProps.push(
                    ...this.getClassConstructPropsTsData(iface, girClass._tsData.constructPropNames),
                )
            }

            girClass._tsData.implements[key].properties.push(
                ...this.getClassPropertiesTsData(iface, girClass._tsData.localNames),
            )
            girClass._tsData.implements[key].methods.push(
                ...this.getClassMethodsTsData(iface, girClass._tsData.localNames),
            )
            girClass._tsData.implements[key].signals.push(...this.getClassSignalsTsData(iface, girClass))
        })

        this.inject.toClass(girClass)

        girClass._tsData.propertyNames.push(...this.getClassPropertyNames(girClass))

        this.fixConflicts(girClass)

        return girClass._tsData
    }

    private isDerivedFromGObject(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): boolean {
        if (typeof girClass._tsData?.isDerivedFromGObject === 'boolean') return girClass._tsData.isDerivedFromGObject
        let ret = false
        this.traverseInheritanceTree(girClass, (cls) => {
            if (cls._tsData?.isDerivedFromGObject === true || cls._fullSymName === 'GObject.Object') {
                ret = true
            }
        })
        this.forEachInterface(girClass, (iface) => {
            if (iface._tsData?.isDerivedFromGObject === true || iface._fullSymName === 'GObject.Object') {
                ret = true
            }
        })
        return ret
    }

    private getClassParent(parent: ClassParent) {
        let parentPtr: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement | null = null
        if (this.symTable.get(this.allDependencies, parent.qualifiedParentName)) {
            parentPtr = (this.symTable.get(this.allDependencies, parent.qualifiedParentName) as GirClassElement) || null
        }

        if (!parentPtr && parent.parentName == 'Object') {
            parentPtr = (this.symTable.getByHand('GObject-2.0.GObject.Object') as GirClassElement) || null
        }

        return parentPtr
    }

    private traverseInheritanceTree(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        callback: (
            girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
            depth: number,
        ) => void,
        depth = 0,
        recursive = true,
    ): void {
        if (!girClass.$.name) return
        if (!girClass._tsData) girClass._tsData = this.setClassTsData(girClass)
        if (!girClass._tsData) return
        if (!girClass._tsDoc) {
            girClass._tsDoc = this.getTsDoc(girClass)
            girClass._tsDoc.tags.push(...this.getTsDocGirElementTags(girClass._tsType, girClass._girType))
        }

        callback(girClass, depth)

        const parents = girClass._tsData.parents
        if (parents.length) {
            ++depth
            for (const parent of parents) {
                if (!parent.parentName || parent.type !== 'parent') {
                    continue
                }

                const parentPtr = this.getClassParent(parent)

                if (parentPtr && recursive) {
                    this.traverseInheritanceTree(parentPtr, callback, depth, recursive)
                }
            }
        }
    }

    private forEachInterface(
        girIface: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        callback: (
            cls: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
            depth: number,
        ) => void,
        recursive = true,
        depth = 0,
    ): void {
        if (!girIface.$.name) return
        if (!girIface._tsData) girIface._tsData = this.setClassTsData(girIface)
        if (!girIface._tsData) return
        if (!girIface._tsDoc) {
            girIface._tsDoc = this.getTsDoc(girIface)
            girIface._tsDoc.tags.push(...this.getTsDocGirElementTags(girIface._tsType, girIface._girType))
        }

        const parents = girIface._tsData.parents
        if (parents.length) {
            ++depth
            for (const parent of parents) {
                if (!parent.parentName || parent.type === 'parent') {
                    continue
                }

                const parentPtr = this.getClassParent(parent)

                if (parentPtr) {
                    callback(parentPtr as GirInterfaceElement, depth)
                    // iface's prerequisite is also an interface, or it's
                    // a class and we also want to recurse classes

                    if (recursive) this.forEachInterface(parentPtr as GirInterfaceElement, callback, recursive, depth)
                }
            }
        }
    }

    private forEachInterfaceAndSelf(
        e: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        callback: (cls: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) => void,
    ) {
        callback(e)
        this.forEachInterface(e, callback)
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
            if (isEqual(localNames[name][type]?._tsData, girElement._tsData)) {
                return null
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

    /**
     * Some classes implement interfaces which are also implemented by a superclass
     * and we need to exclude those in some circumstances
     * @param girClass
     * @param girIface
     */
    private interfaceIsDuplicate(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        girIface: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): boolean {
        const ifaceName = girIface._fullSymName
        if (!ifaceName) {
            return false
        }
        let rpt = false
        let bottom = true
        this.traverseInheritanceTree(girClass, (sub) => {
            if (rpt) return
            if (bottom) {
                bottom = false
                return
            }
            if ((sub as GirInterfaceElement).prerequisite) {
                this.forEachInterface(
                    sub,
                    (element) => {
                        if (rpt) return
                        if (element._fullSymName === ifaceName) {
                            rpt = true
                        }
                    },
                    true,
                )
            }
        })
        return rpt
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
     * Returns true if `p1s` and `p2s` are compatible with each other.
     * The parameters must have the same length and the same type but can have different names
     * @param p1s
     * @param p2s
     * @returns
     */
    private paramsMatch(p1s: GirCallableParamElement[], p2s: GirCallableParamElement[]) {
        if (p1s.length !== p2s.length) {
            return false
        }

        for (const [i, p1] of p1s.entries()) {
            // Ignore parameter name, just check the types
            if (p2s[i]?._tsData?.type !== p1._tsData?.type) {
                return false
            }
        }

        return true
    }

    /**
     * Returns true if `f1` and `f2` are compatible with each other.
     * The parameters must have the same length and the same type but can have different names
     * @param f1
     * @param f2
     * @returns
     */
    private functionMatch(
        f1: GirFunctionElement | GirConstructorElement | GirMethodElement | GirVirtualMethodElement,
        f2: GirFunctionElement | GirConstructorElement | GirMethodElement | GirVirtualMethodElement,
    ) {
        if (!f1._tsData || !f2._tsData) throw new Error(NO_TSDATA('functionMatch'))

        if (!isEqual(f1._tsData.returnTypes, f2._tsData.returnTypes)) {
            return false
        }

        if (!this.paramsMatch(f1._tsData.inParams, f2._tsData.inParams)) {
            return false
        }

        if (!this.paramsMatch(f1._tsData.outParams, f2._tsData.outParams)) {
            return false
        }

        return true
    }

    /**
     * See comment for addOverloadableFunctions.
     * Returns `true` if (a definition from) `func` is added to map to satisfy
     * an overload, but `false` if it was forced
     * @param map
     * @param girFunc
     * @param force
     */
    private mergeOverloadableFunctions(
        map: FunctionMap,
        girFunc: GirFunctionElement | GirConstructorElement | GirMethodElement | GirVirtualMethodElement,
        force = true,
    ) {
        let result = false
        if (!girFunc._tsData?.name) return result

        const oldFunc = map.get(girFunc._tsData.name)
        if (!oldFunc?._tsData || !girFunc._tsData) {
            if (force && girFunc._tsData) map.set(girFunc._tsData.name, girFunc)
            return result
        }

        const isEqual = this.functionMatch(girFunc, oldFunc)
        if (!isEqual) {
            oldFunc._tsData.overloads.push(girFunc)
            result = true
        }
        return result
    }

    /**
     * `fnMap` values are equivalent to the second element of a TsFunction.
     * If an entry in `fnMap` is changed, its name is added to `explicits` (set of names which must be declared).
     * If `force` is `true`, every function of `f2` is added to `fnMap` and overloads even
     * if it doesn't already contain a function of the same name.
     * @param fnMap
     * @param explicits
     * @param funcs
     * @param force
     */
    private addOverloadableFunctions(
        fnMap: FunctionMap,
        explicits: Set<string>,
        funcs: Array<GirConstructorElement | GirFunctionElement | GirMethodElement | GirVirtualMethodElement>,
        force = false,
    ) {
        for (const func of funcs) {
            if (!func?._tsData?.name) continue
            if (this.mergeOverloadableFunctions(fnMap, func) || force) {
                explicits.add(func._tsData.name)
            }
        }
    }

    private functionMapToArray<
        T = GirFunctionElement | GirConstructorElement | GirMethodElement | GirVirtualMethodElement,
    >(fnMap: FunctionMap<T>, explicits: Set<string>) {
        const girFunctions: Array<T> = []
        for (const key of Array.from(explicits.values())) {
            const func = fnMap.get(key)
            if (func) girFunctions.push(func)
        }
        return girFunctions
    }

    private getImplementedInterfaceProperties(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('getImplementedInterfaceProperties'))

        const properties: GirPropertyElement[] = []
        const fields: GirFieldElement[] = []

        for (const ifaceFullSymName of Object.keys(girClass._tsData.implements)) {
            const implementation = girClass._tsData.implements[ifaceFullSymName].interface
            if (implementation._tsData?.properties.length) properties.push(...implementation._tsData?.properties)
            if (implementation._tsData?.fields.length) fields.push(...implementation._tsData?.fields)
        }

        return {
            properties,
            fields,
        }
    }

    private getImplementedInterfaceMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('getImplementedInterfaceMethods'))

        const methods: GirMethodElement[] = []
        const virtualMethods: GirVirtualMethodElement[] = []

        for (const ifaceFullSymName of Object.keys(girClass._tsData.implements)) {
            const implementation = girClass._tsData.implements[ifaceFullSymName].interface
            if (implementation._tsData?.methods.length) methods.push(...implementation._tsData?.methods)
            if (implementation._tsData?.methods.length) virtualMethods.push(...implementation._tsData?.virtualMethods)
        }

        return {
            methods,
            virtualMethods,
        }
    }

    private getExtendedClassProperties(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('getExtendedClassProperties'))

        const properties: GirPropertyElement[] = []
        const fields: GirFieldElement[] = []

        for (const ifaceFullSymName of Object.keys(girClass._tsData.extends)) {
            const inherit = girClass._tsData.extends[ifaceFullSymName].class
            if (inherit._tsData?.properties.length) properties.push(...inherit._tsData?.properties)
            if (inherit._tsData?.fields.length) fields.push(...inherit._tsData?.fields)
        }

        return {
            properties,
            fields,
        }
    }

    private getExtendedClassMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('getExtendedClassMethods'))

        const methods: GirMethodElement[] = []
        const virtualMethods: GirVirtualMethodElement[] = []

        for (const ifaceFullSymName of Object.keys(girClass._tsData.extends)) {
            const inherit = girClass._tsData.extends[ifaceFullSymName].class
            if (inherit._tsData?.methods.length) methods.push(...inherit._tsData?.methods)
            if (inherit._tsData?.virtualMethods.length) virtualMethods.push(...inherit._tsData?.virtualMethods)
        }

        return {
            methods,
            virtualMethods,
        }
    }

    /**
     * With multiple implementations or a single inherit it can happen that the interfaces / parent have the same properties with different types.
     * We merge these types here to solve this problem.
     * @param girClass
     */
    private fixPropertyConflicts(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('fixPropertyConflicts'))

        // Do not pass a reference of the array here
        const properties = [
            ...girClass._tsData.properties,
            ...this.getImplementedInterfaceProperties(girClass).properties,
            ...this.getExtendedClassProperties(girClass).properties,
        ]

        const fields = [
            ...girClass._tsData.fields,
            ...this.getImplementedInterfaceProperties(girClass).fields,
            ...this.getExtendedClassProperties(girClass).fields,
        ]

        const propsAndFields = [...properties, ...fields]

        for (const prop1 of propsAndFields) {
            for (const prop2 of propsAndFields) {
                if (
                    prop1._tsData &&
                    prop2._tsData &&
                    prop1._tsData.name === prop2._tsData.name &&
                    !isEqual(prop1._tsData, prop2._tsData)
                ) {
                    // temporary solution, will be solved differently later
                    prop1._tsData.hasConflict = true
                    prop2._tsData.hasConflict = true
                }
            }
        }
    }

    /**
     * With multiple implementations or a single inherit it can happen that the interfaces / parent have the same properties with different types.
     * We merge these types here to solve this problem.
     * @param girClass
     */
    private fixMethodConflicts(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        if (!girClass._tsData) throw new Error(NO_TSDATA('fixMethodConflicts'))

        // Do not pass a reference of the array here
        const methods = [
            ...girClass._tsData.methods,
            ...this.getImplementedInterfaceMethods(girClass).methods,
            ...this.getExtendedClassMethods(girClass).methods,
        ]

        const virtualMethods = [
            ...girClass._tsData.methods,
            ...this.getImplementedInterfaceMethods(girClass).virtualMethods,
            ...this.getExtendedClassMethods(girClass).virtualMethods,
        ]

        for (const method1 of methods) {
            for (const method2 of methods) {
                if (
                    method1._tsData &&
                    method2._tsData &&
                    method1._tsData.name === method2._tsData.name &&
                    !this.functionMatch(method1, method2)
                ) {
                    // temporary solution, will be solved differently later
                    method1._tsData.hasConflict = true
                    method2._tsData.hasConflict = true
                }
            }
        }

        for (const method1 of virtualMethods) {
            for (const method2 of virtualMethods) {
                if (
                    method1._tsData &&
                    method2._tsData &&
                    method1._tsData.name === method2._tsData.name &&
                    !this.functionMatch(method1, method2)
                ) {
                    // temporary solution, will be solved differently later
                    method1._tsData.hasConflict = true
                    method2._tsData.hasConflict = true
                }
            }
        }
    }

    private fixConflicts(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        this.fixPropertyConflicts(girClass)
        // this.fixFieldConflicts(girClass)
        this.fixMethodConflicts(girClass)
    }

    /**
     * Used for <method> and <virtual-method>
     * @param girClass
     * @param getMethods
     * @param isStatic
     */
    private getOverloadableMethodsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        getMethods: (
            girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        ) => Array<GirConstructorElement | GirFunctionElement | GirMethodElement | GirVirtualMethodElement>,
        isStatic = false,
    ) {
        const fnMap: FunctionMap = new Map()
        const explicits = new Set<string>()
        const funcs = getMethods(girClass)
        this.addOverloadableFunctions(fnMap, explicits, funcs, true)
        // Have to implement methods from girClass' interfaces
        this.forEachInterface(
            girClass,
            (iface) => {
                if (!this.interfaceIsDuplicate(girClass, iface)) {
                    const funcs = getMethods(iface)
                    this.addOverloadableFunctions(fnMap, explicits, funcs, true)
                }
            },
            false,
        )

        let bottom = true

        const onParent = (cls: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) => {
            if (bottom) {
                bottom = false
                return
            }
            if (isStatic) {
                const funcs = getMethods(cls)
                this.addOverloadableFunctions(fnMap, explicits, funcs, false)
            } else {
                let self = true
                this.forEachInterfaceAndSelf(cls, (iface) => {
                    if (self || this.interfaceIsDuplicate(girClass, iface)) {
                        const funcs = getMethods(iface)
                        this.addOverloadableFunctions(fnMap, explicits, funcs, false)
                    }
                    self = false
                })
            }
        }

        // Check for overloads among all inherited methods
        this.traverseInheritanceTree(girClass, onParent)
        return this.functionMapToArray(fnMap, explicits)
    }

    private getStaticFunctions(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        getter: (
            e: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        ) => Array<GirConstructorElement | GirFunctionElement | GirMethodElement>,
    ) {
        return this.getOverloadableMethodsTsData(girClass, getter, true) as Array<
            GirConstructorElement | GirFunctionElement | GirMethodElement
        >
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
        if (girClass.function) {
            for (const girFunction of girClass.function) {
                girFunction._tsData = this.getFunctionTsData(
                    girFunction,
                    'function',
                    /* isStatic */
                    true,
                    /* isArrowType */
                    false,
                    /* isGlobal */
                    false,
                    /* isVirtual */
                    false,
                    /* overrideReturnType */
                    null,
                )
                girFunction._tsDoc = this.getTsDoc(girFunction)
                girFunction._tsDoc.tags.push(...this.getTsDocGirElementTags(girFunction._tsType, girFunction._girType))
                girFunction._tsDoc.tags.push(...this.getTsDocInParamTags(girFunction._tsData?.inParams))

                if (!girFunction._tsData?.name || girFunction._tsData?.name === 'new') continue

                girFunctions.push(girFunction)
            }
        }
        return girFunctions
    }

    /**
     * Static methods, <constructor> and <function>
     * @param girClass
     * @param useReference This value should be `false` for inherited and implemented classes / interfaces.
     * Otherwise other modules would overwrite the return value of the constructor methods
     */
    private getClassStaticFunctionsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        useReference = false,
    ) {
        const girStaticFuncs: Array<GirFunctionElement | GirConstructorElement | GirMethodElement> = []

        girStaticFuncs.push(
            ...this.getStaticFunctions(girClass, (cls) => {
                return this.getStaticConstructors(cls, girClass, useReference)
            }),
        )
        girStaticFuncs.push(
            ...this.getStaticFunctions(girClass, (cls) => {
                return this.getOtherStaticFunctions(cls)
            }),
        )
        girStaticFuncs.push(
            ...this.getStaticFunctions(girClass, (cls) => {
                return this.getClassRecordMethods(cls)
            }),
        )

        return girStaticFuncs
    }

    private setModuleTsData() {
        if (this.ns.enumeration) {
            for (const girEnum of this.ns.enumeration) {
                if (girEnum.member) {
                    for (const girEnumMember of girEnum.member) {
                        girEnumMember._tsData = this.getEnumerationMemberTsData(girEnumMember)
                        girEnumMember._tsDoc = this.getTsDoc(girEnumMember)
                    }
                }
                girEnum._tsData = this.getEnumerationTsData(girEnum)
                this.fixEnumerationDuplicateIdentifier(girEnum)
                girEnum._tsDoc = this.getTsDoc(girEnum)
            }
        }

        if (this.ns.bitfield)
            for (const girBitfield of this.ns.bitfield) {
                if (girBitfield.member)
                    for (const girEnumMember of girBitfield.member) {
                        girEnumMember._tsData = this.getEnumerationMemberTsData(girEnumMember)
                        girEnumMember._tsDoc = this.getTsDoc(girEnumMember)
                    }
                girBitfield._tsData = this.getEnumerationTsData(girBitfield)
                this.fixEnumerationDuplicateIdentifier(girBitfield)
                girBitfield._tsDoc = this.getTsDoc(girBitfield)
                girBitfield._tsDoc.tags.push(...this.getTsDocGirElementTags(girBitfield._tsType, girBitfield._girType))
            }

        if (this.ns.constant)
            for (const girConst of this.ns.constant) {
                girConst._tsData = this.getConstantTsData(girConst)
                girConst._tsDoc = this.getTsDoc(girConst)
            }

        if (this.ns.function)
            for (const girFunc of this.ns.function) {
                girFunc._tsData = this.getFunctionTsData(
                    girFunc,
                    'function',
                    /* isStatic */
                    false,
                    /* isArrowType */
                    false,
                    /* isGlobal */
                    true,
                    /* isVirtual */
                    false,
                    /* overrideReturnType */
                    null,
                )
            }

        if (this.ns.callback)
            for (const girCallback of this.ns.callback) {
                girCallback._tsData = this.getFunctionTsData(girCallback, 'callback', false, true, false, false, null)
                girCallback._tsDoc = this.getTsDoc(girCallback)
                girCallback._tsDoc.tags.push(...this.getTsDocGirElementTags(girCallback._tsType, girCallback._girType))
                girCallback._tsDataInterface = this.getCallbackInterfaceTsData(girCallback)
            }

        if (this.ns.interface)
            for (const girIface of this.ns.interface) {
                girIface._tsData = this.setClassTsData(girIface)
                girIface._tsDoc = this.getTsDoc(girIface)
                girIface._tsDoc.tags.push(...this.getTsDocGirElementTags(girIface._tsType, girIface._girType))
            }

        if (this.ns.class)
            for (const girClass of this.ns.class) {
                girClass._tsData = this.setClassTsData(girClass)
                girClass._tsDoc = this.getTsDoc(girClass)
            }

        if (this.ns.record)
            for (const girRecord of this.ns.record) {
                girRecord._tsData = this.setClassTsData(girRecord)
                girRecord._tsDoc = this.getTsDoc(girRecord)
            }

        if (this.ns.union)
            for (const girUnion of this.ns.union) {
                girUnion._tsData = this.setClassTsData(girUnion)
                girUnion._tsDoc = this.getTsDoc(girUnion)
            }

        if (this.ns.alias) {
            for (const girAlias of this.ns.alias) {
                // GType is not a number in GJS
                if (this.packageName !== 'GObject-2.0' || girAlias.$.name !== 'Type')
                    girAlias._tsData = this.getAliasTsData(girAlias)
                girAlias._tsDoc = this.getTsDoc(girAlias)
            }
        }
    }

    private girToTsType(girType: 'alias', isStatic?: boolean): 'type'
    private girToTsType(girType: 'enum' | 'bitfield', isStatic?: boolean): 'enum'
    private girToTsType(girType: 'callback', isStatic?: boolean): 'interface'
    private girToTsType(girType: 'class' | 'interface' | 'union' | 'record', isStatic?: boolean): 'class'
    private girToTsType(girType: 'constant', isStatic?: boolean): 'constant'
    private girToTsType(girType: 'constructor', isStatic?: boolean): 'static'
    private girToTsType(girType: 'method' | 'virtual', isStatic?: boolean): 'method'
    private girToTsType(girType: 'signal' | 'method', isStatic?: boolean): 'event-methods'
    private girToTsType(girType: 'static', isStatic: true): 'static'
    private girToTsType(girType: 'function', isStatic: false): 'function'
    private girToTsType(
        girType: 'function' | 'method' | 'virtual' | 'constructor' | 'callback' | 'static',
        isStatic?: boolean,
    ): 'function' | 'method' | 'interface' | 'static'
    private girToTsType(girType: TypeGirElement, isStatic?: boolean): TypeTsElement
    private girToTsType(girType: TypeGirElement, isStatic?: boolean): TypeTsElement {
        switch (girType) {
            case 'alias':
                return 'type'
            case 'enum':
            case 'bitfield':
                return 'enum'
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
                return 'static'
            case 'method':
            case 'virtual':
                return 'method'
            case 'signal':
                return 'event-methods'
            case 'static':
                return 'static'
            case 'function':
                if (typeof isStatic === 'undefined') {
                    throw new Error(
                        'You must specify if the function is static or not if you want to convert the type of a function!',
                    )
                }
                if (isStatic) {
                    return 'static'
                }
                return 'function'
        }
        throw new Error(`Unknown gir type: "${String(girType)}"!`)
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
        if (!resValue && fullTypeName && FULL_TYPE_MAP(this.config.environment, this.packageName, fullTypeName)) {
            resValue = FULL_TYPE_MAP(this.config.environment, this.packageName, fullTypeName) || ''
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
        if (this.ns.bitfield) this.annotateAndRegisterGirElement(this.ns.bitfield, 'bitfield')
        if (this.ns.callback) this.annotateAndRegisterGirElement(this.ns.callback, 'callback')
        if (this.ns.class) this.annotateAndRegisterGirElement(this.ns.class, 'class')
        if (this.ns.constant) this.annotateAndRegisterGirElement(this.ns.constant, 'constant')
        if (this.ns.enumeration) this.annotateAndRegisterGirElement(this.ns.enumeration, 'enum')
        if (this.ns.function) this.annotateAndRegisterGirElement(this.ns.function, 'function')
        if (this.ns.interface) this.annotateAndRegisterGirElement(this.ns.interface, 'interface')
        if (this.ns.record) this.annotateAndRegisterGirElement(this.ns.record, 'record')
        if (this.ns.union) this.annotateAndRegisterGirElement(this.ns.union, 'union')
        if (this.ns.alias) this.annotateAndRegisterGirElement(this.ns.alias, 'alias')

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

        if (this.ns.function) this.annotateFunctions(this.ns.function, 'function')
        if (this.ns.callback) this.annotateFunctions(this.ns.callback, 'callback')

        if (this.ns.constant) this.annotateVariables(this.ns.constant, 'constant')
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
    public start() {
        this.setModuleTsData()
    }
}
