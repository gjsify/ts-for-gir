"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ejs_1 = __importDefault(require("ejs"));
const transformation_1 = require("./transformation");
const CLIEngine = require('eslint').CLIEngine;
const lint = new CLIEngine({ ignore: false, fix: true, useEslintrc: true });
const TEMPLATE_DIR = __dirname + '/../templates';
class TemplateProcessor {
    constructor(data, environment) {
        this.data = data;
        this.environment = environment;
        this.templateDir = transformation_1.Transformation.getEnvironmentDir(environment, TEMPLATE_DIR);
    }
    static generateSignalFunctions(environment, sigName, clsName, paramComma, params, retType) {
        const signalMethods = [
            `    connect(sigName: "${sigName}", callback: ((obj: ${clsName}${paramComma}${params}) => ${retType})): number`,
            `    connect_after(sigName: "${sigName}", callback: ((obj: ${clsName}${paramComma}${params}) => ${retType})): number`,
            `    emit(sigName: "${sigName}"${paramComma}${params}): void`,
        ];
        if (environment === 'node') {
            signalMethods.push(`    on(sigName: "${sigName}", callback: ((event: ${clsName}${paramComma}${params}) => ${retType})): EventEmitter`);
            signalMethods.push(`    once(sigName: "${sigName}", callback: ((event: ${clsName}${paramComma}${params}) => ${retType})): EventEmitter`);
            signalMethods.push(`    off(sigName: "${sigName}", callback: ((event: ${clsName}${paramComma}${params}) => ${retType})): EventEmitter`);
        }
        return signalMethods;
    }
    /**
     * Loads and renders a template and gets the rendered string back
     * @param templatePath
     */
    load(templatePath) {
        const fileContent = this.read(templatePath);
        return this.render(fileContent);
    }
    /**
     * Loads an template, render the template and write the template to the filesystem
     * @param templatePath
     * @param targetDir
     * @param targetFilename
     * @return The rendered (and if possible prettified) code string
     */
    create(templatePath, targetDir, targetFilename) {
        const fileContent = this.load(templatePath);
        const renderedCode = this.render(fileContent);
        const destPath = this.write(renderedCode, targetDir, targetFilename);
        const prettifiedCode = this.prettify(destPath);
        if (prettifiedCode) {
            this.write(prettifiedCode, targetDir, targetFilename);
        }
        return prettifiedCode || renderedCode;
    }
    write(content, targetDir, targetFilename) {
        targetDir = transformation_1.Transformation.getEnvironmentDir(this.environment, targetDir);
        const destPath = path_1.default.join(targetDir, targetFilename);
        // write template result file
        !fs_1.default.existsSync(targetDir) && fs_1.default.mkdirSync(targetDir, { recursive: true });
        fs_1.default.writeFileSync(destPath, content, { encoding: 'utf8', flag: 'w' });
        return destPath;
    }
    render(templateString, additionalData = {}) {
        const renderedCode = ejs_1.default.render(templateString, Object.assign(Object.assign({}, this.data), additionalData));
        return renderedCode;
    }
    /**
     * Reads a template file from filesystem and gets the unrendered string back
     * @param path
     * @return The path where the file was saved
     */
    read(path) {
        const fullTemplatePath = path_1.default.join(this.templateDir, path);
        return fs_1.default.readFileSync(fullTemplatePath, 'utf8');
    }
    prettify(path) {
        const report = lint.executeOnFiles([path]);
        if (report.results[0].output) {
            const targetCode = report.results[0].output;
            return targetCode;
        }
        else {
            // console.warn(report.results[0].messages);
            console.warn(`Can't prettify file: "${path}"`);
        }
        return null;
    }
}
exports.TemplateProcessor = TemplateProcessor;
exports.default = TemplateProcessor;
//# sourceMappingURL=template-processor.js.map