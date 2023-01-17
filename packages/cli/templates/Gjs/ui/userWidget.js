<% if(moduleType === 'esm') { %>
    export imports.ui.userWidget;
<% } else { %>  
    module.exports = imports.ui.userWidget;
<% } %>
  