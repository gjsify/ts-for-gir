// @ts-nocheck
// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript

declare module 'gettext' {
    export * from '@girs/gjs/gettext'
    import Gettext from '@girs/gjs/gettext'
    export default Gettext
}

declare module 'system' {
    export * from '@girs/gjs/system'
    import System from '@girs/gjs/system'
    export default System
}

declare module 'cairo' {
    import Cairo from '@girs/gjs/cairo'
    export default Cairo
}

declare module 'console' {
    import Console, { setConsoleLogDomain, getConsoleLogDomain, DEFAULT_LOG_DOMAIN } from '@girs/gjs/console'
    export { setConsoleLogDomain, getConsoleLogDomain, DEFAULT_LOG_DOMAIN }
    export default Console
}
