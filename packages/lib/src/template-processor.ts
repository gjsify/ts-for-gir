/**
 * The TemplateProcessor is used generate strings from templates files or template strings
 * For example, the signal methods are generated here
 */

import { existsSync } from 'fs'
import { readFile, writeFile, mkdir, readdir } from 'fs/promises'
import { join, dirname } from 'path'
import ejs from 'ejs'
import { Logger } from './logger.js'
import { APP_NAME, APP_USAGE, APP_SOURCE, APP_VERSION, PACKAGE_DESC, PACKAGE_KEYWORDS } from './constants.js'
import { __dirname, getEnvironmentDir, getDestPath } from './utils.js'
import { DependencyManager } from './dependency-manager.js'
import { Transformation } from './transformation.js'

import type { GenerateConfig, Dependency } from './types/index.js'

const TEMPLATE_DIR = join(__dirname, '../templates')

export class TemplateProcessor {
    protected environmentTemplateDir: string
    protected log: Logger
    protected transformation: Transformation
    constructor(
        protected readonly data: ejs.Data | undefined,
        protected readonly packageName: string,
        protected readonly dependencies: Dependency[],
        protected readonly config: GenerateConfig,
    ) {
        this.transformation = new Transformation(config)
        const dep = DependencyManager.getInstance(config)
        this.data = {
            ...this.data,
            APP_NAME,
            APP_USAGE,
            APP_SOURCE,
            APP_VERSION,
            PACKAGE_DESC: PACKAGE_DESC(packageName),
            PACKAGE_KEYWORDS: PACKAGE_KEYWORDS(packageName),
            importName: this.transformation.transformImportName(packageName),
            dep,
            deps: dependencies,
        }
        this.environmentTemplateDir = getEnvironmentDir(config.environment, TEMPLATE_DIR)
        this.log = new Logger(config.environment, config.verbose, this.packageName)
    }

    /**
     * Loads and renders a template and gets the rendered templates back
     * @param templateFilename
     */
    public async load(templateFilename: string): Promise<string> {
        const fileContent = await this.read(templateFilename)
        return await this.render(fileContent)
    }

    /**
     * Loads and renders all templates in a directory and gets the rendered templates back
     * @param templateDirname
     */
    public async loadAll(templateDirname: string, fileExtension: string): Promise<{ [path: string]: string }> {
        const fileContents = await this.readAll(templateDirname, fileExtension)
        for (const file of Object.keys(fileContents)) {
            fileContents[file] = await this.render(fileContents[file])
        }
        return fileContents
    }

    /**
     * Loads an template, render the template and write the template to the filesystem
     * @param templateFilename The filename of the template
     * @param baseOutputPath The base output directory path where the templates should be written to
     * @param outputFilename The filename of the output file
     * @param append A (optional) string that should be appended to the rendered template
     * @param prependEnv A (optional) boolean that indicates if the environment should be prepended to the output path
     * @param append A (optional) string that should be appended to the rendered template
     * @return The rendered (and if possible prettified) template string
     */
    public async create(
        templateFilename: string,
        baseOutputPath: string,
        outputFilename: string,
        prependEnv = true,
        append = '',
    ): Promise<string> {
        const renderedTpl = await this.load(templateFilename)
        const code = renderedTpl + append
        await this.write(code, baseOutputPath, outputFilename, prependEnv)
        return code
    }

    /**
     * Loads all templates with file extension in dir, render the templates and write the template to the filesystem
     * @param fileExtension The file extension of the templates
     * @param templateDirname The directory where the templates are located
     * @param baseOutputPath The base output directory path where the templates should be written to
     * @param outputDirname The child output directory of the base output directory where the templates should be written to
     * @param prependEnv A (optional) boolean that indicates if the environment should be prepended to the output path
     * @param append A (optional) string that should be appended to the rendered template
     * @return The rendered (and if possible prettified) templates
     */
    public async createAll(
        fileExtension: string,
        templateDirname: string,
        baseOutputPath: string,
        outputDirname: string,
        prependEnv = true,
        append = '',
    ) {
        const renderedTpls = await this.loadAll(templateDirname, fileExtension)
        const result: { [path: string]: string } = {}
        for (const filename of Object.keys(renderedTpls)) {
            const destPath = getDestPath(this.config.environment, baseOutputPath, outputDirname, filename)
            result[destPath] = renderedTpls[filename] + append
            await this.write(result[destPath], baseOutputPath, join(outputDirname, filename), prependEnv)
        }

        return result
    }

    public getOutputPath(baseOutputPath: string, outputFilename: string, prependEnv = true): string {
        const filePath = this.config.package ? join(this.packageName, outputFilename) : outputFilename
        const outputPath = prependEnv
            ? getDestPath(this.config.environment, baseOutputPath, filePath)
            : join(baseOutputPath, filePath)
        return outputPath
    }

    /**
     * Writes the `content` to the filesystem
     * @param content The content (normally the content of a rendered template file) that should be written to the filesystem
     * @param baseOutputPath The base output directory path where the templates should be written to
     * @param outputFilename The filename of the output file
     * @param prependEnv A (optional) boolean that indicates if the environment should be prepended to the output path
     * @returns
     */
    protected async write(
        content: string,
        baseOutputPath: string,
        outputFilename: string,
        prependEnv = true,
    ): Promise<string> {
        const outputPath = this.getOutputPath(baseOutputPath, outputFilename, prependEnv)

        // write template result file
        await mkdir(dirname(outputPath), { recursive: true })
        await writeFile(outputPath, content, { encoding: 'utf8', flag: 'w' })

        return Promise.resolve(outputPath)
    }

    protected async render(templateString: string, options: Partial<ejs.Options> = {}): Promise<string> {
        try {
            const renderedTpl = await ejs.render(
                templateString,
                {
                    ...this.config,
                    ...this.data,
                    packageName: this.packageName,
                },
                {
                    async: true,
                    ...options,
                },
            )
            return renderedTpl
        } catch (error) {
            console.error(error)
            this.log.error('Error on render', error)
            return ''
        }
    }

    /**
     * Checks if the template file or directory exists and returns the path if found
     * Tries first to load the file / directory from the environment-specific template folder and otherwise looks for it in the general template folder
     * @param templateFilename
     */
    public exists(templateFilename: string): string | null {
        const fullEnvironmentTemplatePath = join(this.environmentTemplateDir, templateFilename)
        const fullGeneralTemplatePath = join(TEMPLATE_DIR, templateFilename)
        if (existsSync(fullEnvironmentTemplatePath)) {
            return fullEnvironmentTemplatePath
        }
        if (existsSync(fullGeneralTemplatePath)) {
            return fullGeneralTemplatePath
        }
        return null
    }

    /**
     * Reads a template file from filesystem and gets the raw string back
     * @param templateFilename
     * @return The raw template content
     */
    protected async read(templateFilename: string) {
        const path = this.exists(templateFilename)
        if (path) {
            return await readFile(path, 'utf8')
        }
        throw new Error(`Template '${templateFilename}' not found'`)
    }

    /**
     * Reads all template files from a directory and gets the raw strings back
     * @param templateDirname
     * @param fileExtension
     * @return The raw template contents
     * @throws Error if the template directory does not exist
     * @throws Error if the template directory is empty
     */
    protected async readAll(templateDirname: string, fileExtension: string) {
        const path = this.exists(templateDirname)
        if (path) {
            const files = (await readdir(path)).filter((file) => file.endsWith(fileExtension))
            if (files.length === 0) {
                throw new Error(`Template directory '${templateDirname}' is empty'`)
            }
            const results: { [path: string]: string } = {}
            for (const file of files) {
                results[file] = await readFile(join(path, file), 'utf8')
            }
            return results
        }
        throw new Error(`Template directory '${templateDirname}' not found'`)
    }
}

export default TemplateProcessor
