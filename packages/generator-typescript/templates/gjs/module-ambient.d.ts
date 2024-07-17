<%#
    // This EJS template is used for the generated .d.ts files for ambient typescript module support.
    // See https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
_%>

declare module 'gi://<%= name %>?version=<%= version %>' {
    import <%= girModule.importNamespace %> from '<%= girModule.importPath -%>';
    export default <%- girModule.importNamespace -%>;
}

<%# // Generate ambient module declarations without version number only if onlyVersionPrefix is false _%>
<%_ if (!onlyVersionPrefix) { _%>
declare module 'gi://<%= name %>' {
    import <%= girModule.importNamespace %> from 'gi://<%= name %>?version=<%= version %>';
    export default <%- girModule.importNamespace -%>;
}
<%_ } _%>
