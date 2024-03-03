<%#
    // This EJS template is used for the generated .d.ts files for ambient typescript module support.
    // See https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
_%>
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
        <%_ moduleImportStr = `const ${girModule.importNamespace}: typeof import('${pkg.importPath}')`; _%>
    <%_ } else { _%>
        <%_ moduleImportStr = `const ${girModule.importNamespace}: typeof import('${pkg.importPath}').default`; _%>
    <%_ } _%>
<%_ } _%>

declare module 'gi://<%= name %>?version=<%= version %>' {
    <%- moduleImportStr %>;
    export default <%- girModule.importNamespace -%>;
}

<%# // Generate ambient module declarations Without version number if there are no conflicts or the target is an NPM package _%>
<%_ if(package && dep.isLatestVersion(pkg.namespace, pkg.version)){ _%>
declare module 'gi://<%= name %>' {
    <%- moduleImportStr %>;
    export default <%- girModule.importNamespace -%>;
}
<%_ } _%>