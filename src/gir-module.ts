import lodash from 'lodash'
import TemplateProcessor from './template-processor'
import { Transformation, C_TYPE_MAP, FULL_TYPE_MAP, POD_TYPE_MAP, POD_TYPE_MAP_ARRAY } from './transformation'
import { Logger } from './logger'

import {
    Environment,
    BuildType,
    GirRepository,
    GirNamespace,
    GirAlias,
    GirEnumeration,
    GirFunction,
    GirClass,
    GirVariable,
    GirArray,
    GirType,
    TypeArraySuffix,
    TypeNullableSuffix,
    TypeSuffix,
} from './types'

export class GirModule {
    /**
     * E.g. 'Gtk'
     */
    name: string | null = null
    /**
     * E.g. '3.0'
     */
    version = '0.0'
    /**
     * E.g. 'Gtk-3.0'
     */
    fullName: string | null = null
    dependencies: string[] = []
    transitiveDependencies: string[] = []
    repo: GirRepository
    ns: GirNamespace = { $: { name: '', version: '' } }
    symTable: { [key: string]: any } = {}
    patch: { [key: string]: string[] } = {}
    transformation: Transformation
    extends?: string
    log = Logger.getInstance()

    constructor(
        xml,
        private readonly environment: Environment,
        private readonly buildType: BuildType,
        private readonly prettify: boolean,
    ) {
        this.repo = xml.repository
        this.transformation = new Transformation(environment)

        if (this.repo.include) {
            for (const i of this.repo.include) {
                this.dependencies.unshift(`${i.$.name}-${i.$.version}`)
            }
        }

        if (this.repo.namespace && this.repo.namespace.length) {
            this.ns = this.repo.namespace[0]
            this.name = this.ns.$.name
            this.version = this.ns.$.version
            this.fullName = `${this.name}-${this.version}`
        }
    }

    loadTypes(dict): void {
        const loadTypesInternal = (arr): void => {
            if (arr) {
                for (const x of arr) {
                    if (x.$) {
                        if (x.$.introspectable) {
                            if (!this.girBool(x.$.introspectable, true)) continue
                        }
                    }

                    const symName = `${this.name}.${x.$.name}`
                    if (dict[symName]) {
                        this.log.warn(`duplicate symbol: ${symName}`)
                    }

                    x._module = this
                    x._fullSymName = symName
                    dict[symName] = x
                }
            }
        }
        loadTypesInternal(this.ns.bitfield)
        loadTypesInternal(this.ns.callback)
        loadTypesInternal(this.ns.class)
        loadTypesInternal(this.ns.constant)
        loadTypesInternal(this.ns.enumeration)
        loadTypesInternal(this.ns.function)
        loadTypesInternal(this.ns.interface)
        loadTypesInternal(this.ns.record)
        loadTypesInternal(this.ns.union)
        loadTypesInternal(this.ns.alias)

        const annotateFunctionArguments = (f: GirFunction): void => {
            const funcName = f._fullSymName
            if (f.parameters)
                for (const p of f.parameters)
                    if (p.parameter)
                        for (const x of p.parameter) {
                            x._module = this
                            if (x.$ && x.$.name) {
                                x._fullSymName = `${funcName}.${x.$.name}`
                            }
                        }
        }
        const annotateFunctionReturn = (f: GirFunction): void => {
            const retVal: GirVariable[] | undefined = f['return-value']
            if (retVal)
                for (const x of retVal) {
                    x._module = this
                    if (x.$ && x.$.name) {
                        x._fullSymName = `${f._fullSymName}.${x.$.name}`
                    }
                }
        }
        const annotateFunctions = (obj: GirClass | null, funcs: GirFunction[]): void => {
            if (funcs)
                for (const f of funcs) {
                    const nsName = obj ? obj._fullSymName : this.name
                    f._fullSymName = `${nsName}.${f.$.name}`
                    annotateFunctionArguments(f)
                    annotateFunctionReturn(f)
                }
        }
        const annotateVariables = (obj: GirClass | null, vars): void => {
            if (vars)
                for (const x of vars) {
                    const nsName = obj ? obj._fullSymName : this.name
                    x._module = this
                    if (x.$ && x.$.name) {
                        x._fullSymName = `${nsName}.${x.$.name}`
                    }
                }
        }

        if (this.ns.callback) for (const f of this.ns.callback) annotateFunctionArguments(f)

        const objs = (this.ns.class ? this.ns.class : [])
            .concat(this.ns.record ? this.ns.record : [])
            .concat(this.ns.interface ? this.ns.interface : [])

        for (const c of objs) {
            c._module = this
            c._fullSymName = `${this.name}.${c.$.name}`
            annotateFunctions(c, c.function || [])
            annotateFunctions(c, c.method || [])
            annotateFunctions(c, c['virtual-method'] || [])
            annotateFunctions(c, c['glib:signal'] || [])
            annotateVariables(c, c.property)
            annotateVariables(c, c.field)
        }

        if (this.ns.function) annotateFunctions(null, this.ns.function)

        if (this.ns.constant) annotateVariables(null, this.ns.constant)

        // if (this.ns.)
        // props

        this.symTable = dict
    }

    loadInheritance(inheritanceTable): void {
        // Class hierarchy
        for (const cls of this.ns.class ? this.ns.class : []) {
            let parent
            if (cls.$ && cls.$.parent) parent = cls.$.parent
            if (!parent) continue
            if (!cls._fullSymName) continue

            if (parent.indexOf('.') < 0) {
                parent = this.name + '.' + parent
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

    private typeLookup(e: GirVariable): string {
        let type: GirType
        let arr: TypeArraySuffix = ''
        let arrCType: string | undefined
        let nul: TypeNullableSuffix = ''

        const collection = e.array
            ? e.array
            : e.type && /^GLib.S?List$/.test(e.type[0].$?.name)
            ? (e.type as GirArray[])
            : undefined

        if (collection && collection.length > 0) {
            const typeArray = collection[0].type
            if (typeArray == null || typeArray.length == 0) return 'any'
            if (collection[0].$) {
                const ea = collection[0].$
                arrCType = ea['c:type']
            }
            type = typeArray[0]
            arr = '[]'
        } else if (e.type) type = e.type[0]
        else return 'any'

        if (e.$) {
            const nullable = this.girBool(e.$.nullable) || this.girBool(e.$['allow-none'])
            if (nullable) {
                nul = ' | null'
            }
        }

        if (!type.$) return 'any'

        const suffix: TypeSuffix = (arr + nul) as TypeSuffix

        if (arr) {
            if (POD_TYPE_MAP_ARRAY(this.environment)[type.$.name] != null) {
                return POD_TYPE_MAP_ARRAY(this.environment)[type.$.name] + nul
            }
        }

        if (POD_TYPE_MAP[type.$.name] != null) {
            return POD_TYPE_MAP[type.$.name] + suffix
        }

        if (!this.name) return 'any'

        let cType = type.$['c:type']
        if (!cType && arrCType) cType = arrCType

        if (cType) {
            if (C_TYPE_MAP(this.name, suffix)[cType]) {
                return C_TYPE_MAP(this.name, suffix)[cType]
            }
        }

        let fullTypeName: string | null = type.$.name

        if (fullTypeName && FULL_TYPE_MAP(this.environment)[fullTypeName]) {
            return FULL_TYPE_MAP(this.environment)[fullTypeName]
        }

        // Fully qualify our type name if need be
        if (fullTypeName && fullTypeName.indexOf('.') < 0) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            let mod: GirModule = this
            if (e._module) mod = e._module
            fullTypeName = `${mod.name}.${type.$.name}`
        }

        if (!fullTypeName || this.symTable[fullTypeName] == null) {
            this.log.warn(`Could not find type ${fullTypeName} for ${e.$.name}`)
            return ('any' + arr) as 'any' | 'any[]'
        }

        if (fullTypeName.indexOf(this.name + '.') == 0) {
            const ret = fullTypeName.substring(this.name.length + 1)
            // this.log.warn(`Rewriting ${fullTypeName} to ${ret} + ${suffix} -- ${this.name} -- ${e._module}`)
            if (fullTypeName == 'Gio.ApplicationFlags') {
                debugger
            }
            const result = ret + suffix
            return result
        }

        return fullTypeName + suffix
    }

    /**
     * E.g. replaces something like `NetworkManager.80211ApFlags` with `NetworkManager._80211ApFlags`
     * @param e
     */
    private typeLookupTransformed(e: GirVariable): string {
        let names = this.typeLookup(e).split('.')
        names = names.map(name => this.transformation.transformTypeName(name))
        return names.join('.')
    }

    private girBool(e: string | undefined, defaultVal = false): boolean {
        if (e) {
            if (parseInt(e) == 0) return false
            return true
        }
        return defaultVal
    }

    private getReturnType(e): [string, number] {
        let returnType: string

        const returnVal = e['return-value'] ? e['return-value'][0] : undefined
        if (returnVal) {
            returnType = this.typeLookupTransformed(returnVal)
        } else returnType = 'void'

        const outArrayLengthIndex =
            returnVal.array && returnVal.array[0].$?.length ? Number(returnVal.array[0].$.length) : -1

        return [returnType, outArrayLengthIndex] as [string, number]
    }

    private arrayLengthIndexLookup(param: GirVariable): number {
        if (!param.array) return -1

        const arr: GirArray = param.array[0]
        if (!arr.$) return -1

        if (arr.$.length) {
            return parseInt(arr.$.length)
        }

        return -1
    }

    private closureDataIndexLookup(param: GirVariable): number {
        if (!param.$.closure) return -1

        return parseInt(param.$.closure)
    }

    private destroyDataIndexLookup(param: GirVariable): number {
        if (!param.$.destroy) return -1

        return parseInt(param.$.destroy)
    }

    private getParameters(parameters, outArrayLengthIndex: number): [string, string[]] {
        const def: string[] = []
        const outParams: string[] = []

        if (parameters && parameters.length > 0) {
            const parametersArray = parameters[0].parameter
            if (parametersArray) {
                const skip = outArrayLengthIndex === -1 ? [] : [parametersArray[outArrayLengthIndex]]

                const processParams = (getIndex): void => {
                    for (const param of parametersArray as GirVariable[]) {
                        const index = getIndex(param)
                        if (index < 0) continue
                        if (index >= parametersArray.length) continue
                        skip.push(parametersArray[index])
                    }
                }

                processParams(this.arrayLengthIndexLookup)
                processParams(this.closureDataIndexLookup)
                processParams(this.destroyDataIndexLookup)

                for (const param of parametersArray as GirVariable[]) {
                    const paramName = this.transformation.transformParameterName(param.$.name || '-', false)

                    const paramType = this.typeLookupTransformed(param)

                    if (skip.indexOf(param) !== -1) {
                        continue
                    }

                    const optDirection = param.$.direction
                    if (optDirection) {
                        if (optDirection == 'out') {
                            outParams.push(`/* ${paramName} */ ${paramType}`)
                            continue
                        }
                    }

                    let allowNone = param.$['allow-none'] ? '?' : ''

                    if (allowNone) {
                        const index = parametersArray.indexOf(param)
                        const following = (parametersArray as GirVariable[])
                            .slice(index)
                            .filter(() => skip.indexOf(param) === -1)
                            .filter(p => p.$.direction !== 'out')

                        if (following.some(p => !p.$['allow-none'])) {
                            allowNone = ''
                        }
                    }

                    const paramDesc = `${paramName}${allowNone}: ${paramType}`
                    def.push(paramDesc)
                }
            }
        }

        return [def.join(', '), outParams]
    }

    private getVariable(v: GirVariable, optional = false, allowQuotes = false): [string[], string | null] {
        if (!v.$.name) return [[], null]
        if (!v || !v.$ || !this.girBool(v.$.introspectable, true) || this.girBool(v.$.private)) return [[], null]

        const name = this.transformation.transformVariableName(v.$.name, allowQuotes)
        let typeName = this.typeLookupTransformed(v)
        const nameSuffix = optional ? '?' : ''

        typeName = this.transformation.transformTypeName(typeName)

        return [[`${name}${nameSuffix}:${typeName}`], name]
    }

    private getProperty(v: GirVariable, construct = false): [string[], string | null, string | null] {
        if (this.girBool(v.$['construct-only']) && !construct) return [[], null, null]
        if (!this.girBool(v.$.writable) && construct) return [[], null, null]
        if (this.girBool(v.$.private)) return [[], null, null]

        const propPrefix = this.girBool(v.$.writable) ? '' : 'readonly '
        const [propDesc, propName] = this.getVariable(v, construct, true)
        let origName: string | null = null

        if (!propName) return [[], null, null]

        if (v.$.name) {
            // TODO does that make sense here? This also changes the signal names
            origName = this.transformation.transformTypeName(v.$.name)
        }

        return [[`    ${propPrefix}${propDesc}`], propName, origName]
    }

    exportEnumeration(e: GirEnumeration): string[] {
        const def: string[] = []

        if (!e || !e.$ || !this.girBool(e.$.introspectable, true)) return []

        let name = e.$.name
        // E.g. the NetworkManager-1.0 has names starting with 80211
        name = this.transformation.transformTypeName(name)

        def.push(`export enum ${name} {`)
        if (e.member) {
            for (const member of e.member) {
                // const name = member.$.name.toUpperCase()
                const name = this.transformation.transform('enum', member.$.name)
                if (/\d/.test(name[0])) def.push(`    /* ${name} (invalid, starts with a number) */`)
                else def.push(`    ${name},`)
            }
        }
        def.push('}')
        return def
    }

    exportConstant(e: GirVariable): string[] {
        const [varDesc, varName] = this.getVariable(e)
        if (varName) return [`export const ${varDesc}`]
        return []
    }

    private getFunction(
        e: GirFunction,
        prefix: string,
        funcNamePrefix: string | null = null,
    ): [string[], string | null] {
        if (!e || !e.$ || !this.girBool(e.$.introspectable, true) || e.$['shadowed-by']) return [[], null]

        const patch = e._fullSymName ? this.patch[e._fullSymName] : []
        let name = e.$.name
        const [_retType, outArrayLengthIndex] = this.getReturnType(e)
        let retType = _retType
        const [params, outParams] = this.getParameters(e.parameters, outArrayLengthIndex)

        if (e.$['shadows']) {
            name = e.$['shadows']
        }

        if (funcNamePrefix) name = funcNamePrefix + name

        if (e._fullSymName == 'Gtk.Container.child_notify') {
            debugger
        }

        if (patch && patch.length === 1) return [patch, null]

        const reservedWords = {
            false: 1,
            true: 1,
            break: 1,
        }

        // Function name transformation by environment
        name = this.transformation.transform('function', name)

        if (reservedWords[name]) return [[`/* Function '${name}' is a reserved word */`], null]

        if (patch && patch.length === 2) return [[`${prefix}${funcNamePrefix}${patch[patch.length - 1]}`], name]

        const retTypeIsVoid = retType == 'void'
        if (outParams.length + (retTypeIsVoid ? 0 : 1) > 1) {
            if (!retTypeIsVoid) {
                outParams.unshift(`/* returnType */ ${retType}`)
            }
            const retDesc = outParams.join(', ')
            retType = `[ ${retDesc} ]`
        } else if (outParams.length == 1 && retTypeIsVoid) {
            retType = outParams[0]
        }

        return [[`${prefix}${name}(${params}): ${retType}`], name]
    }

    private getConstructorFunction(
        name: string,
        e: GirFunction,
        prefix: string,
        funcNamePrefix: string | null = null,
    ): [string[], string | null] {
        // eslint-disable-next-line prefer-const
        let [desc, funcName] = this.getFunction(e, prefix, funcNamePrefix)

        if (!funcName) return [[], null]

        const [retType] = this.getReturnType(e)
        if (retType.split(' ')[0] != name) {
            // this.log.warn(`Constructor returns ${retType} should return ${name}`)

            // Force constructors to return the type of the class they are actually
            // constructing. In a lot of cases the GI data says they return a base
            // class instead; I'm not sure why.
            e['return-value'] = [
                {
                    $: {
                        // nullable
                    },
                    type: [
                        {
                            $: {
                                name: name,
                            },
                        } as GirType,
                    ],
                } as GirVariable,
            ]

            desc = this.getFunction(e, prefix)[0]
        }

        return [desc, funcName]
    }

    private getSignalFunc(e: GirFunction, clsName: string): string[] {
        const sigName = this.transformation.transform('signalName', e.$.name)
        const [retType, outArrayLengthIndex] = this.getReturnType(e)
        const [params] = this.getParameters(e.parameters, outArrayLengthIndex)
        const paramComma = params.length > 0 ? ', ' : ''

        return TemplateProcessor.generateSignalMethods(this.environment, sigName, clsName, paramComma, params, retType)
    }

    exportFunction(e: GirFunction): string[] {
        return this.getFunction(e, 'export function ')[0]
    }

    exportCallback(e: GirFunction): string[] {
        if (!e || !e.$ || !this.girBool(e.$.introspectable, true)) return []

        const name = e.$.name
        const [retType, outArrayLengthIndex] = this.getReturnType(e)
        const [params] = this.getParameters(e.parameters, outArrayLengthIndex)

        const def: string[] = []
        def.push(`export interface ${name} {`)
        def.push(`    (${params}): ${retType}`)
        def.push('}')
        return def
    }

    private traverseInheritanceTree(e: GirClass, callback: (cls: GirClass) => void): void {
        if (!e || !e.$) return

        let parent: GirClass | undefined = undefined
        // const parentModule: GirModule | undefined = undefined

        const mod: GirModule = e._module ? e._module : this
        let name = e.$.name

        if (name.indexOf('.') < 0) {
            name = mod.name + '.' + name
        }

        if (e.$.parent) {
            let parentName = e.$.parent
            const origParentName = parentName

            if (parentName.indexOf('.') < 0) {
                parentName = mod.name + '.' + parentName
            }

            let parentPtr = this.symTable[parentName]

            if (!parentPtr && origParentName == 'Object') {
                parentPtr = this.symTable['GObject.Object']
            }

            if (parentPtr) {
                parent = parentPtr
            }
        }

        // this.log.log(`${e.$.name} : ${parent && parent.$ ? parent.$.name : 'none'} : ${parentModule ? parentModule.name : 'none'}`)

        callback(e)

        if (parent) this.traverseInheritanceTree(parent, callback)
    }

    private forEachInterface(e: GirClass, callback: (cls: GirClass) => void): void {
        for (const { $ } of e.implements || []) {
            let name = $.name as string

            if (name.indexOf('.') < 0) {
                name = this.name + '.' + name
            }

            const iface: GirClass | undefined = this.symTable[name]

            if (iface) {
                callback(iface)
            }
        }
    }

    private isDerivedFromGObject(e: GirClass): boolean {
        let ret = false
        this.traverseInheritanceTree(e, cls => {
            if (cls._fullSymName == 'GObject.Object') {
                ret = true
            }
        })
        return ret
    }

    private exportObjectInternal(e: GirClass | GirClass): string[] {
        const name = e.$.name
        let def: string[] = []
        const isDerivedFromGObject = this.isDerivedFromGObject(e)

        // if (name === 'BinClass') {
        //     this.log.log(e)
        //     // throw new Error(name)
        // }

        if (e.$ && e.$['glib:is-gtype-struct-for']) {
            return []
        }

        const checkName = (desc: string[], name: string | null, localNames): [string[], boolean] => {
            if (!desc || desc.length == 0) return [[], false]

            if (!name) {
                // this.log.error(`No name for ${desc}`)
                return [[], false]
            }

            if (localNames[name]) {
                // this.log.warn(`Name ${name} already defined (${desc})`)
                return [[], false]
            }

            localNames[name] = 1
            return [desc, true]
        }

        let parentName: string | null = null
        let counter = 0
        this.traverseInheritanceTree(e, cls => {
            if (counter++ != 1) return
            parentName = cls._fullSymName || null
        })

        let parentNameShort: string = parentName || ''
        if (parentNameShort && this.name) {
            const s = parentNameShort.split('.', 2)
            if (s[0] === this.name) {
                parentNameShort = s[1]
            }
        }

        // Properties for construction
        if (isDerivedFromGObject) {
            let ext = ' '
            if (parentName) ext = `extends ${parentNameShort}_ConstructProps `

            def.push(`export interface ${name}_ConstructProps ${ext}{`)
            const constructPropNames = {}
            if (e.property) {
                for (const p of e.property) {
                    const [desc, name] = this.getProperty(p, true)
                    def = def.concat(checkName(desc, name, constructPropNames)[0])
                }
            }
            def.push('}')
        }

        // Instance side
        def.push(`export class ${name} {`)

        const localNames = {}
        const propertyNames: string[] = []

        const copyProperties = (cls: GirClass): void => {
            if (cls.property) {
                def.push(`    /* Properties of ${cls._fullSymName} */`)
                for (const p of cls.property) {
                    const [desc, name, origName] = this.getProperty(p)
                    const [aDesc, added] = checkName(desc, name, localNames)
                    if (added) {
                        if (origName) propertyNames.push(origName)
                    }
                    def = def.concat(aDesc)
                }
            }
        }
        this.traverseInheritanceTree(e, copyProperties)
        this.forEachInterface(e, copyProperties)

        // Fields
        const copyFields = (cls: GirClass): void => {
            if (cls.field) {
                def.push(`    /* Fields of ${cls._fullSymName} */`)
                for (const f of cls.field) {
                    const [desc, name] = this.getVariable(f, false, false)

                    const [aDesc, added] = checkName(desc, name, localNames)
                    if (added) {
                        def.push(`    ${aDesc[0]}`)
                    }
                }
            }
        }
        this.traverseInheritanceTree(e, copyFields)

        // Instance methods
        const copyMethods = (cls: GirClass): void => {
            if (cls.method) {
                def.push(`    /* Methods of ${cls._fullSymName} */`)
                for (const f of cls.method) {
                    const [desc, name] = this.getFunction(f, '    ')
                    def = def.concat(checkName(desc, name, localNames)[0])
                }
            }
        }
        this.traverseInheritanceTree(e, copyMethods)
        this.forEachInterface(e, copyMethods)

        // Instance methods, vfunc_ prefix
        this.traverseInheritanceTree(e, cls => {
            const vmeth = cls['virtual-method']
            if (vmeth) {
                def.push(`    /* Virtual methods of ${cls._fullSymName} */`)
                for (const f of vmeth) {
                    // eslint-disable-next-line prefer-const
                    let [desc, name] = this.getFunction(f, '    ', 'vfunc_')

                    desc = checkName(desc, name, localNames)[0]

                    if (desc[0]) {
                        desc[0] = desc[0].replace('(', '?(')
                    }

                    def = def.concat(desc)
                }
            }
        })

        const copySignals = (cls: GirClass): void => {
            const signals = cls['glib:signal']
            if (signals) {
                def.push(`    /* Signals of ${cls._fullSymName} */`)
                for (const s of signals) def = def.concat(this.getSignalFunc(s, name))
            }
        }
        this.traverseInheritanceTree(e, copySignals)
        this.forEachInterface(e, copySignals)

        if (isDerivedFromGObject) {
            let prefix = 'GObject.'
            if (this.name == 'GObject') prefix = ''
            for (const p of propertyNames) {
                def = def.concat(TemplateProcessor.generateGObjectSignalMethods(this.environment, p, name, prefix))
            }
            def = def.concat(TemplateProcessor.generateGeneralSignalMethods(this.environment))
        }

        // TODO: Records have fields

        // Static side: default constructor
        def.push(`    static name: string`)
        if (isDerivedFromGObject) {
            def.push(`    constructor (config?: ${name}_ConstructProps)`)
            def.push(`    _init (config?: ${name}_ConstructProps): void`)
        } else {
            const constructor_: GirFunction[] = (e['constructor'] || []) as GirFunction[]
            if (constructor_) {
                if (!Array.isArray(constructor_)) {
                    debugger
                } else {
                    for (const f of constructor_) {
                        const [desc, funcName] = this.getConstructorFunction(name, f, '    static ')
                        if (!funcName) continue
                        if (funcName != 'new') continue

                        def = def.concat(desc)

                        const jsStyleCtor = desc[0].replace('static new', 'constructor').replace(/:[^:]+$/, '')

                        def = def.concat(jsStyleCtor)
                    }
                }
            }
        }

        // Static methods
        let stc: string[] = []

        const constructor_: GirFunction[] = (e['constructor'] || []) as GirFunction[]
        if (constructor_) {
            if (!Array.isArray(constructor_)) {
                // this.log.warn('Warn: constructor_ is not an array:')
                // this.log.dir(constructor_)
                debugger
            } else {
                for (const f of constructor_) {
                    const [desc, funcName] = this.getConstructorFunction(name, f, '    static ')
                    if (!funcName) continue

                    stc = stc.concat(desc)
                }
            }
        }

        if (e.function) {
            for (const f of e.function) {
                const [desc, funcName] = this.getFunction(f, '    static ')
                if (funcName === 'new') continue

                stc = stc.concat(desc)
            }
        }

        if (stc.length > 0) {
            def = def.concat(stc)
        }

        if (isDerivedFromGObject) def.push(`    static $gtype: ${this.name === 'GObject' ? '' : 'GObject.'}Type`)

        def.push('}')

        return def
    }

    exportAlias(girAlias: GirAlias): string[] {
        if (!girAlias || !girAlias.$ || !this.girBool(girAlias.$.introspectable, true)) return []

        const typeName = this.typeLookupTransformed(girAlias)
        const name = girAlias.$.name
        return [`type ${name} = ${typeName}`]
    }

    exportInterface(e: GirClass): string[] {
        return this.exportObjectInternal(e)
    }

    exportClass(e: GirClass): string[] {
        return this.exportObjectInternal(e)
    }

    exportJs(outDir: string | null): void {
        const templateProcessor = new TemplateProcessor(
            { name: this.name, version: this.version, environment: this.environment, buildType: this.buildType },
            this.environment,
            this.prettify,
        )
        if (outDir) {
            templateProcessor.create('module.js', outDir, `${this.fullName}.js`)
        } else {
            const moduleContent = templateProcessor.load('module.js')
            this.log.log(moduleContent)
        }
    }

    export(outStream: NodeJS.WritableStream, outputPath: string | null): void {
        let out: string[] = []

        out = out.concat(TemplateProcessor.generateTSDocComment(`${this.fullName}`))

        out.push('')

        const deps: string[] = this.transitiveDependencies

        // Always pull in GObject, as we may need it for e.g. GObject.type
        if (this.fullName !== 'GObject-2.0') {
            if (!lodash.find(deps, x => x == 'GObject-2.0')) {
                deps.push('GObject-2.0')
            }
        }

        // Module dependencies as type references or imports
        if (this.environment === 'gjs') {
            out = out.concat(
                TemplateProcessor.generateModuleDependenciesImport(this.environment, this.buildType, 'Gjs', 'Gjs'),
            )
        } else {
            out = out.concat(
                TemplateProcessor.generateModuleDependenciesImport(
                    this.environment,
                    this.buildType,
                    'node',
                    'node',
                    true,
                ),
            )
        }
        for (const dep of deps) {
            // Don't reference yourself as a dependency
            if (this.fullName !== dep) {
                out = out.concat(
                    TemplateProcessor.generateModuleDependenciesImport(
                        this.environment,
                        this.buildType,
                        dep.split('-')[0],
                        dep,
                    ),
                )
            }
        }

        // START Namespace
        if (this.buildType === 'types') {
            out.push('')
            out.push(`declare namespace ${this.name} {`)
        }

        // Newline
        out.push('')

        if (this.ns.enumeration) for (const e of this.ns.enumeration) out = out.concat(this.exportEnumeration(e))

        if (this.ns.bitfield) for (const e of this.ns.bitfield) out = out.concat(this.exportEnumeration(e))

        if (this.ns.constant) for (const e of this.ns.constant) out = out.concat(this.exportConstant(e))

        if (this.ns.function) for (const e of this.ns.function) out = out.concat(this.exportFunction(e))

        if (this.ns.callback) for (const e of this.ns.callback) out = out.concat(this.exportCallback(e))

        if (this.ns.interface) for (const e of this.ns.interface) out = out.concat(this.exportInterface(e))

        const templateProcessor = new TemplateProcessor(
            { name: this.name, version: this.version, environment: this.environment, buildType: this.buildType },
            this.environment,
            this.prettify,
        )

        // Extra interfaces
        // E.g. used for GObject-2.0 to help define GObject classes in js;
        // these aren't part of gi.
        if (templateProcessor.exists(`${this.fullName}.d.ts`)) {
            const patches = templateProcessor.load(`${this.fullName}.d.ts`)
            out = out.concat(patches)
        }

        if (this.ns.class) for (const e of this.ns.class) out = out.concat(this.exportInterface(e))

        if (this.ns.record) for (const e of this.ns.record) out = out.concat(this.exportInterface(e))

        if (this.ns.union) for (const e of this.ns.union) out = out.concat(this.exportInterface(e))

        if (this.ns.alias)
            // GType is not a number in GJS
            for (const e of this.ns.alias)
                if (this.name !== 'GObject' || e.$.name !== 'Type') out = out.concat(this.exportAlias(e))

        if (this.name === 'GObject') out = out.concat(['export interface Type {', '    name: string', '}'])

        // END Namespace
        if (this.buildType === 'types') {
            out.push(`}`)
        }

        // End of file
        outStream.write(out.join('\n'))

        if (outputPath) {
            templateProcessor.prettify(outputPath)
        }
    }
}
