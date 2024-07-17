<%# This EJS template is used for the generated index.js file of each GIR module like Gtk-4.0, GObject-2.0, ... %>
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `<%= APP_NAME %>` or create a bug report on <%= APP_SOURCE %>
 */

import './<%= importName %>-ambient.js';
<%# Only define the import type definition if the module has no version conflict %>
<%_ if(typeof girModule !== 'undefined' && dep.isLatestVersion(girModule.namespace, girModule.version)){ _%>
import './<%= importName %>-import.js';
<%_ } _%>

<%_ if(noNamespace){ _%>
import * as <%= name %> from './<%= importName %>.js';
<%_ } else { _%>
import <%= name %> from './<%= importName %>.js';
<%_ } _%>
export default <%= name %>;