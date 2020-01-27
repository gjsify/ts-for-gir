import fs from 'fs'
import Path from 'path'
import ejs from 'ejs'
import { Environment } from './types/environment'
import { Transformation } from './transformation'
import { BuildType } from './types'

const CLIEngine = require('eslint').CLIEngine
const lint = new CLIEngine({ ignore: false, fix: true, useEslintrc: true })

const TEMPLATE_DIR = Path.join(__dirname, '../templates')

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
     * @param templateFilename
     */
    public load(templateFilename: string): string {
        const fileContent = this.read(templateFilename)
        return this.render(fileContent)
    }

    /**
     * Loads an template, render the template and write the template to the filesystem
     * @param templateFilename
     * @param outputDir
     * @param outputFilename
     * @return The rendered (and if possible prettified) code string
     */
    public create(templateFilename: string, outputDir: string, outputFilename: string): string {
        const fileContent = this.load(templateFilename)
        const renderedCode = this.render(fileContent)
        const destPath = this.write(renderedCode, outputDir, outputFilename)
        const prettifiedCode = this.prettify(destPath)
        if (prettifiedCode) {
            this.write(prettifiedCode, outputDir, outputFilename)
        }
        return prettifiedCode || renderedCode
    }

    protected write(content: string, outputDir: string, outputFilename: string): string {
        outputDir = Transformation.getEnvironmentDir(this.environment, outputDir)
        const destPath = Path.join(outputDir, outputFilename)

        // write template result file
        fs.mkdirSync(outputDir, { recursive: true })
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
     * @param templateFilename
     */
    public exists(templateFilename: string): string | null {
        const fullEnvironmentTemplatePath = Path.join(this.environmentTemplateDir, templateFilename)
        const fullGeneralTemplatePath = Path.join(TEMPLATE_DIR, templateFilename)
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
     * @param templateFilename
     * @return The unrendered template content
     */
    protected read(templateFilename: string): string {
        const path = this.exists(templateFilename)
        if (path) {
            return fs.readFileSync(path, 'utf8')
        }
        throw new Error(`Template '${templateFilename}' not found'`)
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
            console.warn(`Can't prettify file: "${path}", please check your .eslintrc.js in your working directory`)
            return null
        }

        return report.results[0].output
    }
}

export default TemplateProcessor
