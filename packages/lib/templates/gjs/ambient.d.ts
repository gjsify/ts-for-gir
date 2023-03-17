// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript
<%# This declares the module for TypeScript %>
<%_ if(moduleType === 'esm') { %>
  <%_ for (const girModuleGroup of girModulesGrouped) { _%>
    <%_ for (const [i, girModule] of girModuleGroup.modules.entries()) { _%>
      <%_ const pkg = dep.get(girModule.module.namespace, girModule.module.version) _%>
      declare module 'gi://<%= girModule.module.namespace %>?version=<%= girModule.module.version %>' {
        <%_ if(package){ _%>
          <%_ if(noNamespace){ _%>
            import type * as <%= girModule.module.importNamespace %> from '<%= pkg.importPath %>';
          <%_ } else { _%>
            import type <%= girModule.module.importNamespace %> from '<%= pkg.importPath %>';
          <%_ } _%>
        <%_ } else { _%>
            // Use import() to avoid `ts(2439)`: Import or export declaration in an ambient module declaration cannot reference module through relative module name.
          <%_ if(noNamespace){ _%>
            const <%= girModule.module.importNamespace %>: typeof import('<%= pkg.importPath %>');
          <%_ } else { _%>
            // However, this has the disadvantage that the module cannot be re-exported as a namespace,
            // so you need to use use the`typeof` operator in your code or alternatively make use of the `--generateAlias` or `--package` option instead
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
            import type * as <%= module.importNamespace %> from '<%= pkg.importPath %>';
          <%_ } else { _%>
            import type <%= module.importNamespace %> from '<%= pkg.importPath %>';
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