<% if(moduleType === 'esm') { %>
    export imports.misc.extensionUtils;
<% } else { %>  
    module.exports = imports.misc.extensionUtils;
<% } %>
  