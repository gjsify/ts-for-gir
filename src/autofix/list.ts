import type { SourceFile, CompilerOptions } from 'typescript'
import columnify from 'columnify'
import { createTsProject, getCodeFixes, getDiagnosticsByFile } from './utils.js'
import chalk from 'chalk'

export type TsListFixesOptions = {
    compilerOptionsOverrides?: CompilerOptions
    rootNames: string[]
}

type ListData = {
    count: number
    message: string
    fixName: string
    errorCode: string
}

const columnTitles = {
    fixName: 'Fix Name',
    count: 'Fix Count',
    errorCode: 'TS Error',
    message: 'Example Error Message',
}

/**
 * Typecheck the project, find all available fixes, and log a summary to console.
 * @param options
 */
export function listFixes(options: TsListFixesOptions) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { program, host, formatContext } = createTsProject(options.compilerOptionsOverrides, options.rootNames)

    const diagnosticsByFile = getDiagnosticsByFile(program)

    const fixInfo = new Map<string, ListData>()
    let totalDiagCount = 0
    let totalFixCount = 0

    for (const [fileName, diagnostics] of diagnosticsByFile) {
        const sourceFile = program.getSourceFile(fileName) as SourceFile

        totalDiagCount += diagnostics.length

        for (const diag of diagnostics) {
            const fixActions = getCodeFixes(diag, sourceFile, program, host, formatContext)

            totalFixCount += fixActions.length

            for (const action of fixActions) {
                const key = `${action.fixName}:${diag.code}`
                const listData = fixInfo.get(key)
                if (listData?.count) {
                    if (!listData.count) {
                        listData.count = 0
                    }
                    listData.count += 1
                } else {
                    fixInfo.set(key, {
                        count: 1,
                        message: diag.messageText.toString(),
                        fixName: action.fixName,
                        errorCode: `TS${diag.code}`,
                    })
                }
            }
        }
    }

    console.log(`Found ${totalDiagCount} diagnostics and ${totalFixCount} possible fixes.`)

    if (totalFixCount > 0) {
        console.log(
            `\n` +
                columnify(Array.from(fixInfo.values()), {
                    columns: ['fixName', 'count', 'errorCode', 'message'],
                    columnSplitter: '   ',
                    headingTransform: (heading: string) => {
                        return chalk.green(columnTitles[heading as keyof ListData])
                    },
                }),
        )
    }
}
