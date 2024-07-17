// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript

declare module 'gettext' {
  const Gettext: typeof import('./gettext.js').default
  export default Gettext;

  export type LocaleCategory = typeof import('./gettext.js').LocaleCategory
  export type textdomain = typeof import('./gettext.js').textdomain
  export type bindtextdomain = typeof import('./gettext.js').bindtextdomain
  export type gettext = typeof import('./gettext.js').gettext
  export type dgettext = typeof import('./gettext.js').dgettext
  export type dcgettext = typeof import('./gettext.js').dcgettext
  export type ngettext = typeof import('./gettext.js').ngettext
  export type dngettext = typeof import('./gettext.js').dngettext
  export type pgettext = typeof import('./gettext.js').pgettext
  export type dpgettext = typeof import('./gettext.js').dpgettext
  export type domain = typeof import('./gettext.js').domain
  export type Gettext = typeof import('./gettext.js').Gettext
}

declare module 'system' {
  const System: typeof import('./system.js').default
  export default System;

  export type programInvocationName = typeof import('./system.js').programInvocationName
  export type version = typeof import('./system.js').version
  export type programPath = typeof import('./system.js').programPath
  export type programArgs = typeof import('./system.js').programArgs
  export type addressOf = typeof import('./system.js').addressOf
  export type addressOfGObject = typeof import('./system.js').addressOfGObject
  export type breakpoint = typeof import('./system.js').breakpoint
  export type clearDateCaches = typeof import('./system.js').clearDateCaches
  export type gc = typeof import('./system.js').gc
  export type refcount = typeof import('./system.js').refcount
  export type dumpHeap = typeof import('./system.js').dumpHeap
  export type dumpMemoryInfo = typeof import('./system.js').dumpMemoryInfo
  export type exit = typeof import('./system.js').exit  
}

declare module 'cairo' {
  const Cairo: typeof import('./cairo.js').default
  export default Cairo;
}