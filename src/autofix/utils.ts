/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import chalk from 'chalk'
import type {
    CreateProgramOptions,
    Program,
    Diagnostic,
    SourceFile,
    CompilerOptions,
    CompilerHost,
    CancellationToken,
    CodeFixAction,
} from 'typescript'
import typescript from 'typescript'

/**
 * Set up necessary TS dependencies for generating diagnostics and finding fixes.
 */
export function createTsProject(compilerOptions: CompilerOptions = {}, rootNames: string[] = []) {
    const host = typescript.createCompilerHost(compilerOptions)

    const programOptions: CreateProgramOptions = {
        rootNames,
        options: compilerOptions,
        host: host,
    }
    const program = typescript.createProgram(programOptions)

    const formatContext = (typescript as any).formatting.getFormatContext({}, host)

    return { program, host, formatContext }
}

/**
 * Run the TypeScript compiler on a given program to find any diagnostics (errors)
 * and then group them by source file.
 */
export function getDiagnosticsByFile(program: Program): Map<string, Diagnostic[]> {
    console.log('Running TypeScript compiler to get diagnostics')
    const diagnostics = typescript.getPreEmitDiagnostics(program)

    const diagnosticsByFile = new Map<string, Diagnostic[]>()
    for (const diag of diagnostics) {
        if (!diag.file) continue
        if (!diagnosticsByFile.has(diag.file.fileName)) {
            diagnosticsByFile.set(diag.file.fileName, [])
        }
        diagnosticsByFile.get(diag.file.fileName)?.push(diag)
    }

    return diagnosticsByFile
}

/**
 * Find any available automatic codefixes for a given TS error
 */
export function getCodeFixes(
    diag: Diagnostic,
    sourceFile: SourceFile,
    program: Program,
    host: CompilerHost,
    formatContext: any,
) {
    const cancellationToken: CancellationToken = {
        isCancellationRequested: () => false,
        throwIfCancellationRequested: () => {
            /**/
        },
    }

    if (!diag.start || !diag.length) {
        console.error('Missing diagnostic data!')
        return []
    }

    // Directly call into ts.codefix which is what the language service uses.
    // Calling this directly is much faster as the language service reloads the whole
    // project first, but we know it hasn't changed.
    const fixActions = (typescript as any).codefix.getFixes({
        errorCode: diag.code,
        sourceFile: sourceFile,
        span: typescript.createTextSpanFromBounds(diag.start, diag.start + diag.length),
        program,
        host,
        formatContext,
        preferences: {},
        cancellationToken,
    }) as CodeFixAction[]
    return fixActions
}

/**
 * A helper util to log about actions taken to resolve a TS error
 */
export function logDiagAction(action: string, diag: Diagnostic, reason: string, host: CompilerHost, indent = '  ') {
    console.log(
        `${indent}${action} ${chalk.gray(typescript.formatDiagnostic(diag, host).trim())}\n${indent}  ${reason}\n`,
    )
}
