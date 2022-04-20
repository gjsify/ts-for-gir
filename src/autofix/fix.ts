import type { TextChange, Diagnostic, SourceFile, CompilerOptions, CodeFixAction } from 'typescript'
import chalk from 'chalk'
import { createTsProject, getCodeFixes, getDiagnosticsByFile, logDiagAction } from './utils.js'
import { writeFileSync } from 'fs'

export type TsAutoFixOptions = {
    /**
     * Optional overrides for the compilerOptions section of tsconfig.json
     */
    compilerOptionsOverrides?: CompilerOptions

    /**
     * Optionally filter which diagnostics/errors are considered for fixes.
     */
    diagnosticsFilter?: (diagnostic: Diagnostic) => boolean

    /**
     * Optionally filter which codefixes are applied.
     */
    codeFixFilter?: (codeFixAction: CodeFixAction) => boolean

    /**
     * Intercept file changes before they are applied and either modify or skip them.
     * Return the text changes which should be applied. Do not modify sourceFile or diagnostic.
     */
    preprocessCodeChanges?: (changes: TextChange[], sourceFile: SourceFile, diagnostic: Diagnostic) => TextChange[]

    rootNames: string[]
}

/**
 * Automatically fix TS compiler errors using the built in TS codefixes.
 * @param options
 */
export function tsAutoFix(options: TsAutoFixOptions) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { program, host, formatContext } = createTsProject(options.compilerOptionsOverrides, options.rootNames)
    const diagnosticsByFile = getDiagnosticsByFile(program)

    // Go through file by file
    // eslint-disable-next-line prefer-const
    for (let [fileName, diagnostics] of diagnosticsByFile) {
        if (options.diagnosticsFilter !== undefined) {
            diagnostics = diagnostics.filter(options.diagnosticsFilter)
            if (diagnostics.length === 0) continue
        }

        console.log(chalk.green(`Processing code fixes for ${fileName}`))

        const sourceFile = program.getSourceFile(fileName) as SourceFile

        const fileChanges: TextChange[] = []
        const posWithFixes = new Set<number>()
        for (const diag of diagnostics) {
            // Print error messages for debugging
            if (typeof diag.messageText === 'string') {
                console.debug(diag.messageText)
            } else {
                console.debug(diag.messageText.messageText)
                if (diag.messageText.next) {
                    for (const next of diag.messageText.next) {
                        console.debug(next)
                    }
                }
            }

            if (diag.start && posWithFixes.has(diag.start)) {
                logDiagAction('Skipping', diag, 'because a fix is already being applied at this location.', host)

                continue
            }

            let fixActions = getCodeFixes(diag, sourceFile, program, host, formatContext)

            if (options.codeFixFilter) {
                fixActions = fixActions.filter(options.codeFixFilter)
            }

            if (fixActions.length > 0) {
                if (fixActions.length > 1) {
                    const pos = diag.start !== undefined ? diag.start.toString() : '?'
                    console.log(
                        chalk.yellow(
                            `  Found multiple matching actions for error TS${diag.code} at pos ${pos}. Only one will be applied.`,
                        ),
                    )
                }

                const action = fixActions[0]
                for (const c of action.changes) {
                    let textChanges = [...c.textChanges]
                    if (options.preprocessCodeChanges) {
                        textChanges = options.preprocessCodeChanges(textChanges, sourceFile, diag)
                    }
                    if (textChanges && textChanges.length) {
                        logDiagAction('Fixing', diag, `using ${action.fixName}: ${action.description}`, host)

                        fileChanges.push(...textChanges)
                        if (diag.start) {
                            posWithFixes.add(diag.start)
                        }
                    }
                }
            }
        }

        // Apply fixes in descending order so we don't mess up positions for the next fixes.
        fileChanges.sort((a, b) => b.span.start - a.span.start)
        let content = sourceFile.text
        let lastChangeStartPos = content.length
        for (const change of fileChanges) {
            const { start, length } = change.span
            if (start + length > lastChangeStartPos) {
                console.log(
                    chalk.yellow(
                        `  Skipping overlapping change at pos ${start}-${
                            start + length
                        }. Check code correctness manually and re-run if to apply skipped fixes.`,
                    ),
                )
                continue
            }

            content = content.substring(0, start) + change.newText + content.substring(start + length)
            lastChangeStartPos = start
        }
        writeFileSync(fileName, content)
    }
}
