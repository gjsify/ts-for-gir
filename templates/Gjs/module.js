<% if(exportDefault){ %>
    import <%= name %> from 'gi://<%= name %>?version=<%= version %>';
    export { <%= name %> };
    export default <%= name %>;
  <% } else{ %>  
    imports.gi.versions.<%= name %> = '<%= version %>'
    const <%= name %> = imports.gi.<%= name %>;
    module.exports = <%= name %>;
    exports.default = <%= name %>;
<% } %>

