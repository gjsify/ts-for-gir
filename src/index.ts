/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export * from './commands/generate'
export * from './commands/list'
export * from './types'
export * from './config'
export * from './generator'
export * from './gir-module'
export * from './module-loader'
export * from './symtable'
export * from './template-processor'
export * from './transformation'
export * from './utils'

import { Logger } from './logger'
import { run, Errors } from '@oclif/core'
import flush from '@oclif/core/flush'

export { run, flush, Logger }

if (require.main === module) {
    async function start() {
        try {
            await run()
        } catch (error: any) {
            if (error && error.oclif) {
                Errors.handle(error as Errors.CLIError)
            } else {
                Logger.error(error)
            }
        }
    }
    start()
}
