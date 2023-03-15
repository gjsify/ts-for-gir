<% if(moduleType === 'esm') { %>
    export imports.ui.panelMenu;
<% } else { %>  
    module.exports = imports.ui.panelMenu;
<% } %>
  