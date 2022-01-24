import TypeDefinitionGenerator from './type-definition-generator.js'
import { Transformation, C_TYPE_MAP, FULL_TYPE_MAP, POD_TYPE_MAP, POD_TYPE_MAP_ARRAY } from './transformation.js'
import { Logger } from './logger.js'
import { isEqual, find, stripParamNames, isCommentLine, clone, girBool } from './utils.js'
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
    PartOfModule,
    PartOfClass,
    TypeArraySuffix,
    TypeNullableSuffix,
    TypeSuffix,
    TypeFunction,
    TypeMethod,
    TypeVariable,
    TypeField,
    TypeClass,
    TypeGirElement,
    TypeTsElement,
    GirConstructorElement,
    InheritanceTable,
    ParsedGir,
    GenerateConfig,
    DescProperty,
    DescInstanceParameter,
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
        girType: 'virtual-method',
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
        tsType: 'static-function',
    ): void

    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirConstructorElement[],
        girType: 'constructor',
        tsType: 'static-function',
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
        tsType: 'static-function' | 'event-methods' | 'method',
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

        this.annotateMethods(girClass, constructors, 'constructor', 'static-function')
        this.annotateMethods(girClass, functions, 'function', 'static-function')
        this.annotateMethods(girClass, methods, 'method', 'method')
        this.annotateMethods(girClass, vMethods, 'virtual-method', 'method')
        this.annotateMethods(girClass, signals, 'signal', 'event-methods')
        if (properties) this.annotateFields(girClass, properties, 'property')
        if (fields) this.annotateFields(girClass, fields, 'field')
    }

    /**
     * Annotates the custom `_module`, `_fullSymName` and `_girType` properties
     * and registers the element on the `symTable`.
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
                if ((girElement as GirCallableParamElement | GirFunctionElement).$.introspectable) {
                    if (!girBool((girElement as GirCallableParamElement | GirFunctionElement).$.introspectable, true))
                        continue
                }
                girElement._girType = girType
                girElement._tsType = this.girToTsType(girType, isStatic)
                girElement._module = this
                girElement._fullSymName = `${this.namespace}.${girElement.$.name}`
                if (this.symTable.get(this.allDependencies, girElement._fullSymName)) {
                    this.log.warn(`Duplicate symbol: ${girElement._fullSymName}`)
                }

                this.symTable.set(this.allDependencies, girElement._fullSymName, girElement)
            }
        }
    }

    public loadTypes(): void {
        if (this.ns.bitfield) this.annotateAndRegisterGirElement(this.ns.bitfield, 'bitfield')
        if (this.ns.callback) this.annotateAndRegisterGirElement(this.ns.callback, 'callback')
        if (this.ns.class) this.annotateAndRegisterGirElement(this.ns.class, 'class')
        if (this.ns.constant) this.annotateAndRegisterGirElement(this.ns.constant, 'constant')
        if (this.ns.enumeration) this.annotateAndRegisterGirElement(this.ns.enumeration, 'enumeration')
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
            const funcDesc = this.setFunctionDesc(
                callbacks[0],
                'callback',
                /* prefix */ '',
                /* isStatic */ false,
                /* overrideReturnType */ null,
                /* isArrowType */ true,
                /* indentCount */ 0,
            )
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

    private getReturnType(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirCallbackElement
            | GirSignalElement
            | GirVirtualMethodElement,
    ) {
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
            name: paramName,
            optional,
            type: paramType,
        }

        return girParam._desc
    }

    private getInstanceParameterDesc(instanceParameter: GirInstanceParameter): DescInstanceParameter | undefined {
        const typeName = instanceParameter.type?.[0]?.$?.name || undefined
        const rec = typeName ? this.ns.record?.find((r) => r.$.name == typeName) : undefined
        const structFor = rec?.$['glib:is-gtype-struct-for']
        const gobject = this.namespace === 'GObject' || this.namespace === 'GLib' ? '' : 'GObject.'
        if (structFor && instanceParameter.$.name) {
            // TODO: Should use of a constructor, and even of an instance, be discouraged?
            return {
                name: instanceParameter.$.name,
                types: [structFor, 'Function', `${gobject}Type`],
            }
        }
        return undefined
    }

    private setParametersDesc(outArrayLengthIndex: number, girParams?: GirCallableParams[]) {
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
                    instanceParameter._desc = this.getInstanceParameterDesc(instanceParameter)
                    if (instanceParameter._desc) {
                        instanceParameters.push(instanceParameter)
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
                        if (optDirection === 'out' || optDirection === 'inout') {
                            outParams.push(param /*...this.generator.generateOutParameterReturn(param)*/)
                            if (optDirection === 'out') continue
                        }
                        inParams.push(param)
                    }
                }
            }
        }

        return { outParams, paramNames, inParams, instanceParameters }
    }

    private setVariableDesc(
        girVar: GirPropertyElement,
        girType: 'property',
        tsType: 'field' | 'constructor-property',
        optional: boolean,
        allowQuotes: boolean,
    ): GirPropertyElement['_desc']

    private setVariableDesc(
        girVar: GirConstantElement,
        girType: 'constant',
        tsType: 'constant',
        optional: boolean,
        allowQuotes: boolean,
    ): GirConstantElement['_desc']

    private setVariableDesc(
        girVar: GirFieldElement,
        girType: 'field',
        tsType: 'field',
        optional: boolean,
        allowQuotes: boolean,
    ): GirFieldElement['_desc']

    private setVariableDesc(
        girVar: GirPropertyElement | GirFieldElement | GirConstantElement,
        girType: 'property' | 'constant' | 'field',
        tsType: 'constant' | 'field' | 'constructor-property',
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

        girVar._girType = girType
        girVar._tsType = tsType

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
        girType: 'property',
        tsType: 'field' | 'constructor-property',
        construct?: boolean,
        optional?: boolean,
        indentCount?: number,
    ): DescProperty | undefined

    private setPropertyDesc(
        girProp: GirFieldElement,
        girType: 'field',
        tsType: 'field',
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
        girType: 'property' | 'field',
        tsType: 'constructor-property' | 'field',
        construct = false,
        optional = true,
        indentCount = 0,
    ): DescProperty | undefined {
        if (girBool((girProp as GirPropertyElement).$['construct-only']) && !construct) return undefined
        if (!girBool(girProp.$.writable) && construct) return undefined
        if (girBool((girProp as GirFieldElement).$.private)) return undefined

        const readonly = girBool(girProp.$.writable)
        girProp._girType = girType
        switch (girType) {
            case 'property':
                girProp._desc = this.setVariableDesc(
                    girProp as GirPropertyElement,
                    girType,
                    tsType,
                    construct && optional,
                    true,
                )
                break
            case 'field':
                if (tsType !== 'field') {
                    throw new Error(`Wrong tsType: "${tsType}" for girType: "${girType}`)
                }
                girProp._desc = this.setVariableDesc(
                    girProp as GirFieldElement,
                    girType,
                    tsType,
                    construct && optional,
                    true,
                )
                break
            default:
                throw new Error(`Unknown property type: ${girType as string}`)
        }

        if (!girProp._desc?.name) {
            return undefined
        }

        girProp._desc = {
            ...girProp._desc,
            desc: null,
            readonly,
        }

        girProp._desc.desc = this.generator.generateProperty(girProp, indentCount)

        return girProp._desc
    }

    /**
     *
     * @param girFunc
     * @param prefix E.g. vfunc
     * @param overrideReturnType
     * @param isArrowType
     * @param indentCount
     */
    private setFunctionDesc(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirCallbackElement
            | GirVirtualMethodElement,
        girType: 'virtual-method' | 'method' | 'constructor' | 'function' | 'callback',
        prefix: FunctionPrefix = '',
        isStatic = false,
        overrideReturnType: string | null = null,
        isArrowType = false,
        indentCount = 0,
    ): DescFunction | undefined {
        if (!girFunc || !girFunc.$ || !girBool(girFunc.$.introspectable, true) || girFunc.$['shadowed-by']) {
            return undefined
        }
        const packageName = this.getPackageName(girFunc)
        let name = girFunc.$.name
        const { returnType, outArrayLengthIndex } = this.getReturnType(girFunc)
        const retTypeIsVoid = returnType === 'void'

        const { inParams, outParams, instanceParameters } = this.setParametersDesc(
            outArrayLengthIndex,
            girFunc.parameters,
        )
        const shadows = (girFunc as GirMethodElement).$.shadows

        if (shadows) {
            name = shadows
        }

        girFunc._girType = girType
        girFunc._tsType = this.girToTsType(girType, isStatic)

        // Function name transformation by environment
        name = this.transformation.transformFunctionName(name)

        girFunc._desc = {
            patched: true,
            desc: null,
            isArrowType,
            isStatic,
            returnType,
            retTypeIsVoid,
            name,
            overrideReturnType: overrideReturnType || undefined,
            prefix,
            inParams,
            instanceParameters,
            outParams,
        }

        const methodPatches = girFunc._fullSymName ? this.getPatches(packageName, 'methods', girFunc._fullSymName) : []

        girFunc._desc.desc = this.generator.generateFunction(girFunc, methodPatches, indentCount)

        return girFunc._desc
    }

    private setCallbackInterfaceDesc(girCallback: GirCallbackElement) {
        if (!girCallback || !girCallback.$ || !girBool(girCallback.$.introspectable, true)) return undefined

        girCallback._desc = this.setFunctionDesc(girCallback, 'callback', '', false, null, true, 0)

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
        indentCount = 0,
    ): DescFunction | undefined {
        return this.setFunctionDesc(
            girConstructorFunc,
            'constructor',
            'static ',
            /* isStatic */ true,
            /* overrideReturnType */ name,
            /* isArrowType */ false,
            indentCount,
        )
    }

    private setSignalFuncDesc(
        girSignalFunc: GirSignalElement,
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._desc) {
            throw new Error('girClass._desc not set!')
        }

        const name = this.transformation.transform('signalName', girSignalFunc.$.name)
        const { returnType, outArrayLengthIndex } = this.getReturnType(girSignalFunc)
        const retTypeIsVoid = returnType === 'void'
        const { inParams, outParams, instanceParameters } = this.setParametersDesc(
            outArrayLengthIndex,
            girSignalFunc.parameters,
        )

        girSignalFunc._desc = {
            desc: null,
            name,
            prefix: '',
            returnType,
            isArrowType: true,
            isStatic: false,
            patched: false,
            retTypeIsVoid,
            inParams,
            instanceParameters,

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
        const name = this.transformation.transformEnumMember(memberName)
        girEnumMember._desc = {
            desc: null,
            name,
        }
        girEnumMember._desc.desc = this.generator.generateEnumerationMember(girEnumMember, indentCount)
        return girEnumMember._desc
    }

    public setEnumerationDesc(girEnum: GirEnumElement | GirBitfieldElement) {
        if (!girEnum?.$ || !girBool(girEnum.$.introspectable, true)) return undefined

        // E.g. the NetworkManager-1.0 has enum names starting with 80211
        const name = this.transformation.transformEnumName(girEnum)

        girEnum._desc = {
            desc: null,
            name,
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
        girConst._desc = this.setVariableDesc(girConst, 'constant', 'constant', false, false)
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
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
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

            girConstrProp._desc = this.setPropertyDesc(girConstrProp, 'property', 'constructor-property', true, true, 0)

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
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        girChildClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        useReference = true,
    ): GirConstructorElement[] {
        const constructors = girClass.constructor
        const girConstructors: GirConstructorElement[] = []

        if (!girChildClass._desc?.name) {
            throw new Error('girClass._desc.name not set!')
        }

        if (!Array.isArray(constructors) || !girClass._desc) {
            return girConstructors
        }

        for (const _girConstructor of constructors) {
            let girConstructor: GirConstructorElement
            if (useReference) {
                girConstructor = _girConstructor
            } else {
                girConstructor = clone(_girConstructor)
            }

            girConstructor._desc = this.setConstructorFunctionDesc(girChildClass._desc?.name, girConstructor, 0)

            if (!girConstructor?._desc?.name) {
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
                girMethod._desc = this.setFunctionDesc(
                    girMethod,
                    'function',
                    'static ',
                    /* isStatic */ true,
                    /* overrideReturnType */ null,
                    /* isArrowType */ false,
                    /* indentCount */ 0,
                )
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
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        localNames: LocalNames,
    ) {
        const girMethods: GirMethodElement[] = []
        if (girClass.method) {
            for (const girMethod of girClass.method) {
                girMethod._desc = this.setFunctionDesc(
                    girMethod,
                    'method',
                    /* prefix */ '',
                    /* isStatic */ false,
                    /* overrideReturnType */ null,
                )
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
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        localNames: LocalNames,
    ) {
        const girFields: GirFieldElement[] = []
        if (!girClass._desc) {
            this.log.warn('[setClassFieldsDesc] girClass._desc not set!')
            return girFields
        }

        if (girClass.field) {
            for (const girField of girClass.field) {
                girField._desc = this.setVariableDesc(girField, 'field', 'field', false, false)
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
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        localNames: LocalNames,
    ) {
        const girProperties: GirPropertyElement[] = []
        const properties = (girClass as GirClassElement | GirInterfaceElement).property
        if (properties) {
            for (const girProperty of properties) {
                girProperty._desc = this.setPropertyDesc(girProperty, 'property', 'field')
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

    private getClassPropertyNames(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        const propertyNames: string[] = []

        if (!girClass._desc) {
            return propertyNames
        }

        const girProperties = girClass._desc.properties

        if (girProperties.length > 0) {
            for (const girProperty of girProperties) {
                if (girProperty.$.name && !propertyNames.includes(girProperty.$.name)) {
                    propertyNames.push(girProperty.$.name)
                }
            }
        }

        for (const fullSymName of Object.keys(girClass._desc.extends)) {
            const girProperties = girClass._desc.extends[fullSymName]?.properties
            if (girProperties.length > 0) {
                for (const girProperty of girProperties) {
                    if (girProperty.$.name && !propertyNames.includes(girProperty.$.name)) {
                        propertyNames.push(girProperty.$.name)
                    }
                }
            }
        }

        for (const fullSymName of Object.keys(girClass._desc.implements)) {
            const girProperties = girClass._desc.implements[fullSymName]?.properties
            if (girProperties.length > 0) {
                for (const girProperty of girProperties) {
                    if (girProperty._desc?.desc) {
                        if (girProperty.$.name && !propertyNames.includes(girProperty.$.name)) {
                            propertyNames.push(girProperty.$.name)
                        }
                    }
                }
            }
        }

        return propertyNames
    }

    private getClassConstructorsDesc(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        const girConstructors: GirConstructorElement[] = []
        // JS constructor(s)
        if (girClass._desc?.isDerivedFromGObject) {
            // TODO see generateConstructorAndStaticFunctions.generateConstructorAndStaticFunctions
        } else {
            const constructors = girClass.constructor
            if (Array.isArray(constructors)) {
                for (const girConstructor of constructors) {
                    if (!girClass._desc?.name) continue

                    girConstructor._desc = this.setConstructorFunctionDesc(girClass._desc?.name, girConstructor, 0)

                    if (
                        !girConstructor._desc?.name ||
                        !girConstructor._desc.desc ||
                        girConstructor._desc.name !== 'new'
                    )
                        continue

                    girConstructors.push(girConstructor)
                }
            }
        }

        return girConstructors
    }

    private getClassVirtualMethodsDesc(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        const girVMethods = this.getOverloadableMethodsDesc(girClass, (girIface) => {
            const girVMethods: GirVirtualMethodElement[] = (girIface as GirClassElement)['virtual-method'] || []
            const methods = girVMethods
                .map((girVMethod) => {
                    girVMethod._desc = this.setFunctionDesc(
                        girVMethod,
                        'virtual-method',
                        /* prefix */
                        'vfunc_',
                        /* isStatic */
                        false,
                        /* overrideReturnType */
                        null,
                        /* isArrowType */
                        undefined,
                        /* indentCount */
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
     * @param useReference If `GirSignalElement` of inherited or implemented classes are used no reference should be used here,
     * otherwise the `GirSignalElement` from other modules will be changed which will lead to hard to understand errors.
     * On the other hand a copy can take a lot of memory and performance or end in an endless recursion
     * @returns
     */
    private getClassSignalsDesc(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        girParentClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        useReference = true,
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
            for (const _girSignal of signals) {
                let girSignal: GirSignalElement
                if (useReference) {
                    girSignal = _girSignal
                } else {
                    girSignal = clone(_girSignal)
                }
                girSignal._desc = this.setSignalFuncDesc(girSignal, girParentClass)
                girSignals.push(girSignal)
            }
        }
        return girSignals
    }

    private setClassBaseDesc(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
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
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): DescClass | undefined {
        if (!girClass?.$?.name) return undefined

        if (girClass._desc) {
            // TODO: We need to overwrite the already defined girClass._desc
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

        girClass._desc.constructors.push(...this.getClassConstructorsDesc(girClass))
        // FIXME: If we use the reference the return type is wrong, if we use not the reference (copy) the static prefix is lost
        girClass._desc.staticFunctions.push(...this.getClassStaticFunctionsDesc(girClass, false))

        // TODO: Can't export fields for GObjects because names would clash
        if (girClass._girType === 'record')
            girClass._desc.fields.push(...this.getClassFieldsDesc(girClass, girClass._desc.localNames))

        girClass._desc.properties.push(...this.getClassPropertiesDesc(girClass, girClass._desc.localNames))
        girClass._desc.methods.push(...this.getClassMethodsDesc(girClass, girClass._desc.localNames))
        girClass._desc.virtualMethods.push(...this.getClassVirtualMethodsDesc(girClass))
        girClass._desc.signals.push(...this.getClassSignalsDesc(girClass, girClass, false))

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
            girClass._desc.extends[key].signals.push(...this.getClassSignalsDesc(extendsCls, girClass, false))
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
            girClass._desc.implements[key].signals.push(...this.getClassSignalsDesc(iface, girClass, false))
        })

        girClass._desc.propertyNames.push(...this.getClassPropertyNames(girClass))

        return girClass._desc
    }

    private isDerivedFromGObject(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): boolean {
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
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        callback: (girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) => void,
        depth = 0,
        recursive = true,
    ): void {
        if (!girClass.$.name) return
        if (!girClass._desc) girClass._desc = this.setClassDesc(girClass)
        if (!girClass._desc) return
        const { parentName, qualifiedParentName } = girClass._desc

        let parentPtr: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement | null = null

        if (parentName && qualifiedParentName) {
            if (this.symTable.get(this.allDependencies, qualifiedParentName)) {
                parentPtr = (this.symTable.get(this.allDependencies, qualifiedParentName) as GirClassElement) || null
            }

            if (!parentPtr && parentName == 'Object') {
                parentPtr = (this.symTable.getByHand('GObject-2.0.GObject.Object') as GirClassElement) || null
            }
        }

        callback(girClass)

        if (parentPtr && recursive) {
            this.traverseInheritanceTree(parentPtr, callback, ++depth, recursive)
        }
    }

    private forEachInterface(
        girIface: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        callback: (cls: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) => void,
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
        girFunc: GirFunctionElement | GirConstructorElement | GirMethodElement | GirVirtualMethodElement,
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
        funcs: Array<GirConstructorElement | GirFunctionElement | GirMethodElement | GirVirtualMethodElement>,
        force = false,
    ) {
        for (const func of funcs) {
            if (!func?._desc?.name) continue
            if (this.mergeOverloadableFunctions(fnMap, func) || force) {
                explicits.add(func._desc.name)
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

    /**
     * Used for <method> and <virtual-method>
     * @param girClass
     * @param getMethods
     * @param isStatic
     */
    private getOverloadableMethodsDesc(
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
        // Check for overloads among all inherited methods
        let bottom = true
        this.traverseInheritanceTree(girClass, (cls) => {
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
        })
        return this.functionMapToArray(fnMap, explicits)
    }

    private getStaticFunctions(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        getter: (
            e: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        ) => Array<GirConstructorElement | GirFunctionElement | GirMethodElement>,
    ) {
        return this.getOverloadableMethodsDesc(girClass, getter, true) as Array<
            GirConstructorElement | GirFunctionElement | GirMethodElement
        >
    }

    private getOtherStaticFunctions(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        useReference = true,
    ): GirFunctionElement[] {
        const girFunctions: GirFunctionElement[] = []
        if (girClass.function) {
            for (const _girFunction of girClass.function) {
                let girFunction: GirFunctionElement
                if (useReference) {
                    girFunction = _girFunction
                } else {
                    girFunction = clone(_girFunction)
                }

                girFunction._desc = this.setFunctionDesc(
                    girFunction,
                    'function',
                    /* prefix */
                    'static ',
                    /* isStatic */
                    true,
                    /* overrideReturnType */
                    null,
                    /* isArrowType */
                    false,
                    /* indentCount */
                    0,
                )

                if (!girFunction._desc?.name || girFunction._desc?.name === 'new') continue

                girFunctions.push(girFunction)
            }
        }
        return girFunctions
    }

    /**
     * Static methods, <constructor> and <function>
     * @param girClass
     * @param name
     */
    private getClassStaticFunctionsDesc(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        useReference = true,
    ) {
        const girStaticFuncs: Array<GirFunctionElement | GirConstructorElement | GirMethodElement> = []

        girStaticFuncs.push(
            ...this.getStaticFunctions(girClass, (cls) => {
                return this.getStaticConstructors(cls, girClass, useReference)
            }),
        )
        girStaticFuncs.push(
            ...this.getStaticFunctions(girClass, (cls) => {
                return this.getOtherStaticFunctions(cls, useReference)
            }),
        )
        girStaticFuncs.push(
            ...this.getStaticFunctions(girClass, (cls) => {
                return this.getClassRecordMethods(cls)
            }),
        )

        return girStaticFuncs
    }

    private setModuleDesc() {
        if (this.ns.enumeration)
            for (const girEnum of this.ns.enumeration) {
                girEnum._desc = this.setEnumerationDesc(girEnum)
            }

        if (this.ns.bitfield)
            for (const girBitfield of this.ns.bitfield) {
                girBitfield._desc = this.setEnumerationDesc(girBitfield)
            }

        if (this.ns.constant)
            for (const girConst of this.ns.constant) {
                girConst._desc = this.setConstantDesc(girConst)
            }

        if (this.ns.function)
            for (const girFunc of this.ns.function) {
                girFunc._desc = this.setFunctionDesc(girFunc, 'function', /* prefix */ 'function ')
            }

        if (this.ns.callback)
            for (const girCallback of this.ns.callback) {
                girCallback._descInterface = this.setCallbackInterfaceDesc(girCallback)
            }

        if (this.ns.interface)
            for (const girIface of this.ns.interface) {
                girIface._desc = this.setClassDesc(girIface)
            }

        if (this.ns.class)
            for (const girClass of this.ns.class) {
                girClass._desc = this.setClassDesc(girClass)
            }

        if (this.ns.record)
            for (const girRecord of this.ns.record) {
                girRecord._desc = this.setClassDesc(girRecord)
            }

        if (this.ns.union)
            for (const girUnion of this.ns.union) {
                girUnion._desc = this.setClassDesc(girUnion)
            }

        if (this.ns.alias) {
            // GType is not a number in GJS
            for (const girAlias of this.ns.alias) {
                if (this.packageName !== 'GObject-2.0' || girAlias.$.name !== 'Type')
                    girAlias._desc = this.setAliasDesc(girAlias)
            }
        }
    }

    public girToTsType(girType: 'alias', isStatic?: boolean): 'type'
    public girToTsType(girType: 'enumeration' | 'bitfield', isStatic?: boolean): 'enumeration'
    public girToTsType(girType: 'callback', isStatic?: boolean): 'interface'
    public girToTsType(girType: 'class' | 'interface' | 'union' | 'record', isStatic?: boolean): 'class'
    public girToTsType(girType: 'constant', isStatic?: boolean): 'constant'
    public girToTsType(girType: 'constructor', isStatic?: boolean): 'static-function'
    public girToTsType(girType: 'method' | 'virtual-method', isStatic?: boolean): 'method'
    public girToTsType(girType: 'signal', isStatic?: boolean): 'event-methods'
    public girToTsType(girType: 'function', isStatic: true): 'static-function'
    public girToTsType(girType: 'function', isStatic: false): 'function'
    public girToTsType(
        girType: 'function' | 'method' | 'virtual-method' | 'constructor' | 'callback',
        isStatic?: boolean,
    ): 'function' | 'method' | 'interface' | 'static-function'
    public girToTsType(girType: TypeGirElement, isStatic?: boolean): TypeTsElement
    public girToTsType(girType: TypeGirElement, isStatic?: boolean): TypeTsElement {
        switch (girType) {
            case 'alias':
                return 'type'
            case 'enumeration':
            case 'bitfield':
                return 'enumeration'
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
                return 'static-function'
            case 'method':
            case 'virtual-method':
                return 'method'
            case 'signal':
                return 'event-methods'
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
        }
        throw new Error(`Unknown gir type: "${String(girType)}"!`)
    }

    public async start(outStream: NodeJS.WritableStream, outputPath: string | null): Promise<void> {
        this.setModuleDesc()
        await this.generator.exportModuleTS(outStream, outputPath, this)
        if (this.config.buildType === 'lib') {
            await this.generator.exportModule(this)
        }
    }
}
