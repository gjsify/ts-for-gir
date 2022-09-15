/**
 * A logger that displays information in different colors on the console.
 * In addition, the environment or the module currently being processed is also included as prepended to the logging string
 */

import { blue, yellow, yellowBright, green, red, white } from 'colorette'
import { Environment } from './types/index.js'

export class Logger {
    constructor(
        private readonly environment: Environment | '',
        private readonly verbose: boolean,
        private readonly moduleName: string,
    ) {}
    private static prepend(args: unknown[], prepend: string): unknown[] {
        if (typeof args[0] === 'string') {
            args[0] = `${prepend}${args[0]}`
        }
        return args
    }
    /**
     * Returns something like '[node][Gda-5.0] Could not find type 'Gda.SqlExpr' for 'expr''
     * @param args
     * @param logLevel
     */
    private prependInfos(args: unknown[], logLevel?: 'WARN:' | 'ERROR:' | 'INFO:' | 'DEBUG:'): unknown[] {
        if (logLevel || this.moduleName.length > 0 || this.environment.length > 0) {
            args = Logger.prepend(args, ' ')
        }
        if (logLevel) {
            if (this.moduleName.length > 0 || this.environment.length > 0) {
                args = Logger.prepend(args, ' ' + logLevel)
            } else {
                args = Logger.prepend(args, logLevel)
            }
        }
        if (this.moduleName.length > 0) {
            args = Logger.prepend(args, `[${this.moduleName}]`)
        }
        if (this.environment.length > 0) {
            args = Logger.prepend(args, `[${this.environment}]`)
        }

        return args
    }

    public log(...args: unknown[]): void {
        if (!this.verbose) {
            return
        }
        return console.log(...args)
    }
    public dir(...args: unknown[]): void {
        if (!this.verbose) {
            return
        }
        args.forEach((arg) => {
            console.dir(arg)
        })
        return
    }
    public info(txt: string | number, ...args: unknown[]): void {
        if (!this.verbose) {
            return
        }
        return console.info(blue(txt), ...args)
    }
    public warn(txt: string | number, ...args: unknown[]): void {
        if (!this.verbose) {
            return
        }
        args = this.prependInfos([txt], 'WARN:')
        return console.warn(yellow(txt), ...args)
    }
    public debug(txt: string | number, ...args: unknown[]): void {
        if (!this.verbose) {
            return
        }
        args = this.prependInfos([txt], 'DEBUG:')
        return console.debug(yellowBright(txt), ...args)
    }
    public error(txt: string | number, ...args: unknown[]): void {
        args = this.prependInfos([txt], 'ERROR:')
        return this.danger(txt, args)
    }
    public success(txt: string | number, ...args: unknown[]): void {
        if (!this.verbose) {
            return
        }
        this.log(green(txt), ...args)
    }
    public danger(txt: string | number, ...args: unknown[]): void {
        this.log(red(txt), ...args)
    }

    // Static versions (Here it must be ensured that Verbose is activated)
    public static log(...args: unknown[]): void {
        return console.log(...args)
    }
    public static dir(...args: unknown[]): void {
        args.forEach((arg) => {
            console.dir(arg)
        })
        return
    }
    public static info(txt: string | number, ...args: unknown[]): void {
        ;[txt, ...args] = this.prepend([txt, ...args], 'INFO: ') as [string, ...unknown[]]
        return console.info(blue(txt), ...args)
    }
    public static warn(txt: string | number, ...args: unknown[]): void {
        ;[txt, ...args] = this.prepend([txt, ...args], 'WARN: ') as [string, ...unknown[]]
        return console.warn(yellow(txt), ...args)
    }
    public static debug(txt: string | number, ...args: unknown[]): void {
        ;[txt, ...args] = this.prepend([txt, ...args], 'DEBUG: ') as [string, ...unknown[]]
        return console.debug(yellowBright(txt), ...args)
    }
    public static error(txt: string | number, ...args: unknown[]): void {
        ;[txt, ...args] = this.prepend([txt, ...args], 'ERROR: ') as [string, ...unknown[]]
        return this.danger(txt, args)
    }
    public static success(txt: string | number, ...args: unknown[]): void {
        this.log(green(txt), ...args)
    }
    public static danger(txt: string | number, ...args: unknown[]): void {
        this.log(red(txt), ...args)
    }
    public static white(txt: string | number, ...args: unknown[]): void {
        this.log(white(txt), ...args)
    }
    public static yellow(txt: string | number, ...args: unknown[]): void {
        this.log(yellow(txt), ...args)
    }
}
