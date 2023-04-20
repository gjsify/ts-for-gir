// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript
<%# /* This declares the ambient modules for TypeScript */ %>
<%_ if(moduleType === 'esm') { %>
  <%_ for (const girModuleGroup of girModulesGrouped) { _%>
    <%_ for (const [i, girModule] of girModuleGroup.modules.entries()) { _%>
      <%_ const pkg = dep.get(girModule.module.namespace, girModule.module.version) _%>
      declare module 'gi://<%= girModule.module.namespace %>?version=<%= girModule.module.version %>' {
        <%_ if(package){ _%>
          <%_ if(noNamespace){ _%>
            import * as <%= girModule.module.importNamespace %> from '<%= pkg.importPath %>';
          <%_ } else { _%>
            import <%= girModule.module.importNamespace %> from '<%= pkg.importPath %>';
          <%_ } _%>
        <%_ } else { _%>
          // Use `import()` to avoid `ts(2439)`: Import or export declaration in an ambient module declaration cannot reference module through relative module name.*/ %>
          <%_ if(noNamespace){ _%>
            const <%= girModule.module.importNamespace %>: typeof import('<%= pkg.importPath %>');
          <%_ } else { _%>
            // However, this has the disadvantage that the module cannot be re-exported as a namespace,
            // so you need to use use the `typeof` operator in your code or alternatively make use of the `--generateAlias` or `--package` option instead
            const <%= girModule.module.importNamespace %>: typeof import('<%= pkg.importPath %>').default;
          <%_ } _%>
        <%_ } _%>
        export default <%- girModule.module.importNamespace -%>;
      }
    <%_ } _%>
    <%_ if (girModuleGroup.modules.length === 1) { _%>
      <%_ const module = girModuleGroup.modules[0].module _%>
      <%_ const pkg = dep.get(module.namespace, module.version) _%>
      // Add support for ESM imports without version prefix only if there is no version conflict
      declare module 'gi://<%= module.namespace %>' {
        <%_ if(package){ _%>
          <%_ if(noNamespace){ _%>
            import * as <%= module.importNamespace %> from '<%= pkg.importPath %>';
          <%_ } else { _%>
            import <%= module.importNamespace %> from '<%= pkg.importPath %>';
          <%_ } _%>
        <%_ } else { _%>
          <%_ if(noNamespace){ _%>
            const <%= module.importNamespace %>: typeof import('<%= pkg.importPath %>');
          <%_ } else { _%>
            const <%= module.importNamespace %>: typeof import('<%= pkg.importPath %>').default;
          <%_ } _%>
        <%_ } _%>
        export default <%- module.importNamespace %>;
      }
    <%_ } _%>
  <%_ } _%>
<%_ } _%>

declare module 'gettext' {
  <%_ if(package){ _%>
  export * from '@girs/gjs/gettext';
  import Gettext from '@girs/gjs/gettext';
  export default Gettext;
  <%_ } else { _%>
  const Gettext: typeof import('./gettext.js').default;
  export default Gettext;

  export const LocaleCategory: typeof import('./gettext.js').LocaleCategory;
  export const setlocale: typeof import('./gettext.js').setlocale;
  export const textdomain: typeof import('./gettext.js').textdomain;
  export const bindtextdomain: typeof import('./gettext.js').bindtextdomain;
  export const gettext: typeof import('./gettext.js').gettext;
  export const dgettext: typeof import('./gettext.js').dgettext;
  export const dcgettext: typeof import('./gettext.js').dcgettext;
  export const ngettext: typeof import('./gettext.js').ngettext;
  export const dngettext: typeof import('./gettext.js').dngettext;
  export const pgettext: typeof import('./gettext.js').pgettext;
  export const dpgettext: typeof import('./gettext.js').dpgettext;
  export const domain: typeof import('./gettext.js').domain;
  <%_ } _%>
}

declare module 'system' {
  <%_ if(package){ _%>
  export * from '@girs/gjs/system';
  import System from '@girs/gjs/system';
  export default System;
  <%_ } else { _%>
  const System: typeof import('./gettext.js').default;
  export default System;

  export const programInvocationName: typeof import('./system.js').programInvocationName;
  export const version: typeof import('./system.js').version;
  export const programPath: typeof import('./system.js').programPath;
  export const programArgs: typeof import('./system.js').programArgs;
  export const exit: typeof import('./system.js').exit;
  export const addressOfGObject: typeof import('./system.js').addressOfGObject;
  export const addressOf: typeof import('./system.js').addressOf;
  export const gc: typeof import('./system.js').gc;
  export const refcount: typeof import('./system.js').refcount;
  export const dumpHeap: typeof import('./system.js').dumpHeap;
  export const dumpMemoryInfo: typeof import('./system.js').dumpMemoryInfo;
  <%_ } _%>
}

declare module 'cairo' {
  <%_ if(package){ _%>
  import Cairo from '@girs/gjs/cairo';
  export default Cairo;
  <%_ } else { _%>
  const Cairo: typeof import('./cairo.js').default;
  export default Cairo;
  <%_ } _%>
}