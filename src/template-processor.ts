/**
 * The TemplateProcessor is used generate strings from templates files or template strings
 * For example, the signal methods are generated here
 */

import fs from 'fs'
import Path from 'path'
import ejs from 'ejs'
import { Logger } from './logger.js'
import { APP_NAME, APP_USAGE, APP_SOURCE } from './constants.js'
import type { GenerateConfig } from './types/index.js'
import { ESLint } from 'eslint'
import esLintConfig from './eslint-config.js'
import { __dirname, getEnvironmentDir } from './utils.js'

const lint = new ESLint(esLintConfig)

const TEMPLATE_DIR = Path.join(__dirname, '../templates')

export class TemplateProcessor {
    protected environmentTemplateDir: string
    protected log: Logger
    constructor(
        protected readonly data: ejs.Data | undefined,
        protected readonly packageName: string,
        protected readonly config: GenerateConfig,
    ) {
        this.data = {
            ...this.data,
            APP_NAME,
            APP_USAGE,
            APP_SOURCE,
        }
        this.environmentTemplateDir = getEnvironmentDir(config.environment, TEMPLATE_DIR)
        this.log = new Logger(config.environment, config.verbose, this.packageName)
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
        const outputEnvDir = getEnvironmentDir(this.config.environment, outputDir)
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
                this.log.warn(`Can't prettify file: "${path}".`)
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
