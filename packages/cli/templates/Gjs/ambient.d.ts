<% if(moduleType === 'esm'){ %>
declare module 'gi://<%= name %>' {
    import <%= name %> from '<%= name %>-<%= version%>';
    export default <%= name %>;
}

declare module 'gi://<%= name %>?version=<%= version %>' {
    import <%= name %> from '<%= name %>-<%= version%>';
    export default <%= name %>;
}
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

    