/* eslint-disable @typescript-eslint/no-var-requires */
import * as SegfaultHandler from 'segfault-handler'
SegfaultHandler.registerHandler('crash.log')
import 'source-map-support/register'
export * from './commands/generate'
export * from './commands/list'
export * from './types'
export * from './config'
export * from './generator'
export * from './gir-module'
export * from './logger'
export * from './module-loader'
export * from './template-processor'
export * from './transformation'
export * from './utils'

import { run } from '@oclif/command'
import flush from '@oclif/command/flush'

export { run, flush }

if (require.main === module) {
    // If we don't catch exceptions, stdout gets truncated
    try {
        const start = run() as Promise<void>
        start.then(flush).catch((error: any) => {
            if (error && error.oclif && typeof error.oclif.exit === 'number' && error.oclif.exit !== 0) {
                console.log('error', error)
            }
            require('@oclif/errors/handle')(error)
        })
    } catch (ex) {
        console.error(ex)
    }
}
