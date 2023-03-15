<% if(moduleType === 'esm') { %>
    export imports.ui.accessDialog;
<% } else { %>  
    module.exports = imports.ui.accessDialog;
<% } %>
  