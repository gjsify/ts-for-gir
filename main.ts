import * as xml2js from 'xml2js'
import * as lodash from 'lodash'
import * as commander from 'commander'
import fs = require('fs')

interface TsForGjsExtended {
    _module?: GirModule
    _fullSymName?: string
}

interface GirInclude {
    $: {
        name: string
        version: string
    }
}
interface GirDoc {
    _: string
    $: {
        "xml:space"?: string
    }
}
interface GirImplements {
    $: {
        "name"?: string
    }
}
interface GirType {
    $: {
        name: string
        "c:type"?: string
    }
}
interface GirArray {
    $?: {
        length?: string
        "zero-terminated"?: string
        "c:type"?: string
    }
    type?: GirType[]
}
interface GirVariable extends TsForGjsExtended {
    $: {
        name?: string
        "transfer-ownership"?: string
        nullable?: string
        "allow-none"?: string
        writable?: string
        readable?: string
        private?: string
        "construct-only"?: string
        direction?: string
        introspectable?: string
        closure?: string
        destroy?: string
    }
    doc?: GirDoc[]
    type?: GirType[]
    array?: GirArray[]
}
interface GirParameter {
    parameter?: GirVariable[]
    "instance-parameter"?: GirVariable[]
}
interface GirFunction extends TsForGjsExtended {
    $: {
        name: string
        version?: string
        "c-identifier"?: string
        introspectable?: string
        "moved-to"?: string
        "shadowed-by"?: string
    }
    doc?: GirDoc[]
    parameters?: GirParameter[]
    "return-value"?: GirVariable[]
}
interface GirSignal extends TsForGjsExtended {
    $: {
        name: string
        when: string
    }
    doc?: GirDoc[]
    "return-value"?: GirParameter[]
}
interface GirClass extends TsForGjsExtended {
    $: {
        name: string
        parent?: string
        version?: string
        // Not sure what this means
        disguised?: string
        // c:symbol-prefix, c:type, glib:get-type, glib:type-name
        "glib:is-gtype-struct-for"?: string
    }
    doc?: GirDoc[]
    function?: GirFunction[]
    "glib:signal"?: GirFunction[]
    method?: GirFunction[]
    property?: GirVariable[]
    field?: GirVariable[]
    "virtual-method"?: GirFunction[]
    "constructor"?: GirFunction[] | Function
    implements?: GirImplements[]

    _module?: GirModule
}
interface GirEnumerationMember {
    $: {
        name: string
        value: string
        // c:identifier, glib:nick
    }
    doc?: GirDoc[]
}
export interface GirEnumeration extends TsForGjsExtended {
    $: {
        name: string
        version?: string
        "c:type"?: string
        introspectable?: string
        // glib:get-type, glib:type-name
    }
    doc?: GirDoc[]
    member?: GirEnumerationMember[]
}
interface GirAlias extends TsForGjsExtended {
    $: {
        name: string
        "c:type"?: string
        introspectable?: string        
    }
    type?: GirType[]
}
interface GirNamespace {
    $: {
        name: string
        version: string
    }
    alias?: GirAlias[]
    bitfield?: GirEnumeration[]
    callback?: GirFunction[]
    class?: GirClass[]
    constant?: GirVariable[]
    enumeration?: GirEnumeration[]
    function?: GirFunction[]
    interface?: GirClass[]
    record?: GirClass[]
    union?: GirClass[]
}

interface GirRepository {
    include?: GirInclude[]
    namespace?: GirNamespace[]
}

export class GirModule {
    name: string | null = null
    version: string = "0.0"
    dependencies: string[] = []
    transitiveDependencies: string[] = []
    repo: GirRepository
    ns: GirNamespace = { $: { name: "", version: "" } }
    symTable: { [key:string]: any } = {}
    patch: { [key:string]: string[] } = {}

    constructor(xml) {
        this.repo = xml.repository

        if (this.repo.include) {
            for (let i of this.repo.include) {
                this.dependencies.unshift(`${i.$.name}-${i.$.version}`)
            }
        }
        
        if (this.repo.namespace && this.repo.namespace.length) {
            this.ns = this.repo.namespace[0]
            this.name = this.ns.$.name
            this.version = this.ns.$.version
        }
    }

    loadTypes(dict) {
        let loadTypesInternal = (arr) => {
            if (arr) {
                for (let x of arr) {
                    if (x.$) {
                        if (x.$.introspectable) {
                            if (!this.girBool(x.$.introspectable, true))
                                continue 
                        }
                    }

                    let symName = `${this.name}.${x.$.name}`
                    if (dict[symName]) {
                        console.warn(`Warn: duplicate symbol: ${symName}`)
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

        let annotateFunctionArguments = (f: GirFunction) => {
            let funcName = f._fullSymName
            if (f.parameters)
                for (let p of f.parameters)
                    if (p.parameter)
                        for (let x of p.parameter) {
                            x._module = this
                            if (x.$ && x.$.name) {
                                x._fullSymName = `${funcName}.${x.$.name}`
                            }
                        }
        }
        let annotateFunctionReturn = (f: GirFunction) => {
            let retVal: GirVariable[]|undefined = f["return-value"]
            if (retVal)
                for (let x of retVal) {
                    x._module = this
                    if (x.$ && x.$.name) {
                        x._fullSymName = `${f._fullSymName}.${x.$.name}`
                    }
                }
        }
        let annotateFunctions = (obj: GirClass|null, funcs: GirFunction[]) => {
            if (funcs)
                for (let f of funcs) {
                    let nsName = obj ? obj._fullSymName : this.name
                    f._fullSymName = `${nsName}.${f.$.name}`
                    annotateFunctionArguments(f)
                    annotateFunctionReturn(f)
                }
        }
        let annotateVariables = (obj: GirClass|null, vars) => {
            if (vars)
                for (let x of vars) {
                    let nsName = obj ? obj._fullSymName : this.name
                    x._module = this
                    if (x.$ && x.$.name) {
                        x._fullSymName = `${nsName}.${x.$.name}`
                    }
                }
        }

        if (this.ns.callback) 
            for (let f of this.ns.callback) 
                annotateFunctionArguments(f)


        let objs = (this.ns.class ? this.ns.class : []).concat(
                    this.ns.record ? this.ns.record : []).concat(
                    this.ns.interface ? this.ns.interface : [])

        for (let c of objs) {
            c._module = this
            c._fullSymName = `${this.name}.${c.$.name}`
            annotateFunctions(c, c.function || [])
            annotateFunctions(c, c.method || [])
            annotateFunctions(c, c["virtual-method"] || [])
            annotateFunctions(c, c["glib:signal"] || [])
            annotateVariables(c, c.property)
            annotateVariables(c, c.field)
        }

        if (this.ns.function)
            annotateFunctions(null, this.ns.function)

        if (this.ns.constant)
            annotateVariables(null, this.ns.constant)

        // if (this.ns.)
        // props

        this.symTable = dict
    }

    loadInheritance(inheritanceTable) {
        // Class hierarchy
        for (let cls of (this.ns.class ? this.ns.class : [])) {
            let parent
            if (cls.$ && cls.$.parent) parent = cls.$.parent
            if (!parent) continue
            if (!cls._fullSymName) continue

            if (parent.indexOf(".") < 0) {
                parent = this.name + "." + parent
            }
            let clsName = cls._fullSymName

            let arr: string[] = inheritanceTable[clsName] || []
            arr.push(parent)
            inheritanceTable[clsName] = arr
        }

        // Class interface implementations
        for (let cls of (this.ns.class ? this.ns.class : [])) {
            if (!cls._fullSymName)
                continue

            let names: string[] = []

            for (let i of (cls.implements ? cls.implements : [])) {
                if (i.$.name) {
                    let name: string = i.$.name
                    if (name.indexOf(".") < 0) {
                        name = cls._fullSymName.substring(0, cls._fullSymName.indexOf(".") + 1) + name
                    }
                    names.push(name)
                }
            }

            if (names.length > 0) {
                let clsName = cls._fullSymName
                let arr: string[] = inheritanceTable[clsName] || []
                inheritanceTable[clsName] = arr.concat(names)
            }
        }
    }

    private typeLookup(e: GirVariable) {
        let type: GirType
        let arr: string = ''
        let arrCType
        let nul: string = ''
        const collection =
            e.array
                ? e.array
                : (e.type && /^GLib.S?List$/.test(e.type[0].$.name))
                    ? e.type as GirArray[]
                    : undefined

        if (collection && collection.length > 0) {
            let typeArray = collection[0].type
            if (typeArray == null || typeArray.length == 0)
                return 'any'
            if (collection[0].$) {
                let ea: any = collection[0].$
                arrCType = ea['c:type']
            }
            type = typeArray[0]
            arr = '[]'
        } else if (e.type)
            type = e.type[0]
        else
            return "any";

        if (e.$) {
            let nullable = this.girBool(e.$.nullable) || this.girBool(e.$["allow-none"])
            if (nullable) {
                nul = ' | null'
            }
        }

        if (!type.$)
            return 'any'

        let suffix = arr + nul

        if (arr) {
            let podTypeMapArray = {
                'guint8': 'Gjs.byteArray.ByteArray',
                'gint8': 'Gjs.byteArray.ByteArray',
                'gunichar': 'string'
            }
            if (podTypeMapArray[type.$.name] != null)
                return podTypeMapArray[type.$.name] + nul
        }

        let podTypeMap = {
            'utf8': 'string', 'none': 'void', 'double': 'number', 'guint32': 'number',
            'guint16': 'number', 'gint16': 'number', 'gunichar': 'number',
            'gint8': 'number', 'gint32': 'number', 'gushort': 'number', 'gfloat': 'number',
            'gboolean': 'boolean', 'gpointer': 'object', 'gchar': 'number',
            'guint': 'number', 'glong': 'number', 'gulong': 'number', 'gint': 'number',
            'guint8': 'number', 'guint64': 'number', 'gint64': 'number', 
            'gdouble': 'number', 'gssize': 'number', 'gsize': 'number', 'long': 'number',
            'object': 'any', 'va_list': 'any', 'gshort': 'number', 'filename': 'string'
        }

        if (podTypeMap[type.$.name] != null)
            return podTypeMap[type.$.name] + suffix

        if (!this.name)
            return "any"

        let cType = type.$['c:type']
        if (!cType)
            cType = arrCType

        if (cType) {
            let cTypeMap = {
                'char*': 'string',
                'gchar*': 'string',
                'gchar**': 'any',  // FIXME
                'GType': (this.name == 'GObject' ? 'Type' : 'GObject.Type') + suffix,
            }
            if (cTypeMap[cType]) {
                return cTypeMap[cType]
            }
        }

        let fullTypeName: string | null = type.$.name

        let fullTypeMap = {
            'GObject.Value': 'any',
            'GObject.Closure': 'Function',
            'GLib.ByteArray': 'Gjs.byteArray.ByteArray',
            'GLib.Bytes': 'Gjs.byteArray.ByteArray'
        }

        if (fullTypeName && fullTypeMap[fullTypeName]) {
            return fullTypeMap[fullTypeName]
        }
        
        // Fully qualify our type name if need be
        if (fullTypeName && fullTypeName.indexOf(".") < 0) {
            let mod: GirModule = this
            if (e._module) mod = e._module
            fullTypeName = `${mod.name}.${type.$.name}`
        }

        if (!fullTypeName || this.symTable[fullTypeName] == null) {
            console.warn(`Could not find type ${fullTypeName} for ${e.$.name}`)
            return "any" + arr
        }

        if (fullTypeName.indexOf(this.name + ".") == 0) {
            let ret = fullTypeName.substring(this.name.length + 1)
            // console.warn(`Rewriting ${fullTypeName} to ${ret} + ${suffix} -- ${this.name} -- ${e._module}`)
            if (fullTypeName == 'Gio.ApplicationFlags') {
                debugger;
            }
            return ret + suffix
        }

        return fullTypeName + suffix
    }

    private girBool(e: string | undefined, defaultVal: boolean = false): boolean {
        if (e) {
            if (parseInt(e) == 0)
                return false
            return true
        }
        return defaultVal
    }

    private getReturnType(e) {
        let returnType

        let returnVal = e["return-value"] ? e["return-value"][0] : undefined
        if (returnVal) {
            returnType = this.typeLookup(returnVal)
        } else
            returnType = "void"

        let outArrayLengthIndex = returnVal.array && returnVal.array[0].$.length
            ? Number(returnVal.array[0].$.length)
            : -1

        return [returnType, outArrayLengthIndex] as [string, number]
    }

    private arrayLengthIndexLookup(param: GirVariable): number {
        if (!param.array)
            return -1
        
        let arr: GirArray = param.array[0]
        if (!arr.$)
            return -1

        if (arr.$.length) {
            return parseInt(arr.$.length)
        }

        return -1
    }

    private closureDataIndexLookup(param: GirVariable): number {
        if (!param.$.closure)
            return -1

        return parseInt(param.$.closure)
    }

    private destroyDataIndexLookup(param: GirVariable): number {
        if (!param.$.destroy)
            return -1

        return parseInt(param.$.destroy)
    }

    private getParameters(parameters, outArrayLengthIndex: number): [ string, string[] ] {
        let def: string[] = []
        let outParams: string[] = []

        if (parameters && parameters.length > 0) {
            let parametersArray = parameters[0].parameter
            if (parametersArray) {
                const skip = outArrayLengthIndex === -1
                    ? []
                    : [parametersArray[outArrayLengthIndex]]

                let processParams = (getIndex) => {
                    for (let param of parametersArray as GirVariable[]) {
                        let index = getIndex(param)
                        if (index < 0) continue
                        if (index >= parametersArray.length) continue
                        skip.push(parametersArray[index])
                    }
                }
  
                processParams(this.arrayLengthIndexLookup)
                processParams(this.closureDataIndexLookup)
                processParams(this.destroyDataIndexLookup)

                for (let param of parametersArray as GirVariable[]) {
                    let paramName = this.fixVariableName(param.$.name || '-', false)
                    let paramType = this.typeLookup(param)

                    if (skip.indexOf(param) !== -1) {
                        continue
                    }

                    let optDirection = param.$.direction
                    if (optDirection) {
                        if (optDirection == 'out') {
                            outParams.push(`/* ${paramName} */ ${paramType}`)
                            continue
                        }
                    }

                    let allowNone = param.$["allow-none"] ? "?" : ""

                    if (allowNone) {
                        const index = parametersArray.indexOf(param)
                        const following = (parametersArray as GirVariable[]).slice(index)
                            .filter(p => skip.indexOf(param) === -1)
                            .filter(p => p.$.direction !== "out")

                        if (following.some(p => !p.$["allow-none"])) {
                            allowNone = ""
                        }
                    }
                    
                    let paramDesc = `${paramName}${allowNone}: ${paramType}`
                    def.push(paramDesc)
                }
            }
        }

        return [ def.join(", "), outParams ]
    }

    private fixVariableName(name: string, allowQuotes: boolean) {
        const reservedNames = {
            'in': 1, 'function': 1, 'true': 1, 'false': 1, 'break': 1,
            'arguments': 1, 'eval': 1, 'default': 1, 'new': 1
        }

        // GJS always re-writes - to _ (I think?)
        name = name.replace(/-/g, "_")

        if (reservedNames[name]) {
            if (allowQuotes)
                return `"${name}"`
            else
                return `${name}_`
        }
        return name
    }

    private getVariable(v: GirVariable, optional: boolean = false, 
                        allowQuotes: boolean = false): [string[], string|null] {
        if (!v.$.name)
            return [[], null]
        if (!v || !v.$ || !this.girBool(v.$.introspectable, true) ||
            this.girBool(v.$.private))
            return [[], null] 

        let name = this.fixVariableName(v.$.name, allowQuotes)
        let typeName = this.typeLookup(v)
        let nameSuffix = optional ? "?" : ""

        return [[`${name}${nameSuffix}:${typeName}`], name]
    }

    private getProperty(v: GirVariable, construct: boolean = false): [string[], string|null, string|null] {
        if (this.girBool(v.$["construct-only"]) && !construct)
            return [[], null, null]
        if (!this.girBool(v.$.writable) && construct)
            return [[], null, null]
        if (this.girBool(v.$.private))
            return [[], null, null]

        let propPrefix = this.girBool(v.$.writable) ? '' : 'readonly '
        let [propDesc,propName] = this.getVariable(v, construct, true)

        if (!propName)
            return [[], null, null]

        return [[`    ${propPrefix}${propDesc}`], propName, v.$.name || null]
    }

    exportEnumeration(e: GirEnumeration) {
        let def: string[] = []

        if (!e || !e.$ || !this.girBool(e.$.introspectable, true))
            return []

        def.push(`export enum ${e.$.name} {`)
        if (e.member) {
            for (let member of e.member) {
                let name = member.$.name.toUpperCase()
                if (/\d/.test(name[0]))
                    def.push(`    /* ${name} (invalid, starts with a number) */`)
                else
                    def.push(`    ${name},`)
            }
        }
        def.push("}")
        return def
    }

    exportConstant(e: GirVariable) {
        let [varDesc, varName] = this.getVariable(e)
        if (varName)
            return [`export const ${varDesc}`]
        return []
    }

    private getFunction(e: GirFunction, prefix: string, funcNamePrefix: string | null = null): [string[], string | null] {
        if (!e || !e.$ || !this.girBool(e.$.introspectable, true) || e.$["shadowed-by"])
            return [[], null]

        let patch = e._fullSymName ? this.patch[e._fullSymName] : []
        let name = e.$.name
        let [retType, outArrayLengthIndex] = this.getReturnType(e)
        let [params, outParams] = this.getParameters(e.parameters, outArrayLengthIndex)

        if (e.$["shadows"]) {
            name = e.$["shadows"]
        }

        if (funcNamePrefix)
            name = funcNamePrefix + name

        if (e._fullSymName == 'Gtk.Container.child_notify') {
            debugger;
        }

        if (patch && patch.length === 1)
            return [patch, null]    
        
        let reservedWords = {
            'false': 1, 'true': 1, 'break': 1
        }

        if (reservedWords[name])
            return [[`/* Function '${name}' is a reserved word */`], null]

        if (patch && patch.length === 2)
            return [[`${prefix}${funcNamePrefix}${patch[patch.length - 1]}`], name]

        let retTypeIsVoid = retType == 'void'
        if (outParams.length + (retTypeIsVoid ? 0 : 1) > 1) {
            if (!retTypeIsVoid) {
                outParams.unshift(`/* returnType */ ${retType}`)
            }
            let retDesc = outParams.join(', ')
            retType = `[ ${retDesc} ]`
        } else if (outParams.length == 1 && retTypeIsVoid) {
            retType = outParams[0]
        }

        return [[`${prefix}${name}(${params}): ${retType}`], name]
    }

    private getConstructorFunction(name: string, e: GirFunction, prefix: string, funcNamePrefix: string | null = null): [string[], string | null] {
        let [desc, funcName] = this.getFunction(e, prefix, funcNamePrefix)

        if (!funcName)
            return [[], null]

        let [retType] = this.getReturnType(e)
        if (retType.split(' ')[0] != name) {
            // console.warn(`Constructor returns ${retType} should return ${name}`)

            // Force constructors to return the type of the class they are actually
            // constructing. In a lot of cases the GI data says they return a base
            // class instead; I'm not sure why.
            e["return-value"] = [
                {
                    '$': {
                        // nullable
                    },
                    'type': [ { '$': {
                                name: name
                            } } as GirType
                    ]
                } as GirVariable
            ]

            desc = this.getFunction(e, prefix)[0]
        }

        return [desc, funcName]
    }

    private getSignalFunc(e: GirFunction, clsName: string) {
        let sigName = e.$.name
        let [retType, outArrayLengthIndex] = this.getReturnType(e)
        let [params, outParams] = this.getParameters(e.parameters, outArrayLengthIndex)
        let paramComma = params.length > 0 ? ', ' : ''

        return [`    connect(sigName: "${sigName}", callback: ((obj: ${clsName}${paramComma}${params}) => ${retType})): void`]
    }

    exportFunction(e: GirFunction) {
        return this.getFunction(e, "export function ")[0]
    }

    exportCallback(e: GirFunction) {
        if (!e || !e.$ || !this.girBool(e.$.introspectable, true))
            return []

        let name = e.$.name
        let [retType, outArrayLengthIndex] = this.getReturnType(e)
        let [params, outParams] = this.getParameters(e.parameters, outArrayLengthIndex)

        let def: string[] = []
        def.push(`export interface ${name} {`)
        def.push(`    (${params}): ${retType}`)
        def.push("}")
        return def
    }

    private traverseInheritanceTree(e: GirClass, callback: ((cls: GirClass) => void)) {
        if (!e || !e.$)
            return;

        let parent: GirClass | undefined = undefined
        let parentModule: GirModule | undefined = undefined

        const mod: GirModule = e._module ? e._module : this
        let name = e.$.name

        if (name.indexOf(".") < 0) {
            name = mod.name + "." + name
        }

        if (e.$.parent) {
            let parentName = e.$.parent
            let origParentName = parentName

            if (parentName.indexOf(".") < 0) {
                parentName = mod.name + "." + parentName
            }

            let parentPtr = this.symTable[parentName]

            if (!parentPtr && origParentName == "Object") {
                parentPtr = this.symTable["GObject.Object"]
            }

            if (parentPtr) {
                parent = parentPtr
            } 
        }

        // console.log(`${e.$.name} : ${parent && parent.$ ? parent.$.name : 'none'} : ${parentModule ? parentModule.name : 'none'}`)

        callback(e)
        
        if (parent)
            this.traverseInheritanceTree(parent, callback)
    }

    private forEachInterface(e: GirClass, callback: ((cls: GirClass) => void)) {
        for (const { $ } of e.implements || []) {
            let name = $.name as string

            if (name.indexOf(".") < 0) {
                name = this.name + "." + name
            }

            const iface: GirClass | undefined = this.symTable[name]

            if (iface) {
                callback(iface)
            }
        }
    }

    private isDerivedFromGObject(e: GirClass): boolean {
        let ret = false
        this.traverseInheritanceTree(e, (cls) => {
            if (cls._fullSymName == "GObject.Object") {
                ret = true
            }
        })
        return ret
    }

    private exportObjectInternal(e: GirClass | GirClass) {
        let name = e.$.name
        let def: string[] = []
        let isDerivedFromGObject = this.isDerivedFromGObject(e)

        if (e.$ && e.$["glib:is-gtype-struct-for"]) {
            return []   
        }

        let checkName = (desc: string[], name, localNames): [string[], boolean] => {
            if (!desc || desc.length == 0)
                return [[], false]

            if (!name) {
                // console.error(`No name for ${desc}`)
                return [[], false]
            }

            if (localNames[name]) {
                // console.warn(`Name ${name} already defined (${desc})`)
                return [[], false]
            }

            localNames[name] = 1
            return [desc, true]
        }

        let parentName: string|null = null
        let counter: number = 0
        this.traverseInheritanceTree(e, (cls) => {
            if (counter++ != 1)
                return
            parentName = cls._fullSymName || null
        })

        let parentNameShort: string = parentName || ''
        if (parentNameShort && this.name) {
            let s = parentNameShort.split(".", 2)
            if (s[0] === this.name) {
                parentNameShort = s[1]
            }
        }

        // Properties for construction
        if (isDerivedFromGObject) {
            let ext: string = ' '
            if (parentName)
                ext = `extends ${parentNameShort}_ConstructProps `

            def.push(`export interface ${name}_ConstructProps ${ext}{`)
            let constructPropNames = {}
            if (e.property) {
                for (let p of e.property) {
                    let [desc, name] = this.getProperty(p, true)
                    def = def.concat(checkName(desc, name, constructPropNames)[0])
                }
            }
            def.push("}")
        }

        // Instance side
        def.push(`export class ${name} {`)
        
        let localNames = {}
        let propertyNames: string[] = []

        const copyProperties = (cls: GirClass) => {
            if (cls.property) {
                def.push(`    /* Properties of ${cls._fullSymName} */`)
                for (let p of cls.property) {
                    let [desc, name, origName] = this.getProperty(p)
                    let [aDesc, added] = checkName(desc, name, localNames)
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
        const copyFields = (cls) => {
            if (cls.field) {
                def.push(`    /* Fields of ${cls._fullSymName} */`)
                for (let f of cls.field) {
                    let [desc, name] = this.getVariable(f, false, false)

                    let [aDesc, added] = checkName(desc, name, localNames)
                    if (added) {
                        def.push(`    ${aDesc[0]}`)
                    }
                }
            }
        }
        this.traverseInheritanceTree(e, copyFields)

        // Instance methods
        const copyMethods = (cls: GirClass) => {
            if (cls.method) {
                def.push(`    /* Methods of ${cls._fullSymName} */`)
                for (let f of cls.method) {
                    let [desc, name] = this.getFunction(f, "    ")
                    def = def.concat(checkName(desc, name, localNames)[0])
                }
            }
        }
        this.traverseInheritanceTree(e, copyMethods)
        this.forEachInterface(e, copyMethods)

        // Instance methods, vfunc_ prefix
        this.traverseInheritanceTree(e, (cls) => {
            let vmeth = cls["virtual-method"]
            if (vmeth) {
                def.push(`    /* Virtual methods of ${cls._fullSymName} */`)
                for (let f of vmeth) {
                    let [desc, name] = this.getFunction(f, "    ", "vfunc_")

                    desc = checkName(desc, name, localNames)[0]

                    if (desc[0]) {
                        desc[0] = desc[0].replace("(", "?(")
                    }

                    def = def.concat(desc)
                }
            }
        })

        const copySignals = (cls) => {
            let signals = cls["glib:signal"]
            if (signals) {
                def.push(`    /* Signals of ${cls._fullSymName} */`)
                for (let s of signals)
                    def = def.concat(this.getSignalFunc(s, name))
            }
        }
        this.traverseInheritanceTree(e, copySignals)
        this.forEachInterface(e, copySignals)

        if (isDerivedFromGObject) {
            let prefix = "GObject."
            if (this.name == "GObject") prefix = ""
            for (let p of propertyNames) {
                def.push(`    connect(sigName: "notify::${p}", callback: ((obj: ${name}, pspec: ${prefix}ParamSpec) => void)): void`)
            }
            def.push(`    connect(sigName: string, callback: any): void`)
        }

        // TODO: Records have fields

        // Static side: default constructor
        def.push(`    static name: string`)
        if (isDerivedFromGObject) {
            def.push(`    constructor (config?: ${name}_ConstructProps)`)
            def.push(`    _init (config?: ${name}_ConstructProps): void`)
        } else {
            let constructor_: GirFunction[] = (e['constructor'] || []) as GirFunction[]
            if (constructor_) {
                for (let f of constructor_) {                    
                    let [desc, funcName] = this.getConstructorFunction(name, f, "    static ")
                    if (!funcName)
                        continue
                    if (funcName != "new")
                        continue

                    def = def.concat(desc)

                    const jsStyleCtor = desc[0]
                        .replace("static new", "constructor")
                        .replace(/:[^:]+$/, "")

                    def = def.concat(jsStyleCtor)
                }
            }
        }

        // Static methods
        if (true) {
            let stc: string[] = []
            
            let constructor_: GirFunction[] = (e['constructor'] || []) as GirFunction[]
            if (constructor_) {
                for (let f of constructor_) {
                    let [desc, funcName] = this.getConstructorFunction(name, f, "    static ")
                    if (!funcName)
                        continue
                    
                    stc = stc.concat(desc)
                }
            }

            if (e.function)
                for (let f of e.function) {
                    let [desc, funcName] = this.getFunction(f, "    static ")
                    if (funcName === "new")
                        continue

                    stc = stc.concat(desc)
                }

            if (stc.length > 0) {
                def = def.concat(stc)
            }
        }

        def.push("}")

        return def
    }

    exportAlias(e: GirAlias) {
        if (!e || !e.$ || !this.girBool(e.$.introspectable, true))
            return []

        let typeName = this.typeLookup(e)
        let name = e.$.name

        return [`type ${name} = ${typeName}`]
    }

    exportInterface(e: GirClass) {
        return this.exportObjectInternal(e)
    }

    exportClass(e: GirClass) {
        return this.exportObjectInternal(e)
    }

    exportJs(outStream: NodeJS.WritableStream) {
        outStream.write(`module.exports = imports.gi.${this.name}`)
    }

    export(outStream: NodeJS.WritableStream) {
        let out: string[] = []

        out.push("/**")
        out.push(` * ${this.name}-${this.version}`)
        out.push(" */")

        out.push("")

        let deps: string[] = this.transitiveDependencies

        // Always pull in GObject, as we may need it for e.g. GObject.type
        if (this.name != 'GObject') {
            if (!lodash.find(deps, x => x == 'GObject')) {
                deps.push('GObject')
            }
        }

        out.push("import * as Gjs from './Gjs'")
        for (let d of deps) {
            let base = d.split('-')[0]
            out.push(`import * as ${base} from './${base}'`)
        }

        if (this.ns.enumeration)
            for (let e of this.ns.enumeration)
                out = out.concat(this.exportEnumeration(e))

        if (this.ns.bitfield)
            for (let e of this.ns.bitfield)
                out = out.concat(this.exportEnumeration(e))
    
        if (this.ns.constant)
            for (let e of this.ns.constant)
                out = out.concat(this.exportConstant(e))

        if (this.ns.function)
            for (let e of this.ns.function)
                out = out.concat(this.exportFunction(e))

        if (this.ns.callback)
            for (let e of this.ns.callback)
                out = out.concat(this.exportCallback(e))

        if (this.ns.interface)
            for (let e of this.ns.interface)
                out = out.concat(this.exportInterface(e))

        // Extra interfaces used to help define GObject classes in js; these
        // aren't part of gi.
        if (this.name == "GObject") {
            out = out.concat([
`export interface SignalDefinition {
    flags?: SignalFlags,
    accumulator: number,
    return_type?: Type,
    param_types?: Type[]
}`,
`export interface MetaInfo {
    GTypeName: string,
    GTypeFlags?: TypeFlags,
    Implements?: Function[],
    Properties?: {[K: string]: ParamSpec},
    Signals?: {[K: string]: SignalDefinition},
    Requires?: Function[],
    CssName?: string,
    Template?: string,
    Children?: string[],
    InternalChildren?: string[]
}`,
"export const GTypeName: symbol",
"export const requires: symbol",
"export const interfaces: symbol",
"export const properties: symbol",
"export const signals: symbol",
"export function registerClass(metaInfo: MetaInfo, klass: Function): Function",
"export function registerClass(klass: Function): Function",
"export function registerClass<T extends MetaInfo | Function>(a: T, b?: Function): Function"])
        }

        if (this.ns.class)
            for (let e of this.ns.class)
                out = out.concat(this.exportInterface(e))

        if (this.ns.record)
            for (let e of this.ns.record)
                out = out.concat(this.exportInterface(e))

        if (this.ns.union)
            for (let e of this.ns.union)
                out = out.concat(this.exportInterface(e))

        if (this.ns.alias)
            for (let e of this.ns.alias)
                out = out.concat(this.exportAlias(e))

        outStream.write(out.join("\n"))
    }
}

function exportGjs(outDir: string|null, girModules: { [key: string]: any })
{
    if (!outDir)
        return

    fs.createWriteStream(`${outDir}/Gjs.d.ts`).write(
`export namespace byteArray {
    export class ByteArray {
        constructor(len: number)
        toGBytes(): any  // GLib.Bytes?
        length: number
    }
    export function fromString(input: string): ByteArray
    export function fromArray(input: number[]): ByteArray
    export function fromGBytes(input: any): ByteArray
    export function toString(x: ByteArray): string
}
export namespace console {
    export function interact(): void
}
export namespace Lang {
    // TODO: There is a lot more in Lang
    export function Class(props: any): void
}
export namespace gettext {
    export enum LocaleCategory {
        ALL, COLLATE, CTYPE, MESSAGES, MONETARY, NUMERIC, TIME
    }
    export function setlocale(category: number, locale: string|null): string
    export function textdomain(domainname: string|null): string
    export function bindtextdomain(domainname: string, dirname: string|null): string
    export function gettext(msgid: string): string
    export function dgettext(domainname: string|null, msgid: string): string
    export function dcgettext(domainname: string|null, msgid: string, category: number): string
    export function ngettext(msgid: string, msgid_plural: string, n: number): string
    export function dngettext(domainname: string, msgid: string, msgid_plural: string, n: number): string
    export function domain(domainName: string): { gettext: ((msgid: string) => string), ngettext: ((msgid: string, msgid_plural: string, n:number) => string), pgettext: ((context: any, msgid: string) => any) }
}
export namespace Format {
    export function vprintf(str: string, args: string[]): string
    export function printf(fmt: string, ...args: any[]): void
    // Following docs from gjs/modules/format.js
    /** 
     * This function is intended to extend the String object and provide
     * an String.format API for string formatting.
     * It has to be set up using String.prototype.format = Format.format;
     * Usage:
     * "somestring %s %d".format('hello', 5);
     * It supports %s, %d, %x and %f, for %f it also support precisions like
     * "%.2f".format(1.526). All specifiers can be prefixed with a minimum
     * field width, e.g. "%5s".format("foo"). Unless the width is prefixed
     * with '0', the formatted string will be padded with spaces.
     */
    export function format(fmt: string, ...args: any[]): string
}
export namespace Mainloop {
    export function quit(name: string): void
    export function idle_source(handler: any, priority: number): any
    export function idle_add(handler: any, priority: number): any
    export function timeout_source(timeout: any, handler: any, priority: number): any
    export function timeout_seconds_source(timeout: any, handler: any, priority: number): any
    export function timeout_add(timeout: any, handler: any, priority: number): any
    export function timeout_add_seconds(timeout: any, handler: any, priority: number): any
    export function source_remove(id: any): any
    export function run(name: string): void
}
`)

    fs.createWriteStream(`${outDir}/Gjs.js`).write(
`module.exports = {
    byteArray: imports.byteArray,
    Lang: imports.lang,
    Format: imports.format,
    Mainloop: imports.mainloop,
    gettext: imports.gettext
}`)

    const keys = lodash.keys(girModules).map(key => key.split("-")[0]);

    // Breaks dependent app with error TS2383 if directly in global.
    // https://github.com/Microsoft/TypeScript/issues/16430
    fs.createWriteStream(`${outDir}/print.d.ts`).write(
`declare function print(...args: any[]): void`);

    fs.createWriteStream(`${outDir}/index.js`).write("");

    fs.createWriteStream(`${outDir}/index.d.ts`).write(
`/// <reference path="print.d.ts" />

import * as Gjs from "./Gjs";
${keys.map(key => `import * as ${key} from "./${key}";`).join("\n")}

declare global {
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]
    const imports: typeof Gjs & {
        [key: string]: any
        gi: {
${keys.map(key => `            ${key}: typeof ${key}`).join("\n")}
        }
        searchPath: string[]
    }
}

export { }`)
}

function exportExtra(outDir: string|null, inheritanceTable)
{
    if (!outDir)
        return

    let def: string[] = []
    def.push("import * as GObject from './GObject'")
    def.push("")
    def.push("let inheritanceTable = {")
    for (let k of lodash.keys(inheritanceTable)) {
        let arr: string = "'" + inheritanceTable[k].join("', '") + "'"
        def.push(`    '${k}': [ ${arr} ],`)
    }
    def.push("}")
    def.push("")

    def.push(`
interface StaticNamed {
    name: string
}

/** Casts between derived classes, performing a run-time type-check
 * and raising an exception if the cast fails. Allows casting to implemented
 * interfaces, too.
 */
export function giCast<T>(from_: GObject.Object, to_: StaticNamed): T {
    let desc: string = from_.toString()
    let clsName: string|null = null
    for (let k of desc.split(" ")) {
        if (k.substring(0, 7) == "GIName:") {
            clsName = k.substring(7)
            break
        }
    }
    let toName = to_.name.replace("_", ".")

    if (toName === clsName)
        return ((from_ as any) as T)

    if (clsName) {
        let parents = inheritanceTable[clsName]
        if (parents) {
            if (parents.indexOf(toName) >= 0)
                return ((from_ as any) as T)
        }
    }

    throw Error("Invalid cast of " + desc + "(" + clsName + ") to " + toName)
}    
`)

    fs.createWriteStream(`${outDir}/cast.ts`).write(def.join("\n"))
}

function finaliseInheritance(inheritanceTable) {
    for (let clsName of lodash.keys(inheritanceTable)) {
        let p = inheritanceTable[clsName][0]
        while (p) {
            p = inheritanceTable[p]
            if (p) {
                p = p[0]
                inheritanceTable[clsName].push(p)
            }
        }
    }
}

function main() {
    commander
        .option("-g --gir-directory [directory]", "GIR directory",
            "/usr/share/gir-1.0")
        .option("-m --module [module]", 
            "GIR modules to load, e.g. 'Gio-2.0'. May be specified multiple " +
            "times", (val, lst) => { lst.push(val); return lst },
            [])
        .option("-o --outdir [dir]",
            "Directory to output to", null)
        .parse(process.argv)

    let girModules: { [key: string]: GirModule } = {}
    let girDirectory = commander.girDirectory
    let girToLoad = commander.module

    if (girToLoad.length == 0) {
        console.error("Need to specify modules via -m!")
        return
    }

    while (girToLoad.length > 0) {
        let name = girToLoad.shift()
        let fileName = `${girDirectory}/${name}.gir`
        console.log(`Parsing ${fileName}...`)
        let fileContents = fs.readFileSync(fileName, 'utf8')
        xml2js.parseString(fileContents, (err, result) => {
            if (err) {
                console.error("ERROR: " + err)
                return
            }
            let gi = new GirModule(result)

            if (!gi.name)
                return;

            girModules[`${gi.name}-${gi.version}`] = gi

            for (let dep of gi.dependencies) {
                if (!girModules[dep] && lodash.indexOf(girToLoad, dep) < 0) {                   
                    girToLoad.unshift(dep)
                }
            }
        })
    }

    //console.dir(girModules["GObject-2.0"], { depth: null })

    console.log("Files parsed, loading types...")

    let symTable: { [name: string]: any } = {}
    for (let k of lodash.values(girModules))
        k.loadTypes(symTable)

    let inheritanceTable: { [name: string]: string[] } = {}
    for (let k of lodash.values(girModules))
        k.loadInheritance(inheritanceTable)
    finaliseInheritance(inheritanceTable)
    
    //console.dir(inheritanceTable)

    // Figure out transitive module dependencies
    let modDependencyMap: { [name:string]: string[] } = {}
    
    for (let k of lodash.values(girModules)) {
        modDependencyMap[k.name || '-'] = lodash.map(k.dependencies || [], (val:string) => {
            return val.split('-')[0]
        })
    }
    
    let traverseDependencies = (name, ret) => {
        let deps = modDependencyMap[name]
        
        for (let a of deps) {
            if (ret[a]) continue
            ret[a] = 1
            traverseDependencies(a, ret)
        }
    }

    for (let k of lodash.values(girModules)) {
        let ret = {}
        traverseDependencies(k.name, ret)
        k.transitiveDependencies = lodash.keys(ret)
    }

    let patch = {
        "Atk.Object.get_description": [
            "/* return type clashes with Atk.Action.get_description */",
            "get_description(): string | null"
        ],
        "Atk.Object.get_name": [
            "/* return type clashes with Atk.Action.get_name */",
            "get_name(): string | null"
        ],
        "Atk.Object.set_description": [
            "/* return type clashes with Atk.Action.set_description */",
            "set_description(description: string): boolean | null"
        ],
        'Gtk.Container.child_notify': [
            '/* child_notify clashes with Gtk.Widget.child_notify */'
        ],
        'Gtk.MenuItem.activate': [
            '/* activate clashes with Gtk.Widget.activate */'
        ],
        'Gtk.TextView.get_window': [
            '/* get_window clashes with Gtk.Widget.get_window */'
        ],
        'WebKit.WebView.get_settings': [
            '/* get_settings clashes with Gtk.Widget.get_settings */'
        ]
    }

    console.log("Types loaded, generating .d.ts...")
    
    for (let k of lodash.keys(girModules)) {
        let outf: NodeJS.WritableStream = process.stdout
        if (commander.outdir) {
            let outdir: string = commander.outdir
            let name: string = girModules[k].name || 'unknown'
            let fileName: string = `${outdir}/${name}.d.ts`
            outf = fs.createWriteStream(fileName)
        }
        console.log(` - ${k} ...`)
        girModules[k].patch = patch
        girModules[k].export(outf)

        if (commander.outdir) {
            let outdir: string = commander.outdir
            let name: string = girModules[k].name || 'unknown'
            let fileName: string = `${outdir}/${name}.js`
            outf = fs.createWriteStream(fileName)
        }

        girModules[k].exportJs(outf)
    }

    // GJS internal stuff
    exportGjs(commander.outdir, girModules)
    exportExtra(commander.outdir, inheritanceTable)

    console.log("Done.")
}

if (require.main === module)
    main()
