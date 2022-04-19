<% if(moduleType === 'esm') { %>
  export const byteArray = imports.byteArray;
  export const Lang = imports.lang;
  export const Format = imports.format;
  export const Mainloop = imports.mainloop;
  export const gettext = imports.gettext;
  export const System = imports.system;
  export const Signals = imports.signals;
<% } else { %>  
  module.exports = {
    byteArray: imports.byteArray,
    Lang: imports.lang,
    Format: imports.format,
    Mainloop: imports.mainloop,
    gettext: imports.gettext,
    System: imports.system,
    Signals: imports.signals,
  }
<% } %>