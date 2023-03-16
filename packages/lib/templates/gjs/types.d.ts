<%# TODO currently not used %>
<%# This declares the module for TypeScript %>
<%_ if(moduleType === 'esm') { %>
  <%_ for (const girModuleGroup of girModulesGrouped) { _%>
    <%_ for (const [i, girModule] of girModuleGroup.modules.entries()) { _%>

      <%_ const pkg = dep.get(girModule.namespace, girModule.version) _%>
      <%_ if(noNamespace){ _%>
          import type * as <%= girModule.importNamespace %> from '<%= pkg.importPath %>';
      <%_ } else { _%>
          import type <%= girModule.importNamespace %> from '<%= pkg.importPath %>';
      <%_ } _%>

      declare module 'gi://<%= girModule.module.namespace %>?version=<%= girModule.module.version %>' {
        export default <%- girModule.module.importNamespace -%>;
      }
    <%_ } _%>
    <%_ if (girModuleGroup.modules.length === 1) { _%>
      <%_ const girModule = girModuleGroup.modules[0].module _%>
      declare module 'gi://<%= girModule.namespace %>' {
        export default <%- girModule.importNamespace %>;
      }
    <%_ } _%>
  <%_ } _%>
<%_ } _%>