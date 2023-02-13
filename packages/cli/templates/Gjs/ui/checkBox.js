<% if(moduleType === 'esm') { %>
    export imports.ui.checkBox;
<% } else { %>  
    module.exports = imports.ui.checkBox;
<% } %>
