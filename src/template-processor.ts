import fs from 'fs'
import Path from 'path'
import ejs from 'ejs'
import { Environment } from './types/environment'
import { Transformation } from './transformation'
import { BuildType } from './types'

const CLIEngine = require('eslint').CLIEngine
const lint = new CLIEngine({ ignore: false, fix: true, useEslintrc: true })

const TEMPLATE_DIR = __dirname + '/../templates'

export class TemplateProcessor {
    private environmentTemplateDir: string
    constructor(protected readonly data: any, private readonly environment: Environment) {
        this.environmentTemplateDir = Transformation.getEnvironmentDir(environment, TEMPLATE_DIR)
    }

    public static generateIndent(indents = 1, spaceForIndent = 4): string {
        return ' '.repeat(indents * spaceForIndent)
    }

    /**
     * See https://github.com/microsoft/tsdoc
     * @param description
     */
    public static generateTSDocComment(description: string): string[] {
        const result: string[] = []
        result.push('/**')
        result.push(` * ${description}`)
        result.push(' */')
        return result
    }

    public static generateModuleDependenciesImport(
        environment: Environment,
        buildType: BuildType,
        namespace: string,
        baseFilename: string,
        asType = false,
    ): string[] {
        const result: string[] = []
        if (buildType === 'lib') {
            result.push(`import * as ${namespace} from './${baseFilename}';`)
        } else {
            if (asType) {
                result.push(`/// <reference types="${baseFilename}" />`)
            } else {
                result.push(`/// <reference path="${baseFilename}.d.ts" />`)
            }
        }
        return result
    }

    public static generateSignalMethods(
        environment: Environment,
        sigName: string,
        clsName: string,
        paramComma: ', ' | '',
        params: string,
        retType: string,
        identCount = 1,
    ): string[] {
        const ident = this.generateIndent(identCount)
        const signalMethods = [
            `${ident}connect(sigName: "${sigName}", callback: ((obj: ${clsName}${paramComma}${params}) => ${retType})): number`,
            `${ident}connect_after(sigName: "${sigName}", callback: ((obj: ${clsName}${paramComma}${params}) => ${retType})): number`,
            `${ident}emit(sigName: "${sigName}"${paramComma}${params}): void`,
        ]
        if (environment === 'node') {
            signalMethods.push(
                `${ident}on(sigName: "${sigName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
            )
            signalMethods.push(
                `${ident}once(sigName: "${sigName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
            )
            signalMethods.push(
                `${ident}off(sigName: "${sigName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
            )
        }
        return signalMethods
    }

    public static generateGObjectSignalMethods(
        environment: Environment,
        propertyName: string,
        callbackObjectName: string,
        nampespacePrefix: string,
        identCount = 1,
    ): string[] {
        const result: string[] = []
        const ident = this.generateIndent(identCount)
        result.push(
            `${ident}connect(sigName: "notify::${propertyName}", callback: ((obj: ${callbackObjectName}, pspec: ${nampespacePrefix}ParamSpec) => void)): number`,
        )
        result.push(
            `${ident}connect_after(sigName: "notify::${propertyName}", callback: ((obj: ${callbackObjectName}, pspec: ${nampespacePrefix}ParamSpec) => void)): number`,
        )
        if (environment === 'node') {
            result.push(
                `${ident}on(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
            )
            result.push(
                `${ident}once(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
            )
            result.push(
                `${ident}off(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
            )
        }

        return result
    }

    public static generateGeneralSignalMethods(environment: Environment, identCount = 1): string[] {
        const result: string[] = []
        const ident = this.generateIndent(identCount)
        result.push(`${ident}connect(sigName: string, callback: any): number`)
        result.push(`${ident}connect_after(sigName: string, callback: any): number`)
        result.push(`${ident}emit(sigName: string, ...args: any[]): void`)
        result.push(`${ident}disconnect(id: number): void`)

        if (environment === 'node') {
            result.push(`${ident}on(sigName: string, callback: any): NodeJS.EventEmitter`)
            result.push(`${ident}once(sigName: string, callback: any): NodeJS.EventEmitter`)
            result.push(`${ident}off(sigName: string, callback: any): NodeJS.EventEmitter`)
        }
        return result
    }

    /**
     * Loads and renders a template and gets the rendered string back
     * @param templatePath
     */
    public load(templatePath: string): string {
        const fileContent = this.read(templatePath)
        return this.render(fileContent)
    }

    /**
     * Loads an template, render the template and write the template to the filesystem
     * @param templatePath
     * @param targetDir
     * @param targetFilename
     * @return The rendered (and if possible prettified) code string
     */
    public create(templatePath: string, targetDir: string, targetFilename: string): string {
        const fileContent = this.load(templatePath)
        const renderedCode = this.render(fileContent)
        const destPath = this.write(renderedCode, targetDir, targetFilename)
        const prettifiedCode = this.prettify(destPath)
        if (prettifiedCode) {
            this.write(prettifiedCode, targetDir, targetFilename)
        }
        return prettifiedCode || renderedCode
    }

    protected write(content: string, targetDir: string, targetFilename: string): string {
        targetDir = Transformation.getEnvironmentDir(this.environment, targetDir)
        const destPath = Path.join(targetDir, targetFilename)

        // write template result file
        !fs.existsSync(targetDir) && fs.mkdirSync(targetDir, { recursive: true })
        fs.writeFileSync(destPath, content, { encoding: 'utf8', flag: 'w' })

        return destPath
    }

    protected render(templateString: string, additionalData: any = {}): string {
        const renderedCode = ejs.render(templateString, { ...this.data, ...additionalData })
        return renderedCode
    }

    /**
     * Checks if the template file exists and returns the path if found
     * Tries first to load the file from the environment-specific template folder and otherwise looks for it in the general template folder
     * @param filename
     */
    public exists(filename: string): string | null {
        const fullEnvironmentTemplatePath = Path.join(this.environmentTemplateDir, filename)
        const fullGeneralTemplatePath = Path.join(TEMPLATE_DIR, filename)
        if (fs.existsSync(fullEnvironmentTemplatePath)) {
            return fullEnvironmentTemplatePath
        }
        if (fs.existsSync(fullGeneralTemplatePath)) {
            return fullGeneralTemplatePath
        }
        return null
    }

    /**
     * Reads a template file from filesystem and gets the unrendered string back
     * @param filename
     * @return The unrendered template content
     */
    protected read(filename: string): string {
        const path = this.exists(filename)
        if (path) {
            return fs.readFileSync(path, 'utf8')
        }
        throw new Error(`Template '${filename}' not found'`)
    }

    protected prettify(path: string): string | null {
        let hasError = false
        let report: any
        try {
            report = lint.executeOnFiles([path])
        } catch (error) {
            console.warn(error)
            hasError = true
        }

        if (!report?.results || !report.results[0]?.output) {
            hasError = true
        }

        if (hasError) {
            console.warn(
                `Can't prettify file: "${path}", please check if there is an .eslintrc.js in your working directory`,
            )
            return null
        }

        return report.results[0].output
    }
}

export default TemplateProcessor
