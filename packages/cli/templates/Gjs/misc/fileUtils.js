<% if(moduleType === 'esm') { %>
    export imports.misc.fileUtils;
<% } else { %>  
    module.exports = imports.misc.fileUtils;
<% } %>
  