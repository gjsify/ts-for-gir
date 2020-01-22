export * from './types'
export * from './conversations'
export * from './gir-module'
export * from './template-processor'
export * from './ts-for-gir'

if (require.main === module) {
    // If we don't catch exceptions, stdout gets truncated
    try {
        require('./cli')
    } catch (ex) {
        console.log(ex.stack)
    }
}
