<% if(moduleType === 'esm'){ %>
    import { require as giRequire } from 'node-gtk';
    const <%= importName %> = giRequire('<%= name %>', '<%= version %>');
    export { <%= importName %> };
    export default <%= importName %>;
<% } else { %>  
    const { require: giRequire } = require('node-gtk');
    const <%= importName %> = giRequire('<%= name %>', '<%= version %>');
    module.exports = <%= importName %>;
    exports.default = <%= importName %>;
<% } %>