"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const tiny_glob_1 = __importDefault(require("tiny-glob"));
const path_1 = __importDefault(require("path"));
const ts_for_gir_1 = require("./ts-for-gir");
const NAME = 'ts-for-gir';
/**
 * See https://github.com/tj/commander.js/#custom-option-processing
 * @param value
 * @param previous
 */
const collect = (value, previous) => {
    return previous.concat([value]);
};
/**
 * Adds the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
 * @param girDirectory
 * @param modules
 */
const findModules = (girDirectory, modules) => __awaiter(void 0, void 0, void 0, function* () {
    const foundModules = new Set();
    for (const i in modules) {
        if (modules[i]) {
            const filename = `${modules[i]}.gir`;
            const files = yield tiny_glob_1.default(filename, { cwd: girDirectory });
            const globModules = files.map(file => path_1.default.basename(file, '.gir'));
            globModules.forEach(module => foundModules.add(module));
        }
    }
    return foundModules;
});
commander_1.default
    .name(NAME)
    .description('Generates typescript type definitions from gir for gjs and node-gtk')
    .usage('ts-for-gir [options]')
    .option('-g --gir-directory [directory]', 'GIR directory', '/usr/share/gir-1.0')
    .option('-m --module <modules>', "GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules", collect, [])
    .option('-o --outdir <dir>', 'Directory to output to', '@types')
    .option('-e --environment <environments>', 'Javascript environment', collect, ['gjs', 'node'])
    .option('-b --build-type <type>', "Force the definitions generation type (default for gjs: 'lib', default for node: 'types')")
    .option('-p --print', 'Print the output to console and create no files')
    .option('-v, --verbose', 'verbosity', true);
commander_1.default.on('--help', function () {
    console.log('');
    console.log(`Run ${NAME} in your gjs or node-gtk project to generate typings for your project, pass the gir modules you need for your project`);
    console.log('');
    console.log('Examples:');
    console.log(`  $ ${NAME} -m Gtk-3.0 -m Soup-2.4 -m GtkSource-3.0 -m WebKit2-4.0 -m AppIndicator3-0.1 -m Gda-5.0 -m Notify-0.7 -o @types`);
    console.log('');
    console.log('  # You can also use wild cards');
    console.log(`  $ ${NAME} -m Gtk*`);
    console.log('');
    console.log('  # If you want to parse all of your locally installed gir modules, run');
    console.log(`  $ ${NAME} -m '*'`);
});
commander_1.default.parse(process.argv);
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const outDir = commander_1.default.print ? null : commander_1.default.outdir;
    const girDirectory = commander_1.default.girDirectory;
    const girToLoad = yield findModules(girDirectory, commander_1.default.module);
    const environments = commander_1.default.environment;
    const buildType = commander_1.default.buildType;
    for (const i in environments) {
        if (environments[i]) {
            const defaultBuildType = environments[i] === 'gjs' ? 'lib' : 'types';
            console.log('buildType || defaultBuildType', buildType || defaultBuildType);
            const tsForGir = new ts_for_gir_1.TsForGir();
            tsForGir.main(outDir, girDirectory, Array.from(girToLoad), environments[i], buildType || defaultBuildType, commander_1.default.verbose);
        }
    }
});
run();
//# sourceMappingURL=cli.js.map