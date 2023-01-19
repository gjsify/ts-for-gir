<% if(moduleType === 'esm') { %>
    export imports.ui.popupMenu;
<% } else { %>  
    module.exports = imports.ui.popupMenu;
<% } %>
  