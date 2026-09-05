// @ts-nocheck
// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript
//
// The scope is the CONFIGURED one, never the literal `@girs`: with `--npmScope` or `--bundle`
// this file is part of a package that is not `@girs/gjs`, and a hardcoded specifier makes it
// reach back into the published packages instead. That is not a cosmetic mismatch — it drags a
// second copy of GJS, GLib and GObject into the program, and every ambient declaration they
// share is then declared twice.

declare module 'gettext' {
    export * from '<%- npmScope %>/gjs/gettext'
    import Gettext from '<%- npmScope %>/gjs/gettext'
    export default Gettext
}

declare module 'system' {
    export * from '<%- npmScope %>/gjs/system'
    import System from '<%- npmScope %>/gjs/system'
    export default System
}

declare module 'cairo' {
    import Cairo from '<%- npmScope %>/gjs/cairo'
    export default Cairo
}

declare module 'console' {
    import Console, { setConsoleLogDomain, getConsoleLogDomain, DEFAULT_LOG_DOMAIN } from '<%- npmScope %>/gjs/console'
    export { setConsoleLogDomain, getConsoleLogDomain, DEFAULT_LOG_DOMAIN }
    export default Console
}

declare module 'gi' {
    import Gi, { require } from '<%- npmScope %>/gjs/gi'
    export { require }
    export default Gi
}
