<%#
    This EJS template is used to extend the global GjsGiImports interface with the GIR module, for `imports.gi[namespace] GJS GIR types`
%>
<%_ if(!package && !dep.isLatestVersion(girModule.namespace, girModule.version)){ _%>
<%_ return `// Module import type definition not generated, otherwise this would cause a type conflict, this is because several GIR modules were generated with the same namespace: "${ girModule.namespace }"` _%>
<%_ } _%>

<%_ const pkg = dep.get(girModule.namespace, girModule.version) _%>
<%_ if(package){ _%>
    <%_ if(noNamespace){ _%>
import * as <%= girModule.importNamespace %> from '<%= pkg.importPath %>';
    <%_ } else { _%>
import <%= girModule.importNamespace %> from '<%= pkg.importPath %>';
    <%_ } _%>
<%_ } else { _%>
    <%_ if(noNamespace){ _%>
type <%= girModule.importNamespace %> = typeof import('<%= pkg.importPath %>');
    <%_ } else { _%>
type <%= girModule.importNamespace %> = typeof import('<%= pkg.importPath %>').default;
    <%_ } _%>
<%_ } _%>

declare global {
    export interface GjsGiImports {
        <%_ if(package){ _%>
        <%= name %>: typeof <%= girModule.importNamespace %>;
        <%_ } else { _%>
        <%= name %>: <%= girModule.importNamespace %>;
        <%_ } _%>
    }
}

export default GjsGiImports;
