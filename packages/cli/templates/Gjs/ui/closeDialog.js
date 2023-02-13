<% if(moduleType === 'esm') { %>
    export imports.ui.closeDialog;
<% } else { %>  
    module.exports = imports.ui.closeDialog;
<% } %>
