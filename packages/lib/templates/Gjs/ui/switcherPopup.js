<% if(moduleType === 'esm') { %>
    export imports.ui.switcherPopup;
<% } else { %>  
    module.exports = imports.ui.switcherPopup;
<% } %>
  