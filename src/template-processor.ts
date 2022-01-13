/**
 * The TemplateProcessor is used generate strings from templates files or template strings
 * For example, the signal methods are generated here
 */

import fs from 'fs'
import Path from 'path'
import ejs from 'ejs'
import { Environment } from './types/environment.js'
import { Transformation } from './transformation.js'
import { Logger } from './logger.js'
import { GenerateConfig, GirCallableParamElement } from './types/index.js'
import { ESLint } from 'eslint'
import { fileURLToPath } from 'url'

const lint = new ESLint({ ignore: false, fix: true, useEslintrc: true, extensions: ['.ts', '.d.ts'] })

// Get __dirname on ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const TEMPLATE_DIR = Path.join(__dirname, '../templates')

export class TemplateProcessor {
    protected environmentTemplateDir: string
    protected log: Logger
    protected transformation: Transformation
    protected packageName: string
    constructor(
        protected readonly data: ejs.Data | undefined,
        packageName: string,
        protected readonly config: GenerateConfig,
    ) {
        this.packageName = packageName
        this.transformation = new Transformation(this.packageName, config)
        this.environmentTemplateDir = Transformation.getEnvironmentDir(config.environment, TEMPLATE_DIR)
        this.log = new Logger(config.environment, config.verbose, this.packageName)
    }

    public generateIndent(indents = 1, spaceForIndent = 4): string {
        return ' '.repeat(indents * spaceForIndent)
    }

    /**
     * See https://github.com/microsoft/tsdoc
     * @param description
     */
    public generateTSDocComment(description: string): string[] {
        const result: string[] = []
        result.push('/**')
        result.push(` * ${description}`)
        result.push(' */')
        return result
    }

    /**
     *
     * @param namespace E.g. 'Gtk'
     * @param packageName E.g. 'Gtk-3.0'
     * @param asExternType Currently only used for node type imports
     */
    public generateModuleDependenciesImport(namespace: string, packageName: string, asExternType = false): string[] {
        const result: string[] = []
        if (this.config.buildType === 'lib') {
            const sas = this.config.exportDefault && packageName !== 'Gjs' ? '' : '* as '
            result.push(`import type ${sas}${namespace} from './${packageName}';`)
        } else {
            if (asExternType) {
                // result.push(`/// <reference types="${packageName}" />`)
                result.push(`import "${packageName}"`)
            } else {
                // result.push(`/// <reference path="${packageName}.d.ts" />`)
                result.push(`import type { ${namespace} } from './${packageName}';`)
            }
        }
        return result
    }

    public generateSignalMethods(
        sigName: string,
        clsName: string,
        paramComma: ', ' | '',
        params: string[],
        retType: string,
        identCount = 1,
    ) {
        const ident = this.generateIndent(identCount)
        const def: string[] = []
        def.push(
            `${ident}connect(sigName: "${sigName}", callback: (($obj: ${clsName}${paramComma}${params.join(
                ', ',
            )}) => ${retType})): number`,
        )
        if (this.config.environment === 'gjs') {
            def.push(
                `${ident}connect_after(sigName: "${sigName}", callback: (($obj: ${clsName}${paramComma}${params.join(
                    ', ',
                )}) => ${retType})): number`,
            )
        }
        if (this.config.environment === 'node') {
            def.push(
                `${ident}on(sigName: "${sigName}", callback: (${params.join(
                    ', ',
                )}) => void, after?: boolean): NodeJS.EventEmitter`,
                `${ident}once(sigName: "${sigName}", callback: (${params.join(
                    ', ',
                )}) => void, after?: boolean): NodeJS.EventEmitter`,
                `${ident}off(sigName: "${sigName}", callback: (${params.join(', ')}) => void): NodeJS.EventEmitter`,
            )
        }
        def.push(`${ident}emit(sigName: "${sigName}"${paramComma}${params.join(', ')}): void`)
        return {
            def,
        }
    }

    public generateGObjectSignalMethods(
        propertyName: string,
        callbackObjectName: string,
        namespacePrefix: string,
        identCount = 1,
    ): string[] {
        const result: string[] = []
        const ident = this.generateIndent(identCount)
        result.push(
            `${ident}connect(sigName: "notify::${propertyName}", callback: (($obj: ${callbackObjectName}, pspec: ${namespacePrefix}ParamSpec) => void)): number`,
            `${ident}connect_after(sigName: "notify::${propertyName}", callback: (($obj: ${callbackObjectName}, pspec: ${namespacePrefix}ParamSpec) => void)): number`,
        )
        result.push()
        if (this.config.environment === 'node') {
            result.push(
                `${ident}on(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
                `${ident}once(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
                `${ident}off(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
            )
        }

        return result
    }

    public generateGeneralSignalMethods(environment: Environment, identCount = 1): string[] {
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

    public generateParameter(param: GirCallableParamElement) {
        if (
            typeof param._desc?.name !== 'string' ||
            typeof param._desc.isOptional !== 'string' ||
            typeof param._desc.type !== 'string'
        ) {
            throw new Error('Not all required properties set!')
        }
        return `${param._desc.name}${param._desc.isOptional}: ${param._desc.type}`
    }

    /**
     * Loads and renders a template and gets the rendered string back
     * @param templateFilename
     */
    public async load(templateFilename: string): Promise<string> {
        const fileContent = this.read(templateFilename)
        return await this.render(fileContent)
    }

    /**
     * Loads an template, render the template and write the template to the filesystem
     * @param templateFilename
     * @param outputDir
     * @param outputFilename
     * @return The rendered (and if possible prettified) code string
     */
    public async create(templateFilename: string, outputDir: string, outputFilename: string): Promise<string> {
        const fileContent = await this.load(templateFilename)
        const renderedCode = await this.render(fileContent)
        const destPath = await this.write(renderedCode, outputDir, outputFilename)
        const prettifiedCode = this.config.pretty ? await this.prettify(destPath, true) : null
        return prettifiedCode || renderedCode
    }

    protected async write(content: string, outputDir: string, outputFilename: string): Promise<string> {
        const outputEnvDir = Transformation.getEnvironmentDir(this.config.environment, outputDir)
        const destPath = Path.join(outputEnvDir, outputFilename)

        // write template result file
        await fs.promises.mkdir(outputDir, { recursive: true })
        await fs.promises.writeFile(destPath, content, { encoding: 'utf8', flag: 'w' })

        return destPath
    }

    protected async render(templateString: string, additionalData: Partial<ejs.Options> = {}): Promise<string> {
        try {
            const renderedCode = await Promise.resolve(
                ejs.render(templateString, {
                    async: true,
                    ...this.config,
                    ...this.data,
                    ...additionalData,
                }),
            )
            return renderedCode
        } catch (error) {
            this.log.error(error)
            return ''
        }
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

    public async prettify(path: string, changeFile = false): Promise<string | null> {
        let hasError = false
        let reports: ESLint.LintResult[] | undefined
        let prettifiedCode: string | null = null
        const filename = Path.basename(path)
        this.log.info(`   Prettify ${filename}...`)
        try {
            reports = await lint.lintFiles([path])
        } catch (error) {
            this.log.warn(error)
            hasError = true
        }

        if (reports && reports[0].errorCount > 0) {
            hasError = true
        }

        prettifiedCode = (reports && reports[0]?.output) || null

        if (hasError) {
            if (!prettifiedCode) {
                this.log.warn(`Can't prettify file: "${path}", please check errors or your .eslintrc.js config file`)
                if (reports) {
                    // this.log.dir(report)
                    reports?.forEach((result) => {
                        if (result.messages) {
                            for (const message of result.messages) {
                                // You can also log more than just the message if you need more information
                                this.log.warn(message.message)
                            }
                        }
                    })
                }
            }
        } else {
            if (prettifiedCode && changeFile) {
                await this.write(prettifiedCode, Path.dirname(path), Path.basename(path))
            }
        }

        return prettifiedCode
    }

    /**
     * Reads a template file from filesystem and gets the raw string back
     * @param templateFilename
     * @return The raw template content
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
