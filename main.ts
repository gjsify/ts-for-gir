import * as xml2js from 'xml2js'
import * as lodash from 'lodash'
import * as commander from 'commander'
import fs = require('fs')

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
interface GirVariable {
    $: {
        name?: string
        "transfer-ownership"?: string
        nullable?: string
        "allow-none"?: string
    }
    doc?: GirDoc[]
    type?: GirType[]
    array?: {
        $: {
            length: string
            "zero-terminated"?: string
            "c:type"?: string
        }
        type?: GirType[]
    }
}
interface GirParameter {
    parameter?: GirVariable[]
    "instance-parameter"?: GirVariable[]
}
interface GirFunction {
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
interface GirSignal {
    $: {
        name: string
        when: string
    }
    doc?: GirDoc[]
    "return-value"?: GirParameter[]
}
interface GirInterface {
    $: {
        name: string
    }
    doc?: GirDoc[]
    function?: GirFunction[]
    method?: GirFunction[]
    property?: GirVariable[]
    "virtual-method"?: GirFunction[]
}
interface GirClass {
    $: {
        name: string
        parent?: string
        version?: string
        // c:symbol-prefix, c:type, glib:get-type, glib:type-name
    }
    doc?: GirDoc[]
    function?: GirFunction[]
    "glib:signal": GirSignal[]
}
interface GirField {
    $: {
        name: string
    }
    callback?: GirFunction[]
}
interface GirRecord {
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
export interface GirEnumeration {
    $: {
        name: string
        version?: string
        "c:type"?: string
        // glib:get-type, glib:type-name
    }
    doc?: GirDoc[]
    member?: GirEnumerationMember[]
}
interface GirAlias {
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
}

interface GirRepository {
    include?: GirInclude[]
    namespace?: GirNamespace[]
}

export class GirModule {
    name: string | null = null
    version: string = "0.0"
    dependencies: string[] = []
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
                    dict[symName] = 1
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
    }

    private typeLookup(e: GirVariable) {
        let type: GirType
        let arr: string = ''
        let nul: string = ''

        if (e.array && e.array.type) {
            type = e.array.type[0]
            arr = '[]'
        } else if (e.type)
            type = e.type[0]
        else
            return "any";

        let nullable = e.$.nullable || e.$["allow-none"]
        if (nullable && parseInt(nullable) != 0) {
            nul = ' | null'
        }

        let suffix = arr + nul

        let podTypeMap = {
            'utf8': 'string',
            'none': 'void',
            'double': 'number',
            'guint32': 'number',
            'guint16': 'number',
            'gint16': 'number',
            'gunichar': 'number',
            'gint8': 'number',
            'gint32': 'number',
            'gushort': 'number',
            'gfloat': 'number',
            'gboolean': 'boolean',
            'gpointer': 'object',
            'gchar': 'number',
            'guint': 'number',
            'glong': 'number',
            'gulong': 'number',
            'gint': 'number',
            'guint8': 'number',
            'guint64': 'number',
            'gint64': 'number',
            'gdouble': 'number',
            'gssize': 'number',
            'gsize': 'number',
            'long': 'number',
            'object': 'any',
            'va_list': 'any',
        }

        if (podTypeMap[type.$.name] != null)
            return podTypeMap[type.$.name] + suffix

        if (!this.name)
            return "any"

        let fullTypeName: string = type.$.name
        
        // Fully qualify our type name if need be
        if (fullTypeName.indexOf(".") < 0)
            fullTypeName = `${this.name}.${type.$.name}`

        if (this.symTable[fullTypeName] == null) {
            console.warn("Could not find type " + fullTypeName)
            return "any" + arr
        }

        if (fullTypeName.indexOf(this.name + ".") == 0) {
            return fullTypeName.substring(this.name.length + 1) + suffix
        }

        return fullTypeName + suffix
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
                    let paramName = param.$.name
                    let paramType = this.typeLookup(param)
                    def.push(`${paramName}: ${paramType}`)
                }
        }

        return def.join(", ")
    }

    exportEnumeration(e: GirEnumeration) {
        let def: string[] = []
        def.push(`export enum ${e.$.name} {`)
        if (e.member) {
            for (let member of e.member) {
                let name = member.$.name.toUpperCase()
                def.push(`    ${name},`)
            }
        }
        def.push("}")
        return def
    }

    exportConstant(e: GirVariable) {
        let name = e.$.name
        let typeName = this.typeLookup(e)

        return [`export const ${name}:${typeName}`]
    }

    private getFunction(e: GirFunction, prefix: string, funcNamePrefix: string|null = null) {
        if (e.$.introspectable != null && parseInt(e.$.introspectable) == 0)
            return []

        let name = e.$.name
        let params = this.getParameters(e.parameters)
        let retType = this.getReturnType(e)

        if (funcNamePrefix)
            name = funcNamePrefix + name

        return [`${prefix}${name}(${params}): ${retType}`]
    }

    exportFunction(e: GirFunction) {
        return this.getFunction(e, "export function ")
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

    exportInterface(e: GirInterface) {
        let name = e.$.name

        let def: string[] = []
        def.push(`export interface ${name} {`)

        // Static methods: -> move to static defn
        if (e.function)
            for (let f of e.function)
                def = def.concat(this.getFunction(f, "    static "))

        // Instance methods
        if (e.method)
            for (let f of e.method)
                def = def.concat(this.getFunction(f, "    "))

        // Instance methods, vfunc_ prefix
        let vmeth = e["virtual-method"]
        if (vmeth)
            for (let f of vmeth)
                def = def.concat(this.getFunction(f, "    ", "vfunc_"))
        
        // property
        // signals (glib:signal)

        def.push("}")
        return def
    }

    private exportClass(e: GirClass | GirRecord | GirInterface) {

    }

    export(symTable, outStream) {
        this.symTable = symTable

        let out: string[] = []

        out.push("/**")
        out.push(` * ${this.name}-${this.version}`)
        out.push(" */")

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

        // alias
        // class
        // interface
        // record

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

    // console.dir(girModules["Gio-2.0"], { depth: null })

    console.log("Files parsed, loading types...")

    let symTable: { [name: string]: number } = {}
    for (let k of lodash.values(girModules))
        k.loadTypes(symTable)

    console.log("Types loaded, generating .d.ts...")
    
    for (let k of lodash.keys(girModules)) {
        girModules[k].export(symTable, process.stdout)
    }
}

if (require.main === module)
    main()