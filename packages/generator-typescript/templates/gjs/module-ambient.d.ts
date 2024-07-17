<%#
    // This EJS template is used for the generated .d.ts files for ambient typescript module support.
    // See https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
_%>

declare module 'gi://<%= name %>?version=<%= version %>' {
    const <%= girModule.importNamespace %>: typeof import('./<%= importName %>.js').default
    export default <%- girModule.importNamespace -%>;
}

<%# // Generate ambient module declarations without version number only if onlyVersionPrefix is false _%>
<%_ if (!onlyVersionPrefix) { _%>
declare module 'gi://<%= name %>' {
    const <%= girModule.importNamespace %>: typeof import('./<%= importName %>.js').default
    export default <%- girModule.importNamespace -%>;
}
<%_ } _%>
