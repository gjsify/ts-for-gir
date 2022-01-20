<% if(moduleType === 'esm'){ %>
import <%= name %> from 'gi://<%= name %>?version=<%= version %>';
export { <%= name %> };
export default <%= name %>;
<% } else { %>  
imports.gi.versions.<%= name %> = '<%= version %>'
const <%= name %> = imports.gi.<%= name %>;
  <% if(useNamespace){ %>
module.exports = { <%= name %> };
exports.default = <%= name %>;
  <% } else { %>  
module.exports = <%= name %>;
  <% } %>
<% } %>

