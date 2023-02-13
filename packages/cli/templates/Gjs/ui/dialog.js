<% if(moduleType === 'esm') { %>
    export imports.ui.dialog;
<% } else { %>  
    module.exports = imports.ui.dialog;
<% } %>
  