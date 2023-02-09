<% if(moduleType === 'esm') { %>
    export imports.ui.boxpointer;
<% } else { %>  
    module.exports = imports.ui.boxpointer;
<% } %>
