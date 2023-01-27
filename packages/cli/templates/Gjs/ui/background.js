<% if(moduleType === 'esm') { %>
    export imports.ui.background;
<% } else { %>  
    module.exports = imports.ui.background;
<% } %>
