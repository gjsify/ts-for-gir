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

export { run } from '@oclif/command'

if (require.main === module) {
    // If we don't catch exceptions, stdout gets truncated
    try {
        require('@oclif/command')
            .run()
            .then(require('@oclif/command/flush'))
            .catch((error) => {
                console.log(error)
                require('@oclif/errors/handle')(error)
            })
    } catch (ex) {
        console.log(ex.stack)
    }
}
