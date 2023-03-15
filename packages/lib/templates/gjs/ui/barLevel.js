<% if(moduleType === 'esm') { %>
    export imports.ui.barLevel;
<% } else { %>  
    module.exports = imports.ui.barLevel;
<% } %>
