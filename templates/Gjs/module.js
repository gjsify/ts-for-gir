<% if(moduleType === 'esm'){ %>
import <%= importName %> from 'gi://<%= name %>?version=<%= version %>';
export { <%= importName %> };
export default <%= importName %>;
<% } else { %>  
imports.gi.versions.<%= name %> = '<%= version %>'
const <%= importName %> = imports.gi.<%= name %>;
  <% if(useNamespace){ %>
module.exports = { <%= importName %> };
exports.default = <%= importName %>;
  <% } else { %>  
module.exports = <%= importName %>;
  <% } %>
<% } %>

