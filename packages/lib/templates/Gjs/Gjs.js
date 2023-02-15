<% if(moduleType === 'esm') { %>
  export const byteArray = imports.byteArray;
  export const lang = imports.lang;
  export const format = imports.format;
  export const mainloop = imports.mainloop;
  export const gettext = imports.gettext;
  export const system = imports.system;
  export const signals = imports.signals;
  export const package = imports.package;
  export default {
    byteArray,
    lang,
    format,
    mainloop,
    gettext,
    system,
    signals,
    package
  }
<% } else { %>  
  module.exports = {
    byteArray: imports.byteArray,
    lang: imports.lang,
    format: imports.format,
    mainloop: imports.mainloop,
    gettext: imports.gettext,
    system: imports.system,
    signals: imports.signals,
    package: imports.package
  }
<% } %>
