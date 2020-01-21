import commander from 'commander'
import lodash from 'lodash'
import fs from 'fs'
import * as xml2js from 'xml2js'

import { GirModule } from './gir-module'
import { Runtime, Buildtype } from './types'
import TemplateProcessor from './template-processor'
import { Conversation } from './conversations'

function exportGjs(outDir: string | null, girModules: { [key: string]: any }, buildtype: Buildtype): void {
    if (!outDir) return

    const girModuleKeys = lodash.keys(girModules).map(key => key.split('-')[0])
    const templateProcessor = new TemplateProcessor({ girModuleKeys, runtime: 'Gjs' as Runtime, buildtype }, 'gjs')

    // Types
    templateProcessor.create('Gjs.d.ts', outDir, 'Gjs.d.ts')
    templateProcessor.create('index.d.ts', outDir, 'index.d.ts')

    // Lib
    if (buildtype === 'lib') {
        templateProcessor.create('index.js', outDir, 'index.js')
        templateProcessor.create('Gjs.js', outDir, 'Gjs.js')
    }
}

function exportGjsCastLib(outDir: string | null, inheritanceTable, buildtype: Buildtype): void {
    if (!outDir) return

    const inheritanceTableKeys = lodash.keys(inheritanceTable)
    const templateProcessor = new TemplateProcessor({ inheritanceTableKeys, inheritanceTable, buildtype }, 'gjs')
    templateProcessor.create('cast.ts', outDir, 'cast.ts')
}

function exportNodeGtk(outDir: string | null, girModules: { [key: string]: GirModule }, buildtype: Buildtype): void {
    if (!outDir) return

    const girModuleKeys = lodash.keys(girModules).map(key => key.split('-')[0])
    const girModuleVersions = lodash.keys(girModules).map(key => key.split('-')[1])
    const templateProcessor = new TemplateProcessor(
        { girModuleKeys, girModuleVersions, girModules, runtime: 'node-gtk' as Runtime, buildtype },
        'node',
    )

    templateProcessor.create('index.d.ts', outDir, 'index.d.ts')
    if (buildtype === 'lib') {
        templateProcessor.create('index.js', outDir, 'index.js')
    }
}

function finaliseInheritance(inheritanceTable) {
    for (const clsName of lodash.keys(inheritanceTable)) {
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

function main(runtime: Runtime, buildtype: Buildtype) {
    commander
        .option('-g --gir-directory [directory]', 'GIR directory', '/usr/share/gir-1.0')
        .option(
            '-m --module [module]',
            "GIR modules to load, e.g. 'Gio-2.0'. May be specified multiple " + 'times',
            (val, lst) => {
                lst.push(val)
                return lst
            },
            [],
        )
        .option('-o --outdir [dir]', 'Directory to output to', null)
        .parse(process.argv)

    const girModules: { [key: string]: GirModule } = {}
    const girDirectory = commander.girDirectory
    const girToLoad = commander.module

    if (girToLoad.length == 0) {
        console.error('Need to specify modules via -m!')
        return
    }

    while (girToLoad.length > 0) {
        const name = girToLoad.shift()
        const fileName = `${girDirectory}/${name}.gir`
        console.log(`Parsing ${fileName}...`)
        const fileContents = fs.readFileSync(fileName, 'utf8')
        xml2js.parseString(fileContents, (err, result) => {
            if (err) {
                console.error('ERROR: ' + err)
                return
            }
            const gi = new GirModule(result, runtime, buildtype)

            if (!gi.name) return

            girModules[`${gi.name}-${gi.version}`] = gi

            for (const dep of gi.dependencies) {
                if (!girModules[dep] && lodash.indexOf(girToLoad, dep) < 0) {
                    girToLoad.unshift(dep)
                }
            }
        })
    }

    //console.dir(girModules["GObject-2.0"], { depth: null })

    console.log('Files parsed, loading types...')

    const symTable: { [name: string]: any } = {}
    for (const k of lodash.values(girModules)) k.loadTypes(symTable)

    const inheritanceTable: { [name: string]: string[] } = {}
    for (const k of lodash.values(girModules)) k.loadInheritance(inheritanceTable)
    finaliseInheritance(inheritanceTable)

    //console.dir(inheritanceTable)

    // Figure out transitive module dependencies
    const modDependencyMap: { [name: string]: string[] } = {}

    for (const k of lodash.values(girModules)) {
        modDependencyMap[k.name || '-'] = lodash.map(k.dependencies || [], (val: string) => {
            return val.split('-')[0]
        })
    }

    const traverseDependencies = (name, ret) => {
        const deps = modDependencyMap[name]

        for (const a of deps) {
            if (ret[a]) continue
            ret[a] = 1
            traverseDependencies(a, ret)
        }
    }

    for (const k of lodash.values(girModules)) {
        const ret = {}
        traverseDependencies(k.name, ret)
        k.transitiveDependencies = lodash.keys(ret)
    }

    const patch = {
        'Atk.Object.get_description': [
            '/* return type clashes with Atk.Action.get_description */',
            'get_description(): string | null',
        ],
        'Atk.Object.get_name': ['/* return type clashes with Atk.Action.get_name */', 'get_name(): string | null'],
        'Atk.Object.set_description': [
            '/* return type clashes with Atk.Action.set_description */',
            'set_description(description: string): boolean | null',
        ],
        'Gtk.Container.child_notify': ['/* child_notify clashes with Gtk.Widget.child_notify */'],
        'Gtk.MenuItem.activate': ['/* activate clashes with Gtk.Widget.activate */'],
        'Gtk.TextView.get_window': ['/* get_window clashes with Gtk.Widget.get_window */'],
        'WebKit.WebView.get_settings': ['/* get_settings clashes with Gtk.Widget.get_settings */'],
    }

    console.log('Types loaded, generating .d.ts...')

    for (const k of lodash.keys(girModules)) {
        let dtOutf: NodeJS.WritableStream = process.stdout
        if (commander.outdir) {
            const outdir: string = commander.outdir
            const name: string = girModules[k].name || 'unknown'
            const targetDir = Conversation.getRuntimeDir(runtime, outdir)
            const dtFileName = `${name}.d.ts`
            const dtTargetPath = `${targetDir}/${dtFileName}`
            fs.mkdirSync(targetDir, { recursive: true })
            dtOutf = fs.createWriteStream(dtTargetPath)
        }
        console.log(` - ${k} ...`)
        girModules[k].patch = patch
        girModules[k].export(dtOutf)
        if (buildtype === 'lib') {
            girModules[k].exportJs(commander.outdir)
        }
    }

    if (runtime === 'node') {
        // node-gtk internal stuff
        exportNodeGtk(commander.outdir, girModules, buildtype)
    }

    if (runtime === 'gjs') {
        // GJS internal stuff
        exportGjs(commander.outdir, girModules, buildtype)
        exportGjsCastLib(commander.outdir, inheritanceTable, buildtype)
    }

    console.log('Done.')
}

if (require.main === module) {
    // If we don't catch exceptions, stdout gets truncated
    try {
        main('gjs', 'lib')
        main('node', 'typeDefinition')
    } catch (ex) {
        console.log(ex.stack)
    }
}
