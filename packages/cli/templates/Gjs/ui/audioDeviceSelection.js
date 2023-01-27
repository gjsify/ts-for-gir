<% if(moduleType === 'esm') { %>
    export imports.ui.audioDeviceSelection;
<% } else { %>  
    module.exports = imports.ui.audioDeviceSelection;
<% } %>
  