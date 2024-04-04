/**
 * The TemplateProcessor is used generate strings from templates files or template strings
 * For example, the signal methods are generated here
 */

import { existsSync } from 'fs'
import { readFile, writeFile, mkdir, readdir } from 'fs/promises'
import { join, dirname, relative, extname } from 'path'
import ejs from 'ejs'
import { __dirname } from './utils.js'
import {
    Logger,
    APP_NAME,
    APP_USAGE,
    APP_SOURCE,
    APP_VERSION,
    PACKAGE_DESC,
    PACKAGE_KEYWORDS,
    DependencyManager,
    Transformation,
} from '@ts-for-gir/lib'

import type { GenerateConfig, Dependency, TemplateData } from '@ts-for-gir/lib'

const TEMPLATE_DIR = join(__dirname, '../templates')

export class TemplateProcessor {
    protected environmentTemplateDir: string
    protected log: Logger
    protected transformation: Transformation
    constructor(
        protected readonly data: TemplateData | undefined,
        protected readonly packageName: string,
        protected readonly deps: Dependency[],
        protected readonly config: GenerateConfig,
    ) {
        this.transformation = new Transformation(config)
        const dep = DependencyManager.getInstance(config)
        let outdir = config.outdir || './'
        // Make outdir relative to the root directory
        outdir = relative(config.root, outdir)
        const typeDir = outdir

        this.data = {
            ...this.data,
            APP_NAME,
            APP_USAGE,
            APP_SOURCE,
            APP_VERSION,
            PACKAGE_DESC: PACKAGE_DESC(packageName, this.data?.girModule?.libraryVersion),
            PACKAGE_KEYWORDS: PACKAGE_KEYWORDS(packageName),
            importName: this.transformation.transformImportName(packageName),
            dep,
            deps,
            typeDir,
            join,
            dirname,
        }
        this.environmentTemplateDir = this.getEnvironmentDir(TEMPLATE_DIR)
        this.log = new Logger(config.verbose, this.packageName)
    }

    /**
     * Get the output or input directory of the environment
     * @param environment The environment to get the directory for
     * @param baseDir The base directory
     * @returns The path to the directory
     */
    protected getEnvironmentDir = (baseDir: string): string => {
        if (!baseDir.endsWith('/gjs')) {
            return join(baseDir, 'gjs')
        }

        return baseDir
    }

    protected getAppendTemplateName(templateFilename: string) {
        let appendTemplateFilename = templateFilename

        if (appendTemplateFilename.endsWith('.d.ts')) {
            appendTemplateFilename = appendTemplateFilename.replace('.d.ts', '.append.d.ts')
        } else if (extname(appendTemplateFilename)) {
            const ext = extname(appendTemplateFilename)
            appendTemplateFilename = appendTemplateFilename.replace(ext, '.append' + ext)
        } else {
            appendTemplateFilename += '.append'
        }
        return appendTemplateFilename
    }

    /**
     * Loads and renders a template and gets the rendered templates back
     * @param templateFilename
     */
    public async load(
        templateFilename: string,
        ejsOptions: Partial<ejs.Options> = {},
        overrideTemplateData: TemplateData = {},
    ): Promise<{ prepend: string; append: string }> {
        const fileContent = await this.read(templateFilename)
        const prepend = await this.render(fileContent, ejsOptions, overrideTemplateData)
        let append = ''

        const appendTemplateFilename = this.getAppendTemplateName(templateFilename)
        if (this.exists(appendTemplateFilename)) {
            const appendFileContent = await this.read(appendTemplateFilename)
            append = await this.render(appendFileContent, ejsOptions, overrideTemplateData)
        }

        return { prepend, append }
    }

    /**
     * Loads and renders all templates in a directory and gets the rendered templates back
     * @param templateDirname
     * @param fileExtension
     * @param ejsOptions EJS options
     * @param overrideTemplateData Override template data if you want
     * @returns The rendered templates
     */
    public async loadAll(
        templateDirname: string,
        fileExtension: string,
        ejsOptions: Partial<ejs.Options> = {},
        overrideTemplateData: TemplateData = {},
    ): Promise<{ [path: string]: string }> {
        const fileContents = await this.readAll(templateDirname, fileExtension)
        for (const file of Object.keys(fileContents)) {
            fileContents[file] = await this.render(fileContents[file], ejsOptions, overrideTemplateData)
        }
        return fileContents
    }

    /**
     * Loads an template, render the template and write the template to the filesystem
     * @param templateFilename The filename of the template
     * @param baseOutputPath The base output directory path where the templates should be written to
     * @param outputFilename The filename of the output file
     * @param content A (optional) string that should be appended to the rendered template
     * @param ejsOptions EJS options
     * @param overrideTemplateData Override template data if you want
     * @return The rendered template string
     */
    public async create(
        templateFilename: string,
        baseOutputPath: string,
        outputFilename: string,
        content = '',
        ejsOptions: Partial<ejs.Options> = {},
        overrideTemplateData: TemplateData = {},
    ): Promise<string> {
        const { prepend, append } = await this.load(templateFilename, ejsOptions, overrideTemplateData)
        const code = prepend + '\n' + content + '\n' + append
        await this.write(code, baseOutputPath, outputFilename)
        return code
    }

    /**
     * Loads all templates with file extension in dir, render the templates and write the template to the filesystem
     * @param fileExtension The file extension of the templates
     * @param templateDirname The directory where the templates are located
     * @param baseOutputPath The base output directory path where the templates should be written to
     * @param outputDirname The child output directory of the base output directory where the templates should be written to
     * @param append A (optional) string that should be appended to the rendered template
     * @param ejsOptions EJS options
     * @param overrideTemplateData Override template data if you want
     * @return The rendered (and if possible prettified) templates
     */
    public async createAll(
        fileExtension: string,
        templateDirname: string,
        baseOutputPath: string,
        outputDirname: string,
        append = '',
        ejsOptions: Partial<ejs.Options> = {},
        overrideTemplateData: TemplateData = {},
    ) {
        const rendered = await this.loadAll(templateDirname, fileExtension, ejsOptions, overrideTemplateData)
        const result: { [path: string]: string } = {}
        for (const filename of Object.keys(rendered)) {
            const destPath = join(baseOutputPath, outputDirname, filename)
            result[destPath] = rendered[filename] + '\n' + append
            await this.write(result[destPath], baseOutputPath, join(outputDirname, filename))
        }

        return result
    }

    public getOutputPath(baseOutputPath: string, outputFilename: string): string {
        const filePath = join(this.data?.importName || this.packageName, outputFilename)
        const outputPath = join(baseOutputPath, filePath)
        return outputPath
    }

    /**
     * Writes the `content` to the filesystem
     * @param content The content (normally the content of a rendered template file) that should be written to the filesystem
     * @param baseOutputPath The base output directory path where the templates should be written to
     * @param outputFilename The filename of the output file
     * @returns
     */
    protected async write(content: string, baseOutputPath: string, outputFilename: string): Promise<string> {
        const outputPath = this.getOutputPath(baseOutputPath, outputFilename)

        // write template result file
        await mkdir(dirname(outputPath), { recursive: true })
        await writeFile(outputPath, content, { encoding: 'utf8', flag: 'w' })

        return Promise.resolve(outputPath)
    }

    /**
     *
     * @param templateString The template content string that should be rendered
     * @param options EJS options
     * @param overrideTemplateData Override template data if you want
     * @returns
     */
    protected async render(
        templateString: string,
        options: Partial<ejs.Options> = {},
        overrideTemplateData: TemplateData = {},
    ): Promise<string> {
        try {
            const renderedTpl = await ejs.render(
                templateString,
                {
                    ...this.config,
                    ...this.data,
                    packageName: this.packageName,
                    ...overrideTemplateData,
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
