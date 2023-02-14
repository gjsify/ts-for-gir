<% if(moduleType === 'esm') { %>
    export imports.ui.modalDialog;
<% } else { %>  
    module.exports = imports.ui.modalDialog;
<% } %>
  