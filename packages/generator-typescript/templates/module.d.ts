<%_ if(!package){ -%>
    <%_ girModule.transitiveDependencies.forEach(dependency => { -%>
        <%_ if (girModule.packageName !== dependency.packageName) { -%>
            <%_ if (dependency.exists) { -%>
                /// <reference path="./<%- dependency.importName %>.d.ts" />
                <%_ if (dependency.packageName === 'cairo-1.0') { -%>
                    /// <reference path="./cairo.d.ts" />
                <%_ } -%>
            <%_ } -%>
        <%_ } -%>
    <%_ }) -%>
<% } -%>

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `<%- APP_NAME %>` or create a bug report on <%- APP_SOURCE %>
 * 
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

<%_ if(!package){ -%>
    declare module 'gi://<%- girModule.namespace %>?version=<%- girModule.version %>' {
<% } -%>

<%_ if(!package){ -%>
    <%_ const Gjs = await dep.getGjs() -%>
    import '<%- Gjs.importPath %>';
<% } -%>

// Module dependencies
<%_ girModule.transitiveDependencies.forEach(dependency => { -%>
    <%_ if (girModule.packageName !== dependency.packageName) { -%>
        <%_ if (dependency.exists) { -%>
            <%_ if (girModule.hasSymbol(dependency.namespace)) { -%>
                <%_ if (noNamespace) { -%>
                    import * as <%- dependency.namespace %>__ from '<%- dependency.importPath %>';
                <%_ } else { %>
                    import <%- dependency.namespace %>__ from '<%- dependency.importPath %>';
                <%_ } -%>
            <%_ } else { -%>
                <%- dependency.importDef %>
            <%_ } -%>
        <%_ } else { -%>
            // WARN: Dependency not found: '<%- dependency.packageName %>'
        <%_ } -%>
    <%_ } -%>
<%_ }) -%>

<%_ if(!noNamespace){ -%>
    export namespace <%- girModule.namespace %> {
<% } -%>
