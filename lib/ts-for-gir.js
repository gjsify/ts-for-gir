"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const fs_1 = __importDefault(require("fs"));
const xml2js = __importStar(require("xml2js"));
const gir_module_1 = require("./gir-module");
const template_processor_1 = __importDefault(require("./template-processor"));
const transformation_1 = require("./transformation");
class TsForGir {
    exportGjs(outDir, girModules, buildType) {
        if (!outDir)
            return;
        const girModuleKeys = lodash_1.default.keys(girModules).map(key => key.split('-')[0]);
        const templateProcessor = new template_processor_1.default({ girModuleKeys, environment: 'Gjs', buildType }, 'gjs');
        // Types
        templateProcessor.create('Gjs.d.ts', outDir, 'Gjs.d.ts');
        templateProcessor.create('index.d.ts', outDir, 'index.d.ts');
        // Lib
        if (buildType === 'lib') {
            templateProcessor.create('index.js', outDir, 'index.js');
            templateProcessor.create('Gjs.js', outDir, 'Gjs.js');
        }
    }
    exportGjsCastLib(outDir, inheritanceTable, buildType) {
        if (!outDir)
            return;
        const inheritanceTableKeys = lodash_1.default.keys(inheritanceTable);
        const templateProcessor = new template_processor_1.default({ inheritanceTableKeys, inheritanceTable, buildType }, 'gjs');
        templateProcessor.create('cast.ts', outDir, 'cast.ts');
    }
    exportNodeGtk(outDir, girModules, buildType) {
        if (!outDir)
            return;
        const girModuleKeys = lodash_1.default.keys(girModules).map(key => key.split('-')[0]);
        const girModuleVersions = lodash_1.default.keys(girModules).map(key => key.split('-')[1]);
        const templateProcessor = new template_processor_1.default({ girModuleKeys, girModuleVersions, girModules, environment: 'node-gtk', buildType }, 'node');
        templateProcessor.create('index.d.ts', outDir, 'index.d.ts');
        if (buildType === 'lib') {
            templateProcessor.create('index.js', outDir, 'index.js');
        }
    }
    finaliseInheritance(inheritanceTable) {
        for (const clsName of lodash_1.default.keys(inheritanceTable)) {
            let p = inheritanceTable[clsName][0];
            while (p) {
                p = inheritanceTable[p];
                if (p) {
                    p = p[0];
                    inheritanceTable[clsName].push(p);
                }
            }
        }
    }
    main(outDir, girDirectory, girToLoad, environment, buildType, verbose = true) {
        const girModules = {};
        if (girToLoad.length == 0) {
            console.error('Need to specify modules via -m!');
            return;
        }
        while (girToLoad.length > 0) {
            const name = girToLoad.shift();
            const fileName = `${girDirectory}/${name}.gir`;
            if (verbose)
                console.log(`Parsing ${fileName}...`);
            const fileContents = fs_1.default.readFileSync(fileName, 'utf8');
            xml2js.parseString(fileContents, (err, result) => {
                if (err) {
                    console.error('ERROR: ' + err);
                    return;
                }
                const gi = new gir_module_1.GirModule(result, environment, buildType);
                if (!gi.name)
                    return;
                girModules[`${gi.name}-${gi.version}`] = gi;
                for (const dep of gi.dependencies) {
                    if (!girModules[dep] && lodash_1.default.indexOf(girToLoad, dep) < 0) {
                        girToLoad.unshift(dep);
                    }
                }
            });
        }
        //console.dir(girModules["GObject-2.0"], { depth: null })
        if (verbose)
            console.log('Files parsed, loading types...');
        const symTable = {};
        for (const k of lodash_1.default.values(girModules))
            k.loadTypes(symTable);
        const inheritanceTable = {};
        for (const k of lodash_1.default.values(girModules))
            k.loadInheritance(inheritanceTable);
        this.finaliseInheritance(inheritanceTable);
        // console.log('inheritanceTable:')
        // console.dir(inheritanceTable)
        // Figure out transitive module dependencies
        const modDependencyMap = {};
        for (const k of lodash_1.default.values(girModules)) {
            modDependencyMap[k.name || '-'] = lodash_1.default.map(k.dependencies || [], (val) => {
                return val.split('-')[0];
            });
        }
        const traverseDependencies = (name, ret) => {
            if (!name) {
                return;
            }
            const deps = modDependencyMap[name];
            for (const a of deps) {
                if (ret[a])
                    continue;
                ret[a] = 1;
                traverseDependencies(a, ret);
            }
        };
        for (const k of lodash_1.default.values(girModules)) {
            const ret = {};
            traverseDependencies(k.name, ret);
            k.transitiveDependencies = lodash_1.default.keys(ret);
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
        };
        if (verbose)
            console.log('Types loaded, generating .d.ts...');
        for (const k of lodash_1.default.keys(girModules)) {
            let dtOutf = process.stdout;
            if (outDir) {
                const name = girModules[k].name || 'unknown';
                const targetDir = transformation_1.Transformation.getEnvironmentDir(environment, outDir);
                const dtFileName = `${name}.d.ts`;
                const dtTargetPath = `${targetDir}/${dtFileName}`;
                fs_1.default.mkdirSync(targetDir, { recursive: true });
                dtOutf = fs_1.default.createWriteStream(dtTargetPath);
            }
            if (verbose)
                console.log(` - ${k} ...`);
            girModules[k].patch = patch;
            girModules[k].export(dtOutf);
            if (buildType === 'lib') {
                girModules[k].exportJs(outDir);
            }
        }
        if (environment === 'node') {
            // node-gtk internal stuff
            this.exportNodeGtk(outDir, girModules, buildType);
        }
        if (environment === 'gjs') {
            // GJS internal stuff
            this.exportGjs(outDir, girModules, buildType);
            this.exportGjsCastLib(outDir, inheritanceTable, buildType);
        }
        if (verbose)
            console.log('Done.');
    }
}
exports.TsForGir = TsForGir;
//# sourceMappingURL=ts-for-gir.js.map