/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import TemplateProcessor from './template-processor.js'
import { Transformation, C_TYPE_MAP, FULL_TYPE_MAP, POD_TYPE_MAP, POD_TYPE_MAP_ARRAY } from './transformation.js'
import { Logger } from './logger.js'
import { isEqual, find, stripParamNames, findFileInDirs, splitModuleName, isCommentLine } from './utils.js'
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
    GirPropertyElement,
    GirUnionElement,
    PartOfModule,
    PartOfClass,
    TypeArraySuffix,
    TypeNullableSuffix,
    TypeSuffix,
    GirConstructorElement,
    InheritanceTable,
    ParsedGir,
    GenerateConfig,
    DescProperty,
    FunctionMap,
    LocalNameCheck,
    LocalNameType,
    LocalName,
    LocalNames,
    ClassDetails,
    GirInterfaceElement,
    DescFunction,
    DescParameter,
    DescVar,
} from './types/index.js'

import { MAXIMUM_RECURSION_DEPTH, STATIC_NAME_ALREADY_EXISTS } from './constants.js'

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
    extends?: string
    log: Logger
    templateProcessor: TemplateProcessor

    /**
     * To prevent constants from being exported twice, the names already exported are saved here for comparison.
     * Please note: Such a case is only known for Zeitgeist-2.0 with the constant "ATTACHMENT"
     */
    constNames: { [varName: string]: DescVar } = {}

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

        this.templateProcessor = new TemplateProcessor(
            {
                name: this.namespace,
                version: this.version,
                importName: this.importName,
            },
            this.packageName,
            this.config,
        )

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

    private annotateFunctionArguments(
        girFunc: GirFunctionElement | GirConstructorElement | GirVirtualMethodElement,
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
        girFunc: GirFunctionElement | GirConstructorElement | GirVirtualMethodElement,
    ): void {
        const retVals = girFunc['return-value']
        if (retVals && girFunc._fullSymName)
            for (const retVal of retVals) {
                retVal._module = this
                if (retVal.$ && retVal.$.name) {
                    retVal._fullSymName = `${girFunc._fullSymName}.${retVal.$.name}`
                }
            }
    }

    private annotateFunctions(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girFuncs: GirFunctionElement[] | GirConstructorElement[] | GirVirtualMethodElement[] | GirSignalElement[],
    ): void {
        if (Array.isArray(girFuncs))
            for (const girFunc of girFuncs) {
                if (girFunc?.$?.name) {
                    girFunc._class = girClass || undefined
                    const nsName = girClass ? girClass._fullSymName : this.namespace
                    if (nsName) girFunc._fullSymName = `${nsName}.${girFunc.$.name}`
                    this.annotateFunctionArguments(girFunc)
                    this.annotateFunctionReturn(girFunc)
                }
            }
    }

    private annotateVariables(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girVars?: GirPropertyElement[] | GirFieldElement[],
    ): void {
        if (girVars)
            for (const girVar of girVars) {
                const nsName = girClass ? girClass._fullSymName : this.namespace
                girVar._module = this
                if (girClass) {
                    girVar._class = girClass || undefined
                }

                if (girVar.$ && girVar.$.name && nsName) {
                    girVar._fullSymName = `${nsName}.${girVar.$.name}`
                }
            }
    }

    private loadTypesInternal(
        elements?:
            | GirBitfieldElement[]
            | GirCallbackElement[]
            | GirClassElement[]
            | GirConstantElement[]
            | GirEnumElement[]
            | GirFunctionElement[]
            | GirInterfaceElement[]
            | GirRecordElement[]
            | GirUnionElement[]
            | GirAliasElement[],
    ): void {
        if (elements) {
            for (const element of elements) {
                if (element?.$ && element.$.name) {
                    if ((element as GirCallableParamElement | GirFunctionElement).$.introspectable) {
                        if (
                            !this.girBool(
                                (element as GirCallableParamElement | GirFunctionElement).$.introspectable,
                                true,
                            )
                        )
                            continue
                    }
                    const symName = `${this.namespace}.${element.$.name}`
                    if (this.symTable.get(this.allDependencies, symName)) {
                        this.log.warn(`Duplicate symbol: ${symName}`)
                    }

                    element._module = this
                    element._fullSymName = symName
                    this.symTable.set(this.allDependencies, symName, element)
                }
            }
        }
    }

    public loadTypes(): void {
        this.loadTypesInternal(this.ns.bitfield)
        this.loadTypesInternal(this.ns.callback)
        this.loadTypesInternal(this.ns.class)
        this.loadTypesInternal(this.ns.constant)
        this.loadTypesInternal(this.ns.enumeration)
        this.loadTypesInternal(this.ns.function)
        this.loadTypesInternal(this.ns.interface)
        this.loadTypesInternal(this.ns.record)
        this.loadTypesInternal(this.ns.union)
        this.loadTypesInternal(this.ns.alias)

        if (this.ns.callback) for (const func of this.ns.callback) this.annotateFunctionArguments(func)

        const girClasses: Array<GirClassElement | GirRecordElement | GirInterfaceElement> = [
            ...(this.ns.class || []),
            ...(this.ns.record || []),
            ...(this.ns.interface || []),
        ]

        for (const girClass of girClasses) {
            girClass._module = this
            girClass._fullSymName = `${this.namespace}.${girClass.$.name}`

            const constructors = girClass.constructor instanceof Array ? girClass.constructor : []
            const signals: GirSignalElement[] =
                (girClass as GirClassElement | GirInterfaceElement).signal || girClass['glib:signal'] || []
            const functions = girClass.function || []
            const methods = girClass.method || []
            const vMethods: GirVirtualMethodElement[] = girClass['virtual-method'] || []
            const properties = girClass.property
            const fields = girClass.field

            this.annotateFunctions(girClass, constructors)
            this.annotateFunctions(girClass, functions)
            this.annotateFunctions(girClass, methods)
            this.annotateFunctions(girClass, vMethods)
            this.annotateFunctions(girClass, signals)
            this.annotateVariables(girClass, properties)
            this.annotateVariables(girClass, fields)
        }

        if (this.ns.function) this.annotateFunctions(null, this.ns.function)

        if (this.ns.constant) this.annotateVariables(null, this.ns.constant)
    }

    public loadInheritance(inheritanceTable: InheritanceTable): void {
        // Class hierarchy
        for (const cls of this.ns.class ? this.ns.class : []) {
            let parent: string | null = null
            if (cls.$ && cls.$.parent) parent = cls.$.parent
            if (!parent) continue
            if (!cls._fullSymName) continue

            if (parent.indexOf('.') < 0) {
                parent = this.namespace + '.' + parent
            }
            const clsName = cls._fullSymName

            const arr: string[] = inheritanceTable[clsName] || []
            arr.push(parent)
            inheritanceTable[clsName] = arr
        }

        // Class interface implementations
        for (const cls of this.ns.class ? this.ns.class : []) {
            if (!cls._fullSymName) continue

            const names: string[] = []

            for (const i of cls.implements ? cls.implements : []) {
                if (i.$.name) {
                    let name: string = i.$.name
                    if (name.indexOf('.') < 0) {
                        name = cls._fullSymName.substring(0, cls._fullSymName.indexOf('.') + 1) + name
                    }
                    names.push(name)
                }
            }

            if (names.length > 0) {
                const clsName = cls._fullSymName
                const arr: string[] = inheritanceTable[clsName] || []
                inheritanceTable[clsName] = arr.concat(names)
            }
        }
    }

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
                resValue = fullTypeName.substring(this.namespace.length + 1)
                resValue = this.transformation.transformTypeName(resValue)
                // TODO check if resValue this is a class, enum, interface or unify the transformClassName method
                resValue = this.transformation.transformClassName(resValue)
                namespace = this.namespace
            } else {
                const resValues = fullTypeName.split('.')
                resValues.map((name) => this.transformation.transformTypeName(name))
                // TODO check if resValues[resValues.length - 1] this is a class, enum, interface or unify the transformClassName method
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

    private fullTypeLookup(
        girVar: GirCallableParamElement | GirCallableReturn | GirFieldElement | GirAliasElement,
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

        // Fully qualify our type name if need be
        if (!fullTypeName.includes('.')) {
            let tryFullTypeName = ``

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

            if (!resValue && girVar._class?._module?.namespace && girVar._class._module !== this) {
                tryFullTypeName = `${girVar._class._module.namespace}.${fullTypeName}`
                resValue = this.fullTypeLookupWithNamespace(tryFullTypeName).value
                if (resValue) {
                    fullTypeName = tryFullTypeName
                    namespace = girVar._class?._module?.namespace
                }
            }
        }

        if (!resValue && fullTypeName) {
            resValue = this.fullTypeLookupWithNamespace(fullTypeName).value
        }

        return {
            value: resValue,
            fullTypeName,
            namespace,
        }
    }

    private typeLookup(girVar: GirCallableReturn | GirAliasElement | GirFieldElement) {
        let type: GirType | null = null
        let fullTypeName: string | null = null
        let arr: TypeArraySuffix = ''
        let arrCType: string | undefined
        let nul: TypeNullableSuffix = ''
        let resValue = ''
        let namespace = ''
        let isFunction = false

        const collection = (girVar as GirCallableReturn | GirFieldElement).array
            ? (girVar as GirCallableReturn | GirFieldElement).array
            : girVar.type && /^GLib.S?List$/.test(girVar.type[0].$?.name || '')
            ? (girVar.type as GirArrayType[])
            : undefined

        if (collection && collection.length > 0) {
            const typeArray = collection[0].type
            if (collection[0].$) {
                const ea = collection[0].$
                arrCType = ea['c:type']
            }
            if (typeArray && typeArray.length > 0) {
                type = typeArray[0]
            }
            arr = '[]'
        } else if (girVar.type) {
            type = girVar.type[0]
        }

        if (girVar.$) {
            const nullable = this.paramIsNullable(girVar)
            if (nullable) {
                nul = ' | null'
            }
        }

        const suffix: TypeSuffix = (arr + nul) as TypeSuffix
        const cType = type?.$ ? type.$['c:type'] : arrCType
        fullTypeName = type?.$?.name || null
        const callbacks = (girVar as GirFieldElement).callback

        if (!resValue && callbacks?.length) {
            if (callbacks.length > 1) {
                // TODO
                this.log.warn('Ignore multiple callbacks!', callbacks)
            }
            const funcDesc = this.setFunctionDesc(callbacks[0], '', undefined, true, 0)
            if (funcDesc?.desc?.length) {
                if (funcDesc.desc.length > 1) {
                    this.log.warn('Ignore multiline function description!', funcDesc.desc)
                }
                fullTypeName = funcDesc.desc[0]
                isFunction = true
            }

            if (fullTypeName) {
                if (suffix.length) fullTypeName = '(' + fullTypeName + ')'
                resValue = fullTypeName
                isFunction = true
            }
        }

        if (!isFunction) {
            const res = this.fullTypeLookup(girVar, fullTypeName)
            if (res.value) {
                resValue = res.value
                fullTypeName = res.fullTypeName
                namespace = res.namespace
            }
        }

        if (!resValue && type?.$ && arr && type.$.name && POD_TYPE_MAP_ARRAY(this.config.environment)[type.$.name]) {
            resValue = POD_TYPE_MAP_ARRAY(this.config.environment)[type.$.name]
        }

        if (!resValue && type?.$ && type.$.name && POD_TYPE_MAP[type.$.name]) {
            resValue = POD_TYPE_MAP[type.$.name]
        }

        if (!resValue && cType && C_TYPE_MAP(cType)) {
            resValue = C_TYPE_MAP(cType) || ''
        }

        if (!resValue && cType && POD_TYPE_MAP[cType]) {
            resValue = POD_TYPE_MAP[cType]
        }

        if (!resValue) {
            resValue = 'any'
            const logName = fullTypeName || girVar.$.name || cType || ''
            this.log.warn(`Could not find type for "${logName}"`)
        }

        return {
            result: resValue + suffix,
            value: resValue,
            suffix,
            fullTypeName,
            namespace,
            isFunction,
        }
    }

    private girBool(boolStr: string | undefined, defaultVal = false): boolean {
        if (boolStr) {
            if (parseInt(boolStr) === 0) return false
            return true
        }
        return defaultVal
    }

    private getReturnType(girFunc: GirFunctionElement | GirConstructorElement) {
        let returnType = 'void'
        let outArrayLengthIndex = -1

        const girVar = girFunc['return-value']?.[0] || null
        if (girVar) {
            returnType = this.typeLookup(girVar).result
            outArrayLengthIndex = girVar.array && girVar.array[0].$?.length ? Number(girVar.array[0].$.length) : -1
        }

        return { returnType, outArrayLengthIndex }
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
     * Checks if the parameter is nullable or optional.
     * TODO Check if it makes sense to split this in `paramIsNullable` and `paramIsOptional`
     *
     * @param param Param to test
     *
     * @author realh
     * @see https://github.com/realh/ts-for-gjs/commit/e4bdba8d4ca279dfa4abbca413eaae6ecc6a81f8
     */
    private paramIsNullable(
        girVar: GirCallableParamElement | GirCallableReturn | GirAliasElement | GirFieldElement,
    ): boolean {
        const a = (girVar as GirCallableParamElement).$
        return a && (this.girBool(a.nullable) || this.girBool(a['allow-none']) || this.girBool(a.optional))
    }

    /**
     * Get the patches for a given namespace path, type and package name (including the version number)
     * @param packageName E.g. 'Gtk-3.0'
     * @param type E.g 'methods'
     * @param nsPath E.g. 'Gtk.MenuItem.activate'
     */
    private getPatches(packageName: string, type: 'methods' | 'constructorProperties', nsPath: string) {
        const packagePatches = typePatches[packageName]
        if (!packagePatches) {
            return undefined
        }

        const typePatch = packagePatches[type]
        if (!typePatch) {
            return undefined
        }

        return typePatch?.[nsPath] || undefined
    }

    /**
     * Get package name of a gir element
     */
    private getPackageName(element: PartOfClass | PartOfModule) {
        return (element as PartOfClass)._class?._module?.packageName || element._module?.packageName || this.packageName
    }

    private setParameterDesc(
        girParam: GirCallableParamElement,
        girParams: GirCallableParamElement[],
        paramNames: string[],
        skip: GirCallableParamElement[],
    ) {
        // I think it's safest to force inout params to have the
        // same type for in and out
        const paramType = this.typeLookup(girParam).result
        let paramName = this.transformation.transformParameterName(girParam, false)

        if (paramNames.includes(paramName)) {
            this.log.warn(`[${girParam._fullSymName || ''}] Duplicate parameter name "${paramName}" found!`)
            paramName += '_'
        }
        paramNames.push(paramName)

        let optional = this.paramIsNullable(girParam)

        if (optional) {
            const index = girParams.indexOf(girParam)
            const following = girParams
                .slice(index)
                .filter(() => skip.indexOf(girParam) === -1)
                .filter((p) => p.$.direction !== 'out')

            if (following.some((p) => !this.paramIsNullable(p))) {
                optional = false
            }
        }

        girParam._desc = {
            desc: null,
            name: paramName,
            optional,
            type: paramType,
        }

        girParam._desc.desc = this.templateProcessor.generateParameter(girParam)

        return girParam._desc
    }

    private setParametersDesc(outArrayLengthIndex: number, girParams?: GirCallableParams[]) {
        const def: string[] = []
        const outParams: string[] = []
        const paramNames: string[] = []
        const paramDescs: DescParameter[] = []

        if (girParams && girParams.length > 0) {
            for (const girParam of girParams) {
                const params = girParam?.parameter || []

                // Instance parameter needs to be exposed for class methods (see comment above getClassMethods())
                const instanceParameter = girParams[0]['instance-parameter']
                if (instanceParameter && instanceParameter[0]) {
                    const typeName = instanceParameter[0].type ? instanceParameter[0].type[0].$?.name : undefined
                    const rec = typeName ? this.ns.record?.find((r) => r.$.name == typeName) : undefined
                    const structFor = rec?.$['glib:is-gtype-struct-for']
                    const gobject = this.namespace === 'GObject' || this.namespace === 'GLib' ? '' : 'GObject.'
                    if (structFor && instanceParameter[0].$.name) {
                        // TODO: Should use of a constructor, and even of an instance, be discouraged?
                        def.push(`${instanceParameter[0].$.name}: ${structFor} | Function | ${gobject}Type`)
                    }
                }
                if (params.length) {
                    const skip = outArrayLengthIndex === -1 ? [] : [params[outArrayLengthIndex]]

                    this.processParams(params, skip, (girVar) => this.arrayLengthIndexLookup(girVar))
                    this.processParams(params, skip, (girVar) => this.closureDataIndexLookup(girVar))
                    this.processParams(params, skip, (girVar) => this.destroyDataIndexLookup(girVar))

                    for (const param of params) {
                        if (skip.indexOf(param) !== -1) {
                            continue
                        }

                        param._desc = this.setParameterDesc(param, params, paramNames, skip)

                        const optDirection = param.$.direction
                        if (optDirection === 'out' || optDirection == 'inout') {
                            outParams.push(...this.templateProcessor.generateOutParameterReturn(param))
                            if (optDirection == 'out') continue
                        }

                        paramDescs.push(param._desc)
                        if (param._desc.desc) def.push(...param._desc.desc)
                    }
                }
            }
        }

        return { def, outParams, paramNames, paramDescs }
    }

    private setVariableDesc(
        girVar: GirPropertyElement | GirFieldElement | GirConstantElement,
        optional = false,
        allowQuotes = false,
        type: 'property' | 'constant' | 'field',
    ) {
        if (!girVar.$.name) return undefined
        if (
            !girVar ||
            !girVar.$ ||
            !this.girBool(girVar.$.introspectable, true) ||
            this.girBool((girVar as GirFieldElement).$.private)
        )
            return undefined

        let name = girVar.$.name

        switch (type) {
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
        let typeName = this.typeLookup(girVar).result

        typeName = this.transformation.transformTypeName(typeName)

        girVar._desc = {
            desc: null,
            name,
            patched: false,
            optional,
            type: typeName,
        }

        girVar._desc.desc = this.templateProcessor.generateVariable(girVar)

        return girVar._desc
    }

    /**
     * @param girVar
     * @param construct construct means include the property even if it's construct-only,
     * @param optional optional means if it's construct-only it will also be marked optional (?)
     * @param indentCount
     */
    private setPropertyDesc(
        girProp: GirPropertyElement,
        construct = false,
        optional = true,
        indentCount = 0,
    ): DescProperty | undefined {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        if (this.girBool(girProp.$['construct-only']) && !construct) return undefined
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        if (!this.girBool(girProp.$.writable) && construct) return undefined
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        if (this.girBool((girProp as GirFieldElement).$.private)) return undefined

        const readonly = this.girBool(girProp.$.writable)
        girProp._desc = this.setVariableDesc(girProp, construct && optional, true, 'property')
        if (!girProp._desc?.name) {
            return undefined
        }
        let origName: string | null = null

        if (girProp.$.name) {
            // TODO does that make sense here? This also changes the signal names
            origName = this.transformation.transformTypeName(girProp.$.name)
        }

        girProp._desc = {
            ...girProp._desc,
            desc: null,
            readonly,
            origName,
        }

        girProp._desc.desc = this.templateProcessor.generateProperty(girProp, indentCount)

        return girProp._desc
    }

    /**
     *
     * @param girFunc
     * @param prefix E.g. vfunc
     * @param overrideReturnType
     * @param arrowType
     * @param indentCount
     */
    private setFunctionDesc(
        girFunc: GirFunctionElement | GirCallbackElement | GirConstructorElement,
        prefix = '',
        overrideReturnType?: string,
        arrowType = false,
        indentCount = 0,
    ): DescFunction | null {
        if (!girFunc || !girFunc.$ || !this.girBool(girFunc.$.introspectable, true) || girFunc.$['shadowed-by']) {
            return null
        }
        const packageName = this.getPackageName(girFunc)
        let name = girFunc.$.name
        // eslint-disable-next-line prefer-const
        let { returnType, outArrayLengthIndex } = this.getReturnType(girFunc)
        const retTypeIsVoid = returnType === 'void'

        const paramsDef = this.setParametersDesc(outArrayLengthIndex, girFunc.parameters)

        if (girFunc.$['shadows']) {
            name = girFunc.$['shadows']
        }

        // Function name transformation by environment
        name = this.transformation.transformFunctionName(name)

        girFunc._desc = {
            patched: true,
            desc: null,
            arrowType,
            returnType,
            retTypeIsVoid,
            name,
            overrideReturnType,
            prefix,
            params: paramsDef.paramDescs,
            paramsDef: paramsDef.def,
            outParams: paramsDef.outParams,
        }

        const methodPatches = girFunc._fullSymName ? this.getPatches(packageName, 'methods', girFunc._fullSymName) : []

        girFunc._desc.desc = this.templateProcessor.generateFunction(girFunc, methodPatches, indentCount)

        return girFunc._desc
    }

    private setConstructorFunctionDesc(
        name: string,
        girConstFunc: GirConstructorElement,
        prefix = '',
        indentCount = 0,
    ): DescFunction | null {
        return this.setFunctionDesc(girConstFunc, prefix, name, undefined, indentCount)
    }

    private setSignalFuncDesc(girSignalFunc: GirSignalElement, classDetails: ClassDetails) {
        const name = this.transformation.transform('signalName', girSignalFunc.$.name)
        const { returnType, outArrayLengthIndex } = this.getReturnType(girSignalFunc)
        const retTypeIsVoid = returnType === 'void'
        const {
            def: paramsDef,
            paramDescs,
            outParams,
        } = this.setParametersDesc(outArrayLengthIndex, girSignalFunc.parameters)

        girSignalFunc._desc = {
            desc: null,
            name,
            prefix: '',
            returnType,
            arrowType: true,
            patched: false,
            retTypeIsVoid,
            params: paramDescs,
            paramsDef,
            outParams,
        }

        girSignalFunc._desc.desc = this.templateProcessor.generateSignalMethods(girSignalFunc, classDetails)

        return girSignalFunc._desc
    }

    public setEnumerationMemberDesc(girEnumMember: GirMemberElement, indentCount = 1) {
        const memberName = girEnumMember.$.name || girEnumMember.$['glib:nick'] || girEnumMember.$['c:identifier']
        if (!memberName) {
            return undefined
        }
        const transName = this.transformation.transformEnumMember(memberName)
        girEnumMember._desc = {
            desc: null,
            name: transName,
            origName: memberName,
        }
        girEnumMember._desc.desc = this.templateProcessor.generateEnumerationMember(girEnumMember, indentCount)
        return girEnumMember._desc
    }

    public setEnumerationDesc(girEnum: GirEnumElement) {
        const desc: string[] = []
        if (!girEnum?.$ || !this.girBool(girEnum.$.introspectable, true)) return { desc }

        // E.g. the NetworkManager-1.0 has enum names starting with 80211
        const name = this.transformation.transformEnumName(girEnum)
        const origName = `${girEnum.$.name}`

        girEnum._desc = {
            desc: null,
            name,
            origName,
        }

        if (girEnum.member) {
            for (const girEnumMember of girEnum.member) {
                girEnumMember._desc = this.setEnumerationMemberDesc(girEnumMember)
            }
        }

        girEnum._desc.desc = this.templateProcessor.generateEnumeration(girEnum)
        return girEnum._desc
    }

    private traverseInheritanceTree(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
        callback: (girClass: GirClassElement | GirUnionElement | GirInterfaceElement) => void,
        depth = 0,
        recursive = true,
    ): void {
        const details = this.getClassDetails(girClass)
        if (!details || !girClass.$.name) return
        const { parentName, qualifiedParentName } = details

        let parentPtr: GirClassElement | GirUnionElement | GirInterfaceElement | null = null
        let name = girClass.$.name

        if (name.indexOf('.') < 0) {
            name = this.namespace + '.' + name
        }

        if (parentName && qualifiedParentName) {
            if (this.symTable.get(this.allDependencies, qualifiedParentName)) {
                parentPtr = (this.symTable.get(this.allDependencies, qualifiedParentName) as GirClassElement) || null
            }

            if (!parentPtr && parentName == 'Object') {
                parentPtr = (this.symTable.getByHand('GObject-2.0.GObject.Object') as GirClassElement) || null
            }
        }

        callback(girClass)

        if (depth >= MAXIMUM_RECURSION_DEPTH) {
            this.log.warn(`Maximum recursion depth of ${MAXIMUM_RECURSION_DEPTH} reached for "${girClass.$.name}"`)
        } else {
            if (parentPtr && recursive && depth <= MAXIMUM_RECURSION_DEPTH) {
                this.traverseInheritanceTree(parentPtr, callback, ++depth, recursive)
            }
        }
    }

    private forEachInterface(
        girInterface: GirInterfaceElement | GirClassElement | GirUnionElement,
        callback: (cls: GirInterfaceElement | GirClassElement | GirUnionElement) => void,
        recurseObjects = false,
        dups = {},
    ): void {
        for (const { $ } of (girInterface as GirInterfaceElement).implements || []) {
            let name = $.name

            if (name.indexOf('.') < 0) {
                name = this.namespace + '.' + name
            }
            if (Object.prototype.hasOwnProperty.call(dups, name)) {
                continue
            }
            const key = this.symTable.getKey(this.allDependencies, name)
            let iface: GirInterfaceElement | null = null
            const _iface = this.symTable.get(this.allDependencies, name)
            if (key && (_iface as GirInterfaceElement)?.prerequisite) {
                dups[key] = true
                iface = _iface as GirInterfaceElement
            }

            if (iface) {
                callback(iface)
                this.forEachInterface(iface, callback, recurseObjects, dups)
            }
        }
        if ((girInterface as GirInterfaceElement).prerequisite) {
            let parentName = (girInterface as GirInterfaceElement).prerequisite?.[0].$.name
            if (!parentName) {
                return
            }
            if (parentName.indexOf('.') < 0) {
                parentName = this.namespace + '.' + parentName
            }
            if (Object.prototype.hasOwnProperty.call(dups, parentName)) return
            const parentPtr = this.symTable.get(this.allDependencies, parentName)
            if (parentPtr && ((parentPtr as GirInterfaceElement).prerequisite || recurseObjects)) {
                // iface's prerequisite is also an interface, or it's
                // a class and we also want to recurse classes
                callback(parentPtr as GirInterfaceElement)
                this.forEachInterface(parentPtr as GirInterfaceElement, callback, recurseObjects, dups)
            }
        }
    }

    private forEachInterfaceAndSelf(
        e: GirClassElement | GirUnionElement | GirInterfaceElement,
        callback: (cls: GirClassElement | GirUnionElement | GirInterfaceElement) => void,
    ) {
        callback(e)
        this.forEachInterface(e, callback)
    }

    private isDerivedFromGObject(girClass: GirClassElement | GirUnionElement | GirInterfaceElement): boolean {
        let ret = false
        this.traverseInheritanceTree(girClass, (cls) => {
            if (cls._fullSymName === 'GObject.Object') {
                ret = true
            }
        })
        return ret
    }

    /**
     *
     * @param desc
     * @param name
     * @param localNames Can be (constructor) properties, fields or methods
     * @param type
     */
    private checkOrSetLocalName(
        descObj: DescVar | DescFunction | DescProperty,
        name: string | null,
        localNames: LocalNames,
        type: LocalNameType,
    ): LocalNameCheck | null {
        let isOverloadable = false

        if (!descObj.desc) {
            return null
        }

        const desc = typeof descObj.desc === 'string' ? [descObj.desc] : descObj.desc

        if (!name) {
            // this.log.warn(`No name for ${desc}`)
            return null
        }

        // Methods are overloadable by typescript
        // TODO Add support for properties
        if (type === 'method') {
            isOverloadable = true
        }

        // If name is found in localNames this variable was already defined
        if (localNames[name] && localNames[name].desc) {
            // Ignore duplicates with the same type
            // TODO should we use `this.functionSignaturesMatch` here?
            if (isEqual(localNames[name].desc, desc)) {
                return null
            }

            // Ignore if current method is not overloadable
            if (!isOverloadable) {
                return null
            }

            // Only names of the same type are overloadable
            if (localNames[name].type !== type) {
                // This can be happen on node bindings, e.g. on `WebKit2.WebView.isLoading` and `WebKit2.WebView.isLoading()`
                // See issue https://github.com/romgrk/node-gtk/issues/256
                // See Gjs doc https://gjs-docs.gnome.org/webkit240~4.0_api/webkit2.webview#property-is_loading
                // TODO prefer functions over properties (Overwrite the properties with the functions if they have the same name)

                return null
            }
        }

        localNames[name] = localNames[name] || {}
        const localName: LocalName = {
            desc,
            type,
        }
        localNames[name] = localName
        return { desc, added: true, isOverloadable }
    }

    private processFields(cls: GirClassElement | GirUnionElement | GirInterfaceElement, localNames: LocalNames) {
        const def: string[] = []
        if (cls.field) {
            for (const field of cls.field) {
                field._desc = this.setVariableDesc(field, false, false, 'field')
                if (!field._desc) {
                    continue
                }

                const localName = this.checkOrSetLocalName(field._desc, field._desc?.name, localNames, 'field')
                if (localName?.added) {
                    for (const curDesc of localName.desc) {
                        def.push(`    ${curDesc}`)
                    }
                }
            }
        }
        if (def.length && cls._fullSymName) {
            const versionPrefix = cls._module?.packageName ? cls._module?.packageName + '.' : ''
            def.unshift(`    /* Fields of ${versionPrefix}${cls._fullSymName} */`)
        }
        return { def }
    }

    private processProperties(
        cls: GirClassElement | GirUnionElement | GirInterfaceElement,
        localNames: LocalNames,
        propertyNames: string[],
    ) {
        const def: string[] = []
        const properties = (cls as GirClassElement | GirInterfaceElement).property
        if (properties) {
            for (const prop of properties) {
                prop._desc = this.setPropertyDesc(prop)
                if (!prop._desc) {
                    continue
                }
                const localName = this.checkOrSetLocalName(prop._desc, prop._desc.name, localNames, 'property')
                if (localName?.added) {
                    if (prop._desc.origName) propertyNames.push(prop._desc.origName)
                    for (const curDesc of localName.desc) {
                        def.push(`    ${curDesc}`)
                    }
                }
            }
        }
        if (def.length && cls._fullSymName) {
            const versionPrefix = cls._module?.packageName ? cls._module?.packageName + '.' : ''
            def.unshift(`    /* Properties of ${versionPrefix}${cls._fullSymName} */`)
        }
        return { def }
    }

    /**
     * Instance methods
     * @param cls
     * @param localNames
     */
    private processMethods(cls: GirClassElement | GirUnionElement | GirInterfaceElement, localNames: LocalNames) {
        const def: string[] = []
        if (cls.method) {
            for (const func of cls.method) {
                const funcDesc = this.setFunctionDesc(func)
                if (!funcDesc) {
                    continue
                }
                const localName = this.checkOrSetLocalName(funcDesc, funcDesc.name, localNames, 'method')
                if (localName?.added) {
                    for (const curDesc of localName.desc) {
                        def.push(`    ${curDesc}`)
                    }
                }
            }
        }
        if (def.length && cls._fullSymName) {
            const versionPrefix = cls._module?.packageName ? cls._module?.packageName + '.' : ''
            def.unshift(`    /* Methods of ${versionPrefix}${cls._fullSymName} */`)
        }
        return { def }
    }

    private exportOverloadableMethods(fnMap: FunctionMap, explicits: Set<string>) {
        const def: string[] = []
        for (const key of Array.from(explicits.values())) {
            const fDef = fnMap.get(key) || []
            def.push(...fDef)
        }
        return {
            def,
        }
    }

    /**
     * Instance methods, vfunc_ prefix
     * @param cls
     */
    private processVirtualMethods(cls: GirClassElement | GirUnionElement | GirInterfaceElement) {
        // Virtual methods currently not supported in node-gtk
        if (this.config.environment === 'node') {
            return {
                def: [],
            }
        }

        const def: string[] = []
        const { fnMap, explicits } = this.processOverloadableMethods(cls, (element) => {
            const vMethods: GirVirtualMethodElement[] = element['virtual-method'] || []
            const methods = vMethods
                .map((virtualFunc) => {
                    const func = this.setFunctionDesc(virtualFunc, 'vfunc_', undefined, undefined, 1)
                    return func
                })
                .filter((funcDesc) => funcDesc !== null && funcDesc?.name !== null) as DescFunction[]
            return methods
        })
        def.push(...this.exportOverloadableMethods(fnMap, explicits).def)
        if (def.length && cls._fullSymName) {
            const versionPrefix = cls._module?.packageName ? cls._module?.packageName + '.' : ''
            def.unshift(`    /* Virtual methods of ${versionPrefix}${cls._fullSymName} */`)
        }
        return {
            def,
            fnMap,
            explicits,
        }
    }

    private processSignals(cls: GirClassElement | GirInterfaceElement | GirUnionElement, classDetails: ClassDetails) {
        const def: string[] = []
        const signals: GirSignalElement[] =
            (cls as GirClassElement | GirInterfaceElement).signal ||
            (cls as GirClassElement | GirInterfaceElement)['glib:signal'] ||
            []
        if (signals) {
            for (const signal of signals) def.push(...(this.setSignalFuncDesc(signal, classDetails).desc || []))
        }
        if (def.length && cls._fullSymName) {
            const versionPrefix = cls._module?.packageName ? cls._module?.packageName + '.' : ''
            def.unshift(`    /* Signals of ${versionPrefix}${cls._fullSymName} */`)
        }
        return {
            def,
        }
    }

    /**
     * Some classes implement interfaces which are also implemented by a superclass
     * and we need to exclude those in some circumstances
     * @param cls
     * @param iface
     */
    private interfaceIsDuplicate(
        cls: GirClassElement | GirInterfaceElement | GirUnionElement,
        iface: GirClassElement | GirUnionElement | GirInterfaceElement,
    ): boolean {
        const ifaceName = iface._fullSymName
        if (!ifaceName) {
            return false
        }
        let rpt = false
        let bottom = true
        this.traverseInheritanceTree(cls, (sub) => {
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

    private getStaticConstructors(
        element: GirClassElement | GirInterfaceElement | GirUnionElement,
        name: string,
        filter?: (funcName: string) => boolean,
    ): DescFunction[] {
        const constructors = element.constructor
        if (!Array.isArray(constructors)) {
            return []
        }
        let ctors = constructors
            .map((constructor) => {
                return this.setConstructorFunctionDesc(name, constructor, 'static ', 1)
            })
            .filter((ctor) => ctor?.name) as DescFunction[]

        if (filter) ctors = ctors.filter((ctor) => ctor?.name && filter(ctor.name))
        return ctors
    }

    private isGtypeStructFor(e: GirClassElement | GirUnionElement | GirInterfaceElement, rec: GirRecordElement) {
        const isFor = rec.$['glib:is-gtype-struct-for']
        return isFor && isFor == e.$.name
    }

    /**
     * Some class/static methods are defined in a separate record which is not
     * exported, but the methods are available as members of the JS constructor.
     * In gjs one can use an instance of the object, a JS constructor or a GType
     * as the method's instance-parameter.
     * @see https://discourse.gnome.org/t/using-class-methods-like-gtk-widget-class-get-css-name-from-gjs/4001
     * @param girClass
     */
    private getClassMethods(girClass: GirClassElement | GirUnionElement | GirInterfaceElement): DescFunction[] {
        if (!girClass.$.name) return []
        const fName = girClass.$.name + 'Class'
        let rec = this.ns.record?.find((r) => r.$.name == fName)
        if (!rec || !this.isGtypeStructFor(girClass, rec)) {
            rec = this.ns.record?.find((r) => this.isGtypeStructFor(girClass, r))
            fName == rec?.$.name
        }
        if (!rec) return []
        const methods = rec.method || []
        return methods
            .map((method) => this.setFunctionDesc(method, 'static ', undefined, undefined, 1))
            .filter((method) => method !== null) as DescFunction[]
    }

    private getOtherStaticFunctions(
        girClass: GirClassElement | GirInterfaceElement | GirUnionElement,
        stat = true,
    ): DescFunction[] {
        const fns: DescFunction[] = []
        if (girClass.function) {
            for (const func of girClass.function) {
                const funcDesc = this.setFunctionDesc(func, stat ? 'static ' : '', undefined, undefined, 1)
                if (funcDesc?.name && funcDesc?.name !== 'new') fns.push(funcDesc)
            }
        }
        return fns
    }

    private getClassDetails(girClass: GirClassElement | GirUnionElement | GirInterfaceElement): ClassDetails | null {
        if (!girClass?.$?.name) return null
        const mod: GirModule = girClass._module ? girClass._module : this
        let className = this.transformation.transformClassName(girClass.$.name)
        /**
         * E.g. 'Gtk'
         */
        const namespace = mod.namespace
        /**
         * E.g. '3.0'
         */
        const version = mod.version
        let qualifiedName: string
        if (className.indexOf('.') < 0) {
            qualifiedName = namespace + '.' + className
        } else {
            qualifiedName = className
            const split = className.split('.')
            className = split[split.length - 1]
        }

        let parentName: string | undefined
        let qualifiedParentName: string | undefined
        let localParentName: string | undefined

        const prerequisiteName = (girClass as GirInterfaceElement)?.prerequisite?.[0]?.$?.name
        if (prerequisiteName) {
            parentName = prerequisiteName
        } else if ((girClass as GirClassElement).$.parent) {
            parentName = (girClass as GirClassElement).$.parent
        }

        let parentModName: string
        if (parentName) {
            if (parentName.indexOf('.') < 0) {
                qualifiedParentName = namespace + '.' + parentName
                parentModName = namespace
            } else {
                qualifiedParentName = parentName
                const split = parentName.split('.')
                parentName = split[split.length - 1]
                parentModName = split.slice(0, split.length - 1).join('.')
            }
            localParentName = parentModName == namespace ? parentName : qualifiedParentName
        }

        return { name: className, qualifiedName, parentName, qualifiedParentName, localParentName, namespace, version }
    }

    /**
     * Returns `true` if the function definitions in `f1` and `f2` have equivalent signatures
     * @param f1
     * @param f2
     */
    private functionSignaturesMatch(f1: string, f2: string) {
        if (isCommentLine(f1) || isCommentLine(f2)) return false
        return stripParamNames(f1) == stripParamNames(f2)
    }

    /**
     * See comment for addOverloadableFunctions.
     * Returns `true` if (a definition from) `func` is added to map to satisfy
     * an overload, but `false` if it was forced
     * @param map
     * @param func
     * @param force
     */
    private mergeOverloadableFunctions(map: FunctionMap, func: DescFunction, force = true) {
        let result = false
        if (!func.name) return result
        const defs = map.get(func.name)
        if (!defs || !func.desc) {
            if (force && func.desc) map.set(func.name, func.desc)
            return result
        }

        for (const newDef of func.desc) {
            let match = false
            for (const oldDef of defs) {
                if (this.functionSignaturesMatch(newDef, oldDef)) {
                    match = true
                    break
                }
            }
            if (!match) {
                defs.push(newDef)
                result = true
            }
        }
        return result
    }

    /**
     * fnMap values are equivalent to the second element of a DescFunction.
     * If an entry in `fnMap` is changed, its name is added to `explicits` (set of names which must be declared).
     * If `force` is true, every function of `f2` is added to `fnMap` and overloads even
     * if it doesn't already contain a function of the same name.
     * @param fnMap
     * @param explicits
     * @param funcs
     * @param force
     */
    private addOverloadableFunctions(fnMap: FunctionMap, explicits: Set<string>, funcs: DescFunction[], force = false) {
        for (const func of funcs) {
            if (!func.name) continue
            if (this.mergeOverloadableFunctions(fnMap, func) || force) {
                explicits.add(func.name)
            }
        }
    }

    /**
     * Used for <method> and <virtual-method>
     * @param cls
     * @param getMethods
     * @param statics
     */
    private processOverloadableMethods(
        cls: GirClassElement | GirInterfaceElement | GirUnionElement,
        getMethods: (e: GirClassElement | GirInterfaceElement | GirUnionElement) => DescFunction[],
        statics = false,
    ) {
        const fnMap: FunctionMap = new Map()
        const explicits = new Set<string>()
        const funcs = getMethods(cls)
        this.addOverloadableFunctions(fnMap, explicits, funcs, true)
        // Have to implement methods from cls' interfaces
        this.forEachInterface(
            cls,
            (iface) => {
                if (!this.interfaceIsDuplicate(cls, iface)) {
                    const funcs = getMethods(iface)
                    this.addOverloadableFunctions(fnMap, explicits, funcs, true)
                }
            },
            false,
        )
        // Check for overloads among all inherited methods
        let bottom = true
        this.traverseInheritanceTree(cls, (e) => {
            if (bottom) {
                bottom = false
                return
            }
            if (statics) {
                const funcs = getMethods(e)
                this.addOverloadableFunctions(fnMap, explicits, funcs, false)
            } else {
                let self = true
                this.forEachInterfaceAndSelf(e, (iface) => {
                    if (self || this.interfaceIsDuplicate(cls, iface)) {
                        const funcs = getMethods(iface)
                        this.addOverloadableFunctions(fnMap, explicits, funcs, false)
                    }
                    self = false
                })
            }
        })
        return { fnMap, explicits }
    }

    private processStaticFunctions(
        cls: GirClassElement | GirInterfaceElement | GirUnionElement,
        getter: (e: GirClassElement | GirInterfaceElement | GirUnionElement) => DescFunction[],
    ) {
        const { fnMap, explicits } = this.processOverloadableMethods(cls, getter, true)
        const { def } = this.exportOverloadableMethods(fnMap, explicits)
        return { def, fnMap, explicits }
    }

    private generateSignalMethods(
        cls: GirClassElement | GirUnionElement | GirInterfaceElement,
        propertyNames: string[],
        callbackObjectName: string,
    ) {
        const def: string[] = []
        const isDerivedFromGObject = this.isDerivedFromGObject(cls)
        if (isDerivedFromGObject) {
            let prefix = 'GObject.'
            if (this.namespace === 'GObject') prefix = ''
            for (const prop of propertyNames) {
                def.push(...this.templateProcessor.generateGObjectSignalMethods(prop, callbackObjectName, prefix))
            }
            def.push(...this.templateProcessor.generateGeneralSignalMethods(this.config.environment))
        }
        return { def, isDerivedFromGObject }
    }

    /**
     * Static methods, <constructor> and <function>
     * @param girClass
     * @param name
     */
    private getAllStaticFunctions(girClass: GirClassElement | GirInterfaceElement | GirUnionElement, name: string) {
        const stc: string[] = []

        stc.push(
            ...this.processStaticFunctions(girClass, (cls) => {
                return this.getStaticConstructors(cls, name)
            }).def,
        )
        stc.push(
            ...this.processStaticFunctions(girClass, (cls) => {
                return this.getOtherStaticFunctions(cls)
            }).def,
        )
        stc.push(
            ...this.processStaticFunctions(girClass, (cls) => {
                return this.getClassMethods(cls)
            }).def,
        )

        if (stc.length > 0) {
            stc.unshift('    /* Static methods and pseudo-constructors */')
        }
        return stc
    }

    private generateConstructorAndStaticMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
        name: string,
        indentCount = 1,
    ) {
        const indent = this.templateProcessor.generateIndent(indentCount)
        const def: string[] = []
        const isDerivedFromGObject = this.isDerivedFromGObject(girClass)
        if (girClass._fullSymName && !STATIC_NAME_ALREADY_EXISTS.includes(girClass._fullSymName)) {
            // Records, classes and interfaces all have a static name
            def.push(`${indent}static name: string`)
        }

        // JS constructor(s)
        if (isDerivedFromGObject) {
            def.push(
                `${indent}constructor (config?: ${name}_ConstructProps)`,
                `${indent}_init (config?: ${name}_ConstructProps): void`,
            )
        } else {
            const constructor_: GirFunctionElement[] = (girClass['constructor'] || []) as GirFunctionElement[]
            if (constructor_) {
                if (Array.isArray(constructor_)) {
                    for (const f of constructor_) {
                        const constrDesc = this.setConstructorFunctionDesc(name, f, 'static ', 1)
                        if (!constrDesc?.name || !constrDesc.desc) continue
                        if (constrDesc.name !== 'new') continue

                        def.push(...constrDesc.desc)

                        const jsStyleCtor = constrDesc.desc[0]
                            .replace('static new', 'constructor')
                            .replace(/:[^:]+$/, '')

                        def.push(jsStyleCtor)
                    }
                }
            }
        }

        def.push(...this.getAllStaticFunctions(girClass, name))

        if (isDerivedFromGObject) {
            def.push(`${indent}static $gtype: ${this.packageName === 'GObject-2.0' ? '' : 'GObject.'}Type`)
        }

        return { def, isDerivedFromGObject }
    }

    private generateConstructPropsInterface(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
        details: ClassDetails,
    ) {
        const def: string[] = []
        const isDerivedFromGObject = this.isDerivedFromGObject(girClass)
        let patched = false
        if (isDerivedFromGObject) {
            let ext = ' '

            if (details.qualifiedParentName && details.localParentName) {
                ext = `extends ${details.localParentName}_ConstructProps `
            }

            def.push(`export interface ${details.name}_ConstructProps ${ext}{`)
            const constructPropNames: LocalNames = {}
            const properties = (girClass as GirClassElement | GirInterfaceElement).property
            if (properties) {
                for (const girProp of properties) {
                    girProp._desc = this.setPropertyDesc(girProp, true, true, 0)
                    if (!girProp._desc) {
                        continue
                    }
                    const localName = this.checkOrSetLocalName(
                        girProp._desc,
                        girProp._desc.name,
                        constructPropNames,
                        'property',
                    )

                    if (localName?.added) {
                        // Apply patches
                        const packageNameToPatch = this.getPackageName(girProp)
                        const constructPropPatches = girProp._fullSymName
                            ? this.getPatches(packageNameToPatch, 'constructorProperties', girProp._fullSymName)
                            : undefined

                        if (constructPropPatches?.length) {
                            this.log.warn(`Patch found for constructor property "${girProp._fullSymName}"!`)
                            patched = true
                            for (const curDesc of constructPropPatches) {
                                def.push(`    ${curDesc}`)
                            }
                        } else {
                            for (const curDesc of localName.desc) {
                                def.push(`    ${curDesc}`)
                            }
                        }
                    }
                }
            }
            // Include props of implemented interfaces
            if ((girClass as GirClassElement | GirInterfaceElement).implements) {
                this.forEachInterface(girClass, (iface) => {
                    const properties = (iface as GirClassElement | GirInterfaceElement).property
                    if (properties) {
                        for (const property of properties) {
                            const propDesc = this.setPropertyDesc(property, true, true, 0)
                            if (!propDesc) {
                                continue
                            }
                            const localName = this.checkOrSetLocalName(
                                propDesc,
                                propDesc.name,
                                constructPropNames,
                                'property',
                            )
                            if (localName?.added) {
                                // Apply patches
                                const packageNameToPatch = this.getPackageName(property)
                                const constructPropPatches = property._fullSymName
                                    ? this.getPatches(
                                          packageNameToPatch,
                                          'constructorProperties',
                                          property._fullSymName,
                                      )
                                    : undefined

                                if (constructPropPatches?.length) {
                                    this.log.warn(
                                        `Patch found for constructor property (of implemented interfaces) "${property._fullSymName}"!`,
                                    )
                                    patched = true
                                    for (const curDesc of constructPropPatches) {
                                        def.push(`    ${curDesc}`)
                                    }
                                } else {
                                    for (const curDesc of localName.desc) {
                                        def.push(`    ${curDesc}`)
                                    }
                                }
                            }
                        }
                    }
                })
            }
            def.push('}')
        }
        return {
            def,
            patched,
            isDerivedFromGObject,
        }
    }

    public exportEnumeration(girEnum: GirEnumElement) {
        const { desc } = this.setEnumerationDesc(girEnum)

        return { def: desc || [] }
    }

    public exportConstant(girConst: GirConstantElement) {
        const def: string[] = []
        girConst._desc = this.setVariableDesc(girConst, false, false, 'constant')
        if (girConst._desc?.name) {
            if (!this.constNames[girConst._desc.name]) {
                this.constNames[girConst._desc.name] = girConst._desc
                if (!girConst._desc.desc) {
                    throw new Error('constDesc.desc not set!')
                }
                for (const desc of girConst._desc.desc) {
                    def.push(`export const ${desc}`)
                }
            } else {
                this.log.warn(`The constant '${girConst._desc.desc}' has already been exported`)
            }
        }

        return {
            def,
            constDesc: girConst._desc,
        }
    }

    /**
     * Represents a record or GObject class or interface as a Typescript class
     * @param girClass
     * @param isAbstract
     * @param record
     */
    public exportClassInternal(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
        record = false,
        isAbstract = false,
    ) {
        const def: string[] = []
        const localNames: LocalNames = {}
        const propertyNames: string[] = []

        // Is this a abstract class? E.g GObject.ObjectClass is a such abstract class and required by UPowerGlib-1.0, UDisks-2.0 and others
        if (girClass.$ && girClass.$['glib:is-gtype-struct-for']) {
            isAbstract = true
        }

        const classDetails = this.getClassDetails(girClass)
        if (!classDetails)
            return {
                def: [],
            }

        const { def: _def, patched } = this.generateConstructPropsInterface(girClass, classDetails)

        // Properties for construction
        def.push(..._def)

        // START CLASS
        {
            if (isAbstract) {
                def.push(this.templateProcessor.generateExport('abstract class', classDetails.name, '{'))
            } else {
                def.push(this.templateProcessor.generateExport('class', classDetails.name, '{'))
            }

            // Can't export fields for GObjects because names would clash
            if (record) def.push(...this.processFields(girClass, localNames).def)

            // Copy properties from inheritance tree
            this.traverseInheritanceTree(girClass, (cls) =>
                def.push(...this.processProperties(cls, localNames, propertyNames).def),
            )
            // Copy properties from implemented interface
            this.forEachInterface(girClass, (cls) =>
                def.push(...this.processProperties(cls, localNames, propertyNames).def),
            )
            // Copy fields from inheritance tree
            this.traverseInheritanceTree(girClass, (cls) => def.push(...this.processFields(cls, localNames).def))
            // Copy methods from inheritance tree
            this.traverseInheritanceTree(girClass, (cls) => def.push(...this.processMethods(cls, localNames).def))
            // Copy methods from implemented interfaces
            this.forEachInterface(girClass, (cls) => def.push(...this.processMethods(cls, localNames).def))
            // Copy virtual methods from inheritance tree
            this.traverseInheritanceTree(girClass, (cls) => def.push(...this.processVirtualMethods(cls).def))
            // Copy signals from inheritance tree
            this.traverseInheritanceTree(girClass, (cls) => def.push(...this.processSignals(cls, classDetails).def))
            // Copy signals from implemented interfaces
            this.forEachInterface(girClass, (cls) => def.push(...this.processSignals(cls, classDetails).def))

            def.push(...this.generateSignalMethods(girClass, propertyNames, classDetails.name).def)

            // TODO: Records have fields

            // Static side: default constructor
            def.push(...this.generateConstructorAndStaticMethods(girClass, classDetails.name).def)
        }
        // END CLASS
        def.push('}')

        return {
            def,
            patched,
            classDetails,
            propertyNames,
            localNames,
            isAbstract,
            record,
        }
    }

    public exportFunction(girFunc: GirFunctionElement) {
        const exp = this.config.exportDefault ? '' : 'export '
        const funcDesc = this.setFunctionDesc(girFunc, '', exp + 'function ', undefined, 0)
        return { def: funcDesc?.desc || [] }
    }

    public exportCallback(func: GirFunctionElement) {
        const def: string[] = []
        if (!func || !func.$ || !this.girBool(func.$.introspectable, true))
            return {
                def,
            }

        const name = func.$.name
        const { returnType, outArrayLengthIndex } = this.getReturnType(func)
        const { def: params } = this.setParametersDesc(outArrayLengthIndex, func.parameters)

        def.push(this.templateProcessor.generateExport('interface', name, '{'))
        def.push(`    (${params.join(', ')}): ${returnType}`)
        def.push('}')
        return {
            def,
        }
    }

    public exportAlias(girAlias: GirAliasElement) {
        const def: string[] = []
        if (!girAlias || !girAlias.$ || !this.girBool(girAlias.$.introspectable, true)) return { def }

        const typeName = this.typeLookup(girAlias).result
        const name = girAlias.$.name
        const exp = this.config.exportDefault ? '' : 'export '
        def.push(`${exp}type ${name} = ${typeName}`)
        return {
            def,
        }
    }

    public exportInterface(girClass: GirClassElement) {
        return this.exportClassInternal(girClass, true)
    }

    public exportClass(girClass: GirClassElement) {
        return this.exportClassInternal(girClass, false)
    }

    public async exportJs(): Promise<void> {
        const template = 'module.js'
        if (this.config.outdir) {
            await this.templateProcessor.create(template, this.config.outdir, `${this.packageName}.js`)
        } else {
            const moduleContent = this.templateProcessor.load(template)
            this.log.log(moduleContent)
        }
    }

    public async export(outStream: NodeJS.WritableStream, outputPath: string | null): Promise<void> {
        const out: string[] = []

        out.push(...this.templateProcessor.generateTSDocComment(`${this.packageName}`))

        out.push('')

        const deps: string[] = this.transitiveDependencies

        // Module dependencies as type references or imports
        if (this.config.environment === 'gjs') {
            out.push(...this.templateProcessor.generateModuleDependenciesImport('Gjs', 'Gjs', false))
        }

        for (const depPackageName of deps) {
            // Don't reference yourself as a dependency
            if (this.packageName !== depPackageName) {
                const girFilename = `${depPackageName}.gir`
                const { namespace } = splitModuleName(depPackageName)
                const depFile = findFileInDirs(this.config.girDirectories, girFilename)
                if (depFile.exists) {
                    out.push(
                        ...this.templateProcessor.generateModuleDependenciesImport(namespace, depPackageName, false),
                    )
                } else {
                    out.push(`// WARN: Dependency not found: '${depPackageName}'`)
                    this.log.warn(`Dependency gir file not found: '${girFilename}'`)
                }
            }
        }

        // START Namespace
        {
            if (this.config.buildType === 'types') {
                out.push('')
                out.push(`export declare namespace ${this.namespace} {`)
            } else if (this.config.exportDefault) {
                out.push('')
                out.push(`export namespace ${this.namespace} {`)
            }

            // Newline
            out.push('')

            if (this.ns.enumeration)
                for (const enumeration of this.ns.enumeration) out.push(...this.exportEnumeration(enumeration).def)

            if (this.ns.bitfield)
                for (const bitfield of this.ns.bitfield) out.push(...this.exportEnumeration(bitfield).def)

            if (this.ns.constant)
                for (const constant of this.ns.constant) out.push(...this.exportConstant(constant).def)

            if (this.ns.function) for (const func of this.ns.function) out.push(...this.exportFunction(func).def)

            if (this.ns.callback) for (const cb of this.ns.callback) out.push(...this.exportCallback(cb).def)

            if (this.ns.interface)
                for (const iface of this.ns.interface) out.push(...this.exportClassInternal(iface).def)

            // Extra interfaces if a template with the module name  (e.g. '../templates/GObject-2.0.d.ts') is found
            // E.g. used for GObject-2.0 to help define GObject classes in js;
            // these aren't part of gi.
            if (this.templateProcessor.exists(`${this.packageName}.d.ts`)) {
                const templatePatches = await this.templateProcessor.load(`${this.packageName}.d.ts`)
                out.push(templatePatches)
            }

            if (this.ns.class) for (const cls of this.ns.class) out.push(...this.exportClassInternal(cls, false).def)

            if (this.ns.record)
                for (const record of this.ns.record) out.push(...this.exportClassInternal(record, true).def)

            if (this.ns.union) for (const union of this.ns.union) out.push(...this.exportClassInternal(union, true).def)

            if (this.ns.alias)
                // GType is not a number in GJS
                for (const alias of this.ns.alias)
                    if (this.packageName !== 'GObject-2.0' || alias.$.name !== 'Type')
                        out.push(...this.exportAlias(alias).def)

            if (this.packageName === 'GObject-2.0') out.push('export interface Type {', '    name: string', '}')
        }
        // END Namespace
        if (this.config.buildType === 'types' || this.config.exportDefault) {
            out.push(`}`)
        }

        if (this.config.buildType === 'types' || this.config.exportDefault) {
            out.push(`export default ${this.namespace};`)
        }

        // End of file
        outStream.write(out.join('\n'))

        if (outputPath && this.config.pretty) {
            await this.templateProcessor.prettify(outputPath)
        }
    }
}
