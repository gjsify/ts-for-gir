// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript
<%# This declares the module for TypeScript %>
<%_ if(moduleType === 'esm') { %>
  <%_ for (const girModuleGroup of girModulesGrouped) { _%>
    <%_ for (const [i, girModule] of girModuleGroup.modules.entries()) { _%>
      <%_ const pkg = dep.get(girModule.module.namespace, girModule.module.version) _%>
      declare module 'gi://<%= girModule.module.namespace %>?version=<%= girModule.module.version %>' {
        <%_ if(noNamespace){ _%>
          const <%= girModule.module.importNamespace %>: typeof import('<%= pkg.importPath %>').<%= pkg.namespace %>;
        <%_ } else { _%>
          const <%= girModule.module.importNamespace %>: typeof import('<%= pkg.importPath %>').default;
        <%_ } _%>
        export default <%- girModule.module.importNamespace -%>;
      }
    <%_ } _%>
    <%# Add support for ESM imports without version prefix only if there is no version conflict %>
    <%_ if (girModuleGroup.modules.length === 1) { _%>
      <%_ const module = girModuleGroup.modules[0].module _%>
      <%_ const pkg = dep.get(module.namespace, module.version) _%>
      declare module 'gi://<%= module.namespace %>' {
        <%_ if(noNamespace){ _%>
          const <%= module.importNamespace %>: typeof import('<%= pkg.importPath %>').<%= pkg.namespace %>;
        <%_ } else { _%>
          const <%= module.importNamespace %>: typeof import('<%= pkg.importPath %>').default;
        <%_ } _%>
        export default <%- module.importNamespace %>;
      }
    <%_ } _%>
  <%_ } _%>
<%_ } _%>