export * from './types'
export * from './transformation'
export * from './gir-module'
export * from './template-processor'
export * from './ts-for-gir'
export * from './utils'

if (require.main === module) {
    // If we don't catch exceptions, stdout gets truncated
    try {
        require('./cli')
    } catch (ex) {
        console.log(ex.stack)
    }
}
