<%# This template is used for the generated `.js` file of each GIR module like Gtk-4.0, GObject-2.0, ... %>
<% if(moduleType === 'esm'){ %>
  // @ts-expect-error
  import <%= name %> from 'gi://<%= name %>?version=<%= version %>';
  export { <%= name %> };
  export default <%= name %>;
<% } else { %>
  imports.gi.versions.<%= name %> = '<%= version %>'
  const <%= name %> = imports.gi.<%= name %>;
  <% if(!noNamespace){ %>
    module.exports = { <%= name %> };
    exports.default = <%= name %>;
  <% } else { %>
    module.exports = <%= name %>;
  <% } %>
<% } %>

