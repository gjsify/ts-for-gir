<%_ const pkg = dep.get(girModule.namespace, girModule.version) _%>
<%_ let moduleImportStr = ""; _%>
<%_ if(package){ _%>
    <%_ if(noNamespace){ _%>
        <%_ moduleImportStr = `import * as ${girModule.importNamespace} from '${pkg.importPath}'`; _%>
    <%_ } else { _%>
        <%_ moduleImportStr = `import ${girModule.importNamespace} from '${pkg.importPath}'`; _%>
    <%_ } _%>
<%_ } else { _%>
    <%_ if(noNamespace){ _%>
        <%_ moduleImportStr = `type ${girModule.importNamespace} = typeof import('${pkg.importPath}')`; _%>
    <%_ } else { _%>
        <%_ moduleImportStr = `type ${girModule.importNamespace} = typeof import('${pkg.importPath}').default`; _%>
    <%_ } _%>
<%_ } _%>


declare module 'gi://<%= name %>?version=<%= version %>' {
    <%- moduleImportStr %>;
    export default <%- girModule.importNamespace -%>;
}

// declare module 'gi://<%= name %>' {
//     <%- moduleImportStr %>;
//     export default <%- girModule.importNamespace -%>;
// }

