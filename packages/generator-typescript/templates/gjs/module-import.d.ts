<%#
    // This EJS template is used to extend the global GjsGiImports interface with the GIR module, for `imports.gi[namespace] GJS GIR types`
_%>
<%_ if(!dep.isLatestVersion(girModule.namespace, girModule.version)){ _%>
<%_ return `// Module import type definition not generated, otherwise this would cause a type conflict, this is because several GIR modules were generated with the same namespace: "${ girModule.namespace }"` _%>
<%_ } _%>

import <%= girModule.importNamespace %> from '<%= girModule.importPath %>';

declare global {
    export interface GjsGiImports {
        <%= name %>: typeof <%= girModule.importNamespace %>;
    }
}

export default GjsGiImports;
