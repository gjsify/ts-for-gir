<% if(moduleType === 'esm') { %>
    export imports.ui.backgroundMenu;
<% } else { %>  
    module.exports = imports.ui.backgroundMenu;
<% } %>
