/* eslint-disable @typescript-eslint/no-var-requires */
export * from './types'
export * from './transformation'
export * from './gir-module'
export * from './template-processor'
export * from './ts-for-gir'
export * from './utils'

export { run } from '@oclif/command'

if (require.main === module) {
    // If we don't catch exceptions, stdout gets truncated
    try {
        require('@oclif/command')
            .run()
            .then(require('@oclif/command/flush'))
            .catch(require('@oclif/errors/handle'))
    } catch (ex) {
        console.log(ex.stack)
    }
}
