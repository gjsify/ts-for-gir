/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export * from './commands/generate'
export * from './commands/list'
export * from './types'
export * from './config'
export * from './generator'
export * from './gir-module'
export * from './logger'
export * from './module-loader'
export * from './symtable'
export * from './template-processor'
export * from './transformation'
export * from './utils'

import { run } from '@oclif/core'
import flush from '@oclif/core/flush'

export { run, flush }

if (require.main === module) {
    // If we don't catch exceptions, stdout gets truncated
    try {
        const start = run() as Promise<void>
        start.then(flush).catch((error: any) => {
            if (error && error.oclif && typeof error.oclif.exit === 'number' && error.oclif.exit !== 0) {
                console.log('error', error)
            }
            // eslint-disable-next-line
            require('@oclif/errors/handle')(error)
        })
    } catch (ex) {
        console.error(ex)
    }
}
