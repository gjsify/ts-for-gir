import lodash from 'lodash'
import fs from 'fs'
import * as xml2js from 'xml2js'

import { GirModule } from './gir-module'
import TemplateProcessor from './template-processor'
import { Transformation } from './transformation'

import { Environment, BuildType, InheritanceTable } from './types'

export class TsForGir {
    exportGjs(outDir: string | null, girModules: { [key: string]: any }, buildType: BuildType): void {
        if (!outDir) return

        const girModuleKeys = lodash.keys(girModules).map(key => key.split('-')[0])
        const templateProcessor = new TemplateProcessor(
            { girModuleKeys, environment: 'Gjs' as Environment, buildType },
            'gjs',
        )

        // Types
        templateProcessor.create('Gjs.d.ts', outDir, 'Gjs.d.ts')
        templateProcessor.create('index.d.ts', outDir, 'index.d.ts')

        // Lib
        if (buildType === 'lib') {
            templateProcessor.create('index.js', outDir, 'index.js')
            templateProcessor.create('Gjs.js', outDir, 'Gjs.js')
        }
    }

    exportGjsCastLib(outDir: string | null, inheritanceTable: InheritanceTable, buildType: BuildType): void {
        if (!outDir) return

        const inheritanceTableKeys = lodash.keys(inheritanceTable)
        const templateProcessor = new TemplateProcessor({ inheritanceTableKeys, inheritanceTable, buildType }, 'gjs')
        templateProcessor.create('cast.ts', outDir, 'cast.ts')
    }

    exportNodeGtk(outDir: string | null, girModules: { [key: string]: GirModule }, buildType: BuildType): void {
        if (!outDir) return

        const girModuleKeys = lodash.keys(girModules).map(key => key.split('-')[0])
        const girModuleVersions = lodash.keys(girModules).map(key => key.split('-')[1])
        const templateProcessor = new TemplateProcessor(
            { girModuleKeys, girModuleVersions, girModules, environment: 'node-gtk' as Environment, buildType },
            'node',
        )

        templateProcessor.create('index.d.ts', outDir, 'index.d.ts')
        if (buildType === 'lib') {
            templateProcessor.create('index.js', outDir, 'index.js')
        }
    }

    finaliseInheritance(inheritanceTable: InheritanceTable): void {
        for (const clsName of lodash.keys(inheritanceTable)) {
            let p: string | string[] = inheritanceTable[clsName][0]
            while (p) {
                p = inheritanceTable[p]
                if (p) {
                    p = p[0]
                    inheritanceTable[clsName].push(p)
                }
            }
        }
    }

    main(
        outDir: string | null,
        girDirectory: string,
        girToLoad: string[],
        environment: Environment,
        buildType: BuildType,
        verbose = true,
    ): void {
        const girModules: { [key: string]: GirModule } = {}

        if (girToLoad.length == 0) {
            console.error('Need to specify modules via -m!')
            return
        }

        while (girToLoad.length > 0) {
            const name = girToLoad.shift()
            const fileName = `${girDirectory}/${name}.gir`
            if (verbose) console.log(`Parsing ${fileName}...`)
            const fileContents = fs.readFileSync(fileName, 'utf8')
            xml2js.parseString(fileContents, (err, result) => {
                if (err) {
                    console.error('ERROR: ' + err)
                    return
                }
                const gi = new GirModule(result, environment, buildType)

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

        if (verbose) console.log('Files parsed, loading types...')

        const symTable: { [name: string]: any } = {}
        for (const k of lodash.values(girModules)) k.loadTypes(symTable)

        const inheritanceTable: { [name: string]: string[] } = {}
        for (const k of lodash.values(girModules)) k.loadInheritance(inheritanceTable)

        this.finaliseInheritance(inheritanceTable)

        // console.log('inheritanceTable:')
        // console.dir(inheritanceTable)

        // Figure out transitive module dependencies
        const modDependencyMap: { [name: string]: string[] } = {}

        for (const k of lodash.values(girModules)) {
            modDependencyMap[k.name || '-'] = lodash.map(k.dependencies || [], (val: string) => {
                return val.split('-')[0]
            })
        }

        const traverseDependencies = (name: string | null, ret): void => {
            if (!name) {
                return
            }
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

        if (verbose) console.log('Types loaded, generating .d.ts...')

        for (const k of lodash.keys(girModules)) {
            let dtOutf: NodeJS.WritableStream = process.stdout
            if (outDir) {
                const name: string = girModules[k].name || 'unknown'
                const targetDir = Transformation.getEnvironmentDir(environment, outDir)
                const dtFileName = `${name}.d.ts`
                const dtTargetPath = `${targetDir}/${dtFileName}`
                fs.mkdirSync(targetDir, { recursive: true })
                dtOutf = fs.createWriteStream(dtTargetPath)
            }
            if (verbose) console.log(` - ${k} ...`)
            girModules[k].patch = patch
            girModules[k].export(dtOutf)
            if (buildType === 'lib') {
                girModules[k].exportJs(outDir)
            }
        }

        if (environment === 'node') {
            // node-gtk internal stuff
            this.exportNodeGtk(outDir, girModules, buildType)
        }

        if (environment === 'gjs') {
            // GJS internal stuff
            this.exportGjs(outDir, girModules, buildType)
            this.exportGjsCastLib(outDir, inheritanceTable, buildType)
        }

        if (verbose) console.log('Done.')
    }
}
