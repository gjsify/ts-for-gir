<% if(moduleType === 'esm'){ %>
    import gi from 'node-gtk';
    const { require: giRequire } = gi;
    const <%= name %> = giRequire('<%= name %>', '<%= version %>');
    export { <%= name %> };
    export default <%= name %>;
<% } else { %>  
    const { require: giRequire } = require('node-gtk');
    const <%= name %> = giRequire('<%= name %>', '<%= version %>');
    <% if(!noNamespace){ %>
        module.exports = { <%= name %> };
        exports.default = <%= name %>;
    <% } else { %>  
        module.exports = <%= name %>;
    <% } %>
<% } %>


