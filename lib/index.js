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
const commander_1 = __importDefault(require("commander"));
const lodash_1 = __importDefault(require("lodash"));
const fs_1 = __importDefault(require("fs"));
const xml2js = __importStar(require("xml2js"));
const gir_module_1 = require("./gir-module");
const template_processor_1 = __importDefault(require("./template-processor"));
const conversations_1 = require("./conversations");
function exportGjs(outDir, girModules, buildtype) {
    if (!outDir)
        return;
    const girModuleKeys = lodash_1.default.keys(girModules).map(key => key.split('-')[0]);
    const templateProcessor = new template_processor_1.default({ girModuleKeys, runtime: 'Gjs', buildtype }, 'gjs');
    // Types
    templateProcessor.create('Gjs.d.ts', outDir, 'Gjs.d.ts');
    templateProcessor.create('index.d.ts', outDir, 'index.d.ts');
    // Lib
    if (buildtype === 'lib') {
        templateProcessor.create('index.js', outDir, 'index.js');
        templateProcessor.create('Gjs.js', outDir, 'Gjs.js');
    }
}
function exportGjsCastLib(outDir, inheritanceTable, buildtype) {
    if (!outDir)
        return;
    const inheritanceTableKeys = lodash_1.default.keys(inheritanceTable);
    const templateProcessor = new template_processor_1.default({ inheritanceTableKeys, inheritanceTable, buildtype }, 'gjs');
    templateProcessor.create('cast.ts', outDir, 'cast.ts');
}
function exportNodeGtk(outDir, girModules, buildtype) {
    if (!outDir)
        return;
    const girModuleKeys = lodash_1.default.keys(girModules).map(key => key.split('-')[0]);
    const girModuleVersions = lodash_1.default.keys(girModules).map(key => key.split('-')[1]);
    const templateProcessor = new template_processor_1.default({ girModuleKeys, girModuleVersions, girModules, runtime: 'node-gtk', buildtype }, 'node');
    templateProcessor.create('index.d.ts', outDir, 'index.d.ts');
    if (buildtype === 'lib') {
        templateProcessor.create('index.js', outDir, 'index.js');
    }
}
function finaliseInheritance(inheritanceTable) {
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
function main(runtime, buildtype) {
    commander_1.default
        .option('-g --gir-directory [directory]', 'GIR directory', '/usr/share/gir-1.0')
        .option('-m --module [module]', "GIR modules to load, e.g. 'Gio-2.0'. May be specified multiple " + 'times', (val, lst) => {
        lst.push(val);
        return lst;
    }, [])
        .option('-o --outdir [dir]', 'Directory to output to', null)
        .parse(process.argv);
    const girModules = {};
    const girDirectory = commander_1.default.girDirectory;
    const girToLoad = commander_1.default.module;
    if (girToLoad.length == 0) {
        console.error('Need to specify modules via -m!');
        return;
    }
    while (girToLoad.length > 0) {
        const name = girToLoad.shift();
        const fileName = `${girDirectory}/${name}.gir`;
        console.log(`Parsing ${fileName}...`);
        const fileContents = fs_1.default.readFileSync(fileName, 'utf8');
        xml2js.parseString(fileContents, (err, result) => {
            if (err) {
                console.error('ERROR: ' + err);
                return;
            }
            const gi = new gir_module_1.GirModule(result, runtime, buildtype);
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
    console.log('Files parsed, loading types...');
    const symTable = {};
    for (const k of lodash_1.default.values(girModules))
        k.loadTypes(symTable);
    const inheritanceTable = {};
    for (const k of lodash_1.default.values(girModules))
        k.loadInheritance(inheritanceTable);
    finaliseInheritance(inheritanceTable);
    //console.dir(inheritanceTable)
    // Figure out transitive module dependencies
    const modDependencyMap = {};
    for (const k of lodash_1.default.values(girModules)) {
        modDependencyMap[k.name || '-'] = lodash_1.default.map(k.dependencies || [], (val) => {
            return val.split('-')[0];
        });
    }
    const traverseDependencies = (name, ret) => {
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
    console.log('Types loaded, generating .d.ts...');
    for (const k of lodash_1.default.keys(girModules)) {
        let dtOutf = process.stdout;
        if (commander_1.default.outdir) {
            const outdir = commander_1.default.outdir;
            const name = girModules[k].name || 'unknown';
            const targetDir = conversations_1.Conversation.getRuntimeDir(runtime, outdir);
            const dtFileName = `${name}.d.ts`;
            const dtTargetPath = `${targetDir}/${dtFileName}`;
            fs_1.default.mkdirSync(targetDir, { recursive: true });
            dtOutf = fs_1.default.createWriteStream(dtTargetPath);
        }
        console.log(` - ${k} ...`);
        girModules[k].patch = patch;
        girModules[k].export(dtOutf);
        if (buildtype === 'lib') {
            girModules[k].exportJs(commander_1.default.outdir);
        }
    }
    if (runtime === 'node') {
        // node-gtk internal stuff
        exportNodeGtk(commander_1.default.outdir, girModules, buildtype);
    }
    if (runtime === 'gjs') {
        // GJS internal stuff
        exportGjs(commander_1.default.outdir, girModules, buildtype);
        exportGjsCastLib(commander_1.default.outdir, inheritanceTable, buildtype);
    }
    console.log('Done.');
}
if (require.main === module) {
    // If we don't catch exceptions, stdout gets truncated
    try {
        main('gjs', 'lib');
        main('node', 'typeDefinition');
    }
    catch (ex) {
        console.log(ex.stack);
    }
}
//# sourceMappingURL=index.js.map