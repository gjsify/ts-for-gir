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
        "construct-only"?: string
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
interface GirInterface extends TsForGjsExtended {
    $: {
        name: string
    }
    doc?: GirDoc[]
    "constructor"?: GirFunction[] | Function
    function?: GirFunction[]
    method?: GirFunction[]
    property?: GirVariable[]
    "virtual-method"?: GirFunction[]
}
interface GirClass extends TsForGjsExtended {
    $: {
        name: string
        parent?: string
        version?: string
        // c:symbol-prefix, c:type, glib:get-type, glib:type-name
    }
    doc?: GirDoc[]
    function?: GirFunction[]
    "glib:signal"?: GirFunction[]
    method?: GirFunction[]
    property?: GirVariable[]
    "virtual-method"?: GirFunction[]

    _module?: GirModule
}
interface GirField {
    $: {
        name: string
    }
    callback?: GirFunction[]
}
interface GirRecord extends TsForGjsExtended {
    $: {
        name: string
        "c:type"?: string
    }
    doc?: GirDoc[]
    field?: GirField[]
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
        // glib:get-type, glib:type-name
    }
    doc?: GirDoc[]
    member?: GirEnumerationMember[]
}
interface GirAlias extends TsForGjsExtended {
    $: {
        name: string
        "c:type"?: string
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
    interface?: GirInterface[]
    record?: GirRecord[]
    union?: GirRecord[]
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
    ns: GirNamespace
    symTable: { [key:string]: any } = {}

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

        let annotateFunctionArguments = (f) => {
            if (f.parameters)
                for (let p of f.parameters)
                    if (p.parameter)
                        for (let x of p.parameter) {
                            x._module = this
                            if (x.$ && x.$.name)
                                x._fullSymName = `${this.name}.${x.$.name}`
                        }
        }
        let annotateFunctionReturn = (f) => {
            let retVal: GirVariable[] = f["return-value"]
            if (retVal)
                for (let x of retVal) {
                    x._module = this
                    if (x.$ && x.$.name)
                        x._fullSymName = `${this.name}.${x.$.name}`
                }
                
        }
        let annotateFunctions = (funcs) => {
            if (funcs)
                for (let f of funcs) {
                    annotateFunctionArguments(f)
                    annotateFunctionReturn(f)
                }
        }
        let annotateVariables = (vars) => {
            if (vars)
                for (let x of vars) {
                    x._module = this
                    if (x.$ && x.$.name)
                        x._fullSymName = `${this.name}.${x.$.name}`
                }
        }

        if (this.ns.callback) 
            for (let f of this.ns.callback) 
                annotateFunctionArguments(f)
                    
        if (this.ns.class)
            for (let c of this.ns.class) {
                annotateFunctions(c.function)
                annotateFunctions(c.method)
                annotateFunctions(c["virtual-method"])
                annotateFunctions(c["glib:signal"])
                annotateVariables(c.property)
            }

        // if (this.ns.)
        // props
        
        this.symTable = dict
    }

    private typeLookup(e: GirVariable) {
        let type: GirType
        let arr: string = ''
        let arrCType
        let nul: string = ''

        if (e.array && e.array.length > 0) {
            let typeArray = e.array[0].type
            if (typeArray == null || typeArray.length == 0)
                return 'any'
            if (e.array[0].$) {
                let ea: any = e.array[0].$
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
                // 'guint8': 'gjs.ByteArray',
                'gunichar': 'string'
            }
            if (podTypeMapArray[type.$.name] != null)
                return podTypeMapArray[type.$.name] + suffix
        }

        let podTypeMap = {
            'utf8': 'string', 'none': 'void', 'double': 'number', 'guint32': 'number',
            'guint16': 'number', 'gint16': 'number', 'gunichar': 'number',
            'gint8': 'number', 'gint32': 'number', 'gushort': 'number', 'gfloat': 'number',
            'gboolean': 'boolean', 'gpointer': 'object', 'gchar': 'number',
            'guint': 'number', 'glong': 'number', 'gulong': 'number', 'gint': 'number',
            'guint8': 'number', 'guint64': 'number', 'gint64': 'number', 
            'gdouble': 'number', 'gssize': 'number', 'gsize': 'number', 'long': 'number',
            'object': 'any', 'va_list': 'any',
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
                'GType': 'number',
            }
            if (cTypeMap[cType]) {
                return cTypeMap[cType]
            }
        }

        let fullTypeName: string = type.$.name
        
        // Fully qualify our type name if need be
        if (fullTypeName.indexOf(".") < 0) {
            let mod: GirModule = this
            if (e._module) mod = e._module
            fullTypeName = `${mod.name}.${type.$.name}`
        }

        if (this.symTable[fullTypeName] == null) {
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

        let returnVal = e["return-value"]
        if (returnVal && returnVal.length > 0) {
            returnType = this.typeLookup(returnVal[0])
        } else
            returnType = "void"

        return returnType
    }

    private getParameters(parameters) {
        let def: string[] = []

        if (parameters && parameters.length > 0) {
            let parametersArray = parameters[0].parameter
            if (parametersArray)
                for (let param of parametersArray) {
                    let paramName = this.fixVariableName(param.$.name, false)
                    let paramType = this.typeLookup(param)
                    def.push(`${paramName}: ${paramType}`)
                }
        }

        return def.join(", ")
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

        let name = this.fixVariableName(v.$.name, allowQuotes)
        let typeName = this.typeLookup(v)
        let nameSuffix = optional ? "?" : ""

        return [[`${name}${nameSuffix}:${typeName}`], name]
    }

    private getProperty(v: GirVariable, construct: boolean = false): [string[], string|null] {
        if (this.girBool(v.$["construct-only"]) && !construct)
            return [[], null]
        if (!this.girBool(v.$.writable) && construct)
            return [[], null]

        let propPrefix = this.girBool(v.$.writable) ? '' : 'readonly '
        let [propDesc,propName] = this.getVariable(v, construct, true)

        return [[`    ${propPrefix}${propDesc}`], propName]
    }

    exportEnumeration(e: GirEnumeration) {
        let def: string[] = []
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
        return [`export const ${varDesc}`]
    }

    private getFunction(e: GirFunction, prefix: string, funcNamePrefix: string | null = null): [string[], string | null] {
        if (!this.girBool(e.$.introspectable, true))
            return [[], null]

        let name = e.$.name
        let params = this.getParameters(e.parameters)
        let retType = this.getReturnType(e)

        if (funcNamePrefix)
            name = funcNamePrefix + name

        let reservedWords = {
            'false': 1, 'true': 1, 'break': 1
        }

        if (reservedWords[name])
            return [[`/* Function '${name}' is a reserved word */`], null]

        return [[`${prefix}${name}(${params}): ${retType}`], name]
    }

    private getSignalFunc(e: GirFunction) {
        let sigName = e.$.name
        let params = this.getParameters(e.parameters)
        let retType = this.getReturnType(e) 

        return [`    connect(sigName: "${sigName}", callback: ((${params}) => ${retType}))`]
    }

    exportFunction(e: GirFunction) {
        return this.getFunction(e, "export function ")[0]
    }

    exportCallback(e: GirFunction) {
        let name = e.$.name
        let params = this.getParameters(e.parameters)
        let retType = this.getReturnType(e)

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

        if (e.$.parent) {
            let parentName = e.$.parent
            let origParentName = parentName
            let mod: GirModule = this

            if (e._module) mod = e._module

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

    private exportObjectInternal(e: GirInterface | GirClass) {
        let name = e.$.name
        let def: string[] = []

        let checkName = (desc: string[], name, localNames) => {
            if (!desc || desc.length == 0)
                return []

            if (!name) {
                console.error(`No name for ${desc}`)
                return []
            }

            if (localNames[name]) {
                console.error(`Name ${name} already defined (${desc})`)
                return []
            }

            localNames[name] = 1
            return desc
        }

        // Properties for construction
        // XXX: shouldn't really make this for interfaces, as they
        // can't be instantiated?
        def.push(`export interface ${name}_ConstructProps {`)
        let constructPropNames = {}
        this.traverseInheritanceTree(e, (cls) => {
            if (cls.property) {
                def.push(`    /* Properties of ${cls.$.name} */`)
                for (let p of cls.property) {
                    let [desc, name] = this.getProperty(p, true)
                    def = def.concat(checkName(desc, name, constructPropNames))
                }
            }
        })
        def.push("}")

        // Instance side
        def.push(`export interface ${name} {`)
        
        let localNames = {}

        this.traverseInheritanceTree(e, (cls) => {
            if (cls.property) {
                def.push(`    /* Properties of ${cls.$.name} */`)
                for (let p of cls.property) {
                    let [desc, name] = this.getProperty(p)
                    def = def.concat(checkName(desc, name, localNames))
                }
            }
        })

        // Instance methods
        this.traverseInheritanceTree(e, (cls) => {
            if (cls.method) {
                def.push(`    /* Methods of ${cls.$.name} */`)
                for (let f of cls.method) {
                    let [desc, name] = this.getFunction(f, "    ")
                    def = def.concat(checkName(desc, name, localNames))
                }
            }
        })

        // Instance methods, vfunc_ prefix
        this.traverseInheritanceTree(e, (cls) => {
            let vmeth = cls["virtual-method"]
            if (vmeth) {
                def.push(`    /* Virtual methods of ${cls.$.name} */`)
                for (let f of vmeth) {
                    let [desc, name] = this.getFunction(f, "    ", "vfunc_")
                    def = def.concat(checkName(desc, name, localNames))
                }
            }
        })

        this.traverseInheritanceTree(e, (cls) => {
            let signals = cls["glib:signal"]
            if (signals) {
                def.push(`    /* Signals of ${cls.$.name} */`)
                for (let s of signals)
                    def = def.concat(this.getSignalFunc(s))
            }
            // FIXME: notify:: signals
        })

        // TODO: Records have fields

        def.push("}")

        // Static side: default constructor
        def.push(`export interface ${name}_Static {`)
        // FIXME: what logic does GJS choose here? When should we generate
        // the default GJS constructor?
        // I think this should only happen for things derived from
        // GObject?
        if (e.constructor && e.constructor.length > 0) {
            def.push(`    new (config: ${name}_ConstructProps): ${name}`)
        }
        def.push("}")

        // Static methods
        if (e.function) {
            def.push(`export declare class ${name}_Static {`)
            for (let f of e.function)
                def = def.concat(this.getFunction(f, "    ")[0])
            def.push("}")
        }

        def.push(`export declare var ${name}: ${name}_Static`)

        return def
    }

    exportAlias(e: GirAlias) {
        let typeName = this.typeLookup(e)
        let name = e.$.name

        return [`type ${name} = ${typeName}`]
    }

    exportInterface(e: GirInterface) {
        return this.exportObjectInternal(e)
    }

    exportClass(e: GirClass) {
        return this.exportObjectInternal(e)
    }

    export(outStream: NodeJS.WritableStream) {
        let out: string[] = []

        out.push("/**")
        out.push(` * ${this.name}-${this.version}`)
        out.push(" */")

        out.push("")

        let deps: string[] = this.transitiveDependencies

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

    // console.dir(symTable)

    // Figure out transitive module dependencies
    for (let k of lodash.values(girModules)) {
        let mod: GirModule = k
        let deps = {}
        let arr: string[] = []
        let todo: string[] = mod.dependencies || []
        
        // FIXME: this is a nasty hard-coded hack. What is the right solution
        // here?
        let fixups = { 'Pango':1, 'Gio':1 }
        if (fixups[mod.name || '-']) {
            todo.push('GLib-2.0')
        }

        while (todo.length > 0) {
            let d: string|undefined = todo.pop()
            if (!d)
                continue
            if (deps[d])
                continue
            deps[d] = 1
            arr.push(d)

            todo = todo.concat(girModules[d].dependencies)
        }

        mod.transitiveDependencies = arr
        //console.log("mod " + mod.name)
        //console.dir(arr)
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
        girModules[k].export(outf)
    }
    console.log("Done.")
}

if (require.main === module)
    main()