<% if(moduleType === 'esm') { %>
    export imports.ui.messageList;
<% } else { %>  
    module.exports = imports.ui.messageList;
<% } %>
  