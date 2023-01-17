<% if(moduleType === 'esm') { %>
    export imports.misc.gnomeSession;
<% } else { %>  
    module.exports = imports.misc.gnomeSession;
<% } %>
  