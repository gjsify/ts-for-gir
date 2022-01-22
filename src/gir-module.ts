import TemplateProcessor from './template-processor.js'
import TypeDefinitionGenerator from './type-definition-generator.js'
import { Transformation, C_TYPE_MAP, FULL_TYPE_MAP, POD_TYPE_MAP, POD_TYPE_MAP_ARRAY } from './transformation.js'
import { Logger } from './logger.js'
import {
    isEqual,
    find,
    stripParamNames,
    findFileInDirs,
    splitModuleName,
    isCommentLine,
    clone,
    girBool,
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
    GirUnionElement,
    PartOfModule,
    PartOfClass,
    TypeArraySuffix,
    TypeNullableSuffix,
    TypeSuffix,
    TypeFunction,
    TypeVariable,
    GirConstructorElement,
    InheritanceTable,
    ParsedGir,
    GenerateConfig,
    DescProperty,
    FunctionMap,
    FunctionPrefix,
    LocalNameCheck,
    LocalNameType,
    LocalName,
    LocalNames,
    DescClass,
    GirInterfaceElement,
    DescFunction,
    DescParameter,
} from './types/index.js'

import { MAXIMUM_RECURSION_DEPTH } from './constants.js'

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
    /**
     * TODO: Move to TypeDefinitionGenerator
     * @deprecated
     */
    templateProcessor: TemplateProcessor
    generator: TypeDefinitionGenerator

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

        this.templateProcessor = new TemplateProcessor(
            {
                name: this.namespace,
                namespace: this.namespace,
                version: this.version,
                importName: this.importName,
            },
            this.packageName,
            this.config,
        )

        this.generator = new TypeDefinitionGenerator(this.config)

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
        girFunc: GirFunctionElement | GirConstructorElement | GirVirtualMethodElement | GirCallbackElement,
    ): void {
        const funcName = girFunc._fullSymName
        if (funcName && girFunc.parameters) {
            for (const girParams of girFunc.parameters) {
                if (girParams.parameter) {
                    for (const girParam of girParams.parameter) {
                        girParam._type = 'callable-param'
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
                retVal._type = 'callable-return'
                if (retVal.$ && retVal.$.name) {
                    retVal._fullSymName = `${girFunc._fullSymName}.${retVal.$.name}`
                }
            }
    }

    private annotateFunctions(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girFuncs: GirVirtualMethodElement[],
        type: 'virtual-method',
    ): void

    private annotateFunctions(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girFuncs: GirSignalElement[],
        type: 'signal',
    ): void

    private annotateFunctions(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girFuncs: GirFunctionElement[],
        type: 'function',
    ): void

    private annotateFunctions(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girFuncs: GirMethodElement[],
        type: 'method',
    ): void

    private annotateFunctions(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girFuncs: GirConstructorElement[],
        type: 'constructor',
    ): void

    // private annotateFunctions(
    //     girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
    //     girFuncs: GirCallbackElement[],
    //     type: 'callback',
    // ): void

    private annotateFunctions(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirFunctionElement[] | GirConstructorElement[] | GirVirtualMethodElement[] | GirSignalElement[],
        // | GirCallbackElement[],
        type: TypeFunction,
    ): void {
        if (Array.isArray(girFuncs))
            for (const girFunc of girFuncs) {
                if (girFunc?.$?.name) {
                    girFunc._type = type
                    girFunc._class = girClass
                    const nsName = girClass ? girClass._fullSymName : this.namespace
                    if (nsName) girFunc._fullSymName = `${nsName}.${girFunc.$.name}`
                    this.annotateFunctionArguments(girFunc)
                    this.annotateFunctionReturn(girFunc)
                }
            }
    }

    private annotateVariables(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girVars: GirPropertyElement[],
        type: 'property',
    ): void

    private annotateVariables(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girVars: GirConstantElement[],
        type: 'constant',
    ): void

    private annotateVariables(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girVars: GirFieldElement[],
        type: 'field',
    ): void

    private annotateVariables(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girVars: GirPropertyElement[] | GirFieldElement[] | GirConstantElement[],
        type: TypeVariable,
    ): void {
        if (girVars)
            for (const girVar of girVars) {
                const nsName = girClass ? girClass._fullSymName : this.namespace
                girVar._module = this
                girVar._type = type
                if (type !== 'constant' && girClass) {
                    ;(girVar as GirPropertyElement | GirFieldElement)._class = girClass
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
                        if (!girBool((element as GirCallableParamElement | GirFunctionElement).$.introspectable, true))
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

        if (this.ns.callback) for (const girCallback of this.ns.callback) this.annotateFunctionArguments(girCallback)

        const girClasses: Array<GirClassElement | GirRecordElement | GirInterfaceElement> = [
            ...(this.ns.class || []),
            ...(this.ns.record || []),
            ...(this.ns.interface || []),
        ]

        for (const girClass of girClasses) {
            girClass._module = this
            girClass._fullSymName = `${this.namespace}.${girClass.$.name}`

            const constructors = girClass.constructor instanceof Array ? girClass.constructor : []
            const signals = ((girClass as GirClassElement | GirInterfaceElement).signal ||
                girClass['glib:signal'] ||
                []) as GirSignalElement[]
            const functions = girClass.function || []
            const methods = girClass.method || []
            const vMethods = (girClass as GirClassElement)['virtual-method'] || new Array<GirVirtualMethodElement>()
            const properties = girClass.property
            const fields = girClass.field

            this.annotateFunctions(girClass, constructors, 'constructor')
            this.annotateFunctions(girClass, functions, 'function')
            this.annotateFunctions(girClass, methods, 'method')
            this.annotateFunctions(girClass, vMethods, 'virtual-method')
            this.annotateFunctions(girClass, signals, 'signal')
            if (properties) this.annotateVariables(girClass, properties, 'property')
            if (fields) this.annotateVariables(girClass, fields, 'field')
        }

        if (this.ns.function) this.annotateFunctions(null, this.ns.function, 'function')

        if (this.ns.constant) this.annotateVariables(null, this.ns.constant, 'constant')
    }

    public loadInheritance(inheritanceTable: InheritanceTable): void {
        // Class hierarchy
        for (const girClass of this.ns.class ? this.ns.class : []) {
            let parent: string | null = null
            if (girClass.$ && girClass.$.parent) parent = girClass.$.parent
            if (!parent) continue
            if (!girClass._fullSymName) continue

            if (parent.indexOf('.') < 0) {
                parent = this.namespace + '.' + parent
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
                        if (name.indexOf('.') < 0) {
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
                // TODO: check if resValue this is a class, enum, interface or unify the transformClassName method
                resValue = this.transformation.transformClassName(resValue)
                namespace = this.namespace
            } else {
                const resValues = fullTypeName.split('.')
                resValues.map((name) => this.transformation.transformTypeName(name))
                // TODO: check if resValues[resValues.length - 1] this is a class, enum, interface or unify the transformClassName method
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

        // Fully qualify our type name if need be
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
            fullTypeName,
            namespace,
        }
    }

    private typeLookup(
        girVar:
            | GirCallableReturn
            | GirAliasElement
            | GirFieldElement
            | GirCallableParamElement
            | GirPropertyElement
            | GirConstantElement,
    ) {
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
            ? girVar.type
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

        const cType = type?.$ ? type.$['c:type'] : arrCType
        fullTypeName = type?.$?.name || null
        const callbacks = (girVar as GirFieldElement).callback

        if (!resValue && callbacks?.length) {
            if (callbacks.length > 1) {
                // TODO:
                this.log.warn('Ignore multiple callbacks!', callbacks)
            }
            const funcDesc = this.setFunctionDesc(callbacks[0], 'callback', '', undefined, true, 0)
            if (funcDesc?.desc?.length) {
                if (funcDesc.desc.length > 1) {
                    this.log.warn('Ignore multiline function description!', funcDesc.desc)
                }
                fullTypeName = funcDesc.desc[0]
                isFunction = true
            }

            if (fullTypeName) {
                const suffix: TypeSuffix = (arr + nul) as TypeSuffix
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

        if (!resValue && arr && type?.$?.name && POD_TYPE_MAP_ARRAY()[type.$.name]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            resValue = POD_TYPE_MAP_ARRAY()[type.$.name]
            arr = ''
        }

        if (!resValue && type?.$ && type.$.name && POD_TYPE_MAP[type.$.name]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            resValue = POD_TYPE_MAP[type.$.name]
        }

        if (!resValue && cType && C_TYPE_MAP(cType)) {
            resValue = C_TYPE_MAP(cType) || ''
        }

        if (!resValue && cType && POD_TYPE_MAP[cType]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            resValue = POD_TYPE_MAP[cType]
        }

        if (!resValue) {
            resValue = 'any'
            const logName = fullTypeName || girVar.$.name || cType || ''
            this.log.warn(`Could not find type for "${logName}"`)
        }

        const suffix: TypeSuffix = (arr + nul) as TypeSuffix

        return {
            result: resValue + suffix,
            value: resValue,
            suffix,
            fullTypeName,
            namespace,
            isFunction,
        }
    }

    private getReturnType(girFunc: GirFunctionElement | GirConstructorElement | GirCallbackElement) {
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
     * TODO: Check if it makes sense to split this in `paramIsNullable` and `paramIsOptional`
     *
     * @param param Param to test
     *
     * @author realh
     * @see https://github.com/realh/ts-for-gjs/commit/e4bdba8d4ca279dfa4abbca413eaae6ecc6a81f8
     */
    private paramIsNullable(
        girVar:
            | GirCallableParamElement
            | GirCallableReturn
            | GirAliasElement
            | GirFieldElement
            | GirConstantElement
            | GirPropertyElement,
    ): boolean {
        const a = (girVar as GirCallableParamElement).$
        return a && (girBool(a.nullable) || girBool(a['allow-none']) || girBool(a.optional))
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

        girParam._desc.desc = this.generator.generateParameter(girParam)

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
                const instanceParameter = girParams[0]['instance-parameter']?.[0]
                if (instanceParameter) {
                    const typeName = instanceParameter.type?.[0]?.$?.name || undefined
                    const rec = typeName ? this.ns.record?.find((r) => r.$.name == typeName) : undefined
                    const structFor = rec?.$['glib:is-gtype-struct-for']
                    const gobject = this.namespace === 'GObject' || this.namespace === 'GLib' ? '' : 'GObject.'
                    if (structFor && instanceParameter.$.name) {
                        // TODO: Should use of a constructor, and even of an instance, be discouraged?
                        def.push(`${instanceParameter.$.name}: ${structFor} | Function | ${gobject}Type`)
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
                            outParams.push(...this.generator.generateOutParameterReturn(param))
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
        girVar: GirPropertyElement,
        type: 'property' | 'constructor-property',
        optional: boolean,
        allowQuotes: boolean,
    ): GirPropertyElement['_desc']

    private setVariableDesc(
        girVar: GirConstantElement,
        type: 'constant',
        optional: boolean,
        allowQuotes: boolean,
    ): GirConstantElement['_desc']

    private setVariableDesc(
        girVar: GirFieldElement,
        type: 'field',
        optional: boolean,
        allowQuotes: boolean,
    ): GirFieldElement['_desc']

    private setVariableDesc(
        girVar: GirPropertyElement | GirFieldElement | GirConstantElement,
        type: 'property' | 'constant' | 'field' | 'constructor-property',
        optional = false,
        allowQuotes = false,
    ) {
        if (!girVar.$.name) return undefined
        if (
            !girVar ||
            !girVar.$ ||
            !girBool(girVar.$.introspectable, true) ||
            girBool((girVar as GirFieldElement).$.private)
        )
            return undefined

        girVar._type = type

        let name = girVar.$.name

        switch (type) {
            case 'property':
            case 'constructor-property':
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

        girVar._desc.desc = this.generator.generateVariable(girVar)

        return girVar._desc
    }

    private setPropertyDesc(
        girProp: GirPropertyElement,
        type: 'property' | 'constructor-property',
        construct?: boolean,
        optional?: boolean,
        indentCount?: number,
    ): DescProperty | undefined

    private setPropertyDesc(
        girProp: GirFieldElement,
        type: 'field',
        construct?: boolean,
        optional?: boolean,
        indentCount?: number,
    ): DescProperty | undefined

    /**
     * @param girVar
     * @param construct construct means include the property even if it's construct-only,
     * @param optional optional means if it's construct-only it will also be marked optional (?)
     * @param indentCount
     */
    private setPropertyDesc(
        girProp: GirPropertyElement | GirFieldElement,
        type: 'property' | 'constructor-property' | 'field',
        construct = false,
        optional = true,
        indentCount = 0,
    ): DescProperty | undefined {
        if (girBool((girProp as GirPropertyElement).$['construct-only']) && !construct) return undefined
        if (!girBool(girProp.$.writable) && construct) return undefined
        if (girBool((girProp as GirFieldElement).$.private)) return undefined

        const readonly = girBool(girProp.$.writable)
        girProp._type = type
        switch (type) {
            case 'property':
            case 'constructor-property':
                girProp._desc = this.setVariableDesc(girProp as GirPropertyElement, type, construct && optional, true)
                break
            case 'field':
                girProp._desc = this.setVariableDesc(girProp as GirFieldElement, type, construct && optional, true)
                break
            default:
                throw new Error(`Unknown property type: ${type as string}`)
        }

        if (!girProp._desc?.name) {
            return undefined
        }
        let origName: string | null = null

        if (girProp.$.name) {
            // TODO: does that make sense here? This also changes the signal names
            origName = this.transformation.transformTypeName(girProp.$.name)
        }

        girProp._desc = {
            ...girProp._desc,
            desc: null,
            readonly,
            origName,
        }

        girProp._desc.desc = this.generator.generateProperty(girProp, indentCount)

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
        girFunc: GirMethodElement | GirFunctionElement | GirConstructorElement | GirCallbackElement,
        type: TypeFunction,
        prefix: FunctionPrefix = '',
        overrideReturnType?: string,
        arrowType = false,
        indentCount = 0,
    ): DescFunction | undefined {
        if (!girFunc || !girFunc.$ || !girBool(girFunc.$.introspectable, true) || girFunc.$['shadowed-by']) {
            return undefined
        }
        const packageName = this.getPackageName(girFunc)
        let name = girFunc.$.name
        const { returnType, outArrayLengthIndex } = this.getReturnType(girFunc)
        const retTypeIsVoid = returnType === 'void'

        const paramsDef = this.setParametersDesc(outArrayLengthIndex, girFunc.parameters)
        const shadows = (girFunc as GirMethodElement).$.shadows

        if (shadows) {
            name = shadows
        }

        girFunc._type = type

        // Function name transformation by environment
        name = this.transformation.transformFunctionName(name)

        girFunc._desc = {
            patched: true,
            type,
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

        girFunc._desc.desc = this.generator.generateFunction(girFunc, methodPatches, indentCount)

        return girFunc._desc
    }

    private setCallbackInterfaceDesc(girCallback: GirCallbackElement) {
        if (!girCallback || !girCallback.$ || !girBool(girCallback.$.introspectable, true)) return undefined

        girCallback._desc = this.setFunctionDesc(girCallback, 'callback', '', undefined, true, 0)

        const name = girCallback.$.name

        girCallback._descInterface = {
            desc: null,
            name,
        }

        if (!girCallback._desc || !girCallback._descInterface) {
            return undefined
        }

        girCallback._descInterface.desc = this.generator.generateCallbackInterface(girCallback)

        return girCallback._descInterface
    }

    private setConstructorFunctionDesc(
        name: string,
        girConstructorFunc: GirConstructorElement,
        prefix: FunctionPrefix = '',
        indentCount = 0,
    ): DescFunction | undefined {
        return this.setFunctionDesc(girConstructorFunc, 'constructor', prefix, name, undefined, indentCount)
    }

    private setSignalFuncDesc(
        girSignalFunc: GirSignalElement,
        girClass: GirClassElement | GirInterfaceElement | GirUnionElement,
    ) {
        if (!girClass._desc) {
            throw new Error('girClass._desc not set!')
        }

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
            type: 'signal',
            prefix: '',
            returnType,
            arrowType: true,
            patched: false,
            retTypeIsVoid,
            params: paramDescs,
            paramsDef,
            outParams,
        }

        girSignalFunc._desc.desc = this.generator.generateSignalMethods(girSignalFunc, girClass)

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
        girEnumMember._desc.desc = this.generator.generateEnumerationMember(girEnumMember, indentCount)
        return girEnumMember._desc
    }

    public setEnumerationDesc(girEnum: GirEnumElement) {
        if (!girEnum?.$ || !girBool(girEnum.$.introspectable, true)) return undefined

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

        girEnum._desc.desc = this.generator.generateEnumeration(girEnum)
        return girEnum._desc
    }

    public setAliasDesc(girAlias: GirAliasElement) {
        if (!girAlias || !girAlias.$ || !girBool(girAlias.$.introspectable, true)) return undefined

        const typeName = this.typeLookup(girAlias).result
        const name = girAlias.$.name
        girAlias._desc = {
            desc: null,
            name,
            type: typeName,
        }

        girAlias._desc.desc = this.generator.generateAlias(girAlias)
        return girAlias._desc
    }

    public setConstantDesc(girConst: GirConstantElement) {
        girConst._desc = this.setVariableDesc(girConst, 'constant', false, false)
        if (girConst._desc?.name) {
            if (!this.constNames[girConst._desc.name]) {
                this.constNames[girConst._desc.name] = girConst
            } else {
                this.log.warn(`The constant '${girConst._desc.desc?.join(', ') || ''}' has already been exported`)
                girConst._desc = undefined
            }
        }

        return girConst._desc
    }

    private getClassConstructPropsDesc(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
        constructPropNames: LocalNames,
    ) {
        const constructProps: GirPropertyElement[] = []
        const girProperties = (girClass as GirClassElement | GirInterfaceElement).property
        if (!girProperties?.length) {
            return constructProps
        }
        for (const girProp of girProperties) {
            // Do not modify the original girProp, create a new one by clone `girProp` to `girConstrProp`
            const girConstrProp = clone(girProp)

            if (!girConstrProp.$.name) {
                continue
            }

            girConstrProp._desc = this.setPropertyDesc(girConstrProp, 'constructor-property', true, true, 0)

            if (!girConstrProp._desc) {
                continue
            }

            const localName = this.checkOrSetLocalName(girConstrProp, constructPropNames, 'property')

            if (!localName?.added) {
                continue
            }

            // Apply patches
            {
                const packageNameToPatch = this.getPackageName(girConstrProp)
                const constructPropPatches = girConstrProp._fullSymName
                    ? this.getPatches(packageNameToPatch, 'constructorProperties', girConstrProp._fullSymName)
                    : undefined

                if (constructPropPatches?.length) {
                    // this.log.warn(`Patch found for constructor property "${girConstrProp._fullSymName || ''}"!`)
                    girConstrProp._desc.desc = constructPropPatches
                }
            }

            constructProps.push(girConstrProp)
        }

        return constructProps
    }

    private getStaticConstructors(
        girClass: GirClassElement | GirInterfaceElement | GirUnionElement,
        girChildClass: GirClassElement | GirInterfaceElement | GirUnionElement,
        filter?: (funcName: string) => boolean,
    ): GirConstructorElement[] {
        const girConstructors = girClass.constructor
        if (!Array.isArray(girConstructors) || !girClass._desc) {
            return []
        }
        let ctors = girConstructors
            .map((girConstructor) => {
                if (!girChildClass._desc?.name) {
                    throw new Error('girClass._desc.name not set!')
                }
                girConstructor._desc = this.setConstructorFunctionDesc(
                    girChildClass._desc?.name,
                    girConstructor,
                    'static ',
                    1,
                )
                return girConstructor
            })
            .filter((girConstructor) => girConstructor?._desc?.name)

        if (filter)
            ctors = ctors.filter((girConstructor) => girConstructor?._desc?.name && filter(girConstructor?._desc?.name))
        return ctors
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
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
    ): GirMethodElement[] {
        if (!girClass.$.name) return []
        const fName = girClass.$.name + 'Class'
        let rec = this.ns.record?.find((r) => r.$.name == fName)
        if (!rec || !this.isGtypeStructFor(girClass, rec)) {
            rec = this.ns.record?.find((r) => this.isGtypeStructFor(girClass, r))
            fName == rec?.$.name
        }
        if (!rec) return []

        // Record methods
        const girMethods = rec.method || []
        return girMethods
            .map((girMethod) => {
                girMethod._desc = this.setFunctionDesc(girMethod, 'static function', 'static ', undefined, undefined, 1)
                return girMethod
            })
            .filter((method) => method !== undefined)
    }

    /**
     * Instance methods
     * @param girClass
     * @param localNames
     */
    private getClassMethodsDesc(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
        localNames: LocalNames,
    ) {
        const girMethods: GirMethodElement[] = []
        if (girClass.method) {
            for (const girMethod of girClass.method) {
                girMethod._desc = this.setFunctionDesc(girMethod, 'method')
                if (!girMethod._desc?.desc) {
                    continue
                }
                const localName = this.checkOrSetLocalName(girMethod, localNames, 'method')
                if (localName?.added && localName.method) {
                    girMethods.push(localName.method)
                }
            }
        }
        return girMethods
    }

    private getClassFieldsDesc(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
        localNames: LocalNames,
    ) {
        const girFields: GirFieldElement[] = []
        if (!girClass._desc) {
            this.log.warn('[setClassFieldsDesc] girClass._desc not set!')
            return girFields
        }

        if (girClass.field) {
            for (const girField of girClass.field) {
                girField._desc = this.setVariableDesc(girField, 'field', false, false)
                if (!girField._desc) {
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

    private getClassPropertiesDesc(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
        localNames: LocalNames,
    ) {
        const girProperties: GirPropertyElement[] = []
        const properties = (girClass as GirClassElement | GirInterfaceElement).property
        if (properties) {
            for (const girProperty of properties) {
                girProperty._desc = this.setPropertyDesc(girProperty, 'property')
                if (!girProperty._desc?.desc) {
                    continue
                }
                const localName = this.checkOrSetLocalName(girProperty, localNames, 'property')
                if (localName?.added && localName.property) {
                    girProperties.push(localName.property)
                }
            }
        }
        return girProperties
    }

    private getClassPropertyNames(girClass: GirClassElement | GirUnionElement | GirInterfaceElement) {
        const propertyNames: string[] = []

        if (!girClass._desc) {
            return propertyNames
        }

        const girProperties = girClass._desc.properties

        if (girProperties.length > 0) {
            for (const girProperty of girProperties) {
                if (girProperty._desc?.origName && !propertyNames.includes(girProperty._desc.origName)) {
                    propertyNames.push(girProperty._desc.origName)
                }
            }
        }

        for (const fullSymName of Object.keys(girClass._desc.extends)) {
            const girProperties = girClass._desc.extends[fullSymName]?.properties
            if (girProperties.length > 0) {
                for (const girProperty of girProperties) {
                    if (girProperty._desc?.origName && !propertyNames.includes(girProperty._desc.origName)) {
                        propertyNames.push(girProperty._desc.origName)
                    }
                }
            }
        }

        for (const fullSymName of Object.keys(girClass._desc.implements)) {
            const girProperties = girClass._desc.implements[fullSymName]?.properties
            if (girProperties.length > 0) {
                for (const girProperty of girProperties) {
                    if (girProperty._desc?.desc) {
                        if (girProperty._desc?.origName && !propertyNames.includes(girProperty._desc.origName)) {
                            propertyNames.push(girProperty._desc.origName)
                        }
                    }
                }
            }
        }

        return propertyNames
    }

    private getClassConstructorsDesc(girClass: GirClassElement | GirUnionElement | GirInterfaceElement) {
        const girConstructors: GirConstructorElement[] = []
        // JS constructor(s)
        if (girClass._desc?.isDerivedFromGObject) {
            // TODO see generateConstructorAndStaticFunctions.generateConstructorAndStaticFunctions
        } else {
            const girConstructorFuncs = (girClass['constructor'] || []) as GirConstructorElement[]
            if (Array.isArray(girConstructorFuncs)) {
                for (const girConstructorFunc of girConstructorFuncs) {
                    if (!girClass._desc?.name) continue
                    girConstructorFunc._desc = this.setConstructorFunctionDesc(
                        girClass._desc?.name,
                        girConstructorFunc,
                        'static ',
                        1,
                    )
                    if (!girConstructorFunc._desc) continue
                    if (!girConstructorFunc._desc?.name || !girConstructorFunc._desc.desc) continue
                    if (girConstructorFunc._desc.name !== 'new') continue

                    girConstructors.push(girConstructorFunc)
                }
            }
        }

        return girConstructors
    }

    private getClassVirtualMethodsDesc(girClass: GirClassElement | GirUnionElement | GirInterfaceElement) {
        const girVMethods = this.getOverloadableMethodsDesc(girClass, (girIface) => {
            const girVMethods: GirVirtualMethodElement[] = (girIface as GirClassElement)['virtual-method'] || []
            const methods = girVMethods
                .map((girVMethod) => {
                    girVMethod._desc = this.setFunctionDesc(
                        girVMethod,
                        'virtual-method',
                        'vfunc_',
                        undefined,
                        undefined,
                        0,
                    )
                    return girVMethod
                })
                .filter((girVMethod) => girVMethod?._desc?.name)
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
    private getClassSignalsDesc(
        girClass: GirClassElement | GirInterfaceElement | GirUnionElement,
        girParentClass: GirClassElement | GirInterfaceElement | GirUnionElement,
    ) {
        const girSignals: GirSignalElement[] = []
        if (!girParentClass._desc) {
            this.log.warn('girParentClass._desc not set!')
        }

        const signals: GirSignalElement[] =
            (girClass as GirClassElement | GirInterfaceElement).signal ||
            (girClass as GirClassElement | GirInterfaceElement)['glib:signal'] ||
            []
        if (signals) {
            for (const signal of signals) {
                signal._desc = this.setSignalFuncDesc(signal, girParentClass)
                girSignals.push(signal)
            }
        }
        return girSignals
    }

    private setClassBaseDesc(girClass: GirClassElement | GirUnionElement | GirInterfaceElement) {
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

        girClass._desc = {
            name: className,
            qualifiedName,
            parentName,
            qualifiedParentName,
            localParentName,
            namespace,
            version,
            isAbstract: this.isAbstractClass(girClass),
            localNames: {},
            constructPropNames: {},
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
            extends: {},
            implements: {},
        }

        if (girClass._desc.qualifiedParentName && localParentName) {
            girClass._desc.inheritConstructPropInterfaceName = `${localParentName}_ConstructProps`
        }

        girClass._desc.isDerivedFromGObject = this.isDerivedFromGObject(girClass)

        return girClass._desc
    }

    private setClassDesc(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
        record = false,
    ): DescClass | undefined {
        if (!girClass?.$?.name) return undefined

        if (girClass._desc) {
            // FIXME: We need to overwrite the already defined girClass._desc
            // this.log.warn('girClass._desc was already set')
        }

        girClass._desc = this.setClassBaseDesc(girClass)

        if (!girClass._desc) {
            return undefined
        }

        // BASE

        if (girClass._desc.isDerivedFromGObject) {
            girClass._desc.constructProps.push(
                ...this.getClassConstructPropsDesc(girClass, girClass._desc.constructPropNames),
            )
        }

        // TODO: Can't export fields for GObjects because names would clash
        if (record) girClass._desc.fields.push(...this.getClassFieldsDesc(girClass, girClass._desc.localNames))

        girClass._desc.properties.push(...this.getClassPropertiesDesc(girClass, girClass._desc.localNames))
        girClass._desc.methods.push(...this.getClassMethodsDesc(girClass, girClass._desc.localNames))
        girClass._desc.virtualMethods.push(...this.getClassVirtualMethodsDesc(girClass))
        girClass._desc.constructors.push(...this.getClassConstructorsDesc(girClass))
        girClass._desc.staticFunctions.push(...this.getClassStaticFunctionsDesc(girClass))
        girClass._desc.signals.push(...this.getClassSignalsDesc(girClass, girClass))

        // Copy fields and properties from inheritance tree
        this.traverseInheritanceTree(girClass, (extendsCls) => {
            if (!girClass._desc || !extendsCls._desc || !extendsCls._fullSymName || !extendsCls._module) {
                return
            }

            if (girClass._fullSymName === extendsCls._fullSymName) {
                return
            }

            const key = extendsCls._module.packageName + '.' + extendsCls._fullSymName
            if (girClass._desc.extends[key]) return

            girClass._desc.extends[key] = {
                class: extendsCls,
                fields: [],
                properties: [],
                methods: [],
                virtualMethods: [],
                signals: [],
            }

            girClass._desc.extends[key].fields.push(...this.getClassFieldsDesc(extendsCls, girClass._desc.localNames))
            girClass._desc.extends[key].properties.push(
                ...this.getClassPropertiesDesc(extendsCls, girClass._desc.localNames),
            )
            girClass._desc.extends[key].methods.push(...this.getClassMethodsDesc(extendsCls, girClass._desc.localNames))
            girClass._desc.extends[key].virtualMethods.push(...this.getClassVirtualMethodsDesc(extendsCls))
            girClass._desc.extends[key].signals.push(...this.getClassSignalsDesc(extendsCls, girClass))
        })

        // Copy properties from implemented interface
        this.forEachInterface(girClass, (iface) => {
            if (!girClass._desc || !iface._desc || !iface._fullSymName || !iface._module) {
                return
            }

            if (girClass._fullSymName === iface._fullSymName) {
                return
            }

            const key = iface._module.packageName + '.' + iface._fullSymName
            if (girClass._desc.implements[key]) return

            girClass._desc.implements[key] = {
                interface: iface,
                properties: [],
                constructProps: [],
                methods: [],
                signals: [],
            }

            if (girClass._desc.isDerivedFromGObject) {
                girClass._desc.implements[key].constructProps.push(
                    ...this.getClassConstructPropsDesc(iface, girClass._desc.constructPropNames),
                )
            }

            girClass._desc.implements[key].properties.push(
                ...this.getClassPropertiesDesc(iface, girClass._desc.localNames),
            )
            girClass._desc.implements[key].methods.push(...this.getClassMethodsDesc(iface, girClass._desc.localNames))
            girClass._desc.implements[key].signals.push(...this.getClassSignalsDesc(iface, girClass))
        })

        girClass._desc.propertyNames.push(...this.getClassPropertyNames(girClass))

        return girClass._desc
    }

    private isDerivedFromGObject(girClass: GirClassElement | GirUnionElement | GirInterfaceElement): boolean {
        if (typeof girClass._desc?.isDerivedFromGObject === 'boolean') return girClass._desc.isDerivedFromGObject
        let ret = false
        this.traverseInheritanceTree(girClass, (cls) => {
            if (cls._desc?.isDerivedFromGObject === true || cls._fullSymName === 'GObject.Object') {
                ret = true
            }
        })
        return ret
    }

    private traverseInheritanceTree(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
        callback: (girClass: GirClassElement | GirUnionElement | GirInterfaceElement) => void,
        depth = 0,
        recursive = true,
    ): void {
        if (!girClass.$.name) return
        if (!girClass._desc) girClass._desc = this.setClassDesc(girClass)
        if (!girClass._desc) return
        const { parentName, qualifiedParentName, name } = girClass._desc

        let parentPtr: GirClassElement | GirUnionElement | GirInterfaceElement | null = null

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
            this.log.warn(`Maximum recursion depth of ${MAXIMUM_RECURSION_DEPTH} reached for "${name}"`)
        } else {
            if (parentPtr && recursive) {
                this.traverseInheritanceTree(parentPtr, callback, ++depth, recursive)
            }
        }
    }

    private forEachInterface(
        girIface: GirInterfaceElement | GirClassElement | GirUnionElement,
        callback: (cls: GirInterfaceElement | GirClassElement | GirUnionElement) => void,
        recurseObjects = false,
        dups = {},
    ): void {
        if (!girIface.$.name) return
        if (!girIface._desc) girIface._desc = this.setClassDesc(girIface)
        if (!girIface._desc) return
        const girImplements = (girIface as GirInterfaceElement).implements || []
        if (girImplements?.length) {
            for (const girImplement of girImplements) {
                let name = girImplement.$.name
                const key = this.symTable.getKey(this.allDependencies, name)

                if (name.indexOf('.') < 0) {
                    name = this.namespace + '.' + name
                }
                if (key && dups[key]) {
                    continue
                }

                let iface: GirInterfaceElement | null = null
                const _iface = this.symTable.get(this.allDependencies, name)
                if (key) {
                    dups[key] = true
                    iface = _iface as GirInterfaceElement
                }

                if (iface) {
                    callback(iface)
                    this.forEachInterface(iface, callback, recurseObjects, dups)
                }
            }
        }
        const girPrerequisites = (girIface as GirInterfaceElement).prerequisite || []
        if (girPrerequisites?.length) {
            for (const girPrerequisite of girPrerequisites) {
                let parentName = girPrerequisite.$.name
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
    }

    private forEachInterfaceAndSelf(
        e: GirClassElement | GirUnionElement | GirInterfaceElement,
        callback: (cls: GirClassElement | GirUnionElement | GirInterfaceElement) => void,
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
        girElement: GirMethodElement | GirPropertyElement | GirFieldElement,
        localNames: LocalNames,
        type: LocalNameType,
    ): LocalNameCheck | null {
        let isOverloadable = false

        if (!girElement._desc?.desc) {
            return null
        }

        const name = girElement._desc?.name

        if (!name) {
            // this.log.warn(`No name for ${desc}`)
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
        if (localNames?.[name]?.[type]?._desc) {
            // Ignore duplicates with the same type
            // TODO should we use `this.functionSignaturesMatch` here?
            if (isEqual(localNames[name][type]?._desc, girElement._desc?.desc)) {
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
        return { ...localName, added: true, isOverloadable }
    }

    /**
     * Some classes implement interfaces which are also implemented by a superclass
     * and we need to exclude those in some circumstances
     * @param girClass
     * @param girIface
     */
    private interfaceIsDuplicate(
        girClass: GirClassElement | GirInterfaceElement | GirUnionElement,
        girIface: GirClassElement | GirUnionElement | GirInterfaceElement,
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

    private isGtypeStructFor(e: GirClassElement | GirUnionElement | GirInterfaceElement, rec: GirRecordElement) {
        const isFor = rec.$['glib:is-gtype-struct-for']
        return isFor && isFor == e.$.name
    }

    /**
     * E.g GObject.ObjectClass is a abstract class and required by UPowerGlib-1.0, UDisks-2.0 and others
     * @param girClass
     * @returns `true` if this is this a abstract class.
     */
    private isAbstractClass(girClass: GirClassElement | GirUnionElement | GirInterfaceElement) {
        return girClass.$?.['glib:is-gtype-struct-for'] ? true : false
    }

    private getOtherStaticFunctions(
        girClass: GirClassElement | GirInterfaceElement | GirUnionElement,
        stat = true,
    ): GirFunctionElement[] {
        const girFunctions: GirFunctionElement[] = []
        if (girClass.function) {
            for (const girFunction of girClass.function) {
                girFunction._desc = this.setFunctionDesc(
                    girFunction,
                    'static function',
                    stat ? 'static ' : '',
                    undefined,
                    undefined,
                    1,
                )
                if (girFunction._desc?.name && girFunction._desc?.name !== 'new') girFunctions.push(girFunction)
            }
        }
        return girFunctions
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
    private mergeOverloadableFunctions(
        map: FunctionMap,
        girFunc: GirFunctionElement | GirConstructorElement | GirVirtualMethodElement,
        force = true,
    ) {
        let result = false
        if (!girFunc._desc?.name) return result
        const oldFunc = map.get(girFunc._desc.name)
        if (!oldFunc?._desc?.desc || !girFunc._desc.desc) {
            if (force && girFunc._desc.desc) map.set(girFunc._desc.name, girFunc)
            return result
        }

        for (const newDef of girFunc._desc.desc) {
            let match = false
            for (const oldDef of oldFunc._desc?.desc) {
                if (this.functionSignaturesMatch(newDef, oldDef)) {
                    match = true
                    break
                }
            }
            if (!match) {
                oldFunc._desc.desc.push(newDef)
                result = true
            }
        }
        return result
    }

    /**
     * `fnMap` values are equivalent to the second element of a DescFunction.
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
        funcs: GirConstructorElement[] | GirFunctionElement[],
        force = false,
    ) {
        for (const func of funcs) {
            if (!func?._desc?.name) continue
            if (this.mergeOverloadableFunctions(fnMap, func) || force) {
                explicits.add(func._desc.name)
            }
        }
    }

    private functionMapToArray<T = GirFunctionElement | GirConstructorElement | GirVirtualMethodElement>(
        fnMap: FunctionMap<T>,
        explicits: Set<string>,
    ) {
        const girFunctions: Array<T> = []
        for (const key of Array.from(explicits.values())) {
            const func = fnMap.get(key)
            if (func) girFunctions.push(func)
        }
        return girFunctions
    }

    /**
     * Used for <method> and <virtual-method>
     * @param girClass
     * @param getMethods
     * @param statics
     */
    private getOverloadableMethodsDesc(
        girClass: GirClassElement | GirInterfaceElement | GirUnionElement,
        getMethodsDesc: (
            e: GirClassElement | GirInterfaceElement | GirUnionElement,
        ) => GirConstructorElement[] | GirFunctionElement[],
        statics = false,
    ) {
        const fnMap: FunctionMap = new Map()
        const explicits = new Set<string>()
        const funcs = getMethodsDesc(girClass)
        this.addOverloadableFunctions(fnMap, explicits, funcs, true)
        // Have to implement methods from girClass' interfaces
        this.forEachInterface(
            girClass,
            (iface) => {
                if (!this.interfaceIsDuplicate(girClass, iface)) {
                    const funcs = getMethodsDesc(iface)
                    this.addOverloadableFunctions(fnMap, explicits, funcs, true)
                }
            },
            false,
        )
        // Check for overloads among all inherited methods
        let bottom = true
        this.traverseInheritanceTree(girClass, (e) => {
            if (bottom) {
                bottom = false
                return
            }
            if (statics) {
                const funcs = getMethodsDesc(e)
                this.addOverloadableFunctions(fnMap, explicits, funcs, false)
            } else {
                let self = true
                this.forEachInterfaceAndSelf(e, (iface) => {
                    if (self || this.interfaceIsDuplicate(girClass, iface)) {
                        const funcs = getMethodsDesc(iface)
                        this.addOverloadableFunctions(fnMap, explicits, funcs, false)
                    }
                    self = false
                })
            }
        })
        return this.functionMapToArray(fnMap, explicits)
    }

    private getStaticFunctions(
        girClass: GirClassElement | GirInterfaceElement | GirUnionElement,
        getter: (
            e: GirClassElement | GirInterfaceElement | GirUnionElement,
        ) => GirConstructorElement[] | GirFunctionElement[],
    ) {
        return this.getOverloadableMethodsDesc(girClass, getter, true)
    }

    /**
     * Static methods, <constructor> and <function>
     * @param girClass
     * @param name
     */
    private getClassStaticFunctionsDesc(girClass: GirClassElement | GirInterfaceElement | GirUnionElement) {
        const girStaticFuncs: Array<GirFunctionElement | GirConstructorElement> = []

        girStaticFuncs.push(
            ...this.getStaticFunctions(girClass, (cls) => {
                return this.getStaticConstructors(cls, girClass)
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

    public exportEnumeration(girEnum: GirEnumElement) {
        const girEnumDesc = this.setEnumerationDesc(girEnum)

        return { def: girEnumDesc?.desc || [] }
    }

    public exportConstant(girConst: GirConstantElement) {
        girConst._desc = this.setConstantDesc(girConst)

        return {
            def: this.generator.generateConstant(girConst) || [],
        }
    }

    /**
     * Represents a record or GObject class or interface as a Typescript class
     * @param girClass
     * @param record
     */
    public _exportClass(girClass: GirClassElement | GirUnionElement | GirInterfaceElement, record = false) {
        const def: string[] = []
        girClass._desc = this.setClassDesc(girClass, record)
        def.push(...this.generator.generateClass(girClass, this.namespace))

        return {
            def,
        }
    }

    public exportFunction(girFunc: GirFunctionElement) {
        girFunc._desc = this.setFunctionDesc(girFunc, 'function', 'function ', undefined, undefined, 0)
        return { def: girFunc._desc?.desc || [] }
    }

    public exportCallbackInterface(girCallback: GirCallbackElement) {
        girCallback._descInterface = this.setCallbackInterfaceDesc(girCallback)
        return {
            def: girCallback._descInterface?.desc || [],
        }
    }

    public exportAlias(girAlias: GirAliasElement) {
        girAlias._desc = this.setAliasDesc(girAlias)
        return {
            def: girAlias._desc?.desc || [],
        }
    }

    public exportRecord(girRecord: GirRecordElement) {
        return this._exportClass(girRecord, true)
    }

    public exportUnion(girUnion: GirUnionElement) {
        return this._exportClass(girUnion, true)
    }

    public exportClass(girClass: GirClassElement | GirInterfaceElement) {
        return this._exportClass(girClass, false)
    }

    public exportInterface(girIface: GirInterfaceElement) {
        return this._exportClass(girIface, false)
    }

    // TODO: Move to TypeDefinitionGenerator
    public async exportModuleTS(outStream: NodeJS.WritableStream, outputPath: string | null): Promise<void> {
        const template = 'module.d.ts'
        const out: string[] = []

        if (outputPath) {
            out.push(await this.templateProcessor.load(template))
        }

        out.push(...this.generator.generateTSDocComment(`${this.packageName}`))

        out.push('')

        const deps: string[] = this.transitiveDependencies

        // Module dependencies as type references or imports
        if (this.config.environment === 'gjs') {
            out.push(...this.generator.generateModuleDependenciesImport('Gjs', 'Gjs', false))
        }

        for (const depPackageName of deps) {
            // Don't reference yourself as a dependency
            if (this.packageName !== depPackageName) {
                const girFilename = `${depPackageName}.gir`
                const { namespace } = splitModuleName(depPackageName)
                const depFile = findFileInDirs(this.config.girDirectories, girFilename)
                if (depFile.exists) {
                    out.push(...this.generator.generateModuleDependenciesImport(namespace, depPackageName, false))
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
                out.push(`declare namespace ${this.namespace} {`)
            } else if (this.config.useNamespace) {
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

            if (this.ns.callback) for (const cb of this.ns.callback) out.push(...this.exportCallbackInterface(cb).def)

            if (this.ns.interface) for (const iface of this.ns.interface) out.push(...this.exportInterface(iface).def)

            // Extra interfaces if a template with the module name  (e.g. '../templates/GObject-2.0.d.ts') is found
            // E.g. used for GObject-2.0 to help define GObject classes in js;
            // these aren't part of gi.
            if (this.templateProcessor.exists(`${this.packageName}.d.ts`)) {
                const templatePatches = await this.templateProcessor.load(`${this.packageName}.d.ts`)
                out.push(templatePatches)
            }

            if (this.ns.class) for (const cls of this.ns.class) out.push(...this.exportClass(cls).def)

            if (this.ns.record) for (const girRecord of this.ns.record) out.push(...this.exportRecord(girRecord).def)

            if (this.ns.union) for (const girUnion of this.ns.union) out.push(...this.exportUnion(girUnion).def)

            if (this.ns.alias)
                // GType is not a number in GJS
                for (const alias of this.ns.alias)
                    if (this.packageName !== 'GObject-2.0' || alias.$.name !== 'Type')
                        out.push(...this.exportAlias(alias).def)

            if (this.packageName === 'GObject-2.0') out.push('export interface Type {', '    name: string', '}')
        }
        // END Namespace
        if (this.config.useNamespace) {
            out.push(`}`)
        }

        if (this.config.buildType !== 'types' && this.config.useNamespace) {
            out.push(`export default ${this.namespace};`)
        }

        // End of file
        outStream.write(out.join('\n'))

        if (outputPath && this.config.pretty) {
            await this.templateProcessor.prettify(outputPath)
        }
    }

    // TODO: This method should in the future only prepare all types and not export anything.
    // The export should take place in the TypeDefinitionGenerator
    public async start(outStream: NodeJS.WritableStream, outputPath: string | null): Promise<void> {
        // TODO: Move to TypeDefinitionGenerator
        await this.exportModuleTS(outStream, outputPath)
        if (this.config.buildType === 'lib') {
            await this.generator.exportModule(this)
        }
    }
}
