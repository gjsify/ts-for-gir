<% if(moduleType === 'esm') { %>
    export imports.ui.appDisplay;
<% } else { %>  
    module.exports = imports.ui.appDisplay;
<% } %>
  