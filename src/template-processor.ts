/**
 * The TemplateProcessor is used generate strings from templates files or template strings
 * For example, the signal methods are generated here
 */

import fs from 'fs'
import Path from 'path'
import ejs from 'ejs'
import { Environment } from './types/environment'
import { Transformation } from './transformation'
import { Logger } from './logger'
import { GenerateConfig } from './types'
import { CLIEngine } from 'eslint' // TODO depricated: https://eslint.org/docs/developer-guide/nodejs-api#cliengine

const lint = new CLIEngine({ ignore: false, fix: true, useEslintrc: true })

const TEMPLATE_DIR = Path.join(__dirname, '../templates')

export class TemplateProcessor {
    private environmentTemplateDir: string
    private log: Logger
    constructor(
        protected readonly data: ejs.Data | undefined,
        moduleName = 'TemplateProcessor',
        private readonly config: GenerateConfig,
    ) {
        this.environmentTemplateDir = Transformation.getEnvironmentDir(config.environment, TEMPLATE_DIR)
        this.log = new Logger(config.environment, config.verbose, moduleName)
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
        namespace: string,
        baseFilename: string,
        asType = false,
        config: GenerateConfig,
    ): string[] {
        const result: string[] = []
        if (config.buildType === 'lib') {
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
            `${ident}connect(sigName: "${sigName}", callback: (($obj: ${clsName}${paramComma}${params}) => ${retType})): number`,
            `${ident}connect_after(sigName: "${sigName}", callback: (($obj: ${clsName}${paramComma}${params}) => ${retType})): number`,
            `${ident}emit(sigName: "${sigName}"${paramComma}${params}): void`,
        ]
        if (environment === 'node') {
            signalMethods.push(
                `${ident}on(sigName: "${sigName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
                `${ident}once(sigName: "${sigName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
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
            `${ident}connect(sigName: "notify::${propertyName}", callback: (($obj: ${callbackObjectName}, pspec: ${nampespacePrefix}ParamSpec) => void)): number`,
            `${ident}connect_after(sigName: "notify::${propertyName}", callback: (($obj: ${callbackObjectName}, pspec: ${nampespacePrefix}ParamSpec) => void)): number`,
        )
        result.push()
        if (environment === 'node') {
            result.push(
                `${ident}on(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
                `${ident}once(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
                `${ident}off(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
            )
        }

        return result
    }

    public static generateGeneralSignalMethods(environment: Environment, identCount = 1): string[] {
        const result: string[] = []
        const ident = this.generateIndent(identCount)
        result.push(
            `${ident}connect(sigName: string, callback: any): number`,
            `${ident}connect_after(sigName: string, callback: any): number`,
            `${ident}emit(sigName: string, ...args: any[]): void`,
            `${ident}disconnect(id: number): void`,
        )

        if (environment === 'node') {
            result.push(
                `${ident}on(sigName: string, callback: any): NodeJS.EventEmitter`,
                `${ident}once(sigName: string, callback: any): NodeJS.EventEmitter`,
                `${ident}off(sigName: string, callback: any): NodeJS.EventEmitter`,
            )
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
        const prettifiedCode = this.config.pretty ? this.prettify(destPath, true) : null
        return prettifiedCode || renderedCode
    }

    protected write(content: string, outputDir: string, outputFilename: string): string {
        outputDir = Transformation.getEnvironmentDir(this.config.environment, outputDir)
        const destPath = Path.join(outputDir, outputFilename)

        // write template result file
        fs.mkdirSync(outputDir, { recursive: true })
        fs.writeFileSync(destPath, content, { encoding: 'utf8', flag: 'w' })

        return destPath
    }

    protected render(templateString: string, additionalData: any = {}): string {
        const renderedCode = ejs.render(templateString, { ...this.config, ...this.data, ...additionalData })
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

    public prettify(path: string, changeFile = false): string | null {
        let hasError = false
        let report: any
        let prettifiedCode: string | null = null
        this.log.info(`   Prettify ...`)
        try {
            report = lint.executeOnFiles([path])
        } catch (error) {
            this.log.warn(error)
            hasError = true
        }

        if (report?.errorCount > 0) {
            hasError = true
        }

        prettifiedCode = report?.results[0]?.output || null

        if (hasError) {
            if (!prettifiedCode) {
                this.log.warn(
                    `Can't prettify file: "${path}", please check your .eslintrc.js in your working directory`,
                )
                this.log.dir(report)

                report?.results.forEach((result) => {
                    if (result.message) {
                        this.log.log(result.message)
                    }
                })
            }
        } else {
            prettifiedCode = report.results[0].output
            if (prettifiedCode && changeFile) {
                this.write(prettifiedCode, Path.dirname(path), Path.basename(path))
            }
        }

        return prettifiedCode
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
}

export default TemplateProcessor
