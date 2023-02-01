<% if(moduleType === 'esm') { %>
    export imports.ui.appMenu;
<% } else { %>  
    module.exports = imports.ui.appMenu;
<% } %>
  