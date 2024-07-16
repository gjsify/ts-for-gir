<%#
    // This EJS template is used for the generated .d.ts files for ambient typescript module support.
    // See https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
_%>
<%_ let moduleImportStr = ""; _%>
<%_ if(noNamespace){ _%>
    <%_ moduleImportStr = `import * as ${girModule.namespace} from './${importName}.d.ts'`; _%>
<%_ } else { _%>
    <%_ moduleImportStr = `import ${girModule.namespace} from './${importName}.d.ts'`; _%>
<%_ } _%>

declare module 'gi://<%= name %>?version=<%= version %>' {
    <%- moduleImportStr %>;
    export default <%- girModule.namespace -%>;
}

<%# // Generate ambient module declarations without version number only if onlyVersionPrefix is false _%>
<%_ if (!onlyVersionPrefix) { _%>
declare module 'gi://<%= name %>' {
    import <%- girModule.importNamespace -%> from 'gi://<%= name %>?version=<%= version %>';
    export default <%- girModule.importNamespace -%>;
}
<%_ } _%>
