import * as xml2js from 'xml2js'
import * as lodash from 'lodash'
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
        "c:type": string
    }
}
interface GirVariable {
    $: {
        name: string
        "transfer-ownership"?: string
    }
    doc?: GirDoc[]
    type?: GirType[]
}
interface GirParameter {
    parameter: GirVariable
}
interface GirFunction {
    $: {
        name: string
        version?: string
        "c-identifier"?: string
    }
    doc?: GirDoc[]
    parameters?: GirParameter[]
    "return-value"?: GirParameter[]
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
interface GirEnumeration {
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
    alias?: any[]
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

class GirModule {
    name: string | null = null
    version: string = "0.0"
    dependencies: string[] = []
    repo: GirRepository
    ns: GirNamespace

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

    private exportEnumeration(e: GirEnumeration, out: NodeJS.WritableStream) {
        let def: string[] = []
        def.push(`export enum ${e.$.name} {`)
        if (e.member) {
            for (let member of e.member) {
                let name = member.$.name.toUpperCase()
                def.push(`    ${name},`)
            }
        }
        def.push("}")
        out.write(def.join("\n") + "\n")
    }

    export(typeNames, out) {
        out.write(`/**
* ${this.name}-${this.version}
*/`)

        if (this.ns.enumeration)
            for (let e of this.ns.enumeration)
                this.exportEnumeration(e, out)

        if (this.ns.bitfield)
            for (let e of this.ns.bitfield)
                this.exportEnumeration(e, out)
    
    }
}

function main() {
    let girModules: { [key: string]: GirModule } = {}
    let girDirectory = "/usr/share/gir-1.0"
    let girToLoad = ["Gio-2.0"]

    while (girToLoad.length > 0) {
        let name = girToLoad.shift()
        let fileName = `${girDirectory}/${name}.gir`
        let fileContents = fs.readFileSync(fileName, 'utf8')
        console.log(`Parsing ${fileName}...`)
        xml2js.parseString(fileContents, (err, result) => {
            if (err) {
                console.error("ERROR: " + err)
                return
            }
            let gi = new GirModule(result)

            if (!gi.name)
                return;

            girModules[gi.name] = gi

            for (let dep of gi.dependencies) {
                if (!girModules[dep])
                    girToLoad.unshift(dep)
            }
        })
    }

    console.log("Files parsed, loading types...")

    let typeNames: { [name: string]: number } = {}
    for (let k of lodash.values(girModules))
        k.loadTypes(typeNames)

    console.log("Types loaded, generating .d.ts...")
    
    for (let k of lodash.keys(girModules)) {
        girModules[k].export(typeNames, process.stdout)
    }
}

main()