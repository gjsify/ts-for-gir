<% if(moduleType === 'esm'){ %>
    import * as gi from 'node-gtk';
    export { gi };
    export default gi;
<% } else { %>  
    const gi = require('node-gtk');
    module.exports = gi;
    exports.default = gi;
<% } %>